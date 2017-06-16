---
title: ArchitectApi
---
# platformClient.ArchitectApi

All URIs are relative to *https://api.mypurecloud.com*

| Method | HTTP request | Description |
| ------------- | ------------- | ------------- |
[**deleteArchitectPrompt**](ArchitectApi.html#deleteArchitectPrompt) | **DELETE** /api/v2/architect/prompts/{promptId} | Delete specified user prompt
[**deleteArchitectPromptResource**](ArchitectApi.html#deleteArchitectPromptResource) | **DELETE** /api/v2/architect/prompts/{promptId}/resources/{languageCode} | Delete specified user prompt resource
[**deleteArchitectPrompts**](ArchitectApi.html#deleteArchitectPrompts) | **DELETE** /api/v2/architect/prompts | Batch-delete a list of prompts
[**deleteArchitectSystempromptResource**](ArchitectApi.html#deleteArchitectSystempromptResource) | **DELETE** /api/v2/architect/systemprompts/{promptId}/resources/{languageCode} | Delete a system prompt resource override.
[**deleteFlow**](ArchitectApi.html#deleteFlow) | **DELETE** /api/v2/flows/{flowId} | Delete flow
[**deleteFlows**](ArchitectApi.html#deleteFlows) | **DELETE** /api/v2/flows | Batch-delete a list of flows
[**getArchitectDependencytracking**](ArchitectApi.html#getArchitectDependencytracking) | **GET** /api/v2/architect/dependencytracking | Get Dependency Tracking objects that have a given display name
[**getArchitectDependencytrackingBuild**](ArchitectApi.html#getArchitectDependencytrackingBuild) | **GET** /api/v2/architect/dependencytracking/build | Get Dependency Tracking build status for an organization
[**getArchitectDependencytrackingConsumedresources**](ArchitectApi.html#getArchitectDependencytrackingConsumedresources) | **GET** /api/v2/architect/dependencytracking/consumedresources | Get resources that are consumed by a given Dependency Tracking object
[**getArchitectDependencytrackingConsumingresources**](ArchitectApi.html#getArchitectDependencytrackingConsumingresources) | **GET** /api/v2/architect/dependencytracking/consumingresources | Get resources that consume a given Dependency Tracking object
[**getArchitectDependencytrackingDeletedresourceconsumers**](ArchitectApi.html#getArchitectDependencytrackingDeletedresourceconsumers) | **GET** /api/v2/architect/dependencytracking/deletedresourceconsumers | Get Dependency Tracking objects that consume deleted resources
[**getArchitectDependencytrackingObject**](ArchitectApi.html#getArchitectDependencytrackingObject) | **GET** /api/v2/architect/dependencytracking/object | Get a Dependency Tracking object
[**getArchitectDependencytrackingType**](ArchitectApi.html#getArchitectDependencytrackingType) | **GET** /api/v2/architect/dependencytracking/types/{typeId} | Get a Dependency Tracking type.
[**getArchitectDependencytrackingTypes**](ArchitectApi.html#getArchitectDependencytrackingTypes) | **GET** /api/v2/architect/dependencytracking/types | Get Dependency Tracking types.
[**getArchitectDependencytrackingUpdatedresourceconsumers**](ArchitectApi.html#getArchitectDependencytrackingUpdatedresourceconsumers) | **GET** /api/v2/architect/dependencytracking/updatedresourceconsumers | Get Dependency Tracking objects that depend on updated resources
[**getArchitectPrompt**](ArchitectApi.html#getArchitectPrompt) | **GET** /api/v2/architect/prompts/{promptId} | Get specified user prompt
[**getArchitectPromptResource**](ArchitectApi.html#getArchitectPromptResource) | **GET** /api/v2/architect/prompts/{promptId}/resources/{languageCode} | Get specified user prompt resource
[**getArchitectPromptResources**](ArchitectApi.html#getArchitectPromptResources) | **GET** /api/v2/architect/prompts/{promptId}/resources | Get a pageable list of user prompt resources
[**getArchitectPrompts**](ArchitectApi.html#getArchitectPrompts) | **GET** /api/v2/architect/prompts | Get a pageable list of user prompts
[**getArchitectSystemprompt**](ArchitectApi.html#getArchitectSystemprompt) | **GET** /api/v2/architect/systemprompts/{promptId} | Get a system prompt
[**getArchitectSystempromptResource**](ArchitectApi.html#getArchitectSystempromptResource) | **GET** /api/v2/architect/systemprompts/{promptId}/resources/{languageCode} | Get a system prompt resource.
[**getArchitectSystempromptResources**](ArchitectApi.html#getArchitectSystempromptResources) | **GET** /api/v2/architect/systemprompts/{promptId}/resources | Get system prompt resources.
[**getArchitectSystemprompts**](ArchitectApi.html#getArchitectSystemprompts) | **GET** /api/v2/architect/systemprompts | Get System Prompts
[**getFlow**](ArchitectApi.html#getFlow) | **GET** /api/v2/flows/{flowId} | Get flow
[**getFlowLatestconfiguration**](ArchitectApi.html#getFlowLatestconfiguration) | **GET** /api/v2/flows/{flowId}/latestconfiguration | Get the latest configuration for flow
[**getFlowVersion**](ArchitectApi.html#getFlowVersion) | **GET** /api/v2/flows/{flowId}/versions/{versionId} | Get flow version
[**getFlowVersionConfiguration**](ArchitectApi.html#getFlowVersionConfiguration) | **GET** /api/v2/flows/{flowId}/versions/{versionId}/configuration | Create flow version configuration
[**getFlowVersions**](ArchitectApi.html#getFlowVersions) | **GET** /api/v2/flows/{flowId}/versions | Get flow version list
[**getFlows**](ArchitectApi.html#getFlows) | **GET** /api/v2/flows | Get a pageable list of flows, filtered by query parameters
[**postArchitectDependencytrackingBuild**](ArchitectApi.html#postArchitectDependencytrackingBuild) | **POST** /api/v2/architect/dependencytracking/build | Rebuild Dependency Tracking data for an organization
[**postArchitectPromptResources**](ArchitectApi.html#postArchitectPromptResources) | **POST** /api/v2/architect/prompts/{promptId}/resources | Create a new user prompt resource
[**postArchitectPrompts**](ArchitectApi.html#postArchitectPrompts) | **POST** /api/v2/architect/prompts | Create a new user prompt
[**postArchitectSystempromptResources**](ArchitectApi.html#postArchitectSystempromptResources) | **POST** /api/v2/architect/systemprompts/{promptId}/resources | Create system prompt resource override.
[**postFlowVersions**](ArchitectApi.html#postFlowVersions) | **POST** /api/v2/flows/{flowId}/versions | Create flow version
[**postFlows**](ArchitectApi.html#postFlows) | **POST** /api/v2/flows | Create flow
[**postFlowsActionsCheckin**](ArchitectApi.html#postFlowsActionsCheckin) | **POST** /api/v2/flows/actions/checkin | Check-in flow
[**postFlowsActionsCheckout**](ArchitectApi.html#postFlowsActionsCheckout) | **POST** /api/v2/flows/actions/checkout | Check-out flow
[**postFlowsActionsDeactivate**](ArchitectApi.html#postFlowsActionsDeactivate) | **POST** /api/v2/flows/actions/deactivate | Deactivate flow
[**postFlowsActionsPublish**](ArchitectApi.html#postFlowsActionsPublish) | **POST** /api/v2/flows/actions/publish | Publish flow
[**postFlowsActionsRevert**](ArchitectApi.html#postFlowsActionsRevert) | **POST** /api/v2/flows/actions/revert | Revert flow
[**postFlowsActionsUnlock**](ArchitectApi.html#postFlowsActionsUnlock) | **POST** /api/v2/flows/actions/unlock | Unlock flow
[**putArchitectPrompt**](ArchitectApi.html#putArchitectPrompt) | **PUT** /api/v2/architect/prompts/{promptId} | Update specified user prompt
[**putArchitectPromptResource**](ArchitectApi.html#putArchitectPromptResource) | **PUT** /api/v2/architect/prompts/{promptId}/resources/{languageCode} | Update specified user prompt resource
[**putArchitectSystempromptResource**](ArchitectApi.html#putArchitectSystempromptResource) | **PUT** /api/v2/architect/systemprompts/{promptId}/resources/{languageCode} | Updates a system prompt resource override.
[**putFlow**](ArchitectApi.html#putFlow) | **PUT** /api/v2/flows/{flowId} | Update flow
{: class="table table-striped"}

<a name="deleteArchitectPrompt"></a>

# null deleteArchitectPrompt(promptId, opts)

DELETE /api/v2/architect/prompts/{promptId}

Delete specified user prompt



### Example

~~~ javascript
const platformClient = require('purecloud-platform-client-v2');

// Configure OAuth2 access token for authorization: PureCloud Auth
platformClient.ApiClient.instance.authentications['PureCloud Auth'].accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new platformClient.ArchitectApi();

var promptId = "promptId_example"; // String | Prompt ID

var opts = { 
  'allResources': true // Boolean | Whether or not to delete all the prompt resources
};
apiInstance.deleteArchitectPrompt(promptId, opts)
  .then(function() {
    console.log('deleteArchitectPrompt returned successfully.');
  })
  .catch(function(error) {
  	console.log('There was a failure calling deleteArchitectPrompt');
    console.error(error);
  });

~~~

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **promptId** | **String**| Prompt ID |  |
 **allResources** | **Boolean**| Whether or not to delete all the prompt resources | [optional]  |
{: class="table table-striped"}

### Return type

null (empty response body)

<a name="deleteArchitectPromptResource"></a>

# null deleteArchitectPromptResource(promptId, languageCode)

DELETE /api/v2/architect/prompts/{promptId}/resources/{languageCode}

Delete specified user prompt resource



### Example

~~~ javascript
const platformClient = require('purecloud-platform-client-v2');

// Configure OAuth2 access token for authorization: PureCloud Auth
platformClient.ApiClient.instance.authentications['PureCloud Auth'].accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new platformClient.ArchitectApi();

var promptId = "promptId_example"; // String | Prompt ID

var languageCode = "languageCode_example"; // String | Language

apiInstance.deleteArchitectPromptResource(promptId, languageCode)
  .then(function() {
    console.log('deleteArchitectPromptResource returned successfully.');
  })
  .catch(function(error) {
  	console.log('There was a failure calling deleteArchitectPromptResource');
    console.error(error);
  });

~~~

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **promptId** | **String**| Prompt ID |  |
 **languageCode** | **String**| Language |  |
{: class="table table-striped"}

### Return type

null (empty response body)

<a name="deleteArchitectPrompts"></a>

# [**Operation**](Operation.html) deleteArchitectPrompts(id)

DELETE /api/v2/architect/prompts

Batch-delete a list of prompts

Multiple IDs can be specified, in which case all specified prompts will be deleted.  Asynchronous.  Notification topic: v2.architect.prompts.{promptId}

### Example

~~~ javascript
const platformClient = require('purecloud-platform-client-v2');

// Configure OAuth2 access token for authorization: PureCloud Auth
platformClient.ApiClient.instance.authentications['PureCloud Auth'].accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new platformClient.ArchitectApi();

var id = ["id_example"]; // [String] | List of Prompt IDs

apiInstance.deleteArchitectPrompts(id)
  .then(function(data) {
    console.log(`deleteArchitectPrompts success! data: ${data}`);
  })
  .catch(function(error) {
  	console.log('There was a failure calling deleteArchitectPrompts');
    console.error(error);
  });

~~~

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **id** | [**[String]**](String.html)| List of Prompt IDs |  |
{: class="table table-striped"}

### Return type

[**Operation**](Operation.html)

<a name="deleteArchitectSystempromptResource"></a>

# null deleteArchitectSystempromptResource(promptId, languageCode)

DELETE /api/v2/architect/systemprompts/{promptId}/resources/{languageCode}

Delete a system prompt resource override.



### Example

~~~ javascript
const platformClient = require('purecloud-platform-client-v2');

// Configure OAuth2 access token for authorization: PureCloud Auth
platformClient.ApiClient.instance.authentications['PureCloud Auth'].accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new platformClient.ArchitectApi();

var promptId = "promptId_example"; // String | Prompt ID

var languageCode = "languageCode_example"; // String | Language

apiInstance.deleteArchitectSystempromptResource(promptId, languageCode)
  .then(function() {
    console.log('deleteArchitectSystempromptResource returned successfully.');
  })
  .catch(function(error) {
  	console.log('There was a failure calling deleteArchitectSystempromptResource');
    console.error(error);
  });

~~~

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **promptId** | **String**| Prompt ID |  |
 **languageCode** | **String**| Language |  |
{: class="table table-striped"}

### Return type

null (empty response body)

<a name="deleteFlow"></a>

# null deleteFlow(flowId)

DELETE /api/v2/flows/{flowId}

Delete flow



### Example

~~~ javascript
const platformClient = require('purecloud-platform-client-v2');

// Configure OAuth2 access token for authorization: PureCloud Auth
platformClient.ApiClient.instance.authentications['PureCloud Auth'].accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new platformClient.ArchitectApi();

var flowId = "flowId_example"; // String | Flow ID

apiInstance.deleteFlow(flowId)
  .then(function() {
    console.log('deleteFlow returned successfully.');
  })
  .catch(function(error) {
  	console.log('There was a failure calling deleteFlow');
    console.error(error);
  });

~~~

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **flowId** | **String**| Flow ID |  |
{: class="table table-striped"}

### Return type

null (empty response body)

<a name="deleteFlows"></a>

# [**Operation**](Operation.html) deleteFlows(id)

DELETE /api/v2/flows

Batch-delete a list of flows

Multiple IDs can be specified, in which case all specified flows will be deleted.  Asynchronous.  Notification topic: v2.flows.{flowId}

### Example

~~~ javascript
const platformClient = require('purecloud-platform-client-v2');

// Configure OAuth2 access token for authorization: PureCloud Auth
platformClient.ApiClient.instance.authentications['PureCloud Auth'].accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new platformClient.ArchitectApi();

var id = ["id_example"]; // [String] | List of Flow IDs

apiInstance.deleteFlows(id)
  .then(function(data) {
    console.log(`deleteFlows success! data: ${data}`);
  })
  .catch(function(error) {
  	console.log('There was a failure calling deleteFlows');
    console.error(error);
  });

~~~

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **id** | [**[String]**](String.html)| List of Flow IDs |  |
{: class="table table-striped"}

### Return type

[**Operation**](Operation.html)

<a name="getArchitectDependencytracking"></a>

# [**DependencyObjectEntityListing**](DependencyObjectEntityListing.html) getArchitectDependencytracking(name, opts)

GET /api/v2/architect/dependencytracking

Get Dependency Tracking objects that have a given display name



### Example

~~~ javascript
const platformClient = require('purecloud-platform-client-v2');

// Configure OAuth2 access token for authorization: PureCloud Auth
platformClient.ApiClient.instance.authentications['PureCloud Auth'].accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new platformClient.ArchitectApi();

var name = "name_example"; // String | Object name to search for

var opts = { 
  'pageNumber': 1, // Number | Page number
  'pageSize': 25, // Number | Page size
  'objectType': ["objectType_example"], // [String] | Object type(s) to search for
  'consumedResources': true, // Boolean | Include resources each result item consumes
  'consumingResources': true, // Boolean | Include resources that consume each result item
  'consumedResourceType': ["consumedResourceType_example"], // [String] | Types of consumed resources to return, if consumed resources are requested
  'consumingResourceType': ["consumingResourceType_example"] // [String] | Types of consuming resources to return, if consuming resources are requested
};
apiInstance.getArchitectDependencytracking(name, opts)
  .then(function(data) {
    console.log(`getArchitectDependencytracking success! data: ${data}`);
  })
  .catch(function(error) {
  	console.log('There was a failure calling getArchitectDependencytracking');
    console.error(error);
  });

~~~

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **name** | **String**| Object name to search for |  |
 **pageNumber** | **Number**| Page number | [optional] [default to 1] |
 **pageSize** | **Number**| Page size | [optional] [default to 25] |
 **objectType** | [**[String]**](String.html)| Object type(s) to search for | [optional] <br />**Values**: ACDLANGUAGE, ACDSKILL, ACDWRAPUPCODE, BRIDGEACTION, COMPOSERSCRIPT, CONTACTLIST, DATAACTION, GROUP, INBOUNDCALLFLOW, INBOUNDEMAILFLOW, INQUEUECALLFLOW, IVRCONFIGURATION, LANGUAGE, OUTBOUNDCALLFLOW, QUEUE, RESPONSE, SCHEDULE, SCHEDULEGROUP, SECUREACTION, SECURECALLFLOW, SYSTEMPROMPT, USER, USERPROMPT, VOICEXML, WORKFLOW |
 **consumedResources** | **Boolean**| Include resources each result item consumes | [optional]  |
 **consumingResources** | **Boolean**| Include resources that consume each result item | [optional]  |
 **consumedResourceType** | [**[String]**](String.html)| Types of consumed resources to return, if consumed resources are requested | [optional] <br />**Values**: ACDLANGUAGE, ACDSKILL, ACDWRAPUPCODE, BRIDGEACTION, COMPOSERSCRIPT, CONTACTLIST, DATAACTION, GROUP, INBOUNDCALLFLOW, INBOUNDEMAILFLOW, INQUEUECALLFLOW, IVRCONFIGURATION, LANGUAGE, OUTBOUNDCALLFLOW, QUEUE, RESPONSE, SCHEDULE, SCHEDULEGROUP, SECUREACTION, SECURECALLFLOW, SYSTEMPROMPT, USER, USERPROMPT, VOICEXML, WORKFLOW |
 **consumingResourceType** | [**[String]**](String.html)| Types of consuming resources to return, if consuming resources are requested | [optional] <br />**Values**: ACDLANGUAGE, ACDSKILL, ACDWRAPUPCODE, BRIDGEACTION, COMPOSERSCRIPT, CONTACTLIST, DATAACTION, GROUP, INBOUNDCALLFLOW, INBOUNDEMAILFLOW, INQUEUECALLFLOW, IVRCONFIGURATION, LANGUAGE, OUTBOUNDCALLFLOW, QUEUE, RESPONSE, SCHEDULE, SCHEDULEGROUP, SECUREACTION, SECURECALLFLOW, SYSTEMPROMPT, USER, USERPROMPT, VOICEXML, WORKFLOW |
{: class="table table-striped"}

### Return type

[**DependencyObjectEntityListing**](DependencyObjectEntityListing.html)

<a name="getArchitectDependencytrackingBuild"></a>

# [**DependencyStatus**](DependencyStatus.html) getArchitectDependencytrackingBuild()

GET /api/v2/architect/dependencytracking/build

Get Dependency Tracking build status for an organization



### Example

~~~ javascript
const platformClient = require('purecloud-platform-client-v2');

// Configure OAuth2 access token for authorization: PureCloud Auth
platformClient.ApiClient.instance.authentications['PureCloud Auth'].accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new platformClient.ArchitectApi();
apiInstance.getArchitectDependencytrackingBuild()
  .then(function(data) {
    console.log(`getArchitectDependencytrackingBuild success! data: ${data}`);
  })
  .catch(function(error) {
  	console.log('There was a failure calling getArchitectDependencytrackingBuild');
    console.error(error);
  });

~~~

### Parameters

This endpoint does not need any parameter.
{: class="table table-striped"}

### Return type

[**DependencyStatus**](DependencyStatus.html)

<a name="getArchitectDependencytrackingConsumedresources"></a>

# [**ConsumedResourcesEntityListing**](ConsumedResourcesEntityListing.html) getArchitectDependencytrackingConsumedresources(id, version, objectType, opts)

GET /api/v2/architect/dependencytracking/consumedresources

Get resources that are consumed by a given Dependency Tracking object



### Example

~~~ javascript
const platformClient = require('purecloud-platform-client-v2');

// Configure OAuth2 access token for authorization: PureCloud Auth
platformClient.ApiClient.instance.authentications['PureCloud Auth'].accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new platformClient.ArchitectApi();

var id = "id_example"; // String | Consuming object ID

var version = "version_example"; // String | Consuming object version

var objectType = "objectType_example"; // String | Consuming object type

var opts = { 
  'resourceType': ["resourceType_example"] // [String] | Types of consumed resources to show
};
apiInstance.getArchitectDependencytrackingConsumedresources(id, version, objectType, opts)
  .then(function(data) {
    console.log(`getArchitectDependencytrackingConsumedresources success! data: ${data}`);
  })
  .catch(function(error) {
  	console.log('There was a failure calling getArchitectDependencytrackingConsumedresources');
    console.error(error);
  });

~~~

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **id** | **String**| Consuming object ID |  |
 **version** | **String**| Consuming object version |  |
 **objectType** | **String**| Consuming object type | <br />**Values**: ACDLANGUAGE, ACDSKILL, ACDWRAPUPCODE, BRIDGEACTION, COMPOSERSCRIPT, CONTACTLIST, DATAACTION, GROUP, INBOUNDCALLFLOW, INBOUNDEMAILFLOW, INQUEUECALLFLOW, IVRCONFIGURATION, LANGUAGE, OUTBOUNDCALLFLOW, QUEUE, RESPONSE, SCHEDULE, SCHEDULEGROUP, SECUREACTION, SECURECALLFLOW, SYSTEMPROMPT, USER, USERPROMPT, VOICEXML, WORKFLOW |
 **resourceType** | [**[String]**](String.html)| Types of consumed resources to show | [optional] <br />**Values**: ACDLANGUAGE, ACDSKILL, ACDWRAPUPCODE, BRIDGEACTION, COMPOSERSCRIPT, CONTACTLIST, DATAACTION, GROUP, INBOUNDCALLFLOW, INBOUNDEMAILFLOW, INQUEUECALLFLOW, IVRCONFIGURATION, LANGUAGE, OUTBOUNDCALLFLOW, QUEUE, RESPONSE, SCHEDULE, SCHEDULEGROUP, SECUREACTION, SECURECALLFLOW, SYSTEMPROMPT, USER, USERPROMPT, VOICEXML, WORKFLOW |
{: class="table table-striped"}

### Return type

[**ConsumedResourcesEntityListing**](ConsumedResourcesEntityListing.html)

<a name="getArchitectDependencytrackingConsumingresources"></a>

# [**ConsumingResourcesEntityListing**](ConsumingResourcesEntityListing.html) getArchitectDependencytrackingConsumingresources(id, objectType, opts)

GET /api/v2/architect/dependencytracking/consumingresources

Get resources that consume a given Dependency Tracking object



### Example

~~~ javascript
const platformClient = require('purecloud-platform-client-v2');

// Configure OAuth2 access token for authorization: PureCloud Auth
platformClient.ApiClient.instance.authentications['PureCloud Auth'].accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new platformClient.ArchitectApi();

var id = "id_example"; // String | Consumed object ID

var objectType = "objectType_example"; // String | Consumed object type (only versioned object types are valid)

var opts = { 
  'resourceType': ["resourceType_example"] // [String] | Types of consuming resources to show
};
apiInstance.getArchitectDependencytrackingConsumingresources(id, objectType, opts)
  .then(function(data) {
    console.log(`getArchitectDependencytrackingConsumingresources success! data: ${data}`);
  })
  .catch(function(error) {
  	console.log('There was a failure calling getArchitectDependencytrackingConsumingresources');
    console.error(error);
  });

~~~

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **id** | **String**| Consumed object ID |  |
 **objectType** | **String**| Consumed object type (only versioned object types are valid) | <br />**Values**: ACDLANGUAGE, ACDSKILL, ACDWRAPUPCODE, BRIDGEACTION, COMPOSERSCRIPT, CONTACTLIST, DATAACTION, GROUP, INBOUNDCALLFLOW, INBOUNDEMAILFLOW, INQUEUECALLFLOW, IVRCONFIGURATION, LANGUAGE, OUTBOUNDCALLFLOW, QUEUE, RESPONSE, SCHEDULE, SCHEDULEGROUP, SECUREACTION, SECURECALLFLOW, SYSTEMPROMPT, USER, USERPROMPT, VOICEXML, WORKFLOW |
 **resourceType** | [**[String]**](String.html)| Types of consuming resources to show | [optional] <br />**Values**: ACDLANGUAGE, ACDSKILL, ACDWRAPUPCODE, BRIDGEACTION, COMPOSERSCRIPT, CONTACTLIST, DATAACTION, GROUP, INBOUNDCALLFLOW, INBOUNDEMAILFLOW, INQUEUECALLFLOW, IVRCONFIGURATION, LANGUAGE, OUTBOUNDCALLFLOW, QUEUE, RESPONSE, SCHEDULE, SCHEDULEGROUP, SECUREACTION, SECURECALLFLOW, SYSTEMPROMPT, USER, USERPROMPT, VOICEXML, WORKFLOW |
{: class="table table-striped"}

### Return type

[**ConsumingResourcesEntityListing**](ConsumingResourcesEntityListing.html)

<a name="getArchitectDependencytrackingDeletedresourceconsumers"></a>

# [**DependencyObjectEntityListing**](DependencyObjectEntityListing.html) getArchitectDependencytrackingDeletedresourceconsumers(opts)

GET /api/v2/architect/dependencytracking/deletedresourceconsumers

Get Dependency Tracking objects that consume deleted resources



### Example

~~~ javascript
const platformClient = require('purecloud-platform-client-v2');

// Configure OAuth2 access token for authorization: PureCloud Auth
platformClient.ApiClient.instance.authentications['PureCloud Auth'].accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new platformClient.ArchitectApi();

var opts = { 
  'name': "name_example", // String | Name to search for
  'objectType': ["objectType_example"], // [String] | Object type(s) to search for
  'flowFilter': "flowFilter_example", // String | Show only checkedIn or published flows
  'consumedResources': false, // Boolean | Return consumed resources?
  'consumedResourceType': ["consumedResourceType_example"], // [String] | Resource type(s) to return
  'pageNumber': 1, // Number | Page number
  'pageSize': 25 // Number | Page size
};
apiInstance.getArchitectDependencytrackingDeletedresourceconsumers(opts)
  .then(function(data) {
    console.log(`getArchitectDependencytrackingDeletedresourceconsumers success! data: ${data}`);
  })
  .catch(function(error) {
  	console.log('There was a failure calling getArchitectDependencytrackingDeletedresourceconsumers');
    console.error(error);
  });

~~~

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **name** | **String**| Name to search for | [optional]  |
 **objectType** | [**[String]**](String.html)| Object type(s) to search for | [optional] <br />**Values**: ACDLANGUAGE, ACDSKILL, ACDWRAPUPCODE, BRIDGEACTION, COMPOSERSCRIPT, CONTACTLIST, DATAACTION, GROUP, INBOUNDCALLFLOW, INBOUNDEMAILFLOW, INQUEUECALLFLOW, IVRCONFIGURATION, LANGUAGE, OUTBOUNDCALLFLOW, QUEUE, RESPONSE, SCHEDULE, SCHEDULEGROUP, SECUREACTION, SECURECALLFLOW, SYSTEMPROMPT, USER, USERPROMPT, VOICEXML, WORKFLOW |
 **flowFilter** | **String**| Show only checkedIn or published flows | [optional] <br />**Values**: checkedIn, published |
 **consumedResources** | **Boolean**| Return consumed resources? | [optional] [default to false] |
 **consumedResourceType** | [**[String]**](String.html)| Resource type(s) to return | [optional] <br />**Values**: ACDLANGUAGE, ACDSKILL, ACDWRAPUPCODE, BRIDGEACTION, COMPOSERSCRIPT, CONTACTLIST, DATAACTION, GROUP, INBOUNDCALLFLOW, INBOUNDEMAILFLOW, INQUEUECALLFLOW, IVRCONFIGURATION, LANGUAGE, OUTBOUNDCALLFLOW, QUEUE, RESPONSE, SCHEDULE, SCHEDULEGROUP, SECUREACTION, SECURECALLFLOW, SYSTEMPROMPT, USER, USERPROMPT, VOICEXML, WORKFLOW |
 **pageNumber** | **Number**| Page number | [optional] [default to 1] |
 **pageSize** | **Number**| Page size | [optional] [default to 25] |
{: class="table table-striped"}

### Return type

[**DependencyObjectEntityListing**](DependencyObjectEntityListing.html)

<a name="getArchitectDependencytrackingObject"></a>

# [**DependencyObject**](DependencyObject.html) getArchitectDependencytrackingObject(id, opts)

GET /api/v2/architect/dependencytracking/object

Get a Dependency Tracking object



### Example

~~~ javascript
const platformClient = require('purecloud-platform-client-v2');

// Configure OAuth2 access token for authorization: PureCloud Auth
platformClient.ApiClient.instance.authentications['PureCloud Auth'].accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new platformClient.ArchitectApi();

var id = "id_example"; // String | Object ID

var opts = { 
  'version': "version_example", // String | Object version
  'objectType': "objectType_example", // String | Object type
  'consumedResources': true, // Boolean | Include resources this item consumes
  'consumingResources': true, // Boolean | Include resources that consume this item
  'consumedResourceType': ["consumedResourceType_example"], // [String] | Types of consumed resources to return, if consumed resources are requested
  'consumingResourceType': ["consumingResourceType_example"] // [String] | Types of consuming resources to return, if consuming resources are requested
};
apiInstance.getArchitectDependencytrackingObject(id, opts)
  .then(function(data) {
    console.log(`getArchitectDependencytrackingObject success! data: ${data}`);
  })
  .catch(function(error) {
  	console.log('There was a failure calling getArchitectDependencytrackingObject');
    console.error(error);
  });

~~~

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **id** | **String**| Object ID |  |
 **version** | **String**| Object version | [optional]  |
 **objectType** | **String**| Object type | [optional] <br />**Values**: ACDLANGUAGE, ACDSKILL, ACDWRAPUPCODE, BRIDGEACTION, COMPOSERSCRIPT, CONTACTLIST, DATAACTION, GROUP, INBOUNDCALLFLOW, INBOUNDEMAILFLOW, INQUEUECALLFLOW, IVRCONFIGURATION, LANGUAGE, OUTBOUNDCALLFLOW, QUEUE, RESPONSE, SCHEDULE, SCHEDULEGROUP, SECUREACTION, SECURECALLFLOW, SYSTEMPROMPT, USER, USERPROMPT, VOICEXML, WORKFLOW |
 **consumedResources** | **Boolean**| Include resources this item consumes | [optional]  |
 **consumingResources** | **Boolean**| Include resources that consume this item | [optional]  |
 **consumedResourceType** | [**[String]**](String.html)| Types of consumed resources to return, if consumed resources are requested | [optional] <br />**Values**: ACDLANGUAGE, ACDSKILL, ACDWRAPUPCODE, BRIDGEACTION, COMPOSERSCRIPT, CONTACTLIST, DATAACTION, GROUP, INBOUNDCALLFLOW, INBOUNDEMAILFLOW, INQUEUECALLFLOW, IVRCONFIGURATION, LANGUAGE, OUTBOUNDCALLFLOW, QUEUE, RESPONSE, SCHEDULE, SCHEDULEGROUP, SECUREACTION, SECURECALLFLOW, SYSTEMPROMPT, USER, USERPROMPT, VOICEXML, WORKFLOW |
 **consumingResourceType** | [**[String]**](String.html)| Types of consuming resources to return, if consuming resources are requested | [optional] <br />**Values**: ACDLANGUAGE, ACDSKILL, ACDWRAPUPCODE, BRIDGEACTION, COMPOSERSCRIPT, CONTACTLIST, DATAACTION, GROUP, INBOUNDCALLFLOW, INBOUNDEMAILFLOW, INQUEUECALLFLOW, IVRCONFIGURATION, LANGUAGE, OUTBOUNDCALLFLOW, QUEUE, RESPONSE, SCHEDULE, SCHEDULEGROUP, SECUREACTION, SECURECALLFLOW, SYSTEMPROMPT, USER, USERPROMPT, VOICEXML, WORKFLOW |
{: class="table table-striped"}

### Return type

[**DependencyObject**](DependencyObject.html)

<a name="getArchitectDependencytrackingType"></a>

# [**DependencyType**](DependencyType.html) getArchitectDependencytrackingType(typeId)

GET /api/v2/architect/dependencytracking/types/{typeId}

Get a Dependency Tracking type.



### Example

~~~ javascript
const platformClient = require('purecloud-platform-client-v2');

// Configure OAuth2 access token for authorization: PureCloud Auth
platformClient.ApiClient.instance.authentications['PureCloud Auth'].accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new platformClient.ArchitectApi();

var typeId = "typeId_example"; // String | Type ID

apiInstance.getArchitectDependencytrackingType(typeId)
  .then(function(data) {
    console.log(`getArchitectDependencytrackingType success! data: ${data}`);
  })
  .catch(function(error) {
  	console.log('There was a failure calling getArchitectDependencytrackingType');
    console.error(error);
  });

~~~

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **typeId** | **String**| Type ID |  |
{: class="table table-striped"}

### Return type

[**DependencyType**](DependencyType.html)

<a name="getArchitectDependencytrackingTypes"></a>

# [**DependencyTypeEntityListing**](DependencyTypeEntityListing.html) getArchitectDependencytrackingTypes(opts)

GET /api/v2/architect/dependencytracking/types

Get Dependency Tracking types.



### Example

~~~ javascript
const platformClient = require('purecloud-platform-client-v2');

// Configure OAuth2 access token for authorization: PureCloud Auth
platformClient.ApiClient.instance.authentications['PureCloud Auth'].accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new platformClient.ArchitectApi();

var opts = { 
  'pageNumber': 1, // Number | Page number
  'pageSize': 25 // Number | Page size
};
apiInstance.getArchitectDependencytrackingTypes(opts)
  .then(function(data) {
    console.log(`getArchitectDependencytrackingTypes success! data: ${data}`);
  })
  .catch(function(error) {
  	console.log('There was a failure calling getArchitectDependencytrackingTypes');
    console.error(error);
  });

~~~

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **pageNumber** | **Number**| Page number | [optional] [default to 1] |
 **pageSize** | **Number**| Page size | [optional] [default to 25] |
{: class="table table-striped"}

### Return type

[**DependencyTypeEntityListing**](DependencyTypeEntityListing.html)

<a name="getArchitectDependencytrackingUpdatedresourceconsumers"></a>

# [**DependencyObjectEntityListing**](DependencyObjectEntityListing.html) getArchitectDependencytrackingUpdatedresourceconsumers(opts)

GET /api/v2/architect/dependencytracking/updatedresourceconsumers

Get Dependency Tracking objects that depend on updated resources



### Example

~~~ javascript
const platformClient = require('purecloud-platform-client-v2');

// Configure OAuth2 access token for authorization: PureCloud Auth
platformClient.ApiClient.instance.authentications['PureCloud Auth'].accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new platformClient.ArchitectApi();

var opts = { 
  'name': "name_example", // String | Name to search for
  'objectType': ["objectType_example"], // [String] | Object type(s) to search for
  'consumedResources': false, // Boolean | Return consumed resources?
  'consumedResourceType': ["consumedResourceType_example"], // [String] | Resource type(s) to return
  'pageNumber': 1, // Number | Page number
  'pageSize': 25 // Number | Page size
};
apiInstance.getArchitectDependencytrackingUpdatedresourceconsumers(opts)
  .then(function(data) {
    console.log(`getArchitectDependencytrackingUpdatedresourceconsumers success! data: ${data}`);
  })
  .catch(function(error) {
  	console.log('There was a failure calling getArchitectDependencytrackingUpdatedresourceconsumers');
    console.error(error);
  });

~~~

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **name** | **String**| Name to search for | [optional]  |
 **objectType** | [**[String]**](String.html)| Object type(s) to search for | [optional] <br />**Values**: ACDLANGUAGE, ACDSKILL, ACDWRAPUPCODE, BRIDGEACTION, COMPOSERSCRIPT, CONTACTLIST, DATAACTION, GROUP, INBOUNDCALLFLOW, INBOUNDEMAILFLOW, INQUEUECALLFLOW, IVRCONFIGURATION, LANGUAGE, OUTBOUNDCALLFLOW, QUEUE, RESPONSE, SCHEDULE, SCHEDULEGROUP, SECUREACTION, SECURECALLFLOW, SYSTEMPROMPT, USER, USERPROMPT, VOICEXML, WORKFLOW |
 **consumedResources** | **Boolean**| Return consumed resources? | [optional] [default to false] |
 **consumedResourceType** | [**[String]**](String.html)| Resource type(s) to return | [optional] <br />**Values**: ACDLANGUAGE, ACDSKILL, ACDWRAPUPCODE, BRIDGEACTION, COMPOSERSCRIPT, CONTACTLIST, DATAACTION, GROUP, INBOUNDCALLFLOW, INBOUNDEMAILFLOW, INQUEUECALLFLOW, IVRCONFIGURATION, LANGUAGE, OUTBOUNDCALLFLOW, QUEUE, RESPONSE, SCHEDULE, SCHEDULEGROUP, SECUREACTION, SECURECALLFLOW, SYSTEMPROMPT, USER, USERPROMPT, VOICEXML, WORKFLOW |
 **pageNumber** | **Number**| Page number | [optional] [default to 1] |
 **pageSize** | **Number**| Page size | [optional] [default to 25] |
{: class="table table-striped"}

### Return type

[**DependencyObjectEntityListing**](DependencyObjectEntityListing.html)

<a name="getArchitectPrompt"></a>

# [**Prompt**](Prompt.html) getArchitectPrompt(promptId)

GET /api/v2/architect/prompts/{promptId}

Get specified user prompt



### Example

~~~ javascript
const platformClient = require('purecloud-platform-client-v2');

// Configure OAuth2 access token for authorization: PureCloud Auth
platformClient.ApiClient.instance.authentications['PureCloud Auth'].accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new platformClient.ArchitectApi();

var promptId = "promptId_example"; // String | Prompt ID

apiInstance.getArchitectPrompt(promptId)
  .then(function(data) {
    console.log(`getArchitectPrompt success! data: ${data}`);
  })
  .catch(function(error) {
  	console.log('There was a failure calling getArchitectPrompt');
    console.error(error);
  });

~~~

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **promptId** | **String**| Prompt ID |  |
{: class="table table-striped"}

### Return type

[**Prompt**](Prompt.html)

<a name="getArchitectPromptResource"></a>

# [**PromptAsset**](PromptAsset.html) getArchitectPromptResource(promptId, languageCode)

GET /api/v2/architect/prompts/{promptId}/resources/{languageCode}

Get specified user prompt resource



### Example

~~~ javascript
const platformClient = require('purecloud-platform-client-v2');

// Configure OAuth2 access token for authorization: PureCloud Auth
platformClient.ApiClient.instance.authentications['PureCloud Auth'].accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new platformClient.ArchitectApi();

var promptId = "promptId_example"; // String | Prompt ID

var languageCode = "languageCode_example"; // String | Language

apiInstance.getArchitectPromptResource(promptId, languageCode)
  .then(function(data) {
    console.log(`getArchitectPromptResource success! data: ${data}`);
  })
  .catch(function(error) {
  	console.log('There was a failure calling getArchitectPromptResource');
    console.error(error);
  });

~~~

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **promptId** | **String**| Prompt ID |  |
 **languageCode** | **String**| Language |  |
{: class="table table-striped"}

### Return type

[**PromptAsset**](PromptAsset.html)

<a name="getArchitectPromptResources"></a>

# [**PromptAssetEntityListing**](PromptAssetEntityListing.html) getArchitectPromptResources(promptId, opts)

GET /api/v2/architect/prompts/{promptId}/resources

Get a pageable list of user prompt resources

The returned list is pageable, and query parameters can be used for filtering.

### Example

~~~ javascript
const platformClient = require('purecloud-platform-client-v2');

// Configure OAuth2 access token for authorization: PureCloud Auth
platformClient.ApiClient.instance.authentications['PureCloud Auth'].accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new platformClient.ArchitectApi();

var promptId = "promptId_example"; // String | Prompt ID

var opts = { 
  'pageNumber': 1, // Number | Page number
  'pageSize': 25 // Number | Page size
};
apiInstance.getArchitectPromptResources(promptId, opts)
  .then(function(data) {
    console.log(`getArchitectPromptResources success! data: ${data}`);
  })
  .catch(function(error) {
  	console.log('There was a failure calling getArchitectPromptResources');
    console.error(error);
  });

~~~

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **promptId** | **String**| Prompt ID |  |
 **pageNumber** | **Number**| Page number | [optional] [default to 1] |
 **pageSize** | **Number**| Page size | [optional] [default to 25] |
{: class="table table-striped"}

### Return type

[**PromptAssetEntityListing**](PromptAssetEntityListing.html)

<a name="getArchitectPrompts"></a>

# [**PromptEntityListing**](PromptEntityListing.html) getArchitectPrompts(opts)

GET /api/v2/architect/prompts

Get a pageable list of user prompts

The returned list is pageable, and query parameters can be used for filtering.  Multiple names can be specified, in which case all matching prompts will be returned, and no other filters will be evaluated.

### Example

~~~ javascript
const platformClient = require('purecloud-platform-client-v2');

// Configure OAuth2 access token for authorization: PureCloud Auth
platformClient.ApiClient.instance.authentications['PureCloud Auth'].accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new platformClient.ArchitectApi();

var opts = { 
  'pageNumber': 1, // Number | Page number
  'pageSize': 25, // Number | Page size
  'name': "name_example", // String | Name
  'description': "description_example", // String | Description
  'nameOrDescription': "nameOrDescription_example" // String | Name or description
};
apiInstance.getArchitectPrompts(opts)
  .then(function(data) {
    console.log(`getArchitectPrompts success! data: ${data}`);
  })
  .catch(function(error) {
  	console.log('There was a failure calling getArchitectPrompts');
    console.error(error);
  });

~~~

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **pageNumber** | **Number**| Page number | [optional] [default to 1] |
 **pageSize** | **Number**| Page size | [optional] [default to 25] |
 **name** | **String**| Name | [optional]  |
 **description** | **String**| Description | [optional]  |
 **nameOrDescription** | **String**| Name or description | [optional]  |
{: class="table table-striped"}

### Return type

[**PromptEntityListing**](PromptEntityListing.html)

<a name="getArchitectSystemprompt"></a>

# [**SystemPrompt**](SystemPrompt.html) getArchitectSystemprompt(promptId)

GET /api/v2/architect/systemprompts/{promptId}

Get a system prompt



### Example

~~~ javascript
const platformClient = require('purecloud-platform-client-v2');

// Configure OAuth2 access token for authorization: PureCloud Auth
platformClient.ApiClient.instance.authentications['PureCloud Auth'].accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new platformClient.ArchitectApi();

var promptId = "promptId_example"; // String | promptId

apiInstance.getArchitectSystemprompt(promptId)
  .then(function(data) {
    console.log(`getArchitectSystemprompt success! data: ${data}`);
  })
  .catch(function(error) {
  	console.log('There was a failure calling getArchitectSystemprompt');
    console.error(error);
  });

~~~

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **promptId** | **String**| promptId |  |
{: class="table table-striped"}

### Return type

[**SystemPrompt**](SystemPrompt.html)

<a name="getArchitectSystempromptResource"></a>

# [**SystemPromptAsset**](SystemPromptAsset.html) getArchitectSystempromptResource(promptId, languageCode)

GET /api/v2/architect/systemprompts/{promptId}/resources/{languageCode}

Get a system prompt resource.



### Example

~~~ javascript
const platformClient = require('purecloud-platform-client-v2');

// Configure OAuth2 access token for authorization: PureCloud Auth
platformClient.ApiClient.instance.authentications['PureCloud Auth'].accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new platformClient.ArchitectApi();

var promptId = "promptId_example"; // String | Prompt ID

var languageCode = "languageCode_example"; // String | Language

apiInstance.getArchitectSystempromptResource(promptId, languageCode)
  .then(function(data) {
    console.log(`getArchitectSystempromptResource success! data: ${data}`);
  })
  .catch(function(error) {
  	console.log('There was a failure calling getArchitectSystempromptResource');
    console.error(error);
  });

~~~

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **promptId** | **String**| Prompt ID |  |
 **languageCode** | **String**| Language |  |
{: class="table table-striped"}

### Return type

[**SystemPromptAsset**](SystemPromptAsset.html)

<a name="getArchitectSystempromptResources"></a>

# [**SystemPromptAssetEntityListing**](SystemPromptAssetEntityListing.html) getArchitectSystempromptResources(promptId, opts)

GET /api/v2/architect/systemprompts/{promptId}/resources

Get system prompt resources.



### Example

~~~ javascript
const platformClient = require('purecloud-platform-client-v2');

// Configure OAuth2 access token for authorization: PureCloud Auth
platformClient.ApiClient.instance.authentications['PureCloud Auth'].accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new platformClient.ArchitectApi();

var promptId = "promptId_example"; // String | Prompt ID

var opts = { 
  'pageNumber': 1, // Number | Page number
  'pageSize': 25, // Number | Page size
  'sortBy': "id", // String | Sort by
  'sortOrder': "asc" // String | Sort order
};
apiInstance.getArchitectSystempromptResources(promptId, opts)
  .then(function(data) {
    console.log(`getArchitectSystempromptResources success! data: ${data}`);
  })
  .catch(function(error) {
  	console.log('There was a failure calling getArchitectSystempromptResources');
    console.error(error);
  });

~~~

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **promptId** | **String**| Prompt ID |  |
 **pageNumber** | **Number**| Page number | [optional] [default to 1] |
 **pageSize** | **Number**| Page size | [optional] [default to 25] |
 **sortBy** | **String**| Sort by | [optional] [default to id] |
 **sortOrder** | **String**| Sort order | [optional] [default to asc] |
{: class="table table-striped"}

### Return type

[**SystemPromptAssetEntityListing**](SystemPromptAssetEntityListing.html)

<a name="getArchitectSystemprompts"></a>

# [**SystemPromptEntityListing**](SystemPromptEntityListing.html) getArchitectSystemprompts(opts)

GET /api/v2/architect/systemprompts

Get System Prompts



### Example

~~~ javascript
const platformClient = require('purecloud-platform-client-v2');

// Configure OAuth2 access token for authorization: PureCloud Auth
platformClient.ApiClient.instance.authentications['PureCloud Auth'].accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new platformClient.ArchitectApi();

var opts = { 
  'pageNumber': 1, // Number | Page number
  'pageSize': 25, // Number | Page size
  'sortBy': "id", // String | Sort by
  'sortOrder': "asc", // String | Sort order
  'name': "name_example", // String | Name
  'description': "description_example", // String | Description
  'nameOrDescription': "nameOrDescription_example" // String | Name or description
};
apiInstance.getArchitectSystemprompts(opts)
  .then(function(data) {
    console.log(`getArchitectSystemprompts success! data: ${data}`);
  })
  .catch(function(error) {
  	console.log('There was a failure calling getArchitectSystemprompts');
    console.error(error);
  });

~~~

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **pageNumber** | **Number**| Page number | [optional] [default to 1] |
 **pageSize** | **Number**| Page size | [optional] [default to 25] |
 **sortBy** | **String**| Sort by | [optional] [default to id] |
 **sortOrder** | **String**| Sort order | [optional] [default to asc] |
 **name** | **String**| Name | [optional]  |
 **description** | **String**| Description | [optional]  |
 **nameOrDescription** | **String**| Name or description | [optional]  |
{: class="table table-striped"}

### Return type

[**SystemPromptEntityListing**](SystemPromptEntityListing.html)

<a name="getFlow"></a>

# [**Flow**](Flow.html) getFlow(flowId, opts)

GET /api/v2/flows/{flowId}

Get flow



### Example

~~~ javascript
const platformClient = require('purecloud-platform-client-v2');

// Configure OAuth2 access token for authorization: PureCloud Auth
platformClient.ApiClient.instance.authentications['PureCloud Auth'].accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new platformClient.ArchitectApi();

var flowId = "flowId_example"; // String | Flow ID

var opts = { 
  'deleted': false // Boolean | Include deleted flows
};
apiInstance.getFlow(flowId, opts)
  .then(function(data) {
    console.log(`getFlow success! data: ${data}`);
  })
  .catch(function(error) {
  	console.log('There was a failure calling getFlow');
    console.error(error);
  });

~~~

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **flowId** | **String**| Flow ID |  |
 **deleted** | **Boolean**| Include deleted flows | [optional] [default to false] |
{: class="table table-striped"}

### Return type

[**Flow**](Flow.html)

<a name="getFlowLatestconfiguration"></a>

# **Object** getFlowLatestconfiguration(flowId, opts)

GET /api/v2/flows/{flowId}/latestconfiguration

Get the latest configuration for flow



### Example

~~~ javascript
const platformClient = require('purecloud-platform-client-v2');

// Configure OAuth2 access token for authorization: PureCloud Auth
platformClient.ApiClient.instance.authentications['PureCloud Auth'].accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new platformClient.ArchitectApi();

var flowId = "flowId_example"; // String | Flow ID

var opts = { 
  'deleted': false // Boolean | Include deleted flows
};
apiInstance.getFlowLatestconfiguration(flowId, opts)
  .then(function(data) {
    console.log(`getFlowLatestconfiguration success! data: ${data}`);
  })
  .catch(function(error) {
  	console.log('There was a failure calling getFlowLatestconfiguration');
    console.error(error);
  });

~~~

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **flowId** | **String**| Flow ID |  |
 **deleted** | **Boolean**| Include deleted flows | [optional] [default to false] |
{: class="table table-striped"}

### Return type

**Object**

<a name="getFlowVersion"></a>

# [**FlowVersion**](FlowVersion.html) getFlowVersion(flowId, versionId, opts)

GET /api/v2/flows/{flowId}/versions/{versionId}

Get flow version



### Example

~~~ javascript
const platformClient = require('purecloud-platform-client-v2');

// Configure OAuth2 access token for authorization: PureCloud Auth
platformClient.ApiClient.instance.authentications['PureCloud Auth'].accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new platformClient.ArchitectApi();

var flowId = "flowId_example"; // String | Flow ID

var versionId = "versionId_example"; // String | Version ID

var opts = { 
  'deleted': "deleted_example" // String | Include deleted flows
};
apiInstance.getFlowVersion(flowId, versionId, opts)
  .then(function(data) {
    console.log(`getFlowVersion success! data: ${data}`);
  })
  .catch(function(error) {
  	console.log('There was a failure calling getFlowVersion');
    console.error(error);
  });

~~~

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **flowId** | **String**| Flow ID |  |
 **versionId** | **String**| Version ID |  |
 **deleted** | **String**| Include deleted flows | [optional]  |
{: class="table table-striped"}

### Return type

[**FlowVersion**](FlowVersion.html)

<a name="getFlowVersionConfiguration"></a>

# **Object** getFlowVersionConfiguration(flowId, versionId, opts)

GET /api/v2/flows/{flowId}/versions/{versionId}/configuration

Create flow version configuration



### Example

~~~ javascript
const platformClient = require('purecloud-platform-client-v2');

// Configure OAuth2 access token for authorization: PureCloud Auth
platformClient.ApiClient.instance.authentications['PureCloud Auth'].accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new platformClient.ArchitectApi();

var flowId = "flowId_example"; // String | Flow ID

var versionId = "versionId_example"; // String | Version ID

var opts = { 
  'deleted': "deleted_example" // String | Include deleted flows
};
apiInstance.getFlowVersionConfiguration(flowId, versionId, opts)
  .then(function(data) {
    console.log(`getFlowVersionConfiguration success! data: ${data}`);
  })
  .catch(function(error) {
  	console.log('There was a failure calling getFlowVersionConfiguration');
    console.error(error);
  });

~~~

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **flowId** | **String**| Flow ID |  |
 **versionId** | **String**| Version ID |  |
 **deleted** | **String**| Include deleted flows | [optional]  |
{: class="table table-striped"}

### Return type

**Object**

<a name="getFlowVersions"></a>

# [**FlowVersionEntityListing**](FlowVersionEntityListing.html) getFlowVersions(flowId, opts)

GET /api/v2/flows/{flowId}/versions

Get flow version list



### Example

~~~ javascript
const platformClient = require('purecloud-platform-client-v2');

// Configure OAuth2 access token for authorization: PureCloud Auth
platformClient.ApiClient.instance.authentications['PureCloud Auth'].accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new platformClient.ArchitectApi();

var flowId = "flowId_example"; // String | Flow ID

var opts = { 
  'pageNumber': 1, // Number | Page number
  'pageSize': 25, // Number | Page size
  'deleted': true // Boolean | Include deleted flows
};
apiInstance.getFlowVersions(flowId, opts)
  .then(function(data) {
    console.log(`getFlowVersions success! data: ${data}`);
  })
  .catch(function(error) {
  	console.log('There was a failure calling getFlowVersions');
    console.error(error);
  });

~~~

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **flowId** | **String**| Flow ID |  |
 **pageNumber** | **Number**| Page number | [optional] [default to 1] |
 **pageSize** | **Number**| Page size | [optional] [default to 25] |
 **deleted** | **Boolean**| Include deleted flows | [optional]  |
{: class="table table-striped"}

### Return type

[**FlowVersionEntityListing**](FlowVersionEntityListing.html)

<a name="getFlows"></a>

# [**FlowEntityListing**](FlowEntityListing.html) getFlows(type, opts)

GET /api/v2/flows

Get a pageable list of flows, filtered by query parameters

Multiple IDs can be specified, in which case all matching flows will be returned, and no other parameters will be evaluated.

### Example

~~~ javascript
const platformClient = require('purecloud-platform-client-v2');

// Configure OAuth2 access token for authorization: PureCloud Auth
platformClient.ApiClient.instance.authentications['PureCloud Auth'].accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new platformClient.ArchitectApi();

var type = "type_example"; // String | Type

var opts = { 
  'pageNumber': 1, // Number | Page number
  'pageSize': 25, // Number | Page size
  'sortBy': "id", // String | Sort by
  'sortOrder': "asc", // String | Sort order
  'id': ["id_example"], // [String] | ID
  'name': "name_example", // String | Name
  'description': "description_example", // String | Description
  'nameOrDescription': "nameOrDescription_example", // String | Name or description
  'publishVersionId': "publishVersionId_example", // String | Publish version ID
  'editableBy': "editableBy_example", // String | Editable by
  'lockedBy': "lockedBy_example", // String | Locked by
  'secure': "secure_example", // String | Secure
  'deleted': false, // Boolean | Include deleted
  'includeSchemas': false // Boolean | Include variable schemas
};
apiInstance.getFlows(type, opts)
  .then(function(data) {
    console.log(`getFlows success! data: ${data}`);
  })
  .catch(function(error) {
  	console.log('There was a failure calling getFlows');
    console.error(error);
  });

~~~

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **type** | **String**| Type |  |
 **pageNumber** | **Number**| Page number | [optional] [default to 1] |
 **pageSize** | **Number**| Page size | [optional] [default to 25] |
 **sortBy** | **String**| Sort by | [optional] [default to id] |
 **sortOrder** | **String**| Sort order | [optional] [default to asc] |
 **id** | [**[String]**](String.html)| ID | [optional]  |
 **name** | **String**| Name | [optional]  |
 **description** | **String**| Description | [optional]  |
 **nameOrDescription** | **String**| Name or description | [optional]  |
 **publishVersionId** | **String**| Publish version ID | [optional]  |
 **editableBy** | **String**| Editable by | [optional]  |
 **lockedBy** | **String**| Locked by | [optional]  |
 **secure** | **String**| Secure | [optional] <br />**Values**: any, checkedin, published |
 **deleted** | **Boolean**| Include deleted | [optional] [default to false] |
 **includeSchemas** | **Boolean**| Include variable schemas | [optional] [default to false] |
{: class="table table-striped"}

### Return type

[**FlowEntityListing**](FlowEntityListing.html)

<a name="postArchitectDependencytrackingBuild"></a>

# null postArchitectDependencytrackingBuild()

POST /api/v2/architect/dependencytracking/build

Rebuild Dependency Tracking data for an organization

Asynchronous.  Notification topic: v2.architect.dependencytracking.build

### Example

~~~ javascript
const platformClient = require('purecloud-platform-client-v2');

// Configure OAuth2 access token for authorization: PureCloud Auth
platformClient.ApiClient.instance.authentications['PureCloud Auth'].accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new platformClient.ArchitectApi();
apiInstance.postArchitectDependencytrackingBuild()
  .then(function() {
    console.log('postArchitectDependencytrackingBuild returned successfully.');
  })
  .catch(function(error) {
  	console.log('There was a failure calling postArchitectDependencytrackingBuild');
    console.error(error);
  });

~~~

### Parameters

This endpoint does not need any parameter.
{: class="table table-striped"}

### Return type

null (empty response body)

<a name="postArchitectPromptResources"></a>

# [**PromptAsset**](PromptAsset.html) postArchitectPromptResources(promptId, opts)

POST /api/v2/architect/prompts/{promptId}/resources

Create a new user prompt resource



### Example

~~~ javascript
const platformClient = require('purecloud-platform-client-v2');

// Configure OAuth2 access token for authorization: PureCloud Auth
platformClient.ApiClient.instance.authentications['PureCloud Auth'].accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new platformClient.ArchitectApi();

var promptId = "promptId_example"; // String | Prompt ID

var opts = { 
  'body': new platformClient.PromptAssetCreate() // PromptAssetCreate | 
};
apiInstance.postArchitectPromptResources(promptId, opts)
  .then(function(data) {
    console.log(`postArchitectPromptResources success! data: ${data}`);
  })
  .catch(function(error) {
  	console.log('There was a failure calling postArchitectPromptResources');
    console.error(error);
  });

~~~

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **promptId** | **String**| Prompt ID |  |
 **body** | [**PromptAssetCreate**](PromptAssetCreate.html)|  | [optional]  |
{: class="table table-striped"}

### Return type

[**PromptAsset**](PromptAsset.html)

<a name="postArchitectPrompts"></a>

# [**Prompt**](Prompt.html) postArchitectPrompts(opts)

POST /api/v2/architect/prompts

Create a new user prompt



### Example

~~~ javascript
const platformClient = require('purecloud-platform-client-v2');

// Configure OAuth2 access token for authorization: PureCloud Auth
platformClient.ApiClient.instance.authentications['PureCloud Auth'].accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new platformClient.ArchitectApi();

var opts = { 
  'body': new platformClient.Prompt() // Prompt | 
};
apiInstance.postArchitectPrompts(opts)
  .then(function(data) {
    console.log(`postArchitectPrompts success! data: ${data}`);
  })
  .catch(function(error) {
  	console.log('There was a failure calling postArchitectPrompts');
    console.error(error);
  });

~~~

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **body** | [**Prompt**](Prompt.html)|  | [optional]  |
{: class="table table-striped"}

### Return type

[**Prompt**](Prompt.html)

<a name="postArchitectSystempromptResources"></a>

# [**SystemPromptAsset**](SystemPromptAsset.html) postArchitectSystempromptResources(promptId, opts)

POST /api/v2/architect/systemprompts/{promptId}/resources

Create system prompt resource override.



### Example

~~~ javascript
const platformClient = require('purecloud-platform-client-v2');

// Configure OAuth2 access token for authorization: PureCloud Auth
platformClient.ApiClient.instance.authentications['PureCloud Auth'].accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new platformClient.ArchitectApi();

var promptId = "promptId_example"; // String | Prompt ID

var opts = { 
  'body': new platformClient.SystemPromptAsset() // SystemPromptAsset | 
};
apiInstance.postArchitectSystempromptResources(promptId, opts)
  .then(function(data) {
    console.log(`postArchitectSystempromptResources success! data: ${data}`);
  })
  .catch(function(error) {
  	console.log('There was a failure calling postArchitectSystempromptResources');
    console.error(error);
  });

~~~

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **promptId** | **String**| Prompt ID |  |
 **body** | [**SystemPromptAsset**](SystemPromptAsset.html)|  | [optional]  |
{: class="table table-striped"}

### Return type

[**SystemPromptAsset**](SystemPromptAsset.html)

<a name="postFlowVersions"></a>

# [**FlowVersion**](FlowVersion.html) postFlowVersions(flowId, opts)

POST /api/v2/flows/{flowId}/versions

Create flow version



### Example

~~~ javascript
const platformClient = require('purecloud-platform-client-v2');

// Configure OAuth2 access token for authorization: PureCloud Auth
platformClient.ApiClient.instance.authentications['PureCloud Auth'].accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new platformClient.ArchitectApi();

var flowId = "flowId_example"; // String | Flow ID

var opts = { 
  'body': null // Object | 
};
apiInstance.postFlowVersions(flowId, opts)
  .then(function(data) {
    console.log(`postFlowVersions success! data: ${data}`);
  })
  .catch(function(error) {
  	console.log('There was a failure calling postFlowVersions');
    console.error(error);
  });

~~~

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **flowId** | **String**| Flow ID |  |
 **body** | **Object**|  | [optional]  |
{: class="table table-striped"}

### Return type

[**FlowVersion**](FlowVersion.html)

<a name="postFlows"></a>

# [**Flow**](Flow.html) postFlows(opts)

POST /api/v2/flows

Create flow



### Example

~~~ javascript
const platformClient = require('purecloud-platform-client-v2');

// Configure OAuth2 access token for authorization: PureCloud Auth
platformClient.ApiClient.instance.authentications['PureCloud Auth'].accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new platformClient.ArchitectApi();

var opts = { 
  'body': new platformClient.Flow() // Flow | 
};
apiInstance.postFlows(opts)
  .then(function(data) {
    console.log(`postFlows success! data: ${data}`);
  })
  .catch(function(error) {
  	console.log('There was a failure calling postFlows');
    console.error(error);
  });

~~~

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **body** | [**Flow**](Flow.html)|  | [optional]  |
{: class="table table-striped"}

### Return type

[**Flow**](Flow.html)

<a name="postFlowsActionsCheckin"></a>

# [**Flow**](Flow.html) postFlowsActionsCheckin(flow)

POST /api/v2/flows/actions/checkin

Check-in flow

Asynchronous.  Notification topic: v2.flows.{flowId}

### Example

~~~ javascript
const platformClient = require('purecloud-platform-client-v2');

// Configure OAuth2 access token for authorization: PureCloud Auth
platformClient.ApiClient.instance.authentications['PureCloud Auth'].accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new platformClient.ArchitectApi();

var flow = "flow_example"; // String | Flow ID

apiInstance.postFlowsActionsCheckin(flow)
  .then(function(data) {
    console.log(`postFlowsActionsCheckin success! data: ${data}`);
  })
  .catch(function(error) {
  	console.log('There was a failure calling postFlowsActionsCheckin');
    console.error(error);
  });

~~~

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **flow** | **String**| Flow ID |  |
{: class="table table-striped"}

### Return type

[**Flow**](Flow.html)

<a name="postFlowsActionsCheckout"></a>

# [**Flow**](Flow.html) postFlowsActionsCheckout(flow)

POST /api/v2/flows/actions/checkout

Check-out flow



### Example

~~~ javascript
const platformClient = require('purecloud-platform-client-v2');

// Configure OAuth2 access token for authorization: PureCloud Auth
platformClient.ApiClient.instance.authentications['PureCloud Auth'].accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new platformClient.ArchitectApi();

var flow = "flow_example"; // String | Flow ID

apiInstance.postFlowsActionsCheckout(flow)
  .then(function(data) {
    console.log(`postFlowsActionsCheckout success! data: ${data}`);
  })
  .catch(function(error) {
  	console.log('There was a failure calling postFlowsActionsCheckout');
    console.error(error);
  });

~~~

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **flow** | **String**| Flow ID |  |
{: class="table table-striped"}

### Return type

[**Flow**](Flow.html)

<a name="postFlowsActionsDeactivate"></a>

# [**Flow**](Flow.html) postFlowsActionsDeactivate(flow)

POST /api/v2/flows/actions/deactivate

Deactivate flow



### Example

~~~ javascript
const platformClient = require('purecloud-platform-client-v2');

// Configure OAuth2 access token for authorization: PureCloud Auth
platformClient.ApiClient.instance.authentications['PureCloud Auth'].accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new platformClient.ArchitectApi();

var flow = "flow_example"; // String | Flow ID

apiInstance.postFlowsActionsDeactivate(flow)
  .then(function(data) {
    console.log(`postFlowsActionsDeactivate success! data: ${data}`);
  })
  .catch(function(error) {
  	console.log('There was a failure calling postFlowsActionsDeactivate');
    console.error(error);
  });

~~~

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **flow** | **String**| Flow ID |  |
{: class="table table-striped"}

### Return type

[**Flow**](Flow.html)

<a name="postFlowsActionsPublish"></a>

# [**Operation**](Operation.html) postFlowsActionsPublish(flow, opts)

POST /api/v2/flows/actions/publish

Publish flow

Asynchronous.  Notification topic: v2.flows.{flowId}

### Example

~~~ javascript
const platformClient = require('purecloud-platform-client-v2');

// Configure OAuth2 access token for authorization: PureCloud Auth
platformClient.ApiClient.instance.authentications['PureCloud Auth'].accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new platformClient.ArchitectApi();

var flow = "flow_example"; // String | Flow ID

var opts = { 
  'version': "version_example" // String | version
};
apiInstance.postFlowsActionsPublish(flow, opts)
  .then(function(data) {
    console.log(`postFlowsActionsPublish success! data: ${data}`);
  })
  .catch(function(error) {
  	console.log('There was a failure calling postFlowsActionsPublish');
    console.error(error);
  });

~~~

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **flow** | **String**| Flow ID |  |
 **version** | **String**| version | [optional]  |
{: class="table table-striped"}

### Return type

[**Operation**](Operation.html)

<a name="postFlowsActionsRevert"></a>

# [**Flow**](Flow.html) postFlowsActionsRevert(flow)

POST /api/v2/flows/actions/revert

Revert flow



### Example

~~~ javascript
const platformClient = require('purecloud-platform-client-v2');

// Configure OAuth2 access token for authorization: PureCloud Auth
platformClient.ApiClient.instance.authentications['PureCloud Auth'].accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new platformClient.ArchitectApi();

var flow = "flow_example"; // String | Flow ID

apiInstance.postFlowsActionsRevert(flow)
  .then(function(data) {
    console.log(`postFlowsActionsRevert success! data: ${data}`);
  })
  .catch(function(error) {
  	console.log('There was a failure calling postFlowsActionsRevert');
    console.error(error);
  });

~~~

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **flow** | **String**| Flow ID |  |
{: class="table table-striped"}

### Return type

[**Flow**](Flow.html)

<a name="postFlowsActionsUnlock"></a>

# [**Flow**](Flow.html) postFlowsActionsUnlock(flow)

POST /api/v2/flows/actions/unlock

Unlock flow

Allows for unlocking a flow in the case where there is no flow configuration available, and thus a check-in will not unlock the flow. The user must have Architect Admin permissions to perform this action.

### Example

~~~ javascript
const platformClient = require('purecloud-platform-client-v2');

// Configure OAuth2 access token for authorization: PureCloud Auth
platformClient.ApiClient.instance.authentications['PureCloud Auth'].accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new platformClient.ArchitectApi();

var flow = "flow_example"; // String | Flow ID

apiInstance.postFlowsActionsUnlock(flow)
  .then(function(data) {
    console.log(`postFlowsActionsUnlock success! data: ${data}`);
  })
  .catch(function(error) {
  	console.log('There was a failure calling postFlowsActionsUnlock');
    console.error(error);
  });

~~~

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **flow** | **String**| Flow ID |  |
{: class="table table-striped"}

### Return type

[**Flow**](Flow.html)

<a name="putArchitectPrompt"></a>

# [**Prompt**](Prompt.html) putArchitectPrompt(promptId, opts)

PUT /api/v2/architect/prompts/{promptId}

Update specified user prompt



### Example

~~~ javascript
const platformClient = require('purecloud-platform-client-v2');

// Configure OAuth2 access token for authorization: PureCloud Auth
platformClient.ApiClient.instance.authentications['PureCloud Auth'].accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new platformClient.ArchitectApi();

var promptId = "promptId_example"; // String | Prompt ID

var opts = { 
  'body': new platformClient.Prompt() // Prompt | 
};
apiInstance.putArchitectPrompt(promptId, opts)
  .then(function(data) {
    console.log(`putArchitectPrompt success! data: ${data}`);
  })
  .catch(function(error) {
  	console.log('There was a failure calling putArchitectPrompt');
    console.error(error);
  });

~~~

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **promptId** | **String**| Prompt ID |  |
 **body** | [**Prompt**](Prompt.html)|  | [optional]  |
{: class="table table-striped"}

### Return type

[**Prompt**](Prompt.html)

<a name="putArchitectPromptResource"></a>

# [**PromptAsset**](PromptAsset.html) putArchitectPromptResource(promptId, languageCode, opts)

PUT /api/v2/architect/prompts/{promptId}/resources/{languageCode}

Update specified user prompt resource



### Example

~~~ javascript
const platformClient = require('purecloud-platform-client-v2');

// Configure OAuth2 access token for authorization: PureCloud Auth
platformClient.ApiClient.instance.authentications['PureCloud Auth'].accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new platformClient.ArchitectApi();

var promptId = "promptId_example"; // String | Prompt ID

var languageCode = "languageCode_example"; // String | Language

var opts = { 
  'body': new platformClient.PromptAsset() // PromptAsset | 
};
apiInstance.putArchitectPromptResource(promptId, languageCode, opts)
  .then(function(data) {
    console.log(`putArchitectPromptResource success! data: ${data}`);
  })
  .catch(function(error) {
  	console.log('There was a failure calling putArchitectPromptResource');
    console.error(error);
  });

~~~

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **promptId** | **String**| Prompt ID |  |
 **languageCode** | **String**| Language |  |
 **body** | [**PromptAsset**](PromptAsset.html)|  | [optional]  |
{: class="table table-striped"}

### Return type

[**PromptAsset**](PromptAsset.html)

<a name="putArchitectSystempromptResource"></a>

# [**SystemPromptAsset**](SystemPromptAsset.html) putArchitectSystempromptResource(promptId, languageCode, opts)

PUT /api/v2/architect/systemprompts/{promptId}/resources/{languageCode}

Updates a system prompt resource override.



### Example

~~~ javascript
const platformClient = require('purecloud-platform-client-v2');

// Configure OAuth2 access token for authorization: PureCloud Auth
platformClient.ApiClient.instance.authentications['PureCloud Auth'].accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new platformClient.ArchitectApi();

var promptId = "promptId_example"; // String | Prompt ID

var languageCode = "languageCode_example"; // String | Language

var opts = { 
  'body': new platformClient.SystemPromptAsset() // SystemPromptAsset | 
};
apiInstance.putArchitectSystempromptResource(promptId, languageCode, opts)
  .then(function(data) {
    console.log(`putArchitectSystempromptResource success! data: ${data}`);
  })
  .catch(function(error) {
  	console.log('There was a failure calling putArchitectSystempromptResource');
    console.error(error);
  });

~~~

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **promptId** | **String**| Prompt ID |  |
 **languageCode** | **String**| Language |  |
 **body** | [**SystemPromptAsset**](SystemPromptAsset.html)|  | [optional]  |
{: class="table table-striped"}

### Return type

[**SystemPromptAsset**](SystemPromptAsset.html)

<a name="putFlow"></a>

# [**Flow**](Flow.html) putFlow(flowId, opts)

PUT /api/v2/flows/{flowId}

Update flow



### Example

~~~ javascript
const platformClient = require('purecloud-platform-client-v2');

// Configure OAuth2 access token for authorization: PureCloud Auth
platformClient.ApiClient.instance.authentications['PureCloud Auth'].accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new platformClient.ArchitectApi();

var flowId = "flowId_example"; // String | Flow ID

var opts = { 
  'body': new platformClient.Flow() // Flow | 
};
apiInstance.putFlow(flowId, opts)
  .then(function(data) {
    console.log(`putFlow success! data: ${data}`);
  })
  .catch(function(error) {
  	console.log('There was a failure calling putFlow');
    console.error(error);
  });

~~~

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **flowId** | **String**| Flow ID |  |
 **body** | [**Flow**](Flow.html)|  | [optional]  |
{: class="table table-striped"}

### Return type

[**Flow**](Flow.html)

