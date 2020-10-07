---
title: GeolocationApi
---
# platformClient.GeolocationApi

All URIs are relative to *https://api.mypurecloud.com*

| Method | HTTP request | Description |
| ------------- | ------------- | ------------- |
[**getGeolocationsSettings**](GeolocationApi.html#getGeolocationsSettings) | **GET** /api/v2/geolocations/settings | Get a organization&#39;s GeolocationSettings
[**getUserGeolocation**](GeolocationApi.html#getUserGeolocation) | **GET** /api/v2/users/{userId}/geolocations/{clientId} | Get a user&#39;s Geolocation
[**patchGeolocationsSettings**](GeolocationApi.html#patchGeolocationsSettings) | **PATCH** /api/v2/geolocations/settings | Patch a organization&#39;s GeolocationSettings
[**patchUserGeolocation**](GeolocationApi.html#patchUserGeolocation) | **PATCH** /api/v2/users/{userId}/geolocations/{clientId} | Patch a user&#39;s Geolocation
{: class="table table-striped"}

<a name="getGeolocationsSettings"></a>

# GeolocationSettings getGeolocationsSettings()



GET /api/v2/geolocations/settings

Get a organization&#39;s GeolocationSettings



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
{: class="table table-striped"}

### Return type

**GeolocationSettings**

<a name="getUserGeolocation"></a>

# Geolocation getUserGeolocation(userId, clientId)



GET /api/v2/users/{userId}/geolocations/{clientId}

Get a user&#39;s Geolocation



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

Patch a organization&#39;s GeolocationSettings



Requires ANY permissions: 

* geolocation:settings:edit


### Request Body Schema

<script type="text/javascript">
	function copyGeolocationSettingsExample() {
		let temp = $("<textarea>");
		$("body").append(temp);
		temp.val($('#GeolocationSettingsExample').text()).select();
		document.execCommand("copy");
		temp.remove();
		return false;
	}
</script>

GeolocationSettings <a href="#" onclick="return copyGeolocationSettingsExample()">Copy</a>

<div id="GeolocationSettingsExample">

```{"language":"json", "maxHeight": "250px"}
{ 
  "id": String, 
  "name": String, 
  "enabled": Boolean, 
  "mapboxKey": String, 
  "selfUri": String, 
}
```

</div>


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

Patch a user&#39;s Geolocation

The geolocation object can be patched one of three ways. Option 1: Set the &#39;primary&#39; property to true. This will set the client as the user&#39;s primary geolocation source.  Option 2: Provide the &#39;latitude&#39; and &#39;longitude&#39; values.  This will enqueue an asynchronous update of the &#39;city&#39;, &#39;region&#39;, and &#39;country&#39;, generating a notification. A subsequent GET operation will include the new values for &#39;city&#39;, &#39;region&#39; and &#39;country&#39;.  Option 3:  Provide the &#39;city&#39;, &#39;region&#39;, &#39;country&#39; values.  Option 1 can be combined with Option 2 or Option 3.  For example, update the client as primary and provide latitude and longitude values.

Requires NO permissions: 



### Request Body Schema

<script type="text/javascript">
	function copyGeolocationExample() {
		let temp = $("<textarea>");
		$("body").append(temp);
		temp.val($('#GeolocationExample').text()).select();
		document.execCommand("copy");
		temp.remove();
		return false;
	}
</script>

Geolocation <a href="#" onclick="return copyGeolocationExample()">Copy</a>

<div id="GeolocationExample">

```{"language":"json", "maxHeight": "250px"}
{ 
  "id": String, 
  "name": String, 
  "type": String, 
  "primary": Boolean, 
  "latitude": Number, 
  "longitude": Number, 
  "country": String, 
  "region": String, 
  "city": String, 
  "locations": { 
    "id": String, 
    "name": String, 
    "contactUser": { 
      "id": String, 
      "selfUri": String, 
    },  
    "emergencyNumber": { 
      "e164": String, 
      "number": String, 
      "type": String, 
    },  
    "address": { 
      "city": String, 
      "country": String, 
      "countryName": String, 
      "state": String, 
      "street1": String, 
      "street2": String, 
      "zipcode": String, 
    },  
    "state": String, 
    "notes": String, 
    "version": Number, 
    "path": [String], 
    "profileImage": { 
      "resolution": String, 
      "imageUri": String, 
    },  
    "floorplanImage": { 
      "resolution": String, 
      "imageUri": String, 
    },  
    "addressVerificationDetails": { 
      "status": String, 
      "dateFinished": Date, 
      "dateStarted": Date, 
      "service": String, 
    },  
    "addressVerified": Boolean, 
    "addressStored": Boolean, 
    "images": String, 
    "selfUri": String, 
  },  
  "selfUri": String, 
}
```

</div>


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

