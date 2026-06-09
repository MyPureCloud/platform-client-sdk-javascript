# PresenceApi

# platformClient.PresenceApi

All URIs are relative to *https://api.mypurecloud.com*

| Method | HTTP request | Description |
| ------------- | ------------- | ------------- |
[**deletePresenceDefinition0**](PresenceApi#deletePresenceDefinition0) | **DELETE** /api/v2/presence/definitions/{definitionId} | Delete a Presence Definition
[**deletePresenceSource**](PresenceApi#deletePresenceSource) | **DELETE** /api/v2/presence/sources/{sourceId} | Delete a Presence Source
[**deletePresencedefinition**](PresenceApi#deletePresencedefinition) | **DELETE** /api/v2/presencedefinitions/{presenceId} | Delete a Presence Definition. Apps should migrate to use DELETE /api/v2/presence/definitions/{definitionId} instead
[**getPresenceDefinition0**](PresenceApi#getPresenceDefinition0) | **GET** /api/v2/presence/definitions/{definitionId} | Get a Presence Definition
[**getPresenceDefinitions0**](PresenceApi#getPresenceDefinitions0) | **GET** /api/v2/presence/definitions | Get a list of Presence Definitions
[**getPresenceSettings**](PresenceApi#getPresenceSettings) | **GET** /api/v2/presence/settings | Get the presence settings
[**getPresenceSource**](PresenceApi#getPresenceSource) | **GET** /api/v2/presence/sources/{sourceId} | Get a Presence Source
[**getPresenceSources**](PresenceApi#getPresenceSources) | **GET** /api/v2/presence/sources | Get a list of Presence Sources
[**getPresenceUserPrimarysource**](PresenceApi#getPresenceUserPrimarysource) | **GET** /api/v2/presence/users/{userId}/primarysource | Get a user's Primary Presence Source
[**getPresencedefinition**](PresenceApi#getPresencedefinition) | **GET** /api/v2/presencedefinitions/{presenceId} | Get a Presence Definition. Apps should migrate to use GET /api/v2/presence/definitions/{definitionId} instead
[**getPresencedefinitions**](PresenceApi#getPresencedefinitions) | **GET** /api/v2/presencedefinitions | Get an Organization's list of Presence Definitions. Apps should migrate to use GET /api/v2/presence/definitions instead
[**getSystempresences**](PresenceApi#getSystempresences) | **GET** /api/v2/systempresences | Get the list of SystemPresences
[**getUserPresence**](PresenceApi#getUserPresence) | **GET** /api/v2/users/{userId}/presences/{sourceId} | Get a user's Presence
[**getUserPresencesPurecloud**](PresenceApi#getUserPresencesPurecloud) | **GET** /api/v2/users/{userId}/presences/purecloud | Get a user's Genesys Cloud presence.
[**getUsersPresenceBulk**](PresenceApi#getUsersPresenceBulk) | **GET** /api/v2/users/presences/{sourceId}/bulk | Get bulk user presences for a single presence source
[**getUsersPresencesPurecloudBulk**](PresenceApi#getUsersPresencesPurecloudBulk) | **GET** /api/v2/users/presences/purecloud/bulk | Get bulk user presences for a Genesys Cloud (PURECLOUD) presence source
[**patchUserPresence**](PresenceApi#patchUserPresence) | **PATCH** /api/v2/users/{userId}/presences/{sourceId} | Patch a user's Presence
[**patchUserPresencesPurecloud**](PresenceApi#patchUserPresencesPurecloud) | **PATCH** /api/v2/users/{userId}/presences/purecloud | Patch a Genesys Cloud user's presence
[**postPresenceDefinitions0**](PresenceApi#postPresenceDefinitions0) | **POST** /api/v2/presence/definitions | Create a Presence Definition
[**postPresenceSources**](PresenceApi#postPresenceSources) | **POST** /api/v2/presence/sources | Create a Presence Source
[**postPresencedefinitions**](PresenceApi#postPresencedefinitions) | **POST** /api/v2/presencedefinitions | Create a Presence Definition. Apps should migrate to use POST /api/v2/presence/definitions instead
[**putPresenceDefinition0**](PresenceApi#putPresenceDefinition0) | **PUT** /api/v2/presence/definitions/{definitionId} | Update a Presence Definition
[**putPresenceSettings**](PresenceApi#putPresenceSettings) | **PUT** /api/v2/presence/settings | Update the presence settings
[**putPresenceSource**](PresenceApi#putPresenceSource) | **PUT** /api/v2/presence/sources/{sourceId} | Update a Presence Source
[**putPresenceUserPrimarysource**](PresenceApi#putPresenceUserPrimarysource) | **PUT** /api/v2/presence/users/{userId}/primarysource | Update a user's Primary Presence Source
[**putPresencedefinition**](PresenceApi#putPresencedefinition) | **PUT** /api/v2/presencedefinitions/{presenceId} | Update a Presence Definition. Apps should migrate to use PUT /api/v2/presence/definitions/{definitionId} instead)
[**putUsersPresencesBulk**](PresenceApi#putUsersPresencesBulk) | **PUT** /api/v2/users/presences/bulk | Update bulk user Presences



## deletePresenceDefinition0

> void deletePresenceDefinition0(definitionId, opts)


DELETE /api/v2/presence/definitions/{definitionId}

Delete a Presence Definition

Requires ANY permissions:

* presence:presenceDefinition:delete
* presence:presenceDefinition:edit

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.PresenceApi();

let definitionId = "definitionId_example"; // String | Presence Definition ID
let opts = { 
  'customHeaders': {  // Object.<string, string> | Request Custom Headers
    'X-Service-Name': 'customer-service',
    'X-Request-ID': 'req-12345'
  }
};

apiInstance.deletePresenceDefinition0(definitionId, opts)
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
 **customHeaders** | **Object.<string, string>** | Request Custom Headers | [optional] |

### Return type

void (no response body)


## deletePresenceSource

> void deletePresenceSource(sourceId, opts)


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

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.PresenceApi();

let sourceId = "sourceId_example"; // String | Presence Source ID
let opts = { 
  'customHeaders': {  // Object.<string, string> | Request Custom Headers
    'X-Service-Name': 'customer-service',
    'X-Request-ID': 'req-12345'
  }
};

apiInstance.deletePresenceSource(sourceId, opts)
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
 **customHeaders** | **Object.<string, string>** | Request Custom Headers | [optional] |

### Return type

void (no response body)


## deletePresencedefinition

> void deletePresencedefinition(presenceId, opts)

:::{"alert":"warning","title":"Deprecated","collapsible":false,"autoCollapse":false}
This resource has been deprecated
:::

DELETE /api/v2/presencedefinitions/{presenceId}

Delete a Presence Definition. Apps should migrate to use DELETE /api/v2/presence/definitions/{definitionId} instead

Requires ALL permissions:

* presence:presenceDefinition:delete

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.PresenceApi();

let presenceId = "presenceId_example"; // String | Organization Presence ID
let opts = { 
  'customHeaders': {  // Object.<string, string> | Request Custom Headers
    'X-Service-Name': 'customer-service',
    'X-Request-ID': 'req-12345'
  }
};

apiInstance.deletePresencedefinition(presenceId, opts)
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
 **customHeaders** | **Object.<string, string>** | Request Custom Headers | [optional] |

### Return type

void (no response body)


## getPresenceDefinition0

> OrganizationPresenceDefinition getPresenceDefinition0(definitionId, opts)


GET /api/v2/presence/definitions/{definitionId}

Get a Presence Definition

Requires ALL permissions:

* presence:presenceDefinition:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.PresenceApi();

let definitionId = "definitionId_example"; // String | Presence Definition ID
let opts = { 
  'localeCode': "localeCode_example", // String | The locale code to fetch for the presence definition. Use ALL to fetch everything.
  'customHeaders': {  // Object.<string, string> | Request Custom Headers
    'X-Service-Name': 'customer-service',
    'X-Request-ID': 'req-12345'
  }
};

apiInstance.getPresenceDefinition0(definitionId, opts)
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
 **localeCode** | **String** | The locale code to fetch for the presence definition. Use ALL to fetch everything. | [optional] <br />**Values**: ALL, he, fr, en_US, da, de, it, cs, es, fi, ar, ja, ko, nl, no, pl, pt_BR, pt_PT, ru, sv, th, tr, uk, zh_CN, zh_TW |
 **customHeaders** | **Object.<string, string>** | Request Custom Headers | [optional] |

### Return type

**OrganizationPresenceDefinition**


## getPresenceDefinitions0

> OrganizationPresenceDefinitionEntityListing getPresenceDefinitions0(opts)


GET /api/v2/presence/definitions

Get a list of Presence Definitions

Requires ALL permissions:

* presence:presenceDefinition:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.PresenceApi();

let opts = { 
  'deactivated': "false", // String | Deactivated query can be TRUE or FALSE
  'divisionId': ["divisionId_example"], // [String] | One or more division IDs. If nothing is provided, the definitions associated withthe list of divisions that the user has access to will be returned.
  'localeCode': "localeCode_example", // String | The locale code to fetch for the presence definition. Use ALL to fetch everything.
  'customHeaders': {  // Object.<string, string> | Request Custom Headers
    'X-Service-Name': 'customer-service',
    'X-Request-ID': 'req-12345'
  }
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
 **localeCode** | **String** | The locale code to fetch for the presence definition. Use ALL to fetch everything. | [optional] <br />**Values**: ALL, he, fr, en_US, da, de, it, cs, es, fi, ar, ja, ko, nl, no, pl, pt_BR, pt_PT, ru, sv, th, tr, uk, zh_CN, zh_TW |
 **customHeaders** | **Object.<string, string>** | Request Custom Headers | [optional] |

### Return type

**OrganizationPresenceDefinitionEntityListing**


## getPresenceSettings

> PresenceSettings getPresenceSettings(opts)


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

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.PresenceApi();
let opts = { 
  'customHeaders': {  // Object.<string, string> | Request Custom Headers
    'X-Service-Name': 'customer-service',
    'X-Request-ID': 'req-12345'
  }
};

apiInstance.getPresenceSettings(opts)
  .then((data) => {
    console.log(`getPresenceSettings success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getPresenceSettings');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **customHeaders** | **Object.<string, string>** | Request Custom Headers | [optional] |

### Return type

**PresenceSettings**


## getPresenceSource

> Source getPresenceSource(sourceId, opts)


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

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.PresenceApi();

let sourceId = "sourceId_example"; // String | Presence Source ID
let opts = { 
  'customHeaders': {  // Object.<string, string> | Request Custom Headers
    'X-Service-Name': 'customer-service',
    'X-Request-ID': 'req-12345'
  }
};

apiInstance.getPresenceSource(sourceId, opts)
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
 **customHeaders** | **Object.<string, string>** | Request Custom Headers | [optional] |

### Return type

**Source**


## getPresenceSources

> SourceEntityListing getPresenceSources(opts)


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

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.PresenceApi();

let opts = { 
  'deactivated': "false", // String | Deactivated query can be TRUE or FALSE
  'customHeaders': {  // Object.<string, string> | Request Custom Headers
    'X-Service-Name': 'customer-service',
    'X-Request-ID': 'req-12345'
  }
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
 **customHeaders** | **Object.<string, string>** | Request Custom Headers | [optional] |

### Return type

**SourceEntityListing**


## getPresenceUserPrimarysource

> UserPrimarySource getPresenceUserPrimarysource(userId, opts)


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

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.PresenceApi();

let userId = "userId_example"; // String | user ID
let opts = { 
  'customHeaders': {  // Object.<string, string> | Request Custom Headers
    'X-Service-Name': 'customer-service',
    'X-Request-ID': 'req-12345'
  }
};

apiInstance.getPresenceUserPrimarysource(userId, opts)
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
 **customHeaders** | **Object.<string, string>** | Request Custom Headers | [optional] |

### Return type

**UserPrimarySource**


## getPresencedefinition

> OrganizationPresence getPresencedefinition(presenceId, opts)

:::{"alert":"warning","title":"Deprecated","collapsible":false,"autoCollapse":false}
This resource has been deprecated
:::

GET /api/v2/presencedefinitions/{presenceId}

Get a Presence Definition. Apps should migrate to use GET /api/v2/presence/definitions/{definitionId} instead

Requires ALL permissions:

* presence:presenceDefinition:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.PresenceApi();

let presenceId = "presenceId_example"; // String | Organization Presence ID
let opts = { 
  'localeCode': "localeCode_example", // String | The locale code to fetch for the presence definition. Use ALL to fetch everything.
  'customHeaders': {  // Object.<string, string> | Request Custom Headers
    'X-Service-Name': 'customer-service',
    'X-Request-ID': 'req-12345'
  }
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
 **customHeaders** | **Object.<string, string>** | Request Custom Headers | [optional] |

### Return type

**OrganizationPresence**


## getPresencedefinitions

> OrganizationPresenceEntityListing getPresencedefinitions(opts)

:::{"alert":"warning","title":"Deprecated","collapsible":false,"autoCollapse":false}
This resource has been deprecated
:::

GET /api/v2/presencedefinitions

Get an Organization's list of Presence Definitions. Apps should migrate to use GET /api/v2/presence/definitions instead

Requires NO permissions:

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.PresenceApi();

let opts = { 
  'pageNumber': 1, // Number | Page number
  'pageSize': 25, // Number | Page size
  'deleted': "false", // String | Deleted query can be TRUE, FALSE or ALL
  'localeCode': "localeCode_example", // String | The locale code to fetch for each presence definition. Use ALL to fetch everything.
  'customHeaders': {  // Object.<string, string> | Request Custom Headers
    'X-Service-Name': 'customer-service',
    'X-Request-ID': 'req-12345'
  }
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
 **customHeaders** | **Object.<string, string>** | Request Custom Headers | [optional] |

### Return type

**OrganizationPresenceEntityListing**


## getSystempresences

> [SystemPresence] getSystempresences(opts)


GET /api/v2/systempresences

Get the list of SystemPresences

Requires NO permissions:

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.PresenceApi();
let opts = { 
  'customHeaders': {  // Object.<string, string> | Request Custom Headers
    'X-Service-Name': 'customer-service',
    'X-Request-ID': 'req-12345'
  }
};

apiInstance.getSystempresences(opts)
  .then((data) => {
    console.log(`getSystempresences success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getSystempresences');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **customHeaders** | **Object.<string, string>** | Request Custom Headers | [optional] |

### Return type

**[SystemPresence]**


## getUserPresence

> UserPresence getUserPresence(userId, sourceId, opts)


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

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.PresenceApi();

let userId = "userId_example"; // String | user Id
let sourceId = "sourceId_example"; // String | Presence source ID
let opts = { 
  'customHeaders': {  // Object.<string, string> | Request Custom Headers
    'X-Service-Name': 'customer-service',
    'X-Request-ID': 'req-12345'
  }
};

apiInstance.getUserPresence(userId, sourceId, opts)
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
 **customHeaders** | **Object.<string, string>** | Request Custom Headers | [optional] |

### Return type

**UserPresence**


## getUserPresencesPurecloud

> UserPresence getUserPresencesPurecloud(userId, opts)


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

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.PresenceApi();

let userId = "userId_example"; // String | user Id
let opts = { 
  'customHeaders': {  // Object.<string, string> | Request Custom Headers
    'X-Service-Name': 'customer-service',
    'X-Request-ID': 'req-12345'
  }
};

apiInstance.getUserPresencesPurecloud(userId, opts)
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
 **customHeaders** | **Object.<string, string>** | Request Custom Headers | [optional] |

### Return type

**UserPresence**


## getUsersPresenceBulk

> [UcUserPresence] getUsersPresenceBulk(sourceId, opts)


GET /api/v2/users/presences/{sourceId}/bulk

Get bulk user presences for a single presence source

Requires NO permissions:

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.PresenceApi();

let sourceId = "sourceId_example"; // String | The requested presence source ID.
let opts = { 
  'id': ["id_example"], // [String] | A comma separated list of user IDs to fetch their presence status in bulk. Limit 50.
  'customHeaders': {  // Object.<string, string> | Request Custom Headers
    'X-Service-Name': 'customer-service',
    'X-Request-ID': 'req-12345'
  }
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
 **customHeaders** | **Object.<string, string>** | Request Custom Headers | [optional] |

### Return type

**[UcUserPresence]**


## getUsersPresencesPurecloudBulk

> [UcUserPresence] getUsersPresencesPurecloudBulk(opts)


GET /api/v2/users/presences/purecloud/bulk

Get bulk user presences for a Genesys Cloud (PURECLOUD) presence source

Requires NO permissions:

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.PresenceApi();

let opts = { 
  'id': ["id_example"], // [String] | A comma separated list of user IDs to fetch their presence status in bulk. Limit 50.
  'customHeaders': {  // Object.<string, string> | Request Custom Headers
    'X-Service-Name': 'customer-service',
    'X-Request-ID': 'req-12345'
  }
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
 **customHeaders** | **Object.<string, string>** | Request Custom Headers | [optional] |

### Return type

**[UcUserPresence]**


## patchUserPresence

> UserPresence patchUserPresence(userId, sourceId, body, opts)


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

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.PresenceApi();

let userId = "userId_example"; // String | user Id
let sourceId = "sourceId_example"; // String | Presence source ID
let body = {}; // Object | User presence
let opts = { 
  'customHeaders': {  // Object.<string, string> | Request Custom Headers
    'X-Service-Name': 'customer-service',
    'X-Request-ID': 'req-12345'
  }
};

apiInstance.patchUserPresence(userId, sourceId, body, opts)
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
 **customHeaders** | **Object.<string, string>** | Request Custom Headers | [optional] |

### Return type

**UserPresence**


## patchUserPresencesPurecloud

> UserPresence patchUserPresencesPurecloud(userId, body, opts)


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

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.PresenceApi();

let userId = "userId_example"; // String | user Id
let body = {}; // Object | User presence
let opts = { 
  'customHeaders': {  // Object.<string, string> | Request Custom Headers
    'X-Service-Name': 'customer-service',
    'X-Request-ID': 'req-12345'
  }
};

apiInstance.patchUserPresencesPurecloud(userId, body, opts)
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
 **customHeaders** | **Object.<string, string>** | Request Custom Headers | [optional] |

### Return type

**UserPresence**


## postPresenceDefinitions0

> OrganizationPresenceDefinition postPresenceDefinitions0(body, opts)


POST /api/v2/presence/definitions

Create a Presence Definition

Requires ALL permissions:

* presence:presenceDefinition:add

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.PresenceApi();

let body = {}; // Object | The Presence Definition to create
let opts = { 
  'customHeaders': {  // Object.<string, string> | Request Custom Headers
    'X-Service-Name': 'customer-service',
    'X-Request-ID': 'req-12345'
  }
};

apiInstance.postPresenceDefinitions0(body, opts)
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
 **customHeaders** | **Object.<string, string>** | Request Custom Headers | [optional] |

### Return type

**OrganizationPresenceDefinition**


## postPresenceSources

> Source postPresenceSources(body, opts)


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

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.PresenceApi();

let body = {}; // Object | The Presence Source to create
let opts = { 
  'customHeaders': {  // Object.<string, string> | Request Custom Headers
    'X-Service-Name': 'customer-service',
    'X-Request-ID': 'req-12345'
  }
};

apiInstance.postPresenceSources(body, opts)
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
 **customHeaders** | **Object.<string, string>** | Request Custom Headers | [optional] |

### Return type

**Source**


## postPresencedefinitions

> OrganizationPresence postPresencedefinitions(body, opts)

:::{"alert":"warning","title":"Deprecated","collapsible":false,"autoCollapse":false}
This resource has been deprecated
:::

POST /api/v2/presencedefinitions

Create a Presence Definition. Apps should migrate to use POST /api/v2/presence/definitions instead

Requires ALL permissions:

* presence:presenceDefinition:add

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.PresenceApi();

let body = {}; // Object | The Presence Definition to create
let opts = { 
  'customHeaders': {  // Object.<string, string> | Request Custom Headers
    'X-Service-Name': 'customer-service',
    'X-Request-ID': 'req-12345'
  }
};

apiInstance.postPresencedefinitions(body, opts)
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
 **customHeaders** | **Object.<string, string>** | Request Custom Headers | [optional] |

### Return type

**OrganizationPresence**


## putPresenceDefinition0

> OrganizationPresenceDefinition putPresenceDefinition0(definitionId, body, opts)


PUT /api/v2/presence/definitions/{definitionId}

Update a Presence Definition

Requires ALL permissions:

* presence:presenceDefinition:edit

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.PresenceApi();

let definitionId = "definitionId_example"; // String | Presence Definition ID
let body = {}; // Object | The updated Presence Definition
let opts = { 
  'customHeaders': {  // Object.<string, string> | Request Custom Headers
    'X-Service-Name': 'customer-service',
    'X-Request-ID': 'req-12345'
  }
};

apiInstance.putPresenceDefinition0(definitionId, body, opts)
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
 **customHeaders** | **Object.<string, string>** | Request Custom Headers | [optional] |

### Return type

**OrganizationPresenceDefinition**


## putPresenceSettings

> PresenceSettings putPresenceSettings(body, opts)


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

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.PresenceApi();

let body = {}; // Object | Presence Settings
let opts = { 
  'customHeaders': {  // Object.<string, string> | Request Custom Headers
    'X-Service-Name': 'customer-service',
    'X-Request-ID': 'req-12345'
  }
};

apiInstance.putPresenceSettings(body, opts)
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
 **customHeaders** | **Object.<string, string>** | Request Custom Headers | [optional] |

### Return type

**PresenceSettings**


## putPresenceSource

> Source putPresenceSource(sourceId, body, opts)


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

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.PresenceApi();

let sourceId = "sourceId_example"; // String | Presence Source ID
let body = {}; // Object | The updated Presence Source
let opts = { 
  'customHeaders': {  // Object.<string, string> | Request Custom Headers
    'X-Service-Name': 'customer-service',
    'X-Request-ID': 'req-12345'
  }
};

apiInstance.putPresenceSource(sourceId, body, opts)
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
 **customHeaders** | **Object.<string, string>** | Request Custom Headers | [optional] |

### Return type

**Source**


## putPresenceUserPrimarysource

> UserPrimarySource putPresenceUserPrimarysource(userId, body, opts)


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

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.PresenceApi();

let userId = "userId_example"; // String | user ID
let body = {}; // Object | Primary Source
let opts = { 
  'customHeaders': {  // Object.<string, string> | Request Custom Headers
    'X-Service-Name': 'customer-service',
    'X-Request-ID': 'req-12345'
  }
};

apiInstance.putPresenceUserPrimarysource(userId, body, opts)
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
 **customHeaders** | **Object.<string, string>** | Request Custom Headers | [optional] |

### Return type

**UserPrimarySource**


## putPresencedefinition

> OrganizationPresence putPresencedefinition(presenceId, body, opts)

:::{"alert":"warning","title":"Deprecated","collapsible":false,"autoCollapse":false}
This resource has been deprecated
:::

PUT /api/v2/presencedefinitions/{presenceId}

Update a Presence Definition. Apps should migrate to use PUT /api/v2/presence/definitions/{definitionId} instead)

Requires ALL permissions:

* presence:presenceDefinition:edit

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.PresenceApi();

let presenceId = "presenceId_example"; // String | Organization Presence ID
let body = {}; // Object | The OrganizationPresence to update
let opts = { 
  'customHeaders': {  // Object.<string, string> | Request Custom Headers
    'X-Service-Name': 'customer-service',
    'X-Request-ID': 'req-12345'
  }
};

apiInstance.putPresencedefinition(presenceId, body, opts)
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
 **customHeaders** | **Object.<string, string>** | Request Custom Headers | [optional] |

### Return type

**OrganizationPresence**


## putUsersPresencesBulk

> [UserPresence] putUsersPresencesBulk(body, opts)


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

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.PresenceApi();

let body = [{}]; // Object | List of User presences
let opts = { 
  'customHeaders': {  // Object.<string, string> | Request Custom Headers
    'X-Service-Name': 'customer-service',
    'X-Request-ID': 'req-12345'
  }
};

apiInstance.putUsersPresencesBulk(body, opts)
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
 **customHeaders** | **Object.<string, string>** | Request Custom Headers | [optional] |

### Return type

**[UserPresence]**


_purecloud-platform-client-v2@254.0.0_
