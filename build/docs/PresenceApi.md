---
title: PresenceApi
---
# platformClient.PresenceApi

All URIs are relative to *https://api.mypurecloud.com*

| Method | HTTP request | Description |
| ------------- | ------------- | ------------- |
[**deletePresenceDefinition0**](PresenceApi.html#deletePresenceDefinition0) | **DELETE** /api/v2/presence/definitions/{definitionId} | Delete a Presence Definition
[**deletePresenceSource**](PresenceApi.html#deletePresenceSource) | **DELETE** /api/v2/presence/sources/{sourceId} | Delete a Presence Source
[**deletePresencedefinition**](PresenceApi.html#deletePresencedefinition) | **DELETE** /api/v2/presencedefinitions/{presenceId} | Delete a Presence Definition
[**getPresenceDefinition0**](PresenceApi.html#getPresenceDefinition0) | **GET** /api/v2/presence/definitions/{definitionId} | Get a Presence Definition
[**getPresenceDefinitions0**](PresenceApi.html#getPresenceDefinitions0) | **GET** /api/v2/presence/definitions | Get a list of Presence Definitions
[**getPresenceSettings**](PresenceApi.html#getPresenceSettings) | **GET** /api/v2/presence/settings | Get the presence settings
[**getPresenceSource**](PresenceApi.html#getPresenceSource) | **GET** /api/v2/presence/sources/{sourceId} | Get a Presence Source
[**getPresenceSources**](PresenceApi.html#getPresenceSources) | **GET** /api/v2/presence/sources | Get a list of Presence Sources
[**getPresenceUserPrimarysource**](PresenceApi.html#getPresenceUserPrimarysource) | **GET** /api/v2/presence/users/{userId}/primarysource | Get a user's Primary Presence Source
[**getPresencedefinition**](PresenceApi.html#getPresencedefinition) | **GET** /api/v2/presencedefinitions/{presenceId} | Get a Presence Definition
[**getPresencedefinitions**](PresenceApi.html#getPresencedefinitions) | **GET** /api/v2/presencedefinitions | Get an Organization's list of Presence Definitions
[**getSystempresences**](PresenceApi.html#getSystempresences) | **GET** /api/v2/systempresences | Get the list of SystemPresences
[**getUserPresence**](PresenceApi.html#getUserPresence) | **GET** /api/v2/users/{userId}/presences/{sourceId} | Get a user's Presence
[**getUserPresencesPurecloud**](PresenceApi.html#getUserPresencesPurecloud) | **GET** /api/v2/users/{userId}/presences/purecloud | Get a user's Genesys Cloud presence.
[**getUsersPresenceBulk**](PresenceApi.html#getUsersPresenceBulk) | **GET** /api/v2/users/presences/{sourceId}/bulk | Get bulk user presences for a single presence source
[**getUsersPresencesPurecloudBulk**](PresenceApi.html#getUsersPresencesPurecloudBulk) | **GET** /api/v2/users/presences/purecloud/bulk | Get bulk user presences for a Genesys Cloud (PURECLOUD) presence source
[**patchUserPresence**](PresenceApi.html#patchUserPresence) | **PATCH** /api/v2/users/{userId}/presences/{sourceId} | Patch a user's Presence
[**patchUserPresencesPurecloud**](PresenceApi.html#patchUserPresencesPurecloud) | **PATCH** /api/v2/users/{userId}/presences/purecloud | Patch a Genesys Cloud user's presence
[**postPresenceDefinitions0**](PresenceApi.html#postPresenceDefinitions0) | **POST** /api/v2/presence/definitions | Create a Presence Definition
[**postPresenceSources**](PresenceApi.html#postPresenceSources) | **POST** /api/v2/presence/sources | Create a Presence Source
[**postPresencedefinitions**](PresenceApi.html#postPresencedefinitions) | **POST** /api/v2/presencedefinitions | Create a Presence Definition
[**putPresenceDefinition0**](PresenceApi.html#putPresenceDefinition0) | **PUT** /api/v2/presence/definitions/{definitionId} | Update a Presence Definition
[**putPresenceSettings**](PresenceApi.html#putPresenceSettings) | **PUT** /api/v2/presence/settings | Update the presence settings
[**putPresenceSource**](PresenceApi.html#putPresenceSource) | **PUT** /api/v2/presence/sources/{sourceId} | Update a Presence Source
[**putPresenceUserPrimarysource**](PresenceApi.html#putPresenceUserPrimarysource) | **PUT** /api/v2/presence/users/{userId}/primarysource | Update a user's Primary Presence Source
[**putPresencedefinition**](PresenceApi.html#putPresencedefinition) | **PUT** /api/v2/presencedefinitions/{presenceId} | Update a Presence Definition
[**putUsersPresencesBulk**](PresenceApi.html#putUsersPresencesBulk) | **PUT** /api/v2/users/presences/bulk | Update bulk user Presences
{: class="table table-striped"}

<a name="deletePresenceDefinition0"></a>

# void deletePresenceDefinition0(definitionId)


DELETE /api/v2/presence/definitions/{definitionId}

Delete a Presence Definition

deletePresenceDefinition0 is a preview method and is subject to both breaking and non-breaking changes at any time without notice

Requires ANY permissions:

* presence:presenceDefinition:delete
* presence:presenceDefinition:edit

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.PresenceApi();

let definitionId = "definitionId_example"; // String | Presence Definition ID

apiInstance.deletePresenceDefinition0(definitionId)
  .then(() => {
    console.log('deletePresenceDefinition0 returned successfully.');
  })
  .catch((err) => {
    console.log('There was a failure calling deletePresenceDefinition0');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **definitionId** | **String** | Presence Definition ID |  |
{: class="table table-striped"}

### Return type

void (no response body)

<a name="deletePresenceSource"></a>

# void deletePresenceSource(sourceId)


DELETE /api/v2/presence/sources/{sourceId}

Delete a Presence Source

Requires ANY permissions:

* presence:source:delete
* presence:source:edit

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.PresenceApi();

let sourceId = "sourceId_example"; // String | Presence Source ID

apiInstance.deletePresenceSource(sourceId)
  .then(() => {
    console.log('deletePresenceSource returned successfully.');
  })
  .catch((err) => {
    console.log('There was a failure calling deletePresenceSource');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **sourceId** | **String** | Presence Source ID |  |
{: class="table table-striped"}

### Return type

void (no response body)

<a name="deletePresencedefinition"></a>

# void deletePresencedefinition(presenceId)


DELETE /api/v2/presencedefinitions/{presenceId}

Delete a Presence Definition

Requires ALL permissions:

* presence:presenceDefinition:delete

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.PresenceApi();

let presenceId = "presenceId_example"; // String | Organization Presence ID

apiInstance.deletePresencedefinition(presenceId)
  .then(() => {
    console.log('deletePresencedefinition returned successfully.');
  })
  .catch((err) => {
    console.log('There was a failure calling deletePresencedefinition');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **presenceId** | **String** | Organization Presence ID |  |
{: class="table table-striped"}

### Return type

void (no response body)

<a name="getPresenceDefinition0"></a>

# OrganizationPresenceDefinition getPresenceDefinition0(definitionId)


GET /api/v2/presence/definitions/{definitionId}

Get a Presence Definition

getPresenceDefinition0 is a preview method and is subject to both breaking and non-breaking changes at any time without notice

Requires ALL permissions:

* presence:presenceDefinition:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.PresenceApi();

let definitionId = "definitionId_example"; // String | Presence Definition ID

apiInstance.getPresenceDefinition0(definitionId)
  .then((data) => {
    console.log(`getPresenceDefinition0 success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getPresenceDefinition0');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **definitionId** | **String** | Presence Definition ID |  |
{: class="table table-striped"}

### Return type

**OrganizationPresenceDefinition**

<a name="getPresenceDefinitions0"></a>

# OrganizationPresenceDefinitionEntityListing getPresenceDefinitions0(opts)


GET /api/v2/presence/definitions

Get a list of Presence Definitions

getPresenceDefinitions0 is a preview method and is subject to both breaking and non-breaking changes at any time without notice

Requires ALL permissions:

* presence:presenceDefinition:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.PresenceApi();

let opts = { 
  'deactivated': "false", // String | Deactivated query can be TRUE or FALSE
  'divisionId': ["divisionId_example"] // [String] | One or more division IDs. If nothing is provided, the definitions associated withthe list of divisions that the user has access to will be returned.
};

apiInstance.getPresenceDefinitions0(opts)
  .then((data) => {
    console.log(`getPresenceDefinitions0 success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getPresenceDefinitions0');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **deactivated** | **String** | Deactivated query can be TRUE or FALSE | [optional] [default to false] |
 **divisionId** | **[String]** | One or more division IDs. If nothing is provided, the definitions associated withthe list of divisions that the user has access to will be returned. | [optional]  |
{: class="table table-striped"}

### Return type

**OrganizationPresenceDefinitionEntityListing**

<a name="getPresenceSettings"></a>

# PresenceSettings getPresenceSettings()


GET /api/v2/presence/settings

Get the presence settings

Requires ALL permissions:

* presence:settings:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.PresenceApi();

apiInstance.getPresenceSettings()
  .then((data) => {
    console.log(`getPresenceSettings success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getPresenceSettings');
    console.error(err);
  });
```

### Parameters

This endpoint does not need any parameter.


### Return type

**PresenceSettings**

<a name="getPresenceSource"></a>

# Source getPresenceSource(sourceId)


GET /api/v2/presence/sources/{sourceId}

Get a Presence Source

Requires ALL permissions:

* presence:source:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.PresenceApi();

let sourceId = "sourceId_example"; // String | Presence Source ID

apiInstance.getPresenceSource(sourceId)
  .then((data) => {
    console.log(`getPresenceSource success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getPresenceSource');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **sourceId** | **String** | Presence Source ID |  |
{: class="table table-striped"}

### Return type

**Source**

<a name="getPresenceSources"></a>

# SourceEntityListing getPresenceSources(opts)


GET /api/v2/presence/sources

Get a list of Presence Sources

Requires ALL permissions:

* presence:source:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.PresenceApi();

let opts = { 
  'deactivated': "false" // String | Deactivated query can be TRUE or FALSE
};

apiInstance.getPresenceSources(opts)
  .then((data) => {
    console.log(`getPresenceSources success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getPresenceSources');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **deactivated** | **String** | Deactivated query can be TRUE or FALSE | [optional] [default to false] |
{: class="table table-striped"}

### Return type

**SourceEntityListing**

<a name="getPresenceUserPrimarysource"></a>

# UserPrimarySource getPresenceUserPrimarysource(userId)


GET /api/v2/presence/users/{userId}/primarysource

Get a user's Primary Presence Source

Requires ALL permissions:

* presence:userPrimarySource:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.PresenceApi();

let userId = "userId_example"; // String | user ID

apiInstance.getPresenceUserPrimarysource(userId)
  .then((data) => {
    console.log(`getPresenceUserPrimarysource success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getPresenceUserPrimarysource');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **userId** | **String** | user ID |  |
{: class="table table-striped"}

### Return type

**UserPrimarySource**

<a name="getPresencedefinition"></a>

# OrganizationPresence getPresencedefinition(presenceId, opts)


GET /api/v2/presencedefinitions/{presenceId}

Get a Presence Definition

Requires ALL permissions:

* presence:presenceDefinition:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.PresenceApi();

let presenceId = "presenceId_example"; // String | Organization Presence ID
let opts = { 
  'localeCode': "localeCode_example" // String | The locale code to fetch for the presence definition. Use ALL to fetch everything.
};

apiInstance.getPresencedefinition(presenceId, opts)
  .then((data) => {
    console.log(`getPresencedefinition success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getPresencedefinition');
    console.error(err);
  });
```

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

Get an Organization's list of Presence Definitions

Requires NO permissions:

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.PresenceApi();

let opts = { 
  'pageNumber': 1, // Number | Page number
  'pageSize': 25, // Number | Page size
  'deleted': "false", // String | Deleted query can be TRUE, FALSE or ALL
  'localeCode': "localeCode_example" // String | The locale code to fetch for each presence definition. Use ALL to fetch everything.
};

apiInstance.getPresencedefinitions(opts)
  .then((data) => {
    console.log(`getPresencedefinitions success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getPresencedefinitions');
    console.error(err);
  });
```

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

Requires NO permissions:

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.PresenceApi();

apiInstance.getSystempresences()
  .then((data) => {
    console.log(`getSystempresences success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getSystempresences');
    console.error(err);
  });
```

### Parameters

This endpoint does not need any parameter.


### Return type

**[SystemPresence]**

<a name="getUserPresence"></a>

# UserPresence getUserPresence(userId, sourceId)


GET /api/v2/users/{userId}/presences/{sourceId}

Get a user's Presence

Get a users presence for the specified source that is not specifically listed.  Used to support custom presence sources. This endpoint does not support registered presence sources.

Requires NO permissions:

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.PresenceApi();

let userId = "userId_example"; // String | user Id
let sourceId = "sourceId_example"; // String | Presence source ID

apiInstance.getUserPresence(userId, sourceId)
  .then((data) => {
    console.log(`getUserPresence success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getUserPresence');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **userId** | **String** | user Id |  |
 **sourceId** | **String** | Presence source ID |  |
{: class="table table-striped"}

### Return type

**UserPresence**

<a name="getUserPresencesPurecloud"></a>

# UserPresence getUserPresencesPurecloud(userId)


GET /api/v2/users/{userId}/presences/purecloud

Get a user's Genesys Cloud presence.

Get the default Genesys Cloud user presence source PURECLOUD

Requires NO permissions:

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.PresenceApi();

let userId = "userId_example"; // String | user Id

apiInstance.getUserPresencesPurecloud(userId)
  .then((data) => {
    console.log(`getUserPresencesPurecloud success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getUserPresencesPurecloud');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **userId** | **String** | user Id |  |
{: class="table table-striped"}

### Return type

**UserPresence**

<a name="getUsersPresenceBulk"></a>

# [UcUserPresence] getUsersPresenceBulk(sourceId, opts)


GET /api/v2/users/presences/{sourceId}/bulk

Get bulk user presences for a single presence source

Requires NO permissions:

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.PresenceApi();

let sourceId = "sourceId_example"; // String | The requested presence source ID.
let opts = { 
  'id': ["id_example"] // [String] | A comma separated list of user IDs to fetch their presence status in bulk. Limit 50.
};

apiInstance.getUsersPresenceBulk(sourceId, opts)
  .then((data) => {
    console.log(`getUsersPresenceBulk success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getUsersPresenceBulk');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **sourceId** | **String** | The requested presence source ID. |  |
 **id** | **[String]** | A comma separated list of user IDs to fetch their presence status in bulk. Limit 50. | [optional]  |
{: class="table table-striped"}

### Return type

**[UcUserPresence]**

<a name="getUsersPresencesPurecloudBulk"></a>

# [UcUserPresence] getUsersPresencesPurecloudBulk(opts)


GET /api/v2/users/presences/purecloud/bulk

Get bulk user presences for a Genesys Cloud (PURECLOUD) presence source

Requires NO permissions:

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.PresenceApi();

let opts = { 
  'id': ["id_example"] // [String] | A comma separated list of user IDs to fetch their presence status in bulk. Limit 50.
};

apiInstance.getUsersPresencesPurecloudBulk(opts)
  .then((data) => {
    console.log(`getUsersPresencesPurecloudBulk success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getUsersPresencesPurecloudBulk');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **id** | **[String]** | A comma separated list of user IDs to fetch their presence status in bulk. Limit 50. | [optional]  |
{: class="table table-striped"}

### Return type

**[UcUserPresence]**

<a name="patchUserPresence"></a>

# UserPresence patchUserPresence(userId, sourceId, body)


PATCH /api/v2/users/{userId}/presences/{sourceId}

Patch a user's Presence

Patch a users presence for the specified source that is not specifically listed. This endpoint does not support registered presence sources. The presence object can be patched one of three ways. Option 1: Set the primary property to true. This will set the source defined in the path as the users primary presence source. Option 2: Provide the presenceDefinition value. The id is the only value required within the presenceDefinition. Option 3: Provide the message value. Option 1 can be combined with Option 2 and/or Option 3.

Requires NO permissions:

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.PresenceApi();

let userId = "userId_example"; // String | user Id
let sourceId = "sourceId_example"; // String | Presence source ID
let body = {}; // Object | User presence

apiInstance.patchUserPresence(userId, sourceId, body)
  .then((data) => {
    console.log(`patchUserPresence success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling patchUserPresence');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **userId** | **String** | user Id |  |
 **sourceId** | **String** | Presence source ID |  |
 **body** | **Object** | User presence |  |
{: class="table table-striped"}

### Return type

**UserPresence**

<a name="patchUserPresencesPurecloud"></a>

# UserPresence patchUserPresencesPurecloud(userId, body)


PATCH /api/v2/users/{userId}/presences/purecloud

Patch a Genesys Cloud user's presence

The presence object can be patched one of three ways. Option 1: Set the primary property to true. This will set the PURECLOUD source as the users primary presence source. Option 2: Provide the presenceDefinition value. The id is the only value required within the presenceDefinition. Option 3: Provide the message value. Option 1 can be combined with Option 2 and/or Option 3.

Requires NO permissions:

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.PresenceApi();

let userId = "userId_example"; // String | user Id
let body = {}; // Object | User presence

apiInstance.patchUserPresencesPurecloud(userId, body)
  .then((data) => {
    console.log(`patchUserPresencesPurecloud success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling patchUserPresencesPurecloud');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **userId** | **String** | user Id |  |
 **body** | **Object** | User presence |  |
{: class="table table-striped"}

### Return type

**UserPresence**

<a name="postPresenceDefinitions0"></a>

# OrganizationPresenceDefinition postPresenceDefinitions0(body)


POST /api/v2/presence/definitions

Create a Presence Definition

postPresenceDefinitions0 is a preview method and is subject to both breaking and non-breaking changes at any time without notice

Requires ALL permissions:

* presence:presenceDefinition:add

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.PresenceApi();

let body = {}; // Object | The Presence Definition to create

apiInstance.postPresenceDefinitions0(body)
  .then((data) => {
    console.log(`postPresenceDefinitions0 success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling postPresenceDefinitions0');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **body** | **Object** | The Presence Definition to create |  |
{: class="table table-striped"}

### Return type

**OrganizationPresenceDefinition**

<a name="postPresenceSources"></a>

# Source postPresenceSources(body)


POST /api/v2/presence/sources

Create a Presence Source

Requires ALL permissions:

* presence:source:add

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.PresenceApi();

let body = {}; // Object | The Presence Source to create

apiInstance.postPresenceSources(body)
  .then((data) => {
    console.log(`postPresenceSources success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling postPresenceSources');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **body** | **Object** | The Presence Source to create |  |
{: class="table table-striped"}

### Return type

**Source**

<a name="postPresencedefinitions"></a>

# OrganizationPresence postPresencedefinitions(body)


POST /api/v2/presencedefinitions

Create a Presence Definition

Requires ALL permissions:

* presence:presenceDefinition:add

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.PresenceApi();

let body = {}; // Object | The Presence Definition to create

apiInstance.postPresencedefinitions(body)
  .then((data) => {
    console.log(`postPresencedefinitions success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling postPresencedefinitions');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **body** | **Object** | The Presence Definition to create |  |
{: class="table table-striped"}

### Return type

**OrganizationPresence**

<a name="putPresenceDefinition0"></a>

# OrganizationPresenceDefinition putPresenceDefinition0(definitionId, body)


PUT /api/v2/presence/definitions/{definitionId}

Update a Presence Definition

putPresenceDefinition0 is a preview method and is subject to both breaking and non-breaking changes at any time without notice

Requires ALL permissions:

* presence:presenceDefinition:edit

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.PresenceApi();

let definitionId = "definitionId_example"; // String | Presence Definition ID
let body = {}; // Object | The updated Presence Definition

apiInstance.putPresenceDefinition0(definitionId, body)
  .then((data) => {
    console.log(`putPresenceDefinition0 success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling putPresenceDefinition0');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **definitionId** | **String** | Presence Definition ID |  |
 **body** | **Object** | The updated Presence Definition |  |
{: class="table table-striped"}

### Return type

**OrganizationPresenceDefinition**

<a name="putPresenceSettings"></a>

# PresenceSettings putPresenceSettings(body)


PUT /api/v2/presence/settings

Update the presence settings

Requires ALL permissions:

* presence:settings:edit

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.PresenceApi();

let body = {}; // Object | Presence Settings

apiInstance.putPresenceSettings(body)
  .then((data) => {
    console.log(`putPresenceSettings success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling putPresenceSettings');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **body** | **Object** | Presence Settings |  |
{: class="table table-striped"}

### Return type

**PresenceSettings**

<a name="putPresenceSource"></a>

# Source putPresenceSource(sourceId, body)


PUT /api/v2/presence/sources/{sourceId}

Update a Presence Source

Requires ALL permissions:

* presence:source:edit

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.PresenceApi();

let sourceId = "sourceId_example"; // String | Presence Source ID
let body = {}; // Object | The updated Presence Source

apiInstance.putPresenceSource(sourceId, body)
  .then((data) => {
    console.log(`putPresenceSource success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling putPresenceSource');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **sourceId** | **String** | Presence Source ID |  |
 **body** | **Object** | The updated Presence Source |  |
{: class="table table-striped"}

### Return type

**Source**

<a name="putPresenceUserPrimarysource"></a>

# UserPrimarySource putPresenceUserPrimarysource(userId, body)


PUT /api/v2/presence/users/{userId}/primarysource

Update a user's Primary Presence Source

Requires ALL permissions:

* presence:userPrimarySource:edit

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.PresenceApi();

let userId = "userId_example"; // String | user ID
let body = {}; // Object | Primary Source

apiInstance.putPresenceUserPrimarysource(userId, body)
  .then((data) => {
    console.log(`putPresenceUserPrimarysource success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling putPresenceUserPrimarysource');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **userId** | **String** | user ID |  |
 **body** | **Object** | Primary Source |  |
{: class="table table-striped"}

### Return type

**UserPrimarySource**

<a name="putPresencedefinition"></a>

# OrganizationPresence putPresencedefinition(presenceId, body)


PUT /api/v2/presencedefinitions/{presenceId}

Update a Presence Definition

Requires ALL permissions:

* presence:presenceDefinition:edit

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.PresenceApi();

let presenceId = "presenceId_example"; // String | Organization Presence ID
let body = {}; // Object | The OrganizationPresence to update

apiInstance.putPresencedefinition(presenceId, body)
  .then((data) => {
    console.log(`putPresencedefinition success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling putPresencedefinition');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **presenceId** | **String** | Organization Presence ID |  |
 **body** | **Object** | The OrganizationPresence to update |  |
{: class="table table-striped"}

### Return type

**OrganizationPresence**

<a name="putUsersPresencesBulk"></a>

# [UserPresence] putUsersPresencesBulk(body)


PUT /api/v2/users/presences/bulk

Update bulk user Presences

Requires ANY permissions:

* presence:userPresence:edit

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.PresenceApi();

let body = [{}]; // Object | List of User presences

apiInstance.putUsersPresencesBulk(body)
  .then((data) => {
    console.log(`putUsersPresencesBulk success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling putUsersPresencesBulk');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **body** | **Object** | List of User presences |  |
{: class="table table-striped"}

### Return type

**[UserPresence]**

