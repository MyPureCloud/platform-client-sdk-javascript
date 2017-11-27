---
title: PresenceApi
---
# platformClient.PresenceApi

All URIs are relative to *https://api.mypurecloud.com*

| Method | HTTP request | Description |
| ------------- | ------------- | ------------- |
[**deletePresencedefinition**](PresenceApi.html#deletePresencedefinition) | **DELETE** /api/v2/presencedefinitions/{presenceId} | Delete a Presence Definition
[**getPresencedefinition**](PresenceApi.html#getPresencedefinition) | **GET** /api/v2/presencedefinitions/{presenceId} | Get a Presence Definition
[**getPresencedefinitions**](PresenceApi.html#getPresencedefinitions) | **GET** /api/v2/presencedefinitions | Get an Organization&#39;s list of Presence Definitions
[**getSystempresences**](PresenceApi.html#getSystempresences) | **GET** /api/v2/systempresences | Get the list of SystemPresences
[**getUserPresence**](PresenceApi.html#getUserPresence) | **GET** /api/v2/users/{userId}/presences/{sourceId} | Get a user&#39;s Presence
[**patchUserPresence**](PresenceApi.html#patchUserPresence) | **PATCH** /api/v2/users/{userId}/presences/{sourceId} | Patch a user&#39;s Presence
[**postPresencedefinitions**](PresenceApi.html#postPresencedefinitions) | **POST** /api/v2/presencedefinitions | Create a Presence Definition
[**putPresencedefinition**](PresenceApi.html#putPresencedefinition) | **PUT** /api/v2/presencedefinitions/{presenceId} | Update a Presence Definition
{: class="table table-striped"}

<a name="deletePresencedefinition"></a>

# void deletePresencedefinition(presenceId)

DELETE /api/v2/presencedefinitions/{presenceId}

Delete a Presence Definition



### Example

~~~ javascript
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Configure OAuth2 access token for authorization: PureCloud Auth
platformClient.ApiClient.instance.authentications['PureCloud Auth'].accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new platformClient.PresenceApi();

var presenceId = "presenceId_example"; // String | Organization Presence ID

apiInstance.deletePresencedefinition(presenceId)
  .then(function() {
    console.log('deletePresencedefinition returned successfully.');
  })
  .catch(function(err) {
  	console.log('There was a failure calling deletePresencedefinition');
    console.error(err);
  });

~~~

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **presenceId** | **String** | Organization Presence ID |  |
{: class="table table-striped"}

### Return type

void (no response body)

<a name="getPresencedefinition"></a>

# OrganizationPresence getPresencedefinition(presenceId, opts)

GET /api/v2/presencedefinitions/{presenceId}

Get a Presence Definition



### Example

~~~ javascript
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Configure OAuth2 access token for authorization: PureCloud Auth
platformClient.ApiClient.instance.authentications['PureCloud Auth'].accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new platformClient.PresenceApi();

var presenceId = "presenceId_example"; // String | Organization Presence ID

var opts = { 
  'localeCode': "localeCode_example" // String | The locale code to fetch for the presence definition. Use ALL to fetch everything.
};
apiInstance.getPresencedefinition(presenceId, opts)
  .then(function(data) {
    console.log(`getPresencedefinition success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch(function(err) {
  	console.log('There was a failure calling getPresencedefinition');
    console.error(err);
  });

~~~

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **presenceId** | **String** | Organization Presence ID |  |
 **localeCode** | **String** | The locale code to fetch for the presence definition. Use ALL to fetch everything. | [optional]  |
{: class="table table-striped"}

### Return type

**OrganizationPresence**

<a name="getPresencedefinitions"></a>

# OrganizationPresenceEntityListing getPresencedefinitions(opts)

GET /api/v2/presencedefinitions

Get an Organization&#39;s list of Presence Definitions



### Example

~~~ javascript
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Configure OAuth2 access token for authorization: PureCloud Auth
platformClient.ApiClient.instance.authentications['PureCloud Auth'].accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new platformClient.PresenceApi();

var opts = { 
  'pageNumber': 1, // Number | Page number
  'pageSize': 25, // Number | Page size
  'deleted': "false", // String | Deleted query can be TRUE, FALSE or ALL
  'localeCode': "localeCode_example" // String | The locale code to fetch for each presence definition. Use ALL to fetch everything.
};
apiInstance.getPresencedefinitions(opts)
  .then(function(data) {
    console.log(`getPresencedefinitions success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch(function(err) {
  	console.log('There was a failure calling getPresencedefinitions');
    console.error(err);
  });

~~~

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **pageNumber** | **Number** | Page number | [optional] [default to 1] |
 **pageSize** | **Number** | Page size | [optional] [default to 25] |
 **deleted** | **String** | Deleted query can be TRUE, FALSE or ALL | [optional] [default to false] |
 **localeCode** | **String** | The locale code to fetch for each presence definition. Use ALL to fetch everything. | [optional]  |
{: class="table table-striped"}

### Return type

**OrganizationPresenceEntityListing**

<a name="getSystempresences"></a>

# [SystemPresence] getSystempresences()

GET /api/v2/systempresences

Get the list of SystemPresences



### Example

~~~ javascript
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Configure OAuth2 access token for authorization: PureCloud Auth
platformClient.ApiClient.instance.authentications['PureCloud Auth'].accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new platformClient.PresenceApi();
apiInstance.getSystempresences()
  .then(function(data) {
    console.log(`getSystempresences success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch(function(err) {
  	console.log('There was a failure calling getSystempresences');
    console.error(err);
  });

~~~

### Parameters

This endpoint does not need any parameter.
{: class="table table-striped"}

### Return type

**[SystemPresence]**

<a name="getUserPresence"></a>

# UserPresence getUserPresence(userId, sourceId)

GET /api/v2/users/{userId}/presences/{sourceId}

Get a user&#39;s Presence



### Example

~~~ javascript
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Configure OAuth2 access token for authorization: PureCloud Auth
platformClient.ApiClient.instance.authentications['PureCloud Auth'].accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new platformClient.PresenceApi();

var userId = "userId_example"; // String | user Id

var sourceId = "sourceId_example"; // String | Source

apiInstance.getUserPresence(userId, sourceId)
  .then(function(data) {
    console.log(`getUserPresence success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch(function(err) {
  	console.log('There was a failure calling getUserPresence');
    console.error(err);
  });

~~~

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **userId** | **String** | user Id |  |
 **sourceId** | **String** | Source |  |
{: class="table table-striped"}

### Return type

**UserPresence**

<a name="patchUserPresence"></a>

# UserPresence patchUserPresence(userId, sourceId, body)

PATCH /api/v2/users/{userId}/presences/{sourceId}

Patch a user&#39;s Presence

The presence object can be patched one of three ways. Option 1: Set the &#39;primary&#39; property to true. This will set the &#39;source&#39; defined in the path as the user&#39;s primary presence source. Option 2: Provide the presenceDefinition value. The &#39;id&#39; is the only value required within the presenceDefinition. Option 3: Provide the message value. Option 1 can be combined with Option 2 and/or Option 3.

### Example

~~~ javascript
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Configure OAuth2 access token for authorization: PureCloud Auth
platformClient.ApiClient.instance.authentications['PureCloud Auth'].accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new platformClient.PresenceApi();

var userId = "userId_example"; // String | user Id

var sourceId = "sourceId_example"; // String | Source

var body = {}; // Object | User presence

apiInstance.patchUserPresence(userId, sourceId, body)
  .then(function(data) {
    console.log(`patchUserPresence success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch(function(err) {
  	console.log('There was a failure calling patchUserPresence');
    console.error(err);
  });

~~~

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **userId** | **String** | user Id |  |
 **sourceId** | **String** | Source |  |
 **body** | **Object** | User presence |  |
{: class="table table-striped"}

### Return type

**UserPresence**

<a name="postPresencedefinitions"></a>

# OrganizationPresence postPresencedefinitions(body)

POST /api/v2/presencedefinitions

Create a Presence Definition



### Example

~~~ javascript
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Configure OAuth2 access token for authorization: PureCloud Auth
platformClient.ApiClient.instance.authentications['PureCloud Auth'].accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new platformClient.PresenceApi();

var body = {}; // Object | The Presence Definition to create

apiInstance.postPresencedefinitions(body)
  .then(function(data) {
    console.log(`postPresencedefinitions success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch(function(err) {
  	console.log('There was a failure calling postPresencedefinitions');
    console.error(err);
  });

~~~

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **body** | **Object** | The Presence Definition to create |  |
{: class="table table-striped"}

### Return type

**OrganizationPresence**

<a name="putPresencedefinition"></a>

# OrganizationPresence putPresencedefinition(presenceId, body)

PUT /api/v2/presencedefinitions/{presenceId}

Update a Presence Definition



### Example

~~~ javascript
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Configure OAuth2 access token for authorization: PureCloud Auth
platformClient.ApiClient.instance.authentications['PureCloud Auth'].accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new platformClient.PresenceApi();

var presenceId = "presenceId_example"; // String | Organization Presence ID

var body = {}; // Object | The OrganizationPresence to update

apiInstance.putPresencedefinition(presenceId, body)
  .then(function(data) {
    console.log(`putPresencedefinition success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch(function(err) {
  	console.log('There was a failure calling putPresencedefinition');
    console.error(err);
  });

~~~

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **presenceId** | **String** | Organization Presence ID |  |
 **body** | **Object** | The OrganizationPresence to update |  |
{: class="table table-striped"}

### Return type

**OrganizationPresence**

