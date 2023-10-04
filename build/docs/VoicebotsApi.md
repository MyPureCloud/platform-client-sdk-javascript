---
title: VoicebotsApi
---
# platformClient.VoicebotsApi

All URIs are relative to *https://api.inindca.com*

| Method | HTTP request | Description |
| ------------- | ------------- | ------------- |
[**postVoicebotsBotConnection**](VoicebotsApi.html#postVoicebotsBotConnection) | **POST** /api/v2/voicebots/bot/connection | Creates connection information that can be used to invoke a voice bot.
{: class="table table-striped"}

<a name="postVoicebotsBotConnection"></a>

# VoicebotConnectionResponse postVoicebotsBotConnection(voicebotConnectionRequest)


POST /api/v2/voicebots/bot/connection

Creates connection information that can be used to invoke a voice bot.

Requires ANY permissions:

* voicebots:bot:connect

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.VoicebotsApi();

let voicebotConnectionRequest = {}; // Object | 

apiInstance.postVoicebotsBotConnection(voicebotConnectionRequest)
  .then((data) => {
    console.log(`postVoicebotsBotConnection success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling postVoicebotsBotConnection');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **voicebotConnectionRequest** | **Object** |  |  |
{: class="table table-striped"}

### Return type

**VoicebotConnectionResponse**

