---
title: LocationsApi
---
# platformClient.LocationsApi

All URIs are relative to *https://api.mypurecloud.com*

| Method | HTTP request | Description |
| ------------- | ------------- | ------------- |
[**deleteLocation**](LocationsApi.html#deleteLocation) | **DELETE** /api/v2/locations/{locationId} | Delete a location
[**getLocation**](LocationsApi.html#getLocation) | **GET** /api/v2/locations/{locationId} | Get Location by ID.
[**getLocations**](LocationsApi.html#getLocations) | **GET** /api/v2/locations | Get a list of all locations.
[**getLocationsSearch**](LocationsApi.html#getLocationsSearch) | **GET** /api/v2/locations/search | Search locations using the q64 value returned from a previous search
[**patchLocation**](LocationsApi.html#patchLocation) | **PATCH** /api/v2/locations/{locationId} | Update a location
[**postLocations**](LocationsApi.html#postLocations) | **POST** /api/v2/locations | Create a location
[**postLocationsSearch**](LocationsApi.html#postLocationsSearch) | **POST** /api/v2/locations/search | Search locations
{: class="table table-striped"}

<a name="deleteLocation"></a>

# void deleteLocation(locationId)



DELETE /api/v2/locations/{locationId}

Delete a location



Requires ANY permissions: 

* directory:location:delete



### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.LocationsApi();

let locationId = "locationId_example"; // String | Location ID

apiInstance.deleteLocation(locationId)
  .then(() => {
    console.log('deleteLocation returned successfully.');
  })
  .catch((err) => {
    console.log('There was a failure calling deleteLocation');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **locationId** | **String** | Location ID |  |
{: class="table table-striped"}

### Return type

void (no response body)

<a name="getLocation"></a>

# LocationDefinition getLocation(locationId)



GET /api/v2/locations/{locationId}

Get Location by ID.



Requires ANY permissions: 

* telephony:plugin:all



### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.LocationsApi();

let locationId = "locationId_example"; // String | Location ID

apiInstance.getLocation(locationId)
  .then((data) => {
    console.log(`getLocation success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getLocation');
    console.error(err);
  });
```

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



Requires NO permissions: 




### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.LocationsApi();

let opts = { 
  'pageSize': 25, // Number | Page size
  'pageNumber': 1, // Number | Page number
  'id': ["id_example"], // [String] | id
  'sortOrder': "sortOrder_example" // String | Sort order
};

apiInstance.getLocations(opts)
  .then((data) => {
    console.log(`getLocations success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getLocations');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **pageSize** | **Number** | Page size | [optional] [default to 25] |
 **pageNumber** | **Number** | Page number | [optional] [default to 1] |
 **id** | **[String]** | id | [optional]  |
 **sortOrder** | **String** | Sort order | [optional] <br />**Values**: asc, desc |
{: class="table table-striped"}

### Return type

**LocationEntityListing**

<a name="getLocationsSearch"></a>

# LocationsSearchResponse getLocationsSearch(q64, opts)



GET /api/v2/locations/search

Search locations using the q64 value returned from a previous search



Requires NO permissions: 




### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.LocationsApi();

let q64 = "q64_example"; // String | q64
let opts = { 
  'expand': ["expand_example"] // [String] | expand
};

apiInstance.getLocationsSearch(q64, opts)
  .then((data) => {
    console.log(`getLocationsSearch success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getLocationsSearch');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **q64** | **String** | q64 |  |
 **expand** | **[String]** | expand | [optional]  |
{: class="table table-striped"}

### Return type

**LocationsSearchResponse**

<a name="patchLocation"></a>

# LocationDefinition patchLocation(locationId, body)



PATCH /api/v2/locations/{locationId}

Update a location



Requires ANY permissions: 

* directory:location:edit


### Request Body Schema

<script type="text/javascript">
	function copyLocationUpdateDefinitionExample() {
		let temp = $("<textarea>");
		$("body").append(temp);
		temp.val($('#LocationUpdateDefinitionExample').text()).select();
		document.execCommand("copy");
		temp.remove();
		return false;
	}
</script>

LocationUpdateDefinition <a href="#" onclick="return copyLocationUpdateDefinitionExample()">Copy</a>

<div id="LocationUpdateDefinitionExample">

```{"language":"json", "maxHeight": "250px"}
{ 
  "name": String, 
  "address": { 
    "city": String, 
    "country": String, 
    "countryName": String, 
    "state": String, 
    "street1": String, 
    "street2": String, 
    "zipcode": String, 
  },  
  "addressVerified": Boolean, 
  "emergencyNumber": { 
    "e164": String, 
    "number": String, 
    "type": String, 
  },  
  "state": String, 
  "version": Number, 
  "path": [String], 
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

let apiInstance = new platformClient.LocationsApi();

let locationId = "locationId_example"; // String | Location ID
let body = {}; // Object | Location

apiInstance.patchLocation(locationId, body)
  .then((data) => {
    console.log(`patchLocation success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling patchLocation');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **locationId** | **String** | Location ID |  |
 **body** | **Object** | Location |  |
{: class="table table-striped"}

### Return type

**LocationDefinition**

<a name="postLocations"></a>

# LocationDefinition postLocations(body)



POST /api/v2/locations

Create a location



Requires ANY permissions: 

* directory:location:add


### Request Body Schema

<script type="text/javascript">
	function copyLocationDefinitionExample() {
		let temp = $("<textarea>");
		$("body").append(temp);
		temp.val($('#LocationDefinitionExample').text()).select();
		document.execCommand("copy");
		temp.remove();
		return false;
	}
</script>

LocationDefinition <a href="#" onclick="return copyLocationDefinitionExample()">Copy</a>

<div id="LocationDefinitionExample">

```{"language":"json", "maxHeight": "250px"}
{ 
  "id": String, 
  "name": String, 
  "address": { 
    "city": String, 
    "country": String, 
    "countryName": String, 
    "state": String, 
    "street1": String, 
    "street2": String, 
    "zipcode": String, 
  },  
  "addressVerified": Boolean, 
  "emergencyNumber": { 
    "e164": String, 
    "number": String, 
    "type": String, 
  },  
  "state": String, 
  "version": Number, 
  "path": [String], 
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

let apiInstance = new platformClient.LocationsApi();

let body = {}; // Object | Location

apiInstance.postLocations(body)
  .then((data) => {
    console.log(`postLocations success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling postLocations');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **body** | **Object** | Location |  |
{: class="table table-striped"}

### Return type

**LocationDefinition**

<a name="postLocationsSearch"></a>

# LocationsSearchResponse postLocationsSearch(body)



POST /api/v2/locations/search

Search locations



Requires NO permissions: 



### Request Body Schema

<script type="text/javascript">
	function copyLocationSearchRequestExample() {
		let temp = $("<textarea>");
		$("body").append(temp);
		temp.val($('#LocationSearchRequestExample').text()).select();
		document.execCommand("copy");
		temp.remove();
		return false;
	}
</script>

LocationSearchRequest <a href="#" onclick="return copyLocationSearchRequestExample()">Copy</a>

<div id="LocationSearchRequestExample">

```{"language":"json", "maxHeight": "250px"}
{ 
  "sortOrder": String, 
  "sortBy": String, 
  "pageSize": Number, 
  "pageNumber": Number, 
  "sort": { 
    "sortOrder": String, 
    "sortBy": String, 
  },  
  "query": { 
    "endValue": String, 
    "values": [String], 
    "startValue": String, 
    "fields": [String], 
    "value": String, 
    "operator": String, 
    "group": { 
      "endValue": String, 
      "values": [String], 
      "startValue": String, 
      "fields": [String], 
      "value": String, 
      "operator": String, 
      "group": { 
        "endValue": String, 
        "values": [String], 
        "startValue": String, 
        "fields": [String], 
        "value": String, 
        "operator": String, 
        "group": { 
          "endValue": String, 
          "values": [String], 
          "startValue": String, 
          "fields": [String], 
          "value": String, 
          "operator": String, 
          "group": { 
            "endValue": String, 
            "values": [String], 
            "startValue": String, 
            "fields": [String], 
            "value": String, 
            "operator": String, 
            "group": { 
              "endValue": String, 
              "values": [String], 
              "startValue": String, 
              "fields": [String], 
              "value": String, 
              "operator": String, 
              "group": { 
                "endValue": String, 
                "values": [String], 
                "startValue": String, 
                "fields": [String], 
                "value": String, 
                "operator": String, 
                "group": [LocationSearchCriteria], 
                "type": String, 
              },  
              "type": String, 
            },  
            "type": String, 
          },  
          "type": String, 
        },  
        "type": String, 
      },  
      "type": String, 
    },  
    "type": String, 
  },  
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

let apiInstance = new platformClient.LocationsApi();

let body = {}; // Object | Search request options

apiInstance.postLocationsSearch(body)
  .then((data) => {
    console.log(`postLocationsSearch success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling postLocationsSearch');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **body** | **Object** | Search request options |  |
{: class="table table-striped"}

### Return type

**LocationsSearchResponse**

