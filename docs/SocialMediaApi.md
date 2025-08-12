# SocialMediaApi

# platformClient.SocialMediaApi

All URIs are relative to *https://api.mypurecloud.com*

| Method | HTTP request | Description |
| ------------- | ------------- | ------------- |
[**deleteSocialmediaEscalationrule**](SocialMediaApi#deleteSocialmediaEscalationrule) | **DELETE** /api/v2/socialmedia/escalationrules/{escalationRuleId} | Delete an escalation rule.
[**deleteSocialmediaMessage**](SocialMediaApi#deleteSocialmediaMessage) | **DELETE** /api/v2/socialmedia/messages/{messageId} | Delete a social media message.
[**deleteSocialmediaTopic**](SocialMediaApi#deleteSocialmediaTopic) | **DELETE** /api/v2/socialmedia/topics/{topicId} | Delete a social topic.
[**deleteSocialmediaTopicDataingestionrulesFacebookFacebookIngestionRuleId**](SocialMediaApi#deleteSocialmediaTopicDataingestionrulesFacebookFacebookIngestionRuleId) | **DELETE** /api/v2/socialmedia/topics/{topicId}/dataingestionrules/facebook/{facebookIngestionRuleId} | Delete a Facebook data ingestion rule.
[**deleteSocialmediaTopicDataingestionrulesOpenOpenId**](SocialMediaApi#deleteSocialmediaTopicDataingestionrulesOpenOpenId) | **DELETE** /api/v2/socialmedia/topics/{topicId}/dataingestionrules/open/{openId} | Delete a open data ingestion rule.
[**deleteSocialmediaTopicDataingestionrulesTwitterTwitterIngestionRuleId**](SocialMediaApi#deleteSocialmediaTopicDataingestionrulesTwitterTwitterIngestionRuleId) | **DELETE** /api/v2/socialmedia/topics/{topicId}/dataingestionrules/twitter/{twitterIngestionRuleId} | Delete a X (formally Twitter) data ingestion rule.
[**getSocialmediaAnalyticsAggregatesJob**](SocialMediaApi#getSocialmediaAnalyticsAggregatesJob) | **GET** /api/v2/socialmedia/analytics/aggregates/jobs/{jobId} | Get status for async query for social media aggregates
[**getSocialmediaAnalyticsAggregatesJobResults**](SocialMediaApi#getSocialmediaAnalyticsAggregatesJobResults) | **GET** /api/v2/socialmedia/analytics/aggregates/jobs/{jobId}/results | Fetch a page of results for an async social media query
[**getSocialmediaAnalyticsMessagesJob**](SocialMediaApi#getSocialmediaAnalyticsMessagesJob) | **GET** /api/v2/socialmedia/analytics/messages/jobs/{jobId} | Get status for async query for social media messages job
[**getSocialmediaAnalyticsMessagesJobResults**](SocialMediaApi#getSocialmediaAnalyticsMessagesJobResults) | **GET** /api/v2/socialmedia/analytics/messages/jobs/{jobId}/results | Fetch a page of results for an async social media messages query
[**getSocialmediaEscalationrule**](SocialMediaApi#getSocialmediaEscalationrule) | **GET** /api/v2/socialmedia/escalationrules/{escalationRuleId} | Get a single escalation rule.
[**getSocialmediaEscalationrules**](SocialMediaApi#getSocialmediaEscalationrules) | **GET** /api/v2/socialmedia/escalationrules | Retrieve all escalation rules for a division.
[**getSocialmediaTopic**](SocialMediaApi#getSocialmediaTopic) | **GET** /api/v2/socialmedia/topics/{topicId} | Get a single social topic.
[**getSocialmediaTopicDataingestionrules**](SocialMediaApi#getSocialmediaTopicDataingestionrules) | **GET** /api/v2/socialmedia/topics/{topicId}/dataingestionrules | Retrieve all social topic data ingestion rules with pagination.
[**getSocialmediaTopicDataingestionrulesFacebookFacebookIngestionRuleId**](SocialMediaApi#getSocialmediaTopicDataingestionrulesFacebookFacebookIngestionRuleId) | **GET** /api/v2/socialmedia/topics/{topicId}/dataingestionrules/facebook/{facebookIngestionRuleId} | Get a single Facebook data ingestion rule.
[**getSocialmediaTopicDataingestionrulesFacebookFacebookIngestionRuleIdVersion**](SocialMediaApi#getSocialmediaTopicDataingestionrulesFacebookFacebookIngestionRuleIdVersion) | **GET** /api/v2/socialmedia/topics/{topicId}/dataingestionrules/facebook/{facebookIngestionRuleId}/versions/{dataIngestionRuleVersion} | Get a single Facebook data ingestion rule version.
[**getSocialmediaTopicDataingestionrulesFacebookFacebookIngestionRuleIdVersions**](SocialMediaApi#getSocialmediaTopicDataingestionrulesFacebookFacebookIngestionRuleIdVersions) | **GET** /api/v2/socialmedia/topics/{topicId}/dataingestionrules/facebook/{facebookIngestionRuleId}/versions | Get the Facebook data ingestion rule versions.
[**getSocialmediaTopicDataingestionrulesOpenOpenId**](SocialMediaApi#getSocialmediaTopicDataingestionrulesOpenOpenId) | **GET** /api/v2/socialmedia/topics/{topicId}/dataingestionrules/open/{openId} | Get a single open data ingestion rule.
[**getSocialmediaTopicDataingestionrulesOpenOpenIdVersion**](SocialMediaApi#getSocialmediaTopicDataingestionrulesOpenOpenIdVersion) | **GET** /api/v2/socialmedia/topics/{topicId}/dataingestionrules/open/{openId}/versions/{dataIngestionRuleVersion} | Get a single Open data ingestion rule version.
[**getSocialmediaTopicDataingestionrulesOpenOpenIdVersions**](SocialMediaApi#getSocialmediaTopicDataingestionrulesOpenOpenIdVersions) | **GET** /api/v2/socialmedia/topics/{topicId}/dataingestionrules/open/{openId}/versions | Get the Open data ingestion rule versions.
[**getSocialmediaTopicDataingestionrulesTwitterTwitterIngestionRuleId**](SocialMediaApi#getSocialmediaTopicDataingestionrulesTwitterTwitterIngestionRuleId) | **GET** /api/v2/socialmedia/topics/{topicId}/dataingestionrules/twitter/{twitterIngestionRuleId} | Get a single X (formally Twitter) data ingestion rule.
[**getSocialmediaTopicDataingestionrulesTwitterTwitterIngestionRuleIdVersion**](SocialMediaApi#getSocialmediaTopicDataingestionrulesTwitterTwitterIngestionRuleIdVersion) | **GET** /api/v2/socialmedia/topics/{topicId}/dataingestionrules/twitter/{twitterIngestionRuleId}/versions/{dataIngestionRuleVersion} | Get a single X (formally Twitter) data ingestion rule version.
[**getSocialmediaTopicDataingestionrulesTwitterTwitterIngestionRuleIdVersions**](SocialMediaApi#getSocialmediaTopicDataingestionrulesTwitterTwitterIngestionRuleIdVersions) | **GET** /api/v2/socialmedia/topics/{topicId}/dataingestionrules/twitter/{twitterIngestionRuleId}/versions | Get the Open data ingestion rule versions.
[**getSocialmediaTopics**](SocialMediaApi#getSocialmediaTopics) | **GET** /api/v2/socialmedia/topics | Retrieve all social topics.
[**patchSocialmediaTopic**](SocialMediaApi#patchSocialmediaTopic) | **PATCH** /api/v2/socialmedia/topics/{topicId} | Update a social topic.
[**patchSocialmediaTopicDataingestionrulesFacebookFacebookIngestionRuleId**](SocialMediaApi#patchSocialmediaTopicDataingestionrulesFacebookFacebookIngestionRuleId) | **PATCH** /api/v2/socialmedia/topics/{topicId}/dataingestionrules/facebook/{facebookIngestionRuleId} | Update the status of a Facebook data ingestion rule.
[**patchSocialmediaTopicDataingestionrulesOpenOpenId**](SocialMediaApi#patchSocialmediaTopicDataingestionrulesOpenOpenId) | **PATCH** /api/v2/socialmedia/topics/{topicId}/dataingestionrules/open/{openId} | Update the status of a open data ingestion rule.
[**patchSocialmediaTopicDataingestionrulesTwitterTwitterIngestionRuleId**](SocialMediaApi#patchSocialmediaTopicDataingestionrulesTwitterTwitterIngestionRuleId) | **PATCH** /api/v2/socialmedia/topics/{topicId}/dataingestionrules/twitter/{twitterIngestionRuleId} | Update the status of a X (formally Twitter) data ingestion rule.
[**postSocialmediaAnalyticsAggregatesJobs**](SocialMediaApi#postSocialmediaAnalyticsAggregatesJobs) | **POST** /api/v2/socialmedia/analytics/aggregates/jobs | Query for social media aggregates asynchronously
[**postSocialmediaAnalyticsMessagesJobs**](SocialMediaApi#postSocialmediaAnalyticsMessagesJobs) | **POST** /api/v2/socialmedia/analytics/messages/jobs | Query for social media messages asynchronously
[**postSocialmediaEscalationrules**](SocialMediaApi#postSocialmediaEscalationrules) | **POST** /api/v2/socialmedia/escalationrules | Create an escalation rule.
[**postSocialmediaEscalationsMessages**](SocialMediaApi#postSocialmediaEscalationsMessages) | **POST** /api/v2/socialmedia/escalations/messages | Escalate message to a conversation manually
[**postSocialmediaTopicDataingestionrulesFacebook**](SocialMediaApi#postSocialmediaTopicDataingestionrulesFacebook) | **POST** /api/v2/socialmedia/topics/{topicId}/dataingestionrules/facebook | Create an Facebook data ingestion rule.
[**postSocialmediaTopicDataingestionrulesOpen**](SocialMediaApi#postSocialmediaTopicDataingestionrulesOpen) | **POST** /api/v2/socialmedia/topics/{topicId}/dataingestionrules/open | Create an open data ingestion rule.
[**postSocialmediaTopicDataingestionrulesOpenRuleIdMessagesBulk**](SocialMediaApi#postSocialmediaTopicDataingestionrulesOpenRuleIdMessagesBulk) | **POST** /api/v2/socialmedia/topics/{topicId}/dataingestionrules/open/{ruleId}/messages/bulk | Ingest a list of Open Social Messages
[**postSocialmediaTopicDataingestionrulesOpenRuleIdReactionsBulk**](SocialMediaApi#postSocialmediaTopicDataingestionrulesOpenRuleIdReactionsBulk) | **POST** /api/v2/socialmedia/topics/{topicId}/dataingestionrules/open/{ruleId}/reactions/bulk | Ingest a list of Open Social Reactions
[**postSocialmediaTopicDataingestionrulesTwitter**](SocialMediaApi#postSocialmediaTopicDataingestionrulesTwitter) | **POST** /api/v2/socialmedia/topics/{topicId}/dataingestionrules/twitter | Create an twitter data ingestion rule.
[**postSocialmediaTopics**](SocialMediaApi#postSocialmediaTopics) | **POST** /api/v2/socialmedia/topics | Create a social topic.
[**postSocialmediaTwitterHistoricalTweets**](SocialMediaApi#postSocialmediaTwitterHistoricalTweets) | **POST** /api/v2/socialmedia/twitter/historical/tweets | Retrieves historical tweet count for search terms, optional countries list and the current limit and usage for the organization.
[**putSocialmediaEscalationrule**](SocialMediaApi#putSocialmediaEscalationrule) | **PUT** /api/v2/socialmedia/escalationrules/{escalationRuleId} | Update the escalation rule.
[**putSocialmediaTopicDataingestionrulesFacebookFacebookIngestionRuleId**](SocialMediaApi#putSocialmediaTopicDataingestionrulesFacebookFacebookIngestionRuleId) | **PUT** /api/v2/socialmedia/topics/{topicId}/dataingestionrules/facebook/{facebookIngestionRuleId} | Update the Facebook data ingestion rule.
[**putSocialmediaTopicDataingestionrulesOpenOpenId**](SocialMediaApi#putSocialmediaTopicDataingestionrulesOpenOpenId) | **PUT** /api/v2/socialmedia/topics/{topicId}/dataingestionrules/open/{openId} | Update the open data ingestion rule.
[**putSocialmediaTopicDataingestionrulesTwitterTwitterIngestionRuleId**](SocialMediaApi#putSocialmediaTopicDataingestionrulesTwitterTwitterIngestionRuleId) | **PUT** /api/v2/socialmedia/topics/{topicId}/dataingestionrules/twitter/{twitterIngestionRuleId} | Update the X (formally Twitter) data ingestion rule.



## deleteSocialmediaEscalationrule

> void deleteSocialmediaEscalationrule(escalationRuleId)


DELETE /api/v2/socialmedia/escalationrules/{escalationRuleId}

Delete an escalation rule.

Requires ANY permissions:

* socialmedia:escalationRules:delete

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.SocialMediaApi();

let escalationRuleId = "escalationRuleId_example"; // String | escalationRuleId

apiInstance.deleteSocialmediaEscalationrule(escalationRuleId)
  .then(() => {
    console.log('deleteSocialmediaEscalationrule returned successfully.');
  })
  .catch((err) => {
    console.log('There was a failure calling deleteSocialmediaEscalationrule');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **escalationRuleId** | **String** | escalationRuleId |  |

### Return type

void (no response body)


## deleteSocialmediaMessage

> void deleteSocialmediaMessage(messageId)


DELETE /api/v2/socialmedia/messages/{messageId}

Delete a social media message.

deleteSocialmediaMessage is a preview method and is subject to both breaking and non-breaking changes at any time without notice

Requires ANY permissions:

* socialmedia:message:delete

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.SocialMediaApi();

let messageId = "messageId_example"; // String | messageId

apiInstance.deleteSocialmediaMessage(messageId)
  .then(() => {
    console.log('deleteSocialmediaMessage returned successfully.');
  })
  .catch((err) => {
    console.log('There was a failure calling deleteSocialmediaMessage');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **messageId** | **String** | messageId |  |

### Return type

void (no response body)


## deleteSocialmediaTopic

> void deleteSocialmediaTopic(topicId, opts)


DELETE /api/v2/socialmedia/topics/{topicId}

Delete a social topic.

Requires ANY permissions:

* socialmedia:topic:delete

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.SocialMediaApi();

let topicId = "topicId_example"; // String | topicId
let opts = { 
  'hardDelete': true // Boolean | Determines whether a Social topic should be soft-deleted or hard-deleted (permanently removed). Set to false (soft-delete) by default.
};

apiInstance.deleteSocialmediaTopic(topicId, opts)
  .then(() => {
    console.log('deleteSocialmediaTopic returned successfully.');
  })
  .catch((err) => {
    console.log('There was a failure calling deleteSocialmediaTopic');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **topicId** | **String** | topicId |  |
 **hardDelete** | **Boolean** | Determines whether a Social topic should be soft-deleted or hard-deleted (permanently removed). Set to false (soft-delete) by default. | [optional]  |

### Return type

void (no response body)


## deleteSocialmediaTopicDataingestionrulesFacebookFacebookIngestionRuleId

> void deleteSocialmediaTopicDataingestionrulesFacebookFacebookIngestionRuleId(topicId, facebookIngestionRuleId, opts)


DELETE /api/v2/socialmedia/topics/{topicId}/dataingestionrules/facebook/{facebookIngestionRuleId}

Delete a Facebook data ingestion rule.

Requires ANY permissions:

* socialmedia:facebookDataIngestionRule:delete

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.SocialMediaApi();

let topicId = "topicId_example"; // String | topicId
let facebookIngestionRuleId = "facebookIngestionRuleId_example"; // String | facebookIngestionRuleId
let opts = { 
  'hardDelete': false // Boolean | Determines whether a Facebook data ingestion rule should be soft-deleted (have it's state set to deleted) or hard-deleted (permanently removed). Set to false (soft-delete) by default.
};

apiInstance.deleteSocialmediaTopicDataingestionrulesFacebookFacebookIngestionRuleId(topicId, facebookIngestionRuleId, opts)
  .then(() => {
    console.log('deleteSocialmediaTopicDataingestionrulesFacebookFacebookIngestionRuleId returned successfully.');
  })
  .catch((err) => {
    console.log('There was a failure calling deleteSocialmediaTopicDataingestionrulesFacebookFacebookIngestionRuleId');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **topicId** | **String** | topicId |  |
 **facebookIngestionRuleId** | **String** | facebookIngestionRuleId |  |
 **hardDelete** | **Boolean** | Determines whether a Facebook data ingestion rule should be soft-deleted (have it's state set to deleted) or hard-deleted (permanently removed). Set to false (soft-delete) by default. | [optional] [default to false] |

### Return type

void (no response body)


## deleteSocialmediaTopicDataingestionrulesOpenOpenId

> void deleteSocialmediaTopicDataingestionrulesOpenOpenId(topicId, openId, opts)


DELETE /api/v2/socialmedia/topics/{topicId}/dataingestionrules/open/{openId}

Delete a open data ingestion rule.

Requires ANY permissions:

* socialmedia:openDataIngestionRule:delete

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.SocialMediaApi();

let topicId = "topicId_example"; // String | topicId
let openId = "openId_example"; // String | openId
let opts = { 
  'hardDelete': false // Boolean | Determines whether a open data ingestion rule should be soft-deleted (have it's state set to deleted) or hard-deleted (permanently removed). Set to false (soft-delete) by default.
};

apiInstance.deleteSocialmediaTopicDataingestionrulesOpenOpenId(topicId, openId, opts)
  .then(() => {
    console.log('deleteSocialmediaTopicDataingestionrulesOpenOpenId returned successfully.');
  })
  .catch((err) => {
    console.log('There was a failure calling deleteSocialmediaTopicDataingestionrulesOpenOpenId');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **topicId** | **String** | topicId |  |
 **openId** | **String** | openId |  |
 **hardDelete** | **Boolean** | Determines whether a open data ingestion rule should be soft-deleted (have it's state set to deleted) or hard-deleted (permanently removed). Set to false (soft-delete) by default. | [optional] [default to false] |

### Return type

void (no response body)


## deleteSocialmediaTopicDataingestionrulesTwitterTwitterIngestionRuleId

> void deleteSocialmediaTopicDataingestionrulesTwitterTwitterIngestionRuleId(topicId, twitterIngestionRuleId, opts)


DELETE /api/v2/socialmedia/topics/{topicId}/dataingestionrules/twitter/{twitterIngestionRuleId}

Delete a X (formally Twitter) data ingestion rule.

Requires ANY permissions:

* socialmedia:twitterDataIngestionRule:delete

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.SocialMediaApi();

let topicId = "topicId_example"; // String | topicId
let twitterIngestionRuleId = "twitterIngestionRuleId_example"; // String | twitterIngestionRuleId
let opts = { 
  'hardDelete': false // Boolean | Determines whether a X (formally Twitter) data ingestion rule should be soft-deleted (have it's state set to deleted) or hard-deleted (permanently removed). Set to false (soft-delete) by default.
};

apiInstance.deleteSocialmediaTopicDataingestionrulesTwitterTwitterIngestionRuleId(topicId, twitterIngestionRuleId, opts)
  .then(() => {
    console.log('deleteSocialmediaTopicDataingestionrulesTwitterTwitterIngestionRuleId returned successfully.');
  })
  .catch((err) => {
    console.log('There was a failure calling deleteSocialmediaTopicDataingestionrulesTwitterTwitterIngestionRuleId');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **topicId** | **String** | topicId |  |
 **twitterIngestionRuleId** | **String** | twitterIngestionRuleId |  |
 **hardDelete** | **Boolean** | Determines whether a X (formally Twitter) data ingestion rule should be soft-deleted (have it's state set to deleted) or hard-deleted (permanently removed). Set to false (soft-delete) by default. | [optional] [default to false] |

### Return type

void (no response body)


## getSocialmediaAnalyticsAggregatesJob

> AsyncQueryStatus getSocialmediaAnalyticsAggregatesJob(jobId)


GET /api/v2/socialmedia/analytics/aggregates/jobs/{jobId}

Get status for async query for social media aggregates

Requires ANY permissions:

* socialmedia:postAggregate:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.SocialMediaApi();

let jobId = "jobId_example"; // String | jobId

apiInstance.getSocialmediaAnalyticsAggregatesJob(jobId)
  .then((data) => {
    console.log(`getSocialmediaAnalyticsAggregatesJob success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getSocialmediaAnalyticsAggregatesJob');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **jobId** | **String** | jobId |  |

### Return type

**AsyncQueryStatus**


## getSocialmediaAnalyticsAggregatesJobResults

> SocialMediaAsyncAggregateQueryResponse getSocialmediaAnalyticsAggregatesJobResults(jobId, opts)


GET /api/v2/socialmedia/analytics/aggregates/jobs/{jobId}/results

Fetch a page of results for an async social media query

Requires ANY permissions:

* socialmedia:postAggregate:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.SocialMediaApi();

let jobId = "jobId_example"; // String | jobId
let opts = { 
  'cursor': "cursor_example" // String | Cursor token to retrieve next page
};

apiInstance.getSocialmediaAnalyticsAggregatesJobResults(jobId, opts)
  .then((data) => {
    console.log(`getSocialmediaAnalyticsAggregatesJobResults success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getSocialmediaAnalyticsAggregatesJobResults');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **jobId** | **String** | jobId |  |
 **cursor** | **String** | Cursor token to retrieve next page | [optional]  |

### Return type

**SocialMediaAsyncAggregateQueryResponse**


## getSocialmediaAnalyticsMessagesJob

> AsyncQueryStatus getSocialmediaAnalyticsMessagesJob(jobId)


GET /api/v2/socialmedia/analytics/messages/jobs/{jobId}

Get status for async query for social media messages job

Requires ANY permissions:

* socialmedia:postDetail:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.SocialMediaApi();

let jobId = "jobId_example"; // String | jobId

apiInstance.getSocialmediaAnalyticsMessagesJob(jobId)
  .then((data) => {
    console.log(`getSocialmediaAnalyticsMessagesJob success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getSocialmediaAnalyticsMessagesJob');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **jobId** | **String** | jobId |  |

### Return type

**AsyncQueryStatus**


## getSocialmediaAnalyticsMessagesJobResults

> SocialMediaAsyncDetailQueryResponse getSocialmediaAnalyticsMessagesJobResults(jobId, opts)


GET /api/v2/socialmedia/analytics/messages/jobs/{jobId}/results

Fetch a page of results for an async social media messages query

Requires ANY permissions:

* socialmedia:postDetail:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.SocialMediaApi();

let jobId = "jobId_example"; // String | jobId
let opts = { 
  'cursor': "cursor_example" // String | Cursor token to retrieve next page
};

apiInstance.getSocialmediaAnalyticsMessagesJobResults(jobId, opts)
  .then((data) => {
    console.log(`getSocialmediaAnalyticsMessagesJobResults success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getSocialmediaAnalyticsMessagesJobResults');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **jobId** | **String** | jobId |  |
 **cursor** | **String** | Cursor token to retrieve next page | [optional]  |

### Return type

**SocialMediaAsyncDetailQueryResponse**


## getSocialmediaEscalationrule

> EscalationRuleResponse getSocialmediaEscalationrule(escalationRuleId)


GET /api/v2/socialmedia/escalationrules/{escalationRuleId}

Get a single escalation rule.

Requires ALL permissions:

* socialmedia:escalationRules:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.SocialMediaApi();

let escalationRuleId = "escalationRuleId_example"; // String | escalationRuleId

apiInstance.getSocialmediaEscalationrule(escalationRuleId)
  .then((data) => {
    console.log(`getSocialmediaEscalationrule success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getSocialmediaEscalationrule');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **escalationRuleId** | **String** | escalationRuleId |  |

### Return type

**EscalationRuleResponse**


## getSocialmediaEscalationrules

> SocialEscalationResponseEntityListing getSocialmediaEscalationrules(divisionId, opts)


GET /api/v2/socialmedia/escalationrules

Retrieve all escalation rules for a division.

Requires ANY permissions:

* socialmedia:escalationRules:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.SocialMediaApi();

let divisionId = "divisionId_example"; // String | One division ID
let opts = { 
  'pageNumber': 1, // Number | Page number
  'pageSize': 25 // Number | Page size
};

apiInstance.getSocialmediaEscalationrules(divisionId, opts)
  .then((data) => {
    console.log(`getSocialmediaEscalationrules success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getSocialmediaEscalationrules');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **divisionId** | **String** | One division ID |  |
 **pageNumber** | **Number** | Page number | [optional] [default to 1] |
 **pageSize** | **Number** | Page size | [optional] [default to 25] |

### Return type

**SocialEscalationResponseEntityListing**


## getSocialmediaTopic

> SocialTopicResponse getSocialmediaTopic(topicId, opts)


GET /api/v2/socialmedia/topics/{topicId}

Get a single social topic.

Requires ANY permissions:

* socialmedia:topic:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.SocialMediaApi();

let topicId = "topicId_example"; // String | topicId
let opts = { 
  'includeDeleted': true // Boolean | Determines whether to include soft-deleted items in the result.
};

apiInstance.getSocialmediaTopic(topicId, opts)
  .then((data) => {
    console.log(`getSocialmediaTopic success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getSocialmediaTopic');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **topicId** | **String** | topicId |  |
 **includeDeleted** | **Boolean** | Determines whether to include soft-deleted items in the result. | [optional]  |

### Return type

**SocialTopicResponse**


## getSocialmediaTopicDataingestionrules

> DataIngestionRuleResponseEntityListing getSocialmediaTopicDataingestionrules(topicId, opts)


GET /api/v2/socialmedia/topics/{topicId}/dataingestionrules

Retrieve all social topic data ingestion rules with pagination.

Requires ANY permissions:

* socialmedia:topic:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.SocialMediaApi();

let topicId = "topicId_example"; // String | topicId
let opts = { 
  'pageNumber': 1, // Number | Page number
  'pageSize': 25, // Number | Page size
  'includeDeleted': true // Boolean | Determines whether to include soft-deleted items in the result.
};

apiInstance.getSocialmediaTopicDataingestionrules(topicId, opts)
  .then((data) => {
    console.log(`getSocialmediaTopicDataingestionrules success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getSocialmediaTopicDataingestionrules');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **topicId** | **String** | topicId |  |
 **pageNumber** | **Number** | Page number | [optional] [default to 1] |
 **pageSize** | **Number** | Page size | [optional] [default to 25] |
 **includeDeleted** | **Boolean** | Determines whether to include soft-deleted items in the result. | [optional]  |

### Return type

**DataIngestionRuleResponseEntityListing**


## getSocialmediaTopicDataingestionrulesFacebookFacebookIngestionRuleId

> FacebookDataIngestionRuleResponse getSocialmediaTopicDataingestionrulesFacebookFacebookIngestionRuleId(topicId, facebookIngestionRuleId, opts)


GET /api/v2/socialmedia/topics/{topicId}/dataingestionrules/facebook/{facebookIngestionRuleId}

Get a single Facebook data ingestion rule.

Requires ALL permissions:

* socialmedia:facebookDataIngestionRule:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.SocialMediaApi();

let topicId = "topicId_example"; // String | topicId
let facebookIngestionRuleId = "facebookIngestionRuleId_example"; // String | facebookIngestionRuleId
let opts = { 
  'includeDeleted': true // Boolean | Determines whether to include soft-deleted items in the result.
};

apiInstance.getSocialmediaTopicDataingestionrulesFacebookFacebookIngestionRuleId(topicId, facebookIngestionRuleId, opts)
  .then((data) => {
    console.log(`getSocialmediaTopicDataingestionrulesFacebookFacebookIngestionRuleId success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getSocialmediaTopicDataingestionrulesFacebookFacebookIngestionRuleId');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **topicId** | **String** | topicId |  |
 **facebookIngestionRuleId** | **String** | facebookIngestionRuleId |  |
 **includeDeleted** | **Boolean** | Determines whether to include soft-deleted items in the result. | [optional]  |

### Return type

**FacebookDataIngestionRuleResponse**


## getSocialmediaTopicDataingestionrulesFacebookFacebookIngestionRuleIdVersion

> FacebookDataIngestionRuleVersionResponse getSocialmediaTopicDataingestionrulesFacebookFacebookIngestionRuleIdVersion(topicId, facebookIngestionRuleId, dataIngestionRuleVersion, opts)


GET /api/v2/socialmedia/topics/{topicId}/dataingestionrules/facebook/{facebookIngestionRuleId}/versions/{dataIngestionRuleVersion}

Get a single Facebook data ingestion rule version.

Requires ALL permissions:

* socialmedia:facebookDataIngestionRule:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.SocialMediaApi();

let topicId = "topicId_example"; // String | topicId
let facebookIngestionRuleId = "facebookIngestionRuleId_example"; // String | facebookIngestionRuleId
let dataIngestionRuleVersion = "dataIngestionRuleVersion_example"; // String | version
let opts = { 
  'includeDeleted': true // Boolean | Determines whether to include soft-deleted item in the result.
};

apiInstance.getSocialmediaTopicDataingestionrulesFacebookFacebookIngestionRuleIdVersion(topicId, facebookIngestionRuleId, dataIngestionRuleVersion, opts)
  .then((data) => {
    console.log(`getSocialmediaTopicDataingestionrulesFacebookFacebookIngestionRuleIdVersion success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getSocialmediaTopicDataingestionrulesFacebookFacebookIngestionRuleIdVersion');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **topicId** | **String** | topicId |  |
 **facebookIngestionRuleId** | **String** | facebookIngestionRuleId |  |
 **dataIngestionRuleVersion** | **String** | version |  |
 **includeDeleted** | **Boolean** | Determines whether to include soft-deleted item in the result. | [optional]  |

### Return type

**FacebookDataIngestionRuleVersionResponse**


## getSocialmediaTopicDataingestionrulesFacebookFacebookIngestionRuleIdVersions

> FacebookDataIngestionRuleVersionResponseEntityListing getSocialmediaTopicDataingestionrulesFacebookFacebookIngestionRuleIdVersions(topicId, facebookIngestionRuleId, opts)


GET /api/v2/socialmedia/topics/{topicId}/dataingestionrules/facebook/{facebookIngestionRuleId}/versions

Get the Facebook data ingestion rule versions.

Requires ALL permissions:

* socialmedia:facebookDataIngestionRule:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.SocialMediaApi();

let topicId = "topicId_example"; // String | topicId
let facebookIngestionRuleId = "facebookIngestionRuleId_example"; // String | facebookIngestionRuleId
let opts = { 
  'pageNumber': 1, // Number | Page number
  'pageSize': 25, // Number | Page size
  'includeDeleted': true // Boolean | Determines whether to include soft-deleted items in the result.
};

apiInstance.getSocialmediaTopicDataingestionrulesFacebookFacebookIngestionRuleIdVersions(topicId, facebookIngestionRuleId, opts)
  .then((data) => {
    console.log(`getSocialmediaTopicDataingestionrulesFacebookFacebookIngestionRuleIdVersions success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getSocialmediaTopicDataingestionrulesFacebookFacebookIngestionRuleIdVersions');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **topicId** | **String** | topicId |  |
 **facebookIngestionRuleId** | **String** | facebookIngestionRuleId |  |
 **pageNumber** | **Number** | Page number | [optional] [default to 1] |
 **pageSize** | **Number** | Page size | [optional] [default to 25] |
 **includeDeleted** | **Boolean** | Determines whether to include soft-deleted items in the result. | [optional]  |

### Return type

**FacebookDataIngestionRuleVersionResponseEntityListing**


## getSocialmediaTopicDataingestionrulesOpenOpenId

> OpenDataIngestionRuleResponse getSocialmediaTopicDataingestionrulesOpenOpenId(topicId, openId, opts)


GET /api/v2/socialmedia/topics/{topicId}/dataingestionrules/open/{openId}

Get a single open data ingestion rule.

Requires ALL permissions:

* socialmedia:openDataIngestionRule:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.SocialMediaApi();

let topicId = "topicId_example"; // String | topicId
let openId = "openId_example"; // String | openId
let opts = { 
  'includeDeleted': true // Boolean | Determines whether to include soft-deleted items in the result.
};

apiInstance.getSocialmediaTopicDataingestionrulesOpenOpenId(topicId, openId, opts)
  .then((data) => {
    console.log(`getSocialmediaTopicDataingestionrulesOpenOpenId success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getSocialmediaTopicDataingestionrulesOpenOpenId');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **topicId** | **String** | topicId |  |
 **openId** | **String** | openId |  |
 **includeDeleted** | **Boolean** | Determines whether to include soft-deleted items in the result. | [optional]  |

### Return type

**OpenDataIngestionRuleResponse**


## getSocialmediaTopicDataingestionrulesOpenOpenIdVersion

> OpenDataIngestionRuleVersionResponse getSocialmediaTopicDataingestionrulesOpenOpenIdVersion(topicId, openId, dataIngestionRuleVersion, opts)


GET /api/v2/socialmedia/topics/{topicId}/dataingestionrules/open/{openId}/versions/{dataIngestionRuleVersion}

Get a single Open data ingestion rule version.

Requires ALL permissions:

* socialmedia:openDataIngestionRule:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.SocialMediaApi();

let topicId = "topicId_example"; // String | topicId
let openId = "openId_example"; // String | openId
let dataIngestionRuleVersion = "dataIngestionRuleVersion_example"; // String | version
let opts = { 
  'includeDeleted': true // Boolean | Determines whether to include soft-deleted item in the result.
};

apiInstance.getSocialmediaTopicDataingestionrulesOpenOpenIdVersion(topicId, openId, dataIngestionRuleVersion, opts)
  .then((data) => {
    console.log(`getSocialmediaTopicDataingestionrulesOpenOpenIdVersion success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getSocialmediaTopicDataingestionrulesOpenOpenIdVersion');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **topicId** | **String** | topicId |  |
 **openId** | **String** | openId |  |
 **dataIngestionRuleVersion** | **String** | version |  |
 **includeDeleted** | **Boolean** | Determines whether to include soft-deleted item in the result. | [optional]  |

### Return type

**OpenDataIngestionRuleVersionResponse**


## getSocialmediaTopicDataingestionrulesOpenOpenIdVersions

> OpenDataIngestionRuleVersionResponseEntityListing getSocialmediaTopicDataingestionrulesOpenOpenIdVersions(topicId, openId, opts)


GET /api/v2/socialmedia/topics/{topicId}/dataingestionrules/open/{openId}/versions

Get the Open data ingestion rule versions.

Requires ALL permissions:

* socialmedia:openDataIngestionRule:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.SocialMediaApi();

let topicId = "topicId_example"; // String | topicId
let openId = "openId_example"; // String | openId
let opts = { 
  'pageNumber': 1, // Number | Page number
  'pageSize': 25, // Number | Page size
  'includeDeleted': true // Boolean | Determines whether to include soft-deleted items in the result.
};

apiInstance.getSocialmediaTopicDataingestionrulesOpenOpenIdVersions(topicId, openId, opts)
  .then((data) => {
    console.log(`getSocialmediaTopicDataingestionrulesOpenOpenIdVersions success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getSocialmediaTopicDataingestionrulesOpenOpenIdVersions');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **topicId** | **String** | topicId |  |
 **openId** | **String** | openId |  |
 **pageNumber** | **Number** | Page number | [optional] [default to 1] |
 **pageSize** | **Number** | Page size | [optional] [default to 25] |
 **includeDeleted** | **Boolean** | Determines whether to include soft-deleted items in the result. | [optional]  |

### Return type

**OpenDataIngestionRuleVersionResponseEntityListing**


## getSocialmediaTopicDataingestionrulesTwitterTwitterIngestionRuleId

> TwitterDataIngestionRuleResponse getSocialmediaTopicDataingestionrulesTwitterTwitterIngestionRuleId(topicId, twitterIngestionRuleId, opts)


GET /api/v2/socialmedia/topics/{topicId}/dataingestionrules/twitter/{twitterIngestionRuleId}

Get a single X (formally Twitter) data ingestion rule.

Requires ALL permissions:

* socialmedia:twitterDataIngestionRule:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.SocialMediaApi();

let topicId = "topicId_example"; // String | topicId
let twitterIngestionRuleId = "twitterIngestionRuleId_example"; // String | twitterIngestionRuleId
let opts = { 
  'includeDeleted': true // Boolean | Determines whether to include soft-deleted items in the result.
};

apiInstance.getSocialmediaTopicDataingestionrulesTwitterTwitterIngestionRuleId(topicId, twitterIngestionRuleId, opts)
  .then((data) => {
    console.log(`getSocialmediaTopicDataingestionrulesTwitterTwitterIngestionRuleId success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getSocialmediaTopicDataingestionrulesTwitterTwitterIngestionRuleId');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **topicId** | **String** | topicId |  |
 **twitterIngestionRuleId** | **String** | twitterIngestionRuleId |  |
 **includeDeleted** | **Boolean** | Determines whether to include soft-deleted items in the result. | [optional]  |

### Return type

**TwitterDataIngestionRuleResponse**


## getSocialmediaTopicDataingestionrulesTwitterTwitterIngestionRuleIdVersion

> TwitterDataIngestionRuleVersionResponse getSocialmediaTopicDataingestionrulesTwitterTwitterIngestionRuleIdVersion(topicId, twitterIngestionRuleId, dataIngestionRuleVersion, opts)


GET /api/v2/socialmedia/topics/{topicId}/dataingestionrules/twitter/{twitterIngestionRuleId}/versions/{dataIngestionRuleVersion}

Get a single X (formally Twitter) data ingestion rule version.

Requires ALL permissions:

* socialmedia:twitterDataIngestionRule:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.SocialMediaApi();

let topicId = "topicId_example"; // String | topicId
let twitterIngestionRuleId = "twitterIngestionRuleId_example"; // String | twitterIngestionRuleId
let dataIngestionRuleVersion = "dataIngestionRuleVersion_example"; // String | version
let opts = { 
  'includeDeleted': true // Boolean | Determines whether to include soft-deleted item in the result.
};

apiInstance.getSocialmediaTopicDataingestionrulesTwitterTwitterIngestionRuleIdVersion(topicId, twitterIngestionRuleId, dataIngestionRuleVersion, opts)
  .then((data) => {
    console.log(`getSocialmediaTopicDataingestionrulesTwitterTwitterIngestionRuleIdVersion success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getSocialmediaTopicDataingestionrulesTwitterTwitterIngestionRuleIdVersion');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **topicId** | **String** | topicId |  |
 **twitterIngestionRuleId** | **String** | twitterIngestionRuleId |  |
 **dataIngestionRuleVersion** | **String** | version |  |
 **includeDeleted** | **Boolean** | Determines whether to include soft-deleted item in the result. | [optional]  |

### Return type

**TwitterDataIngestionRuleVersionResponse**


## getSocialmediaTopicDataingestionrulesTwitterTwitterIngestionRuleIdVersions

> TwitterDataIngestionRuleVersionResponseEntityListing getSocialmediaTopicDataingestionrulesTwitterTwitterIngestionRuleIdVersions(topicId, twitterIngestionRuleId, opts)


GET /api/v2/socialmedia/topics/{topicId}/dataingestionrules/twitter/{twitterIngestionRuleId}/versions

Get the Open data ingestion rule versions.

Requires ALL permissions:

* socialmedia:twitterDataIngestionRule:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.SocialMediaApi();

let topicId = "topicId_example"; // String | topicId
let twitterIngestionRuleId = "twitterIngestionRuleId_example"; // String | twitterIngestionRuleId
let opts = { 
  'pageNumber': 1, // Number | Page number
  'pageSize': 25, // Number | Page size
  'includeDeleted': true // Boolean | Determines whether to include soft-deleted items in the result.
};

apiInstance.getSocialmediaTopicDataingestionrulesTwitterTwitterIngestionRuleIdVersions(topicId, twitterIngestionRuleId, opts)
  .then((data) => {
    console.log(`getSocialmediaTopicDataingestionrulesTwitterTwitterIngestionRuleIdVersions success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getSocialmediaTopicDataingestionrulesTwitterTwitterIngestionRuleIdVersions');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **topicId** | **String** | topicId |  |
 **twitterIngestionRuleId** | **String** | twitterIngestionRuleId |  |
 **pageNumber** | **Number** | Page number | [optional] [default to 1] |
 **pageSize** | **Number** | Page size | [optional] [default to 25] |
 **includeDeleted** | **Boolean** | Determines whether to include soft-deleted items in the result. | [optional]  |

### Return type

**TwitterDataIngestionRuleVersionResponseEntityListing**


## getSocialmediaTopics

> SocialTopicResponseEntityListing getSocialmediaTopics(opts)


GET /api/v2/socialmedia/topics

Retrieve all social topics.

Requires ANY permissions:

* socialmedia:topic:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.SocialMediaApi();

let opts = { 
  'pageNumber': 1, // Number | Page number
  'pageSize': 25, // Number | Page size
  'divisionIds': ["divisionIds_example"], // [String] | One or more division IDs. If nothing is provided, the social topics associated withthe list of divisions that the user has access to will be returned.
  'includeDeleted': true // Boolean | Determines whether to include soft-deleted items in the result.
};

apiInstance.getSocialmediaTopics(opts)
  .then((data) => {
    console.log(`getSocialmediaTopics success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getSocialmediaTopics');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **pageNumber** | **Number** | Page number | [optional] [default to 1] |
 **pageSize** | **Number** | Page size | [optional] [default to 25] |
 **divisionIds** | **[String]** | One or more division IDs. If nothing is provided, the social topics associated withthe list of divisions that the user has access to will be returned. | [optional]  |
 **includeDeleted** | **Boolean** | Determines whether to include soft-deleted items in the result. | [optional]  |

### Return type

**SocialTopicResponseEntityListing**


## patchSocialmediaTopic

> SocialTopicResponse patchSocialmediaTopic(topicId, opts)


PATCH /api/v2/socialmedia/topics/{topicId}

Update a social topic.

Requires ALL permissions:

* socialmedia:topic:edit

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.SocialMediaApi();

let topicId = "topicId_example"; // String | topicId
let opts = { 
  'body': {} // Object | 
};

apiInstance.patchSocialmediaTopic(topicId, opts)
  .then((data) => {
    console.log(`patchSocialmediaTopic success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling patchSocialmediaTopic');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **topicId** | **String** | topicId |  |
 **body** | **Object** |  | [optional]  |

### Return type

**SocialTopicResponse**


## patchSocialmediaTopicDataingestionrulesFacebookFacebookIngestionRuleId

> FacebookDataIngestionRuleResponse patchSocialmediaTopicDataingestionrulesFacebookFacebookIngestionRuleId(topicId, facebookIngestionRuleId, opts)


PATCH /api/v2/socialmedia/topics/{topicId}/dataingestionrules/facebook/{facebookIngestionRuleId}

Update the status of a Facebook data ingestion rule.

Requires ALL permissions:

* socialmedia:facebookDataIngestionRule:edit

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.SocialMediaApi();

let topicId = "topicId_example"; // String | topicId
let facebookIngestionRuleId = "facebookIngestionRuleId_example"; // String | facebookIngestionRuleId
let opts = { 
  'body': {} // Object | 
};

apiInstance.patchSocialmediaTopicDataingestionrulesFacebookFacebookIngestionRuleId(topicId, facebookIngestionRuleId, opts)
  .then((data) => {
    console.log(`patchSocialmediaTopicDataingestionrulesFacebookFacebookIngestionRuleId success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling patchSocialmediaTopicDataingestionrulesFacebookFacebookIngestionRuleId');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **topicId** | **String** | topicId |  |
 **facebookIngestionRuleId** | **String** | facebookIngestionRuleId |  |
 **body** | **Object** |  | [optional]  |

### Return type

**FacebookDataIngestionRuleResponse**


## patchSocialmediaTopicDataingestionrulesOpenOpenId

> OpenDataIngestionRuleResponse patchSocialmediaTopicDataingestionrulesOpenOpenId(topicId, openId, opts)


PATCH /api/v2/socialmedia/topics/{topicId}/dataingestionrules/open/{openId}

Update the status of a open data ingestion rule.

Requires ALL permissions:

* socialmedia:openDataIngestionRule:edit

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.SocialMediaApi();

let topicId = "topicId_example"; // String | topicId
let openId = "openId_example"; // String | openId
let opts = { 
  'body': {} // Object | 
};

apiInstance.patchSocialmediaTopicDataingestionrulesOpenOpenId(topicId, openId, opts)
  .then((data) => {
    console.log(`patchSocialmediaTopicDataingestionrulesOpenOpenId success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling patchSocialmediaTopicDataingestionrulesOpenOpenId');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **topicId** | **String** | topicId |  |
 **openId** | **String** | openId |  |
 **body** | **Object** |  | [optional]  |

### Return type

**OpenDataIngestionRuleResponse**


## patchSocialmediaTopicDataingestionrulesTwitterTwitterIngestionRuleId

> TwitterDataIngestionRuleResponse patchSocialmediaTopicDataingestionrulesTwitterTwitterIngestionRuleId(topicId, twitterIngestionRuleId, opts)


PATCH /api/v2/socialmedia/topics/{topicId}/dataingestionrules/twitter/{twitterIngestionRuleId}

Update the status of a X (formally Twitter) data ingestion rule.

Requires ALL permissions:

* socialmedia:twitterDataIngestionRule:edit

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.SocialMediaApi();

let topicId = "topicId_example"; // String | topicId
let twitterIngestionRuleId = "twitterIngestionRuleId_example"; // String | twitterIngestionRuleId
let opts = { 
  'body': {} // Object | 
};

apiInstance.patchSocialmediaTopicDataingestionrulesTwitterTwitterIngestionRuleId(topicId, twitterIngestionRuleId, opts)
  .then((data) => {
    console.log(`patchSocialmediaTopicDataingestionrulesTwitterTwitterIngestionRuleId success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling patchSocialmediaTopicDataingestionrulesTwitterTwitterIngestionRuleId');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **topicId** | **String** | topicId |  |
 **twitterIngestionRuleId** | **String** | twitterIngestionRuleId |  |
 **body** | **Object** |  | [optional]  |

### Return type

**TwitterDataIngestionRuleResponse**


## postSocialmediaAnalyticsAggregatesJobs

> AsyncQueryResponse postSocialmediaAnalyticsAggregatesJobs(body)


POST /api/v2/socialmedia/analytics/aggregates/jobs

Query for social media aggregates asynchronously

Requires ANY permissions:

* socialmedia:postAggregate:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.SocialMediaApi();

let body = {}; // Object | query

apiInstance.postSocialmediaAnalyticsAggregatesJobs(body)
  .then((data) => {
    console.log(`postSocialmediaAnalyticsAggregatesJobs success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling postSocialmediaAnalyticsAggregatesJobs');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **body** | **Object** | query |  |

### Return type

**AsyncQueryResponse**


## postSocialmediaAnalyticsMessagesJobs

> AsyncQueryResponse postSocialmediaAnalyticsMessagesJobs(body)


POST /api/v2/socialmedia/analytics/messages/jobs

Query for social media messages asynchronously

Requires ANY permissions:

* socialmedia:postDetail:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.SocialMediaApi();

let body = {}; // Object | query

apiInstance.postSocialmediaAnalyticsMessagesJobs(body)
  .then((data) => {
    console.log(`postSocialmediaAnalyticsMessagesJobs success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling postSocialmediaAnalyticsMessagesJobs');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **body** | **Object** | query |  |

### Return type

**AsyncQueryResponse**


## postSocialmediaEscalationrules

> EscalationRuleResponse postSocialmediaEscalationrules(opts)


POST /api/v2/socialmedia/escalationrules

Create an escalation rule.

Requires ANY permissions:

* socialmedia:escalationRules:add

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.SocialMediaApi();

let opts = { 
  'body': {} // Object | 
};

apiInstance.postSocialmediaEscalationrules(opts)
  .then((data) => {
    console.log(`postSocialmediaEscalationrules success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling postSocialmediaEscalationrules');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **body** | **Object** |  | [optional]  |

### Return type

**EscalationRuleResponse**


## postSocialmediaEscalationsMessages

> ManualEscalationResponse postSocialmediaEscalationsMessages(divisionId, opts)


POST /api/v2/socialmedia/escalations/messages

Escalate message to a conversation manually

Requires ANY permissions:

* socialmedia:message:escalate

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.SocialMediaApi();

let divisionId = "divisionId_example"; // String | One division ID
let opts = { 
  'body': {} // Object | 
};

apiInstance.postSocialmediaEscalationsMessages(divisionId, opts)
  .then((data) => {
    console.log(`postSocialmediaEscalationsMessages success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling postSocialmediaEscalationsMessages');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **divisionId** | **String** | One division ID |  |
 **body** | **Object** |  | [optional]  |

### Return type

**ManualEscalationResponse**


## postSocialmediaTopicDataingestionrulesFacebook

> FacebookDataIngestionRuleResponse postSocialmediaTopicDataingestionrulesFacebook(topicId, opts)


POST /api/v2/socialmedia/topics/{topicId}/dataingestionrules/facebook

Create an Facebook data ingestion rule.

Requires ANY permissions:

* socialmedia:facebookDataIngestionRule:add

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.SocialMediaApi();

let topicId = "topicId_example"; // String | topicId
let opts = { 
  'body': {} // Object | 
};

apiInstance.postSocialmediaTopicDataingestionrulesFacebook(topicId, opts)
  .then((data) => {
    console.log(`postSocialmediaTopicDataingestionrulesFacebook success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling postSocialmediaTopicDataingestionrulesFacebook');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **topicId** | **String** | topicId |  |
 **body** | **Object** |  | [optional]  |

### Return type

**FacebookDataIngestionRuleResponse**


## postSocialmediaTopicDataingestionrulesOpen

> OpenDataIngestionRuleResponse postSocialmediaTopicDataingestionrulesOpen(topicId, opts)


POST /api/v2/socialmedia/topics/{topicId}/dataingestionrules/open

Create an open data ingestion rule.

Requires ANY permissions:

* socialmedia:openDataIngestionRule:add

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.SocialMediaApi();

let topicId = "topicId_example"; // String | topicId
let opts = { 
  'body': {} // Object | 
};

apiInstance.postSocialmediaTopicDataingestionrulesOpen(topicId, opts)
  .then((data) => {
    console.log(`postSocialmediaTopicDataingestionrulesOpen success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling postSocialmediaTopicDataingestionrulesOpen');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **topicId** | **String** | topicId |  |
 **body** | **Object** |  | [optional]  |

### Return type

**OpenDataIngestionRuleResponse**


## postSocialmediaTopicDataingestionrulesOpenRuleIdMessagesBulk

> OpenSocialNormalizedMessageEntityListing postSocialmediaTopicDataingestionrulesOpenRuleIdMessagesBulk(topicId, ruleId, body)


POST /api/v2/socialmedia/topics/{topicId}/dataingestionrules/open/{ruleId}/messages/bulk

Ingest a list of Open Social Messages

Ingest a list of open social messages to an ingestion rule on a topic. This endpoint will ingest and enrich these messages.  In order to call this endpoint you will need OAuth token generated using OAuth client credentials authorized with at least social scope.

Requires ALL permissions:

* socialmedia:message:receive

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.SocialMediaApi();

let topicId = "topicId_example"; // String | Topic ID
let ruleId = "ruleId_example"; // String | Data Ingestion Rule ID
let body = [{}]; // Object | NormalizedMessage

apiInstance.postSocialmediaTopicDataingestionrulesOpenRuleIdMessagesBulk(topicId, ruleId, body)
  .then((data) => {
    console.log(`postSocialmediaTopicDataingestionrulesOpenRuleIdMessagesBulk success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling postSocialmediaTopicDataingestionrulesOpenRuleIdMessagesBulk');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **topicId** | **String** | Topic ID |  |
 **ruleId** | **String** | Data Ingestion Rule ID |  |
 **body** | **Object** | NormalizedMessage |  |

### Return type

**OpenSocialNormalizedMessageEntityListing**


## postSocialmediaTopicDataingestionrulesOpenRuleIdReactionsBulk

> OpenSocialReactionsNormalizedEventEntityListing postSocialmediaTopicDataingestionrulesOpenRuleIdReactionsBulk(topicId, ruleId, body)


POST /api/v2/socialmedia/topics/{topicId}/dataingestionrules/open/{ruleId}/reactions/bulk

Ingest a list of Open Social Reactions

Ingest a list of open social reactions to an ingestion rule on a topic. This endpoint will ingest these reactions.  In order to call this endpoint you will need OAuth token generated using OAuth client credentials authorized with at least social scope.

Requires ALL permissions:

* socialmedia:reaction:receive

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.SocialMediaApi();

let topicId = "topicId_example"; // String | Topic ID
let ruleId = "ruleId_example"; // String | Data Ingestion Rule ID
let body = {}; // Object | NormalizedEvent

apiInstance.postSocialmediaTopicDataingestionrulesOpenRuleIdReactionsBulk(topicId, ruleId, body)
  .then((data) => {
    console.log(`postSocialmediaTopicDataingestionrulesOpenRuleIdReactionsBulk success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling postSocialmediaTopicDataingestionrulesOpenRuleIdReactionsBulk');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **topicId** | **String** | Topic ID |  |
 **ruleId** | **String** | Data Ingestion Rule ID |  |
 **body** | **Object** | NormalizedEvent |  |

### Return type

**OpenSocialReactionsNormalizedEventEntityListing**


## postSocialmediaTopicDataingestionrulesTwitter

> TwitterDataIngestionRuleResponse postSocialmediaTopicDataingestionrulesTwitter(topicId, opts)


POST /api/v2/socialmedia/topics/{topicId}/dataingestionrules/twitter

Create an twitter data ingestion rule.

Requires ANY permissions:

* socialmedia:twitterDataIngestionRule:add

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.SocialMediaApi();

let topicId = "topicId_example"; // String | topicId
let opts = { 
  'body': {} // Object | 
};

apiInstance.postSocialmediaTopicDataingestionrulesTwitter(topicId, opts)
  .then((data) => {
    console.log(`postSocialmediaTopicDataingestionrulesTwitter success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling postSocialmediaTopicDataingestionrulesTwitter');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **topicId** | **String** | topicId |  |
 **body** | **Object** |  | [optional]  |

### Return type

**TwitterDataIngestionRuleResponse**


## postSocialmediaTopics

> SocialTopicResponse postSocialmediaTopics(opts)


POST /api/v2/socialmedia/topics

Create a social topic.

Requires ANY permissions:

* socialmedia:topic:add

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.SocialMediaApi();

let opts = { 
  'body': {} // Object | 
};

apiInstance.postSocialmediaTopics(opts)
  .then((data) => {
    console.log(`postSocialmediaTopics success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling postSocialmediaTopics');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **body** | **Object** |  | [optional]  |

### Return type

**SocialTopicResponse**


## postSocialmediaTwitterHistoricalTweets

> TwitterDataHistoricalTweetResponse postSocialmediaTwitterHistoricalTweets(body)


POST /api/v2/socialmedia/twitter/historical/tweets

Retrieves historical tweet count for search terms, optional countries list and the current limit and usage for the organization.

Requires ALL permissions:

* socialmedia:twitterDataIngestionRule:add

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.SocialMediaApi();

let body = {}; // Object | TwitterDataHistoricalTweetRequest

apiInstance.postSocialmediaTwitterHistoricalTweets(body)
  .then((data) => {
    console.log(`postSocialmediaTwitterHistoricalTweets success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling postSocialmediaTwitterHistoricalTweets');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **body** | **Object** | TwitterDataHistoricalTweetRequest |  |

### Return type

**TwitterDataHistoricalTweetResponse**


## putSocialmediaEscalationrule

> EscalationRuleResponse putSocialmediaEscalationrule(escalationRuleId, opts)


PUT /api/v2/socialmedia/escalationrules/{escalationRuleId}

Update the escalation rule.

Requires ALL permissions:

* socialmedia:escalationRules:edit

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.SocialMediaApi();

let escalationRuleId = "escalationRuleId_example"; // String | escalationRuleId
let opts = { 
  'body': {} // Object | 
};

apiInstance.putSocialmediaEscalationrule(escalationRuleId, opts)
  .then((data) => {
    console.log(`putSocialmediaEscalationrule success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling putSocialmediaEscalationrule');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **escalationRuleId** | **String** | escalationRuleId |  |
 **body** | **Object** |  | [optional]  |

### Return type

**EscalationRuleResponse**


## putSocialmediaTopicDataingestionrulesFacebookFacebookIngestionRuleId

> FacebookDataIngestionRuleResponse putSocialmediaTopicDataingestionrulesFacebookFacebookIngestionRuleId(topicId, facebookIngestionRuleId, opts)


PUT /api/v2/socialmedia/topics/{topicId}/dataingestionrules/facebook/{facebookIngestionRuleId}

Update the Facebook data ingestion rule.

Requires ALL permissions:

* socialmedia:facebookDataIngestionRule:edit

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.SocialMediaApi();

let topicId = "topicId_example"; // String | topicId
let facebookIngestionRuleId = "facebookIngestionRuleId_example"; // String | facebookIngestionRuleId
let opts = { 
  'body': {} // Object | 
};

apiInstance.putSocialmediaTopicDataingestionrulesFacebookFacebookIngestionRuleId(topicId, facebookIngestionRuleId, opts)
  .then((data) => {
    console.log(`putSocialmediaTopicDataingestionrulesFacebookFacebookIngestionRuleId success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling putSocialmediaTopicDataingestionrulesFacebookFacebookIngestionRuleId');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **topicId** | **String** | topicId |  |
 **facebookIngestionRuleId** | **String** | facebookIngestionRuleId |  |
 **body** | **Object** |  | [optional]  |

### Return type

**FacebookDataIngestionRuleResponse**


## putSocialmediaTopicDataingestionrulesOpenOpenId

> OpenDataIngestionRuleResponse putSocialmediaTopicDataingestionrulesOpenOpenId(topicId, openId, opts)


PUT /api/v2/socialmedia/topics/{topicId}/dataingestionrules/open/{openId}

Update the open data ingestion rule.

Requires ALL permissions:

* socialmedia:openDataIngestionRule:edit

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.SocialMediaApi();

let topicId = "topicId_example"; // String | topicId
let openId = "openId_example"; // String | openId
let opts = { 
  'body': {} // Object | 
};

apiInstance.putSocialmediaTopicDataingestionrulesOpenOpenId(topicId, openId, opts)
  .then((data) => {
    console.log(`putSocialmediaTopicDataingestionrulesOpenOpenId success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling putSocialmediaTopicDataingestionrulesOpenOpenId');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **topicId** | **String** | topicId |  |
 **openId** | **String** | openId |  |
 **body** | **Object** |  | [optional]  |

### Return type

**OpenDataIngestionRuleResponse**


## putSocialmediaTopicDataingestionrulesTwitterTwitterIngestionRuleId

> TwitterDataIngestionRuleResponse putSocialmediaTopicDataingestionrulesTwitterTwitterIngestionRuleId(topicId, twitterIngestionRuleId, opts)


PUT /api/v2/socialmedia/topics/{topicId}/dataingestionrules/twitter/{twitterIngestionRuleId}

Update the X (formally Twitter) data ingestion rule.

Requires ALL permissions:

* socialmedia:twitterDataIngestionRule:edit

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.SocialMediaApi();

let topicId = "topicId_example"; // String | topicId
let twitterIngestionRuleId = "twitterIngestionRuleId_example"; // String | twitterIngestionRuleId
let opts = { 
  'body': {} // Object | 
};

apiInstance.putSocialmediaTopicDataingestionrulesTwitterTwitterIngestionRuleId(topicId, twitterIngestionRuleId, opts)
  .then((data) => {
    console.log(`putSocialmediaTopicDataingestionrulesTwitterTwitterIngestionRuleId success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling putSocialmediaTopicDataingestionrulesTwitterTwitterIngestionRuleId');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **topicId** | **String** | topicId |  |
 **twitterIngestionRuleId** | **String** | twitterIngestionRuleId |  |
 **body** | **Object** |  | [optional]  |

### Return type

**TwitterDataIngestionRuleResponse**


_purecloud-platform-client-v2@229.1.0_
