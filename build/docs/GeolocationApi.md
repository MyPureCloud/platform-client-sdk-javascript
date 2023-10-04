---
title: GeolocationApi
---
# platformClient.GeolocationApi

All URIs are relative to *https://api.mypurecloud.com*

| Method | HTTP request | Description |
| ------------- | ------------- | ------------- |
[**getGeolocationsSettings**](GeolocationApi.html#getGeolocationsSettings) | **GET** /api/v2/geolocations/settings | Get a organization's GeolocationSettings
[**getUserGeolocation**](GeolocationApi.html#getUserGeolocation) | **GET** /api/v2/users/{userId}/geolocations/{clientId} | Get a user's Geolocation
[**patchGeolocationsSettings**](GeolocationApi.html#patchGeolocationsSettings) | **PATCH** /api/v2/geolocations/settings | Patch a organization's GeolocationSettings
[**patchUserGeolocation**](GeolocationApi.html#patchUserGeolocation) | **PATCH** /api/v2/users/{userId}/geolocations/{clientId} | Patch a user's Geolocation
{: class="table table-striped"}

<a name="getGeolocationsSettings"></a>

# GeolocationSettings getGeolocationsSettings()


GET /api/v2/geolocations/settings

Get a organization's GeolocationSettings

Requires NO permissions:

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.GeolocationApi();

apiInstance.getGeolocationsSettings()
  .then((data) => {
    console.log(`getGeolocationsSettings success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getGeolocationsSettings');
    console.error(err);
  });
```

### Parameters

This endpoint does not need any parameter.


### Return type

**GeolocationSettings**

<a name="getUserGeolocation"></a>

# Geolocation getUserGeolocation(userId, clientId)


GET /api/v2/users/{userId}/geolocations/{clientId}

Get a user's Geolocation

Requires NO permissions:

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.GeolocationApi();

let userId = "userId_example"; // String | user Id
let clientId = "clientId_example"; // String | client Id

apiInstance.getUserGeolocation(userId, clientId)
  .then((data) => {
    console.log(`getUserGeolocation success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getUserGeolocation');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **userId** | **String** | user Id |  |
 **clientId** | **String** | client Id |  |
{: class="table table-striped"}

### Return type

**Geolocation**

<a name="patchGeolocationsSettings"></a>

# GeolocationSettings patchGeolocationsSettings(body)


PATCH /api/v2/geolocations/settings

Patch a organization's GeolocationSettings

Requires ANY permissions:

* geolocation:settings:edit

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.GeolocationApi();

let body = {}; // Object | Geolocation settings

apiInstance.patchGeolocationsSettings(body)
  .then((data) => {
    console.log(`patchGeolocationsSettings success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling patchGeolocationsSettings');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **body** | **Object** | Geolocation settings |  |
{: class="table table-striped"}

### Return type

**GeolocationSettings**

<a name="patchUserGeolocation"></a>

# Geolocation patchUserGeolocation(userId, clientId, body)


PATCH /api/v2/users/{userId}/geolocations/{clientId}

Patch a user's Geolocation

The geolocation object can be patched one of three ways. Option 1: Set the primary property to true. This will set the client as the users primary geolocation source.  Option 2: Provide the latitude and longitude values.  This will enqueue an asynchronous update of the city, region, and country, generating a notification. A subsequent GET operation will include the new values for city, region and country.  Option 3:  Provide the city, region, country values.  Option 1 can be combined with Option 2 or Option 3.  For example, update the client as primary and provide latitude and longitude values.

Requires NO permissions:

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.GeolocationApi();

let userId = "userId_example"; // String | user Id
let clientId = "clientId_example"; // String | client Id
let body = {}; // Object | Geolocation

apiInstance.patchUserGeolocation(userId, clientId, body)
  .then((data) => {
    console.log(`patchUserGeolocation success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling patchUserGeolocation');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **userId** | **String** | user Id |  |
 **clientId** | **String** | client Id |  |
 **body** | **Object** | Geolocation |  |
{: class="table table-striped"}

### Return type

**Geolocation**

