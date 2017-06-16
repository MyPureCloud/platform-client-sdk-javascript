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
[**getScriptsPublished**](ScriptsApi.html#getScriptsPublished) | **GET** /api/v2/scripts/published | Get the published scripts.
[**getScriptsPublishedScriptId**](ScriptsApi.html#getScriptsPublishedScriptId) | **GET** /api/v2/scripts/published/{scriptId} | Get the published script.
[**getScriptsPublishedScriptIdPage**](ScriptsApi.html#getScriptsPublishedScriptIdPage) | **GET** /api/v2/scripts/published/{scriptId}/pages/{pageId} | Get the published page.
[**getScriptsPublishedScriptIdPages**](ScriptsApi.html#getScriptsPublishedScriptIdPages) | **GET** /api/v2/scripts/published/{scriptId}/pages | Get the list of published pages
[**getScriptsPublishedScriptIdVariables**](ScriptsApi.html#getScriptsPublishedScriptIdVariables) | **GET** /api/v2/scripts/published/{scriptId}/variables | Get the published variables
{: class="table table-striped"}

<a name="getScript"></a>

# [**Script**](Script.html) getScript(scriptId)

GET /api/v2/scripts/{scriptId}

Get a script



### Example

~~~ javascript
const platformClient = require('purecloud-platform-client-v2');

// Configure OAuth2 access token for authorization: PureCloud Auth
platformClient.ApiClient.instance.authentications['PureCloud Auth'].accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new platformClient.ScriptsApi();

var scriptId = "scriptId_example"; // String | Script ID

apiInstance.getScript(scriptId)
  .then(function(data) {
    console.log(`getScript success! data: ${data}`);
  })
  .catch(function(error) {
  	console.log('There was a failure calling getScript');
    console.error(error);
  });

~~~

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **scriptId** | **String**| Script ID |  |
{: class="table table-striped"}

### Return type

[**Script**](Script.html)

<a name="getScriptPage"></a>

# [**Page**](Page.html) getScriptPage(scriptId, pageId)

GET /api/v2/scripts/{scriptId}/pages/{pageId}

Get a page



### Example

~~~ javascript
const platformClient = require('purecloud-platform-client-v2');

// Configure OAuth2 access token for authorization: PureCloud Auth
platformClient.ApiClient.instance.authentications['PureCloud Auth'].accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new platformClient.ScriptsApi();

var scriptId = "scriptId_example"; // String | Script ID

var pageId = "pageId_example"; // String | Page ID

apiInstance.getScriptPage(scriptId, pageId)
  .then(function(data) {
    console.log(`getScriptPage success! data: ${data}`);
  })
  .catch(function(error) {
  	console.log('There was a failure calling getScriptPage');
    console.error(error);
  });

~~~

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **scriptId** | **String**| Script ID |  |
 **pageId** | **String**| Page ID |  |
{: class="table table-striped"}

### Return type

[**Page**](Page.html)

<a name="getScriptPages"></a>

# [**[Page]**](Page.html) getScriptPages(scriptId)

GET /api/v2/scripts/{scriptId}/pages

Get the list of pages



### Example

~~~ javascript
const platformClient = require('purecloud-platform-client-v2');

// Configure OAuth2 access token for authorization: PureCloud Auth
platformClient.ApiClient.instance.authentications['PureCloud Auth'].accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new platformClient.ScriptsApi();

var scriptId = "scriptId_example"; // String | Script ID

apiInstance.getScriptPages(scriptId)
  .then(function(data) {
    console.log(`getScriptPages success! data: ${data}`);
  })
  .catch(function(error) {
  	console.log('There was a failure calling getScriptPages');
    console.error(error);
  });

~~~

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **scriptId** | **String**| Script ID |  |
{: class="table table-striped"}

### Return type

[**[Page]**](Page.html)

<a name="getScripts"></a>

# [**ScriptEntityListing**](ScriptEntityListing.html) getScripts(opts)

GET /api/v2/scripts

Get the list of scripts



### Example

~~~ javascript
const platformClient = require('purecloud-platform-client-v2');

// Configure OAuth2 access token for authorization: PureCloud Auth
platformClient.ApiClient.instance.authentications['PureCloud Auth'].accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new platformClient.ScriptsApi();

var opts = { 
  'pageSize': 25, // Number | Page size
  'pageNumber': 1, // Number | Page number
  'expand': "expand_example", // String | Expand
  'name': "name_example", // String | Name filter
  'feature': "feature_example", // String | Feature filter
  'flowId': "flowId_example", // String | Secure flow id filter
  'sortBy': "sortBy_example", // String | SortBy
  'sortOrder': "sortOrder_example" // String | SortOrder
};
apiInstance.getScripts(opts)
  .then(function(data) {
    console.log(`getScripts success! data: ${data}`);
  })
  .catch(function(error) {
  	console.log('There was a failure calling getScripts');
    console.error(error);
  });

~~~

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **pageSize** | **Number**| Page size | [optional] [default to 25] |
 **pageNumber** | **Number**| Page number | [optional] [default to 1] |
 **expand** | **String**| Expand | [optional]  |
 **name** | **String**| Name filter | [optional]  |
 **feature** | **String**| Feature filter | [optional]  |
 **flowId** | **String**| Secure flow id filter | [optional]  |
 **sortBy** | **String**| SortBy | [optional] <br />**Values**: modifiedDate, createdDate |
 **sortOrder** | **String**| SortOrder | [optional] <br />**Values**: ascending, descending |
{: class="table table-striped"}

### Return type

[**ScriptEntityListing**](ScriptEntityListing.html)

<a name="getScriptsPublished"></a>

# [**ScriptEntityListing**](ScriptEntityListing.html) getScriptsPublished(opts)

GET /api/v2/scripts/published

Get the published scripts.



### Example

~~~ javascript
const platformClient = require('purecloud-platform-client-v2');

// Configure OAuth2 access token for authorization: PureCloud Auth
platformClient.ApiClient.instance.authentications['PureCloud Auth'].accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new platformClient.ScriptsApi();

var opts = { 
  'pageSize': 25, // Number | Page size
  'pageNumber': 1, // Number | Page number
  'expand': "expand_example", // String | Expand
  'name': "name_example", // String | Name filter
  'feature': "feature_example", // String | Feature filter
  'flowId': "flowId_example" // String | Secure flow id filter
};
apiInstance.getScriptsPublished(opts)
  .then(function(data) {
    console.log(`getScriptsPublished success! data: ${data}`);
  })
  .catch(function(error) {
  	console.log('There was a failure calling getScriptsPublished');
    console.error(error);
  });

~~~

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **pageSize** | **Number**| Page size | [optional] [default to 25] |
 **pageNumber** | **Number**| Page number | [optional] [default to 1] |
 **expand** | **String**| Expand | [optional]  |
 **name** | **String**| Name filter | [optional]  |
 **feature** | **String**| Feature filter | [optional]  |
 **flowId** | **String**| Secure flow id filter | [optional]  |
{: class="table table-striped"}

### Return type

[**ScriptEntityListing**](ScriptEntityListing.html)

<a name="getScriptsPublishedScriptId"></a>

# [**Script**](Script.html) getScriptsPublishedScriptId(scriptId)

GET /api/v2/scripts/published/{scriptId}

Get the published script.



### Example

~~~ javascript
const platformClient = require('purecloud-platform-client-v2');

// Configure OAuth2 access token for authorization: PureCloud Auth
platformClient.ApiClient.instance.authentications['PureCloud Auth'].accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new platformClient.ScriptsApi();

var scriptId = "scriptId_example"; // String | Script ID

apiInstance.getScriptsPublishedScriptId(scriptId)
  .then(function(data) {
    console.log(`getScriptsPublishedScriptId success! data: ${data}`);
  })
  .catch(function(error) {
  	console.log('There was a failure calling getScriptsPublishedScriptId');
    console.error(error);
  });

~~~

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **scriptId** | **String**| Script ID |  |
{: class="table table-striped"}

### Return type

[**Script**](Script.html)

<a name="getScriptsPublishedScriptIdPage"></a>

# [**Page**](Page.html) getScriptsPublishedScriptIdPage(scriptId, pageId)

GET /api/v2/scripts/published/{scriptId}/pages/{pageId}

Get the published page.



### Example

~~~ javascript
const platformClient = require('purecloud-platform-client-v2');

// Configure OAuth2 access token for authorization: PureCloud Auth
platformClient.ApiClient.instance.authentications['PureCloud Auth'].accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new platformClient.ScriptsApi();

var scriptId = "scriptId_example"; // String | Script ID

var pageId = "pageId_example"; // String | Page ID

apiInstance.getScriptsPublishedScriptIdPage(scriptId, pageId)
  .then(function(data) {
    console.log(`getScriptsPublishedScriptIdPage success! data: ${data}`);
  })
  .catch(function(error) {
  	console.log('There was a failure calling getScriptsPublishedScriptIdPage');
    console.error(error);
  });

~~~

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **scriptId** | **String**| Script ID |  |
 **pageId** | **String**| Page ID |  |
{: class="table table-striped"}

### Return type

[**Page**](Page.html)

<a name="getScriptsPublishedScriptIdPages"></a>

# [**[Page]**](Page.html) getScriptsPublishedScriptIdPages(scriptId)

GET /api/v2/scripts/published/{scriptId}/pages

Get the list of published pages



### Example

~~~ javascript
const platformClient = require('purecloud-platform-client-v2');

// Configure OAuth2 access token for authorization: PureCloud Auth
platformClient.ApiClient.instance.authentications['PureCloud Auth'].accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new platformClient.ScriptsApi();

var scriptId = "scriptId_example"; // String | Script ID

apiInstance.getScriptsPublishedScriptIdPages(scriptId)
  .then(function(data) {
    console.log(`getScriptsPublishedScriptIdPages success! data: ${data}`);
  })
  .catch(function(error) {
  	console.log('There was a failure calling getScriptsPublishedScriptIdPages');
    console.error(error);
  });

~~~

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **scriptId** | **String**| Script ID |  |
{: class="table table-striped"}

### Return type

[**[Page]**](Page.html)

<a name="getScriptsPublishedScriptIdVariables"></a>

# **Object** getScriptsPublishedScriptIdVariables(scriptId, opts)

GET /api/v2/scripts/published/{scriptId}/variables

Get the published variables



### Example

~~~ javascript
const platformClient = require('purecloud-platform-client-v2');

// Configure OAuth2 access token for authorization: PureCloud Auth
platformClient.ApiClient.instance.authentications['PureCloud Auth'].accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new platformClient.ScriptsApi();

var scriptId = "scriptId_example"; // String | Script ID

var opts = { 
  'input': "input_example", // String | input
  'output': "output_example", // String | output
  'type': "type_example" // String | type
};
apiInstance.getScriptsPublishedScriptIdVariables(scriptId, opts)
  .then(function(data) {
    console.log(`getScriptsPublishedScriptIdVariables success! data: ${data}`);
  })
  .catch(function(error) {
  	console.log('There was a failure calling getScriptsPublishedScriptIdVariables');
    console.error(error);
  });

~~~

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **scriptId** | **String**| Script ID |  |
 **input** | **String**| input | [optional]  |
 **output** | **String**| output | [optional]  |
 **type** | **String**| type | [optional]  |
{: class="table table-striped"}

### Return type

**Object**

