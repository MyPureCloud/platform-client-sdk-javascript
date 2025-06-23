import Configuration from './configuration.js';
import DefaultHttpClient from './DefaultHttpClient.js';
import AbstractHttpClient from './AbstractHttpClient.js';
import HttpRequestOptions from './HttpRequestOptions.js';
import { default as qs } from 'qs';

/**
 * @module purecloud-platform-client-v2/ApiClient
 * @version 225.0.0
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
		 * The authentication methods to be included for all API calls.
		 * @type {Array.<String>}
		 */
		this.authentications = {
			'Guest Chat JWT': {type: 'apiKey', 'in': 'header', name: 'Authorization'},
			'PureCloud OAuth': {type: 'oauth2'}
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
		 * @default 16000
		 */
		this.timeout = 16000;

		this.authData = {};
		this.settingsPrefix = 'purecloud';

		// Transparently request a new access token when it expires (Code Authorization only)
		this.refreshInProgress = false;

		this.httpClient;
		this.proxyAgent;

		this.config = new Configuration();

		if (typeof(window) !== 'undefined') window.ApiClient = this;
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
				return;
			}

			// Remove state from data so it's not persisted
			let tempData = JSON.parse(JSON.stringify(this.authData));
			delete tempData.state;

			// Save updated auth data
			localStorage.setItem(`${this.settingsPrefix}_auth_data`, JSON.stringify(tempData));
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
		this.config.setEnvironment(environment);
	}

    /**
     * @description Sets the dynamic HttpClient used by the client
     * @param {object} httpClient - HttpClient to be injected
     */
    setHttpClient(httpClient) {
        if (!(httpClient instanceof AbstractHttpClient)) {
            throw new Error("httpclient must be an instance of AbstractHttpClient. See DefaultltHttpClient for a prototype");
        }
        this.httpClient = httpClient;
    }

	/**
     * @description Gets the HttpClient used by the client
     */
	getHttpClient() {
		if (this.httpClient) {
			return this.httpClient;
		} else {
			this.httpClient =  new DefaultHttpClient(this.timeout, this.proxyAgent);
			return this.httpClient;
		}
    }

    /**
      * @description Sets the certificate paths if MTLS authentication is needed
      * @param {string} certPath - path for certs
      * @param {string} keyPath - path for key
      * @param {string} caPath - path for public certs
      */
	setMTLSCertificates(certPath, keyPath, caPath) {
	    if (typeof window === 'undefined') {
	    	const agentOptions = {}
			if (certPath) {
				agentOptions.cert = require('fs').readFileSync(certPath);
			}

			if (keyPath) {
				agentOptions.key = require('fs').readFileSync(keyPath);
			}

			if (caPath) {
				agentOptions.ca = require('fs').readFileSync(caPath);
			}

			agentOptions.rejectUnauthorized = true

			this.proxyAgent = new require('https').Agent(agentOptions);
			const httpClient = this.getHttpClient();
			httpClient.setHttpsAgent(this.proxyAgent);
	    } else {
	         throw new Error("MTLS authentication is managed by the Browser itself. MTLS certificates cannot be set via code on Browser.");
	    }
    }

    /**
         * @description Sets preHook functions for the httpClient
         * @param {string} preHook - method definition for prehook
         */
        setPreHook(preHook) {
    		const httpClient = this.getHttpClient();
    		httpClient.setPreHook(preHook);
        }

    /**
          * @description Sets postHook functions for the httpClient
          * @param {string} postHook - method definition for posthook
          */
         setPostHook(postHook) {
        	const httpClient = this.getHttpClient();
        	httpClient.setPostHook(postHook);
         }

    /**
     * @description Sets the certificate content if MTLS authentication is needed
     * @param {string} certContent - content for certs
     * @param {string} keyContent - content for key
     * @param {string} caContent - content for public certs
     */
    setMTLSContents(certContent, keyContent, caContent) {
		if (typeof window === 'undefined') {
	    	const agentOptions = {}
			if (certContent) {
				agentOptions.cert = certContent;
			}

			if (keyContent) {
				agentOptions.key = keyContent;
			}

			if (caContent) {
				agentOptions.ca = caContent;
			}

			agentOptions.rejectUnauthorized = true

			this.proxyAgent = new require('https').Agent(agentOptions);
			const httpClient = this.getHttpClient();
			httpClient.setHttpsAgent(this.proxyAgent);
	    } else {
	         throw new Error("MTLS authentication is managed by the Browser itself. MTLS certificates cannot be set via code on Browser.");
	    }
    }



	/**
	 * @description Sets the gateway used by the session
	 * @param {object} gateway - Gateway Configuration interface
	 * @param {string} gateway.host - The address of the gateway.
	 * @param {string} gateway.protocol - (optional) The protocol to use. It will default to "https" if the parameter is not defined or empty.
	 * @param {string} gateway.port - (optional) The port to target. This parameter can be defined if a non default port is used and needs to be specified in the url (value must be greater than 0).
	 * @param {string} gateway.path_params_login - (optional) An arbitrary string to be appended to the gateway url path for Login requests.
	 * @param {string} gateway.path_params_api - (optional) An arbitrary string to be appended to the gateway url path for API requests.
	 * @param {string} gateway.username - (optional) Not used at this stage (for a possible future use).
	 * @param {string} gateway.password - (optional) Not used at this stage (for a possible future use).
	 */
	setGateway(gateway) {
		this.config.setGateway(gateway);
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
					var query = {
						client_id: encodeURIComponent(this.clientId),
						redirect_uri: encodeURIComponent(this.redirectUri),
						response_type: 'token'
					};
					if (opts.state) query.state = encodeURIComponent(opts.state);
					if (opts.org) query.org = encodeURIComponent(opts.org);
					if (opts.provider) query.provider = encodeURIComponent(opts.provider);

					var url = this._buildAuthUrl('oauth/authorize', query);
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
		var authHeader = Buffer.from(`${clientId}:${clientSecret}`).toString('base64');
		var loginBasePath = this.config.getConfUrl('login', `https://login.${this.config.environment}`);

		return new Promise((resolve, reject) => {
			// Block browsers from using client credentials
			if (typeof window !== 'undefined') {
				reject(new Error('The client credentials grant is not supported in a browser.'));
				return;
			}
			const headers = {
				'Authorization': `Basic ${authHeader}`
			}

            var requestOptions = new HttpRequestOptions(`${loginBasePath}/oauth/token`, `POST`, headers, null, 'grant_type=client_credentials', this.timeout);
            const httpClient = this.getHttpClient();
			httpClient.request(requestOptions)
			       .then((response) => {
					// Logging
					this.config.logger.log(
						'trace',
						response.status,
						'POST',
						`${loginBasePath}/oauth/token`,
						headers,
						response.headers,
						{ grant_type: 'client_credentials' },
						undefined
					);
					this.config.logger.log(
						'debug',
						response.status,
						'POST',
						`${loginBasePath}/oauth/token`,
						headers,
						undefined,
						{ grant_type: 'client_credentials' },
						undefined
					);

					// Save access token
					this.setAccessToken(response.data['access_token']);

					// Set expiry time
					this.authData.tokenExpiryTime = (new Date()).getTime() + (response.data['expires_in'] * 1000);
					this.authData.tokenExpiryTimeString = (new Date(this.authData.tokenExpiryTime)).toUTCString();

					// Return auth data
					resolve(this.authData);
				})
				.catch((error) => {
					// Log error
					if (error.response) {
						this.config.logger.log(
							'error',
							error.response.status,
							'POST',
							`${loginBasePath}/oauth/token`,
							headers,
							error.response.headers,
							{ grant_type: 'client_credentials' },
							error.response.data
						);
					}
					reject(error);
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
		var loginBasePath = this.config.getConfUrl('login', `https://login.${this.config.environment}`);
		return new Promise((resolve, reject) => {
			if (typeof window !== 'undefined') {
				reject(new Error('The saml2bearer grant is not supported in a browser.'));
				return;
			}
			var encodedData = Buffer.from(clientId + ':' + clientSecret).toString('base64');
			var request = this._formAuthRequest(encodedData,
												{ grant_type: 'urn:ietf:params:oauth:grant-type:saml2-bearer',
										        orgName: orgName,
										        assertion: assertion });
			request.proxy = this.proxy;
			var bodyParam = {
				grant_type: 'urn:ietf:params:oauth:grant-type:saml2-bearer',
				orgName: orgName,
				assertion: assertion,
			};

			// Handle response
			request
				.then((response) => {
					// Logging
					this.config.logger.log(
						'trace',
						response.status,
						'POST',
						`${loginBasePath}/oauth/token`,
						request.headers,
						response.headers,
						bodyParam,
						undefined
					);
					this.config.logger.log(
						'debug',
						response.status,
						'POST',
						`${loginBasePath}/oauth/token`,
						request.headers,
						undefined,
						bodyParam,
						undefined
					);

					// Get access token from response
					var access_token = response.data.access_token;

					this.setAccessToken(access_token);
					this.authData.tokenExpiryTime = new Date().getTime() + response.data['expires_in'] * 1000;
					this.authData.tokenExpiryTimeString = new Date(this.authData.tokenExpiryTime).toUTCString();

					// Return auth data
					resolve(this.authData);
				})
				.catch((error) => {
					// Log error
					if (error.response) {
						this.config.logger.log(
							'error',
							error.response.status,
							'POST',
							`${loginBasePath}/oauth/token`,
							request.headers,
							error.response.headers,
							bodyParam,
							error.response.data
						);
					}
					reject(error);
				});
		});
	}

	/**
	 * @description Completes the PKCE Code Authorization.
	 * @param {string} clientId - The client ID of an OAuth Code Authorization Grant client
	 * @param {string} codeVerifier - code verifier used to generate the code challenge
	 * @param {string} authCode - Authorization code
	 * @param {string} redirectUri - Authorized redirect URI for your Code Authorization client
	 */
    authorizePKCEGrant(clientId, codeVerifier, authCode, redirectUri) {
		this.clientId = clientId;
		var loginBasePath = this.config.getConfUrl('login', `https://login.${this.config.environment}`);
		return new Promise((resolve, reject) => {
            var headers = {
                'Content-Type': 'application/x-www-form-urlencoded'
            };
            var data = qs.stringify({ grant_type: 'authorization_code',
                code: authCode,
                code_verifier: codeVerifier,
                client_id: clientId,
                redirect_uri: redirectUri });

			var requestOptions = new HttpRequestOptions(`${loginBasePath}/oauth/token`, `POST`, headers, null, data, this.timeout);
            const httpClient = this.getHttpClient();

			var bodyParam = {
				grant_type: 'authorization_code',
                code: authCode,
                code_verifier: codeVerifier,
                client_id: clientId,
                redirect_uri: redirectUri,
			};
			// Handle response
			httpClient.request(requestOptions)
			.then((response) => {
				// Logging
				this.config.logger.log(
					'trace',
					response.status,
					'POST',
					`${loginBasePath}/oauth/token`,
					requestOptions.headers,
					response.headers,
					bodyParam,
					undefined
				);
				this.config.logger.log(
					'debug',
					response.status,
					'POST',
					`${loginBasePath}/oauth/token`,
					requestOptions.headers,
					undefined,
					bodyParam,
					undefined
				);

				// Get access token from response
				var access_token = response.data.access_token;

				this.setAccessToken(access_token);
				this.authData.tokenExpiryTime = new Date().getTime() + response.data['expires_in'] * 1000;
				this.authData.tokenExpiryTimeString = new Date(this.authData.tokenExpiryTime).toUTCString();

				// Return auth data
				resolve(this.authData);
			})
			.catch((error) => {
				// Log error
				if (error.response) {
					this.config.logger.log(
						'error',
						error.response.status,
						'POST',
						`${loginBasePath}/oauth/token`,
						requestOptions.headers,
						error.response.headers,
						bodyParam,
						error.response.data
					);
				}

				reject(error);
			});

		});
	}

	/**
	 * @description Generate a random string used as PKCE Code Verifier - length = 43 to 128.
	 * @param {number} nChar - code length
	 */
	generatePKCECodeVerifier(nChar) {
		if (nChar < 43 || nChar > 128) {
			throw new Error(`PKCE Code Verifier (length) must be between 43 and 128 characters`);
		}
		// Check for window
		if (typeof window === 'undefined') {
			try {
				const getRandomValues = require('crypto').getRandomValues;
				const unreservedCharacters = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~";
				let randomString = Array.from(getRandomValues(new Uint32Array(nChar)))
					.map((x) => unreservedCharacters[x % unreservedCharacters.length])
					.join('');
				return randomString;
			} catch (err) {
				throw new Error(`Crypto module is missing/not supported.`);
			}
		} else {
			const unreservedCharacters = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~";
			let randomString = Array.from(crypto.getRandomValues(new Uint32Array(nChar)))
				.map((x) => unreservedCharacters[x % unreservedCharacters.length])
				.join('');
			return randomString;
		}
	}

	/**
	 * @description Compute Base64Url PKCE Code Challenge from Code Verifier.
	 * @param {string} code - code verifier used to generate the code challenge
	 */
	computePKCECodeChallenge(code) {
		if (code.length < 43 || code.length > 128) {
			throw new Error(`PKCE Code Verifier (length) must be between 43 and 128 characters`);
		}
		// Check for window
		if (typeof window === 'undefined') {
			// nodejs
			try {
				const createHash = require('crypto').createHash;
				const utf8 = new TextEncoder().encode(code);
				return new Promise((resolve, reject) => {
					const hashHex = createHash('sha256').update(utf8).digest();
					const hashBase64Url = Buffer.from(hashHex).toString('base64url');
					resolve(hashBase64Url);
				});
			} catch (err) {
				throw new Error(`Crypto module is missing/not supported.`);
			}
		} else {
			// browser
			const utf8 = new TextEncoder().encode(code);
			return new Promise((resolve, reject) => {
				window.crypto.subtle.digest("SHA-256", utf8).then((hashBuffer) => {
					const hashBase64 = Buffer.from(hashBuffer).toString('base64');
					let hashBase64Url = hashBase64.replaceAll("+", "-").replaceAll("/", "_");
					hashBase64Url = hashBase64Url.split("=")[0];
					resolve(hashBase64Url);
				})
				.catch((error) => {
					// Handle failure
					return reject(new Error(`Code Challenge Error ${error}`));
				});
			});
		}
	}

	/**
    * @description Initiates the pkce auth code grant login flow. Will attempt to load the token from local storage, if enabled.
    * @param {string} clientId - The client ID of an OAuth Implicit Grant client
    * @param {string} redirectUri - The redirect URI of the OAuth Implicit Grant client
    * @param {object} opts - (optional) Additional options
    * @param {string} opts.state - (optional) An arbitrary string to be passed back with the login response. Used for client apps to associate login responses with a request.
    * @param {string} opts.org - (optional) The organization name that would normally used when specifying an organization name when logging in. This is only used when a provider is also specified.
    * @param {string} opts.provider - (optional) Authentication provider to log in with e.g. okta, adfs, salesforce, onelogin. This is only used when an org is also specified.
    * @param {string} codeVerifier - (optional) code verifier used to generate the code challenge
    */
    loginPKCEGrant(clientId, redirectUri, opts, codeVerifier) {
		// Need Local Storage or non null codeVerifier as parameter
		if (!this.hasLocalStorage && !codeVerifier) {
			throw new Error(`loginPKCEGrant requires Local Storage or codeVerifier as input parameter`);
		}
        // Check for auth code in query
        const query = this._setValuesFromUrlQuery();

        this.clientId = clientId;
        this.redirectUri = redirectUri;

		this.codeVerifier = codeVerifier;

        if (!opts) opts = {};

        return new Promise((resolve, reject) => {
            // Abort if org and provider are not set together
            if (opts.org && !opts.provider) {
                reject(new Error('opts.provider must be set if opts.org is set'));
            } else if (opts.provider && !opts.org) {
            	reject(new Error('opts.org must be set if opts.provider is set'));
            }

            // Abort on auth error
            if (query && query.error) {
				// remove codeVerifier from session storage
				if (this.hasLocalStorage) {
					sessionStorage.removeItem(`genesys_cloud_sdk_pkce_code_verifier`);
				}
				// reset access token if any was stored
				this._saveSettings({ accessToken: undefined });
                return reject(new Error(`[${query.error}] ${query.error_description}`));
            }

            // Get token on auth code
            if (query && query.code) {
				if (!this.codeVerifier) {
					// load codeVerifier from session storage
					if (this.hasLocalStorage) {
						this.codeVerifier = sessionStorage.getItem(`genesys_cloud_sdk_pkce_code_verifier`);
					}
				}
                this.authorizePKCEGrant(this.clientId, this.codeVerifier, query.code, this.redirectUri)
                  .then(() => {
                      // Do authenticated things
                      this._testTokenAccess()
                      .then(() => {
                        if (!this.authData.state && query.state)
                          this.authData.state = query.state;
						// remove codeVerifier from session storage
						if (this.hasLocalStorage) {
							sessionStorage.removeItem(`genesys_cloud_sdk_pkce_code_verifier`);
						}
                        resolve(this.authData);
                      })
                      .catch((error) => {
                        // Handle failure response
                        this._saveSettings({ accessToken: undefined});
						// remove codeVerifier from session storage
						if (this.hasLocalStorage) {
							sessionStorage.removeItem(`genesys_cloud_sdk_pkce_code_verifier`);
						}
                        return reject(new Error(`[${error.name}] ${error.msg}`));
                      });
                  })
                  .catch((error) => {
                    // Handle failure response
                    this._saveSettings({ accessToken: undefined});
					// remove codeVerifier from session storage
					if (this.hasLocalStorage) {
						sessionStorage.removeItem(`genesys_cloud_sdk_pkce_code_verifier`);
					}
                    return reject(new Error(`[${error.name}] ${error.msg}`));
                  });
            } else {
                // Test token (if previously stored) and proceed with login
                this._testTokenAccess()
                  .then(() => {
                    if (!this.authData.state && opts.state)
                      this.authData.state = opts.state;
                    resolve(this.authData);
                  })
                  .catch((error) => {
					if (!this.codeVerifier) {
						this.codeVerifier = this.generatePKCECodeVerifier(128);
						// save codeVerifier in session storage
						if (this.hasLocalStorage) {
							sessionStorage.setItem(`genesys_cloud_sdk_pkce_code_verifier`, this.codeVerifier);
						}
					}
                    this.computePKCECodeChallenge(this.codeVerifier)
					.then((codeChallenge) => {
                      var tokenQuery = {
                        client_id: encodeURIComponent(this.clientId),
                        redirect_uri: encodeURIComponent(this.redirectUri),
                        code_challenge: encodeURIComponent(codeChallenge),
                        response_type: 'code',
                        code_challenge_method: 'S256'
                      };
                      if (opts.state) tokenQuery.state = encodeURIComponent(opts.state);
                      if (opts.org) tokenQuery.org = encodeURIComponent(opts.org);
                      if (opts.provider) tokenQuery.provider = encodeURIComponent(opts.provider);

                      var url = this._buildAuthUrl('oauth/authorize', tokenQuery);
                      window.location.replace(url);
                    })
                    .catch((err) => {
                      return reject(new Error(`[${err.name}]`));
                    });
                  });
            }
		});
	}

    /**
    * @description Parses the URL Query, grabs the code, and clears the query param. If no code is found, no action is taken.
    */
    _setValuesFromUrlQuery() {
        // Check for window
        if (!(typeof window !== 'undefined' && window.location.search)) return;

        // Process query string
        let query = {};
        let queryParams = new URLSearchParams(window.location.search);
        let code = queryParams.get('code');
        let error = queryParams.get('error');
		let errorDescription = queryParams.get('error_description');
        let state = queryParams.get('state');

        // Check for error
        if (error) {
            query.error = error;
			if (errorDescription) {
				query.error_description = errorDescription;
			}
            return query;
        }

        // Everything goes in here because we only want to act if we found an access token
        if (code) {
            query.code = code;
            if (state) {
				query.state = state;
            }
        }

		// Remove code from URL
		// Credit: https://stackoverflow.com/questions/1397329/how-to-remove-the-hash-from-window-location-with-javascript-without-page-refresh/5298684#5298684
		var scrollV, scrollH, loc = window.location;
		if ('replaceState' in history) {
			history.replaceState('', document.title, loc.pathname);
		} else {
			// Prevent scrolling by storing the page's current scroll offset
			scrollV = document.body.scrollTop;
			scrollH = document.body.scrollLeft;

			// Remove code
			history.pushState('', document.title, loc.pathname);

			// Restore the scroll offset, should be flicker free
			document.body.scrollTop = scrollV;
			document.body.scrollLeft = scrollH;
		}

		return query;
    }

	/**
	 * @description Initiates the Code Authorization. Only available in node apps.
	 * @param {string} clientId - The client ID of an OAuth Code Authorization Grant client
	 * @param {string} clientSecret - The client secret of an OAuth Code Authorization Grant client
	 * @param {string} authCode - Authorization code
	 * @param {string} redirectUri - Authorized redirect URI for your Code Authorization client
	 */
    loginCodeAuthorizationGrant(clientId, clientSecret, authCode, redirectUri) {
		this.clientId = clientId;
		this.clientSecret = clientSecret;
		return new Promise((resolve, reject) => {
			if (typeof window !== 'undefined') {
				reject(new Error('The Code Authorization grant is not supported in a browser.'));
				return;
			}
			var encodedData = Buffer.from(clientId + ':' + clientSecret).toString('base64');
			var request = this._formAuthRequest(encodedData,
												{ grant_type: 'authorization_code',
									            code: authCode,
										        redirect_uri: redirectUri });
			request.proxy = this.proxy;
			var bodyParam = {
				grant_type: 'authorization_code',
				code: authCode,
				redirect_uri: redirectUri,
			};
			// Handle response
			this._handleCodeAuthorizationResponse(request, bodyParam, resolve, reject);
		});
	}

	/**
	 * @description Requests a new access token for Code Authorization. Only available in node apps.
	 * @param {string} clientId - The client ID of an OAuth Code Authorization Grant client
	 * @param {string} clientSecret - The client secret of an OAuth Code Authorization Grant client
	 * @param {string} authCode - Authorization code
	 * @param {string} redirectUri - Authorized redirect URI for your Code Authorization client
	 */
    refreshCodeAuthorizationGrant(clientId, clientSecret, refreshToken) {
		return new Promise((resolve, reject) => {
			if (typeof window !== 'undefined') {
				reject(new Error('The Code Authorization grant is not supported in a browser.'));
				return;
			}
			var encodedData = Buffer.from(clientId + ':' + clientSecret).toString('base64');
			var request = this._formAuthRequest(encodedData, { grant_type: 'refresh_token' , refresh_token: refreshToken });
			request.proxy = this.proxy;
			var bodyParam = {
				grant_type: 'refresh_token',
				refresh_token: refreshToken,
			};
			// Handle response
			this._handleCodeAuthorizationResponse(request, bodyParam, resolve, reject);
		});
	}

	/**
	 * @description Handles the response for code auth requests
	 * @param {object} request - Authorization request object
	 * @param {object} bodyParam - Input body data for authorization request
	 * @param {function} resolve - Promise resolve callback
	 * @param {function} reject - Promise reject callback
	 */
	_handleCodeAuthorizationResponse(request, bodyParam, resolve, reject) {
		var loginBasePath = this.config.getConfUrl('login', `https://login.${this.config.environment}`);

		request
			.then((response) => {
				// Logging
				this.config.logger.log(
					'trace',
					response.status,
					'POST',
					`${loginBasePath}/oauth/token`,
					request.headers,
					response.headers,
					bodyParam,
					undefined
				);
				this.config.logger.log(
					'debug',
					response.status,
					'POST',
					`${loginBasePath}/oauth/token`,
					request.headers,
					undefined,
					bodyParam,
					undefined
				);

				// Get access token from response
				var access_token = response.data.access_token;
				var refresh_token = response.data.refresh_token;

				this.setAccessToken(access_token);
				this.authData.refreshToken = refresh_token;
				this.authData.tokenExpiryTime = new Date().getTime() + response.data['expires_in'] * 1000;
				this.authData.tokenExpiryTimeString = new Date(this.authData.tokenExpiryTime).toUTCString();

				// Return auth data
				resolve(this.authData);
			})
			.catch((error) => {
				// Log error
				if (error.response) {
					this.config.logger.log(
						'error',
						error.response.status,
						'POST',
						`${loginBasePath}/oauth/token`,
						request.headers,
						error.response.headers,
						bodyParam,
						error.response.data
					);
				}

				reject(error);
			});
	}

	/**
	 * @description Utility function to create the request for auth requests
	 * @param {string} encodedData - Base64 encoded client and clientSecret pair
	 * @param {object} data - data to url form encode
	 */
	_formAuthRequest(encodedData, data) {
		var loginBasePath = this.config.getConfUrl('login', `https://login.${this.config.environment}`);
		var headers = {
			'Authorization': 'Basic ' + encodedData,
			'Content-Type': 'application/x-www-form-urlencoded'
		};
		var requestOptions = new HttpRequestOptions(`${loginBasePath}/oauth/token`, `POST`, headers, null, qs.stringify(data), this.timeout);
		const httpClient = this.getHttpClient();
		return httpClient.request(requestOptions);
	}

	/**
	 * @description Handles an expired access token. Only available in node apps.
	 * @param {string} statusCode - The status code of a request
	 */
	_handleExpiredAccessToken() {
		return new Promise((resolve, reject) => {
			if (typeof window !== 'undefined') {
				reject(new Error('This method is not supported in a browser.'));
				return;
			}
			if (!this.refreshInProgress) {
				this.refreshInProgress = true;
				this.refreshCodeAuthorizationGrant(this.clientId, this.clientSecret, this.authData.refreshToken)
					.then(() => {
						this.refreshInProgress = false;
						resolve();
					})
					.catch((err) => {
						// Handle failure response
						this.refreshInProgress = false;
						reject(err);
					});
			} else {
				// Wait refresh_token_wait_max seconds for other thread to complete refresh
				this._sleep(this.config.refresh_token_wait_max)
					.then(() => {
						if (this.refreshInProgress)
							reject(new Error(`Token refresh took longer than ${this.config.refresh_token_wait_max} seconds`));
						else
							resolve();
					});
			}
		});
	}

	/**
	 * @description Sleeps for a defined length
	 * @param {int} millis - Length to sleep in milliseconds
	 */
	_sleep(millis) {
		return new Promise(resolve => setTimeout(resolve, millis));
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
		var loginBasePath = this.config.getConfUrl('login', this.config.authUrl);
		return Object.keys(query).reduce((url, key) => !query[key] ? url : `${url}&${key}=${query[key]}`, `${loginBasePath}/${path}?`);
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
		if (param instanceof Boolean) {
			return param.toString().toLowerCase();
		}
		return param.toString();
	}

	/**
	 * Returns query parameters serialized in the format needed for an axios request.
	 * @param param The unserialized query parameters.
	 * @returns {Object} The serialized representation the query parameters.
	 */
	serialize(obj) {
		var result = {};
		for (var p in obj) {
			if (obj.hasOwnProperty(p) && obj[p] !== undefined) {
				result[encodeURIComponent(p)] = Array.isArray(obj[p]) ? obj[p].join(",") : this.paramToString(obj[p]);
			}
		}
		return result
	}

	/**
	 * Adds headers onto an existing header object (may be empty)
	 * @param existingHeaders The existing header object.
	 * @param newHeaders New headers.
	 * @returns {Object} The combination of all headers.
	 */
	addHeaders(existingHeaders, ...newHeaders) {
		if (existingHeaders) {
			existingHeaders = Object.assign(existingHeaders, ...newHeaders);
		} else {
			existingHeaders = Object.assign(...newHeaders);
		}
		return existingHeaders;
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
		var url = this.config.getConfUrl('api', this.config.basePath) + path;
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
		if (!Array.isArray(param)) {
			param = [param]
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
				// return the array directly as axios will handle it as expected
				return param.map(this.paramToString);
			default:
				throw new Error(`Unknown collection format: ${collectionFormat}`);
		}
	}

	/**
	 * Applies authentication headers to the request.
	 * @param {Object} request The axios request config object.
	 * @param {Array.<String>} authNames An array of authentication method names.
	 */
	applyAuthToRequest(request, authNames) {
		authNames.forEach((authName) => {
			var auth = this.authentications[authName];
			switch (auth.type) {
				case 'basic':
					if (auth.username || auth.password) {
						request.auth = {
							username: auth.username || '',
							password: auth.password || ''
						};
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
							request.headers =  this.addHeaders(request.headers, data);
						} else {
							request.setParams(this.serialize(data));
						}
					}
					break;
				case 'oauth2':
					if (auth.accessToken) {
						request.headers =  this.addHeaders(request.headers, {'Authorization': `Bearer ${auth.accessToken}`});
					}
					break;
				default:
					throw new Error(`Unknown authentication type: ${auth.type}`);
			}
		});
	}

	/**
	 * @description Sets the proxy agent axios will use for requests
	 * @param {any} agent - The proxy agent
	 */
	setProxyAgent(agent) {
		this.proxyAgent = agent;
		const httpClient = this.getHttpClient();
		httpClient.setHttpsAgent(this.proxyAgent);
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
		return new Promise((resolve, reject) => {
			sendRequest(this);
			function sendRequest(that) {
				var url = that.buildUrl(path, pathParams);
			    var request = new HttpRequestOptions(url, httpMethod, null, that.serialize(queryParams), null, that.timeout);

				// apply authentications
				that.applyAuthToRequest(request, authNames);

				// set header parameters
				const defaultHeaders = that.defaultHeaders;
				const normalizedHeaderParams = that.normalizeParams(headerParams);
				request.headers = that.addHeaders(request.headers, defaultHeaders, normalizedHeaderParams);

				var contentType = that.jsonPreferredMime(contentTypes);
				if (contentType) {
					request.headers['Content-Type'] = contentType;
				} else if (!request.headers['Content-Type']) {
					request.headers['Content-Type'] = 'application/json';
				}

				if (contentType === 'application/x-www-form-urlencoded') {
					request.setData(that.normalizeParams(formParams));
				} else if (contentType == 'multipart/form-data') {
					var _formParams = that.normalizeParams(formParams);
					for (var key in _formParams) {
						if (_formParams.hasOwnProperty(key)) {
							// Looks like axios handles files and forms the same way
							var formData = new FormData();
							formData.set(key, _formParams[key]);
							request.setData(formData);
						}
					}
				} else if (bodyParam) {
					request.setData(bodyParam);
				}

				var accept = that.jsonPreferredMime(accepts);
				if (accept) {
					request.headers['Accept'] = accept;
				}

				const httpClient = that.getHttpClient();
				httpClient.request(request)
					.then((response) => {
						// Build response object
						var data = (that.returnExtended === true) ? {
							status: response.status,
							statusText: response.statusText,
							headers: response.headers,
							body: response.data,
							text: response.text,
							error: null
						} : response.data ? response.data : response.text;

						// Debug logging
						that.config.logger.log('trace', response.status, httpMethod, url, request.headers, response.headers, bodyParam, undefined);
						that.config.logger.log('debug', response.status, httpMethod, url, request.headers, undefined, bodyParam, undefined);

						// Resolve promise
						resolve(data);
					})
					.catch((error) => {
						var data = error
						if (error.response && error.response.status == 401 && that.config.refresh_access_token && that.authData.refreshToken && that.authData.refreshToken !== "") {
						    that._handleExpiredAccessToken()
								.then(() => {
									sendRequest(that);
								})
								.catch((err) => {
									reject(err);
								});
						} else if (error.response) {
							// Log error
							that.config.logger.log(
								'error',
								error.response.status,
								httpMethod,
								url,
								request.headers,
								error.response.headers,
								bodyParam,
								error.response.data
							);
							data = (that.returnExtended === true) ? {
								status: error.response.status,
								statusText: error.response.statusText,
								headers: error.response.headers,
								body: error.response.data,
								text: error.response.text,
								error: error
							} : error.response.data ? error.response.data : error.response.text;
						}
						reject(data);
					});
			}
		});
	}
}

export default ApiClient;
