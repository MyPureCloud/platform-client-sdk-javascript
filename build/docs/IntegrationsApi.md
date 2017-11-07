---
title: IntegrationsApi
---
# platformClient.IntegrationsApi

All URIs are relative to *https://api.mypurecloud.com*

| Method | HTTP request | Description |
| ------------- | ------------- | ------------- |
[**deleteIntegrationsAction**](IntegrationsApi.html#deleteIntegrationsAction) | **DELETE** /api/v2/integrations/actions/{actionId} | Delete an Action
[**deleteIntegrationsActionDraft**](IntegrationsApi.html#deleteIntegrationsActionDraft) | **DELETE** /api/v2/integrations/actions/{actionId}/draft | Delete a Draft
[**getIntegrationsAction**](IntegrationsApi.html#getIntegrationsAction) | **GET** /api/v2/integrations/actions/{actionId} | Retrieves a single Action matching id.
[**getIntegrationsActionDraft**](IntegrationsApi.html#getIntegrationsActionDraft) | **GET** /api/v2/integrations/actions/{actionId}/draft | Retrieve a Draft
[**getIntegrationsActionDraftSchema**](IntegrationsApi.html#getIntegrationsActionDraftSchema) | **GET** /api/v2/integrations/actions/{actionId}/draft/schemas/{fileName} | Retrieve schema for a Draft based on filename.
[**getIntegrationsActionDraftTemplate**](IntegrationsApi.html#getIntegrationsActionDraftTemplate) | **GET** /api/v2/integrations/actions/{actionId}/draft/templates/{fileName} | Retrieve templates for a Draft based on filename.
[**getIntegrationsActionDraftValidation**](IntegrationsApi.html#getIntegrationsActionDraftValidation) | **GET** /api/v2/integrations/actions/{actionId}/draft/validation | Validate current Draft configuration.
[**getIntegrationsActionSchema**](IntegrationsApi.html#getIntegrationsActionSchema) | **GET** /api/v2/integrations/actions/{actionId}/schemas/{fileName} | Retrieve schema for an action based on filename.
[**getIntegrationsActionTemplate**](IntegrationsApi.html#getIntegrationsActionTemplate) | **GET** /api/v2/integrations/actions/{actionId}/templates/{fileName} | Retrieve text of templates for an action based on filename.
[**getIntegrationsActions**](IntegrationsApi.html#getIntegrationsActions) | **GET** /api/v2/integrations/actions | Retrieves all actions associated with filters passed in via query param.
[**getIntegrationsActionsCategories**](IntegrationsApi.html#getIntegrationsActionsCategories) | **GET** /api/v2/integrations/actions/categories | Retrieves all categories of available Actions
[**getIntegrationsActionsDrafts**](IntegrationsApi.html#getIntegrationsActionsDrafts) | **GET** /api/v2/integrations/actions/drafts | Retrieves all action drafts associated with the filters passed in via query param.
[**patchIntegrationsAction**](IntegrationsApi.html#patchIntegrationsAction) | **PATCH** /api/v2/integrations/actions/{actionId} | Patch an Action
[**patchIntegrationsActionDraft**](IntegrationsApi.html#patchIntegrationsActionDraft) | **PATCH** /api/v2/integrations/actions/{actionId}/draft | Update an existing Draft
[**postIntegrationsActionDraft**](IntegrationsApi.html#postIntegrationsActionDraft) | **POST** /api/v2/integrations/actions/{actionId}/draft | Create a new Draft from existing Action
[**postIntegrationsActionDraftPublish**](IntegrationsApi.html#postIntegrationsActionDraftPublish) | **POST** /api/v2/integrations/actions/{actionId}/draft/publish | Publish a Draft and make it the active Action configuration
[**postIntegrationsActionDraftTest**](IntegrationsApi.html#postIntegrationsActionDraftTest) | **POST** /api/v2/integrations/actions/{actionId}/draft/test | Test the execution of a draft. Responses will show execution steps broken out with intermediate results to help in debugging.
[**postIntegrationsActionExecute**](IntegrationsApi.html#postIntegrationsActionExecute) | **POST** /api/v2/integrations/actions/{actionId}/execute | Execute Action and return response from 3rd party.  Responses will follow the schemas defined on the Action for success and error.
[**postIntegrationsActionTest**](IntegrationsApi.html#postIntegrationsActionTest) | **POST** /api/v2/integrations/actions/{actionId}/test | Test the execution of an action. Responses will show execution steps broken out with intermediate results to help in debugging.
[**postIntegrationsActions**](IntegrationsApi.html#postIntegrationsActions) | **POST** /api/v2/integrations/actions | Create a new Action
[**postIntegrationsActionsDrafts**](IntegrationsApi.html#postIntegrationsActionsDrafts) | **POST** /api/v2/integrations/actions/drafts | Create a new Draft
{: class="table table-striped"}

<a name="deleteIntegrationsAction"></a>

# void deleteIntegrationsAction(actionId)

DELETE /api/v2/integrations/actions/{actionId}

Delete an Action



### Example

~~~ javascript
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Configure OAuth2 access token for authorization: PureCloud Auth
platformClient.ApiClient.instance.authentications['PureCloud Auth'].accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new platformClient.IntegrationsApi();

var actionId = "actionId_example"; // String | actionId

apiInstance.deleteIntegrationsAction(actionId)
  .then(function() {
    console.log('deleteIntegrationsAction returned successfully.');
  })
  .catch(function(error) {
  	console.log('There was a failure calling deleteIntegrationsAction');
    console.error(error);
  });

~~~

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **actionId** | **String** | actionId |  |
{: class="table table-striped"}

### Return type

void (no response body)

<a name="deleteIntegrationsActionDraft"></a>

# void deleteIntegrationsActionDraft(actionId)

DELETE /api/v2/integrations/actions/{actionId}/draft

Delete a Draft



### Example

~~~ javascript
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Configure OAuth2 access token for authorization: PureCloud Auth
platformClient.ApiClient.instance.authentications['PureCloud Auth'].accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new platformClient.IntegrationsApi();

var actionId = "actionId_example"; // String | actionId

apiInstance.deleteIntegrationsActionDraft(actionId)
  .then(function() {
    console.log('deleteIntegrationsActionDraft returned successfully.');
  })
  .catch(function(error) {
  	console.log('There was a failure calling deleteIntegrationsActionDraft');
    console.error(error);
  });

~~~

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **actionId** | **String** | actionId |  |
{: class="table table-striped"}

### Return type

void (no response body)

<a name="getIntegrationsAction"></a>

# Action getIntegrationsAction(actionId, opts)

GET /api/v2/integrations/actions/{actionId}

Retrieves a single Action matching id.



### Example

~~~ javascript
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Configure OAuth2 access token for authorization: PureCloud Auth
platformClient.ApiClient.instance.authentications['PureCloud Auth'].accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new platformClient.IntegrationsApi();

var actionId = "actionId_example"; // String | actionId

var opts = { 
  'expand': "expand_example", // String | Indicates fields of the response which should be expanded.
  'includeConfig': false // Boolean | Show config when available
};
apiInstance.getIntegrationsAction(actionId, opts)
  .then(function(data) {
    console.log(`getIntegrationsAction success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch(function(error) {
  	console.log('There was a failure calling getIntegrationsAction');
    console.error(error);
  });

~~~

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **actionId** | **String** | actionId |  |
 **expand** | **String** | Indicates fields of the response which should be expanded. | [optional] <br />**Values**: contract |
 **includeConfig** | **Boolean** | Show config when available | [optional] [default to false] |
{: class="table table-striped"}

### Return type

**Action**

<a name="getIntegrationsActionDraft"></a>

# Action getIntegrationsActionDraft(actionId, opts)

GET /api/v2/integrations/actions/{actionId}/draft

Retrieve a Draft



### Example

~~~ javascript
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Configure OAuth2 access token for authorization: PureCloud Auth
platformClient.ApiClient.instance.authentications['PureCloud Auth'].accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new platformClient.IntegrationsApi();

var actionId = "actionId_example"; // String | actionId

var opts = { 
  'expand': "expand_example", // String | Indicates fields of the response which should be expanded.
  'includeConfig': false // Boolean | Show config when available
};
apiInstance.getIntegrationsActionDraft(actionId, opts)
  .then(function(data) {
    console.log(`getIntegrationsActionDraft success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch(function(error) {
  	console.log('There was a failure calling getIntegrationsActionDraft');
    console.error(error);
  });

~~~

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **actionId** | **String** | actionId |  |
 **expand** | **String** | Indicates fields of the response which should be expanded. | [optional] <br />**Values**: contract |
 **includeConfig** | **Boolean** | Show config when available | [optional] [default to false] |
{: class="table table-striped"}

### Return type

**Action**

<a name="getIntegrationsActionDraftSchema"></a>

# JsonSchemaDocument getIntegrationsActionDraftSchema(actionId, fileName)

GET /api/v2/integrations/actions/{actionId}/draft/schemas/{fileName}

Retrieve schema for a Draft based on filename.



### Example

~~~ javascript
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Configure OAuth2 access token for authorization: PureCloud Auth
platformClient.ApiClient.instance.authentications['PureCloud Auth'].accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new platformClient.IntegrationsApi();

var actionId = "actionId_example"; // String | actionId

var fileName = "fileName_example"; // String | Name of schema file to be retrieved for this draft.

apiInstance.getIntegrationsActionDraftSchema(actionId, fileName)
  .then(function(data) {
    console.log(`getIntegrationsActionDraftSchema success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch(function(error) {
  	console.log('There was a failure calling getIntegrationsActionDraftSchema');
    console.error(error);
  });

~~~

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **actionId** | **String** | actionId |  |
 **fileName** | **String** | Name of schema file to be retrieved for this draft. |  |
{: class="table table-striped"}

### Return type

**JsonSchemaDocument**

<a name="getIntegrationsActionDraftTemplate"></a>

# **&#39;String&#39;** getIntegrationsActionDraftTemplate(actionId, fileName)

GET /api/v2/integrations/actions/{actionId}/draft/templates/{fileName}

Retrieve templates for a Draft based on filename.



### Example

~~~ javascript
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Configure OAuth2 access token for authorization: PureCloud Auth
platformClient.ApiClient.instance.authentications['PureCloud Auth'].accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new platformClient.IntegrationsApi();

var actionId = "actionId_example"; // String | actionId

var fileName = "fileName_example"; // String | Name of template file to be retrieved for this action draft.

apiInstance.getIntegrationsActionDraftTemplate(actionId, fileName)
  .then(function(data) {
    console.log(`getIntegrationsActionDraftTemplate success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch(function(error) {
  	console.log('There was a failure calling getIntegrationsActionDraftTemplate');
    console.error(error);
  });

~~~

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **actionId** | **String** | actionId |  |
 **fileName** | **String** | Name of template file to be retrieved for this action draft. |  |
{: class="table table-striped"}

### Return type

**&#39;String&#39;**

<a name="getIntegrationsActionDraftValidation"></a>

# DraftValidationResult getIntegrationsActionDraftValidation(actionId)

GET /api/v2/integrations/actions/{actionId}/draft/validation

Validate current Draft configuration.



### Example

~~~ javascript
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Configure OAuth2 access token for authorization: PureCloud Auth
platformClient.ApiClient.instance.authentications['PureCloud Auth'].accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new platformClient.IntegrationsApi();

var actionId = "actionId_example"; // String | actionId

apiInstance.getIntegrationsActionDraftValidation(actionId)
  .then(function(data) {
    console.log(`getIntegrationsActionDraftValidation success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch(function(error) {
  	console.log('There was a failure calling getIntegrationsActionDraftValidation');
    console.error(error);
  });

~~~

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **actionId** | **String** | actionId |  |
{: class="table table-striped"}

### Return type

**DraftValidationResult**

<a name="getIntegrationsActionSchema"></a>

# JsonSchemaDocument getIntegrationsActionSchema(actionId, fileName)

GET /api/v2/integrations/actions/{actionId}/schemas/{fileName}

Retrieve schema for an action based on filename.



### Example

~~~ javascript
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Configure OAuth2 access token for authorization: PureCloud Auth
platformClient.ApiClient.instance.authentications['PureCloud Auth'].accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new platformClient.IntegrationsApi();

var actionId = "actionId_example"; // String | actionId

var fileName = "fileName_example"; // String | Name of schema file to be retrieved for this action.

apiInstance.getIntegrationsActionSchema(actionId, fileName)
  .then(function(data) {
    console.log(`getIntegrationsActionSchema success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch(function(error) {
  	console.log('There was a failure calling getIntegrationsActionSchema');
    console.error(error);
  });

~~~

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **actionId** | **String** | actionId |  |
 **fileName** | **String** | Name of schema file to be retrieved for this action. |  |
{: class="table table-striped"}

### Return type

**JsonSchemaDocument**

<a name="getIntegrationsActionTemplate"></a>

# **&#39;String&#39;** getIntegrationsActionTemplate(actionId, fileName)

GET /api/v2/integrations/actions/{actionId}/templates/{fileName}

Retrieve text of templates for an action based on filename.



### Example

~~~ javascript
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Configure OAuth2 access token for authorization: PureCloud Auth
platformClient.ApiClient.instance.authentications['PureCloud Auth'].accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new platformClient.IntegrationsApi();

var actionId = "actionId_example"; // String | actionId

var fileName = "fileName_example"; // String | Name of template file to be retrieved for this action.

apiInstance.getIntegrationsActionTemplate(actionId, fileName)
  .then(function(data) {
    console.log(`getIntegrationsActionTemplate success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch(function(error) {
  	console.log('There was a failure calling getIntegrationsActionTemplate');
    console.error(error);
  });

~~~

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **actionId** | **String** | actionId |  |
 **fileName** | **String** | Name of template file to be retrieved for this action. |  |
{: class="table table-striped"}

### Return type

**&#39;String&#39;**

<a name="getIntegrationsActions"></a>

# ActionEntityListing getIntegrationsActions(opts)

GET /api/v2/integrations/actions

Retrieves all actions associated with filters passed in via query param.



### Example

~~~ javascript
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Configure OAuth2 access token for authorization: PureCloud Auth
platformClient.ApiClient.instance.authentications['PureCloud Auth'].accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new platformClient.IntegrationsApi();

var opts = { 
  'category': "category_example", // String | Filter by category name
  'secure': "secure_example", // String | Filter to only include secure actions. True will only include actions marked secured. False will include only unsecure actions. Do not use filter if you want all Actions.
  'includeAuthActions': "includeAuthActions_example", // String | Whether or not to include authentication actions in the response. These actions are not directly executable. Some integrations create them and will run them as needed to refresh authentication information for other actions.
  'pageSize': 25, // Number | The total page size requested
  'pageNumber': 1, // Number | The page number requested
  'sortBy': "sortBy_example", // String | variable name requested to sort by
  'expand': null, // [Object] | variable name requested by expand list
  'nextPage': "nextPage_example", // String | next page token
  'previousPage': "previousPage_example" // String | Previous page token
};
apiInstance.getIntegrationsActions(opts)
  .then(function(data) {
    console.log(`getIntegrationsActions success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch(function(error) {
  	console.log('There was a failure calling getIntegrationsActions');
    console.error(error);
  });

~~~

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **category** | **String** | Filter by category name | [optional]  |
 **secure** | **String** | Filter to only include secure actions. True will only include actions marked secured. False will include only unsecure actions. Do not use filter if you want all Actions. | [optional] <br />**Values**: true, false |
 **includeAuthActions** | **String** | Whether or not to include authentication actions in the response. These actions are not directly executable. Some integrations create them and will run them as needed to refresh authentication information for other actions. | [optional] <br />**Values**: true, false |
 **pageSize** | **Number** | The total page size requested | [optional] [default to 25] |
 **pageNumber** | **Number** | The page number requested | [optional] [default to 1] |
 **sortBy** | **String** | variable name requested to sort by | [optional]  |
 **expand** | **[Object]** | variable name requested by expand list | [optional]  |
 **nextPage** | **String** | next page token | [optional]  |
 **previousPage** | **String** | Previous page token | [optional]  |
{: class="table table-striped"}

### Return type

**ActionEntityListing**

<a name="getIntegrationsActionsCategories"></a>

# CategoryEntityListing getIntegrationsActionsCategories(opts)

GET /api/v2/integrations/actions/categories

Retrieves all categories of available Actions



### Example

~~~ javascript
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Configure OAuth2 access token for authorization: PureCloud Auth
platformClient.ApiClient.instance.authentications['PureCloud Auth'].accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new platformClient.IntegrationsApi();

var opts = { 
  'secure': "secure_example", // String | Filter to only include/exclude Action categories based on if they are considered secure. True will only include categories with Actions marked secured. False will only include categories of unsecured Actions.
  'pageSize': 25, // Number | The total page size requested
  'pageNumber': 1, // Number | The page number requested
  'sortBy': "sortBy_example", // String | variable name requested to sort by
  'expand': null, // [Object] | variable name requested by expand list
  'nextPage': "nextPage_example", // String | next page token
  'previousPage': "previousPage_example" // String | Previous page token
};
apiInstance.getIntegrationsActionsCategories(opts)
  .then(function(data) {
    console.log(`getIntegrationsActionsCategories success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch(function(error) {
  	console.log('There was a failure calling getIntegrationsActionsCategories');
    console.error(error);
  });

~~~

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **secure** | **String** | Filter to only include/exclude Action categories based on if they are considered secure. True will only include categories with Actions marked secured. False will only include categories of unsecured Actions. | [optional] <br />**Values**: true, false |
 **pageSize** | **Number** | The total page size requested | [optional] [default to 25] |
 **pageNumber** | **Number** | The page number requested | [optional] [default to 1] |
 **sortBy** | **String** | variable name requested to sort by | [optional]  |
 **expand** | **[Object]** | variable name requested by expand list | [optional]  |
 **nextPage** | **String** | next page token | [optional]  |
 **previousPage** | **String** | Previous page token | [optional]  |
{: class="table table-striped"}

### Return type

**CategoryEntityListing**

<a name="getIntegrationsActionsDrafts"></a>

# ActionEntityListing getIntegrationsActionsDrafts(opts)

GET /api/v2/integrations/actions/drafts

Retrieves all action drafts associated with the filters passed in via query param.



### Example

~~~ javascript
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Configure OAuth2 access token for authorization: PureCloud Auth
platformClient.ApiClient.instance.authentications['PureCloud Auth'].accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new platformClient.IntegrationsApi();

var opts = { 
  'category': "category_example", // String | Filter by category name
  'secure': "secure_example", // String | Filter to only include secure actions. True will only include actions marked secured. False will include only unsecure actions. Do not use filter if you want all Actions.
  'includeAuthActions': "includeAuthActions_example", // String | Whether or not to include authentication actions in the response. These actions are not directly executable. Some integrations create them and will run them as needed to refresh authentication information for other actions.
  'pageSize': 25, // Number | The total page size requested
  'pageNumber': 1, // Number | The page number requested
  'sortBy': "sortBy_example", // String | variable name requested to sort by
  'expand': null, // [Object] | variable name requested by expand list
  'nextPage': "nextPage_example", // String | next page token
  'previousPage': "previousPage_example" // String | Previous page token
};
apiInstance.getIntegrationsActionsDrafts(opts)
  .then(function(data) {
    console.log(`getIntegrationsActionsDrafts success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch(function(error) {
  	console.log('There was a failure calling getIntegrationsActionsDrafts');
    console.error(error);
  });

~~~

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **category** | **String** | Filter by category name | [optional]  |
 **secure** | **String** | Filter to only include secure actions. True will only include actions marked secured. False will include only unsecure actions. Do not use filter if you want all Actions. | [optional] <br />**Values**: true, false |
 **includeAuthActions** | **String** | Whether or not to include authentication actions in the response. These actions are not directly executable. Some integrations create them and will run them as needed to refresh authentication information for other actions. | [optional] <br />**Values**: true, false |
 **pageSize** | **Number** | The total page size requested | [optional] [default to 25] |
 **pageNumber** | **Number** | The page number requested | [optional] [default to 1] |
 **sortBy** | **String** | variable name requested to sort by | [optional]  |
 **expand** | **[Object]** | variable name requested by expand list | [optional]  |
 **nextPage** | **String** | next page token | [optional]  |
 **previousPage** | **String** | Previous page token | [optional]  |
{: class="table table-striped"}

### Return type

**ActionEntityListing**

<a name="patchIntegrationsAction"></a>

# Action patchIntegrationsAction(actionId, body)

PATCH /api/v2/integrations/actions/{actionId}

Patch an Action



### Example

~~~ javascript
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Configure OAuth2 access token for authorization: PureCloud Auth
platformClient.ApiClient.instance.authentications['PureCloud Auth'].accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new platformClient.IntegrationsApi();

var actionId = "actionId_example"; // String | actionId

var body = {}; // Object | Input used to patch the Action.

apiInstance.patchIntegrationsAction(actionId, body)
  .then(function(data) {
    console.log(`patchIntegrationsAction success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch(function(error) {
  	console.log('There was a failure calling patchIntegrationsAction');
    console.error(error);
  });

~~~

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **actionId** | **String** | actionId |  |
 **body** | **Object** | Input used to patch the Action. |  |
{: class="table table-striped"}

### Return type

**Action**

<a name="patchIntegrationsActionDraft"></a>

# Action patchIntegrationsActionDraft(actionId, body)

PATCH /api/v2/integrations/actions/{actionId}/draft

Update an existing Draft



### Example

~~~ javascript
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Configure OAuth2 access token for authorization: PureCloud Auth
platformClient.ApiClient.instance.authentications['PureCloud Auth'].accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new platformClient.IntegrationsApi();

var actionId = "actionId_example"; // String | actionId

var body = {}; // Object | Input used to patch the Action Draft.

apiInstance.patchIntegrationsActionDraft(actionId, body)
  .then(function(data) {
    console.log(`patchIntegrationsActionDraft success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch(function(error) {
  	console.log('There was a failure calling patchIntegrationsActionDraft');
    console.error(error);
  });

~~~

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **actionId** | **String** | actionId |  |
 **body** | **Object** | Input used to patch the Action Draft. |  |
{: class="table table-striped"}

### Return type

**Action**

<a name="postIntegrationsActionDraft"></a>

# Action postIntegrationsActionDraft(actionId)

POST /api/v2/integrations/actions/{actionId}/draft

Create a new Draft from existing Action



### Example

~~~ javascript
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Configure OAuth2 access token for authorization: PureCloud Auth
platformClient.ApiClient.instance.authentications['PureCloud Auth'].accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new platformClient.IntegrationsApi();

var actionId = "actionId_example"; // String | actionId

apiInstance.postIntegrationsActionDraft(actionId)
  .then(function(data) {
    console.log(`postIntegrationsActionDraft success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch(function(error) {
  	console.log('There was a failure calling postIntegrationsActionDraft');
    console.error(error);
  });

~~~

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **actionId** | **String** | actionId |  |
{: class="table table-striped"}

### Return type

**Action**

<a name="postIntegrationsActionDraftPublish"></a>

# Action postIntegrationsActionDraftPublish(actionId, body)

POST /api/v2/integrations/actions/{actionId}/draft/publish

Publish a Draft and make it the active Action configuration



### Example

~~~ javascript
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Configure OAuth2 access token for authorization: PureCloud Auth
platformClient.ApiClient.instance.authentications['PureCloud Auth'].accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new platformClient.IntegrationsApi();

var actionId = "actionId_example"; // String | actionId

var body = {}; // Object | Input used to patch the Action.

apiInstance.postIntegrationsActionDraftPublish(actionId, body)
  .then(function(data) {
    console.log(`postIntegrationsActionDraftPublish success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch(function(error) {
  	console.log('There was a failure calling postIntegrationsActionDraftPublish');
    console.error(error);
  });

~~~

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **actionId** | **String** | actionId |  |
 **body** | **Object** | Input used to patch the Action. |  |
{: class="table table-striped"}

### Return type

**Action**

<a name="postIntegrationsActionDraftTest"></a>

# TestExecutionResult postIntegrationsActionDraftTest(actionId, body)

POST /api/v2/integrations/actions/{actionId}/draft/test

Test the execution of a draft. Responses will show execution steps broken out with intermediate results to help in debugging.



### Example

~~~ javascript
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Configure OAuth2 access token for authorization: PureCloud Auth
platformClient.ApiClient.instance.authentications['PureCloud Auth'].accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new platformClient.IntegrationsApi();

var actionId = "actionId_example"; // String | actionId

var body = null; // Object | Map of parameters used for variable substitution.

apiInstance.postIntegrationsActionDraftTest(actionId, body)
  .then(function(data) {
    console.log(`postIntegrationsActionDraftTest success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch(function(error) {
  	console.log('There was a failure calling postIntegrationsActionDraftTest');
    console.error(error);
  });

~~~

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **actionId** | **String** | actionId |  |
 **body** | **Object** | Map of parameters used for variable substitution. |  |
{: class="table table-striped"}

### Return type

**TestExecutionResult**

<a name="postIntegrationsActionExecute"></a>

# **Object** postIntegrationsActionExecute(actionId, body)

POST /api/v2/integrations/actions/{actionId}/execute

Execute Action and return response from 3rd party.  Responses will follow the schemas defined on the Action for success and error.



### Example

~~~ javascript
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Configure OAuth2 access token for authorization: PureCloud Auth
platformClient.ApiClient.instance.authentications['PureCloud Auth'].accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new platformClient.IntegrationsApi();

var actionId = "actionId_example"; // String | actionId

var body = null; // Object | Map of parameters used for variable substitution.

apiInstance.postIntegrationsActionExecute(actionId, body)
  .then(function(data) {
    console.log(`postIntegrationsActionExecute success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch(function(error) {
  	console.log('There was a failure calling postIntegrationsActionExecute');
    console.error(error);
  });

~~~

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **actionId** | **String** | actionId |  |
 **body** | **Object** | Map of parameters used for variable substitution. |  |
{: class="table table-striped"}

### Return type

**Object**

<a name="postIntegrationsActionTest"></a>

# TestExecutionResult postIntegrationsActionTest(actionId, body)

POST /api/v2/integrations/actions/{actionId}/test

Test the execution of an action. Responses will show execution steps broken out with intermediate results to help in debugging.



### Example

~~~ javascript
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Configure OAuth2 access token for authorization: PureCloud Auth
platformClient.ApiClient.instance.authentications['PureCloud Auth'].accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new platformClient.IntegrationsApi();

var actionId = "actionId_example"; // String | actionId

var body = null; // Object | Map of parameters used for variable substitution.

apiInstance.postIntegrationsActionTest(actionId, body)
  .then(function(data) {
    console.log(`postIntegrationsActionTest success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch(function(error) {
  	console.log('There was a failure calling postIntegrationsActionTest');
    console.error(error);
  });

~~~

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **actionId** | **String** | actionId |  |
 **body** | **Object** | Map of parameters used for variable substitution. |  |
{: class="table table-striped"}

### Return type

**TestExecutionResult**

<a name="postIntegrationsActions"></a>

# Action postIntegrationsActions(body)

POST /api/v2/integrations/actions

Create a new Action



### Example

~~~ javascript
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Configure OAuth2 access token for authorization: PureCloud Auth
platformClient.ApiClient.instance.authentications['PureCloud Auth'].accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new platformClient.IntegrationsApi();

var body = {}; // Object | Input used to create Action.

apiInstance.postIntegrationsActions(body)
  .then(function(data) {
    console.log(`postIntegrationsActions success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch(function(error) {
  	console.log('There was a failure calling postIntegrationsActions');
    console.error(error);
  });

~~~

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **body** | **Object** | Input used to create Action. |  |
{: class="table table-striped"}

### Return type

**Action**

<a name="postIntegrationsActionsDrafts"></a>

# Action postIntegrationsActionsDrafts(body)

POST /api/v2/integrations/actions/drafts

Create a new Draft



### Example

~~~ javascript
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Configure OAuth2 access token for authorization: PureCloud Auth
platformClient.ApiClient.instance.authentications['PureCloud Auth'].accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new platformClient.IntegrationsApi();

var body = {}; // Object | Input used to create Action Draft.

apiInstance.postIntegrationsActionsDrafts(body)
  .then(function(data) {
    console.log(`postIntegrationsActionsDrafts success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch(function(error) {
  	console.log('There was a failure calling postIntegrationsActionsDrafts');
    console.error(error);
  });

~~~

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **body** | **Object** | Input used to create Action Draft. |  |
{: class="table table-striped"}

### Return type

**Action**

