---
title: AlertingApi
---
# platformClient.AlertingApi

All URIs are relative to *https://api.mypurecloud.com*

| Method | HTTP request | Description |
| ------------- | ------------- | ------------- |
[**deleteAlertingInteractionstatsAlert**](AlertingApi.html#deleteAlertingInteractionstatsAlert) | **DELETE** /api/v2/alerting/interactionstats/alerts/{alertId} | Delete an interaction stats alert
[**deleteAlertingInteractionstatsRule**](AlertingApi.html#deleteAlertingInteractionstatsRule) | **DELETE** /api/v2/alerting/interactionstats/rules/{ruleId} | Delete an interaction stats rule.
[**getAlertingInteractionstatsAlert**](AlertingApi.html#getAlertingInteractionstatsAlert) | **GET** /api/v2/alerting/interactionstats/alerts/{alertId} | Get an interaction stats alert
[**getAlertingInteractionstatsAlerts**](AlertingApi.html#getAlertingInteractionstatsAlerts) | **GET** /api/v2/alerting/interactionstats/alerts | Get interaction stats alert list.
[**getAlertingInteractionstatsAlertsUnread**](AlertingApi.html#getAlertingInteractionstatsAlertsUnread) | **GET** /api/v2/alerting/interactionstats/alerts/unread | Gets user unread count of interaction stats alerts.
[**getAlertingInteractionstatsRule**](AlertingApi.html#getAlertingInteractionstatsRule) | **GET** /api/v2/alerting/interactionstats/rules/{ruleId} | Get an interaction stats rule.
[**getAlertingInteractionstatsRules**](AlertingApi.html#getAlertingInteractionstatsRules) | **GET** /api/v2/alerting/interactionstats/rules | Get an interaction stats rule list.
[**postAlertingInteractionstatsRules**](AlertingApi.html#postAlertingInteractionstatsRules) | **POST** /api/v2/alerting/interactionstats/rules | Create an interaction stats rule.
[**putAlertingInteractionstatsAlert**](AlertingApi.html#putAlertingInteractionstatsAlert) | **PUT** /api/v2/alerting/interactionstats/alerts/{alertId} | Update an interaction stats alert read status
[**putAlertingInteractionstatsRule**](AlertingApi.html#putAlertingInteractionstatsRule) | **PUT** /api/v2/alerting/interactionstats/rules/{ruleId} | Update an interaction stats rule
{: class="table table-striped"}

<a name="deleteAlertingInteractionstatsAlert"></a>

# void deleteAlertingInteractionstatsAlert(alertId)

DELETE /api/v2/alerting/interactionstats/alerts/{alertId}

Delete an interaction stats alert



### Example

~~~ javascript
const platformClient = require('purecloud-platform-client-v2');

// Configure OAuth2 access token for authorization: PureCloud Auth
platformClient.ApiClient.instance.authentications['PureCloud Auth'].accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new platformClient.AlertingApi();

var alertId = "alertId_example"; // String | Alert ID

apiInstance.deleteAlertingInteractionstatsAlert(alertId)
  .then(function() {
    console.log('deleteAlertingInteractionstatsAlert returned successfully.');
  })
  .catch(function(error) {
  	console.log('There was a failure calling deleteAlertingInteractionstatsAlert');
    console.error(error);
  });

~~~

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **alertId** | **String**| Alert ID |  |
{: class="table table-striped"}

### Return type

void (no response body)

<a name="deleteAlertingInteractionstatsRule"></a>

# void deleteAlertingInteractionstatsRule(ruleId)

DELETE /api/v2/alerting/interactionstats/rules/{ruleId}

Delete an interaction stats rule.



### Example

~~~ javascript
const platformClient = require('purecloud-platform-client-v2');

// Configure OAuth2 access token for authorization: PureCloud Auth
platformClient.ApiClient.instance.authentications['PureCloud Auth'].accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new platformClient.AlertingApi();

var ruleId = "ruleId_example"; // String | Rule ID

apiInstance.deleteAlertingInteractionstatsRule(ruleId)
  .then(function() {
    console.log('deleteAlertingInteractionstatsRule returned successfully.');
  })
  .catch(function(error) {
  	console.log('There was a failure calling deleteAlertingInteractionstatsRule');
    console.error(error);
  });

~~~

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **ruleId** | **String**| Rule ID |  |
{: class="table table-striped"}

### Return type

void (no response body)

<a name="getAlertingInteractionstatsAlert"></a>

# [**InteractionStatsAlert**](InteractionStatsAlert.html) getAlertingInteractionstatsAlert(alertId, opts)

GET /api/v2/alerting/interactionstats/alerts/{alertId}

Get an interaction stats alert



### Example

~~~ javascript
const platformClient = require('purecloud-platform-client-v2');

// Configure OAuth2 access token for authorization: PureCloud Auth
platformClient.ApiClient.instance.authentications['PureCloud Auth'].accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new platformClient.AlertingApi();

var alertId = "alertId_example"; // String | Alert ID

var opts = { 
  'expand': ["expand_example"] // [String] | Which fields, if any, to expand
};
apiInstance.getAlertingInteractionstatsAlert(alertId, opts)
  .then(function(data) {
    console.log(`getAlertingInteractionstatsAlert success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch(function(error) {
  	console.log('There was a failure calling getAlertingInteractionstatsAlert');
    console.error(error);
  });

~~~

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **alertId** | **String**| Alert ID |  |
 **expand** | [**[String]**](String.html)| Which fields, if any, to expand | [optional] <br />**Values**: notificationUsers |
{: class="table table-striped"}

### Return type

[**InteractionStatsAlert**](InteractionStatsAlert.html)

<a name="getAlertingInteractionstatsAlerts"></a>

# [**InteractionStatsAlertContainer**](InteractionStatsAlertContainer.html) getAlertingInteractionstatsAlerts(opts)

GET /api/v2/alerting/interactionstats/alerts

Get interaction stats alert list.



### Example

~~~ javascript
const platformClient = require('purecloud-platform-client-v2');

// Configure OAuth2 access token for authorization: PureCloud Auth
platformClient.ApiClient.instance.authentications['PureCloud Auth'].accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new platformClient.AlertingApi();

var opts = { 
  'expand': ["expand_example"] // [String] | Which fields, if any, to expand
};
apiInstance.getAlertingInteractionstatsAlerts(opts)
  .then(function(data) {
    console.log(`getAlertingInteractionstatsAlerts success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch(function(error) {
  	console.log('There was a failure calling getAlertingInteractionstatsAlerts');
    console.error(error);
  });

~~~

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **expand** | [**[String]**](String.html)| Which fields, if any, to expand | [optional] <br />**Values**: notificationUsers |
{: class="table table-striped"}

### Return type

[**InteractionStatsAlertContainer**](InteractionStatsAlertContainer.html)

<a name="getAlertingInteractionstatsAlertsUnread"></a>

# [**UnreadMetric**](UnreadMetric.html) getAlertingInteractionstatsAlertsUnread()

GET /api/v2/alerting/interactionstats/alerts/unread

Gets user unread count of interaction stats alerts.



### Example

~~~ javascript
const platformClient = require('purecloud-platform-client-v2');

// Configure OAuth2 access token for authorization: PureCloud Auth
platformClient.ApiClient.instance.authentications['PureCloud Auth'].accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new platformClient.AlertingApi();
apiInstance.getAlertingInteractionstatsAlertsUnread()
  .then(function(data) {
    console.log(`getAlertingInteractionstatsAlertsUnread success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch(function(error) {
  	console.log('There was a failure calling getAlertingInteractionstatsAlertsUnread');
    console.error(error);
  });

~~~

### Parameters

This endpoint does not need any parameter.
{: class="table table-striped"}

### Return type

[**UnreadMetric**](UnreadMetric.html)

<a name="getAlertingInteractionstatsRule"></a>

# [**InteractionStatsRule**](InteractionStatsRule.html) getAlertingInteractionstatsRule(ruleId, opts)

GET /api/v2/alerting/interactionstats/rules/{ruleId}

Get an interaction stats rule.



### Example

~~~ javascript
const platformClient = require('purecloud-platform-client-v2');

// Configure OAuth2 access token for authorization: PureCloud Auth
platformClient.ApiClient.instance.authentications['PureCloud Auth'].accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new platformClient.AlertingApi();

var ruleId = "ruleId_example"; // String | Rule ID

var opts = { 
  'expand': ["expand_example"] // [String] | Which fields, if any, to expand
};
apiInstance.getAlertingInteractionstatsRule(ruleId, opts)
  .then(function(data) {
    console.log(`getAlertingInteractionstatsRule success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch(function(error) {
  	console.log('There was a failure calling getAlertingInteractionstatsRule');
    console.error(error);
  });

~~~

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **ruleId** | **String**| Rule ID |  |
 **expand** | [**[String]**](String.html)| Which fields, if any, to expand | [optional] <br />**Values**: notificationUsers |
{: class="table table-striped"}

### Return type

[**InteractionStatsRule**](InteractionStatsRule.html)

<a name="getAlertingInteractionstatsRules"></a>

# [**InteractionStatsRuleContainer**](InteractionStatsRuleContainer.html) getAlertingInteractionstatsRules(opts)

GET /api/v2/alerting/interactionstats/rules

Get an interaction stats rule list.



### Example

~~~ javascript
const platformClient = require('purecloud-platform-client-v2');

// Configure OAuth2 access token for authorization: PureCloud Auth
platformClient.ApiClient.instance.authentications['PureCloud Auth'].accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new platformClient.AlertingApi();

var opts = { 
  'expand': ["expand_example"] // [String] | Which fields, if any, to expand
};
apiInstance.getAlertingInteractionstatsRules(opts)
  .then(function(data) {
    console.log(`getAlertingInteractionstatsRules success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch(function(error) {
  	console.log('There was a failure calling getAlertingInteractionstatsRules');
    console.error(error);
  });

~~~

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **expand** | [**[String]**](String.html)| Which fields, if any, to expand | [optional] <br />**Values**: notificationUsers |
{: class="table table-striped"}

### Return type

[**InteractionStatsRuleContainer**](InteractionStatsRuleContainer.html)

<a name="postAlertingInteractionstatsRules"></a>

# [**InteractionStatsRule**](InteractionStatsRule.html) postAlertingInteractionstatsRules(body, opts)

POST /api/v2/alerting/interactionstats/rules

Create an interaction stats rule.



### Example

~~~ javascript
const platformClient = require('purecloud-platform-client-v2');

// Configure OAuth2 access token for authorization: PureCloud Auth
platformClient.ApiClient.instance.authentications['PureCloud Auth'].accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new platformClient.AlertingApi();

var body = new platformClient.InteractionStatsRule(); // InteractionStatsRule | AlertingRule

var opts = { 
  'expand': ["expand_example"] // [String] | Which fields, if any, to expand
};
apiInstance.postAlertingInteractionstatsRules(body, opts)
  .then(function(data) {
    console.log(`postAlertingInteractionstatsRules success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch(function(error) {
  	console.log('There was a failure calling postAlertingInteractionstatsRules');
    console.error(error);
  });

~~~

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **body** | [**InteractionStatsRule**](InteractionStatsRule.html)| AlertingRule |  |
 **expand** | [**[String]**](String.html)| Which fields, if any, to expand | [optional] <br />**Values**: notificationUsers |
{: class="table table-striped"}

### Return type

[**InteractionStatsRule**](InteractionStatsRule.html)

<a name="putAlertingInteractionstatsAlert"></a>

# [**UnreadStatus**](UnreadStatus.html) putAlertingInteractionstatsAlert(alertId, body, opts)

PUT /api/v2/alerting/interactionstats/alerts/{alertId}

Update an interaction stats alert read status



### Example

~~~ javascript
const platformClient = require('purecloud-platform-client-v2');

// Configure OAuth2 access token for authorization: PureCloud Auth
platformClient.ApiClient.instance.authentications['PureCloud Auth'].accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new platformClient.AlertingApi();

var alertId = "alertId_example"; // String | Alert ID

var body = new platformClient.UnreadStatus(); // UnreadStatus | InteractionStatsAlert

var opts = { 
  'expand': ["expand_example"] // [String] | Which fields, if any, to expand
};
apiInstance.putAlertingInteractionstatsAlert(alertId, body, opts)
  .then(function(data) {
    console.log(`putAlertingInteractionstatsAlert success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch(function(error) {
  	console.log('There was a failure calling putAlertingInteractionstatsAlert');
    console.error(error);
  });

~~~

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **alertId** | **String**| Alert ID |  |
 **body** | [**UnreadStatus**](UnreadStatus.html)| InteractionStatsAlert |  |
 **expand** | [**[String]**](String.html)| Which fields, if any, to expand | [optional] <br />**Values**: notificationUsers |
{: class="table table-striped"}

### Return type

[**UnreadStatus**](UnreadStatus.html)

<a name="putAlertingInteractionstatsRule"></a>

# [**InteractionStatsRule**](InteractionStatsRule.html) putAlertingInteractionstatsRule(ruleId, body, opts)

PUT /api/v2/alerting/interactionstats/rules/{ruleId}

Update an interaction stats rule



### Example

~~~ javascript
const platformClient = require('purecloud-platform-client-v2');

// Configure OAuth2 access token for authorization: PureCloud Auth
platformClient.ApiClient.instance.authentications['PureCloud Auth'].accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new platformClient.AlertingApi();

var ruleId = "ruleId_example"; // String | Rule ID

var body = new platformClient.InteractionStatsRule(); // InteractionStatsRule | AlertingRule

var opts = { 
  'expand': ["expand_example"] // [String] | Which fields, if any, to expand
};
apiInstance.putAlertingInteractionstatsRule(ruleId, body, opts)
  .then(function(data) {
    console.log(`putAlertingInteractionstatsRule success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch(function(error) {
  	console.log('There was a failure calling putAlertingInteractionstatsRule');
    console.error(error);
  });

~~~

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **ruleId** | **String**| Rule ID |  |
 **body** | [**InteractionStatsRule**](InteractionStatsRule.html)| AlertingRule |  |
 **expand** | [**[String]**](String.html)| Which fields, if any, to expand | [optional] <br />**Values**: notificationUsers |
{: class="table table-striped"}

### Return type

[**InteractionStatsRule**](InteractionStatsRule.html)

