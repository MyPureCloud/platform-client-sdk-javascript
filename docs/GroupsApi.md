# GroupsApi

# platformClient.GroupsApi

All URIs are relative to *https://api.mypurecloud.com*

| Method | HTTP request | Description |
| ------------- | ------------- | ------------- |
[**deleteGroup**](GroupsApi#deleteGroup) | **DELETE** /api/v2/groups/{groupId} | Delete group
[**deleteGroupDynamicsettings**](GroupsApi#deleteGroupDynamicsettings) | **DELETE** /api/v2/groups/{groupId}/dynamicsettings | Remove dynamic group definition
[**deleteGroupMembers**](GroupsApi#deleteGroupMembers) | **DELETE** /api/v2/groups/{groupId}/members | Remove members
[**getFieldconfig**](GroupsApi#getFieldconfig) | **GET** /api/v2/fieldconfig | Fetch field config for an entity type
[**getGroup**](GroupsApi#getGroup) | **GET** /api/v2/groups/{groupId} | Get group
[**getGroupDynamicsettings**](GroupsApi#getGroupDynamicsettings) | **GET** /api/v2/groups/{groupId}/dynamicsettings | Get dynamic group definition
[**getGroupIndividuals**](GroupsApi#getGroupIndividuals) | **GET** /api/v2/groups/{groupId}/individuals | Get all individuals associated with the group
[**getGroupMembers**](GroupsApi#getGroupMembers) | **GET** /api/v2/groups/{groupId}/members | Get group members, includes individuals, owners, and dynamically included people
[**getGroupProfile**](GroupsApi#getGroupProfile) | **GET** /api/v2/groups/{groupId}/profile | Get group profile
[**getGroups**](GroupsApi#getGroups) | **GET** /api/v2/groups | Get a group list
[**getGroupsSearch**](GroupsApi#getGroupsSearch) | **GET** /api/v2/groups/search | Search groups using the q64 value returned from a previous search
[**getProfilesGroups**](GroupsApi#getProfilesGroups) | **GET** /api/v2/profiles/groups | Get group profile listing
[**postGroupMembers**](GroupsApi#postGroupMembers) | **POST** /api/v2/groups/{groupId}/members | Add members
[**postGroups**](GroupsApi#postGroups) | **POST** /api/v2/groups | Create a group
[**postGroupsDynamicsettingsPreview**](GroupsApi#postGroupsDynamicsettingsPreview) | **POST** /api/v2/groups/dynamicsettings/preview | Preview the number of users selected for a dynamic group definition query
[**postGroupsSearch**](GroupsApi#postGroupsSearch) | **POST** /api/v2/groups/search | Search groups
[**putGroup**](GroupsApi#putGroup) | **PUT** /api/v2/groups/{groupId} | Update group
[**putGroupDynamicsettings**](GroupsApi#putGroupDynamicsettings) | **PUT** /api/v2/groups/{groupId}/dynamicsettings | Create / Update dynamic group definition



## deleteGroup

> void deleteGroup(groupId)


DELETE /api/v2/groups/{groupId}

Delete group

Requires ANY permissions:

* directory:group:delete

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.GroupsApi();

let groupId = "groupId_example"; // String | Group ID

apiInstance.deleteGroup(groupId)
  .then(() => {
    console.log('deleteGroup returned successfully.');
  })
  .catch((err) => {
    console.log('There was a failure calling deleteGroup');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **groupId** | **String** | Group ID |  |

### Return type

void (no response body)


## deleteGroupDynamicsettings

> void deleteGroupDynamicsettings(groupId)


DELETE /api/v2/groups/{groupId}/dynamicsettings

Remove dynamic group definition

deleteGroupDynamicsettings is a preview method and is subject to both breaking and non-breaking changes at any time without notice

Requires ANY permissions:

* directory:group:delete

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.GroupsApi();

let groupId = "groupId_example"; // String | Group ID

apiInstance.deleteGroupDynamicsettings(groupId)
  .then(() => {
    console.log('deleteGroupDynamicsettings returned successfully.');
  })
  .catch((err) => {
    console.log('There was a failure calling deleteGroupDynamicsettings');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **groupId** | **String** | Group ID |  |

### Return type

void (no response body)


## deleteGroupMembers

> **Object** deleteGroupMembers(groupId, ids)


DELETE /api/v2/groups/{groupId}/members

Remove members

Requires NO permissions:

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.GroupsApi();

let groupId = "groupId_example"; // String | Group ID
let ids = "ids_example"; // String | Comma separated list of userIds to remove. A maximum of 50 members are allowed per request.

apiInstance.deleteGroupMembers(groupId, ids)
  .then((data) => {
    console.log(`deleteGroupMembers success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling deleteGroupMembers');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **groupId** | **String** | Group ID |  |
 **ids** | **String** | Comma separated list of userIds to remove. A maximum of 50 members are allowed per request. |  |

### Return type

**Object**


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

let apiInstance = new platformClient.GroupsApi();

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


## getGroup

> Group getGroup(groupId)


GET /api/v2/groups/{groupId}

Get group

Requires NO permissions:

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.GroupsApi();

let groupId = "groupId_example"; // String | Group ID

apiInstance.getGroup(groupId)
  .then((data) => {
    console.log(`getGroup success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getGroup');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **groupId** | **String** | Group ID |  |

### Return type

**Group**


## getGroupDynamicsettings

> DynamicGroupDefinition getGroupDynamicsettings(groupId)


GET /api/v2/groups/{groupId}/dynamicsettings

Get dynamic group definition

getGroupDynamicsettings is a preview method and is subject to both breaking and non-breaking changes at any time without notice

Requires ANY permissions:

* directory:group:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.GroupsApi();

let groupId = "groupId_example"; // String | Group ID

apiInstance.getGroupDynamicsettings(groupId)
  .then((data) => {
    console.log(`getGroupDynamicsettings success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getGroupDynamicsettings');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **groupId** | **String** | Group ID |  |

### Return type

**DynamicGroupDefinition**


## getGroupIndividuals

> UserEntityListing getGroupIndividuals(groupId)


GET /api/v2/groups/{groupId}/individuals

Get all individuals associated with the group

Requires NO permissions:

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.GroupsApi();

let groupId = "groupId_example"; // String | Group ID

apiInstance.getGroupIndividuals(groupId)
  .then((data) => {
    console.log(`getGroupIndividuals success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getGroupIndividuals');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **groupId** | **String** | Group ID |  |

### Return type

**UserEntityListing**


## getGroupMembers

> UserEntityListing getGroupMembers(groupId, opts)


GET /api/v2/groups/{groupId}/members

Get group members, includes individuals, owners, and dynamically included people

Requires NO permissions:

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.GroupsApi();

let groupId = "groupId_example"; // String | Group ID
let opts = { 
  'pageSize': 25, // Number | Page size
  'pageNumber': 1, // Number | Page number
  'sortOrder': "ASC", // String | Ascending or descending sort order
  'expand': ["expand_example"] // [String] | Which fields, if any, to expand
};

apiInstance.getGroupMembers(groupId, opts)
  .then((data) => {
    console.log(`getGroupMembers success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getGroupMembers');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **groupId** | **String** | Group ID |  |
 **pageSize** | **Number** | Page size | [optional] [default to 25] |
 **pageNumber** | **Number** | Page number | [optional] [default to 1] |
 **sortOrder** | **String** | Ascending or descending sort order | [optional] [default to ASC]<br />**Values**: ascending, descending |
 **expand** | **[String]** | Which fields, if any, to expand | [optional] <br />**Values**: routingStatus, presence, integrationPresence, conversationSummary, outOfOffice, geolocation, station, authorization, lasttokenissued, authorization.unusedRoles, team, workPlanBidRanks, externalContactsSettings, groups, profileSkills, certifications, locations, skills, languages, languagePreference, employerInfo, biography, dateLastLogin, dateWelcomeSent |

### Return type

**UserEntityListing**


## getGroupProfile

> GroupProfile getGroupProfile(groupId, opts)

:::{"alert":"warning","title":"Deprecated","collapsible":false,"autoCollapse":false}
This resource has been deprecated
:::

GET /api/v2/groups/{groupId}/profile

Get group profile

This api is deprecated. Use /api/v2/groups instead

Requires NO permissions:

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.GroupsApi();

let groupId = "groupId_example"; // String | groupId
let opts = { 
  'fields': "fields_example" // String | Comma separated fields to return.  Allowable values can be found by querying /api/v2/fieldconfig?type=group and using the key for the elements returned by the fieldList
};

apiInstance.getGroupProfile(groupId, opts)
  .then((data) => {
    console.log(`getGroupProfile success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getGroupProfile');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **groupId** | **String** | groupId |  |
 **fields** | **String** | Comma separated fields to return.  Allowable values can be found by querying /api/v2/fieldconfig?type=group and using the key for the elements returned by the fieldList | [optional]  |

### Return type

**GroupProfile**


## getGroups

> GroupEntityListing getGroups(opts)


GET /api/v2/groups

Get a group list

Requires NO permissions:

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.GroupsApi();

let opts = { 
  'pageSize': 25, // Number | Page size
  'pageNumber': 1, // Number | Page number
  'id': ["id_example"], // [String] | id
  'jabberId': ["jabberId_example"], // [String] | A list of jabberIds to fetch by bulk (cannot be used with the id parameter)
  'sortOrder': "ASC" // String | Ascending or descending sort order
};

apiInstance.getGroups(opts)
  .then((data) => {
    console.log(`getGroups success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getGroups');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **pageSize** | **Number** | Page size | [optional] [default to 25] |
 **pageNumber** | **Number** | Page number | [optional] [default to 1] |
 **id** | **[String]** | id | [optional]  |
 **jabberId** | **[String]** | A list of jabberIds to fetch by bulk (cannot be used with the id parameter) | [optional]  |
 **sortOrder** | **String** | Ascending or descending sort order | [optional] [default to ASC]<br />**Values**: ascending, descending |

### Return type

**GroupEntityListing**


## getGroupsSearch

> GroupsSearchResponse getGroupsSearch(q64, opts)


GET /api/v2/groups/search

Search groups using the q64 value returned from a previous search

Requires NO permissions:

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.GroupsApi();

let q64 = "q64_example"; // String | q64
let opts = { 
  'expand': ["expand_example"] // [String] | expand
};

apiInstance.getGroupsSearch(q64, opts)
  .then((data) => {
    console.log(`getGroupsSearch success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getGroupsSearch');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **q64** | **String** | q64 |  |
 **expand** | **[String]** | expand | [optional]  |

### Return type

**GroupsSearchResponse**


## getProfilesGroups

> GroupProfileEntityListing getProfilesGroups(opts)

:::{"alert":"warning","title":"Deprecated","collapsible":false,"autoCollapse":false}
This resource has been deprecated
:::

GET /api/v2/profiles/groups

Get group profile listing

This api is deprecated. Use /api/v2/groups instead.

Requires NO permissions:

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.GroupsApi();

let opts = { 
  'pageSize': 25, // Number | Page size
  'pageNumber': 1, // Number | Page number
  'id': ["id_example"], // [String] | id
  'jabberId': ["jabberId_example"], // [String] | A list of jabberIds to fetch by bulk (cannot be used with the id parameter)
  'sortOrder': "ASC" // String | Ascending or descending sort order
};

apiInstance.getProfilesGroups(opts)
  .then((data) => {
    console.log(`getProfilesGroups success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getProfilesGroups');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **pageSize** | **Number** | Page size | [optional] [default to 25] |
 **pageNumber** | **Number** | Page number | [optional] [default to 1] |
 **id** | **[String]** | id | [optional]  |
 **jabberId** | **[String]** | A list of jabberIds to fetch by bulk (cannot be used with the id parameter) | [optional]  |
 **sortOrder** | **String** | Ascending or descending sort order | [optional] [default to ASC]<br />**Values**: ascending, descending |

### Return type

**GroupProfileEntityListing**


## postGroupMembers

> **Object** postGroupMembers(groupId, body)


POST /api/v2/groups/{groupId}/members

Add members

Requires NO permissions:

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.GroupsApi();

let groupId = "groupId_example"; // String | Group ID
let body = {}; // Object | Add members

apiInstance.postGroupMembers(groupId, body)
  .then((data) => {
    console.log(`postGroupMembers success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling postGroupMembers');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **groupId** | **String** | Group ID |  |
 **body** | **Object** | Add members |  |

### Return type

**Object**


## postGroups

> Group postGroups(body)


POST /api/v2/groups

Create a group

Requires ANY permissions:

* directory:group:add

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.GroupsApi();

let body = {}; // Object | Group

apiInstance.postGroups(body)
  .then((data) => {
    console.log(`postGroups success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling postGroups');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **body** | **Object** | Group |  |

### Return type

**Group**


## postGroupsDynamicsettingsPreview

> DynamicGroupQueryPreview postGroupsDynamicsettingsPreview(body)

:::{"alert":"warning","title":"Deprecated","collapsible":false,"autoCollapse":false}
This resource has been deprecated
:::

POST /api/v2/groups/dynamicsettings/preview

Preview the number of users selected for a dynamic group definition query

postGroupsDynamicsettingsPreview is a preview method and is subject to both breaking and non-breaking changes at any time without notice

Requires ANY permissions:

* directory:group:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.GroupsApi();

let body = {}; // Object | Group query to preview

apiInstance.postGroupsDynamicsettingsPreview(body)
  .then((data) => {
    console.log(`postGroupsDynamicsettingsPreview success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling postGroupsDynamicsettingsPreview');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **body** | **Object** | Group query to preview |  |

### Return type

**DynamicGroupQueryPreview**


## postGroupsSearch

> GroupsSearchResponse postGroupsSearch(body)


POST /api/v2/groups/search

Search groups

Requires NO permissions:

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.GroupsApi();

let body = {}; // Object | Search request options

apiInstance.postGroupsSearch(body)
  .then((data) => {
    console.log(`postGroupsSearch success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling postGroupsSearch');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **body** | **Object** | Search request options |  |

### Return type

**GroupsSearchResponse**


## putGroup

> Group putGroup(groupId, opts)


PUT /api/v2/groups/{groupId}

Update group

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

let apiInstance = new platformClient.GroupsApi();

let groupId = "groupId_example"; // String | Group ID
let opts = { 
  'body': {} // Object | Group
};

apiInstance.putGroup(groupId, opts)
  .then((data) => {
    console.log(`putGroup success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling putGroup');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **groupId** | **String** | Group ID |  |
 **body** | **Object** | Group | [optional]  |

### Return type

**Group**


## putGroupDynamicsettings

> void putGroupDynamicsettings(groupId, body)


PUT /api/v2/groups/{groupId}/dynamicsettings

Create / Update dynamic group definition

putGroupDynamicsettings is a preview method and is subject to both breaking and non-breaking changes at any time without notice

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

let apiInstance = new platformClient.GroupsApi();

let groupId = "groupId_example"; // String | Group ID
let body = {}; // Object | Create/Update dynamic groups

apiInstance.putGroupDynamicsettings(groupId, body)
  .then(() => {
    console.log('putGroupDynamicsettings returned successfully.');
  })
  .catch((err) => {
    console.log('There was a failure calling putGroupDynamicsettings');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **groupId** | **String** | Group ID |  |
 **body** | **Object** | Create/Update dynamic groups |  |

### Return type

void (no response body)


_purecloud-platform-client-v2@229.1.0_
