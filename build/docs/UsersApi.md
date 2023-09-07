---
title: UsersApi
---
# platformClient.UsersApi

All URIs are relative to *https://api.mypurecloud.com*

| Method | HTTP request | Description |
| ------------- | ------------- | ------------- |
[**deleteAnalyticsUsersDetailsJob**](UsersApi.html#deleteAnalyticsUsersDetailsJob) | **DELETE** /api/v2/analytics/users/details/jobs/{jobId} | Delete/cancel an async request
[**deleteAuthorizationSubjectDivisionRole**](UsersApi.html#deleteAuthorizationSubjectDivisionRole) | **DELETE** /api/v2/authorization/subjects/{subjectId}/divisions/{divisionId}/roles/{roleId} | Delete a grant of a role in a division
[**deleteRoutingUserUtilization**](UsersApi.html#deleteRoutingUserUtilization) | **DELETE** /api/v2/routing/users/{userId}/utilization | Delete the user's max utilization settings and revert to the organization-wide default.
[**deleteUser**](UsersApi.html#deleteUser) | **DELETE** /api/v2/users/{userId} | Delete user
[**deleteUserRoutinglanguage**](UsersApi.html#deleteUserRoutinglanguage) | **DELETE** /api/v2/users/{userId}/routinglanguages/{languageId} | Remove routing language from user
[**deleteUserRoutingskill**](UsersApi.html#deleteUserRoutingskill) | **DELETE** /api/v2/users/{userId}/routingskills/{skillId} | Remove routing skill from user
[**deleteUserStationAssociatedstation**](UsersApi.html#deleteUserStationAssociatedstation) | **DELETE** /api/v2/users/{userId}/station/associatedstation | Clear associated station
[**deleteUserStationDefaultstation**](UsersApi.html#deleteUserStationDefaultstation) | **DELETE** /api/v2/users/{userId}/station/defaultstation | Clear default station
[**getAnalyticsUsersAggregatesJob**](UsersApi.html#getAnalyticsUsersAggregatesJob) | **GET** /api/v2/analytics/users/aggregates/jobs/{jobId} | Get status for async query for user aggregates
[**getAnalyticsUsersAggregatesJobResults**](UsersApi.html#getAnalyticsUsersAggregatesJobResults) | **GET** /api/v2/analytics/users/aggregates/jobs/{jobId}/results | Fetch a page of results for an async aggregates query
[**getAnalyticsUsersDetailsJob**](UsersApi.html#getAnalyticsUsersDetailsJob) | **GET** /api/v2/analytics/users/details/jobs/{jobId} | Get status for async query for user details
[**getAnalyticsUsersDetailsJobResults**](UsersApi.html#getAnalyticsUsersDetailsJobResults) | **GET** /api/v2/analytics/users/details/jobs/{jobId}/results | Fetch a page of results for an async query
[**getAnalyticsUsersDetailsJobsAvailability**](UsersApi.html#getAnalyticsUsersDetailsJobsAvailability) | **GET** /api/v2/analytics/users/details/jobs/availability | Lookup the datalake availability date and time
[**getAuthorizationDivisionspermittedMe**](UsersApi.html#getAuthorizationDivisionspermittedMe) | **GET** /api/v2/authorization/divisionspermitted/me | Returns which divisions the current user has the given permission in.
[**getAuthorizationDivisionspermittedPagedMe**](UsersApi.html#getAuthorizationDivisionspermittedPagedMe) | **GET** /api/v2/authorization/divisionspermitted/paged/me | Returns which divisions the current user has the given permission in.
[**getAuthorizationDivisionspermittedPagedSubjectId**](UsersApi.html#getAuthorizationDivisionspermittedPagedSubjectId) | **GET** /api/v2/authorization/divisionspermitted/paged/{subjectId} | Returns which divisions the specified user has the given permission in.
[**getAuthorizationSubject**](UsersApi.html#getAuthorizationSubject) | **GET** /api/v2/authorization/subjects/{subjectId} | Returns a listing of roles and permissions for a user.
[**getAuthorizationSubjectsMe**](UsersApi.html#getAuthorizationSubjectsMe) | **GET** /api/v2/authorization/subjects/me | Returns a listing of roles and permissions for the currently authenticated user.
[**getFieldconfig**](UsersApi.html#getFieldconfig) | **GET** /api/v2/fieldconfig | Fetch field config for an entity type
[**getProfilesUsers**](UsersApi.html#getProfilesUsers) | **GET** /api/v2/profiles/users | Get a user profile listing
[**getRoutingUserUtilization**](UsersApi.html#getRoutingUserUtilization) | **GET** /api/v2/routing/users/{userId}/utilization | Get the user's max utilization settings.  If not configured, the organization-wide default is returned.
[**getUser**](UsersApi.html#getUser) | **GET** /api/v2/users/{userId} | Get user.
[**getUserAdjacents**](UsersApi.html#getUserAdjacents) | **GET** /api/v2/users/{userId}/adjacents | Get adjacents
[**getUserCallforwarding**](UsersApi.html#getUserCallforwarding) | **GET** /api/v2/users/{userId}/callforwarding | Get a user's CallForwarding
[**getUserDirectreports**](UsersApi.html#getUserDirectreports) | **GET** /api/v2/users/{userId}/directreports | Get direct reports
[**getUserFavorites**](UsersApi.html#getUserFavorites) | **GET** /api/v2/users/{userId}/favorites | Deprecated; will be revived with new contract
[**getUserGeolocation**](UsersApi.html#getUserGeolocation) | **GET** /api/v2/users/{userId}/geolocations/{clientId} | Get a user's Geolocation
[**getUserOutofoffice**](UsersApi.html#getUserOutofoffice) | **GET** /api/v2/users/{userId}/outofoffice | Get a OutOfOffice
[**getUserProfile**](UsersApi.html#getUserProfile) | **GET** /api/v2/users/{userId}/profile | Get user profile
[**getUserProfileskills**](UsersApi.html#getUserProfileskills) | **GET** /api/v2/users/{userId}/profileskills | List profile skills for a user
[**getUserQueues**](UsersApi.html#getUserQueues) | **GET** /api/v2/users/{userId}/queues | Get queues for user
[**getUserRoles**](UsersApi.html#getUserRoles) | **GET** /api/v2/users/{subjectId}/roles | Returns a listing of roles and permissions for a user.
[**getUserRoutinglanguages**](UsersApi.html#getUserRoutinglanguages) | **GET** /api/v2/users/{userId}/routinglanguages | List routing language for user
[**getUserRoutingskills**](UsersApi.html#getUserRoutingskills) | **GET** /api/v2/users/{userId}/routingskills | List routing skills for user
[**getUserRoutingstatus**](UsersApi.html#getUserRoutingstatus) | **GET** /api/v2/users/{userId}/routingstatus | Fetch the routing status of a user
[**getUserSkillgroups**](UsersApi.html#getUserSkillgroups) | **GET** /api/v2/users/{userId}/skillgroups | Get skill groups for a user
[**getUserState**](UsersApi.html#getUserState) | **GET** /api/v2/users/{userId}/state | Get user state information.
[**getUserStation**](UsersApi.html#getUserStation) | **GET** /api/v2/users/{userId}/station | Get station information for user
[**getUserSuperiors**](UsersApi.html#getUserSuperiors) | **GET** /api/v2/users/{userId}/superiors | Get superiors
[**getUserTrustors**](UsersApi.html#getUserTrustors) | **GET** /api/v2/users/{userId}/trustors | List the organizations that have authorized/trusted the user.
[**getUsers**](UsersApi.html#getUsers) | **GET** /api/v2/users | Get the list of available users.
[**getUsersDevelopmentActivities**](UsersApi.html#getUsersDevelopmentActivities) | **GET** /api/v2/users/development/activities | Get list of Development Activities
[**getUsersDevelopmentActivitiesMe**](UsersApi.html#getUsersDevelopmentActivitiesMe) | **GET** /api/v2/users/development/activities/me | Get list of Development Activities for current user
[**getUsersDevelopmentActivity**](UsersApi.html#getUsersDevelopmentActivity) | **GET** /api/v2/users/development/activities/{activityId} | Get a Development Activity
[**getUsersMe**](UsersApi.html#getUsersMe) | **GET** /api/v2/users/me | Get current user details.
[**getUsersSearch**](UsersApi.html#getUsersSearch) | **GET** /api/v2/users/search | Search users using the q64 value returned from a previous search
[**patchUser**](UsersApi.html#patchUser) | **PATCH** /api/v2/users/{userId} | Update user
[**patchUserCallforwarding**](UsersApi.html#patchUserCallforwarding) | **PATCH** /api/v2/users/{userId}/callforwarding | Patch a user's CallForwarding
[**patchUserGeolocation**](UsersApi.html#patchUserGeolocation) | **PATCH** /api/v2/users/{userId}/geolocations/{clientId} | Patch a user's Geolocation
[**patchUserQueue**](UsersApi.html#patchUserQueue) | **PATCH** /api/v2/users/{userId}/queues/{queueId} | Join or unjoin a queue for a user
[**patchUserQueues**](UsersApi.html#patchUserQueues) | **PATCH** /api/v2/users/{userId}/queues | Join or unjoin a set of queues for a user
[**patchUserRoutinglanguage**](UsersApi.html#patchUserRoutinglanguage) | **PATCH** /api/v2/users/{userId}/routinglanguages/{languageId} | Update routing language proficiency or state.
[**patchUserRoutinglanguagesBulk**](UsersApi.html#patchUserRoutinglanguagesBulk) | **PATCH** /api/v2/users/{userId}/routinglanguages/bulk | Add bulk routing language to user. Max limit 50 languages
[**patchUserRoutingskillsBulk**](UsersApi.html#patchUserRoutingskillsBulk) | **PATCH** /api/v2/users/{userId}/routingskills/bulk | Bulk add routing skills to user
[**patchUsersBulk**](UsersApi.html#patchUsersBulk) | **PATCH** /api/v2/users/bulk | Update bulk acd autoanswer on users
[**postAnalyticsUsersActivityQuery**](UsersApi.html#postAnalyticsUsersActivityQuery) | **POST** /api/v2/analytics/users/activity/query | Query for user activity observations
[**postAnalyticsUsersAggregatesJobs**](UsersApi.html#postAnalyticsUsersAggregatesJobs) | **POST** /api/v2/analytics/users/aggregates/jobs | Query for user aggregates asynchronously
[**postAnalyticsUsersAggregatesQuery**](UsersApi.html#postAnalyticsUsersAggregatesQuery) | **POST** /api/v2/analytics/users/aggregates/query | Query for user aggregates
[**postAnalyticsUsersDetailsJobs**](UsersApi.html#postAnalyticsUsersDetailsJobs) | **POST** /api/v2/analytics/users/details/jobs | Query for user details asynchronously
[**postAnalyticsUsersDetailsQuery**](UsersApi.html#postAnalyticsUsersDetailsQuery) | **POST** /api/v2/analytics/users/details/query | Query for user details
[**postAnalyticsUsersObservationsQuery**](UsersApi.html#postAnalyticsUsersObservationsQuery) | **POST** /api/v2/analytics/users/observations/query | Query for user observations
[**postAuthorizationSubjectBulkadd**](UsersApi.html#postAuthorizationSubjectBulkadd) | **POST** /api/v2/authorization/subjects/{subjectId}/bulkadd | Bulk-grant roles and divisions to a subject.
[**postAuthorizationSubjectBulkremove**](UsersApi.html#postAuthorizationSubjectBulkremove) | **POST** /api/v2/authorization/subjects/{subjectId}/bulkremove | Bulk-remove grants from a subject.
[**postAuthorizationSubjectBulkreplace**](UsersApi.html#postAuthorizationSubjectBulkreplace) | **POST** /api/v2/authorization/subjects/{subjectId}/bulkreplace | Replace subject's roles and divisions with the exact list supplied in the request.
[**postAuthorizationSubjectDivisionRole**](UsersApi.html#postAuthorizationSubjectDivisionRole) | **POST** /api/v2/authorization/subjects/{subjectId}/divisions/{divisionId}/roles/{roleId} | Make a grant of a role in a division
[**postUserExternalid**](UsersApi.html#postUserExternalid) | **POST** /api/v2/users/{userId}/externalid | Create mapping between external identifier and user. Limit 100 per entity.
[**postUserInvite**](UsersApi.html#postUserInvite) | **POST** /api/v2/users/{userId}/invite | Send an activation email to the user
[**postUserPassword**](UsersApi.html#postUserPassword) | **POST** /api/v2/users/{userId}/password | Change a users password
[**postUserRoutinglanguages**](UsersApi.html#postUserRoutinglanguages) | **POST** /api/v2/users/{userId}/routinglanguages | Add routing language to user
[**postUserRoutingskills**](UsersApi.html#postUserRoutingskills) | **POST** /api/v2/users/{userId}/routingskills | Add routing skill to user
[**postUsers**](UsersApi.html#postUsers) | **POST** /api/v2/users | Create user
[**postUsersDevelopmentActivitiesAggregatesQuery**](UsersApi.html#postUsersDevelopmentActivitiesAggregatesQuery) | **POST** /api/v2/users/development/activities/aggregates/query | Retrieve aggregated development activity data
[**postUsersMePassword**](UsersApi.html#postUsersMePassword) | **POST** /api/v2/users/me/password | Change your password
[**postUsersSearch**](UsersApi.html#postUsersSearch) | **POST** /api/v2/users/search | Search users
[**postUsersSearchConversationTarget**](UsersApi.html#postUsersSearchConversationTarget) | **POST** /api/v2/users/search/conversation/target | Search users as conversation targets
[**postUsersSearchQueuemembersManage**](UsersApi.html#postUsersSearchQueuemembersManage) | **POST** /api/v2/users/search/queuemembers/manage | Search manage queue member
[**postUsersSearchTeamsAssign**](UsersApi.html#postUsersSearchTeamsAssign) | **POST** /api/v2/users/search/teams/assign | Search users assigned to teams
[**putRoutingUserUtilization**](UsersApi.html#putRoutingUserUtilization) | **PUT** /api/v2/routing/users/{userId}/utilization | Update the user's max utilization settings.  Include only those media types requiring custom configuration.
[**putUserCallforwarding**](UsersApi.html#putUserCallforwarding) | **PUT** /api/v2/users/{userId}/callforwarding | Update a user's CallForwarding
[**putUserOutofoffice**](UsersApi.html#putUserOutofoffice) | **PUT** /api/v2/users/{userId}/outofoffice | Update an OutOfOffice
[**putUserProfileskills**](UsersApi.html#putUserProfileskills) | **PUT** /api/v2/users/{userId}/profileskills | Update profile skills for a user
[**putUserRoles**](UsersApi.html#putUserRoles) | **PUT** /api/v2/users/{subjectId}/roles | Sets the user's roles
[**putUserRoutingskill**](UsersApi.html#putUserRoutingskill) | **PUT** /api/v2/users/{userId}/routingskills/{skillId} | Update routing skill proficiency or state.
[**putUserRoutingskillsBulk**](UsersApi.html#putUserRoutingskillsBulk) | **PUT** /api/v2/users/{userId}/routingskills/bulk | Replace all routing skills assigned to a user
[**putUserRoutingstatus**](UsersApi.html#putUserRoutingstatus) | **PUT** /api/v2/users/{userId}/routingstatus | Update the routing status of a user
[**putUserState**](UsersApi.html#putUserState) | **PUT** /api/v2/users/{userId}/state | Update user state information.
[**putUserStationAssociatedstationStationId**](UsersApi.html#putUserStationAssociatedstationStationId) | **PUT** /api/v2/users/{userId}/station/associatedstation/{stationId} | Set associated station
[**putUserStationDefaultstationStationId**](UsersApi.html#putUserStationDefaultstationStationId) | **PUT** /api/v2/users/{userId}/station/defaultstation/{stationId} | Set default station
{: class="table table-striped"}

<a name="deleteAnalyticsUsersDetailsJob"></a>

# void deleteAnalyticsUsersDetailsJob(jobId)


DELETE /api/v2/analytics/users/details/jobs/{jobId}

Delete/cancel an async request

Requires ANY permissions:

* analytics:userDetail:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.UsersApi();

let jobId = "jobId_example"; // String | jobId

apiInstance.deleteAnalyticsUsersDetailsJob(jobId)
  .then(() => {
    console.log('deleteAnalyticsUsersDetailsJob returned successfully.');
  })
  .catch((err) => {
    console.log('There was a failure calling deleteAnalyticsUsersDetailsJob');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **jobId** | **String** | jobId |  |
{: class="table table-striped"}

### Return type

void (no response body)

<a name="deleteAuthorizationSubjectDivisionRole"></a>

# void deleteAuthorizationSubjectDivisionRole(subjectId, divisionId, roleId)


DELETE /api/v2/authorization/subjects/{subjectId}/divisions/{divisionId}/roles/{roleId}

Delete a grant of a role in a division

Requires ALL permissions:

* authorization:grant:delete

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.UsersApi();

let subjectId = "subjectId_example"; // String | Subject ID (user or group)
let divisionId = "divisionId_example"; // String | the id of the division of the grant
let roleId = "roleId_example"; // String | the id of the role of the grant

apiInstance.deleteAuthorizationSubjectDivisionRole(subjectId, divisionId, roleId)
  .then(() => {
    console.log('deleteAuthorizationSubjectDivisionRole returned successfully.');
  })
  .catch((err) => {
    console.log('There was a failure calling deleteAuthorizationSubjectDivisionRole');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **subjectId** | **String** | Subject ID (user or group) |  |
 **divisionId** | **String** | the id of the division of the grant |  |
 **roleId** | **String** | the id of the role of the grant |  |
{: class="table table-striped"}

### Return type

void (no response body)

<a name="deleteRoutingUserUtilization"></a>

# void deleteRoutingUserUtilization(userId)


DELETE /api/v2/routing/users/{userId}/utilization

Delete the user's max utilization settings and revert to the organization-wide default.

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

let apiInstance = new platformClient.UsersApi();

let userId = "userId_example"; // String | User ID

apiInstance.deleteRoutingUserUtilization(userId)
  .then(() => {
    console.log('deleteRoutingUserUtilization returned successfully.');
  })
  .catch((err) => {
    console.log('There was a failure calling deleteRoutingUserUtilization');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **userId** | **String** | User ID |  |
{: class="table table-striped"}

### Return type

void (no response body)

<a name="deleteUser"></a>

# **Object** deleteUser(userId)


DELETE /api/v2/users/{userId}

Delete user

Requires ANY permissions:

* directory:user:delete
* directory:organization:admin

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.UsersApi();

let userId = "userId_example"; // String | User ID

apiInstance.deleteUser(userId)
  .then((data) => {
    console.log(`deleteUser success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling deleteUser');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **userId** | **String** | User ID |  |
{: class="table table-striped"}

### Return type

**Object**

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

let apiInstance = new platformClient.UsersApi();

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

Requires ALL permissions:

* routing:skill:assign

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.UsersApi();

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

<a name="deleteUserStationAssociatedstation"></a>

# void deleteUserStationAssociatedstation(userId)


DELETE /api/v2/users/{userId}/station/associatedstation

Clear associated station

Requires NO permissions:

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.UsersApi();

let userId = "userId_example"; // String | User ID

apiInstance.deleteUserStationAssociatedstation(userId)
  .then(() => {
    console.log('deleteUserStationAssociatedstation returned successfully.');
  })
  .catch((err) => {
    console.log('There was a failure calling deleteUserStationAssociatedstation');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **userId** | **String** | User ID |  |
{: class="table table-striped"}

### Return type

void (no response body)

<a name="deleteUserStationDefaultstation"></a>

# void deleteUserStationDefaultstation(userId)


DELETE /api/v2/users/{userId}/station/defaultstation

Clear default station

Requires ANY permissions:

* telephony:plugin:all
* telephony:phone:assign

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.UsersApi();

let userId = "userId_example"; // String | User ID

apiInstance.deleteUserStationDefaultstation(userId)
  .then(() => {
    console.log('deleteUserStationDefaultstation returned successfully.');
  })
  .catch((err) => {
    console.log('There was a failure calling deleteUserStationDefaultstation');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **userId** | **String** | User ID |  |
{: class="table table-striped"}

### Return type

void (no response body)

<a name="getAnalyticsUsersAggregatesJob"></a>

# AsyncQueryStatus getAnalyticsUsersAggregatesJob(jobId)


GET /api/v2/analytics/users/aggregates/jobs/{jobId}

Get status for async query for user aggregates

getAnalyticsUsersAggregatesJob is a preview method and is subject to both breaking and non-breaking changes at any time without notice

Requires ANY permissions:

* analytics:userAggregate:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.UsersApi();

let jobId = "jobId_example"; // String | jobId

apiInstance.getAnalyticsUsersAggregatesJob(jobId)
  .then((data) => {
    console.log(`getAnalyticsUsersAggregatesJob success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getAnalyticsUsersAggregatesJob');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **jobId** | **String** | jobId |  |
{: class="table table-striped"}

### Return type

**AsyncQueryStatus**

<a name="getAnalyticsUsersAggregatesJobResults"></a>

# UserAsyncAggregateQueryResponse getAnalyticsUsersAggregatesJobResults(jobId, opts)


GET /api/v2/analytics/users/aggregates/jobs/{jobId}/results

Fetch a page of results for an async aggregates query

getAnalyticsUsersAggregatesJobResults is a preview method and is subject to both breaking and non-breaking changes at any time without notice

Requires ANY permissions:

* analytics:userAggregate:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.UsersApi();

let jobId = "jobId_example"; // String | jobId
let opts = { 
  'cursor': "cursor_example" // String | Cursor token to retrieve next page
};

apiInstance.getAnalyticsUsersAggregatesJobResults(jobId, opts)
  .then((data) => {
    console.log(`getAnalyticsUsersAggregatesJobResults success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getAnalyticsUsersAggregatesJobResults');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **jobId** | **String** | jobId |  |
 **cursor** | **String** | Cursor token to retrieve next page | [optional]  |
{: class="table table-striped"}

### Return type

**UserAsyncAggregateQueryResponse**

<a name="getAnalyticsUsersDetailsJob"></a>

# AsyncQueryStatus getAnalyticsUsersDetailsJob(jobId)


GET /api/v2/analytics/users/details/jobs/{jobId}

Get status for async query for user details

Requires ANY permissions:

* analytics:userDetail:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.UsersApi();

let jobId = "jobId_example"; // String | jobId

apiInstance.getAnalyticsUsersDetailsJob(jobId)
  .then((data) => {
    console.log(`getAnalyticsUsersDetailsJob success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getAnalyticsUsersDetailsJob');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **jobId** | **String** | jobId |  |
{: class="table table-striped"}

### Return type

**AsyncQueryStatus**

<a name="getAnalyticsUsersDetailsJobResults"></a>

# AnalyticsUserDetailsAsyncQueryResponse getAnalyticsUsersDetailsJobResults(jobId, opts)


GET /api/v2/analytics/users/details/jobs/{jobId}/results

Fetch a page of results for an async query

Requires ANY permissions:

* analytics:userDetail:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.UsersApi();

let jobId = "jobId_example"; // String | jobId
let opts = { 
  'cursor': "cursor_example", // String | Indicates where to resume query results (not required for first page)
  'pageSize': 3.4 // Number | The desired maximum number of results
};

apiInstance.getAnalyticsUsersDetailsJobResults(jobId, opts)
  .then((data) => {
    console.log(`getAnalyticsUsersDetailsJobResults success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getAnalyticsUsersDetailsJobResults');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **jobId** | **String** | jobId |  |
 **cursor** | **String** | Indicates where to resume query results (not required for first page) | [optional]  |
 **pageSize** | **Number** | The desired maximum number of results | [optional]  |
{: class="table table-striped"}

### Return type

**AnalyticsUserDetailsAsyncQueryResponse**

<a name="getAnalyticsUsersDetailsJobsAvailability"></a>

# DataAvailabilityResponse getAnalyticsUsersDetailsJobsAvailability()


GET /api/v2/analytics/users/details/jobs/availability

Lookup the datalake availability date and time

Requires ANY permissions:

* analytics:userDetail:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.UsersApi();

apiInstance.getAnalyticsUsersDetailsJobsAvailability()
  .then((data) => {
    console.log(`getAnalyticsUsersDetailsJobsAvailability success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getAnalyticsUsersDetailsJobsAvailability');
    console.error(err);
  });
```

### Parameters

This endpoint does not need any parameter.


### Return type

**DataAvailabilityResponse**

<a name="getAuthorizationDivisionspermittedMe"></a>

# [AuthzDivision] getAuthorizationDivisionspermittedMe(permission, opts)

<span style="background-color: #f0ad4e;display: inline-block;padding: 7px;font-weight: bold;line-height: 1;color: #ffffff;text-align: center;white-space: nowrap;vertical-align: baseline;border-radius: .25em;margin: 10px 0;">DEPRECATED</span>

GET /api/v2/authorization/divisionspermitted/me

Returns which divisions the current user has the given permission in.

This route is deprecated, use authorization/divisionspermitted/paged/me instead.

Requires NO permissions:

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.UsersApi();

let permission = "permission_example"; // String | The permission string, including the object to access, e.g. routing:queue:view
let opts = { 
  'name': "name_example" // String | Search term to filter by division name
};

apiInstance.getAuthorizationDivisionspermittedMe(permission, opts)
  .then((data) => {
    console.log(`getAuthorizationDivisionspermittedMe success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getAuthorizationDivisionspermittedMe');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **permission** | **String** | The permission string, including the object to access, e.g. routing:queue:view |  |
 **name** | **String** | Search term to filter by division name | [optional]  |
{: class="table table-striped"}

### Return type

**[AuthzDivision]**

<a name="getAuthorizationDivisionspermittedPagedMe"></a>

# DivsPermittedEntityListing getAuthorizationDivisionspermittedPagedMe(permission, opts)


GET /api/v2/authorization/divisionspermitted/paged/me

Returns which divisions the current user has the given permission in.

Requires NO permissions:

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.UsersApi();

let permission = "permission_example"; // String | The permission string, including the object to access, e.g. routing:queue:view
let opts = { 
  'pageNumber': 1, // Number | Page number
  'pageSize': 25 // Number | Page size
};

apiInstance.getAuthorizationDivisionspermittedPagedMe(permission, opts)
  .then((data) => {
    console.log(`getAuthorizationDivisionspermittedPagedMe success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getAuthorizationDivisionspermittedPagedMe');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **permission** | **String** | The permission string, including the object to access, e.g. routing:queue:view |  |
 **pageNumber** | **Number** | Page number | [optional] [default to 1] |
 **pageSize** | **Number** | Page size | [optional] [default to 25] |
{: class="table table-striped"}

### Return type

**DivsPermittedEntityListing**

<a name="getAuthorizationDivisionspermittedPagedSubjectId"></a>

# DivsPermittedEntityListing getAuthorizationDivisionspermittedPagedSubjectId(subjectId, permission, opts)

<span style="background-color: #f0ad4e;display: inline-block;padding: 7px;font-weight: bold;line-height: 1;color: #ffffff;text-align: center;white-space: nowrap;vertical-align: baseline;border-radius: .25em;margin: 10px 0;">DEPRECATED</span>

GET /api/v2/authorization/divisionspermitted/paged/{subjectId}

Returns which divisions the specified user has the given permission in.

This route is deprecated, use authorization/divisionspermitted/paged/me instead.

Requires NO permissions:

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.UsersApi();

let subjectId = "subjectId_example"; // String | Subject ID (user or group)
let permission = "permission_example"; // String | The permission string, including the object to access, e.g. routing:queue:view
let opts = { 
  'pageNumber': 1, // Number | Page number
  'pageSize': 25 // Number | Page size
};

apiInstance.getAuthorizationDivisionspermittedPagedSubjectId(subjectId, permission, opts)
  .then((data) => {
    console.log(`getAuthorizationDivisionspermittedPagedSubjectId success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getAuthorizationDivisionspermittedPagedSubjectId');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **subjectId** | **String** | Subject ID (user or group) |  |
 **permission** | **String** | The permission string, including the object to access, e.g. routing:queue:view |  |
 **pageNumber** | **Number** | Page number | [optional] [default to 1] |
 **pageSize** | **Number** | Page size | [optional] [default to 25] |
{: class="table table-striped"}

### Return type

**DivsPermittedEntityListing**

<a name="getAuthorizationSubject"></a>

# AuthzSubject getAuthorizationSubject(subjectId)


GET /api/v2/authorization/subjects/{subjectId}

Returns a listing of roles and permissions for a user.

Requires ANY permissions:

* authorization:grant:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.UsersApi();

let subjectId = "subjectId_example"; // String | Subject ID (user or group)

apiInstance.getAuthorizationSubject(subjectId)
  .then((data) => {
    console.log(`getAuthorizationSubject success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getAuthorizationSubject');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **subjectId** | **String** | Subject ID (user or group) |  |
{: class="table table-striped"}

### Return type

**AuthzSubject**

<a name="getAuthorizationSubjectsMe"></a>

# AuthzSubject getAuthorizationSubjectsMe()


GET /api/v2/authorization/subjects/me

Returns a listing of roles and permissions for the currently authenticated user.

Requires NO permissions:

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.UsersApi();

apiInstance.getAuthorizationSubjectsMe()
  .then((data) => {
    console.log(`getAuthorizationSubjectsMe success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getAuthorizationSubjectsMe');
    console.error(err);
  });
```

### Parameters

This endpoint does not need any parameter.


### Return type

**AuthzSubject**

<a name="getFieldconfig"></a>

# FieldConfig getFieldconfig(type)

<span style="background-color: #f0ad4e;display: inline-block;padding: 7px;font-weight: bold;line-height: 1;color: #ffffff;text-align: center;white-space: nowrap;vertical-align: baseline;border-radius: .25em;margin: 10px 0;">DEPRECATED</span>

GET /api/v2/fieldconfig

Fetch field config for an entity type

Requires NO permissions:

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.UsersApi();

let type = "type_example"; // String | Field type

apiInstance.getFieldconfig(type)
  .then((data) => {
    console.log(`getFieldconfig success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getFieldconfig');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **type** | **String** | Field type | <br />**Values**: person, group, org, externalContact |
{: class="table table-striped"}

### Return type

**FieldConfig**

<a name="getProfilesUsers"></a>

# UserProfileEntityListing getProfilesUsers(opts)

<span style="background-color: #f0ad4e;display: inline-block;padding: 7px;font-weight: bold;line-height: 1;color: #ffffff;text-align: center;white-space: nowrap;vertical-align: baseline;border-radius: .25em;margin: 10px 0;">DEPRECATED</span>

GET /api/v2/profiles/users

Get a user profile listing

This api is deprecated. User /api/v2/users

Requires NO permissions:

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.UsersApi();

let opts = { 
  'pageSize': 25, // Number | Page size
  'pageNumber': 1, // Number | Page number
  'id': ["id_example"], // [String] | id
  'jid': ["jid_example"], // [String] | jid
  'sortOrder': "ASC", // String | Ascending or descending sort order
  'expand': ["expand_example"], // [String] | Which fields, if any, to expand
  'integrationPresenceSource': "integrationPresenceSource_example" // String | Gets an integration presence for users instead of their defaults. This parameter will only be used when presence is provided as an expand.
};

apiInstance.getProfilesUsers(opts)
  .then((data) => {
    console.log(`getProfilesUsers success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getProfilesUsers');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **pageSize** | **Number** | Page size | [optional] [default to 25] |
 **pageNumber** | **Number** | Page number | [optional] [default to 1] |
 **id** | **[String]** | id | [optional]  |
 **jid** | **[String]** | jid | [optional]  |
 **sortOrder** | **String** | Ascending or descending sort order | [optional] [default to ASC]<br />**Values**: ascending, descending |
 **expand** | **[String]** | Which fields, if any, to expand | [optional] <br />**Values**: routingStatus, presence, integrationPresence, conversationSummary, outOfOffice, geolocation, station, authorization |
 **integrationPresenceSource** | **String** | Gets an integration presence for users instead of their defaults. This parameter will only be used when presence is provided as an expand. | [optional] <br />**Values**: MicrosoftTeams, ZoomPhone, EightByEight |
{: class="table table-striped"}

### Return type

**UserProfileEntityListing**

<a name="getRoutingUserUtilization"></a>

# AgentMaxUtilization getRoutingUserUtilization(userId)


GET /api/v2/routing/users/{userId}/utilization

Get the user's max utilization settings.  If not configured, the organization-wide default is returned.

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

let apiInstance = new platformClient.UsersApi();

let userId = "userId_example"; // String | User ID

apiInstance.getRoutingUserUtilization(userId)
  .then((data) => {
    console.log(`getRoutingUserUtilization success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getRoutingUserUtilization');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **userId** | **String** | User ID |  |
{: class="table table-striped"}

### Return type

**AgentMaxUtilization**

<a name="getUser"></a>

# User getUser(userId, opts)


GET /api/v2/users/{userId}

Get user.

Requires NO permissions:

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.UsersApi();

let userId = "userId_example"; // String | User ID
let opts = { 
  'expand': ["expand_example"], // [String] | Which fields, if any, to expand
  'integrationPresenceSource': "integrationPresenceSource_example", // String | Gets an integration presence for a user instead of their default.
  'state': "active" // String | Search for a user with this state
};

apiInstance.getUser(userId, opts)
  .then((data) => {
    console.log(`getUser success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getUser');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **userId** | **String** | User ID |  |
 **expand** | **[String]** | Which fields, if any, to expand | [optional] <br />**Values**: routingStatus, presence, integrationPresence, conversationSummary, outOfOffice, geolocation, station, authorization, lasttokenissued, dateLastLogin, authorization.unusedRoles, team, profileSkills, certifications, locations, groups, skills, languages, languagePreference, employerInfo, biography |
 **integrationPresenceSource** | **String** | Gets an integration presence for a user instead of their default. | [optional] <br />**Values**: MicrosoftTeams, ZoomPhone, EightByEight |
 **state** | **String** | Search for a user with this state | [optional] [default to active]<br />**Values**: active, deleted |
{: class="table table-striped"}

### Return type

**User**

<a name="getUserAdjacents"></a>

# Adjacents getUserAdjacents(userId, opts)


GET /api/v2/users/{userId}/adjacents

Get adjacents

Requires NO permissions:

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.UsersApi();

let userId = "userId_example"; // String | User ID
let opts = { 
  'expand': ["expand_example"] // [String] | Which fields, if any, to expand
};

apiInstance.getUserAdjacents(userId, opts)
  .then((data) => {
    console.log(`getUserAdjacents success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getUserAdjacents');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **userId** | **String** | User ID |  |
 **expand** | **[String]** | Which fields, if any, to expand | [optional] <br />**Values**: routingStatus, presence, integrationPresence, conversationSummary, outOfOffice, geolocation, station, authorization, lasttokenissued, dateLastLogin, authorization.unusedRoles, team, profileSkills, certifications, locations, groups, skills, languages, languagePreference, employerInfo, biography |
{: class="table table-striped"}

### Return type

**Adjacents**

<a name="getUserCallforwarding"></a>

# CallForwarding getUserCallforwarding(userId)


GET /api/v2/users/{userId}/callforwarding

Get a user's CallForwarding

Requires NO permissions:

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.UsersApi();

let userId = "userId_example"; // String | User ID

apiInstance.getUserCallforwarding(userId)
  .then((data) => {
    console.log(`getUserCallforwarding success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getUserCallforwarding');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **userId** | **String** | User ID |  |
{: class="table table-striped"}

### Return type

**CallForwarding**

<a name="getUserDirectreports"></a>

# [User] getUserDirectreports(userId, opts)


GET /api/v2/users/{userId}/directreports

Get direct reports

Requires NO permissions:

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.UsersApi();

let userId = "userId_example"; // String | User ID
let opts = { 
  'expand': ["expand_example"] // [String] | Which fields, if any, to expand
};

apiInstance.getUserDirectreports(userId, opts)
  .then((data) => {
    console.log(`getUserDirectreports success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getUserDirectreports');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **userId** | **String** | User ID |  |
 **expand** | **[String]** | Which fields, if any, to expand | [optional] <br />**Values**: routingStatus, presence, integrationPresence, conversationSummary, outOfOffice, geolocation, station, authorization, lasttokenissued, dateLastLogin, authorization.unusedRoles, team, profileSkills, certifications, locations, groups, skills, languages, languagePreference, employerInfo, biography |
{: class="table table-striped"}

### Return type

**[User]**

<a name="getUserFavorites"></a>

# UserEntityListing getUserFavorites(userId, opts)

<span style="background-color: #f0ad4e;display: inline-block;padding: 7px;font-weight: bold;line-height: 1;color: #ffffff;text-align: center;white-space: nowrap;vertical-align: baseline;border-radius: .25em;margin: 10px 0;">DEPRECATED</span>

GET /api/v2/users/{userId}/favorites

Deprecated; will be revived with new contract

Requires NO permissions:

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.UsersApi();

let userId = "userId_example"; // String | User ID
let opts = { 
  'pageSize': 25, // Number | Page size
  'pageNumber': 1, // Number | Page number
  'sortOrder': "ASC", // String | Sort order
  'expand': ["expand_example"] // [String] | Which fields, if any, to expand
};

apiInstance.getUserFavorites(userId, opts)
  .then((data) => {
    console.log(`getUserFavorites success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getUserFavorites');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **userId** | **String** | User ID |  |
 **pageSize** | **Number** | Page size | [optional] [default to 25] |
 **pageNumber** | **Number** | Page number | [optional] [default to 1] |
 **sortOrder** | **String** | Sort order | [optional] [default to ASC] |
 **expand** | **[String]** | Which fields, if any, to expand | [optional] <br />**Values**: routingStatus, presence, integrationPresence, conversationSummary, outOfOffice, geolocation, station, authorization, lasttokenissued, dateLastLogin, authorization.unusedRoles, team, profileSkills, certifications, locations, groups, skills, languages, languagePreference, employerInfo, biography |
{: class="table table-striped"}

### Return type

**UserEntityListing**

<a name="getUserGeolocation"></a>

# Geolocation getUserGeolocation(userId, clientId)


GET /api/v2/users/{userId}/geolocations/{clientId}

Get a user's Geolocation

Requires NO permissions:

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.UsersApi();

let userId = "userId_example"; // String | user Id
let clientId = "clientId_example"; // String | client Id

apiInstance.getUserGeolocation(userId, clientId)
  .then((data) => {
    console.log(`getUserGeolocation success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getUserGeolocation');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **userId** | **String** | user Id |  |
 **clientId** | **String** | client Id |  |
{: class="table table-striped"}

### Return type

**Geolocation**

<a name="getUserOutofoffice"></a>

# OutOfOffice getUserOutofoffice(userId)


GET /api/v2/users/{userId}/outofoffice

Get a OutOfOffice

Requires NO permissions:

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.UsersApi();

let userId = "userId_example"; // String | User ID

apiInstance.getUserOutofoffice(userId)
  .then((data) => {
    console.log(`getUserOutofoffice success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getUserOutofoffice');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **userId** | **String** | User ID |  |
{: class="table table-striped"}

### Return type

**OutOfOffice**

<a name="getUserProfile"></a>

# UserProfile getUserProfile(userId, opts)

<span style="background-color: #f0ad4e;display: inline-block;padding: 7px;font-weight: bold;line-height: 1;color: #ffffff;text-align: center;white-space: nowrap;vertical-align: baseline;border-radius: .25em;margin: 10px 0;">DEPRECATED</span>

GET /api/v2/users/{userId}/profile

Get user profile

This api has been deprecated. Use api/v2/users instead

Requires NO permissions:

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.UsersApi();

let userId = "userId_example"; // String | userId
let opts = { 
  'expand': ["expand_example"], // [String] | Which fields, if any, to expand
  'integrationPresenceSource': "integrationPresenceSource_example" // String | Gets an integration presence for a user instead of their default.
};

apiInstance.getUserProfile(userId, opts)
  .then((data) => {
    console.log(`getUserProfile success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getUserProfile');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **userId** | **String** | userId |  |
 **expand** | **[String]** | Which fields, if any, to expand | [optional] <br />**Values**: routingStatus, presence, integrationPresence, conversationSummary, outOfOffice, geolocation, station, authorization, lasttokenissued, dateLastLogin, authorization.unusedRoles, team |
 **integrationPresenceSource** | **String** | Gets an integration presence for a user instead of their default. | [optional] <br />**Values**: MicrosoftTeams, ZoomPhone, EightByEight |
{: class="table table-striped"}

### Return type

**UserProfile**

<a name="getUserProfileskills"></a>

# **[&#39;String&#39;]** getUserProfileskills(userId)


GET /api/v2/users/{userId}/profileskills

List profile skills for a user

Requires ANY permissions:

* directory:userProfile:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.UsersApi();

let userId = "userId_example"; // String | User ID

apiInstance.getUserProfileskills(userId)
  .then((data) => {
    console.log(`getUserProfileskills success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getUserProfileskills');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **userId** | **String** | User ID |  |
{: class="table table-striped"}

### Return type

**[&#39;String&#39;]**

<a name="getUserQueues"></a>

# UserQueueEntityListing getUserQueues(userId, opts)


GET /api/v2/users/{userId}/queues

Get queues for user

Requires ANY permissions:

* routing:queue:view
* routing:queue:join
* routing:queueMember:manage

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.UsersApi();

let userId = "userId_example"; // String | User ID
let opts = { 
  'pageSize': 25, // Number | Page size
  'pageNumber': 1, // Number | Page number
  'joined': true, // Boolean | Is joined to the queue
  'divisionId': ["divisionId_example"] // [String] | Division ID(s)
};

apiInstance.getUserQueues(userId, opts)
  .then((data) => {
    console.log(`getUserQueues success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getUserQueues');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **userId** | **String** | User ID |  |
 **pageSize** | **Number** | Page size | [optional] [default to 25] |
 **pageNumber** | **Number** | Page number | [optional] [default to 1] |
 **joined** | **Boolean** | Is joined to the queue | [optional] [default to true] |
 **divisionId** | **[String]** | Division ID(s) | [optional]  |
{: class="table table-striped"}

### Return type

**UserQueueEntityListing**

<a name="getUserRoles"></a>

# UserAuthorization getUserRoles(subjectId)


GET /api/v2/users/{subjectId}/roles

Returns a listing of roles and permissions for a user.

Requires ANY permissions:

* authorization:grant:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.UsersApi();

let subjectId = "subjectId_example"; // String | User ID

apiInstance.getUserRoles(subjectId)
  .then((data) => {
    console.log(`getUserRoles success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getUserRoles');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **subjectId** | **String** | User ID |  |
{: class="table table-striped"}

### Return type

**UserAuthorization**

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

let apiInstance = new platformClient.UsersApi();

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

let apiInstance = new platformClient.UsersApi();

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

<a name="getUserRoutingstatus"></a>

# RoutingStatus getUserRoutingstatus(userId)


GET /api/v2/users/{userId}/routingstatus

Fetch the routing status of a user

Requires NO permissions:

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.UsersApi();

let userId = "userId_example"; // String | User ID

apiInstance.getUserRoutingstatus(userId)
  .then((data) => {
    console.log(`getUserRoutingstatus success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getUserRoutingstatus');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **userId** | **String** | User ID |  |
{: class="table table-striped"}

### Return type

**RoutingStatus**

<a name="getUserSkillgroups"></a>

# UserSkillGroupEntityListing getUserSkillgroups(userId, opts)


GET /api/v2/users/{userId}/skillgroups

Get skill groups for a user

Requires ANY permissions:

* routing:skillGroup:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.UsersApi();

let userId = "userId_example"; // String | User ID
let opts = { 
  'pageSize': 25, // Number | Page size
  'after': "after_example", // String | The cursor that points to the next page
  'before': "before_example" // String | The cursor that points to the previous page
};

apiInstance.getUserSkillgroups(userId, opts)
  .then((data) => {
    console.log(`getUserSkillgroups success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getUserSkillgroups');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **userId** | **String** | User ID |  |
 **pageSize** | **Number** | Page size | [optional] [default to 25] |
 **after** | **String** | The cursor that points to the next page | [optional]  |
 **before** | **String** | The cursor that points to the previous page | [optional]  |
{: class="table table-striped"}

### Return type

**UserSkillGroupEntityListing**

<a name="getUserState"></a>

# UserState getUserState(userId)


GET /api/v2/users/{userId}/state

Get user state information.

Requires ANY permissions:

* directory:userStateChange:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.UsersApi();

let userId = "userId_example"; // String | User ID

apiInstance.getUserState(userId)
  .then((data) => {
    console.log(`getUserState success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getUserState');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **userId** | **String** | User ID |  |
{: class="table table-striped"}

### Return type

**UserState**

<a name="getUserStation"></a>

# UserStations getUserStation(userId)


GET /api/v2/users/{userId}/station

Get station information for user

Requires NO permissions:

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.UsersApi();

let userId = "userId_example"; // String | User ID

apiInstance.getUserStation(userId)
  .then((data) => {
    console.log(`getUserStation success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getUserStation');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **userId** | **String** | User ID |  |
{: class="table table-striped"}

### Return type

**UserStations**

<a name="getUserSuperiors"></a>

# [User] getUserSuperiors(userId, opts)


GET /api/v2/users/{userId}/superiors

Get superiors

Requires NO permissions:

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.UsersApi();

let userId = "userId_example"; // String | User ID
let opts = { 
  'expand': ["expand_example"] // [String] | Which fields, if any, to expand
};

apiInstance.getUserSuperiors(userId, opts)
  .then((data) => {
    console.log(`getUserSuperiors success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getUserSuperiors');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **userId** | **String** | User ID |  |
 **expand** | **[String]** | Which fields, if any, to expand | [optional] <br />**Values**: routingStatus, presence, integrationPresence, conversationSummary, outOfOffice, geolocation, station, authorization, lasttokenissued, dateLastLogin, authorization.unusedRoles, team, profileSkills, certifications, locations, groups, skills, languages, languagePreference, employerInfo, biography |
{: class="table table-striped"}

### Return type

**[User]**

<a name="getUserTrustors"></a>

# TrustorEntityListing getUserTrustors(userId, opts)


GET /api/v2/users/{userId}/trustors

List the organizations that have authorized/trusted the user.

Requires ALL permissions:

* authorization:orgTrustor:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.UsersApi();

let userId = "userId_example"; // String | User ID
let opts = { 
  'pageSize': 25, // Number | Page size
  'pageNumber': 1 // Number | Page number
};

apiInstance.getUserTrustors(userId, opts)
  .then((data) => {
    console.log(`getUserTrustors success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getUserTrustors');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **userId** | **String** | User ID |  |
 **pageSize** | **Number** | Page size | [optional] [default to 25] |
 **pageNumber** | **Number** | Page number | [optional] [default to 1] |
{: class="table table-striped"}

### Return type

**TrustorEntityListing**

<a name="getUsers"></a>

# UserEntityListing getUsers(opts)


GET /api/v2/users

Get the list of available users.

Requires NO permissions:

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.UsersApi();

let opts = { 
  'pageSize': 25, // Number | Page size
  'pageNumber': 1, // Number | Page number
  'id': ["id_example"], // [String] | A list of user IDs to fetch by bulk
  'jabberId': ["jabberId_example"], // [String] | A list of jabberIds to fetch by bulk (cannot be used with the id parameter)
  'sortOrder': "ASC", // String | Ascending or descending sort order
  'expand': ["expand_example"], // [String] | Which fields, if any, to expand
  'integrationPresenceSource': "integrationPresenceSource_example", // String | Gets an integration presence for users instead of their defaults. This parameter will only be used when presence is provided as an expand. When using this parameter the maximum number of users that can be returned is 100.
  'state': "active" // String | Only list users of this state
};

apiInstance.getUsers(opts)
  .then((data) => {
    console.log(`getUsers success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getUsers');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **pageSize** | **Number** | Page size | [optional] [default to 25] |
 **pageNumber** | **Number** | Page number | [optional] [default to 1] |
 **id** | **[String]** | A list of user IDs to fetch by bulk | [optional]  |
 **jabberId** | **[String]** | A list of jabberIds to fetch by bulk (cannot be used with the id parameter) | [optional]  |
 **sortOrder** | **String** | Ascending or descending sort order | [optional] [default to ASC]<br />**Values**: ascending, descending |
 **expand** | **[String]** | Which fields, if any, to expand | [optional] <br />**Values**: routingStatus, presence, integrationPresence, conversationSummary, outOfOffice, geolocation, station, authorization, lasttokenissued, dateLastLogin, authorization.unusedRoles, team, profileSkills, certifications, locations, groups, skills, languages, languagePreference, employerInfo, biography |
 **integrationPresenceSource** | **String** | Gets an integration presence for users instead of their defaults. This parameter will only be used when presence is provided as an expand. When using this parameter the maximum number of users that can be returned is 100. | [optional] <br />**Values**: MicrosoftTeams, ZoomPhone, EightByEight |
 **state** | **String** | Only list users of this state | [optional] [default to active]<br />**Values**: active, inactive, deleted, any |
{: class="table table-striped"}

### Return type

**UserEntityListing**

<a name="getUsersDevelopmentActivities"></a>

# DevelopmentActivityListing getUsersDevelopmentActivities(opts)


GET /api/v2/users/development/activities

Get list of Development Activities

Either moduleId or userId is required. Results are filtered based on the applicable permissions.

Requires ANY permissions:

* learning:assignment:view
* coaching:appointment:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.UsersApi();

let opts = { 
  'userId': ["userId_example"], // [String] | Specifies the list of user IDs to be queried, up to 100 user IDs. It searches for any relationship for the userId.
  'moduleId': "moduleId_example", // String | Specifies the ID of the learning module.
  'interval': "interval_example", // String | Specifies the dateDue range to be queried. Milliseconds will be truncated. A maximum of 1 year can be specified in the range. End date is not inclusive. Intervals are represented as an ISO-8601 string. For example: YYYY-MM-DDThh:mm:ss/YYYY-MM-DDThh:mm:ss
  'completionInterval': "completionInterval_example", // String | Specifies the range of completion dates to be used for filtering. A maximum of 1 year can be specified in the range. End date is not inclusive. Intervals are represented as an ISO-8601 string. For example: YYYY-MM-DDThh:mm:ss/YYYY-MM-DDThh:mm:ss
  'overdue': "Any", // String | Specifies if non-overdue, overdue, or all activities are returned. If not specified, all activities are returned
  'pass': "Any", // String | Specifies if only the failed (pass is False) or passed (pass is True) activities are returned. If pass is Any or if the pass parameter is not supplied, all activities are returned
  'pageSize': 25, // Number | Page size
  'pageNumber': 1, // Number | Page number
  'sortOrder': "Desc", // String | Specifies result set sort order sorted by the date due; if not specified, default sort order is descending (Desc)
  'types': ["types_example"], // [String] | Specifies the activity types.
  'statuses': ["statuses_example"], // [String] | Specifies the activity statuses to filter by
  'relationship': ["relationship_example"] // [String] | Specifies how the current user relation should be interpreted, and filters the activities returned to only the activities that have the specified relationship. If a value besides Attendee is specified, it will only return Coaching Appointments. If not specified, no filtering is applied.
};

apiInstance.getUsersDevelopmentActivities(opts)
  .then((data) => {
    console.log(`getUsersDevelopmentActivities success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getUsersDevelopmentActivities');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **userId** | **[String]** | Specifies the list of user IDs to be queried, up to 100 user IDs. It searches for any relationship for the userId. | [optional]  |
 **moduleId** | **String** | Specifies the ID of the learning module. | [optional]  |
 **interval** | **String** | Specifies the dateDue range to be queried. Milliseconds will be truncated. A maximum of 1 year can be specified in the range. End date is not inclusive. Intervals are represented as an ISO-8601 string. For example: YYYY-MM-DDThh:mm:ss/YYYY-MM-DDThh:mm:ss | [optional]  |
 **completionInterval** | **String** | Specifies the range of completion dates to be used for filtering. A maximum of 1 year can be specified in the range. End date is not inclusive. Intervals are represented as an ISO-8601 string. For example: YYYY-MM-DDThh:mm:ss/YYYY-MM-DDThh:mm:ss | [optional]  |
 **overdue** | **String** | Specifies if non-overdue, overdue, or all activities are returned. If not specified, all activities are returned | [optional] [default to Any]<br />**Values**: True, False, Any |
 **pass** | **String** | Specifies if only the failed (pass is False) or passed (pass is True) activities are returned. If pass is Any or if the pass parameter is not supplied, all activities are returned | [optional] [default to Any]<br />**Values**: True, False, Any |
 **pageSize** | **Number** | Page size | [optional] [default to 25] |
 **pageNumber** | **Number** | Page number | [optional] [default to 1] |
 **sortOrder** | **String** | Specifies result set sort order sorted by the date due; if not specified, default sort order is descending (Desc) | [optional] [default to Desc]<br />**Values**: Asc, Desc |
 **types** | **[String]** | Specifies the activity types. | [optional] <br />**Values**: Informational, Coaching, AssessedContent, Assessment |
 **statuses** | **[String]** | Specifies the activity statuses to filter by | [optional] <br />**Values**: Planned, InProgress, Completed, InvalidSchedule |
 **relationship** | **[String]** | Specifies how the current user relation should be interpreted, and filters the activities returned to only the activities that have the specified relationship. If a value besides Attendee is specified, it will only return Coaching Appointments. If not specified, no filtering is applied. | [optional] <br />**Values**: Creator, Facilitator, Attendee |
{: class="table table-striped"}

### Return type

**DevelopmentActivityListing**

<a name="getUsersDevelopmentActivitiesMe"></a>

# DevelopmentActivityListing getUsersDevelopmentActivitiesMe(opts)


GET /api/v2/users/development/activities/me

Get list of Development Activities for current user

Results are filtered based on the applicable permissions.

Requires NO permissions:

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.UsersApi();

let opts = { 
  'moduleId': "moduleId_example", // String | Specifies the ID of the learning module.
  'interval': "interval_example", // String | Specifies the dateDue range to be queried. Milliseconds will be truncated. A maximum of 1 year can be specified in the range. End date is not inclusive. Intervals are represented as an ISO-8601 string. For example: YYYY-MM-DDThh:mm:ss/YYYY-MM-DDThh:mm:ss
  'completionInterval': "completionInterval_example", // String | Specifies the range of completion dates to be used for filtering. A maximum of 1 year can be specified in the range. End date is not inclusive. Intervals are represented as an ISO-8601 string. For example: YYYY-MM-DDThh:mm:ss/YYYY-MM-DDThh:mm:ss
  'overdue': "Any", // String | Specifies if non-overdue, overdue, or all activities are returned. If not specified, all activities are returned
  'pass': "Any", // String | Specifies if only the failed (pass is False) or passed (pass is True) activities are returned. If pass is Any or if the pass parameter is not supplied, all activities are returned
  'pageSize': 25, // Number | Page size
  'pageNumber': 1, // Number | Page number
  'sortOrder': "Desc", // String | Specifies result set sort order sorted by the date due; if not specified, default sort order is descending (Desc)
  'types': ["types_example"], // [String] | Specifies the activity types.
  'statuses': ["statuses_example"], // [String] | Specifies the activity statuses to filter by
  'relationship': ["relationship_example"] // [String] | Specifies how the current user relation should be interpreted, and filters the activities returned to only the activities that have the specified relationship. If a value besides Attendee is specified, it will only return Coaching Appointments. If not specified, no filtering is applied.
};

apiInstance.getUsersDevelopmentActivitiesMe(opts)
  .then((data) => {
    console.log(`getUsersDevelopmentActivitiesMe success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getUsersDevelopmentActivitiesMe');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **moduleId** | **String** | Specifies the ID of the learning module. | [optional]  |
 **interval** | **String** | Specifies the dateDue range to be queried. Milliseconds will be truncated. A maximum of 1 year can be specified in the range. End date is not inclusive. Intervals are represented as an ISO-8601 string. For example: YYYY-MM-DDThh:mm:ss/YYYY-MM-DDThh:mm:ss | [optional]  |
 **completionInterval** | **String** | Specifies the range of completion dates to be used for filtering. A maximum of 1 year can be specified in the range. End date is not inclusive. Intervals are represented as an ISO-8601 string. For example: YYYY-MM-DDThh:mm:ss/YYYY-MM-DDThh:mm:ss | [optional]  |
 **overdue** | **String** | Specifies if non-overdue, overdue, or all activities are returned. If not specified, all activities are returned | [optional] [default to Any]<br />**Values**: True, False, Any |
 **pass** | **String** | Specifies if only the failed (pass is False) or passed (pass is True) activities are returned. If pass is Any or if the pass parameter is not supplied, all activities are returned | [optional] [default to Any]<br />**Values**: True, False, Any |
 **pageSize** | **Number** | Page size | [optional] [default to 25] |
 **pageNumber** | **Number** | Page number | [optional] [default to 1] |
 **sortOrder** | **String** | Specifies result set sort order sorted by the date due; if not specified, default sort order is descending (Desc) | [optional] [default to Desc]<br />**Values**: Asc, Desc |
 **types** | **[String]** | Specifies the activity types. | [optional] <br />**Values**: Informational, Coaching, AssessedContent, Assessment |
 **statuses** | **[String]** | Specifies the activity statuses to filter by | [optional] <br />**Values**: Planned, InProgress, Completed, InvalidSchedule |
 **relationship** | **[String]** | Specifies how the current user relation should be interpreted, and filters the activities returned to only the activities that have the specified relationship. If a value besides Attendee is specified, it will only return Coaching Appointments. If not specified, no filtering is applied. | [optional] <br />**Values**: Creator, Facilitator, Attendee |
{: class="table table-striped"}

### Return type

**DevelopmentActivityListing**

<a name="getUsersDevelopmentActivity"></a>

# DevelopmentActivity getUsersDevelopmentActivity(activityId, type)


GET /api/v2/users/development/activities/{activityId}

Get a Development Activity

Permission not required if you are the attendee, creator or facilitator of the coaching appointment or you are the assigned user of the learning assignment.

Requires ANY permissions:

* learning:assignment:view
* coaching:appointment:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.UsersApi();

let activityId = "activityId_example"; // String | Specifies the activity ID, maps to either assignment or appointment ID
let type = "type_example"; // String | Specifies the activity type.

apiInstance.getUsersDevelopmentActivity(activityId, type)
  .then((data) => {
    console.log(`getUsersDevelopmentActivity success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getUsersDevelopmentActivity');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **activityId** | **String** | Specifies the activity ID, maps to either assignment or appointment ID |  |
 **type** | **String** | Specifies the activity type. | <br />**Values**: Informational, Coaching, AssessedContent, Assessment, External |
{: class="table table-striped"}

### Return type

**DevelopmentActivity**

<a name="getUsersMe"></a>

# UserMe getUsersMe(opts)


GET /api/v2/users/me

Get current user details.

This request is not valid when using the Client Credentials OAuth grant.

Requires NO permissions:

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.UsersApi();

let opts = { 
  'expand': ["expand_example"], // [String] | Which fields, if any, to expand.
  'integrationPresenceSource': "integrationPresenceSource_example" // String | Get your presence for a given integration. This parameter will only be used when presence is provided as an expand.
};

apiInstance.getUsersMe(opts)
  .then((data) => {
    console.log(`getUsersMe success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getUsersMe');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **expand** | **[String]** | Which fields, if any, to expand. | [optional] <br />**Values**: routingStatus, presence, integrationPresence, conversationSummary, outOfOffice, geolocation, station, authorization, lasttokenissued, dateLastLogin, authorization.unusedRoles, team, profileSkills, certifications, locations, groups, skills, languages, languagePreference, employerInfo, biography, date, geolocationsettings, organization, presencedefinitions, divisionedpresencedefinitions, locationdefinitions, orgauthorization, orgproducts, favorites, superiors, directreports, adjacents, routingskills, routinglanguages, fieldconfigs, token, trustors, logCapture |
 **integrationPresenceSource** | **String** | Get your presence for a given integration. This parameter will only be used when presence is provided as an expand. | [optional] <br />**Values**: MicrosoftTeams, ZoomPhone, EightByEight |
{: class="table table-striped"}

### Return type

**UserMe**

<a name="getUsersSearch"></a>

# UsersSearchResponse getUsersSearch(q64, opts)


GET /api/v2/users/search

Search users using the q64 value returned from a previous search

Requires ANY permissions:

* directory:user:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.UsersApi();

let q64 = "q64_example"; // String | q64
let opts = { 
  'expand': ["expand_example"], // [String] | expand
  'integrationPresenceSource': "integrationPresenceSource_example" // String | integrationPresenceSource
};

apiInstance.getUsersSearch(q64, opts)
  .then((data) => {
    console.log(`getUsersSearch success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getUsersSearch');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **q64** | **String** | q64 |  |
 **expand** | **[String]** | expand | [optional]  |
 **integrationPresenceSource** | **String** | integrationPresenceSource | [optional] <br />**Values**: MicrosoftTeams, ZoomPhone, EightByEight |
{: class="table table-striped"}

### Return type

**UsersSearchResponse**

<a name="patchUser"></a>

# User patchUser(userId, body)


PATCH /api/v2/users/{userId}

Update user

Requires ANY permissions:

* directory:user:edit
* directory:organization:admin

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.UsersApi();

let userId = "userId_example"; // String | User ID
let body = {}; // Object | User

apiInstance.patchUser(userId, body)
  .then((data) => {
    console.log(`patchUser success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling patchUser');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **userId** | **String** | User ID |  |
 **body** | **Object** | User |  |
{: class="table table-striped"}

### Return type

**User**

<a name="patchUserCallforwarding"></a>

# CallForwarding patchUserCallforwarding(userId, body)


PATCH /api/v2/users/{userId}/callforwarding

Patch a user's CallForwarding

Requires ANY permissions:

* conversation:callForwarding:edit

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.UsersApi();

let userId = "userId_example"; // String | User ID
let body = {}; // Object | Call forwarding

apiInstance.patchUserCallforwarding(userId, body)
  .then((data) => {
    console.log(`patchUserCallforwarding success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling patchUserCallforwarding');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **userId** | **String** | User ID |  |
 **body** | **Object** | Call forwarding |  |
{: class="table table-striped"}

### Return type

**CallForwarding**

<a name="patchUserGeolocation"></a>

# Geolocation patchUserGeolocation(userId, clientId, body)


PATCH /api/v2/users/{userId}/geolocations/{clientId}

Patch a user's Geolocation

The geolocation object can be patched one of three ways. Option 1: Set the primary property to true. This will set the client as the users primary geolocation source.  Option 2: Provide the latitude and longitude values.  This will enqueue an asynchronous update of the city, region, and country, generating a notification. A subsequent GET operation will include the new values for city, region and country.  Option 3:  Provide the city, region, country values.  Option 1 can be combined with Option 2 or Option 3.  For example, update the client as primary and provide latitude and longitude values.

Requires NO permissions:

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.UsersApi();

let userId = "userId_example"; // String | user Id
let clientId = "clientId_example"; // String | client Id
let body = {}; // Object | Geolocation

apiInstance.patchUserGeolocation(userId, clientId, body)
  .then((data) => {
    console.log(`patchUserGeolocation success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling patchUserGeolocation');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **userId** | **String** | user Id |  |
 **clientId** | **String** | client Id |  |
 **body** | **Object** | Geolocation |  |
{: class="table table-striped"}

### Return type

**Geolocation**

<a name="patchUserQueue"></a>

# UserQueue patchUserQueue(queueId, userId, body)


PATCH /api/v2/users/{userId}/queues/{queueId}

Join or unjoin a queue for a user

Requires ANY permissions:

* routing:queue:join
* routing:queueMember:manage

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.UsersApi();

let queueId = "queueId_example"; // String | Queue ID
let userId = "userId_example"; // String | User ID
let body = {}; // Object | Queue Member

apiInstance.patchUserQueue(queueId, userId, body)
  .then((data) => {
    console.log(`patchUserQueue success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling patchUserQueue');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **queueId** | **String** | Queue ID |  |
 **userId** | **String** | User ID |  |
 **body** | **Object** | Queue Member |  |
{: class="table table-striped"}

### Return type

**UserQueue**

<a name="patchUserQueues"></a>

# UserQueueEntityListing patchUserQueues(userId, body, opts)


PATCH /api/v2/users/{userId}/queues

Join or unjoin a set of queues for a user

Requires ANY permissions:

* routing:queue:join
* routing:queueMember:manage

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.UsersApi();

let userId = "userId_example"; // String | User ID
let body = [{}]; // Object | User Queues
let opts = { 
  'divisionId': ["divisionId_example"] // [String] | Division ID(s)
};

apiInstance.patchUserQueues(userId, body, opts)
  .then((data) => {
    console.log(`patchUserQueues success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling patchUserQueues');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **userId** | **String** | User ID |  |
 **body** | **Object** | User Queues |  |
 **divisionId** | **[String]** | Division ID(s) | [optional]  |
{: class="table table-striped"}

### Return type

**UserQueueEntityListing**

<a name="patchUserRoutinglanguage"></a>

# UserRoutingLanguage patchUserRoutinglanguage(userId, languageId, body)


PATCH /api/v2/users/{userId}/routinglanguages/{languageId}

Update routing language proficiency or state.

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

let apiInstance = new platformClient.UsersApi();

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

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.UsersApi();

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

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.UsersApi();

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

<a name="patchUsersBulk"></a>

# UserEntityListing patchUsersBulk(body)


PATCH /api/v2/users/bulk

Update bulk acd autoanswer on users

Requires ANY permissions:

* directory:user:edit
* directory:organization:admin

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.UsersApi();

let body = [{}]; // Object | Users

apiInstance.patchUsersBulk(body)
  .then((data) => {
    console.log(`patchUsersBulk success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling patchUsersBulk');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **body** | **Object** | Users |  |
{: class="table table-striped"}

### Return type

**UserEntityListing**

<a name="postAnalyticsUsersActivityQuery"></a>

# UserActivityResponse postAnalyticsUsersActivityQuery(body, opts)


POST /api/v2/analytics/users/activity/query

Query for user activity observations

postAnalyticsUsersActivityQuery is a preview method and is subject to both breaking and non-breaking changes at any time without notice

Requires ANY permissions:

* analytics:userObservation:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.UsersApi();

let body = {}; // Object | query
let opts = { 
  'pageSize': 3.4, // Number | The desired page size
  'pageNumber': 3.4 // Number | The desired page number
};

apiInstance.postAnalyticsUsersActivityQuery(body, opts)
  .then((data) => {
    console.log(`postAnalyticsUsersActivityQuery success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling postAnalyticsUsersActivityQuery');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **body** | **Object** | query |  |
 **pageSize** | **Number** | The desired page size | [optional]  |
 **pageNumber** | **Number** | The desired page number | [optional]  |
{: class="table table-striped"}

### Return type

**UserActivityResponse**

<a name="postAnalyticsUsersAggregatesJobs"></a>

# AsyncQueryResponse postAnalyticsUsersAggregatesJobs(body)


POST /api/v2/analytics/users/aggregates/jobs

Query for user aggregates asynchronously

postAnalyticsUsersAggregatesJobs is a preview method and is subject to both breaking and non-breaking changes at any time without notice

Requires ANY permissions:

* analytics:userAggregate:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.UsersApi();

let body = {}; // Object | query

apiInstance.postAnalyticsUsersAggregatesJobs(body)
  .then((data) => {
    console.log(`postAnalyticsUsersAggregatesJobs success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling postAnalyticsUsersAggregatesJobs');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **body** | **Object** | query |  |
{: class="table table-striped"}

### Return type

**AsyncQueryResponse**

<a name="postAnalyticsUsersAggregatesQuery"></a>

# UserAggregateQueryResponse postAnalyticsUsersAggregatesQuery(body)


POST /api/v2/analytics/users/aggregates/query

Query for user aggregates

Requires ANY permissions:

* analytics:userAggregate:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.UsersApi();

let body = {}; // Object | query

apiInstance.postAnalyticsUsersAggregatesQuery(body)
  .then((data) => {
    console.log(`postAnalyticsUsersAggregatesQuery success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling postAnalyticsUsersAggregatesQuery');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **body** | **Object** | query |  |
{: class="table table-striped"}

### Return type

**UserAggregateQueryResponse**

<a name="postAnalyticsUsersDetailsJobs"></a>

# AsyncQueryResponse postAnalyticsUsersDetailsJobs(body)


POST /api/v2/analytics/users/details/jobs

Query for user details asynchronously

Requires ANY permissions:

* analytics:userDetail:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.UsersApi();

let body = {}; // Object | query

apiInstance.postAnalyticsUsersDetailsJobs(body)
  .then((data) => {
    console.log(`postAnalyticsUsersDetailsJobs success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling postAnalyticsUsersDetailsJobs');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **body** | **Object** | query |  |
{: class="table table-striped"}

### Return type

**AsyncQueryResponse**

<a name="postAnalyticsUsersDetailsQuery"></a>

# AnalyticsUserDetailsQueryResponse postAnalyticsUsersDetailsQuery(body)


POST /api/v2/analytics/users/details/query

Query for user details

Requires ANY permissions:

* analytics:userDetail:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.UsersApi();

let body = {}; // Object | query

apiInstance.postAnalyticsUsersDetailsQuery(body)
  .then((data) => {
    console.log(`postAnalyticsUsersDetailsQuery success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling postAnalyticsUsersDetailsQuery');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **body** | **Object** | query |  |
{: class="table table-striped"}

### Return type

**AnalyticsUserDetailsQueryResponse**

<a name="postAnalyticsUsersObservationsQuery"></a>

# UserObservationQueryResponse postAnalyticsUsersObservationsQuery(body)


POST /api/v2/analytics/users/observations/query

Query for user observations

Requires ANY permissions:

* analytics:userObservation:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.UsersApi();

let body = {}; // Object | query

apiInstance.postAnalyticsUsersObservationsQuery(body)
  .then((data) => {
    console.log(`postAnalyticsUsersObservationsQuery success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling postAnalyticsUsersObservationsQuery');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **body** | **Object** | query |  |
{: class="table table-striped"}

### Return type

**UserObservationQueryResponse**

<a name="postAuthorizationSubjectBulkadd"></a>

# void postAuthorizationSubjectBulkadd(subjectId, body, opts)


POST /api/v2/authorization/subjects/{subjectId}/bulkadd

Bulk-grant roles and divisions to a subject.

Requires ALL permissions:

* authorization:grant:add

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.UsersApi();

let subjectId = "subjectId_example"; // String | Subject ID (user or group)
let body = {}; // Object | Pairs of role and division IDs
let opts = { 
  'subjectType': "PC_USER" // String | what the type of the subject is (PC_GROUP, PC_USER or PC_OAUTH_CLIENT)
};

apiInstance.postAuthorizationSubjectBulkadd(subjectId, body, opts)
  .then(() => {
    console.log('postAuthorizationSubjectBulkadd returned successfully.');
  })
  .catch((err) => {
    console.log('There was a failure calling postAuthorizationSubjectBulkadd');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **subjectId** | **String** | Subject ID (user or group) |  |
 **body** | **Object** | Pairs of role and division IDs |  |
 **subjectType** | **String** | what the type of the subject is (PC_GROUP, PC_USER or PC_OAUTH_CLIENT) | [optional] [default to PC_USER] |
{: class="table table-striped"}

### Return type

void (no response body)

<a name="postAuthorizationSubjectBulkremove"></a>

# void postAuthorizationSubjectBulkremove(subjectId, body)


POST /api/v2/authorization/subjects/{subjectId}/bulkremove

Bulk-remove grants from a subject.

Requires ALL permissions:

* authorization:grant:delete

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.UsersApi();

let subjectId = "subjectId_example"; // String | Subject ID (user or group)
let body = {}; // Object | Pairs of role and division IDs

apiInstance.postAuthorizationSubjectBulkremove(subjectId, body)
  .then(() => {
    console.log('postAuthorizationSubjectBulkremove returned successfully.');
  })
  .catch((err) => {
    console.log('There was a failure calling postAuthorizationSubjectBulkremove');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **subjectId** | **String** | Subject ID (user or group) |  |
 **body** | **Object** | Pairs of role and division IDs |  |
{: class="table table-striped"}

### Return type

void (no response body)

<a name="postAuthorizationSubjectBulkreplace"></a>

# void postAuthorizationSubjectBulkreplace(subjectId, body, opts)


POST /api/v2/authorization/subjects/{subjectId}/bulkreplace

Replace subject's roles and divisions with the exact list supplied in the request.

This operation will not remove grants that are inherited from group membership. It will only set the grants directly applied to the subject.

Requires ALL permissions:

* authorization:grant:add
* authorization:grant:delete

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.UsersApi();

let subjectId = "subjectId_example"; // String | Subject ID (user or group)
let body = {}; // Object | Pairs of role and division IDs
let opts = { 
  'subjectType': "PC_USER" // String | what the type of the subject is (PC_GROUP, PC_USER or PC_OAUTH_CLIENT)
};

apiInstance.postAuthorizationSubjectBulkreplace(subjectId, body, opts)
  .then(() => {
    console.log('postAuthorizationSubjectBulkreplace returned successfully.');
  })
  .catch((err) => {
    console.log('There was a failure calling postAuthorizationSubjectBulkreplace');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **subjectId** | **String** | Subject ID (user or group) |  |
 **body** | **Object** | Pairs of role and division IDs |  |
 **subjectType** | **String** | what the type of the subject is (PC_GROUP, PC_USER or PC_OAUTH_CLIENT) | [optional] [default to PC_USER] |
{: class="table table-striped"}

### Return type

void (no response body)

<a name="postAuthorizationSubjectDivisionRole"></a>

# void postAuthorizationSubjectDivisionRole(subjectId, divisionId, roleId, opts)


POST /api/v2/authorization/subjects/{subjectId}/divisions/{divisionId}/roles/{roleId}

Make a grant of a role in a division

Requires ALL permissions:

* authorization:grant:add

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.UsersApi();

let subjectId = "subjectId_example"; // String | Subject ID (user or group)
let divisionId = "divisionId_example"; // String | the id of the division to which to make the grant
let roleId = "roleId_example"; // String | the id of the role to grant
let opts = { 
  'subjectType': "PC_USER" // String | what the type of the subject is: PC_GROUP, PC_USER or PC_OAUTH_CLIENT (note: for cross-org authorization, please use the Organization Authorization endpoints)
};

apiInstance.postAuthorizationSubjectDivisionRole(subjectId, divisionId, roleId, opts)
  .then(() => {
    console.log('postAuthorizationSubjectDivisionRole returned successfully.');
  })
  .catch((err) => {
    console.log('There was a failure calling postAuthorizationSubjectDivisionRole');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **subjectId** | **String** | Subject ID (user or group) |  |
 **divisionId** | **String** | the id of the division to which to make the grant |  |
 **roleId** | **String** | the id of the role to grant |  |
 **subjectType** | **String** | what the type of the subject is: PC_GROUP, PC_USER or PC_OAUTH_CLIENT (note: for cross-org authorization, please use the Organization Authorization endpoints) | [optional] [default to PC_USER] |
{: class="table table-striped"}

### Return type

void (no response body)

<a name="postUserExternalid"></a>

# [UserExternalIdentifier] postUserExternalid(userId, body)


POST /api/v2/users/{userId}/externalid

Create mapping between external identifier and user. Limit 100 per entity.

Authority Name and External key are case sensitive.

Requires ANY permissions:

* directory:user:edit

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.UsersApi();

let userId = "userId_example"; // String | User ID
let body = {}; // Object | 

apiInstance.postUserExternalid(userId, body)
  .then((data) => {
    console.log(`postUserExternalid success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling postUserExternalid');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **userId** | **String** | User ID |  |
 **body** | **Object** |  |  |
{: class="table table-striped"}

### Return type

**[UserExternalIdentifier]**

<a name="postUserInvite"></a>

# void postUserInvite(userId, opts)


POST /api/v2/users/{userId}/invite

Send an activation email to the user

Requires ANY permissions:

* directory:user:add

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.UsersApi();

let userId = "userId_example"; // String | User ID
let opts = { 
  'force': false // Boolean | Resend the invitation even if one is already outstanding
};

apiInstance.postUserInvite(userId, opts)
  .then(() => {
    console.log('postUserInvite returned successfully.');
  })
  .catch((err) => {
    console.log('There was a failure calling postUserInvite');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **userId** | **String** | User ID |  |
 **force** | **Boolean** | Resend the invitation even if one is already outstanding | [optional] [default to false] |
{: class="table table-striped"}

### Return type

void (no response body)

<a name="postUserPassword"></a>

# void postUserPassword(userId, body)


POST /api/v2/users/{userId}/password

Change a users password

Requires ANY permissions:

* directory:user:setPassword

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.UsersApi();

let userId = "userId_example"; // String | User ID
let body = {}; // Object | Password

apiInstance.postUserPassword(userId, body)
  .then(() => {
    console.log('postUserPassword returned successfully.');
  })
  .catch((err) => {
    console.log('There was a failure calling postUserPassword');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **userId** | **String** | User ID |  |
 **body** | **Object** | Password |  |
{: class="table table-striped"}

### Return type

void (no response body)

<a name="postUserRoutinglanguages"></a>

# UserRoutingLanguage postUserRoutinglanguages(userId, body)


POST /api/v2/users/{userId}/routinglanguages

Add routing language to user

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

let apiInstance = new platformClient.UsersApi();

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

Requires ALL permissions:

* routing:skill:assign

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.UsersApi();

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

<a name="postUsers"></a>

# User postUsers(body)


POST /api/v2/users

Create user

If user creation is successful but the provided password is invalid or configuration fails, POST api/v2/users/{userId}/password can be used to re-attempt password configuration.

Requires ANY permissions:

* directory:user:add

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.UsersApi();

let body = {}; // Object | User

apiInstance.postUsers(body)
  .then((data) => {
    console.log(`postUsers success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling postUsers');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **body** | **Object** | User |  |
{: class="table table-striped"}

### Return type

**User**

<a name="postUsersDevelopmentActivitiesAggregatesQuery"></a>

# DevelopmentActivityAggregateResponse postUsersDevelopmentActivitiesAggregatesQuery(body)


POST /api/v2/users/development/activities/aggregates/query

Retrieve aggregated development activity data

Results are filtered based on the applicable permissions.

Requires ANY permissions:

* learning:assignment:view
* coaching:appointment:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.UsersApi();

let body = {}; // Object | Aggregate Request

apiInstance.postUsersDevelopmentActivitiesAggregatesQuery(body)
  .then((data) => {
    console.log(`postUsersDevelopmentActivitiesAggregatesQuery success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling postUsersDevelopmentActivitiesAggregatesQuery');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **body** | **Object** | Aggregate Request |  |
{: class="table table-striped"}

### Return type

**DevelopmentActivityAggregateResponse**

<a name="postUsersMePassword"></a>

# void postUsersMePassword(body)


POST /api/v2/users/me/password

Change your password

Requires NO permissions:

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.UsersApi();

let body = {}; // Object | Password

apiInstance.postUsersMePassword(body)
  .then(() => {
    console.log('postUsersMePassword returned successfully.');
  })
  .catch((err) => {
    console.log('There was a failure calling postUsersMePassword');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **body** | **Object** | Password |  |
{: class="table table-striped"}

### Return type

void (no response body)

<a name="postUsersSearch"></a>

# UsersSearchResponse postUsersSearch(body)


POST /api/v2/users/search

Search users

Requires ANY permissions:

* directory:user:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.UsersApi();

let body = {}; // Object | Search request options

apiInstance.postUsersSearch(body)
  .then((data) => {
    console.log(`postUsersSearch success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling postUsersSearch');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **body** | **Object** | Search request options |  |
{: class="table table-striped"}

### Return type

**UsersSearchResponse**

<a name="postUsersSearchConversationTarget"></a>

# UsersSearchResponse postUsersSearchConversationTarget(body)


POST /api/v2/users/search/conversation/target

Search users as conversation targets

postUsersSearchConversationTarget is a preview method and is subject to both breaking and non-breaking changes at any time without notice

Requires ANY permissions:

* conversation:communication:target

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.UsersApi();

let body = {}; // Object | Search request options

apiInstance.postUsersSearchConversationTarget(body)
  .then((data) => {
    console.log(`postUsersSearchConversationTarget success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling postUsersSearchConversationTarget');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **body** | **Object** | Search request options |  |
{: class="table table-striped"}

### Return type

**UsersSearchResponse**

<a name="postUsersSearchQueuemembersManage"></a>

# UsersSearchResponse postUsersSearchQueuemembersManage(body)


POST /api/v2/users/search/queuemembers/manage

Search manage queue member

postUsersSearchQueuemembersManage is a preview method and is subject to both breaking and non-breaking changes at any time without notice

Requires ANY permissions:

* routing:queueMember:manage
* routing:queue:edit

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.UsersApi();

let body = {}; // Object | Search request options

apiInstance.postUsersSearchQueuemembersManage(body)
  .then((data) => {
    console.log(`postUsersSearchQueuemembersManage success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling postUsersSearchQueuemembersManage');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **body** | **Object** | Search request options |  |
{: class="table table-striped"}

### Return type

**UsersSearchResponse**

<a name="postUsersSearchTeamsAssign"></a>

# UsersSearchResponse postUsersSearchTeamsAssign(body)


POST /api/v2/users/search/teams/assign

Search users assigned to teams

Requires ANY permissions:

* groups:team:assign

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.UsersApi();

let body = {}; // Object | Search request options

apiInstance.postUsersSearchTeamsAssign(body)
  .then((data) => {
    console.log(`postUsersSearchTeamsAssign success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling postUsersSearchTeamsAssign');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **body** | **Object** | Search request options |  |
{: class="table table-striped"}

### Return type

**UsersSearchResponse**

<a name="putRoutingUserUtilization"></a>

# AgentMaxUtilization putRoutingUserUtilization(userId, body)


PUT /api/v2/routing/users/{userId}/utilization

Update the user's max utilization settings.  Include only those media types requiring custom configuration.

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

let apiInstance = new platformClient.UsersApi();

let userId = "userId_example"; // String | User ID
let body = {}; // Object | utilization

apiInstance.putRoutingUserUtilization(userId, body)
  .then((data) => {
    console.log(`putRoutingUserUtilization success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling putRoutingUserUtilization');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **userId** | **String** | User ID |  |
 **body** | **Object** | utilization |  |
{: class="table table-striped"}

### Return type

**AgentMaxUtilization**

<a name="putUserCallforwarding"></a>

# CallForwarding putUserCallforwarding(userId, body)


PUT /api/v2/users/{userId}/callforwarding

Update a user's CallForwarding

Requires ANY permissions:

* conversation:callForwarding:edit

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.UsersApi();

let userId = "userId_example"; // String | User ID
let body = {}; // Object | Call forwarding

apiInstance.putUserCallforwarding(userId, body)
  .then((data) => {
    console.log(`putUserCallforwarding success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling putUserCallforwarding');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **userId** | **String** | User ID |  |
 **body** | **Object** | Call forwarding |  |
{: class="table table-striped"}

### Return type

**CallForwarding**

<a name="putUserOutofoffice"></a>

# OutOfOffice putUserOutofoffice(userId, body)


PUT /api/v2/users/{userId}/outofoffice

Update an OutOfOffice

Requires NO permissions:

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.UsersApi();

let userId = "userId_example"; // String | User ID
let body = {}; // Object | The updated OutOffOffice

apiInstance.putUserOutofoffice(userId, body)
  .then((data) => {
    console.log(`putUserOutofoffice success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling putUserOutofoffice');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **userId** | **String** | User ID |  |
 **body** | **Object** | The updated OutOffOffice |  |
{: class="table table-striped"}

### Return type

**OutOfOffice**

<a name="putUserProfileskills"></a>

# **[&#39;String&#39;]** putUserProfileskills(userId, body)


PUT /api/v2/users/{userId}/profileskills

Update profile skills for a user

Requires ANY permissions:

* directory:userProfile:edit

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.UsersApi();

let userId = "userId_example"; // String | User ID
let body = ["body_example"]; // [String] | Skills

apiInstance.putUserProfileskills(userId, body)
  .then((data) => {
    console.log(`putUserProfileskills success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling putUserProfileskills');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **userId** | **String** | User ID |  |
 **body** | **[String]** | Skills |  |
{: class="table table-striped"}

### Return type

**[&#39;String&#39;]**

<a name="putUserRoles"></a>

# UserAuthorization putUserRoles(subjectId, body)


PUT /api/v2/users/{subjectId}/roles

Sets the user's roles

Requires ANY permissions:

* authorization:grant:add

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.UsersApi();

let subjectId = "subjectId_example"; // String | User ID
let body = ["body_example"]; // [String] | List of roles

apiInstance.putUserRoles(subjectId, body)
  .then((data) => {
    console.log(`putUserRoles success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling putUserRoles');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **subjectId** | **String** | User ID |  |
 **body** | **[String]** | List of roles |  |
{: class="table table-striped"}

### Return type

**UserAuthorization**

<a name="putUserRoutingskill"></a>

# UserRoutingSkill putUserRoutingskill(userId, skillId, body)


PUT /api/v2/users/{userId}/routingskills/{skillId}

Update routing skill proficiency or state.

Requires ALL permissions:

* routing:skill:assign

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.UsersApi();

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

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.UsersApi();

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

<a name="putUserRoutingstatus"></a>

# RoutingStatus putUserRoutingstatus(userId, body)


PUT /api/v2/users/{userId}/routingstatus

Update the routing status of a user

Requires NO permissions:

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.UsersApi();

let userId = "userId_example"; // String | User ID
let body = {}; // Object | Routing Status

apiInstance.putUserRoutingstatus(userId, body)
  .then((data) => {
    console.log(`putUserRoutingstatus success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling putUserRoutingstatus');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **userId** | **String** | User ID |  |
 **body** | **Object** | Routing Status |  |
{: class="table table-striped"}

### Return type

**RoutingStatus**

<a name="putUserState"></a>

# UserState putUserState(userId, body)


PUT /api/v2/users/{userId}/state

Update user state information.

Requires ANY permissions:

* directory:user:edit

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.UsersApi();

let userId = "userId_example"; // String | User ID
let body = {}; // Object | User

apiInstance.putUserState(userId, body)
  .then((data) => {
    console.log(`putUserState success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling putUserState');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **userId** | **String** | User ID |  |
 **body** | **Object** | User |  |
{: class="table table-striped"}

### Return type

**UserState**

<a name="putUserStationAssociatedstationStationId"></a>

# void putUserStationAssociatedstationStationId(userId, stationId)


PUT /api/v2/users/{userId}/station/associatedstation/{stationId}

Set associated station

Requires NO permissions:

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.UsersApi();

let userId = "userId_example"; // String | User ID
let stationId = "stationId_example"; // String | stationId

apiInstance.putUserStationAssociatedstationStationId(userId, stationId)
  .then(() => {
    console.log('putUserStationAssociatedstationStationId returned successfully.');
  })
  .catch((err) => {
    console.log('There was a failure calling putUserStationAssociatedstationStationId');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **userId** | **String** | User ID |  |
 **stationId** | **String** | stationId |  |
{: class="table table-striped"}

### Return type

void (no response body)

<a name="putUserStationDefaultstationStationId"></a>

# void putUserStationDefaultstationStationId(userId, stationId)


PUT /api/v2/users/{userId}/station/defaultstation/{stationId}

Set default station

Requires ANY permissions:

* telephony:plugin:all
* telephony:phone:assign

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.UsersApi();

let userId = "userId_example"; // String | User ID
let stationId = "stationId_example"; // String | stationId

apiInstance.putUserStationDefaultstationStationId(userId, stationId)
  .then(() => {
    console.log('putUserStationDefaultstationStationId returned successfully.');
  })
  .catch((err) => {
    console.log('There was a failure calling putUserStationDefaultstationStationId');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **userId** | **String** | User ID |  |
 **stationId** | **String** | stationId |  |
{: class="table table-striped"}

### Return type

void (no response body)

