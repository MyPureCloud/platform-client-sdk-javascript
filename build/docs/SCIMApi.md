---
title: SCIMApi
---
# platformClient.SCIMApi

All URIs are relative to *https://api.mypurecloud.com*

| Method | HTTP request | Description |
| ------------- | ------------- | ------------- |
[**deleteScimGroup**](SCIMApi.html#deleteScimGroup) | **DELETE** /api/v2/scim/groups/{groupId} | Delete a group.
[**deleteScimUser**](SCIMApi.html#deleteScimUser) | **DELETE** /api/v2/scim/users/{userId} | Delete a user
[**deleteScimV2Group**](SCIMApi.html#deleteScimV2Group) | **DELETE** /api/v2/scim/v2/groups/{groupId} | Delete a group.
[**deleteScimV2User**](SCIMApi.html#deleteScimV2User) | **DELETE** /api/v2/scim/v2/users/{userId} | Delete a user
[**getScimGroup**](SCIMApi.html#getScimGroup) | **GET** /api/v2/scim/groups/{groupId} | Get a group
[**getScimGroups**](SCIMApi.html#getScimGroups) | **GET** /api/v2/scim/groups | Get a list of groups
[**getScimResourcetype**](SCIMApi.html#getScimResourcetype) | **GET** /api/v2/scim/resourcetypes/{resourceType} | Get a resource type
[**getScimResourcetypes**](SCIMApi.html#getScimResourcetypes) | **GET** /api/v2/scim/resourcetypes | Get a list of resource types
[**getScimServiceproviderconfig**](SCIMApi.html#getScimServiceproviderconfig) | **GET** /api/v2/scim/serviceproviderconfig | Get a service provider&#39;s configuration
[**getScimUser**](SCIMApi.html#getScimUser) | **GET** /api/v2/scim/users/{userId} | Get a user
[**getScimUsers**](SCIMApi.html#getScimUsers) | **GET** /api/v2/scim/users | Get a list of users
[**getScimV2Group**](SCIMApi.html#getScimV2Group) | **GET** /api/v2/scim/v2/groups/{groupId} | Get a group
[**getScimV2Groups**](SCIMApi.html#getScimV2Groups) | **GET** /api/v2/scim/v2/groups | Get a list of groups
[**getScimV2Resourcetype**](SCIMApi.html#getScimV2Resourcetype) | **GET** /api/v2/scim/v2/resourcetypes/{resourceType} | Get a resource type
[**getScimV2Resourcetypes**](SCIMApi.html#getScimV2Resourcetypes) | **GET** /api/v2/scim/v2/resourcetypes | Get a list of resource types
[**getScimV2Serviceproviderconfig**](SCIMApi.html#getScimV2Serviceproviderconfig) | **GET** /api/v2/scim/v2/serviceproviderconfig | Get a service provider&#39;s configuration
[**getScimV2User**](SCIMApi.html#getScimV2User) | **GET** /api/v2/scim/v2/users/{userId} | Get a user
[**getScimV2Users**](SCIMApi.html#getScimV2Users) | **GET** /api/v2/scim/v2/users | Get a list of users
[**patchScimGroup**](SCIMApi.html#patchScimGroup) | **PATCH** /api/v2/scim/groups/{groupId} | Modify a group
[**patchScimUser**](SCIMApi.html#patchScimUser) | **PATCH** /api/v2/scim/users/{userId} | Modify a user
[**patchScimV2Group**](SCIMApi.html#patchScimV2Group) | **PATCH** /api/v2/scim/v2/groups/{groupId} | Modify a group
[**patchScimV2User**](SCIMApi.html#patchScimV2User) | **PATCH** /api/v2/scim/v2/users/{userId} | Modify a user
[**postScimGroups**](SCIMApi.html#postScimGroups) | **POST** /api/v2/scim/groups | The information used to create a group.
[**postScimUsers**](SCIMApi.html#postScimUsers) | **POST** /api/v2/scim/users | Create a user
[**postScimV2Groups**](SCIMApi.html#postScimV2Groups) | **POST** /api/v2/scim/v2/groups | The information used to create a group.
[**postScimV2Users**](SCIMApi.html#postScimV2Users) | **POST** /api/v2/scim/v2/users | Create a user
[**putScimGroup**](SCIMApi.html#putScimGroup) | **PUT** /api/v2/scim/groups/{groupId} | Replace a group
[**putScimUser**](SCIMApi.html#putScimUser) | **PUT** /api/v2/scim/users/{userId} | Replace a user
[**putScimV2Group**](SCIMApi.html#putScimV2Group) | **PUT** /api/v2/scim/v2/groups/{groupId} | Replace a group
[**putScimV2User**](SCIMApi.html#putScimV2User) | **PUT** /api/v2/scim/v2/users/{userId} | Replace a user
{: class="table table-striped"}

<a name="deleteScimGroup"></a>

# void deleteScimGroup(groupId, opts)



DELETE /api/v2/scim/groups/{groupId}

Delete a group.



Requires ANY permissions: 

* directory:group:edit



### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.SCIMApi();

let groupId = "groupId_example"; // String | The ID of a group. Returned with GET /api/v2/scim/v2/groups.
let opts = { 
  'ifMatch': "ifMatch_example" // String | The ETag of a resource in double quotes. Returned as header and meta.version with initial call to GET /api/v2/scim/v2/groups/{groupId}. Example: \"42\". If the ETag is different from the version on the server, returns 400 with a \"scimType\" of \"invalidVers\".
};

apiInstance.deleteScimGroup(groupId, opts)
  .then(() => {
    console.log('deleteScimGroup returned successfully.');
  })
  .catch((err) => {
    console.log('There was a failure calling deleteScimGroup');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **groupId** | **String** | The ID of a group. Returned with GET /api/v2/scim/v2/groups. |  |
 **ifMatch** | **String** | The ETag of a resource in double quotes. Returned as header and meta.version with initial call to GET /api/v2/scim/v2/groups/{groupId}. Example: \&quot;42\&quot;. If the ETag is different from the version on the server, returns 400 with a \&quot;scimType\&quot; of \&quot;invalidVers\&quot;. | [optional]  |
{: class="table table-striped"}

### Return type

void (no response body)

<a name="deleteScimUser"></a>

# Empty deleteScimUser(userId, opts)



DELETE /api/v2/scim/users/{userId}

Delete a user



Requires ANY permissions: 

* directory:user:delete



### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.SCIMApi();

let userId = "userId_example"; // String | The ID of a user. Returned with GET /api/v2/scim/users.
let opts = { 
  'ifMatch': "ifMatch_example" // String | The ETag of a resource in double quotes. Returned as header and meta.version with initial call to GET /api/v2/scim/users/{userId}. Example: \"42\". If the ETag is different from the version on the server, returns 400 with a \"scimType\" of \"invalidVers\".
};

apiInstance.deleteScimUser(userId, opts)
  .then((data) => {
    console.log(`deleteScimUser success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling deleteScimUser');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **userId** | **String** | The ID of a user. Returned with GET /api/v2/scim/users. |  |
 **ifMatch** | **String** | The ETag of a resource in double quotes. Returned as header and meta.version with initial call to GET /api/v2/scim/users/{userId}. Example: \&quot;42\&quot;. If the ETag is different from the version on the server, returns 400 with a \&quot;scimType\&quot; of \&quot;invalidVers\&quot;. | [optional]  |
{: class="table table-striped"}

### Return type

**Empty**

<a name="deleteScimV2Group"></a>

# void deleteScimV2Group(groupId, opts)



DELETE /api/v2/scim/v2/groups/{groupId}

Delete a group.



Requires ANY permissions: 

* directory:group:edit



### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.SCIMApi();

let groupId = "groupId_example"; // String | The ID of a group. Returned with GET /api/v2/scim/v2/groups.
let opts = { 
  'ifMatch': "ifMatch_example" // String | The ETag of a resource in double quotes. Returned as header and meta.version with initial call to GET /api/v2/scim/v2/groups/{groupId}. Example: \"42\". If the ETag is different from the version on the server, returns 400 with a \"scimType\" of \"invalidVers\".
};

apiInstance.deleteScimV2Group(groupId, opts)
  .then(() => {
    console.log('deleteScimV2Group returned successfully.');
  })
  .catch((err) => {
    console.log('There was a failure calling deleteScimV2Group');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **groupId** | **String** | The ID of a group. Returned with GET /api/v2/scim/v2/groups. |  |
 **ifMatch** | **String** | The ETag of a resource in double quotes. Returned as header and meta.version with initial call to GET /api/v2/scim/v2/groups/{groupId}. Example: \&quot;42\&quot;. If the ETag is different from the version on the server, returns 400 with a \&quot;scimType\&quot; of \&quot;invalidVers\&quot;. | [optional]  |
{: class="table table-striped"}

### Return type

void (no response body)

<a name="deleteScimV2User"></a>

# Empty deleteScimV2User(userId, opts)



DELETE /api/v2/scim/v2/users/{userId}

Delete a user



Requires ANY permissions: 

* directory:user:delete



### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.SCIMApi();

let userId = "userId_example"; // String | The ID of a user. Returned with GET /api/v2/scim/v2/users.
let opts = { 
  'ifMatch': "ifMatch_example" // String | The ETag of a resource in double quotes. Returned as header and meta.version with initial call to GET /api/v2/scim/v2/users/{userId}. Example: \"42\". If the ETag is different from the version on the server, returns 400 with a \"scimType\" of \"invalidVers\".
};

apiInstance.deleteScimV2User(userId, opts)
  .then((data) => {
    console.log(`deleteScimV2User success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling deleteScimV2User');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **userId** | **String** | The ID of a user. Returned with GET /api/v2/scim/v2/users. |  |
 **ifMatch** | **String** | The ETag of a resource in double quotes. Returned as header and meta.version with initial call to GET /api/v2/scim/v2/users/{userId}. Example: \&quot;42\&quot;. If the ETag is different from the version on the server, returns 400 with a \&quot;scimType\&quot; of \&quot;invalidVers\&quot;. | [optional]  |
{: class="table table-striped"}

### Return type

**Empty**

<a name="getScimGroup"></a>

# ScimV2Group getScimGroup(groupId, opts)



GET /api/v2/scim/groups/{groupId}

Get a group



Requires ANY permissions: 

* directory:group:edit



### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.SCIMApi();

let groupId = "groupId_example"; // String | The ID of a group. Returned with GET /api/v2/scim/groups.
let opts = { 
  'ifNoneMatch': "ifNoneMatch_example" // String | The ETag of a resource in double quotes. Returned as header and meta.version with initial call to GET /api/v2/scim/groups/{groupId}. Example: \"42\". If the ETag is different from the version on the server, returns the current configuration of the resource. If the ETag is current, returns 304 Not Modified.
};

apiInstance.getScimGroup(groupId, opts)
  .then((data) => {
    console.log(`getScimGroup success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getScimGroup');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **groupId** | **String** | The ID of a group. Returned with GET /api/v2/scim/groups. |  |
 **ifNoneMatch** | **String** | The ETag of a resource in double quotes. Returned as header and meta.version with initial call to GET /api/v2/scim/groups/{groupId}. Example: \&quot;42\&quot;. If the ETag is different from the version on the server, returns the current configuration of the resource. If the ETag is current, returns 304 Not Modified. | [optional]  |
{: class="table table-striped"}

### Return type

**ScimV2Group**

<a name="getScimGroups"></a>

# ScimGroupListResponse getScimGroups(opts)



GET /api/v2/scim/groups

Get a list of groups



Requires ANY permissions: 

* directory:group:edit



### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.SCIMApi();

let opts = { 
  'startIndex': 1, // Number | The 1-based index of the first query result.
  'count': 25, // Number | The requested number of items per page. A value of 0 returns \"totalResults\".
  'filter': "displayName eq groupName" // String | Filters results.
};

apiInstance.getScimGroups(opts)
  .then((data) => {
    console.log(`getScimGroups success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getScimGroups');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **startIndex** | **Number** | The 1-based index of the first query result. | [optional] [default to 1] |
 **count** | **Number** | The requested number of items per page. A value of 0 returns \&quot;totalResults\&quot;. | [optional] [default to 25] |
 **filter** | **String** | Filters results. | [optional]  |
{: class="table table-striped"}

### Return type

**ScimGroupListResponse**

<a name="getScimResourcetype"></a>

# ScimConfigResourceType getScimResourcetype(resourceType)



GET /api/v2/scim/resourcetypes/{resourceType}

Get a resource type



Requires NO permissions: 




### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

let apiInstance = new platformClient.SCIMApi();

let resourceType = "resourceType_example"; // String | The type of resource. Returned with GET /api/v2/scim/resourcetypes.

apiInstance.getScimResourcetype(resourceType)
  .then((data) => {
    console.log(`getScimResourcetype success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getScimResourcetype');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **resourceType** | **String** | The type of resource. Returned with GET /api/v2/scim/resourcetypes. | <br />**Values**: User, Group, ServiceProviderConfig, ResourceType |
{: class="table table-striped"}

### Return type

**ScimConfigResourceType**

<a name="getScimResourcetypes"></a>

# ScimConfigResourceTypesListResponse getScimResourcetypes()



GET /api/v2/scim/resourcetypes

Get a list of resource types



Requires NO permissions: 




### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

let apiInstance = new platformClient.SCIMApi();

apiInstance.getScimResourcetypes()
  .then((data) => {
    console.log(`getScimResourcetypes success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getScimResourcetypes');
    console.error(err);
  });
```

### Parameters

This endpoint does not need any parameter.
{: class="table table-striped"}

### Return type

**ScimConfigResourceTypesListResponse**

<a name="getScimServiceproviderconfig"></a>

# ScimServiceProviderConfig getScimServiceproviderconfig(opts)



GET /api/v2/scim/serviceproviderconfig

Get a service provider&#39;s configuration



Requires NO permissions: 




### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

let apiInstance = new platformClient.SCIMApi();

let opts = { 
  'ifNoneMatch': "ifNoneMatch_example" // String | The ETag of a resource in double quotes. Returned as header and meta.version with initial call to GET /api/v2/scim/serviceproviderconfig. Example: \"42\". If the ETag is different from the version on the server, returns the current configuration of the resource. If the ETag is current, returns 304 Not Modified. 
};

apiInstance.getScimServiceproviderconfig(opts)
  .then((data) => {
    console.log(`getScimServiceproviderconfig success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getScimServiceproviderconfig');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **ifNoneMatch** | **String** | The ETag of a resource in double quotes. Returned as header and meta.version with initial call to GET /api/v2/scim/serviceproviderconfig. Example: \&quot;42\&quot;. If the ETag is different from the version on the server, returns the current configuration of the resource. If the ETag is current, returns 304 Not Modified.  | [optional]  |
{: class="table table-striped"}

### Return type

**ScimServiceProviderConfig**

<a name="getScimUser"></a>

# ScimV2User getScimUser(userId, opts)



GET /api/v2/scim/users/{userId}

Get a user



Requires NO permissions: 




### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.SCIMApi();

let userId = "userId_example"; // String | The ID of a user. Returned with GET /api/v2/scim/users.
let opts = { 
  'attributes': ["attributes_example"], // [String] | Indicates which attributes to include. Returns these attributes and the default attributes (externalId, enterprise-user:manager, roles). Use \"attributes\" to avoid expensive secondary calls for the default attributes.
  'excludedAttributes': ["excludedAttributes_example"], // [String] | Indicates which attributes to exclude. Returns the default attributes (externalId, enterprise-user:manager, roles) minus \"excludedAttributes\". Use \"excludedAttributes\" to avoid expensive secondary calls for the default attributes.
  'ifNoneMatch': "ifNoneMatch_example" // String | TThe ETag of a resource in double quotes. Returned as header and meta.version with initial call to GET /api/v2/scim/users/{userId}. Example: \"42\". If the ETag is different from the version on the server, returns the current configuration of the resource. If the ETag is current, returns 304 Not Modified.
};

apiInstance.getScimUser(userId, opts)
  .then((data) => {
    console.log(`getScimUser success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getScimUser');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **userId** | **String** | The ID of a user. Returned with GET /api/v2/scim/users. |  |
 **attributes** | **[String]** | Indicates which attributes to include. Returns these attributes and the default attributes (externalId, enterprise-user:manager, roles). Use \&quot;attributes\&quot; to avoid expensive secondary calls for the default attributes. | [optional] <br />**Values**: id, userName, displayName, title, active, externalId, phoneNumbers, emails, photos, groups, rolesurn:ietf:params:scim:schemas:core:2.0:User:id, urn:ietf:params:scim:schemas:core:2.0:User:userName, urn:ietf:params:scim:schemas:core:2.0:User:displayName, urn:ietf:params:scim:schemas:core:2.0:User:title, urn:ietf:params:scim:schemas:core:2.0:User:active, urn:ietf:params:scim:schemas:core:2.0:User:externalId, urn:ietf:params:scim:schemas:core:2.0:User:phoneNumbers, urn:ietf:params:scim:schemas:core:2.0:User:emails, urn:ietf:params:scim:schemas:core:2.0:User:photos, urn:ietf:params:scim:schemas:core:2.0:User:groups, urn:ietf:params:scim:schemas:core:2.0:User:roles, urn:ietf:params:scim:schemas:extension:enterprise:2.0:User, urn:ietf:params:scim:schemas:extension:enterprise:2.0:User:division, urn:ietf:params:scim:schemas:extension:enterprise:2.0:User:department, urn:ietf:params:scim:schemas:extension:enterprise:2.0:User:manager, urn:ietf:params:scim:schemas:extension:enterprise:2.0:User:manager.value |
 **excludedAttributes** | **[String]** | Indicates which attributes to exclude. Returns the default attributes (externalId, enterprise-user:manager, roles) minus \&quot;excludedAttributes\&quot;. Use \&quot;excludedAttributes\&quot; to avoid expensive secondary calls for the default attributes. | [optional] <br />**Values**: id, userName, displayName, title, active, externalId, phoneNumbers, emails, photos, groups, rolesurn:ietf:params:scim:schemas:core:2.0:User:id, urn:ietf:params:scim:schemas:core:2.0:User:userName, urn:ietf:params:scim:schemas:core:2.0:User:displayName, urn:ietf:params:scim:schemas:core:2.0:User:title, urn:ietf:params:scim:schemas:core:2.0:User:active, urn:ietf:params:scim:schemas:core:2.0:User:externalId, urn:ietf:params:scim:schemas:core:2.0:User:phoneNumbers, urn:ietf:params:scim:schemas:core:2.0:User:emails, urn:ietf:params:scim:schemas:core:2.0:User:photos, urn:ietf:params:scim:schemas:core:2.0:User:groups, urn:ietf:params:scim:schemas:core:2.0:User:roles, urn:ietf:params:scim:schemas:extension:enterprise:2.0:User, urn:ietf:params:scim:schemas:extension:enterprise:2.0:User:division, urn:ietf:params:scim:schemas:extension:enterprise:2.0:User:department, urn:ietf:params:scim:schemas:extension:enterprise:2.0:User:manager, urn:ietf:params:scim:schemas:extension:enterprise:2.0:User:manager.value |
 **ifNoneMatch** | **String** | TThe ETag of a resource in double quotes. Returned as header and meta.version with initial call to GET /api/v2/scim/users/{userId}. Example: \&quot;42\&quot;. If the ETag is different from the version on the server, returns the current configuration of the resource. If the ETag is current, returns 304 Not Modified. | [optional]  |
{: class="table table-striped"}

### Return type

**ScimV2User**

<a name="getScimUsers"></a>

# ScimUserListResponse getScimUsers(opts)



GET /api/v2/scim/users

Get a list of users

To return all active users, do not use a filter parameter. To return inactive users, set \&quot;filter\&quot; to \&quot;active eq false\&quot;. By default, returns SCIM attributes externalId, enterprise-user:manager, and roles. To exclude these attributes, set \&quot;attributes\&quot; to \&quot;id,active\&quot; or \&quot;excludeAttributes\&quot; to \&quot;externalId,roles,urn:ietf:params:scim:schemas:extension:enterprise:2.0:User:division\&quot;.

Requires NO permissions: 




### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.SCIMApi();

let opts = { 
  'startIndex': 1, // Number | The 1-based index of the first query result.
  'count': 25, // Number | The requested number of items per page. A value of 0 returns \"totalResults\".
  'attributes': ["attributes_example"], // [String] | Indicates which attributes to include. Returns these attributes and the default attributes (externalId, enterprise-user:manager, roles). Use \"attributes\" to avoid expensive secondary calls for the default attributes.
  'excludedAttributes': ["excludedAttributes_example"], // [String] | Indicates which attributes to exclude. Returns the default attributes (externalId, enterprise-user:manager, roles) minus \"excludedAttributes\". Use \"excludedAttributes\" to avoid expensive secondary calls for the default attributes.
  'filter': "filter_example" // String | Filters results. If nothing is specified, returns all active users. Examples of valid values: \"id eq 857449b0-d9e7-4cd0-acbf-a6adfb9ef1e9\", \"userName eq search@sample.org\", \"manager eq 16e10e2f-1136-43fe-bb84-eac073168a49\", \"email eq search@sample.org\", \"division eq divisionName\", \"externalId eq 167844\", \"active eq false\".
};

apiInstance.getScimUsers(opts)
  .then((data) => {
    console.log(`getScimUsers success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getScimUsers');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **startIndex** | **Number** | The 1-based index of the first query result. | [optional] [default to 1] |
 **count** | **Number** | The requested number of items per page. A value of 0 returns \&quot;totalResults\&quot;. | [optional] [default to 25] |
 **attributes** | **[String]** | Indicates which attributes to include. Returns these attributes and the default attributes (externalId, enterprise-user:manager, roles). Use \&quot;attributes\&quot; to avoid expensive secondary calls for the default attributes. | [optional] <br />**Values**: id, userName, displayName, title, active, externalId, phoneNumbers, emails, photos, groups, rolesurn:ietf:params:scim:schemas:core:2.0:User:id, urn:ietf:params:scim:schemas:core:2.0:User:userName, urn:ietf:params:scim:schemas:core:2.0:User:displayName, urn:ietf:params:scim:schemas:core:2.0:User:title, urn:ietf:params:scim:schemas:core:2.0:User:active, urn:ietf:params:scim:schemas:core:2.0:User:externalId, urn:ietf:params:scim:schemas:core:2.0:User:phoneNumbers, urn:ietf:params:scim:schemas:core:2.0:User:emails, urn:ietf:params:scim:schemas:core:2.0:User:photos, urn:ietf:params:scim:schemas:core:2.0:User:groups, urn:ietf:params:scim:schemas:core:2.0:User:roles, urn:ietf:params:scim:schemas:extension:enterprise:2.0:User, urn:ietf:params:scim:schemas:extension:enterprise:2.0:User:division, urn:ietf:params:scim:schemas:extension:enterprise:2.0:User:department, urn:ietf:params:scim:schemas:extension:enterprise:2.0:User:manager, urn:ietf:params:scim:schemas:extension:enterprise:2.0:User:manager.value |
 **excludedAttributes** | **[String]** | Indicates which attributes to exclude. Returns the default attributes (externalId, enterprise-user:manager, roles) minus \&quot;excludedAttributes\&quot;. Use \&quot;excludedAttributes\&quot; to avoid expensive secondary calls for the default attributes. | [optional] <br />**Values**: id, userName, displayName, title, active, externalId, phoneNumbers, emails, photos, groups, rolesurn:ietf:params:scim:schemas:core:2.0:User:id, urn:ietf:params:scim:schemas:core:2.0:User:userName, urn:ietf:params:scim:schemas:core:2.0:User:displayName, urn:ietf:params:scim:schemas:core:2.0:User:title, urn:ietf:params:scim:schemas:core:2.0:User:active, urn:ietf:params:scim:schemas:core:2.0:User:externalId, urn:ietf:params:scim:schemas:core:2.0:User:phoneNumbers, urn:ietf:params:scim:schemas:core:2.0:User:emails, urn:ietf:params:scim:schemas:core:2.0:User:photos, urn:ietf:params:scim:schemas:core:2.0:User:groups, urn:ietf:params:scim:schemas:core:2.0:User:roles, urn:ietf:params:scim:schemas:extension:enterprise:2.0:User, urn:ietf:params:scim:schemas:extension:enterprise:2.0:User:division, urn:ietf:params:scim:schemas:extension:enterprise:2.0:User:department, urn:ietf:params:scim:schemas:extension:enterprise:2.0:User:manager, urn:ietf:params:scim:schemas:extension:enterprise:2.0:User:manager.value |
 **filter** | **String** | Filters results. If nothing is specified, returns all active users. Examples of valid values: \&quot;id eq 857449b0-d9e7-4cd0-acbf-a6adfb9ef1e9\&quot;, \&quot;userName eq search@sample.org\&quot;, \&quot;manager eq 16e10e2f-1136-43fe-bb84-eac073168a49\&quot;, \&quot;email eq search@sample.org\&quot;, \&quot;division eq divisionName\&quot;, \&quot;externalId eq 167844\&quot;, \&quot;active eq false\&quot;. | [optional]  |
{: class="table table-striped"}

### Return type

**ScimUserListResponse**

<a name="getScimV2Group"></a>

# ScimV2Group getScimV2Group(groupId, opts)



GET /api/v2/scim/v2/groups/{groupId}

Get a group



Requires ANY permissions: 

* directory:group:edit



### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.SCIMApi();

let groupId = "groupId_example"; // String | The ID of a group. Returned with GET /api/v2/scim/v2/groups.
let opts = { 
  'ifNoneMatch': "ifNoneMatch_example" // String | TThe ETag of a resource in double quotes. Returned as header and meta.version with initial call to GET /api/v2/scim/v2/groups/{groupId}. Example: \"42\". If the ETag is different from the version on the server, returns the current configuration of the resource. If the ETag is current, returns 304 Not Modified. 
};

apiInstance.getScimV2Group(groupId, opts)
  .then((data) => {
    console.log(`getScimV2Group success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getScimV2Group');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **groupId** | **String** | The ID of a group. Returned with GET /api/v2/scim/v2/groups. |  |
 **ifNoneMatch** | **String** | TThe ETag of a resource in double quotes. Returned as header and meta.version with initial call to GET /api/v2/scim/v2/groups/{groupId}. Example: \&quot;42\&quot;. If the ETag is different from the version on the server, returns the current configuration of the resource. If the ETag is current, returns 304 Not Modified.  | [optional]  |
{: class="table table-striped"}

### Return type

**ScimV2Group**

<a name="getScimV2Groups"></a>

# ScimGroupListResponse getScimV2Groups(filter, opts)



GET /api/v2/scim/v2/groups

Get a list of groups



Requires ANY permissions: 

* directory:group:edit



### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.SCIMApi();

let filter = "displayName eq groupName"; // String | Filters results.
let opts = { 
  'startIndex': 1, // Number | The 1-based index of the first query result.
  'count': 25 // Number | The requested number of items per page. A value of 0 returns \"totalResults\".
};

apiInstance.getScimV2Groups(filter, opts)
  .then((data) => {
    console.log(`getScimV2Groups success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getScimV2Groups');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **filter** | **String** | Filters results. |  |
 **startIndex** | **Number** | The 1-based index of the first query result. | [optional] [default to 1] |
 **count** | **Number** | The requested number of items per page. A value of 0 returns \&quot;totalResults\&quot;. | [optional] [default to 25] |
{: class="table table-striped"}

### Return type

**ScimGroupListResponse**

<a name="getScimV2Resourcetype"></a>

# ScimConfigResourceType getScimV2Resourcetype(resourceType)



GET /api/v2/scim/v2/resourcetypes/{resourceType}

Get a resource type



Requires NO permissions: 




### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

let apiInstance = new platformClient.SCIMApi();

let resourceType = "resourceType_example"; // String | The type of resource. Returned with GET /api/v2/scim/v2/resourcetypes.

apiInstance.getScimV2Resourcetype(resourceType)
  .then((data) => {
    console.log(`getScimV2Resourcetype success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getScimV2Resourcetype');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **resourceType** | **String** | The type of resource. Returned with GET /api/v2/scim/v2/resourcetypes. | <br />**Values**: User, Group, ServiceProviderConfig, ResourceType |
{: class="table table-striped"}

### Return type

**ScimConfigResourceType**

<a name="getScimV2Resourcetypes"></a>

# ScimConfigResourceTypesListResponse getScimV2Resourcetypes()



GET /api/v2/scim/v2/resourcetypes

Get a list of resource types



Requires NO permissions: 




### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

let apiInstance = new platformClient.SCIMApi();

apiInstance.getScimV2Resourcetypes()
  .then((data) => {
    console.log(`getScimV2Resourcetypes success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getScimV2Resourcetypes');
    console.error(err);
  });
```

### Parameters

This endpoint does not need any parameter.
{: class="table table-striped"}

### Return type

**ScimConfigResourceTypesListResponse**

<a name="getScimV2Serviceproviderconfig"></a>

# ScimServiceProviderConfig getScimV2Serviceproviderconfig(opts)



GET /api/v2/scim/v2/serviceproviderconfig

Get a service provider&#39;s configuration



Requires NO permissions: 




### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

let apiInstance = new platformClient.SCIMApi();

let opts = { 
  'ifNoneMatch': "ifNoneMatch_example" // String | The ETag of a resource in double quotes. Returned as header and meta.version with initial call to GET /api/v2/scim/v2/serviceproviderconfig. Example: \"42\". If the ETag is different from the version on the server, returns the current configuration of the resource. If the ETag is current, returns 304 Not Modified. 
};

apiInstance.getScimV2Serviceproviderconfig(opts)
  .then((data) => {
    console.log(`getScimV2Serviceproviderconfig success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getScimV2Serviceproviderconfig');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **ifNoneMatch** | **String** | The ETag of a resource in double quotes. Returned as header and meta.version with initial call to GET /api/v2/scim/v2/serviceproviderconfig. Example: \&quot;42\&quot;. If the ETag is different from the version on the server, returns the current configuration of the resource. If the ETag is current, returns 304 Not Modified.  | [optional]  |
{: class="table table-striped"}

### Return type

**ScimServiceProviderConfig**

<a name="getScimV2User"></a>

# ScimV2User getScimV2User(userId, opts)



GET /api/v2/scim/v2/users/{userId}

Get a user



Requires NO permissions: 




### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.SCIMApi();

let userId = "userId_example"; // String | The ID of a user. Returned with GET /api/v2/scim/v2/users.
let opts = { 
  'attributes': ["attributes_example"], // [String] | Indicates which attributes to include. Returns these attributes and the default attributes (externalId, enterprise-user:manager, roles). Use \"attributes\" to avoid expensive secondary calls for the default attributes.
  'excludedAttributes': ["excludedAttributes_example"], // [String] | Indicates which attributes to exclude. Returns the default attributes (externalId, enterprise-user:manager, roles) minus \"excludedAttributes\". Use \"excludedAttributes\" to avoid expensive secondary calls for the default attributes.
  'ifNoneMatch': "ifNoneMatch_example" // String | The ETag of a resource in double quotes. Returned as header and meta.version with initial call to GET /api/v2/scim/v2/users/{userId}. Example: \"42\". If the ETag is different from the version on the server, returns the current configuration of the resource. If the ETag is current, returns 304 Not Modified.
};

apiInstance.getScimV2User(userId, opts)
  .then((data) => {
    console.log(`getScimV2User success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getScimV2User');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **userId** | **String** | The ID of a user. Returned with GET /api/v2/scim/v2/users. |  |
 **attributes** | **[String]** | Indicates which attributes to include. Returns these attributes and the default attributes (externalId, enterprise-user:manager, roles). Use \&quot;attributes\&quot; to avoid expensive secondary calls for the default attributes. | [optional] <br />**Values**: id, userName, displayName, title, active, externalId, phoneNumbers, emails, photos, groups, rolesurn:ietf:params:scim:schemas:core:2.0:User:id, urn:ietf:params:scim:schemas:core:2.0:User:userName, urn:ietf:params:scim:schemas:core:2.0:User:displayName, urn:ietf:params:scim:schemas:core:2.0:User:title, urn:ietf:params:scim:schemas:core:2.0:User:active, urn:ietf:params:scim:schemas:core:2.0:User:externalId, urn:ietf:params:scim:schemas:core:2.0:User:phoneNumbers, urn:ietf:params:scim:schemas:core:2.0:User:emails, urn:ietf:params:scim:schemas:core:2.0:User:photos, urn:ietf:params:scim:schemas:core:2.0:User:groups, urn:ietf:params:scim:schemas:core:2.0:User:roles, urn:ietf:params:scim:schemas:extension:enterprise:2.0:User, urn:ietf:params:scim:schemas:extension:enterprise:2.0:User:division, urn:ietf:params:scim:schemas:extension:enterprise:2.0:User:department, urn:ietf:params:scim:schemas:extension:enterprise:2.0:User:manager, urn:ietf:params:scim:schemas:extension:enterprise:2.0:User:manager.value |
 **excludedAttributes** | **[String]** | Indicates which attributes to exclude. Returns the default attributes (externalId, enterprise-user:manager, roles) minus \&quot;excludedAttributes\&quot;. Use \&quot;excludedAttributes\&quot; to avoid expensive secondary calls for the default attributes. | [optional] <br />**Values**: id, userName, displayName, title, active, externalId, phoneNumbers, emails, photos, groups, rolesurn:ietf:params:scim:schemas:core:2.0:User:id, urn:ietf:params:scim:schemas:core:2.0:User:userName, urn:ietf:params:scim:schemas:core:2.0:User:displayName, urn:ietf:params:scim:schemas:core:2.0:User:title, urn:ietf:params:scim:schemas:core:2.0:User:active, urn:ietf:params:scim:schemas:core:2.0:User:externalId, urn:ietf:params:scim:schemas:core:2.0:User:phoneNumbers, urn:ietf:params:scim:schemas:core:2.0:User:emails, urn:ietf:params:scim:schemas:core:2.0:User:photos, urn:ietf:params:scim:schemas:core:2.0:User:groups, urn:ietf:params:scim:schemas:core:2.0:User:roles, urn:ietf:params:scim:schemas:extension:enterprise:2.0:User, urn:ietf:params:scim:schemas:extension:enterprise:2.0:User:division, urn:ietf:params:scim:schemas:extension:enterprise:2.0:User:department, urn:ietf:params:scim:schemas:extension:enterprise:2.0:User:manager, urn:ietf:params:scim:schemas:extension:enterprise:2.0:User:manager.value |
 **ifNoneMatch** | **String** | The ETag of a resource in double quotes. Returned as header and meta.version with initial call to GET /api/v2/scim/v2/users/{userId}. Example: \&quot;42\&quot;. If the ETag is different from the version on the server, returns the current configuration of the resource. If the ETag is current, returns 304 Not Modified. | [optional]  |
{: class="table table-striped"}

### Return type

**ScimV2User**

<a name="getScimV2Users"></a>

# ScimUserListResponse getScimV2Users(opts)



GET /api/v2/scim/v2/users

Get a list of users

To return all active users, do not use a filter parameter. To return inactive users, set \&quot;filter\&quot; to \&quot;active eq false\&quot;. By default, returns SCIM attributes externalId, enterprise-user:manager, and roles. To exclude these attributes, set \&quot;attributes\&quot; to \&quot;id,active\&quot; or \&quot;excludeAttributes\&quot; to \&quot;externalId,roles,urn:ietf:params:scim:schemas:extension:enterprise:2.0:User:division\&quot;.

Requires NO permissions: 




### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.SCIMApi();

let opts = { 
  'startIndex': 1, // Number | The 1-based index of the first query result.
  'count': 25, // Number | The requested number of items per page. A value of 0 returns \"totalResults\".
  'attributes': ["attributes_example"], // [String] | Indicates which attributes to include. Returns these attributes and the default attributes (externalId, enterprise-user:manager, roles). Use \"attributes\" to avoid expensive secondary calls for the default attributes.
  'excludedAttributes': ["excludedAttributes_example"], // [String] | Indicates which attributes to exclude. Returns the default attributes (externalId, enterprise-user:manager, roles) minus \"excludedAttributes\". Use \"excludedAttributes\" to avoid expensive secondary calls for the default attributes.
  'filter': "filter_example" // String | Filters results. If nothing is specified, returns all active users. Examples of valid values: \"id eq 857449b0-d9e7-4cd0-acbf-a6adfb9ef1e9\", \"userName eq search@sample.org\", \"manager eq 16e10e2f-1136-43fe-bb84-eac073168a49\", \"email eq search@sample.org\", \"division eq divisionName\", \"externalId eq 167844\", \"active eq false\".
};

apiInstance.getScimV2Users(opts)
  .then((data) => {
    console.log(`getScimV2Users success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getScimV2Users');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **startIndex** | **Number** | The 1-based index of the first query result. | [optional] [default to 1] |
 **count** | **Number** | The requested number of items per page. A value of 0 returns \&quot;totalResults\&quot;. | [optional] [default to 25] |
 **attributes** | **[String]** | Indicates which attributes to include. Returns these attributes and the default attributes (externalId, enterprise-user:manager, roles). Use \&quot;attributes\&quot; to avoid expensive secondary calls for the default attributes. | [optional] <br />**Values**: id, userName, displayName, title, active, externalId, phoneNumbers, emails, photos, groups, rolesurn:ietf:params:scim:schemas:core:2.0:User:id, urn:ietf:params:scim:schemas:core:2.0:User:userName, urn:ietf:params:scim:schemas:core:2.0:User:displayName, urn:ietf:params:scim:schemas:core:2.0:User:title, urn:ietf:params:scim:schemas:core:2.0:User:active, urn:ietf:params:scim:schemas:core:2.0:User:externalId, urn:ietf:params:scim:schemas:core:2.0:User:phoneNumbers, urn:ietf:params:scim:schemas:core:2.0:User:emails, urn:ietf:params:scim:schemas:core:2.0:User:photos, urn:ietf:params:scim:schemas:core:2.0:User:groups, urn:ietf:params:scim:schemas:core:2.0:User:roles, urn:ietf:params:scim:schemas:extension:enterprise:2.0:User, urn:ietf:params:scim:schemas:extension:enterprise:2.0:User:division, urn:ietf:params:scim:schemas:extension:enterprise:2.0:User:department, urn:ietf:params:scim:schemas:extension:enterprise:2.0:User:manager, urn:ietf:params:scim:schemas:extension:enterprise:2.0:User:manager.value |
 **excludedAttributes** | **[String]** | Indicates which attributes to exclude. Returns the default attributes (externalId, enterprise-user:manager, roles) minus \&quot;excludedAttributes\&quot;. Use \&quot;excludedAttributes\&quot; to avoid expensive secondary calls for the default attributes. | [optional] <br />**Values**: id, userName, displayName, title, active, externalId, phoneNumbers, emails, photos, groups, rolesurn:ietf:params:scim:schemas:core:2.0:User:id, urn:ietf:params:scim:schemas:core:2.0:User:userName, urn:ietf:params:scim:schemas:core:2.0:User:displayName, urn:ietf:params:scim:schemas:core:2.0:User:title, urn:ietf:params:scim:schemas:core:2.0:User:active, urn:ietf:params:scim:schemas:core:2.0:User:externalId, urn:ietf:params:scim:schemas:core:2.0:User:phoneNumbers, urn:ietf:params:scim:schemas:core:2.0:User:emails, urn:ietf:params:scim:schemas:core:2.0:User:photos, urn:ietf:params:scim:schemas:core:2.0:User:groups, urn:ietf:params:scim:schemas:core:2.0:User:roles, urn:ietf:params:scim:schemas:extension:enterprise:2.0:User, urn:ietf:params:scim:schemas:extension:enterprise:2.0:User:division, urn:ietf:params:scim:schemas:extension:enterprise:2.0:User:department, urn:ietf:params:scim:schemas:extension:enterprise:2.0:User:manager, urn:ietf:params:scim:schemas:extension:enterprise:2.0:User:manager.value |
 **filter** | **String** | Filters results. If nothing is specified, returns all active users. Examples of valid values: \&quot;id eq 857449b0-d9e7-4cd0-acbf-a6adfb9ef1e9\&quot;, \&quot;userName eq search@sample.org\&quot;, \&quot;manager eq 16e10e2f-1136-43fe-bb84-eac073168a49\&quot;, \&quot;email eq search@sample.org\&quot;, \&quot;division eq divisionName\&quot;, \&quot;externalId eq 167844\&quot;, \&quot;active eq false\&quot;. | [optional]  |
{: class="table table-striped"}

### Return type

**ScimUserListResponse**

<a name="patchScimGroup"></a>

# ScimV2Group patchScimGroup(groupId, body, opts)



PATCH /api/v2/scim/groups/{groupId}

Modify a group



Requires ANY permissions: 

* directory:group:edit


### Request Body Schema

<script type="text/javascript">
	function copyScimV2PatchRequestExample() {
		let temp = $("<textarea>");
		$("body").append(temp);
		temp.val($('#ScimV2PatchRequestExample').text()).select();
		document.execCommand("copy");
		temp.remove();
		return false;
	}
</script>

ScimV2PatchRequest <a href="#" onclick="return copyScimV2PatchRequestExample()">Copy</a>

<div id="ScimV2PatchRequestExample">

```{"language":"json", "maxHeight": "250px"}
{ 
  "schemas": [String], 
  "Operations": { 
    "op": String, 
    "path": String, 
    "value": { 
      "nodeType": String, 
      "float": Boolean, 
      "number": Boolean, 
      "boolean": Boolean, 
      "object": Boolean, 
      "valueNode": Boolean, 
      "containerNode": Boolean, 
      "missingNode": Boolean, 
      "integralNumber": Boolean, 
      "floatingPointNumber": Boolean, 
      "short": Boolean, 
      "int": Boolean, 
      "long": Boolean, 
      "double": Boolean, 
      "bigDecimal": Boolean, 
      "bigInteger": Boolean, 
      "textual": Boolean, 
      "binary": Boolean, 
      "pojo": Boolean, 
      "array": Boolean, 
      "null": Boolean, 
    },  
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

let apiInstance = new platformClient.SCIMApi();

let groupId = "groupId_example"; // String | The ID of a group. Returned with GET /api/v2/scim/groups.
let body = {}; // Object | The information used to modify a group.
let opts = { 
  'ifMatch': "ifMatch_example" // String | The ETag of a resource in double quotes. Returned as header and meta.version with initial call to GET /api/v2/scim/groups/{groupId}. Example: \"42\". If the ETag is different from the version on the server, returns 400 with a \"scimType\" of \"invalidVers\".
};

apiInstance.patchScimGroup(groupId, body, opts)
  .then((data) => {
    console.log(`patchScimGroup success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling patchScimGroup');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **groupId** | **String** | The ID of a group. Returned with GET /api/v2/scim/groups. |  |
 **body** | **Object** | The information used to modify a group. |  |
 **ifMatch** | **String** | The ETag of a resource in double quotes. Returned as header and meta.version with initial call to GET /api/v2/scim/groups/{groupId}. Example: \&quot;42\&quot;. If the ETag is different from the version on the server, returns 400 with a \&quot;scimType\&quot; of \&quot;invalidVers\&quot;. | [optional]  |
{: class="table table-striped"}

### Return type

**ScimV2Group**

<a name="patchScimUser"></a>

# ScimV2User patchScimUser(userId, body, opts)



PATCH /api/v2/scim/users/{userId}

Modify a user



Requires ANY permissions: 

* directory:user:edit
* directory:user:setPassword


### Request Body Schema

<script type="text/javascript">
	function copyScimV2PatchRequestExample() {
		let temp = $("<textarea>");
		$("body").append(temp);
		temp.val($('#ScimV2PatchRequestExample').text()).select();
		document.execCommand("copy");
		temp.remove();
		return false;
	}
</script>

ScimV2PatchRequest <a href="#" onclick="return copyScimV2PatchRequestExample()">Copy</a>

<div id="ScimV2PatchRequestExample">

```{"language":"json", "maxHeight": "250px"}
{ 
  "schemas": [String], 
  "Operations": { 
    "op": String, 
    "path": String, 
    "value": { 
      "nodeType": String, 
      "float": Boolean, 
      "number": Boolean, 
      "boolean": Boolean, 
      "object": Boolean, 
      "valueNode": Boolean, 
      "containerNode": Boolean, 
      "missingNode": Boolean, 
      "integralNumber": Boolean, 
      "floatingPointNumber": Boolean, 
      "short": Boolean, 
      "int": Boolean, 
      "long": Boolean, 
      "double": Boolean, 
      "bigDecimal": Boolean, 
      "bigInteger": Boolean, 
      "textual": Boolean, 
      "binary": Boolean, 
      "pojo": Boolean, 
      "array": Boolean, 
      "null": Boolean, 
    },  
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

let apiInstance = new platformClient.SCIMApi();

let userId = "userId_example"; // String | The ID of a user. Returned with GET /api/v2/scim/users.
let body = {}; // Object | The information used to modify a user.
let opts = { 
  'ifMatch': "ifMatch_example" // String | The ETag of a resource in double quotes. Returned as header and meta.version with initial call to GET /api/v2/scim/users/{userId}. Example: \"42\". If the ETag is different from the version on the server, returns 400 with a \"scimType\" of \"invalidVers\".
};

apiInstance.patchScimUser(userId, body, opts)
  .then((data) => {
    console.log(`patchScimUser success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling patchScimUser');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **userId** | **String** | The ID of a user. Returned with GET /api/v2/scim/users. |  |
 **body** | **Object** | The information used to modify a user. |  |
 **ifMatch** | **String** | The ETag of a resource in double quotes. Returned as header and meta.version with initial call to GET /api/v2/scim/users/{userId}. Example: \&quot;42\&quot;. If the ETag is different from the version on the server, returns 400 with a \&quot;scimType\&quot; of \&quot;invalidVers\&quot;. | [optional]  |
{: class="table table-striped"}

### Return type

**ScimV2User**

<a name="patchScimV2Group"></a>

# ScimV2Group patchScimV2Group(groupId, body, opts)



PATCH /api/v2/scim/v2/groups/{groupId}

Modify a group



Requires ANY permissions: 

* directory:group:edit


### Request Body Schema

<script type="text/javascript">
	function copyScimV2PatchRequestExample() {
		let temp = $("<textarea>");
		$("body").append(temp);
		temp.val($('#ScimV2PatchRequestExample').text()).select();
		document.execCommand("copy");
		temp.remove();
		return false;
	}
</script>

ScimV2PatchRequest <a href="#" onclick="return copyScimV2PatchRequestExample()">Copy</a>

<div id="ScimV2PatchRequestExample">

```{"language":"json", "maxHeight": "250px"}
{ 
  "schemas": [String], 
  "Operations": { 
    "op": String, 
    "path": String, 
    "value": { 
      "nodeType": String, 
      "float": Boolean, 
      "number": Boolean, 
      "boolean": Boolean, 
      "object": Boolean, 
      "valueNode": Boolean, 
      "containerNode": Boolean, 
      "missingNode": Boolean, 
      "integralNumber": Boolean, 
      "floatingPointNumber": Boolean, 
      "short": Boolean, 
      "int": Boolean, 
      "long": Boolean, 
      "double": Boolean, 
      "bigDecimal": Boolean, 
      "bigInteger": Boolean, 
      "textual": Boolean, 
      "binary": Boolean, 
      "pojo": Boolean, 
      "array": Boolean, 
      "null": Boolean, 
    },  
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

let apiInstance = new platformClient.SCIMApi();

let groupId = "groupId_example"; // String | The ID of a group. Returned with GET /api/v2/scim/v2/groups.
let body = {}; // Object | The information used to modify a group.
let opts = { 
  'ifMatch': "ifMatch_example" // String | The ETag of a resource in double quotes. Returned as header and meta.version with initial call to GET /api/v2/scim/v2/groups/{groupId}. Example: \"42\". If the ETag is different from the version on the server, returns 400 with a \"scimType\" of \"invalidVers\".
};

apiInstance.patchScimV2Group(groupId, body, opts)
  .then((data) => {
    console.log(`patchScimV2Group success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling patchScimV2Group');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **groupId** | **String** | The ID of a group. Returned with GET /api/v2/scim/v2/groups. |  |
 **body** | **Object** | The information used to modify a group. |  |
 **ifMatch** | **String** | The ETag of a resource in double quotes. Returned as header and meta.version with initial call to GET /api/v2/scim/v2/groups/{groupId}. Example: \&quot;42\&quot;. If the ETag is different from the version on the server, returns 400 with a \&quot;scimType\&quot; of \&quot;invalidVers\&quot;. | [optional]  |
{: class="table table-striped"}

### Return type

**ScimV2Group**

<a name="patchScimV2User"></a>

# ScimV2User patchScimV2User(userId, body, opts)



PATCH /api/v2/scim/v2/users/{userId}

Modify a user



Requires ANY permissions: 

* directory:user:edit
* directory:user:setPassword


### Request Body Schema

<script type="text/javascript">
	function copyScimV2PatchRequestExample() {
		let temp = $("<textarea>");
		$("body").append(temp);
		temp.val($('#ScimV2PatchRequestExample').text()).select();
		document.execCommand("copy");
		temp.remove();
		return false;
	}
</script>

ScimV2PatchRequest <a href="#" onclick="return copyScimV2PatchRequestExample()">Copy</a>

<div id="ScimV2PatchRequestExample">

```{"language":"json", "maxHeight": "250px"}
{ 
  "schemas": [String], 
  "Operations": { 
    "op": String, 
    "path": String, 
    "value": { 
      "nodeType": String, 
      "float": Boolean, 
      "number": Boolean, 
      "boolean": Boolean, 
      "object": Boolean, 
      "valueNode": Boolean, 
      "containerNode": Boolean, 
      "missingNode": Boolean, 
      "integralNumber": Boolean, 
      "floatingPointNumber": Boolean, 
      "short": Boolean, 
      "int": Boolean, 
      "long": Boolean, 
      "double": Boolean, 
      "bigDecimal": Boolean, 
      "bigInteger": Boolean, 
      "textual": Boolean, 
      "binary": Boolean, 
      "pojo": Boolean, 
      "array": Boolean, 
      "null": Boolean, 
    },  
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

let apiInstance = new platformClient.SCIMApi();

let userId = "userId_example"; // String | The ID of a user. Returned with GET /api/v2/scim/v2/users.
let body = {}; // Object | The information used to modify a user.
let opts = { 
  'ifMatch': "ifMatch_example" // String | The ETag of a resource in double quotes. Returned as header and meta.version with initial call to GET /api/v2/scim/v2/users/{userId}. Example: \"42\". If the ETag is different from the version on the server, returns 400 with a \"scimType\" of \"invalidVers\".
};

apiInstance.patchScimV2User(userId, body, opts)
  .then((data) => {
    console.log(`patchScimV2User success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling patchScimV2User');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **userId** | **String** | The ID of a user. Returned with GET /api/v2/scim/v2/users. |  |
 **body** | **Object** | The information used to modify a user. |  |
 **ifMatch** | **String** | The ETag of a resource in double quotes. Returned as header and meta.version with initial call to GET /api/v2/scim/v2/users/{userId}. Example: \&quot;42\&quot;. If the ETag is different from the version on the server, returns 400 with a \&quot;scimType\&quot; of \&quot;invalidVers\&quot;. | [optional]  |
{: class="table table-striped"}

### Return type

**ScimV2User**

<a name="postScimGroups"></a>

# ScimV2Group postScimGroups(body)



POST /api/v2/scim/groups

The information used to create a group.

PureCloud group will be created as \&quot;Official\&quot; group with visibility set \&quot;Public\&quot;, and rules visibility True. Will auto-create an external ID if one is not provided on create. External ID is used to determine if delete should be allowed.

Requires ANY permissions: 

* directory:group:edit


### Request Body Schema

<script type="text/javascript">
	function copyScimV2GroupExample() {
		let temp = $("<textarea>");
		$("body").append(temp);
		temp.val($('#ScimV2GroupExample').text()).select();
		document.execCommand("copy");
		temp.remove();
		return false;
	}
</script>

ScimV2Group <a href="#" onclick="return copyScimV2GroupExample()">Copy</a>

<div id="ScimV2GroupExample">

```{"language":"json", "maxHeight": "250px"}
{ 
  "id": String, 
  "schemas": [String], 
  "displayName": String, 
  "externalId": String, 
  "members": { 
    "type": String, 
    "value": String, 
    "$ref": String, 
  },  
  "meta": { 
    "resourceType": String, 
    "lastModified": Date, 
    "location": String, 
    "version": String, 
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

let apiInstance = new platformClient.SCIMApi();

let body = {}; // Object | The information used to create a group.

apiInstance.postScimGroups(body)
  .then((data) => {
    console.log(`postScimGroups success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling postScimGroups');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **body** | **Object** | The information used to create a group. |  |
{: class="table table-striped"}

### Return type

**ScimV2Group**

<a name="postScimUsers"></a>

# ScimV2User postScimUsers(body)



POST /api/v2/scim/users

Create a user



Requires ANY permissions: 

* directory:user:add


### Request Body Schema

<script type="text/javascript">
	function copyScimV2CreateUserExample() {
		let temp = $("<textarea>");
		$("body").append(temp);
		temp.val($('#ScimV2CreateUserExample').text()).select();
		document.execCommand("copy");
		temp.remove();
		return false;
	}
</script>

ScimV2CreateUser <a href="#" onclick="return copyScimV2CreateUserExample()">Copy</a>

<div id="ScimV2CreateUserExample">

```{"language":"json", "maxHeight": "250px"}
{ 
  "schemas": [String], 
  "active": Boolean, 
  "userName": String, 
  "displayName": String, 
  "password": String, 
  "title": String, 
  "phoneNumbers": { 
    "value": String, 
    "type": String, 
    "primary": Boolean, 
  },  
  "emails": { 
    "value": String, 
    "type": String, 
    "primary": Boolean, 
  },  
  "photos": { 
    "value": String, 
    "type": String, 
  },  
  "externalId": String, 
  "groups": { 
    "type": String, 
    "value": String, 
    "$ref": String, 
  },  
  "roles": [String], 
  "urn:ietf:params:scim:schemas:extension:enterprise:2.0:User": { 
    "division": String, 
    "department": String, 
    "manager": { 
      "value": String, 
      "$ref": String, 
    },  
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

let apiInstance = new platformClient.SCIMApi();

let body = {}; // Object | The information used to create a user.

apiInstance.postScimUsers(body)
  .then((data) => {
    console.log(`postScimUsers success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling postScimUsers');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **body** | **Object** | The information used to create a user. |  |
{: class="table table-striped"}

### Return type

**ScimV2User**

<a name="postScimV2Groups"></a>

# ScimV2Group postScimV2Groups(body)



POST /api/v2/scim/v2/groups

The information used to create a group.

PureCloud group will be created as \&quot;Official\&quot; group with visibility set \&quot;Public\&quot;, and rules visibility True. Will auto-create an external ID if one is not provided on create. External ID is used to determine if delete should be allowed.

Requires ANY permissions: 

* directory:group:edit


### Request Body Schema

<script type="text/javascript">
	function copyScimV2GroupExample() {
		let temp = $("<textarea>");
		$("body").append(temp);
		temp.val($('#ScimV2GroupExample').text()).select();
		document.execCommand("copy");
		temp.remove();
		return false;
	}
</script>

ScimV2Group <a href="#" onclick="return copyScimV2GroupExample()">Copy</a>

<div id="ScimV2GroupExample">

```{"language":"json", "maxHeight": "250px"}
{ 
  "id": String, 
  "schemas": [String], 
  "displayName": String, 
  "externalId": String, 
  "members": { 
    "type": String, 
    "value": String, 
    "$ref": String, 
  },  
  "meta": { 
    "resourceType": String, 
    "lastModified": Date, 
    "location": String, 
    "version": String, 
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

let apiInstance = new platformClient.SCIMApi();

let body = {}; // Object | The information used to create a group.

apiInstance.postScimV2Groups(body)
  .then((data) => {
    console.log(`postScimV2Groups success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling postScimV2Groups');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **body** | **Object** | The information used to create a group. |  |
{: class="table table-striped"}

### Return type

**ScimV2Group**

<a name="postScimV2Users"></a>

# ScimV2User postScimV2Users(body)



POST /api/v2/scim/v2/users

Create a user



Requires ANY permissions: 

* directory:user:add


### Request Body Schema

<script type="text/javascript">
	function copyScimV2CreateUserExample() {
		let temp = $("<textarea>");
		$("body").append(temp);
		temp.val($('#ScimV2CreateUserExample').text()).select();
		document.execCommand("copy");
		temp.remove();
		return false;
	}
</script>

ScimV2CreateUser <a href="#" onclick="return copyScimV2CreateUserExample()">Copy</a>

<div id="ScimV2CreateUserExample">

```{"language":"json", "maxHeight": "250px"}
{ 
  "schemas": [String], 
  "active": Boolean, 
  "userName": String, 
  "displayName": String, 
  "password": String, 
  "title": String, 
  "phoneNumbers": { 
    "value": String, 
    "type": String, 
    "primary": Boolean, 
  },  
  "emails": { 
    "value": String, 
    "type": String, 
    "primary": Boolean, 
  },  
  "photos": { 
    "value": String, 
    "type": String, 
  },  
  "externalId": String, 
  "groups": { 
    "type": String, 
    "value": String, 
    "$ref": String, 
  },  
  "roles": [String], 
  "urn:ietf:params:scim:schemas:extension:enterprise:2.0:User": { 
    "division": String, 
    "department": String, 
    "manager": { 
      "value": String, 
      "$ref": String, 
    },  
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

let apiInstance = new platformClient.SCIMApi();

let body = {}; // Object | The information used to create a user.

apiInstance.postScimV2Users(body)
  .then((data) => {
    console.log(`postScimV2Users success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling postScimV2Users');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **body** | **Object** | The information used to create a user. |  |
{: class="table table-striped"}

### Return type

**ScimV2User**

<a name="putScimGroup"></a>

# ScimV2Group putScimGroup(groupId, body, opts)



PUT /api/v2/scim/groups/{groupId}

Replace a group



Requires ANY permissions: 

* directory:group:edit


### Request Body Schema

<script type="text/javascript">
	function copyScimV2GroupExample() {
		let temp = $("<textarea>");
		$("body").append(temp);
		temp.val($('#ScimV2GroupExample').text()).select();
		document.execCommand("copy");
		temp.remove();
		return false;
	}
</script>

ScimV2Group <a href="#" onclick="return copyScimV2GroupExample()">Copy</a>

<div id="ScimV2GroupExample">

```{"language":"json", "maxHeight": "250px"}
{ 
  "id": String, 
  "schemas": [String], 
  "displayName": String, 
  "externalId": String, 
  "members": { 
    "type": String, 
    "value": String, 
    "$ref": String, 
  },  
  "meta": { 
    "resourceType": String, 
    "lastModified": Date, 
    "location": String, 
    "version": String, 
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

let apiInstance = new platformClient.SCIMApi();

let groupId = "groupId_example"; // String | The ID of a group. Returned with GET /api/v2/scim/groups.
let body = {}; // Object | The information used to replace a group.
let opts = { 
  'ifMatch': "ifMatch_example" // String | The ETag of a resource in double quotes. Returned as header and meta.version with initial call to GET /api/v2/scim/groups/{groupId}. Example: \"42\". If the ETag is different from the version on the server, returns 400 with a \"scimType\" of \"invalidVers\".
};

apiInstance.putScimGroup(groupId, body, opts)
  .then((data) => {
    console.log(`putScimGroup success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling putScimGroup');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **groupId** | **String** | The ID of a group. Returned with GET /api/v2/scim/groups. |  |
 **body** | **Object** | The information used to replace a group. |  |
 **ifMatch** | **String** | The ETag of a resource in double quotes. Returned as header and meta.version with initial call to GET /api/v2/scim/groups/{groupId}. Example: \&quot;42\&quot;. If the ETag is different from the version on the server, returns 400 with a \&quot;scimType\&quot; of \&quot;invalidVers\&quot;. | [optional]  |
{: class="table table-striped"}

### Return type

**ScimV2Group**

<a name="putScimUser"></a>

# ScimV2User putScimUser(userId, body, opts)



PUT /api/v2/scim/users/{userId}

Replace a user



Requires ANY permissions: 

* directory:user:edit
* directory:user:setPassword


### Request Body Schema

<script type="text/javascript">
	function copyScimV2UserExample() {
		let temp = $("<textarea>");
		$("body").append(temp);
		temp.val($('#ScimV2UserExample').text()).select();
		document.execCommand("copy");
		temp.remove();
		return false;
	}
</script>

ScimV2User <a href="#" onclick="return copyScimV2UserExample()">Copy</a>

<div id="ScimV2UserExample">

```{"language":"json", "maxHeight": "250px"}
{ 
  "id": String, 
  "schemas": [String], 
  "active": Boolean, 
  "userName": String, 
  "displayName": String, 
  "password": String, 
  "title": String, 
  "phoneNumbers": { 
    "value": String, 
    "type": String, 
    "primary": Boolean, 
  },  
  "emails": { 
    "value": String, 
    "type": String, 
    "primary": Boolean, 
  },  
  "photos": { 
    "value": String, 
    "type": String, 
  },  
  "externalId": String, 
  "groups": { 
    "type": String, 
    "value": String, 
    "$ref": String, 
  },  
  "roles": [String], 
  "urn:ietf:params:scim:schemas:extension:enterprise:2.0:User": { 
    "division": String, 
    "department": String, 
    "manager": { 
      "value": String, 
      "$ref": String, 
    },  
  },  
  "meta": { 
    "resourceType": String, 
    "lastModified": Date, 
    "location": String, 
    "version": String, 
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

let apiInstance = new platformClient.SCIMApi();

let userId = "userId_example"; // String | The ID of a user. Returned with GET /api/v2/scim/users.
let body = {}; // Object | The information used to replace a user.
let opts = { 
  'ifMatch': "ifMatch_example" // String | The ETag of a resource in double quotes. Returned as header and meta.version with initial call to GET /api/v2/scim/users/{userId}. Example: \"42\". If the ETag is different from the version on the server, returns 400 with a \"scimType\" of \"invalidVers\".
};

apiInstance.putScimUser(userId, body, opts)
  .then((data) => {
    console.log(`putScimUser success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling putScimUser');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **userId** | **String** | The ID of a user. Returned with GET /api/v2/scim/users. |  |
 **body** | **Object** | The information used to replace a user. |  |
 **ifMatch** | **String** | The ETag of a resource in double quotes. Returned as header and meta.version with initial call to GET /api/v2/scim/users/{userId}. Example: \&quot;42\&quot;. If the ETag is different from the version on the server, returns 400 with a \&quot;scimType\&quot; of \&quot;invalidVers\&quot;. | [optional]  |
{: class="table table-striped"}

### Return type

**ScimV2User**

<a name="putScimV2Group"></a>

# ScimV2Group putScimV2Group(groupId, body, opts)



PUT /api/v2/scim/v2/groups/{groupId}

Replace a group



Requires ANY permissions: 

* directory:group:edit


### Request Body Schema

<script type="text/javascript">
	function copyScimV2GroupExample() {
		let temp = $("<textarea>");
		$("body").append(temp);
		temp.val($('#ScimV2GroupExample').text()).select();
		document.execCommand("copy");
		temp.remove();
		return false;
	}
</script>

ScimV2Group <a href="#" onclick="return copyScimV2GroupExample()">Copy</a>

<div id="ScimV2GroupExample">

```{"language":"json", "maxHeight": "250px"}
{ 
  "id": String, 
  "schemas": [String], 
  "displayName": String, 
  "externalId": String, 
  "members": { 
    "type": String, 
    "value": String, 
    "$ref": String, 
  },  
  "meta": { 
    "resourceType": String, 
    "lastModified": Date, 
    "location": String, 
    "version": String, 
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

let apiInstance = new platformClient.SCIMApi();

let groupId = "groupId_example"; // String | The ID of a group. Returned with GET /api/v2/scim/v2/groups.
let body = {}; // Object | The information used to replace a group.
let opts = { 
  'ifMatch': "ifMatch_example" // String | The ETag of a resource in double quotes. Returned as header and meta.version with initial call to GET /api/v2/scim/v2/groups/{groupId}. Example: \"42\". If the ETag is different from the version on the server, returns 400 with a \"scimType\" of \"invalidVers\".
};

apiInstance.putScimV2Group(groupId, body, opts)
  .then((data) => {
    console.log(`putScimV2Group success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling putScimV2Group');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **groupId** | **String** | The ID of a group. Returned with GET /api/v2/scim/v2/groups. |  |
 **body** | **Object** | The information used to replace a group. |  |
 **ifMatch** | **String** | The ETag of a resource in double quotes. Returned as header and meta.version with initial call to GET /api/v2/scim/v2/groups/{groupId}. Example: \&quot;42\&quot;. If the ETag is different from the version on the server, returns 400 with a \&quot;scimType\&quot; of \&quot;invalidVers\&quot;. | [optional]  |
{: class="table table-striped"}

### Return type

**ScimV2Group**

<a name="putScimV2User"></a>

# ScimV2User putScimV2User(userId, body, opts)



PUT /api/v2/scim/v2/users/{userId}

Replace a user



Requires ANY permissions: 

* directory:user:edit
* directory:user:setPassword


### Request Body Schema

<script type="text/javascript">
	function copyScimV2UserExample() {
		let temp = $("<textarea>");
		$("body").append(temp);
		temp.val($('#ScimV2UserExample').text()).select();
		document.execCommand("copy");
		temp.remove();
		return false;
	}
</script>

ScimV2User <a href="#" onclick="return copyScimV2UserExample()">Copy</a>

<div id="ScimV2UserExample">

```{"language":"json", "maxHeight": "250px"}
{ 
  "id": String, 
  "schemas": [String], 
  "active": Boolean, 
  "userName": String, 
  "displayName": String, 
  "password": String, 
  "title": String, 
  "phoneNumbers": { 
    "value": String, 
    "type": String, 
    "primary": Boolean, 
  },  
  "emails": { 
    "value": String, 
    "type": String, 
    "primary": Boolean, 
  },  
  "photos": { 
    "value": String, 
    "type": String, 
  },  
  "externalId": String, 
  "groups": { 
    "type": String, 
    "value": String, 
    "$ref": String, 
  },  
  "roles": [String], 
  "urn:ietf:params:scim:schemas:extension:enterprise:2.0:User": { 
    "division": String, 
    "department": String, 
    "manager": { 
      "value": String, 
      "$ref": String, 
    },  
  },  
  "meta": { 
    "resourceType": String, 
    "lastModified": Date, 
    "location": String, 
    "version": String, 
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

let apiInstance = new platformClient.SCIMApi();

let userId = "userId_example"; // String | The ID of a user. Returned with GET /api/v2/scim/v2/users.
let body = {}; // Object | The information used to replace a user.
let opts = { 
  'ifMatch': "ifMatch_example" // String | The ETag of a resource in double quotes. Returned as header and meta.version with initial call to GET /api/v2/scim/v2/users/{userId}. Example: \"42\". If the ETag is different from the version on the server, returns 400 with a \"scimType\" of \"invalidVers\".
};

apiInstance.putScimV2User(userId, body, opts)
  .then((data) => {
    console.log(`putScimV2User success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling putScimV2User');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **userId** | **String** | The ID of a user. Returned with GET /api/v2/scim/v2/users. |  |
 **body** | **Object** | The information used to replace a user. |  |
 **ifMatch** | **String** | The ETag of a resource in double quotes. Returned as header and meta.version with initial call to GET /api/v2/scim/v2/users/{userId}. Example: \&quot;42\&quot;. If the ETag is different from the version on the server, returns 400 with a \&quot;scimType\&quot; of \&quot;invalidVers\&quot;. | [optional]  |
{: class="table table-striped"}

### Return type

**ScimV2User**

