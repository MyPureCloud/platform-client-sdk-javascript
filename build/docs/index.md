---
title: JavaScript SDK
---
A JavaScript library to interface with the PureCloud Platform API

[![GitHub release](https://img.shields.io/github/release/mypurecloud/platform-client-sdk-javascript.svg)]()
![Bower version](https://img.shields.io/bower/v/purecloud-platform-client-v2.svg)
[![npm](https://img.shields.io/npm/v/purecloud-platform-client-v2.svg)](https://www.npmjs.com/package/purecloud-platform-client-v2)


# Platform API Javascript Client

Install with [Bower](http://bower.io):

~~~ sh
bower install purecloud-platform-client-v2
~~~

Install with [NPM](https://www.npmjs.com/package/purecloud-platform-client-v2):

~~~ sh
npm install purecloud-platform-client-v2
~~~

Reference from the CDN:

~~~ html
<!-- Replace `17.0.0` with the version you want to use. -->
<script src="https://sdk-cdn.mypurecloud.com/javascript/17.0.0/purecloud-platform-client-v2.min.js"></script>
~~~

View the documentation on the [PureCloud Developer Center](https://developer.mypurecloud.com/api/rest/client-libraries/javascript/).
View the source code on [Github](https://github.com/MyPureCloud/purecloud-platform-client-v2).


# Usage

## Client-side usage

Reference the SDK in your HTML document. For convenience, all modules are bundled together.

~~~ html
<!-- Include the full library -->
<script src="https://sdk-cdn.mypurecloud.com/javascript/17.0.0/purecloud-platform-client-v2.min.js"></script>
~~~


## NodeJS usage

Require the SDK in your node app. All modules are obtained from the `purecloud-platform-client-v2` package.

~~~ javascript
const platformClient = require('purecloud-platform-client-v2');
~~~


## Authentication

After authentication has completed, the access token is stored on the `ApiClient` instance and the access token will be sent with all API requests.

**Node.js** [Client Credentials grant](https://developer.mypurecloud.com/api/rest/authorization/use-client-credentials.html)

The Client Credentials grant only works when used in node.js. This is restricted intentionally because it is impossible for client credentials to be handled securely in a browser application.

~~~ javascript
const platformClient = require('purecloud-platform-client-v2');
var client = platformClient.ApiClient.instance;
client.loginClientCredentialsGrant(clientId, clientSecret)
  .then(function() {
    // Do authenticated things
  })
  .catch(function(err) {
    // Handle failure response
    console.log(err);
  });
~~~

**Web** [Implicit grant](https://developer.mypurecloud.com/api/rest/authorization/use-implicit-grant.html)

The Implicit grant only works when used in a browser. This is because a node.js application does not have a browser interface that can display the PureCloud login window.

~~~ javascript
const platformClient = require('platformClient');
var client = platformClient.ApiClient.instance;
client.loginImplicitGrant(clientId, redirectUri)
  .then(function() {
    // Do authenticated things
  })
  .catch(function(err) {
    // Handle failure response
    console.log(err);
  });
~~~

**Any platform** Provide an existing auth token

~~~ javascript
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

var client = platformClient.ApiClient.instance;
client.setAccessToken(yourAccessToken);
// Do authenticated things; no login function needed
~~~


## Environments

If connecting to a PureCloud environment other than mypurecloud.com (e.g. mypurecloud.ie), set the environment on the `ApiClient` instance.

~~~ js
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

var client = platformClient.ApiClient.instance;
client.setEnvironment('mypurecloud.ie');
~~~


## Access Token persistence

In a web environment, it is possible to persist the access token to prevent an authentication request from being made on each page load. To enable this function, simply enable settings persistence prior to attempting a login. To maintain multiple auth tokens in storage, specify the prefix to use for storage/retrieval when enabling persistence. Otherwise, the prefix is optional and will default to `purecloud`.

~~~ js
const platformClient = require('platformClient');
var client = purecloud-platform-client-v2.ApiClient.instance;
client.setPersistSettings(true, 'optional_prefix');
~~~


## Making Requests

All API requests return a Promise which resolves to the response body, otherwise it rejects with an error. After authenticating using one of the methods defined above, the following code will make an authenticated request:

**Node.js**

~~~ js
const platformClient = require('purecloud-platform-client-v2');

// Create API instance
var authorizationApi = new platformClient.AuthorizationApi();

// Authenticate
client.loginClientCredentialsGrant(clientId, clientSecret)
  .then(function() 
    // Make request to GET /api/v2/authorization/permissions
    return authorizationApi.getAuthorizationPermissions();
  })
  .then(function(permissions) {
    // Handle successful result
    console.log(permissions);
  })
  .catch(function(err) {
    // Handle failure response
    console.log(err);
  });
~~~

**Web**

~~~ js
const platformClient = require('platformClient');

// Create API instance
var usersApi = new platformClient.UsersApi();

// Authenticate
client.loginImplicitGrant(clientId, redirectUri)
  .then(function() {
    // Make request to GET /api/v2/users/me?expand=presence
    return usersApi.getUsersMe({ 'expand': ["presence"] });
  })
  .then(function(userMe) {
    // Handle successful result
    console.log(`Hello, ${userMe.name}!`);
  })
  .catch(function(err) {
    // Handle failure response
    console.log(err);
  });
~~~


### Extended Responses

By default, the SDK will return only the response body as the result of an API function call. To retrieve additional information about the response, enable extended responses. This will return the extended response for all API function calls:

~~~ js
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

var client = purecloud-platform-client-v2.ApiClient.instance;
client.setReturnExtendedResponses(true);
~~~

Extended response object example (`body` and `text` have been truncated):

~~~ json
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
~~~


### Using a Proxy (Node.js only)

Using a proxy is accomplished in two steps:

1. Apply the `superagent-proxy` package to the `client.superagent` object
2. Set proxy settings on the `client` object

After both steps have been completed, the configured proxy server will be used for all requests.

NOTE: SDK proxy configuration is only available in the node.js package due to `superagent-proxy`'s incompatibility with browserify. Additionally, `superagent-proxy` is not included a dependency of the SDK and must be provided by your node application's dependencies.

~~~ js
const platformClient = require('purecloud-platform-client-v2');

var client = purecloud-platform-client-v2.ApiClient.instance;
require('superagent-proxy')(client.superagent);
// Configure settings for your proxy here
// Documentation: https://www.npmjs.com/package/proxy-agent
client.proxy = {
	host: '172.1.1.100',
	port: 443,
	protocol: 'https',
};
~~~


### Error Responses

Error responses will always be thrown as an extended response object. Note that the `error` property will contain a JavaScript [Error](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Error) object.

Example error response object:

~~~ json
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
~~~


## Debug Logging

There are hooks to trace requests and responses.  To enable debug tracing, provide a log object. Optionally, specify a maximum number of lines. If specified, the response body trace will be truncated. If not specified, the entire response body will be traced out.

~~~ js
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

var client = purecloud-platform-client-v2.ApiClient.instance;
client.setDebugLog(console.log, 25);
~~~
