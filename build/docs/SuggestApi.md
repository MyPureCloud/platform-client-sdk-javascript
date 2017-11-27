---
title: SuggestApi
---
# platformClient.SuggestApi

All URIs are relative to *https://api.mypurecloud.com*

| Method | HTTP request | Description |
| ------------- | ------------- | ------------- |
[**getSearch**](SuggestApi.html#getSearch) | **GET** /api/v2/search | Search using the q64 value returned from a previous search.
[**getSearchSuggest**](SuggestApi.html#getSearchSuggest) | **GET** /api/v2/search/suggest | Suggest resources using the q64 value returned from a previous suggest query.
[**postSearch**](SuggestApi.html#postSearch) | **POST** /api/v2/search | Search resources.
[**postSearchSuggest**](SuggestApi.html#postSearchSuggest) | **POST** /api/v2/search/suggest | Suggest resources.
{: class="table table-striped"}

<a name="getSearch"></a>

# JsonNodeSearchResponse getSearch(q64, opts)

GET /api/v2/search

Search using the q64 value returned from a previous search.



### Example

~~~ javascript
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Configure OAuth2 access token for authorization: PureCloud Auth
platformClient.ApiClient.instance.authentications['PureCloud Auth'].accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new platformClient.SuggestApi();

var q64 = "q64_example"; // String | q64

var opts = { 
  'expand': ["expand_example"], // [String] | Which fields, if any, to expand
  'profile': true // Boolean | profile
};
apiInstance.getSearch(q64, opts)
  .then(function(data) {
    console.log(`getSearch success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch(function(err) {
  	console.log('There was a failure calling getSearch');
    console.error(err);
  });

~~~

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **q64** | **String** | q64 |  |
 **expand** | **[String]** | Which fields, if any, to expand | [optional] <br />**Values**: routingStatus, presence, conversationSummary, outOfOffice, geolocation, station, authorization, profileSkills, locations, groups, callerUser.routingStatus, callerUser.primaryPresence, callerUser.conversationSummary, callerUser.outOfOffice, callerUser.geolocation |
 **profile** | **Boolean** | profile | [optional] [default to true] |
{: class="table table-striped"}

### Return type

**JsonNodeSearchResponse**

<a name="getSearchSuggest"></a>

# JsonNodeSearchResponse getSearchSuggest(q64, opts)

GET /api/v2/search/suggest

Suggest resources using the q64 value returned from a previous suggest query.



### Example

~~~ javascript
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Configure OAuth2 access token for authorization: PureCloud Auth
platformClient.ApiClient.instance.authentications['PureCloud Auth'].accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new platformClient.SuggestApi();

var q64 = "q64_example"; // String | q64

var opts = { 
  'expand': ["expand_example"], // [String] | Which fields, if any, to expand
  'profile': true // Boolean | profile
};
apiInstance.getSearchSuggest(q64, opts)
  .then(function(data) {
    console.log(`getSearchSuggest success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch(function(err) {
  	console.log('There was a failure calling getSearchSuggest');
    console.error(err);
  });

~~~

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **q64** | **String** | q64 |  |
 **expand** | **[String]** | Which fields, if any, to expand | [optional] <br />**Values**: routingStatus, presence, conversationSummary, outOfOffice, geolocation, station, authorization, profileSkills, locations, groups, callerUser.routingStatus, callerUser.primaryPresence, callerUser.conversationSummary, callerUser.outOfOffice, callerUser.geolocation |
 **profile** | **Boolean** | profile | [optional] [default to true] |
{: class="table table-striped"}

### Return type

**JsonNodeSearchResponse**

<a name="postSearch"></a>

# JsonNodeSearchResponse postSearch(body, opts)

POST /api/v2/search

Search resources.



### Example

~~~ javascript
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Configure OAuth2 access token for authorization: PureCloud Auth
platformClient.ApiClient.instance.authentications['PureCloud Auth'].accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new platformClient.SuggestApi();

var body = {}; // Object | Search request options

var opts = { 
  'profile': true // Boolean | profile
};
apiInstance.postSearch(body, opts)
  .then(function(data) {
    console.log(`postSearch success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch(function(err) {
  	console.log('There was a failure calling postSearch');
    console.error(err);
  });

~~~

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **body** | **Object** | Search request options |  |
 **profile** | **Boolean** | profile | [optional] [default to true] |
{: class="table table-striped"}

### Return type

**JsonNodeSearchResponse**

<a name="postSearchSuggest"></a>

# JsonNodeSearchResponse postSearchSuggest(body, opts)

POST /api/v2/search/suggest

Suggest resources.



### Example

~~~ javascript
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Configure OAuth2 access token for authorization: PureCloud Auth
platformClient.ApiClient.instance.authentications['PureCloud Auth'].accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new platformClient.SuggestApi();

var body = {}; // Object | Search request options

var opts = { 
  'profile': true // Boolean | profile
};
apiInstance.postSearchSuggest(body, opts)
  .then(function(data) {
    console.log(`postSearchSuggest success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch(function(err) {
  	console.log('There was a failure calling postSearchSuggest');
    console.error(err);
  });

~~~

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **body** | **Object** | Search request options |  |
 **profile** | **Boolean** | profile | [optional] [default to true] |
{: class="table table-striped"}

### Return type

**JsonNodeSearchResponse**

