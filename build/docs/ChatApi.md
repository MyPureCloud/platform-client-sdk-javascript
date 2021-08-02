---
title: ChatApi
---
# platformClient.ChatApi

All URIs are relative to *https://api.mypurecloud.com*

| Method | HTTP request | Description |
| ------------- | ------------- | ------------- |
[**getChatSettings**](ChatApi.html#getChatSettings) | **GET** /api/v2/chat/settings | Get Chat Settings.
[**patchChatSettings**](ChatApi.html#patchChatSettings) | **PATCH** /api/v2/chat/settings | Patch Chat Settings.
[**putChatSettings**](ChatApi.html#putChatSettings) | **PUT** /api/v2/chat/settings | Update Chat Settings.
{: class="table table-striped"}

<a name="getChatSettings"></a>

# ChatSettings getChatSettings()



GET /api/v2/chat/settings

Get Chat Settings.



Requires ANY permissions: 

* chat:setting:view
* chat:setting:edit

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.ChatApi();

apiInstance.getChatSettings()
  .then((data) => {
    console.log(`getChatSettings success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getChatSettings');
    console.error(err);
  });
```

### Parameters

This endpoint does not need any parameter.


### Return type

**ChatSettings**

<a name="patchChatSettings"></a>

# ChatSettings patchChatSettings(body)



PATCH /api/v2/chat/settings

Patch Chat Settings.



Requires ANY permissions: 

* chat:setting:edit

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.ChatApi();

let body = {}; // Object | Chat

apiInstance.patchChatSettings(body)
  .then((data) => {
    console.log(`patchChatSettings success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling patchChatSettings');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **body** | **Object** | Chat |  |
{: class="table table-striped"}

### Return type

**ChatSettings**

<a name="putChatSettings"></a>

# ChatSettings putChatSettings(body)



PUT /api/v2/chat/settings

Update Chat Settings.



Requires ANY permissions: 

* chat:setting:edit

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.ChatApi();

let body = {}; // Object | Chat

apiInstance.putChatSettings(body)
  .then((data) => {
    console.log(`putChatSettings success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling putChatSettings');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **body** | **Object** | Chat |  |
{: class="table table-striped"}

### Return type

**ChatSettings**

