# SearchApi

# platformClient.SearchApi

All URIs are relative to *https://api.mypurecloud.com*

| Method | HTTP request | Description |
| ------------- | ------------- | ------------- |
[**getDocumentationGknSearch**](SearchApi#getDocumentationGknSearch) | **GET** /api/v2/documentation/gkn/search | Search gkn documentation using the q64 value returned from a previous search
[**getDocumentationSearch**](SearchApi#getDocumentationSearch) | **GET** /api/v2/documentation/search | Search documentation using the q64 value returned from a previous search
[**getGroupsSearch**](SearchApi#getGroupsSearch) | **GET** /api/v2/groups/search | Search groups using the q64 value returned from a previous search
[**getLocationsSearch**](SearchApi#getLocationsSearch) | **GET** /api/v2/locations/search | Search locations using the q64 value returned from a previous search
[**getSearch**](SearchApi#getSearch) | **GET** /api/v2/search | Search using the q64 value returned from a previous search.
[**getSearchSuggest**](SearchApi#getSearchSuggest) | **GET** /api/v2/search/suggest | Suggest resources using the q64 value returned from a previous suggest query.
[**getTelephonyProvidersEdgesSitesSearch**](SearchApi#getTelephonyProvidersEdgesSitesSearch) | **GET** /api/v2/telephony/providers/edges/sites/search | Search sites using the q64 value returned from a previous search
[**getUsersSearch**](SearchApi#getUsersSearch) | **GET** /api/v2/users/search | Search users using the q64 value returned from a previous search
[**getVoicemailSearch**](SearchApi#getVoicemailSearch) | **GET** /api/v2/voicemail/search | Search voicemails using the q64 value returned from a previous search
[**postConversationsCustomattributesSearch**](SearchApi#postConversationsCustomattributesSearch) | **POST** /api/v2/conversations/customattributes/search | Search resources.
[**postConversationsParticipantsAttributesSearch**](SearchApi#postConversationsParticipantsAttributesSearch) | **POST** /api/v2/conversations/participants/attributes/search | Search conversations
[**postDocumentationAllSearch**](SearchApi#postDocumentationAllSearch) | **POST** /api/v2/documentation/all/search | Search all documents
[**postDocumentationGknSearch**](SearchApi#postDocumentationGknSearch) | **POST** /api/v2/documentation/gkn/search | Search gkn documentation
[**postDocumentationSearch**](SearchApi#postDocumentationSearch) | **POST** /api/v2/documentation/search | Search documentation
[**postGroupsSearch**](SearchApi#postGroupsSearch) | **POST** /api/v2/groups/search | Search groups
[**postLocationsSearch**](SearchApi#postLocationsSearch) | **POST** /api/v2/locations/search | Search locations
[**postSearch**](SearchApi#postSearch) | **POST** /api/v2/search | Search resources.
[**postSearchSuggest**](SearchApi#postSearchSuggest) | **POST** /api/v2/search/suggest | Suggest resources.
[**postSpeechandtextanalyticsTranscriptsSearch**](SearchApi#postSpeechandtextanalyticsTranscriptsSearch) | **POST** /api/v2/speechandtextanalytics/transcripts/search | Search resources.
[**postTeamsSearch**](SearchApi#postTeamsSearch) | **POST** /api/v2/teams/search | Search resources.
[**postTelephonyProvidersEdgesSitesSearch**](SearchApi#postTelephonyProvidersEdgesSitesSearch) | **POST** /api/v2/telephony/providers/edges/sites/search | Search sites
[**postUsersSearch**](SearchApi#postUsersSearch) | **POST** /api/v2/users/search | Search users
[**postUsersSearchConversationTarget**](SearchApi#postUsersSearchConversationTarget) | **POST** /api/v2/users/search/conversation/target | Search users as conversation targets
[**postUsersSearchQueuemembersManage**](SearchApi#postUsersSearchQueuemembersManage) | **POST** /api/v2/users/search/queuemembers/manage | Search manage queue member
[**postUsersSearchTeamsAssign**](SearchApi#postUsersSearchTeamsAssign) | **POST** /api/v2/users/search/teams/assign | Search users assigned to teams
[**postVoicemailSearch**](SearchApi#postVoicemailSearch) | **POST** /api/v2/voicemail/search | Search voicemails



## getDocumentationGknSearch

> GKNDocumentationSearchResponse getDocumentationGknSearch(q64, opts)


GET /api/v2/documentation/gkn/search

Search gkn documentation using the q64 value returned from a previous search

Requires NO permissions:

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

let apiInstance = new platformClient.SearchApi();

let q64 = "q64_example"; // String | q64
let opts = { 
  'customHeaders': {  // Object.<string, string> | Request Custom Headers
    'X-Service-Name': 'customer-service',
    'X-Request-ID': 'req-12345'
  }
};

apiInstance.getDocumentationGknSearch(q64, opts)
  .then((data) => {
    console.log(`getDocumentationGknSearch success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getDocumentationGknSearch');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **q64** | **String** | q64 |  |
 **customHeaders** | **Object.<string, string>** | Request Custom Headers | [optional] |

### Return type

**GKNDocumentationSearchResponse**


## getDocumentationSearch

> DocumentationSearchResponse getDocumentationSearch(q64, opts)


GET /api/v2/documentation/search

Search documentation using the q64 value returned from a previous search

Requires NO permissions:

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

let apiInstance = new platformClient.SearchApi();

let q64 = "q64_example"; // String | q64
let opts = { 
  'customHeaders': {  // Object.<string, string> | Request Custom Headers
    'X-Service-Name': 'customer-service',
    'X-Request-ID': 'req-12345'
  }
};

apiInstance.getDocumentationSearch(q64, opts)
  .then((data) => {
    console.log(`getDocumentationSearch success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getDocumentationSearch');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **q64** | **String** | q64 |  |
 **customHeaders** | **Object.<string, string>** | Request Custom Headers | [optional] |

### Return type

**DocumentationSearchResponse**


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

let apiInstance = new platformClient.SearchApi();

let q64 = "q64_example"; // String | q64
let opts = { 
  'expand': ["expand_example"], // [String] | expand
  'customHeaders': {  // Object.<string, string> | Request Custom Headers
    'X-Service-Name': 'customer-service',
    'X-Request-ID': 'req-12345'
  }
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
 **customHeaders** | **Object.<string, string>** | Request Custom Headers | [optional] |

### Return type

**GroupsSearchResponse**


## getLocationsSearch

> LocationsSearchResponse getLocationsSearch(q64, opts)


GET /api/v2/locations/search

Search locations using the q64 value returned from a previous search

Requires NO permissions:

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.SearchApi();

let q64 = "q64_example"; // String | q64
let opts = { 
  'expand': ["expand_example"], // [String] | Provides more details about a specified resource
  'customHeaders': {  // Object.<string, string> | Request Custom Headers
    'X-Service-Name': 'customer-service',
    'X-Request-ID': 'req-12345'
  }
};

apiInstance.getLocationsSearch(q64, opts)
  .then((data) => {
    console.log(`getLocationsSearch success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getLocationsSearch');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **q64** | **String** | q64 |  |
 **expand** | **[String]** | Provides more details about a specified resource | [optional] <br />**Values**: images, addressVerificationDetails |
 **customHeaders** | **Object.<string, string>** | Request Custom Headers | [optional] |

### Return type

**LocationsSearchResponse**


## getSearch

> JsonNodeSearchResponse getSearch(q64, opts)


GET /api/v2/search

Search using the q64 value returned from a previous search.

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

let apiInstance = new platformClient.SearchApi();

let q64 = "q64_example"; // String | q64
let opts = { 
  'expand': ["expand_example"], // [String] | Which fields, if any, to expand
  'profile': true, // Boolean | profile
  'customHeaders': {  // Object.<string, string> | Request Custom Headers
    'X-Service-Name': 'customer-service',
    'X-Request-ID': 'req-12345'
  }
};

apiInstance.getSearch(q64, opts)
  .then((data) => {
    console.log(`getSearch success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getSearch');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **q64** | **String** | q64 |  |
 **expand** | **[String]** | Which fields, if any, to expand | [optional] <br />**Values**: routingStatus, presence, integrationPresence, conversationSummary, outOfOffice, geolocation, station, authorization, lasttokenissued, authorization.unusedRoles, team, workPlanBidRanks, externalContactsSettings, groups, customAttributes, profileSkills, certifications, locations, skills, languages, languagePreference, employerInfo, biography, dateLastLogin, dateWelcomeSent, callerUser.routingStatus, callerUser.primaryPresence, callerUser.conversationSummary, callerUser.outOfOffice, callerUser.geolocation, conversations, transcription, images, addressVerificationDetails |
 **profile** | **Boolean** | profile | [optional] [default to true] |
 **customHeaders** | **Object.<string, string>** | Request Custom Headers | [optional] |

### Return type

**JsonNodeSearchResponse**


## getSearchSuggest

> JsonNodeSearchResponse getSearchSuggest(q64, opts)


GET /api/v2/search/suggest

Suggest resources using the q64 value returned from a previous suggest query.

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

let apiInstance = new platformClient.SearchApi();

let q64 = "q64_example"; // String | q64
let opts = { 
  'expand': ["expand_example"], // [String] | Which fields, if any, to expand
  'profile': true, // Boolean | profile
  'customHeaders': {  // Object.<string, string> | Request Custom Headers
    'X-Service-Name': 'customer-service',
    'X-Request-ID': 'req-12345'
  }
};

apiInstance.getSearchSuggest(q64, opts)
  .then((data) => {
    console.log(`getSearchSuggest success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getSearchSuggest');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **q64** | **String** | q64 |  |
 **expand** | **[String]** | Which fields, if any, to expand | [optional] <br />**Values**: routingStatus, presence, integrationPresence, conversationSummary, outOfOffice, geolocation, station, authorization, lasttokenissued, authorization.unusedRoles, team, workPlanBidRanks, externalContactsSettings, groups, customAttributes, profileSkills, certifications, locations, skills, languages, languagePreference, employerInfo, biography, dateLastLogin, dateWelcomeSent, callerUser.routingStatus, callerUser.primaryPresence, callerUser.conversationSummary, callerUser.outOfOffice, callerUser.geolocation, conversations, transcription, images, addressVerificationDetails |
 **profile** | **Boolean** | profile | [optional] [default to true] |
 **customHeaders** | **Object.<string, string>** | Request Custom Headers | [optional] |

### Return type

**JsonNodeSearchResponse**


## getTelephonyProvidersEdgesSitesSearch

> SitesSearchResponse getTelephonyProvidersEdgesSitesSearch(q64, opts)


GET /api/v2/telephony/providers/edges/sites/search

Search sites using the q64 value returned from a previous search

Requires ANY permissions:

* telephony:plugin:all
* telephony:sites:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.SearchApi();

let q64 = "q64_example"; // String | q64
let opts = { 
  'expand': ["expand_example"], // [String] | expand
  'customHeaders': {  // Object.<string, string> | Request Custom Headers
    'X-Service-Name': 'customer-service',
    'X-Request-ID': 'req-12345'
  }
};

apiInstance.getTelephonyProvidersEdgesSitesSearch(q64, opts)
  .then((data) => {
    console.log(`getTelephonyProvidersEdgesSitesSearch success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getTelephonyProvidersEdgesSitesSearch');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **q64** | **String** | q64 |  |
 **expand** | **[String]** | expand | [optional]  |
 **customHeaders** | **Object.<string, string>** | Request Custom Headers | [optional] |

### Return type

**SitesSearchResponse**


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

let apiInstance = new platformClient.SearchApi();

let q64 = "q64_example"; // String | q64
let opts = { 
  'expand': ["expand_example"], // [String] | expand
  'integrationPresenceSource': "integrationPresenceSource_example", // String | integrationPresenceSource
  'customHeaders': {  // Object.<string, string> | Request Custom Headers
    'X-Service-Name': 'customer-service',
    'X-Request-ID': 'req-12345'
  }
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
 **customHeaders** | **Object.<string, string>** | Request Custom Headers | [optional] |

### Return type

**UsersSearchResponse**


## getVoicemailSearch

> VoicemailsSearchResponse getVoicemailSearch(q64, opts)


GET /api/v2/voicemail/search

Search voicemails using the q64 value returned from a previous search

Requires NO permissions:

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.SearchApi();

let q64 = "q64_example"; // String | q64
let opts = { 
  'expand': ["expand_example"], // [String] | expand
  'customHeaders': {  // Object.<string, string> | Request Custom Headers
    'X-Service-Name': 'customer-service',
    'X-Request-ID': 'req-12345'
  }
};

apiInstance.getVoicemailSearch(q64, opts)
  .then((data) => {
    console.log(`getVoicemailSearch success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getVoicemailSearch');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **q64** | **String** | q64 |  |
 **expand** | **[String]** | expand | [optional]  |
 **customHeaders** | **Object.<string, string>** | Request Custom Headers | [optional] |

### Return type

**VoicemailsSearchResponse**


## postConversationsCustomattributesSearch

> JsonSearchResponse postConversationsCustomattributesSearch(body, opts)


POST /api/v2/conversations/customattributes/search

Search resources.

Requires ANY permissions:

* conversation:customAttributes:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.SearchApi();

let body = {}; // Object | Search request options
let opts = { 
  'customHeaders': {  // Object.<string, string> | Request Custom Headers
    'X-Service-Name': 'customer-service',
    'X-Request-ID': 'req-12345'
  }
};

apiInstance.postConversationsCustomattributesSearch(body, opts)
  .then((data) => {
    console.log(`postConversationsCustomattributesSearch success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling postConversationsCustomattributesSearch');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **body** | **Object** | Search request options |  |
 **customHeaders** | **Object.<string, string>** | Request Custom Headers | [optional] |

### Return type

**JsonSearchResponse**


## postConversationsParticipantsAttributesSearch

> JsonCursorSearchResponse postConversationsParticipantsAttributesSearch(body, opts)


POST /api/v2/conversations/participants/attributes/search

Search conversations

Requires ANY permissions:

* conversation:participant:attributesview

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.SearchApi();

let body = {}; // Object | Search request options
let opts = { 
  'customHeaders': {  // Object.<string, string> | Request Custom Headers
    'X-Service-Name': 'customer-service',
    'X-Request-ID': 'req-12345'
  }
};

apiInstance.postConversationsParticipantsAttributesSearch(body, opts)
  .then((data) => {
    console.log(`postConversationsParticipantsAttributesSearch success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling postConversationsParticipantsAttributesSearch');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **body** | **Object** | Search request options |  |
 **customHeaders** | **Object.<string, string>** | Request Custom Headers | [optional] |

### Return type

**JsonCursorSearchResponse**


## postDocumentationAllSearch

> JsonNodeSearchResponse postDocumentationAllSearch(body, opts)


POST /api/v2/documentation/all/search

Search all documents

postDocumentationAllSearch is a preview method and is subject to both breaking and non-breaking changes at any time without notice

Requires NO permissions:

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

let apiInstance = new platformClient.SearchApi();

let body = {}; // Object | Search request options
let opts = { 
  'customHeaders': {  // Object.<string, string> | Request Custom Headers
    'X-Service-Name': 'customer-service',
    'X-Request-ID': 'req-12345'
  }
};

apiInstance.postDocumentationAllSearch(body, opts)
  .then((data) => {
    console.log(`postDocumentationAllSearch success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling postDocumentationAllSearch');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **body** | **Object** | Search request options |  |
 **customHeaders** | **Object.<string, string>** | Request Custom Headers | [optional] |

### Return type

**JsonNodeSearchResponse**


## postDocumentationGknSearch

> GKNDocumentationSearchResponse postDocumentationGknSearch(body, opts)


POST /api/v2/documentation/gkn/search

Search gkn documentation

Requires NO permissions:

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

let apiInstance = new platformClient.SearchApi();

let body = {}; // Object | Search request options
let opts = { 
  'customHeaders': {  // Object.<string, string> | Request Custom Headers
    'X-Service-Name': 'customer-service',
    'X-Request-ID': 'req-12345'
  }
};

apiInstance.postDocumentationGknSearch(body, opts)
  .then((data) => {
    console.log(`postDocumentationGknSearch success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling postDocumentationGknSearch');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **body** | **Object** | Search request options |  |
 **customHeaders** | **Object.<string, string>** | Request Custom Headers | [optional] |

### Return type

**GKNDocumentationSearchResponse**


## postDocumentationSearch

> DocumentationSearchResponse postDocumentationSearch(body, opts)


POST /api/v2/documentation/search

Search documentation

Requires NO permissions:

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

let apiInstance = new platformClient.SearchApi();

let body = {}; // Object | Search request options
let opts = { 
  'customHeaders': {  // Object.<string, string> | Request Custom Headers
    'X-Service-Name': 'customer-service',
    'X-Request-ID': 'req-12345'
  }
};

apiInstance.postDocumentationSearch(body, opts)
  .then((data) => {
    console.log(`postDocumentationSearch success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling postDocumentationSearch');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **body** | **Object** | Search request options |  |
 **customHeaders** | **Object.<string, string>** | Request Custom Headers | [optional] |

### Return type

**DocumentationSearchResponse**


## postGroupsSearch

> GroupsSearchResponse postGroupsSearch(body, opts)


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

let apiInstance = new platformClient.SearchApi();

let body = {}; // Object | Search request options
let opts = { 
  'customHeaders': {  // Object.<string, string> | Request Custom Headers
    'X-Service-Name': 'customer-service',
    'X-Request-ID': 'req-12345'
  }
};

apiInstance.postGroupsSearch(body, opts)
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
 **customHeaders** | **Object.<string, string>** | Request Custom Headers | [optional] |

### Return type

**GroupsSearchResponse**


## postLocationsSearch

> LocationsSearchResponse postLocationsSearch(body, opts)


POST /api/v2/locations/search

Search locations

Requires NO permissions:

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.SearchApi();

let body = {}; // Object | Search request options
let opts = { 
  'customHeaders': {  // Object.<string, string> | Request Custom Headers
    'X-Service-Name': 'customer-service',
    'X-Request-ID': 'req-12345'
  }
};

apiInstance.postLocationsSearch(body, opts)
  .then((data) => {
    console.log(`postLocationsSearch success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling postLocationsSearch');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **body** | **Object** | Search request options |  |
 **customHeaders** | **Object.<string, string>** | Request Custom Headers | [optional] |

### Return type

**LocationsSearchResponse**


## postSearch

> JsonNodeSearchResponse postSearch(body, opts)


POST /api/v2/search

Search resources.

Requires ANY permissions:

* directory:user:view
* routing:skill:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.SearchApi();

let body = {}; // Object | Search request options
let opts = { 
  'profile': true, // Boolean | profile
  'customHeaders': {  // Object.<string, string> | Request Custom Headers
    'X-Service-Name': 'customer-service',
    'X-Request-ID': 'req-12345'
  }
};

apiInstance.postSearch(body, opts)
  .then((data) => {
    console.log(`postSearch success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling postSearch');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **body** | **Object** | Search request options |  |
 **profile** | **Boolean** | profile | [optional] [default to true] |
 **customHeaders** | **Object.<string, string>** | Request Custom Headers | [optional] |

### Return type

**JsonNodeSearchResponse**


## postSearchSuggest

> JsonNodeSearchResponse postSearchSuggest(body, opts)


POST /api/v2/search/suggest

Suggest resources.

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

let apiInstance = new platformClient.SearchApi();

let body = {}; // Object | Search request options
let opts = { 
  'profile': true, // Boolean | profile
  'customHeaders': {  // Object.<string, string> | Request Custom Headers
    'X-Service-Name': 'customer-service',
    'X-Request-ID': 'req-12345'
  }
};

apiInstance.postSearchSuggest(body, opts)
  .then((data) => {
    console.log(`postSearchSuggest success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling postSearchSuggest');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **body** | **Object** | Search request options |  |
 **profile** | **Boolean** | profile | [optional] [default to true] |
 **customHeaders** | **Object.<string, string>** | Request Custom Headers | [optional] |

### Return type

**JsonNodeSearchResponse**


## postSpeechandtextanalyticsTranscriptsSearch

> JsonSearchResponse postSpeechandtextanalyticsTranscriptsSearch(body, opts)


POST /api/v2/speechandtextanalytics/transcripts/search

Search resources.

Requires ANY permissions:

* analytics:conversationDetail:view
* recording:recording:view
* recording:recordingSegment:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.SearchApi();

let body = {}; // Object | Search request options
let opts = { 
  'customHeaders': {  // Object.<string, string> | Request Custom Headers
    'X-Service-Name': 'customer-service',
    'X-Request-ID': 'req-12345'
  }
};

apiInstance.postSpeechandtextanalyticsTranscriptsSearch(body, opts)
  .then((data) => {
    console.log(`postSpeechandtextanalyticsTranscriptsSearch success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling postSpeechandtextanalyticsTranscriptsSearch');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **body** | **Object** | Search request options |  |
 **customHeaders** | **Object.<string, string>** | Request Custom Headers | [optional] |

### Return type

**JsonSearchResponse**


## postTeamsSearch

> TeamsSearchResponse postTeamsSearch(body, opts)


POST /api/v2/teams/search

Search resources.

Requires ANY permissions:

* groups:team:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.SearchApi();

let body = {}; // Object | Search request options
let opts = { 
  'customHeaders': {  // Object.<string, string> | Request Custom Headers
    'X-Service-Name': 'customer-service',
    'X-Request-ID': 'req-12345'
  }
};

apiInstance.postTeamsSearch(body, opts)
  .then((data) => {
    console.log(`postTeamsSearch success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling postTeamsSearch');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **body** | **Object** | Search request options |  |
 **customHeaders** | **Object.<string, string>** | Request Custom Headers | [optional] |

### Return type

**TeamsSearchResponse**


## postTelephonyProvidersEdgesSitesSearch

> SitesSearchResponse postTelephonyProvidersEdgesSitesSearch(body, opts)


POST /api/v2/telephony/providers/edges/sites/search

Search sites

Requires ANY permissions:

* telephony:plugin:all
* telephony:sites:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.SearchApi();

let body = {}; // Object | Search request options
let opts = { 
  'customHeaders': {  // Object.<string, string> | Request Custom Headers
    'X-Service-Name': 'customer-service',
    'X-Request-ID': 'req-12345'
  }
};

apiInstance.postTelephonyProvidersEdgesSitesSearch(body, opts)
  .then((data) => {
    console.log(`postTelephonyProvidersEdgesSitesSearch success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling postTelephonyProvidersEdgesSitesSearch');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **body** | **Object** | Search request options |  |
 **customHeaders** | **Object.<string, string>** | Request Custom Headers | [optional] |

### Return type

**SitesSearchResponse**


## postUsersSearch

> UsersSearchResponse postUsersSearch(body, opts)


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

let apiInstance = new platformClient.SearchApi();

let body = {}; // Object | Search request options
let opts = { 
  'customHeaders': {  // Object.<string, string> | Request Custom Headers
    'X-Service-Name': 'customer-service',
    'X-Request-ID': 'req-12345'
  }
};

apiInstance.postUsersSearch(body, opts)
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
 **customHeaders** | **Object.<string, string>** | Request Custom Headers | [optional] |

### Return type

**UsersSearchResponse**


## postUsersSearchConversationTarget

> UsersSearchResponse postUsersSearchConversationTarget(body, opts)


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

let apiInstance = new platformClient.SearchApi();

let body = {}; // Object | Search request options
let opts = { 
  'customHeaders': {  // Object.<string, string> | Request Custom Headers
    'X-Service-Name': 'customer-service',
    'X-Request-ID': 'req-12345'
  }
};

apiInstance.postUsersSearchConversationTarget(body, opts)
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
 **customHeaders** | **Object.<string, string>** | Request Custom Headers | [optional] |

### Return type

**UsersSearchResponse**


## postUsersSearchQueuemembersManage

> UsersSearchResponse postUsersSearchQueuemembersManage(body, opts)


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

let apiInstance = new platformClient.SearchApi();

let body = {}; // Object | Search request options
let opts = { 
  'customHeaders': {  // Object.<string, string> | Request Custom Headers
    'X-Service-Name': 'customer-service',
    'X-Request-ID': 'req-12345'
  }
};

apiInstance.postUsersSearchQueuemembersManage(body, opts)
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
 **customHeaders** | **Object.<string, string>** | Request Custom Headers | [optional] |

### Return type

**UsersSearchResponse**


## postUsersSearchTeamsAssign

> UsersSearchResponse postUsersSearchTeamsAssign(body, opts)


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

let apiInstance = new platformClient.SearchApi();

let body = {}; // Object | Search request options
let opts = { 
  'customHeaders': {  // Object.<string, string> | Request Custom Headers
    'X-Service-Name': 'customer-service',
    'X-Request-ID': 'req-12345'
  }
};

apiInstance.postUsersSearchTeamsAssign(body, opts)
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
 **customHeaders** | **Object.<string, string>** | Request Custom Headers | [optional] |

### Return type

**UsersSearchResponse**


## postVoicemailSearch

> VoicemailsSearchResponse postVoicemailSearch(body, opts)


POST /api/v2/voicemail/search

Search voicemails

Requires NO permissions:

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.SearchApi();

let body = {}; // Object | Search request options
let opts = { 
  'customHeaders': {  // Object.<string, string> | Request Custom Headers
    'X-Service-Name': 'customer-service',
    'X-Request-ID': 'req-12345'
  }
};

apiInstance.postVoicemailSearch(body, opts)
  .then((data) => {
    console.log(`postVoicemailSearch success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling postVoicemailSearch');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **body** | **Object** | Search request options |  |
 **customHeaders** | **Object.<string, string>** | Request Custom Headers | [optional] |

### Return type

**VoicemailsSearchResponse**


_purecloud-platform-client-v2@256.0.0_
