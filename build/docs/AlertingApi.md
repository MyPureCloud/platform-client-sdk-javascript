---
title: AlertingApi
---
# platformClient.AlertingApi

All URIs are relative to *https://api.mypurecloud.com*

| Method | HTTP request | Description |
| ------------- | ------------- | ------------- |
[**deleteAlertingAlert**](AlertingApi.html#deleteAlertingAlert) | **DELETE** /api/v2/alerting/alerts/{alertId} | Delete an alert
[**deleteAlertingInteractionstatsAlert**](AlertingApi.html#deleteAlertingInteractionstatsAlert) | **DELETE** /api/v2/alerting/interactionstats/alerts/{alertId} | Delete an interaction stats alert
[**deleteAlertingInteractionstatsRule**](AlertingApi.html#deleteAlertingInteractionstatsRule) | **DELETE** /api/v2/alerting/interactionstats/rules/{ruleId} | Delete an interaction stats rule.
[**deleteAlertingRule**](AlertingApi.html#deleteAlertingRule) | **DELETE** /api/v2/alerting/rules/{ruleId} | Delete a rule.
[**getAlertingAlert**](AlertingApi.html#getAlertingAlert) | **GET** /api/v2/alerting/alerts/{alertId} | Get an alert
[**getAlertingAlertsActive**](AlertingApi.html#getAlertingAlertsActive) | **GET** /api/v2/alerting/alerts/active | Gets active alert count for a user.
[**getAlertingInteractionstatsAlert**](AlertingApi.html#getAlertingInteractionstatsAlert) | **GET** /api/v2/alerting/interactionstats/alerts/{alertId} | Get an interaction stats alert
[**getAlertingInteractionstatsAlerts**](AlertingApi.html#getAlertingInteractionstatsAlerts) | **GET** /api/v2/alerting/interactionstats/alerts | Get interaction stats alert list.
[**getAlertingInteractionstatsAlertsUnread**](AlertingApi.html#getAlertingInteractionstatsAlertsUnread) | **GET** /api/v2/alerting/interactionstats/alerts/unread | Gets user unread count of interaction stats alerts.
[**getAlertingInteractionstatsRule**](AlertingApi.html#getAlertingInteractionstatsRule) | **GET** /api/v2/alerting/interactionstats/rules/{ruleId} | Get an interaction stats rule.
[**getAlertingInteractionstatsRules**](AlertingApi.html#getAlertingInteractionstatsRules) | **GET** /api/v2/alerting/interactionstats/rules | Get an interaction stats rule list.
[**getAlertingRule**](AlertingApi.html#getAlertingRule) | **GET** /api/v2/alerting/rules/{ruleId} | Get a rule.
[**patchAlertingAlert**](AlertingApi.html#patchAlertingAlert) | **PATCH** /api/v2/alerting/alerts/{alertId} | Allows an entity to mute/snooze an alert or update the unread status of the alert.
[**patchAlertingAlertsBulk**](AlertingApi.html#patchAlertingAlertsBulk) | **PATCH** /api/v2/alerting/alerts/bulk | Bulk alert updates
[**patchAlertingRulesBulk**](AlertingApi.html#patchAlertingRulesBulk) | **PATCH** /api/v2/alerting/rules/bulk | Bulk update of notification lists
[**postAlertingAlertsQuery**](AlertingApi.html#postAlertingAlertsQuery) | **POST** /api/v2/alerting/alerts/query | Gets a paged list of alerts. The max page size is 50
[**postAlertingInteractionstatsRules**](AlertingApi.html#postAlertingInteractionstatsRules) | **POST** /api/v2/alerting/interactionstats/rules | Create an interaction stats rule.
[**postAlertingRules**](AlertingApi.html#postAlertingRules) | **POST** /api/v2/alerting/rules | Create a Rule.
[**postAlertingRulesBulkRemove**](AlertingApi.html#postAlertingRulesBulkRemove) | **POST** /api/v2/alerting/rules/bulk/remove | Bulk remove rules
[**postAlertingRulesQuery**](AlertingApi.html#postAlertingRulesQuery) | **POST** /api/v2/alerting/rules/query | Get a paged list of rules.  The max size of the page is 50 items.
[**putAlertingAlert**](AlertingApi.html#putAlertingAlert) | **PUT** /api/v2/alerting/alerts/{alertId} | Update an alert read status
[**putAlertingInteractionstatsAlert**](AlertingApi.html#putAlertingInteractionstatsAlert) | **PUT** /api/v2/alerting/interactionstats/alerts/{alertId} | Update an interaction stats alert read status
[**putAlertingInteractionstatsRule**](AlertingApi.html#putAlertingInteractionstatsRule) | **PUT** /api/v2/alerting/interactionstats/rules/{ruleId} | Update an interaction stats rule
[**putAlertingRule**](AlertingApi.html#putAlertingRule) | **PUT** /api/v2/alerting/rules/{ruleId} | Update a rule
{: class="table table-striped"}

<a name="deleteAlertingAlert"></a>

# void deleteAlertingAlert(alertId)


DELETE /api/v2/alerting/alerts/{alertId}

Delete an alert

Requires ALL permissions:

* alerting:alert:delete

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.AlertingApi();

let alertId = "alertId_example"; // String | Alert ID

apiInstance.deleteAlertingAlert(alertId)
  .then(() => {
    console.log('deleteAlertingAlert returned successfully.');
  })
  .catch((err) => {
    console.log('There was a failure calling deleteAlertingAlert');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **alertId** | **String** | Alert ID |  |
{: class="table table-striped"}

### Return type

void (no response body)

<a name="deleteAlertingInteractionstatsAlert"></a>

# void deleteAlertingInteractionstatsAlert(alertId)


DELETE /api/v2/alerting/interactionstats/alerts/{alertId}

Delete an interaction stats alert

Requires ALL permissions:

* alerting:alert:delete

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.AlertingApi();

let alertId = "alertId_example"; // String | Alert ID

apiInstance.deleteAlertingInteractionstatsAlert(alertId)
  .then(() => {
    console.log('deleteAlertingInteractionstatsAlert returned successfully.');
  })
  .catch((err) => {
    console.log('There was a failure calling deleteAlertingInteractionstatsAlert');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **alertId** | **String** | Alert ID |  |
{: class="table table-striped"}

### Return type

void (no response body)

<a name="deleteAlertingInteractionstatsRule"></a>

# void deleteAlertingInteractionstatsRule(ruleId)


DELETE /api/v2/alerting/interactionstats/rules/{ruleId}

Delete an interaction stats rule.

Requires ALL permissions:

* alerting:rule:delete

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.AlertingApi();

let ruleId = "ruleId_example"; // String | Rule ID

apiInstance.deleteAlertingInteractionstatsRule(ruleId)
  .then(() => {
    console.log('deleteAlertingInteractionstatsRule returned successfully.');
  })
  .catch((err) => {
    console.log('There was a failure calling deleteAlertingInteractionstatsRule');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **ruleId** | **String** | Rule ID |  |
{: class="table table-striped"}

### Return type

void (no response body)

<a name="deleteAlertingRule"></a>

# void deleteAlertingRule(ruleId)


DELETE /api/v2/alerting/rules/{ruleId}

Delete a rule.

Requires ALL permissions:

* alerting:rule:delete

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.AlertingApi();

let ruleId = "ruleId_example"; // String | Rule Id

apiInstance.deleteAlertingRule(ruleId)
  .then(() => {
    console.log('deleteAlertingRule returned successfully.');
  })
  .catch((err) => {
    console.log('There was a failure calling deleteAlertingRule');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **ruleId** | **String** | Rule Id |  |
{: class="table table-striped"}

### Return type

void (no response body)

<a name="getAlertingAlert"></a>

# CommonAlert getAlertingAlert(alertId)


GET /api/v2/alerting/alerts/{alertId}

Get an alert

Requires ALL permissions:

* alerting:alert:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.AlertingApi();

let alertId = "alertId_example"; // String | Alert ID

apiInstance.getAlertingAlert(alertId)
  .then((data) => {
    console.log(`getAlertingAlert success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getAlertingAlert');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **alertId** | **String** | Alert ID |  |
{: class="table table-striped"}

### Return type

**CommonAlert**

<a name="getAlertingAlertsActive"></a>

# ActiveAlertCount getAlertingAlertsActive()


GET /api/v2/alerting/alerts/active

Gets active alert count for a user.

Requires NO permissions:

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.AlertingApi();

apiInstance.getAlertingAlertsActive()
  .then((data) => {
    console.log(`getAlertingAlertsActive success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getAlertingAlertsActive');
    console.error(err);
  });
```

### Parameters

This endpoint does not need any parameter.


### Return type

**ActiveAlertCount**

<a name="getAlertingInteractionstatsAlert"></a>

# InteractionStatsAlert getAlertingInteractionstatsAlert(alertId, opts)


GET /api/v2/alerting/interactionstats/alerts/{alertId}

Get an interaction stats alert

Requires ALL permissions:

* alerting:alert:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.AlertingApi();

let alertId = "alertId_example"; // String | Alert ID
let opts = { 
  'expand': ["expand_example"] // [String] | Which fields, if any, to expand
};

apiInstance.getAlertingInteractionstatsAlert(alertId, opts)
  .then((data) => {
    console.log(`getAlertingInteractionstatsAlert success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getAlertingInteractionstatsAlert');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **alertId** | **String** | Alert ID |  |
 **expand** | **[String]** | Which fields, if any, to expand | [optional] <br />**Values**: notificationUsers |
{: class="table table-striped"}

### Return type

**InteractionStatsAlert**

<a name="getAlertingInteractionstatsAlerts"></a>

# InteractionStatsAlertContainer getAlertingInteractionstatsAlerts(opts)


GET /api/v2/alerting/interactionstats/alerts

Get interaction stats alert list.

Requires ALL permissions:

* alerting:alert:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.AlertingApi();

let opts = { 
  'expand': ["expand_example"] // [String] | Which fields, if any, to expand
};

apiInstance.getAlertingInteractionstatsAlerts(opts)
  .then((data) => {
    console.log(`getAlertingInteractionstatsAlerts success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getAlertingInteractionstatsAlerts');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **expand** | **[String]** | Which fields, if any, to expand | [optional] <br />**Values**: notificationUsers |
{: class="table table-striped"}

### Return type

**InteractionStatsAlertContainer**

<a name="getAlertingInteractionstatsAlertsUnread"></a>

# UnreadMetric getAlertingInteractionstatsAlertsUnread()


GET /api/v2/alerting/interactionstats/alerts/unread

Gets user unread count of interaction stats alerts.

Requires NO permissions:

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.AlertingApi();

apiInstance.getAlertingInteractionstatsAlertsUnread()
  .then((data) => {
    console.log(`getAlertingInteractionstatsAlertsUnread success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getAlertingInteractionstatsAlertsUnread');
    console.error(err);
  });
```

### Parameters

This endpoint does not need any parameter.


### Return type

**UnreadMetric**

<a name="getAlertingInteractionstatsRule"></a>

# InteractionStatsRule getAlertingInteractionstatsRule(ruleId, opts)


GET /api/v2/alerting/interactionstats/rules/{ruleId}

Get an interaction stats rule.

Requires ALL permissions:

* alerting:rule:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.AlertingApi();

let ruleId = "ruleId_example"; // String | Rule ID
let opts = { 
  'expand': ["expand_example"] // [String] | Which fields, if any, to expand
};

apiInstance.getAlertingInteractionstatsRule(ruleId, opts)
  .then((data) => {
    console.log(`getAlertingInteractionstatsRule success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getAlertingInteractionstatsRule');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **ruleId** | **String** | Rule ID |  |
 **expand** | **[String]** | Which fields, if any, to expand | [optional] <br />**Values**: notificationUsers |
{: class="table table-striped"}

### Return type

**InteractionStatsRule**

<a name="getAlertingInteractionstatsRules"></a>

# InteractionStatsRuleContainer getAlertingInteractionstatsRules(opts)


GET /api/v2/alerting/interactionstats/rules

Get an interaction stats rule list.

Requires ALL permissions:

* alerting:rule:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.AlertingApi();

let opts = { 
  'expand': ["expand_example"] // [String] | Which fields, if any, to expand
};

apiInstance.getAlertingInteractionstatsRules(opts)
  .then((data) => {
    console.log(`getAlertingInteractionstatsRules success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getAlertingInteractionstatsRules');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **expand** | **[String]** | Which fields, if any, to expand | [optional] <br />**Values**: notificationUsers |
{: class="table table-striped"}

### Return type

**InteractionStatsRuleContainer**

<a name="getAlertingRule"></a>

# CommonRule getAlertingRule(ruleId)


GET /api/v2/alerting/rules/{ruleId}

Get a rule.

Requires ALL permissions:

* alerting:rule:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.AlertingApi();

let ruleId = "ruleId_example"; // String | Rule Id

apiInstance.getAlertingRule(ruleId)
  .then((data) => {
    console.log(`getAlertingRule success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getAlertingRule');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **ruleId** | **String** | Rule Id |  |
{: class="table table-striped"}

### Return type

**CommonRule**

<a name="patchAlertingAlert"></a>

# CommonAlert patchAlertingAlert(alertId, opts)


PATCH /api/v2/alerting/alerts/{alertId}

Allows an entity to mute/snooze an alert or update the unread status of the alert.

Snoozing an alert temporarily stop it from resending notifications to individualsas well as other services within Genesys Cloud for a given period.  Muting an alert will only block the notifications to individuals.

Requires ALL permissions:

* alerting:alert:edit

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.AlertingApi();

let alertId = "alertId_example"; // String | Alert ID
let opts = { 
  'body': {} // Object | 
};

apiInstance.patchAlertingAlert(alertId, opts)
  .then((data) => {
    console.log(`patchAlertingAlert success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling patchAlertingAlert');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **alertId** | **String** | Alert ID |  |
 **body** | **Object** |  | [optional]  |
{: class="table table-striped"}

### Return type

**CommonAlert**

<a name="patchAlertingAlertsBulk"></a>

# BulkResponse patchAlertingAlertsBulk(body)


PATCH /api/v2/alerting/alerts/bulk

Bulk alert updates

Requires ALL permissions:

* alerting:alert:edit

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.AlertingApi();

let body = {}; // Object | 

apiInstance.patchAlertingAlertsBulk(body)
  .then((data) => {
    console.log(`patchAlertingAlertsBulk success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling patchAlertingAlertsBulk');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **body** | **Object** |  |  |
{: class="table table-striped"}

### Return type

**BulkResponse**

<a name="patchAlertingRulesBulk"></a>

# BulkResponse patchAlertingRulesBulk(body)


PATCH /api/v2/alerting/rules/bulk

Bulk update of notification lists

Requires ALL permissions:

* alerting:rule:edit

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.AlertingApi();

let body = {}; // Object | 

apiInstance.patchAlertingRulesBulk(body)
  .then((data) => {
    console.log(`patchAlertingRulesBulk success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling patchAlertingRulesBulk');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **body** | **Object** |  |  |
{: class="table table-striped"}

### Return type

**BulkResponse**

<a name="postAlertingAlertsQuery"></a>

# AlertListing postAlertingAlertsQuery(opts)


POST /api/v2/alerting/alerts/query

Gets a paged list of alerts. The max page size is 50

Requires ALL permissions:

* alerting:alert:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.AlertingApi();

let opts = { 
  'body': {} // Object | 
};

apiInstance.postAlertingAlertsQuery(opts)
  .then((data) => {
    console.log(`postAlertingAlertsQuery success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling postAlertingAlertsQuery');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **body** | **Object** |  | [optional]  |
{: class="table table-striped"}

### Return type

**AlertListing**

<a name="postAlertingInteractionstatsRules"></a>

# InteractionStatsRule postAlertingInteractionstatsRules(body, opts)


POST /api/v2/alerting/interactionstats/rules

Create an interaction stats rule.

Requires ALL permissions:

* alerting:rule:add

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.AlertingApi();

let body = {}; // Object | AlertingRule
let opts = { 
  'expand': ["expand_example"] // [String] | Which fields, if any, to expand
};

apiInstance.postAlertingInteractionstatsRules(body, opts)
  .then((data) => {
    console.log(`postAlertingInteractionstatsRules success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling postAlertingInteractionstatsRules');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **body** | **Object** | AlertingRule |  |
 **expand** | **[String]** | Which fields, if any, to expand | [optional] <br />**Values**: notificationUsers |
{: class="table table-striped"}

### Return type

**InteractionStatsRule**

<a name="postAlertingRules"></a>

# CommonRule postAlertingRules(body)


POST /api/v2/alerting/rules

Create a Rule.

Requires ALL permissions:

* alerting:rule:add

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.AlertingApi();

let body = {}; // Object | rule to be created

apiInstance.postAlertingRules(body)
  .then((data) => {
    console.log(`postAlertingRules success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling postAlertingRules');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **body** | **Object** | rule to be created |  |
{: class="table table-striped"}

### Return type

**CommonRule**

<a name="postAlertingRulesBulkRemove"></a>

# BulkResponse postAlertingRulesBulkRemove(body)


POST /api/v2/alerting/rules/bulk/remove

Bulk remove rules

Requires ALL permissions:

* alerting:rule:delete

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.AlertingApi();

let body = {}; // Object | 

apiInstance.postAlertingRulesBulkRemove(body)
  .then((data) => {
    console.log(`postAlertingRulesBulkRemove success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling postAlertingRulesBulkRemove');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **body** | **Object** |  |  |
{: class="table table-striped"}

### Return type

**BulkResponse**

<a name="postAlertingRulesQuery"></a>

# CommonRuleContainer postAlertingRulesQuery(opts)


POST /api/v2/alerting/rules/query

Get a paged list of rules.  The max size of the page is 50 items.

Requires ALL permissions:

* alerting:rule:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.AlertingApi();

let opts = { 
  'body': {} // Object | 
};

apiInstance.postAlertingRulesQuery(opts)
  .then((data) => {
    console.log(`postAlertingRulesQuery success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling postAlertingRulesQuery');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **body** | **Object** |  | [optional]  |
{: class="table table-striped"}

### Return type

**CommonRuleContainer**

<a name="putAlertingAlert"></a>

# UnreadStatus putAlertingAlert(alertId, opts)


PUT /api/v2/alerting/alerts/{alertId}

Update an alert read status

Requires ALL permissions:

* alerting:alert:edit

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.AlertingApi();

let alertId = "alertId_example"; // String | Alert ID
let opts = { 
  'body': {} // Object | 
};

apiInstance.putAlertingAlert(alertId, opts)
  .then((data) => {
    console.log(`putAlertingAlert success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling putAlertingAlert');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **alertId** | **String** | Alert ID |  |
 **body** | **Object** |  | [optional]  |
{: class="table table-striped"}

### Return type

**UnreadStatus**

<a name="putAlertingInteractionstatsAlert"></a>

# UnreadStatus putAlertingInteractionstatsAlert(alertId, body, opts)


PUT /api/v2/alerting/interactionstats/alerts/{alertId}

Update an interaction stats alert read status

Requires ALL permissions:

* alerting:alert:edit

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.AlertingApi();

let alertId = "alertId_example"; // String | Alert ID
let body = {}; // Object | InteractionStatsAlert
let opts = { 
  'expand': ["expand_example"] // [String] | Which fields, if any, to expand
};

apiInstance.putAlertingInteractionstatsAlert(alertId, body, opts)
  .then((data) => {
    console.log(`putAlertingInteractionstatsAlert success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling putAlertingInteractionstatsAlert');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **alertId** | **String** | Alert ID |  |
 **body** | **Object** | InteractionStatsAlert |  |
 **expand** | **[String]** | Which fields, if any, to expand | [optional] <br />**Values**: notificationUsers |
{: class="table table-striped"}

### Return type

**UnreadStatus**

<a name="putAlertingInteractionstatsRule"></a>

# InteractionStatsRule putAlertingInteractionstatsRule(ruleId, body, opts)


PUT /api/v2/alerting/interactionstats/rules/{ruleId}

Update an interaction stats rule

Requires ALL permissions:

* alerting:rule:edit

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.AlertingApi();

let ruleId = "ruleId_example"; // String | Rule ID
let body = {}; // Object | AlertingRule
let opts = { 
  'expand': ["expand_example"] // [String] | Which fields, if any, to expand
};

apiInstance.putAlertingInteractionstatsRule(ruleId, body, opts)
  .then((data) => {
    console.log(`putAlertingInteractionstatsRule success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling putAlertingInteractionstatsRule');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **ruleId** | **String** | Rule ID |  |
 **body** | **Object** | AlertingRule |  |
 **expand** | **[String]** | Which fields, if any, to expand | [optional] <br />**Values**: notificationUsers |
{: class="table table-striped"}

### Return type

**InteractionStatsRule**

<a name="putAlertingRule"></a>

# CommonRule putAlertingRule(ruleId, body)


PUT /api/v2/alerting/rules/{ruleId}

Update a rule

Requires ALL permissions:

* alerting:rule:edit

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.AlertingApi();

let ruleId = "ruleId_example"; // String | Rule Id
let body = {}; // Object | rule to be updated

apiInstance.putAlertingRule(ruleId, body)
  .then((data) => {
    console.log(`putAlertingRule success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling putAlertingRule');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **ruleId** | **String** | Rule Id |  |
 **body** | **Object** | rule to be updated |  |
{: class="table table-striped"}

### Return type

**CommonRule**

