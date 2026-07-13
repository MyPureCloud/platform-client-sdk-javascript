# JourneyApi

# platformClient.JourneyApi

All URIs are relative to *https://api.mypurecloud.com*

| Method | HTTP request | Description |
| ------------- | ------------- | ------------- |
[**deleteAnalyticsJourneysAggregatesJob**](JourneyApi#deleteAnalyticsJourneysAggregatesJob) | **DELETE** /api/v2/analytics/journeys/aggregates/jobs/{jobId} | Delete/cancel an async request for journey aggregates
[**deleteJourneyActionmap**](JourneyApi#deleteJourneyActionmap) | **DELETE** /api/v2/journey/actionmaps/{actionMapId} | Delete single action map.
[**deleteJourneyActiontemplate**](JourneyApi#deleteJourneyActiontemplate) | **DELETE** /api/v2/journey/actiontemplates/{actionTemplateId} | Delete a single action template.
[**deleteJourneyExternaleventsConfiguration**](JourneyApi#deleteJourneyExternaleventsConfiguration) | **DELETE** /api/v2/journey/externalevents/configurations/{configId} | Delete an external events configuration.
[**deleteJourneyExternaleventsSchema**](JourneyApi#deleteJourneyExternaleventsSchema) | **DELETE** /api/v2/journey/externalevents/schemas/{schemaId} | Delete a schema
[**deleteJourneyOutcome**](JourneyApi#deleteJourneyOutcome) | **DELETE** /api/v2/journey/outcomes/{outcomeId} | Deprecated. Delete an outcome.
[**deleteJourneyOutcomesPredictor**](JourneyApi#deleteJourneyOutcomesPredictor) | **DELETE** /api/v2/journey/outcomes/predictors/{predictorId} | Deprecated. Delete an outcome predictor.
[**deleteJourneySegment**](JourneyApi#deleteJourneySegment) | **DELETE** /api/v2/journey/segments/{segmentId} | Delete a segment.
[**deleteJourneyView**](JourneyApi#deleteJourneyView) | **DELETE** /api/v2/journey/views/{viewId} | Delete a Journey View by ID
[**deleteJourneyViewSchedules**](JourneyApi#deleteJourneyViewSchedules) | **DELETE** /api/v2/journey/views/{viewId}/schedules | Delete the Schedule of a JourneyView
[**getAnalyticsJourneysAggregatesJob**](JourneyApi#getAnalyticsJourneysAggregatesJob) | **GET** /api/v2/analytics/journeys/aggregates/jobs/{jobId} | Get status for async query for journey aggregates
[**getAnalyticsJourneysAggregatesJobResults**](JourneyApi#getAnalyticsJourneysAggregatesJobResults) | **GET** /api/v2/analytics/journeys/aggregates/jobs/{jobId}/results | Fetch a page of results for an async aggregates query
[**getExternalcontactsContactJourneySegments**](JourneyApi#getExternalcontactsContactJourneySegments) | **GET** /api/v2/externalcontacts/contacts/{contactId}/journey/segments | Retrieve segment assignments by external contact ID.
[**getExternalcontactsContactJourneySessions**](JourneyApi#getExternalcontactsContactJourneySessions) | **GET** /api/v2/externalcontacts/contacts/{contactId}/journey/sessions | Retrieve all sessions for a given external contact.
[**getJourneyActionmap**](JourneyApi#getJourneyActionmap) | **GET** /api/v2/journey/actionmaps/{actionMapId} | Retrieve a single action map.
[**getJourneyActionmaps**](JourneyApi#getJourneyActionmaps) | **GET** /api/v2/journey/actionmaps | Retrieve all action maps.
[**getJourneyActionmapsEstimatesJob**](JourneyApi#getJourneyActionmapsEstimatesJob) | **GET** /api/v2/journey/actionmaps/estimates/jobs/{jobId} | Deprecated. Get status of job.
[**getJourneyActionmapsEstimatesJobResults**](JourneyApi#getJourneyActionmapsEstimatesJobResults) | **GET** /api/v2/journey/actionmaps/estimates/jobs/{jobId}/results | Deprecated. Get estimates from completed job.
[**getJourneyActiontarget**](JourneyApi#getJourneyActiontarget) | **GET** /api/v2/journey/actiontargets/{actionTargetId} | Deprecated. Retrieve a single action target.
[**getJourneyActiontargets**](JourneyApi#getJourneyActiontargets) | **GET** /api/v2/journey/actiontargets | Deprecated. Retrieve all action targets.
[**getJourneyActiontemplate**](JourneyApi#getJourneyActiontemplate) | **GET** /api/v2/journey/actiontemplates/{actionTemplateId} | Retrieve a single action template.
[**getJourneyActiontemplates**](JourneyApi#getJourneyActiontemplates) | **GET** /api/v2/journey/actiontemplates | Retrieve all action templates.
[**getJourneyDeploymentCustomerPing**](JourneyApi#getJourneyDeploymentCustomerPing) | **GET** /api/v2/journey/deployments/{deploymentId}/customers/{customerCookieId}/ping | Send a ping.
[**getJourneyExternaleventsConfiguration**](JourneyApi#getJourneyExternaleventsConfiguration) | **GET** /api/v2/journey/externalevents/configurations/{configId} | Get an external events configuration
[**getJourneyExternaleventsConfigurations**](JourneyApi#getJourneyExternaleventsConfigurations) | **GET** /api/v2/journey/externalevents/configurations | Get all external event configurations.
[**getJourneyExternaleventsSchema**](JourneyApi#getJourneyExternaleventsSchema) | **GET** /api/v2/journey/externalevents/schemas/{schemaId} | Get a schema
[**getJourneyExternaleventsSchemaVersion**](JourneyApi#getJourneyExternaleventsSchemaVersion) | **GET** /api/v2/journey/externalevents/schemas/{schemaId}/versions/{versionId} | Get a specific version of a schema
[**getJourneyExternaleventsSchemaVersions**](JourneyApi#getJourneyExternaleventsSchemaVersions) | **GET** /api/v2/journey/externalevents/schemas/{schemaId}/versions | Get all versions of a External Events schema
[**getJourneyExternaleventsSchemas**](JourneyApi#getJourneyExternaleventsSchemas) | **GET** /api/v2/journey/externalevents/schemas | Get a list of schemas.
[**getJourneyExternaleventsSchemasCoretype**](JourneyApi#getJourneyExternaleventsSchemasCoretype) | **GET** /api/v2/journey/externalevents/schemas/coretypes/{coreTypeName} | Get a core type from which all schemas are built
[**getJourneyExternaleventsSchemasCoretypes**](JourneyApi#getJourneyExternaleventsSchemasCoretypes) | **GET** /api/v2/journey/externalevents/schemas/coretypes | Get the list of core types enabled for a specific namespace.
[**getJourneyExternaleventsSchemasLimits**](JourneyApi#getJourneyExternaleventsSchemasLimits) | **GET** /api/v2/journey/externalevents/schemas/limits | Get quantitative limits on schemas
[**getJourneyOutcome**](JourneyApi#getJourneyOutcome) | **GET** /api/v2/journey/outcomes/{outcomeId} | Deprecated. Retrieve a single outcome.
[**getJourneyOutcomes**](JourneyApi#getJourneyOutcomes) | **GET** /api/v2/journey/outcomes | Deprecated. Retrieve all outcomes.
[**getJourneyOutcomesAttributionsJob**](JourneyApi#getJourneyOutcomesAttributionsJob) | **GET** /api/v2/journey/outcomes/attributions/jobs/{jobId} | Deprecated. Get job status.
[**getJourneyOutcomesAttributionsJobResults**](JourneyApi#getJourneyOutcomesAttributionsJobResults) | **GET** /api/v2/journey/outcomes/attributions/jobs/{jobId}/results | Deprecated. Get outcome attribution entities from completed job.
[**getJourneyOutcomesPredictor**](JourneyApi#getJourneyOutcomesPredictor) | **GET** /api/v2/journey/outcomes/predictors/{predictorId} | Deprecated. Retrieve a single outcome predictor.
[**getJourneyOutcomesPredictors**](JourneyApi#getJourneyOutcomesPredictors) | **GET** /api/v2/journey/outcomes/predictors | Deprecated. Retrieve all outcome predictors.
[**getJourneySegment**](JourneyApi#getJourneySegment) | **GET** /api/v2/journey/segments/{segmentId} | Retrieve a single segment.
[**getJourneySegments**](JourneyApi#getJourneySegments) | **GET** /api/v2/journey/segments | Retrieve all segments.
[**getJourneySession**](JourneyApi#getJourneySession) | **GET** /api/v2/journey/sessions/{sessionId} | Retrieve a single session.
[**getJourneySessionEvents**](JourneyApi#getJourneySessionEvents) | **GET** /api/v2/journey/sessions/{sessionId}/events | Retrieve all events for a given session.
[**getJourneySessionOutcomescores**](JourneyApi#getJourneySessionOutcomescores) | **GET** /api/v2/journey/sessions/{sessionId}/outcomescores | Deprecated. Retrieve latest outcome score associated with a session for all outcomes.
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
[**getJourneyViewsEventdefinitionsExternal**](JourneyApi#getJourneyViewsEventdefinitionsExternal) | **GET** /api/v2/journey/views/eventdefinitions/external | Get external events for journey views
[**getJourneyViewsEventdefinitionsExternalChanges**](JourneyApi#getJourneyViewsEventdefinitionsExternalChanges) | **GET** /api/v2/journey/views/eventdefinitions/external/changes | Get changes in external event definitions
[**getJourneyViewsJobs**](JourneyApi#getJourneyViewsJobs) | **GET** /api/v2/journey/views/jobs | Get the jobs for an organization.
[**getJourneyViewsJobsMe**](JourneyApi#getJourneyViewsJobsMe) | **GET** /api/v2/journey/views/jobs/me | Get my jobs
[**getJourneyViewsSchedules**](JourneyApi#getJourneyViewsSchedules) | **GET** /api/v2/journey/views/schedules | Get the journey schedules for an organization.
[**patchJourneyActionmap**](JourneyApi#patchJourneyActionmap) | **PATCH** /api/v2/journey/actionmaps/{actionMapId} | Update single action map.
[**patchJourneyActiontarget**](JourneyApi#patchJourneyActiontarget) | **PATCH** /api/v2/journey/actiontargets/{actionTargetId} | Deprecated. Update a single action target.
[**patchJourneyActiontemplate**](JourneyApi#patchJourneyActiontemplate) | **PATCH** /api/v2/journey/actiontemplates/{actionTemplateId} | Update a single action template.
[**patchJourneyExternaleventsConfiguration**](JourneyApi#patchJourneyExternaleventsConfiguration) | **PATCH** /api/v2/journey/externalevents/configurations/{configId} | Update an external events configuration.
[**patchJourneyOutcome**](JourneyApi#patchJourneyOutcome) | **PATCH** /api/v2/journey/outcomes/{outcomeId} | Deprecated. Update an outcome.
[**patchJourneySegment**](JourneyApi#patchJourneySegment) | **PATCH** /api/v2/journey/segments/{segmentId} | Update a segment.
[**patchJourneyViewVersionJob**](JourneyApi#patchJourneyViewVersionJob) | **PATCH** /api/v2/journey/views/{viewId}/versions/{journeyVersionId}/jobs/{jobId} | Update the job for a journey view version. Only the status can be changed and only to Cancelled
[**postAnalyticsJourneysAggregatesJobs**](JourneyApi#postAnalyticsJourneysAggregatesJobs) | **POST** /api/v2/analytics/journeys/aggregates/jobs | Query for journey aggregates asynchronously
[**postAnalyticsJourneysAggregatesQuery**](JourneyApi#postAnalyticsJourneysAggregatesQuery) | **POST** /api/v2/analytics/journeys/aggregates/query | Query for journey aggregates
[**postExternalcontactsContactJourneySegments**](JourneyApi#postExternalcontactsContactJourneySegments) | **POST** /api/v2/externalcontacts/contacts/{contactId}/journey/segments | Assign/Unassign up to 10 segments to/from an external contact or, if a segment is already assigned, update the expiry date of the segment assignment. Any unprocessed segment assignments are returned in the body for the client to retry, in the event of a partial success.
[**postJourneyActionmaps**](JourneyApi#postJourneyActionmaps) | **POST** /api/v2/journey/actionmaps | Create an action map.
[**postJourneyActionmapsEstimatesJobs**](JourneyApi#postJourneyActionmapsEstimatesJobs) | **POST** /api/v2/journey/actionmaps/estimates/jobs | Deprecated. Query for estimates
[**postJourneyActiontemplates**](JourneyApi#postJourneyActiontemplates) | **POST** /api/v2/journey/actiontemplates | Create a single action template.
[**postJourneyDeploymentActionevent**](JourneyApi#postJourneyDeploymentActionevent) | **POST** /api/v2/journey/deployments/{deploymentId}/actionevent | Sends an action event, which is used for changing the state of actions that have been offered to the user.
[**postJourneyDeploymentAppevents**](JourneyApi#postJourneyDeploymentAppevents) | **POST** /api/v2/journey/deployments/{deploymentId}/appevents | Send a journey app event, used for tracking customer activity on an application.
[**postJourneyDeploymentWebevents**](JourneyApi#postJourneyDeploymentWebevents) | **POST** /api/v2/journey/deployments/{deploymentId}/webevents | Send a journey web event, used for tracking customer activity on a website.
[**postJourneyExternaleventsConfigurationEvents**](JourneyApi#postJourneyExternaleventsConfigurationEvents) | **POST** /api/v2/journey/externalevents/configurations/{configurationId}/events | Create external events
[**postJourneyExternaleventsConfigurations**](JourneyApi#postJourneyExternaleventsConfigurations) | **POST** /api/v2/journey/externalevents/configurations | Create an external events configuration.
[**postJourneyExternaleventsSchemas**](JourneyApi#postJourneyExternaleventsSchemas) | **POST** /api/v2/journey/externalevents/schemas | Create a schema
[**postJourneyFlowsPathsQuery**](JourneyApi#postJourneyFlowsPathsQuery) | **POST** /api/v2/journey/flows/paths/query | Query for flow paths.
[**postJourneyOutcomes**](JourneyApi#postJourneyOutcomes) | **POST** /api/v2/journey/outcomes | Deprecated. Create an outcome.
[**postJourneyOutcomesAttributionsJobs**](JourneyApi#postJourneyOutcomesAttributionsJobs) | **POST** /api/v2/journey/outcomes/attributions/jobs | Deprecated. Create Outcome Attributions
[**postJourneyOutcomesPredictors**](JourneyApi#postJourneyOutcomesPredictors) | **POST** /api/v2/journey/outcomes/predictors | Deprecated. Create an outcome predictor.
[**postJourneySegments**](JourneyApi#postJourneySegments) | **POST** /api/v2/journey/segments | Create a segment.
[**postJourneyViewSchedules**](JourneyApi#postJourneyViewSchedules) | **POST** /api/v2/journey/views/{viewId}/schedules | Add a new Schedule to a JourneyView
[**postJourneyViewVersionJobs**](JourneyApi#postJourneyViewVersionJobs) | **POST** /api/v2/journey/views/{viewId}/versions/{journeyVersionId}/jobs | Submit a job request for a journey view version.
[**postJourneyViewVersions**](JourneyApi#postJourneyViewVersions) | **POST** /api/v2/journey/views/{viewId}/versions | Update a Journey View by ID
[**postJourneyViews**](JourneyApi#postJourneyViews) | **POST** /api/v2/journey/views | Create a new Journey View
[**postJourneyViewsEncodingsValidate**](JourneyApi#postJourneyViewsEncodingsValidate) | **POST** /api/v2/journey/views/encodings/validate | Validate whether an encoding exist for a label/value combination.
[**putJourneyExternaleventsSchema**](JourneyApi#putJourneyExternaleventsSchema) | **PUT** /api/v2/journey/externalevents/schemas/{schemaId} | Update a schema
[**putJourneyViewSchedules**](JourneyApi#putJourneyViewSchedules) | **PUT** /api/v2/journey/views/{viewId}/schedules | Update the Schedule for a JourneyView
[**putJourneyViewVersion**](JourneyApi#putJourneyViewVersion) | **PUT** /api/v2/journey/views/{viewId}/versions/{versionId} | Update a Journey View by ID and version
[**putJourneyViewsEventdefinition**](JourneyApi#putJourneyViewsEventdefinition) | **PUT** /api/v2/journey/views/eventdefinitions/{eventDefinitionId} | Update external event for journey views
[**putJourneyViewsEventdefinitionActivate**](JourneyApi#putJourneyViewsEventdefinitionActivate) | **PUT** /api/v2/journey/views/eventdefinitions/{eventDefinitionId}/activate | Activate external event for journey views



## deleteAnalyticsJourneysAggregatesJob

> void deleteAnalyticsJourneysAggregatesJob(jobId, opts)


DELETE /api/v2/analytics/journeys/aggregates/jobs/{jobId}

Delete/cancel an async request for journey aggregates

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
  'customHeaders': {  // Object.<string, string> | Request Custom Headers
    'X-Service-Name': 'customer-service',
    'X-Request-ID': 'req-12345'
  }
};

apiInstance.deleteAnalyticsJourneysAggregatesJob(jobId, opts)
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
 **customHeaders** | **Object.<string, string>** | Request Custom Headers | [optional] |

### Return type

void (no response body)


## deleteJourneyActionmap

> void deleteJourneyActionmap(actionMapId, opts)


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
let opts = { 
  'customHeaders': {  // Object.<string, string> | Request Custom Headers
    'X-Service-Name': 'customer-service',
    'X-Request-ID': 'req-12345'
  }
};

apiInstance.deleteJourneyActionmap(actionMapId, opts)
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
 **customHeaders** | **Object.<string, string>** | Request Custom Headers | [optional] |

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
  'hardDelete': true, // Boolean | Determines whether Action Template should be soft-deleted (have it's state set to deleted) or hard-deleted (permanently removed). Set to false (soft-delete) by default.
  'customHeaders': {  // Object.<string, string> | Request Custom Headers
    'X-Service-Name': 'customer-service',
    'X-Request-ID': 'req-12345'
  }
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
 **customHeaders** | **Object.<string, string>** | Request Custom Headers | [optional] |

### Return type

void (no response body)


## deleteJourneyExternaleventsConfiguration

> void deleteJourneyExternaleventsConfiguration(configId, opts)


DELETE /api/v2/journey/externalevents/configurations/{configId}

Delete an external events configuration.

Requires ANY permissions:

* journey:externalEventsConfiguration:delete

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.JourneyApi();

let configId = "configId_example"; // String | The ID of the external event configuration.
let opts = { 
  'customHeaders': {  // Object.<string, string> | Request Custom Headers
    'X-Service-Name': 'customer-service',
    'X-Request-ID': 'req-12345'
  }
};

apiInstance.deleteJourneyExternaleventsConfiguration(configId, opts)
  .then(() => {
    console.log('deleteJourneyExternaleventsConfiguration returned successfully.');
  })
  .catch((err) => {
    console.log('There was a failure calling deleteJourneyExternaleventsConfiguration');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **configId** | **String** | The ID of the external event configuration. |  |
 **customHeaders** | **Object.<string, string>** | Request Custom Headers | [optional] |

### Return type

void (no response body)


## deleteJourneyExternaleventsSchema

> void deleteJourneyExternaleventsSchema(schemaId, opts)


DELETE /api/v2/journey/externalevents/schemas/{schemaId}

Delete a schema

Requires ANY permissions:

* journey:externalEventsSchema:delete

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.JourneyApi();

let schemaId = "schemaId_example"; // String | Schema ID
let opts = { 
  'customHeaders': {  // Object.<string, string> | Request Custom Headers
    'X-Service-Name': 'customer-service',
    'X-Request-ID': 'req-12345'
  }
};

apiInstance.deleteJourneyExternaleventsSchema(schemaId, opts)
  .then(() => {
    console.log('deleteJourneyExternaleventsSchema returned successfully.');
  })
  .catch((err) => {
    console.log('There was a failure calling deleteJourneyExternaleventsSchema');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **schemaId** | **String** | Schema ID |  |
 **customHeaders** | **Object.<string, string>** | Request Custom Headers | [optional] |

### Return type

void (no response body)


## deleteJourneyOutcome

> void deleteJourneyOutcome(outcomeId, opts)

:::{"alert":"warning","title":"Deprecated","collapsible":false,"autoCollapse":false}
This resource has been deprecated
:::

DELETE /api/v2/journey/outcomes/{outcomeId}

Deprecated. Delete an outcome.

Journey Outcomes is being removed. See https://help.genesys.cloud/announcements/genesys-cloud/deprecation-journey-outcomes/

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
let opts = { 
  'customHeaders': {  // Object.<string, string> | Request Custom Headers
    'X-Service-Name': 'customer-service',
    'X-Request-ID': 'req-12345'
  }
};

apiInstance.deleteJourneyOutcome(outcomeId, opts)
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
 **customHeaders** | **Object.<string, string>** | Request Custom Headers | [optional] |

### Return type

void (no response body)


## deleteJourneyOutcomesPredictor

> void deleteJourneyOutcomesPredictor(predictorId, opts)

:::{"alert":"warning","title":"Deprecated","collapsible":false,"autoCollapse":false}
This resource has been deprecated
:::

DELETE /api/v2/journey/outcomes/predictors/{predictorId}

Deprecated. Delete an outcome predictor.

Journey Outcomes is being removed. See https://help.genesys.cloud/announcements/genesys-cloud/deprecation-journey-outcomes/

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
let opts = { 
  'customHeaders': {  // Object.<string, string> | Request Custom Headers
    'X-Service-Name': 'customer-service',
    'X-Request-ID': 'req-12345'
  }
};

apiInstance.deleteJourneyOutcomesPredictor(predictorId, opts)
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
 **customHeaders** | **Object.<string, string>** | Request Custom Headers | [optional] |

### Return type

void (no response body)


## deleteJourneySegment

> void deleteJourneySegment(segmentId, opts)


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
let opts = { 
  'customHeaders': {  // Object.<string, string> | Request Custom Headers
    'X-Service-Name': 'customer-service',
    'X-Request-ID': 'req-12345'
  }
};

apiInstance.deleteJourneySegment(segmentId, opts)
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
 **customHeaders** | **Object.<string, string>** | Request Custom Headers | [optional] |

### Return type

void (no response body)


## deleteJourneyView

> void deleteJourneyView(viewId, opts)


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
let opts = { 
  'customHeaders': {  // Object.<string, string> | Request Custom Headers
    'X-Service-Name': 'customer-service',
    'X-Request-ID': 'req-12345'
  }
};

apiInstance.deleteJourneyView(viewId, opts)
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
 **customHeaders** | **Object.<string, string>** | Request Custom Headers | [optional] |

### Return type

void (no response body)


## deleteJourneyViewSchedules

> JourneyViewSchedule deleteJourneyViewSchedules(viewId, opts)


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
let opts = { 
  'customHeaders': {  // Object.<string, string> | Request Custom Headers
    'X-Service-Name': 'customer-service',
    'X-Request-ID': 'req-12345'
  }
};

apiInstance.deleteJourneyViewSchedules(viewId, opts)
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
 **customHeaders** | **Object.<string, string>** | Request Custom Headers | [optional] |

### Return type

**JourneyViewSchedule**


## getAnalyticsJourneysAggregatesJob

> AsyncQueryStatus getAnalyticsJourneysAggregatesJob(jobId, opts)


GET /api/v2/analytics/journeys/aggregates/jobs/{jobId}

Get status for async query for journey aggregates

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
  'customHeaders': {  // Object.<string, string> | Request Custom Headers
    'X-Service-Name': 'customer-service',
    'X-Request-ID': 'req-12345'
  }
};

apiInstance.getAnalyticsJourneysAggregatesJob(jobId, opts)
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
 **customHeaders** | **Object.<string, string>** | Request Custom Headers | [optional] |

### Return type

**AsyncQueryStatus**


## getAnalyticsJourneysAggregatesJobResults

> JourneyAsyncAggregateQueryResponse getAnalyticsJourneysAggregatesJobResults(jobId, opts)


GET /api/v2/analytics/journeys/aggregates/jobs/{jobId}/results

Fetch a page of results for an async aggregates query

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
  'cursor': "cursor_example", // String | Cursor token to retrieve next page
  'customHeaders': {  // Object.<string, string> | Request Custom Headers
    'X-Service-Name': 'customer-service',
    'X-Request-ID': 'req-12345'
  }
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
 **customHeaders** | **Object.<string, string>** | Request Custom Headers | [optional] |

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
  'limit': 3.4, // Number | Number of entities to return. Default of 25, maximum of 500.
  'customHeaders': {  // Object.<string, string> | Request Custom Headers
    'X-Service-Name': 'customer-service',
    'X-Request-ID': 'req-12345'
  }
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
 **customHeaders** | **Object.<string, string>** | Request Custom Headers | [optional] |

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
  'includeMerged': true, // Boolean | Indicates whether to return sessions from all external contacts in the merge-set of the given one.
  'customHeaders': {  // Object.<string, string> | Request Custom Headers
    'X-Service-Name': 'customer-service',
    'X-Request-ID': 'req-12345'
  }
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
 **customHeaders** | **Object.<string, string>** | Request Custom Headers | [optional] |

### Return type

**SessionListing**


## getJourneyActionmap

> ActionMap getJourneyActionmap(actionMapId, opts)


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
let opts = { 
  'customHeaders': {  // Object.<string, string> | Request Custom Headers
    'X-Service-Name': 'customer-service',
    'X-Request-ID': 'req-12345'
  }
};

apiInstance.getJourneyActionmap(actionMapId, opts)
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
 **customHeaders** | **Object.<string, string>** | Request Custom Headers | [optional] |

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
  'queryValue': "queryValue_example", // String | Value to query on using fuzzy matching. Requires 'queryFields' to also be set.
  'customHeaders': {  // Object.<string, string> | Request Custom Headers
    'X-Service-Name': 'customer-service',
    'X-Request-ID': 'req-12345'
  }
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
 **queryValue** | **String** | Value to query on using fuzzy matching. Requires 'queryFields' to also be set. | [optional]  |
 **customHeaders** | **Object.<string, string>** | Request Custom Headers | [optional] |

### Return type

**ActionMapListing**


## getJourneyActionmapsEstimatesJob

> **&#39;String&#39;** getJourneyActionmapsEstimatesJob(jobId, opts)

:::{"alert":"warning","title":"Deprecated","collapsible":false,"autoCollapse":false}
This resource has been deprecated
:::

GET /api/v2/journey/actionmaps/estimates/jobs/{jobId}

Deprecated. Get status of job.

Journey Outcomes is being removed. See https://help.genesys.cloud/announcements/genesys-cloud/deprecation-journey-outcomes/

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
let opts = { 
  'customHeaders': {  // Object.<string, string> | Request Custom Headers
    'X-Service-Name': 'customer-service',
    'X-Request-ID': 'req-12345'
  }
};

apiInstance.getJourneyActionmapsEstimatesJob(jobId, opts)
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
 **customHeaders** | **Object.<string, string>** | Request Custom Headers | [optional] |

### Return type

**&#39;String&#39;**


## getJourneyActionmapsEstimatesJobResults

> ActionMapEstimateResult getJourneyActionmapsEstimatesJobResults(jobId, opts)

:::{"alert":"warning","title":"Deprecated","collapsible":false,"autoCollapse":false}
This resource has been deprecated
:::

GET /api/v2/journey/actionmaps/estimates/jobs/{jobId}/results

Deprecated. Get estimates from completed job.

Journey Outcomes is being removed. See https://help.genesys.cloud/announcements/genesys-cloud/deprecation-journey-outcomes/

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
let opts = { 
  'customHeaders': {  // Object.<string, string> | Request Custom Headers
    'X-Service-Name': 'customer-service',
    'X-Request-ID': 'req-12345'
  }
};

apiInstance.getJourneyActionmapsEstimatesJobResults(jobId, opts)
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
 **customHeaders** | **Object.<string, string>** | Request Custom Headers | [optional] |

### Return type

**ActionMapEstimateResult**


## getJourneyActiontarget

> ActionTarget getJourneyActiontarget(actionTargetId, opts)

:::{"alert":"warning","title":"Deprecated","collapsible":false,"autoCollapse":false}
This resource has been deprecated
:::

GET /api/v2/journey/actiontargets/{actionTargetId}

Deprecated. Retrieve a single action target.

ACD Chat v2.0 in Genesys Predictive Engagement is deprecated and being removed. See https://community.genesys.com/discussion/deprecation-acd-chat-v20-support-in-genesys-predictive-engagement

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
let opts = { 
  'customHeaders': {  // Object.<string, string> | Request Custom Headers
    'X-Service-Name': 'customer-service',
    'X-Request-ID': 'req-12345'
  }
};

apiInstance.getJourneyActiontarget(actionTargetId, opts)
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
 **customHeaders** | **Object.<string, string>** | Request Custom Headers | [optional] |

### Return type

**ActionTarget**


## getJourneyActiontargets

> ActionTargetListing getJourneyActiontargets(opts)

:::{"alert":"warning","title":"Deprecated","collapsible":false,"autoCollapse":false}
This resource has been deprecated
:::

GET /api/v2/journey/actiontargets

Deprecated. Retrieve all action targets.

ACD Chat v2.0 in Genesys Predictive Engagement is deprecated and being removed. See https://community.genesys.com/discussion/deprecation-acd-chat-v20-support-in-genesys-predictive-engagement

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
  'pageSize': 25, // Number | Page size
  'customHeaders': {  // Object.<string, string> | Request Custom Headers
    'X-Service-Name': 'customer-service',
    'X-Request-ID': 'req-12345'
  }
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
 **customHeaders** | **Object.<string, string>** | Request Custom Headers | [optional] |

### Return type

**ActionTargetListing**


## getJourneyActiontemplate

> ActionTemplate getJourneyActiontemplate(actionTemplateId, opts)


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
let opts = { 
  'customHeaders': {  // Object.<string, string> | Request Custom Headers
    'X-Service-Name': 'customer-service',
    'X-Request-ID': 'req-12345'
  }
};

apiInstance.getJourneyActiontemplate(actionTemplateId, opts)
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
 **customHeaders** | **Object.<string, string>** | Request Custom Headers | [optional] |

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
  'queryValue': "queryValue_example", // String | Value to query on using fuzzy matching. Requires 'queryFields' to also be set.
  'customHeaders': {  // Object.<string, string> | Request Custom Headers
    'X-Service-Name': 'customer-service',
    'X-Request-ID': 'req-12345'
  }
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
 **queryValue** | **String** | Value to query on using fuzzy matching. Requires 'queryFields' to also be set. | [optional]  |
 **customHeaders** | **Object.<string, string>** | Request Custom Headers | [optional] |

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
  'sinceLastBeaconMilliseconds': 3.4, // Number | How long (milliseconds) since the last app event or beacon was sent. The response may return a pollInternvalMilliseconds to reduce the frequency of pings.
  'customHeaders': {  // Object.<string, string> | Request Custom Headers
    'X-Service-Name': 'customer-service',
    'X-Request-ID': 'req-12345'
  }
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
 **customHeaders** | **Object.<string, string>** | Request Custom Headers | [optional] |

### Return type

**DeploymentPing**


## getJourneyExternaleventsConfiguration

> ExternalEventsConfiguration getJourneyExternaleventsConfiguration(configId, opts)


GET /api/v2/journey/externalevents/configurations/{configId}

Get an external events configuration

Requires ANY permissions:

* journey:externalEventsConfiguration:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.JourneyApi();

let configId = "configId_example"; // String | The ID of the external event configuration.
let opts = { 
  'customHeaders': {  // Object.<string, string> | Request Custom Headers
    'X-Service-Name': 'customer-service',
    'X-Request-ID': 'req-12345'
  }
};

apiInstance.getJourneyExternaleventsConfiguration(configId, opts)
  .then((data) => {
    console.log(`getJourneyExternaleventsConfiguration success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getJourneyExternaleventsConfiguration');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **configId** | **String** | The ID of the external event configuration. |  |
 **customHeaders** | **Object.<string, string>** | Request Custom Headers | [optional] |

### Return type

**ExternalEventsConfiguration**


## getJourneyExternaleventsConfigurations

> ExternalEventsConfigurationListing getJourneyExternaleventsConfigurations(opts)


GET /api/v2/journey/externalevents/configurations

Get all external event configurations.

Requires ANY permissions:

* journey:externalEventsConfiguration:view

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
  'pageSize': 20, // Number | Page size
  'pageNumber': 1, // Number | Page number
  'customHeaders': {  // Object.<string, string> | Request Custom Headers
    'X-Service-Name': 'customer-service',
    'X-Request-ID': 'req-12345'
  }
};

apiInstance.getJourneyExternaleventsConfigurations(opts)
  .then((data) => {
    console.log(`getJourneyExternaleventsConfigurations success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getJourneyExternaleventsConfigurations');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **pageSize** | **Number** | Page size | [optional] [default to 20] |
 **pageNumber** | **Number** | Page number | [optional] [default to 1] |
 **customHeaders** | **Object.<string, string>** | Request Custom Headers | [optional] |

### Return type

**ExternalEventsConfigurationListing**


## getJourneyExternaleventsSchema

> JourneyExternalEventsSchema getJourneyExternaleventsSchema(schemaId, opts)


GET /api/v2/journey/externalevents/schemas/{schemaId}

Get a schema

Requires ANY permissions:

* journey:externalEventsSchema:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.JourneyApi();

let schemaId = "schemaId_example"; // String | Schema ID
let opts = { 
  'customHeaders': {  // Object.<string, string> | Request Custom Headers
    'X-Service-Name': 'customer-service',
    'X-Request-ID': 'req-12345'
  }
};

apiInstance.getJourneyExternaleventsSchema(schemaId, opts)
  .then((data) => {
    console.log(`getJourneyExternaleventsSchema success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getJourneyExternaleventsSchema');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **schemaId** | **String** | Schema ID |  |
 **customHeaders** | **Object.<string, string>** | Request Custom Headers | [optional] |

### Return type

**JourneyExternalEventsSchema**


## getJourneyExternaleventsSchemaVersion

> JourneyExternalEventsSchema getJourneyExternaleventsSchemaVersion(schemaId, versionId, opts)


GET /api/v2/journey/externalevents/schemas/{schemaId}/versions/{versionId}

Get a specific version of a schema

Requires ANY permissions:

* journey:externalEventsSchema:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.JourneyApi();

let schemaId = "schemaId_example"; // String | Schema ID
let versionId = "versionId_example"; // String | Schema version
let opts = { 
  'customHeaders': {  // Object.<string, string> | Request Custom Headers
    'X-Service-Name': 'customer-service',
    'X-Request-ID': 'req-12345'
  }
};

apiInstance.getJourneyExternaleventsSchemaVersion(schemaId, versionId, opts)
  .then((data) => {
    console.log(`getJourneyExternaleventsSchemaVersion success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getJourneyExternaleventsSchemaVersion');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **schemaId** | **String** | Schema ID |  |
 **versionId** | **String** | Schema version |  |
 **customHeaders** | **Object.<string, string>** | Request Custom Headers | [optional] |

### Return type

**JourneyExternalEventsSchema**


## getJourneyExternaleventsSchemaVersions

> JourneyExternalEventsSchemaListing getJourneyExternaleventsSchemaVersions(schemaId, opts)


GET /api/v2/journey/externalevents/schemas/{schemaId}/versions

Get all versions of a External Events schema

Requires ANY permissions:

* journey:externalEventsSchema:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.JourneyApi();

let schemaId = "schemaId_example"; // String | Schema ID
let opts = { 
  'customHeaders': {  // Object.<string, string> | Request Custom Headers
    'X-Service-Name': 'customer-service',
    'X-Request-ID': 'req-12345'
  }
};

apiInstance.getJourneyExternaleventsSchemaVersions(schemaId, opts)
  .then((data) => {
    console.log(`getJourneyExternaleventsSchemaVersions success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getJourneyExternaleventsSchemaVersions');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **schemaId** | **String** | Schema ID |  |
 **customHeaders** | **Object.<string, string>** | Request Custom Headers | [optional] |

### Return type

**JourneyExternalEventsSchemaListing**


## getJourneyExternaleventsSchemas

> JourneyExternalEventsSchemaListing getJourneyExternaleventsSchemas(opts)


GET /api/v2/journey/externalevents/schemas

Get a list of schemas.

Requires ANY permissions:

* journey:externalEventsSchema:view

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
  'customHeaders': {  // Object.<string, string> | Request Custom Headers
    'X-Service-Name': 'customer-service',
    'X-Request-ID': 'req-12345'
  }
};

apiInstance.getJourneyExternaleventsSchemas(opts)
  .then((data) => {
    console.log(`getJourneyExternaleventsSchemas success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getJourneyExternaleventsSchemas');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **customHeaders** | **Object.<string, string>** | Request Custom Headers | [optional] |

### Return type

**JourneyExternalEventsSchemaListing**


## getJourneyExternaleventsSchemasCoretype

> Coretype getJourneyExternaleventsSchemasCoretype(coreTypeName, opts)


GET /api/v2/journey/externalevents/schemas/coretypes/{coreTypeName}

Get a core type from which all schemas are built

Requires ANY permissions:

* journey:externalEventsSchema:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.JourneyApi();

let coreTypeName = "coreTypeName_example"; // String | Name of core type
let opts = { 
  'customHeaders': {  // Object.<string, string> | Request Custom Headers
    'X-Service-Name': 'customer-service',
    'X-Request-ID': 'req-12345'
  }
};

apiInstance.getJourneyExternaleventsSchemasCoretype(coreTypeName, opts)
  .then((data) => {
    console.log(`getJourneyExternaleventsSchemasCoretype success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getJourneyExternaleventsSchemasCoretype');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **coreTypeName** | **String** | Name of core type |  |
 **customHeaders** | **Object.<string, string>** | Request Custom Headers | [optional] |

### Return type

**Coretype**


## getJourneyExternaleventsSchemasCoretypes

> CoretypeListing getJourneyExternaleventsSchemasCoretypes(opts)


GET /api/v2/journey/externalevents/schemas/coretypes

Get the list of core types enabled for a specific namespace.

Requires ANY permissions:

* journey:externalEventsSchema:view

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
  'customHeaders': {  // Object.<string, string> | Request Custom Headers
    'X-Service-Name': 'customer-service',
    'X-Request-ID': 'req-12345'
  }
};

apiInstance.getJourneyExternaleventsSchemasCoretypes(opts)
  .then((data) => {
    console.log(`getJourneyExternaleventsSchemasCoretypes success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getJourneyExternaleventsSchemasCoretypes');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **customHeaders** | **Object.<string, string>** | Request Custom Headers | [optional] |

### Return type

**CoretypeListing**


## getJourneyExternaleventsSchemasLimits

> SchemaQuantityLimits getJourneyExternaleventsSchemasLimits(opts)


GET /api/v2/journey/externalevents/schemas/limits

Get quantitative limits on schemas

Requires ANY permissions:

* journey:externalEventsSchema:view

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
  'customHeaders': {  // Object.<string, string> | Request Custom Headers
    'X-Service-Name': 'customer-service',
    'X-Request-ID': 'req-12345'
  }
};

apiInstance.getJourneyExternaleventsSchemasLimits(opts)
  .then((data) => {
    console.log(`getJourneyExternaleventsSchemasLimits success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getJourneyExternaleventsSchemasLimits');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **customHeaders** | **Object.<string, string>** | Request Custom Headers | [optional] |

### Return type

**SchemaQuantityLimits**


## getJourneyOutcome

> Outcome getJourneyOutcome(outcomeId, opts)

:::{"alert":"warning","title":"Deprecated","collapsible":false,"autoCollapse":false}
This resource has been deprecated
:::

GET /api/v2/journey/outcomes/{outcomeId}

Deprecated. Retrieve a single outcome.

Journey Outcomes is being removed. See https://help.genesys.cloud/announcements/genesys-cloud/deprecation-journey-outcomes/

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
let opts = { 
  'customHeaders': {  // Object.<string, string> | Request Custom Headers
    'X-Service-Name': 'customer-service',
    'X-Request-ID': 'req-12345'
  }
};

apiInstance.getJourneyOutcome(outcomeId, opts)
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
 **customHeaders** | **Object.<string, string>** | Request Custom Headers | [optional] |

### Return type

**Outcome**


## getJourneyOutcomes

> OutcomeListing getJourneyOutcomes(opts)

:::{"alert":"warning","title":"Deprecated","collapsible":false,"autoCollapse":false}
This resource has been deprecated
:::

GET /api/v2/journey/outcomes

Deprecated. Retrieve all outcomes.

Journey Outcomes is being removed. See https://help.genesys.cloud/announcements/genesys-cloud/deprecation-journey-outcomes/

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
  'queryValue': "queryValue_example", // String | Value to query on using fuzzy matching. Requires 'queryFields' to also be set.
  'customHeaders': {  // Object.<string, string> | Request Custom Headers
    'X-Service-Name': 'customer-service',
    'X-Request-ID': 'req-12345'
  }
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
 **queryValue** | **String** | Value to query on using fuzzy matching. Requires 'queryFields' to also be set. | [optional]  |
 **customHeaders** | **Object.<string, string>** | Request Custom Headers | [optional] |

### Return type

**OutcomeListing**


## getJourneyOutcomesAttributionsJob

> OutcomeAttributionJobStateResponse getJourneyOutcomesAttributionsJob(jobId, opts)

:::{"alert":"warning","title":"Deprecated","collapsible":false,"autoCollapse":false}
This resource has been deprecated
:::

GET /api/v2/journey/outcomes/attributions/jobs/{jobId}

Deprecated. Get job status.

Journey Outcomes is being removed. See https://help.genesys.cloud/announcements/genesys-cloud/deprecation-journey-outcomes/

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
let opts = { 
  'customHeaders': {  // Object.<string, string> | Request Custom Headers
    'X-Service-Name': 'customer-service',
    'X-Request-ID': 'req-12345'
  }
};

apiInstance.getJourneyOutcomesAttributionsJob(jobId, opts)
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
 **customHeaders** | **Object.<string, string>** | Request Custom Headers | [optional] |

### Return type

**OutcomeAttributionJobStateResponse**


## getJourneyOutcomesAttributionsJobResults

> OutcomeAttributionResponseListing getJourneyOutcomesAttributionsJobResults(jobId, opts)

:::{"alert":"warning","title":"Deprecated","collapsible":false,"autoCollapse":false}
This resource has been deprecated
:::

GET /api/v2/journey/outcomes/attributions/jobs/{jobId}/results

Deprecated. Get outcome attribution entities from completed job.

Journey Outcomes is being removed. See https://help.genesys.cloud/announcements/genesys-cloud/deprecation-journey-outcomes/

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
let opts = { 
  'customHeaders': {  // Object.<string, string> | Request Custom Headers
    'X-Service-Name': 'customer-service',
    'X-Request-ID': 'req-12345'
  }
};

apiInstance.getJourneyOutcomesAttributionsJobResults(jobId, opts)
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
 **customHeaders** | **Object.<string, string>** | Request Custom Headers | [optional] |

### Return type

**OutcomeAttributionResponseListing**


## getJourneyOutcomesPredictor

> OutcomePredictor getJourneyOutcomesPredictor(predictorId, opts)

:::{"alert":"warning","title":"Deprecated","collapsible":false,"autoCollapse":false}
This resource has been deprecated
:::

GET /api/v2/journey/outcomes/predictors/{predictorId}

Deprecated. Retrieve a single outcome predictor.

Journey Outcomes is being removed. See https://help.genesys.cloud/announcements/genesys-cloud/deprecation-journey-outcomes/

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
let opts = { 
  'customHeaders': {  // Object.<string, string> | Request Custom Headers
    'X-Service-Name': 'customer-service',
    'X-Request-ID': 'req-12345'
  }
};

apiInstance.getJourneyOutcomesPredictor(predictorId, opts)
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
 **customHeaders** | **Object.<string, string>** | Request Custom Headers | [optional] |

### Return type

**OutcomePredictor**


## getJourneyOutcomesPredictors

> OutcomePredictorListing getJourneyOutcomesPredictors(opts)

:::{"alert":"warning","title":"Deprecated","collapsible":false,"autoCollapse":false}
This resource has been deprecated
:::

GET /api/v2/journey/outcomes/predictors

Deprecated. Retrieve all outcome predictors.

Journey Outcomes is being removed. See https://help.genesys.cloud/announcements/genesys-cloud/deprecation-journey-outcomes/

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
let opts = { 
  'customHeaders': {  // Object.<string, string> | Request Custom Headers
    'X-Service-Name': 'customer-service',
    'X-Request-ID': 'req-12345'
  }
};

apiInstance.getJourneyOutcomesPredictors(opts)
  .then((data) => {
    console.log(`getJourneyOutcomesPredictors success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getJourneyOutcomesPredictors');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **customHeaders** | **Object.<string, string>** | Request Custom Headers | [optional] |

### Return type

**OutcomePredictorListing**


## getJourneySegment

> JourneySegment getJourneySegment(segmentId, opts)


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
let opts = { 
  'customHeaders': {  // Object.<string, string> | Request Custom Headers
    'X-Service-Name': 'customer-service',
    'X-Request-ID': 'req-12345'
  }
};

apiInstance.getJourneySegment(segmentId, opts)
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
 **customHeaders** | **Object.<string, string>** | Request Custom Headers | [optional] |

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
  'queryValue': "queryValue_example", // String | Value to query on using fuzzy matching. Requires 'queryFields' to also be set.
  'customHeaders': {  // Object.<string, string> | Request Custom Headers
    'X-Service-Name': 'customer-service',
    'X-Request-ID': 'req-12345'
  }
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
 **queryValue** | **String** | Value to query on using fuzzy matching. Requires 'queryFields' to also be set. | [optional]  |
 **customHeaders** | **Object.<string, string>** | Request Custom Headers | [optional] |

### Return type

**SegmentListing**


## getJourneySession

> Session getJourneySession(sessionId, opts)


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
let opts = { 
  'customHeaders': {  // Object.<string, string> | Request Custom Headers
    'X-Service-Name': 'customer-service',
    'X-Request-ID': 'req-12345'
  }
};

apiInstance.getJourneySession(sessionId, opts)
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
 **customHeaders** | **Object.<string, string>** | Request Custom Headers | [optional] |

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
  'eventType': "eventType_example", // String | A comma separated list of journey event types to include in the results.
  'customHeaders': {  // Object.<string, string> | Request Custom Headers
    'X-Service-Name': 'customer-service',
    'X-Request-ID': 'req-12345'
  }
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
 **customHeaders** | **Object.<string, string>** | Request Custom Headers | [optional] |

### Return type

**EventListing**


## getJourneySessionOutcomescores

> OutcomeScoresResult getJourneySessionOutcomescores(sessionId, opts)

:::{"alert":"warning","title":"Deprecated","collapsible":false,"autoCollapse":false}
This resource has been deprecated
:::

GET /api/v2/journey/sessions/{sessionId}/outcomescores

Deprecated. Retrieve latest outcome score associated with a session for all outcomes.

Journey Outcomes is being removed. See https://help.genesys.cloud/announcements/genesys-cloud/deprecation-journey-outcomes/

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
let opts = { 
  'customHeaders': {  // Object.<string, string> | Request Custom Headers
    'X-Service-Name': 'customer-service',
    'X-Request-ID': 'req-12345'
  }
};

apiInstance.getJourneySessionOutcomescores(sessionId, opts)
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
 **customHeaders** | **Object.<string, string>** | Request Custom Headers | [optional] |

### Return type

**OutcomeScoresResult**


## getJourneyView

> JourneyView getJourneyView(viewId, opts)


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
let opts = { 
  'customHeaders': {  // Object.<string, string> | Request Custom Headers
    'X-Service-Name': 'customer-service',
    'X-Request-ID': 'req-12345'
  }
};

apiInstance.getJourneyView(viewId, opts)
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
 **customHeaders** | **Object.<string, string>** | Request Custom Headers | [optional] |

### Return type

**JourneyView**


## getJourneyViewSchedules

> JourneyViewSchedule getJourneyViewSchedules(viewId, opts)


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
let opts = { 
  'customHeaders': {  // Object.<string, string> | Request Custom Headers
    'X-Service-Name': 'customer-service',
    'X-Request-ID': 'req-12345'
  }
};

apiInstance.getJourneyViewSchedules(viewId, opts)
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
 **customHeaders** | **Object.<string, string>** | Request Custom Headers | [optional] |

### Return type

**JourneyViewSchedule**


## getJourneyViewVersion

> JourneyView getJourneyViewVersion(viewId, versionId, opts)


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
let opts = { 
  'customHeaders': {  // Object.<string, string> | Request Custom Headers
    'X-Service-Name': 'customer-service',
    'X-Request-ID': 'req-12345'
  }
};

apiInstance.getJourneyViewVersion(viewId, versionId, opts)
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
 **customHeaders** | **Object.<string, string>** | Request Custom Headers | [optional] |

### Return type

**JourneyView**


## getJourneyViewVersionChart

> JourneyViewChart getJourneyViewVersionChart(viewId, journeyViewVersion, chartId, opts)


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
let opts = { 
  'customHeaders': {  // Object.<string, string> | Request Custom Headers
    'X-Service-Name': 'customer-service',
    'X-Request-ID': 'req-12345'
  }
};

apiInstance.getJourneyViewVersionChart(viewId, journeyViewVersion, chartId, opts)
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
 **customHeaders** | **Object.<string, string>** | Request Custom Headers | [optional] |

### Return type

**JourneyViewChart**


## getJourneyViewVersionChartVersion

> JourneyViewChart getJourneyViewVersionChartVersion(viewId, journeyViewVersion, chartId, chartVersion, opts)


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
let opts = { 
  'customHeaders': {  // Object.<string, string> | Request Custom Headers
    'X-Service-Name': 'customer-service',
    'X-Request-ID': 'req-12345'
  }
};

apiInstance.getJourneyViewVersionChartVersion(viewId, journeyViewVersion, chartId, chartVersion, opts)
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
 **customHeaders** | **Object.<string, string>** | Request Custom Headers | [optional] |

### Return type

**JourneyViewChart**


## getJourneyViewVersionJob

> JourneyViewJob getJourneyViewVersionJob(viewId, journeyVersionId, jobId, opts)


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
let opts = { 
  'customHeaders': {  // Object.<string, string> | Request Custom Headers
    'X-Service-Name': 'customer-service',
    'X-Request-ID': 'req-12345'
  }
};

apiInstance.getJourneyViewVersionJob(viewId, journeyVersionId, jobId, opts)
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
 **customHeaders** | **Object.<string, string>** | Request Custom Headers | [optional] |

### Return type

**JourneyViewJob**


## getJourneyViewVersionJobResults

> JourneyViewResult getJourneyViewVersionJobResults(viewId, journeyViewVersion, jobId, opts)


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
let opts = { 
  'customHeaders': {  // Object.<string, string> | Request Custom Headers
    'X-Service-Name': 'customer-service',
    'X-Request-ID': 'req-12345'
  }
};

apiInstance.getJourneyViewVersionJobResults(viewId, journeyViewVersion, jobId, opts)
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
 **customHeaders** | **Object.<string, string>** | Request Custom Headers | [optional] |

### Return type

**JourneyViewResult**


## getJourneyViewVersionJobResultsChart

> JourneyViewChartResult getJourneyViewVersionJobResultsChart(viewId, journeyVersionId, jobId, chartId, opts)


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
let opts = { 
  'customHeaders': {  // Object.<string, string> | Request Custom Headers
    'X-Service-Name': 'customer-service',
    'X-Request-ID': 'req-12345'
  }
};

apiInstance.getJourneyViewVersionJobResultsChart(viewId, journeyVersionId, jobId, chartId, opts)
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
 **customHeaders** | **Object.<string, string>** | Request Custom Headers | [optional] |

### Return type

**JourneyViewChartResult**


## getJourneyViewVersionJobsLatest

> JourneyViewJob getJourneyViewVersionJobsLatest(viewId, journeyVersionId, opts)


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
let opts = { 
  'customHeaders': {  // Object.<string, string> | Request Custom Headers
    'X-Service-Name': 'customer-service',
    'X-Request-ID': 'req-12345'
  }
};

apiInstance.getJourneyViewVersionJobsLatest(viewId, journeyVersionId, opts)
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
 **customHeaders** | **Object.<string, string>** | Request Custom Headers | [optional] |

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
  'id': "id_example", // String | Parameter to request a list of Journey Views by id, separated by commas. Limit of 100 items.
  'customHeaders': {  // Object.<string, string> | Request Custom Headers
    'X-Service-Name': 'customer-service',
    'X-Request-ID': 'req-12345'
  }
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
 **customHeaders** | **Object.<string, string>** | Request Custom Headers | [optional] |

### Return type

**JourneyViewListing**


## getJourneyViewsDataDetails

> DataRange getJourneyViewsDataDetails(opts)


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
let opts = { 
  'customHeaders': {  // Object.<string, string> | Request Custom Headers
    'X-Service-Name': 'customer-service',
    'X-Request-ID': 'req-12345'
  }
};

apiInstance.getJourneyViewsDataDetails(opts)
  .then((data) => {
    console.log(`getJourneyViewsDataDetails success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getJourneyViewsDataDetails');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **customHeaders** | **Object.<string, string>** | Request Custom Headers | [optional] |

### Return type

**DataRange**


## getJourneyViewsEventdefinition

> JourneyEventDefinition getJourneyViewsEventdefinition(eventDefinitionId, opts)


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
let opts = { 
  'customHeaders': {  // Object.<string, string> | Request Custom Headers
    'X-Service-Name': 'customer-service',
    'X-Request-ID': 'req-12345'
  }
};

apiInstance.getJourneyViewsEventdefinition(eventDefinitionId, opts)
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
 **customHeaders** | **Object.<string, string>** | Request Custom Headers | [optional] |

### Return type

**JourneyEventDefinition**


## getJourneyViewsEventdefinitions

> JourneyEventDefinitionListing getJourneyViewsEventdefinitions(opts)


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
let opts = { 
  'customHeaders': {  // Object.<string, string> | Request Custom Headers
    'X-Service-Name': 'customer-service',
    'X-Request-ID': 'req-12345'
  }
};

apiInstance.getJourneyViewsEventdefinitions(opts)
  .then((data) => {
    console.log(`getJourneyViewsEventdefinitions success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getJourneyViewsEventdefinitions');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **customHeaders** | **Object.<string, string>** | Request Custom Headers | [optional] |

### Return type

**JourneyEventDefinitionListing**


## getJourneyViewsEventdefinitionsExternal

> GetExternalEventsResponse getJourneyViewsEventdefinitionsExternal(opts)


GET /api/v2/journey/views/eventdefinitions/external

Get external events for journey views

Requires ALL permissions:

* journey:externalEvents:view

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
  'customHeaders': {  // Object.<string, string> | Request Custom Headers
    'X-Service-Name': 'customer-service',
    'X-Request-ID': 'req-12345'
  }
};

apiInstance.getJourneyViewsEventdefinitionsExternal(opts)
  .then((data) => {
    console.log(`getJourneyViewsEventdefinitionsExternal success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getJourneyViewsEventdefinitionsExternal');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **customHeaders** | **Object.<string, string>** | Request Custom Headers | [optional] |

### Return type

**GetExternalEventsResponse**


## getJourneyViewsEventdefinitionsExternalChanges

> ExternalEventChangesResponse getJourneyViewsEventdefinitionsExternalChanges(opts)


GET /api/v2/journey/views/eventdefinitions/external/changes

Get changes in external event definitions

Requires ALL permissions:

* journey:externalEvents:view

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
  'customHeaders': {  // Object.<string, string> | Request Custom Headers
    'X-Service-Name': 'customer-service',
    'X-Request-ID': 'req-12345'
  }
};

apiInstance.getJourneyViewsEventdefinitionsExternalChanges(opts)
  .then((data) => {
    console.log(`getJourneyViewsEventdefinitionsExternalChanges success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getJourneyViewsEventdefinitionsExternalChanges');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **customHeaders** | **Object.<string, string>** | Request Custom Headers | [optional] |

### Return type

**ExternalEventChangesResponse**


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
  'statuses': statuses=Accepted,Executing,Complete,Failed,Scheduled, // String | Job statuses to filter for
  'customHeaders': {  // Object.<string, string> | Request Custom Headers
    'X-Service-Name': 'customer-service',
    'X-Request-ID': 'req-12345'
  }
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
 **customHeaders** | **Object.<string, string>** | Request Custom Headers | [optional] |

### Return type

**JourneyViewJobListing**


## getJourneyViewsJobsMe

> JourneyViewJobListing getJourneyViewsJobsMe(opts)


GET /api/v2/journey/views/jobs/me

Get my jobs

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
  'statuses': statuses=Accepted,Executing,Complete,Failed,Scheduled, // String | Job statuses to filter for
  'customHeaders': {  // Object.<string, string> | Request Custom Headers
    'X-Service-Name': 'customer-service',
    'X-Request-ID': 'req-12345'
  }
};

apiInstance.getJourneyViewsJobsMe(opts)
  .then((data) => {
    console.log(`getJourneyViewsJobsMe success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getJourneyViewsJobsMe');
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
 **customHeaders** | **Object.<string, string>** | Request Custom Headers | [optional] |

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
  'pageSize': 25, // Number | Max number of entities to return
  'customHeaders': {  // Object.<string, string> | Request Custom Headers
    'X-Service-Name': 'customer-service',
    'X-Request-ID': 'req-12345'
  }
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
 **customHeaders** | **Object.<string, string>** | Request Custom Headers | [optional] |

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
  'body': {}, // Object | 
  'customHeaders': {  // Object.<string, string> | Request Custom Headers
    'X-Service-Name': 'customer-service',
    'X-Request-ID': 'req-12345'
  }
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
 **customHeaders** | **Object.<string, string>** | Request Custom Headers | [optional] |

### Return type

**ActionMap**


## patchJourneyActiontarget

> ActionTarget patchJourneyActiontarget(actionTargetId, opts)

:::{"alert":"warning","title":"Deprecated","collapsible":false,"autoCollapse":false}
This resource has been deprecated
:::

PATCH /api/v2/journey/actiontargets/{actionTargetId}

Deprecated. Update a single action target.

ACD Chat v2.0 in Genesys Predictive Engagement is deprecated and being removed. See https://community.genesys.com/discussion/deprecation-acd-chat-v20-support-in-genesys-predictive-engagement

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
  'body': {}, // Object | 
  'customHeaders': {  // Object.<string, string> | Request Custom Headers
    'X-Service-Name': 'customer-service',
    'X-Request-ID': 'req-12345'
  }
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
 **customHeaders** | **Object.<string, string>** | Request Custom Headers | [optional] |

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
  'body': {}, // Object | 
  'customHeaders': {  // Object.<string, string> | Request Custom Headers
    'X-Service-Name': 'customer-service',
    'X-Request-ID': 'req-12345'
  }
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
 **customHeaders** | **Object.<string, string>** | Request Custom Headers | [optional] |

### Return type

**ActionTemplate**


## patchJourneyExternaleventsConfiguration

> ExternalEventsConfiguration patchJourneyExternaleventsConfiguration(configId, opts)


PATCH /api/v2/journey/externalevents/configurations/{configId}

Update an external events configuration.

Requires ANY permissions:

* journey:externalEventsConfiguration:edit

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.JourneyApi();

let configId = "configId_example"; // String | The ID of the external event configuration.
let opts = { 
  'body': {}, // Object | 
  'customHeaders': {  // Object.<string, string> | Request Custom Headers
    'X-Service-Name': 'customer-service',
    'X-Request-ID': 'req-12345'
  }
};

apiInstance.patchJourneyExternaleventsConfiguration(configId, opts)
  .then((data) => {
    console.log(`patchJourneyExternaleventsConfiguration success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling patchJourneyExternaleventsConfiguration');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **configId** | **String** | The ID of the external event configuration. |  |
 **body** | **Object** |  | [optional]  |
 **customHeaders** | **Object.<string, string>** | Request Custom Headers | [optional] |

### Return type

**ExternalEventsConfiguration**


## patchJourneyOutcome

> Outcome patchJourneyOutcome(outcomeId, opts)

:::{"alert":"warning","title":"Deprecated","collapsible":false,"autoCollapse":false}
This resource has been deprecated
:::

PATCH /api/v2/journey/outcomes/{outcomeId}

Deprecated. Update an outcome.

Journey Outcomes is being removed. See https://help.genesys.cloud/announcements/genesys-cloud/deprecation-journey-outcomes/

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
  'body': {}, // Object | 
  'customHeaders': {  // Object.<string, string> | Request Custom Headers
    'X-Service-Name': 'customer-service',
    'X-Request-ID': 'req-12345'
  }
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
 **customHeaders** | **Object.<string, string>** | Request Custom Headers | [optional] |

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
  'body': {}, // Object | 
  'customHeaders': {  // Object.<string, string> | Request Custom Headers
    'X-Service-Name': 'customer-service',
    'X-Request-ID': 'req-12345'
  }
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
 **customHeaders** | **Object.<string, string>** | Request Custom Headers | [optional] |

### Return type

**JourneySegment**


## patchJourneyViewVersionJob

> JourneyViewJob patchJourneyViewVersionJob(viewId, journeyVersionId, jobId, body, opts)


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
let opts = { 
  'customHeaders': {  // Object.<string, string> | Request Custom Headers
    'X-Service-Name': 'customer-service',
    'X-Request-ID': 'req-12345'
  }
};

apiInstance.patchJourneyViewVersionJob(viewId, journeyVersionId, jobId, body, opts)
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
 **customHeaders** | **Object.<string, string>** | Request Custom Headers | [optional] |

### Return type

**JourneyViewJob**


## postAnalyticsJourneysAggregatesJobs

> AsyncQueryResponse postAnalyticsJourneysAggregatesJobs(body, opts)


POST /api/v2/analytics/journeys/aggregates/jobs

Query for journey aggregates asynchronously

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
let opts = { 
  'customHeaders': {  // Object.<string, string> | Request Custom Headers
    'X-Service-Name': 'customer-service',
    'X-Request-ID': 'req-12345'
  }
};

apiInstance.postAnalyticsJourneysAggregatesJobs(body, opts)
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
 **customHeaders** | **Object.<string, string>** | Request Custom Headers | [optional] |

### Return type

**AsyncQueryResponse**


## postAnalyticsJourneysAggregatesQuery

> JourneyAggregateQueryResponse postAnalyticsJourneysAggregatesQuery(body, opts)


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
let opts = { 
  'customHeaders': {  // Object.<string, string> | Request Custom Headers
    'X-Service-Name': 'customer-service',
    'X-Request-ID': 'req-12345'
  }
};

apiInstance.postAnalyticsJourneysAggregatesQuery(body, opts)
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
 **customHeaders** | **Object.<string, string>** | Request Custom Headers | [optional] |

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
  'body': {}, // Object | 
  'customHeaders': {  // Object.<string, string> | Request Custom Headers
    'X-Service-Name': 'customer-service',
    'X-Request-ID': 'req-12345'
  }
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
 **customHeaders** | **Object.<string, string>** | Request Custom Headers | [optional] |

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
  'body': {}, // Object | 
  'customHeaders': {  // Object.<string, string> | Request Custom Headers
    'X-Service-Name': 'customer-service',
    'X-Request-ID': 'req-12345'
  }
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
 **customHeaders** | **Object.<string, string>** | Request Custom Headers | [optional] |

### Return type

**ActionMap**


## postJourneyActionmapsEstimatesJobs

> EstimateJobAsyncResponse postJourneyActionmapsEstimatesJobs(body, opts)

:::{"alert":"warning","title":"Deprecated","collapsible":false,"autoCollapse":false}
This resource has been deprecated
:::

POST /api/v2/journey/actionmaps/estimates/jobs

Deprecated. Query for estimates

Journey Outcomes is being removed. See https://help.genesys.cloud/announcements/genesys-cloud/deprecation-journey-outcomes/

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
let opts = { 
  'customHeaders': {  // Object.<string, string> | Request Custom Headers
    'X-Service-Name': 'customer-service',
    'X-Request-ID': 'req-12345'
  }
};

apiInstance.postJourneyActionmapsEstimatesJobs(body, opts)
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
 **customHeaders** | **Object.<string, string>** | Request Custom Headers | [optional] |

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
  'body': {}, // Object | 
  'customHeaders': {  // Object.<string, string> | Request Custom Headers
    'X-Service-Name': 'customer-service',
    'X-Request-ID': 'req-12345'
  }
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
 **customHeaders** | **Object.<string, string>** | Request Custom Headers | [optional] |

### Return type

**ActionTemplate**


## postJourneyDeploymentActionevent

> void postJourneyDeploymentActionevent(deploymentId, body, opts)


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
let opts = { 
  'customHeaders': {  // Object.<string, string> | Request Custom Headers
    'X-Service-Name': 'customer-service',
    'X-Request-ID': 'req-12345'
  }
};

apiInstance.postJourneyDeploymentActionevent(deploymentId, body, opts)
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
 **customHeaders** | **Object.<string, string>** | Request Custom Headers | [optional] |

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
  'body': {}, // Object | 
  'customHeaders': {  // Object.<string, string> | Request Custom Headers
    'X-Service-Name': 'customer-service',
    'X-Request-ID': 'req-12345'
  }
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
 **customHeaders** | **Object.<string, string>** | Request Custom Headers | [optional] |

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
  'body': {}, // Object | 
  'customHeaders': {  // Object.<string, string> | Request Custom Headers
    'X-Service-Name': 'customer-service',
    'X-Request-ID': 'req-12345'
  }
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
 **customHeaders** | **Object.<string, string>** | Request Custom Headers | [optional] |

### Return type

**WebEventResponse**


## postJourneyExternaleventsConfigurationEvents

> ExternalEventsResponse postJourneyExternaleventsConfigurationEvents(configurationId, opts)


POST /api/v2/journey/externalevents/configurations/{configurationId}/events

Create external events

Requires ANY permissions:

* journey:externalEventsEvent:add

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.JourneyApi();

let configurationId = "configurationId_example"; // String | The ID of the external event configuration.
let opts = { 
  'body': {}, // Object | 
  'customHeaders': {  // Object.<string, string> | Request Custom Headers
    'X-Service-Name': 'customer-service',
    'X-Request-ID': 'req-12345'
  }
};

apiInstance.postJourneyExternaleventsConfigurationEvents(configurationId, opts)
  .then((data) => {
    console.log(`postJourneyExternaleventsConfigurationEvents success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling postJourneyExternaleventsConfigurationEvents');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **configurationId** | **String** | The ID of the external event configuration. |  |
 **body** | **Object** |  | [optional]  |
 **customHeaders** | **Object.<string, string>** | Request Custom Headers | [optional] |

### Return type

**ExternalEventsResponse**


## postJourneyExternaleventsConfigurations

> ExternalEventsConfiguration postJourneyExternaleventsConfigurations(opts)


POST /api/v2/journey/externalevents/configurations

Create an external events configuration.

Requires ANY permissions:

* journey:externalEventsConfiguration:add

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
  'body': {}, // Object | 
  'customHeaders': {  // Object.<string, string> | Request Custom Headers
    'X-Service-Name': 'customer-service',
    'X-Request-ID': 'req-12345'
  }
};

apiInstance.postJourneyExternaleventsConfigurations(opts)
  .then((data) => {
    console.log(`postJourneyExternaleventsConfigurations success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling postJourneyExternaleventsConfigurations');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **body** | **Object** |  | [optional]  |
 **customHeaders** | **Object.<string, string>** | Request Custom Headers | [optional] |

### Return type

**ExternalEventsConfiguration**


## postJourneyExternaleventsSchemas

> JourneyExternalEventsSchema postJourneyExternaleventsSchemas(body, opts)


POST /api/v2/journey/externalevents/schemas

Create a schema

Requires ANY permissions:

* journey:externalEventsSchema:add

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.JourneyApi();

let body = {}; // Object | Schema create request body
let opts = { 
  'customHeaders': {  // Object.<string, string> | Request Custom Headers
    'X-Service-Name': 'customer-service',
    'X-Request-ID': 'req-12345'
  }
};

apiInstance.postJourneyExternaleventsSchemas(body, opts)
  .then((data) => {
    console.log(`postJourneyExternaleventsSchemas success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling postJourneyExternaleventsSchemas');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **body** | **Object** | Schema create request body |  |
 **customHeaders** | **Object.<string, string>** | Request Custom Headers | [optional] |

### Return type

**JourneyExternalEventsSchema**


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
  'body': {}, // Object | 
  'customHeaders': {  // Object.<string, string> | Request Custom Headers
    'X-Service-Name': 'customer-service',
    'X-Request-ID': 'req-12345'
  }
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
 **customHeaders** | **Object.<string, string>** | Request Custom Headers | [optional] |

### Return type

**FlowPaths**


## postJourneyOutcomes

> Outcome postJourneyOutcomes(opts)

:::{"alert":"warning","title":"Deprecated","collapsible":false,"autoCollapse":false}
This resource has been deprecated
:::

POST /api/v2/journey/outcomes

Deprecated. Create an outcome.

Journey Outcomes is being removed. See https://help.genesys.cloud/announcements/genesys-cloud/deprecation-journey-outcomes/

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
  'body': {}, // Object | 
  'customHeaders': {  // Object.<string, string> | Request Custom Headers
    'X-Service-Name': 'customer-service',
    'X-Request-ID': 'req-12345'
  }
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
 **customHeaders** | **Object.<string, string>** | Request Custom Headers | [optional] |

### Return type

**Outcome**


## postJourneyOutcomesAttributionsJobs

> OutcomeAttributionAsyncResponse postJourneyOutcomesAttributionsJobs(opts)

:::{"alert":"warning","title":"Deprecated","collapsible":false,"autoCollapse":false}
This resource has been deprecated
:::

POST /api/v2/journey/outcomes/attributions/jobs

Deprecated. Create Outcome Attributions

Journey Outcomes is being removed. See https://help.genesys.cloud/announcements/genesys-cloud/deprecation-journey-outcomes/

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
  'body': {}, // Object | outcome attribution request
  'customHeaders': {  // Object.<string, string> | Request Custom Headers
    'X-Service-Name': 'customer-service',
    'X-Request-ID': 'req-12345'
  }
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
 **customHeaders** | **Object.<string, string>** | Request Custom Headers | [optional] |

### Return type

**OutcomeAttributionAsyncResponse**


## postJourneyOutcomesPredictors

> OutcomePredictor postJourneyOutcomesPredictors(opts)

:::{"alert":"warning","title":"Deprecated","collapsible":false,"autoCollapse":false}
This resource has been deprecated
:::

POST /api/v2/journey/outcomes/predictors

Deprecated. Create an outcome predictor.

Journey Outcomes is being removed. See https://help.genesys.cloud/announcements/genesys-cloud/deprecation-journey-outcomes/

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
  'body': {}, // Object | 
  'customHeaders': {  // Object.<string, string> | Request Custom Headers
    'X-Service-Name': 'customer-service',
    'X-Request-ID': 'req-12345'
  }
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
 **customHeaders** | **Object.<string, string>** | Request Custom Headers | [optional] |

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
  'body': {}, // Object | 
  'customHeaders': {  // Object.<string, string> | Request Custom Headers
    'X-Service-Name': 'customer-service',
    'X-Request-ID': 'req-12345'
  }
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
 **customHeaders** | **Object.<string, string>** | Request Custom Headers | [optional] |

### Return type

**JourneySegment**


## postJourneyViewSchedules

> JourneyViewSchedule postJourneyViewSchedules(viewId, body, opts)


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
let opts = { 
  'customHeaders': {  // Object.<string, string> | Request Custom Headers
    'X-Service-Name': 'customer-service',
    'X-Request-ID': 'req-12345'
  }
};

apiInstance.postJourneyViewSchedules(viewId, body, opts)
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
 **customHeaders** | **Object.<string, string>** | Request Custom Headers | [optional] |

### Return type

**JourneyViewSchedule**


## postJourneyViewVersionJobs

> JourneyViewJob postJourneyViewVersionJobs(viewId, journeyVersionId, opts)


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
let opts = { 
  'customHeaders': {  // Object.<string, string> | Request Custom Headers
    'X-Service-Name': 'customer-service',
    'X-Request-ID': 'req-12345'
  }
};

apiInstance.postJourneyViewVersionJobs(viewId, journeyVersionId, opts)
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
 **customHeaders** | **Object.<string, string>** | Request Custom Headers | [optional] |

### Return type

**JourneyViewJob**


## postJourneyViewVersions

> JourneyView postJourneyViewVersions(viewId, body, opts)


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
let opts = { 
  'customHeaders': {  // Object.<string, string> | Request Custom Headers
    'X-Service-Name': 'customer-service',
    'X-Request-ID': 'req-12345'
  }
};

apiInstance.postJourneyViewVersions(viewId, body, opts)
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
 **customHeaders** | **Object.<string, string>** | Request Custom Headers | [optional] |

### Return type

**JourneyView**


## postJourneyViews

> JourneyView postJourneyViews(body, opts)


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
let opts = { 
  'customHeaders': {  // Object.<string, string> | Request Custom Headers
    'X-Service-Name': 'customer-service',
    'X-Request-ID': 'req-12345'
  }
};

apiInstance.postJourneyViews(body, opts)
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
 **customHeaders** | **Object.<string, string>** | Request Custom Headers | [optional] |

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
  'body': [{}], // Object | 
  'customHeaders': {  // Object.<string, string> | Request Custom Headers
    'X-Service-Name': 'customer-service',
    'X-Request-ID': 'req-12345'
  }
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
 **customHeaders** | **Object.<string, string>** | Request Custom Headers | [optional] |

### Return type

**EntityListing**


## putJourneyExternaleventsSchema

> JourneyExternalEventsSchema putJourneyExternaleventsSchema(schemaId, body, opts)


PUT /api/v2/journey/externalevents/schemas/{schemaId}

Update a schema

Requires ANY permissions:

* journey:externalEventsSchema:edit

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.JourneyApi();

let schemaId = "schemaId_example"; // String | Schema ID
let body = {}; // Object | Schema update request body
let opts = { 
  'customHeaders': {  // Object.<string, string> | Request Custom Headers
    'X-Service-Name': 'customer-service',
    'X-Request-ID': 'req-12345'
  }
};

apiInstance.putJourneyExternaleventsSchema(schemaId, body, opts)
  .then((data) => {
    console.log(`putJourneyExternaleventsSchema success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling putJourneyExternaleventsSchema');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **schemaId** | **String** | Schema ID |  |
 **body** | **Object** | Schema update request body |  |
 **customHeaders** | **Object.<string, string>** | Request Custom Headers | [optional] |

### Return type

**JourneyExternalEventsSchema**


## putJourneyViewSchedules

> JourneyViewSchedule putJourneyViewSchedules(viewId, body, opts)


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
let opts = { 
  'customHeaders': {  // Object.<string, string> | Request Custom Headers
    'X-Service-Name': 'customer-service',
    'X-Request-ID': 'req-12345'
  }
};

apiInstance.putJourneyViewSchedules(viewId, body, opts)
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
 **customHeaders** | **Object.<string, string>** | Request Custom Headers | [optional] |

### Return type

**JourneyViewSchedule**


## putJourneyViewVersion

> JourneyView putJourneyViewVersion(viewId, versionId, body, opts)


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
let opts = { 
  'customHeaders': {  // Object.<string, string> | Request Custom Headers
    'X-Service-Name': 'customer-service',
    'X-Request-ID': 'req-12345'
  }
};

apiInstance.putJourneyViewVersion(viewId, versionId, body, opts)
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
 **customHeaders** | **Object.<string, string>** | Request Custom Headers | [optional] |

### Return type

**JourneyView**


## putJourneyViewsEventdefinition

> UpdateExternalEventResponse putJourneyViewsEventdefinition(eventDefinitionId, opts)


PUT /api/v2/journey/views/eventdefinitions/{eventDefinitionId}

Update external event for journey views

Requires ALL permissions:

* journey:externalEvents:edit

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
let opts = { 
  'body': {}, // Object | 
  'customHeaders': {  // Object.<string, string> | Request Custom Headers
    'X-Service-Name': 'customer-service',
    'X-Request-ID': 'req-12345'
  }
};

apiInstance.putJourneyViewsEventdefinition(eventDefinitionId, opts)
  .then((data) => {
    console.log(`putJourneyViewsEventdefinition success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling putJourneyViewsEventdefinition');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **eventDefinitionId** | **String** | Event Definition ID |  |
 **body** | **Object** |  | [optional]  |
 **customHeaders** | **Object.<string, string>** | Request Custom Headers | [optional] |

### Return type

**UpdateExternalEventResponse**


## putJourneyViewsEventdefinitionActivate

> ActivateExternalEventResponse putJourneyViewsEventdefinitionActivate(eventDefinitionId, opts)


PUT /api/v2/journey/views/eventdefinitions/{eventDefinitionId}/activate

Activate external event for journey views

Requires ALL permissions:

* journey:externalEvents:activate

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
let opts = { 
  'body': {}, // Object | 
  'customHeaders': {  // Object.<string, string> | Request Custom Headers
    'X-Service-Name': 'customer-service',
    'X-Request-ID': 'req-12345'
  }
};

apiInstance.putJourneyViewsEventdefinitionActivate(eventDefinitionId, opts)
  .then((data) => {
    console.log(`putJourneyViewsEventdefinitionActivate success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling putJourneyViewsEventdefinitionActivate');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **eventDefinitionId** | **String** | Event Definition ID |  |
 **body** | **Object** |  | [optional]  |
 **customHeaders** | **Object.<string, string>** | Request Custom Headers | [optional] |

### Return type

**ActivateExternalEventResponse**


_purecloud-platform-client-v2@257.0.0_
