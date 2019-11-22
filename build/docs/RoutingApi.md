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
[**getRoutingQueuesDivisionviews**](RoutingApi.html#getRoutingQueuesDivisionviews) | **GET** /api/v2/routing/queues/divisionviews | Get a paged listing of simplified queue objects, filterable by name, queue ID(s), or division ID(s).
[**getRoutingQueuesDivisionviewsAll**](RoutingApi.html#getRoutingQueuesDivisionviewsAll) | **GET** /api/v2/routing/queues/divisionviews/all | Get a paged listing of simplified queue objects.  Can be used to get a digest of all queues in an organization.
[**getRoutingQueuesMe**](RoutingApi.html#getRoutingQueuesMe) | **GET** /api/v2/routing/queues/me | Get a paged listing of queues the user is a member of.
[**getRoutingSkill**](RoutingApi.html#getRoutingSkill) | **GET** /api/v2/routing/skills/{skillId} | Get Routing Skill
[**getRoutingSkills**](RoutingApi.html#getRoutingSkills) | **GET** /api/v2/routing/skills | Get the list of routing skills.
[**getRoutingSmsAddress**](RoutingApi.html#getRoutingSmsAddress) | **GET** /api/v2/routing/sms/addresses/{addressId} | Get an Address by Id for SMS
[**getRoutingSmsAddresses**](RoutingApi.html#getRoutingSmsAddresses) | **GET** /api/v2/routing/sms/addresses | Get a list of Addresses for SMS
[**getRoutingSmsAvailablephonenumbers**](RoutingApi.html#getRoutingSmsAvailablephonenumbers) | **GET** /api/v2/routing/sms/availablephonenumbers | Get a list of available phone numbers for SMS provisioning.
[**getRoutingSmsPhonenumber**](RoutingApi.html#getRoutingSmsPhonenumber) | **GET** /api/v2/routing/sms/phonenumbers/{addressId} | Get a phone number provisioned for SMS.
[**getRoutingSmsPhonenumbers**](RoutingApi.html#getRoutingSmsPhonenumbers) | **GET** /api/v2/routing/sms/phonenumbers | Get a list of provisioned phone numbers.
[**getRoutingUtilization**](RoutingApi.html#getRoutingUtilization) | **GET** /api/v2/routing/utilization | Get the utilization settings.
[**getRoutingWrapupcode**](RoutingApi.html#getRoutingWrapupcode) | **GET** /api/v2/routing/wrapupcodes/{codeId} | Get details about this wrap-up code.
[**getRoutingWrapupcodes**](RoutingApi.html#getRoutingWrapupcodes) | **GET** /api/v2/routing/wrapupcodes | Get list of wrapup codes.
[**getUserRoutinglanguages**](RoutingApi.html#getUserRoutinglanguages) | **GET** /api/v2/users/{userId}/routinglanguages | List routing language for user
[**getUserRoutingskills**](RoutingApi.html#getUserRoutingskills) | **GET** /api/v2/users/{userId}/routingskills | List routing skills for user
[**patchRoutingQueueUser**](RoutingApi.html#patchRoutingQueueUser) | **PATCH** /api/v2/routing/queues/{queueId}/users/{memberId} | Update the ring number OR joined status for a User in a Queue
[**patchRoutingQueueUsers**](RoutingApi.html#patchRoutingQueueUsers) | **PATCH** /api/v2/routing/queues/{queueId}/users | Join or unjoin a set of users for a queue
[**patchUserRoutinglanguage**](RoutingApi.html#patchUserRoutinglanguage) | **PATCH** /api/v2/users/{userId}/routinglanguages/{languageId} | Update routing language proficiency or state.
[**patchUserRoutinglanguagesBulk**](RoutingApi.html#patchUserRoutinglanguagesBulk) | **PATCH** /api/v2/users/{userId}/routinglanguages/bulk | Add bulk routing language to user. Max limit 50 languages
[**patchUserRoutingskillsBulk**](RoutingApi.html#patchUserRoutingskillsBulk) | **PATCH** /api/v2/users/{userId}/routingskills/bulk | Bulk add routing skills to user
[**postAnalyticsQueuesObservationsQuery**](RoutingApi.html#postAnalyticsQueuesObservationsQuery) | **POST** /api/v2/analytics/queues/observations/query | Query for queue observations
[**postRoutingEmailDomainRoutes**](RoutingApi.html#postRoutingEmailDomainRoutes) | **POST** /api/v2/routing/email/domains/{domainName}/routes | Create a route
[**postRoutingEmailDomains**](RoutingApi.html#postRoutingEmailDomains) | **POST** /api/v2/routing/email/domains | Create a domain
[**postRoutingLanguages**](RoutingApi.html#postRoutingLanguages) | **POST** /api/v2/routing/languages | Create Language
[**postRoutingQueueUsers**](RoutingApi.html#postRoutingQueueUsers) | **POST** /api/v2/routing/queues/{queueId}/users | Bulk add or delete up to 100 queue members
[**postRoutingQueueWrapupcodes**](RoutingApi.html#postRoutingQueueWrapupcodes) | **POST** /api/v2/routing/queues/{queueId}/wrapupcodes | Add up to 100 wrap-up codes to a queue
[**postRoutingQueues**](RoutingApi.html#postRoutingQueues) | **POST** /api/v2/routing/queues | Create a queue
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
[**putUserRoutingskillsBulk**](RoutingApi.html#putUserRoutingskillsBulk) | **PUT** /api/v2/users/{userId}/routingskills/bulk | Replace all routing skills assigned to a user
{: class="table table-striped"}

<a name="deleteRoutingEmailDomain"></a>

# void deleteRoutingEmailDomain(domainId)



DELETE /api/v2/routing/email/domains/{domainId}

Delete a domain



Requires ANY permissions: 

* routing:email:manage



### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.RoutingApi();

let domainId = "domainId_example"; // String | domain ID

apiInstance.deleteRoutingEmailDomain(domainId)
  .then(() => {
    console.log('deleteRoutingEmailDomain returned successfully.');
  })
  .catch((err) => {
    console.log('There was a failure calling deleteRoutingEmailDomain');
    console.error(err);
  });
```

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



Requires ANY permissions: 

* routing:email:manage



### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.RoutingApi();

let domainName = "domainName_example"; // String | email domain
let routeId = "routeId_example"; // String | route ID

apiInstance.deleteRoutingEmailDomainRoute(domainName, routeId)
  .then(() => {
    console.log('deleteRoutingEmailDomainRoute returned successfully.');
  })
  .catch((err) => {
    console.log('There was a failure calling deleteRoutingEmailDomainRoute');
    console.error(err);
  });
```

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



Requires ANY permissions: 

* routing:queue:delete



### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.RoutingApi();

let queueId = "queueId_example"; // String | Queue ID
let opts = { 
  'forceDelete': true // Boolean | forceDelete
};

apiInstance.deleteRoutingQueue(queueId, opts)
  .then(() => {
    console.log('deleteRoutingQueue returned successfully.');
  })
  .catch((err) => {
    console.log('There was a failure calling deleteRoutingQueue');
    console.error(err);
  });
```

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



Requires ANY permissions: 

* routing:queue:edit



### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.RoutingApi();

let queueId = "queueId_example"; // String | Queue ID
let memberId = "memberId_example"; // String | Member ID

apiInstance.deleteRoutingQueueUser(queueId, memberId)
  .then(() => {
    console.log('deleteRoutingQueueUser returned successfully.');
  })
  .catch((err) => {
    console.log('There was a failure calling deleteRoutingQueueUser');
    console.error(err);
  });
```

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



Requires ANY permissions: 

* routing:queue:edit



### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.RoutingApi();

let queueId = "queueId_example"; // String | Queue ID
let codeId = "codeId_example"; // String | Code ID

apiInstance.deleteRoutingQueueWrapupcode(queueId, codeId)
  .then(() => {
    console.log('deleteRoutingQueueWrapupcode returned successfully.');
  })
  .catch((err) => {
    console.log('There was a failure calling deleteRoutingQueueWrapupcode');
    console.error(err);
  });
```

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



Requires ANY permissions: 

* routing:skill:manage



### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.RoutingApi();

let skillId = "skillId_example"; // String | Skill ID

apiInstance.deleteRoutingSkill(skillId)
  .then(() => {
    console.log('deleteRoutingSkill returned successfully.');
  })
  .catch((err) => {
    console.log('There was a failure calling deleteRoutingSkill');
    console.error(err);
  });
```

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



Requires ANY permissions: 

* sms:phoneNumber:delete



### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.RoutingApi();

let addressId = "addressId_example"; // String | Address ID

apiInstance.deleteRoutingSmsPhonenumber(addressId)
  .then(() => {
    console.log('deleteRoutingSmsPhonenumber returned successfully.');
  })
  .catch((err) => {
    console.log('There was a failure calling deleteRoutingSmsPhonenumber');
    console.error(err);
  });
```

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



Requires ANY permissions: 

* routing:utilization:manage



### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.RoutingApi();

apiInstance.deleteRoutingUtilization()
  .then(() => {
    console.log('deleteRoutingUtilization returned successfully.');
  })
  .catch((err) => {
    console.log('There was a failure calling deleteRoutingUtilization');
    console.error(err);
  });
```

### Parameters

This endpoint does not need any parameter.
{: class="table table-striped"}

### Return type

void (no response body)

<a name="deleteRoutingWrapupcode"></a>

# void deleteRoutingWrapupcode(codeId)



DELETE /api/v2/routing/wrapupcodes/{codeId}

Delete wrap-up code



Requires ANY permissions: 

* routing:wrapupCode:delete



### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.RoutingApi();

let codeId = "codeId_example"; // String | Wrapup Code ID

apiInstance.deleteRoutingWrapupcode(codeId)
  .then(() => {
    console.log('deleteRoutingWrapupcode returned successfully.');
  })
  .catch((err) => {
    console.log('There was a failure calling deleteRoutingWrapupcode');
    console.error(err);
  });
```

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



Requires ANY permissions: 

* routing:skill:assign
* routing:language:assign



### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.RoutingApi();

let userId = "userId_example"; // String | User ID
let languageId = "languageId_example"; // String | languageId

apiInstance.deleteUserRoutinglanguage(userId, languageId)
  .then(() => {
    console.log('deleteUserRoutinglanguage returned successfully.');
  })
  .catch((err) => {
    console.log('There was a failure calling deleteUserRoutinglanguage');
    console.error(err);
  });
```

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



Requires ANY permissions: 

* routing:skill:assign



### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.RoutingApi();

let userId = "userId_example"; // String | User ID
let skillId = "skillId_example"; // String | skillId

apiInstance.deleteUserRoutingskill(userId, skillId)
  .then(() => {
    console.log('deleteUserRoutingskill returned successfully.');
  })
  .catch((err) => {
    console.log('There was a failure calling deleteUserRoutingskill');
    console.error(err);
  });
```

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



Requires ANY permissions: 

* routing:email:manage



### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.RoutingApi();

let domainId = "domainId_example"; // String | domain ID

apiInstance.getRoutingEmailDomain(domainId)
  .then((data) => {
    console.log(`getRoutingEmailDomain success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getRoutingEmailDomain');
    console.error(err);
  });
```

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



Requires ANY permissions: 

* routing:email:manage



### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.RoutingApi();

let domainName = "domainName_example"; // String | email domain
let routeId = "routeId_example"; // String | route ID

apiInstance.getRoutingEmailDomainRoute(domainName, routeId)
  .then((data) => {
    console.log(`getRoutingEmailDomainRoute success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getRoutingEmailDomainRoute');
    console.error(err);
  });
```

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



Requires ANY permissions: 

* routing:email:manage



### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.RoutingApi();

let domainName = "domainName_example"; // String | email domain
let opts = { 
  'pageSize': 25, // Number | Page size
  'pageNumber': 1, // Number | Page number
  'pattern': "pattern_example" // String | Filter routes by the route's pattern property
};

apiInstance.getRoutingEmailDomainRoutes(domainName, opts)
  .then((data) => {
    console.log(`getRoutingEmailDomainRoutes success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getRoutingEmailDomainRoutes');
    console.error(err);
  });
```

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



Requires ANY permissions: 

* routing:email:manage



### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.RoutingApi();

apiInstance.getRoutingEmailDomains()
  .then((data) => {
    console.log(`getRoutingEmailDomains success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getRoutingEmailDomains');
    console.error(err);
  });
```

### Parameters

This endpoint does not need any parameter.
{: class="table table-striped"}

### Return type

**InboundDomainEntityListing**

<a name="getRoutingEmailSetup"></a>

# EmailSetup getRoutingEmailSetup()



GET /api/v2/routing/email/setup

Get email setup



Requires ANY permissions: 

* routing:email:manage



### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.RoutingApi();

apiInstance.getRoutingEmailSetup()
  .then((data) => {
    console.log(`getRoutingEmailSetup success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getRoutingEmailSetup');
    console.error(err);
  });
```

### Parameters

This endpoint does not need any parameter.
{: class="table table-striped"}

### Return type

**EmailSetup**

<a name="getRoutingLanguages"></a>

# LanguageEntityListing getRoutingLanguages(opts)



GET /api/v2/routing/languages

Get the list of supported languages.



Requires NO permissions: 




### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.RoutingApi();

let opts = { 
  'pageSize': 25, // Number | Page size
  'pageNumber': 1, // Number | Page number
  'sortOrder': "ASC", // String | Ascending or descending sort order
  'name': "name_example", // String | Name
  'id': ["id_example"] // [String] | id
};

apiInstance.getRoutingLanguages(opts)
  .then((data) => {
    console.log(`getRoutingLanguages success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getRoutingLanguages');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **pageSize** | **Number** | Page size | [optional] [default to 25] |
 **pageNumber** | **Number** | Page number | [optional] [default to 1] |
 **sortOrder** | **String** | Ascending or descending sort order | [optional] [default to ASC]<br />**Values**: ascending, descending |
 **name** | **String** | Name | [optional]  |
 **id** | **[String]** | id | [optional]  |
{: class="table table-striped"}

### Return type

**LanguageEntityListing**

<a name="getRoutingMessageRecipient"></a>

# Recipient getRoutingMessageRecipient(recipientId)



GET /api/v2/routing/message/recipients/{recipientId}

Get a recipient



Requires ANY permissions: 

* routing:message:manage



### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.RoutingApi();

let recipientId = "recipientId_example"; // String | Recipient ID

apiInstance.getRoutingMessageRecipient(recipientId)
  .then((data) => {
    console.log(`getRoutingMessageRecipient success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getRoutingMessageRecipient');
    console.error(err);
  });
```

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



Requires ANY permissions: 

* routing:message:manage



### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.RoutingApi();

let opts = { 
  'messengerType': "messengerType_example", // String | Messenger Type
  'pageSize': 25, // Number | Page size
  'pageNumber': 1 // Number | Page number
};

apiInstance.getRoutingMessageRecipients(opts)
  .then((data) => {
    console.log(`getRoutingMessageRecipients success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getRoutingMessageRecipients');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **messengerType** | **String** | Messenger Type | [optional] <br />**Values**: sms, facebook, twitter, line, whatsapp |
 **pageSize** | **Number** | Page size | [optional] [default to 25] |
 **pageNumber** | **Number** | Page number | [optional] [default to 1] |
{: class="table table-striped"}

### Return type

**RecipientListing**

<a name="getRoutingQueue"></a>

# Queue getRoutingQueue(queueId)



GET /api/v2/routing/queues/{queueId}

Get details about this queue.



Requires ANY permissions: 

* routing:queue:view



### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.RoutingApi();

let queueId = "queueId_example"; // String | Queue ID

apiInstance.getRoutingQueue(queueId)
  .then((data) => {
    console.log(`getRoutingQueue success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getRoutingQueue');
    console.error(err);
  });
```

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



Requires ANY permissions: 

* routing:queue:view



### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.RoutingApi();

let queueId = "queueId_example"; // String | queueId
let opts = { 
  'conversationId': "conversationId_example" // String | conversationId
};

apiInstance.getRoutingQueueEstimatedwaittime(queueId, opts)
  .then((data) => {
    console.log(`getRoutingQueueEstimatedwaittime success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getRoutingQueueEstimatedwaittime');
    console.error(err);
  });
```

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



Requires ANY permissions: 

* routing:queue:view



### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.RoutingApi();

let queueId = "queueId_example"; // String | queueId
let mediaType = "mediaType_example"; // String | mediaType

apiInstance.getRoutingQueueMediatypeEstimatedwaittime(queueId, mediaType)
  .then((data) => {
    console.log(`getRoutingQueueMediatypeEstimatedwaittime success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getRoutingQueueMediatypeEstimatedwaittime');
    console.error(err);
  });
```

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



Requires ANY permissions: 

* routing:queue:view



### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.RoutingApi();

let queueId = "queueId_example"; // String | Queue ID
let opts = { 
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
  .then((data) => {
    console.log(`getRoutingQueueUsers success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getRoutingQueueUsers');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **queueId** | **String** | Queue ID |  |
 **pageSize** | **Number** | Page size | [optional] [default to 25] |
 **pageNumber** | **Number** | Page number | [optional] [default to 1] |
 **sortBy** | **String** | Sort by | [optional] [default to name] |
 **expand** | **[String]** | Which fields, if any, to expand. | [optional] <br />**Values**: routingStatus, presence, conversationSummary, outOfOffice, geolocation, station, authorization, authorization.unusedRoles, profileSkills, certifications, locations, groups, skills, languages, languagePreference, employerInfo, biography |
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

# WrapupCodeEntityListing getRoutingQueueWrapupcodes(queueId, opts)



GET /api/v2/routing/queues/{queueId}/wrapupcodes

Get the wrap-up codes for a queue



Requires ANY permissions: 

* routing:queue:view



### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.RoutingApi();

let queueId = "queueId_example"; // String | Queue ID
let opts = { 
  'pageSize': 25, // Number | Page size
  'pageNumber': 1 // Number | Page number
};

apiInstance.getRoutingQueueWrapupcodes(queueId, opts)
  .then((data) => {
    console.log(`getRoutingQueueWrapupcodes success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getRoutingQueueWrapupcodes');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **queueId** | **String** | Queue ID |  |
 **pageSize** | **Number** | Page size | [optional] [default to 25] |
 **pageNumber** | **Number** | Page number | [optional] [default to 1] |
{: class="table table-striped"}

### Return type

**WrapupCodeEntityListing**

<a name="getRoutingQueues"></a>

# QueueEntityListing getRoutingQueues(opts)



GET /api/v2/routing/queues

Get list of queues.



Requires ANY permissions: 

* routing:queue:view



### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.RoutingApi();

let opts = { 
  'pageSize': 25, // Number | Page size
  'pageNumber': 1, // Number | Page number
  'sortBy': "name", // String | Sort by
  'name': "name_example", // String | Name
  'id': ["id_example"], // [String] | ID(s)
  'divisionId': ["divisionId_example"] // [String] | Division ID(s)
};

apiInstance.getRoutingQueues(opts)
  .then((data) => {
    console.log(`getRoutingQueues success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getRoutingQueues');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **pageSize** | **Number** | Page size | [optional] [default to 25] |
 **pageNumber** | **Number** | Page number | [optional] [default to 1] |
 **sortBy** | **String** | Sort by | [optional] [default to name] |
 **name** | **String** | Name | [optional]  |
 **id** | **[String]** | ID(s) | [optional]  |
 **divisionId** | **[String]** | Division ID(s) | [optional]  |
{: class="table table-striped"}

### Return type

**QueueEntityListing**

<a name="getRoutingQueuesDivisionviews"></a>

# QueueEntityListing getRoutingQueuesDivisionviews(opts)



GET /api/v2/routing/queues/divisionviews

Get a paged listing of simplified queue objects, filterable by name, queue ID(s), or division ID(s).



Requires ANY permissions: 

* routing:queue:search



### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.RoutingApi();

let opts = { 
  'pageSize': 25, // Number | Page size [max value is 100]
  'pageNumber': 1, // Number | Page number [max value is 5]
  'sortBy': "name", // String | Sort by
  'sortOrder': "asc", // String | Sort order
  'name': "name_example", // String | Name
  'id': ["id_example"], // [String] | Queue ID(s)
  'divisionId': ["divisionId_example"] // [String] | Division ID(s)
};

apiInstance.getRoutingQueuesDivisionviews(opts)
  .then((data) => {
    console.log(`getRoutingQueuesDivisionviews success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getRoutingQueuesDivisionviews');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **pageSize** | **Number** | Page size [max value is 100] | [optional] [default to 25] |
 **pageNumber** | **Number** | Page number [max value is 5] | [optional] [default to 1] |
 **sortBy** | **String** | Sort by | [optional] [default to name]<br />**Values**: name, id, divisionId |
 **sortOrder** | **String** | Sort order | [optional] [default to asc]<br />**Values**: asc, desc, score |
 **name** | **String** | Name | [optional]  |
 **id** | **[String]** | Queue ID(s) | [optional]  |
 **divisionId** | **[String]** | Division ID(s) | [optional]  |
{: class="table table-striped"}

### Return type

**QueueEntityListing**

<a name="getRoutingQueuesDivisionviewsAll"></a>

# QueueEntityListing getRoutingQueuesDivisionviewsAll(opts)



GET /api/v2/routing/queues/divisionviews/all

Get a paged listing of simplified queue objects.  Can be used to get a digest of all queues in an organization.



Requires ANY permissions: 

* routing:queue:search



### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.RoutingApi();

let opts = { 
  'pageSize': 25, // Number | Page size [max value is 500]
  'pageNumber': 1, // Number | Page number
  'sortBy': "name", // String | Sort by
  'sortOrder': "asc" // String | Sort order
};

apiInstance.getRoutingQueuesDivisionviewsAll(opts)
  .then((data) => {
    console.log(`getRoutingQueuesDivisionviewsAll success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getRoutingQueuesDivisionviewsAll');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **pageSize** | **Number** | Page size [max value is 500] | [optional] [default to 25] |
 **pageNumber** | **Number** | Page number | [optional] [default to 1] |
 **sortBy** | **String** | Sort by | [optional] [default to name]<br />**Values**: name, id, divisionId |
 **sortOrder** | **String** | Sort order | [optional] [default to asc]<br />**Values**: asc, desc, score |
{: class="table table-striped"}

### Return type

**QueueEntityListing**

<a name="getRoutingQueuesMe"></a>

# UserQueueEntityListing getRoutingQueuesMe(opts)



GET /api/v2/routing/queues/me

Get a paged listing of queues the user is a member of.



Requires NO permissions: 




### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.RoutingApi();

let opts = { 
  'joined': true, // Boolean | Joined
  'pageSize': 25, // Number | Page size
  'pageNumber': 1, // Number | Page number
  'sortBy': "name", // String | Sort by
  'sortOrder': "asc" // String | Sort order
};

apiInstance.getRoutingQueuesMe(opts)
  .then((data) => {
    console.log(`getRoutingQueuesMe success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getRoutingQueuesMe');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **joined** | **Boolean** | Joined | [optional]  |
 **pageSize** | **Number** | Page size | [optional] [default to 25] |
 **pageNumber** | **Number** | Page number | [optional] [default to 1] |
 **sortBy** | **String** | Sort by | [optional] [default to name] |
 **sortOrder** | **String** | Sort order | [optional] [default to asc] |
{: class="table table-striped"}

### Return type

**UserQueueEntityListing**

<a name="getRoutingSkill"></a>

# RoutingSkill getRoutingSkill(skillId)



GET /api/v2/routing/skills/{skillId}

Get Routing Skill



Requires NO permissions: 




### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.RoutingApi();

let skillId = "skillId_example"; // String | Skill ID

apiInstance.getRoutingSkill(skillId)
  .then((data) => {
    console.log(`getRoutingSkill success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getRoutingSkill');
    console.error(err);
  });
```

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



Requires NO permissions: 




### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.RoutingApi();

let opts = { 
  'pageSize': 25, // Number | Page size
  'pageNumber': 1, // Number | Page number
  'name': "name_example", // String | Filter for results that start with this value
  'id': ["id_example"] // [String] | id
};

apiInstance.getRoutingSkills(opts)
  .then((data) => {
    console.log(`getRoutingSkills success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getRoutingSkills');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **pageSize** | **Number** | Page size | [optional] [default to 25] |
 **pageNumber** | **Number** | Page number | [optional] [default to 1] |
 **name** | **String** | Filter for results that start with this value | [optional]  |
 **id** | **[String]** | id | [optional]  |
{: class="table table-striped"}

### Return type

**SkillEntityListing**

<a name="getRoutingSmsAddress"></a>

# SmsAddress getRoutingSmsAddress(addressId)



GET /api/v2/routing/sms/addresses/{addressId}

Get an Address by Id for SMS



Requires ANY permissions: 

* sms:phoneNumber:view



### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.RoutingApi();

let addressId = "addressId_example"; // String | Address ID

apiInstance.getRoutingSmsAddress(addressId)
  .then((data) => {
    console.log(`getRoutingSmsAddress success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getRoutingSmsAddress');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **addressId** | **String** | Address ID |  |
{: class="table table-striped"}

### Return type

**SmsAddress**

<a name="getRoutingSmsAddresses"></a>

# SmsAddressEntityListing getRoutingSmsAddresses(opts)



GET /api/v2/routing/sms/addresses

Get a list of Addresses for SMS



Requires ANY permissions: 

* sms:phoneNumber:view



### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.RoutingApi();

let opts = { 
  'pageSize': 25, // Number | Page size
  'pageNumber': 1 // Number | Page number
};

apiInstance.getRoutingSmsAddresses(opts)
  .then((data) => {
    console.log(`getRoutingSmsAddresses success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getRoutingSmsAddresses');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **pageSize** | **Number** | Page size | [optional] [default to 25] |
 **pageNumber** | **Number** | Page number | [optional] [default to 1] |
{: class="table table-striped"}

### Return type

**SmsAddressEntityListing**

<a name="getRoutingSmsAvailablephonenumbers"></a>

# SMSAvailablePhoneNumberEntityListing getRoutingSmsAvailablephonenumbers(countryCode, phoneNumberType, opts)



GET /api/v2/routing/sms/availablephonenumbers

Get a list of available phone numbers for SMS provisioning.

This request will return up to 30 random phone numbers matching the criteria specified.  To get additional phone numbers repeat the request.

Requires ANY permissions: 

* sms:phoneNumber:add



### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.RoutingApi();

let countryCode = "countryCode_example"; // String | The ISO 3166-1 alpha-2 country code of the county for which available phone numbers should be returned
let phoneNumberType = "phoneNumberType_example"; // String | Type of available phone numbers searched
let opts = { 
  'region': "region_example", // String | Region/province/state that can be used to restrict the numbers returned
  'city': "city_example", // String | City that can be used to restrict the numbers returned
  'areaCode': "areaCode_example", // String | Area code that can be used to restrict the numbers returned
  'pattern': "pattern_example", // String | A pattern to match phone numbers. Valid characters are '*' and [0-9a-zA-Z]. The '*' character will match any single digit.
  'addressRequirement': "addressRequirement_example" // String | This indicates whether the phone number requires to have an Address registered.
};

apiInstance.getRoutingSmsAvailablephonenumbers(countryCode, phoneNumberType, opts)
  .then((data) => {
    console.log(`getRoutingSmsAvailablephonenumbers success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getRoutingSmsAvailablephonenumbers');
    console.error(err);
  });
```

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



Requires ANY permissions: 

* sms:phoneNumber:view



### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.RoutingApi();

let addressId = "addressId_example"; // String | Address ID

apiInstance.getRoutingSmsPhonenumber(addressId)
  .then((data) => {
    console.log(`getRoutingSmsPhonenumber success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getRoutingSmsPhonenumber');
    console.error(err);
  });
```

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



Requires ANY permissions: 

* sms:phoneNumber:view



### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.RoutingApi();

let opts = { 
  'phoneNumber': "phoneNumber_example", // String | Filter on phone number address. Allowable characters are the digits '0-9' and the wild card character '\\*'. If just digits are present, a contains search is done on the address pattern. For example, '317' could be matched anywhere in the address. An '\\*' will match multiple digits. For example, to match a specific area code within the US a pattern like '1317*' could be used.
  'phoneNumberType': "phoneNumberType_example", // String | Filter on phone number type
  'phoneNumberStatus': "phoneNumberStatus_example", // String | Filter on phone number status
  'pageSize': 25, // Number | Page size
  'pageNumber': 1 // Number | Page number
};

apiInstance.getRoutingSmsPhonenumbers(opts)
  .then((data) => {
    console.log(`getRoutingSmsPhonenumbers success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getRoutingSmsPhonenumbers');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **phoneNumber** | **String** | Filter on phone number address. Allowable characters are the digits &#39;0-9&#39; and the wild card character &#39;\\*&#39;. If just digits are present, a contains search is done on the address pattern. For example, &#39;317&#39; could be matched anywhere in the address. An &#39;\\*&#39; will match multiple digits. For example, to match a specific area code within the US a pattern like &#39;1317*&#39; could be used. | [optional]  |
 **phoneNumberType** | **String** | Filter on phone number type | [optional] <br />**Values**: local, mobile, tollfree, shortcode |
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



Requires ANY permissions: 

* routing:utilization:manage
* routing:utilization:view



### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.RoutingApi();

apiInstance.getRoutingUtilization()
  .then((data) => {
    console.log(`getRoutingUtilization success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getRoutingUtilization');
    console.error(err);
  });
```

### Parameters

This endpoint does not need any parameter.
{: class="table table-striped"}

### Return type

**Utilization**

<a name="getRoutingWrapupcode"></a>

# WrapupCode getRoutingWrapupcode(codeId)



GET /api/v2/routing/wrapupcodes/{codeId}

Get details about this wrap-up code.



Requires ANY permissions: 

* routing:wrapupCode:view



### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.RoutingApi();

let codeId = "codeId_example"; // String | Wrapup Code ID

apiInstance.getRoutingWrapupcode(codeId)
  .then((data) => {
    console.log(`getRoutingWrapupcode success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getRoutingWrapupcode');
    console.error(err);
  });
```

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



Requires ANY permissions: 

* routing:wrapupCode:view



### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.RoutingApi();

let opts = { 
  'pageSize': 25, // Number | Page size
  'pageNumber': 1, // Number | Page number
  'sortBy': "name", // String | Sort by
  'name': "name_example" // String | Name
};

apiInstance.getRoutingWrapupcodes(opts)
  .then((data) => {
    console.log(`getRoutingWrapupcodes success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getRoutingWrapupcodes');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **pageSize** | **Number** | Page size | [optional] [default to 25] |
 **pageNumber** | **Number** | Page number | [optional] [default to 1] |
 **sortBy** | **String** | Sort by | [optional] [default to name]<br />**Values**: name, id |
 **name** | **String** | Name | [optional]  |
{: class="table table-striped"}

### Return type

**WrapupCodeEntityListing**

<a name="getUserRoutinglanguages"></a>

# UserLanguageEntityListing getUserRoutinglanguages(userId, opts)



GET /api/v2/users/{userId}/routinglanguages

List routing language for user



Requires NO permissions: 




### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.RoutingApi();

let userId = "userId_example"; // String | User ID
let opts = { 
  'pageSize': 25, // Number | Page size
  'pageNumber': 1, // Number | Page number
  'sortOrder': "ASC" // String | Ascending or descending sort order
};

apiInstance.getUserRoutinglanguages(userId, opts)
  .then((data) => {
    console.log(`getUserRoutinglanguages success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getUserRoutinglanguages');
    console.error(err);
  });
```

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



Requires NO permissions: 




### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.RoutingApi();

let userId = "userId_example"; // String | User ID
let opts = { 
  'pageSize': 25, // Number | Page size
  'pageNumber': 1, // Number | Page number
  'sortOrder': "ASC" // String | Ascending or descending sort order
};

apiInstance.getUserRoutingskills(userId, opts)
  .then((data) => {
    console.log(`getUserRoutingskills success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getUserRoutingskills');
    console.error(err);
  });
```

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

Update the ring number OR joined status for a User in a Queue



Requires ANY permissions: 

* routing:queue:edit


### Request Body Schema

<script type="text/javascript">
	function copyQueueMemberExample() {
		let temp = $("<textarea>");
		$("body").append(temp);
		temp.val($('#QueueMemberExample').text()).select();
		document.execCommand("copy");
		temp.remove();
		return false;
	}
</script>

QueueMember <a href="#" onclick="return copyQueueMemberExample()">Copy</a>

<div id="QueueMemberExample">

```{"language":"json", "maxHeight": "250px"}
{ 
  "id": String, 
  "name": String, 
  "user": { 
    "id": String, 
    "name": String, 
    "division": { 
      "id": String, 
      "name": String, 
      "selfUri": String, 
    },  
    "chat": { 
      "jabberId": String, 
    },  
    "department": String, 
    "email": String, 
    "primaryContactInfo": { 
      "address": String, 
      "display": String, 
      "mediaType": String, 
      "type": String, 
      "extension": String, 
    },  
    "addresses": { 
      "address": String, 
      "display": String, 
      "mediaType": String, 
      "type": String, 
      "extension": String, 
    },  
    "state": String, 
    "title": String, 
    "username": String, 
    "manager": User, 
    "images": { 
      "resolution": String, 
      "imageUri": String, 
    },  
    "version": Number, 
    "certifications": [String], 
    "biography": { 
      "biography": String, 
      "interests": [String], 
      "hobbies": [String], 
      "spouse": String, 
    },  
    "employerInfo": { 
      "officialName": String, 
      "employeeId": String, 
      "employeeType": String, 
      "dateHire": String, 
    },  
    "routingStatus": { 
      "userId": String, 
      "status": String, 
      "startTime": Date, 
    },  
    "presence": { 
      "id": String, 
      "name": String, 
      "source": String, 
      "primary": Boolean, 
      "presenceDefinition": { 
        "id": String, 
        "systemPresence": String, 
        "selfUri": String, 
      },  
      "message": String, 
      "modifiedDate": Date, 
      "selfUri": String, 
    },  
    "conversationSummary": { 
      "userId": String, 
      "call": { 
        "contactCenter": { 
          "active": Number, 
          "acw": Number, 
        },  
        "enterprise": { 
          "active": Number, 
          "acw": Number, 
        },  
      },  
      "callback": { 
        "contactCenter": { 
          "active": Number, 
          "acw": Number, 
        },  
        "enterprise": { 
          "active": Number, 
          "acw": Number, 
        },  
      },  
      "email": { 
        "contactCenter": { 
          "active": Number, 
          "acw": Number, 
        },  
        "enterprise": { 
          "active": Number, 
          "acw": Number, 
        },  
      },  
      "message": { 
        "contactCenter": { 
          "active": Number, 
          "acw": Number, 
        },  
        "enterprise": { 
          "active": Number, 
          "acw": Number, 
        },  
      },  
      "chat": { 
        "contactCenter": { 
          "active": Number, 
          "acw": Number, 
        },  
        "enterprise": { 
          "active": Number, 
          "acw": Number, 
        },  
      },  
      "socialExpression": { 
        "contactCenter": { 
          "active": Number, 
          "acw": Number, 
        },  
        "enterprise": { 
          "active": Number, 
          "acw": Number, 
        },  
      },  
      "video": { 
        "contactCenter": { 
          "active": Number, 
          "acw": Number, 
        },  
        "enterprise": { 
          "active": Number, 
          "acw": Number, 
        },  
      },  
    },  
    "outOfOffice": { 
      "id": String, 
      "name": String, 
      "user": User, 
      "startDate": Date, 
      "endDate": Date, 
      "active": Boolean, 
      "indefinite": Boolean, 
      "selfUri": String, 
    },  
    "geolocation": { 
      "id": String, 
      "name": String, 
      "type": String, 
      "primary": Boolean, 
      "latitude": Number, 
      "longitude": Number, 
      "country": String, 
      "region": String, 
      "city": String, 
      "locations": { 
        "id": String, 
        "name": String, 
        "contactUser": { 
          "id": String, 
          "selfUri": String, 
        },  
        "emergencyNumber": { 
          "e164": String, 
          "number": String, 
          "type": String, 
        },  
        "address": { 
          "city": String, 
          "country": String, 
          "countryName": String, 
          "state": String, 
          "street1": String, 
          "street2": String, 
          "zipcode": String, 
        },  
        "state": String, 
        "notes": String, 
        "version": Number, 
        "path": [String], 
        "profileImage": { 
          "resolution": String, 
          "imageUri": String, 
        },  
        "floorplanImage": { 
          "resolution": String, 
          "imageUri": String, 
        },  
        "addressVerificationDetails": { 
          "status": String, 
          "dateFinished": Date, 
          "dateStarted": Date, 
          "service": String, 
        },  
        "addressVerified": Boolean, 
        "addressStored": Boolean, 
        "images": String, 
        "selfUri": String, 
      },  
      "selfUri": String, 
    },  
    "station": { 
      "associatedStation": { 
        "id": String, 
        "name": String, 
        "type": String, 
        "associatedUser": User, 
        "associatedDate": Date, 
        "defaultUser": User, 
        "providerInfo": {String: String}, 
      },  
      "effectiveStation": { 
        "id": String, 
        "name": String, 
        "type": String, 
        "associatedUser": User, 
        "associatedDate": Date, 
        "defaultUser": User, 
        "providerInfo": {String: String}, 
      },  
      "defaultStation": { 
        "id": String, 
        "name": String, 
        "type": String, 
        "associatedUser": User, 
        "associatedDate": Date, 
        "defaultUser": User, 
        "providerInfo": {String: String}, 
      },  
      "lastAssociatedStation": { 
        "id": String, 
        "name": String, 
        "type": String, 
        "associatedUser": User, 
        "associatedDate": Date, 
        "defaultUser": User, 
        "providerInfo": {String: String}, 
      },  
    },  
    "authorization": { 
      "roles": { 
        "id": String, 
        "name": String, 
      },  
      "unusedRoles": { 
        "id": String, 
        "name": String, 
      },  
      "permissions": [String], 
      "permissionPolicies": { 
        "id": String, 
        "domain": String, 
        "entityName": String, 
        "policyName": String, 
        "policyDescription": String, 
        "actionSetKey": String, 
        "allowConditions": Boolean, 
        "resourceConditionNode": { 
          "variableName": String, 
          "conjunction": String, 
          "operator": String, 
          "operands": { 
            "type": String, 
            "value": String, 
          },  
          "terms": { 
            "variableName": String, 
            "conjunction": String, 
            "operator": String, 
            "operands": { 
              "type": String, 
              "value": String, 
            },  
            "terms": { 
              "variableName": String, 
              "conjunction": String, 
              "operator": String, 
              "operands": { 
                "type": String, 
                "value": String, 
              },  
              "terms": { 
                "variableName": String, 
                "conjunction": String, 
                "operator": String, 
                "operands": [ResourceConditionValue], 
                "terms": [ResourceConditionNode], 
              },  
            },  
          },  
        },  
        "namedResources": [String], 
        "resourceCondition": String, 
        "actionSet": [String], 
      },  
    },  
    "profileSkills": [String], 
    "locations": { 
      "id": String, 
      "floorplanId": String, 
      "coordinates": {String: Number}, 
      "notes": String, 
      "locationDefinition": { 
        "id": String, 
        "name": String, 
        "contactUser": { 
          "id": String, 
          "selfUri": String, 
        },  
        "emergencyNumber": { 
          "e164": String, 
          "number": String, 
          "type": String, 
        },  
        "address": { 
          "city": String, 
          "country": String, 
          "countryName": String, 
          "state": String, 
          "street1": String, 
          "street2": String, 
          "zipcode": String, 
        },  
        "state": String, 
        "notes": String, 
        "version": Number, 
        "path": [String], 
        "profileImage": { 
          "resolution": String, 
          "imageUri": String, 
        },  
        "floorplanImage": { 
          "resolution": String, 
          "imageUri": String, 
        },  
        "addressVerificationDetails": { 
          "status": String, 
          "dateFinished": Date, 
          "dateStarted": Date, 
          "service": String, 
        },  
        "addressVerified": Boolean, 
        "addressStored": Boolean, 
        "images": String, 
        "selfUri": String, 
      },  
    },  
    "groups": { 
      "id": String, 
      "name": String, 
      "description": String, 
      "dateModified": Date, 
      "memberCount": Number, 
      "state": String, 
      "version": Number, 
      "type": String, 
      "images": { 
        "resolution": String, 
        "imageUri": String, 
      },  
      "addresses": { 
        "address": String, 
        "extension": String, 
        "display": String, 
        "type": String, 
        "mediaType": String, 
      },  
      "rulesVisible": Boolean, 
      "visibility": String, 
      "owners": User, 
      "selfUri": String, 
    },  
    "skills": { 
      "id": String, 
      "name": String, 
      "proficiency": Number, 
      "state": String, 
      "skillUri": String, 
      "selfUri": String, 
    },  
    "languages": { 
      "id": String, 
      "name": String, 
      "proficiency": Number, 
      "state": String, 
      "languageUri": String, 
      "selfUri": String, 
    },  
    "acdAutoAnswer": Boolean, 
    "languagePreference": String, 
    "selfUri": String, 
  },  
  "ringNumber": Number, 
  "joined": Boolean, 
  "memberBy": String, 
  "routingStatus": { 
    "userId": String, 
    "status": String, 
    "startTime": Date, 
  },  
  "selfUri": String, 
}
```

</div>


### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.RoutingApi();

let queueId = "queueId_example"; // String | Queue ID
let memberId = "memberId_example"; // String | Member ID
let body = {}; // Object | Queue Member

apiInstance.patchRoutingQueueUser(queueId, memberId, body)
  .then((data) => {
    console.log(`patchRoutingQueueUser success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling patchRoutingQueueUser');
    console.error(err);
  });
```

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



Requires ANY permissions: 

* routing:queue:edit


### Request Body Schema

<script type="text/javascript">
	function copyQueueMemberExample() {
		let temp = $("<textarea>");
		$("body").append(temp);
		temp.val($('#QueueMemberExample').text()).select();
		document.execCommand("copy");
		temp.remove();
		return false;
	}
</script>

QueueMember <a href="#" onclick="return copyQueueMemberExample()">Copy</a>

<div id="QueueMemberExample">

```{"language":"json", "maxHeight": "250px"}
{ 
  "id": String, 
  "name": String, 
  "user": { 
    "id": String, 
    "name": String, 
    "division": { 
      "id": String, 
      "name": String, 
      "selfUri": String, 
    },  
    "chat": { 
      "jabberId": String, 
    },  
    "department": String, 
    "email": String, 
    "primaryContactInfo": { 
      "address": String, 
      "display": String, 
      "mediaType": String, 
      "type": String, 
      "extension": String, 
    },  
    "addresses": { 
      "address": String, 
      "display": String, 
      "mediaType": String, 
      "type": String, 
      "extension": String, 
    },  
    "state": String, 
    "title": String, 
    "username": String, 
    "manager": User, 
    "images": { 
      "resolution": String, 
      "imageUri": String, 
    },  
    "version": Number, 
    "certifications": [String], 
    "biography": { 
      "biography": String, 
      "interests": [String], 
      "hobbies": [String], 
      "spouse": String, 
    },  
    "employerInfo": { 
      "officialName": String, 
      "employeeId": String, 
      "employeeType": String, 
      "dateHire": String, 
    },  
    "routingStatus": { 
      "userId": String, 
      "status": String, 
      "startTime": Date, 
    },  
    "presence": { 
      "id": String, 
      "name": String, 
      "source": String, 
      "primary": Boolean, 
      "presenceDefinition": { 
        "id": String, 
        "systemPresence": String, 
        "selfUri": String, 
      },  
      "message": String, 
      "modifiedDate": Date, 
      "selfUri": String, 
    },  
    "conversationSummary": { 
      "userId": String, 
      "call": { 
        "contactCenter": { 
          "active": Number, 
          "acw": Number, 
        },  
        "enterprise": { 
          "active": Number, 
          "acw": Number, 
        },  
      },  
      "callback": { 
        "contactCenter": { 
          "active": Number, 
          "acw": Number, 
        },  
        "enterprise": { 
          "active": Number, 
          "acw": Number, 
        },  
      },  
      "email": { 
        "contactCenter": { 
          "active": Number, 
          "acw": Number, 
        },  
        "enterprise": { 
          "active": Number, 
          "acw": Number, 
        },  
      },  
      "message": { 
        "contactCenter": { 
          "active": Number, 
          "acw": Number, 
        },  
        "enterprise": { 
          "active": Number, 
          "acw": Number, 
        },  
      },  
      "chat": { 
        "contactCenter": { 
          "active": Number, 
          "acw": Number, 
        },  
        "enterprise": { 
          "active": Number, 
          "acw": Number, 
        },  
      },  
      "socialExpression": { 
        "contactCenter": { 
          "active": Number, 
          "acw": Number, 
        },  
        "enterprise": { 
          "active": Number, 
          "acw": Number, 
        },  
      },  
      "video": { 
        "contactCenter": { 
          "active": Number, 
          "acw": Number, 
        },  
        "enterprise": { 
          "active": Number, 
          "acw": Number, 
        },  
      },  
    },  
    "outOfOffice": { 
      "id": String, 
      "name": String, 
      "user": User, 
      "startDate": Date, 
      "endDate": Date, 
      "active": Boolean, 
      "indefinite": Boolean, 
      "selfUri": String, 
    },  
    "geolocation": { 
      "id": String, 
      "name": String, 
      "type": String, 
      "primary": Boolean, 
      "latitude": Number, 
      "longitude": Number, 
      "country": String, 
      "region": String, 
      "city": String, 
      "locations": { 
        "id": String, 
        "name": String, 
        "contactUser": { 
          "id": String, 
          "selfUri": String, 
        },  
        "emergencyNumber": { 
          "e164": String, 
          "number": String, 
          "type": String, 
        },  
        "address": { 
          "city": String, 
          "country": String, 
          "countryName": String, 
          "state": String, 
          "street1": String, 
          "street2": String, 
          "zipcode": String, 
        },  
        "state": String, 
        "notes": String, 
        "version": Number, 
        "path": [String], 
        "profileImage": { 
          "resolution": String, 
          "imageUri": String, 
        },  
        "floorplanImage": { 
          "resolution": String, 
          "imageUri": String, 
        },  
        "addressVerificationDetails": { 
          "status": String, 
          "dateFinished": Date, 
          "dateStarted": Date, 
          "service": String, 
        },  
        "addressVerified": Boolean, 
        "addressStored": Boolean, 
        "images": String, 
        "selfUri": String, 
      },  
      "selfUri": String, 
    },  
    "station": { 
      "associatedStation": { 
        "id": String, 
        "name": String, 
        "type": String, 
        "associatedUser": User, 
        "associatedDate": Date, 
        "defaultUser": User, 
        "providerInfo": {String: String}, 
      },  
      "effectiveStation": { 
        "id": String, 
        "name": String, 
        "type": String, 
        "associatedUser": User, 
        "associatedDate": Date, 
        "defaultUser": User, 
        "providerInfo": {String: String}, 
      },  
      "defaultStation": { 
        "id": String, 
        "name": String, 
        "type": String, 
        "associatedUser": User, 
        "associatedDate": Date, 
        "defaultUser": User, 
        "providerInfo": {String: String}, 
      },  
      "lastAssociatedStation": { 
        "id": String, 
        "name": String, 
        "type": String, 
        "associatedUser": User, 
        "associatedDate": Date, 
        "defaultUser": User, 
        "providerInfo": {String: String}, 
      },  
    },  
    "authorization": { 
      "roles": { 
        "id": String, 
        "name": String, 
      },  
      "unusedRoles": { 
        "id": String, 
        "name": String, 
      },  
      "permissions": [String], 
      "permissionPolicies": { 
        "id": String, 
        "domain": String, 
        "entityName": String, 
        "policyName": String, 
        "policyDescription": String, 
        "actionSetKey": String, 
        "allowConditions": Boolean, 
        "resourceConditionNode": { 
          "variableName": String, 
          "conjunction": String, 
          "operator": String, 
          "operands": { 
            "type": String, 
            "value": String, 
          },  
          "terms": { 
            "variableName": String, 
            "conjunction": String, 
            "operator": String, 
            "operands": { 
              "type": String, 
              "value": String, 
            },  
            "terms": { 
              "variableName": String, 
              "conjunction": String, 
              "operator": String, 
              "operands": { 
                "type": String, 
                "value": String, 
              },  
              "terms": { 
                "variableName": String, 
                "conjunction": String, 
                "operator": String, 
                "operands": [ResourceConditionValue], 
                "terms": [ResourceConditionNode], 
              },  
            },  
          },  
        },  
        "namedResources": [String], 
        "resourceCondition": String, 
        "actionSet": [String], 
      },  
    },  
    "profileSkills": [String], 
    "locations": { 
      "id": String, 
      "floorplanId": String, 
      "coordinates": {String: Number}, 
      "notes": String, 
      "locationDefinition": { 
        "id": String, 
        "name": String, 
        "contactUser": { 
          "id": String, 
          "selfUri": String, 
        },  
        "emergencyNumber": { 
          "e164": String, 
          "number": String, 
          "type": String, 
        },  
        "address": { 
          "city": String, 
          "country": String, 
          "countryName": String, 
          "state": String, 
          "street1": String, 
          "street2": String, 
          "zipcode": String, 
        },  
        "state": String, 
        "notes": String, 
        "version": Number, 
        "path": [String], 
        "profileImage": { 
          "resolution": String, 
          "imageUri": String, 
        },  
        "floorplanImage": { 
          "resolution": String, 
          "imageUri": String, 
        },  
        "addressVerificationDetails": { 
          "status": String, 
          "dateFinished": Date, 
          "dateStarted": Date, 
          "service": String, 
        },  
        "addressVerified": Boolean, 
        "addressStored": Boolean, 
        "images": String, 
        "selfUri": String, 
      },  
    },  
    "groups": { 
      "id": String, 
      "name": String, 
      "description": String, 
      "dateModified": Date, 
      "memberCount": Number, 
      "state": String, 
      "version": Number, 
      "type": String, 
      "images": { 
        "resolution": String, 
        "imageUri": String, 
      },  
      "addresses": { 
        "address": String, 
        "extension": String, 
        "display": String, 
        "type": String, 
        "mediaType": String, 
      },  
      "rulesVisible": Boolean, 
      "visibility": String, 
      "owners": User, 
      "selfUri": String, 
    },  
    "skills": { 
      "id": String, 
      "name": String, 
      "proficiency": Number, 
      "state": String, 
      "skillUri": String, 
      "selfUri": String, 
    },  
    "languages": { 
      "id": String, 
      "name": String, 
      "proficiency": Number, 
      "state": String, 
      "languageUri": String, 
      "selfUri": String, 
    },  
    "acdAutoAnswer": Boolean, 
    "languagePreference": String, 
    "selfUri": String, 
  },  
  "ringNumber": Number, 
  "joined": Boolean, 
  "memberBy": String, 
  "routingStatus": { 
    "userId": String, 
    "status": String, 
    "startTime": Date, 
  },  
  "selfUri": String, 
}
```

</div>


### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.RoutingApi();

let queueId = "queueId_example"; // String | Queue ID
let body = [{}]; // Object | Queue Members

apiInstance.patchRoutingQueueUsers(queueId, body)
  .then((data) => {
    console.log(`patchRoutingQueueUsers success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling patchRoutingQueueUsers');
    console.error(err);
  });
```

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



Requires ANY permissions: 

* routing:skill:assign
* routing:language:assign


### Request Body Schema

<script type="text/javascript">
	function copyUserRoutingLanguageExample() {
		let temp = $("<textarea>");
		$("body").append(temp);
		temp.val($('#UserRoutingLanguageExample').text()).select();
		document.execCommand("copy");
		temp.remove();
		return false;
	}
</script>

UserRoutingLanguage <a href="#" onclick="return copyUserRoutingLanguageExample()">Copy</a>

<div id="UserRoutingLanguageExample">

```{"language":"json", "maxHeight": "250px"}
{ 
  "id": String, 
  "name": String, 
  "proficiency": Number, 
  "state": String, 
  "languageUri": String, 
  "selfUri": String, 
}
```

</div>


### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.RoutingApi();

let userId = "userId_example"; // String | User ID
let languageId = "languageId_example"; // String | languageId
let body = {}; // Object | Language

apiInstance.patchUserRoutinglanguage(userId, languageId, body)
  .then((data) => {
    console.log(`patchUserRoutinglanguage success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling patchUserRoutinglanguage');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **userId** | **String** | User ID |  |
 **languageId** | **String** | languageId |  |
 **body** | **Object** | Language |  |
{: class="table table-striped"}

### Return type

**UserRoutingLanguage**

<a name="patchUserRoutinglanguagesBulk"></a>

# UserLanguageEntityListing patchUserRoutinglanguagesBulk(userId, body)



PATCH /api/v2/users/{userId}/routinglanguages/bulk

Add bulk routing language to user. Max limit 50 languages



Requires ANY permissions: 

* routing:skill:assign
* routing:language:assign


### Request Body Schema

<script type="text/javascript">
	function copyUserRoutingLanguagePostExample() {
		let temp = $("<textarea>");
		$("body").append(temp);
		temp.val($('#UserRoutingLanguagePostExample').text()).select();
		document.execCommand("copy");
		temp.remove();
		return false;
	}
</script>

UserRoutingLanguagePost <a href="#" onclick="return copyUserRoutingLanguagePostExample()">Copy</a>

<div id="UserRoutingLanguagePostExample">

```{"language":"json", "maxHeight": "250px"}
{ 
  "id": String, 
  "proficiency": Number, 
  "languageUri": String, 
  "selfUri": String, 
}
```

</div>


### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.RoutingApi();

let userId = "userId_example"; // String | User ID
let body = [{}]; // Object | Language

apiInstance.patchUserRoutinglanguagesBulk(userId, body)
  .then((data) => {
    console.log(`patchUserRoutinglanguagesBulk success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling patchUserRoutinglanguagesBulk');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **userId** | **String** | User ID |  |
 **body** | **Object** | Language |  |
{: class="table table-striped"}

### Return type

**UserLanguageEntityListing**

<a name="patchUserRoutingskillsBulk"></a>

# UserSkillEntityListing patchUserRoutingskillsBulk(userId, body)



PATCH /api/v2/users/{userId}/routingskills/bulk

Bulk add routing skills to user



Requires ANY permissions: 

* routing:skill:assign


### Request Body Schema

<script type="text/javascript">
	function copyUserRoutingSkillPostExample() {
		let temp = $("<textarea>");
		$("body").append(temp);
		temp.val($('#UserRoutingSkillPostExample').text()).select();
		document.execCommand("copy");
		temp.remove();
		return false;
	}
</script>

UserRoutingSkillPost <a href="#" onclick="return copyUserRoutingSkillPostExample()">Copy</a>

<div id="UserRoutingSkillPostExample">

```{"language":"json", "maxHeight": "250px"}
{ 
  "id": String, 
  "proficiency": Number, 
  "skillUri": String, 
  "selfUri": String, 
}
```

</div>


### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.RoutingApi();

let userId = "userId_example"; // String | User ID
let body = [{}]; // Object | Skill

apiInstance.patchUserRoutingskillsBulk(userId, body)
  .then((data) => {
    console.log(`patchUserRoutingskillsBulk success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling patchUserRoutingskillsBulk');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **userId** | **String** | User ID |  |
 **body** | **Object** | Skill |  |
{: class="table table-striped"}

### Return type

**UserSkillEntityListing**

<a name="postAnalyticsQueuesObservationsQuery"></a>

# QueueObservationQueryResponse postAnalyticsQueuesObservationsQuery(body)



POST /api/v2/analytics/queues/observations/query

Query for queue observations



Requires ANY permissions: 

* analytics:queueObservation:view


### Request Body Schema

<script type="text/javascript">
	function copyQueueObservationQueryExample() {
		let temp = $("<textarea>");
		$("body").append(temp);
		temp.val($('#QueueObservationQueryExample').text()).select();
		document.execCommand("copy");
		temp.remove();
		return false;
	}
</script>

QueueObservationQuery <a href="#" onclick="return copyQueueObservationQueryExample()">Copy</a>

<div id="QueueObservationQueryExample">

```{"language":"json", "maxHeight": "250px"}
{ 
  "filter": { 
    "type": String, 
    "clauses": { 
      "type": String, 
      "predicates": { 
        "type": String, 
        "dimension": String, 
        "operator": String, 
        "value": String, 
        "range": { 
          "gt": Number, 
          "gte": Number, 
          "lt": Number, 
          "lte": Number, 
        },  
      },  
    },  
    "predicates": { 
      "type": String, 
      "dimension": String, 
      "operator": String, 
      "value": String, 
      "range": { 
        "gt": Number, 
        "gte": Number, 
        "lt": Number, 
        "lte": Number, 
      },  
    },  
  },  
  "metrics": [String], 
  "detailMetrics": [String], 
}
```

</div>


### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.RoutingApi();

let body = {}; // Object | query

apiInstance.postAnalyticsQueuesObservationsQuery(body)
  .then((data) => {
    console.log(`postAnalyticsQueuesObservationsQuery success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling postAnalyticsQueuesObservationsQuery');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **body** | **Object** | query |  |
{: class="table table-striped"}

### Return type

**QueueObservationQueryResponse**

<a name="postRoutingEmailDomainRoutes"></a>

# InboundRoute postRoutingEmailDomainRoutes(domainName, body)



POST /api/v2/routing/email/domains/{domainName}/routes

Create a route



Requires ANY permissions: 

* routing:email:manage


### Request Body Schema

<script type="text/javascript">
	function copyInboundRouteExample() {
		let temp = $("<textarea>");
		$("body").append(temp);
		temp.val($('#InboundRouteExample').text()).select();
		document.execCommand("copy");
		temp.remove();
		return false;
	}
</script>

InboundRoute <a href="#" onclick="return copyInboundRouteExample()">Copy</a>

<div id="InboundRouteExample">

```{"language":"json", "maxHeight": "250px"}
{ 
  "id": String, 
  "name": String, 
  "pattern": String, 
  "queue": { 
    "id": String, 
    "name": String, 
    "selfUri": String, 
  },  
  "priority": Number, 
  "skills": { 
    "id": String, 
    "name": String, 
    "selfUri": String, 
  },  
  "language": { 
    "id": String, 
    "name": String, 
    "selfUri": String, 
  },  
  "fromName": String, 
  "fromEmail": String, 
  "flow": { 
    "id": String, 
    "name": String, 
    "selfUri": String, 
  },  
  "replyEmailAddress": { 
    "domain": { 
      "id": String, 
      "name": String, 
      "selfUri": String, 
    },  
    "route": { 
      "id": String, 
      "name": String, 
      "pattern": String, 
      "queue": { 
        "id": String, 
        "name": String, 
        "selfUri": String, 
      },  
      "priority": Number, 
      "skills": { 
        "id": String, 
        "name": String, 
        "selfUri": String, 
      },  
      "language": { 
        "id": String, 
        "name": String, 
        "selfUri": String, 
      },  
      "fromName": String, 
      "fromEmail": String, 
      "flow": { 
        "id": String, 
        "name": String, 
        "selfUri": String, 
      },  
      "replyEmailAddress": { 
        "domain": { 
          "id": String, 
          "name": String, 
          "selfUri": String, 
        },  
        "route": { 
          "id": String, 
          "name": String, 
          "pattern": String, 
          "queue": { 
            "id": String, 
            "name": String, 
            "selfUri": String, 
          },  
          "priority": Number, 
          "skills": { 
            "id": String, 
            "name": String, 
            "selfUri": String, 
          },  
          "language": { 
            "id": String, 
            "name": String, 
            "selfUri": String, 
          },  
          "fromName": String, 
          "fromEmail": String, 
          "flow": { 
            "id": String, 
            "name": String, 
            "selfUri": String, 
          },  
          "replyEmailAddress": { 
            "domain": { 
              "id": String, 
              "name": String, 
              "selfUri": String, 
            },  
            "route": { 
              "id": String, 
              "name": String, 
              "pattern": String, 
              "queue": { 
                "id": String, 
                "name": String, 
                "selfUri": String, 
              },  
              "priority": Number, 
              "skills": { 
                "id": String, 
                "name": String, 
                "selfUri": String, 
              },  
              "language": { 
                "id": String, 
                "name": String, 
                "selfUri": String, 
              },  
              "fromName": String, 
              "fromEmail": String, 
              "flow": { 
                "id": String, 
                "name": String, 
                "selfUri": String, 
              },  
              "replyEmailAddress": { 
                "domain": DomainEntityRef, 
                "route": InboundRoute, 
              },  
              "autoBcc": { 
                "email": String, 
                "name": String, 
              },  
              "spamFlow": { 
                "id": String, 
                "name": String, 
                "selfUri": String, 
              },  
              "selfUri": String, 
            },  
          },  
          "autoBcc": { 
            "email": String, 
            "name": String, 
          },  
          "spamFlow": { 
            "id": String, 
            "name": String, 
            "selfUri": String, 
          },  
          "selfUri": String, 
        },  
      },  
      "autoBcc": { 
        "email": String, 
        "name": String, 
      },  
      "spamFlow": { 
        "id": String, 
        "name": String, 
        "selfUri": String, 
      },  
      "selfUri": String, 
    },  
  },  
  "autoBcc": { 
    "email": String, 
    "name": String, 
  },  
  "spamFlow": { 
    "id": String, 
    "name": String, 
    "selfUri": String, 
  },  
  "selfUri": String, 
}
```

</div>


### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.RoutingApi();

let domainName = "domainName_example"; // String | email domain
let body = {}; // Object | Route

apiInstance.postRoutingEmailDomainRoutes(domainName, body)
  .then((data) => {
    console.log(`postRoutingEmailDomainRoutes success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling postRoutingEmailDomainRoutes');
    console.error(err);
  });
```

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



Requires ANY permissions: 

* routing:email:manage


### Request Body Schema

<script type="text/javascript">
	function copyInboundDomainExample() {
		let temp = $("<textarea>");
		$("body").append(temp);
		temp.val($('#InboundDomainExample').text()).select();
		document.execCommand("copy");
		temp.remove();
		return false;
	}
</script>

InboundDomain <a href="#" onclick="return copyInboundDomainExample()">Copy</a>

<div id="InboundDomainExample">

```{"language":"json", "maxHeight": "250px"}
{ 
  "id": String, 
  "name": String, 
  "mxRecordStatus": String, 
  "subDomain": Boolean, 
  "selfUri": String, 
}
```

</div>


### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.RoutingApi();

let body = {}; // Object | Domain

apiInstance.postRoutingEmailDomains(body)
  .then((data) => {
    console.log(`postRoutingEmailDomains success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling postRoutingEmailDomains');
    console.error(err);
  });
```

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



Requires ANY permissions: 

* routing:skill:manage


### Request Body Schema

<script type="text/javascript">
	function copyLanguageExample() {
		let temp = $("<textarea>");
		$("body").append(temp);
		temp.val($('#LanguageExample').text()).select();
		document.execCommand("copy");
		temp.remove();
		return false;
	}
</script>

Language <a href="#" onclick="return copyLanguageExample()">Copy</a>

<div id="LanguageExample">

```{"language":"json", "maxHeight": "250px"}
{ 
  "id": String, 
  "name": String, 
  "dateModified": Date, 
  "state": String, 
  "version": String, 
  "selfUri": String, 
}
```

</div>


### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.RoutingApi();

let body = {}; // Object | Language

apiInstance.postRoutingLanguages(body)
  .then((data) => {
    console.log(`postRoutingLanguages success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling postRoutingLanguages');
    console.error(err);
  });
```

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



Requires ANY permissions: 

* routing:queue:edit


### Request Body Schema

<script type="text/javascript">
	function copyWritableEntityExample() {
		let temp = $("<textarea>");
		$("body").append(temp);
		temp.val($('#WritableEntityExample').text()).select();
		document.execCommand("copy");
		temp.remove();
		return false;
	}
</script>

WritableEntity <a href="#" onclick="return copyWritableEntityExample()">Copy</a>

<div id="WritableEntityExample">

```{"language":"json", "maxHeight": "250px"}
{ 
  "id": String, 
}
```

</div>


### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.RoutingApi();

let queueId = "queueId_example"; // String | Queue ID
let body = [{}]; // Object | Queue Members
let opts = { 
  '_delete': false // Boolean | True to delete queue members
};

apiInstance.postRoutingQueueUsers(queueId, body, opts)
  .then((data) => {
    console.log(`postRoutingQueueUsers success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling postRoutingQueueUsers');
    console.error(err);
  });
```

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



Requires ANY permissions: 

* routing:queue:edit


### Request Body Schema

<script type="text/javascript">
	function copyWrapUpCodeReferenceExample() {
		let temp = $("<textarea>");
		$("body").append(temp);
		temp.val($('#WrapUpCodeReferenceExample').text()).select();
		document.execCommand("copy");
		temp.remove();
		return false;
	}
</script>

WrapUpCodeReference <a href="#" onclick="return copyWrapUpCodeReferenceExample()">Copy</a>

<div id="WrapUpCodeReferenceExample">

```{"language":"json", "maxHeight": "250px"}
{ 
  "id": String, 
}
```

</div>


### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.RoutingApi();

let queueId = "queueId_example"; // String | Queue ID
let body = [{}]; // Object | List of wrapup codes

apiInstance.postRoutingQueueWrapupcodes(queueId, body)
  .then((data) => {
    console.log(`postRoutingQueueWrapupcodes success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling postRoutingQueueWrapupcodes');
    console.error(err);
  });
```

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

Create a queue



Requires ANY permissions: 

* routing:queue:add


### Request Body Schema

<script type="text/javascript">
	function copyCreateQueueRequestExample() {
		let temp = $("<textarea>");
		$("body").append(temp);
		temp.val($('#CreateQueueRequestExample').text()).select();
		document.execCommand("copy");
		temp.remove();
		return false;
	}
</script>

CreateQueueRequest <a href="#" onclick="return copyCreateQueueRequestExample()">Copy</a>

<div id="CreateQueueRequestExample">

```{"language":"json", "maxHeight": "250px"}
{ 
  "id": String, 
  "name": String, 
  "division": { 
    "id": String, 
    "name": String, 
    "selfUri": String, 
  },  
  "description": String, 
  "dateCreated": Date, 
  "dateModified": Date, 
  "modifiedBy": String, 
  "createdBy": String, 
  "memberCount": Number, 
  "mediaSettings": { 
    "alertingTimeoutSeconds": Number, 
    "serviceLevel": { 
      "percentage": Number, 
      "durationMs": Number, 
    },  
  },  
  "bullseye": { 
    "rings": { 
      "expansionCriteria": { 
        "type": String, 
        "threshold": Number, 
      },  
      "actions": { 
        "skillsToRemove": { 
          "name": String, 
          "id": String, 
          "selfUri": String, 
        },  
      },  
    },  
  },  
  "acwSettings": { 
    "wrapupPrompt": String, 
    "timeoutMs": Number, 
  },  
  "skillEvaluationMethod": String, 
  "queueFlow": { 
    "id": String, 
    "name": String, 
    "selfUri": String, 
  },  
  "whisperPrompt": { 
    "id": String, 
    "name": String, 
    "selfUri": String, 
  },  
  "autoAnswerOnly": Boolean, 
  "callingPartyName": String, 
  "callingPartyNumber": String, 
  "defaultScripts": { 
    "id": String, 
    "name": String, 
    "versionId": String, 
    "createdDate": Date, 
    "modifiedDate": Date, 
    "publishedDate": Date, 
    "versionDate": Date, 
    "startPageId": String, 
    "startPageName": String, 
    "features": Object, 
    "variables": Object, 
    "customActions": Object, 
    "pages": { 
      "id": String, 
      "name": String, 
      "versionId": String, 
      "createdDate": Date, 
      "modifiedDate": Date, 
      "rootContainer": {String: Object}, 
      "properties": {String: Object}, 
      "selfUri": String, 
    },  
    "selfUri": String, 
  },  
  "outboundMessagingAddresses": { 
    "smsAddress": { 
      "id": String, 
      "name": String, 
      "selfUri": String, 
    },  
  },  
  "outboundEmailAddress": { 
    "domain": { 
      "id": String, 
      "name": String, 
      "selfUri": String, 
    },  
    "route": { 
      "id": String, 
      "name": String, 
      "pattern": String, 
      "queue": { 
        "id": String, 
        "name": String, 
        "selfUri": String, 
      },  
      "priority": Number, 
      "skills": { 
        "id": String, 
        "name": String, 
        "selfUri": String, 
      },  
      "language": { 
        "id": String, 
        "name": String, 
        "selfUri": String, 
      },  
      "fromName": String, 
      "fromEmail": String, 
      "flow": { 
        "id": String, 
        "name": String, 
        "selfUri": String, 
      },  
      "replyEmailAddress": { 
        "domain": { 
          "id": String, 
          "name": String, 
          "selfUri": String, 
        },  
        "route": { 
          "id": String, 
          "name": String, 
          "pattern": String, 
          "queue": { 
            "id": String, 
            "name": String, 
            "selfUri": String, 
          },  
          "priority": Number, 
          "skills": { 
            "id": String, 
            "name": String, 
            "selfUri": String, 
          },  
          "language": { 
            "id": String, 
            "name": String, 
            "selfUri": String, 
          },  
          "fromName": String, 
          "fromEmail": String, 
          "flow": { 
            "id": String, 
            "name": String, 
            "selfUri": String, 
          },  
          "replyEmailAddress": { 
            "domain": { 
              "id": String, 
              "name": String, 
              "selfUri": String, 
            },  
            "route": { 
              "id": String, 
              "name": String, 
              "pattern": String, 
              "queue": { 
                "id": String, 
                "name": String, 
                "selfUri": String, 
              },  
              "priority": Number, 
              "skills": { 
                "id": String, 
                "name": String, 
                "selfUri": String, 
              },  
              "language": { 
                "id": String, 
                "name": String, 
                "selfUri": String, 
              },  
              "fromName": String, 
              "fromEmail": String, 
              "flow": { 
                "id": String, 
                "name": String, 
                "selfUri": String, 
              },  
              "replyEmailAddress": { 
                "domain": DomainEntityRef, 
                "route": InboundRoute, 
              },  
              "autoBcc": { 
                "email": String, 
                "name": String, 
              },  
              "spamFlow": { 
                "id": String, 
                "name": String, 
                "selfUri": String, 
              },  
              "selfUri": String, 
            },  
          },  
          "autoBcc": { 
            "email": String, 
            "name": String, 
          },  
          "spamFlow": { 
            "id": String, 
            "name": String, 
            "selfUri": String, 
          },  
          "selfUri": String, 
        },  
      },  
      "autoBcc": { 
        "email": String, 
        "name": String, 
      },  
      "spamFlow": { 
        "id": String, 
        "name": String, 
        "selfUri": String, 
      },  
      "selfUri": String, 
    },  
  },  
  "sourceQueueId": String, 
  "selfUri": String, 
}
```

</div>


### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.RoutingApi();

let body = {}; // Object | Queue

apiInstance.postRoutingQueues(body)
  .then((data) => {
    console.log(`postRoutingQueues success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling postRoutingQueues');
    console.error(err);
  });
```

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



Requires ANY permissions: 

* routing:skill:manage


### Request Body Schema

<script type="text/javascript">
	function copyRoutingSkillExample() {
		let temp = $("<textarea>");
		$("body").append(temp);
		temp.val($('#RoutingSkillExample').text()).select();
		document.execCommand("copy");
		temp.remove();
		return false;
	}
</script>

RoutingSkill <a href="#" onclick="return copyRoutingSkillExample()">Copy</a>

<div id="RoutingSkillExample">

```{"language":"json", "maxHeight": "250px"}
{ 
  "id": String, 
  "name": String, 
  "dateModified": Date, 
  "state": String, 
  "version": String, 
  "selfUri": String, 
}
```

</div>


### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.RoutingApi();

let body = {}; // Object | Skill

apiInstance.postRoutingSkills(body)
  .then((data) => {
    console.log(`postRoutingSkills success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling postRoutingSkills');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **body** | **Object** | Skill |  |
{: class="table table-striped"}

### Return type

**RoutingSkill**

<a name="postRoutingSmsAddresses"></a>

# SmsAddress postRoutingSmsAddresses(body)



POST /api/v2/routing/sms/addresses

Provision an Address for SMS



Requires ANY permissions: 

* sms:phoneNumber:add


### Request Body Schema

<script type="text/javascript">
	function copySmsAddressProvisionExample() {
		let temp = $("<textarea>");
		$("body").append(temp);
		temp.val($('#SmsAddressProvisionExample').text()).select();
		document.execCommand("copy");
		temp.remove();
		return false;
	}
</script>

SmsAddressProvision <a href="#" onclick="return copySmsAddressProvisionExample()">Copy</a>

<div id="SmsAddressProvisionExample">

```{"language":"json", "maxHeight": "250px"}
{ 
  "id": String, 
  "name": String, 
  "street": String, 
  "city": String, 
  "region": String, 
  "postalCode": String, 
  "countryCode": String, 
  "autoCorrectAddress": Boolean, 
  "selfUri": String, 
}
```

</div>


### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.RoutingApi();

let body = {}; // Object | SmsAddress

apiInstance.postRoutingSmsAddresses(body)
  .then((data) => {
    console.log(`postRoutingSmsAddresses success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling postRoutingSmsAddresses');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **body** | **Object** | SmsAddress |  |
{: class="table table-striped"}

### Return type

**SmsAddress**

<a name="postRoutingSmsPhonenumbers"></a>

# SmsPhoneNumber postRoutingSmsPhonenumbers(body)



POST /api/v2/routing/sms/phonenumbers

Provision a phone number for SMS



Requires ANY permissions: 

* sms:phoneNumber:add


### Request Body Schema

<script type="text/javascript">
	function copySmsPhoneNumberProvisionExample() {
		let temp = $("<textarea>");
		$("body").append(temp);
		temp.val($('#SmsPhoneNumberProvisionExample').text()).select();
		document.execCommand("copy");
		temp.remove();
		return false;
	}
</script>

SmsPhoneNumberProvision <a href="#" onclick="return copySmsPhoneNumberProvisionExample()">Copy</a>

<div id="SmsPhoneNumberProvisionExample">

```{"language":"json", "maxHeight": "250px"}
{ 
  "id": String, 
  "name": String, 
  "phoneNumber": String, 
  "phoneNumberType": String, 
  "countryCode": String, 
  "addressId": String, 
  "selfUri": String, 
}
```

</div>


### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.RoutingApi();

let body = {}; // Object | SmsPhoneNumber

apiInstance.postRoutingSmsPhonenumbers(body)
  .then((data) => {
    console.log(`postRoutingSmsPhonenumbers success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling postRoutingSmsPhonenumbers');
    console.error(err);
  });
```

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



Requires ANY permissions: 

* routing:wrapupCode:add


### Request Body Schema

<script type="text/javascript">
	function copyWrapupCodeExample() {
		let temp = $("<textarea>");
		$("body").append(temp);
		temp.val($('#WrapupCodeExample').text()).select();
		document.execCommand("copy");
		temp.remove();
		return false;
	}
</script>

WrapupCode <a href="#" onclick="return copyWrapupCodeExample()">Copy</a>

<div id="WrapupCodeExample">

```{"language":"json", "maxHeight": "250px"}
{ 
  "id": String, 
  "name": String, 
  "dateCreated": Date, 
  "dateModified": Date, 
  "modifiedBy": String, 
  "createdBy": String, 
  "selfUri": String, 
}
```

</div>


### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.RoutingApi();

let body = {}; // Object | WrapupCode

apiInstance.postRoutingWrapupcodes(body)
  .then((data) => {
    console.log(`postRoutingWrapupcodes success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling postRoutingWrapupcodes');
    console.error(err);
  });
```

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



Requires ANY permissions: 

* routing:skill:assign
* routing:language:assign


### Request Body Schema

<script type="text/javascript">
	function copyUserRoutingLanguagePostExample() {
		let temp = $("<textarea>");
		$("body").append(temp);
		temp.val($('#UserRoutingLanguagePostExample').text()).select();
		document.execCommand("copy");
		temp.remove();
		return false;
	}
</script>

UserRoutingLanguagePost <a href="#" onclick="return copyUserRoutingLanguagePostExample()">Copy</a>

<div id="UserRoutingLanguagePostExample">

```{"language":"json", "maxHeight": "250px"}
{ 
  "id": String, 
  "proficiency": Number, 
  "languageUri": String, 
  "selfUri": String, 
}
```

</div>


### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.RoutingApi();

let userId = "userId_example"; // String | User ID
let body = {}; // Object | Language

apiInstance.postUserRoutinglanguages(userId, body)
  .then((data) => {
    console.log(`postUserRoutinglanguages success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling postUserRoutinglanguages');
    console.error(err);
  });
```

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



Requires ANY permissions: 

* routing:skill:assign


### Request Body Schema

<script type="text/javascript">
	function copyUserRoutingSkillPostExample() {
		let temp = $("<textarea>");
		$("body").append(temp);
		temp.val($('#UserRoutingSkillPostExample').text()).select();
		document.execCommand("copy");
		temp.remove();
		return false;
	}
</script>

UserRoutingSkillPost <a href="#" onclick="return copyUserRoutingSkillPostExample()">Copy</a>

<div id="UserRoutingSkillPostExample">

```{"language":"json", "maxHeight": "250px"}
{ 
  "id": String, 
  "proficiency": Number, 
  "skillUri": String, 
  "selfUri": String, 
}
```

</div>


### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.RoutingApi();

let userId = "userId_example"; // String | User ID
let body = {}; // Object | Skill

apiInstance.postUserRoutingskills(userId, body)
  .then((data) => {
    console.log(`postUserRoutingskills success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling postUserRoutingskills');
    console.error(err);
  });
```

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



Requires ANY permissions: 

* routing:email:manage


### Request Body Schema

<script type="text/javascript">
	function copyInboundRouteExample() {
		let temp = $("<textarea>");
		$("body").append(temp);
		temp.val($('#InboundRouteExample').text()).select();
		document.execCommand("copy");
		temp.remove();
		return false;
	}
</script>

InboundRoute <a href="#" onclick="return copyInboundRouteExample()">Copy</a>

<div id="InboundRouteExample">

```{"language":"json", "maxHeight": "250px"}
{ 
  "id": String, 
  "name": String, 
  "pattern": String, 
  "queue": { 
    "id": String, 
    "name": String, 
    "selfUri": String, 
  },  
  "priority": Number, 
  "skills": { 
    "id": String, 
    "name": String, 
    "selfUri": String, 
  },  
  "language": { 
    "id": String, 
    "name": String, 
    "selfUri": String, 
  },  
  "fromName": String, 
  "fromEmail": String, 
  "flow": { 
    "id": String, 
    "name": String, 
    "selfUri": String, 
  },  
  "replyEmailAddress": { 
    "domain": { 
      "id": String, 
      "name": String, 
      "selfUri": String, 
    },  
    "route": { 
      "id": String, 
      "name": String, 
      "pattern": String, 
      "queue": { 
        "id": String, 
        "name": String, 
        "selfUri": String, 
      },  
      "priority": Number, 
      "skills": { 
        "id": String, 
        "name": String, 
        "selfUri": String, 
      },  
      "language": { 
        "id": String, 
        "name": String, 
        "selfUri": String, 
      },  
      "fromName": String, 
      "fromEmail": String, 
      "flow": { 
        "id": String, 
        "name": String, 
        "selfUri": String, 
      },  
      "replyEmailAddress": { 
        "domain": { 
          "id": String, 
          "name": String, 
          "selfUri": String, 
        },  
        "route": { 
          "id": String, 
          "name": String, 
          "pattern": String, 
          "queue": { 
            "id": String, 
            "name": String, 
            "selfUri": String, 
          },  
          "priority": Number, 
          "skills": { 
            "id": String, 
            "name": String, 
            "selfUri": String, 
          },  
          "language": { 
            "id": String, 
            "name": String, 
            "selfUri": String, 
          },  
          "fromName": String, 
          "fromEmail": String, 
          "flow": { 
            "id": String, 
            "name": String, 
            "selfUri": String, 
          },  
          "replyEmailAddress": { 
            "domain": { 
              "id": String, 
              "name": String, 
              "selfUri": String, 
            },  
            "route": { 
              "id": String, 
              "name": String, 
              "pattern": String, 
              "queue": { 
                "id": String, 
                "name": String, 
                "selfUri": String, 
              },  
              "priority": Number, 
              "skills": { 
                "id": String, 
                "name": String, 
                "selfUri": String, 
              },  
              "language": { 
                "id": String, 
                "name": String, 
                "selfUri": String, 
              },  
              "fromName": String, 
              "fromEmail": String, 
              "flow": { 
                "id": String, 
                "name": String, 
                "selfUri": String, 
              },  
              "replyEmailAddress": { 
                "domain": DomainEntityRef, 
                "route": InboundRoute, 
              },  
              "autoBcc": { 
                "email": String, 
                "name": String, 
              },  
              "spamFlow": { 
                "id": String, 
                "name": String, 
                "selfUri": String, 
              },  
              "selfUri": String, 
            },  
          },  
          "autoBcc": { 
            "email": String, 
            "name": String, 
          },  
          "spamFlow": { 
            "id": String, 
            "name": String, 
            "selfUri": String, 
          },  
          "selfUri": String, 
        },  
      },  
      "autoBcc": { 
        "email": String, 
        "name": String, 
      },  
      "spamFlow": { 
        "id": String, 
        "name": String, 
        "selfUri": String, 
      },  
      "selfUri": String, 
    },  
  },  
  "autoBcc": { 
    "email": String, 
    "name": String, 
  },  
  "spamFlow": { 
    "id": String, 
    "name": String, 
    "selfUri": String, 
  },  
  "selfUri": String, 
}
```

</div>


### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.RoutingApi();

let domainName = "domainName_example"; // String | email domain
let routeId = "routeId_example"; // String | route ID
let body = {}; // Object | Route

apiInstance.putRoutingEmailDomainRoute(domainName, routeId, body)
  .then((data) => {
    console.log(`putRoutingEmailDomainRoute success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling putRoutingEmailDomainRoute');
    console.error(err);
  });
```

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



Requires ANY permissions: 

* routing:message:manage


### Request Body Schema

<script type="text/javascript">
	function copyRecipientExample() {
		let temp = $("<textarea>");
		$("body").append(temp);
		temp.val($('#RecipientExample').text()).select();
		document.execCommand("copy");
		temp.remove();
		return false;
	}
</script>

Recipient <a href="#" onclick="return copyRecipientExample()">Copy</a>

<div id="RecipientExample">

```{"language":"json", "maxHeight": "250px"}
{ 
  "id": String, 
  "name": String, 
  "flow": { 
    "id": String, 
    "name": String, 
    "division": { 
      "id": String, 
      "name": String, 
      "selfUri": String, 
    },  
    "description": String, 
    "type": String, 
    "lockedUser": { 
      "id": String, 
      "name": String, 
      "division": { 
        "id": String, 
        "name": String, 
        "selfUri": String, 
      },  
      "chat": { 
        "jabberId": String, 
      },  
      "department": String, 
      "email": String, 
      "primaryContactInfo": { 
        "address": String, 
        "display": String, 
        "mediaType": String, 
        "type": String, 
        "extension": String, 
      },  
      "addresses": { 
        "address": String, 
        "display": String, 
        "mediaType": String, 
        "type": String, 
        "extension": String, 
      },  
      "state": String, 
      "title": String, 
      "username": String, 
      "manager": User, 
      "images": { 
        "resolution": String, 
        "imageUri": String, 
      },  
      "version": Number, 
      "certifications": [String], 
      "biography": { 
        "biography": String, 
        "interests": [String], 
        "hobbies": [String], 
        "spouse": String, 
      },  
      "employerInfo": { 
        "officialName": String, 
        "employeeId": String, 
        "employeeType": String, 
        "dateHire": String, 
      },  
      "routingStatus": { 
        "userId": String, 
        "status": String, 
        "startTime": Date, 
      },  
      "presence": { 
        "id": String, 
        "name": String, 
        "source": String, 
        "primary": Boolean, 
        "presenceDefinition": { 
          "id": String, 
          "systemPresence": String, 
          "selfUri": String, 
        },  
        "message": String, 
        "modifiedDate": Date, 
        "selfUri": String, 
      },  
      "conversationSummary": { 
        "userId": String, 
        "call": { 
          "contactCenter": { 
            "active": Number, 
            "acw": Number, 
          },  
          "enterprise": { 
            "active": Number, 
            "acw": Number, 
          },  
        },  
        "callback": { 
          "contactCenter": { 
            "active": Number, 
            "acw": Number, 
          },  
          "enterprise": { 
            "active": Number, 
            "acw": Number, 
          },  
        },  
        "email": { 
          "contactCenter": { 
            "active": Number, 
            "acw": Number, 
          },  
          "enterprise": { 
            "active": Number, 
            "acw": Number, 
          },  
        },  
        "message": { 
          "contactCenter": { 
            "active": Number, 
            "acw": Number, 
          },  
          "enterprise": { 
            "active": Number, 
            "acw": Number, 
          },  
        },  
        "chat": { 
          "contactCenter": { 
            "active": Number, 
            "acw": Number, 
          },  
          "enterprise": { 
            "active": Number, 
            "acw": Number, 
          },  
        },  
        "socialExpression": { 
          "contactCenter": { 
            "active": Number, 
            "acw": Number, 
          },  
          "enterprise": { 
            "active": Number, 
            "acw": Number, 
          },  
        },  
        "video": { 
          "contactCenter": { 
            "active": Number, 
            "acw": Number, 
          },  
          "enterprise": { 
            "active": Number, 
            "acw": Number, 
          },  
        },  
      },  
      "outOfOffice": { 
        "id": String, 
        "name": String, 
        "user": User, 
        "startDate": Date, 
        "endDate": Date, 
        "active": Boolean, 
        "indefinite": Boolean, 
        "selfUri": String, 
      },  
      "geolocation": { 
        "id": String, 
        "name": String, 
        "type": String, 
        "primary": Boolean, 
        "latitude": Number, 
        "longitude": Number, 
        "country": String, 
        "region": String, 
        "city": String, 
        "locations": { 
          "id": String, 
          "name": String, 
          "contactUser": { 
            "id": String, 
            "selfUri": String, 
          },  
          "emergencyNumber": { 
            "e164": String, 
            "number": String, 
            "type": String, 
          },  
          "address": { 
            "city": String, 
            "country": String, 
            "countryName": String, 
            "state": String, 
            "street1": String, 
            "street2": String, 
            "zipcode": String, 
          },  
          "state": String, 
          "notes": String, 
          "version": Number, 
          "path": [String], 
          "profileImage": { 
            "resolution": String, 
            "imageUri": String, 
          },  
          "floorplanImage": { 
            "resolution": String, 
            "imageUri": String, 
          },  
          "addressVerificationDetails": { 
            "status": String, 
            "dateFinished": Date, 
            "dateStarted": Date, 
            "service": String, 
          },  
          "addressVerified": Boolean, 
          "addressStored": Boolean, 
          "images": String, 
          "selfUri": String, 
        },  
        "selfUri": String, 
      },  
      "station": { 
        "associatedStation": { 
          "id": String, 
          "name": String, 
          "type": String, 
          "associatedUser": User, 
          "associatedDate": Date, 
          "defaultUser": User, 
          "providerInfo": {String: String}, 
        },  
        "effectiveStation": { 
          "id": String, 
          "name": String, 
          "type": String, 
          "associatedUser": User, 
          "associatedDate": Date, 
          "defaultUser": User, 
          "providerInfo": {String: String}, 
        },  
        "defaultStation": { 
          "id": String, 
          "name": String, 
          "type": String, 
          "associatedUser": User, 
          "associatedDate": Date, 
          "defaultUser": User, 
          "providerInfo": {String: String}, 
        },  
        "lastAssociatedStation": { 
          "id": String, 
          "name": String, 
          "type": String, 
          "associatedUser": User, 
          "associatedDate": Date, 
          "defaultUser": User, 
          "providerInfo": {String: String}, 
        },  
      },  
      "authorization": { 
        "roles": { 
          "id": String, 
          "name": String, 
        },  
        "unusedRoles": { 
          "id": String, 
          "name": String, 
        },  
        "permissions": [String], 
        "permissionPolicies": { 
          "id": String, 
          "domain": String, 
          "entityName": String, 
          "policyName": String, 
          "policyDescription": String, 
          "actionSetKey": String, 
          "allowConditions": Boolean, 
          "resourceConditionNode": { 
            "variableName": String, 
            "conjunction": String, 
            "operator": String, 
            "operands": { 
              "type": String, 
              "value": String, 
            },  
            "terms": { 
              "variableName": String, 
              "conjunction": String, 
              "operator": String, 
              "operands": { 
                "type": String, 
                "value": String, 
              },  
              "terms": { 
                "variableName": String, 
                "conjunction": String, 
                "operator": String, 
                "operands": [ResourceConditionValue], 
                "terms": [ResourceConditionNode], 
              },  
            },  
          },  
          "namedResources": [String], 
          "resourceCondition": String, 
          "actionSet": [String], 
        },  
      },  
      "profileSkills": [String], 
      "locations": { 
        "id": String, 
        "floorplanId": String, 
        "coordinates": {String: Number}, 
        "notes": String, 
        "locationDefinition": { 
          "id": String, 
          "name": String, 
          "contactUser": { 
            "id": String, 
            "selfUri": String, 
          },  
          "emergencyNumber": { 
            "e164": String, 
            "number": String, 
            "type": String, 
          },  
          "address": { 
            "city": String, 
            "country": String, 
            "countryName": String, 
            "state": String, 
            "street1": String, 
            "street2": String, 
            "zipcode": String, 
          },  
          "state": String, 
          "notes": String, 
          "version": Number, 
          "path": [String], 
          "profileImage": { 
            "resolution": String, 
            "imageUri": String, 
          },  
          "floorplanImage": { 
            "resolution": String, 
            "imageUri": String, 
          },  
          "addressVerificationDetails": { 
            "status": String, 
            "dateFinished": Date, 
            "dateStarted": Date, 
            "service": String, 
          },  
          "addressVerified": Boolean, 
          "addressStored": Boolean, 
          "images": String, 
          "selfUri": String, 
        },  
      },  
      "groups": { 
        "id": String, 
        "name": String, 
        "description": String, 
        "dateModified": Date, 
        "memberCount": Number, 
        "state": String, 
        "version": Number, 
        "type": String, 
        "images": { 
          "resolution": String, 
          "imageUri": String, 
        },  
        "addresses": { 
          "address": String, 
          "extension": String, 
          "display": String, 
          "type": String, 
          "mediaType": String, 
        },  
        "rulesVisible": Boolean, 
        "visibility": String, 
        "owners": User, 
        "selfUri": String, 
      },  
      "skills": { 
        "id": String, 
        "name": String, 
        "proficiency": Number, 
        "state": String, 
        "skillUri": String, 
        "selfUri": String, 
      },  
      "languages": { 
        "id": String, 
        "name": String, 
        "proficiency": Number, 
        "state": String, 
        "languageUri": String, 
        "selfUri": String, 
      },  
      "acdAutoAnswer": Boolean, 
      "languagePreference": String, 
      "selfUri": String, 
    },  
    "lockedClient": { 
      "id": String, 
      "name": String, 
      "selfUri": String, 
    },  
    "active": Boolean, 
    "system": Boolean, 
    "deleted": Boolean, 
    "publishedVersion": { 
      "id": String, 
      "name": String, 
      "commitVersion": String, 
      "configurationVersion": String, 
      "type": String, 
      "secure": Boolean, 
      "createdBy": User, 
      "createdByClient": { 
        "id": String, 
        "name": String, 
        "selfUri": String, 
      },  
      "configurationUri": String, 
      "dateCreated": Number, 
      "generationId": String, 
      "publishResultUri": String, 
      "selfUri": String, 
    },  
    "savedVersion": { 
      "id": String, 
      "name": String, 
      "commitVersion": String, 
      "configurationVersion": String, 
      "type": String, 
      "secure": Boolean, 
      "createdBy": User, 
      "createdByClient": { 
        "id": String, 
        "name": String, 
        "selfUri": String, 
      },  
      "configurationUri": String, 
      "dateCreated": Number, 
      "generationId": String, 
      "publishResultUri": String, 
      "selfUri": String, 
    },  
    "inputSchema": Object, 
    "outputSchema": Object, 
    "checkedInVersion": { 
      "id": String, 
      "name": String, 
      "commitVersion": String, 
      "configurationVersion": String, 
      "type": String, 
      "secure": Boolean, 
      "createdBy": User, 
      "createdByClient": { 
        "id": String, 
        "name": String, 
        "selfUri": String, 
      },  
      "configurationUri": String, 
      "dateCreated": Number, 
      "generationId": String, 
      "publishResultUri": String, 
      "selfUri": String, 
    },  
    "publishedBy": { 
      "id": String, 
      "name": String, 
      "division": { 
        "id": String, 
        "name": String, 
        "selfUri": String, 
      },  
      "chat": { 
        "jabberId": String, 
      },  
      "department": String, 
      "email": String, 
      "primaryContactInfo": { 
        "address": String, 
        "display": String, 
        "mediaType": String, 
        "type": String, 
        "extension": String, 
      },  
      "addresses": { 
        "address": String, 
        "display": String, 
        "mediaType": String, 
        "type": String, 
        "extension": String, 
      },  
      "state": String, 
      "title": String, 
      "username": String, 
      "manager": User, 
      "images": { 
        "resolution": String, 
        "imageUri": String, 
      },  
      "version": Number, 
      "certifications": [String], 
      "biography": { 
        "biography": String, 
        "interests": [String], 
        "hobbies": [String], 
        "spouse": String, 
      },  
      "employerInfo": { 
        "officialName": String, 
        "employeeId": String, 
        "employeeType": String, 
        "dateHire": String, 
      },  
      "routingStatus": { 
        "userId": String, 
        "status": String, 
        "startTime": Date, 
      },  
      "presence": { 
        "id": String, 
        "name": String, 
        "source": String, 
        "primary": Boolean, 
        "presenceDefinition": { 
          "id": String, 
          "systemPresence": String, 
          "selfUri": String, 
        },  
        "message": String, 
        "modifiedDate": Date, 
        "selfUri": String, 
      },  
      "conversationSummary": { 
        "userId": String, 
        "call": { 
          "contactCenter": { 
            "active": Number, 
            "acw": Number, 
          },  
          "enterprise": { 
            "active": Number, 
            "acw": Number, 
          },  
        },  
        "callback": { 
          "contactCenter": { 
            "active": Number, 
            "acw": Number, 
          },  
          "enterprise": { 
            "active": Number, 
            "acw": Number, 
          },  
        },  
        "email": { 
          "contactCenter": { 
            "active": Number, 
            "acw": Number, 
          },  
          "enterprise": { 
            "active": Number, 
            "acw": Number, 
          },  
        },  
        "message": { 
          "contactCenter": { 
            "active": Number, 
            "acw": Number, 
          },  
          "enterprise": { 
            "active": Number, 
            "acw": Number, 
          },  
        },  
        "chat": { 
          "contactCenter": { 
            "active": Number, 
            "acw": Number, 
          },  
          "enterprise": { 
            "active": Number, 
            "acw": Number, 
          },  
        },  
        "socialExpression": { 
          "contactCenter": { 
            "active": Number, 
            "acw": Number, 
          },  
          "enterprise": { 
            "active": Number, 
            "acw": Number, 
          },  
        },  
        "video": { 
          "contactCenter": { 
            "active": Number, 
            "acw": Number, 
          },  
          "enterprise": { 
            "active": Number, 
            "acw": Number, 
          },  
        },  
      },  
      "outOfOffice": { 
        "id": String, 
        "name": String, 
        "user": User, 
        "startDate": Date, 
        "endDate": Date, 
        "active": Boolean, 
        "indefinite": Boolean, 
        "selfUri": String, 
      },  
      "geolocation": { 
        "id": String, 
        "name": String, 
        "type": String, 
        "primary": Boolean, 
        "latitude": Number, 
        "longitude": Number, 
        "country": String, 
        "region": String, 
        "city": String, 
        "locations": { 
          "id": String, 
          "name": String, 
          "contactUser": { 
            "id": String, 
            "selfUri": String, 
          },  
          "emergencyNumber": { 
            "e164": String, 
            "number": String, 
            "type": String, 
          },  
          "address": { 
            "city": String, 
            "country": String, 
            "countryName": String, 
            "state": String, 
            "street1": String, 
            "street2": String, 
            "zipcode": String, 
          },  
          "state": String, 
          "notes": String, 
          "version": Number, 
          "path": [String], 
          "profileImage": { 
            "resolution": String, 
            "imageUri": String, 
          },  
          "floorplanImage": { 
            "resolution": String, 
            "imageUri": String, 
          },  
          "addressVerificationDetails": { 
            "status": String, 
            "dateFinished": Date, 
            "dateStarted": Date, 
            "service": String, 
          },  
          "addressVerified": Boolean, 
          "addressStored": Boolean, 
          "images": String, 
          "selfUri": String, 
        },  
        "selfUri": String, 
      },  
      "station": { 
        "associatedStation": { 
          "id": String, 
          "name": String, 
          "type": String, 
          "associatedUser": User, 
          "associatedDate": Date, 
          "defaultUser": User, 
          "providerInfo": {String: String}, 
        },  
        "effectiveStation": { 
          "id": String, 
          "name": String, 
          "type": String, 
          "associatedUser": User, 
          "associatedDate": Date, 
          "defaultUser": User, 
          "providerInfo": {String: String}, 
        },  
        "defaultStation": { 
          "id": String, 
          "name": String, 
          "type": String, 
          "associatedUser": User, 
          "associatedDate": Date, 
          "defaultUser": User, 
          "providerInfo": {String: String}, 
        },  
        "lastAssociatedStation": { 
          "id": String, 
          "name": String, 
          "type": String, 
          "associatedUser": User, 
          "associatedDate": Date, 
          "defaultUser": User, 
          "providerInfo": {String: String}, 
        },  
      },  
      "authorization": { 
        "roles": { 
          "id": String, 
          "name": String, 
        },  
        "unusedRoles": { 
          "id": String, 
          "name": String, 
        },  
        "permissions": [String], 
        "permissionPolicies": { 
          "id": String, 
          "domain": String, 
          "entityName": String, 
          "policyName": String, 
          "policyDescription": String, 
          "actionSetKey": String, 
          "allowConditions": Boolean, 
          "resourceConditionNode": { 
            "variableName": String, 
            "conjunction": String, 
            "operator": String, 
            "operands": { 
              "type": String, 
              "value": String, 
            },  
            "terms": { 
              "variableName": String, 
              "conjunction": String, 
              "operator": String, 
              "operands": { 
                "type": String, 
                "value": String, 
              },  
              "terms": { 
                "variableName": String, 
                "conjunction": String, 
                "operator": String, 
                "operands": [ResourceConditionValue], 
                "terms": [ResourceConditionNode], 
              },  
            },  
          },  
          "namedResources": [String], 
          "resourceCondition": String, 
          "actionSet": [String], 
        },  
      },  
      "profileSkills": [String], 
      "locations": { 
        "id": String, 
        "floorplanId": String, 
        "coordinates": {String: Number}, 
        "notes": String, 
        "locationDefinition": { 
          "id": String, 
          "name": String, 
          "contactUser": { 
            "id": String, 
            "selfUri": String, 
          },  
          "emergencyNumber": { 
            "e164": String, 
            "number": String, 
            "type": String, 
          },  
          "address": { 
            "city": String, 
            "country": String, 
            "countryName": String, 
            "state": String, 
            "street1": String, 
            "street2": String, 
            "zipcode": String, 
          },  
          "state": String, 
          "notes": String, 
          "version": Number, 
          "path": [String], 
          "profileImage": { 
            "resolution": String, 
            "imageUri": String, 
          },  
          "floorplanImage": { 
            "resolution": String, 
            "imageUri": String, 
          },  
          "addressVerificationDetails": { 
            "status": String, 
            "dateFinished": Date, 
            "dateStarted": Date, 
            "service": String, 
          },  
          "addressVerified": Boolean, 
          "addressStored": Boolean, 
          "images": String, 
          "selfUri": String, 
        },  
      },  
      "groups": { 
        "id": String, 
        "name": String, 
        "description": String, 
        "dateModified": Date, 
        "memberCount": Number, 
        "state": String, 
        "version": Number, 
        "type": String, 
        "images": { 
          "resolution": String, 
          "imageUri": String, 
        },  
        "addresses": { 
          "address": String, 
          "extension": String, 
          "display": String, 
          "type": String, 
          "mediaType": String, 
        },  
        "rulesVisible": Boolean, 
        "visibility": String, 
        "owners": User, 
        "selfUri": String, 
      },  
      "skills": { 
        "id": String, 
        "name": String, 
        "proficiency": Number, 
        "state": String, 
        "skillUri": String, 
        "selfUri": String, 
      },  
      "languages": { 
        "id": String, 
        "name": String, 
        "proficiency": Number, 
        "state": String, 
        "languageUri": String, 
        "selfUri": String, 
      },  
      "acdAutoAnswer": Boolean, 
      "languagePreference": String, 
      "selfUri": String, 
    },  
    "currentOperation": { 
      "id": String, 
      "complete": Boolean, 
      "user": { 
        "id": String, 
        "name": String, 
        "division": { 
          "id": String, 
          "name": String, 
          "selfUri": String, 
        },  
        "chat": { 
          "jabberId": String, 
        },  
        "department": String, 
        "email": String, 
        "primaryContactInfo": { 
          "address": String, 
          "display": String, 
          "mediaType": String, 
          "type": String, 
          "extension": String, 
        },  
        "addresses": { 
          "address": String, 
          "display": String, 
          "mediaType": String, 
          "type": String, 
          "extension": String, 
        },  
        "state": String, 
        "title": String, 
        "username": String, 
        "manager": User, 
        "images": { 
          "resolution": String, 
          "imageUri": String, 
        },  
        "version": Number, 
        "certifications": [String], 
        "biography": { 
          "biography": String, 
          "interests": [String], 
          "hobbies": [String], 
          "spouse": String, 
        },  
        "employerInfo": { 
          "officialName": String, 
          "employeeId": String, 
          "employeeType": String, 
          "dateHire": String, 
        },  
        "routingStatus": { 
          "userId": String, 
          "status": String, 
          "startTime": Date, 
        },  
        "presence": { 
          "id": String, 
          "name": String, 
          "source": String, 
          "primary": Boolean, 
          "presenceDefinition": { 
            "id": String, 
            "systemPresence": String, 
            "selfUri": String, 
          },  
          "message": String, 
          "modifiedDate": Date, 
          "selfUri": String, 
        },  
        "conversationSummary": { 
          "userId": String, 
          "call": { 
            "contactCenter": { 
              "active": Number, 
              "acw": Number, 
            },  
            "enterprise": { 
              "active": Number, 
              "acw": Number, 
            },  
          },  
          "callback": { 
            "contactCenter": { 
              "active": Number, 
              "acw": Number, 
            },  
            "enterprise": { 
              "active": Number, 
              "acw": Number, 
            },  
          },  
          "email": { 
            "contactCenter": { 
              "active": Number, 
              "acw": Number, 
            },  
            "enterprise": { 
              "active": Number, 
              "acw": Number, 
            },  
          },  
          "message": { 
            "contactCenter": { 
              "active": Number, 
              "acw": Number, 
            },  
            "enterprise": { 
              "active": Number, 
              "acw": Number, 
            },  
          },  
          "chat": { 
            "contactCenter": { 
              "active": Number, 
              "acw": Number, 
            },  
            "enterprise": { 
              "active": Number, 
              "acw": Number, 
            },  
          },  
          "socialExpression": { 
            "contactCenter": { 
              "active": Number, 
              "acw": Number, 
            },  
            "enterprise": { 
              "active": Number, 
              "acw": Number, 
            },  
          },  
          "video": { 
            "contactCenter": { 
              "active": Number, 
              "acw": Number, 
            },  
            "enterprise": { 
              "active": Number, 
              "acw": Number, 
            },  
          },  
        },  
        "outOfOffice": { 
          "id": String, 
          "name": String, 
          "user": User, 
          "startDate": Date, 
          "endDate": Date, 
          "active": Boolean, 
          "indefinite": Boolean, 
          "selfUri": String, 
        },  
        "geolocation": { 
          "id": String, 
          "name": String, 
          "type": String, 
          "primary": Boolean, 
          "latitude": Number, 
          "longitude": Number, 
          "country": String, 
          "region": String, 
          "city": String, 
          "locations": { 
            "id": String, 
            "name": String, 
            "contactUser": { 
              "id": String, 
              "selfUri": String, 
            },  
            "emergencyNumber": { 
              "e164": String, 
              "number": String, 
              "type": String, 
            },  
            "address": { 
              "city": String, 
              "country": String, 
              "countryName": String, 
              "state": String, 
              "street1": String, 
              "street2": String, 
              "zipcode": String, 
            },  
            "state": String, 
            "notes": String, 
            "version": Number, 
            "path": [String], 
            "profileImage": { 
              "resolution": String, 
              "imageUri": String, 
            },  
            "floorplanImage": { 
              "resolution": String, 
              "imageUri": String, 
            },  
            "addressVerificationDetails": { 
              "status": String, 
              "dateFinished": Date, 
              "dateStarted": Date, 
              "service": String, 
            },  
            "addressVerified": Boolean, 
            "addressStored": Boolean, 
            "images": String, 
            "selfUri": String, 
          },  
          "selfUri": String, 
        },  
        "station": { 
          "associatedStation": { 
            "id": String, 
            "name": String, 
            "type": String, 
            "associatedUser": User, 
            "associatedDate": Date, 
            "defaultUser": User, 
            "providerInfo": {String: String}, 
          },  
          "effectiveStation": { 
            "id": String, 
            "name": String, 
            "type": String, 
            "associatedUser": User, 
            "associatedDate": Date, 
            "defaultUser": User, 
            "providerInfo": {String: String}, 
          },  
          "defaultStation": { 
            "id": String, 
            "name": String, 
            "type": String, 
            "associatedUser": User, 
            "associatedDate": Date, 
            "defaultUser": User, 
            "providerInfo": {String: String}, 
          },  
          "lastAssociatedStation": { 
            "id": String, 
            "name": String, 
            "type": String, 
            "associatedUser": User, 
            "associatedDate": Date, 
            "defaultUser": User, 
            "providerInfo": {String: String}, 
          },  
        },  
        "authorization": { 
          "roles": { 
            "id": String, 
            "name": String, 
          },  
          "unusedRoles": { 
            "id": String, 
            "name": String, 
          },  
          "permissions": [String], 
          "permissionPolicies": { 
            "id": String, 
            "domain": String, 
            "entityName": String, 
            "policyName": String, 
            "policyDescription": String, 
            "actionSetKey": String, 
            "allowConditions": Boolean, 
            "resourceConditionNode": { 
              "variableName": String, 
              "conjunction": String, 
              "operator": String, 
              "operands": { 
                "type": String, 
                "value": String, 
              },  
              "terms": { 
                "variableName": String, 
                "conjunction": String, 
                "operator": String, 
                "operands": [ResourceConditionValue], 
                "terms": [ResourceConditionNode], 
              },  
            },  
            "namedResources": [String], 
            "resourceCondition": String, 
            "actionSet": [String], 
          },  
        },  
        "profileSkills": [String], 
        "locations": { 
          "id": String, 
          "floorplanId": String, 
          "coordinates": {String: Number}, 
          "notes": String, 
          "locationDefinition": { 
            "id": String, 
            "name": String, 
            "contactUser": { 
              "id": String, 
              "selfUri": String, 
            },  
            "emergencyNumber": { 
              "e164": String, 
              "number": String, 
              "type": String, 
            },  
            "address": { 
              "city": String, 
              "country": String, 
              "countryName": String, 
              "state": String, 
              "street1": String, 
              "street2": String, 
              "zipcode": String, 
            },  
            "state": String, 
            "notes": String, 
            "version": Number, 
            "path": [String], 
            "profileImage": { 
              "resolution": String, 
              "imageUri": String, 
            },  
            "floorplanImage": { 
              "resolution": String, 
              "imageUri": String, 
            },  
            "addressVerificationDetails": { 
              "status": String, 
              "dateFinished": Date, 
              "dateStarted": Date, 
              "service": String, 
            },  
            "addressVerified": Boolean, 
            "addressStored": Boolean, 
            "images": String, 
            "selfUri": String, 
          },  
        },  
        "groups": { 
          "id": String, 
          "name": String, 
          "description": String, 
          "dateModified": Date, 
          "memberCount": Number, 
          "state": String, 
          "version": Number, 
          "type": String, 
          "images": { 
            "resolution": String, 
            "imageUri": String, 
          },  
          "addresses": { 
            "address": String, 
            "extension": String, 
            "display": String, 
            "type": String, 
            "mediaType": String, 
          },  
          "rulesVisible": Boolean, 
          "visibility": String, 
          "owners": User, 
          "selfUri": String, 
        },  
        "skills": { 
          "id": String, 
          "name": String, 
          "proficiency": Number, 
          "state": String, 
          "skillUri": String, 
          "selfUri": String, 
        },  
        "languages": { 
          "id": String, 
          "name": String, 
          "proficiency": Number, 
          "state": String, 
          "languageUri": String, 
          "selfUri": String, 
        },  
        "acdAutoAnswer": Boolean, 
        "languagePreference": String, 
        "selfUri": String, 
      },  
      "client": { 
        "id": String, 
        "name": String, 
        "selfUri": String, 
      },  
      "errorMessage": String, 
      "errorCode": String, 
      "errorDetails": { 
        "errorCode": String, 
        "fieldName": String, 
        "entityId": String, 
        "entityName": String, 
      },  
      "errorMessageParams": {String: String}, 
      "actionName": String, 
      "actionStatus": String, 
    },  
    "selfUri": String, 
  },  
  "dateCreated": Date, 
  "dateModified": Date, 
  "createdBy": { 
    "id": String, 
    "name": String, 
    "division": { 
      "id": String, 
      "name": String, 
      "selfUri": String, 
    },  
    "chat": { 
      "jabberId": String, 
    },  
    "department": String, 
    "email": String, 
    "primaryContactInfo": { 
      "address": String, 
      "display": String, 
      "mediaType": String, 
      "type": String, 
      "extension": String, 
    },  
    "addresses": { 
      "address": String, 
      "display": String, 
      "mediaType": String, 
      "type": String, 
      "extension": String, 
    },  
    "state": String, 
    "title": String, 
    "username": String, 
    "manager": User, 
    "images": { 
      "resolution": String, 
      "imageUri": String, 
    },  
    "version": Number, 
    "certifications": [String], 
    "biography": { 
      "biography": String, 
      "interests": [String], 
      "hobbies": [String], 
      "spouse": String, 
    },  
    "employerInfo": { 
      "officialName": String, 
      "employeeId": String, 
      "employeeType": String, 
      "dateHire": String, 
    },  
    "routingStatus": { 
      "userId": String, 
      "status": String, 
      "startTime": Date, 
    },  
    "presence": { 
      "id": String, 
      "name": String, 
      "source": String, 
      "primary": Boolean, 
      "presenceDefinition": { 
        "id": String, 
        "systemPresence": String, 
        "selfUri": String, 
      },  
      "message": String, 
      "modifiedDate": Date, 
      "selfUri": String, 
    },  
    "conversationSummary": { 
      "userId": String, 
      "call": { 
        "contactCenter": { 
          "active": Number, 
          "acw": Number, 
        },  
        "enterprise": { 
          "active": Number, 
          "acw": Number, 
        },  
      },  
      "callback": { 
        "contactCenter": { 
          "active": Number, 
          "acw": Number, 
        },  
        "enterprise": { 
          "active": Number, 
          "acw": Number, 
        },  
      },  
      "email": { 
        "contactCenter": { 
          "active": Number, 
          "acw": Number, 
        },  
        "enterprise": { 
          "active": Number, 
          "acw": Number, 
        },  
      },  
      "message": { 
        "contactCenter": { 
          "active": Number, 
          "acw": Number, 
        },  
        "enterprise": { 
          "active": Number, 
          "acw": Number, 
        },  
      },  
      "chat": { 
        "contactCenter": { 
          "active": Number, 
          "acw": Number, 
        },  
        "enterprise": { 
          "active": Number, 
          "acw": Number, 
        },  
      },  
      "socialExpression": { 
        "contactCenter": { 
          "active": Number, 
          "acw": Number, 
        },  
        "enterprise": { 
          "active": Number, 
          "acw": Number, 
        },  
      },  
      "video": { 
        "contactCenter": { 
          "active": Number, 
          "acw": Number, 
        },  
        "enterprise": { 
          "active": Number, 
          "acw": Number, 
        },  
      },  
    },  
    "outOfOffice": { 
      "id": String, 
      "name": String, 
      "user": User, 
      "startDate": Date, 
      "endDate": Date, 
      "active": Boolean, 
      "indefinite": Boolean, 
      "selfUri": String, 
    },  
    "geolocation": { 
      "id": String, 
      "name": String, 
      "type": String, 
      "primary": Boolean, 
      "latitude": Number, 
      "longitude": Number, 
      "country": String, 
      "region": String, 
      "city": String, 
      "locations": { 
        "id": String, 
        "name": String, 
        "contactUser": { 
          "id": String, 
          "selfUri": String, 
        },  
        "emergencyNumber": { 
          "e164": String, 
          "number": String, 
          "type": String, 
        },  
        "address": { 
          "city": String, 
          "country": String, 
          "countryName": String, 
          "state": String, 
          "street1": String, 
          "street2": String, 
          "zipcode": String, 
        },  
        "state": String, 
        "notes": String, 
        "version": Number, 
        "path": [String], 
        "profileImage": { 
          "resolution": String, 
          "imageUri": String, 
        },  
        "floorplanImage": { 
          "resolution": String, 
          "imageUri": String, 
        },  
        "addressVerificationDetails": { 
          "status": String, 
          "dateFinished": Date, 
          "dateStarted": Date, 
          "service": String, 
        },  
        "addressVerified": Boolean, 
        "addressStored": Boolean, 
        "images": String, 
        "selfUri": String, 
      },  
      "selfUri": String, 
    },  
    "station": { 
      "associatedStation": { 
        "id": String, 
        "name": String, 
        "type": String, 
        "associatedUser": User, 
        "associatedDate": Date, 
        "defaultUser": User, 
        "providerInfo": {String: String}, 
      },  
      "effectiveStation": { 
        "id": String, 
        "name": String, 
        "type": String, 
        "associatedUser": User, 
        "associatedDate": Date, 
        "defaultUser": User, 
        "providerInfo": {String: String}, 
      },  
      "defaultStation": { 
        "id": String, 
        "name": String, 
        "type": String, 
        "associatedUser": User, 
        "associatedDate": Date, 
        "defaultUser": User, 
        "providerInfo": {String: String}, 
      },  
      "lastAssociatedStation": { 
        "id": String, 
        "name": String, 
        "type": String, 
        "associatedUser": User, 
        "associatedDate": Date, 
        "defaultUser": User, 
        "providerInfo": {String: String}, 
      },  
    },  
    "authorization": { 
      "roles": { 
        "id": String, 
        "name": String, 
      },  
      "unusedRoles": { 
        "id": String, 
        "name": String, 
      },  
      "permissions": [String], 
      "permissionPolicies": { 
        "id": String, 
        "domain": String, 
        "entityName": String, 
        "policyName": String, 
        "policyDescription": String, 
        "actionSetKey": String, 
        "allowConditions": Boolean, 
        "resourceConditionNode": { 
          "variableName": String, 
          "conjunction": String, 
          "operator": String, 
          "operands": { 
            "type": String, 
            "value": String, 
          },  
          "terms": { 
            "variableName": String, 
            "conjunction": String, 
            "operator": String, 
            "operands": { 
              "type": String, 
              "value": String, 
            },  
            "terms": { 
              "variableName": String, 
              "conjunction": String, 
              "operator": String, 
              "operands": { 
                "type": String, 
                "value": String, 
              },  
              "terms": { 
                "variableName": String, 
                "conjunction": String, 
                "operator": String, 
                "operands": [ResourceConditionValue], 
                "terms": [ResourceConditionNode], 
              },  
            },  
          },  
        },  
        "namedResources": [String], 
        "resourceCondition": String, 
        "actionSet": [String], 
      },  
    },  
    "profileSkills": [String], 
    "locations": { 
      "id": String, 
      "floorplanId": String, 
      "coordinates": {String: Number}, 
      "notes": String, 
      "locationDefinition": { 
        "id": String, 
        "name": String, 
        "contactUser": { 
          "id": String, 
          "selfUri": String, 
        },  
        "emergencyNumber": { 
          "e164": String, 
          "number": String, 
          "type": String, 
        },  
        "address": { 
          "city": String, 
          "country": String, 
          "countryName": String, 
          "state": String, 
          "street1": String, 
          "street2": String, 
          "zipcode": String, 
        },  
        "state": String, 
        "notes": String, 
        "version": Number, 
        "path": [String], 
        "profileImage": { 
          "resolution": String, 
          "imageUri": String, 
        },  
        "floorplanImage": { 
          "resolution": String, 
          "imageUri": String, 
        },  
        "addressVerificationDetails": { 
          "status": String, 
          "dateFinished": Date, 
          "dateStarted": Date, 
          "service": String, 
        },  
        "addressVerified": Boolean, 
        "addressStored": Boolean, 
        "images": String, 
        "selfUri": String, 
      },  
    },  
    "groups": { 
      "id": String, 
      "name": String, 
      "description": String, 
      "dateModified": Date, 
      "memberCount": Number, 
      "state": String, 
      "version": Number, 
      "type": String, 
      "images": { 
        "resolution": String, 
        "imageUri": String, 
      },  
      "addresses": { 
        "address": String, 
        "extension": String, 
        "display": String, 
        "type": String, 
        "mediaType": String, 
      },  
      "rulesVisible": Boolean, 
      "visibility": String, 
      "owners": User, 
      "selfUri": String, 
    },  
    "skills": { 
      "id": String, 
      "name": String, 
      "proficiency": Number, 
      "state": String, 
      "skillUri": String, 
      "selfUri": String, 
    },  
    "languages": { 
      "id": String, 
      "name": String, 
      "proficiency": Number, 
      "state": String, 
      "languageUri": String, 
      "selfUri": String, 
    },  
    "acdAutoAnswer": Boolean, 
    "languagePreference": String, 
    "selfUri": String, 
  },  
  "modifiedBy": User, 
  "messengerType": String, 
  "selfUri": String, 
}
```

</div>


### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.RoutingApi();

let recipientId = "recipientId_example"; // String | Recipient ID
let body = {}; // Object | Recipient

apiInstance.putRoutingMessageRecipient(recipientId, body)
  .then((data) => {
    console.log(`putRoutingMessageRecipient success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling putRoutingMessageRecipient');
    console.error(err);
  });
```

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



Requires ANY permissions: 

* routing:queue:edit


### Request Body Schema

<script type="text/javascript">
	function copyQueueRequestExample() {
		let temp = $("<textarea>");
		$("body").append(temp);
		temp.val($('#QueueRequestExample').text()).select();
		document.execCommand("copy");
		temp.remove();
		return false;
	}
</script>

QueueRequest <a href="#" onclick="return copyQueueRequestExample()">Copy</a>

<div id="QueueRequestExample">

```{"language":"json", "maxHeight": "250px"}
{ 
  "id": String, 
  "name": String, 
  "division": { 
    "id": String, 
    "name": String, 
    "selfUri": String, 
  },  
  "description": String, 
  "dateCreated": Date, 
  "dateModified": Date, 
  "modifiedBy": String, 
  "createdBy": String, 
  "memberCount": Number, 
  "mediaSettings": { 
    "alertingTimeoutSeconds": Number, 
    "serviceLevel": { 
      "percentage": Number, 
      "durationMs": Number, 
    },  
  },  
  "bullseye": { 
    "rings": { 
      "expansionCriteria": { 
        "type": String, 
        "threshold": Number, 
      },  
      "actions": { 
        "skillsToRemove": { 
          "name": String, 
          "id": String, 
          "selfUri": String, 
        },  
      },  
    },  
  },  
  "acwSettings": { 
    "wrapupPrompt": String, 
    "timeoutMs": Number, 
  },  
  "skillEvaluationMethod": String, 
  "queueFlow": { 
    "id": String, 
    "name": String, 
    "selfUri": String, 
  },  
  "whisperPrompt": { 
    "id": String, 
    "name": String, 
    "selfUri": String, 
  },  
  "autoAnswerOnly": Boolean, 
  "callingPartyName": String, 
  "callingPartyNumber": String, 
  "defaultScripts": { 
    "id": String, 
    "name": String, 
    "versionId": String, 
    "createdDate": Date, 
    "modifiedDate": Date, 
    "publishedDate": Date, 
    "versionDate": Date, 
    "startPageId": String, 
    "startPageName": String, 
    "features": Object, 
    "variables": Object, 
    "customActions": Object, 
    "pages": { 
      "id": String, 
      "name": String, 
      "versionId": String, 
      "createdDate": Date, 
      "modifiedDate": Date, 
      "rootContainer": {String: Object}, 
      "properties": {String: Object}, 
      "selfUri": String, 
    },  
    "selfUri": String, 
  },  
  "outboundMessagingAddresses": { 
    "smsAddress": { 
      "id": String, 
      "name": String, 
      "selfUri": String, 
    },  
  },  
  "outboundEmailAddress": { 
    "domain": { 
      "id": String, 
      "name": String, 
      "selfUri": String, 
    },  
    "route": { 
      "id": String, 
      "name": String, 
      "pattern": String, 
      "queue": { 
        "id": String, 
        "name": String, 
        "selfUri": String, 
      },  
      "priority": Number, 
      "skills": { 
        "id": String, 
        "name": String, 
        "selfUri": String, 
      },  
      "language": { 
        "id": String, 
        "name": String, 
        "selfUri": String, 
      },  
      "fromName": String, 
      "fromEmail": String, 
      "flow": { 
        "id": String, 
        "name": String, 
        "selfUri": String, 
      },  
      "replyEmailAddress": { 
        "domain": { 
          "id": String, 
          "name": String, 
          "selfUri": String, 
        },  
        "route": { 
          "id": String, 
          "name": String, 
          "pattern": String, 
          "queue": { 
            "id": String, 
            "name": String, 
            "selfUri": String, 
          },  
          "priority": Number, 
          "skills": { 
            "id": String, 
            "name": String, 
            "selfUri": String, 
          },  
          "language": { 
            "id": String, 
            "name": String, 
            "selfUri": String, 
          },  
          "fromName": String, 
          "fromEmail": String, 
          "flow": { 
            "id": String, 
            "name": String, 
            "selfUri": String, 
          },  
          "replyEmailAddress": { 
            "domain": { 
              "id": String, 
              "name": String, 
              "selfUri": String, 
            },  
            "route": { 
              "id": String, 
              "name": String, 
              "pattern": String, 
              "queue": { 
                "id": String, 
                "name": String, 
                "selfUri": String, 
              },  
              "priority": Number, 
              "skills": { 
                "id": String, 
                "name": String, 
                "selfUri": String, 
              },  
              "language": { 
                "id": String, 
                "name": String, 
                "selfUri": String, 
              },  
              "fromName": String, 
              "fromEmail": String, 
              "flow": { 
                "id": String, 
                "name": String, 
                "selfUri": String, 
              },  
              "replyEmailAddress": { 
                "domain": DomainEntityRef, 
                "route": InboundRoute, 
              },  
              "autoBcc": { 
                "email": String, 
                "name": String, 
              },  
              "spamFlow": { 
                "id": String, 
                "name": String, 
                "selfUri": String, 
              },  
              "selfUri": String, 
            },  
          },  
          "autoBcc": { 
            "email": String, 
            "name": String, 
          },  
          "spamFlow": { 
            "id": String, 
            "name": String, 
            "selfUri": String, 
          },  
          "selfUri": String, 
        },  
      },  
      "autoBcc": { 
        "email": String, 
        "name": String, 
      },  
      "spamFlow": { 
        "id": String, 
        "name": String, 
        "selfUri": String, 
      },  
      "selfUri": String, 
    },  
  },  
  "selfUri": String, 
}
```

</div>


### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.RoutingApi();

let queueId = "queueId_example"; // String | Queue ID
let body = {}; // Object | Queue

apiInstance.putRoutingQueue(queueId, body)
  .then((data) => {
    console.log(`putRoutingQueue success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling putRoutingQueue');
    console.error(err);
  });
```

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



Requires ANY permissions: 

* sms:phoneNumber:edit


### Request Body Schema

<script type="text/javascript">
	function copySmsPhoneNumberExample() {
		let temp = $("<textarea>");
		$("body").append(temp);
		temp.val($('#SmsPhoneNumberExample').text()).select();
		document.execCommand("copy");
		temp.remove();
		return false;
	}
</script>

SmsPhoneNumber <a href="#" onclick="return copySmsPhoneNumberExample()">Copy</a>

<div id="SmsPhoneNumberExample">

```{"language":"json", "maxHeight": "250px"}
{ 
  "id": String, 
  "name": String, 
  "phoneNumber": String, 
  "phoneNumberType": String, 
  "provisionedThroughPureCloud": Boolean, 
  "phoneNumberStatus": String, 
  "capabilities": [String], 
  "countryCode": String, 
  "dateCreated": Date, 
  "dateModified": Date, 
  "createdBy": { 
    "id": String, 
    "name": String, 
    "division": { 
      "id": String, 
      "name": String, 
      "selfUri": String, 
    },  
    "chat": { 
      "jabberId": String, 
    },  
    "department": String, 
    "email": String, 
    "primaryContactInfo": { 
      "address": String, 
      "display": String, 
      "mediaType": String, 
      "type": String, 
      "extension": String, 
    },  
    "addresses": { 
      "address": String, 
      "display": String, 
      "mediaType": String, 
      "type": String, 
      "extension": String, 
    },  
    "state": String, 
    "title": String, 
    "username": String, 
    "manager": User, 
    "images": { 
      "resolution": String, 
      "imageUri": String, 
    },  
    "version": Number, 
    "certifications": [String], 
    "biography": { 
      "biography": String, 
      "interests": [String], 
      "hobbies": [String], 
      "spouse": String, 
    },  
    "employerInfo": { 
      "officialName": String, 
      "employeeId": String, 
      "employeeType": String, 
      "dateHire": String, 
    },  
    "routingStatus": { 
      "userId": String, 
      "status": String, 
      "startTime": Date, 
    },  
    "presence": { 
      "id": String, 
      "name": String, 
      "source": String, 
      "primary": Boolean, 
      "presenceDefinition": { 
        "id": String, 
        "systemPresence": String, 
        "selfUri": String, 
      },  
      "message": String, 
      "modifiedDate": Date, 
      "selfUri": String, 
    },  
    "conversationSummary": { 
      "userId": String, 
      "call": { 
        "contactCenter": { 
          "active": Number, 
          "acw": Number, 
        },  
        "enterprise": { 
          "active": Number, 
          "acw": Number, 
        },  
      },  
      "callback": { 
        "contactCenter": { 
          "active": Number, 
          "acw": Number, 
        },  
        "enterprise": { 
          "active": Number, 
          "acw": Number, 
        },  
      },  
      "email": { 
        "contactCenter": { 
          "active": Number, 
          "acw": Number, 
        },  
        "enterprise": { 
          "active": Number, 
          "acw": Number, 
        },  
      },  
      "message": { 
        "contactCenter": { 
          "active": Number, 
          "acw": Number, 
        },  
        "enterprise": { 
          "active": Number, 
          "acw": Number, 
        },  
      },  
      "chat": { 
        "contactCenter": { 
          "active": Number, 
          "acw": Number, 
        },  
        "enterprise": { 
          "active": Number, 
          "acw": Number, 
        },  
      },  
      "socialExpression": { 
        "contactCenter": { 
          "active": Number, 
          "acw": Number, 
        },  
        "enterprise": { 
          "active": Number, 
          "acw": Number, 
        },  
      },  
      "video": { 
        "contactCenter": { 
          "active": Number, 
          "acw": Number, 
        },  
        "enterprise": { 
          "active": Number, 
          "acw": Number, 
        },  
      },  
    },  
    "outOfOffice": { 
      "id": String, 
      "name": String, 
      "user": User, 
      "startDate": Date, 
      "endDate": Date, 
      "active": Boolean, 
      "indefinite": Boolean, 
      "selfUri": String, 
    },  
    "geolocation": { 
      "id": String, 
      "name": String, 
      "type": String, 
      "primary": Boolean, 
      "latitude": Number, 
      "longitude": Number, 
      "country": String, 
      "region": String, 
      "city": String, 
      "locations": { 
        "id": String, 
        "name": String, 
        "contactUser": { 
          "id": String, 
          "selfUri": String, 
        },  
        "emergencyNumber": { 
          "e164": String, 
          "number": String, 
          "type": String, 
        },  
        "address": { 
          "city": String, 
          "country": String, 
          "countryName": String, 
          "state": String, 
          "street1": String, 
          "street2": String, 
          "zipcode": String, 
        },  
        "state": String, 
        "notes": String, 
        "version": Number, 
        "path": [String], 
        "profileImage": { 
          "resolution": String, 
          "imageUri": String, 
        },  
        "floorplanImage": { 
          "resolution": String, 
          "imageUri": String, 
        },  
        "addressVerificationDetails": { 
          "status": String, 
          "dateFinished": Date, 
          "dateStarted": Date, 
          "service": String, 
        },  
        "addressVerified": Boolean, 
        "addressStored": Boolean, 
        "images": String, 
        "selfUri": String, 
      },  
      "selfUri": String, 
    },  
    "station": { 
      "associatedStation": { 
        "id": String, 
        "name": String, 
        "type": String, 
        "associatedUser": User, 
        "associatedDate": Date, 
        "defaultUser": User, 
        "providerInfo": {String: String}, 
      },  
      "effectiveStation": { 
        "id": String, 
        "name": String, 
        "type": String, 
        "associatedUser": User, 
        "associatedDate": Date, 
        "defaultUser": User, 
        "providerInfo": {String: String}, 
      },  
      "defaultStation": { 
        "id": String, 
        "name": String, 
        "type": String, 
        "associatedUser": User, 
        "associatedDate": Date, 
        "defaultUser": User, 
        "providerInfo": {String: String}, 
      },  
      "lastAssociatedStation": { 
        "id": String, 
        "name": String, 
        "type": String, 
        "associatedUser": User, 
        "associatedDate": Date, 
        "defaultUser": User, 
        "providerInfo": {String: String}, 
      },  
    },  
    "authorization": { 
      "roles": { 
        "id": String, 
        "name": String, 
      },  
      "unusedRoles": { 
        "id": String, 
        "name": String, 
      },  
      "permissions": [String], 
      "permissionPolicies": { 
        "id": String, 
        "domain": String, 
        "entityName": String, 
        "policyName": String, 
        "policyDescription": String, 
        "actionSetKey": String, 
        "allowConditions": Boolean, 
        "resourceConditionNode": { 
          "variableName": String, 
          "conjunction": String, 
          "operator": String, 
          "operands": { 
            "type": String, 
            "value": String, 
          },  
          "terms": { 
            "variableName": String, 
            "conjunction": String, 
            "operator": String, 
            "operands": { 
              "type": String, 
              "value": String, 
            },  
            "terms": { 
              "variableName": String, 
              "conjunction": String, 
              "operator": String, 
              "operands": { 
                "type": String, 
                "value": String, 
              },  
              "terms": { 
                "variableName": String, 
                "conjunction": String, 
                "operator": String, 
                "operands": [ResourceConditionValue], 
                "terms": [ResourceConditionNode], 
              },  
            },  
          },  
        },  
        "namedResources": [String], 
        "resourceCondition": String, 
        "actionSet": [String], 
      },  
    },  
    "profileSkills": [String], 
    "locations": { 
      "id": String, 
      "floorplanId": String, 
      "coordinates": {String: Number}, 
      "notes": String, 
      "locationDefinition": { 
        "id": String, 
        "name": String, 
        "contactUser": { 
          "id": String, 
          "selfUri": String, 
        },  
        "emergencyNumber": { 
          "e164": String, 
          "number": String, 
          "type": String, 
        },  
        "address": { 
          "city": String, 
          "country": String, 
          "countryName": String, 
          "state": String, 
          "street1": String, 
          "street2": String, 
          "zipcode": String, 
        },  
        "state": String, 
        "notes": String, 
        "version": Number, 
        "path": [String], 
        "profileImage": { 
          "resolution": String, 
          "imageUri": String, 
        },  
        "floorplanImage": { 
          "resolution": String, 
          "imageUri": String, 
        },  
        "addressVerificationDetails": { 
          "status": String, 
          "dateFinished": Date, 
          "dateStarted": Date, 
          "service": String, 
        },  
        "addressVerified": Boolean, 
        "addressStored": Boolean, 
        "images": String, 
        "selfUri": String, 
      },  
    },  
    "groups": { 
      "id": String, 
      "name": String, 
      "description": String, 
      "dateModified": Date, 
      "memberCount": Number, 
      "state": String, 
      "version": Number, 
      "type": String, 
      "images": { 
        "resolution": String, 
        "imageUri": String, 
      },  
      "addresses": { 
        "address": String, 
        "extension": String, 
        "display": String, 
        "type": String, 
        "mediaType": String, 
      },  
      "rulesVisible": Boolean, 
      "visibility": String, 
      "owners": User, 
      "selfUri": String, 
    },  
    "skills": { 
      "id": String, 
      "name": String, 
      "proficiency": Number, 
      "state": String, 
      "skillUri": String, 
      "selfUri": String, 
    },  
    "languages": { 
      "id": String, 
      "name": String, 
      "proficiency": Number, 
      "state": String, 
      "languageUri": String, 
      "selfUri": String, 
    },  
    "acdAutoAnswer": Boolean, 
    "languagePreference": String, 
    "selfUri": String, 
  },  
  "modifiedBy": User, 
  "version": Number, 
  "purchaseDate": Date, 
  "cancellationDate": Date, 
  "renewalDate": Date, 
  "autoRenewable": String, 
  "addressId": { 
    "id": String, 
    "name": String, 
    "street": String, 
    "city": String, 
    "region": String, 
    "postalCode": String, 
    "countryCode": String, 
    "validated": Boolean, 
    "selfUri": String, 
  },  
  "shortCodeBillingType": String, 
  "selfUri": String, 
}
```

</div>


### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.RoutingApi();

let addressId = "addressId_example"; // String | Address ID
let body = {}; // Object | SmsPhoneNumber

apiInstance.putRoutingSmsPhonenumber(addressId, body)
  .then((data) => {
    console.log(`putRoutingSmsPhonenumber success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling putRoutingSmsPhonenumber');
    console.error(err);
  });
```

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



Requires ANY permissions: 

* routing:utilization:manage


### Request Body Schema

<script type="text/javascript">
	function copyUtilizationExample() {
		let temp = $("<textarea>");
		$("body").append(temp);
		temp.val($('#UtilizationExample').text()).select();
		document.execCommand("copy");
		temp.remove();
		return false;
	}
</script>

Utilization <a href="#" onclick="return copyUtilizationExample()">Copy</a>

<div id="UtilizationExample">

```{"language":"json", "maxHeight": "250px"}
{ 
  "utilization": { 
    "maximumCapacity": Number, 
    "interruptableMediaTypes": [String], 
    "includeNonAcd": Boolean, 
  },  
}
```

</div>


### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.RoutingApi();

let body = {}; // Object | utilization

apiInstance.putRoutingUtilization(body)
  .then((data) => {
    console.log(`putRoutingUtilization success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling putRoutingUtilization');
    console.error(err);
  });
```

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



Requires ANY permissions: 

* routing:wrapupCode:edit


### Request Body Schema

<script type="text/javascript">
	function copyWrapupCodeExample() {
		let temp = $("<textarea>");
		$("body").append(temp);
		temp.val($('#WrapupCodeExample').text()).select();
		document.execCommand("copy");
		temp.remove();
		return false;
	}
</script>

WrapupCode <a href="#" onclick="return copyWrapupCodeExample()">Copy</a>

<div id="WrapupCodeExample">

```{"language":"json", "maxHeight": "250px"}
{ 
  "id": String, 
  "name": String, 
  "dateCreated": Date, 
  "dateModified": Date, 
  "modifiedBy": String, 
  "createdBy": String, 
  "selfUri": String, 
}
```

</div>


### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.RoutingApi();

let codeId = "codeId_example"; // String | Wrapup Code ID
let body = {}; // Object | WrapupCode

apiInstance.putRoutingWrapupcode(codeId, body)
  .then((data) => {
    console.log(`putRoutingWrapupcode success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling putRoutingWrapupcode');
    console.error(err);
  });
```

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



Requires ANY permissions: 

* routing:skill:assign


### Request Body Schema

<script type="text/javascript">
	function copyUserRoutingSkillExample() {
		let temp = $("<textarea>");
		$("body").append(temp);
		temp.val($('#UserRoutingSkillExample').text()).select();
		document.execCommand("copy");
		temp.remove();
		return false;
	}
</script>

UserRoutingSkill <a href="#" onclick="return copyUserRoutingSkillExample()">Copy</a>

<div id="UserRoutingSkillExample">

```{"language":"json", "maxHeight": "250px"}
{ 
  "id": String, 
  "name": String, 
  "proficiency": Number, 
  "state": String, 
  "skillUri": String, 
  "selfUri": String, 
}
```

</div>


### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.RoutingApi();

let userId = "userId_example"; // String | User ID
let skillId = "skillId_example"; // String | skillId
let body = {}; // Object | Skill

apiInstance.putUserRoutingskill(userId, skillId, body)
  .then((data) => {
    console.log(`putUserRoutingskill success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling putUserRoutingskill');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **userId** | **String** | User ID |  |
 **skillId** | **String** | skillId |  |
 **body** | **Object** | Skill |  |
{: class="table table-striped"}

### Return type

**UserRoutingSkill**

<a name="putUserRoutingskillsBulk"></a>

# UserSkillEntityListing putUserRoutingskillsBulk(userId, body)



PUT /api/v2/users/{userId}/routingskills/bulk

Replace all routing skills assigned to a user



Requires ANY permissions: 

* routing:skill:assign


### Request Body Schema

<script type="text/javascript">
	function copyUserRoutingSkillPostExample() {
		let temp = $("<textarea>");
		$("body").append(temp);
		temp.val($('#UserRoutingSkillPostExample').text()).select();
		document.execCommand("copy");
		temp.remove();
		return false;
	}
</script>

UserRoutingSkillPost <a href="#" onclick="return copyUserRoutingSkillPostExample()">Copy</a>

<div id="UserRoutingSkillPostExample">

```{"language":"json", "maxHeight": "250px"}
{ 
  "id": String, 
  "proficiency": Number, 
  "skillUri": String, 
  "selfUri": String, 
}
```

</div>


### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.RoutingApi();

let userId = "userId_example"; // String | User ID
let body = [{}]; // Object | Skill

apiInstance.putUserRoutingskillsBulk(userId, body)
  .then((data) => {
    console.log(`putUserRoutingskillsBulk success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling putUserRoutingskillsBulk');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **userId** | **String** | User ID |  |
 **body** | **Object** | Skill |  |
{: class="table table-striped"}

### Return type

**UserSkillEntityListing**

