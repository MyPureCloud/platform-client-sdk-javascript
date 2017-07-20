require=(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){

},{}],2:[function(require,module,exports){
'use strict'

exports.byteLength = byteLength
exports.toByteArray = toByteArray
exports.fromByteArray = fromByteArray

var lookup = []
var revLookup = []
var Arr = typeof Uint8Array !== 'undefined' ? Uint8Array : Array

var code = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/'
for (var i = 0, len = code.length; i < len; ++i) {
  lookup[i] = code[i]
  revLookup[code.charCodeAt(i)] = i
}

revLookup['-'.charCodeAt(0)] = 62
revLookup['_'.charCodeAt(0)] = 63

function placeHoldersCount (b64) {
  var len = b64.length
  if (len % 4 > 0) {
    throw new Error('Invalid string. Length must be a multiple of 4')
  }

  // the number of equal signs (place holders)
  // if there are two placeholders, than the two characters before it
  // represent one byte
  // if there is only one, then the three characters before it represent 2 bytes
  // this is just a cheap hack to not do indexOf twice
  return b64[len - 2] === '=' ? 2 : b64[len - 1] === '=' ? 1 : 0
}

function byteLength (b64) {
  // base64 is 4/3 + up to two characters of the original data
  return (b64.length * 3 / 4) - placeHoldersCount(b64)
}

function toByteArray (b64) {
  var i, l, tmp, placeHolders, arr
  var len = b64.length
  placeHolders = placeHoldersCount(b64)

  arr = new Arr((len * 3 / 4) - placeHolders)

  // if there are placeholders, only get up to the last complete 4 chars
  l = placeHolders > 0 ? len - 4 : len

  var L = 0

  for (i = 0; i < l; i += 4) {
    tmp = (revLookup[b64.charCodeAt(i)] << 18) | (revLookup[b64.charCodeAt(i + 1)] << 12) | (revLookup[b64.charCodeAt(i + 2)] << 6) | revLookup[b64.charCodeAt(i + 3)]
    arr[L++] = (tmp >> 16) & 0xFF
    arr[L++] = (tmp >> 8) & 0xFF
    arr[L++] = tmp & 0xFF
  }

  if (placeHolders === 2) {
    tmp = (revLookup[b64.charCodeAt(i)] << 2) | (revLookup[b64.charCodeAt(i + 1)] >> 4)
    arr[L++] = tmp & 0xFF
  } else if (placeHolders === 1) {
    tmp = (revLookup[b64.charCodeAt(i)] << 10) | (revLookup[b64.charCodeAt(i + 1)] << 4) | (revLookup[b64.charCodeAt(i + 2)] >> 2)
    arr[L++] = (tmp >> 8) & 0xFF
    arr[L++] = tmp & 0xFF
  }

  return arr
}

function tripletToBase64 (num) {
  return lookup[num >> 18 & 0x3F] + lookup[num >> 12 & 0x3F] + lookup[num >> 6 & 0x3F] + lookup[num & 0x3F]
}

function encodeChunk (uint8, start, end) {
  var tmp
  var output = []
  for (var i = start; i < end; i += 3) {
    tmp = (uint8[i] << 16) + (uint8[i + 1] << 8) + (uint8[i + 2])
    output.push(tripletToBase64(tmp))
  }
  return output.join('')
}

function fromByteArray (uint8) {
  var tmp
  var len = uint8.length
  var extraBytes = len % 3 // if we have 1 byte left, pad 2 bytes
  var output = ''
  var parts = []
  var maxChunkLength = 16383 // must be multiple of 3

  // go through the array every three bytes, we'll deal with trailing stuff later
  for (var i = 0, len2 = len - extraBytes; i < len2; i += maxChunkLength) {
    parts.push(encodeChunk(uint8, i, (i + maxChunkLength) > len2 ? len2 : (i + maxChunkLength)))
  }

  // pad the end with zeros, but make sure to not forget the extra bytes
  if (extraBytes === 1) {
    tmp = uint8[len - 1]
    output += lookup[tmp >> 2]
    output += lookup[(tmp << 4) & 0x3F]
    output += '=='
  } else if (extraBytes === 2) {
    tmp = (uint8[len - 2] << 8) + (uint8[len - 1])
    output += lookup[tmp >> 10]
    output += lookup[(tmp >> 4) & 0x3F]
    output += lookup[(tmp << 2) & 0x3F]
    output += '='
  }

  parts.push(output)

  return parts.join('')
}

},{}],3:[function(require,module,exports){
/*!
 * The buffer module from node.js, for the browser.
 *
 * @author   Feross Aboukhadijeh <feross@feross.org> <http://feross.org>
 * @license  MIT
 */
/* eslint-disable no-proto */

'use strict'

var base64 = require('base64-js')
var ieee754 = require('ieee754')

exports.Buffer = Buffer
exports.SlowBuffer = SlowBuffer
exports.INSPECT_MAX_BYTES = 50

var K_MAX_LENGTH = 0x7fffffff
exports.kMaxLength = K_MAX_LENGTH

/**
 * If `Buffer.TYPED_ARRAY_SUPPORT`:
 *   === true    Use Uint8Array implementation (fastest)
 *   === false   Print warning and recommend using `buffer` v4.x which has an Object
 *               implementation (most compatible, even IE6)
 *
 * Browsers that support typed arrays are IE 10+, Firefox 4+, Chrome 7+, Safari 5.1+,
 * Opera 11.6+, iOS 4.2+.
 *
 * We report that the browser does not support typed arrays if the are not subclassable
 * using __proto__. Firefox 4-29 lacks support for adding new properties to `Uint8Array`
 * (See: https://bugzilla.mozilla.org/show_bug.cgi?id=695438). IE 10 lacks support
 * for __proto__ and has a buggy typed array implementation.
 */
Buffer.TYPED_ARRAY_SUPPORT = typedArraySupport()

if (!Buffer.TYPED_ARRAY_SUPPORT && typeof console !== 'undefined' &&
    typeof console.error === 'function') {
  console.error(
    'This browser lacks typed array (Uint8Array) support which is required by ' +
    '`buffer` v5.x. Use `buffer` v4.x if you require old browser support.'
  )
}

function typedArraySupport () {
  // Can typed array instances can be augmented?
  try {
    var arr = new Uint8Array(1)
    arr.__proto__ = {__proto__: Uint8Array.prototype, foo: function () { return 42 }}
    return arr.foo() === 42
  } catch (e) {
    return false
  }
}

function createBuffer (length) {
  if (length > K_MAX_LENGTH) {
    throw new RangeError('Invalid typed array length')
  }
  // Return an augmented `Uint8Array` instance
  var buf = new Uint8Array(length)
  buf.__proto__ = Buffer.prototype
  return buf
}

/**
 * The Buffer constructor returns instances of `Uint8Array` that have their
 * prototype changed to `Buffer.prototype`. Furthermore, `Buffer` is a subclass of
 * `Uint8Array`, so the returned instances will have all the node `Buffer` methods
 * and the `Uint8Array` methods. Square bracket notation works as expected -- it
 * returns a single octet.
 *
 * The `Uint8Array` prototype remains unmodified.
 */

function Buffer (arg, encodingOrOffset, length) {
  // Common case.
  if (typeof arg === 'number') {
    if (typeof encodingOrOffset === 'string') {
      throw new Error(
        'If encoding is specified then the first argument must be a string'
      )
    }
    return allocUnsafe(arg)
  }
  return from(arg, encodingOrOffset, length)
}

// Fix subarray() in ES2016. See: https://github.com/feross/buffer/pull/97
if (typeof Symbol !== 'undefined' && Symbol.species &&
    Buffer[Symbol.species] === Buffer) {
  Object.defineProperty(Buffer, Symbol.species, {
    value: null,
    configurable: true,
    enumerable: false,
    writable: false
  })
}

Buffer.poolSize = 8192 // not used by this implementation

function from (value, encodingOrOffset, length) {
  if (typeof value === 'number') {
    throw new TypeError('"value" argument must not be a number')
  }

  if (value instanceof ArrayBuffer) {
    return fromArrayBuffer(value, encodingOrOffset, length)
  }

  if (typeof value === 'string') {
    return fromString(value, encodingOrOffset)
  }

  return fromObject(value)
}

/**
 * Functionally equivalent to Buffer(arg, encoding) but throws a TypeError
 * if value is a number.
 * Buffer.from(str[, encoding])
 * Buffer.from(array)
 * Buffer.from(buffer)
 * Buffer.from(arrayBuffer[, byteOffset[, length]])
 **/
Buffer.from = function (value, encodingOrOffset, length) {
  return from(value, encodingOrOffset, length)
}

// Note: Change prototype *after* Buffer.from is defined to workaround Chrome bug:
// https://github.com/feross/buffer/pull/148
Buffer.prototype.__proto__ = Uint8Array.prototype
Buffer.__proto__ = Uint8Array

function assertSize (size) {
  if (typeof size !== 'number') {
    throw new TypeError('"size" argument must be a number')
  } else if (size < 0) {
    throw new RangeError('"size" argument must not be negative')
  }
}

function alloc (size, fill, encoding) {
  assertSize(size)
  if (size <= 0) {
    return createBuffer(size)
  }
  if (fill !== undefined) {
    // Only pay attention to encoding if it's a string. This
    // prevents accidentally sending in a number that would
    // be interpretted as a start offset.
    return typeof encoding === 'string'
      ? createBuffer(size).fill(fill, encoding)
      : createBuffer(size).fill(fill)
  }
  return createBuffer(size)
}

/**
 * Creates a new filled Buffer instance.
 * alloc(size[, fill[, encoding]])
 **/
Buffer.alloc = function (size, fill, encoding) {
  return alloc(size, fill, encoding)
}

function allocUnsafe (size) {
  assertSize(size)
  return createBuffer(size < 0 ? 0 : checked(size) | 0)
}

/**
 * Equivalent to Buffer(num), by default creates a non-zero-filled Buffer instance.
 * */
Buffer.allocUnsafe = function (size) {
  return allocUnsafe(size)
}
/**
 * Equivalent to SlowBuffer(num), by default creates a non-zero-filled Buffer instance.
 */
Buffer.allocUnsafeSlow = function (size) {
  return allocUnsafe(size)
}

function fromString (string, encoding) {
  if (typeof encoding !== 'string' || encoding === '') {
    encoding = 'utf8'
  }

  if (!Buffer.isEncoding(encoding)) {
    throw new TypeError('"encoding" must be a valid string encoding')
  }

  var length = byteLength(string, encoding) | 0
  var buf = createBuffer(length)

  var actual = buf.write(string, encoding)

  if (actual !== length) {
    // Writing a hex string, for example, that contains invalid characters will
    // cause everything after the first invalid character to be ignored. (e.g.
    // 'abxxcd' will be treated as 'ab')
    buf = buf.slice(0, actual)
  }

  return buf
}

function fromArrayLike (array) {
  var length = array.length < 0 ? 0 : checked(array.length) | 0
  var buf = createBuffer(length)
  for (var i = 0; i < length; i += 1) {
    buf[i] = array[i] & 255
  }
  return buf
}

function fromArrayBuffer (array, byteOffset, length) {
  if (byteOffset < 0 || array.byteLength < byteOffset) {
    throw new RangeError('\'offset\' is out of bounds')
  }

  if (array.byteLength < byteOffset + (length || 0)) {
    throw new RangeError('\'length\' is out of bounds')
  }

  var buf
  if (byteOffset === undefined && length === undefined) {
    buf = new Uint8Array(array)
  } else if (length === undefined) {
    buf = new Uint8Array(array, byteOffset)
  } else {
    buf = new Uint8Array(array, byteOffset, length)
  }

  // Return an augmented `Uint8Array` instance
  buf.__proto__ = Buffer.prototype
  return buf
}

function fromObject (obj) {
  if (Buffer.isBuffer(obj)) {
    var len = checked(obj.length) | 0
    var buf = createBuffer(len)

    if (buf.length === 0) {
      return buf
    }

    obj.copy(buf, 0, 0, len)
    return buf
  }

  if (obj) {
    if (isArrayBufferView(obj) || 'length' in obj) {
      if (typeof obj.length !== 'number' || numberIsNaN(obj.length)) {
        return createBuffer(0)
      }
      return fromArrayLike(obj)
    }

    if (obj.type === 'Buffer' && Array.isArray(obj.data)) {
      return fromArrayLike(obj.data)
    }
  }

  throw new TypeError('First argument must be a string, Buffer, ArrayBuffer, Array, or array-like object.')
}

function checked (length) {
  // Note: cannot use `length < K_MAX_LENGTH` here because that fails when
  // length is NaN (which is otherwise coerced to zero.)
  if (length >= K_MAX_LENGTH) {
    throw new RangeError('Attempt to allocate Buffer larger than maximum ' +
                         'size: 0x' + K_MAX_LENGTH.toString(16) + ' bytes')
  }
  return length | 0
}

function SlowBuffer (length) {
  if (+length != length) { // eslint-disable-line eqeqeq
    length = 0
  }
  return Buffer.alloc(+length)
}

Buffer.isBuffer = function isBuffer (b) {
  return b != null && b._isBuffer === true
}

Buffer.compare = function compare (a, b) {
  if (!Buffer.isBuffer(a) || !Buffer.isBuffer(b)) {
    throw new TypeError('Arguments must be Buffers')
  }

  if (a === b) return 0

  var x = a.length
  var y = b.length

  for (var i = 0, len = Math.min(x, y); i < len; ++i) {
    if (a[i] !== b[i]) {
      x = a[i]
      y = b[i]
      break
    }
  }

  if (x < y) return -1
  if (y < x) return 1
  return 0
}

Buffer.isEncoding = function isEncoding (encoding) {
  switch (String(encoding).toLowerCase()) {
    case 'hex':
    case 'utf8':
    case 'utf-8':
    case 'ascii':
    case 'latin1':
    case 'binary':
    case 'base64':
    case 'ucs2':
    case 'ucs-2':
    case 'utf16le':
    case 'utf-16le':
      return true
    default:
      return false
  }
}

Buffer.concat = function concat (list, length) {
  if (!Array.isArray(list)) {
    throw new TypeError('"list" argument must be an Array of Buffers')
  }

  if (list.length === 0) {
    return Buffer.alloc(0)
  }

  var i
  if (length === undefined) {
    length = 0
    for (i = 0; i < list.length; ++i) {
      length += list[i].length
    }
  }

  var buffer = Buffer.allocUnsafe(length)
  var pos = 0
  for (i = 0; i < list.length; ++i) {
    var buf = list[i]
    if (!Buffer.isBuffer(buf)) {
      throw new TypeError('"list" argument must be an Array of Buffers')
    }
    buf.copy(buffer, pos)
    pos += buf.length
  }
  return buffer
}

function byteLength (string, encoding) {
  if (Buffer.isBuffer(string)) {
    return string.length
  }
  if (isArrayBufferView(string) || string instanceof ArrayBuffer) {
    return string.byteLength
  }
  if (typeof string !== 'string') {
    string = '' + string
  }

  var len = string.length
  if (len === 0) return 0

  // Use a for loop to avoid recursion
  var loweredCase = false
  for (;;) {
    switch (encoding) {
      case 'ascii':
      case 'latin1':
      case 'binary':
        return len
      case 'utf8':
      case 'utf-8':
      case undefined:
        return utf8ToBytes(string).length
      case 'ucs2':
      case 'ucs-2':
      case 'utf16le':
      case 'utf-16le':
        return len * 2
      case 'hex':
        return len >>> 1
      case 'base64':
        return base64ToBytes(string).length
      default:
        if (loweredCase) return utf8ToBytes(string).length // assume utf8
        encoding = ('' + encoding).toLowerCase()
        loweredCase = true
    }
  }
}
Buffer.byteLength = byteLength

function slowToString (encoding, start, end) {
  var loweredCase = false

  // No need to verify that "this.length <= MAX_UINT32" since it's a read-only
  // property of a typed array.

  // This behaves neither like String nor Uint8Array in that we set start/end
  // to their upper/lower bounds if the value passed is out of range.
  // undefined is handled specially as per ECMA-262 6th Edition,
  // Section 13.3.3.7 Runtime Semantics: KeyedBindingInitialization.
  if (start === undefined || start < 0) {
    start = 0
  }
  // Return early if start > this.length. Done here to prevent potential uint32
  // coercion fail below.
  if (start > this.length) {
    return ''
  }

  if (end === undefined || end > this.length) {
    end = this.length
  }

  if (end <= 0) {
    return ''
  }

  // Force coersion to uint32. This will also coerce falsey/NaN values to 0.
  end >>>= 0
  start >>>= 0

  if (end <= start) {
    return ''
  }

  if (!encoding) encoding = 'utf8'

  while (true) {
    switch (encoding) {
      case 'hex':
        return hexSlice(this, start, end)

      case 'utf8':
      case 'utf-8':
        return utf8Slice(this, start, end)

      case 'ascii':
        return asciiSlice(this, start, end)

      case 'latin1':
      case 'binary':
        return latin1Slice(this, start, end)

      case 'base64':
        return base64Slice(this, start, end)

      case 'ucs2':
      case 'ucs-2':
      case 'utf16le':
      case 'utf-16le':
        return utf16leSlice(this, start, end)

      default:
        if (loweredCase) throw new TypeError('Unknown encoding: ' + encoding)
        encoding = (encoding + '').toLowerCase()
        loweredCase = true
    }
  }
}

// This property is used by `Buffer.isBuffer` (and the `is-buffer` npm package)
// to detect a Buffer instance. It's not possible to use `instanceof Buffer`
// reliably in a browserify context because there could be multiple different
// copies of the 'buffer' package in use. This method works even for Buffer
// instances that were created from another copy of the `buffer` package.
// See: https://github.com/feross/buffer/issues/154
Buffer.prototype._isBuffer = true

function swap (b, n, m) {
  var i = b[n]
  b[n] = b[m]
  b[m] = i
}

Buffer.prototype.swap16 = function swap16 () {
  var len = this.length
  if (len % 2 !== 0) {
    throw new RangeError('Buffer size must be a multiple of 16-bits')
  }
  for (var i = 0; i < len; i += 2) {
    swap(this, i, i + 1)
  }
  return this
}

Buffer.prototype.swap32 = function swap32 () {
  var len = this.length
  if (len % 4 !== 0) {
    throw new RangeError('Buffer size must be a multiple of 32-bits')
  }
  for (var i = 0; i < len; i += 4) {
    swap(this, i, i + 3)
    swap(this, i + 1, i + 2)
  }
  return this
}

Buffer.prototype.swap64 = function swap64 () {
  var len = this.length
  if (len % 8 !== 0) {
    throw new RangeError('Buffer size must be a multiple of 64-bits')
  }
  for (var i = 0; i < len; i += 8) {
    swap(this, i, i + 7)
    swap(this, i + 1, i + 6)
    swap(this, i + 2, i + 5)
    swap(this, i + 3, i + 4)
  }
  return this
}

Buffer.prototype.toString = function toString () {
  var length = this.length
  if (length === 0) return ''
  if (arguments.length === 0) return utf8Slice(this, 0, length)
  return slowToString.apply(this, arguments)
}

Buffer.prototype.equals = function equals (b) {
  if (!Buffer.isBuffer(b)) throw new TypeError('Argument must be a Buffer')
  if (this === b) return true
  return Buffer.compare(this, b) === 0
}

Buffer.prototype.inspect = function inspect () {
  var str = ''
  var max = exports.INSPECT_MAX_BYTES
  if (this.length > 0) {
    str = this.toString('hex', 0, max).match(/.{2}/g).join(' ')
    if (this.length > max) str += ' ... '
  }
  return '<Buffer ' + str + '>'
}

Buffer.prototype.compare = function compare (target, start, end, thisStart, thisEnd) {
  if (!Buffer.isBuffer(target)) {
    throw new TypeError('Argument must be a Buffer')
  }

  if (start === undefined) {
    start = 0
  }
  if (end === undefined) {
    end = target ? target.length : 0
  }
  if (thisStart === undefined) {
    thisStart = 0
  }
  if (thisEnd === undefined) {
    thisEnd = this.length
  }

  if (start < 0 || end > target.length || thisStart < 0 || thisEnd > this.length) {
    throw new RangeError('out of range index')
  }

  if (thisStart >= thisEnd && start >= end) {
    return 0
  }
  if (thisStart >= thisEnd) {
    return -1
  }
  if (start >= end) {
    return 1
  }

  start >>>= 0
  end >>>= 0
  thisStart >>>= 0
  thisEnd >>>= 0

  if (this === target) return 0

  var x = thisEnd - thisStart
  var y = end - start
  var len = Math.min(x, y)

  var thisCopy = this.slice(thisStart, thisEnd)
  var targetCopy = target.slice(start, end)

  for (var i = 0; i < len; ++i) {
    if (thisCopy[i] !== targetCopy[i]) {
      x = thisCopy[i]
      y = targetCopy[i]
      break
    }
  }

  if (x < y) return -1
  if (y < x) return 1
  return 0
}

// Finds either the first index of `val` in `buffer` at offset >= `byteOffset`,
// OR the last index of `val` in `buffer` at offset <= `byteOffset`.
//
// Arguments:
// - buffer - a Buffer to search
// - val - a string, Buffer, or number
// - byteOffset - an index into `buffer`; will be clamped to an int32
// - encoding - an optional encoding, relevant is val is a string
// - dir - true for indexOf, false for lastIndexOf
function bidirectionalIndexOf (buffer, val, byteOffset, encoding, dir) {
  // Empty buffer means no match
  if (buffer.length === 0) return -1

  // Normalize byteOffset
  if (typeof byteOffset === 'string') {
    encoding = byteOffset
    byteOffset = 0
  } else if (byteOffset > 0x7fffffff) {
    byteOffset = 0x7fffffff
  } else if (byteOffset < -0x80000000) {
    byteOffset = -0x80000000
  }
  byteOffset = +byteOffset  // Coerce to Number.
  if (numberIsNaN(byteOffset)) {
    // byteOffset: it it's undefined, null, NaN, "foo", etc, search whole buffer
    byteOffset = dir ? 0 : (buffer.length - 1)
  }

  // Normalize byteOffset: negative offsets start from the end of the buffer
  if (byteOffset < 0) byteOffset = buffer.length + byteOffset
  if (byteOffset >= buffer.length) {
    if (dir) return -1
    else byteOffset = buffer.length - 1
  } else if (byteOffset < 0) {
    if (dir) byteOffset = 0
    else return -1
  }

  // Normalize val
  if (typeof val === 'string') {
    val = Buffer.from(val, encoding)
  }

  // Finally, search either indexOf (if dir is true) or lastIndexOf
  if (Buffer.isBuffer(val)) {
    // Special case: looking for empty string/buffer always fails
    if (val.length === 0) {
      return -1
    }
    return arrayIndexOf(buffer, val, byteOffset, encoding, dir)
  } else if (typeof val === 'number') {
    val = val & 0xFF // Search for a byte value [0-255]
    if (typeof Uint8Array.prototype.indexOf === 'function') {
      if (dir) {
        return Uint8Array.prototype.indexOf.call(buffer, val, byteOffset)
      } else {
        return Uint8Array.prototype.lastIndexOf.call(buffer, val, byteOffset)
      }
    }
    return arrayIndexOf(buffer, [ val ], byteOffset, encoding, dir)
  }

  throw new TypeError('val must be string, number or Buffer')
}

function arrayIndexOf (arr, val, byteOffset, encoding, dir) {
  var indexSize = 1
  var arrLength = arr.length
  var valLength = val.length

  if (encoding !== undefined) {
    encoding = String(encoding).toLowerCase()
    if (encoding === 'ucs2' || encoding === 'ucs-2' ||
        encoding === 'utf16le' || encoding === 'utf-16le') {
      if (arr.length < 2 || val.length < 2) {
        return -1
      }
      indexSize = 2
      arrLength /= 2
      valLength /= 2
      byteOffset /= 2
    }
  }

  function read (buf, i) {
    if (indexSize === 1) {
      return buf[i]
    } else {
      return buf.readUInt16BE(i * indexSize)
    }
  }

  var i
  if (dir) {
    var foundIndex = -1
    for (i = byteOffset; i < arrLength; i++) {
      if (read(arr, i) === read(val, foundIndex === -1 ? 0 : i - foundIndex)) {
        if (foundIndex === -1) foundIndex = i
        if (i - foundIndex + 1 === valLength) return foundIndex * indexSize
      } else {
        if (foundIndex !== -1) i -= i - foundIndex
        foundIndex = -1
      }
    }
  } else {
    if (byteOffset + valLength > arrLength) byteOffset = arrLength - valLength
    for (i = byteOffset; i >= 0; i--) {
      var found = true
      for (var j = 0; j < valLength; j++) {
        if (read(arr, i + j) !== read(val, j)) {
          found = false
          break
        }
      }
      if (found) return i
    }
  }

  return -1
}

Buffer.prototype.includes = function includes (val, byteOffset, encoding) {
  return this.indexOf(val, byteOffset, encoding) !== -1
}

Buffer.prototype.indexOf = function indexOf (val, byteOffset, encoding) {
  return bidirectionalIndexOf(this, val, byteOffset, encoding, true)
}

Buffer.prototype.lastIndexOf = function lastIndexOf (val, byteOffset, encoding) {
  return bidirectionalIndexOf(this, val, byteOffset, encoding, false)
}

function hexWrite (buf, string, offset, length) {
  offset = Number(offset) || 0
  var remaining = buf.length - offset
  if (!length) {
    length = remaining
  } else {
    length = Number(length)
    if (length > remaining) {
      length = remaining
    }
  }

  // must be an even number of digits
  var strLen = string.length
  if (strLen % 2 !== 0) throw new TypeError('Invalid hex string')

  if (length > strLen / 2) {
    length = strLen / 2
  }
  for (var i = 0; i < length; ++i) {
    var parsed = parseInt(string.substr(i * 2, 2), 16)
    if (numberIsNaN(parsed)) return i
    buf[offset + i] = parsed
  }
  return i
}

function utf8Write (buf, string, offset, length) {
  return blitBuffer(utf8ToBytes(string, buf.length - offset), buf, offset, length)
}

function asciiWrite (buf, string, offset, length) {
  return blitBuffer(asciiToBytes(string), buf, offset, length)
}

function latin1Write (buf, string, offset, length) {
  return asciiWrite(buf, string, offset, length)
}

function base64Write (buf, string, offset, length) {
  return blitBuffer(base64ToBytes(string), buf, offset, length)
}

function ucs2Write (buf, string, offset, length) {
  return blitBuffer(utf16leToBytes(string, buf.length - offset), buf, offset, length)
}

Buffer.prototype.write = function write (string, offset, length, encoding) {
  // Buffer#write(string)
  if (offset === undefined) {
    encoding = 'utf8'
    length = this.length
    offset = 0
  // Buffer#write(string, encoding)
  } else if (length === undefined && typeof offset === 'string') {
    encoding = offset
    length = this.length
    offset = 0
  // Buffer#write(string, offset[, length][, encoding])
  } else if (isFinite(offset)) {
    offset = offset >>> 0
    if (isFinite(length)) {
      length = length >>> 0
      if (encoding === undefined) encoding = 'utf8'
    } else {
      encoding = length
      length = undefined
    }
  } else {
    throw new Error(
      'Buffer.write(string, encoding, offset[, length]) is no longer supported'
    )
  }

  var remaining = this.length - offset
  if (length === undefined || length > remaining) length = remaining

  if ((string.length > 0 && (length < 0 || offset < 0)) || offset > this.length) {
    throw new RangeError('Attempt to write outside buffer bounds')
  }

  if (!encoding) encoding = 'utf8'

  var loweredCase = false
  for (;;) {
    switch (encoding) {
      case 'hex':
        return hexWrite(this, string, offset, length)

      case 'utf8':
      case 'utf-8':
        return utf8Write(this, string, offset, length)

      case 'ascii':
        return asciiWrite(this, string, offset, length)

      case 'latin1':
      case 'binary':
        return latin1Write(this, string, offset, length)

      case 'base64':
        // Warning: maxLength not taken into account in base64Write
        return base64Write(this, string, offset, length)

      case 'ucs2':
      case 'ucs-2':
      case 'utf16le':
      case 'utf-16le':
        return ucs2Write(this, string, offset, length)

      default:
        if (loweredCase) throw new TypeError('Unknown encoding: ' + encoding)
        encoding = ('' + encoding).toLowerCase()
        loweredCase = true
    }
  }
}

Buffer.prototype.toJSON = function toJSON () {
  return {
    type: 'Buffer',
    data: Array.prototype.slice.call(this._arr || this, 0)
  }
}

function base64Slice (buf, start, end) {
  if (start === 0 && end === buf.length) {
    return base64.fromByteArray(buf)
  } else {
    return base64.fromByteArray(buf.slice(start, end))
  }
}

function utf8Slice (buf, start, end) {
  end = Math.min(buf.length, end)
  var res = []

  var i = start
  while (i < end) {
    var firstByte = buf[i]
    var codePoint = null
    var bytesPerSequence = (firstByte > 0xEF) ? 4
      : (firstByte > 0xDF) ? 3
      : (firstByte > 0xBF) ? 2
      : 1

    if (i + bytesPerSequence <= end) {
      var secondByte, thirdByte, fourthByte, tempCodePoint

      switch (bytesPerSequence) {
        case 1:
          if (firstByte < 0x80) {
            codePoint = firstByte
          }
          break
        case 2:
          secondByte = buf[i + 1]
          if ((secondByte & 0xC0) === 0x80) {
            tempCodePoint = (firstByte & 0x1F) << 0x6 | (secondByte & 0x3F)
            if (tempCodePoint > 0x7F) {
              codePoint = tempCodePoint
            }
          }
          break
        case 3:
          secondByte = buf[i + 1]
          thirdByte = buf[i + 2]
          if ((secondByte & 0xC0) === 0x80 && (thirdByte & 0xC0) === 0x80) {
            tempCodePoint = (firstByte & 0xF) << 0xC | (secondByte & 0x3F) << 0x6 | (thirdByte & 0x3F)
            if (tempCodePoint > 0x7FF && (tempCodePoint < 0xD800 || tempCodePoint > 0xDFFF)) {
              codePoint = tempCodePoint
            }
          }
          break
        case 4:
          secondByte = buf[i + 1]
          thirdByte = buf[i + 2]
          fourthByte = buf[i + 3]
          if ((secondByte & 0xC0) === 0x80 && (thirdByte & 0xC0) === 0x80 && (fourthByte & 0xC0) === 0x80) {
            tempCodePoint = (firstByte & 0xF) << 0x12 | (secondByte & 0x3F) << 0xC | (thirdByte & 0x3F) << 0x6 | (fourthByte & 0x3F)
            if (tempCodePoint > 0xFFFF && tempCodePoint < 0x110000) {
              codePoint = tempCodePoint
            }
          }
      }
    }

    if (codePoint === null) {
      // we did not generate a valid codePoint so insert a
      // replacement char (U+FFFD) and advance only 1 byte
      codePoint = 0xFFFD
      bytesPerSequence = 1
    } else if (codePoint > 0xFFFF) {
      // encode to utf16 (surrogate pair dance)
      codePoint -= 0x10000
      res.push(codePoint >>> 10 & 0x3FF | 0xD800)
      codePoint = 0xDC00 | codePoint & 0x3FF
    }

    res.push(codePoint)
    i += bytesPerSequence
  }

  return decodeCodePointsArray(res)
}

// Based on http://stackoverflow.com/a/22747272/680742, the browser with
// the lowest limit is Chrome, with 0x10000 args.
// We go 1 magnitude less, for safety
var MAX_ARGUMENTS_LENGTH = 0x1000

function decodeCodePointsArray (codePoints) {
  var len = codePoints.length
  if (len <= MAX_ARGUMENTS_LENGTH) {
    return String.fromCharCode.apply(String, codePoints) // avoid extra slice()
  }

  // Decode in chunks to avoid "call stack size exceeded".
  var res = ''
  var i = 0
  while (i < len) {
    res += String.fromCharCode.apply(
      String,
      codePoints.slice(i, i += MAX_ARGUMENTS_LENGTH)
    )
  }
  return res
}

function asciiSlice (buf, start, end) {
  var ret = ''
  end = Math.min(buf.length, end)

  for (var i = start; i < end; ++i) {
    ret += String.fromCharCode(buf[i] & 0x7F)
  }
  return ret
}

function latin1Slice (buf, start, end) {
  var ret = ''
  end = Math.min(buf.length, end)

  for (var i = start; i < end; ++i) {
    ret += String.fromCharCode(buf[i])
  }
  return ret
}

function hexSlice (buf, start, end) {
  var len = buf.length

  if (!start || start < 0) start = 0
  if (!end || end < 0 || end > len) end = len

  var out = ''
  for (var i = start; i < end; ++i) {
    out += toHex(buf[i])
  }
  return out
}

function utf16leSlice (buf, start, end) {
  var bytes = buf.slice(start, end)
  var res = ''
  for (var i = 0; i < bytes.length; i += 2) {
    res += String.fromCharCode(bytes[i] + (bytes[i + 1] * 256))
  }
  return res
}

Buffer.prototype.slice = function slice (start, end) {
  var len = this.length
  start = ~~start
  end = end === undefined ? len : ~~end

  if (start < 0) {
    start += len
    if (start < 0) start = 0
  } else if (start > len) {
    start = len
  }

  if (end < 0) {
    end += len
    if (end < 0) end = 0
  } else if (end > len) {
    end = len
  }

  if (end < start) end = start

  var newBuf = this.subarray(start, end)
  // Return an augmented `Uint8Array` instance
  newBuf.__proto__ = Buffer.prototype
  return newBuf
}

/*
 * Need to make sure that buffer isn't trying to write out of bounds.
 */
function checkOffset (offset, ext, length) {
  if ((offset % 1) !== 0 || offset < 0) throw new RangeError('offset is not uint')
  if (offset + ext > length) throw new RangeError('Trying to access beyond buffer length')
}

Buffer.prototype.readUIntLE = function readUIntLE (offset, byteLength, noAssert) {
  offset = offset >>> 0
  byteLength = byteLength >>> 0
  if (!noAssert) checkOffset(offset, byteLength, this.length)

  var val = this[offset]
  var mul = 1
  var i = 0
  while (++i < byteLength && (mul *= 0x100)) {
    val += this[offset + i] * mul
  }

  return val
}

Buffer.prototype.readUIntBE = function readUIntBE (offset, byteLength, noAssert) {
  offset = offset >>> 0
  byteLength = byteLength >>> 0
  if (!noAssert) {
    checkOffset(offset, byteLength, this.length)
  }

  var val = this[offset + --byteLength]
  var mul = 1
  while (byteLength > 0 && (mul *= 0x100)) {
    val += this[offset + --byteLength] * mul
  }

  return val
}

Buffer.prototype.readUInt8 = function readUInt8 (offset, noAssert) {
  offset = offset >>> 0
  if (!noAssert) checkOffset(offset, 1, this.length)
  return this[offset]
}

Buffer.prototype.readUInt16LE = function readUInt16LE (offset, noAssert) {
  offset = offset >>> 0
  if (!noAssert) checkOffset(offset, 2, this.length)
  return this[offset] | (this[offset + 1] << 8)
}

Buffer.prototype.readUInt16BE = function readUInt16BE (offset, noAssert) {
  offset = offset >>> 0
  if (!noAssert) checkOffset(offset, 2, this.length)
  return (this[offset] << 8) | this[offset + 1]
}

Buffer.prototype.readUInt32LE = function readUInt32LE (offset, noAssert) {
  offset = offset >>> 0
  if (!noAssert) checkOffset(offset, 4, this.length)

  return ((this[offset]) |
      (this[offset + 1] << 8) |
      (this[offset + 2] << 16)) +
      (this[offset + 3] * 0x1000000)
}

Buffer.prototype.readUInt32BE = function readUInt32BE (offset, noAssert) {
  offset = offset >>> 0
  if (!noAssert) checkOffset(offset, 4, this.length)

  return (this[offset] * 0x1000000) +
    ((this[offset + 1] << 16) |
    (this[offset + 2] << 8) |
    this[offset + 3])
}

Buffer.prototype.readIntLE = function readIntLE (offset, byteLength, noAssert) {
  offset = offset >>> 0
  byteLength = byteLength >>> 0
  if (!noAssert) checkOffset(offset, byteLength, this.length)

  var val = this[offset]
  var mul = 1
  var i = 0
  while (++i < byteLength && (mul *= 0x100)) {
    val += this[offset + i] * mul
  }
  mul *= 0x80

  if (val >= mul) val -= Math.pow(2, 8 * byteLength)

  return val
}

Buffer.prototype.readIntBE = function readIntBE (offset, byteLength, noAssert) {
  offset = offset >>> 0
  byteLength = byteLength >>> 0
  if (!noAssert) checkOffset(offset, byteLength, this.length)

  var i = byteLength
  var mul = 1
  var val = this[offset + --i]
  while (i > 0 && (mul *= 0x100)) {
    val += this[offset + --i] * mul
  }
  mul *= 0x80

  if (val >= mul) val -= Math.pow(2, 8 * byteLength)

  return val
}

Buffer.prototype.readInt8 = function readInt8 (offset, noAssert) {
  offset = offset >>> 0
  if (!noAssert) checkOffset(offset, 1, this.length)
  if (!(this[offset] & 0x80)) return (this[offset])
  return ((0xff - this[offset] + 1) * -1)
}

Buffer.prototype.readInt16LE = function readInt16LE (offset, noAssert) {
  offset = offset >>> 0
  if (!noAssert) checkOffset(offset, 2, this.length)
  var val = this[offset] | (this[offset + 1] << 8)
  return (val & 0x8000) ? val | 0xFFFF0000 : val
}

Buffer.prototype.readInt16BE = function readInt16BE (offset, noAssert) {
  offset = offset >>> 0
  if (!noAssert) checkOffset(offset, 2, this.length)
  var val = this[offset + 1] | (this[offset] << 8)
  return (val & 0x8000) ? val | 0xFFFF0000 : val
}

Buffer.prototype.readInt32LE = function readInt32LE (offset, noAssert) {
  offset = offset >>> 0
  if (!noAssert) checkOffset(offset, 4, this.length)

  return (this[offset]) |
    (this[offset + 1] << 8) |
    (this[offset + 2] << 16) |
    (this[offset + 3] << 24)
}

Buffer.prototype.readInt32BE = function readInt32BE (offset, noAssert) {
  offset = offset >>> 0
  if (!noAssert) checkOffset(offset, 4, this.length)

  return (this[offset] << 24) |
    (this[offset + 1] << 16) |
    (this[offset + 2] << 8) |
    (this[offset + 3])
}

Buffer.prototype.readFloatLE = function readFloatLE (offset, noAssert) {
  offset = offset >>> 0
  if (!noAssert) checkOffset(offset, 4, this.length)
  return ieee754.read(this, offset, true, 23, 4)
}

Buffer.prototype.readFloatBE = function readFloatBE (offset, noAssert) {
  offset = offset >>> 0
  if (!noAssert) checkOffset(offset, 4, this.length)
  return ieee754.read(this, offset, false, 23, 4)
}

Buffer.prototype.readDoubleLE = function readDoubleLE (offset, noAssert) {
  offset = offset >>> 0
  if (!noAssert) checkOffset(offset, 8, this.length)
  return ieee754.read(this, offset, true, 52, 8)
}

Buffer.prototype.readDoubleBE = function readDoubleBE (offset, noAssert) {
  offset = offset >>> 0
  if (!noAssert) checkOffset(offset, 8, this.length)
  return ieee754.read(this, offset, false, 52, 8)
}

function checkInt (buf, value, offset, ext, max, min) {
  if (!Buffer.isBuffer(buf)) throw new TypeError('"buffer" argument must be a Buffer instance')
  if (value > max || value < min) throw new RangeError('"value" argument is out of bounds')
  if (offset + ext > buf.length) throw new RangeError('Index out of range')
}

Buffer.prototype.writeUIntLE = function writeUIntLE (value, offset, byteLength, noAssert) {
  value = +value
  offset = offset >>> 0
  byteLength = byteLength >>> 0
  if (!noAssert) {
    var maxBytes = Math.pow(2, 8 * byteLength) - 1
    checkInt(this, value, offset, byteLength, maxBytes, 0)
  }

  var mul = 1
  var i = 0
  this[offset] = value & 0xFF
  while (++i < byteLength && (mul *= 0x100)) {
    this[offset + i] = (value / mul) & 0xFF
  }

  return offset + byteLength
}

Buffer.prototype.writeUIntBE = function writeUIntBE (value, offset, byteLength, noAssert) {
  value = +value
  offset = offset >>> 0
  byteLength = byteLength >>> 0
  if (!noAssert) {
    var maxBytes = Math.pow(2, 8 * byteLength) - 1
    checkInt(this, value, offset, byteLength, maxBytes, 0)
  }

  var i = byteLength - 1
  var mul = 1
  this[offset + i] = value & 0xFF
  while (--i >= 0 && (mul *= 0x100)) {
    this[offset + i] = (value / mul) & 0xFF
  }

  return offset + byteLength
}

Buffer.prototype.writeUInt8 = function writeUInt8 (value, offset, noAssert) {
  value = +value
  offset = offset >>> 0
  if (!noAssert) checkInt(this, value, offset, 1, 0xff, 0)
  this[offset] = (value & 0xff)
  return offset + 1
}

Buffer.prototype.writeUInt16LE = function writeUInt16LE (value, offset, noAssert) {
  value = +value
  offset = offset >>> 0
  if (!noAssert) checkInt(this, value, offset, 2, 0xffff, 0)
  this[offset] = (value & 0xff)
  this[offset + 1] = (value >>> 8)
  return offset + 2
}

Buffer.prototype.writeUInt16BE = function writeUInt16BE (value, offset, noAssert) {
  value = +value
  offset = offset >>> 0
  if (!noAssert) checkInt(this, value, offset, 2, 0xffff, 0)
  this[offset] = (value >>> 8)
  this[offset + 1] = (value & 0xff)
  return offset + 2
}

Buffer.prototype.writeUInt32LE = function writeUInt32LE (value, offset, noAssert) {
  value = +value
  offset = offset >>> 0
  if (!noAssert) checkInt(this, value, offset, 4, 0xffffffff, 0)
  this[offset + 3] = (value >>> 24)
  this[offset + 2] = (value >>> 16)
  this[offset + 1] = (value >>> 8)
  this[offset] = (value & 0xff)
  return offset + 4
}

Buffer.prototype.writeUInt32BE = function writeUInt32BE (value, offset, noAssert) {
  value = +value
  offset = offset >>> 0
  if (!noAssert) checkInt(this, value, offset, 4, 0xffffffff, 0)
  this[offset] = (value >>> 24)
  this[offset + 1] = (value >>> 16)
  this[offset + 2] = (value >>> 8)
  this[offset + 3] = (value & 0xff)
  return offset + 4
}

Buffer.prototype.writeIntLE = function writeIntLE (value, offset, byteLength, noAssert) {
  value = +value
  offset = offset >>> 0
  if (!noAssert) {
    var limit = Math.pow(2, (8 * byteLength) - 1)

    checkInt(this, value, offset, byteLength, limit - 1, -limit)
  }

  var i = 0
  var mul = 1
  var sub = 0
  this[offset] = value & 0xFF
  while (++i < byteLength && (mul *= 0x100)) {
    if (value < 0 && sub === 0 && this[offset + i - 1] !== 0) {
      sub = 1
    }
    this[offset + i] = ((value / mul) >> 0) - sub & 0xFF
  }

  return offset + byteLength
}

Buffer.prototype.writeIntBE = function writeIntBE (value, offset, byteLength, noAssert) {
  value = +value
  offset = offset >>> 0
  if (!noAssert) {
    var limit = Math.pow(2, (8 * byteLength) - 1)

    checkInt(this, value, offset, byteLength, limit - 1, -limit)
  }

  var i = byteLength - 1
  var mul = 1
  var sub = 0
  this[offset + i] = value & 0xFF
  while (--i >= 0 && (mul *= 0x100)) {
    if (value < 0 && sub === 0 && this[offset + i + 1] !== 0) {
      sub = 1
    }
    this[offset + i] = ((value / mul) >> 0) - sub & 0xFF
  }

  return offset + byteLength
}

Buffer.prototype.writeInt8 = function writeInt8 (value, offset, noAssert) {
  value = +value
  offset = offset >>> 0
  if (!noAssert) checkInt(this, value, offset, 1, 0x7f, -0x80)
  if (value < 0) value = 0xff + value + 1
  this[offset] = (value & 0xff)
  return offset + 1
}

Buffer.prototype.writeInt16LE = function writeInt16LE (value, offset, noAssert) {
  value = +value
  offset = offset >>> 0
  if (!noAssert) checkInt(this, value, offset, 2, 0x7fff, -0x8000)
  this[offset] = (value & 0xff)
  this[offset + 1] = (value >>> 8)
  return offset + 2
}

Buffer.prototype.writeInt16BE = function writeInt16BE (value, offset, noAssert) {
  value = +value
  offset = offset >>> 0
  if (!noAssert) checkInt(this, value, offset, 2, 0x7fff, -0x8000)
  this[offset] = (value >>> 8)
  this[offset + 1] = (value & 0xff)
  return offset + 2
}

Buffer.prototype.writeInt32LE = function writeInt32LE (value, offset, noAssert) {
  value = +value
  offset = offset >>> 0
  if (!noAssert) checkInt(this, value, offset, 4, 0x7fffffff, -0x80000000)
  this[offset] = (value & 0xff)
  this[offset + 1] = (value >>> 8)
  this[offset + 2] = (value >>> 16)
  this[offset + 3] = (value >>> 24)
  return offset + 4
}

Buffer.prototype.writeInt32BE = function writeInt32BE (value, offset, noAssert) {
  value = +value
  offset = offset >>> 0
  if (!noAssert) checkInt(this, value, offset, 4, 0x7fffffff, -0x80000000)
  if (value < 0) value = 0xffffffff + value + 1
  this[offset] = (value >>> 24)
  this[offset + 1] = (value >>> 16)
  this[offset + 2] = (value >>> 8)
  this[offset + 3] = (value & 0xff)
  return offset + 4
}

function checkIEEE754 (buf, value, offset, ext, max, min) {
  if (offset + ext > buf.length) throw new RangeError('Index out of range')
  if (offset < 0) throw new RangeError('Index out of range')
}

function writeFloat (buf, value, offset, littleEndian, noAssert) {
  value = +value
  offset = offset >>> 0
  if (!noAssert) {
    checkIEEE754(buf, value, offset, 4, 3.4028234663852886e+38, -3.4028234663852886e+38)
  }
  ieee754.write(buf, value, offset, littleEndian, 23, 4)
  return offset + 4
}

Buffer.prototype.writeFloatLE = function writeFloatLE (value, offset, noAssert) {
  return writeFloat(this, value, offset, true, noAssert)
}

Buffer.prototype.writeFloatBE = function writeFloatBE (value, offset, noAssert) {
  return writeFloat(this, value, offset, false, noAssert)
}

function writeDouble (buf, value, offset, littleEndian, noAssert) {
  value = +value
  offset = offset >>> 0
  if (!noAssert) {
    checkIEEE754(buf, value, offset, 8, 1.7976931348623157E+308, -1.7976931348623157E+308)
  }
  ieee754.write(buf, value, offset, littleEndian, 52, 8)
  return offset + 8
}

Buffer.prototype.writeDoubleLE = function writeDoubleLE (value, offset, noAssert) {
  return writeDouble(this, value, offset, true, noAssert)
}

Buffer.prototype.writeDoubleBE = function writeDoubleBE (value, offset, noAssert) {
  return writeDouble(this, value, offset, false, noAssert)
}

// copy(targetBuffer, targetStart=0, sourceStart=0, sourceEnd=buffer.length)
Buffer.prototype.copy = function copy (target, targetStart, start, end) {
  if (!start) start = 0
  if (!end && end !== 0) end = this.length
  if (targetStart >= target.length) targetStart = target.length
  if (!targetStart) targetStart = 0
  if (end > 0 && end < start) end = start

  // Copy 0 bytes; we're done
  if (end === start) return 0
  if (target.length === 0 || this.length === 0) return 0

  // Fatal error conditions
  if (targetStart < 0) {
    throw new RangeError('targetStart out of bounds')
  }
  if (start < 0 || start >= this.length) throw new RangeError('sourceStart out of bounds')
  if (end < 0) throw new RangeError('sourceEnd out of bounds')

  // Are we oob?
  if (end > this.length) end = this.length
  if (target.length - targetStart < end - start) {
    end = target.length - targetStart + start
  }

  var len = end - start
  var i

  if (this === target && start < targetStart && targetStart < end) {
    // descending copy from end
    for (i = len - 1; i >= 0; --i) {
      target[i + targetStart] = this[i + start]
    }
  } else if (len < 1000) {
    // ascending copy from start
    for (i = 0; i < len; ++i) {
      target[i + targetStart] = this[i + start]
    }
  } else {
    Uint8Array.prototype.set.call(
      target,
      this.subarray(start, start + len),
      targetStart
    )
  }

  return len
}

// Usage:
//    buffer.fill(number[, offset[, end]])
//    buffer.fill(buffer[, offset[, end]])
//    buffer.fill(string[, offset[, end]][, encoding])
Buffer.prototype.fill = function fill (val, start, end, encoding) {
  // Handle string cases:
  if (typeof val === 'string') {
    if (typeof start === 'string') {
      encoding = start
      start = 0
      end = this.length
    } else if (typeof end === 'string') {
      encoding = end
      end = this.length
    }
    if (val.length === 1) {
      var code = val.charCodeAt(0)
      if (code < 256) {
        val = code
      }
    }
    if (encoding !== undefined && typeof encoding !== 'string') {
      throw new TypeError('encoding must be a string')
    }
    if (typeof encoding === 'string' && !Buffer.isEncoding(encoding)) {
      throw new TypeError('Unknown encoding: ' + encoding)
    }
  } else if (typeof val === 'number') {
    val = val & 255
  }

  // Invalid ranges are not set to a default, so can range check early.
  if (start < 0 || this.length < start || this.length < end) {
    throw new RangeError('Out of range index')
  }

  if (end <= start) {
    return this
  }

  start = start >>> 0
  end = end === undefined ? this.length : end >>> 0

  if (!val) val = 0

  var i
  if (typeof val === 'number') {
    for (i = start; i < end; ++i) {
      this[i] = val
    }
  } else {
    var bytes = Buffer.isBuffer(val)
      ? val
      : new Buffer(val, encoding)
    var len = bytes.length
    for (i = 0; i < end - start; ++i) {
      this[i + start] = bytes[i % len]
    }
  }

  return this
}

// HELPER FUNCTIONS
// ================

var INVALID_BASE64_RE = /[^+/0-9A-Za-z-_]/g

function base64clean (str) {
  // Node strips out invalid characters like \n and \t from the string, base64-js does not
  str = str.trim().replace(INVALID_BASE64_RE, '')
  // Node converts strings with length < 2 to ''
  if (str.length < 2) return ''
  // Node allows for non-padded base64 strings (missing trailing ===), base64-js does not
  while (str.length % 4 !== 0) {
    str = str + '='
  }
  return str
}

function toHex (n) {
  if (n < 16) return '0' + n.toString(16)
  return n.toString(16)
}

function utf8ToBytes (string, units) {
  units = units || Infinity
  var codePoint
  var length = string.length
  var leadSurrogate = null
  var bytes = []

  for (var i = 0; i < length; ++i) {
    codePoint = string.charCodeAt(i)

    // is surrogate component
    if (codePoint > 0xD7FF && codePoint < 0xE000) {
      // last char was a lead
      if (!leadSurrogate) {
        // no lead yet
        if (codePoint > 0xDBFF) {
          // unexpected trail
          if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
          continue
        } else if (i + 1 === length) {
          // unpaired lead
          if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
          continue
        }

        // valid lead
        leadSurrogate = codePoint

        continue
      }

      // 2 leads in a row
      if (codePoint < 0xDC00) {
        if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
        leadSurrogate = codePoint
        continue
      }

      // valid surrogate pair
      codePoint = (leadSurrogate - 0xD800 << 10 | codePoint - 0xDC00) + 0x10000
    } else if (leadSurrogate) {
      // valid bmp char, but last char was a lead
      if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
    }

    leadSurrogate = null

    // encode utf8
    if (codePoint < 0x80) {
      if ((units -= 1) < 0) break
      bytes.push(codePoint)
    } else if (codePoint < 0x800) {
      if ((units -= 2) < 0) break
      bytes.push(
        codePoint >> 0x6 | 0xC0,
        codePoint & 0x3F | 0x80
      )
    } else if (codePoint < 0x10000) {
      if ((units -= 3) < 0) break
      bytes.push(
        codePoint >> 0xC | 0xE0,
        codePoint >> 0x6 & 0x3F | 0x80,
        codePoint & 0x3F | 0x80
      )
    } else if (codePoint < 0x110000) {
      if ((units -= 4) < 0) break
      bytes.push(
        codePoint >> 0x12 | 0xF0,
        codePoint >> 0xC & 0x3F | 0x80,
        codePoint >> 0x6 & 0x3F | 0x80,
        codePoint & 0x3F | 0x80
      )
    } else {
      throw new Error('Invalid code point')
    }
  }

  return bytes
}

function asciiToBytes (str) {
  var byteArray = []
  for (var i = 0; i < str.length; ++i) {
    // Node's code seems to be doing this and not & 0x7F..
    byteArray.push(str.charCodeAt(i) & 0xFF)
  }
  return byteArray
}

function utf16leToBytes (str, units) {
  var c, hi, lo
  var byteArray = []
  for (var i = 0; i < str.length; ++i) {
    if ((units -= 2) < 0) break

    c = str.charCodeAt(i)
    hi = c >> 8
    lo = c % 256
    byteArray.push(lo)
    byteArray.push(hi)
  }

  return byteArray
}

function base64ToBytes (str) {
  return base64.toByteArray(base64clean(str))
}

function blitBuffer (src, dst, offset, length) {
  for (var i = 0; i < length; ++i) {
    if ((i + offset >= dst.length) || (i >= src.length)) break
    dst[i + offset] = src[i]
  }
  return i
}

// Node 0.10 supports `ArrayBuffer` but lacks `ArrayBuffer.isView`
function isArrayBufferView (obj) {
  return (typeof ArrayBuffer.isView === 'function') && ArrayBuffer.isView(obj)
}

function numberIsNaN (obj) {
  return obj !== obj // eslint-disable-line no-self-compare
}

},{"base64-js":2,"ieee754":4}],4:[function(require,module,exports){
exports.read = function (buffer, offset, isLE, mLen, nBytes) {
  var e, m
  var eLen = nBytes * 8 - mLen - 1
  var eMax = (1 << eLen) - 1
  var eBias = eMax >> 1
  var nBits = -7
  var i = isLE ? (nBytes - 1) : 0
  var d = isLE ? -1 : 1
  var s = buffer[offset + i]

  i += d

  e = s & ((1 << (-nBits)) - 1)
  s >>= (-nBits)
  nBits += eLen
  for (; nBits > 0; e = e * 256 + buffer[offset + i], i += d, nBits -= 8) {}

  m = e & ((1 << (-nBits)) - 1)
  e >>= (-nBits)
  nBits += mLen
  for (; nBits > 0; m = m * 256 + buffer[offset + i], i += d, nBits -= 8) {}

  if (e === 0) {
    e = 1 - eBias
  } else if (e === eMax) {
    return m ? NaN : ((s ? -1 : 1) * Infinity)
  } else {
    m = m + Math.pow(2, mLen)
    e = e - eBias
  }
  return (s ? -1 : 1) * m * Math.pow(2, e - mLen)
}

exports.write = function (buffer, value, offset, isLE, mLen, nBytes) {
  var e, m, c
  var eLen = nBytes * 8 - mLen - 1
  var eMax = (1 << eLen) - 1
  var eBias = eMax >> 1
  var rt = (mLen === 23 ? Math.pow(2, -24) - Math.pow(2, -77) : 0)
  var i = isLE ? 0 : (nBytes - 1)
  var d = isLE ? 1 : -1
  var s = value < 0 || (value === 0 && 1 / value < 0) ? 1 : 0

  value = Math.abs(value)

  if (isNaN(value) || value === Infinity) {
    m = isNaN(value) ? 1 : 0
    e = eMax
  } else {
    e = Math.floor(Math.log(value) / Math.LN2)
    if (value * (c = Math.pow(2, -e)) < 1) {
      e--
      c *= 2
    }
    if (e + eBias >= 1) {
      value += rt / c
    } else {
      value += rt * Math.pow(2, 1 - eBias)
    }
    if (value * c >= 2) {
      e++
      c /= 2
    }

    if (e + eBias >= eMax) {
      m = 0
      e = eMax
    } else if (e + eBias >= 1) {
      m = (value * c - 1) * Math.pow(2, mLen)
      e = e + eBias
    } else {
      m = value * Math.pow(2, eBias - 1) * Math.pow(2, mLen)
      e = 0
    }
  }

  for (; mLen >= 8; buffer[offset + i] = m & 0xff, i += d, m /= 256, mLen -= 8) {}

  e = (e << mLen) | m
  eLen += mLen
  for (; eLen > 0; buffer[offset + i] = e & 0xff, i += d, e /= 256, eLen -= 8) {}

  buffer[offset + i - d] |= s * 128
}

},{}],5:[function(require,module,exports){

/**
 * Expose `Emitter`.
 */

module.exports = Emitter;

/**
 * Initialize a new `Emitter`.
 *
 * @api public
 */

function Emitter(obj) {
  if (obj) return mixin(obj);
};

/**
 * Mixin the emitter properties.
 *
 * @param {Object} obj
 * @return {Object}
 * @api private
 */

function mixin(obj) {
  for (var key in Emitter.prototype) {
    obj[key] = Emitter.prototype[key];
  }
  return obj;
}

/**
 * Listen on the given `event` with `fn`.
 *
 * @param {String} event
 * @param {Function} fn
 * @return {Emitter}
 * @api public
 */

Emitter.prototype.on =
Emitter.prototype.addEventListener = function(event, fn){
  this._callbacks = this._callbacks || {};
  (this._callbacks[event] = this._callbacks[event] || [])
    .push(fn);
  return this;
};

/**
 * Adds an `event` listener that will be invoked a single
 * time then automatically removed.
 *
 * @param {String} event
 * @param {Function} fn
 * @return {Emitter}
 * @api public
 */

Emitter.prototype.once = function(event, fn){
  var self = this;
  this._callbacks = this._callbacks || {};

  function on() {
    self.off(event, on);
    fn.apply(this, arguments);
  }

  on.fn = fn;
  this.on(event, on);
  return this;
};

/**
 * Remove the given callback for `event` or all
 * registered callbacks.
 *
 * @param {String} event
 * @param {Function} fn
 * @return {Emitter}
 * @api public
 */

Emitter.prototype.off =
Emitter.prototype.removeListener =
Emitter.prototype.removeAllListeners =
Emitter.prototype.removeEventListener = function(event, fn){
  this._callbacks = this._callbacks || {};

  // all
  if (0 == arguments.length) {
    this._callbacks = {};
    return this;
  }

  // specific event
  var callbacks = this._callbacks[event];
  if (!callbacks) return this;

  // remove all handlers
  if (1 == arguments.length) {
    delete this._callbacks[event];
    return this;
  }

  // remove specific handler
  var cb;
  for (var i = 0; i < callbacks.length; i++) {
    cb = callbacks[i];
    if (cb === fn || cb.fn === fn) {
      callbacks.splice(i, 1);
      break;
    }
  }
  return this;
};

/**
 * Emit `event` with the given args.
 *
 * @param {String} event
 * @param {Mixed} ...
 * @return {Emitter}
 */

Emitter.prototype.emit = function(event){
  this._callbacks = this._callbacks || {};
  var args = [].slice.call(arguments, 1)
    , callbacks = this._callbacks[event];

  if (callbacks) {
    callbacks = callbacks.slice(0);
    for (var i = 0, len = callbacks.length; i < len; ++i) {
      callbacks[i].apply(this, args);
    }
  }

  return this;
};

/**
 * Return array of callbacks for `event`.
 *
 * @param {String} event
 * @return {Array}
 * @api public
 */

Emitter.prototype.listeners = function(event){
  this._callbacks = this._callbacks || {};
  return this._callbacks[event] || [];
};

/**
 * Check if this emitter has `event` handlers.
 *
 * @param {String} event
 * @return {Boolean}
 * @api public
 */

Emitter.prototype.hasListeners = function(event){
  return !! this.listeners(event).length;
};

},{}],6:[function(require,module,exports){

/**
 * Reduce `arr` with `fn`.
 *
 * @param {Array} arr
 * @param {Function} fn
 * @param {Mixed} initial
 *
 * TODO: combatible error handling?
 */

module.exports = function(arr, fn, initial){  
  var idx = 0;
  var len = arr.length;
  var curr = arguments.length == 3
    ? initial
    : arr[idx++];

  while (idx < len) {
    curr = fn.call(null, curr, arr[idx], ++idx, arr);
  }
  
  return curr;
};
},{}],7:[function(require,module,exports){
/**
 * Module dependencies.
 */

var Emitter = require('emitter');
var reduce = require('reduce');

/**
 * Root reference for iframes.
 */

var root = 'undefined' == typeof window
  ? this
  : window;

/**
 * Noop.
 */

function noop(){};

/**
 * Check if `obj` is a host object,
 * we don't want to serialize these :)
 *
 * TODO: future proof, move to compoent land
 *
 * @param {Object} obj
 * @return {Boolean}
 * @api private
 */

function isHost(obj) {
  var str = {}.toString.call(obj);

  switch (str) {
    case '[object File]':
    case '[object Blob]':
    case '[object FormData]':
      return true;
    default:
      return false;
  }
}

/**
 * Determine XHR.
 */

request.getXHR = function () {
  if (root.XMLHttpRequest
    && ('file:' != root.location.protocol || !root.ActiveXObject)) {
    return new XMLHttpRequest;
  } else {
    try { return new ActiveXObject('Microsoft.XMLHTTP'); } catch(e) {}
    try { return new ActiveXObject('Msxml2.XMLHTTP.6.0'); } catch(e) {}
    try { return new ActiveXObject('Msxml2.XMLHTTP.3.0'); } catch(e) {}
    try { return new ActiveXObject('Msxml2.XMLHTTP'); } catch(e) {}
  }
  return false;
};

/**
 * Removes leading and trailing whitespace, added to support IE.
 *
 * @param {String} s
 * @return {String}
 * @api private
 */

var trim = ''.trim
  ? function(s) { return s.trim(); }
  : function(s) { return s.replace(/(^\s*|\s*$)/g, ''); };

/**
 * Check if `obj` is an object.
 *
 * @param {Object} obj
 * @return {Boolean}
 * @api private
 */

function isObject(obj) {
  return obj === Object(obj);
}

/**
 * Serialize the given `obj`.
 *
 * @param {Object} obj
 * @return {String}
 * @api private
 */

function serialize(obj) {
  if (!isObject(obj)) return obj;
  var pairs = [];
  for (var key in obj) {
    if (null != obj[key]) {
      pairs.push(encodeURIComponent(key)
        + '=' + encodeURIComponent(obj[key]));
    }
  }
  return pairs.join('&');
}

/**
 * Expose serialization method.
 */

 request.serializeObject = serialize;

 /**
  * Parse the given x-www-form-urlencoded `str`.
  *
  * @param {String} str
  * @return {Object}
  * @api private
  */

function parseString(str) {
  var obj = {};
  var pairs = str.split('&');
  var parts;
  var pair;

  for (var i = 0, len = pairs.length; i < len; ++i) {
    pair = pairs[i];
    parts = pair.split('=');
    obj[decodeURIComponent(parts[0])] = decodeURIComponent(parts[1]);
  }

  return obj;
}

/**
 * Expose parser.
 */

request.parseString = parseString;

/**
 * Default MIME type map.
 *
 *     superagent.types.xml = 'application/xml';
 *
 */

request.types = {
  html: 'text/html',
  json: 'application/json',
  xml: 'application/xml',
  urlencoded: 'application/x-www-form-urlencoded',
  'form': 'application/x-www-form-urlencoded',
  'form-data': 'application/x-www-form-urlencoded'
};

/**
 * Default serialization map.
 *
 *     superagent.serialize['application/xml'] = function(obj){
 *       return 'generated xml here';
 *     };
 *
 */

 request.serialize = {
   'application/x-www-form-urlencoded': serialize,
   'application/json': JSON.stringify
 };

 /**
  * Default parsers.
  *
  *     superagent.parse['application/xml'] = function(str){
  *       return { object parsed from str };
  *     };
  *
  */

request.parse = {
  'application/x-www-form-urlencoded': parseString,
  'application/json': JSON.parse
};

/**
 * Parse the given header `str` into
 * an object containing the mapped fields.
 *
 * @param {String} str
 * @return {Object}
 * @api private
 */

function parseHeader(str) {
  var lines = str.split(/\r?\n/);
  var fields = {};
  var index;
  var line;
  var field;
  var val;

  lines.pop(); // trailing CRLF

  for (var i = 0, len = lines.length; i < len; ++i) {
    line = lines[i];
    index = line.indexOf(':');
    field = line.slice(0, index).toLowerCase();
    val = trim(line.slice(index + 1));
    fields[field] = val;
  }

  return fields;
}

/**
 * Return the mime type for the given `str`.
 *
 * @param {String} str
 * @return {String}
 * @api private
 */

function type(str){
  return str.split(/ *; */).shift();
};

/**
 * Return header field parameters.
 *
 * @param {String} str
 * @return {Object}
 * @api private
 */

function params(str){
  return reduce(str.split(/ *; */), function(obj, str){
    var parts = str.split(/ *= */)
      , key = parts.shift()
      , val = parts.shift();

    if (key && val) obj[key] = val;
    return obj;
  }, {});
};

/**
 * Initialize a new `Response` with the given `xhr`.
 *
 *  - set flags (.ok, .error, etc)
 *  - parse header
 *
 * Examples:
 *
 *  Aliasing `superagent` as `request` is nice:
 *
 *      request = superagent;
 *
 *  We can use the promise-like API, or pass callbacks:
 *
 *      request.get('/').end(function(res){});
 *      request.get('/', function(res){});
 *
 *  Sending data can be chained:
 *
 *      request
 *        .post('/user')
 *        .send({ name: 'tj' })
 *        .end(function(res){});
 *
 *  Or passed to `.send()`:
 *
 *      request
 *        .post('/user')
 *        .send({ name: 'tj' }, function(res){});
 *
 *  Or passed to `.post()`:
 *
 *      request
 *        .post('/user', { name: 'tj' })
 *        .end(function(res){});
 *
 * Or further reduced to a single call for simple cases:
 *
 *      request
 *        .post('/user', { name: 'tj' }, function(res){});
 *
 * @param {XMLHTTPRequest} xhr
 * @param {Object} options
 * @api private
 */

function Response(req, options) {
  options = options || {};
  this.req = req;
  this.xhr = this.req.xhr;
  // responseText is accessible only if responseType is '' or 'text'
  this.text = (this.req.method !='HEAD' && (this.xhr.responseType === '' || this.xhr.responseType === 'text'))
     ? this.xhr.responseText
     : null;
  this.statusText = this.req.xhr.statusText;
  this.setStatusProperties(this.xhr.status);
  this.header = this.headers = parseHeader(this.xhr.getAllResponseHeaders());
  // getAllResponseHeaders sometimes falsely returns "" for CORS requests, but
  // getResponseHeader still works. so we get content-type even if getting
  // other headers fails.
  this.header['content-type'] = this.xhr.getResponseHeader('content-type');
  this.setHeaderProperties(this.header);
  this.body = this.req.method != 'HEAD'
    ? this.parseBody(this.text ? this.text : this.xhr.response)
    : null;
}

/**
 * Get case-insensitive `field` value.
 *
 * @param {String} field
 * @return {String}
 * @api public
 */

Response.prototype.get = function(field){
  return this.header[field.toLowerCase()];
};

/**
 * Set header related properties:
 *
 *   - `.type` the content type without params
 *
 * A response of "Content-Type: text/plain; charset=utf-8"
 * will provide you with a `.type` of "text/plain".
 *
 * @param {Object} header
 * @api private
 */

Response.prototype.setHeaderProperties = function(header){
  // content-type
  var ct = this.header['content-type'] || '';
  this.type = type(ct);

  // params
  var obj = params(ct);
  for (var key in obj) this[key] = obj[key];
};

/**
 * Parse the given body `str`.
 *
 * Used for auto-parsing of bodies. Parsers
 * are defined on the `superagent.parse` object.
 *
 * @param {String} str
 * @return {Mixed}
 * @api private
 */

Response.prototype.parseBody = function(str){
  var parse = request.parse[this.type];
  return parse && str && (str.length || str instanceof Object)
    ? parse(str)
    : null;
};

/**
 * Set flags such as `.ok` based on `status`.
 *
 * For example a 2xx response will give you a `.ok` of __true__
 * whereas 5xx will be __false__ and `.error` will be __true__. The
 * `.clientError` and `.serverError` are also available to be more
 * specific, and `.statusType` is the class of error ranging from 1..5
 * sometimes useful for mapping respond colors etc.
 *
 * "sugar" properties are also defined for common cases. Currently providing:
 *
 *   - .noContent
 *   - .badRequest
 *   - .unauthorized
 *   - .notAcceptable
 *   - .notFound
 *
 * @param {Number} status
 * @api private
 */

Response.prototype.setStatusProperties = function(status){
  var type = status / 100 | 0;

  // status / class
  this.status = status;
  this.statusType = type;

  // basics
  this.info = 1 == type;
  this.ok = 2 == type;
  this.clientError = 4 == type;
  this.serverError = 5 == type;
  this.error = (4 == type || 5 == type)
    ? this.toError()
    : false;

  // sugar
  this.accepted = 202 == status;
  this.noContent = 204 == status || 1223 == status;
  this.badRequest = 400 == status;
  this.unauthorized = 401 == status;
  this.notAcceptable = 406 == status;
  this.notFound = 404 == status;
  this.forbidden = 403 == status;
};

/**
 * Return an `Error` representative of this response.
 *
 * @return {Error}
 * @api public
 */

Response.prototype.toError = function(){
  var req = this.req;
  var method = req.method;
  var url = req.url;

  var msg = 'cannot ' + method + ' ' + url + ' (' + this.status + ')';
  var err = new Error(msg);
  err.status = this.status;
  err.method = method;
  err.url = url;

  return err;
};

/**
 * Expose `Response`.
 */

request.Response = Response;

/**
 * Initialize a new `Request` with the given `method` and `url`.
 *
 * @param {String} method
 * @param {String} url
 * @api public
 */

function Request(method, url) {
  var self = this;
  Emitter.call(this);
  this._query = this._query || [];
  this.method = method;
  this.url = url;
  this.header = {};
  this._header = {};
  this.on('end', function(){
    var err = null;
    var res = null;

    try {
      res = new Response(self);
    } catch(e) {
      err = new Error('Parser is unable to parse the response');
      err.parse = true;
      err.original = e;
    }

    if (res) {
      self.emit('response', res);
    }

    if (res && res.status >= 200 && res.status < 300) {
      return self.callback(err, res);
    }

    var msg = 'Unsuccessful HTTP response';
    if (res) {
      msg = res.statusText || msg;
    }
    var new_err = new Error(msg);
    new_err.original = err;

    self.callback(err || new_err, res);
  });
}

/**
 * Mixin `Emitter`.
 */

Emitter(Request.prototype);

/**
 * Allow for extension
 */

Request.prototype.use = function(fn) {
  fn(this);
  return this;
}

/**
 * Set timeout to `ms`.
 *
 * @param {Number} ms
 * @return {Request} for chaining
 * @api public
 */

Request.prototype.timeout = function(ms){
  this._timeout = ms;
  return this;
};

/**
 * Clear previous timeout.
 *
 * @return {Request} for chaining
 * @api public
 */

Request.prototype.clearTimeout = function(){
  this._timeout = 0;
  clearTimeout(this._timer);
  return this;
};

/**
 * Abort the request, and clear potential timeout.
 *
 * @return {Request}
 * @api public
 */

Request.prototype.abort = function(){
  if (this.aborted) return;
  this.aborted = true;
  this.xhr.abort();
  this.clearTimeout();
  this.emit('abort');
  return this;
};

/**
 * Set header `field` to `val`, or multiple fields with one object.
 *
 * Examples:
 *
 *      req.get('/')
 *        .set('Accept', 'application/json')
 *        .set('X-API-Key', 'foobar')
 *        .end(callback);
 *
 *      req.get('/')
 *        .set({ Accept: 'application/json', 'X-API-Key': 'foobar' })
 *        .end(callback);
 *
 * @param {String|Object} field
 * @param {String} val
 * @return {Request} for chaining
 * @api public
 */

Request.prototype.set = function(field, val){
  if (isObject(field)) {
    for (var key in field) {
      this.set(key, field[key]);
    }
    return this;
  }
  this._header[field.toLowerCase()] = val;
  this.header[field] = val;
  return this;
};

/**
 * Remove header `field`.
 *
 * Example:
 *
 *      req.get('/')
 *        .unset('User-Agent')
 *        .end(callback);
 *
 * @param {String} field
 * @return {Request} for chaining
 * @api public
 */

Request.prototype.unset = function(field){
  delete this._header[field.toLowerCase()];
  delete this.header[field];
  return this;
};

/**
 * Get case-insensitive header `field` value.
 *
 * @param {String} field
 * @return {String}
 * @api private
 */

Request.prototype.getHeader = function(field){
  return this._header[field.toLowerCase()];
};

/**
 * Set Content-Type to `type`, mapping values from `request.types`.
 *
 * Examples:
 *
 *      superagent.types.xml = 'application/xml';
 *
 *      request.post('/')
 *        .type('xml')
 *        .send(xmlstring)
 *        .end(callback);
 *
 *      request.post('/')
 *        .type('application/xml')
 *        .send(xmlstring)
 *        .end(callback);
 *
 * @param {String} type
 * @return {Request} for chaining
 * @api public
 */

Request.prototype.type = function(type){
  this.set('Content-Type', request.types[type] || type);
  return this;
};

/**
 * Set Accept to `type`, mapping values from `request.types`.
 *
 * Examples:
 *
 *      superagent.types.json = 'application/json';
 *
 *      request.get('/agent')
 *        .accept('json')
 *        .end(callback);
 *
 *      request.get('/agent')
 *        .accept('application/json')
 *        .end(callback);
 *
 * @param {String} accept
 * @return {Request} for chaining
 * @api public
 */

Request.prototype.accept = function(type){
  this.set('Accept', request.types[type] || type);
  return this;
};

/**
 * Set Authorization field value with `user` and `pass`.
 *
 * @param {String} user
 * @param {String} pass
 * @return {Request} for chaining
 * @api public
 */

Request.prototype.auth = function(user, pass){
  var str = btoa(user + ':' + pass);
  this.set('Authorization', 'Basic ' + str);
  return this;
};

/**
* Add query-string `val`.
*
* Examples:
*
*   request.get('/shoes')
*     .query('size=10')
*     .query({ color: 'blue' })
*
* @param {Object|String} val
* @return {Request} for chaining
* @api public
*/

Request.prototype.query = function(val){
  if ('string' != typeof val) val = serialize(val);
  if (val) this._query.push(val);
  return this;
};

/**
 * Write the field `name` and `val` for "multipart/form-data"
 * request bodies.
 *
 * ``` js
 * request.post('/upload')
 *   .field('foo', 'bar')
 *   .end(callback);
 * ```
 *
 * @param {String} name
 * @param {String|Blob|File} val
 * @return {Request} for chaining
 * @api public
 */

Request.prototype.field = function(name, val){
  if (!this._formData) this._formData = new root.FormData();
  this._formData.append(name, val);
  return this;
};

/**
 * Queue the given `file` as an attachment to the specified `field`,
 * with optional `filename`.
 *
 * ``` js
 * request.post('/upload')
 *   .attach(new Blob(['<a id="a"><b id="b">hey!</b></a>'], { type: "text/html"}))
 *   .end(callback);
 * ```
 *
 * @param {String} field
 * @param {Blob|File} file
 * @param {String} filename
 * @return {Request} for chaining
 * @api public
 */

Request.prototype.attach = function(field, file, filename){
  if (!this._formData) this._formData = new root.FormData();
  this._formData.append(field, file, filename);
  return this;
};

/**
 * Send `data`, defaulting the `.type()` to "json" when
 * an object is given.
 *
 * Examples:
 *
 *       // querystring
 *       request.get('/search')
 *         .end(callback)
 *
 *       // multiple data "writes"
 *       request.get('/search')
 *         .send({ search: 'query' })
 *         .send({ range: '1..5' })
 *         .send({ order: 'desc' })
 *         .end(callback)
 *
 *       // manual json
 *       request.post('/user')
 *         .type('json')
 *         .send('{"name":"tj"})
 *         .end(callback)
 *
 *       // auto json
 *       request.post('/user')
 *         .send({ name: 'tj' })
 *         .end(callback)
 *
 *       // manual x-www-form-urlencoded
 *       request.post('/user')
 *         .type('form')
 *         .send('name=tj')
 *         .end(callback)
 *
 *       // auto x-www-form-urlencoded
 *       request.post('/user')
 *         .type('form')
 *         .send({ name: 'tj' })
 *         .end(callback)
 *
 *       // defaults to x-www-form-urlencoded
  *      request.post('/user')
  *        .send('name=tobi')
  *        .send('species=ferret')
  *        .end(callback)
 *
 * @param {String|Object} data
 * @return {Request} for chaining
 * @api public
 */

Request.prototype.send = function(data){
  var obj = isObject(data);
  var type = this.getHeader('Content-Type');

  // merge
  if (obj && isObject(this._data)) {
    for (var key in data) {
      this._data[key] = data[key];
    }
  } else if ('string' == typeof data) {
    if (!type) this.type('form');
    type = this.getHeader('Content-Type');
    if ('application/x-www-form-urlencoded' == type) {
      this._data = this._data
        ? this._data + '&' + data
        : data;
    } else {
      this._data = (this._data || '') + data;
    }
  } else {
    this._data = data;
  }

  if (!obj || isHost(data)) return this;
  if (!type) this.type('json');
  return this;
};

/**
 * Invoke the callback with `err` and `res`
 * and handle arity check.
 *
 * @param {Error} err
 * @param {Response} res
 * @api private
 */

Request.prototype.callback = function(err, res){
  var fn = this._callback;
  this.clearTimeout();
  fn(err, res);
};

/**
 * Invoke callback with x-domain error.
 *
 * @api private
 */

Request.prototype.crossDomainError = function(){
  var err = new Error('Origin is not allowed by Access-Control-Allow-Origin');
  err.crossDomain = true;
  this.callback(err);
};

/**
 * Invoke callback with timeout error.
 *
 * @api private
 */

Request.prototype.timeoutError = function(){
  var timeout = this._timeout;
  var err = new Error('timeout of ' + timeout + 'ms exceeded');
  err.timeout = timeout;
  this.callback(err);
};

/**
 * Enable transmission of cookies with x-domain requests.
 *
 * Note that for this to work the origin must not be
 * using "Access-Control-Allow-Origin" with a wildcard,
 * and also must set "Access-Control-Allow-Credentials"
 * to "true".
 *
 * @api public
 */

Request.prototype.withCredentials = function(){
  this._withCredentials = true;
  return this;
};

/**
 * Initiate request, invoking callback `fn(res)`
 * with an instanceof `Response`.
 *
 * @param {Function} fn
 * @return {Request} for chaining
 * @api public
 */

Request.prototype.end = function(fn){
  var self = this;
  var xhr = this.xhr = request.getXHR();
  var query = this._query.join('&');
  var timeout = this._timeout;
  var data = this._formData || this._data;

  // store callback
  this._callback = fn || noop;

  // state change
  xhr.onreadystatechange = function(){
    if (4 != xhr.readyState) return;

    // In IE9, reads to any property (e.g. status) off of an aborted XHR will
    // result in the error "Could not complete the operation due to error c00c023f"
    var status;
    try { status = xhr.status } catch(e) { status = 0; }

    if (0 == status) {
      if (self.timedout) return self.timeoutError();
      if (self.aborted) return;
      return self.crossDomainError();
    }
    self.emit('end');
  };

  // progress
  try {
    if (xhr.upload && this.hasListeners('progress')) {
      xhr.upload.onprogress = function(e){
        e.percent = e.loaded / e.total * 100;
        self.emit('progress', e);
      };
    }
  } catch(e) {
    // Accessing xhr.upload fails in IE from a web worker, so just pretend it doesn't exist.
    // Reported here:
    // https://connect.microsoft.com/IE/feedback/details/837245/xmlhttprequest-upload-throws-invalid-argument-when-used-from-web-worker-context
  }

  // timeout
  if (timeout && !this._timer) {
    this._timer = setTimeout(function(){
      self.timedout = true;
      self.abort();
    }, timeout);
  }

  // querystring
  if (query) {
    query = request.serializeObject(query);
    this.url += ~this.url.indexOf('?')
      ? '&' + query
      : '?' + query;
  }

  // initiate request
  xhr.open(this.method, this.url, true);

  // CORS
  if (this._withCredentials) xhr.withCredentials = true;

  // body
  if ('GET' != this.method && 'HEAD' != this.method && 'string' != typeof data && !isHost(data)) {
    // serialize stuff
    var serialize = request.serialize[this.getHeader('Content-Type')];
    if (serialize) data = serialize(data);
  }

  // set header fields
  for (var field in this.header) {
    if (null == this.header[field]) continue;
    xhr.setRequestHeader(field, this.header[field]);
  }

  // send stuff
  this.emit('request', this);
  xhr.send(data);
  return this;
};

/**
 * Expose `Request`.
 */

request.Request = Request;

/**
 * Issue a request:
 *
 * Examples:
 *
 *    request('GET', '/users').end(callback)
 *    request('/users').end(callback)
 *    request('/users', callback)
 *
 * @param {String} method
 * @param {String|Function} url or callback
 * @return {Request}
 * @api public
 */

function request(method, url) {
  // callback
  if ('function' == typeof url) {
    return new Request('GET', method).end(url);
  }

  // url first
  if (1 == arguments.length) {
    return new Request('GET', method);
  }

  return new Request(method, url);
}

/**
 * GET `url` with optional callback `fn(res)`.
 *
 * @param {String} url
 * @param {Mixed|Function} data or fn
 * @param {Function} fn
 * @return {Request}
 * @api public
 */

request.get = function(url, data, fn){
  var req = request('GET', url);
  if ('function' == typeof data) fn = data, data = null;
  if (data) req.query(data);
  if (fn) req.end(fn);
  return req;
};

/**
 * HEAD `url` with optional callback `fn(res)`.
 *
 * @param {String} url
 * @param {Mixed|Function} data or fn
 * @param {Function} fn
 * @return {Request}
 * @api public
 */

request.head = function(url, data, fn){
  var req = request('HEAD', url);
  if ('function' == typeof data) fn = data, data = null;
  if (data) req.send(data);
  if (fn) req.end(fn);
  return req;
};

/**
 * DELETE `url` with optional callback `fn(res)`.
 *
 * @param {String} url
 * @param {Function} fn
 * @return {Request}
 * @api public
 */

request.del = function(url, fn){
  var req = request('DELETE', url);
  if (fn) req.end(fn);
  return req;
};

/**
 * PATCH `url` with optional `data` and callback `fn(res)`.
 *
 * @param {String} url
 * @param {Mixed} data
 * @param {Function} fn
 * @return {Request}
 * @api public
 */

request.patch = function(url, data, fn){
  var req = request('PATCH', url);
  if ('function' == typeof data) fn = data, data = null;
  if (data) req.send(data);
  if (fn) req.end(fn);
  return req;
};

/**
 * POST `url` with optional `data` and callback `fn(res)`.
 *
 * @param {String} url
 * @param {Mixed} data
 * @param {Function} fn
 * @return {Request}
 * @api public
 */

request.post = function(url, data, fn){
  var req = request('POST', url);
  if ('function' == typeof data) fn = data, data = null;
  if (data) req.send(data);
  if (fn) req.end(fn);
  return req;
};

/**
 * PUT `url` with optional `data` and callback `fn(res)`.
 *
 * @param {String} url
 * @param {Mixed|Function} data or fn
 * @param {Function} fn
 * @return {Request}
 * @api public
 */

request.put = function(url, data, fn){
  var req = request('PUT', url);
  if ('function' == typeof data) fn = data, data = null;
  if (data) req.send(data);
  if (fn) req.end(fn);
  return req;
};

/**
 * Expose `request`.
 */

module.exports = request;

},{"emitter":5,"reduce":6}],8:[function(require,module,exports){
(function (Buffer){
(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['superagent'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('superagent'));
  } else {
    // Browser globals (root is window)
    if (!root.platformClient) {
      root.platformClient = {};
    }
    root.platformClient.ApiClient = factory(root.superagent);
  }
}(this, function(superagent) {
  'use strict';

  /**
   * @module purecloud-platform-client-v2/ApiClient
   * @version 6.0.1
   */

  /**
   * Manages low level client-server communications, parameter marshalling, etc. There should not be any need for an
   * application to use this class directly - the *Api and model classes provide the public API for the service. The
   * contents of this file should be regarded as internal but are documented for completeness.
   * @alias module:purecloud-platform-client-v2/ApiClient
   * @class
   */
  var exports = function() {
    /**
     * The base URL against which to resolve every API call's (relative) path.
     * @type {String}
     * @default https://api.mypurecloud.com
     */
    this.setEnvironment('https://api.mypurecloud.com');

    /**
     * The authentication methods to be included for all API calls.
     * @type {Array.<String>}
     */
    this.authentications = {
      'PureCloud Auth': {type: 'oauth2'}
    };

    /**
     * The default HTTP headers to be included for all API calls.
     * @type {Array.<String>}
     * @default {}
     */
    this.defaultHeaders = {};

    /**
     * The default HTTP timeout for all API calls.
     * @type {Number}
     * @default 60000
     */
    this.timeout = 16000;

    this.settingsPrefix = 'purecloud';

    // Check for auth token in hash
    this._setValuesFromUrlHash();
  };

  /**
   * @description Sets the debug log to enable debug logging
   * @param {log} debugLog - In most cases use `console.log`
   * @param {integer} maxLines - (optional) The max number of lines to write to the log. Must be > 0.
   */
  exports.prototype.setDebugLog = function setDebugLoggingEnabled(debugLog, maxLines) {
    this.debugLog = debugLog;
    this.debugLogMaxLines = (maxLines && maxLines > 0) ? maxLines : undefined;
  };

  /**
   * @description If set to `true`, the response object will contain additional information about the HTTP response. When `false` (default) only the body object will be returned.
   * @param {boolean} returnExtended - `true` to return extended responses
   */
  exports.prototype.setReturnExtendedResponses = function setReturnExtendedResponses(returnExtended) {
    this.returnExtended = returnExtended;
  };

  /**
   * @description When `true`, persists the auth token to local storage to avoid a redirect to the login page on each page load. Defaults to `false`.
   * @param {boolean} doPersist - `true` to persist the auth token to local storage
   * @param {string} prefix - (Optional, default 'purecloud') The name prefix used for the local storage key
   */
  exports.prototype.setPersistSettings = function setPersistSettings(doPersist, prefix) {
    this.persistSettings = doPersist;
    this.settingsPrefix = prefix ? prefix.replace(/\W+/g, '_') : 'purecloud';
    this._debugTrace(`this.settingsPrefix=${this.settingsPrefix}`);
  };

  /**
   * @description Saves the auth token to local storage, if enabled.
   */
  exports.prototype._saveSettings = function _saveSettings() {
    try {
      // Don't save settings if we aren't supposed to be persisting them
      if (this.persistSettings !== true) return;

      // Ensure we can access local storage
      if (!exports.hasLocalStorage) {
        this._debugTrace('Warning: Cannot access local storage. Settings will not be saved.');
        return;
      }

      // Save settings
      if (this.authentications['PureCloud Auth'].accessToken) {
        localStorage.setItem(`${this.settingsPrefix}_access_token`, this.authentications['PureCloud Auth'].accessToken);
        this._debugTrace('Access token saved to local storage');
      } else {
        this._debugTrace('Access token cleared');
        localStorage.removeItem(`${this.settingsPrefix}_access_token`);
      }
    } catch (e) {
      console.error(e);
    }
  };

  /**
   * @description Loads settings from local storage, if enabled.
   */
  exports.prototype._loadSettings = function _loadSettings() {
    // Don't load settings if we aren't supposed to be persisting them
    if (this.persistSettings !== true) return;

    // Ensure we can access local storage
    if (!exports.hasLocalStorage) {
      this._debugTrace('Warning: Cannot access local storage. Settings will not be loaded.');
      return;
    }

    var token = localStorage.getItem(`${this.settingsPrefix}_access_token`);
    if (token) {
      this.setAccessToken(token);
      this._debugTrace('Access token retrieved from local storage');
    }
  };

  /**
   * @description Sets the environment used by the session
   * @param {string} environment - (Optional, default "mypurecloud.com") Environment the session use, e.g. mypurecloud.ie, mypurecloud.com.au, etc.
   */
  exports.prototype.setEnvironment = function setEnvironment(environment) {
    if (!environment)
      environment = 'mypurecloud.com';

    // Strip trailing slash
    environment = environment.replace(/\/+$/, '');

    // Strip protocol and subdomain
    if (environment.startsWith('https://'))
      environment = environment.substring(8);
    if (environment.startsWith('http://'))
      environment = environment.substring(7);
    if (environment.startsWith('api.'))
      environment = environment.substring(4);

    // Set vars
    this.environment = environment;
    this.basePath = `https://api.${environment}`;
    this.authUrl = `https://login.${environment}`;
  };

  /**
   * @description Initiates the implicit grant login flow. Will attempt to load the token from local storage, if enabled.
   * @param {string} clientId - The client ID of an OAuth Implicit Grant client
   * @param {string} redirectUri - The redirect URI of the OAuth Implicit Grant client
   */
  exports.prototype.loginImplicitGrant = function loginImplicitGrant(clientId, redirectUri) {
    var self = this;
    this.clientId = clientId;
    this.redirectUri = redirectUri;

    return new Promise(function(resolve, reject) {
      self._testTokenAccess()
        .then(function() {
          resolve();
        })
        .catch(function(error) {
          var query = {
              client_id: encodeURIComponent(self.clientId),
              redirect_uri: encodeURI(self.redirectUri),
              response_type: 'token'
          };

          var url = self._buildAuthUrl('oauth/authorize', query);
          self._debugTrace(`Implicit grant: redirecting to ${url} for authorization...`);
          window.location.replace(url);
        });
    });
  };

  /**
   * @description Initiates the client credentials login flow. Only available in node apps.
   * @param {string} clientId - The client ID of an OAuth Implicit Grant client
   * @param {string} clientSecret - The client secret of an OAuth Implicit Grant client
   */
  exports.prototype.loginClientCredentialsGrant = function loginClientCredentialsGrant(clientId, clientSecret) {
    var self = this;
    this.clientId = clientId;
    var authHeader = new Buffer(clientId + ':' + clientSecret).toString('base64');

    return new Promise(function(resolve, reject) {
      // Block browsers from using client credentials
      if (typeof window !== 'undefined') {
        reject(new Error('The client credentials grant is not supported in a browser.'));
        return;
      }

      // Build token request
      var request = superagent('POST', `https://login.${self.environment}/oauth/token`);
      request.set('Authorization', `Basic ${authHeader}`);
      request.send('grant_type=client_credentials');

      // Execute request
      request.end(function(error, response) {
        if (error) {
          reject(error);
        } else {
          self.setAccessToken(response.body['access_token']);
          self._debugTrace(`Access token expires in ${response.body['expires_in']} seconds`);
          resolve();
        }
      });
    });
  };

  /**
   * @description Loads token from storage, if enabled, and checks to ensure it works.
   */
  exports.prototype._testTokenAccess = function _testTokenAccess() {
    var self = this;
    return new Promise(function(resolve, reject) {
      // Load from storage
      self._loadSettings();

      // Check if there is a token to test
      if (!self.authentications['PureCloud Auth'].accessToken) {
        reject(new Error('Token is not set'));
        return;
      }

      // Test token
      self.callApi('/api/v2/authorization/permissions', 'GET', 
        null, null, null, null, null, ['PureCloud Auth'], ['application/json'], ['application/json'])
        .then(function(roles) {
          self._saveSettings();
          resolve();
        })
        .catch(function(error) {
          self.setAccessToken(undefined);
          reject(error);
        });
    });
  };

  /**
   * @description Parses the URL hash, grabs the access token, and clears the hash. If no access token is found, no action is taken.
   */
  exports.prototype._setValuesFromUrlHash = function() {
    // Check for window
    if(!(typeof window !== 'undefined' && window.location.hash)) return;

    // Process hash string into object
    var hash = window.location.hash
      .slice(1).split('&')
      .reduce(function(obj, pair) {
        var keyValue = pair.split('=');
        obj[keyValue[0]] = keyValue[1];
        return obj;
      }, {});

    // Set access token
    if(hash.access_token) {
      // Set access token
      this.setAccessToken(hash.access_token);

      // Remove hash from URL
      // Credit: https://stackoverflow.com/questions/1397329/how-to-remove-the-hash-from-window-location-with-javascript-without-page-refresh/5298684#5298684
      var scrollV, scrollH, loc = window.location;
      if ('replaceState' in history) {
        history.replaceState('', document.title, loc.pathname + loc.search);
      } else {
        // Prevent scrolling by storing the page's current scroll offset
        scrollV = document.body.scrollTop;
        scrollH = document.body.scrollLeft;

        // Remove hash
        loc.hash = '';

        // Restore the scroll offset, should be flicker free
        document.body.scrollTop = scrollV;
        document.body.scrollLeft = scrollH;
      }
    }
  };

  /**
   * @description Sets the access token to be used with requests
   * @param {string} token - The access token
   */
  exports.prototype.setAccessToken = function(token) {
    // Set token for API use
    this.authentications['PureCloud Auth'].accessToken = token;

    this._saveSettings();
  };

  /**
   * @description Sets the storage key to use when persisting the access token
   * @param {string} storageKey - The storage key name
   */
  exports.prototype.setStorageKey = function(storageKey) {
    // Set storage key
    this.storageKey = storageKey;

    // Trigger storage of current token
    this.setAccessToken(this.authentications['PureCloud Auth'].accessToken);
  };

  /**
   * @description Value is `true` if local storage exists. Otherwise, false.
   */
  exports.hasLocalStorage = (function() {
    try {
      localStorage.setItem('purecloud_local_storage_test', 'purecloud_local_storage_test');
      localStorage.removeItem('purecloud_local_storage_test');
      return true;
    } catch(e) {
      return false;
    }
  }).call(this);

  /**
   * @description Redirects the user to the PureCloud logout page
   */
  exports.prototype.logout = function() {
    if(exports.hasLocalStorage) {
        this.setAccessToken(null);
    }

    var query = {
        client_id: encodeURIComponent(this.clientId),
        redirect_uri: encodeURI(this.redirectUri)
    };

    var url = this._buildAuthUrl('logout', query);
    window.location.replace(url);
};

  /**
   * @description Constructs a URL to the auth server
   * @param {string} path - The path for the URL
   * @param {object} query - An object of key/value pairs to use for querystring keys/values
   */
  exports.prototype._buildAuthUrl = function(path, query) {
  function qs(url, key) {
      var val = query[key];
      if(!val) return url;
      return `${url}&${key}=${val}`;
  }

  if (!query) {
    query = {};
  }

  var baseUrl = `${this.authUrl}/${path}?`;
  return Object.keys(query).reduce(qs, baseUrl);
};

  /**
   * Returns a string representation for an actual parameter.
   * @param param The actual parameter.
   * @returns {String} The string representation of <code>param</code>.
   */
  exports.prototype.paramToString = function(param) {
    if (param === undefined || param === null) {
      return '';
    }
    if (param instanceof Date) {
      return param.toJSON();
    }
    return param.toString();
  };

  /**
   * Builds full URL by appending the given path to the base URL and replacing path parameter place-holders with parameter values.
   * NOTE: query parameters are not handled here.
   * @param {String} path The path to append to the base URL.
   * @param {Object} pathParams The parameter values to append.
   * @returns {String} The encoded path with parameter values substituted.
   */
  exports.prototype.buildUrl = function(path, pathParams) {
    if (!path.match(/^\//)) {
      path = '/' + path;
    }
    var url = this.basePath + path;
    var _this = this;
    url = url.replace(/\{([\w-]+)\}/g, function(fullMatch, key) {
      var value;
      if (pathParams.hasOwnProperty(key)) {
        value = _this.paramToString(pathParams[key]);
      } else {
        value = fullMatch;
      }
      return encodeURIComponent(value);
    });
    return url;
  };

  /**
   * Checks whether the given content type represents JSON.<br>
   * JSON content type examples:<br>
   * <ul>
   * <li>application/json</li>
   * <li>application/json; charset=UTF8</li>
   * <li>APPLICATION/JSON</li>
   * </ul>
   * @param {String} contentType The MIME content type to check.
   * @returns {Boolean} <code>true</code> if <code>contentType</code> represents JSON, otherwise <code>false</code>.
   */
  exports.prototype.isJsonMime = function(contentType) {
    return Boolean(contentType !== null && contentType.match(/^application\/json(;.*)?$/i));
  };

  /**
   * Chooses a content type from the given array, with JSON preferred; i.e. return JSON if included, otherwise return the first.
   * @param {Array.<String>} contentTypes
   * @returns {String} The chosen content type, preferring JSON.
   */
  exports.prototype.jsonPreferredMime = function(contentTypes) {
    for (var i = 0; i < contentTypes.length; i++) {
      if (this.isJsonMime(contentTypes[i])) {
        return contentTypes[i];
      }
    }
    return contentTypes[0];
  };

  /**
   * Checks whether the given parameter value represents file-like content.
   * @param param The parameter to check.
   * @returns {Boolean} <code>true</code> if <code>param</code> represents a file. 
   */
  exports.prototype.isFileParam = function(param) {
    // fs.ReadStream in Node.js (but not in runtime like browserify)
    if (typeof window === 'undefined' &&
        typeof require === 'function' &&
        require('fs') &&
        param instanceof require('fs').ReadStream) {
      return true;
    }
    // Buffer in Node.js
    if (typeof Buffer === 'function' && param instanceof Buffer) {
      return true;
    }
    // Blob in browser
    if (typeof Blob === 'function' && param instanceof Blob) {
      return true;
    }
    // File in browser (it seems File object is also instance of Blob, but keep this for safe)
    if (typeof File === 'function' && param instanceof File) {
      return true;
    }
    return false;
  };

  /**
   * Normalizes parameter values:
   * <ul>
   * <li>remove nils</li>
   * <li>keep files and arrays</li>
   * <li>format to string with `paramToString` for other cases</li>
   * </ul>
   * @param {Object.<String, Object>} params The parameters as object properties.
   * @returns {Object.<String, Object>} normalized parameters.
   */
  exports.prototype.normalizeParams = function(params) {
    var newParams = {};
    for (var key in params) {
      if (params.hasOwnProperty(key) && params[key] !== undefined && params[key] !== null) {
        var value = params[key];
        if (this.isFileParam(value) || Array.isArray(value)) {
          newParams[key] = value;
        } else {
          newParams[key] = this.paramToString(value);
        }
      }
    }
    return newParams;
  };

  /**
   * Enumeration of collection format separator strategies.
   * @enum {String} 
   * @readonly
   */
  exports.CollectionFormatEnum = {
    /**
     * Comma-separated values. Value: <code>csv</code>
     * @const
     */
    CSV: ',',
    /**
     * Space-separated values. Value: <code>ssv</code>
     * @const
     */
    SSV: ' ',
    /**
     * Tab-separated values. Value: <code>tsv</code>
     * @const
     */
    TSV: '\t',
    /**
     * Pipe(|)-separated values. Value: <code>pipes</code>
     * @const
     */
    PIPES: '|',
    /**
     * Native array. Value: <code>multi</code>
     * @const
     */
    MULTI: 'multi'
  };

  /**
   * Builds a string representation of an array-type actual parameter, according to the given collection format.
   * @param {Array} param An array parameter.
   * @param {module:purecloud-platform-client-v2/ApiClient.CollectionFormatEnum} collectionFormat The array element separator strategy.
   * @returns {String|Array} A string representation of the supplied collection, using the specified delimiter. Returns
   * <code>param</code> as is if <code>collectionFormat</code> is <code>multi</code>.
   */
  exports.prototype.buildCollectionParam = function buildCollectionParam(param, collectionFormat) {
    if (param === null) {
      return null;
    }
    switch (collectionFormat) {
      case 'csv':
        return param.map(this.paramToString).join(',');
      case 'ssv':
        return param.map(this.paramToString).join(' ');
      case 'tsv':
        return param.map(this.paramToString).join('\t');
      case 'pipes':
        return param.map(this.paramToString).join('|');
      case 'multi':
        // return the array directly as SuperAgent will handle it as expected
        return param.map(this.paramToString);
      default:
        throw new Error('Unknown collection format: ' + collectionFormat);
    }
  };

  /**
   * Applies authentication headers to the request.
   * @param {Object} request The request object created by a <code>superagent()</code> call.
   * @param {Array.<String>} authNames An array of authentication method names.
   */
  exports.prototype.applyAuthToRequest = function(request, authNames) {
    var _this = this;
    authNames.forEach(function(authName) {
      var auth = _this.authentications[authName];
      switch (auth.type) {
        case 'basic':
          if (auth.username || auth.password) {
            request.auth(auth.username || '', auth.password || '');
          }
          break;
        case 'apiKey':
          if (auth.apiKey) {
            var data = {};
            if (auth.apiKeyPrefix) {
              data[auth.name] = auth.apiKeyPrefix + ' ' + auth.apiKey;
            } else {
              data[auth.name] = auth.apiKey;
            }
            if (auth['in'] === 'header') {
              request.set(data);
            } else {
              request.query(data);
            }
          }
          break;
        case 'oauth2':
          if (auth.accessToken) {
            request.set({'Authorization': 'Bearer ' + auth.accessToken});
          }
          break;
        default:
          throw new Error('Unknown authentication type: ' + auth.type);
      }
    });
  };

  /**
   * Invokes the REST service using the supplied settings and parameters.
   * @param {String} path The base URL to invoke.
   * @param {String} httpMethod The HTTP method to use.
   * @param {Object.<String, String>} pathParams A map of path parameters and their values.
   * @param {Object.<String, Object>} queryParams A map of query parameters and their values.
   * @param {Object.<String, Object>} headerParams A map of header parameters and their values.
   * @param {Object.<String, Object>} formParams A map of form parameters and their values.
   * @param {Object} bodyParam The value to pass as the request body.
   * @param {Array.<String>} authNames An array of authentication type names.
   * @param {Array.<String>} contentTypes An array of request MIME types.
   * @param {Array.<String>} accepts An array of acceptable response MIME types.types or the
   * constructor for a complex type.   * @returns {Promise} A Promise object.
   */
  exports.prototype.callApi = function callApi(path, httpMethod, pathParams,
      queryParams, headerParams, formParams, bodyParam, authNames, contentTypes, accepts) {

    var _this = this;
    var url = this.buildUrl(path, pathParams);
    var request = superagent(httpMethod, url);

    if(this.debugLog){
      var trace = `[REQUEST] ${httpMethod} ${url}`;
      if(pathParams && Object.keys(pathParams).count > 0 && pathParams[Object.keys(pathParams)[0]]){
        trace += "\nPath Params: " + JSON.stringify(pathParams);
      }

      if(queryParams && Object.keys(queryParams).count > 0 && queryParams[Object.keys(queryParams)[0]]){
        trace += "\nQuery Params: " + JSON.stringify(queryParams);
      }

      if(bodyParam){
        trace += "\nBody: " + JSON.stringify(bodyParam);
      }

      this._debugTrace(trace);
    }

    // apply authentications
    this.applyAuthToRequest(request, authNames);

    // set query parameters
    request.query(this.normalizeParams(queryParams));

    // set header parameters
    request.set(this.defaultHeaders).set(this.normalizeParams(headerParams));
    request.set({ 'purecloud-sdk': '6.0.1' });

    // set request timeout
    request.timeout(this.timeout);

    var contentType = this.jsonPreferredMime(contentTypes);
    if (contentType) {
      request.type(contentType);
    } else if (!request.header['Content-Type']) {
      request.type('application/json');
    }

    if (contentType === 'application/x-www-form-urlencoded') {
      request.send(this.normalizeParams(formParams));
    } else if (contentType == 'multipart/form-data') {
      var _formParams = this.normalizeParams(formParams);
      for (var key in _formParams) {
        if (_formParams.hasOwnProperty(key)) {
          if (this.isFileParam(_formParams[key])) {
            // file field
            request.attach(key, _formParams[key]);
          } else {
            request.field(key, _formParams[key]);
          }
        }
      }
    } else if (bodyParam) {
      request.send(bodyParam);
    }

    var accept = this.jsonPreferredMime(accepts);
    if (accept) {
      request.accept(accept);
    }

    return new Promise(function(resolve, reject) {
      request.end(function(error, response) {

        // Build response object
        var data = (_this.returnExtended === true || error) ? {
              status: response.status,
              statusText: response.statusText,
              headers: response.headers,
              body: response.body,
              text: response.text,
              error: error
            } : response.body ? response.body : response.text;

        // Debug logging
        if (_this.debugLog) {
          var trace = `[RESPONSE] ${response.status}: ${httpMethod} ${url}`;
          if (response.headers)
            trace += `\ninin-correlation-id: ${response.headers['inin-correlation-id']}`;
          if (response.body)
            trace += `\nBody: ${JSON.stringify(response.body,null,2)}`;

          // Log trace message
          _this._debugTrace(trace);

          // Log stack trace
          if (error)
            _this._debugTrace(error);
        }

        // Resolve promise
        if (error) {
          reject(data);
        } else {
          resolve(data);
        }
      });
    });
  };

  /**
   * @description Parses an ISO-8601 string representation of a date value.
   * @param {String} str The date value as a string.
   * @returns {Date} The parsed date object.
   */
  exports.parseDate = function(str) {
    return new Date(str.replace(/T/i, ' '));
  };

  /**
   * @description Logs to the debug log
   * @param {String} str The date value as a string.
   * @returns {Date} The parsed date object.
   */
  exports.prototype._debugTrace = function _debugTrace(trace) {
    if (!this.debugLog) return;

    if (typeof(trace) === 'string') {
      // Truncate
      var truncTrace = '';
      var lines = trace.split('\n');
      if (this.debugLogMaxLines && lines.length > this.debugLogMaxLines) {
        for  (var i = 0; i < this.debugLogMaxLines; i++) {
          truncTrace += lines[i] + '\n';
        }
        truncTrace += '...response truncated...';
        trace = truncTrace;
      }
    }

    this.debugLog(trace);
  };

  /**
   * @description The default API client implementation.
   * @type {module:purecloud-platform-client-v2/ApiClient}
   */
  exports.instance = new exports();

  return exports;
}));

}).call(this,require("buffer").Buffer)
},{"buffer":3,"fs":1,"superagent":7}],9:[function(require,module,exports){
(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['purecloud-platform-client-v2/ApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'));
  } else {
    // Browser globals (root is window)
    if (!root.platformClient) {
      root.platformClient = {};
    }
    root.platformClient.AlertingApi = factory(root.platformClient.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * Alerting service.
   * @module purecloud-platform-client-v2/api/AlertingApi
   * @version 6.0.1
   */

  /**
   * Constructs a new AlertingApi. 
   * @alias module:purecloud-platform-client-v2/api/AlertingApi
   * @class
   * @param {module:purecloud-platform-client-v2/ApiClient} apiClient Optional API client implementation to use,
   * default to {@link module:purecloud-platform-client-v2/ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;



    /**
     * Delete an interaction stats alert
     * 
     * @param {String} alertId Alert ID
     */
    this.deleteAlertingInteractionstatsAlert = function(alertId) { 

      // verify the required parameter 'alertId' is set
      if (alertId === undefined || alertId === null) {
        throw "Missing the required parameter 'alertId' when calling deleteAlertingInteractionstatsAlert";
      }


      return this.apiClient.callApi(
        '/api/v2/alerting/interactionstats/alerts/{alertId}', 
        'DELETE', 
        { 'alertId': alertId }, 
        {  }, 
        {  }, 
        {  }, 
        null, 
        ['PureCloud Auth'], 
        ['application/json'], 
        ['application/json']
      );
    };


    /**
     * Delete an interaction stats rule.
     * 
     * @param {String} ruleId Rule ID
     */
    this.deleteAlertingInteractionstatsRule = function(ruleId) { 

      // verify the required parameter 'ruleId' is set
      if (ruleId === undefined || ruleId === null) {
        throw "Missing the required parameter 'ruleId' when calling deleteAlertingInteractionstatsRule";
      }


      return this.apiClient.callApi(
        '/api/v2/alerting/interactionstats/rules/{ruleId}', 
        'DELETE', 
        { 'ruleId': ruleId }, 
        {  }, 
        {  }, 
        {  }, 
        null, 
        ['PureCloud Auth'], 
        ['application/json'], 
        ['application/json']
      );
    };


    /**
     * Get an interaction stats alert
     * 
     * @param {String} alertId Alert ID
     * @param {Object} opts Optional parameters
     * @param {Array.<String>} opts.expand Which fields, if any, to expand
     */
    this.getAlertingInteractionstatsAlert = function(alertId, opts) { 
      opts = opts || {};

      // verify the required parameter 'alertId' is set
      if (alertId === undefined || alertId === null) {
        throw "Missing the required parameter 'alertId' when calling getAlertingInteractionstatsAlert";
      }


      return this.apiClient.callApi(
        '/api/v2/alerting/interactionstats/alerts/{alertId}', 
        'GET', 
        { 'alertId': alertId }, 
        { 'expand': this.apiClient.buildCollectionParam(opts['expand'], 'multi') }, 
        {  }, 
        {  }, 
        null, 
        ['PureCloud Auth'], 
        ['application/json'], 
        ['application/json']
      );
    };


    /**
     * Get interaction stats alert list.
     * 
     * @param {Object} opts Optional parameters
     * @param {Array.<String>} opts.expand Which fields, if any, to expand
     */
    this.getAlertingInteractionstatsAlerts = function(opts) { 
      opts = opts || {};


      return this.apiClient.callApi(
        '/api/v2/alerting/interactionstats/alerts', 
        'GET', 
        {  }, 
        { 'expand': this.apiClient.buildCollectionParam(opts['expand'], 'multi') }, 
        {  }, 
        {  }, 
        null, 
        ['PureCloud Auth'], 
        ['application/json'], 
        ['application/json']
      );
    };


    /**
     * Gets user unread count of interaction stats alerts.
     * 
     */
    this.getAlertingInteractionstatsAlertsUnread = function() { 


      return this.apiClient.callApi(
        '/api/v2/alerting/interactionstats/alerts/unread', 
        'GET', 
        {  }, 
        {  }, 
        {  }, 
        {  }, 
        null, 
        ['PureCloud Auth'], 
        ['application/json'], 
        ['application/json']
      );
    };


    /**
     * Get an interaction stats rule.
     * 
     * @param {String} ruleId Rule ID
     * @param {Object} opts Optional parameters
     * @param {Array.<String>} opts.expand Which fields, if any, to expand
     */
    this.getAlertingInteractionstatsRule = function(ruleId, opts) { 
      opts = opts || {};

      // verify the required parameter 'ruleId' is set
      if (ruleId === undefined || ruleId === null) {
        throw "Missing the required parameter 'ruleId' when calling getAlertingInteractionstatsRule";
      }


      return this.apiClient.callApi(
        '/api/v2/alerting/interactionstats/rules/{ruleId}', 
        'GET', 
        { 'ruleId': ruleId }, 
        { 'expand': this.apiClient.buildCollectionParam(opts['expand'], 'multi') }, 
        {  }, 
        {  }, 
        null, 
        ['PureCloud Auth'], 
        ['application/json'], 
        ['application/json']
      );
    };


    /**
     * Get an interaction stats rule list.
     * 
     * @param {Object} opts Optional parameters
     * @param {Array.<String>} opts.expand Which fields, if any, to expand
     */
    this.getAlertingInteractionstatsRules = function(opts) { 
      opts = opts || {};


      return this.apiClient.callApi(
        '/api/v2/alerting/interactionstats/rules', 
        'GET', 
        {  }, 
        { 'expand': this.apiClient.buildCollectionParam(opts['expand'], 'multi') }, 
        {  }, 
        {  }, 
        null, 
        ['PureCloud Auth'], 
        ['application/json'], 
        ['application/json']
      );
    };


    /**
     * Create an interaction stats rule.
     * 
     * @param {module:purecloud-platform-client-v2/model/InteractionStatsRule} body AlertingRule
     * @param {Object} opts Optional parameters
     * @param {Array.<String>} opts.expand Which fields, if any, to expand
     */
    this.postAlertingInteractionstatsRules = function(body, opts) { 
      opts = opts || {};

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw "Missing the required parameter 'body' when calling postAlertingInteractionstatsRules";
      }


      return this.apiClient.callApi(
        '/api/v2/alerting/interactionstats/rules', 
        'POST', 
        {  }, 
        { 'expand': this.apiClient.buildCollectionParam(opts['expand'], 'multi') }, 
        {  }, 
        {  }, 
        body, 
        ['PureCloud Auth'], 
        ['application/json'], 
        ['application/json']
      );
    };


    /**
     * Update an interaction stats alert read status
     * 
     * @param {String} alertId Alert ID
     * @param {module:purecloud-platform-client-v2/model/UnreadStatus} body InteractionStatsAlert
     * @param {Object} opts Optional parameters
     * @param {Array.<String>} opts.expand Which fields, if any, to expand
     */
    this.putAlertingInteractionstatsAlert = function(alertId, body, opts) { 
      opts = opts || {};

      // verify the required parameter 'alertId' is set
      if (alertId === undefined || alertId === null) {
        throw "Missing the required parameter 'alertId' when calling putAlertingInteractionstatsAlert";
      }

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw "Missing the required parameter 'body' when calling putAlertingInteractionstatsAlert";
      }


      return this.apiClient.callApi(
        '/api/v2/alerting/interactionstats/alerts/{alertId}', 
        'PUT', 
        { 'alertId': alertId }, 
        { 'expand': this.apiClient.buildCollectionParam(opts['expand'], 'multi') }, 
        {  }, 
        {  }, 
        body, 
        ['PureCloud Auth'], 
        ['application/json'], 
        ['application/json']
      );
    };


    /**
     * Update an interaction stats rule
     * 
     * @param {String} ruleId Rule ID
     * @param {module:purecloud-platform-client-v2/model/InteractionStatsRule} body AlertingRule
     * @param {Object} opts Optional parameters
     * @param {Array.<String>} opts.expand Which fields, if any, to expand
     */
    this.putAlertingInteractionstatsRule = function(ruleId, body, opts) { 
      opts = opts || {};

      // verify the required parameter 'ruleId' is set
      if (ruleId === undefined || ruleId === null) {
        throw "Missing the required parameter 'ruleId' when calling putAlertingInteractionstatsRule";
      }

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw "Missing the required parameter 'body' when calling putAlertingInteractionstatsRule";
      }


      return this.apiClient.callApi(
        '/api/v2/alerting/interactionstats/rules/{ruleId}', 
        'PUT', 
        { 'ruleId': ruleId }, 
        { 'expand': this.apiClient.buildCollectionParam(opts['expand'], 'multi') }, 
        {  }, 
        {  }, 
        body, 
        ['PureCloud Auth'], 
        ['application/json'], 
        ['application/json']
      );
    };
  };

  return exports;
}));

},{"../ApiClient":8}],10:[function(require,module,exports){
(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['purecloud-platform-client-v2/ApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'));
  } else {
    // Browser globals (root is window)
    if (!root.platformClient) {
      root.platformClient = {};
    }
    root.platformClient.AnalyticsApi = factory(root.platformClient.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * Analytics service.
   * @module purecloud-platform-client-v2/api/AnalyticsApi
   * @version 6.0.1
   */

  /**
   * Constructs a new AnalyticsApi. 
   * @alias module:purecloud-platform-client-v2/api/AnalyticsApi
   * @class
   * @param {module:purecloud-platform-client-v2/ApiClient} apiClient Optional API client implementation to use,
   * default to {@link module:purecloud-platform-client-v2/ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;



    /**
     * Delete a scheduled report job.
     * 
     * @param {String} scheduleId Schedule ID
     */
    this.deleteAnalyticsReportingSchedule = function(scheduleId) { 

      // verify the required parameter 'scheduleId' is set
      if (scheduleId === undefined || scheduleId === null) {
        throw "Missing the required parameter 'scheduleId' when calling deleteAnalyticsReportingSchedule";
      }


      return this.apiClient.callApi(
        '/api/v2/analytics/reporting/schedules/{scheduleId}', 
        'DELETE', 
        { 'scheduleId': scheduleId }, 
        {  }, 
        {  }, 
        {  }, 
        null, 
        ['PureCloud Auth'], 
        ['application/json'], 
        ['application/json']
      );
    };


    /**
     * Get a conversation by id
     * 
     * @param {String} conversationId conversationId
     */
    this.getAnalyticsConversationDetails = function(conversationId) { 

      // verify the required parameter 'conversationId' is set
      if (conversationId === undefined || conversationId === null) {
        throw "Missing the required parameter 'conversationId' when calling getAnalyticsConversationDetails";
      }


      return this.apiClient.callApi(
        '/api/v2/analytics/conversations/{conversationId}/details', 
        'GET', 
        { 'conversationId': conversationId }, 
        {  }, 
        {  }, 
        {  }, 
        null, 
        ['PureCloud Auth'], 
        ['application/json'], 
        ['application/json']
      );
    };


    /**
     * Get list of reporting metadata.
     * 
     * @param {Object} opts Optional parameters
     * @param {Number} opts.pageNumber Page number (default to 1)
     * @param {Number} opts.pageSize Page size (default to 25)
     * @param {String} opts.locale Locale
     */
    this.getAnalyticsReportingMetadata = function(opts) { 
      opts = opts || {};


      return this.apiClient.callApi(
        '/api/v2/analytics/reporting/metadata', 
        'GET', 
        {  }, 
        { 'pageNumber': opts['pageNumber'],'pageSize': opts['pageSize'],'locale': opts['locale'] }, 
        {  }, 
        {  }, 
        null, 
        ['PureCloud Auth'], 
        ['application/json'], 
        ['application/json']
      );
    };


    /**
     * Get a reporting metadata.
     * 
     * @param {String} reportId Report ID
     * @param {Object} opts Optional parameters
     * @param {String} opts.locale Locale
     */
    this.getAnalyticsReportingReportIdMetadata = function(reportId, opts) { 
      opts = opts || {};

      // verify the required parameter 'reportId' is set
      if (reportId === undefined || reportId === null) {
        throw "Missing the required parameter 'reportId' when calling getAnalyticsReportingReportIdMetadata";
      }


      return this.apiClient.callApi(
        '/api/v2/analytics/reporting/{reportId}/metadata', 
        'GET', 
        { 'reportId': reportId }, 
        { 'locale': opts['locale'] }, 
        {  }, 
        {  }, 
        null, 
        ['PureCloud Auth'], 
        ['application/json'], 
        ['application/json']
      );
    };


    /**
     * Get a list of report formats
     * Get a list of report formats.
     */
    this.getAnalyticsReportingReportformats = function() { 


      return this.apiClient.callApi(
        '/api/v2/analytics/reporting/reportformats', 
        'GET', 
        {  }, 
        {  }, 
        {  }, 
        {  }, 
        null, 
        ['PureCloud Auth'], 
        ['application/json'], 
        ['application/json']
      );
    };


    /**
     * Get a scheduled report job.
     * 
     * @param {String} scheduleId Schedule ID
     */
    this.getAnalyticsReportingSchedule = function(scheduleId) { 

      // verify the required parameter 'scheduleId' is set
      if (scheduleId === undefined || scheduleId === null) {
        throw "Missing the required parameter 'scheduleId' when calling getAnalyticsReportingSchedule";
      }


      return this.apiClient.callApi(
        '/api/v2/analytics/reporting/schedules/{scheduleId}', 
        'GET', 
        { 'scheduleId': scheduleId }, 
        {  }, 
        {  }, 
        {  }, 
        null, 
        ['PureCloud Auth'], 
        ['application/json'], 
        ['application/json']
      );
    };


    /**
     * Get list of completed scheduled report jobs.
     * 
     * @param {String} scheduleId Schedule ID
     * @param {Object} opts Optional parameters
     * @param {Number} opts.pageNumber  (default to 1)
     * @param {Number} opts.pageSize  (default to 25)
     */
    this.getAnalyticsReportingScheduleHistory = function(scheduleId, opts) { 
      opts = opts || {};

      // verify the required parameter 'scheduleId' is set
      if (scheduleId === undefined || scheduleId === null) {
        throw "Missing the required parameter 'scheduleId' when calling getAnalyticsReportingScheduleHistory";
      }


      return this.apiClient.callApi(
        '/api/v2/analytics/reporting/schedules/{scheduleId}/history', 
        'GET', 
        { 'scheduleId': scheduleId }, 
        { 'pageNumber': opts['pageNumber'],'pageSize': opts['pageSize'] }, 
        {  }, 
        {  }, 
        null, 
        ['PureCloud Auth'], 
        ['application/json'], 
        ['application/json']
      );
    };


    /**
     * Get most recently completed scheduled report job.
     * 
     * @param {String} scheduleId Schedule ID
     */
    this.getAnalyticsReportingScheduleHistoryLatest = function(scheduleId) { 

      // verify the required parameter 'scheduleId' is set
      if (scheduleId === undefined || scheduleId === null) {
        throw "Missing the required parameter 'scheduleId' when calling getAnalyticsReportingScheduleHistoryLatest";
      }


      return this.apiClient.callApi(
        '/api/v2/analytics/reporting/schedules/{scheduleId}/history/latest', 
        'GET', 
        { 'scheduleId': scheduleId }, 
        {  }, 
        {  }, 
        {  }, 
        null, 
        ['PureCloud Auth'], 
        ['application/json'], 
        ['application/json']
      );
    };


    /**
     * A completed scheduled report job
     * A completed scheduled report job.
     * @param {String} runId Run ID
     * @param {String} scheduleId Schedule ID
     */
    this.getAnalyticsReportingScheduleHistoryRunId = function(runId, scheduleId) { 

      // verify the required parameter 'runId' is set
      if (runId === undefined || runId === null) {
        throw "Missing the required parameter 'runId' when calling getAnalyticsReportingScheduleHistoryRunId";
      }

      // verify the required parameter 'scheduleId' is set
      if (scheduleId === undefined || scheduleId === null) {
        throw "Missing the required parameter 'scheduleId' when calling getAnalyticsReportingScheduleHistoryRunId";
      }


      return this.apiClient.callApi(
        '/api/v2/analytics/reporting/schedules/{scheduleId}/history/{runId}', 
        'GET', 
        { 'runId': runId,'scheduleId': scheduleId }, 
        {  }, 
        {  }, 
        {  }, 
        null, 
        ['PureCloud Auth'], 
        ['application/json'], 
        ['application/json']
      );
    };


    /**
     * Get a list of scheduled report jobs
     * Get a list of scheduled report jobs.
     * @param {Object} opts Optional parameters
     * @param {Number} opts.pageNumber Page number (default to 1)
     * @param {Number} opts.pageSize Page size (default to 25)
     */
    this.getAnalyticsReportingSchedules = function(opts) { 
      opts = opts || {};


      return this.apiClient.callApi(
        '/api/v2/analytics/reporting/schedules', 
        'GET', 
        {  }, 
        { 'pageNumber': opts['pageNumber'],'pageSize': opts['pageSize'] }, 
        {  }, 
        {  }, 
        null, 
        ['PureCloud Auth'], 
        ['application/json'], 
        ['application/json']
      );
    };


    /**
     * Get a list of report time periods.
     * 
     */
    this.getAnalyticsReportingTimeperiods = function() { 


      return this.apiClient.callApi(
        '/api/v2/analytics/reporting/timeperiods', 
        'GET', 
        {  }, 
        {  }, 
        {  }, 
        {  }, 
        null, 
        ['PureCloud Auth'], 
        ['application/json'], 
        ['application/json']
      );
    };


    /**
     * Index conversation properties
     * 
     * @param {String} conversationId conversationId
     * @param {module:purecloud-platform-client-v2/model/PropertyIndexRequest} body request
     */
    this.postAnalyticsConversationDetailsProperties = function(conversationId, body) { 

      // verify the required parameter 'conversationId' is set
      if (conversationId === undefined || conversationId === null) {
        throw "Missing the required parameter 'conversationId' when calling postAnalyticsConversationDetailsProperties";
      }

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw "Missing the required parameter 'body' when calling postAnalyticsConversationDetailsProperties";
      }


      return this.apiClient.callApi(
        '/api/v2/analytics/conversations/{conversationId}/details/properties', 
        'POST', 
        { 'conversationId': conversationId }, 
        {  }, 
        {  }, 
        {  }, 
        body, 
        ['PureCloud Auth'], 
        ['application/json'], 
        ['application/json']
      );
    };


    /**
     * Query for conversation aggregates
     * 
     * @param {module:purecloud-platform-client-v2/model/AggregationQuery} body query
     */
    this.postAnalyticsConversationsAggregatesQuery = function(body) { 

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw "Missing the required parameter 'body' when calling postAnalyticsConversationsAggregatesQuery";
      }


      return this.apiClient.callApi(
        '/api/v2/analytics/conversations/aggregates/query', 
        'POST', 
        {  }, 
        {  }, 
        {  }, 
        {  }, 
        body, 
        ['PureCloud Auth'], 
        ['application/json'], 
        ['application/json']
      );
    };


    /**
     * Query for conversation details
     * 
     * @param {module:purecloud-platform-client-v2/model/ConversationQuery} body query
     */
    this.postAnalyticsConversationsDetailsQuery = function(body) { 

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw "Missing the required parameter 'body' when calling postAnalyticsConversationsDetailsQuery";
      }


      return this.apiClient.callApi(
        '/api/v2/analytics/conversations/details/query', 
        'POST', 
        {  }, 
        {  }, 
        {  }, 
        {  }, 
        body, 
        ['PureCloud Auth'], 
        ['application/json'], 
        ['application/json']
      );
    };


    /**
     * Query for evaluation aggregates
     * 
     * @param {module:purecloud-platform-client-v2/model/AggregationQuery} body query
     */
    this.postAnalyticsEvaluationsAggregatesQuery = function(body) { 

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw "Missing the required parameter 'body' when calling postAnalyticsEvaluationsAggregatesQuery";
      }


      return this.apiClient.callApi(
        '/api/v2/analytics/evaluations/aggregates/query', 
        'POST', 
        {  }, 
        {  }, 
        {  }, 
        {  }, 
        body, 
        ['PureCloud Auth'], 
        ['application/json'], 
        ['application/json']
      );
    };


    /**
     * Query for queue observations
     * 
     * @param {module:purecloud-platform-client-v2/model/ObservationQuery} body query
     */
    this.postAnalyticsQueuesObservationsQuery = function(body) { 

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw "Missing the required parameter 'body' when calling postAnalyticsQueuesObservationsQuery";
      }


      return this.apiClient.callApi(
        '/api/v2/analytics/queues/observations/query', 
        'POST', 
        {  }, 
        {  }, 
        {  }, 
        {  }, 
        body, 
        ['PureCloud Auth'], 
        ['application/json'], 
        ['application/json']
      );
    };


    /**
     * Place a scheduled report immediately into the reporting queue
     * 
     * @param {String} scheduleId Schedule ID
     */
    this.postAnalyticsReportingScheduleRunreport = function(scheduleId) { 

      // verify the required parameter 'scheduleId' is set
      if (scheduleId === undefined || scheduleId === null) {
        throw "Missing the required parameter 'scheduleId' when calling postAnalyticsReportingScheduleRunreport";
      }


      return this.apiClient.callApi(
        '/api/v2/analytics/reporting/schedules/{scheduleId}/runreport', 
        'POST', 
        { 'scheduleId': scheduleId }, 
        {  }, 
        {  }, 
        {  }, 
        null, 
        ['PureCloud Auth'], 
        ['application/json'], 
        ['application/json']
      );
    };


    /**
     * Create a scheduled report job
     * Create a scheduled report job.
     * @param {module:purecloud-platform-client-v2/model/ReportSchedule} body ReportSchedule
     */
    this.postAnalyticsReportingSchedules = function(body) { 

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw "Missing the required parameter 'body' when calling postAnalyticsReportingSchedules";
      }


      return this.apiClient.callApi(
        '/api/v2/analytics/reporting/schedules', 
        'POST', 
        {  }, 
        {  }, 
        {  }, 
        {  }, 
        body, 
        ['PureCloud Auth'], 
        ['application/json'], 
        ['application/json']
      );
    };


    /**
     * Query for user aggregates
     * 
     * @param {module:purecloud-platform-client-v2/model/AggregationQuery} body query
     */
    this.postAnalyticsUsersAggregatesQuery = function(body) { 

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw "Missing the required parameter 'body' when calling postAnalyticsUsersAggregatesQuery";
      }


      return this.apiClient.callApi(
        '/api/v2/analytics/users/aggregates/query', 
        'POST', 
        {  }, 
        {  }, 
        {  }, 
        {  }, 
        body, 
        ['PureCloud Auth'], 
        ['application/json'], 
        ['application/json']
      );
    };


    /**
     * Query for user details
     * 
     * @param {module:purecloud-platform-client-v2/model/UserDetailsQuery} body query
     */
    this.postAnalyticsUsersDetailsQuery = function(body) { 

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw "Missing the required parameter 'body' when calling postAnalyticsUsersDetailsQuery";
      }


      return this.apiClient.callApi(
        '/api/v2/analytics/users/details/query', 
        'POST', 
        {  }, 
        {  }, 
        {  }, 
        {  }, 
        body, 
        ['PureCloud Auth'], 
        ['application/json'], 
        ['application/json']
      );
    };


    /**
     * Query for user observations
     * 
     * @param {module:purecloud-platform-client-v2/model/ObservationQuery} body query
     */
    this.postAnalyticsUsersObservationsQuery = function(body) { 

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw "Missing the required parameter 'body' when calling postAnalyticsUsersObservationsQuery";
      }


      return this.apiClient.callApi(
        '/api/v2/analytics/users/observations/query', 
        'POST', 
        {  }, 
        {  }, 
        {  }, 
        {  }, 
        body, 
        ['PureCloud Auth'], 
        ['application/json'], 
        ['application/json']
      );
    };


    /**
     * Update a scheduled report job.
     * 
     * @param {String} scheduleId Schedule ID
     * @param {module:purecloud-platform-client-v2/model/ReportSchedule} body ReportSchedule
     */
    this.putAnalyticsReportingSchedule = function(scheduleId, body) { 

      // verify the required parameter 'scheduleId' is set
      if (scheduleId === undefined || scheduleId === null) {
        throw "Missing the required parameter 'scheduleId' when calling putAnalyticsReportingSchedule";
      }

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw "Missing the required parameter 'body' when calling putAnalyticsReportingSchedule";
      }


      return this.apiClient.callApi(
        '/api/v2/analytics/reporting/schedules/{scheduleId}', 
        'PUT', 
        { 'scheduleId': scheduleId }, 
        {  }, 
        {  }, 
        {  }, 
        body, 
        ['PureCloud Auth'], 
        ['application/json'], 
        ['application/json']
      );
    };
  };

  return exports;
}));

},{"../ApiClient":8}],11:[function(require,module,exports){
(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['purecloud-platform-client-v2/ApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'));
  } else {
    // Browser globals (root is window)
    if (!root.platformClient) {
      root.platformClient = {};
    }
    root.platformClient.ArchitectApi = factory(root.platformClient.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * Architect service.
   * @module purecloud-platform-client-v2/api/ArchitectApi
   * @version 6.0.1
   */

  /**
   * Constructs a new ArchitectApi. 
   * @alias module:purecloud-platform-client-v2/api/ArchitectApi
   * @class
   * @param {module:purecloud-platform-client-v2/ApiClient} apiClient Optional API client implementation to use,
   * default to {@link module:purecloud-platform-client-v2/ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;



    /**
     * Delete an IVR Config.
     * 
     * @param {String} ivrId IVR id
     */
    this.deleteArchitectIvr = function(ivrId) { 

      // verify the required parameter 'ivrId' is set
      if (ivrId === undefined || ivrId === null) {
        throw "Missing the required parameter 'ivrId' when calling deleteArchitectIvr";
      }


      return this.apiClient.callApi(
        '/api/v2/architect/ivrs/{ivrId}', 
        'DELETE', 
        { 'ivrId': ivrId }, 
        {  }, 
        {  }, 
        {  }, 
        null, 
        ['PureCloud Auth'], 
        ['application/json'], 
        ['application/json']
      );
    };


    /**
     * Delete specified user prompt
     * 
     * @param {String} promptId Prompt ID
     * @param {Object} opts Optional parameters
     * @param {Boolean} opts.allResources Whether or not to delete all the prompt resources
     */
    this.deleteArchitectPrompt = function(promptId, opts) { 
      opts = opts || {};

      // verify the required parameter 'promptId' is set
      if (promptId === undefined || promptId === null) {
        throw "Missing the required parameter 'promptId' when calling deleteArchitectPrompt";
      }


      return this.apiClient.callApi(
        '/api/v2/architect/prompts/{promptId}', 
        'DELETE', 
        { 'promptId': promptId }, 
        { 'allResources': opts['allResources'] }, 
        {  }, 
        {  }, 
        null, 
        ['PureCloud Auth'], 
        ['application/json'], 
        ['application/json']
      );
    };


    /**
     * Delete specified user prompt resource
     * 
     * @param {String} promptId Prompt ID
     * @param {String} languageCode Language
     */
    this.deleteArchitectPromptResource = function(promptId, languageCode) { 

      // verify the required parameter 'promptId' is set
      if (promptId === undefined || promptId === null) {
        throw "Missing the required parameter 'promptId' when calling deleteArchitectPromptResource";
      }

      // verify the required parameter 'languageCode' is set
      if (languageCode === undefined || languageCode === null) {
        throw "Missing the required parameter 'languageCode' when calling deleteArchitectPromptResource";
      }


      return this.apiClient.callApi(
        '/api/v2/architect/prompts/{promptId}/resources/{languageCode}', 
        'DELETE', 
        { 'promptId': promptId,'languageCode': languageCode }, 
        {  }, 
        {  }, 
        {  }, 
        null, 
        ['PureCloud Auth'], 
        ['application/json'], 
        ['application/json']
      );
    };


    /**
     * Batch-delete a list of prompts
     * Multiple IDs can be specified, in which case all specified prompts will be deleted.  Asynchronous.  Notification topic: v2.architect.prompts.{promptId}
     * @param {Array.<String>} id List of Prompt IDs
     */
    this.deleteArchitectPrompts = function(id) { 

      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw "Missing the required parameter 'id' when calling deleteArchitectPrompts";
      }


      return this.apiClient.callApi(
        '/api/v2/architect/prompts', 
        'DELETE', 
        {  }, 
        { 'id': this.apiClient.buildCollectionParam(id, 'multi') }, 
        {  }, 
        {  }, 
        null, 
        ['PureCloud Auth'], 
        ['application/json'], 
        ['application/json']
      );
    };


    /**
     * Delete a schedule by id
     * 
     * @param {String} scheduleId Schedule ID
     */
    this.deleteArchitectSchedule = function(scheduleId) { 

      // verify the required parameter 'scheduleId' is set
      if (scheduleId === undefined || scheduleId === null) {
        throw "Missing the required parameter 'scheduleId' when calling deleteArchitectSchedule";
      }


      return this.apiClient.callApi(
        '/api/v2/architect/schedules/{scheduleId}', 
        'DELETE', 
        { 'scheduleId': scheduleId }, 
        {  }, 
        {  }, 
        {  }, 
        null, 
        ['PureCloud Auth'], 
        ['application/json'], 
        ['application/json']
      );
    };


    /**
     * Deletes a schedule group by ID
     * 
     * @param {String} scheduleGroupId Schedule group ID
     */
    this.deleteArchitectSchedulegroup = function(scheduleGroupId) { 

      // verify the required parameter 'scheduleGroupId' is set
      if (scheduleGroupId === undefined || scheduleGroupId === null) {
        throw "Missing the required parameter 'scheduleGroupId' when calling deleteArchitectSchedulegroup";
      }


      return this.apiClient.callApi(
        '/api/v2/architect/schedulegroups/{scheduleGroupId}', 
        'DELETE', 
        { 'scheduleGroupId': scheduleGroupId }, 
        {  }, 
        {  }, 
        {  }, 
        null, 
        ['PureCloud Auth'], 
        ['application/json'], 
        ['application/json']
      );
    };


    /**
     * Delete a system prompt resource override.
     * 
     * @param {String} promptId Prompt ID
     * @param {String} languageCode Language
     */
    this.deleteArchitectSystempromptResource = function(promptId, languageCode) { 

      // verify the required parameter 'promptId' is set
      if (promptId === undefined || promptId === null) {
        throw "Missing the required parameter 'promptId' when calling deleteArchitectSystempromptResource";
      }

      // verify the required parameter 'languageCode' is set
      if (languageCode === undefined || languageCode === null) {
        throw "Missing the required parameter 'languageCode' when calling deleteArchitectSystempromptResource";
      }


      return this.apiClient.callApi(
        '/api/v2/architect/systemprompts/{promptId}/resources/{languageCode}', 
        'DELETE', 
        { 'promptId': promptId,'languageCode': languageCode }, 
        {  }, 
        {  }, 
        {  }, 
        null, 
        ['PureCloud Auth'], 
        ['application/json'], 
        ['application/json']
      );
    };


    /**
     * Delete flow
     * 
     * @param {String} flowId Flow ID
     */
    this.deleteFlow = function(flowId) { 

      // verify the required parameter 'flowId' is set
      if (flowId === undefined || flowId === null) {
        throw "Missing the required parameter 'flowId' when calling deleteFlow";
      }


      return this.apiClient.callApi(
        '/api/v2/flows/{flowId}', 
        'DELETE', 
        { 'flowId': flowId }, 
        {  }, 
        {  }, 
        {  }, 
        null, 
        ['PureCloud Auth'], 
        ['application/json'], 
        ['application/json']
      );
    };


    /**
     * Batch-delete a list of flows
     * Multiple IDs can be specified, in which case all specified flows will be deleted.  Asynchronous.  Notification topic: v2.flows.{flowId}
     * @param {Array.<String>} id List of Flow IDs
     */
    this.deleteFlows = function(id) { 

      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw "Missing the required parameter 'id' when calling deleteFlows";
      }


      return this.apiClient.callApi(
        '/api/v2/flows', 
        'DELETE', 
        {  }, 
        { 'id': this.apiClient.buildCollectionParam(id, 'multi') }, 
        {  }, 
        {  }, 
        null, 
        ['PureCloud Auth'], 
        ['application/json'], 
        ['application/json']
      );
    };


    /**
     * Get Dependency Tracking objects that have a given display name
     * 
     * @param {String} name Object name to search for
     * @param {Object} opts Optional parameters
     * @param {Number} opts.pageNumber Page number (default to 1)
     * @param {Number} opts.pageSize Page size (default to 25)
     * @param {Array.<String>} opts.objectType Object type(s) to search for
     * @param {Boolean} opts.consumedResources Include resources each result item consumes
     * @param {Boolean} opts.consumingResources Include resources that consume each result item
     * @param {Array.<String>} opts.consumedResourceType Types of consumed resources to return, if consumed resources are requested
     * @param {Array.<String>} opts.consumingResourceType Types of consuming resources to return, if consuming resources are requested
     */
    this.getArchitectDependencytracking = function(name, opts) { 
      opts = opts || {};

      // verify the required parameter 'name' is set
      if (name === undefined || name === null) {
        throw "Missing the required parameter 'name' when calling getArchitectDependencytracking";
      }


      return this.apiClient.callApi(
        '/api/v2/architect/dependencytracking', 
        'GET', 
        {  }, 
        { 'pageNumber': opts['pageNumber'],'pageSize': opts['pageSize'],'name': name,'objectType': this.apiClient.buildCollectionParam(opts['objectType'], 'multi'),'consumedResources': opts['consumedResources'],'consumingResources': opts['consumingResources'],'consumedResourceType': this.apiClient.buildCollectionParam(opts['consumedResourceType'], 'multi'),'consumingResourceType': this.apiClient.buildCollectionParam(opts['consumingResourceType'], 'multi') }, 
        {  }, 
        {  }, 
        null, 
        ['PureCloud Auth'], 
        ['application/json'], 
        ['application/json']
      );
    };


    /**
     * Get Dependency Tracking build status for an organization
     * 
     */
    this.getArchitectDependencytrackingBuild = function() { 


      return this.apiClient.callApi(
        '/api/v2/architect/dependencytracking/build', 
        'GET', 
        {  }, 
        {  }, 
        {  }, 
        {  }, 
        null, 
        ['PureCloud Auth'], 
        ['application/json'], 
        ['application/json']
      );
    };


    /**
     * Get resources that are consumed by a given Dependency Tracking object
     * 
     * @param {String} id Consuming object ID
     * @param {String} version Consuming object version
     * @param {module:purecloud-platform-client-v2/model/String} objectType Consuming object type
     * @param {Object} opts Optional parameters
     * @param {Array.<String>} opts.resourceType Types of consumed resources to show
     */
    this.getArchitectDependencytrackingConsumedresources = function(id, version, objectType, opts) { 
      opts = opts || {};

      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw "Missing the required parameter 'id' when calling getArchitectDependencytrackingConsumedresources";
      }

      // verify the required parameter 'version' is set
      if (version === undefined || version === null) {
        throw "Missing the required parameter 'version' when calling getArchitectDependencytrackingConsumedresources";
      }

      // verify the required parameter 'objectType' is set
      if (objectType === undefined || objectType === null) {
        throw "Missing the required parameter 'objectType' when calling getArchitectDependencytrackingConsumedresources";
      }


      return this.apiClient.callApi(
        '/api/v2/architect/dependencytracking/consumedresources', 
        'GET', 
        {  }, 
        { 'id': id,'version': version,'objectType': objectType,'resourceType': this.apiClient.buildCollectionParam(opts['resourceType'], 'multi') }, 
        {  }, 
        {  }, 
        null, 
        ['PureCloud Auth'], 
        ['application/json'], 
        ['application/json']
      );
    };


    /**
     * Get resources that consume a given Dependency Tracking object
     * 
     * @param {String} id Consumed object ID
     * @param {module:purecloud-platform-client-v2/model/String} objectType Consumed object type (only versioned object types are valid)
     * @param {Object} opts Optional parameters
     * @param {Array.<String>} opts.resourceType Types of consuming resources to show
     */
    this.getArchitectDependencytrackingConsumingresources = function(id, objectType, opts) { 
      opts = opts || {};

      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw "Missing the required parameter 'id' when calling getArchitectDependencytrackingConsumingresources";
      }

      // verify the required parameter 'objectType' is set
      if (objectType === undefined || objectType === null) {
        throw "Missing the required parameter 'objectType' when calling getArchitectDependencytrackingConsumingresources";
      }


      return this.apiClient.callApi(
        '/api/v2/architect/dependencytracking/consumingresources', 
        'GET', 
        {  }, 
        { 'id': id,'objectType': objectType,'resourceType': this.apiClient.buildCollectionParam(opts['resourceType'], 'multi') }, 
        {  }, 
        {  }, 
        null, 
        ['PureCloud Auth'], 
        ['application/json'], 
        ['application/json']
      );
    };


    /**
     * Get Dependency Tracking objects that consume deleted resources
     * 
     * @param {Object} opts Optional parameters
     * @param {String} opts.name Name to search for
     * @param {Array.<String>} opts.objectType Object type(s) to search for
     * @param {module:purecloud-platform-client-v2/model/String} opts.flowFilter Show only checkedIn or published flows
     * @param {Boolean} opts.consumedResources Return consumed resources? (default to false)
     * @param {Array.<String>} opts.consumedResourceType Resource type(s) to return
     * @param {Number} opts.pageNumber Page number (default to 1)
     * @param {Number} opts.pageSize Page size (default to 25)
     */
    this.getArchitectDependencytrackingDeletedresourceconsumers = function(opts) { 
      opts = opts || {};


      return this.apiClient.callApi(
        '/api/v2/architect/dependencytracking/deletedresourceconsumers', 
        'GET', 
        {  }, 
        { 'name': opts['name'],'objectType': this.apiClient.buildCollectionParam(opts['objectType'], 'multi'),'flowFilter': opts['flowFilter'],'consumedResources': opts['consumedResources'],'consumedResourceType': this.apiClient.buildCollectionParam(opts['consumedResourceType'], 'multi'),'pageNumber': opts['pageNumber'],'pageSize': opts['pageSize'] }, 
        {  }, 
        {  }, 
        null, 
        ['PureCloud Auth'], 
        ['application/json'], 
        ['application/json']
      );
    };


    /**
     * Get a Dependency Tracking object
     * 
     * @param {String} id Object ID
     * @param {Object} opts Optional parameters
     * @param {String} opts.version Object version
     * @param {module:purecloud-platform-client-v2/model/String} opts.objectType Object type
     * @param {Boolean} opts.consumedResources Include resources this item consumes
     * @param {Boolean} opts.consumingResources Include resources that consume this item
     * @param {Array.<String>} opts.consumedResourceType Types of consumed resources to return, if consumed resources are requested
     * @param {Array.<String>} opts.consumingResourceType Types of consuming resources to return, if consuming resources are requested
     */
    this.getArchitectDependencytrackingObject = function(id, opts) { 
      opts = opts || {};

      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw "Missing the required parameter 'id' when calling getArchitectDependencytrackingObject";
      }


      return this.apiClient.callApi(
        '/api/v2/architect/dependencytracking/object', 
        'GET', 
        {  }, 
        { 'id': id,'version': opts['version'],'objectType': opts['objectType'],'consumedResources': opts['consumedResources'],'consumingResources': opts['consumingResources'],'consumedResourceType': this.apiClient.buildCollectionParam(opts['consumedResourceType'], 'multi'),'consumingResourceType': this.apiClient.buildCollectionParam(opts['consumingResourceType'], 'multi') }, 
        {  }, 
        {  }, 
        null, 
        ['PureCloud Auth'], 
        ['application/json'], 
        ['application/json']
      );
    };


    /**
     * Get a Dependency Tracking type.
     * 
     * @param {String} typeId Type ID
     */
    this.getArchitectDependencytrackingType = function(typeId) { 

      // verify the required parameter 'typeId' is set
      if (typeId === undefined || typeId === null) {
        throw "Missing the required parameter 'typeId' when calling getArchitectDependencytrackingType";
      }


      return this.apiClient.callApi(
        '/api/v2/architect/dependencytracking/types/{typeId}', 
        'GET', 
        { 'typeId': typeId }, 
        {  }, 
        {  }, 
        {  }, 
        null, 
        ['PureCloud Auth'], 
        ['application/json'], 
        ['application/json']
      );
    };


    /**
     * Get Dependency Tracking types.
     * 
     * @param {Object} opts Optional parameters
     * @param {Number} opts.pageNumber Page number (default to 1)
     * @param {Number} opts.pageSize Page size (default to 25)
     */
    this.getArchitectDependencytrackingTypes = function(opts) { 
      opts = opts || {};


      return this.apiClient.callApi(
        '/api/v2/architect/dependencytracking/types', 
        'GET', 
        {  }, 
        { 'pageNumber': opts['pageNumber'],'pageSize': opts['pageSize'] }, 
        {  }, 
        {  }, 
        null, 
        ['PureCloud Auth'], 
        ['application/json'], 
        ['application/json']
      );
    };


    /**
     * Get Dependency Tracking objects that depend on updated resources
     * 
     * @param {Object} opts Optional parameters
     * @param {String} opts.name Name to search for
     * @param {Array.<String>} opts.objectType Object type(s) to search for
     * @param {Boolean} opts.consumedResources Return consumed resources? (default to false)
     * @param {Array.<String>} opts.consumedResourceType Resource type(s) to return
     * @param {Number} opts.pageNumber Page number (default to 1)
     * @param {Number} opts.pageSize Page size (default to 25)
     */
    this.getArchitectDependencytrackingUpdatedresourceconsumers = function(opts) { 
      opts = opts || {};


      return this.apiClient.callApi(
        '/api/v2/architect/dependencytracking/updatedresourceconsumers', 
        'GET', 
        {  }, 
        { 'name': opts['name'],'objectType': this.apiClient.buildCollectionParam(opts['objectType'], 'multi'),'consumedResources': opts['consumedResources'],'consumedResourceType': this.apiClient.buildCollectionParam(opts['consumedResourceType'], 'multi'),'pageNumber': opts['pageNumber'],'pageSize': opts['pageSize'] }, 
        {  }, 
        {  }, 
        null, 
        ['PureCloud Auth'], 
        ['application/json'], 
        ['application/json']
      );
    };


    /**
     * Get an IVR config.
     * 
     * @param {String} ivrId IVR id
     */
    this.getArchitectIvr = function(ivrId) { 

      // verify the required parameter 'ivrId' is set
      if (ivrId === undefined || ivrId === null) {
        throw "Missing the required parameter 'ivrId' when calling getArchitectIvr";
      }


      return this.apiClient.callApi(
        '/api/v2/architect/ivrs/{ivrId}', 
        'GET', 
        { 'ivrId': ivrId }, 
        {  }, 
        {  }, 
        {  }, 
        null, 
        ['PureCloud Auth'], 
        ['application/json'], 
        ['application/json']
      );
    };


    /**
     * Get IVR configs.
     * 
     * @param {Object} opts Optional parameters
     * @param {Number} opts.pageNumber Page number (default to 1)
     * @param {Number} opts.pageSize Page size (default to 25)
     * @param {String} opts.sortBy Sort by (default to name)
     * @param {String} opts.sortOrder Sort order (default to ASC)
     */
    this.getArchitectIvrs = function(opts) { 
      opts = opts || {};


      return this.apiClient.callApi(
        '/api/v2/architect/ivrs', 
        'GET', 
        {  }, 
        { 'pageNumber': opts['pageNumber'],'pageSize': opts['pageSize'],'sortBy': opts['sortBy'],'sortOrder': opts['sortOrder'] }, 
        {  }, 
        {  }, 
        null, 
        ['PureCloud Auth'], 
        ['application/json'], 
        ['application/json']
      );
    };


    /**
     * Get specified user prompt
     * 
     * @param {String} promptId Prompt ID
     */
    this.getArchitectPrompt = function(promptId) { 

      // verify the required parameter 'promptId' is set
      if (promptId === undefined || promptId === null) {
        throw "Missing the required parameter 'promptId' when calling getArchitectPrompt";
      }


      return this.apiClient.callApi(
        '/api/v2/architect/prompts/{promptId}', 
        'GET', 
        { 'promptId': promptId }, 
        {  }, 
        {  }, 
        {  }, 
        null, 
        ['PureCloud Auth'], 
        ['application/json'], 
        ['application/json']
      );
    };


    /**
     * Get specified user prompt resource
     * 
     * @param {String} promptId Prompt ID
     * @param {String} languageCode Language
     */
    this.getArchitectPromptResource = function(promptId, languageCode) { 

      // verify the required parameter 'promptId' is set
      if (promptId === undefined || promptId === null) {
        throw "Missing the required parameter 'promptId' when calling getArchitectPromptResource";
      }

      // verify the required parameter 'languageCode' is set
      if (languageCode === undefined || languageCode === null) {
        throw "Missing the required parameter 'languageCode' when calling getArchitectPromptResource";
      }


      return this.apiClient.callApi(
        '/api/v2/architect/prompts/{promptId}/resources/{languageCode}', 
        'GET', 
        { 'promptId': promptId,'languageCode': languageCode }, 
        {  }, 
        {  }, 
        {  }, 
        null, 
        ['PureCloud Auth'], 
        ['application/json'], 
        ['application/json']
      );
    };


    /**
     * Get a pageable list of user prompt resources
     * The returned list is pageable, and query parameters can be used for filtering.
     * @param {String} promptId Prompt ID
     * @param {Object} opts Optional parameters
     * @param {Number} opts.pageNumber Page number (default to 1)
     * @param {Number} opts.pageSize Page size (default to 25)
     */
    this.getArchitectPromptResources = function(promptId, opts) { 
      opts = opts || {};

      // verify the required parameter 'promptId' is set
      if (promptId === undefined || promptId === null) {
        throw "Missing the required parameter 'promptId' when calling getArchitectPromptResources";
      }


      return this.apiClient.callApi(
        '/api/v2/architect/prompts/{promptId}/resources', 
        'GET', 
        { 'promptId': promptId }, 
        { 'pageNumber': opts['pageNumber'],'pageSize': opts['pageSize'] }, 
        {  }, 
        {  }, 
        null, 
        ['PureCloud Auth'], 
        ['application/json'], 
        ['application/json']
      );
    };


    /**
     * Get a pageable list of user prompts
     * The returned list is pageable, and query parameters can be used for filtering.  Multiple names can be specified, in which case all matching prompts will be returned, and no other filters will be evaluated.
     * @param {Object} opts Optional parameters
     * @param {Number} opts.pageNumber Page number (default to 1)
     * @param {Number} opts.pageSize Page size (default to 25)
     * @param {String} opts.name Name
     * @param {String} opts.description Description
     * @param {String} opts.nameOrDescription Name or description
     */
    this.getArchitectPrompts = function(opts) { 
      opts = opts || {};


      return this.apiClient.callApi(
        '/api/v2/architect/prompts', 
        'GET', 
        {  }, 
        { 'pageNumber': opts['pageNumber'],'pageSize': opts['pageSize'],'name': opts['name'],'description': opts['description'],'nameOrDescription': opts['nameOrDescription'] }, 
        {  }, 
        {  }, 
        null, 
        ['PureCloud Auth'], 
        ['application/json'], 
        ['application/json']
      );
    };


    /**
     * Get a schedule by ID
     * 
     * @param {String} scheduleId Schedule ID
     */
    this.getArchitectSchedule = function(scheduleId) { 

      // verify the required parameter 'scheduleId' is set
      if (scheduleId === undefined || scheduleId === null) {
        throw "Missing the required parameter 'scheduleId' when calling getArchitectSchedule";
      }


      return this.apiClient.callApi(
        '/api/v2/architect/schedules/{scheduleId}', 
        'GET', 
        { 'scheduleId': scheduleId }, 
        {  }, 
        {  }, 
        {  }, 
        null, 
        ['PureCloud Auth'], 
        ['application/json'], 
        ['application/json']
      );
    };


    /**
     * Gets a schedule group by ID
     * 
     * @param {String} scheduleGroupId Schedule group ID
     */
    this.getArchitectSchedulegroup = function(scheduleGroupId) { 

      // verify the required parameter 'scheduleGroupId' is set
      if (scheduleGroupId === undefined || scheduleGroupId === null) {
        throw "Missing the required parameter 'scheduleGroupId' when calling getArchitectSchedulegroup";
      }


      return this.apiClient.callApi(
        '/api/v2/architect/schedulegroups/{scheduleGroupId}', 
        'GET', 
        { 'scheduleGroupId': scheduleGroupId }, 
        {  }, 
        {  }, 
        {  }, 
        null, 
        ['PureCloud Auth'], 
        ['application/json'], 
        ['application/json']
      );
    };


    /**
     * Get a list of schedule groups.
     * 
     * @param {Object} opts Optional parameters
     * @param {Number} opts.pageNumber Page number (default to 1)
     * @param {Number} opts.pageSize Page size (default to 25)
     * @param {String} opts.sortBy Sort by (default to name)
     * @param {String} opts.sortOrder Sort order (default to ASC)
     */
    this.getArchitectSchedulegroups = function(opts) { 
      opts = opts || {};


      return this.apiClient.callApi(
        '/api/v2/architect/schedulegroups', 
        'GET', 
        {  }, 
        { 'pageNumber': opts['pageNumber'],'pageSize': opts['pageSize'],'sortBy': opts['sortBy'],'sortOrder': opts['sortOrder'] }, 
        {  }, 
        {  }, 
        null, 
        ['PureCloud Auth'], 
        ['application/json'], 
        ['application/json']
      );
    };


    /**
     * Get a list of schedules.
     * 
     * @param {Object} opts Optional parameters
     * @param {Number} opts.pageNumber Page number (default to 1)
     * @param {Number} opts.pageSize Page size (default to 25)
     * @param {String} opts.sortBy Sort by (default to name)
     * @param {String} opts.sortOrder Sort order (default to ASC)
     */
    this.getArchitectSchedules = function(opts) { 
      opts = opts || {};


      return this.apiClient.callApi(
        '/api/v2/architect/schedules', 
        'GET', 
        {  }, 
        { 'pageNumber': opts['pageNumber'],'pageSize': opts['pageSize'],'sortBy': opts['sortBy'],'sortOrder': opts['sortOrder'] }, 
        {  }, 
        {  }, 
        null, 
        ['PureCloud Auth'], 
        ['application/json'], 
        ['application/json']
      );
    };


    /**
     * Get a system prompt
     * 
     * @param {String} promptId promptId
     */
    this.getArchitectSystemprompt = function(promptId) { 

      // verify the required parameter 'promptId' is set
      if (promptId === undefined || promptId === null) {
        throw "Missing the required parameter 'promptId' when calling getArchitectSystemprompt";
      }


      return this.apiClient.callApi(
        '/api/v2/architect/systemprompts/{promptId}', 
        'GET', 
        { 'promptId': promptId }, 
        {  }, 
        {  }, 
        {  }, 
        null, 
        ['PureCloud Auth'], 
        ['application/json'], 
        ['application/json']
      );
    };


    /**
     * Get a system prompt resource.
     * 
     * @param {String} promptId Prompt ID
     * @param {String} languageCode Language
     */
    this.getArchitectSystempromptResource = function(promptId, languageCode) { 

      // verify the required parameter 'promptId' is set
      if (promptId === undefined || promptId === null) {
        throw "Missing the required parameter 'promptId' when calling getArchitectSystempromptResource";
      }

      // verify the required parameter 'languageCode' is set
      if (languageCode === undefined || languageCode === null) {
        throw "Missing the required parameter 'languageCode' when calling getArchitectSystempromptResource";
      }


      return this.apiClient.callApi(
        '/api/v2/architect/systemprompts/{promptId}/resources/{languageCode}', 
        'GET', 
        { 'promptId': promptId,'languageCode': languageCode }, 
        {  }, 
        {  }, 
        {  }, 
        null, 
        ['PureCloud Auth'], 
        ['application/json'], 
        ['application/json']
      );
    };


    /**
     * Get system prompt resources.
     * 
     * @param {String} promptId Prompt ID
     * @param {Object} opts Optional parameters
     * @param {Number} opts.pageNumber Page number (default to 1)
     * @param {Number} opts.pageSize Page size (default to 25)
     * @param {String} opts.sortBy Sort by (default to id)
     * @param {String} opts.sortOrder Sort order (default to asc)
     */
    this.getArchitectSystempromptResources = function(promptId, opts) { 
      opts = opts || {};

      // verify the required parameter 'promptId' is set
      if (promptId === undefined || promptId === null) {
        throw "Missing the required parameter 'promptId' when calling getArchitectSystempromptResources";
      }


      return this.apiClient.callApi(
        '/api/v2/architect/systemprompts/{promptId}/resources', 
        'GET', 
        { 'promptId': promptId }, 
        { 'pageNumber': opts['pageNumber'],'pageSize': opts['pageSize'],'sortBy': opts['sortBy'],'sortOrder': opts['sortOrder'] }, 
        {  }, 
        {  }, 
        null, 
        ['PureCloud Auth'], 
        ['application/json'], 
        ['application/json']
      );
    };


    /**
     * Get System Prompts
     * 
     * @param {Object} opts Optional parameters
     * @param {Number} opts.pageNumber Page number (default to 1)
     * @param {Number} opts.pageSize Page size (default to 25)
     * @param {String} opts.sortBy Sort by (default to id)
     * @param {String} opts.sortOrder Sort order (default to asc)
     * @param {String} opts.name Name
     * @param {String} opts.description Description
     * @param {String} opts.nameOrDescription Name or description
     */
    this.getArchitectSystemprompts = function(opts) { 
      opts = opts || {};


      return this.apiClient.callApi(
        '/api/v2/architect/systemprompts', 
        'GET', 
        {  }, 
        { 'pageNumber': opts['pageNumber'],'pageSize': opts['pageSize'],'sortBy': opts['sortBy'],'sortOrder': opts['sortOrder'],'name': opts['name'],'description': opts['description'],'nameOrDescription': opts['nameOrDescription'] }, 
        {  }, 
        {  }, 
        null, 
        ['PureCloud Auth'], 
        ['application/json'], 
        ['application/json']
      );
    };


    /**
     * Get flow
     * 
     * @param {String} flowId Flow ID
     * @param {Object} opts Optional parameters
     * @param {Boolean} opts.deleted Include deleted flows (default to false)
     */
    this.getFlow = function(flowId, opts) { 
      opts = opts || {};

      // verify the required parameter 'flowId' is set
      if (flowId === undefined || flowId === null) {
        throw "Missing the required parameter 'flowId' when calling getFlow";
      }


      return this.apiClient.callApi(
        '/api/v2/flows/{flowId}', 
        'GET', 
        { 'flowId': flowId }, 
        { 'deleted': opts['deleted'] }, 
        {  }, 
        {  }, 
        null, 
        ['PureCloud Auth'], 
        ['application/json'], 
        ['application/json']
      );
    };


    /**
     * Get generated flow history
     * 
     * @param {String} flowId Flow ID
     * @param {String} historyId History ID (generated history)
     * @param {Object} opts Optional parameters
     * @param {Number} opts.pageNumber Page number (default to 1)
     * @param {Number} opts.pageSize Page size (default to 25)
     * @param {module:purecloud-platform-client-v2/model/String} opts.sortBy Sort by (default to timestamp)
     * @param {String} opts.sortOrder Sort order (default to desc)
     * @param {Array.<String>} opts.action Flow actions
     */
    this.getFlowHistoryHistoryId = function(flowId, historyId, opts) { 
      opts = opts || {};

      // verify the required parameter 'flowId' is set
      if (flowId === undefined || flowId === null) {
        throw "Missing the required parameter 'flowId' when calling getFlowHistoryHistoryId";
      }

      // verify the required parameter 'historyId' is set
      if (historyId === undefined || historyId === null) {
        throw "Missing the required parameter 'historyId' when calling getFlowHistoryHistoryId";
      }


      return this.apiClient.callApi(
        '/api/v2/flows/{flowId}/history/{historyId}', 
        'GET', 
        { 'flowId': flowId,'historyId': historyId }, 
        { 'pageNumber': opts['pageNumber'],'pageSize': opts['pageSize'],'sortBy': opts['sortBy'],'sortOrder': opts['sortOrder'],'action': this.apiClient.buildCollectionParam(opts['action'], 'multi') }, 
        {  }, 
        {  }, 
        null, 
        ['PureCloud Auth'], 
        ['application/json'], 
        ['application/json']
      );
    };


    /**
     * Get the latest configuration for flow
     * 
     * @param {String} flowId Flow ID
     * @param {Object} opts Optional parameters
     * @param {Boolean} opts.deleted Include deleted flows (default to false)
     */
    this.getFlowLatestconfiguration = function(flowId, opts) { 
      opts = opts || {};

      // verify the required parameter 'flowId' is set
      if (flowId === undefined || flowId === null) {
        throw "Missing the required parameter 'flowId' when calling getFlowLatestconfiguration";
      }


      return this.apiClient.callApi(
        '/api/v2/flows/{flowId}/latestconfiguration', 
        'GET', 
        { 'flowId': flowId }, 
        { 'deleted': opts['deleted'] }, 
        {  }, 
        {  }, 
        null, 
        ['PureCloud Auth'], 
        ['application/json'], 
        ['application/json']
      );
    };


    /**
     * Get flow version
     * 
     * @param {String} flowId Flow ID
     * @param {String} versionId Version ID
     * @param {Object} opts Optional parameters
     * @param {String} opts.deleted Include deleted flows
     */
    this.getFlowVersion = function(flowId, versionId, opts) { 
      opts = opts || {};

      // verify the required parameter 'flowId' is set
      if (flowId === undefined || flowId === null) {
        throw "Missing the required parameter 'flowId' when calling getFlowVersion";
      }

      // verify the required parameter 'versionId' is set
      if (versionId === undefined || versionId === null) {
        throw "Missing the required parameter 'versionId' when calling getFlowVersion";
      }


      return this.apiClient.callApi(
        '/api/v2/flows/{flowId}/versions/{versionId}', 
        'GET', 
        { 'flowId': flowId,'versionId': versionId }, 
        { 'deleted': opts['deleted'] }, 
        {  }, 
        {  }, 
        null, 
        ['PureCloud Auth'], 
        ['application/json'], 
        ['application/json']
      );
    };


    /**
     * Create flow version configuration
     * 
     * @param {String} flowId Flow ID
     * @param {String} versionId Version ID
     * @param {Object} opts Optional parameters
     * @param {String} opts.deleted Include deleted flows
     */
    this.getFlowVersionConfiguration = function(flowId, versionId, opts) { 
      opts = opts || {};

      // verify the required parameter 'flowId' is set
      if (flowId === undefined || flowId === null) {
        throw "Missing the required parameter 'flowId' when calling getFlowVersionConfiguration";
      }

      // verify the required parameter 'versionId' is set
      if (versionId === undefined || versionId === null) {
        throw "Missing the required parameter 'versionId' when calling getFlowVersionConfiguration";
      }


      return this.apiClient.callApi(
        '/api/v2/flows/{flowId}/versions/{versionId}/configuration', 
        'GET', 
        { 'flowId': flowId,'versionId': versionId }, 
        { 'deleted': opts['deleted'] }, 
        {  }, 
        {  }, 
        null, 
        ['PureCloud Auth'], 
        ['application/json'], 
        ['application/json']
      );
    };


    /**
     * Get flow version list
     * 
     * @param {String} flowId Flow ID
     * @param {Object} opts Optional parameters
     * @param {Number} opts.pageNumber Page number (default to 1)
     * @param {Number} opts.pageSize Page size (default to 25)
     * @param {Boolean} opts.deleted Include deleted flows
     */
    this.getFlowVersions = function(flowId, opts) { 
      opts = opts || {};

      // verify the required parameter 'flowId' is set
      if (flowId === undefined || flowId === null) {
        throw "Missing the required parameter 'flowId' when calling getFlowVersions";
      }


      return this.apiClient.callApi(
        '/api/v2/flows/{flowId}/versions', 
        'GET', 
        { 'flowId': flowId }, 
        { 'pageNumber': opts['pageNumber'],'pageSize': opts['pageSize'],'deleted': opts['deleted'] }, 
        {  }, 
        {  }, 
        null, 
        ['PureCloud Auth'], 
        ['application/json'], 
        ['application/json']
      );
    };


    /**
     * Get a pageable list of flows, filtered by query parameters
     * Multiple IDs can be specified, in which case all matching flows will be returned, and no other parameters will be evaluated.
     * @param {String} type Type
     * @param {Object} opts Optional parameters
     * @param {Number} opts.pageNumber Page number (default to 1)
     * @param {Number} opts.pageSize Page size (default to 25)
     * @param {String} opts.sortBy Sort by (default to id)
     * @param {String} opts.sortOrder Sort order (default to asc)
     * @param {Array.<String>} opts.id ID
     * @param {String} opts.name Name
     * @param {String} opts.description Description
     * @param {String} opts.nameOrDescription Name or description
     * @param {String} opts.publishVersionId Publish version ID
     * @param {String} opts.editableBy Editable by
     * @param {String} opts.lockedBy Locked by
     * @param {module:purecloud-platform-client-v2/model/String} opts.secure Secure
     * @param {Boolean} opts.deleted Include deleted (default to false)
     * @param {Boolean} opts.includeSchemas Include variable schemas (default to false)
     */
    this.getFlows = function(type, opts) { 
      opts = opts || {};

      // verify the required parameter 'type' is set
      if (type === undefined || type === null) {
        throw "Missing the required parameter 'type' when calling getFlows";
      }


      return this.apiClient.callApi(
        '/api/v2/flows', 
        'GET', 
        {  }, 
        { 'type': type,'pageNumber': opts['pageNumber'],'pageSize': opts['pageSize'],'sortBy': opts['sortBy'],'sortOrder': opts['sortOrder'],'id': this.apiClient.buildCollectionParam(opts['id'], 'multi'),'name': opts['name'],'description': opts['description'],'nameOrDescription': opts['nameOrDescription'],'publishVersionId': opts['publishVersionId'],'editableBy': opts['editableBy'],'lockedBy': opts['lockedBy'],'secure': opts['secure'],'deleted': opts['deleted'],'includeSchemas': opts['includeSchemas'] }, 
        {  }, 
        {  }, 
        null, 
        ['PureCloud Auth'], 
        ['application/json'], 
        ['application/json']
      );
    };


    /**
     * Rebuild Dependency Tracking data for an organization
     * Asynchronous.  Notification topic: v2.architect.dependencytracking.build
     */
    this.postArchitectDependencytrackingBuild = function() { 


      return this.apiClient.callApi(
        '/api/v2/architect/dependencytracking/build', 
        'POST', 
        {  }, 
        {  }, 
        {  }, 
        {  }, 
        null, 
        ['PureCloud Auth'], 
        ['application/json'], 
        ['application/json']
      );
    };


    /**
     * Create IVR config.
     * 
     * @param {Object} opts Optional parameters
     * @param {module:purecloud-platform-client-v2/model/IVR} opts.body 
     */
    this.postArchitectIvrs = function(opts) { 
      opts = opts || {};


      return this.apiClient.callApi(
        '/api/v2/architect/ivrs', 
        'POST', 
        {  }, 
        {  }, 
        {  }, 
        {  }, 
        opts['body'], 
        ['PureCloud Auth'], 
        ['application/json'], 
        ['application/json']
      );
    };


    /**
     * Create a new user prompt resource
     * 
     * @param {String} promptId Prompt ID
     * @param {Object} opts Optional parameters
     * @param {module:purecloud-platform-client-v2/model/PromptAssetCreate} opts.body 
     */
    this.postArchitectPromptResources = function(promptId, opts) { 
      opts = opts || {};

      // verify the required parameter 'promptId' is set
      if (promptId === undefined || promptId === null) {
        throw "Missing the required parameter 'promptId' when calling postArchitectPromptResources";
      }


      return this.apiClient.callApi(
        '/api/v2/architect/prompts/{promptId}/resources', 
        'POST', 
        { 'promptId': promptId }, 
        {  }, 
        {  }, 
        {  }, 
        opts['body'], 
        ['PureCloud Auth'], 
        ['application/json'], 
        ['application/json']
      );
    };


    /**
     * Create a new user prompt
     * 
     * @param {Object} opts Optional parameters
     * @param {module:purecloud-platform-client-v2/model/Prompt} opts.body 
     */
    this.postArchitectPrompts = function(opts) { 
      opts = opts || {};


      return this.apiClient.callApi(
        '/api/v2/architect/prompts', 
        'POST', 
        {  }, 
        {  }, 
        {  }, 
        {  }, 
        opts['body'], 
        ['PureCloud Auth'], 
        ['application/json'], 
        ['application/json']
      );
    };


    /**
     * Creates a new schedule group
     * 
     * @param {Object} opts Optional parameters
     * @param {module:purecloud-platform-client-v2/model/ScheduleGroup} opts.body 
     */
    this.postArchitectSchedulegroups = function(opts) { 
      opts = opts || {};


      return this.apiClient.callApi(
        '/api/v2/architect/schedulegroups', 
        'POST', 
        {  }, 
        {  }, 
        {  }, 
        {  }, 
        opts['body'], 
        ['PureCloud Auth'], 
        ['application/json'], 
        ['application/json']
      );
    };


    /**
     * Create a new schedule.
     * 
     * @param {Object} opts Optional parameters
     * @param {module:purecloud-platform-client-v2/model/Schedule} opts.body 
     */
    this.postArchitectSchedules = function(opts) { 
      opts = opts || {};


      return this.apiClient.callApi(
        '/api/v2/architect/schedules', 
        'POST', 
        {  }, 
        {  }, 
        {  }, 
        {  }, 
        opts['body'], 
        ['PureCloud Auth'], 
        ['application/json'], 
        ['application/json']
      );
    };


    /**
     * Create system prompt resource override.
     * 
     * @param {String} promptId Prompt ID
     * @param {Object} opts Optional parameters
     * @param {module:purecloud-platform-client-v2/model/SystemPromptAsset} opts.body 
     */
    this.postArchitectSystempromptResources = function(promptId, opts) { 
      opts = opts || {};

      // verify the required parameter 'promptId' is set
      if (promptId === undefined || promptId === null) {
        throw "Missing the required parameter 'promptId' when calling postArchitectSystempromptResources";
      }


      return this.apiClient.callApi(
        '/api/v2/architect/systemprompts/{promptId}/resources', 
        'POST', 
        { 'promptId': promptId }, 
        {  }, 
        {  }, 
        {  }, 
        opts['body'], 
        ['PureCloud Auth'], 
        ['application/json'], 
        ['application/json']
      );
    };


    /**
     * Create flow version
     * 
     * @param {String} flowId Flow ID
     * @param {Object} opts Optional parameters
     * @param {Object} opts.body 
     */
    this.postFlowVersions = function(flowId, opts) { 
      opts = opts || {};

      // verify the required parameter 'flowId' is set
      if (flowId === undefined || flowId === null) {
        throw "Missing the required parameter 'flowId' when calling postFlowVersions";
      }


      return this.apiClient.callApi(
        '/api/v2/flows/{flowId}/versions', 
        'POST', 
        { 'flowId': flowId }, 
        {  }, 
        {  }, 
        {  }, 
        opts['body'], 
        ['PureCloud Auth'], 
        ['application/json'], 
        ['application/json']
      );
    };


    /**
     * Create flow
     * 
     * @param {Object} opts Optional parameters
     * @param {module:purecloud-platform-client-v2/model/Flow} opts.body 
     */
    this.postFlows = function(opts) { 
      opts = opts || {};


      return this.apiClient.callApi(
        '/api/v2/flows', 
        'POST', 
        {  }, 
        {  }, 
        {  }, 
        {  }, 
        opts['body'], 
        ['PureCloud Auth'], 
        ['application/json'], 
        ['application/json']
      );
    };


    /**
     * Check-in flow
     * Asynchronous.  Notification topic: v2.flows.{flowId}
     * @param {String} flow Flow ID
     */
    this.postFlowsActionsCheckin = function(flow) { 

      // verify the required parameter 'flow' is set
      if (flow === undefined || flow === null) {
        throw "Missing the required parameter 'flow' when calling postFlowsActionsCheckin";
      }


      return this.apiClient.callApi(
        '/api/v2/flows/actions/checkin', 
        'POST', 
        {  }, 
        { 'flow': flow }, 
        {  }, 
        {  }, 
        null, 
        ['PureCloud Auth'], 
        ['application/json'], 
        ['application/json']
      );
    };


    /**
     * Check-out flow
     * 
     * @param {String} flow Flow ID
     */
    this.postFlowsActionsCheckout = function(flow) { 

      // verify the required parameter 'flow' is set
      if (flow === undefined || flow === null) {
        throw "Missing the required parameter 'flow' when calling postFlowsActionsCheckout";
      }


      return this.apiClient.callApi(
        '/api/v2/flows/actions/checkout', 
        'POST', 
        {  }, 
        { 'flow': flow }, 
        {  }, 
        {  }, 
        null, 
        ['PureCloud Auth'], 
        ['application/json'], 
        ['application/json']
      );
    };


    /**
     * Deactivate flow
     * 
     * @param {String} flow Flow ID
     */
    this.postFlowsActionsDeactivate = function(flow) { 

      // verify the required parameter 'flow' is set
      if (flow === undefined || flow === null) {
        throw "Missing the required parameter 'flow' when calling postFlowsActionsDeactivate";
      }


      return this.apiClient.callApi(
        '/api/v2/flows/actions/deactivate', 
        'POST', 
        {  }, 
        { 'flow': flow }, 
        {  }, 
        {  }, 
        null, 
        ['PureCloud Auth'], 
        ['application/json'], 
        ['application/json']
      );
    };


    /**
     * Publish flow
     * Asynchronous.  Notification topic: v2.flows.{flowId}
     * @param {String} flow Flow ID
     * @param {Object} opts Optional parameters
     * @param {String} opts.version version
     */
    this.postFlowsActionsPublish = function(flow, opts) { 
      opts = opts || {};

      // verify the required parameter 'flow' is set
      if (flow === undefined || flow === null) {
        throw "Missing the required parameter 'flow' when calling postFlowsActionsPublish";
      }


      return this.apiClient.callApi(
        '/api/v2/flows/actions/publish', 
        'POST', 
        {  }, 
        { 'flow': flow,'version': opts['version'] }, 
        {  }, 
        {  }, 
        null, 
        ['PureCloud Auth'], 
        ['application/json'], 
        ['application/json']
      );
    };


    /**
     * Revert flow
     * 
     * @param {String} flow Flow ID
     */
    this.postFlowsActionsRevert = function(flow) { 

      // verify the required parameter 'flow' is set
      if (flow === undefined || flow === null) {
        throw "Missing the required parameter 'flow' when calling postFlowsActionsRevert";
      }


      return this.apiClient.callApi(
        '/api/v2/flows/actions/revert', 
        'POST', 
        {  }, 
        { 'flow': flow }, 
        {  }, 
        {  }, 
        null, 
        ['PureCloud Auth'], 
        ['application/json'], 
        ['application/json']
      );
    };


    /**
     * Unlock flow
     * Allows for unlocking a flow in the case where there is no flow configuration available, and thus a check-in will not unlock the flow. The user must have Architect Admin permissions to perform this action.
     * @param {String} flow Flow ID
     */
    this.postFlowsActionsUnlock = function(flow) { 

      // verify the required parameter 'flow' is set
      if (flow === undefined || flow === null) {
        throw "Missing the required parameter 'flow' when calling postFlowsActionsUnlock";
      }


      return this.apiClient.callApi(
        '/api/v2/flows/actions/unlock', 
        'POST', 
        {  }, 
        { 'flow': flow }, 
        {  }, 
        {  }, 
        null, 
        ['PureCloud Auth'], 
        ['application/json'], 
        ['application/json']
      );
    };


    /**
     * Update an IVR Config.
     * 
     * @param {String} ivrId IVR id
     * @param {Object} opts Optional parameters
     * @param {module:purecloud-platform-client-v2/model/IVR} opts.body 
     */
    this.putArchitectIvr = function(ivrId, opts) { 
      opts = opts || {};

      // verify the required parameter 'ivrId' is set
      if (ivrId === undefined || ivrId === null) {
        throw "Missing the required parameter 'ivrId' when calling putArchitectIvr";
      }


      return this.apiClient.callApi(
        '/api/v2/architect/ivrs/{ivrId}', 
        'PUT', 
        { 'ivrId': ivrId }, 
        {  }, 
        {  }, 
        {  }, 
        opts['body'], 
        ['PureCloud Auth'], 
        ['application/json'], 
        ['application/json']
      );
    };


    /**
     * Update specified user prompt
     * 
     * @param {String} promptId Prompt ID
     * @param {Object} opts Optional parameters
     * @param {module:purecloud-platform-client-v2/model/Prompt} opts.body 
     */
    this.putArchitectPrompt = function(promptId, opts) { 
      opts = opts || {};

      // verify the required parameter 'promptId' is set
      if (promptId === undefined || promptId === null) {
        throw "Missing the required parameter 'promptId' when calling putArchitectPrompt";
      }


      return this.apiClient.callApi(
        '/api/v2/architect/prompts/{promptId}', 
        'PUT', 
        { 'promptId': promptId }, 
        {  }, 
        {  }, 
        {  }, 
        opts['body'], 
        ['PureCloud Auth'], 
        ['application/json'], 
        ['application/json']
      );
    };


    /**
     * Update specified user prompt resource
     * 
     * @param {String} promptId Prompt ID
     * @param {String} languageCode Language
     * @param {Object} opts Optional parameters
     * @param {module:purecloud-platform-client-v2/model/PromptAsset} opts.body 
     */
    this.putArchitectPromptResource = function(promptId, languageCode, opts) { 
      opts = opts || {};

      // verify the required parameter 'promptId' is set
      if (promptId === undefined || promptId === null) {
        throw "Missing the required parameter 'promptId' when calling putArchitectPromptResource";
      }

      // verify the required parameter 'languageCode' is set
      if (languageCode === undefined || languageCode === null) {
        throw "Missing the required parameter 'languageCode' when calling putArchitectPromptResource";
      }


      return this.apiClient.callApi(
        '/api/v2/architect/prompts/{promptId}/resources/{languageCode}', 
        'PUT', 
        { 'promptId': promptId,'languageCode': languageCode }, 
        {  }, 
        {  }, 
        {  }, 
        opts['body'], 
        ['PureCloud Auth'], 
        ['application/json'], 
        ['application/json']
      );
    };


    /**
     * Update schedule by ID
     * 
     * @param {String} scheduleId Schedule ID
     * @param {Object} opts Optional parameters
     * @param {module:purecloud-platform-client-v2/model/Schedule} opts.body 
     */
    this.putArchitectSchedule = function(scheduleId, opts) { 
      opts = opts || {};

      // verify the required parameter 'scheduleId' is set
      if (scheduleId === undefined || scheduleId === null) {
        throw "Missing the required parameter 'scheduleId' when calling putArchitectSchedule";
      }


      return this.apiClient.callApi(
        '/api/v2/architect/schedules/{scheduleId}', 
        'PUT', 
        { 'scheduleId': scheduleId }, 
        {  }, 
        {  }, 
        {  }, 
        opts['body'], 
        ['PureCloud Auth'], 
        ['application/json'], 
        ['application/json']
      );
    };


    /**
     * Updates a schedule group by ID
     * 
     * @param {String} scheduleGroupId Schedule group ID
     * @param {Object} opts Optional parameters
     * @param {module:purecloud-platform-client-v2/model/ScheduleGroup} opts.body 
     */
    this.putArchitectSchedulegroup = function(scheduleGroupId, opts) { 
      opts = opts || {};

      // verify the required parameter 'scheduleGroupId' is set
      if (scheduleGroupId === undefined || scheduleGroupId === null) {
        throw "Missing the required parameter 'scheduleGroupId' when calling putArchitectSchedulegroup";
      }


      return this.apiClient.callApi(
        '/api/v2/architect/schedulegroups/{scheduleGroupId}', 
        'PUT', 
        { 'scheduleGroupId': scheduleGroupId }, 
        {  }, 
        {  }, 
        {  }, 
        opts['body'], 
        ['PureCloud Auth'], 
        ['application/json'], 
        ['application/json']
      );
    };


    /**
     * Updates a system prompt resource override.
     * 
     * @param {String} promptId Prompt ID
     * @param {String} languageCode Language
     * @param {Object} opts Optional parameters
     * @param {module:purecloud-platform-client-v2/model/SystemPromptAsset} opts.body 
     */
    this.putArchitectSystempromptResource = function(promptId, languageCode, opts) { 
      opts = opts || {};

      // verify the required parameter 'promptId' is set
      if (promptId === undefined || promptId === null) {
        throw "Missing the required parameter 'promptId' when calling putArchitectSystempromptResource";
      }

      // verify the required parameter 'languageCode' is set
      if (languageCode === undefined || languageCode === null) {
        throw "Missing the required parameter 'languageCode' when calling putArchitectSystempromptResource";
      }


      return this.apiClient.callApi(
        '/api/v2/architect/systemprompts/{promptId}/resources/{languageCode}', 
        'PUT', 
        { 'promptId': promptId,'languageCode': languageCode }, 
        {  }, 
        {  }, 
        {  }, 
        opts['body'], 
        ['PureCloud Auth'], 
        ['application/json'], 
        ['application/json']
      );
    };


    /**
     * Update flow
     * 
     * @param {String} flowId Flow ID
     * @param {Object} opts Optional parameters
     * @param {module:purecloud-platform-client-v2/model/Flow} opts.body 
     */
    this.putFlow = function(flowId, opts) { 
      opts = opts || {};

      // verify the required parameter 'flowId' is set
      if (flowId === undefined || flowId === null) {
        throw "Missing the required parameter 'flowId' when calling putFlow";
      }


      return this.apiClient.callApi(
        '/api/v2/flows/{flowId}', 
        'PUT', 
        { 'flowId': flowId }, 
        {  }, 
        {  }, 
        {  }, 
        opts['body'], 
        ['PureCloud Auth'], 
        ['application/json'], 
        ['application/json']
      );
    };
  };

  return exports;
}));

},{"../ApiClient":8}],12:[function(require,module,exports){
(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['purecloud-platform-client-v2/ApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'));
  } else {
    // Browser globals (root is window)
    if (!root.platformClient) {
      root.platformClient = {};
    }
    root.platformClient.AttributesApi = factory(root.platformClient.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * Attributes service.
   * @module purecloud-platform-client-v2/api/AttributesApi
   * @version 6.0.1
   */

  /**
   * Constructs a new AttributesApi. 
   * @alias module:purecloud-platform-client-v2/api/AttributesApi
   * @class
   * @param {module:purecloud-platform-client-v2/ApiClient} apiClient Optional API client implementation to use,
   * default to {@link module:purecloud-platform-client-v2/ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;



    /**
     * Delete an existing Attribute.
     * This will remove attribute.
     * @param {String} attributeId Attribute ID
     */
    this.deleteAttribute = function(attributeId) { 

      // verify the required parameter 'attributeId' is set
      if (attributeId === undefined || attributeId === null) {
        throw "Missing the required parameter 'attributeId' when calling deleteAttribute";
      }


      return this.apiClient.callApi(
        '/api/v2/attributes/{attributeId}', 
        'DELETE', 
        { 'attributeId': attributeId }, 
        {  }, 
        {  }, 
        {  }, 
        null, 
        ['PureCloud Auth'], 
        ['application/json'], 
        ['application/json']
      );
    };


    /**
     * Get details about an existing attribute.
     * 
     * @param {String} attributeId Attribute ID
     */
    this.getAttribute = function(attributeId) { 

      // verify the required parameter 'attributeId' is set
      if (attributeId === undefined || attributeId === null) {
        throw "Missing the required parameter 'attributeId' when calling getAttribute";
      }


      return this.apiClient.callApi(
        '/api/v2/attributes/{attributeId}', 
        'GET', 
        { 'attributeId': attributeId }, 
        {  }, 
        {  }, 
        {  }, 
        null, 
        ['PureCloud Auth'], 
        ['application/json'], 
        ['application/json']
      );
    };


    /**
     * Gets a list of existing attributes.
     * 
     * @param {Object} opts Optional parameters
     * @param {Number} opts.pageNumber Page number (default to 1)
     * @param {Number} opts.pageSize Page size (default to 25)
     */
    this.getAttributes = function(opts) { 
      opts = opts || {};


      return this.apiClient.callApi(
        '/api/v2/attributes', 
        'GET', 
        {  }, 
        { 'pageNumber': opts['pageNumber'],'pageSize': opts['pageSize'] }, 
        {  }, 
        {  }, 
        null, 
        ['PureCloud Auth'], 
        ['application/json'], 
        ['application/json']
      );
    };


    /**
     * Create an attribute.
     * 
     * @param {module:purecloud-platform-client-v2/model/Attribute} body Attribute
     */
    this.postAttributes = function(body) { 

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw "Missing the required parameter 'body' when calling postAttributes";
      }


      return this.apiClient.callApi(
        '/api/v2/attributes', 
        'POST', 
        {  }, 
        {  }, 
        {  }, 
        {  }, 
        body, 
        ['PureCloud Auth'], 
        ['application/json'], 
        ['application/json']
      );
    };


    /**
     * Query attributes
     * 
     * @param {module:purecloud-platform-client-v2/model/AttributeQueryRequest} body query
     */
    this.postAttributesQuery = function(body) { 

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw "Missing the required parameter 'body' when calling postAttributesQuery";
      }


      return this.apiClient.callApi(
        '/api/v2/attributes/query', 
        'POST', 
        {  }, 
        {  }, 
        {  }, 
        {  }, 
        body, 
        ['PureCloud Auth'], 
        ['application/json'], 
        ['application/json']
      );
    };


    /**
     * Update an existing attribute.
     * Fields that can be updated: name, description. The most recent version is required for updates.
     * @param {String} attributeId Attribute ID
     * @param {module:purecloud-platform-client-v2/model/Attribute} body Attribute
     */
    this.putAttribute = function(attributeId, body) { 

      // verify the required parameter 'attributeId' is set
      if (attributeId === undefined || attributeId === null) {
        throw "Missing the required parameter 'attributeId' when calling putAttribute";
      }

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw "Missing the required parameter 'body' when calling putAttribute";
      }


      return this.apiClient.callApi(
        '/api/v2/attributes/{attributeId}', 
        'PUT', 
        { 'attributeId': attributeId }, 
        {  }, 
        {  }, 
        {  }, 
        body, 
        ['PureCloud Auth'], 
        ['application/json'], 
        ['application/json']
      );
    };
  };

  return exports;
}));

},{"../ApiClient":8}],13:[function(require,module,exports){
(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['purecloud-platform-client-v2/ApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'));
  } else {
    // Browser globals (root is window)
    if (!root.platformClient) {
      root.platformClient = {};
    }
    root.platformClient.AuthorizationApi = factory(root.platformClient.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * Authorization service.
   * @module purecloud-platform-client-v2/api/AuthorizationApi
   * @version 6.0.1
   */

  /**
   * Constructs a new AuthorizationApi. 
   * @alias module:purecloud-platform-client-v2/api/AuthorizationApi
   * @class
   * @param {module:purecloud-platform-client-v2/ApiClient} apiClient Optional API client implementation to use,
   * default to {@link module:purecloud-platform-client-v2/ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;



    /**
     * Delete an organization role.
     * 
     * @param {String} roleId Role ID
     */
    this.deleteAuthorizationRole = function(roleId) { 

      // verify the required parameter 'roleId' is set
      if (roleId === undefined || roleId === null) {
        throw "Missing the required parameter 'roleId' when calling deleteAuthorizationRole";
      }


      return this.apiClient.callApi(
        '/api/v2/authorization/roles/{roleId}', 
        'DELETE', 
        { 'roleId': roleId }, 
        {  }, 
        {  }, 
        {  }, 
        null, 
        ['PureCloud Auth'], 
        ['application/json'], 
        ['application/json']
      );
    };


    /**
     * Removes all the roles from the user.
     * 
     * @param {String} userId User ID
     */
    this.deleteUserRoles = function(userId) { 

      // verify the required parameter 'userId' is set
      if (userId === undefined || userId === null) {
        throw "Missing the required parameter 'userId' when calling deleteUserRoles";
      }


      return this.apiClient.callApi(
        '/api/v2/users/{userId}/roles', 
        'DELETE', 
        { 'userId': userId }, 
        {  }, 
        {  }, 
        {  }, 
        null, 
        ['PureCloud Auth'], 
        ['application/json'], 
        ['application/json']
      );
    };


    /**
     * Get all permissions.
     * Retrieve a list of all permission defined in the system.
     * @param {Object} opts Optional parameters
     * @param {Number} opts.pageSize Page size (default to 25)
     * @param {Number} opts.pageNumber Page number (default to 1)
     */
    this.getAuthorizationPermissions = function(opts) { 
      opts = opts || {};


      return this.apiClient.callApi(
        '/api/v2/authorization/permissions', 
        'GET', 
        {  }, 
        { 'pageSize': opts['pageSize'],'pageNumber': opts['pageNumber'] }, 
        {  }, 
        {  }, 
        null, 
        ['PureCloud Auth'], 
        ['application/json'], 
        ['application/json']
      );
    };


    /**
     * Get the list of enabled products
     * Gets the list of enabled products. Some example product names are: collaborateFree, collaboratePro, communicate, and engage.
     */
    this.getAuthorizationProducts = function() { 


      return this.apiClient.callApi(
        '/api/v2/authorization/products', 
        'GET', 
        {  }, 
        {  }, 
        {  }, 
        {  }, 
        null, 
        ['PureCloud Auth'], 
        ['application/json'], 
        ['application/json']
      );
    };


    /**
     * Get a single organization role.
     * Get the organization role specified by its ID.
     * @param {String} roleId Role ID
     */
    this.getAuthorizationRole = function(roleId) { 

      // verify the required parameter 'roleId' is set
      if (roleId === undefined || roleId === null) {
        throw "Missing the required parameter 'roleId' when calling getAuthorizationRole";
      }


      return this.apiClient.callApi(
        '/api/v2/authorization/roles/{roleId}', 
        'GET', 
        { 'roleId': roleId }, 
        {  }, 
        {  }, 
        {  }, 
        null, 
        ['PureCloud Auth'], 
        ['application/json'], 
        ['application/json']
      );
    };


    /**
     * Get an org role to default role comparison comparison
     * Compares any organization role to a default role id and show differences
     * @param {String} leftRoleId Left Role ID
     * @param {String} rightRoleId Right Role id
     */
    this.getAuthorizationRoleComparedefaultRightRoleId = function(leftRoleId, rightRoleId) { 

      // verify the required parameter 'leftRoleId' is set
      if (leftRoleId === undefined || leftRoleId === null) {
        throw "Missing the required parameter 'leftRoleId' when calling getAuthorizationRoleComparedefaultRightRoleId";
      }

      // verify the required parameter 'rightRoleId' is set
      if (rightRoleId === undefined || rightRoleId === null) {
        throw "Missing the required parameter 'rightRoleId' when calling getAuthorizationRoleComparedefaultRightRoleId";
      }


      return this.apiClient.callApi(
        '/api/v2/authorization/roles/{leftRoleId}/comparedefault/{rightRoleId}', 
        'GET', 
        { 'leftRoleId': leftRoleId,'rightRoleId': rightRoleId }, 
        {  }, 
        {  }, 
        {  }, 
        null, 
        ['PureCloud Auth'], 
        ['application/json'], 
        ['application/json']
      );
    };


    /**
     * Retrieve a list of all roles defined for the organization
     * 
     * @param {Object} opts Optional parameters
     * @param {Number} opts.pageSize The total page size requested (default to 25)
     * @param {Number} opts.pageNumber The page number requested (default to 1)
     * @param {String} opts.sortBy variable name requested to sort by
     * @param {Array.<Object>} opts.expand variable name requested by expand list
     * @param {String} opts.nextPage next page token
     * @param {String} opts.previousPage Previous page token
     * @param {String} opts.name 
     * @param {Array.<Object>} opts.permission 
     * @param {Array.<Object>} opts.defaultRoleId 
     * @param {Boolean} opts.userCount  (default to true)
     */
    this.getAuthorizationRoles = function(opts) { 
      opts = opts || {};


      return this.apiClient.callApi(
        '/api/v2/authorization/roles', 
        'GET', 
        {  }, 
        { 'pageSize': opts['pageSize'],'pageNumber': opts['pageNumber'],'sortBy': opts['sortBy'],'expand': this.apiClient.buildCollectionParam(opts['expand'], 'multi'),'nextPage': opts['nextPage'],'previousPage': opts['previousPage'],'name': opts['name'],'permission': this.apiClient.buildCollectionParam(opts['permission'], 'multi'),'defaultRoleId': this.apiClient.buildCollectionParam(opts['defaultRoleId'], 'multi'),'userCount': opts['userCount'] }, 
        {  }, 
        {  }, 
        null, 
        ['PureCloud Auth'], 
        ['application/json'], 
        ['application/json']
      );
    };


    /**
     * Returns a listing of roles and permissions for a user.
     * 
     * @param {String} userId User ID
     */
    this.getUserRoles = function(userId) { 

      // verify the required parameter 'userId' is set
      if (userId === undefined || userId === null) {
        throw "Missing the required parameter 'userId' when calling getUserRoles";
      }


      return this.apiClient.callApi(
        '/api/v2/users/{userId}/roles', 
        'GET', 
        { 'userId': userId }, 
        {  }, 
        {  }, 
        {  }, 
        null, 
        ['PureCloud Auth'], 
        ['application/json'], 
        ['application/json']
      );
    };


    /**
     * Patch Organization Role for needsUpdate Field
     * Patch Organization Role for needsUpdate Field
     * @param {String} roleId Role ID
     * @param {module:purecloud-platform-client-v2/model/DomainOrganizationRole} body Organization role
     */
    this.patchAuthorizationRole = function(roleId, body) { 

      // verify the required parameter 'roleId' is set
      if (roleId === undefined || roleId === null) {
        throw "Missing the required parameter 'roleId' when calling patchAuthorizationRole";
      }

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw "Missing the required parameter 'body' when calling patchAuthorizationRole";
      }


      return this.apiClient.callApi(
        '/api/v2/authorization/roles/{roleId}', 
        'PATCH', 
        { 'roleId': roleId }, 
        {  }, 
        {  }, 
        {  }, 
        body, 
        ['PureCloud Auth'], 
        ['application/json'], 
        ['application/json']
      );
    };


    /**
     * Get an unsaved org role to default role comparison
     * Allows users to compare their existing roles in an unsaved state to its default role
     * @param {String} leftRoleId Left Role ID
     * @param {String} rightRoleId Right Role id
     * @param {module:purecloud-platform-client-v2/model/DomainOrganizationRole} body Organization role
     */
    this.postAuthorizationRoleComparedefaultRightRoleId = function(leftRoleId, rightRoleId, body) { 

      // verify the required parameter 'leftRoleId' is set
      if (leftRoleId === undefined || leftRoleId === null) {
        throw "Missing the required parameter 'leftRoleId' when calling postAuthorizationRoleComparedefaultRightRoleId";
      }

      // verify the required parameter 'rightRoleId' is set
      if (rightRoleId === undefined || rightRoleId === null) {
        throw "Missing the required parameter 'rightRoleId' when calling postAuthorizationRoleComparedefaultRightRoleId";
      }

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw "Missing the required parameter 'body' when calling postAuthorizationRoleComparedefaultRightRoleId";
      }


      return this.apiClient.callApi(
        '/api/v2/authorization/roles/{leftRoleId}/comparedefault/{rightRoleId}', 
        'POST', 
        { 'leftRoleId': leftRoleId,'rightRoleId': rightRoleId }, 
        {  }, 
        {  }, 
        {  }, 
        body, 
        ['PureCloud Auth'], 
        ['application/json'], 
        ['application/json']
      );
    };


    /**
     * Create an organization role.
     * 
     * @param {module:purecloud-platform-client-v2/model/DomainOrganizationRoleCreate} body Organization role
     */
    this.postAuthorizationRoles = function(body) { 

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw "Missing the required parameter 'body' when calling postAuthorizationRoles";
      }


      return this.apiClient.callApi(
        '/api/v2/authorization/roles', 
        'POST', 
        {  }, 
        {  }, 
        {  }, 
        {  }, 
        body, 
        ['PureCloud Auth'], 
        ['application/json'], 
        ['application/json']
      );
    };


    /**
     * Restores all default roles
     * This endpoint serves several purposes. 1. It provides the org with default roles. This is important for default roles that will be added after go-live (they can retroactively add the new default-role). Note: When not using a query param of force=true, it only adds the default roles not configured for the org; it does not overwrite roles. 2. Using the query param force=true, you can restore all default roles. Note: This does not have an effect on custom roles.
     * @param {Object} opts Optional parameters
     * @param {Boolean} opts.force Restore default roles (default to false)
     */
    this.postAuthorizationRolesDefault = function(opts) { 
      opts = opts || {};


      return this.apiClient.callApi(
        '/api/v2/authorization/roles/default', 
        'POST', 
        {  }, 
        { 'force': opts['force'] }, 
        {  }, 
        {  }, 
        null, 
        ['PureCloud Auth'], 
        ['application/json'], 
        ['application/json']
      );
    };


    /**
     * Update an organization role.
     * Update
     * @param {String} roleId Role ID
     * @param {module:purecloud-platform-client-v2/model/DomainOrganizationRoleUpdate} body Organization role
     */
    this.putAuthorizationRole = function(roleId, body) { 

      // verify the required parameter 'roleId' is set
      if (roleId === undefined || roleId === null) {
        throw "Missing the required parameter 'roleId' when calling putAuthorizationRole";
      }

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw "Missing the required parameter 'body' when calling putAuthorizationRole";
      }


      return this.apiClient.callApi(
        '/api/v2/authorization/roles/{roleId}', 
        'PUT', 
        { 'roleId': roleId }, 
        {  }, 
        {  }, 
        {  }, 
        body, 
        ['PureCloud Auth'], 
        ['application/json'], 
        ['application/json']
      );
    };


    /**
     * Sets the users for the role
     * 
     * @param {String} roleId Role ID
     * @param {Array.<module:purecloud-platform-client-v2/model/String>} body List of user IDs
     */
    this.putAuthorizationRoleUsersAdd = function(roleId, body) { 

      // verify the required parameter 'roleId' is set
      if (roleId === undefined || roleId === null) {
        throw "Missing the required parameter 'roleId' when calling putAuthorizationRoleUsersAdd";
      }

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw "Missing the required parameter 'body' when calling putAuthorizationRoleUsersAdd";
      }


      return this.apiClient.callApi(
        '/api/v2/authorization/roles/{roleId}/users/add', 
        'PUT', 
        { 'roleId': roleId }, 
        {  }, 
        {  }, 
        {  }, 
        body, 
        ['PureCloud Auth'], 
        ['application/json'], 
        ['application/json']
      );
    };


    /**
     * Removes the users from the role
     * 
     * @param {String} roleId Role ID
     * @param {Array.<module:purecloud-platform-client-v2/model/String>} body List of user IDs
     */
    this.putAuthorizationRoleUsersRemove = function(roleId, body) { 

      // verify the required parameter 'roleId' is set
      if (roleId === undefined || roleId === null) {
        throw "Missing the required parameter 'roleId' when calling putAuthorizationRoleUsersRemove";
      }

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw "Missing the required parameter 'body' when calling putAuthorizationRoleUsersRemove";
      }


      return this.apiClient.callApi(
        '/api/v2/authorization/roles/{roleId}/users/remove', 
        'PUT', 
        { 'roleId': roleId }, 
        {  }, 
        {  }, 
        {  }, 
        body, 
        ['PureCloud Auth'], 
        ['application/json'], 
        ['application/json']
      );
    };


    /**
     * Restore specified default roles
     * 
     * @param {Array.<module:purecloud-platform-client-v2/model/DomainOrganizationRole>} body Organization roles list
     */
    this.putAuthorizationRolesDefault = function(body) { 

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw "Missing the required parameter 'body' when calling putAuthorizationRolesDefault";
      }


      return this.apiClient.callApi(
        '/api/v2/authorization/roles/default', 
        'PUT', 
        {  }, 
        {  }, 
        {  }, 
        {  }, 
        body, 
        ['PureCloud Auth'], 
        ['application/json'], 
        ['application/json']
      );
    };


    /**
     * Sets the user&#39;s roles
     * 
     * @param {String} userId User ID
     * @param {Array.<module:purecloud-platform-client-v2/model/String>} body List of roles
     */
    this.putUserRoles = function(userId, body) { 

      // verify the required parameter 'userId' is set
      if (userId === undefined || userId === null) {
        throw "Missing the required parameter 'userId' when calling putUserRoles";
      }

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw "Missing the required parameter 'body' when calling putUserRoles";
      }


      return this.apiClient.callApi(
        '/api/v2/users/{userId}/roles', 
        'PUT', 
        { 'userId': userId }, 
        {  }, 
        {  }, 
        {  }, 
        body, 
        ['PureCloud Auth'], 
        ['application/json'], 
        ['application/json']
      );
    };
  };

  return exports;
}));

},{"../ApiClient":8}],14:[function(require,module,exports){
(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['purecloud-platform-client-v2/ApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'));
  } else {
    // Browser globals (root is window)
    if (!root.platformClient) {
      root.platformClient = {};
    }
    root.platformClient.ContentManagementApi = factory(root.platformClient.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * ContentManagement service.
   * @module purecloud-platform-client-v2/api/ContentManagementApi
   * @version 6.0.1
   */

  /**
   * Constructs a new ContentManagementApi. 
   * @alias module:purecloud-platform-client-v2/api/ContentManagementApi
   * @class
   * @param {module:purecloud-platform-client-v2/ApiClient} apiClient Optional API client implementation to use,
   * default to {@link module:purecloud-platform-client-v2/ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;



    /**
     * Delete a document.
     * 
     * @param {String} documentId Document ID
     * @param {Object} opts Optional parameters
     * @param {Boolean} opts.override Override any lock on the document
     */
    this.deleteContentmanagementDocument = function(documentId, opts) { 
      opts = opts || {};

      // verify the required parameter 'documentId' is set
      if (documentId === undefined || documentId === null) {
        throw "Missing the required parameter 'documentId' when calling deleteContentmanagementDocument";
      }


      return this.apiClient.callApi(
        '/api/v2/contentmanagement/documents/{documentId}', 
        'DELETE', 
        { 'documentId': documentId }, 
        { 'override': opts['override'] }, 
        {  }, 
        {  }, 
        null, 
        ['PureCloud Auth'], 
        ['application/json'], 
        ['application/json']
      );
    };


    /**
     * Deletes an existing share.
     * This revokes sharing rights specified in the share record
     * @param {String} shareId Share ID
     */
    this.deleteContentmanagementShare = function(shareId) { 

      // verify the required parameter 'shareId' is set
      if (shareId === undefined || shareId === null) {
        throw "Missing the required parameter 'shareId' when calling deleteContentmanagementShare";
      }


      return this.apiClient.callApi(
        '/api/v2/contentmanagement/shares/{shareId}', 
        'DELETE', 
        { 'shareId': shareId }, 
        {  }, 
        {  }, 
        {  }, 
        null, 
        ['PureCloud Auth'], 
        ['application/json'], 
        ['application/json']
      );
    };


    /**
     * Cancel the command for this status
     * 
     * @param {String} statusId Status ID
     */
    this.deleteContentmanagementStatusStatusId = function(statusId) { 

      // verify the required parameter 'statusId' is set
      if (statusId === undefined || statusId === null) {
        throw "Missing the required parameter 'statusId' when calling deleteContentmanagementStatusStatusId";
      }


      return this.apiClient.callApi(
        '/api/v2/contentmanagement/status/{statusId}', 
        'DELETE', 
        { 'statusId': statusId }, 
        {  }, 
        {  }, 
        {  }, 
        null, 
        ['PureCloud Auth'], 
        ['application/json'], 
        ['application/json']
      );
    };


    /**
     * Delete a workspace
     * 
     * @param {String} workspaceId Workspace ID
     * @param {Object} opts Optional parameters
     * @param {String} opts.moveChildrenToWorkspaceId New location for objects in deleted workspace.
     */
    this.deleteContentmanagementWorkspace = function(workspaceId, opts) { 
      opts = opts || {};

      // verify the required parameter 'workspaceId' is set
      if (workspaceId === undefined || workspaceId === null) {
        throw "Missing the required parameter 'workspaceId' when calling deleteContentmanagementWorkspace";
      }


      return this.apiClient.callApi(
        '/api/v2/contentmanagement/workspaces/{workspaceId}', 
        'DELETE', 
        { 'workspaceId': workspaceId }, 
        { 'moveChildrenToWorkspaceId': opts['moveChildrenToWorkspaceId'] }, 
        {  }, 
        {  }, 
        null, 
        ['PureCloud Auth'], 
        ['application/json'], 
        ['application/json']
      );
    };


    /**
     * Delete a member from a workspace
     * 
     * @param {String} workspaceId Workspace ID
     * @param {String} memberId Member ID
     */
    this.deleteContentmanagementWorkspaceMember = function(workspaceId, memberId) { 

      // verify the required parameter 'workspaceId' is set
      if (workspaceId === undefined || workspaceId === null) {
        throw "Missing the required parameter 'workspaceId' when calling deleteContentmanagementWorkspaceMember";
      }

      // verify the required parameter 'memberId' is set
      if (memberId === undefined || memberId === null) {
        throw "Missing the required parameter 'memberId' when calling deleteContentmanagementWorkspaceMember";
      }


      return this.apiClient.callApi(
        '/api/v2/contentmanagement/workspaces/{workspaceId}/members/{memberId}', 
        'DELETE', 
        { 'workspaceId': workspaceId,'memberId': memberId }, 
        {  }, 
        {  }, 
        {  }, 
        null, 
        ['PureCloud Auth'], 
        ['application/json'], 
        ['application/json']
      );
    };


    /**
     * Delete workspace tag
     * Delete a tag from a workspace. Will remove this tag from all documents.
     * @param {String} workspaceId Workspace ID
     * @param {String} tagId Tag ID
     */
    this.deleteContentmanagementWorkspaceTagvalue = function(workspaceId, tagId) { 

      // verify the required parameter 'workspaceId' is set
      if (workspaceId === undefined || workspaceId === null) {
        throw "Missing the required parameter 'workspaceId' when calling deleteContentmanagementWorkspaceTagvalue";
      }

      // verify the required parameter 'tagId' is set
      if (tagId === undefined || tagId === null) {
        throw "Missing the required parameter 'tagId' when calling deleteContentmanagementWorkspaceTagvalue";
      }


      return this.apiClient.callApi(
        '/api/v2/contentmanagement/workspaces/{workspaceId}/tagvalues/{tagId}', 
        'DELETE', 
        { 'workspaceId': workspaceId,'tagId': tagId }, 
        {  }, 
        {  }, 
        {  }, 
        null, 
        ['PureCloud Auth'], 
        ['application/json'], 
        ['application/json']
      );
    };


    /**
     * Get a document.
     * 
     * @param {String} documentId Document ID
     * @param {Object} opts Optional parameters
     * @param {Array.<String>} opts.expand Which fields, if any, to expand.
     */
    this.getContentmanagementDocument = function(documentId, opts) { 
      opts = opts || {};

      // verify the required parameter 'documentId' is set
      if (documentId === undefined || documentId === null) {
        throw "Missing the required parameter 'documentId' when calling getContentmanagementDocument";
      }


      return this.apiClient.callApi(
        '/api/v2/contentmanagement/documents/{documentId}', 
        'GET', 
        { 'documentId': documentId }, 
        { 'expand': this.apiClient.buildCollectionParam(opts['expand'], 'multi') }, 
        {  }, 
        {  }, 
        null, 
        ['PureCloud Auth'], 
        ['application/json'], 
        ['application/json']
      );
    };


    /**
     * Get a list of audits for a document.
     * 
     * @param {String} documentId Document ID
     * @param {Object} opts Optional parameters
     * @param {Number} opts.pageSize Page size (default to 25)
     * @param {Number} opts.pageNumber Page number (default to 1)
     * @param {String} opts.transactionFilter Transaction filter
     * @param {String} opts.level level (default to USER)
     * @param {String} opts.sortBy Sort by
     * @param {String} opts.sortOrder Sort order (default to ascending)
     */
    this.getContentmanagementDocumentAudits = function(documentId, opts) { 
      opts = opts || {};

      // verify the required parameter 'documentId' is set
      if (documentId === undefined || documentId === null) {
        throw "Missing the required parameter 'documentId' when calling getContentmanagementDocumentAudits";
      }


      return this.apiClient.callApi(
        '/api/v2/contentmanagement/documents/{documentId}/audits', 
        'GET', 
        { 'documentId': documentId }, 
        { 'pageSize': opts['pageSize'],'pageNumber': opts['pageNumber'],'transactionFilter': opts['transactionFilter'],'level': opts['level'],'sortBy': opts['sortBy'],'sortOrder': opts['sortOrder'] }, 
        {  }, 
        {  }, 
        null, 
        ['PureCloud Auth'], 
        ['application/json'], 
        ['application/json']
      );
    };


    /**
     * Download a document.
     * 
     * @param {String} documentId Document ID
     * @param {Object} opts Optional parameters
     * @param {module:purecloud-platform-client-v2/model/String} opts.disposition Request how the content will be downloaded: a file attachment or inline. Default is attachment.
     * @param {String} opts.contentType The requested format for the specified document. If supported, the document will be returned in that format. Example contentType=audio/wav
     */
    this.getContentmanagementDocumentContent = function(documentId, opts) { 
      opts = opts || {};

      // verify the required parameter 'documentId' is set
      if (documentId === undefined || documentId === null) {
        throw "Missing the required parameter 'documentId' when calling getContentmanagementDocumentContent";
      }


      return this.apiClient.callApi(
        '/api/v2/contentmanagement/documents/{documentId}/content', 
        'GET', 
        { 'documentId': documentId }, 
        { 'disposition': opts['disposition'],'contentType': opts['contentType'] }, 
        {  }, 
        {  }, 
        null, 
        ['PureCloud Auth'], 
        ['application/json'], 
        ['application/json']
      );
    };


    /**
     * Get a list of documents.
     * 
     * @param {String} workspaceId Workspace ID
     * @param {Object} opts Optional parameters
     * @param {String} opts.name Name
     * @param {Array.<String>} opts.expand Which fields, if any, to expand.
     * @param {Number} opts.pageSize Page size (default to 25)
     * @param {Number} opts.pageNumber Page number (default to 1)
     * @param {String} opts.sortBy name or dateCreated
     * @param {String} opts.sortOrder ascending or descending (default to ascending)
     */
    this.getContentmanagementDocuments = function(workspaceId, opts) { 
      opts = opts || {};

      // verify the required parameter 'workspaceId' is set
      if (workspaceId === undefined || workspaceId === null) {
        throw "Missing the required parameter 'workspaceId' when calling getContentmanagementDocuments";
      }


      return this.apiClient.callApi(
        '/api/v2/contentmanagement/documents', 
        'GET', 
        {  }, 
        { 'workspaceId': workspaceId,'name': opts['name'],'expand': this.apiClient.buildCollectionParam(opts['expand'], 'multi'),'pageSize': opts['pageSize'],'pageNumber': opts['pageNumber'],'sortBy': opts['sortBy'],'sortOrder': opts['sortOrder'] }, 
        {  }, 
        {  }, 
        null, 
        ['PureCloud Auth'], 
        ['application/json'], 
        ['application/json']
      );
    };


    /**
     * Query content
     * 
     * @param {String} queryPhrase Phrase tokens are ANDed together over all searchable fields
     * @param {Object} opts Optional parameters
     * @param {Number} opts.pageSize Page size (default to 25)
     * @param {Number} opts.pageNumber Page number (default to 1)
     * @param {String} opts.sortBy name or dateCreated (default to name)
     * @param {String} opts.sortOrder ascending or descending (default to ascending)
     * @param {Array.<String>} opts.expand Which fields, if any, to expand.
     */
    this.getContentmanagementQuery = function(queryPhrase, opts) { 
      opts = opts || {};

      // verify the required parameter 'queryPhrase' is set
      if (queryPhrase === undefined || queryPhrase === null) {
        throw "Missing the required parameter 'queryPhrase' when calling getContentmanagementQuery";
      }


      return this.apiClient.callApi(
        '/api/v2/contentmanagement/query', 
        'GET', 
        {  }, 
        { 'pageSize': opts['pageSize'],'pageNumber': opts['pageNumber'],'sortBy': opts['sortBy'],'sortOrder': opts['sortOrder'],'queryPhrase': queryPhrase,'expand': this.apiClient.buildCollectionParam(opts['expand'], 'multi') }, 
        {  }, 
        {  }, 
        null, 
        ['PureCloud Auth'], 
        ['application/json'], 
        ['application/json']
      );
    };


    /**
     * Get a Security Profile
     * 
     * @param {String} securityProfileId Security Profile Id
     */
    this.getContentmanagementSecurityprofile = function(securityProfileId) { 

      // verify the required parameter 'securityProfileId' is set
      if (securityProfileId === undefined || securityProfileId === null) {
        throw "Missing the required parameter 'securityProfileId' when calling getContentmanagementSecurityprofile";
      }


      return this.apiClient.callApi(
        '/api/v2/contentmanagement/securityprofiles/{securityProfileId}', 
        'GET', 
        { 'securityProfileId': securityProfileId }, 
        {  }, 
        {  }, 
        {  }, 
        null, 
        ['PureCloud Auth'], 
        ['application/json'], 
        ['application/json']
      );
    };


    /**
     * Get a List of Security Profiles
     * 
     */
    this.getContentmanagementSecurityprofiles = function() { 


      return this.apiClient.callApi(
        '/api/v2/contentmanagement/securityprofiles', 
        'GET', 
        {  }, 
        {  }, 
        {  }, 
        {  }, 
        null, 
        ['PureCloud Auth'], 
        ['application/json'], 
        ['application/json']
      );
    };


    /**
     * Retrieve details about an existing share.
     * 
     * @param {String} shareId Share ID
     * @param {Object} opts Optional parameters
     * @param {Array.<String>} opts.expand Which fields, if any, to expand.
     */
    this.getContentmanagementShare = function(shareId, opts) { 
      opts = opts || {};

      // verify the required parameter 'shareId' is set
      if (shareId === undefined || shareId === null) {
        throw "Missing the required parameter 'shareId' when calling getContentmanagementShare";
      }


      return this.apiClient.callApi(
        '/api/v2/contentmanagement/shares/{shareId}', 
        'GET', 
        { 'shareId': shareId }, 
        { 'expand': this.apiClient.buildCollectionParam(opts['expand'], 'multi') }, 
        {  }, 
        {  }, 
        null, 
        ['PureCloud Auth'], 
        ['application/json'], 
        ['application/json']
      );
    };


    /**
     * Get shared documents. Securely download a shared document.
     * This method requires the download sharing URI obtained in the get document response (downloadSharingUri). Documents may be shared between users in the same workspace. Documents may also be shared between any user by creating a content management share.
     * @param {String} sharedId Shared ID
     * @param {Object} opts Optional parameters
     * @param {Boolean} opts.redirect Turn on or off redirect (default to true)
     * @param {module:purecloud-platform-client-v2/model/String} opts.disposition Request how the share content will be downloaded: attached as a file or inline. Default is attachment. (default to attachment)
     * @param {String} opts.contentType The requested format for the specified document. If supported, the document will be returned in that format. Example contentType=audio/wav
     * @param {module:purecloud-platform-client-v2/model/String} opts.expand Expand some document fields
     */
    this.getContentmanagementSharedSharedId = function(sharedId, opts) { 
      opts = opts || {};

      // verify the required parameter 'sharedId' is set
      if (sharedId === undefined || sharedId === null) {
        throw "Missing the required parameter 'sharedId' when calling getContentmanagementSharedSharedId";
      }


      return this.apiClient.callApi(
        '/api/v2/contentmanagement/shared/{sharedId}', 
        'GET', 
        { 'sharedId': sharedId }, 
        { 'redirect': opts['redirect'],'disposition': opts['disposition'],'contentType': opts['contentType'],'expand': opts['expand'] }, 
        {  }, 
        {  }, 
        null, 
        ['PureCloud Auth'], 
        ['application/json'], 
        ['application/json']
      );
    };


    /**
     * Gets a list of shares.  You must specify at least one filter (e.g. entityId).
     * Failing to specify a filter will return 400.
     * @param {Object} opts Optional parameters
     * @param {String} opts.entityId Filters the shares returned to only the entity specified by the value of this parameter.
     * @param {Array.<String>} opts.expand Which fields, if any, to expand.
     * @param {Number} opts.pageSize Page size (default to 25)
     * @param {Number} opts.pageNumber Page number (default to 1)
     */
    this.getContentmanagementShares = function(opts) { 
      opts = opts || {};


      return this.apiClient.callApi(
        '/api/v2/contentmanagement/shares', 
        'GET', 
        {  }, 
        { 'entityId': opts['entityId'],'expand': this.apiClient.buildCollectionParam(opts['expand'], 'multi'),'pageSize': opts['pageSize'],'pageNumber': opts['pageNumber'] }, 
        {  }, 
        {  }, 
        null, 
        ['PureCloud Auth'], 
        ['application/json'], 
        ['application/json']
      );
    };


    /**
     * Get a list of statuses for pending operations
     * 
     * @param {Object} opts Optional parameters
     * @param {Number} opts.pageSize Page size (default to 25)
     * @param {Number} opts.pageNumber Page number (default to 1)
     */
    this.getContentmanagementStatus = function(opts) { 
      opts = opts || {};


      return this.apiClient.callApi(
        '/api/v2/contentmanagement/status', 
        'GET', 
        {  }, 
        { 'pageSize': opts['pageSize'],'pageNumber': opts['pageNumber'] }, 
        {  }, 
        {  }, 
        null, 
        ['PureCloud Auth'], 
        ['application/json'], 
        ['application/json']
      );
    };


    /**
     * Get a status.
     * 
     * @param {String} statusId Status ID
     */
    this.getContentmanagementStatusStatusId = function(statusId) { 

      // verify the required parameter 'statusId' is set
      if (statusId === undefined || statusId === null) {
        throw "Missing the required parameter 'statusId' when calling getContentmanagementStatusStatusId";
      }


      return this.apiClient.callApi(
        '/api/v2/contentmanagement/status/{statusId}', 
        'GET', 
        { 'statusId': statusId }, 
        {  }, 
        {  }, 
        {  }, 
        null, 
        ['PureCloud Auth'], 
        ['application/json'], 
        ['application/json']
      );
    };


    /**
     * Get usage details.
     * 
     */
    this.getContentmanagementUsage = function() { 


      return this.apiClient.callApi(
        '/api/v2/contentmanagement/usage', 
        'GET', 
        {  }, 
        {  }, 
        {  }, 
        {  }, 
        null, 
        ['PureCloud Auth'], 
        ['application/json'], 
        ['application/json']
      );
    };


    /**
     * Get a workspace.
     * 
     * @param {String} workspaceId Workspace ID
     * @param {Object} opts Optional parameters
     * @param {Array.<String>} opts.expand Which fields, if any, to expand.
     */
    this.getContentmanagementWorkspace = function(workspaceId, opts) { 
      opts = opts || {};

      // verify the required parameter 'workspaceId' is set
      if (workspaceId === undefined || workspaceId === null) {
        throw "Missing the required parameter 'workspaceId' when calling getContentmanagementWorkspace";
      }


      return this.apiClient.callApi(
        '/api/v2/contentmanagement/workspaces/{workspaceId}', 
        'GET', 
        { 'workspaceId': workspaceId }, 
        { 'expand': this.apiClient.buildCollectionParam(opts['expand'], 'multi') }, 
        {  }, 
        {  }, 
        null, 
        ['PureCloud Auth'], 
        ['application/json'], 
        ['application/json']
      );
    };


    /**
     * Get a list of documents.
     * 
     * @param {String} workspaceId Workspace ID
     * @param {Object} opts Optional parameters
     * @param {Array.<String>} opts.expand Which fields, if any, to expand.
     * @param {Number} opts.pageSize Page size (default to 25)
     * @param {Number} opts.pageNumber Page number (default to 1)
     * @param {String} opts.sortBy name or dateCreated
     * @param {String} opts.sortOrder ascending or descending (default to ascending)
     */
    this.getContentmanagementWorkspaceDocuments = function(workspaceId, opts) { 
      opts = opts || {};

      // verify the required parameter 'workspaceId' is set
      if (workspaceId === undefined || workspaceId === null) {
        throw "Missing the required parameter 'workspaceId' when calling getContentmanagementWorkspaceDocuments";
      }


      return this.apiClient.callApi(
        '/api/v2/contentmanagement/workspaces/{workspaceId}/documents', 
        'GET', 
        { 'workspaceId': workspaceId }, 
        { 'expand': this.apiClient.buildCollectionParam(opts['expand'], 'multi'),'pageSize': opts['pageSize'],'pageNumber': opts['pageNumber'],'sortBy': opts['sortBy'],'sortOrder': opts['sortOrder'] }, 
        {  }, 
        {  }, 
        null, 
        ['PureCloud Auth'], 
        ['application/json'], 
        ['application/json']
      );
    };


    /**
     * Get a workspace member
     * 
     * @param {String} workspaceId Workspace ID
     * @param {String} memberId Member ID
     * @param {Object} opts Optional parameters
     * @param {Array.<String>} opts.expand Which fields, if any, to expand.
     */
    this.getContentmanagementWorkspaceMember = function(workspaceId, memberId, opts) { 
      opts = opts || {};

      // verify the required parameter 'workspaceId' is set
      if (workspaceId === undefined || workspaceId === null) {
        throw "Missing the required parameter 'workspaceId' when calling getContentmanagementWorkspaceMember";
      }

      // verify the required parameter 'memberId' is set
      if (memberId === undefined || memberId === null) {
        throw "Missing the required parameter 'memberId' when calling getContentmanagementWorkspaceMember";
      }


      return this.apiClient.callApi(
        '/api/v2/contentmanagement/workspaces/{workspaceId}/members/{memberId}', 
        'GET', 
        { 'workspaceId': workspaceId,'memberId': memberId }, 
        { 'expand': this.apiClient.buildCollectionParam(opts['expand'], 'multi') }, 
        {  }, 
        {  }, 
        null, 
        ['PureCloud Auth'], 
        ['application/json'], 
        ['application/json']
      );
    };


    /**
     * Get a list workspace members
     * 
     * @param {String} workspaceId Workspace ID
     * @param {Object} opts Optional parameters
     * @param {Number} opts.pageSize Page size (default to 25)
     * @param {Number} opts.pageNumber Page number (default to 1)
     * @param {Array.<String>} opts.expand Which fields, if any, to expand.
     */
    this.getContentmanagementWorkspaceMembers = function(workspaceId, opts) { 
      opts = opts || {};

      // verify the required parameter 'workspaceId' is set
      if (workspaceId === undefined || workspaceId === null) {
        throw "Missing the required parameter 'workspaceId' when calling getContentmanagementWorkspaceMembers";
      }


      return this.apiClient.callApi(
        '/api/v2/contentmanagement/workspaces/{workspaceId}/members', 
        'GET', 
        { 'workspaceId': workspaceId }, 
        { 'pageSize': opts['pageSize'],'pageNumber': opts['pageNumber'],'expand': this.apiClient.buildCollectionParam(opts['expand'], 'multi') }, 
        {  }, 
        {  }, 
        null, 
        ['PureCloud Auth'], 
        ['application/json'], 
        ['application/json']
      );
    };


    /**
     * Get a workspace tag
     * 
     * @param {String} workspaceId Workspace ID
     * @param {String} tagId Tag ID
     * @param {Object} opts Optional parameters
     * @param {Array.<String>} opts.expand Which fields, if any, to expand.
     */
    this.getContentmanagementWorkspaceTagvalue = function(workspaceId, tagId, opts) { 
      opts = opts || {};

      // verify the required parameter 'workspaceId' is set
      if (workspaceId === undefined || workspaceId === null) {
        throw "Missing the required parameter 'workspaceId' when calling getContentmanagementWorkspaceTagvalue";
      }

      // verify the required parameter 'tagId' is set
      if (tagId === undefined || tagId === null) {
        throw "Missing the required parameter 'tagId' when calling getContentmanagementWorkspaceTagvalue";
      }


      return this.apiClient.callApi(
        '/api/v2/contentmanagement/workspaces/{workspaceId}/tagvalues/{tagId}', 
        'GET', 
        { 'workspaceId': workspaceId,'tagId': tagId }, 
        { 'expand': this.apiClient.buildCollectionParam(opts['expand'], 'multi') }, 
        {  }, 
        {  }, 
        null, 
        ['PureCloud Auth'], 
        ['application/json'], 
        ['application/json']
      );
    };


    /**
     * Get a list of workspace tags
     * 
     * @param {String} workspaceId Workspace ID
     * @param {Object} opts Optional parameters
     * @param {String} opts.value filter the list of tags returned
     * @param {Number} opts.pageSize Page size (default to 25)
     * @param {Number} opts.pageNumber Page number (default to 1)
     * @param {Array.<String>} opts.expand Which fields, if any, to expand.
     */
    this.getContentmanagementWorkspaceTagvalues = function(workspaceId, opts) { 
      opts = opts || {};

      // verify the required parameter 'workspaceId' is set
      if (workspaceId === undefined || workspaceId === null) {
        throw "Missing the required parameter 'workspaceId' when calling getContentmanagementWorkspaceTagvalues";
      }


      return this.apiClient.callApi(
        '/api/v2/contentmanagement/workspaces/{workspaceId}/tagvalues', 
        'GET', 
        { 'workspaceId': workspaceId }, 
        { 'value': opts['value'],'pageSize': opts['pageSize'],'pageNumber': opts['pageNumber'],'expand': this.apiClient.buildCollectionParam(opts['expand'], 'multi') }, 
        {  }, 
        {  }, 
        null, 
        ['PureCloud Auth'], 
        ['application/json'], 
        ['application/json']
      );
    };


    /**
     * Get a list of workspaces.
     * Specifying &#39;content&#39; access will return all workspaces the user has document access to, while &#39;admin&#39; access will return all group workspaces the user has administrative rights to.
     * @param {Object} opts Optional parameters
     * @param {Number} opts.pageSize Page size (default to 25)
     * @param {Number} opts.pageNumber Page number (default to 1)
     * @param {Array.<String>} opts.access Requested access level.
     * @param {Array.<String>} opts.expand Which fields, if any, to expand.
     */
    this.getContentmanagementWorkspaces = function(opts) { 
      opts = opts || {};


      return this.apiClient.callApi(
        '/api/v2/contentmanagement/workspaces', 
        'GET', 
        {  }, 
        { 'pageSize': opts['pageSize'],'pageNumber': opts['pageNumber'],'access': this.apiClient.buildCollectionParam(opts['access'], 'multi'),'expand': this.apiClient.buildCollectionParam(opts['expand'], 'multi') }, 
        {  }, 
        {  }, 
        null, 
        ['PureCloud Auth'], 
        ['application/json'], 
        ['application/json']
      );
    };


    /**
     * Query audits
     * 
     * @param {module:purecloud-platform-client-v2/model/ContentQueryRequest} body Allows for a filtered query returning facet information
     */
    this.postContentmanagementAuditquery = function(body) { 

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw "Missing the required parameter 'body' when calling postContentmanagementAuditquery";
      }


      return this.apiClient.callApi(
        '/api/v2/contentmanagement/auditquery', 
        'POST', 
        {  }, 
        {  }, 
        {  }, 
        {  }, 
        body, 
        ['PureCloud Auth'], 
        ['application/json'], 
        ['application/json']
      );
    };


    /**
     * Update a document.
     * 
     * @param {String} documentId Document ID
     * @param {module:purecloud-platform-client-v2/model/DocumentUpdate} body Document
     * @param {Object} opts Optional parameters
     * @param {module:purecloud-platform-client-v2/model/String} opts.expand Expand some document fields
     * @param {Boolean} opts.override Override any lock on the document
     */
    this.postContentmanagementDocument = function(documentId, body, opts) { 
      opts = opts || {};

      // verify the required parameter 'documentId' is set
      if (documentId === undefined || documentId === null) {
        throw "Missing the required parameter 'documentId' when calling postContentmanagementDocument";
      }

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw "Missing the required parameter 'body' when calling postContentmanagementDocument";
      }


      return this.apiClient.callApi(
        '/api/v2/contentmanagement/documents/{documentId}', 
        'POST', 
        { 'documentId': documentId }, 
        { 'expand': opts['expand'],'override': opts['override'] }, 
        {  }, 
        {  }, 
        body, 
        ['PureCloud Auth'], 
        ['application/json'], 
        ['application/json']
      );
    };


    /**
     * Replace the contents of a document.
     * 
     * @param {String} documentId Document ID
     * @param {module:purecloud-platform-client-v2/model/ReplaceRequest} body Replace Request
     * @param {Object} opts Optional parameters
     * @param {Boolean} opts.override Override any lock on the document
     */
    this.postContentmanagementDocumentContent = function(documentId, body, opts) { 
      opts = opts || {};

      // verify the required parameter 'documentId' is set
      if (documentId === undefined || documentId === null) {
        throw "Missing the required parameter 'documentId' when calling postContentmanagementDocumentContent";
      }

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw "Missing the required parameter 'body' when calling postContentmanagementDocumentContent";
      }


      return this.apiClient.callApi(
        '/api/v2/contentmanagement/documents/{documentId}/content', 
        'POST', 
        { 'documentId': documentId }, 
        { 'override': opts['override'] }, 
        {  }, 
        {  }, 
        body, 
        ['PureCloud Auth'], 
        ['application/json'], 
        ['application/json']
      );
    };


    /**
     * Add a document.
     * 
     * @param {module:purecloud-platform-client-v2/model/DocumentUpload} body Document
     * @param {Object} opts Optional parameters
     * @param {String} opts.copySource Copy a document within a workspace or to a new workspace. Provide a document ID as the copy source.
     * @param {String} opts.moveSource Move a document to a new workspace. Provide a document ID as the move source.
     * @param {Boolean} opts.override Override any lock on the source document
     */
    this.postContentmanagementDocuments = function(body, opts) { 
      opts = opts || {};

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw "Missing the required parameter 'body' when calling postContentmanagementDocuments";
      }


      return this.apiClient.callApi(
        '/api/v2/contentmanagement/documents', 
        'POST', 
        {  }, 
        { 'copySource': opts['copySource'],'moveSource': opts['moveSource'],'override': opts['override'] }, 
        {  }, 
        {  }, 
        body, 
        ['PureCloud Auth'], 
        ['application/json'], 
        ['application/json']
      );
    };


    /**
     * Query content
     * 
     * @param {module:purecloud-platform-client-v2/model/QueryRequest} body Allows for a filtered query returning facet information
     * @param {Object} opts Optional parameters
     * @param {module:purecloud-platform-client-v2/model/String} opts.expand Expand some document fields
     */
    this.postContentmanagementQuery = function(body, opts) { 
      opts = opts || {};

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw "Missing the required parameter 'body' when calling postContentmanagementQuery";
      }


      return this.apiClient.callApi(
        '/api/v2/contentmanagement/query', 
        'POST', 
        {  }, 
        { 'expand': opts['expand'] }, 
        {  }, 
        {  }, 
        body, 
        ['PureCloud Auth'], 
        ['application/json'], 
        ['application/json']
      );
    };


    /**
     * Creates a new share or updates an existing share if the entity has already been shared
     * 
     * @param {module:purecloud-platform-client-v2/model/CreateShareRequest} body CreateShareRequest - entity id and type and a single member or list of members are required
     */
    this.postContentmanagementShares = function(body) { 

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw "Missing the required parameter 'body' when calling postContentmanagementShares";
      }


      return this.apiClient.callApi(
        '/api/v2/contentmanagement/shares', 
        'POST', 
        {  }, 
        {  }, 
        {  }, 
        {  }, 
        body, 
        ['PureCloud Auth'], 
        ['application/json'], 
        ['application/json']
      );
    };


    /**
     * Create a workspace tag
     * 
     * @param {String} workspaceId Workspace ID
     * @param {module:purecloud-platform-client-v2/model/TagValue} body tag
     */
    this.postContentmanagementWorkspaceTagvalues = function(workspaceId, body) { 

      // verify the required parameter 'workspaceId' is set
      if (workspaceId === undefined || workspaceId === null) {
        throw "Missing the required parameter 'workspaceId' when calling postContentmanagementWorkspaceTagvalues";
      }

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw "Missing the required parameter 'body' when calling postContentmanagementWorkspaceTagvalues";
      }


      return this.apiClient.callApi(
        '/api/v2/contentmanagement/workspaces/{workspaceId}/tagvalues', 
        'POST', 
        { 'workspaceId': workspaceId }, 
        {  }, 
        {  }, 
        {  }, 
        body, 
        ['PureCloud Auth'], 
        ['application/json'], 
        ['application/json']
      );
    };


    /**
     * Perform a prefix query on tags in the workspace
     * 
     * @param {String} workspaceId Workspace ID
     * @param {module:purecloud-platform-client-v2/model/TagQueryRequest} body query
     * @param {Object} opts Optional parameters
     * @param {Array.<String>} opts.expand Which fields, if any, to expand.
     */
    this.postContentmanagementWorkspaceTagvaluesQuery = function(workspaceId, body, opts) { 
      opts = opts || {};

      // verify the required parameter 'workspaceId' is set
      if (workspaceId === undefined || workspaceId === null) {
        throw "Missing the required parameter 'workspaceId' when calling postContentmanagementWorkspaceTagvaluesQuery";
      }

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw "Missing the required parameter 'body' when calling postContentmanagementWorkspaceTagvaluesQuery";
      }


      return this.apiClient.callApi(
        '/api/v2/contentmanagement/workspaces/{workspaceId}/tagvalues/query', 
        'POST', 
        { 'workspaceId': workspaceId }, 
        { 'expand': this.apiClient.buildCollectionParam(opts['expand'], 'multi') }, 
        {  }, 
        {  }, 
        body, 
        ['PureCloud Auth'], 
        ['application/json'], 
        ['application/json']
      );
    };


    /**
     * Create a group workspace
     * 
     * @param {module:purecloud-platform-client-v2/model/WorkspaceCreate} body Workspace
     */
    this.postContentmanagementWorkspaces = function(body) { 

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw "Missing the required parameter 'body' when calling postContentmanagementWorkspaces";
      }


      return this.apiClient.callApi(
        '/api/v2/contentmanagement/workspaces', 
        'POST', 
        {  }, 
        {  }, 
        {  }, 
        {  }, 
        body, 
        ['PureCloud Auth'], 
        ['application/json'], 
        ['application/json']
      );
    };


    /**
     * Update a workspace
     * 
     * @param {String} workspaceId Workspace ID
     * @param {module:purecloud-platform-client-v2/model/Workspace} body Workspace
     */
    this.putContentmanagementWorkspace = function(workspaceId, body) { 

      // verify the required parameter 'workspaceId' is set
      if (workspaceId === undefined || workspaceId === null) {
        throw "Missing the required parameter 'workspaceId' when calling putContentmanagementWorkspace";
      }

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw "Missing the required parameter 'body' when calling putContentmanagementWorkspace";
      }


      return this.apiClient.callApi(
        '/api/v2/contentmanagement/workspaces/{workspaceId}', 
        'PUT', 
        { 'workspaceId': workspaceId }, 
        {  }, 
        {  }, 
        {  }, 
        body, 
        ['PureCloud Auth'], 
        ['application/json'], 
        ['application/json']
      );
    };


    /**
     * Add a member to a workspace
     * 
     * @param {String} workspaceId Workspace ID
     * @param {String} memberId Member ID
     * @param {module:purecloud-platform-client-v2/model/WorkspaceMember} body Workspace Member
     */
    this.putContentmanagementWorkspaceMember = function(workspaceId, memberId, body) { 

      // verify the required parameter 'workspaceId' is set
      if (workspaceId === undefined || workspaceId === null) {
        throw "Missing the required parameter 'workspaceId' when calling putContentmanagementWorkspaceMember";
      }

      // verify the required parameter 'memberId' is set
      if (memberId === undefined || memberId === null) {
        throw "Missing the required parameter 'memberId' when calling putContentmanagementWorkspaceMember";
      }

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw "Missing the required parameter 'body' when calling putContentmanagementWorkspaceMember";
      }


      return this.apiClient.callApi(
        '/api/v2/contentmanagement/workspaces/{workspaceId}/members/{memberId}', 
        'PUT', 
        { 'workspaceId': workspaceId,'memberId': memberId }, 
        {  }, 
        {  }, 
        {  }, 
        body, 
        ['PureCloud Auth'], 
        ['application/json'], 
        ['application/json']
      );
    };


    /**
     * Update a workspace tag. Will update all documents with the new tag value.
     * 
     * @param {String} workspaceId Workspace ID
     * @param {String} tagId Tag ID
     * @param {module:purecloud-platform-client-v2/model/TagValue} body Workspace
     */
    this.putContentmanagementWorkspaceTagvalue = function(workspaceId, tagId, body) { 

      // verify the required parameter 'workspaceId' is set
      if (workspaceId === undefined || workspaceId === null) {
        throw "Missing the required parameter 'workspaceId' when calling putContentmanagementWorkspaceTagvalue";
      }

      // verify the required parameter 'tagId' is set
      if (tagId === undefined || tagId === null) {
        throw "Missing the required parameter 'tagId' when calling putContentmanagementWorkspaceTagvalue";
      }

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw "Missing the required parameter 'body' when calling putContentmanagementWorkspaceTagvalue";
      }


      return this.apiClient.callApi(
        '/api/v2/contentmanagement/workspaces/{workspaceId}/tagvalues/{tagId}', 
        'PUT', 
        { 'workspaceId': workspaceId,'tagId': tagId }, 
        {  }, 
        {  }, 
        {  }, 
        body, 
        ['PureCloud Auth'], 
        ['application/json'], 
        ['application/json']
      );
    };
  };

  return exports;
}));

},{"../ApiClient":8}],15:[function(require,module,exports){
(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['purecloud-platform-client-v2/ApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'));
  } else {
    // Browser globals (root is window)
    if (!root.platformClient) {
      root.platformClient = {};
    }
    root.platformClient.ConversationsApi = factory(root.platformClient.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * Conversations service.
   * @module purecloud-platform-client-v2/api/ConversationsApi
   * @version 6.0.1
   */

  /**
   * Constructs a new ConversationsApi. 
   * @alias module:purecloud-platform-client-v2/api/ConversationsApi
   * @class
   * @param {module:purecloud-platform-client-v2/ApiClient} apiClient Optional API client implementation to use,
   * default to {@link module:purecloud-platform-client-v2/ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;



    /**
     * Delete a code used to add a communication to this participant
     * 
     * @param {String} conversationId conversation ID
     * @param {String} participantId participant ID
     * @param {String} addCommunicationCode addCommunicationCode
     */
    this.deleteConversationParticipantCode = function(conversationId, participantId, addCommunicationCode) { 

      // verify the required parameter 'conversationId' is set
      if (conversationId === undefined || conversationId === null) {
        throw "Missing the required parameter 'conversationId' when calling deleteConversationParticipantCode";
      }

      // verify the required parameter 'participantId' is set
      if (participantId === undefined || participantId === null) {
        throw "Missing the required parameter 'participantId' when calling deleteConversationParticipantCode";
      }

      // verify the required parameter 'addCommunicationCode' is set
      if (addCommunicationCode === undefined || addCommunicationCode === null) {
        throw "Missing the required parameter 'addCommunicationCode' when calling deleteConversationParticipantCode";
      }


      return this.apiClient.callApi(
        '/api/v2/conversations/{conversationId}/participants/{participantId}/codes/{addCommunicationCode}', 
        'DELETE', 
        { 'conversationId': conversationId,'participantId': participantId,'addCommunicationCode': addCommunicationCode }, 
        {  }, 
        {  }, 
        {  }, 
        null, 
        ['PureCloud Auth'], 
        ['application/json'], 
        ['application/json']
      );
    };


    /**
     * Cancel the transfer
     * 
     * @param {String} conversationId conversationId
     * @param {String} participantId participantId
     */
    this.deleteConversationsCallParticipantConsult = function(conversationId, participantId) { 

      // verify the required parameter 'conversationId' is set
      if (conversationId === undefined || conversationId === null) {
        throw "Missing the required parameter 'conversationId' when calling deleteConversationsCallParticipantConsult";
      }

      // verify the required parameter 'participantId' is set
      if (participantId === undefined || participantId === null) {
        throw "Missing the required parameter 'participantId' when calling deleteConversationsCallParticipantConsult";
      }


      return this.apiClient.callApi(
        '/api/v2/conversations/calls/{conversationId}/participants/{participantId}/consult', 
        'DELETE', 
        { 'conversationId': conversationId,'participantId': participantId }, 
        {  }, 
        {  }, 
        {  }, 
        null, 
        ['PureCloud Auth'], 
        ['application/json'], 
        ['application/json']
      );
    };


    /**
     * Delete attachment from draft
     * 
     * @param {String} conversationId conversationId
     * @param {String} attachmentId attachmentId
     */
    this.deleteConversationsEmailMessagesDraftAttachment = function(conversationId, attachmentId) { 

      // verify the required parameter 'conversationId' is set
      if (conversationId === undefined || conversationId === null) {
        throw "Missing the required parameter 'conversationId' when calling deleteConversationsEmailMessagesDraftAttachment";
      }

      // verify the required parameter 'attachmentId' is set
      if (attachmentId === undefined || attachmentId === null) {
        throw "Missing the required parameter 'attachmentId' when calling deleteConversationsEmailMessagesDraftAttachment";
      }


      return this.apiClient.callApi(
        '/api/v2/conversations/emails/{conversationId}/messages/draft/attachments/{attachmentId}', 
        'DELETE', 
        { 'conversationId': conversationId,'attachmentId': attachmentId }, 
        {  }, 
        {  }, 
        {  }, 
        null, 
        ['PureCloud Auth'], 
        ['application/json'], 
        ['application/json']
      );
    };


    /**
     * Get a conversation by id
     * 
     * @param {String} conversationId conversationId
     */
    this.getAnalyticsConversationDetails = function(conversationId) { 

      // verify the required parameter 'conversationId' is set
      if (conversationId === undefined || conversationId === null) {
        throw "Missing the required parameter 'conversationId' when calling getAnalyticsConversationDetails";
      }


      return this.apiClient.callApi(
        '/api/v2/analytics/conversations/{conversationId}/details', 
        'GET', 
        { 'conversationId': conversationId }, 
        {  }, 
        {  }, 
        {  }, 
        null, 
        ['PureCloud Auth'], 
        ['application/json'], 
        ['application/json']
      );
    };


    /**
     * Get conversation
     * 
     * @param {String} conversationId conversation ID
     */
    this.getConversation = function(conversationId) { 

      // verify the required parameter 'conversationId' is set
      if (conversationId === undefined || conversationId === null) {
        throw "Missing the required parameter 'conversationId' when calling getConversation";
      }


      return this.apiClient.callApi(
        '/api/v2/conversations/{conversationId}', 
        'GET', 
        { 'conversationId': conversationId }, 
        {  }, 
        {  }, 
        {  }, 
        null, 
        ['PureCloud Auth'], 
        ['application/json'], 
        ['application/json']
      );
    };


    /**
     * Get the wrap-up for this conversation participant. 
     * 
     * @param {String} conversationId conversation ID
     * @param {String} participantId participant ID
     * @param {Object} opts Optional parameters
     * @param {Boolean} opts.provisional Indicates if the wrap-up code is provisional. (default to false)
     */
    this.getConversationParticipantWrapup = function(conversationId, participantId, opts) { 
      opts = opts || {};

      // verify the required parameter 'conversationId' is set
      if (conversationId === undefined || conversationId === null) {
        throw "Missing the required parameter 'conversationId' when calling getConversationParticipantWrapup";
      }

      // verify the required parameter 'participantId' is set
      if (participantId === undefined || participantId === null) {
        throw "Missing the required parameter 'participantId' when calling getConversationParticipantWrapup";
      }


      return this.apiClient.callApi(
        '/api/v2/conversations/{conversationId}/participants/{participantId}/wrapup', 
        'GET', 
        { 'conversationId': conversationId,'participantId': participantId }, 
        { 'provisional': opts['provisional'] }, 
        {  }, 
        {  }, 
        null, 
        ['PureCloud Auth'], 
        ['application/json'], 
        ['application/json']
      );
    };


    /**
     * Get list of wrapup codes for this conversation participant
     * 
     * @param {String} conversationId conversation ID
     * @param {String} participantId participant ID
     */
    this.getConversationParticipantWrapupcodes = function(conversationId, participantId) { 

      // verify the required parameter 'conversationId' is set
      if (conversationId === undefined || conversationId === null) {
        throw "Missing the required parameter 'conversationId' when calling getConversationParticipantWrapupcodes";
      }

      // verify the required parameter 'participantId' is set
      if (participantId === undefined || participantId === null) {
        throw "Missing the required parameter 'participantId' when calling getConversationParticipantWrapupcodes";
      }


      return this.apiClient.callApi(
        '/api/v2/conversations/{conversationId}/participants/{participantId}/wrapupcodes', 
        'GET', 
        { 'conversationId': conversationId,'participantId': participantId }, 
        {  }, 
        {  }, 
        {  }, 
        null, 
        ['PureCloud Auth'], 
        ['application/json'], 
        ['application/json']
      );
    };


    /**
     * Get conversations
     * 
     * @param {Object} opts Optional parameters
     * @param {String} opts.communicationType Call or Chat communication filtering
     */
    this.getConversations = function(opts) { 
      opts = opts || {};


      return this.apiClient.callApi(
        '/api/v2/conversations', 
        'GET', 
        {  }, 
        { 'communicationType': opts['communicationType'] }, 
        {  }, 
        {  }, 
        null, 
        ['PureCloud Auth'], 
        ['application/json'], 
        ['application/json']
      );
    };


    /**
     * Get call conversation
     * 
     * @param {String} conversationId conversationId
     */
    this.getConversationsCall = function(conversationId) { 

      // verify the required parameter 'conversationId' is set
      if (conversationId === undefined || conversationId === null) {
        throw "Missing the required parameter 'conversationId' when calling getConversationsCall";
      }


      return this.apiClient.callApi(
        '/api/v2/conversations/calls/{conversationId}', 
        'GET', 
        { 'conversationId': conversationId }, 
        {  }, 
        {  }, 
        {  }, 
        null, 
        ['PureCloud Auth'], 
        ['application/json'], 
        ['application/json']
      );
    };


    /**
     * Get the wrap-up for this conversation participant. 
     * 
     * @param {String} conversationId conversationId
     * @param {String} participantId participantId
     * @param {Object} opts Optional parameters
     * @param {Boolean} opts.provisional Indicates if the wrap-up code is provisional. (default to false)
     */
    this.getConversationsCallParticipantWrapup = function(conversationId, participantId, opts) { 
      opts = opts || {};

      // verify the required parameter 'conversationId' is set
      if (conversationId === undefined || conversationId === null) {
        throw "Missing the required parameter 'conversationId' when calling getConversationsCallParticipantWrapup";
      }

      // verify the required parameter 'participantId' is set
      if (participantId === undefined || participantId === null) {
        throw "Missing the required parameter 'participantId' when calling getConversationsCallParticipantWrapup";
      }


      return this.apiClient.callApi(
        '/api/v2/conversations/calls/{conversationId}/participants/{participantId}/wrapup', 
        'GET', 
        { 'conversationId': conversationId,'participantId': participantId }, 
        { 'provisional': opts['provisional'] }, 
        {  }, 
        {  }, 
        null, 
        ['PureCloud Auth'], 
        ['application/json'], 
        ['application/json']
      );
    };


    /**
     * Get list of wrapup codes for this conversation participant
     * 
     * @param {String} conversationId conversationId
     * @param {String} participantId participantId
     */
    this.getConversationsCallParticipantWrapupcodes = function(conversationId, participantId) { 

      // verify the required parameter 'conversationId' is set
      if (conversationId === undefined || conversationId === null) {
        throw "Missing the required parameter 'conversationId' when calling getConversationsCallParticipantWrapupcodes";
      }

      // verify the required parameter 'participantId' is set
      if (participantId === undefined || participantId === null) {
        throw "Missing the required parameter 'participantId' when calling getConversationsCallParticipantWrapupcodes";
      }


      return this.apiClient.callApi(
        '/api/v2/conversations/calls/{conversationId}/participants/{participantId}/wrapupcodes', 
        'GET', 
        { 'conversationId': conversationId,'participantId': participantId }, 
        {  }, 
        {  }, 
        {  }, 
        null, 
        ['PureCloud Auth'], 
        ['application/json'], 
        ['application/json']
      );
    };


    /**
     * Get callback conversation
     * 
     * @param {String} conversationId conversationId
     */
    this.getConversationsCallback = function(conversationId) { 

      // verify the required parameter 'conversationId' is set
      if (conversationId === undefined || conversationId === null) {
        throw "Missing the required parameter 'conversationId' when calling getConversationsCallback";
      }


      return this.apiClient.callApi(
        '/api/v2/conversations/callbacks/{conversationId}', 
        'GET', 
        { 'conversationId': conversationId }, 
        {  }, 
        {  }, 
        {  }, 
        null, 
        ['PureCloud Auth'], 
        ['application/json'], 
        ['application/json']
      );
    };


    /**
     * Get the wrap-up for this conversation participant. 
     * 
     * @param {String} conversationId conversationId
     * @param {String} participantId participantId
     * @param {Object} opts Optional parameters
     * @param {Boolean} opts.provisional Indicates if the wrap-up code is provisional. (default to false)
     */
    this.getConversationsCallbackParticipantWrapup = function(conversationId, participantId, opts) { 
      opts = opts || {};

      // verify the required parameter 'conversationId' is set
      if (conversationId === undefined || conversationId === null) {
        throw "Missing the required parameter 'conversationId' when calling getConversationsCallbackParticipantWrapup";
      }

      // verify the required parameter 'participantId' is set
      if (participantId === undefined || participantId === null) {
        throw "Missing the required parameter 'participantId' when calling getConversationsCallbackParticipantWrapup";
      }


      return this.apiClient.callApi(
        '/api/v2/conversations/callbacks/{conversationId}/participants/{participantId}/wrapup', 
        'GET', 
        { 'conversationId': conversationId,'participantId': participantId }, 
        { 'provisional': opts['provisional'] }, 
        {  }, 
        {  }, 
        null, 
        ['PureCloud Auth'], 
        ['application/json'], 
        ['application/json']
      );
    };


    /**
     * Get list of wrapup codes for this conversation participant
     * 
     * @param {String} conversationId conversationId
     * @param {String} participantId participantId
     */
    this.getConversationsCallbackParticipantWrapupcodes = function(conversationId, participantId) { 

      // verify the required parameter 'conversationId' is set
      if (conversationId === undefined || conversationId === null) {
        throw "Missing the required parameter 'conversationId' when calling getConversationsCallbackParticipantWrapupcodes";
      }

      // verify the required parameter 'participantId' is set
      if (participantId === undefined || participantId === null) {
        throw "Missing the required parameter 'participantId' when calling getConversationsCallbackParticipantWrapupcodes";
      }


      return this.apiClient.callApi(
        '/api/v2/conversations/callbacks/{conversationId}/participants/{participantId}/wrapupcodes', 
        'GET', 
        { 'conversationId': conversationId,'participantId': participantId }, 
        {  }, 
        {  }, 
        {  }, 
        null, 
        ['PureCloud Auth'], 
        ['application/json'], 
        ['application/json']
      );
    };


    /**
     * Get callback conversations
     * 
     */
    this.getConversationsCallbacks = function() { 


      return this.apiClient.callApi(
        '/api/v2/conversations/callbacks', 
        'GET', 
        {  }, 
        {  }, 
        {  }, 
        {  }, 
        null, 
        ['PureCloud Auth'], 
        ['application/json'], 
        ['application/json']
      );
    };


    /**
     * Get recent conversations
     * 
     */
    this.getConversationsCalls = function() { 


      return this.apiClient.callApi(
        '/api/v2/conversations/calls', 
        'GET', 
        {  }, 
        {  }, 
        {  }, 
        {  }, 
        null, 
        ['PureCloud Auth'], 
        ['application/json'], 
        ['application/json']
      );
    };


    /**
     * Get call history
     * 
     * @param {Object} opts Optional parameters
     * @param {Number} opts.pageSize Page size (default to 25)
     * @param {Number} opts.pageNumber Page number (default to 1)
     * @param {String} opts.interval Interval string; format is ISO-8601. Separate start and end times with forward slash &#39;/&#39;
     */
    this.getConversationsCallsHistory = function(opts) { 
      opts = opts || {};


      return this.apiClient.callApi(
        '/api/v2/conversations/calls/history', 
        'GET', 
        {  }, 
        { 'pageSize': opts['pageSize'],'pageNumber': opts['pageNumber'],'interval': opts['interval'] }, 
        {  }, 
        {  }, 
        null, 
        ['PureCloud Auth'], 
        ['application/json'], 
        ['application/json']
      );
    };


    /**
     * Get the maximum number of participants that this user can have on a conference
     * 
     */
    this.getConversationsCallsMaximumconferenceparties = function() { 


      return this.apiClient.callApi(
        '/api/v2/conversations/calls/maximumconferenceparties', 
        'GET', 
        {  }, 
        {  }, 
        {  }, 
        {  }, 
        null, 
        ['PureCloud Auth'], 
        ['application/json'], 
        ['application/json']
      );
    };


    /**
     * Get chat conversation
     * 
     * @param {String} conversationId conversationId
     */
    this.getConversationsChat = function(conversationId) { 

      // verify the required parameter 'conversationId' is set
      if (conversationId === undefined || conversationId === null) {
        throw "Missing the required parameter 'conversationId' when calling getConversationsChat";
      }


      return this.apiClient.callApi(
        '/api/v2/conversations/chats/{conversationId}', 
        'GET', 
        { 'conversationId': conversationId }, 
        {  }, 
        {  }, 
        {  }, 
        null, 
        ['PureCloud Auth'], 
        ['application/json'], 
        ['application/json']
      );
    };


    /**
     * Get the wrap-up for this conversation participant. 
     * 
     * @param {String} conversationId conversationId
     * @param {String} participantId participantId
     * @param {Object} opts Optional parameters
     * @param {Boolean} opts.provisional Indicates if the wrap-up code is provisional. (default to false)
     */
    this.getConversationsChatParticipantWrapup = function(conversationId, participantId, opts) { 
      opts = opts || {};

      // verify the required parameter 'conversationId' is set
      if (conversationId === undefined || conversationId === null) {
        throw "Missing the required parameter 'conversationId' when calling getConversationsChatParticipantWrapup";
      }

      // verify the required parameter 'participantId' is set
      if (participantId === undefined || participantId === null) {
        throw "Missing the required parameter 'participantId' when calling getConversationsChatParticipantWrapup";
      }


      return this.apiClient.callApi(
        '/api/v2/conversations/chats/{conversationId}/participants/{participantId}/wrapup', 
        'GET', 
        { 'conversationId': conversationId,'participantId': participantId }, 
        { 'provisional': opts['provisional'] }, 
        {  }, 
        {  }, 
        null, 
        ['PureCloud Auth'], 
        ['application/json'], 
        ['application/json']
      );
    };


    /**
     * Get list of wrapup codes for this conversation participant
     * 
     * @param {String} conversationId conversationId
     * @param {String} participantId participantId
     */
    this.getConversationsChatParticipantWrapupcodes = function(conversationId, participantId) { 

      // verify the required parameter 'conversationId' is set
      if (conversationId === undefined || conversationId === null) {
        throw "Missing the required parameter 'conversationId' when calling getConversationsChatParticipantWrapupcodes";
      }

      // verify the required parameter 'participantId' is set
      if (participantId === undefined || participantId === null) {
        throw "Missing the required parameter 'participantId' when calling getConversationsChatParticipantWrapupcodes";
      }


      return this.apiClient.callApi(
        '/api/v2/conversations/chats/{conversationId}/participants/{participantId}/wrapupcodes', 
        'GET', 
        { 'conversationId': conversationId,'participantId': participantId }, 
        {  }, 
        {  }, 
        {  }, 
        null, 
        ['PureCloud Auth'], 
        ['application/json'], 
        ['application/json']
      );
    };


    /**
     * Get recent chat conversations
     * 
     */
    this.getConversationsChats = function() { 


      return this.apiClient.callApi(
        '/api/v2/conversations/chats', 
        'GET', 
        {  }, 
        {  }, 
        {  }, 
        {  }, 
        null, 
        ['PureCloud Auth'], 
        ['application/json'], 
        ['application/json']
      );
    };


    /**
     * Get cobrowse conversation
     * 
     * @param {String} conversationId conversationId
     */
    this.getConversationsCobrowsesession = function(conversationId) { 

      // verify the required parameter 'conversationId' is set
      if (conversationId === undefined || conversationId === null) {
        throw "Missing the required parameter 'conversationId' when calling getConversationsCobrowsesession";
      }


      return this.apiClient.callApi(
        '/api/v2/conversations/cobrowsesessions/{conversationId}', 
        'GET', 
        { 'conversationId': conversationId }, 
        {  }, 
        {  }, 
        {  }, 
        null, 
        ['PureCloud Auth'], 
        ['application/json'], 
        ['application/json']
      );
    };


    /**
     * Get the wrap-up for this conversation participant. 
     * 
     * @param {String} conversationId conversationId
     * @param {String} participantId participantId
     * @param {Object} opts Optional parameters
     * @param {Boolean} opts.provisional Indicates if the wrap-up code is provisional. (default to false)
     */
    this.getConversationsCobrowsesessionParticipantWrapup = function(conversationId, participantId, opts) { 
      opts = opts || {};

      // verify the required parameter 'conversationId' is set
      if (conversationId === undefined || conversationId === null) {
        throw "Missing the required parameter 'conversationId' when calling getConversationsCobrowsesessionParticipantWrapup";
      }

      // verify the required parameter 'participantId' is set
      if (participantId === undefined || participantId === null) {
        throw "Missing the required parameter 'participantId' when calling getConversationsCobrowsesessionParticipantWrapup";
      }


      return this.apiClient.callApi(
        '/api/v2/conversations/cobrowsesessions/{conversationId}/participants/{participantId}/wrapup', 
        'GET', 
        { 'conversationId': conversationId,'participantId': participantId }, 
        { 'provisional': opts['provisional'] }, 
        {  }, 
        {  }, 
        null, 
        ['PureCloud Auth'], 
        ['application/json'], 
        ['application/json']
      );
    };


    /**
     * Get list of wrapup codes for this conversation participant
     * 
     * @param {String} conversationId conversationId
     * @param {String} participantId participantId
     */
    this.getConversationsCobrowsesessionParticipantWrapupcodes = function(conversationId, participantId) { 

      // verify the required parameter 'conversationId' is set
      if (conversationId === undefined || conversationId === null) {
        throw "Missing the required parameter 'conversationId' when calling getConversationsCobrowsesessionParticipantWrapupcodes";
      }

      // verify the required parameter 'participantId' is set
      if (participantId === undefined || participantId === null) {
        throw "Missing the required parameter 'participantId' when calling getConversationsCobrowsesessionParticipantWrapupcodes";
      }


      return this.apiClient.callApi(
        '/api/v2/conversations/cobrowsesessions/{conversationId}/participants/{participantId}/wrapupcodes', 
        'GET', 
        { 'conversationId': conversationId,'participantId': participantId }, 
        {  }, 
        {  }, 
        {  }, 
        null, 
        ['PureCloud Auth'], 
        ['application/json'], 
        ['application/json']
      );
    };


    /**
     * Get recent cobrowse conversations
     * 
     */
    this.getConversationsCobrowsesessions = function() { 


      return this.apiClient.callApi(
        '/api/v2/conversations/cobrowsesessions', 
        'GET', 
        {  }, 
        {  }, 
        {  }, 
        {  }, 
        null, 
        ['PureCloud Auth'], 
        ['application/json'], 
        ['application/json']
      );
    };


    /**
     * Get email conversation
     * 
     * @param {String} conversationId conversationId
     */
    this.getConversationsEmail = function(conversationId) { 

      // verify the required parameter 'conversationId' is set
      if (conversationId === undefined || conversationId === null) {
        throw "Missing the required parameter 'conversationId' when calling getConversationsEmail";
      }


      return this.apiClient.callApi(
        '/api/v2/conversations/emails/{conversationId}', 
        'GET', 
        { 'conversationId': conversationId }, 
        {  }, 
        {  }, 
        {  }, 
        null, 
        ['PureCloud Auth'], 
        ['application/json'], 
        ['application/json']
      );
    };


    /**
     * Get conversation message
     * 
     * @param {String} conversationId conversationId
     * @param {String} messageId messageId
     */
    this.getConversationsEmailMessage = function(conversationId, messageId) { 

      // verify the required parameter 'conversationId' is set
      if (conversationId === undefined || conversationId === null) {
        throw "Missing the required parameter 'conversationId' when calling getConversationsEmailMessage";
      }

      // verify the required parameter 'messageId' is set
      if (messageId === undefined || messageId === null) {
        throw "Missing the required parameter 'messageId' when calling getConversationsEmailMessage";
      }


      return this.apiClient.callApi(
        '/api/v2/conversations/emails/{conversationId}/messages/{messageId}', 
        'GET', 
        { 'conversationId': conversationId,'messageId': messageId }, 
        {  }, 
        {  }, 
        {  }, 
        null, 
        ['PureCloud Auth'], 
        ['application/json'], 
        ['application/json']
      );
    };


    /**
     * Get conversation messages
     * 
     * @param {String} conversationId conversationId
     */
    this.getConversationsEmailMessages = function(conversationId) { 

      // verify the required parameter 'conversationId' is set
      if (conversationId === undefined || conversationId === null) {
        throw "Missing the required parameter 'conversationId' when calling getConversationsEmailMessages";
      }


      return this.apiClient.callApi(
        '/api/v2/conversations/emails/{conversationId}/messages', 
        'GET', 
        { 'conversationId': conversationId }, 
        {  }, 
        {  }, 
        {  }, 
        null, 
        ['PureCloud Auth'], 
        ['application/json'], 
        ['application/json']
      );
    };


    /**
     * Get conversation draft reply
     * 
     * @param {String} conversationId conversationId
     */
    this.getConversationsEmailMessagesDraft = function(conversationId) { 

      // verify the required parameter 'conversationId' is set
      if (conversationId === undefined || conversationId === null) {
        throw "Missing the required parameter 'conversationId' when calling getConversationsEmailMessagesDraft";
      }


      return this.apiClient.callApi(
        '/api/v2/conversations/emails/{conversationId}/messages/draft', 
        'GET', 
        { 'conversationId': conversationId }, 
        {  }, 
        {  }, 
        {  }, 
        null, 
        ['PureCloud Auth'], 
        ['application/json'], 
        ['application/json']
      );
    };


    /**
     * Get the wrap-up for this conversation participant. 
     * 
     * @param {String} conversationId conversationId
     * @param {String} participantId participantId
     * @param {Object} opts Optional parameters
     * @param {Boolean} opts.provisional Indicates if the wrap-up code is provisional. (default to false)
     */
    this.getConversationsEmailParticipantWrapup = function(conversationId, participantId, opts) { 
      opts = opts || {};

      // verify the required parameter 'conversationId' is set
      if (conversationId === undefined || conversationId === null) {
        throw "Missing the required parameter 'conversationId' when calling getConversationsEmailParticipantWrapup";
      }

      // verify the required parameter 'participantId' is set
      if (participantId === undefined || participantId === null) {
        throw "Missing the required parameter 'participantId' when calling getConversationsEmailParticipantWrapup";
      }


      return this.apiClient.callApi(
        '/api/v2/conversations/emails/{conversationId}/participants/{participantId}/wrapup', 
        'GET', 
        { 'conversationId': conversationId,'participantId': participantId }, 
        { 'provisional': opts['provisional'] }, 
        {  }, 
        {  }, 
        null, 
        ['PureCloud Auth'], 
        ['application/json'], 
        ['application/json']
      );
    };


    /**
     * Get list of wrapup codes for this conversation participant
     * 
     * @param {String} conversationId conversationId
     * @param {String} participantId participantId
     */
    this.getConversationsEmailParticipantWrapupcodes = function(conversationId, participantId) { 

      // verify the required parameter 'conversationId' is set
      if (conversationId === undefined || conversationId === null) {
        throw "Missing the required parameter 'conversationId' when calling getConversationsEmailParticipantWrapupcodes";
      }

      // verify the required parameter 'participantId' is set
      if (participantId === undefined || participantId === null) {
        throw "Missing the required parameter 'participantId' when calling getConversationsEmailParticipantWrapupcodes";
      }


      return this.apiClient.callApi(
        '/api/v2/conversations/emails/{conversationId}/participants/{participantId}/wrapupcodes', 
        'GET', 
        { 'conversationId': conversationId,'participantId': participantId }, 
        {  }, 
        {  }, 
        {  }, 
        null, 
        ['PureCloud Auth'], 
        ['application/json'], 
        ['application/json']
      );
    };


    /**
     * Get recent email conversations
     * 
     */
    this.getConversationsEmails = function() { 


      return this.apiClient.callApi(
        '/api/v2/conversations/emails', 
        'GET', 
        {  }, 
        {  }, 
        {  }, 
        {  }, 
        null, 
        ['PureCloud Auth'], 
        ['application/json'], 
        ['application/json']
      );
    };


    /**
     * Update a participant.
     * Update conversation participant.
     * @param {String} conversationId conversation ID
     * @param {String} participantId participant ID
     * @param {module:purecloud-platform-client-v2/model/MediaParticipantRequest} body Update request
     */
    this.patchConversationParticipant = function(conversationId, participantId, body) { 

      // verify the required parameter 'conversationId' is set
      if (conversationId === undefined || conversationId === null) {
        throw "Missing the required parameter 'conversationId' when calling patchConversationParticipant";
      }

      // verify the required parameter 'participantId' is set
      if (participantId === undefined || participantId === null) {
        throw "Missing the required parameter 'participantId' when calling patchConversationParticipant";
      }

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw "Missing the required parameter 'body' when calling patchConversationParticipant";
      }


      return this.apiClient.callApi(
        '/api/v2/conversations/{conversationId}/participants/{participantId}', 
        'PATCH', 
        { 'conversationId': conversationId,'participantId': participantId }, 
        {  }, 
        {  }, 
        {  }, 
        body, 
        ['PureCloud Auth'], 
        ['application/json'], 
        ['application/json']
      );
    };


    /**
     * Update the attributes on a conversation participant.
     * 
     * @param {String} conversationId conversation ID
     * @param {String} participantId participant ID
     * @param {module:purecloud-platform-client-v2/model/ParticipantAttributes} body Participant attributes
     */
    this.patchConversationParticipantAttributes = function(conversationId, participantId, body) { 

      // verify the required parameter 'conversationId' is set
      if (conversationId === undefined || conversationId === null) {
        throw "Missing the required parameter 'conversationId' when calling patchConversationParticipantAttributes";
      }

      // verify the required parameter 'participantId' is set
      if (participantId === undefined || participantId === null) {
        throw "Missing the required parameter 'participantId' when calling patchConversationParticipantAttributes";
      }

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw "Missing the required parameter 'body' when calling patchConversationParticipantAttributes";
      }


      return this.apiClient.callApi(
        '/api/v2/conversations/{conversationId}/participants/{participantId}/attributes', 
        'PATCH', 
        { 'conversationId': conversationId,'participantId': participantId }, 
        {  }, 
        {  }, 
        {  }, 
        body, 
        ['PureCloud Auth'], 
        ['application/json'], 
        ['application/json']
      );
    };


    /**
     * Update a conversation by setting it&#39;s recording state, merging in other conversations to create a conference, or disconnecting all of the participants
     * 
     * @param {String} conversationId conversationId
     * @param {module:purecloud-platform-client-v2/model/Conversation} body Conversation
     */
    this.patchConversationsCall = function(conversationId, body) { 

      // verify the required parameter 'conversationId' is set
      if (conversationId === undefined || conversationId === null) {
        throw "Missing the required parameter 'conversationId' when calling patchConversationsCall";
      }

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw "Missing the required parameter 'body' when calling patchConversationsCall";
      }


      return this.apiClient.callApi(
        '/api/v2/conversations/calls/{conversationId}', 
        'PATCH', 
        { 'conversationId': conversationId }, 
        {  }, 
        {  }, 
        {  }, 
        body, 
        ['PureCloud Auth'], 
        ['application/json'], 
        ['application/json']
      );
    };


    /**
     * Update conversation participant
     * 
     * @param {String} conversationId conversationId
     * @param {String} participantId participantId
     * @param {module:purecloud-platform-client-v2/model/MediaParticipantRequest} body Participant request
     */
    this.patchConversationsCallParticipant = function(conversationId, participantId, body) { 

      // verify the required parameter 'conversationId' is set
      if (conversationId === undefined || conversationId === null) {
        throw "Missing the required parameter 'conversationId' when calling patchConversationsCallParticipant";
      }

      // verify the required parameter 'participantId' is set
      if (participantId === undefined || participantId === null) {
        throw "Missing the required parameter 'participantId' when calling patchConversationsCallParticipant";
      }

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw "Missing the required parameter 'body' when calling patchConversationsCallParticipant";
      }


      return this.apiClient.callApi(
        '/api/v2/conversations/calls/{conversationId}/participants/{participantId}', 
        'PATCH', 
        { 'conversationId': conversationId,'participantId': participantId }, 
        {  }, 
        {  }, 
        {  }, 
        body, 
        ['PureCloud Auth'], 
        ['application/json'], 
        ['application/json']
      );
    };


    /**
     * Update the attributes on a conversation participant.
     * 
     * @param {String} conversationId conversationId
     * @param {String} participantId participantId
     * @param {module:purecloud-platform-client-v2/model/ParticipantAttributes} body Participant attributes
     */
    this.patchConversationsCallParticipantAttributes = function(conversationId, participantId, body) { 

      // verify the required parameter 'conversationId' is set
      if (conversationId === undefined || conversationId === null) {
        throw "Missing the required parameter 'conversationId' when calling patchConversationsCallParticipantAttributes";
      }

      // verify the required parameter 'participantId' is set
      if (participantId === undefined || participantId === null) {
        throw "Missing the required parameter 'participantId' when calling patchConversationsCallParticipantAttributes";
      }

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw "Missing the required parameter 'body' when calling patchConversationsCallParticipantAttributes";
      }


      return this.apiClient.callApi(
        '/api/v2/conversations/calls/{conversationId}/participants/{participantId}/attributes', 
        'PATCH', 
        { 'conversationId': conversationId,'participantId': participantId }, 
        {  }, 
        {  }, 
        {  }, 
        body, 
        ['PureCloud Auth'], 
        ['application/json'], 
        ['application/json']
      );
    };


    /**
     * Update conversation participant&#39;s communication by disconnecting it.
     * 
     * @param {String} conversationId conversationId
     * @param {String} participantId participantId
     * @param {String} communicationId communicationId
     * @param {module:purecloud-platform-client-v2/model/MediaParticipantRequest} body Participant
     */
    this.patchConversationsCallParticipantCommunication = function(conversationId, participantId, communicationId, body) { 

      // verify the required parameter 'conversationId' is set
      if (conversationId === undefined || conversationId === null) {
        throw "Missing the required parameter 'conversationId' when calling patchConversationsCallParticipantCommunication";
      }

      // verify the required parameter 'participantId' is set
      if (participantId === undefined || participantId === null) {
        throw "Missing the required parameter 'participantId' when calling patchConversationsCallParticipantCommunication";
      }

      // verify the required parameter 'communicationId' is set
      if (communicationId === undefined || communicationId === null) {
        throw "Missing the required parameter 'communicationId' when calling patchConversationsCallParticipantCommunication";
      }

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw "Missing the required parameter 'body' when calling patchConversationsCallParticipantCommunication";
      }


      return this.apiClient.callApi(
        '/api/v2/conversations/calls/{conversationId}/participants/{participantId}/communications/{communicationId}', 
        'PATCH', 
        { 'conversationId': conversationId,'participantId': participantId,'communicationId': communicationId }, 
        {  }, 
        {  }, 
        {  }, 
        body, 
        ['PureCloud Auth'], 
        ['application/json'], 
        ['application/json']
      );
    };


    /**
     * Change who can speak
     * 
     * @param {String} conversationId conversationId
     * @param {String} participantId participantId
     * @param {module:purecloud-platform-client-v2/model/ConsultTransferUpdate} body new speak to
     */
    this.patchConversationsCallParticipantConsult = function(conversationId, participantId, body) { 

      // verify the required parameter 'conversationId' is set
      if (conversationId === undefined || conversationId === null) {
        throw "Missing the required parameter 'conversationId' when calling patchConversationsCallParticipantConsult";
      }

      // verify the required parameter 'participantId' is set
      if (participantId === undefined || participantId === null) {
        throw "Missing the required parameter 'participantId' when calling patchConversationsCallParticipantConsult";
      }

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw "Missing the required parameter 'body' when calling patchConversationsCallParticipantConsult";
      }


      return this.apiClient.callApi(
        '/api/v2/conversations/calls/{conversationId}/participants/{participantId}/consult', 
        'PATCH', 
        { 'conversationId': conversationId,'participantId': participantId }, 
        {  }, 
        {  }, 
        {  }, 
        body, 
        ['PureCloud Auth'], 
        ['application/json'], 
        ['application/json']
      );
    };


    /**
     * Update a conversation by disconnecting all of the participants
     * 
     * @param {String} conversationId conversationId
     * @param {module:purecloud-platform-client-v2/model/Conversation} body Conversation
     */
    this.patchConversationsCallback = function(conversationId, body) { 

      // verify the required parameter 'conversationId' is set
      if (conversationId === undefined || conversationId === null) {
        throw "Missing the required parameter 'conversationId' when calling patchConversationsCallback";
      }

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw "Missing the required parameter 'body' when calling patchConversationsCallback";
      }


      return this.apiClient.callApi(
        '/api/v2/conversations/callbacks/{conversationId}', 
        'PATCH', 
        { 'conversationId': conversationId }, 
        {  }, 
        {  }, 
        {  }, 
        body, 
        ['PureCloud Auth'], 
        ['application/json'], 
        ['application/json']
      );
    };


    /**
     * Update conversation participant
     * 
     * @param {String} conversationId conversationId
     * @param {String} participantId participantId
     * @param {module:purecloud-platform-client-v2/model/MediaParticipantRequest} body Participant
     */
    this.patchConversationsCallbackParticipant = function(conversationId, participantId, body) { 

      // verify the required parameter 'conversationId' is set
      if (conversationId === undefined || conversationId === null) {
        throw "Missing the required parameter 'conversationId' when calling patchConversationsCallbackParticipant";
      }

      // verify the required parameter 'participantId' is set
      if (participantId === undefined || participantId === null) {
        throw "Missing the required parameter 'participantId' when calling patchConversationsCallbackParticipant";
      }

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw "Missing the required parameter 'body' when calling patchConversationsCallbackParticipant";
      }


      return this.apiClient.callApi(
        '/api/v2/conversations/callbacks/{conversationId}/participants/{participantId}', 
        'PATCH', 
        { 'conversationId': conversationId,'participantId': participantId }, 
        {  }, 
        {  }, 
        {  }, 
        body, 
        ['PureCloud Auth'], 
        ['application/json'], 
        ['application/json']
      );
    };


    /**
     * Update the attributes on a conversation participant.
     * 
     * @param {String} conversationId conversationId
     * @param {String} participantId participantId
     * @param {module:purecloud-platform-client-v2/model/ParticipantAttributes} body Attributes
     */
    this.patchConversationsCallbackParticipantAttributes = function(conversationId, participantId, body) { 

      // verify the required parameter 'conversationId' is set
      if (conversationId === undefined || conversationId === null) {
        throw "Missing the required parameter 'conversationId' when calling patchConversationsCallbackParticipantAttributes";
      }

      // verify the required parameter 'participantId' is set
      if (participantId === undefined || participantId === null) {
        throw "Missing the required parameter 'participantId' when calling patchConversationsCallbackParticipantAttributes";
      }

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw "Missing the required parameter 'body' when calling patchConversationsCallbackParticipantAttributes";
      }


      return this.apiClient.callApi(
        '/api/v2/conversations/callbacks/{conversationId}/participants/{participantId}/attributes', 
        'PATCH', 
        { 'conversationId': conversationId,'participantId': participantId }, 
        {  }, 
        {  }, 
        {  }, 
        body, 
        ['PureCloud Auth'], 
        ['application/json'], 
        ['application/json']
      );
    };


    /**
     * Update conversation participant&#39;s communication by disconnecting it.
     * 
     * @param {String} conversationId conversationId
     * @param {String} participantId participantId
     * @param {String} communicationId communicationId
     * @param {module:purecloud-platform-client-v2/model/MediaParticipantRequest} body Participant
     */
    this.patchConversationsCallbackParticipantCommunication = function(conversationId, participantId, communicationId, body) { 

      // verify the required parameter 'conversationId' is set
      if (conversationId === undefined || conversationId === null) {
        throw "Missing the required parameter 'conversationId' when calling patchConversationsCallbackParticipantCommunication";
      }

      // verify the required parameter 'participantId' is set
      if (participantId === undefined || participantId === null) {
        throw "Missing the required parameter 'participantId' when calling patchConversationsCallbackParticipantCommunication";
      }

      // verify the required parameter 'communicationId' is set
      if (communicationId === undefined || communicationId === null) {
        throw "Missing the required parameter 'communicationId' when calling patchConversationsCallbackParticipantCommunication";
      }

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw "Missing the required parameter 'body' when calling patchConversationsCallbackParticipantCommunication";
      }


      return this.apiClient.callApi(
        '/api/v2/conversations/callbacks/{conversationId}/participants/{participantId}/communications/{communicationId}', 
        'PATCH', 
        { 'conversationId': conversationId,'participantId': participantId,'communicationId': communicationId }, 
        {  }, 
        {  }, 
        {  }, 
        body, 
        ['PureCloud Auth'], 
        ['application/json'], 
        ['application/json']
      );
    };


    /**
     * Update a conversation by disconnecting all of the participants
     * 
     * @param {String} conversationId conversationId
     * @param {module:purecloud-platform-client-v2/model/Conversation} body Conversation
     */
    this.patchConversationsChat = function(conversationId, body) { 

      // verify the required parameter 'conversationId' is set
      if (conversationId === undefined || conversationId === null) {
        throw "Missing the required parameter 'conversationId' when calling patchConversationsChat";
      }

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw "Missing the required parameter 'body' when calling patchConversationsChat";
      }


      return this.apiClient.callApi(
        '/api/v2/conversations/chats/{conversationId}', 
        'PATCH', 
        { 'conversationId': conversationId }, 
        {  }, 
        {  }, 
        {  }, 
        body, 
        ['PureCloud Auth'], 
        ['application/json'], 
        ['application/json']
      );
    };


    /**
     * Update conversation participant
     * 
     * @param {String} conversationId conversationId
     * @param {String} participantId participantId
     * @param {module:purecloud-platform-client-v2/model/MediaParticipantRequest} body Update request
     */
    this.patchConversationsChatParticipant = function(conversationId, participantId, body) { 

      // verify the required parameter 'conversationId' is set
      if (conversationId === undefined || conversationId === null) {
        throw "Missing the required parameter 'conversationId' when calling patchConversationsChatParticipant";
      }

      // verify the required parameter 'participantId' is set
      if (participantId === undefined || participantId === null) {
        throw "Missing the required parameter 'participantId' when calling patchConversationsChatParticipant";
      }

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw "Missing the required parameter 'body' when calling patchConversationsChatParticipant";
      }


      return this.apiClient.callApi(
        '/api/v2/conversations/chats/{conversationId}/participants/{participantId}', 
        'PATCH', 
        { 'conversationId': conversationId,'participantId': participantId }, 
        {  }, 
        {  }, 
        {  }, 
        body, 
        ['PureCloud Auth'], 
        ['application/json'], 
        ['application/json']
      );
    };


    /**
     * Update the attributes on a conversation participant.
     * 
     * @param {String} conversationId conversationId
     * @param {String} participantId participantId
     * @param {module:purecloud-platform-client-v2/model/ParticipantAttributes} body Participant attributes
     */
    this.patchConversationsChatParticipantAttributes = function(conversationId, participantId, body) { 

      // verify the required parameter 'conversationId' is set
      if (conversationId === undefined || conversationId === null) {
        throw "Missing the required parameter 'conversationId' when calling patchConversationsChatParticipantAttributes";
      }

      // verify the required parameter 'participantId' is set
      if (participantId === undefined || participantId === null) {
        throw "Missing the required parameter 'participantId' when calling patchConversationsChatParticipantAttributes";
      }

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw "Missing the required parameter 'body' when calling patchConversationsChatParticipantAttributes";
      }


      return this.apiClient.callApi(
        '/api/v2/conversations/chats/{conversationId}/participants/{participantId}/attributes', 
        'PATCH', 
        { 'conversationId': conversationId,'participantId': participantId }, 
        {  }, 
        {  }, 
        {  }, 
        body, 
        ['PureCloud Auth'], 
        ['application/json'], 
        ['application/json']
      );
    };


    /**
     * Update conversation participant&#39;s communication by disconnecting it.
     * 
     * @param {String} conversationId conversationId
     * @param {String} participantId participantId
     * @param {String} communicationId communicationId
     * @param {module:purecloud-platform-client-v2/model/MediaParticipantRequest} body Participant
     */
    this.patchConversationsChatParticipantCommunication = function(conversationId, participantId, communicationId, body) { 

      // verify the required parameter 'conversationId' is set
      if (conversationId === undefined || conversationId === null) {
        throw "Missing the required parameter 'conversationId' when calling patchConversationsChatParticipantCommunication";
      }

      // verify the required parameter 'participantId' is set
      if (participantId === undefined || participantId === null) {
        throw "Missing the required parameter 'participantId' when calling patchConversationsChatParticipantCommunication";
      }

      // verify the required parameter 'communicationId' is set
      if (communicationId === undefined || communicationId === null) {
        throw "Missing the required parameter 'communicationId' when calling patchConversationsChatParticipantCommunication";
      }

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw "Missing the required parameter 'body' when calling patchConversationsChatParticipantCommunication";
      }


      return this.apiClient.callApi(
        '/api/v2/conversations/chats/{conversationId}/participants/{participantId}/communications/{communicationId}', 
        'PATCH', 
        { 'conversationId': conversationId,'participantId': participantId,'communicationId': communicationId }, 
        {  }, 
        {  }, 
        {  }, 
        body, 
        ['PureCloud Auth'], 
        ['application/json'], 
        ['application/json']
      );
    };


    /**
     * Update a conversation by disconnecting all of the participants
     * 
     * @param {String} conversationId conversationId
     * @param {module:purecloud-platform-client-v2/model/Conversation} body Conversation
     */
    this.patchConversationsCobrowsesession = function(conversationId, body) { 

      // verify the required parameter 'conversationId' is set
      if (conversationId === undefined || conversationId === null) {
        throw "Missing the required parameter 'conversationId' when calling patchConversationsCobrowsesession";
      }

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw "Missing the required parameter 'body' when calling patchConversationsCobrowsesession";
      }


      return this.apiClient.callApi(
        '/api/v2/conversations/cobrowsesessions/{conversationId}', 
        'PATCH', 
        { 'conversationId': conversationId }, 
        {  }, 
        {  }, 
        {  }, 
        body, 
        ['PureCloud Auth'], 
        ['application/json'], 
        ['application/json']
      );
    };


    /**
     * Update conversation participant
     * 
     * @param {String} conversationId conversationId
     * @param {String} participantId participantId
     * @param {Object} opts Optional parameters
     * @param {module:purecloud-platform-client-v2/model/MediaParticipantRequest} opts.body 
     */
    this.patchConversationsCobrowsesessionParticipant = function(conversationId, participantId, opts) { 
      opts = opts || {};

      // verify the required parameter 'conversationId' is set
      if (conversationId === undefined || conversationId === null) {
        throw "Missing the required parameter 'conversationId' when calling patchConversationsCobrowsesessionParticipant";
      }

      // verify the required parameter 'participantId' is set
      if (participantId === undefined || participantId === null) {
        throw "Missing the required parameter 'participantId' when calling patchConversationsCobrowsesessionParticipant";
      }


      return this.apiClient.callApi(
        '/api/v2/conversations/cobrowsesessions/{conversationId}/participants/{participantId}', 
        'PATCH', 
        { 'conversationId': conversationId,'participantId': participantId }, 
        {  }, 
        {  }, 
        {  }, 
        opts['body'], 
        ['PureCloud Auth'], 
        ['application/json'], 
        ['application/json']
      );
    };


    /**
     * Update the attributes on a conversation participant.
     * 
     * @param {String} conversationId conversationId
     * @param {String} participantId participantId
     * @param {Object} opts Optional parameters
     * @param {module:purecloud-platform-client-v2/model/ParticipantAttributes} opts.body 
     */
    this.patchConversationsCobrowsesessionParticipantAttributes = function(conversationId, participantId, opts) { 
      opts = opts || {};

      // verify the required parameter 'conversationId' is set
      if (conversationId === undefined || conversationId === null) {
        throw "Missing the required parameter 'conversationId' when calling patchConversationsCobrowsesessionParticipantAttributes";
      }

      // verify the required parameter 'participantId' is set
      if (participantId === undefined || participantId === null) {
        throw "Missing the required parameter 'participantId' when calling patchConversationsCobrowsesessionParticipantAttributes";
      }


      return this.apiClient.callApi(
        '/api/v2/conversations/cobrowsesessions/{conversationId}/participants/{participantId}/attributes', 
        'PATCH', 
        { 'conversationId': conversationId,'participantId': participantId }, 
        {  }, 
        {  }, 
        {  }, 
        opts['body'], 
        ['PureCloud Auth'], 
        ['application/json'], 
        ['application/json']
      );
    };


    /**
     * Update conversation participant&#39;s communication by disconnecting it.
     * 
     * @param {String} conversationId conversationId
     * @param {String} participantId participantId
     * @param {String} communicationId communicationId
     * @param {module:purecloud-platform-client-v2/model/MediaParticipantRequest} body Participant
     */
    this.patchConversationsCobrowsesessionParticipantCommunication = function(conversationId, participantId, communicationId, body) { 

      // verify the required parameter 'conversationId' is set
      if (conversationId === undefined || conversationId === null) {
        throw "Missing the required parameter 'conversationId' when calling patchConversationsCobrowsesessionParticipantCommunication";
      }

      // verify the required parameter 'participantId' is set
      if (participantId === undefined || participantId === null) {
        throw "Missing the required parameter 'participantId' when calling patchConversationsCobrowsesessionParticipantCommunication";
      }

      // verify the required parameter 'communicationId' is set
      if (communicationId === undefined || communicationId === null) {
        throw "Missing the required parameter 'communicationId' when calling patchConversationsCobrowsesessionParticipantCommunication";
      }

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw "Missing the required parameter 'body' when calling patchConversationsCobrowsesessionParticipantCommunication";
      }


      return this.apiClient.callApi(
        '/api/v2/conversations/cobrowsesessions/{conversationId}/participants/{participantId}/communications/{communicationId}', 
        'PATCH', 
        { 'conversationId': conversationId,'participantId': participantId,'communicationId': communicationId }, 
        {  }, 
        {  }, 
        {  }, 
        body, 
        ['PureCloud Auth'], 
        ['application/json'], 
        ['application/json']
      );
    };


    /**
     * Update a conversation by disconnecting all of the participants
     * 
     * @param {String} conversationId conversationId
     * @param {module:purecloud-platform-client-v2/model/Conversation} body Conversation
     */
    this.patchConversationsEmail = function(conversationId, body) { 

      // verify the required parameter 'conversationId' is set
      if (conversationId === undefined || conversationId === null) {
        throw "Missing the required parameter 'conversationId' when calling patchConversationsEmail";
      }

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw "Missing the required parameter 'body' when calling patchConversationsEmail";
      }


      return this.apiClient.callApi(
        '/api/v2/conversations/emails/{conversationId}', 
        'PATCH', 
        { 'conversationId': conversationId }, 
        {  }, 
        {  }, 
        {  }, 
        body, 
        ['PureCloud Auth'], 
        ['application/json'], 
        ['application/json']
      );
    };


    /**
     * Update conversation participant
     * 
     * @param {String} conversationId conversationId
     * @param {String} participantId participantId
     * @param {module:purecloud-platform-client-v2/model/MediaParticipantRequest} body Update request
     */
    this.patchConversationsEmailParticipant = function(conversationId, participantId, body) { 

      // verify the required parameter 'conversationId' is set
      if (conversationId === undefined || conversationId === null) {
        throw "Missing the required parameter 'conversationId' when calling patchConversationsEmailParticipant";
      }

      // verify the required parameter 'participantId' is set
      if (participantId === undefined || participantId === null) {
        throw "Missing the required parameter 'participantId' when calling patchConversationsEmailParticipant";
      }

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw "Missing the required parameter 'body' when calling patchConversationsEmailParticipant";
      }


      return this.apiClient.callApi(
        '/api/v2/conversations/emails/{conversationId}/participants/{participantId}', 
        'PATCH', 
        { 'conversationId': conversationId,'participantId': participantId }, 
        {  }, 
        {  }, 
        {  }, 
        body, 
        ['PureCloud Auth'], 
        ['application/json'], 
        ['application/json']
      );
    };


    /**
     * Update the attributes on a conversation participant.
     * 
     * @param {String} conversationId conversationId
     * @param {String} participantId participantId
     * @param {module:purecloud-platform-client-v2/model/ParticipantAttributes} body Participant attributes
     */
    this.patchConversationsEmailParticipantAttributes = function(conversationId, participantId, body) { 

      // verify the required parameter 'conversationId' is set
      if (conversationId === undefined || conversationId === null) {
        throw "Missing the required parameter 'conversationId' when calling patchConversationsEmailParticipantAttributes";
      }

      // verify the required parameter 'participantId' is set
      if (participantId === undefined || participantId === null) {
        throw "Missing the required parameter 'participantId' when calling patchConversationsEmailParticipantAttributes";
      }

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw "Missing the required parameter 'body' when calling patchConversationsEmailParticipantAttributes";
      }


      return this.apiClient.callApi(
        '/api/v2/conversations/emails/{conversationId}/participants/{participantId}/attributes', 
        'PATCH', 
        { 'conversationId': conversationId,'participantId': participantId }, 
        {  }, 
        {  }, 
        {  }, 
        body, 
        ['PureCloud Auth'], 
        ['application/json'], 
        ['application/json']
      );
    };


    /**
     * Update conversation participant&#39;s communication by disconnecting it.
     * 
     * @param {String} conversationId conversationId
     * @param {String} participantId participantId
     * @param {String} communicationId communicationId
     * @param {module:purecloud-platform-client-v2/model/MediaParticipantRequest} body Participant
     */
    this.patchConversationsEmailParticipantCommunication = function(conversationId, participantId, communicationId, body) { 

      // verify the required parameter 'conversationId' is set
      if (conversationId === undefined || conversationId === null) {
        throw "Missing the required parameter 'conversationId' when calling patchConversationsEmailParticipantCommunication";
      }

      // verify the required parameter 'participantId' is set
      if (participantId === undefined || participantId === null) {
        throw "Missing the required parameter 'participantId' when calling patchConversationsEmailParticipantCommunication";
      }

      // verify the required parameter 'communicationId' is set
      if (communicationId === undefined || communicationId === null) {
        throw "Missing the required parameter 'communicationId' when calling patchConversationsEmailParticipantCommunication";
      }

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw "Missing the required parameter 'body' when calling patchConversationsEmailParticipantCommunication";
      }


      return this.apiClient.callApi(
        '/api/v2/conversations/emails/{conversationId}/participants/{participantId}/communications/{communicationId}', 
        'PATCH', 
        { 'conversationId': conversationId,'participantId': participantId,'communicationId': communicationId }, 
        {  }, 
        {  }, 
        {  }, 
        body, 
        ['PureCloud Auth'], 
        ['application/json'], 
        ['application/json']
      );
    };


    /**
     * Index conversation properties
     * 
     * @param {String} conversationId conversationId
     * @param {module:purecloud-platform-client-v2/model/PropertyIndexRequest} body request
     */
    this.postAnalyticsConversationDetailsProperties = function(conversationId, body) { 

      // verify the required parameter 'conversationId' is set
      if (conversationId === undefined || conversationId === null) {
        throw "Missing the required parameter 'conversationId' when calling postAnalyticsConversationDetailsProperties";
      }

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw "Missing the required parameter 'body' when calling postAnalyticsConversationDetailsProperties";
      }


      return this.apiClient.callApi(
        '/api/v2/analytics/conversations/{conversationId}/details/properties', 
        'POST', 
        { 'conversationId': conversationId }, 
        {  }, 
        {  }, 
        {  }, 
        body, 
        ['PureCloud Auth'], 
        ['application/json'], 
        ['application/json']
      );
    };


    /**
     * Query for conversation aggregates
     * 
     * @param {module:purecloud-platform-client-v2/model/AggregationQuery} body query
     */
    this.postAnalyticsConversationsAggregatesQuery = function(body) { 

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw "Missing the required parameter 'body' when calling postAnalyticsConversationsAggregatesQuery";
      }


      return this.apiClient.callApi(
        '/api/v2/analytics/conversations/aggregates/query', 
        'POST', 
        {  }, 
        {  }, 
        {  }, 
        {  }, 
        body, 
        ['PureCloud Auth'], 
        ['application/json'], 
        ['application/json']
      );
    };


    /**
     * Query for conversation details
     * 
     * @param {module:purecloud-platform-client-v2/model/ConversationQuery} body query
     */
    this.postAnalyticsConversationsDetailsQuery = function(body) { 

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw "Missing the required parameter 'body' when calling postAnalyticsConversationsDetailsQuery";
      }


      return this.apiClient.callApi(
        '/api/v2/analytics/conversations/details/query', 
        'POST', 
        {  }, 
        {  }, 
        {  }, 
        {  }, 
        body, 
        ['PureCloud Auth'], 
        ['application/json'], 
        ['application/json']
      );
    };


    /**
     * Create a new callback for the specified participant on the conversation.
     * 
     * @param {String} conversationId conversation ID
     * @param {String} participantId participant ID
     * @param {Object} opts Optional parameters
     * @param {module:purecloud-platform-client-v2/model/CreateCallbackOnConversationCommand} opts.body 
     */
    this.postConversationParticipantCallbacks = function(conversationId, participantId, opts) { 
      opts = opts || {};

      // verify the required parameter 'conversationId' is set
      if (conversationId === undefined || conversationId === null) {
        throw "Missing the required parameter 'conversationId' when calling postConversationParticipantCallbacks";
      }

      // verify the required parameter 'participantId' is set
      if (participantId === undefined || participantId === null) {
        throw "Missing the required parameter 'participantId' when calling postConversationParticipantCallbacks";
      }


      return this.apiClient.callApi(
        '/api/v2/conversations/{conversationId}/participants/{participantId}/callbacks', 
        'POST', 
        { 'conversationId': conversationId,'participantId': participantId }, 
        {  }, 
        {  }, 
        {  }, 
        opts['body'], 
        ['PureCloud Auth'], 
        ['application/json'], 
        ['application/json']
      );
    };


    /**
     * Replace this participant with the specified user and/or address
     * 
     * @param {String} conversationId conversation ID
     * @param {String} participantId participant ID
     * @param {module:purecloud-platform-client-v2/model/TransferRequest} body Transfer request
     */
    this.postConversationParticipantReplace = function(conversationId, participantId, body) { 

      // verify the required parameter 'conversationId' is set
      if (conversationId === undefined || conversationId === null) {
        throw "Missing the required parameter 'conversationId' when calling postConversationParticipantReplace";
      }

      // verify the required parameter 'participantId' is set
      if (participantId === undefined || participantId === null) {
        throw "Missing the required parameter 'participantId' when calling postConversationParticipantReplace";
      }

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw "Missing the required parameter 'body' when calling postConversationParticipantReplace";
      }


      return this.apiClient.callApi(
        '/api/v2/conversations/{conversationId}/participants/{participantId}/replace', 
        'POST', 
        { 'conversationId': conversationId,'participantId': participantId }, 
        {  }, 
        {  }, 
        {  }, 
        body, 
        ['PureCloud Auth'], 
        ['application/json'], 
        ['application/json']
      );
    };


    /**
     * Add a new call to a conversation
     * 
     * @param {String} conversationId conversationId
     * @param {module:purecloud-platform-client-v2/model/CallCommand} body Conversation
     */
    this.postConversationsCall = function(conversationId, body) { 

      // verify the required parameter 'conversationId' is set
      if (conversationId === undefined || conversationId === null) {
        throw "Missing the required parameter 'conversationId' when calling postConversationsCall";
      }

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw "Missing the required parameter 'body' when calling postConversationsCall";
      }


      return this.apiClient.callApi(
        '/api/v2/conversations/calls/{conversationId}', 
        'POST', 
        { 'conversationId': conversationId }, 
        {  }, 
        {  }, 
        {  }, 
        body, 
        ['PureCloud Auth'], 
        ['application/json'], 
        ['application/json']
      );
    };


    /**
     * Initiate and update consult transfer
     * 
     * @param {String} conversationId conversationId
     * @param {String} participantId participantId
     * @param {module:purecloud-platform-client-v2/model/ConsultTransfer} body Destination address &amp; initial speak to
     */
    this.postConversationsCallParticipantConsult = function(conversationId, participantId, body) { 

      // verify the required parameter 'conversationId' is set
      if (conversationId === undefined || conversationId === null) {
        throw "Missing the required parameter 'conversationId' when calling postConversationsCallParticipantConsult";
      }

      // verify the required parameter 'participantId' is set
      if (participantId === undefined || participantId === null) {
        throw "Missing the required parameter 'participantId' when calling postConversationsCallParticipantConsult";
      }

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw "Missing the required parameter 'body' when calling postConversationsCallParticipantConsult";
      }


      return this.apiClient.callApi(
        '/api/v2/conversations/calls/{conversationId}/participants/{participantId}/consult', 
        'POST', 
        { 'conversationId': conversationId,'participantId': participantId }, 
        {  }, 
        {  }, 
        {  }, 
        body, 
        ['PureCloud Auth'], 
        ['application/json'], 
        ['application/json']
      );
    };


    /**
     * Listen in on the conversation from the point of view of a given participant.
     * 
     * @param {String} conversationId conversationId
     * @param {String} participantId participantId
     */
    this.postConversationsCallParticipantMonitor = function(conversationId, participantId) { 

      // verify the required parameter 'conversationId' is set
      if (conversationId === undefined || conversationId === null) {
        throw "Missing the required parameter 'conversationId' when calling postConversationsCallParticipantMonitor";
      }

      // verify the required parameter 'participantId' is set
      if (participantId === undefined || participantId === null) {
        throw "Missing the required parameter 'participantId' when calling postConversationsCallParticipantMonitor";
      }


      return this.apiClient.callApi(
        '/api/v2/conversations/calls/{conversationId}/participants/{participantId}/monitor', 
        'POST', 
        { 'conversationId': conversationId,'participantId': participantId }, 
        {  }, 
        {  }, 
        {  }, 
        null, 
        ['PureCloud Auth'], 
        ['application/json'], 
        ['application/json']
      );
    };


    /**
     * Replace this participant with the specified user and/or address
     * 
     * @param {String} conversationId conversationId
     * @param {String} participantId participantId
     * @param {module:purecloud-platform-client-v2/model/TransferRequest} body Transfer request
     */
    this.postConversationsCallParticipantReplace = function(conversationId, participantId, body) { 

      // verify the required parameter 'conversationId' is set
      if (conversationId === undefined || conversationId === null) {
        throw "Missing the required parameter 'conversationId' when calling postConversationsCallParticipantReplace";
      }

      // verify the required parameter 'participantId' is set
      if (participantId === undefined || participantId === null) {
        throw "Missing the required parameter 'participantId' when calling postConversationsCallParticipantReplace";
      }

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw "Missing the required parameter 'body' when calling postConversationsCallParticipantReplace";
      }


      return this.apiClient.callApi(
        '/api/v2/conversations/calls/{conversationId}/participants/{participantId}/replace', 
        'POST', 
        { 'conversationId': conversationId,'participantId': participantId }, 
        {  }, 
        {  }, 
        {  }, 
        body, 
        ['PureCloud Auth'], 
        ['application/json'], 
        ['application/json']
      );
    };


    /**
     * Add participants to a conversation
     * 
     * @param {String} conversationId conversationId
     * @param {module:purecloud-platform-client-v2/model/Conversation} body Conversation
     */
    this.postConversationsCallParticipants = function(conversationId, body) { 

      // verify the required parameter 'conversationId' is set
      if (conversationId === undefined || conversationId === null) {
        throw "Missing the required parameter 'conversationId' when calling postConversationsCallParticipants";
      }

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw "Missing the required parameter 'body' when calling postConversationsCallParticipants";
      }


      return this.apiClient.callApi(
        '/api/v2/conversations/calls/{conversationId}/participants', 
        'POST', 
        { 'conversationId': conversationId }, 
        {  }, 
        {  }, 
        {  }, 
        body, 
        ['PureCloud Auth'], 
        ['application/json'], 
        ['application/json']
      );
    };


    /**
     * Replace this participant with the specified user and/or address
     * 
     * @param {String} conversationId conversationId
     * @param {String} participantId participantId
     * @param {module:purecloud-platform-client-v2/model/TransferRequest} body Transfer request
     */
    this.postConversationsCallbackParticipantReplace = function(conversationId, participantId, body) { 

      // verify the required parameter 'conversationId' is set
      if (conversationId === undefined || conversationId === null) {
        throw "Missing the required parameter 'conversationId' when calling postConversationsCallbackParticipantReplace";
      }

      // verify the required parameter 'participantId' is set
      if (participantId === undefined || participantId === null) {
        throw "Missing the required parameter 'participantId' when calling postConversationsCallbackParticipantReplace";
      }

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw "Missing the required parameter 'body' when calling postConversationsCallbackParticipantReplace";
      }


      return this.apiClient.callApi(
        '/api/v2/conversations/callbacks/{conversationId}/participants/{participantId}/replace', 
        'POST', 
        { 'conversationId': conversationId,'participantId': participantId }, 
        {  }, 
        {  }, 
        {  }, 
        body, 
        ['PureCloud Auth'], 
        ['application/json'], 
        ['application/json']
      );
    };


    /**
     * Create a Callback
     * 
     * @param {module:purecloud-platform-client-v2/model/CreateCallbackCommand} body Callback
     */
    this.postConversationsCallbacks = function(body) { 

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw "Missing the required parameter 'body' when calling postConversationsCallbacks";
      }


      return this.apiClient.callApi(
        '/api/v2/conversations/callbacks', 
        'POST', 
        {  }, 
        {  }, 
        {  }, 
        {  }, 
        body, 
        ['PureCloud Auth'], 
        ['application/json'], 
        ['application/json']
      );
    };


    /**
     * Create a call conversation
     * 
     * @param {module:purecloud-platform-client-v2/model/CreateCallRequest} body Call request
     */
    this.postConversationsCalls = function(body) { 

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw "Missing the required parameter 'body' when calling postConversationsCalls";
      }


      return this.apiClient.callApi(
        '/api/v2/conversations/calls', 
        'POST', 
        {  }, 
        {  }, 
        {  }, 
        {  }, 
        body, 
        ['PureCloud Auth'], 
        ['application/json'], 
        ['application/json']
      );
    };


    /**
     * Replace this participant with the specified user and/or address
     * 
     * @param {String} conversationId conversationId
     * @param {String} participantId participantId
     * @param {module:purecloud-platform-client-v2/model/TransferRequest} body Transfer request
     */
    this.postConversationsChatParticipantReplace = function(conversationId, participantId, body) { 

      // verify the required parameter 'conversationId' is set
      if (conversationId === undefined || conversationId === null) {
        throw "Missing the required parameter 'conversationId' when calling postConversationsChatParticipantReplace";
      }

      // verify the required parameter 'participantId' is set
      if (participantId === undefined || participantId === null) {
        throw "Missing the required parameter 'participantId' when calling postConversationsChatParticipantReplace";
      }

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw "Missing the required parameter 'body' when calling postConversationsChatParticipantReplace";
      }


      return this.apiClient.callApi(
        '/api/v2/conversations/chats/{conversationId}/participants/{participantId}/replace', 
        'POST', 
        { 'conversationId': conversationId,'participantId': participantId }, 
        {  }, 
        {  }, 
        {  }, 
        body, 
        ['PureCloud Auth'], 
        ['application/json'], 
        ['application/json']
      );
    };


    /**
     * Create a web chat conversation
     * 
     * @param {module:purecloud-platform-client-v2/model/CreateWebChatRequest} body Create web chat request
     */
    this.postConversationsChats = function(body) { 

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw "Missing the required parameter 'body' when calling postConversationsChats";
      }


      return this.apiClient.callApi(
        '/api/v2/conversations/chats', 
        'POST', 
        {  }, 
        {  }, 
        {  }, 
        {  }, 
        body, 
        ['PureCloud Auth'], 
        ['application/json'], 
        ['application/json']
      );
    };


    /**
     * Replace this participant with the specified user and/or address
     * 
     * @param {String} conversationId conversationId
     * @param {String} participantId participantId
     * @param {Object} opts Optional parameters
     * @param {module:purecloud-platform-client-v2/model/TransferRequest} opts.body 
     */
    this.postConversationsCobrowsesessionParticipantReplace = function(conversationId, participantId, opts) { 
      opts = opts || {};

      // verify the required parameter 'conversationId' is set
      if (conversationId === undefined || conversationId === null) {
        throw "Missing the required parameter 'conversationId' when calling postConversationsCobrowsesessionParticipantReplace";
      }

      // verify the required parameter 'participantId' is set
      if (participantId === undefined || participantId === null) {
        throw "Missing the required parameter 'participantId' when calling postConversationsCobrowsesessionParticipantReplace";
      }


      return this.apiClient.callApi(
        '/api/v2/conversations/cobrowsesessions/{conversationId}/participants/{participantId}/replace', 
        'POST', 
        { 'conversationId': conversationId,'participantId': participantId }, 
        {  }, 
        {  }, 
        {  }, 
        opts['body'], 
        ['PureCloud Auth'], 
        ['application/json'], 
        ['application/json']
      );
    };


    /**
     * Send an email reply
     * 
     * @param {String} conversationId conversationId
     * @param {module:purecloud-platform-client-v2/model/EmailMessage} body Reply
     */
    this.postConversationsEmailMessages = function(conversationId, body) { 

      // verify the required parameter 'conversationId' is set
      if (conversationId === undefined || conversationId === null) {
        throw "Missing the required parameter 'conversationId' when calling postConversationsEmailMessages";
      }

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw "Missing the required parameter 'body' when calling postConversationsEmailMessages";
      }


      return this.apiClient.callApi(
        '/api/v2/conversations/emails/{conversationId}/messages', 
        'POST', 
        { 'conversationId': conversationId }, 
        {  }, 
        {  }, 
        {  }, 
        body, 
        ['PureCloud Auth'], 
        ['application/json'], 
        ['application/json']
      );
    };


    /**
     * Replace this participant with the specified user and/or address
     * 
     * @param {String} conversationId conversationId
     * @param {String} participantId participantId
     * @param {module:purecloud-platform-client-v2/model/TransferRequest} body Transfer request
     */
    this.postConversationsEmailParticipantReplace = function(conversationId, participantId, body) { 

      // verify the required parameter 'conversationId' is set
      if (conversationId === undefined || conversationId === null) {
        throw "Missing the required parameter 'conversationId' when calling postConversationsEmailParticipantReplace";
      }

      // verify the required parameter 'participantId' is set
      if (participantId === undefined || participantId === null) {
        throw "Missing the required parameter 'participantId' when calling postConversationsEmailParticipantReplace";
      }

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw "Missing the required parameter 'body' when calling postConversationsEmailParticipantReplace";
      }


      return this.apiClient.callApi(
        '/api/v2/conversations/emails/{conversationId}/participants/{participantId}/replace', 
        'POST', 
        { 'conversationId': conversationId,'participantId': participantId }, 
        {  }, 
        {  }, 
        {  }, 
        body, 
        ['PureCloud Auth'], 
        ['application/json'], 
        ['application/json']
      );
    };


    /**
     * Create an email conversation
     * 
     * @param {module:purecloud-platform-client-v2/model/CreateEmailRequest} body Create email request
     */
    this.postConversationsEmails = function(body) { 

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw "Missing the required parameter 'body' when calling postConversationsEmails";
      }


      return this.apiClient.callApi(
        '/api/v2/conversations/emails', 
        'POST', 
        {  }, 
        {  }, 
        {  }, 
        {  }, 
        body, 
        ['PureCloud Auth'], 
        ['application/json'], 
        ['application/json']
      );
    };


    /**
     * Create Fax Conversation
     * 
     * @param {module:purecloud-platform-client-v2/model/FaxSendRequest} body Fax
     */
    this.postConversationsFaxes = function(body) { 

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw "Missing the required parameter 'body' when calling postConversationsFaxes";
      }


      return this.apiClient.callApi(
        '/api/v2/conversations/faxes', 
        'POST', 
        {  }, 
        {  }, 
        {  }, 
        {  }, 
        body, 
        ['PureCloud Auth'], 
        ['application/json'], 
        ['application/json']
      );
    };


    /**
     * Set uuiData to be sent on future commands.
     * 
     * @param {String} conversationId conversationId
     * @param {String} participantId participantId
     * @param {String} communicationId communicationId
     * @param {module:purecloud-platform-client-v2/model/SetUuiDataRequest} body UUIData Request
     */
    this.putConversationsCallParticipantCommunicationUuidata = function(conversationId, participantId, communicationId, body) { 

      // verify the required parameter 'conversationId' is set
      if (conversationId === undefined || conversationId === null) {
        throw "Missing the required parameter 'conversationId' when calling putConversationsCallParticipantCommunicationUuidata";
      }

      // verify the required parameter 'participantId' is set
      if (participantId === undefined || participantId === null) {
        throw "Missing the required parameter 'participantId' when calling putConversationsCallParticipantCommunicationUuidata";
      }

      // verify the required parameter 'communicationId' is set
      if (communicationId === undefined || communicationId === null) {
        throw "Missing the required parameter 'communicationId' when calling putConversationsCallParticipantCommunicationUuidata";
      }

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw "Missing the required parameter 'body' when calling putConversationsCallParticipantCommunicationUuidata";
      }


      return this.apiClient.callApi(
        '/api/v2/conversations/calls/{conversationId}/participants/{participantId}/communications/{communicationId}/uuidata', 
        'PUT', 
        { 'conversationId': conversationId,'participantId': participantId,'communicationId': communicationId }, 
        {  }, 
        {  }, 
        {  }, 
        body, 
        ['PureCloud Auth'], 
        ['application/json'], 
        ['application/json']
      );
    };


    /**
     * Update conversation draft reply
     * 
     * @param {String} conversationId conversationId
     * @param {module:purecloud-platform-client-v2/model/EmailMessage} body Draft
     */
    this.putConversationsEmailMessagesDraft = function(conversationId, body) { 

      // verify the required parameter 'conversationId' is set
      if (conversationId === undefined || conversationId === null) {
        throw "Missing the required parameter 'conversationId' when calling putConversationsEmailMessagesDraft";
      }

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw "Missing the required parameter 'body' when calling putConversationsEmailMessagesDraft";
      }


      return this.apiClient.callApi(
        '/api/v2/conversations/emails/{conversationId}/messages/draft', 
        'PUT', 
        { 'conversationId': conversationId }, 
        {  }, 
        {  }, 
        {  }, 
        body, 
        ['PureCloud Auth'], 
        ['application/json'], 
        ['application/json']
      );
    };
  };

  return exports;
}));

},{"../ApiClient":8}],16:[function(require,module,exports){
(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['purecloud-platform-client-v2/ApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'));
  } else {
    // Browser globals (root is window)
    if (!root.platformClient) {
      root.platformClient = {};
    }
    root.platformClient.ExternalContactsApi = factory(root.platformClient.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * ExternalContacts service.
   * @module purecloud-platform-client-v2/api/ExternalContactsApi
   * @version 6.0.1
   */

  /**
   * Constructs a new ExternalContactsApi. 
   * @alias module:purecloud-platform-client-v2/api/ExternalContactsApi
   * @class
   * @param {module:purecloud-platform-client-v2/ApiClient} apiClient Optional API client implementation to use,
   * default to {@link module:purecloud-platform-client-v2/ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;



    /**
     * Delete an external contact
     * 
     * @param {String} contactId ExternalContact ID
     */
    this.deleteExternalcontactsContact = function(contactId) { 

      // verify the required parameter 'contactId' is set
      if (contactId === undefined || contactId === null) {
        throw "Missing the required parameter 'contactId' when calling deleteExternalcontactsContact";
      }


      return this.apiClient.callApi(
        '/api/v2/externalcontacts/contacts/{contactId}', 
        'DELETE', 
        { 'contactId': contactId }, 
        {  }, 
        {  }, 
        {  }, 
        null, 
        ['PureCloud Auth'], 
        ['application/json'], 
        ['application/json']
      );
    };


    /**
     * Delete a note for an external contact
     * 
     * @param {String} contactId ExternalContact Id
     * @param {String} noteId Note Id
     */
    this.deleteExternalcontactsContactNote = function(contactId, noteId) { 

      // verify the required parameter 'contactId' is set
      if (contactId === undefined || contactId === null) {
        throw "Missing the required parameter 'contactId' when calling deleteExternalcontactsContactNote";
      }

      // verify the required parameter 'noteId' is set
      if (noteId === undefined || noteId === null) {
        throw "Missing the required parameter 'noteId' when calling deleteExternalcontactsContactNote";
      }


      return this.apiClient.callApi(
        '/api/v2/externalcontacts/contacts/{contactId}/notes/{noteId}', 
        'DELETE', 
        { 'contactId': contactId,'noteId': noteId }, 
        {  }, 
        {  }, 
        {  }, 
        null, 
        ['PureCloud Auth'], 
        ['application/json'], 
        ['application/json']
      );
    };


    /**
     * Delete an external organization
     * 
     * @param {String} externalOrganizationId External Organization ID
     */
    this.deleteExternalcontactsOrganization = function(externalOrganizationId) { 

      // verify the required parameter 'externalOrganizationId' is set
      if (externalOrganizationId === undefined || externalOrganizationId === null) {
        throw "Missing the required parameter 'externalOrganizationId' when calling deleteExternalcontactsOrganization";
      }


      return this.apiClient.callApi(
        '/api/v2/externalcontacts/organizations/{externalOrganizationId}', 
        'DELETE', 
        { 'externalOrganizationId': externalOrganizationId }, 
        {  }, 
        {  }, 
        {  }, 
        null, 
        ['PureCloud Auth'], 
        ['application/json'], 
        ['application/json']
      );
    };


    /**
     * Delete a note for an external organization
     * 
     * @param {String} externalOrganizationId External Organization Id
     * @param {String} noteId Note Id
     */
    this.deleteExternalcontactsOrganizationNote = function(externalOrganizationId, noteId) { 

      // verify the required parameter 'externalOrganizationId' is set
      if (externalOrganizationId === undefined || externalOrganizationId === null) {
        throw "Missing the required parameter 'externalOrganizationId' when calling deleteExternalcontactsOrganizationNote";
      }

      // verify the required parameter 'noteId' is set
      if (noteId === undefined || noteId === null) {
        throw "Missing the required parameter 'noteId' when calling deleteExternalcontactsOrganizationNote";
      }


      return this.apiClient.callApi(
        '/api/v2/externalcontacts/organizations/{externalOrganizationId}/notes/{noteId}', 
        'DELETE', 
        { 'externalOrganizationId': externalOrganizationId,'noteId': noteId }, 
        {  }, 
        {  }, 
        {  }, 
        null, 
        ['PureCloud Auth'], 
        ['application/json'], 
        ['application/json']
      );
    };


    /**
     * Unlink the Trustor for this External Organization
     * 
     * @param {String} externalOrganizationId External Organization ID
     */
    this.deleteExternalcontactsOrganizationTrustor = function(externalOrganizationId) { 

      // verify the required parameter 'externalOrganizationId' is set
      if (externalOrganizationId === undefined || externalOrganizationId === null) {
        throw "Missing the required parameter 'externalOrganizationId' when calling deleteExternalcontactsOrganizationTrustor";
      }


      return this.apiClient.callApi(
        '/api/v2/externalcontacts/organizations/{externalOrganizationId}/trustor', 
        'DELETE', 
        { 'externalOrganizationId': externalOrganizationId }, 
        {  }, 
        {  }, 
        {  }, 
        null, 
        ['PureCloud Auth'], 
        ['application/json'], 
        ['application/json']
      );
    };


    /**
     * Delete a relationship
     * 
     * @param {String} relationshipId Relationship Id
     */
    this.deleteExternalcontactsRelationship = function(relationshipId) { 

      // verify the required parameter 'relationshipId' is set
      if (relationshipId === undefined || relationshipId === null) {
        throw "Missing the required parameter 'relationshipId' when calling deleteExternalcontactsRelationship";
      }


      return this.apiClient.callApi(
        '/api/v2/externalcontacts/relationships/{relationshipId}', 
        'DELETE', 
        { 'relationshipId': relationshipId }, 
        {  }, 
        {  }, 
        {  }, 
        null, 
        ['PureCloud Auth'], 
        ['application/json'], 
        ['application/json']
      );
    };


    /**
     * Fetch an external contact
     * 
     * @param {String} contactId ExternalContact ID
     * @param {Object} opts Optional parameters
     * @param {Array.<String>} opts.expand which fields, if any, to expand (externalOrganization,externalDataSources)
     */
    this.getExternalcontactsContact = function(contactId, opts) { 
      opts = opts || {};

      // verify the required parameter 'contactId' is set
      if (contactId === undefined || contactId === null) {
        throw "Missing the required parameter 'contactId' when calling getExternalcontactsContact";
      }


      return this.apiClient.callApi(
        '/api/v2/externalcontacts/contacts/{contactId}', 
        'GET', 
        { 'contactId': contactId }, 
        { 'expand': this.apiClient.buildCollectionParam(opts['expand'], 'multi') }, 
        {  }, 
        {  }, 
        null, 
        ['PureCloud Auth'], 
        ['application/json'], 
        ['application/json']
      );
    };


    /**
     * Fetch a note for an external contact
     * 
     * @param {String} contactId ExternalContact Id
     * @param {String} noteId Note Id
     * @param {Object} opts Optional parameters
     * @param {Array.<String>} opts.expand which fields, if any, to expand
     */
    this.getExternalcontactsContactNote = function(contactId, noteId, opts) { 
      opts = opts || {};

      // verify the required parameter 'contactId' is set
      if (contactId === undefined || contactId === null) {
        throw "Missing the required parameter 'contactId' when calling getExternalcontactsContactNote";
      }

      // verify the required parameter 'noteId' is set
      if (noteId === undefined || noteId === null) {
        throw "Missing the required parameter 'noteId' when calling getExternalcontactsContactNote";
      }


      return this.apiClient.callApi(
        '/api/v2/externalcontacts/contacts/{contactId}/notes/{noteId}', 
        'GET', 
        { 'contactId': contactId,'noteId': noteId }, 
        { 'expand': this.apiClient.buildCollectionParam(opts['expand'], 'multi') }, 
        {  }, 
        {  }, 
        null, 
        ['PureCloud Auth'], 
        ['application/json'], 
        ['application/json']
      );
    };


    /**
     * List notes for an external contact
     * 
     * @param {String} contactId ExternalContact Id
     * @param {Object} opts Optional parameters
     * @param {Number} opts.pageSize Page size (default to 20)
     * @param {Number} opts.pageNumber Page number (default to 1)
     * @param {String} opts.sortOrder Sort order
     * @param {Array.<String>} opts.expand which fields, if any, to expand
     */
    this.getExternalcontactsContactNotes = function(contactId, opts) { 
      opts = opts || {};

      // verify the required parameter 'contactId' is set
      if (contactId === undefined || contactId === null) {
        throw "Missing the required parameter 'contactId' when calling getExternalcontactsContactNotes";
      }


      return this.apiClient.callApi(
        '/api/v2/externalcontacts/contacts/{contactId}/notes', 
        'GET', 
        { 'contactId': contactId }, 
        { 'pageSize': opts['pageSize'],'pageNumber': opts['pageNumber'],'sortOrder': opts['sortOrder'],'expand': this.apiClient.buildCollectionParam(opts['expand'], 'multi') }, 
        {  }, 
        {  }, 
        null, 
        ['PureCloud Auth'], 
        ['application/json'], 
        ['application/json']
      );
    };


    /**
     * Search for external contacts
     * 
     * @param {Object} opts Optional parameters
     * @param {Number} opts.pageSize Page size (default to 20)
     * @param {Number} opts.pageNumber Page number (default to 1)
     * @param {String} opts.q User supplied search keywords (no special syntax is currently supported)
     * @param {String} opts.sortOrder Sort order
     * @param {Array.<String>} opts.expand which fields, if any, to expand
     */
    this.getExternalcontactsContacts = function(opts) { 
      opts = opts || {};


      return this.apiClient.callApi(
        '/api/v2/externalcontacts/contacts', 
        'GET', 
        {  }, 
        { 'pageSize': opts['pageSize'],'pageNumber': opts['pageNumber'],'q': opts['q'],'sortOrder': opts['sortOrder'],'expand': this.apiClient.buildCollectionParam(opts['expand'], 'multi') }, 
        {  }, 
        {  }, 
        null, 
        ['PureCloud Auth'], 
        ['application/json'], 
        ['application/json']
      );
    };


    /**
     * Fetch an external organization
     * 
     * @param {String} externalOrganizationId External Organization ID
     * @param {Object} opts Optional parameters
     * @param {module:purecloud-platform-client-v2/model/String} opts.expand which fields, if any, to expand (externalDataSources)
     * @param {Boolean} opts.includeTrustors (true or false) whether or not to include trustor information embedded in the externalOrganization
     */
    this.getExternalcontactsOrganization = function(externalOrganizationId, opts) { 
      opts = opts || {};

      // verify the required parameter 'externalOrganizationId' is set
      if (externalOrganizationId === undefined || externalOrganizationId === null) {
        throw "Missing the required parameter 'externalOrganizationId' when calling getExternalcontactsOrganization";
      }


      return this.apiClient.callApi(
        '/api/v2/externalcontacts/organizations/{externalOrganizationId}', 
        'GET', 
        { 'externalOrganizationId': externalOrganizationId }, 
        { 'expand': opts['expand'],'includeTrustors': opts['includeTrustors'] }, 
        {  }, 
        {  }, 
        null, 
        ['PureCloud Auth'], 
        ['application/json'], 
        ['application/json']
      );
    };


    /**
     * Search for external contacts in an external organization
     * 
     * @param {String} externalOrganizationId External Organization ID
     * @param {Object} opts Optional parameters
     * @param {Number} opts.pageSize Page size (default to 20)
     * @param {Number} opts.pageNumber Page number (default to 1)
     * @param {String} opts.q User supplied search keywords (no special syntax is currently supported)
     * @param {String} opts.sortOrder Sort order
     * @param {Array.<String>} opts.expand which fields, if any, to expand
     */
    this.getExternalcontactsOrganizationContacts = function(externalOrganizationId, opts) { 
      opts = opts || {};

      // verify the required parameter 'externalOrganizationId' is set
      if (externalOrganizationId === undefined || externalOrganizationId === null) {
        throw "Missing the required parameter 'externalOrganizationId' when calling getExternalcontactsOrganizationContacts";
      }


      return this.apiClient.callApi(
        '/api/v2/externalcontacts/organizations/{externalOrganizationId}/contacts', 
        'GET', 
        { 'externalOrganizationId': externalOrganizationId }, 
        { 'pageSize': opts['pageSize'],'pageNumber': opts['pageNumber'],'q': opts['q'],'sortOrder': opts['sortOrder'],'expand': this.apiClient.buildCollectionParam(opts['expand'], 'multi') }, 
        {  }, 
        {  }, 
        null, 
        ['PureCloud Auth'], 
        ['application/json'], 
        ['application/json']
      );
    };


    /**
     * Fetch a note for an external organization
     * 
     * @param {String} externalOrganizationId External Organization Id
     * @param {String} noteId Note Id
     * @param {Object} opts Optional parameters
     * @param {Array.<String>} opts.expand which fields, if any, to expand
     */
    this.getExternalcontactsOrganizationNote = function(externalOrganizationId, noteId, opts) { 
      opts = opts || {};

      // verify the required parameter 'externalOrganizationId' is set
      if (externalOrganizationId === undefined || externalOrganizationId === null) {
        throw "Missing the required parameter 'externalOrganizationId' when calling getExternalcontactsOrganizationNote";
      }

      // verify the required parameter 'noteId' is set
      if (noteId === undefined || noteId === null) {
        throw "Missing the required parameter 'noteId' when calling getExternalcontactsOrganizationNote";
      }


      return this.apiClient.callApi(
        '/api/v2/externalcontacts/organizations/{externalOrganizationId}/notes/{noteId}', 
        'GET', 
        { 'externalOrganizationId': externalOrganizationId,'noteId': noteId }, 
        { 'expand': this.apiClient.buildCollectionParam(opts['expand'], 'multi') }, 
        {  }, 
        {  }, 
        null, 
        ['PureCloud Auth'], 
        ['application/json'], 
        ['application/json']
      );
    };


    /**
     * List notes for an external organization
     * 
     * @param {String} externalOrganizationId External Organization Id
     * @param {Object} opts Optional parameters
     * @param {Number} opts.pageSize Page size (default to 20)
     * @param {Number} opts.pageNumber Page number (default to 1)
     * @param {String} opts.sortOrder Sort order
     * @param {Array.<String>} opts.expand which fields, if any, to expand
     */
    this.getExternalcontactsOrganizationNotes = function(externalOrganizationId, opts) { 
      opts = opts || {};

      // verify the required parameter 'externalOrganizationId' is set
      if (externalOrganizationId === undefined || externalOrganizationId === null) {
        throw "Missing the required parameter 'externalOrganizationId' when calling getExternalcontactsOrganizationNotes";
      }


      return this.apiClient.callApi(
        '/api/v2/externalcontacts/organizations/{externalOrganizationId}/notes', 
        'GET', 
        { 'externalOrganizationId': externalOrganizationId }, 
        { 'pageSize': opts['pageSize'],'pageNumber': opts['pageNumber'],'sortOrder': opts['sortOrder'],'expand': this.apiClient.buildCollectionParam(opts['expand'], 'multi') }, 
        {  }, 
        {  }, 
        null, 
        ['PureCloud Auth'], 
        ['application/json'], 
        ['application/json']
      );
    };


    /**
     * Fetch a relationship for an external organization
     * 
     * @param {String} externalOrganizationId External Organization ID
     * @param {Object} opts Optional parameters
     * @param {Number} opts.pageSize Page size (default to 20)
     * @param {Number} opts.pageNumber Page number (default to 1)
     * @param {module:purecloud-platform-client-v2/model/String} opts.expand which fields, if any, to expand
     * @param {String} opts.sortOrder Sort order
     */
    this.getExternalcontactsOrganizationRelationships = function(externalOrganizationId, opts) { 
      opts = opts || {};

      // verify the required parameter 'externalOrganizationId' is set
      if (externalOrganizationId === undefined || externalOrganizationId === null) {
        throw "Missing the required parameter 'externalOrganizationId' when calling getExternalcontactsOrganizationRelationships";
      }


      return this.apiClient.callApi(
        '/api/v2/externalcontacts/organizations/{externalOrganizationId}/relationships', 
        'GET', 
        { 'externalOrganizationId': externalOrganizationId }, 
        { 'pageSize': opts['pageSize'],'pageNumber': opts['pageNumber'],'expand': opts['expand'],'sortOrder': opts['sortOrder'] }, 
        {  }, 
        {  }, 
        null, 
        ['PureCloud Auth'], 
        ['application/json'], 
        ['application/json']
      );
    };


    /**
     * Search for external organizations
     * 
     * @param {Object} opts Optional parameters
     * @param {Number} opts.pageSize Page size (default to 20)
     * @param {Number} opts.pageNumber Page number (default to 1)
     * @param {String} opts.q Search query
     * @param {Array.<String>} opts.trustorId Search for external organizations by trustorIds (limit 25). If supplied, the &#39;q&#39; parameters is ignored. Items are returned in the order requested
     * @param {String} opts.sortOrder Sort order
     * @param {Array.<String>} opts.expand which fields, if any, to expand
     * @param {Boolean} opts.includeTrustors (true or false) whether or not to include trustor information embedded in the externalOrganization
     */
    this.getExternalcontactsOrganizations = function(opts) { 
      opts = opts || {};


      return this.apiClient.callApi(
        '/api/v2/externalcontacts/organizations', 
        'GET', 
        {  }, 
        { 'pageSize': opts['pageSize'],'pageNumber': opts['pageNumber'],'q': opts['q'],'trustorId': this.apiClient.buildCollectionParam(opts['trustorId'], 'multi'),'sortOrder': opts['sortOrder'],'expand': this.apiClient.buildCollectionParam(opts['expand'], 'multi'),'includeTrustors': opts['includeTrustors'] }, 
        {  }, 
        {  }, 
        null, 
        ['PureCloud Auth'], 
        ['application/json'], 
        ['application/json']
      );
    };


    /**
     * Fetch a relationship
     * 
     * @param {String} relationshipId Relationship Id
     * @param {Object} opts Optional parameters
     * @param {module:purecloud-platform-client-v2/model/String} opts.expand which fields, if any, to expand
     */
    this.getExternalcontactsRelationship = function(relationshipId, opts) { 
      opts = opts || {};

      // verify the required parameter 'relationshipId' is set
      if (relationshipId === undefined || relationshipId === null) {
        throw "Missing the required parameter 'relationshipId' when calling getExternalcontactsRelationship";
      }


      return this.apiClient.callApi(
        '/api/v2/externalcontacts/relationships/{relationshipId}', 
        'GET', 
        { 'relationshipId': relationshipId }, 
        { 'expand': opts['expand'] }, 
        {  }, 
        {  }, 
        null, 
        ['PureCloud Auth'], 
        ['application/json'], 
        ['application/json']
      );
    };


    /**
     * Lookup contacts and externalOrganizations based on an attribute
     * 
     * @param {String} lookupVal User supplied value to lookup contacts/externalOrganizations (supports email addresses, e164 phone numbers, Twitter screen names)
     * @param {Object} opts Optional parameters
     * @param {Array.<String>} opts.expand which field, if any, to expand
     */
    this.getExternalcontactsReversewhitepageslookup = function(lookupVal, opts) { 
      opts = opts || {};

      // verify the required parameter 'lookupVal' is set
      if (lookupVal === undefined || lookupVal === null) {
        throw "Missing the required parameter 'lookupVal' when calling getExternalcontactsReversewhitepageslookup";
      }


      return this.apiClient.callApi(
        '/api/v2/externalcontacts/reversewhitepageslookup', 
        'GET', 
        {  }, 
        { 'lookupVal': lookupVal,'expand': this.apiClient.buildCollectionParam(opts['expand'], 'multi') }, 
        {  }, 
        {  }, 
        null, 
        ['PureCloud Auth'], 
        ['application/json'], 
        ['application/json']
      );
    };


    /**
     * Create a note for an external contact
     * 
     * @param {String} contactId ExternalContact Id
     * @param {Object} opts Optional parameters
     * @param {module:purecloud-platform-client-v2/model/Note} opts.body ExternalContact
     */
    this.postExternalcontactsContactNotes = function(contactId, opts) { 
      opts = opts || {};

      // verify the required parameter 'contactId' is set
      if (contactId === undefined || contactId === null) {
        throw "Missing the required parameter 'contactId' when calling postExternalcontactsContactNotes";
      }


      return this.apiClient.callApi(
        '/api/v2/externalcontacts/contacts/{contactId}/notes', 
        'POST', 
        { 'contactId': contactId }, 
        {  }, 
        {  }, 
        {  }, 
        opts['body'], 
        ['PureCloud Auth'], 
        ['application/json'], 
        ['application/json']
      );
    };


    /**
     * Create an external contact
     * 
     * @param {Object} opts Optional parameters
     * @param {module:purecloud-platform-client-v2/model/ExternalContact} opts.body ExternalContact
     */
    this.postExternalcontactsContacts = function(opts) { 
      opts = opts || {};


      return this.apiClient.callApi(
        '/api/v2/externalcontacts/contacts', 
        'POST', 
        {  }, 
        {  }, 
        {  }, 
        {  }, 
        opts['body'], 
        ['PureCloud Auth'], 
        ['application/json'], 
        ['application/json']
      );
    };


    /**
     * Create a note for an external organization
     * 
     * @param {String} externalOrganizationId External Organization Id
     * @param {Object} opts Optional parameters
     * @param {module:purecloud-platform-client-v2/model/Note} opts.body ExternalContact
     */
    this.postExternalcontactsOrganizationNotes = function(externalOrganizationId, opts) { 
      opts = opts || {};

      // verify the required parameter 'externalOrganizationId' is set
      if (externalOrganizationId === undefined || externalOrganizationId === null) {
        throw "Missing the required parameter 'externalOrganizationId' when calling postExternalcontactsOrganizationNotes";
      }


      return this.apiClient.callApi(
        '/api/v2/externalcontacts/organizations/{externalOrganizationId}/notes', 
        'POST', 
        { 'externalOrganizationId': externalOrganizationId }, 
        {  }, 
        {  }, 
        {  }, 
        opts['body'], 
        ['PureCloud Auth'], 
        ['application/json'], 
        ['application/json']
      );
    };


    /**
     * Create an external organization
     * 
     * @param {Object} opts Optional parameters
     * @param {module:purecloud-platform-client-v2/model/ExternalOrganization} opts.body ExternalOrganization
     */
    this.postExternalcontactsOrganizations = function(opts) { 
      opts = opts || {};


      return this.apiClient.callApi(
        '/api/v2/externalcontacts/organizations', 
        'POST', 
        {  }, 
        {  }, 
        {  }, 
        {  }, 
        opts['body'], 
        ['PureCloud Auth'], 
        ['application/json'], 
        ['application/json']
      );
    };


    /**
     * Create a relationship
     * 
     * @param {Object} opts Optional parameters
     * @param {module:purecloud-platform-client-v2/model/Relationship} opts.body Relationship
     */
    this.postExternalcontactsRelationships = function(opts) { 
      opts = opts || {};


      return this.apiClient.callApi(
        '/api/v2/externalcontacts/relationships', 
        'POST', 
        {  }, 
        {  }, 
        {  }, 
        {  }, 
        opts['body'], 
        ['PureCloud Auth'], 
        ['application/json'], 
        ['application/json']
      );
    };


    /**
     * Update an external contact
     * 
     * @param {String} contactId ExternalContact ID
     * @param {Object} opts Optional parameters
     * @param {module:purecloud-platform-client-v2/model/ExternalContact} opts.body ExternalContact
     */
    this.putExternalcontactsContact = function(contactId, opts) { 
      opts = opts || {};

      // verify the required parameter 'contactId' is set
      if (contactId === undefined || contactId === null) {
        throw "Missing the required parameter 'contactId' when calling putExternalcontactsContact";
      }


      return this.apiClient.callApi(
        '/api/v2/externalcontacts/contacts/{contactId}', 
        'PUT', 
        { 'contactId': contactId }, 
        {  }, 
        {  }, 
        {  }, 
        opts['body'], 
        ['PureCloud Auth'], 
        ['application/json'], 
        ['application/json']
      );
    };


    /**
     * Update a note for an external contact
     * 
     * @param {String} contactId ExternalContact Id
     * @param {String} noteId Note Id
     * @param {Object} opts Optional parameters
     * @param {module:purecloud-platform-client-v2/model/Note} opts.body Note
     */
    this.putExternalcontactsContactNote = function(contactId, noteId, opts) { 
      opts = opts || {};

      // verify the required parameter 'contactId' is set
      if (contactId === undefined || contactId === null) {
        throw "Missing the required parameter 'contactId' when calling putExternalcontactsContactNote";
      }

      // verify the required parameter 'noteId' is set
      if (noteId === undefined || noteId === null) {
        throw "Missing the required parameter 'noteId' when calling putExternalcontactsContactNote";
      }


      return this.apiClient.callApi(
        '/api/v2/externalcontacts/contacts/{contactId}/notes/{noteId}', 
        'PUT', 
        { 'contactId': contactId,'noteId': noteId }, 
        {  }, 
        {  }, 
        {  }, 
        opts['body'], 
        ['PureCloud Auth'], 
        ['application/json'], 
        ['application/json']
      );
    };


    /**
     * Associate an external contact with a conversation
     * 
     * @param {String} conversationId Conversation ID
     * @param {Object} opts Optional parameters
     * @param {module:purecloud-platform-client-v2/model/ConversationAssociation} opts.body ConversationAssociation
     */
    this.putExternalcontactsConversation = function(conversationId, opts) { 
      opts = opts || {};

      // verify the required parameter 'conversationId' is set
      if (conversationId === undefined || conversationId === null) {
        throw "Missing the required parameter 'conversationId' when calling putExternalcontactsConversation";
      }


      return this.apiClient.callApi(
        '/api/v2/externalcontacts/conversations/{conversationId}', 
        'PUT', 
        { 'conversationId': conversationId }, 
        {  }, 
        {  }, 
        {  }, 
        opts['body'], 
        ['PureCloud Auth'], 
        ['application/json'], 
        ['application/json']
      );
    };


    /**
     * Update an external organization
     * 
     * @param {String} externalOrganizationId External Organization ID
     * @param {Object} opts Optional parameters
     * @param {module:purecloud-platform-client-v2/model/ExternalOrganization} opts.body ExternalOrganization
     */
    this.putExternalcontactsOrganization = function(externalOrganizationId, opts) { 
      opts = opts || {};

      // verify the required parameter 'externalOrganizationId' is set
      if (externalOrganizationId === undefined || externalOrganizationId === null) {
        throw "Missing the required parameter 'externalOrganizationId' when calling putExternalcontactsOrganization";
      }


      return this.apiClient.callApi(
        '/api/v2/externalcontacts/organizations/{externalOrganizationId}', 
        'PUT', 
        { 'externalOrganizationId': externalOrganizationId }, 
        {  }, 
        {  }, 
        {  }, 
        opts['body'], 
        ['PureCloud Auth'], 
        ['application/json'], 
        ['application/json']
      );
    };


    /**
     * Update a note for an external organization
     * 
     * @param {String} externalOrganizationId External Organization Id
     * @param {String} noteId Note Id
     * @param {Object} opts Optional parameters
     * @param {module:purecloud-platform-client-v2/model/Note} opts.body Note
     */
    this.putExternalcontactsOrganizationNote = function(externalOrganizationId, noteId, opts) { 
      opts = opts || {};

      // verify the required parameter 'externalOrganizationId' is set
      if (externalOrganizationId === undefined || externalOrganizationId === null) {
        throw "Missing the required parameter 'externalOrganizationId' when calling putExternalcontactsOrganizationNote";
      }

      // verify the required parameter 'noteId' is set
      if (noteId === undefined || noteId === null) {
        throw "Missing the required parameter 'noteId' when calling putExternalcontactsOrganizationNote";
      }


      return this.apiClient.callApi(
        '/api/v2/externalcontacts/organizations/{externalOrganizationId}/notes/{noteId}', 
        'PUT', 
        { 'externalOrganizationId': externalOrganizationId,'noteId': noteId }, 
        {  }, 
        {  }, 
        {  }, 
        opts['body'], 
        ['PureCloud Auth'], 
        ['application/json'], 
        ['application/json']
      );
    };


    /**
     * Links a Trustor with an Extenral Organization
     * 
     * @param {String} externalOrganizationId External Organization ID
     * @param {String} trustorId Trustor ID
     */
    this.putExternalcontactsOrganizationTrustorTrustorId = function(externalOrganizationId, trustorId) { 

      // verify the required parameter 'externalOrganizationId' is set
      if (externalOrganizationId === undefined || externalOrganizationId === null) {
        throw "Missing the required parameter 'externalOrganizationId' when calling putExternalcontactsOrganizationTrustorTrustorId";
      }

      // verify the required parameter 'trustorId' is set
      if (trustorId === undefined || trustorId === null) {
        throw "Missing the required parameter 'trustorId' when calling putExternalcontactsOrganizationTrustorTrustorId";
      }


      return this.apiClient.callApi(
        '/api/v2/externalcontacts/organizations/{externalOrganizationId}/trustor/{trustorId}', 
        'PUT', 
        { 'externalOrganizationId': externalOrganizationId,'trustorId': trustorId }, 
        {  }, 
        {  }, 
        {  }, 
        null, 
        ['PureCloud Auth'], 
        ['application/json'], 
        ['application/json']
      );
    };


    /**
     * Update a relationship
     * 
     * @param {String} relationshipId Relationship Id
     * @param {Object} opts Optional parameters
     * @param {module:purecloud-platform-client-v2/model/Relationship} opts.body Relationship
     */
    this.putExternalcontactsRelationship = function(relationshipId, opts) { 
      opts = opts || {};

      // verify the required parameter 'relationshipId' is set
      if (relationshipId === undefined || relationshipId === null) {
        throw "Missing the required parameter 'relationshipId' when calling putExternalcontactsRelationship";
      }


      return this.apiClient.callApi(
        '/api/v2/externalcontacts/relationships/{relationshipId}', 
        'PUT', 
        { 'relationshipId': relationshipId }, 
        {  }, 
        {  }, 
        {  }, 
        opts['body'], 
        ['PureCloud Auth'], 
        ['application/json'], 
        ['application/json']
      );
    };
  };

  return exports;
}));

},{"../ApiClient":8}],17:[function(require,module,exports){
(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['purecloud-platform-client-v2/ApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'));
  } else {
    // Browser globals (root is window)
    if (!root.platformClient) {
      root.platformClient = {};
    }
    root.platformClient.FaxApi = factory(root.platformClient.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * Fax service.
   * @module purecloud-platform-client-v2/api/FaxApi
   * @version 6.0.1
   */

  /**
   * Constructs a new FaxApi. 
   * @alias module:purecloud-platform-client-v2/api/FaxApi
   * @class
   * @param {module:purecloud-platform-client-v2/ApiClient} apiClient Optional API client implementation to use,
   * default to {@link module:purecloud-platform-client-v2/ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;



    /**
     * Delete a fax document.
     * 
     * @param {String} documentId Document ID
     */
    this.deleteFaxDocument = function(documentId) { 

      // verify the required parameter 'documentId' is set
      if (documentId === undefined || documentId === null) {
        throw "Missing the required parameter 'documentId' when calling deleteFaxDocument";
      }


      return this.apiClient.callApi(
        '/api/v2/fax/documents/{documentId}', 
        'DELETE', 
        { 'documentId': documentId }, 
        {  }, 
        {  }, 
        {  }, 
        null, 
        ['PureCloud Auth'], 
        ['application/json'], 
        ['application/json']
      );
    };


    /**
     * Get a document.
     * 
     * @param {String} documentId Document ID
     */
    this.getFaxDocument = function(documentId) { 

      // verify the required parameter 'documentId' is set
      if (documentId === undefined || documentId === null) {
        throw "Missing the required parameter 'documentId' when calling getFaxDocument";
      }


      return this.apiClient.callApi(
        '/api/v2/fax/documents/{documentId}', 
        'GET', 
        { 'documentId': documentId }, 
        {  }, 
        {  }, 
        {  }, 
        null, 
        ['PureCloud Auth'], 
        ['application/json'], 
        ['application/json']
      );
    };


    /**
     * Download a fax document.
     * 
     * @param {String} documentId Document ID
     */
    this.getFaxDocumentContent = function(documentId) { 

      // verify the required parameter 'documentId' is set
      if (documentId === undefined || documentId === null) {
        throw "Missing the required parameter 'documentId' when calling getFaxDocumentContent";
      }


      return this.apiClient.callApi(
        '/api/v2/fax/documents/{documentId}/content', 
        'GET', 
        { 'documentId': documentId }, 
        {  }, 
        {  }, 
        {  }, 
        null, 
        ['PureCloud Auth'], 
        ['application/json'], 
        ['application/json']
      );
    };


    /**
     * Get a list of fax documents.
     * 
     * @param {Object} opts Optional parameters
     * @param {Number} opts.pageSize Page size (default to 25)
     * @param {Number} opts.pageNumber Page number (default to 1)
     */
    this.getFaxDocuments = function(opts) { 
      opts = opts || {};


      return this.apiClient.callApi(
        '/api/v2/fax/documents', 
        'GET', 
        {  }, 
        { 'pageSize': opts['pageSize'],'pageNumber': opts['pageNumber'] }, 
        {  }, 
        {  }, 
        null, 
        ['PureCloud Auth'], 
        ['application/json'], 
        ['application/json']
      );
    };


    /**
     * Get fax summary
     * 
     */
    this.getFaxSummary = function() { 


      return this.apiClient.callApi(
        '/api/v2/fax/summary', 
        'GET', 
        {  }, 
        {  }, 
        {  }, 
        {  }, 
        null, 
        ['PureCloud Auth'], 
        ['application/json'], 
        ['application/json']
      );
    };


    /**
     * Update a fax document.
     * 
     * @param {String} documentId Document ID
     * @param {module:purecloud-platform-client-v2/model/FaxDocument} body Document
     */
    this.putFaxDocument = function(documentId, body) { 

      // verify the required parameter 'documentId' is set
      if (documentId === undefined || documentId === null) {
        throw "Missing the required parameter 'documentId' when calling putFaxDocument";
      }

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw "Missing the required parameter 'body' when calling putFaxDocument";
      }


      return this.apiClient.callApi(
        '/api/v2/fax/documents/{documentId}', 
        'PUT', 
        { 'documentId': documentId }, 
        {  }, 
        {  }, 
        {  }, 
        body, 
        ['PureCloud Auth'], 
        ['application/json'], 
        ['application/json']
      );
    };
  };

  return exports;
}));

},{"../ApiClient":8}],18:[function(require,module,exports){
(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['purecloud-platform-client-v2/ApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'));
  } else {
    // Browser globals (root is window)
    if (!root.platformClient) {
      root.platformClient = {};
    }
    root.platformClient.GeolocationApi = factory(root.platformClient.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * Geolocation service.
   * @module purecloud-platform-client-v2/api/GeolocationApi
   * @version 6.0.1
   */

  /**
   * Constructs a new GeolocationApi. 
   * @alias module:purecloud-platform-client-v2/api/GeolocationApi
   * @class
   * @param {module:purecloud-platform-client-v2/ApiClient} apiClient Optional API client implementation to use,
   * default to {@link module:purecloud-platform-client-v2/ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;



    /**
     * Get a organization&#39;s GeolocationSettings
     * 
     */
    this.getGeolocationsSettings = function() { 


      return this.apiClient.callApi(
        '/api/v2/geolocations/settings', 
        'GET', 
        {  }, 
        {  }, 
        {  }, 
        {  }, 
        null, 
        ['PureCloud Auth'], 
        ['application/json'], 
        ['application/json']
      );
    };


    /**
     * Get a user&#39;s Geolocation
     * 
     * @param {String} userId user Id
     * @param {String} clientId client Id
     */
    this.getUserGeolocation = function(userId, clientId) { 

      // verify the required parameter 'userId' is set
      if (userId === undefined || userId === null) {
        throw "Missing the required parameter 'userId' when calling getUserGeolocation";
      }

      // verify the required parameter 'clientId' is set
      if (clientId === undefined || clientId === null) {
        throw "Missing the required parameter 'clientId' when calling getUserGeolocation";
      }


      return this.apiClient.callApi(
        '/api/v2/users/{userId}/geolocations/{clientId}', 
        'GET', 
        { 'userId': userId,'clientId': clientId }, 
        {  }, 
        {  }, 
        {  }, 
        null, 
        ['PureCloud Auth'], 
        ['application/json'], 
        ['application/json']
      );
    };


    /**
     * Patch a organization&#39;s GeolocationSettings
     * 
     * @param {module:purecloud-platform-client-v2/model/GeolocationSettings} body Geolocation settings
     */
    this.patchGeolocationsSettings = function(body) { 

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw "Missing the required parameter 'body' when calling patchGeolocationsSettings";
      }


      return this.apiClient.callApi(
        '/api/v2/geolocations/settings', 
        'PATCH', 
        {  }, 
        {  }, 
        {  }, 
        {  }, 
        body, 
        ['PureCloud Auth'], 
        ['application/json'], 
        ['application/json']
      );
    };


    /**
     * Patch a user&#39;s Geolocation
     * The geolocation object can be patched one of three ways. Option 1: Set the &#39;primary&#39; property to true. This will set the client as the user&#39;s primary geolocation source.  Option 2: Provide the &#39;latitude&#39; and &#39;longitude&#39; values.  This will enqueue an asynchronous update of the &#39;city&#39;, &#39;region&#39;, and &#39;country&#39;, generating a notification. A subsequent GET operation will include the new values for &#39;city&#39;, &#39;region&#39; and &#39;country&#39;.  Option 3:  Provide the &#39;city&#39;, &#39;region&#39;, &#39;country&#39; values.  Option 1 can be combined with Option 2 or Option 3.  For example, update the client as primary and provide latitude and longitude values.
     * @param {String} userId user Id
     * @param {String} clientId client Id
     * @param {module:purecloud-platform-client-v2/model/Geolocation} body Geolocation
     */
    this.patchUserGeolocation = function(userId, clientId, body) { 

      // verify the required parameter 'userId' is set
      if (userId === undefined || userId === null) {
        throw "Missing the required parameter 'userId' when calling patchUserGeolocation";
      }

      // verify the required parameter 'clientId' is set
      if (clientId === undefined || clientId === null) {
        throw "Missing the required parameter 'clientId' when calling patchUserGeolocation";
      }

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw "Missing the required parameter 'body' when calling patchUserGeolocation";
      }


      return this.apiClient.callApi(
        '/api/v2/users/{userId}/geolocations/{clientId}', 
        'PATCH', 
        { 'userId': userId,'clientId': clientId }, 
        {  }, 
        {  }, 
        {  }, 
        body, 
        ['PureCloud Auth'], 
        ['application/json'], 
        ['application/json']
      );
    };
  };

  return exports;
}));

},{"../ApiClient":8}],19:[function(require,module,exports){
(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['purecloud-platform-client-v2/ApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'));
  } else {
    // Browser globals (root is window)
    if (!root.platformClient) {
      root.platformClient = {};
    }
    root.platformClient.GreetingsApi = factory(root.platformClient.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * Greetings service.
   * @module purecloud-platform-client-v2/api/GreetingsApi
   * @version 6.0.1
   */

  /**
   * Constructs a new GreetingsApi. 
   * @alias module:purecloud-platform-client-v2/api/GreetingsApi
   * @class
   * @param {module:purecloud-platform-client-v2/ApiClient} apiClient Optional API client implementation to use,
   * default to {@link module:purecloud-platform-client-v2/ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;



    /**
     * Deletes a Greeting with the given GreetingId
     * 
     * @param {String} greetingId Greeting ID
     */
    this.deleteGreeting = function(greetingId) { 

      // verify the required parameter 'greetingId' is set
      if (greetingId === undefined || greetingId === null) {
        throw "Missing the required parameter 'greetingId' when calling deleteGreeting";
      }


      return this.apiClient.callApi(
        '/api/v2/greetings/{greetingId}', 
        'DELETE', 
        { 'greetingId': greetingId }, 
        {  }, 
        {  }, 
        {  }, 
        null, 
        ['PureCloud Auth'], 
        ['application/json'], 
        ['application/json']
      );
    };


    /**
     * Get a Greeting with the given GreetingId
     * 
     * @param {String} greetingId Greeting ID
     */
    this.getGreeting = function(greetingId) { 

      // verify the required parameter 'greetingId' is set
      if (greetingId === undefined || greetingId === null) {
        throw "Missing the required parameter 'greetingId' when calling getGreeting";
      }


      return this.apiClient.callApi(
        '/api/v2/greetings/{greetingId}', 
        'GET', 
        { 'greetingId': greetingId }, 
        {  }, 
        {  }, 
        {  }, 
        null, 
        ['PureCloud Auth'], 
        ['application/json'], 
        ['application/json']
      );
    };


    /**
     * Get media playback URI for this greeting
     * 
     * @param {String} greetingId Greeting ID
     * @param {Object} opts Optional parameters
     * @param {module:purecloud-platform-client-v2/model/String} opts.formatId The desired media format. (default to WAV)
     */
    this.getGreetingMedia = function(greetingId, opts) { 
      opts = opts || {};

      // verify the required parameter 'greetingId' is set
      if (greetingId === undefined || greetingId === null) {
        throw "Missing the required parameter 'greetingId' when calling getGreetingMedia";
      }


      return this.apiClient.callApi(
        '/api/v2/greetings/{greetingId}/media', 
        'GET', 
        { 'greetingId': greetingId }, 
        { 'formatId': opts['formatId'] }, 
        {  }, 
        {  }, 
        null, 
        ['PureCloud Auth'], 
        ['application/json'], 
        ['application/json']
      );
    };


    /**
     * Gets an Organization&#39;s Greetings
     * 
     * @param {Object} opts Optional parameters
     * @param {Number} opts.pageSize Page size (default to 25)
     * @param {Number} opts.pageNumber Page number (default to 1)
     */
    this.getGreetings = function(opts) { 
      opts = opts || {};


      return this.apiClient.callApi(
        '/api/v2/greetings', 
        'GET', 
        {  }, 
        { 'pageSize': opts['pageSize'],'pageNumber': opts['pageNumber'] }, 
        {  }, 
        {  }, 
        null, 
        ['PureCloud Auth'], 
        ['application/json'], 
        ['application/json']
      );
    };


    /**
     * Get an Organization&#39;s DefaultGreetingList
     * 
     */
    this.getGreetingsDefaults = function() { 


      return this.apiClient.callApi(
        '/api/v2/greetings/defaults', 
        'GET', 
        {  }, 
        {  }, 
        {  }, 
        {  }, 
        null, 
        ['PureCloud Auth'], 
        ['application/json'], 
        ['application/json']
      );
    };


    /**
     * Get a list of the Group&#39;s Greetings
     * 
     * @param {String} groupId Group ID
     * @param {Object} opts Optional parameters
     * @param {Number} opts.pageSize Page size (default to 25)
     * @param {Number} opts.pageNumber Page number (default to 1)
     */
    this.getGroupGreetings = function(groupId, opts) { 
      opts = opts || {};

      // verify the required parameter 'groupId' is set
      if (groupId === undefined || groupId === null) {
        throw "Missing the required parameter 'groupId' when calling getGroupGreetings";
      }


      return this.apiClient.callApi(
        '/api/v2/groups/{groupId}/greetings', 
        'GET', 
        { 'groupId': groupId }, 
        { 'pageSize': opts['pageSize'],'pageNumber': opts['pageNumber'] }, 
        {  }, 
        {  }, 
        null, 
        ['PureCloud Auth'], 
        ['application/json'], 
        ['application/json']
      );
    };


    /**
     * Grabs the list of Default Greetings given a Group&#39;s ID
     * 
     * @param {String} groupId Group ID
     */
    this.getGroupGreetingsDefaults = function(groupId) { 

      // verify the required parameter 'groupId' is set
      if (groupId === undefined || groupId === null) {
        throw "Missing the required parameter 'groupId' when calling getGroupGreetingsDefaults";
      }


      return this.apiClient.callApi(
        '/api/v2/groups/{groupId}/greetings/defaults', 
        'GET', 
        { 'groupId': groupId }, 
        {  }, 
        {  }, 
        {  }, 
        null, 
        ['PureCloud Auth'], 
        ['application/json'], 
        ['application/json']
      );
    };


    /**
     * Get a list of the User&#39;s Greetings
     * 
     * @param {String} userId User ID
     * @param {Object} opts Optional parameters
     * @param {Number} opts.pageSize Page size (default to 25)
     * @param {Number} opts.pageNumber Page number (default to 1)
     */
    this.getUserGreetings = function(userId, opts) { 
      opts = opts || {};

      // verify the required parameter 'userId' is set
      if (userId === undefined || userId === null) {
        throw "Missing the required parameter 'userId' when calling getUserGreetings";
      }


      return this.apiClient.callApi(
        '/api/v2/users/{userId}/greetings', 
        'GET', 
        { 'userId': userId }, 
        { 'pageSize': opts['pageSize'],'pageNumber': opts['pageNumber'] }, 
        {  }, 
        {  }, 
        null, 
        ['PureCloud Auth'], 
        ['application/json'], 
        ['application/json']
      );
    };


    /**
     * Grabs the list of Default Greetings given a User&#39;s ID
     * 
     * @param {String} userId User ID
     */
    this.getUserGreetingsDefaults = function(userId) { 

      // verify the required parameter 'userId' is set
      if (userId === undefined || userId === null) {
        throw "Missing the required parameter 'userId' when calling getUserGreetingsDefaults";
      }


      return this.apiClient.callApi(
        '/api/v2/users/{userId}/greetings/defaults', 
        'GET', 
        { 'userId': userId }, 
        {  }, 
        {  }, 
        {  }, 
        null, 
        ['PureCloud Auth'], 
        ['application/json'], 
        ['application/json']
      );
    };


    /**
     * Create a Greeting for an Organization
     * 
     * @param {module:purecloud-platform-client-v2/model/Greeting} body The Greeting to create
     */
    this.postGreetings = function(body) { 

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw "Missing the required parameter 'body' when calling postGreetings";
      }


      return this.apiClient.callApi(
        '/api/v2/greetings', 
        'POST', 
        {  }, 
        {  }, 
        {  }, 
        {  }, 
        body, 
        ['PureCloud Auth'], 
        ['application/json'], 
        ['application/json']
      );
    };


    /**
     * Creates a Greeting for a Group
     * 
     * @param {String} groupId Group ID
     * @param {module:purecloud-platform-client-v2/model/Greeting} body The Greeting to create
     */
    this.postGroupGreetings = function(groupId, body) { 

      // verify the required parameter 'groupId' is set
      if (groupId === undefined || groupId === null) {
        throw "Missing the required parameter 'groupId' when calling postGroupGreetings";
      }

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw "Missing the required parameter 'body' when calling postGroupGreetings";
      }


      return this.apiClient.callApi(
        '/api/v2/groups/{groupId}/greetings', 
        'POST', 
        { 'groupId': groupId }, 
        {  }, 
        {  }, 
        {  }, 
        body, 
        ['PureCloud Auth'], 
        ['application/json'], 
        ['application/json']
      );
    };


    /**
     * Creates a Greeting for a User
     * 
     * @param {String} userId User ID
     * @param {module:purecloud-platform-client-v2/model/Greeting} body The Greeting to create
     */
    this.postUserGreetings = function(userId, body) { 

      // verify the required parameter 'userId' is set
      if (userId === undefined || userId === null) {
        throw "Missing the required parameter 'userId' when calling postUserGreetings";
      }

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw "Missing the required parameter 'body' when calling postUserGreetings";
      }


      return this.apiClient.callApi(
        '/api/v2/users/{userId}/greetings', 
        'POST', 
        { 'userId': userId }, 
        {  }, 
        {  }, 
        {  }, 
        body, 
        ['PureCloud Auth'], 
        ['application/json'], 
        ['application/json']
      );
    };


    /**
     * Updates the Greeting with the given GreetingId
     * 
     * @param {String} greetingId Greeting ID
     * @param {module:purecloud-platform-client-v2/model/Greeting} body The updated Greeting
     */
    this.putGreeting = function(greetingId, body) { 

      // verify the required parameter 'greetingId' is set
      if (greetingId === undefined || greetingId === null) {
        throw "Missing the required parameter 'greetingId' when calling putGreeting";
      }

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw "Missing the required parameter 'body' when calling putGreeting";
      }


      return this.apiClient.callApi(
        '/api/v2/greetings/{greetingId}', 
        'PUT', 
        { 'greetingId': greetingId }, 
        {  }, 
        {  }, 
        {  }, 
        body, 
        ['PureCloud Auth'], 
        ['application/json'], 
        ['application/json']
      );
    };


    /**
     * Update an Organization&#39;s DefaultGreetingList
     * 
     * @param {module:purecloud-platform-client-v2/model/DefaultGreetingList} body The updated defaultGreetingList
     */
    this.putGreetingsDefaults = function(body) { 

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw "Missing the required parameter 'body' when calling putGreetingsDefaults";
      }


      return this.apiClient.callApi(
        '/api/v2/greetings/defaults', 
        'PUT', 
        {  }, 
        {  }, 
        {  }, 
        {  }, 
        body, 
        ['PureCloud Auth'], 
        ['application/json'], 
        ['application/json']
      );
    };


    /**
     * Updates the DefaultGreetingList of the specified Group
     * 
     * @param {String} groupId Group ID
     * @param {module:purecloud-platform-client-v2/model/DefaultGreetingList} body The updated defaultGreetingList
     */
    this.putGroupGreetingsDefaults = function(groupId, body) { 

      // verify the required parameter 'groupId' is set
      if (groupId === undefined || groupId === null) {
        throw "Missing the required parameter 'groupId' when calling putGroupGreetingsDefaults";
      }

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw "Missing the required parameter 'body' when calling putGroupGreetingsDefaults";
      }


      return this.apiClient.callApi(
        '/api/v2/groups/{groupId}/greetings/defaults', 
        'PUT', 
        { 'groupId': groupId }, 
        {  }, 
        {  }, 
        {  }, 
        body, 
        ['PureCloud Auth'], 
        ['application/json'], 
        ['application/json']
      );
    };


    /**
     * Updates the DefaultGreetingList of the specified User
     * 
     * @param {String} userId User ID
     * @param {module:purecloud-platform-client-v2/model/DefaultGreetingList} body The updated defaultGreetingList
     */
    this.putUserGreetingsDefaults = function(userId, body) { 

      // verify the required parameter 'userId' is set
      if (userId === undefined || userId === null) {
        throw "Missing the required parameter 'userId' when calling putUserGreetingsDefaults";
      }

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw "Missing the required parameter 'body' when calling putUserGreetingsDefaults";
      }


      return this.apiClient.callApi(
        '/api/v2/users/{userId}/greetings/defaults', 
        'PUT', 
        { 'userId': userId }, 
        {  }, 
        {  }, 
        {  }, 
        body, 
        ['PureCloud Auth'], 
        ['application/json'], 
        ['application/json']
      );
    };
  };

  return exports;
}));

},{"../ApiClient":8}],20:[function(require,module,exports){
(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['purecloud-platform-client-v2/ApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'));
  } else {
    // Browser globals (root is window)
    if (!root.platformClient) {
      root.platformClient = {};
    }
    root.platformClient.GroupsApi = factory(root.platformClient.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * Groups service.
   * @module purecloud-platform-client-v2/api/GroupsApi
   * @version 6.0.1
   */

  /**
   * Constructs a new GroupsApi. 
   * @alias module:purecloud-platform-client-v2/api/GroupsApi
   * @class
   * @param {module:purecloud-platform-client-v2/ApiClient} apiClient Optional API client implementation to use,
   * default to {@link module:purecloud-platform-client-v2/ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;



    /**
     * Delete group
     * 
     * @param {String} groupId Group ID
     */
    this.deleteGroup = function(groupId) { 

      // verify the required parameter 'groupId' is set
      if (groupId === undefined || groupId === null) {
        throw "Missing the required parameter 'groupId' when calling deleteGroup";
      }


      return this.apiClient.callApi(
        '/api/v2/groups/{groupId}', 
        'DELETE', 
        { 'groupId': groupId }, 
        {  }, 
        {  }, 
        {  }, 
        null, 
        ['PureCloud Auth'], 
        ['application/json'], 
        ['application/json']
      );
    };


    /**
     * Remove members
     * 
     * @param {String} groupId Group ID
     * @param {String} ids Comma separated list of userIds to remove
     */
    this.deleteGroupMembers = function(groupId, ids) { 

      // verify the required parameter 'groupId' is set
      if (groupId === undefined || groupId === null) {
        throw "Missing the required parameter 'groupId' when calling deleteGroupMembers";
      }

      // verify the required parameter 'ids' is set
      if (ids === undefined || ids === null) {
        throw "Missing the required parameter 'ids' when calling deleteGroupMembers";
      }


      return this.apiClient.callApi(
        '/api/v2/groups/{groupId}/members', 
        'DELETE', 
        { 'groupId': groupId }, 
        { 'ids': ids }, 
        {  }, 
        {  }, 
        null, 
        ['PureCloud Auth'], 
        ['application/json'], 
        ['application/json']
      );
    };


    /**
     * Fetch field config for an entity type
     * 
     * @param {module:purecloud-platform-client-v2/model/String} type Field type
     */
    this.getFieldconfig = function(type) { 

      // verify the required parameter 'type' is set
      if (type === undefined || type === null) {
        throw "Missing the required parameter 'type' when calling getFieldconfig";
      }


      return this.apiClient.callApi(
        '/api/v2/fieldconfig', 
        'GET', 
        {  }, 
        { 'type': type }, 
        {  }, 
        {  }, 
        null, 
        ['PureCloud Auth'], 
        ['application/json'], 
        ['application/json']
      );
    };


    /**
     * Get group
     * 
     * @param {String} groupId Group ID
     */
    this.getGroup = function(groupId) { 

      // verify the required parameter 'groupId' is set
      if (groupId === undefined || groupId === null) {
        throw "Missing the required parameter 'groupId' when calling getGroup";
      }


      return this.apiClient.callApi(
        '/api/v2/groups/{groupId}', 
        'GET', 
        { 'groupId': groupId }, 
        {  }, 
        {  }, 
        {  }, 
        null, 
        ['PureCloud Auth'], 
        ['application/json'], 
        ['application/json']
      );
    };


    /**
     * Get group members
     * 
     * @param {String} groupId Group ID
     * @param {Object} opts Optional parameters
     * @param {Number} opts.pageSize Page size (default to 25)
     * @param {Number} opts.pageNumber Page number (default to 1)
     * @param {module:purecloud-platform-client-v2/model/String} opts.sortOrder Ascending or descending sort order (default to ASC)
     * @param {Array.<String>} opts.expand Which fields, if any, to expand
     */
    this.getGroupMembers = function(groupId, opts) { 
      opts = opts || {};

      // verify the required parameter 'groupId' is set
      if (groupId === undefined || groupId === null) {
        throw "Missing the required parameter 'groupId' when calling getGroupMembers";
      }


      return this.apiClient.callApi(
        '/api/v2/groups/{groupId}/members', 
        'GET', 
        { 'groupId': groupId }, 
        { 'pageSize': opts['pageSize'],'pageNumber': opts['pageNumber'],'sortOrder': opts['sortOrder'],'expand': this.apiClient.buildCollectionParam(opts['expand'], 'multi') }, 
        {  }, 
        {  }, 
        null, 
        ['PureCloud Auth'], 
        ['application/json'], 
        ['application/json']
      );
    };


    /**
     * Get a group list
     * 
     * @param {Object} opts Optional parameters
     * @param {Number} opts.pageSize Page size (default to 25)
     * @param {Number} opts.pageNumber Page number (default to 1)
     * @param {module:purecloud-platform-client-v2/model/String} opts.sortOrder Ascending or descending sort order (default to ASC)
     */
    this.getGroups = function(opts) { 
      opts = opts || {};


      return this.apiClient.callApi(
        '/api/v2/groups', 
        'GET', 
        {  }, 
        { 'pageSize': opts['pageSize'],'pageNumber': opts['pageNumber'],'sortOrder': opts['sortOrder'] }, 
        {  }, 
        {  }, 
        null, 
        ['PureCloud Auth'], 
        ['application/json'], 
        ['application/json']
      );
    };


    /**
     * Search groups using the q64 value returned from a previous search
     * 
     * @param {String} q64 q64
     * @param {Object} opts Optional parameters
     * @param {Array.<String>} opts.expand expand
     */
    this.getGroupsSearch = function(q64, opts) { 
      opts = opts || {};

      // verify the required parameter 'q64' is set
      if (q64 === undefined || q64 === null) {
        throw "Missing the required parameter 'q64' when calling getGroupsSearch";
      }


      return this.apiClient.callApi(
        '/api/v2/groups/search', 
        'GET', 
        {  }, 
        { 'q64': q64,'expand': this.apiClient.buildCollectionParam(opts['expand'], 'multi') }, 
        {  }, 
        {  }, 
        null, 
        ['PureCloud Auth'], 
        ['application/json'], 
        ['application/json']
      );
    };


    /**
     * Add members
     * 
     * @param {String} groupId Group ID
     * @param {module:purecloud-platform-client-v2/model/GroupMembersUpdate} body Add members
     */
    this.postGroupMembers = function(groupId, body) { 

      // verify the required parameter 'groupId' is set
      if (groupId === undefined || groupId === null) {
        throw "Missing the required parameter 'groupId' when calling postGroupMembers";
      }

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw "Missing the required parameter 'body' when calling postGroupMembers";
      }


      return this.apiClient.callApi(
        '/api/v2/groups/{groupId}/members', 
        'POST', 
        { 'groupId': groupId }, 
        {  }, 
        {  }, 
        {  }, 
        body, 
        ['PureCloud Auth'], 
        ['application/json'], 
        ['application/json']
      );
    };


    /**
     * Create a group
     * 
     * @param {module:purecloud-platform-client-v2/model/Group} body Group
     */
    this.postGroups = function(body) { 

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw "Missing the required parameter 'body' when calling postGroups";
      }


      return this.apiClient.callApi(
        '/api/v2/groups', 
        'POST', 
        {  }, 
        {  }, 
        {  }, 
        {  }, 
        body, 
        ['PureCloud Auth'], 
        ['application/json'], 
        ['application/json']
      );
    };


    /**
     * Search groups
     * 
     * @param {module:purecloud-platform-client-v2/model/GroupSearchRequest} body Search request options
     */
    this.postGroupsSearch = function(body) { 

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw "Missing the required parameter 'body' when calling postGroupsSearch";
      }


      return this.apiClient.callApi(
        '/api/v2/groups/search', 
        'POST', 
        {  }, 
        {  }, 
        {  }, 
        {  }, 
        body, 
        ['PureCloud Auth'], 
        ['application/json'], 
        ['application/json']
      );
    };


    /**
     * Update group
     * 
     * @param {String} groupId Group ID
     * @param {Object} opts Optional parameters
     * @param {module:purecloud-platform-client-v2/model/GroupUpdate} opts.body Group
     */
    this.putGroup = function(groupId, opts) { 
      opts = opts || {};

      // verify the required parameter 'groupId' is set
      if (groupId === undefined || groupId === null) {
        throw "Missing the required parameter 'groupId' when calling putGroup";
      }


      return this.apiClient.callApi(
        '/api/v2/groups/{groupId}', 
        'PUT', 
        { 'groupId': groupId }, 
        {  }, 
        {  }, 
        {  }, 
        opts['body'], 
        ['PureCloud Auth'], 
        ['application/json'], 
        ['application/json']
      );
    };
  };

  return exports;
}));

},{"../ApiClient":8}],21:[function(require,module,exports){
(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['purecloud-platform-client-v2/ApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'));
  } else {
    // Browser globals (root is window)
    if (!root.platformClient) {
      root.platformClient = {};
    }
    root.platformClient.IdentityProviderApi = factory(root.platformClient.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * IdentityProvider service.
   * @module purecloud-platform-client-v2/api/IdentityProviderApi
   * @version 6.0.1
   */

  /**
   * Constructs a new IdentityProviderApi. 
   * @alias module:purecloud-platform-client-v2/api/IdentityProviderApi
   * @class
   * @param {module:purecloud-platform-client-v2/ApiClient} apiClient Optional API client implementation to use,
   * default to {@link module:purecloud-platform-client-v2/ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;



    /**
     * Delete ADFS Identity Provider
     * 
     */
    this.deleteIdentityprovidersAdfs = function() { 


      return this.apiClient.callApi(
        '/api/v2/identityproviders/adfs', 
        'DELETE', 
        {  }, 
        {  }, 
        {  }, 
        {  }, 
        null, 
        ['PureCloud Auth'], 
        ['application/json'], 
        ['application/json']
      );
    };


    /**
     * Delete Customer Interaction Center (CIC) Identity Provider
     * 
     */
    this.deleteIdentityprovidersCic = function() { 


      return this.apiClient.callApi(
        '/api/v2/identityproviders/cic', 
        'DELETE', 
        {  }, 
        {  }, 
        {  }, 
        {  }, 
        null, 
        ['PureCloud Auth'], 
        ['application/json'], 
        ['application/json']
      );
    };


    /**
     * Delete G Suite Identity Provider
     * 
     */
    this.deleteIdentityprovidersGsuite = function() { 


      return this.apiClient.callApi(
        '/api/v2/identityproviders/gsuite', 
        'DELETE', 
        {  }, 
        {  }, 
        {  }, 
        {  }, 
        null, 
        ['PureCloud Auth'], 
        ['application/json'], 
        ['application/json']
      );
    };


    /**
     * Delete IdentityNow Provider
     * 
     */
    this.deleteIdentityprovidersIdentitynow = function() { 


      return this.apiClient.callApi(
        '/api/v2/identityproviders/identitynow', 
        'DELETE', 
        {  }, 
        {  }, 
        {  }, 
        {  }, 
        null, 
        ['PureCloud Auth'], 
        ['application/json'], 
        ['application/json']
      );
    };


    /**
     * Delete Okta Identity Provider
     * 
     */
    this.deleteIdentityprovidersOkta = function() { 


      return this.apiClient.callApi(
        '/api/v2/identityproviders/okta', 
        'DELETE', 
        {  }, 
        {  }, 
        {  }, 
        {  }, 
        null, 
        ['PureCloud Auth'], 
        ['application/json'], 
        ['application/json']
      );
    };


    /**
     * Delete OneLogin Identity Provider
     * 
     */
    this.deleteIdentityprovidersOnelogin = function() { 


      return this.apiClient.callApi(
        '/api/v2/identityproviders/onelogin', 
        'DELETE', 
        {  }, 
        {  }, 
        {  }, 
        {  }, 
        null, 
        ['PureCloud Auth'], 
        ['application/json'], 
        ['application/json']
      );
    };


    /**
     * Delete Ping Identity Provider
     * 
     */
    this.deleteIdentityprovidersPing = function() { 


      return this.apiClient.callApi(
        '/api/v2/identityproviders/ping', 
        'DELETE', 
        {  }, 
        {  }, 
        {  }, 
        {  }, 
        null, 
        ['PureCloud Auth'], 
        ['application/json'], 
        ['application/json']
      );
    };


    /**
     * Delete PureCloud Identity Provider
     * 
     */
    this.deleteIdentityprovidersPurecloud = function() { 


      return this.apiClient.callApi(
        '/api/v2/identityproviders/purecloud', 
        'DELETE', 
        {  }, 
        {  }, 
        {  }, 
        {  }, 
        null, 
        ['PureCloud Auth'], 
        ['application/json'], 
        ['application/json']
      );
    };


    /**
     * Delete Salesforce Identity Provider
     * 
     */
    this.deleteIdentityprovidersSalesforce = function() { 


      return this.apiClient.callApi(
        '/api/v2/identityproviders/salesforce', 
        'DELETE', 
        {  }, 
        {  }, 
        {  }, 
        {  }, 
        null, 
        ['PureCloud Auth'], 
        ['application/json'], 
        ['application/json']
      );
    };


    /**
     * The list of identity providers
     * 
     */
    this.getIdentityproviders = function() { 


      return this.apiClient.callApi(
        '/api/v2/identityproviders', 
        'GET', 
        {  }, 
        {  }, 
        {  }, 
        {  }, 
        null, 
        ['PureCloud Auth'], 
        ['application/json'], 
        ['application/json']
      );
    };


    /**
     * Get ADFS Identity Provider
     * 
     */
    this.getIdentityprovidersAdfs = function() { 


      return this.apiClient.callApi(
        '/api/v2/identityproviders/adfs', 
        'GET', 
        {  }, 
        {  }, 
        {  }, 
        {  }, 
        null, 
        ['PureCloud Auth'], 
        ['application/json'], 
        ['application/json']
      );
    };


    /**
     * Get Customer Interaction Center (CIC) Identity Provider
     * 
     */
    this.getIdentityprovidersCic = function() { 


      return this.apiClient.callApi(
        '/api/v2/identityproviders/cic', 
        'GET', 
        {  }, 
        {  }, 
        {  }, 
        {  }, 
        null, 
        ['PureCloud Auth'], 
        ['application/json'], 
        ['application/json']
      );
    };


    /**
     * Get G Suite Identity Provider
     * 
     */
    this.getIdentityprovidersGsuite = function() { 


      return this.apiClient.callApi(
        '/api/v2/identityproviders/gsuite', 
        'GET', 
        {  }, 
        {  }, 
        {  }, 
        {  }, 
        null, 
        ['PureCloud Auth'], 
        ['application/json'], 
        ['application/json']
      );
    };


    /**
     * Get IdentityNow Provider
     * 
     */
    this.getIdentityprovidersIdentitynow = function() { 


      return this.apiClient.callApi(
        '/api/v2/identityproviders/identitynow', 
        'GET', 
        {  }, 
        {  }, 
        {  }, 
        {  }, 
        null, 
        ['PureCloud Auth'], 
        ['application/json'], 
        ['application/json']
      );
    };


    /**
     * Get Okta Identity Provider
     * 
     */
    this.getIdentityprovidersOkta = function() { 


      return this.apiClient.callApi(
        '/api/v2/identityproviders/okta', 
        'GET', 
        {  }, 
        {  }, 
        {  }, 
        {  }, 
        null, 
        ['PureCloud Auth'], 
        ['application/json'], 
        ['application/json']
      );
    };


    /**
     * Get OneLogin Identity Provider
     * 
     */
    this.getIdentityprovidersOnelogin = function() { 


      return this.apiClient.callApi(
        '/api/v2/identityproviders/onelogin', 
        'GET', 
        {  }, 
        {  }, 
        {  }, 
        {  }, 
        null, 
        ['PureCloud Auth'], 
        ['application/json'], 
        ['application/json']
      );
    };


    /**
     * Get Ping Identity Provider
     * 
     */
    this.getIdentityprovidersPing = function() { 


      return this.apiClient.callApi(
        '/api/v2/identityproviders/ping', 
        'GET', 
        {  }, 
        {  }, 
        {  }, 
        {  }, 
        null, 
        ['PureCloud Auth'], 
        ['application/json'], 
        ['application/json']
      );
    };


    /**
     * Get PureCloud Identity Provider
     * 
     */
    this.getIdentityprovidersPurecloud = function() { 


      return this.apiClient.callApi(
        '/api/v2/identityproviders/purecloud', 
        'GET', 
        {  }, 
        {  }, 
        {  }, 
        {  }, 
        null, 
        ['PureCloud Auth'], 
        ['application/json'], 
        ['application/json']
      );
    };


    /**
     * Get Salesforce Identity Provider
     * 
     */
    this.getIdentityprovidersSalesforce = function() { 


      return this.apiClient.callApi(
        '/api/v2/identityproviders/salesforce', 
        'GET', 
        {  }, 
        {  }, 
        {  }, 
        {  }, 
        null, 
        ['PureCloud Auth'], 
        ['application/json'], 
        ['application/json']
      );
    };


    /**
     * Update/Create ADFS Identity Provider
     * 
     * @param {module:purecloud-platform-client-v2/model/ADFS} body Provider
     */
    this.putIdentityprovidersAdfs = function(body) { 

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw "Missing the required parameter 'body' when calling putIdentityprovidersAdfs";
      }


      return this.apiClient.callApi(
        '/api/v2/identityproviders/adfs', 
        'PUT', 
        {  }, 
        {  }, 
        {  }, 
        {  }, 
        body, 
        ['PureCloud Auth'], 
        ['application/json'], 
        ['application/json']
      );
    };


    /**
     * Update/Create Customer Interaction Center (CIC) Identity Provider
     * 
     * @param {module:purecloud-platform-client-v2/model/CustomerInteractionCenter} body Provider
     */
    this.putIdentityprovidersCic = function(body) { 

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw "Missing the required parameter 'body' when calling putIdentityprovidersCic";
      }


      return this.apiClient.callApi(
        '/api/v2/identityproviders/cic', 
        'PUT', 
        {  }, 
        {  }, 
        {  }, 
        {  }, 
        body, 
        ['PureCloud Auth'], 
        ['application/json'], 
        ['application/json']
      );
    };


    /**
     * Update/Create G Suite Identity Provider
     * 
     * @param {module:purecloud-platform-client-v2/model/GSuite} body Provider
     */
    this.putIdentityprovidersGsuite = function(body) { 

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw "Missing the required parameter 'body' when calling putIdentityprovidersGsuite";
      }


      return this.apiClient.callApi(
        '/api/v2/identityproviders/gsuite', 
        'PUT', 
        {  }, 
        {  }, 
        {  }, 
        {  }, 
        body, 
        ['PureCloud Auth'], 
        ['application/json'], 
        ['application/json']
      );
    };


    /**
     * Update/Create IdentityNow Provider
     * 
     * @param {module:purecloud-platform-client-v2/model/IdentityNow} body Provider
     */
    this.putIdentityprovidersIdentitynow = function(body) { 

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw "Missing the required parameter 'body' when calling putIdentityprovidersIdentitynow";
      }


      return this.apiClient.callApi(
        '/api/v2/identityproviders/identitynow', 
        'PUT', 
        {  }, 
        {  }, 
        {  }, 
        {  }, 
        body, 
        ['PureCloud Auth'], 
        ['application/json'], 
        ['application/json']
      );
    };


    /**
     * Update/Create Okta Identity Provider
     * 
     * @param {module:purecloud-platform-client-v2/model/Okta} body Provider
     */
    this.putIdentityprovidersOkta = function(body) { 

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw "Missing the required parameter 'body' when calling putIdentityprovidersOkta";
      }


      return this.apiClient.callApi(
        '/api/v2/identityproviders/okta', 
        'PUT', 
        {  }, 
        {  }, 
        {  }, 
        {  }, 
        body, 
        ['PureCloud Auth'], 
        ['application/json'], 
        ['application/json']
      );
    };


    /**
     * Update/Create OneLogin Identity Provider
     * 
     * @param {module:purecloud-platform-client-v2/model/OneLogin} body Provider
     */
    this.putIdentityprovidersOnelogin = function(body) { 

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw "Missing the required parameter 'body' when calling putIdentityprovidersOnelogin";
      }


      return this.apiClient.callApi(
        '/api/v2/identityproviders/onelogin', 
        'PUT', 
        {  }, 
        {  }, 
        {  }, 
        {  }, 
        body, 
        ['PureCloud Auth'], 
        ['application/json'], 
        ['application/json']
      );
    };


    /**
     * Update/Create Ping Identity Provider
     * 
     * @param {module:purecloud-platform-client-v2/model/PingIdentity} body Provider
     */
    this.putIdentityprovidersPing = function(body) { 

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw "Missing the required parameter 'body' when calling putIdentityprovidersPing";
      }


      return this.apiClient.callApi(
        '/api/v2/identityproviders/ping', 
        'PUT', 
        {  }, 
        {  }, 
        {  }, 
        {  }, 
        body, 
        ['PureCloud Auth'], 
        ['application/json'], 
        ['application/json']
      );
    };


    /**
     * Update/Create PureCloud Identity Provider
     * 
     * @param {module:purecloud-platform-client-v2/model/PureCloud} body Provider
     */
    this.putIdentityprovidersPurecloud = function(body) { 

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw "Missing the required parameter 'body' when calling putIdentityprovidersPurecloud";
      }


      return this.apiClient.callApi(
        '/api/v2/identityproviders/purecloud', 
        'PUT', 
        {  }, 
        {  }, 
        {  }, 
        {  }, 
        body, 
        ['PureCloud Auth'], 
        ['application/json'], 
        ['application/json']
      );
    };


    /**
     * Update/Create Salesforce Identity Provider
     * 
     * @param {module:purecloud-platform-client-v2/model/Salesforce} body Provider
     */
    this.putIdentityprovidersSalesforce = function(body) { 

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw "Missing the required parameter 'body' when calling putIdentityprovidersSalesforce";
      }


      return this.apiClient.callApi(
        '/api/v2/identityproviders/salesforce', 
        'PUT', 
        {  }, 
        {  }, 
        {  }, 
        {  }, 
        body, 
        ['PureCloud Auth'], 
        ['application/json'], 
        ['application/json']
      );
    };
  };

  return exports;
}));

},{"../ApiClient":8}],22:[function(require,module,exports){
(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['purecloud-platform-client-v2/ApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'));
  } else {
    // Browser globals (root is window)
    if (!root.platformClient) {
      root.platformClient = {};
    }
    root.platformClient.LanguagesApi = factory(root.platformClient.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * Languages service.
   * @module purecloud-platform-client-v2/api/LanguagesApi
   * @version 6.0.1
   */

  /**
   * Constructs a new LanguagesApi. 
   * @alias module:purecloud-platform-client-v2/api/LanguagesApi
   * @class
   * @param {module:purecloud-platform-client-v2/ApiClient} apiClient Optional API client implementation to use,
   * default to {@link module:purecloud-platform-client-v2/ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;



    /**
     * Delete Language (Deprecated)
     * This endpoint is deprecated. It has been moved to /routing/languages/{languageId}
     * @param {String} languageId Language ID
     */
    this.deleteLanguage = function(languageId) { 

      // verify the required parameter 'languageId' is set
      if (languageId === undefined || languageId === null) {
        throw "Missing the required parameter 'languageId' when calling deleteLanguage";
      }


      return this.apiClient.callApi(
        '/api/v2/languages/{languageId}', 
        'DELETE', 
        { 'languageId': languageId }, 
        {  }, 
        {  }, 
        {  }, 
        null, 
        ['PureCloud Auth'], 
        ['application/json'], 
        ['application/json']
      );
    };


    /**
     * Delete Language
     * 
     * @param {String} languageId Language ID
     */
    this.deleteRoutingLanguage = function(languageId) { 

      // verify the required parameter 'languageId' is set
      if (languageId === undefined || languageId === null) {
        throw "Missing the required parameter 'languageId' when calling deleteRoutingLanguage";
      }


      return this.apiClient.callApi(
        '/api/v2/routing/languages/{languageId}', 
        'DELETE', 
        { 'languageId': languageId }, 
        {  }, 
        {  }, 
        {  }, 
        null, 
        ['PureCloud Auth'], 
        ['application/json'], 
        ['application/json']
      );
    };


    /**
     * Get language (Deprecated)
     * This endpoint is deprecated. It has been moved to /routing/languages/{languageId}
     * @param {String} languageId Language ID
     */
    this.getLanguage = function(languageId) { 

      // verify the required parameter 'languageId' is set
      if (languageId === undefined || languageId === null) {
        throw "Missing the required parameter 'languageId' when calling getLanguage";
      }


      return this.apiClient.callApi(
        '/api/v2/languages/{languageId}', 
        'GET', 
        { 'languageId': languageId }, 
        {  }, 
        {  }, 
        {  }, 
        null, 
        ['PureCloud Auth'], 
        ['application/json'], 
        ['application/json']
      );
    };


    /**
     * Get the list of supported languages. (Deprecated)
     * This endpoint is deprecated. It has been moved to /routing/languages
     * @param {Object} opts Optional parameters
     * @param {Number} opts.pageSize Page size (default to 25)
     * @param {Number} opts.pageNumber Page number (default to 1)
     * @param {module:purecloud-platform-client-v2/model/String} opts.sortOrder Ascending or descending sort order (default to ASC)
     * @param {String} opts.name Name
     */
    this.getLanguages = function(opts) { 
      opts = opts || {};


      return this.apiClient.callApi(
        '/api/v2/languages', 
        'GET', 
        {  }, 
        { 'pageSize': opts['pageSize'],'pageNumber': opts['pageNumber'],'sortOrder': opts['sortOrder'],'name': opts['name'] }, 
        {  }, 
        {  }, 
        null, 
        ['PureCloud Auth'], 
        ['application/json'], 
        ['application/json']
      );
    };


    /**
     * Get all available languages for translation
     * 
     */
    this.getLanguagesTranslations = function() { 


      return this.apiClient.callApi(
        '/api/v2/languages/translations', 
        'GET', 
        {  }, 
        {  }, 
        {  }, 
        {  }, 
        null, 
        ['PureCloud Auth'], 
        ['application/json'], 
        ['application/json']
      );
    };


    /**
     * Get the builtin translation for a language
     * 
     * @param {String} language The language of the builtin translation to retrieve
     */
    this.getLanguagesTranslationsBuiltin = function(language) { 

      // verify the required parameter 'language' is set
      if (language === undefined || language === null) {
        throw "Missing the required parameter 'language' when calling getLanguagesTranslationsBuiltin";
      }


      return this.apiClient.callApi(
        '/api/v2/languages/translations/builtin', 
        'GET', 
        {  }, 
        { 'language': language }, 
        {  }, 
        {  }, 
        null, 
        ['PureCloud Auth'], 
        ['application/json'], 
        ['application/json']
      );
    };


    /**
     * Get effective translation for an organization by language
     * 
     * @param {String} language The language of the translation to retrieve for the organization
     */
    this.getLanguagesTranslationsOrganization = function(language) { 

      // verify the required parameter 'language' is set
      if (language === undefined || language === null) {
        throw "Missing the required parameter 'language' when calling getLanguagesTranslationsOrganization";
      }


      return this.apiClient.callApi(
        '/api/v2/languages/translations/organization', 
        'GET', 
        {  }, 
        { 'language': language }, 
        {  }, 
        {  }, 
        null, 
        ['PureCloud Auth'], 
        ['application/json'], 
        ['application/json']
      );
    };


    /**
     * Get effective language translation for a user
     * 
     * @param {String} userId The user id
     */
    this.getLanguagesTranslationsUser = function(userId) { 

      // verify the required parameter 'userId' is set
      if (userId === undefined || userId === null) {
        throw "Missing the required parameter 'userId' when calling getLanguagesTranslationsUser";
      }


      return this.apiClient.callApi(
        '/api/v2/languages/translations/users/{userId}', 
        'GET', 
        { 'userId': userId }, 
        {  }, 
        {  }, 
        {  }, 
        null, 
        ['PureCloud Auth'], 
        ['application/json'], 
        ['application/json']
      );
    };


    /**
     * Get language
     * 
     * @param {String} languageId Language ID
     */
    this.getRoutingLanguage = function(languageId) { 

      // verify the required parameter 'languageId' is set
      if (languageId === undefined || languageId === null) {
        throw "Missing the required parameter 'languageId' when calling getRoutingLanguage";
      }


      return this.apiClient.callApi(
        '/api/v2/routing/languages/{languageId}', 
        'GET', 
        { 'languageId': languageId }, 
        {  }, 
        {  }, 
        {  }, 
        null, 
        ['PureCloud Auth'], 
        ['application/json'], 
        ['application/json']
      );
    };


    /**
     * Create Language (Deprecated)
     * This endpoint is deprecated. It has been moved to /routing/languages
     * @param {module:purecloud-platform-client-v2/model/Language} body Language
     */
    this.postLanguages = function(body) { 

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw "Missing the required parameter 'body' when calling postLanguages";
      }


      return this.apiClient.callApi(
        '/api/v2/languages', 
        'POST', 
        {  }, 
        {  }, 
        {  }, 
        {  }, 
        body, 
        ['PureCloud Auth'], 
        ['application/json'], 
        ['application/json']
      );
    };
  };

  return exports;
}));

},{"../ApiClient":8}],23:[function(require,module,exports){
(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['purecloud-platform-client-v2/ApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'));
  } else {
    // Browser globals (root is window)
    if (!root.platformClient) {
      root.platformClient = {};
    }
    root.platformClient.LicenseApi = factory(root.platformClient.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * License service.
   * @module purecloud-platform-client-v2/api/LicenseApi
   * @version 6.0.1
   */

  /**
   * Constructs a new LicenseApi. 
   * @alias module:purecloud-platform-client-v2/api/LicenseApi
   * @class
   * @param {module:purecloud-platform-client-v2/ApiClient} apiClient Optional API client implementation to use,
   * default to {@link module:purecloud-platform-client-v2/ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;



    /**
     * Get PureCloud license definition.
     * 
     * @param {String} licenseId ID
     */
    this.getLicenseDefinition = function(licenseId) { 

      // verify the required parameter 'licenseId' is set
      if (licenseId === undefined || licenseId === null) {
        throw "Missing the required parameter 'licenseId' when calling getLicenseDefinition";
      }


      return this.apiClient.callApi(
        '/api/v2/license/definitions/{licenseId}', 
        'GET', 
        { 'licenseId': licenseId }, 
        {  }, 
        {  }, 
        {  }, 
        null, 
        ['PureCloud Auth'], 
        ['application/json'], 
        ['application/json']
      );
    };


    /**
     * Get all PureCloud license definitions available for the organization.
     * 
     */
    this.getLicenseDefinitions = function() { 


      return this.apiClient.callApi(
        '/api/v2/license/definitions', 
        'GET', 
        {  }, 
        {  }, 
        {  }, 
        {  }, 
        null, 
        ['PureCloud Auth'], 
        ['application/json'], 
        ['application/json']
      );
    };


    /**
     * Get license assignments for the organization.
     * 
     */
    this.getLicenseOrganization = function() { 


      return this.apiClient.callApi(
        '/api/v2/license/organization', 
        'GET', 
        {  }, 
        {  }, 
        {  }, 
        {  }, 
        null, 
        ['PureCloud Auth'], 
        ['application/json'], 
        ['application/json']
      );
    };


    /**
     * Get licenses for specified user.
     * 
     * @param {String} userId ID
     */
    this.getLicenseUser = function(userId) { 

      // verify the required parameter 'userId' is set
      if (userId === undefined || userId === null) {
        throw "Missing the required parameter 'userId' when calling getLicenseUser";
      }


      return this.apiClient.callApi(
        '/api/v2/license/users/{userId}', 
        'GET', 
        { 'userId': userId }, 
        {  }, 
        {  }, 
        {  }, 
        null, 
        ['PureCloud Auth'], 
        ['application/json'], 
        ['application/json']
      );
    };


    /**
     * Update the organization&#39;s license assignments in a batch.
     * 
     * @param {Object} opts Optional parameters
     * @param {module:purecloud-platform-client-v2/model/LicenseBatchAssignmentRequest} opts.body The license assignments to update.
     */
    this.postLicenseOrganization = function(opts) { 
      opts = opts || {};


      return this.apiClient.callApi(
        '/api/v2/license/organization', 
        'POST', 
        {  }, 
        {  }, 
        {  }, 
        {  }, 
        opts['body'], 
        ['PureCloud Auth'], 
        ['application/json'], 
        ['application/json']
      );
    };


    /**
     * Fetch user licenses in a batch.
     * 
     * @param {Object} opts Optional parameters
     * @param {Array.<module:purecloud-platform-client-v2/model/String>} opts.body The user IDs to fetch.
     */
    this.postLicenseUsers = function(opts) { 
      opts = opts || {};


      return this.apiClient.callApi(
        '/api/v2/license/users', 
        'POST', 
        {  }, 
        {  }, 
        {  }, 
        {  }, 
        opts['body'], 
        ['PureCloud Auth'], 
        ['application/json'], 
        ['application/json']
      );
    };
  };

  return exports;
}));

},{"../ApiClient":8}],24:[function(require,module,exports){
(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['purecloud-platform-client-v2/ApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'));
  } else {
    // Browser globals (root is window)
    if (!root.platformClient) {
      root.platformClient = {};
    }
    root.platformClient.LocationsApi = factory(root.platformClient.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * Locations service.
   * @module purecloud-platform-client-v2/api/LocationsApi
   * @version 6.0.1
   */

  /**
   * Constructs a new LocationsApi. 
   * @alias module:purecloud-platform-client-v2/api/LocationsApi
   * @class
   * @param {module:purecloud-platform-client-v2/ApiClient} apiClient Optional API client implementation to use,
   * default to {@link module:purecloud-platform-client-v2/ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;



    /**
     * Get Location by ID.
     * 
     * @param {String} locationId Location ID
     */
    this.getLocation = function(locationId) { 

      // verify the required parameter 'locationId' is set
      if (locationId === undefined || locationId === null) {
        throw "Missing the required parameter 'locationId' when calling getLocation";
      }


      return this.apiClient.callApi(
        '/api/v2/locations/{locationId}', 
        'GET', 
        { 'locationId': locationId }, 
        {  }, 
        {  }, 
        {  }, 
        null, 
        ['PureCloud Auth'], 
        ['application/json'], 
        ['application/json']
      );
    };


    /**
     * Get a list of all locations.
     * 
     * @param {Object} opts Optional parameters
     * @param {Number} opts.pageSize Page size (default to 25)
     * @param {Number} opts.pageNumber Page number (default to 1)
     * @param {module:purecloud-platform-client-v2/model/String} opts.sortOrder Sort order
     */
    this.getLocations = function(opts) { 
      opts = opts || {};


      return this.apiClient.callApi(
        '/api/v2/locations', 
        'GET', 
        {  }, 
        { 'pageSize': opts['pageSize'],'pageNumber': opts['pageNumber'],'sortOrder': opts['sortOrder'] }, 
        {  }, 
        {  }, 
        null, 
        ['PureCloud Auth'], 
        ['application/json'], 
        ['application/json']
      );
    };


    /**
     * Search locations using the q64 value returned from a previous search
     * 
     * @param {String} q64 q64
     * @param {Object} opts Optional parameters
     * @param {Array.<String>} opts.expand expand
     */
    this.getLocationsSearch = function(q64, opts) { 
      opts = opts || {};

      // verify the required parameter 'q64' is set
      if (q64 === undefined || q64 === null) {
        throw "Missing the required parameter 'q64' when calling getLocationsSearch";
      }


      return this.apiClient.callApi(
        '/api/v2/locations/search', 
        'GET', 
        {  }, 
        { 'q64': q64,'expand': this.apiClient.buildCollectionParam(opts['expand'], 'multi') }, 
        {  }, 
        {  }, 
        null, 
        ['PureCloud Auth'], 
        ['application/json'], 
        ['application/json']
      );
    };


    /**
     * Search locations
     * 
     * @param {module:purecloud-platform-client-v2/model/LocationSearchRequest} body Search request options
     */
    this.postLocationsSearch = function(body) { 

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw "Missing the required parameter 'body' when calling postLocationsSearch";
      }


      return this.apiClient.callApi(
        '/api/v2/locations/search', 
        'POST', 
        {  }, 
        {  }, 
        {  }, 
        {  }, 
        body, 
        ['PureCloud Auth'], 
        ['application/json'], 
        ['application/json']
      );
    };
  };

  return exports;
}));

},{"../ApiClient":8}],25:[function(require,module,exports){
(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['purecloud-platform-client-v2/ApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'));
  } else {
    // Browser globals (root is window)
    if (!root.platformClient) {
      root.platformClient = {};
    }
    root.platformClient.NotificationsApi = factory(root.platformClient.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * Notifications service.
   * @module purecloud-platform-client-v2/api/NotificationsApi
   * @version 6.0.1
   */

  /**
   * Constructs a new NotificationsApi. 
   * @alias module:purecloud-platform-client-v2/api/NotificationsApi
   * @class
   * @param {module:purecloud-platform-client-v2/ApiClient} apiClient Optional API client implementation to use,
   * default to {@link module:purecloud-platform-client-v2/ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;



    /**
     * Remove all subscriptions
     * 
     * @param {String} channelId Channel ID
     */
    this.deleteNotificationsChannelSubscriptions = function(channelId) { 

      // verify the required parameter 'channelId' is set
      if (channelId === undefined || channelId === null) {
        throw "Missing the required parameter 'channelId' when calling deleteNotificationsChannelSubscriptions";
      }


      return this.apiClient.callApi(
        '/api/v2/notifications/channels/{channelId}/subscriptions', 
        'DELETE', 
        { 'channelId': channelId }, 
        {  }, 
        {  }, 
        {  }, 
        null, 
        ['PureCloud Auth'], 
        ['application/json'], 
        ['application/json']
      );
    };


    /**
     * Get available notification topics.
     * 
     * @param {Object} opts Optional parameters
     * @param {Array.<String>} opts.expand Which fields, if any, to expand
     */
    this.getNotificationsAvailabletopics = function(opts) { 
      opts = opts || {};


      return this.apiClient.callApi(
        '/api/v2/notifications/availabletopics', 
        'GET', 
        {  }, 
        { 'expand': this.apiClient.buildCollectionParam(opts['expand'], 'multi') }, 
        {  }, 
        {  }, 
        null, 
        ['PureCloud Auth'], 
        ['application/json'], 
        ['application/json']
      );
    };


    /**
     * The list of all subscriptions for this channel
     * 
     * @param {String} channelId Channel ID
     */
    this.getNotificationsChannelSubscriptions = function(channelId) { 

      // verify the required parameter 'channelId' is set
      if (channelId === undefined || channelId === null) {
        throw "Missing the required parameter 'channelId' when calling getNotificationsChannelSubscriptions";
      }


      return this.apiClient.callApi(
        '/api/v2/notifications/channels/{channelId}/subscriptions', 
        'GET', 
        { 'channelId': channelId }, 
        {  }, 
        {  }, 
        {  }, 
        null, 
        ['PureCloud Auth'], 
        ['application/json'], 
        ['application/json']
      );
    };


    /**
     * The list of existing channels
     * 
     */
    this.getNotificationsChannels = function() { 


      return this.apiClient.callApi(
        '/api/v2/notifications/channels', 
        'GET', 
        {  }, 
        {  }, 
        {  }, 
        {  }, 
        null, 
        ['PureCloud Auth'], 
        ['application/json'], 
        ['application/json']
      );
    };


    /**
     * Add a list of subscriptions to the existing list of subscriptions
     * 
     * @param {String} channelId Channel ID
     * @param {Array.<module:purecloud-platform-client-v2/model/ChannelTopic>} body Body
     */
    this.postNotificationsChannelSubscriptions = function(channelId, body) { 

      // verify the required parameter 'channelId' is set
      if (channelId === undefined || channelId === null) {
        throw "Missing the required parameter 'channelId' when calling postNotificationsChannelSubscriptions";
      }

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw "Missing the required parameter 'body' when calling postNotificationsChannelSubscriptions";
      }


      return this.apiClient.callApi(
        '/api/v2/notifications/channels/{channelId}/subscriptions', 
        'POST', 
        { 'channelId': channelId }, 
        {  }, 
        {  }, 
        {  }, 
        body, 
        ['PureCloud Auth'], 
        ['application/json'], 
        ['application/json']
      );
    };


    /**
     * Create a new channel
     * There is a limit of 10 channels. Creating an 11th channel will remove the channel with oldest last used date.
     */
    this.postNotificationsChannels = function() { 


      return this.apiClient.callApi(
        '/api/v2/notifications/channels', 
        'POST', 
        {  }, 
        {  }, 
        {  }, 
        {  }, 
        null, 
        ['PureCloud Auth'], 
        ['application/json'], 
        ['application/json']
      );
    };


    /**
     * Replace the current list of subscriptions with a new list.
     * 
     * @param {String} channelId Channel ID
     * @param {Array.<module:purecloud-platform-client-v2/model/ChannelTopic>} body Body
     */
    this.putNotificationsChannelSubscriptions = function(channelId, body) { 

      // verify the required parameter 'channelId' is set
      if (channelId === undefined || channelId === null) {
        throw "Missing the required parameter 'channelId' when calling putNotificationsChannelSubscriptions";
      }

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw "Missing the required parameter 'body' when calling putNotificationsChannelSubscriptions";
      }


      return this.apiClient.callApi(
        '/api/v2/notifications/channels/{channelId}/subscriptions', 
        'PUT', 
        { 'channelId': channelId }, 
        {  }, 
        {  }, 
        {  }, 
        body, 
        ['PureCloud Auth'], 
        ['application/json'], 
        ['application/json']
      );
    };
  };

  return exports;
}));

},{"../ApiClient":8}],26:[function(require,module,exports){
(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['purecloud-platform-client-v2/ApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'));
  } else {
    // Browser globals (root is window)
    if (!root.platformClient) {
      root.platformClient = {};
    }
    root.platformClient.OAuthApi = factory(root.platformClient.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * OAuth service.
   * @module purecloud-platform-client-v2/api/OAuthApi
   * @version 6.0.1
   */

  /**
   * Constructs a new OAuthApi. 
   * @alias module:purecloud-platform-client-v2/api/OAuthApi
   * @class
   * @param {module:purecloud-platform-client-v2/ApiClient} apiClient Optional API client implementation to use,
   * default to {@link module:purecloud-platform-client-v2/ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;



    /**
     * Delete OAuth Client
     * 
     * @param {String} clientId Client ID
     */
    this.deleteOauthClient = function(clientId) { 

      // verify the required parameter 'clientId' is set
      if (clientId === undefined || clientId === null) {
        throw "Missing the required parameter 'clientId' when calling deleteOauthClient";
      }


      return this.apiClient.callApi(
        '/api/v2/oauth/clients/{clientId}', 
        'DELETE', 
        { 'clientId': clientId }, 
        {  }, 
        {  }, 
        {  }, 
        null, 
        ['PureCloud Auth'], 
        ['application/json'], 
        ['application/json']
      );
    };


    /**
     * Get OAuth Client
     * 
     * @param {String} clientId Client ID
     */
    this.getOauthClient = function(clientId) { 

      // verify the required parameter 'clientId' is set
      if (clientId === undefined || clientId === null) {
        throw "Missing the required parameter 'clientId' when calling getOauthClient";
      }


      return this.apiClient.callApi(
        '/api/v2/oauth/clients/{clientId}', 
        'GET', 
        { 'clientId': clientId }, 
        {  }, 
        {  }, 
        {  }, 
        null, 
        ['PureCloud Auth'], 
        ['application/json'], 
        ['application/json']
      );
    };


    /**
     * The list of OAuth clients
     * 
     */
    this.getOauthClients = function() { 


      return this.apiClient.callApi(
        '/api/v2/oauth/clients', 
        'GET', 
        {  }, 
        {  }, 
        {  }, 
        {  }, 
        null, 
        ['PureCloud Auth'], 
        ['application/json'], 
        ['application/json']
      );
    };


    /**
     * Regenerate Client Secret
     * This operation will set the client secret to a randomly generated cryptographically random value. All clients must be updated with the new secret. This operation should be used with caution.
     * @param {String} clientId Client ID
     */
    this.postOauthClientSecret = function(clientId) { 

      // verify the required parameter 'clientId' is set
      if (clientId === undefined || clientId === null) {
        throw "Missing the required parameter 'clientId' when calling postOauthClientSecret";
      }


      return this.apiClient.callApi(
        '/api/v2/oauth/clients/{clientId}/secret', 
        'POST', 
        { 'clientId': clientId }, 
        {  }, 
        {  }, 
        {  }, 
        null, 
        ['PureCloud Auth'], 
        ['application/json'], 
        ['application/json']
      );
    };


    /**
     * Create OAuth client
     * The OAuth Grant/Client is required in order to create an authentication token and gain access to PureCloud.  The preferred authorizedGrantTypes is &#39;CODE&#39; which requires applications to send a client ID and client secret. This is typically a web server.  If the client is unable to secure the client secret then the &#39;TOKEN&#39; grant type aka IMPLICIT should be used. This is would be for browser or mobile apps.  If a client is to be used outside of the context of a user then the &#39;CLIENT-CREDENTIALS&#39; grant may be used. In this case the client must be granted roles  via the &#39;roleIds&#39; field.
     * @param {module:purecloud-platform-client-v2/model/OAuthClient} body Client
     */
    this.postOauthClients = function(body) { 

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw "Missing the required parameter 'body' when calling postOauthClients";
      }


      return this.apiClient.callApi(
        '/api/v2/oauth/clients', 
        'POST', 
        {  }, 
        {  }, 
        {  }, 
        {  }, 
        body, 
        ['PureCloud Auth'], 
        ['application/json'], 
        ['application/json']
      );
    };


    /**
     * Update OAuth Client
     * 
     * @param {String} clientId Client ID
     * @param {module:purecloud-platform-client-v2/model/OAuthClient} body Client
     */
    this.putOauthClient = function(clientId, body) { 

      // verify the required parameter 'clientId' is set
      if (clientId === undefined || clientId === null) {
        throw "Missing the required parameter 'clientId' when calling putOauthClient";
      }

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw "Missing the required parameter 'body' when calling putOauthClient";
      }


      return this.apiClient.callApi(
        '/api/v2/oauth/clients/{clientId}', 
        'PUT', 
        { 'clientId': clientId }, 
        {  }, 
        {  }, 
        {  }, 
        body, 
        ['PureCloud Auth'], 
        ['application/json'], 
        ['application/json']
      );
    };
  };

  return exports;
}));

},{"../ApiClient":8}],27:[function(require,module,exports){
(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['purecloud-platform-client-v2/ApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'));
  } else {
    // Browser globals (root is window)
    if (!root.platformClient) {
      root.platformClient = {};
    }
    root.platformClient.OrganizationApi = factory(root.platformClient.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * Organization service.
   * @module purecloud-platform-client-v2/api/OrganizationApi
   * @version 6.0.1
   */

  /**
   * Constructs a new OrganizationApi. 
   * @alias module:purecloud-platform-client-v2/api/OrganizationApi
   * @class
   * @param {module:purecloud-platform-client-v2/ApiClient} apiClient Optional API client implementation to use,
   * default to {@link module:purecloud-platform-client-v2/ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;



    /**
     * Fetch field config for an entity type
     * 
     * @param {module:purecloud-platform-client-v2/model/String} type Field type
     */
    this.getFieldconfig = function(type) { 

      // verify the required parameter 'type' is set
      if (type === undefined || type === null) {
        throw "Missing the required parameter 'type' when calling getFieldconfig";
      }


      return this.apiClient.callApi(
        '/api/v2/fieldconfig', 
        'GET', 
        {  }, 
        { 'type': type }, 
        {  }, 
        {  }, 
        null, 
        ['PureCloud Auth'], 
        ['application/json'], 
        ['application/json']
      );
    };


    /**
     * Get organization.
     * 
     */
    this.getOrganizationsMe = function() { 


      return this.apiClient.callApi(
        '/api/v2/organizations/me', 
        'GET', 
        {  }, 
        {  }, 
        {  }, 
        {  }, 
        null, 
        ['PureCloud Auth'], 
        ['application/json'], 
        ['application/json']
      );
    };


    /**
     * Update organization
     * 
     * @param {module:purecloud-platform-client-v2/model/String} featureName Organization feature
     * @param {module:purecloud-platform-client-v2/model/FeatureState} enabled New state of feature
     */
    this.patchOrganizationsFeature = function(featureName, enabled) { 

      // verify the required parameter 'featureName' is set
      if (featureName === undefined || featureName === null) {
        throw "Missing the required parameter 'featureName' when calling patchOrganizationsFeature";
      }

      // verify the required parameter 'enabled' is set
      if (enabled === undefined || enabled === null) {
        throw "Missing the required parameter 'enabled' when calling patchOrganizationsFeature";
      }


      return this.apiClient.callApi(
        '/api/v2/organizations/features/{featureName}', 
        'PATCH', 
        { 'featureName': featureName }, 
        {  }, 
        {  }, 
        {  }, 
        enabled, 
        ['PureCloud Auth'], 
        ['application/json'], 
        ['application/json']
      );
    };


    /**
     * Update organization.
     * 
     * @param {Object} opts Optional parameters
     * @param {module:purecloud-platform-client-v2/model/Organization} opts.body Organization
     */
    this.putOrganizationsMe = function(opts) { 
      opts = opts || {};


      return this.apiClient.callApi(
        '/api/v2/organizations/me', 
        'PUT', 
        {  }, 
        {  }, 
        {  }, 
        {  }, 
        opts['body'], 
        ['PureCloud Auth'], 
        ['application/json'], 
        ['application/json']
      );
    };
  };

  return exports;
}));

},{"../ApiClient":8}],28:[function(require,module,exports){
(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['purecloud-platform-client-v2/ApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'));
  } else {
    // Browser globals (root is window)
    if (!root.platformClient) {
      root.platformClient = {};
    }
    root.platformClient.OrganizationAuthorizationApi = factory(root.platformClient.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * OrganizationAuthorization service.
   * @module purecloud-platform-client-v2/api/OrganizationAuthorizationApi
   * @version 6.0.1
   */

  /**
   * Constructs a new OrganizationAuthorizationApi. 
   * @alias module:purecloud-platform-client-v2/api/OrganizationAuthorizationApi
   * @class
   * @param {module:purecloud-platform-client-v2/ApiClient} apiClient Optional API client implementation to use,
   * default to {@link module:purecloud-platform-client-v2/ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;



    /**
     * Delete Org Trust
     * 
     * @param {String} trusteeOrgId Trustee Organization Id
     */
    this.deleteOrgauthorizationTrustee = function(trusteeOrgId) { 

      // verify the required parameter 'trusteeOrgId' is set
      if (trusteeOrgId === undefined || trusteeOrgId === null) {
        throw "Missing the required parameter 'trusteeOrgId' when calling deleteOrgauthorizationTrustee";
      }


      return this.apiClient.callApi(
        '/api/v2/orgauthorization/trustees/{trusteeOrgId}', 
        'DELETE', 
        { 'trusteeOrgId': trusteeOrgId }, 
        {  }, 
        {  }, 
        {  }, 
        null, 
        ['PureCloud Auth'], 
        ['application/json'], 
        ['application/json']
      );
    };


    /**
     * Delete Trustee User
     * 
     * @param {String} trusteeOrgId Trustee Organization Id
     * @param {String} trusteeUserId Trustee User Id
     */
    this.deleteOrgauthorizationTrusteeUser = function(trusteeOrgId, trusteeUserId) { 

      // verify the required parameter 'trusteeOrgId' is set
      if (trusteeOrgId === undefined || trusteeOrgId === null) {
        throw "Missing the required parameter 'trusteeOrgId' when calling deleteOrgauthorizationTrusteeUser";
      }

      // verify the required parameter 'trusteeUserId' is set
      if (trusteeUserId === undefined || trusteeUserId === null) {
        throw "Missing the required parameter 'trusteeUserId' when calling deleteOrgauthorizationTrusteeUser";
      }


      return this.apiClient.callApi(
        '/api/v2/orgauthorization/trustees/{trusteeOrgId}/users/{trusteeUserId}', 
        'DELETE', 
        { 'trusteeOrgId': trusteeOrgId,'trusteeUserId': trusteeUserId }, 
        {  }, 
        {  }, 
        {  }, 
        null, 
        ['PureCloud Auth'], 
        ['application/json'], 
        ['application/json']
      );
    };


    /**
     * Delete Trustee User Roles
     * 
     * @param {String} trusteeOrgId Trustee Organization Id
     * @param {String} trusteeUserId Trustee User Id
     */
    this.deleteOrgauthorizationTrusteeUserRoles = function(trusteeOrgId, trusteeUserId) { 

      // verify the required parameter 'trusteeOrgId' is set
      if (trusteeOrgId === undefined || trusteeOrgId === null) {
        throw "Missing the required parameter 'trusteeOrgId' when calling deleteOrgauthorizationTrusteeUserRoles";
      }

      // verify the required parameter 'trusteeUserId' is set
      if (trusteeUserId === undefined || trusteeUserId === null) {
        throw "Missing the required parameter 'trusteeUserId' when calling deleteOrgauthorizationTrusteeUserRoles";
      }


      return this.apiClient.callApi(
        '/api/v2/orgauthorization/trustees/{trusteeOrgId}/users/{trusteeUserId}/roles', 
        'DELETE', 
        { 'trusteeOrgId': trusteeOrgId,'trusteeUserId': trusteeUserId }, 
        {  }, 
        {  }, 
        {  }, 
        null, 
        ['PureCloud Auth'], 
        ['application/json'], 
        ['application/json']
      );
    };


    /**
     * Delete Org Trust
     * 
     * @param {String} trustorOrgId Trustor Organization Id
     */
    this.deleteOrgauthorizationTrustor = function(trustorOrgId) { 

      // verify the required parameter 'trustorOrgId' is set
      if (trustorOrgId === undefined || trustorOrgId === null) {
        throw "Missing the required parameter 'trustorOrgId' when calling deleteOrgauthorizationTrustor";
      }


      return this.apiClient.callApi(
        '/api/v2/orgauthorization/trustors/{trustorOrgId}', 
        'DELETE', 
        { 'trustorOrgId': trustorOrgId }, 
        {  }, 
        {  }, 
        {  }, 
        null, 
        ['PureCloud Auth'], 
        ['application/json'], 
        ['application/json']
      );
    };


    /**
     * Delete Trustee User
     * 
     * @param {String} trustorOrgId Trustor Organization Id
     * @param {String} trusteeUserId Trustee User Id
     */
    this.deleteOrgauthorizationTrustorUser = function(trustorOrgId, trusteeUserId) { 

      // verify the required parameter 'trustorOrgId' is set
      if (trustorOrgId === undefined || trustorOrgId === null) {
        throw "Missing the required parameter 'trustorOrgId' when calling deleteOrgauthorizationTrustorUser";
      }

      // verify the required parameter 'trusteeUserId' is set
      if (trusteeUserId === undefined || trusteeUserId === null) {
        throw "Missing the required parameter 'trusteeUserId' when calling deleteOrgauthorizationTrustorUser";
      }


      return this.apiClient.callApi(
        '/api/v2/orgauthorization/trustors/{trustorOrgId}/users/{trusteeUserId}', 
        'DELETE', 
        { 'trustorOrgId': trustorOrgId,'trusteeUserId': trusteeUserId }, 
        {  }, 
        {  }, 
        {  }, 
        null, 
        ['PureCloud Auth'], 
        ['application/json'], 
        ['application/json']
      );
    };


    /**
     * Get Pairing Info
     * 
     * @param {String} pairingId Pairing Id
     */
    this.getOrgauthorizationPairing = function(pairingId) { 

      // verify the required parameter 'pairingId' is set
      if (pairingId === undefined || pairingId === null) {
        throw "Missing the required parameter 'pairingId' when calling getOrgauthorizationPairing";
      }


      return this.apiClient.callApi(
        '/api/v2/orgauthorization/pairings/{pairingId}', 
        'GET', 
        { 'pairingId': pairingId }, 
        {  }, 
        {  }, 
        {  }, 
        null, 
        ['PureCloud Auth'], 
        ['application/json'], 
        ['application/json']
      );
    };


    /**
     * Get Org Trust
     * 
     * @param {String} trusteeOrgId Trustee Organization Id
     */
    this.getOrgauthorizationTrustee = function(trusteeOrgId) { 

      // verify the required parameter 'trusteeOrgId' is set
      if (trusteeOrgId === undefined || trusteeOrgId === null) {
        throw "Missing the required parameter 'trusteeOrgId' when calling getOrgauthorizationTrustee";
      }


      return this.apiClient.callApi(
        '/api/v2/orgauthorization/trustees/{trusteeOrgId}', 
        'GET', 
        { 'trusteeOrgId': trusteeOrgId }, 
        {  }, 
        {  }, 
        {  }, 
        null, 
        ['PureCloud Auth'], 
        ['application/json'], 
        ['application/json']
      );
    };


    /**
     * Get Trustee User
     * 
     * @param {String} trusteeOrgId Trustee Organization Id
     * @param {String} trusteeUserId Trustee User Id
     */
    this.getOrgauthorizationTrusteeUser = function(trusteeOrgId, trusteeUserId) { 

      // verify the required parameter 'trusteeOrgId' is set
      if (trusteeOrgId === undefined || trusteeOrgId === null) {
        throw "Missing the required parameter 'trusteeOrgId' when calling getOrgauthorizationTrusteeUser";
      }

      // verify the required parameter 'trusteeUserId' is set
      if (trusteeUserId === undefined || trusteeUserId === null) {
        throw "Missing the required parameter 'trusteeUserId' when calling getOrgauthorizationTrusteeUser";
      }


      return this.apiClient.callApi(
        '/api/v2/orgauthorization/trustees/{trusteeOrgId}/users/{trusteeUserId}', 
        'GET', 
        { 'trusteeOrgId': trusteeOrgId,'trusteeUserId': trusteeUserId }, 
        {  }, 
        {  }, 
        {  }, 
        null, 
        ['PureCloud Auth'], 
        ['application/json'], 
        ['application/json']
      );
    };


    /**
     * Get Trustee User Roles
     * 
     * @param {String} trusteeOrgId Trustee Organization Id
     * @param {String} trusteeUserId Trustee User Id
     */
    this.getOrgauthorizationTrusteeUserRoles = function(trusteeOrgId, trusteeUserId) { 

      // verify the required parameter 'trusteeOrgId' is set
      if (trusteeOrgId === undefined || trusteeOrgId === null) {
        throw "Missing the required parameter 'trusteeOrgId' when calling getOrgauthorizationTrusteeUserRoles";
      }

      // verify the required parameter 'trusteeUserId' is set
      if (trusteeUserId === undefined || trusteeUserId === null) {
        throw "Missing the required parameter 'trusteeUserId' when calling getOrgauthorizationTrusteeUserRoles";
      }


      return this.apiClient.callApi(
        '/api/v2/orgauthorization/trustees/{trusteeOrgId}/users/{trusteeUserId}/roles', 
        'GET', 
        { 'trusteeOrgId': trusteeOrgId,'trusteeUserId': trusteeUserId }, 
        {  }, 
        {  }, 
        {  }, 
        null, 
        ['PureCloud Auth'], 
        ['application/json'], 
        ['application/json']
      );
    };


    /**
     * The list of trustee users for this organization (i.e. users granted access to this organization).
     * 
     * @param {String} trusteeOrgId Trustee Organization Id
     * @param {Object} opts Optional parameters
     * @param {Number} opts.pageSize Page size (default to 25)
     * @param {Number} opts.pageNumber Page number (default to 1)
     */
    this.getOrgauthorizationTrusteeUsers = function(trusteeOrgId, opts) { 
      opts = opts || {};

      // verify the required parameter 'trusteeOrgId' is set
      if (trusteeOrgId === undefined || trusteeOrgId === null) {
        throw "Missing the required parameter 'trusteeOrgId' when calling getOrgauthorizationTrusteeUsers";
      }


      return this.apiClient.callApi(
        '/api/v2/orgauthorization/trustees/{trusteeOrgId}/users', 
        'GET', 
        { 'trusteeOrgId': trusteeOrgId }, 
        { 'pageSize': opts['pageSize'],'pageNumber': opts['pageNumber'] }, 
        {  }, 
        {  }, 
        null, 
        ['PureCloud Auth'], 
        ['application/json'], 
        ['application/json']
      );
    };


    /**
     * The list of trustees for this organization (i.e. organizations granted access to this organization).
     * 
     * @param {Object} opts Optional parameters
     * @param {Number} opts.pageSize Page size (default to 25)
     * @param {Number} opts.pageNumber Page number (default to 1)
     */
    this.getOrgauthorizationTrustees = function(opts) { 
      opts = opts || {};


      return this.apiClient.callApi(
        '/api/v2/orgauthorization/trustees', 
        'GET', 
        {  }, 
        { 'pageSize': opts['pageSize'],'pageNumber': opts['pageNumber'] }, 
        {  }, 
        {  }, 
        null, 
        ['PureCloud Auth'], 
        ['application/json'], 
        ['application/json']
      );
    };


    /**
     * Get Org Trust
     * 
     * @param {String} trustorOrgId Trustor Organization Id
     */
    this.getOrgauthorizationTrustor = function(trustorOrgId) { 

      // verify the required parameter 'trustorOrgId' is set
      if (trustorOrgId === undefined || trustorOrgId === null) {
        throw "Missing the required parameter 'trustorOrgId' when calling getOrgauthorizationTrustor";
      }


      return this.apiClient.callApi(
        '/api/v2/orgauthorization/trustors/{trustorOrgId}', 
        'GET', 
        { 'trustorOrgId': trustorOrgId }, 
        {  }, 
        {  }, 
        {  }, 
        null, 
        ['PureCloud Auth'], 
        ['application/json'], 
        ['application/json']
      );
    };


    /**
     * Get Trustee User
     * 
     * @param {String} trustorOrgId Trustor Organization Id
     * @param {String} trusteeUserId Trustee User Id
     */
    this.getOrgauthorizationTrustorUser = function(trustorOrgId, trusteeUserId) { 

      // verify the required parameter 'trustorOrgId' is set
      if (trustorOrgId === undefined || trustorOrgId === null) {
        throw "Missing the required parameter 'trustorOrgId' when calling getOrgauthorizationTrustorUser";
      }

      // verify the required parameter 'trusteeUserId' is set
      if (trusteeUserId === undefined || trusteeUserId === null) {
        throw "Missing the required parameter 'trusteeUserId' when calling getOrgauthorizationTrustorUser";
      }


      return this.apiClient.callApi(
        '/api/v2/orgauthorization/trustors/{trustorOrgId}/users/{trusteeUserId}', 
        'GET', 
        { 'trustorOrgId': trustorOrgId,'trusteeUserId': trusteeUserId }, 
        {  }, 
        {  }, 
        {  }, 
        null, 
        ['PureCloud Auth'], 
        ['application/json'], 
        ['application/json']
      );
    };


    /**
     * The list of users in the trustor organization (i.e. users granted access).
     * 
     * @param {String} trustorOrgId Trustee Organization Id
     * @param {Object} opts Optional parameters
     * @param {Number} opts.pageSize Page size (default to 25)
     * @param {Number} opts.pageNumber Page number (default to 1)
     */
    this.getOrgauthorizationTrustorUsers = function(trustorOrgId, opts) { 
      opts = opts || {};

      // verify the required parameter 'trustorOrgId' is set
      if (trustorOrgId === undefined || trustorOrgId === null) {
        throw "Missing the required parameter 'trustorOrgId' when calling getOrgauthorizationTrustorUsers";
      }


      return this.apiClient.callApi(
        '/api/v2/orgauthorization/trustors/{trustorOrgId}/users', 
        'GET', 
        { 'trustorOrgId': trustorOrgId }, 
        { 'pageSize': opts['pageSize'],'pageNumber': opts['pageNumber'] }, 
        {  }, 
        {  }, 
        null, 
        ['PureCloud Auth'], 
        ['application/json'], 
        ['application/json']
      );
    };


    /**
     * The list of organizations that have authorized/trusted your organization.
     * 
     * @param {Object} opts Optional parameters
     * @param {Number} opts.pageSize Page size (default to 25)
     * @param {Number} opts.pageNumber Page number (default to 1)
     */
    this.getOrgauthorizationTrustors = function(opts) { 
      opts = opts || {};


      return this.apiClient.callApi(
        '/api/v2/orgauthorization/trustors', 
        'GET', 
        {  }, 
        { 'pageSize': opts['pageSize'],'pageNumber': opts['pageNumber'] }, 
        {  }, 
        {  }, 
        null, 
        ['PureCloud Auth'], 
        ['application/json'], 
        ['application/json']
      );
    };


    /**
     * A pairing id is created by the trustee and given to the trustor to create a trust.
     * 
     * @param {module:purecloud-platform-client-v2/model/TrustRequestCreate} body Pairing Info
     */
    this.postOrgauthorizationPairings = function(body) { 

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw "Missing the required parameter 'body' when calling postOrgauthorizationPairings";
      }


      return this.apiClient.callApi(
        '/api/v2/orgauthorization/pairings', 
        'POST', 
        {  }, 
        {  }, 
        {  }, 
        {  }, 
        body, 
        ['PureCloud Auth'], 
        ['application/json'], 
        ['application/json']
      );
    };


    /**
     * Add a user to the trust.
     * 
     * @param {String} trusteeOrgId Trustee Organization Id
     * @param {module:purecloud-platform-client-v2/model/TrustUserCreate} body Trust
     */
    this.postOrgauthorizationTrusteeUsers = function(trusteeOrgId, body) { 

      // verify the required parameter 'trusteeOrgId' is set
      if (trusteeOrgId === undefined || trusteeOrgId === null) {
        throw "Missing the required parameter 'trusteeOrgId' when calling postOrgauthorizationTrusteeUsers";
      }

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw "Missing the required parameter 'body' when calling postOrgauthorizationTrusteeUsers";
      }


      return this.apiClient.callApi(
        '/api/v2/orgauthorization/trustees/{trusteeOrgId}/users', 
        'POST', 
        { 'trusteeOrgId': trusteeOrgId }, 
        {  }, 
        {  }, 
        {  }, 
        body, 
        ['PureCloud Auth'], 
        ['application/json'], 
        ['application/json']
      );
    };


    /**
     * Create a new organization authorization trust. This is required to grant other organizations access to your organization.
     * 
     * @param {module:purecloud-platform-client-v2/model/TrustCreate} body Trust
     */
    this.postOrgauthorizationTrustees = function(body) { 

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw "Missing the required parameter 'body' when calling postOrgauthorizationTrustees";
      }


      return this.apiClient.callApi(
        '/api/v2/orgauthorization/trustees', 
        'POST', 
        {  }, 
        {  }, 
        {  }, 
        {  }, 
        body, 
        ['PureCloud Auth'], 
        ['application/json'], 
        ['application/json']
      );
    };


    /**
     * Get Org Trustee Audits
     * 
     * @param {module:purecloud-platform-client-v2/model/TrusteeAuditQueryRequest} body Values to scope the request.
     * @param {Object} opts Optional parameters
     * @param {Number} opts.pageSize Page size (default to 25)
     * @param {Number} opts.pageNumber Page number (default to 1)
     * @param {String} opts.sortBy Sort by (default to timestamp)
     * @param {String} opts.sortOrder Sort order (default to descending)
     */
    this.postOrgauthorizationTrusteesAudits = function(body, opts) { 
      opts = opts || {};

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw "Missing the required parameter 'body' when calling postOrgauthorizationTrusteesAudits";
      }


      return this.apiClient.callApi(
        '/api/v2/orgauthorization/trustees/audits', 
        'POST', 
        {  }, 
        { 'pageSize': opts['pageSize'],'pageNumber': opts['pageNumber'],'sortBy': opts['sortBy'],'sortOrder': opts['sortOrder'] }, 
        {  }, 
        {  }, 
        body, 
        ['PureCloud Auth'], 
        ['application/json'], 
        ['application/json']
      );
    };


    /**
     * Get Org Trustor Audits
     * 
     * @param {module:purecloud-platform-client-v2/model/TrustorAuditQueryRequest} body Values to scope the request.
     * @param {Object} opts Optional parameters
     * @param {Number} opts.pageSize Page size (default to 25)
     * @param {Number} opts.pageNumber Page number (default to 1)
     * @param {String} opts.sortBy Sort by (default to timestamp)
     * @param {String} opts.sortOrder Sort order (default to descending)
     */
    this.postOrgauthorizationTrustorAudits = function(body, opts) { 
      opts = opts || {};

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw "Missing the required parameter 'body' when calling postOrgauthorizationTrustorAudits";
      }


      return this.apiClient.callApi(
        '/api/v2/orgauthorization/trustor/audits', 
        'POST', 
        {  }, 
        { 'pageSize': opts['pageSize'],'pageNumber': opts['pageNumber'],'sortBy': opts['sortBy'],'sortOrder': opts['sortOrder'] }, 
        {  }, 
        {  }, 
        body, 
        ['PureCloud Auth'], 
        ['application/json'], 
        ['application/json']
      );
    };


    /**
     * Update Org Trust
     * 
     * @param {String} trusteeOrgId Trustee Organization Id
     * @param {module:purecloud-platform-client-v2/model/Trustee} body Client
     */
    this.putOrgauthorizationTrustee = function(trusteeOrgId, body) { 

      // verify the required parameter 'trusteeOrgId' is set
      if (trusteeOrgId === undefined || trusteeOrgId === null) {
        throw "Missing the required parameter 'trusteeOrgId' when calling putOrgauthorizationTrustee";
      }

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw "Missing the required parameter 'body' when calling putOrgauthorizationTrustee";
      }


      return this.apiClient.callApi(
        '/api/v2/orgauthorization/trustees/{trusteeOrgId}', 
        'PUT', 
        { 'trusteeOrgId': trusteeOrgId }, 
        {  }, 
        {  }, 
        {  }, 
        body, 
        ['PureCloud Auth'], 
        ['application/json'], 
        ['application/json']
      );
    };


    /**
     * Update Trustee User Roles
     * 
     * @param {String} trusteeOrgId Trustee Organization Id
     * @param {String} trusteeUserId Trustee User Id
     * @param {Array.<module:purecloud-platform-client-v2/model/String>} body List of roles
     */
    this.putOrgauthorizationTrusteeUserRoles = function(trusteeOrgId, trusteeUserId, body) { 

      // verify the required parameter 'trusteeOrgId' is set
      if (trusteeOrgId === undefined || trusteeOrgId === null) {
        throw "Missing the required parameter 'trusteeOrgId' when calling putOrgauthorizationTrusteeUserRoles";
      }

      // verify the required parameter 'trusteeUserId' is set
      if (trusteeUserId === undefined || trusteeUserId === null) {
        throw "Missing the required parameter 'trusteeUserId' when calling putOrgauthorizationTrusteeUserRoles";
      }

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw "Missing the required parameter 'body' when calling putOrgauthorizationTrusteeUserRoles";
      }


      return this.apiClient.callApi(
        '/api/v2/orgauthorization/trustees/{trusteeOrgId}/users/{trusteeUserId}/roles', 
        'PUT', 
        { 'trusteeOrgId': trusteeOrgId,'trusteeUserId': trusteeUserId }, 
        {  }, 
        {  }, 
        {  }, 
        body, 
        ['PureCloud Auth'], 
        ['application/json'], 
        ['application/json']
      );
    };


    /**
     * Add a Trustee user to the trust.
     * 
     * @param {String} trustorOrgId Trustor Organization Id
     * @param {String} trusteeUserId Trustee User Id
     */
    this.putOrgauthorizationTrustorUser = function(trustorOrgId, trusteeUserId) { 

      // verify the required parameter 'trustorOrgId' is set
      if (trustorOrgId === undefined || trustorOrgId === null) {
        throw "Missing the required parameter 'trustorOrgId' when calling putOrgauthorizationTrustorUser";
      }

      // verify the required parameter 'trusteeUserId' is set
      if (trusteeUserId === undefined || trusteeUserId === null) {
        throw "Missing the required parameter 'trusteeUserId' when calling putOrgauthorizationTrustorUser";
      }


      return this.apiClient.callApi(
        '/api/v2/orgauthorization/trustors/{trustorOrgId}/users/{trusteeUserId}', 
        'PUT', 
        { 'trustorOrgId': trustorOrgId,'trusteeUserId': trusteeUserId }, 
        {  }, 
        {  }, 
        {  }, 
        null, 
        ['PureCloud Auth'], 
        ['application/json'], 
        ['application/json']
      );
    };
  };

  return exports;
}));

},{"../ApiClient":8}],29:[function(require,module,exports){
(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['purecloud-platform-client-v2/ApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'));
  } else {
    // Browser globals (root is window)
    if (!root.platformClient) {
      root.platformClient = {};
    }
    root.platformClient.OutboundApi = factory(root.platformClient.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * Outbound service.
   * @module purecloud-platform-client-v2/api/OutboundApi
   * @version 6.0.1
   */

  /**
   * Constructs a new OutboundApi. 
   * @alias module:purecloud-platform-client-v2/api/OutboundApi
   * @class
   * @param {module:purecloud-platform-client-v2/ApiClient} apiClient Optional API client implementation to use,
   * default to {@link module:purecloud-platform-client-v2/ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;



    /**
     * Delete attempt limits
     * 
     * @param {String} attemptLimitsId Attempt limits ID
     */
    this.deleteOutboundAttemptlimit = function(attemptLimitsId) { 

      // verify the required parameter 'attemptLimitsId' is set
      if (attemptLimitsId === undefined || attemptLimitsId === null) {
        throw "Missing the required parameter 'attemptLimitsId' when calling deleteOutboundAttemptlimit";
      }


      return this.apiClient.callApi(
        '/api/v2/outbound/attemptlimits/{attemptLimitsId}', 
        'DELETE', 
        { 'attemptLimitsId': attemptLimitsId }, 
        {  }, 
        {  }, 
        {  }, 
        null, 
        ['PureCloud Auth'], 
        ['application/json'], 
        ['application/json']
      );
    };


    /**
     * Delete callable time set
     * 
     * @param {String} callableTimeSetId Callable Time Set ID
     */
    this.deleteOutboundCallabletimeset = function(callableTimeSetId) { 

      // verify the required parameter 'callableTimeSetId' is set
      if (callableTimeSetId === undefined || callableTimeSetId === null) {
        throw "Missing the required parameter 'callableTimeSetId' when calling deleteOutboundCallabletimeset";
      }


      return this.apiClient.callApi(
        '/api/v2/outbound/callabletimesets/{callableTimeSetId}', 
        'DELETE', 
        { 'callableTimeSetId': callableTimeSetId }, 
        {  }, 
        {  }, 
        {  }, 
        null, 
        ['PureCloud Auth'], 
        ['application/json'], 
        ['application/json']
      );
    };


    /**
     * Delete a dialer call analysis response set.
     * 
     * @param {String} callAnalysisSetId Call Analysis Response Set ID
     */
    this.deleteOutboundCallanalysisresponseset = function(callAnalysisSetId) { 

      // verify the required parameter 'callAnalysisSetId' is set
      if (callAnalysisSetId === undefined || callAnalysisSetId === null) {
        throw "Missing the required parameter 'callAnalysisSetId' when calling deleteOutboundCallanalysisresponseset";
      }


      return this.apiClient.callApi(
        '/api/v2/outbound/callanalysisresponsesets/{callAnalysisSetId}', 
        'DELETE', 
        { 'callAnalysisSetId': callAnalysisSetId }, 
        {  }, 
        {  }, 
        {  }, 
        null, 
        ['PureCloud Auth'], 
        ['application/json'], 
        ['application/json']
      );
    };


    /**
     * Delete a campaign.
     * 
     * @param {String} campaignId Campaign ID
     */
    this.deleteOutboundCampaign = function(campaignId) { 

      // verify the required parameter 'campaignId' is set
      if (campaignId === undefined || campaignId === null) {
        throw "Missing the required parameter 'campaignId' when calling deleteOutboundCampaign";
      }


      return this.apiClient.callApi(
        '/api/v2/outbound/campaigns/{campaignId}', 
        'DELETE', 
        { 'campaignId': campaignId }, 
        {  }, 
        {  }, 
        {  }, 
        null, 
        ['PureCloud Auth'], 
        ['application/json'], 
        ['application/json']
      );
    };


    /**
     * Reset campaign progress and recycle the campaign
     * 
     * @param {String} campaignId Campaign ID
     */
    this.deleteOutboundCampaignProgress = function(campaignId) { 

      // verify the required parameter 'campaignId' is set
      if (campaignId === undefined || campaignId === null) {
        throw "Missing the required parameter 'campaignId' when calling deleteOutboundCampaignProgress";
      }


      return this.apiClient.callApi(
        '/api/v2/outbound/campaigns/{campaignId}/progress', 
        'DELETE', 
        { 'campaignId': campaignId }, 
        {  }, 
        {  }, 
        {  }, 
        null, 
        ['PureCloud Auth'], 
        ['application/json'], 
        ['application/json']
      );
    };


    /**
     * Delete Campaign Rule
     * 
     * @param {String} campaignRuleId Campaign Rule ID
     */
    this.deleteOutboundCampaignrule = function(campaignRuleId) { 

      // verify the required parameter 'campaignRuleId' is set
      if (campaignRuleId === undefined || campaignRuleId === null) {
        throw "Missing the required parameter 'campaignRuleId' when calling deleteOutboundCampaignrule";
      }


      return this.apiClient.callApi(
        '/api/v2/outbound/campaignrules/{campaignRuleId}', 
        'DELETE', 
        { 'campaignRuleId': campaignRuleId }, 
        {  }, 
        {  }, 
        {  }, 
        null, 
        ['PureCloud Auth'], 
        ['application/json'], 
        ['application/json']
      );
    };


    /**
     * Delete a contact list.
     * 
     * @param {String} contactListId ContactList ID
     */
    this.deleteOutboundContactlist = function(contactListId) { 

      // verify the required parameter 'contactListId' is set
      if (contactListId === undefined || contactListId === null) {
        throw "Missing the required parameter 'contactListId' when calling deleteOutboundContactlist";
      }


      return this.apiClient.callApi(
        '/api/v2/outbound/contactlists/{contactListId}', 
        'DELETE', 
        { 'contactListId': contactListId }, 
        {  }, 
        {  }, 
        {  }, 
        null, 
        ['PureCloud Auth'], 
        ['application/json'], 
        ['application/json']
      );
    };


    /**
     * Delete a contact.
     * 
     * @param {String} contactListId Contact List ID
     * @param {String} contactId Contact ID
     */
    this.deleteOutboundContactlistContact = function(contactListId, contactId) { 

      // verify the required parameter 'contactListId' is set
      if (contactListId === undefined || contactListId === null) {
        throw "Missing the required parameter 'contactListId' when calling deleteOutboundContactlistContact";
      }

      // verify the required parameter 'contactId' is set
      if (contactId === undefined || contactId === null) {
        throw "Missing the required parameter 'contactId' when calling deleteOutboundContactlistContact";
      }


      return this.apiClient.callApi(
        '/api/v2/outbound/contactlists/{contactListId}/contacts/{contactId}', 
        'DELETE', 
        { 'contactListId': contactListId,'contactId': contactId }, 
        {  }, 
        {  }, 
        {  }, 
        null, 
        ['PureCloud Auth'], 
        ['application/json'], 
        ['application/json']
      );
    };


    /**
     * Delete contacts from a contact list.
     * 
     * @param {String} contactListId Contact List ID
     * @param {Array.<String>} contactIds ContactIds to delete.
     */
    this.deleteOutboundContactlistContacts = function(contactListId, contactIds) { 

      // verify the required parameter 'contactListId' is set
      if (contactListId === undefined || contactListId === null) {
        throw "Missing the required parameter 'contactListId' when calling deleteOutboundContactlistContacts";
      }

      // verify the required parameter 'contactIds' is set
      if (contactIds === undefined || contactIds === null) {
        throw "Missing the required parameter 'contactIds' when calling deleteOutboundContactlistContacts";
      }


      return this.apiClient.callApi(
        '/api/v2/outbound/contactlists/{contactListId}/contacts', 
        'DELETE', 
        { 'contactListId': contactListId }, 
        { 'contactIds': this.apiClient.buildCollectionParam(contactIds, 'multi') }, 
        {  }, 
        {  }, 
        null, 
        ['PureCloud Auth'], 
        ['application/json'], 
        ['application/json']
      );
    };


    /**
     * Delete Contact List Filter
     * 
     * @param {String} contactListFilterId Contact List Filter ID
     */
    this.deleteOutboundContactlistfilter = function(contactListFilterId) { 

      // verify the required parameter 'contactListFilterId' is set
      if (contactListFilterId === undefined || contactListFilterId === null) {
        throw "Missing the required parameter 'contactListFilterId' when calling deleteOutboundContactlistfilter";
      }


      return this.apiClient.callApi(
        '/api/v2/outbound/contactlistfilters/{contactListFilterId}', 
        'DELETE', 
        { 'contactListFilterId': contactListFilterId }, 
        {  }, 
        {  }, 
        {  }, 
        null, 
        ['PureCloud Auth'], 
        ['application/json'], 
        ['application/json']
      );
    };


    /**
     * Delete dialer DNC list
     * 
     * @param {String} dncListId DncList ID
     */
    this.deleteOutboundDnclist = function(dncListId) { 

      // verify the required parameter 'dncListId' is set
      if (dncListId === undefined || dncListId === null) {
        throw "Missing the required parameter 'dncListId' when calling deleteOutboundDnclist";
      }


      return this.apiClient.callApi(
        '/api/v2/outbound/dnclists/{dncListId}', 
        'DELETE', 
        { 'dncListId': dncListId }, 
        {  }, 
        {  }, 
        {  }, 
        null, 
        ['PureCloud Auth'], 
        ['application/json'], 
        ['application/json']
      );
    };


    /**
     * Delete a Rule set.
     * 
     * @param {String} ruleSetId Rule Set ID
     */
    this.deleteOutboundRuleset = function(ruleSetId) { 

      // verify the required parameter 'ruleSetId' is set
      if (ruleSetId === undefined || ruleSetId === null) {
        throw "Missing the required parameter 'ruleSetId' when calling deleteOutboundRuleset";
      }


      return this.apiClient.callApi(
        '/api/v2/outbound/rulesets/{ruleSetId}', 
        'DELETE', 
        { 'ruleSetId': ruleSetId }, 
        {  }, 
        {  }, 
        {  }, 
        null, 
        ['PureCloud Auth'], 
        ['application/json'], 
        ['application/json']
      );
    };


    /**
     * Delete a dialer campaign schedule.
     * 
     * @param {String} campaignId Campaign ID
     */
    this.deleteOutboundSchedulesCampaign = function(campaignId) { 

      // verify the required parameter 'campaignId' is set
      if (campaignId === undefined || campaignId === null) {
        throw "Missing the required parameter 'campaignId' when calling deleteOutboundSchedulesCampaign";
      }


      return this.apiClient.callApi(
        '/api/v2/outbound/schedules/campaigns/{campaignId}', 
        'DELETE', 
        { 'campaignId': campaignId }, 
        {  }, 
        {  }, 
        {  }, 
        null, 
        ['PureCloud Auth'], 
        ['application/json'], 
        ['application/json']
      );
    };


    /**
     * Delete a dialer sequence schedule.
     * 
     * @param {String} sequenceId Sequence ID
     */
    this.deleteOutboundSchedulesSequence = function(sequenceId) { 

      // verify the required parameter 'sequenceId' is set
      if (sequenceId === undefined || sequenceId === null) {
        throw "Missing the required parameter 'sequenceId' when calling deleteOutboundSchedulesSequence";
      }


      return this.apiClient.callApi(
        '/api/v2/outbound/schedules/sequences/{sequenceId}', 
        'DELETE', 
        { 'sequenceId': sequenceId }, 
        {  }, 
        {  }, 
        {  }, 
        null, 
        ['PureCloud Auth'], 
        ['application/json'], 
        ['application/json']
      );
    };


    /**
     * Delete a dialer campaign sequence.
     * 
     * @param {String} sequenceId Campaign Sequence ID
     */
    this.deleteOutboundSequence = function(sequenceId) { 

      // verify the required parameter 'sequenceId' is set
      if (sequenceId === undefined || sequenceId === null) {
        throw "Missing the required parameter 'sequenceId' when calling deleteOutboundSequence";
      }


      return this.apiClient.callApi(
        '/api/v2/outbound/sequences/{sequenceId}', 
        'DELETE', 
        { 'sequenceId': sequenceId }, 
        {  }, 
        {  }, 
        {  }, 
        null, 
        ['PureCloud Auth'], 
        ['application/json'], 
        ['application/json']
      );
    };


    /**
     * Get attempt limits
     * 
     * @param {String} attemptLimitsId Attempt limits ID
     */
    this.getOutboundAttemptlimit = function(attemptLimitsId) { 

      // verify the required parameter 'attemptLimitsId' is set
      if (attemptLimitsId === undefined || attemptLimitsId === null) {
        throw "Missing the required parameter 'attemptLimitsId' when calling getOutboundAttemptlimit";
      }


      return this.apiClient.callApi(
        '/api/v2/outbound/attemptlimits/{attemptLimitsId}', 
        'GET', 
        { 'attemptLimitsId': attemptLimitsId }, 
        {  }, 
        {  }, 
        {  }, 
        null, 
        ['PureCloud Auth'], 
        ['application/json'], 
        ['application/json']
      );
    };


    /**
     * Query attempt limits list
     * 
     * @param {Object} opts Optional parameters
     * @param {Number} opts.pageSize Page size (default to 25)
     * @param {Number} opts.pageNumber Page number (default to 1)
     * @param {module:purecloud-platform-client-v2/model/String} opts.filterType Filter type (default to Prefix)
     * @param {String} opts.name Name
     * @param {String} opts.sortBy Sort by
     * @param {module:purecloud-platform-client-v2/model/String} opts.sortOrder Sort order (default to a)
     */
    this.getOutboundAttemptlimits = function(opts) { 
      opts = opts || {};


      return this.apiClient.callApi(
        '/api/v2/outbound/attemptlimits', 
        'GET', 
        {  }, 
        { 'pageSize': opts['pageSize'],'pageNumber': opts['pageNumber'],'filterType': opts['filterType'],'name': opts['name'],'sortBy': opts['sortBy'],'sortOrder': opts['sortOrder'] }, 
        {  }, 
        {  }, 
        null, 
        ['PureCloud Auth'], 
        ['application/json'], 
        ['application/json']
      );
    };


    /**
     * Get callable time set
     * 
     * @param {String} callableTimeSetId Callable Time Set ID
     */
    this.getOutboundCallabletimeset = function(callableTimeSetId) { 

      // verify the required parameter 'callableTimeSetId' is set
      if (callableTimeSetId === undefined || callableTimeSetId === null) {
        throw "Missing the required parameter 'callableTimeSetId' when calling getOutboundCallabletimeset";
      }


      return this.apiClient.callApi(
        '/api/v2/outbound/callabletimesets/{callableTimeSetId}', 
        'GET', 
        { 'callableTimeSetId': callableTimeSetId }, 
        {  }, 
        {  }, 
        {  }, 
        null, 
        ['PureCloud Auth'], 
        ['application/json'], 
        ['application/json']
      );
    };


    /**
     * Query callable time set list
     * 
     * @param {Object} opts Optional parameters
     * @param {Number} opts.pageSize Page size (default to 25)
     * @param {Number} opts.pageNumber Page number (default to 1)
     * @param {module:purecloud-platform-client-v2/model/String} opts.filterType Filter type (default to Prefix)
     * @param {String} opts.name Name
     * @param {String} opts.sortBy Sort by
     * @param {module:purecloud-platform-client-v2/model/String} opts.sortOrder Sort order (default to a)
     */
    this.getOutboundCallabletimesets = function(opts) { 
      opts = opts || {};


      return this.apiClient.callApi(
        '/api/v2/outbound/callabletimesets', 
        'GET', 
        {  }, 
        { 'pageSize': opts['pageSize'],'pageNumber': opts['pageNumber'],'filterType': opts['filterType'],'name': opts['name'],'sortBy': opts['sortBy'],'sortOrder': opts['sortOrder'] }, 
        {  }, 
        {  }, 
        null, 
        ['PureCloud Auth'], 
        ['application/json'], 
        ['application/json']
      );
    };


    /**
     * Get a dialer call analysis response set.
     * 
     * @param {String} callAnalysisSetId Call Analysis Response Set ID
     */
    this.getOutboundCallanalysisresponseset = function(callAnalysisSetId) { 

      // verify the required parameter 'callAnalysisSetId' is set
      if (callAnalysisSetId === undefined || callAnalysisSetId === null) {
        throw "Missing the required parameter 'callAnalysisSetId' when calling getOutboundCallanalysisresponseset";
      }


      return this.apiClient.callApi(
        '/api/v2/outbound/callanalysisresponsesets/{callAnalysisSetId}', 
        'GET', 
        { 'callAnalysisSetId': callAnalysisSetId }, 
        {  }, 
        {  }, 
        {  }, 
        null, 
        ['PureCloud Auth'], 
        ['application/json'], 
        ['application/json']
      );
    };


    /**
     * Query a list of dialer call analysis response sets.
     * 
     * @param {Object} opts Optional parameters
     * @param {Number} opts.pageSize Page size (default to 25)
     * @param {Number} opts.pageNumber Page number (default to 1)
     * @param {module:purecloud-platform-client-v2/model/String} opts.filterType Filter type (default to Prefix)
     * @param {String} opts.name Name
     * @param {String} opts.sortBy Sort by
     * @param {module:purecloud-platform-client-v2/model/String} opts.sortOrder Sort order (default to a)
     */
    this.getOutboundCallanalysisresponsesets = function(opts) { 
      opts = opts || {};


      return this.apiClient.callApi(
        '/api/v2/outbound/callanalysisresponsesets', 
        'GET', 
        {  }, 
        { 'pageSize': opts['pageSize'],'pageNumber': opts['pageNumber'],'filterType': opts['filterType'],'name': opts['name'],'sortBy': opts['sortBy'],'sortOrder': opts['sortOrder'] }, 
        {  }, 
        {  }, 
        null, 
        ['PureCloud Auth'], 
        ['application/json'], 
        ['application/json']
      );
    };


    /**
     * Get dialer campaign.
     * 
     * @param {String} campaignId Campaign ID
     */
    this.getOutboundCampaign = function(campaignId) { 

      // verify the required parameter 'campaignId' is set
      if (campaignId === undefined || campaignId === null) {
        throw "Missing the required parameter 'campaignId' when calling getOutboundCampaign";
      }


      return this.apiClient.callApi(
        '/api/v2/outbound/campaigns/{campaignId}', 
        'GET', 
        { 'campaignId': campaignId }, 
        {  }, 
        {  }, 
        {  }, 
        null, 
        ['PureCloud Auth'], 
        ['application/json'], 
        ['application/json']
      );
    };


    /**
     * Get campaign diagnostics
     * 
     * @param {String} campaignId Campaign ID
     */
    this.getOutboundCampaignDiagnostics = function(campaignId) { 

      // verify the required parameter 'campaignId' is set
      if (campaignId === undefined || campaignId === null) {
        throw "Missing the required parameter 'campaignId' when calling getOutboundCampaignDiagnostics";
      }


      return this.apiClient.callApi(
        '/api/v2/outbound/campaigns/{campaignId}/diagnostics', 
        'GET', 
        { 'campaignId': campaignId }, 
        {  }, 
        {  }, 
        {  }, 
        null, 
        ['PureCloud Auth'], 
        ['application/json'], 
        ['application/json']
      );
    };


    /**
     * Get dialer campaign interactions.
     * 
     * @param {String} campaignId Campaign ID
     */
    this.getOutboundCampaignInteractions = function(campaignId) { 

      // verify the required parameter 'campaignId' is set
      if (campaignId === undefined || campaignId === null) {
        throw "Missing the required parameter 'campaignId' when calling getOutboundCampaignInteractions";
      }


      return this.apiClient.callApi(
        '/api/v2/outbound/campaigns/{campaignId}/interactions', 
        'GET', 
        { 'campaignId': campaignId }, 
        {  }, 
        {  }, 
        {  }, 
        null, 
        ['PureCloud Auth'], 
        ['application/json'], 
        ['application/json']
      );
    };


    /**
     * Get campaign progress
     * 
     * @param {String} campaignId Campaign ID
     */
    this.getOutboundCampaignProgress = function(campaignId) { 

      // verify the required parameter 'campaignId' is set
      if (campaignId === undefined || campaignId === null) {
        throw "Missing the required parameter 'campaignId' when calling getOutboundCampaignProgress";
      }


      return this.apiClient.callApi(
        '/api/v2/outbound/campaigns/{campaignId}/progress', 
        'GET', 
        { 'campaignId': campaignId }, 
        {  }, 
        {  }, 
        {  }, 
        null, 
        ['PureCloud Auth'], 
        ['application/json'], 
        ['application/json']
      );
    };


    /**
     * Get statistics about a Dialer Campaign
     * 
     * @param {String} campaignId Campaign ID
     */
    this.getOutboundCampaignStats = function(campaignId) { 

      // verify the required parameter 'campaignId' is set
      if (campaignId === undefined || campaignId === null) {
        throw "Missing the required parameter 'campaignId' when calling getOutboundCampaignStats";
      }


      return this.apiClient.callApi(
        '/api/v2/outbound/campaigns/{campaignId}/stats', 
        'GET', 
        { 'campaignId': campaignId }, 
        {  }, 
        {  }, 
        {  }, 
        null, 
        ['PureCloud Auth'], 
        ['application/json'], 
        ['application/json']
      );
    };


    /**
     * Get Campaign Rule
     * 
     * @param {String} campaignRuleId Campaign Rule ID
     */
    this.getOutboundCampaignrule = function(campaignRuleId) { 

      // verify the required parameter 'campaignRuleId' is set
      if (campaignRuleId === undefined || campaignRuleId === null) {
        throw "Missing the required parameter 'campaignRuleId' when calling getOutboundCampaignrule";
      }


      return this.apiClient.callApi(
        '/api/v2/outbound/campaignrules/{campaignRuleId}', 
        'GET', 
        { 'campaignRuleId': campaignRuleId }, 
        {  }, 
        {  }, 
        {  }, 
        null, 
        ['PureCloud Auth'], 
        ['application/json'], 
        ['application/json']
      );
    };


    /**
     * Query Campaign Rule list
     * 
     * @param {Object} opts Optional parameters
     * @param {Number} opts.pageSize Page size (default to 25)
     * @param {Number} opts.pageNumber Page number (default to 1)
     * @param {module:purecloud-platform-client-v2/model/String} opts.filterType Filter type (default to Prefix)
     * @param {String} opts.name Name
     * @param {String} opts.sortBy Sort by
     * @param {module:purecloud-platform-client-v2/model/String} opts.sortOrder Sort order (default to a)
     */
    this.getOutboundCampaignrules = function(opts) { 
      opts = opts || {};


      return this.apiClient.callApi(
        '/api/v2/outbound/campaignrules', 
        'GET', 
        {  }, 
        { 'pageSize': opts['pageSize'],'pageNumber': opts['pageNumber'],'filterType': opts['filterType'],'name': opts['name'],'sortBy': opts['sortBy'],'sortOrder': opts['sortOrder'] }, 
        {  }, 
        {  }, 
        null, 
        ['PureCloud Auth'], 
        ['application/json'], 
        ['application/json']
      );
    };


    /**
     * Query a list of dialer campaigns.
     * 
     * @param {Object} opts Optional parameters
     * @param {Number} opts.pageSize Page size (default to 25)
     * @param {Number} opts.pageNumber Page number (default to 1)
     * @param {module:purecloud-platform-client-v2/model/String} opts.filterType Filter type (default to Prefix)
     * @param {String} opts.name Name
     * @param {String} opts.contactListId Contact List ID
     * @param {String} opts.dncListId DNC list ID
     * @param {String} opts.distributionQueueId Distribution queue ID
     * @param {String} opts.edgeGroupId Edge group ID
     * @param {String} opts.callAnalysisResponseSetId Call analysis response set ID
     * @param {String} opts.sortBy Sort by
     * @param {module:purecloud-platform-client-v2/model/String} opts.sortOrder Sort order (default to a)
     */
    this.getOutboundCampaigns = function(opts) { 
      opts = opts || {};


      return this.apiClient.callApi(
        '/api/v2/outbound/campaigns', 
        'GET', 
        {  }, 
        { 'pageSize': opts['pageSize'],'pageNumber': opts['pageNumber'],'filterType': opts['filterType'],'name': opts['name'],'contactListId': opts['contactListId'],'dncListId': opts['dncListId'],'distributionQueueId': opts['distributionQueueId'],'edgeGroupId': opts['edgeGroupId'],'callAnalysisResponseSetId': opts['callAnalysisResponseSetId'],'sortBy': opts['sortBy'],'sortOrder': opts['sortOrder'] }, 
        {  }, 
        {  }, 
        null, 
        ['PureCloud Auth'], 
        ['application/json'], 
        ['application/json']
      );
    };


    /**
     * Get a dialer contact list.
     * 
     * @param {String} contactListId ContactList ID
     * @param {Object} opts Optional parameters
     * @param {Boolean} opts.includeImportStatus Import status (default to false)
     * @param {Boolean} opts.includeSize Include size (default to false)
     */
    this.getOutboundContactlist = function(contactListId, opts) { 
      opts = opts || {};

      // verify the required parameter 'contactListId' is set
      if (contactListId === undefined || contactListId === null) {
        throw "Missing the required parameter 'contactListId' when calling getOutboundContactlist";
      }


      return this.apiClient.callApi(
        '/api/v2/outbound/contactlists/{contactListId}', 
        'GET', 
        { 'contactListId': contactListId }, 
        { 'includeImportStatus': opts['includeImportStatus'],'includeSize': opts['includeSize'] }, 
        {  }, 
        {  }, 
        null, 
        ['PureCloud Auth'], 
        ['application/json'], 
        ['application/json']
      );
    };


    /**
     * Get a contact.
     * 
     * @param {String} contactListId Contact List ID
     * @param {String} contactId Contact ID
     */
    this.getOutboundContactlistContact = function(contactListId, contactId) { 

      // verify the required parameter 'contactListId' is set
      if (contactListId === undefined || contactListId === null) {
        throw "Missing the required parameter 'contactListId' when calling getOutboundContactlistContact";
      }

      // verify the required parameter 'contactId' is set
      if (contactId === undefined || contactId === null) {
        throw "Missing the required parameter 'contactId' when calling getOutboundContactlistContact";
      }


      return this.apiClient.callApi(
        '/api/v2/outbound/contactlists/{contactListId}/contacts/{contactId}', 
        'GET', 
        { 'contactListId': contactListId,'contactId': contactId }, 
        {  }, 
        {  }, 
        {  }, 
        null, 
        ['PureCloud Auth'], 
        ['application/json'], 
        ['application/json']
      );
    };


    /**
     * Get the URI of a contact list export.
     * 
     * @param {String} contactListId ContactList ID
     * @param {Object} opts Optional parameters
     * @param {String} opts.download Redirect to download uri (default to false)
     */
    this.getOutboundContactlistExport = function(contactListId, opts) { 
      opts = opts || {};

      // verify the required parameter 'contactListId' is set
      if (contactListId === undefined || contactListId === null) {
        throw "Missing the required parameter 'contactListId' when calling getOutboundContactlistExport";
      }


      return this.apiClient.callApi(
        '/api/v2/outbound/contactlists/{contactListId}/export', 
        'GET', 
        { 'contactListId': contactListId }, 
        { 'download': opts['download'] }, 
        {  }, 
        {  }, 
        null, 
        ['PureCloud Auth'], 
        ['application/json'], 
        ['application/json']
      );
    };


    /**
     * Get dialer contactList import status.
     * 
     * @param {String} contactListId ContactList ID
     */
    this.getOutboundContactlistImportstatus = function(contactListId) { 

      // verify the required parameter 'contactListId' is set
      if (contactListId === undefined || contactListId === null) {
        throw "Missing the required parameter 'contactListId' when calling getOutboundContactlistImportstatus";
      }


      return this.apiClient.callApi(
        '/api/v2/outbound/contactlists/{contactListId}/importstatus', 
        'GET', 
        { 'contactListId': contactListId }, 
        {  }, 
        {  }, 
        {  }, 
        null, 
        ['PureCloud Auth'], 
        ['application/json'], 
        ['application/json']
      );
    };


    /**
     * Get Contact list filter
     * 
     * @param {String} contactListFilterId Contact List Filter ID
     */
    this.getOutboundContactlistfilter = function(contactListFilterId) { 

      // verify the required parameter 'contactListFilterId' is set
      if (contactListFilterId === undefined || contactListFilterId === null) {
        throw "Missing the required parameter 'contactListFilterId' when calling getOutboundContactlistfilter";
      }


      return this.apiClient.callApi(
        '/api/v2/outbound/contactlistfilters/{contactListFilterId}', 
        'GET', 
        { 'contactListFilterId': contactListFilterId }, 
        {  }, 
        {  }, 
        {  }, 
        null, 
        ['PureCloud Auth'], 
        ['application/json'], 
        ['application/json']
      );
    };


    /**
     * Query Contact list filters
     * 
     * @param {Object} opts Optional parameters
     * @param {Number} opts.pageSize Page size (default to 25)
     * @param {Number} opts.pageNumber Page number (default to 1)
     * @param {module:purecloud-platform-client-v2/model/String} opts.filterType Filter type (default to Prefix)
     * @param {String} opts.name Name
     * @param {String} opts.sortBy Sort by
     * @param {module:purecloud-platform-client-v2/model/String} opts.sortOrder Sort order (default to a)
     * @param {String} opts.contactListId Contact List ID
     */
    this.getOutboundContactlistfilters = function(opts) { 
      opts = opts || {};


      return this.apiClient.callApi(
        '/api/v2/outbound/contactlistfilters', 
        'GET', 
        {  }, 
        { 'pageSize': opts['pageSize'],'pageNumber': opts['pageNumber'],'filterType': opts['filterType'],'name': opts['name'],'sortBy': opts['sortBy'],'sortOrder': opts['sortOrder'],'contactListId': opts['contactListId'] }, 
        {  }, 
        {  }, 
        null, 
        ['PureCloud Auth'], 
        ['application/json'], 
        ['application/json']
      );
    };


    /**
     * Query a list of contact lists.
     * 
     * @param {Object} opts Optional parameters
     * @param {Boolean} opts.includeImportStatus Include import status (default to false)
     * @param {Boolean} opts.includeSize Include size (default to false)
     * @param {Number} opts.pageSize Page size (default to 25)
     * @param {Number} opts.pageNumber Page number (default to 1)
     * @param {module:purecloud-platform-client-v2/model/String} opts.filterType Filter type (default to Prefix)
     * @param {String} opts.name Name
     * @param {String} opts.sortBy Sort by
     * @param {module:purecloud-platform-client-v2/model/String} opts.sortOrder Sort order (default to a)
     */
    this.getOutboundContactlists = function(opts) { 
      opts = opts || {};


      return this.apiClient.callApi(
        '/api/v2/outbound/contactlists', 
        'GET', 
        {  }, 
        { 'includeImportStatus': opts['includeImportStatus'],'includeSize': opts['includeSize'],'pageSize': opts['pageSize'],'pageNumber': opts['pageNumber'],'filterType': opts['filterType'],'name': opts['name'],'sortBy': opts['sortBy'],'sortOrder': opts['sortOrder'] }, 
        {  }, 
        {  }, 
        null, 
        ['PureCloud Auth'], 
        ['application/json'], 
        ['application/json']
      );
    };


    /**
     * Get dialer DNC list
     * 
     * @param {String} dncListId DncList ID
     * @param {Object} opts Optional parameters
     * @param {Boolean} opts.includeImportStatus Import status (default to false)
     * @param {Boolean} opts.includeSize Include size (default to false)
     */
    this.getOutboundDnclist = function(dncListId, opts) { 
      opts = opts || {};

      // verify the required parameter 'dncListId' is set
      if (dncListId === undefined || dncListId === null) {
        throw "Missing the required parameter 'dncListId' when calling getOutboundDnclist";
      }


      return this.apiClient.callApi(
        '/api/v2/outbound/dnclists/{dncListId}', 
        'GET', 
        { 'dncListId': dncListId }, 
        { 'includeImportStatus': opts['includeImportStatus'],'includeSize': opts['includeSize'] }, 
        {  }, 
        {  }, 
        null, 
        ['PureCloud Auth'], 
        ['application/json'], 
        ['application/json']
      );
    };


    /**
     * Get the URI of a DNC list export.
     * 
     * @param {String} dncListId DncList ID
     * @param {Object} opts Optional parameters
     * @param {String} opts.download Redirect to download uri (default to false)
     */
    this.getOutboundDnclistExport = function(dncListId, opts) { 
      opts = opts || {};

      // verify the required parameter 'dncListId' is set
      if (dncListId === undefined || dncListId === null) {
        throw "Missing the required parameter 'dncListId' when calling getOutboundDnclistExport";
      }


      return this.apiClient.callApi(
        '/api/v2/outbound/dnclists/{dncListId}/export', 
        'GET', 
        { 'dncListId': dncListId }, 
        { 'download': opts['download'] }, 
        {  }, 
        {  }, 
        null, 
        ['PureCloud Auth'], 
        ['application/json'], 
        ['application/json']
      );
    };


    /**
     * Get dialer dncList import status.
     * 
     * @param {String} dncListId DncList ID
     */
    this.getOutboundDnclistImportstatus = function(dncListId) { 

      // verify the required parameter 'dncListId' is set
      if (dncListId === undefined || dncListId === null) {
        throw "Missing the required parameter 'dncListId' when calling getOutboundDnclistImportstatus";
      }


      return this.apiClient.callApi(
        '/api/v2/outbound/dnclists/{dncListId}/importstatus', 
        'GET', 
        { 'dncListId': dncListId }, 
        {  }, 
        {  }, 
        {  }, 
        null, 
        ['PureCloud Auth'], 
        ['application/json'], 
        ['application/json']
      );
    };


    /**
     * Query dialer DNC lists
     * 
     * @param {Object} opts Optional parameters
     * @param {Boolean} opts.includeImportStatus Import status (default to false)
     * @param {Boolean} opts.includeSize Include size (default to false)
     * @param {Number} opts.pageSize Page size (default to 25)
     * @param {Number} opts.pageNumber Page number (default to 1)
     * @param {module:purecloud-platform-client-v2/model/String} opts.filterType Filter type (default to Prefix)
     * @param {String} opts.name Name
     * @param {String} opts.sortBy Sort by
     * @param {module:purecloud-platform-client-v2/model/String} opts.sortOrder Sort order
     */
    this.getOutboundDnclists = function(opts) { 
      opts = opts || {};


      return this.apiClient.callApi(
        '/api/v2/outbound/dnclists', 
        'GET', 
        {  }, 
        { 'includeImportStatus': opts['includeImportStatus'],'includeSize': opts['includeSize'],'pageSize': opts['pageSize'],'pageNumber': opts['pageNumber'],'filterType': opts['filterType'],'name': opts['name'],'sortBy': opts['sortBy'],'sortOrder': opts['sortOrder'] }, 
        {  }, 
        {  }, 
        null, 
        ['PureCloud Auth'], 
        ['application/json'], 
        ['application/json']
      );
    };


    /**
     * Get Dialer Event
     * 
     * @param {String} eventId Event Log ID
     */
    this.getOutboundEvent = function(eventId) { 

      // verify the required parameter 'eventId' is set
      if (eventId === undefined || eventId === null) {
        throw "Missing the required parameter 'eventId' when calling getOutboundEvent";
      }


      return this.apiClient.callApi(
        '/api/v2/outbound/events/{eventId}', 
        'GET', 
        { 'eventId': eventId }, 
        {  }, 
        {  }, 
        {  }, 
        null, 
        ['PureCloud Auth'], 
        ['application/json'], 
        ['application/json']
      );
    };


    /**
     * Query Event Logs
     * 
     * @param {Object} opts Optional parameters
     * @param {Number} opts.pageSize Page size (default to 25)
     * @param {Number} opts.pageNumber Page number (default to 1)
     * @param {module:purecloud-platform-client-v2/model/String} opts.filterType Filter type (default to Prefix)
     * @param {String} opts.category Category
     * @param {String} opts.level Level
     * @param {String} opts.sortBy Sort by
     * @param {module:purecloud-platform-client-v2/model/String} opts.sortOrder Sort order (default to a)
     */
    this.getOutboundEvents = function(opts) { 
      opts = opts || {};


      return this.apiClient.callApi(
        '/api/v2/outbound/events', 
        'GET', 
        {  }, 
        { 'pageSize': opts['pageSize'],'pageNumber': opts['pageNumber'],'filterType': opts['filterType'],'category': opts['category'],'level': opts['level'],'sortBy': opts['sortBy'],'sortOrder': opts['sortOrder'] }, 
        {  }, 
        {  }, 
        null, 
        ['PureCloud Auth'], 
        ['application/json'], 
        ['application/json']
      );
    };


    /**
     * Get a Rule Set by ID.
     * 
     * @param {String} ruleSetId Rule Set ID
     */
    this.getOutboundRuleset = function(ruleSetId) { 

      // verify the required parameter 'ruleSetId' is set
      if (ruleSetId === undefined || ruleSetId === null) {
        throw "Missing the required parameter 'ruleSetId' when calling getOutboundRuleset";
      }


      return this.apiClient.callApi(
        '/api/v2/outbound/rulesets/{ruleSetId}', 
        'GET', 
        { 'ruleSetId': ruleSetId }, 
        {  }, 
        {  }, 
        {  }, 
        null, 
        ['PureCloud Auth'], 
        ['application/json'], 
        ['application/json']
      );
    };


    /**
     * Query a list of Rule Sets.
     * 
     * @param {Object} opts Optional parameters
     * @param {Number} opts.pageSize Page size (default to 25)
     * @param {Number} opts.pageNumber Page number (default to 1)
     * @param {module:purecloud-platform-client-v2/model/String} opts.filterType Filter type (default to Prefix)
     * @param {String} opts.name Name
     * @param {String} opts.sortBy Sort by
     * @param {module:purecloud-platform-client-v2/model/String} opts.sortOrder Sort order (default to a)
     */
    this.getOutboundRulesets = function(opts) { 
      opts = opts || {};


      return this.apiClient.callApi(
        '/api/v2/outbound/rulesets', 
        'GET', 
        {  }, 
        { 'pageSize': opts['pageSize'],'pageNumber': opts['pageNumber'],'filterType': opts['filterType'],'name': opts['name'],'sortBy': opts['sortBy'],'sortOrder': opts['sortOrder'] }, 
        {  }, 
        {  }, 
        null, 
        ['PureCloud Auth'], 
        ['application/json'], 
        ['application/json']
      );
    };


    /**
     * Get a dialer campaign schedule.
     * 
     * @param {String} campaignId Campaign ID
     */
    this.getOutboundSchedulesCampaign = function(campaignId) { 

      // verify the required parameter 'campaignId' is set
      if (campaignId === undefined || campaignId === null) {
        throw "Missing the required parameter 'campaignId' when calling getOutboundSchedulesCampaign";
      }


      return this.apiClient.callApi(
        '/api/v2/outbound/schedules/campaigns/{campaignId}', 
        'GET', 
        { 'campaignId': campaignId }, 
        {  }, 
        {  }, 
        {  }, 
        null, 
        ['PureCloud Auth'], 
        ['application/json'], 
        ['application/json']
      );
    };


    /**
     * Query for a list of dialer campaign schedules.
     * 
     */
    this.getOutboundSchedulesCampaigns = function() { 


      return this.apiClient.callApi(
        '/api/v2/outbound/schedules/campaigns', 
        'GET', 
        {  }, 
        {  }, 
        {  }, 
        {  }, 
        null, 
        ['PureCloud Auth'], 
        ['application/json'], 
        ['application/json']
      );
    };


    /**
     * Get a dialer sequence schedule.
     * 
     * @param {String} sequenceId Sequence ID
     */
    this.getOutboundSchedulesSequence = function(sequenceId) { 

      // verify the required parameter 'sequenceId' is set
      if (sequenceId === undefined || sequenceId === null) {
        throw "Missing the required parameter 'sequenceId' when calling getOutboundSchedulesSequence";
      }


      return this.apiClient.callApi(
        '/api/v2/outbound/schedules/sequences/{sequenceId}', 
        'GET', 
        { 'sequenceId': sequenceId }, 
        {  }, 
        {  }, 
        {  }, 
        null, 
        ['PureCloud Auth'], 
        ['application/json'], 
        ['application/json']
      );
    };


    /**
     * Query for a list of dialer sequence schedules.
     * 
     */
    this.getOutboundSchedulesSequences = function() { 


      return this.apiClient.callApi(
        '/api/v2/outbound/schedules/sequences', 
        'GET', 
        {  }, 
        {  }, 
        {  }, 
        {  }, 
        null, 
        ['PureCloud Auth'], 
        ['application/json'], 
        ['application/json']
      );
    };


    /**
     * Get a dialer campaign sequence.
     * 
     * @param {String} sequenceId Campaign Sequence ID
     */
    this.getOutboundSequence = function(sequenceId) { 

      // verify the required parameter 'sequenceId' is set
      if (sequenceId === undefined || sequenceId === null) {
        throw "Missing the required parameter 'sequenceId' when calling getOutboundSequence";
      }


      return this.apiClient.callApi(
        '/api/v2/outbound/sequences/{sequenceId}', 
        'GET', 
        { 'sequenceId': sequenceId }, 
        {  }, 
        {  }, 
        {  }, 
        null, 
        ['PureCloud Auth'], 
        ['application/json'], 
        ['application/json']
      );
    };


    /**
     * Query a list of dialer campaign sequences.
     * 
     * @param {Object} opts Optional parameters
     * @param {Number} opts.pageSize Page size (default to 25)
     * @param {Number} opts.pageNumber Page number (default to 1)
     * @param {module:purecloud-platform-client-v2/model/String} opts.filterType Filter type (default to Prefix)
     * @param {String} opts.name Name
     * @param {String} opts.sortBy Sort by
     * @param {module:purecloud-platform-client-v2/model/String} opts.sortOrder Sort order (default to a)
     */
    this.getOutboundSequences = function(opts) { 
      opts = opts || {};


      return this.apiClient.callApi(
        '/api/v2/outbound/sequences', 
        'GET', 
        {  }, 
        { 'pageSize': opts['pageSize'],'pageNumber': opts['pageNumber'],'filterType': opts['filterType'],'name': opts['name'],'sortBy': opts['sortBy'],'sortOrder': opts['sortOrder'] }, 
        {  }, 
        {  }, 
        null, 
        ['PureCloud Auth'], 
        ['application/json'], 
        ['application/json']
      );
    };


    /**
     * Get the Dialer wrap up code mapping.
     * 
     */
    this.getOutboundWrapupcodemappings = function() { 


      return this.apiClient.callApi(
        '/api/v2/outbound/wrapupcodemappings', 
        'GET', 
        {  }, 
        {  }, 
        {  }, 
        {  }, 
        null, 
        ['PureCloud Auth'], 
        ['application/json'], 
        ['application/json']
      );
    };


    /**
     * Create attempt limits
     * 
     * @param {module:purecloud-platform-client-v2/model/AttemptLimits} body AttemptLimits
     */
    this.postOutboundAttemptlimits = function(body) { 

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw "Missing the required parameter 'body' when calling postOutboundAttemptlimits";
      }


      return this.apiClient.callApi(
        '/api/v2/outbound/attemptlimits', 
        'POST', 
        {  }, 
        {  }, 
        {  }, 
        {  }, 
        body, 
        ['PureCloud Auth'], 
        ['application/json'], 
        ['application/json']
      );
    };


    /**
     * Retrieves audits for dialer.
     * 
     * @param {module:purecloud-platform-client-v2/model/DialerAuditRequest} body AuditSearch
     * @param {Object} opts Optional parameters
     * @param {Number} opts.pageSize Page size (default to 25)
     * @param {Number} opts.pageNumber Page number (default to 1)
     * @param {String} opts.sortBy Sort by (default to entity.name)
     * @param {String} opts.sortOrder Sort order (default to ascending)
     * @param {Boolean} opts.facetsOnly Facets only (default to false)
     */
    this.postOutboundAudits = function(body, opts) { 
      opts = opts || {};

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw "Missing the required parameter 'body' when calling postOutboundAudits";
      }


      return this.apiClient.callApi(
        '/api/v2/outbound/audits', 
        'POST', 
        {  }, 
        { 'pageSize': opts['pageSize'],'pageNumber': opts['pageNumber'],'sortBy': opts['sortBy'],'sortOrder': opts['sortOrder'],'facetsOnly': opts['facetsOnly'] }, 
        {  }, 
        {  }, 
        body, 
        ['PureCloud Auth'], 
        ['application/json'], 
        ['application/json']
      );
    };


    /**
     * Create callable time set
     * 
     * @param {module:purecloud-platform-client-v2/model/CallableTimeSet} body DialerCallableTimeSet
     */
    this.postOutboundCallabletimesets = function(body) { 

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw "Missing the required parameter 'body' when calling postOutboundCallabletimesets";
      }


      return this.apiClient.callApi(
        '/api/v2/outbound/callabletimesets', 
        'POST', 
        {  }, 
        {  }, 
        {  }, 
        {  }, 
        body, 
        ['PureCloud Auth'], 
        ['application/json'], 
        ['application/json']
      );
    };


    /**
     * Create a dialer call analysis response set.
     * 
     * @param {module:purecloud-platform-client-v2/model/ResponseSet} body ResponseSet
     */
    this.postOutboundCallanalysisresponsesets = function(body) { 

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw "Missing the required parameter 'body' when calling postOutboundCallanalysisresponsesets";
      }


      return this.apiClient.callApi(
        '/api/v2/outbound/callanalysisresponsesets', 
        'POST', 
        {  }, 
        {  }, 
        {  }, 
        {  }, 
        body, 
        ['PureCloud Auth'], 
        ['application/json'], 
        ['application/json']
      );
    };


    /**
     * Schedule a Callback for a Dialer Campaign (Deprecated)
     * This endpoint is deprecated and may have unexpected results. Please use \&quot;/conversations/{conversationId}/participants/{participantId}/callbacks instead.\&quot;
     * @param {String} campaignId Campaign ID
     * @param {module:purecloud-platform-client-v2/model/ContactCallbackRequest} body ContactCallbackRequest
     */
    this.postOutboundCampaignCallbackSchedule = function(campaignId, body) { 

      // verify the required parameter 'campaignId' is set
      if (campaignId === undefined || campaignId === null) {
        throw "Missing the required parameter 'campaignId' when calling postOutboundCampaignCallbackSchedule";
      }

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw "Missing the required parameter 'body' when calling postOutboundCampaignCallbackSchedule";
      }


      return this.apiClient.callApi(
        '/api/v2/outbound/campaigns/{campaignId}/callback/schedule', 
        'POST', 
        { 'campaignId': campaignId }, 
        {  }, 
        {  }, 
        {  }, 
        body, 
        ['PureCloud Auth'], 
        ['application/json'], 
        ['application/json']
      );
    };


    /**
     * Create Campaign Rule
     * 
     * @param {module:purecloud-platform-client-v2/model/CampaignRule} body CampaignRule
     */
    this.postOutboundCampaignrules = function(body) { 

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw "Missing the required parameter 'body' when calling postOutboundCampaignrules";
      }


      return this.apiClient.callApi(
        '/api/v2/outbound/campaignrules', 
        'POST', 
        {  }, 
        {  }, 
        {  }, 
        {  }, 
        body, 
        ['PureCloud Auth'], 
        ['application/json'], 
        ['application/json']
      );
    };


    /**
     * Create a campaign.
     * 
     * @param {module:purecloud-platform-client-v2/model/Campaign} body Campaign
     */
    this.postOutboundCampaigns = function(body) { 

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw "Missing the required parameter 'body' when calling postOutboundCampaigns";
      }


      return this.apiClient.callApi(
        '/api/v2/outbound/campaigns', 
        'POST', 
        {  }, 
        {  }, 
        {  }, 
        {  }, 
        body, 
        ['PureCloud Auth'], 
        ['application/json'], 
        ['application/json']
      );
    };


    /**
     * Get progress for a list of campaigns
     * 
     * @param {Array.<module:purecloud-platform-client-v2/model/String>} body Campaign IDs
     */
    this.postOutboundCampaignsProgress = function(body) { 

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw "Missing the required parameter 'body' when calling postOutboundCampaignsProgress";
      }


      return this.apiClient.callApi(
        '/api/v2/outbound/campaigns/progress', 
        'POST', 
        {  }, 
        {  }, 
        {  }, 
        {  }, 
        body, 
        ['PureCloud Auth'], 
        ['application/json'], 
        ['application/json']
      );
    };


    /**
     * Add contacts to a contact list.
     * 
     * @param {String} contactListId Contact List ID
     * @param {Array.<module:purecloud-platform-client-v2/model/DialerContact>} body Contact
     * @param {Object} opts Optional parameters
     * @param {Boolean} opts.priority Contact priority.  True means the contact(s) will be dialed next, false means the contact will go to the end of the contact queue.
     * @param {Boolean} opts.clearSystemData Clear system data.  True means the system data stored on the contact will be cleared if the contact already exists (attempts, callable status, etc), false means it won&#39;t.
     */
    this.postOutboundContactlistContacts = function(contactListId, body, opts) { 
      opts = opts || {};

      // verify the required parameter 'contactListId' is set
      if (contactListId === undefined || contactListId === null) {
        throw "Missing the required parameter 'contactListId' when calling postOutboundContactlistContacts";
      }

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw "Missing the required parameter 'body' when calling postOutboundContactlistContacts";
      }


      return this.apiClient.callApi(
        '/api/v2/outbound/contactlists/{contactListId}/contacts', 
        'POST', 
        { 'contactListId': contactListId }, 
        { 'priority': opts['priority'],'clearSystemData': opts['clearSystemData'] }, 
        {  }, 
        {  }, 
        body, 
        ['PureCloud Auth'], 
        ['application/json'], 
        ['application/json']
      );
    };


    /**
     * Initiate the export of a contact list.
     * Returns 200 if received OK.
     * @param {String} contactListId ContactList ID
     */
    this.postOutboundContactlistExport = function(contactListId) { 

      // verify the required parameter 'contactListId' is set
      if (contactListId === undefined || contactListId === null) {
        throw "Missing the required parameter 'contactListId' when calling postOutboundContactlistExport";
      }


      return this.apiClient.callApi(
        '/api/v2/outbound/contactlists/{contactListId}/export', 
        'POST', 
        { 'contactListId': contactListId }, 
        {  }, 
        {  }, 
        {  }, 
        null, 
        ['PureCloud Auth'], 
        ['application/json'], 
        ['application/json']
      );
    };


    /**
     * Create Contact List Filter
     * 
     * @param {module:purecloud-platform-client-v2/model/ContactListFilter} body ContactListFilter
     */
    this.postOutboundContactlistfilters = function(body) { 

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw "Missing the required parameter 'body' when calling postOutboundContactlistfilters";
      }


      return this.apiClient.callApi(
        '/api/v2/outbound/contactlistfilters', 
        'POST', 
        {  }, 
        {  }, 
        {  }, 
        {  }, 
        body, 
        ['PureCloud Auth'], 
        ['application/json'], 
        ['application/json']
      );
    };


    /**
     * Get a preview of the output of a contact list filter
     * 
     * @param {module:purecloud-platform-client-v2/model/ContactListFilter} body ContactListFilter
     */
    this.postOutboundContactlistfiltersPreview = function(body) { 

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw "Missing the required parameter 'body' when calling postOutboundContactlistfiltersPreview";
      }


      return this.apiClient.callApi(
        '/api/v2/outbound/contactlistfilters/preview', 
        'POST', 
        {  }, 
        {  }, 
        {  }, 
        {  }, 
        body, 
        ['PureCloud Auth'], 
        ['application/json'], 
        ['application/json']
      );
    };


    /**
     * Create a contact List.
     * 
     * @param {module:purecloud-platform-client-v2/model/ContactList} body ContactList
     */
    this.postOutboundContactlists = function(body) { 

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw "Missing the required parameter 'body' when calling postOutboundContactlists";
      }


      return this.apiClient.callApi(
        '/api/v2/outbound/contactlists', 
        'POST', 
        {  }, 
        {  }, 
        {  }, 
        {  }, 
        body, 
        ['PureCloud Auth'], 
        ['application/json'], 
        ['application/json']
      );
    };


    /**
     * Add phone numbers to a Dialer DNC list.
     * 
     * @param {String} conversationId Conversation ID
     */
    this.postOutboundConversationDnc = function(conversationId) { 

      // verify the required parameter 'conversationId' is set
      if (conversationId === undefined || conversationId === null) {
        throw "Missing the required parameter 'conversationId' when calling postOutboundConversationDnc";
      }


      return this.apiClient.callApi(
        '/api/v2/outbound/conversations/{conversationId}/dnc', 
        'POST', 
        { 'conversationId': conversationId }, 
        {  }, 
        {  }, 
        {  }, 
        null, 
        ['PureCloud Auth'], 
        ['application/json'], 
        ['application/json']
      );
    };


    /**
     * Initiate the export of a dnc list.
     * Returns 200 if received OK.
     * @param {String} dncListId DncList ID
     */
    this.postOutboundDnclistExport = function(dncListId) { 

      // verify the required parameter 'dncListId' is set
      if (dncListId === undefined || dncListId === null) {
        throw "Missing the required parameter 'dncListId' when calling postOutboundDnclistExport";
      }


      return this.apiClient.callApi(
        '/api/v2/outbound/dnclists/{dncListId}/export', 
        'POST', 
        { 'dncListId': dncListId }, 
        {  }, 
        {  }, 
        {  }, 
        null, 
        ['PureCloud Auth'], 
        ['application/json'], 
        ['application/json']
      );
    };


    /**
     * Add phone numbers to a Dialer DNC list.
     * Only Internal DNC lists may be appended to
     * @param {String} dncListId DncList ID
     * @param {Array.<module:purecloud-platform-client-v2/model/String>} body DNC Phone Numbers
     */
    this.postOutboundDnclistPhonenumbers = function(dncListId, body) { 

      // verify the required parameter 'dncListId' is set
      if (dncListId === undefined || dncListId === null) {
        throw "Missing the required parameter 'dncListId' when calling postOutboundDnclistPhonenumbers";
      }

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw "Missing the required parameter 'body' when calling postOutboundDnclistPhonenumbers";
      }


      return this.apiClient.callApi(
        '/api/v2/outbound/dnclists/{dncListId}/phonenumbers', 
        'POST', 
        { 'dncListId': dncListId }, 
        {  }, 
        {  }, 
        {  }, 
        body, 
        ['PureCloud Auth'], 
        ['application/json'], 
        ['application/json']
      );
    };


    /**
     * Create dialer DNC list
     * 
     * @param {module:purecloud-platform-client-v2/model/DncListCreate} body DncList
     */
    this.postOutboundDnclists = function(body) { 

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw "Missing the required parameter 'body' when calling postOutboundDnclists";
      }


      return this.apiClient.callApi(
        '/api/v2/outbound/dnclists', 
        'POST', 
        {  }, 
        {  }, 
        {  }, 
        {  }, 
        body, 
        ['PureCloud Auth'], 
        ['application/json'], 
        ['application/json']
      );
    };


    /**
     * Create a Dialer Call Analysis Response Set.
     * 
     * @param {module:purecloud-platform-client-v2/model/RuleSet} body RuleSet
     */
    this.postOutboundRulesets = function(body) { 

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw "Missing the required parameter 'body' when calling postOutboundRulesets";
      }


      return this.apiClient.callApi(
        '/api/v2/outbound/rulesets', 
        'POST', 
        {  }, 
        {  }, 
        {  }, 
        {  }, 
        body, 
        ['PureCloud Auth'], 
        ['application/json'], 
        ['application/json']
      );
    };


    /**
     * Create a new campaign sequence.
     * 
     * @param {module:purecloud-platform-client-v2/model/CampaignSequence} body Organization
     */
    this.postOutboundSequences = function(body) { 

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw "Missing the required parameter 'body' when calling postOutboundSequences";
      }


      return this.apiClient.callApi(
        '/api/v2/outbound/sequences', 
        'POST', 
        {  }, 
        {  }, 
        {  }, 
        {  }, 
        body, 
        ['PureCloud Auth'], 
        ['application/json'], 
        ['application/json']
      );
    };


    /**
     * Update attempt limits
     * 
     * @param {String} attemptLimitsId Attempt limits ID
     * @param {module:purecloud-platform-client-v2/model/AttemptLimits} body AttemptLimits
     */
    this.putOutboundAttemptlimit = function(attemptLimitsId, body) { 

      // verify the required parameter 'attemptLimitsId' is set
      if (attemptLimitsId === undefined || attemptLimitsId === null) {
        throw "Missing the required parameter 'attemptLimitsId' when calling putOutboundAttemptlimit";
      }

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw "Missing the required parameter 'body' when calling putOutboundAttemptlimit";
      }


      return this.apiClient.callApi(
        '/api/v2/outbound/attemptlimits/{attemptLimitsId}', 
        'PUT', 
        { 'attemptLimitsId': attemptLimitsId }, 
        {  }, 
        {  }, 
        {  }, 
        body, 
        ['PureCloud Auth'], 
        ['application/json'], 
        ['application/json']
      );
    };


    /**
     * Update callable time set
     * 
     * @param {String} callableTimeSetId Callable Time Set ID
     * @param {module:purecloud-platform-client-v2/model/CallableTimeSet} body DialerCallableTimeSet
     */
    this.putOutboundCallabletimeset = function(callableTimeSetId, body) { 

      // verify the required parameter 'callableTimeSetId' is set
      if (callableTimeSetId === undefined || callableTimeSetId === null) {
        throw "Missing the required parameter 'callableTimeSetId' when calling putOutboundCallabletimeset";
      }

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw "Missing the required parameter 'body' when calling putOutboundCallabletimeset";
      }


      return this.apiClient.callApi(
        '/api/v2/outbound/callabletimesets/{callableTimeSetId}', 
        'PUT', 
        { 'callableTimeSetId': callableTimeSetId }, 
        {  }, 
        {  }, 
        {  }, 
        body, 
        ['PureCloud Auth'], 
        ['application/json'], 
        ['application/json']
      );
    };


    /**
     * Update a dialer call analysis response set.
     * 
     * @param {String} callAnalysisSetId Call Analysis Response Set ID
     * @param {module:purecloud-platform-client-v2/model/ResponseSet} body ResponseSet
     */
    this.putOutboundCallanalysisresponseset = function(callAnalysisSetId, body) { 

      // verify the required parameter 'callAnalysisSetId' is set
      if (callAnalysisSetId === undefined || callAnalysisSetId === null) {
        throw "Missing the required parameter 'callAnalysisSetId' when calling putOutboundCallanalysisresponseset";
      }

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw "Missing the required parameter 'body' when calling putOutboundCallanalysisresponseset";
      }


      return this.apiClient.callApi(
        '/api/v2/outbound/callanalysisresponsesets/{callAnalysisSetId}', 
        'PUT', 
        { 'callAnalysisSetId': callAnalysisSetId }, 
        {  }, 
        {  }, 
        {  }, 
        body, 
        ['PureCloud Auth'], 
        ['application/json'], 
        ['application/json']
      );
    };


    /**
     * Update a campaign.
     * 
     * @param {String} campaignId Campaign ID
     * @param {module:purecloud-platform-client-v2/model/Campaign} body Campaign
     */
    this.putOutboundCampaign = function(campaignId, body) { 

      // verify the required parameter 'campaignId' is set
      if (campaignId === undefined || campaignId === null) {
        throw "Missing the required parameter 'campaignId' when calling putOutboundCampaign";
      }

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw "Missing the required parameter 'body' when calling putOutboundCampaign";
      }


      return this.apiClient.callApi(
        '/api/v2/outbound/campaigns/{campaignId}', 
        'PUT', 
        { 'campaignId': campaignId }, 
        {  }, 
        {  }, 
        {  }, 
        body, 
        ['PureCloud Auth'], 
        ['application/json'], 
        ['application/json']
      );
    };


    /**
     * Send notification that an agent&#39;s state changed 
     * New agent state.
     * @param {String} campaignId Campaign ID
     * @param {String} userId Agent&#39;s user ID
     * @param {module:purecloud-platform-client-v2/model/Agent} body agent
     */
    this.putOutboundCampaignAgent = function(campaignId, userId, body) { 

      // verify the required parameter 'campaignId' is set
      if (campaignId === undefined || campaignId === null) {
        throw "Missing the required parameter 'campaignId' when calling putOutboundCampaignAgent";
      }

      // verify the required parameter 'userId' is set
      if (userId === undefined || userId === null) {
        throw "Missing the required parameter 'userId' when calling putOutboundCampaignAgent";
      }

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw "Missing the required parameter 'body' when calling putOutboundCampaignAgent";
      }


      return this.apiClient.callApi(
        '/api/v2/outbound/campaigns/{campaignId}/agents/{userId}', 
        'PUT', 
        { 'campaignId': campaignId,'userId': userId }, 
        {  }, 
        {  }, 
        {  }, 
        body, 
        ['PureCloud Auth'], 
        ['application/json'], 
        ['application/json']
      );
    };


    /**
     * Update Campaign Rule
     * 
     * @param {String} campaignRuleId Campaign Rule ID
     * @param {module:purecloud-platform-client-v2/model/CampaignRule} body CampaignRule
     */
    this.putOutboundCampaignrule = function(campaignRuleId, body) { 

      // verify the required parameter 'campaignRuleId' is set
      if (campaignRuleId === undefined || campaignRuleId === null) {
        throw "Missing the required parameter 'campaignRuleId' when calling putOutboundCampaignrule";
      }

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw "Missing the required parameter 'body' when calling putOutboundCampaignrule";
      }


      return this.apiClient.callApi(
        '/api/v2/outbound/campaignrules/{campaignRuleId}', 
        'PUT', 
        { 'campaignRuleId': campaignRuleId }, 
        {  }, 
        {  }, 
        {  }, 
        body, 
        ['PureCloud Auth'], 
        ['application/json'], 
        ['application/json']
      );
    };


    /**
     * Update a contact list.
     * 
     * @param {String} contactListId ContactList ID
     * @param {module:purecloud-platform-client-v2/model/ContactList} body ContactList
     */
    this.putOutboundContactlist = function(contactListId, body) { 

      // verify the required parameter 'contactListId' is set
      if (contactListId === undefined || contactListId === null) {
        throw "Missing the required parameter 'contactListId' when calling putOutboundContactlist";
      }

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw "Missing the required parameter 'body' when calling putOutboundContactlist";
      }


      return this.apiClient.callApi(
        '/api/v2/outbound/contactlists/{contactListId}', 
        'PUT', 
        { 'contactListId': contactListId }, 
        {  }, 
        {  }, 
        {  }, 
        body, 
        ['PureCloud Auth'], 
        ['application/json'], 
        ['application/json']
      );
    };


    /**
     * Update a contact.
     * 
     * @param {String} contactListId Contact List ID
     * @param {String} contactId Contact ID
     * @param {module:purecloud-platform-client-v2/model/DialerContact} body Contact
     */
    this.putOutboundContactlistContact = function(contactListId, contactId, body) { 

      // verify the required parameter 'contactListId' is set
      if (contactListId === undefined || contactListId === null) {
        throw "Missing the required parameter 'contactListId' when calling putOutboundContactlistContact";
      }

      // verify the required parameter 'contactId' is set
      if (contactId === undefined || contactId === null) {
        throw "Missing the required parameter 'contactId' when calling putOutboundContactlistContact";
      }

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw "Missing the required parameter 'body' when calling putOutboundContactlistContact";
      }


      return this.apiClient.callApi(
        '/api/v2/outbound/contactlists/{contactListId}/contacts/{contactId}', 
        'PUT', 
        { 'contactListId': contactListId,'contactId': contactId }, 
        {  }, 
        {  }, 
        {  }, 
        body, 
        ['PureCloud Auth'], 
        ['application/json'], 
        ['application/json']
      );
    };


    /**
     * Update Contact List Filter
     * 
     * @param {String} contactListFilterId Contact List Filter ID
     * @param {module:purecloud-platform-client-v2/model/ContactListFilter} body ContactListFilter
     */
    this.putOutboundContactlistfilter = function(contactListFilterId, body) { 

      // verify the required parameter 'contactListFilterId' is set
      if (contactListFilterId === undefined || contactListFilterId === null) {
        throw "Missing the required parameter 'contactListFilterId' when calling putOutboundContactlistfilter";
      }

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw "Missing the required parameter 'body' when calling putOutboundContactlistfilter";
      }


      return this.apiClient.callApi(
        '/api/v2/outbound/contactlistfilters/{contactListFilterId}', 
        'PUT', 
        { 'contactListFilterId': contactListFilterId }, 
        {  }, 
        {  }, 
        {  }, 
        body, 
        ['PureCloud Auth'], 
        ['application/json'], 
        ['application/json']
      );
    };


    /**
     * Update dialer DNC list
     * 
     * @param {String} dncListId DncList ID
     * @param {module:purecloud-platform-client-v2/model/DncList} body DncList
     */
    this.putOutboundDnclist = function(dncListId, body) { 

      // verify the required parameter 'dncListId' is set
      if (dncListId === undefined || dncListId === null) {
        throw "Missing the required parameter 'dncListId' when calling putOutboundDnclist";
      }

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw "Missing the required parameter 'body' when calling putOutboundDnclist";
      }


      return this.apiClient.callApi(
        '/api/v2/outbound/dnclists/{dncListId}', 
        'PUT', 
        { 'dncListId': dncListId }, 
        {  }, 
        {  }, 
        {  }, 
        body, 
        ['PureCloud Auth'], 
        ['application/json'], 
        ['application/json']
      );
    };


    /**
     * Update a RuleSet.
     * 
     * @param {String} ruleSetId Rule Set ID
     * @param {module:purecloud-platform-client-v2/model/RuleSet} body RuleSet
     */
    this.putOutboundRuleset = function(ruleSetId, body) { 

      // verify the required parameter 'ruleSetId' is set
      if (ruleSetId === undefined || ruleSetId === null) {
        throw "Missing the required parameter 'ruleSetId' when calling putOutboundRuleset";
      }

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw "Missing the required parameter 'body' when calling putOutboundRuleset";
      }


      return this.apiClient.callApi(
        '/api/v2/outbound/rulesets/{ruleSetId}', 
        'PUT', 
        { 'ruleSetId': ruleSetId }, 
        {  }, 
        {  }, 
        {  }, 
        body, 
        ['PureCloud Auth'], 
        ['application/json'], 
        ['application/json']
      );
    };


    /**
     * Update a new campaign schedule.
     * 
     * @param {String} campaignId Campaign ID
     * @param {module:purecloud-platform-client-v2/model/CampaignSchedule} body CampaignSchedule
     */
    this.putOutboundSchedulesCampaign = function(campaignId, body) { 

      // verify the required parameter 'campaignId' is set
      if (campaignId === undefined || campaignId === null) {
        throw "Missing the required parameter 'campaignId' when calling putOutboundSchedulesCampaign";
      }

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw "Missing the required parameter 'body' when calling putOutboundSchedulesCampaign";
      }


      return this.apiClient.callApi(
        '/api/v2/outbound/schedules/campaigns/{campaignId}', 
        'PUT', 
        { 'campaignId': campaignId }, 
        {  }, 
        {  }, 
        {  }, 
        body, 
        ['PureCloud Auth'], 
        ['application/json'], 
        ['application/json']
      );
    };


    /**
     * Update a new sequence schedule.
     * 
     * @param {String} sequenceId Sequence ID
     * @param {module:purecloud-platform-client-v2/model/SequenceSchedule} body SequenceSchedule
     */
    this.putOutboundSchedulesSequence = function(sequenceId, body) { 

      // verify the required parameter 'sequenceId' is set
      if (sequenceId === undefined || sequenceId === null) {
        throw "Missing the required parameter 'sequenceId' when calling putOutboundSchedulesSequence";
      }

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw "Missing the required parameter 'body' when calling putOutboundSchedulesSequence";
      }


      return this.apiClient.callApi(
        '/api/v2/outbound/schedules/sequences/{sequenceId}', 
        'PUT', 
        { 'sequenceId': sequenceId }, 
        {  }, 
        {  }, 
        {  }, 
        body, 
        ['PureCloud Auth'], 
        ['application/json'], 
        ['application/json']
      );
    };


    /**
     * Update a new campaign sequence.
     * 
     * @param {String} sequenceId Campaign Sequence ID
     * @param {module:purecloud-platform-client-v2/model/CampaignSequence} body Organization
     */
    this.putOutboundSequence = function(sequenceId, body) { 

      // verify the required parameter 'sequenceId' is set
      if (sequenceId === undefined || sequenceId === null) {
        throw "Missing the required parameter 'sequenceId' when calling putOutboundSequence";
      }

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw "Missing the required parameter 'body' when calling putOutboundSequence";
      }


      return this.apiClient.callApi(
        '/api/v2/outbound/sequences/{sequenceId}', 
        'PUT', 
        { 'sequenceId': sequenceId }, 
        {  }, 
        {  }, 
        {  }, 
        body, 
        ['PureCloud Auth'], 
        ['application/json'], 
        ['application/json']
      );
    };


    /**
     * Update the Dialer wrap up code mapping.
     * 
     * @param {module:purecloud-platform-client-v2/model/WrapUpCodeMapping} body wrapUpCodeMapping
     */
    this.putOutboundWrapupcodemappings = function(body) { 

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw "Missing the required parameter 'body' when calling putOutboundWrapupcodemappings";
      }


      return this.apiClient.callApi(
        '/api/v2/outbound/wrapupcodemappings', 
        'PUT', 
        {  }, 
        {  }, 
        {  }, 
        {  }, 
        body, 
        ['PureCloud Auth'], 
        ['application/json'], 
        ['application/json']
      );
    };
  };

  return exports;
}));

},{"../ApiClient":8}],30:[function(require,module,exports){
(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['purecloud-platform-client-v2/ApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'));
  } else {
    // Browser globals (root is window)
    if (!root.platformClient) {
      root.platformClient = {};
    }
    root.platformClient.PresenceApi = factory(root.platformClient.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * Presence service.
   * @module purecloud-platform-client-v2/api/PresenceApi
   * @version 6.0.1
   */

  /**
   * Constructs a new PresenceApi. 
   * @alias module:purecloud-platform-client-v2/api/PresenceApi
   * @class
   * @param {module:purecloud-platform-client-v2/ApiClient} apiClient Optional API client implementation to use,
   * default to {@link module:purecloud-platform-client-v2/ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;



    /**
     * Delete a Presence Definition
     * 
     * @param {String} presenceId Organization Presence ID
     */
    this.deletePresencedefinition = function(presenceId) { 

      // verify the required parameter 'presenceId' is set
      if (presenceId === undefined || presenceId === null) {
        throw "Missing the required parameter 'presenceId' when calling deletePresencedefinition";
      }


      return this.apiClient.callApi(
        '/api/v2/presencedefinitions/{presenceId}', 
        'DELETE', 
        { 'presenceId': presenceId }, 
        {  }, 
        {  }, 
        {  }, 
        null, 
        ['PureCloud Auth'], 
        ['application/json'], 
        ['application/json']
      );
    };


    /**
     * Get a Presence Definition
     * 
     * @param {String} presenceId Organization Presence ID
     * @param {Object} opts Optional parameters
     * @param {String} opts.localeCode The locale code to fetch for the presence definition. Use ALL to fetch everything.
     */
    this.getPresencedefinition = function(presenceId, opts) { 
      opts = opts || {};

      // verify the required parameter 'presenceId' is set
      if (presenceId === undefined || presenceId === null) {
        throw "Missing the required parameter 'presenceId' when calling getPresencedefinition";
      }


      return this.apiClient.callApi(
        '/api/v2/presencedefinitions/{presenceId}', 
        'GET', 
        { 'presenceId': presenceId }, 
        { 'localeCode': opts['localeCode'] }, 
        {  }, 
        {  }, 
        null, 
        ['PureCloud Auth'], 
        ['application/json'], 
        ['application/json']
      );
    };


    /**
     * Get an Organization&#39;s list of Presence Definitions
     * 
     * @param {Object} opts Optional parameters
     * @param {Number} opts.pageNumber Page number (default to 1)
     * @param {Number} opts.pageSize Page size (default to 25)
     * @param {String} opts.deleted Deleted query can be TRUE, FALSE or ALL (default to false)
     * @param {String} opts.localeCode The locale code to fetch for each presence definition. Use ALL to fetch everything.
     */
    this.getPresencedefinitions = function(opts) { 
      opts = opts || {};


      return this.apiClient.callApi(
        '/api/v2/presencedefinitions', 
        'GET', 
        {  }, 
        { 'pageNumber': opts['pageNumber'],'pageSize': opts['pageSize'],'deleted': opts['deleted'],'localeCode': opts['localeCode'] }, 
        {  }, 
        {  }, 
        null, 
        ['PureCloud Auth'], 
        ['application/json'], 
        ['application/json']
      );
    };


    /**
     * Get the list of SystemPresences
     * 
     */
    this.getSystempresences = function() { 


      return this.apiClient.callApi(
        '/api/v2/systempresences', 
        'GET', 
        {  }, 
        {  }, 
        {  }, 
        {  }, 
        null, 
        ['PureCloud Auth'], 
        ['application/json'], 
        ['application/json']
      );
    };


    /**
     * Get a user&#39;s Presence
     * 
     * @param {String} userId user Id
     * @param {String} sourceId Source
     */
    this.getUserPresence = function(userId, sourceId) { 

      // verify the required parameter 'userId' is set
      if (userId === undefined || userId === null) {
        throw "Missing the required parameter 'userId' when calling getUserPresence";
      }

      // verify the required parameter 'sourceId' is set
      if (sourceId === undefined || sourceId === null) {
        throw "Missing the required parameter 'sourceId' when calling getUserPresence";
      }


      return this.apiClient.callApi(
        '/api/v2/users/{userId}/presences/{sourceId}', 
        'GET', 
        { 'userId': userId,'sourceId': sourceId }, 
        {  }, 
        {  }, 
        {  }, 
        null, 
        ['PureCloud Auth'], 
        ['application/json'], 
        ['application/json']
      );
    };


    /**
     * Patch a user&#39;s Presence
     * The presence object can be patched one of three ways. Option 1: Set the &#39;primary&#39; property to true. This will set the &#39;source&#39; defined in the path as the user&#39;s primary presence source. Option 2: Provide the presenceDefinition value. The &#39;id&#39; is the only value required within the presenceDefinition. Option 3: Provide the message value. Option 1 can be combined with Option 2 and/or Option 3.
     * @param {String} userId user Id
     * @param {String} sourceId Source
     * @param {module:purecloud-platform-client-v2/model/UserPresence} body User presence
     */
    this.patchUserPresence = function(userId, sourceId, body) { 

      // verify the required parameter 'userId' is set
      if (userId === undefined || userId === null) {
        throw "Missing the required parameter 'userId' when calling patchUserPresence";
      }

      // verify the required parameter 'sourceId' is set
      if (sourceId === undefined || sourceId === null) {
        throw "Missing the required parameter 'sourceId' when calling patchUserPresence";
      }

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw "Missing the required parameter 'body' when calling patchUserPresence";
      }


      return this.apiClient.callApi(
        '/api/v2/users/{userId}/presences/{sourceId}', 
        'PATCH', 
        { 'userId': userId,'sourceId': sourceId }, 
        {  }, 
        {  }, 
        {  }, 
        body, 
        ['PureCloud Auth'], 
        ['application/json'], 
        ['application/json']
      );
    };


    /**
     * Create a Presence Definition
     * 
     * @param {module:purecloud-platform-client-v2/model/OrganizationPresence} body The Presence Definition to create
     */
    this.postPresencedefinitions = function(body) { 

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw "Missing the required parameter 'body' when calling postPresencedefinitions";
      }


      return this.apiClient.callApi(
        '/api/v2/presencedefinitions', 
        'POST', 
        {  }, 
        {  }, 
        {  }, 
        {  }, 
        body, 
        ['PureCloud Auth'], 
        ['application/json'], 
        ['application/json']
      );
    };


    /**
     * Update a Presence Definition
     * 
     * @param {String} presenceId Organization Presence ID
     * @param {module:purecloud-platform-client-v2/model/OrganizationPresence} body The OrganizationPresence to update
     */
    this.putPresencedefinition = function(presenceId, body) { 

      // verify the required parameter 'presenceId' is set
      if (presenceId === undefined || presenceId === null) {
        throw "Missing the required parameter 'presenceId' when calling putPresencedefinition";
      }

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw "Missing the required parameter 'body' when calling putPresencedefinition";
      }


      return this.apiClient.callApi(
        '/api/v2/presencedefinitions/{presenceId}', 
        'PUT', 
        { 'presenceId': presenceId }, 
        {  }, 
        {  }, 
        {  }, 
        body, 
        ['PureCloud Auth'], 
        ['application/json'], 
        ['application/json']
      );
    };
  };

  return exports;
}));

},{"../ApiClient":8}],31:[function(require,module,exports){
(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['purecloud-platform-client-v2/ApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'));
  } else {
    // Browser globals (root is window)
    if (!root.platformClient) {
      root.platformClient = {};
    }
    root.platformClient.QualityApi = factory(root.platformClient.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * Quality service.
   * @module purecloud-platform-client-v2/api/QualityApi
   * @version 6.0.1
   */

  /**
   * Constructs a new QualityApi. 
   * @alias module:purecloud-platform-client-v2/api/QualityApi
   * @class
   * @param {module:purecloud-platform-client-v2/ApiClient} apiClient Optional API client implementation to use,
   * default to {@link module:purecloud-platform-client-v2/ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;



    /**
     * Delete a calibration by id.
     * 
     * @param {String} calibrationId Calibration ID
     * @param {String} calibratorId calibratorId
     */
    this.deleteQualityCalibration = function(calibrationId, calibratorId) { 

      // verify the required parameter 'calibrationId' is set
      if (calibrationId === undefined || calibrationId === null) {
        throw "Missing the required parameter 'calibrationId' when calling deleteQualityCalibration";
      }

      // verify the required parameter 'calibratorId' is set
      if (calibratorId === undefined || calibratorId === null) {
        throw "Missing the required parameter 'calibratorId' when calling deleteQualityCalibration";
      }


      return this.apiClient.callApi(
        '/api/v2/quality/calibrations/{calibrationId}', 
        'DELETE', 
        { 'calibrationId': calibrationId }, 
        { 'calibratorId': calibratorId }, 
        {  }, 
        {  }, 
        null, 
        ['PureCloud Auth'], 
        ['application/json'], 
        ['application/json']
      );
    };


    /**
     * Delete an evaluation
     * 
     * @param {String} conversationId conversationId
     * @param {String} evaluationId evaluationId
     * @param {Object} opts Optional parameters
     * @param {String} opts.expand evaluatorId
     */
    this.deleteQualityConversationEvaluation = function(conversationId, evaluationId, opts) { 
      opts = opts || {};

      // verify the required parameter 'conversationId' is set
      if (conversationId === undefined || conversationId === null) {
        throw "Missing the required parameter 'conversationId' when calling deleteQualityConversationEvaluation";
      }

      // verify the required parameter 'evaluationId' is set
      if (evaluationId === undefined || evaluationId === null) {
        throw "Missing the required parameter 'evaluationId' when calling deleteQualityConversationEvaluation";
      }


      return this.apiClient.callApi(
        '/api/v2/quality/conversations/{conversationId}/evaluations/{evaluationId}', 
        'DELETE', 
        { 'conversationId': conversationId,'evaluationId': evaluationId }, 
        { 'expand': opts['expand'] }, 
        {  }, 
        {  }, 
        null, 
        ['PureCloud Auth'], 
        ['application/json'], 
        ['application/json']
      );
    };


    /**
     * Delete an evaluation form.
     * 
     * @param {String} formId Form ID
     */
    this.deleteQualityForm = function(formId) { 

      // verify the required parameter 'formId' is set
      if (formId === undefined || formId === null) {
        throw "Missing the required parameter 'formId' when calling deleteQualityForm";
      }


      return this.apiClient.callApi(
        '/api/v2/quality/forms/{formId}', 
        'DELETE', 
        { 'formId': formId }, 
        {  }, 
        {  }, 
        {  }, 
        null, 
        ['PureCloud Auth'], 
        ['application/json'], 
        ['application/json']
      );
    };


    /**
     * Delete a keywordSet by id.
     * 
     * @param {String} keywordSetId KeywordSet ID
     */
    this.deleteQualityKeywordset = function(keywordSetId) { 

      // verify the required parameter 'keywordSetId' is set
      if (keywordSetId === undefined || keywordSetId === null) {
        throw "Missing the required parameter 'keywordSetId' when calling deleteQualityKeywordset";
      }


      return this.apiClient.callApi(
        '/api/v2/quality/keywordsets/{keywordSetId}', 
        'DELETE', 
        { 'keywordSetId': keywordSetId }, 
        {  }, 
        {  }, 
        {  }, 
        null, 
        ['PureCloud Auth'], 
        ['application/json'], 
        ['application/json']
      );
    };


    /**
     * Delete keyword sets
     * Bulk delete of keyword sets; this will only delete the keyword sets that match the ids specified in the query param.
     * @param {String} ids A comma-delimited list of valid KeywordSet ids
     */
    this.deleteQualityKeywordsets = function(ids) { 

      // verify the required parameter 'ids' is set
      if (ids === undefined || ids === null) {
        throw "Missing the required parameter 'ids' when calling deleteQualityKeywordsets";
      }


      return this.apiClient.callApi(
        '/api/v2/quality/keywordsets', 
        'DELETE', 
        {  }, 
        { 'ids': ids }, 
        {  }, 
        {  }, 
        null, 
        ['PureCloud Auth'], 
        ['application/json'], 
        ['application/json']
      );
    };


    /**
     * Gets a list of Agent Activities
     * Including the number of evaluations and average evaluation score
     * @param {Object} opts Optional parameters
     * @param {Number} opts.pageSize The total page size requested (default to 25)
     * @param {Number} opts.pageNumber The page number requested (default to 1)
     * @param {String} opts.sortBy variable name requested to sort by
     * @param {Array.<Object>} opts.expand variable name requested by expand list
     * @param {String} opts.nextPage next page token
     * @param {String} opts.previousPage Previous page token
     * @param {Date} opts.startTime Start time of agent activity. Date time is represented as an ISO-8601 string. For example: yyyy-MM-ddTHH:mm:ss.SSSZ
     * @param {Date} opts.endTime End time of agent activity. Date time is represented as an ISO-8601 string. For example: yyyy-MM-ddTHH:mm:ss.SSSZ
     * @param {Array.<Object>} opts.agentUserId user id of agent requested
     * @param {String} opts.evaluatorUserId user id of the evaluator
     * @param {String} opts.name name
     * @param {String} opts.group group id
     */
    this.getQualityAgentsActivity = function(opts) { 
      opts = opts || {};


      return this.apiClient.callApi(
        '/api/v2/quality/agents/activity', 
        'GET', 
        {  }, 
        { 'pageSize': opts['pageSize'],'pageNumber': opts['pageNumber'],'sortBy': opts['sortBy'],'expand': this.apiClient.buildCollectionParam(opts['expand'], 'multi'),'nextPage': opts['nextPage'],'previousPage': opts['previousPage'],'startTime': opts['startTime'],'endTime': opts['endTime'],'agentUserId': this.apiClient.buildCollectionParam(opts['agentUserId'], 'multi'),'evaluatorUserId': opts['evaluatorUserId'],'name': opts['name'],'group': opts['group'] }, 
        {  }, 
        {  }, 
        null, 
        ['PureCloud Auth'], 
        ['application/json'], 
        ['application/json']
      );
    };


    /**
     * Get a calibration by id.
     * 
     * @param {String} calibrationId Calibration ID
     * @param {String} calibratorId calibratorId
     */
    this.getQualityCalibration = function(calibrationId, calibratorId) { 

      // verify the required parameter 'calibrationId' is set
      if (calibrationId === undefined || calibrationId === null) {
        throw "Missing the required parameter 'calibrationId' when calling getQualityCalibration";
      }

      // verify the required parameter 'calibratorId' is set
      if (calibratorId === undefined || calibratorId === null) {
        throw "Missing the required parameter 'calibratorId' when calling getQualityCalibration";
      }


      return this.apiClient.callApi(
        '/api/v2/quality/calibrations/{calibrationId}', 
        'GET', 
        { 'calibrationId': calibrationId }, 
        { 'calibratorId': calibratorId }, 
        {  }, 
        {  }, 
        null, 
        ['PureCloud Auth'], 
        ['application/json'], 
        ['application/json']
      );
    };


    /**
     * Get the list of calibrations
     * 
     * @param {String} calibratorId user id of calibrator
     * @param {Object} opts Optional parameters
     * @param {Number} opts.pageSize The total page size requested (default to 25)
     * @param {Number} opts.pageNumber The page number requested (default to 1)
     * @param {String} opts.sortBy variable name requested to sort by
     * @param {Array.<Object>} opts.expand variable name requested by expand list
     * @param {String} opts.nextPage next page token
     * @param {String} opts.previousPage Previous page token
     * @param {String} opts.conversationId conversation id
     * @param {Date} opts.startTime Beginning of the calibration query. Date time is represented as an ISO-8601 string. For example: yyyy-MM-ddTHH:mm:ss.SSSZ
     * @param {Date} opts.endTime end of the calibration query. Date time is represented as an ISO-8601 string. For example: yyyy-MM-ddTHH:mm:ss.SSSZ
     */
    this.getQualityCalibrations = function(calibratorId, opts) { 
      opts = opts || {};

      // verify the required parameter 'calibratorId' is set
      if (calibratorId === undefined || calibratorId === null) {
        throw "Missing the required parameter 'calibratorId' when calling getQualityCalibrations";
      }


      return this.apiClient.callApi(
        '/api/v2/quality/calibrations', 
        'GET', 
        {  }, 
        { 'pageSize': opts['pageSize'],'pageNumber': opts['pageNumber'],'sortBy': opts['sortBy'],'expand': this.apiClient.buildCollectionParam(opts['expand'], 'multi'),'nextPage': opts['nextPage'],'previousPage': opts['previousPage'],'conversationId': opts['conversationId'],'startTime': opts['startTime'],'endTime': opts['endTime'],'calibratorId': calibratorId }, 
        {  }, 
        {  }, 
        null, 
        ['PureCloud Auth'], 
        ['application/json'], 
        ['application/json']
      );
    };


    /**
     * Get audits for conversation or recording
     * 
     * @param {String} conversationId Conversation ID
     * @param {Object} opts Optional parameters
     * @param {Number} opts.pageSize The total page size requested (default to 25)
     * @param {Number} opts.pageNumber The page number requested (default to 1)
     * @param {String} opts.sortBy variable name requested to sort by
     * @param {Array.<Object>} opts.expand variable name requested by expand list
     * @param {String} opts.nextPage next page token
     * @param {String} opts.previousPage Previous page token
     * @param {String} opts.recordingId id of the recording
     * @param {String} opts.entityType entity type options: Recording, Calibration, Evaluation, Annotation, Screen_Recording (default to RECORDING)
     */
    this.getQualityConversationAudits = function(conversationId, opts) { 
      opts = opts || {};

      // verify the required parameter 'conversationId' is set
      if (conversationId === undefined || conversationId === null) {
        throw "Missing the required parameter 'conversationId' when calling getQualityConversationAudits";
      }


      return this.apiClient.callApi(
        '/api/v2/quality/conversations/{conversationId}/audits', 
        'GET', 
        { 'conversationId': conversationId }, 
        { 'pageSize': opts['pageSize'],'pageNumber': opts['pageNumber'],'sortBy': opts['sortBy'],'expand': this.apiClient.buildCollectionParam(opts['expand'], 'multi'),'nextPage': opts['nextPage'],'previousPage': opts['previousPage'],'recordingId': opts['recordingId'],'entityType': opts['entityType'] }, 
        {  }, 
        {  }, 
        null, 
        ['PureCloud Auth'], 
        ['application/json'], 
        ['application/json']
      );
    };


    /**
     * Get an evaluation
     * 
     * @param {String} conversationId conversationId
     * @param {String} evaluationId evaluationId
     * @param {Object} opts Optional parameters
     * @param {String} opts.expand agent, evaluator, evaluationForm
     */
    this.getQualityConversationEvaluation = function(conversationId, evaluationId, opts) { 
      opts = opts || {};

      // verify the required parameter 'conversationId' is set
      if (conversationId === undefined || conversationId === null) {
        throw "Missing the required parameter 'conversationId' when calling getQualityConversationEvaluation";
      }

      // verify the required parameter 'evaluationId' is set
      if (evaluationId === undefined || evaluationId === null) {
        throw "Missing the required parameter 'evaluationId' when calling getQualityConversationEvaluation";
      }


      return this.apiClient.callApi(
        '/api/v2/quality/conversations/{conversationId}/evaluations/{evaluationId}', 
        'GET', 
        { 'conversationId': conversationId,'evaluationId': evaluationId }, 
        { 'expand': opts['expand'] }, 
        {  }, 
        {  }, 
        null, 
        ['PureCloud Auth'], 
        ['application/json'], 
        ['application/json']
      );
    };


    /**
     * Queries Evaluations and returns a paged list
     * Query params must include one of conversationId, evaluatorUserId, or agentUserId
     * @param {Object} opts Optional parameters
     * @param {Number} opts.pageSize The total page size requested (default to 25)
     * @param {Number} opts.pageNumber The page number requested (default to 1)
     * @param {String} opts.sortBy variable name requested to sort by
     * @param {Array.<Object>} opts.expand variable name requested by expand list
     * @param {String} opts.nextPage next page token
     * @param {String} opts.previousPage Previous page token
     * @param {String} opts.conversationId conversationId specified
     * @param {String} opts.agentUserId user id of the agent
     * @param {String} opts.evaluatorUserId evaluator user id
     * @param {String} opts.queueId queue id
     * @param {String} opts.startTime start time of the evaluation query
     * @param {String} opts.endTime end time of the evaluation query
     * @param {Array.<Object>} opts.evaluationState evaluation state options: Pending, InProgress, Finished
     * @param {Boolean} opts.isReleased the evaluation has been released
     * @param {Boolean} opts.agentHasRead agent has the evaluation
     * @param {Boolean} opts.expandAnswerTotalScores get the total scores for evaluations
     * @param {Number} opts.maximum maximum
     */
    this.getQualityEvaluationsQuery = function(opts) { 
      opts = opts || {};


      return this.apiClient.callApi(
        '/api/v2/quality/evaluations/query', 
        'GET', 
        {  }, 
        { 'pageSize': opts['pageSize'],'pageNumber': opts['pageNumber'],'sortBy': opts['sortBy'],'expand': this.apiClient.buildCollectionParam(opts['expand'], 'multi'),'nextPage': opts['nextPage'],'previousPage': opts['previousPage'],'conversationId': opts['conversationId'],'agentUserId': opts['agentUserId'],'evaluatorUserId': opts['evaluatorUserId'],'queueId': opts['queueId'],'startTime': opts['startTime'],'endTime': opts['endTime'],'evaluationState': this.apiClient.buildCollectionParam(opts['evaluationState'], 'multi'),'isReleased': opts['isReleased'],'agentHasRead': opts['agentHasRead'],'expandAnswerTotalScores': opts['expandAnswerTotalScores'],'maximum': opts['maximum'] }, 
        {  }, 
        {  }, 
        null, 
        ['PureCloud Auth'], 
        ['application/json'], 
        ['application/json']
      );
    };


    /**
     * Get an evaluator activity
     * 
     * @param {Object} opts Optional parameters
     * @param {Number} opts.pageSize The total page size requested (default to 25)
     * @param {Number} opts.pageNumber The page number requested (default to 1)
     * @param {String} opts.sortBy variable name requested to sort by
     * @param {Array.<Object>} opts.expand variable name requested by expand list
     * @param {String} opts.nextPage next page token
     * @param {String} opts.previousPage Previous page token
     * @param {Date} opts.startTime The start time specified. Date time is represented as an ISO-8601 string. For example: yyyy-MM-ddTHH:mm:ss.SSSZ
     * @param {Date} opts.endTime The end time specified. Date time is represented as an ISO-8601 string. For example: yyyy-MM-ddTHH:mm:ss.SSSZ
     * @param {String} opts.name Evaluator name
     * @param {Array.<Object>} opts.permission permission strings
     * @param {String} opts.group group id
     */
    this.getQualityEvaluatorsActivity = function(opts) { 
      opts = opts || {};


      return this.apiClient.callApi(
        '/api/v2/quality/evaluators/activity', 
        'GET', 
        {  }, 
        { 'pageSize': opts['pageSize'],'pageNumber': opts['pageNumber'],'sortBy': opts['sortBy'],'expand': this.apiClient.buildCollectionParam(opts['expand'], 'multi'),'nextPage': opts['nextPage'],'previousPage': opts['previousPage'],'startTime': opts['startTime'],'endTime': opts['endTime'],'name': opts['name'],'permission': this.apiClient.buildCollectionParam(opts['permission'], 'multi'),'group': opts['group'] }, 
        {  }, 
        {  }, 
        null, 
        ['PureCloud Auth'], 
        ['application/json'], 
        ['application/json']
      );
    };


    /**
     * Get an evaluation form
     * 
     * @param {String} formId Form ID
     */
    this.getQualityForm = function(formId) { 

      // verify the required parameter 'formId' is set
      if (formId === undefined || formId === null) {
        throw "Missing the required parameter 'formId' when calling getQualityForm";
      }


      return this.apiClient.callApi(
        '/api/v2/quality/forms/{formId}', 
        'GET', 
        { 'formId': formId }, 
        {  }, 
        {  }, 
        {  }, 
        null, 
        ['PureCloud Auth'], 
        ['application/json'], 
        ['application/json']
      );
    };


    /**
     * Gets all the revisions for a specific evaluation.
     * 
     * @param {String} formId Form ID
     * @param {Object} opts Optional parameters
     * @param {Number} opts.pageSize Page size (default to 25)
     * @param {Number} opts.pageNumber Page number (default to 1)
     */
    this.getQualityFormVersions = function(formId, opts) { 
      opts = opts || {};

      // verify the required parameter 'formId' is set
      if (formId === undefined || formId === null) {
        throw "Missing the required parameter 'formId' when calling getQualityFormVersions";
      }


      return this.apiClient.callApi(
        '/api/v2/quality/forms/{formId}/versions', 
        'GET', 
        { 'formId': formId }, 
        { 'pageSize': opts['pageSize'],'pageNumber': opts['pageNumber'] }, 
        {  }, 
        {  }, 
        null, 
        ['PureCloud Auth'], 
        ['application/json'], 
        ['application/json']
      );
    };


    /**
     * Get the list of evaluation forms
     * 
     * @param {Object} opts Optional parameters
     * @param {Number} opts.pageSize The total page size requested (default to 25)
     * @param {Number} opts.pageNumber The page number requested (default to 1)
     * @param {String} opts.sortBy variable name requested to sort by
     * @param {String} opts.nextPage next page token
     * @param {String} opts.previousPage Previous page token
     * @param {String} opts.expand Expand
     * @param {String} opts.name Name
     */
    this.getQualityForms = function(opts) { 
      opts = opts || {};


      return this.apiClient.callApi(
        '/api/v2/quality/forms', 
        'GET', 
        {  }, 
        { 'pageSize': opts['pageSize'],'pageNumber': opts['pageNumber'],'sortBy': opts['sortBy'],'nextPage': opts['nextPage'],'previousPage': opts['previousPage'],'expand': opts['expand'],'name': opts['name'] }, 
        {  }, 
        {  }, 
        null, 
        ['PureCloud Auth'], 
        ['application/json'], 
        ['application/json']
      );
    };


    /**
     * Get a keywordSet by id.
     * 
     * @param {String} keywordSetId KeywordSet ID
     */
    this.getQualityKeywordset = function(keywordSetId) { 

      // verify the required parameter 'keywordSetId' is set
      if (keywordSetId === undefined || keywordSetId === null) {
        throw "Missing the required parameter 'keywordSetId' when calling getQualityKeywordset";
      }


      return this.apiClient.callApi(
        '/api/v2/quality/keywordsets/{keywordSetId}', 
        'GET', 
        { 'keywordSetId': keywordSetId }, 
        {  }, 
        {  }, 
        {  }, 
        null, 
        ['PureCloud Auth'], 
        ['application/json'], 
        ['application/json']
      );
    };


    /**
     * Get the list of keyword sets
     * 
     * @param {Object} opts Optional parameters
     * @param {Number} opts.pageSize The total page size requested (default to 25)
     * @param {Number} opts.pageNumber The page number requested (default to 1)
     * @param {String} opts.sortBy variable name requested to sort by
     * @param {Array.<Object>} opts.expand variable name requested by expand list
     * @param {String} opts.nextPage next page token
     * @param {String} opts.previousPage Previous page token
     * @param {String} opts.name the keyword set name - used for filtering results in searches.
     * @param {String} opts.queueId the queue id - used for filtering results in searches.
     * @param {String} opts.agentId the agent id - used for filtering results in searches.
     * @param {module:purecloud-platform-client-v2/model/String} opts.operator If agentID and queueId are both present, this determines whether the query is an AND or OR between those parameters.
     */
    this.getQualityKeywordsets = function(opts) { 
      opts = opts || {};


      return this.apiClient.callApi(
        '/api/v2/quality/keywordsets', 
        'GET', 
        {  }, 
        { 'pageSize': opts['pageSize'],'pageNumber': opts['pageNumber'],'sortBy': opts['sortBy'],'expand': this.apiClient.buildCollectionParam(opts['expand'], 'multi'),'nextPage': opts['nextPage'],'previousPage': opts['previousPage'],'name': opts['name'],'queueId': opts['queueId'],'agentId': opts['agentId'],'operator': opts['operator'] }, 
        {  }, 
        {  }, 
        null, 
        ['PureCloud Auth'], 
        ['application/json'], 
        ['application/json']
      );
    };


    /**
     * Get the published evaluation forms.
     * 
     * @param {String} formId Form ID
     */
    this.getQualityPublishedform = function(formId) { 

      // verify the required parameter 'formId' is set
      if (formId === undefined || formId === null) {
        throw "Missing the required parameter 'formId' when calling getQualityPublishedform";
      }


      return this.apiClient.callApi(
        '/api/v2/quality/publishedforms/{formId}', 
        'GET', 
        { 'formId': formId }, 
        {  }, 
        {  }, 
        {  }, 
        null, 
        ['PureCloud Auth'], 
        ['application/json'], 
        ['application/json']
      );
    };


    /**
     * Get the published evaluation forms.
     * 
     * @param {Object} opts Optional parameters
     * @param {Number} opts.pageSize Page size (default to 25)
     * @param {Number} opts.pageNumber Page number (default to 1)
     * @param {String} opts.name Name
     */
    this.getQualityPublishedforms = function(opts) { 
      opts = opts || {};


      return this.apiClient.callApi(
        '/api/v2/quality/publishedforms', 
        'GET', 
        {  }, 
        { 'pageSize': opts['pageSize'],'pageNumber': opts['pageNumber'],'name': opts['name'] }, 
        {  }, 
        {  }, 
        null, 
        ['PureCloud Auth'], 
        ['application/json'], 
        ['application/json']
      );
    };


    /**
     * Query for evaluation aggregates
     * 
     * @param {module:purecloud-platform-client-v2/model/AggregationQuery} body query
     */
    this.postAnalyticsEvaluationsAggregatesQuery = function(body) { 

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw "Missing the required parameter 'body' when calling postAnalyticsEvaluationsAggregatesQuery";
      }


      return this.apiClient.callApi(
        '/api/v2/analytics/evaluations/aggregates/query', 
        'POST', 
        {  }, 
        {  }, 
        {  }, 
        {  }, 
        body, 
        ['PureCloud Auth'], 
        ['application/json'], 
        ['application/json']
      );
    };


    /**
     * Create a calibration
     * 
     * @param {module:purecloud-platform-client-v2/model/CalibrationCreate} body calibration
     * @param {Object} opts Optional parameters
     * @param {String} opts.expand calibratorId
     */
    this.postQualityCalibrations = function(body, opts) { 
      opts = opts || {};

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw "Missing the required parameter 'body' when calling postQualityCalibrations";
      }


      return this.apiClient.callApi(
        '/api/v2/quality/calibrations', 
        'POST', 
        {  }, 
        { 'expand': opts['expand'] }, 
        {  }, 
        {  }, 
        body, 
        ['PureCloud Auth'], 
        ['application/json'], 
        ['application/json']
      );
    };


    /**
     * Create an evaluation
     * 
     * @param {String} conversationId conversationId
     * @param {module:purecloud-platform-client-v2/model/Evaluation} body evaluation
     * @param {Object} opts Optional parameters
     * @param {String} opts.expand evaluatorId
     */
    this.postQualityConversationEvaluations = function(conversationId, body, opts) { 
      opts = opts || {};

      // verify the required parameter 'conversationId' is set
      if (conversationId === undefined || conversationId === null) {
        throw "Missing the required parameter 'conversationId' when calling postQualityConversationEvaluations";
      }

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw "Missing the required parameter 'body' when calling postQualityConversationEvaluations";
      }


      return this.apiClient.callApi(
        '/api/v2/quality/conversations/{conversationId}/evaluations', 
        'POST', 
        { 'conversationId': conversationId }, 
        { 'expand': opts['expand'] }, 
        {  }, 
        {  }, 
        body, 
        ['PureCloud Auth'], 
        ['application/json'], 
        ['application/json']
      );
    };


    /**
     * Score evaluation
     * 
     * @param {module:purecloud-platform-client-v2/model/EvaluationFormAndScoringSet} body evaluationAndScoringSet
     */
    this.postQualityEvaluationsScoring = function(body) { 

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw "Missing the required parameter 'body' when calling postQualityEvaluationsScoring";
      }


      return this.apiClient.callApi(
        '/api/v2/quality/evaluations/scoring', 
        'POST', 
        {  }, 
        {  }, 
        {  }, 
        {  }, 
        body, 
        ['PureCloud Auth'], 
        ['application/json'], 
        ['application/json']
      );
    };


    /**
     * Create an evaluation form.
     * 
     * @param {module:purecloud-platform-client-v2/model/EvaluationForm} body Evaluation form
     */
    this.postQualityForms = function(body) { 

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw "Missing the required parameter 'body' when calling postQualityForms";
      }


      return this.apiClient.callApi(
        '/api/v2/quality/forms', 
        'POST', 
        {  }, 
        {  }, 
        {  }, 
        {  }, 
        body, 
        ['PureCloud Auth'], 
        ['application/json'], 
        ['application/json']
      );
    };


    /**
     * Create a Keyword Set
     * 
     * @param {module:purecloud-platform-client-v2/model/KeywordSet} body keywordSet
     * @param {Object} opts Optional parameters
     * @param {String} opts.expand queueId
     */
    this.postQualityKeywordsets = function(body, opts) { 
      opts = opts || {};

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw "Missing the required parameter 'body' when calling postQualityKeywordsets";
      }


      return this.apiClient.callApi(
        '/api/v2/quality/keywordsets', 
        'POST', 
        {  }, 
        { 'expand': opts['expand'] }, 
        {  }, 
        {  }, 
        body, 
        ['PureCloud Auth'], 
        ['application/json'], 
        ['application/json']
      );
    };


    /**
     * Publish an evaluation form.
     * 
     * @param {module:purecloud-platform-client-v2/model/EvaluationForm} body Evaluation form
     */
    this.postQualityPublishedforms = function(body) { 

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw "Missing the required parameter 'body' when calling postQualityPublishedforms";
      }


      return this.apiClient.callApi(
        '/api/v2/quality/publishedforms', 
        'POST', 
        {  }, 
        {  }, 
        {  }, 
        {  }, 
        body, 
        ['PureCloud Auth'], 
        ['application/json'], 
        ['application/json']
      );
    };


    /**
     * Retrieve the spotability statistic
     * 
     * @param {Object} opts Optional parameters
     * @param {module:purecloud-platform-client-v2/model/KeywordSet} opts.body Keyword Set
     */
    this.postQualitySpotability = function(opts) { 
      opts = opts || {};


      return this.apiClient.callApi(
        '/api/v2/quality/spotability', 
        'POST', 
        {  }, 
        {  }, 
        {  }, 
        {  }, 
        opts['body'], 
        ['PureCloud Auth'], 
        ['application/json'], 
        ['application/json']
      );
    };


    /**
     * Update a calibration to the specified calibration via PUT.  Editable fields include: evaluators, expertEvaluator, and scoringIndex
     * 
     * @param {String} calibrationId Calibration ID
     * @param {module:purecloud-platform-client-v2/model/Calibration} body Calibration
     */
    this.putQualityCalibration = function(calibrationId, body) { 

      // verify the required parameter 'calibrationId' is set
      if (calibrationId === undefined || calibrationId === null) {
        throw "Missing the required parameter 'calibrationId' when calling putQualityCalibration";
      }

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw "Missing the required parameter 'body' when calling putQualityCalibration";
      }


      return this.apiClient.callApi(
        '/api/v2/quality/calibrations/{calibrationId}', 
        'PUT', 
        { 'calibrationId': calibrationId }, 
        {  }, 
        {  }, 
        {  }, 
        body, 
        ['PureCloud Auth'], 
        ['application/json'], 
        ['application/json']
      );
    };


    /**
     * Update an evaluation
     * 
     * @param {String} conversationId conversationId
     * @param {String} evaluationId evaluationId
     * @param {module:purecloud-platform-client-v2/model/Evaluation} body evaluation
     * @param {Object} opts Optional parameters
     * @param {String} opts.expand evaluatorId
     */
    this.putQualityConversationEvaluation = function(conversationId, evaluationId, body, opts) { 
      opts = opts || {};

      // verify the required parameter 'conversationId' is set
      if (conversationId === undefined || conversationId === null) {
        throw "Missing the required parameter 'conversationId' when calling putQualityConversationEvaluation";
      }

      // verify the required parameter 'evaluationId' is set
      if (evaluationId === undefined || evaluationId === null) {
        throw "Missing the required parameter 'evaluationId' when calling putQualityConversationEvaluation";
      }

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw "Missing the required parameter 'body' when calling putQualityConversationEvaluation";
      }


      return this.apiClient.callApi(
        '/api/v2/quality/conversations/{conversationId}/evaluations/{evaluationId}', 
        'PUT', 
        { 'conversationId': conversationId,'evaluationId': evaluationId }, 
        { 'expand': opts['expand'] }, 
        {  }, 
        {  }, 
        body, 
        ['PureCloud Auth'], 
        ['application/json'], 
        ['application/json']
      );
    };


    /**
     * Update an evaluation form.
     * 
     * @param {String} formId Form ID
     * @param {module:purecloud-platform-client-v2/model/EvaluationForm} body Evaluation form
     */
    this.putQualityForm = function(formId, body) { 

      // verify the required parameter 'formId' is set
      if (formId === undefined || formId === null) {
        throw "Missing the required parameter 'formId' when calling putQualityForm";
      }

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw "Missing the required parameter 'body' when calling putQualityForm";
      }


      return this.apiClient.callApi(
        '/api/v2/quality/forms/{formId}', 
        'PUT', 
        { 'formId': formId }, 
        {  }, 
        {  }, 
        {  }, 
        body, 
        ['PureCloud Auth'], 
        ['application/json'], 
        ['application/json']
      );
    };


    /**
     * Update a keywordSet to the specified keywordSet via PUT.
     * 
     * @param {String} keywordSetId KeywordSet ID
     * @param {module:purecloud-platform-client-v2/model/KeywordSet} body keywordSet
     */
    this.putQualityKeywordset = function(keywordSetId, body) { 

      // verify the required parameter 'keywordSetId' is set
      if (keywordSetId === undefined || keywordSetId === null) {
        throw "Missing the required parameter 'keywordSetId' when calling putQualityKeywordset";
      }

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw "Missing the required parameter 'body' when calling putQualityKeywordset";
      }


      return this.apiClient.callApi(
        '/api/v2/quality/keywordsets/{keywordSetId}', 
        'PUT', 
        { 'keywordSetId': keywordSetId }, 
        {  }, 
        {  }, 
        {  }, 
        body, 
        ['PureCloud Auth'], 
        ['application/json'], 
        ['application/json']
      );
    };
  };

  return exports;
}));

},{"../ApiClient":8}],32:[function(require,module,exports){
(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['purecloud-platform-client-v2/ApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'));
  } else {
    // Browser globals (root is window)
    if (!root.platformClient) {
      root.platformClient = {};
    }
    root.platformClient.RecordingApi = factory(root.platformClient.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * Recording service.
   * @module purecloud-platform-client-v2/api/RecordingApi
   * @version 6.0.1
   */

  /**
   * Constructs a new RecordingApi. 
   * @alias module:purecloud-platform-client-v2/api/RecordingApi
   * @class
   * @param {module:purecloud-platform-client-v2/ApiClient} apiClient Optional API client implementation to use,
   * default to {@link module:purecloud-platform-client-v2/ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;



    /**
     * Delete annotation
     * 
     * @param {String} conversationId Conversation ID
     * @param {String} recordingId Recording ID
     * @param {String} annotationId Annotation ID
     */
    this.deleteConversationRecordingAnnotation = function(conversationId, recordingId, annotationId) { 

      // verify the required parameter 'conversationId' is set
      if (conversationId === undefined || conversationId === null) {
        throw "Missing the required parameter 'conversationId' when calling deleteConversationRecordingAnnotation";
      }

      // verify the required parameter 'recordingId' is set
      if (recordingId === undefined || recordingId === null) {
        throw "Missing the required parameter 'recordingId' when calling deleteConversationRecordingAnnotation";
      }

      // verify the required parameter 'annotationId' is set
      if (annotationId === undefined || annotationId === null) {
        throw "Missing the required parameter 'annotationId' when calling deleteConversationRecordingAnnotation";
      }


      return this.apiClient.callApi(
        '/api/v2/conversations/{conversationId}/recordings/{recordingId}/annotations/{annotationId}', 
        'DELETE', 
        { 'conversationId': conversationId,'recordingId': recordingId,'annotationId': annotationId }, 
        {  }, 
        {  }, 
        {  }, 
        null, 
        ['PureCloud Auth'], 
        ['application/json'], 
        ['application/json']
      );
    };


    /**
     * Deletes a single orphan recording
     * 
     * @param {String} orphanId Orphan ID
     */
    this.deleteOrphanrecording = function(orphanId) { 

      // verify the required parameter 'orphanId' is set
      if (orphanId === undefined || orphanId === null) {
        throw "Missing the required parameter 'orphanId' when calling deleteOrphanrecording";
      }


      return this.apiClient.callApi(
        '/api/v2/orphanrecordings/{orphanId}', 
        'DELETE', 
        { 'orphanId': orphanId }, 
        {  }, 
        {  }, 
        {  }, 
        null, 
        ['PureCloud Auth'], 
        ['application/json'], 
        ['application/json']
      );
    };


    /**
     * Delete media retention policies
     * Bulk delete of media retention policies, this will only delete the polices that match the ids specified in the query param.
     * @param {String} ids 
     */
    this.deleteRecordingMediaretentionpolicies = function(ids) { 

      // verify the required parameter 'ids' is set
      if (ids === undefined || ids === null) {
        throw "Missing the required parameter 'ids' when calling deleteRecordingMediaretentionpolicies";
      }


      return this.apiClient.callApi(
        '/api/v2/recording/mediaretentionpolicies', 
        'DELETE', 
        {  }, 
        { 'ids': ids }, 
        {  }, 
        {  }, 
        null, 
        ['PureCloud Auth'], 
        ['application/json'], 
        ['application/json']
      );
    };


    /**
     * Delete a media retention policy
     * 
     * @param {String} policyId Policy ID
     */
    this.deleteRecordingMediaretentionpolicy = function(policyId) { 

      // verify the required parameter 'policyId' is set
      if (policyId === undefined || policyId === null) {
        throw "Missing the required parameter 'policyId' when calling deleteRecordingMediaretentionpolicy";
      }


      return this.apiClient.callApi(
        '/api/v2/recording/mediaretentionpolicies/{policyId}', 
        'DELETE', 
        { 'policyId': policyId }, 
        {  }, 
        {  }, 
        {  }, 
        null, 
        ['PureCloud Auth'], 
        ['application/json'], 
        ['application/json']
      );
    };


    /**
     * Gets a specific recording.
     * 
     * @param {String} conversationId Conversation ID
     * @param {String} recordingId Recording ID
     * @param {Object} opts Optional parameters
     * @param {module:purecloud-platform-client-v2/model/String} opts.formatId The desired media format. (default to WEBM)
     * @param {Boolean} opts.download requesting a download format of the recording (default to false)
     * @param {String} opts.fileName the name of the downloaded fileName
     */
    this.getConversationRecording = function(conversationId, recordingId, opts) { 
      opts = opts || {};

      // verify the required parameter 'conversationId' is set
      if (conversationId === undefined || conversationId === null) {
        throw "Missing the required parameter 'conversationId' when calling getConversationRecording";
      }

      // verify the required parameter 'recordingId' is set
      if (recordingId === undefined || recordingId === null) {
        throw "Missing the required parameter 'recordingId' when calling getConversationRecording";
      }


      return this.apiClient.callApi(
        '/api/v2/conversations/{conversationId}/recordings/{recordingId}', 
        'GET', 
        { 'conversationId': conversationId,'recordingId': recordingId }, 
        { 'formatId': opts['formatId'],'download': opts['download'],'fileName': opts['fileName'] }, 
        {  }, 
        {  }, 
        null, 
        ['PureCloud Auth'], 
        ['application/json'], 
        ['application/json']
      );
    };


    /**
     * Get annotation
     * 
     * @param {String} conversationId Conversation ID
     * @param {String} recordingId Recording ID
     * @param {String} annotationId Annotation ID
     */
    this.getConversationRecordingAnnotation = function(conversationId, recordingId, annotationId) { 

      // verify the required parameter 'conversationId' is set
      if (conversationId === undefined || conversationId === null) {
        throw "Missing the required parameter 'conversationId' when calling getConversationRecordingAnnotation";
      }

      // verify the required parameter 'recordingId' is set
      if (recordingId === undefined || recordingId === null) {
        throw "Missing the required parameter 'recordingId' when calling getConversationRecordingAnnotation";
      }

      // verify the required parameter 'annotationId' is set
      if (annotationId === undefined || annotationId === null) {
        throw "Missing the required parameter 'annotationId' when calling getConversationRecordingAnnotation";
      }


      return this.apiClient.callApi(
        '/api/v2/conversations/{conversationId}/recordings/{recordingId}/annotations/{annotationId}', 
        'GET', 
        { 'conversationId': conversationId,'recordingId': recordingId,'annotationId': annotationId }, 
        {  }, 
        {  }, 
        {  }, 
        null, 
        ['PureCloud Auth'], 
        ['application/json'], 
        ['application/json']
      );
    };


    /**
     * Get annotations for recording
     * 
     * @param {String} conversationId Conversation ID
     * @param {String} recordingId Recording ID
     */
    this.getConversationRecordingAnnotations = function(conversationId, recordingId) { 

      // verify the required parameter 'conversationId' is set
      if (conversationId === undefined || conversationId === null) {
        throw "Missing the required parameter 'conversationId' when calling getConversationRecordingAnnotations";
      }

      // verify the required parameter 'recordingId' is set
      if (recordingId === undefined || recordingId === null) {
        throw "Missing the required parameter 'recordingId' when calling getConversationRecordingAnnotations";
      }


      return this.apiClient.callApi(
        '/api/v2/conversations/{conversationId}/recordings/{recordingId}/annotations', 
        'GET', 
        { 'conversationId': conversationId,'recordingId': recordingId }, 
        {  }, 
        {  }, 
        {  }, 
        null, 
        ['PureCloud Auth'], 
        ['application/json'], 
        ['application/json']
      );
    };


    /**
     * Get all of a Conversation&#39;s Recordings.
     * 
     * @param {String} conversationId Conversation ID
     * @param {Object} opts Optional parameters
     * @param {Number} opts.maxWaitMs The maximum number of milliseconds to wait for the recording to be ready. Must be a positive value. (default to 5000)
     * @param {module:purecloud-platform-client-v2/model/String} opts.formatId The desired media format (default to WEBM)
     */
    this.getConversationRecordings = function(conversationId, opts) { 
      opts = opts || {};

      // verify the required parameter 'conversationId' is set
      if (conversationId === undefined || conversationId === null) {
        throw "Missing the required parameter 'conversationId' when calling getConversationRecordings";
      }


      return this.apiClient.callApi(
        '/api/v2/conversations/{conversationId}/recordings', 
        'GET', 
        { 'conversationId': conversationId }, 
        { 'maxWaitMs': opts['maxWaitMs'],'formatId': opts['formatId'] }, 
        {  }, 
        {  }, 
        null, 
        ['PureCloud Auth'], 
        ['application/json'], 
        ['application/json']
      );
    };


    /**
     * Gets a single orphan recording
     * 
     * @param {String} orphanId Orphan ID
     */
    this.getOrphanrecording = function(orphanId) { 

      // verify the required parameter 'orphanId' is set
      if (orphanId === undefined || orphanId === null) {
        throw "Missing the required parameter 'orphanId' when calling getOrphanrecording";
      }


      return this.apiClient.callApi(
        '/api/v2/orphanrecordings/{orphanId}', 
        'GET', 
        { 'orphanId': orphanId }, 
        {  }, 
        {  }, 
        {  }, 
        null, 
        ['PureCloud Auth'], 
        ['application/json'], 
        ['application/json']
      );
    };


    /**
     * Gets the media of a single orphan recording
     * A 202 response means the orphaned media is currently transcoding and will be available shortly.A 200 response denotes the transcoded orphan media is available now and is contained in the response body.
     * @param {String} orphanId Orphan ID
     * @param {Object} opts Optional parameters
     * @param {module:purecloud-platform-client-v2/model/String} opts.formatId The desired media format. (default to WEBM)
     * @param {Boolean} opts.download requesting a download format of the recording (default to false)
     * @param {String} opts.fileName the name of the downloaded fileName
     */
    this.getOrphanrecordingMedia = function(orphanId, opts) { 
      opts = opts || {};

      // verify the required parameter 'orphanId' is set
      if (orphanId === undefined || orphanId === null) {
        throw "Missing the required parameter 'orphanId' when calling getOrphanrecordingMedia";
      }


      return this.apiClient.callApi(
        '/api/v2/orphanrecordings/{orphanId}/media', 
        'GET', 
        { 'orphanId': orphanId }, 
        { 'formatId': opts['formatId'],'download': opts['download'],'fileName': opts['fileName'] }, 
        {  }, 
        {  }, 
        null, 
        ['PureCloud Auth'], 
        ['application/json'], 
        ['application/json']
      );
    };


    /**
     * Gets all orphan recordings
     * 
     * @param {Object} opts Optional parameters
     * @param {Number} opts.pageSize The total page size requested (default to 25)
     * @param {Number} opts.pageNumber The page number requested (default to 1)
     * @param {String} opts.sortBy variable name requested to sort by
     * @param {Array.<Object>} opts.expand variable name requested by expand list
     * @param {String} opts.nextPage next page token
     * @param {String} opts.previousPage Previous page token
     * @param {Boolean} opts.hasConversation Filter resulting orphans by whether the conversation is known. False returns all orphans for the organization. (default to false)
     * @param {module:purecloud-platform-client-v2/model/String} opts.media Filter resulting orphans based on their media type
     */
    this.getOrphanrecordings = function(opts) { 
      opts = opts || {};


      return this.apiClient.callApi(
        '/api/v2/orphanrecordings', 
        'GET', 
        {  }, 
        { 'pageSize': opts['pageSize'],'pageNumber': opts['pageNumber'],'sortBy': opts['sortBy'],'expand': this.apiClient.buildCollectionParam(opts['expand'], 'multi'),'nextPage': opts['nextPage'],'previousPage': opts['previousPage'],'hasConversation': opts['hasConversation'],'media': opts['media'] }, 
        {  }, 
        {  }, 
        null, 
        ['PureCloud Auth'], 
        ['application/json'], 
        ['application/json']
      );
    };


    /**
     * Get the local encryption settings
     * 
     * @param {String} settingsId Settings Id
     */
    this.getRecordingLocalkeysSetting = function(settingsId) { 

      // verify the required parameter 'settingsId' is set
      if (settingsId === undefined || settingsId === null) {
        throw "Missing the required parameter 'settingsId' when calling getRecordingLocalkeysSetting";
      }


      return this.apiClient.callApi(
        '/api/v2/recording/localkeys/settings/{settingsId}', 
        'GET', 
        { 'settingsId': settingsId }, 
        {  }, 
        {  }, 
        {  }, 
        null, 
        ['PureCloud Auth'], 
        ['application/json'], 
        ['application/json']
      );
    };


    /**
     * gets a list local key settings data
     * 
     */
    this.getRecordingLocalkeysSettings = function() { 


      return this.apiClient.callApi(
        '/api/v2/recording/localkeys/settings', 
        'GET', 
        {  }, 
        {  }, 
        {  }, 
        {  }, 
        null, 
        ['PureCloud Auth'], 
        ['application/json'], 
        ['application/json']
      );
    };


    /**
     * Gets media retention policy list with query options to filter on name and enabled.
     * for a less verbose response, add summary=true to this endpoint
     * @param {Object} opts Optional parameters
     * @param {Number} opts.pageSize The total page size requested (default to 25)
     * @param {Number} opts.pageNumber The page number requested (default to 1)
     * @param {String} opts.sortBy variable name requested to sort by
     * @param {Array.<Object>} opts.expand variable name requested by expand list
     * @param {String} opts.nextPage next page token
     * @param {String} opts.previousPage Previous page token
     * @param {String} opts.name the policy name - used for filtering results in searches.
     * @param {Boolean} opts.enabled checks to see if policy is enabled - use enabled = true or enabled = false
     * @param {Boolean} opts.summary provides a less verbose response of policy lists. (default to false)
     * @param {Boolean} opts.hasErrors provides a way to fetch all policies with errors or policies that do not have errors
     */
    this.getRecordingMediaretentionpolicies = function(opts) { 
      opts = opts || {};


      return this.apiClient.callApi(
        '/api/v2/recording/mediaretentionpolicies', 
        'GET', 
        {  }, 
        { 'pageSize': opts['pageSize'],'pageNumber': opts['pageNumber'],'sortBy': opts['sortBy'],'expand': this.apiClient.buildCollectionParam(opts['expand'], 'multi'),'nextPage': opts['nextPage'],'previousPage': opts['previousPage'],'name': opts['name'],'enabled': opts['enabled'],'summary': opts['summary'],'hasErrors': opts['hasErrors'] }, 
        {  }, 
        {  }, 
        null, 
        ['PureCloud Auth'], 
        ['application/json'], 
        ['application/json']
      );
    };


    /**
     * Get a media retention policy
     * 
     * @param {String} policyId Policy ID
     */
    this.getRecordingMediaretentionpolicy = function(policyId) { 

      // verify the required parameter 'policyId' is set
      if (policyId === undefined || policyId === null) {
        throw "Missing the required parameter 'policyId' when calling getRecordingMediaretentionpolicy";
      }


      return this.apiClient.callApi(
        '/api/v2/recording/mediaretentionpolicies/{policyId}', 
        'GET', 
        { 'policyId': policyId }, 
        {  }, 
        {  }, 
        {  }, 
        null, 
        ['PureCloud Auth'], 
        ['application/json'], 
        ['application/json']
      );
    };


    /**
     * Get encryption key list
     * 
     * @param {Object} opts Optional parameters
     * @param {Number} opts.pageSize Page size (default to 25)
     * @param {Number} opts.pageNumber Page number (default to 1)
     */
    this.getRecordingRecordingkeys = function(opts) { 
      opts = opts || {};


      return this.apiClient.callApi(
        '/api/v2/recording/recordingkeys', 
        'GET', 
        {  }, 
        { 'pageSize': opts['pageSize'],'pageNumber': opts['pageNumber'] }, 
        {  }, 
        {  }, 
        null, 
        ['PureCloud Auth'], 
        ['application/json'], 
        ['application/json']
      );
    };


    /**
     * Get key rotation schedule
     * 
     */
    this.getRecordingRecordingkeysRotationschedule = function() { 


      return this.apiClient.callApi(
        '/api/v2/recording/recordingkeys/rotationschedule', 
        'GET', 
        {  }, 
        {  }, 
        {  }, 
        {  }, 
        null, 
        ['PureCloud Auth'], 
        ['application/json'], 
        ['application/json']
      );
    };


    /**
     * Get the Recording Settings for the Organization
     * 
     * @param {Object} opts Optional parameters
     * @param {Boolean} opts.createDefault If no settings are found, a new one is created with default values (default to false)
     */
    this.getRecordingSettings = function(opts) { 
      opts = opts || {};


      return this.apiClient.callApi(
        '/api/v2/recording/settings', 
        'GET', 
        {  }, 
        { 'createDefault': opts['createDefault'] }, 
        {  }, 
        {  }, 
        null, 
        ['PureCloud Auth'], 
        ['application/json'], 
        ['application/json']
      );
    };


    /**
     * Retrieves a paged listing of screen recording sessions
     * 
     * @param {Object} opts Optional parameters
     * @param {Number} opts.pageSize Page size (default to 25)
     * @param {Number} opts.pageNumber Page number (default to 1)
     */
    this.getRecordingsScreensessions = function(opts) { 
      opts = opts || {};


      return this.apiClient.callApi(
        '/api/v2/recordings/screensessions', 
        'GET', 
        {  }, 
        { 'pageSize': opts['pageSize'],'pageNumber': opts['pageNumber'] }, 
        {  }, 
        {  }, 
        null, 
        ['PureCloud Auth'], 
        ['application/json'], 
        ['application/json']
      );
    };


    /**
     * Patch a media retention policy
     * 
     * @param {String} policyId Policy ID
     * @param {module:purecloud-platform-client-v2/model/Policy} body Policy
     */
    this.patchRecordingMediaretentionpolicy = function(policyId, body) { 

      // verify the required parameter 'policyId' is set
      if (policyId === undefined || policyId === null) {
        throw "Missing the required parameter 'policyId' when calling patchRecordingMediaretentionpolicy";
      }

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw "Missing the required parameter 'body' when calling patchRecordingMediaretentionpolicy";
      }


      return this.apiClient.callApi(
        '/api/v2/recording/mediaretentionpolicies/{policyId}', 
        'PATCH', 
        { 'policyId': policyId }, 
        {  }, 
        {  }, 
        {  }, 
        body, 
        ['PureCloud Auth'], 
        ['application/json'], 
        ['application/json']
      );
    };


    /**
     * Update a screen recording session
     * 
     * @param {String} recordingSessionId Screen recording session ID
     * @param {Object} opts Optional parameters
     * @param {module:purecloud-platform-client-v2/model/ScreenRecordingSessionRequest} opts.body 
     */
    this.patchRecordingsScreensession = function(recordingSessionId, opts) { 
      opts = opts || {};

      // verify the required parameter 'recordingSessionId' is set
      if (recordingSessionId === undefined || recordingSessionId === null) {
        throw "Missing the required parameter 'recordingSessionId' when calling patchRecordingsScreensession";
      }


      return this.apiClient.callApi(
        '/api/v2/recordings/screensessions/{recordingSessionId}', 
        'PATCH', 
        { 'recordingSessionId': recordingSessionId }, 
        {  }, 
        {  }, 
        {  }, 
        opts['body'], 
        ['PureCloud Auth'], 
        ['application/json'], 
        ['application/json']
      );
    };


    /**
     * Create annotation
     * 
     * @param {String} conversationId Conversation ID
     * @param {String} recordingId Recording ID
     * @param {module:purecloud-platform-client-v2/model/Annotation} body annotation
     */
    this.postConversationRecordingAnnotations = function(conversationId, recordingId, body) { 

      // verify the required parameter 'conversationId' is set
      if (conversationId === undefined || conversationId === null) {
        throw "Missing the required parameter 'conversationId' when calling postConversationRecordingAnnotations";
      }

      // verify the required parameter 'recordingId' is set
      if (recordingId === undefined || recordingId === null) {
        throw "Missing the required parameter 'recordingId' when calling postConversationRecordingAnnotations";
      }

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw "Missing the required parameter 'body' when calling postConversationRecordingAnnotations";
      }


      return this.apiClient.callApi(
        '/api/v2/conversations/{conversationId}/recordings/{recordingId}/annotations', 
        'POST', 
        { 'conversationId': conversationId,'recordingId': recordingId }, 
        {  }, 
        {  }, 
        {  }, 
        body, 
        ['PureCloud Auth'], 
        ['application/json'], 
        ['application/json']
      );
    };


    /**
     * create a local recording key
     * 
     * @param {module:purecloud-platform-client-v2/model/LocalEncryptionKeyRequest} body Local Encryption body
     */
    this.postRecordingLocalkeys = function(body) { 

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw "Missing the required parameter 'body' when calling postRecordingLocalkeys";
      }


      return this.apiClient.callApi(
        '/api/v2/recording/localkeys', 
        'POST', 
        {  }, 
        {  }, 
        {  }, 
        {  }, 
        body, 
        ['PureCloud Auth'], 
        ['application/json'], 
        ['application/json']
      );
    };


    /**
     * create settings for local key creation
     * 
     * @param {module:purecloud-platform-client-v2/model/LocalEncryptionConfiguration} body Local Encryption Configuration
     */
    this.postRecordingLocalkeysSettings = function(body) { 

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw "Missing the required parameter 'body' when calling postRecordingLocalkeysSettings";
      }


      return this.apiClient.callApi(
        '/api/v2/recording/localkeys/settings', 
        'POST', 
        {  }, 
        {  }, 
        {  }, 
        {  }, 
        body, 
        ['PureCloud Auth'], 
        ['application/json'], 
        ['application/json']
      );
    };


    /**
     * Create media retention policy
     * 
     * @param {module:purecloud-platform-client-v2/model/PolicyCreate} body Policy
     */
    this.postRecordingMediaretentionpolicies = function(body) { 

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw "Missing the required parameter 'body' when calling postRecordingMediaretentionpolicies";
      }


      return this.apiClient.callApi(
        '/api/v2/recording/mediaretentionpolicies', 
        'POST', 
        {  }, 
        {  }, 
        {  }, 
        {  }, 
        body, 
        ['PureCloud Auth'], 
        ['application/json'], 
        ['application/json']
      );
    };


    /**
     * Create encryption key
     * 
     */
    this.postRecordingRecordingkeys = function() { 


      return this.apiClient.callApi(
        '/api/v2/recording/recordingkeys', 
        'POST', 
        {  }, 
        {  }, 
        {  }, 
        {  }, 
        null, 
        ['PureCloud Auth'], 
        ['application/json'], 
        ['application/json']
      );
    };


    /**
     * Updates the retention records on a recording.
     * Currently supports updating and removing both archive and delete dates for eligible recordings. A request to change the archival date of an archived recording will result in a restoration of the recording until the new date set. 
     * @param {String} conversationId Conversation ID
     * @param {String} recordingId Recording ID
     * @param {module:purecloud-platform-client-v2/model/Recording} body recording
     */
    this.putConversationRecording = function(conversationId, recordingId, body) { 

      // verify the required parameter 'conversationId' is set
      if (conversationId === undefined || conversationId === null) {
        throw "Missing the required parameter 'conversationId' when calling putConversationRecording";
      }

      // verify the required parameter 'recordingId' is set
      if (recordingId === undefined || recordingId === null) {
        throw "Missing the required parameter 'recordingId' when calling putConversationRecording";
      }

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw "Missing the required parameter 'body' when calling putConversationRecording";
      }


      return this.apiClient.callApi(
        '/api/v2/conversations/{conversationId}/recordings/{recordingId}', 
        'PUT', 
        { 'conversationId': conversationId,'recordingId': recordingId }, 
        {  }, 
        {  }, 
        {  }, 
        body, 
        ['PureCloud Auth'], 
        ['application/json'], 
        ['application/json']
      );
    };


    /**
     * Update annotation
     * 
     * @param {String} conversationId Conversation ID
     * @param {String} recordingId Recording ID
     * @param {String} annotationId Annotation ID
     * @param {module:purecloud-platform-client-v2/model/Annotation} body annotation
     */
    this.putConversationRecordingAnnotation = function(conversationId, recordingId, annotationId, body) { 

      // verify the required parameter 'conversationId' is set
      if (conversationId === undefined || conversationId === null) {
        throw "Missing the required parameter 'conversationId' when calling putConversationRecordingAnnotation";
      }

      // verify the required parameter 'recordingId' is set
      if (recordingId === undefined || recordingId === null) {
        throw "Missing the required parameter 'recordingId' when calling putConversationRecordingAnnotation";
      }

      // verify the required parameter 'annotationId' is set
      if (annotationId === undefined || annotationId === null) {
        throw "Missing the required parameter 'annotationId' when calling putConversationRecordingAnnotation";
      }

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw "Missing the required parameter 'body' when calling putConversationRecordingAnnotation";
      }


      return this.apiClient.callApi(
        '/api/v2/conversations/{conversationId}/recordings/{recordingId}/annotations/{annotationId}', 
        'PUT', 
        { 'conversationId': conversationId,'recordingId': recordingId,'annotationId': annotationId }, 
        {  }, 
        {  }, 
        {  }, 
        body, 
        ['PureCloud Auth'], 
        ['application/json'], 
        ['application/json']
      );
    };


    /**
     * Updates an orphan recording to a regular recording with retention values
     * If this operation is successful the orphan will no longer exist. It will be replaced by the resulting recording in the response. This replacement recording is accessible by the normal Recording api.
     * @param {String} orphanId Orphan ID
     * @param {Object} opts Optional parameters
     * @param {module:purecloud-platform-client-v2/model/OrphanUpdateRequest} opts.body 
     */
    this.putOrphanrecording = function(orphanId, opts) { 
      opts = opts || {};

      // verify the required parameter 'orphanId' is set
      if (orphanId === undefined || orphanId === null) {
        throw "Missing the required parameter 'orphanId' when calling putOrphanrecording";
      }


      return this.apiClient.callApi(
        '/api/v2/orphanrecordings/{orphanId}', 
        'PUT', 
        { 'orphanId': orphanId }, 
        {  }, 
        {  }, 
        {  }, 
        opts['body'], 
        ['PureCloud Auth'], 
        ['application/json'], 
        ['application/json']
      );
    };


    /**
     * Update the local encryption settings
     * 
     * @param {String} settingsId Settings Id
     * @param {module:purecloud-platform-client-v2/model/LocalEncryptionConfiguration} body Local Encryption metadata
     */
    this.putRecordingLocalkeysSetting = function(settingsId, body) { 

      // verify the required parameter 'settingsId' is set
      if (settingsId === undefined || settingsId === null) {
        throw "Missing the required parameter 'settingsId' when calling putRecordingLocalkeysSetting";
      }

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw "Missing the required parameter 'body' when calling putRecordingLocalkeysSetting";
      }


      return this.apiClient.callApi(
        '/api/v2/recording/localkeys/settings/{settingsId}', 
        'PUT', 
        { 'settingsId': settingsId }, 
        {  }, 
        {  }, 
        {  }, 
        body, 
        ['PureCloud Auth'], 
        ['application/json'], 
        ['application/json']
      );
    };


    /**
     * Update a media retention policy
     * 
     * @param {String} policyId Policy ID
     * @param {module:purecloud-platform-client-v2/model/Policy} body Policy
     */
    this.putRecordingMediaretentionpolicy = function(policyId, body) { 

      // verify the required parameter 'policyId' is set
      if (policyId === undefined || policyId === null) {
        throw "Missing the required parameter 'policyId' when calling putRecordingMediaretentionpolicy";
      }

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw "Missing the required parameter 'body' when calling putRecordingMediaretentionpolicy";
      }


      return this.apiClient.callApi(
        '/api/v2/recording/mediaretentionpolicies/{policyId}', 
        'PUT', 
        { 'policyId': policyId }, 
        {  }, 
        {  }, 
        {  }, 
        body, 
        ['PureCloud Auth'], 
        ['application/json'], 
        ['application/json']
      );
    };


    /**
     * Update key rotation schedule
     * 
     * @param {module:purecloud-platform-client-v2/model/KeyRotationSchedule} body KeyRotationSchedule
     */
    this.putRecordingRecordingkeysRotationschedule = function(body) { 

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw "Missing the required parameter 'body' when calling putRecordingRecordingkeysRotationschedule";
      }


      return this.apiClient.callApi(
        '/api/v2/recording/recordingkeys/rotationschedule', 
        'PUT', 
        {  }, 
        {  }, 
        {  }, 
        {  }, 
        body, 
        ['PureCloud Auth'], 
        ['application/json'], 
        ['application/json']
      );
    };


    /**
     * Update the Recording Settings for the Organization
     * 
     * @param {module:purecloud-platform-client-v2/model/RecordingSettings} body Recording settings
     */
    this.putRecordingSettings = function(body) { 

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw "Missing the required parameter 'body' when calling putRecordingSettings";
      }


      return this.apiClient.callApi(
        '/api/v2/recording/settings', 
        'PUT', 
        {  }, 
        {  }, 
        {  }, 
        {  }, 
        body, 
        ['PureCloud Auth'], 
        ['application/json'], 
        ['application/json']
      );
    };
  };

  return exports;
}));

},{"../ApiClient":8}],33:[function(require,module,exports){
(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['purecloud-platform-client-v2/ApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'));
  } else {
    // Browser globals (root is window)
    if (!root.platformClient) {
      root.platformClient = {};
    }
    root.platformClient.ResponseManagementApi = factory(root.platformClient.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * ResponseManagement service.
   * @module purecloud-platform-client-v2/api/ResponseManagementApi
   * @version 6.0.1
   */

  /**
   * Constructs a new ResponseManagementApi. 
   * @alias module:purecloud-platform-client-v2/api/ResponseManagementApi
   * @class
   * @param {module:purecloud-platform-client-v2/ApiClient} apiClient Optional API client implementation to use,
   * default to {@link module:purecloud-platform-client-v2/ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;



    /**
     * Delete an existing response library.
     * This will remove any responses associated with the library.
     * @param {String} libraryId Library ID
     */
    this.deleteResponsemanagementLibrary = function(libraryId) { 

      // verify the required parameter 'libraryId' is set
      if (libraryId === undefined || libraryId === null) {
        throw "Missing the required parameter 'libraryId' when calling deleteResponsemanagementLibrary";
      }


      return this.apiClient.callApi(
        '/api/v2/responsemanagement/libraries/{libraryId}', 
        'DELETE', 
        { 'libraryId': libraryId }, 
        {  }, 
        {  }, 
        {  }, 
        null, 
        ['PureCloud Auth'], 
        ['application/json'], 
        ['application/json']
      );
    };


    /**
     * Delete an existing response.
     * This will remove the response from any libraries associated with it.
     * @param {String} responseId Response ID
     */
    this.deleteResponsemanagementResponse = function(responseId) { 

      // verify the required parameter 'responseId' is set
      if (responseId === undefined || responseId === null) {
        throw "Missing the required parameter 'responseId' when calling deleteResponsemanagementResponse";
      }


      return this.apiClient.callApi(
        '/api/v2/responsemanagement/responses/{responseId}', 
        'DELETE', 
        { 'responseId': responseId }, 
        {  }, 
        {  }, 
        {  }, 
        null, 
        ['PureCloud Auth'], 
        ['application/json'], 
        ['application/json']
      );
    };


    /**
     * Gets a list of existing response libraries.
     * 
     * @param {Object} opts Optional parameters
     * @param {Number} opts.pageNumber Page number (default to 1)
     * @param {Number} opts.pageSize Page size (default to 25)
     */
    this.getResponsemanagementLibraries = function(opts) { 
      opts = opts || {};


      return this.apiClient.callApi(
        '/api/v2/responsemanagement/libraries', 
        'GET', 
        {  }, 
        { 'pageNumber': opts['pageNumber'],'pageSize': opts['pageSize'] }, 
        {  }, 
        {  }, 
        null, 
        ['PureCloud Auth'], 
        ['application/json'], 
        ['application/json']
      );
    };


    /**
     * Get details about an existing response library.
     * 
     * @param {String} libraryId Library ID
     */
    this.getResponsemanagementLibrary = function(libraryId) { 

      // verify the required parameter 'libraryId' is set
      if (libraryId === undefined || libraryId === null) {
        throw "Missing the required parameter 'libraryId' when calling getResponsemanagementLibrary";
      }


      return this.apiClient.callApi(
        '/api/v2/responsemanagement/libraries/{libraryId}', 
        'GET', 
        { 'libraryId': libraryId }, 
        {  }, 
        {  }, 
        {  }, 
        null, 
        ['PureCloud Auth'], 
        ['application/json'], 
        ['application/json']
      );
    };


    /**
     * Get details about an existing response.
     * 
     * @param {String} responseId Response ID
     * @param {Object} opts Optional parameters
     * @param {module:purecloud-platform-client-v2/model/String} opts.expand Expand instructions for the return value.
     */
    this.getResponsemanagementResponse = function(responseId, opts) { 
      opts = opts || {};

      // verify the required parameter 'responseId' is set
      if (responseId === undefined || responseId === null) {
        throw "Missing the required parameter 'responseId' when calling getResponsemanagementResponse";
      }


      return this.apiClient.callApi(
        '/api/v2/responsemanagement/responses/{responseId}', 
        'GET', 
        { 'responseId': responseId }, 
        { 'expand': opts['expand'] }, 
        {  }, 
        {  }, 
        null, 
        ['PureCloud Auth'], 
        ['application/json'], 
        ['application/json']
      );
    };


    /**
     * Gets a list of existing responses.
     * 
     * @param {String} libraryId Library ID
     * @param {Object} opts Optional parameters
     * @param {Number} opts.pageNumber Page number (default to 1)
     * @param {Number} opts.pageSize Page size (default to 25)
     * @param {module:purecloud-platform-client-v2/model/String} opts.expand Expand instructions for the return value.
     */
    this.getResponsemanagementResponses = function(libraryId, opts) { 
      opts = opts || {};

      // verify the required parameter 'libraryId' is set
      if (libraryId === undefined || libraryId === null) {
        throw "Missing the required parameter 'libraryId' when calling getResponsemanagementResponses";
      }


      return this.apiClient.callApi(
        '/api/v2/responsemanagement/responses', 
        'GET', 
        {  }, 
        { 'libraryId': libraryId,'pageNumber': opts['pageNumber'],'pageSize': opts['pageSize'],'expand': opts['expand'] }, 
        {  }, 
        {  }, 
        null, 
        ['PureCloud Auth'], 
        ['application/json'], 
        ['application/json']
      );
    };


    /**
     * Create a response library.
     * 
     * @param {module:purecloud-platform-client-v2/model/Library} body Library
     */
    this.postResponsemanagementLibraries = function(body) { 

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw "Missing the required parameter 'body' when calling postResponsemanagementLibraries";
      }


      return this.apiClient.callApi(
        '/api/v2/responsemanagement/libraries', 
        'POST', 
        {  }, 
        {  }, 
        {  }, 
        {  }, 
        body, 
        ['PureCloud Auth'], 
        ['application/json'], 
        ['application/json']
      );
    };


    /**
     * Create a response.
     * 
     * @param {module:purecloud-platform-client-v2/model/Response} body Response
     * @param {Object} opts Optional parameters
     * @param {module:purecloud-platform-client-v2/model/String} opts.expand Expand instructions for the return value.
     */
    this.postResponsemanagementResponses = function(body, opts) { 
      opts = opts || {};

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw "Missing the required parameter 'body' when calling postResponsemanagementResponses";
      }


      return this.apiClient.callApi(
        '/api/v2/responsemanagement/responses', 
        'POST', 
        {  }, 
        { 'expand': opts['expand'] }, 
        {  }, 
        {  }, 
        body, 
        ['PureCloud Auth'], 
        ['application/json'], 
        ['application/json']
      );
    };


    /**
     * Query responses
     * 
     * @param {module:purecloud-platform-client-v2/model/ResponseQueryRequest} body Response
     */
    this.postResponsemanagementResponsesQuery = function(body) { 

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw "Missing the required parameter 'body' when calling postResponsemanagementResponsesQuery";
      }


      return this.apiClient.callApi(
        '/api/v2/responsemanagement/responses/query', 
        'POST', 
        {  }, 
        {  }, 
        {  }, 
        {  }, 
        body, 
        ['PureCloud Auth'], 
        ['application/json'], 
        ['application/json']
      );
    };


    /**
     * Update an existing response library.
     * Fields that can be updated: name. The most recent version is required for updates.
     * @param {String} libraryId Library ID
     * @param {module:purecloud-platform-client-v2/model/Library} body Library
     */
    this.putResponsemanagementLibrary = function(libraryId, body) { 

      // verify the required parameter 'libraryId' is set
      if (libraryId === undefined || libraryId === null) {
        throw "Missing the required parameter 'libraryId' when calling putResponsemanagementLibrary";
      }

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw "Missing the required parameter 'body' when calling putResponsemanagementLibrary";
      }


      return this.apiClient.callApi(
        '/api/v2/responsemanagement/libraries/{libraryId}', 
        'PUT', 
        { 'libraryId': libraryId }, 
        {  }, 
        {  }, 
        {  }, 
        body, 
        ['PureCloud Auth'], 
        ['application/json'], 
        ['application/json']
      );
    };


    /**
     * Update an existing response.
     * Fields that can be updated: name, libraries, and texts. The most recent version is required for updates.
     * @param {String} responseId Response ID
     * @param {module:purecloud-platform-client-v2/model/Response} body Response
     * @param {Object} opts Optional parameters
     * @param {module:purecloud-platform-client-v2/model/String} opts.expand Expand instructions for the return value.
     */
    this.putResponsemanagementResponse = function(responseId, body, opts) { 
      opts = opts || {};

      // verify the required parameter 'responseId' is set
      if (responseId === undefined || responseId === null) {
        throw "Missing the required parameter 'responseId' when calling putResponsemanagementResponse";
      }

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw "Missing the required parameter 'body' when calling putResponsemanagementResponse";
      }


      return this.apiClient.callApi(
        '/api/v2/responsemanagement/responses/{responseId}', 
        'PUT', 
        { 'responseId': responseId }, 
        { 'expand': opts['expand'] }, 
        {  }, 
        {  }, 
        body, 
        ['PureCloud Auth'], 
        ['application/json'], 
        ['application/json']
      );
    };
  };

  return exports;
}));

},{"../ApiClient":8}],34:[function(require,module,exports){
(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['purecloud-platform-client-v2/ApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'));
  } else {
    // Browser globals (root is window)
    if (!root.platformClient) {
      root.platformClient = {};
    }
    root.platformClient.RoutingApi = factory(root.platformClient.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * Routing service.
   * @module purecloud-platform-client-v2/api/RoutingApi
   * @version 6.0.1
   */

  /**
   * Constructs a new RoutingApi. 
   * @alias module:purecloud-platform-client-v2/api/RoutingApi
   * @class
   * @param {module:purecloud-platform-client-v2/ApiClient} apiClient Optional API client implementation to use,
   * default to {@link module:purecloud-platform-client-v2/ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;



    /**
     * Delete a domain
     * 
     * @param {String} domainId domain ID
     */
    this.deleteRoutingEmailDomain = function(domainId) { 

      // verify the required parameter 'domainId' is set
      if (domainId === undefined || domainId === null) {
        throw "Missing the required parameter 'domainId' when calling deleteRoutingEmailDomain";
      }


      return this.apiClient.callApi(
        '/api/v2/routing/email/domains/{domainId}', 
        'DELETE', 
        { 'domainId': domainId }, 
        {  }, 
        {  }, 
        {  }, 
        null, 
        ['PureCloud Auth'], 
        ['application/json'], 
        ['application/json']
      );
    };


    /**
     * Delete a route
     * 
     * @param {String} domainName email domain
     * @param {String} routeId route ID
     */
    this.deleteRoutingEmailDomainRoute = function(domainName, routeId) { 

      // verify the required parameter 'domainName' is set
      if (domainName === undefined || domainName === null) {
        throw "Missing the required parameter 'domainName' when calling deleteRoutingEmailDomainRoute";
      }

      // verify the required parameter 'routeId' is set
      if (routeId === undefined || routeId === null) {
        throw "Missing the required parameter 'routeId' when calling deleteRoutingEmailDomainRoute";
      }


      return this.apiClient.callApi(
        '/api/v2/routing/email/domains/{domainName}/routes/{routeId}', 
        'DELETE', 
        { 'domainName': domainName,'routeId': routeId }, 
        {  }, 
        {  }, 
        {  }, 
        null, 
        ['PureCloud Auth'], 
        ['application/json'], 
        ['application/json']
      );
    };


    /**
     * Delete a queue
     * 
     * @param {String} queueId Queue ID
     * @param {Object} opts Optional parameters
     * @param {Boolean} opts.forceDelete forceDelete
     */
    this.deleteRoutingQueue = function(queueId, opts) { 
      opts = opts || {};

      // verify the required parameter 'queueId' is set
      if (queueId === undefined || queueId === null) {
        throw "Missing the required parameter 'queueId' when calling deleteRoutingQueue";
      }


      return this.apiClient.callApi(
        '/api/v2/routing/queues/{queueId}', 
        'DELETE', 
        { 'queueId': queueId }, 
        { 'forceDelete': opts['forceDelete'] }, 
        {  }, 
        {  }, 
        null, 
        ['PureCloud Auth'], 
        ['application/json'], 
        ['application/json']
      );
    };


    /**
     * Delete queue member
     * 
     * @param {String} queueId Queue ID
     * @param {String} memberId Member ID
     */
    this.deleteRoutingQueueUser = function(queueId, memberId) { 

      // verify the required parameter 'queueId' is set
      if (queueId === undefined || queueId === null) {
        throw "Missing the required parameter 'queueId' when calling deleteRoutingQueueUser";
      }

      // verify the required parameter 'memberId' is set
      if (memberId === undefined || memberId === null) {
        throw "Missing the required parameter 'memberId' when calling deleteRoutingQueueUser";
      }


      return this.apiClient.callApi(
        '/api/v2/routing/queues/{queueId}/users/{memberId}', 
        'DELETE', 
        { 'queueId': queueId,'memberId': memberId }, 
        {  }, 
        {  }, 
        {  }, 
        null, 
        ['PureCloud Auth'], 
        ['application/json'], 
        ['application/json']
      );
    };


    /**
     * Delete a wrap-up code from a queue
     * 
     * @param {String} queueId Queue ID
     * @param {String} codeId Code ID
     */
    this.deleteRoutingQueueWrapupcode = function(queueId, codeId) { 

      // verify the required parameter 'queueId' is set
      if (queueId === undefined || queueId === null) {
        throw "Missing the required parameter 'queueId' when calling deleteRoutingQueueWrapupcode";
      }

      // verify the required parameter 'codeId' is set
      if (codeId === undefined || codeId === null) {
        throw "Missing the required parameter 'codeId' when calling deleteRoutingQueueWrapupcode";
      }


      return this.apiClient.callApi(
        '/api/v2/routing/queues/{queueId}/wrapupcodes/{codeId}', 
        'DELETE', 
        { 'queueId': queueId,'codeId': codeId }, 
        {  }, 
        {  }, 
        {  }, 
        null, 
        ['PureCloud Auth'], 
        ['application/json'], 
        ['application/json']
      );
    };


    /**
     * Delete Routing Skill
     * 
     * @param {String} skillId Skill ID
     */
    this.deleteRoutingSkill = function(skillId) { 

      // verify the required parameter 'skillId' is set
      if (skillId === undefined || skillId === null) {
        throw "Missing the required parameter 'skillId' when calling deleteRoutingSkill";
      }


      return this.apiClient.callApi(
        '/api/v2/routing/skills/{skillId}', 
        'DELETE', 
        { 'skillId': skillId }, 
        {  }, 
        {  }, 
        {  }, 
        null, 
        ['PureCloud Auth'], 
        ['application/json'], 
        ['application/json']
      );
    };


    /**
     * Delete utilization settings and revert to system defaults.
     * 
     */
    this.deleteRoutingUtilization = function() { 


      return this.apiClient.callApi(
        '/api/v2/routing/utilization', 
        'DELETE', 
        {  }, 
        {  }, 
        {  }, 
        {  }, 
        null, 
        ['PureCloud Auth'], 
        ['application/json'], 
        ['application/json']
      );
    };


    /**
     * Delete wrap-up code
     * 
     * @param {String} codeId Wrapup Code ID
     */
    this.deleteRoutingWrapupcode = function(codeId) { 

      // verify the required parameter 'codeId' is set
      if (codeId === undefined || codeId === null) {
        throw "Missing the required parameter 'codeId' when calling deleteRoutingWrapupcode";
      }


      return this.apiClient.callApi(
        '/api/v2/routing/wrapupcodes/{codeId}', 
        'DELETE', 
        { 'codeId': codeId }, 
        {  }, 
        {  }, 
        {  }, 
        null, 
        ['PureCloud Auth'], 
        ['application/json'], 
        ['application/json']
      );
    };


    /**
     * Remove routing skill from user
     * 
     * @param {String} userId User ID
     * @param {String} skillId skillId
     */
    this.deleteUserRoutingskill = function(userId, skillId) { 

      // verify the required parameter 'userId' is set
      if (userId === undefined || userId === null) {
        throw "Missing the required parameter 'userId' when calling deleteUserRoutingskill";
      }

      // verify the required parameter 'skillId' is set
      if (skillId === undefined || skillId === null) {
        throw "Missing the required parameter 'skillId' when calling deleteUserRoutingskill";
      }


      return this.apiClient.callApi(
        '/api/v2/users/{userId}/routingskills/{skillId}', 
        'DELETE', 
        { 'userId': userId,'skillId': skillId }, 
        {  }, 
        {  }, 
        {  }, 
        null, 
        ['PureCloud Auth'], 
        ['application/json'], 
        ['application/json']
      );
    };


    /**
     * Get domain
     * 
     * @param {String} domainId domain ID
     */
    this.getRoutingEmailDomain = function(domainId) { 

      // verify the required parameter 'domainId' is set
      if (domainId === undefined || domainId === null) {
        throw "Missing the required parameter 'domainId' when calling getRoutingEmailDomain";
      }


      return this.apiClient.callApi(
        '/api/v2/routing/email/domains/{domainId}', 
        'GET', 
        { 'domainId': domainId }, 
        {  }, 
        {  }, 
        {  }, 
        null, 
        ['PureCloud Auth'], 
        ['application/json'], 
        ['application/json']
      );
    };


    /**
     * Get a route
     * 
     * @param {String} domainName email domain
     * @param {String} routeId route ID
     */
    this.getRoutingEmailDomainRoute = function(domainName, routeId) { 

      // verify the required parameter 'domainName' is set
      if (domainName === undefined || domainName === null) {
        throw "Missing the required parameter 'domainName' when calling getRoutingEmailDomainRoute";
      }

      // verify the required parameter 'routeId' is set
      if (routeId === undefined || routeId === null) {
        throw "Missing the required parameter 'routeId' when calling getRoutingEmailDomainRoute";
      }


      return this.apiClient.callApi(
        '/api/v2/routing/email/domains/{domainName}/routes/{routeId}', 
        'GET', 
        { 'domainName': domainName,'routeId': routeId }, 
        {  }, 
        {  }, 
        {  }, 
        null, 
        ['PureCloud Auth'], 
        ['application/json'], 
        ['application/json']
      );
    };


    /**
     * Get routes
     * 
     * @param {String} domainName email domain
     * @param {Object} opts Optional parameters
     * @param {Number} opts.pageSize Page size (default to 25)
     * @param {Number} opts.pageNumber Page number (default to 1)
     * @param {String} opts.pattern Filter routes by the route&#39;s pattern property
     */
    this.getRoutingEmailDomainRoutes = function(domainName, opts) { 
      opts = opts || {};

      // verify the required parameter 'domainName' is set
      if (domainName === undefined || domainName === null) {
        throw "Missing the required parameter 'domainName' when calling getRoutingEmailDomainRoutes";
      }


      return this.apiClient.callApi(
        '/api/v2/routing/email/domains/{domainName}/routes', 
        'GET', 
        { 'domainName': domainName }, 
        { 'pageSize': opts['pageSize'],'pageNumber': opts['pageNumber'],'pattern': opts['pattern'] }, 
        {  }, 
        {  }, 
        null, 
        ['PureCloud Auth'], 
        ['application/json'], 
        ['application/json']
      );
    };


    /**
     * Get domains
     * 
     */
    this.getRoutingEmailDomains = function() { 


      return this.apiClient.callApi(
        '/api/v2/routing/email/domains', 
        'GET', 
        {  }, 
        {  }, 
        {  }, 
        {  }, 
        null, 
        ['PureCloud Auth'], 
        ['application/json'], 
        ['application/json']
      );
    };


    /**
     * Get email setup
     * 
     */
    this.getRoutingEmailSetup = function() { 


      return this.apiClient.callApi(
        '/api/v2/routing/email/setup', 
        'GET', 
        {  }, 
        {  }, 
        {  }, 
        {  }, 
        null, 
        ['PureCloud Auth'], 
        ['application/json'], 
        ['application/json']
      );
    };


    /**
     * Get the list of supported languages.
     * 
     * @param {Object} opts Optional parameters
     * @param {Number} opts.pageSize Page size (default to 25)
     * @param {Number} opts.pageNumber Page number (default to 1)
     * @param {module:purecloud-platform-client-v2/model/String} opts.sortOrder Ascending or descending sort order (default to ASC)
     * @param {String} opts.name Name
     */
    this.getRoutingLanguages = function(opts) { 
      opts = opts || {};


      return this.apiClient.callApi(
        '/api/v2/routing/languages', 
        'GET', 
        {  }, 
        { 'pageSize': opts['pageSize'],'pageNumber': opts['pageNumber'],'sortOrder': opts['sortOrder'],'name': opts['name'] }, 
        {  }, 
        {  }, 
        null, 
        ['PureCloud Auth'], 
        ['application/json'], 
        ['application/json']
      );
    };


    /**
     * Get details about this queue.
     * 
     * @param {String} queueId Queue ID
     */
    this.getRoutingQueue = function(queueId) { 

      // verify the required parameter 'queueId' is set
      if (queueId === undefined || queueId === null) {
        throw "Missing the required parameter 'queueId' when calling getRoutingQueue";
      }


      return this.apiClient.callApi(
        '/api/v2/routing/queues/{queueId}', 
        'GET', 
        { 'queueId': queueId }, 
        {  }, 
        {  }, 
        {  }, 
        null, 
        ['PureCloud Auth'], 
        ['application/json'], 
        ['application/json']
      );
    };


    /**
     * Get Estimated Wait Time
     * 
     * @param {String} queueId queueId
     * @param {Object} opts Optional parameters
     * @param {String} opts.conversationId conversationId
     */
    this.getRoutingQueueEstimatedwaittime = function(queueId, opts) { 
      opts = opts || {};

      // verify the required parameter 'queueId' is set
      if (queueId === undefined || queueId === null) {
        throw "Missing the required parameter 'queueId' when calling getRoutingQueueEstimatedwaittime";
      }


      return this.apiClient.callApi(
        '/api/v2/routing/queues/{queueId}/estimatedwaittime', 
        'GET', 
        { 'queueId': queueId }, 
        { 'conversationId': opts['conversationId'] }, 
        {  }, 
        {  }, 
        null, 
        ['PureCloud Auth'], 
        ['application/json'], 
        ['application/json']
      );
    };


    /**
     * Get Estimated Wait Time
     * 
     * @param {String} queueId queueId
     * @param {String} mediaType mediaType
     */
    this.getRoutingQueueMediatypeEstimatedwaittime = function(queueId, mediaType) { 

      // verify the required parameter 'queueId' is set
      if (queueId === undefined || queueId === null) {
        throw "Missing the required parameter 'queueId' when calling getRoutingQueueMediatypeEstimatedwaittime";
      }

      // verify the required parameter 'mediaType' is set
      if (mediaType === undefined || mediaType === null) {
        throw "Missing the required parameter 'mediaType' when calling getRoutingQueueMediatypeEstimatedwaittime";
      }


      return this.apiClient.callApi(
        '/api/v2/routing/queues/{queueId}/mediatypes/{mediaType}/estimatedwaittime', 
        'GET', 
        { 'queueId': queueId,'mediaType': mediaType }, 
        {  }, 
        {  }, 
        {  }, 
        null, 
        ['PureCloud Auth'], 
        ['application/json'], 
        ['application/json']
      );
    };


    /**
     * Get the members of this queue
     * 
     * @param {String} queueId Queue ID
     * @param {Object} opts Optional parameters
     * @param {Number} opts.pageSize Page size (default to 25)
     * @param {Number} opts.pageNumber Page number (default to 1)
     * @param {String} opts.sortBy Sort by (default to name)
     * @param {Array.<String>} opts.expand Which fields, if any, to expand.
     * @param {Boolean} opts.joined Filter by joined status
     * @param {String} opts.name Filter by queue member name
     * @param {Array.<String>} opts.profileSkills Filter by profile skill
     * @param {Array.<String>} opts.skills Filter by skill
     * @param {Array.<String>} opts.languages Filter by language
     * @param {Array.<String>} opts.routingStatus Filter by routing status
     * @param {Array.<String>} opts.presence Filter by presence
     */
    this.getRoutingQueueUsers = function(queueId, opts) { 
      opts = opts || {};

      // verify the required parameter 'queueId' is set
      if (queueId === undefined || queueId === null) {
        throw "Missing the required parameter 'queueId' when calling getRoutingQueueUsers";
      }


      return this.apiClient.callApi(
        '/api/v2/routing/queues/{queueId}/users', 
        'GET', 
        { 'queueId': queueId }, 
        { 'pageSize': opts['pageSize'],'pageNumber': opts['pageNumber'],'sortBy': opts['sortBy'],'expand': this.apiClient.buildCollectionParam(opts['expand'], 'multi'),'joined': opts['joined'],'name': opts['name'],'profileSkills': this.apiClient.buildCollectionParam(opts['profileSkills'], 'multi'),'skills': this.apiClient.buildCollectionParam(opts['skills'], 'multi'),'languages': this.apiClient.buildCollectionParam(opts['languages'], 'multi'),'routingStatus': this.apiClient.buildCollectionParam(opts['routingStatus'], 'multi'),'presence': this.apiClient.buildCollectionParam(opts['presence'], 'multi') }, 
        {  }, 
        {  }, 
        null, 
        ['PureCloud Auth'], 
        ['application/json'], 
        ['application/json']
      );
    };


    /**
     * Get the wrap-up codes for a queue
     * 
     * @param {String} queueId Queue ID
     */
    this.getRoutingQueueWrapupcodes = function(queueId) { 

      // verify the required parameter 'queueId' is set
      if (queueId === undefined || queueId === null) {
        throw "Missing the required parameter 'queueId' when calling getRoutingQueueWrapupcodes";
      }


      return this.apiClient.callApi(
        '/api/v2/routing/queues/{queueId}/wrapupcodes', 
        'GET', 
        { 'queueId': queueId }, 
        {  }, 
        {  }, 
        {  }, 
        null, 
        ['PureCloud Auth'], 
        ['application/json'], 
        ['application/json']
      );
    };


    /**
     * Get list of queues.
     * 
     * @param {Object} opts Optional parameters
     * @param {Number} opts.pageSize Page size (default to 25)
     * @param {Number} opts.pageNumber Page number (default to 1)
     * @param {String} opts.sortBy Sort by (default to name)
     * @param {String} opts.name Name
     * @param {Boolean} opts.active Active
     */
    this.getRoutingQueues = function(opts) { 
      opts = opts || {};


      return this.apiClient.callApi(
        '/api/v2/routing/queues', 
        'GET', 
        {  }, 
        { 'pageSize': opts['pageSize'],'pageNumber': opts['pageNumber'],'sortBy': opts['sortBy'],'name': opts['name'],'active': opts['active'] }, 
        {  }, 
        {  }, 
        null, 
        ['PureCloud Auth'], 
        ['application/json'], 
        ['application/json']
      );
    };


    /**
     * Get Routing Skill
     * 
     * @param {String} skillId Skill ID
     */
    this.getRoutingSkill = function(skillId) { 

      // verify the required parameter 'skillId' is set
      if (skillId === undefined || skillId === null) {
        throw "Missing the required parameter 'skillId' when calling getRoutingSkill";
      }


      return this.apiClient.callApi(
        '/api/v2/routing/skills/{skillId}', 
        'GET', 
        { 'skillId': skillId }, 
        {  }, 
        {  }, 
        {  }, 
        null, 
        ['PureCloud Auth'], 
        ['application/json'], 
        ['application/json']
      );
    };


    /**
     * Get the list of routing skills.
     * 
     * @param {Object} opts Optional parameters
     * @param {Number} opts.pageSize Page size (default to 25)
     * @param {Number} opts.pageNumber Page number (default to 1)
     * @param {String} opts.name Filter for results that start with this value
     */
    this.getRoutingSkills = function(opts) { 
      opts = opts || {};


      return this.apiClient.callApi(
        '/api/v2/routing/skills', 
        'GET', 
        {  }, 
        { 'pageSize': opts['pageSize'],'pageNumber': opts['pageNumber'],'name': opts['name'] }, 
        {  }, 
        {  }, 
        null, 
        ['PureCloud Auth'], 
        ['application/json'], 
        ['application/json']
      );
    };


    /**
     * Get the utilization settings.
     * 
     */
    this.getRoutingUtilization = function() { 


      return this.apiClient.callApi(
        '/api/v2/routing/utilization', 
        'GET', 
        {  }, 
        {  }, 
        {  }, 
        {  }, 
        null, 
        ['PureCloud Auth'], 
        ['application/json'], 
        ['application/json']
      );
    };


    /**
     * Get details about this wrap-up code.
     * 
     * @param {String} codeId Wrapup Code ID
     */
    this.getRoutingWrapupcode = function(codeId) { 

      // verify the required parameter 'codeId' is set
      if (codeId === undefined || codeId === null) {
        throw "Missing the required parameter 'codeId' when calling getRoutingWrapupcode";
      }


      return this.apiClient.callApi(
        '/api/v2/routing/wrapupcodes/{codeId}', 
        'GET', 
        { 'codeId': codeId }, 
        {  }, 
        {  }, 
        {  }, 
        null, 
        ['PureCloud Auth'], 
        ['application/json'], 
        ['application/json']
      );
    };


    /**
     * Get list of wrapup codes.
     * 
     * @param {Object} opts Optional parameters
     * @param {Number} opts.pageSize Page size (default to 25)
     * @param {Number} opts.pageNumber Page number (default to 1)
     * @param {String} opts.name Name
     * @param {String} opts.sortBy Sort by (default to name)
     */
    this.getRoutingWrapupcodes = function(opts) { 
      opts = opts || {};


      return this.apiClient.callApi(
        '/api/v2/routing/wrapupcodes', 
        'GET', 
        {  }, 
        { 'pageSize': opts['pageSize'],'pageNumber': opts['pageNumber'],'name': opts['name'],'sortBy': opts['sortBy'] }, 
        {  }, 
        {  }, 
        null, 
        ['PureCloud Auth'], 
        ['application/json'], 
        ['application/json']
      );
    };


    /**
     * List routing skills for user
     * 
     * @param {String} userId User ID
     * @param {Object} opts Optional parameters
     * @param {Number} opts.pageSize Page size (default to 25)
     * @param {Number} opts.pageNumber Page number (default to 1)
     * @param {module:purecloud-platform-client-v2/model/String} opts.sortOrder Ascending or descending sort order (default to ASC)
     */
    this.getUserRoutingskills = function(userId, opts) { 
      opts = opts || {};

      // verify the required parameter 'userId' is set
      if (userId === undefined || userId === null) {
        throw "Missing the required parameter 'userId' when calling getUserRoutingskills";
      }


      return this.apiClient.callApi(
        '/api/v2/users/{userId}/routingskills', 
        'GET', 
        { 'userId': userId }, 
        { 'pageSize': opts['pageSize'],'pageNumber': opts['pageNumber'],'sortOrder': opts['sortOrder'] }, 
        {  }, 
        {  }, 
        null, 
        ['PureCloud Auth'], 
        ['application/json'], 
        ['application/json']
      );
    };


    /**
     * Update the ring number of joined status for a User in a Queue
     * 
     * @param {String} queueId Queue ID
     * @param {String} memberId Member ID
     * @param {module:purecloud-platform-client-v2/model/QueueMember} body Queue Member
     */
    this.patchRoutingQueueUser = function(queueId, memberId, body) { 

      // verify the required parameter 'queueId' is set
      if (queueId === undefined || queueId === null) {
        throw "Missing the required parameter 'queueId' when calling patchRoutingQueueUser";
      }

      // verify the required parameter 'memberId' is set
      if (memberId === undefined || memberId === null) {
        throw "Missing the required parameter 'memberId' when calling patchRoutingQueueUser";
      }

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw "Missing the required parameter 'body' when calling patchRoutingQueueUser";
      }


      return this.apiClient.callApi(
        '/api/v2/routing/queues/{queueId}/users/{memberId}', 
        'PATCH', 
        { 'queueId': queueId,'memberId': memberId }, 
        {  }, 
        {  }, 
        {  }, 
        body, 
        ['PureCloud Auth'], 
        ['application/json'], 
        ['application/json']
      );
    };


    /**
     * Join or unjoin a set of users for a queue
     * 
     * @param {String} queueId Queue ID
     * @param {Array.<module:purecloud-platform-client-v2/model/QueueMember>} body Queue Members
     */
    this.patchRoutingQueueUsers = function(queueId, body) { 

      // verify the required parameter 'queueId' is set
      if (queueId === undefined || queueId === null) {
        throw "Missing the required parameter 'queueId' when calling patchRoutingQueueUsers";
      }

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw "Missing the required parameter 'body' when calling patchRoutingQueueUsers";
      }


      return this.apiClient.callApi(
        '/api/v2/routing/queues/{queueId}/users', 
        'PATCH', 
        { 'queueId': queueId }, 
        {  }, 
        {  }, 
        {  }, 
        body, 
        ['PureCloud Auth'], 
        ['application/json'], 
        ['application/json']
      );
    };


    /**
     * Query for queue observations
     * 
     * @param {module:purecloud-platform-client-v2/model/ObservationQuery} body query
     */
    this.postAnalyticsQueuesObservationsQuery = function(body) { 

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw "Missing the required parameter 'body' when calling postAnalyticsQueuesObservationsQuery";
      }


      return this.apiClient.callApi(
        '/api/v2/analytics/queues/observations/query', 
        'POST', 
        {  }, 
        {  }, 
        {  }, 
        {  }, 
        body, 
        ['PureCloud Auth'], 
        ['application/json'], 
        ['application/json']
      );
    };


    /**
     * Create a route
     * 
     * @param {String} domainName email domain
     * @param {module:purecloud-platform-client-v2/model/InboundRoute} body Route
     */
    this.postRoutingEmailDomainRoutes = function(domainName, body) { 

      // verify the required parameter 'domainName' is set
      if (domainName === undefined || domainName === null) {
        throw "Missing the required parameter 'domainName' when calling postRoutingEmailDomainRoutes";
      }

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw "Missing the required parameter 'body' when calling postRoutingEmailDomainRoutes";
      }


      return this.apiClient.callApi(
        '/api/v2/routing/email/domains/{domainName}/routes', 
        'POST', 
        { 'domainName': domainName }, 
        {  }, 
        {  }, 
        {  }, 
        body, 
        ['PureCloud Auth'], 
        ['application/json'], 
        ['application/json']
      );
    };


    /**
     * Create a domain
     * 
     * @param {module:purecloud-platform-client-v2/model/InboundDomain} body Domain
     */
    this.postRoutingEmailDomains = function(body) { 

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw "Missing the required parameter 'body' when calling postRoutingEmailDomains";
      }


      return this.apiClient.callApi(
        '/api/v2/routing/email/domains', 
        'POST', 
        {  }, 
        {  }, 
        {  }, 
        {  }, 
        body, 
        ['PureCloud Auth'], 
        ['application/json'], 
        ['application/json']
      );
    };


    /**
     * Create Language
     * 
     * @param {module:purecloud-platform-client-v2/model/Language} body Language
     */
    this.postRoutingLanguages = function(body) { 

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw "Missing the required parameter 'body' when calling postRoutingLanguages";
      }


      return this.apiClient.callApi(
        '/api/v2/routing/languages', 
        'POST', 
        {  }, 
        {  }, 
        {  }, 
        {  }, 
        body, 
        ['PureCloud Auth'], 
        ['application/json'], 
        ['application/json']
      );
    };


    /**
     * Bulk add or delete up to 100 queue members
     * 
     * @param {String} queueId Queue ID
     * @param {Array.<module:purecloud-platform-client-v2/model/QueueMember>} body Queue Members
     * @param {Object} opts Optional parameters
     * @param {Boolean} opts._delete True to delete queue members (default to false)
     */
    this.postRoutingQueueUsers = function(queueId, body, opts) { 
      opts = opts || {};

      // verify the required parameter 'queueId' is set
      if (queueId === undefined || queueId === null) {
        throw "Missing the required parameter 'queueId' when calling postRoutingQueueUsers";
      }

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw "Missing the required parameter 'body' when calling postRoutingQueueUsers";
      }


      return this.apiClient.callApi(
        '/api/v2/routing/queues/{queueId}/users', 
        'POST', 
        { 'queueId': queueId }, 
        { 'delete': opts['_delete'] }, 
        {  }, 
        {  }, 
        body, 
        ['PureCloud Auth'], 
        ['application/json'], 
        ['application/json']
      );
    };


    /**
     * Add up to 100 wrap-up codes to a queue
     * 
     * @param {String} queueId Queue ID
     * @param {Array.<module:purecloud-platform-client-v2/model/WrapupCode>} body List of wrapup codes
     */
    this.postRoutingQueueWrapupcodes = function(queueId, body) { 

      // verify the required parameter 'queueId' is set
      if (queueId === undefined || queueId === null) {
        throw "Missing the required parameter 'queueId' when calling postRoutingQueueWrapupcodes";
      }

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw "Missing the required parameter 'body' when calling postRoutingQueueWrapupcodes";
      }


      return this.apiClient.callApi(
        '/api/v2/routing/queues/{queueId}/wrapupcodes', 
        'POST', 
        { 'queueId': queueId }, 
        {  }, 
        {  }, 
        {  }, 
        body, 
        ['PureCloud Auth'], 
        ['application/json'], 
        ['application/json']
      );
    };


    /**
     * Create queue
     * 
     * @param {module:purecloud-platform-client-v2/model/CreateQueueRequest} body Queue
     */
    this.postRoutingQueues = function(body) { 

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw "Missing the required parameter 'body' when calling postRoutingQueues";
      }


      return this.apiClient.callApi(
        '/api/v2/routing/queues', 
        'POST', 
        {  }, 
        {  }, 
        {  }, 
        {  }, 
        body, 
        ['PureCloud Auth'], 
        ['application/json'], 
        ['application/json']
      );
    };


    /**
     * Create Skill
     * 
     * @param {module:purecloud-platform-client-v2/model/RoutingSkill} body Skill
     */
    this.postRoutingSkills = function(body) { 

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw "Missing the required parameter 'body' when calling postRoutingSkills";
      }


      return this.apiClient.callApi(
        '/api/v2/routing/skills', 
        'POST', 
        {  }, 
        {  }, 
        {  }, 
        {  }, 
        body, 
        ['PureCloud Auth'], 
        ['application/json'], 
        ['application/json']
      );
    };


    /**
     * Create a wrap-up code
     * 
     * @param {module:purecloud-platform-client-v2/model/WrapupCode} body WrapupCode
     */
    this.postRoutingWrapupcodes = function(body) { 

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw "Missing the required parameter 'body' when calling postRoutingWrapupcodes";
      }


      return this.apiClient.callApi(
        '/api/v2/routing/wrapupcodes', 
        'POST', 
        {  }, 
        {  }, 
        {  }, 
        {  }, 
        body, 
        ['PureCloud Auth'], 
        ['application/json'], 
        ['application/json']
      );
    };


    /**
     * Add routing skill to user
     * 
     * @param {String} userId User ID
     * @param {module:purecloud-platform-client-v2/model/UserRoutingSkillPost} body Skill
     */
    this.postUserRoutingskills = function(userId, body) { 

      // verify the required parameter 'userId' is set
      if (userId === undefined || userId === null) {
        throw "Missing the required parameter 'userId' when calling postUserRoutingskills";
      }

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw "Missing the required parameter 'body' when calling postUserRoutingskills";
      }


      return this.apiClient.callApi(
        '/api/v2/users/{userId}/routingskills', 
        'POST', 
        { 'userId': userId }, 
        {  }, 
        {  }, 
        {  }, 
        body, 
        ['PureCloud Auth'], 
        ['application/json'], 
        ['application/json']
      );
    };


    /**
     * Update a route
     * 
     * @param {String} domainName email domain
     * @param {String} routeId route ID
     * @param {module:purecloud-platform-client-v2/model/InboundRoute} body Route
     */
    this.putRoutingEmailDomainRoute = function(domainName, routeId, body) { 

      // verify the required parameter 'domainName' is set
      if (domainName === undefined || domainName === null) {
        throw "Missing the required parameter 'domainName' when calling putRoutingEmailDomainRoute";
      }

      // verify the required parameter 'routeId' is set
      if (routeId === undefined || routeId === null) {
        throw "Missing the required parameter 'routeId' when calling putRoutingEmailDomainRoute";
      }

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw "Missing the required parameter 'body' when calling putRoutingEmailDomainRoute";
      }


      return this.apiClient.callApi(
        '/api/v2/routing/email/domains/{domainName}/routes/{routeId}', 
        'PUT', 
        { 'domainName': domainName,'routeId': routeId }, 
        {  }, 
        {  }, 
        {  }, 
        body, 
        ['PureCloud Auth'], 
        ['application/json'], 
        ['application/json']
      );
    };


    /**
     * Update a queue
     * 
     * @param {String} queueId Queue ID
     * @param {module:purecloud-platform-client-v2/model/Queue} body Queue
     */
    this.putRoutingQueue = function(queueId, body) { 

      // verify the required parameter 'queueId' is set
      if (queueId === undefined || queueId === null) {
        throw "Missing the required parameter 'queueId' when calling putRoutingQueue";
      }

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw "Missing the required parameter 'body' when calling putRoutingQueue";
      }


      return this.apiClient.callApi(
        '/api/v2/routing/queues/{queueId}', 
        'PUT', 
        { 'queueId': queueId }, 
        {  }, 
        {  }, 
        {  }, 
        body, 
        ['PureCloud Auth'], 
        ['application/json'], 
        ['application/json']
      );
    };


    /**
     * Update the utilization settings.
     * 
     * @param {module:purecloud-platform-client-v2/model/Utilization} body utilization
     */
    this.putRoutingUtilization = function(body) { 

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw "Missing the required parameter 'body' when calling putRoutingUtilization";
      }


      return this.apiClient.callApi(
        '/api/v2/routing/utilization', 
        'PUT', 
        {  }, 
        {  }, 
        {  }, 
        {  }, 
        body, 
        ['PureCloud Auth'], 
        ['application/json'], 
        ['application/json']
      );
    };


    /**
     * Update wrap-up code
     * 
     * @param {String} codeId Wrapup Code ID
     * @param {module:purecloud-platform-client-v2/model/WrapupCode} body WrapupCode
     */
    this.putRoutingWrapupcode = function(codeId, body) { 

      // verify the required parameter 'codeId' is set
      if (codeId === undefined || codeId === null) {
        throw "Missing the required parameter 'codeId' when calling putRoutingWrapupcode";
      }

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw "Missing the required parameter 'body' when calling putRoutingWrapupcode";
      }


      return this.apiClient.callApi(
        '/api/v2/routing/wrapupcodes/{codeId}', 
        'PUT', 
        { 'codeId': codeId }, 
        {  }, 
        {  }, 
        {  }, 
        body, 
        ['PureCloud Auth'], 
        ['application/json'], 
        ['application/json']
      );
    };


    /**
     * Update routing skill proficiency or state.
     * 
     * @param {String} userId User ID
     * @param {String} skillId skillId
     * @param {module:purecloud-platform-client-v2/model/UserRoutingSkill} body Skill
     */
    this.putUserRoutingskill = function(userId, skillId, body) { 

      // verify the required parameter 'userId' is set
      if (userId === undefined || userId === null) {
        throw "Missing the required parameter 'userId' when calling putUserRoutingskill";
      }

      // verify the required parameter 'skillId' is set
      if (skillId === undefined || skillId === null) {
        throw "Missing the required parameter 'skillId' when calling putUserRoutingskill";
      }

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw "Missing the required parameter 'body' when calling putUserRoutingskill";
      }


      return this.apiClient.callApi(
        '/api/v2/users/{userId}/routingskills/{skillId}', 
        'PUT', 
        { 'userId': userId,'skillId': skillId }, 
        {  }, 
        {  }, 
        {  }, 
        body, 
        ['PureCloud Auth'], 
        ['application/json'], 
        ['application/json']
      );
    };
  };

  return exports;
}));

},{"../ApiClient":8}],35:[function(require,module,exports){
(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['purecloud-platform-client-v2/ApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'));
  } else {
    // Browser globals (root is window)
    if (!root.platformClient) {
      root.platformClient = {};
    }
    root.platformClient.ScriptsApi = factory(root.platformClient.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * Scripts service.
   * @module purecloud-platform-client-v2/api/ScriptsApi
   * @version 6.0.1
   */

  /**
   * Constructs a new ScriptsApi. 
   * @alias module:purecloud-platform-client-v2/api/ScriptsApi
   * @class
   * @param {module:purecloud-platform-client-v2/ApiClient} apiClient Optional API client implementation to use,
   * default to {@link module:purecloud-platform-client-v2/ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;



    /**
     * Get a script
     * 
     * @param {String} scriptId Script ID
     */
    this.getScript = function(scriptId) { 

      // verify the required parameter 'scriptId' is set
      if (scriptId === undefined || scriptId === null) {
        throw "Missing the required parameter 'scriptId' when calling getScript";
      }


      return this.apiClient.callApi(
        '/api/v2/scripts/{scriptId}', 
        'GET', 
        { 'scriptId': scriptId }, 
        {  }, 
        {  }, 
        {  }, 
        null, 
        ['PureCloud Auth'], 
        ['application/json'], 
        ['application/json']
      );
    };


    /**
     * Get a page
     * 
     * @param {String} scriptId Script ID
     * @param {String} pageId Page ID
     */
    this.getScriptPage = function(scriptId, pageId) { 

      // verify the required parameter 'scriptId' is set
      if (scriptId === undefined || scriptId === null) {
        throw "Missing the required parameter 'scriptId' when calling getScriptPage";
      }

      // verify the required parameter 'pageId' is set
      if (pageId === undefined || pageId === null) {
        throw "Missing the required parameter 'pageId' when calling getScriptPage";
      }


      return this.apiClient.callApi(
        '/api/v2/scripts/{scriptId}/pages/{pageId}', 
        'GET', 
        { 'scriptId': scriptId,'pageId': pageId }, 
        {  }, 
        {  }, 
        {  }, 
        null, 
        ['PureCloud Auth'], 
        ['application/json'], 
        ['application/json']
      );
    };


    /**
     * Get the list of pages
     * 
     * @param {String} scriptId Script ID
     */
    this.getScriptPages = function(scriptId) { 

      // verify the required parameter 'scriptId' is set
      if (scriptId === undefined || scriptId === null) {
        throw "Missing the required parameter 'scriptId' when calling getScriptPages";
      }


      return this.apiClient.callApi(
        '/api/v2/scripts/{scriptId}/pages', 
        'GET', 
        { 'scriptId': scriptId }, 
        {  }, 
        {  }, 
        {  }, 
        null, 
        ['PureCloud Auth'], 
        ['application/json'], 
        ['application/json']
      );
    };


    /**
     * Get the list of scripts
     * 
     * @param {Object} opts Optional parameters
     * @param {Number} opts.pageSize Page size (default to 25)
     * @param {Number} opts.pageNumber Page number (default to 1)
     * @param {String} opts.expand Expand
     * @param {String} opts.name Name filter
     * @param {String} opts.feature Feature filter
     * @param {String} opts.flowId Secure flow id filter
     * @param {module:purecloud-platform-client-v2/model/String} opts.sortBy SortBy
     * @param {module:purecloud-platform-client-v2/model/String} opts.sortOrder SortOrder
     */
    this.getScripts = function(opts) { 
      opts = opts || {};


      return this.apiClient.callApi(
        '/api/v2/scripts', 
        'GET', 
        {  }, 
        { 'pageSize': opts['pageSize'],'pageNumber': opts['pageNumber'],'expand': opts['expand'],'name': opts['name'],'feature': opts['feature'],'flowId': opts['flowId'],'sortBy': opts['sortBy'],'sortOrder': opts['sortOrder'] }, 
        {  }, 
        {  }, 
        null, 
        ['PureCloud Auth'], 
        ['application/json'], 
        ['application/json']
      );
    };


    /**
     * Get the published scripts.
     * 
     * @param {Object} opts Optional parameters
     * @param {Number} opts.pageSize Page size (default to 25)
     * @param {Number} opts.pageNumber Page number (default to 1)
     * @param {String} opts.expand Expand
     * @param {String} opts.name Name filter
     * @param {String} opts.feature Feature filter
     * @param {String} opts.flowId Secure flow id filter
     */
    this.getScriptsPublished = function(opts) { 
      opts = opts || {};


      return this.apiClient.callApi(
        '/api/v2/scripts/published', 
        'GET', 
        {  }, 
        { 'pageSize': opts['pageSize'],'pageNumber': opts['pageNumber'],'expand': opts['expand'],'name': opts['name'],'feature': opts['feature'],'flowId': opts['flowId'] }, 
        {  }, 
        {  }, 
        null, 
        ['PureCloud Auth'], 
        ['application/json'], 
        ['application/json']
      );
    };


    /**
     * Get the published script.
     * 
     * @param {String} scriptId Script ID
     */
    this.getScriptsPublishedScriptId = function(scriptId) { 

      // verify the required parameter 'scriptId' is set
      if (scriptId === undefined || scriptId === null) {
        throw "Missing the required parameter 'scriptId' when calling getScriptsPublishedScriptId";
      }


      return this.apiClient.callApi(
        '/api/v2/scripts/published/{scriptId}', 
        'GET', 
        { 'scriptId': scriptId }, 
        {  }, 
        {  }, 
        {  }, 
        null, 
        ['PureCloud Auth'], 
        ['application/json'], 
        ['application/json']
      );
    };


    /**
     * Get the published page.
     * 
     * @param {String} scriptId Script ID
     * @param {String} pageId Page ID
     */
    this.getScriptsPublishedScriptIdPage = function(scriptId, pageId) { 

      // verify the required parameter 'scriptId' is set
      if (scriptId === undefined || scriptId === null) {
        throw "Missing the required parameter 'scriptId' when calling getScriptsPublishedScriptIdPage";
      }

      // verify the required parameter 'pageId' is set
      if (pageId === undefined || pageId === null) {
        throw "Missing the required parameter 'pageId' when calling getScriptsPublishedScriptIdPage";
      }


      return this.apiClient.callApi(
        '/api/v2/scripts/published/{scriptId}/pages/{pageId}', 
        'GET', 
        { 'scriptId': scriptId,'pageId': pageId }, 
        {  }, 
        {  }, 
        {  }, 
        null, 
        ['PureCloud Auth'], 
        ['application/json'], 
        ['application/json']
      );
    };


    /**
     * Get the list of published pages
     * 
     * @param {String} scriptId Script ID
     */
    this.getScriptsPublishedScriptIdPages = function(scriptId) { 

      // verify the required parameter 'scriptId' is set
      if (scriptId === undefined || scriptId === null) {
        throw "Missing the required parameter 'scriptId' when calling getScriptsPublishedScriptIdPages";
      }


      return this.apiClient.callApi(
        '/api/v2/scripts/published/{scriptId}/pages', 
        'GET', 
        { 'scriptId': scriptId }, 
        {  }, 
        {  }, 
        {  }, 
        null, 
        ['PureCloud Auth'], 
        ['application/json'], 
        ['application/json']
      );
    };


    /**
     * Get the published variables
     * 
     * @param {String} scriptId Script ID
     * @param {Object} opts Optional parameters
     * @param {String} opts.input input
     * @param {String} opts.output output
     * @param {String} opts.type type
     */
    this.getScriptsPublishedScriptIdVariables = function(scriptId, opts) { 
      opts = opts || {};

      // verify the required parameter 'scriptId' is set
      if (scriptId === undefined || scriptId === null) {
        throw "Missing the required parameter 'scriptId' when calling getScriptsPublishedScriptIdVariables";
      }


      return this.apiClient.callApi(
        '/api/v2/scripts/published/{scriptId}/variables', 
        'GET', 
        { 'scriptId': scriptId }, 
        { 'input': opts['input'],'output': opts['output'],'type': opts['type'] }, 
        {  }, 
        {  }, 
        null, 
        ['PureCloud Auth'], 
        ['application/json'], 
        ['application/json']
      );
    };
  };

  return exports;
}));

},{"../ApiClient":8}],36:[function(require,module,exports){
(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['purecloud-platform-client-v2/ApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'));
  } else {
    // Browser globals (root is window)
    if (!root.platformClient) {
      root.platformClient = {};
    }
    root.platformClient.SearchApi = factory(root.platformClient.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * Search service.
   * @module purecloud-platform-client-v2/api/SearchApi
   * @version 6.0.1
   */

  /**
   * Constructs a new SearchApi. 
   * @alias module:purecloud-platform-client-v2/api/SearchApi
   * @class
   * @param {module:purecloud-platform-client-v2/ApiClient} apiClient Optional API client implementation to use,
   * default to {@link module:purecloud-platform-client-v2/ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;



    /**
     * Search documentation using the q64 value returned from a previous search
     * 
     * @param {String} q64 q64
     */
    this.getDocumentationSearch = function(q64) { 

      // verify the required parameter 'q64' is set
      if (q64 === undefined || q64 === null) {
        throw "Missing the required parameter 'q64' when calling getDocumentationSearch";
      }


      return this.apiClient.callApi(
        '/api/v2/documentation/search', 
        'GET', 
        {  }, 
        { 'q64': q64 }, 
        {  }, 
        {  }, 
        null, 
        ['PureCloud Auth'], 
        ['application/json'], 
        ['application/json']
      );
    };


    /**
     * Search groups using the q64 value returned from a previous search
     * 
     * @param {String} q64 q64
     * @param {Object} opts Optional parameters
     * @param {Array.<String>} opts.expand expand
     */
    this.getGroupsSearch = function(q64, opts) { 
      opts = opts || {};

      // verify the required parameter 'q64' is set
      if (q64 === undefined || q64 === null) {
        throw "Missing the required parameter 'q64' when calling getGroupsSearch";
      }


      return this.apiClient.callApi(
        '/api/v2/groups/search', 
        'GET', 
        {  }, 
        { 'q64': q64,'expand': this.apiClient.buildCollectionParam(opts['expand'], 'multi') }, 
        {  }, 
        {  }, 
        null, 
        ['PureCloud Auth'], 
        ['application/json'], 
        ['application/json']
      );
    };


    /**
     * Search locations using the q64 value returned from a previous search
     * 
     * @param {String} q64 q64
     * @param {Object} opts Optional parameters
     * @param {Array.<String>} opts.expand expand
     */
    this.getLocationsSearch = function(q64, opts) { 
      opts = opts || {};

      // verify the required parameter 'q64' is set
      if (q64 === undefined || q64 === null) {
        throw "Missing the required parameter 'q64' when calling getLocationsSearch";
      }


      return this.apiClient.callApi(
        '/api/v2/locations/search', 
        'GET', 
        {  }, 
        { 'q64': q64,'expand': this.apiClient.buildCollectionParam(opts['expand'], 'multi') }, 
        {  }, 
        {  }, 
        null, 
        ['PureCloud Auth'], 
        ['application/json'], 
        ['application/json']
      );
    };


    /**
     * Search using the q64 value returned from a previous search.
     * 
     * @param {String} q64 q64
     * @param {Object} opts Optional parameters
     * @param {Array.<String>} opts.expand Which fields, if any, to expand
     * @param {Boolean} opts.profile profile (default to true)
     */
    this.getSearch = function(q64, opts) { 
      opts = opts || {};

      // verify the required parameter 'q64' is set
      if (q64 === undefined || q64 === null) {
        throw "Missing the required parameter 'q64' when calling getSearch";
      }


      return this.apiClient.callApi(
        '/api/v2/search', 
        'GET', 
        {  }, 
        { 'q64': q64,'expand': this.apiClient.buildCollectionParam(opts['expand'], 'multi'),'profile': opts['profile'] }, 
        {  }, 
        {  }, 
        null, 
        ['PureCloud Auth'], 
        ['application/json'], 
        ['application/json']
      );
    };


    /**
     * Suggest resources using the q64 value returned from a previous suggest query.
     * 
     * @param {String} q64 q64
     * @param {Object} opts Optional parameters
     * @param {Array.<String>} opts.expand Which fields, if any, to expand
     * @param {Boolean} opts.profile profile (default to true)
     */
    this.getSearchSuggest = function(q64, opts) { 
      opts = opts || {};

      // verify the required parameter 'q64' is set
      if (q64 === undefined || q64 === null) {
        throw "Missing the required parameter 'q64' when calling getSearchSuggest";
      }


      return this.apiClient.callApi(
        '/api/v2/search/suggest', 
        'GET', 
        {  }, 
        { 'q64': q64,'expand': this.apiClient.buildCollectionParam(opts['expand'], 'multi'),'profile': opts['profile'] }, 
        {  }, 
        {  }, 
        null, 
        ['PureCloud Auth'], 
        ['application/json'], 
        ['application/json']
      );
    };


    /**
     * Search users using the q64 value returned from a previous search
     * 
     * @param {String} q64 q64
     * @param {Object} opts Optional parameters
     * @param {Array.<String>} opts.expand expand
     */
    this.getUsersSearch = function(q64, opts) { 
      opts = opts || {};

      // verify the required parameter 'q64' is set
      if (q64 === undefined || q64 === null) {
        throw "Missing the required parameter 'q64' when calling getUsersSearch";
      }


      return this.apiClient.callApi(
        '/api/v2/users/search', 
        'GET', 
        {  }, 
        { 'q64': q64,'expand': this.apiClient.buildCollectionParam(opts['expand'], 'multi') }, 
        {  }, 
        {  }, 
        null, 
        ['PureCloud Auth'], 
        ['application/json'], 
        ['application/json']
      );
    };


    /**
     * Search voicemails using the q64 value returned from a previous search
     * 
     * @param {String} q64 q64
     * @param {Object} opts Optional parameters
     * @param {Array.<String>} opts.expand expand
     */
    this.getVoicemailSearch = function(q64, opts) { 
      opts = opts || {};

      // verify the required parameter 'q64' is set
      if (q64 === undefined || q64 === null) {
        throw "Missing the required parameter 'q64' when calling getVoicemailSearch";
      }


      return this.apiClient.callApi(
        '/api/v2/voicemail/search', 
        'GET', 
        {  }, 
        { 'q64': q64,'expand': this.apiClient.buildCollectionParam(opts['expand'], 'multi') }, 
        {  }, 
        {  }, 
        null, 
        ['PureCloud Auth'], 
        ['application/json'], 
        ['application/json']
      );
    };


    /**
     * Search documentation
     * 
     * @param {module:purecloud-platform-client-v2/model/DocumentationSearchRequest} body Search request options
     */
    this.postDocumentationSearch = function(body) { 

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw "Missing the required parameter 'body' when calling postDocumentationSearch";
      }


      return this.apiClient.callApi(
        '/api/v2/documentation/search', 
        'POST', 
        {  }, 
        {  }, 
        {  }, 
        {  }, 
        body, 
        ['PureCloud Auth'], 
        ['application/json'], 
        ['application/json']
      );
    };


    /**
     * Search groups
     * 
     * @param {module:purecloud-platform-client-v2/model/GroupSearchRequest} body Search request options
     */
    this.postGroupsSearch = function(body) { 

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw "Missing the required parameter 'body' when calling postGroupsSearch";
      }


      return this.apiClient.callApi(
        '/api/v2/groups/search', 
        'POST', 
        {  }, 
        {  }, 
        {  }, 
        {  }, 
        body, 
        ['PureCloud Auth'], 
        ['application/json'], 
        ['application/json']
      );
    };


    /**
     * Search locations
     * 
     * @param {module:purecloud-platform-client-v2/model/LocationSearchRequest} body Search request options
     */
    this.postLocationsSearch = function(body) { 

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw "Missing the required parameter 'body' when calling postLocationsSearch";
      }


      return this.apiClient.callApi(
        '/api/v2/locations/search', 
        'POST', 
        {  }, 
        {  }, 
        {  }, 
        {  }, 
        body, 
        ['PureCloud Auth'], 
        ['application/json'], 
        ['application/json']
      );
    };


    /**
     * Search resources.
     * 
     * @param {module:purecloud-platform-client-v2/model/SearchRequest} body Search request options
     * @param {Object} opts Optional parameters
     * @param {Boolean} opts.profile profile (default to true)
     */
    this.postSearch = function(body, opts) { 
      opts = opts || {};

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw "Missing the required parameter 'body' when calling postSearch";
      }


      return this.apiClient.callApi(
        '/api/v2/search', 
        'POST', 
        {  }, 
        { 'profile': opts['profile'] }, 
        {  }, 
        {  }, 
        body, 
        ['PureCloud Auth'], 
        ['application/json'], 
        ['application/json']
      );
    };


    /**
     * Suggest resources.
     * 
     * @param {module:purecloud-platform-client-v2/model/SuggestSearchRequest} body Search request options
     * @param {Object} opts Optional parameters
     * @param {Boolean} opts.profile profile (default to true)
     */
    this.postSearchSuggest = function(body, opts) { 
      opts = opts || {};

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw "Missing the required parameter 'body' when calling postSearchSuggest";
      }


      return this.apiClient.callApi(
        '/api/v2/search/suggest', 
        'POST', 
        {  }, 
        { 'profile': opts['profile'] }, 
        {  }, 
        {  }, 
        body, 
        ['PureCloud Auth'], 
        ['application/json'], 
        ['application/json']
      );
    };


    /**
     * Search users
     * 
     * @param {module:purecloud-platform-client-v2/model/UserSearchRequest} body Search request options
     */
    this.postUsersSearch = function(body) { 

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw "Missing the required parameter 'body' when calling postUsersSearch";
      }


      return this.apiClient.callApi(
        '/api/v2/users/search', 
        'POST', 
        {  }, 
        {  }, 
        {  }, 
        {  }, 
        body, 
        ['PureCloud Auth'], 
        ['application/json'], 
        ['application/json']
      );
    };


    /**
     * Search voicemails
     * 
     * @param {module:purecloud-platform-client-v2/model/VoicemailSearchRequest} body Search request options
     */
    this.postVoicemailSearch = function(body) { 

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw "Missing the required parameter 'body' when calling postVoicemailSearch";
      }


      return this.apiClient.callApi(
        '/api/v2/voicemail/search', 
        'POST', 
        {  }, 
        {  }, 
        {  }, 
        {  }, 
        body, 
        ['PureCloud Auth'], 
        ['application/json'], 
        ['application/json']
      );
    };
  };

  return exports;
}));

},{"../ApiClient":8}],37:[function(require,module,exports){
(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['purecloud-platform-client-v2/ApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'));
  } else {
    // Browser globals (root is window)
    if (!root.platformClient) {
      root.platformClient = {};
    }
    root.platformClient.StationsApi = factory(root.platformClient.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * Stations service.
   * @module purecloud-platform-client-v2/api/StationsApi
   * @version 6.0.1
   */

  /**
   * Constructs a new StationsApi. 
   * @alias module:purecloud-platform-client-v2/api/StationsApi
   * @class
   * @param {module:purecloud-platform-client-v2/ApiClient} apiClient Optional API client implementation to use,
   * default to {@link module:purecloud-platform-client-v2/ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;



    /**
     * Unassigns the user assigned to this station
     * 
     * @param {String} stationId Station ID
     */
    this.deleteStationAssociateduser = function(stationId) { 

      // verify the required parameter 'stationId' is set
      if (stationId === undefined || stationId === null) {
        throw "Missing the required parameter 'stationId' when calling deleteStationAssociateduser";
      }


      return this.apiClient.callApi(
        '/api/v2/stations/{stationId}/associateduser', 
        'DELETE', 
        { 'stationId': stationId }, 
        {  }, 
        {  }, 
        {  }, 
        null, 
        ['PureCloud Auth'], 
        ['application/json'], 
        ['application/json']
      );
    };


    /**
     * Get station.
     * 
     * @param {String} stationId Station ID
     */
    this.getStation = function(stationId) { 

      // verify the required parameter 'stationId' is set
      if (stationId === undefined || stationId === null) {
        throw "Missing the required parameter 'stationId' when calling getStation";
      }


      return this.apiClient.callApi(
        '/api/v2/stations/{stationId}', 
        'GET', 
        { 'stationId': stationId }, 
        {  }, 
        {  }, 
        {  }, 
        null, 
        ['PureCloud Auth'], 
        ['application/json'], 
        ['application/json']
      );
    };


    /**
     * Get the list of available stations.
     * 
     * @param {Object} opts Optional parameters
     * @param {Number} opts.pageSize Page size (default to 25)
     * @param {Number} opts.pageNumber Page number (default to 1)
     * @param {String} opts.sortBy Sort by (default to name)
     * @param {String} opts.name Name
     * @param {String} opts.userSelectable True for stations that the user can select otherwise false
     * @param {String} opts.webRtcUserId Filter for the webRtc station of the webRtcUserId
     * @param {String} opts.id Comma separated list of stationIds
     * @param {String} opts.lineAppearanceId lineAppearanceId
     */
    this.getStations = function(opts) { 
      opts = opts || {};


      return this.apiClient.callApi(
        '/api/v2/stations', 
        'GET', 
        {  }, 
        { 'pageSize': opts['pageSize'],'pageNumber': opts['pageNumber'],'sortBy': opts['sortBy'],'name': opts['name'],'userSelectable': opts['userSelectable'],'webRtcUserId': opts['webRtcUserId'],'id': opts['id'],'lineAppearanceId': opts['lineAppearanceId'] }, 
        {  }, 
        {  }, 
        null, 
        ['PureCloud Auth'], 
        ['application/json'], 
        ['application/json']
      );
    };
  };

  return exports;
}));

},{"../ApiClient":8}],38:[function(require,module,exports){
(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['purecloud-platform-client-v2/ApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'));
  } else {
    // Browser globals (root is window)
    if (!root.platformClient) {
      root.platformClient = {};
    }
    root.platformClient.SuggestApi = factory(root.platformClient.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * Suggest service.
   * @module purecloud-platform-client-v2/api/SuggestApi
   * @version 6.0.1
   */

  /**
   * Constructs a new SuggestApi. 
   * @alias module:purecloud-platform-client-v2/api/SuggestApi
   * @class
   * @param {module:purecloud-platform-client-v2/ApiClient} apiClient Optional API client implementation to use,
   * default to {@link module:purecloud-platform-client-v2/ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;



    /**
     * Search using the q64 value returned from a previous search.
     * 
     * @param {String} q64 q64
     * @param {Object} opts Optional parameters
     * @param {Array.<String>} opts.expand Which fields, if any, to expand
     * @param {Boolean} opts.profile profile (default to true)
     */
    this.getSearch = function(q64, opts) { 
      opts = opts || {};

      // verify the required parameter 'q64' is set
      if (q64 === undefined || q64 === null) {
        throw "Missing the required parameter 'q64' when calling getSearch";
      }


      return this.apiClient.callApi(
        '/api/v2/search', 
        'GET', 
        {  }, 
        { 'q64': q64,'expand': this.apiClient.buildCollectionParam(opts['expand'], 'multi'),'profile': opts['profile'] }, 
        {  }, 
        {  }, 
        null, 
        ['PureCloud Auth'], 
        ['application/json'], 
        ['application/json']
      );
    };


    /**
     * Suggest resources using the q64 value returned from a previous suggest query.
     * 
     * @param {String} q64 q64
     * @param {Object} opts Optional parameters
     * @param {Array.<String>} opts.expand Which fields, if any, to expand
     * @param {Boolean} opts.profile profile (default to true)
     */
    this.getSearchSuggest = function(q64, opts) { 
      opts = opts || {};

      // verify the required parameter 'q64' is set
      if (q64 === undefined || q64 === null) {
        throw "Missing the required parameter 'q64' when calling getSearchSuggest";
      }


      return this.apiClient.callApi(
        '/api/v2/search/suggest', 
        'GET', 
        {  }, 
        { 'q64': q64,'expand': this.apiClient.buildCollectionParam(opts['expand'], 'multi'),'profile': opts['profile'] }, 
        {  }, 
        {  }, 
        null, 
        ['PureCloud Auth'], 
        ['application/json'], 
        ['application/json']
      );
    };


    /**
     * Search resources.
     * 
     * @param {module:purecloud-platform-client-v2/model/SearchRequest} body Search request options
     * @param {Object} opts Optional parameters
     * @param {Boolean} opts.profile profile (default to true)
     */
    this.postSearch = function(body, opts) { 
      opts = opts || {};

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw "Missing the required parameter 'body' when calling postSearch";
      }


      return this.apiClient.callApi(
        '/api/v2/search', 
        'POST', 
        {  }, 
        { 'profile': opts['profile'] }, 
        {  }, 
        {  }, 
        body, 
        ['PureCloud Auth'], 
        ['application/json'], 
        ['application/json']
      );
    };


    /**
     * Suggest resources.
     * 
     * @param {module:purecloud-platform-client-v2/model/SuggestSearchRequest} body Search request options
     * @param {Object} opts Optional parameters
     * @param {Boolean} opts.profile profile (default to true)
     */
    this.postSearchSuggest = function(body, opts) { 
      opts = opts || {};

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw "Missing the required parameter 'body' when calling postSearchSuggest";
      }


      return this.apiClient.callApi(
        '/api/v2/search/suggest', 
        'POST', 
        {  }, 
        { 'profile': opts['profile'] }, 
        {  }, 
        {  }, 
        body, 
        ['PureCloud Auth'], 
        ['application/json'], 
        ['application/json']
      );
    };
  };

  return exports;
}));

},{"../ApiClient":8}],39:[function(require,module,exports){
(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['purecloud-platform-client-v2/ApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'));
  } else {
    // Browser globals (root is window)
    if (!root.platformClient) {
      root.platformClient = {};
    }
    root.platformClient.TelephonyProvidersEdgeApi = factory(root.platformClient.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * TelephonyProvidersEdge service.
   * @module purecloud-platform-client-v2/api/TelephonyProvidersEdgeApi
   * @version 6.0.1
   */

  /**
   * Constructs a new TelephonyProvidersEdgeApi. 
   * @alias module:purecloud-platform-client-v2/api/TelephonyProvidersEdgeApi
   * @class
   * @param {module:purecloud-platform-client-v2/ApiClient} apiClient Optional API client implementation to use,
   * default to {@link module:purecloud-platform-client-v2/ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;



    /**
     * Delete a edge.
     * 
     * @param {String} edgeId Edge ID
     */
    this.deleteTelephonyProvidersEdge = function(edgeId) { 

      // verify the required parameter 'edgeId' is set
      if (edgeId === undefined || edgeId === null) {
        throw "Missing the required parameter 'edgeId' when calling deleteTelephonyProvidersEdge";
      }


      return this.apiClient.callApi(
        '/api/v2/telephony/providers/edges/{edgeId}', 
        'DELETE', 
        { 'edgeId': edgeId }, 
        {  }, 
        {  }, 
        {  }, 
        null, 
        ['PureCloud Auth'], 
        ['application/json'], 
        ['application/json']
      );
    };


    /**
     * Delete an edge logical interface
     * 
     * @param {String} edgeId Edge ID
     * @param {String} interfaceId Interface ID
     */
    this.deleteTelephonyProvidersEdgeLogicalinterface = function(edgeId, interfaceId) { 

      // verify the required parameter 'edgeId' is set
      if (edgeId === undefined || edgeId === null) {
        throw "Missing the required parameter 'edgeId' when calling deleteTelephonyProvidersEdgeLogicalinterface";
      }

      // verify the required parameter 'interfaceId' is set
      if (interfaceId === undefined || interfaceId === null) {
        throw "Missing the required parameter 'interfaceId' when calling deleteTelephonyProvidersEdgeLogicalinterface";
      }


      return this.apiClient.callApi(
        '/api/v2/telephony/providers/edges/{edgeId}/logicalinterfaces/{interfaceId}', 
        'DELETE', 
        { 'edgeId': edgeId,'interfaceId': interfaceId }, 
        {  }, 
        {  }, 
        {  }, 
        null, 
        ['PureCloud Auth'], 
        ['application/json'], 
        ['application/json']
      );
    };


    /**
     * Cancels any in-progress update for this edge.
     * 
     * @param {String} edgeId Edge ID
     */
    this.deleteTelephonyProvidersEdgeSoftwareupdate = function(edgeId) { 

      // verify the required parameter 'edgeId' is set
      if (edgeId === undefined || edgeId === null) {
        throw "Missing the required parameter 'edgeId' when calling deleteTelephonyProvidersEdgeSoftwareupdate";
      }


      return this.apiClient.callApi(
        '/api/v2/telephony/providers/edges/{edgeId}/softwareupdate', 
        'DELETE', 
        { 'edgeId': edgeId }, 
        {  }, 
        {  }, 
        {  }, 
        null, 
        ['PureCloud Auth'], 
        ['application/json'], 
        ['application/json']
      );
    };


    /**
     * Delete a certificate authority.
     * 
     * @param {String} certificateId Certificate ID
     */
    this.deleteTelephonyProvidersEdgesCertificateauthority = function(certificateId) { 

      // verify the required parameter 'certificateId' is set
      if (certificateId === undefined || certificateId === null) {
        throw "Missing the required parameter 'certificateId' when calling deleteTelephonyProvidersEdgesCertificateauthority";
      }


      return this.apiClient.callApi(
        '/api/v2/telephony/providers/edges/certificateauthorities/{certificateId}', 
        'DELETE', 
        { 'certificateId': certificateId }, 
        {  }, 
        {  }, 
        {  }, 
        null, 
        ['PureCloud Auth'], 
        ['application/json'], 
        ['application/json']
      );
    };


    /**
     * Delete a DID Pool by ID.
     * 
     * @param {String} didPoolId DID pool ID
     */
    this.deleteTelephonyProvidersEdgesDidpool = function(didPoolId) { 

      // verify the required parameter 'didPoolId' is set
      if (didPoolId === undefined || didPoolId === null) {
        throw "Missing the required parameter 'didPoolId' when calling deleteTelephonyProvidersEdgesDidpool";
      }


      return this.apiClient.callApi(
        '/api/v2/telephony/providers/edges/didpools/{didPoolId}', 
        'DELETE', 
        { 'didPoolId': didPoolId }, 
        {  }, 
        {  }, 
        {  }, 
        null, 
        ['PureCloud Auth'], 
        ['application/json'], 
        ['application/json']
      );
    };


    /**
     * Delete an edge group.
     * 
     * @param {String} edgeGroupId Edge group ID
     */
    this.deleteTelephonyProvidersEdgesEdgegroup = function(edgeGroupId) { 

      // verify the required parameter 'edgeGroupId' is set
      if (edgeGroupId === undefined || edgeGroupId === null) {
        throw "Missing the required parameter 'edgeGroupId' when calling deleteTelephonyProvidersEdgesEdgegroup";
      }


      return this.apiClient.callApi(
        '/api/v2/telephony/providers/edges/edgegroups/{edgeGroupId}', 
        'DELETE', 
        { 'edgeGroupId': edgeGroupId }, 
        {  }, 
        {  }, 
        {  }, 
        null, 
        ['PureCloud Auth'], 
        ['application/json'], 
        ['application/json']
      );
    };


    /**
     * Delete endpoint
     * 
     * @param {String} endpointId Endpoint ID
     */
    this.deleteTelephonyProvidersEdgesEndpoint = function(endpointId) { 

      // verify the required parameter 'endpointId' is set
      if (endpointId === undefined || endpointId === null) {
        throw "Missing the required parameter 'endpointId' when calling deleteTelephonyProvidersEdgesEndpoint";
      }


      return this.apiClient.callApi(
        '/api/v2/telephony/providers/edges/endpoints/{endpointId}', 
        'DELETE', 
        { 'endpointId': endpointId }, 
        {  }, 
        {  }, 
        {  }, 
        null, 
        ['PureCloud Auth'], 
        ['application/json'], 
        ['application/json']
      );
    };


    /**
     * Delete an extension pool by ID
     * 
     * @param {String} extensionPoolId Extension pool ID
     */
    this.deleteTelephonyProvidersEdgesExtensionpool = function(extensionPoolId) { 

      // verify the required parameter 'extensionPoolId' is set
      if (extensionPoolId === undefined || extensionPoolId === null) {
        throw "Missing the required parameter 'extensionPoolId' when calling deleteTelephonyProvidersEdgesExtensionpool";
      }


      return this.apiClient.callApi(
        '/api/v2/telephony/providers/edges/extensionpools/{extensionPoolId}', 
        'DELETE', 
        { 'extensionPoolId': extensionPoolId }, 
        {  }, 
        {  }, 
        {  }, 
        null, 
        ['PureCloud Auth'], 
        ['application/json'], 
        ['application/json']
      );
    };


    /**
     * Delete Outbound Route
     * 
     * @param {String} outboundRouteId Outbound route ID
     */
    this.deleteTelephonyProvidersEdgesOutboundroute = function(outboundRouteId) { 

      // verify the required parameter 'outboundRouteId' is set
      if (outboundRouteId === undefined || outboundRouteId === null) {
        throw "Missing the required parameter 'outboundRouteId' when calling deleteTelephonyProvidersEdgesOutboundroute";
      }


      return this.apiClient.callApi(
        '/api/v2/telephony/providers/edges/outboundroutes/{outboundRouteId}', 
        'DELETE', 
        { 'outboundRouteId': outboundRouteId }, 
        {  }, 
        {  }, 
        {  }, 
        null, 
        ['PureCloud Auth'], 
        ['application/json'], 
        ['application/json']
      );
    };


    /**
     * Delete a Phone by ID
     * 
     * @param {String} phoneId Phone ID
     */
    this.deleteTelephonyProvidersEdgesPhone = function(phoneId) { 

      // verify the required parameter 'phoneId' is set
      if (phoneId === undefined || phoneId === null) {
        throw "Missing the required parameter 'phoneId' when calling deleteTelephonyProvidersEdgesPhone";
      }


      return this.apiClient.callApi(
        '/api/v2/telephony/providers/edges/phones/{phoneId}', 
        'DELETE', 
        { 'phoneId': phoneId }, 
        {  }, 
        {  }, 
        {  }, 
        null, 
        ['PureCloud Auth'], 
        ['application/json'], 
        ['application/json']
      );
    };


    /**
     * Delete a Phone Base Settings by ID
     * 
     * @param {String} phoneBaseId Phone base ID
     */
    this.deleteTelephonyProvidersEdgesPhonebasesetting = function(phoneBaseId) { 

      // verify the required parameter 'phoneBaseId' is set
      if (phoneBaseId === undefined || phoneBaseId === null) {
        throw "Missing the required parameter 'phoneBaseId' when calling deleteTelephonyProvidersEdgesPhonebasesetting";
      }


      return this.apiClient.callApi(
        '/api/v2/telephony/providers/edges/phonebasesettings/{phoneBaseId}', 
        'DELETE', 
        { 'phoneBaseId': phoneBaseId }, 
        {  }, 
        {  }, 
        {  }, 
        null, 
        ['PureCloud Auth'], 
        ['application/json'], 
        ['application/json']
      );
    };


    /**
     * Delete a Site by ID
     * 
     * @param {String} siteId Site ID
     */
    this.deleteTelephonyProvidersEdgesSite = function(siteId) { 

      // verify the required parameter 'siteId' is set
      if (siteId === undefined || siteId === null) {
        throw "Missing the required parameter 'siteId' when calling deleteTelephonyProvidersEdgesSite";
      }


      return this.apiClient.callApi(
        '/api/v2/telephony/providers/edges/sites/{siteId}', 
        'DELETE', 
        { 'siteId': siteId }, 
        {  }, 
        {  }, 
        {  }, 
        null, 
        ['PureCloud Auth'], 
        ['application/json'], 
        ['application/json']
      );
    };


    /**
     * Delete Outbound Route
     * 
     * @param {String} siteId Site ID
     * @param {String} outboundRouteId Outbound route ID
     */
    this.deleteTelephonyProvidersEdgesSiteOutboundroute = function(siteId, outboundRouteId) { 

      // verify the required parameter 'siteId' is set
      if (siteId === undefined || siteId === null) {
        throw "Missing the required parameter 'siteId' when calling deleteTelephonyProvidersEdgesSiteOutboundroute";
      }

      // verify the required parameter 'outboundRouteId' is set
      if (outboundRouteId === undefined || outboundRouteId === null) {
        throw "Missing the required parameter 'outboundRouteId' when calling deleteTelephonyProvidersEdgesSiteOutboundroute";
      }


      return this.apiClient.callApi(
        '/api/v2/telephony/providers/edges/sites/{siteId}/outboundroutes/{outboundRouteId}', 
        'DELETE', 
        { 'siteId': siteId,'outboundRouteId': outboundRouteId }, 
        {  }, 
        {  }, 
        {  }, 
        null, 
        ['PureCloud Auth'], 
        ['application/json'], 
        ['application/json']
      );
    };


    /**
     * Delete a Trunk Base Settings object by ID
     * 
     * @param {String} trunkBaseSettingsId Trunk Base ID
     */
    this.deleteTelephonyProvidersEdgesTrunkbasesetting = function(trunkBaseSettingsId) { 

      // verify the required parameter 'trunkBaseSettingsId' is set
      if (trunkBaseSettingsId === undefined || trunkBaseSettingsId === null) {
        throw "Missing the required parameter 'trunkBaseSettingsId' when calling deleteTelephonyProvidersEdgesTrunkbasesetting";
      }


      return this.apiClient.callApi(
        '/api/v2/telephony/providers/edges/trunkbasesettings/{trunkBaseSettingsId}', 
        'DELETE', 
        { 'trunkBaseSettingsId': trunkBaseSettingsId }, 
        {  }, 
        {  }, 
        {  }, 
        null, 
        ['PureCloud Auth'], 
        ['application/json'], 
        ['application/json']
      );
    };


    /**
     * Lists available schema categories (Deprecated)
     * 
     * @param {Object} opts Optional parameters
     * @param {Number} opts.pageSize Page size (default to 25)
     * @param {Number} opts.pageNumber Page number (default to 1)
     */
    this.getConfigurationSchemasEdgesVnext = function(opts) { 
      opts = opts || {};


      return this.apiClient.callApi(
        '/api/v2/configuration/schemas/edges/vnext', 
        'GET', 
        {  }, 
        { 'pageSize': opts['pageSize'],'pageNumber': opts['pageNumber'] }, 
        {  }, 
        {  }, 
        null, 
        ['PureCloud Auth'], 
        ['application/json'], 
        ['application/json']
      );
    };


    /**
     * List schemas of a specific category (Deprecated)
     * 
     * @param {String} schemaCategory Schema category
     * @param {Object} opts Optional parameters
     * @param {Number} opts.pageSize Page size (default to 25)
     * @param {Number} opts.pageNumber Page number (default to 1)
     */
    this.getConfigurationSchemasEdgesVnextSchemaCategory = function(schemaCategory, opts) { 
      opts = opts || {};

      // verify the required parameter 'schemaCategory' is set
      if (schemaCategory === undefined || schemaCategory === null) {
        throw "Missing the required parameter 'schemaCategory' when calling getConfigurationSchemasEdgesVnextSchemaCategory";
      }


      return this.apiClient.callApi(
        '/api/v2/configuration/schemas/edges/vnext/{schemaCategory}', 
        'GET', 
        { 'schemaCategory': schemaCategory }, 
        { 'pageSize': opts['pageSize'],'pageNumber': opts['pageNumber'] }, 
        {  }, 
        {  }, 
        null, 
        ['PureCloud Auth'], 
        ['application/json'], 
        ['application/json']
      );
    };


    /**
     * List schemas of a specific category (Deprecated)
     * 
     * @param {String} schemaCategory Schema category
     * @param {String} schemaType Schema type
     * @param {Object} opts Optional parameters
     * @param {Number} opts.pageSize Page size (default to 25)
     * @param {Number} opts.pageNumber Page number (default to 1)
     */
    this.getConfigurationSchemasEdgesVnextSchemaCategorySchemaType = function(schemaCategory, schemaType, opts) { 
      opts = opts || {};

      // verify the required parameter 'schemaCategory' is set
      if (schemaCategory === undefined || schemaCategory === null) {
        throw "Missing the required parameter 'schemaCategory' when calling getConfigurationSchemasEdgesVnextSchemaCategorySchemaType";
      }

      // verify the required parameter 'schemaType' is set
      if (schemaType === undefined || schemaType === null) {
        throw "Missing the required parameter 'schemaType' when calling getConfigurationSchemasEdgesVnextSchemaCategorySchemaType";
      }


      return this.apiClient.callApi(
        '/api/v2/configuration/schemas/edges/vnext/{schemaCategory}/{schemaType}', 
        'GET', 
        { 'schemaCategory': schemaCategory,'schemaType': schemaType }, 
        { 'pageSize': opts['pageSize'],'pageNumber': opts['pageNumber'] }, 
        {  }, 
        {  }, 
        null, 
        ['PureCloud Auth'], 
        ['application/json'], 
        ['application/json']
      );
    };


    /**
     * Get a json schema (Deprecated)
     * 
     * @param {String} schemaCategory Schema category
     * @param {String} schemaType Schema type
     * @param {String} schemaId Schema ID
     */
    this.getConfigurationSchemasEdgesVnextSchemaCategorySchemaTypeSchemaId = function(schemaCategory, schemaType, schemaId) { 

      // verify the required parameter 'schemaCategory' is set
      if (schemaCategory === undefined || schemaCategory === null) {
        throw "Missing the required parameter 'schemaCategory' when calling getConfigurationSchemasEdgesVnextSchemaCategorySchemaTypeSchemaId";
      }

      // verify the required parameter 'schemaType' is set
      if (schemaType === undefined || schemaType === null) {
        throw "Missing the required parameter 'schemaType' when calling getConfigurationSchemasEdgesVnextSchemaCategorySchemaTypeSchemaId";
      }

      // verify the required parameter 'schemaId' is set
      if (schemaId === undefined || schemaId === null) {
        throw "Missing the required parameter 'schemaId' when calling getConfigurationSchemasEdgesVnextSchemaCategorySchemaTypeSchemaId";
      }


      return this.apiClient.callApi(
        '/api/v2/configuration/schemas/edges/vnext/{schemaCategory}/{schemaType}/{schemaId}', 
        'GET', 
        { 'schemaCategory': schemaCategory,'schemaType': schemaType,'schemaId': schemaId }, 
        {  }, 
        {  }, 
        {  }, 
        null, 
        ['PureCloud Auth'], 
        ['application/json'], 
        ['application/json']
      );
    };


    /**
     * Get metadata for a schema (Deprecated)
     * 
     * @param {String} schemaCategory Schema category
     * @param {String} schemaType Schema type
     * @param {String} schemaId Schema ID
     * @param {String} extensionType extension
     * @param {String} metadataId Metadata ID
     * @param {Object} opts Optional parameters
     * @param {String} opts.type Type
     */
    this.getConfigurationSchemasEdgesVnextSchemaCategorySchemaTypeSchemaIdExtensionTypeMetadataId = function(schemaCategory, schemaType, schemaId, extensionType, metadataId, opts) { 
      opts = opts || {};

      // verify the required parameter 'schemaCategory' is set
      if (schemaCategory === undefined || schemaCategory === null) {
        throw "Missing the required parameter 'schemaCategory' when calling getConfigurationSchemasEdgesVnextSchemaCategorySchemaTypeSchemaIdExtensionTypeMetadataId";
      }

      // verify the required parameter 'schemaType' is set
      if (schemaType === undefined || schemaType === null) {
        throw "Missing the required parameter 'schemaType' when calling getConfigurationSchemasEdgesVnextSchemaCategorySchemaTypeSchemaIdExtensionTypeMetadataId";
      }

      // verify the required parameter 'schemaId' is set
      if (schemaId === undefined || schemaId === null) {
        throw "Missing the required parameter 'schemaId' when calling getConfigurationSchemasEdgesVnextSchemaCategorySchemaTypeSchemaIdExtensionTypeMetadataId";
      }

      // verify the required parameter 'extensionType' is set
      if (extensionType === undefined || extensionType === null) {
        throw "Missing the required parameter 'extensionType' when calling getConfigurationSchemasEdgesVnextSchemaCategorySchemaTypeSchemaIdExtensionTypeMetadataId";
      }

      // verify the required parameter 'metadataId' is set
      if (metadataId === undefined || metadataId === null) {
        throw "Missing the required parameter 'metadataId' when calling getConfigurationSchemasEdgesVnextSchemaCategorySchemaTypeSchemaIdExtensionTypeMetadataId";
      }


      return this.apiClient.callApi(
        '/api/v2/configuration/schemas/edges/vnext/{schemaCategory}/{schemaType}/{schemaId}/{extensionType}/{metadataId}', 
        'GET', 
        { 'schemaCategory': schemaCategory,'schemaType': schemaType,'schemaId': schemaId,'extensionType': extensionType,'metadataId': metadataId }, 
        { 'type': opts['type'] }, 
        {  }, 
        {  }, 
        null, 
        ['PureCloud Auth'], 
        ['application/json'], 
        ['application/json']
      );
    };


    /**
     * Get edge.
     * 
     * @param {String} edgeId Edge ID
     * @param {Object} opts Optional parameters
     * @param {Array.<String>} opts.expand Fields to expand in the response, comma-separated
     */
    this.getTelephonyProvidersEdge = function(edgeId, opts) { 
      opts = opts || {};

      // verify the required parameter 'edgeId' is set
      if (edgeId === undefined || edgeId === null) {
        throw "Missing the required parameter 'edgeId' when calling getTelephonyProvidersEdge";
      }


      return this.apiClient.callApi(
        '/api/v2/telephony/providers/edges/{edgeId}', 
        'GET', 
        { 'edgeId': edgeId }, 
        { 'expand': this.apiClient.buildCollectionParam(opts['expand'], 'multi') }, 
        {  }, 
        {  }, 
        null, 
        ['PureCloud Auth'], 
        ['application/json'], 
        ['application/json']
      );
    };


    /**
     * Get line
     * 
     * @param {String} edgeId Edge ID
     * @param {String} lineId Line ID
     */
    this.getTelephonyProvidersEdgeLine = function(edgeId, lineId) { 

      // verify the required parameter 'edgeId' is set
      if (edgeId === undefined || edgeId === null) {
        throw "Missing the required parameter 'edgeId' when calling getTelephonyProvidersEdgeLine";
      }

      // verify the required parameter 'lineId' is set
      if (lineId === undefined || lineId === null) {
        throw "Missing the required parameter 'lineId' when calling getTelephonyProvidersEdgeLine";
      }


      return this.apiClient.callApi(
        '/api/v2/telephony/providers/edges/{edgeId}/lines/{lineId}', 
        'GET', 
        { 'edgeId': edgeId,'lineId': lineId }, 
        {  }, 
        {  }, 
        {  }, 
        null, 
        ['PureCloud Auth'], 
        ['application/json'], 
        ['application/json']
      );
    };


    /**
     * Get the list of lines.
     * 
     * @param {String} edgeId Edge ID
     * @param {Object} opts Optional parameters
     * @param {Number} opts.pageSize Page size (default to 25)
     * @param {Number} opts.pageNumber Page number (default to 1)
     */
    this.getTelephonyProvidersEdgeLines = function(edgeId, opts) { 
      opts = opts || {};

      // verify the required parameter 'edgeId' is set
      if (edgeId === undefined || edgeId === null) {
        throw "Missing the required parameter 'edgeId' when calling getTelephonyProvidersEdgeLines";
      }


      return this.apiClient.callApi(
        '/api/v2/telephony/providers/edges/{edgeId}/lines', 
        'GET', 
        { 'edgeId': edgeId }, 
        { 'pageSize': opts['pageSize'],'pageNumber': opts['pageNumber'] }, 
        {  }, 
        {  }, 
        null, 
        ['PureCloud Auth'], 
        ['application/json'], 
        ['application/json']
      );
    };


    /**
     * Get an edge logical interface
     * 
     * @param {String} edgeId Edge ID
     * @param {String} interfaceId Interface ID
     * @param {Object} opts Optional parameters
     * @param {Array.<String>} opts.expand Field to expand in the response
     */
    this.getTelephonyProvidersEdgeLogicalinterface = function(edgeId, interfaceId, opts) { 
      opts = opts || {};

      // verify the required parameter 'edgeId' is set
      if (edgeId === undefined || edgeId === null) {
        throw "Missing the required parameter 'edgeId' when calling getTelephonyProvidersEdgeLogicalinterface";
      }

      // verify the required parameter 'interfaceId' is set
      if (interfaceId === undefined || interfaceId === null) {
        throw "Missing the required parameter 'interfaceId' when calling getTelephonyProvidersEdgeLogicalinterface";
      }


      return this.apiClient.callApi(
        '/api/v2/telephony/providers/edges/{edgeId}/logicalinterfaces/{interfaceId}', 
        'GET', 
        { 'edgeId': edgeId,'interfaceId': interfaceId }, 
        { 'expand': this.apiClient.buildCollectionParam(opts['expand'], 'multi') }, 
        {  }, 
        {  }, 
        null, 
        ['PureCloud Auth'], 
        ['application/json'], 
        ['application/json']
      );
    };


    /**
     * Get edge logical interfaces.
     * Retrieve a list of all configured logical interfaces from a specific edge.
     * @param {String} edgeId Edge ID
     * @param {Object} opts Optional parameters
     * @param {Array.<String>} opts.expand Field to expand in the response
     */
    this.getTelephonyProvidersEdgeLogicalinterfaces = function(edgeId, opts) { 
      opts = opts || {};

      // verify the required parameter 'edgeId' is set
      if (edgeId === undefined || edgeId === null) {
        throw "Missing the required parameter 'edgeId' when calling getTelephonyProvidersEdgeLogicalinterfaces";
      }


      return this.apiClient.callApi(
        '/api/v2/telephony/providers/edges/{edgeId}/logicalinterfaces', 
        'GET', 
        { 'edgeId': edgeId }, 
        { 'expand': this.apiClient.buildCollectionParam(opts['expand'], 'multi') }, 
        {  }, 
        {  }, 
        null, 
        ['PureCloud Auth'], 
        ['application/json'], 
        ['application/json']
      );
    };


    /**
     * Get an Edge logs job.
     * 
     * @param {String} edgeId Edge ID
     * @param {String} jobId Job ID
     */
    this.getTelephonyProvidersEdgeLogsJob = function(edgeId, jobId) { 

      // verify the required parameter 'edgeId' is set
      if (edgeId === undefined || edgeId === null) {
        throw "Missing the required parameter 'edgeId' when calling getTelephonyProvidersEdgeLogsJob";
      }

      // verify the required parameter 'jobId' is set
      if (jobId === undefined || jobId === null) {
        throw "Missing the required parameter 'jobId' when calling getTelephonyProvidersEdgeLogsJob";
      }


      return this.apiClient.callApi(
        '/api/v2/telephony/providers/edges/{edgeId}/logs/jobs/{jobId}', 
        'GET', 
        { 'edgeId': edgeId,'jobId': jobId }, 
        {  }, 
        {  }, 
        {  }, 
        null, 
        ['PureCloud Auth'], 
        ['application/json'], 
        ['application/json']
      );
    };


    /**
     * Get edge physical interface.
     * Retrieve a physical interface from a specific edge.
     * @param {String} edgeId Edge ID
     * @param {String} interfaceId Interface ID
     */
    this.getTelephonyProvidersEdgePhysicalinterface = function(edgeId, interfaceId) { 

      // verify the required parameter 'edgeId' is set
      if (edgeId === undefined || edgeId === null) {
        throw "Missing the required parameter 'edgeId' when calling getTelephonyProvidersEdgePhysicalinterface";
      }

      // verify the required parameter 'interfaceId' is set
      if (interfaceId === undefined || interfaceId === null) {
        throw "Missing the required parameter 'interfaceId' when calling getTelephonyProvidersEdgePhysicalinterface";
      }


      return this.apiClient.callApi(
        '/api/v2/telephony/providers/edges/{edgeId}/physicalinterfaces/{interfaceId}', 
        'GET', 
        { 'edgeId': edgeId,'interfaceId': interfaceId }, 
        {  }, 
        {  }, 
        {  }, 
        null, 
        ['PureCloud Auth'], 
        ['application/json'], 
        ['application/json']
      );
    };


    /**
     * Retrieve a list of all configured physical interfaces from a specific edge.
     * 
     * @param {String} edgeId Edge ID
     */
    this.getTelephonyProvidersEdgePhysicalinterfaces = function(edgeId) { 

      // verify the required parameter 'edgeId' is set
      if (edgeId === undefined || edgeId === null) {
        throw "Missing the required parameter 'edgeId' when calling getTelephonyProvidersEdgePhysicalinterfaces";
      }


      return this.apiClient.callApi(
        '/api/v2/telephony/providers/edges/{edgeId}/physicalinterfaces', 
        'GET', 
        { 'edgeId': edgeId }, 
        {  }, 
        {  }, 
        {  }, 
        null, 
        ['PureCloud Auth'], 
        ['application/json'], 
        ['application/json']
      );
    };


    /**
     * Get the setup package for a locally deployed edge device. This is needed to complete the setup process for the virtual edge.
     * 
     * @param {String} edgeId Edge ID
     */
    this.getTelephonyProvidersEdgeSetuppackage = function(edgeId) { 

      // verify the required parameter 'edgeId' is set
      if (edgeId === undefined || edgeId === null) {
        throw "Missing the required parameter 'edgeId' when calling getTelephonyProvidersEdgeSetuppackage";
      }


      return this.apiClient.callApi(
        '/api/v2/telephony/providers/edges/{edgeId}/setuppackage', 
        'GET', 
        { 'edgeId': edgeId }, 
        {  }, 
        {  }, 
        {  }, 
        null, 
        ['PureCloud Auth'], 
        ['application/json'], 
        ['application/json']
      );
    };


    /**
     * Gets software update status information about any edge.
     * 
     * @param {String} edgeId Edge ID
     */
    this.getTelephonyProvidersEdgeSoftwareupdate = function(edgeId) { 

      // verify the required parameter 'edgeId' is set
      if (edgeId === undefined || edgeId === null) {
        throw "Missing the required parameter 'edgeId' when calling getTelephonyProvidersEdgeSoftwareupdate";
      }


      return this.apiClient.callApi(
        '/api/v2/telephony/providers/edges/{edgeId}/softwareupdate', 
        'GET', 
        { 'edgeId': edgeId }, 
        {  }, 
        {  }, 
        {  }, 
        null, 
        ['PureCloud Auth'], 
        ['application/json'], 
        ['application/json']
      );
    };


    /**
     * Gets all the available software versions for this edge.
     * 
     * @param {String} edgeId Edge ID
     */
    this.getTelephonyProvidersEdgeSoftwareversions = function(edgeId) { 

      // verify the required parameter 'edgeId' is set
      if (edgeId === undefined || edgeId === null) {
        throw "Missing the required parameter 'edgeId' when calling getTelephonyProvidersEdgeSoftwareversions";
      }


      return this.apiClient.callApi(
        '/api/v2/telephony/providers/edges/{edgeId}/softwareversions', 
        'GET', 
        { 'edgeId': edgeId }, 
        {  }, 
        {  }, 
        {  }, 
        null, 
        ['PureCloud Auth'], 
        ['application/json'], 
        ['application/json']
      );
    };


    /**
     * Get the list of available trunks for the given Edge.
     * Trunks are created by assigning trunk base settings to an Edge or Edge Group.
     * @param {String} edgeId Edge ID
     * @param {Object} opts Optional parameters
     * @param {Number} opts.pageNumber Page number (default to 1)
     * @param {Number} opts.pageSize Page size (default to 25)
     * @param {String} opts.sortBy Value by which to sort (default to name)
     * @param {String} opts.sortOrder Sort order (default to ASC)
     * @param {String} opts.trunkBaseId Filter by Trunk Base Ids
     * @param {module:purecloud-platform-client-v2/model/String} opts.trunkType Filter by a Trunk type
     */
    this.getTelephonyProvidersEdgeTrunks = function(edgeId, opts) { 
      opts = opts || {};

      // verify the required parameter 'edgeId' is set
      if (edgeId === undefined || edgeId === null) {
        throw "Missing the required parameter 'edgeId' when calling getTelephonyProvidersEdgeTrunks";
      }


      return this.apiClient.callApi(
        '/api/v2/telephony/providers/edges/{edgeId}/trunks', 
        'GET', 
        { 'edgeId': edgeId }, 
        { 'pageNumber': opts['pageNumber'],'pageSize': opts['pageSize'],'sortBy': opts['sortBy'],'sortOrder': opts['sortOrder'],'trunkBase.id': opts['trunkBaseId'],'trunkType': opts['trunkType'] }, 
        {  }, 
        {  }, 
        null, 
        ['PureCloud Auth'], 
        ['application/json'], 
        ['application/json']
      );
    };


    /**
     * Get the list of edges.
     * 
     * @param {Object} opts Optional parameters
     * @param {Number} opts.pageSize Page size (default to 25)
     * @param {Number} opts.pageNumber Page number (default to 1)
     * @param {String} opts.name Name
     * @param {String} opts.siteId Filter by site.id
     * @param {String} opts.edgeGroupId Filter by edgeGroup.id
     * @param {String} opts.sortBy Sort by (default to name)
     * @param {Boolean} opts.managed Filter by managed
     */
    this.getTelephonyProvidersEdges = function(opts) { 
      opts = opts || {};


      return this.apiClient.callApi(
        '/api/v2/telephony/providers/edges', 
        'GET', 
        {  }, 
        { 'pageSize': opts['pageSize'],'pageNumber': opts['pageNumber'],'name': opts['name'],'site.id': opts['siteId'],'edgeGroup.id': opts['edgeGroupId'],'sortBy': opts['sortBy'],'managed': opts['managed'] }, 
        {  }, 
        {  }, 
        null, 
        ['PureCloud Auth'], 
        ['application/json'], 
        ['application/json']
      );
    };


    /**
     * Get the list of available languages.
     * 
     */
    this.getTelephonyProvidersEdgesAvailablelanguages = function() { 


      return this.apiClient.callApi(
        '/api/v2/telephony/providers/edges/availablelanguages', 
        'GET', 
        {  }, 
        {  }, 
        {  }, 
        {  }, 
        null, 
        ['PureCloud Auth'], 
        ['application/json'], 
        ['application/json']
      );
    };


    /**
     * Get the list of certificate authorities.
     * 
     */
    this.getTelephonyProvidersEdgesCertificateauthorities = function() { 


      return this.apiClient.callApi(
        '/api/v2/telephony/providers/edges/certificateauthorities', 
        'GET', 
        {  }, 
        {  }, 
        {  }, 
        {  }, 
        null, 
        ['PureCloud Auth'], 
        ['application/json'], 
        ['application/json']
      );
    };


    /**
     * Get a certificate authority.
     * 
     * @param {String} certificateId Certificate ID
     */
    this.getTelephonyProvidersEdgesCertificateauthority = function(certificateId) { 

      // verify the required parameter 'certificateId' is set
      if (certificateId === undefined || certificateId === null) {
        throw "Missing the required parameter 'certificateId' when calling getTelephonyProvidersEdgesCertificateauthority";
      }


      return this.apiClient.callApi(
        '/api/v2/telephony/providers/edges/certificateauthorities/{certificateId}', 
        'GET', 
        { 'certificateId': certificateId }, 
        {  }, 
        {  }, 
        {  }, 
        null, 
        ['PureCloud Auth'], 
        ['application/json'], 
        ['application/json']
      );
    };


    /**
     * Get a DID by ID.
     * 
     * @param {String} didId DID ID
     */
    this.getTelephonyProvidersEdgesDid = function(didId) { 

      // verify the required parameter 'didId' is set
      if (didId === undefined || didId === null) {
        throw "Missing the required parameter 'didId' when calling getTelephonyProvidersEdgesDid";
      }


      return this.apiClient.callApi(
        '/api/v2/telephony/providers/edges/dids/{didId}', 
        'GET', 
        { 'didId': didId }, 
        {  }, 
        {  }, 
        {  }, 
        null, 
        ['PureCloud Auth'], 
        ['application/json'], 
        ['application/json']
      );
    };


    /**
     * Get a DID Pool by ID.
     * 
     * @param {String} didPoolId DID pool ID
     */
    this.getTelephonyProvidersEdgesDidpool = function(didPoolId) { 

      // verify the required parameter 'didPoolId' is set
      if (didPoolId === undefined || didPoolId === null) {
        throw "Missing the required parameter 'didPoolId' when calling getTelephonyProvidersEdgesDidpool";
      }


      return this.apiClient.callApi(
        '/api/v2/telephony/providers/edges/didpools/{didPoolId}', 
        'GET', 
        { 'didPoolId': didPoolId }, 
        {  }, 
        {  }, 
        {  }, 
        null, 
        ['PureCloud Auth'], 
        ['application/json'], 
        ['application/json']
      );
    };


    /**
     * Get a listing of DID Pools
     * 
     * @param {Object} opts Optional parameters
     * @param {Number} opts.pageSize Page size (default to 25)
     * @param {Number} opts.pageNumber Page number (default to 1)
     * @param {String} opts.sortBy Sort by (default to number)
     */
    this.getTelephonyProvidersEdgesDidpools = function(opts) { 
      opts = opts || {};


      return this.apiClient.callApi(
        '/api/v2/telephony/providers/edges/didpools', 
        'GET', 
        {  }, 
        { 'pageSize': opts['pageSize'],'pageNumber': opts['pageNumber'],'sortBy': opts['sortBy'] }, 
        {  }, 
        {  }, 
        null, 
        ['PureCloud Auth'], 
        ['application/json'], 
        ['application/json']
      );
    };


    /**
     * Get a listing of DIDs
     * 
     * @param {Object} opts Optional parameters
     * @param {Number} opts.pageSize Page size (default to 25)
     * @param {Number} opts.pageNumber Page number (default to 1)
     * @param {String} opts.sortBy Sort by (default to number)
     * @param {String} opts.sortOrder Sort order (default to ASC)
     * @param {String} opts.phoneNumber Filter by phoneNumber
     */
    this.getTelephonyProvidersEdgesDids = function(opts) { 
      opts = opts || {};


      return this.apiClient.callApi(
        '/api/v2/telephony/providers/edges/dids', 
        'GET', 
        {  }, 
        { 'pageSize': opts['pageSize'],'pageNumber': opts['pageNumber'],'sortBy': opts['sortBy'],'sortOrder': opts['sortOrder'],'phoneNumber': opts['phoneNumber'] }, 
        {  }, 
        {  }, 
        null, 
        ['PureCloud Auth'], 
        ['application/json'], 
        ['application/json']
      );
    };


    /**
     * Get edge group.
     * 
     * @param {String} edgeGroupId Edge group ID
     * @param {Object} opts Optional parameters
     * @param {Array.<String>} opts.expand Fields to expand in the response
     */
    this.getTelephonyProvidersEdgesEdgegroup = function(edgeGroupId, opts) { 
      opts = opts || {};

      // verify the required parameter 'edgeGroupId' is set
      if (edgeGroupId === undefined || edgeGroupId === null) {
        throw "Missing the required parameter 'edgeGroupId' when calling getTelephonyProvidersEdgesEdgegroup";
      }


      return this.apiClient.callApi(
        '/api/v2/telephony/providers/edges/edgegroups/{edgeGroupId}', 
        'GET', 
        { 'edgeGroupId': edgeGroupId }, 
        { 'expand': this.apiClient.buildCollectionParam(opts['expand'], 'multi') }, 
        {  }, 
        {  }, 
        null, 
        ['PureCloud Auth'], 
        ['application/json'], 
        ['application/json']
      );
    };


    /**
     * Gets the edge trunk base associated with the edge group
     * 
     * @param {String} edgegroupId Edge Group ID
     * @param {String} edgetrunkbaseId Edge Trunk Base ID
     */
    this.getTelephonyProvidersEdgesEdgegroupEdgetrunkbasis = function(edgegroupId, edgetrunkbaseId) { 

      // verify the required parameter 'edgegroupId' is set
      if (edgegroupId === undefined || edgegroupId === null) {
        throw "Missing the required parameter 'edgegroupId' when calling getTelephonyProvidersEdgesEdgegroupEdgetrunkbasis";
      }

      // verify the required parameter 'edgetrunkbaseId' is set
      if (edgetrunkbaseId === undefined || edgetrunkbaseId === null) {
        throw "Missing the required parameter 'edgetrunkbaseId' when calling getTelephonyProvidersEdgesEdgegroupEdgetrunkbasis";
      }


      return this.apiClient.callApi(
        '/api/v2/telephony/providers/edges/edgegroups/{edgegroupId}/edgetrunkbases/{edgetrunkbaseId}', 
        'GET', 
        { 'edgegroupId': edgegroupId,'edgetrunkbaseId': edgetrunkbaseId }, 
        {  }, 
        {  }, 
        {  }, 
        null, 
        ['PureCloud Auth'], 
        ['application/json'], 
        ['application/json']
      );
    };


    /**
     * Get the list of edge groups.
     * 
     * @param {Object} opts Optional parameters
     * @param {Number} opts.pageSize Page size (default to 25)
     * @param {Number} opts.pageNumber Page number (default to 1)
     * @param {String} opts.name Name
     * @param {String} opts.sortBy Sort by (default to name)
     * @param {Boolean} opts.managed Filter by managed
     */
    this.getTelephonyProvidersEdgesEdgegroups = function(opts) { 
      opts = opts || {};


      return this.apiClient.callApi(
        '/api/v2/telephony/providers/edges/edgegroups', 
        'GET', 
        {  }, 
        { 'pageSize': opts['pageSize'],'pageNumber': opts['pageNumber'],'name': opts['name'],'sortBy': opts['sortBy'],'managed': opts['managed'] }, 
        {  }, 
        {  }, 
        null, 
        ['PureCloud Auth'], 
        ['application/json'], 
        ['application/json']
      );
    };


    /**
     * Get the edge version report.
     * The report will not have consistent data about the edge version(s) until all edges have been reset.
     */
    this.getTelephonyProvidersEdgesEdgeversionreport = function() { 


      return this.apiClient.callApi(
        '/api/v2/telephony/providers/edges/edgeversionreport', 
        'GET', 
        {  }, 
        {  }, 
        {  }, 
        {  }, 
        null, 
        ['PureCloud Auth'], 
        ['application/json'], 
        ['application/json']
      );
    };


    /**
     * Get endpoint
     * 
     * @param {String} endpointId Endpoint ID
     */
    this.getTelephonyProvidersEdgesEndpoint = function(endpointId) { 

      // verify the required parameter 'endpointId' is set
      if (endpointId === undefined || endpointId === null) {
        throw "Missing the required parameter 'endpointId' when calling getTelephonyProvidersEdgesEndpoint";
      }


      return this.apiClient.callApi(
        '/api/v2/telephony/providers/edges/endpoints/{endpointId}', 
        'GET', 
        { 'endpointId': endpointId }, 
        {  }, 
        {  }, 
        {  }, 
        null, 
        ['PureCloud Auth'], 
        ['application/json'], 
        ['application/json']
      );
    };


    /**
     * Get endpoints
     * 
     * @param {Object} opts Optional parameters
     * @param {Number} opts.pageSize Page size (default to 25)
     * @param {Number} opts.pageNumber Page number (default to 1)
     * @param {String} opts.name Name
     * @param {String} opts.sortBy Sort by (default to name)
     */
    this.getTelephonyProvidersEdgesEndpoints = function(opts) { 
      opts = opts || {};


      return this.apiClient.callApi(
        '/api/v2/telephony/providers/edges/endpoints', 
        'GET', 
        {  }, 
        { 'pageSize': opts['pageSize'],'pageNumber': opts['pageNumber'],'name': opts['name'],'sortBy': opts['sortBy'] }, 
        {  }, 
        {  }, 
        null, 
        ['PureCloud Auth'], 
        ['application/json'], 
        ['application/json']
      );
    };


    /**
     * Get an extension by ID.
     * 
     * @param {String} extensionId Extension ID
     */
    this.getTelephonyProvidersEdgesExtension = function(extensionId) { 

      // verify the required parameter 'extensionId' is set
      if (extensionId === undefined || extensionId === null) {
        throw "Missing the required parameter 'extensionId' when calling getTelephonyProvidersEdgesExtension";
      }


      return this.apiClient.callApi(
        '/api/v2/telephony/providers/edges/extensions/{extensionId}', 
        'GET', 
        { 'extensionId': extensionId }, 
        {  }, 
        {  }, 
        {  }, 
        null, 
        ['PureCloud Auth'], 
        ['application/json'], 
        ['application/json']
      );
    };


    /**
     * Get an extension pool by ID
     * 
     * @param {String} extensionPoolId Extension pool ID
     */
    this.getTelephonyProvidersEdgesExtensionpool = function(extensionPoolId) { 

      // verify the required parameter 'extensionPoolId' is set
      if (extensionPoolId === undefined || extensionPoolId === null) {
        throw "Missing the required parameter 'extensionPoolId' when calling getTelephonyProvidersEdgesExtensionpool";
      }


      return this.apiClient.callApi(
        '/api/v2/telephony/providers/edges/extensionpools/{extensionPoolId}', 
        'GET', 
        { 'extensionPoolId': extensionPoolId }, 
        {  }, 
        {  }, 
        {  }, 
        null, 
        ['PureCloud Auth'], 
        ['application/json'], 
        ['application/json']
      );
    };


    /**
     * Get a listing of extension pools
     * 
     * @param {Object} opts Optional parameters
     * @param {Number} opts.pageSize Page size (default to 25)
     * @param {Number} opts.pageNumber Page number (default to 1)
     * @param {String} opts.sortBy Sort by (default to startNumber)
     * @param {String} opts._number Number
     */
    this.getTelephonyProvidersEdgesExtensionpools = function(opts) { 
      opts = opts || {};


      return this.apiClient.callApi(
        '/api/v2/telephony/providers/edges/extensionpools', 
        'GET', 
        {  }, 
        { 'pageSize': opts['pageSize'],'pageNumber': opts['pageNumber'],'sortBy': opts['sortBy'],'number': opts['_number'] }, 
        {  }, 
        {  }, 
        null, 
        ['PureCloud Auth'], 
        ['application/json'], 
        ['application/json']
      );
    };


    /**
     * Get a listing of extensions
     * 
     * @param {Object} opts Optional parameters
     * @param {Number} opts.pageSize Page size (default to 25)
     * @param {Number} opts.pageNumber Page number (default to 1)
     * @param {String} opts.sortBy Sort by (default to number)
     * @param {String} opts.sortOrder Sort order (default to ASC)
     * @param {String} opts._number Filter by number
     */
    this.getTelephonyProvidersEdgesExtensions = function(opts) { 
      opts = opts || {};


      return this.apiClient.callApi(
        '/api/v2/telephony/providers/edges/extensions', 
        'GET', 
        {  }, 
        { 'pageSize': opts['pageSize'],'pageNumber': opts['pageNumber'],'sortBy': opts['sortBy'],'sortOrder': opts['sortOrder'],'number': opts['_number'] }, 
        {  }, 
        {  }, 
        null, 
        ['PureCloud Auth'], 
        ['application/json'], 
        ['application/json']
      );
    };


    /**
     * Get a Line by ID
     * 
     * @param {String} lineId Line ID
     */
    this.getTelephonyProvidersEdgesLine = function(lineId) { 

      // verify the required parameter 'lineId' is set
      if (lineId === undefined || lineId === null) {
        throw "Missing the required parameter 'lineId' when calling getTelephonyProvidersEdgesLine";
      }


      return this.apiClient.callApi(
        '/api/v2/telephony/providers/edges/lines/{lineId}', 
        'GET', 
        { 'lineId': lineId }, 
        {  }, 
        {  }, 
        {  }, 
        null, 
        ['PureCloud Auth'], 
        ['application/json'], 
        ['application/json']
      );
    };


    /**
     * Get a line base settings object by ID
     * 
     * @param {String} lineBaseId Line base ID
     */
    this.getTelephonyProvidersEdgesLinebasesetting = function(lineBaseId) { 

      // verify the required parameter 'lineBaseId' is set
      if (lineBaseId === undefined || lineBaseId === null) {
        throw "Missing the required parameter 'lineBaseId' when calling getTelephonyProvidersEdgesLinebasesetting";
      }


      return this.apiClient.callApi(
        '/api/v2/telephony/providers/edges/linebasesettings/{lineBaseId}', 
        'GET', 
        { 'lineBaseId': lineBaseId }, 
        {  }, 
        {  }, 
        {  }, 
        null, 
        ['PureCloud Auth'], 
        ['application/json'], 
        ['application/json']
      );
    };


    /**
     * Get a listing of line base settings objects
     * 
     * @param {Object} opts Optional parameters
     * @param {Number} opts.pageNumber Page number (default to 1)
     * @param {Number} opts.pageSize Page size (default to 25)
     * @param {String} opts.sortBy Value by which to sort (default to name)
     * @param {String} opts.sortOrder Sort order (default to ASC)
     */
    this.getTelephonyProvidersEdgesLinebasesettings = function(opts) { 
      opts = opts || {};


      return this.apiClient.callApi(
        '/api/v2/telephony/providers/edges/linebasesettings', 
        'GET', 
        {  }, 
        { 'pageNumber': opts['pageNumber'],'pageSize': opts['pageSize'],'sortBy': opts['sortBy'],'sortOrder': opts['sortOrder'] }, 
        {  }, 
        {  }, 
        null, 
        ['PureCloud Auth'], 
        ['application/json'], 
        ['application/json']
      );
    };


    /**
     * Get a list of Lines
     * 
     * @param {Object} opts Optional parameters
     * @param {Number} opts.pageSize Page size (default to 25)
     * @param {Number} opts.pageNumber Page number (default to 1)
     * @param {String} opts.name Name
     * @param {String} opts.sortBy Value by which to sort (default to name)
     * @param {Array.<String>} opts.expand Fields to expand in the response, comma-separated
     */
    this.getTelephonyProvidersEdgesLines = function(opts) { 
      opts = opts || {};


      return this.apiClient.callApi(
        '/api/v2/telephony/providers/edges/lines', 
        'GET', 
        {  }, 
        { 'pageSize': opts['pageSize'],'pageNumber': opts['pageNumber'],'name': opts['name'],'sortBy': opts['sortBy'],'expand': this.apiClient.buildCollectionParam(opts['expand'], 'multi') }, 
        {  }, 
        {  }, 
        null, 
        ['PureCloud Auth'], 
        ['application/json'], 
        ['application/json']
      );
    };


    /**
     * Get a Line instance template based on a Line Base Settings object. This object can then be modified and saved as a new Line instance
     * 
     * @param {String} lineBaseSettingsId The id of a Line Base Settings object upon which to base this Line
     */
    this.getTelephonyProvidersEdgesLinesTemplate = function(lineBaseSettingsId) { 

      // verify the required parameter 'lineBaseSettingsId' is set
      if (lineBaseSettingsId === undefined || lineBaseSettingsId === null) {
        throw "Missing the required parameter 'lineBaseSettingsId' when calling getTelephonyProvidersEdgesLinesTemplate";
      }


      return this.apiClient.callApi(
        '/api/v2/telephony/providers/edges/lines/template', 
        'GET', 
        {  }, 
        { 'lineBaseSettingsId': lineBaseSettingsId }, 
        {  }, 
        {  }, 
        null, 
        ['PureCloud Auth'], 
        ['application/json'], 
        ['application/json']
      );
    };


    /**
     * Get edge logical interfaces.
     * Retrieve the configured logical interfaces for a list edges. Only 100 edges can be requested at a time.
     * @param {String} edgeIds Comma separated list of Edge Id&#39;s
     * @param {Object} opts Optional parameters
     * @param {Array.<String>} opts.expand Field to expand in the response
     */
    this.getTelephonyProvidersEdgesLogicalinterfaces = function(edgeIds, opts) { 
      opts = opts || {};

      // verify the required parameter 'edgeIds' is set
      if (edgeIds === undefined || edgeIds === null) {
        throw "Missing the required parameter 'edgeIds' when calling getTelephonyProvidersEdgesLogicalinterfaces";
      }


      return this.apiClient.callApi(
        '/api/v2/telephony/providers/edges/logicalinterfaces', 
        'GET', 
        {  }, 
        { 'edgeIds': edgeIds,'expand': this.apiClient.buildCollectionParam(opts['expand'], 'multi') }, 
        {  }, 
        {  }, 
        null, 
        ['PureCloud Auth'], 
        ['application/json'], 
        ['application/json']
      );
    };


    /**
     * Get outbound route
     * 
     * @param {String} outboundRouteId Outbound route ID
     */
    this.getTelephonyProvidersEdgesOutboundroute = function(outboundRouteId) { 

      // verify the required parameter 'outboundRouteId' is set
      if (outboundRouteId === undefined || outboundRouteId === null) {
        throw "Missing the required parameter 'outboundRouteId' when calling getTelephonyProvidersEdgesOutboundroute";
      }


      return this.apiClient.callApi(
        '/api/v2/telephony/providers/edges/outboundroutes/{outboundRouteId}', 
        'GET', 
        { 'outboundRouteId': outboundRouteId }, 
        {  }, 
        {  }, 
        {  }, 
        null, 
        ['PureCloud Auth'], 
        ['application/json'], 
        ['application/json']
      );
    };


    /**
     * Get outbound routes
     * 
     * @param {Object} opts Optional parameters
     * @param {Number} opts.pageSize Page size (default to 25)
     * @param {Number} opts.pageNumber Page number (default to 1)
     * @param {String} opts.name Name
     * @param {String} opts.siteId Filter by site.id
     * @param {String} opts.sortBy Sort by (default to name)
     */
    this.getTelephonyProvidersEdgesOutboundroutes = function(opts) { 
      opts = opts || {};


      return this.apiClient.callApi(
        '/api/v2/telephony/providers/edges/outboundroutes', 
        'GET', 
        {  }, 
        { 'pageSize': opts['pageSize'],'pageNumber': opts['pageNumber'],'name': opts['name'],'site.id': opts['siteId'],'sortBy': opts['sortBy'] }, 
        {  }, 
        {  }, 
        null, 
        ['PureCloud Auth'], 
        ['application/json'], 
        ['application/json']
      );
    };


    /**
     * Get a Phone by ID
     * 
     * @param {String} phoneId Phone ID
     */
    this.getTelephonyProvidersEdgesPhone = function(phoneId) { 

      // verify the required parameter 'phoneId' is set
      if (phoneId === undefined || phoneId === null) {
        throw "Missing the required parameter 'phoneId' when calling getTelephonyProvidersEdgesPhone";
      }


      return this.apiClient.callApi(
        '/api/v2/telephony/providers/edges/phones/{phoneId}', 
        'GET', 
        { 'phoneId': phoneId }, 
        {  }, 
        {  }, 
        {  }, 
        null, 
        ['PureCloud Auth'], 
        ['application/json'], 
        ['application/json']
      );
    };


    /**
     * Get a Phone Base Settings object by ID
     * 
     * @param {String} phoneBaseId Phone base ID
     */
    this.getTelephonyProvidersEdgesPhonebasesetting = function(phoneBaseId) { 

      // verify the required parameter 'phoneBaseId' is set
      if (phoneBaseId === undefined || phoneBaseId === null) {
        throw "Missing the required parameter 'phoneBaseId' when calling getTelephonyProvidersEdgesPhonebasesetting";
      }


      return this.apiClient.callApi(
        '/api/v2/telephony/providers/edges/phonebasesettings/{phoneBaseId}', 
        'GET', 
        { 'phoneBaseId': phoneBaseId }, 
        {  }, 
        {  }, 
        {  }, 
        null, 
        ['PureCloud Auth'], 
        ['application/json'], 
        ['application/json']
      );
    };


    /**
     * Get a list of Phone Base Settings objects
     * 
     * @param {Object} opts Optional parameters
     * @param {Number} opts.pageSize Page size (default to 25)
     * @param {Number} opts.pageNumber Page number (default to 1)
     * @param {String} opts.sortBy Value by which to sort (default to name)
     * @param {String} opts.sortOrder Sort order (default to ASC)
     * @param {Array.<String>} opts.expand Fields to expand in the response, comma-separated
     * @param {String} opts.name Name
     */
    this.getTelephonyProvidersEdgesPhonebasesettings = function(opts) { 
      opts = opts || {};


      return this.apiClient.callApi(
        '/api/v2/telephony/providers/edges/phonebasesettings', 
        'GET', 
        {  }, 
        { 'pageSize': opts['pageSize'],'pageNumber': opts['pageNumber'],'sortBy': opts['sortBy'],'sortOrder': opts['sortOrder'],'expand': this.apiClient.buildCollectionParam(opts['expand'], 'multi'),'name': opts['name'] }, 
        {  }, 
        {  }, 
        null, 
        ['PureCloud Auth'], 
        ['application/json'], 
        ['application/json']
      );
    };


    /**
     * Get a list of available makes and models to create a new Phone Base Settings
     * 
     * @param {Object} opts Optional parameters
     * @param {Number} opts.pageSize Page size (default to 25)
     * @param {Number} opts.pageNumber Page number (default to 1)
     */
    this.getTelephonyProvidersEdgesPhonebasesettingsAvailablemetabases = function(opts) { 
      opts = opts || {};


      return this.apiClient.callApi(
        '/api/v2/telephony/providers/edges/phonebasesettings/availablemetabases', 
        'GET', 
        {  }, 
        { 'pageSize': opts['pageSize'],'pageNumber': opts['pageNumber'] }, 
        {  }, 
        {  }, 
        null, 
        ['PureCloud Auth'], 
        ['application/json'], 
        ['application/json']
      );
    };


    /**
     * Get a Phone Base Settings instance template from a given make and model. This object can then be modified and saved as a new Phone Base Settings instance
     * 
     * @param {String} phoneMetabaseId The id of a metabase object upon which to base this Phone Base Settings
     */
    this.getTelephonyProvidersEdgesPhonebasesettingsTemplate = function(phoneMetabaseId) { 

      // verify the required parameter 'phoneMetabaseId' is set
      if (phoneMetabaseId === undefined || phoneMetabaseId === null) {
        throw "Missing the required parameter 'phoneMetabaseId' when calling getTelephonyProvidersEdgesPhonebasesettingsTemplate";
      }


      return this.apiClient.callApi(
        '/api/v2/telephony/providers/edges/phonebasesettings/template', 
        'GET', 
        {  }, 
        { 'phoneMetabaseId': phoneMetabaseId }, 
        {  }, 
        {  }, 
        null, 
        ['PureCloud Auth'], 
        ['application/json'], 
        ['application/json']
      );
    };


    /**
     * Get a list of Phone Instances
     * 
     * @param {Object} opts Optional parameters
     * @param {Number} opts.pageNumber Page number (default to 1)
     * @param {Number} opts.pageSize Page size (default to 25)
     * @param {String} opts.sortBy Value by which to sort (default to name)
     * @param {String} opts.sortOrder Sort order (default to ASC)
     * @param {String} opts.siteId Filter by site.id
     * @param {String} opts.webRtcUserId Filter by webRtcUser.id
     * @param {String} opts.phoneBaseSettingsId Filter by phoneBaseSettings.id
     * @param {String} opts.linesLoggedInUserId Filter by lines.loggedInUser.id
     * @param {String} opts.linesDefaultForUserId Filter by lines.defaultForUser.id
     * @param {String} opts.phoneHardwareId Filter by phone_hardwareId
     * @param {String} opts.linesId Filter by lines.id
     * @param {String} opts.linesName Filter by lines.name
     * @param {Array.<String>} opts.expand Fields to expand in the response, comma-separated
     * @param {Array.<String>} opts.fields Fields and properties to get, comma-separated
     */
    this.getTelephonyProvidersEdgesPhones = function(opts) { 
      opts = opts || {};


      return this.apiClient.callApi(
        '/api/v2/telephony/providers/edges/phones', 
        'GET', 
        {  }, 
        { 'pageNumber': opts['pageNumber'],'pageSize': opts['pageSize'],'sortBy': opts['sortBy'],'sortOrder': opts['sortOrder'],'site.id': opts['siteId'],'webRtcUser.id': opts['webRtcUserId'],'phoneBaseSettings.id': opts['phoneBaseSettingsId'],'lines.loggedInUser.id': opts['linesLoggedInUserId'],'lines.defaultForUser.id': opts['linesDefaultForUserId'],'phone_hardwareId': opts['phoneHardwareId'],'lines.id': opts['linesId'],'lines.name': opts['linesName'],'expand': this.apiClient.buildCollectionParam(opts['expand'], 'multi'),'fields': this.apiClient.buildCollectionParam(opts['fields'], 'multi') }, 
        {  }, 
        {  }, 
        null, 
        ['PureCloud Auth'], 
        ['application/json'], 
        ['application/json']
      );
    };


    /**
     * Get a Phone instance template based on a Phone Base Settings object. This object can then be modified and saved as a new Phone instance
     * 
     * @param {String} phoneBaseSettingsId The id of a Phone Base Settings object upon which to base this Phone
     */
    this.getTelephonyProvidersEdgesPhonesTemplate = function(phoneBaseSettingsId) { 

      // verify the required parameter 'phoneBaseSettingsId' is set
      if (phoneBaseSettingsId === undefined || phoneBaseSettingsId === null) {
        throw "Missing the required parameter 'phoneBaseSettingsId' when calling getTelephonyProvidersEdgesPhonesTemplate";
      }


      return this.apiClient.callApi(
        '/api/v2/telephony/providers/edges/phones/template', 
        'GET', 
        {  }, 
        { 'phoneBaseSettingsId': phoneBaseSettingsId }, 
        {  }, 
        {  }, 
        null, 
        ['PureCloud Auth'], 
        ['application/json'], 
        ['application/json']
      );
    };


    /**
     * Get physical interfaces for edges.
     * Retrieves a list of all configured physical interfaces for a list of edges. Only 100 edges can be requested at a time.
     * @param {String} edgeIds Comma separated list of Edge Id&#39;s
     */
    this.getTelephonyProvidersEdgesPhysicalinterfaces = function(edgeIds) { 

      // verify the required parameter 'edgeIds' is set
      if (edgeIds === undefined || edgeIds === null) {
        throw "Missing the required parameter 'edgeIds' when calling getTelephonyProvidersEdgesPhysicalinterfaces";
      }


      return this.apiClient.callApi(
        '/api/v2/telephony/providers/edges/physicalinterfaces', 
        'GET', 
        {  }, 
        { 'edgeIds': edgeIds }, 
        {  }, 
        {  }, 
        null, 
        ['PureCloud Auth'], 
        ['application/json'], 
        ['application/json']
      );
    };


    /**
     * Get a Site by ID.
     * 
     * @param {String} siteId Site ID
     */
    this.getTelephonyProvidersEdgesSite = function(siteId) { 

      // verify the required parameter 'siteId' is set
      if (siteId === undefined || siteId === null) {
        throw "Missing the required parameter 'siteId' when calling getTelephonyProvidersEdgesSite";
      }


      return this.apiClient.callApi(
        '/api/v2/telephony/providers/edges/sites/{siteId}', 
        'GET', 
        { 'siteId': siteId }, 
        {  }, 
        {  }, 
        {  }, 
        null, 
        ['PureCloud Auth'], 
        ['application/json'], 
        ['application/json']
      );
    };


    /**
     * Get a Number Plan by ID.
     * 
     * @param {String} siteId Site ID
     * @param {String} numberPlanId Number Plan ID
     */
    this.getTelephonyProvidersEdgesSiteNumberplan = function(siteId, numberPlanId) { 

      // verify the required parameter 'siteId' is set
      if (siteId === undefined || siteId === null) {
        throw "Missing the required parameter 'siteId' when calling getTelephonyProvidersEdgesSiteNumberplan";
      }

      // verify the required parameter 'numberPlanId' is set
      if (numberPlanId === undefined || numberPlanId === null) {
        throw "Missing the required parameter 'numberPlanId' when calling getTelephonyProvidersEdgesSiteNumberplan";
      }


      return this.apiClient.callApi(
        '/api/v2/telephony/providers/edges/sites/{siteId}/numberplans/{numberPlanId}', 
        'GET', 
        { 'siteId': siteId,'numberPlanId': numberPlanId }, 
        {  }, 
        {  }, 
        {  }, 
        null, 
        ['PureCloud Auth'], 
        ['application/json'], 
        ['application/json']
      );
    };


    /**
     * Get the list of Number Plans for this Site.
     * 
     * @param {String} siteId Site ID
     */
    this.getTelephonyProvidersEdgesSiteNumberplans = function(siteId) { 

      // verify the required parameter 'siteId' is set
      if (siteId === undefined || siteId === null) {
        throw "Missing the required parameter 'siteId' when calling getTelephonyProvidersEdgesSiteNumberplans";
      }


      return this.apiClient.callApi(
        '/api/v2/telephony/providers/edges/sites/{siteId}/numberplans', 
        'GET', 
        { 'siteId': siteId }, 
        {  }, 
        {  }, 
        {  }, 
        null, 
        ['PureCloud Auth'], 
        ['application/json'], 
        ['application/json']
      );
    };


    /**
     * Get a list of Classifications for this Site
     * 
     * @param {String} siteId Site ID
     * @param {Object} opts Optional parameters
     * @param {String} opts.classification Classification
     */
    this.getTelephonyProvidersEdgesSiteNumberplansClassifications = function(siteId, opts) { 
      opts = opts || {};

      // verify the required parameter 'siteId' is set
      if (siteId === undefined || siteId === null) {
        throw "Missing the required parameter 'siteId' when calling getTelephonyProvidersEdgesSiteNumberplansClassifications";
      }


      return this.apiClient.callApi(
        '/api/v2/telephony/providers/edges/sites/{siteId}/numberplans/classifications', 
        'GET', 
        { 'siteId': siteId }, 
        { 'classification': opts['classification'] }, 
        {  }, 
        {  }, 
        null, 
        ['PureCloud Auth'], 
        ['application/json'], 
        ['application/json']
      );
    };


    /**
     * Get an outbound route
     * 
     * @param {String} siteId Site ID
     * @param {String} outboundRouteId Outbound route ID
     */
    this.getTelephonyProvidersEdgesSiteOutboundroute = function(siteId, outboundRouteId) { 

      // verify the required parameter 'siteId' is set
      if (siteId === undefined || siteId === null) {
        throw "Missing the required parameter 'siteId' when calling getTelephonyProvidersEdgesSiteOutboundroute";
      }

      // verify the required parameter 'outboundRouteId' is set
      if (outboundRouteId === undefined || outboundRouteId === null) {
        throw "Missing the required parameter 'outboundRouteId' when calling getTelephonyProvidersEdgesSiteOutboundroute";
      }


      return this.apiClient.callApi(
        '/api/v2/telephony/providers/edges/sites/{siteId}/outboundroutes/{outboundRouteId}', 
        'GET', 
        { 'siteId': siteId,'outboundRouteId': outboundRouteId }, 
        {  }, 
        {  }, 
        {  }, 
        null, 
        ['PureCloud Auth'], 
        ['application/json'], 
        ['application/json']
      );
    };


    /**
     * Get outbound routes
     * 
     * @param {String} siteId Site ID
     * @param {Object} opts Optional parameters
     * @param {Number} opts.pageSize Page size (default to 25)
     * @param {Number} opts.pageNumber Page number (default to 1)
     * @param {String} opts.name Name
     * @param {String} opts.sortBy Sort by (default to name)
     */
    this.getTelephonyProvidersEdgesSiteOutboundroutes = function(siteId, opts) { 
      opts = opts || {};

      // verify the required parameter 'siteId' is set
      if (siteId === undefined || siteId === null) {
        throw "Missing the required parameter 'siteId' when calling getTelephonyProvidersEdgesSiteOutboundroutes";
      }


      return this.apiClient.callApi(
        '/api/v2/telephony/providers/edges/sites/{siteId}/outboundroutes', 
        'GET', 
        { 'siteId': siteId }, 
        { 'pageSize': opts['pageSize'],'pageNumber': opts['pageNumber'],'name': opts['name'],'sortBy': opts['sortBy'] }, 
        {  }, 
        {  }, 
        null, 
        ['PureCloud Auth'], 
        ['application/json'], 
        ['application/json']
      );
    };


    /**
     * Get the list of Sites.
     * 
     * @param {Object} opts Optional parameters
     * @param {Number} opts.pageSize Page size (default to 25)
     * @param {Number} opts.pageNumber Page number (default to 1)
     * @param {String} opts.sortBy Sort by (default to name)
     * @param {String} opts.sortOrder Sort order (default to ASC)
     * @param {String} opts.name Name
     * @param {String} opts.locationId Location Id
     * @param {Boolean} opts.managed Filter by managed
     */
    this.getTelephonyProvidersEdgesSites = function(opts) { 
      opts = opts || {};


      return this.apiClient.callApi(
        '/api/v2/telephony/providers/edges/sites', 
        'GET', 
        {  }, 
        { 'pageSize': opts['pageSize'],'pageNumber': opts['pageNumber'],'sortBy': opts['sortBy'],'sortOrder': opts['sortOrder'],'name': opts['name'],'location.id': opts['locationId'],'managed': opts['managed'] }, 
        {  }, 
        {  }, 
        null, 
        ['PureCloud Auth'], 
        ['application/json'], 
        ['application/json']
      );
    };


    /**
     * Get a list of Edge-compatible time zones
     * 
     * @param {Object} opts Optional parameters
     * @param {Number} opts.pageSize Page size (default to 1000)
     * @param {Number} opts.pageNumber Page number (default to 1)
     */
    this.getTelephonyProvidersEdgesTimezones = function(opts) { 
      opts = opts || {};


      return this.apiClient.callApi(
        '/api/v2/telephony/providers/edges/timezones', 
        'GET', 
        {  }, 
        { 'pageSize': opts['pageSize'],'pageNumber': opts['pageNumber'] }, 
        {  }, 
        {  }, 
        null, 
        ['PureCloud Auth'], 
        ['application/json'], 
        ['application/json']
      );
    };


    /**
     * Get a Trunk by ID
     * 
     * @param {String} trunkId Trunk ID
     */
    this.getTelephonyProvidersEdgesTrunk = function(trunkId) { 

      // verify the required parameter 'trunkId' is set
      if (trunkId === undefined || trunkId === null) {
        throw "Missing the required parameter 'trunkId' when calling getTelephonyProvidersEdgesTrunk";
      }


      return this.apiClient.callApi(
        '/api/v2/telephony/providers/edges/trunks/{trunkId}', 
        'GET', 
        { 'trunkId': trunkId }, 
        {  }, 
        {  }, 
        {  }, 
        null, 
        ['PureCloud Auth'], 
        ['application/json'], 
        ['application/json']
      );
    };


    /**
     * Get a Trunk Base Settings object by ID
     * Managed properties will not be returned unless the user is assigned the managed:all:all permission.
     * @param {String} trunkBaseSettingsId Trunk Base ID
     * @param {Object} opts Optional parameters
     * @param {Boolean} opts.ignoreHidden Set this to true to not receive trunk properties that are meant to be hidden or for internal system usage only.
     */
    this.getTelephonyProvidersEdgesTrunkbasesetting = function(trunkBaseSettingsId, opts) { 
      opts = opts || {};

      // verify the required parameter 'trunkBaseSettingsId' is set
      if (trunkBaseSettingsId === undefined || trunkBaseSettingsId === null) {
        throw "Missing the required parameter 'trunkBaseSettingsId' when calling getTelephonyProvidersEdgesTrunkbasesetting";
      }


      return this.apiClient.callApi(
        '/api/v2/telephony/providers/edges/trunkbasesettings/{trunkBaseSettingsId}', 
        'GET', 
        { 'trunkBaseSettingsId': trunkBaseSettingsId }, 
        { 'ignoreHidden': opts['ignoreHidden'] }, 
        {  }, 
        {  }, 
        null, 
        ['PureCloud Auth'], 
        ['application/json'], 
        ['application/json']
      );
    };


    /**
     * Get Trunk Base Settings listing
     * Managed properties will not be returned unless the user is assigned the managed:all:all permission.
     * @param {Object} opts Optional parameters
     * @param {Number} opts.pageNumber Page number (default to 1)
     * @param {Number} opts.pageSize Page size (default to 25)
     * @param {String} opts.sortBy Value by which to sort (default to name)
     * @param {String} opts.sortOrder Sort order (default to ASC)
     * @param {Boolean} opts.recordingEnabled Filter trunks by recording enabled
     * @param {Boolean} opts.ignoreHidden Set this to true to not receive trunk properties that are meant to be hidden or for internal system usage only.
     * @param {Boolean} opts.managed Filter by managed
     * @param {Array.<String>} opts.expand Fields to expand in the response, comma-separated
     * @param {String} opts.name Name of the TrunkBase to filter by
     */
    this.getTelephonyProvidersEdgesTrunkbasesettings = function(opts) { 
      opts = opts || {};


      return this.apiClient.callApi(
        '/api/v2/telephony/providers/edges/trunkbasesettings', 
        'GET', 
        {  }, 
        { 'pageNumber': opts['pageNumber'],'pageSize': opts['pageSize'],'sortBy': opts['sortBy'],'sortOrder': opts['sortOrder'],'recordingEnabled': opts['recordingEnabled'],'ignoreHidden': opts['ignoreHidden'],'managed': opts['managed'],'expand': this.apiClient.buildCollectionParam(opts['expand'], 'multi'),'name': opts['name'] }, 
        {  }, 
        {  }, 
        null, 
        ['PureCloud Auth'], 
        ['application/json'], 
        ['application/json']
      );
    };


    /**
     * Get a list of available makes and models to create a new Trunk Base Settings
     * 
     * @param {Object} opts Optional parameters
     * @param {module:purecloud-platform-client-v2/model/String} opts.type 
     * @param {Number} opts.pageSize  (default to 25)
     * @param {Number} opts.pageNumber  (default to 1)
     */
    this.getTelephonyProvidersEdgesTrunkbasesettingsAvailablemetabases = function(opts) { 
      opts = opts || {};


      return this.apiClient.callApi(
        '/api/v2/telephony/providers/edges/trunkbasesettings/availablemetabases', 
        'GET', 
        {  }, 
        { 'type': opts['type'],'pageSize': opts['pageSize'],'pageNumber': opts['pageNumber'] }, 
        {  }, 
        {  }, 
        null, 
        ['PureCloud Auth'], 
        ['application/json'], 
        ['application/json']
      );
    };


    /**
     * Get a Trunk Base Settings instance template from a given make and model. This object can then be modified and saved as a new Trunk Base Settings instance
     * 
     * @param {String} trunkMetabaseId The id of a metabase object upon which to base this Trunk Base Settings
     */
    this.getTelephonyProvidersEdgesTrunkbasesettingsTemplate = function(trunkMetabaseId) { 

      // verify the required parameter 'trunkMetabaseId' is set
      if (trunkMetabaseId === undefined || trunkMetabaseId === null) {
        throw "Missing the required parameter 'trunkMetabaseId' when calling getTelephonyProvidersEdgesTrunkbasesettingsTemplate";
      }


      return this.apiClient.callApi(
        '/api/v2/telephony/providers/edges/trunkbasesettings/template', 
        'GET', 
        {  }, 
        { 'trunkMetabaseId': trunkMetabaseId }, 
        {  }, 
        {  }, 
        null, 
        ['PureCloud Auth'], 
        ['application/json'], 
        ['application/json']
      );
    };


    /**
     * Get the list of available trunks.
     * Trunks are created by assigning trunk base settings to an Edge or Edge Group.
     * @param {Object} opts Optional parameters
     * @param {Number} opts.pageNumber Page number (default to 1)
     * @param {Number} opts.pageSize Page size (default to 25)
     * @param {String} opts.sortBy Value by which to sort (default to name)
     * @param {String} opts.sortOrder Sort order (default to ASC)
     * @param {String} opts.edgeId Filter by Edge Ids
     * @param {String} opts.trunkBaseId Filter by Trunk Base Ids
     * @param {module:purecloud-platform-client-v2/model/String} opts.trunkType Filter by a Trunk type
     */
    this.getTelephonyProvidersEdgesTrunks = function(opts) { 
      opts = opts || {};


      return this.apiClient.callApi(
        '/api/v2/telephony/providers/edges/trunks', 
        'GET', 
        {  }, 
        { 'pageNumber': opts['pageNumber'],'pageSize': opts['pageSize'],'sortBy': opts['sortBy'],'sortOrder': opts['sortOrder'],'edge.id': opts['edgeId'],'trunkBase.id': opts['trunkBaseId'],'trunkType': opts['trunkType'] }, 
        {  }, 
        {  }, 
        null, 
        ['PureCloud Auth'], 
        ['application/json'], 
        ['application/json']
      );
    };


    /**
     * Get Counts of trunks that have recording disabled or enabled
     * 
     * @param {Object} opts Optional parameters
     * @param {module:purecloud-platform-client-v2/model/String} opts.trunkType The type of this trunk base.
     */
    this.getTelephonyProvidersEdgesTrunkswithrecording = function(opts) { 
      opts = opts || {};


      return this.apiClient.callApi(
        '/api/v2/telephony/providers/edges/trunkswithrecording', 
        'GET', 
        {  }, 
        { 'trunkType': opts['trunkType'] }, 
        {  }, 
        {  }, 
        null, 
        ['PureCloud Auth'], 
        ['application/json'], 
        ['application/json']
      );
    };


    /**
     * Create an edge logical interface.
     * Create
     * @param {String} edgeId Edge ID
     * @param {module:purecloud-platform-client-v2/model/DomainLogicalInterface} body Logical interface
     */
    this.postTelephonyProvidersEdgeLogicalinterfaces = function(edgeId, body) { 

      // verify the required parameter 'edgeId' is set
      if (edgeId === undefined || edgeId === null) {
        throw "Missing the required parameter 'edgeId' when calling postTelephonyProvidersEdgeLogicalinterfaces";
      }

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw "Missing the required parameter 'body' when calling postTelephonyProvidersEdgeLogicalinterfaces";
      }


      return this.apiClient.callApi(
        '/api/v2/telephony/providers/edges/{edgeId}/logicalinterfaces', 
        'POST', 
        { 'edgeId': edgeId }, 
        {  }, 
        {  }, 
        {  }, 
        body, 
        ['PureCloud Auth'], 
        ['application/json'], 
        ['application/json']
      );
    };


    /**
     * Request that the specified fileIds be uploaded from the Edge.
     * 
     * @param {String} edgeId Edge ID
     * @param {String} jobId Job ID
     * @param {module:purecloud-platform-client-v2/model/EdgeLogsJobUploadRequest} body Log upload request
     */
    this.postTelephonyProvidersEdgeLogsJobUpload = function(edgeId, jobId, body) { 

      // verify the required parameter 'edgeId' is set
      if (edgeId === undefined || edgeId === null) {
        throw "Missing the required parameter 'edgeId' when calling postTelephonyProvidersEdgeLogsJobUpload";
      }

      // verify the required parameter 'jobId' is set
      if (jobId === undefined || jobId === null) {
        throw "Missing the required parameter 'jobId' when calling postTelephonyProvidersEdgeLogsJobUpload";
      }

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw "Missing the required parameter 'body' when calling postTelephonyProvidersEdgeLogsJobUpload";
      }


      return this.apiClient.callApi(
        '/api/v2/telephony/providers/edges/{edgeId}/logs/jobs/{jobId}/upload', 
        'POST', 
        { 'edgeId': edgeId,'jobId': jobId }, 
        {  }, 
        {  }, 
        {  }, 
        body, 
        ['PureCloud Auth'], 
        ['application/json'], 
        ['application/json']
      );
    };


    /**
     * Create a job to upload a list of Edge logs.
     * 
     * @param {String} edgeId Edge ID
     * @param {module:purecloud-platform-client-v2/model/EdgeLogsJobRequest} body EdgeLogsJobRequest
     */
    this.postTelephonyProvidersEdgeLogsJobs = function(edgeId, body) { 

      // verify the required parameter 'edgeId' is set
      if (edgeId === undefined || edgeId === null) {
        throw "Missing the required parameter 'edgeId' when calling postTelephonyProvidersEdgeLogsJobs";
      }

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw "Missing the required parameter 'body' when calling postTelephonyProvidersEdgeLogsJobs";
      }


      return this.apiClient.callApi(
        '/api/v2/telephony/providers/edges/{edgeId}/logs/jobs', 
        'POST', 
        { 'edgeId': edgeId }, 
        {  }, 
        {  }, 
        {  }, 
        body, 
        ['PureCloud Auth'], 
        ['application/json'], 
        ['application/json']
      );
    };


    /**
     * Reboot an Edge
     * 
     * @param {String} edgeId Edge ID
     * @param {Object} opts Optional parameters
     * @param {module:purecloud-platform-client-v2/model/EdgeRebootParameters} opts.body Parameters for the edge reboot
     */
    this.postTelephonyProvidersEdgeReboot = function(edgeId, opts) { 
      opts = opts || {};

      // verify the required parameter 'edgeId' is set
      if (edgeId === undefined || edgeId === null) {
        throw "Missing the required parameter 'edgeId' when calling postTelephonyProvidersEdgeReboot";
      }


      return this.apiClient.callApi(
        '/api/v2/telephony/providers/edges/{edgeId}/reboot', 
        'POST', 
        { 'edgeId': edgeId }, 
        {  }, 
        {  }, 
        {  }, 
        opts['body'], 
        ['PureCloud Auth'], 
        ['application/json'], 
        ['application/json']
      );
    };


    /**
     * Starts a software update for this edge.
     * 
     * @param {String} edgeId Edge ID
     * @param {module:purecloud-platform-client-v2/model/DomainEdgeSoftwareUpdateDto} body Software update request
     */
    this.postTelephonyProvidersEdgeSoftwareupdate = function(edgeId, body) { 

      // verify the required parameter 'edgeId' is set
      if (edgeId === undefined || edgeId === null) {
        throw "Missing the required parameter 'edgeId' when calling postTelephonyProvidersEdgeSoftwareupdate";
      }

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw "Missing the required parameter 'body' when calling postTelephonyProvidersEdgeSoftwareupdate";
      }


      return this.apiClient.callApi(
        '/api/v2/telephony/providers/edges/{edgeId}/softwareupdate', 
        'POST', 
        { 'edgeId': edgeId }, 
        {  }, 
        {  }, 
        {  }, 
        body, 
        ['PureCloud Auth'], 
        ['application/json'], 
        ['application/json']
      );
    };


    /**
     * Take an Edge in or out of service
     * 
     * @param {String} edgeId Edge ID
     * @param {Object} opts Optional parameters
     * @param {module:purecloud-platform-client-v2/model/EdgeServiceStateRequest} opts.body Edge Service State
     */
    this.postTelephonyProvidersEdgeStatuscode = function(edgeId, opts) { 
      opts = opts || {};

      // verify the required parameter 'edgeId' is set
      if (edgeId === undefined || edgeId === null) {
        throw "Missing the required parameter 'edgeId' when calling postTelephonyProvidersEdgeStatuscode";
      }


      return this.apiClient.callApi(
        '/api/v2/telephony/providers/edges/{edgeId}/statuscode', 
        'POST', 
        { 'edgeId': edgeId }, 
        {  }, 
        {  }, 
        {  }, 
        opts['body'], 
        ['PureCloud Auth'], 
        ['application/json'], 
        ['application/json']
      );
    };


    /**
     * Unpair an Edge
     * 
     * @param {String} edgeId Edge Id
     */
    this.postTelephonyProvidersEdgeUnpair = function(edgeId) { 

      // verify the required parameter 'edgeId' is set
      if (edgeId === undefined || edgeId === null) {
        throw "Missing the required parameter 'edgeId' when calling postTelephonyProvidersEdgeUnpair";
      }


      return this.apiClient.callApi(
        '/api/v2/telephony/providers/edges/{edgeId}/unpair', 
        'POST', 
        { 'edgeId': edgeId }, 
        {  }, 
        {  }, 
        {  }, 
        null, 
        ['PureCloud Auth'], 
        ['application/json'], 
        ['application/json']
      );
    };


    /**
     * Create an edge.
     * 
     * @param {module:purecloud-platform-client-v2/model/Edge} body Edge
     */
    this.postTelephonyProvidersEdges = function(body) { 

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw "Missing the required parameter 'body' when calling postTelephonyProvidersEdges";
      }


      return this.apiClient.callApi(
        '/api/v2/telephony/providers/edges', 
        'POST', 
        {  }, 
        {  }, 
        {  }, 
        {  }, 
        body, 
        ['PureCloud Auth'], 
        ['application/json'], 
        ['application/json']
      );
    };


    /**
     * Validates a street address
     * 
     * @param {module:purecloud-platform-client-v2/model/ValidateAddressRequest} body Address
     */
    this.postTelephonyProvidersEdgesAddressvalidation = function(body) { 

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw "Missing the required parameter 'body' when calling postTelephonyProvidersEdgesAddressvalidation";
      }


      return this.apiClient.callApi(
        '/api/v2/telephony/providers/edges/addressvalidation', 
        'POST', 
        {  }, 
        {  }, 
        {  }, 
        {  }, 
        body, 
        ['PureCloud Auth'], 
        ['application/json'], 
        ['application/json']
      );
    };


    /**
     * Create a certificate authority.
     * 
     * @param {module:purecloud-platform-client-v2/model/DomainCertificateAuthority} body CertificateAuthority
     */
    this.postTelephonyProvidersEdgesCertificateauthorities = function(body) { 

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw "Missing the required parameter 'body' when calling postTelephonyProvidersEdgesCertificateauthorities";
      }


      return this.apiClient.callApi(
        '/api/v2/telephony/providers/edges/certificateauthorities', 
        'POST', 
        {  }, 
        {  }, 
        {  }, 
        {  }, 
        body, 
        ['PureCloud Auth'], 
        ['application/json'], 
        ['application/json']
      );
    };


    /**
     * Create a new DID pool
     * 
     * @param {module:purecloud-platform-client-v2/model/DIDPool} body DID pool
     */
    this.postTelephonyProvidersEdgesDidpools = function(body) { 

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw "Missing the required parameter 'body' when calling postTelephonyProvidersEdgesDidpools";
      }


      return this.apiClient.callApi(
        '/api/v2/telephony/providers/edges/didpools', 
        'POST', 
        {  }, 
        {  }, 
        {  }, 
        {  }, 
        body, 
        ['PureCloud Auth'], 
        ['application/json'], 
        ['application/json']
      );
    };


    /**
     * Create an edge group.
     * 
     * @param {module:purecloud-platform-client-v2/model/EdgeGroup} body EdgeGroup
     */
    this.postTelephonyProvidersEdgesEdgegroups = function(body) { 

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw "Missing the required parameter 'body' when calling postTelephonyProvidersEdgesEdgegroups";
      }


      return this.apiClient.callApi(
        '/api/v2/telephony/providers/edges/edgegroups', 
        'POST', 
        {  }, 
        {  }, 
        {  }, 
        {  }, 
        body, 
        ['PureCloud Auth'], 
        ['application/json'], 
        ['application/json']
      );
    };


    /**
     * Create endpoint
     * 
     * @param {module:purecloud-platform-client-v2/model/Endpoint} body EndpointTemplate
     */
    this.postTelephonyProvidersEdgesEndpoints = function(body) { 

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw "Missing the required parameter 'body' when calling postTelephonyProvidersEdgesEndpoints";
      }


      return this.apiClient.callApi(
        '/api/v2/telephony/providers/edges/endpoints', 
        'POST', 
        {  }, 
        {  }, 
        {  }, 
        {  }, 
        body, 
        ['PureCloud Auth'], 
        ['application/json'], 
        ['application/json']
      );
    };


    /**
     * Create a new extension pool
     * 
     * @param {module:purecloud-platform-client-v2/model/ExtensionPool} body ExtensionPool
     */
    this.postTelephonyProvidersEdgesExtensionpools = function(body) { 

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw "Missing the required parameter 'body' when calling postTelephonyProvidersEdgesExtensionpools";
      }


      return this.apiClient.callApi(
        '/api/v2/telephony/providers/edges/extensionpools', 
        'POST', 
        {  }, 
        {  }, 
        {  }, 
        {  }, 
        body, 
        ['PureCloud Auth'], 
        ['application/json'], 
        ['application/json']
      );
    };


    /**
     * Create outbound rule
     * 
     * @param {module:purecloud-platform-client-v2/model/OutboundRoute} body OutboundRoute
     */
    this.postTelephonyProvidersEdgesOutboundroutes = function(body) { 

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw "Missing the required parameter 'body' when calling postTelephonyProvidersEdgesOutboundroutes";
      }


      return this.apiClient.callApi(
        '/api/v2/telephony/providers/edges/outboundroutes', 
        'POST', 
        {  }, 
        {  }, 
        {  }, 
        {  }, 
        body, 
        ['PureCloud Auth'], 
        ['application/json'], 
        ['application/json']
      );
    };


    /**
     * Reboot a Phone
     * 
     * @param {String} phoneId Phone Id
     */
    this.postTelephonyProvidersEdgesPhoneReboot = function(phoneId) { 

      // verify the required parameter 'phoneId' is set
      if (phoneId === undefined || phoneId === null) {
        throw "Missing the required parameter 'phoneId' when calling postTelephonyProvidersEdgesPhoneReboot";
      }


      return this.apiClient.callApi(
        '/api/v2/telephony/providers/edges/phones/{phoneId}/reboot', 
        'POST', 
        { 'phoneId': phoneId }, 
        {  }, 
        {  }, 
        {  }, 
        null, 
        ['PureCloud Auth'], 
        ['application/json'], 
        ['application/json']
      );
    };


    /**
     * Create a new Phone Base Settings object
     * 
     * @param {module:purecloud-platform-client-v2/model/PhoneBase} body Phone base settings
     */
    this.postTelephonyProvidersEdgesPhonebasesettings = function(body) { 

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw "Missing the required parameter 'body' when calling postTelephonyProvidersEdgesPhonebasesettings";
      }


      return this.apiClient.callApi(
        '/api/v2/telephony/providers/edges/phonebasesettings', 
        'POST', 
        {  }, 
        {  }, 
        {  }, 
        {  }, 
        body, 
        ['PureCloud Auth'], 
        ['application/json'], 
        ['application/json']
      );
    };


    /**
     * Create a new Phone
     * 
     * @param {module:purecloud-platform-client-v2/model/Phone} body Phone
     */
    this.postTelephonyProvidersEdgesPhones = function(body) { 

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw "Missing the required parameter 'body' when calling postTelephonyProvidersEdgesPhones";
      }


      return this.apiClient.callApi(
        '/api/v2/telephony/providers/edges/phones', 
        'POST', 
        {  }, 
        {  }, 
        {  }, 
        {  }, 
        body, 
        ['PureCloud Auth'], 
        ['application/json'], 
        ['application/json']
      );
    };


    /**
     * Reboot Multiple Phones
     * 
     * @param {module:purecloud-platform-client-v2/model/PhonesReboot} body Phones
     */
    this.postTelephonyProvidersEdgesPhonesReboot = function(body) { 

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw "Missing the required parameter 'body' when calling postTelephonyProvidersEdgesPhonesReboot";
      }


      return this.apiClient.callApi(
        '/api/v2/telephony/providers/edges/phones/reboot', 
        'POST', 
        {  }, 
        {  }, 
        {  }, 
        {  }, 
        body, 
        ['PureCloud Auth'], 
        ['application/json'], 
        ['application/json']
      );
    };


    /**
     * Create outbound route
     * 
     * @param {String} siteId Site ID
     * @param {module:purecloud-platform-client-v2/model/OutboundRouteBase} body OutboundRoute
     */
    this.postTelephonyProvidersEdgesSiteOutboundroutes = function(siteId, body) { 

      // verify the required parameter 'siteId' is set
      if (siteId === undefined || siteId === null) {
        throw "Missing the required parameter 'siteId' when calling postTelephonyProvidersEdgesSiteOutboundroutes";
      }

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw "Missing the required parameter 'body' when calling postTelephonyProvidersEdgesSiteOutboundroutes";
      }


      return this.apiClient.callApi(
        '/api/v2/telephony/providers/edges/sites/{siteId}/outboundroutes', 
        'POST', 
        { 'siteId': siteId }, 
        {  }, 
        {  }, 
        {  }, 
        body, 
        ['PureCloud Auth'], 
        ['application/json'], 
        ['application/json']
      );
    };


    /**
     * Triggers the rebalance operation.
     * 
     * @param {String} siteId Site ID
     */
    this.postTelephonyProvidersEdgesSiteRebalance = function(siteId) { 

      // verify the required parameter 'siteId' is set
      if (siteId === undefined || siteId === null) {
        throw "Missing the required parameter 'siteId' when calling postTelephonyProvidersEdgesSiteRebalance";
      }


      return this.apiClient.callApi(
        '/api/v2/telephony/providers/edges/sites/{siteId}/rebalance', 
        'POST', 
        { 'siteId': siteId }, 
        {  }, 
        {  }, 
        {  }, 
        null, 
        ['PureCloud Auth'], 
        ['application/json'], 
        ['application/json']
      );
    };


    /**
     * Create a Site.
     * 
     * @param {module:purecloud-platform-client-v2/model/Site} body Site
     */
    this.postTelephonyProvidersEdgesSites = function(body) { 

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw "Missing the required parameter 'body' when calling postTelephonyProvidersEdgesSites";
      }


      return this.apiClient.callApi(
        '/api/v2/telephony/providers/edges/sites', 
        'POST', 
        {  }, 
        {  }, 
        {  }, 
        {  }, 
        body, 
        ['PureCloud Auth'], 
        ['application/json'], 
        ['application/json']
      );
    };


    /**
     * Create a Trunk Base Settings object
     * 
     * @param {module:purecloud-platform-client-v2/model/TrunkBase} body Trunk base settings
     */
    this.postTelephonyProvidersEdgesTrunkbasesettings = function(body) { 

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw "Missing the required parameter 'body' when calling postTelephonyProvidersEdgesTrunkbasesettings";
      }


      return this.apiClient.callApi(
        '/api/v2/telephony/providers/edges/trunkbasesettings', 
        'POST', 
        {  }, 
        {  }, 
        {  }, 
        {  }, 
        body, 
        ['PureCloud Auth'], 
        ['application/json'], 
        ['application/json']
      );
    };


    /**
     * Update a edge.
     * 
     * @param {String} edgeId Edge ID
     * @param {module:purecloud-platform-client-v2/model/Edge} body Edge
     */
    this.putTelephonyProvidersEdge = function(edgeId, body) { 

      // verify the required parameter 'edgeId' is set
      if (edgeId === undefined || edgeId === null) {
        throw "Missing the required parameter 'edgeId' when calling putTelephonyProvidersEdge";
      }

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw "Missing the required parameter 'body' when calling putTelephonyProvidersEdge";
      }


      return this.apiClient.callApi(
        '/api/v2/telephony/providers/edges/{edgeId}', 
        'PUT', 
        { 'edgeId': edgeId }, 
        {  }, 
        {  }, 
        {  }, 
        body, 
        ['PureCloud Auth'], 
        ['application/json'], 
        ['application/json']
      );
    };


    /**
     * Update a line.
     * 
     * @param {String} edgeId Edge ID
     * @param {String} lineId Line ID
     * @param {module:purecloud-platform-client-v2/model/EdgeLine} body Line
     */
    this.putTelephonyProvidersEdgeLine = function(edgeId, lineId, body) { 

      // verify the required parameter 'edgeId' is set
      if (edgeId === undefined || edgeId === null) {
        throw "Missing the required parameter 'edgeId' when calling putTelephonyProvidersEdgeLine";
      }

      // verify the required parameter 'lineId' is set
      if (lineId === undefined || lineId === null) {
        throw "Missing the required parameter 'lineId' when calling putTelephonyProvidersEdgeLine";
      }

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw "Missing the required parameter 'body' when calling putTelephonyProvidersEdgeLine";
      }


      return this.apiClient.callApi(
        '/api/v2/telephony/providers/edges/{edgeId}/lines/{lineId}', 
        'PUT', 
        { 'edgeId': edgeId,'lineId': lineId }, 
        {  }, 
        {  }, 
        {  }, 
        body, 
        ['PureCloud Auth'], 
        ['application/json'], 
        ['application/json']
      );
    };


    /**
     * Update an edge logical interface.
     * 
     * @param {String} edgeId Edge ID
     * @param {String} interfaceId Interface ID
     * @param {module:purecloud-platform-client-v2/model/DomainLogicalInterface} body Logical interface
     */
    this.putTelephonyProvidersEdgeLogicalinterface = function(edgeId, interfaceId, body) { 

      // verify the required parameter 'edgeId' is set
      if (edgeId === undefined || edgeId === null) {
        throw "Missing the required parameter 'edgeId' when calling putTelephonyProvidersEdgeLogicalinterface";
      }

      // verify the required parameter 'interfaceId' is set
      if (interfaceId === undefined || interfaceId === null) {
        throw "Missing the required parameter 'interfaceId' when calling putTelephonyProvidersEdgeLogicalinterface";
      }

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw "Missing the required parameter 'body' when calling putTelephonyProvidersEdgeLogicalinterface";
      }


      return this.apiClient.callApi(
        '/api/v2/telephony/providers/edges/{edgeId}/logicalinterfaces/{interfaceId}', 
        'PUT', 
        { 'edgeId': edgeId,'interfaceId': interfaceId }, 
        {  }, 
        {  }, 
        {  }, 
        body, 
        ['PureCloud Auth'], 
        ['application/json'], 
        ['application/json']
      );
    };


    /**
     * Update a certificate authority.
     * 
     * @param {String} certificateId Certificate ID
     * @param {module:purecloud-platform-client-v2/model/DomainCertificateAuthority} body Certificate authority
     */
    this.putTelephonyProvidersEdgesCertificateauthority = function(certificateId, body) { 

      // verify the required parameter 'certificateId' is set
      if (certificateId === undefined || certificateId === null) {
        throw "Missing the required parameter 'certificateId' when calling putTelephonyProvidersEdgesCertificateauthority";
      }

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw "Missing the required parameter 'body' when calling putTelephonyProvidersEdgesCertificateauthority";
      }


      return this.apiClient.callApi(
        '/api/v2/telephony/providers/edges/certificateauthorities/{certificateId}', 
        'PUT', 
        { 'certificateId': certificateId }, 
        {  }, 
        {  }, 
        {  }, 
        body, 
        ['PureCloud Auth'], 
        ['application/json'], 
        ['application/json']
      );
    };


    /**
     * Update a DID by ID.
     * 
     * @param {String} didId DID ID
     * @param {module:purecloud-platform-client-v2/model/DID} body DID
     */
    this.putTelephonyProvidersEdgesDid = function(didId, body) { 

      // verify the required parameter 'didId' is set
      if (didId === undefined || didId === null) {
        throw "Missing the required parameter 'didId' when calling putTelephonyProvidersEdgesDid";
      }

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw "Missing the required parameter 'body' when calling putTelephonyProvidersEdgesDid";
      }


      return this.apiClient.callApi(
        '/api/v2/telephony/providers/edges/dids/{didId}', 
        'PUT', 
        { 'didId': didId }, 
        {  }, 
        {  }, 
        {  }, 
        body, 
        ['PureCloud Auth'], 
        ['application/json'], 
        ['application/json']
      );
    };


    /**
     * Update a DID Pool by ID.
     * 
     * @param {String} didPoolId DID pool ID
     * @param {module:purecloud-platform-client-v2/model/DIDPool} body DID pool
     */
    this.putTelephonyProvidersEdgesDidpool = function(didPoolId, body) { 

      // verify the required parameter 'didPoolId' is set
      if (didPoolId === undefined || didPoolId === null) {
        throw "Missing the required parameter 'didPoolId' when calling putTelephonyProvidersEdgesDidpool";
      }

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw "Missing the required parameter 'body' when calling putTelephonyProvidersEdgesDidpool";
      }


      return this.apiClient.callApi(
        '/api/v2/telephony/providers/edges/didpools/{didPoolId}', 
        'PUT', 
        { 'didPoolId': didPoolId }, 
        {  }, 
        {  }, 
        {  }, 
        body, 
        ['PureCloud Auth'], 
        ['application/json'], 
        ['application/json']
      );
    };


    /**
     * Update an edge group.
     * 
     * @param {String} edgeGroupId Edge group ID
     * @param {module:purecloud-platform-client-v2/model/EdgeGroup} body EdgeGroup
     */
    this.putTelephonyProvidersEdgesEdgegroup = function(edgeGroupId, body) { 

      // verify the required parameter 'edgeGroupId' is set
      if (edgeGroupId === undefined || edgeGroupId === null) {
        throw "Missing the required parameter 'edgeGroupId' when calling putTelephonyProvidersEdgesEdgegroup";
      }

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw "Missing the required parameter 'body' when calling putTelephonyProvidersEdgesEdgegroup";
      }


      return this.apiClient.callApi(
        '/api/v2/telephony/providers/edges/edgegroups/{edgeGroupId}', 
        'PUT', 
        { 'edgeGroupId': edgeGroupId }, 
        {  }, 
        {  }, 
        {  }, 
        body, 
        ['PureCloud Auth'], 
        ['application/json'], 
        ['application/json']
      );
    };


    /**
     * Update the edge trunk base associated with the edge group
     * 
     * @param {String} edgegroupId Edge Group ID
     * @param {String} edgetrunkbaseId Edge Trunk Base ID
     * @param {module:purecloud-platform-client-v2/model/EdgeTrunkBase} body EdgeTrunkBase
     */
    this.putTelephonyProvidersEdgesEdgegroupEdgetrunkbasis = function(edgegroupId, edgetrunkbaseId, body) { 

      // verify the required parameter 'edgegroupId' is set
      if (edgegroupId === undefined || edgegroupId === null) {
        throw "Missing the required parameter 'edgegroupId' when calling putTelephonyProvidersEdgesEdgegroupEdgetrunkbasis";
      }

      // verify the required parameter 'edgetrunkbaseId' is set
      if (edgetrunkbaseId === undefined || edgetrunkbaseId === null) {
        throw "Missing the required parameter 'edgetrunkbaseId' when calling putTelephonyProvidersEdgesEdgegroupEdgetrunkbasis";
      }

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw "Missing the required parameter 'body' when calling putTelephonyProvidersEdgesEdgegroupEdgetrunkbasis";
      }


      return this.apiClient.callApi(
        '/api/v2/telephony/providers/edges/edgegroups/{edgegroupId}/edgetrunkbases/{edgetrunkbaseId}', 
        'PUT', 
        { 'edgegroupId': edgegroupId,'edgetrunkbaseId': edgetrunkbaseId }, 
        {  }, 
        {  }, 
        {  }, 
        body, 
        ['PureCloud Auth'], 
        ['application/json'], 
        ['application/json']
      );
    };


    /**
     * Update endpoint
     * 
     * @param {String} endpointId Endpoint ID
     * @param {module:purecloud-platform-client-v2/model/Endpoint} body EndpointTemplate
     */
    this.putTelephonyProvidersEdgesEndpoint = function(endpointId, body) { 

      // verify the required parameter 'endpointId' is set
      if (endpointId === undefined || endpointId === null) {
        throw "Missing the required parameter 'endpointId' when calling putTelephonyProvidersEdgesEndpoint";
      }

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw "Missing the required parameter 'body' when calling putTelephonyProvidersEdgesEndpoint";
      }


      return this.apiClient.callApi(
        '/api/v2/telephony/providers/edges/endpoints/{endpointId}', 
        'PUT', 
        { 'endpointId': endpointId }, 
        {  }, 
        {  }, 
        {  }, 
        body, 
        ['PureCloud Auth'], 
        ['application/json'], 
        ['application/json']
      );
    };


    /**
     * Update an extension by ID.
     * 
     * @param {String} extensionId Extension ID
     * @param {module:purecloud-platform-client-v2/model/Extension} body Extension
     */
    this.putTelephonyProvidersEdgesExtension = function(extensionId, body) { 

      // verify the required parameter 'extensionId' is set
      if (extensionId === undefined || extensionId === null) {
        throw "Missing the required parameter 'extensionId' when calling putTelephonyProvidersEdgesExtension";
      }

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw "Missing the required parameter 'body' when calling putTelephonyProvidersEdgesExtension";
      }


      return this.apiClient.callApi(
        '/api/v2/telephony/providers/edges/extensions/{extensionId}', 
        'PUT', 
        { 'extensionId': extensionId }, 
        {  }, 
        {  }, 
        {  }, 
        body, 
        ['PureCloud Auth'], 
        ['application/json'], 
        ['application/json']
      );
    };


    /**
     * Update an extension pool by ID
     * 
     * @param {String} extensionPoolId Extension pool ID
     * @param {module:purecloud-platform-client-v2/model/ExtensionPool} body ExtensionPool
     */
    this.putTelephonyProvidersEdgesExtensionpool = function(extensionPoolId, body) { 

      // verify the required parameter 'extensionPoolId' is set
      if (extensionPoolId === undefined || extensionPoolId === null) {
        throw "Missing the required parameter 'extensionPoolId' when calling putTelephonyProvidersEdgesExtensionpool";
      }

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw "Missing the required parameter 'body' when calling putTelephonyProvidersEdgesExtensionpool";
      }


      return this.apiClient.callApi(
        '/api/v2/telephony/providers/edges/extensionpools/{extensionPoolId}', 
        'PUT', 
        { 'extensionPoolId': extensionPoolId }, 
        {  }, 
        {  }, 
        {  }, 
        body, 
        ['PureCloud Auth'], 
        ['application/json'], 
        ['application/json']
      );
    };


    /**
     * Update outbound route
     * 
     * @param {String} outboundRouteId Outbound route ID
     * @param {module:purecloud-platform-client-v2/model/OutboundRoute} body OutboundRoute
     */
    this.putTelephonyProvidersEdgesOutboundroute = function(outboundRouteId, body) { 

      // verify the required parameter 'outboundRouteId' is set
      if (outboundRouteId === undefined || outboundRouteId === null) {
        throw "Missing the required parameter 'outboundRouteId' when calling putTelephonyProvidersEdgesOutboundroute";
      }

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw "Missing the required parameter 'body' when calling putTelephonyProvidersEdgesOutboundroute";
      }


      return this.apiClient.callApi(
        '/api/v2/telephony/providers/edges/outboundroutes/{outboundRouteId}', 
        'PUT', 
        { 'outboundRouteId': outboundRouteId }, 
        {  }, 
        {  }, 
        {  }, 
        body, 
        ['PureCloud Auth'], 
        ['application/json'], 
        ['application/json']
      );
    };


    /**
     * Update a Phone by ID
     * 
     * @param {String} phoneId Phone ID
     * @param {module:purecloud-platform-client-v2/model/Phone} body Phone
     */
    this.putTelephonyProvidersEdgesPhone = function(phoneId, body) { 

      // verify the required parameter 'phoneId' is set
      if (phoneId === undefined || phoneId === null) {
        throw "Missing the required parameter 'phoneId' when calling putTelephonyProvidersEdgesPhone";
      }

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw "Missing the required parameter 'body' when calling putTelephonyProvidersEdgesPhone";
      }


      return this.apiClient.callApi(
        '/api/v2/telephony/providers/edges/phones/{phoneId}', 
        'PUT', 
        { 'phoneId': phoneId }, 
        {  }, 
        {  }, 
        {  }, 
        body, 
        ['PureCloud Auth'], 
        ['application/json'], 
        ['application/json']
      );
    };


    /**
     * Update a Phone Base Settings by ID
     * 
     * @param {String} phoneBaseId Phone base ID
     * @param {module:purecloud-platform-client-v2/model/PhoneBase} body Phone base settings
     */
    this.putTelephonyProvidersEdgesPhonebasesetting = function(phoneBaseId, body) { 

      // verify the required parameter 'phoneBaseId' is set
      if (phoneBaseId === undefined || phoneBaseId === null) {
        throw "Missing the required parameter 'phoneBaseId' when calling putTelephonyProvidersEdgesPhonebasesetting";
      }

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw "Missing the required parameter 'body' when calling putTelephonyProvidersEdgesPhonebasesetting";
      }


      return this.apiClient.callApi(
        '/api/v2/telephony/providers/edges/phonebasesettings/{phoneBaseId}', 
        'PUT', 
        { 'phoneBaseId': phoneBaseId }, 
        {  }, 
        {  }, 
        {  }, 
        body, 
        ['PureCloud Auth'], 
        ['application/json'], 
        ['application/json']
      );
    };


    /**
     * Update a Site by ID.
     * 
     * @param {String} siteId Site ID
     * @param {module:purecloud-platform-client-v2/model/Site} body Site
     */
    this.putTelephonyProvidersEdgesSite = function(siteId, body) { 

      // verify the required parameter 'siteId' is set
      if (siteId === undefined || siteId === null) {
        throw "Missing the required parameter 'siteId' when calling putTelephonyProvidersEdgesSite";
      }

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw "Missing the required parameter 'body' when calling putTelephonyProvidersEdgesSite";
      }


      return this.apiClient.callApi(
        '/api/v2/telephony/providers/edges/sites/{siteId}', 
        'PUT', 
        { 'siteId': siteId }, 
        {  }, 
        {  }, 
        {  }, 
        body, 
        ['PureCloud Auth'], 
        ['application/json'], 
        ['application/json']
      );
    };


    /**
     * Update the list of Number Plans.
     * 
     * @param {String} siteId Site ID
     * @param {Array.<module:purecloud-platform-client-v2/model/NumberPlan>} body List of number plans
     */
    this.putTelephonyProvidersEdgesSiteNumberplans = function(siteId, body) { 

      // verify the required parameter 'siteId' is set
      if (siteId === undefined || siteId === null) {
        throw "Missing the required parameter 'siteId' when calling putTelephonyProvidersEdgesSiteNumberplans";
      }

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw "Missing the required parameter 'body' when calling putTelephonyProvidersEdgesSiteNumberplans";
      }


      return this.apiClient.callApi(
        '/api/v2/telephony/providers/edges/sites/{siteId}/numberplans', 
        'PUT', 
        { 'siteId': siteId }, 
        {  }, 
        {  }, 
        {  }, 
        body, 
        ['PureCloud Auth'], 
        ['application/json'], 
        ['application/json']
      );
    };


    /**
     * Update outbound route
     * 
     * @param {String} siteId Site ID
     * @param {String} outboundRouteId Outbound route ID
     * @param {module:purecloud-platform-client-v2/model/OutboundRouteBase} body OutboundRoute
     */
    this.putTelephonyProvidersEdgesSiteOutboundroute = function(siteId, outboundRouteId, body) { 

      // verify the required parameter 'siteId' is set
      if (siteId === undefined || siteId === null) {
        throw "Missing the required parameter 'siteId' when calling putTelephonyProvidersEdgesSiteOutboundroute";
      }

      // verify the required parameter 'outboundRouteId' is set
      if (outboundRouteId === undefined || outboundRouteId === null) {
        throw "Missing the required parameter 'outboundRouteId' when calling putTelephonyProvidersEdgesSiteOutboundroute";
      }

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw "Missing the required parameter 'body' when calling putTelephonyProvidersEdgesSiteOutboundroute";
      }


      return this.apiClient.callApi(
        '/api/v2/telephony/providers/edges/sites/{siteId}/outboundroutes/{outboundRouteId}', 
        'PUT', 
        { 'siteId': siteId,'outboundRouteId': outboundRouteId }, 
        {  }, 
        {  }, 
        {  }, 
        body, 
        ['PureCloud Auth'], 
        ['application/json'], 
        ['application/json']
      );
    };


    /**
     * Update a Trunk Base Settings object by ID
     * 
     * @param {String} trunkBaseSettingsId Trunk Base ID
     * @param {module:purecloud-platform-client-v2/model/TrunkBase} body Trunk base settings
     */
    this.putTelephonyProvidersEdgesTrunkbasesetting = function(trunkBaseSettingsId, body) { 

      // verify the required parameter 'trunkBaseSettingsId' is set
      if (trunkBaseSettingsId === undefined || trunkBaseSettingsId === null) {
        throw "Missing the required parameter 'trunkBaseSettingsId' when calling putTelephonyProvidersEdgesTrunkbasesetting";
      }

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw "Missing the required parameter 'body' when calling putTelephonyProvidersEdgesTrunkbasesetting";
      }


      return this.apiClient.callApi(
        '/api/v2/telephony/providers/edges/trunkbasesettings/{trunkBaseSettingsId}', 
        'PUT', 
        { 'trunkBaseSettingsId': trunkBaseSettingsId }, 
        {  }, 
        {  }, 
        {  }, 
        body, 
        ['PureCloud Auth'], 
        ['application/json'], 
        ['application/json']
      );
    };
  };

  return exports;
}));

},{"../ApiClient":8}],40:[function(require,module,exports){
(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['purecloud-platform-client-v2/ApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'));
  } else {
    // Browser globals (root is window)
    if (!root.platformClient) {
      root.platformClient = {};
    }
    root.platformClient.TokensApi = factory(root.platformClient.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * Tokens service.
   * @module purecloud-platform-client-v2/api/TokensApi
   * @version 6.0.1
   */

  /**
   * Constructs a new TokensApi. 
   * @alias module:purecloud-platform-client-v2/api/TokensApi
   * @class
   * @param {module:purecloud-platform-client-v2/ApiClient} apiClient Optional API client implementation to use,
   * default to {@link module:purecloud-platform-client-v2/ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;



    /**
     * Delete  auth token used to make the request.
     * 
     */
    this.deleteTokensMe = function() { 


      return this.apiClient.callApi(
        '/api/v2/tokens/me', 
        'DELETE', 
        {  }, 
        {  }, 
        {  }, 
        {  }, 
        null, 
        ['PureCloud Auth'], 
        ['application/json'], 
        ['application/json']
      );
    };


    /**
     * Fetch information about the current token
     * 
     */
    this.getTokensMe = function() { 


      return this.apiClient.callApi(
        '/api/v2/tokens/me', 
        'GET', 
        {  }, 
        {  }, 
        {  }, 
        {  }, 
        null, 
        ['PureCloud Auth'], 
        ['application/json'], 
        ['application/json']
      );
    };
  };

  return exports;
}));

},{"../ApiClient":8}],41:[function(require,module,exports){
(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['purecloud-platform-client-v2/ApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'));
  } else {
    // Browser globals (root is window)
    if (!root.platformClient) {
      root.platformClient = {};
    }
    root.platformClient.UserRecordingsApi = factory(root.platformClient.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * UserRecordings service.
   * @module purecloud-platform-client-v2/api/UserRecordingsApi
   * @version 6.0.1
   */

  /**
   * Constructs a new UserRecordingsApi. 
   * @alias module:purecloud-platform-client-v2/api/UserRecordingsApi
   * @class
   * @param {module:purecloud-platform-client-v2/ApiClient} apiClient Optional API client implementation to use,
   * default to {@link module:purecloud-platform-client-v2/ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;



    /**
     * Delete a user recording.
     * 
     * @param {String} recordingId User Recording ID
     */
    this.deleteUserrecording = function(recordingId) { 

      // verify the required parameter 'recordingId' is set
      if (recordingId === undefined || recordingId === null) {
        throw "Missing the required parameter 'recordingId' when calling deleteUserrecording";
      }


      return this.apiClient.callApi(
        '/api/v2/userrecordings/{recordingId}', 
        'DELETE', 
        { 'recordingId': recordingId }, 
        {  }, 
        {  }, 
        {  }, 
        null, 
        ['PureCloud Auth'], 
        ['application/json'], 
        ['application/json']
      );
    };


    /**
     * Get a user recording.
     * 
     * @param {String} recordingId User Recording ID
     * @param {Object} opts Optional parameters
     * @param {Array.<String>} opts.expand Which fields, if any, to expand.
     */
    this.getUserrecording = function(recordingId, opts) { 
      opts = opts || {};

      // verify the required parameter 'recordingId' is set
      if (recordingId === undefined || recordingId === null) {
        throw "Missing the required parameter 'recordingId' when calling getUserrecording";
      }


      return this.apiClient.callApi(
        '/api/v2/userrecordings/{recordingId}', 
        'GET', 
        { 'recordingId': recordingId }, 
        { 'expand': this.apiClient.buildCollectionParam(opts['expand'], 'multi') }, 
        {  }, 
        {  }, 
        null, 
        ['PureCloud Auth'], 
        ['application/json'], 
        ['application/json']
      );
    };


    /**
     * Download a user recording.
     * 
     * @param {String} recordingId User Recording ID
     * @param {Object} opts Optional parameters
     * @param {module:purecloud-platform-client-v2/model/String} opts.formatId The desired media format. (default to WEBM)
     */
    this.getUserrecordingMedia = function(recordingId, opts) { 
      opts = opts || {};

      // verify the required parameter 'recordingId' is set
      if (recordingId === undefined || recordingId === null) {
        throw "Missing the required parameter 'recordingId' when calling getUserrecordingMedia";
      }


      return this.apiClient.callApi(
        '/api/v2/userrecordings/{recordingId}/media', 
        'GET', 
        { 'recordingId': recordingId }, 
        { 'formatId': opts['formatId'] }, 
        {  }, 
        {  }, 
        null, 
        ['PureCloud Auth'], 
        ['application/json'], 
        ['application/json']
      );
    };


    /**
     * Get a list of user recordings.
     * 
     * @param {Object} opts Optional parameters
     * @param {Number} opts.pageSize Page size (default to 25)
     * @param {Number} opts.pageNumber Page number (default to 1)
     * @param {Array.<String>} opts.expand Which fields, if any, to expand.
     */
    this.getUserrecordings = function(opts) { 
      opts = opts || {};


      return this.apiClient.callApi(
        '/api/v2/userrecordings', 
        'GET', 
        {  }, 
        { 'pageSize': opts['pageSize'],'pageNumber': opts['pageNumber'],'expand': this.apiClient.buildCollectionParam(opts['expand'], 'multi') }, 
        {  }, 
        {  }, 
        null, 
        ['PureCloud Auth'], 
        ['application/json'], 
        ['application/json']
      );
    };


    /**
     * Get user recording summary
     * 
     */
    this.getUserrecordingsSummary = function() { 


      return this.apiClient.callApi(
        '/api/v2/userrecordings/summary', 
        'GET', 
        {  }, 
        {  }, 
        {  }, 
        {  }, 
        null, 
        ['PureCloud Auth'], 
        ['application/json'], 
        ['application/json']
      );
    };


    /**
     * Update a user recording.
     * 
     * @param {String} recordingId User Recording ID
     * @param {module:purecloud-platform-client-v2/model/UserRecording} body UserRecording
     * @param {Object} opts Optional parameters
     * @param {Array.<String>} opts.expand Which fields, if any, to expand.
     */
    this.putUserrecording = function(recordingId, body, opts) { 
      opts = opts || {};

      // verify the required parameter 'recordingId' is set
      if (recordingId === undefined || recordingId === null) {
        throw "Missing the required parameter 'recordingId' when calling putUserrecording";
      }

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw "Missing the required parameter 'body' when calling putUserrecording";
      }


      return this.apiClient.callApi(
        '/api/v2/userrecordings/{recordingId}', 
        'PUT', 
        { 'recordingId': recordingId }, 
        { 'expand': this.apiClient.buildCollectionParam(opts['expand'], 'multi') }, 
        {  }, 
        {  }, 
        body, 
        ['PureCloud Auth'], 
        ['application/json'], 
        ['application/json']
      );
    };
  };

  return exports;
}));

},{"../ApiClient":8}],42:[function(require,module,exports){
(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['purecloud-platform-client-v2/ApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'));
  } else {
    // Browser globals (root is window)
    if (!root.platformClient) {
      root.platformClient = {};
    }
    root.platformClient.UsersApi = factory(root.platformClient.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * Users service.
   * @module purecloud-platform-client-v2/api/UsersApi
   * @version 6.0.1
   */

  /**
   * Constructs a new UsersApi. 
   * @alias module:purecloud-platform-client-v2/api/UsersApi
   * @class
   * @param {module:purecloud-platform-client-v2/ApiClient} apiClient Optional API client implementation to use,
   * default to {@link module:purecloud-platform-client-v2/ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;



    /**
     * Delete user
     * 
     * @param {String} userId User ID
     */
    this.deleteUser = function(userId) { 

      // verify the required parameter 'userId' is set
      if (userId === undefined || userId === null) {
        throw "Missing the required parameter 'userId' when calling deleteUser";
      }


      return this.apiClient.callApi(
        '/api/v2/users/{userId}', 
        'DELETE', 
        { 'userId': userId }, 
        {  }, 
        {  }, 
        {  }, 
        null, 
        ['PureCloud Auth'], 
        ['application/json'], 
        ['application/json']
      );
    };


    /**
     * Removes all the roles from the user.
     * 
     * @param {String} userId User ID
     */
    this.deleteUserRoles = function(userId) { 

      // verify the required parameter 'userId' is set
      if (userId === undefined || userId === null) {
        throw "Missing the required parameter 'userId' when calling deleteUserRoles";
      }


      return this.apiClient.callApi(
        '/api/v2/users/{userId}/roles', 
        'DELETE', 
        { 'userId': userId }, 
        {  }, 
        {  }, 
        {  }, 
        null, 
        ['PureCloud Auth'], 
        ['application/json'], 
        ['application/json']
      );
    };


    /**
     * Remove routing skill from user
     * 
     * @param {String} userId User ID
     * @param {String} skillId skillId
     */
    this.deleteUserRoutingskill = function(userId, skillId) { 

      // verify the required parameter 'userId' is set
      if (userId === undefined || userId === null) {
        throw "Missing the required parameter 'userId' when calling deleteUserRoutingskill";
      }

      // verify the required parameter 'skillId' is set
      if (skillId === undefined || skillId === null) {
        throw "Missing the required parameter 'skillId' when calling deleteUserRoutingskill";
      }


      return this.apiClient.callApi(
        '/api/v2/users/{userId}/routingskills/{skillId}', 
        'DELETE', 
        { 'userId': userId,'skillId': skillId }, 
        {  }, 
        {  }, 
        {  }, 
        null, 
        ['PureCloud Auth'], 
        ['application/json'], 
        ['application/json']
      );
    };


    /**
     * Clear associated station
     * 
     * @param {String} userId User ID
     */
    this.deleteUserStationAssociatedstation = function(userId) { 

      // verify the required parameter 'userId' is set
      if (userId === undefined || userId === null) {
        throw "Missing the required parameter 'userId' when calling deleteUserStationAssociatedstation";
      }


      return this.apiClient.callApi(
        '/api/v2/users/{userId}/station/associatedstation', 
        'DELETE', 
        { 'userId': userId }, 
        {  }, 
        {  }, 
        {  }, 
        null, 
        ['PureCloud Auth'], 
        ['application/json'], 
        ['application/json']
      );
    };


    /**
     * Clear default station
     * 
     * @param {String} userId User ID
     */
    this.deleteUserStationDefaultstation = function(userId) { 

      // verify the required parameter 'userId' is set
      if (userId === undefined || userId === null) {
        throw "Missing the required parameter 'userId' when calling deleteUserStationDefaultstation";
      }


      return this.apiClient.callApi(
        '/api/v2/users/{userId}/station/defaultstation', 
        'DELETE', 
        { 'userId': userId }, 
        {  }, 
        {  }, 
        {  }, 
        null, 
        ['PureCloud Auth'], 
        ['application/json'], 
        ['application/json']
      );
    };


    /**
     * Fetch field config for an entity type
     * 
     * @param {module:purecloud-platform-client-v2/model/String} type Field type
     */
    this.getFieldconfig = function(type) { 

      // verify the required parameter 'type' is set
      if (type === undefined || type === null) {
        throw "Missing the required parameter 'type' when calling getFieldconfig";
      }


      return this.apiClient.callApi(
        '/api/v2/fieldconfig', 
        'GET', 
        {  }, 
        { 'type': type }, 
        {  }, 
        {  }, 
        null, 
        ['PureCloud Auth'], 
        ['application/json'], 
        ['application/json']
      );
    };


    /**
     * Get user.
     * 
     * @param {String} userId User ID
     * @param {Object} opts Optional parameters
     * @param {Array.<String>} opts.expand Which fields, if any, to expand
     * @param {module:purecloud-platform-client-v2/model/String} opts.state Search for a user with this state (default to active)
     */
    this.getUser = function(userId, opts) { 
      opts = opts || {};

      // verify the required parameter 'userId' is set
      if (userId === undefined || userId === null) {
        throw "Missing the required parameter 'userId' when calling getUser";
      }


      return this.apiClient.callApi(
        '/api/v2/users/{userId}', 
        'GET', 
        { 'userId': userId }, 
        { 'expand': this.apiClient.buildCollectionParam(opts['expand'], 'multi'),'state': opts['state'] }, 
        {  }, 
        {  }, 
        null, 
        ['PureCloud Auth'], 
        ['application/json'], 
        ['application/json']
      );
    };


    /**
     * Get adjacents
     * 
     * @param {String} userId User ID
     * @param {Object} opts Optional parameters
     * @param {Array.<String>} opts.expand Which fields, if any, to expand
     */
    this.getUserAdjacents = function(userId, opts) { 
      opts = opts || {};

      // verify the required parameter 'userId' is set
      if (userId === undefined || userId === null) {
        throw "Missing the required parameter 'userId' when calling getUserAdjacents";
      }


      return this.apiClient.callApi(
        '/api/v2/users/{userId}/adjacents', 
        'GET', 
        { 'userId': userId }, 
        { 'expand': this.apiClient.buildCollectionParam(opts['expand'], 'multi') }, 
        {  }, 
        {  }, 
        null, 
        ['PureCloud Auth'], 
        ['application/json'], 
        ['application/json']
      );
    };


    /**
     * Get a user&#39;s CallForwarding
     * 
     * @param {String} userId User ID
     */
    this.getUserCallforwarding = function(userId) { 

      // verify the required parameter 'userId' is set
      if (userId === undefined || userId === null) {
        throw "Missing the required parameter 'userId' when calling getUserCallforwarding";
      }


      return this.apiClient.callApi(
        '/api/v2/users/{userId}/callforwarding', 
        'GET', 
        { 'userId': userId }, 
        {  }, 
        {  }, 
        {  }, 
        null, 
        ['PureCloud Auth'], 
        ['application/json'], 
        ['application/json']
      );
    };


    /**
     * Get direct reports
     * 
     * @param {String} userId User ID
     * @param {Object} opts Optional parameters
     * @param {Array.<String>} opts.expand Which fields, if any, to expand
     */
    this.getUserDirectreports = function(userId, opts) { 
      opts = opts || {};

      // verify the required parameter 'userId' is set
      if (userId === undefined || userId === null) {
        throw "Missing the required parameter 'userId' when calling getUserDirectreports";
      }


      return this.apiClient.callApi(
        '/api/v2/users/{userId}/directreports', 
        'GET', 
        { 'userId': userId }, 
        { 'expand': this.apiClient.buildCollectionParam(opts['expand'], 'multi') }, 
        {  }, 
        {  }, 
        null, 
        ['PureCloud Auth'], 
        ['application/json'], 
        ['application/json']
      );
    };


    /**
     * Get favorites
     * 
     * @param {String} userId User ID
     * @param {Object} opts Optional parameters
     * @param {Number} opts.pageSize Page size (default to 25)
     * @param {Number} opts.pageNumber Page number (default to 1)
     * @param {String} opts.sortOrder Sort order (default to ASC)
     * @param {Array.<String>} opts.expand Which fields, if any, to expand
     */
    this.getUserFavorites = function(userId, opts) { 
      opts = opts || {};

      // verify the required parameter 'userId' is set
      if (userId === undefined || userId === null) {
        throw "Missing the required parameter 'userId' when calling getUserFavorites";
      }


      return this.apiClient.callApi(
        '/api/v2/users/{userId}/favorites', 
        'GET', 
        { 'userId': userId }, 
        { 'pageSize': opts['pageSize'],'pageNumber': opts['pageNumber'],'sortOrder': opts['sortOrder'],'expand': this.apiClient.buildCollectionParam(opts['expand'], 'multi') }, 
        {  }, 
        {  }, 
        null, 
        ['PureCloud Auth'], 
        ['application/json'], 
        ['application/json']
      );
    };


    /**
     * Get a user&#39;s Geolocation
     * 
     * @param {String} userId user Id
     * @param {String} clientId client Id
     */
    this.getUserGeolocation = function(userId, clientId) { 

      // verify the required parameter 'userId' is set
      if (userId === undefined || userId === null) {
        throw "Missing the required parameter 'userId' when calling getUserGeolocation";
      }

      // verify the required parameter 'clientId' is set
      if (clientId === undefined || clientId === null) {
        throw "Missing the required parameter 'clientId' when calling getUserGeolocation";
      }


      return this.apiClient.callApi(
        '/api/v2/users/{userId}/geolocations/{clientId}', 
        'GET', 
        { 'userId': userId,'clientId': clientId }, 
        {  }, 
        {  }, 
        {  }, 
        null, 
        ['PureCloud Auth'], 
        ['application/json'], 
        ['application/json']
      );
    };


    /**
     * Get a OutOfOffice
     * 
     * @param {String} userId User ID
     */
    this.getUserOutofoffice = function(userId) { 

      // verify the required parameter 'userId' is set
      if (userId === undefined || userId === null) {
        throw "Missing the required parameter 'userId' when calling getUserOutofoffice";
      }


      return this.apiClient.callApi(
        '/api/v2/users/{userId}/outofoffice', 
        'GET', 
        { 'userId': userId }, 
        {  }, 
        {  }, 
        {  }, 
        null, 
        ['PureCloud Auth'], 
        ['application/json'], 
        ['application/json']
      );
    };


    /**
     * List profile skills for a user
     * 
     * @param {String} userId User ID
     */
    this.getUserProfileskills = function(userId) { 

      // verify the required parameter 'userId' is set
      if (userId === undefined || userId === null) {
        throw "Missing the required parameter 'userId' when calling getUserProfileskills";
      }


      return this.apiClient.callApi(
        '/api/v2/users/{userId}/profileskills', 
        'GET', 
        { 'userId': userId }, 
        {  }, 
        {  }, 
        {  }, 
        null, 
        ['PureCloud Auth'], 
        ['application/json'], 
        ['application/json']
      );
    };


    /**
     * Get queues for user
     * 
     * @param {String} userId User ID
     * @param {Object} opts Optional parameters
     * @param {Number} opts.pageSize Page size (default to 25)
     * @param {Number} opts.pageNumber Page number (default to 1)
     * @param {Boolean} opts.joined Is joined to the queue (default to true)
     */
    this.getUserQueues = function(userId, opts) { 
      opts = opts || {};

      // verify the required parameter 'userId' is set
      if (userId === undefined || userId === null) {
        throw "Missing the required parameter 'userId' when calling getUserQueues";
      }


      return this.apiClient.callApi(
        '/api/v2/users/{userId}/queues', 
        'GET', 
        { 'userId': userId }, 
        { 'pageSize': opts['pageSize'],'pageNumber': opts['pageNumber'],'joined': opts['joined'] }, 
        {  }, 
        {  }, 
        null, 
        ['PureCloud Auth'], 
        ['application/json'], 
        ['application/json']
      );
    };


    /**
     * Returns a listing of roles and permissions for a user.
     * 
     * @param {String} userId User ID
     */
    this.getUserRoles = function(userId) { 

      // verify the required parameter 'userId' is set
      if (userId === undefined || userId === null) {
        throw "Missing the required parameter 'userId' when calling getUserRoles";
      }


      return this.apiClient.callApi(
        '/api/v2/users/{userId}/roles', 
        'GET', 
        { 'userId': userId }, 
        {  }, 
        {  }, 
        {  }, 
        null, 
        ['PureCloud Auth'], 
        ['application/json'], 
        ['application/json']
      );
    };


    /**
     * List routing skills for user
     * 
     * @param {String} userId User ID
     * @param {Object} opts Optional parameters
     * @param {Number} opts.pageSize Page size (default to 25)
     * @param {Number} opts.pageNumber Page number (default to 1)
     * @param {module:purecloud-platform-client-v2/model/String} opts.sortOrder Ascending or descending sort order (default to ASC)
     */
    this.getUserRoutingskills = function(userId, opts) { 
      opts = opts || {};

      // verify the required parameter 'userId' is set
      if (userId === undefined || userId === null) {
        throw "Missing the required parameter 'userId' when calling getUserRoutingskills";
      }


      return this.apiClient.callApi(
        '/api/v2/users/{userId}/routingskills', 
        'GET', 
        { 'userId': userId }, 
        { 'pageSize': opts['pageSize'],'pageNumber': opts['pageNumber'],'sortOrder': opts['sortOrder'] }, 
        {  }, 
        {  }, 
        null, 
        ['PureCloud Auth'], 
        ['application/json'], 
        ['application/json']
      );
    };


    /**
     * Fetch the routing status of a user
     * 
     * @param {String} userId User ID
     */
    this.getUserRoutingstatus = function(userId) { 

      // verify the required parameter 'userId' is set
      if (userId === undefined || userId === null) {
        throw "Missing the required parameter 'userId' when calling getUserRoutingstatus";
      }


      return this.apiClient.callApi(
        '/api/v2/users/{userId}/routingstatus', 
        'GET', 
        { 'userId': userId }, 
        {  }, 
        {  }, 
        {  }, 
        null, 
        ['PureCloud Auth'], 
        ['application/json'], 
        ['application/json']
      );
    };


    /**
     * Get station information for user
     * 
     * @param {String} userId User ID
     */
    this.getUserStation = function(userId) { 

      // verify the required parameter 'userId' is set
      if (userId === undefined || userId === null) {
        throw "Missing the required parameter 'userId' when calling getUserStation";
      }


      return this.apiClient.callApi(
        '/api/v2/users/{userId}/station', 
        'GET', 
        { 'userId': userId }, 
        {  }, 
        {  }, 
        {  }, 
        null, 
        ['PureCloud Auth'], 
        ['application/json'], 
        ['application/json']
      );
    };


    /**
     * Get superiors
     * 
     * @param {String} userId User ID
     * @param {Object} opts Optional parameters
     * @param {Array.<String>} opts.expand Which fields, if any, to expand
     */
    this.getUserSuperiors = function(userId, opts) { 
      opts = opts || {};

      // verify the required parameter 'userId' is set
      if (userId === undefined || userId === null) {
        throw "Missing the required parameter 'userId' when calling getUserSuperiors";
      }


      return this.apiClient.callApi(
        '/api/v2/users/{userId}/superiors', 
        'GET', 
        { 'userId': userId }, 
        { 'expand': this.apiClient.buildCollectionParam(opts['expand'], 'multi') }, 
        {  }, 
        {  }, 
        null, 
        ['PureCloud Auth'], 
        ['application/json'], 
        ['application/json']
      );
    };


    /**
     * Get the list of available users.
     * 
     * @param {Object} opts Optional parameters
     * @param {Number} opts.pageSize Page size (default to 25)
     * @param {Number} opts.pageNumber Page number (default to 1)
     * @param {Array.<String>} opts.id id
     * @param {module:purecloud-platform-client-v2/model/String} opts.sortOrder Ascending or descending sort order (default to ASC)
     * @param {Array.<String>} opts.expand Which fields, if any, to expand
     * @param {module:purecloud-platform-client-v2/model/String} opts.state Only list users of this state (default to active)
     */
    this.getUsers = function(opts) { 
      opts = opts || {};


      return this.apiClient.callApi(
        '/api/v2/users', 
        'GET', 
        {  }, 
        { 'pageSize': opts['pageSize'],'pageNumber': opts['pageNumber'],'id': this.apiClient.buildCollectionParam(opts['id'], 'multi'),'sortOrder': opts['sortOrder'],'expand': this.apiClient.buildCollectionParam(opts['expand'], 'multi'),'state': opts['state'] }, 
        {  }, 
        {  }, 
        null, 
        ['PureCloud Auth'], 
        ['application/json'], 
        ['application/json']
      );
    };


    /**
     * Get current user details.
     * This request is not valid when using the Client Credentials OAuth grant.
     * @param {Object} opts Optional parameters
     * @param {Array.<String>} opts.expand Which fields, if any, to expand.
     */
    this.getUsersMe = function(opts) { 
      opts = opts || {};


      return this.apiClient.callApi(
        '/api/v2/users/me', 
        'GET', 
        {  }, 
        { 'expand': this.apiClient.buildCollectionParam(opts['expand'], 'multi') }, 
        {  }, 
        {  }, 
        null, 
        ['PureCloud Auth'], 
        ['application/json'], 
        ['application/json']
      );
    };


    /**
     * Search users using the q64 value returned from a previous search
     * 
     * @param {String} q64 q64
     * @param {Object} opts Optional parameters
     * @param {Array.<String>} opts.expand expand
     */
    this.getUsersSearch = function(q64, opts) { 
      opts = opts || {};

      // verify the required parameter 'q64' is set
      if (q64 === undefined || q64 === null) {
        throw "Missing the required parameter 'q64' when calling getUsersSearch";
      }


      return this.apiClient.callApi(
        '/api/v2/users/search', 
        'GET', 
        {  }, 
        { 'q64': q64,'expand': this.apiClient.buildCollectionParam(opts['expand'], 'multi') }, 
        {  }, 
        {  }, 
        null, 
        ['PureCloud Auth'], 
        ['application/json'], 
        ['application/json']
      );
    };


    /**
     * Update user
     * 
     * @param {String} userId User ID
     * @param {module:purecloud-platform-client-v2/model/UpdateUser} body User
     */
    this.patchUser = function(userId, body) { 

      // verify the required parameter 'userId' is set
      if (userId === undefined || userId === null) {
        throw "Missing the required parameter 'userId' when calling patchUser";
      }

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw "Missing the required parameter 'body' when calling patchUser";
      }


      return this.apiClient.callApi(
        '/api/v2/users/{userId}', 
        'PATCH', 
        { 'userId': userId }, 
        {  }, 
        {  }, 
        {  }, 
        body, 
        ['PureCloud Auth'], 
        ['application/json'], 
        ['application/json']
      );
    };


    /**
     * Patch a user&#39;s CallForwarding
     * 
     * @param {String} userId User ID
     * @param {module:purecloud-platform-client-v2/model/CallForwarding} body Call forwarding
     */
    this.patchUserCallforwarding = function(userId, body) { 

      // verify the required parameter 'userId' is set
      if (userId === undefined || userId === null) {
        throw "Missing the required parameter 'userId' when calling patchUserCallforwarding";
      }

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw "Missing the required parameter 'body' when calling patchUserCallforwarding";
      }


      return this.apiClient.callApi(
        '/api/v2/users/{userId}/callforwarding', 
        'PATCH', 
        { 'userId': userId }, 
        {  }, 
        {  }, 
        {  }, 
        body, 
        ['PureCloud Auth'], 
        ['application/json'], 
        ['application/json']
      );
    };


    /**
     * Patch a user&#39;s Geolocation
     * The geolocation object can be patched one of three ways. Option 1: Set the &#39;primary&#39; property to true. This will set the client as the user&#39;s primary geolocation source.  Option 2: Provide the &#39;latitude&#39; and &#39;longitude&#39; values.  This will enqueue an asynchronous update of the &#39;city&#39;, &#39;region&#39;, and &#39;country&#39;, generating a notification. A subsequent GET operation will include the new values for &#39;city&#39;, &#39;region&#39; and &#39;country&#39;.  Option 3:  Provide the &#39;city&#39;, &#39;region&#39;, &#39;country&#39; values.  Option 1 can be combined with Option 2 or Option 3.  For example, update the client as primary and provide latitude and longitude values.
     * @param {String} userId user Id
     * @param {String} clientId client Id
     * @param {module:purecloud-platform-client-v2/model/Geolocation} body Geolocation
     */
    this.patchUserGeolocation = function(userId, clientId, body) { 

      // verify the required parameter 'userId' is set
      if (userId === undefined || userId === null) {
        throw "Missing the required parameter 'userId' when calling patchUserGeolocation";
      }

      // verify the required parameter 'clientId' is set
      if (clientId === undefined || clientId === null) {
        throw "Missing the required parameter 'clientId' when calling patchUserGeolocation";
      }

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw "Missing the required parameter 'body' when calling patchUserGeolocation";
      }


      return this.apiClient.callApi(
        '/api/v2/users/{userId}/geolocations/{clientId}', 
        'PATCH', 
        { 'userId': userId,'clientId': clientId }, 
        {  }, 
        {  }, 
        {  }, 
        body, 
        ['PureCloud Auth'], 
        ['application/json'], 
        ['application/json']
      );
    };


    /**
     * Join or unjoin a queue for a user
     * 
     * @param {String} queueId Queue ID
     * @param {String} userId User ID
     * @param {module:purecloud-platform-client-v2/model/UserQueue} body Queue Member
     */
    this.patchUserQueue = function(queueId, userId, body) { 

      // verify the required parameter 'queueId' is set
      if (queueId === undefined || queueId === null) {
        throw "Missing the required parameter 'queueId' when calling patchUserQueue";
      }

      // verify the required parameter 'userId' is set
      if (userId === undefined || userId === null) {
        throw "Missing the required parameter 'userId' when calling patchUserQueue";
      }

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw "Missing the required parameter 'body' when calling patchUserQueue";
      }


      return this.apiClient.callApi(
        '/api/v2/users/{userId}/queues/{queueId}', 
        'PATCH', 
        { 'queueId': queueId,'userId': userId }, 
        {  }, 
        {  }, 
        {  }, 
        body, 
        ['PureCloud Auth'], 
        ['application/json'], 
        ['application/json']
      );
    };


    /**
     * Join or unjoin a set of queues for a user
     * 
     * @param {String} userId User ID
     * @param {Array.<module:purecloud-platform-client-v2/model/UserQueue>} body User Queues
     */
    this.patchUserQueues = function(userId, body) { 

      // verify the required parameter 'userId' is set
      if (userId === undefined || userId === null) {
        throw "Missing the required parameter 'userId' when calling patchUserQueues";
      }

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw "Missing the required parameter 'body' when calling patchUserQueues";
      }


      return this.apiClient.callApi(
        '/api/v2/users/{userId}/queues', 
        'PATCH', 
        { 'userId': userId }, 
        {  }, 
        {  }, 
        {  }, 
        body, 
        ['PureCloud Auth'], 
        ['application/json'], 
        ['application/json']
      );
    };


    /**
     * Query for user aggregates
     * 
     * @param {module:purecloud-platform-client-v2/model/AggregationQuery} body query
     */
    this.postAnalyticsUsersAggregatesQuery = function(body) { 

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw "Missing the required parameter 'body' when calling postAnalyticsUsersAggregatesQuery";
      }


      return this.apiClient.callApi(
        '/api/v2/analytics/users/aggregates/query', 
        'POST', 
        {  }, 
        {  }, 
        {  }, 
        {  }, 
        body, 
        ['PureCloud Auth'], 
        ['application/json'], 
        ['application/json']
      );
    };


    /**
     * Query for user details
     * 
     * @param {module:purecloud-platform-client-v2/model/UserDetailsQuery} body query
     */
    this.postAnalyticsUsersDetailsQuery = function(body) { 

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw "Missing the required parameter 'body' when calling postAnalyticsUsersDetailsQuery";
      }


      return this.apiClient.callApi(
        '/api/v2/analytics/users/details/query', 
        'POST', 
        {  }, 
        {  }, 
        {  }, 
        {  }, 
        body, 
        ['PureCloud Auth'], 
        ['application/json'], 
        ['application/json']
      );
    };


    /**
     * Query for user observations
     * 
     * @param {module:purecloud-platform-client-v2/model/ObservationQuery} body query
     */
    this.postAnalyticsUsersObservationsQuery = function(body) { 

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw "Missing the required parameter 'body' when calling postAnalyticsUsersObservationsQuery";
      }


      return this.apiClient.callApi(
        '/api/v2/analytics/users/observations/query', 
        'POST', 
        {  }, 
        {  }, 
        {  }, 
        {  }, 
        body, 
        ['PureCloud Auth'], 
        ['application/json'], 
        ['application/json']
      );
    };


    /**
     * Send an activation email to the user
     * 
     * @param {String} userId User ID
     * @param {Object} opts Optional parameters
     * @param {Boolean} opts.force Resend the invitation even if one is already outstanding (default to false)
     */
    this.postUserInvite = function(userId, opts) { 
      opts = opts || {};

      // verify the required parameter 'userId' is set
      if (userId === undefined || userId === null) {
        throw "Missing the required parameter 'userId' when calling postUserInvite";
      }


      return this.apiClient.callApi(
        '/api/v2/users/{userId}/invite', 
        'POST', 
        { 'userId': userId }, 
        { 'force': opts['force'] }, 
        {  }, 
        {  }, 
        null, 
        ['PureCloud Auth'], 
        ['application/json'], 
        ['application/json']
      );
    };


    /**
     * Add routing skill to user
     * 
     * @param {String} userId User ID
     * @param {module:purecloud-platform-client-v2/model/UserRoutingSkillPost} body Skill
     */
    this.postUserRoutingskills = function(userId, body) { 

      // verify the required parameter 'userId' is set
      if (userId === undefined || userId === null) {
        throw "Missing the required parameter 'userId' when calling postUserRoutingskills";
      }

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw "Missing the required parameter 'body' when calling postUserRoutingskills";
      }


      return this.apiClient.callApi(
        '/api/v2/users/{userId}/routingskills', 
        'POST', 
        { 'userId': userId }, 
        {  }, 
        {  }, 
        {  }, 
        body, 
        ['PureCloud Auth'], 
        ['application/json'], 
        ['application/json']
      );
    };


    /**
     * Create user
     * 
     * @param {module:purecloud-platform-client-v2/model/CreateUser} body User
     */
    this.postUsers = function(body) { 

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw "Missing the required parameter 'body' when calling postUsers";
      }


      return this.apiClient.callApi(
        '/api/v2/users', 
        'POST', 
        {  }, 
        {  }, 
        {  }, 
        {  }, 
        body, 
        ['PureCloud Auth'], 
        ['application/json'], 
        ['application/json']
      );
    };


    /**
     * Search users
     * 
     * @param {module:purecloud-platform-client-v2/model/UserSearchRequest} body Search request options
     */
    this.postUsersSearch = function(body) { 

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw "Missing the required parameter 'body' when calling postUsersSearch";
      }


      return this.apiClient.callApi(
        '/api/v2/users/search', 
        'POST', 
        {  }, 
        {  }, 
        {  }, 
        {  }, 
        body, 
        ['PureCloud Auth'], 
        ['application/json'], 
        ['application/json']
      );
    };


    /**
     * Update a user&#39;s CallForwarding
     * 
     * @param {String} userId User ID
     * @param {module:purecloud-platform-client-v2/model/CallForwarding} body Call forwarding
     */
    this.putUserCallforwarding = function(userId, body) { 

      // verify the required parameter 'userId' is set
      if (userId === undefined || userId === null) {
        throw "Missing the required parameter 'userId' when calling putUserCallforwarding";
      }

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw "Missing the required parameter 'body' when calling putUserCallforwarding";
      }


      return this.apiClient.callApi(
        '/api/v2/users/{userId}/callforwarding', 
        'PUT', 
        { 'userId': userId }, 
        {  }, 
        {  }, 
        {  }, 
        body, 
        ['PureCloud Auth'], 
        ['application/json'], 
        ['application/json']
      );
    };


    /**
     * Update an OutOfOffice
     * 
     * @param {String} userId User ID
     * @param {module:purecloud-platform-client-v2/model/OutOfOffice} body The updated UserPresence
     */
    this.putUserOutofoffice = function(userId, body) { 

      // verify the required parameter 'userId' is set
      if (userId === undefined || userId === null) {
        throw "Missing the required parameter 'userId' when calling putUserOutofoffice";
      }

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw "Missing the required parameter 'body' when calling putUserOutofoffice";
      }


      return this.apiClient.callApi(
        '/api/v2/users/{userId}/outofoffice', 
        'PUT', 
        { 'userId': userId }, 
        {  }, 
        {  }, 
        {  }, 
        body, 
        ['PureCloud Auth'], 
        ['application/json'], 
        ['application/json']
      );
    };


    /**
     * Update profile skills for a user
     * 
     * @param {String} userId User ID
     * @param {Object} opts Optional parameters
     * @param {Array.<module:purecloud-platform-client-v2/model/String>} opts.body Skills
     */
    this.putUserProfileskills = function(userId, opts) { 
      opts = opts || {};

      // verify the required parameter 'userId' is set
      if (userId === undefined || userId === null) {
        throw "Missing the required parameter 'userId' when calling putUserProfileskills";
      }


      return this.apiClient.callApi(
        '/api/v2/users/{userId}/profileskills', 
        'PUT', 
        { 'userId': userId }, 
        {  }, 
        {  }, 
        {  }, 
        opts['body'], 
        ['PureCloud Auth'], 
        ['application/json'], 
        ['application/json']
      );
    };


    /**
     * Sets the user&#39;s roles
     * 
     * @param {String} userId User ID
     * @param {Array.<module:purecloud-platform-client-v2/model/String>} body List of roles
     */
    this.putUserRoles = function(userId, body) { 

      // verify the required parameter 'userId' is set
      if (userId === undefined || userId === null) {
        throw "Missing the required parameter 'userId' when calling putUserRoles";
      }

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw "Missing the required parameter 'body' when calling putUserRoles";
      }


      return this.apiClient.callApi(
        '/api/v2/users/{userId}/roles', 
        'PUT', 
        { 'userId': userId }, 
        {  }, 
        {  }, 
        {  }, 
        body, 
        ['PureCloud Auth'], 
        ['application/json'], 
        ['application/json']
      );
    };


    /**
     * Update routing skill proficiency or state.
     * 
     * @param {String} userId User ID
     * @param {String} skillId skillId
     * @param {module:purecloud-platform-client-v2/model/UserRoutingSkill} body Skill
     */
    this.putUserRoutingskill = function(userId, skillId, body) { 

      // verify the required parameter 'userId' is set
      if (userId === undefined || userId === null) {
        throw "Missing the required parameter 'userId' when calling putUserRoutingskill";
      }

      // verify the required parameter 'skillId' is set
      if (skillId === undefined || skillId === null) {
        throw "Missing the required parameter 'skillId' when calling putUserRoutingskill";
      }

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw "Missing the required parameter 'body' when calling putUserRoutingskill";
      }


      return this.apiClient.callApi(
        '/api/v2/users/{userId}/routingskills/{skillId}', 
        'PUT', 
        { 'userId': userId,'skillId': skillId }, 
        {  }, 
        {  }, 
        {  }, 
        body, 
        ['PureCloud Auth'], 
        ['application/json'], 
        ['application/json']
      );
    };


    /**
     * Update the routing status of a user
     * 
     * @param {String} userId User ID
     * @param {module:purecloud-platform-client-v2/model/RoutingStatus} body Routing Status
     */
    this.putUserRoutingstatus = function(userId, body) { 

      // verify the required parameter 'userId' is set
      if (userId === undefined || userId === null) {
        throw "Missing the required parameter 'userId' when calling putUserRoutingstatus";
      }

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw "Missing the required parameter 'body' when calling putUserRoutingstatus";
      }


      return this.apiClient.callApi(
        '/api/v2/users/{userId}/routingstatus', 
        'PUT', 
        { 'userId': userId }, 
        {  }, 
        {  }, 
        {  }, 
        body, 
        ['PureCloud Auth'], 
        ['application/json'], 
        ['application/json']
      );
    };


    /**
     * Set associated station
     * 
     * @param {String} userId User ID
     * @param {String} stationId stationId
     */
    this.putUserStationAssociatedstationStationId = function(userId, stationId) { 

      // verify the required parameter 'userId' is set
      if (userId === undefined || userId === null) {
        throw "Missing the required parameter 'userId' when calling putUserStationAssociatedstationStationId";
      }

      // verify the required parameter 'stationId' is set
      if (stationId === undefined || stationId === null) {
        throw "Missing the required parameter 'stationId' when calling putUserStationAssociatedstationStationId";
      }


      return this.apiClient.callApi(
        '/api/v2/users/{userId}/station/associatedstation/{stationId}', 
        'PUT', 
        { 'userId': userId,'stationId': stationId }, 
        {  }, 
        {  }, 
        {  }, 
        null, 
        ['PureCloud Auth'], 
        ['application/json'], 
        ['application/json']
      );
    };


    /**
     * Set default station
     * 
     * @param {String} userId User ID
     * @param {String} stationId stationId
     */
    this.putUserStationDefaultstationStationId = function(userId, stationId) { 

      // verify the required parameter 'userId' is set
      if (userId === undefined || userId === null) {
        throw "Missing the required parameter 'userId' when calling putUserStationDefaultstationStationId";
      }

      // verify the required parameter 'stationId' is set
      if (stationId === undefined || stationId === null) {
        throw "Missing the required parameter 'stationId' when calling putUserStationDefaultstationStationId";
      }


      return this.apiClient.callApi(
        '/api/v2/users/{userId}/station/defaultstation/{stationId}', 
        'PUT', 
        { 'userId': userId,'stationId': stationId }, 
        {  }, 
        {  }, 
        {  }, 
        null, 
        ['PureCloud Auth'], 
        ['application/json'], 
        ['application/json']
      );
    };
  };

  return exports;
}));

},{"../ApiClient":8}],43:[function(require,module,exports){
(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['purecloud-platform-client-v2/ApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'));
  } else {
    // Browser globals (root is window)
    if (!root.platformClient) {
      root.platformClient = {};
    }
    root.platformClient.UtilitiesApi = factory(root.platformClient.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * Utilities service.
   * @module purecloud-platform-client-v2/api/UtilitiesApi
   * @version 6.0.1
   */

  /**
   * Constructs a new UtilitiesApi. 
   * @alias module:purecloud-platform-client-v2/api/UtilitiesApi
   * @class
   * @param {module:purecloud-platform-client-v2/ApiClient} apiClient Optional API client implementation to use,
   * default to {@link module:purecloud-platform-client-v2/ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;



    /**
     * Get the current system date/time
     * 
     */
    this.getDate = function() { 


      return this.apiClient.callApi(
        '/api/v2/date', 
        'GET', 
        {  }, 
        {  }, 
        {  }, 
        {  }, 
        null, 
        ['PureCloud Auth'], 
        ['application/json'], 
        ['application/json']
      );
    };


    /**
     * Get time zones list
     * 
     * @param {Object} opts Optional parameters
     * @param {Number} opts.pageSize Page size (default to 25)
     * @param {Number} opts.pageNumber Page number (default to 1)
     */
    this.getTimezones = function(opts) { 
      opts = opts || {};


      return this.apiClient.callApi(
        '/api/v2/timezones', 
        'GET', 
        {  }, 
        { 'pageSize': opts['pageSize'],'pageNumber': opts['pageNumber'] }, 
        {  }, 
        {  }, 
        null, 
        ['PureCloud Auth'], 
        ['application/json'], 
        ['application/json']
      );
    };


    /**
     * Returns the information about an X509 PEM encoded certificate or certificate chain.
     * 
     * @param {module:purecloud-platform-client-v2/model/Certificate} body Certificate
     */
    this.postCertificateDetails = function(body) { 

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw "Missing the required parameter 'body' when calling postCertificateDetails";
      }


      return this.apiClient.callApi(
        '/api/v2/certificate/details', 
        'POST', 
        {  }, 
        {  }, 
        {  }, 
        {  }, 
        body, 
        ['PureCloud Auth'], 
        ['application/json'], 
        ['application/json']
      );
    };
  };

  return exports;
}));

},{"../ApiClient":8}],44:[function(require,module,exports){
(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['purecloud-platform-client-v2/ApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'));
  } else {
    // Browser globals (root is window)
    if (!root.platformClient) {
      root.platformClient = {};
    }
    root.platformClient.VoicemailApi = factory(root.platformClient.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * Voicemail service.
   * @module purecloud-platform-client-v2/api/VoicemailApi
   * @version 6.0.1
   */

  /**
   * Constructs a new VoicemailApi. 
   * @alias module:purecloud-platform-client-v2/api/VoicemailApi
   * @class
   * @param {module:purecloud-platform-client-v2/ApiClient} apiClient Optional API client implementation to use,
   * default to {@link module:purecloud-platform-client-v2/ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;



    /**
     * Delete a message.
     * 
     * @param {String} messageId Message ID
     */
    this.deleteVoicemailMessage = function(messageId) { 

      // verify the required parameter 'messageId' is set
      if (messageId === undefined || messageId === null) {
        throw "Missing the required parameter 'messageId' when calling deleteVoicemailMessage";
      }


      return this.apiClient.callApi(
        '/api/v2/voicemail/messages/{messageId}', 
        'DELETE', 
        { 'messageId': messageId }, 
        {  }, 
        {  }, 
        {  }, 
        null, 
        ['PureCloud Auth'], 
        ['application/json'], 
        ['application/json']
      );
    };


    /**
     * Delete all voicemail messages
     * 
     */
    this.deleteVoicemailMessages = function() { 


      return this.apiClient.callApi(
        '/api/v2/voicemail/messages', 
        'DELETE', 
        {  }, 
        {  }, 
        {  }, 
        {  }, 
        null, 
        ['PureCloud Auth'], 
        ['application/json'], 
        ['application/json']
      );
    };


    /**
     * Get the group&#39;s mailbox information
     * 
     * @param {String} groupId groupId
     */
    this.getVoicemailGroupMailbox = function(groupId) { 

      // verify the required parameter 'groupId' is set
      if (groupId === undefined || groupId === null) {
        throw "Missing the required parameter 'groupId' when calling getVoicemailGroupMailbox";
      }


      return this.apiClient.callApi(
        '/api/v2/voicemail/groups/{groupId}/mailbox', 
        'GET', 
        { 'groupId': groupId }, 
        {  }, 
        {  }, 
        {  }, 
        null, 
        ['PureCloud Auth'], 
        ['application/json'], 
        ['application/json']
      );
    };


    /**
     * List voicemail messages
     * 
     * @param {String} groupId Group ID
     * @param {Object} opts Optional parameters
     * @param {Number} opts.pageSize Page size (default to 25)
     * @param {Number} opts.pageNumber Page number (default to 1)
     */
    this.getVoicemailGroupMessages = function(groupId, opts) { 
      opts = opts || {};

      // verify the required parameter 'groupId' is set
      if (groupId === undefined || groupId === null) {
        throw "Missing the required parameter 'groupId' when calling getVoicemailGroupMessages";
      }


      return this.apiClient.callApi(
        '/api/v2/voicemail/groups/{groupId}/messages', 
        'GET', 
        { 'groupId': groupId }, 
        { 'pageSize': opts['pageSize'],'pageNumber': opts['pageNumber'] }, 
        {  }, 
        {  }, 
        null, 
        ['PureCloud Auth'], 
        ['application/json'], 
        ['application/json']
      );
    };


    /**
     * Get a group&#39;s voicemail policy
     * 
     * @param {String} groupId Group ID
     */
    this.getVoicemailGroupPolicy = function(groupId) { 

      // verify the required parameter 'groupId' is set
      if (groupId === undefined || groupId === null) {
        throw "Missing the required parameter 'groupId' when calling getVoicemailGroupPolicy";
      }


      return this.apiClient.callApi(
        '/api/v2/voicemail/groups/{groupId}/policy', 
        'GET', 
        { 'groupId': groupId }, 
        {  }, 
        {  }, 
        {  }, 
        null, 
        ['PureCloud Auth'], 
        ['application/json'], 
        ['application/json']
      );
    };


    /**
     * Get the current user&#39;s mailbox information
     * 
     */
    this.getVoicemailMailbox = function() { 


      return this.apiClient.callApi(
        '/api/v2/voicemail/mailbox', 
        'GET', 
        {  }, 
        {  }, 
        {  }, 
        {  }, 
        null, 
        ['PureCloud Auth'], 
        ['application/json'], 
        ['application/json']
      );
    };


    /**
     * Get the current user&#39;s mailbox information
     * 
     */
    this.getVoicemailMeMailbox = function() { 


      return this.apiClient.callApi(
        '/api/v2/voicemail/me/mailbox', 
        'GET', 
        {  }, 
        {  }, 
        {  }, 
        {  }, 
        null, 
        ['PureCloud Auth'], 
        ['application/json'], 
        ['application/json']
      );
    };


    /**
     * List voicemail messages
     * 
     * @param {Object} opts Optional parameters
     * @param {Number} opts.pageSize Page size (default to 25)
     * @param {Number} opts.pageNumber Page number (default to 1)
     */
    this.getVoicemailMeMessages = function(opts) { 
      opts = opts || {};


      return this.apiClient.callApi(
        '/api/v2/voicemail/me/messages', 
        'GET', 
        {  }, 
        { 'pageSize': opts['pageSize'],'pageNumber': opts['pageNumber'] }, 
        {  }, 
        {  }, 
        null, 
        ['PureCloud Auth'], 
        ['application/json'], 
        ['application/json']
      );
    };


    /**
     * Get the current user&#39;s voicemail policy
     * 
     */
    this.getVoicemailMePolicy = function() { 


      return this.apiClient.callApi(
        '/api/v2/voicemail/me/policy', 
        'GET', 
        {  }, 
        {  }, 
        {  }, 
        {  }, 
        null, 
        ['PureCloud Auth'], 
        ['application/json'], 
        ['application/json']
      );
    };


    /**
     * Get message.
     * 
     * @param {String} messageId Message ID
     * @param {Object} opts Optional parameters
     * @param {Array.<String>} opts.expand If the caller is a known user, which fields, if any, to expand
     */
    this.getVoicemailMessage = function(messageId, opts) { 
      opts = opts || {};

      // verify the required parameter 'messageId' is set
      if (messageId === undefined || messageId === null) {
        throw "Missing the required parameter 'messageId' when calling getVoicemailMessage";
      }


      return this.apiClient.callApi(
        '/api/v2/voicemail/messages/{messageId}', 
        'GET', 
        { 'messageId': messageId }, 
        { 'expand': this.apiClient.buildCollectionParam(opts['expand'], 'multi') }, 
        {  }, 
        {  }, 
        null, 
        ['PureCloud Auth'], 
        ['application/json'], 
        ['application/json']
      );
    };


    /**
     * Get media playback URI for this message
     * 
     * @param {String} messageId Message ID
     * @param {Object} opts Optional parameters
     * @param {module:purecloud-platform-client-v2/model/String} opts.formatId The desired media format. (default to WEBM)
     */
    this.getVoicemailMessageMedia = function(messageId, opts) { 
      opts = opts || {};

      // verify the required parameter 'messageId' is set
      if (messageId === undefined || messageId === null) {
        throw "Missing the required parameter 'messageId' when calling getVoicemailMessageMedia";
      }


      return this.apiClient.callApi(
        '/api/v2/voicemail/messages/{messageId}/media', 
        'GET', 
        { 'messageId': messageId }, 
        { 'formatId': opts['formatId'] }, 
        {  }, 
        {  }, 
        null, 
        ['PureCloud Auth'], 
        ['application/json'], 
        ['application/json']
      );
    };


    /**
     * List voicemail messages
     * 
     * @param {Object} opts Optional parameters
     * @param {String} opts.ids An optional comma separated list of VoicemailMessage ids
     * @param {Array.<String>} opts.expand If the caller is a known user, which fields, if any, to expand
     */
    this.getVoicemailMessages = function(opts) { 
      opts = opts || {};


      return this.apiClient.callApi(
        '/api/v2/voicemail/messages', 
        'GET', 
        {  }, 
        { 'ids': opts['ids'],'expand': this.apiClient.buildCollectionParam(opts['expand'], 'multi') }, 
        {  }, 
        {  }, 
        null, 
        ['PureCloud Auth'], 
        ['application/json'], 
        ['application/json']
      );
    };


    /**
     * Get a policy
     * 
     */
    this.getVoicemailPolicy = function() { 


      return this.apiClient.callApi(
        '/api/v2/voicemail/policy', 
        'GET', 
        {  }, 
        {  }, 
        {  }, 
        {  }, 
        null, 
        ['PureCloud Auth'], 
        ['application/json'], 
        ['application/json']
      );
    };


    /**
     * Search voicemails using the q64 value returned from a previous search
     * 
     * @param {String} q64 q64
     * @param {Object} opts Optional parameters
     * @param {Array.<String>} opts.expand expand
     */
    this.getVoicemailSearch = function(q64, opts) { 
      opts = opts || {};

      // verify the required parameter 'q64' is set
      if (q64 === undefined || q64 === null) {
        throw "Missing the required parameter 'q64' when calling getVoicemailSearch";
      }


      return this.apiClient.callApi(
        '/api/v2/voicemail/search', 
        'GET', 
        {  }, 
        { 'q64': q64,'expand': this.apiClient.buildCollectionParam(opts['expand'], 'multi') }, 
        {  }, 
        {  }, 
        null, 
        ['PureCloud Auth'], 
        ['application/json'], 
        ['application/json']
      );
    };


    /**
     * Get a user&#39;s voicemail policy
     * 
     * @param {String} userId User ID
     */
    this.getVoicemailUserpolicy = function(userId) { 

      // verify the required parameter 'userId' is set
      if (userId === undefined || userId === null) {
        throw "Missing the required parameter 'userId' when calling getVoicemailUserpolicy";
      }


      return this.apiClient.callApi(
        '/api/v2/voicemail/userpolicies/{userId}', 
        'GET', 
        { 'userId': userId }, 
        {  }, 
        {  }, 
        {  }, 
        null, 
        ['PureCloud Auth'], 
        ['application/json'], 
        ['application/json']
      );
    };


    /**
     * Update a group&#39;s voicemail policy
     * 
     * @param {String} groupId Group ID
     * @param {module:purecloud-platform-client-v2/model/VoicemailGroupPolicy} body The group&#39;s voicemail policy
     */
    this.patchVoicemailGroupPolicy = function(groupId, body) { 

      // verify the required parameter 'groupId' is set
      if (groupId === undefined || groupId === null) {
        throw "Missing the required parameter 'groupId' when calling patchVoicemailGroupPolicy";
      }

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw "Missing the required parameter 'body' when calling patchVoicemailGroupPolicy";
      }


      return this.apiClient.callApi(
        '/api/v2/voicemail/groups/{groupId}/policy', 
        'PATCH', 
        { 'groupId': groupId }, 
        {  }, 
        {  }, 
        {  }, 
        body, 
        ['PureCloud Auth'], 
        ['application/json'], 
        ['application/json']
      );
    };


    /**
     * Update the current user&#39;s voicemail policy
     * 
     * @param {module:purecloud-platform-client-v2/model/VoicemailUserPolicy} body The user&#39;s voicemail policy
     */
    this.patchVoicemailMePolicy = function(body) { 

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw "Missing the required parameter 'body' when calling patchVoicemailMePolicy";
      }


      return this.apiClient.callApi(
        '/api/v2/voicemail/me/policy', 
        'PATCH', 
        {  }, 
        {  }, 
        {  }, 
        {  }, 
        body, 
        ['PureCloud Auth'], 
        ['application/json'], 
        ['application/json']
      );
    };


    /**
     * Update a user&#39;s voicemail policy
     * 
     * @param {String} userId User ID
     * @param {module:purecloud-platform-client-v2/model/VoicemailUserPolicy} body The user&#39;s voicemail policy
     */
    this.patchVoicemailUserpolicy = function(userId, body) { 

      // verify the required parameter 'userId' is set
      if (userId === undefined || userId === null) {
        throw "Missing the required parameter 'userId' when calling patchVoicemailUserpolicy";
      }

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw "Missing the required parameter 'body' when calling patchVoicemailUserpolicy";
      }


      return this.apiClient.callApi(
        '/api/v2/voicemail/userpolicies/{userId}', 
        'PATCH', 
        { 'userId': userId }, 
        {  }, 
        {  }, 
        {  }, 
        body, 
        ['PureCloud Auth'], 
        ['application/json'], 
        ['application/json']
      );
    };


    /**
     * Copy a voicemail message to a user or group
     * 
     * @param {Object} opts Optional parameters
     * @param {module:purecloud-platform-client-v2/model/CopyVoicemailMessage} opts.body 
     */
    this.postVoicemailMessages = function(opts) { 
      opts = opts || {};


      return this.apiClient.callApi(
        '/api/v2/voicemail/messages', 
        'POST', 
        {  }, 
        {  }, 
        {  }, 
        {  }, 
        opts['body'], 
        ['PureCloud Auth'], 
        ['application/json'], 
        ['application/json']
      );
    };


    /**
     * Search voicemails
     * 
     * @param {module:purecloud-platform-client-v2/model/VoicemailSearchRequest} body Search request options
     */
    this.postVoicemailSearch = function(body) { 

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw "Missing the required parameter 'body' when calling postVoicemailSearch";
      }


      return this.apiClient.callApi(
        '/api/v2/voicemail/search', 
        'POST', 
        {  }, 
        {  }, 
        {  }, 
        {  }, 
        body, 
        ['PureCloud Auth'], 
        ['application/json'], 
        ['application/json']
      );
    };


    /**
     * Update a message.
     * 
     * @param {String} messageId Message ID
     * @param {module:purecloud-platform-client-v2/model/VoicemailMessage} body VoicemailMessage
     */
    this.putVoicemailMessage = function(messageId, body) { 

      // verify the required parameter 'messageId' is set
      if (messageId === undefined || messageId === null) {
        throw "Missing the required parameter 'messageId' when calling putVoicemailMessage";
      }

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw "Missing the required parameter 'body' when calling putVoicemailMessage";
      }


      return this.apiClient.callApi(
        '/api/v2/voicemail/messages/{messageId}', 
        'PUT', 
        { 'messageId': messageId }, 
        {  }, 
        {  }, 
        {  }, 
        body, 
        ['PureCloud Auth'], 
        ['application/json'], 
        ['application/json']
      );
    };


    /**
     * Update a policy
     * 
     * @param {module:purecloud-platform-client-v2/model/VoicemailOrganizationPolicy} body Policy
     */
    this.putVoicemailPolicy = function(body) { 

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw "Missing the required parameter 'body' when calling putVoicemailPolicy";
      }


      return this.apiClient.callApi(
        '/api/v2/voicemail/policy', 
        'PUT', 
        {  }, 
        {  }, 
        {  }, 
        {  }, 
        body, 
        ['PureCloud Auth'], 
        ['application/json'], 
        ['application/json']
      );
    };
  };

  return exports;
}));

},{"../ApiClient":8}],45:[function(require,module,exports){
(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['purecloud-platform-client-v2/ApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'));
  } else {
    // Browser globals (root is window)
    if (!root.platformClient) {
      root.platformClient = {};
    }
    root.platformClient.WorkforceManagementApi = factory(root.platformClient.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * WorkforceManagement service.
   * @module purecloud-platform-client-v2/api/WorkforceManagementApi
   * @version 6.0.1
   */

  /**
   * Constructs a new WorkforceManagementApi. 
   * @alias module:purecloud-platform-client-v2/api/WorkforceManagementApi
   * @class
   * @param {module:purecloud-platform-client-v2/ApiClient} apiClient Optional API client implementation to use,
   * default to {@link module:purecloud-platform-client-v2/ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;



    /**
     * Get a list of UserScheduleAdherence records for the requested users
     * 
     * @param {Array.<String>} userId User Id(s) for which to fetch current schedule adherence information.  Min 1, Max of 100 userIds per request
     */
    this.getWorkforcemanagementAdherence = function(userId) { 

      // verify the required parameter 'userId' is set
      if (userId === undefined || userId === null) {
        throw "Missing the required parameter 'userId' when calling getWorkforcemanagementAdherence";
      }


      return this.apiClient.callApi(
        '/api/v2/workforcemanagement/adherence', 
        'GET', 
        {  }, 
        { 'userId': this.apiClient.buildCollectionParam(userId, 'multi') }, 
        {  }, 
        {  }, 
        null, 
        ['PureCloud Auth'], 
        ['application/json'], 
        ['application/json']
      );
    };


    /**
     * Get activity codes corresponding to a management unit
     * 
     * @param {String} muId The muId of the management unit, or &#39;mine&#39; for the management unit of the logged-in user.
     */
    this.getWorkforcemanagementManagementunitActivitycodes = function(muId) { 

      // verify the required parameter 'muId' is set
      if (muId === undefined || muId === null) {
        throw "Missing the required parameter 'muId' when calling getWorkforcemanagementManagementunitActivitycodes";
      }


      return this.apiClient.callApi(
        '/api/v2/workforcemanagement/managementunits/{muId}/activitycodes', 
        'GET', 
        { 'muId': muId }, 
        {  }, 
        {  }, 
        {  }, 
        null, 
        ['PureCloud Auth'], 
        ['application/json'], 
        ['application/json']
      );
    };


    /**
     * Get intraday queues for the given date
     * 
     * @param {String} muId The muId of the management unit, or &#39;mine&#39; for the management unit of the logged-in user.
     * @param {String} _date ISO-8601 date string with no time or timezone component, interpreted in the configured management unit time zone, e.g. 2017-01-23
     */
    this.getWorkforcemanagementManagementunitIntradayQueues = function(muId, _date) { 

      // verify the required parameter 'muId' is set
      if (muId === undefined || muId === null) {
        throw "Missing the required parameter 'muId' when calling getWorkforcemanagementManagementunitIntradayQueues";
      }

      // verify the required parameter '_date' is set
      if (_date === undefined || _date === null) {
        throw "Missing the required parameter '_date' when calling getWorkforcemanagementManagementunitIntradayQueues";
      }


      return this.apiClient.callApi(
        '/api/v2/workforcemanagement/managementunits/{muId}/intraday/queues', 
        'GET', 
        { 'muId': muId }, 
        { 'date': _date }, 
        {  }, 
        {  }, 
        null, 
        ['PureCloud Auth'], 
        ['application/json'], 
        ['application/json']
      );
    };


    /**
     * Get a time off request by id
     * 
     * @param {String} muId The muId of the management unit, or &#39;mine&#39; for the management unit of the logged-in user.
     * @param {String} userId The userId to whom the Time Off Request applies.
     * @param {String} timeOffRequestId Time Off Request Id
     */
    this.getWorkforcemanagementManagementunitUserTimeoffrequest = function(muId, userId, timeOffRequestId) { 

      // verify the required parameter 'muId' is set
      if (muId === undefined || muId === null) {
        throw "Missing the required parameter 'muId' when calling getWorkforcemanagementManagementunitUserTimeoffrequest";
      }

      // verify the required parameter 'userId' is set
      if (userId === undefined || userId === null) {
        throw "Missing the required parameter 'userId' when calling getWorkforcemanagementManagementunitUserTimeoffrequest";
      }

      // verify the required parameter 'timeOffRequestId' is set
      if (timeOffRequestId === undefined || timeOffRequestId === null) {
        throw "Missing the required parameter 'timeOffRequestId' when calling getWorkforcemanagementManagementunitUserTimeoffrequest";
      }


      return this.apiClient.callApi(
        '/api/v2/workforcemanagement/managementunits/{muId}/users/{userId}/timeoffrequests/{timeOffRequestId}', 
        'GET', 
        { 'muId': muId,'userId': userId,'timeOffRequestId': timeOffRequestId }, 
        {  }, 
        {  }, 
        {  }, 
        null, 
        ['PureCloud Auth'], 
        ['application/json'], 
        ['application/json']
      );
    };


    /**
     * Get a list of time off requests for any user
     * 
     * @param {String} muId The muId of the management unit, or &#39;mine&#39; for the management unit of the logged-in user.
     * @param {String} userId The userId to whom the Time Off Request applies.
     * @param {Object} opts Optional parameters
     * @param {Boolean} opts.recentlyReviewed Limit results to requests that have been reviewed within the preceding 30 days (default to false)
     */
    this.getWorkforcemanagementManagementunitUserTimeoffrequests = function(muId, userId, opts) { 
      opts = opts || {};

      // verify the required parameter 'muId' is set
      if (muId === undefined || muId === null) {
        throw "Missing the required parameter 'muId' when calling getWorkforcemanagementManagementunitUserTimeoffrequests";
      }

      // verify the required parameter 'userId' is set
      if (userId === undefined || userId === null) {
        throw "Missing the required parameter 'userId' when calling getWorkforcemanagementManagementunitUserTimeoffrequests";
      }


      return this.apiClient.callApi(
        '/api/v2/workforcemanagement/managementunits/{muId}/users/{userId}/timeoffrequests', 
        'GET', 
        { 'muId': muId,'userId': userId }, 
        { 'recentlyReviewed': opts['recentlyReviewed'] }, 
        {  }, 
        {  }, 
        null, 
        ['PureCloud Auth'], 
        ['application/json'], 
        ['application/json']
      );
    };


    /**
     * Get agents in the management unit
     * 
     * @param {String} muId The muId of the management unit, or &#39;mine&#39; for the management unit of the logged-in user.
     */
    this.getWorkforcemanagementManagementunitUsers = function(muId) { 

      // verify the required parameter 'muId' is set
      if (muId === undefined || muId === null) {
        throw "Missing the required parameter 'muId' when calling getWorkforcemanagementManagementunitUsers";
      }


      return this.apiClient.callApi(
        '/api/v2/workforcemanagement/managementunits/{muId}/users', 
        'GET', 
        { 'muId': muId }, 
        {  }, 
        {  }, 
        {  }, 
        null, 
        ['PureCloud Auth'], 
        ['application/json'], 
        ['application/json']
      );
    };


    /**
     * Get management units
     * 
     * @param {Object} opts Optional parameters
     * @param {String} opts.selector Selector
     * @param {Number} opts.pageSize  (default to 25)
     * @param {Number} opts.pageNumber  (default to 1)
     */
    this.getWorkforcemanagementManagementunits = function(opts) { 
      opts = opts || {};


      return this.apiClient.callApi(
        '/api/v2/workforcemanagement/managementunits', 
        'GET', 
        {  }, 
        { 'selector': opts['selector'],'pageSize': opts['pageSize'],'pageNumber': opts['pageNumber'] }, 
        {  }, 
        {  }, 
        null, 
        ['PureCloud Auth'], 
        ['application/json'], 
        ['application/json']
      );
    };


    /**
     * Get a time off request for the current user by id
     * 
     * @param {String} timeOffRequestId Time Off Request Id
     */
    this.getWorkforcemanagementTimeoffrequest = function(timeOffRequestId) { 

      // verify the required parameter 'timeOffRequestId' is set
      if (timeOffRequestId === undefined || timeOffRequestId === null) {
        throw "Missing the required parameter 'timeOffRequestId' when calling getWorkforcemanagementTimeoffrequest";
      }


      return this.apiClient.callApi(
        '/api/v2/workforcemanagement/timeoffrequests/{timeOffRequestId}', 
        'GET', 
        { 'timeOffRequestId': timeOffRequestId }, 
        {  }, 
        {  }, 
        {  }, 
        null, 
        ['PureCloud Auth'], 
        ['application/json'], 
        ['application/json']
      );
    };


    /**
     * Get a list of time off requests for the current user
     * 
     * @param {Object} opts Optional parameters
     * @param {Boolean} opts.recentlyReviewed Limit results to requests that have been reviewed within the preceding 30 days (default to false)
     */
    this.getWorkforcemanagementTimeoffrequests = function(opts) { 
      opts = opts || {};


      return this.apiClient.callApi(
        '/api/v2/workforcemanagement/timeoffrequests', 
        'GET', 
        {  }, 
        { 'recentlyReviewed': opts['recentlyReviewed'] }, 
        {  }, 
        {  }, 
        null, 
        ['PureCloud Auth'], 
        ['application/json'], 
        ['application/json']
      );
    };


    /**
     * Mark a time off request for the current user as read or unread
     * 
     * @param {String} timeOffRequestId Time Off Request Id
     * @param {Object} opts Optional parameters
     * @param {module:purecloud-platform-client-v2/model/TimeOffRequestPatch} opts.body 
     */
    this.patchWorkforcemanagementTimeoffrequest = function(timeOffRequestId, opts) { 
      opts = opts || {};

      // verify the required parameter 'timeOffRequestId' is set
      if (timeOffRequestId === undefined || timeOffRequestId === null) {
        throw "Missing the required parameter 'timeOffRequestId' when calling patchWorkforcemanagementTimeoffrequest";
      }


      return this.apiClient.callApi(
        '/api/v2/workforcemanagement/timeoffrequests/{timeOffRequestId}', 
        'PATCH', 
        { 'timeOffRequestId': timeOffRequestId }, 
        {  }, 
        {  }, 
        {  }, 
        opts['body'], 
        ['PureCloud Auth'], 
        ['application/json'], 
        ['application/json']
      );
    };


    /**
     * Get intraday data for the given date for the requested queueIds
     * 
     * @param {String} muId The muId of the management unit, or &#39;mine&#39; for the management unit of the logged-in user.
     * @param {Object} opts Optional parameters
     * @param {module:purecloud-platform-client-v2/model/IntradayQueryDataCommand} opts.body body
     */
    this.postWorkforcemanagementManagementunitIntraday = function(muId, opts) { 
      opts = opts || {};

      // verify the required parameter 'muId' is set
      if (muId === undefined || muId === null) {
        throw "Missing the required parameter 'muId' when calling postWorkforcemanagementManagementunitIntraday";
      }


      return this.apiClient.callApi(
        '/api/v2/workforcemanagement/managementunits/{muId}/intraday', 
        'POST', 
        { 'muId': muId }, 
        {  }, 
        {  }, 
        {  }, 
        opts['body'], 
        ['PureCloud Auth'], 
        ['application/json'], 
        ['application/json']
      );
    };


    /**
     * Get user schedules within the given time range
     * 
     * @param {String} muId The muId of the management unit, or &#39;mine&#39; for the management unit of the logged-in user.
     * @param {Object} opts Optional parameters
     * @param {module:purecloud-platform-client-v2/model/UserListScheduleRequestBody} opts.body body
     */
    this.postWorkforcemanagementManagementunitSchedulesSearch = function(muId, opts) { 
      opts = opts || {};

      // verify the required parameter 'muId' is set
      if (muId === undefined || muId === null) {
        throw "Missing the required parameter 'muId' when calling postWorkforcemanagementManagementunitSchedulesSearch";
      }


      return this.apiClient.callApi(
        '/api/v2/workforcemanagement/managementunits/{muId}/schedules/search', 
        'POST', 
        { 'muId': muId }, 
        {  }, 
        {  }, 
        {  }, 
        opts['body'], 
        ['PureCloud Auth'], 
        ['application/json'], 
        ['application/json']
      );
    };


    /**
     * Get a schedule for the current user
     * 
     * @param {Object} opts Optional parameters
     * @param {module:purecloud-platform-client-v2/model/CurrentUserScheduleRequestBody} opts.body body
     */
    this.postWorkforcemanagementSchedules = function(opts) { 
      opts = opts || {};


      return this.apiClient.callApi(
        '/api/v2/workforcemanagement/schedules', 
        'POST', 
        {  }, 
        {  }, 
        {  }, 
        {  }, 
        opts['body'], 
        ['PureCloud Auth'], 
        ['application/json'], 
        ['application/json']
      );
    };
  };

  return exports;
}));

},{"../ApiClient":8}],"platformClient":[function(require,module,exports){
(function(factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['purecloud-platform-client-v2/ApiClient', 'purecloud-platform-client-v2/api/AlertingApi', 'purecloud-platform-client-v2/api/AnalyticsApi', 'purecloud-platform-client-v2/api/ArchitectApi', 'purecloud-platform-client-v2/api/AttributesApi', 'purecloud-platform-client-v2/api/AuthorizationApi', 'purecloud-platform-client-v2/api/ContentManagementApi', 'purecloud-platform-client-v2/api/ConversationsApi', 'purecloud-platform-client-v2/api/ExternalContactsApi', 'purecloud-platform-client-v2/api/FaxApi', 'purecloud-platform-client-v2/api/GeolocationApi', 'purecloud-platform-client-v2/api/GreetingsApi', 'purecloud-platform-client-v2/api/GroupsApi', 'purecloud-platform-client-v2/api/IdentityProviderApi', 'purecloud-platform-client-v2/api/LanguagesApi', 'purecloud-platform-client-v2/api/LicenseApi', 'purecloud-platform-client-v2/api/LocationsApi', 'purecloud-platform-client-v2/api/NotificationsApi', 'purecloud-platform-client-v2/api/OAuthApi', 'purecloud-platform-client-v2/api/OrganizationApi', 'purecloud-platform-client-v2/api/OrganizationAuthorizationApi', 'purecloud-platform-client-v2/api/OutboundApi', 'purecloud-platform-client-v2/api/PresenceApi', 'purecloud-platform-client-v2/api/QualityApi', 'purecloud-platform-client-v2/api/RecordingApi', 'purecloud-platform-client-v2/api/ResponseManagementApi', 'purecloud-platform-client-v2/api/RoutingApi', 'purecloud-platform-client-v2/api/ScriptsApi', 'purecloud-platform-client-v2/api/SearchApi', 'purecloud-platform-client-v2/api/StationsApi', 'purecloud-platform-client-v2/api/SuggestApi', 'purecloud-platform-client-v2/api/TelephonyProvidersEdgeApi', 'purecloud-platform-client-v2/api/TokensApi', 'purecloud-platform-client-v2/api/UserRecordingsApi', 'purecloud-platform-client-v2/api/UsersApi', 'purecloud-platform-client-v2/api/UtilitiesApi', 'purecloud-platform-client-v2/api/VoicemailApi', 'purecloud-platform-client-v2/api/WorkforceManagementApi'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('./ApiClient'), require('./api/AlertingApi'), require('./api/AnalyticsApi'), require('./api/ArchitectApi'), require('./api/AttributesApi'), require('./api/AuthorizationApi'), require('./api/ContentManagementApi'), require('./api/ConversationsApi'), require('./api/ExternalContactsApi'), require('./api/FaxApi'), require('./api/GeolocationApi'), require('./api/GreetingsApi'), require('./api/GroupsApi'), require('./api/IdentityProviderApi'), require('./api/LanguagesApi'), require('./api/LicenseApi'), require('./api/LocationsApi'), require('./api/NotificationsApi'), require('./api/OAuthApi'), require('./api/OrganizationApi'), require('./api/OrganizationAuthorizationApi'), require('./api/OutboundApi'), require('./api/PresenceApi'), require('./api/QualityApi'), require('./api/RecordingApi'), require('./api/ResponseManagementApi'), require('./api/RoutingApi'), require('./api/ScriptsApi'), require('./api/SearchApi'), require('./api/StationsApi'), require('./api/SuggestApi'), require('./api/TelephonyProvidersEdgeApi'), require('./api/TokensApi'), require('./api/UserRecordingsApi'), require('./api/UsersApi'), require('./api/UtilitiesApi'), require('./api/VoicemailApi'), require('./api/WorkforceManagementApi'));
  }
}(function(ApiClient, AlertingApi, AnalyticsApi, ArchitectApi, AttributesApi, AuthorizationApi, ContentManagementApi, ConversationsApi, ExternalContactsApi, FaxApi, GeolocationApi, GreetingsApi, GroupsApi, IdentityProviderApi, LanguagesApi, LicenseApi, LocationsApi, NotificationsApi, OAuthApi, OrganizationApi, OrganizationAuthorizationApi, OutboundApi, PresenceApi, QualityApi, RecordingApi, ResponseManagementApi, RoutingApi, ScriptsApi, SearchApi, StationsApi, SuggestApi, TelephonyProvidersEdgeApi, TokensApi, UserRecordingsApi, UsersApi, UtilitiesApi, VoicemailApi, WorkforceManagementApi) {
  'use strict';

  /**
   * A JavaScript library to interface with the PureCloud Platform API.<br>
   * The <code>index</code> module provides access to constructors for all the classes which comprise the public API.
   * <p>
   * An AMD (recommended!) or CommonJS application will generally do something equivalent to the following:
   * <pre>
   * var platformClient = require('purecloud-platform-client-v2/index'); // See note below*.
   * var xxxSvc = new platformClient.XxxApi(); // Allocate the API class we're going to use.
   * var yyyModel = new platformClient.Yyy(); // Construct a model instance.
   * yyyModel.someProperty = 'someValue';
   * ...
   * var zzz = xxxSvc.doSomething(yyyModel); // Invoke the service.
   * ...
   * </pre>
   * <em>*NOTE: For a top-level AMD script, use require(['purecloud-platform-client-v2/index'], function(){...})
   * and put the application logic within the callback function.</em>
   * </p>
   * <p>
   * A non-AMD browser application (discouraged) might do something like this:
   * <pre>
   * var xxxSvc = new platformClient.XxxApi(); // Allocate the API class we're going to use.
   * var yyy = new platformClient.Yyy(); // Construct a model instance.
   * yyyModel.someProperty = 'someValue';
   * ...
   * var zzz = xxxSvc.doSomething(yyyModel); // Invoke the service.
   * ...
   * </pre>
   * </p>
   * @module purecloud-platform-client-v2/index
   * @version 6.0.1
   */
  var platformClient = {
    /**
     * The ApiClient constructor.
     * @property {module:purecloud-platform-client-v2/ApiClient}
     */
    ApiClient: ApiClient,
    /**
     * The AlertingApi service constructor.
     * @property {module:purecloud-platform-client-v2/api/AlertingApi}
     */
    AlertingApi: AlertingApi,
    /**
     * The AnalyticsApi service constructor.
     * @property {module:purecloud-platform-client-v2/api/AnalyticsApi}
     */
    AnalyticsApi: AnalyticsApi,
    /**
     * The ArchitectApi service constructor.
     * @property {module:purecloud-platform-client-v2/api/ArchitectApi}
     */
    ArchitectApi: ArchitectApi,
    /**
     * The AttributesApi service constructor.
     * @property {module:purecloud-platform-client-v2/api/AttributesApi}
     */
    AttributesApi: AttributesApi,
    /**
     * The AuthorizationApi service constructor.
     * @property {module:purecloud-platform-client-v2/api/AuthorizationApi}
     */
    AuthorizationApi: AuthorizationApi,
    /**
     * The ContentManagementApi service constructor.
     * @property {module:purecloud-platform-client-v2/api/ContentManagementApi}
     */
    ContentManagementApi: ContentManagementApi,
    /**
     * The ConversationsApi service constructor.
     * @property {module:purecloud-platform-client-v2/api/ConversationsApi}
     */
    ConversationsApi: ConversationsApi,
    /**
     * The ExternalContactsApi service constructor.
     * @property {module:purecloud-platform-client-v2/api/ExternalContactsApi}
     */
    ExternalContactsApi: ExternalContactsApi,
    /**
     * The FaxApi service constructor.
     * @property {module:purecloud-platform-client-v2/api/FaxApi}
     */
    FaxApi: FaxApi,
    /**
     * The GeolocationApi service constructor.
     * @property {module:purecloud-platform-client-v2/api/GeolocationApi}
     */
    GeolocationApi: GeolocationApi,
    /**
     * The GreetingsApi service constructor.
     * @property {module:purecloud-platform-client-v2/api/GreetingsApi}
     */
    GreetingsApi: GreetingsApi,
    /**
     * The GroupsApi service constructor.
     * @property {module:purecloud-platform-client-v2/api/GroupsApi}
     */
    GroupsApi: GroupsApi,
    /**
     * The IdentityProviderApi service constructor.
     * @property {module:purecloud-platform-client-v2/api/IdentityProviderApi}
     */
    IdentityProviderApi: IdentityProviderApi,
    /**
     * The LanguagesApi service constructor.
     * @property {module:purecloud-platform-client-v2/api/LanguagesApi}
     */
    LanguagesApi: LanguagesApi,
    /**
     * The LicenseApi service constructor.
     * @property {module:purecloud-platform-client-v2/api/LicenseApi}
     */
    LicenseApi: LicenseApi,
    /**
     * The LocationsApi service constructor.
     * @property {module:purecloud-platform-client-v2/api/LocationsApi}
     */
    LocationsApi: LocationsApi,
    /**
     * The NotificationsApi service constructor.
     * @property {module:purecloud-platform-client-v2/api/NotificationsApi}
     */
    NotificationsApi: NotificationsApi,
    /**
     * The OAuthApi service constructor.
     * @property {module:purecloud-platform-client-v2/api/OAuthApi}
     */
    OAuthApi: OAuthApi,
    /**
     * The OrganizationApi service constructor.
     * @property {module:purecloud-platform-client-v2/api/OrganizationApi}
     */
    OrganizationApi: OrganizationApi,
    /**
     * The OrganizationAuthorizationApi service constructor.
     * @property {module:purecloud-platform-client-v2/api/OrganizationAuthorizationApi}
     */
    OrganizationAuthorizationApi: OrganizationAuthorizationApi,
    /**
     * The OutboundApi service constructor.
     * @property {module:purecloud-platform-client-v2/api/OutboundApi}
     */
    OutboundApi: OutboundApi,
    /**
     * The PresenceApi service constructor.
     * @property {module:purecloud-platform-client-v2/api/PresenceApi}
     */
    PresenceApi: PresenceApi,
    /**
     * The QualityApi service constructor.
     * @property {module:purecloud-platform-client-v2/api/QualityApi}
     */
    QualityApi: QualityApi,
    /**
     * The RecordingApi service constructor.
     * @property {module:purecloud-platform-client-v2/api/RecordingApi}
     */
    RecordingApi: RecordingApi,
    /**
     * The ResponseManagementApi service constructor.
     * @property {module:purecloud-platform-client-v2/api/ResponseManagementApi}
     */
    ResponseManagementApi: ResponseManagementApi,
    /**
     * The RoutingApi service constructor.
     * @property {module:purecloud-platform-client-v2/api/RoutingApi}
     */
    RoutingApi: RoutingApi,
    /**
     * The ScriptsApi service constructor.
     * @property {module:purecloud-platform-client-v2/api/ScriptsApi}
     */
    ScriptsApi: ScriptsApi,
    /**
     * The SearchApi service constructor.
     * @property {module:purecloud-platform-client-v2/api/SearchApi}
     */
    SearchApi: SearchApi,
    /**
     * The StationsApi service constructor.
     * @property {module:purecloud-platform-client-v2/api/StationsApi}
     */
    StationsApi: StationsApi,
    /**
     * The SuggestApi service constructor.
     * @property {module:purecloud-platform-client-v2/api/SuggestApi}
     */
    SuggestApi: SuggestApi,
    /**
     * The TelephonyProvidersEdgeApi service constructor.
     * @property {module:purecloud-platform-client-v2/api/TelephonyProvidersEdgeApi}
     */
    TelephonyProvidersEdgeApi: TelephonyProvidersEdgeApi,
    /**
     * The TokensApi service constructor.
     * @property {module:purecloud-platform-client-v2/api/TokensApi}
     */
    TokensApi: TokensApi,
    /**
     * The UserRecordingsApi service constructor.
     * @property {module:purecloud-platform-client-v2/api/UserRecordingsApi}
     */
    UserRecordingsApi: UserRecordingsApi,
    /**
     * The UsersApi service constructor.
     * @property {module:purecloud-platform-client-v2/api/UsersApi}
     */
    UsersApi: UsersApi,
    /**
     * The UtilitiesApi service constructor.
     * @property {module:purecloud-platform-client-v2/api/UtilitiesApi}
     */
    UtilitiesApi: UtilitiesApi,
    /**
     * The VoicemailApi service constructor.
     * @property {module:purecloud-platform-client-v2/api/VoicemailApi}
     */
    VoicemailApi: VoicemailApi,
    /**
     * The WorkforceManagementApi service constructor.
     * @property {module:purecloud-platform-client-v2/api/WorkforceManagementApi}
     */
    WorkforceManagementApi: WorkforceManagementApi
  };

  return platformClient;
}));

},{"./ApiClient":8,"./api/AlertingApi":9,"./api/AnalyticsApi":10,"./api/ArchitectApi":11,"./api/AttributesApi":12,"./api/AuthorizationApi":13,"./api/ContentManagementApi":14,"./api/ConversationsApi":15,"./api/ExternalContactsApi":16,"./api/FaxApi":17,"./api/GeolocationApi":18,"./api/GreetingsApi":19,"./api/GroupsApi":20,"./api/IdentityProviderApi":21,"./api/LanguagesApi":22,"./api/LicenseApi":23,"./api/LocationsApi":24,"./api/NotificationsApi":25,"./api/OAuthApi":26,"./api/OrganizationApi":27,"./api/OrganizationAuthorizationApi":28,"./api/OutboundApi":29,"./api/PresenceApi":30,"./api/QualityApi":31,"./api/RecordingApi":32,"./api/ResponseManagementApi":33,"./api/RoutingApi":34,"./api/ScriptsApi":35,"./api/SearchApi":36,"./api/StationsApi":37,"./api/SuggestApi":38,"./api/TelephonyProvidersEdgeApi":39,"./api/TokensApi":40,"./api/UserRecordingsApi":41,"./api/UsersApi":42,"./api/UtilitiesApi":43,"./api/VoicemailApi":44,"./api/WorkforceManagementApi":45}]},{},[]);
