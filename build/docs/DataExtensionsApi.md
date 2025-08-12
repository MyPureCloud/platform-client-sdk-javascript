# DataExtensionsApi

# platformClient.DataExtensionsApi

All URIs are relative to *https://api.mypurecloud.com*

| Method | HTTP request | Description |
| ------------- | ------------- | ------------- |
[**getDataextensionsCoretype**](DataExtensionsApi#getDataextensionsCoretype) | **GET** /api/v2/dataextensions/coretypes/{coretypeName} | Get a specific named core type.
[**getDataextensionsCoretypes**](DataExtensionsApi#getDataextensionsCoretypes) | **GET** /api/v2/dataextensions/coretypes | Get the core types from which all schemas are built.
[**getDataextensionsLimits**](DataExtensionsApi#getDataextensionsLimits) | **GET** /api/v2/dataextensions/limits | Get quantitative limits on schemas



## getDataextensionsCoretype

> Coretype getDataextensionsCoretype(coretypeName)


GET /api/v2/dataextensions/coretypes/{coretypeName}

Get a specific named core type.

Requires ANY permissions:

* externalContacts:customFields:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.DataExtensionsApi();

let coretypeName = "coretypeName_example"; // String | The core type's name

apiInstance.getDataextensionsCoretype(coretypeName)
  .then((data) => {
    console.log(`getDataextensionsCoretype success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getDataextensionsCoretype');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **coretypeName** | **String** | The core type's name | <br />**Values**: text, longtext, url, identifier, enum, date, datetime, integer, number, checkbox, tag |

### Return type

**Coretype**


## getDataextensionsCoretypes

> CoretypeListing getDataextensionsCoretypes()


GET /api/v2/dataextensions/coretypes

Get the core types from which all schemas are built.

Requires ANY permissions:

* externalContacts:customFields:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.DataExtensionsApi();

apiInstance.getDataextensionsCoretypes()
  .then((data) => {
    console.log(`getDataextensionsCoretypes success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getDataextensionsCoretypes');
    console.error(err);
  });
```

### Parameters

This endpoint does not need any parameter.

### Return type

**CoretypeListing**


## getDataextensionsLimits

> SchemaQuantityLimits getDataextensionsLimits()


GET /api/v2/dataextensions/limits

Get quantitative limits on schemas

Requires ANY permissions:

* externalContacts:customFields:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.DataExtensionsApi();

apiInstance.getDataextensionsLimits()
  .then((data) => {
    console.log(`getDataextensionsLimits success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getDataextensionsLimits');
    console.error(err);
  });
```

### Parameters

This endpoint does not need any parameter.

### Return type

**SchemaQuantityLimits**


_purecloud-platform-client-v2@229.1.0_
