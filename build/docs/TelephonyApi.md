# TelephonyApi

# platformClient.TelephonyApi

All URIs are relative to *https://api.mypurecloud.com*

| Method | HTTP request | Description |
| ------------- | ------------- | ------------- |
[**getTelephonyMediaregions**](TelephonyApi#getTelephonyMediaregions) | **GET** /api/v2/telephony/mediaregions | Retrieve the list of AWS regions media can stream through.
[**getTelephonySipmessagesConversation**](TelephonyApi#getTelephonySipmessagesConversation) | **GET** /api/v2/telephony/sipmessages/conversations/{conversationId} | Get a SIP message.
[**getTelephonySipmessagesConversationHeaders**](TelephonyApi#getTelephonySipmessagesConversationHeaders) | **GET** /api/v2/telephony/sipmessages/conversations/{conversationId}/headers | Get SIP headers.
[**getTelephonySiptraces**](TelephonyApi#getTelephonySiptraces) | **GET** /api/v2/telephony/siptraces | Fetch SIP metadata
[**getTelephonySiptracesDownloadDownloadId**](TelephonyApi#getTelephonySiptracesDownloadDownloadId) | **GET** /api/v2/telephony/siptraces/download/{downloadId} | Get signed S3 URL for a pcap download
[**postTelephonySiptracesDownload**](TelephonyApi#postTelephonySiptracesDownload) | **POST** /api/v2/telephony/siptraces/download | Request a download of a pcap file to S3



## getTelephonyMediaregions

> MediaRegions getTelephonyMediaregions()


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

apiInstance.getTelephonyMediaregions()
  .then((data) => {
    console.log(`getTelephonyMediaregions success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getTelephonyMediaregions');
    console.error(err);
  });
```

### Parameters

This endpoint does not need any parameter.

### Return type

**MediaRegions**


## getTelephonySipmessagesConversation

> Callmessage getTelephonySipmessagesConversation(conversationId)


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

apiInstance.getTelephonySipmessagesConversation(conversationId)
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
  'keys': ["keys_example"] // [String] | comma-separated list of header identifiers to query. e.g. ruri,to,from
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
  'conversationId': "conversationId_example" // String | Unique identification of the conversation
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

### Return type

**SipSearchResult**


## getTelephonySiptracesDownloadDownloadId

> SignedUrlResponse getTelephonySiptracesDownloadDownloadId(downloadId)


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

apiInstance.getTelephonySiptracesDownloadDownloadId(downloadId)
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

### Return type

**SignedUrlResponse**


## postTelephonySiptracesDownload

> SipDownloadResponse postTelephonySiptracesDownload(sIPSearchPublicRequest)


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

apiInstance.postTelephonySiptracesDownload(sIPSearchPublicRequest)
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

### Return type

**SipDownloadResponse**


_purecloud-platform-client-v2@227.0.0_
