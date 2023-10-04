---
title: ScriptsApi
---
# platformClient.ScriptsApi

All URIs are relative to *https://api.inindca.com*

| Method | HTTP request | Description |
| ------------- | ------------- | ------------- |
[**deleteScript**](ScriptsApi.html#deleteScript) | **DELETE** /api/v2/scripts/{scriptId} | Delete a script.
[**deleteScriptPage**](ScriptsApi.html#deleteScriptPage) | **DELETE** /api/v2/scripts/{scriptId}/pages/{pageId} | Delete a page.
[**deleteScripterFavoritetemplate**](ScriptsApi.html#deleteScripterFavoritetemplate) | **DELETE** /api/v2/scripter/favoritetemplates/{templateId} | Unset favorite template
[**deleteScripterTemplate**](ScriptsApi.html#deleteScripterTemplate) | **DELETE** /api/v2/scripter/templates/{templateId} | Delete a composer template
[**getScript**](ScriptsApi.html#getScript) | **GET** /api/v2/scripts/{scriptId} | Get a script
[**getScriptPage**](ScriptsApi.html#getScriptPage) | **GET** /api/v2/scripts/{scriptId}/pages/{pageId} | Get a page
[**getScriptPages**](ScriptsApi.html#getScriptPages) | **GET** /api/v2/scripts/{scriptId}/pages | Get the list of pages
[**getScripterFavoritetemplates**](ScriptsApi.html#getScripterFavoritetemplates) | **GET** /api/v2/scripter/favoritetemplates | Get favorite templates
[**getScripterTemplate**](ScriptsApi.html#getScripterTemplate) | **GET** /api/v2/scripter/templates/{templateId} | Get a composer template
[**getScripterTemplates**](ScriptsApi.html#getScripterTemplates) | **GET** /api/v2/scripter/templates | Get the list of templates
[**getScripts**](ScriptsApi.html#getScripts) | **GET** /api/v2/scripts | Get the list of scripts
[**getScriptsDivisionviews**](ScriptsApi.html#getScriptsDivisionviews) | **GET** /api/v2/scripts/divisionviews | Get the metadata for a list of scripts
[**getScriptsPublished**](ScriptsApi.html#getScriptsPublished) | **GET** /api/v2/scripts/published | Get the published scripts.
[**getScriptsPublishedDivisionviewVariables**](ScriptsApi.html#getScriptsPublishedDivisionviewVariables) | **GET** /api/v2/scripts/published/divisionviews/{scriptId}/variables | Get the published variables
[**getScriptsPublishedDivisionviews**](ScriptsApi.html#getScriptsPublishedDivisionviews) | **GET** /api/v2/scripts/published/divisionviews | Get the published scripts metadata.
[**getScriptsPublishedScriptId**](ScriptsApi.html#getScriptsPublishedScriptId) | **GET** /api/v2/scripts/published/{scriptId} | Get the published script.
[**getScriptsPublishedScriptIdPage**](ScriptsApi.html#getScriptsPublishedScriptIdPage) | **GET** /api/v2/scripts/published/{scriptId}/pages/{pageId} | Get the published page.
[**getScriptsPublishedScriptIdPages**](ScriptsApi.html#getScriptsPublishedScriptIdPages) | **GET** /api/v2/scripts/published/{scriptId}/pages | Get the list of published pages
[**getScriptsPublishedScriptIdVariables**](ScriptsApi.html#getScriptsPublishedScriptIdVariables) | **GET** /api/v2/scripts/published/{scriptId}/variables | Get the published variables
[**getScriptsTemplate**](ScriptsApi.html#getScriptsTemplate) | **GET** /api/v2/scripts/templates/{scriptId} | Get the template as script.
[**getScriptsTemplatePage**](ScriptsApi.html#getScriptsTemplatePage) | **GET** /api/v2/scripts/templates/{scriptId}/pages/{pageId} | Get the template page.
[**getScriptsUploadStatus**](ScriptsApi.html#getScriptsUploadStatus) | **GET** /api/v2/scripts/uploads/{uploadId}/status | Get the upload status of an imported script
[**postScriptExport**](ScriptsApi.html#postScriptExport) | **POST** /api/v2/scripts/{scriptId}/export | Export a script via download service.
[**postScriptPages**](ScriptsApi.html#postScriptPages) | **POST** /api/v2/scripts/{scriptId}/pages | Create a page.
[**postScripterFavoritetemplates**](ScriptsApi.html#postScripterFavoritetemplates) | **POST** /api/v2/scripter/favoritetemplates | Set a favorite template
[**postScripterTemplates**](ScriptsApi.html#postScripterTemplates) | **POST** /api/v2/scripter/templates | Create a user script template.
[**postScripts**](ScriptsApi.html#postScripts) | **POST** /api/v2/scripts | Create a script.
[**postScriptsPublished**](ScriptsApi.html#postScriptsPublished) | **POST** /api/v2/scripts/published | Publish a script.
[**postScriptsTemplates**](ScriptsApi.html#postScriptsTemplates) | **POST** /api/v2/scripts/templates | Create a template from a script.
[**putScript**](ScriptsApi.html#putScript) | **PUT** /api/v2/scripts/{scriptId} | Update a script.
[**putScriptPage**](ScriptsApi.html#putScriptPage) | **PUT** /api/v2/scripts/{scriptId}/pages/{pageId} | Update a page.
[**putScripterTemplate**](ScriptsApi.html#putScripterTemplate) | **PUT** /api/v2/scripter/templates/{templateId} | Update a composer template
{: class="table table-striped"}

<a name="deleteScript"></a>

# void deleteScript(scriptId, opts)


DELETE /api/v2/scripts/{scriptId}

Delete a script.

Requires ANY permissions:

* scripter:script:delete

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

apiInstance.deleteScript(scriptId, opts)
  .then(() => {
    console.log('deleteScript returned successfully.');
  })
  .catch((err) => {
    console.log('There was a failure calling deleteScript');
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

void (no response body)

<a name="deleteScriptPage"></a>

# **&#39;String&#39;** deleteScriptPage(scriptId, pageId, opts)


DELETE /api/v2/scripts/{scriptId}/pages/{pageId}

Delete a page.

Requires ANY permissions:

* scripter:script:edit

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

apiInstance.deleteScriptPage(scriptId, pageId, opts)
  .then((data) => {
    console.log(`deleteScriptPage success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling deleteScriptPage');
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

**&#39;String&#39;**

<a name="deleteScripterFavoritetemplate"></a>

# void deleteScripterFavoritetemplate(templateId)


DELETE /api/v2/scripter/favoritetemplates/{templateId}

Unset favorite template

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

let templateId = "templateId_example"; // String | templateId

apiInstance.deleteScripterFavoritetemplate(templateId)
  .then(() => {
    console.log('deleteScripterFavoritetemplate returned successfully.');
  })
  .catch((err) => {
    console.log('There was a failure calling deleteScripterFavoritetemplate');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **templateId** | **String** | templateId |  |
{: class="table table-striped"}

### Return type

void (no response body)

<a name="deleteScripterTemplate"></a>

# void deleteScripterTemplate(templateId)


DELETE /api/v2/scripter/templates/{templateId}

Delete a composer template

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

let templateId = "templateId_example"; // String | Template ID

apiInstance.deleteScripterTemplate(templateId)
  .then(() => {
    console.log('deleteScripterTemplate returned successfully.');
  })
  .catch((err) => {
    console.log('There was a failure calling deleteScripterTemplate');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **templateId** | **String** | Template ID |  |
{: class="table table-striped"}

### Return type

void (no response body)

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

<a name="getScripterFavoritetemplates"></a>

# [ComposerTemplate] getScripterFavoritetemplates()


GET /api/v2/scripter/favoritetemplates

Get favorite templates

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

apiInstance.getScripterFavoritetemplates()
  .then((data) => {
    console.log(`getScripterFavoritetemplates success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getScripterFavoritetemplates');
    console.error(err);
  });
```

### Parameters

This endpoint does not need any parameter.


### Return type

**[ComposerTemplate]**

<a name="getScripterTemplate"></a>

# ComposerTemplate getScripterTemplate(templateId)


GET /api/v2/scripter/templates/{templateId}

Get a composer template

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

let templateId = "templateId_example"; // String | Template ID

apiInstance.getScripterTemplate(templateId)
  .then((data) => {
    console.log(`getScripterTemplate success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getScripterTemplate');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **templateId** | **String** | Template ID |  |
{: class="table table-striped"}

### Return type

**ComposerTemplate**

<a name="getScripterTemplates"></a>

# TemplateEntityListing getScripterTemplates(opts)


GET /api/v2/scripter/templates

Get the list of templates

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
  'tags': "tags_example" // String | Tags
};

apiInstance.getScripterTemplates(opts)
  .then((data) => {
    console.log(`getScripterTemplates success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getScripterTemplates');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **pageSize** | **Number** | Page size | [optional] [default to 25] |
 **pageNumber** | **Number** | Page number | [optional] [default to 1] |
 **expand** | **String** | Expand | [optional]  |
 **tags** | **String** | Tags | [optional]  |
{: class="table table-striped"}

### Return type

**TemplateEntityListing**

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

<a name="getScriptsPublishedDivisionviewVariables"></a>

# **Object** getScriptsPublishedDivisionviewVariables(scriptId, opts)


GET /api/v2/scripts/published/divisionviews/{scriptId}/variables

Get the published variables

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

let scriptId = "scriptId_example"; // String | Script ID
let opts = { 
  'input': "input_example", // String | input
  'output': "output_example", // String | output
  'type': "type_example", // String | type
  'scriptDataVersion': "scriptDataVersion_example" // String | Advanced usage - controls the data version of the script
};

apiInstance.getScriptsPublishedDivisionviewVariables(scriptId, opts)
  .then((data) => {
    console.log(`getScriptsPublishedDivisionviewVariables success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getScriptsPublishedDivisionviewVariables');
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

<a name="getScriptsTemplate"></a>

# Script getScriptsTemplate(scriptId, opts)


GET /api/v2/scripts/templates/{scriptId}

Get the template as script.

Requires ANY permissions:

* scripter:script:add

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

apiInstance.getScriptsTemplate(scriptId, opts)
  .then((data) => {
    console.log(`getScriptsTemplate success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getScriptsTemplate');
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

<a name="getScriptsTemplatePage"></a>

# Page getScriptsTemplatePage(scriptId, pageId, opts)


GET /api/v2/scripts/templates/{scriptId}/pages/{pageId}

Get the template page.

Requires ANY permissions:

* scripter:script:add

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

apiInstance.getScriptsTemplatePage(scriptId, pageId, opts)
  .then((data) => {
    console.log(`getScriptsTemplatePage success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getScriptsTemplatePage');
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

<a name="postScriptPages"></a>

# Page postScriptPages(scriptId, opts)


POST /api/v2/scripts/{scriptId}/pages

Create a page.

Requires ANY permissions:

* scripter:script:edit

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
  'scriptDataVersion': "scriptDataVersion_example", // String | Advanced usage - controls the data version of the script
  'body': {} // Object | 
};

apiInstance.postScriptPages(scriptId, opts)
  .then((data) => {
    console.log(`postScriptPages success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling postScriptPages');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **scriptId** | **String** | Script ID |  |
 **scriptDataVersion** | **String** | Advanced usage - controls the data version of the script | [optional]  |
 **body** | **Object** |  | [optional]  |
{: class="table table-striped"}

### Return type

**Page**

<a name="postScripterFavoritetemplates"></a>

# ComposerTemplate postScripterFavoritetemplates(opts)


POST /api/v2/scripter/favoritetemplates

Set a favorite template

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
  'body': {} // Object | 
};

apiInstance.postScripterFavoritetemplates(opts)
  .then((data) => {
    console.log(`postScripterFavoritetemplates success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling postScripterFavoritetemplates');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **body** | **Object** |  | [optional]  |
{: class="table table-striped"}

### Return type

**ComposerTemplate**

<a name="postScripterTemplates"></a>

# ComposerTemplate postScripterTemplates(opts)


POST /api/v2/scripter/templates

Create a user script template.

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
  'body': {} // Object | 
};

apiInstance.postScripterTemplates(opts)
  .then((data) => {
    console.log(`postScripterTemplates success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling postScripterTemplates');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **body** | **Object** |  | [optional]  |
{: class="table table-striped"}

### Return type

**ComposerTemplate**

<a name="postScripts"></a>

# Script postScripts(opts)


POST /api/v2/scripts

Create a script.

Requires ANY permissions:

* scripter:script:add

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
  'body': null // {String: Object} | 
};

apiInstance.postScripts(opts)
  .then((data) => {
    console.log(`postScripts success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling postScripts');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **body** | **{String: Object}** |  | [optional]  |
{: class="table table-striped"}

### Return type

**Script**

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

<a name="postScriptsTemplates"></a>

# ComposerTemplate postScriptsTemplates(opts)


POST /api/v2/scripts/templates

Create a template from a script.

Requires ANY permissions:

* scripter:script:add

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
  'body': {} // Object | 
};

apiInstance.postScriptsTemplates(opts)
  .then((data) => {
    console.log(`postScriptsTemplates success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling postScriptsTemplates');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **scriptDataVersion** | **String** | Advanced usage - controls the data version of the script | [optional]  |
 **body** | **Object** |  | [optional]  |
{: class="table table-striped"}

### Return type

**ComposerTemplate**

<a name="putScript"></a>

# Script putScript(scriptId, opts)


PUT /api/v2/scripts/{scriptId}

Update a script.

Requires ANY permissions:

* scripter:script:edit

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
  'scriptDataVersion': "scriptDataVersion_example", // String | Advanced usage - controls the data version of the script
  'body': {} // Object | 
};

apiInstance.putScript(scriptId, opts)
  .then((data) => {
    console.log(`putScript success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling putScript');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **scriptId** | **String** | Script ID |  |
 **scriptDataVersion** | **String** | Advanced usage - controls the data version of the script | [optional]  |
 **body** | **Object** |  | [optional]  |
{: class="table table-striped"}

### Return type

**Script**

<a name="putScriptPage"></a>

# Page putScriptPage(scriptId, pageId, opts)


PUT /api/v2/scripts/{scriptId}/pages/{pageId}

Update a page.

Requires ANY permissions:

* scripter:script:edit

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
  'scriptDataVersion': "scriptDataVersion_example", // String | Advanced usage - controls the data version of the script
  'body': {} // Object | 
};

apiInstance.putScriptPage(scriptId, pageId, opts)
  .then((data) => {
    console.log(`putScriptPage success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling putScriptPage');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **scriptId** | **String** | Script ID |  |
 **pageId** | **String** | Page ID |  |
 **scriptDataVersion** | **String** | Advanced usage - controls the data version of the script | [optional]  |
 **body** | **Object** |  | [optional]  |
{: class="table table-striped"}

### Return type

**Page**

<a name="putScripterTemplate"></a>

# ComposerTemplate putScripterTemplate(templateId, opts)


PUT /api/v2/scripter/templates/{templateId}

Update a composer template

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

let templateId = "templateId_example"; // String | Template ID
let opts = { 
  'body': {} // Object | 
};

apiInstance.putScripterTemplate(templateId, opts)
  .then((data) => {
    console.log(`putScripterTemplate success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling putScripterTemplate');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **templateId** | **String** | Template ID |  |
 **body** | **Object** |  | [optional]  |
{: class="table table-striped"}

### Return type

**ComposerTemplate**

