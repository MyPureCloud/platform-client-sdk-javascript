---
title: UsersApi
---
# platformClient.UsersApi

All URIs are relative to *https://api.mypurecloud.com*

| Method | HTTP request | Description |
| ------------- | ------------- | ------------- |
[**deleteUser**](UsersApi.html#deleteUser) | **DELETE** /api/v2/users/{userId} | Delete user
[**deleteUserRoles**](UsersApi.html#deleteUserRoles) | **DELETE** /api/v2/users/{userId}/roles | Removes all the roles from the user.
[**deleteUserRoutinglanguage**](UsersApi.html#deleteUserRoutinglanguage) | **DELETE** /api/v2/users/{userId}/routinglanguages/{languageId} | Remove routing language from user
[**deleteUserRoutingskill**](UsersApi.html#deleteUserRoutingskill) | **DELETE** /api/v2/users/{userId}/routingskills/{skillId} | Remove routing skill from user
[**deleteUserStationAssociatedstation**](UsersApi.html#deleteUserStationAssociatedstation) | **DELETE** /api/v2/users/{userId}/station/associatedstation | Clear associated station
[**deleteUserStationDefaultstation**](UsersApi.html#deleteUserStationDefaultstation) | **DELETE** /api/v2/users/{userId}/station/defaultstation | Clear default station
[**getFieldconfig**](UsersApi.html#getFieldconfig) | **GET** /api/v2/fieldconfig | Fetch field config for an entity type
[**getProfilesUsers**](UsersApi.html#getProfilesUsers) | **GET** /api/v2/profiles/users | Get a user profile listing
[**getUser**](UsersApi.html#getUser) | **GET** /api/v2/users/{userId} | Get user.
[**getUserAdjacents**](UsersApi.html#getUserAdjacents) | **GET** /api/v2/users/{userId}/adjacents | Get adjacents
[**getUserCallforwarding**](UsersApi.html#getUserCallforwarding) | **GET** /api/v2/users/{userId}/callforwarding | Get a user&#39;s CallForwarding
[**getUserDirectreports**](UsersApi.html#getUserDirectreports) | **GET** /api/v2/users/{userId}/directreports | Get direct reports
[**getUserFavorites**](UsersApi.html#getUserFavorites) | **GET** /api/v2/users/{userId}/favorites | Get favorites
[**getUserGeolocation**](UsersApi.html#getUserGeolocation) | **GET** /api/v2/users/{userId}/geolocations/{clientId} | Get a user&#39;s Geolocation
[**getUserOutofoffice**](UsersApi.html#getUserOutofoffice) | **GET** /api/v2/users/{userId}/outofoffice | Get a OutOfOffice
[**getUserProfile**](UsersApi.html#getUserProfile) | **GET** /api/v2/users/{userId}/profile | Get user profile
[**getUserProfileskills**](UsersApi.html#getUserProfileskills) | **GET** /api/v2/users/{userId}/profileskills | List profile skills for a user
[**getUserQueues**](UsersApi.html#getUserQueues) | **GET** /api/v2/users/{userId}/queues | Get queues for user
[**getUserRoles**](UsersApi.html#getUserRoles) | **GET** /api/v2/users/{userId}/roles | Returns a listing of roles and permissions for a user.
[**getUserRoutinglanguages**](UsersApi.html#getUserRoutinglanguages) | **GET** /api/v2/users/{userId}/routinglanguages | List routing language for user
[**getUserRoutingskills**](UsersApi.html#getUserRoutingskills) | **GET** /api/v2/users/{userId}/routingskills | List routing skills for user
[**getUserRoutingstatus**](UsersApi.html#getUserRoutingstatus) | **GET** /api/v2/users/{userId}/routingstatus | Fetch the routing status of a user
[**getUserStation**](UsersApi.html#getUserStation) | **GET** /api/v2/users/{userId}/station | Get station information for user
[**getUserSuperiors**](UsersApi.html#getUserSuperiors) | **GET** /api/v2/users/{userId}/superiors | Get superiors
[**getUserTrustors**](UsersApi.html#getUserTrustors) | **GET** /api/v2/users/{userId}/trustors | List the organizations that have authorized/trusted the user.
[**getUsers**](UsersApi.html#getUsers) | **GET** /api/v2/users | Get the list of available users.
[**getUsersMe**](UsersApi.html#getUsersMe) | **GET** /api/v2/users/me | Get current user details.
[**getUsersSearch**](UsersApi.html#getUsersSearch) | **GET** /api/v2/users/search | Search users using the q64 value returned from a previous search
[**patchUser**](UsersApi.html#patchUser) | **PATCH** /api/v2/users/{userId} | Update user
[**patchUserCallforwarding**](UsersApi.html#patchUserCallforwarding) | **PATCH** /api/v2/users/{userId}/callforwarding | Patch a user&#39;s CallForwarding
[**patchUserGeolocation**](UsersApi.html#patchUserGeolocation) | **PATCH** /api/v2/users/{userId}/geolocations/{clientId} | Patch a user&#39;s Geolocation
[**patchUserQueue**](UsersApi.html#patchUserQueue) | **PATCH** /api/v2/users/{userId}/queues/{queueId} | Join or unjoin a queue for a user
[**patchUserQueues**](UsersApi.html#patchUserQueues) | **PATCH** /api/v2/users/{userId}/queues | Join or unjoin a set of queues for a user
[**patchUserRoutinglanguage**](UsersApi.html#patchUserRoutinglanguage) | **PATCH** /api/v2/users/{userId}/routinglanguages/{languageId} | Update routing language proficiency or state.
[**patchUsersBulk**](UsersApi.html#patchUsersBulk) | **PATCH** /api/v2/users/bulk | Update bulk acd autoanswer on users
[**postAnalyticsUsersAggregatesQuery**](UsersApi.html#postAnalyticsUsersAggregatesQuery) | **POST** /api/v2/analytics/users/aggregates/query | Query for user aggregates
[**postAnalyticsUsersDetailsQuery**](UsersApi.html#postAnalyticsUsersDetailsQuery) | **POST** /api/v2/analytics/users/details/query | Query for user details
[**postAnalyticsUsersObservationsQuery**](UsersApi.html#postAnalyticsUsersObservationsQuery) | **POST** /api/v2/analytics/users/observations/query | Query for user observations
[**postUserInvite**](UsersApi.html#postUserInvite) | **POST** /api/v2/users/{userId}/invite | Send an activation email to the user
[**postUserPassword**](UsersApi.html#postUserPassword) | **POST** /api/v2/users/{userId}/password | Change a users password
[**postUserRoutinglanguages**](UsersApi.html#postUserRoutinglanguages) | **POST** /api/v2/users/{userId}/routinglanguages | Add routing language to user
[**postUserRoutingskills**](UsersApi.html#postUserRoutingskills) | **POST** /api/v2/users/{userId}/routingskills | Add routing skill to user
[**postUsers**](UsersApi.html#postUsers) | **POST** /api/v2/users | Create user
[**postUsersMePassword**](UsersApi.html#postUsersMePassword) | **POST** /api/v2/users/me/password | Change your password
[**postUsersSearch**](UsersApi.html#postUsersSearch) | **POST** /api/v2/users/search | Search users
[**putUserCallforwarding**](UsersApi.html#putUserCallforwarding) | **PUT** /api/v2/users/{userId}/callforwarding | Update a user&#39;s CallForwarding
[**putUserOutofoffice**](UsersApi.html#putUserOutofoffice) | **PUT** /api/v2/users/{userId}/outofoffice | Update an OutOfOffice
[**putUserProfileskills**](UsersApi.html#putUserProfileskills) | **PUT** /api/v2/users/{userId}/profileskills | Update profile skills for a user
[**putUserRoles**](UsersApi.html#putUserRoles) | **PUT** /api/v2/users/{userId}/roles | Sets the user&#39;s roles
[**putUserRoutingskill**](UsersApi.html#putUserRoutingskill) | **PUT** /api/v2/users/{userId}/routingskills/{skillId} | Update routing skill proficiency or state.
[**putUserRoutingstatus**](UsersApi.html#putUserRoutingstatus) | **PUT** /api/v2/users/{userId}/routingstatus | Update the routing status of a user
[**putUserStationAssociatedstationStationId**](UsersApi.html#putUserStationAssociatedstationStationId) | **PUT** /api/v2/users/{userId}/station/associatedstation/{stationId} | Set associated station
[**putUserStationDefaultstationStationId**](UsersApi.html#putUserStationDefaultstationStationId) | **PUT** /api/v2/users/{userId}/station/defaultstation/{stationId} | Set default station
{: class="table table-striped"}

<a name="deleteUser"></a>

# Empty deleteUser(userId)



DELETE /api/v2/users/{userId}

Delete user



Requires NO permissions: 




### Example Usage

~~~ javascript
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Configure OAuth2 access token for authorization: PureCloud Auth
platformClient.ApiClient.instance.authentications['PureCloud Auth'].accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new platformClient.UsersApi();

var userId = "userId_example"; // String | User ID

apiInstance.deleteUser(userId)
  .then(function(data) {
    console.log(`deleteUser success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch(function(err) {
  	console.log('There was a failure calling deleteUser');
    console.error(err);
  });

~~~

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **userId** | **String** | User ID |  |
{: class="table table-striped"}

### Return type

**Empty**

<a name="deleteUserRoles"></a>

# void deleteUserRoles(userId)



DELETE /api/v2/users/{userId}/roles

Removes all the roles from the user.



Requires ANY permissions: 

* admin
* role_manager
* authorization:grant:delete



### Example Usage

~~~ javascript
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Configure OAuth2 access token for authorization: PureCloud Auth
platformClient.ApiClient.instance.authentications['PureCloud Auth'].accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new platformClient.UsersApi();

var userId = "userId_example"; // String | User ID

apiInstance.deleteUserRoles(userId)
  .then(function() {
    console.log('deleteUserRoles returned successfully.');
  })
  .catch(function(err) {
  	console.log('There was a failure calling deleteUserRoles');
    console.error(err);
  });

~~~

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **userId** | **String** | User ID |  |
{: class="table table-striped"}

### Return type

void (no response body)

<a name="deleteUserRoutinglanguage"></a>

# void deleteUserRoutinglanguage(userId, languageId)



DELETE /api/v2/users/{userId}/routinglanguages/{languageId}

Remove routing language from user



Requires ANY permissions: 

* routing:skill:assign
* admin



### Example Usage

~~~ javascript
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Configure OAuth2 access token for authorization: PureCloud Auth
platformClient.ApiClient.instance.authentications['PureCloud Auth'].accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new platformClient.UsersApi();

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



Requires ANY permissions: 

* routing:skill:assign
* admin



### Example Usage

~~~ javascript
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Configure OAuth2 access token for authorization: PureCloud Auth
platformClient.ApiClient.instance.authentications['PureCloud Auth'].accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new platformClient.UsersApi();

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

<a name="deleteUserStationAssociatedstation"></a>

# void deleteUserStationAssociatedstation(userId)



DELETE /api/v2/users/{userId}/station/associatedstation

Clear associated station



Requires NO permissions: 




### Example Usage

~~~ javascript
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Configure OAuth2 access token for authorization: PureCloud Auth
platformClient.ApiClient.instance.authentications['PureCloud Auth'].accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new platformClient.UsersApi();

var userId = "userId_example"; // String | User ID

apiInstance.deleteUserStationAssociatedstation(userId)
  .then(function() {
    console.log('deleteUserStationAssociatedstation returned successfully.');
  })
  .catch(function(err) {
  	console.log('There was a failure calling deleteUserStationAssociatedstation');
    console.error(err);
  });

~~~

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

~~~ javascript
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Configure OAuth2 access token for authorization: PureCloud Auth
platformClient.ApiClient.instance.authentications['PureCloud Auth'].accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new platformClient.UsersApi();

var userId = "userId_example"; // String | User ID

apiInstance.deleteUserStationDefaultstation(userId)
  .then(function() {
    console.log('deleteUserStationDefaultstation returned successfully.');
  })
  .catch(function(err) {
  	console.log('There was a failure calling deleteUserStationDefaultstation');
    console.error(err);
  });

~~~

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **userId** | **String** | User ID |  |
{: class="table table-striped"}

### Return type

void (no response body)

<a name="getFieldconfig"></a>

# FieldConfig getFieldconfig(type)



GET /api/v2/fieldconfig

Fetch field config for an entity type



Requires NO permissions: 




### Example Usage

~~~ javascript
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Configure OAuth2 access token for authorization: PureCloud Auth
platformClient.ApiClient.instance.authentications['PureCloud Auth'].accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new platformClient.UsersApi();

var type = "type_example"; // String | Field type

apiInstance.getFieldconfig(type)
  .then(function(data) {
    console.log(`getFieldconfig success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch(function(err) {
  	console.log('There was a failure calling getFieldconfig');
    console.error(err);
  });

~~~

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **type** | **String** | Field type | <br />**Values**: person, group, org, externalContact |
{: class="table table-striped"}

### Return type

**FieldConfig**

<a name="getProfilesUsers"></a>

# UserProfileEntityListing getProfilesUsers(opts)



GET /api/v2/profiles/users

Get a user profile listing



Requires NO permissions: 




### Example Usage

~~~ javascript
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Configure OAuth2 access token for authorization: PureCloud Auth
platformClient.ApiClient.instance.authentications['PureCloud Auth'].accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new platformClient.UsersApi();

var opts = { 
  'pageSize': 25, // Number | Page size
  'pageNumber': 1, // Number | Page number
  'id': ["id_example"], // [String] | id
  'jid': ["jid_example"], // [String] | jid
  'sortOrder': "ASC", // String | Ascending or descending sort order
  'expand': ["expand_example"], // [String] | Which fields, if any, to expand
  'state': "active" // String | Only list users of this state
};
apiInstance.getProfilesUsers(opts)
  .then(function(data) {
    console.log(`getProfilesUsers success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch(function(err) {
  	console.log('There was a failure calling getProfilesUsers');
    console.error(err);
  });

~~~

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **pageSize** | **Number** | Page size | [optional] [default to 25] |
 **pageNumber** | **Number** | Page number | [optional] [default to 1] |
 **id** | **[String]** | id | [optional]  |
 **jid** | **[String]** | jid | [optional]  |
 **sortOrder** | **String** | Ascending or descending sort order | [optional] [default to ASC]<br />**Values**: ascending, descending |
 **expand** | **[String]** | Which fields, if any, to expand | [optional] <br />**Values**: routingStatus, presence, conversationSummary, outOfOffice, geolocation, station, authorization |
 **state** | **String** | Only list users of this state | [optional] [default to active]<br />**Values**: active, deleted |
{: class="table table-striped"}

### Return type

**UserProfileEntityListing**

<a name="getUser"></a>

# User getUser(userId, opts)



GET /api/v2/users/{userId}

Get user.



Requires NO permissions: 




### Example Usage

~~~ javascript
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Configure OAuth2 access token for authorization: PureCloud Auth
platformClient.ApiClient.instance.authentications['PureCloud Auth'].accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new platformClient.UsersApi();

var userId = "userId_example"; // String | User ID

var opts = { 
  'expand': ["expand_example"], // [String] | Which fields, if any, to expand
  'state': "active" // String | Search for a user with this state
};
apiInstance.getUser(userId, opts)
  .then(function(data) {
    console.log(`getUser success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch(function(err) {
  	console.log('There was a failure calling getUser');
    console.error(err);
  });

~~~

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **userId** | **String** | User ID |  |
 **expand** | **[String]** | Which fields, if any, to expand | [optional] <br />**Values**: routingStatus, presence, conversationSummary, outOfOffice, geolocation, station, authorization, profileSkills, locations, groups |
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

~~~ javascript
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Configure OAuth2 access token for authorization: PureCloud Auth
platformClient.ApiClient.instance.authentications['PureCloud Auth'].accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new platformClient.UsersApi();

var userId = "userId_example"; // String | User ID

var opts = { 
  'expand': ["expand_example"] // [String] | Which fields, if any, to expand
};
apiInstance.getUserAdjacents(userId, opts)
  .then(function(data) {
    console.log(`getUserAdjacents success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch(function(err) {
  	console.log('There was a failure calling getUserAdjacents');
    console.error(err);
  });

~~~

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **userId** | **String** | User ID |  |
 **expand** | **[String]** | Which fields, if any, to expand | [optional] <br />**Values**: routingStatus, presence, conversationSummary, outOfOffice, geolocation, station, authorization, profileSkills, locations, groups |
{: class="table table-striped"}

### Return type

**Adjacents**

<a name="getUserCallforwarding"></a>

# CallForwarding getUserCallforwarding(userId)



GET /api/v2/users/{userId}/callforwarding

Get a user&#39;s CallForwarding



Requires NO permissions: 




### Example Usage

~~~ javascript
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Configure OAuth2 access token for authorization: PureCloud Auth
platformClient.ApiClient.instance.authentications['PureCloud Auth'].accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new platformClient.UsersApi();

var userId = "userId_example"; // String | User ID

apiInstance.getUserCallforwarding(userId)
  .then(function(data) {
    console.log(`getUserCallforwarding success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch(function(err) {
  	console.log('There was a failure calling getUserCallforwarding');
    console.error(err);
  });

~~~

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

~~~ javascript
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Configure OAuth2 access token for authorization: PureCloud Auth
platformClient.ApiClient.instance.authentications['PureCloud Auth'].accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new platformClient.UsersApi();

var userId = "userId_example"; // String | User ID

var opts = { 
  'expand': ["expand_example"] // [String] | Which fields, if any, to expand
};
apiInstance.getUserDirectreports(userId, opts)
  .then(function(data) {
    console.log(`getUserDirectreports success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch(function(err) {
  	console.log('There was a failure calling getUserDirectreports');
    console.error(err);
  });

~~~

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **userId** | **String** | User ID |  |
 **expand** | **[String]** | Which fields, if any, to expand | [optional] <br />**Values**: routingStatus, presence, conversationSummary, outOfOffice, geolocation, station, authorization, profileSkills, locations, groups |
{: class="table table-striped"}

### Return type

**[User]**

<a name="getUserFavorites"></a>

# UserEntityListing getUserFavorites(userId, opts)



GET /api/v2/users/{userId}/favorites

Get favorites



Requires NO permissions: 




### Example Usage

~~~ javascript
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Configure OAuth2 access token for authorization: PureCloud Auth
platformClient.ApiClient.instance.authentications['PureCloud Auth'].accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new platformClient.UsersApi();

var userId = "userId_example"; // String | User ID

var opts = { 
  'pageSize': 25, // Number | Page size
  'pageNumber': 1, // Number | Page number
  'sortOrder': "ASC", // String | Sort order
  'expand': ["expand_example"] // [String] | Which fields, if any, to expand
};
apiInstance.getUserFavorites(userId, opts)
  .then(function(data) {
    console.log(`getUserFavorites success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch(function(err) {
  	console.log('There was a failure calling getUserFavorites');
    console.error(err);
  });

~~~

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **userId** | **String** | User ID |  |
 **pageSize** | **Number** | Page size | [optional] [default to 25] |
 **pageNumber** | **Number** | Page number | [optional] [default to 1] |
 **sortOrder** | **String** | Sort order | [optional] [default to ASC] |
 **expand** | **[String]** | Which fields, if any, to expand | [optional] <br />**Values**: routingStatus, presence, conversationSummary, outOfOffice, geolocation, station, authorization, profileSkills, locations, groups |
{: class="table table-striped"}

### Return type

**UserEntityListing**

<a name="getUserGeolocation"></a>

# Geolocation getUserGeolocation(userId, clientId)



GET /api/v2/users/{userId}/geolocations/{clientId}

Get a user&#39;s Geolocation



Requires NO permissions: 




### Example Usage

~~~ javascript
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Configure OAuth2 access token for authorization: PureCloud Auth
platformClient.ApiClient.instance.authentications['PureCloud Auth'].accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new platformClient.UsersApi();

var userId = "userId_example"; // String | user Id

var clientId = "clientId_example"; // String | client Id

apiInstance.getUserGeolocation(userId, clientId)
  .then(function(data) {
    console.log(`getUserGeolocation success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch(function(err) {
  	console.log('There was a failure calling getUserGeolocation');
    console.error(err);
  });

~~~

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

~~~ javascript
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Configure OAuth2 access token for authorization: PureCloud Auth
platformClient.ApiClient.instance.authentications['PureCloud Auth'].accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new platformClient.UsersApi();

var userId = "userId_example"; // String | User ID

apiInstance.getUserOutofoffice(userId)
  .then(function(data) {
    console.log(`getUserOutofoffice success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch(function(err) {
  	console.log('There was a failure calling getUserOutofoffice');
    console.error(err);
  });

~~~

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **userId** | **String** | User ID |  |
{: class="table table-striped"}

### Return type

**OutOfOffice**

<a name="getUserProfile"></a>

# UserProfile getUserProfile(userId, opts)



GET /api/v2/users/{userId}/profile

Get user profile



Requires NO permissions: 




### Example Usage

~~~ javascript
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Configure OAuth2 access token for authorization: PureCloud Auth
platformClient.ApiClient.instance.authentications['PureCloud Auth'].accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new platformClient.UsersApi();

var userId = "userId_example"; // String | userId

var opts = { 
  'expand': ["expand_example"] // [String] | Which fields, if any, to expand
};
apiInstance.getUserProfile(userId, opts)
  .then(function(data) {
    console.log(`getUserProfile success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch(function(err) {
  	console.log('There was a failure calling getUserProfile');
    console.error(err);
  });

~~~

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **userId** | **String** | userId |  |
 **expand** | **[String]** | Which fields, if any, to expand | [optional] <br />**Values**: routingStatus, presence, conversationSummary, outOfOffice, geolocation, station, authorization, profileSkills, locations, groups |
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

~~~ javascript
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Configure OAuth2 access token for authorization: PureCloud Auth
platformClient.ApiClient.instance.authentications['PureCloud Auth'].accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new platformClient.UsersApi();

var userId = "userId_example"; // String | User ID

apiInstance.getUserProfileskills(userId)
  .then(function(data) {
    console.log(`getUserProfileskills success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch(function(err) {
  	console.log('There was a failure calling getUserProfileskills');
    console.error(err);
  });

~~~

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



### Example Usage

~~~ javascript
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Configure OAuth2 access token for authorization: PureCloud Auth
platformClient.ApiClient.instance.authentications['PureCloud Auth'].accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new platformClient.UsersApi();

var userId = "userId_example"; // String | User ID

var opts = { 
  'pageSize': 25, // Number | Page size
  'pageNumber': 1, // Number | Page number
  'joined': true, // Boolean | Is joined to the queue
  'divisionId': ["divisionId_example"] // [String] | Division ID(s)
};
apiInstance.getUserQueues(userId, opts)
  .then(function(data) {
    console.log(`getUserQueues success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch(function(err) {
  	console.log('There was a failure calling getUserQueues');
    console.error(err);
  });

~~~

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

# UserAuthorization getUserRoles(userId)



GET /api/v2/users/{userId}/roles

Returns a listing of roles and permissions for a user.



Requires ANY permissions: 

* authorization:grant:view



### Example Usage

~~~ javascript
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Configure OAuth2 access token for authorization: PureCloud Auth
platformClient.ApiClient.instance.authentications['PureCloud Auth'].accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new platformClient.UsersApi();

var userId = "userId_example"; // String | User ID

apiInstance.getUserRoles(userId)
  .then(function(data) {
    console.log(`getUserRoles success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch(function(err) {
  	console.log('There was a failure calling getUserRoles');
    console.error(err);
  });

~~~

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **userId** | **String** | User ID |  |
{: class="table table-striped"}

### Return type

**UserAuthorization**

<a name="getUserRoutinglanguages"></a>

# UserLanguageEntityListing getUserRoutinglanguages(userId, opts)



GET /api/v2/users/{userId}/routinglanguages

List routing language for user



Requires NO permissions: 




### Example Usage

~~~ javascript
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Configure OAuth2 access token for authorization: PureCloud Auth
platformClient.ApiClient.instance.authentications['PureCloud Auth'].accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new platformClient.UsersApi();

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



Requires NO permissions: 




### Example Usage

~~~ javascript
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Configure OAuth2 access token for authorization: PureCloud Auth
platformClient.ApiClient.instance.authentications['PureCloud Auth'].accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new platformClient.UsersApi();

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

<a name="getUserRoutingstatus"></a>

# RoutingStatus getUserRoutingstatus(userId)



GET /api/v2/users/{userId}/routingstatus

Fetch the routing status of a user



Requires NO permissions: 




### Example Usage

~~~ javascript
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Configure OAuth2 access token for authorization: PureCloud Auth
platformClient.ApiClient.instance.authentications['PureCloud Auth'].accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new platformClient.UsersApi();

var userId = "userId_example"; // String | User ID

apiInstance.getUserRoutingstatus(userId)
  .then(function(data) {
    console.log(`getUserRoutingstatus success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch(function(err) {
  	console.log('There was a failure calling getUserRoutingstatus');
    console.error(err);
  });

~~~

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **userId** | **String** | User ID |  |
{: class="table table-striped"}

### Return type

**RoutingStatus**

<a name="getUserStation"></a>

# UserStations getUserStation(userId)



GET /api/v2/users/{userId}/station

Get station information for user



Requires NO permissions: 




### Example Usage

~~~ javascript
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Configure OAuth2 access token for authorization: PureCloud Auth
platformClient.ApiClient.instance.authentications['PureCloud Auth'].accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new platformClient.UsersApi();

var userId = "userId_example"; // String | User ID

apiInstance.getUserStation(userId)
  .then(function(data) {
    console.log(`getUserStation success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch(function(err) {
  	console.log('There was a failure calling getUserStation');
    console.error(err);
  });

~~~

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

~~~ javascript
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Configure OAuth2 access token for authorization: PureCloud Auth
platformClient.ApiClient.instance.authentications['PureCloud Auth'].accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new platformClient.UsersApi();

var userId = "userId_example"; // String | User ID

var opts = { 
  'expand': ["expand_example"] // [String] | Which fields, if any, to expand
};
apiInstance.getUserSuperiors(userId, opts)
  .then(function(data) {
    console.log(`getUserSuperiors success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch(function(err) {
  	console.log('There was a failure calling getUserSuperiors');
    console.error(err);
  });

~~~

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **userId** | **String** | User ID |  |
 **expand** | **[String]** | Which fields, if any, to expand | [optional] <br />**Values**: routingStatus, presence, conversationSummary, outOfOffice, geolocation, station, authorization, profileSkills, locations, groups |
{: class="table table-striped"}

### Return type

**[User]**

<a name="getUserTrustors"></a>

# TrustorEntityListing getUserTrustors(userId, opts)



GET /api/v2/users/{userId}/trustors

List the organizations that have authorized/trusted the user.



Requires ANY permissions: 

* authorization:orgTrustor:view



### Example Usage

~~~ javascript
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Configure OAuth2 access token for authorization: PureCloud Auth
platformClient.ApiClient.instance.authentications['PureCloud Auth'].accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new platformClient.UsersApi();

var userId = "userId_example"; // String | User ID

var opts = { 
  'pageSize': 25, // Number | Page size
  'pageNumber': 1 // Number | Page number
};
apiInstance.getUserTrustors(userId, opts)
  .then(function(data) {
    console.log(`getUserTrustors success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch(function(err) {
  	console.log('There was a failure calling getUserTrustors');
    console.error(err);
  });

~~~

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

~~~ javascript
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Configure OAuth2 access token for authorization: PureCloud Auth
platformClient.ApiClient.instance.authentications['PureCloud Auth'].accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new platformClient.UsersApi();

var opts = { 
  'pageSize': 25, // Number | Page size
  'pageNumber': 1, // Number | Page number
  'id': ["id_example"], // [String] | id
  'sortOrder': "ASC", // String | Ascending or descending sort order
  'expand': ["expand_example"], // [String] | Which fields, if any, to expand
  'state': "active" // String | Only list users of this state
};
apiInstance.getUsers(opts)
  .then(function(data) {
    console.log(`getUsers success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch(function(err) {
  	console.log('There was a failure calling getUsers');
    console.error(err);
  });

~~~

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **pageSize** | **Number** | Page size | [optional] [default to 25] |
 **pageNumber** | **Number** | Page number | [optional] [default to 1] |
 **id** | **[String]** | id | [optional]  |
 **sortOrder** | **String** | Ascending or descending sort order | [optional] [default to ASC]<br />**Values**: ascending, descending |
 **expand** | **[String]** | Which fields, if any, to expand | [optional] <br />**Values**: routingStatus, presence, conversationSummary, outOfOffice, geolocation, station, authorization, profileSkills, locations, groups |
 **state** | **String** | Only list users of this state | [optional] [default to active]<br />**Values**: active, inactive, deleted |
{: class="table table-striped"}

### Return type

**UserEntityListing**

<a name="getUsersMe"></a>

# UserMe getUsersMe(opts)



GET /api/v2/users/me

Get current user details.

This request is not valid when using the Client Credentials OAuth grant.

Requires NO permissions: 




### Example Usage

~~~ javascript
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Configure OAuth2 access token for authorization: PureCloud Auth
platformClient.ApiClient.instance.authentications['PureCloud Auth'].accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new platformClient.UsersApi();

var opts = { 
  'expand': ["expand_example"] // [String] | Which fields, if any, to expand.
};
apiInstance.getUsersMe(opts)
  .then(function(data) {
    console.log(`getUsersMe success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch(function(err) {
  	console.log('There was a failure calling getUsersMe');
    console.error(err);
  });

~~~

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **expand** | **[String]** | Which fields, if any, to expand. | [optional] <br />**Values**: routingStatus, presence, conversationSummary, outOfOffice, geolocation, station, authorization, profileSkills, locations, groups, date, geolocationsettings, organization, presencedefinitions, locationdefinitions, orgauthorization, favorites, superiors, directreports, adjacents, routingskills, routinglanguages, fieldconfigs, token, trustors |
{: class="table table-striped"}

### Return type

**UserMe**

<a name="getUsersSearch"></a>

# UsersSearchResponse getUsersSearch(q64, opts)



GET /api/v2/users/search

Search users using the q64 value returned from a previous search



Requires NO permissions: 




### Example Usage

~~~ javascript
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Configure OAuth2 access token for authorization: PureCloud Auth
platformClient.ApiClient.instance.authentications['PureCloud Auth'].accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new platformClient.UsersApi();

var q64 = "q64_example"; // String | q64

var opts = { 
  'expand': ["expand_example"] // [String] | expand
};
apiInstance.getUsersSearch(q64, opts)
  .then(function(data) {
    console.log(`getUsersSearch success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch(function(err) {
  	console.log('There was a failure calling getUsersSearch');
    console.error(err);
  });

~~~

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **q64** | **String** | q64 |  |
 **expand** | **[String]** | expand | [optional]  |
{: class="table table-striped"}

### Return type

**UsersSearchResponse**

<a name="patchUser"></a>

# User patchUser(userId, body)



PATCH /api/v2/users/{userId}

Update user



Requires NO permissions: 



### Request Body Schema

{::options parse_block_html="true" /}

<script type="text/javascript">
	function copyUpdateUserExample() {
		var $temp = $("<textarea>");
		$("body").append($temp);
		$temp.val($('#UpdateUserExample').text()).select();
		document.execCommand("copy");
		$temp.remove();
	}
</script>

UpdateUser <a style="cursor: pointer" onclick="copyUpdateUserExample()">Copy</a>

<div id="UpdateUserExample" style="max-height: 250px; overflow-y: scroll;">
~~~ json
{ 
  "id": String, 
  "name": String, 
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
  "title": String, 
  "username": String, 
  "manager": String, 
  "images": { 
    "resolution": String, 
    "imageUri": String, 
  },  
  "version": Number, 
  "profileSkills": [String], 
  "locations": { 
    "id": String, 
    "floorplanId": String, 
    "coordinates": {String: Number}, 
    "notes": String, 
    "locationDefinition": { 
      "id": String, 
      "name": String, 
      "address": { 
        "city": String, 
        "country": String, 
        "countryName": String, 
        "state": String, 
        "street1": String, 
        "street2": String, 
        "zipcode": String, 
      },  
      "addressVerified": Boolean, 
      "emergencyNumber": { 
        "e164": String, 
        "number": String, 
        "type": String, 
      },  
      "state": String, 
      "version": Number, 
      "path": [String], 
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
      "display": String, 
      "type": String, 
      "mediaType": String, 
    },  
    "rulesVisible": Boolean, 
    "visibility": String, 
    "owners": { 
      "id": String, 
      "name": String, 
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
        "user": { 
          "id": String, 
          "name": String, 
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
            "user": { 
              "id": String, 
              "name": String, 
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
                "presenceDefinition": PresenceDefinition, 
                "message": String, 
                "modifiedDate": Date, 
                "selfUri": String, 
              },  
              "conversationSummary": { 
                "userId": String, 
                "call": MediaSummary, 
                "callback": MediaSummary, 
                "email": MediaSummary, 
                "message": MediaSummary, 
                "chat": MediaSummary, 
                "socialExpression": MediaSummary, 
                "video": MediaSummary, 
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
                "locations": [LocationDefinition], 
                "selfUri": String, 
              },  
              "station": { 
                "associatedStation": UserStation, 
                "effectiveStation": UserStation, 
                "defaultStation": UserStation, 
                "lastAssociatedStation": UserStation, 
              },  
              "authorization": { 
                "roles": [DomainRole], 
                "permissions": [String], 
                "permissionPolicies": [ResourcePermissionPolicy], 
              },  
              "profileSkills": [String], 
              "locations": { 
                "id": String, 
                "floorplanId": String, 
                "coordinates": {String: Number}, 
                "notes": String, 
                "locationDefinition": LocationDefinition, 
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
                "images": [UserImage], 
                "addresses": [GroupContact], 
                "rulesVisible": Boolean, 
                "visibility": String, 
                "owners": [User], 
                "selfUri": String, 
              },  
              "acdAutoAnswer": Boolean, 
              "selfUri": String, 
            },  
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
              "address": { 
                "city": String, 
                "country": String, 
                "countryName": String, 
                "state": String, 
                "street1": String, 
                "street2": String, 
                "zipcode": String, 
              },  
              "addressVerified": Boolean, 
              "emergencyNumber": { 
                "e164": String, 
                "number": String, 
                "type": String, 
              },  
              "state": String, 
              "version": Number, 
              "path": [String], 
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
                "operands": [ResourceConditionValue], 
                "terms": [ResourceConditionNode], 
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
              "address": { 
                "city": String, 
                "country": String, 
                "countryName": String, 
                "state": String, 
                "street1": String, 
                "street2": String, 
                "zipcode": String, 
              },  
              "addressVerified": Boolean, 
              "emergencyNumber": { 
                "e164": String, 
                "number": String, 
                "type": String, 
              },  
              "state": String, 
              "version": Number, 
              "path": [String], 
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
              "display": String, 
              "type": String, 
              "mediaType": String, 
            },  
            "rulesVisible": Boolean, 
            "visibility": String, 
            "owners": { 
              "id": String, 
              "name": String, 
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
                "presenceDefinition": PresenceDefinition, 
                "message": String, 
                "modifiedDate": Date, 
                "selfUri": String, 
              },  
              "conversationSummary": { 
                "userId": String, 
                "call": MediaSummary, 
                "callback": MediaSummary, 
                "email": MediaSummary, 
                "message": MediaSummary, 
                "chat": MediaSummary, 
                "socialExpression": MediaSummary, 
                "video": MediaSummary, 
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
                "locations": [LocationDefinition], 
                "selfUri": String, 
              },  
              "station": { 
                "associatedStation": UserStation, 
                "effectiveStation": UserStation, 
                "defaultStation": UserStation, 
                "lastAssociatedStation": UserStation, 
              },  
              "authorization": { 
                "roles": [DomainRole], 
                "permissions": [String], 
                "permissionPolicies": [ResourcePermissionPolicy], 
              },  
              "profileSkills": [String], 
              "locations": { 
                "id": String, 
                "floorplanId": String, 
                "coordinates": {String: Number}, 
                "notes": String, 
                "locationDefinition": LocationDefinition, 
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
                "images": [UserImage], 
                "addresses": [GroupContact], 
                "rulesVisible": Boolean, 
                "visibility": String, 
                "owners": [User], 
                "selfUri": String, 
              },  
              "acdAutoAnswer": Boolean, 
              "selfUri": String, 
            },  
            "selfUri": String, 
          },  
          "acdAutoAnswer": Boolean, 
          "selfUri": String, 
        },  
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
          "address": { 
            "city": String, 
            "country": String, 
            "countryName": String, 
            "state": String, 
            "street1": String, 
            "street2": String, 
            "zipcode": String, 
          },  
          "addressVerified": Boolean, 
          "emergencyNumber": { 
            "e164": String, 
            "number": String, 
            "type": String, 
          },  
          "state": String, 
          "version": Number, 
          "path": [String], 
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
          "address": { 
            "city": String, 
            "country": String, 
            "countryName": String, 
            "state": String, 
            "street1": String, 
            "street2": String, 
            "zipcode": String, 
          },  
          "addressVerified": Boolean, 
          "emergencyNumber": { 
            "e164": String, 
            "number": String, 
            "type": String, 
          },  
          "state": String, 
          "version": Number, 
          "path": [String], 
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
          "display": String, 
          "type": String, 
          "mediaType": String, 
        },  
        "rulesVisible": Boolean, 
        "visibility": String, 
        "owners": { 
          "id": String, 
          "name": String, 
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
            "user": { 
              "id": String, 
              "name": String, 
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
                "presenceDefinition": PresenceDefinition, 
                "message": String, 
                "modifiedDate": Date, 
                "selfUri": String, 
              },  
              "conversationSummary": { 
                "userId": String, 
                "call": MediaSummary, 
                "callback": MediaSummary, 
                "email": MediaSummary, 
                "message": MediaSummary, 
                "chat": MediaSummary, 
                "socialExpression": MediaSummary, 
                "video": MediaSummary, 
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
                "locations": [LocationDefinition], 
                "selfUri": String, 
              },  
              "station": { 
                "associatedStation": UserStation, 
                "effectiveStation": UserStation, 
                "defaultStation": UserStation, 
                "lastAssociatedStation": UserStation, 
              },  
              "authorization": { 
                "roles": [DomainRole], 
                "permissions": [String], 
                "permissionPolicies": [ResourcePermissionPolicy], 
              },  
              "profileSkills": [String], 
              "locations": { 
                "id": String, 
                "floorplanId": String, 
                "coordinates": {String: Number}, 
                "notes": String, 
                "locationDefinition": LocationDefinition, 
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
                "images": [UserImage], 
                "addresses": [GroupContact], 
                "rulesVisible": Boolean, 
                "visibility": String, 
                "owners": [User], 
                "selfUri": String, 
              },  
              "acdAutoAnswer": Boolean, 
              "selfUri": String, 
            },  
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
              "address": { 
                "city": String, 
                "country": String, 
                "countryName": String, 
                "state": String, 
                "street1": String, 
                "street2": String, 
                "zipcode": String, 
              },  
              "addressVerified": Boolean, 
              "emergencyNumber": { 
                "e164": String, 
                "number": String, 
                "type": String, 
              },  
              "state": String, 
              "version": Number, 
              "path": [String], 
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
                "operands": [ResourceConditionValue], 
                "terms": [ResourceConditionNode], 
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
              "address": { 
                "city": String, 
                "country": String, 
                "countryName": String, 
                "state": String, 
                "street1": String, 
                "street2": String, 
                "zipcode": String, 
              },  
              "addressVerified": Boolean, 
              "emergencyNumber": { 
                "e164": String, 
                "number": String, 
                "type": String, 
              },  
              "state": String, 
              "version": Number, 
              "path": [String], 
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
              "display": String, 
              "type": String, 
              "mediaType": String, 
            },  
            "rulesVisible": Boolean, 
            "visibility": String, 
            "owners": { 
              "id": String, 
              "name": String, 
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
                "presenceDefinition": PresenceDefinition, 
                "message": String, 
                "modifiedDate": Date, 
                "selfUri": String, 
              },  
              "conversationSummary": { 
                "userId": String, 
                "call": MediaSummary, 
                "callback": MediaSummary, 
                "email": MediaSummary, 
                "message": MediaSummary, 
                "chat": MediaSummary, 
                "socialExpression": MediaSummary, 
                "video": MediaSummary, 
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
                "locations": [LocationDefinition], 
                "selfUri": String, 
              },  
              "station": { 
                "associatedStation": UserStation, 
                "effectiveStation": UserStation, 
                "defaultStation": UserStation, 
                "lastAssociatedStation": UserStation, 
              },  
              "authorization": { 
                "roles": [DomainRole], 
                "permissions": [String], 
                "permissionPolicies": [ResourcePermissionPolicy], 
              },  
              "profileSkills": [String], 
              "locations": { 
                "id": String, 
                "floorplanId": String, 
                "coordinates": {String: Number}, 
                "notes": String, 
                "locationDefinition": LocationDefinition, 
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
                "images": [UserImage], 
                "addresses": [GroupContact], 
                "rulesVisible": Boolean, 
                "visibility": String, 
                "owners": [User], 
                "selfUri": String, 
              },  
              "acdAutoAnswer": Boolean, 
              "selfUri": String, 
            },  
            "selfUri": String, 
          },  
          "acdAutoAnswer": Boolean, 
          "selfUri": String, 
        },  
        "selfUri": String, 
      },  
      "acdAutoAnswer": Boolean, 
      "selfUri": String, 
    },  
    "selfUri": String, 
  },  
  "state": String, 
  "acdAutoAnswer": Boolean, 
  "selfUri": String, 
}
~~~
</div>


### Example Usage

~~~ javascript
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Configure OAuth2 access token for authorization: PureCloud Auth
platformClient.ApiClient.instance.authentications['PureCloud Auth'].accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new platformClient.UsersApi();

var userId = "userId_example"; // String | User ID

var body = {}; // Object | User

apiInstance.patchUser(userId, body)
  .then(function(data) {
    console.log(`patchUser success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch(function(err) {
  	console.log('There was a failure calling patchUser');
    console.error(err);
  });

~~~

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

Patch a user&#39;s CallForwarding



Requires NO permissions: 



### Request Body Schema

{::options parse_block_html="true" /}

<script type="text/javascript">
	function copyCallForwardingExample() {
		var $temp = $("<textarea>");
		$("body").append($temp);
		$temp.val($('#CallForwardingExample').text()).select();
		document.execCommand("copy");
		$temp.remove();
	}
</script>

CallForwarding <a style="cursor: pointer" onclick="copyCallForwardingExample()">Copy</a>

<div id="CallForwardingExample" style="max-height: 250px; overflow-y: scroll;">
~~~ json
{ 
  "id": String, 
  "name": String, 
  "user": { 
    "id": String, 
    "name": String, 
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
      "user": { 
        "id": String, 
        "name": String, 
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
          "user": { 
            "id": String, 
            "name": String, 
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
                "contactCenter": MediaSummaryDetail, 
                "enterprise": MediaSummaryDetail, 
              },  
              "callback": { 
                "contactCenter": MediaSummaryDetail, 
                "enterprise": MediaSummaryDetail, 
              },  
              "email": { 
                "contactCenter": MediaSummaryDetail, 
                "enterprise": MediaSummaryDetail, 
              },  
              "message": { 
                "contactCenter": MediaSummaryDetail, 
                "enterprise": MediaSummaryDetail, 
              },  
              "chat": { 
                "contactCenter": MediaSummaryDetail, 
                "enterprise": MediaSummaryDetail, 
              },  
              "socialExpression": { 
                "contactCenter": MediaSummaryDetail, 
                "enterprise": MediaSummaryDetail, 
              },  
              "video": { 
                "contactCenter": MediaSummaryDetail, 
                "enterprise": MediaSummaryDetail, 
              },  
            },  
            "outOfOffice": { 
              "id": String, 
              "name": String, 
              "user": { 
                "id": String, 
                "name": String, 
                "chat": Chat, 
                "department": String, 
                "email": String, 
                "primaryContactInfo": [Contact], 
                "addresses": [Contact], 
                "state": String, 
                "title": String, 
                "username": String, 
                "manager": User, 
                "images": [UserImage], 
                "version": Number, 
                "routingStatus": RoutingStatus, 
                "presence": UserPresence, 
                "conversationSummary": UserConversationSummary, 
                "outOfOffice": OutOfOffice, 
                "geolocation": Geolocation, 
                "station": UserStations, 
                "authorization": UserAuthorization, 
                "profileSkills": [String], 
                "locations": [Location], 
                "groups": [Group], 
                "acdAutoAnswer": Boolean, 
                "selfUri": String, 
              },  
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
                "address": LocationAddress, 
                "addressVerified": Boolean, 
                "emergencyNumber": LocationEmergencyNumber, 
                "state": String, 
                "version": Number, 
                "path": [String], 
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
              "permissions": [String], 
              "permissionPolicies": { 
                "id": String, 
                "domain": String, 
                "entityName": String, 
                "policyName": String, 
                "policyDescription": String, 
                "actionSetKey": String, 
                "allowConditions": Boolean, 
                "resourceConditionNode": ResourceConditionNode, 
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
                "address": LocationAddress, 
                "addressVerified": Boolean, 
                "emergencyNumber": LocationEmergencyNumber, 
                "state": String, 
                "version": Number, 
                "path": [String], 
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
                "display": String, 
                "type": String, 
                "mediaType": String, 
              },  
              "rulesVisible": Boolean, 
              "visibility": String, 
              "owners": { 
                "id": String, 
                "name": String, 
                "chat": Chat, 
                "department": String, 
                "email": String, 
                "primaryContactInfo": [Contact], 
                "addresses": [Contact], 
                "state": String, 
                "title": String, 
                "username": String, 
                "manager": User, 
                "images": [UserImage], 
                "version": Number, 
                "routingStatus": RoutingStatus, 
                "presence": UserPresence, 
                "conversationSummary": UserConversationSummary, 
                "outOfOffice": OutOfOffice, 
                "geolocation": Geolocation, 
                "station": UserStations, 
                "authorization": UserAuthorization, 
                "profileSkills": [String], 
                "locations": [Location], 
                "groups": [Group], 
                "acdAutoAnswer": Boolean, 
                "selfUri": String, 
              },  
              "selfUri": String, 
            },  
            "acdAutoAnswer": Boolean, 
            "selfUri": String, 
          },  
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
            "address": { 
              "city": String, 
              "country": String, 
              "countryName": String, 
              "state": String, 
              "street1": String, 
              "street2": String, 
              "zipcode": String, 
            },  
            "addressVerified": Boolean, 
            "emergencyNumber": { 
              "e164": String, 
              "number": String, 
              "type": String, 
            },  
            "state": String, 
            "version": Number, 
            "path": [String], 
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
            "address": { 
              "city": String, 
              "country": String, 
              "countryName": String, 
              "state": String, 
              "street1": String, 
              "street2": String, 
              "zipcode": String, 
            },  
            "addressVerified": Boolean, 
            "emergencyNumber": { 
              "e164": String, 
              "number": String, 
              "type": String, 
            },  
            "state": String, 
            "version": Number, 
            "path": [String], 
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
            "display": String, 
            "type": String, 
            "mediaType": String, 
          },  
          "rulesVisible": Boolean, 
          "visibility": String, 
          "owners": { 
            "id": String, 
            "name": String, 
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
                "contactCenter": MediaSummaryDetail, 
                "enterprise": MediaSummaryDetail, 
              },  
              "callback": { 
                "contactCenter": MediaSummaryDetail, 
                "enterprise": MediaSummaryDetail, 
              },  
              "email": { 
                "contactCenter": MediaSummaryDetail, 
                "enterprise": MediaSummaryDetail, 
              },  
              "message": { 
                "contactCenter": MediaSummaryDetail, 
                "enterprise": MediaSummaryDetail, 
              },  
              "chat": { 
                "contactCenter": MediaSummaryDetail, 
                "enterprise": MediaSummaryDetail, 
              },  
              "socialExpression": { 
                "contactCenter": MediaSummaryDetail, 
                "enterprise": MediaSummaryDetail, 
              },  
              "video": { 
                "contactCenter": MediaSummaryDetail, 
                "enterprise": MediaSummaryDetail, 
              },  
            },  
            "outOfOffice": { 
              "id": String, 
              "name": String, 
              "user": { 
                "id": String, 
                "name": String, 
                "chat": Chat, 
                "department": String, 
                "email": String, 
                "primaryContactInfo": [Contact], 
                "addresses": [Contact], 
                "state": String, 
                "title": String, 
                "username": String, 
                "manager": User, 
                "images": [UserImage], 
                "version": Number, 
                "routingStatus": RoutingStatus, 
                "presence": UserPresence, 
                "conversationSummary": UserConversationSummary, 
                "outOfOffice": OutOfOffice, 
                "geolocation": Geolocation, 
                "station": UserStations, 
                "authorization": UserAuthorization, 
                "profileSkills": [String], 
                "locations": [Location], 
                "groups": [Group], 
                "acdAutoAnswer": Boolean, 
                "selfUri": String, 
              },  
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
                "address": LocationAddress, 
                "addressVerified": Boolean, 
                "emergencyNumber": LocationEmergencyNumber, 
                "state": String, 
                "version": Number, 
                "path": [String], 
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
              "permissions": [String], 
              "permissionPolicies": { 
                "id": String, 
                "domain": String, 
                "entityName": String, 
                "policyName": String, 
                "policyDescription": String, 
                "actionSetKey": String, 
                "allowConditions": Boolean, 
                "resourceConditionNode": ResourceConditionNode, 
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
                "address": LocationAddress, 
                "addressVerified": Boolean, 
                "emergencyNumber": LocationEmergencyNumber, 
                "state": String, 
                "version": Number, 
                "path": [String], 
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
                "display": String, 
                "type": String, 
                "mediaType": String, 
              },  
              "rulesVisible": Boolean, 
              "visibility": String, 
              "owners": { 
                "id": String, 
                "name": String, 
                "chat": Chat, 
                "department": String, 
                "email": String, 
                "primaryContactInfo": [Contact], 
                "addresses": [Contact], 
                "state": String, 
                "title": String, 
                "username": String, 
                "manager": User, 
                "images": [UserImage], 
                "version": Number, 
                "routingStatus": RoutingStatus, 
                "presence": UserPresence, 
                "conversationSummary": UserConversationSummary, 
                "outOfOffice": OutOfOffice, 
                "geolocation": Geolocation, 
                "station": UserStations, 
                "authorization": UserAuthorization, 
                "profileSkills": [String], 
                "locations": [Location], 
                "groups": [Group], 
                "acdAutoAnswer": Boolean, 
                "selfUri": String, 
              },  
              "selfUri": String, 
            },  
            "acdAutoAnswer": Boolean, 
            "selfUri": String, 
          },  
          "selfUri": String, 
        },  
        "acdAutoAnswer": Boolean, 
        "selfUri": String, 
      },  
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
        "address": { 
          "city": String, 
          "country": String, 
          "countryName": String, 
          "state": String, 
          "street1": String, 
          "street2": String, 
          "zipcode": String, 
        },  
        "addressVerified": Boolean, 
        "emergencyNumber": { 
          "e164": String, 
          "number": String, 
          "type": String, 
        },  
        "state": String, 
        "version": Number, 
        "path": [String], 
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
        "address": { 
          "city": String, 
          "country": String, 
          "countryName": String, 
          "state": String, 
          "street1": String, 
          "street2": String, 
          "zipcode": String, 
        },  
        "addressVerified": Boolean, 
        "emergencyNumber": { 
          "e164": String, 
          "number": String, 
          "type": String, 
        },  
        "state": String, 
        "version": Number, 
        "path": [String], 
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
        "display": String, 
        "type": String, 
        "mediaType": String, 
      },  
      "rulesVisible": Boolean, 
      "visibility": String, 
      "owners": { 
        "id": String, 
        "name": String, 
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
          "user": { 
            "id": String, 
            "name": String, 
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
                "contactCenter": MediaSummaryDetail, 
                "enterprise": MediaSummaryDetail, 
              },  
              "callback": { 
                "contactCenter": MediaSummaryDetail, 
                "enterprise": MediaSummaryDetail, 
              },  
              "email": { 
                "contactCenter": MediaSummaryDetail, 
                "enterprise": MediaSummaryDetail, 
              },  
              "message": { 
                "contactCenter": MediaSummaryDetail, 
                "enterprise": MediaSummaryDetail, 
              },  
              "chat": { 
                "contactCenter": MediaSummaryDetail, 
                "enterprise": MediaSummaryDetail, 
              },  
              "socialExpression": { 
                "contactCenter": MediaSummaryDetail, 
                "enterprise": MediaSummaryDetail, 
              },  
              "video": { 
                "contactCenter": MediaSummaryDetail, 
                "enterprise": MediaSummaryDetail, 
              },  
            },  
            "outOfOffice": { 
              "id": String, 
              "name": String, 
              "user": { 
                "id": String, 
                "name": String, 
                "chat": Chat, 
                "department": String, 
                "email": String, 
                "primaryContactInfo": [Contact], 
                "addresses": [Contact], 
                "state": String, 
                "title": String, 
                "username": String, 
                "manager": User, 
                "images": [UserImage], 
                "version": Number, 
                "routingStatus": RoutingStatus, 
                "presence": UserPresence, 
                "conversationSummary": UserConversationSummary, 
                "outOfOffice": OutOfOffice, 
                "geolocation": Geolocation, 
                "station": UserStations, 
                "authorization": UserAuthorization, 
                "profileSkills": [String], 
                "locations": [Location], 
                "groups": [Group], 
                "acdAutoAnswer": Boolean, 
                "selfUri": String, 
              },  
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
                "address": LocationAddress, 
                "addressVerified": Boolean, 
                "emergencyNumber": LocationEmergencyNumber, 
                "state": String, 
                "version": Number, 
                "path": [String], 
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
              "permissions": [String], 
              "permissionPolicies": { 
                "id": String, 
                "domain": String, 
                "entityName": String, 
                "policyName": String, 
                "policyDescription": String, 
                "actionSetKey": String, 
                "allowConditions": Boolean, 
                "resourceConditionNode": ResourceConditionNode, 
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
                "address": LocationAddress, 
                "addressVerified": Boolean, 
                "emergencyNumber": LocationEmergencyNumber, 
                "state": String, 
                "version": Number, 
                "path": [String], 
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
                "display": String, 
                "type": String, 
                "mediaType": String, 
              },  
              "rulesVisible": Boolean, 
              "visibility": String, 
              "owners": { 
                "id": String, 
                "name": String, 
                "chat": Chat, 
                "department": String, 
                "email": String, 
                "primaryContactInfo": [Contact], 
                "addresses": [Contact], 
                "state": String, 
                "title": String, 
                "username": String, 
                "manager": User, 
                "images": [UserImage], 
                "version": Number, 
                "routingStatus": RoutingStatus, 
                "presence": UserPresence, 
                "conversationSummary": UserConversationSummary, 
                "outOfOffice": OutOfOffice, 
                "geolocation": Geolocation, 
                "station": UserStations, 
                "authorization": UserAuthorization, 
                "profileSkills": [String], 
                "locations": [Location], 
                "groups": [Group], 
                "acdAutoAnswer": Boolean, 
                "selfUri": String, 
              },  
              "selfUri": String, 
            },  
            "acdAutoAnswer": Boolean, 
            "selfUri": String, 
          },  
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
            "address": { 
              "city": String, 
              "country": String, 
              "countryName": String, 
              "state": String, 
              "street1": String, 
              "street2": String, 
              "zipcode": String, 
            },  
            "addressVerified": Boolean, 
            "emergencyNumber": { 
              "e164": String, 
              "number": String, 
              "type": String, 
            },  
            "state": String, 
            "version": Number, 
            "path": [String], 
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
            "address": { 
              "city": String, 
              "country": String, 
              "countryName": String, 
              "state": String, 
              "street1": String, 
              "street2": String, 
              "zipcode": String, 
            },  
            "addressVerified": Boolean, 
            "emergencyNumber": { 
              "e164": String, 
              "number": String, 
              "type": String, 
            },  
            "state": String, 
            "version": Number, 
            "path": [String], 
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
            "display": String, 
            "type": String, 
            "mediaType": String, 
          },  
          "rulesVisible": Boolean, 
          "visibility": String, 
          "owners": { 
            "id": String, 
            "name": String, 
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
                "contactCenter": MediaSummaryDetail, 
                "enterprise": MediaSummaryDetail, 
              },  
              "callback": { 
                "contactCenter": MediaSummaryDetail, 
                "enterprise": MediaSummaryDetail, 
              },  
              "email": { 
                "contactCenter": MediaSummaryDetail, 
                "enterprise": MediaSummaryDetail, 
              },  
              "message": { 
                "contactCenter": MediaSummaryDetail, 
                "enterprise": MediaSummaryDetail, 
              },  
              "chat": { 
                "contactCenter": MediaSummaryDetail, 
                "enterprise": MediaSummaryDetail, 
              },  
              "socialExpression": { 
                "contactCenter": MediaSummaryDetail, 
                "enterprise": MediaSummaryDetail, 
              },  
              "video": { 
                "contactCenter": MediaSummaryDetail, 
                "enterprise": MediaSummaryDetail, 
              },  
            },  
            "outOfOffice": { 
              "id": String, 
              "name": String, 
              "user": { 
                "id": String, 
                "name": String, 
                "chat": Chat, 
                "department": String, 
                "email": String, 
                "primaryContactInfo": [Contact], 
                "addresses": [Contact], 
                "state": String, 
                "title": String, 
                "username": String, 
                "manager": User, 
                "images": [UserImage], 
                "version": Number, 
                "routingStatus": RoutingStatus, 
                "presence": UserPresence, 
                "conversationSummary": UserConversationSummary, 
                "outOfOffice": OutOfOffice, 
                "geolocation": Geolocation, 
                "station": UserStations, 
                "authorization": UserAuthorization, 
                "profileSkills": [String], 
                "locations": [Location], 
                "groups": [Group], 
                "acdAutoAnswer": Boolean, 
                "selfUri": String, 
              },  
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
                "address": LocationAddress, 
                "addressVerified": Boolean, 
                "emergencyNumber": LocationEmergencyNumber, 
                "state": String, 
                "version": Number, 
                "path": [String], 
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
              "permissions": [String], 
              "permissionPolicies": { 
                "id": String, 
                "domain": String, 
                "entityName": String, 
                "policyName": String, 
                "policyDescription": String, 
                "actionSetKey": String, 
                "allowConditions": Boolean, 
                "resourceConditionNode": ResourceConditionNode, 
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
                "address": LocationAddress, 
                "addressVerified": Boolean, 
                "emergencyNumber": LocationEmergencyNumber, 
                "state": String, 
                "version": Number, 
                "path": [String], 
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
                "display": String, 
                "type": String, 
                "mediaType": String, 
              },  
              "rulesVisible": Boolean, 
              "visibility": String, 
              "owners": { 
                "id": String, 
                "name": String, 
                "chat": Chat, 
                "department": String, 
                "email": String, 
                "primaryContactInfo": [Contact], 
                "addresses": [Contact], 
                "state": String, 
                "title": String, 
                "username": String, 
                "manager": User, 
                "images": [UserImage], 
                "version": Number, 
                "routingStatus": RoutingStatus, 
                "presence": UserPresence, 
                "conversationSummary": UserConversationSummary, 
                "outOfOffice": OutOfOffice, 
                "geolocation": Geolocation, 
                "station": UserStations, 
                "authorization": UserAuthorization, 
                "profileSkills": [String], 
                "locations": [Location], 
                "groups": [Group], 
                "acdAutoAnswer": Boolean, 
                "selfUri": String, 
              },  
              "selfUri": String, 
            },  
            "acdAutoAnswer": Boolean, 
            "selfUri": String, 
          },  
          "selfUri": String, 
        },  
        "acdAutoAnswer": Boolean, 
        "selfUri": String, 
      },  
      "selfUri": String, 
    },  
    "acdAutoAnswer": Boolean, 
    "selfUri": String, 
  },  
  "enabled": Boolean, 
  "phoneNumber": String, 
  "calls": { 
    "targets": { 
      "type": String, 
      "value": String, 
    },  
  },  
  "voicemail": String, 
  "modifiedDate": Date, 
  "selfUri": String, 
}
~~~
</div>


### Example Usage

~~~ javascript
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Configure OAuth2 access token for authorization: PureCloud Auth
platformClient.ApiClient.instance.authentications['PureCloud Auth'].accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new platformClient.UsersApi();

var userId = "userId_example"; // String | User ID

var body = {}; // Object | Call forwarding

apiInstance.patchUserCallforwarding(userId, body)
  .then(function(data) {
    console.log(`patchUserCallforwarding success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch(function(err) {
  	console.log('There was a failure calling patchUserCallforwarding');
    console.error(err);
  });

~~~

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

Patch a user&#39;s Geolocation

The geolocation object can be patched one of three ways. Option 1: Set the &#39;primary&#39; property to true. This will set the client as the user&#39;s primary geolocation source.  Option 2: Provide the &#39;latitude&#39; and &#39;longitude&#39; values.  This will enqueue an asynchronous update of the &#39;city&#39;, &#39;region&#39;, and &#39;country&#39;, generating a notification. A subsequent GET operation will include the new values for &#39;city&#39;, &#39;region&#39; and &#39;country&#39;.  Option 3:  Provide the &#39;city&#39;, &#39;region&#39;, &#39;country&#39; values.  Option 1 can be combined with Option 2 or Option 3.  For example, update the client as primary and provide latitude and longitude values.

Requires NO permissions: 



### Request Body Schema

{::options parse_block_html="true" /}

<script type="text/javascript">
	function copyGeolocationExample() {
		var $temp = $("<textarea>");
		$("body").append($temp);
		$temp.val($('#GeolocationExample').text()).select();
		document.execCommand("copy");
		$temp.remove();
	}
</script>

Geolocation <a style="cursor: pointer" onclick="copyGeolocationExample()">Copy</a>

<div id="GeolocationExample" style="max-height: 250px; overflow-y: scroll;">
~~~ json
{ 
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
    "address": { 
      "city": String, 
      "country": String, 
      "countryName": String, 
      "state": String, 
      "street1": String, 
      "street2": String, 
      "zipcode": String, 
    },  
    "addressVerified": Boolean, 
    "emergencyNumber": { 
      "e164": String, 
      "number": String, 
      "type": String, 
    },  
    "state": String, 
    "version": Number, 
    "path": [String], 
    "selfUri": String, 
  },  
  "selfUri": String, 
}
~~~
</div>


### Example Usage

~~~ javascript
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Configure OAuth2 access token for authorization: PureCloud Auth
platformClient.ApiClient.instance.authentications['PureCloud Auth'].accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new platformClient.UsersApi();

var userId = "userId_example"; // String | user Id

var clientId = "clientId_example"; // String | client Id

var body = {}; // Object | Geolocation

apiInstance.patchUserGeolocation(userId, clientId, body)
  .then(function(data) {
    console.log(`patchUserGeolocation success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch(function(err) {
  	console.log('There was a failure calling patchUserGeolocation');
    console.error(err);
  });

~~~

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


### Request Body Schema

{::options parse_block_html="true" /}

<script type="text/javascript">
	function copyUserQueueExample() {
		var $temp = $("<textarea>");
		$("body").append($temp);
		$temp.val($('#UserQueueExample').text()).select();
		document.execCommand("copy");
		$temp.remove();
	}
</script>

UserQueue <a style="cursor: pointer" onclick="copyUserQueueExample()">Copy</a>

<div id="UserQueueExample" style="max-height: 250px; overflow-y: scroll;">
~~~ json
{ 
  "id": String, 
  "name": String, 
  "division": { 
    "id": String, 
    "name": String, 
    "selfUri": String, 
  },  
  "description": String, 
  "version": Number, 
  "dateCreated": Date, 
  "dateModified": Date, 
  "modifiedBy": String, 
  "createdBy": String, 
  "state": String, 
  "modifiedByApp": String, 
  "createdByApp": String, 
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
                "domain": UriReference, 
                "route": InboundRoute, 
              },  
              "selfUri": String, 
            },  
          },  
          "selfUri": String, 
        },  
      },  
      "selfUri": String, 
    },  
  },  
  "joined": Boolean, 
  "memberCount": Number, 
  "selfUri": String, 
}
~~~
</div>


### Example Usage

~~~ javascript
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Configure OAuth2 access token for authorization: PureCloud Auth
platformClient.ApiClient.instance.authentications['PureCloud Auth'].accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new platformClient.UsersApi();

var queueId = "queueId_example"; // String | Queue ID

var userId = "userId_example"; // String | User ID

var body = {}; // Object | Queue Member

apiInstance.patchUserQueue(queueId, userId, body)
  .then(function(data) {
    console.log(`patchUserQueue success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch(function(err) {
  	console.log('There was a failure calling patchUserQueue');
    console.error(err);
  });

~~~

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


### Request Body Schema

{::options parse_block_html="true" /}

<script type="text/javascript">
	function copyUserQueueExample() {
		var $temp = $("<textarea>");
		$("body").append($temp);
		$temp.val($('#UserQueueExample').text()).select();
		document.execCommand("copy");
		$temp.remove();
	}
</script>

UserQueue <a style="cursor: pointer" onclick="copyUserQueueExample()">Copy</a>

<div id="UserQueueExample" style="max-height: 250px; overflow-y: scroll;">
~~~ json
{ 
  "id": String, 
  "name": String, 
  "division": { 
    "id": String, 
    "name": String, 
    "selfUri": String, 
  },  
  "description": String, 
  "version": Number, 
  "dateCreated": Date, 
  "dateModified": Date, 
  "modifiedBy": String, 
  "createdBy": String, 
  "state": String, 
  "modifiedByApp": String, 
  "createdByApp": String, 
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
                "domain": UriReference, 
                "route": InboundRoute, 
              },  
              "selfUri": String, 
            },  
          },  
          "selfUri": String, 
        },  
      },  
      "selfUri": String, 
    },  
  },  
  "joined": Boolean, 
  "memberCount": Number, 
  "selfUri": String, 
}
~~~
</div>


### Example Usage

~~~ javascript
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Configure OAuth2 access token for authorization: PureCloud Auth
platformClient.ApiClient.instance.authentications['PureCloud Auth'].accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new platformClient.UsersApi();

var userId = "userId_example"; // String | User ID

var body = [{}]; // Object | User Queues

var opts = { 
  'divisionId': ["divisionId_example"] // [String] | Division ID(s)
};
apiInstance.patchUserQueues(userId, body, opts)
  .then(function(data) {
    console.log(`patchUserQueues success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch(function(err) {
  	console.log('There was a failure calling patchUserQueues');
    console.error(err);
  });

~~~

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
* admin


### Request Body Schema

{::options parse_block_html="true" /}

<script type="text/javascript">
	function copyUserRoutingLanguageExample() {
		var $temp = $("<textarea>");
		$("body").append($temp);
		$temp.val($('#UserRoutingLanguageExample').text()).select();
		document.execCommand("copy");
		$temp.remove();
	}
</script>

UserRoutingLanguage <a style="cursor: pointer" onclick="copyUserRoutingLanguageExample()">Copy</a>

<div id="UserRoutingLanguageExample" style="max-height: 250px; overflow-y: scroll;">
~~~ json
{ 
  "id": String, 
  "name": String, 
  "proficiency": Number, 
  "state": String, 
  "languageUri": String, 
  "selfUri": String, 
}
~~~
</div>


### Example Usage

~~~ javascript
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Configure OAuth2 access token for authorization: PureCloud Auth
platformClient.ApiClient.instance.authentications['PureCloud Auth'].accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new platformClient.UsersApi();

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

<a name="patchUsersBulk"></a>

# UserEntityListing patchUsersBulk(body)



PATCH /api/v2/users/bulk

Update bulk acd autoanswer on users



Requires ANY permissions: 

* directory:user:add
* user_manager
* user_administration
* directory:user:edit


### Request Body Schema

{::options parse_block_html="true" /}

<script type="text/javascript">
	function copyPatchUserExample() {
		var $temp = $("<textarea>");
		$("body").append($temp);
		$temp.val($('#PatchUserExample').text()).select();
		document.execCommand("copy");
		$temp.remove();
	}
</script>

PatchUser <a style="cursor: pointer" onclick="copyPatchUserExample()">Copy</a>

<div id="PatchUserExample" style="max-height: 250px; overflow-y: scroll;">
~~~ json
{ 
  "id": String, 
  "name": String, 
  "acdAutoAnswer": Boolean, 
  "selfUri": String, 
}
~~~
</div>


### Example Usage

~~~ javascript
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Configure OAuth2 access token for authorization: PureCloud Auth
platformClient.ApiClient.instance.authentications['PureCloud Auth'].accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new platformClient.UsersApi();

var body = [{}]; // Object | Users

apiInstance.patchUsersBulk(body)
  .then(function(data) {
    console.log(`patchUsersBulk success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch(function(err) {
  	console.log('There was a failure calling patchUsersBulk');
    console.error(err);
  });

~~~

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **body** | **Object** | Users |  |
{: class="table table-striped"}

### Return type

**UserEntityListing**

<a name="postAnalyticsUsersAggregatesQuery"></a>

# PresenceQueryResponse postAnalyticsUsersAggregatesQuery(body)



POST /api/v2/analytics/users/aggregates/query

Query for user aggregates



Requires ANY permissions: 

* analytics:userAggregate:view


### Request Body Schema

{::options parse_block_html="true" /}

<script type="text/javascript">
	function copyAggregationQueryExample() {
		var $temp = $("<textarea>");
		$("body").append($temp);
		$temp.val($('#AggregationQueryExample').text()).select();
		document.execCommand("copy");
		$temp.remove();
	}
</script>

AggregationQuery <a style="cursor: pointer" onclick="copyAggregationQueryExample()">Copy</a>

<div id="AggregationQueryExample" style="max-height: 250px; overflow-y: scroll;">
~~~ json
{ 
  "interval": String, 
  "granularity": String, 
  "timeZone": String, 
  "groupBy": [String], 
  "filter": { 
    "type": String, 
    "clauses": { 
      "type": String, 
      "predicates": { 
        "type": String, 
        "dimension": String, 
        "propertyType": String, 
        "property": String, 
        "metric": String, 
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
      "propertyType": String, 
      "property": String, 
      "metric": String, 
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
  "flattenMultivaluedDimensions": Boolean, 
  "views": { 
    "target": String, 
    "name": String, 
    "function": String, 
    "range": { 
      "gte": Number, 
      "lt": Number, 
    },  
  },  
}
~~~
</div>


### Example Usage

~~~ javascript
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Configure OAuth2 access token for authorization: PureCloud Auth
platformClient.ApiClient.instance.authentications['PureCloud Auth'].accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new platformClient.UsersApi();

var body = {}; // Object | query

apiInstance.postAnalyticsUsersAggregatesQuery(body)
  .then(function(data) {
    console.log(`postAnalyticsUsersAggregatesQuery success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch(function(err) {
  	console.log('There was a failure calling postAnalyticsUsersAggregatesQuery');
    console.error(err);
  });

~~~

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **body** | **Object** | query |  |
{: class="table table-striped"}

### Return type

**PresenceQueryResponse**

<a name="postAnalyticsUsersDetailsQuery"></a>

# AnalyticsUserDetailsQueryResponse postAnalyticsUsersDetailsQuery(body)



POST /api/v2/analytics/users/details/query

Query for user details



Requires ANY permissions: 

* analytics:userObservation:view


### Request Body Schema

{::options parse_block_html="true" /}

<script type="text/javascript">
	function copyUserDetailsQueryExample() {
		var $temp = $("<textarea>");
		$("body").append($temp);
		$temp.val($('#UserDetailsQueryExample').text()).select();
		document.execCommand("copy");
		$temp.remove();
	}
</script>

UserDetailsQuery <a style="cursor: pointer" onclick="copyUserDetailsQueryExample()">Copy</a>

<div id="UserDetailsQueryExample" style="max-height: 250px; overflow-y: scroll;">
~~~ json
{ 
  "interval": String, 
  "userFilters": { 
    "type": String, 
    "clauses": { 
      "type": String, 
      "predicates": { 
        "type": String, 
        "dimension": String, 
        "propertyType": String, 
        "property": String, 
        "metric": String, 
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
      "propertyType": String, 
      "property": String, 
      "metric": String, 
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
  "presenceFilters": { 
    "type": String, 
    "clauses": { 
      "type": String, 
      "predicates": { 
        "type": String, 
        "dimension": String, 
        "propertyType": String, 
        "property": String, 
        "metric": String, 
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
      "propertyType": String, 
      "property": String, 
      "metric": String, 
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
  "routingStatusFilters": { 
    "type": String, 
    "clauses": { 
      "type": String, 
      "predicates": { 
        "type": String, 
        "dimension": String, 
        "propertyType": String, 
        "property": String, 
        "metric": String, 
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
      "propertyType": String, 
      "property": String, 
      "metric": String, 
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
  "presenceAggregations": { 
    "type": String, 
    "dimension": String, 
    "metric": String, 
    "size": Number, 
    "ranges": { 
      "gte": Number, 
      "lt": Number, 
    },  
  },  
  "routingStatusAggregations": { 
    "type": String, 
    "dimension": String, 
    "metric": String, 
    "size": Number, 
    "ranges": { 
      "gte": Number, 
      "lt": Number, 
    },  
  },  
  "paging": { 
    "pageSize": Number, 
    "pageNumber": Number, 
  },  
  "order": String, 
}
~~~
</div>


### Example Usage

~~~ javascript
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Configure OAuth2 access token for authorization: PureCloud Auth
platformClient.ApiClient.instance.authentications['PureCloud Auth'].accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new platformClient.UsersApi();

var body = {}; // Object | query

apiInstance.postAnalyticsUsersDetailsQuery(body)
  .then(function(data) {
    console.log(`postAnalyticsUsersDetailsQuery success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch(function(err) {
  	console.log('There was a failure calling postAnalyticsUsersDetailsQuery');
    console.error(err);
  });

~~~

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **body** | **Object** | query |  |
{: class="table table-striped"}

### Return type

**AnalyticsUserDetailsQueryResponse**

<a name="postAnalyticsUsersObservationsQuery"></a>

# ObservationQueryResponse postAnalyticsUsersObservationsQuery(body)



POST /api/v2/analytics/users/observations/query

Query for user observations



Requires ANY permissions: 

* analytics:userObservation:view


### Request Body Schema

{::options parse_block_html="true" /}

<script type="text/javascript">
	function copyObservationQueryExample() {
		var $temp = $("<textarea>");
		$("body").append($temp);
		$temp.val($('#ObservationQueryExample').text()).select();
		document.execCommand("copy");
		$temp.remove();
	}
</script>

ObservationQuery <a style="cursor: pointer" onclick="copyObservationQueryExample()">Copy</a>

<div id="ObservationQueryExample" style="max-height: 250px; overflow-y: scroll;">
~~~ json
{ 
  "filter": { 
    "type": String, 
    "clauses": { 
      "type": String, 
      "predicates": { 
        "type": String, 
        "dimension": String, 
        "propertyType": String, 
        "property": String, 
        "metric": String, 
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
      "propertyType": String, 
      "property": String, 
      "metric": String, 
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
}
~~~
</div>


### Example Usage

~~~ javascript
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Configure OAuth2 access token for authorization: PureCloud Auth
platformClient.ApiClient.instance.authentications['PureCloud Auth'].accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new platformClient.UsersApi();

var body = {}; // Object | query

apiInstance.postAnalyticsUsersObservationsQuery(body)
  .then(function(data) {
    console.log(`postAnalyticsUsersObservationsQuery success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch(function(err) {
  	console.log('There was a failure calling postAnalyticsUsersObservationsQuery');
    console.error(err);
  });

~~~

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **body** | **Object** | query |  |
{: class="table table-striped"}

### Return type

**ObservationQueryResponse**

<a name="postUserInvite"></a>

# void postUserInvite(userId, opts)



POST /api/v2/users/{userId}/invite

Send an activation email to the user



Requires ANY permissions: 

* directory:user:add
* user_manager
* user_administration



### Example Usage

~~~ javascript
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Configure OAuth2 access token for authorization: PureCloud Auth
platformClient.ApiClient.instance.authentications['PureCloud Auth'].accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new platformClient.UsersApi();

var userId = "userId_example"; // String | User ID

var opts = { 
  'force': false // Boolean | Resend the invitation even if one is already outstanding
};
apiInstance.postUserInvite(userId, opts)
  .then(function() {
    console.log('postUserInvite returned successfully.');
  })
  .catch(function(err) {
  	console.log('There was a failure calling postUserInvite');
    console.error(err);
  });

~~~

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

* user_administration
* directory:userPassword:edit


### Request Body Schema

{::options parse_block_html="true" /}

<script type="text/javascript">
	function copyChangePasswordRequestExample() {
		var $temp = $("<textarea>");
		$("body").append($temp);
		$temp.val($('#ChangePasswordRequestExample').text()).select();
		document.execCommand("copy");
		$temp.remove();
	}
</script>

ChangePasswordRequest <a style="cursor: pointer" onclick="copyChangePasswordRequestExample()">Copy</a>

<div id="ChangePasswordRequestExample" style="max-height: 250px; overflow-y: scroll;">
~~~ json
{ 
  "newPassword": String, 
}
~~~
</div>


### Example Usage

~~~ javascript
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Configure OAuth2 access token for authorization: PureCloud Auth
platformClient.ApiClient.instance.authentications['PureCloud Auth'].accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new platformClient.UsersApi();

var userId = "userId_example"; // String | User ID

var body = {}; // Object | Password

apiInstance.postUserPassword(userId, body)
  .then(function() {
    console.log('postUserPassword returned successfully.');
  })
  .catch(function(err) {
  	console.log('There was a failure calling postUserPassword');
    console.error(err);
  });

~~~

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
* admin


### Request Body Schema

{::options parse_block_html="true" /}

<script type="text/javascript">
	function copyUserRoutingLanguagePostExample() {
		var $temp = $("<textarea>");
		$("body").append($temp);
		$temp.val($('#UserRoutingLanguagePostExample').text()).select();
		document.execCommand("copy");
		$temp.remove();
	}
</script>

UserRoutingLanguagePost <a style="cursor: pointer" onclick="copyUserRoutingLanguagePostExample()">Copy</a>

<div id="UserRoutingLanguagePostExample" style="max-height: 250px; overflow-y: scroll;">
~~~ json
{ 
  "id": String, 
  "proficiency": Number, 
  "languageUri": String, 
  "selfUri": String, 
}
~~~
</div>


### Example Usage

~~~ javascript
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Configure OAuth2 access token for authorization: PureCloud Auth
platformClient.ApiClient.instance.authentications['PureCloud Auth'].accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new platformClient.UsersApi();

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



Requires ANY permissions: 

* routing:skill:assign
* admin


### Request Body Schema

{::options parse_block_html="true" /}

<script type="text/javascript">
	function copyUserRoutingSkillPostExample() {
		var $temp = $("<textarea>");
		$("body").append($temp);
		$temp.val($('#UserRoutingSkillPostExample').text()).select();
		document.execCommand("copy");
		$temp.remove();
	}
</script>

UserRoutingSkillPost <a style="cursor: pointer" onclick="copyUserRoutingSkillPostExample()">Copy</a>

<div id="UserRoutingSkillPostExample" style="max-height: 250px; overflow-y: scroll;">
~~~ json
{ 
  "id": String, 
  "proficiency": Number, 
  "skillUri": String, 
  "selfUri": String, 
}
~~~
</div>


### Example Usage

~~~ javascript
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Configure OAuth2 access token for authorization: PureCloud Auth
platformClient.ApiClient.instance.authentications['PureCloud Auth'].accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new platformClient.UsersApi();

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

<a name="postUsers"></a>

# User postUsers(body)



POST /api/v2/users

Create user



Requires ANY permissions: 

* directory:user:add


### Request Body Schema

{::options parse_block_html="true" /}

<script type="text/javascript">
	function copyCreateUserExample() {
		var $temp = $("<textarea>");
		$("body").append($temp);
		$temp.val($('#CreateUserExample').text()).select();
		document.execCommand("copy");
		$temp.remove();
	}
</script>

CreateUser <a style="cursor: pointer" onclick="copyCreateUserExample()">Copy</a>

<div id="CreateUserExample" style="max-height: 250px; overflow-y: scroll;">
~~~ json
{ 
  "name": String, 
  "department": String, 
  "email": String, 
  "addresses": { 
    "address": String, 
    "display": String, 
    "mediaType": String, 
    "type": String, 
    "extension": String, 
  },  
  "title": String, 
  "password": String, 
}
~~~
</div>


### Example Usage

~~~ javascript
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Configure OAuth2 access token for authorization: PureCloud Auth
platformClient.ApiClient.instance.authentications['PureCloud Auth'].accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new platformClient.UsersApi();

var body = {}; // Object | User

apiInstance.postUsers(body)
  .then(function(data) {
    console.log(`postUsers success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch(function(err) {
  	console.log('There was a failure calling postUsers');
    console.error(err);
  });

~~~

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **body** | **Object** | User |  |
{: class="table table-striped"}

### Return type

**User**

<a name="postUsersMePassword"></a>

# void postUsersMePassword(body)



POST /api/v2/users/me/password

Change your password



Requires NO permissions: 



### Request Body Schema

{::options parse_block_html="true" /}

<script type="text/javascript">
	function copyChangeMyPasswordRequestExample() {
		var $temp = $("<textarea>");
		$("body").append($temp);
		$temp.val($('#ChangeMyPasswordRequestExample').text()).select();
		document.execCommand("copy");
		$temp.remove();
	}
</script>

ChangeMyPasswordRequest <a style="cursor: pointer" onclick="copyChangeMyPasswordRequestExample()">Copy</a>

<div id="ChangeMyPasswordRequestExample" style="max-height: 250px; overflow-y: scroll;">
~~~ json
{ 
  "newPassword": String, 
  "oldPassword": String, 
}
~~~
</div>


### Example Usage

~~~ javascript
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Configure OAuth2 access token for authorization: PureCloud Auth
platformClient.ApiClient.instance.authentications['PureCloud Auth'].accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new platformClient.UsersApi();

var body = {}; // Object | Password

apiInstance.postUsersMePassword(body)
  .then(function() {
    console.log('postUsersMePassword returned successfully.');
  })
  .catch(function(err) {
  	console.log('There was a failure calling postUsersMePassword');
    console.error(err);
  });

~~~

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



Requires NO permissions: 



### Request Body Schema

{::options parse_block_html="true" /}

<script type="text/javascript">
	function copyUserSearchRequestExample() {
		var $temp = $("<textarea>");
		$("body").append($temp);
		$temp.val($('#UserSearchRequestExample').text()).select();
		document.execCommand("copy");
		$temp.remove();
	}
</script>

UserSearchRequest <a style="cursor: pointer" onclick="copyUserSearchRequestExample()">Copy</a>

<div id="UserSearchRequestExample" style="max-height: 250px; overflow-y: scroll;">
~~~ json
{ 
  "sortOrder": String, 
  "sortBy": String, 
  "pageSize": Number, 
  "pageNumber": Number, 
  "sort": { 
    "sortOrder": String, 
    "sortBy": String, 
  },  
  "expand": [String], 
  "query": { 
    "endValue": String, 
    "values": [String], 
    "startValue": String, 
    "fields": [String], 
    "value": String, 
    "operator": String, 
    "group": { 
      "endValue": String, 
      "values": [String], 
      "startValue": String, 
      "fields": [String], 
      "value": String, 
      "operator": String, 
      "group": { 
        "endValue": String, 
        "values": [String], 
        "startValue": String, 
        "fields": [String], 
        "value": String, 
        "operator": String, 
        "group": { 
          "endValue": String, 
          "values": [String], 
          "startValue": String, 
          "fields": [String], 
          "value": String, 
          "operator": String, 
          "group": { 
            "endValue": String, 
            "values": [String], 
            "startValue": String, 
            "fields": [String], 
            "value": String, 
            "operator": String, 
            "group": { 
              "endValue": String, 
              "values": [String], 
              "startValue": String, 
              "fields": [String], 
              "value": String, 
              "operator": String, 
              "group": { 
                "endValue": String, 
                "values": [String], 
                "startValue": String, 
                "fields": [String], 
                "value": String, 
                "operator": String, 
                "group": [UserSearchCriteria], 
                "type": String, 
              },  
              "type": String, 
            },  
            "type": String, 
          },  
          "type": String, 
        },  
        "type": String, 
      },  
      "type": String, 
    },  
    "type": String, 
  },  
}
~~~
</div>


### Example Usage

~~~ javascript
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Configure OAuth2 access token for authorization: PureCloud Auth
platformClient.ApiClient.instance.authentications['PureCloud Auth'].accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new platformClient.UsersApi();

var body = {}; // Object | Search request options

apiInstance.postUsersSearch(body)
  .then(function(data) {
    console.log(`postUsersSearch success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch(function(err) {
  	console.log('There was a failure calling postUsersSearch');
    console.error(err);
  });

~~~

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **body** | **Object** | Search request options |  |
{: class="table table-striped"}

### Return type

**UsersSearchResponse**

<a name="putUserCallforwarding"></a>

# CallForwarding putUserCallforwarding(userId, body)



PUT /api/v2/users/{userId}/callforwarding

Update a user&#39;s CallForwarding



Requires NO permissions: 



### Request Body Schema

{::options parse_block_html="true" /}

<script type="text/javascript">
	function copyCallForwardingExample() {
		var $temp = $("<textarea>");
		$("body").append($temp);
		$temp.val($('#CallForwardingExample').text()).select();
		document.execCommand("copy");
		$temp.remove();
	}
</script>

CallForwarding <a style="cursor: pointer" onclick="copyCallForwardingExample()">Copy</a>

<div id="CallForwardingExample" style="max-height: 250px; overflow-y: scroll;">
~~~ json
{ 
  "id": String, 
  "name": String, 
  "user": { 
    "id": String, 
    "name": String, 
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
      "user": { 
        "id": String, 
        "name": String, 
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
          "user": { 
            "id": String, 
            "name": String, 
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
                "contactCenter": MediaSummaryDetail, 
                "enterprise": MediaSummaryDetail, 
              },  
              "callback": { 
                "contactCenter": MediaSummaryDetail, 
                "enterprise": MediaSummaryDetail, 
              },  
              "email": { 
                "contactCenter": MediaSummaryDetail, 
                "enterprise": MediaSummaryDetail, 
              },  
              "message": { 
                "contactCenter": MediaSummaryDetail, 
                "enterprise": MediaSummaryDetail, 
              },  
              "chat": { 
                "contactCenter": MediaSummaryDetail, 
                "enterprise": MediaSummaryDetail, 
              },  
              "socialExpression": { 
                "contactCenter": MediaSummaryDetail, 
                "enterprise": MediaSummaryDetail, 
              },  
              "video": { 
                "contactCenter": MediaSummaryDetail, 
                "enterprise": MediaSummaryDetail, 
              },  
            },  
            "outOfOffice": { 
              "id": String, 
              "name": String, 
              "user": { 
                "id": String, 
                "name": String, 
                "chat": Chat, 
                "department": String, 
                "email": String, 
                "primaryContactInfo": [Contact], 
                "addresses": [Contact], 
                "state": String, 
                "title": String, 
                "username": String, 
                "manager": User, 
                "images": [UserImage], 
                "version": Number, 
                "routingStatus": RoutingStatus, 
                "presence": UserPresence, 
                "conversationSummary": UserConversationSummary, 
                "outOfOffice": OutOfOffice, 
                "geolocation": Geolocation, 
                "station": UserStations, 
                "authorization": UserAuthorization, 
                "profileSkills": [String], 
                "locations": [Location], 
                "groups": [Group], 
                "acdAutoAnswer": Boolean, 
                "selfUri": String, 
              },  
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
                "address": LocationAddress, 
                "addressVerified": Boolean, 
                "emergencyNumber": LocationEmergencyNumber, 
                "state": String, 
                "version": Number, 
                "path": [String], 
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
              "permissions": [String], 
              "permissionPolicies": { 
                "id": String, 
                "domain": String, 
                "entityName": String, 
                "policyName": String, 
                "policyDescription": String, 
                "actionSetKey": String, 
                "allowConditions": Boolean, 
                "resourceConditionNode": ResourceConditionNode, 
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
                "address": LocationAddress, 
                "addressVerified": Boolean, 
                "emergencyNumber": LocationEmergencyNumber, 
                "state": String, 
                "version": Number, 
                "path": [String], 
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
                "display": String, 
                "type": String, 
                "mediaType": String, 
              },  
              "rulesVisible": Boolean, 
              "visibility": String, 
              "owners": { 
                "id": String, 
                "name": String, 
                "chat": Chat, 
                "department": String, 
                "email": String, 
                "primaryContactInfo": [Contact], 
                "addresses": [Contact], 
                "state": String, 
                "title": String, 
                "username": String, 
                "manager": User, 
                "images": [UserImage], 
                "version": Number, 
                "routingStatus": RoutingStatus, 
                "presence": UserPresence, 
                "conversationSummary": UserConversationSummary, 
                "outOfOffice": OutOfOffice, 
                "geolocation": Geolocation, 
                "station": UserStations, 
                "authorization": UserAuthorization, 
                "profileSkills": [String], 
                "locations": [Location], 
                "groups": [Group], 
                "acdAutoAnswer": Boolean, 
                "selfUri": String, 
              },  
              "selfUri": String, 
            },  
            "acdAutoAnswer": Boolean, 
            "selfUri": String, 
          },  
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
            "address": { 
              "city": String, 
              "country": String, 
              "countryName": String, 
              "state": String, 
              "street1": String, 
              "street2": String, 
              "zipcode": String, 
            },  
            "addressVerified": Boolean, 
            "emergencyNumber": { 
              "e164": String, 
              "number": String, 
              "type": String, 
            },  
            "state": String, 
            "version": Number, 
            "path": [String], 
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
            "address": { 
              "city": String, 
              "country": String, 
              "countryName": String, 
              "state": String, 
              "street1": String, 
              "street2": String, 
              "zipcode": String, 
            },  
            "addressVerified": Boolean, 
            "emergencyNumber": { 
              "e164": String, 
              "number": String, 
              "type": String, 
            },  
            "state": String, 
            "version": Number, 
            "path": [String], 
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
            "display": String, 
            "type": String, 
            "mediaType": String, 
          },  
          "rulesVisible": Boolean, 
          "visibility": String, 
          "owners": { 
            "id": String, 
            "name": String, 
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
                "contactCenter": MediaSummaryDetail, 
                "enterprise": MediaSummaryDetail, 
              },  
              "callback": { 
                "contactCenter": MediaSummaryDetail, 
                "enterprise": MediaSummaryDetail, 
              },  
              "email": { 
                "contactCenter": MediaSummaryDetail, 
                "enterprise": MediaSummaryDetail, 
              },  
              "message": { 
                "contactCenter": MediaSummaryDetail, 
                "enterprise": MediaSummaryDetail, 
              },  
              "chat": { 
                "contactCenter": MediaSummaryDetail, 
                "enterprise": MediaSummaryDetail, 
              },  
              "socialExpression": { 
                "contactCenter": MediaSummaryDetail, 
                "enterprise": MediaSummaryDetail, 
              },  
              "video": { 
                "contactCenter": MediaSummaryDetail, 
                "enterprise": MediaSummaryDetail, 
              },  
            },  
            "outOfOffice": { 
              "id": String, 
              "name": String, 
              "user": { 
                "id": String, 
                "name": String, 
                "chat": Chat, 
                "department": String, 
                "email": String, 
                "primaryContactInfo": [Contact], 
                "addresses": [Contact], 
                "state": String, 
                "title": String, 
                "username": String, 
                "manager": User, 
                "images": [UserImage], 
                "version": Number, 
                "routingStatus": RoutingStatus, 
                "presence": UserPresence, 
                "conversationSummary": UserConversationSummary, 
                "outOfOffice": OutOfOffice, 
                "geolocation": Geolocation, 
                "station": UserStations, 
                "authorization": UserAuthorization, 
                "profileSkills": [String], 
                "locations": [Location], 
                "groups": [Group], 
                "acdAutoAnswer": Boolean, 
                "selfUri": String, 
              },  
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
                "address": LocationAddress, 
                "addressVerified": Boolean, 
                "emergencyNumber": LocationEmergencyNumber, 
                "state": String, 
                "version": Number, 
                "path": [String], 
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
              "permissions": [String], 
              "permissionPolicies": { 
                "id": String, 
                "domain": String, 
                "entityName": String, 
                "policyName": String, 
                "policyDescription": String, 
                "actionSetKey": String, 
                "allowConditions": Boolean, 
                "resourceConditionNode": ResourceConditionNode, 
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
                "address": LocationAddress, 
                "addressVerified": Boolean, 
                "emergencyNumber": LocationEmergencyNumber, 
                "state": String, 
                "version": Number, 
                "path": [String], 
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
                "display": String, 
                "type": String, 
                "mediaType": String, 
              },  
              "rulesVisible": Boolean, 
              "visibility": String, 
              "owners": { 
                "id": String, 
                "name": String, 
                "chat": Chat, 
                "department": String, 
                "email": String, 
                "primaryContactInfo": [Contact], 
                "addresses": [Contact], 
                "state": String, 
                "title": String, 
                "username": String, 
                "manager": User, 
                "images": [UserImage], 
                "version": Number, 
                "routingStatus": RoutingStatus, 
                "presence": UserPresence, 
                "conversationSummary": UserConversationSummary, 
                "outOfOffice": OutOfOffice, 
                "geolocation": Geolocation, 
                "station": UserStations, 
                "authorization": UserAuthorization, 
                "profileSkills": [String], 
                "locations": [Location], 
                "groups": [Group], 
                "acdAutoAnswer": Boolean, 
                "selfUri": String, 
              },  
              "selfUri": String, 
            },  
            "acdAutoAnswer": Boolean, 
            "selfUri": String, 
          },  
          "selfUri": String, 
        },  
        "acdAutoAnswer": Boolean, 
        "selfUri": String, 
      },  
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
        "address": { 
          "city": String, 
          "country": String, 
          "countryName": String, 
          "state": String, 
          "street1": String, 
          "street2": String, 
          "zipcode": String, 
        },  
        "addressVerified": Boolean, 
        "emergencyNumber": { 
          "e164": String, 
          "number": String, 
          "type": String, 
        },  
        "state": String, 
        "version": Number, 
        "path": [String], 
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
        "address": { 
          "city": String, 
          "country": String, 
          "countryName": String, 
          "state": String, 
          "street1": String, 
          "street2": String, 
          "zipcode": String, 
        },  
        "addressVerified": Boolean, 
        "emergencyNumber": { 
          "e164": String, 
          "number": String, 
          "type": String, 
        },  
        "state": String, 
        "version": Number, 
        "path": [String], 
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
        "display": String, 
        "type": String, 
        "mediaType": String, 
      },  
      "rulesVisible": Boolean, 
      "visibility": String, 
      "owners": { 
        "id": String, 
        "name": String, 
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
          "user": { 
            "id": String, 
            "name": String, 
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
                "contactCenter": MediaSummaryDetail, 
                "enterprise": MediaSummaryDetail, 
              },  
              "callback": { 
                "contactCenter": MediaSummaryDetail, 
                "enterprise": MediaSummaryDetail, 
              },  
              "email": { 
                "contactCenter": MediaSummaryDetail, 
                "enterprise": MediaSummaryDetail, 
              },  
              "message": { 
                "contactCenter": MediaSummaryDetail, 
                "enterprise": MediaSummaryDetail, 
              },  
              "chat": { 
                "contactCenter": MediaSummaryDetail, 
                "enterprise": MediaSummaryDetail, 
              },  
              "socialExpression": { 
                "contactCenter": MediaSummaryDetail, 
                "enterprise": MediaSummaryDetail, 
              },  
              "video": { 
                "contactCenter": MediaSummaryDetail, 
                "enterprise": MediaSummaryDetail, 
              },  
            },  
            "outOfOffice": { 
              "id": String, 
              "name": String, 
              "user": { 
                "id": String, 
                "name": String, 
                "chat": Chat, 
                "department": String, 
                "email": String, 
                "primaryContactInfo": [Contact], 
                "addresses": [Contact], 
                "state": String, 
                "title": String, 
                "username": String, 
                "manager": User, 
                "images": [UserImage], 
                "version": Number, 
                "routingStatus": RoutingStatus, 
                "presence": UserPresence, 
                "conversationSummary": UserConversationSummary, 
                "outOfOffice": OutOfOffice, 
                "geolocation": Geolocation, 
                "station": UserStations, 
                "authorization": UserAuthorization, 
                "profileSkills": [String], 
                "locations": [Location], 
                "groups": [Group], 
                "acdAutoAnswer": Boolean, 
                "selfUri": String, 
              },  
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
                "address": LocationAddress, 
                "addressVerified": Boolean, 
                "emergencyNumber": LocationEmergencyNumber, 
                "state": String, 
                "version": Number, 
                "path": [String], 
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
              "permissions": [String], 
              "permissionPolicies": { 
                "id": String, 
                "domain": String, 
                "entityName": String, 
                "policyName": String, 
                "policyDescription": String, 
                "actionSetKey": String, 
                "allowConditions": Boolean, 
                "resourceConditionNode": ResourceConditionNode, 
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
                "address": LocationAddress, 
                "addressVerified": Boolean, 
                "emergencyNumber": LocationEmergencyNumber, 
                "state": String, 
                "version": Number, 
                "path": [String], 
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
                "display": String, 
                "type": String, 
                "mediaType": String, 
              },  
              "rulesVisible": Boolean, 
              "visibility": String, 
              "owners": { 
                "id": String, 
                "name": String, 
                "chat": Chat, 
                "department": String, 
                "email": String, 
                "primaryContactInfo": [Contact], 
                "addresses": [Contact], 
                "state": String, 
                "title": String, 
                "username": String, 
                "manager": User, 
                "images": [UserImage], 
                "version": Number, 
                "routingStatus": RoutingStatus, 
                "presence": UserPresence, 
                "conversationSummary": UserConversationSummary, 
                "outOfOffice": OutOfOffice, 
                "geolocation": Geolocation, 
                "station": UserStations, 
                "authorization": UserAuthorization, 
                "profileSkills": [String], 
                "locations": [Location], 
                "groups": [Group], 
                "acdAutoAnswer": Boolean, 
                "selfUri": String, 
              },  
              "selfUri": String, 
            },  
            "acdAutoAnswer": Boolean, 
            "selfUri": String, 
          },  
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
            "address": { 
              "city": String, 
              "country": String, 
              "countryName": String, 
              "state": String, 
              "street1": String, 
              "street2": String, 
              "zipcode": String, 
            },  
            "addressVerified": Boolean, 
            "emergencyNumber": { 
              "e164": String, 
              "number": String, 
              "type": String, 
            },  
            "state": String, 
            "version": Number, 
            "path": [String], 
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
            "address": { 
              "city": String, 
              "country": String, 
              "countryName": String, 
              "state": String, 
              "street1": String, 
              "street2": String, 
              "zipcode": String, 
            },  
            "addressVerified": Boolean, 
            "emergencyNumber": { 
              "e164": String, 
              "number": String, 
              "type": String, 
            },  
            "state": String, 
            "version": Number, 
            "path": [String], 
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
            "display": String, 
            "type": String, 
            "mediaType": String, 
          },  
          "rulesVisible": Boolean, 
          "visibility": String, 
          "owners": { 
            "id": String, 
            "name": String, 
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
                "contactCenter": MediaSummaryDetail, 
                "enterprise": MediaSummaryDetail, 
              },  
              "callback": { 
                "contactCenter": MediaSummaryDetail, 
                "enterprise": MediaSummaryDetail, 
              },  
              "email": { 
                "contactCenter": MediaSummaryDetail, 
                "enterprise": MediaSummaryDetail, 
              },  
              "message": { 
                "contactCenter": MediaSummaryDetail, 
                "enterprise": MediaSummaryDetail, 
              },  
              "chat": { 
                "contactCenter": MediaSummaryDetail, 
                "enterprise": MediaSummaryDetail, 
              },  
              "socialExpression": { 
                "contactCenter": MediaSummaryDetail, 
                "enterprise": MediaSummaryDetail, 
              },  
              "video": { 
                "contactCenter": MediaSummaryDetail, 
                "enterprise": MediaSummaryDetail, 
              },  
            },  
            "outOfOffice": { 
              "id": String, 
              "name": String, 
              "user": { 
                "id": String, 
                "name": String, 
                "chat": Chat, 
                "department": String, 
                "email": String, 
                "primaryContactInfo": [Contact], 
                "addresses": [Contact], 
                "state": String, 
                "title": String, 
                "username": String, 
                "manager": User, 
                "images": [UserImage], 
                "version": Number, 
                "routingStatus": RoutingStatus, 
                "presence": UserPresence, 
                "conversationSummary": UserConversationSummary, 
                "outOfOffice": OutOfOffice, 
                "geolocation": Geolocation, 
                "station": UserStations, 
                "authorization": UserAuthorization, 
                "profileSkills": [String], 
                "locations": [Location], 
                "groups": [Group], 
                "acdAutoAnswer": Boolean, 
                "selfUri": String, 
              },  
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
                "address": LocationAddress, 
                "addressVerified": Boolean, 
                "emergencyNumber": LocationEmergencyNumber, 
                "state": String, 
                "version": Number, 
                "path": [String], 
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
              "permissions": [String], 
              "permissionPolicies": { 
                "id": String, 
                "domain": String, 
                "entityName": String, 
                "policyName": String, 
                "policyDescription": String, 
                "actionSetKey": String, 
                "allowConditions": Boolean, 
                "resourceConditionNode": ResourceConditionNode, 
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
                "address": LocationAddress, 
                "addressVerified": Boolean, 
                "emergencyNumber": LocationEmergencyNumber, 
                "state": String, 
                "version": Number, 
                "path": [String], 
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
                "display": String, 
                "type": String, 
                "mediaType": String, 
              },  
              "rulesVisible": Boolean, 
              "visibility": String, 
              "owners": { 
                "id": String, 
                "name": String, 
                "chat": Chat, 
                "department": String, 
                "email": String, 
                "primaryContactInfo": [Contact], 
                "addresses": [Contact], 
                "state": String, 
                "title": String, 
                "username": String, 
                "manager": User, 
                "images": [UserImage], 
                "version": Number, 
                "routingStatus": RoutingStatus, 
                "presence": UserPresence, 
                "conversationSummary": UserConversationSummary, 
                "outOfOffice": OutOfOffice, 
                "geolocation": Geolocation, 
                "station": UserStations, 
                "authorization": UserAuthorization, 
                "profileSkills": [String], 
                "locations": [Location], 
                "groups": [Group], 
                "acdAutoAnswer": Boolean, 
                "selfUri": String, 
              },  
              "selfUri": String, 
            },  
            "acdAutoAnswer": Boolean, 
            "selfUri": String, 
          },  
          "selfUri": String, 
        },  
        "acdAutoAnswer": Boolean, 
        "selfUri": String, 
      },  
      "selfUri": String, 
    },  
    "acdAutoAnswer": Boolean, 
    "selfUri": String, 
  },  
  "enabled": Boolean, 
  "phoneNumber": String, 
  "calls": { 
    "targets": { 
      "type": String, 
      "value": String, 
    },  
  },  
  "voicemail": String, 
  "modifiedDate": Date, 
  "selfUri": String, 
}
~~~
</div>


### Example Usage

~~~ javascript
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Configure OAuth2 access token for authorization: PureCloud Auth
platformClient.ApiClient.instance.authentications['PureCloud Auth'].accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new platformClient.UsersApi();

var userId = "userId_example"; // String | User ID

var body = {}; // Object | Call forwarding

apiInstance.putUserCallforwarding(userId, body)
  .then(function(data) {
    console.log(`putUserCallforwarding success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch(function(err) {
  	console.log('There was a failure calling putUserCallforwarding');
    console.error(err);
  });

~~~

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



### Request Body Schema

{::options parse_block_html="true" /}

<script type="text/javascript">
	function copyOutOfOfficeExample() {
		var $temp = $("<textarea>");
		$("body").append($temp);
		$temp.val($('#OutOfOfficeExample').text()).select();
		document.execCommand("copy");
		$temp.remove();
	}
</script>

OutOfOffice <a style="cursor: pointer" onclick="copyOutOfOfficeExample()">Copy</a>

<div id="OutOfOfficeExample" style="max-height: 250px; overflow-y: scroll;">
~~~ json
{ 
  "id": String, 
  "name": String, 
  "user": { 
    "id": String, 
    "name": String, 
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
      "user": { 
        "id": String, 
        "name": String, 
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
          "user": { 
            "id": String, 
            "name": String, 
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
                "contactCenter": MediaSummaryDetail, 
                "enterprise": MediaSummaryDetail, 
              },  
              "callback": { 
                "contactCenter": MediaSummaryDetail, 
                "enterprise": MediaSummaryDetail, 
              },  
              "email": { 
                "contactCenter": MediaSummaryDetail, 
                "enterprise": MediaSummaryDetail, 
              },  
              "message": { 
                "contactCenter": MediaSummaryDetail, 
                "enterprise": MediaSummaryDetail, 
              },  
              "chat": { 
                "contactCenter": MediaSummaryDetail, 
                "enterprise": MediaSummaryDetail, 
              },  
              "socialExpression": { 
                "contactCenter": MediaSummaryDetail, 
                "enterprise": MediaSummaryDetail, 
              },  
              "video": { 
                "contactCenter": MediaSummaryDetail, 
                "enterprise": MediaSummaryDetail, 
              },  
            },  
            "outOfOffice": { 
              "id": String, 
              "name": String, 
              "user": { 
                "id": String, 
                "name": String, 
                "chat": Chat, 
                "department": String, 
                "email": String, 
                "primaryContactInfo": [Contact], 
                "addresses": [Contact], 
                "state": String, 
                "title": String, 
                "username": String, 
                "manager": User, 
                "images": [UserImage], 
                "version": Number, 
                "routingStatus": RoutingStatus, 
                "presence": UserPresence, 
                "conversationSummary": UserConversationSummary, 
                "outOfOffice": OutOfOffice, 
                "geolocation": Geolocation, 
                "station": UserStations, 
                "authorization": UserAuthorization, 
                "profileSkills": [String], 
                "locations": [Location], 
                "groups": [Group], 
                "acdAutoAnswer": Boolean, 
                "selfUri": String, 
              },  
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
                "address": LocationAddress, 
                "addressVerified": Boolean, 
                "emergencyNumber": LocationEmergencyNumber, 
                "state": String, 
                "version": Number, 
                "path": [String], 
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
              "permissions": [String], 
              "permissionPolicies": { 
                "id": String, 
                "domain": String, 
                "entityName": String, 
                "policyName": String, 
                "policyDescription": String, 
                "actionSetKey": String, 
                "allowConditions": Boolean, 
                "resourceConditionNode": ResourceConditionNode, 
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
                "address": LocationAddress, 
                "addressVerified": Boolean, 
                "emergencyNumber": LocationEmergencyNumber, 
                "state": String, 
                "version": Number, 
                "path": [String], 
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
                "display": String, 
                "type": String, 
                "mediaType": String, 
              },  
              "rulesVisible": Boolean, 
              "visibility": String, 
              "owners": { 
                "id": String, 
                "name": String, 
                "chat": Chat, 
                "department": String, 
                "email": String, 
                "primaryContactInfo": [Contact], 
                "addresses": [Contact], 
                "state": String, 
                "title": String, 
                "username": String, 
                "manager": User, 
                "images": [UserImage], 
                "version": Number, 
                "routingStatus": RoutingStatus, 
                "presence": UserPresence, 
                "conversationSummary": UserConversationSummary, 
                "outOfOffice": OutOfOffice, 
                "geolocation": Geolocation, 
                "station": UserStations, 
                "authorization": UserAuthorization, 
                "profileSkills": [String], 
                "locations": [Location], 
                "groups": [Group], 
                "acdAutoAnswer": Boolean, 
                "selfUri": String, 
              },  
              "selfUri": String, 
            },  
            "acdAutoAnswer": Boolean, 
            "selfUri": String, 
          },  
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
            "address": { 
              "city": String, 
              "country": String, 
              "countryName": String, 
              "state": String, 
              "street1": String, 
              "street2": String, 
              "zipcode": String, 
            },  
            "addressVerified": Boolean, 
            "emergencyNumber": { 
              "e164": String, 
              "number": String, 
              "type": String, 
            },  
            "state": String, 
            "version": Number, 
            "path": [String], 
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
            "address": { 
              "city": String, 
              "country": String, 
              "countryName": String, 
              "state": String, 
              "street1": String, 
              "street2": String, 
              "zipcode": String, 
            },  
            "addressVerified": Boolean, 
            "emergencyNumber": { 
              "e164": String, 
              "number": String, 
              "type": String, 
            },  
            "state": String, 
            "version": Number, 
            "path": [String], 
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
            "display": String, 
            "type": String, 
            "mediaType": String, 
          },  
          "rulesVisible": Boolean, 
          "visibility": String, 
          "owners": { 
            "id": String, 
            "name": String, 
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
                "contactCenter": MediaSummaryDetail, 
                "enterprise": MediaSummaryDetail, 
              },  
              "callback": { 
                "contactCenter": MediaSummaryDetail, 
                "enterprise": MediaSummaryDetail, 
              },  
              "email": { 
                "contactCenter": MediaSummaryDetail, 
                "enterprise": MediaSummaryDetail, 
              },  
              "message": { 
                "contactCenter": MediaSummaryDetail, 
                "enterprise": MediaSummaryDetail, 
              },  
              "chat": { 
                "contactCenter": MediaSummaryDetail, 
                "enterprise": MediaSummaryDetail, 
              },  
              "socialExpression": { 
                "contactCenter": MediaSummaryDetail, 
                "enterprise": MediaSummaryDetail, 
              },  
              "video": { 
                "contactCenter": MediaSummaryDetail, 
                "enterprise": MediaSummaryDetail, 
              },  
            },  
            "outOfOffice": { 
              "id": String, 
              "name": String, 
              "user": { 
                "id": String, 
                "name": String, 
                "chat": Chat, 
                "department": String, 
                "email": String, 
                "primaryContactInfo": [Contact], 
                "addresses": [Contact], 
                "state": String, 
                "title": String, 
                "username": String, 
                "manager": User, 
                "images": [UserImage], 
                "version": Number, 
                "routingStatus": RoutingStatus, 
                "presence": UserPresence, 
                "conversationSummary": UserConversationSummary, 
                "outOfOffice": OutOfOffice, 
                "geolocation": Geolocation, 
                "station": UserStations, 
                "authorization": UserAuthorization, 
                "profileSkills": [String], 
                "locations": [Location], 
                "groups": [Group], 
                "acdAutoAnswer": Boolean, 
                "selfUri": String, 
              },  
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
                "address": LocationAddress, 
                "addressVerified": Boolean, 
                "emergencyNumber": LocationEmergencyNumber, 
                "state": String, 
                "version": Number, 
                "path": [String], 
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
              "permissions": [String], 
              "permissionPolicies": { 
                "id": String, 
                "domain": String, 
                "entityName": String, 
                "policyName": String, 
                "policyDescription": String, 
                "actionSetKey": String, 
                "allowConditions": Boolean, 
                "resourceConditionNode": ResourceConditionNode, 
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
                "address": LocationAddress, 
                "addressVerified": Boolean, 
                "emergencyNumber": LocationEmergencyNumber, 
                "state": String, 
                "version": Number, 
                "path": [String], 
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
                "display": String, 
                "type": String, 
                "mediaType": String, 
              },  
              "rulesVisible": Boolean, 
              "visibility": String, 
              "owners": { 
                "id": String, 
                "name": String, 
                "chat": Chat, 
                "department": String, 
                "email": String, 
                "primaryContactInfo": [Contact], 
                "addresses": [Contact], 
                "state": String, 
                "title": String, 
                "username": String, 
                "manager": User, 
                "images": [UserImage], 
                "version": Number, 
                "routingStatus": RoutingStatus, 
                "presence": UserPresence, 
                "conversationSummary": UserConversationSummary, 
                "outOfOffice": OutOfOffice, 
                "geolocation": Geolocation, 
                "station": UserStations, 
                "authorization": UserAuthorization, 
                "profileSkills": [String], 
                "locations": [Location], 
                "groups": [Group], 
                "acdAutoAnswer": Boolean, 
                "selfUri": String, 
              },  
              "selfUri": String, 
            },  
            "acdAutoAnswer": Boolean, 
            "selfUri": String, 
          },  
          "selfUri": String, 
        },  
        "acdAutoAnswer": Boolean, 
        "selfUri": String, 
      },  
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
        "address": { 
          "city": String, 
          "country": String, 
          "countryName": String, 
          "state": String, 
          "street1": String, 
          "street2": String, 
          "zipcode": String, 
        },  
        "addressVerified": Boolean, 
        "emergencyNumber": { 
          "e164": String, 
          "number": String, 
          "type": String, 
        },  
        "state": String, 
        "version": Number, 
        "path": [String], 
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
        "address": { 
          "city": String, 
          "country": String, 
          "countryName": String, 
          "state": String, 
          "street1": String, 
          "street2": String, 
          "zipcode": String, 
        },  
        "addressVerified": Boolean, 
        "emergencyNumber": { 
          "e164": String, 
          "number": String, 
          "type": String, 
        },  
        "state": String, 
        "version": Number, 
        "path": [String], 
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
        "display": String, 
        "type": String, 
        "mediaType": String, 
      },  
      "rulesVisible": Boolean, 
      "visibility": String, 
      "owners": { 
        "id": String, 
        "name": String, 
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
          "user": { 
            "id": String, 
            "name": String, 
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
                "contactCenter": MediaSummaryDetail, 
                "enterprise": MediaSummaryDetail, 
              },  
              "callback": { 
                "contactCenter": MediaSummaryDetail, 
                "enterprise": MediaSummaryDetail, 
              },  
              "email": { 
                "contactCenter": MediaSummaryDetail, 
                "enterprise": MediaSummaryDetail, 
              },  
              "message": { 
                "contactCenter": MediaSummaryDetail, 
                "enterprise": MediaSummaryDetail, 
              },  
              "chat": { 
                "contactCenter": MediaSummaryDetail, 
                "enterprise": MediaSummaryDetail, 
              },  
              "socialExpression": { 
                "contactCenter": MediaSummaryDetail, 
                "enterprise": MediaSummaryDetail, 
              },  
              "video": { 
                "contactCenter": MediaSummaryDetail, 
                "enterprise": MediaSummaryDetail, 
              },  
            },  
            "outOfOffice": { 
              "id": String, 
              "name": String, 
              "user": { 
                "id": String, 
                "name": String, 
                "chat": Chat, 
                "department": String, 
                "email": String, 
                "primaryContactInfo": [Contact], 
                "addresses": [Contact], 
                "state": String, 
                "title": String, 
                "username": String, 
                "manager": User, 
                "images": [UserImage], 
                "version": Number, 
                "routingStatus": RoutingStatus, 
                "presence": UserPresence, 
                "conversationSummary": UserConversationSummary, 
                "outOfOffice": OutOfOffice, 
                "geolocation": Geolocation, 
                "station": UserStations, 
                "authorization": UserAuthorization, 
                "profileSkills": [String], 
                "locations": [Location], 
                "groups": [Group], 
                "acdAutoAnswer": Boolean, 
                "selfUri": String, 
              },  
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
                "address": LocationAddress, 
                "addressVerified": Boolean, 
                "emergencyNumber": LocationEmergencyNumber, 
                "state": String, 
                "version": Number, 
                "path": [String], 
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
              "permissions": [String], 
              "permissionPolicies": { 
                "id": String, 
                "domain": String, 
                "entityName": String, 
                "policyName": String, 
                "policyDescription": String, 
                "actionSetKey": String, 
                "allowConditions": Boolean, 
                "resourceConditionNode": ResourceConditionNode, 
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
                "address": LocationAddress, 
                "addressVerified": Boolean, 
                "emergencyNumber": LocationEmergencyNumber, 
                "state": String, 
                "version": Number, 
                "path": [String], 
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
                "display": String, 
                "type": String, 
                "mediaType": String, 
              },  
              "rulesVisible": Boolean, 
              "visibility": String, 
              "owners": { 
                "id": String, 
                "name": String, 
                "chat": Chat, 
                "department": String, 
                "email": String, 
                "primaryContactInfo": [Contact], 
                "addresses": [Contact], 
                "state": String, 
                "title": String, 
                "username": String, 
                "manager": User, 
                "images": [UserImage], 
                "version": Number, 
                "routingStatus": RoutingStatus, 
                "presence": UserPresence, 
                "conversationSummary": UserConversationSummary, 
                "outOfOffice": OutOfOffice, 
                "geolocation": Geolocation, 
                "station": UserStations, 
                "authorization": UserAuthorization, 
                "profileSkills": [String], 
                "locations": [Location], 
                "groups": [Group], 
                "acdAutoAnswer": Boolean, 
                "selfUri": String, 
              },  
              "selfUri": String, 
            },  
            "acdAutoAnswer": Boolean, 
            "selfUri": String, 
          },  
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
            "address": { 
              "city": String, 
              "country": String, 
              "countryName": String, 
              "state": String, 
              "street1": String, 
              "street2": String, 
              "zipcode": String, 
            },  
            "addressVerified": Boolean, 
            "emergencyNumber": { 
              "e164": String, 
              "number": String, 
              "type": String, 
            },  
            "state": String, 
            "version": Number, 
            "path": [String], 
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
            "address": { 
              "city": String, 
              "country": String, 
              "countryName": String, 
              "state": String, 
              "street1": String, 
              "street2": String, 
              "zipcode": String, 
            },  
            "addressVerified": Boolean, 
            "emergencyNumber": { 
              "e164": String, 
              "number": String, 
              "type": String, 
            },  
            "state": String, 
            "version": Number, 
            "path": [String], 
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
            "display": String, 
            "type": String, 
            "mediaType": String, 
          },  
          "rulesVisible": Boolean, 
          "visibility": String, 
          "owners": { 
            "id": String, 
            "name": String, 
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
                "contactCenter": MediaSummaryDetail, 
                "enterprise": MediaSummaryDetail, 
              },  
              "callback": { 
                "contactCenter": MediaSummaryDetail, 
                "enterprise": MediaSummaryDetail, 
              },  
              "email": { 
                "contactCenter": MediaSummaryDetail, 
                "enterprise": MediaSummaryDetail, 
              },  
              "message": { 
                "contactCenter": MediaSummaryDetail, 
                "enterprise": MediaSummaryDetail, 
              },  
              "chat": { 
                "contactCenter": MediaSummaryDetail, 
                "enterprise": MediaSummaryDetail, 
              },  
              "socialExpression": { 
                "contactCenter": MediaSummaryDetail, 
                "enterprise": MediaSummaryDetail, 
              },  
              "video": { 
                "contactCenter": MediaSummaryDetail, 
                "enterprise": MediaSummaryDetail, 
              },  
            },  
            "outOfOffice": { 
              "id": String, 
              "name": String, 
              "user": { 
                "id": String, 
                "name": String, 
                "chat": Chat, 
                "department": String, 
                "email": String, 
                "primaryContactInfo": [Contact], 
                "addresses": [Contact], 
                "state": String, 
                "title": String, 
                "username": String, 
                "manager": User, 
                "images": [UserImage], 
                "version": Number, 
                "routingStatus": RoutingStatus, 
                "presence": UserPresence, 
                "conversationSummary": UserConversationSummary, 
                "outOfOffice": OutOfOffice, 
                "geolocation": Geolocation, 
                "station": UserStations, 
                "authorization": UserAuthorization, 
                "profileSkills": [String], 
                "locations": [Location], 
                "groups": [Group], 
                "acdAutoAnswer": Boolean, 
                "selfUri": String, 
              },  
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
                "address": LocationAddress, 
                "addressVerified": Boolean, 
                "emergencyNumber": LocationEmergencyNumber, 
                "state": String, 
                "version": Number, 
                "path": [String], 
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
              "permissions": [String], 
              "permissionPolicies": { 
                "id": String, 
                "domain": String, 
                "entityName": String, 
                "policyName": String, 
                "policyDescription": String, 
                "actionSetKey": String, 
                "allowConditions": Boolean, 
                "resourceConditionNode": ResourceConditionNode, 
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
                "address": LocationAddress, 
                "addressVerified": Boolean, 
                "emergencyNumber": LocationEmergencyNumber, 
                "state": String, 
                "version": Number, 
                "path": [String], 
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
                "display": String, 
                "type": String, 
                "mediaType": String, 
              },  
              "rulesVisible": Boolean, 
              "visibility": String, 
              "owners": { 
                "id": String, 
                "name": String, 
                "chat": Chat, 
                "department": String, 
                "email": String, 
                "primaryContactInfo": [Contact], 
                "addresses": [Contact], 
                "state": String, 
                "title": String, 
                "username": String, 
                "manager": User, 
                "images": [UserImage], 
                "version": Number, 
                "routingStatus": RoutingStatus, 
                "presence": UserPresence, 
                "conversationSummary": UserConversationSummary, 
                "outOfOffice": OutOfOffice, 
                "geolocation": Geolocation, 
                "station": UserStations, 
                "authorization": UserAuthorization, 
                "profileSkills": [String], 
                "locations": [Location], 
                "groups": [Group], 
                "acdAutoAnswer": Boolean, 
                "selfUri": String, 
              },  
              "selfUri": String, 
            },  
            "acdAutoAnswer": Boolean, 
            "selfUri": String, 
          },  
          "selfUri": String, 
        },  
        "acdAutoAnswer": Boolean, 
        "selfUri": String, 
      },  
      "selfUri": String, 
    },  
    "acdAutoAnswer": Boolean, 
    "selfUri": String, 
  },  
  "startDate": Date, 
  "endDate": Date, 
  "active": Boolean, 
  "indefinite": Boolean, 
  "selfUri": String, 
}
~~~
</div>


### Example Usage

~~~ javascript
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Configure OAuth2 access token for authorization: PureCloud Auth
platformClient.ApiClient.instance.authentications['PureCloud Auth'].accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new platformClient.UsersApi();

var userId = "userId_example"; // String | User ID

var body = {}; // Object | The updated OutOffOffice

apiInstance.putUserOutofoffice(userId, body)
  .then(function(data) {
    console.log(`putUserOutofoffice success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch(function(err) {
  	console.log('There was a failure calling putUserOutofoffice');
    console.error(err);
  });

~~~

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **userId** | **String** | User ID |  |
 **body** | **Object** | The updated OutOffOffice |  |
{: class="table table-striped"}

### Return type

**OutOfOffice**

<a name="putUserProfileskills"></a>

# **[&#39;String&#39;]** putUserProfileskills(userId, opts)



PUT /api/v2/users/{userId}/profileskills

Update profile skills for a user



Requires ANY permissions: 

* directory:userProfile:edit
* admin
* user_manager
* user_administration



### Example Usage

~~~ javascript
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Configure OAuth2 access token for authorization: PureCloud Auth
platformClient.ApiClient.instance.authentications['PureCloud Auth'].accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new platformClient.UsersApi();

var userId = "userId_example"; // String | User ID

var opts = { 
  'body': [{}] // Object | Skills
};
apiInstance.putUserProfileskills(userId, opts)
  .then(function(data) {
    console.log(`putUserProfileskills success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch(function(err) {
  	console.log('There was a failure calling putUserProfileskills');
    console.error(err);
  });

~~~

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **userId** | **String** | User ID |  |
 **body** | **Object** | Skills | [optional]  |
{: class="table table-striped"}

### Return type

**[&#39;String&#39;]**

<a name="putUserRoles"></a>

# UserAuthorization putUserRoles(userId, body)



PUT /api/v2/users/{userId}/roles

Sets the user&#39;s roles



Requires ANY permissions: 

* admin
* role_manager
* authorization:grant:add



### Example Usage

~~~ javascript
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Configure OAuth2 access token for authorization: PureCloud Auth
platformClient.ApiClient.instance.authentications['PureCloud Auth'].accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new platformClient.UsersApi();

var userId = "userId_example"; // String | User ID

var body = [{}]; // Object | List of roles

apiInstance.putUserRoles(userId, body)
  .then(function(data) {
    console.log(`putUserRoles success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch(function(err) {
  	console.log('There was a failure calling putUserRoles');
    console.error(err);
  });

~~~

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **userId** | **String** | User ID |  |
 **body** | **Object** | List of roles |  |
{: class="table table-striped"}

### Return type

**UserAuthorization**

<a name="putUserRoutingskill"></a>

# UserRoutingSkill putUserRoutingskill(userId, skillId, body)



PUT /api/v2/users/{userId}/routingskills/{skillId}

Update routing skill proficiency or state.



Requires ANY permissions: 

* routing:skill:assign
* admin


### Request Body Schema

{::options parse_block_html="true" /}

<script type="text/javascript">
	function copyUserRoutingSkillExample() {
		var $temp = $("<textarea>");
		$("body").append($temp);
		$temp.val($('#UserRoutingSkillExample').text()).select();
		document.execCommand("copy");
		$temp.remove();
	}
</script>

UserRoutingSkill <a style="cursor: pointer" onclick="copyUserRoutingSkillExample()">Copy</a>

<div id="UserRoutingSkillExample" style="max-height: 250px; overflow-y: scroll;">
~~~ json
{ 
  "id": String, 
  "name": String, 
  "proficiency": Number, 
  "state": String, 
  "skillUri": String, 
  "selfUri": String, 
}
~~~
</div>


### Example Usage

~~~ javascript
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Configure OAuth2 access token for authorization: PureCloud Auth
platformClient.ApiClient.instance.authentications['PureCloud Auth'].accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new platformClient.UsersApi();

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

<a name="putUserRoutingstatus"></a>

# RoutingStatus putUserRoutingstatus(userId, body)



PUT /api/v2/users/{userId}/routingstatus

Update the routing status of a user



Requires NO permissions: 



### Request Body Schema

{::options parse_block_html="true" /}

<script type="text/javascript">
	function copyRoutingStatusExample() {
		var $temp = $("<textarea>");
		$("body").append($temp);
		$temp.val($('#RoutingStatusExample').text()).select();
		document.execCommand("copy");
		$temp.remove();
	}
</script>

RoutingStatus <a style="cursor: pointer" onclick="copyRoutingStatusExample()">Copy</a>

<div id="RoutingStatusExample" style="max-height: 250px; overflow-y: scroll;">
~~~ json
{ 
  "userId": String, 
  "status": String, 
  "startTime": Date, 
}
~~~
</div>


### Example Usage

~~~ javascript
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Configure OAuth2 access token for authorization: PureCloud Auth
platformClient.ApiClient.instance.authentications['PureCloud Auth'].accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new platformClient.UsersApi();

var userId = "userId_example"; // String | User ID

var body = {}; // Object | Routing Status

apiInstance.putUserRoutingstatus(userId, body)
  .then(function(data) {
    console.log(`putUserRoutingstatus success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch(function(err) {
  	console.log('There was a failure calling putUserRoutingstatus');
    console.error(err);
  });

~~~

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **userId** | **String** | User ID |  |
 **body** | **Object** | Routing Status |  |
{: class="table table-striped"}

### Return type

**RoutingStatus**

<a name="putUserStationAssociatedstationStationId"></a>

# void putUserStationAssociatedstationStationId(userId, stationId)



PUT /api/v2/users/{userId}/station/associatedstation/{stationId}

Set associated station



Requires NO permissions: 




### Example Usage

~~~ javascript
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Configure OAuth2 access token for authorization: PureCloud Auth
platformClient.ApiClient.instance.authentications['PureCloud Auth'].accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new platformClient.UsersApi();

var userId = "userId_example"; // String | User ID

var stationId = "stationId_example"; // String | stationId

apiInstance.putUserStationAssociatedstationStationId(userId, stationId)
  .then(function() {
    console.log('putUserStationAssociatedstationStationId returned successfully.');
  })
  .catch(function(err) {
  	console.log('There was a failure calling putUserStationAssociatedstationStationId');
    console.error(err);
  });

~~~

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

~~~ javascript
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Configure OAuth2 access token for authorization: PureCloud Auth
platformClient.ApiClient.instance.authentications['PureCloud Auth'].accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new platformClient.UsersApi();

var userId = "userId_example"; // String | User ID

var stationId = "stationId_example"; // String | stationId

apiInstance.putUserStationDefaultstationStationId(userId, stationId)
  .then(function() {
    console.log('putUserStationDefaultstationStationId returned successfully.');
  })
  .catch(function(err) {
  	console.log('There was a failure calling putUserStationDefaultstationStationId');
    console.error(err);
  });

~~~

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **userId** | **String** | User ID |  |
 **stationId** | **String** | stationId |  |
{: class="table table-striped"}

### Return type

void (no response body)

