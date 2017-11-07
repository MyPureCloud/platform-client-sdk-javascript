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
   * @version 12.0.0
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
          self.setAccessToken();
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
        this.setAccessToken();
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
    if (!param) {
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
    return Boolean(contentType && contentType.match(/^application\/json(;.*)?$/i));
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
      if (params.hasOwnProperty(key) && params[key]) {
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
    if (!param) return;

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
    //request.set({ 'purecloud-sdk': '12.0.0' });

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
