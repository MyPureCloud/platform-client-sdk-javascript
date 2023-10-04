---
title: BadgesApi
---
# platformClient.BadgesApi

All URIs are relative to *https://api.inindca.com*

| Method | HTTP request | Description |
| ------------- | ------------- | ------------- |
[**deleteBadgesChat**](BadgesApi.html#deleteBadgesChat) | **DELETE** /api/v2/badges/chats/{jabberId} | Clear the unread chat notification badge count from a user
[**getBadgesChats**](BadgesApi.html#getBadgesChats) | **GET** /api/v2/badges/chats | Get unread chat notification badges
{: class="table table-striped"}

<a name="deleteBadgesChat"></a>

# void deleteBadgesChat(jabberId)


DELETE /api/v2/badges/chats/{jabberId}

Clear the unread chat notification badge count from a user

Requires NO permissions:

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.BadgesApi();

let jabberId = "jabberId_example"; // String | jabberId of the entity from which the unread message(s) originated

apiInstance.deleteBadgesChat(jabberId)
  .then(() => {
    console.log('deleteBadgesChat returned successfully.');
  })
  .catch((err) => {
    console.log('There was a failure calling deleteBadgesChat');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **jabberId** | **String** | jabberId of the entity from which the unread message(s) originated |  |
{: class="table table-striped"}

### Return type

void (no response body)

<a name="getBadgesChats"></a>

# ChatBadgeEntityListing getBadgesChats(opts)


GET /api/v2/badges/chats

Get unread chat notification badges

Requires NO permissions:

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.BadgesApi();

let opts = { 
  'pageSize': 25, // Number | Page size
  'pageNumber': 1 // Number | Page number
};

apiInstance.getBadgesChats(opts)
  .then((data) => {
    console.log(`getBadgesChats success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getBadgesChats');
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

**ChatBadgeEntityListing**

