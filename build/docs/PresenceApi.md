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

# null deletePresencedefinition(presenceId)

DELETE /api/v2/presencedefinitions/{presenceId}

Delete a Presence Definition



### Example

~~~ javascript
const platformClient = require('purecloud-platform-client-v2');

// Configure OAuth2 access token for authorization: PureCloud Auth
platformClient.ApiClient.instance.authentications['PureCloud Auth'].accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new platformClient.PresenceApi();

var presenceId = "presenceId_example"; // String | Organization Presence ID

apiInstance.deletePresencedefinition(presenceId)
  .then(function() {
    console.log('deletePresencedefinition returned successfully.');
  })
  .catch(function(error) {
  	console.log('There was a failure calling deletePresencedefinition');
    console.error(error);
  });

~~~

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **presenceId** | **String**| Organization Presence ID |  |
{: class="table table-striped"}

### Return type

null (empty response body)

<a name="getPresencedefinition"></a>

# [**OrganizationPresence**](OrganizationPresence.html) getPresencedefinition(presenceId, opts)

GET /api/v2/presencedefinitions/{presenceId}

Get a Presence Definition



### Example

~~~ javascript
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
  .catch(function(error) {
  	console.log('There was a failure calling getPresencedefinition');
    console.error(error);
  });

~~~

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **presenceId** | **String**| Organization Presence ID |  |
 **localeCode** | **String**| The locale code to fetch for the presence definition. Use ALL to fetch everything. | [optional]  |
{: class="table table-striped"}

### Return type

[**OrganizationPresence**](OrganizationPresence.html)

<a name="getPresencedefinitions"></a>

# [**OrganizationPresenceEntityListing**](OrganizationPresenceEntityListing.html) getPresencedefinitions(opts)

GET /api/v2/presencedefinitions

Get an Organization&#39;s list of Presence Definitions



### Example

~~~ javascript
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
  .catch(function(error) {
  	console.log('There was a failure calling getPresencedefinitions');
    console.error(error);
  });

~~~

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **pageNumber** | **Number**| Page number | [optional] [default to 1] |
 **pageSize** | **Number**| Page size | [optional] [default to 25] |
 **deleted** | **String**| Deleted query can be TRUE, FALSE or ALL | [optional] [default to false] |
 **localeCode** | **String**| The locale code to fetch for each presence definition. Use ALL to fetch everything. | [optional]  |
{: class="table table-striped"}

### Return type

[**OrganizationPresenceEntityListing**](OrganizationPresenceEntityListing.html)

<a name="getSystempresences"></a>

# [**[SystemPresence]**](SystemPresence.html) getSystempresences()

GET /api/v2/systempresences

Get the list of SystemPresences



### Example

~~~ javascript
const platformClient = require('purecloud-platform-client-v2');

// Configure OAuth2 access token for authorization: PureCloud Auth
platformClient.ApiClient.instance.authentications['PureCloud Auth'].accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new platformClient.PresenceApi();
apiInstance.getSystempresences()
  .then(function(data) {
    console.log(`getSystempresences success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch(function(error) {
  	console.log('There was a failure calling getSystempresences');
    console.error(error);
  });

~~~

### Parameters

This endpoint does not need any parameter.
{: class="table table-striped"}

### Return type

[**[SystemPresence]**](SystemPresence.html)

<a name="getUserPresence"></a>

# [**UserPresence**](UserPresence.html) getUserPresence(userId, sourceId)

GET /api/v2/users/{userId}/presences/{sourceId}

Get a user&#39;s Presence



### Example

~~~ javascript
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
  .catch(function(error) {
  	console.log('There was a failure calling getUserPresence');
    console.error(error);
  });

~~~

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **userId** | **String**| user Id |  |
 **sourceId** | **String**| Source |  |
{: class="table table-striped"}

### Return type

[**UserPresence**](UserPresence.html)

<a name="patchUserPresence"></a>

# [**UserPresence**](UserPresence.html) patchUserPresence(userId, sourceId, body)

PATCH /api/v2/users/{userId}/presences/{sourceId}

Patch a user&#39;s Presence

The presence object can be patched one of three ways. Option 1: Set the &#39;primary&#39; property to true. This will set the &#39;source&#39; defined in the path as the user&#39;s primary presence source. Option 2: Provide the presenceDefinition value. The &#39;id&#39; is the only value required within the presenceDefinition. Option 3: Provide the message value. Option 1 can be combined with Option 2 and/or Option 3.

### Example

~~~ javascript
const platformClient = require('purecloud-platform-client-v2');

// Configure OAuth2 access token for authorization: PureCloud Auth
platformClient.ApiClient.instance.authentications['PureCloud Auth'].accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new platformClient.PresenceApi();

var userId = "userId_example"; // String | user Id

var sourceId = "sourceId_example"; // String | Source

var body = new platformClient.UserPresence(); // UserPresence | User presence

apiInstance.patchUserPresence(userId, sourceId, body)
  .then(function(data) {
    console.log(`patchUserPresence success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch(function(error) {
  	console.log('There was a failure calling patchUserPresence');
    console.error(error);
  });

~~~

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **userId** | **String**| user Id |  |
 **sourceId** | **String**| Source |  |
 **body** | [**UserPresence**](UserPresence.html)| User presence |  |
{: class="table table-striped"}

### Return type

[**UserPresence**](UserPresence.html)

<a name="postPresencedefinitions"></a>

# [**OrganizationPresence**](OrganizationPresence.html) postPresencedefinitions(body)

POST /api/v2/presencedefinitions

Create a Presence Definition



### Example

~~~ javascript
const platformClient = require('purecloud-platform-client-v2');

// Configure OAuth2 access token for authorization: PureCloud Auth
platformClient.ApiClient.instance.authentications['PureCloud Auth'].accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new platformClient.PresenceApi();

var body = new platformClient.OrganizationPresence(); // OrganizationPresence | The Presence Definition to create

apiInstance.postPresencedefinitions(body)
  .then(function(data) {
    console.log(`postPresencedefinitions success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch(function(error) {
  	console.log('There was a failure calling postPresencedefinitions');
    console.error(error);
  });

~~~

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **body** | [**OrganizationPresence**](OrganizationPresence.html)| The Presence Definition to create |  |
{: class="table table-striped"}

### Return type

[**OrganizationPresence**](OrganizationPresence.html)

<a name="putPresencedefinition"></a>

# [**OrganizationPresence**](OrganizationPresence.html) putPresencedefinition(presenceId, body)

PUT /api/v2/presencedefinitions/{presenceId}

Update a Presence Definition



### Example

~~~ javascript
const platformClient = require('purecloud-platform-client-v2');

// Configure OAuth2 access token for authorization: PureCloud Auth
platformClient.ApiClient.instance.authentications['PureCloud Auth'].accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new platformClient.PresenceApi();

var presenceId = "presenceId_example"; // String | Organization Presence ID

var body = new platformClient.OrganizationPresence(); // OrganizationPresence | The OrganizationPresence to update

apiInstance.putPresencedefinition(presenceId, body)
  .then(function(data) {
    console.log(`putPresencedefinition success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch(function(error) {
  	console.log('There was a failure calling putPresencedefinition');
    console.error(error);
  });

~~~

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **presenceId** | **String**| Organization Presence ID |  |
 **body** | [**OrganizationPresence**](OrganizationPresence.html)| The OrganizationPresence to update |  |
{: class="table table-striped"}

### Return type

[**OrganizationPresence**](OrganizationPresence.html)

