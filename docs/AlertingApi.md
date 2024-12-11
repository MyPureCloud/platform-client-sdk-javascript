# AlertingApi

# platformClient.AlertingApi

All URIs are relative to *https://api.mypurecloud.com*

| Method | HTTP request | Description |
| ------------- | ------------- | ------------- |
[**deleteAlertingAlert**](AlertingApi#deleteAlertingAlert) | **DELETE** /api/v2/alerting/alerts/{alertId} | Delete an alert
[**deleteAlertingInteractionstatsAlert**](AlertingApi#deleteAlertingInteractionstatsAlert) | **DELETE** /api/v2/alerting/interactionstats/alerts/{alertId} | Delete an interaction stats alert
[**deleteAlertingInteractionstatsRule**](AlertingApi#deleteAlertingInteractionstatsRule) | **DELETE** /api/v2/alerting/interactionstats/rules/{ruleId} | Delete an interaction stats rule
[**deleteAlertingRule**](AlertingApi#deleteAlertingRule) | **DELETE** /api/v2/alerting/rules/{ruleId} | Delete a rule.
[**getAlertingAlert**](AlertingApi#getAlertingAlert) | **GET** /api/v2/alerting/alerts/{alertId} | Get an alert
[**getAlertingAlertsActive**](AlertingApi#getAlertingAlertsActive) | **GET** /api/v2/alerting/alerts/active | Gets active alert count for a user
[**getAlertingInteractionstatsAlert**](AlertingApi#getAlertingInteractionstatsAlert) | **GET** /api/v2/alerting/interactionstats/alerts/{alertId} | Get an interaction stats alert
[**getAlertingInteractionstatsAlerts**](AlertingApi#getAlertingInteractionstatsAlerts) | **GET** /api/v2/alerting/interactionstats/alerts | Get interaction stats alert list
[**getAlertingInteractionstatsAlertsUnread**](AlertingApi#getAlertingInteractionstatsAlertsUnread) | **GET** /api/v2/alerting/interactionstats/alerts/unread | Gets user unread count of interaction stats alerts
[**getAlertingInteractionstatsRule**](AlertingApi#getAlertingInteractionstatsRule) | **GET** /api/v2/alerting/interactionstats/rules/{ruleId} | Get an interaction stats rule
[**getAlertingInteractionstatsRules**](AlertingApi#getAlertingInteractionstatsRules) | **GET** /api/v2/alerting/interactionstats/rules | Get an interaction stats rule list
[**getAlertingRule**](AlertingApi#getAlertingRule) | **GET** /api/v2/alerting/rules/{ruleId} | Get a rule.
[**patchAlertingAlert**](AlertingApi#patchAlertingAlert) | **PATCH** /api/v2/alerting/alerts/{alertId} | Allows an entity to mute/snooze an alert or update the unread status of the alert.
[**patchAlertingAlertsBulk**](AlertingApi#patchAlertingAlertsBulk) | **PATCH** /api/v2/alerting/alerts/bulk | Bulk alert updates
[**patchAlertingRulesBulk**](AlertingApi#patchAlertingRulesBulk) | **PATCH** /api/v2/alerting/rules/bulk | Bulk update of notification lists
[**postAlertingAlertsQuery**](AlertingApi#postAlertingAlertsQuery) | **POST** /api/v2/alerting/alerts/query | Gets a paged list of alerts. The max page size is 50
[**postAlertingInteractionstatsRules**](AlertingApi#postAlertingInteractionstatsRules) | **POST** /api/v2/alerting/interactionstats/rules | Create an interaction stats rule
[**postAlertingRules**](AlertingApi#postAlertingRules) | **POST** /api/v2/alerting/rules | Create a Rule.
[**postAlertingRulesBulkRemove**](AlertingApi#postAlertingRulesBulkRemove) | **POST** /api/v2/alerting/rules/bulk/remove | Bulk remove rules
[**postAlertingRulesQuery**](AlertingApi#postAlertingRulesQuery) | **POST** /api/v2/alerting/rules/query | Get a paged list of rules.  The max size of the page is 50 items.
[**putAlertingAlert**](AlertingApi#putAlertingAlert) | **PUT** /api/v2/alerting/alerts/{alertId} | Update an alert read status
[**putAlertingInteractionstatsAlert**](AlertingApi#putAlertingInteractionstatsAlert) | **PUT** /api/v2/alerting/interactionstats/alerts/{alertId} | Update an interaction stats alert read status
[**putAlertingInteractionstatsRule**](AlertingApi#putAlertingInteractionstatsRule) | **PUT** /api/v2/alerting/interactionstats/rules/{ruleId} | Update an interaction stats rule
[**putAlertingRule**](AlertingApi#putAlertingRule) | **PUT** /api/v2/alerting/rules/{ruleId} | Update a rule



## deleteAlertingAlert

> void deleteAlertingAlert(alertId)


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

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
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

### Return type

void (no response body)


## deleteAlertingInteractionstatsAlert

> void deleteAlertingInteractionstatsAlert(alertId)

:::{"alert":"warning","title":"Deprecated","collapsible":false,"autoCollapse":false}
This resource has been deprecated
:::

DELETE /api/v2/alerting/interactionstats/alerts/{alertId}

Delete an interaction stats alert

Apps should migrate to use DELETE /api/v2/alerting/alerts/{alertId}.

Requires ALL permissions:

* alerting:alert:delete

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
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

### Return type

void (no response body)


## deleteAlertingInteractionstatsRule

> void deleteAlertingInteractionstatsRule(ruleId)

:::{"alert":"warning","title":"Deprecated","collapsible":false,"autoCollapse":false}
This resource has been deprecated
:::

DELETE /api/v2/alerting/interactionstats/rules/{ruleId}

Delete an interaction stats rule

Apps should migrate to use DELETE /api/v2/alerting/rules/{ruleId}.

Requires ALL permissions:

* alerting:rule:delete

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
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

### Return type

void (no response body)


## deleteAlertingRule

> void deleteAlertingRule(ruleId)


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

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
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

### Return type

void (no response body)


## getAlertingAlert

> CommonAlert getAlertingAlert(alertId)


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

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
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

### Return type

**CommonAlert**


## getAlertingAlertsActive

> ActiveAlertCount getAlertingAlertsActive()

:::{"alert":"warning","title":"Deprecated","collapsible":false,"autoCollapse":false}
This resource has been deprecated
:::

GET /api/v2/alerting/alerts/active

Gets active alert count for a user

Apps should migrate to use POST /api/v2/alerting/alerts/query with the queryType set to Count and alertStatus to Active in the request body.

Requires NO permissions:

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
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


## getAlertingInteractionstatsAlert

> InteractionStatsAlert getAlertingInteractionstatsAlert(alertId, opts)

:::{"alert":"warning","title":"Deprecated","collapsible":false,"autoCollapse":false}
This resource has been deprecated
:::

GET /api/v2/alerting/interactionstats/alerts/{alertId}

Get an interaction stats alert

Apps should migrate to use GET /api/v2/alerting/alerts/{alertId}.

Requires ALL permissions:

* alerting:alert:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
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

### Return type

**InteractionStatsAlert**


## getAlertingInteractionstatsAlerts

> InteractionStatsAlertContainer getAlertingInteractionstatsAlerts(opts)

:::{"alert":"warning","title":"Deprecated","collapsible":false,"autoCollapse":false}
This resource has been deprecated
:::

GET /api/v2/alerting/interactionstats/alerts

Get interaction stats alert list

Apps should migrate to use POST /api/v2/alerting/alerts/query.

Requires ALL permissions:

* alerting:alert:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
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

### Return type

**InteractionStatsAlertContainer**


## getAlertingInteractionstatsAlertsUnread

> UnreadMetric getAlertingInteractionstatsAlertsUnread()

:::{"alert":"warning","title":"Deprecated","collapsible":false,"autoCollapse":false}
This resource has been deprecated
:::

GET /api/v2/alerting/interactionstats/alerts/unread

Gets user unread count of interaction stats alerts

Apps should migrate to use POST /api/v2/alerting/alerts/query with the queryType set to Count and viewStatus to Unread in the request body.

Requires NO permissions:

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
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


## getAlertingInteractionstatsRule

> InteractionStatsRule getAlertingInteractionstatsRule(ruleId, opts)

:::{"alert":"warning","title":"Deprecated","collapsible":false,"autoCollapse":false}
This resource has been deprecated
:::

GET /api/v2/alerting/interactionstats/rules/{ruleId}

Get an interaction stats rule

Apps should migrate to use GET /api/v2/alerting/rules/{ruleId}.

Requires ALL permissions:

* alerting:rule:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
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

### Return type

**InteractionStatsRule**


## getAlertingInteractionstatsRules

> InteractionStatsRuleContainer getAlertingInteractionstatsRules(opts)

:::{"alert":"warning","title":"Deprecated","collapsible":false,"autoCollapse":false}
This resource has been deprecated
:::

GET /api/v2/alerting/interactionstats/rules

Get an interaction stats rule list

Apps should migrate to use POST /api/v2/alerting/rules/query.

Requires ALL permissions:

* alerting:rule:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
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

### Return type

**InteractionStatsRuleContainer**


## getAlertingRule

> CommonRule getAlertingRule(ruleId)


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

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
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

### Return type

**CommonRule**


## patchAlertingAlert

> CommonAlert patchAlertingAlert(alertId, opts)


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

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
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

### Return type

**CommonAlert**


## patchAlertingAlertsBulk

> BulkResponse patchAlertingAlertsBulk(body)


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

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
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

### Return type

**BulkResponse**


## patchAlertingRulesBulk

> BulkResponse patchAlertingRulesBulk(body)


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

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
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

### Return type

**BulkResponse**


## postAlertingAlertsQuery

> AlertListing postAlertingAlertsQuery(opts)


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

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
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

### Return type

**AlertListing**


## postAlertingInteractionstatsRules

> InteractionStatsRule postAlertingInteractionstatsRules(body, opts)

:::{"alert":"warning","title":"Deprecated","collapsible":false,"autoCollapse":false}
This resource has been deprecated
:::

POST /api/v2/alerting/interactionstats/rules

Create an interaction stats rule

Apps should migrate to use POST /api/v2/alerting/rules.

Requires ALL permissions:

* alerting:rule:add

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
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

### Return type

**InteractionStatsRule**


## postAlertingRules

> CommonRule postAlertingRules(body)


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

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
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

### Return type

**CommonRule**


## postAlertingRulesBulkRemove

> BulkResponse postAlertingRulesBulkRemove(body)


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

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
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

### Return type

**BulkResponse**


## postAlertingRulesQuery

> CommonRuleContainer postAlertingRulesQuery(opts)


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

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
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

### Return type

**CommonRuleContainer**


## putAlertingAlert

> UnreadStatus putAlertingAlert(alertId, opts)


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

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
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

### Return type

**UnreadStatus**


## putAlertingInteractionstatsAlert

> UnreadStatus putAlertingInteractionstatsAlert(alertId, body, opts)

:::{"alert":"warning","title":"Deprecated","collapsible":false,"autoCollapse":false}
This resource has been deprecated
:::

PUT /api/v2/alerting/interactionstats/alerts/{alertId}

Update an interaction stats alert read status

Apps should migrate to use PUT /api/v2/alerting/alerts/{alertId}.

Requires ALL permissions:

* alerting:alert:edit

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
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

### Return type

**UnreadStatus**


## putAlertingInteractionstatsRule

> InteractionStatsRule putAlertingInteractionstatsRule(ruleId, body, opts)

:::{"alert":"warning","title":"Deprecated","collapsible":false,"autoCollapse":false}
This resource has been deprecated
:::

PUT /api/v2/alerting/interactionstats/rules/{ruleId}

Update an interaction stats rule

Apps should migrate to use PUT /api/v2/alerting/rules/{ruleId}.

Requires ALL permissions:

* alerting:rule:edit

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
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

### Return type

**InteractionStatsRule**


## putAlertingRule

> CommonRule putAlertingRule(ruleId, body)


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

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
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

### Return type

**CommonRule**


_purecloud-platform-client-v2@210.0.0_
