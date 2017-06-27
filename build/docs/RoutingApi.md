---
title: RoutingApi
---
# platformClient.RoutingApi

All URIs are relative to *https://api.mypurecloud.com*

| Method | HTTP request | Description |
| ------------- | ------------- | ------------- |
[**deleteRoutingEmailDomain**](RoutingApi.html#deleteRoutingEmailDomain) | **DELETE** /api/v2/routing/email/domains/{domainId} | Delete a domain
[**deleteRoutingEmailDomainRoute**](RoutingApi.html#deleteRoutingEmailDomainRoute) | **DELETE** /api/v2/routing/email/domains/{domainName}/routes/{routeId} | Delete a route
[**deleteRoutingQueue**](RoutingApi.html#deleteRoutingQueue) | **DELETE** /api/v2/routing/queues/{queueId} | Delete a queue
[**deleteRoutingQueueUser**](RoutingApi.html#deleteRoutingQueueUser) | **DELETE** /api/v2/routing/queues/{queueId}/users/{memberId} | Delete queue member
[**deleteRoutingQueueWrapupcode**](RoutingApi.html#deleteRoutingQueueWrapupcode) | **DELETE** /api/v2/routing/queues/{queueId}/wrapupcodes/{codeId} | Delete a wrap-up code from a queue
[**deleteRoutingSkill**](RoutingApi.html#deleteRoutingSkill) | **DELETE** /api/v2/routing/skills/{skillId} | Delete Routing Skill
[**deleteRoutingUtilization**](RoutingApi.html#deleteRoutingUtilization) | **DELETE** /api/v2/routing/utilization | Delete utilization settings and revert to system defaults.
[**deleteRoutingWrapupcode**](RoutingApi.html#deleteRoutingWrapupcode) | **DELETE** /api/v2/routing/wrapupcodes/{codeId} | Delete wrap-up code
[**deleteUserRoutingskill**](RoutingApi.html#deleteUserRoutingskill) | **DELETE** /api/v2/users/{userId}/routingskills/{skillId} | Remove routing skill from user
[**getRoutingEmailDomain**](RoutingApi.html#getRoutingEmailDomain) | **GET** /api/v2/routing/email/domains/{domainId} | Get domain
[**getRoutingEmailDomainRoute**](RoutingApi.html#getRoutingEmailDomainRoute) | **GET** /api/v2/routing/email/domains/{domainName}/routes/{routeId} | Get a route
[**getRoutingEmailDomainRoutes**](RoutingApi.html#getRoutingEmailDomainRoutes) | **GET** /api/v2/routing/email/domains/{domainName}/routes | Get routes
[**getRoutingEmailDomains**](RoutingApi.html#getRoutingEmailDomains) | **GET** /api/v2/routing/email/domains | Get domains
[**getRoutingEmailSetup**](RoutingApi.html#getRoutingEmailSetup) | **GET** /api/v2/routing/email/setup | Get email setup
[**getRoutingLanguages**](RoutingApi.html#getRoutingLanguages) | **GET** /api/v2/routing/languages | Get the list of supported languages.
[**getRoutingQueue**](RoutingApi.html#getRoutingQueue) | **GET** /api/v2/routing/queues/{queueId} | Get details about this queue.
[**getRoutingQueueEstimatedwaittime**](RoutingApi.html#getRoutingQueueEstimatedwaittime) | **GET** /api/v2/routing/queues/{queueId}/estimatedwaittime | Get Estimated Wait Time
[**getRoutingQueueMediatypeEstimatedwaittime**](RoutingApi.html#getRoutingQueueMediatypeEstimatedwaittime) | **GET** /api/v2/routing/queues/{queueId}/mediatypes/{mediaType}/estimatedwaittime | Get Estimated Wait Time
[**getRoutingQueueUsers**](RoutingApi.html#getRoutingQueueUsers) | **GET** /api/v2/routing/queues/{queueId}/users | Get the members of this queue
[**getRoutingQueueWrapupcodes**](RoutingApi.html#getRoutingQueueWrapupcodes) | **GET** /api/v2/routing/queues/{queueId}/wrapupcodes | Get the wrap-up codes for a queue
[**getRoutingQueues**](RoutingApi.html#getRoutingQueues) | **GET** /api/v2/routing/queues | Get list of queues.
[**getRoutingSkill**](RoutingApi.html#getRoutingSkill) | **GET** /api/v2/routing/skills/{skillId} | Get Routing Skill
[**getRoutingSkills**](RoutingApi.html#getRoutingSkills) | **GET** /api/v2/routing/skills | Get the list of routing skills.
[**getRoutingUtilization**](RoutingApi.html#getRoutingUtilization) | **GET** /api/v2/routing/utilization | Get the utilization settings.
[**getRoutingWrapupcode**](RoutingApi.html#getRoutingWrapupcode) | **GET** /api/v2/routing/wrapupcodes/{codeId} | Get details about this wrap-up code.
[**getRoutingWrapupcodes**](RoutingApi.html#getRoutingWrapupcodes) | **GET** /api/v2/routing/wrapupcodes | Get list of wrapup codes.
[**getUserRoutingskills**](RoutingApi.html#getUserRoutingskills) | **GET** /api/v2/users/{userId}/routingskills | List routing skills for user
[**patchRoutingQueueUser**](RoutingApi.html#patchRoutingQueueUser) | **PATCH** /api/v2/routing/queues/{queueId}/users/{memberId} | Update the ring number of joined status for a User in a Queue
[**patchRoutingQueueUsers**](RoutingApi.html#patchRoutingQueueUsers) | **PATCH** /api/v2/routing/queues/{queueId}/users | Join or unjoin a set of users for a queue
[**postAnalyticsQueuesObservationsQuery**](RoutingApi.html#postAnalyticsQueuesObservationsQuery) | **POST** /api/v2/analytics/queues/observations/query | Query for queue observations
[**postRoutingEmailDomainRoutes**](RoutingApi.html#postRoutingEmailDomainRoutes) | **POST** /api/v2/routing/email/domains/{domainName}/routes | Create a route
[**postRoutingEmailDomains**](RoutingApi.html#postRoutingEmailDomains) | **POST** /api/v2/routing/email/domains | Create a domain
[**postRoutingLanguages**](RoutingApi.html#postRoutingLanguages) | **POST** /api/v2/routing/languages | Create Language
[**postRoutingQueueUsers**](RoutingApi.html#postRoutingQueueUsers) | **POST** /api/v2/routing/queues/{queueId}/users | Bulk add or delete up to 100 queue members
[**postRoutingQueueWrapupcodes**](RoutingApi.html#postRoutingQueueWrapupcodes) | **POST** /api/v2/routing/queues/{queueId}/wrapupcodes | Add up to 100 wrap-up codes to a queue
[**postRoutingQueues**](RoutingApi.html#postRoutingQueues) | **POST** /api/v2/routing/queues | Create queue
[**postRoutingSkills**](RoutingApi.html#postRoutingSkills) | **POST** /api/v2/routing/skills | Create Skill
[**postRoutingWrapupcodes**](RoutingApi.html#postRoutingWrapupcodes) | **POST** /api/v2/routing/wrapupcodes | Create a wrap-up code
[**postUserRoutingskills**](RoutingApi.html#postUserRoutingskills) | **POST** /api/v2/users/{userId}/routingskills | Add routing skill to user
[**putRoutingEmailDomainRoute**](RoutingApi.html#putRoutingEmailDomainRoute) | **PUT** /api/v2/routing/email/domains/{domainName}/routes/{routeId} | Update a route
[**putRoutingQueue**](RoutingApi.html#putRoutingQueue) | **PUT** /api/v2/routing/queues/{queueId} | Update a queue
[**putRoutingUtilization**](RoutingApi.html#putRoutingUtilization) | **PUT** /api/v2/routing/utilization | Update the utilization settings.
[**putRoutingWrapupcode**](RoutingApi.html#putRoutingWrapupcode) | **PUT** /api/v2/routing/wrapupcodes/{codeId} | Update wrap-up code
[**putUserRoutingskill**](RoutingApi.html#putUserRoutingskill) | **PUT** /api/v2/users/{userId}/routingskills/{skillId} | Update routing skill proficiency or state.
{: class="table table-striped"}

<a name="deleteRoutingEmailDomain"></a>

# null deleteRoutingEmailDomain(domainId)

DELETE /api/v2/routing/email/domains/{domainId}

Delete a domain



### Example

~~~ javascript
const platformClient = require('purecloud-platform-client-v2');

// Configure OAuth2 access token for authorization: PureCloud Auth
platformClient.ApiClient.instance.authentications['PureCloud Auth'].accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new platformClient.RoutingApi();

var domainId = "domainId_example"; // String | domain ID

apiInstance.deleteRoutingEmailDomain(domainId)
  .then(function() {
    console.log('deleteRoutingEmailDomain returned successfully.');
  })
  .catch(function(error) {
  	console.log('There was a failure calling deleteRoutingEmailDomain');
    console.error(error);
  });

~~~

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **domainId** | **String**| domain ID |  |
{: class="table table-striped"}

### Return type

null (empty response body)

<a name="deleteRoutingEmailDomainRoute"></a>

# null deleteRoutingEmailDomainRoute(domainName, routeId)

DELETE /api/v2/routing/email/domains/{domainName}/routes/{routeId}

Delete a route



### Example

~~~ javascript
const platformClient = require('purecloud-platform-client-v2');

// Configure OAuth2 access token for authorization: PureCloud Auth
platformClient.ApiClient.instance.authentications['PureCloud Auth'].accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new platformClient.RoutingApi();

var domainName = "domainName_example"; // String | email domain

var routeId = "routeId_example"; // String | route ID

apiInstance.deleteRoutingEmailDomainRoute(domainName, routeId)
  .then(function() {
    console.log('deleteRoutingEmailDomainRoute returned successfully.');
  })
  .catch(function(error) {
  	console.log('There was a failure calling deleteRoutingEmailDomainRoute');
    console.error(error);
  });

~~~

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **domainName** | **String**| email domain |  |
 **routeId** | **String**| route ID |  |
{: class="table table-striped"}

### Return type

null (empty response body)

<a name="deleteRoutingQueue"></a>

# null deleteRoutingQueue(queueId, opts)

DELETE /api/v2/routing/queues/{queueId}

Delete a queue



### Example

~~~ javascript
const platformClient = require('purecloud-platform-client-v2');

// Configure OAuth2 access token for authorization: PureCloud Auth
platformClient.ApiClient.instance.authentications['PureCloud Auth'].accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new platformClient.RoutingApi();

var queueId = "queueId_example"; // String | Queue ID

var opts = { 
  'forceDelete': true // Boolean | forceDelete
};
apiInstance.deleteRoutingQueue(queueId, opts)
  .then(function() {
    console.log('deleteRoutingQueue returned successfully.');
  })
  .catch(function(error) {
  	console.log('There was a failure calling deleteRoutingQueue');
    console.error(error);
  });

~~~

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **queueId** | **String**| Queue ID |  |
 **forceDelete** | **Boolean**| forceDelete | [optional]  |
{: class="table table-striped"}

### Return type

null (empty response body)

<a name="deleteRoutingQueueUser"></a>

# null deleteRoutingQueueUser(queueId, memberId)

DELETE /api/v2/routing/queues/{queueId}/users/{memberId}

Delete queue member



### Example

~~~ javascript
const platformClient = require('purecloud-platform-client-v2');

// Configure OAuth2 access token for authorization: PureCloud Auth
platformClient.ApiClient.instance.authentications['PureCloud Auth'].accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new platformClient.RoutingApi();

var queueId = "queueId_example"; // String | Queue ID

var memberId = "memberId_example"; // String | Member ID

apiInstance.deleteRoutingQueueUser(queueId, memberId)
  .then(function() {
    console.log('deleteRoutingQueueUser returned successfully.');
  })
  .catch(function(error) {
  	console.log('There was a failure calling deleteRoutingQueueUser');
    console.error(error);
  });

~~~

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **queueId** | **String**| Queue ID |  |
 **memberId** | **String**| Member ID |  |
{: class="table table-striped"}

### Return type

null (empty response body)

<a name="deleteRoutingQueueWrapupcode"></a>

# null deleteRoutingQueueWrapupcode(queueId, codeId)

DELETE /api/v2/routing/queues/{queueId}/wrapupcodes/{codeId}

Delete a wrap-up code from a queue



### Example

~~~ javascript
const platformClient = require('purecloud-platform-client-v2');

// Configure OAuth2 access token for authorization: PureCloud Auth
platformClient.ApiClient.instance.authentications['PureCloud Auth'].accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new platformClient.RoutingApi();

var queueId = "queueId_example"; // String | Queue ID

var codeId = "codeId_example"; // String | Code ID

apiInstance.deleteRoutingQueueWrapupcode(queueId, codeId)
  .then(function() {
    console.log('deleteRoutingQueueWrapupcode returned successfully.');
  })
  .catch(function(error) {
  	console.log('There was a failure calling deleteRoutingQueueWrapupcode');
    console.error(error);
  });

~~~

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **queueId** | **String**| Queue ID |  |
 **codeId** | **String**| Code ID |  |
{: class="table table-striped"}

### Return type

null (empty response body)

<a name="deleteRoutingSkill"></a>

# null deleteRoutingSkill(skillId)

DELETE /api/v2/routing/skills/{skillId}

Delete Routing Skill



### Example

~~~ javascript
const platformClient = require('purecloud-platform-client-v2');

// Configure OAuth2 access token for authorization: PureCloud Auth
platformClient.ApiClient.instance.authentications['PureCloud Auth'].accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new platformClient.RoutingApi();

var skillId = "skillId_example"; // String | Skill ID

apiInstance.deleteRoutingSkill(skillId)
  .then(function() {
    console.log('deleteRoutingSkill returned successfully.');
  })
  .catch(function(error) {
  	console.log('There was a failure calling deleteRoutingSkill');
    console.error(error);
  });

~~~

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **skillId** | **String**| Skill ID |  |
{: class="table table-striped"}

### Return type

null (empty response body)

<a name="deleteRoutingUtilization"></a>

# null deleteRoutingUtilization()

DELETE /api/v2/routing/utilization

Delete utilization settings and revert to system defaults.



### Example

~~~ javascript
const platformClient = require('purecloud-platform-client-v2');

// Configure OAuth2 access token for authorization: PureCloud Auth
platformClient.ApiClient.instance.authentications['PureCloud Auth'].accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new platformClient.RoutingApi();
apiInstance.deleteRoutingUtilization()
  .then(function() {
    console.log('deleteRoutingUtilization returned successfully.');
  })
  .catch(function(error) {
  	console.log('There was a failure calling deleteRoutingUtilization');
    console.error(error);
  });

~~~

### Parameters

This endpoint does not need any parameter.
{: class="table table-striped"}

### Return type

null (empty response body)

<a name="deleteRoutingWrapupcode"></a>

# null deleteRoutingWrapupcode(codeId)

DELETE /api/v2/routing/wrapupcodes/{codeId}

Delete wrap-up code



### Example

~~~ javascript
const platformClient = require('purecloud-platform-client-v2');

// Configure OAuth2 access token for authorization: PureCloud Auth
platformClient.ApiClient.instance.authentications['PureCloud Auth'].accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new platformClient.RoutingApi();

var codeId = "codeId_example"; // String | Wrapup Code ID

apiInstance.deleteRoutingWrapupcode(codeId)
  .then(function() {
    console.log('deleteRoutingWrapupcode returned successfully.');
  })
  .catch(function(error) {
  	console.log('There was a failure calling deleteRoutingWrapupcode');
    console.error(error);
  });

~~~

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **codeId** | **String**| Wrapup Code ID |  |
{: class="table table-striped"}

### Return type

null (empty response body)

<a name="deleteUserRoutingskill"></a>

# null deleteUserRoutingskill(userId, skillId)

DELETE /api/v2/users/{userId}/routingskills/{skillId}

Remove routing skill from user



### Example

~~~ javascript
const platformClient = require('purecloud-platform-client-v2');

// Configure OAuth2 access token for authorization: PureCloud Auth
platformClient.ApiClient.instance.authentications['PureCloud Auth'].accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new platformClient.RoutingApi();

var userId = "userId_example"; // String | User ID

var skillId = "skillId_example"; // String | skillId

apiInstance.deleteUserRoutingskill(userId, skillId)
  .then(function() {
    console.log('deleteUserRoutingskill returned successfully.');
  })
  .catch(function(error) {
  	console.log('There was a failure calling deleteUserRoutingskill');
    console.error(error);
  });

~~~

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **userId** | **String**| User ID |  |
 **skillId** | **String**| skillId |  |
{: class="table table-striped"}

### Return type

null (empty response body)

<a name="getRoutingEmailDomain"></a>

# [**InboundDomain**](InboundDomain.html) getRoutingEmailDomain(domainId)

GET /api/v2/routing/email/domains/{domainId}

Get domain



### Example

~~~ javascript
const platformClient = require('purecloud-platform-client-v2');

// Configure OAuth2 access token for authorization: PureCloud Auth
platformClient.ApiClient.instance.authentications['PureCloud Auth'].accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new platformClient.RoutingApi();

var domainId = "domainId_example"; // String | domain ID

apiInstance.getRoutingEmailDomain(domainId)
  .then(function(data) {
    console.log(`getRoutingEmailDomain success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch(function(error) {
  	console.log('There was a failure calling getRoutingEmailDomain');
    console.error(error);
  });

~~~

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **domainId** | **String**| domain ID |  |
{: class="table table-striped"}

### Return type

[**InboundDomain**](InboundDomain.html)

<a name="getRoutingEmailDomainRoute"></a>

# [**InboundRoute**](InboundRoute.html) getRoutingEmailDomainRoute(domainName, routeId)

GET /api/v2/routing/email/domains/{domainName}/routes/{routeId}

Get a route



### Example

~~~ javascript
const platformClient = require('purecloud-platform-client-v2');

// Configure OAuth2 access token for authorization: PureCloud Auth
platformClient.ApiClient.instance.authentications['PureCloud Auth'].accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new platformClient.RoutingApi();

var domainName = "domainName_example"; // String | email domain

var routeId = "routeId_example"; // String | route ID

apiInstance.getRoutingEmailDomainRoute(domainName, routeId)
  .then(function(data) {
    console.log(`getRoutingEmailDomainRoute success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch(function(error) {
  	console.log('There was a failure calling getRoutingEmailDomainRoute');
    console.error(error);
  });

~~~

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **domainName** | **String**| email domain |  |
 **routeId** | **String**| route ID |  |
{: class="table table-striped"}

### Return type

[**InboundRoute**](InboundRoute.html)

<a name="getRoutingEmailDomainRoutes"></a>

# [**InboundRouteEntityListing**](InboundRouteEntityListing.html) getRoutingEmailDomainRoutes(domainName, opts)

GET /api/v2/routing/email/domains/{domainName}/routes

Get routes



### Example

~~~ javascript
const platformClient = require('purecloud-platform-client-v2');

// Configure OAuth2 access token for authorization: PureCloud Auth
platformClient.ApiClient.instance.authentications['PureCloud Auth'].accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new platformClient.RoutingApi();

var domainName = "domainName_example"; // String | email domain

var opts = { 
  'pageSize': 25, // Number | Page size
  'pageNumber': 1, // Number | Page number
  'pattern': "pattern_example" // String | Filter routes by the route's pattern property
};
apiInstance.getRoutingEmailDomainRoutes(domainName, opts)
  .then(function(data) {
    console.log(`getRoutingEmailDomainRoutes success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch(function(error) {
  	console.log('There was a failure calling getRoutingEmailDomainRoutes');
    console.error(error);
  });

~~~

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **domainName** | **String**| email domain |  |
 **pageSize** | **Number**| Page size | [optional] [default to 25] |
 **pageNumber** | **Number**| Page number | [optional] [default to 1] |
 **pattern** | **String**| Filter routes by the route&#39;s pattern property | [optional]  |
{: class="table table-striped"}

### Return type

[**InboundRouteEntityListing**](InboundRouteEntityListing.html)

<a name="getRoutingEmailDomains"></a>

# [**InboundDomainEntityListing**](InboundDomainEntityListing.html) getRoutingEmailDomains()

GET /api/v2/routing/email/domains

Get domains



### Example

~~~ javascript
const platformClient = require('purecloud-platform-client-v2');

// Configure OAuth2 access token for authorization: PureCloud Auth
platformClient.ApiClient.instance.authentications['PureCloud Auth'].accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new platformClient.RoutingApi();
apiInstance.getRoutingEmailDomains()
  .then(function(data) {
    console.log(`getRoutingEmailDomains success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch(function(error) {
  	console.log('There was a failure calling getRoutingEmailDomains');
    console.error(error);
  });

~~~

### Parameters

This endpoint does not need any parameter.
{: class="table table-striped"}

### Return type

[**InboundDomainEntityListing**](InboundDomainEntityListing.html)

<a name="getRoutingEmailSetup"></a>

# [**EmailSetup**](EmailSetup.html) getRoutingEmailSetup()

GET /api/v2/routing/email/setup

Get email setup



### Example

~~~ javascript
const platformClient = require('purecloud-platform-client-v2');

// Configure OAuth2 access token for authorization: PureCloud Auth
platformClient.ApiClient.instance.authentications['PureCloud Auth'].accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new platformClient.RoutingApi();
apiInstance.getRoutingEmailSetup()
  .then(function(data) {
    console.log(`getRoutingEmailSetup success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch(function(error) {
  	console.log('There was a failure calling getRoutingEmailSetup');
    console.error(error);
  });

~~~

### Parameters

This endpoint does not need any parameter.
{: class="table table-striped"}

### Return type

[**EmailSetup**](EmailSetup.html)

<a name="getRoutingLanguages"></a>

# [**LanguageEntityListing**](LanguageEntityListing.html) getRoutingLanguages(opts)

GET /api/v2/routing/languages

Get the list of supported languages.



### Example

~~~ javascript
const platformClient = require('purecloud-platform-client-v2');

// Configure OAuth2 access token for authorization: PureCloud Auth
platformClient.ApiClient.instance.authentications['PureCloud Auth'].accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new platformClient.RoutingApi();

var opts = { 
  'pageSize': 25, // Number | Page size
  'pageNumber': 1, // Number | Page number
  'sortOrder': "ASC", // String | Ascending or descending sort order
  'name': "name_example" // String | Name
};
apiInstance.getRoutingLanguages(opts)
  .then(function(data) {
    console.log(`getRoutingLanguages success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch(function(error) {
  	console.log('There was a failure calling getRoutingLanguages');
    console.error(error);
  });

~~~

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **pageSize** | **Number**| Page size | [optional] [default to 25] |
 **pageNumber** | **Number**| Page number | [optional] [default to 1] |
 **sortOrder** | **String**| Ascending or descending sort order | [optional] [default to ASC]<br />**Values**: ascending, descending |
 **name** | **String**| Name | [optional]  |
{: class="table table-striped"}

### Return type

[**LanguageEntityListing**](LanguageEntityListing.html)

<a name="getRoutingQueue"></a>

# [**Queue**](Queue.html) getRoutingQueue(queueId)

GET /api/v2/routing/queues/{queueId}

Get details about this queue.



### Example

~~~ javascript
const platformClient = require('purecloud-platform-client-v2');

// Configure OAuth2 access token for authorization: PureCloud Auth
platformClient.ApiClient.instance.authentications['PureCloud Auth'].accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new platformClient.RoutingApi();

var queueId = "queueId_example"; // String | Queue ID

apiInstance.getRoutingQueue(queueId)
  .then(function(data) {
    console.log(`getRoutingQueue success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch(function(error) {
  	console.log('There was a failure calling getRoutingQueue');
    console.error(error);
  });

~~~

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **queueId** | **String**| Queue ID |  |
{: class="table table-striped"}

### Return type

[**Queue**](Queue.html)

<a name="getRoutingQueueEstimatedwaittime"></a>

# [**EstimatedWaitTimePredictions**](EstimatedWaitTimePredictions.html) getRoutingQueueEstimatedwaittime(queueId, opts)

GET /api/v2/routing/queues/{queueId}/estimatedwaittime

Get Estimated Wait Time



### Example

~~~ javascript
const platformClient = require('purecloud-platform-client-v2');

// Configure OAuth2 access token for authorization: PureCloud Auth
platformClient.ApiClient.instance.authentications['PureCloud Auth'].accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new platformClient.RoutingApi();

var queueId = "queueId_example"; // String | queueId

var opts = { 
  'conversationId': "conversationId_example" // String | conversationId
};
apiInstance.getRoutingQueueEstimatedwaittime(queueId, opts)
  .then(function(data) {
    console.log(`getRoutingQueueEstimatedwaittime success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch(function(error) {
  	console.log('There was a failure calling getRoutingQueueEstimatedwaittime');
    console.error(error);
  });

~~~

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **queueId** | **String**| queueId |  |
 **conversationId** | **String**| conversationId | [optional]  |
{: class="table table-striped"}

### Return type

[**EstimatedWaitTimePredictions**](EstimatedWaitTimePredictions.html)

<a name="getRoutingQueueMediatypeEstimatedwaittime"></a>

# [**EstimatedWaitTimePredictions**](EstimatedWaitTimePredictions.html) getRoutingQueueMediatypeEstimatedwaittime(queueId, mediaType)

GET /api/v2/routing/queues/{queueId}/mediatypes/{mediaType}/estimatedwaittime

Get Estimated Wait Time



### Example

~~~ javascript
const platformClient = require('purecloud-platform-client-v2');

// Configure OAuth2 access token for authorization: PureCloud Auth
platformClient.ApiClient.instance.authentications['PureCloud Auth'].accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new platformClient.RoutingApi();

var queueId = "queueId_example"; // String | queueId

var mediaType = "mediaType_example"; // String | mediaType

apiInstance.getRoutingQueueMediatypeEstimatedwaittime(queueId, mediaType)
  .then(function(data) {
    console.log(`getRoutingQueueMediatypeEstimatedwaittime success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch(function(error) {
  	console.log('There was a failure calling getRoutingQueueMediatypeEstimatedwaittime');
    console.error(error);
  });

~~~

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **queueId** | **String**| queueId |  |
 **mediaType** | **String**| mediaType |  |
{: class="table table-striped"}

### Return type

[**EstimatedWaitTimePredictions**](EstimatedWaitTimePredictions.html)

<a name="getRoutingQueueUsers"></a>

# [**QueueMemberEntityListing**](QueueMemberEntityListing.html) getRoutingQueueUsers(queueId, opts)

GET /api/v2/routing/queues/{queueId}/users

Get the members of this queue



### Example

~~~ javascript
const platformClient = require('purecloud-platform-client-v2');

// Configure OAuth2 access token for authorization: PureCloud Auth
platformClient.ApiClient.instance.authentications['PureCloud Auth'].accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new platformClient.RoutingApi();

var queueId = "queueId_example"; // String | Queue ID

var opts = { 
  'pageSize': 25, // Number | Page size
  'pageNumber': 1, // Number | Page number
  'sortBy': "name", // String | Sort by
  'expand': ["expand_example"], // [String] | Which fields, if any, to expand.
  'joined': true, // Boolean | Filter by joined status
  'name': "name_example", // String | Filter by queue member name
  'profileSkills': ["profileSkills_example"], // [String] | Filter by profile skill
  'skills': ["skills_example"], // [String] | Filter by skill
  'languages': ["languages_example"], // [String] | Filter by language
  'routingStatus': ["routingStatus_example"], // [String] | Filter by routing status
  'presence': ["presence_example"] // [String] | Filter by presence
};
apiInstance.getRoutingQueueUsers(queueId, opts)
  .then(function(data) {
    console.log(`getRoutingQueueUsers success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch(function(error) {
  	console.log('There was a failure calling getRoutingQueueUsers');
    console.error(error);
  });

~~~

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **queueId** | **String**| Queue ID |  |
 **pageSize** | **Number**| Page size | [optional] [default to 25] |
 **pageNumber** | **Number**| Page number | [optional] [default to 1] |
 **sortBy** | **String**| Sort by | [optional] [default to name] |
 **expand** | [**[String]**](String.html)| Which fields, if any, to expand. | [optional] <br />**Values**: routingStatus, presence, conversationSummary, outOfOffice, geolocation, station, authorization, profileSkills, locations, groups, date, geolocationsettings, organization, presencedefinitions, locationdefinitions, orgauthorization, favorites, superiors, directreports, adjacents, routingskills, routinglanguages, fieldconfigs, token |
 **joined** | **Boolean**| Filter by joined status | [optional]  |
 **name** | **String**| Filter by queue member name | [optional]  |
 **profileSkills** | [**[String]**](String.html)| Filter by profile skill | [optional]  |
 **skills** | [**[String]**](String.html)| Filter by skill | [optional]  |
 **languages** | [**[String]**](String.html)| Filter by language | [optional]  |
 **routingStatus** | [**[String]**](String.html)| Filter by routing status | [optional]  |
 **presence** | [**[String]**](String.html)| Filter by presence | [optional]  |
{: class="table table-striped"}

### Return type

[**QueueMemberEntityListing**](QueueMemberEntityListing.html)

<a name="getRoutingQueueWrapupcodes"></a>

# [**WrapupCodeEntityListing**](WrapupCodeEntityListing.html) getRoutingQueueWrapupcodes(queueId)

GET /api/v2/routing/queues/{queueId}/wrapupcodes

Get the wrap-up codes for a queue



### Example

~~~ javascript
const platformClient = require('purecloud-platform-client-v2');

// Configure OAuth2 access token for authorization: PureCloud Auth
platformClient.ApiClient.instance.authentications['PureCloud Auth'].accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new platformClient.RoutingApi();

var queueId = "queueId_example"; // String | Queue ID

apiInstance.getRoutingQueueWrapupcodes(queueId)
  .then(function(data) {
    console.log(`getRoutingQueueWrapupcodes success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch(function(error) {
  	console.log('There was a failure calling getRoutingQueueWrapupcodes');
    console.error(error);
  });

~~~

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **queueId** | **String**| Queue ID |  |
{: class="table table-striped"}

### Return type

[**WrapupCodeEntityListing**](WrapupCodeEntityListing.html)

<a name="getRoutingQueues"></a>

# [**QueueEntityListing**](QueueEntityListing.html) getRoutingQueues(opts)

GET /api/v2/routing/queues

Get list of queues.



### Example

~~~ javascript
const platformClient = require('purecloud-platform-client-v2');

// Configure OAuth2 access token for authorization: PureCloud Auth
platformClient.ApiClient.instance.authentications['PureCloud Auth'].accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new platformClient.RoutingApi();

var opts = { 
  'pageSize': 25, // Number | Page size
  'pageNumber': 1, // Number | Page number
  'sortBy': "name", // String | Sort by
  'name': "name_example", // String | Name
  'active': true // Boolean | Active
};
apiInstance.getRoutingQueues(opts)
  .then(function(data) {
    console.log(`getRoutingQueues success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch(function(error) {
  	console.log('There was a failure calling getRoutingQueues');
    console.error(error);
  });

~~~

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **pageSize** | **Number**| Page size | [optional] [default to 25] |
 **pageNumber** | **Number**| Page number | [optional] [default to 1] |
 **sortBy** | **String**| Sort by | [optional] [default to name] |
 **name** | **String**| Name | [optional]  |
 **active** | **Boolean**| Active | [optional]  |
{: class="table table-striped"}

### Return type

[**QueueEntityListing**](QueueEntityListing.html)

<a name="getRoutingSkill"></a>

# [**RoutingSkill**](RoutingSkill.html) getRoutingSkill(skillId)

GET /api/v2/routing/skills/{skillId}

Get Routing Skill



### Example

~~~ javascript
const platformClient = require('purecloud-platform-client-v2');

// Configure OAuth2 access token for authorization: PureCloud Auth
platformClient.ApiClient.instance.authentications['PureCloud Auth'].accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new platformClient.RoutingApi();

var skillId = "skillId_example"; // String | Skill ID

apiInstance.getRoutingSkill(skillId)
  .then(function(data) {
    console.log(`getRoutingSkill success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch(function(error) {
  	console.log('There was a failure calling getRoutingSkill');
    console.error(error);
  });

~~~

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **skillId** | **String**| Skill ID |  |
{: class="table table-striped"}

### Return type

[**RoutingSkill**](RoutingSkill.html)

<a name="getRoutingSkills"></a>

# [**SkillEntityListing**](SkillEntityListing.html) getRoutingSkills(opts)

GET /api/v2/routing/skills

Get the list of routing skills.



### Example

~~~ javascript
const platformClient = require('purecloud-platform-client-v2');

// Configure OAuth2 access token for authorization: PureCloud Auth
platformClient.ApiClient.instance.authentications['PureCloud Auth'].accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new platformClient.RoutingApi();

var opts = { 
  'pageSize': 25, // Number | Page size
  'pageNumber': 1, // Number | Page number
  'name': "name_example" // String | Filter for results that start with this value
};
apiInstance.getRoutingSkills(opts)
  .then(function(data) {
    console.log(`getRoutingSkills success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch(function(error) {
  	console.log('There was a failure calling getRoutingSkills');
    console.error(error);
  });

~~~

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **pageSize** | **Number**| Page size | [optional] [default to 25] |
 **pageNumber** | **Number**| Page number | [optional] [default to 1] |
 **name** | **String**| Filter for results that start with this value | [optional]  |
{: class="table table-striped"}

### Return type

[**SkillEntityListing**](SkillEntityListing.html)

<a name="getRoutingUtilization"></a>

# [**Utilization**](Utilization.html) getRoutingUtilization()

GET /api/v2/routing/utilization

Get the utilization settings.



### Example

~~~ javascript
const platformClient = require('purecloud-platform-client-v2');

// Configure OAuth2 access token for authorization: PureCloud Auth
platformClient.ApiClient.instance.authentications['PureCloud Auth'].accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new platformClient.RoutingApi();
apiInstance.getRoutingUtilization()
  .then(function(data) {
    console.log(`getRoutingUtilization success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch(function(error) {
  	console.log('There was a failure calling getRoutingUtilization');
    console.error(error);
  });

~~~

### Parameters

This endpoint does not need any parameter.
{: class="table table-striped"}

### Return type

[**Utilization**](Utilization.html)

<a name="getRoutingWrapupcode"></a>

# [**WrapupCode**](WrapupCode.html) getRoutingWrapupcode(codeId)

GET /api/v2/routing/wrapupcodes/{codeId}

Get details about this wrap-up code.



### Example

~~~ javascript
const platformClient = require('purecloud-platform-client-v2');

// Configure OAuth2 access token for authorization: PureCloud Auth
platformClient.ApiClient.instance.authentications['PureCloud Auth'].accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new platformClient.RoutingApi();

var codeId = "codeId_example"; // String | Wrapup Code ID

apiInstance.getRoutingWrapupcode(codeId)
  .then(function(data) {
    console.log(`getRoutingWrapupcode success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch(function(error) {
  	console.log('There was a failure calling getRoutingWrapupcode');
    console.error(error);
  });

~~~

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **codeId** | **String**| Wrapup Code ID |  |
{: class="table table-striped"}

### Return type

[**WrapupCode**](WrapupCode.html)

<a name="getRoutingWrapupcodes"></a>

# [**WrapupCodeEntityListing**](WrapupCodeEntityListing.html) getRoutingWrapupcodes(opts)

GET /api/v2/routing/wrapupcodes

Get list of wrapup codes.



### Example

~~~ javascript
const platformClient = require('purecloud-platform-client-v2');

// Configure OAuth2 access token for authorization: PureCloud Auth
platformClient.ApiClient.instance.authentications['PureCloud Auth'].accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new platformClient.RoutingApi();

var opts = { 
  'pageSize': 25, // Number | Page size
  'pageNumber': 1, // Number | Page number
  'name': "name_example", // String | Name
  'sortBy': "name" // String | Sort by
};
apiInstance.getRoutingWrapupcodes(opts)
  .then(function(data) {
    console.log(`getRoutingWrapupcodes success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch(function(error) {
  	console.log('There was a failure calling getRoutingWrapupcodes');
    console.error(error);
  });

~~~

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **pageSize** | **Number**| Page size | [optional] [default to 25] |
 **pageNumber** | **Number**| Page number | [optional] [default to 1] |
 **name** | **String**| Name | [optional]  |
 **sortBy** | **String**| Sort by | [optional] [default to name] |
{: class="table table-striped"}

### Return type

[**WrapupCodeEntityListing**](WrapupCodeEntityListing.html)

<a name="getUserRoutingskills"></a>

# [**UserSkillEntityListing**](UserSkillEntityListing.html) getUserRoutingskills(userId, opts)

GET /api/v2/users/{userId}/routingskills

List routing skills for user



### Example

~~~ javascript
const platformClient = require('purecloud-platform-client-v2');

// Configure OAuth2 access token for authorization: PureCloud Auth
platformClient.ApiClient.instance.authentications['PureCloud Auth'].accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new platformClient.RoutingApi();

var userId = "userId_example"; // String | User ID

var opts = { 
  'pageSize': 25, // Number | Page size
  'pageNumber': 1, // Number | Page number
  'sortOrder': "ASC" // String | Ascending or descending sort order
};
apiInstance.getUserRoutingskills(userId, opts)
  .then(function(data) {
    console.log(`getUserRoutingskills success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch(function(error) {
  	console.log('There was a failure calling getUserRoutingskills');
    console.error(error);
  });

~~~

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **userId** | **String**| User ID |  |
 **pageSize** | **Number**| Page size | [optional] [default to 25] |
 **pageNumber** | **Number**| Page number | [optional] [default to 1] |
 **sortOrder** | **String**| Ascending or descending sort order | [optional] [default to ASC]<br />**Values**: ascending, descending |
{: class="table table-striped"}

### Return type

[**UserSkillEntityListing**](UserSkillEntityListing.html)

<a name="patchRoutingQueueUser"></a>

# [**QueueMember**](QueueMember.html) patchRoutingQueueUser(queueId, memberId, body)

PATCH /api/v2/routing/queues/{queueId}/users/{memberId}

Update the ring number of joined status for a User in a Queue



### Example

~~~ javascript
const platformClient = require('purecloud-platform-client-v2');

// Configure OAuth2 access token for authorization: PureCloud Auth
platformClient.ApiClient.instance.authentications['PureCloud Auth'].accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new platformClient.RoutingApi();

var queueId = "queueId_example"; // String | Queue ID

var memberId = "memberId_example"; // String | Member ID

var body = new platformClient.QueueMember(); // QueueMember | Queue Member

apiInstance.patchRoutingQueueUser(queueId, memberId, body)
  .then(function(data) {
    console.log(`patchRoutingQueueUser success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch(function(error) {
  	console.log('There was a failure calling patchRoutingQueueUser');
    console.error(error);
  });

~~~

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **queueId** | **String**| Queue ID |  |
 **memberId** | **String**| Member ID |  |
 **body** | [**QueueMember**](QueueMember.html)| Queue Member |  |
{: class="table table-striped"}

### Return type

[**QueueMember**](QueueMember.html)

<a name="patchRoutingQueueUsers"></a>

# [**QueueMemberEntityListing**](QueueMemberEntityListing.html) patchRoutingQueueUsers(queueId, body)

PATCH /api/v2/routing/queues/{queueId}/users

Join or unjoin a set of users for a queue



### Example

~~~ javascript
const platformClient = require('purecloud-platform-client-v2');

// Configure OAuth2 access token for authorization: PureCloud Auth
platformClient.ApiClient.instance.authentications['PureCloud Auth'].accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new platformClient.RoutingApi();

var queueId = "queueId_example"; // String | Queue ID

var body = [new platformClient.QueueMember()]; // [QueueMember] | Queue Members

apiInstance.patchRoutingQueueUsers(queueId, body)
  .then(function(data) {
    console.log(`patchRoutingQueueUsers success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch(function(error) {
  	console.log('There was a failure calling patchRoutingQueueUsers');
    console.error(error);
  });

~~~

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **queueId** | **String**| Queue ID |  |
 **body** | [**[QueueMember]**](QueueMember.html)| Queue Members |  |
{: class="table table-striped"}

### Return type

[**QueueMemberEntityListing**](QueueMemberEntityListing.html)

<a name="postAnalyticsQueuesObservationsQuery"></a>

# [**QualifierMappingObservationQueryResponse**](QualifierMappingObservationQueryResponse.html) postAnalyticsQueuesObservationsQuery(body)

POST /api/v2/analytics/queues/observations/query

Query for queue observations



### Example

~~~ javascript
const platformClient = require('purecloud-platform-client-v2');

// Configure OAuth2 access token for authorization: PureCloud Auth
platformClient.ApiClient.instance.authentications['PureCloud Auth'].accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new platformClient.RoutingApi();

var body = new platformClient.ObservationQuery(); // ObservationQuery | query

apiInstance.postAnalyticsQueuesObservationsQuery(body)
  .then(function(data) {
    console.log(`postAnalyticsQueuesObservationsQuery success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch(function(error) {
  	console.log('There was a failure calling postAnalyticsQueuesObservationsQuery');
    console.error(error);
  });

~~~

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **body** | [**ObservationQuery**](ObservationQuery.html)| query |  |
{: class="table table-striped"}

### Return type

[**QualifierMappingObservationQueryResponse**](QualifierMappingObservationQueryResponse.html)

<a name="postRoutingEmailDomainRoutes"></a>

# [**InboundRoute**](InboundRoute.html) postRoutingEmailDomainRoutes(domainName, body)

POST /api/v2/routing/email/domains/{domainName}/routes

Create a route



### Example

~~~ javascript
const platformClient = require('purecloud-platform-client-v2');

// Configure OAuth2 access token for authorization: PureCloud Auth
platformClient.ApiClient.instance.authentications['PureCloud Auth'].accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new platformClient.RoutingApi();

var domainName = "domainName_example"; // String | email domain

var body = new platformClient.InboundRoute(); // InboundRoute | Route

apiInstance.postRoutingEmailDomainRoutes(domainName, body)
  .then(function(data) {
    console.log(`postRoutingEmailDomainRoutes success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch(function(error) {
  	console.log('There was a failure calling postRoutingEmailDomainRoutes');
    console.error(error);
  });

~~~

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **domainName** | **String**| email domain |  |
 **body** | [**InboundRoute**](InboundRoute.html)| Route |  |
{: class="table table-striped"}

### Return type

[**InboundRoute**](InboundRoute.html)

<a name="postRoutingEmailDomains"></a>

# [**InboundDomain**](InboundDomain.html) postRoutingEmailDomains(body)

POST /api/v2/routing/email/domains

Create a domain



### Example

~~~ javascript
const platformClient = require('purecloud-platform-client-v2');

// Configure OAuth2 access token for authorization: PureCloud Auth
platformClient.ApiClient.instance.authentications['PureCloud Auth'].accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new platformClient.RoutingApi();

var body = new platformClient.InboundDomain(); // InboundDomain | Domain

apiInstance.postRoutingEmailDomains(body)
  .then(function(data) {
    console.log(`postRoutingEmailDomains success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch(function(error) {
  	console.log('There was a failure calling postRoutingEmailDomains');
    console.error(error);
  });

~~~

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **body** | [**InboundDomain**](InboundDomain.html)| Domain |  |
{: class="table table-striped"}

### Return type

[**InboundDomain**](InboundDomain.html)

<a name="postRoutingLanguages"></a>

# [**Language**](Language.html) postRoutingLanguages(body)

POST /api/v2/routing/languages

Create Language



### Example

~~~ javascript
const platformClient = require('purecloud-platform-client-v2');

// Configure OAuth2 access token for authorization: PureCloud Auth
platformClient.ApiClient.instance.authentications['PureCloud Auth'].accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new platformClient.RoutingApi();

var body = new platformClient.Language(); // Language | Language

apiInstance.postRoutingLanguages(body)
  .then(function(data) {
    console.log(`postRoutingLanguages success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch(function(error) {
  	console.log('There was a failure calling postRoutingLanguages');
    console.error(error);
  });

~~~

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **body** | [**Language**](Language.html)| Language |  |
{: class="table table-striped"}

### Return type

[**Language**](Language.html)

<a name="postRoutingQueueUsers"></a>

# **&#39;String&#39;** postRoutingQueueUsers(queueId, body, opts)

POST /api/v2/routing/queues/{queueId}/users

Bulk add or delete up to 100 queue members



### Example

~~~ javascript
const platformClient = require('purecloud-platform-client-v2');

// Configure OAuth2 access token for authorization: PureCloud Auth
platformClient.ApiClient.instance.authentications['PureCloud Auth'].accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new platformClient.RoutingApi();

var queueId = "queueId_example"; // String | Queue ID

var body = [new platformClient.QueueMember()]; // [QueueMember] | Queue Members

var opts = { 
  '_delete': false // Boolean | True to delete queue members
};
apiInstance.postRoutingQueueUsers(queueId, body, opts)
  .then(function(data) {
    console.log(`postRoutingQueueUsers success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch(function(error) {
  	console.log('There was a failure calling postRoutingQueueUsers');
    console.error(error);
  });

~~~

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **queueId** | **String**| Queue ID |  |
 **body** | [**[QueueMember]**](QueueMember.html)| Queue Members |  |
 **_delete** | **Boolean**| True to delete queue members | [optional] [default to false] |
{: class="table table-striped"}

### Return type

**&#39;String&#39;**

<a name="postRoutingQueueWrapupcodes"></a>

# [**[WrapupCode]**](WrapupCode.html) postRoutingQueueWrapupcodes(queueId, body)

POST /api/v2/routing/queues/{queueId}/wrapupcodes

Add up to 100 wrap-up codes to a queue



### Example

~~~ javascript
const platformClient = require('purecloud-platform-client-v2');

// Configure OAuth2 access token for authorization: PureCloud Auth
platformClient.ApiClient.instance.authentications['PureCloud Auth'].accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new platformClient.RoutingApi();

var queueId = "queueId_example"; // String | Queue ID

var body = [new platformClient.WrapupCode()]; // [WrapupCode] | List of wrapup codes

apiInstance.postRoutingQueueWrapupcodes(queueId, body)
  .then(function(data) {
    console.log(`postRoutingQueueWrapupcodes success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch(function(error) {
  	console.log('There was a failure calling postRoutingQueueWrapupcodes');
    console.error(error);
  });

~~~

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **queueId** | **String**| Queue ID |  |
 **body** | [**[WrapupCode]**](WrapupCode.html)| List of wrapup codes |  |
{: class="table table-striped"}

### Return type

[**[WrapupCode]**](WrapupCode.html)

<a name="postRoutingQueues"></a>

# [**Queue**](Queue.html) postRoutingQueues(body)

POST /api/v2/routing/queues

Create queue



### Example

~~~ javascript
const platformClient = require('purecloud-platform-client-v2');

// Configure OAuth2 access token for authorization: PureCloud Auth
platformClient.ApiClient.instance.authentications['PureCloud Auth'].accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new platformClient.RoutingApi();

var body = new platformClient.CreateQueueRequest(); // CreateQueueRequest | Queue

apiInstance.postRoutingQueues(body)
  .then(function(data) {
    console.log(`postRoutingQueues success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch(function(error) {
  	console.log('There was a failure calling postRoutingQueues');
    console.error(error);
  });

~~~

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **body** | [**CreateQueueRequest**](CreateQueueRequest.html)| Queue |  |
{: class="table table-striped"}

### Return type

[**Queue**](Queue.html)

<a name="postRoutingSkills"></a>

# [**RoutingSkill**](RoutingSkill.html) postRoutingSkills(body)

POST /api/v2/routing/skills

Create Skill



### Example

~~~ javascript
const platformClient = require('purecloud-platform-client-v2');

// Configure OAuth2 access token for authorization: PureCloud Auth
platformClient.ApiClient.instance.authentications['PureCloud Auth'].accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new platformClient.RoutingApi();

var body = new platformClient.RoutingSkill(); // RoutingSkill | Skill

apiInstance.postRoutingSkills(body)
  .then(function(data) {
    console.log(`postRoutingSkills success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch(function(error) {
  	console.log('There was a failure calling postRoutingSkills');
    console.error(error);
  });

~~~

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **body** | [**RoutingSkill**](RoutingSkill.html)| Skill |  |
{: class="table table-striped"}

### Return type

[**RoutingSkill**](RoutingSkill.html)

<a name="postRoutingWrapupcodes"></a>

# [**WrapupCode**](WrapupCode.html) postRoutingWrapupcodes(body)

POST /api/v2/routing/wrapupcodes

Create a wrap-up code



### Example

~~~ javascript
const platformClient = require('purecloud-platform-client-v2');

// Configure OAuth2 access token for authorization: PureCloud Auth
platformClient.ApiClient.instance.authentications['PureCloud Auth'].accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new platformClient.RoutingApi();

var body = new platformClient.WrapupCode(); // WrapupCode | WrapupCode

apiInstance.postRoutingWrapupcodes(body)
  .then(function(data) {
    console.log(`postRoutingWrapupcodes success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch(function(error) {
  	console.log('There was a failure calling postRoutingWrapupcodes');
    console.error(error);
  });

~~~

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **body** | [**WrapupCode**](WrapupCode.html)| WrapupCode |  |
{: class="table table-striped"}

### Return type

[**WrapupCode**](WrapupCode.html)

<a name="postUserRoutingskills"></a>

# [**UserRoutingSkill**](UserRoutingSkill.html) postUserRoutingskills(userId, body)

POST /api/v2/users/{userId}/routingskills

Add routing skill to user



### Example

~~~ javascript
const platformClient = require('purecloud-platform-client-v2');

// Configure OAuth2 access token for authorization: PureCloud Auth
platformClient.ApiClient.instance.authentications['PureCloud Auth'].accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new platformClient.RoutingApi();

var userId = "userId_example"; // String | User ID

var body = new platformClient.UserRoutingSkillPost(); // UserRoutingSkillPost | Skill

apiInstance.postUserRoutingskills(userId, body)
  .then(function(data) {
    console.log(`postUserRoutingskills success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch(function(error) {
  	console.log('There was a failure calling postUserRoutingskills');
    console.error(error);
  });

~~~

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **userId** | **String**| User ID |  |
 **body** | [**UserRoutingSkillPost**](UserRoutingSkillPost.html)| Skill |  |
{: class="table table-striped"}

### Return type

[**UserRoutingSkill**](UserRoutingSkill.html)

<a name="putRoutingEmailDomainRoute"></a>

# [**InboundRoute**](InboundRoute.html) putRoutingEmailDomainRoute(domainName, routeId, body)

PUT /api/v2/routing/email/domains/{domainName}/routes/{routeId}

Update a route



### Example

~~~ javascript
const platformClient = require('purecloud-platform-client-v2');

// Configure OAuth2 access token for authorization: PureCloud Auth
platformClient.ApiClient.instance.authentications['PureCloud Auth'].accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new platformClient.RoutingApi();

var domainName = "domainName_example"; // String | email domain

var routeId = "routeId_example"; // String | route ID

var body = new platformClient.InboundRoute(); // InboundRoute | Route

apiInstance.putRoutingEmailDomainRoute(domainName, routeId, body)
  .then(function(data) {
    console.log(`putRoutingEmailDomainRoute success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch(function(error) {
  	console.log('There was a failure calling putRoutingEmailDomainRoute');
    console.error(error);
  });

~~~

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **domainName** | **String**| email domain |  |
 **routeId** | **String**| route ID |  |
 **body** | [**InboundRoute**](InboundRoute.html)| Route |  |
{: class="table table-striped"}

### Return type

[**InboundRoute**](InboundRoute.html)

<a name="putRoutingQueue"></a>

# [**Queue**](Queue.html) putRoutingQueue(queueId, body)

PUT /api/v2/routing/queues/{queueId}

Update a queue



### Example

~~~ javascript
const platformClient = require('purecloud-platform-client-v2');

// Configure OAuth2 access token for authorization: PureCloud Auth
platformClient.ApiClient.instance.authentications['PureCloud Auth'].accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new platformClient.RoutingApi();

var queueId = "queueId_example"; // String | Queue ID

var body = new platformClient.Queue(); // Queue | Queue

apiInstance.putRoutingQueue(queueId, body)
  .then(function(data) {
    console.log(`putRoutingQueue success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch(function(error) {
  	console.log('There was a failure calling putRoutingQueue');
    console.error(error);
  });

~~~

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **queueId** | **String**| Queue ID |  |
 **body** | [**Queue**](Queue.html)| Queue |  |
{: class="table table-striped"}

### Return type

[**Queue**](Queue.html)

<a name="putRoutingUtilization"></a>

# [**Utilization**](Utilization.html) putRoutingUtilization(body)

PUT /api/v2/routing/utilization

Update the utilization settings.



### Example

~~~ javascript
const platformClient = require('purecloud-platform-client-v2');

// Configure OAuth2 access token for authorization: PureCloud Auth
platformClient.ApiClient.instance.authentications['PureCloud Auth'].accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new platformClient.RoutingApi();

var body = new platformClient.Utilization(); // Utilization | utilization

apiInstance.putRoutingUtilization(body)
  .then(function(data) {
    console.log(`putRoutingUtilization success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch(function(error) {
  	console.log('There was a failure calling putRoutingUtilization');
    console.error(error);
  });

~~~

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **body** | [**Utilization**](Utilization.html)| utilization |  |
{: class="table table-striped"}

### Return type

[**Utilization**](Utilization.html)

<a name="putRoutingWrapupcode"></a>

# [**WrapupCode**](WrapupCode.html) putRoutingWrapupcode(codeId, body)

PUT /api/v2/routing/wrapupcodes/{codeId}

Update wrap-up code



### Example

~~~ javascript
const platformClient = require('purecloud-platform-client-v2');

// Configure OAuth2 access token for authorization: PureCloud Auth
platformClient.ApiClient.instance.authentications['PureCloud Auth'].accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new platformClient.RoutingApi();

var codeId = "codeId_example"; // String | Wrapup Code ID

var body = new platformClient.WrapupCode(); // WrapupCode | WrapupCode

apiInstance.putRoutingWrapupcode(codeId, body)
  .then(function(data) {
    console.log(`putRoutingWrapupcode success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch(function(error) {
  	console.log('There was a failure calling putRoutingWrapupcode');
    console.error(error);
  });

~~~

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **codeId** | **String**| Wrapup Code ID |  |
 **body** | [**WrapupCode**](WrapupCode.html)| WrapupCode |  |
{: class="table table-striped"}

### Return type

[**WrapupCode**](WrapupCode.html)

<a name="putUserRoutingskill"></a>

# [**UserRoutingSkill**](UserRoutingSkill.html) putUserRoutingskill(userId, skillId, body)

PUT /api/v2/users/{userId}/routingskills/{skillId}

Update routing skill proficiency or state.



### Example

~~~ javascript
const platformClient = require('purecloud-platform-client-v2');

// Configure OAuth2 access token for authorization: PureCloud Auth
platformClient.ApiClient.instance.authentications['PureCloud Auth'].accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new platformClient.RoutingApi();

var userId = "userId_example"; // String | User ID

var skillId = "skillId_example"; // String | skillId

var body = new platformClient.UserRoutingSkill(); // UserRoutingSkill | Skill

apiInstance.putUserRoutingskill(userId, skillId, body)
  .then(function(data) {
    console.log(`putUserRoutingskill success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch(function(error) {
  	console.log('There was a failure calling putUserRoutingskill');
    console.error(error);
  });

~~~

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **userId** | **String**| User ID |  |
 **skillId** | **String**| skillId |  |
 **body** | [**UserRoutingSkill**](UserRoutingSkill.html)| Skill |  |
{: class="table table-striped"}

### Return type

[**UserRoutingSkill**](UserRoutingSkill.html)

