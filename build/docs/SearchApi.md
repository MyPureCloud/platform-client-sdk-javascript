---
title: SearchApi
---
# platformClient.SearchApi

All URIs are relative to *https://api.mypurecloud.com*

| Method | HTTP request | Description |
| ------------- | ------------- | ------------- |
[**getDocumentationGknSearch**](SearchApi.html#getDocumentationGknSearch) | **GET** /api/v2/documentation/gkn/search | Search gkn documentation using the q64 value returned from a previous search
[**getDocumentationSearch**](SearchApi.html#getDocumentationSearch) | **GET** /api/v2/documentation/search | Search documentation using the q64 value returned from a previous search
[**getGroupsSearch**](SearchApi.html#getGroupsSearch) | **GET** /api/v2/groups/search | Search groups using the q64 value returned from a previous search
[**getLocationsSearch**](SearchApi.html#getLocationsSearch) | **GET** /api/v2/locations/search | Search locations using the q64 value returned from a previous search
[**getSearch**](SearchApi.html#getSearch) | **GET** /api/v2/search | Search using the q64 value returned from a previous search.
[**getSearchSuggest**](SearchApi.html#getSearchSuggest) | **GET** /api/v2/search/suggest | Suggest resources using the q64 value returned from a previous suggest query.
[**getUsersSearch**](SearchApi.html#getUsersSearch) | **GET** /api/v2/users/search | Search users using the q64 value returned from a previous search
[**getVoicemailSearch**](SearchApi.html#getVoicemailSearch) | **GET** /api/v2/voicemail/search | Search voicemails using the q64 value returned from a previous search
[**postAnalyticsConversationsTranscriptsQuery**](SearchApi.html#postAnalyticsConversationsTranscriptsQuery) | **POST** /api/v2/analytics/conversations/transcripts/query | Search resources.
[**postConversationsParticipantsAttributesSearch**](SearchApi.html#postConversationsParticipantsAttributesSearch) | **POST** /api/v2/conversations/participants/attributes/search | Search conversations
[**postDocumentationAllSearch**](SearchApi.html#postDocumentationAllSearch) | **POST** /api/v2/documentation/all/search | Search all documents
[**postDocumentationGknSearch**](SearchApi.html#postDocumentationGknSearch) | **POST** /api/v2/documentation/gkn/search | Search gkn documentation
[**postDocumentationSearch**](SearchApi.html#postDocumentationSearch) | **POST** /api/v2/documentation/search | Search documentation
[**postGroupsSearch**](SearchApi.html#postGroupsSearch) | **POST** /api/v2/groups/search | Search groups
[**postKnowledgeKnowledgebaseSearch**](SearchApi.html#postKnowledgeKnowledgebaseSearch) | **POST** /api/v2/knowledge/knowledgebases/{knowledgeBaseId}/search | Search Documents
[**postLocationsSearch**](SearchApi.html#postLocationsSearch) | **POST** /api/v2/locations/search | Search locations
[**postSearch**](SearchApi.html#postSearch) | **POST** /api/v2/search | Search resources.
[**postSearchSuggest**](SearchApi.html#postSearchSuggest) | **POST** /api/v2/search/suggest | Suggest resources.
[**postSpeechandtextanalyticsTranscriptsSearch**](SearchApi.html#postSpeechandtextanalyticsTranscriptsSearch) | **POST** /api/v2/speechandtextanalytics/transcripts/search | Search resources.
[**postTeamsSearch**](SearchApi.html#postTeamsSearch) | **POST** /api/v2/teams/search | Search resources.
[**postUsersSearch**](SearchApi.html#postUsersSearch) | **POST** /api/v2/users/search | Search users
[**postUsersSearchConversationTarget**](SearchApi.html#postUsersSearchConversationTarget) | **POST** /api/v2/users/search/conversation/target | Search users as conversation targets
[**postUsersSearchQueuemembersManage**](SearchApi.html#postUsersSearchQueuemembersManage) | **POST** /api/v2/users/search/queuemembers/manage | Search manage queue member
[**postUsersSearchTeamsAssign**](SearchApi.html#postUsersSearchTeamsAssign) | **POST** /api/v2/users/search/teams/assign | Search users assigned to teams
[**postVoicemailSearch**](SearchApi.html#postVoicemailSearch) | **POST** /api/v2/voicemail/search | Search voicemails
{: class="table table-striped"}

<a name="getDocumentationGknSearch"></a>

# GKNDocumentationSearchResponse getDocumentationGknSearch(q64)


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

apiInstance.getDocumentationGknSearch(q64)
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
{: class="table table-striped"}

### Return type

**GKNDocumentationSearchResponse**

<a name="getDocumentationSearch"></a>

# DocumentationSearchResponse getDocumentationSearch(q64)


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

apiInstance.getDocumentationSearch(q64)
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
{: class="table table-striped"}

### Return type

**DocumentationSearchResponse**

<a name="getGroupsSearch"></a>

# GroupsSearchResponse getGroupsSearch(q64, opts)


GET /api/v2/groups/search

Search groups using the q64 value returned from a previous search

Requires NO permissions:

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.SearchApi();

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
{: class="table table-striped"}

### Return type

**GroupsSearchResponse**

<a name="getLocationsSearch"></a>

# LocationsSearchResponse getLocationsSearch(q64, opts)


GET /api/v2/locations/search

Search locations using the q64 value returned from a previous search

Requires NO permissions:

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.SearchApi();

let q64 = "q64_example"; // String | q64
let opts = { 
  'expand': ["expand_example"] // [String] | Provides more details about a specified resource
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
{: class="table table-striped"}

### Return type

**LocationsSearchResponse**

<a name="getSearch"></a>

# JsonNodeSearchResponse getSearch(q64, opts)


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

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.SearchApi();

let q64 = "q64_example"; // String | q64
let opts = { 
  'expand': ["expand_example"], // [String] | Which fields, if any, to expand
  'profile': true // Boolean | profile
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
 **expand** | **[String]** | Which fields, if any, to expand | [optional] <br />**Values**: routingStatus, presence, integrationPresence, conversationSummary, outOfOffice, geolocation, station, authorization, lasttokenissued, dateLastLogin, authorization.unusedRoles, team, profileSkills, certifications, locations, groups, skills, languages, languagePreference, employerInfo, biography, callerUser.routingStatus, callerUser.primaryPresence, callerUser.conversationSummary, callerUser.outOfOffice, callerUser.geolocation, images, addressVerificationDetails |
 **profile** | **Boolean** | profile | [optional] [default to true] |
{: class="table table-striped"}

### Return type

**JsonNodeSearchResponse**

<a name="getSearchSuggest"></a>

# JsonNodeSearchResponse getSearchSuggest(q64, opts)


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

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.SearchApi();

let q64 = "q64_example"; // String | q64
let opts = { 
  'expand': ["expand_example"], // [String] | Which fields, if any, to expand
  'profile': true // Boolean | profile
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
 **expand** | **[String]** | Which fields, if any, to expand | [optional] <br />**Values**: routingStatus, presence, integrationPresence, conversationSummary, outOfOffice, geolocation, station, authorization, lasttokenissued, dateLastLogin, authorization.unusedRoles, team, profileSkills, certifications, locations, groups, skills, languages, languagePreference, employerInfo, biography, callerUser.routingStatus, callerUser.primaryPresence, callerUser.conversationSummary, callerUser.outOfOffice, callerUser.geolocation, images, addressVerificationDetails |
 **profile** | **Boolean** | profile | [optional] [default to true] |
{: class="table table-striped"}

### Return type

**JsonNodeSearchResponse**

<a name="getUsersSearch"></a>

# UsersSearchResponse getUsersSearch(q64, opts)


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

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.SearchApi();

let q64 = "q64_example"; // String | q64
let opts = { 
  'expand': ["expand_example"], // [String] | expand
  'integrationPresenceSource': "integrationPresenceSource_example" // String | integrationPresenceSource
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
{: class="table table-striped"}

### Return type

**UsersSearchResponse**

<a name="getVoicemailSearch"></a>

# VoicemailsSearchResponse getVoicemailSearch(q64, opts)


GET /api/v2/voicemail/search

Search voicemails using the q64 value returned from a previous search

Requires NO permissions:

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.SearchApi();

let q64 = "q64_example"; // String | q64
let opts = { 
  'expand': ["expand_example"] // [String] | expand
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
{: class="table table-striped"}

### Return type

**VoicemailsSearchResponse**

<a name="postAnalyticsConversationsTranscriptsQuery"></a>

# AnalyticsConversationWithoutAttributesMultiGetResponse postAnalyticsConversationsTranscriptsQuery(body)


POST /api/v2/analytics/conversations/transcripts/query

Search resources.

Requires ANY permissions:

* analytics:conversationDetail:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.SearchApi();

let body = {}; // Object | Search request options

apiInstance.postAnalyticsConversationsTranscriptsQuery(body)
  .then((data) => {
    console.log(`postAnalyticsConversationsTranscriptsQuery success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling postAnalyticsConversationsTranscriptsQuery');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **body** | **Object** | Search request options |  |
{: class="table table-striped"}

### Return type

**AnalyticsConversationWithoutAttributesMultiGetResponse**

<a name="postConversationsParticipantsAttributesSearch"></a>

# JsonCursorSearchResponse postConversationsParticipantsAttributesSearch(body)


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

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.SearchApi();

let body = {}; // Object | Search request options

apiInstance.postConversationsParticipantsAttributesSearch(body)
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
{: class="table table-striped"}

### Return type

**JsonCursorSearchResponse**

<a name="postDocumentationAllSearch"></a>

# JsonNodeSearchResponse postDocumentationAllSearch(body)


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

apiInstance.postDocumentationAllSearch(body)
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
{: class="table table-striped"}

### Return type

**JsonNodeSearchResponse**

<a name="postDocumentationGknSearch"></a>

# GKNDocumentationSearchResponse postDocumentationGknSearch(body)


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

apiInstance.postDocumentationGknSearch(body)
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
{: class="table table-striped"}

### Return type

**GKNDocumentationSearchResponse**

<a name="postDocumentationSearch"></a>

# DocumentationSearchResponse postDocumentationSearch(body)


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

apiInstance.postDocumentationSearch(body)
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
{: class="table table-striped"}

### Return type

**DocumentationSearchResponse**

<a name="postGroupsSearch"></a>

# GroupsSearchResponse postGroupsSearch(body)


POST /api/v2/groups/search

Search groups

Requires NO permissions:

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.SearchApi();

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
{: class="table table-striped"}

### Return type

**GroupsSearchResponse**

<a name="postKnowledgeKnowledgebaseSearch"></a>

# KnowledgeSearchResponse postKnowledgeKnowledgebaseSearch(knowledgeBaseId, opts)

<span style="background-color: #f0ad4e;display: inline-block;padding: 7px;font-weight: bold;line-height: 1;color: #ffffff;text-align: center;white-space: nowrap;vertical-align: baseline;border-radius: .25em;margin: 10px 0;">DEPRECATED</span>

POST /api/v2/knowledge/knowledgebases/{knowledgeBaseId}/search

Search Documents

Requires ALL permissions:

* knowledge:knowledgebase:search

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.SearchApi();

let knowledgeBaseId = "knowledgeBaseId_example"; // String | Knowledge base ID
let opts = { 
  'body': {} // Object | 
};

apiInstance.postKnowledgeKnowledgebaseSearch(knowledgeBaseId, opts)
  .then((data) => {
    console.log(`postKnowledgeKnowledgebaseSearch success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling postKnowledgeKnowledgebaseSearch');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **knowledgeBaseId** | **String** | Knowledge base ID |  |
 **body** | **Object** |  | [optional]  |
{: class="table table-striped"}

### Return type

**KnowledgeSearchResponse**

<a name="postLocationsSearch"></a>

# LocationsSearchResponse postLocationsSearch(body)


POST /api/v2/locations/search

Search locations

Requires NO permissions:

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.SearchApi();

let body = {}; // Object | Search request options

apiInstance.postLocationsSearch(body)
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
{: class="table table-striped"}

### Return type

**LocationsSearchResponse**

<a name="postSearch"></a>

# JsonNodeSearchResponse postSearch(body, opts)


POST /api/v2/search

Search resources.

Requires ANY permissions:

* directory:user:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.SearchApi();

let body = {}; // Object | Search request options
let opts = { 
  'profile': true // Boolean | profile
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
{: class="table table-striped"}

### Return type

**JsonNodeSearchResponse**

<a name="postSearchSuggest"></a>

# JsonNodeSearchResponse postSearchSuggest(body, opts)


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

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.SearchApi();

let body = {}; // Object | Search request options
let opts = { 
  'profile': true // Boolean | profile
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
{: class="table table-striped"}

### Return type

**JsonNodeSearchResponse**

<a name="postSpeechandtextanalyticsTranscriptsSearch"></a>

# JsonSearchResponse postSpeechandtextanalyticsTranscriptsSearch(body)


POST /api/v2/speechandtextanalytics/transcripts/search

Search resources.

Requires ANY permissions:

* analytics:conversationDetail:view
* recording:recording:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.SearchApi();

let body = {}; // Object | Search request options

apiInstance.postSpeechandtextanalyticsTranscriptsSearch(body)
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
{: class="table table-striped"}

### Return type

**JsonSearchResponse**

<a name="postTeamsSearch"></a>

# TeamsSearchResponse postTeamsSearch(body)


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

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.SearchApi();

let body = {}; // Object | Search request options

apiInstance.postTeamsSearch(body)
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
{: class="table table-striped"}

### Return type

**TeamsSearchResponse**

<a name="postUsersSearch"></a>

# UsersSearchResponse postUsersSearch(body)


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

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.SearchApi();

let body = {}; // Object | Search request options

apiInstance.postUsersSearch(body)
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
{: class="table table-striped"}

### Return type

**UsersSearchResponse**

<a name="postUsersSearchConversationTarget"></a>

# UsersSearchResponse postUsersSearchConversationTarget(body)


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

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.SearchApi();

let body = {}; // Object | Search request options

apiInstance.postUsersSearchConversationTarget(body)
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
{: class="table table-striped"}

### Return type

**UsersSearchResponse**

<a name="postUsersSearchQueuemembersManage"></a>

# UsersSearchResponse postUsersSearchQueuemembersManage(body)


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

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.SearchApi();

let body = {}; // Object | Search request options

apiInstance.postUsersSearchQueuemembersManage(body)
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
{: class="table table-striped"}

### Return type

**UsersSearchResponse**

<a name="postUsersSearchTeamsAssign"></a>

# UsersSearchResponse postUsersSearchTeamsAssign(body)


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

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.SearchApi();

let body = {}; // Object | Search request options

apiInstance.postUsersSearchTeamsAssign(body)
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
{: class="table table-striped"}

### Return type

**UsersSearchResponse**

<a name="postVoicemailSearch"></a>

# VoicemailsSearchResponse postVoicemailSearch(body)


POST /api/v2/voicemail/search

Search voicemails

Requires NO permissions:

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.SearchApi();

let body = {}; // Object | Search request options

apiInstance.postVoicemailSearch(body)
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
{: class="table table-striped"}

### Return type

**VoicemailsSearchResponse**

