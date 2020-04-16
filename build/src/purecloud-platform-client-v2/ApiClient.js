import superagent from 'superagent';

/**
 * @module purecloud-platform-client-v2/ApiClient
 * @version 77.0.0
 */
class ApiClient {
	/**
	 * Singleton getter
	 */
	get instance() {
		return ApiClient.instance;
	}

	/**
	 * Singleton setter
	 */
	set instance(value) {
		ApiClient.instance = value;
	}

	/**
	 * Manages low level client-server communications, parameter marshalling, etc. There should not be any need for an
	 * application to use this class directly - the *Api and model classes provide the public API for the service. The
	 * contents of this file should be regarded as internal but are documented for completeness.
	 * @alias module:purecloud-platform-client-v2/ApiClient
	 * @class
	 */
	constructor() {
		/**
		 * @description The default API client implementation.
		 * @type {module:purecloud-platform-client-v2/ApiClient}
		 */
		if(!ApiClient.instance){
			ApiClient.instance = this;
		}

		/**
		 * Enumeration of collection format separator strategies.
		 * @enum {String} 
		 * @readonly
		 */
		this.CollectionFormatEnum = {
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
		 * @description Value is `true` if local storage exists. Otherwise, false.
		 */
		try {
			localStorage.setItem('purecloud_local_storage_test', 'purecloud_local_storage_test');
			localStorage.removeItem('purecloud_local_storage_test');
			this.hasLocalStorage = true;
		} catch(e) {
			this.hasLocalStorage = false;
		}

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
			'PureCloud OAuth': {type: 'oauth2'},
			'Guest Chat JWT': {type: 'apiKey', 'in': 'header', name: 'Authorization'}
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

		this.authData = {};
		this.settingsPrefix = 'purecloud';

		// Expose superagent module for use with superagent-proxy
		this.superagent = superagent;

		if (typeof(window) !== 'undefined') window.ApiClient = this;
	}

	/**
	 * @description Sets the debug log to enable debug logging
	 * @param {log} debugLog - In most cases use `console.log`
	 * @param {integer} maxLines - (optional) The max number of lines to write to the log. Must be > 0.
	 */
	setDebugLog(debugLog, maxLines) {
		this.debugLog = debugLog;
		this.debugLogMaxLines = (maxLines && maxLines > 0) ? maxLines : undefined;
	}

	/**
	 * @description If set to `true`, the response object will contain additional information about the HTTP response. When `false` (default) only the body object will be returned.
	 * @param {boolean} returnExtended - `true` to return extended responses
	 */
	setReturnExtendedResponses(returnExtended) {
		this.returnExtended = returnExtended;
	}

	/**
	 * @description When `true`, persists the auth token to local storage to avoid a redirect to the login page on each page load. Defaults to `false`.
	 * @param {boolean} doPersist - `true` to persist the auth token to local storage
	 * @param {string} prefix - (Optional, default 'purecloud') The name prefix used for the local storage key
	 */
	setPersistSettings(doPersist, prefix) {
		this.persistSettings = doPersist;
		this.settingsPrefix = prefix ? prefix.replace(/\W+/g, '_') : 'purecloud';
		this._debugTrace(`this.settingsPrefix=${this.settingsPrefix}`);
	}

	/**
	 * @description Saves the auth token to local storage, if enabled.
	 */
	_saveSettings(opts) {
		try {
			this.authData.accessToken = opts.accessToken;
			this.authentications['PureCloud OAuth'].accessToken = opts.accessToken;

			if (opts.state) {
				this.authData.state = opts.state;
			}

			this.authData.error = opts.error;
			this.authData.error_description = opts.error_description;

			if (opts.tokenExpiryTime) {
				this.authData.tokenExpiryTime = opts.tokenExpiryTime;
				this.authData.tokenExpiryTimeString = opts.tokenExpiryTimeString;
			}

			// Don't save settings if we aren't supposed to be persisting them
			if (this.persistSettings !== true) return;

			// Ensure we can access local storage
			if (!this.hasLocalStorage) {
				this._debugTrace('Warning: Cannot access local storage. Settings will not be saved.');
				return;
			}

			// Remove state from data so it's not persisted
			let tempData = JSON.parse(JSON.stringify(this.authData));
			delete tempData.state;

			// Save updated auth data
			localStorage.setItem(`${this.settingsPrefix}_auth_data`, JSON.stringify(tempData));
			this._debugTrace('Auth data saved to local storage');
		} catch (e) {
			console.error(e);
		}
	}

	/**
	 * @description Loads settings from local storage, if enabled.
	 */
	_loadSettings() {
		// Don't load settings if we aren't supposed to be persisting them
		if (this.persistSettings !== true) return;

		// Ensure we can access local storage
		if (!this.hasLocalStorage) {
			this._debugTrace('Warning: Cannot access local storage. Settings will not be loaded.');
			return;
		}

		// Load current auth data
		const tempState = this.authData.state;
		this.authData = localStorage.getItem(`${this.settingsPrefix}_auth_data`);
		if (!this.authData) 
			this.authData = {};
		else
			this.authData = JSON.parse(this.authData);
		if (this.authData.accessToken) this.setAccessToken(this.authData.accessToken);
		this.authData.state = tempState;
	}

	/**
	 * @description Sets the environment used by the session
	 * @param {string} environment - (Optional, default "mypurecloud.com") Environment the session use, e.g. mypurecloud.ie, mypurecloud.com.au, etc.
	 */
	setEnvironment(environment) {
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
	}

	/**
	 * @description Initiates the implicit grant login flow. Will attempt to load the token from local storage, if enabled.
	 * @param {string} clientId - The client ID of an OAuth Implicit Grant client
	 * @param {string} redirectUri - The redirect URI of the OAuth Implicit Grant client
	 * @param {object} opts - (optional) Additional options 
	 * @param {string} opts.state - (optional) An arbitrary string to be passed back with the login response. Used for client apps to associate login responses with a request.
	 * @param {string} opts.org - (optional) The organization name that would normally used when specifying an organization name when logging in. This is only used when a provider is also specified.
	 * @param {string} opts.provider - (optional) Authentication provider to log in with e.g. okta, adfs, salesforce, onelogin. This is only used when an org is also specified.
	 */
	loginImplicitGrant(clientId, redirectUri, opts) {
		// Check for auth token in hash
		const hash = this._setValuesFromUrlHash();

		this.clientId = clientId;
		this.redirectUri = redirectUri;

		if (!opts) opts = {};

		return new Promise((resolve, reject) => {
			// Abort if org and provider are not set together
			if (opts.org && !opts.provider) {
				reject(new Error('opts.provider must be set if opts.org is set'));
			} else if (opts.provider && !opts.org) {
				reject(new Error('opts.org must be set if opts.provider is set'));
			}

			// Abort on auth error
			if (hash && hash.error) {
				hash.accessToken = undefined;
				this._saveSettings(hash);
				return reject(new Error(`[${hash.error}] ${hash.error_description}`));
			}

			// Test token and proceed with login
			this._testTokenAccess()
				.then(() => {
					if (!this.authData.state && opts.state)
						this.authData.state = opts.state;
					resolve(this.authData);
				})
				.catch((error) => {
					this._debugTrace('Error encountered during login. This is normal if the application has not yet been authorized.');
					this._debugTrace(error);
					var query = {
						client_id: encodeURIComponent(this.clientId),
						redirect_uri: encodeURIComponent(this.redirectUri),
						response_type: 'token'
					};
					if (opts.state) query.state = encodeURIComponent(opts.state);
					if (opts.org) query.org = encodeURIComponent(opts.org);
					if (opts.provider) query.provider = encodeURIComponent(opts.provider);

					var url = this._buildAuthUrl('oauth/authorize', query);
					this._debugTrace(`Implicit grant: redirecting to ${url} for authorization...`);
					window.location.replace(url);
				});
		});
	}

	/**
	 * @description Initiates the client credentials login flow. Only available in node apps.
	 * @param {string} clientId - The client ID of an OAuth Implicit Grant client
	 * @param {string} clientSecret - The client secret of an OAuth Implicit Grant client
	 */
	loginClientCredentialsGrant(clientId, clientSecret) {
		this.clientId = clientId;
		var authHeader = new Buffer(`${clientId}:${clientSecret}`).toString('base64');

		return new Promise((resolve, reject) => {
			// Block browsers from using client credentials
			if (typeof window !== 'undefined') {
				reject(new Error('The client credentials grant is not supported in a browser.'));
				return;
			}

			// Build token request
			var request = superagent('POST', `https://login.${this.environment}/oauth/token`);
			if (this.proxy && request.proxy) {
				request.proxy(this.proxy);
			}
			request.set('Authorization', `Basic ${authHeader}`);
			request.send('grant_type=client_credentials');

			// Execute request
			request.end((error, response) => {
				if (error) {
					reject(error);
				} else {
					// Save access token
					this.setAccessToken(response.body['access_token']);

					// Set expiry time
					this.authData.tokenExpiryTime = (new Date()).getTime() + (response.body['expires_in'] * 1000);
					this.authData.tokenExpiryTimeString = (new Date(this.authData.tokenExpiryTime)).toUTCString();
					this._debugTrace(`Access token expires in ${response.body['expires_in']} seconds`);

					// Return auth data
					resolve(this.authData);
				}
			});
		});
	}

	/**
	 * @description Initiates the Saml2Bearerflow. Only available in node apps.
	 * @param {string} clientId - The client ID of an OAuth Implicit Grant client
	 * @param {string} clientSecret - The client secret of an OAuth Implicit Grant client
	 * @param {string} orgName - The orgName of an OAuth Implicit Grant client
	 * @param {string} assertion - The saml2bearer assertion
	 */
    loginSaml2BearerGrant(clientId, clientSecret, orgName, assertion) {
		this.clientId = clientId;
		return new Promise((resolve, reject) => {
			if (typeof window !== 'undefined') {
				reject(new Error('The saml2bearer grant is not supported in a browser.'));
				return;
			}
			var encodedData = new Buffer(clientId + ':' + clientSecret).toString('base64');
			var request = superagent('POST', `https://login.${this.environment}/oauth/token`);
			// Set the headers
			request.set('Authorization', 'Basic ' + encodedData);
			request.set('Content-Type', 'application/x-www-form-urlencoded');
			// Add form data
			request.type('form');
			request.send({ grant_type: 'urn:ietf:params:oauth:grant-type:saml2-bearer' });
			request.send({ orgName: orgName });
			request.send({ assertion: assertion });
			// Handle response
			request.end((error, response) => {
				if (error) {
					reject(error);
				} else {
					// Get access token from response
					var access_token = response.body.access_token;

					this.setAccessToken(access_token);
					this.authData.tokenExpiryTime = new Date().getTime() + response.body['expires_in'] * 1000;
					this.authData.tokenExpiryTimeString = new Date(this.authData.tokenExpiryTime).toUTCString();
					this._debugTrace(`Access token expires in ${response.body['expires_in']} seconds`);

					// Return auth data
					resolve(this.authData);
				}
			});
		});
	}

	/**
	 * @description Loads token from storage, if enabled, and checks to ensure it works.
	 */
	_testTokenAccess() {
		return new Promise((resolve, reject) => {
			// Load from storage
			this._loadSettings();

			// Check if there is a token to test
			if (!this.authentications['PureCloud OAuth'].accessToken) {
				reject(new Error('Token is not set'));
				return;
			}

			// Test token
			this.callApi('/api/v2/tokens/me', 'GET', 
				null, null, null, null, null, ['PureCloud OAuth'], ['application/json'], ['application/json'])
				.then(() => {
					resolve();
				})
				.catch((error) => {
					this._saveSettings({ accessToken: undefined });
					reject(error);
				});
		});
	}

	/**
	 * @description Parses the URL hash, grabs the access token, and clears the hash. If no access token is found, no action is taken.
	 */
	_setValuesFromUrlHash() {
		// Check for window
		if(!(typeof window !== 'undefined' && window.location.hash)) return;

		// Process hash string into object
		const hashRegex = new RegExp(`^#*(.+?)=(.+?)$`, 'i');
		let hash = {};
		window.location.hash.split('&').forEach((h) => {
			const match = hashRegex.exec(h);
			if (match) hash[match[1]] = decodeURIComponent(decodeURIComponent(match[2].replace(/\+/g, '%20')));
		});
		
		// Check for error
		if (hash.error) {
			return hash;
		}

		// Everything goes in here because we only want to act if we found an access token
		if (hash.access_token) {
			let opts = {};

			if (hash.state) {
				opts.state = hash.state;
			}

			if (hash.expires_in) {
				opts.tokenExpiryTime = (new Date()).getTime() + (parseInt(hash.expires_in.replace(/\+/g, '%20')) * 1000);
				opts.tokenExpiryTimeString = (new Date(opts.tokenExpiryTime)).toUTCString();
			}
			// Set access token
			opts.accessToken = hash.access_token.replace(/\+/g, '%20');

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

			this._saveSettings(opts);
		}
	}

	/**
	 * @description Sets the access token to be used with requests
	 * @param {string} token - The access token
	 */
	setAccessToken(token) {
		this._saveSettings({ accessToken: token });
	}

	/**
	 * @description Sets the storage key to use when persisting the access token
	 * @param {string} storageKey - The storage key name
	 */
	setStorageKey(storageKey) {
		// Set storage key
		this.storageKey = storageKey;

		// Trigger storage of current token
		this.setAccessToken(this.authentications['PureCloud OAuth'].accessToken);
	}

	/**
	 * @description Redirects the user to the PureCloud logout page
	 */
	logout(logoutRedirectUri) {
		if(this.hasLocalStorage) {
			this._saveSettings({
				accessToken: undefined,
				state: undefined,
				tokenExpiryTime: undefined,
				tokenExpiryTimeString: undefined
			});
		}

		var query = {
			client_id: encodeURIComponent(this.clientId)
		};

		if (logoutRedirectUri)
			query['redirect_uri'] = encodeURI(logoutRedirectUri);

		var url = this._buildAuthUrl('logout', query);
		window.location.replace(url);
	}

	/**
	 * @description Constructs a URL to the auth server
	 * @param {string} path - The path for the URL
	 * @param {object} query - An object of key/value pairs to use for querystring keys/values
	 */
	_buildAuthUrl(path, query) {
		if (!query) query = {};
		return Object.keys(query).reduce((url, key) => !query[key] ? url : `${url}&${key}=${query[key]}`, `${this.authUrl}/${path}?`);
	}

	/**
	 * Returns a string representation for an actual parameter.
	 * @param param The actual parameter.
	 * @returns {String} The string representation of <code>param</code>.
	 */
	paramToString(param) {
		if (!param) {
			return '';
		}
		if (param instanceof Date) {
			return param.toJSON();
		}
		return param.toString();
	}

	/**
	 * Builds full URL by appending the given path to the base URL and replacing path parameter place-holders with parameter values.
	 * NOTE: query parameters are not handled here.
	 * @param {String} path The path to append to the base URL.
	 * @param {Object} pathParams The parameter values to append.
	 * @returns {String} The encoded path with parameter values substituted.
	 */
	buildUrl(path, pathParams) {
		if (!path.match(/^\//)) {
			path = `/${path}`;
		}
		var url = this.basePath + path;
		url = url.replace(/\{([\w-]+)\}/g, (fullMatch, key) => {
			var value;
			if (pathParams.hasOwnProperty(key)) {
				value = this.paramToString(pathParams[key]);
			} else {
				value = fullMatch;
			}
			return encodeURIComponent(value);
		});
		return url;
	}

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
	isJsonMime(contentType) {
		return Boolean(contentType && contentType.match(/^application\/json(;.*)?$/i));
	}

	/**
	 * Chooses a content type from the given array, with JSON preferred; i.e. return JSON if included, otherwise return the first.
	 * @param {Array.<String>} contentTypes
	 * @returns {String} The chosen content type, preferring JSON.
	 */
	jsonPreferredMime(contentTypes) {
		for (var i = 0; i < contentTypes.length; i++) {
			if (this.isJsonMime(contentTypes[i])) {
				return contentTypes[i];
			}
		}
		return contentTypes[0];
	}

	/**
	 * Checks whether the given parameter value represents file-like content.
	 * @param param The parameter to check.
	 * @returns {Boolean} <code>true</code> if <code>param</code> represents a file. 
	 */
	isFileParam(param) {
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
	}

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
	normalizeParams(params) {
		var newParams = {};
		for (var key in params) {
			if (params.hasOwnProperty(key) && params[key] !== undefined) {
				var value = params[key];
				if (this.isFileParam(value) || Array.isArray(value)) {
					newParams[key] = value;
				} else {
					newParams[key] = this.paramToString(value);
				}
			}
		}
		return newParams;
	}

	/**
	 * Builds a string representation of an array-type actual parameter, according to the given collection format.
	 * @param {Array} param An array parameter.
	 * @param {module:purecloud-platform-client-v2/ApiClient.CollectionFormatEnum} collectionFormat The array element separator strategy.
	 * @returns {String|Array} A string representation of the supplied collection, using the specified delimiter. Returns
	 * <code>param</code> as is if <code>collectionFormat</code> is <code>multi</code>.
	 */
	buildCollectionParam(param, collectionFormat) {
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
				throw new Error(`Unknown collection format: ${collectionFormat}`);
		}
	}

	/**
	 * Applies authentication headers to the request.
	 * @param {Object} request The request object created by a <code>superagent()</code> call.
	 * @param {Array.<String>} authNames An array of authentication method names.
	 */
	applyAuthToRequest(request, authNames) {
		authNames.forEach((authName) => {
			var auth = this.authentications[authName];
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
							data[auth.name] = `${auth.apiKeyPrefix} ${auth.apiKey}`;
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
						request.set({'Authorization': `Bearer ${auth.accessToken}`});
					}
					break;
				default:
					throw new Error(`Unknown authentication type: ${auth.type}`);
			}
		});
	}

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
	 * constructor for a complex type.
	 * @returns {Promise} A Promise object.
	 */
	callApi(path, httpMethod, pathParams, queryParams, headerParams, formParams, bodyParam, authNames, contentTypes, accepts) {
		var url = this.buildUrl(path, pathParams);
		var request = superagent(httpMethod, url);

		if (this.proxy && request.proxy) {
			request.proxy(this.proxy);
		}

		if(this.debugLog){
			var trace = `[REQUEST] ${httpMethod} ${url}`;
			if(pathParams && Object.keys(pathParams).count > 0 && pathParams[Object.keys(pathParams)[0]]){
				trace += `\nPath Params: ${JSON.stringify(pathParams)}`;
			}

			if(queryParams && Object.keys(queryParams).count > 0 && queryParams[Object.keys(queryParams)[0]]){
				trace += `\nQuery Params: ${JSON.stringify(queryParams)}`;
			}

			if(bodyParam){
				trace += `\nnBody: ${JSON.stringify(bodyParam)}`;
			}

			this._debugTrace(trace);
		}

		// apply authentications
		this.applyAuthToRequest(request, authNames);

		// set query parameters
		request.query(this.normalizeParams(queryParams));

		// set header parameters
		request.set(this.defaultHeaders).set(this.normalizeParams(headerParams));
		//request.set({ 'purecloud-sdk': '77.0.0' });

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

		return new Promise((resolve, reject) => {
			request.end((error, response) => {
				if (error) {
					if (!response) {
						reject({
							status: 0,
							statusText: 'error',
							headers: [],
							body: {},
							text: 'error',
							error: error
						});
						return;
					}
				}

				// Build response object
				var data = (this.returnExtended === true || error) ? {
					status: response.status,
					statusText: response.statusText,
					headers: response.headers,
					body: response.body,
					text: response.text,
					error: error
				} : response.body ? response.body : response.text;

				// Debug logging
				if (this.debugLog) {
					var trace = `[RESPONSE] ${response.status}: ${httpMethod} ${url}`;
					if (response.headers)
						trace += `\ninin-correlation-id: ${response.headers['inin-correlation-id']}`;
					if (response.body)
						trace += `\nBody: ${JSON.stringify(response.body,null,2)}`;

					// Log trace message
					this._debugTrace(trace);

					// Log stack trace
					if (error)
						this._debugTrace(error);
				}

				// Resolve promise
				if (error) {
					reject(data);
				} else {
					resolve(data);
				}
			});
		});
	}

	/**
	 * @description Parses an ISO-8601 string representation of a date value.
	 * @param {String} str The date value as a string.
	 * @returns {Date} The parsed date object.
	 */
	parseDate(str) {
		return new Date(str.replace(/T/i, ' '));
	}

	/**
	 * @description Logs to the debug log
	 * @param {String} str The date value as a string.
	 * @returns {Date} The parsed date object.
	 */
	_debugTrace(trace) {
		if (!this.debugLog) return;

		if (typeof(trace) === 'string') {
			// Truncate
			var truncTrace = '';
			var lines = trace.split('\n');
			if (this.debugLogMaxLines && lines.length > this.debugLogMaxLines) {
				for  (var i = 0; i < this.debugLogMaxLines; i++) {
					truncTrace += `${lines[i]}\n`;
				}
				truncTrace += '...response truncated...';
				trace = truncTrace;
			}
		}

		this.debugLog(trace);
	}
}

export default ApiClient;
