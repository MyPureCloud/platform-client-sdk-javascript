---
title: NotificationsApi
---
# platformClient.NotificationsApi

All URIs are relative to *https://api.mypurecloud.com*

| Method | HTTP request | Description |
| ------------- | ------------- | ------------- |
[**deleteNotificationsChannelSubscriptions**](NotificationsApi.html#deleteNotificationsChannelSubscriptions) | **DELETE** /api/v2/notifications/channels/{channelId}/subscriptions | Remove all subscriptions
[**getNotificationsAvailabletopics**](NotificationsApi.html#getNotificationsAvailabletopics) | **GET** /api/v2/notifications/availabletopics | Get available notification topics.
[**getNotificationsChannelSubscriptions**](NotificationsApi.html#getNotificationsChannelSubscriptions) | **GET** /api/v2/notifications/channels/{channelId}/subscriptions | The list of all subscriptions for this channel
[**getNotificationsChannels**](NotificationsApi.html#getNotificationsChannels) | **GET** /api/v2/notifications/channels | The list of existing channels
[**postNotificationsChannelSubscriptions**](NotificationsApi.html#postNotificationsChannelSubscriptions) | **POST** /api/v2/notifications/channels/{channelId}/subscriptions | Add a list of subscriptions to the existing list of subscriptions
[**postNotificationsChannels**](NotificationsApi.html#postNotificationsChannels) | **POST** /api/v2/notifications/channels | Create a new channel
[**putNotificationsChannelSubscriptions**](NotificationsApi.html#putNotificationsChannelSubscriptions) | **PUT** /api/v2/notifications/channels/{channelId}/subscriptions | Replace the current list of subscriptions with a new list.
{: class="table table-striped"}

<a name="deleteNotificationsChannelSubscriptions"></a>

# void deleteNotificationsChannelSubscriptions(channelId)



DELETE /api/v2/notifications/channels/{channelId}/subscriptions

Remove all subscriptions



Requires NO permissions: 




### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
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
{: class="table table-striped"}

### Return type

void (no response body)

<a name="getNotificationsAvailabletopics"></a>

# AvailableTopicEntityListing getNotificationsAvailabletopics(opts)



GET /api/v2/notifications/availabletopics

Get available notification topics.



Requires NO permissions: 




### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.NotificationsApi();

let opts = { 
  'expand': ["expand_example"] // [String] | Which fields, if any, to expand
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
 **expand** | **[String]** | Which fields, if any, to expand | [optional] <br />**Values**: description, requiresPermissions, schema |
{: class="table table-striped"}

### Return type

**AvailableTopicEntityListing**

<a name="getNotificationsChannelSubscriptions"></a>

# ChannelTopicEntityListing getNotificationsChannelSubscriptions(channelId)



GET /api/v2/notifications/channels/{channelId}/subscriptions

The list of all subscriptions for this channel



Requires NO permissions: 




### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
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
{: class="table table-striped"}

### Return type

**ChannelTopicEntityListing**

<a name="getNotificationsChannels"></a>

# ChannelEntityListing getNotificationsChannels(opts)



GET /api/v2/notifications/channels

The list of existing channels



Requires NO permissions: 




### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
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
 **includechannels** | **String** | Show user&#39;s channels for this specific token or across all tokens for this user and app.  Channel Ids for other access tokens will not be shown, but will be presented to show their existence. | [optional] [default to token]<br />**Values**: token, oauthclient |
{: class="table table-striped"}

### Return type

**ChannelEntityListing**

<a name="postNotificationsChannelSubscriptions"></a>

# ChannelTopicEntityListing postNotificationsChannelSubscriptions(channelId, body)



POST /api/v2/notifications/channels/{channelId}/subscriptions

Add a list of subscriptions to the existing list of subscriptions



Requires NO permissions: 



### Request Body Schema

<script type="text/javascript">
	function copyChannelTopicExample() {
		let temp = $("<textarea>");
		$("body").append(temp);
		temp.val($('#ChannelTopicExample').text()).select();
		document.execCommand("copy");
		temp.remove();
		return false;
	}
</script>

ChannelTopic <a href="#" onclick="return copyChannelTopicExample()">Copy</a>

<div id="ChannelTopicExample">

```{"language":"json", "maxHeight": "250px"}
{ 
  "id": String, 
  "selfUri": String, 
}
```

</div>


### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.NotificationsApi();

let channelId = "channelId_example"; // String | Channel ID
let body = [{}]; // Object | Body

apiInstance.postNotificationsChannelSubscriptions(channelId, body)
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
{: class="table table-striped"}

### Return type

**ChannelTopicEntityListing**

<a name="postNotificationsChannels"></a>

# Channel postNotificationsChannels()



POST /api/v2/notifications/channels

Create a new channel

There is a limit of 5 channels per user/app combination. Creating a 6th channel will remove the channel with oldest last used date.

Requires NO permissions: 




### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
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
{: class="table table-striped"}

### Return type

**Channel**

<a name="putNotificationsChannelSubscriptions"></a>

# ChannelTopicEntityListing putNotificationsChannelSubscriptions(channelId, body)



PUT /api/v2/notifications/channels/{channelId}/subscriptions

Replace the current list of subscriptions with a new list.



Requires NO permissions: 



### Request Body Schema

<script type="text/javascript">
	function copyChannelTopicExample() {
		let temp = $("<textarea>");
		$("body").append(temp);
		temp.val($('#ChannelTopicExample').text()).select();
		document.execCommand("copy");
		temp.remove();
		return false;
	}
</script>

ChannelTopic <a href="#" onclick="return copyChannelTopicExample()">Copy</a>

<div id="ChannelTopicExample">

```{"language":"json", "maxHeight": "250px"}
{ 
  "id": String, 
  "selfUri": String, 
}
```

</div>


### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.NotificationsApi();

let channelId = "channelId_example"; // String | Channel ID
let body = [{}]; // Object | Body

apiInstance.putNotificationsChannelSubscriptions(channelId, body)
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
{: class="table table-striped"}

### Return type

**ChannelTopicEntityListing**

