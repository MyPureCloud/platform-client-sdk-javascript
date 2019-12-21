---
title: AuditApi
---
# platformClient.AuditApi

All URIs are relative to *https://api.mypurecloud.com*

| Method | HTTP request | Description |
| ------------- | ------------- | ------------- |
[**getAuditsQueryTransactionId**](AuditApi.html#getAuditsQueryTransactionId) | **GET** /api/v2/audits/query/{transactionId} | Get status of audit query execution
[**getAuditsQueryTransactionIdResults**](AuditApi.html#getAuditsQueryTransactionIdResults) | **GET** /api/v2/audits/query/{transactionId}/results | Get results of audit query
[**postAuditsQuery**](AuditApi.html#postAuditsQuery) | **POST** /api/v2/audits/query | Create audit query execution
{: class="table table-striped"}

<a name="getAuditsQueryTransactionId"></a>

# AuditQueryExecutionStatusResponse getAuditsQueryTransactionId(transactionId)



GET /api/v2/audits/query/{transactionId}

Get status of audit query execution



Requires ANY permissions: 

* audits:audit:view



### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.AuditApi();

let transactionId = "transactionId_example"; // String | Transaction ID

apiInstance.getAuditsQueryTransactionId(transactionId)
  .then((data) => {
    console.log(`getAuditsQueryTransactionId success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getAuditsQueryTransactionId');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **transactionId** | **String** | Transaction ID |  |
{: class="table table-striped"}

### Return type

**AuditQueryExecutionStatusResponse**

<a name="getAuditsQueryTransactionIdResults"></a>

# AuditQueryExecutionResultsResponse getAuditsQueryTransactionIdResults(transactionId, opts)



GET /api/v2/audits/query/{transactionId}/results

Get results of audit query



Requires ANY permissions: 

* audits:audit:view



### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.AuditApi();

let transactionId = "transactionId_example"; // String | Transaction ID
let opts = { 
  'cursor': "cursor_example", // String | Indicates where to resume query results (not required for first page)
  'pageSize': 25 // Number | Page size
};

apiInstance.getAuditsQueryTransactionIdResults(transactionId, opts)
  .then((data) => {
    console.log(`getAuditsQueryTransactionIdResults success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getAuditsQueryTransactionIdResults');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **transactionId** | **String** | Transaction ID |  |
 **cursor** | **String** | Indicates where to resume query results (not required for first page) | [optional]  |
 **pageSize** | **Number** | Page size | [optional] [default to 25] |
{: class="table table-striped"}

### Return type

**AuditQueryExecutionResultsResponse**

<a name="postAuditsQuery"></a>

# AuditQueryExecutionStatusResponse postAuditsQuery(body)



POST /api/v2/audits/query

Create audit query execution



Requires ANY permissions: 

* audits:audit:view


### Request Body Schema

<script type="text/javascript">
	function copyAuditQueryRequestExample() {
		let temp = $("<textarea>");
		$("body").append(temp);
		temp.val($('#AuditQueryRequestExample').text()).select();
		document.execCommand("copy");
		temp.remove();
		return false;
	}
</script>

AuditQueryRequest <a href="#" onclick="return copyAuditQueryRequestExample()">Copy</a>

<div id="AuditQueryRequestExample">

```{"language":"json", "maxHeight": "250px"}
{ 
  "interval": String, 
  "serviceName": String, 
  "filters": { 
    "property": String, 
    "value": String, 
  },  
}
```

</div>


### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.AuditApi();

let body = {}; // Object | query

apiInstance.postAuditsQuery(body)
  .then((data) => {
    console.log(`postAuditsQuery success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling postAuditsQuery');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **body** | **Object** | query |  |
{: class="table table-striped"}

### Return type

**AuditQueryExecutionStatusResponse**

