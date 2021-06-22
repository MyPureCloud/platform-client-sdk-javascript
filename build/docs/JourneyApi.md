---
title: JourneyApi
---
# platformClient.JourneyApi

All URIs are relative to *https://api.mypurecloud.com*

| Method | HTTP request | Description |
| ------------- | ------------- | ------------- |
[**deleteJourneyActionmap**](JourneyApi.html#deleteJourneyActionmap) | **DELETE** /api/v2/journey/actionmaps/{actionMapId} | Delete single action map.
[**deleteJourneyActiontemplate**](JourneyApi.html#deleteJourneyActiontemplate) | **DELETE** /api/v2/journey/actiontemplates/{actionTemplateId} | Delete a single action template.
[**deleteJourneyOutcome**](JourneyApi.html#deleteJourneyOutcome) | **DELETE** /api/v2/journey/outcomes/{outcomeId} | Delete an outcome.
[**deleteJourneySegment**](JourneyApi.html#deleteJourneySegment) | **DELETE** /api/v2/journey/segments/{segmentId} | Delete a segment.
[**getJourneyActionmap**](JourneyApi.html#getJourneyActionmap) | **GET** /api/v2/journey/actionmaps/{actionMapId} | Retrieve a single action map.
[**getJourneyActionmaps**](JourneyApi.html#getJourneyActionmaps) | **GET** /api/v2/journey/actionmaps | Retrieve all action maps.
[**getJourneyActiontarget**](JourneyApi.html#getJourneyActiontarget) | **GET** /api/v2/journey/actiontargets/{actionTargetId} | Retrieve a single action target.
[**getJourneyActiontargets**](JourneyApi.html#getJourneyActiontargets) | **GET** /api/v2/journey/actiontargets | Retrieve all action targets.
[**getJourneyActiontemplate**](JourneyApi.html#getJourneyActiontemplate) | **GET** /api/v2/journey/actiontemplates/{actionTemplateId} | Retrieve a single action template.
[**getJourneyActiontemplates**](JourneyApi.html#getJourneyActiontemplates) | **GET** /api/v2/journey/actiontemplates | Retrieve all action templates.
[**getJourneyOutcome**](JourneyApi.html#getJourneyOutcome) | **GET** /api/v2/journey/outcomes/{outcomeId} | Retrieve a single outcome.
[**getJourneyOutcomes**](JourneyApi.html#getJourneyOutcomes) | **GET** /api/v2/journey/outcomes | Retrieve all outcomes.
[**getJourneySegment**](JourneyApi.html#getJourneySegment) | **GET** /api/v2/journey/segments/{segmentId} | Retrieve a single segment.
[**getJourneySegments**](JourneyApi.html#getJourneySegments) | **GET** /api/v2/journey/segments | Retrieve all segments.
[**patchJourneyActionmap**](JourneyApi.html#patchJourneyActionmap) | **PATCH** /api/v2/journey/actionmaps/{actionMapId} | Update single action map.
[**patchJourneyActiontarget**](JourneyApi.html#patchJourneyActiontarget) | **PATCH** /api/v2/journey/actiontargets/{actionTargetId} | Update a single action target.
[**patchJourneyActiontemplate**](JourneyApi.html#patchJourneyActiontemplate) | **PATCH** /api/v2/journey/actiontemplates/{actionTemplateId} | Update a single action template.
[**patchJourneyOutcome**](JourneyApi.html#patchJourneyOutcome) | **PATCH** /api/v2/journey/outcomes/{outcomeId} | Update an outcome.
[**patchJourneySegment**](JourneyApi.html#patchJourneySegment) | **PATCH** /api/v2/journey/segments/{segmentId} | Update a segment.
[**postAnalyticsJourneysAggregatesQuery**](JourneyApi.html#postAnalyticsJourneysAggregatesQuery) | **POST** /api/v2/analytics/journeys/aggregates/query | Query for journey aggregates
[**postJourneyActionmaps**](JourneyApi.html#postJourneyActionmaps) | **POST** /api/v2/journey/actionmaps | Create an action map.
[**postJourneyActiontemplates**](JourneyApi.html#postJourneyActiontemplates) | **POST** /api/v2/journey/actiontemplates | Create a single action template.
[**postJourneyOutcomes**](JourneyApi.html#postJourneyOutcomes) | **POST** /api/v2/journey/outcomes | Create an outcome.
[**postJourneySegments**](JourneyApi.html#postJourneySegments) | **POST** /api/v2/journey/segments | Create a segment.
{: class="table table-striped"}

<a name="deleteJourneyActionmap"></a>

# void deleteJourneyActionmap(actionMapId)



DELETE /api/v2/journey/actionmaps/{actionMapId}

Delete single action map.



Requires ANY permissions: 

* journey:actionmap:delete



### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.JourneyApi();

let actionMapId = "actionMapId_example"; // String | ID of the action map.

apiInstance.deleteJourneyActionmap(actionMapId)
  .then(() => {
    console.log('deleteJourneyActionmap returned successfully.');
  })
  .catch((err) => {
    console.log('There was a failure calling deleteJourneyActionmap');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **actionMapId** | **String** | ID of the action map. |  |
{: class="table table-striped"}

### Return type

void (no response body)

<a name="deleteJourneyActiontemplate"></a>

# void deleteJourneyActiontemplate(actionTemplateId, opts)



DELETE /api/v2/journey/actiontemplates/{actionTemplateId}

Delete a single action template.



Requires ANY permissions: 

* journey:actiontemplate:delete



### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.JourneyApi();

let actionTemplateId = "actionTemplateId_example"; // String | ID of the action template.
let opts = { 
  'hardDelete': true // Boolean | Determines whether Action Template should be soft-deleted (have it's state set to deleted) or hard-deleted (permanently removed). Set to false (soft-delete) by default.
};

apiInstance.deleteJourneyActiontemplate(actionTemplateId, opts)
  .then(() => {
    console.log('deleteJourneyActiontemplate returned successfully.');
  })
  .catch((err) => {
    console.log('There was a failure calling deleteJourneyActiontemplate');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **actionTemplateId** | **String** | ID of the action template. |  |
 **hardDelete** | **Boolean** | Determines whether Action Template should be soft-deleted (have it&#39;s state set to deleted) or hard-deleted (permanently removed). Set to false (soft-delete) by default. | [optional]  |
{: class="table table-striped"}

### Return type

void (no response body)

<a name="deleteJourneyOutcome"></a>

# void deleteJourneyOutcome(outcomeId)



DELETE /api/v2/journey/outcomes/{outcomeId}

Delete an outcome.



Requires ANY permissions: 

* journey:outcome:delete



### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.JourneyApi();

let outcomeId = "outcomeId_example"; // String | ID of the outcome.

apiInstance.deleteJourneyOutcome(outcomeId)
  .then(() => {
    console.log('deleteJourneyOutcome returned successfully.');
  })
  .catch((err) => {
    console.log('There was a failure calling deleteJourneyOutcome');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **outcomeId** | **String** | ID of the outcome. |  |
{: class="table table-striped"}

### Return type

void (no response body)

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

<a name="getJourneyActionmap"></a>

# ActionMap getJourneyActionmap(actionMapId)



GET /api/v2/journey/actionmaps/{actionMapId}

Retrieve a single action map.



Requires ANY permissions: 

* journey:actionmap:view



### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.JourneyApi();

let actionMapId = "actionMapId_example"; // String | ID of the action map.

apiInstance.getJourneyActionmap(actionMapId)
  .then((data) => {
    console.log(`getJourneyActionmap success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getJourneyActionmap');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **actionMapId** | **String** | ID of the action map. |  |
{: class="table table-striped"}

### Return type

**ActionMap**

<a name="getJourneyActionmaps"></a>

# ActionMapListing getJourneyActionmaps(opts)



GET /api/v2/journey/actionmaps

Retrieve all action maps.



Requires ANY permissions: 

* journey:actionmap:view



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
  'pageSize': 25, // Number | Page size
  'sortBy': "sortBy_example", // String | Field(s) to sort by. Prefix with '-' for descending (e.g. sortBy=displayName,-createdDate).
  'filterField': "filterField_example", // String | Field to filter by (e.g. filterField=weight or filterField=action.actionTemplate.id). Requires 'filterField' to also be set.
  'filterValue': "filterValue_example", // String | Value to filter by. Requires 'filterValue' to also be set.
  'actionMapIds': ["actionMapIds_example"], // [String] | IDs of action maps to return. Use of this parameter is not compatible with pagination, filtering, sorting or querying. A maximum of 100 action maps are allowed per request.
  'queryFields': ["queryFields_example"], // [String] | Action Map field(s) to query on. Requires 'queryValue' to also be set.
  'queryValue': "queryValue_example" // String | Value to query on. Requires 'queryFields' to also be set.
};

apiInstance.getJourneyActionmaps(opts)
  .then((data) => {
    console.log(`getJourneyActionmaps success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getJourneyActionmaps');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **pageNumber** | **Number** | Page number | [optional] [default to 1] |
 **pageSize** | **Number** | Page size | [optional] [default to 25] |
 **sortBy** | **String** | Field(s) to sort by. Prefix with &#39;-&#39; for descending (e.g. sortBy=displayName,-createdDate). | [optional]  |
 **filterField** | **String** | Field to filter by (e.g. filterField=weight or filterField=action.actionTemplate.id). Requires &#39;filterField&#39; to also be set. | [optional]  |
 **filterValue** | **String** | Value to filter by. Requires &#39;filterValue&#39; to also be set. | [optional]  |
 **actionMapIds** | **[String]** | IDs of action maps to return. Use of this parameter is not compatible with pagination, filtering, sorting or querying. A maximum of 100 action maps are allowed per request. | [optional]  |
 **queryFields** | **[String]** | Action Map field(s) to query on. Requires &#39;queryValue&#39; to also be set. | [optional]  |
 **queryValue** | **String** | Value to query on. Requires &#39;queryFields&#39; to also be set. | [optional]  |
{: class="table table-striped"}

### Return type

**ActionMapListing**

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

<a name="getJourneyActiontemplate"></a>

# ActionTemplate getJourneyActiontemplate(actionTemplateId)



GET /api/v2/journey/actiontemplates/{actionTemplateId}

Retrieve a single action template.



Requires ANY permissions: 

* journey:actiontemplate:view



### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.JourneyApi();

let actionTemplateId = "actionTemplateId_example"; // String | ID of the action template.

apiInstance.getJourneyActiontemplate(actionTemplateId)
  .then((data) => {
    console.log(`getJourneyActiontemplate success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getJourneyActiontemplate');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **actionTemplateId** | **String** | ID of the action template. |  |
{: class="table table-striped"}

### Return type

**ActionTemplate**

<a name="getJourneyActiontemplates"></a>

# ActionTemplateListing getJourneyActiontemplates(opts)



GET /api/v2/journey/actiontemplates

Retrieve all action templates.



Requires ANY permissions: 

* journey:actiontemplate:view



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
  'pageSize': 25, // Number | Page size
  'sortBy': "sortBy_example", // String | Field(s) to sort by. Prefix with '-' for descending (e.g. sortBy=name,-createdDate).
  'mediaType': "mediaType_example", // String | Media type
  'state': "state_example", // String | Action template state.
  'queryFields': ["queryFields_example"], // [String] | ActionTemplate field(s) to query on. Requires 'queryValue' to also be set.
  'queryValue': "queryValue_example" // String | Value to query on. Requires 'queryFields' to also be set.
};

apiInstance.getJourneyActiontemplates(opts)
  .then((data) => {
    console.log(`getJourneyActiontemplates success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getJourneyActiontemplates');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **pageNumber** | **Number** | Page number | [optional] [default to 1] |
 **pageSize** | **Number** | Page size | [optional] [default to 25] |
 **sortBy** | **String** | Field(s) to sort by. Prefix with &#39;-&#39; for descending (e.g. sortBy=name,-createdDate). | [optional]  |
 **mediaType** | **String** | Media type | [optional] <br />**Values**: webchat, webMessagingOffer, contentOffer, integrationAction, architectFlow |
 **state** | **String** | Action template state. | [optional] <br />**Values**: Active, Inactive, Deleted |
 **queryFields** | **[String]** | ActionTemplate field(s) to query on. Requires &#39;queryValue&#39; to also be set. | [optional]  |
 **queryValue** | **String** | Value to query on. Requires &#39;queryFields&#39; to also be set. | [optional]  |
{: class="table table-striped"}

### Return type

**ActionTemplateListing**

<a name="getJourneyOutcome"></a>

# Outcome getJourneyOutcome(outcomeId)



GET /api/v2/journey/outcomes/{outcomeId}

Retrieve a single outcome.



Requires ANY permissions: 

* journey:outcome:view



### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.JourneyApi();

let outcomeId = "outcomeId_example"; // String | ID of the outcome.

apiInstance.getJourneyOutcome(outcomeId)
  .then((data) => {
    console.log(`getJourneyOutcome success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getJourneyOutcome');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **outcomeId** | **String** | ID of the outcome. |  |
{: class="table table-striped"}

### Return type

**Outcome**

<a name="getJourneyOutcomes"></a>

# OutcomeListing getJourneyOutcomes(opts)



GET /api/v2/journey/outcomes

Retrieve all outcomes.



Requires ANY permissions: 

* journey:outcome:view



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
  'pageSize': 25, // Number | Page size
  'sortBy': "sortBy_example", // String | Field(s) to sort by. The response can be sorted by any first level property on the Outcome response. Prefix with '-' for descending (e.g. sortBy=displayName,-createdDate).
  'outcomeIds': ["outcomeIds_example"], // [String] | IDs of outcomes to return. Use of this parameter is not compatible with pagination, sorting or querying. A maximum of 20 outcomes are allowed per request.
  'queryFields': ["queryFields_example"], // [String] | Outcome field(s) to query on. Requires 'queryValue' to also be set.
  'queryValue': "queryValue_example" // String | Value to query on. Requires 'queryFields' to also be set.
};

apiInstance.getJourneyOutcomes(opts)
  .then((data) => {
    console.log(`getJourneyOutcomes success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getJourneyOutcomes');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **pageNumber** | **Number** | Page number | [optional] [default to 1] |
 **pageSize** | **Number** | Page size | [optional] [default to 25] |
 **sortBy** | **String** | Field(s) to sort by. The response can be sorted by any first level property on the Outcome response. Prefix with &#39;-&#39; for descending (e.g. sortBy=displayName,-createdDate). | [optional]  |
 **outcomeIds** | **[String]** | IDs of outcomes to return. Use of this parameter is not compatible with pagination, sorting or querying. A maximum of 20 outcomes are allowed per request. | [optional]  |
 **queryFields** | **[String]** | Outcome field(s) to query on. Requires &#39;queryValue&#39; to also be set. | [optional]  |
 **queryValue** | **String** | Value to query on. Requires &#39;queryFields&#39; to also be set. | [optional]  |
{: class="table table-striped"}

### Return type

**OutcomeListing**

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
  'segmentIds': ["segmentIds_example"], // [String] | IDs of segments to return. Use of this parameter is not compatible with pagination, sorting or querying. A maximum of 100 segments are allowed per request.
  'queryFields': ["queryFields_example"], // [String] | Segment field(s) to query on. Requires 'queryValue' to also be set.
  'queryValue': "queryValue_example" // String | Value to query on. Requires 'queryFields' to also be set.
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
 **segmentIds** | **[String]** | IDs of segments to return. Use of this parameter is not compatible with pagination, sorting or querying. A maximum of 100 segments are allowed per request. | [optional]  |
 **queryFields** | **[String]** | Segment field(s) to query on. Requires &#39;queryValue&#39; to also be set. | [optional]  |
 **queryValue** | **String** | Value to query on. Requires &#39;queryFields&#39; to also be set. | [optional]  |
{: class="table table-striped"}

### Return type

**SegmentListing**

<a name="patchJourneyActionmap"></a>

# ActionMap patchJourneyActionmap(actionMapId, opts)



PATCH /api/v2/journey/actionmaps/{actionMapId}

Update single action map.



Requires ANY permissions: 

* journey:actionmap:edit


### Request Body Schema

<script type="text/javascript">
	function copyPatchActionMapExample() {
		let temp = $("<textarea>");
		$("body").append(temp);
		temp.val($('#PatchActionMapExample').text()).select();
		document.execCommand("copy");
		temp.remove();
		return false;
	}
</script>

PatchActionMap <a href="#" onclick="return copyPatchActionMapExample()">Copy</a>

<div id="PatchActionMapExample">

```{"language":"json", "maxHeight": "250px"}
{ 
  "id": String, 
  "version": Number, 
  "isActive": Boolean, 
  "displayName": String, 
  "triggerWithSegments": [String], 
  "triggerWithEventConditions": { 
    "key": String, 
    "values": [String], 
    "operator": String, 
    "streamType": String, 
    "sessionType": String, 
    "eventName": String, 
  },  
  "triggerWithOutcomeProbabilityConditions": { 
    "outcomeId": String, 
    "maximumProbability": Number, 
    "probability": Number, 
  },  
  "pageUrlConditions": { 
    "values": [String], 
    "operator": String, 
  },  
  "activation": { 
    "type": String, 
    "delayInSeconds": Number, 
  },  
  "weight": Number, 
  "action": { 
    "mediaType": String, 
    "actionTemplate": { 
      "id": String, 
      "selfUri": String, 
    },  
    "architectFlowFields": { 
      "architectFlow": { 
        "id": String, 
        "selfUri": String, 
      },  
      "flowRequestMappings": { 
        "name": String, 
        "attributeType": String, 
        "mappingType": String, 
        "value": String, 
      },  
    },  
    "webMessagingOfferFields": { 
      "offerText": String, 
    },  
  },  
  "actionMapScheduleGroups": { 
    "actionMapScheduleGroup": { 
      "id": String, 
    },  
    "emergencyActionMapScheduleGroup": { 
      "id": String, 
    },  
  },  
  "ignoreFrequencyCap": Boolean, 
  "selfUri": String, 
  "createdDate": Date, 
  "modifiedDate": Date, 
  "startDate": Date, 
  "endDate": Date, 
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

let actionMapId = "actionMapId_example"; // String | ID of the action map.
let opts = { 
  'body': {} // Object | 
};

apiInstance.patchJourneyActionmap(actionMapId, opts)
  .then((data) => {
    console.log(`patchJourneyActionmap success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling patchJourneyActionmap');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **actionMapId** | **String** | ID of the action map. |  |
 **body** | **Object** |  | [optional]  |
{: class="table table-striped"}

### Return type

**ActionMap**

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

<a name="patchJourneyActiontemplate"></a>

# ActionTemplate patchJourneyActiontemplate(actionTemplateId, opts)



PATCH /api/v2/journey/actiontemplates/{actionTemplateId}

Update a single action template.



Requires ANY permissions: 

* journey:actiontemplate:edit


### Request Body Schema

<script type="text/javascript">
	function copyPatchActionTemplateExample() {
		let temp = $("<textarea>");
		$("body").append(temp);
		temp.val($('#PatchActionTemplateExample').text()).select();
		document.execCommand("copy");
		temp.remove();
		return false;
	}
</script>

PatchActionTemplate <a href="#" onclick="return copyPatchActionTemplateExample()">Copy</a>

<div id="PatchActionTemplateExample">

```{"language":"json", "maxHeight": "250px"}
{ 
  "name": String, 
  "description": String, 
  "mediaType": String, 
  "state": String, 
  "contentOffer": { 
    "imageUrl": String, 
    "displayMode": String, 
    "layoutMode": String, 
    "title": String, 
    "headline": String, 
    "body": String, 
    "callToAction": { 
      "text": String, 
      "url": String, 
      "target": String, 
    },  
    "style": { 
      "position": { 
        "top": String, 
        "bottom": String, 
        "left": String, 
        "right": String, 
      },  
      "offer": { 
        "padding": String, 
        "color": String, 
        "backgroundColor": String, 
      },  
      "closeButton": { 
        "color": String, 
        "opacity": Number, 
      },  
      "ctaButton": { 
        "color": String, 
        "font": String, 
        "fontSize": String, 
        "textAlign": String, 
        "backgroundColor": String, 
      },  
      "title": { 
        "color": String, 
        "font": String, 
        "fontSize": String, 
        "textAlign": String, 
      },  
      "headline": { 
        "color": String, 
        "font": String, 
        "fontSize": String, 
        "textAlign": String, 
      },  
      "body": { 
        "color": String, 
        "font": String, 
        "fontSize": String, 
        "textAlign": String, 
      },  
    },  
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

let apiInstance = new platformClient.JourneyApi();

let actionTemplateId = "actionTemplateId_example"; // String | ID of the action template.
let opts = { 
  'body': {} // Object | 
};

apiInstance.patchJourneyActiontemplate(actionTemplateId, opts)
  .then((data) => {
    console.log(`patchJourneyActiontemplate success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling patchJourneyActiontemplate');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **actionTemplateId** | **String** | ID of the action template. |  |
 **body** | **Object** |  | [optional]  |
{: class="table table-striped"}

### Return type

**ActionTemplate**

<a name="patchJourneyOutcome"></a>

# Outcome patchJourneyOutcome(outcomeId, opts)



PATCH /api/v2/journey/outcomes/{outcomeId}

Update an outcome.



Requires ANY permissions: 

* journey:outcome:edit


### Request Body Schema

<script type="text/javascript">
	function copyPatchOutcomeExample() {
		let temp = $("<textarea>");
		$("body").append(temp);
		temp.val($('#PatchOutcomeExample').text()).select();
		document.execCommand("copy");
		temp.remove();
		return false;
	}
</script>

PatchOutcome <a href="#" onclick="return copyPatchOutcomeExample()">Copy</a>

<div id="PatchOutcomeExample">

```{"language":"json", "maxHeight": "250px"}
{ 
  "id": String, 
  "isActive": Boolean, 
  "displayName": String, 
  "version": Number, 
  "description": String, 
  "isPositive": Boolean, 
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

let outcomeId = "outcomeId_example"; // String | ID of the outcome.
let opts = { 
  'body': {} // Object | 
};

apiInstance.patchJourneyOutcome(outcomeId, opts)
  .then((data) => {
    console.log(`patchJourneyOutcome success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling patchJourneyOutcome');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **outcomeId** | **String** | ID of the outcome. |  |
 **body** | **Object** |  | [optional]  |
{: class="table table-striped"}

### Return type

**Outcome**

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
  "externalSegment": { 
    "name": String, 
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

<a name="postJourneyActionmaps"></a>

# ActionMap postJourneyActionmaps(opts)



POST /api/v2/journey/actionmaps

Create an action map.



Requires ANY permissions: 

* journey:actionmap:add


### Request Body Schema

<script type="text/javascript">
	function copyActionMapExample() {
		let temp = $("<textarea>");
		$("body").append(temp);
		temp.val($('#ActionMapExample').text()).select();
		document.execCommand("copy");
		temp.remove();
		return false;
	}
</script>

ActionMap <a href="#" onclick="return copyActionMapExample()">Copy</a>

<div id="ActionMapExample">

```{"language":"json", "maxHeight": "250px"}
{ 
  "id": String, 
  "version": Number, 
  "isActive": Boolean, 
  "displayName": String, 
  "triggerWithSegments": [String], 
  "triggerWithEventConditions": { 
    "key": String, 
    "values": [String], 
    "operator": String, 
    "streamType": String, 
    "sessionType": String, 
    "eventName": String, 
  },  
  "triggerWithOutcomeProbabilityConditions": { 
    "outcomeId": String, 
    "maximumProbability": Number, 
    "probability": Number, 
  },  
  "pageUrlConditions": { 
    "values": [String], 
    "operator": String, 
  },  
  "activation": { 
    "type": String, 
    "delayInSeconds": Number, 
  },  
  "weight": Number, 
  "action": { 
    "actionTemplate": { 
      "id": String, 
      "selfUri": String, 
    },  
    "mediaType": String, 
    "architectFlowFields": { 
      "architectFlow": { 
        "id": String, 
        "selfUri": String, 
      },  
      "flowRequestMappings": { 
        "name": String, 
        "attributeType": String, 
        "mappingType": String, 
        "value": String, 
      },  
    },  
    "webMessagingOfferFields": { 
      "offerText": String, 
    },  
  },  
  "actionMapScheduleGroups": { 
    "actionMapScheduleGroup": { 
      "id": String, 
    },  
    "emergencyActionMapScheduleGroup": { 
      "id": String, 
    },  
  },  
  "ignoreFrequencyCap": Boolean, 
  "selfUri": String, 
  "createdDate": Date, 
  "modifiedDate": Date, 
  "startDate": Date, 
  "endDate": Date, 
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

apiInstance.postJourneyActionmaps(opts)
  .then((data) => {
    console.log(`postJourneyActionmaps success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling postJourneyActionmaps');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **body** | **Object** |  | [optional]  |
{: class="table table-striped"}

### Return type

**ActionMap**

<a name="postJourneyActiontemplates"></a>

# ActionTemplate postJourneyActiontemplates(opts)



POST /api/v2/journey/actiontemplates

Create a single action template.



Requires ANY permissions: 

* journey:actiontemplate:add


### Request Body Schema

<script type="text/javascript">
	function copyActionTemplateExample() {
		let temp = $("<textarea>");
		$("body").append(temp);
		temp.val($('#ActionTemplateExample').text()).select();
		document.execCommand("copy");
		temp.remove();
		return false;
	}
</script>

ActionTemplate <a href="#" onclick="return copyActionTemplateExample()">Copy</a>

<div id="ActionTemplateExample">

```{"language":"json", "maxHeight": "250px"}
{ 
  "id": String, 
  "name": String, 
  "description": String, 
  "mediaType": String, 
  "state": String, 
  "contentOffer": { 
    "imageUrl": String, 
    "displayMode": String, 
    "layoutMode": String, 
    "title": String, 
    "headline": String, 
    "body": String, 
    "callToAction": { 
      "text": String, 
      "url": String, 
      "target": String, 
    },  
    "style": { 
      "position": { 
        "top": String, 
        "bottom": String, 
        "left": String, 
        "right": String, 
      },  
      "offer": { 
        "padding": String, 
        "color": String, 
        "backgroundColor": String, 
      },  
      "closeButton": { 
        "color": String, 
        "opacity": Number, 
      },  
      "ctaButton": { 
        "color": String, 
        "font": String, 
        "fontSize": String, 
        "textAlign": String, 
        "backgroundColor": String, 
      },  
      "title": { 
        "color": String, 
        "font": String, 
        "fontSize": String, 
        "textAlign": String, 
      },  
      "headline": { 
        "color": String, 
        "font": String, 
        "fontSize": String, 
        "textAlign": String, 
      },  
      "body": { 
        "color": String, 
        "font": String, 
        "fontSize": String, 
        "textAlign": String, 
      },  
    },  
  },  
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

apiInstance.postJourneyActiontemplates(opts)
  .then((data) => {
    console.log(`postJourneyActiontemplates success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling postJourneyActiontemplates');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **body** | **Object** |  | [optional]  |
{: class="table table-striped"}

### Return type

**ActionTemplate**

<a name="postJourneyOutcomes"></a>

# Outcome postJourneyOutcomes(opts)



POST /api/v2/journey/outcomes

Create an outcome.



Requires ANY permissions: 

* journey:outcome:add


### Request Body Schema

<script type="text/javascript">
	function copyOutcomeExample() {
		let temp = $("<textarea>");
		$("body").append(temp);
		temp.val($('#OutcomeExample').text()).select();
		document.execCommand("copy");
		temp.remove();
		return false;
	}
</script>

Outcome <a href="#" onclick="return copyOutcomeExample()">Copy</a>

<div id="OutcomeExample">

```{"language":"json", "maxHeight": "250px"}
{ 
  "id": String, 
  "isActive": Boolean, 
  "displayName": String, 
  "version": Number, 
  "description": String, 
  "isPositive": Boolean, 
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

apiInstance.postJourneyOutcomes(opts)
  .then((data) => {
    console.log(`postJourneyOutcomes success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling postJourneyOutcomes');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **body** | **Object** |  | [optional]  |
{: class="table table-striped"}

### Return type

**Outcome**

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
  "externalSegment": { 
    "id": String, 
    "name": String, 
    "source": String, 
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

