# EmployeeEngagementApi

# platformClient.EmployeeEngagementApi

All URIs are relative to *https://api.mypurecloud.com*

| Method | HTTP request | Description |
| ------------- | ------------- | ------------- |
[**deleteEmployeeengagementCelebration**](EmployeeEngagementApi#deleteEmployeeengagementCelebration) | **DELETE** /api/v2/employeeengagement/celebrations/{celebrationId} | Deletes a celebration
[**getEmployeeengagementCelebrations**](EmployeeEngagementApi#getEmployeeengagementCelebrations) | **GET** /api/v2/employeeengagement/celebrations | Get all celebrations
[**getEmployeeengagementRecognition**](EmployeeEngagementApi#getEmployeeengagementRecognition) | **GET** /api/v2/employeeengagement/recognitions/{recognitionId} | Gets a single recognition
[**patchEmployeeengagementCelebration**](EmployeeEngagementApi#patchEmployeeengagementCelebration) | **PATCH** /api/v2/employeeengagement/celebrations/{celebrationId} | Set a state for a celebration
[**postEmployeeengagementRecognitions**](EmployeeEngagementApi#postEmployeeengagementRecognitions) | **POST** /api/v2/employeeengagement/recognitions | Creates a recognition



## deleteEmployeeengagementCelebration

> void deleteEmployeeengagementCelebration(celebrationId)


DELETE /api/v2/employeeengagement/celebrations/{celebrationId}

Deletes a celebration

Requires ANY permissions:

* engagement:celebration:delete

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.EmployeeEngagementApi();

let celebrationId = "celebrationId_example"; // String | The ID of the celebration

apiInstance.deleteEmployeeengagementCelebration(celebrationId)
  .then(() => {
    console.log('deleteEmployeeengagementCelebration returned successfully.');
  })
  .catch((err) => {
    console.log('There was a failure calling deleteEmployeeengagementCelebration');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **celebrationId** | **String** | The ID of the celebration |  |

### Return type

void (no response body)


## getEmployeeengagementCelebrations

> GetCelebrationListing getEmployeeengagementCelebrations(opts)


GET /api/v2/employeeengagement/celebrations

Get all celebrations

Requires ANY permissions:

* engagement:celebration:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.EmployeeEngagementApi();

let opts = { 
  'pageNumber': 1, // Number | 
  'pageSize': 25 // Number | 
};

apiInstance.getEmployeeengagementCelebrations(opts)
  .then((data) => {
    console.log(`getEmployeeengagementCelebrations success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getEmployeeengagementCelebrations');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **pageNumber** | **Number** |  | [optional] [default to 1] |
 **pageSize** | **Number** |  | [optional] [default to 25] |

### Return type

**GetCelebrationListing**


## getEmployeeengagementRecognition

> Recognition getEmployeeengagementRecognition(recognitionId)


GET /api/v2/employeeengagement/recognitions/{recognitionId}

Gets a single recognition

Requires ANY permissions:

* engagement:recognition:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.EmployeeEngagementApi();

let recognitionId = "recognitionId_example"; // String | The Recognition ID

apiInstance.getEmployeeengagementRecognition(recognitionId)
  .then((data) => {
    console.log(`getEmployeeengagementRecognition success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getEmployeeengagementRecognition');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **recognitionId** | **String** | The Recognition ID |  |

### Return type

**Recognition**


## patchEmployeeengagementCelebration

> void patchEmployeeengagementCelebration(celebrationId, body)


PATCH /api/v2/employeeengagement/celebrations/{celebrationId}

Set a state for a celebration

Requires ANY permissions:

* engagement:celebration:edit

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.EmployeeEngagementApi();

let celebrationId = "celebrationId_example"; // String | The ID of the celebration
let body = {}; // Object | Patch Celebration state

apiInstance.patchEmployeeengagementCelebration(celebrationId, body)
  .then(() => {
    console.log('patchEmployeeengagementCelebration returned successfully.');
  })
  .catch((err) => {
    console.log('There was a failure calling patchEmployeeengagementCelebration');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **celebrationId** | **String** | The ID of the celebration |  |
 **body** | **Object** | Patch Celebration state |  |

### Return type

void (no response body)


## postEmployeeengagementRecognitions

> RecognitionBase postEmployeeengagementRecognitions(body)


POST /api/v2/employeeengagement/recognitions

Creates a recognition

Requires ANY permissions:

* engagement:recognition:add

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.EmployeeEngagementApi();

let body = {}; // Object | Create Recognition

apiInstance.postEmployeeengagementRecognitions(body)
  .then((data) => {
    console.log(`postEmployeeengagementRecognitions success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling postEmployeeengagementRecognitions');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **body** | **Object** | Create Recognition |  |

### Return type

**RecognitionBase**


_purecloud-platform-client-v2@229.1.0_
