---
title: UploadsApi
---
# platformClient.UploadsApi

All URIs are relative to *https://api.mypurecloud.com*

| Method | HTTP request | Description |
| ------------- | ------------- | ------------- |
[**postUploadsPublicassetsImages**](UploadsApi.html#postUploadsPublicassetsImages) | **POST** /api/v2/uploads/publicassets/images | Creates presigned url for uploading a public asset image
[**postUploadsRecordings**](UploadsApi.html#postUploadsRecordings) | **POST** /api/v2/uploads/recordings | Creates presigned url for uploading a recording file
[**postUploadsWorkforcemanagementHistoricaldataCsv**](UploadsApi.html#postUploadsWorkforcemanagementHistoricaldataCsv) | **POST** /api/v2/uploads/workforcemanagement/historicaldata/csv | Creates presigned url for uploading WFM historical data file. Requires data in csv format.
[**postUploadsWorkforcemanagementHistoricaldataJson**](UploadsApi.html#postUploadsWorkforcemanagementHistoricaldataJson) | **POST** /api/v2/uploads/workforcemanagement/historicaldata/json | Creates presigned url for uploading WFM historical data file. Requires data in json format.
{: class="table table-striped"}

<a name="postUploadsPublicassetsImages"></a>

# UploadUrlResponse postUploadsPublicassetsImages(body)



POST /api/v2/uploads/publicassets/images

Creates presigned url for uploading a public asset image



Requires ALL permissions: 

* uploads:publicasset:upload

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.UploadsApi();

let body = {}; // Object | query

apiInstance.postUploadsPublicassetsImages(body)
  .then((data) => {
    console.log(`postUploadsPublicassetsImages success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling postUploadsPublicassetsImages');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **body** | **Object** | query |  |
{: class="table table-striped"}

### Return type

**UploadUrlResponse**

<a name="postUploadsRecordings"></a>

# UploadUrlResponse postUploadsRecordings(body)



POST /api/v2/uploads/recordings

Creates presigned url for uploading a recording file



Requires ALL permissions: 

* recording:recording:upload

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.UploadsApi();

let body = {}; // Object | query

apiInstance.postUploadsRecordings(body)
  .then((data) => {
    console.log(`postUploadsRecordings success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling postUploadsRecordings');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **body** | **Object** | query |  |
{: class="table table-striped"}

### Return type

**UploadUrlResponse**

<a name="postUploadsWorkforcemanagementHistoricaldataCsv"></a>

# UploadUrlResponse postUploadsWorkforcemanagementHistoricaldataCsv(body)



POST /api/v2/uploads/workforcemanagement/historicaldata/csv

Creates presigned url for uploading WFM historical data file. Requires data in csv format.



Requires ALL permissions: 

* wfm:historicalData:upload

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.UploadsApi();

let body = {}; // Object | query

apiInstance.postUploadsWorkforcemanagementHistoricaldataCsv(body)
  .then((data) => {
    console.log(`postUploadsWorkforcemanagementHistoricaldataCsv success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling postUploadsWorkforcemanagementHistoricaldataCsv');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **body** | **Object** | query |  |
{: class="table table-striped"}

### Return type

**UploadUrlResponse**

<a name="postUploadsWorkforcemanagementHistoricaldataJson"></a>

# UploadUrlResponse postUploadsWorkforcemanagementHistoricaldataJson(body)



POST /api/v2/uploads/workforcemanagement/historicaldata/json

Creates presigned url for uploading WFM historical data file. Requires data in json format.



Requires ALL permissions: 

* wfm:historicalData:upload

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.UploadsApi();

let body = {}; // Object | query

apiInstance.postUploadsWorkforcemanagementHistoricaldataJson(body)
  .then((data) => {
    console.log(`postUploadsWorkforcemanagementHistoricaldataJson success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling postUploadsWorkforcemanagementHistoricaldataJson');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **body** | **Object** | query |  |
{: class="table table-striped"}

### Return type

**UploadUrlResponse**

