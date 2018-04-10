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
[**deleteRoutingSmsPhonenumber**](RoutingApi.html#deleteRoutingSmsPhonenumber) | **DELETE** /api/v2/routing/sms/phonenumbers/{addressId} | Delete a phone number provisioned for SMS.
[**deleteRoutingUtilization**](RoutingApi.html#deleteRoutingUtilization) | **DELETE** /api/v2/routing/utilization | Delete utilization settings and revert to system defaults.
[**deleteRoutingWrapupcode**](RoutingApi.html#deleteRoutingWrapupcode) | **DELETE** /api/v2/routing/wrapupcodes/{codeId} | Delete wrap-up code
[**deleteUserRoutinglanguage**](RoutingApi.html#deleteUserRoutinglanguage) | **DELETE** /api/v2/users/{userId}/routinglanguages/{languageId} | Remove routing language from user
[**deleteUserRoutingskill**](RoutingApi.html#deleteUserRoutingskill) | **DELETE** /api/v2/users/{userId}/routingskills/{skillId} | Remove routing skill from user
[**getRoutingEmailDomain**](RoutingApi.html#getRoutingEmailDomain) | **GET** /api/v2/routing/email/domains/{domainId} | Get domain
[**getRoutingEmailDomainRoute**](RoutingApi.html#getRoutingEmailDomainRoute) | **GET** /api/v2/routing/email/domains/{domainName}/routes/{routeId} | Get a route
[**getRoutingEmailDomainRoutes**](RoutingApi.html#getRoutingEmailDomainRoutes) | **GET** /api/v2/routing/email/domains/{domainName}/routes | Get routes
[**getRoutingEmailDomains**](RoutingApi.html#getRoutingEmailDomains) | **GET** /api/v2/routing/email/domains | Get domains
[**getRoutingEmailSetup**](RoutingApi.html#getRoutingEmailSetup) | **GET** /api/v2/routing/email/setup | Get email setup
[**getRoutingLanguages**](RoutingApi.html#getRoutingLanguages) | **GET** /api/v2/routing/languages | Get the list of supported languages.
[**getRoutingMessageRecipient**](RoutingApi.html#getRoutingMessageRecipient) | **GET** /api/v2/routing/message/recipients/{recipientId} | Get a recipient
[**getRoutingMessageRecipients**](RoutingApi.html#getRoutingMessageRecipients) | **GET** /api/v2/routing/message/recipients | Get recipients
[**getRoutingQueue**](RoutingApi.html#getRoutingQueue) | **GET** /api/v2/routing/queues/{queueId} | Get details about this queue.
[**getRoutingQueueEstimatedwaittime**](RoutingApi.html#getRoutingQueueEstimatedwaittime) | **GET** /api/v2/routing/queues/{queueId}/estimatedwaittime | Get Estimated Wait Time
[**getRoutingQueueMediatypeEstimatedwaittime**](RoutingApi.html#getRoutingQueueMediatypeEstimatedwaittime) | **GET** /api/v2/routing/queues/{queueId}/mediatypes/{mediaType}/estimatedwaittime | Get Estimated Wait Time
[**getRoutingQueueUsers**](RoutingApi.html#getRoutingQueueUsers) | **GET** /api/v2/routing/queues/{queueId}/users | Get the members of this queue
[**getRoutingQueueWrapupcodes**](RoutingApi.html#getRoutingQueueWrapupcodes) | **GET** /api/v2/routing/queues/{queueId}/wrapupcodes | Get the wrap-up codes for a queue
[**getRoutingQueues**](RoutingApi.html#getRoutingQueues) | **GET** /api/v2/routing/queues | Get list of queues.
[**getRoutingSkill**](RoutingApi.html#getRoutingSkill) | **GET** /api/v2/routing/skills/{skillId} | Get Routing Skill
[**getRoutingSkills**](RoutingApi.html#getRoutingSkills) | **GET** /api/v2/routing/skills | Get the list of routing skills.
[**getRoutingSmsAvailablephonenumbers**](RoutingApi.html#getRoutingSmsAvailablephonenumbers) | **GET** /api/v2/routing/sms/availablephonenumbers | Get a list of available phone numbers for SMS provisioning.
[**getRoutingSmsPhonenumber**](RoutingApi.html#getRoutingSmsPhonenumber) | **GET** /api/v2/routing/sms/phonenumbers/{addressId} | Get a phone number provisioned for SMS.
[**getRoutingSmsPhonenumbers**](RoutingApi.html#getRoutingSmsPhonenumbers) | **GET** /api/v2/routing/sms/phonenumbers | Get a list of provisioned phone numbers.
[**getRoutingUtilization**](RoutingApi.html#getRoutingUtilization) | **GET** /api/v2/routing/utilization | Get the utilization settings.
[**getRoutingWrapupcode**](RoutingApi.html#getRoutingWrapupcode) | **GET** /api/v2/routing/wrapupcodes/{codeId} | Get details about this wrap-up code.
[**getRoutingWrapupcodes**](RoutingApi.html#getRoutingWrapupcodes) | **GET** /api/v2/routing/wrapupcodes | Get list of wrapup codes.
[**getUserRoutinglanguages**](RoutingApi.html#getUserRoutinglanguages) | **GET** /api/v2/users/{userId}/routinglanguages | List routing language for user
[**getUserRoutingskills**](RoutingApi.html#getUserRoutingskills) | **GET** /api/v2/users/{userId}/routingskills | List routing skills for user
[**patchRoutingQueueUser**](RoutingApi.html#patchRoutingQueueUser) | **PATCH** /api/v2/routing/queues/{queueId}/users/{memberId} | Update the ring number of joined status for a User in a Queue
[**patchRoutingQueueUsers**](RoutingApi.html#patchRoutingQueueUsers) | **PATCH** /api/v2/routing/queues/{queueId}/users | Join or unjoin a set of users for a queue
[**patchUserRoutinglanguage**](RoutingApi.html#patchUserRoutinglanguage) | **PATCH** /api/v2/users/{userId}/routinglanguages/{languageId} | Update routing language proficiency or state.
[**postAnalyticsQueuesObservationsQuery**](RoutingApi.html#postAnalyticsQueuesObservationsQuery) | **POST** /api/v2/analytics/queues/observations/query | Query for queue observations
[**postRoutingEmailDomainRoutes**](RoutingApi.html#postRoutingEmailDomainRoutes) | **POST** /api/v2/routing/email/domains/{domainName}/routes | Create a route
[**postRoutingEmailDomains**](RoutingApi.html#postRoutingEmailDomains) | **POST** /api/v2/routing/email/domains | Create a domain
[**postRoutingLanguages**](RoutingApi.html#postRoutingLanguages) | **POST** /api/v2/routing/languages | Create Language
[**postRoutingQueueUsers**](RoutingApi.html#postRoutingQueueUsers) | **POST** /api/v2/routing/queues/{queueId}/users | Bulk add or delete up to 100 queue members
[**postRoutingQueueWrapupcodes**](RoutingApi.html#postRoutingQueueWrapupcodes) | **POST** /api/v2/routing/queues/{queueId}/wrapupcodes | Add up to 100 wrap-up codes to a queue
[**postRoutingQueues**](RoutingApi.html#postRoutingQueues) | **POST** /api/v2/routing/queues | Create queue
[**postRoutingSkills**](RoutingApi.html#postRoutingSkills) | **POST** /api/v2/routing/skills | Create Skill
[**postRoutingSmsAddresses**](RoutingApi.html#postRoutingSmsAddresses) | **POST** /api/v2/routing/sms/addresses | Provision an Address for SMS
[**postRoutingSmsPhonenumbers**](RoutingApi.html#postRoutingSmsPhonenumbers) | **POST** /api/v2/routing/sms/phonenumbers | Provision a phone number for SMS
[**postRoutingWrapupcodes**](RoutingApi.html#postRoutingWrapupcodes) | **POST** /api/v2/routing/wrapupcodes | Create a wrap-up code
[**postUserRoutinglanguages**](RoutingApi.html#postUserRoutinglanguages) | **POST** /api/v2/users/{userId}/routinglanguages | Add routing language to user
[**postUserRoutingskills**](RoutingApi.html#postUserRoutingskills) | **POST** /api/v2/users/{userId}/routingskills | Add routing skill to user
[**putRoutingEmailDomainRoute**](RoutingApi.html#putRoutingEmailDomainRoute) | **PUT** /api/v2/routing/email/domains/{domainName}/routes/{routeId} | Update a route
[**putRoutingMessageRecipient**](RoutingApi.html#putRoutingMessageRecipient) | **PUT** /api/v2/routing/message/recipients/{recipientId} | Update a recipient
[**putRoutingQueue**](RoutingApi.html#putRoutingQueue) | **PUT** /api/v2/routing/queues/{queueId} | Update a queue
[**putRoutingSmsPhonenumber**](RoutingApi.html#putRoutingSmsPhonenumber) | **PUT** /api/v2/routing/sms/phonenumbers/{addressId} | Update a phone number provisioned for SMS.
[**putRoutingUtilization**](RoutingApi.html#putRoutingUtilization) | **PUT** /api/v2/routing/utilization | Update the utilization settings.
[**putRoutingWrapupcode**](RoutingApi.html#putRoutingWrapupcode) | **PUT** /api/v2/routing/wrapupcodes/{codeId} | Update wrap-up code
[**putUserRoutingskill**](RoutingApi.html#putUserRoutingskill) | **PUT** /api/v2/users/{userId}/routingskills/{skillId} | Update routing skill proficiency or state.
{: class="table table-striped"}

<a name="deleteRoutingEmailDomain"></a>

# void deleteRoutingEmailDomain(domainId)

DELETE /api/v2/routing/email/domains/{domainId}

Delete a domain



### Example

~~~ javascript
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Configure OAuth2 access token for authorization: PureCloud Auth
platformClient.ApiClient.instance.authentications['PureCloud Auth'].accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new platformClient.RoutingApi();

var domainId = "domainId_example"; // String | domain ID

apiInstance.deleteRoutingEmailDomain(domainId)
  .then(function() {
    console.log('deleteRoutingEmailDomain returned successfully.');
  })
  .catch(function(err) {
  	console.log('There was a failure calling deleteRoutingEmailDomain');
    console.error(err);
  });

~~~

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **domainId** | **String** | domain ID |  |
{: class="table table-striped"}

### Return type

void (no response body)

<a name="deleteRoutingEmailDomainRoute"></a>

# void deleteRoutingEmailDomainRoute(domainName, routeId)

DELETE /api/v2/routing/email/domains/{domainName}/routes/{routeId}

Delete a route



### Example

~~~ javascript
// Browser
const platformClient = require('platformClient');
// Node
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
  .catch(function(err) {
  	console.log('There was a failure calling deleteRoutingEmailDomainRoute');
    console.error(err);
  });

~~~

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **domainName** | **String** | email domain |  |
 **routeId** | **String** | route ID |  |
{: class="table table-striped"}

### Return type

void (no response body)

<a name="deleteRoutingQueue"></a>

# void deleteRoutingQueue(queueId, opts)

DELETE /api/v2/routing/queues/{queueId}

Delete a queue



### Example

~~~ javascript
// Browser
const platformClient = require('platformClient');
// Node
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
  .catch(function(err) {
  	console.log('There was a failure calling deleteRoutingQueue');
    console.error(err);
  });

~~~

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **queueId** | **String** | Queue ID |  |
 **forceDelete** | **Boolean** | forceDelete | [optional]  |
{: class="table table-striped"}

### Return type

void (no response body)

<a name="deleteRoutingQueueUser"></a>

# void deleteRoutingQueueUser(queueId, memberId)

DELETE /api/v2/routing/queues/{queueId}/users/{memberId}

Delete queue member



### Example

~~~ javascript
// Browser
const platformClient = require('platformClient');
// Node
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
  .catch(function(err) {
  	console.log('There was a failure calling deleteRoutingQueueUser');
    console.error(err);
  });

~~~

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **queueId** | **String** | Queue ID |  |
 **memberId** | **String** | Member ID |  |
{: class="table table-striped"}

### Return type

void (no response body)

<a name="deleteRoutingQueueWrapupcode"></a>

# void deleteRoutingQueueWrapupcode(queueId, codeId)

DELETE /api/v2/routing/queues/{queueId}/wrapupcodes/{codeId}

Delete a wrap-up code from a queue



### Example

~~~ javascript
// Browser
const platformClient = require('platformClient');
// Node
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
  .catch(function(err) {
  	console.log('There was a failure calling deleteRoutingQueueWrapupcode');
    console.error(err);
  });

~~~

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **queueId** | **String** | Queue ID |  |
 **codeId** | **String** | Code ID |  |
{: class="table table-striped"}

### Return type

void (no response body)

<a name="deleteRoutingSkill"></a>

# void deleteRoutingSkill(skillId)

DELETE /api/v2/routing/skills/{skillId}

Delete Routing Skill



### Example

~~~ javascript
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Configure OAuth2 access token for authorization: PureCloud Auth
platformClient.ApiClient.instance.authentications['PureCloud Auth'].accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new platformClient.RoutingApi();

var skillId = "skillId_example"; // String | Skill ID

apiInstance.deleteRoutingSkill(skillId)
  .then(function() {
    console.log('deleteRoutingSkill returned successfully.');
  })
  .catch(function(err) {
  	console.log('There was a failure calling deleteRoutingSkill');
    console.error(err);
  });

~~~

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **skillId** | **String** | Skill ID |  |
{: class="table table-striped"}

### Return type

void (no response body)

<a name="deleteRoutingSmsPhonenumber"></a>

# void deleteRoutingSmsPhonenumber(addressId)

DELETE /api/v2/routing/sms/phonenumbers/{addressId}

Delete a phone number provisioned for SMS.



### Example

~~~ javascript
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Configure OAuth2 access token for authorization: PureCloud Auth
platformClient.ApiClient.instance.authentications['PureCloud Auth'].accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new platformClient.RoutingApi();

var addressId = "addressId_example"; // String | Address ID

apiInstance.deleteRoutingSmsPhonenumber(addressId)
  .then(function() {
    console.log('deleteRoutingSmsPhonenumber returned successfully.');
  })
  .catch(function(err) {
  	console.log('There was a failure calling deleteRoutingSmsPhonenumber');
    console.error(err);
  });

~~~

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **addressId** | **String** | Address ID |  |
{: class="table table-striped"}

### Return type

void (no response body)

<a name="deleteRoutingUtilization"></a>

# void deleteRoutingUtilization()

DELETE /api/v2/routing/utilization

Delete utilization settings and revert to system defaults.



### Example

~~~ javascript
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Configure OAuth2 access token for authorization: PureCloud Auth
platformClient.ApiClient.instance.authentications['PureCloud Auth'].accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new platformClient.RoutingApi();
apiInstance.deleteRoutingUtilization()
  .then(function() {
    console.log('deleteRoutingUtilization returned successfully.');
  })
  .catch(function(err) {
  	console.log('There was a failure calling deleteRoutingUtilization');
    console.error(err);
  });

~~~

### Parameters

This endpoint does not need any parameter.
{: class="table table-striped"}

### Return type

void (no response body)

<a name="deleteRoutingWrapupcode"></a>

# void deleteRoutingWrapupcode(codeId)

DELETE /api/v2/routing/wrapupcodes/{codeId}

Delete wrap-up code



### Example

~~~ javascript
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Configure OAuth2 access token for authorization: PureCloud Auth
platformClient.ApiClient.instance.authentications['PureCloud Auth'].accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new platformClient.RoutingApi();

var codeId = "codeId_example"; // String | Wrapup Code ID

apiInstance.deleteRoutingWrapupcode(codeId)
  .then(function() {
    console.log('deleteRoutingWrapupcode returned successfully.');
  })
  .catch(function(err) {
  	console.log('There was a failure calling deleteRoutingWrapupcode');
    console.error(err);
  });

~~~

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **codeId** | **String** | Wrapup Code ID |  |
{: class="table table-striped"}

### Return type

void (no response body)

<a name="deleteUserRoutinglanguage"></a>

# void deleteUserRoutinglanguage(userId, languageId)

DELETE /api/v2/users/{userId}/routinglanguages/{languageId}

Remove routing language from user



### Example

~~~ javascript
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Configure OAuth2 access token for authorization: PureCloud Auth
platformClient.ApiClient.instance.authentications['PureCloud Auth'].accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new platformClient.RoutingApi();

var userId = "userId_example"; // String | User ID

var languageId = "languageId_example"; // String | languageId

apiInstance.deleteUserRoutinglanguage(userId, languageId)
  .then(function() {
    console.log('deleteUserRoutinglanguage returned successfully.');
  })
  .catch(function(err) {
  	console.log('There was a failure calling deleteUserRoutinglanguage');
    console.error(err);
  });

~~~

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **userId** | **String** | User ID |  |
 **languageId** | **String** | languageId |  |
{: class="table table-striped"}

### Return type

void (no response body)

<a name="deleteUserRoutingskill"></a>

# void deleteUserRoutingskill(userId, skillId)

DELETE /api/v2/users/{userId}/routingskills/{skillId}

Remove routing skill from user



### Example

~~~ javascript
// Browser
const platformClient = require('platformClient');
// Node
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
  .catch(function(err) {
  	console.log('There was a failure calling deleteUserRoutingskill');
    console.error(err);
  });

~~~

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **userId** | **String** | User ID |  |
 **skillId** | **String** | skillId |  |
{: class="table table-striped"}

### Return type

void (no response body)

<a name="getRoutingEmailDomain"></a>

# InboundDomain getRoutingEmailDomain(domainId)

GET /api/v2/routing/email/domains/{domainId}

Get domain



### Example

~~~ javascript
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Configure OAuth2 access token for authorization: PureCloud Auth
platformClient.ApiClient.instance.authentications['PureCloud Auth'].accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new platformClient.RoutingApi();

var domainId = "domainId_example"; // String | domain ID

apiInstance.getRoutingEmailDomain(domainId)
  .then(function(data) {
    console.log(`getRoutingEmailDomain success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch(function(err) {
  	console.log('There was a failure calling getRoutingEmailDomain');
    console.error(err);
  });

~~~

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **domainId** | **String** | domain ID |  |
{: class="table table-striped"}

### Return type

**InboundDomain**

<a name="getRoutingEmailDomainRoute"></a>

# InboundRoute getRoutingEmailDomainRoute(domainName, routeId)

GET /api/v2/routing/email/domains/{domainName}/routes/{routeId}

Get a route



### Example

~~~ javascript
// Browser
const platformClient = require('platformClient');
// Node
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
  .catch(function(err) {
  	console.log('There was a failure calling getRoutingEmailDomainRoute');
    console.error(err);
  });

~~~

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **domainName** | **String** | email domain |  |
 **routeId** | **String** | route ID |  |
{: class="table table-striped"}

### Return type

**InboundRoute**

<a name="getRoutingEmailDomainRoutes"></a>

# InboundRouteEntityListing getRoutingEmailDomainRoutes(domainName, opts)

GET /api/v2/routing/email/domains/{domainName}/routes

Get routes



### Example

~~~ javascript
// Browser
const platformClient = require('platformClient');
// Node
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
  .catch(function(err) {
  	console.log('There was a failure calling getRoutingEmailDomainRoutes');
    console.error(err);
  });

~~~

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **domainName** | **String** | email domain |  |
 **pageSize** | **Number** | Page size | [optional] [default to 25] |
 **pageNumber** | **Number** | Page number | [optional] [default to 1] |
 **pattern** | **String** | Filter routes by the route&#39;s pattern property | [optional]  |
{: class="table table-striped"}

### Return type

**InboundRouteEntityListing**

<a name="getRoutingEmailDomains"></a>

# InboundDomainEntityListing getRoutingEmailDomains()

GET /api/v2/routing/email/domains

Get domains



### Example

~~~ javascript
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Configure OAuth2 access token for authorization: PureCloud Auth
platformClient.ApiClient.instance.authentications['PureCloud Auth'].accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new platformClient.RoutingApi();
apiInstance.getRoutingEmailDomains()
  .then(function(data) {
    console.log(`getRoutingEmailDomains success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch(function(err) {
  	console.log('There was a failure calling getRoutingEmailDomains');
    console.error(err);
  });

~~~

### Parameters

This endpoint does not need any parameter.
{: class="table table-striped"}

### Return type

**InboundDomainEntityListing**

<a name="getRoutingEmailSetup"></a>

# EmailSetup getRoutingEmailSetup()

GET /api/v2/routing/email/setup

Get email setup



### Example

~~~ javascript
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Configure OAuth2 access token for authorization: PureCloud Auth
platformClient.ApiClient.instance.authentications['PureCloud Auth'].accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new platformClient.RoutingApi();
apiInstance.getRoutingEmailSetup()
  .then(function(data) {
    console.log(`getRoutingEmailSetup success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch(function(err) {
  	console.log('There was a failure calling getRoutingEmailSetup');
    console.error(err);
  });

~~~

### Parameters

This endpoint does not need any parameter.
{: class="table table-striped"}

### Return type

**EmailSetup**

<a name="getRoutingLanguages"></a>

# LanguageEntityListing getRoutingLanguages(opts)

GET /api/v2/routing/languages

Get the list of supported languages.



### Example

~~~ javascript
// Browser
const platformClient = require('platformClient');
// Node
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
  .catch(function(err) {
  	console.log('There was a failure calling getRoutingLanguages');
    console.error(err);
  });

~~~

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **pageSize** | **Number** | Page size | [optional] [default to 25] |
 **pageNumber** | **Number** | Page number | [optional] [default to 1] |
 **sortOrder** | **String** | Ascending or descending sort order | [optional] [default to ASC]<br />**Values**: ascending, descending |
 **name** | **String** | Name | [optional]  |
{: class="table table-striped"}

### Return type

**LanguageEntityListing**

<a name="getRoutingMessageRecipient"></a>

# Recipient getRoutingMessageRecipient(recipientId)

GET /api/v2/routing/message/recipients/{recipientId}

Get a recipient



### Example

~~~ javascript
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Configure OAuth2 access token for authorization: PureCloud Auth
platformClient.ApiClient.instance.authentications['PureCloud Auth'].accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new platformClient.RoutingApi();

var recipientId = "recipientId_example"; // String | Recipient ID

apiInstance.getRoutingMessageRecipient(recipientId)
  .then(function(data) {
    console.log(`getRoutingMessageRecipient success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch(function(err) {
  	console.log('There was a failure calling getRoutingMessageRecipient');
    console.error(err);
  });

~~~

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **recipientId** | **String** | Recipient ID |  |
{: class="table table-striped"}

### Return type

**Recipient**

<a name="getRoutingMessageRecipients"></a>

# RecipientListing getRoutingMessageRecipients(opts)

GET /api/v2/routing/message/recipients

Get recipients



### Example

~~~ javascript
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Configure OAuth2 access token for authorization: PureCloud Auth
platformClient.ApiClient.instance.authentications['PureCloud Auth'].accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new platformClient.RoutingApi();

var opts = { 
  'pageSize': 25, // Number | Page size
  'pageNumber': 1 // Number | Page number
};
apiInstance.getRoutingMessageRecipients(opts)
  .then(function(data) {
    console.log(`getRoutingMessageRecipients success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch(function(err) {
  	console.log('There was a failure calling getRoutingMessageRecipients');
    console.error(err);
  });

~~~

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **pageSize** | **Number** | Page size | [optional] [default to 25] |
 **pageNumber** | **Number** | Page number | [optional] [default to 1] |
{: class="table table-striped"}

### Return type

**RecipientListing**

<a name="getRoutingQueue"></a>

# Queue getRoutingQueue(queueId)

GET /api/v2/routing/queues/{queueId}

Get details about this queue.



### Example

~~~ javascript
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Configure OAuth2 access token for authorization: PureCloud Auth
platformClient.ApiClient.instance.authentications['PureCloud Auth'].accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new platformClient.RoutingApi();

var queueId = "queueId_example"; // String | Queue ID

apiInstance.getRoutingQueue(queueId)
  .then(function(data) {
    console.log(`getRoutingQueue success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch(function(err) {
  	console.log('There was a failure calling getRoutingQueue');
    console.error(err);
  });

~~~

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **queueId** | **String** | Queue ID |  |
{: class="table table-striped"}

### Return type

**Queue**

<a name="getRoutingQueueEstimatedwaittime"></a>

# EstimatedWaitTimePredictions getRoutingQueueEstimatedwaittime(queueId, opts)

GET /api/v2/routing/queues/{queueId}/estimatedwaittime

Get Estimated Wait Time



### Example

~~~ javascript
// Browser
const platformClient = require('platformClient');
// Node
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
  .catch(function(err) {
  	console.log('There was a failure calling getRoutingQueueEstimatedwaittime');
    console.error(err);
  });

~~~

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **queueId** | **String** | queueId |  |
 **conversationId** | **String** | conversationId | [optional]  |
{: class="table table-striped"}

### Return type

**EstimatedWaitTimePredictions**

<a name="getRoutingQueueMediatypeEstimatedwaittime"></a>

# EstimatedWaitTimePredictions getRoutingQueueMediatypeEstimatedwaittime(queueId, mediaType)

GET /api/v2/routing/queues/{queueId}/mediatypes/{mediaType}/estimatedwaittime

Get Estimated Wait Time



### Example

~~~ javascript
// Browser
const platformClient = require('platformClient');
// Node
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
  .catch(function(err) {
  	console.log('There was a failure calling getRoutingQueueMediatypeEstimatedwaittime');
    console.error(err);
  });

~~~

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **queueId** | **String** | queueId |  |
 **mediaType** | **String** | mediaType |  |
{: class="table table-striped"}

### Return type

**EstimatedWaitTimePredictions**

<a name="getRoutingQueueUsers"></a>

# QueueMemberEntityListing getRoutingQueueUsers(queueId, opts)

GET /api/v2/routing/queues/{queueId}/users

Get the members of this queue



### Example

~~~ javascript
// Browser
const platformClient = require('platformClient');
// Node
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
  .catch(function(err) {
  	console.log('There was a failure calling getRoutingQueueUsers');
    console.error(err);
  });

~~~

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **queueId** | **String** | Queue ID |  |
 **pageSize** | **Number** | Page size | [optional] [default to 25] |
 **pageNumber** | **Number** | Page number | [optional] [default to 1] |
 **sortBy** | **String** | Sort by | [optional] [default to name] |
 **expand** | **[String]** | Which fields, if any, to expand. | [optional] <br />**Values**: routingStatus, presence, conversationSummary, outOfOffice, geolocation, station, authorization, profileSkills, locations, groups, date, geolocationsettings, organization, presencedefinitions, locationdefinitions, orgauthorization, favorites, superiors, directreports, adjacents, routingskills, routinglanguages, fieldconfigs, token, trustors |
 **joined** | **Boolean** | Filter by joined status | [optional]  |
 **name** | **String** | Filter by queue member name | [optional]  |
 **profileSkills** | **[String]** | Filter by profile skill | [optional]  |
 **skills** | **[String]** | Filter by skill | [optional]  |
 **languages** | **[String]** | Filter by language | [optional]  |
 **routingStatus** | **[String]** | Filter by routing status | [optional]  |
 **presence** | **[String]** | Filter by presence | [optional]  |
{: class="table table-striped"}

### Return type

**QueueMemberEntityListing**

<a name="getRoutingQueueWrapupcodes"></a>

# WrapupCodeEntityListing getRoutingQueueWrapupcodes(queueId)

GET /api/v2/routing/queues/{queueId}/wrapupcodes

Get the wrap-up codes for a queue



### Example

~~~ javascript
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Configure OAuth2 access token for authorization: PureCloud Auth
platformClient.ApiClient.instance.authentications['PureCloud Auth'].accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new platformClient.RoutingApi();

var queueId = "queueId_example"; // String | Queue ID

apiInstance.getRoutingQueueWrapupcodes(queueId)
  .then(function(data) {
    console.log(`getRoutingQueueWrapupcodes success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch(function(err) {
  	console.log('There was a failure calling getRoutingQueueWrapupcodes');
    console.error(err);
  });

~~~

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **queueId** | **String** | Queue ID |  |
{: class="table table-striped"}

### Return type

**WrapupCodeEntityListing**

<a name="getRoutingQueues"></a>

# QueueEntityListing getRoutingQueues(opts)

GET /api/v2/routing/queues

Get list of queues.



### Example

~~~ javascript
// Browser
const platformClient = require('platformClient');
// Node
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
  .catch(function(err) {
  	console.log('There was a failure calling getRoutingQueues');
    console.error(err);
  });

~~~

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **pageSize** | **Number** | Page size | [optional] [default to 25] |
 **pageNumber** | **Number** | Page number | [optional] [default to 1] |
 **sortBy** | **String** | Sort by | [optional] [default to name] |
 **name** | **String** | Name | [optional]  |
 **active** | **Boolean** | Active | [optional]  |
{: class="table table-striped"}

### Return type

**QueueEntityListing**

<a name="getRoutingSkill"></a>

# RoutingSkill getRoutingSkill(skillId)

GET /api/v2/routing/skills/{skillId}

Get Routing Skill



### Example

~~~ javascript
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Configure OAuth2 access token for authorization: PureCloud Auth
platformClient.ApiClient.instance.authentications['PureCloud Auth'].accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new platformClient.RoutingApi();

var skillId = "skillId_example"; // String | Skill ID

apiInstance.getRoutingSkill(skillId)
  .then(function(data) {
    console.log(`getRoutingSkill success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch(function(err) {
  	console.log('There was a failure calling getRoutingSkill');
    console.error(err);
  });

~~~

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **skillId** | **String** | Skill ID |  |
{: class="table table-striped"}

### Return type

**RoutingSkill**

<a name="getRoutingSkills"></a>

# SkillEntityListing getRoutingSkills(opts)

GET /api/v2/routing/skills

Get the list of routing skills.



### Example

~~~ javascript
// Browser
const platformClient = require('platformClient');
// Node
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
  .catch(function(err) {
  	console.log('There was a failure calling getRoutingSkills');
    console.error(err);
  });

~~~

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **pageSize** | **Number** | Page size | [optional] [default to 25] |
 **pageNumber** | **Number** | Page number | [optional] [default to 1] |
 **name** | **String** | Filter for results that start with this value | [optional]  |
{: class="table table-striped"}

### Return type

**SkillEntityListing**

<a name="getRoutingSmsAvailablephonenumbers"></a>

# SMSAvailablePhoneNumberEntityListing getRoutingSmsAvailablephonenumbers(countryCode, phoneNumberType, opts)

GET /api/v2/routing/sms/availablephonenumbers

Get a list of available phone numbers for SMS provisioning.

This request will return up to 30 random phone numbers matching the criteria specified.  To get additional phone numbers repeat the request.

### Example

~~~ javascript
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Configure OAuth2 access token for authorization: PureCloud Auth
platformClient.ApiClient.instance.authentications['PureCloud Auth'].accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new platformClient.RoutingApi();

var countryCode = "countryCode_example"; // String | The ISO 3166-1 alpha-2 country code of the county for which available phone numbers should be returned

var phoneNumberType = "phoneNumberType_example"; // String | Type of available phone numbers searched

var opts = { 
  'region': "region_example", // String | Region/province/state that can be used to restrict the numbers returned
  'city': "city_example", // String | City that can be used to restrict the numbers returned
  'areaCode': "areaCode_example", // String | Area code that can be used to restrict the numbers returned
  'pattern': "pattern_example", // String | A pattern to match phone numbers. Valid characters are '*' and [0-9a-zA-Z]. The '*' character will match any single digit.
  'addressRequirement': "addressRequirement_example" // String | This indicates whether the phone number requires to have an Address registered.
};
apiInstance.getRoutingSmsAvailablephonenumbers(countryCode, phoneNumberType, opts)
  .then(function(data) {
    console.log(`getRoutingSmsAvailablephonenumbers success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch(function(err) {
  	console.log('There was a failure calling getRoutingSmsAvailablephonenumbers');
    console.error(err);
  });

~~~

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **countryCode** | **String** | The ISO 3166-1 alpha-2 country code of the county for which available phone numbers should be returned |  |
 **phoneNumberType** | **String** | Type of available phone numbers searched | <br />**Values**: local, mobile, tollfree |
 **region** | **String** | Region/province/state that can be used to restrict the numbers returned | [optional]  |
 **city** | **String** | City that can be used to restrict the numbers returned | [optional]  |
 **areaCode** | **String** | Area code that can be used to restrict the numbers returned | [optional]  |
 **pattern** | **String** | A pattern to match phone numbers. Valid characters are &#39;*&#39; and [0-9a-zA-Z]. The &#39;*&#39; character will match any single digit. | [optional]  |
 **addressRequirement** | **String** | This indicates whether the phone number requires to have an Address registered. | [optional] <br />**Values**: none, any, local, foreign |
{: class="table table-striped"}

### Return type

**SMSAvailablePhoneNumberEntityListing**

<a name="getRoutingSmsPhonenumber"></a>

# SmsPhoneNumber getRoutingSmsPhonenumber(addressId)

GET /api/v2/routing/sms/phonenumbers/{addressId}

Get a phone number provisioned for SMS.



### Example

~~~ javascript
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Configure OAuth2 access token for authorization: PureCloud Auth
platformClient.ApiClient.instance.authentications['PureCloud Auth'].accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new platformClient.RoutingApi();

var addressId = "addressId_example"; // String | Address ID

apiInstance.getRoutingSmsPhonenumber(addressId)
  .then(function(data) {
    console.log(`getRoutingSmsPhonenumber success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch(function(err) {
  	console.log('There was a failure calling getRoutingSmsPhonenumber');
    console.error(err);
  });

~~~

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **addressId** | **String** | Address ID |  |
{: class="table table-striped"}

### Return type

**SmsPhoneNumber**

<a name="getRoutingSmsPhonenumbers"></a>

# SmsPhoneNumberEntityListing getRoutingSmsPhonenumbers(opts)

GET /api/v2/routing/sms/phonenumbers

Get a list of provisioned phone numbers.



### Example

~~~ javascript
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Configure OAuth2 access token for authorization: PureCloud Auth
platformClient.ApiClient.instance.authentications['PureCloud Auth'].accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new platformClient.RoutingApi();

var opts = { 
  'phoneNumber': "phoneNumber_example", // String | Filter on phone number address. Allowable characters are the digits '0-9' and the wild card character '\\*'. If just digits are present, a contains search is done on the address pattern. For example, '317' could be matched anywhere in the address. An '\\*' will match multiple digits. For example, to match a specific area code within the US a pattern like '1317*' could be used.
  'phoneNumberType': "phoneNumberType_example", // String | Filter on phone number type
  'phoneNumberStatus': "phoneNumberStatus_example", // String | Filter on phone number status
  'pageSize': 25, // Number | Page size
  'pageNumber': 1 // Number | Page number
};
apiInstance.getRoutingSmsPhonenumbers(opts)
  .then(function(data) {
    console.log(`getRoutingSmsPhonenumbers success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch(function(err) {
  	console.log('There was a failure calling getRoutingSmsPhonenumbers');
    console.error(err);
  });

~~~

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **phoneNumber** | **String** | Filter on phone number address. Allowable characters are the digits &#39;0-9&#39; and the wild card character &#39;\\*&#39;. If just digits are present, a contains search is done on the address pattern. For example, &#39;317&#39; could be matched anywhere in the address. An &#39;\\*&#39; will match multiple digits. For example, to match a specific area code within the US a pattern like &#39;1317*&#39; could be used. | [optional]  |
 **phoneNumberType** | **String** | Filter on phone number type | [optional] <br />**Values**: local, mobile, tollfree |
 **phoneNumberStatus** | **String** | Filter on phone number status | [optional] <br />**Values**: active, invalid, porting |
 **pageSize** | **Number** | Page size | [optional] [default to 25] |
 **pageNumber** | **Number** | Page number | [optional] [default to 1] |
{: class="table table-striped"}

### Return type

**SmsPhoneNumberEntityListing**

<a name="getRoutingUtilization"></a>

# Utilization getRoutingUtilization()

GET /api/v2/routing/utilization

Get the utilization settings.



### Example

~~~ javascript
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Configure OAuth2 access token for authorization: PureCloud Auth
platformClient.ApiClient.instance.authentications['PureCloud Auth'].accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new platformClient.RoutingApi();
apiInstance.getRoutingUtilization()
  .then(function(data) {
    console.log(`getRoutingUtilization success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch(function(err) {
  	console.log('There was a failure calling getRoutingUtilization');
    console.error(err);
  });

~~~

### Parameters

This endpoint does not need any parameter.
{: class="table table-striped"}

### Return type

**Utilization**

<a name="getRoutingWrapupcode"></a>

# WrapupCode getRoutingWrapupcode(codeId)

GET /api/v2/routing/wrapupcodes/{codeId}

Get details about this wrap-up code.



### Example

~~~ javascript
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Configure OAuth2 access token for authorization: PureCloud Auth
platformClient.ApiClient.instance.authentications['PureCloud Auth'].accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new platformClient.RoutingApi();

var codeId = "codeId_example"; // String | Wrapup Code ID

apiInstance.getRoutingWrapupcode(codeId)
  .then(function(data) {
    console.log(`getRoutingWrapupcode success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch(function(err) {
  	console.log('There was a failure calling getRoutingWrapupcode');
    console.error(err);
  });

~~~

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **codeId** | **String** | Wrapup Code ID |  |
{: class="table table-striped"}

### Return type

**WrapupCode**

<a name="getRoutingWrapupcodes"></a>

# WrapupCodeEntityListing getRoutingWrapupcodes(opts)

GET /api/v2/routing/wrapupcodes

Get list of wrapup codes.



### Example

~~~ javascript
// Browser
const platformClient = require('platformClient');
// Node
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
  .catch(function(err) {
  	console.log('There was a failure calling getRoutingWrapupcodes');
    console.error(err);
  });

~~~

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **pageSize** | **Number** | Page size | [optional] [default to 25] |
 **pageNumber** | **Number** | Page number | [optional] [default to 1] |
 **name** | **String** | Name | [optional]  |
 **sortBy** | **String** | Sort by | [optional] [default to name] |
{: class="table table-striped"}

### Return type

**WrapupCodeEntityListing**

<a name="getUserRoutinglanguages"></a>

# UserLanguageEntityListing getUserRoutinglanguages(userId, opts)

GET /api/v2/users/{userId}/routinglanguages

List routing language for user



### Example

~~~ javascript
// Browser
const platformClient = require('platformClient');
// Node
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
apiInstance.getUserRoutinglanguages(userId, opts)
  .then(function(data) {
    console.log(`getUserRoutinglanguages success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch(function(err) {
  	console.log('There was a failure calling getUserRoutinglanguages');
    console.error(err);
  });

~~~

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **userId** | **String** | User ID |  |
 **pageSize** | **Number** | Page size | [optional] [default to 25] |
 **pageNumber** | **Number** | Page number | [optional] [default to 1] |
 **sortOrder** | **String** | Ascending or descending sort order | [optional] [default to ASC]<br />**Values**: ascending, descending |
{: class="table table-striped"}

### Return type

**UserLanguageEntityListing**

<a name="getUserRoutingskills"></a>

# UserSkillEntityListing getUserRoutingskills(userId, opts)

GET /api/v2/users/{userId}/routingskills

List routing skills for user



### Example

~~~ javascript
// Browser
const platformClient = require('platformClient');
// Node
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
  .catch(function(err) {
  	console.log('There was a failure calling getUserRoutingskills');
    console.error(err);
  });

~~~

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **userId** | **String** | User ID |  |
 **pageSize** | **Number** | Page size | [optional] [default to 25] |
 **pageNumber** | **Number** | Page number | [optional] [default to 1] |
 **sortOrder** | **String** | Ascending or descending sort order | [optional] [default to ASC]<br />**Values**: ascending, descending |
{: class="table table-striped"}

### Return type

**UserSkillEntityListing**

<a name="patchRoutingQueueUser"></a>

# QueueMember patchRoutingQueueUser(queueId, memberId, body)

PATCH /api/v2/routing/queues/{queueId}/users/{memberId}

Update the ring number of joined status for a User in a Queue



### Example

~~~ javascript
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Configure OAuth2 access token for authorization: PureCloud Auth
platformClient.ApiClient.instance.authentications['PureCloud Auth'].accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new platformClient.RoutingApi();

var queueId = "queueId_example"; // String | Queue ID

var memberId = "memberId_example"; // String | Member ID

var body = {}; // Object | Queue Member

apiInstance.patchRoutingQueueUser(queueId, memberId, body)
  .then(function(data) {
    console.log(`patchRoutingQueueUser success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch(function(err) {
  	console.log('There was a failure calling patchRoutingQueueUser');
    console.error(err);
  });

~~~

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **queueId** | **String** | Queue ID |  |
 **memberId** | **String** | Member ID |  |
 **body** | **Object** | Queue Member |  |
{: class="table table-striped"}

### Return type

**QueueMember**

<a name="patchRoutingQueueUsers"></a>

# QueueMemberEntityListing patchRoutingQueueUsers(queueId, body)

PATCH /api/v2/routing/queues/{queueId}/users

Join or unjoin a set of users for a queue



### Example

~~~ javascript
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Configure OAuth2 access token for authorization: PureCloud Auth
platformClient.ApiClient.instance.authentications['PureCloud Auth'].accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new platformClient.RoutingApi();

var queueId = "queueId_example"; // String | Queue ID

var body = [{}]; // Object | Queue Members

apiInstance.patchRoutingQueueUsers(queueId, body)
  .then(function(data) {
    console.log(`patchRoutingQueueUsers success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch(function(err) {
  	console.log('There was a failure calling patchRoutingQueueUsers');
    console.error(err);
  });

~~~

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **queueId** | **String** | Queue ID |  |
 **body** | **Object** | Queue Members |  |
{: class="table table-striped"}

### Return type

**QueueMemberEntityListing**

<a name="patchUserRoutinglanguage"></a>

# UserRoutingLanguage patchUserRoutinglanguage(userId, languageId, body)

PATCH /api/v2/users/{userId}/routinglanguages/{languageId}

Update routing language proficiency or state.



### Example

~~~ javascript
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Configure OAuth2 access token for authorization: PureCloud Auth
platformClient.ApiClient.instance.authentications['PureCloud Auth'].accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new platformClient.RoutingApi();

var userId = "userId_example"; // String | User ID

var languageId = "languageId_example"; // String | languageId

var body = {}; // Object | Language

apiInstance.patchUserRoutinglanguage(userId, languageId, body)
  .then(function(data) {
    console.log(`patchUserRoutinglanguage success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch(function(err) {
  	console.log('There was a failure calling patchUserRoutinglanguage');
    console.error(err);
  });

~~~

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **userId** | **String** | User ID |  |
 **languageId** | **String** | languageId |  |
 **body** | **Object** | Language |  |
{: class="table table-striped"}

### Return type

**UserRoutingLanguage**

<a name="postAnalyticsQueuesObservationsQuery"></a>

# QualifierMappingObservationQueryResponse postAnalyticsQueuesObservationsQuery(body)

POST /api/v2/analytics/queues/observations/query

Query for queue observations



### Example

~~~ javascript
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Configure OAuth2 access token for authorization: PureCloud Auth
platformClient.ApiClient.instance.authentications['PureCloud Auth'].accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new platformClient.RoutingApi();

var body = {}; // Object | query

apiInstance.postAnalyticsQueuesObservationsQuery(body)
  .then(function(data) {
    console.log(`postAnalyticsQueuesObservationsQuery success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch(function(err) {
  	console.log('There was a failure calling postAnalyticsQueuesObservationsQuery');
    console.error(err);
  });

~~~

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **body** | **Object** | query |  |
{: class="table table-striped"}

### Return type

**QualifierMappingObservationQueryResponse**

<a name="postRoutingEmailDomainRoutes"></a>

# InboundRoute postRoutingEmailDomainRoutes(domainName, body)

POST /api/v2/routing/email/domains/{domainName}/routes

Create a route



### Example

~~~ javascript
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Configure OAuth2 access token for authorization: PureCloud Auth
platformClient.ApiClient.instance.authentications['PureCloud Auth'].accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new platformClient.RoutingApi();

var domainName = "domainName_example"; // String | email domain

var body = {}; // Object | Route

apiInstance.postRoutingEmailDomainRoutes(domainName, body)
  .then(function(data) {
    console.log(`postRoutingEmailDomainRoutes success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch(function(err) {
  	console.log('There was a failure calling postRoutingEmailDomainRoutes');
    console.error(err);
  });

~~~

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **domainName** | **String** | email domain |  |
 **body** | **Object** | Route |  |
{: class="table table-striped"}

### Return type

**InboundRoute**

<a name="postRoutingEmailDomains"></a>

# InboundDomain postRoutingEmailDomains(body)

POST /api/v2/routing/email/domains

Create a domain



### Example

~~~ javascript
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Configure OAuth2 access token for authorization: PureCloud Auth
platformClient.ApiClient.instance.authentications['PureCloud Auth'].accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new platformClient.RoutingApi();

var body = {}; // Object | Domain

apiInstance.postRoutingEmailDomains(body)
  .then(function(data) {
    console.log(`postRoutingEmailDomains success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch(function(err) {
  	console.log('There was a failure calling postRoutingEmailDomains');
    console.error(err);
  });

~~~

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **body** | **Object** | Domain |  |
{: class="table table-striped"}

### Return type

**InboundDomain**

<a name="postRoutingLanguages"></a>

# Language postRoutingLanguages(body)

POST /api/v2/routing/languages

Create Language



### Example

~~~ javascript
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Configure OAuth2 access token for authorization: PureCloud Auth
platformClient.ApiClient.instance.authentications['PureCloud Auth'].accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new platformClient.RoutingApi();

var body = {}; // Object | Language

apiInstance.postRoutingLanguages(body)
  .then(function(data) {
    console.log(`postRoutingLanguages success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch(function(err) {
  	console.log('There was a failure calling postRoutingLanguages');
    console.error(err);
  });

~~~

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **body** | **Object** | Language |  |
{: class="table table-striped"}

### Return type

**Language**

<a name="postRoutingQueueUsers"></a>

# **&#39;String&#39;** postRoutingQueueUsers(queueId, body, opts)

POST /api/v2/routing/queues/{queueId}/users

Bulk add or delete up to 100 queue members



### Example

~~~ javascript
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Configure OAuth2 access token for authorization: PureCloud Auth
platformClient.ApiClient.instance.authentications['PureCloud Auth'].accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new platformClient.RoutingApi();

var queueId = "queueId_example"; // String | Queue ID

var body = [{}]; // Object | Queue Members

var opts = { 
  '_delete': false // Boolean | True to delete queue members
};
apiInstance.postRoutingQueueUsers(queueId, body, opts)
  .then(function(data) {
    console.log(`postRoutingQueueUsers success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch(function(err) {
  	console.log('There was a failure calling postRoutingQueueUsers');
    console.error(err);
  });

~~~

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **queueId** | **String** | Queue ID |  |
 **body** | **Object** | Queue Members |  |
 **_delete** | **Boolean** | True to delete queue members | [optional] [default to false] |
{: class="table table-striped"}

### Return type

**&#39;String&#39;**

<a name="postRoutingQueueWrapupcodes"></a>

# [WrapupCode] postRoutingQueueWrapupcodes(queueId, body)

POST /api/v2/routing/queues/{queueId}/wrapupcodes

Add up to 100 wrap-up codes to a queue



### Example

~~~ javascript
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Configure OAuth2 access token for authorization: PureCloud Auth
platformClient.ApiClient.instance.authentications['PureCloud Auth'].accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new platformClient.RoutingApi();

var queueId = "queueId_example"; // String | Queue ID

var body = [{}]; // Object | List of wrapup codes

apiInstance.postRoutingQueueWrapupcodes(queueId, body)
  .then(function(data) {
    console.log(`postRoutingQueueWrapupcodes success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch(function(err) {
  	console.log('There was a failure calling postRoutingQueueWrapupcodes');
    console.error(err);
  });

~~~

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **queueId** | **String** | Queue ID |  |
 **body** | **Object** | List of wrapup codes |  |
{: class="table table-striped"}

### Return type

**[WrapupCode]**

<a name="postRoutingQueues"></a>

# Queue postRoutingQueues(body)

POST /api/v2/routing/queues

Create queue



### Example

~~~ javascript
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Configure OAuth2 access token for authorization: PureCloud Auth
platformClient.ApiClient.instance.authentications['PureCloud Auth'].accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new platformClient.RoutingApi();

var body = {}; // Object | Queue

apiInstance.postRoutingQueues(body)
  .then(function(data) {
    console.log(`postRoutingQueues success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch(function(err) {
  	console.log('There was a failure calling postRoutingQueues');
    console.error(err);
  });

~~~

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **body** | **Object** | Queue |  |
{: class="table table-striped"}

### Return type

**Queue**

<a name="postRoutingSkills"></a>

# RoutingSkill postRoutingSkills(body)

POST /api/v2/routing/skills

Create Skill



### Example

~~~ javascript
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Configure OAuth2 access token for authorization: PureCloud Auth
platformClient.ApiClient.instance.authentications['PureCloud Auth'].accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new platformClient.RoutingApi();

var body = {}; // Object | Skill

apiInstance.postRoutingSkills(body)
  .then(function(data) {
    console.log(`postRoutingSkills success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch(function(err) {
  	console.log('There was a failure calling postRoutingSkills');
    console.error(err);
  });

~~~

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **body** | **Object** | Skill |  |
{: class="table table-striped"}

### Return type

**RoutingSkill**

<a name="postRoutingSmsAddresses"></a>

# SmsPhoneNumber postRoutingSmsAddresses(body)

POST /api/v2/routing/sms/addresses

Provision an Address for SMS



### Example

~~~ javascript
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Configure OAuth2 access token for authorization: PureCloud Auth
platformClient.ApiClient.instance.authentications['PureCloud Auth'].accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new platformClient.RoutingApi();

var body = {}; // Object | SmsAddress

apiInstance.postRoutingSmsAddresses(body)
  .then(function(data) {
    console.log(`postRoutingSmsAddresses success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch(function(err) {
  	console.log('There was a failure calling postRoutingSmsAddresses');
    console.error(err);
  });

~~~

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **body** | **Object** | SmsAddress |  |
{: class="table table-striped"}

### Return type

**SmsPhoneNumber**

<a name="postRoutingSmsPhonenumbers"></a>

# SmsPhoneNumber postRoutingSmsPhonenumbers(body)

POST /api/v2/routing/sms/phonenumbers

Provision a phone number for SMS



### Example

~~~ javascript
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Configure OAuth2 access token for authorization: PureCloud Auth
platformClient.ApiClient.instance.authentications['PureCloud Auth'].accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new platformClient.RoutingApi();

var body = {}; // Object | SmsPhoneNumber

apiInstance.postRoutingSmsPhonenumbers(body)
  .then(function(data) {
    console.log(`postRoutingSmsPhonenumbers success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch(function(err) {
  	console.log('There was a failure calling postRoutingSmsPhonenumbers');
    console.error(err);
  });

~~~

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **body** | **Object** | SmsPhoneNumber |  |
{: class="table table-striped"}

### Return type

**SmsPhoneNumber**

<a name="postRoutingWrapupcodes"></a>

# WrapupCode postRoutingWrapupcodes(body)

POST /api/v2/routing/wrapupcodes

Create a wrap-up code



### Example

~~~ javascript
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Configure OAuth2 access token for authorization: PureCloud Auth
platformClient.ApiClient.instance.authentications['PureCloud Auth'].accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new platformClient.RoutingApi();

var body = {}; // Object | WrapupCode

apiInstance.postRoutingWrapupcodes(body)
  .then(function(data) {
    console.log(`postRoutingWrapupcodes success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch(function(err) {
  	console.log('There was a failure calling postRoutingWrapupcodes');
    console.error(err);
  });

~~~

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **body** | **Object** | WrapupCode |  |
{: class="table table-striped"}

### Return type

**WrapupCode**

<a name="postUserRoutinglanguages"></a>

# UserRoutingLanguage postUserRoutinglanguages(userId, body)

POST /api/v2/users/{userId}/routinglanguages

Add routing language to user



### Example

~~~ javascript
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Configure OAuth2 access token for authorization: PureCloud Auth
platformClient.ApiClient.instance.authentications['PureCloud Auth'].accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new platformClient.RoutingApi();

var userId = "userId_example"; // String | User ID

var body = {}; // Object | Language

apiInstance.postUserRoutinglanguages(userId, body)
  .then(function(data) {
    console.log(`postUserRoutinglanguages success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch(function(err) {
  	console.log('There was a failure calling postUserRoutinglanguages');
    console.error(err);
  });

~~~

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **userId** | **String** | User ID |  |
 **body** | **Object** | Language |  |
{: class="table table-striped"}

### Return type

**UserRoutingLanguage**

<a name="postUserRoutingskills"></a>

# UserRoutingSkill postUserRoutingskills(userId, body)

POST /api/v2/users/{userId}/routingskills

Add routing skill to user



### Example

~~~ javascript
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Configure OAuth2 access token for authorization: PureCloud Auth
platformClient.ApiClient.instance.authentications['PureCloud Auth'].accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new platformClient.RoutingApi();

var userId = "userId_example"; // String | User ID

var body = {}; // Object | Skill

apiInstance.postUserRoutingskills(userId, body)
  .then(function(data) {
    console.log(`postUserRoutingskills success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch(function(err) {
  	console.log('There was a failure calling postUserRoutingskills');
    console.error(err);
  });

~~~

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **userId** | **String** | User ID |  |
 **body** | **Object** | Skill |  |
{: class="table table-striped"}

### Return type

**UserRoutingSkill**

<a name="putRoutingEmailDomainRoute"></a>

# InboundRoute putRoutingEmailDomainRoute(domainName, routeId, body)

PUT /api/v2/routing/email/domains/{domainName}/routes/{routeId}

Update a route



### Example

~~~ javascript
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Configure OAuth2 access token for authorization: PureCloud Auth
platformClient.ApiClient.instance.authentications['PureCloud Auth'].accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new platformClient.RoutingApi();

var domainName = "domainName_example"; // String | email domain

var routeId = "routeId_example"; // String | route ID

var body = {}; // Object | Route

apiInstance.putRoutingEmailDomainRoute(domainName, routeId, body)
  .then(function(data) {
    console.log(`putRoutingEmailDomainRoute success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch(function(err) {
  	console.log('There was a failure calling putRoutingEmailDomainRoute');
    console.error(err);
  });

~~~

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **domainName** | **String** | email domain |  |
 **routeId** | **String** | route ID |  |
 **body** | **Object** | Route |  |
{: class="table table-striped"}

### Return type

**InboundRoute**

<a name="putRoutingMessageRecipient"></a>

# Recipient putRoutingMessageRecipient(recipientId, body)

PUT /api/v2/routing/message/recipients/{recipientId}

Update a recipient



### Example

~~~ javascript
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Configure OAuth2 access token for authorization: PureCloud Auth
platformClient.ApiClient.instance.authentications['PureCloud Auth'].accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new platformClient.RoutingApi();

var recipientId = "recipientId_example"; // String | Recipient ID

var body = {}; // Object | Recipient

apiInstance.putRoutingMessageRecipient(recipientId, body)
  .then(function(data) {
    console.log(`putRoutingMessageRecipient success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch(function(err) {
  	console.log('There was a failure calling putRoutingMessageRecipient');
    console.error(err);
  });

~~~

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **recipientId** | **String** | Recipient ID |  |
 **body** | **Object** | Recipient |  |
{: class="table table-striped"}

### Return type

**Recipient**

<a name="putRoutingQueue"></a>

# Queue putRoutingQueue(queueId, body)

PUT /api/v2/routing/queues/{queueId}

Update a queue



### Example

~~~ javascript
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Configure OAuth2 access token for authorization: PureCloud Auth
platformClient.ApiClient.instance.authentications['PureCloud Auth'].accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new platformClient.RoutingApi();

var queueId = "queueId_example"; // String | Queue ID

var body = {}; // Object | Queue

apiInstance.putRoutingQueue(queueId, body)
  .then(function(data) {
    console.log(`putRoutingQueue success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch(function(err) {
  	console.log('There was a failure calling putRoutingQueue');
    console.error(err);
  });

~~~

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **queueId** | **String** | Queue ID |  |
 **body** | **Object** | Queue |  |
{: class="table table-striped"}

### Return type

**Queue**

<a name="putRoutingSmsPhonenumber"></a>

# SmsPhoneNumber putRoutingSmsPhonenumber(addressId, body)

PUT /api/v2/routing/sms/phonenumbers/{addressId}

Update a phone number provisioned for SMS.



### Example

~~~ javascript
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Configure OAuth2 access token for authorization: PureCloud Auth
platformClient.ApiClient.instance.authentications['PureCloud Auth'].accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new platformClient.RoutingApi();

var addressId = "addressId_example"; // String | Address ID

var body = {}; // Object | SmsPhoneNumber

apiInstance.putRoutingSmsPhonenumber(addressId, body)
  .then(function(data) {
    console.log(`putRoutingSmsPhonenumber success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch(function(err) {
  	console.log('There was a failure calling putRoutingSmsPhonenumber');
    console.error(err);
  });

~~~

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **addressId** | **String** | Address ID |  |
 **body** | **Object** | SmsPhoneNumber |  |
{: class="table table-striped"}

### Return type

**SmsPhoneNumber**

<a name="putRoutingUtilization"></a>

# Utilization putRoutingUtilization(body)

PUT /api/v2/routing/utilization

Update the utilization settings.



### Example

~~~ javascript
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Configure OAuth2 access token for authorization: PureCloud Auth
platformClient.ApiClient.instance.authentications['PureCloud Auth'].accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new platformClient.RoutingApi();

var body = {}; // Object | utilization

apiInstance.putRoutingUtilization(body)
  .then(function(data) {
    console.log(`putRoutingUtilization success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch(function(err) {
  	console.log('There was a failure calling putRoutingUtilization');
    console.error(err);
  });

~~~

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **body** | **Object** | utilization |  |
{: class="table table-striped"}

### Return type

**Utilization**

<a name="putRoutingWrapupcode"></a>

# WrapupCode putRoutingWrapupcode(codeId, body)

PUT /api/v2/routing/wrapupcodes/{codeId}

Update wrap-up code



### Example

~~~ javascript
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Configure OAuth2 access token for authorization: PureCloud Auth
platformClient.ApiClient.instance.authentications['PureCloud Auth'].accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new platformClient.RoutingApi();

var codeId = "codeId_example"; // String | Wrapup Code ID

var body = {}; // Object | WrapupCode

apiInstance.putRoutingWrapupcode(codeId, body)
  .then(function(data) {
    console.log(`putRoutingWrapupcode success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch(function(err) {
  	console.log('There was a failure calling putRoutingWrapupcode');
    console.error(err);
  });

~~~

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **codeId** | **String** | Wrapup Code ID |  |
 **body** | **Object** | WrapupCode |  |
{: class="table table-striped"}

### Return type

**WrapupCode**

<a name="putUserRoutingskill"></a>

# UserRoutingSkill putUserRoutingskill(userId, skillId, body)

PUT /api/v2/users/{userId}/routingskills/{skillId}

Update routing skill proficiency or state.



### Example

~~~ javascript
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Configure OAuth2 access token for authorization: PureCloud Auth
platformClient.ApiClient.instance.authentications['PureCloud Auth'].accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new platformClient.RoutingApi();

var userId = "userId_example"; // String | User ID

var skillId = "skillId_example"; // String | skillId

var body = {}; // Object | Skill

apiInstance.putUserRoutingskill(userId, skillId, body)
  .then(function(data) {
    console.log(`putUserRoutingskill success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch(function(err) {
  	console.log('There was a failure calling putUserRoutingskill');
    console.error(err);
  });

~~~

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **userId** | **String** | User ID |  |
 **skillId** | **String** | skillId |  |
 **body** | **Object** | Skill |  |
{: class="table table-striped"}

### Return type

**UserRoutingSkill**

