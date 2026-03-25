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

> void deleteAlertingAlert(alertId, opts)


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
let opts = { 
  'customHeaders': {  // Object.<string, string> | Request Custom Headers
    'X-Service-Name': 'customer-service',
    'X-Request-ID': 'req-12345'
  }
};

apiInstance.deleteAlertingAlert(alertId, opts)
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
 **customHeaders** | **Object.<string, string>** | Request Custom Headers | [optional] |

### Return type

void (no response body)


## deleteAlertingAlertsAll

> **Object** deleteAlertingAlertsAll(opts)


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
let opts = { 
  'customHeaders': {  // Object.<string, string> | Request Custom Headers
    'X-Service-Name': 'customer-service',
    'X-Request-ID': 'req-12345'
  }
};

apiInstance.deleteAlertingAlertsAll(opts)
  .then((data) => {
    console.log(`deleteAlertingAlertsAll success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling deleteAlertingAlertsAll');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **customHeaders** | **Object.<string, string>** | Request Custom Headers | [optional] |

### Return type

**Object**


## deleteAlertingRule

> void deleteAlertingRule(ruleId, opts)


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
let opts = { 
  'customHeaders': {  // Object.<string, string> | Request Custom Headers
    'X-Service-Name': 'customer-service',
    'X-Request-ID': 'req-12345'
  }
};

apiInstance.deleteAlertingRule(ruleId, opts)
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
 **customHeaders** | **Object.<string, string>** | Request Custom Headers | [optional] |

### Return type

void (no response body)


## getAlertingAlert

> CommonAlert getAlertingAlert(alertId, opts)


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
let opts = { 
  'customHeaders': {  // Object.<string, string> | Request Custom Headers
    'X-Service-Name': 'customer-service',
    'X-Request-ID': 'req-12345'
  }
};

apiInstance.getAlertingAlert(alertId, opts)
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
 **customHeaders** | **Object.<string, string>** | Request Custom Headers | [optional] |

### Return type

**CommonAlert**


## getAlertingRule

> CommonRule getAlertingRule(ruleId, opts)


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
let opts = { 
  'customHeaders': {  // Object.<string, string> | Request Custom Headers
    'X-Service-Name': 'customer-service',
    'X-Request-ID': 'req-12345'
  }
};

apiInstance.getAlertingRule(ruleId, opts)
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
 **customHeaders** | **Object.<string, string>** | Request Custom Headers | [optional] |

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
  'body': {}, // Object | 
  'customHeaders': {  // Object.<string, string> | Request Custom Headers
    'X-Service-Name': 'customer-service',
    'X-Request-ID': 'req-12345'
  }
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
 **customHeaders** | **Object.<string, string>** | Request Custom Headers | [optional] |

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
  'body': {}, // Object | 
  'customHeaders': {  // Object.<string, string> | Request Custom Headers
    'X-Service-Name': 'customer-service',
    'X-Request-ID': 'req-12345'
  }
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
 **customHeaders** | **Object.<string, string>** | Request Custom Headers | [optional] |

### Return type

**Object**


## patchAlertingAlertsBulk

> BulkResponse patchAlertingAlertsBulk(body, opts)


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
let opts = { 
  'customHeaders': {  // Object.<string, string> | Request Custom Headers
    'X-Service-Name': 'customer-service',
    'X-Request-ID': 'req-12345'
  }
};

apiInstance.patchAlertingAlertsBulk(body, opts)
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
 **customHeaders** | **Object.<string, string>** | Request Custom Headers | [optional] |

### Return type

**BulkResponse**


## patchAlertingRulesBulk

> BulkResponse patchAlertingRulesBulk(body, opts)


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
let opts = { 
  'customHeaders': {  // Object.<string, string> | Request Custom Headers
    'X-Service-Name': 'customer-service',
    'X-Request-ID': 'req-12345'
  }
};

apiInstance.patchAlertingRulesBulk(body, opts)
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
 **customHeaders** | **Object.<string, string>** | Request Custom Headers | [optional] |

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
  'body': {}, // Object | 
  'customHeaders': {  // Object.<string, string> | Request Custom Headers
    'X-Service-Name': 'customer-service',
    'X-Request-ID': 'req-12345'
  }
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
 **customHeaders** | **Object.<string, string>** | Request Custom Headers | [optional] |

### Return type

**AlertListing**


## postAlertingRules

> CommonRule postAlertingRules(body, opts)


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
let opts = { 
  'customHeaders': {  // Object.<string, string> | Request Custom Headers
    'X-Service-Name': 'customer-service',
    'X-Request-ID': 'req-12345'
  }
};

apiInstance.postAlertingRules(body, opts)
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
 **customHeaders** | **Object.<string, string>** | Request Custom Headers | [optional] |

### Return type

**CommonRule**


## postAlertingRulesBulkRemove

> BulkResponse postAlertingRulesBulkRemove(body, opts)


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
let opts = { 
  'customHeaders': {  // Object.<string, string> | Request Custom Headers
    'X-Service-Name': 'customer-service',
    'X-Request-ID': 'req-12345'
  }
};

apiInstance.postAlertingRulesBulkRemove(body, opts)
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
 **customHeaders** | **Object.<string, string>** | Request Custom Headers | [optional] |

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
  'body': {}, // Object | 
  'customHeaders': {  // Object.<string, string> | Request Custom Headers
    'X-Service-Name': 'customer-service',
    'X-Request-ID': 'req-12345'
  }
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
 **customHeaders** | **Object.<string, string>** | Request Custom Headers | [optional] |

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
  'body': {}, // Object | 
  'customHeaders': {  // Object.<string, string> | Request Custom Headers
    'X-Service-Name': 'customer-service',
    'X-Request-ID': 'req-12345'
  }
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
 **customHeaders** | **Object.<string, string>** | Request Custom Headers | [optional] |

### Return type

**AlertingUnreadStatus**


## putAlertingRule

> CommonRule putAlertingRule(ruleId, body, opts)


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
let opts = { 
  'customHeaders': {  // Object.<string, string> | Request Custom Headers
    'X-Service-Name': 'customer-service',
    'X-Request-ID': 'req-12345'
  }
};

apiInstance.putAlertingRule(ruleId, body, opts)
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
 **customHeaders** | **Object.<string, string>** | Request Custom Headers | [optional] |

### Return type

**CommonRule**


_purecloud-platform-client-v2@249.1.0_
