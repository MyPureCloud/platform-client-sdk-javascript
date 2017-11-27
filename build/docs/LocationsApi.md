---
title: LocationsApi
---
# platformClient.LocationsApi

All URIs are relative to *https://api.mypurecloud.com*

| Method | HTTP request | Description |
| ------------- | ------------- | ------------- |
[**getLocation**](LocationsApi.html#getLocation) | **GET** /api/v2/locations/{locationId} | Get Location by ID.
[**getLocations**](LocationsApi.html#getLocations) | **GET** /api/v2/locations | Get a list of all locations.
[**getLocationsSearch**](LocationsApi.html#getLocationsSearch) | **GET** /api/v2/locations/search | Search locations using the q64 value returned from a previous search
[**postLocationsSearch**](LocationsApi.html#postLocationsSearch) | **POST** /api/v2/locations/search | Search locations
{: class="table table-striped"}

<a name="getLocation"></a>

# LocationDefinition getLocation(locationId)

GET /api/v2/locations/{locationId}

Get Location by ID.



### Example

~~~ javascript
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Configure OAuth2 access token for authorization: PureCloud Auth
platformClient.ApiClient.instance.authentications['PureCloud Auth'].accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new platformClient.LocationsApi();

var locationId = "locationId_example"; // String | Location ID

apiInstance.getLocation(locationId)
  .then(function(data) {
    console.log(`getLocation success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch(function(err) {
  	console.log('There was a failure calling getLocation');
    console.error(err);
  });

~~~

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **locationId** | **String** | Location ID |  |
{: class="table table-striped"}

### Return type

**LocationDefinition**

<a name="getLocations"></a>

# LocationEntityListing getLocations(opts)

GET /api/v2/locations

Get a list of all locations.



### Example

~~~ javascript
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Configure OAuth2 access token for authorization: PureCloud Auth
platformClient.ApiClient.instance.authentications['PureCloud Auth'].accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new platformClient.LocationsApi();

var opts = { 
  'pageSize': 25, // Number | Page size
  'pageNumber': 1, // Number | Page number
  'sortOrder': "sortOrder_example" // String | Sort order
};
apiInstance.getLocations(opts)
  .then(function(data) {
    console.log(`getLocations success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch(function(err) {
  	console.log('There was a failure calling getLocations');
    console.error(err);
  });

~~~

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **pageSize** | **Number** | Page size | [optional] [default to 25] |
 **pageNumber** | **Number** | Page number | [optional] [default to 1] |
 **sortOrder** | **String** | Sort order | [optional] <br />**Values**: asc, desc |
{: class="table table-striped"}

### Return type

**LocationEntityListing**

<a name="getLocationsSearch"></a>

# LocationsSearchResponse getLocationsSearch(q64, opts)

GET /api/v2/locations/search

Search locations using the q64 value returned from a previous search



### Example

~~~ javascript
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Configure OAuth2 access token for authorization: PureCloud Auth
platformClient.ApiClient.instance.authentications['PureCloud Auth'].accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new platformClient.LocationsApi();

var q64 = "q64_example"; // String | q64

var opts = { 
  'expand': ["expand_example"] // [String] | expand
};
apiInstance.getLocationsSearch(q64, opts)
  .then(function(data) {
    console.log(`getLocationsSearch success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch(function(err) {
  	console.log('There was a failure calling getLocationsSearch');
    console.error(err);
  });

~~~

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **q64** | **String** | q64 |  |
 **expand** | **[String]** | expand | [optional]  |
{: class="table table-striped"}

### Return type

**LocationsSearchResponse**

<a name="postLocationsSearch"></a>

# LocationsSearchResponse postLocationsSearch(body)

POST /api/v2/locations/search

Search locations



### Example

~~~ javascript
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Configure OAuth2 access token for authorization: PureCloud Auth
platformClient.ApiClient.instance.authentications['PureCloud Auth'].accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new platformClient.LocationsApi();

var body = {}; // Object | Search request options

apiInstance.postLocationsSearch(body)
  .then(function(data) {
    console.log(`postLocationsSearch success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch(function(err) {
  	console.log('There was a failure calling postLocationsSearch');
    console.error(err);
  });

~~~

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **body** | **Object** | Search request options |  |
{: class="table table-striped"}

### Return type

**LocationsSearchResponse**

