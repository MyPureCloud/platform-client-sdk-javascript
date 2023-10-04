---
title: DocsApi
---
# platformClient.DocsApi

All URIs are relative to *https://api.inindca.com*

| Method | HTTP request | Description |
| ------------- | ------------- | ------------- |
[**getDocsSwagger**](DocsApi.html#getDocsSwagger) | **GET** /api/v2/docs/swagger | The swagger definition in JSON
[**getDocsSwaggerall**](DocsApi.html#getDocsSwaggerall) | **GET** /api/v2/docs/swaggerall | The swagger definition in JSON
[**getDocsSwaggerpreview**](DocsApi.html#getDocsSwaggerpreview) | **GET** /api/v2/docs/swaggerpreview | The swagger definition in JSON
{: class="table table-striped"}

<a name="getDocsSwagger"></a>

# **&#39;String&#39;** getDocsSwagger()


GET /api/v2/docs/swagger

The swagger definition in JSON

Requires NO permissions:

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

let apiInstance = new platformClient.DocsApi();

apiInstance.getDocsSwagger()
  .then((data) => {
    console.log(`getDocsSwagger success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getDocsSwagger');
    console.error(err);
  });
```

### Parameters

This endpoint does not need any parameter.


### Return type

**&#39;String&#39;**

<a name="getDocsSwaggerall"></a>

# **&#39;String&#39;** getDocsSwaggerall()


GET /api/v2/docs/swaggerall

The swagger definition in JSON

Requires NO permissions:

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

let apiInstance = new platformClient.DocsApi();

apiInstance.getDocsSwaggerall()
  .then((data) => {
    console.log(`getDocsSwaggerall success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getDocsSwaggerall');
    console.error(err);
  });
```

### Parameters

This endpoint does not need any parameter.


### Return type

**&#39;String&#39;**

<a name="getDocsSwaggerpreview"></a>

# **&#39;String&#39;** getDocsSwaggerpreview()


GET /api/v2/docs/swaggerpreview

The swagger definition in JSON

Requires NO permissions:

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

let apiInstance = new platformClient.DocsApi();

apiInstance.getDocsSwaggerpreview()
  .then((data) => {
    console.log(`getDocsSwaggerpreview success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getDocsSwaggerpreview');
    console.error(err);
  });
```

### Parameters

This endpoint does not need any parameter.


### Return type

**&#39;String&#39;**

