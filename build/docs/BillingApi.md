---
title: BillingApi
---
# platformClient.BillingApi

All URIs are relative to *https://api.mypurecloud.com*

| Method | HTTP request | Description |
| ------------- | ------------- | ------------- |
[**getBillingReportsBillableusage**](BillingApi.html#getBillingReportsBillableusage) | **GET** /api/v2/billing/reports/billableusage | Get a report of the billable usages (e.g. licenses and devices utilized) for a given period.
[**getBillingTrusteebillingoverviewTrustorOrgId**](BillingApi.html#getBillingTrusteebillingoverviewTrustorOrgId) | **GET** /api/v2/billing/trusteebillingoverview/{trustorOrgId} | Get the billing overview for an organization that is managed by a partner.
{: class="table table-striped"}

<a name="getBillingReportsBillableusage"></a>

# BillingUsageReport getBillingReportsBillableusage(startDate, endDate)



GET /api/v2/billing/reports/billableusage

Get a report of the billable usages (e.g. licenses and devices utilized) for a given period.



Requires ANY permissions: 

* billing:subscription:read
* billing:subscription:view
* billing:subscription:create
* billing:subscription:add



### Example Usage

~~~ javascript
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Configure OAuth2 access token for authorization: PureCloud OAuth
platformClient.ApiClient.instance.authentications['PureCloud OAuth'].accessToken = 'YOUR ACCESS TOKEN';

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

<a name="getBillingTrusteebillingoverviewTrustorOrgId"></a>

# TrusteeBillingOverview getBillingTrusteebillingoverviewTrustorOrgId(trustorOrgId, opts)



GET /api/v2/billing/trusteebillingoverview/{trustorOrgId}

Get the billing overview for an organization that is managed by a partner.

Tax Disclaimer: Prices returned by this API do not include applicable taxes. It is the responsibility of the customer to pay all taxes that are appropriate in their jurisdiction. See the PureCloud API Documentation in the Developer Center for more information about this API: https://developer.mypurecloud.com/api/rest/v2/

Requires ANY permissions: 

* affiliateOrganization:clientBilling:view



### Example Usage

~~~ javascript
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Configure OAuth2 access token for authorization: PureCloud OAuth
platformClient.ApiClient.instance.authentications['PureCloud OAuth'].accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new platformClient.BillingApi();

var trustorOrgId = "trustorOrgId_example"; // String | The organization ID of the trustor (customer) organization.

var opts = { 
  'billingPeriodIndex': 0 // Number | Billing Period Index
};
apiInstance.getBillingTrusteebillingoverviewTrustorOrgId(trustorOrgId, opts)
  .then(function(data) {
    console.log(`getBillingTrusteebillingoverviewTrustorOrgId success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch(function(err) {
  	console.log('There was a failure calling getBillingTrusteebillingoverviewTrustorOrgId');
    console.error(err);
  });

~~~

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **trustorOrgId** | **String** | The organization ID of the trustor (customer) organization. |  |
 **billingPeriodIndex** | **Number** | Billing Period Index | [optional] [default to 0] |
{: class="table table-striped"}

### Return type

**TrusteeBillingOverview**

