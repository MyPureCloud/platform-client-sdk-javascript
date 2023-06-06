---
title: MessagingApi
---
# platformClient.MessagingApi

All URIs are relative to *https://api.mypurecloud.com*

| Method | HTTP request | Description |
| ------------- | ------------- | ------------- |
[**deleteMessagingSupportedcontentSupportedContentId**](MessagingApi.html#deleteMessagingSupportedcontentSupportedContentId) | **DELETE** /api/v2/messaging/supportedcontent/{supportedContentId} | Delete a supported content profile
[**getMessagingSupportedcontent**](MessagingApi.html#getMessagingSupportedcontent) | **GET** /api/v2/messaging/supportedcontent | Get a list of Supported Content profiles
[**getMessagingSupportedcontentSupportedContentId**](MessagingApi.html#getMessagingSupportedcontentSupportedContentId) | **GET** /api/v2/messaging/supportedcontent/{supportedContentId} | Get a supported content profile
[**patchMessagingSupportedcontentSupportedContentId**](MessagingApi.html#patchMessagingSupportedcontentSupportedContentId) | **PATCH** /api/v2/messaging/supportedcontent/{supportedContentId} | Update a supported content profile
[**postMessagingSupportedcontent**](MessagingApi.html#postMessagingSupportedcontent) | **POST** /api/v2/messaging/supportedcontent | Create a Supported Content profile
{: class="table table-striped"}

<a name="deleteMessagingSupportedcontentSupportedContentId"></a>

# void deleteMessagingSupportedcontentSupportedContentId(supportedContentId)

<span style="background-color: #f0ad4e;display: inline-block;padding: 7px;font-weight: bold;line-height: 1;color: #ffffff;text-align: center;white-space: nowrap;vertical-align: baseline;border-radius: .25em;margin: 10px 0;">DEPRECATED</span>

DELETE /api/v2/messaging/supportedcontent/{supportedContentId}

Delete a supported content profile

Deprecated - use DELETE /api/v2/conversations/messaging/supportedcontent/{supportedContentId} as replacement

Requires ALL permissions:

* messaging:supportedContent:delete

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.MessagingApi();

let supportedContentId = "supportedContentId_example"; // String | Supported Content ID

apiInstance.deleteMessagingSupportedcontentSupportedContentId(supportedContentId)
  .then(() => {
    console.log('deleteMessagingSupportedcontentSupportedContentId returned successfully.');
  })
  .catch((err) => {
    console.log('There was a failure calling deleteMessagingSupportedcontentSupportedContentId');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **supportedContentId** | **String** | Supported Content ID |  |
{: class="table table-striped"}

### Return type

void (no response body)

<a name="getMessagingSupportedcontent"></a>

# SupportedContentListing getMessagingSupportedcontent(opts)

<span style="background-color: #f0ad4e;display: inline-block;padding: 7px;font-weight: bold;line-height: 1;color: #ffffff;text-align: center;white-space: nowrap;vertical-align: baseline;border-radius: .25em;margin: 10px 0;">DEPRECATED</span>

GET /api/v2/messaging/supportedcontent

Get a list of Supported Content profiles

Deprecated - use GET /api/v2/conversations/messaging/supportedcontent as replacement

Requires ALL permissions:

* messaging:supportedContent:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.MessagingApi();

let opts = { 
  'pageSize': 25, // Number | Page size
  'pageNumber': 1 // Number | Page number
};

apiInstance.getMessagingSupportedcontent(opts)
  .then((data) => {
    console.log(`getMessagingSupportedcontent success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getMessagingSupportedcontent');
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

**SupportedContentListing**

<a name="getMessagingSupportedcontentSupportedContentId"></a>

# SupportedContent getMessagingSupportedcontentSupportedContentId(supportedContentId)

<span style="background-color: #f0ad4e;display: inline-block;padding: 7px;font-weight: bold;line-height: 1;color: #ffffff;text-align: center;white-space: nowrap;vertical-align: baseline;border-radius: .25em;margin: 10px 0;">DEPRECATED</span>

GET /api/v2/messaging/supportedcontent/{supportedContentId}

Get a supported content profile

Deprecated - use GET /api/v2/conversations/messaging/supportedcontent/{supportedContentId} as replacement

Requires ALL permissions:

* messaging:supportedContent:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.MessagingApi();

let supportedContentId = "supportedContentId_example"; // String | Supported Content ID

apiInstance.getMessagingSupportedcontentSupportedContentId(supportedContentId)
  .then((data) => {
    console.log(`getMessagingSupportedcontentSupportedContentId success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getMessagingSupportedcontentSupportedContentId');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **supportedContentId** | **String** | Supported Content ID |  |
{: class="table table-striped"}

### Return type

**SupportedContent**

<a name="patchMessagingSupportedcontentSupportedContentId"></a>

# SupportedContent patchMessagingSupportedcontentSupportedContentId(supportedContentId, body)

<span style="background-color: #f0ad4e;display: inline-block;padding: 7px;font-weight: bold;line-height: 1;color: #ffffff;text-align: center;white-space: nowrap;vertical-align: baseline;border-radius: .25em;margin: 10px 0;">DEPRECATED</span>

PATCH /api/v2/messaging/supportedcontent/{supportedContentId}

Update a supported content profile

Deprecated - use PATCH /api/v2/conversations/messaging/supportedcontent/{supportedContentId} as replacement

Requires ALL permissions:

* messaging:supportedContent:edit

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.MessagingApi();

let supportedContentId = "supportedContentId_example"; // String | Supported Content ID
let body = {}; // Object | SupportedContent

apiInstance.patchMessagingSupportedcontentSupportedContentId(supportedContentId, body)
  .then((data) => {
    console.log(`patchMessagingSupportedcontentSupportedContentId success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling patchMessagingSupportedcontentSupportedContentId');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **supportedContentId** | **String** | Supported Content ID |  |
 **body** | **Object** | SupportedContent |  |
{: class="table table-striped"}

### Return type

**SupportedContent**

<a name="postMessagingSupportedcontent"></a>

# SupportedContent postMessagingSupportedcontent(body)

<span style="background-color: #f0ad4e;display: inline-block;padding: 7px;font-weight: bold;line-height: 1;color: #ffffff;text-align: center;white-space: nowrap;vertical-align: baseline;border-radius: .25em;margin: 10px 0;">DEPRECATED</span>

POST /api/v2/messaging/supportedcontent

Create a Supported Content profile

Deprecated - use POST /api/v2/conversations/messaging/supportedcontent as replacement

Requires ANY permissions:

* messaging:supportedContent:add

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.MessagingApi();

let body = {}; // Object | SupportedContent

apiInstance.postMessagingSupportedcontent(body)
  .then((data) => {
    console.log(`postMessagingSupportedcontent success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling postMessagingSupportedcontent');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **body** | **Object** | SupportedContent |  |
{: class="table table-striped"}

### Return type

**SupportedContent**

