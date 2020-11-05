---
title: JourneyApi
---
# platformClient.JourneyApi

All URIs are relative to *https://api.mypurecloud.com*

| Method | HTTP request | Description |
| ------------- | ------------- | ------------- |
[**getJourneyActiontarget**](JourneyApi.html#getJourneyActiontarget) | **GET** /api/v2/journey/actiontargets/{actionTargetId} | Retrieve a single action target.
[**getJourneyActiontargets**](JourneyApi.html#getJourneyActiontargets) | **GET** /api/v2/journey/actiontargets | Retrieve all action targets.
[**getJourneyCustomerCustomerIdSegments**](JourneyApi.html#getJourneyCustomerCustomerIdSegments) | **GET** /api/v2/journey/customers/{customerIdType}/{customerId}/segments | Retrieve segment assignments by customer ID.
[**getJourneyExternalcontactSegments**](JourneyApi.html#getJourneyExternalcontactSegments) | **GET** /api/v2/journey/externalcontacts/{externalContactId}/segments | Retrieve segment assignments by external contact ID.
[**getJourneySessionSegments**](JourneyApi.html#getJourneySessionSegments) | **GET** /api/v2/journey/sessions/{sessionId}/segments | Retrieve segment assignments by session ID.
[**patchJourneyActiontarget**](JourneyApi.html#patchJourneyActiontarget) | **PATCH** /api/v2/journey/actiontargets/{actionTargetId} | Update a single action target.
[**postAnalyticsJourneysAggregatesQuery**](JourneyApi.html#postAnalyticsJourneysAggregatesQuery) | **POST** /api/v2/analytics/journeys/aggregates/query | Query for journey aggregates
[**postJourneyExternalcontactSegments**](JourneyApi.html#postJourneyExternalcontactSegments) | **POST** /api/v2/journey/externalcontacts/{externalContactId}/segments | Assign/Unassign a segment to/from an external contact or, if a segment is already assigned, update the expiry date of the segment assignment.
{: class="table table-striped"}

<a name="getJourneyActiontarget"></a>

# ActionTarget getJourneyActiontarget(actionTargetId)



GET /api/v2/journey/actiontargets/{actionTargetId}

Retrieve a single action target.



Requires ANY permissions: 

* journey:actiontarget:view



### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.JourneyApi();

let actionTargetId = "actionTargetId_example"; // String | ID of the action target.

apiInstance.getJourneyActiontarget(actionTargetId)
  .then((data) => {
    console.log(`getJourneyActiontarget success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getJourneyActiontarget');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **actionTargetId** | **String** | ID of the action target. |  |
{: class="table table-striped"}

### Return type

**ActionTarget**

<a name="getJourneyActiontargets"></a>

# ActionTargetListing getJourneyActiontargets(opts)



GET /api/v2/journey/actiontargets

Retrieve all action targets.



Requires ANY permissions: 

* journey:actiontarget:view



### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.JourneyApi();

let opts = { 
  'pageNumber': 1, // Number | Page number
  'pageSize': 25 // Number | Page size
};

apiInstance.getJourneyActiontargets(opts)
  .then((data) => {
    console.log(`getJourneyActiontargets success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getJourneyActiontargets');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **pageNumber** | **Number** | Page number | [optional] [default to 1] |
 **pageSize** | **Number** | Page size | [optional] [default to 25] |
{: class="table table-striped"}

### Return type

**ActionTargetListing**

<a name="getJourneyCustomerCustomerIdSegments"></a>

# SegmentAssignmentListing getJourneyCustomerCustomerIdSegments(customerIdType, customerId, opts)



GET /api/v2/journey/customers/{customerIdType}/{customerId}/segments

Retrieve segment assignments by customer ID.



Requires ANY permissions: 

* journey:segmentassignment:view



### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.JourneyApi();

let customerIdType = "customerIdType_example"; // String | Type of ID used to identify customer (e.g. email, cookie, and phone).
let customerId = "customerId_example"; // String | Primary identifier of the customer to query for segment assignments.
let opts = { 
  'pageSize': "pageSize_example", // String | Number of entities to return. Maximum of 200.
  'after': "after_example", // String | The cursor that points to the end of the set of entities that has been returned.
  'segmentScope': "segmentScope_example", // String | Scope to filter on. If not specified, both session-scoped and customer-scoped assignments are returned.
  'assignmentState': "assignmentState_example" // String | Assignment state to filter on. If not specified, both assigned and unassigned assignments are returned.
};

apiInstance.getJourneyCustomerCustomerIdSegments(customerIdType, customerId, opts)
  .then((data) => {
    console.log(`getJourneyCustomerCustomerIdSegments success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getJourneyCustomerCustomerIdSegments');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **customerIdType** | **String** | Type of ID used to identify customer (e.g. email, cookie, and phone). |  |
 **customerId** | **String** | Primary identifier of the customer to query for segment assignments. |  |
 **pageSize** | **String** | Number of entities to return. Maximum of 200. | [optional]  |
 **after** | **String** | The cursor that points to the end of the set of entities that has been returned. | [optional]  |
 **segmentScope** | **String** | Scope to filter on. If not specified, both session-scoped and customer-scoped assignments are returned. | [optional] <br />**Values**: Session, Customer |
 **assignmentState** | **String** | Assignment state to filter on. If not specified, both assigned and unassigned assignments are returned. | [optional] <br />**Values**: Assigned, Unassigned |
{: class="table table-striped"}

### Return type

**SegmentAssignmentListing**

<a name="getJourneyExternalcontactSegments"></a>

# SegmentAssignmentListing getJourneyExternalcontactSegments(externalContactId, opts)



GET /api/v2/journey/externalcontacts/{externalContactId}/segments

Retrieve segment assignments by external contact ID.



Requires ANY permissions: 

* journey:segmentassignment:view



### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.JourneyApi();

let externalContactId = "externalContactId_example"; // String | ID of the external contact to query for segment assignments.
let opts = { 
  'pageSize': "pageSize_example", // String | Number of entities to return. Maximum of 200.
  'after': "after_example", // String | The cursor that points to the end of the set of entities that has been returned.
  'segmentScope': "segmentScope_example", // String | Scope to filter on. If not specified, both session-scoped and customer-scoped assignments are returned.
  'assignmentState': "assignmentState_example" // String | Assignment state to filter on. If not specified, both assigned and unassigned assignments are returned.
};

apiInstance.getJourneyExternalcontactSegments(externalContactId, opts)
  .then((data) => {
    console.log(`getJourneyExternalcontactSegments success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getJourneyExternalcontactSegments');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **externalContactId** | **String** | ID of the external contact to query for segment assignments. |  |
 **pageSize** | **String** | Number of entities to return. Maximum of 200. | [optional]  |
 **after** | **String** | The cursor that points to the end of the set of entities that has been returned. | [optional]  |
 **segmentScope** | **String** | Scope to filter on. If not specified, both session-scoped and customer-scoped assignments are returned. | [optional] <br />**Values**: Session, Customer |
 **assignmentState** | **String** | Assignment state to filter on. If not specified, both assigned and unassigned assignments are returned. | [optional] <br />**Values**: Assigned, Unassigned |
{: class="table table-striped"}

### Return type

**SegmentAssignmentListing**

<a name="getJourneySessionSegments"></a>

# SegmentAssignmentListing getJourneySessionSegments(sessionId, opts)



GET /api/v2/journey/sessions/{sessionId}/segments

Retrieve segment assignments by session ID.



Requires ANY permissions: 

* journey:segmentassignment:view



### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.JourneyApi();

let sessionId = "sessionId_example"; // String | ID of the session to query for segment assignments.
let opts = { 
  'pageSize': "pageSize_example", // String | Number of entities to return. Maximum of 200.
  'after': "after_example", // String | The cursor that points to the end of the set of entities that has been returned.
  'segmentScope': "segmentScope_example", // String | Scope to filter on. If not specified, both session-scoped and customer-scoped assignments are returned.
  'assignmentState': "assignmentState_example" // String | Assignment state to filter on. If not specified, both assigned and unassigned assignments are returned.
};

apiInstance.getJourneySessionSegments(sessionId, opts)
  .then((data) => {
    console.log(`getJourneySessionSegments success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getJourneySessionSegments');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **sessionId** | **String** | ID of the session to query for segment assignments. |  |
 **pageSize** | **String** | Number of entities to return. Maximum of 200. | [optional]  |
 **after** | **String** | The cursor that points to the end of the set of entities that has been returned. | [optional]  |
 **segmentScope** | **String** | Scope to filter on. If not specified, both session-scoped and customer-scoped assignments are returned. | [optional] <br />**Values**: Session, Customer |
 **assignmentState** | **String** | Assignment state to filter on. If not specified, both assigned and unassigned assignments are returned. | [optional] <br />**Values**: Assigned, Unassigned |
{: class="table table-striped"}

### Return type

**SegmentAssignmentListing**

<a name="patchJourneyActiontarget"></a>

# ActionTarget patchJourneyActiontarget(actionTargetId, opts)



PATCH /api/v2/journey/actiontargets/{actionTargetId}

Update a single action target.



Requires ANY permissions: 

* journey:actiontarget:edit


### Request Body Schema

<script type="text/javascript">
	function copyPatchActionTargetExample() {
		let temp = $("<textarea>");
		$("body").append(temp);
		temp.val($('#PatchActionTargetExample').text()).select();
		document.execCommand("copy");
		temp.remove();
		return false;
	}
</script>

PatchActionTarget <a href="#" onclick="return copyPatchActionTargetExample()">Copy</a>

<div id="PatchActionTargetExample">

```{"language":"json", "maxHeight": "250px"}
{ 
  "id": String, 
  "name": String, 
  "serviceLevel": { 
    "percentage": Number, 
    "durationMs": Number, 
  },  
  "selfUri": String, 
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

let apiInstance = new platformClient.JourneyApi();

let actionTargetId = "actionTargetId_example"; // String | ID of the action target.
let opts = { 
  'body': {} // Object | 
};

apiInstance.patchJourneyActiontarget(actionTargetId, opts)
  .then((data) => {
    console.log(`patchJourneyActiontarget success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling patchJourneyActiontarget');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **actionTargetId** | **String** | ID of the action target. |  |
 **body** | **Object** |  | [optional]  |
{: class="table table-striped"}

### Return type

**ActionTarget**

<a name="postAnalyticsJourneysAggregatesQuery"></a>

# JourneyAggregateQueryResponse postAnalyticsJourneysAggregatesQuery(body)



POST /api/v2/analytics/journeys/aggregates/query

Query for journey aggregates



Requires ANY permissions: 

* analytics:journeyAggregate:view


### Request Body Schema

<script type="text/javascript">
	function copyJourneyAggregationQueryExample() {
		let temp = $("<textarea>");
		$("body").append(temp);
		temp.val($('#JourneyAggregationQueryExample').text()).select();
		document.execCommand("copy");
		temp.remove();
		return false;
	}
</script>

JourneyAggregationQuery <a href="#" onclick="return copyJourneyAggregationQueryExample()">Copy</a>

<div id="JourneyAggregationQueryExample">

```{"language":"json", "maxHeight": "250px"}
{ 
  "interval": String, 
  "granularity": String, 
  "timeZone": String, 
  "groupBy": [String], 
  "filter": { 
    "type": String, 
    "clauses": { 
      "type": String, 
      "predicates": { 
        "type": String, 
        "dimension": String, 
        "operator": String, 
        "value": String, 
        "range": { 
          "gt": Number, 
          "gte": Number, 
          "lt": Number, 
          "lte": Number, 
        },  
      },  
    },  
    "predicates": { 
      "type": String, 
      "dimension": String, 
      "operator": String, 
      "value": String, 
      "range": { 
        "gt": Number, 
        "gte": Number, 
        "lt": Number, 
        "lte": Number, 
      },  
    },  
  },  
  "metrics": [String], 
  "flattenMultivaluedDimensions": Boolean, 
  "views": { 
    "target": String, 
    "name": String, 
    "function": String, 
    "range": { 
      "gte": Number, 
      "lt": Number, 
    },  
  },  
  "alternateTimeDimension": String, 
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

let apiInstance = new platformClient.JourneyApi();

let body = {}; // Object | query

apiInstance.postAnalyticsJourneysAggregatesQuery(body)
  .then((data) => {
    console.log(`postAnalyticsJourneysAggregatesQuery success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling postAnalyticsJourneysAggregatesQuery');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **body** | **Object** | query |  |
{: class="table table-striped"}

### Return type

**JourneyAggregateQueryResponse**

<a name="postJourneyExternalcontactSegments"></a>

# void postJourneyExternalcontactSegments(externalContactId, opts)



POST /api/v2/journey/externalcontacts/{externalContactId}/segments

Assign/Unassign a segment to/from an external contact or, if a segment is already assigned, update the expiry date of the segment assignment.



Requires ANY permissions: 

* journey:segmentassignment:add
* journey:segmentassignment:delete


### Request Body Schema

<script type="text/javascript">
	function copySegmentAssignmentsUpdateExample() {
		let temp = $("<textarea>");
		$("body").append(temp);
		temp.val($('#SegmentAssignmentsUpdateExample').text()).select();
		document.execCommand("copy");
		temp.remove();
		return false;
	}
</script>

SegmentAssignmentsUpdate <a href="#" onclick="return copySegmentAssignmentsUpdateExample()">Copy</a>

<div id="SegmentAssignmentsUpdateExample">

```{"language":"json", "maxHeight": "250px"}
{ 
  "segmentId": String, 
  "state": String, 
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

let apiInstance = new platformClient.JourneyApi();

let externalContactId = "externalContactId_example"; // String | ID of the external contact to query for segment assignments.
let opts = { 
  'body': [{}] // Object | 
};

apiInstance.postJourneyExternalcontactSegments(externalContactId, opts)
  .then(() => {
    console.log('postJourneyExternalcontactSegments returned successfully.');
  })
  .catch((err) => {
    console.log('There was a failure calling postJourneyExternalcontactSegments');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **externalContactId** | **String** | ID of the external contact to query for segment assignments. |  |
 **body** | **Object** |  | [optional]  |
{: class="table table-striped"}

### Return type

void (no response body)

