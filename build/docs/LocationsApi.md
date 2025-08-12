# LocationsApi

# platformClient.LocationsApi

All URIs are relative to *https://api.mypurecloud.com*

| Method | HTTP request | Description |
| ------------- | ------------- | ------------- |
[**deleteLocation**](LocationsApi#deleteLocation) | **DELETE** /api/v2/locations/{locationId} | Delete a location
[**getLocation**](LocationsApi#getLocation) | **GET** /api/v2/locations/{locationId} | Get Location by ID.
[**getLocationSublocations**](LocationsApi#getLocationSublocations) | **GET** /api/v2/locations/{locationId}/sublocations | Get sublocations for location ID.
[**getLocations**](LocationsApi#getLocations) | **GET** /api/v2/locations | Get a list of all locations.
[**getLocationsSearch**](LocationsApi#getLocationsSearch) | **GET** /api/v2/locations/search | Search locations using the q64 value returned from a previous search
[**patchLocation**](LocationsApi#patchLocation) | **PATCH** /api/v2/locations/{locationId} | Update a location
[**postLocations**](LocationsApi#postLocations) | **POST** /api/v2/locations | Create a location
[**postLocationsSearch**](LocationsApi#postLocationsSearch) | **POST** /api/v2/locations/search | Search locations



## deleteLocation

> void deleteLocation(locationId)


DELETE /api/v2/locations/{locationId}

Delete a location

Requires ALL permissions:

* directory:location:delete

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
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

### Return type

void (no response body)


## getLocation

> LocationDefinition getLocation(locationId, opts)


GET /api/v2/locations/{locationId}

Get Location by ID.

Requires NO permissions:

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.LocationsApi();

let locationId = "locationId_example"; // String | Location ID
let opts = { 
  'expand': ["expand_example"] // [String] | Which fields, if any, to expand
};

apiInstance.getLocation(locationId, opts)
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
 **expand** | **[String]** | Which fields, if any, to expand | [optional] <br />**Values**: images, addressVerificationDetails |

### Return type

**LocationDefinition**


## getLocationSublocations

> LocationEntityListing getLocationSublocations(locationId)


GET /api/v2/locations/{locationId}/sublocations

Get sublocations for location ID.

Requires NO permissions:

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.LocationsApi();

let locationId = "locationId_example"; // String | Location ID

apiInstance.getLocationSublocations(locationId)
  .then((data) => {
    console.log(`getLocationSublocations success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getLocationSublocations');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **locationId** | **String** | Location ID |  |

### Return type

**LocationEntityListing**


## getLocations

> LocationEntityListing getLocations(opts)


GET /api/v2/locations

Get a list of all locations.

Requires NO permissions:

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
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

### Return type

**LocationEntityListing**


## getLocationsSearch

> LocationsSearchResponse getLocationsSearch(q64, opts)


GET /api/v2/locations/search

Search locations using the q64 value returned from a previous search

Requires NO permissions:

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.LocationsApi();

let q64 = "q64_example"; // String | q64
let opts = { 
  'expand': ["expand_example"] // [String] | Provides more details about a specified resource
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
 **expand** | **[String]** | Provides more details about a specified resource | [optional] <br />**Values**: images, addressVerificationDetails |

### Return type

**LocationsSearchResponse**


## patchLocation

> LocationDefinition patchLocation(locationId, body)


PATCH /api/v2/locations/{locationId}

Update a location

Requires ALL permissions:

* directory:location:edit

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
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

### Return type

**LocationDefinition**


## postLocations

> LocationDefinition postLocations(body)


POST /api/v2/locations

Create a location

Requires ALL permissions:

* directory:location:add

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
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

### Return type

**LocationDefinition**


## postLocationsSearch

> LocationsSearchResponse postLocationsSearch(body)


POST /api/v2/locations/search

Search locations

Requires NO permissions:

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
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

### Return type

**LocationsSearchResponse**


_purecloud-platform-client-v2@229.1.0_
