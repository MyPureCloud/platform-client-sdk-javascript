# DependenciesApi

# platformClient.DependenciesApi

All URIs are relative to *https://api.mypurecloud.com*

| Method | HTTP request | Description |
| ------------- | ------------- | ------------- |
[**getDependenciesTypeEntityTypeIdEntityIdConnectionsRequiredby**](DependenciesApi#getDependenciesTypeEntityTypeIdEntityIdConnectionsRequiredby) | **GET** /api/v2/dependencies/type/{entityType}/id/{entityId}/connections/requiredby | Get entities that require the given entity
[**getDependenciesTypeEntityTypeIdEntityIdConnectionsRequiredbycounts**](DependenciesApi#getDependenciesTypeEntityTypeIdEntityIdConnectionsRequiredbycounts) | **GET** /api/v2/dependencies/type/{entityType}/id/{entityId}/connections/requiredbycounts | An estimated count of entities that depend on this entity, including indirect dependencies.
[**getDependenciesTypeEntityTypeIdEntityIdConnectionsRequires**](DependenciesApi#getDependenciesTypeEntityTypeIdEntityIdConnectionsRequires) | **GET** /api/v2/dependencies/type/{entityType}/id/{entityId}/connections/requires | Get entities that the given entity requires



## getDependenciesTypeEntityTypeIdEntityIdConnectionsRequiredby

> DependencyEntityListing getDependenciesTypeEntityTypeIdEntityIdConnectionsRequiredby(entityType, entityId, opts)


GET /api/v2/dependencies/type/{entityType}/id/{entityId}/connections/requiredby

Get entities that require the given entity

Requires ANY permissions:

* dependencies:dependency:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.DependenciesApi();

let entityType = "entityType_example"; // String | Entity type
let entityId = "entityId_example"; // String | Entity ID
let opts = { 
  'pageSize': "25", // String | Page size (max 100)
  'beforeSourceType': "beforeSourceType_example", // String | Cursor for previous page
  'beforeSourceId': "beforeSourceId_example", // String | Cursor for previous page
  'afterSourceType': "afterSourceType_example", // String | Cursor for next page
  'afterSourceId': "afterSourceId_example", // String | Cursor for next page
  'customHeaders': {  // Object.<string, string> | Request Custom Headers
    'X-Service-Name': 'customer-service',
    'X-Request-ID': 'req-12345'
  }
};

apiInstance.getDependenciesTypeEntityTypeIdEntityIdConnectionsRequiredby(entityType, entityId, opts)
  .then((data) => {
    console.log(`getDependenciesTypeEntityTypeIdEntityIdConnectionsRequiredby success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getDependenciesTypeEntityTypeIdEntityIdConnectionsRequiredby');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **entityType** | **String** | Entity type | <br />**Values**: Integration, DataAction, Credential |
 **entityId** | **String** | Entity ID |  |
 **pageSize** | **String** | Page size (max 100) | [optional] [default to 25] |
 **beforeSourceType** | **String** | Cursor for previous page | [optional]  |
 **beforeSourceId** | **String** | Cursor for previous page | [optional]  |
 **afterSourceType** | **String** | Cursor for next page | [optional]  |
 **afterSourceId** | **String** | Cursor for next page | [optional]  |
 **customHeaders** | **Object.<string, string>** | Request Custom Headers | [optional] |

### Return type

**DependencyEntityListing**


## getDependenciesTypeEntityTypeIdEntityIdConnectionsRequiredbycounts

> DependencyCount getDependenciesTypeEntityTypeIdEntityIdConnectionsRequiredbycounts(entityType, entityId, opts)


GET /api/v2/dependencies/type/{entityType}/id/{entityId}/connections/requiredbycounts

An estimated count of entities that depend on this entity, including indirect dependencies.

Requires ANY permissions:

* dependencies:dependency:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.DependenciesApi();

let entityType = "entityType_example"; // String | Entity type
let entityId = "entityId_example"; // String | Entity ID
let opts = { 
  'customHeaders': {  // Object.<string, string> | Request Custom Headers
    'X-Service-Name': 'customer-service',
    'X-Request-ID': 'req-12345'
  }
};

apiInstance.getDependenciesTypeEntityTypeIdEntityIdConnectionsRequiredbycounts(entityType, entityId, opts)
  .then((data) => {
    console.log(`getDependenciesTypeEntityTypeIdEntityIdConnectionsRequiredbycounts success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getDependenciesTypeEntityTypeIdEntityIdConnectionsRequiredbycounts');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **entityType** | **String** | Entity type | <br />**Values**: Integration, DataAction, Credential |
 **entityId** | **String** | Entity ID |  |
 **customHeaders** | **Object.<string, string>** | Request Custom Headers | [optional] |

### Return type

**DependencyCount**


## getDependenciesTypeEntityTypeIdEntityIdConnectionsRequires

> DependencyEntityListing getDependenciesTypeEntityTypeIdEntityIdConnectionsRequires(entityType, entityId, opts)


GET /api/v2/dependencies/type/{entityType}/id/{entityId}/connections/requires

Get entities that the given entity requires

Requires ANY permissions:

* dependencies:dependency:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.DependenciesApi();

let entityType = "entityType_example"; // String | Entity type
let entityId = "entityId_example"; // String | Entity ID
let opts = { 
  'pageSize': "25", // String | Page size (max 100)
  'beforeSourceType': "beforeSourceType_example", // String | Cursor for previous page
  'beforeSourceId': "beforeSourceId_example", // String | Cursor for previous page
  'afterSourceType': "afterSourceType_example", // String | Cursor for next page
  'afterSourceId': "afterSourceId_example", // String | Cursor for next page
  'customHeaders': {  // Object.<string, string> | Request Custom Headers
    'X-Service-Name': 'customer-service',
    'X-Request-ID': 'req-12345'
  }
};

apiInstance.getDependenciesTypeEntityTypeIdEntityIdConnectionsRequires(entityType, entityId, opts)
  .then((data) => {
    console.log(`getDependenciesTypeEntityTypeIdEntityIdConnectionsRequires success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getDependenciesTypeEntityTypeIdEntityIdConnectionsRequires');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **entityType** | **String** | Entity type | <br />**Values**: Integration, DataAction, Credential |
 **entityId** | **String** | Entity ID |  |
 **pageSize** | **String** | Page size (max 100) | [optional] [default to 25] |
 **beforeSourceType** | **String** | Cursor for previous page | [optional]  |
 **beforeSourceId** | **String** | Cursor for previous page | [optional]  |
 **afterSourceType** | **String** | Cursor for next page | [optional]  |
 **afterSourceId** | **String** | Cursor for next page | [optional]  |
 **customHeaders** | **Object.<string, string>** | Request Custom Headers | [optional] |

### Return type

**DependencyEntityListing**


_purecloud-platform-client-v2@259.0.0_
