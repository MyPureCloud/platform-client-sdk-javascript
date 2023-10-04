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
[**deleteJourneyOutcomesPredictor**](JourneyApi.html#deleteJourneyOutcomesPredictor) | **DELETE** /api/v2/journey/outcomes/predictors/{predictorId} | Delete an outcome predictor.
[**deleteJourneySegment**](JourneyApi.html#deleteJourneySegment) | **DELETE** /api/v2/journey/segments/{segmentId} | Delete a segment.
[**getAnalyticsJourneysAggregatesJob**](JourneyApi.html#getAnalyticsJourneysAggregatesJob) | **GET** /api/v2/analytics/journeys/aggregates/jobs/{jobId} | Get status for async query for journey aggregates
[**getAnalyticsJourneysAggregatesJobResults**](JourneyApi.html#getAnalyticsJourneysAggregatesJobResults) | **GET** /api/v2/analytics/journeys/aggregates/jobs/{jobId}/results | Fetch a page of results for an async aggregates query
[**getExternalcontactsContactJourneySessions**](JourneyApi.html#getExternalcontactsContactJourneySessions) | **GET** /api/v2/externalcontacts/contacts/{contactId}/journey/sessions | Retrieve all sessions for a given external contact.
[**getJourneyActionmap**](JourneyApi.html#getJourneyActionmap) | **GET** /api/v2/journey/actionmaps/{actionMapId} | Retrieve a single action map.
[**getJourneyActionmaps**](JourneyApi.html#getJourneyActionmaps) | **GET** /api/v2/journey/actionmaps | Retrieve all action maps.
[**getJourneyActionmapsEstimatesJob**](JourneyApi.html#getJourneyActionmapsEstimatesJob) | **GET** /api/v2/journey/actionmaps/estimates/jobs/{jobId} | Get status of job.
[**getJourneyActionmapsEstimatesJobResults**](JourneyApi.html#getJourneyActionmapsEstimatesJobResults) | **GET** /api/v2/journey/actionmaps/estimates/jobs/{jobId}/results | Get estimates from completed job.
[**getJourneyActiontarget**](JourneyApi.html#getJourneyActiontarget) | **GET** /api/v2/journey/actiontargets/{actionTargetId} | Retrieve a single action target.
[**getJourneyActiontargets**](JourneyApi.html#getJourneyActiontargets) | **GET** /api/v2/journey/actiontargets | Retrieve all action targets.
[**getJourneyActiontemplate**](JourneyApi.html#getJourneyActiontemplate) | **GET** /api/v2/journey/actiontemplates/{actionTemplateId} | Retrieve a single action template.
[**getJourneyActiontemplates**](JourneyApi.html#getJourneyActiontemplates) | **GET** /api/v2/journey/actiontemplates | Retrieve all action templates.
[**getJourneyOutcome**](JourneyApi.html#getJourneyOutcome) | **GET** /api/v2/journey/outcomes/{outcomeId} | Retrieve a single outcome.
[**getJourneyOutcomes**](JourneyApi.html#getJourneyOutcomes) | **GET** /api/v2/journey/outcomes | Retrieve all outcomes.
[**getJourneyOutcomesAttributionsJob**](JourneyApi.html#getJourneyOutcomesAttributionsJob) | **GET** /api/v2/journey/outcomes/attributions/jobs/{jobId} | Get job status.
[**getJourneyOutcomesAttributionsJobResults**](JourneyApi.html#getJourneyOutcomesAttributionsJobResults) | **GET** /api/v2/journey/outcomes/attributions/jobs/{jobId}/results | Get outcome attribution entities from completed job.
[**getJourneyOutcomesPredictor**](JourneyApi.html#getJourneyOutcomesPredictor) | **GET** /api/v2/journey/outcomes/predictors/{predictorId} | Retrieve a single outcome predictor.
[**getJourneyOutcomesPredictors**](JourneyApi.html#getJourneyOutcomesPredictors) | **GET** /api/v2/journey/outcomes/predictors | Retrieve all outcome predictors.
[**getJourneySegment**](JourneyApi.html#getJourneySegment) | **GET** /api/v2/journey/segments/{segmentId} | Retrieve a single segment.
[**getJourneySegments**](JourneyApi.html#getJourneySegments) | **GET** /api/v2/journey/segments | Retrieve all segments.
[**getJourneySession**](JourneyApi.html#getJourneySession) | **GET** /api/v2/journey/sessions/{sessionId} | Retrieve a single session.
[**getJourneySessionEvents**](JourneyApi.html#getJourneySessionEvents) | **GET** /api/v2/journey/sessions/{sessionId}/events | Retrieve all events for a given session.
[**getJourneySessionOutcomescores**](JourneyApi.html#getJourneySessionOutcomescores) | **GET** /api/v2/journey/sessions/{sessionId}/outcomescores | Retrieve latest outcome score associated with a session for all outcomes.
[**getJourneySessionSegments**](JourneyApi.html#getJourneySessionSegments) | **GET** /api/v2/journey/sessions/{sessionId}/segments | Retrieve segment assignments by session ID.
[**patchJourneyActionmap**](JourneyApi.html#patchJourneyActionmap) | **PATCH** /api/v2/journey/actionmaps/{actionMapId} | Update single action map.
[**patchJourneyActiontarget**](JourneyApi.html#patchJourneyActiontarget) | **PATCH** /api/v2/journey/actiontargets/{actionTargetId} | Update a single action target.
[**patchJourneyActiontemplate**](JourneyApi.html#patchJourneyActiontemplate) | **PATCH** /api/v2/journey/actiontemplates/{actionTemplateId} | Update a single action template.
[**patchJourneyOutcome**](JourneyApi.html#patchJourneyOutcome) | **PATCH** /api/v2/journey/outcomes/{outcomeId} | Update an outcome.
[**patchJourneySegment**](JourneyApi.html#patchJourneySegment) | **PATCH** /api/v2/journey/segments/{segmentId} | Update a segment.
[**postAnalyticsJourneysAggregatesJobs**](JourneyApi.html#postAnalyticsJourneysAggregatesJobs) | **POST** /api/v2/analytics/journeys/aggregates/jobs | Query for journey aggregates asynchronously
[**postAnalyticsJourneysAggregatesQuery**](JourneyApi.html#postAnalyticsJourneysAggregatesQuery) | **POST** /api/v2/analytics/journeys/aggregates/query | Query for journey aggregates
[**postJourneyActionmaps**](JourneyApi.html#postJourneyActionmaps) | **POST** /api/v2/journey/actionmaps | Create an action map.
[**postJourneyActionmapsEstimatesJobs**](JourneyApi.html#postJourneyActionmapsEstimatesJobs) | **POST** /api/v2/journey/actionmaps/estimates/jobs | Query for estimates
[**postJourneyActiontemplates**](JourneyApi.html#postJourneyActiontemplates) | **POST** /api/v2/journey/actiontemplates | Create a single action template.
[**postJourneyDeploymentAppevents**](JourneyApi.html#postJourneyDeploymentAppevents) | **POST** /api/v2/journey/deployments/{deploymentId}/appevents | Send a journey app event, used for tracking customer activity on an application.
[**postJourneyOutcomes**](JourneyApi.html#postJourneyOutcomes) | **POST** /api/v2/journey/outcomes | Create an outcome.
[**postJourneyOutcomesAttributionsJobs**](JourneyApi.html#postJourneyOutcomesAttributionsJobs) | **POST** /api/v2/journey/outcomes/attributions/jobs | Create Outcome Attributions
[**postJourneyOutcomesPredictors**](JourneyApi.html#postJourneyOutcomesPredictors) | **POST** /api/v2/journey/outcomes/predictors | Create an outcome predictor.
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
 **hardDelete** | **Boolean** | Determines whether Action Template should be soft-deleted (have it's state set to deleted) or hard-deleted (permanently removed). Set to false (soft-delete) by default. | [optional]  |
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

<a name="deleteJourneyOutcomesPredictor"></a>

# void deleteJourneyOutcomesPredictor(predictorId)


DELETE /api/v2/journey/outcomes/predictors/{predictorId}

Delete an outcome predictor.

Requires ANY permissions:

* journey:outcomepredictor:delete

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.JourneyApi();

let predictorId = "predictorId_example"; // String | ID of predictor

apiInstance.deleteJourneyOutcomesPredictor(predictorId)
  .then(() => {
    console.log('deleteJourneyOutcomesPredictor returned successfully.');
  })
  .catch((err) => {
    console.log('There was a failure calling deleteJourneyOutcomesPredictor');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **predictorId** | **String** | ID of predictor |  |
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

<a name="getAnalyticsJourneysAggregatesJob"></a>

# AsyncQueryStatus getAnalyticsJourneysAggregatesJob(jobId)


GET /api/v2/analytics/journeys/aggregates/jobs/{jobId}

Get status for async query for journey aggregates

getAnalyticsJourneysAggregatesJob is a preview method and is subject to both breaking and non-breaking changes at any time without notice

Requires ANY permissions:

* analytics:journeyAggregate:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.JourneyApi();

let jobId = "jobId_example"; // String | jobId

apiInstance.getAnalyticsJourneysAggregatesJob(jobId)
  .then((data) => {
    console.log(`getAnalyticsJourneysAggregatesJob success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getAnalyticsJourneysAggregatesJob');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **jobId** | **String** | jobId |  |
{: class="table table-striped"}

### Return type

**AsyncQueryStatus**

<a name="getAnalyticsJourneysAggregatesJobResults"></a>

# JourneyAsyncAggregateQueryResponse getAnalyticsJourneysAggregatesJobResults(jobId, opts)


GET /api/v2/analytics/journeys/aggregates/jobs/{jobId}/results

Fetch a page of results for an async aggregates query

getAnalyticsJourneysAggregatesJobResults is a preview method and is subject to both breaking and non-breaking changes at any time without notice

Requires ANY permissions:

* analytics:journeyAggregate:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.JourneyApi();

let jobId = "jobId_example"; // String | jobId
let opts = { 
  'cursor': "cursor_example" // String | Cursor token to retrieve next page
};

apiInstance.getAnalyticsJourneysAggregatesJobResults(jobId, opts)
  .then((data) => {
    console.log(`getAnalyticsJourneysAggregatesJobResults success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getAnalyticsJourneysAggregatesJobResults');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **jobId** | **String** | jobId |  |
 **cursor** | **String** | Cursor token to retrieve next page | [optional]  |
{: class="table table-striped"}

### Return type

**JourneyAsyncAggregateQueryResponse**

<a name="getExternalcontactsContactJourneySessions"></a>

# SessionListing getExternalcontactsContactJourneySessions(contactId, opts)


GET /api/v2/externalcontacts/contacts/{contactId}/journey/sessions

Retrieve all sessions for a given external contact.

Requires ANY permissions:

* externalContacts:session:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.JourneyApi();

let contactId = "contactId_example"; // String | ExternalContact ID
let opts = { 
  'pageSize': "pageSize_example", // String | Number of entities to return. Maximum of 200.
  'after': "after_example", // String | The cursor that points to the end of the set of entities that has been returned.
  'includeMerged': true // Boolean | Indicates whether to return sessions from all external contacts in the merge-set of the given one.
};

apiInstance.getExternalcontactsContactJourneySessions(contactId, opts)
  .then((data) => {
    console.log(`getExternalcontactsContactJourneySessions success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getExternalcontactsContactJourneySessions');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **contactId** | **String** | ExternalContact ID |  |
 **pageSize** | **String** | Number of entities to return. Maximum of 200. | [optional]  |
 **after** | **String** | The cursor that points to the end of the set of entities that has been returned. | [optional]  |
 **includeMerged** | **Boolean** | Indicates whether to return sessions from all external contacts in the merge-set of the given one. | [optional]  |
{: class="table table-striped"}

### Return type

**SessionListing**

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
 **sortBy** | **String** | Field(s) to sort by. Prefix with '-' for descending (e.g. sortBy=displayName,-createdDate). | [optional]  |
 **filterField** | **String** | Field to filter by (e.g. filterField=weight or filterField=action.actionTemplate.id). Requires 'filterField' to also be set. | [optional]  |
 **filterValue** | **String** | Value to filter by. Requires 'filterValue' to also be set. | [optional]  |
 **actionMapIds** | **[String]** | IDs of action maps to return. Use of this parameter is not compatible with pagination, filtering, sorting or querying. A maximum of 100 action maps are allowed per request. | [optional]  |
 **queryFields** | **[String]** | Action Map field(s) to query on. Requires 'queryValue' to also be set. | [optional]  |
 **queryValue** | **String** | Value to query on. Requires 'queryFields' to also be set. | [optional]  |
{: class="table table-striped"}

### Return type

**ActionMapListing**

<a name="getJourneyActionmapsEstimatesJob"></a>

# **&#39;String&#39;** getJourneyActionmapsEstimatesJob(jobId)


GET /api/v2/journey/actionmaps/estimates/jobs/{jobId}

Get status of job.

Requires ALL permissions:

* journey:actionmapEstimateJob:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.JourneyApi();

let jobId = "jobId_example"; // String | ID of the job.

apiInstance.getJourneyActionmapsEstimatesJob(jobId)
  .then((data) => {
    console.log(`getJourneyActionmapsEstimatesJob success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getJourneyActionmapsEstimatesJob');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **jobId** | **String** | ID of the job. |  |
{: class="table table-striped"}

### Return type

**&#39;String&#39;**

<a name="getJourneyActionmapsEstimatesJobResults"></a>

# ActionMapEstimateResult getJourneyActionmapsEstimatesJobResults(jobId)


GET /api/v2/journey/actionmaps/estimates/jobs/{jobId}/results

Get estimates from completed job.

Requires ALL permissions:

* journey:actionmapEstimate:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.JourneyApi();

let jobId = "jobId_example"; // String | ID of the job.

apiInstance.getJourneyActionmapsEstimatesJobResults(jobId)
  .then((data) => {
    console.log(`getJourneyActionmapsEstimatesJobResults success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getJourneyActionmapsEstimatesJobResults');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **jobId** | **String** | ID of the job. |  |
{: class="table table-striped"}

### Return type

**ActionMapEstimateResult**

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
 **sortBy** | **String** | Field(s) to sort by. Prefix with '-' for descending (e.g. sortBy=name,-createdDate). | [optional]  |
 **mediaType** | **String** | Media type | [optional] <br />**Values**: webchat, webMessagingOffer, contentOffer, integrationAction, architectFlow, openAction |
 **state** | **String** | Action template state. | [optional] <br />**Values**: Active, Inactive, Deleted |
 **queryFields** | **[String]** | ActionTemplate field(s) to query on. Requires 'queryValue' to also be set. | [optional]  |
 **queryValue** | **String** | Value to query on. Requires 'queryFields' to also be set. | [optional]  |
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
 **sortBy** | **String** | Field(s) to sort by. The response can be sorted by any first level property on the Outcome response. Prefix with '-' for descending (e.g. sortBy=displayName,-createdDate). | [optional]  |
 **outcomeIds** | **[String]** | IDs of outcomes to return. Use of this parameter is not compatible with pagination, sorting or querying. A maximum of 20 outcomes are allowed per request. | [optional]  |
 **queryFields** | **[String]** | Outcome field(s) to query on. Requires 'queryValue' to also be set. | [optional]  |
 **queryValue** | **String** | Value to query on. Requires 'queryFields' to also be set. | [optional]  |
{: class="table table-striped"}

### Return type

**OutcomeListing**

<a name="getJourneyOutcomesAttributionsJob"></a>

# OutcomeAttributionJobStateResponse getJourneyOutcomesAttributionsJob(jobId)


GET /api/v2/journey/outcomes/attributions/jobs/{jobId}

Get job status.

getJourneyOutcomesAttributionsJob is a preview method and is subject to both breaking and non-breaking changes at any time without notice

Requires ALL permissions:

* journey:outcomeAttributionJob:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.JourneyApi();

let jobId = "jobId_example"; // String | ID of the job.

apiInstance.getJourneyOutcomesAttributionsJob(jobId)
  .then((data) => {
    console.log(`getJourneyOutcomesAttributionsJob success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getJourneyOutcomesAttributionsJob');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **jobId** | **String** | ID of the job. |  |
{: class="table table-striped"}

### Return type

**OutcomeAttributionJobStateResponse**

<a name="getJourneyOutcomesAttributionsJobResults"></a>

# OutcomeAttributionResponseListing getJourneyOutcomesAttributionsJobResults(jobId)


GET /api/v2/journey/outcomes/attributions/jobs/{jobId}/results

Get outcome attribution entities from completed job.

getJourneyOutcomesAttributionsJobResults is a preview method and is subject to both breaking and non-breaking changes at any time without notice

Requires ALL permissions:

* journey:outcomeAttribution:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.JourneyApi();

let jobId = "jobId_example"; // String | ID of the job.

apiInstance.getJourneyOutcomesAttributionsJobResults(jobId)
  .then((data) => {
    console.log(`getJourneyOutcomesAttributionsJobResults success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getJourneyOutcomesAttributionsJobResults');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **jobId** | **String** | ID of the job. |  |
{: class="table table-striped"}

### Return type

**OutcomeAttributionResponseListing**

<a name="getJourneyOutcomesPredictor"></a>

# OutcomePredictor getJourneyOutcomesPredictor(predictorId)


GET /api/v2/journey/outcomes/predictors/{predictorId}

Retrieve a single outcome predictor.

Requires ANY permissions:

* journey:outcomepredictor:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.JourneyApi();

let predictorId = "predictorId_example"; // String | ID of predictor

apiInstance.getJourneyOutcomesPredictor(predictorId)
  .then((data) => {
    console.log(`getJourneyOutcomesPredictor success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getJourneyOutcomesPredictor');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **predictorId** | **String** | ID of predictor |  |
{: class="table table-striped"}

### Return type

**OutcomePredictor**

<a name="getJourneyOutcomesPredictors"></a>

# OutcomePredictorListing getJourneyOutcomesPredictors()


GET /api/v2/journey/outcomes/predictors

Retrieve all outcome predictors.

Requires ANY permissions:

* journey:outcomepredictor:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.JourneyApi();

apiInstance.getJourneyOutcomesPredictors()
  .then((data) => {
    console.log(`getJourneyOutcomesPredictors success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getJourneyOutcomesPredictors');
    console.error(err);
  });
```

### Parameters

This endpoint does not need any parameter.


### Return type

**OutcomePredictorListing**

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
 **sortBy** | **String** | Field(s) to sort by. The response can be sorted by any first level property on the Outcome response. Prefix with '-' for descending (e.g. sortBy=displayName,-createdDate). | [optional]  |
 **pageSize** | **Number** | Page size | [optional] [default to 25] |
 **pageNumber** | **Number** | Page number | [optional] [default to 1] |
 **isActive** | **Boolean** | Determines whether or not to show only active segments. | [optional]  |
 **segmentIds** | **[String]** | IDs of segments to return. Use of this parameter is not compatible with pagination, sorting or querying. A maximum of 100 segments are allowed per request. | [optional]  |
 **queryFields** | **[String]** | Segment field(s) to query on. Requires 'queryValue' to also be set. | [optional]  |
 **queryValue** | **String** | Value to query on. Requires 'queryFields' to also be set. | [optional]  |
{: class="table table-striped"}

### Return type

**SegmentListing**

<a name="getJourneySession"></a>

# Session getJourneySession(sessionId)


GET /api/v2/journey/sessions/{sessionId}

Retrieve a single session.

Requires ANY permissions:

* journey:session:view
* externalContacts:session:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.JourneyApi();

let sessionId = "sessionId_example"; // String | ID of the session.

apiInstance.getJourneySession(sessionId)
  .then((data) => {
    console.log(`getJourneySession success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getJourneySession');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **sessionId** | **String** | ID of the session. |  |
{: class="table table-striped"}

### Return type

**Session**

<a name="getJourneySessionEvents"></a>

# EventListing getJourneySessionEvents(sessionId, opts)


GET /api/v2/journey/sessions/{sessionId}/events

Retrieve all events for a given session.

getJourneySessionEvents is a preview method and is subject to both breaking and non-breaking changes at any time without notice

Requires ANY permissions:

* journey:event:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.JourneyApi();

let sessionId = "sessionId_example"; // String | System-generated UUID that represents the session the event is a part of.
let opts = { 
  'pageSize': "pageSize_example", // String | Number of entities to return. Maximum of 200.
  'after': "after_example" // String | The cursor that points to the end of the set of entities that has been returned.
};

apiInstance.getJourneySessionEvents(sessionId, opts)
  .then((data) => {
    console.log(`getJourneySessionEvents success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getJourneySessionEvents');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **sessionId** | **String** | System-generated UUID that represents the session the event is a part of. |  |
 **pageSize** | **String** | Number of entities to return. Maximum of 200. | [optional]  |
 **after** | **String** | The cursor that points to the end of the set of entities that has been returned. | [optional]  |
{: class="table table-striped"}

### Return type

**EventListing**

<a name="getJourneySessionOutcomescores"></a>

# OutcomeScoresResult getJourneySessionOutcomescores(sessionId)


GET /api/v2/journey/sessions/{sessionId}/outcomescores

Retrieve latest outcome score associated with a session for all outcomes.

Requires ANY permissions:

* journey:outcomescores:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.JourneyApi();

let sessionId = "sessionId_example"; // String | ID of the session.

apiInstance.getJourneySessionOutcomescores(sessionId)
  .then((data) => {
    console.log(`getJourneySessionOutcomescores success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getJourneySessionOutcomescores');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **sessionId** | **String** | ID of the session. |  |
{: class="table table-striped"}

### Return type

**OutcomeScoresResult**

<a name="getJourneySessionSegments"></a>

# SegmentAssignmentListing getJourneySessionSegments(sessionId, opts)


GET /api/v2/journey/sessions/{sessionId}/segments

Retrieve segment assignments by session ID.

getJourneySessionSegments is a preview method and is subject to both breaking and non-breaking changes at any time without notice

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

<a name="patchJourneyActionmap"></a>

# ActionMap patchJourneyActionmap(actionMapId, opts)


PATCH /api/v2/journey/actionmaps/{actionMapId}

Update single action map.

Requires ANY permissions:

* journey:actionmap:edit

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

<a name="postAnalyticsJourneysAggregatesJobs"></a>

# AsyncQueryResponse postAnalyticsJourneysAggregatesJobs(body)


POST /api/v2/analytics/journeys/aggregates/jobs

Query for journey aggregates asynchronously

postAnalyticsJourneysAggregatesJobs is a preview method and is subject to both breaking and non-breaking changes at any time without notice

Requires ANY permissions:

* analytics:journeyAggregate:view

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

apiInstance.postAnalyticsJourneysAggregatesJobs(body)
  .then((data) => {
    console.log(`postAnalyticsJourneysAggregatesJobs success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling postAnalyticsJourneysAggregatesJobs');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **body** | **Object** | query |  |
{: class="table table-striped"}

### Return type

**AsyncQueryResponse**

<a name="postAnalyticsJourneysAggregatesQuery"></a>

# JourneyAggregateQueryResponse postAnalyticsJourneysAggregatesQuery(body)


POST /api/v2/analytics/journeys/aggregates/query

Query for journey aggregates

Requires ANY permissions:

* analytics:journeyAggregate:view

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

<a name="postJourneyActionmapsEstimatesJobs"></a>

# EstimateJobAsyncResponse postJourneyActionmapsEstimatesJobs(body)


POST /api/v2/journey/actionmaps/estimates/jobs

Query for estimates

Requires ANY permissions:

* journey:actionmapEstimateJob:add

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.JourneyApi();

let body = {}; // Object | audience estimator request

apiInstance.postJourneyActionmapsEstimatesJobs(body)
  .then((data) => {
    console.log(`postJourneyActionmapsEstimatesJobs success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling postJourneyActionmapsEstimatesJobs');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **body** | **Object** | audience estimator request |  |
{: class="table table-striped"}

### Return type

**EstimateJobAsyncResponse**

<a name="postJourneyActiontemplates"></a>

# ActionTemplate postJourneyActiontemplates(opts)


POST /api/v2/journey/actiontemplates

Create a single action template.

Requires ANY permissions:

* journey:actiontemplate:add

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

<a name="postJourneyDeploymentAppevents"></a>

# AppEventResponse postJourneyDeploymentAppevents(deploymentId, opts)


POST /api/v2/journey/deployments/{deploymentId}/appevents

Send a journey app event, used for tracking customer activity on an application.

postJourneyDeploymentAppevents is a preview method and is subject to both breaking and non-breaking changes at any time without notice

Requires NO permissions:

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

let apiInstance = new platformClient.JourneyApi();

let deploymentId = "deploymentId_example"; // String | The ID of the deployment sending the app event.
let opts = { 
  'body': {} // Object | 
};

apiInstance.postJourneyDeploymentAppevents(deploymentId, opts)
  .then((data) => {
    console.log(`postJourneyDeploymentAppevents success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling postJourneyDeploymentAppevents');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **deploymentId** | **String** | The ID of the deployment sending the app event. |  |
 **body** | **Object** |  | [optional]  |
{: class="table table-striped"}

### Return type

**AppEventResponse**

<a name="postJourneyOutcomes"></a>

# Outcome postJourneyOutcomes(opts)


POST /api/v2/journey/outcomes

Create an outcome.

Requires ANY permissions:

* journey:outcome:add

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

<a name="postJourneyOutcomesAttributionsJobs"></a>

# OutcomeAttributionAsyncResponse postJourneyOutcomesAttributionsJobs(opts)


POST /api/v2/journey/outcomes/attributions/jobs

Create Outcome Attributions

postJourneyOutcomesAttributionsJobs is a preview method and is subject to both breaking and non-breaking changes at any time without notice

Requires ANY permissions:

* journey:outcomeAttributionJob:add

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
  'body': {} // Object | outcome attribution request
};

apiInstance.postJourneyOutcomesAttributionsJobs(opts)
  .then((data) => {
    console.log(`postJourneyOutcomesAttributionsJobs success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling postJourneyOutcomesAttributionsJobs');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **body** | **Object** | outcome attribution request | [optional]  |
{: class="table table-striped"}

### Return type

**OutcomeAttributionAsyncResponse**

<a name="postJourneyOutcomesPredictors"></a>

# OutcomePredictor postJourneyOutcomesPredictors(opts)


POST /api/v2/journey/outcomes/predictors

Create an outcome predictor.

Requires ANY permissions:

* journey:outcomepredictor:add

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

apiInstance.postJourneyOutcomesPredictors(opts)
  .then((data) => {
    console.log(`postJourneyOutcomesPredictors success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling postJourneyOutcomesPredictors');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **body** | **Object** |  | [optional]  |
{: class="table table-striped"}

### Return type

**OutcomePredictor**

<a name="postJourneySegments"></a>

# JourneySegment postJourneySegments(opts)


POST /api/v2/journey/segments

Create a segment.

Requires ANY permissions:

* journey:segment:add

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

