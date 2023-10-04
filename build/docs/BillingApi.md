---
title: BillingApi
---
# platformClient.BillingApi

All URIs are relative to *https://api.inindca.com*

| Method | HTTP request | Description |
| ------------- | ------------- | ------------- |
[**getBillingAccount**](BillingApi.html#getBillingAccount) | **GET** /api/v2/billing/accounts/{accountId} | Get billing account.
[**getBillingAccount0**](BillingApi.html#getBillingAccount0) | **GET** /api/v2/billing/account | Get constumer account.
[**getBillingCarrierservicesUsageCalls**](BillingApi.html#getBillingCarrierservicesUsageCalls) | **GET** /api/v2/billing/carrierservices/usage/calls | Get carrier services usage data.
[**getBillingFreetrial**](BillingApi.html#getBillingFreetrial) | **GET** /api/v2/billing/freetrial | Get customer free trial information.
[**getBillingInvoice**](BillingApi.html#getBillingInvoice) | **GET** /api/v2/billing/invoices/{invoiceId} | Get invoice.
[**getBillingInvoicePdf**](BillingApi.html#getBillingInvoicePdf) | **GET** /api/v2/billing/invoices/{invoiceId}/pdf | Get invoice PDF.
[**getBillingInvoices**](BillingApi.html#getBillingInvoices) | **GET** /api/v2/billing/invoices | Get invoices
[**getBillingPeriods**](BillingApi.html#getBillingPeriods) | **GET** /api/v2/billing/periods | Get billing periods
[**getBillingPremiumapplisting**](BillingApi.html#getBillingPremiumapplisting) | **GET** /api/v2/billing/premiumapplistings/{appId} | Get Premium App listing.
[**getBillingReportsBillableusage**](BillingApi.html#getBillingReportsBillableusage) | **GET** /api/v2/billing/reports/billableusage | Get a report of the billable license usages
[**getBillingReportsBillableusagedataReportIdCsv**](BillingApi.html#getBillingReportsBillableusagedataReportIdCsv) | **GET** /api/v2/billing/reports/billableusagedata/{reportId}/csv | Get billable usage data report CSV.
[**getBillingReportsConcurrentusagedataReportIdCsv**](BillingApi.html#getBillingReportsConcurrentusagedataReportIdCsv) | **GET** /api/v2/billing/reports/concurrentusagedata/{reportId}/csv | Get concurrent usage data report CSV.
[**getBillingReportsResourcesusagedataReportIdCsv**](BillingApi.html#getBillingReportsResourcesusagedataReportIdCsv) | **GET** /api/v2/billing/reports/resourcesusagedata/{reportId}/csv | Get resources usage data report CSV.
[**getBillingSignupFreetrial**](BillingApi.html#getBillingSignupFreetrial) | **GET** /api/v2/billing/signup/freetrial | Get signup free trial for organization
[**getBillingSignupFreetrialStagingFreeTrialId**](BillingApi.html#getBillingSignupFreetrialStagingFreeTrialId) | **GET** /api/v2/billing/signup/freetrial/staging/{freeTrialId} | Get a free trial staging instance
[**getBillingSignupProvisioningProvisioningId**](BillingApi.html#getBillingSignupProvisioningProvisioningId) | **GET** /api/v2/billing/signup/provisioning/{provisioningId} | Get a provisioning record
[**getBillingSubscriptionoverview**](BillingApi.html#getBillingSubscriptionoverview) | **GET** /api/v2/billing/subscriptionoverview | Get subscription overview.
[**getBillingTask**](BillingApi.html#getBillingTask) | **GET** /api/v2/billing/tasks/{taskId} | Get the result of an asynchronous billing task.
[**getBillingTrusteebillingoverviewTrustorOrgId**](BillingApi.html#getBillingTrusteebillingoverviewTrustorOrgId) | **GET** /api/v2/billing/trusteebillingoverview/{trustorOrgId} | Get the billing overview for an organization that is managed by a partner.
[**getBillingVendorusageOrganization**](BillingApi.html#getBillingVendorusageOrganization) | **GET** /api/v2/billing/vendorusage/organizations/{organizationId} | Get metered app customer usage details.
[**getBillingVendorusageOrganizations**](BillingApi.html#getBillingVendorusageOrganizations) | **GET** /api/v2/billing/vendorusage/organizations | Get metered app customer usage counts by Genesys Cloud region
[**patchBillingSignupFreetrialStagingFreeTrialId**](BillingApi.html#patchBillingSignupFreetrialStagingFreeTrialId) | **PATCH** /api/v2/billing/signup/freetrial/staging/{freeTrialId} | Update a free trial staging instance
[**patchBillingSignupProvisioningProvisioningId**](BillingApi.html#patchBillingSignupProvisioningProvisioningId) | **PATCH** /api/v2/billing/signup/provisioning/{provisioningId} | Update a provisioning record
[**postBillingActivation**](BillingApi.html#postBillingActivation) | **POST** /api/v2/billing/activations/{billingActivationJobId} | Apply billing activation
[**postBillingCarrierservicesUsageCallsCsv**](BillingApi.html#postBillingCarrierservicesUsageCallsCsv) | **POST** /api/v2/billing/carrierservices/usage/calls/csv | Get carrier services usage data CSV.
[**postBillingPremiseLicensestatus**](BillingApi.html#postBillingPremiseLicensestatus) | **POST** /api/v2/billing/premise/licensestatus | Request the organization's licensing standing.
[**postBillingPremiseUploadurl**](BillingApi.html#postBillingPremiseUploadurl) | **POST** /api/v2/billing/premise/uploadurl | Request Upload URL for billing files.
[**postBillingPremiumapptrials**](BillingApi.html#postBillingPremiumapptrials) | **POST** /api/v2/billing/premiumapptrials | Activate a Premium App trial.
[**postBillingReportsBillableusagedataReportIdCsv**](BillingApi.html#postBillingReportsBillableusagedataReportIdCsv) | **POST** /api/v2/billing/reports/billableusagedata/{reportId}/csv | Get billable usage data report CSV.
[**postBillingReportsConcurrentusagedataReportIdCsv**](BillingApi.html#postBillingReportsConcurrentusagedataReportIdCsv) | **POST** /api/v2/billing/reports/concurrentusagedata/{reportId}/csv | Get concurrent data report CSV.
[**postBillingReportsHourlylicenseusagedataReportIdCsv**](BillingApi.html#postBillingReportsHourlylicenseusagedataReportIdCsv) | **POST** /api/v2/billing/reports/hourlylicenseusagedata/{reportId}/csv | Get hourly license usage data report CSV.
[**postBillingReportsResourcesusagedataReportIdCsv**](BillingApi.html#postBillingReportsResourcesusagedataReportIdCsv) | **POST** /api/v2/billing/reports/resourcesusagedata/{reportId}/csv | Get resources data report CSV.
[**postBillingSignupFreetrialStaging**](BillingApi.html#postBillingSignupFreetrialStaging) | **POST** /api/v2/billing/signup/freetrial/staging | Create a new free trial staging instance
[**postBillingSignupFreetrialStagingFreeTrialIdOtp**](BillingApi.html#postBillingSignupFreetrialStagingFreeTrialIdOtp) | **POST** /api/v2/billing/signup/freetrial/staging/{freeTrialId}/otp | Generates a new OTP code for free trial signup
[**postBillingSignupProvisioning**](BillingApi.html#postBillingSignupProvisioning) | **POST** /api/v2/billing/signup/provisioning | Create a new provisioning record
[**postBillingSignupProvisioningProvisioningIdOtp**](BillingApi.html#postBillingSignupProvisioningProvisioningIdOtp) | **POST** /api/v2/billing/signup/provisioning/{provisioningId}/otp | Generates a new OTP code for a provisioning job
[**postBillingSubscriptionproductactivations**](BillingApi.html#postBillingSubscriptionproductactivations) | **POST** /api/v2/billing/subscriptionproductactivations | Activate a Subscription Product.
[**postBillingSubscriptionproductcancellations**](BillingApi.html#postBillingSubscriptionproductcancellations) | **POST** /api/v2/billing/subscriptionproductcancellations | Cancel a Subscription Product.
[**postBillingVendorusageOrganization**](BillingApi.html#postBillingVendorusageOrganization) | **POST** /api/v2/billing/vendorusage/organizations/{organizationId} | Submit metered app usage data.
[**putBillingAccount**](BillingApi.html#putBillingAccount) | **PUT** /api/v2/billing/accounts/{accountId} | Updates the billing account.
[**putBillingAccount0**](BillingApi.html#putBillingAccount0) | **PUT** /api/v2/billing/account | Update customer account.
{: class="table table-striped"}

<a name="getBillingAccount"></a>

# Account getBillingAccount(accountId, opts)


GET /api/v2/billing/accounts/{accountId}

Get billing account.

Requires ANY permissions:

* billing:subscription:create
* billing:subscription:add
* billing:subscription:read
* billing:subscription:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.BillingApi();

let accountId = "accountId_example"; // String | Identifies the account to be retrieved
let opts = { 
  'fields': "fields_example" // String | Fields needed
};

apiInstance.getBillingAccount(accountId, opts)
  .then((data) => {
    console.log(`getBillingAccount success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getBillingAccount');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **accountId** | **String** | Identifies the account to be retrieved |  |
 **fields** | **String** | Fields needed | [optional]  |
{: class="table table-striped"}

### Return type

**Account**

<a name="getBillingAccount0"></a>

# CustomerAccount getBillingAccount0()


GET /api/v2/billing/account

Get constumer account.

Requires ANY permissions:

* billing:subscription:read
* billing:subscription:view
* billing:subscription:create
* billing:subscription:add

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.BillingApi();

apiInstance.getBillingAccount0()
  .then((data) => {
    console.log(`getBillingAccount0 success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getBillingAccount0');
    console.error(err);
  });
```

### Parameters

This endpoint does not need any parameter.


### Return type

**CustomerAccount**

<a name="getBillingCarrierservicesUsageCalls"></a>

# UrlResponse getBillingCarrierservicesUsageCalls(opts)


GET /api/v2/billing/carrierservices/usage/calls

Get carrier services usage data.

Requires ANY permissions:

* billing:subscription:read
* billing:subscription:view
* billing:subscription:create
* billing:subscription:add

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.BillingApi();

let opts = { 
  'from': new Date("2013-10-20T19:20:30+01:00"), // Date | startDateTime. Date time is represented as an ISO-8601 string. For example: yyyy-MM-ddTHH:mm:ss[.mmm]Z
  'to': new Date("2013-10-20T19:20:30+01:00"), // Date | endDateTime. Date time is represented as an ISO-8601 string. For example: yyyy-MM-ddTHH:mm:ss[.mmm]Z
  'limit': 50 // Number | Limit the number of results
};

apiInstance.getBillingCarrierservicesUsageCalls(opts)
  .then((data) => {
    console.log(`getBillingCarrierservicesUsageCalls success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getBillingCarrierservicesUsageCalls');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **from** | **Date** | startDateTime. Date time is represented as an ISO-8601 string. For example: yyyy-MM-ddTHH:mm:ss[.mmm]Z | [optional]  |
 **to** | **Date** | endDateTime. Date time is represented as an ISO-8601 string. For example: yyyy-MM-ddTHH:mm:ss[.mmm]Z | [optional]  |
 **limit** | **Number** | Limit the number of results | [optional] [default to 50] |
{: class="table table-striped"}

### Return type

**UrlResponse**

<a name="getBillingFreetrial"></a>

# FreeTrial getBillingFreetrial()


GET /api/v2/billing/freetrial

Get customer free trial information.

Requires ANY permissions:

* billing:subscription:read
* billing:subscription:view
* billing:subscription:create
* billing:subscription:add

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.BillingApi();

apiInstance.getBillingFreetrial()
  .then((data) => {
    console.log(`getBillingFreetrial success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getBillingFreetrial');
    console.error(err);
  });
```

### Parameters

This endpoint does not need any parameter.


### Return type

**FreeTrial**

<a name="getBillingInvoice"></a>

# Invoice getBillingInvoice(invoiceId)


GET /api/v2/billing/invoices/{invoiceId}

Get invoice.

Requires ANY permissions:

* billing:subscription:read
* billing:subscription:view
* billing:subscription:create
* billing:subscription:add

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.BillingApi();

let invoiceId = "invoiceId_example"; // String | Identifies the invoice to be retrieved

apiInstance.getBillingInvoice(invoiceId)
  .then((data) => {
    console.log(`getBillingInvoice success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getBillingInvoice');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **invoiceId** | **String** | Identifies the invoice to be retrieved |  |
{: class="table table-striped"}

### Return type

**Invoice**

<a name="getBillingInvoicePdf"></a>

# UrlResponse getBillingInvoicePdf(invoiceId)


GET /api/v2/billing/invoices/{invoiceId}/pdf

Get invoice PDF.

Requires ANY permissions:

* billing:subscription:read
* billing:subscription:view
* billing:subscription:create
* billing:subscription:add

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.BillingApi();

let invoiceId = "invoiceId_example"; // String | Identifies the invoice PDF to be retrieved

apiInstance.getBillingInvoicePdf(invoiceId)
  .then((data) => {
    console.log(`getBillingInvoicePdf success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getBillingInvoicePdf');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **invoiceId** | **String** | Identifies the invoice PDF to be retrieved |  |
{: class="table table-striped"}

### Return type

**UrlResponse**

<a name="getBillingInvoices"></a>

# DomainInvoiceEntityListing getBillingInvoices(opts)


GET /api/v2/billing/invoices

Get invoices

Retrieve a list of invoices stored in the system.

Requires ANY permissions:

* billing:subscription:read
* billing:subscription:view
* billing:subscription:create
* billing:subscription:add

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.BillingApi();

let opts = { 
  'pageSize': 25, // Number | Page size
  'pageNumber': 1 // Number | Page number
};

apiInstance.getBillingInvoices(opts)
  .then((data) => {
    console.log(`getBillingInvoices success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getBillingInvoices');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **pageSize** | **Number** | Page size | [optional] [default to 25] |
 **pageNumber** | **Number** | Page number | [optional] [default to 1] |
{: class="table table-striped"}

### Return type

**DomainInvoiceEntityListing**

<a name="getBillingPeriods"></a>

# DomainBillingPeriodEntityListing getBillingPeriods(opts)


GET /api/v2/billing/periods

Get billing periods

Retrieve a list of billing periods stored in the system.

Requires ANY permissions:

* billing:subscription:read
* billing:subscription:view
* billing:subscription:create
* billing:subscription:add

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.BillingApi();

let opts = { 
  'periodGranularity': "periodGranularity_example", // String | Period granularity
  'pageSize': 25, // Number | Page size
  'pageNumber': 1 // Number | Page number
};

apiInstance.getBillingPeriods(opts)
  .then((data) => {
    console.log(`getBillingPeriods success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getBillingPeriods');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **periodGranularity** | **String** | Period granularity | [optional]  |
 **pageSize** | **Number** | Page size | [optional] [default to 25] |
 **pageNumber** | **Number** | Page number | [optional] [default to 1] |
{: class="table table-striped"}

### Return type

**DomainBillingPeriodEntityListing**

<a name="getBillingPremiumapplisting"></a>

# PremiumAppListing getBillingPremiumapplisting(appId)


GET /api/v2/billing/premiumapplistings/{appId}

Get Premium App listing.

Requires NO permissions:

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.BillingApi();

let appId = "appId_example"; // String | Identifies the App ID whose listing should be retrieved

apiInstance.getBillingPremiumapplisting(appId)
  .then((data) => {
    console.log(`getBillingPremiumapplisting success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getBillingPremiumapplisting');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **appId** | **String** | Identifies the App ID whose listing should be retrieved |  |
{: class="table table-striped"}

### Return type

**PremiumAppListing**

<a name="getBillingReportsBillableusage"></a>

# BillingUsageReport getBillingReportsBillableusage(startDate, endDate)


GET /api/v2/billing/reports/billableusage

Get a report of the billable license usages

Report is of the billable usages (e.g. licenses and devices utilized) for a given period. If responses status is InProgress, wait a few seconds, then try the same request again.

Requires ANY permissions:

* billing:subscription:read
* billing:subscription:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.BillingApi();

let startDate = new Date("2013-10-20T19:20:30+01:00"); // Date | The period start date. Date time is represented as an ISO-8601 string. For example: yyyy-MM-ddTHH:mm:ss[.mmm]Z
let endDate = new Date("2013-10-20T19:20:30+01:00"); // Date | The period end date. Date time is represented as an ISO-8601 string. For example: yyyy-MM-ddTHH:mm:ss[.mmm]Z

apiInstance.getBillingReportsBillableusage(startDate, endDate)
  .then((data) => {
    console.log(`getBillingReportsBillableusage success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getBillingReportsBillableusage');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **startDate** | **Date** | The period start date. Date time is represented as an ISO-8601 string. For example: yyyy-MM-ddTHH:mm:ss[.mmm]Z |  |
 **endDate** | **Date** | The period end date. Date time is represented as an ISO-8601 string. For example: yyyy-MM-ddTHH:mm:ss[.mmm]Z |  |
{: class="table table-striped"}

### Return type

**BillingUsageReport**

<a name="getBillingReportsBillableusagedataReportIdCsv"></a>

# UrlResponse getBillingReportsBillableusagedataReportIdCsv(reportId)


GET /api/v2/billing/reports/billableusagedata/{reportId}/csv

Get billable usage data report CSV.

Requires ANY permissions:

* billing:subscription:read
* billing:subscription:view
* billing:subscription:create
* billing:subscription:add

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.BillingApi();

let reportId = "reportId_example"; // String | Identifies the report CSV to be retrieved

apiInstance.getBillingReportsBillableusagedataReportIdCsv(reportId)
  .then((data) => {
    console.log(`getBillingReportsBillableusagedataReportIdCsv success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getBillingReportsBillableusagedataReportIdCsv');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **reportId** | **String** | Identifies the report CSV to be retrieved |  |
{: class="table table-striped"}

### Return type

**UrlResponse**

<a name="getBillingReportsConcurrentusagedataReportIdCsv"></a>

# UrlResponse getBillingReportsConcurrentusagedataReportIdCsv(reportId)


GET /api/v2/billing/reports/concurrentusagedata/{reportId}/csv

Get concurrent usage data report CSV.

Requires ANY permissions:

* billing:subscription:read
* billing:subscription:view
* billing:subscription:create
* billing:subscription:add

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.BillingApi();

let reportId = "reportId_example"; // String | Identifies the report CSV to be retrieved

apiInstance.getBillingReportsConcurrentusagedataReportIdCsv(reportId)
  .then((data) => {
    console.log(`getBillingReportsConcurrentusagedataReportIdCsv success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getBillingReportsConcurrentusagedataReportIdCsv');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **reportId** | **String** | Identifies the report CSV to be retrieved |  |
{: class="table table-striped"}

### Return type

**UrlResponse**

<a name="getBillingReportsResourcesusagedataReportIdCsv"></a>

# UrlResponse getBillingReportsResourcesusagedataReportIdCsv(reportId)


GET /api/v2/billing/reports/resourcesusagedata/{reportId}/csv

Get resources usage data report CSV.

Requires ANY permissions:

* billing:subscription:read
* billing:subscription:view
* billing:subscription:create
* billing:subscription:add

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.BillingApi();

let reportId = "reportId_example"; // String | Identifies the report CSV to be retrieved

apiInstance.getBillingReportsResourcesusagedataReportIdCsv(reportId)
  .then((data) => {
    console.log(`getBillingReportsResourcesusagedataReportIdCsv success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getBillingReportsResourcesusagedataReportIdCsv');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **reportId** | **String** | Identifies the report CSV to be retrieved |  |
{: class="table table-striped"}

### Return type

**UrlResponse**

<a name="getBillingSignupFreetrial"></a>

# SignupFreeTrial getBillingSignupFreetrial()


GET /api/v2/billing/signup/freetrial

Get signup free trial for organization

Requires ANY permissions:

* contract:freeTrial:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.BillingApi();

apiInstance.getBillingSignupFreetrial()
  .then((data) => {
    console.log(`getBillingSignupFreetrial success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getBillingSignupFreetrial');
    console.error(err);
  });
```

### Parameters

This endpoint does not need any parameter.


### Return type

**SignupFreeTrial**

<a name="getBillingSignupFreetrialStagingFreeTrialId"></a>

# FreeTrialStaging getBillingSignupFreetrialStagingFreeTrialId(freeTrialId)


GET /api/v2/billing/signup/freetrial/staging/{freeTrialId}

Get a free trial staging instance

Requires NO permissions:

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

let apiInstance = new platformClient.BillingApi();

let freeTrialId = "freeTrialId_example"; // String | freeTrialId

apiInstance.getBillingSignupFreetrialStagingFreeTrialId(freeTrialId)
  .then((data) => {
    console.log(`getBillingSignupFreetrialStagingFreeTrialId success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getBillingSignupFreetrialStagingFreeTrialId');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **freeTrialId** | **String** | freeTrialId |  |
{: class="table table-striped"}

### Return type

**FreeTrialStaging**

<a name="getBillingSignupProvisioningProvisioningId"></a>

# Provisioning getBillingSignupProvisioningProvisioningId(provisioningId)


GET /api/v2/billing/signup/provisioning/{provisioningId}

Get a provisioning record

Requires NO permissions:

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

let apiInstance = new platformClient.BillingApi();

let provisioningId = "provisioningId_example"; // String | provisioningId

apiInstance.getBillingSignupProvisioningProvisioningId(provisioningId)
  .then((data) => {
    console.log(`getBillingSignupProvisioningProvisioningId success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getBillingSignupProvisioningProvisioningId');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **provisioningId** | **String** | provisioningId |  |
{: class="table table-striped"}

### Return type

**Provisioning**

<a name="getBillingSubscriptionoverview"></a>

# SubscriptionOverview getBillingSubscriptionoverview(opts)


GET /api/v2/billing/subscriptionoverview

Get subscription overview.

Requires ANY permissions:

* billing:subscription:read
* billing:subscription:view
* billing:subscription:create
* billing:subscription:add

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.BillingApi();

let opts = { 
  'periodEndingTimestamp': "periodEndingTimestamp_example" // String | Period ending timestamp
};

apiInstance.getBillingSubscriptionoverview(opts)
  .then((data) => {
    console.log(`getBillingSubscriptionoverview success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getBillingSubscriptionoverview');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **periodEndingTimestamp** | **String** | Period ending timestamp | [optional]  |
{: class="table table-striped"}

### Return type

**SubscriptionOverview**

<a name="getBillingTask"></a>

# UrlResponse getBillingTask(taskId)


GET /api/v2/billing/tasks/{taskId}

Get the result of an asynchronous billing task.

Requires ANY permissions:

* billing:subscription:read
* billing:subscription:view
* billing:subscription:create
* billing:subscription:add

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.BillingApi();

let taskId = "taskId_example"; // String | Identifies the task result to retrieve

apiInstance.getBillingTask(taskId)
  .then((data) => {
    console.log(`getBillingTask success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getBillingTask');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **taskId** | **String** | Identifies the task result to retrieve |  |
{: class="table table-striped"}

### Return type

**UrlResponse**

<a name="getBillingTrusteebillingoverviewTrustorOrgId"></a>

# TrusteeBillingOverview getBillingTrusteebillingoverviewTrustorOrgId(trustorOrgId, opts)


GET /api/v2/billing/trusteebillingoverview/{trustorOrgId}

Get the billing overview for an organization that is managed by a partner.

Tax Disclaimer: Prices returned by this API do not include applicable taxes. It is the responsibility of the customer to pay all taxes that are appropriate in their jurisdiction. See the PureCloud API Documentation in the Developer Center for more information about this API: https://developer.mypurecloud.com/api/rest/v2/

Requires ANY permissions:

* affiliateOrganization:clientBilling:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.BillingApi();

let trustorOrgId = "trustorOrgId_example"; // String | The organization ID of the trustor (customer) organization.
let opts = { 
  'billingPeriodIndex': 0 // Number | 0 for active period (overview data may change until period closes). 1 for prior completed billing period. 2 for two billing cycles prior, and so on.
};

apiInstance.getBillingTrusteebillingoverviewTrustorOrgId(trustorOrgId, opts)
  .then((data) => {
    console.log(`getBillingTrusteebillingoverviewTrustorOrgId success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getBillingTrusteebillingoverviewTrustorOrgId');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **trustorOrgId** | **String** | The organization ID of the trustor (customer) organization. |  |
 **billingPeriodIndex** | **Number** | 0 for active period (overview data may change until period closes). 1 for prior completed billing period. 2 for two billing cycles prior, and so on. | [optional] [default to 0] |
{: class="table table-striped"}

### Return type

**TrusteeBillingOverview**

<a name="getBillingVendorusageOrganization"></a>

# MeteredAppOrganizationDetail getBillingVendorusageOrganization(organizationId, opts)


GET /api/v2/billing/vendorusage/organizations/{organizationId}

Get metered app customer usage details.

Requires ANY permissions:

* billing:meteredAppUsage:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.BillingApi();

let organizationId = "organizationId_example"; // String | The ID of the customer organization to retrieve or submit usage for.
let opts = { 
  'region': "region_example", // String | Genesys Cloud region (us-east-1, eu-central-1, ap-southeast-2, etc.)
  'appIds': "appIds_example" // String | Comma-separated list of app IDs to return usage for
};

apiInstance.getBillingVendorusageOrganization(organizationId, opts)
  .then((data) => {
    console.log(`getBillingVendorusageOrganization success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getBillingVendorusageOrganization');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **organizationId** | **String** | The ID of the customer organization to retrieve or submit usage for. |  |
 **region** | **String** | Genesys Cloud region (us-east-1, eu-central-1, ap-southeast-2, etc.) | [optional] <br />**Values**: ap-northeast-1, ap-northeast-2, ap-northeast-3, ap-south-1, ap-southeast-2, ca-central-1, eu-central-1, eu-central-2, eu-west-1, eu-west-2, eu-west-3, me-central-1, sa-east-1, us-east-1, us-west-2, us-east-2 |
 **appIds** | **String** | Comma-separated list of app IDs to return usage for | [optional]  |
{: class="table table-striped"}

### Return type

**MeteredAppOrganizationDetail**

<a name="getBillingVendorusageOrganizations"></a>

# MeteredAppOrganizationList getBillingVendorusageOrganizations(opts)


GET /api/v2/billing/vendorusage/organizations

Get metered app customer usage counts by Genesys Cloud region

Requires ANY permissions:

* billing:meteredAppUsage:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.BillingApi();

let opts = { 
  'before': "before_example", // String | The cursor that points to the start of the set of entities that has been returned.
  'after': "after_example", // String | The cursor that points to the end of the set of entities that has been returned.
  'pageSize': "pageSize_example", // String | Number of entities to return. Maximum of 200.
  'region': "region_example", // String | Genesys Cloud region (us-east-1, eu-central-1, ap-southeast-2, etc.)
  'appIds': "appIds_example" // String | Comma-separated list of app IDs to return usage for
};

apiInstance.getBillingVendorusageOrganizations(opts)
  .then((data) => {
    console.log(`getBillingVendorusageOrganizations success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getBillingVendorusageOrganizations');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **before** | **String** | The cursor that points to the start of the set of entities that has been returned. | [optional]  |
 **after** | **String** | The cursor that points to the end of the set of entities that has been returned. | [optional]  |
 **pageSize** | **String** | Number of entities to return. Maximum of 200. | [optional]  |
 **region** | **String** | Genesys Cloud region (us-east-1, eu-central-1, ap-southeast-2, etc.) | [optional] <br />**Values**: ap-northeast-1, ap-northeast-2, ap-northeast-3, ap-south-1, ap-southeast-2, ca-central-1, eu-central-1, eu-central-2, eu-west-1, eu-west-2, eu-west-3, me-central-1, sa-east-1, us-east-1, us-west-2, us-east-2 |
 **appIds** | **String** | Comma-separated list of app IDs to return usage for | [optional]  |
{: class="table table-striped"}

### Return type

**MeteredAppOrganizationList**

<a name="patchBillingSignupFreetrialStagingFreeTrialId"></a>

# FreeTrialStaging patchBillingSignupFreetrialStagingFreeTrialId(freeTrialId, opts)


PATCH /api/v2/billing/signup/freetrial/staging/{freeTrialId}

Update a free trial staging instance

Requires NO permissions:

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

let apiInstance = new platformClient.BillingApi();

let freeTrialId = "freeTrialId_example"; // String | freeTrialId
let opts = { 
  'body': {} // Object | Input used to update a free trial
};

apiInstance.patchBillingSignupFreetrialStagingFreeTrialId(freeTrialId, opts)
  .then((data) => {
    console.log(`patchBillingSignupFreetrialStagingFreeTrialId success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling patchBillingSignupFreetrialStagingFreeTrialId');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **freeTrialId** | **String** | freeTrialId |  |
 **body** | **Object** | Input used to update a free trial | [optional]  |
{: class="table table-striped"}

### Return type

**FreeTrialStaging**

<a name="patchBillingSignupProvisioningProvisioningId"></a>

# Provisioning patchBillingSignupProvisioningProvisioningId(provisioningId, opts)


PATCH /api/v2/billing/signup/provisioning/{provisioningId}

Update a provisioning record

Requires NO permissions:

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

let apiInstance = new platformClient.BillingApi();

let provisioningId = "provisioningId_example"; // String | provisioningId
let opts = { 
  'body': {} // Object | Input used to update a provisioning record
};

apiInstance.patchBillingSignupProvisioningProvisioningId(provisioningId, opts)
  .then((data) => {
    console.log(`patchBillingSignupProvisioningProvisioningId success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling patchBillingSignupProvisioningProvisioningId');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **provisioningId** | **String** | provisioningId |  |
 **body** | **Object** | Input used to update a provisioning record | [optional]  |
{: class="table table-striped"}

### Return type

**Provisioning**

<a name="postBillingActivation"></a>

# BillingTaskResult postBillingActivation(billingActivationJobId)


POST /api/v2/billing/activations/{billingActivationJobId}

Apply billing activation

Applies a billing activation job to this org, which activates billing for this customer.

Requires ANY permissions:

* billing:subscription:create
* billing:subscription:add

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.BillingApi();

let billingActivationJobId = "billingActivationJobId_example"; // String | Identifies the billing activation job to apply

apiInstance.postBillingActivation(billingActivationJobId)
  .then((data) => {
    console.log(`postBillingActivation success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling postBillingActivation');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **billingActivationJobId** | **String** | Identifies the billing activation job to apply |  |
{: class="table table-striped"}

### Return type

**BillingTaskResult**

<a name="postBillingCarrierservicesUsageCallsCsv"></a>

# BillingPendingTask postBillingCarrierservicesUsageCallsCsv(opts)


POST /api/v2/billing/carrierservices/usage/calls/csv

Get carrier services usage data CSV.

Requires ANY permissions:

* billing:subscription:read
* billing:subscription:view
* billing:subscription:create
* billing:subscription:add

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.BillingApi();

let opts = { 
  'from': new Date("2013-10-20T19:20:30+01:00"), // Date | startDateTime. Date time is represented as an ISO-8601 string. For example: yyyy-MM-ddTHH:mm:ss[.mmm]Z
  'to': new Date("2013-10-20T19:20:30+01:00"), // Date | endDateTime. Date time is represented as an ISO-8601 string. For example: yyyy-MM-ddTHH:mm:ss[.mmm]Z
  'limit': -1 // Number | Limit the number of results
};

apiInstance.postBillingCarrierservicesUsageCallsCsv(opts)
  .then((data) => {
    console.log(`postBillingCarrierservicesUsageCallsCsv success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling postBillingCarrierservicesUsageCallsCsv');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **from** | **Date** | startDateTime. Date time is represented as an ISO-8601 string. For example: yyyy-MM-ddTHH:mm:ss[.mmm]Z | [optional]  |
 **to** | **Date** | endDateTime. Date time is represented as an ISO-8601 string. For example: yyyy-MM-ddTHH:mm:ss[.mmm]Z | [optional]  |
 **limit** | **Number** | Limit the number of results | [optional] [default to -1] |
{: class="table table-striped"}

### Return type

**BillingPendingTask**

<a name="postBillingPremiseLicensestatus"></a>

# SignedBillingData postBillingPremiseLicensestatus(body)


POST /api/v2/billing/premise/licensestatus

Request the organization's licensing standing.

Requires NO permissions:

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.BillingApi();

let body = {}; // Object | SignedBillingData

apiInstance.postBillingPremiseLicensestatus(body)
  .then((data) => {
    console.log(`postBillingPremiseLicensestatus success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling postBillingPremiseLicensestatus');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **body** | **Object** | SignedBillingData |  |
{: class="table table-striped"}

### Return type

**SignedBillingData**

<a name="postBillingPremiseUploadurl"></a>

# SignedBillingData postBillingPremiseUploadurl(body)


POST /api/v2/billing/premise/uploadurl

Request Upload URL for billing files.

Requires NO permissions:

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.BillingApi();

let body = {}; // Object | SignedBillingData

apiInstance.postBillingPremiseUploadurl(body)
  .then((data) => {
    console.log(`postBillingPremiseUploadurl success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling postBillingPremiseUploadurl');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **body** | **Object** | SignedBillingData |  |
{: class="table table-striped"}

### Return type

**SignedBillingData**

<a name="postBillingPremiumapptrials"></a>

# BillingTaskResult postBillingPremiumapptrials(opts)


POST /api/v2/billing/premiumapptrials

Activate a Premium App trial.

Requires ANY permissions:

* billing:subscription:create
* billing:subscription:add

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.BillingApi();

let opts = { 
  'body': {} // Object | The Premium App trial details
};

apiInstance.postBillingPremiumapptrials(opts)
  .then((data) => {
    console.log(`postBillingPremiumapptrials success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling postBillingPremiumapptrials');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **body** | **Object** | The Premium App trial details | [optional]  |
{: class="table table-striped"}

### Return type

**BillingTaskResult**

<a name="postBillingReportsBillableusagedataReportIdCsv"></a>

# BillingTaskResult postBillingReportsBillableusagedataReportIdCsv(reportId)


POST /api/v2/billing/reports/billableusagedata/{reportId}/csv

Get billable usage data report CSV.

Gets the billable usage data report CSV for this customer.

Requires ANY permissions:

* billing:subscription:read
* billing:subscription:view
* billing:subscription:create
* billing:subscription:add

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.BillingApi();

let reportId = "reportId_example"; // String | Identifies the report CSV to be retrieved

apiInstance.postBillingReportsBillableusagedataReportIdCsv(reportId)
  .then((data) => {
    console.log(`postBillingReportsBillableusagedataReportIdCsv success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling postBillingReportsBillableusagedataReportIdCsv');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **reportId** | **String** | Identifies the report CSV to be retrieved |  |
{: class="table table-striped"}

### Return type

**BillingTaskResult**

<a name="postBillingReportsConcurrentusagedataReportIdCsv"></a>

# BillingTaskResult postBillingReportsConcurrentusagedataReportIdCsv(reportId)


POST /api/v2/billing/reports/concurrentusagedata/{reportId}/csv

Get concurrent data report CSV.

Gets the concurrent data report CSV for this customer.

Requires ANY permissions:

* billing:subscription:read
* billing:subscription:view
* billing:subscription:create
* billing:subscription:add

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.BillingApi();

let reportId = "reportId_example"; // String | Identifies the report CSV to be retrieved

apiInstance.postBillingReportsConcurrentusagedataReportIdCsv(reportId)
  .then((data) => {
    console.log(`postBillingReportsConcurrentusagedataReportIdCsv success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling postBillingReportsConcurrentusagedataReportIdCsv');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **reportId** | **String** | Identifies the report CSV to be retrieved |  |
{: class="table table-striped"}

### Return type

**BillingTaskResult**

<a name="postBillingReportsHourlylicenseusagedataReportIdCsv"></a>

# BillingTaskResult postBillingReportsHourlylicenseusagedataReportIdCsv(reportId)


POST /api/v2/billing/reports/hourlylicenseusagedata/{reportId}/csv

Get hourly license usage data report CSV.

Gets the hourly license usage data report CSV for this customer.

Requires ANY permissions:

* billing:subscription:read
* billing:subscription:view
* billing:subscription:create
* billing:subscription:add

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.BillingApi();

let reportId = "reportId_example"; // String | Identifies the report CSV to be retrieved

apiInstance.postBillingReportsHourlylicenseusagedataReportIdCsv(reportId)
  .then((data) => {
    console.log(`postBillingReportsHourlylicenseusagedataReportIdCsv success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling postBillingReportsHourlylicenseusagedataReportIdCsv');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **reportId** | **String** | Identifies the report CSV to be retrieved |  |
{: class="table table-striped"}

### Return type

**BillingTaskResult**

<a name="postBillingReportsResourcesusagedataReportIdCsv"></a>

# BillingTaskResult postBillingReportsResourcesusagedataReportIdCsv(reportId)


POST /api/v2/billing/reports/resourcesusagedata/{reportId}/csv

Get resources data report CSV.

Gets the resources data report CSV for this customer.

Requires ANY permissions:

* billing:subscription:read
* billing:subscription:view
* billing:subscription:create
* billing:subscription:add

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.BillingApi();

let reportId = "reportId_example"; // String | Identifies the report CSV to be retrieved

apiInstance.postBillingReportsResourcesusagedataReportIdCsv(reportId)
  .then((data) => {
    console.log(`postBillingReportsResourcesusagedataReportIdCsv success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling postBillingReportsResourcesusagedataReportIdCsv');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **reportId** | **String** | Identifies the report CSV to be retrieved |  |
{: class="table table-striped"}

### Return type

**BillingTaskResult**

<a name="postBillingSignupFreetrialStaging"></a>

# CreateFreeTrialStaging postBillingSignupFreetrialStaging(opts)


POST /api/v2/billing/signup/freetrial/staging

Create a new free trial staging instance

Requires NO permissions:

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

let apiInstance = new platformClient.BillingApi();

let opts = { 
  'utmCampaign': "utmCampaign_example", // String | Marketing campaign identifier
  'utmSource': "utmSource_example", // String | Source where traffic is coming from
  'utmMedium': "utmMedium_example", // String | General channel where the traffic came from
  'utmContent': "utmContent_example", // String | What type of content initiated the event
  'utmTerm': "utmTerm_example", // String | Which query term was used to access the page
  'body': {} // Object | Input used to create a free trial
};

apiInstance.postBillingSignupFreetrialStaging(opts)
  .then((data) => {
    console.log(`postBillingSignupFreetrialStaging success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling postBillingSignupFreetrialStaging');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **utmCampaign** | **String** | Marketing campaign identifier | [optional]  |
 **utmSource** | **String** | Source where traffic is coming from | [optional]  |
 **utmMedium** | **String** | General channel where the traffic came from | [optional]  |
 **utmContent** | **String** | What type of content initiated the event | [optional]  |
 **utmTerm** | **String** | Which query term was used to access the page | [optional]  |
 **body** | **Object** | Input used to create a free trial | [optional]  |
{: class="table table-striped"}

### Return type

**CreateFreeTrialStaging**

<a name="postBillingSignupFreetrialStagingFreeTrialIdOtp"></a>

# CreateFreeTrialOtp postBillingSignupFreetrialStagingFreeTrialIdOtp(freeTrialId, opts)


POST /api/v2/billing/signup/freetrial/staging/{freeTrialId}/otp

Generates a new OTP code for free trial signup

Requires NO permissions:

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

let apiInstance = new platformClient.BillingApi();

let freeTrialId = "freeTrialId_example"; // String | freeTrialId
let opts = { 
  'body': {} // Object | Input used to activate a free trial
};

apiInstance.postBillingSignupFreetrialStagingFreeTrialIdOtp(freeTrialId, opts)
  .then((data) => {
    console.log(`postBillingSignupFreetrialStagingFreeTrialIdOtp success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling postBillingSignupFreetrialStagingFreeTrialIdOtp');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **freeTrialId** | **String** | freeTrialId |  |
 **body** | **Object** | Input used to activate a free trial | [optional]  |
{: class="table table-striped"}

### Return type

**CreateFreeTrialOtp**

<a name="postBillingSignupProvisioning"></a>

# CreateProvisioning postBillingSignupProvisioning(opts)


POST /api/v2/billing/signup/provisioning

Create a new provisioning record

Requires NO permissions:

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

let apiInstance = new platformClient.BillingApi();

let opts = { 
  'utmCampaign': "utmCampaign_example", // String | Marketing campaign identifier
  'utmSource': "utmSource_example", // String | Source where traffic is coming from
  'utmMedium': "utmMedium_example", // String | General channel where the traffic came from
  'utmContent': "utmContent_example", // String | What type of content initiated the event
  'utmTerm': "utmTerm_example", // String | Which query term was used to access the page
  'body': {} // Object | Input used to create a provisioning
};

apiInstance.postBillingSignupProvisioning(opts)
  .then((data) => {
    console.log(`postBillingSignupProvisioning success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling postBillingSignupProvisioning');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **utmCampaign** | **String** | Marketing campaign identifier | [optional]  |
 **utmSource** | **String** | Source where traffic is coming from | [optional]  |
 **utmMedium** | **String** | General channel where the traffic came from | [optional]  |
 **utmContent** | **String** | What type of content initiated the event | [optional]  |
 **utmTerm** | **String** | Which query term was used to access the page | [optional]  |
 **body** | **Object** | Input used to create a provisioning | [optional]  |
{: class="table table-striped"}

### Return type

**CreateProvisioning**

<a name="postBillingSignupProvisioningProvisioningIdOtp"></a>

# CreateProvisioningOtp postBillingSignupProvisioningProvisioningIdOtp(provisioningId, opts)


POST /api/v2/billing/signup/provisioning/{provisioningId}/otp

Generates a new OTP code for a provisioning job

Requires NO permissions:

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

let apiInstance = new platformClient.BillingApi();

let provisioningId = "provisioningId_example"; // String | provisioningId
let opts = { 
  'body': {} // Object | Input used to create a new one-time passcode exchange
};

apiInstance.postBillingSignupProvisioningProvisioningIdOtp(provisioningId, opts)
  .then((data) => {
    console.log(`postBillingSignupProvisioningProvisioningIdOtp success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling postBillingSignupProvisioningProvisioningIdOtp');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **provisioningId** | **String** | provisioningId |  |
 **body** | **Object** | Input used to create a new one-time passcode exchange | [optional]  |
{: class="table table-striped"}

### Return type

**CreateProvisioningOtp**

<a name="postBillingSubscriptionproductactivations"></a>

# BillingTaskResult postBillingSubscriptionproductactivations(opts)


POST /api/v2/billing/subscriptionproductactivations

Activate a Subscription Product.

Requires ANY permissions:

* billing:subscription:create
* billing:subscription:add

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.BillingApi();

let opts = { 
  'body': {} // Object | The Subscription Product activation details
};

apiInstance.postBillingSubscriptionproductactivations(opts)
  .then((data) => {
    console.log(`postBillingSubscriptionproductactivations success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling postBillingSubscriptionproductactivations');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **body** | **Object** | The Subscription Product activation details | [optional]  |
{: class="table table-striped"}

### Return type

**BillingTaskResult**

<a name="postBillingSubscriptionproductcancellations"></a>

# BillingTaskResult postBillingSubscriptionproductcancellations(opts)


POST /api/v2/billing/subscriptionproductcancellations

Cancel a Subscription Product.

Requires ANY permissions:

* billing:subscription:create
* billing:subscription:add

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.BillingApi();

let opts = { 
  'body': {} // Object | The Subscription Product cancellation details
};

apiInstance.postBillingSubscriptionproductcancellations(opts)
  .then((data) => {
    console.log(`postBillingSubscriptionproductcancellations success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling postBillingSubscriptionproductcancellations');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **body** | **Object** | The Subscription Product cancellation details | [optional]  |
{: class="table table-striped"}

### Return type

**BillingTaskResult**

<a name="postBillingVendorusageOrganization"></a>

# MeteredAppUsageCreate postBillingVendorusageOrganization(organizationId, opts)


POST /api/v2/billing/vendorusage/organizations/{organizationId}

Submit metered app usage data.

Requires ANY permissions:

* billing:meteredAppUsage:add

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.BillingApi();

let organizationId = "organizationId_example"; // String | The ID of the customer organization to retrieve or submit usage for.
let opts = { 
  'body': {} // Object | App usage submission detail
};

apiInstance.postBillingVendorusageOrganization(organizationId, opts)
  .then((data) => {
    console.log(`postBillingVendorusageOrganization success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling postBillingVendorusageOrganization');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **organizationId** | **String** | The ID of the customer organization to retrieve or submit usage for. |  |
 **body** | **Object** | App usage submission detail | [optional]  |
{: class="table table-striped"}

### Return type

**MeteredAppUsageCreate**

<a name="putBillingAccount"></a>

# Account putBillingAccount(accountId, opts)


PUT /api/v2/billing/accounts/{accountId}

Updates the billing account.

Requires ANY permissions:

* billing:subscription:create
* billing:subscription:add

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.BillingApi();

let accountId = "accountId_example"; // String | Identifies the account to be updated
let opts = { 
  'body': {} // Object | The account to be updated
};

apiInstance.putBillingAccount(accountId, opts)
  .then((data) => {
    console.log(`putBillingAccount success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling putBillingAccount');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **accountId** | **String** | Identifies the account to be updated |  |
 **body** | **Object** | The account to be updated | [optional]  |
{: class="table table-striped"}

### Return type

**Account**

<a name="putBillingAccount0"></a>

# CustomerAccount putBillingAccount0(opts)


PUT /api/v2/billing/account

Update customer account.

Requires ANY permissions:

* billing:subscription:create
* billing:subscription:add

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.BillingApi();

let opts = { 
  'body': {} // Object | The account to be updated
};

apiInstance.putBillingAccount0(opts)
  .then((data) => {
    console.log(`putBillingAccount0 success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling putBillingAccount0');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **body** | **Object** | The account to be updated | [optional]  |
{: class="table table-striped"}

### Return type

**CustomerAccount**

