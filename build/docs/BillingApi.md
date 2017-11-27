---
title: BillingApi
---
# platformClient.BillingApi

All URIs are relative to *https://api.mypurecloud.com*

| Method | HTTP request | Description |
| ------------- | ------------- | ------------- |
[**getBillingReportsBillableusage**](BillingApi.html#getBillingReportsBillableusage) | **GET** /api/v2/billing/reports/billableusage | Get a report of the billable usages (e.g. licenses and devices utilized) for a given period.
{: class="table table-striped"}

<a name="getBillingReportsBillableusage"></a>

# BillingUsageReport getBillingReportsBillableusage(startDate, endDate)

GET /api/v2/billing/reports/billableusage

Get a report of the billable usages (e.g. licenses and devices utilized) for a given period.



### Example

~~~ javascript
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Configure OAuth2 access token for authorization: PureCloud Auth
platformClient.ApiClient.instance.authentications['PureCloud Auth'].accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new platformClient.BillingApi();

var startDate = new Date("2013-10-20T19:20:30+01:00"); // Date | The period start date. Date time is represented as an ISO-8601 string. For example: yyyy-MM-ddTHH:mm:ss.SSSZ

var endDate = new Date("2013-10-20T19:20:30+01:00"); // Date | The period end date. Date time is represented as an ISO-8601 string. For example: yyyy-MM-ddTHH:mm:ss.SSSZ

apiInstance.getBillingReportsBillableusage(startDate, endDate)
  .then(function(data) {
    console.log(`getBillingReportsBillableusage success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch(function(err) {
  	console.log('There was a failure calling getBillingReportsBillableusage');
    console.error(err);
  });

~~~

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **startDate** | **Date** | The period start date. Date time is represented as an ISO-8601 string. For example: yyyy-MM-ddTHH:mm:ss.SSSZ |  |
 **endDate** | **Date** | The period end date. Date time is represented as an ISO-8601 string. For example: yyyy-MM-ddTHH:mm:ss.SSSZ |  |
{: class="table table-striped"}

### Return type

**BillingUsageReport**

