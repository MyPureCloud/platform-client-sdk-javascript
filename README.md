---
title: JavaScript SDK
---

# Platform API Javascript Client

A JavaScript library to interface with the PureCloud Platform API. View the documentation on the [PureCloud Developer Center](https://developer.mypurecloud.com/api/rest/client-libraries/javascript/). Browse the source code on [Github](https://github.com/MyPureCloud/platform-client-sdk-javascript).

[![GitHub release](https://img.shields.io/github/release/mypurecloud/platform-client-sdk-javascript.svg)]()
[![npm](https://img.shields.io/npm/v/purecloud-platform-client-v2.svg)](https://www.npmjs.com/package/purecloud-platform-client-v2)

## CommonJS

For node.js via [NPM](https://www.npmjs.com/package/purecloud-platform-client-v2):

```{"language":"sh"}
npm install purecloud-platform-client-v2
```

```{"language":"javascript"}
// Obtain a reference to the platformClient object
const platformClient = require('purecloud-platform-client-v2');
```

For direct use in a browser script:

```{"language":"html"}
<!-- Include the CJS SDK -->
<script src="https://sdk-cdn.mypurecloud.com/javascript/77.0.0/purecloud-platform-client-v2.min.js"></script>

<script type="text/javascript">
  // Obtain a reference to the platformClient object
  const platformClient = require('platformClient');
</script>
```


## AMD

```{"language":"html"}
<!-- Include requirejs -->
<script src="https://cdnjs.cloudflare.com/ajax/libs/require.js/2.3.5/require.min.js"></script>

<script type="text/javascript">
  // Obtain a reference to the platformClient object
  requirejs(['https://sdk-cdn.mypurecloud.com/javascript/amd/77.0.0/purecloud-platform-client-v2.min.js'], (platformClient) => {
    console.log(platformClient);
  });
</script>
```

## ES6 Classes and Other Entry Points

The node package's [package.json](https://github.com/MyPureCloud/platform-client-sdk-javascript/blob/master/build/package.json) file contains the following entry points for use with various packaging systems:

* **jsnext:main**
	* Entry point: src/purecloud-platform-client-v2/index.js
	* The main ES6 class in the source code
* **main**
	* Entry point: dist/node/purecloud-platform-client-v2.js
	* The CJS module for node apps
* **browser**
	* Entry point: dist/web-cjs/purecloud-platform-client-v2.min.js
	* The [Browserify](http://browserify.org/)ed CJS module for standalone use in a browser


# Usage

## Authentication

After authentication has completed, the access token is stored on the `ApiClient` instance and the access token will be sent with all API requests.

**Node.js** [Client Credentials grant](https://developer.mypurecloud.com/api/rest/authorization/use-client-credentials.html)

The Client Credentials grant only works when used in node.js. This is restricted intentionally because it is impossible for client credentials to be handled securely in a browser application.

```{"language":"javascript"}
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

**Node.js** [Saml2bearer Grant](https://developer.mypurecloud.com/api/rest/authorization/use-saml2-bearer.html)

The Saml2bearer grant only works when used in node.js. This is restricted intentionally because it is impossible for client credentials to be handled securely in a browser application.

```{"language":"javascript"}
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

**Web** [Implicit grant](https://developer.mypurecloud.com/api/rest/authorization/use-implicit-grant.html)

The Implicit grant only works when used in a browser. This is because a node.js application does not have a browser interface that can display the PureCloud login window.

Optional parameters may be specified in the optional third parameter for `loginImplicitGrant`. This parameter accepts an object with key/value pairs. Supported properties:

* `state` - An arbitrary string used to associate a login request with a login response. This value will be provided in the `state` property on the object when the promise is resolved. The state in the resolved promise will be identical to what was passed into `loginImplicitGrant`, except when the state is retrieved from the auth hash upon completing a login; in that case, the state from the auth hash will override the passed in state.

```{"language":"javascript"}
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

```{"language":"javascript"}
const client = platformClient.ApiClient.instance;
client.setAccessToken(yourAccessToken);
// Do authenticated things; no authentication function needed
```

### Authorization Failure

When authenticating in a browser using `loginClientCredentialsGrant(...)`, if the user completes the authentication process but their session is unable to be authorized, they will still be redirected back to the redirect URI. When `loginClientCredentialsGrant(...)` is invoked after the failure redirect, the promise returned will be rejected with an error message built from the `error` and `error_description`. The error information, as well as the state, can be accessed via `platformClient.ApiClient.instance.authData`. The application is expected to identify these login failures and interact with the user in a manner appropriate for the application.


## Environments

If connecting to a PureCloud environment other than mypurecloud.com (e.g. mypurecloud.ie), set the environment on the `ApiClient` instance with the PureCloudRegionHosts object.

```{"language":"javascript"}
const client = platformClient.ApiClient.instance;
client.setEnvironment(platformClient.PureCloudRegionHosts.eu_west_1);
```


## Access Token persistence

In a web environment, it is possible to persist the access token to prevent an authentication request from being made on each page load. To enable this function, simply enable settings persistence prior to attempting a login. To maintain multiple auth tokens in storage, specify the prefix to use for storage/retrieval when enabling persistence. Otherwise, the prefix is optional and will default to `purecloud`.

```{"language":"javascript"}
const client = platformClient.ApiClient.instance;
client.setPersistSettings(true, 'optional_prefix');
```


## Making Requests

All API requests return a Promise which resolves to the response body, otherwise it rejects with an error. After authenticating using one of the methods defined above, the following code will make an authenticated request:

**Node.js**

```{"language":"javascript"}
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

```{"language":"javascript"}
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

```{"language":"javascript"}
const client = platformClient.ApiClient.instance;
client.setReturnExtendedResponses(true);
```

Extended response object example (`body` and `text` have been truncated):

```{"language":"json"}
{
  "status": 200,
  "statusText": "",
  "headers": {
    "inin-ratelimit-allowed": "180",
    "inin-ratelimit-count": "3",
    "inin-ratelimit-reset": "3",
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

Using a proxy is accomplished in two steps:

1. Apply the `superagent-proxy` package to the `client.superagent` object
2. Set proxy settings on the `client` object

After both steps have been completed, the configured proxy server will be used for all requests.

NOTE: SDK proxy configuration is only available in the node.js package due to `superagent-proxy`'s incompatibility with browserify. Additionally, `superagent-proxy` is not included a dependency of the SDK and must be provided by your node application's dependencies.

```{"language":"javascript"}
const client = platformClient.ApiClient.instance;
require('superagent-proxy')(client.superagent);
// Configure settings for your proxy here
// Documentation: https://www.npmjs.com/package/proxy-agent
client.proxy = {
  host: '172.1.1.100',
  port: 443,
  protocol: 'https',
};
```


### Error Responses

Error responses will always be thrown as an extended response object. Note that the `error` property will contain a JavaScript [Error](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Error) object.

Example error response object:

```{"language":"json"}
{
  "status": 404,
  "statusText": "",
  "headers": {
    "inin-ratelimit-allowed": "300",
    "inin-ratelimit-count": "6",
    "inin-ratelimit-reset": "38",
    "pragma": "no-cache",
    "inin-correlation-id": "d11bd3b3-ab7e-4fd4-9687-d04af9f30a63",
    "content-type": "application/json",
    "cache-control": "no-cache, no-store, must-revalidate",
    "expires": "0"
  },
  "body": {
    "status": 404,
    "code": "not.found",
    "message": "The requested operation failed with status 404",
    "contextId": "d11bd3b3-ab7e-4fd4-9687-d04af9f30a63",
    "details": [],
    "errors": []
  },
  "text": "{\"status\":404,\"code\":\"not.found\",\"message\":\"The requested operation failed with status 404\",\"contextId\":\"d11bd3b3-ab7e-4fd4-9687-d04af9f30a63\",\"details\":[],\"errors\":[]}",
  "error": {
    "original": null
  }
}
```


## Debug Logging

There are hooks to trace requests and responses.  To enable debug tracing, provide a log object. Optionally, specify a maximum number of lines. If specified, the response body trace will be truncated. If not specified, the entire response body will be traced out.

```{"language":"javascript"}
const client = platformClient.ApiClient.instance;
client.setDebugLog(console.log, 25);
```


## Versioning

The SDK's version is incremented according to the [Semantic Versioning Specification](https://semver.org/). The decision to increment version numbers is determined by [diffing the Platform API's swagger](https://github.com/purecloudlabs/platform-client-sdk-common/blob/master/modules/swaggerDiff.js) for automated builds, and optionally forcing a version bump when a build is triggered manually (e.g. releasing a bugfix).


## Support

This package is intended to be forwards compatible with v2 of PureCloud's Platform API. While the general policy for the API is not to introduce breaking changes, there are certain additions and changes to the API that cause breaking changes for the SDK, often due to the way the API is expressed in its swagger definition. Because of this, the SDK can have a major version bump while the API remains at major version 2. While the SDK is intended to be forward compatible, patches will only be released to the latest version. For these reasons, it is strongly recommended that all applications using this SDK are kept up to date and use the latest version of the SDK.

For any issues, questions, or suggestions for the SDK, visit the [PureCloud Developer Forum](https://developer.mypurecloud.com/forum/).
