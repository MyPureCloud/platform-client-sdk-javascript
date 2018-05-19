---
title: GroupsApi
---
# platformClient.GroupsApi

All URIs are relative to *https://api.mypurecloud.com*

| Method | HTTP request | Description |
| ------------- | ------------- | ------------- |
[**deleteGroup**](GroupsApi.html#deleteGroup) | **DELETE** /api/v2/groups/{groupId} | Delete group
[**deleteGroupMembers**](GroupsApi.html#deleteGroupMembers) | **DELETE** /api/v2/groups/{groupId}/members | Remove members
[**getFieldconfig**](GroupsApi.html#getFieldconfig) | **GET** /api/v2/fieldconfig | Fetch field config for an entity type
[**getGroup**](GroupsApi.html#getGroup) | **GET** /api/v2/groups/{groupId} | Get group
[**getGroupIndividuals**](GroupsApi.html#getGroupIndividuals) | **GET** /api/v2/groups/{groupId}/individuals | Get all individuals associated with the group
[**getGroupMembers**](GroupsApi.html#getGroupMembers) | **GET** /api/v2/groups/{groupId}/members | Get group members, includes individuals, owners, and dynamically included people
[**getGroupProfile**](GroupsApi.html#getGroupProfile) | **GET** /api/v2/groups/{groupId}/profile | Get group profile
[**getGroups**](GroupsApi.html#getGroups) | **GET** /api/v2/groups | Get a group list
[**getGroupsSearch**](GroupsApi.html#getGroupsSearch) | **GET** /api/v2/groups/search | Search groups using the q64 value returned from a previous search
[**getProfilesGroups**](GroupsApi.html#getProfilesGroups) | **GET** /api/v2/profiles/groups | Get group profile listing
[**postGroupMembers**](GroupsApi.html#postGroupMembers) | **POST** /api/v2/groups/{groupId}/members | Add members
[**postGroups**](GroupsApi.html#postGroups) | **POST** /api/v2/groups | Create a group
[**postGroupsSearch**](GroupsApi.html#postGroupsSearch) | **POST** /api/v2/groups/search | Search groups
[**putGroup**](GroupsApi.html#putGroup) | **PUT** /api/v2/groups/{groupId} | Update group
{: class="table table-striped"}

<a name="deleteGroup"></a>

# void deleteGroup(groupId)

DELETE /api/v2/groups/{groupId}

Delete group



### Example

~~~ javascript
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Configure OAuth2 access token for authorization: PureCloud Auth
platformClient.ApiClient.instance.authentications['PureCloud Auth'].accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new platformClient.GroupsApi();

var groupId = "groupId_example"; // String | Group ID

apiInstance.deleteGroup(groupId)
  .then(function() {
    console.log('deleteGroup returned successfully.');
  })
  .catch(function(err) {
  	console.log('There was a failure calling deleteGroup');
    console.error(err);
  });

~~~

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **groupId** | **String** | Group ID |  |
{: class="table table-striped"}

### Return type

void (no response body)

<a name="deleteGroupMembers"></a>

# Empty deleteGroupMembers(groupId, ids)

DELETE /api/v2/groups/{groupId}/members

Remove members



### Example

~~~ javascript
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Configure OAuth2 access token for authorization: PureCloud Auth
platformClient.ApiClient.instance.authentications['PureCloud Auth'].accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new platformClient.GroupsApi();

var groupId = "groupId_example"; // String | Group ID

var ids = "ids_example"; // String | Comma separated list of userIds to remove

apiInstance.deleteGroupMembers(groupId, ids)
  .then(function(data) {
    console.log(`deleteGroupMembers success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch(function(err) {
  	console.log('There was a failure calling deleteGroupMembers');
    console.error(err);
  });

~~~

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **groupId** | **String** | Group ID |  |
 **ids** | **String** | Comma separated list of userIds to remove |  |
{: class="table table-striped"}

### Return type

**Empty**

<a name="getFieldconfig"></a>

# FieldConfig getFieldconfig(type)

GET /api/v2/fieldconfig

Fetch field config for an entity type



### Example

~~~ javascript
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Configure OAuth2 access token for authorization: PureCloud Auth
platformClient.ApiClient.instance.authentications['PureCloud Auth'].accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new platformClient.GroupsApi();

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

<a name="getGroup"></a>

# Group getGroup(groupId)

GET /api/v2/groups/{groupId}

Get group



### Example

~~~ javascript
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Configure OAuth2 access token for authorization: PureCloud Auth
platformClient.ApiClient.instance.authentications['PureCloud Auth'].accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new platformClient.GroupsApi();

var groupId = "groupId_example"; // String | Group ID

apiInstance.getGroup(groupId)
  .then(function(data) {
    console.log(`getGroup success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch(function(err) {
  	console.log('There was a failure calling getGroup');
    console.error(err);
  });

~~~

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **groupId** | **String** | Group ID |  |
{: class="table table-striped"}

### Return type

**Group**

<a name="getGroupIndividuals"></a>

# UserEntityListing getGroupIndividuals(groupId)

GET /api/v2/groups/{groupId}/individuals

Get all individuals associated with the group



### Example

~~~ javascript
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Configure OAuth2 access token for authorization: PureCloud Auth
platformClient.ApiClient.instance.authentications['PureCloud Auth'].accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new platformClient.GroupsApi();

var groupId = "groupId_example"; // String | Group ID

apiInstance.getGroupIndividuals(groupId)
  .then(function(data) {
    console.log(`getGroupIndividuals success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch(function(err) {
  	console.log('There was a failure calling getGroupIndividuals');
    console.error(err);
  });

~~~

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **groupId** | **String** | Group ID |  |
{: class="table table-striped"}

### Return type

**UserEntityListing**

<a name="getGroupMembers"></a>

# UserEntityListing getGroupMembers(groupId, opts)

GET /api/v2/groups/{groupId}/members

Get group members, includes individuals, owners, and dynamically included people



### Example

~~~ javascript
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Configure OAuth2 access token for authorization: PureCloud Auth
platformClient.ApiClient.instance.authentications['PureCloud Auth'].accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new platformClient.GroupsApi();

var groupId = "groupId_example"; // String | Group ID

var opts = { 
  'pageSize': 25, // Number | Page size
  'pageNumber': 1, // Number | Page number
  'sortOrder': "ASC", // String | Ascending or descending sort order
  'expand': ["expand_example"] // [String] | Which fields, if any, to expand
};
apiInstance.getGroupMembers(groupId, opts)
  .then(function(data) {
    console.log(`getGroupMembers success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch(function(err) {
  	console.log('There was a failure calling getGroupMembers');
    console.error(err);
  });

~~~

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **groupId** | **String** | Group ID |  |
 **pageSize** | **Number** | Page size | [optional] [default to 25] |
 **pageNumber** | **Number** | Page number | [optional] [default to 1] |
 **sortOrder** | **String** | Ascending or descending sort order | [optional] [default to ASC]<br />**Values**: ascending, descending |
 **expand** | **[String]** | Which fields, if any, to expand | [optional] <br />**Values**: routingStatus, presence, conversationSummary, outOfOffice, geolocation, station, authorization, profileSkills, locations, groups |
{: class="table table-striped"}

### Return type

**UserEntityListing**

<a name="getGroupProfile"></a>

# GroupProfile getGroupProfile(groupId, opts)

GET /api/v2/groups/{groupId}/profile

Get group profile



### Example

~~~ javascript
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Configure OAuth2 access token for authorization: PureCloud Auth
platformClient.ApiClient.instance.authentications['PureCloud Auth'].accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new platformClient.GroupsApi();

var groupId = "groupId_example"; // String | groupId

var opts = { 
  'fields': "fields_example" // String | Comma separated fields to return.  Allowable values can be found by querying /api/v2/fieldconfig?type=group and using the key for the elements returned by the fieldList
};
apiInstance.getGroupProfile(groupId, opts)
  .then(function(data) {
    console.log(`getGroupProfile success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch(function(err) {
  	console.log('There was a failure calling getGroupProfile');
    console.error(err);
  });

~~~

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **groupId** | **String** | groupId |  |
 **fields** | **String** | Comma separated fields to return.  Allowable values can be found by querying /api/v2/fieldconfig?type=group and using the key for the elements returned by the fieldList | [optional]  |
{: class="table table-striped"}

### Return type

**GroupProfile**

<a name="getGroups"></a>

# GroupEntityListing getGroups(opts)

GET /api/v2/groups

Get a group list



### Example

~~~ javascript
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Configure OAuth2 access token for authorization: PureCloud Auth
platformClient.ApiClient.instance.authentications['PureCloud Auth'].accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new platformClient.GroupsApi();

var opts = { 
  'pageSize': 25, // Number | Page size
  'pageNumber': 1, // Number | Page number
  'id': ["id_example"], // [String] | id
  'sortOrder': "ASC" // String | Ascending or descending sort order
};
apiInstance.getGroups(opts)
  .then(function(data) {
    console.log(`getGroups success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch(function(err) {
  	console.log('There was a failure calling getGroups');
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
{: class="table table-striped"}

### Return type

**GroupEntityListing**

<a name="getGroupsSearch"></a>

# GroupsSearchResponse getGroupsSearch(q64, opts)

GET /api/v2/groups/search

Search groups using the q64 value returned from a previous search



### Example

~~~ javascript
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Configure OAuth2 access token for authorization: PureCloud Auth
platformClient.ApiClient.instance.authentications['PureCloud Auth'].accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new platformClient.GroupsApi();

var q64 = "q64_example"; // String | q64

var opts = { 
  'expand': ["expand_example"] // [String] | expand
};
apiInstance.getGroupsSearch(q64, opts)
  .then(function(data) {
    console.log(`getGroupsSearch success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch(function(err) {
  	console.log('There was a failure calling getGroupsSearch');
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

**GroupsSearchResponse**

<a name="getProfilesGroups"></a>

# GroupProfileEntityListing getProfilesGroups(opts)

GET /api/v2/profiles/groups

Get group profile listing



### Example

~~~ javascript
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Configure OAuth2 access token for authorization: PureCloud Auth
platformClient.ApiClient.instance.authentications['PureCloud Auth'].accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new platformClient.GroupsApi();

var opts = { 
  'pageSize': 25, // Number | Page size
  'pageNumber': 1, // Number | Page number
  'id': ["id_example"], // [String] | id
  'sortOrder': "ASC" // String | Ascending or descending sort order
};
apiInstance.getProfilesGroups(opts)
  .then(function(data) {
    console.log(`getProfilesGroups success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch(function(err) {
  	console.log('There was a failure calling getProfilesGroups');
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
{: class="table table-striped"}

### Return type

**GroupProfileEntityListing**

<a name="postGroupMembers"></a>

# Empty postGroupMembers(groupId, body)

POST /api/v2/groups/{groupId}/members

Add members



### Example

~~~ javascript
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Configure OAuth2 access token for authorization: PureCloud Auth
platformClient.ApiClient.instance.authentications['PureCloud Auth'].accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new platformClient.GroupsApi();

var groupId = "groupId_example"; // String | Group ID

var body = {}; // Object | Add members

apiInstance.postGroupMembers(groupId, body)
  .then(function(data) {
    console.log(`postGroupMembers success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch(function(err) {
  	console.log('There was a failure calling postGroupMembers');
    console.error(err);
  });

~~~

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **groupId** | **String** | Group ID |  |
 **body** | **Object** | Add members |  |
{: class="table table-striped"}

### Return type

**Empty**

<a name="postGroups"></a>

# Group postGroups(body)

POST /api/v2/groups

Create a group



### Example

~~~ javascript
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Configure OAuth2 access token for authorization: PureCloud Auth
platformClient.ApiClient.instance.authentications['PureCloud Auth'].accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new platformClient.GroupsApi();

var body = {}; // Object | Group

apiInstance.postGroups(body)
  .then(function(data) {
    console.log(`postGroups success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch(function(err) {
  	console.log('There was a failure calling postGroups');
    console.error(err);
  });

~~~

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **body** | **Object** | Group |  |
{: class="table table-striped"}

### Return type

**Group**

<a name="postGroupsSearch"></a>

# GroupsSearchResponse postGroupsSearch(body)

POST /api/v2/groups/search

Search groups



### Example

~~~ javascript
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Configure OAuth2 access token for authorization: PureCloud Auth
platformClient.ApiClient.instance.authentications['PureCloud Auth'].accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new platformClient.GroupsApi();

var body = {}; // Object | Search request options

apiInstance.postGroupsSearch(body)
  .then(function(data) {
    console.log(`postGroupsSearch success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch(function(err) {
  	console.log('There was a failure calling postGroupsSearch');
    console.error(err);
  });

~~~

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **body** | **Object** | Search request options |  |
{: class="table table-striped"}

### Return type

**GroupsSearchResponse**

<a name="putGroup"></a>

# Group putGroup(groupId, opts)

PUT /api/v2/groups/{groupId}

Update group



### Example

~~~ javascript
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Configure OAuth2 access token for authorization: PureCloud Auth
platformClient.ApiClient.instance.authentications['PureCloud Auth'].accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new platformClient.GroupsApi();

var groupId = "groupId_example"; // String | Group ID

var opts = { 
  'body': {} // Object | Group
};
apiInstance.putGroup(groupId, opts)
  .then(function(data) {
    console.log(`putGroup success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch(function(err) {
  	console.log('There was a failure calling putGroup');
    console.error(err);
  });

~~~

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **groupId** | **String** | Group ID |  |
 **body** | **Object** | Group | [optional]  |
{: class="table table-striped"}

### Return type

**Group**

