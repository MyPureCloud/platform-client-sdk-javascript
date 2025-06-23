# Platform API Client SDK - JavaScript

A JavaScript library to interface with the Genesys Cloud Platform API. View the documentation at https://mypurecloud.github.io/platform-client-sdk-javascript/.

[![GitHub release](https://img.shields.io/github/release/mypurecloud/platform-client-sdk-javascript.svg)](https://github.com/MyPureCloud/platform-client-sdk-javascript)
[![npm](https://img.shields.io/npm/v/purecloud-platform-client-v2.svg)](https://www.npmjs.com/package/purecloud-platform-client-v2)
[![Release Notes Badge](https://developer-content.genesys.cloud/images/sdk-release-notes.png)](https://github.com/MyPureCloud/platform-client-sdk-javascript/blob/master/releaseNotes.md)

Documentation version purecloud-platform-client-v2@225.0.0

## Preview APIs

**Warning:** Preview APIs are included in this SDK. These resources are subject to both breaking and non-breaking changes at any time without notice. This includes, but is not limited to, changing resource names, paths, contracts, documentation, and removing resources entirely. For a full list of the preview APIs see [here](https://developer.genesys.cloud/platform/preview-apis)

## CommonJS

For node.js via [NPM](https://www.npmjs.com/package/purecloud-platform-client-v2):

```sh
npm install purecloud-platform-client-v2
```

```javascript
// Obtain a reference to the platformClient object
const platformClient = require('purecloud-platform-client-v2');
```

For direct use in a browser script:

```html
<!-- Include the CJS SDK -->
<script src="https://sdk-cdn.mypurecloud.com/javascript/225.0.0/purecloud-platform-client-v2.min.js"></script>

<script type="text/javascript">
  // Obtain a reference to the platformClient object
  const platformClient = require('platformClient');
</script>
```


## AMD

```html
<!-- Include requirejs -->
<script src="https://cdnjs.cloudflare.com/ajax/libs/require.js/2.3.5/require.min.js"></script>

<script type="text/javascript">
  // Obtain a reference to the platformClient object
  requirejs(['https://sdk-cdn.mypurecloud.com/javascript/amd/225.0.0/purecloud-platform-client-v2.min.js'], (platformClient) => {
    console.log(platformClient);
  });
</script>
```

## ES6 Classes and Other Entry Points

The node package's [package.json](https://github.com/MyPureCloud/platform-client-sdk-javascript/blob/master/build/package.json) file contains the following entry points for use with various packaging systems:

* **jsnext:main** and **module**
	* Entry point: src/purecloud-platform-client-v2/index.js
	* The main ES6 class in the source code
* **main**
	* Entry point: dist/node/purecloud-platform-client-v2.js
	* The CJS module for node apps
* **browser**
	* Entry point: dist/web-cjs/purecloud-platform-client-v2.min.js
	* The [Browserify](http://browserify.org/)ed CJS module for standalone use in a browser

## Using the "latest" SDK

Want your app to always use the most recent version of the SDK? To do this, simply use `latest` instead of the version number: 

* CJS: `https://sdk-cdn.mypurecloud.com/javascript/latest/purecloud-platform-client-v2.min.js`
* AMD: `https://sdk-cdn.mypurecloud.com/javascript/amd/latest/purecloud-platform-client-v2.min.js`

# Usage

**Note:** The JavaScript SDK is a Node.js project transpiled for web use. When using it in the browser, ensure you provide custom polyfills or a suitable setup for modern JavaScript features.

## Authentication

After authentication has completed, the access token is stored on the `ApiClient` instance and the access token will be sent with all API requests.

**Node.js** [Client Credentials grant](https://developer.genesys.cloud/authorization/platform-auth/use-client-credentials)

The Client Credentials grant only works when used in node.js. This is restricted intentionally because it is impossible for client credentials to be handled securely in a browser application.

```javascript
const client = platformClient.ApiClient.instance;
client.loginClientCredentialsGrant(clientId,clientSecret)
.then(()=> {
  // Do authenticated things
})
.catch((err) => {
 // Handle failure response
 console.log(err);
});

```

**Node.js** [Saml2bearer Grant](https://developer.genesys.cloud/authorization/platform-auth/use-saml2-bearer)

The Saml2bearer grant only works when used in node.js. This is restricted intentionally because it is impossible for client credentials to be handled securely in a browser application.

```javascript
const client = platformClient.ApiClient.instance;
client.loginSaml2BearerGrant(clientId,clientSecret,orgName,encodedAssertionString)
  .then(() => {
    // Do authenticated things
  })
  .catch((err) => {
    // Handle failure response
    console.log(err);
  });
```

**Node.js** [Authorization Code Grant](https://developer.genesys.cloud/authorization/platform-auth/use-authorization-code)

The Authorization Code grant only works when used in node.js. This is restricted intentionally because it is impossible for client credentials to be handled securely in a browser application.

```javascript
const client = platformClient.ApiClient.instance;
client.loginCodeAuthorizationGrant(clientId,clientSecret,authCode,redirectUri)
  .then(() => {
    // Do authenticated things
  })
  .catch((err) => {
    // Handle failure response
    console.log(err);
  });
```

By default the SDK will transparently request a new access token when it expires. If multiple threads are running 1 thread will request a new token, other threads will wait a maximum of 10 seconds for the token refresh to complete, this time can be overriden with the _client.config.refresh_token_wait_max_ field of the _Configuration_ object within ApiClient.  
If you wish to apply the refresh logic yourself, set _client.config.refresh_access_token_ to false and store the refresh token. The _tokenExpiryTime_ can be used to preemptively request a new token. Use _refreshCodeAuthorizationGrant_ to request a new token when necessary.

```javascript
const client = platformClient.ApiClient.instance;
client.config.refresh_access_token = false;
client.loginCodeAuthorizationGrant(clientId,clientSecret,authCode,redirectUri)
  .then((authData) => {
    refreshToken = authData.refreshToken;
    tokenExpiryTime = authData.tokenExpiryTime;
    // Do authenticated things
  })
  .catch((err) => {
    // Handle failure response
    console.log(err);
  });

// When token expires
client.refreshCodeAuthorizationGrant(clientId,clientSecret,refreshToken)
  .then((authData) => {
    refreshToken = authData.refreshToken;
    tokenExpiryTime = authData.tokenExpiryTime;
    // Do authenticated things again
  })
  .catch((err) => {
    // Handle failure response
    console.log(err);
  });
```

**Node.js** [PKCE Grant](https://developer.genesys.cloud/authorization/platform-auth/use-pkce)

```javascript
const client = platformClient.ApiClient.instance;
client.authorizePKCEGrant(clientId,codeVerifier,authCode,redirectUri)
  .then(() => {
    // Do authenticated things
  })
  .catch((err) => {
    // Handle failure response
    console.log(err);
  });
```

The SDK also provides methods to generate a PKCE Code Verifier and to compute PKCE Code Challenge.  
**This requires Node version 18 (or above). The generatePKCECodeVerifier and computePKCECodeChallenge methods will fail with older Node versions.**

```javascript
let codeVerifier = client.generatePKCECodeVerifier(128);
let codeChallenge = await client.computePKCECodeChallenge(codeVerifier);
```

**Web** [PKCE Grant](https://developer.genesys.cloud/authorization/platform-auth/use-pkce)

The _loginPKCEGrant_ only works when used in a browser. This is because a node.js application does not have a browser interface that can display the Genesys Cloud login window.

Optional parameters may be specified in the optional third parameter for `loginPKCEGrant`. This parameter accepts an object with key/value pairs. Supported properties:

* `state` - An arbitrary string used to associate a login request with a login response. This value will be provided in the `state` property on the object when the promise is resolved. The state in the resolved promise will be identical to what was passed into `loginPKCEGrant`, except when the state is retrieved from the auth query upon completing a login; in that case, the state from the auth query will override the passed in state.

The _loginPKCEGrant_ supports an optional fourth parameter for `loginPKCEGrant`. This parameter accepts a string, used to provide a code verifier as input. When no code verifier is provider (Method 1), the SDK automatically generates a PKCE Code Verifier and saves it in _window sessionStorage_. If a code verifier is provided (Method 2), it is up to the custom application to store the code verifier value and pass it in _loginPKCEGrant_.

```javascript
const client = platformClient.ApiClient.instance;

// Method1: Let loginPKCEGrant generate the code verifier
client.loginPKCEGrant(clientId, redirectUri, { state: state })
  .then((data) => {
    console.log(data);
    // Do authenticated things
  })
  .catch((err) => {
    // Handle failure response
    console.log(err);
  });

// Method2: code verifier as input parameter
let codeVerifier = client.generatePKCECodeVerifier(128);
client.loginPKCEGrant(clientId, redirectUri, { state: state }, codeVerifier)
  .then((data) => {
    console.log(data);
    // Do authenticated things
  })
  .catch((err) => {
    // Handle failure response
    console.log(err);
  });
```

The SDK also provides methods to generate a PKCE Code Verifier and to compute PKCE Code Challenge.

```javascript
let codeVerifier = client.generatePKCECodeVerifier(128);
let codeChallenge = await client.computePKCECodeChallenge(codeVerifier);
```

**Web** [Implicit grant](https://developer.genesys.cloud/authorization/platform-auth/use-implicit-grant)

The Implicit grant only works when used in a browser. This is because a node.js application does not have a browser interface that can display the Genesys Cloud login window.

Optional parameters may be specified in the optional third parameter for `loginImplicitGrant`. This parameter accepts an object with key/value pairs. Supported properties:

* `state` - An arbitrary string used to associate a login request with a login response. This value will be provided in the `state` property on the object when the promise is resolved. The state in the resolved promise will be identical to what was passed into `loginImplicitGrant`, except when the state is retrieved from the auth hash upon completing a login; in that case, the state from the auth hash will override the passed in state.

```javascript
const client = platformClient.ApiClient.instance;
client.loginImplicitGrant(clientId, redirectUri, { state: state })
  .then((data) => {
    console.log(data);
    // Do authenticated things
  })
  .catch((err) => {
    // Handle failure response
    console.log(err);
  });
```

**Any platform** Provide an existing auth token

```javascript
const client = platformClient.ApiClient.instance;
client.setAccessToken(yourAccessToken);
// Do authenticated things; no authentication function needed
```

### Authorization Failure

When authenticating in a browser using `loginClientCredentialsGrant(...)`, if the user completes the authentication process but their session is unable to be authorized, they will still be redirected back to the redirect URI. When `loginClientCredentialsGrant(...)` is invoked after the failure redirect, the promise returned will be rejected with an error message built from the `error` and `error_description`. The error information, as well as the state, can be accessed via `platformClient.ApiClient.instance.authData`. The application is expected to identify these login failures and interact with the user in a manner appropriate for the application.

## SDK Logging

Logging of API requests and responses can be controlled by a number of parameters on the `Configuration`'s `Logger` instance.

`log_level` values:
1. LTrace (HTTP Method, URL, Request Body, HTTP Status Code, Request Headers, Response Headers)
2. LDebug (HTTP Method, URL, Request Body, HTTP Status Code, Request Headers)
3. LError (HTTP Method, URL, Request Body, Response Body, HTTP Status Code, Request Headers, Response Headers)
4. LNone - default

`log_format` values:
1. JSON
2. TEXT - default

By default, the request and response bodies are not logged because these can contain PII. Be mindful of this data if choosing to log it.  
To log to a file, provide a `log_file_path` value. SDK users are responsible for the rotation of the log file. This feature is not available in browser-based applications.

Example logging configuration:

```javascript
client.config.logger.log_level = client.config.logger.logLevelEnum.level.LTrace;
client.config.logger.log_format = client.config.logger.logFormatEnum.formats.JSON;
client.config.logger.log_request_body = true;
client.config.logger.log_response_body = true;
client.config.logger.log_to_console = true;
client.config.logger.log_file_path = "/var/log/javascriptsdk.log";

client.config.logger.setLogger(); // To apply above changes
```

#### Configuration file

**Note:** This feature is not available in browser-based applications

A number of configuration parameters can be applied using a configuration file. There are two sources for this file:

1. The SDK will look for `%USERPROFILE%\.genesyscloudjavascript\config` on Windows if the environment variable USERPROFILE is defined, otherwise uses the path to the profile directory of the current user as home, or `$HOME/.genesyscloudjavascript/config` on Unix.
2. Provide a valid file path to `client.config.setConfigPath()`

The SDK will constantly check to see if the config file has been updated, regardless of whether a config file was present at start-up. To disable this behaviour, set `client.config.live_reload_config` to false.  
INI and JSON formats are supported. See below for examples of configuration values in both formats:

**Warning:**
When using `Jest` to test projects containing this SDK you must set `client.config.live_reload_config` to false to avoid the following error:  
> ReferenceError: You are trying to import a file after the Jest environment has been torn down

INI:

```ini
[logging]
log_level = trace
log_format = text
log_to_console = false
log_file_path = /var/log/javascriptsdk.log
log_response_body = false
log_request_body = false
[reauthentication]
refresh_access_token = true
refresh_token_wait_max = 10
[general]
live_reload_config = true
host = https://api.mypurecloud.com
```

JSON:

```json
{
    "logging": {
        "log_level": "trace",
        "log_format": "text",
        "log_to_console": false,
        "log_file_path": "/var/log/javascriptsdk.log",
        "log_response_body": false,
        "log_request_body": false
    },
    "reauthentication": {
        "refresh_access_token": true,
        "refresh_token_wait_max": 10
    },
    "general": {
        "live_reload_config": true,
        "host": "https://api.mypurecloud.com"
    }
}
```

The Genesys Cloud Login and API URL path can be overridden if necessary (i.e. if the Genesys Cloud requests must be sent through to an intermediate API gateway or equivalent).

This can be achieved defining a "gateway" configuration, in the INI or the JSON configuration file.

* "host" is the address of your gateway.
* "protocol" is not mandatory. It will default to "https" if the parameter is not defined or empty.
* "port" is not mandatory. This parameter can be defined if a non default port is used and needs to be specified in the url (value must be greater or equal to 0).
* "path_params_login" and "path_params_api" are not mandatory. They will be appended to the gateway url path if these parameters are defined and non empty (for Login requests and for API requests).
* "username" and "password" are not used at this stage. This is for a possible future use.

With the configuration below, this would result in:

* Login requests to: "https://mygateway.mydomain.myextension:1443/myadditionalpathforlogin" (e.g. "https://mygateway.mydomain.myextension:1443/myadditionalpathforlogin/oauth/token")
* API requests to: "https://mygateway.mydomain.myextension:1443/myadditionalpathforapi" (e.g. "https://mygateway.mydomain.myextension:1443/myadditionalpathforlogin/api/v2/users/me")

INI:

```ini
[logging]
log_level = trace
log_format = text
log_to_console = false
log_file_path = /var/log/javascriptsdk.log
log_response_body = false
log_request_body = false
[reauthentication]
refresh_access_token = true
refresh_token_wait_max = 10
[general]
live_reload_config = true
host = https://api.mypurecloud.com
[gateway]
host = mygateway.mydomain.myextension
protocol = https
port = 1443
path_params_login = myadditionalpathforlogin
path_params_api = myadditionalpathforapi
username = username
password = password
```

JSON:

```json
{
    "logging": {
        "log_level": "trace",
        "log_format": "text",
        "log_to_console": false,
        "log_file_path": "/var/log/javascriptsdk.log",
        "log_response_body": false,
        "log_request_body": false
    },
    "reauthentication": {
        "refresh_access_token": true,
        "refresh_token_wait_max": 10
    },
    "general": {
        "live_reload_config": true,
        "host": "https://api.mypurecloud.com"
    },
    "gateway": {
        "host": "mygateway.mydomain.myextension",
        "protocol": "https",
        "port": 1443,
        "path_params_login": "myadditionalpathforlogin",
        "path_params_api": "myadditionalpathforapi",
        "username": "username",
        "password": "password"
    }
}
```

## Environments

If connecting to a Genesys Cloud environment other than mypurecloud.com (e.g. mypurecloud.ie), set the environment on the `ApiClient` instance with the PureCloudRegionHosts object.

```javascript
const client = platformClient.ApiClient.instance;
client.setEnvironment(platformClient.PureCloudRegionHosts.eu_west_1);
```

### Setting an intermediate Gateway

The Genesys Cloud Login and API URL path can be overridden if necessary (i.e. if the Genesys Cloud requests must be sent through to an intermediate API gateway or equivalent).

This can be achieved setting the gateway configuration on the `ApiClient` instance.

```javascript
const client = platformClient.ApiClient.instance;
client.setGateway({host: 'mygateway.mydomain.myextension', protocol: 'https', port: 1443, path_params_login: 'myadditionalpathforlogin', path_params_api: 'myadditionalpathforapi'});

// If you need, you can later remove the Gateway Configuration and fallback to the Enviroment setting using: client.setGateway();
```

* "host" is the address of your gateway.
* "protocol" is not mandatory. It will default to "https" if the parameter is not defined or empty.
* "port" is not mandatory. This parameter can be defined if a non default port is used and needs to be specified in the url (value must be greater or equal to 0).
* "path_params_login" and "path_params_api" are not mandatory. They will be appended to the gateway url path if these parameters are defined and non empty (for Login requests and for API requests).
* "username" and "password" are not used at this stage. This is for a possible future use.

With the configuration below, this would result in:

* Login requests to: "https://mygateway.mydomain.myextension:1443/myadditionalpathforlogin" (e.g. "https://mygateway.mydomain.myextension:1443/myadditionalpathforlogin/oauth/token")
* API requests to: "https://mygateway.mydomain.myextension:1443/myadditionalpathforapi" (e.g. "https://mygateway.mydomain.myextension:1443/myadditionalpathforlogin/api/v2/users/me")


## Access Token persistence

In a web environment, it is possible to persist the access token to prevent an authentication request from being made on each page load. To enable this function, simply enable settings persistence prior to attempting a login. To maintain multiple auth tokens in storage, specify the prefix to use for storage/retrieval when enabling persistence. Otherwise, the prefix is optional and will default to `purecloud`.

```javascript
const client = platformClient.ApiClient.instance;
client.setPersistSettings(true, 'optional_prefix');
```


## Making Requests

All API requests return a Promise which resolves to the response body, otherwise it rejects with an error. After authenticating using one of the methods defined above, the following code will make an authenticated request:

**Node.js**

```javascript
// Create API instance
const authorizationApi = new platformClient.AuthorizationApi();

// Authenticate
client.loginClientCredentialsGrant(clientId, clientSecret)
  .then(() => { 
    // Make request to GET /api/v2/authorization/permissions
    return authorizationApi.getAuthorizationPermissions();
  })
  .then((permissions) => {
    // Handle successful result
    console.log(permissions);
  })
  .catch((err) => {
    // Handle failure response
    console.log(err);
  });
```

**Web**

```javascript
// Create API instance
const usersApi = new platformClient.UsersApi();

// Authenticate
client.loginImplicitGrant(clientId, redirectUri)
  .then(() => {
    // Make request to GET /api/v2/users/me?expand=presence
    return usersApi.getUsersMe({ 'expand': ["presence"] });
  })
  .then((userMe) => {
    // Handle successful result
    console.log(`Hello, ${userMe.name}!`);
  })
  .catch((err) => {
    // Handle failure response
    console.log(err);
  });
```


### Extended Responses

By default, the SDK will return only the response body as the result of an API function call. To retrieve additional information about the response, enable extended responses. This will return the extended response for all API function calls:

```javascript
const client = platformClient.ApiClient.instance;
client.setReturnExtendedResponses(true);
```

Extended response object example (`body` and `text` have been truncated):

```json
{
  "status": 200,
  "statusText": "",
  "headers": {
    "pragma": "no-cache",
    "inin-correlation-id": "ec35f2a8-289b-42d4-8893-c50eaf81a3c1",
    "content-type": "application/json",
    "cache-control": "no-cache, no-store, must-revalidate",
    "expires": "0"
  },
  "body": {},
  "text": "",
  "error": null
}
```


### Using a Proxy (Node.js only)

Using a proxy is accomplished by setting the `proxyAgent` on the `ApiClient` object.
The `proxyAgent` will be used to set the `httpsAgent` on the axios request object used in all api calls. See [axios documentation](https://axios-http.com/docs/req_config) for details.
We recommended using the npm package `hpagent` https://www.npmjs.com/package/hpagent to create a proxyAgent although other options are available.
An example using `hpagent` to create the proxy is shown below

NOTE: The hpagent package is a NodeJS package. As such, web applications that wish to use this proxy must configure their build tools to handle transpiling and polyfilling the NodeJS package for their desired web target.

```javascript
const {HttpsProxyAgent} = require('hpagent')
const client = platformClient.ApiClient.instance;

agent = new HttpsProxyAgent({
  proxy: proxyUrl,
});
client.setProxyAgent(agent)
```

### Using MTLS authentication via a Gateway

With Node.js applications, if there is MTLS authentication that need to be set for a gateway server (i.e. if the Genesys Cloud requests must be sent through an intermediate API gateway or equivalent, with MTLS enabled), you can use setMTLSCertificates to set the httpsAgent.

An example using `setMTLSCertificates` to setup MTLS for gateway is shown below

```javascript
const client = platformClient.ApiClient.instance;
client.setGateway({host: 'mygateway.mydomain.myextension', protocol: 'https', port: 1443, path_params_login: 'myadditionalpathforlogin', path_params_api: 'myadditionalpathforapi'});

client.setMTLSCertificates('mtls-test/localhost.cert.pem', 'mtls-test/localhost.key.pem', 'mtls-test/ca-chain.cert.pem')
```

If you have content of the private keys and cert information instead of the the filepaths , you can directly set this information using setMTLSContents

An example using `setMTLSContents` to setup MTLS for gateway is shown below

```javascript
const client = platformClient.ApiClient.instance;
client.setGateway({host: 'mygateway.mydomain.myextension', protocol: 'https', port: 1443, path_params_login: 'myadditionalpathforlogin', path_params_api: 'myadditionalpathforapi'});

client.setMTLSContents(cert.pem, key, caChainCert) // cert.pem, key, caChainCert are contents of the respective keys here. If you have a passphrase encoded data, please decode it and then pass the information to this method.
```


Please do note, these are used for setting a new proxy agent for the gateway server configuration.

If you want a custom proxy agent with MTLS , you can still use setProxyAgent method on client instance and inject your own httpsAgent.
The responsibility of setting the agent options inside the custom proxy agent will be with the caller.

Use Either setMTLSCertificates, or setProxyAgent or setHttpClient based on your use case, as the properties will be overridden based on what is invoked last.

Note that with javascript's Browser applications, MTLS is to be managed and supported by the Browser itself (Chrome, Firefox, ...), using standard Certificates stores.

### Inject custom Http Client

By default the SDK will use axios as default http client.
If you want to inject a new third party/custom implementation of client , you set the httpclient instance

The CustomHttpClient should be an instance of AbstractHttpClient defined in the SDK. which will implement the request method.
Please find an example for the same.

```javascript

class CustomHttpClient extends AbstractHttpClient{

    constructor() {
        super();
        this._axiosInstance = axios.create({});
    }

    request(options) {
        return this._axiosInstance.request(options);
    }
}


const client = platformClient.ApiClient.instance;

httpClient = new CustomHttpClient();
client.setHttpClient(httpClient)
```
### Using Pre Commit and Post Commit Hooks

For any custom requirements like pre validations or post cleanups (for ex: OCSP and CRL validation), we can inject the prehook and posthook functions.
The SDK's default client will make sure the injected hook functions are executed.

```javascript

async function PreHook(config) {
	try {
		console.log("Running Pre-Hook: Certificate Revocation Checks");

        // custom validation logics

		console.log("Certificate validated successfully.");
		return config;
	} catch (error) {
		console.error("Pre-Hook Validation Failed:", error.message);
		throw error; // Reject request if validation fails
	}
}

const client = platformClient.ApiClient.instance;
client.setGateway({host: 'mygateway.mydomain.myextension', protocol: 'https', port: 1443, path_params_login: 'myadditionalpathforlogin', path_params_api: 'myadditionalpathforapi'});

client.setMTLSContents(cert.pem, key, caChainCert) // cert.pem, key, caChainCert are contents of the respective keys here. If you have a passphrase encoded data, please decode it and then pass the information to this method.

client.setPreHook(PreHook)
```

## Versioning

The SDK's version is incremented according to the [Semantic Versioning Specification](https://semver.org/). The decision to increment version numbers is determined by [diffing the Platform API's swagger](https://github.com/purecloudlabs/platform-client-sdk-common/blob/master/modules/swaggerDiff.js) for automated builds, and optionally forcing a version bump when a build is triggered manually (e.g. releasing a bugfix).

## Support

This package is intended to be forwards compatible with v2 of Genesys Cloud's Platform API. While the general policy for the API is not to introduce breaking changes, there are certain additions and changes to the API that cause breaking changes for the SDK, often due to the way the API is expressed in its swagger definition. Because of this, the SDK can have a major version bump while the API remains at major version 2. While the SDK is intended to be forward compatible, patches will only be released to the latest version. For these reasons, it is strongly recommended that all applications using this SDK are kept up to date and use the latest version of the SDK.

For any issues, questions, or suggestions for the SDK, visit the [Genesys Cloud Developer Community](https://community.genesys.com/communities/community-home1/digestviewer?CommunityKey=a39cc4d6-857e-43cb-be7b-019581ab9f38).
