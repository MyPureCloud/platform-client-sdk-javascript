# StationsApi

# platformClient.StationsApi

All URIs are relative to *https://api.mypurecloud.com*

| Method | HTTP request | Description |
| ------------- | ------------- | ------------- |
[**deleteStationAssociateduser**](StationsApi#deleteStationAssociateduser) | **DELETE** /api/v2/stations/{stationId}/associateduser | Unassigns the user assigned to this station
[**getStation**](StationsApi#getStation) | **GET** /api/v2/stations/{stationId} | Get station.
[**getStations**](StationsApi#getStations) | **GET** /api/v2/stations | Get the list of available stations.



## deleteStationAssociateduser

> void deleteStationAssociateduser(stationId)


DELETE /api/v2/stations/{stationId}/associateduser

Unassigns the user assigned to this station

Requires NO permissions:

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.StationsApi();

let stationId = "stationId_example"; // String | Station ID

apiInstance.deleteStationAssociateduser(stationId)
  .then(() => {
    console.log('deleteStationAssociateduser returned successfully.');
  })
  .catch((err) => {
    console.log('There was a failure calling deleteStationAssociateduser');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **stationId** | **String** | Station ID |  |

### Return type

void (no response body)


## getStation

> Station getStation(stationId)


GET /api/v2/stations/{stationId}

Get station.

Requires NO permissions:

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.StationsApi();

let stationId = "stationId_example"; // String | Station ID

apiInstance.getStation(stationId)
  .then((data) => {
    console.log(`getStation success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getStation');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **stationId** | **String** | Station ID |  |

### Return type

**Station**


## getStations

> StationEntityListing getStations(opts)


GET /api/v2/stations

Get the list of available stations.

Requires NO permissions:

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.StationsApi();

let opts = { 
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
  .then((data) => {
    console.log(`getStations success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getStations');
    console.error(err);
  });
```

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

### Return type

**StationEntityListing**


_purecloud-platform-client-v2@229.1.0_
