---
title: WebMessagingApi
---
# platformClient.WebMessagingApi

All URIs are relative to *https://api.mypurecloud.com*

| Method | HTTP request | Description |
| ------------- | ------------- | ------------- |
[**getWebmessagingMessages**](WebMessagingApi.html#getWebmessagingMessages) | **GET** /api/v2/webmessaging/messages | Get the messages for a web messaging session.
{: class="table table-striped"}

<a name="getWebmessagingMessages"></a>

# WebMessagingMessageEntityList getWebmessagingMessages(opts)


GET /api/v2/webmessaging/messages

Get the messages for a web messaging session.

Requires NO permissions:

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

let apiInstance = new platformClient.WebMessagingApi();

let opts = { 
  'pageSize': 25, // Number | Page size
  'pageNumber': 1 // Number | Page number
};

apiInstance.getWebmessagingMessages(opts)
  .then((data) => {
    console.log(`getWebmessagingMessages success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getWebmessagingMessages');
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

**WebMessagingMessageEntityList**

