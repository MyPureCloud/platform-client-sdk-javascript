---
title: ChatApi
---
# platformClient.ChatApi

All URIs are relative to *https://api.mypurecloud.com*

| Method | HTTP request | Description |
| ------------- | ------------- | ------------- |
[**getChatSettings**](ChatApi.html#getChatSettings) | **GET** /api/v2/chat/settings | Get Chat Settings.
[**getChatsSettings**](ChatApi.html#getChatsSettings) | **GET** /api/v2/chats/settings | Get Chat Settings.
[**patchChatSettings**](ChatApi.html#patchChatSettings) | **PATCH** /api/v2/chat/settings | Patch Chat Settings.
[**patchChatsSettings**](ChatApi.html#patchChatsSettings) | **PATCH** /api/v2/chats/settings | Patch Chat Settings.
[**putChatSettings**](ChatApi.html#putChatSettings) | **PUT** /api/v2/chat/settings | Update Chat Settings.
[**putChatsSettings**](ChatApi.html#putChatsSettings) | **PUT** /api/v2/chats/settings | Update Chat Settings.
{: class="table table-striped"}

<a name="getChatSettings"></a>

# ChatSettings getChatSettings()

<span style="background-color: #f0ad4e;display: inline-block;padding: 7px;font-weight: bold;line-height: 1;color: #ffffff;text-align: center;white-space: nowrap;vertical-align: baseline;border-radius: .25em;margin: 10px 0;">DEPRECATED</span>

GET /api/v2/chat/settings

Get Chat Settings.

This route is deprecated, please use /chats/settings instead

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

<a name="getChatsSettings"></a>

# ChatSettings getChatsSettings()


GET /api/v2/chats/settings

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

apiInstance.getChatsSettings()
  .then((data) => {
    console.log(`getChatsSettings success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getChatsSettings');
    console.error(err);
  });
```

### Parameters

This endpoint does not need any parameter.


### Return type

**ChatSettings**

<a name="patchChatSettings"></a>

# ChatSettings patchChatSettings(body)

<span style="background-color: #f0ad4e;display: inline-block;padding: 7px;font-weight: bold;line-height: 1;color: #ffffff;text-align: center;white-space: nowrap;vertical-align: baseline;border-radius: .25em;margin: 10px 0;">DEPRECATED</span>

PATCH /api/v2/chat/settings

Patch Chat Settings.

This route is deprecated, please use /chats/settings instead

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

<a name="patchChatsSettings"></a>

# ChatSettings patchChatsSettings(body)


PATCH /api/v2/chats/settings

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

apiInstance.patchChatsSettings(body)
  .then((data) => {
    console.log(`patchChatsSettings success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling patchChatsSettings');
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

<span style="background-color: #f0ad4e;display: inline-block;padding: 7px;font-weight: bold;line-height: 1;color: #ffffff;text-align: center;white-space: nowrap;vertical-align: baseline;border-radius: .25em;margin: 10px 0;">DEPRECATED</span>

PUT /api/v2/chat/settings

Update Chat Settings.

This route is deprecated, please use /chats/settings instead

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

<a name="putChatsSettings"></a>

# ChatSettings putChatsSettings(body)


PUT /api/v2/chats/settings

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

apiInstance.putChatsSettings(body)
  .then((data) => {
    console.log(`putChatsSettings success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling putChatsSettings');
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

