# NotificationsApi

# platformClient.NotificationsApi

All URIs are relative to *https://api.mypurecloud.com*

| Method | HTTP request | Description |
| ------------- | ------------- | ------------- |
[**deleteNotificationsChannelSubscriptions**](NotificationsApi#deleteNotificationsChannelSubscriptions) | **DELETE** /api/v2/notifications/channels/{channelId}/subscriptions | Remove all subscriptions
[**getNotificationsAvailabletopics**](NotificationsApi#getNotificationsAvailabletopics) | **GET** /api/v2/notifications/availabletopics | Get available notification topics.
[**getNotificationsChannelSubscriptions**](NotificationsApi#getNotificationsChannelSubscriptions) | **GET** /api/v2/notifications/channels/{channelId}/subscriptions | The list of all subscriptions for this channel
[**getNotificationsChannels**](NotificationsApi#getNotificationsChannels) | **GET** /api/v2/notifications/channels | The list of existing channels
[**headNotificationsChannel**](NotificationsApi#headNotificationsChannel) | **HEAD** /api/v2/notifications/channels/{channelId} | Verify a channel still exists and is valid
[**postNotificationsChannelSubscriptions**](NotificationsApi#postNotificationsChannelSubscriptions) | **POST** /api/v2/notifications/channels/{channelId}/subscriptions | Add a list of subscriptions to the existing list of subscriptions
[**postNotificationsChannels**](NotificationsApi#postNotificationsChannels) | **POST** /api/v2/notifications/channels | Create a new channel
[**putNotificationsChannelSubscriptions**](NotificationsApi#putNotificationsChannelSubscriptions) | **PUT** /api/v2/notifications/channels/{channelId}/subscriptions | Replace the current list of subscriptions with a new list.



## deleteNotificationsChannelSubscriptions

> void deleteNotificationsChannelSubscriptions(channelId)


DELETE /api/v2/notifications/channels/{channelId}/subscriptions

Remove all subscriptions

Requires NO permissions:

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.NotificationsApi();

let channelId = "channelId_example"; // String | Channel ID

apiInstance.deleteNotificationsChannelSubscriptions(channelId)
  .then(() => {
    console.log('deleteNotificationsChannelSubscriptions returned successfully.');
  })
  .catch((err) => {
    console.log('There was a failure calling deleteNotificationsChannelSubscriptions');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **channelId** | **String** | Channel ID |  |

### Return type

void (no response body)


## getNotificationsAvailabletopics

> AvailableTopicEntityListing getNotificationsAvailabletopics(opts)


GET /api/v2/notifications/availabletopics

Get available notification topics.

Requires NO permissions:

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.NotificationsApi();

let opts = { 
  'expand': ["expand_example"], // [String] | Which fields, if any, to expand
  'includePreview': true // Boolean | Whether or not to include Preview topics
};

apiInstance.getNotificationsAvailabletopics(opts)
  .then((data) => {
    console.log(`getNotificationsAvailabletopics success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getNotificationsAvailabletopics');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **expand** | **[String]** | Which fields, if any, to expand | [optional] <br />**Values**: description, enforced, schema, visibility, transports, publicApiTemplateUriPaths, requiresPermissions, permissionDetails, topicParameters |
 **includePreview** | **Boolean** | Whether or not to include Preview topics | [optional] [default to true] |

### Return type

**AvailableTopicEntityListing**


## getNotificationsChannelSubscriptions

> ChannelTopicEntityListing getNotificationsChannelSubscriptions(channelId)


GET /api/v2/notifications/channels/{channelId}/subscriptions

The list of all subscriptions for this channel

Requires NO permissions:

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.NotificationsApi();

let channelId = "channelId_example"; // String | Channel ID

apiInstance.getNotificationsChannelSubscriptions(channelId)
  .then((data) => {
    console.log(`getNotificationsChannelSubscriptions success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getNotificationsChannelSubscriptions');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **channelId** | **String** | Channel ID |  |

### Return type

**ChannelTopicEntityListing**


## getNotificationsChannels

> ChannelEntityListing getNotificationsChannels(opts)


GET /api/v2/notifications/channels

The list of existing channels

Requires NO permissions:

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.NotificationsApi();

let opts = { 
  'includechannels': "token" // String | Show user's channels for this specific token or across all tokens for this user and app.  Channel Ids for other access tokens will not be shown, but will be presented to show their existence.
};

apiInstance.getNotificationsChannels(opts)
  .then((data) => {
    console.log(`getNotificationsChannels success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getNotificationsChannels');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **includechannels** | **String** | Show user's channels for this specific token or across all tokens for this user and app.  Channel Ids for other access tokens will not be shown, but will be presented to show their existence. | [optional] [default to token]<br />**Values**: token, oauthclient |

### Return type

**ChannelEntityListing**


## headNotificationsChannel

> void headNotificationsChannel(channelId)


HEAD /api/v2/notifications/channels/{channelId}

Verify a channel still exists and is valid

Returns a 200 OK if channel exists, and a 404 Not Found if it doesnt

Requires NO permissions:

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.NotificationsApi();

let channelId = "channelId_example"; // String | Channel ID

apiInstance.headNotificationsChannel(channelId)
  .then(() => {
    console.log('headNotificationsChannel returned successfully.');
  })
  .catch((err) => {
    console.log('There was a failure calling headNotificationsChannel');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **channelId** | **String** | Channel ID |  |

### Return type

void (no response body)


## postNotificationsChannelSubscriptions

> ChannelTopicEntityListing postNotificationsChannelSubscriptions(channelId, body, opts)


POST /api/v2/notifications/channels/{channelId}/subscriptions

Add a list of subscriptions to the existing list of subscriptions

Requires NO permissions:

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.NotificationsApi();

let channelId = "channelId_example"; // String | Channel ID
let body = [{}]; // Object | Body
let opts = { 
  'ignoreErrors': false // Boolean | Optionally prevent throwing of errors for failed permissions checks.
};

apiInstance.postNotificationsChannelSubscriptions(channelId, body, opts)
  .then((data) => {
    console.log(`postNotificationsChannelSubscriptions success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling postNotificationsChannelSubscriptions');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **channelId** | **String** | Channel ID |  |
 **body** | **Object** | Body |  |
 **ignoreErrors** | **Boolean** | Optionally prevent throwing of errors for failed permissions checks. | [optional] [default to false] |

### Return type

**ChannelTopicEntityListing**


## postNotificationsChannels

> Channel postNotificationsChannels()


POST /api/v2/notifications/channels

Create a new channel

There is a limit of 20 channels per user/app combination. Creating a 21st channel will remove the channel with oldest last used date. Channels without an active connection will be removed first.

Requires NO permissions:

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.NotificationsApi();

apiInstance.postNotificationsChannels()
  .then((data) => {
    console.log(`postNotificationsChannels success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling postNotificationsChannels');
    console.error(err);
  });
```

### Parameters

This endpoint does not need any parameter.

### Return type

**Channel**


## putNotificationsChannelSubscriptions

> ChannelTopicEntityListing putNotificationsChannelSubscriptions(channelId, body, opts)


PUT /api/v2/notifications/channels/{channelId}/subscriptions

Replace the current list of subscriptions with a new list.

Requires NO permissions:

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.NotificationsApi();

let channelId = "channelId_example"; // String | Channel ID
let body = [{}]; // Object | Body
let opts = { 
  'ignoreErrors': false // Boolean | Optionally prevent throwing of errors for failed permissions checks.
};

apiInstance.putNotificationsChannelSubscriptions(channelId, body, opts)
  .then((data) => {
    console.log(`putNotificationsChannelSubscriptions success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling putNotificationsChannelSubscriptions');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **channelId** | **String** | Channel ID |  |
 **body** | **Object** | Body |  |
 **ignoreErrors** | **Boolean** | Optionally prevent throwing of errors for failed permissions checks. | [optional] [default to false] |

### Return type

**ChannelTopicEntityListing**


_purecloud-platform-client-v2@229.1.0_
