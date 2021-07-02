---
title: TextbotsApi
---
# platformClient.TextbotsApi

All URIs are relative to *https://api.mypurecloud.com*

| Method | HTTP request | Description |
| ------------- | ------------- | ------------- |
[**postTextbotsBotsExecute**](TextbotsApi.html#postTextbotsBotsExecute) | **POST** /api/v2/textbots/bots/execute | Send an intent to a bot to start a dialog/interact with it via text
{: class="table table-striped"}

<a name="postTextbotsBotsExecute"></a>

# PostTextResponse postTextbotsBotsExecute(postTextRequest)



POST /api/v2/textbots/bots/execute

Send an intent to a bot to start a dialog/interact with it via text

This will either start a bot with the given id or relay a communication to an existing bot session.

Requires ANY permissions: 

* textbots:session:execute

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.TextbotsApi();

let postTextRequest = {}; // Object | 

apiInstance.postTextbotsBotsExecute(postTextRequest)
  .then((data) => {
    console.log(`postTextbotsBotsExecute success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling postTextbotsBotsExecute');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **postTextRequest** | **Object** |  |  |
{: class="table table-striped"}

### Return type

**PostTextResponse**

