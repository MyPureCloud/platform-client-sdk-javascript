# AlertingApi

# platformClient.AlertingApi

All URIs are relative to *https://api.mypurecloud.com*

| Method | HTTP request | Description |
| ------------- | ------------- | ------------- |
[**deleteAlertingAlert**](AlertingApi#deleteAlertingAlert) | **DELETE** /api/v2/alerting/alerts/{alertId} | Delete an alert
[**deleteAlertingAlertsAll**](AlertingApi#deleteAlertingAlertsAll) | **DELETE** /api/v2/alerting/alerts/all | Delete all alerts for the user
[**deleteAlertingRule**](AlertingApi#deleteAlertingRule) | **DELETE** /api/v2/alerting/rules/{ruleId} | Delete a rule.
[**getAlertingAlert**](AlertingApi#getAlertingAlert) | **GET** /api/v2/alerting/alerts/{alertId} | Get an alert
[**getAlertingRule**](AlertingApi#getAlertingRule) | **GET** /api/v2/alerting/rules/{ruleId} | Get a rule.
[**patchAlertingAlert**](AlertingApi#patchAlertingAlert) | **PATCH** /api/v2/alerting/alerts/{alertId} | Allows an entity to mute/snooze an alert or update the unread status of the alert.
[**patchAlertingAlertsAll**](AlertingApi#patchAlertingAlertsAll) | **PATCH** /api/v2/alerting/alerts/all | Updates all alerts
[**patchAlertingAlertsBulk**](AlertingApi#patchAlertingAlertsBulk) | **PATCH** /api/v2/alerting/alerts/bulk | Bulk alert updates
[**patchAlertingRulesBulk**](AlertingApi#patchAlertingRulesBulk) | **PATCH** /api/v2/alerting/rules/bulk | Bulk update of notification lists
[**postAlertingAlertsQuery**](AlertingApi#postAlertingAlertsQuery) | **POST** /api/v2/alerting/alerts/query | Gets a paged list of alerts. The max page size is 50
[**postAlertingRules**](AlertingApi#postAlertingRules) | **POST** /api/v2/alerting/rules | Create a Rule.
[**postAlertingRulesBulkRemove**](AlertingApi#postAlertingRulesBulkRemove) | **POST** /api/v2/alerting/rules/bulk/remove | Bulk remove rules
[**postAlertingRulesQuery**](AlertingApi#postAlertingRulesQuery) | **POST** /api/v2/alerting/rules/query | Get a paged list of rules.  The max size of the page is 50 items.
[**putAlertingAlert**](AlertingApi#putAlertingAlert) | **PUT** /api/v2/alerting/alerts/{alertId} | Update an alert read status
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


## deleteAlertingAlertsAll

> **Object** deleteAlertingAlertsAll()


DELETE /api/v2/alerting/alerts/all

Delete all alerts for the user

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

apiInstance.deleteAlertingAlertsAll()
  .then((data) => {
    console.log(`deleteAlertingAlertsAll success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling deleteAlertingAlertsAll');
    console.error(err);
  });
```

### Parameters

This endpoint does not need any parameter.

### Return type

**Object**


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


## patchAlertingAlertsAll

> **Object** patchAlertingAlertsAll(opts)


PATCH /api/v2/alerting/alerts/all

Updates all alerts

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

let opts = { 
  'body': {} // Object | 
};

apiInstance.patchAlertingAlertsAll(opts)
  .then((data) => {
    console.log(`patchAlertingAlertsAll success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling patchAlertingAlertsAll');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **body** | **Object** |  | [optional]  |

### Return type

**Object**


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

> AlertingUnreadStatus putAlertingAlert(alertId, opts)


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

**AlertingUnreadStatus**


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


_purecloud-platform-client-v2@229.1.0_
