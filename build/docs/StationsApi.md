---
title: StationsApi
---
# platformClient.StationsApi

All URIs are relative to *https://api.mypurecloud.com*

| Method | HTTP request | Description |
| ------------- | ------------- | ------------- |
[**deleteStationAssociateduser**](StationsApi.html#deleteStationAssociateduser) | **DELETE** /api/v2/stations/{stationId}/associateduser | Unassigns the user assigned to this station
[**getStation**](StationsApi.html#getStation) | **GET** /api/v2/stations/{stationId} | Get station.
[**getStations**](StationsApi.html#getStations) | **GET** /api/v2/stations | Get the list of available stations.
{: class="table table-striped"}

<a name="deleteStationAssociateduser"></a>

# void deleteStationAssociateduser(stationId)

DELETE /api/v2/stations/{stationId}/associateduser

Unassigns the user assigned to this station



### Example

~~~ javascript
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Configure OAuth2 access token for authorization: PureCloud Auth
platformClient.ApiClient.instance.authentications['PureCloud Auth'].accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new platformClient.StationsApi();

var stationId = "stationId_example"; // String | Station ID

apiInstance.deleteStationAssociateduser(stationId)
  .then(function() {
    console.log('deleteStationAssociateduser returned successfully.');
  })
  .catch(function(error) {
  	console.log('There was a failure calling deleteStationAssociateduser');
    console.error(error);
  });

~~~

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **stationId** | **String** | Station ID |  |
{: class="table table-striped"}

### Return type

void (no response body)

<a name="getStation"></a>

# Station getStation(stationId)

GET /api/v2/stations/{stationId}

Get station.



### Example

~~~ javascript
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Configure OAuth2 access token for authorization: PureCloud Auth
platformClient.ApiClient.instance.authentications['PureCloud Auth'].accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new platformClient.StationsApi();

var stationId = "stationId_example"; // String | Station ID

apiInstance.getStation(stationId)
  .then(function(data) {
    console.log(`getStation success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch(function(error) {
  	console.log('There was a failure calling getStation');
    console.error(error);
  });

~~~

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **stationId** | **String** | Station ID |  |
{: class="table table-striped"}

### Return type

**Station**

<a name="getStations"></a>

# StationEntityListing getStations(opts)

GET /api/v2/stations

Get the list of available stations.



### Example

~~~ javascript
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Configure OAuth2 access token for authorization: PureCloud Auth
platformClient.ApiClient.instance.authentications['PureCloud Auth'].accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new platformClient.StationsApi();

var opts = { 
  'pageSize': 25, // Number | Page size
  'pageNumber': 1, // Number | Page number
  'sortBy': "name", // String | Sort by
  'name': "name_example", // String | Name
  'userSelectable': "userSelectable_example", // String | True for stations that the user can select otherwise false
  'webRtcUserId': "webRtcUserId_example", // String | Filter for the webRtc station of the webRtcUserId
  'id': "id_example", // String | Comma separated list of stationIds
  'lineAppearanceId': "lineAppearanceId_example" // String | lineAppearanceId
};
apiInstance.getStations(opts)
  .then(function(data) {
    console.log(`getStations success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch(function(error) {
  	console.log('There was a failure calling getStations');
    console.error(error);
  });

~~~

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **pageSize** | **Number** | Page size | [optional] [default to 25] |
 **pageNumber** | **Number** | Page number | [optional] [default to 1] |
 **sortBy** | **String** | Sort by | [optional] [default to name] |
 **name** | **String** | Name | [optional]  |
 **userSelectable** | **String** | True for stations that the user can select otherwise false | [optional]  |
 **webRtcUserId** | **String** | Filter for the webRtc station of the webRtcUserId | [optional]  |
 **id** | **String** | Comma separated list of stationIds | [optional]  |
 **lineAppearanceId** | **String** | lineAppearanceId | [optional]  |
{: class="table table-striped"}

### Return type

**StationEntityListing**

