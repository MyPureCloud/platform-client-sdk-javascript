# BillingApi

# platformClient.BillingApi

All URIs are relative to *https://api.mypurecloud.com*

| Method | HTTP request | Description |
| ------------- | ------------- | ------------- |
[**getBillingContract**](BillingApi#getBillingContract) | **GET** /api/v2/billing/contracts/{contractId} | Get billing contract
[**getBillingContractBillingperiod**](BillingApi#getBillingContractBillingperiod) | **GET** /api/v2/billing/contracts/{contractId}/billingperiods/{billingPeriodId} | Get contract billing period
[**getBillingContracts**](BillingApi#getBillingContracts) | **GET** /api/v2/billing/contracts | Get billing contracts
[**getBillingContractsInvoiceDocument**](BillingApi#getBillingContractsInvoiceDocument) | **GET** /api/v2/billing/contracts/invoices/{invoiceId}/document | Get invoice document
[**getBillingContractsInvoiceLines**](BillingApi#getBillingContractsInvoiceLines) | **GET** /api/v2/billing/contracts/invoices/{invoiceId}/lines | Get invoice lines
[**getBillingContractsInvoices**](BillingApi#getBillingContractsInvoices) | **GET** /api/v2/billing/contracts/invoices | Get invoices
[**getBillingReportsBillableusage**](BillingApi#getBillingReportsBillableusage) | **GET** /api/v2/billing/reports/billableusage | Get a report of the billable license usages
[**getBillingTrusteebillingoverviewTrustorOrgId**](BillingApi#getBillingTrusteebillingoverviewTrustorOrgId) | **GET** /api/v2/billing/trusteebillingoverview/{trustorOrgId} | Get the billing overview for an organization that is managed by a partner.



## getBillingContract

> BillingContract getBillingContract(contractId)


GET /api/v2/billing/contracts/{contractId}

Get billing contract

Retrieve a single contract from the system.

getBillingContract is a preview method and is subject to both breaking and non-breaking changes at any time without notice

Requires ANY permissions:

* billing:subscription:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.BillingApi();

let contractId = "contractId_example"; // String | The contract number.

apiInstance.getBillingContract(contractId)
  .then((data) => {
    console.log(`getBillingContract success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getBillingContract');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **contractId** | **String** | The contract number. |  |

### Return type

**BillingContract**


## getBillingContractBillingperiod

> BillingContractPeriodDetail getBillingContractBillingperiod(contractId, billingPeriodId)


GET /api/v2/billing/contracts/{contractId}/billingperiods/{billingPeriodId}

Get contract billing period

Fetch the billing information for a given Organization by billing period.

getBillingContractBillingperiod is a preview method and is subject to both breaking and non-breaking changes at any time without notice

Requires ANY permissions:

* billing:subscription:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.BillingApi();

let contractId = "contractId_example"; // String | The contract number.
let billingPeriodId = "billingPeriodId_example"; // String | The Billing Period Id for the Org.

apiInstance.getBillingContractBillingperiod(contractId, billingPeriodId)
  .then((data) => {
    console.log(`getBillingContractBillingperiod success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getBillingContractBillingperiod');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **contractId** | **String** | The contract number. |  |
 **billingPeriodId** | **String** | The Billing Period Id for the Org. |  |

### Return type

**BillingContractPeriodDetail**


## getBillingContracts

> BillingContractListing getBillingContracts(opts)


GET /api/v2/billing/contracts

Get billing contracts

Retrieve a list of contracts stored in the system.

getBillingContracts is a preview method and is subject to both breaking and non-breaking changes at any time without notice

Requires ANY permissions:

* billing:subscription:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.BillingApi();

let opts = { 
  'before': "before_example", // String | The cursor that points to the start of the set of entities that has been returned.
  'after': "after_example", // String | The cursor that points to the end of the set of entities that has been returned.
  'pageSize': "pageSize_example", // String | Number of entities to return. Maximum of 200.
  'dateStart': "dateStart_example", // String | Start date for the query. Dates are represented as an ISO-8601 string. For example: yyyy-MM-dd
  'dateEnd': "dateEnd_example", // String | End date for the query. Dates are represented as an ISO-8601 string. For example: yyyy-MM-dd
  'status': "status_example", // String | Filter by the status of contracts
  'externalNumber': "externalNumber_example" // String | Filter by the unique external number.
};

apiInstance.getBillingContracts(opts)
  .then((data) => {
    console.log(`getBillingContracts success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getBillingContracts');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **before** | **String** | The cursor that points to the start of the set of entities that has been returned. | [optional]  |
 **after** | **String** | The cursor that points to the end of the set of entities that has been returned. | [optional]  |
 **pageSize** | **String** | Number of entities to return. Maximum of 200. | [optional]  |
 **dateStart** | **String** | Start date for the query. Dates are represented as an ISO-8601 string. For example: yyyy-MM-dd | [optional]  |
 **dateEnd** | **String** | End date for the query. Dates are represented as an ISO-8601 string. For example: yyyy-MM-dd | [optional]  |
 **status** | **String** | Filter by the status of contracts | [optional] <br />**Values**: Active, Inactive |
 **externalNumber** | **String** | Filter by the unique external number. | [optional]  |

### Return type

**BillingContractListing**


## getBillingContractsInvoiceDocument

> UrlResponse getBillingContractsInvoiceDocument(invoiceId)


GET /api/v2/billing/contracts/invoices/{invoiceId}/document

Get invoice document

Fetch the document for a specific invoice.

getBillingContractsInvoiceDocument is a preview method and is subject to both breaking and non-breaking changes at any time without notice

Requires ANY permissions:

* billing:subscription:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.BillingApi();

let invoiceId = "invoiceId_example"; // String | invoiceId

apiInstance.getBillingContractsInvoiceDocument(invoiceId)
  .then((data) => {
    console.log(`getBillingContractsInvoiceDocument success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getBillingContractsInvoiceDocument');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **invoiceId** | **String** | invoiceId |  |

### Return type

**UrlResponse**


## getBillingContractsInvoiceLines

> BillingInvoiceItemListing getBillingContractsInvoiceLines(invoiceId, opts)


GET /api/v2/billing/contracts/invoices/{invoiceId}/lines

Get invoice lines

Fetch a list of all bills for the specified account.

getBillingContractsInvoiceLines is a preview method and is subject to both breaking and non-breaking changes at any time without notice

Requires ANY permissions:

* billing:subscription:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.BillingApi();

let invoiceId = "invoiceId_example"; // String | invoiceId
let opts = { 
  'before': "before_example", // String | The cursor that points to the start of the set of entities that has been returned.
  'after': "after_example", // String | The cursor that points to the end of the set of entities that has been returned.
  'pageSize': "pageSize_example" // String | Number of entities to return. Maximum of 200.
};

apiInstance.getBillingContractsInvoiceLines(invoiceId, opts)
  .then((data) => {
    console.log(`getBillingContractsInvoiceLines success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getBillingContractsInvoiceLines');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **invoiceId** | **String** | invoiceId |  |
 **before** | **String** | The cursor that points to the start of the set of entities that has been returned. | [optional]  |
 **after** | **String** | The cursor that points to the end of the set of entities that has been returned. | [optional]  |
 **pageSize** | **String** | Number of entities to return. Maximum of 200. | [optional]  |

### Return type

**BillingInvoiceItemListing**


## getBillingContractsInvoices

> BillingInvoiceListing getBillingContractsInvoices(opts)


GET /api/v2/billing/contracts/invoices

Get invoices

Retrieve a list of invoices stored in the system.

getBillingContractsInvoices is a preview method and is subject to both breaking and non-breaking changes at any time without notice

Requires ANY permissions:

* billing:subscription:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.BillingApi();

let opts = { 
  'before': "before_example", // String | The cursor that points to the start of the set of entities that has been returned.
  'after': "after_example", // String | The cursor that points to the end of the set of entities that has been returned.
  'pageSize': "pageSize_example", // String | Number of entities to return. Maximum of 200.
  'dateStart': "dateStart_example", // String | Start date for the query. Dates are represented as an ISO-8601 string. For example: yyyy-MM-dd
  'dateEnd': "dateEnd_example", // String | End date for the query. Dates are represented as an ISO-8601 string. For example: yyyy-MM-dd
  'paymentStatus': "paymentStatus_example" // String | Payment Status
};

apiInstance.getBillingContractsInvoices(opts)
  .then((data) => {
    console.log(`getBillingContractsInvoices success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getBillingContractsInvoices');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **before** | **String** | The cursor that points to the start of the set of entities that has been returned. | [optional]  |
 **after** | **String** | The cursor that points to the end of the set of entities that has been returned. | [optional]  |
 **pageSize** | **String** | Number of entities to return. Maximum of 200. | [optional]  |
 **dateStart** | **String** | Start date for the query. Dates are represented as an ISO-8601 string. For example: yyyy-MM-dd | [optional]  |
 **dateEnd** | **String** | End date for the query. Dates are represented as an ISO-8601 string. For example: yyyy-MM-dd | [optional]  |
 **paymentStatus** | **String** | Payment Status | [optional] <br />**Values**: Paid, UnPaid |

### Return type

**BillingInvoiceListing**


## getBillingReportsBillableusage

> BillingUsageReport getBillingReportsBillableusage(startDate, endDate)


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

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
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

### Return type

**BillingUsageReport**


## getBillingTrusteebillingoverviewTrustorOrgId

> TrusteeBillingOverview getBillingTrusteebillingoverviewTrustorOrgId(trustorOrgId, opts)


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

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
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

### Return type

**TrusteeBillingOverview**


_purecloud-platform-client-v2@229.1.0_
