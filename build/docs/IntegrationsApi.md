---
title: IntegrationsApi
---
# platformClient.IntegrationsApi

All URIs are relative to *https://api.mypurecloud.com*

| Method | HTTP request | Description |
| ------------- | ------------- | ------------- |
[**deleteIntegration**](IntegrationsApi.html#deleteIntegration) | **DELETE** /api/v2/integrations/{integrationId} | Delete integration.
[**deleteIntegrationsAction**](IntegrationsApi.html#deleteIntegrationsAction) | **DELETE** /api/v2/integrations/actions/{actionId} | Delete an Action
[**deleteIntegrationsActionDraft**](IntegrationsApi.html#deleteIntegrationsActionDraft) | **DELETE** /api/v2/integrations/actions/{actionId}/draft | Delete a Draft
[**deleteIntegrationsCredential**](IntegrationsApi.html#deleteIntegrationsCredential) | **DELETE** /api/v2/integrations/credentials/{credentialId} | Delete a set of credentials
[**getIntegration**](IntegrationsApi.html#getIntegration) | **GET** /api/v2/integrations/{integrationId} | Get integration.
[**getIntegrationConfigCurrent**](IntegrationsApi.html#getIntegrationConfigCurrent) | **GET** /api/v2/integrations/{integrationId}/config/current | Get integration configuration.
[**getIntegrations**](IntegrationsApi.html#getIntegrations) | **GET** /api/v2/integrations | List integrations
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
[**getIntegrationsClientapps**](IntegrationsApi.html#getIntegrationsClientapps) | **GET** /api/v2/integrations/clientapps | List permitted client app integrations for the logged in user
[**getIntegrationsCredential**](IntegrationsApi.html#getIntegrationsCredential) | **GET** /api/v2/integrations/credentials/{credentialId} | Get a single credential with sensitive fields redacted
[**getIntegrationsCredentials**](IntegrationsApi.html#getIntegrationsCredentials) | **GET** /api/v2/integrations/credentials | List multiple sets of credentials
[**getIntegrationsCredentialsTypes**](IntegrationsApi.html#getIntegrationsCredentialsTypes) | **GET** /api/v2/integrations/credentials/types | List all credential types
[**getIntegrationsEventlog**](IntegrationsApi.html#getIntegrationsEventlog) | **GET** /api/v2/integrations/eventlog | List all events
[**getIntegrationsEventlogEventId**](IntegrationsApi.html#getIntegrationsEventlogEventId) | **GET** /api/v2/integrations/eventlog/{eventId} | Get a single event
[**getIntegrationsSpeechDialogflowAgent**](IntegrationsApi.html#getIntegrationsSpeechDialogflowAgent) | **GET** /api/v2/integrations/speech/dialogflow/agents/{agentId} | Get details about a Dialogflow agent
[**getIntegrationsSpeechDialogflowAgents**](IntegrationsApi.html#getIntegrationsSpeechDialogflowAgents) | **GET** /api/v2/integrations/speech/dialogflow/agents | Get a list of Dialogflow agents in the customers&#39; Google accounts
[**getIntegrationsSpeechLexBotAlias**](IntegrationsApi.html#getIntegrationsSpeechLexBotAlias) | **GET** /api/v2/integrations/speech/lex/bot/alias/{aliasId} | Get details about a Lex bot alias
[**getIntegrationsSpeechLexBotBotIdAliases**](IntegrationsApi.html#getIntegrationsSpeechLexBotBotIdAliases) | **GET** /api/v2/integrations/speech/lex/bot/{botId}/aliases | Get a list of aliases for a bot in the customer&#39;s AWS accounts
[**getIntegrationsSpeechLexBots**](IntegrationsApi.html#getIntegrationsSpeechLexBots) | **GET** /api/v2/integrations/speech/lex/bots | Get a list of Lex bots in the customers&#39; AWS accounts
[**getIntegrationsSpeechTtsEngine**](IntegrationsApi.html#getIntegrationsSpeechTtsEngine) | **GET** /api/v2/integrations/speech/tts/engines/{engineId} | Get details about a TTS engine
[**getIntegrationsSpeechTtsEngineVoice**](IntegrationsApi.html#getIntegrationsSpeechTtsEngineVoice) | **GET** /api/v2/integrations/speech/tts/engines/{engineId}/voices/{voiceId} | Get details about a specific voice for a TTS engine
[**getIntegrationsSpeechTtsEngineVoices**](IntegrationsApi.html#getIntegrationsSpeechTtsEngineVoices) | **GET** /api/v2/integrations/speech/tts/engines/{engineId}/voices | Get a list of voices for a TTS engine
[**getIntegrationsSpeechTtsEngines**](IntegrationsApi.html#getIntegrationsSpeechTtsEngines) | **GET** /api/v2/integrations/speech/tts/engines | Get a list of TTS engines enabled for org
[**getIntegrationsSpeechTtsSettings**](IntegrationsApi.html#getIntegrationsSpeechTtsSettings) | **GET** /api/v2/integrations/speech/tts/settings | Get TTS settings for an org
[**getIntegrationsType**](IntegrationsApi.html#getIntegrationsType) | **GET** /api/v2/integrations/types/{typeId} | Get integration type.
[**getIntegrationsTypeConfigschema**](IntegrationsApi.html#getIntegrationsTypeConfigschema) | **GET** /api/v2/integrations/types/{typeId}/configschemas/{configType} | Get properties config schema for an integration type.
[**getIntegrationsTypes**](IntegrationsApi.html#getIntegrationsTypes) | **GET** /api/v2/integrations/types | List integration types
[**getIntegrationsUserapps**](IntegrationsApi.html#getIntegrationsUserapps) | **GET** /api/v2/integrations/userapps | List permitted user app integrations for the logged in user
[**patchIntegration**](IntegrationsApi.html#patchIntegration) | **PATCH** /api/v2/integrations/{integrationId} | Update an integration.
[**patchIntegrationsAction**](IntegrationsApi.html#patchIntegrationsAction) | **PATCH** /api/v2/integrations/actions/{actionId} | Patch an Action
[**patchIntegrationsActionDraft**](IntegrationsApi.html#patchIntegrationsActionDraft) | **PATCH** /api/v2/integrations/actions/{actionId}/draft | Update an existing Draft
[**postIntegrations**](IntegrationsApi.html#postIntegrations) | **POST** /api/v2/integrations | Create an integration.
[**postIntegrationsActionDraft**](IntegrationsApi.html#postIntegrationsActionDraft) | **POST** /api/v2/integrations/actions/{actionId}/draft | Create a new Draft from existing Action
[**postIntegrationsActionDraftPublish**](IntegrationsApi.html#postIntegrationsActionDraftPublish) | **POST** /api/v2/integrations/actions/{actionId}/draft/publish | Publish a Draft and make it the active Action configuration
[**postIntegrationsActionDraftTest**](IntegrationsApi.html#postIntegrationsActionDraftTest) | **POST** /api/v2/integrations/actions/{actionId}/draft/test | Test the execution of a draft. Responses will show execution steps broken out with intermediate results to help in debugging.
[**postIntegrationsActionExecute**](IntegrationsApi.html#postIntegrationsActionExecute) | **POST** /api/v2/integrations/actions/{actionId}/execute | Execute Action and return response from 3rd party.  Responses will follow the schemas defined on the Action for success and error.
[**postIntegrationsActionTest**](IntegrationsApi.html#postIntegrationsActionTest) | **POST** /api/v2/integrations/actions/{actionId}/test | Test the execution of an action. Responses will show execution steps broken out with intermediate results to help in debugging.
[**postIntegrationsActions**](IntegrationsApi.html#postIntegrationsActions) | **POST** /api/v2/integrations/actions | Create a new Action
[**postIntegrationsActionsDrafts**](IntegrationsApi.html#postIntegrationsActionsDrafts) | **POST** /api/v2/integrations/actions/drafts | Create a new Draft
[**postIntegrationsCredentials**](IntegrationsApi.html#postIntegrationsCredentials) | **POST** /api/v2/integrations/credentials | Create a set of credentials
[**postIntegrationsWorkforcemanagementVendorconnection**](IntegrationsApi.html#postIntegrationsWorkforcemanagementVendorconnection) | **POST** /api/v2/integrations/workforcemanagement/vendorconnection | Add a vendor connection
[**putIntegrationConfigCurrent**](IntegrationsApi.html#putIntegrationConfigCurrent) | **PUT** /api/v2/integrations/{integrationId}/config/current | Update integration configuration.
[**putIntegrationsCredential**](IntegrationsApi.html#putIntegrationsCredential) | **PUT** /api/v2/integrations/credentials/{credentialId} | Update a set of credentials
[**putIntegrationsSpeechTtsSettings**](IntegrationsApi.html#putIntegrationsSpeechTtsSettings) | **PUT** /api/v2/integrations/speech/tts/settings | Update TTS settings for an org
{: class="table table-striped"}

<a name="deleteIntegration"></a>

# Integration deleteIntegration(integrationId)



DELETE /api/v2/integrations/{integrationId}

Delete integration.



Requires NO permissions: 


### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.IntegrationsApi();

let integrationId = "integrationId_example"; // String | Integration Id

apiInstance.deleteIntegration(integrationId)
  .then((data) => {
    console.log(`deleteIntegration success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling deleteIntegration');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **integrationId** | **String** | Integration Id |  |
{: class="table table-striped"}

### Return type

**Integration**

<a name="deleteIntegrationsAction"></a>

# void deleteIntegrationsAction(actionId)



DELETE /api/v2/integrations/actions/{actionId}

Delete an Action



Requires ANY permissions: 

* integrations:action:delete

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.IntegrationsApi();

let actionId = "actionId_example"; // String | actionId

apiInstance.deleteIntegrationsAction(actionId)
  .then(() => {
    console.log('deleteIntegrationsAction returned successfully.');
  })
  .catch((err) => {
    console.log('There was a failure calling deleteIntegrationsAction');
    console.error(err);
  });
```

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



Requires ANY permissions: 

* integrations:action:delete

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.IntegrationsApi();

let actionId = "actionId_example"; // String | actionId

apiInstance.deleteIntegrationsActionDraft(actionId)
  .then(() => {
    console.log('deleteIntegrationsActionDraft returned successfully.');
  })
  .catch((err) => {
    console.log('There was a failure calling deleteIntegrationsActionDraft');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **actionId** | **String** | actionId |  |
{: class="table table-striped"}

### Return type

void (no response body)

<a name="deleteIntegrationsCredential"></a>

# void deleteIntegrationsCredential(credentialId)



DELETE /api/v2/integrations/credentials/{credentialId}

Delete a set of credentials



Requires NO permissions: 


### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.IntegrationsApi();

let credentialId = "credentialId_example"; // String | Credential ID

apiInstance.deleteIntegrationsCredential(credentialId)
  .then(() => {
    console.log('deleteIntegrationsCredential returned successfully.');
  })
  .catch((err) => {
    console.log('There was a failure calling deleteIntegrationsCredential');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **credentialId** | **String** | Credential ID |  |
{: class="table table-striped"}

### Return type

void (no response body)

<a name="getIntegration"></a>

# Integration getIntegration(integrationId, opts)



GET /api/v2/integrations/{integrationId}

Get integration.



Requires NO permissions: 


### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.IntegrationsApi();

let integrationId = "integrationId_example"; // String | Integration Id
let opts = { 
  'pageSize': 25, // Number | The total page size requested
  'pageNumber': 1, // Number | The page number requested
  'sortBy': "sortBy_example", // String | variable name requested to sort by
  'expand': ["expand_example"], // [String] | variable name requested by expand list
  'nextPage': "nextPage_example", // String | next page token
  'previousPage': "previousPage_example" // String | Previous page token
};

apiInstance.getIntegration(integrationId, opts)
  .then((data) => {
    console.log(`getIntegration success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getIntegration');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **integrationId** | **String** | Integration Id |  |
 **pageSize** | **Number** | The total page size requested | [optional] [default to 25] |
 **pageNumber** | **Number** | The page number requested | [optional] [default to 1] |
 **sortBy** | **String** | variable name requested to sort by | [optional]  |
 **expand** | **[String]** | variable name requested by expand list | [optional]  |
 **nextPage** | **String** | next page token | [optional]  |
 **previousPage** | **String** | Previous page token | [optional]  |
{: class="table table-striped"}

### Return type

**Integration**

<a name="getIntegrationConfigCurrent"></a>

# IntegrationConfiguration getIntegrationConfigCurrent(integrationId)



GET /api/v2/integrations/{integrationId}/config/current

Get integration configuration.



Requires NO permissions: 


### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.IntegrationsApi();

let integrationId = "integrationId_example"; // String | Integration Id

apiInstance.getIntegrationConfigCurrent(integrationId)
  .then((data) => {
    console.log(`getIntegrationConfigCurrent success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getIntegrationConfigCurrent');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **integrationId** | **String** | Integration Id |  |
{: class="table table-striped"}

### Return type

**IntegrationConfiguration**

<a name="getIntegrations"></a>

# IntegrationEntityListing getIntegrations(opts)



GET /api/v2/integrations

List integrations



Requires NO permissions: 


### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.IntegrationsApi();

let opts = { 
  'pageSize': 25, // Number | The total page size requested
  'pageNumber': 1, // Number | The page number requested
  'sortBy': "sortBy_example", // String | variable name requested to sort by
  'expand': ["expand_example"], // [String] | variable name requested by expand list
  'nextPage': "nextPage_example", // String | next page token
  'previousPage': "previousPage_example" // String | Previous page token
};

apiInstance.getIntegrations(opts)
  .then((data) => {
    console.log(`getIntegrations success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getIntegrations');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **pageSize** | **Number** | The total page size requested | [optional] [default to 25] |
 **pageNumber** | **Number** | The page number requested | [optional] [default to 1] |
 **sortBy** | **String** | variable name requested to sort by | [optional]  |
 **expand** | **[String]** | variable name requested by expand list | [optional]  |
 **nextPage** | **String** | next page token | [optional]  |
 **previousPage** | **String** | Previous page token | [optional]  |
{: class="table table-striped"}

### Return type

**IntegrationEntityListing**

<a name="getIntegrationsAction"></a>

# Action getIntegrationsAction(actionId, opts)



GET /api/v2/integrations/actions/{actionId}

Retrieves a single Action matching id.



Requires ANY permissions: 

* integrations:action:view
* bridge:actions:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.IntegrationsApi();

let actionId = "actionId_example"; // String | actionId
let opts = { 
  'expand': "expand_example", // String | Indicates a field in the response which should be expanded.
  'includeConfig': false // Boolean | Return config in response.
};

apiInstance.getIntegrationsAction(actionId, opts)
  .then((data) => {
    console.log(`getIntegrationsAction success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getIntegrationsAction');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **actionId** | **String** | actionId |  |
 **expand** | **String** | Indicates a field in the response which should be expanded. | [optional] <br />**Values**: contract |
 **includeConfig** | **Boolean** | Return config in response. | [optional] [default to false] |
{: class="table table-striped"}

### Return type

**Action**

<a name="getIntegrationsActionDraft"></a>

# Action getIntegrationsActionDraft(actionId, opts)



GET /api/v2/integrations/actions/{actionId}/draft

Retrieve a Draft



Requires ANY permissions: 

* integrations:action:view
* bridge:actions:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.IntegrationsApi();

let actionId = "actionId_example"; // String | actionId
let opts = { 
  'expand': "expand_example", // String | Indicates a field in the response which should be expanded.
  'includeConfig': false // Boolean | Return config in response.
};

apiInstance.getIntegrationsActionDraft(actionId, opts)
  .then((data) => {
    console.log(`getIntegrationsActionDraft success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getIntegrationsActionDraft');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **actionId** | **String** | actionId |  |
 **expand** | **String** | Indicates a field in the response which should be expanded. | [optional] <br />**Values**: contract |
 **includeConfig** | **Boolean** | Return config in response. | [optional] [default to false] |
{: class="table table-striped"}

### Return type

**Action**

<a name="getIntegrationsActionDraftSchema"></a>

# JsonSchemaDocument getIntegrationsActionDraftSchema(actionId, fileName)



GET /api/v2/integrations/actions/{actionId}/draft/schemas/{fileName}

Retrieve schema for a Draft based on filename.



Requires ANY permissions: 

* integrations:action:view
* bridge:actions:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.IntegrationsApi();

let actionId = "actionId_example"; // String | actionId
let fileName = "fileName_example"; // String | Name of schema file to be retrieved for this draft.

apiInstance.getIntegrationsActionDraftSchema(actionId, fileName)
  .then((data) => {
    console.log(`getIntegrationsActionDraftSchema success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getIntegrationsActionDraftSchema');
    console.error(err);
  });
```

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



Requires ANY permissions: 

* integrations:action:view
* bridge:actions:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.IntegrationsApi();

let actionId = "actionId_example"; // String | actionId
let fileName = "fileName_example"; // String | Name of template file to be retrieved for this action draft.

apiInstance.getIntegrationsActionDraftTemplate(actionId, fileName)
  .then((data) => {
    console.log(`getIntegrationsActionDraftTemplate success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getIntegrationsActionDraftTemplate');
    console.error(err);
  });
```

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



Requires ANY permissions: 

* integrations:action:edit

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.IntegrationsApi();

let actionId = "actionId_example"; // String | actionId

apiInstance.getIntegrationsActionDraftValidation(actionId)
  .then((data) => {
    console.log(`getIntegrationsActionDraftValidation success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getIntegrationsActionDraftValidation');
    console.error(err);
  });
```

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



Requires ANY permissions: 

* integrations:action:view
* bridge:actions:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.IntegrationsApi();

let actionId = "actionId_example"; // String | actionId
let fileName = "fileName_example"; // String | Name of schema file to be retrieved for this action.

apiInstance.getIntegrationsActionSchema(actionId, fileName)
  .then((data) => {
    console.log(`getIntegrationsActionSchema success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getIntegrationsActionSchema');
    console.error(err);
  });
```

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



Requires ANY permissions: 

* integrations:action:view
* bridge:actions:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.IntegrationsApi();

let actionId = "actionId_example"; // String | actionId
let fileName = "fileName_example"; // String | Name of template file to be retrieved for this action.

apiInstance.getIntegrationsActionTemplate(actionId, fileName)
  .then((data) => {
    console.log(`getIntegrationsActionTemplate success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getIntegrationsActionTemplate');
    console.error(err);
  });
```

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



Requires ANY permissions: 

* integrations:action:view
* bridge:actions:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.IntegrationsApi();

let opts = { 
  'pageSize': 25, // Number | The total page size requested
  'pageNumber': 1, // Number | The page number requested
  'nextPage': "nextPage_example", // String | next page token
  'previousPage': "previousPage_example", // String | Previous page token
  'sortBy': "sortBy_example", // String | Root level field name to sort on.
  'sortOrder': "asc", // String | Direction to sort 'sortBy' field.
  'category': "category_example", // String | Filter by category name
  'name': "name_example", // String | Filter by action name. Provide full or just the first part of name.
  'secure': "secure_example", // String | Filter to only include secure actions. True will only include actions marked secured. False will include only unsecure actions. Do not use filter if you want all Actions.
  'includeAuthActions': "false" // String | Whether or not to include authentication actions in the response. These actions are not directly executable. Some integrations create them and will run them as needed to refresh authentication information for other actions.
};

apiInstance.getIntegrationsActions(opts)
  .then((data) => {
    console.log(`getIntegrationsActions success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getIntegrationsActions');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **pageSize** | **Number** | The total page size requested | [optional] [default to 25] |
 **pageNumber** | **Number** | The page number requested | [optional] [default to 1] |
 **nextPage** | **String** | next page token | [optional]  |
 **previousPage** | **String** | Previous page token | [optional]  |
 **sortBy** | **String** | Root level field name to sort on. | [optional]  |
 **sortOrder** | **String** | Direction to sort &#39;sortBy&#39; field. | [optional] [default to asc]<br />**Values**: ASC, DESC |
 **category** | **String** | Filter by category name | [optional]  |
 **name** | **String** | Filter by action name. Provide full or just the first part of name. | [optional]  |
 **secure** | **String** | Filter to only include secure actions. True will only include actions marked secured. False will include only unsecure actions. Do not use filter if you want all Actions. | [optional] <br />**Values**: true, false |
 **includeAuthActions** | **String** | Whether or not to include authentication actions in the response. These actions are not directly executable. Some integrations create them and will run them as needed to refresh authentication information for other actions. | [optional] [default to false]<br />**Values**: true, false |
{: class="table table-striped"}

### Return type

**ActionEntityListing**

<a name="getIntegrationsActionsCategories"></a>

# CategoryEntityListing getIntegrationsActionsCategories(opts)



GET /api/v2/integrations/actions/categories

Retrieves all categories of available Actions



Requires ANY permissions: 

* integrations:action:view
* bridge:actions:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.IntegrationsApi();

let opts = { 
  'pageSize': 25, // Number | The total page size requested
  'pageNumber': 1, // Number | The page number requested
  'nextPage': "nextPage_example", // String | next page token
  'previousPage': "previousPage_example", // String | Previous page token
  'sortBy': "sortBy_example", // String | Root level field name to sort on.
  'sortOrder': "asc", // String | Direction to sort 'sortBy' field.
  'secure': "secure_example" // String | Filter to only include secure actions. True will only include actions marked secured. False will include only unsecure actions. Do not use filter if you want all Actions.
};

apiInstance.getIntegrationsActionsCategories(opts)
  .then((data) => {
    console.log(`getIntegrationsActionsCategories success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getIntegrationsActionsCategories');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **pageSize** | **Number** | The total page size requested | [optional] [default to 25] |
 **pageNumber** | **Number** | The page number requested | [optional] [default to 1] |
 **nextPage** | **String** | next page token | [optional]  |
 **previousPage** | **String** | Previous page token | [optional]  |
 **sortBy** | **String** | Root level field name to sort on. | [optional]  |
 **sortOrder** | **String** | Direction to sort &#39;sortBy&#39; field. | [optional] [default to asc]<br />**Values**: ASC, DESC |
 **secure** | **String** | Filter to only include secure actions. True will only include actions marked secured. False will include only unsecure actions. Do not use filter if you want all Actions. | [optional] <br />**Values**: true, false |
{: class="table table-striped"}

### Return type

**CategoryEntityListing**

<a name="getIntegrationsActionsDrafts"></a>

# ActionEntityListing getIntegrationsActionsDrafts(opts)



GET /api/v2/integrations/actions/drafts

Retrieves all action drafts associated with the filters passed in via query param.



Requires ANY permissions: 

* integrations:action:view
* bridge:actions:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.IntegrationsApi();

let opts = { 
  'pageSize': 25, // Number | The total page size requested
  'pageNumber': 1, // Number | The page number requested
  'nextPage': "nextPage_example", // String | next page token
  'previousPage': "previousPage_example", // String | Previous page token
  'sortBy': "sortBy_example", // String | Root level field name to sort on.
  'sortOrder': "asc", // String | Direction to sort 'sortBy' field.
  'category': "category_example", // String | Filter by category name
  'name': "name_example", // String | Filter by action name. Provide full or just the first part of name.
  'secure': "secure_example", // String | Filter to only include secure actions. True will only include actions marked secured. False will include only unsecure actions. Do not use filter if you want all Actions.
  'includeAuthActions': "false" // String | Whether or not to include authentication actions in the response. These actions are not directly executable. Some integrations create them and will run them as needed to refresh authentication information for other actions.
};

apiInstance.getIntegrationsActionsDrafts(opts)
  .then((data) => {
    console.log(`getIntegrationsActionsDrafts success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getIntegrationsActionsDrafts');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **pageSize** | **Number** | The total page size requested | [optional] [default to 25] |
 **pageNumber** | **Number** | The page number requested | [optional] [default to 1] |
 **nextPage** | **String** | next page token | [optional]  |
 **previousPage** | **String** | Previous page token | [optional]  |
 **sortBy** | **String** | Root level field name to sort on. | [optional]  |
 **sortOrder** | **String** | Direction to sort &#39;sortBy&#39; field. | [optional] [default to asc]<br />**Values**: ASC, DESC |
 **category** | **String** | Filter by category name | [optional]  |
 **name** | **String** | Filter by action name. Provide full or just the first part of name. | [optional]  |
 **secure** | **String** | Filter to only include secure actions. True will only include actions marked secured. False will include only unsecure actions. Do not use filter if you want all Actions. | [optional] <br />**Values**: true, false |
 **includeAuthActions** | **String** | Whether or not to include authentication actions in the response. These actions are not directly executable. Some integrations create them and will run them as needed to refresh authentication information for other actions. | [optional] [default to false]<br />**Values**: true, false |
{: class="table table-striped"}

### Return type

**ActionEntityListing**

<a name="getIntegrationsClientapps"></a>

# ClientAppEntityListing getIntegrationsClientapps(opts)



GET /api/v2/integrations/clientapps

List permitted client app integrations for the logged in user



Requires NO permissions: 


### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.IntegrationsApi();

let opts = { 
  'pageSize': 25, // Number | The total page size requested
  'pageNumber': 1, // Number | The page number requested
  'sortBy': "sortBy_example", // String | variable name requested to sort by
  'expand': ["expand_example"], // [String] | variable name requested by expand list
  'nextPage': "nextPage_example", // String | next page token
  'previousPage': "previousPage_example" // String | Previous page token
};

apiInstance.getIntegrationsClientapps(opts)
  .then((data) => {
    console.log(`getIntegrationsClientapps success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getIntegrationsClientapps');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **pageSize** | **Number** | The total page size requested | [optional] [default to 25] |
 **pageNumber** | **Number** | The page number requested | [optional] [default to 1] |
 **sortBy** | **String** | variable name requested to sort by | [optional]  |
 **expand** | **[String]** | variable name requested by expand list | [optional]  |
 **nextPage** | **String** | next page token | [optional]  |
 **previousPage** | **String** | Previous page token | [optional]  |
{: class="table table-striped"}

### Return type

**ClientAppEntityListing**

<a name="getIntegrationsCredential"></a>

# Credential getIntegrationsCredential(credentialId)



GET /api/v2/integrations/credentials/{credentialId}

Get a single credential with sensitive fields redacted



Requires NO permissions: 


### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.IntegrationsApi();

let credentialId = "credentialId_example"; // String | Credential ID

apiInstance.getIntegrationsCredential(credentialId)
  .then((data) => {
    console.log(`getIntegrationsCredential success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getIntegrationsCredential');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **credentialId** | **String** | Credential ID |  |
{: class="table table-striped"}

### Return type

**Credential**

<a name="getIntegrationsCredentials"></a>

# CredentialInfoListing getIntegrationsCredentials(opts)



GET /api/v2/integrations/credentials

List multiple sets of credentials



Requires NO permissions: 


### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.IntegrationsApi();

let opts = { 
  'pageNumber': 1, // Number | Page number
  'pageSize': 25 // Number | Page size
};

apiInstance.getIntegrationsCredentials(opts)
  .then((data) => {
    console.log(`getIntegrationsCredentials success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getIntegrationsCredentials');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **pageNumber** | **Number** | Page number | [optional] [default to 1] |
 **pageSize** | **Number** | Page size | [optional] [default to 25] |
{: class="table table-striped"}

### Return type

**CredentialInfoListing**

<a name="getIntegrationsCredentialsTypes"></a>

# CredentialTypeListing getIntegrationsCredentialsTypes()



GET /api/v2/integrations/credentials/types

List all credential types



Requires NO permissions: 


### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.IntegrationsApi();

apiInstance.getIntegrationsCredentialsTypes()
  .then((data) => {
    console.log(`getIntegrationsCredentialsTypes success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getIntegrationsCredentialsTypes');
    console.error(err);
  });
```

### Parameters

This endpoint does not need any parameter.
{: class="table table-striped"}

### Return type

**CredentialTypeListing**

<a name="getIntegrationsEventlog"></a>

# IntegrationEventEntityListing getIntegrationsEventlog(opts)



GET /api/v2/integrations/eventlog

List all events



Requires ANY permissions: 

* integrations:integration:view
* bridge:notification:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.IntegrationsApi();

let opts = { 
  'pageSize': 25, // Number | Page size
  'pageNumber': 1, // Number | Page number
  'sortBy': "timestamp", // String | Sort by
  'sortOrder': "descending", // String | Order by
  'entityId': "entityId_example" // String | Include only events with this entity ID
};

apiInstance.getIntegrationsEventlog(opts)
  .then((data) => {
    console.log(`getIntegrationsEventlog success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getIntegrationsEventlog');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **pageSize** | **Number** | Page size | [optional] [default to 25] |
 **pageNumber** | **Number** | Page number | [optional] [default to 1] |
 **sortBy** | **String** | Sort by | [optional] [default to timestamp] |
 **sortOrder** | **String** | Order by | [optional] [default to descending] |
 **entityId** | **String** | Include only events with this entity ID | [optional]  |
{: class="table table-striped"}

### Return type

**IntegrationEventEntityListing**

<a name="getIntegrationsEventlogEventId"></a>

# IntegrationEvent getIntegrationsEventlogEventId(eventId)



GET /api/v2/integrations/eventlog/{eventId}

Get a single event



Requires ANY permissions: 

* integrations:integration:view
* bridge:notification:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.IntegrationsApi();

let eventId = "eventId_example"; // String | Event Id

apiInstance.getIntegrationsEventlogEventId(eventId)
  .then((data) => {
    console.log(`getIntegrationsEventlogEventId success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getIntegrationsEventlogEventId');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **eventId** | **String** | Event Id |  |
{: class="table table-striped"}

### Return type

**IntegrationEvent**

<a name="getIntegrationsSpeechDialogflowAgent"></a>

# DialogflowAgent getIntegrationsSpeechDialogflowAgent(agentId)



GET /api/v2/integrations/speech/dialogflow/agents/{agentId}

Get details about a Dialogflow agent



Requires ANY permissions: 

* integrations:integration:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.IntegrationsApi();

let agentId = "agentId_example"; // String | The agent ID

apiInstance.getIntegrationsSpeechDialogflowAgent(agentId)
  .then((data) => {
    console.log(`getIntegrationsSpeechDialogflowAgent success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getIntegrationsSpeechDialogflowAgent');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **agentId** | **String** | The agent ID |  |
{: class="table table-striped"}

### Return type

**DialogflowAgent**

<a name="getIntegrationsSpeechDialogflowAgents"></a>

# DialogflowAgentSummaryEntityListing getIntegrationsSpeechDialogflowAgents(opts)



GET /api/v2/integrations/speech/dialogflow/agents

Get a list of Dialogflow agents in the customers&#39; Google accounts



Requires ANY permissions: 

* integrations:integration:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.IntegrationsApi();

let opts = { 
  'pageNumber': 1, // Number | Page number
  'pageSize': 25, // Number | Page size
  'name': "name_example" // String | Filter on agent name
};

apiInstance.getIntegrationsSpeechDialogflowAgents(opts)
  .then((data) => {
    console.log(`getIntegrationsSpeechDialogflowAgents success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getIntegrationsSpeechDialogflowAgents');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **pageNumber** | **Number** | Page number | [optional] [default to 1] |
 **pageSize** | **Number** | Page size | [optional] [default to 25] |
 **name** | **String** | Filter on agent name | [optional]  |
{: class="table table-striped"}

### Return type

**DialogflowAgentSummaryEntityListing**

<a name="getIntegrationsSpeechLexBotAlias"></a>

# LexBotAlias getIntegrationsSpeechLexBotAlias(aliasId)



GET /api/v2/integrations/speech/lex/bot/alias/{aliasId}

Get details about a Lex bot alias



Requires ANY permissions: 

* integrations:integration:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.IntegrationsApi();

let aliasId = "aliasId_example"; // String | The alias ID

apiInstance.getIntegrationsSpeechLexBotAlias(aliasId)
  .then((data) => {
    console.log(`getIntegrationsSpeechLexBotAlias success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getIntegrationsSpeechLexBotAlias');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **aliasId** | **String** | The alias ID |  |
{: class="table table-striped"}

### Return type

**LexBotAlias**

<a name="getIntegrationsSpeechLexBotBotIdAliases"></a>

# LexBotAliasEntityListing getIntegrationsSpeechLexBotBotIdAliases(botId, opts)



GET /api/v2/integrations/speech/lex/bot/{botId}/aliases

Get a list of aliases for a bot in the customer&#39;s AWS accounts



Requires ANY permissions: 

* integrations:integration:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.IntegrationsApi();

let botId = "botId_example"; // String | The bot ID
let opts = { 
  'pageNumber': 1, // Number | Page number
  'pageSize': 25, // Number | Page size
  'status': "status_example", // String | Filter on alias status
  'name': "name_example" // String | Filter on alias name
};

apiInstance.getIntegrationsSpeechLexBotBotIdAliases(botId, opts)
  .then((data) => {
    console.log(`getIntegrationsSpeechLexBotBotIdAliases success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getIntegrationsSpeechLexBotBotIdAliases');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **botId** | **String** | The bot ID |  |
 **pageNumber** | **Number** | Page number | [optional] [default to 1] |
 **pageSize** | **Number** | Page size | [optional] [default to 25] |
 **status** | **String** | Filter on alias status | [optional] <br />**Values**: READY, FAILED, BUILDING, NOT_BUILT |
 **name** | **String** | Filter on alias name | [optional]  |
{: class="table table-striped"}

### Return type

**LexBotAliasEntityListing**

<a name="getIntegrationsSpeechLexBots"></a>

# LexBotEntityListing getIntegrationsSpeechLexBots(opts)



GET /api/v2/integrations/speech/lex/bots

Get a list of Lex bots in the customers&#39; AWS accounts



Requires ANY permissions: 

* integrations:integration:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.IntegrationsApi();

let opts = { 
  'pageNumber': 1, // Number | Page number
  'pageSize': 25, // Number | Page size
  'name': "name_example" // String | Filter on bot name
};

apiInstance.getIntegrationsSpeechLexBots(opts)
  .then((data) => {
    console.log(`getIntegrationsSpeechLexBots success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getIntegrationsSpeechLexBots');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **pageNumber** | **Number** | Page number | [optional] [default to 1] |
 **pageSize** | **Number** | Page size | [optional] [default to 25] |
 **name** | **String** | Filter on bot name | [optional]  |
{: class="table table-striped"}

### Return type

**LexBotEntityListing**

<a name="getIntegrationsSpeechTtsEngine"></a>

# TtsEngineEntity getIntegrationsSpeechTtsEngine(engineId, opts)



GET /api/v2/integrations/speech/tts/engines/{engineId}

Get details about a TTS engine



Requires ANY permissions: 

* integrations:integration:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.IntegrationsApi();

let engineId = "engineId_example"; // String | The engine ID
let opts = { 
  'includeVoices': false // Boolean | Include voices for the engine
};

apiInstance.getIntegrationsSpeechTtsEngine(engineId, opts)
  .then((data) => {
    console.log(`getIntegrationsSpeechTtsEngine success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getIntegrationsSpeechTtsEngine');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **engineId** | **String** | The engine ID |  |
 **includeVoices** | **Boolean** | Include voices for the engine | [optional] [default to false] |
{: class="table table-striped"}

### Return type

**TtsEngineEntity**

<a name="getIntegrationsSpeechTtsEngineVoice"></a>

# TtsVoiceEntity getIntegrationsSpeechTtsEngineVoice(engineId, voiceId)



GET /api/v2/integrations/speech/tts/engines/{engineId}/voices/{voiceId}

Get details about a specific voice for a TTS engine



Requires ANY permissions: 

* integrations:integration:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.IntegrationsApi();

let engineId = "engineId_example"; // String | The engine ID
let voiceId = "voiceId_example"; // String | The voice ID

apiInstance.getIntegrationsSpeechTtsEngineVoice(engineId, voiceId)
  .then((data) => {
    console.log(`getIntegrationsSpeechTtsEngineVoice success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getIntegrationsSpeechTtsEngineVoice');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **engineId** | **String** | The engine ID |  |
 **voiceId** | **String** | The voice ID |  |
{: class="table table-striped"}

### Return type

**TtsVoiceEntity**

<a name="getIntegrationsSpeechTtsEngineVoices"></a>

# TtsVoiceEntityListing getIntegrationsSpeechTtsEngineVoices(engineId, opts)



GET /api/v2/integrations/speech/tts/engines/{engineId}/voices

Get a list of voices for a TTS engine



Requires ANY permissions: 

* integrations:integration:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.IntegrationsApi();

let engineId = "engineId_example"; // String | The engine ID
let opts = { 
  'pageNumber': 1, // Number | Page number
  'pageSize': 25 // Number | Page size
};

apiInstance.getIntegrationsSpeechTtsEngineVoices(engineId, opts)
  .then((data) => {
    console.log(`getIntegrationsSpeechTtsEngineVoices success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getIntegrationsSpeechTtsEngineVoices');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **engineId** | **String** | The engine ID |  |
 **pageNumber** | **Number** | Page number | [optional] [default to 1] |
 **pageSize** | **Number** | Page size | [optional] [default to 25] |
{: class="table table-striped"}

### Return type

**TtsVoiceEntityListing**

<a name="getIntegrationsSpeechTtsEngines"></a>

# TtsEngineEntityListing getIntegrationsSpeechTtsEngines(opts)



GET /api/v2/integrations/speech/tts/engines

Get a list of TTS engines enabled for org



Requires ANY permissions: 

* integrations:integration:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.IntegrationsApi();

let opts = { 
  'pageNumber': 1, // Number | Page number
  'pageSize': 25, // Number | Page size
  'includeVoices': false, // Boolean | Include voices for the engine
  'name': "name_example", // String | Filter on engine name
  'language': "language_example" // String | Filter on supported language. If includeVoices=true then the voices are also filtered.
};

apiInstance.getIntegrationsSpeechTtsEngines(opts)
  .then((data) => {
    console.log(`getIntegrationsSpeechTtsEngines success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getIntegrationsSpeechTtsEngines');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **pageNumber** | **Number** | Page number | [optional] [default to 1] |
 **pageSize** | **Number** | Page size | [optional] [default to 25] |
 **includeVoices** | **Boolean** | Include voices for the engine | [optional] [default to false] |
 **name** | **String** | Filter on engine name | [optional]  |
 **language** | **String** | Filter on supported language. If includeVoices=true then the voices are also filtered. | [optional]  |
{: class="table table-striped"}

### Return type

**TtsEngineEntityListing**

<a name="getIntegrationsSpeechTtsSettings"></a>

# TtsSettings getIntegrationsSpeechTtsSettings()



GET /api/v2/integrations/speech/tts/settings

Get TTS settings for an org



Requires ANY permissions: 

* integrations:integration:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.IntegrationsApi();

apiInstance.getIntegrationsSpeechTtsSettings()
  .then((data) => {
    console.log(`getIntegrationsSpeechTtsSettings success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getIntegrationsSpeechTtsSettings');
    console.error(err);
  });
```

### Parameters

This endpoint does not need any parameter.
{: class="table table-striped"}

### Return type

**TtsSettings**

<a name="getIntegrationsType"></a>

# IntegrationType getIntegrationsType(typeId)



GET /api/v2/integrations/types/{typeId}

Get integration type.



Requires NO permissions: 


### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.IntegrationsApi();

let typeId = "typeId_example"; // String | Integration Type Id

apiInstance.getIntegrationsType(typeId)
  .then((data) => {
    console.log(`getIntegrationsType success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getIntegrationsType');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **typeId** | **String** | Integration Type Id |  |
{: class="table table-striped"}

### Return type

**IntegrationType**

<a name="getIntegrationsTypeConfigschema"></a>

# JsonSchemaDocument getIntegrationsTypeConfigschema(typeId, configType)



GET /api/v2/integrations/types/{typeId}/configschemas/{configType}

Get properties config schema for an integration type.



Requires NO permissions: 


### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.IntegrationsApi();

let typeId = "typeId_example"; // String | Integration Type Id
let configType = "configType_example"; // String | Config schema type

apiInstance.getIntegrationsTypeConfigschema(typeId, configType)
  .then((data) => {
    console.log(`getIntegrationsTypeConfigschema success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getIntegrationsTypeConfigschema');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **typeId** | **String** | Integration Type Id |  |
 **configType** | **String** | Config schema type | <br />**Values**: properties, advanced |
{: class="table table-striped"}

### Return type

**JsonSchemaDocument**

<a name="getIntegrationsTypes"></a>

# IntegrationTypeEntityListing getIntegrationsTypes(opts)



GET /api/v2/integrations/types

List integration types



Requires NO permissions: 


### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.IntegrationsApi();

let opts = { 
  'pageSize': 25, // Number | The total page size requested
  'pageNumber': 1, // Number | The page number requested
  'sortBy': "sortBy_example", // String | variable name requested to sort by
  'expand': ["expand_example"], // [String] | variable name requested by expand list
  'nextPage': "nextPage_example", // String | next page token
  'previousPage': "previousPage_example" // String | Previous page token
};

apiInstance.getIntegrationsTypes(opts)
  .then((data) => {
    console.log(`getIntegrationsTypes success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getIntegrationsTypes');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **pageSize** | **Number** | The total page size requested | [optional] [default to 25] |
 **pageNumber** | **Number** | The page number requested | [optional] [default to 1] |
 **sortBy** | **String** | variable name requested to sort by | [optional]  |
 **expand** | **[String]** | variable name requested by expand list | [optional]  |
 **nextPage** | **String** | next page token | [optional]  |
 **previousPage** | **String** | Previous page token | [optional]  |
{: class="table table-striped"}

### Return type

**IntegrationTypeEntityListing**

<a name="getIntegrationsUserapps"></a>

# UserAppEntityListing getIntegrationsUserapps(opts)



GET /api/v2/integrations/userapps

List permitted user app integrations for the logged in user



Requires NO permissions: 


### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.IntegrationsApi();

let opts = { 
  'pageSize': 25, // Number | The total page size requested
  'pageNumber': 1, // Number | The page number requested
  'sortBy': "sortBy_example", // String | variable name requested to sort by
  'expand': ["expand_example"], // [String] | variable name requested by expand list
  'nextPage': "nextPage_example", // String | next page token
  'previousPage': "previousPage_example", // String | Previous page token
  'appHost': "appHost_example" // String | The type of UserApp to filter by
};

apiInstance.getIntegrationsUserapps(opts)
  .then((data) => {
    console.log(`getIntegrationsUserapps success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getIntegrationsUserapps');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **pageSize** | **Number** | The total page size requested | [optional] [default to 25] |
 **pageNumber** | **Number** | The page number requested | [optional] [default to 1] |
 **sortBy** | **String** | variable name requested to sort by | [optional]  |
 **expand** | **[String]** | variable name requested by expand list | [optional]  |
 **nextPage** | **String** | next page token | [optional]  |
 **previousPage** | **String** | Previous page token | [optional]  |
 **appHost** | **String** | The type of UserApp to filter by | [optional]  |
{: class="table table-striped"}

### Return type

**UserAppEntityListing**

<a name="patchIntegration"></a>

# Integration patchIntegration(integrationId, opts)



PATCH /api/v2/integrations/{integrationId}

Update an integration.



Requires NO permissions: 


### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.IntegrationsApi();

let integrationId = "integrationId_example"; // String | Integration Id
let opts = { 
  'body': {}, // Object | Integration Update
  'pageSize': 25, // Number | The total page size requested
  'pageNumber': 1, // Number | The page number requested
  'sortBy': "sortBy_example", // String | variable name requested to sort by
  'expand': ["expand_example"], // [String] | variable name requested by expand list
  'nextPage': "nextPage_example", // String | next page token
  'previousPage': "previousPage_example" // String | Previous page token
};

apiInstance.patchIntegration(integrationId, opts)
  .then((data) => {
    console.log(`patchIntegration success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling patchIntegration');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **integrationId** | **String** | Integration Id |  |
 **body** | **Object** | Integration Update | [optional]  |
 **pageSize** | **Number** | The total page size requested | [optional] [default to 25] |
 **pageNumber** | **Number** | The page number requested | [optional] [default to 1] |
 **sortBy** | **String** | variable name requested to sort by | [optional]  |
 **expand** | **[String]** | variable name requested by expand list | [optional]  |
 **nextPage** | **String** | next page token | [optional]  |
 **previousPage** | **String** | Previous page token | [optional]  |
{: class="table table-striped"}

### Return type

**Integration**

<a name="patchIntegrationsAction"></a>

# Action patchIntegrationsAction(actionId, body)



PATCH /api/v2/integrations/actions/{actionId}

Patch an Action



Requires ANY permissions: 

* integrations:action:edit

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.IntegrationsApi();

let actionId = "actionId_example"; // String | actionId
let body = {}; // Object | Input used to patch the Action.

apiInstance.patchIntegrationsAction(actionId, body)
  .then((data) => {
    console.log(`patchIntegrationsAction success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling patchIntegrationsAction');
    console.error(err);
  });
```

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



Requires ANY permissions: 

* integrations:action:edit

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.IntegrationsApi();

let actionId = "actionId_example"; // String | actionId
let body = {}; // Object | Input used to patch the Action Draft.

apiInstance.patchIntegrationsActionDraft(actionId, body)
  .then((data) => {
    console.log(`patchIntegrationsActionDraft success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling patchIntegrationsActionDraft');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **actionId** | **String** | actionId |  |
 **body** | **Object** | Input used to patch the Action Draft. |  |
{: class="table table-striped"}

### Return type

**Action**

<a name="postIntegrations"></a>

# Integration postIntegrations(opts)



POST /api/v2/integrations

Create an integration.



Requires NO permissions: 


### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.IntegrationsApi();

let opts = { 
  'body': {} // Object | Integration
};

apiInstance.postIntegrations(opts)
  .then((data) => {
    console.log(`postIntegrations success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling postIntegrations');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **body** | **Object** | Integration | [optional]  |
{: class="table table-striped"}

### Return type

**Integration**

<a name="postIntegrationsActionDraft"></a>

# Action postIntegrationsActionDraft(actionId)



POST /api/v2/integrations/actions/{actionId}/draft

Create a new Draft from existing Action



Requires ANY permissions: 

* integrations:action:edit

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.IntegrationsApi();

let actionId = "actionId_example"; // String | actionId

apiInstance.postIntegrationsActionDraft(actionId)
  .then((data) => {
    console.log(`postIntegrationsActionDraft success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling postIntegrationsActionDraft');
    console.error(err);
  });
```

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



Requires ANY permissions: 

* integrations:action:edit

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.IntegrationsApi();

let actionId = "actionId_example"; // String | actionId
let body = {}; // Object | Input used to patch the Action.

apiInstance.postIntegrationsActionDraftPublish(actionId, body)
  .then((data) => {
    console.log(`postIntegrationsActionDraftPublish success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling postIntegrationsActionDraftPublish');
    console.error(err);
  });
```

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



Requires ANY permissions: 

* integrations:action:execute

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.IntegrationsApi();

let actionId = "actionId_example"; // String | actionId
let body = null; // Object | Map of parameters used for variable substitution.

apiInstance.postIntegrationsActionDraftTest(actionId, body)
  .then((data) => {
    console.log(`postIntegrationsActionDraftTest success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling postIntegrationsActionDraftTest');
    console.error(err);
  });
```

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



Requires ANY permissions: 

* integrations:action:execute
* bridge:actions:execute

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.IntegrationsApi();

let actionId = "actionId_example"; // String | actionId
let body = null; // Object | Map of parameters used for variable substitution.

apiInstance.postIntegrationsActionExecute(actionId, body)
  .then((data) => {
    console.log(`postIntegrationsActionExecute success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling postIntegrationsActionExecute');
    console.error(err);
  });
```

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



Requires ANY permissions: 

* integrations:action:execute
* bridge:actions:execute

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.IntegrationsApi();

let actionId = "actionId_example"; // String | actionId
let body = null; // Object | Map of parameters used for variable substitution.

apiInstance.postIntegrationsActionTest(actionId, body)
  .then((data) => {
    console.log(`postIntegrationsActionTest success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling postIntegrationsActionTest');
    console.error(err);
  });
```

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



Requires ANY permissions: 

* integrations:action:add

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.IntegrationsApi();

let body = {}; // Object | Input used to create Action.

apiInstance.postIntegrationsActions(body)
  .then((data) => {
    console.log(`postIntegrationsActions success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling postIntegrationsActions');
    console.error(err);
  });
```

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



Requires ANY permissions: 

* integrations:action:add

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.IntegrationsApi();

let body = {}; // Object | Input used to create Action Draft.

apiInstance.postIntegrationsActionsDrafts(body)
  .then((data) => {
    console.log(`postIntegrationsActionsDrafts success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling postIntegrationsActionsDrafts');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **body** | **Object** | Input used to create Action Draft. |  |
{: class="table table-striped"}

### Return type

**Action**

<a name="postIntegrationsCredentials"></a>

# CredentialInfo postIntegrationsCredentials(opts)



POST /api/v2/integrations/credentials

Create a set of credentials



Requires NO permissions: 


### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.IntegrationsApi();

let opts = { 
  'body': {} // Object | Credential
};

apiInstance.postIntegrationsCredentials(opts)
  .then((data) => {
    console.log(`postIntegrationsCredentials success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling postIntegrationsCredentials');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **body** | **Object** | Credential | [optional]  |
{: class="table table-striped"}

### Return type

**CredentialInfo**

<a name="postIntegrationsWorkforcemanagementVendorconnection"></a>

# UserActionCategoryEntityListing postIntegrationsWorkforcemanagementVendorconnection(opts)



POST /api/v2/integrations/workforcemanagement/vendorconnection

Add a vendor connection



Requires NO permissions: 


### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.IntegrationsApi();

let opts = { 
  'body': {} // Object | 
};

apiInstance.postIntegrationsWorkforcemanagementVendorconnection(opts)
  .then((data) => {
    console.log(`postIntegrationsWorkforcemanagementVendorconnection success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling postIntegrationsWorkforcemanagementVendorconnection');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **body** | **Object** |  | [optional]  |
{: class="table table-striped"}

### Return type

**UserActionCategoryEntityListing**

<a name="putIntegrationConfigCurrent"></a>

# IntegrationConfiguration putIntegrationConfigCurrent(integrationId, opts)



PUT /api/v2/integrations/{integrationId}/config/current

Update integration configuration.



Requires NO permissions: 


### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.IntegrationsApi();

let integrationId = "integrationId_example"; // String | Integration Id
let opts = { 
  'body': {} // Object | Integration Configuration
};

apiInstance.putIntegrationConfigCurrent(integrationId, opts)
  .then((data) => {
    console.log(`putIntegrationConfigCurrent success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling putIntegrationConfigCurrent');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **integrationId** | **String** | Integration Id |  |
 **body** | **Object** | Integration Configuration | [optional]  |
{: class="table table-striped"}

### Return type

**IntegrationConfiguration**

<a name="putIntegrationsCredential"></a>

# CredentialInfo putIntegrationsCredential(credentialId, opts)



PUT /api/v2/integrations/credentials/{credentialId}

Update a set of credentials



Requires NO permissions: 


### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.IntegrationsApi();

let credentialId = "credentialId_example"; // String | Credential ID
let opts = { 
  'body': {} // Object | Credential
};

apiInstance.putIntegrationsCredential(credentialId, opts)
  .then((data) => {
    console.log(`putIntegrationsCredential success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling putIntegrationsCredential');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **credentialId** | **String** | Credential ID |  |
 **body** | **Object** | Credential | [optional]  |
{: class="table table-striped"}

### Return type

**CredentialInfo**

<a name="putIntegrationsSpeechTtsSettings"></a>

# TtsSettings putIntegrationsSpeechTtsSettings(body)



PUT /api/v2/integrations/speech/tts/settings

Update TTS settings for an org



Requires ANY permissions: 

* integrations:integration:edit

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.IntegrationsApi();

let body = {}; // Object | Updated TtsSettings

apiInstance.putIntegrationsSpeechTtsSettings(body)
  .then((data) => {
    console.log(`putIntegrationsSpeechTtsSettings success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling putIntegrationsSpeechTtsSettings');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **body** | **Object** | Updated TtsSettings |  |
{: class="table table-striped"}

### Return type

**TtsSettings**

