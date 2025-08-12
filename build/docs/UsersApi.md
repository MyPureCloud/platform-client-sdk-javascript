# UsersApi

# platformClient.UsersApi

All URIs are relative to *https://api.mypurecloud.com*

| Method | HTTP request | Description |
| ------------- | ------------- | ------------- |
[**deleteAnalyticsUsersAggregatesJob**](UsersApi#deleteAnalyticsUsersAggregatesJob) | **DELETE** /api/v2/analytics/users/aggregates/jobs/{jobId} | Delete/cancel an async request for user aggregates
[**deleteAnalyticsUsersDetailsJob**](UsersApi#deleteAnalyticsUsersDetailsJob) | **DELETE** /api/v2/analytics/users/details/jobs/{jobId} | Delete/cancel an async request
[**deleteAuthorizationSubjectDivisionRole**](UsersApi#deleteAuthorizationSubjectDivisionRole) | **DELETE** /api/v2/authorization/subjects/{subjectId}/divisions/{divisionId}/roles/{roleId} | Delete a grant of a role in a division
[**deleteRoutingDirectroutingbackupSettingsMe**](UsersApi#deleteRoutingDirectroutingbackupSettingsMe) | **DELETE** /api/v2/routing/directroutingbackup/settings/me | Delete the user's Direct Routing Backup settings and revert to the Direct Routing Queue default.
[**deleteRoutingUserDirectroutingbackupSettings**](UsersApi#deleteRoutingUserDirectroutingbackupSettings) | **DELETE** /api/v2/routing/users/{userId}/directroutingbackup/settings | Delete the user's Direct Routing Backup settings and revert to the Direct Routing Queue default.
[**deleteRoutingUserUtilization**](UsersApi#deleteRoutingUserUtilization) | **DELETE** /api/v2/routing/users/{userId}/utilization | Delete the user's max utilization settings and revert to the organization-wide default.
[**deleteUser**](UsersApi#deleteUser) | **DELETE** /api/v2/users/{userId} | Delete user
[**deleteUserExternalidAuthorityNameExternalKey**](UsersApi#deleteUserExternalidAuthorityNameExternalKey) | **DELETE** /api/v2/users/{userId}/externalid/{authorityName}/{externalKey} | Delete the external identifier for user.
[**deleteUserRoutinglanguage**](UsersApi#deleteUserRoutinglanguage) | **DELETE** /api/v2/users/{userId}/routinglanguages/{languageId} | Remove a routing language from a user
[**deleteUserRoutingskill**](UsersApi#deleteUserRoutingskill) | **DELETE** /api/v2/users/{userId}/routingskills/{skillId} | Remove a routing skill from a user
[**deleteUserStationAssociatedstation**](UsersApi#deleteUserStationAssociatedstation) | **DELETE** /api/v2/users/{userId}/station/associatedstation | Clear associated station
[**deleteUserStationDefaultstation**](UsersApi#deleteUserStationDefaultstation) | **DELETE** /api/v2/users/{userId}/station/defaultstation | Clear default station
[**deleteUserVerifier**](UsersApi#deleteUserVerifier) | **DELETE** /api/v2/users/{userId}/verifiers/{verifierId} | Delete a verifier
[**getAnalyticsUsersAggregatesJob**](UsersApi#getAnalyticsUsersAggregatesJob) | **GET** /api/v2/analytics/users/aggregates/jobs/{jobId} | Get status for async query for user aggregates
[**getAnalyticsUsersAggregatesJobResults**](UsersApi#getAnalyticsUsersAggregatesJobResults) | **GET** /api/v2/analytics/users/aggregates/jobs/{jobId}/results | Fetch a page of results for an async aggregates query
[**getAnalyticsUsersDetailsJob**](UsersApi#getAnalyticsUsersDetailsJob) | **GET** /api/v2/analytics/users/details/jobs/{jobId} | Get status for async query for user details
[**getAnalyticsUsersDetailsJobResults**](UsersApi#getAnalyticsUsersDetailsJobResults) | **GET** /api/v2/analytics/users/details/jobs/{jobId}/results | Fetch a page of results for an async query
[**getAnalyticsUsersDetailsJobsAvailability**](UsersApi#getAnalyticsUsersDetailsJobsAvailability) | **GET** /api/v2/analytics/users/details/jobs/availability | Lookup the datalake availability date and time
[**getAuthorizationDivisionspermittedMe**](UsersApi#getAuthorizationDivisionspermittedMe) | **GET** /api/v2/authorization/divisionspermitted/me | Returns which divisions the current user has the given permission in.
[**getAuthorizationDivisionspermittedPagedMe**](UsersApi#getAuthorizationDivisionspermittedPagedMe) | **GET** /api/v2/authorization/divisionspermitted/paged/me | Returns which divisions the current user has the given permission in.
[**getAuthorizationDivisionspermittedPagedSubjectId**](UsersApi#getAuthorizationDivisionspermittedPagedSubjectId) | **GET** /api/v2/authorization/divisionspermitted/paged/{subjectId} | Returns which divisions the specified user has the given permission in.
[**getAuthorizationSubject**](UsersApi#getAuthorizationSubject) | **GET** /api/v2/authorization/subjects/{subjectId} | Returns a listing of roles and permissions for a user.
[**getAuthorizationSubjectsMe**](UsersApi#getAuthorizationSubjectsMe) | **GET** /api/v2/authorization/subjects/me | Returns a listing of roles and permissions for the currently authenticated user.
[**getFieldconfig**](UsersApi#getFieldconfig) | **GET** /api/v2/fieldconfig | Fetch field config for an entity type
[**getProfilesUsers**](UsersApi#getProfilesUsers) | **GET** /api/v2/profiles/users | Get a user profile listing
[**getRoutingDirectroutingbackupSettingsMe**](UsersApi#getRoutingDirectroutingbackupSettingsMe) | **GET** /api/v2/routing/directroutingbackup/settings/me | Get the user's Direct Routing Backup settings.
[**getRoutingUserDirectroutingbackupSettings**](UsersApi#getRoutingUserDirectroutingbackupSettings) | **GET** /api/v2/routing/users/{userId}/directroutingbackup/settings | Get the user's Direct Routing Backup settings.
[**getRoutingUserUtilization**](UsersApi#getRoutingUserUtilization) | **GET** /api/v2/routing/users/{userId}/utilization | Get the user's max utilization settings.  If not configured, the organization-wide default is returned.
[**getUser**](UsersApi#getUser) | **GET** /api/v2/users/{userId} | Get user.
[**getUserAdjacents**](UsersApi#getUserAdjacents) | **GET** /api/v2/users/{userId}/adjacents | Get adjacents
[**getUserCallforwarding**](UsersApi#getUserCallforwarding) | **GET** /api/v2/users/{userId}/callforwarding | Get a user's CallForwarding
[**getUserDirectreports**](UsersApi#getUserDirectreports) | **GET** /api/v2/users/{userId}/directreports | Get direct reports
[**getUserExternalid**](UsersApi#getUserExternalid) | **GET** /api/v2/users/{userId}/externalid | Get the external identifiers for a user.
[**getUserExternalidAuthorityName**](UsersApi#getUserExternalidAuthorityName) | **GET** /api/v2/users/{userId}/externalid/{authorityName} | Get the external identifier of user for an authority.
[**getUserFavorites**](UsersApi#getUserFavorites) | **GET** /api/v2/users/{userId}/favorites | Deprecated; will be revived with new contract
[**getUserGeolocation**](UsersApi#getUserGeolocation) | **GET** /api/v2/users/{userId}/geolocations/{clientId} | Get a user's Geolocation
[**getUserOutofoffice**](UsersApi#getUserOutofoffice) | **GET** /api/v2/users/{userId}/outofoffice | Get a OutOfOffice
[**getUserProfile**](UsersApi#getUserProfile) | **GET** /api/v2/users/{userId}/profile | Get user profile
[**getUserProfileskills**](UsersApi#getUserProfileskills) | **GET** /api/v2/users/{userId}/profileskills | List profile skills for a user
[**getUserQueues**](UsersApi#getUserQueues) | **GET** /api/v2/users/{userId}/queues | Get queues for user
[**getUserRoles**](UsersApi#getUserRoles) | **GET** /api/v2/users/{subjectId}/roles | Returns a listing of roles and permissions for a user.
[**getUserRoutinglanguages**](UsersApi#getUserRoutinglanguages) | **GET** /api/v2/users/{userId}/routinglanguages | List routing languages assigned to a user
[**getUserRoutingskills**](UsersApi#getUserRoutingskills) | **GET** /api/v2/users/{userId}/routingskills | List routing skills assigned to a user
[**getUserRoutingstatus**](UsersApi#getUserRoutingstatus) | **GET** /api/v2/users/{userId}/routingstatus | Fetch the routing status of a user
[**getUserSkillgroups**](UsersApi#getUserSkillgroups) | **GET** /api/v2/users/{userId}/skillgroups | Get skill groups for a user
[**getUserState**](UsersApi#getUserState) | **GET** /api/v2/users/{userId}/state | Get user state information.
[**getUserStation**](UsersApi#getUserStation) | **GET** /api/v2/users/{userId}/station | Get station information for user
[**getUserSuperiors**](UsersApi#getUserSuperiors) | **GET** /api/v2/users/{userId}/superiors | Get superiors
[**getUserTrustors**](UsersApi#getUserTrustors) | **GET** /api/v2/users/{userId}/trustors | List the organizations that have authorized/trusted the user.
[**getUserVerifiers**](UsersApi#getUserVerifiers) | **GET** /api/v2/users/{userId}/verifiers | Get a list of verifiers
[**getUsers**](UsersApi#getUsers) | **GET** /api/v2/users | Get the list of available users.
[**getUsersChatsMe**](UsersApi#getUsersChatsMe) | **GET** /api/v2/users/chats/me | Get chats for a user
[**getUsersDevelopmentActivities**](UsersApi#getUsersDevelopmentActivities) | **GET** /api/v2/users/development/activities | Get list of Development Activities
[**getUsersDevelopmentActivitiesMe**](UsersApi#getUsersDevelopmentActivitiesMe) | **GET** /api/v2/users/development/activities/me | Get list of Development Activities for current user
[**getUsersDevelopmentActivity**](UsersApi#getUsersDevelopmentActivity) | **GET** /api/v2/users/development/activities/{activityId} | Get a Development Activity
[**getUsersExternalidAuthorityNameExternalKey**](UsersApi#getUsersExternalidAuthorityNameExternalKey) | **GET** /api/v2/users/externalid/{authorityName}/{externalKey} | Get the user associated with external identifier.
[**getUsersMe**](UsersApi#getUsersMe) | **GET** /api/v2/users/me | Get current user details.
[**getUsersQuery**](UsersApi#getUsersQuery) | **GET** /api/v2/users/query | Get list of available users, paged by cursor token, No division filtering available so directory:user:view permission for all divisions is required
[**getUsersSearch**](UsersApi#getUsersSearch) | **GET** /api/v2/users/search | Search users using the q64 value returned from a previous search
[**patchUser**](UsersApi#patchUser) | **PATCH** /api/v2/users/{userId} | Update user
[**patchUserCallforwarding**](UsersApi#patchUserCallforwarding) | **PATCH** /api/v2/users/{userId}/callforwarding | Patch a user's CallForwarding
[**patchUserGeolocation**](UsersApi#patchUserGeolocation) | **PATCH** /api/v2/users/{userId}/geolocations/{clientId} | Patch a user's Geolocation
[**patchUserQueue**](UsersApi#patchUserQueue) | **PATCH** /api/v2/users/{userId}/queues/{queueId} | Join or unjoin a queue for a user
[**patchUserQueues**](UsersApi#patchUserQueues) | **PATCH** /api/v2/users/{userId}/queues | Join or unjoin a set of queues for a user
[**patchUserRoutinglanguage**](UsersApi#patchUserRoutinglanguage) | **PATCH** /api/v2/users/{userId}/routinglanguages/{languageId} | Update an assigned routing language's proficiency
[**patchUserRoutinglanguagesBulk**](UsersApi#patchUserRoutinglanguagesBulk) | **PATCH** /api/v2/users/{userId}/routinglanguages/bulk | Assign multiple routing languages to a user. Max 50 routing languages in request body
[**patchUserRoutingskillsBulk**](UsersApi#patchUserRoutingskillsBulk) | **PATCH** /api/v2/users/{userId}/routingskills/bulk | Assign multiple routing skills to a user
[**patchUsersBulk**](UsersApi#patchUsersBulk) | **PATCH** /api/v2/users/bulk | Update bulk acd autoanswer on users. Max 50 users can be updated at a time.
[**postAnalyticsUsersActivityQuery**](UsersApi#postAnalyticsUsersActivityQuery) | **POST** /api/v2/analytics/users/activity/query | Query for user activity observations
[**postAnalyticsUsersAggregatesJobs**](UsersApi#postAnalyticsUsersAggregatesJobs) | **POST** /api/v2/analytics/users/aggregates/jobs | Query for user aggregates asynchronously
[**postAnalyticsUsersAggregatesQuery**](UsersApi#postAnalyticsUsersAggregatesQuery) | **POST** /api/v2/analytics/users/aggregates/query | Query for user aggregates
[**postAnalyticsUsersDetailsJobs**](UsersApi#postAnalyticsUsersDetailsJobs) | **POST** /api/v2/analytics/users/details/jobs | Query for user details asynchronously
[**postAnalyticsUsersDetailsQuery**](UsersApi#postAnalyticsUsersDetailsQuery) | **POST** /api/v2/analytics/users/details/query | Query for user details
[**postAnalyticsUsersObservationsQuery**](UsersApi#postAnalyticsUsersObservationsQuery) | **POST** /api/v2/analytics/users/observations/query | Query for user observations
[**postAuthorizationSubjectBulkadd**](UsersApi#postAuthorizationSubjectBulkadd) | **POST** /api/v2/authorization/subjects/{subjectId}/bulkadd | Bulk-grant roles and divisions to a subject.
[**postAuthorizationSubjectBulkremove**](UsersApi#postAuthorizationSubjectBulkremove) | **POST** /api/v2/authorization/subjects/{subjectId}/bulkremove | Bulk-remove grants from a subject.
[**postAuthorizationSubjectBulkreplace**](UsersApi#postAuthorizationSubjectBulkreplace) | **POST** /api/v2/authorization/subjects/{subjectId}/bulkreplace | Replace subject's roles and divisions with the exact list supplied in the request.
[**postAuthorizationSubjectDivisionRole**](UsersApi#postAuthorizationSubjectDivisionRole) | **POST** /api/v2/authorization/subjects/{subjectId}/divisions/{divisionId}/roles/{roleId} | Make a grant of a role in a division
[**postUserExternalid**](UsersApi#postUserExternalid) | **POST** /api/v2/users/{userId}/externalid | Create mapping between external identifier and user. Limit 100 per entity.
[**postUserInvite**](UsersApi#postUserInvite) | **POST** /api/v2/users/{userId}/invite | Send an activation email to the user
[**postUserPassword**](UsersApi#postUserPassword) | **POST** /api/v2/users/{userId}/password | Change a users password
[**postUserRoutinglanguages**](UsersApi#postUserRoutinglanguages) | **POST** /api/v2/users/{userId}/routinglanguages | Assign a routing language to a user
[**postUserRoutingskills**](UsersApi#postUserRoutingskills) | **POST** /api/v2/users/{userId}/routingskills | Assign a routing skill to a user
[**postUsers**](UsersApi#postUsers) | **POST** /api/v2/users | Create user
[**postUsersDevelopmentActivitiesAggregatesQuery**](UsersApi#postUsersDevelopmentActivitiesAggregatesQuery) | **POST** /api/v2/users/development/activities/aggregates/query | Retrieve aggregated development activity data
[**postUsersMePassword**](UsersApi#postUsersMePassword) | **POST** /api/v2/users/me/password | Change your password
[**postUsersSearch**](UsersApi#postUsersSearch) | **POST** /api/v2/users/search | Search users
[**postUsersSearchConversationTarget**](UsersApi#postUsersSearchConversationTarget) | **POST** /api/v2/users/search/conversation/target | Search users as conversation targets
[**postUsersSearchQueuemembersManage**](UsersApi#postUsersSearchQueuemembersManage) | **POST** /api/v2/users/search/queuemembers/manage | Search manage queue member
[**postUsersSearchTeamsAssign**](UsersApi#postUsersSearchTeamsAssign) | **POST** /api/v2/users/search/teams/assign | Search users assigned to teams
[**putRoutingDirectroutingbackupSettingsMe**](UsersApi#putRoutingDirectroutingbackupSettingsMe) | **PUT** /api/v2/routing/directroutingbackup/settings/me | Update the user's Direct Routing Backup settings.
[**putRoutingUserDirectroutingbackupSettings**](UsersApi#putRoutingUserDirectroutingbackupSettings) | **PUT** /api/v2/routing/users/{userId}/directroutingbackup/settings | Update the user's Direct Routing Backup settings.
[**putRoutingUserUtilization**](UsersApi#putRoutingUserUtilization) | **PUT** /api/v2/routing/users/{userId}/utilization | Update the user's max utilization settings.  Include only those media types requiring custom configuration.
[**putUserCallforwarding**](UsersApi#putUserCallforwarding) | **PUT** /api/v2/users/{userId}/callforwarding | Update a user's CallForwarding
[**putUserOutofoffice**](UsersApi#putUserOutofoffice) | **PUT** /api/v2/users/{userId}/outofoffice | Update an OutOfOffice
[**putUserProfileskills**](UsersApi#putUserProfileskills) | **PUT** /api/v2/users/{userId}/profileskills | Update profile skills for a user
[**putUserRoles**](UsersApi#putUserRoles) | **PUT** /api/v2/users/{subjectId}/roles | Sets the user's roles
[**putUserRoutingskill**](UsersApi#putUserRoutingskill) | **PUT** /api/v2/users/{userId}/routingskills/{skillId} | Update an assigned routing skill's proficiency
[**putUserRoutingskillsBulk**](UsersApi#putUserRoutingskillsBulk) | **PUT** /api/v2/users/{userId}/routingskills/bulk | Assign multiple routing skills to a user, replacing any current assignments
[**putUserRoutingstatus**](UsersApi#putUserRoutingstatus) | **PUT** /api/v2/users/{userId}/routingstatus | Update the routing status of a user
[**putUserState**](UsersApi#putUserState) | **PUT** /api/v2/users/{userId}/state | Update user state information.
[**putUserStationAssociatedstationStationId**](UsersApi#putUserStationAssociatedstationStationId) | **PUT** /api/v2/users/{userId}/station/associatedstation/{stationId} | Set associated station
[**putUserStationDefaultstationStationId**](UsersApi#putUserStationDefaultstationStationId) | **PUT** /api/v2/users/{userId}/station/defaultstation/{stationId} | Set default station
[**putUserVerifier**](UsersApi#putUserVerifier) | **PUT** /api/v2/users/{userId}/verifiers/{verifierId} | Update a verifier



## deleteAnalyticsUsersAggregatesJob

> void deleteAnalyticsUsersAggregatesJob(jobId)


DELETE /api/v2/analytics/users/aggregates/jobs/{jobId}

Delete/cancel an async request for user aggregates

deleteAnalyticsUsersAggregatesJob is a preview method and is subject to both breaking and non-breaking changes at any time without notice

Requires ANY permissions:

* analytics:userAggregate:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.UsersApi();

let jobId = "jobId_example"; // String | jobId

apiInstance.deleteAnalyticsUsersAggregatesJob(jobId)
  .then(() => {
    console.log('deleteAnalyticsUsersAggregatesJob returned successfully.');
  })
  .catch((err) => {
    console.log('There was a failure calling deleteAnalyticsUsersAggregatesJob');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **jobId** | **String** | jobId |  |

### Return type

void (no response body)


## deleteAnalyticsUsersDetailsJob

> void deleteAnalyticsUsersDetailsJob(jobId)


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

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
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

### Return type

void (no response body)


## deleteAuthorizationSubjectDivisionRole

> void deleteAuthorizationSubjectDivisionRole(subjectId, divisionId, roleId)


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

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
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

### Return type

void (no response body)


## deleteRoutingDirectroutingbackupSettingsMe

> void deleteRoutingDirectroutingbackupSettingsMe()


DELETE /api/v2/routing/directroutingbackup/settings/me

Delete the user's Direct Routing Backup settings and revert to the Direct Routing Queue default.

Requires ANY permissions:

* routing:directRoutingBackup:selfDelete

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.UsersApi();

apiInstance.deleteRoutingDirectroutingbackupSettingsMe()
  .then(() => {
    console.log('deleteRoutingDirectroutingbackupSettingsMe returned successfully.');
  })
  .catch((err) => {
    console.log('There was a failure calling deleteRoutingDirectroutingbackupSettingsMe');
    console.error(err);
  });
```

### Parameters

This endpoint does not need any parameter.

### Return type

void (no response body)


## deleteRoutingUserDirectroutingbackupSettings

> void deleteRoutingUserDirectroutingbackupSettings(userId)


DELETE /api/v2/routing/users/{userId}/directroutingbackup/settings

Delete the user's Direct Routing Backup settings and revert to the Direct Routing Queue default.

Requires ANY permissions:

* routing:directRoutingBackup:delete

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.UsersApi();

let userId = "userId_example"; // String | User ID

apiInstance.deleteRoutingUserDirectroutingbackupSettings(userId)
  .then(() => {
    console.log('deleteRoutingUserDirectroutingbackupSettings returned successfully.');
  })
  .catch((err) => {
    console.log('There was a failure calling deleteRoutingUserDirectroutingbackupSettings');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **userId** | **String** | User ID |  |

### Return type

void (no response body)


## deleteRoutingUserUtilization

> void deleteRoutingUserUtilization(userId)


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

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
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

### Return type

void (no response body)


## deleteUser

> **Object** deleteUser(userId)


DELETE /api/v2/users/{userId}

Delete user

Requires ANY permissions:

* admin
* directory:user:delete
* directory:organization:admin

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
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

### Return type

**Object**


## deleteUserExternalidAuthorityNameExternalKey

> void deleteUserExternalidAuthorityNameExternalKey(userId, authorityName, externalKey)


DELETE /api/v2/users/{userId}/externalid/{authorityName}/{externalKey}

Delete the external identifier for user.

Requires ANY permissions:

* directory:user:edit

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.UsersApi();

let userId = "userId_example"; // String | User ID
let authorityName = "authorityName_example"; // String | Authority Name
let externalKey = "externalKey_example"; // String | External Key

apiInstance.deleteUserExternalidAuthorityNameExternalKey(userId, authorityName, externalKey)
  .then(() => {
    console.log('deleteUserExternalidAuthorityNameExternalKey returned successfully.');
  })
  .catch((err) => {
    console.log('There was a failure calling deleteUserExternalidAuthorityNameExternalKey');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **userId** | **String** | User ID |  |
 **authorityName** | **String** | Authority Name |  |
 **externalKey** | **String** | External Key |  |

### Return type

void (no response body)


## deleteUserRoutinglanguage

> void deleteUserRoutinglanguage(userId, languageId)


DELETE /api/v2/users/{userId}/routinglanguages/{languageId}

Remove a routing language from a user

Requires ANY permissions:

* routing:skill:assign
* routing:language:assign

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
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

### Return type

void (no response body)


## deleteUserRoutingskill

> void deleteUserRoutingskill(userId, skillId)


DELETE /api/v2/users/{userId}/routingskills/{skillId}

Remove a routing skill from a user

Requires ALL permissions:

* routing:skill:assign

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
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

### Return type

void (no response body)


## deleteUserStationAssociatedstation

> void deleteUserStationAssociatedstation(userId)


DELETE /api/v2/users/{userId}/station/associatedstation

Clear associated station

Requires NO permissions:

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
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

### Return type

void (no response body)


## deleteUserStationDefaultstation

> void deleteUserStationDefaultstation(userId)


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

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
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

### Return type

void (no response body)


## deleteUserVerifier

> void deleteUserVerifier(userId, verifierId)


DELETE /api/v2/users/{userId}/verifiers/{verifierId}

Delete a verifier

Requires ANY permissions:

* mfa:verifier:delete

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.UsersApi();

let userId = "userId_example"; // String | User ID
let verifierId = "verifierId_example"; // String | Verifier ID

apiInstance.deleteUserVerifier(userId, verifierId)
  .then(() => {
    console.log('deleteUserVerifier returned successfully.');
  })
  .catch((err) => {
    console.log('There was a failure calling deleteUserVerifier');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **userId** | **String** | User ID |  |
 **verifierId** | **String** | Verifier ID |  |

### Return type

void (no response body)


## getAnalyticsUsersAggregatesJob

> AsyncQueryStatus getAnalyticsUsersAggregatesJob(jobId)


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

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
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

### Return type

**AsyncQueryStatus**


## getAnalyticsUsersAggregatesJobResults

> UserAsyncAggregateQueryResponse getAnalyticsUsersAggregatesJobResults(jobId, opts)


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

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
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

### Return type

**UserAsyncAggregateQueryResponse**


## getAnalyticsUsersDetailsJob

> AsyncQueryStatus getAnalyticsUsersDetailsJob(jobId)


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

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
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

### Return type

**AsyncQueryStatus**


## getAnalyticsUsersDetailsJobResults

> AnalyticsUserDetailsAsyncQueryResponse getAnalyticsUsersDetailsJobResults(jobId, opts)


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

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
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

### Return type

**AnalyticsUserDetailsAsyncQueryResponse**


## getAnalyticsUsersDetailsJobsAvailability

> DataAvailabilityResponse getAnalyticsUsersDetailsJobsAvailability()


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

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
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


## getAuthorizationDivisionspermittedMe

> [AuthzDivision] getAuthorizationDivisionspermittedMe(permission, opts)

:::{"alert":"warning","title":"Deprecated","collapsible":false,"autoCollapse":false}
This resource has been deprecated
:::

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

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
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

### Return type

**[AuthzDivision]**


## getAuthorizationDivisionspermittedPagedMe

> DivsPermittedEntityListing getAuthorizationDivisionspermittedPagedMe(permission, opts)


GET /api/v2/authorization/divisionspermitted/paged/me

Returns which divisions the current user has the given permission in.

Requires NO permissions:

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
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

### Return type

**DivsPermittedEntityListing**


## getAuthorizationDivisionspermittedPagedSubjectId

> DivsPermittedEntityListing getAuthorizationDivisionspermittedPagedSubjectId(subjectId, permission, opts)

:::{"alert":"warning","title":"Deprecated","collapsible":false,"autoCollapse":false}
This resource has been deprecated
:::

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

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
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

### Return type

**DivsPermittedEntityListing**


## getAuthorizationSubject

> AuthzSubject getAuthorizationSubject(subjectId, opts)


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

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.UsersApi();

let subjectId = "subjectId_example"; // String | Subject ID (user or group)
let opts = { 
  'includeDuplicates': false // Boolean | Include multiple entries with the same role and division but different subjects
};

apiInstance.getAuthorizationSubject(subjectId, opts)
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
 **includeDuplicates** | **Boolean** | Include multiple entries with the same role and division but different subjects | [optional] [default to false]<br />**Values**: true, false |

### Return type

**AuthzSubject**


## getAuthorizationSubjectsMe

> AuthzSubject getAuthorizationSubjectsMe(opts)


GET /api/v2/authorization/subjects/me

Returns a listing of roles and permissions for the currently authenticated user.

Requires NO permissions:

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.UsersApi();

let opts = { 
  'includeDuplicates': false // Boolean | Include multiple entries with the same role and division but different subjects
};

apiInstance.getAuthorizationSubjectsMe(opts)
  .then((data) => {
    console.log(`getAuthorizationSubjectsMe success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getAuthorizationSubjectsMe');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **includeDuplicates** | **Boolean** | Include multiple entries with the same role and division but different subjects | [optional] [default to false]<br />**Values**: true, false |

### Return type

**AuthzSubject**


## getFieldconfig

> FieldConfig getFieldconfig(type)

:::{"alert":"warning","title":"Deprecated","collapsible":false,"autoCollapse":false}
This resource has been deprecated
:::

GET /api/v2/fieldconfig

Fetch field config for an entity type

Requires NO permissions:

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
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
 **type** | **String** | Field type | <br />**Values**: person, group, org |

### Return type

**FieldConfig**


## getProfilesUsers

> UserProfileEntityListing getProfilesUsers(opts)

:::{"alert":"warning","title":"Deprecated","collapsible":false,"autoCollapse":false}
This resource has been deprecated
:::

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

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
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

### Return type

**UserProfileEntityListing**


## getRoutingDirectroutingbackupSettingsMe

> AgentDirectRoutingBackupSettings getRoutingDirectroutingbackupSettingsMe()


GET /api/v2/routing/directroutingbackup/settings/me

Get the user's Direct Routing Backup settings.

Requires ANY permissions:

* routing:directRoutingBackup:selfView

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.UsersApi();

apiInstance.getRoutingDirectroutingbackupSettingsMe()
  .then((data) => {
    console.log(`getRoutingDirectroutingbackupSettingsMe success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getRoutingDirectroutingbackupSettingsMe');
    console.error(err);
  });
```

### Parameters

This endpoint does not need any parameter.

### Return type

**AgentDirectRoutingBackupSettings**


## getRoutingUserDirectroutingbackupSettings

> AgentDirectRoutingBackupSettings getRoutingUserDirectroutingbackupSettings(userId)


GET /api/v2/routing/users/{userId}/directroutingbackup/settings

Get the user's Direct Routing Backup settings.

Requires ANY permissions:

* routing:directRoutingBackup:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.UsersApi();

let userId = "userId_example"; // String | User ID

apiInstance.getRoutingUserDirectroutingbackupSettings(userId)
  .then((data) => {
    console.log(`getRoutingUserDirectroutingbackupSettings success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getRoutingUserDirectroutingbackupSettings');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **userId** | **String** | User ID |  |

### Return type

**AgentDirectRoutingBackupSettings**


## getRoutingUserUtilization

> AgentMaxUtilizationResponse getRoutingUserUtilization(userId)


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

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
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

### Return type

**AgentMaxUtilizationResponse**


## getUser

> User getUser(userId, opts)


GET /api/v2/users/{userId}

Get user.

Requires NO permissions:

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.UsersApi();

let userId = "userId_example"; // String | User ID
let opts = { 
  'expand': ["expand_example"], // [String] | Which fields, if any, to expand. Note, expand parameters are resolved with a best effort approach and not guaranteed to be returned. If requested expand information is absolutely required, it's recommended to use specific API requests instead.
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
 **expand** | **[String]** | Which fields, if any, to expand. Note, expand parameters are resolved with a best effort approach and not guaranteed to be returned. If requested expand information is absolutely required, it's recommended to use specific API requests instead. | [optional] <br />**Values**: routingStatus, presence, integrationPresence, conversationSummary, outOfOffice, geolocation, station, authorization, lasttokenissued, authorization.unusedRoles, team, workPlanBidRanks, externalContactsSettings, groups, profileSkills, certifications, locations, skills, languages, languagePreference, employerInfo, biography, dateLastLogin, dateWelcomeSent |
 **integrationPresenceSource** | **String** | Gets an integration presence for a user instead of their default. | [optional] <br />**Values**: MicrosoftTeams, ZoomPhone, EightByEight |
 **state** | **String** | Search for a user with this state | [optional] [default to active]<br />**Values**: active, deleted |

### Return type

**User**


## getUserAdjacents

> Adjacents getUserAdjacents(userId, opts)


GET /api/v2/users/{userId}/adjacents

Get adjacents

Requires NO permissions:

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
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
 **expand** | **[String]** | Which fields, if any, to expand | [optional] <br />**Values**: routingStatus, presence, integrationPresence, conversationSummary, outOfOffice, geolocation, station, authorization, lasttokenissued, authorization.unusedRoles, team, workPlanBidRanks, externalContactsSettings, groups, profileSkills, certifications, locations, skills, languages, languagePreference, employerInfo, biography, dateLastLogin, dateWelcomeSent |

### Return type

**Adjacents**


## getUserCallforwarding

> CallForwarding getUserCallforwarding(userId)


GET /api/v2/users/{userId}/callforwarding

Get a user's CallForwarding

Requires NO permissions:

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
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

### Return type

**CallForwarding**


## getUserDirectreports

> [User] getUserDirectreports(userId, opts)


GET /api/v2/users/{userId}/directreports

Get direct reports

Requires NO permissions:

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
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
 **expand** | **[String]** | Which fields, if any, to expand | [optional] <br />**Values**: routingStatus, presence, integrationPresence, conversationSummary, outOfOffice, geolocation, station, authorization, lasttokenissued, authorization.unusedRoles, team, workPlanBidRanks, externalContactsSettings, groups, profileSkills, certifications, locations, skills, languages, languagePreference, employerInfo, biography, dateLastLogin, dateWelcomeSent |

### Return type

**[User]**


## getUserExternalid

> [UserExternalIdentifier] getUserExternalid(userId)


GET /api/v2/users/{userId}/externalid

Get the external identifiers for a user.

Requires NO permissions:

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.UsersApi();

let userId = "userId_example"; // String | User ID

apiInstance.getUserExternalid(userId)
  .then((data) => {
    console.log(`getUserExternalid success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getUserExternalid');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **userId** | **String** | User ID |  |

### Return type

**[UserExternalIdentifier]**


## getUserExternalidAuthorityName

> UserExternalIdentifier getUserExternalidAuthorityName(userId, authorityName)


GET /api/v2/users/{userId}/externalid/{authorityName}

Get the external identifier of user for an authority.

Authority name and external key are case sensitive.

Requires NO permissions:

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.UsersApi();

let userId = "userId_example"; // String | User ID
let authorityName = "authorityName_example"; // String | Authority Name

apiInstance.getUserExternalidAuthorityName(userId, authorityName)
  .then((data) => {
    console.log(`getUserExternalidAuthorityName success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getUserExternalidAuthorityName');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **userId** | **String** | User ID |  |
 **authorityName** | **String** | Authority Name |  |

### Return type

**UserExternalIdentifier**


## getUserFavorites

> UserEntityListing getUserFavorites(userId, opts)

:::{"alert":"warning","title":"Deprecated","collapsible":false,"autoCollapse":false}
This resource has been deprecated
:::

GET /api/v2/users/{userId}/favorites

Deprecated; will be revived with new contract

Requires NO permissions:

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
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
 **expand** | **[String]** | Which fields, if any, to expand | [optional] <br />**Values**: routingStatus, presence, integrationPresence, conversationSummary, outOfOffice, geolocation, station, authorization, lasttokenissued, authorization.unusedRoles, team, workPlanBidRanks, externalContactsSettings, groups, profileSkills, certifications, locations, skills, languages, languagePreference, employerInfo, biography, dateLastLogin, dateWelcomeSent |

### Return type

**UserEntityListing**


## getUserGeolocation

> Geolocation getUserGeolocation(userId, clientId)


GET /api/v2/users/{userId}/geolocations/{clientId}

Get a user's Geolocation

Requires NO permissions:

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
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

### Return type

**Geolocation**


## getUserOutofoffice

> OutOfOffice getUserOutofoffice(userId)


GET /api/v2/users/{userId}/outofoffice

Get a OutOfOffice

Requires NO permissions:

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
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

### Return type

**OutOfOffice**


## getUserProfile

> UserProfile getUserProfile(userId, opts)

:::{"alert":"warning","title":"Deprecated","collapsible":false,"autoCollapse":false}
This resource has been deprecated
:::

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

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
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
 **expand** | **[String]** | Which fields, if any, to expand | [optional] <br />**Values**: routingStatus, presence, integrationPresence, conversationSummary, outOfOffice, geolocation, station, authorization, lasttokenissued, authorization.unusedRoles, team, workPlanBidRanks, externalContactsSettings, groups |
 **integrationPresenceSource** | **String** | Gets an integration presence for a user instead of their default. | [optional] <br />**Values**: MicrosoftTeams, ZoomPhone, EightByEight |

### Return type

**UserProfile**


## getUserProfileskills

> **[&#39;String&#39;]** getUserProfileskills(userId)


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

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
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

### Return type

**[&#39;String&#39;]**


## getUserQueues

> UserQueueEntityListing getUserQueues(userId, opts)


GET /api/v2/users/{userId}/queues

Get queues for user

Requires ANY permissions:

* routing:queue:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
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

### Return type

**UserQueueEntityListing**


## getUserRoles

> UserAuthorization getUserRoles(subjectId)


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

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
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

### Return type

**UserAuthorization**


## getUserRoutinglanguages

> UserLanguageEntityListing getUserRoutinglanguages(userId, opts)


GET /api/v2/users/{userId}/routinglanguages

List routing languages assigned to a user

Requires NO permissions:

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
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

### Return type

**UserLanguageEntityListing**


## getUserRoutingskills

> UserSkillEntityListing getUserRoutingskills(userId, opts)


GET /api/v2/users/{userId}/routingskills

List routing skills assigned to a user

Requires NO permissions:

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
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

### Return type

**UserSkillEntityListing**


## getUserRoutingstatus

> RoutingStatus getUserRoutingstatus(userId)


GET /api/v2/users/{userId}/routingstatus

Fetch the routing status of a user

Requires NO permissions:

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
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

### Return type

**RoutingStatus**


## getUserSkillgroups

> UserSkillGroupEntityListing getUserSkillgroups(userId, opts)


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

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
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

### Return type

**UserSkillGroupEntityListing**


## getUserState

> UserState getUserState(userId)


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

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
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

### Return type

**UserState**


## getUserStation

> UserStations getUserStation(userId)


GET /api/v2/users/{userId}/station

Get station information for user

Requires NO permissions:

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
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

### Return type

**UserStations**


## getUserSuperiors

> [User] getUserSuperiors(userId, opts)


GET /api/v2/users/{userId}/superiors

Get superiors

Requires NO permissions:

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
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
 **expand** | **[String]** | Which fields, if any, to expand | [optional] <br />**Values**: routingStatus, presence, integrationPresence, conversationSummary, outOfOffice, geolocation, station, authorization, lasttokenissued, authorization.unusedRoles, team, workPlanBidRanks, externalContactsSettings, groups, profileSkills, certifications, locations, skills, languages, languagePreference, employerInfo, biography, dateLastLogin, dateWelcomeSent |

### Return type

**[User]**


## getUserTrustors

> TrustorEntityListing getUserTrustors(userId, opts)


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

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
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

### Return type

**TrustorEntityListing**


## getUserVerifiers

> VerifierEntityListing getUserVerifiers(userId)


GET /api/v2/users/{userId}/verifiers

Get a list of verifiers

Requires ANY permissions:

* mfa:verifier:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.UsersApi();

let userId = "userId_example"; // String | User ID

apiInstance.getUserVerifiers(userId)
  .then((data) => {
    console.log(`getUserVerifiers success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getUserVerifiers');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **userId** | **String** | User ID |  |

### Return type

**VerifierEntityListing**


## getUsers

> UserEntityListing getUsers(opts)


GET /api/v2/users

Get the list of available users.

Requires NO permissions:

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.UsersApi();

let opts = { 
  'pageSize': 25, // Number | Page size
  'pageNumber': 1, // Number | Page number
  'id': ["id_example"], // [String] | A list of user IDs to fetch by bulk
  'jabberId': ["jabberId_example"], // [String] | A list of jabberIds to fetch by bulk (cannot be used with the id parameter)
  'sortOrder': "ASC", // String | Ascending or descending sort order
  'expand': ["expand_example"], // [String] | Which fields, if any, to expand. Note, expand parameters are resolved with a best effort approach and not guaranteed to be returned. If requested expand information is absolutely required, it's recommended to use specific API requests instead.
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
 **expand** | **[String]** | Which fields, if any, to expand. Note, expand parameters are resolved with a best effort approach and not guaranteed to be returned. If requested expand information is absolutely required, it's recommended to use specific API requests instead. | [optional] <br />**Values**: routingStatus, presence, integrationPresence, conversationSummary, outOfOffice, geolocation, station, authorization, lasttokenissued, authorization.unusedRoles, team, workPlanBidRanks, externalContactsSettings, groups, profileSkills, certifications, locations, skills, languages, languagePreference, employerInfo, biography, dateLastLogin, dateWelcomeSent |
 **integrationPresenceSource** | **String** | Gets an integration presence for users instead of their defaults. This parameter will only be used when presence is provided as an expand. When using this parameter the maximum number of users that can be returned is 100. | [optional] <br />**Values**: MicrosoftTeams, ZoomPhone, EightByEight |
 **state** | **String** | Only list users of this state | [optional] [default to active]<br />**Values**: active, inactive, deleted, any |

### Return type

**UserEntityListing**


## getUsersChatsMe

> ChatItemCursorListing getUsersChatsMe(opts)


GET /api/v2/users/chats/me

Get chats for a user

Requires ANY permissions:

* chat:chat:access
* user:chats:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.UsersApi();

let opts = { 
  'excludeClosed': true, // Boolean | Whether or not to exclude closed chats
  'includePresence': true, // Boolean | Whether or not to include user presence
  'after': "after_example" // String | The key to start after
};

apiInstance.getUsersChatsMe(opts)
  .then((data) => {
    console.log(`getUsersChatsMe success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getUsersChatsMe');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **excludeClosed** | **Boolean** | Whether or not to exclude closed chats | [optional]  |
 **includePresence** | **Boolean** | Whether or not to include user presence | [optional]  |
 **after** | **String** | The key to start after | [optional]  |

### Return type

**ChatItemCursorListing**


## getUsersDevelopmentActivities

> DevelopmentActivityListing getUsersDevelopmentActivities(opts)


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

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
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
  'types': ["types_example"], // [String] | Specifies the activity types. Informational, AssessedContent and Assessment are deprecated
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
 **types** | **[String]** | Specifies the activity types. Informational, AssessedContent and Assessment are deprecated | [optional] <br />**Values**: Informational, Coaching, AssessedContent, Assessment, External, Native |
 **statuses** | **[String]** | Specifies the activity statuses to filter by | [optional] <br />**Values**: Planned, InProgress, Completed, InvalidSchedule, NotCompleted |
 **relationship** | **[String]** | Specifies how the current user relation should be interpreted, and filters the activities returned to only the activities that have the specified relationship. If a value besides Attendee is specified, it will only return Coaching Appointments. If not specified, no filtering is applied. | [optional] <br />**Values**: Creator, Facilitator, Attendee |

### Return type

**DevelopmentActivityListing**


## getUsersDevelopmentActivitiesMe

> DevelopmentActivityListing getUsersDevelopmentActivitiesMe(opts)


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

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
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
  'types': ["types_example"], // [String] | Specifies the activity types. Informational, AssessedContent and Assessment are deprecated
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
 **types** | **[String]** | Specifies the activity types. Informational, AssessedContent and Assessment are deprecated | [optional] <br />**Values**: Informational, Coaching, AssessedContent, Assessment, External, Native |
 **statuses** | **[String]** | Specifies the activity statuses to filter by | [optional] <br />**Values**: Planned, InProgress, Completed, InvalidSchedule, NotCompleted |
 **relationship** | **[String]** | Specifies how the current user relation should be interpreted, and filters the activities returned to only the activities that have the specified relationship. If a value besides Attendee is specified, it will only return Coaching Appointments. If not specified, no filtering is applied. | [optional] <br />**Values**: Creator, Facilitator, Attendee |

### Return type

**DevelopmentActivityListing**


## getUsersDevelopmentActivity

> DevelopmentActivity getUsersDevelopmentActivity(activityId, type)


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

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.UsersApi();

let activityId = "activityId_example"; // String | Specifies the activity ID, maps to either assignment or appointment ID
let type = "type_example"; // String | Specifies the activity type. Informational, AssessedContent and Assessment are deprecated

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
 **type** | **String** | Specifies the activity type. Informational, AssessedContent and Assessment are deprecated | <br />**Values**: Informational, Coaching, AssessedContent, Assessment, External, Native |

### Return type

**DevelopmentActivity**


## getUsersExternalidAuthorityNameExternalKey

> User getUsersExternalidAuthorityNameExternalKey(authorityName, externalKey, opts)


GET /api/v2/users/externalid/{authorityName}/{externalKey}

Get the user associated with external identifier.

Authority name and external key are case sensitive.

Requires NO permissions:

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.UsersApi();

let authorityName = "authorityName_example"; // String | Authority Name
let externalKey = "externalKey_example"; // String | External Key
let opts = { 
  'expand': ["expand_example"] // [String] | Which fields, if any, to expand
};

apiInstance.getUsersExternalidAuthorityNameExternalKey(authorityName, externalKey, opts)
  .then((data) => {
    console.log(`getUsersExternalidAuthorityNameExternalKey success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getUsersExternalidAuthorityNameExternalKey');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **authorityName** | **String** | Authority Name |  |
 **externalKey** | **String** | External Key |  |
 **expand** | **[String]** | Which fields, if any, to expand | [optional] <br />**Values**: routingStatus, presence, integrationPresence, conversationSummary, outOfOffice, geolocation, station, authorization, lasttokenissued, authorization.unusedRoles, team, workPlanBidRanks, externalContactsSettings, groups, profileSkills, certifications, locations, skills, languages, languagePreference, employerInfo, biography, dateLastLogin, dateWelcomeSent |

### Return type

**User**


## getUsersMe

> UserMe getUsersMe(opts)


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

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
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
 **expand** | **[String]** | Which fields, if any, to expand. | [optional] <br />**Values**: routingStatus, presence, integrationPresence, conversationSummary, outOfOffice, geolocation, station, authorization, lasttokenissued, authorization.unusedRoles, team, workPlanBidRanks, externalContactsSettings, groups, profileSkills, certifications, locations, skills, languages, languagePreference, employerInfo, biography, dateLastLogin, dateWelcomeSent, date, geolocationsettings, organization, presencedefinitions, divisionedpresencedefinitions, locationdefinitions, orgauthorization, orgproducts, favorites, superiors, directreports, adjacents, routingskills, routinglanguages, fieldconfigs, token, trustors, logCapture, autoanswersettings |
 **integrationPresenceSource** | **String** | Get your presence for a given integration. This parameter will only be used when presence is provided as an expand. | [optional] <br />**Values**: MicrosoftTeams, ZoomPhone, EightByEight |

### Return type

**UserMe**


## getUsersQuery

> UserCursorEntityListing getUsersQuery(opts)


GET /api/v2/users/query

Get list of available users, paged by cursor token, No division filtering available so directory:user:view permission for all divisions is required

getUsersQuery is a preview method and is subject to both breaking and non-breaking changes at any time without notice

Requires ANY permissions:

* directory:user:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.UsersApi();

let opts = { 
  'cursor': "cursor_example", // String | Cursor token to retrieve next page
  'pageSize': 25, // Number | Page size
  'sortOrder': "ASC", // String | Ascending or descending sort order
  'expand': ["expand_example"], // [String] | Which fields, if any, to expand. Note, expand parameters are resolved with a best effort approach and not guaranteed to be returned. If requested expand information is absolutely required, it's recommended to use specific API requests instead.
  'integrationPresenceSource': "integrationPresenceSource_example", // String | Gets an integration presence for users instead of their defaults. This parameter will only be used when presence is provided as an expand. When using this parameter the maximum number of users that can be returned is 100.
  'state': "active" // String | Only list users of this state
};

apiInstance.getUsersQuery(opts)
  .then((data) => {
    console.log(`getUsersQuery success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getUsersQuery');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **cursor** | **String** | Cursor token to retrieve next page | [optional]  |
 **pageSize** | **Number** | Page size | [optional] [default to 25] |
 **sortOrder** | **String** | Ascending or descending sort order | [optional] [default to ASC]<br />**Values**: ASC, DESC |
 **expand** | **[String]** | Which fields, if any, to expand. Note, expand parameters are resolved with a best effort approach and not guaranteed to be returned. If requested expand information is absolutely required, it's recommended to use specific API requests instead. | [optional] <br />**Values**: routingStatus, presence, integrationPresence, conversationSummary, outOfOffice, geolocation, station, authorization, lasttokenissued, authorization.unusedRoles, team, workPlanBidRanks, externalContactsSettings, groups, profileSkills, certifications, locations, skills, languages, languagePreference, employerInfo, biography, dateLastLogin, dateWelcomeSent |
 **integrationPresenceSource** | **String** | Gets an integration presence for users instead of their defaults. This parameter will only be used when presence is provided as an expand. When using this parameter the maximum number of users that can be returned is 100. | [optional] <br />**Values**: MicrosoftTeams, ZoomPhone, EightByEight |
 **state** | **String** | Only list users of this state | [optional] [default to active]<br />**Values**: active, inactive, deleted, any |

### Return type

**UserCursorEntityListing**


## getUsersSearch

> UsersSearchResponse getUsersSearch(q64, opts)


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

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
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

### Return type

**UsersSearchResponse**


## patchUser

> User patchUser(userId, body)


PATCH /api/v2/users/{userId}

Update user

Requires ANY permissions:

* admin
* directory:user:edit
* directory:organization:admin

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
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

### Return type

**User**


## patchUserCallforwarding

> CallForwarding patchUserCallforwarding(userId, body)


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

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
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

### Return type

**CallForwarding**


## patchUserGeolocation

> Geolocation patchUserGeolocation(userId, clientId, body)


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

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
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

### Return type

**Geolocation**


## patchUserQueue

> UserQueue patchUserQueue(queueId, userId, body)


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

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
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

### Return type

**UserQueue**


## patchUserQueues

> UserQueueEntityListing patchUserQueues(userId, body, opts)


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

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
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

### Return type

**UserQueueEntityListing**


## patchUserRoutinglanguage

> UserRoutingLanguage patchUserRoutinglanguage(userId, languageId, body)


PATCH /api/v2/users/{userId}/routinglanguages/{languageId}

Update an assigned routing language's proficiency

Requires ANY permissions:

* routing:skill:assign
* routing:language:assign

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
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

### Return type

**UserRoutingLanguage**


## patchUserRoutinglanguagesBulk

> UserLanguageEntityListing patchUserRoutinglanguagesBulk(userId, body)


PATCH /api/v2/users/{userId}/routinglanguages/bulk

Assign multiple routing languages to a user. Max 50 routing languages in request body

Requires ANY permissions:

* routing:skill:assign
* routing:language:assign

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
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

### Return type

**UserLanguageEntityListing**


## patchUserRoutingskillsBulk

> UserSkillEntityListing patchUserRoutingskillsBulk(userId, body)


PATCH /api/v2/users/{userId}/routingskills/bulk

Assign multiple routing skills to a user

Requires ANY permissions:

* routing:skill:assign

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
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

### Return type

**UserSkillEntityListing**


## patchUsersBulk

> UserEntityListing patchUsersBulk(body)


PATCH /api/v2/users/bulk

Update bulk acd autoanswer on users. Max 50 users can be updated at a time.

Requires ANY permissions:

* directory:user:edit
* directory:organization:admin

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
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

### Return type

**UserEntityListing**


## postAnalyticsUsersActivityQuery

> UserActivityResponse postAnalyticsUsersActivityQuery(body, opts)


POST /api/v2/analytics/users/activity/query

Query for user activity observations

Requires ANY permissions:

* analytics:userObservation:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
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

### Return type

**UserActivityResponse**


## postAnalyticsUsersAggregatesJobs

> AsyncQueryResponse postAnalyticsUsersAggregatesJobs(body)


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

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
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

### Return type

**AsyncQueryResponse**


## postAnalyticsUsersAggregatesQuery

> UserAggregateQueryResponse postAnalyticsUsersAggregatesQuery(body)


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

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
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

### Return type

**UserAggregateQueryResponse**


## postAnalyticsUsersDetailsJobs

> AsyncQueryResponse postAnalyticsUsersDetailsJobs(body)


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

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
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

### Return type

**AsyncQueryResponse**


## postAnalyticsUsersDetailsQuery

> AnalyticsUserDetailsQueryResponse postAnalyticsUsersDetailsQuery(body)


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

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
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

### Return type

**AnalyticsUserDetailsQueryResponse**


## postAnalyticsUsersObservationsQuery

> UserObservationQueryResponse postAnalyticsUsersObservationsQuery(body)


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

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
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

### Return type

**UserObservationQueryResponse**


## postAuthorizationSubjectBulkadd

> void postAuthorizationSubjectBulkadd(subjectId, body, opts)


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

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
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

### Return type

void (no response body)


## postAuthorizationSubjectBulkremove

> void postAuthorizationSubjectBulkremove(subjectId, body)


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

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
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

### Return type

void (no response body)


## postAuthorizationSubjectBulkreplace

> void postAuthorizationSubjectBulkreplace(subjectId, body, opts)


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

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
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

### Return type

void (no response body)


## postAuthorizationSubjectDivisionRole

> void postAuthorizationSubjectDivisionRole(subjectId, divisionId, roleId, opts)


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

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
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

### Return type

void (no response body)


## postUserExternalid

> [UserExternalIdentifier] postUserExternalid(userId, body)


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

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
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

### Return type

**[UserExternalIdentifier]**


## postUserInvite

> void postUserInvite(userId, opts)


POST /api/v2/users/{userId}/invite

Send an activation email to the user

Requires ANY permissions:

* admin
* directory:organization:admin
* directory:user:setPassword

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
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

### Return type

void (no response body)


## postUserPassword

> void postUserPassword(userId, body)


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

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
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

### Return type

void (no response body)


## postUserRoutinglanguages

> UserRoutingLanguage postUserRoutinglanguages(userId, body)


POST /api/v2/users/{userId}/routinglanguages

Assign a routing language to a user

Requires ANY permissions:

* routing:skill:assign
* routing:language:assign

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
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

### Return type

**UserRoutingLanguage**


## postUserRoutingskills

> UserRoutingSkill postUserRoutingskills(userId, body)


POST /api/v2/users/{userId}/routingskills

Assign a routing skill to a user

Requires ALL permissions:

* routing:skill:assign

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
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

### Return type

**UserRoutingSkill**


## postUsers

> User postUsers(body)


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

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
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

### Return type

**User**


## postUsersDevelopmentActivitiesAggregatesQuery

> DevelopmentActivityAggregateResponse postUsersDevelopmentActivitiesAggregatesQuery(body)


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

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
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

### Return type

**DevelopmentActivityAggregateResponse**


## postUsersMePassword

> void postUsersMePassword(body)


POST /api/v2/users/me/password

Change your password

Requires NO permissions:

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
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

### Return type

void (no response body)


## postUsersSearch

> UsersSearchResponse postUsersSearch(body)


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

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
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

### Return type

**UsersSearchResponse**


## postUsersSearchConversationTarget

> UsersSearchResponse postUsersSearchConversationTarget(body)


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

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
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

### Return type

**UsersSearchResponse**


## postUsersSearchQueuemembersManage

> UsersSearchResponse postUsersSearchQueuemembersManage(body)


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

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
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

### Return type

**UsersSearchResponse**


## postUsersSearchTeamsAssign

> UsersSearchResponse postUsersSearchTeamsAssign(body)


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

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
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

### Return type

**UsersSearchResponse**


## putRoutingDirectroutingbackupSettingsMe

> AgentDirectRoutingBackupSettings putRoutingDirectroutingbackupSettingsMe(body)


PUT /api/v2/routing/directroutingbackup/settings/me

Update the user's Direct Routing Backup settings.

Requires ANY permissions:

* routing:directRoutingBackup:selfEdit

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.UsersApi();

let body = {}; // Object | directRoutingBackup

apiInstance.putRoutingDirectroutingbackupSettingsMe(body)
  .then((data) => {
    console.log(`putRoutingDirectroutingbackupSettingsMe success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling putRoutingDirectroutingbackupSettingsMe');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **body** | **Object** | directRoutingBackup |  |

### Return type

**AgentDirectRoutingBackupSettings**


## putRoutingUserDirectroutingbackupSettings

> AgentDirectRoutingBackupSettings putRoutingUserDirectroutingbackupSettings(userId, body)


PUT /api/v2/routing/users/{userId}/directroutingbackup/settings

Update the user's Direct Routing Backup settings.

Requires ANY permissions:

* routing:directRoutingBackup:edit

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.UsersApi();

let userId = "userId_example"; // String | User ID
let body = {}; // Object | directRoutingBackup

apiInstance.putRoutingUserDirectroutingbackupSettings(userId, body)
  .then((data) => {
    console.log(`putRoutingUserDirectroutingbackupSettings success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling putRoutingUserDirectroutingbackupSettings');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **userId** | **String** | User ID |  |
 **body** | **Object** | directRoutingBackup |  |

### Return type

**AgentDirectRoutingBackupSettings**


## putRoutingUserUtilization

> AgentMaxUtilizationResponse putRoutingUserUtilization(userId, body)


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

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
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

### Return type

**AgentMaxUtilizationResponse**


## putUserCallforwarding

> CallForwarding putUserCallforwarding(userId, body)


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

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
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

### Return type

**CallForwarding**


## putUserOutofoffice

> OutOfOffice putUserOutofoffice(userId, body)


PUT /api/v2/users/{userId}/outofoffice

Update an OutOfOffice

Requires NO permissions:

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
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

### Return type

**OutOfOffice**


## putUserProfileskills

> **[&#39;String&#39;]** putUserProfileskills(userId, body)


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

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
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

### Return type

**[&#39;String&#39;]**


## putUserRoles

> UserAuthorization putUserRoles(subjectId, body)


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

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
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

### Return type

**UserAuthorization**


## putUserRoutingskill

> UserRoutingSkill putUserRoutingskill(userId, skillId, body)


PUT /api/v2/users/{userId}/routingskills/{skillId}

Update an assigned routing skill's proficiency

Requires ALL permissions:

* routing:skill:assign

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
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

### Return type

**UserRoutingSkill**


## putUserRoutingskillsBulk

> UserSkillEntityListing putUserRoutingskillsBulk(userId, body)


PUT /api/v2/users/{userId}/routingskills/bulk

Assign multiple routing skills to a user, replacing any current assignments

Requires ANY permissions:

* routing:skill:assign

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
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

### Return type

**UserSkillEntityListing**


## putUserRoutingstatus

> RoutingStatus putUserRoutingstatus(userId, body)


PUT /api/v2/users/{userId}/routingstatus

Update the routing status of a user

Requires NO permissions:

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
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

### Return type

**RoutingStatus**


## putUserState

> UserState putUserState(userId, body)


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

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
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

### Return type

**UserState**


## putUserStationAssociatedstationStationId

> void putUserStationAssociatedstationStationId(userId, stationId)


PUT /api/v2/users/{userId}/station/associatedstation/{stationId}

Set associated station

Requires NO permissions:

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
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

### Return type

void (no response body)


## putUserStationDefaultstationStationId

> void putUserStationDefaultstationStationId(userId, stationId)


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

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
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

### Return type

void (no response body)


## putUserVerifier

> Verifier putUserVerifier(userId, verifierId, body)


PUT /api/v2/users/{userId}/verifiers/{verifierId}

Update a verifier

Requires ANY permissions:

* mfa:verifier:edit

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.UsersApi();

let userId = "userId_example"; // String | User ID
let verifierId = "verifierId_example"; // String | Verifier ID
let body = {}; // Object | Verifier Update

apiInstance.putUserVerifier(userId, verifierId, body)
  .then((data) => {
    console.log(`putUserVerifier success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling putUserVerifier');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **userId** | **String** | User ID |  |
 **verifierId** | **String** | Verifier ID |  |
 **body** | **Object** | Verifier Update |  |

### Return type

**Verifier**


_purecloud-platform-client-v2@229.1.0_
