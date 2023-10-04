---
title: ScriptsApi
---
# platformClient.ScriptsApi

All URIs are relative to *https://api.mypurecloud.com*

| Method | HTTP request | Description |
| ------------- | ------------- | ------------- |
[**getScript**](ScriptsApi.html#getScript) | **GET** /api/v2/scripts/{scriptId} | Get a script
[**getScriptPage**](ScriptsApi.html#getScriptPage) | **GET** /api/v2/scripts/{scriptId}/pages/{pageId} | Get a page
[**getScriptPages**](ScriptsApi.html#getScriptPages) | **GET** /api/v2/scripts/{scriptId}/pages | Get the list of pages
[**getScripts**](ScriptsApi.html#getScripts) | **GET** /api/v2/scripts | Get the list of scripts
[**getScriptsDivisionviews**](ScriptsApi.html#getScriptsDivisionviews) | **GET** /api/v2/scripts/divisionviews | Get the metadata for a list of scripts
[**getScriptsPublished**](ScriptsApi.html#getScriptsPublished) | **GET** /api/v2/scripts/published | Get the published scripts.
[**getScriptsPublishedDivisionviews**](ScriptsApi.html#getScriptsPublishedDivisionviews) | **GET** /api/v2/scripts/published/divisionviews | Get the published scripts metadata.
[**getScriptsPublishedScriptId**](ScriptsApi.html#getScriptsPublishedScriptId) | **GET** /api/v2/scripts/published/{scriptId} | Get the published script.
[**getScriptsPublishedScriptIdPage**](ScriptsApi.html#getScriptsPublishedScriptIdPage) | **GET** /api/v2/scripts/published/{scriptId}/pages/{pageId} | Get the published page.
[**getScriptsPublishedScriptIdPages**](ScriptsApi.html#getScriptsPublishedScriptIdPages) | **GET** /api/v2/scripts/published/{scriptId}/pages | Get the list of published pages
[**getScriptsPublishedScriptIdVariables**](ScriptsApi.html#getScriptsPublishedScriptIdVariables) | **GET** /api/v2/scripts/published/{scriptId}/variables | Get the published variables
[**getScriptsUploadStatus**](ScriptsApi.html#getScriptsUploadStatus) | **GET** /api/v2/scripts/uploads/{uploadId}/status | Get the upload status of an imported script
[**postScriptExport**](ScriptsApi.html#postScriptExport) | **POST** /api/v2/scripts/{scriptId}/export | Export a script via download service.
[**postScriptsPublished**](ScriptsApi.html#postScriptsPublished) | **POST** /api/v2/scripts/published | Publish a script.
{: class="table table-striped"}

<a name="getScript"></a>

# Script getScript(scriptId)


GET /api/v2/scripts/{scriptId}

Get a script

Requires ANY permissions:

* scripter:script:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.ScriptsApi();

let scriptId = "scriptId_example"; // String | Script ID

apiInstance.getScript(scriptId)
  .then((data) => {
    console.log(`getScript success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getScript');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **scriptId** | **String** | Script ID |  |
{: class="table table-striped"}

### Return type

**Script**

<a name="getScriptPage"></a>

# Page getScriptPage(scriptId, pageId, opts)


GET /api/v2/scripts/{scriptId}/pages/{pageId}

Get a page

Requires ANY permissions:

* scripter:script:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.ScriptsApi();

let scriptId = "scriptId_example"; // String | Script ID
let pageId = "pageId_example"; // String | Page ID
let opts = { 
  'scriptDataVersion': "scriptDataVersion_example" // String | Advanced usage - controls the data version of the script
};

apiInstance.getScriptPage(scriptId, pageId, opts)
  .then((data) => {
    console.log(`getScriptPage success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getScriptPage');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **scriptId** | **String** | Script ID |  |
 **pageId** | **String** | Page ID |  |
 **scriptDataVersion** | **String** | Advanced usage - controls the data version of the script | [optional]  |
{: class="table table-striped"}

### Return type

**Page**

<a name="getScriptPages"></a>

# [Page] getScriptPages(scriptId, opts)


GET /api/v2/scripts/{scriptId}/pages

Get the list of pages

Requires ANY permissions:

* scripter:script:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.ScriptsApi();

let scriptId = "scriptId_example"; // String | Script ID
let opts = { 
  'scriptDataVersion': "scriptDataVersion_example" // String | Advanced usage - controls the data version of the script
};

apiInstance.getScriptPages(scriptId, opts)
  .then((data) => {
    console.log(`getScriptPages success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getScriptPages');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **scriptId** | **String** | Script ID |  |
 **scriptDataVersion** | **String** | Advanced usage - controls the data version of the script | [optional]  |
{: class="table table-striped"}

### Return type

**[Page]**

<a name="getScripts"></a>

# ScriptEntityListing getScripts(opts)


GET /api/v2/scripts

Get the list of scripts

Requires ANY permissions:

* scripter:script:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.ScriptsApi();

let opts = { 
  'pageSize': 25, // Number | Page size
  'pageNumber': 1, // Number | Page number
  'expand': "expand_example", // String | Expand
  'name': "name_example", // String | Name filter
  'feature': "feature_example", // String | Feature filter
  'flowId': "flowId_example", // String | Secure flow id filter
  'sortBy': "sortBy_example", // String | SortBy
  'sortOrder': "sortOrder_example", // String | SortOrder
  'scriptDataVersion': "scriptDataVersion_example", // String | Advanced usage - controls the data version of the script
  'divisionIds': "divisionIds_example" // String | Filters scripts to requested divisionIds
};

apiInstance.getScripts(opts)
  .then((data) => {
    console.log(`getScripts success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getScripts');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **pageSize** | **Number** | Page size | [optional] [default to 25] |
 **pageNumber** | **Number** | Page number | [optional] [default to 1] |
 **expand** | **String** | Expand | [optional]  |
 **name** | **String** | Name filter | [optional]  |
 **feature** | **String** | Feature filter | [optional]  |
 **flowId** | **String** | Secure flow id filter | [optional]  |
 **sortBy** | **String** | SortBy | [optional] <br />**Values**: modifiedDate, createdDate |
 **sortOrder** | **String** | SortOrder | [optional] <br />**Values**: ascending, descending |
 **scriptDataVersion** | **String** | Advanced usage - controls the data version of the script | [optional]  |
 **divisionIds** | **String** | Filters scripts to requested divisionIds | [optional]  |
{: class="table table-striped"}

### Return type

**ScriptEntityListing**

<a name="getScriptsDivisionviews"></a>

# ScriptEntityListing getScriptsDivisionviews(opts)


GET /api/v2/scripts/divisionviews

Get the metadata for a list of scripts

Requires ANY permissions:

* scripter:script:search

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.ScriptsApi();

let opts = { 
  'pageSize': 25, // Number | Page size
  'pageNumber': 1, // Number | Page number
  'expand': "expand_example", // String | Expand
  'name': "name_example", // String | Name filter
  'feature': "feature_example", // String | Feature filter
  'flowId': "flowId_example", // String | Secure flow id filter
  'sortBy': "sortBy_example", // String | SortBy
  'sortOrder': "sortOrder_example", // String | SortOrder
  'scriptDataVersion': "scriptDataVersion_example", // String | Advanced usage - controls the data version of the script
  'divisionIds': "divisionIds_example" // String | Filters scripts to requested divisionIds
};

apiInstance.getScriptsDivisionviews(opts)
  .then((data) => {
    console.log(`getScriptsDivisionviews success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getScriptsDivisionviews');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **pageSize** | **Number** | Page size | [optional] [default to 25] |
 **pageNumber** | **Number** | Page number | [optional] [default to 1] |
 **expand** | **String** | Expand | [optional]  |
 **name** | **String** | Name filter | [optional]  |
 **feature** | **String** | Feature filter | [optional]  |
 **flowId** | **String** | Secure flow id filter | [optional]  |
 **sortBy** | **String** | SortBy | [optional] <br />**Values**: modifiedDate, createdDate |
 **sortOrder** | **String** | SortOrder | [optional] <br />**Values**: ascending, descending |
 **scriptDataVersion** | **String** | Advanced usage - controls the data version of the script | [optional]  |
 **divisionIds** | **String** | Filters scripts to requested divisionIds | [optional]  |
{: class="table table-striped"}

### Return type

**ScriptEntityListing**

<a name="getScriptsPublished"></a>

# ScriptEntityListing getScriptsPublished(opts)


GET /api/v2/scripts/published

Get the published scripts.

Requires ANY permissions:

* scripter:publishedScript:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.ScriptsApi();

let opts = { 
  'pageSize': 25, // Number | Page size
  'pageNumber': 1, // Number | Page number
  'expand': "expand_example", // String | Expand
  'name': "name_example", // String | Name filter
  'feature': "feature_example", // String | Feature filter
  'flowId': "flowId_example", // String | Secure flow id filter
  'scriptDataVersion': "scriptDataVersion_example", // String | Advanced usage - controls the data version of the script
  'divisionIds': "divisionIds_example" // String | Filters scripts to requested divisionIds
};

apiInstance.getScriptsPublished(opts)
  .then((data) => {
    console.log(`getScriptsPublished success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getScriptsPublished');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **pageSize** | **Number** | Page size | [optional] [default to 25] |
 **pageNumber** | **Number** | Page number | [optional] [default to 1] |
 **expand** | **String** | Expand | [optional]  |
 **name** | **String** | Name filter | [optional]  |
 **feature** | **String** | Feature filter | [optional]  |
 **flowId** | **String** | Secure flow id filter | [optional]  |
 **scriptDataVersion** | **String** | Advanced usage - controls the data version of the script | [optional]  |
 **divisionIds** | **String** | Filters scripts to requested divisionIds | [optional]  |
{: class="table table-striped"}

### Return type

**ScriptEntityListing**

<a name="getScriptsPublishedDivisionviews"></a>

# ScriptEntityListing getScriptsPublishedDivisionviews(opts)


GET /api/v2/scripts/published/divisionviews

Get the published scripts metadata.

Requires ANY permissions:

* scripter:publishedScript:search

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.ScriptsApi();

let opts = { 
  'pageSize': 25, // Number | Page size
  'pageNumber': 1, // Number | Page number
  'expand': "expand_example", // String | Expand
  'name': "name_example", // String | Name filter
  'feature': "feature_example", // String | Feature filter
  'flowId': "flowId_example", // String | Secure flow id filter
  'scriptDataVersion': "scriptDataVersion_example", // String | Advanced usage - controls the data version of the script
  'divisionIds': "divisionIds_example" // String | Filters scripts to requested divisionIds
};

apiInstance.getScriptsPublishedDivisionviews(opts)
  .then((data) => {
    console.log(`getScriptsPublishedDivisionviews success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getScriptsPublishedDivisionviews');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **pageSize** | **Number** | Page size | [optional] [default to 25] |
 **pageNumber** | **Number** | Page number | [optional] [default to 1] |
 **expand** | **String** | Expand | [optional]  |
 **name** | **String** | Name filter | [optional]  |
 **feature** | **String** | Feature filter | [optional]  |
 **flowId** | **String** | Secure flow id filter | [optional]  |
 **scriptDataVersion** | **String** | Advanced usage - controls the data version of the script | [optional]  |
 **divisionIds** | **String** | Filters scripts to requested divisionIds | [optional]  |
{: class="table table-striped"}

### Return type

**ScriptEntityListing**

<a name="getScriptsPublishedScriptId"></a>

# Script getScriptsPublishedScriptId(scriptId, opts)


GET /api/v2/scripts/published/{scriptId}

Get the published script.

Requires ANY permissions:

* scripter:publishedScript:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.ScriptsApi();

let scriptId = "scriptId_example"; // String | Script ID
let opts = { 
  'scriptDataVersion': "scriptDataVersion_example" // String | Advanced usage - controls the data version of the script
};

apiInstance.getScriptsPublishedScriptId(scriptId, opts)
  .then((data) => {
    console.log(`getScriptsPublishedScriptId success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getScriptsPublishedScriptId');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **scriptId** | **String** | Script ID |  |
 **scriptDataVersion** | **String** | Advanced usage - controls the data version of the script | [optional]  |
{: class="table table-striped"}

### Return type

**Script**

<a name="getScriptsPublishedScriptIdPage"></a>

# Page getScriptsPublishedScriptIdPage(scriptId, pageId, opts)


GET /api/v2/scripts/published/{scriptId}/pages/{pageId}

Get the published page.

Requires ANY permissions:

* scripter:publishedScript:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.ScriptsApi();

let scriptId = "scriptId_example"; // String | Script ID
let pageId = "pageId_example"; // String | Page ID
let opts = { 
  'scriptDataVersion': "scriptDataVersion_example" // String | Advanced usage - controls the data version of the script
};

apiInstance.getScriptsPublishedScriptIdPage(scriptId, pageId, opts)
  .then((data) => {
    console.log(`getScriptsPublishedScriptIdPage success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getScriptsPublishedScriptIdPage');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **scriptId** | **String** | Script ID |  |
 **pageId** | **String** | Page ID |  |
 **scriptDataVersion** | **String** | Advanced usage - controls the data version of the script | [optional]  |
{: class="table table-striped"}

### Return type

**Page**

<a name="getScriptsPublishedScriptIdPages"></a>

# [Page] getScriptsPublishedScriptIdPages(scriptId, opts)


GET /api/v2/scripts/published/{scriptId}/pages

Get the list of published pages

Requires ANY permissions:

* scripter:publishedScript:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.ScriptsApi();

let scriptId = "scriptId_example"; // String | Script ID
let opts = { 
  'scriptDataVersion': "scriptDataVersion_example" // String | Advanced usage - controls the data version of the script
};

apiInstance.getScriptsPublishedScriptIdPages(scriptId, opts)
  .then((data) => {
    console.log(`getScriptsPublishedScriptIdPages success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getScriptsPublishedScriptIdPages');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **scriptId** | **String** | Script ID |  |
 **scriptDataVersion** | **String** | Advanced usage - controls the data version of the script | [optional]  |
{: class="table table-striped"}

### Return type

**[Page]**

<a name="getScriptsPublishedScriptIdVariables"></a>

# **Object** getScriptsPublishedScriptIdVariables(scriptId, opts)


GET /api/v2/scripts/published/{scriptId}/variables

Get the published variables

Requires ANY permissions:

* scripter:publishedScript:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.ScriptsApi();

let scriptId = "scriptId_example"; // String | Script ID
let opts = { 
  'input': "input_example", // String | input
  'output': "output_example", // String | output
  'type': "type_example", // String | type
  'scriptDataVersion': "scriptDataVersion_example" // String | Advanced usage - controls the data version of the script
};

apiInstance.getScriptsPublishedScriptIdVariables(scriptId, opts)
  .then((data) => {
    console.log(`getScriptsPublishedScriptIdVariables success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getScriptsPublishedScriptIdVariables');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **scriptId** | **String** | Script ID |  |
 **input** | **String** | input | [optional] <br />**Values**: true, false |
 **output** | **String** | output | [optional] <br />**Values**: true, false |
 **type** | **String** | type | [optional] <br />**Values**: string, number, boolean |
 **scriptDataVersion** | **String** | Advanced usage - controls the data version of the script | [optional]  |
{: class="table table-striped"}

### Return type

**Object**

<a name="getScriptsUploadStatus"></a>

# ImportScriptStatusResponse getScriptsUploadStatus(uploadId, opts)


GET /api/v2/scripts/uploads/{uploadId}/status

Get the upload status of an imported script

Requires ANY permissions:

* scripter:script:search

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.ScriptsApi();

let uploadId = "uploadId_example"; // String | Upload ID
let opts = { 
  'longPoll': false // Boolean | Enable longPolling endpoint
};

apiInstance.getScriptsUploadStatus(uploadId, opts)
  .then((data) => {
    console.log(`getScriptsUploadStatus success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getScriptsUploadStatus');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **uploadId** | **String** | Upload ID |  |
 **longPoll** | **Boolean** | Enable longPolling endpoint | [optional] [default to false] |
{: class="table table-striped"}

### Return type

**ImportScriptStatusResponse**

<a name="postScriptExport"></a>

# ExportScriptResponse postScriptExport(scriptId, opts)


POST /api/v2/scripts/{scriptId}/export

Export a script via download service.

Requires ANY permissions:

* scripter:script:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.ScriptsApi();

let scriptId = "scriptId_example"; // String | Script ID
let opts = { 
  'body': {} // Object | 
};

apiInstance.postScriptExport(scriptId, opts)
  .then((data) => {
    console.log(`postScriptExport success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling postScriptExport');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **scriptId** | **String** | Script ID |  |
 **body** | **Object** |  | [optional]  |
{: class="table table-striped"}

### Return type

**ExportScriptResponse**

<a name="postScriptsPublished"></a>

# Script postScriptsPublished(opts)


POST /api/v2/scripts/published

Publish a script.

Requires ANY permissions:

* scripter:publishedScript:add

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.ScriptsApi();

let opts = { 
  'scriptDataVersion': "scriptDataVersion_example", // String | Advanced usage - controls the data version of the script
  'body': {} // Object | body
};

apiInstance.postScriptsPublished(opts)
  .then((data) => {
    console.log(`postScriptsPublished success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling postScriptsPublished');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **scriptDataVersion** | **String** | Advanced usage - controls the data version of the script | [optional]  |
 **body** | **Object** | body | [optional]  |
{: class="table table-striped"}

### Return type

**Script**

