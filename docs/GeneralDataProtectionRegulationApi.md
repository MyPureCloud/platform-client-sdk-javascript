# GeneralDataProtectionRegulationApi

# platformClient.GeneralDataProtectionRegulationApi

All URIs are relative to *https://api.mypurecloud.com*

| Method | HTTP request | Description |
| ------------- | ------------- | ------------- |
[**getGdprRequest**](GeneralDataProtectionRegulationApi#getGdprRequest) | **GET** /api/v2/gdpr/requests/{requestId} | Get an existing GDPR request
[**getGdprRequests**](GeneralDataProtectionRegulationApi#getGdprRequests) | **GET** /api/v2/gdpr/requests | Get all GDPR requests
[**getGdprSubjects**](GeneralDataProtectionRegulationApi#getGdprSubjects) | **GET** /api/v2/gdpr/subjects | Get GDPR subjects
[**postGdprRequests**](GeneralDataProtectionRegulationApi#postGdprRequests) | **POST** /api/v2/gdpr/requests | Submit a new GDPR request



## getGdprRequest

> GDPRRequest getGdprRequest(requestId, opts)


GET /api/v2/gdpr/requests/{requestId}

Get an existing GDPR request

Requires ANY permissions:

* gdpr:request:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.GeneralDataProtectionRegulationApi();

let requestId = "requestId_example"; // String | Request id
let opts = { 
  'customHeaders': {  // Object.<string, string> | Request Custom Headers
    'X-Service-Name': 'customer-service',
    'X-Request-ID': 'req-12345'
  }
};

apiInstance.getGdprRequest(requestId, opts)
  .then((data) => {
    console.log(`getGdprRequest success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getGdprRequest');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **requestId** | **String** | Request id |  |
 **customHeaders** | **Object.<string, string>** | Request Custom Headers | [optional] |

### Return type

**GDPRRequest**


## getGdprRequests

> GDPRRequestEntityListing getGdprRequests(opts)


GET /api/v2/gdpr/requests

Get all GDPR requests

Requires ANY permissions:

* gdpr:request:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.GeneralDataProtectionRegulationApi();

let opts = { 
  'pageSize': 25, // Number | Page size
  'pageNumber': 1, // Number | Page number
  'customHeaders': {  // Object.<string, string> | Request Custom Headers
    'X-Service-Name': 'customer-service',
    'X-Request-ID': 'req-12345'
  }
};

apiInstance.getGdprRequests(opts)
  .then((data) => {
    console.log(`getGdprRequests success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getGdprRequests');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **pageSize** | **Number** | Page size | [optional] [default to 25] |
 **pageNumber** | **Number** | Page number | [optional] [default to 1] |
 **customHeaders** | **Object.<string, string>** | Request Custom Headers | [optional] |

### Return type

**GDPRRequestEntityListing**


## getGdprSubjects

> GDPRSubjectEntityListing getGdprSubjects(searchType, searchValue, opts)


GET /api/v2/gdpr/subjects

Get GDPR subjects

Requires ANY permissions:

* gdpr:subject:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.GeneralDataProtectionRegulationApi();

let searchType = "searchType_example"; // String | Search Type
let searchValue = "searchValue_example"; // String | Search Value
let opts = { 
  'customHeaders': {  // Object.<string, string> | Request Custom Headers
    'X-Service-Name': 'customer-service',
    'X-Request-ID': 'req-12345'
  }
};

apiInstance.getGdprSubjects(searchType, searchValue, opts)
  .then((data) => {
    console.log(`getGdprSubjects success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getGdprSubjects');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **searchType** | **String** | Search Type | <br />**Values**: NAME, ADDRESS, PHONE, EMAIL, TWITTER, INSTAGRAM, FACEBOOK, APPLE_MESSAGES, EXTERNAL_ID |
 **searchValue** | **String** | Search Value |  |
 **customHeaders** | **Object.<string, string>** | Request Custom Headers | [optional] |

### Return type

**GDPRSubjectEntityListing**


## postGdprRequests

> GDPRRequest postGdprRequests(body, opts)


POST /api/v2/gdpr/requests

Submit a new GDPR request

Requires ANY permissions:

* gdpr:request:add

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.GeneralDataProtectionRegulationApi();

let body = {}; // Object | GDPR request
let opts = { 
  'deleteConfirmed': false, // Boolean | Confirm delete
  'customHeaders': {  // Object.<string, string> | Request Custom Headers
    'X-Service-Name': 'customer-service',
    'X-Request-ID': 'req-12345'
  }
};

apiInstance.postGdprRequests(body, opts)
  .then((data) => {
    console.log(`postGdprRequests success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling postGdprRequests');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **body** | **Object** | GDPR request |  |
 **deleteConfirmed** | **Boolean** | Confirm delete | [optional] [default to false] |
 **customHeaders** | **Object.<string, string>** | Request Custom Headers | [optional] |

### Return type

**GDPRRequest**


_purecloud-platform-client-v2@256.0.0_
