# LogCaptureApi

# platformClient.LogCaptureApi

All URIs are relative to *https://api.mypurecloud.com*

| Method | HTTP request | Description |
| ------------- | ------------- | ------------- |
[**deleteDiagnosticsLogcaptureBrowserUser**](LogCaptureApi#deleteDiagnosticsLogcaptureBrowserUser) | **DELETE** /api/v2/diagnostics/logcapture/browser/users/{userId} | Disable browser log capture for the user
[**getDiagnosticsLogcaptureBrowserEntriesDownloadJob**](LogCaptureApi#getDiagnosticsLogcaptureBrowserEntriesDownloadJob) | **GET** /api/v2/diagnostics/logcapture/browser/entries/download/jobs/{jobId} | Gets status of async download execution
[**getDiagnosticsLogcaptureBrowserUser**](LogCaptureApi#getDiagnosticsLogcaptureBrowserUser) | **GET** /api/v2/diagnostics/logcapture/browser/users/{userId} | Get log capture configuration for the user
[**getDiagnosticsLogcaptureBrowserUsers**](LogCaptureApi#getDiagnosticsLogcaptureBrowserUsers) | **GET** /api/v2/diagnostics/logcapture/browser/users | Get all log capture enabled users for an org
[**postDiagnosticsLogcaptureBrowserEntriesDownloadJobs**](LogCaptureApi#postDiagnosticsLogcaptureBrowserEntriesDownloadJobs) | **POST** /api/v2/diagnostics/logcapture/browser/entries/download/jobs | Creates an async download execution
[**postDiagnosticsLogcaptureBrowserEntriesQuery**](LogCaptureApi#postDiagnosticsLogcaptureBrowserEntriesQuery) | **POST** /api/v2/diagnostics/logcapture/browser/entries/query | Query collected log entries. It returns a limited amount of records, to get all records use download endpoint.
[**postDiagnosticsLogcaptureBrowserUser**](LogCaptureApi#postDiagnosticsLogcaptureBrowserUser) | **POST** /api/v2/diagnostics/logcapture/browser/users/{userId} | Enable log capture for a user or update expiration



## deleteDiagnosticsLogcaptureBrowserUser

> void deleteDiagnosticsLogcaptureBrowserUser(userId, opts)


DELETE /api/v2/diagnostics/logcapture/browser/users/{userId}

Disable browser log capture for the user

Requires ANY permissions:

* troubleshooting:logCapture:delete

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.LogCaptureApi();

let userId = "userId_example"; // String | The id of the user to disable browser log capture
let opts = { 
  'customHeaders': {  // Object.<string, string> | Request Custom Headers
    'X-Service-Name': 'customer-service',
    'X-Request-ID': 'req-12345'
  }
};

apiInstance.deleteDiagnosticsLogcaptureBrowserUser(userId, opts)
  .then(() => {
    console.log('deleteDiagnosticsLogcaptureBrowserUser returned successfully.');
  })
  .catch((err) => {
    console.log('There was a failure calling deleteDiagnosticsLogcaptureBrowserUser');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **userId** | **String** | The id of the user to disable browser log capture |  |
 **customHeaders** | **Object.<string, string>** | Request Custom Headers | [optional] |

### Return type

void (no response body)


## getDiagnosticsLogcaptureBrowserEntriesDownloadJob

> LogCaptureDownloadExecutionResponse getDiagnosticsLogcaptureBrowserEntriesDownloadJob(jobId, opts)


GET /api/v2/diagnostics/logcapture/browser/entries/download/jobs/{jobId}

Gets status of async download execution

Requires ALL permissions:

* troubleshooting:logCapture:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.LogCaptureApi();

let jobId = "jobId_example"; // String | Job ID
let opts = { 
  'customHeaders': {  // Object.<string, string> | Request Custom Headers
    'X-Service-Name': 'customer-service',
    'X-Request-ID': 'req-12345'
  }
};

apiInstance.getDiagnosticsLogcaptureBrowserEntriesDownloadJob(jobId, opts)
  .then((data) => {
    console.log(`getDiagnosticsLogcaptureBrowserEntriesDownloadJob success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getDiagnosticsLogcaptureBrowserEntriesDownloadJob');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **jobId** | **String** | Job ID |  |
 **customHeaders** | **Object.<string, string>** | Request Custom Headers | [optional] |

### Return type

**LogCaptureDownloadExecutionResponse**


## getDiagnosticsLogcaptureBrowserUser

> LogCaptureUserConfigurationResponse getDiagnosticsLogcaptureBrowserUser(userId, opts)


GET /api/v2/diagnostics/logcapture/browser/users/{userId}

Get log capture configuration for the user

Requires ANY permissions:

* troubleshooting:logCapture:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.LogCaptureApi();

let userId = "userId_example"; // String | The id of the user to get browser log capture configuration
let opts = { 
  'customHeaders': {  // Object.<string, string> | Request Custom Headers
    'X-Service-Name': 'customer-service',
    'X-Request-ID': 'req-12345'
  }
};

apiInstance.getDiagnosticsLogcaptureBrowserUser(userId, opts)
  .then((data) => {
    console.log(`getDiagnosticsLogcaptureBrowserUser success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getDiagnosticsLogcaptureBrowserUser');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **userId** | **String** | The id of the user to get browser log capture configuration |  |
 **customHeaders** | **Object.<string, string>** | Request Custom Headers | [optional] |

### Return type

**LogCaptureUserConfigurationResponse**


## getDiagnosticsLogcaptureBrowserUsers

> LogCaptureUserConfigurationListing getDiagnosticsLogcaptureBrowserUsers(opts)


GET /api/v2/diagnostics/logcapture/browser/users

Get all log capture enabled users for an org

Requires ANY permissions:

* troubleshooting:logCapture:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.LogCaptureApi();

let opts = { 
  'includeExpired': false, // Boolean | Include expired users with log captures still available for search or download
  'customHeaders': {  // Object.<string, string> | Request Custom Headers
    'X-Service-Name': 'customer-service',
    'X-Request-ID': 'req-12345'
  }
};

apiInstance.getDiagnosticsLogcaptureBrowserUsers(opts)
  .then((data) => {
    console.log(`getDiagnosticsLogcaptureBrowserUsers success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getDiagnosticsLogcaptureBrowserUsers');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **includeExpired** | **Boolean** | Include expired users with log captures still available for search or download | [optional] [default to false] |
 **customHeaders** | **Object.<string, string>** | Request Custom Headers | [optional] |

### Return type

**LogCaptureUserConfigurationListing**


## postDiagnosticsLogcaptureBrowserEntriesDownloadJobs

> LogCaptureDownloadExecutionResponse postDiagnosticsLogcaptureBrowserEntriesDownloadJobs(opts)


POST /api/v2/diagnostics/logcapture/browser/entries/download/jobs

Creates an async download execution

Requires ANY permissions:

* troubleshooting:logCapture:add

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.LogCaptureApi();

let opts = { 
  'body': {}, // Object | 
  'customHeaders': {  // Object.<string, string> | Request Custom Headers
    'X-Service-Name': 'customer-service',
    'X-Request-ID': 'req-12345'
  }
};

apiInstance.postDiagnosticsLogcaptureBrowserEntriesDownloadJobs(opts)
  .then((data) => {
    console.log(`postDiagnosticsLogcaptureBrowserEntriesDownloadJobs success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling postDiagnosticsLogcaptureBrowserEntriesDownloadJobs');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **body** | **Object** |  | [optional]  |
 **customHeaders** | **Object.<string, string>** | Request Custom Headers | [optional] |

### Return type

**LogCaptureDownloadExecutionResponse**


## postDiagnosticsLogcaptureBrowserEntriesQuery

> LogCaptureQueryResponse postDiagnosticsLogcaptureBrowserEntriesQuery(opts)


POST /api/v2/diagnostics/logcapture/browser/entries/query

Query collected log entries. It returns a limited amount of records, to get all records use download endpoint.

Requires ANY permissions:

* troubleshooting:logCapture:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.LogCaptureApi();

let opts = { 
  'after': "after_example", // String | The cursor that points to the end of the set of entities that has been returned.
  'pageSize': "pageSize_example", // String | Number of entities to return. Maximum of 200.
  'body': {}, // Object | 
  'customHeaders': {  // Object.<string, string> | Request Custom Headers
    'X-Service-Name': 'customer-service',
    'X-Request-ID': 'req-12345'
  }
};

apiInstance.postDiagnosticsLogcaptureBrowserEntriesQuery(opts)
  .then((data) => {
    console.log(`postDiagnosticsLogcaptureBrowserEntriesQuery success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling postDiagnosticsLogcaptureBrowserEntriesQuery');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **after** | **String** | The cursor that points to the end of the set of entities that has been returned. | [optional]  |
 **pageSize** | **String** | Number of entities to return. Maximum of 200. | [optional]  |
 **body** | **Object** |  | [optional]  |
 **customHeaders** | **Object.<string, string>** | Request Custom Headers | [optional] |

### Return type

**LogCaptureQueryResponse**


## postDiagnosticsLogcaptureBrowserUser

> LogCaptureUserConfiguration postDiagnosticsLogcaptureBrowserUser(userId, opts)


POST /api/v2/diagnostics/logcapture/browser/users/{userId}

Enable log capture for a user or update expiration

Requires ANY permissions:

* troubleshooting:logCapture:add

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.LogCaptureApi();

let userId = "userId_example"; // String | The id of the user to enable browser log capture
let opts = { 
  'body': {}, // Object | 
  'customHeaders': {  // Object.<string, string> | Request Custom Headers
    'X-Service-Name': 'customer-service',
    'X-Request-ID': 'req-12345'
  }
};

apiInstance.postDiagnosticsLogcaptureBrowserUser(userId, opts)
  .then((data) => {
    console.log(`postDiagnosticsLogcaptureBrowserUser success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling postDiagnosticsLogcaptureBrowserUser');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **userId** | **String** | The id of the user to enable browser log capture |  |
 **body** | **Object** |  | [optional]  |
 **customHeaders** | **Object.<string, string>** | Request Custom Headers | [optional] |

### Return type

**LogCaptureUserConfiguration**


_purecloud-platform-client-v2@260.0.0_
