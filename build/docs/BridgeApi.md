---
title: BridgeApi
---
# platformClient.BridgeApi

All URIs are relative to *https://api.inindca.com*

| Method | HTTP request | Description |
| ------------- | ------------- | ------------- |
[**getBridgeUseractionsCategories**](BridgeApi.html#getBridgeUseractionsCategories) | **GET** /api/v2/bridge/useractions/categories | Get user actions categories
[**getBridgeUseractionsMetadata**](BridgeApi.html#getBridgeUseractionsMetadata) | **GET** /api/v2/bridge/useractions/metadata | Get user actions metadata
[**getBridgeUseractionsMetadataActionName**](BridgeApi.html#getBridgeUseractionsMetadataActionName) | **GET** /api/v2/bridge/useractions/metadata/{actionName} | Get user action metadata
{: class="table table-striped"}

<a name="getBridgeUseractionsCategories"></a>

# UserActionCategoryEntityListing getBridgeUseractionsCategories(opts)


GET /api/v2/bridge/useractions/categories

Get user actions categories

Requires NO permissions:

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.BridgeApi();

let opts = { 
  'pageSize': 25, // Number | Page size
  'pageNumber': 1 // Number | Page number
};

apiInstance.getBridgeUseractionsCategories(opts)
  .then((data) => {
    console.log(`getBridgeUseractionsCategories success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getBridgeUseractionsCategories');
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

**UserActionCategoryEntityListing**

<a name="getBridgeUseractionsMetadata"></a>

# UserActionMetadataEntityListing getBridgeUseractionsMetadata(opts)


GET /api/v2/bridge/useractions/metadata

Get user actions metadata

Requires NO permissions:

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.BridgeApi();

let opts = { 
  'pageSize': 25, // Number | Page size
  'pageNumber': 1, // Number | Page number
  'sortBy': "name", // String | Sort by
  'sortOrder': "ascending", // String | Sort order
  'expand': "expand_example" // String | requests.inputSchema,requests.successSchema
};

apiInstance.getBridgeUseractionsMetadata(opts)
  .then((data) => {
    console.log(`getBridgeUseractionsMetadata success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getBridgeUseractionsMetadata');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **pageSize** | **Number** | Page size | [optional] [default to 25] |
 **pageNumber** | **Number** | Page number | [optional] [default to 1] |
 **sortBy** | **String** | Sort by | [optional] [default to name] |
 **sortOrder** | **String** | Sort order | [optional] [default to ascending] |
 **expand** | **String** | requests.inputSchema,requests.successSchema | [optional]  |
{: class="table table-striped"}

### Return type

**UserActionMetadataEntityListing**

<a name="getBridgeUseractionsMetadataActionName"></a>

# **{&#39;String&#39;: Object}** getBridgeUseractionsMetadataActionName(actionName, opts)


GET /api/v2/bridge/useractions/metadata/{actionName}

Get user action metadata

Requires NO permissions:

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.BridgeApi();

let actionName = "actionName_example"; // String | Name
let opts = { 
  'expand': "expand_example" // String | requests.inputSchema,requests.successSchema
};

apiInstance.getBridgeUseractionsMetadataActionName(actionName, opts)
  .then((data) => {
    console.log(`getBridgeUseractionsMetadataActionName success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getBridgeUseractionsMetadataActionName');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **actionName** | **String** | Name |  |
 **expand** | **String** | requests.inputSchema,requests.successSchema | [optional]  |
{: class="table table-striped"}

### Return type

**{&#39;String&#39;: Object}**

