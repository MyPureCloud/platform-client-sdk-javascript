# AnomalyDetectionApi

# platformClient.AnomalyDetectionApi

All URIs are relative to *https://api.mypurecloud.com*

| Method | HTTP request | Description |
| ------------- | ------------- | ------------- |
[**getSignalsAnomalydetectionQueueAnalysis**](AnomalyDetectionApi#getSignalsAnomalydetectionQueueAnalysis) | **GET** /api/v2/signals/anomalydetection/queues/{queueId}/analysis | Get forecasted bounds and analysis for the specified queue
[**getSignalsAnomalydetectionQueueAnomaliesExportsJob**](AnomalyDetectionApi#getSignalsAnomalydetectionQueueAnomaliesExportsJob) | **GET** /api/v2/signals/anomalydetection/queue/anomalies/exports/jobs/{jobId} | Get status of the queue anomaly export job
[**getSignalsAnomalydetectionQueueAnomaly**](AnomalyDetectionApi#getSignalsAnomalydetectionQueueAnomaly) | **GET** /api/v2/signals/anomalydetection/queue/anomalies/{anomalyId} | Get a queue anomaly by ID
[**getSignalsAnomalydetectionQueuesAvailable**](AnomalyDetectionApi#getSignalsAnomalydetectionQueuesAvailable) | **GET** /api/v2/signals/anomalydetection/queues/available | Get queues available for anomaly detection monitoring
[**getSignalsAnomalydetectionQueuesMonitored**](AnomalyDetectionApi#getSignalsAnomalydetectionQueuesMonitored) | **GET** /api/v2/signals/anomalydetection/queues/monitored | Get the list of queues currently enabled for anomaly detection monitoring
[**getSignalsAnomalydetectionSettings**](AnomalyDetectionApi#getSignalsAnomalydetectionSettings) | **GET** /api/v2/signals/anomalydetection/settings | Get organization specific anomaly settings
[**patchSignalsAnomalydetectionQueueAnomaly**](AnomalyDetectionApi#patchSignalsAnomalydetectionQueueAnomaly) | **PATCH** /api/v2/signals/anomalydetection/queue/anomalies/{anomalyId} | Update a queue anomaly by ID
[**patchSignalsAnomalydetectionQueuesMonitored**](AnomalyDetectionApi#patchSignalsAnomalydetectionQueuesMonitored) | **PATCH** /api/v2/signals/anomalydetection/queues/monitored | Add or remove queues from anomaly detection monitoring
[**postSignalsAnomalydetectionQueueAnomaliesExportsJobs**](AnomalyDetectionApi#postSignalsAnomalydetectionQueueAnomaliesExportsJobs) | **POST** /api/v2/signals/anomalydetection/queue/anomalies/exports/jobs | Create a queue anomaly export job
[**postSignalsAnomalydetectionQueueAnomaliesQuery**](AnomalyDetectionApi#postSignalsAnomalydetectionQueueAnomaliesQuery) | **POST** /api/v2/signals/anomalydetection/queue/anomalies/query | Query for queue anomalies
[**postSignalsAnomalydetectionQueueAnomaliesSummary**](AnomalyDetectionApi#postSignalsAnomalydetectionQueueAnomaliesSummary) | **POST** /api/v2/signals/anomalydetection/queue/anomalies/summary | Get summary of queue anomalies
[**putSignalsAnomalydetectionSettings**](AnomalyDetectionApi#putSignalsAnomalydetectionSettings) | **PUT** /api/v2/signals/anomalydetection/settings | Update organization specific anomaly settings



## getSignalsAnomalydetectionQueueAnalysis

> AnomalyDetectionQueueAnalysisResponse getSignalsAnomalydetectionQueueAnalysis(queueId, opts)


GET /api/v2/signals/anomalydetection/queues/{queueId}/analysis

Get forecasted bounds and analysis for the specified queue

Requires ANY permissions:

* signals:queueAnalysis:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.AnomalyDetectionApi();

let queueId = "queueId_example"; // String | The ID of the queue for which to retrieve anomaly analysis
let opts = { 
  'metrics': ["metrics_example"], // [String] | The metrics by which to filter the analysis. When not specified, returns all metrics
  'mediaTypes': ["mediaTypes_example"], // [String] | The media types by which to filter the analysis. When not specified, returns analysis for Email, Message, and Voice
  'startTime': "startTime_example", // String | The start of the time range for the analysis, in ISO-8601 format. If not specified, defaults to 48 hours before the most recent UTC midnight
  'endTime': "endTime_example", // String | The end of the time range for the analysis, in ISO-8601 format. If not specified, defaults to 48 hours after the most recent UTC midnight
  'customHeaders': {  // Object.<string, string> | Request Custom Headers
    'X-Service-Name': 'customer-service',
    'X-Request-ID': 'req-12345'
  }
};

apiInstance.getSignalsAnomalydetectionQueueAnalysis(queueId, opts)
  .then((data) => {
    console.log(`getSignalsAnomalydetectionQueueAnalysis success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getSignalsAnomalydetectionQueueAnalysis');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **queueId** | **String** | The ID of the queue for which to retrieve anomaly analysis |  |
 **metrics** | **[String]** | The metrics by which to filter the analysis. When not specified, returns all metrics | [optional] <br />**Values**: nOffered, tTalkCompleteAverage, oAnsweredPercent, oAbandonPercent, oServiceLevel, tAnsweredMax, tAnsweredAverage, tAcwAverage, tHeldCompleteAverage, tHandleMax, tHandleAverage, nHandled, nTransferred |
 **mediaTypes** | **[String]** | The media types by which to filter the analysis. When not specified, returns analysis for Email, Message, and Voice | [optional] <br />**Values**: Email, Message, Voice |
 **startTime** | **String** | The start of the time range for the analysis, in ISO-8601 format. If not specified, defaults to 48 hours before the most recent UTC midnight | [optional]  |
 **endTime** | **String** | The end of the time range for the analysis, in ISO-8601 format. If not specified, defaults to 48 hours after the most recent UTC midnight | [optional]  |
 **customHeaders** | **Object.<string, string>** | Request Custom Headers | [optional] |

### Return type

**AnomalyDetectionQueueAnalysisResponse**


## getSignalsAnomalydetectionQueueAnomaliesExportsJob

> QueueAnomalyExportJob getSignalsAnomalydetectionQueueAnomaliesExportsJob(jobId, opts)


GET /api/v2/signals/anomalydetection/queue/anomalies/exports/jobs/{jobId}

Get status of the queue anomaly export job

Requires ANY permissions:

* signals:queueAnomalyExportJob:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.AnomalyDetectionApi();

let jobId = "jobId_example"; // String | The ID of the anomaly export job
let opts = { 
  'customHeaders': {  // Object.<string, string> | Request Custom Headers
    'X-Service-Name': 'customer-service',
    'X-Request-ID': 'req-12345'
  }
};

apiInstance.getSignalsAnomalydetectionQueueAnomaliesExportsJob(jobId, opts)
  .then((data) => {
    console.log(`getSignalsAnomalydetectionQueueAnomaliesExportsJob success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getSignalsAnomalydetectionQueueAnomaliesExportsJob');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **jobId** | **String** | The ID of the anomaly export job |  |
 **customHeaders** | **Object.<string, string>** | Request Custom Headers | [optional] |

### Return type

**QueueAnomalyExportJob**


## getSignalsAnomalydetectionQueueAnomaly

> QueueAnomalyResponse getSignalsAnomalydetectionQueueAnomaly(anomalyId, opts)


GET /api/v2/signals/anomalydetection/queue/anomalies/{anomalyId}

Get a queue anomaly by ID

Requires ANY permissions:

* signals:queueAnomaly:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.AnomalyDetectionApi();

let anomalyId = "anomalyId_example"; // String | The ID of the queue anomaly
let opts = { 
  'customHeaders': {  // Object.<string, string> | Request Custom Headers
    'X-Service-Name': 'customer-service',
    'X-Request-ID': 'req-12345'
  }
};

apiInstance.getSignalsAnomalydetectionQueueAnomaly(anomalyId, opts)
  .then((data) => {
    console.log(`getSignalsAnomalydetectionQueueAnomaly success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getSignalsAnomalydetectionQueueAnomaly');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **anomalyId** | **String** | The ID of the queue anomaly |  |
 **customHeaders** | **Object.<string, string>** | Request Custom Headers | [optional] |

### Return type

**QueueAnomalyResponse**


## getSignalsAnomalydetectionQueuesAvailable

> AnomalyDetectionAvailableQueueListing getSignalsAnomalydetectionQueuesAvailable(opts)


GET /api/v2/signals/anomalydetection/queues/available

Get queues available for anomaly detection monitoring

Requires ANY permissions:

* signals:anomalyDetectionAvailableQueues:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.AnomalyDetectionApi();

let opts = { 
  'pageNumber': 1, // Number | Page number
  'pageSize': 50, // Number | Page size. Max is 1000.
  'customHeaders': {  // Object.<string, string> | Request Custom Headers
    'X-Service-Name': 'customer-service',
    'X-Request-ID': 'req-12345'
  }
};

apiInstance.getSignalsAnomalydetectionQueuesAvailable(opts)
  .then((data) => {
    console.log(`getSignalsAnomalydetectionQueuesAvailable success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getSignalsAnomalydetectionQueuesAvailable');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **pageNumber** | **Number** | Page number | [optional] [default to 1] |
 **pageSize** | **Number** | Page size. Max is 1000. | [optional] [default to 50] |
 **customHeaders** | **Object.<string, string>** | Request Custom Headers | [optional] |

### Return type

**AnomalyDetectionAvailableQueueListing**


## getSignalsAnomalydetectionQueuesMonitored

> AnomalyDetectionMonitoredQueueListing getSignalsAnomalydetectionQueuesMonitored(opts)


GET /api/v2/signals/anomalydetection/queues/monitored

Get the list of queues currently enabled for anomaly detection monitoring

Requires ANY permissions:

* signals:anomalyDetectionMonitoredQueues:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.AnomalyDetectionApi();
let opts = { 
  'customHeaders': {  // Object.<string, string> | Request Custom Headers
    'X-Service-Name': 'customer-service',
    'X-Request-ID': 'req-12345'
  }
};

apiInstance.getSignalsAnomalydetectionQueuesMonitored(opts)
  .then((data) => {
    console.log(`getSignalsAnomalydetectionQueuesMonitored success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getSignalsAnomalydetectionQueuesMonitored');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **customHeaders** | **Object.<string, string>** | Request Custom Headers | [optional] |

### Return type

**AnomalyDetectionMonitoredQueueListing**


## getSignalsAnomalydetectionSettings

> AnomalyDetectionSettingsResponse getSignalsAnomalydetectionSettings(opts)


GET /api/v2/signals/anomalydetection/settings

Get organization specific anomaly settings

Requires ANY permissions:

* signals:anomalyDetectionSettings:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.AnomalyDetectionApi();
let opts = { 
  'customHeaders': {  // Object.<string, string> | Request Custom Headers
    'X-Service-Name': 'customer-service',
    'X-Request-ID': 'req-12345'
  }
};

apiInstance.getSignalsAnomalydetectionSettings(opts)
  .then((data) => {
    console.log(`getSignalsAnomalydetectionSettings success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getSignalsAnomalydetectionSettings');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **customHeaders** | **Object.<string, string>** | Request Custom Headers | [optional] |

### Return type

**AnomalyDetectionSettingsResponse**


## patchSignalsAnomalydetectionQueueAnomaly

> QueueAnomalyResponse patchSignalsAnomalydetectionQueueAnomaly(anomalyId, body, opts)


PATCH /api/v2/signals/anomalydetection/queue/anomalies/{anomalyId}

Update a queue anomaly by ID

Requires ANY permissions:

* signals:queueAnomaly:edit

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.AnomalyDetectionApi();

let anomalyId = "anomalyId_example"; // String | The ID of the queue anomaly
let body = {}; // Object | body
let opts = { 
  'customHeaders': {  // Object.<string, string> | Request Custom Headers
    'X-Service-Name': 'customer-service',
    'X-Request-ID': 'req-12345'
  }
};

apiInstance.patchSignalsAnomalydetectionQueueAnomaly(anomalyId, body, opts)
  .then((data) => {
    console.log(`patchSignalsAnomalydetectionQueueAnomaly success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling patchSignalsAnomalydetectionQueueAnomaly');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **anomalyId** | **String** | The ID of the queue anomaly |  |
 **body** | **Object** | body |  |
 **customHeaders** | **Object.<string, string>** | Request Custom Headers | [optional] |

### Return type

**QueueAnomalyResponse**


## patchSignalsAnomalydetectionQueuesMonitored

> AnomalyDetectionMonitoredQueueListing patchSignalsAnomalydetectionQueuesMonitored(body, opts)


PATCH /api/v2/signals/anomalydetection/queues/monitored

Add or remove queues from anomaly detection monitoring

Requires ANY permissions:

* signals:anomalyDetectionMonitoredQueues:edit

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.AnomalyDetectionApi();

let body = {}; // Object | body
let opts = { 
  'customHeaders': {  // Object.<string, string> | Request Custom Headers
    'X-Service-Name': 'customer-service',
    'X-Request-ID': 'req-12345'
  }
};

apiInstance.patchSignalsAnomalydetectionQueuesMonitored(body, opts)
  .then((data) => {
    console.log(`patchSignalsAnomalydetectionQueuesMonitored success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling patchSignalsAnomalydetectionQueuesMonitored');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **body** | **Object** | body |  |
 **customHeaders** | **Object.<string, string>** | Request Custom Headers | [optional] |

### Return type

**AnomalyDetectionMonitoredQueueListing**


## postSignalsAnomalydetectionQueueAnomaliesExportsJobs

> QueueAnomalyExportJob postSignalsAnomalydetectionQueueAnomaliesExportsJobs(body, opts)


POST /api/v2/signals/anomalydetection/queue/anomalies/exports/jobs

Create a queue anomaly export job

Requires ANY permissions:

* signals:queueAnomalyExportJob:add

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.AnomalyDetectionApi();

let body = {}; // Object | body
let opts = { 
  'customHeaders': {  // Object.<string, string> | Request Custom Headers
    'X-Service-Name': 'customer-service',
    'X-Request-ID': 'req-12345'
  }
};

apiInstance.postSignalsAnomalydetectionQueueAnomaliesExportsJobs(body, opts)
  .then((data) => {
    console.log(`postSignalsAnomalydetectionQueueAnomaliesExportsJobs success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling postSignalsAnomalydetectionQueueAnomaliesExportsJobs');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **body** | **Object** | body |  |
 **customHeaders** | **Object.<string, string>** | Request Custom Headers | [optional] |

### Return type

**QueueAnomalyExportJob**


## postSignalsAnomalydetectionQueueAnomaliesQuery

> QueueAnomalyQueryListing postSignalsAnomalydetectionQueueAnomaliesQuery(body, opts)


POST /api/v2/signals/anomalydetection/queue/anomalies/query

Query for queue anomalies

Requires ANY permissions:

* signals:queueAnomalyQuery:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.AnomalyDetectionApi();

let body = {}; // Object | body
let opts = { 
  'customHeaders': {  // Object.<string, string> | Request Custom Headers
    'X-Service-Name': 'customer-service',
    'X-Request-ID': 'req-12345'
  }
};

apiInstance.postSignalsAnomalydetectionQueueAnomaliesQuery(body, opts)
  .then((data) => {
    console.log(`postSignalsAnomalydetectionQueueAnomaliesQuery success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling postSignalsAnomalydetectionQueueAnomaliesQuery');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **body** | **Object** | body |  |
 **customHeaders** | **Object.<string, string>** | Request Custom Headers | [optional] |

### Return type

**QueueAnomalyQueryListing**


## postSignalsAnomalydetectionQueueAnomaliesSummary

> AnomalySummaryResponse postSignalsAnomalydetectionQueueAnomaliesSummary(body, opts)


POST /api/v2/signals/anomalydetection/queue/anomalies/summary

Get summary of queue anomalies

Requires ANY permissions:

* signals:queueAnomalySummary:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.AnomalyDetectionApi();

let body = {}; // Object | body
let opts = { 
  'customHeaders': {  // Object.<string, string> | Request Custom Headers
    'X-Service-Name': 'customer-service',
    'X-Request-ID': 'req-12345'
  }
};

apiInstance.postSignalsAnomalydetectionQueueAnomaliesSummary(body, opts)
  .then((data) => {
    console.log(`postSignalsAnomalydetectionQueueAnomaliesSummary success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling postSignalsAnomalydetectionQueueAnomaliesSummary');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **body** | **Object** | body |  |
 **customHeaders** | **Object.<string, string>** | Request Custom Headers | [optional] |

### Return type

**AnomalySummaryResponse**


## putSignalsAnomalydetectionSettings

> AnomalyDetectionSettingsResponse putSignalsAnomalydetectionSettings(body, opts)


PUT /api/v2/signals/anomalydetection/settings

Update organization specific anomaly settings

Requires ANY permissions:

* signals:anomalyDetectionSettings:edit

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.AnomalyDetectionApi();

let body = {}; // Object | body
let opts = { 
  'customHeaders': {  // Object.<string, string> | Request Custom Headers
    'X-Service-Name': 'customer-service',
    'X-Request-ID': 'req-12345'
  }
};

apiInstance.putSignalsAnomalydetectionSettings(body, opts)
  .then((data) => {
    console.log(`putSignalsAnomalydetectionSettings success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling putSignalsAnomalydetectionSettings');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **body** | **Object** | body |  |
 **customHeaders** | **Object.<string, string>** | Request Custom Headers | [optional] |

### Return type

**AnomalyDetectionSettingsResponse**


_purecloud-platform-client-v2@267.1.0_
