---
title: SearchApi
---
# platformClient.SearchApi

All URIs are relative to *https://api.mypurecloud.com*

| Method | HTTP request | Description |
| ------------- | ------------- | ------------- |
[**getDocumentationSearch**](SearchApi.html#getDocumentationSearch) | **GET** /api/v2/documentation/search | Search documentation using the q64 value returned from a previous search
[**getGroupsSearch**](SearchApi.html#getGroupsSearch) | **GET** /api/v2/groups/search | Search groups using the q64 value returned from a previous search
[**getLocationsSearch**](SearchApi.html#getLocationsSearch) | **GET** /api/v2/locations/search | Search locations using the q64 value returned from a previous search
[**getSearch**](SearchApi.html#getSearch) | **GET** /api/v2/search | Search using the q64 value returned from a previous search.
[**getSearchSuggest**](SearchApi.html#getSearchSuggest) | **GET** /api/v2/search/suggest | Suggest resources using the q64 value returned from a previous suggest query.
[**getUsersSearch**](SearchApi.html#getUsersSearch) | **GET** /api/v2/users/search | Search users using the q64 value returned from a previous search
[**getVoicemailSearch**](SearchApi.html#getVoicemailSearch) | **GET** /api/v2/voicemail/search | Search voicemails using the q64 value returned from a previous search
[**postDocumentationSearch**](SearchApi.html#postDocumentationSearch) | **POST** /api/v2/documentation/search | Search documentation
[**postGroupsSearch**](SearchApi.html#postGroupsSearch) | **POST** /api/v2/groups/search | Search groups
[**postLocationsSearch**](SearchApi.html#postLocationsSearch) | **POST** /api/v2/locations/search | Search locations
[**postSearch**](SearchApi.html#postSearch) | **POST** /api/v2/search | Search resources.
[**postSearchSuggest**](SearchApi.html#postSearchSuggest) | **POST** /api/v2/search/suggest | Suggest resources.
[**postUsersSearch**](SearchApi.html#postUsersSearch) | **POST** /api/v2/users/search | Search users
[**postVoicemailSearch**](SearchApi.html#postVoicemailSearch) | **POST** /api/v2/voicemail/search | Search voicemails
{: class="table table-striped"}

<a name="getDocumentationSearch"></a>

# [**DocumentationSearchResponse**](DocumentationSearchResponse.html) getDocumentationSearch(q64)

GET /api/v2/documentation/search

Search documentation using the q64 value returned from a previous search



### Example

~~~ javascript
const platformClient = require('purecloud-platform-client-v2');

// Configure OAuth2 access token for authorization: PureCloud Auth
platformClient.ApiClient.instance.authentications['PureCloud Auth'].accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new platformClient.SearchApi();

var q64 = "q64_example"; // String | q64

apiInstance.getDocumentationSearch(q64)
  .then(function(data) {
    console.log(`getDocumentationSearch success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch(function(error) {
  	console.log('There was a failure calling getDocumentationSearch');
    console.error(error);
  });

~~~

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **q64** | **String**| q64 |  |
{: class="table table-striped"}

### Return type

[**DocumentationSearchResponse**](DocumentationSearchResponse.html)

<a name="getGroupsSearch"></a>

# [**GroupsSearchResponse**](GroupsSearchResponse.html) getGroupsSearch(q64, opts)

GET /api/v2/groups/search

Search groups using the q64 value returned from a previous search



### Example

~~~ javascript
const platformClient = require('purecloud-platform-client-v2');

// Configure OAuth2 access token for authorization: PureCloud Auth
platformClient.ApiClient.instance.authentications['PureCloud Auth'].accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new platformClient.SearchApi();

var q64 = "q64_example"; // String | q64

var opts = { 
  'expand': ["expand_example"] // [String] | expand
};
apiInstance.getGroupsSearch(q64, opts)
  .then(function(data) {
    console.log(`getGroupsSearch success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch(function(error) {
  	console.log('There was a failure calling getGroupsSearch');
    console.error(error);
  });

~~~

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **q64** | **String**| q64 |  |
 **expand** | [**[String]**](String.html)| expand | [optional]  |
{: class="table table-striped"}

### Return type

[**GroupsSearchResponse**](GroupsSearchResponse.html)

<a name="getLocationsSearch"></a>

# [**LocationsSearchResponse**](LocationsSearchResponse.html) getLocationsSearch(q64, opts)

GET /api/v2/locations/search

Search locations using the q64 value returned from a previous search



### Example

~~~ javascript
const platformClient = require('purecloud-platform-client-v2');

// Configure OAuth2 access token for authorization: PureCloud Auth
platformClient.ApiClient.instance.authentications['PureCloud Auth'].accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new platformClient.SearchApi();

var q64 = "q64_example"; // String | q64

var opts = { 
  'expand': ["expand_example"] // [String] | expand
};
apiInstance.getLocationsSearch(q64, opts)
  .then(function(data) {
    console.log(`getLocationsSearch success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch(function(error) {
  	console.log('There was a failure calling getLocationsSearch');
    console.error(error);
  });

~~~

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **q64** | **String**| q64 |  |
 **expand** | [**[String]**](String.html)| expand | [optional]  |
{: class="table table-striped"}

### Return type

[**LocationsSearchResponse**](LocationsSearchResponse.html)

<a name="getSearch"></a>

# [**JsonNodeSearchResponse**](JsonNodeSearchResponse.html) getSearch(q64, opts)

GET /api/v2/search

Search using the q64 value returned from a previous search.



### Example

~~~ javascript
const platformClient = require('purecloud-platform-client-v2');

// Configure OAuth2 access token for authorization: PureCloud Auth
platformClient.ApiClient.instance.authentications['PureCloud Auth'].accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new platformClient.SearchApi();

var q64 = "q64_example"; // String | q64

var opts = { 
  'expand': ["expand_example"], // [String] | Which fields, if any, to expand
  'profile': true // Boolean | profile
};
apiInstance.getSearch(q64, opts)
  .then(function(data) {
    console.log(`getSearch success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch(function(error) {
  	console.log('There was a failure calling getSearch');
    console.error(error);
  });

~~~

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **q64** | **String**| q64 |  |
 **expand** | [**[String]**](String.html)| Which fields, if any, to expand | [optional] <br />**Values**: routingStatus, presence, conversationSummary, outOfOffice, geolocation, station, authorization, profileSkills, locations, groups, callerUser.routingStatus, callerUser.primaryPresence, callerUser.conversationSummary, callerUser.outOfOffice, callerUser.geolocation |
 **profile** | **Boolean**| profile | [optional] [default to true] |
{: class="table table-striped"}

### Return type

[**JsonNodeSearchResponse**](JsonNodeSearchResponse.html)

<a name="getSearchSuggest"></a>

# [**JsonNodeSearchResponse**](JsonNodeSearchResponse.html) getSearchSuggest(q64, opts)

GET /api/v2/search/suggest

Suggest resources using the q64 value returned from a previous suggest query.



### Example

~~~ javascript
const platformClient = require('purecloud-platform-client-v2');

// Configure OAuth2 access token for authorization: PureCloud Auth
platformClient.ApiClient.instance.authentications['PureCloud Auth'].accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new platformClient.SearchApi();

var q64 = "q64_example"; // String | q64

var opts = { 
  'expand': ["expand_example"], // [String] | Which fields, if any, to expand
  'profile': true // Boolean | profile
};
apiInstance.getSearchSuggest(q64, opts)
  .then(function(data) {
    console.log(`getSearchSuggest success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch(function(error) {
  	console.log('There was a failure calling getSearchSuggest');
    console.error(error);
  });

~~~

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **q64** | **String**| q64 |  |
 **expand** | [**[String]**](String.html)| Which fields, if any, to expand | [optional] <br />**Values**: routingStatus, presence, conversationSummary, outOfOffice, geolocation, station, authorization, profileSkills, locations, groups, callerUser.routingStatus, callerUser.primaryPresence, callerUser.conversationSummary, callerUser.outOfOffice, callerUser.geolocation |
 **profile** | **Boolean**| profile | [optional] [default to true] |
{: class="table table-striped"}

### Return type

[**JsonNodeSearchResponse**](JsonNodeSearchResponse.html)

<a name="getUsersSearch"></a>

# [**UsersSearchResponse**](UsersSearchResponse.html) getUsersSearch(q64, opts)

GET /api/v2/users/search

Search users using the q64 value returned from a previous search



### Example

~~~ javascript
const platformClient = require('purecloud-platform-client-v2');

// Configure OAuth2 access token for authorization: PureCloud Auth
platformClient.ApiClient.instance.authentications['PureCloud Auth'].accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new platformClient.SearchApi();

var q64 = "q64_example"; // String | q64

var opts = { 
  'expand': ["expand_example"] // [String] | expand
};
apiInstance.getUsersSearch(q64, opts)
  .then(function(data) {
    console.log(`getUsersSearch success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch(function(error) {
  	console.log('There was a failure calling getUsersSearch');
    console.error(error);
  });

~~~

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **q64** | **String**| q64 |  |
 **expand** | [**[String]**](String.html)| expand | [optional]  |
{: class="table table-striped"}

### Return type

[**UsersSearchResponse**](UsersSearchResponse.html)

<a name="getVoicemailSearch"></a>

# [**VoicemailsSearchResponse**](VoicemailsSearchResponse.html) getVoicemailSearch(q64, opts)

GET /api/v2/voicemail/search

Search voicemails using the q64 value returned from a previous search



### Example

~~~ javascript
const platformClient = require('purecloud-platform-client-v2');

// Configure OAuth2 access token for authorization: PureCloud Auth
platformClient.ApiClient.instance.authentications['PureCloud Auth'].accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new platformClient.SearchApi();

var q64 = "q64_example"; // String | q64

var opts = { 
  'expand': ["expand_example"] // [String] | expand
};
apiInstance.getVoicemailSearch(q64, opts)
  .then(function(data) {
    console.log(`getVoicemailSearch success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch(function(error) {
  	console.log('There was a failure calling getVoicemailSearch');
    console.error(error);
  });

~~~

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **q64** | **String**| q64 |  |
 **expand** | [**[String]**](String.html)| expand | [optional]  |
{: class="table table-striped"}

### Return type

[**VoicemailsSearchResponse**](VoicemailsSearchResponse.html)

<a name="postDocumentationSearch"></a>

# [**DocumentationSearchResponse**](DocumentationSearchResponse.html) postDocumentationSearch(body)

POST /api/v2/documentation/search

Search documentation



### Example

~~~ javascript
const platformClient = require('purecloud-platform-client-v2');

// Configure OAuth2 access token for authorization: PureCloud Auth
platformClient.ApiClient.instance.authentications['PureCloud Auth'].accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new platformClient.SearchApi();

var body = new platformClient.DocumentationSearchRequest(); // DocumentationSearchRequest | Search request options

apiInstance.postDocumentationSearch(body)
  .then(function(data) {
    console.log(`postDocumentationSearch success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch(function(error) {
  	console.log('There was a failure calling postDocumentationSearch');
    console.error(error);
  });

~~~

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **body** | [**DocumentationSearchRequest**](DocumentationSearchRequest.html)| Search request options |  |
{: class="table table-striped"}

### Return type

[**DocumentationSearchResponse**](DocumentationSearchResponse.html)

<a name="postGroupsSearch"></a>

# [**GroupsSearchResponse**](GroupsSearchResponse.html) postGroupsSearch(body)

POST /api/v2/groups/search

Search groups



### Example

~~~ javascript
const platformClient = require('purecloud-platform-client-v2');

// Configure OAuth2 access token for authorization: PureCloud Auth
platformClient.ApiClient.instance.authentications['PureCloud Auth'].accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new platformClient.SearchApi();

var body = new platformClient.GroupSearchRequest(); // GroupSearchRequest | Search request options

apiInstance.postGroupsSearch(body)
  .then(function(data) {
    console.log(`postGroupsSearch success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch(function(error) {
  	console.log('There was a failure calling postGroupsSearch');
    console.error(error);
  });

~~~

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **body** | [**GroupSearchRequest**](GroupSearchRequest.html)| Search request options |  |
{: class="table table-striped"}

### Return type

[**GroupsSearchResponse**](GroupsSearchResponse.html)

<a name="postLocationsSearch"></a>

# [**LocationsSearchResponse**](LocationsSearchResponse.html) postLocationsSearch(body)

POST /api/v2/locations/search

Search locations



### Example

~~~ javascript
const platformClient = require('purecloud-platform-client-v2');

// Configure OAuth2 access token for authorization: PureCloud Auth
platformClient.ApiClient.instance.authentications['PureCloud Auth'].accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new platformClient.SearchApi();

var body = new platformClient.LocationSearchRequest(); // LocationSearchRequest | Search request options

apiInstance.postLocationsSearch(body)
  .then(function(data) {
    console.log(`postLocationsSearch success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch(function(error) {
  	console.log('There was a failure calling postLocationsSearch');
    console.error(error);
  });

~~~

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **body** | [**LocationSearchRequest**](LocationSearchRequest.html)| Search request options |  |
{: class="table table-striped"}

### Return type

[**LocationsSearchResponse**](LocationsSearchResponse.html)

<a name="postSearch"></a>

# [**JsonNodeSearchResponse**](JsonNodeSearchResponse.html) postSearch(body, opts)

POST /api/v2/search

Search resources.



### Example

~~~ javascript
const platformClient = require('purecloud-platform-client-v2');

// Configure OAuth2 access token for authorization: PureCloud Auth
platformClient.ApiClient.instance.authentications['PureCloud Auth'].accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new platformClient.SearchApi();

var body = new platformClient.SearchRequest(); // SearchRequest | Search request options

var opts = { 
  'profile': true // Boolean | profile
};
apiInstance.postSearch(body, opts)
  .then(function(data) {
    console.log(`postSearch success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch(function(error) {
  	console.log('There was a failure calling postSearch');
    console.error(error);
  });

~~~

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **body** | [**SearchRequest**](SearchRequest.html)| Search request options |  |
 **profile** | **Boolean**| profile | [optional] [default to true] |
{: class="table table-striped"}

### Return type

[**JsonNodeSearchResponse**](JsonNodeSearchResponse.html)

<a name="postSearchSuggest"></a>

# [**JsonNodeSearchResponse**](JsonNodeSearchResponse.html) postSearchSuggest(body, opts)

POST /api/v2/search/suggest

Suggest resources.



### Example

~~~ javascript
const platformClient = require('purecloud-platform-client-v2');

// Configure OAuth2 access token for authorization: PureCloud Auth
platformClient.ApiClient.instance.authentications['PureCloud Auth'].accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new platformClient.SearchApi();

var body = new platformClient.SuggestSearchRequest(); // SuggestSearchRequest | Search request options

var opts = { 
  'profile': true // Boolean | profile
};
apiInstance.postSearchSuggest(body, opts)
  .then(function(data) {
    console.log(`postSearchSuggest success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch(function(error) {
  	console.log('There was a failure calling postSearchSuggest');
    console.error(error);
  });

~~~

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **body** | [**SuggestSearchRequest**](SuggestSearchRequest.html)| Search request options |  |
 **profile** | **Boolean**| profile | [optional] [default to true] |
{: class="table table-striped"}

### Return type

[**JsonNodeSearchResponse**](JsonNodeSearchResponse.html)

<a name="postUsersSearch"></a>

# [**UsersSearchResponse**](UsersSearchResponse.html) postUsersSearch(body)

POST /api/v2/users/search

Search users



### Example

~~~ javascript
const platformClient = require('purecloud-platform-client-v2');

// Configure OAuth2 access token for authorization: PureCloud Auth
platformClient.ApiClient.instance.authentications['PureCloud Auth'].accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new platformClient.SearchApi();

var body = new platformClient.UserSearchRequest(); // UserSearchRequest | Search request options

apiInstance.postUsersSearch(body)
  .then(function(data) {
    console.log(`postUsersSearch success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch(function(error) {
  	console.log('There was a failure calling postUsersSearch');
    console.error(error);
  });

~~~

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **body** | [**UserSearchRequest**](UserSearchRequest.html)| Search request options |  |
{: class="table table-striped"}

### Return type

[**UsersSearchResponse**](UsersSearchResponse.html)

<a name="postVoicemailSearch"></a>

# [**VoicemailsSearchResponse**](VoicemailsSearchResponse.html) postVoicemailSearch(body)

POST /api/v2/voicemail/search

Search voicemails



### Example

~~~ javascript
const platformClient = require('purecloud-platform-client-v2');

// Configure OAuth2 access token for authorization: PureCloud Auth
platformClient.ApiClient.instance.authentications['PureCloud Auth'].accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new platformClient.SearchApi();

var body = new platformClient.VoicemailSearchRequest(); // VoicemailSearchRequest | Search request options

apiInstance.postVoicemailSearch(body)
  .then(function(data) {
    console.log(`postVoicemailSearch success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch(function(error) {
  	console.log('There was a failure calling postVoicemailSearch');
    console.error(error);
  });

~~~

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **body** | [**VoicemailSearchRequest**](VoicemailSearchRequest.html)| Search request options |  |
{: class="table table-striped"}

### Return type

[**VoicemailsSearchResponse**](VoicemailsSearchResponse.html)

