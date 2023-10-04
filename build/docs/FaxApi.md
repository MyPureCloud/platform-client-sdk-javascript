---
title: FaxApi
---
# platformClient.FaxApi

All URIs are relative to *https://api.mypurecloud.com*

| Method | HTTP request | Description |
| ------------- | ------------- | ------------- |
[**deleteFaxDocument**](FaxApi.html#deleteFaxDocument) | **DELETE** /api/v2/fax/documents/{documentId} | Delete a fax document.
[**getFaxDocument**](FaxApi.html#getFaxDocument) | **GET** /api/v2/fax/documents/{documentId} | Get a document.
[**getFaxDocumentContent**](FaxApi.html#getFaxDocumentContent) | **GET** /api/v2/fax/documents/{documentId}/content | Download a fax document.
[**getFaxDocuments**](FaxApi.html#getFaxDocuments) | **GET** /api/v2/fax/documents | Get a list of fax documents.
[**getFaxSummary**](FaxApi.html#getFaxSummary) | **GET** /api/v2/fax/summary | Get fax summary
[**putFaxDocument**](FaxApi.html#putFaxDocument) | **PUT** /api/v2/fax/documents/{documentId} | Update a fax document.
{: class="table table-striped"}

<a name="deleteFaxDocument"></a>

# void deleteFaxDocument(documentId)


DELETE /api/v2/fax/documents/{documentId}

Delete a fax document.

Requires NO permissions:

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.FaxApi();

let documentId = "documentId_example"; // String | Document ID

apiInstance.deleteFaxDocument(documentId)
  .then(() => {
    console.log('deleteFaxDocument returned successfully.');
  })
  .catch((err) => {
    console.log('There was a failure calling deleteFaxDocument');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **documentId** | **String** | Document ID |  |
{: class="table table-striped"}

### Return type

void (no response body)

<a name="getFaxDocument"></a>

# FaxDocument getFaxDocument(documentId)


GET /api/v2/fax/documents/{documentId}

Get a document.

Requires NO permissions:

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.FaxApi();

let documentId = "documentId_example"; // String | Document ID

apiInstance.getFaxDocument(documentId)
  .then((data) => {
    console.log(`getFaxDocument success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getFaxDocument');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **documentId** | **String** | Document ID |  |
{: class="table table-striped"}

### Return type

**FaxDocument**

<a name="getFaxDocumentContent"></a>

# DownloadResponse getFaxDocumentContent(documentId)


GET /api/v2/fax/documents/{documentId}/content

Download a fax document.

Requires NO permissions:

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.FaxApi();

let documentId = "documentId_example"; // String | Document ID

apiInstance.getFaxDocumentContent(documentId)
  .then((data) => {
    console.log(`getFaxDocumentContent success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getFaxDocumentContent');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **documentId** | **String** | Document ID |  |
{: class="table table-striped"}

### Return type

**DownloadResponse**

<a name="getFaxDocuments"></a>

# FaxDocumentEntityListing getFaxDocuments(opts)


GET /api/v2/fax/documents

Get a list of fax documents.

Requires NO permissions:

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.FaxApi();

let opts = { 
  'pageSize': 25, // Number | Page size
  'pageNumber': 1 // Number | Page number
};

apiInstance.getFaxDocuments(opts)
  .then((data) => {
    console.log(`getFaxDocuments success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getFaxDocuments');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **pageSize** | **Number** | Page size | [optional] [default to 25] |
 **pageNumber** | **Number** | Page number | [optional] [default to 1] |
{: class="table table-striped"}

### Return type

**FaxDocumentEntityListing**

<a name="getFaxSummary"></a>

# FaxSummary getFaxSummary()


GET /api/v2/fax/summary

Get fax summary

Requires NO permissions:

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.FaxApi();

apiInstance.getFaxSummary()
  .then((data) => {
    console.log(`getFaxSummary success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getFaxSummary');
    console.error(err);
  });
```

### Parameters

This endpoint does not need any parameter.


### Return type

**FaxSummary**

<a name="putFaxDocument"></a>

# FaxDocument putFaxDocument(documentId, body)


PUT /api/v2/fax/documents/{documentId}

Update a fax document.

Requires NO permissions:

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.FaxApi();

let documentId = "documentId_example"; // String | Document ID
let body = {}; // Object | Document

apiInstance.putFaxDocument(documentId, body)
  .then((data) => {
    console.log(`putFaxDocument success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling putFaxDocument');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **documentId** | **String** | Document ID |  |
 **body** | **Object** | Document |  |
{: class="table table-striped"}

### Return type

**FaxDocument**

