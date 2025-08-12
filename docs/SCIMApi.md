# SCIMApi

# platformClient.SCIMApi

All URIs are relative to *https://api.mypurecloud.com*

| Method | HTTP request | Description |
| ------------- | ------------- | ------------- |
[**deleteScimUser**](SCIMApi#deleteScimUser) | **DELETE** /api/v2/scim/users/{userId} | Delete a user
[**deleteScimV2User**](SCIMApi#deleteScimV2User) | **DELETE** /api/v2/scim/v2/users/{userId} | Delete a user
[**getScimGroup**](SCIMApi#getScimGroup) | **GET** /api/v2/scim/groups/{groupId} | Get a group
[**getScimGroups**](SCIMApi#getScimGroups) | **GET** /api/v2/scim/groups | Get a list of groups
[**getScimResourcetype**](SCIMApi#getScimResourcetype) | **GET** /api/v2/scim/resourcetypes/{resourceType} | Get a resource type
[**getScimResourcetypes**](SCIMApi#getScimResourcetypes) | **GET** /api/v2/scim/resourcetypes | Get a list of resource types
[**getScimSchema**](SCIMApi#getScimSchema) | **GET** /api/v2/scim/schemas/{schemaId} | Get a SCIM schema
[**getScimSchemas**](SCIMApi#getScimSchemas) | **GET** /api/v2/scim/schemas | Get a list of SCIM schemas
[**getScimServiceproviderconfig**](SCIMApi#getScimServiceproviderconfig) | **GET** /api/v2/scim/serviceproviderconfig | Get a service provider's configuration
[**getScimUser**](SCIMApi#getScimUser) | **GET** /api/v2/scim/users/{userId} | Get a user
[**getScimUsers**](SCIMApi#getScimUsers) | **GET** /api/v2/scim/users | Get a list of users
[**getScimV2Group**](SCIMApi#getScimV2Group) | **GET** /api/v2/scim/v2/groups/{groupId} | Get a group
[**getScimV2Groups**](SCIMApi#getScimV2Groups) | **GET** /api/v2/scim/v2/groups | Get a list of groups
[**getScimV2Resourcetype**](SCIMApi#getScimV2Resourcetype) | **GET** /api/v2/scim/v2/resourcetypes/{resourceType} | Get a resource type
[**getScimV2Resourcetypes**](SCIMApi#getScimV2Resourcetypes) | **GET** /api/v2/scim/v2/resourcetypes | Get a list of resource types
[**getScimV2Schema**](SCIMApi#getScimV2Schema) | **GET** /api/v2/scim/v2/schemas/{schemaId} | Get a SCIM schema
[**getScimV2Schemas**](SCIMApi#getScimV2Schemas) | **GET** /api/v2/scim/v2/schemas | Get a list of SCIM schemas
[**getScimV2Serviceproviderconfig**](SCIMApi#getScimV2Serviceproviderconfig) | **GET** /api/v2/scim/v2/serviceproviderconfig | Get a service provider's configuration
[**getScimV2User**](SCIMApi#getScimV2User) | **GET** /api/v2/scim/v2/users/{userId} | Get a user
[**getScimV2Users**](SCIMApi#getScimV2Users) | **GET** /api/v2/scim/v2/users | Get a list of users
[**patchScimGroup**](SCIMApi#patchScimGroup) | **PATCH** /api/v2/scim/groups/{groupId} | Modify a group
[**patchScimUser**](SCIMApi#patchScimUser) | **PATCH** /api/v2/scim/users/{userId} | Modify a user
[**patchScimV2Group**](SCIMApi#patchScimV2Group) | **PATCH** /api/v2/scim/v2/groups/{groupId} | Modify a group
[**patchScimV2User**](SCIMApi#patchScimV2User) | **PATCH** /api/v2/scim/v2/users/{userId} | Modify a user
[**postScimUsers**](SCIMApi#postScimUsers) | **POST** /api/v2/scim/users | Create a user
[**postScimV2Users**](SCIMApi#postScimV2Users) | **POST** /api/v2/scim/v2/users | Create a user
[**putScimGroup**](SCIMApi#putScimGroup) | **PUT** /api/v2/scim/groups/{groupId} | Replace a group
[**putScimUser**](SCIMApi#putScimUser) | **PUT** /api/v2/scim/users/{userId} | Replace a user
[**putScimV2Group**](SCIMApi#putScimV2Group) | **PUT** /api/v2/scim/v2/groups/{groupId} | Replace a group
[**putScimV2User**](SCIMApi#putScimV2User) | **PUT** /api/v2/scim/v2/users/{userId} | Replace a user



## deleteScimUser

> **Object** deleteScimUser(userId, opts)


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

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.SCIMApi();

let userId = "userId_example"; // String | The ID of a user. Returned with GET /api/v2/scim/users.
let opts = { 
  'ifMatch': "ifMatch_example" // String | The ETag of a resource in double quotes. Returned as header and meta.version with initial call to GET /api/v2/scim/users/{userId}. Example: 42. If the ETag is different from the version on the server, returns 400 with a scimType of invalidVers.
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
 **ifMatch** | **String** | The ETag of a resource in double quotes. Returned as header and meta.version with initial call to GET /api/v2/scim/users/{userId}. Example: 42. If the ETag is different from the version on the server, returns 400 with a scimType of invalidVers. | [optional]  |

### Return type

**Object**


## deleteScimV2User

> **Object** deleteScimV2User(userId, opts)


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

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.SCIMApi();

let userId = "userId_example"; // String | The ID of a user. Returned with GET /api/v2/scim/v2/users.
let opts = { 
  'ifMatch': "ifMatch_example" // String | The ETag of a resource in double quotes. Returned as header and meta.version with initial call to GET /api/v2/scim/v2/users/{userId}. Example: 42. If the ETag is different from the version on the server, returns 400 with a scimType of invalidVers.
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
 **ifMatch** | **String** | The ETag of a resource in double quotes. Returned as header and meta.version with initial call to GET /api/v2/scim/v2/users/{userId}. Example: 42. If the ETag is different from the version on the server, returns 400 with a scimType of invalidVers. | [optional]  |

### Return type

**Object**


## getScimGroup

> ScimV2Group getScimGroup(groupId, opts)


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

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.SCIMApi();

let groupId = "groupId_example"; // String | The ID of a group. Returned with GET /api/v2/scim/groups.
let opts = { 
  'attributes': ["attributes_example"], // [String] | Indicates which attributes to include. Returns these attributes and the id, active, and meta attributes. Use attributes to avoid expensive secondary calls for the default attributes.
  'excludedAttributes': ["excludedAttributes_example"], // [String] | Indicates which attributes to exclude. Returns the default attributes minus excludedAttributes. Always returns id, active, and meta attributes. Use excludedAttributes to avoid expensive secondary calls for the default attributes.
  'ifNoneMatch': "ifNoneMatch_example" // String | The ETag of a resource in double quotes. Returned as header and meta.version with initial call to GET /api/v2/scim/groups/{groupId}. Example: 42. If the ETag is different from the version on the server, returns the current configuration of the resource. If the ETag is current, returns 304 Not Modified.
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
 **attributes** | **[String]** | Indicates which attributes to include. Returns these attributes and the id, active, and meta attributes. Use attributes to avoid expensive secondary calls for the default attributes. | [optional] <br />**Values**: id, displayName, members, externalId, meta, meta.version, meta.lastModified, urn:ietf:params:scim:schemas:core:2.0:Group:id, urn:ietf:params:scim:schemas:core:2.0:Group:meta, urn:ietf:params:scim:schemas:core:2.0:Group:meta.version, urn:ietf:params:scim:schemas:core:2.0:Group:meta.lastModified, urn:ietf:params:scim:schemas:core:2.0:Group:displayName, urn:ietf:params:scim:schemas:core:2.0:Group:members, urn:ietf:params:scim:schemas:core:2.0:Group:externalId |
 **excludedAttributes** | **[String]** | Indicates which attributes to exclude. Returns the default attributes minus excludedAttributes. Always returns id, active, and meta attributes. Use excludedAttributes to avoid expensive secondary calls for the default attributes. | [optional] <br />**Values**: id, displayName, members, externalId, meta, meta.version, meta.lastModified, urn:ietf:params:scim:schemas:core:2.0:Group:id, urn:ietf:params:scim:schemas:core:2.0:Group:meta, urn:ietf:params:scim:schemas:core:2.0:Group:meta.version, urn:ietf:params:scim:schemas:core:2.0:Group:meta.lastModified, urn:ietf:params:scim:schemas:core:2.0:Group:displayName, urn:ietf:params:scim:schemas:core:2.0:Group:members, urn:ietf:params:scim:schemas:core:2.0:Group:externalId |
 **ifNoneMatch** | **String** | The ETag of a resource in double quotes. Returned as header and meta.version with initial call to GET /api/v2/scim/groups/{groupId}. Example: 42. If the ETag is different from the version on the server, returns the current configuration of the resource. If the ETag is current, returns 304 Not Modified. | [optional]  |

### Return type

**ScimV2Group**


## getScimGroups

> ScimGroupListResponse getScimGroups(opts)


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

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.SCIMApi();

let opts = { 
  'startIndex': 1, // Number | The 1-based index of the first query result.
  'count': 25, // Number | The requested number of items per page. A value of 0 returns totalResults. A page size over 25 may exceed internal resource limits and return a 429 error. For a page size over 25, use the excludedAttributes or attributes query parameters to exclude or only include secondary lookup values such as externalId,  roles, urn:ietf:params:scim:schemas:extension:genesys:purecloud:2.0:User:routingLanguages, or urn:ietf:params:scim:schemas:extension:genesys:purecloud:2.0:User:routingSkills.
  'attributes': ["attributes_example"], // [String] | Indicates which attributes to include. Returns these attributes and the id, active, and meta attributes. Use attributes to avoid expensive secondary calls for the default attributes.
  'excludedAttributes': ["excludedAttributes_example"], // [String] | Indicates which attributes to exclude. Returns the default attributes minus excludedAttributes. Always returns id, active, and meta attributes. Use excludedAttributes to avoid expensive secondary calls for the default attributes.
  'filter': displayName eq groupName // String | Filters results. If nothing is specified, returns all groups. Examples of valid values: id eq 5f4bc742-a019-4e38-8e2a-d39d5bc0b0f3, displayname eq Sales.
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
 **count** | **Number** | The requested number of items per page. A value of 0 returns totalResults. A page size over 25 may exceed internal resource limits and return a 429 error. For a page size over 25, use the excludedAttributes or attributes query parameters to exclude or only include secondary lookup values such as externalId,  roles, urn:ietf:params:scim:schemas:extension:genesys:purecloud:2.0:User:routingLanguages, or urn:ietf:params:scim:schemas:extension:genesys:purecloud:2.0:User:routingSkills. | [optional] [default to 25] |
 **attributes** | **[String]** | Indicates which attributes to include. Returns these attributes and the id, active, and meta attributes. Use attributes to avoid expensive secondary calls for the default attributes. | [optional] <br />**Values**: id, displayName, members, externalId, meta, meta.version, meta.lastModified, urn:ietf:params:scim:schemas:core:2.0:Group:id, urn:ietf:params:scim:schemas:core:2.0:Group:meta, urn:ietf:params:scim:schemas:core:2.0:Group:meta.version, urn:ietf:params:scim:schemas:core:2.0:Group:meta.lastModified, urn:ietf:params:scim:schemas:core:2.0:Group:displayName, urn:ietf:params:scim:schemas:core:2.0:Group:members, urn:ietf:params:scim:schemas:core:2.0:Group:externalId |
 **excludedAttributes** | **[String]** | Indicates which attributes to exclude. Returns the default attributes minus excludedAttributes. Always returns id, active, and meta attributes. Use excludedAttributes to avoid expensive secondary calls for the default attributes. | [optional] <br />**Values**: id, displayName, members, externalId, meta, meta.version, meta.lastModified, urn:ietf:params:scim:schemas:core:2.0:Group:id, urn:ietf:params:scim:schemas:core:2.0:Group:meta, urn:ietf:params:scim:schemas:core:2.0:Group:meta.version, urn:ietf:params:scim:schemas:core:2.0:Group:meta.lastModified, urn:ietf:params:scim:schemas:core:2.0:Group:displayName, urn:ietf:params:scim:schemas:core:2.0:Group:members, urn:ietf:params:scim:schemas:core:2.0:Group:externalId |
 **filter** | **String** | Filters results. If nothing is specified, returns all groups. Examples of valid values: id eq 5f4bc742-a019-4e38-8e2a-d39d5bc0b0f3, displayname eq Sales. | [optional]  |

### Return type

**ScimGroupListResponse**


## getScimResourcetype

> ScimConfigResourceType getScimResourcetype(resourceType)


GET /api/v2/scim/resourcetypes/{resourceType}

Get a resource type

Requires NO permissions:

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

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
 **resourceType** | **String** | The type of resource. Returned with GET /api/v2/scim/resourcetypes. | <br />**Values**: User, Group, ServiceProviderConfig, ResourceType, Schema |

### Return type

**ScimConfigResourceType**


## getScimResourcetypes

> ScimConfigResourceTypesListResponse getScimResourcetypes()


GET /api/v2/scim/resourcetypes

Get a list of resource types

Requires NO permissions:

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

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

### Return type

**ScimConfigResourceTypesListResponse**


## getScimSchema

> ScimV2SchemaDefinition getScimSchema(schemaId)


GET /api/v2/scim/schemas/{schemaId}

Get a SCIM schema

Requires NO permissions:

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.SCIMApi();

let schemaId = "schemaId_example"; // String | The ID of a schema. Returned with GET /api/v2/scim/schemas.

apiInstance.getScimSchema(schemaId)
  .then((data) => {
    console.log(`getScimSchema success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getScimSchema');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **schemaId** | **String** | The ID of a schema. Returned with GET /api/v2/scim/schemas. | <br />**Values**: urn:ietf:params:scim:schemas:core:2.0:User, urn:ietf:params:scim:schemas:core:2.0:Group, urn:ietf:params:scim:schemas:core:2.0:ServiceProviderConfig, urn:ietf:params:scim:schemas:core:2.0:ResourceType, urn:ietf:params:scim:schemas:core:2.0:Schema, urn:ietf:params:scim:schemas:extension:enterprise:2.0:User, urn:ietf:params:scim:schemas:extension:genesys:purecloud:2.0:User |

### Return type

**ScimV2SchemaDefinition**


## getScimSchemas

> ScimV2SchemaListResponse getScimSchemas(opts)


GET /api/v2/scim/schemas

Get a list of SCIM schemas

Requires NO permissions:

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.SCIMApi();

let opts = { 
  'filter': displayName eq groupName // String | Filtered results are invalid and return 403 Unauthorized.
};

apiInstance.getScimSchemas(opts)
  .then((data) => {
    console.log(`getScimSchemas success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getScimSchemas');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **filter** | **String** | Filtered results are invalid and return 403 Unauthorized. | [optional]  |

### Return type

**ScimV2SchemaListResponse**


## getScimServiceproviderconfig

> ScimServiceProviderConfig getScimServiceproviderconfig(opts)


GET /api/v2/scim/serviceproviderconfig

Get a service provider's configuration

Requires NO permissions:

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.SCIMApi();

let opts = { 
  'ifNoneMatch': "ifNoneMatch_example" // String | The ETag of a resource in double quotes. Returned as header and meta.version with initial call to GET /api/v2/scim/serviceproviderconfig. Example: 42. If the ETag is different from the version on the server, returns the current configuration of the resource. If the ETag is current, returns 304 Not Modified. 
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
 **ifNoneMatch** | **String** | The ETag of a resource in double quotes. Returned as header and meta.version with initial call to GET /api/v2/scim/serviceproviderconfig. Example: 42. If the ETag is different from the version on the server, returns the current configuration of the resource. If the ETag is current, returns 304 Not Modified.  | [optional]  |

### Return type

**ScimServiceProviderConfig**


## getScimUser

> ScimV2User getScimUser(userId, opts)


GET /api/v2/scim/users/{userId}

Get a user

Requires NO permissions:

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.SCIMApi();

let userId = "userId_example"; // String | The ID of a user. Returned with GET /api/v2/scim/users.
let opts = { 
  'attributes': ["attributes_example"], // [String] | Indicates which attributes to include. Returns these attributes and the id, userName, active, and meta attributes. Use attributes to avoid expensive secondary calls for the default attributes.
  'excludedAttributes': ["excludedAttributes_example"], // [String] | Indicates which attributes to exclude. Returns the default attributes minus excludedAttributes. Always returns the id, userName, active, and meta attributes. Use excludedAttributes to avoid expensive secondary calls for the default attributes.
  'ifNoneMatch': "ifNoneMatch_example" // String | The ETag of a resource in double quotes. Returned as header and meta.version with initial call to GET /api/v2/scim/users/{userId}. Example: 42. If the ETag is different from the version on the server, returns the current configuration of the resource. If the ETag is current, returns 304 Not Modified.
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
 **attributes** | **[String]** | Indicates which attributes to include. Returns these attributes and the id, userName, active, and meta attributes. Use attributes to avoid expensive secondary calls for the default attributes. | [optional] <br />**Values**: id, userName, displayName, title, active, externalId, phoneNumbers, emails, groups, roles, meta, meta.version, meta.lastModified, urn:ietf:params:scim:schemas:core:2.0:User:id, urn:ietf:params:scim:schemas:core:2.0:User:userName, urn:ietf:params:scim:schemas:core:2.0:User:displayName, urn:ietf:params:scim:schemas:core:2.0:User:title, urn:ietf:params:scim:schemas:core:2.0:User:active, urn:ietf:params:scim:schemas:core:2.0:User:externalId, urn:ietf:params:scim:schemas:core:2.0:User:phoneNumbers, urn:ietf:params:scim:schemas:core:2.0:User:emails, urn:ietf:params:scim:schemas:core:2.0:User:groups, urn:ietf:params:scim:schemas:core:2.0:User:roles, urn:ietf:params:scim:schemas:core:2.0:User:meta, urn:ietf:params:scim:schemas:core:2.0:User:meta.version, urn:ietf:params:scim:schemas:core:2.0:User:meta.lastModified, urn:ietf:params:scim:schemas:extension:enterprise:2.0:User, urn:ietf:params:scim:schemas:extension:enterprise:2.0:User:division, urn:ietf:params:scim:schemas:extension:enterprise:2.0:User:department, urn:ietf:params:scim:schemas:extension:enterprise:2.0:User:manager, urn:ietf:params:scim:schemas:extension:enterprise:2.0:User:manager.value, urn:ietf:params:scim:schemas:extension:enterprise:2.0:User:employeeNumber, urn:ietf:params:scim:schemas:extension:enterprise:2.0:User:dateHire, urn:ietf:params:scim:schemas:extension:genesys:purecloud:2.0:User, urn:ietf:params:scim:schemas:extension:genesys:purecloud:2.0:User:routingSkills, urn:ietf:params:scim:schemas:extension:genesys:purecloud:2.0:User:routingLanguages, urn:ietf:params:scim:schemas:extension:genesys:purecloud:2.0:User:externalIds |
 **excludedAttributes** | **[String]** | Indicates which attributes to exclude. Returns the default attributes minus excludedAttributes. Always returns the id, userName, active, and meta attributes. Use excludedAttributes to avoid expensive secondary calls for the default attributes. | [optional] <br />**Values**: id, userName, displayName, title, active, externalId, phoneNumbers, emails, groups, roles, meta, meta.version, meta.lastModified, urn:ietf:params:scim:schemas:core:2.0:User:id, urn:ietf:params:scim:schemas:core:2.0:User:userName, urn:ietf:params:scim:schemas:core:2.0:User:displayName, urn:ietf:params:scim:schemas:core:2.0:User:title, urn:ietf:params:scim:schemas:core:2.0:User:active, urn:ietf:params:scim:schemas:core:2.0:User:externalId, urn:ietf:params:scim:schemas:core:2.0:User:phoneNumbers, urn:ietf:params:scim:schemas:core:2.0:User:emails, urn:ietf:params:scim:schemas:core:2.0:User:groups, urn:ietf:params:scim:schemas:core:2.0:User:roles, urn:ietf:params:scim:schemas:core:2.0:User:meta, urn:ietf:params:scim:schemas:core:2.0:User:meta.version, urn:ietf:params:scim:schemas:core:2.0:User:meta.lastModified, urn:ietf:params:scim:schemas:extension:enterprise:2.0:User, urn:ietf:params:scim:schemas:extension:enterprise:2.0:User:division, urn:ietf:params:scim:schemas:extension:enterprise:2.0:User:department, urn:ietf:params:scim:schemas:extension:enterprise:2.0:User:manager, urn:ietf:params:scim:schemas:extension:enterprise:2.0:User:manager.value, urn:ietf:params:scim:schemas:extension:enterprise:2.0:User:employeeNumber, urn:ietf:params:scim:schemas:extension:enterprise:2.0:User:dateHire, urn:ietf:params:scim:schemas:extension:genesys:purecloud:2.0:User, urn:ietf:params:scim:schemas:extension:genesys:purecloud:2.0:User:routingSkills, urn:ietf:params:scim:schemas:extension:genesys:purecloud:2.0:User:routingLanguages, urn:ietf:params:scim:schemas:extension:genesys:purecloud:2.0:User:externalIds |
 **ifNoneMatch** | **String** | The ETag of a resource in double quotes. Returned as header and meta.version with initial call to GET /api/v2/scim/users/{userId}. Example: 42. If the ETag is different from the version on the server, returns the current configuration of the resource. If the ETag is current, returns 304 Not Modified. | [optional]  |

### Return type

**ScimV2User**


## getScimUsers

> ScimUserListResponse getScimUsers(opts)


GET /api/v2/scim/users

Get a list of users

To return all active users, do not use the filter parameter. To return inactive users, set the filter parameter to "active eq false". By default, returns SCIM attributes "externalId", "enterprise-user:manager", and "roles". To exclude these attributes, set the attributes parameter to "id,active" or the excludeAttributes parameter to "externalId,roles,urn:ietf:params:scim:schemas:extension:enterprise:2.0:User:division".

Requires NO permissions:

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.SCIMApi();

let opts = { 
  'startIndex': 1, // Number | The 1-based index of the first query result.
  'count': 25, // Number | The requested number of items per page. A value of 0 returns totalResults. A page size over 25 may exceed internal resource limits and return a 429 error. For a page size over 25, use the excludedAttributes or attributes query parameters to exclude or only include secondary lookup values such as externalId,  roles, urn:ietf:params:scim:schemas:extension:genesys:purecloud:2.0:User:routingLanguages, or urn:ietf:params:scim:schemas:extension:genesys:purecloud:2.0:User:routingSkills.
  'attributes': ["attributes_example"], // [String] | Indicates which attributes to include. Returns these attributes and the id, userName, active, and meta attributes. Use attributes to avoid expensive secondary calls for the default attributes.
  'excludedAttributes': ["excludedAttributes_example"], // [String] | Indicates which attributes to exclude. Returns the default attributes minus excludedAttributes. Always returns the id, userName, active, and meta attributes. Use excludedAttributes to avoid expensive secondary calls for the default attributes.
  'filter': "filter_example" // String | Filters results. If nothing is specified, returns all active users. Examples of valid values: id eq 857449b0-d9e7-4cd0-acbf-a6adfb9ef1e9, userName eq search@sample.org, manager eq 16e10e2f-1136-43fe-bb84-eac073168a49, email eq search@sample.org, division eq divisionName, externalId eq 167844, active eq false, employeeNumber eq 9876543210.
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
 **count** | **Number** | The requested number of items per page. A value of 0 returns totalResults. A page size over 25 may exceed internal resource limits and return a 429 error. For a page size over 25, use the excludedAttributes or attributes query parameters to exclude or only include secondary lookup values such as externalId,  roles, urn:ietf:params:scim:schemas:extension:genesys:purecloud:2.0:User:routingLanguages, or urn:ietf:params:scim:schemas:extension:genesys:purecloud:2.0:User:routingSkills. | [optional] [default to 25] |
 **attributes** | **[String]** | Indicates which attributes to include. Returns these attributes and the id, userName, active, and meta attributes. Use attributes to avoid expensive secondary calls for the default attributes. | [optional] <br />**Values**: id, userName, displayName, title, active, externalId, phoneNumbers, emails, groups, roles, meta, meta.version, meta.lastModified, urn:ietf:params:scim:schemas:core:2.0:User:id, urn:ietf:params:scim:schemas:core:2.0:User:userName, urn:ietf:params:scim:schemas:core:2.0:User:displayName, urn:ietf:params:scim:schemas:core:2.0:User:title, urn:ietf:params:scim:schemas:core:2.0:User:active, urn:ietf:params:scim:schemas:core:2.0:User:externalId, urn:ietf:params:scim:schemas:core:2.0:User:phoneNumbers, urn:ietf:params:scim:schemas:core:2.0:User:emails, urn:ietf:params:scim:schemas:core:2.0:User:groups, urn:ietf:params:scim:schemas:core:2.0:User:roles, urn:ietf:params:scim:schemas:core:2.0:User:meta, urn:ietf:params:scim:schemas:core:2.0:User:meta.version, urn:ietf:params:scim:schemas:core:2.0:User:meta.lastModified, urn:ietf:params:scim:schemas:extension:enterprise:2.0:User, urn:ietf:params:scim:schemas:extension:enterprise:2.0:User:division, urn:ietf:params:scim:schemas:extension:enterprise:2.0:User:department, urn:ietf:params:scim:schemas:extension:enterprise:2.0:User:manager, urn:ietf:params:scim:schemas:extension:enterprise:2.0:User:manager.value, urn:ietf:params:scim:schemas:extension:enterprise:2.0:User:employeeNumber, urn:ietf:params:scim:schemas:extension:enterprise:2.0:User:dateHire, urn:ietf:params:scim:schemas:extension:genesys:purecloud:2.0:User, urn:ietf:params:scim:schemas:extension:genesys:purecloud:2.0:User:routingSkills, urn:ietf:params:scim:schemas:extension:genesys:purecloud:2.0:User:routingLanguages, urn:ietf:params:scim:schemas:extension:genesys:purecloud:2.0:User:externalIds |
 **excludedAttributes** | **[String]** | Indicates which attributes to exclude. Returns the default attributes minus excludedAttributes. Always returns the id, userName, active, and meta attributes. Use excludedAttributes to avoid expensive secondary calls for the default attributes. | [optional] <br />**Values**: id, userName, displayName, title, active, externalId, phoneNumbers, emails, groups, roles, meta, meta.version, meta.lastModified, urn:ietf:params:scim:schemas:core:2.0:User:id, urn:ietf:params:scim:schemas:core:2.0:User:userName, urn:ietf:params:scim:schemas:core:2.0:User:displayName, urn:ietf:params:scim:schemas:core:2.0:User:title, urn:ietf:params:scim:schemas:core:2.0:User:active, urn:ietf:params:scim:schemas:core:2.0:User:externalId, urn:ietf:params:scim:schemas:core:2.0:User:phoneNumbers, urn:ietf:params:scim:schemas:core:2.0:User:emails, urn:ietf:params:scim:schemas:core:2.0:User:groups, urn:ietf:params:scim:schemas:core:2.0:User:roles, urn:ietf:params:scim:schemas:core:2.0:User:meta, urn:ietf:params:scim:schemas:core:2.0:User:meta.version, urn:ietf:params:scim:schemas:core:2.0:User:meta.lastModified, urn:ietf:params:scim:schemas:extension:enterprise:2.0:User, urn:ietf:params:scim:schemas:extension:enterprise:2.0:User:division, urn:ietf:params:scim:schemas:extension:enterprise:2.0:User:department, urn:ietf:params:scim:schemas:extension:enterprise:2.0:User:manager, urn:ietf:params:scim:schemas:extension:enterprise:2.0:User:manager.value, urn:ietf:params:scim:schemas:extension:enterprise:2.0:User:employeeNumber, urn:ietf:params:scim:schemas:extension:enterprise:2.0:User:dateHire, urn:ietf:params:scim:schemas:extension:genesys:purecloud:2.0:User, urn:ietf:params:scim:schemas:extension:genesys:purecloud:2.0:User:routingSkills, urn:ietf:params:scim:schemas:extension:genesys:purecloud:2.0:User:routingLanguages, urn:ietf:params:scim:schemas:extension:genesys:purecloud:2.0:User:externalIds |
 **filter** | **String** | Filters results. If nothing is specified, returns all active users. Examples of valid values: id eq 857449b0-d9e7-4cd0-acbf-a6adfb9ef1e9, userName eq search@sample.org, manager eq 16e10e2f-1136-43fe-bb84-eac073168a49, email eq search@sample.org, division eq divisionName, externalId eq 167844, active eq false, employeeNumber eq 9876543210. | [optional]  |

### Return type

**ScimUserListResponse**


## getScimV2Group

> ScimV2Group getScimV2Group(groupId, opts)


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

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.SCIMApi();

let groupId = "groupId_example"; // String | The ID of a group. Returned with GET /api/v2/scim/v2/groups.
let opts = { 
  'attributes': ["attributes_example"], // [String] | Indicates which attributes to include. Returns these attributes and the id, active, and meta attributes. Use attributes to avoid expensive secondary calls for the default attributes.
  'excludedAttributes': ["excludedAttributes_example"], // [String] | Indicates which attributes to exclude. Returns the default attributes minus excludedAttributes. Always returns id, active, and meta attributes. Use excludedAttributes to avoid expensive secondary calls for the default attributes.
  'ifNoneMatch': "ifNoneMatch_example" // String | The ETag of a resource in double quotes. Returned as header and meta.version with initial call to GET /api/v2/scim/v2/groups/{groupId}. Example: 42. If the ETag is different from the version on the server, returns the current configuration of the resource. If the ETag is current, returns 304 Not Modified.
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
 **attributes** | **[String]** | Indicates which attributes to include. Returns these attributes and the id, active, and meta attributes. Use attributes to avoid expensive secondary calls for the default attributes. | [optional] <br />**Values**: id, displayName, members, externalId, meta, meta.version, meta.lastModified, urn:ietf:params:scim:schemas:core:2.0:Group:id, urn:ietf:params:scim:schemas:core:2.0:Group:meta, urn:ietf:params:scim:schemas:core:2.0:Group:meta.version, urn:ietf:params:scim:schemas:core:2.0:Group:meta.lastModified, urn:ietf:params:scim:schemas:core:2.0:Group:displayName, urn:ietf:params:scim:schemas:core:2.0:Group:members, urn:ietf:params:scim:schemas:core:2.0:Group:externalId |
 **excludedAttributes** | **[String]** | Indicates which attributes to exclude. Returns the default attributes minus excludedAttributes. Always returns id, active, and meta attributes. Use excludedAttributes to avoid expensive secondary calls for the default attributes. | [optional] <br />**Values**: id, displayName, members, externalId, meta, meta.version, meta.lastModified, urn:ietf:params:scim:schemas:core:2.0:Group:id, urn:ietf:params:scim:schemas:core:2.0:Group:meta, urn:ietf:params:scim:schemas:core:2.0:Group:meta.version, urn:ietf:params:scim:schemas:core:2.0:Group:meta.lastModified, urn:ietf:params:scim:schemas:core:2.0:Group:displayName, urn:ietf:params:scim:schemas:core:2.0:Group:members, urn:ietf:params:scim:schemas:core:2.0:Group:externalId |
 **ifNoneMatch** | **String** | The ETag of a resource in double quotes. Returned as header and meta.version with initial call to GET /api/v2/scim/v2/groups/{groupId}. Example: 42. If the ETag is different from the version on the server, returns the current configuration of the resource. If the ETag is current, returns 304 Not Modified. | [optional]  |

### Return type

**ScimV2Group**


## getScimV2Groups

> ScimGroupListResponse getScimV2Groups(filter, opts)


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

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.SCIMApi();

let filter = displayName eq groupName; // String | Filters results. If nothing is specified, returns all groups. Examples of valid values: id eq 5f4bc742-a019-4e38-8e2a-d39d5bc0b0f3, displayname eq Sales.
let opts = { 
  'startIndex': 1, // Number | The 1-based index of the first query result.
  'count': 25, // Number | The requested number of items per page. A value of 0 returns totalResults. A page size over 25 may exceed internal resource limits and return a 429 error. For a page size over 25, use the excludedAttributes or attributes query parameters to exclude or only include secondary lookup values such as externalId,  roles, urn:ietf:params:scim:schemas:extension:genesys:purecloud:2.0:User:routingLanguages, or urn:ietf:params:scim:schemas:extension:genesys:purecloud:2.0:User:routingSkills.
  'attributes': ["attributes_example"], // [String] | Indicates which attributes to include. Returns these attributes and the id, active, and meta attributes. Use attributes to avoid expensive secondary calls for the default attributes.
  'excludedAttributes': ["excludedAttributes_example"] // [String] | Indicates which attributes to exclude. Returns the default attributes minus excludedAttributes. Always returns id, active, and meta attributes. Use excludedAttributes to avoid expensive secondary calls for the default attributes.
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
 **filter** | **String** | Filters results. If nothing is specified, returns all groups. Examples of valid values: id eq 5f4bc742-a019-4e38-8e2a-d39d5bc0b0f3, displayname eq Sales. |  |
 **startIndex** | **Number** | The 1-based index of the first query result. | [optional] [default to 1] |
 **count** | **Number** | The requested number of items per page. A value of 0 returns totalResults. A page size over 25 may exceed internal resource limits and return a 429 error. For a page size over 25, use the excludedAttributes or attributes query parameters to exclude or only include secondary lookup values such as externalId,  roles, urn:ietf:params:scim:schemas:extension:genesys:purecloud:2.0:User:routingLanguages, or urn:ietf:params:scim:schemas:extension:genesys:purecloud:2.0:User:routingSkills. | [optional] [default to 25] |
 **attributes** | **[String]** | Indicates which attributes to include. Returns these attributes and the id, active, and meta attributes. Use attributes to avoid expensive secondary calls for the default attributes. | [optional] <br />**Values**: id, displayName, members, externalId, meta, meta.version, meta.lastModified, urn:ietf:params:scim:schemas:core:2.0:Group:id, urn:ietf:params:scim:schemas:core:2.0:Group:meta, urn:ietf:params:scim:schemas:core:2.0:Group:meta.version, urn:ietf:params:scim:schemas:core:2.0:Group:meta.lastModified, urn:ietf:params:scim:schemas:core:2.0:Group:displayName, urn:ietf:params:scim:schemas:core:2.0:Group:members, urn:ietf:params:scim:schemas:core:2.0:Group:externalId |
 **excludedAttributes** | **[String]** | Indicates which attributes to exclude. Returns the default attributes minus excludedAttributes. Always returns id, active, and meta attributes. Use excludedAttributes to avoid expensive secondary calls for the default attributes. | [optional] <br />**Values**: id, displayName, members, externalId, meta, meta.version, meta.lastModified, urn:ietf:params:scim:schemas:core:2.0:Group:id, urn:ietf:params:scim:schemas:core:2.0:Group:meta, urn:ietf:params:scim:schemas:core:2.0:Group:meta.version, urn:ietf:params:scim:schemas:core:2.0:Group:meta.lastModified, urn:ietf:params:scim:schemas:core:2.0:Group:displayName, urn:ietf:params:scim:schemas:core:2.0:Group:members, urn:ietf:params:scim:schemas:core:2.0:Group:externalId |

### Return type

**ScimGroupListResponse**


## getScimV2Resourcetype

> ScimConfigResourceType getScimV2Resourcetype(resourceType)


GET /api/v2/scim/v2/resourcetypes/{resourceType}

Get a resource type

Requires NO permissions:

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

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
 **resourceType** | **String** | The type of resource. Returned with GET /api/v2/scim/v2/resourcetypes. | <br />**Values**: User, Group, ServiceProviderConfig, ResourceType, Schema |

### Return type

**ScimConfigResourceType**


## getScimV2Resourcetypes

> ScimConfigResourceTypesListResponse getScimV2Resourcetypes()


GET /api/v2/scim/v2/resourcetypes

Get a list of resource types

Requires NO permissions:

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

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

### Return type

**ScimConfigResourceTypesListResponse**


## getScimV2Schema

> ScimV2SchemaDefinition getScimV2Schema(schemaId)


GET /api/v2/scim/v2/schemas/{schemaId}

Get a SCIM schema

Requires NO permissions:

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.SCIMApi();

let schemaId = "schemaId_example"; // String | The ID of a schema. Returned with GET /api/v2/scim/v2/schemas.

apiInstance.getScimV2Schema(schemaId)
  .then((data) => {
    console.log(`getScimV2Schema success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getScimV2Schema');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **schemaId** | **String** | The ID of a schema. Returned with GET /api/v2/scim/v2/schemas. | <br />**Values**: urn:ietf:params:scim:schemas:core:2.0:User, urn:ietf:params:scim:schemas:core:2.0:Group, urn:ietf:params:scim:schemas:core:2.0:ServiceProviderConfig, urn:ietf:params:scim:schemas:core:2.0:ResourceType, urn:ietf:params:scim:schemas:core:2.0:Schema, urn:ietf:params:scim:schemas:extension:enterprise:2.0:User, urn:ietf:params:scim:schemas:extension:genesys:purecloud:2.0:User |

### Return type

**ScimV2SchemaDefinition**


## getScimV2Schemas

> ScimV2SchemaListResponse getScimV2Schemas(opts)


GET /api/v2/scim/v2/schemas

Get a list of SCIM schemas

Requires NO permissions:

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.SCIMApi();

let opts = { 
  'filter': displayName eq groupName // String | Filtered results are invalid and return 403 Unauthorized.
};

apiInstance.getScimV2Schemas(opts)
  .then((data) => {
    console.log(`getScimV2Schemas success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getScimV2Schemas');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **filter** | **String** | Filtered results are invalid and return 403 Unauthorized. | [optional]  |

### Return type

**ScimV2SchemaListResponse**


## getScimV2Serviceproviderconfig

> ScimServiceProviderConfig getScimV2Serviceproviderconfig(opts)


GET /api/v2/scim/v2/serviceproviderconfig

Get a service provider's configuration

Requires NO permissions:

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.SCIMApi();

let opts = { 
  'ifNoneMatch': "ifNoneMatch_example" // String | The ETag of a resource in double quotes. Returned as header and meta.version with initial call to GET /api/v2/scim/v2/serviceproviderconfig. Example: 42. If the ETag is different from the version on the server, returns the current configuration of the resource. If the ETag is current, returns 304 Not Modified. 
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
 **ifNoneMatch** | **String** | The ETag of a resource in double quotes. Returned as header and meta.version with initial call to GET /api/v2/scim/v2/serviceproviderconfig. Example: 42. If the ETag is different from the version on the server, returns the current configuration of the resource. If the ETag is current, returns 304 Not Modified.  | [optional]  |

### Return type

**ScimServiceProviderConfig**


## getScimV2User

> ScimV2User getScimV2User(userId, opts)


GET /api/v2/scim/v2/users/{userId}

Get a user

Requires NO permissions:

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.SCIMApi();

let userId = "userId_example"; // String | The ID of a user. Returned with GET /api/v2/scim/v2/users.
let opts = { 
  'attributes': ["attributes_example"], // [String] | Indicates which attributes to include. Returns these attributes and the id, userName, active, and meta attributes. Use attributes to avoid expensive secondary calls for the default attributes.
  'excludedAttributes': ["excludedAttributes_example"], // [String] | Indicates which attributes to exclude. Returns the default attributes minus excludedAttributes. Always returns the id, userName, active, and meta attributes. Use excludedAttributes to avoid expensive secondary calls for the default attributes.
  'ifNoneMatch': "ifNoneMatch_example" // String | The ETag of a resource in double quotes. Returned as header and meta.version with initial call to GET /api/v2/scim/v2/users/{userId}. Example: 42. If the ETag is different from the version on the server, returns the current configuration of the resource. If the ETag is current, returns 304 Not Modified.
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
 **attributes** | **[String]** | Indicates which attributes to include. Returns these attributes and the id, userName, active, and meta attributes. Use attributes to avoid expensive secondary calls for the default attributes. | [optional] <br />**Values**: id, userName, displayName, title, active, externalId, phoneNumbers, emails, groups, roles, meta, meta.version, meta.lastModified, urn:ietf:params:scim:schemas:core:2.0:User:id, urn:ietf:params:scim:schemas:core:2.0:User:userName, urn:ietf:params:scim:schemas:core:2.0:User:displayName, urn:ietf:params:scim:schemas:core:2.0:User:title, urn:ietf:params:scim:schemas:core:2.0:User:active, urn:ietf:params:scim:schemas:core:2.0:User:externalId, urn:ietf:params:scim:schemas:core:2.0:User:phoneNumbers, urn:ietf:params:scim:schemas:core:2.0:User:emails, urn:ietf:params:scim:schemas:core:2.0:User:groups, urn:ietf:params:scim:schemas:core:2.0:User:roles, urn:ietf:params:scim:schemas:core:2.0:User:meta, urn:ietf:params:scim:schemas:core:2.0:User:meta.version, urn:ietf:params:scim:schemas:core:2.0:User:meta.lastModified, urn:ietf:params:scim:schemas:extension:enterprise:2.0:User, urn:ietf:params:scim:schemas:extension:enterprise:2.0:User:division, urn:ietf:params:scim:schemas:extension:enterprise:2.0:User:department, urn:ietf:params:scim:schemas:extension:enterprise:2.0:User:manager, urn:ietf:params:scim:schemas:extension:enterprise:2.0:User:manager.value, urn:ietf:params:scim:schemas:extension:enterprise:2.0:User:employeeNumber, urn:ietf:params:scim:schemas:extension:enterprise:2.0:User:dateHire, urn:ietf:params:scim:schemas:extension:genesys:purecloud:2.0:User, urn:ietf:params:scim:schemas:extension:genesys:purecloud:2.0:User:routingSkills, urn:ietf:params:scim:schemas:extension:genesys:purecloud:2.0:User:routingLanguages, urn:ietf:params:scim:schemas:extension:genesys:purecloud:2.0:User:externalIds |
 **excludedAttributes** | **[String]** | Indicates which attributes to exclude. Returns the default attributes minus excludedAttributes. Always returns the id, userName, active, and meta attributes. Use excludedAttributes to avoid expensive secondary calls for the default attributes. | [optional] <br />**Values**: id, userName, displayName, title, active, externalId, phoneNumbers, emails, groups, roles, meta, meta.version, meta.lastModified, urn:ietf:params:scim:schemas:core:2.0:User:id, urn:ietf:params:scim:schemas:core:2.0:User:userName, urn:ietf:params:scim:schemas:core:2.0:User:displayName, urn:ietf:params:scim:schemas:core:2.0:User:title, urn:ietf:params:scim:schemas:core:2.0:User:active, urn:ietf:params:scim:schemas:core:2.0:User:externalId, urn:ietf:params:scim:schemas:core:2.0:User:phoneNumbers, urn:ietf:params:scim:schemas:core:2.0:User:emails, urn:ietf:params:scim:schemas:core:2.0:User:groups, urn:ietf:params:scim:schemas:core:2.0:User:roles, urn:ietf:params:scim:schemas:core:2.0:User:meta, urn:ietf:params:scim:schemas:core:2.0:User:meta.version, urn:ietf:params:scim:schemas:core:2.0:User:meta.lastModified, urn:ietf:params:scim:schemas:extension:enterprise:2.0:User, urn:ietf:params:scim:schemas:extension:enterprise:2.0:User:division, urn:ietf:params:scim:schemas:extension:enterprise:2.0:User:department, urn:ietf:params:scim:schemas:extension:enterprise:2.0:User:manager, urn:ietf:params:scim:schemas:extension:enterprise:2.0:User:manager.value, urn:ietf:params:scim:schemas:extension:enterprise:2.0:User:employeeNumber, urn:ietf:params:scim:schemas:extension:enterprise:2.0:User:dateHire, urn:ietf:params:scim:schemas:extension:genesys:purecloud:2.0:User, urn:ietf:params:scim:schemas:extension:genesys:purecloud:2.0:User:routingSkills, urn:ietf:params:scim:schemas:extension:genesys:purecloud:2.0:User:routingLanguages, urn:ietf:params:scim:schemas:extension:genesys:purecloud:2.0:User:externalIds |
 **ifNoneMatch** | **String** | The ETag of a resource in double quotes. Returned as header and meta.version with initial call to GET /api/v2/scim/v2/users/{userId}. Example: 42. If the ETag is different from the version on the server, returns the current configuration of the resource. If the ETag is current, returns 304 Not Modified. | [optional]  |

### Return type

**ScimV2User**


## getScimV2Users

> ScimUserListResponse getScimV2Users(opts)


GET /api/v2/scim/v2/users

Get a list of users

To return all active users, do not use the filter parameter. To return inactive users, set the filter parameter to "active eq false". By default, returns SCIM attributes "externalId", "enterprise-user:manager", and "roles". To exclude these attributes, set the attributes parameter to "id,active" or the excludeAttributes parameter to "externalId,roles,urn:ietf:params:scim:schemas:extension:enterprise:2.0:User:division".

Requires NO permissions:

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.SCIMApi();

let opts = { 
  'startIndex': 1, // Number | The 1-based index of the first query result.
  'count': 25, // Number | The requested number of items per page. A value of 0 returns totalResults. A page size over 25 may exceed internal resource limits and return a 429 error. For a page size over 25, use the excludedAttributes or attributes query parameters to exclude or only include secondary lookup values such as externalId,  roles, urn:ietf:params:scim:schemas:extension:genesys:purecloud:2.0:User:routingLanguages, or urn:ietf:params:scim:schemas:extension:genesys:purecloud:2.0:User:routingSkills.
  'attributes': ["attributes_example"], // [String] | Indicates which attributes to include. Returns these attributes and the id, userName, active, and meta attributes. Use attributes to avoid expensive secondary calls for the default attributes.
  'excludedAttributes': ["excludedAttributes_example"], // [String] | Indicates which attributes to exclude. Returns the default attributes minus excludedAttributes. Always returns the id, userName, active, and meta attributes. Use excludedAttributes to avoid expensive secondary calls for the default attributes.
  'filter': "filter_example" // String | Filters results. If nothing is specified, returns all active users. Examples of valid values: id eq 857449b0-d9e7-4cd0-acbf-a6adfb9ef1e9, userName eq search@sample.org, manager eq 16e10e2f-1136-43fe-bb84-eac073168a49, email eq search@sample.org, division eq divisionName, externalId eq 167844, active eq false, employeeNumber eq 9876543210.
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
 **count** | **Number** | The requested number of items per page. A value of 0 returns totalResults. A page size over 25 may exceed internal resource limits and return a 429 error. For a page size over 25, use the excludedAttributes or attributes query parameters to exclude or only include secondary lookup values such as externalId,  roles, urn:ietf:params:scim:schemas:extension:genesys:purecloud:2.0:User:routingLanguages, or urn:ietf:params:scim:schemas:extension:genesys:purecloud:2.0:User:routingSkills. | [optional] [default to 25] |
 **attributes** | **[String]** | Indicates which attributes to include. Returns these attributes and the id, userName, active, and meta attributes. Use attributes to avoid expensive secondary calls for the default attributes. | [optional] <br />**Values**: id, userName, displayName, title, active, externalId, phoneNumbers, emails, groups, roles, meta, meta.version, meta.lastModified, urn:ietf:params:scim:schemas:core:2.0:User:id, urn:ietf:params:scim:schemas:core:2.0:User:userName, urn:ietf:params:scim:schemas:core:2.0:User:displayName, urn:ietf:params:scim:schemas:core:2.0:User:title, urn:ietf:params:scim:schemas:core:2.0:User:active, urn:ietf:params:scim:schemas:core:2.0:User:externalId, urn:ietf:params:scim:schemas:core:2.0:User:phoneNumbers, urn:ietf:params:scim:schemas:core:2.0:User:emails, urn:ietf:params:scim:schemas:core:2.0:User:groups, urn:ietf:params:scim:schemas:core:2.0:User:roles, urn:ietf:params:scim:schemas:core:2.0:User:meta, urn:ietf:params:scim:schemas:core:2.0:User:meta.version, urn:ietf:params:scim:schemas:core:2.0:User:meta.lastModified, urn:ietf:params:scim:schemas:extension:enterprise:2.0:User, urn:ietf:params:scim:schemas:extension:enterprise:2.0:User:division, urn:ietf:params:scim:schemas:extension:enterprise:2.0:User:department, urn:ietf:params:scim:schemas:extension:enterprise:2.0:User:manager, urn:ietf:params:scim:schemas:extension:enterprise:2.0:User:manager.value, urn:ietf:params:scim:schemas:extension:enterprise:2.0:User:employeeNumber, urn:ietf:params:scim:schemas:extension:enterprise:2.0:User:dateHire, urn:ietf:params:scim:schemas:extension:genesys:purecloud:2.0:User, urn:ietf:params:scim:schemas:extension:genesys:purecloud:2.0:User:routingSkills, urn:ietf:params:scim:schemas:extension:genesys:purecloud:2.0:User:routingLanguages, urn:ietf:params:scim:schemas:extension:genesys:purecloud:2.0:User:externalIds |
 **excludedAttributes** | **[String]** | Indicates which attributes to exclude. Returns the default attributes minus excludedAttributes. Always returns the id, userName, active, and meta attributes. Use excludedAttributes to avoid expensive secondary calls for the default attributes. | [optional] <br />**Values**: id, userName, displayName, title, active, externalId, phoneNumbers, emails, groups, roles, meta, meta.version, meta.lastModified, urn:ietf:params:scim:schemas:core:2.0:User:id, urn:ietf:params:scim:schemas:core:2.0:User:userName, urn:ietf:params:scim:schemas:core:2.0:User:displayName, urn:ietf:params:scim:schemas:core:2.0:User:title, urn:ietf:params:scim:schemas:core:2.0:User:active, urn:ietf:params:scim:schemas:core:2.0:User:externalId, urn:ietf:params:scim:schemas:core:2.0:User:phoneNumbers, urn:ietf:params:scim:schemas:core:2.0:User:emails, urn:ietf:params:scim:schemas:core:2.0:User:groups, urn:ietf:params:scim:schemas:core:2.0:User:roles, urn:ietf:params:scim:schemas:core:2.0:User:meta, urn:ietf:params:scim:schemas:core:2.0:User:meta.version, urn:ietf:params:scim:schemas:core:2.0:User:meta.lastModified, urn:ietf:params:scim:schemas:extension:enterprise:2.0:User, urn:ietf:params:scim:schemas:extension:enterprise:2.0:User:division, urn:ietf:params:scim:schemas:extension:enterprise:2.0:User:department, urn:ietf:params:scim:schemas:extension:enterprise:2.0:User:manager, urn:ietf:params:scim:schemas:extension:enterprise:2.0:User:manager.value, urn:ietf:params:scim:schemas:extension:enterprise:2.0:User:employeeNumber, urn:ietf:params:scim:schemas:extension:enterprise:2.0:User:dateHire, urn:ietf:params:scim:schemas:extension:genesys:purecloud:2.0:User, urn:ietf:params:scim:schemas:extension:genesys:purecloud:2.0:User:routingSkills, urn:ietf:params:scim:schemas:extension:genesys:purecloud:2.0:User:routingLanguages, urn:ietf:params:scim:schemas:extension:genesys:purecloud:2.0:User:externalIds |
 **filter** | **String** | Filters results. If nothing is specified, returns all active users. Examples of valid values: id eq 857449b0-d9e7-4cd0-acbf-a6adfb9ef1e9, userName eq search@sample.org, manager eq 16e10e2f-1136-43fe-bb84-eac073168a49, email eq search@sample.org, division eq divisionName, externalId eq 167844, active eq false, employeeNumber eq 9876543210. | [optional]  |

### Return type

**ScimUserListResponse**


## patchScimGroup

> ScimV2Group patchScimGroup(groupId, body, opts)


PATCH /api/v2/scim/groups/{groupId}

Modify a group

Requires ANY permissions:

* directory:group:edit

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.SCIMApi();

let groupId = "groupId_example"; // String | The ID of a group. Returned with GET /api/v2/scim/groups.
let body = {}; // Object | The information used to modify a group.
let opts = { 
  'ifMatch': "ifMatch_example" // String | The ETag of a resource in double quotes. Returned as header and meta.version with initial call to GET /api/v2/scim/groups/{groupId}. Example: 42. If the ETag is different from the version on the server, returns 400 with a scimType of invalidVers.
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
 **ifMatch** | **String** | The ETag of a resource in double quotes. Returned as header and meta.version with initial call to GET /api/v2/scim/groups/{groupId}. Example: 42. If the ETag is different from the version on the server, returns 400 with a scimType of invalidVers. | [optional]  |

### Return type

**ScimV2Group**


## patchScimUser

> ScimV2User patchScimUser(userId, body, opts)


PATCH /api/v2/scim/users/{userId}

Modify a user

Requires ANY permissions:

* directory:user:edit
* directory:user:setPassword
* authorization:grant:add
* authorization:grant:delete
* routing:skill:assign
* routing:language:assign
* telephony:extension:assign

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.SCIMApi();

let userId = "userId_example"; // String | The ID of a user. Returned with GET /api/v2/scim/users.
let body = {}; // Object | The information used to modify a user.
let opts = { 
  'ifMatch': "ifMatch_example" // String | The ETag of a resource in double quotes. Returned as header and meta.version with initial call to GET /api/v2/scim/users/{userId}. Example: 42. If the ETag is different from the version on the server, returns 400 with a scimType of invalidVers.
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
 **ifMatch** | **String** | The ETag of a resource in double quotes. Returned as header and meta.version with initial call to GET /api/v2/scim/users/{userId}. Example: 42. If the ETag is different from the version on the server, returns 400 with a scimType of invalidVers. | [optional]  |

### Return type

**ScimV2User**


## patchScimV2Group

> ScimV2Group patchScimV2Group(groupId, body, opts)


PATCH /api/v2/scim/v2/groups/{groupId}

Modify a group

Requires ANY permissions:

* directory:group:edit

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.SCIMApi();

let groupId = "groupId_example"; // String | The ID of a group. Returned with GET /api/v2/scim/v2/groups.
let body = {}; // Object | The information used to modify a group.
let opts = { 
  'ifMatch': "ifMatch_example" // String | The ETag of a resource in double quotes. Returned as header and meta.version with initial call to GET /api/v2/scim/v2/groups/{groupId}. Example: 42. If the ETag is different from the version on the server, returns 400 with a scimType of invalidVers.
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
 **ifMatch** | **String** | The ETag of a resource in double quotes. Returned as header and meta.version with initial call to GET /api/v2/scim/v2/groups/{groupId}. Example: 42. If the ETag is different from the version on the server, returns 400 with a scimType of invalidVers. | [optional]  |

### Return type

**ScimV2Group**


## patchScimV2User

> ScimV2User patchScimV2User(userId, body, opts)


PATCH /api/v2/scim/v2/users/{userId}

Modify a user

Requires ANY permissions:

* directory:user:edit
* directory:user:setPassword
* authorization:grant:add
* authorization:grant:delete
* routing:skill:assign
* routing:language:assign
* telephony:extension:assign

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.SCIMApi();

let userId = "userId_example"; // String | The ID of a user. Returned with GET /api/v2/scim/v2/users.
let body = {}; // Object | The information used to modify a user.
let opts = { 
  'ifMatch': "ifMatch_example" // String | The ETag of a resource in double quotes. Returned as header and meta.version with initial call to GET /api/v2/scim/v2/users/{userId}. Example: 42. If the ETag is different from the version on the server, returns 400 with a scimType of invalidVers.
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
 **ifMatch** | **String** | The ETag of a resource in double quotes. Returned as header and meta.version with initial call to GET /api/v2/scim/v2/users/{userId}. Example: 42. If the ETag is different from the version on the server, returns 400 with a scimType of invalidVers. | [optional]  |

### Return type

**ScimV2User**


## postScimUsers

> ScimV2User postScimUsers(body)


POST /api/v2/scim/users

Create a user

Requires ANY permissions:

* directory:user:add
* authorization:grant:add
* authorization:grant:delete
* routing:skill:assign
* routing:language:assign
* telephony:extension:assign

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
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

### Return type

**ScimV2User**


## postScimV2Users

> ScimV2User postScimV2Users(body)


POST /api/v2/scim/v2/users

Create a user

Requires ANY permissions:

* directory:user:add
* authorization:grant:add
* authorization:grant:delete
* routing:skill:assign
* routing:language:assign
* telephony:extension:assign

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
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

### Return type

**ScimV2User**


## putScimGroup

> ScimV2Group putScimGroup(groupId, body, opts)


PUT /api/v2/scim/groups/{groupId}

Replace a group

Requires ANY permissions:

* directory:group:edit

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.SCIMApi();

let groupId = "groupId_example"; // String | The ID of a group. Returned with GET /api/v2/scim/groups.
let body = {}; // Object | The information used to replace a group.
let opts = { 
  'ifMatch': "ifMatch_example" // String | The ETag of a resource in double quotes. Returned as header and meta.version with initial call to GET /api/v2/scim/groups/{groupId}. Example: 42. If the ETag is different from the version on the server, returns 400 with a scimType of invalidVers.
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
 **ifMatch** | **String** | The ETag of a resource in double quotes. Returned as header and meta.version with initial call to GET /api/v2/scim/groups/{groupId}. Example: 42. If the ETag is different from the version on the server, returns 400 with a scimType of invalidVers. | [optional]  |

### Return type

**ScimV2Group**


## putScimUser

> ScimV2User putScimUser(userId, body, opts)


PUT /api/v2/scim/users/{userId}

Replace a user

Requires ANY permissions:

* directory:user:edit
* directory:user:setPassword
* authorization:grant:add
* authorization:grant:delete
* routing:skill:assign
* routing:language:assign
* telephony:extension:assign

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.SCIMApi();

let userId = "userId_example"; // String | The ID of a user. Returned with GET /api/v2/scim/users.
let body = {}; // Object | The information used to replace a user.
let opts = { 
  'ifMatch': "ifMatch_example" // String | The ETag of a resource in double quotes. Returned as header and meta.version with initial call to GET /api/v2/scim/users/{userId}. Example: 42. If the ETag is different from the version on the server, returns 400 with a scimType of invalidVers.
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
 **ifMatch** | **String** | The ETag of a resource in double quotes. Returned as header and meta.version with initial call to GET /api/v2/scim/users/{userId}. Example: 42. If the ETag is different from the version on the server, returns 400 with a scimType of invalidVers. | [optional]  |

### Return type

**ScimV2User**


## putScimV2Group

> ScimV2Group putScimV2Group(groupId, body, opts)


PUT /api/v2/scim/v2/groups/{groupId}

Replace a group

Requires ANY permissions:

* directory:group:edit

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.SCIMApi();

let groupId = "groupId_example"; // String | The ID of a group. Returned with GET /api/v2/scim/v2/groups.
let body = {}; // Object | The information used to replace a group.
let opts = { 
  'ifMatch': "ifMatch_example" // String | The ETag of a resource in double quotes. Returned as header and meta.version with initial call to GET /api/v2/scim/v2/groups/{groupId}. Example: 42. If the ETag is different from the version on the server, returns 400 with a scimType of invalidVers.
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
 **ifMatch** | **String** | The ETag of a resource in double quotes. Returned as header and meta.version with initial call to GET /api/v2/scim/v2/groups/{groupId}. Example: 42. If the ETag is different from the version on the server, returns 400 with a scimType of invalidVers. | [optional]  |

### Return type

**ScimV2Group**


## putScimV2User

> ScimV2User putScimV2User(userId, body, opts)


PUT /api/v2/scim/v2/users/{userId}

Replace a user

Requires ANY permissions:

* directory:user:edit
* directory:user:setPassword
* authorization:grant:add
* authorization:grant:delete
* routing:skill:assign
* routing:language:assign
* telephony:extension:assign

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.SCIMApi();

let userId = "userId_example"; // String | The ID of a user. Returned with GET /api/v2/scim/v2/users.
let body = {}; // Object | The information used to replace a user.
let opts = { 
  'ifMatch': "ifMatch_example" // String | The ETag of a resource in double quotes. Returned as header and meta.version with initial call to GET /api/v2/scim/v2/users/{userId}. Example: 42. If the ETag is different from the version on the server, returns 400 with a scimType of invalidVers.
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
 **ifMatch** | **String** | The ETag of a resource in double quotes. Returned as header and meta.version with initial call to GET /api/v2/scim/v2/users/{userId}. Example: 42. If the ETag is different from the version on the server, returns 400 with a scimType of invalidVers. | [optional]  |

### Return type

**ScimV2User**


_purecloud-platform-client-v2@229.1.0_
