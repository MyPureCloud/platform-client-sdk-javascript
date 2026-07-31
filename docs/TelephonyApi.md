# TelephonyApi

# platformClient.TelephonyApi

All URIs are relative to *https://api.mypurecloud.com*

| Method | HTTP request | Description |
| ------------- | ------------- | ------------- |
[**deleteTelephonyOrganizationLinkTargetOrganizationId**](TelephonyApi#deleteTelephonyOrganizationLinkTargetOrganizationId) | **DELETE** /api/v2/telephony/organization/link/{targetOrganizationId} | Delete a link
[**getTelephonyAgentGreetings**](TelephonyApi#getTelephonyAgentGreetings) | **GET** /api/v2/telephony/agents/{agentId}/greetings | Get an agent's greetings.
[**getTelephonyAgentsGreetingsMe**](TelephonyApi#getTelephonyAgentsGreetingsMe) | **GET** /api/v2/telephony/agents/greetings/me | Get the agent's own greetings.
[**getTelephonyCallsMetrics**](TelephonyApi#getTelephonyCallsMetrics) | **GET** /api/v2/telephony/calls/metrics | Get the concurrent call metrics for a given organization.
[**getTelephonyMediaregions**](TelephonyApi#getTelephonyMediaregions) | **GET** /api/v2/telephony/mediaregions | Retrieve the list of AWS regions media can stream through.
[**getTelephonyNumbersRouting**](TelephonyApi#getTelephonyNumbersRouting) | **GET** /api/v2/telephony/numbers/routing | Get Number Routings by organizationId
[**getTelephonyOrganizationLink**](TelephonyApi#getTelephonyOrganizationLink) | **GET** /api/v2/telephony/organization/link | Get organization links
[**getTelephonyOrganizationLinkRegions**](TelephonyApi#getTelephonyOrganizationLinkRegions) | **GET** /api/v2/telephony/organization/link/regions | Get all the replica regions by primary region
[**getTelephonySettings**](TelephonyApi#getTelephonySettings) | **GET** /api/v2/telephony/settings | Get the global telephony configuration.
[**getTelephonySipmessagesConversation**](TelephonyApi#getTelephonySipmessagesConversation) | **GET** /api/v2/telephony/sipmessages/conversations/{conversationId} | Get a SIP message.
[**getTelephonySipmessagesConversationHeaders**](TelephonyApi#getTelephonySipmessagesConversationHeaders) | **GET** /api/v2/telephony/sipmessages/conversations/{conversationId}/headers | Get SIP headers.
[**getTelephonySiptraces**](TelephonyApi#getTelephonySiptraces) | **GET** /api/v2/telephony/siptraces | Fetch SIP metadata
[**getTelephonySiptracesDownloadDownloadId**](TelephonyApi#getTelephonySiptracesDownloadDownloadId) | **GET** /api/v2/telephony/siptraces/download/{downloadId} | Get signed S3 URL for a pcap download
[**patchTelephonyOrganizationLinkApproveRequestingOrganizationId**](TelephonyApi#patchTelephonyOrganizationLinkApproveRequestingOrganizationId) | **PATCH** /api/v2/telephony/organization/link/approve/{requestingOrganizationId} | Approving a requested link
[**postTelephonyNumbersRouting**](TelephonyApi#postTelephonyNumbersRouting) | **POST** /api/v2/telephony/numbers/routing | Update the routing of numbers for one or multiple organizations
[**postTelephonyNumbersRoutingAll**](TelephonyApi#postTelephonyNumbersRoutingAll) | **POST** /api/v2/telephony/numbers/routing/all | Re-route all numbers on an organization
[**postTelephonyNumbersRoutingReset**](TelephonyApi#postTelephonyNumbersRoutingReset) | **POST** /api/v2/telephony/numbers/routing/reset | Reset routing for organization
[**postTelephonyOrganizationLink**](TelephonyApi#postTelephonyOrganizationLink) | **POST** /api/v2/telephony/organization/link | Create a link with an organization
[**postTelephonySiptracesDownload**](TelephonyApi#postTelephonySiptracesDownload) | **POST** /api/v2/telephony/siptraces/download | Request a download of a pcap file to S3
[**putTelephonyAgentGreetings**](TelephonyApi#putTelephonyAgentGreetings) | **PUT** /api/v2/telephony/agents/{agentId}/greetings | Updates an agent's greetings.
[**putTelephonyAgentsGreetingsMe**](TelephonyApi#putTelephonyAgentsGreetingsMe) | **PUT** /api/v2/telephony/agents/greetings/me | Updates the agent's own greetings.
[**putTelephonySettings**](TelephonyApi#putTelephonySettings) | **PUT** /api/v2/telephony/settings | Update the global telephony configuration.



## deleteTelephonyOrganizationLinkTargetOrganizationId

> void deleteTelephonyOrganizationLinkTargetOrganizationId(targetOrganizationId, opts)


DELETE /api/v2/telephony/organization/link/{targetOrganizationId}

Delete a link

Requires ALL permissions:

* telephony:organizationLink:delete

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.TelephonyApi();

let targetOrganizationId = "targetOrganizationId_example"; // String | targetOrganizationId
let opts = { 
  'customHeaders': {  // Object.<string, string> | Request Custom Headers
    'X-Service-Name': 'customer-service',
    'X-Request-ID': 'req-12345'
  }
};

apiInstance.deleteTelephonyOrganizationLinkTargetOrganizationId(targetOrganizationId, opts)
  .then(() => {
    console.log('deleteTelephonyOrganizationLinkTargetOrganizationId returned successfully.');
  })
  .catch((err) => {
    console.log('There was a failure calling deleteTelephonyOrganizationLinkTargetOrganizationId');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **targetOrganizationId** | **String** | targetOrganizationId |  |
 **customHeaders** | **Object.<string, string>** | Request Custom Headers | [optional] |

### Return type

void (no response body)


## getTelephonyAgentGreetings

> AgentGreeting getTelephonyAgentGreetings(agentId, opts)


GET /api/v2/telephony/agents/{agentId}/greetings

Get an agent's greetings.

Requires ANY permissions:

* telephony:otherAgentGreeting:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.TelephonyApi();

let agentId = "agentId_example"; // String | User ID
let opts = { 
  'customHeaders': {  // Object.<string, string> | Request Custom Headers
    'X-Service-Name': 'customer-service',
    'X-Request-ID': 'req-12345'
  }
};

apiInstance.getTelephonyAgentGreetings(agentId, opts)
  .then((data) => {
    console.log(`getTelephonyAgentGreetings success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getTelephonyAgentGreetings');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **agentId** | **String** | User ID |  |
 **customHeaders** | **Object.<string, string>** | Request Custom Headers | [optional] |

### Return type

**AgentGreeting**


## getTelephonyAgentsGreetingsMe

> SelfAgentGreeting getTelephonyAgentsGreetingsMe(opts)


GET /api/v2/telephony/agents/greetings/me

Get the agent's own greetings.

Requires ANY permissions:

* telephony:selfAgentGreeting:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.TelephonyApi();
let opts = { 
  'customHeaders': {  // Object.<string, string> | Request Custom Headers
    'X-Service-Name': 'customer-service',
    'X-Request-ID': 'req-12345'
  }
};

apiInstance.getTelephonyAgentsGreetingsMe(opts)
  .then((data) => {
    console.log(`getTelephonyAgentsGreetingsMe success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getTelephonyAgentsGreetingsMe');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **customHeaders** | **Object.<string, string>** | Request Custom Headers | [optional] |

### Return type

**SelfAgentGreeting**


## getTelephonyCallsMetrics

> OrganizationCallMetrics getTelephonyCallsMetrics(opts)


GET /api/v2/telephony/calls/metrics

Get the concurrent call metrics for a given organization.

Requires ANY permissions:

* telephony:callMetrics:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.TelephonyApi();

let opts = { 
  'metricType': "cloud", // String | Flag to indicate metric type to fetch.
  'customHeaders': {  // Object.<string, string> | Request Custom Headers
    'X-Service-Name': 'customer-service',
    'X-Request-ID': 'req-12345'
  }
};

apiInstance.getTelephonyCallsMetrics(opts)
  .then((data) => {
    console.log(`getTelephonyCallsMetrics success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getTelephonyCallsMetrics');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **metricType** | **String** | Flag to indicate metric type to fetch. | [optional] [default to cloud]<br />**Values**: cloud, premises |
 **customHeaders** | **Object.<string, string>** | Request Custom Headers | [optional] |

### Return type

**OrganizationCallMetrics**


## getTelephonyMediaregions

> MediaRegions getTelephonyMediaregions(opts)


GET /api/v2/telephony/mediaregions

Retrieve the list of AWS regions media can stream through.

Requires ANY permissions:

* telephony:plugin:all

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.TelephonyApi();
let opts = { 
  'customHeaders': {  // Object.<string, string> | Request Custom Headers
    'X-Service-Name': 'customer-service',
    'X-Request-ID': 'req-12345'
  }
};

apiInstance.getTelephonyMediaregions(opts)
  .then((data) => {
    console.log(`getTelephonyMediaregions success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getTelephonyMediaregions');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **customHeaders** | **Object.<string, string>** | Request Custom Headers | [optional] |

### Return type

**MediaRegions**


## getTelephonyNumbersRouting

> NumberRoutingListing getTelephonyNumbersRouting(opts)


GET /api/v2/telephony/numbers/routing

Get Number Routings by organizationId

Requires ALL permissions:

* telephony:numberRouting:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.TelephonyApi();

let opts = { 
  'before': "before_example", // String | The cursor that points to the start of the set of entities that has been returned.
  'after': "after_example", // String | The cursor that points to the end of the set of entities that has been returned.
  'pageSize': "pageSize_example", // String | Number of entities to return. Maximum of 200.
  'numberId': "numberId_example", // String | numberId
  'activeRoutingOrganizationId': "activeRoutingOrganizationId_example", // String | activeRoutingOrganizationId
  'ownerOrganizationId': "ownerOrganizationId_example", // String | ownerOrganizationId
  'status': "status_example", // String | status
  'customHeaders': {  // Object.<string, string> | Request Custom Headers
    'X-Service-Name': 'customer-service',
    'X-Request-ID': 'req-12345'
  }
};

apiInstance.getTelephonyNumbersRouting(opts)
  .then((data) => {
    console.log(`getTelephonyNumbersRouting success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getTelephonyNumbersRouting');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **before** | **String** | The cursor that points to the start of the set of entities that has been returned. | [optional]  |
 **after** | **String** | The cursor that points to the end of the set of entities that has been returned. | [optional]  |
 **pageSize** | **String** | Number of entities to return. Maximum of 200. | [optional]  |
 **numberId** | **String** | numberId | [optional]  |
 **activeRoutingOrganizationId** | **String** | activeRoutingOrganizationId | [optional]  |
 **ownerOrganizationId** | **String** | ownerOrganizationId | [optional]  |
 **status** | **String** | status | [optional] <br />**Values**: Normal, Redirected, Pending |
 **customHeaders** | **Object.<string, string>** | Request Custom Headers | [optional] |

### Return type

**NumberRoutingListing**


## getTelephonyOrganizationLink

> [OrganizationLinkResponse] getTelephonyOrganizationLink(opts)


GET /api/v2/telephony/organization/link

Get organization links

Requires ALL permissions:

* telephony:organizationLink:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.TelephonyApi();
let opts = { 
  'customHeaders': {  // Object.<string, string> | Request Custom Headers
    'X-Service-Name': 'customer-service',
    'X-Request-ID': 'req-12345'
  }
};

apiInstance.getTelephonyOrganizationLink(opts)
  .then((data) => {
    console.log(`getTelephonyOrganizationLink success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getTelephonyOrganizationLink');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **customHeaders** | **Object.<string, string>** | Request Custom Headers | [optional] |

### Return type

**[OrganizationLinkResponse]**


## getTelephonyOrganizationLinkRegions

> [RegionResponse] getTelephonyOrganizationLinkRegions(opts)


GET /api/v2/telephony/organization/link/regions

Get all the replica regions by primary region

Requires ALL permissions:

* telephony:organizationLink:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.TelephonyApi();
let opts = { 
  'customHeaders': {  // Object.<string, string> | Request Custom Headers
    'X-Service-Name': 'customer-service',
    'X-Request-ID': 'req-12345'
  }
};

apiInstance.getTelephonyOrganizationLinkRegions(opts)
  .then((data) => {
    console.log(`getTelephonyOrganizationLinkRegions success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getTelephonyOrganizationLinkRegions');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **customHeaders** | **Object.<string, string>** | Request Custom Headers | [optional] |

### Return type

**[RegionResponse]**


## getTelephonySettings

> TelephonySettings getTelephonySettings(opts)


GET /api/v2/telephony/settings

Get the global telephony configuration.

Requires ANY permissions:

* telephony:settings:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.TelephonyApi();
let opts = { 
  'customHeaders': {  // Object.<string, string> | Request Custom Headers
    'X-Service-Name': 'customer-service',
    'X-Request-ID': 'req-12345'
  }
};

apiInstance.getTelephonySettings(opts)
  .then((data) => {
    console.log(`getTelephonySettings success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getTelephonySettings');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **customHeaders** | **Object.<string, string>** | Request Custom Headers | [optional] |

### Return type

**TelephonySettings**


## getTelephonySipmessagesConversation

> Callmessage getTelephonySipmessagesConversation(conversationId, opts)


GET /api/v2/telephony/sipmessages/conversations/{conversationId}

Get a SIP message.

Get the raw form of the SIP message

Requires ALL permissions:

* telephony:pcap:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.TelephonyApi();

let conversationId = "conversationId_example"; // String | Conversation id
let opts = { 
  'customHeaders': {  // Object.<string, string> | Request Custom Headers
    'X-Service-Name': 'customer-service',
    'X-Request-ID': 'req-12345'
  }
};

apiInstance.getTelephonySipmessagesConversation(conversationId, opts)
  .then((data) => {
    console.log(`getTelephonySipmessagesConversation success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getTelephonySipmessagesConversation');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **conversationId** | **String** | Conversation id |  |
 **customHeaders** | **Object.<string, string>** | Request Custom Headers | [optional] |

### Return type

**Callmessage**


## getTelephonySipmessagesConversationHeaders

> Callheader getTelephonySipmessagesConversationHeaders(conversationId, opts)


GET /api/v2/telephony/sipmessages/conversations/{conversationId}/headers

Get SIP headers.

Get parsed SIP headers. Returns specific headers if key query parameters are added.

Requires ALL permissions:

* telephony:pcap:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.TelephonyApi();

let conversationId = "conversationId_example"; // String | Conversation id
let opts = { 
  'keys': ["keys_example"], // [String] | comma-separated list of header identifiers to query. e.g. ruri,to,from
  'customHeaders': {  // Object.<string, string> | Request Custom Headers
    'X-Service-Name': 'customer-service',
    'X-Request-ID': 'req-12345'
  }
};

apiInstance.getTelephonySipmessagesConversationHeaders(conversationId, opts)
  .then((data) => {
    console.log(`getTelephonySipmessagesConversationHeaders success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getTelephonySipmessagesConversationHeaders');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **conversationId** | **String** | Conversation id |  |
 **keys** | **[String]** | comma-separated list of header identifiers to query. e.g. ruri,to,from | [optional]  |
 **customHeaders** | **Object.<string, string>** | Request Custom Headers | [optional] |

### Return type

**Callheader**


## getTelephonySiptraces

> SipSearchResult getTelephonySiptraces(dateStart, dateEnd, opts)


GET /api/v2/telephony/siptraces

Fetch SIP metadata

Fetch SIP metadata that matches a given parameter. If exactMatch is passed as a parameter only sip records that have exactly that value will be returned. For example, some records contain conversationId but not all relevant records for that call may contain the conversationId so only a partial view of the call will be reflected

Requires ALL permissions:

* telephony:pcap:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.TelephonyApi();

let dateStart = new Date("2013-10-20T19:20:30+01:00"); // Date | Start date of the search. Date time is represented as an ISO-8601 string. For example: yyyy-MM-ddTHH:mm:ss[.mmm]Z
let dateEnd = new Date("2013-10-20T19:20:30+01:00"); // Date | End date of the search. Date time is represented as an ISO-8601 string. For example: yyyy-MM-ddTHH:mm:ss[.mmm]Z
let opts = { 
  'callId': "callId_example", // String | unique identification of the placed call
  'toUser': "toUser_example", // String | User to who the call was placed
  'fromUser': "fromUser_example", // String | user who placed the call
  'conversationId': "conversationId_example", // String | Unique identification of the conversation
  'customHeaders': {  // Object.<string, string> | Request Custom Headers
    'X-Service-Name': 'customer-service',
    'X-Request-ID': 'req-12345'
  }
};

apiInstance.getTelephonySiptraces(dateStart, dateEnd, opts)
  .then((data) => {
    console.log(`getTelephonySiptraces success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getTelephonySiptraces');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **dateStart** | **Date** | Start date of the search. Date time is represented as an ISO-8601 string. For example: yyyy-MM-ddTHH:mm:ss[.mmm]Z |  |
 **dateEnd** | **Date** | End date of the search. Date time is represented as an ISO-8601 string. For example: yyyy-MM-ddTHH:mm:ss[.mmm]Z |  |
 **callId** | **String** | unique identification of the placed call | [optional]  |
 **toUser** | **String** | User to who the call was placed | [optional]  |
 **fromUser** | **String** | user who placed the call | [optional]  |
 **conversationId** | **String** | Unique identification of the conversation | [optional]  |
 **customHeaders** | **Object.<string, string>** | Request Custom Headers | [optional] |

### Return type

**SipSearchResult**


## getTelephonySiptracesDownloadDownloadId

> SignedUrlResponse getTelephonySiptracesDownloadDownloadId(downloadId, opts)


GET /api/v2/telephony/siptraces/download/{downloadId}

Get signed S3 URL for a pcap download

Requires ALL permissions:

* telephony:pcap:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.TelephonyApi();

let downloadId = "downloadId_example"; // String | unique id for the downloaded file in S3
let opts = { 
  'customHeaders': {  // Object.<string, string> | Request Custom Headers
    'X-Service-Name': 'customer-service',
    'X-Request-ID': 'req-12345'
  }
};

apiInstance.getTelephonySiptracesDownloadDownloadId(downloadId, opts)
  .then((data) => {
    console.log(`getTelephonySiptracesDownloadDownloadId success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getTelephonySiptracesDownloadDownloadId');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **downloadId** | **String** | unique id for the downloaded file in S3 |  |
 **customHeaders** | **Object.<string, string>** | Request Custom Headers | [optional] |

### Return type

**SignedUrlResponse**


## patchTelephonyOrganizationLinkApproveRequestingOrganizationId

> void patchTelephonyOrganizationLinkApproveRequestingOrganizationId(requestingOrganizationId, body, opts)


PATCH /api/v2/telephony/organization/link/approve/{requestingOrganizationId}

Approving a requested link

Requires ALL permissions:

* telephony:organizationLink:edit

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.TelephonyApi();

let requestingOrganizationId = "requestingOrganizationId_example"; // String | requestingOrganizationId
let body = {}; // Object | Approval request body
let opts = { 
  'customHeaders': {  // Object.<string, string> | Request Custom Headers
    'X-Service-Name': 'customer-service',
    'X-Request-ID': 'req-12345'
  }
};

apiInstance.patchTelephonyOrganizationLinkApproveRequestingOrganizationId(requestingOrganizationId, body, opts)
  .then(() => {
    console.log('patchTelephonyOrganizationLinkApproveRequestingOrganizationId returned successfully.');
  })
  .catch((err) => {
    console.log('There was a failure calling patchTelephonyOrganizationLinkApproveRequestingOrganizationId');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **requestingOrganizationId** | **String** | requestingOrganizationId |  |
 **body** | **Object** | Approval request body |  |
 **customHeaders** | **Object.<string, string>** | Request Custom Headers | [optional] |

### Return type

void (no response body)


## postTelephonyNumbersRouting

> void postTelephonyNumbersRouting(body, opts)


POST /api/v2/telephony/numbers/routing

Update the routing of numbers for one or multiple organizations

Requires ALL permissions:

* telephony:numberRouting:edit

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.TelephonyApi();

let body = [{}]; // Object | drRoutingList
let opts = { 
  'customHeaders': {  // Object.<string, string> | Request Custom Headers
    'X-Service-Name': 'customer-service',
    'X-Request-ID': 'req-12345'
  }
};

apiInstance.postTelephonyNumbersRouting(body, opts)
  .then(() => {
    console.log('postTelephonyNumbersRouting returned successfully.');
  })
  .catch((err) => {
    console.log('There was a failure calling postTelephonyNumbersRouting');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **body** | **Object** | drRoutingList |  |
 **customHeaders** | **Object.<string, string>** | Request Custom Headers | [optional] |

### Return type

void (no response body)


## postTelephonyNumbersRoutingAll

> void postTelephonyNumbersRoutingAll(body, opts)


POST /api/v2/telephony/numbers/routing/all

Re-route all numbers on an organization

Requires ALL permissions:

* telephony:numberRouting:edit

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.TelephonyApi();

let body = {}; // Object | Value for all routing request body
let opts = { 
  'customHeaders': {  // Object.<string, string> | Request Custom Headers
    'X-Service-Name': 'customer-service',
    'X-Request-ID': 'req-12345'
  }
};

apiInstance.postTelephonyNumbersRoutingAll(body, opts)
  .then(() => {
    console.log('postTelephonyNumbersRoutingAll returned successfully.');
  })
  .catch((err) => {
    console.log('There was a failure calling postTelephonyNumbersRoutingAll');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **body** | **Object** | Value for all routing request body |  |
 **customHeaders** | **Object.<string, string>** | Request Custom Headers | [optional] |

### Return type

void (no response body)


## postTelephonyNumbersRoutingReset

> void postTelephonyNumbersRoutingReset(body, opts)


POST /api/v2/telephony/numbers/routing/reset

Reset routing for organization

Requires ALL permissions:

* telephony:numberRouting:edit

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.TelephonyApi();

let body = {}; // Object | Value for bulk routing request body
let opts = { 
  'customHeaders': {  // Object.<string, string> | Request Custom Headers
    'X-Service-Name': 'customer-service',
    'X-Request-ID': 'req-12345'
  }
};

apiInstance.postTelephonyNumbersRoutingReset(body, opts)
  .then(() => {
    console.log('postTelephonyNumbersRoutingReset returned successfully.');
  })
  .catch((err) => {
    console.log('There was a failure calling postTelephonyNumbersRoutingReset');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **body** | **Object** | Value for bulk routing request body |  |
 **customHeaders** | **Object.<string, string>** | Request Custom Headers | [optional] |

### Return type

void (no response body)


## postTelephonyOrganizationLink

> OrganizationLink postTelephonyOrganizationLink(body, opts)


POST /api/v2/telephony/organization/link

Create a link with an organization

Requires ALL permissions:

* telephony:organizationLink:add

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.TelephonyApi();

let body = {}; // Object | CreateLinkOrg body
let opts = { 
  'customHeaders': {  // Object.<string, string> | Request Custom Headers
    'X-Service-Name': 'customer-service',
    'X-Request-ID': 'req-12345'
  }
};

apiInstance.postTelephonyOrganizationLink(body, opts)
  .then((data) => {
    console.log(`postTelephonyOrganizationLink success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling postTelephonyOrganizationLink');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **body** | **Object** | CreateLinkOrg body |  |
 **customHeaders** | **Object.<string, string>** | Request Custom Headers | [optional] |

### Return type

**OrganizationLink**


## postTelephonySiptracesDownload

> SipDownloadResponse postTelephonySiptracesDownload(sIPSearchPublicRequest, opts)


POST /api/v2/telephony/siptraces/download

Request a download of a pcap file to S3

Requires ALL permissions:

* telephony:pcap:add

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.TelephonyApi();

let sIPSearchPublicRequest = {}; // Object | 
let opts = { 
  'customHeaders': {  // Object.<string, string> | Request Custom Headers
    'X-Service-Name': 'customer-service',
    'X-Request-ID': 'req-12345'
  }
};

apiInstance.postTelephonySiptracesDownload(sIPSearchPublicRequest, opts)
  .then((data) => {
    console.log(`postTelephonySiptracesDownload success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling postTelephonySiptracesDownload');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **sIPSearchPublicRequest** | **Object** |  |  |
 **customHeaders** | **Object.<string, string>** | Request Custom Headers | [optional] |

### Return type

**SipDownloadResponse**


## putTelephonyAgentGreetings

> AgentGreeting putTelephonyAgentGreetings(agentId, body, opts)


PUT /api/v2/telephony/agents/{agentId}/greetings

Updates an agent's greetings.

Requires ANY permissions:

* telephony:otherAgentGreeting:edit

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.TelephonyApi();

let agentId = "agentId_example"; // String | User ID
let body = {}; // Object | Agent Greeting
let opts = { 
  'customHeaders': {  // Object.<string, string> | Request Custom Headers
    'X-Service-Name': 'customer-service',
    'X-Request-ID': 'req-12345'
  }
};

apiInstance.putTelephonyAgentGreetings(agentId, body, opts)
  .then((data) => {
    console.log(`putTelephonyAgentGreetings success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling putTelephonyAgentGreetings');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **agentId** | **String** | User ID |  |
 **body** | **Object** | Agent Greeting |  |
 **customHeaders** | **Object.<string, string>** | Request Custom Headers | [optional] |

### Return type

**AgentGreeting**


## putTelephonyAgentsGreetingsMe

> SelfAgentGreeting putTelephonyAgentsGreetingsMe(body, opts)


PUT /api/v2/telephony/agents/greetings/me

Updates the agent's own greetings.

Requires ANY permissions:

* telephony:selfAgentGreeting:edit

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.TelephonyApi();

let body = {}; // Object | Agent Greeting
let opts = { 
  'customHeaders': {  // Object.<string, string> | Request Custom Headers
    'X-Service-Name': 'customer-service',
    'X-Request-ID': 'req-12345'
  }
};

apiInstance.putTelephonyAgentsGreetingsMe(body, opts)
  .then((data) => {
    console.log(`putTelephonyAgentsGreetingsMe success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling putTelephonyAgentsGreetingsMe');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **body** | **Object** | Agent Greeting |  |
 **customHeaders** | **Object.<string, string>** | Request Custom Headers | [optional] |

### Return type

**SelfAgentGreeting**


## putTelephonySettings

> TelephonySettings putTelephonySettings(body, opts)


PUT /api/v2/telephony/settings

Update the global telephony configuration.

Requires ANY permissions:

* telephony:settings:edit

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.TelephonyApi();

let body = {}; // Object | Telephony
let opts = { 
  'customHeaders': {  // Object.<string, string> | Request Custom Headers
    'X-Service-Name': 'customer-service',
    'X-Request-ID': 'req-12345'
  }
};

apiInstance.putTelephonySettings(body, opts)
  .then((data) => {
    console.log(`putTelephonySettings success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling putTelephonySettings');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **body** | **Object** | Telephony |  |
 **customHeaders** | **Object.<string, string>** | Request Custom Headers | [optional] |

### Return type

**TelephonySettings**


_purecloud-platform-client-v2@258.0.0_
