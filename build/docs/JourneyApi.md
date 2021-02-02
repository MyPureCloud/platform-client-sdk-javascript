---
title: JourneyApi
---
# platformClient.JourneyApi

All URIs are relative to *https://api.mypurecloud.com*

| Method | HTTP request | Description |
| ------------- | ------------- | ------------- |
[**deleteJourneySegment**](JourneyApi.html#deleteJourneySegment) | **DELETE** /api/v2/journey/segments/{segmentId} | Delete a segment.
[**getJourneyActiontarget**](JourneyApi.html#getJourneyActiontarget) | **GET** /api/v2/journey/actiontargets/{actionTargetId} | Retrieve a single action target.
[**getJourneyActiontargets**](JourneyApi.html#getJourneyActiontargets) | **GET** /api/v2/journey/actiontargets | Retrieve all action targets.
[**getJourneySegment**](JourneyApi.html#getJourneySegment) | **GET** /api/v2/journey/segments/{segmentId} | Retrieve a single segment.
[**getJourneySegments**](JourneyApi.html#getJourneySegments) | **GET** /api/v2/journey/segments | Retrieve all segments.
[**patchJourneyActiontarget**](JourneyApi.html#patchJourneyActiontarget) | **PATCH** /api/v2/journey/actiontargets/{actionTargetId} | Update a single action target.
[**patchJourneySegment**](JourneyApi.html#patchJourneySegment) | **PATCH** /api/v2/journey/segments/{segmentId} | Update a segment.
[**postAnalyticsJourneysAggregatesQuery**](JourneyApi.html#postAnalyticsJourneysAggregatesQuery) | **POST** /api/v2/analytics/journeys/aggregates/query | Query for journey aggregates
[**postJourneySegments**](JourneyApi.html#postJourneySegments) | **POST** /api/v2/journey/segments | Create a segment.
{: class="table table-striped"}

<a name="deleteJourneySegment"></a>

# void deleteJourneySegment(segmentId)



DELETE /api/v2/journey/segments/{segmentId}

Delete a segment.



Requires ANY permissions: 

* journey:segment:delete



### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.JourneyApi();

let segmentId = "segmentId_example"; // String | ID of the segment.

apiInstance.deleteJourneySegment(segmentId)
  .then(() => {
    console.log('deleteJourneySegment returned successfully.');
  })
  .catch((err) => {
    console.log('There was a failure calling deleteJourneySegment');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **segmentId** | **String** | ID of the segment. |  |
{: class="table table-striped"}

### Return type

void (no response body)

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

<a name="getJourneySegment"></a>

# JourneySegment getJourneySegment(segmentId)



GET /api/v2/journey/segments/{segmentId}

Retrieve a single segment.



Requires ANY permissions: 

* journey:segment:view



### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.JourneyApi();

let segmentId = "segmentId_example"; // String | ID of the segment.

apiInstance.getJourneySegment(segmentId)
  .then((data) => {
    console.log(`getJourneySegment success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getJourneySegment');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **segmentId** | **String** | ID of the segment. |  |
{: class="table table-striped"}

### Return type

**JourneySegment**

<a name="getJourneySegments"></a>

# SegmentListing getJourneySegments(opts)



GET /api/v2/journey/segments

Retrieve all segments.



Requires ANY permissions: 

* journey:segment:view



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
  'sortBy': "sortBy_example", // String | Field(s) to sort by. The response can be sorted by any first level property on the Outcome response. Prefix with '-' for descending (e.g. sortBy=displayName,-createdDate).
  'pageSize': 25, // Number | Page size
  'pageNumber': 1, // Number | Page number
  'isActive': true, // Boolean | Determines whether or not to show only active segments.
  'segmentIds': ["segmentIds_example"] // [String] | IDs of segments to return. Use of this parameter is not compatible with pagination or sorting. A maximum of 100 segments are allowed per request.
};

apiInstance.getJourneySegments(opts)
  .then((data) => {
    console.log(`getJourneySegments success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getJourneySegments');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **sortBy** | **String** | Field(s) to sort by. The response can be sorted by any first level property on the Outcome response. Prefix with &#39;-&#39; for descending (e.g. sortBy=displayName,-createdDate). | [optional]  |
 **pageSize** | **Number** | Page size | [optional] [default to 25] |
 **pageNumber** | **Number** | Page number | [optional] [default to 1] |
 **isActive** | **Boolean** | Determines whether or not to show only active segments. | [optional]  |
 **segmentIds** | **[String]** | IDs of segments to return. Use of this parameter is not compatible with pagination or sorting. A maximum of 100 segments are allowed per request. | [optional]  |
{: class="table table-striped"}

### Return type

**SegmentListing**

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
  "shortAbandonThreshold": Number, 
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

<a name="patchJourneySegment"></a>

# JourneySegment patchJourneySegment(segmentId, opts)



PATCH /api/v2/journey/segments/{segmentId}

Update a segment.



Requires ANY permissions: 

* journey:segment:edit


### Request Body Schema

<script type="text/javascript">
	function copyPatchSegmentExample() {
		let temp = $("<textarea>");
		$("body").append(temp);
		temp.val($('#PatchSegmentExample').text()).select();
		document.execCommand("copy");
		temp.remove();
		return false;
	}
</script>

PatchSegment <a href="#" onclick="return copyPatchSegmentExample()">Copy</a>

<div id="PatchSegmentExample">

```{"language":"json", "maxHeight": "250px"}
{ 
  "id": String, 
  "isActive": Boolean, 
  "displayName": String, 
  "version": Number, 
  "description": String, 
  "color": String, 
  "shouldDisplayToAgent": Boolean, 
  "context": { 
    "patterns": { 
      "criteria": { 
        "key": String, 
        "values": [String], 
        "shouldIgnoreCase": Boolean, 
        "operator": String, 
        "entityType": String, 
      },  
    },  
  },  
  "journey": { 
    "patterns": { 
      "criteria": { 
        "key": String, 
        "values": [String], 
        "shouldIgnoreCase": Boolean, 
        "operator": String, 
      },  
      "count": Number, 
      "streamType": String, 
      "sessionType": String, 
      "eventName": String, 
    },  
  },  
  "assignmentExpirationDays": Number, 
  "selfUri": String, 
  "createdDate": Date, 
  "modifiedDate": Date, 
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

let segmentId = "segmentId_example"; // String | ID of the segment.
let opts = { 
  'body': {} // Object | 
};

apiInstance.patchJourneySegment(segmentId, opts)
  .then((data) => {
    console.log(`patchJourneySegment success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling patchJourneySegment');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **segmentId** | **String** | ID of the segment. |  |
 **body** | **Object** |  | [optional]  |
{: class="table table-striped"}

### Return type

**JourneySegment**

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

<a name="postJourneySegments"></a>

# JourneySegment postJourneySegments(opts)



POST /api/v2/journey/segments

Create a segment.



Requires ANY permissions: 

* journey:segment:add


### Request Body Schema

<script type="text/javascript">
	function copyJourneySegmentExample() {
		let temp = $("<textarea>");
		$("body").append(temp);
		temp.val($('#JourneySegmentExample').text()).select();
		document.execCommand("copy");
		temp.remove();
		return false;
	}
</script>

JourneySegment <a href="#" onclick="return copyJourneySegmentExample()">Copy</a>

<div id="JourneySegmentExample">

```{"language":"json", "maxHeight": "250px"}
{ 
  "id": String, 
  "isActive": Boolean, 
  "displayName": String, 
  "version": Number, 
  "description": String, 
  "color": String, 
  "scope": String, 
  "shouldDisplayToAgent": Boolean, 
  "context": { 
    "patterns": { 
      "criteria": { 
        "key": String, 
        "values": [String], 
        "shouldIgnoreCase": Boolean, 
        "operator": String, 
        "entityType": String, 
      },  
    },  
  },  
  "journey": { 
    "patterns": { 
      "criteria": { 
        "key": String, 
        "values": [String], 
        "shouldIgnoreCase": Boolean, 
        "operator": String, 
      },  
      "count": Number, 
      "streamType": String, 
      "sessionType": String, 
      "eventName": String, 
    },  
  },  
  "assignmentExpirationDays": Number, 
  "selfUri": String, 
  "createdDate": Date, 
  "modifiedDate": Date, 
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

let opts = { 
  'body': {} // Object | 
};

apiInstance.postJourneySegments(opts)
  .then((data) => {
    console.log(`postJourneySegments success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling postJourneySegments');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **body** | **Object** |  | [optional]  |
{: class="table table-striped"}

### Return type

**JourneySegment**

