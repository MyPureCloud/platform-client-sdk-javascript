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

# null deleteNotificationsChannelSubscriptions(channelId)

DELETE /api/v2/notifications/channels/{channelId}/subscriptions

Remove all subscriptions



### Example

~~~ javascript
const platformClient = require('purecloud-platform-client-v2');

// Configure OAuth2 access token for authorization: PureCloud Auth
platformClient.ApiClient.instance.authentications['PureCloud Auth'].accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new platformClient.NotificationsApi();

var channelId = "channelId_example"; // String | Channel ID

apiInstance.deleteNotificationsChannelSubscriptions(channelId)
  .then(function() {
    console.log('deleteNotificationsChannelSubscriptions returned successfully.');
  })
  .catch(function(error) {
  	console.log('There was a failure calling deleteNotificationsChannelSubscriptions');
    console.error(error);
  });

~~~

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **channelId** | **String**| Channel ID |  |
{: class="table table-striped"}

### Return type

null (empty response body)

<a name="getNotificationsAvailabletopics"></a>

# [**AvailableTopicEntityListing**](AvailableTopicEntityListing.html) getNotificationsAvailabletopics(opts)

GET /api/v2/notifications/availabletopics

Get available notification topics.



### Example

~~~ javascript
const platformClient = require('purecloud-platform-client-v2');

// Configure OAuth2 access token for authorization: PureCloud Auth
platformClient.ApiClient.instance.authentications['PureCloud Auth'].accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new platformClient.NotificationsApi();

var opts = { 
  'expand': ["expand_example"] // [String] | Which fields, if any, to expand
};
apiInstance.getNotificationsAvailabletopics(opts)
  .then(function(data) {
    console.log(`getNotificationsAvailabletopics success! data: ${data}`);
  })
  .catch(function(error) {
  	console.log('There was a failure calling getNotificationsAvailabletopics');
    console.error(error);
  });

~~~

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **expand** | [**[String]**](String.html)| Which fields, if any, to expand | [optional] <br />**Values**: description, requiresPermissions, schema |
{: class="table table-striped"}

### Return type

[**AvailableTopicEntityListing**](AvailableTopicEntityListing.html)

<a name="getNotificationsChannelSubscriptions"></a>

# [**ChannelTopicEntityListing**](ChannelTopicEntityListing.html) getNotificationsChannelSubscriptions(channelId)

GET /api/v2/notifications/channels/{channelId}/subscriptions

The list of all subscriptions for this channel



### Example

~~~ javascript
const platformClient = require('purecloud-platform-client-v2');

// Configure OAuth2 access token for authorization: PureCloud Auth
platformClient.ApiClient.instance.authentications['PureCloud Auth'].accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new platformClient.NotificationsApi();

var channelId = "channelId_example"; // String | Channel ID

apiInstance.getNotificationsChannelSubscriptions(channelId)
  .then(function(data) {
    console.log(`getNotificationsChannelSubscriptions success! data: ${data}`);
  })
  .catch(function(error) {
  	console.log('There was a failure calling getNotificationsChannelSubscriptions');
    console.error(error);
  });

~~~

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **channelId** | **String**| Channel ID |  |
{: class="table table-striped"}

### Return type

[**ChannelTopicEntityListing**](ChannelTopicEntityListing.html)

<a name="getNotificationsChannels"></a>

# [**ChannelEntityListing**](ChannelEntityListing.html) getNotificationsChannels()

GET /api/v2/notifications/channels

The list of existing channels



### Example

~~~ javascript
const platformClient = require('purecloud-platform-client-v2');

// Configure OAuth2 access token for authorization: PureCloud Auth
platformClient.ApiClient.instance.authentications['PureCloud Auth'].accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new platformClient.NotificationsApi();
apiInstance.getNotificationsChannels()
  .then(function(data) {
    console.log(`getNotificationsChannels success! data: ${data}`);
  })
  .catch(function(error) {
  	console.log('There was a failure calling getNotificationsChannels');
    console.error(error);
  });

~~~

### Parameters

This endpoint does not need any parameter.
{: class="table table-striped"}

### Return type

[**ChannelEntityListing**](ChannelEntityListing.html)

<a name="postNotificationsChannelSubscriptions"></a>

# [**ChannelTopicEntityListing**](ChannelTopicEntityListing.html) postNotificationsChannelSubscriptions(channelId, body)

POST /api/v2/notifications/channels/{channelId}/subscriptions

Add a list of subscriptions to the existing list of subscriptions



### Example

~~~ javascript
const platformClient = require('purecloud-platform-client-v2');

// Configure OAuth2 access token for authorization: PureCloud Auth
platformClient.ApiClient.instance.authentications['PureCloud Auth'].accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new platformClient.NotificationsApi();

var channelId = "channelId_example"; // String | Channel ID

var body = [new platformClient.ChannelTopic()]; // [ChannelTopic] | Body

apiInstance.postNotificationsChannelSubscriptions(channelId, body)
  .then(function(data) {
    console.log(`postNotificationsChannelSubscriptions success! data: ${data}`);
  })
  .catch(function(error) {
  	console.log('There was a failure calling postNotificationsChannelSubscriptions');
    console.error(error);
  });

~~~

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **channelId** | **String**| Channel ID |  |
 **body** | [**[ChannelTopic]**](ChannelTopic.html)| Body |  |
{: class="table table-striped"}

### Return type

[**ChannelTopicEntityListing**](ChannelTopicEntityListing.html)

<a name="postNotificationsChannels"></a>

# [**Channel**](Channel.html) postNotificationsChannels()

POST /api/v2/notifications/channels

Create a new channel

There is a limit of 10 channels. Creating an 11th channel will remove the channel with oldest last used date.

### Example

~~~ javascript
const platformClient = require('purecloud-platform-client-v2');

// Configure OAuth2 access token for authorization: PureCloud Auth
platformClient.ApiClient.instance.authentications['PureCloud Auth'].accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new platformClient.NotificationsApi();
apiInstance.postNotificationsChannels()
  .then(function(data) {
    console.log(`postNotificationsChannels success! data: ${data}`);
  })
  .catch(function(error) {
  	console.log('There was a failure calling postNotificationsChannels');
    console.error(error);
  });

~~~

### Parameters

This endpoint does not need any parameter.
{: class="table table-striped"}

### Return type

[**Channel**](Channel.html)

<a name="putNotificationsChannelSubscriptions"></a>

# [**ChannelTopicEntityListing**](ChannelTopicEntityListing.html) putNotificationsChannelSubscriptions(channelId, body)

PUT /api/v2/notifications/channels/{channelId}/subscriptions

Replace the current list of subscriptions with a new list.



### Example

~~~ javascript
const platformClient = require('purecloud-platform-client-v2');

// Configure OAuth2 access token for authorization: PureCloud Auth
platformClient.ApiClient.instance.authentications['PureCloud Auth'].accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new platformClient.NotificationsApi();

var channelId = "channelId_example"; // String | Channel ID

var body = [new platformClient.ChannelTopic()]; // [ChannelTopic] | Body

apiInstance.putNotificationsChannelSubscriptions(channelId, body)
  .then(function(data) {
    console.log(`putNotificationsChannelSubscriptions success! data: ${data}`);
  })
  .catch(function(error) {
  	console.log('There was a failure calling putNotificationsChannelSubscriptions');
    console.error(error);
  });

~~~

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **channelId** | **String**| Channel ID |  |
 **body** | [**[ChannelTopic]**](ChannelTopic.html)| Body |  |
{: class="table table-striped"}

### Return type

[**ChannelTopicEntityListing**](ChannelTopicEntityListing.html)

