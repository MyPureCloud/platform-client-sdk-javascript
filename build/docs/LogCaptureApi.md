---
title: LogCaptureApi
---
# platformClient.LogCaptureApi

All URIs are relative to *https://api.mypurecloud.com*

| Method | HTTP request | Description |
| ------------- | ------------- | ------------- |
[**getDiagnosticsLogcaptureBrowserEntriesDownloadJob**](LogCaptureApi.html#getDiagnosticsLogcaptureBrowserEntriesDownloadJob) | **GET** /api/v2/diagnostics/logcapture/browser/entries/download/jobs/{jobId} | Gets status of async download execution
[**postDiagnosticsLogcaptureBrowserEntriesDownloadJobs**](LogCaptureApi.html#postDiagnosticsLogcaptureBrowserEntriesDownloadJobs) | **POST** /api/v2/diagnostics/logcapture/browser/entries/download/jobs | Creates an async download execution
{: class="table table-striped"}

<a name="getDiagnosticsLogcaptureBrowserEntriesDownloadJob"></a>

# LogCaptureDownloadExecutionResponse getDiagnosticsLogcaptureBrowserEntriesDownloadJob(jobId)


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

apiInstance.getDiagnosticsLogcaptureBrowserEntriesDownloadJob(jobId)
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
{: class="table table-striped"}

### Return type

**LogCaptureDownloadExecutionResponse**

<a name="postDiagnosticsLogcaptureBrowserEntriesDownloadJobs"></a>

# LogCaptureDownloadExecutionResponse postDiagnosticsLogcaptureBrowserEntriesDownloadJobs(opts)


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
  'body': {} // Object | 
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
{: class="table table-striped"}

### Return type

**LogCaptureDownloadExecutionResponse**

