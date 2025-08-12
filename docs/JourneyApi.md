# JourneyApi

# platformClient.JourneyApi

All URIs are relative to *https://api.mypurecloud.com*

| Method | HTTP request | Description |
| ------------- | ------------- | ------------- |
[**deleteAnalyticsJourneysAggregatesJob**](JourneyApi#deleteAnalyticsJourneysAggregatesJob) | **DELETE** /api/v2/analytics/journeys/aggregates/jobs/{jobId} | Delete/cancel an async request for journey aggregates
[**deleteJourneyActionmap**](JourneyApi#deleteJourneyActionmap) | **DELETE** /api/v2/journey/actionmaps/{actionMapId} | Delete single action map.
[**deleteJourneyActiontemplate**](JourneyApi#deleteJourneyActiontemplate) | **DELETE** /api/v2/journey/actiontemplates/{actionTemplateId} | Delete a single action template.
[**deleteJourneyOutcome**](JourneyApi#deleteJourneyOutcome) | **DELETE** /api/v2/journey/outcomes/{outcomeId} | Delete an outcome.
[**deleteJourneyOutcomesPredictor**](JourneyApi#deleteJourneyOutcomesPredictor) | **DELETE** /api/v2/journey/outcomes/predictors/{predictorId} | Delete an outcome predictor.
[**deleteJourneySegment**](JourneyApi#deleteJourneySegment) | **DELETE** /api/v2/journey/segments/{segmentId} | Delete a segment.
[**deleteJourneyView**](JourneyApi#deleteJourneyView) | **DELETE** /api/v2/journey/views/{viewId} | Delete a Journey View by ID
[**deleteJourneyViewSchedules**](JourneyApi#deleteJourneyViewSchedules) | **DELETE** /api/v2/journey/views/{viewId}/schedules | Delete the Schedule of a JourneyView
[**getAnalyticsJourneysAggregatesJob**](JourneyApi#getAnalyticsJourneysAggregatesJob) | **GET** /api/v2/analytics/journeys/aggregates/jobs/{jobId} | Get status for async query for journey aggregates
[**getAnalyticsJourneysAggregatesJobResults**](JourneyApi#getAnalyticsJourneysAggregatesJobResults) | **GET** /api/v2/analytics/journeys/aggregates/jobs/{jobId}/results | Fetch a page of results for an async aggregates query
[**getExternalcontactsContactJourneySegments**](JourneyApi#getExternalcontactsContactJourneySegments) | **GET** /api/v2/externalcontacts/contacts/{contactId}/journey/segments | Retrieve segment assignments by external contact ID.
[**getExternalcontactsContactJourneySessions**](JourneyApi#getExternalcontactsContactJourneySessions) | **GET** /api/v2/externalcontacts/contacts/{contactId}/journey/sessions | Retrieve all sessions for a given external contact.
[**getJourneyActionmap**](JourneyApi#getJourneyActionmap) | **GET** /api/v2/journey/actionmaps/{actionMapId} | Retrieve a single action map.
[**getJourneyActionmaps**](JourneyApi#getJourneyActionmaps) | **GET** /api/v2/journey/actionmaps | Retrieve all action maps.
[**getJourneyActionmapsEstimatesJob**](JourneyApi#getJourneyActionmapsEstimatesJob) | **GET** /api/v2/journey/actionmaps/estimates/jobs/{jobId} | Get status of job.
[**getJourneyActionmapsEstimatesJobResults**](JourneyApi#getJourneyActionmapsEstimatesJobResults) | **GET** /api/v2/journey/actionmaps/estimates/jobs/{jobId}/results | Get estimates from completed job.
[**getJourneyActiontarget**](JourneyApi#getJourneyActiontarget) | **GET** /api/v2/journey/actiontargets/{actionTargetId} | Retrieve a single action target.
[**getJourneyActiontargets**](JourneyApi#getJourneyActiontargets) | **GET** /api/v2/journey/actiontargets | Retrieve all action targets.
[**getJourneyActiontemplate**](JourneyApi#getJourneyActiontemplate) | **GET** /api/v2/journey/actiontemplates/{actionTemplateId} | Retrieve a single action template.
[**getJourneyActiontemplates**](JourneyApi#getJourneyActiontemplates) | **GET** /api/v2/journey/actiontemplates | Retrieve all action templates.
[**getJourneyDeploymentCustomerPing**](JourneyApi#getJourneyDeploymentCustomerPing) | **GET** /api/v2/journey/deployments/{deploymentId}/customers/{customerCookieId}/ping | Send a ping.
[**getJourneyOutcome**](JourneyApi#getJourneyOutcome) | **GET** /api/v2/journey/outcomes/{outcomeId} | Retrieve a single outcome.
[**getJourneyOutcomes**](JourneyApi#getJourneyOutcomes) | **GET** /api/v2/journey/outcomes | Retrieve all outcomes.
[**getJourneyOutcomesAttributionsJob**](JourneyApi#getJourneyOutcomesAttributionsJob) | **GET** /api/v2/journey/outcomes/attributions/jobs/{jobId} | Get job status.
[**getJourneyOutcomesAttributionsJobResults**](JourneyApi#getJourneyOutcomesAttributionsJobResults) | **GET** /api/v2/journey/outcomes/attributions/jobs/{jobId}/results | Get outcome attribution entities from completed job.
[**getJourneyOutcomesPredictor**](JourneyApi#getJourneyOutcomesPredictor) | **GET** /api/v2/journey/outcomes/predictors/{predictorId} | Retrieve a single outcome predictor.
[**getJourneyOutcomesPredictors**](JourneyApi#getJourneyOutcomesPredictors) | **GET** /api/v2/journey/outcomes/predictors | Retrieve all outcome predictors.
[**getJourneySegment**](JourneyApi#getJourneySegment) | **GET** /api/v2/journey/segments/{segmentId} | Retrieve a single segment.
[**getJourneySegments**](JourneyApi#getJourneySegments) | **GET** /api/v2/journey/segments | Retrieve all segments.
[**getJourneySession**](JourneyApi#getJourneySession) | **GET** /api/v2/journey/sessions/{sessionId} | Retrieve a single session.
[**getJourneySessionEvents**](JourneyApi#getJourneySessionEvents) | **GET** /api/v2/journey/sessions/{sessionId}/events | Retrieve all events for a given session.
[**getJourneySessionOutcomescores**](JourneyApi#getJourneySessionOutcomescores) | **GET** /api/v2/journey/sessions/{sessionId}/outcomescores | Retrieve latest outcome score associated with a session for all outcomes.
[**getJourneyView**](JourneyApi#getJourneyView) | **GET** /api/v2/journey/views/{viewId} | Get a Journey View by ID
[**getJourneyViewSchedules**](JourneyApi#getJourneyViewSchedules) | **GET** /api/v2/journey/views/{viewId}/schedules | Get the Schedule for a JourneyView
[**getJourneyViewVersion**](JourneyApi#getJourneyViewVersion) | **GET** /api/v2/journey/views/{viewId}/versions/{versionId} | Get a Journey View by ID and version
[**getJourneyViewVersionChart**](JourneyApi#getJourneyViewVersionChart) | **GET** /api/v2/journey/views/{viewId}/versions/{journeyViewVersion}/charts/{chartId} | Get a Chart by ID
[**getJourneyViewVersionChartVersion**](JourneyApi#getJourneyViewVersionChartVersion) | **GET** /api/v2/journey/views/{viewId}/versions/{journeyViewVersion}/charts/{chartId}/versions/{chartVersion} | Get a Chart by ID and version
[**getJourneyViewVersionJob**](JourneyApi#getJourneyViewVersionJob) | **GET** /api/v2/journey/views/{viewId}/versions/{journeyVersionId}/jobs/{jobId} | Get the job for a journey view version.
[**getJourneyViewVersionJobResults**](JourneyApi#getJourneyViewVersionJobResults) | **GET** /api/v2/journey/views/{viewId}/versions/{journeyViewVersion}/jobs/{jobId}/results | Get the result of a job for a journey view version.
[**getJourneyViewVersionJobResultsChart**](JourneyApi#getJourneyViewVersionJobResultsChart) | **GET** /api/v2/journey/views/{viewId}/versions/{journeyVersionId}/jobs/{jobId}/results/charts/{chartId} | Get the chart result associated with a journey view job.
[**getJourneyViewVersionJobsLatest**](JourneyApi#getJourneyViewVersionJobsLatest) | **GET** /api/v2/journey/views/{viewId}/versions/{journeyVersionId}/jobs/latest | Get the latest job of a journey view version.
[**getJourneyViews**](JourneyApi#getJourneyViews) | **GET** /api/v2/journey/views | Get a list of Journey Views
[**getJourneyViewsDataDetails**](JourneyApi#getJourneyViewsDataDetails) | **GET** /api/v2/journey/views/data/details | Get details about the data available for journey queries including oldest and newest event dates
[**getJourneyViewsEventdefinition**](JourneyApi#getJourneyViewsEventdefinition) | **GET** /api/v2/journey/views/eventdefinitions/{eventDefinitionId} | Get an Event Definition
[**getJourneyViewsEventdefinitions**](JourneyApi#getJourneyViewsEventdefinitions) | **GET** /api/v2/journey/views/eventdefinitions | Get a list of Event Definitions
[**getJourneyViewsJobs**](JourneyApi#getJourneyViewsJobs) | **GET** /api/v2/journey/views/jobs | Get the jobs for an organization.
[**getJourneyViewsSchedules**](JourneyApi#getJourneyViewsSchedules) | **GET** /api/v2/journey/views/schedules | Get the journey schedules for an organization.
[**patchJourneyActionmap**](JourneyApi#patchJourneyActionmap) | **PATCH** /api/v2/journey/actionmaps/{actionMapId} | Update single action map.
[**patchJourneyActiontarget**](JourneyApi#patchJourneyActiontarget) | **PATCH** /api/v2/journey/actiontargets/{actionTargetId} | Update a single action target.
[**patchJourneyActiontemplate**](JourneyApi#patchJourneyActiontemplate) | **PATCH** /api/v2/journey/actiontemplates/{actionTemplateId} | Update a single action template.
[**patchJourneyOutcome**](JourneyApi#patchJourneyOutcome) | **PATCH** /api/v2/journey/outcomes/{outcomeId} | Update an outcome.
[**patchJourneySegment**](JourneyApi#patchJourneySegment) | **PATCH** /api/v2/journey/segments/{segmentId} | Update a segment.
[**patchJourneyViewVersionJob**](JourneyApi#patchJourneyViewVersionJob) | **PATCH** /api/v2/journey/views/{viewId}/versions/{journeyVersionId}/jobs/{jobId} | Update the job for a journey view version. Only the status can be changed and only to Cancelled
[**postAnalyticsJourneysAggregatesJobs**](JourneyApi#postAnalyticsJourneysAggregatesJobs) | **POST** /api/v2/analytics/journeys/aggregates/jobs | Query for journey aggregates asynchronously
[**postAnalyticsJourneysAggregatesQuery**](JourneyApi#postAnalyticsJourneysAggregatesQuery) | **POST** /api/v2/analytics/journeys/aggregates/query | Query for journey aggregates
[**postExternalcontactsContactJourneySegments**](JourneyApi#postExternalcontactsContactJourneySegments) | **POST** /api/v2/externalcontacts/contacts/{contactId}/journey/segments | Assign/Unassign up to 10 segments to/from an external contact or, if a segment is already assigned, update the expiry date of the segment assignment. Any unprocessed segment assignments are returned in the body for the client to retry, in the event of a partial success.
[**postJourneyActionmaps**](JourneyApi#postJourneyActionmaps) | **POST** /api/v2/journey/actionmaps | Create an action map.
[**postJourneyActionmapsEstimatesJobs**](JourneyApi#postJourneyActionmapsEstimatesJobs) | **POST** /api/v2/journey/actionmaps/estimates/jobs | Query for estimates
[**postJourneyActiontemplates**](JourneyApi#postJourneyActiontemplates) | **POST** /api/v2/journey/actiontemplates | Create a single action template.
[**postJourneyDeploymentActionevent**](JourneyApi#postJourneyDeploymentActionevent) | **POST** /api/v2/journey/deployments/{deploymentId}/actionevent | Sends an action event, which is used for changing the state of actions that have been offered to the user.
[**postJourneyDeploymentAppevents**](JourneyApi#postJourneyDeploymentAppevents) | **POST** /api/v2/journey/deployments/{deploymentId}/appevents | Send a journey app event, used for tracking customer activity on an application.
[**postJourneyDeploymentWebevents**](JourneyApi#postJourneyDeploymentWebevents) | **POST** /api/v2/journey/deployments/{deploymentId}/webevents | Send a journey web event, used for tracking customer activity on a website.
[**postJourneyFlowsPathsQuery**](JourneyApi#postJourneyFlowsPathsQuery) | **POST** /api/v2/journey/flows/paths/query | Query for flow paths.
[**postJourneyOutcomes**](JourneyApi#postJourneyOutcomes) | **POST** /api/v2/journey/outcomes | Create an outcome.
[**postJourneyOutcomesAttributionsJobs**](JourneyApi#postJourneyOutcomesAttributionsJobs) | **POST** /api/v2/journey/outcomes/attributions/jobs | Create Outcome Attributions
[**postJourneyOutcomesPredictors**](JourneyApi#postJourneyOutcomesPredictors) | **POST** /api/v2/journey/outcomes/predictors | Create an outcome predictor.
[**postJourneySegments**](JourneyApi#postJourneySegments) | **POST** /api/v2/journey/segments | Create a segment.
[**postJourneyViewSchedules**](JourneyApi#postJourneyViewSchedules) | **POST** /api/v2/journey/views/{viewId}/schedules | Add a new Schedule to a JourneyView
[**postJourneyViewVersionJobs**](JourneyApi#postJourneyViewVersionJobs) | **POST** /api/v2/journey/views/{viewId}/versions/{journeyVersionId}/jobs | Submit a job request for a journey view version.
[**postJourneyViewVersions**](JourneyApi#postJourneyViewVersions) | **POST** /api/v2/journey/views/{viewId}/versions | Update a Journey View by ID
[**postJourneyViews**](JourneyApi#postJourneyViews) | **POST** /api/v2/journey/views | Create a new Journey View
[**postJourneyViewsEncodingsValidate**](JourneyApi#postJourneyViewsEncodingsValidate) | **POST** /api/v2/journey/views/encodings/validate | Validate whether an encoding exist for a label/value combination.
[**putJourneyViewSchedules**](JourneyApi#putJourneyViewSchedules) | **PUT** /api/v2/journey/views/{viewId}/schedules | Update the Schedule for a JourneyView
[**putJourneyViewVersion**](JourneyApi#putJourneyViewVersion) | **PUT** /api/v2/journey/views/{viewId}/versions/{versionId} | Update a Journey View by ID and version



## deleteAnalyticsJourneysAggregatesJob

> void deleteAnalyticsJourneysAggregatesJob(jobId)


DELETE /api/v2/analytics/journeys/aggregates/jobs/{jobId}

Delete/cancel an async request for journey aggregates

deleteAnalyticsJourneysAggregatesJob is a preview method and is subject to both breaking and non-breaking changes at any time without notice

Requires ANY permissions:

* analytics:journeyAggregate:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.JourneyApi();

let jobId = "jobId_example"; // String | jobId

apiInstance.deleteAnalyticsJourneysAggregatesJob(jobId)
  .then(() => {
    console.log('deleteAnalyticsJourneysAggregatesJob returned successfully.');
  })
  .catch((err) => {
    console.log('There was a failure calling deleteAnalyticsJourneysAggregatesJob');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **jobId** | **String** | jobId |  |

### Return type

void (no response body)


## deleteJourneyActionmap

> void deleteJourneyActionmap(actionMapId)


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

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
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

### Return type

void (no response body)


## deleteJourneyActiontemplate

> void deleteJourneyActiontemplate(actionTemplateId, opts)


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

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
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

### Return type

void (no response body)


## deleteJourneyOutcome

> void deleteJourneyOutcome(outcomeId)


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

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
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

### Return type

void (no response body)


## deleteJourneyOutcomesPredictor

> void deleteJourneyOutcomesPredictor(predictorId)


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

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
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

### Return type

void (no response body)


## deleteJourneySegment

> void deleteJourneySegment(segmentId)


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

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
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

### Return type

void (no response body)


## deleteJourneyView

> void deleteJourneyView(viewId)


DELETE /api/v2/journey/views/{viewId}

Delete a Journey View by ID

deletes all versions

Requires ALL permissions:

* journey:views:delete

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.JourneyApi();

let viewId = "viewId_example"; // String | viewId

apiInstance.deleteJourneyView(viewId)
  .then(() => {
    console.log('deleteJourneyView returned successfully.');
  })
  .catch((err) => {
    console.log('There was a failure calling deleteJourneyView');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **viewId** | **String** | viewId |  |

### Return type

void (no response body)


## deleteJourneyViewSchedules

> JourneyViewSchedule deleteJourneyViewSchedules(viewId)


DELETE /api/v2/journey/views/{viewId}/schedules

Delete the Schedule of a JourneyView

Requires ALL permissions:

* journey:viewsSchedule:delete

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.JourneyApi();

let viewId = "viewId_example"; // String | Journey View Id

apiInstance.deleteJourneyViewSchedules(viewId)
  .then((data) => {
    console.log(`deleteJourneyViewSchedules success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling deleteJourneyViewSchedules');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **viewId** | **String** | Journey View Id |  |

### Return type

**JourneyViewSchedule**


## getAnalyticsJourneysAggregatesJob

> AsyncQueryStatus getAnalyticsJourneysAggregatesJob(jobId)


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

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
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

### Return type

**AsyncQueryStatus**


## getAnalyticsJourneysAggregatesJobResults

> JourneyAsyncAggregateQueryResponse getAnalyticsJourneysAggregatesJobResults(jobId, opts)


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

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
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

### Return type

**JourneyAsyncAggregateQueryResponse**


## getExternalcontactsContactJourneySegments

> SegmentAssignmentListing getExternalcontactsContactJourneySegments(contactId, opts)


GET /api/v2/externalcontacts/contacts/{contactId}/journey/segments

Retrieve segment assignments by external contact ID.

Requires ANY permissions:

* externalContacts:segmentAssignment:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.JourneyApi();

let contactId = "contactId_example"; // String | ExternalContact ID
let opts = { 
  'includeMerged': true, // Boolean | Indicates whether to return segment assignments from all external contacts in the merge-set of the given one.
  'limit': 3.4 // Number | Number of entities to return. Default of 25, maximum of 500.
};

apiInstance.getExternalcontactsContactJourneySegments(contactId, opts)
  .then((data) => {
    console.log(`getExternalcontactsContactJourneySegments success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getExternalcontactsContactJourneySegments');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **contactId** | **String** | ExternalContact ID |  |
 **includeMerged** | **Boolean** | Indicates whether to return segment assignments from all external contacts in the merge-set of the given one. | [optional]  |
 **limit** | **Number** | Number of entities to return. Default of 25, maximum of 500. | [optional]  |

### Return type

**SegmentAssignmentListing**


## getExternalcontactsContactJourneySessions

> SessionListing getExternalcontactsContactJourneySessions(contactId, opts)


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

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
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

### Return type

**SessionListing**


## getJourneyActionmap

> ActionMap getJourneyActionmap(actionMapId)


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

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
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

### Return type

**ActionMap**


## getJourneyActionmaps

> ActionMapListing getJourneyActionmaps(opts)


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

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
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

### Return type

**ActionMapListing**


## getJourneyActionmapsEstimatesJob

> **&#39;String&#39;** getJourneyActionmapsEstimatesJob(jobId)


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

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
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

### Return type

**&#39;String&#39;**


## getJourneyActionmapsEstimatesJobResults

> ActionMapEstimateResult getJourneyActionmapsEstimatesJobResults(jobId)


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

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
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

### Return type

**ActionMapEstimateResult**


## getJourneyActiontarget

> ActionTarget getJourneyActiontarget(actionTargetId)


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

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
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

### Return type

**ActionTarget**


## getJourneyActiontargets

> ActionTargetListing getJourneyActiontargets(opts)


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

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
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

### Return type

**ActionTargetListing**


## getJourneyActiontemplate

> ActionTemplate getJourneyActiontemplate(actionTemplateId)


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

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
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

### Return type

**ActionTemplate**


## getJourneyActiontemplates

> ActionTemplateListing getJourneyActiontemplates(opts)


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

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
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

### Return type

**ActionTemplateListing**


## getJourneyDeploymentCustomerPing

> DeploymentPing getJourneyDeploymentCustomerPing(deploymentId, customerCookieId, opts)


GET /api/v2/journey/deployments/{deploymentId}/customers/{customerCookieId}/ping

Send a ping.

Requires NO permissions:

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

let apiInstance = new platformClient.JourneyApi();

let deploymentId = "deploymentId_example"; // String | The ID of the deployment sending the ping.
let customerCookieId = "customerCookieId_example"; // String | ID of the customer associated with the ping.
let opts = { 
  'dl': "dl_example", // String | Document Location: 1) Web Page URL if overridden or URL fragment identifier (window.location.hash). OR  2) Application screen name that the ping request was sent from in the app. e.g. 'home' or 'help. Pings without this parameter will not return actions.
  'dt': "dt_example", // String | Document Title.  A human readable name for the page or screen
  'appNamespace': "appNamespace_example", // String | Namespace of the application (e.g. com.genesys.bancodinero). Used for domain filtering in application sessions
  'sessionId': "sessionId_example", // String | UUID of the customer session. Use the same Session Id for all pings, AppEvents and ActionEvents in the session
  'sinceLastBeaconMilliseconds': 3.4 // Number | How long (milliseconds) since the last app event or beacon was sent. The response may return a pollInternvalMilliseconds to reduce the frequency of pings.
};

apiInstance.getJourneyDeploymentCustomerPing(deploymentId, customerCookieId, opts)
  .then((data) => {
    console.log(`getJourneyDeploymentCustomerPing success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getJourneyDeploymentCustomerPing');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **deploymentId** | **String** | The ID of the deployment sending the ping. |  |
 **customerCookieId** | **String** | ID of the customer associated with the ping. |  |
 **dl** | **String** | Document Location: 1) Web Page URL if overridden or URL fragment identifier (window.location.hash). OR  2) Application screen name that the ping request was sent from in the app. e.g. 'home' or 'help. Pings without this parameter will not return actions. | [optional]  |
 **dt** | **String** | Document Title.  A human readable name for the page or screen | [optional]  |
 **appNamespace** | **String** | Namespace of the application (e.g. com.genesys.bancodinero). Used for domain filtering in application sessions | [optional]  |
 **sessionId** | **String** | UUID of the customer session. Use the same Session Id for all pings, AppEvents and ActionEvents in the session | [optional]  |
 **sinceLastBeaconMilliseconds** | **Number** | How long (milliseconds) since the last app event or beacon was sent. The response may return a pollInternvalMilliseconds to reduce the frequency of pings. | [optional]  |

### Return type

**DeploymentPing**


## getJourneyOutcome

> Outcome getJourneyOutcome(outcomeId)


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

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
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

### Return type

**Outcome**


## getJourneyOutcomes

> OutcomeListing getJourneyOutcomes(opts)


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

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
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

### Return type

**OutcomeListing**


## getJourneyOutcomesAttributionsJob

> OutcomeAttributionJobStateResponse getJourneyOutcomesAttributionsJob(jobId)


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

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
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

### Return type

**OutcomeAttributionJobStateResponse**


## getJourneyOutcomesAttributionsJobResults

> OutcomeAttributionResponseListing getJourneyOutcomesAttributionsJobResults(jobId)


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

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
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

### Return type

**OutcomeAttributionResponseListing**


## getJourneyOutcomesPredictor

> OutcomePredictor getJourneyOutcomesPredictor(predictorId)


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

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
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

### Return type

**OutcomePredictor**


## getJourneyOutcomesPredictors

> OutcomePredictorListing getJourneyOutcomesPredictors()


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

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
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


## getJourneySegment

> JourneySegment getJourneySegment(segmentId)


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

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
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

### Return type

**JourneySegment**


## getJourneySegments

> SegmentListing getJourneySegments(opts)


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

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
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

### Return type

**SegmentListing**


## getJourneySession

> Session getJourneySession(sessionId)


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

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
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

### Return type

**Session**


## getJourneySessionEvents

> EventListing getJourneySessionEvents(sessionId, opts)


GET /api/v2/journey/sessions/{sessionId}/events

Retrieve all events for a given session.

Requires ANY permissions:

* journey:event:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.JourneyApi();

let sessionId = "sessionId_example"; // String | System-generated UUID that represents the session the event is a part of.
let opts = { 
  'pageSize': "pageSize_example", // String | Number of entities to return. Maximum of 200.
  'after': "after_example", // String | The cursor that points to the end of the set of entities that has been returned.
  'eventType': "eventType_example" // String | A comma separated list of journey event types to include in the results.
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
 **eventType** | **String** | A comma separated list of journey event types to include in the results. | [optional] <br />**Values**: com.genesys.journey.OutcomeAchievedEvent, com.genesys.journey.SegmentAssignmentEvent, com.genesys.journey.WebActionEvent, com.genesys.journey.WebEvent, com.genesys.journey.AppEvent |

### Return type

**EventListing**


## getJourneySessionOutcomescores

> OutcomeScoresResult getJourneySessionOutcomescores(sessionId)


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

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
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

### Return type

**OutcomeScoresResult**


## getJourneyView

> JourneyView getJourneyView(viewId)


GET /api/v2/journey/views/{viewId}

Get a Journey View by ID

returns the latest version

Requires ALL permissions:

* journey:views:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.JourneyApi();

let viewId = "viewId_example"; // String | viewId

apiInstance.getJourneyView(viewId)
  .then((data) => {
    console.log(`getJourneyView success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getJourneyView');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **viewId** | **String** | viewId |  |

### Return type

**JourneyView**


## getJourneyViewSchedules

> JourneyViewSchedule getJourneyViewSchedules(viewId)


GET /api/v2/journey/views/{viewId}/schedules

Get the Schedule for a JourneyView

Requires ALL permissions:

* journey:viewsSchedule:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.JourneyApi();

let viewId = "viewId_example"; // String | Journey View Id

apiInstance.getJourneyViewSchedules(viewId)
  .then((data) => {
    console.log(`getJourneyViewSchedules success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getJourneyViewSchedules');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **viewId** | **String** | Journey View Id |  |

### Return type

**JourneyViewSchedule**


## getJourneyViewVersion

> JourneyView getJourneyViewVersion(viewId, versionId)


GET /api/v2/journey/views/{viewId}/versions/{versionId}

Get a Journey View by ID and version

Requires ALL permissions:

* journey:views:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.JourneyApi();

let viewId = "viewId_example"; // String | viewId
let versionId = "versionId_example"; // String | versionId

apiInstance.getJourneyViewVersion(viewId, versionId)
  .then((data) => {
    console.log(`getJourneyViewVersion success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getJourneyViewVersion');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **viewId** | **String** | viewId |  |
 **versionId** | **String** | versionId |  |

### Return type

**JourneyView**


## getJourneyViewVersionChart

> JourneyViewChart getJourneyViewVersionChart(viewId, journeyViewVersion, chartId)


GET /api/v2/journey/views/{viewId}/versions/{journeyViewVersion}/charts/{chartId}

Get a Chart by ID

returns the latest version

Requires ALL permissions:

* journey:views:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.JourneyApi();

let viewId = "viewId_example"; // String | viewId
let journeyViewVersion = "journeyViewVersion_example"; // String | Journey View Version
let chartId = "chartId_example"; // String | chartId

apiInstance.getJourneyViewVersionChart(viewId, journeyViewVersion, chartId)
  .then((data) => {
    console.log(`getJourneyViewVersionChart success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getJourneyViewVersionChart');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **viewId** | **String** | viewId |  |
 **journeyViewVersion** | **String** | Journey View Version |  |
 **chartId** | **String** | chartId |  |

### Return type

**JourneyViewChart**


## getJourneyViewVersionChartVersion

> JourneyViewChart getJourneyViewVersionChartVersion(viewId, journeyViewVersion, chartId, chartVersion)


GET /api/v2/journey/views/{viewId}/versions/{journeyViewVersion}/charts/{chartId}/versions/{chartVersion}

Get a Chart by ID and version

Requires ALL permissions:

* journey:views:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.JourneyApi();

let viewId = "viewId_example"; // String | viewId
let journeyViewVersion = "journeyViewVersion_example"; // String | Journey View Version
let chartId = "chartId_example"; // String | chartId
let chartVersion = "chartVersion_example"; // String | chartVersion

apiInstance.getJourneyViewVersionChartVersion(viewId, journeyViewVersion, chartId, chartVersion)
  .then((data) => {
    console.log(`getJourneyViewVersionChartVersion success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getJourneyViewVersionChartVersion');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **viewId** | **String** | viewId |  |
 **journeyViewVersion** | **String** | Journey View Version |  |
 **chartId** | **String** | chartId |  |
 **chartVersion** | **String** | chartVersion |  |

### Return type

**JourneyViewChart**


## getJourneyViewVersionJob

> JourneyViewJob getJourneyViewVersionJob(viewId, journeyVersionId, jobId)


GET /api/v2/journey/views/{viewId}/versions/{journeyVersionId}/jobs/{jobId}

Get the job for a journey view version.

Requires ALL permissions:

* journey:viewsJobs:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.JourneyApi();

let viewId = "viewId_example"; // String | Journey View Id
let journeyVersionId = "journeyVersionId_example"; // String | Journey View Version
let jobId = "jobId_example"; // String | JobId

apiInstance.getJourneyViewVersionJob(viewId, journeyVersionId, jobId)
  .then((data) => {
    console.log(`getJourneyViewVersionJob success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getJourneyViewVersionJob');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **viewId** | **String** | Journey View Id |  |
 **journeyVersionId** | **String** | Journey View Version |  |
 **jobId** | **String** | JobId |  |

### Return type

**JourneyViewJob**


## getJourneyViewVersionJobResults

> JourneyViewResult getJourneyViewVersionJobResults(viewId, journeyViewVersion, jobId)


GET /api/v2/journey/views/{viewId}/versions/{journeyViewVersion}/jobs/{jobId}/results

Get the result of a job for a journey view version.

Requires ALL permissions:

* journey:viewsResults:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.JourneyApi();

let viewId = "viewId_example"; // String | JourneyViewResult id
let journeyViewVersion = "journeyViewVersion_example"; // String | Journey View Version
let jobId = "jobId_example"; // String | Id of the executing job

apiInstance.getJourneyViewVersionJobResults(viewId, journeyViewVersion, jobId)
  .then((data) => {
    console.log(`getJourneyViewVersionJobResults success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getJourneyViewVersionJobResults');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **viewId** | **String** | JourneyViewResult id |  |
 **journeyViewVersion** | **String** | Journey View Version |  |
 **jobId** | **String** | Id of the executing job |  |

### Return type

**JourneyViewResult**


## getJourneyViewVersionJobResultsChart

> JourneyViewChartResult getJourneyViewVersionJobResultsChart(viewId, journeyVersionId, jobId, chartId)


GET /api/v2/journey/views/{viewId}/versions/{journeyVersionId}/jobs/{jobId}/results/charts/{chartId}

Get the chart result associated with a journey view job.

Requires ALL permissions:

* journey:viewsResults:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.JourneyApi();

let viewId = "viewId_example"; // String | Journey View Id
let journeyVersionId = "journeyVersionId_example"; // String | Journey View Version
let jobId = "jobId_example"; // String | JobId
let chartId = "chartId_example"; // String | ChartId

apiInstance.getJourneyViewVersionJobResultsChart(viewId, journeyVersionId, jobId, chartId)
  .then((data) => {
    console.log(`getJourneyViewVersionJobResultsChart success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getJourneyViewVersionJobResultsChart');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **viewId** | **String** | Journey View Id |  |
 **journeyVersionId** | **String** | Journey View Version |  |
 **jobId** | **String** | JobId |  |
 **chartId** | **String** | ChartId |  |

### Return type

**JourneyViewChartResult**


## getJourneyViewVersionJobsLatest

> JourneyViewJob getJourneyViewVersionJobsLatest(viewId, journeyVersionId)


GET /api/v2/journey/views/{viewId}/versions/{journeyVersionId}/jobs/latest

Get the latest job of a journey view version.

Requires ALL permissions:

* journey:viewsJobs:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.JourneyApi();

let viewId = "viewId_example"; // String | Journey View Id
let journeyVersionId = "journeyVersionId_example"; // String | Journey View Version

apiInstance.getJourneyViewVersionJobsLatest(viewId, journeyVersionId)
  .then((data) => {
    console.log(`getJourneyViewVersionJobsLatest success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getJourneyViewVersionJobsLatest');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **viewId** | **String** | Journey View Id |  |
 **journeyVersionId** | **String** | Journey View Version |  |

### Return type

**JourneyViewJob**


## getJourneyViews

> JourneyViewListing getJourneyViews(opts)


GET /api/v2/journey/views

Get a list of Journey Views

Requires ALL permissions:

* journey:views:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.JourneyApi();

let opts = { 
  'pageNumber': 1, // Number | Page number
  'pageSize': 25, // Number | Page size
  'nameOrCreatedBy': "nameOrCreatedBy_example", // String | Journey View Name or Created By
  'expand': "expand_example", // String | Parameter to request additional data to return in Journey payload
  'id': "id_example" // String | Parameter to request a list of Journey Views by id, separated by commas. Limit of 100 items.
};

apiInstance.getJourneyViews(opts)
  .then((data) => {
    console.log(`getJourneyViews success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getJourneyViews');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **pageNumber** | **Number** | Page number | [optional] [default to 1] |
 **pageSize** | **Number** | Page size | [optional] [default to 25] |
 **nameOrCreatedBy** | **String** | Journey View Name or Created By | [optional]  |
 **expand** | **String** | Parameter to request additional data to return in Journey payload | [optional] <br />**Values**: charts |
 **id** | **String** | Parameter to request a list of Journey Views by id, separated by commas. Limit of 100 items. | [optional]  |

### Return type

**JourneyViewListing**


## getJourneyViewsDataDetails

> DataRange getJourneyViewsDataDetails()


GET /api/v2/journey/views/data/details

Get details about the data available for journey queries including oldest and newest event dates

Requires ALL permissions:

* journey:dataDetails:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.JourneyApi();

apiInstance.getJourneyViewsDataDetails()
  .then((data) => {
    console.log(`getJourneyViewsDataDetails success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getJourneyViewsDataDetails');
    console.error(err);
  });
```

### Parameters

This endpoint does not need any parameter.

### Return type

**DataRange**


## getJourneyViewsEventdefinition

> JourneyEventDefinition getJourneyViewsEventdefinition(eventDefinitionId)


GET /api/v2/journey/views/eventdefinitions/{eventDefinitionId}

Get an Event Definition

Requires ALL permissions:

* journey:eventDefinition:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.JourneyApi();

let eventDefinitionId = "eventDefinitionId_example"; // String | Event Definition ID

apiInstance.getJourneyViewsEventdefinition(eventDefinitionId)
  .then((data) => {
    console.log(`getJourneyViewsEventdefinition success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getJourneyViewsEventdefinition');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **eventDefinitionId** | **String** | Event Definition ID |  |

### Return type

**JourneyEventDefinition**


## getJourneyViewsEventdefinitions

> JourneyEventDefinitionListing getJourneyViewsEventdefinitions()


GET /api/v2/journey/views/eventdefinitions

Get a list of Event Definitions

Requires ALL permissions:

* journey:eventDefinition:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.JourneyApi();

apiInstance.getJourneyViewsEventdefinitions()
  .then((data) => {
    console.log(`getJourneyViewsEventdefinitions success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getJourneyViewsEventdefinitions');
    console.error(err);
  });
```

### Parameters

This endpoint does not need any parameter.

### Return type

**JourneyEventDefinitionListing**


## getJourneyViewsJobs

> JourneyViewJobListing getJourneyViewsJobs(opts)


GET /api/v2/journey/views/jobs

Get the jobs for an organization.

Requires ALL permissions:

* journey:viewsJobs:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.JourneyApi();

let opts = { 
  'pageNumber': 1, // Number | The number of the page to return
  'pageSize': 25, // Number | Max number of entities to return
  'interval': 2023-07-17T00:00:00Z/2023-07-18T00:00:00Z, // String | An absolute timeframe for filtering the jobs, expressed as an ISO 8601 interval.
  'statuses': statuses=Accepted,Executing,Complete,Failed,Scheduled // String | Job statuses to filter for
};

apiInstance.getJourneyViewsJobs(opts)
  .then((data) => {
    console.log(`getJourneyViewsJobs success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getJourneyViewsJobs');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **pageNumber** | **Number** | The number of the page to return | [optional] [default to 1] |
 **pageSize** | **Number** | Max number of entities to return | [optional] [default to 25] |
 **interval** | **String** | An absolute timeframe for filtering the jobs, expressed as an ISO 8601 interval. | [optional]  |
 **statuses** | **String** | Job statuses to filter for | [optional]  |

### Return type

**JourneyViewJobListing**


## getJourneyViewsSchedules

> JourneyViewScheduleListing getJourneyViewsSchedules(opts)


GET /api/v2/journey/views/schedules

Get the journey schedules for an organization.

Requires ALL permissions:

* journey:viewsSchedule:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.JourneyApi();

let opts = { 
  'pageNumber': 1, // Number | The number of the page to return
  'pageSize': 25 // Number | Max number of entities to return
};

apiInstance.getJourneyViewsSchedules(opts)
  .then((data) => {
    console.log(`getJourneyViewsSchedules success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getJourneyViewsSchedules');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **pageNumber** | **Number** | The number of the page to return | [optional] [default to 1] |
 **pageSize** | **Number** | Max number of entities to return | [optional] [default to 25] |

### Return type

**JourneyViewScheduleListing**


## patchJourneyActionmap

> ActionMap patchJourneyActionmap(actionMapId, opts)


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

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
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

### Return type

**ActionMap**


## patchJourneyActiontarget

> ActionTarget patchJourneyActiontarget(actionTargetId, opts)


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

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
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

### Return type

**ActionTarget**


## patchJourneyActiontemplate

> ActionTemplate patchJourneyActiontemplate(actionTemplateId, opts)


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

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
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

### Return type

**ActionTemplate**


## patchJourneyOutcome

> Outcome patchJourneyOutcome(outcomeId, opts)


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

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
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

### Return type

**Outcome**


## patchJourneySegment

> JourneySegment patchJourneySegment(segmentId, opts)


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

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
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

### Return type

**JourneySegment**


## patchJourneyViewVersionJob

> JourneyViewJob patchJourneyViewVersionJob(viewId, journeyVersionId, jobId, body)


PATCH /api/v2/journey/views/{viewId}/versions/{journeyVersionId}/jobs/{jobId}

Update the job for a journey view version. Only the status can be changed and only to Cancelled

Requires ALL permissions:

* journey:viewsJobs:edit

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.JourneyApi();

let viewId = "viewId_example"; // String | Journey View Id
let journeyVersionId = "journeyVersionId_example"; // String | Journey View Version
let jobId = "jobId_example"; // String | JobId
let body = {}; // Object | journeyViewJob

apiInstance.patchJourneyViewVersionJob(viewId, journeyVersionId, jobId, body)
  .then((data) => {
    console.log(`patchJourneyViewVersionJob success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling patchJourneyViewVersionJob');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **viewId** | **String** | Journey View Id |  |
 **journeyVersionId** | **String** | Journey View Version |  |
 **jobId** | **String** | JobId |  |
 **body** | **Object** | journeyViewJob |  |

### Return type

**JourneyViewJob**


## postAnalyticsJourneysAggregatesJobs

> AsyncQueryResponse postAnalyticsJourneysAggregatesJobs(body)


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

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
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

### Return type

**AsyncQueryResponse**


## postAnalyticsJourneysAggregatesQuery

> JourneyAggregateQueryResponse postAnalyticsJourneysAggregatesQuery(body)


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

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
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

### Return type

**JourneyAggregateQueryResponse**


## postExternalcontactsContactJourneySegments

> UpdateSegmentAssignmentResponse postExternalcontactsContactJourneySegments(contactId, opts)


POST /api/v2/externalcontacts/contacts/{contactId}/journey/segments

Assign/Unassign up to 10 segments to/from an external contact or, if a segment is already assigned, update the expiry date of the segment assignment. Any unprocessed segment assignments are returned in the body for the client to retry, in the event of a partial success.

Requires ANY permissions:

* externalContacts:segmentAssignment:add
* externalContacts:segmentAssignment:delete

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.JourneyApi();

let contactId = "contactId_example"; // String | ExternalContact ID
let opts = { 
  'body': {} // Object | 
};

apiInstance.postExternalcontactsContactJourneySegments(contactId, opts)
  .then((data) => {
    console.log(`postExternalcontactsContactJourneySegments success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling postExternalcontactsContactJourneySegments');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **contactId** | **String** | ExternalContact ID |  |
 **body** | **Object** |  | [optional]  |

### Return type

**UpdateSegmentAssignmentResponse**


## postJourneyActionmaps

> ActionMap postJourneyActionmaps(opts)


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

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
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

### Return type

**ActionMap**


## postJourneyActionmapsEstimatesJobs

> EstimateJobAsyncResponse postJourneyActionmapsEstimatesJobs(body)


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

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
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

### Return type

**EstimateJobAsyncResponse**


## postJourneyActiontemplates

> ActionTemplate postJourneyActiontemplates(opts)


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

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
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

### Return type

**ActionTemplate**


## postJourneyDeploymentActionevent

> void postJourneyDeploymentActionevent(deploymentId, body)


POST /api/v2/journey/deployments/{deploymentId}/actionevent

Sends an action event, which is used for changing the state of actions that have been offered to the user.

Requires NO permissions:

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

let apiInstance = new platformClient.JourneyApi();

let deploymentId = "deploymentId_example"; // String | The ID of the deployment sending the beacon.
let body = {}; // Object | 

apiInstance.postJourneyDeploymentActionevent(deploymentId, body)
  .then(() => {
    console.log('postJourneyDeploymentActionevent returned successfully.');
  })
  .catch((err) => {
    console.log('There was a failure calling postJourneyDeploymentActionevent');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **deploymentId** | **String** | The ID of the deployment sending the beacon. |  |
 **body** | **Object** |  |  |

### Return type

void (no response body)


## postJourneyDeploymentAppevents

> AppEventResponse postJourneyDeploymentAppevents(deploymentId, opts)


POST /api/v2/journey/deployments/{deploymentId}/appevents

Send a journey app event, used for tracking customer activity on an application.

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

### Return type

**AppEventResponse**


## postJourneyDeploymentWebevents

> WebEventResponse postJourneyDeploymentWebevents(deploymentId, opts)


POST /api/v2/journey/deployments/{deploymentId}/webevents

Send a journey web event, used for tracking customer activity on a website.

Requires NO permissions:

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

let apiInstance = new platformClient.JourneyApi();

let deploymentId = "deploymentId_example"; // String | The ID of the deployment sending the web event.
let opts = { 
  'body': {} // Object | 
};

apiInstance.postJourneyDeploymentWebevents(deploymentId, opts)
  .then((data) => {
    console.log(`postJourneyDeploymentWebevents success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling postJourneyDeploymentWebevents');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **deploymentId** | **String** | The ID of the deployment sending the web event. |  |
 **body** | **Object** |  | [optional]  |

### Return type

**WebEventResponse**


## postJourneyFlowsPathsQuery

> FlowPaths postJourneyFlowsPathsQuery(opts)


POST /api/v2/journey/flows/paths/query

Query for flow paths.

Requires ALL permissions:

* journey:flowpaths:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.JourneyApi();

let opts = { 
  'body': {} // Object | 
};

apiInstance.postJourneyFlowsPathsQuery(opts)
  .then((data) => {
    console.log(`postJourneyFlowsPathsQuery success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling postJourneyFlowsPathsQuery');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **body** | **Object** |  | [optional]  |

### Return type

**FlowPaths**


## postJourneyOutcomes

> Outcome postJourneyOutcomes(opts)


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

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
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

### Return type

**Outcome**


## postJourneyOutcomesAttributionsJobs

> OutcomeAttributionAsyncResponse postJourneyOutcomesAttributionsJobs(opts)


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

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
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

### Return type

**OutcomeAttributionAsyncResponse**


## postJourneyOutcomesPredictors

> OutcomePredictor postJourneyOutcomesPredictors(opts)


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

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
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

### Return type

**OutcomePredictor**


## postJourneySegments

> JourneySegment postJourneySegments(opts)


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

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
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

### Return type

**JourneySegment**


## postJourneyViewSchedules

> JourneyViewSchedule postJourneyViewSchedules(viewId, body)


POST /api/v2/journey/views/{viewId}/schedules

Add a new Schedule to a JourneyView

Requires ALL permissions:

* journey:viewsSchedule:add

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.JourneyApi();

let viewId = "viewId_example"; // String | Journey View Id
let body = {}; // Object | journeyViewSchedule

apiInstance.postJourneyViewSchedules(viewId, body)
  .then((data) => {
    console.log(`postJourneyViewSchedules success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling postJourneyViewSchedules');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **viewId** | **String** | Journey View Id |  |
 **body** | **Object** | journeyViewSchedule |  |

### Return type

**JourneyViewSchedule**


## postJourneyViewVersionJobs

> JourneyViewJob postJourneyViewVersionJobs(viewId, journeyVersionId)


POST /api/v2/journey/views/{viewId}/versions/{journeyVersionId}/jobs

Submit a job request for a journey view version.

Requires ALL permissions:

* journey:viewsJobs:add

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.JourneyApi();

let viewId = "viewId_example"; // String | Journey View Id
let journeyVersionId = "journeyVersionId_example"; // String | Journey View Version

apiInstance.postJourneyViewVersionJobs(viewId, journeyVersionId)
  .then((data) => {
    console.log(`postJourneyViewVersionJobs success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling postJourneyViewVersionJobs');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **viewId** | **String** | Journey View Id |  |
 **journeyVersionId** | **String** | Journey View Version |  |

### Return type

**JourneyViewJob**


## postJourneyViewVersions

> JourneyView postJourneyViewVersions(viewId, body)


POST /api/v2/journey/views/{viewId}/versions

Update a Journey View by ID

creates a new version

Requires ALL permissions:

* journey:views:edit

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.JourneyApi();

let viewId = "viewId_example"; // String | viewId
let body = {}; // Object | JourneyView

apiInstance.postJourneyViewVersions(viewId, body)
  .then((data) => {
    console.log(`postJourneyViewVersions success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling postJourneyViewVersions');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **viewId** | **String** | viewId |  |
 **body** | **Object** | JourneyView |  |

### Return type

**JourneyView**


## postJourneyViews

> JourneyView postJourneyViews(body)


POST /api/v2/journey/views

Create a new Journey View

Requires ALL permissions:

* journey:views:add

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.JourneyApi();

let body = {}; // Object | JourneyView

apiInstance.postJourneyViews(body)
  .then((data) => {
    console.log(`postJourneyViews success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling postJourneyViews');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **body** | **Object** | JourneyView |  |

### Return type

**JourneyView**


## postJourneyViewsEncodingsValidate

> EntityListing postJourneyViewsEncodingsValidate(opts)


POST /api/v2/journey/views/encodings/validate

Validate whether an encoding exist for a label/value combination.

True indicates a valid encoding

Requires ALL permissions:

* journey:viewsEncodings:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.JourneyApi();

let opts = { 
  'body': [{}] // Object | 
};

apiInstance.postJourneyViewsEncodingsValidate(opts)
  .then((data) => {
    console.log(`postJourneyViewsEncodingsValidate success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling postJourneyViewsEncodingsValidate');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **body** | **Object** |  | [optional]  |

### Return type

**EntityListing**


## putJourneyViewSchedules

> JourneyViewSchedule putJourneyViewSchedules(viewId, body)


PUT /api/v2/journey/views/{viewId}/schedules

Update the Schedule for a JourneyView

Requires ALL permissions:

* journey:viewsSchedule:edit

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.JourneyApi();

let viewId = "viewId_example"; // String | Journey View Id
let body = {}; // Object | journeyViewSchedule

apiInstance.putJourneyViewSchedules(viewId, body)
  .then((data) => {
    console.log(`putJourneyViewSchedules success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling putJourneyViewSchedules');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **viewId** | **String** | Journey View Id |  |
 **body** | **Object** | journeyViewSchedule |  |

### Return type

**JourneyViewSchedule**


## putJourneyViewVersion

> JourneyView putJourneyViewVersion(viewId, versionId, body)


PUT /api/v2/journey/views/{viewId}/versions/{versionId}

Update a Journey View by ID and version

does not create a new version

Requires ALL permissions:

* journey:views:edit

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.JourneyApi();

let viewId = "viewId_example"; // String | viewId
let versionId = "versionId_example"; // String | versionId
let body = {}; // Object | JourneyView

apiInstance.putJourneyViewVersion(viewId, versionId, body)
  .then((data) => {
    console.log(`putJourneyViewVersion success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling putJourneyViewVersion');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **viewId** | **String** | viewId |  |
 **versionId** | **String** | versionId |  |
 **body** | **Object** | JourneyView |  |

### Return type

**JourneyView**


_purecloud-platform-client-v2@229.1.0_
