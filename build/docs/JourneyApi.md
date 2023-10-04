---
title: JourneyApi
---
# platformClient.JourneyApi

All URIs are relative to *https://api.inindca.com*

| Method | HTTP request | Description |
| ------------- | ------------- | ------------- |
[**deleteJourneyActionmap**](JourneyApi.html#deleteJourneyActionmap) | **DELETE** /api/v2/journey/actionmaps/{actionMapId} | Delete single action map.
[**deleteJourneyActiontemplate**](JourneyApi.html#deleteJourneyActiontemplate) | **DELETE** /api/v2/journey/actiontemplates/{actionTemplateId} | Delete a single action template.
[**deleteJourneyEventtype**](JourneyApi.html#deleteJourneyEventtype) | **DELETE** /api/v2/journey/eventtypes/{eventTypeId} | Delete a single event type.
[**deleteJourneyOpenaction**](JourneyApi.html#deleteJourneyOpenaction) | **DELETE** /api/v2/journey/openactions/{openActionId} | Delete an open action.
[**deleteJourneyOpenactionsSchema**](JourneyApi.html#deleteJourneyOpenactionsSchema) | **DELETE** /api/v2/journey/openactions/schemas/{schemaId} | Delete a schema
[**deleteJourneyOutcome**](JourneyApi.html#deleteJourneyOutcome) | **DELETE** /api/v2/journey/outcomes/{outcomeId} | Delete an outcome.
[**deleteJourneyOutcomesPredictor**](JourneyApi.html#deleteJourneyOutcomesPredictor) | **DELETE** /api/v2/journey/outcomes/predictors/{predictorId} | Delete an outcome predictor.
[**deleteJourneySegment**](JourneyApi.html#deleteJourneySegment) | **DELETE** /api/v2/journey/segments/{segmentId} | Delete a segment.
[**deleteJourneyView**](JourneyApi.html#deleteJourneyView) | **DELETE** /api/v2/journey/views/{viewId} | Delete a Journey View by ID
[**getAnalyticsJourneysAggregatesJob**](JourneyApi.html#getAnalyticsJourneysAggregatesJob) | **GET** /api/v2/analytics/journeys/aggregates/jobs/{jobId} | Get status for async query for journey aggregates
[**getAnalyticsJourneysAggregatesJobResults**](JourneyApi.html#getAnalyticsJourneysAggregatesJobResults) | **GET** /api/v2/analytics/journeys/aggregates/jobs/{jobId}/results | Fetch a page of results for an async aggregates query
[**getExternalcontactsContactJourneySegments**](JourneyApi.html#getExternalcontactsContactJourneySegments) | **GET** /api/v2/externalcontacts/contacts/{contactId}/journey/segments | Retrieve segment assignments by external contact ID.
[**getExternalcontactsContactJourneySessions**](JourneyApi.html#getExternalcontactsContactJourneySessions) | **GET** /api/v2/externalcontacts/contacts/{contactId}/journey/sessions | Retrieve all sessions for a given external contact.
[**getJourneyActionmap**](JourneyApi.html#getJourneyActionmap) | **GET** /api/v2/journey/actionmaps/{actionMapId} | Retrieve a single action map.
[**getJourneyActionmaps**](JourneyApi.html#getJourneyActionmaps) | **GET** /api/v2/journey/actionmaps | Retrieve all action maps.
[**getJourneyActionmapsEstimatesJob**](JourneyApi.html#getJourneyActionmapsEstimatesJob) | **GET** /api/v2/journey/actionmaps/estimates/jobs/{jobId} | Get status of job.
[**getJourneyActionmapsEstimatesJobResults**](JourneyApi.html#getJourneyActionmapsEstimatesJobResults) | **GET** /api/v2/journey/actionmaps/estimates/jobs/{jobId}/results | Get estimates from completed job.
[**getJourneyActiontarget**](JourneyApi.html#getJourneyActiontarget) | **GET** /api/v2/journey/actiontargets/{actionTargetId} | Retrieve a single action target.
[**getJourneyActiontargets**](JourneyApi.html#getJourneyActiontargets) | **GET** /api/v2/journey/actiontargets | Retrieve all action targets.
[**getJourneyActiontemplate**](JourneyApi.html#getJourneyActiontemplate) | **GET** /api/v2/journey/actiontemplates/{actionTemplateId} | Retrieve a single action template.
[**getJourneyActiontemplates**](JourneyApi.html#getJourneyActiontemplates) | **GET** /api/v2/journey/actiontemplates | Retrieve all action templates.
[**getJourneyDeploymentCustomerBeacons**](JourneyApi.html#getJourneyDeploymentCustomerBeacons) | **GET** /api/v2/journey/deployments/{deploymentId}/customers/{customerCookieId}/beacons | Sends web beacon, used for tracking customer activity on a website via transparent pixel.
[**getJourneyDeploymentCustomerPing**](JourneyApi.html#getJourneyDeploymentCustomerPing) | **GET** /api/v2/journey/deployments/{deploymentId}/customers/{customerCookieId}/ping | Send a ping.
[**getJourneyEventtype**](JourneyApi.html#getJourneyEventtype) | **GET** /api/v2/journey/eventtypes/{eventTypeId} | Retrieve a single event type.
[**getJourneyEventtypes**](JourneyApi.html#getJourneyEventtypes) | **GET** /api/v2/journey/eventtypes | Retrieve all event types.
[**getJourneyExternalcontactSegments**](JourneyApi.html#getJourneyExternalcontactSegments) | **GET** /api/v2/journey/externalcontacts/{externalContactId}/segments | Retrieve segment assignments by external contact ID.
[**getJourneyOpenaction**](JourneyApi.html#getJourneyOpenaction) | **GET** /api/v2/journey/openactions/{openActionId} | Retrieve a single open action.
[**getJourneyOpenactions**](JourneyApi.html#getJourneyOpenactions) | **GET** /api/v2/journey/openactions | Retrieve a paged listing of open actions.
[**getJourneyOpenactionsSchema**](JourneyApi.html#getJourneyOpenactionsSchema) | **GET** /api/v2/journey/openactions/schemas/{schemaId} | Get a schema
[**getJourneyOpenactionsSchemaVersion**](JourneyApi.html#getJourneyOpenactionsSchemaVersion) | **GET** /api/v2/journey/openactions/schemas/{schemaId}/versions/{versionId} | Get a specific version of a schema
[**getJourneyOpenactionsSchemaVersions**](JourneyApi.html#getJourneyOpenactionsSchemaVersions) | **GET** /api/v2/journey/openactions/schemas/{schemaId}/versions | Get all versions of a schema
[**getJourneyOpenactionsSchemas**](JourneyApi.html#getJourneyOpenactionsSchemas) | **GET** /api/v2/journey/openactions/schemas | Get a list of schemas.
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
[**getJourneySessionRecent**](JourneyApi.html#getJourneySessionRecent) | **GET** /api/v2/journey/sessions/{sessionType}/recent | Retrieve all recent sessions.
[**getJourneySessionSegments**](JourneyApi.html#getJourneySessionSegments) | **GET** /api/v2/journey/sessions/{sessionId}/segments | Retrieve segment assignments by session ID.
[**getJourneySettingsClickstream**](JourneyApi.html#getJourneySettingsClickstream) | **GET** /api/v2/journey/settings/clickstream | Retrieve clickstream settings.
[**getJourneySettingsWebactions**](JourneyApi.html#getJourneySettingsWebactions) | **GET** /api/v2/journey/settings/webactions | Retrieve web action settings.
[**getJourneyView**](JourneyApi.html#getJourneyView) | **GET** /api/v2/journey/views/{viewId} | Get a Journey View by ID
[**getJourneyViewVersionJob**](JourneyApi.html#getJourneyViewVersionJob) | **GET** /api/v2/journey/views/{viewId}/versions/{journeyVersionId}/jobs/{jobId} | Get a job for a journeyView.
[**getJourneyViewVersionJobResults**](JourneyApi.html#getJourneyViewVersionJobResults) | **GET** /api/v2/journey/views/{viewId}/versions/{journeyViewVersion}/jobs/{jobId}/results | Get a JourneyViewResult.
[**getJourneyViewVersionJobsLatest**](JourneyApi.html#getJourneyViewVersionJobsLatest) | **GET** /api/v2/journey/views/{viewId}/versions/{journeyVersionId}/jobs/latest | Query a job for a journeyView.
[**getJourneyViews**](JourneyApi.html#getJourneyViews) | **GET** /api/v2/journey/views | Get a list of Journey Views
[**getJourneyViewsEventdefinition**](JourneyApi.html#getJourneyViewsEventdefinition) | **GET** /api/v2/journey/views/eventdefinitions/{eventDefinitionId} | Get an Event Definition
[**getJourneyViewsEventdefinitions**](JourneyApi.html#getJourneyViewsEventdefinitions) | **GET** /api/v2/journey/views/eventdefinitions | Get a list of Event Definitions
[**getJourneyWebsiteCustomerBeacons**](JourneyApi.html#getJourneyWebsiteCustomerBeacons) | **GET** /api/v2/journey/websites/{websiteId}/customers/{customerCookieId}/beacons | Sends web beacon, used for tracking customer activity on a website via transparent pixel.
[**getJourneyWebsiteCustomerPing**](JourneyApi.html#getJourneyWebsiteCustomerPing) | **GET** /api/v2/journey/websites/{websiteId}/customers/{customerCookieId}/ping | Send single page ping.
[**patchJourneyActionmap**](JourneyApi.html#patchJourneyActionmap) | **PATCH** /api/v2/journey/actionmaps/{actionMapId} | Update single action map.
[**patchJourneyActiontarget**](JourneyApi.html#patchJourneyActiontarget) | **PATCH** /api/v2/journey/actiontargets/{actionTargetId} | Update a single action target.
[**patchJourneyActiontemplate**](JourneyApi.html#patchJourneyActiontemplate) | **PATCH** /api/v2/journey/actiontemplates/{actionTemplateId} | Update a single action template.
[**patchJourneyEventtype**](JourneyApi.html#patchJourneyEventtype) | **PATCH** /api/v2/journey/eventtypes/{eventTypeId} | Update a single event type.
[**patchJourneyOpenaction**](JourneyApi.html#patchJourneyOpenaction) | **PATCH** /api/v2/journey/openactions/{openActionId} | Update an open action.
[**patchJourneyOutcome**](JourneyApi.html#patchJourneyOutcome) | **PATCH** /api/v2/journey/outcomes/{outcomeId} | Update an outcome.
[**patchJourneySegment**](JourneyApi.html#patchJourneySegment) | **PATCH** /api/v2/journey/segments/{segmentId} | Update a segment.
[**patchJourneySettingsClickstream**](JourneyApi.html#patchJourneySettingsClickstream) | **PATCH** /api/v2/journey/settings/clickstream | Update clickstream settings.
[**patchJourneySettingsWebactions**](JourneyApi.html#patchJourneySettingsWebactions) | **PATCH** /api/v2/journey/settings/webactions | Update web action settings.
[**postAnalyticsJourneysAggregatesJobs**](JourneyApi.html#postAnalyticsJourneysAggregatesJobs) | **POST** /api/v2/analytics/journeys/aggregates/jobs | Query for journey aggregates asynchronously
[**postAnalyticsJourneysAggregatesQuery**](JourneyApi.html#postAnalyticsJourneysAggregatesQuery) | **POST** /api/v2/analytics/journeys/aggregates/query | Query for journey aggregates
[**postExternalcontactsContactJourneySegments**](JourneyApi.html#postExternalcontactsContactJourneySegments) | **POST** /api/v2/externalcontacts/contacts/{contactId}/journey/segments | Assign/Unassign up to 10 segments to/from an external contact or, if a segment is already assigned, update the expiry date of the segment assignment. Any unprocessed segment assignments are returned in the body for the client to retry, in the event of a partial success.
[**postJourneyActionmaps**](JourneyApi.html#postJourneyActionmaps) | **POST** /api/v2/journey/actionmaps | Create an action map.
[**postJourneyActionmapsEstimatesJobs**](JourneyApi.html#postJourneyActionmapsEstimatesJobs) | **POST** /api/v2/journey/actionmaps/estimates/jobs | Query for estimates
[**postJourneyActiontargetsBulk**](JourneyApi.html#postJourneyActiontargetsBulk) | **POST** /api/v2/journey/actiontargets/bulk | Perform bulk upsert of action targets.
[**postJourneyActiontemplates**](JourneyApi.html#postJourneyActiontemplates) | **POST** /api/v2/journey/actiontemplates | Create a single action template.
[**postJourneyDeploymentActionevent**](JourneyApi.html#postJourneyDeploymentActionevent) | **POST** /api/v2/journey/deployments/{deploymentId}/actionevent | Sends an action event, which is used for changing the state of actions that have been offered to the user.
[**postJourneyDeploymentAppevents**](JourneyApi.html#postJourneyDeploymentAppevents) | **POST** /api/v2/journey/deployments/{deploymentId}/appevents | Send a journey app event, used for tracking customer activity on an application.
[**postJourneyDeploymentAppeventsBulk**](JourneyApi.html#postJourneyDeploymentAppeventsBulk) | **POST** /api/v2/journey/deployments/{deploymentId}/appevents/bulk | Creates multiple journey app events. Any unprocessed app events are returned in the body for the client to retry in the event of a partial success.
[**postJourneyDeploymentCustomerBeacons**](JourneyApi.html#postJourneyDeploymentCustomerBeacons) | **POST** /api/v2/journey/deployments/{deploymentId}/customers/{customerCookieId}/beacons | Sends web beacon, used for tracking customer activity on a website, with support for the navigator.sendBeacon API available in most browsers.
[**postJourneyEventtypes**](JourneyApi.html#postJourneyEventtypes) | **POST** /api/v2/journey/eventtypes | Create a single event type.
[**postJourneyExternalcontactSegments**](JourneyApi.html#postJourneyExternalcontactSegments) | **POST** /api/v2/journey/externalcontacts/{externalContactId}/segments | Assign/Unassign up to 10 segments to/from an external contact or, if a segment is already assigned, update the expiry date of the segment assignment. Any unprocessed segment assignments are returned in the body for the client to retry, in the event of a partial success.
[**postJourneyOpenactions**](JourneyApi.html#postJourneyOpenactions) | **POST** /api/v2/journey/openactions | Create an open action.
[**postJourneyOpenactionsSchemas**](JourneyApi.html#postJourneyOpenactionsSchemas) | **POST** /api/v2/journey/openactions/schemas | Create a schema
[**postJourneyOutcomes**](JourneyApi.html#postJourneyOutcomes) | **POST** /api/v2/journey/outcomes | Create an outcome.
[**postJourneyOutcomesAttributionsJobs**](JourneyApi.html#postJourneyOutcomesAttributionsJobs) | **POST** /api/v2/journey/outcomes/attributions/jobs | Create Outcome Attributions
[**postJourneyOutcomesPredictors**](JourneyApi.html#postJourneyOutcomesPredictors) | **POST** /api/v2/journey/outcomes/predictors | Create an outcome predictor.
[**postJourneySegments**](JourneyApi.html#postJourneySegments) | **POST** /api/v2/journey/segments | Create a segment.
[**postJourneyViewVersionJobs**](JourneyApi.html#postJourneyViewVersionJobs) | **POST** /api/v2/journey/views/{viewId}/versions/{journeyVersionId}/jobs | Submit an execution for a journeyView.
[**postJourneyViewVersions**](JourneyApi.html#postJourneyViewVersions) | **POST** /api/v2/journey/views/{viewId}/versions | Update a Journey View by ID
[**postJourneyViews**](JourneyApi.html#postJourneyViews) | **POST** /api/v2/journey/views | Create a new Journey View
[**postJourneyWebsiteCustomerBeacons**](JourneyApi.html#postJourneyWebsiteCustomerBeacons) | **POST** /api/v2/journey/websites/{websiteId}/customers/{customerCookieId}/beacons | Sends web beacon, used for tracking customer activity on a website, with support for navigator.sendBeacon API that's available in most modern browsers.
[**putJourneyOpenactionsSchema**](JourneyApi.html#putJourneyOpenactionsSchema) | **PUT** /api/v2/journey/openactions/schemas/{schemaId} | Update a schema
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

<a name="deleteJourneyEventtype"></a>

# void deleteJourneyEventtype(eventTypeId)


DELETE /api/v2/journey/eventtypes/{eventTypeId}

Delete a single event type.

Requires ANY permissions:

* journey:eventtype:delete

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.JourneyApi();

let eventTypeId = "eventTypeId_example"; // String | ID of the event type.

apiInstance.deleteJourneyEventtype(eventTypeId)
  .then(() => {
    console.log('deleteJourneyEventtype returned successfully.');
  })
  .catch((err) => {
    console.log('There was a failure calling deleteJourneyEventtype');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **eventTypeId** | **String** | ID of the event type. |  |
{: class="table table-striped"}

### Return type

void (no response body)

<a name="deleteJourneyOpenaction"></a>

# void deleteJourneyOpenaction(openActionId)


DELETE /api/v2/journey/openactions/{openActionId}

Delete an open action.

Requires ANY permissions:

* journey:openAction:delete

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.JourneyApi();

let openActionId = "openActionId_example"; // String | Id of an open action

apiInstance.deleteJourneyOpenaction(openActionId)
  .then(() => {
    console.log('deleteJourneyOpenaction returned successfully.');
  })
  .catch((err) => {
    console.log('There was a failure calling deleteJourneyOpenaction');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **openActionId** | **String** | Id of an open action |  |
{: class="table table-striped"}

### Return type

void (no response body)

<a name="deleteJourneyOpenactionsSchema"></a>

# void deleteJourneyOpenactionsSchema(schemaId, opts)


DELETE /api/v2/journey/openactions/schemas/{schemaId}

Delete a schema

Requires ANY permissions:

* journey:openActionSchema:delete

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.JourneyApi();

let schemaId = "schemaId_example"; // String | Schema ID
let opts = { 
  'hardDelete': false // Boolean | Boolean to perform a hard delete.  If hardDelete is set to true, the schema is completely and permanently removed from our database.  If it is set to false or absent (the default behavior), we merely mark the schema as deleted but it still exists in the database.
};

apiInstance.deleteJourneyOpenactionsSchema(schemaId, opts)
  .then(() => {
    console.log('deleteJourneyOpenactionsSchema returned successfully.');
  })
  .catch((err) => {
    console.log('There was a failure calling deleteJourneyOpenactionsSchema');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **schemaId** | **String** | Schema ID |  |
 **hardDelete** | **Boolean** | Boolean to perform a hard delete.  If hardDelete is set to true, the schema is completely and permanently removed from our database.  If it is set to false or absent (the default behavior), we merely mark the schema as deleted but it still exists in the database. | [optional] [default to false] |
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

<a name="deleteJourneyView"></a>

# void deleteJourneyView(viewId)


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

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
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

<a name="getExternalcontactsContactJourneySegments"></a>

# SegmentAssignmentListing getExternalcontactsContactJourneySegments(contactId, opts)


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

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.JourneyApi();

let contactId = "contactId_example"; // String | ExternalContact ID
let opts = { 
  'pageSize': "pageSize_example", // String | Number of entities to return. Maximum of 200.
  'after': "after_example", // String | The cursor that points to the end of the set of entities that has been returned.
  'segmentScope': "segmentScope_example", // String | Scope to filter on. If not specified, both session-scoped and customer-scoped assignments are returned.
  'assignmentState': "assignmentState_example", // String | Assignment state to filter on. If not specified, both assigned and unassigned assignments are returned.
  'includeMerged': true // Boolean | Indicates whether to return segment assignments from all external contacts in the merge-set of the given one.
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
 **pageSize** | **String** | Number of entities to return. Maximum of 200. | [optional]  |
 **after** | **String** | The cursor that points to the end of the set of entities that has been returned. | [optional]  |
 **segmentScope** | **String** | Scope to filter on. If not specified, both session-scoped and customer-scoped assignments are returned. | [optional] <br />**Values**: Session, Customer |
 **assignmentState** | **String** | Assignment state to filter on. If not specified, both assigned and unassigned assignments are returned. | [optional] <br />**Values**: Assigned, Unassigned |
 **includeMerged** | **Boolean** | Indicates whether to return segment assignments from all external contacts in the merge-set of the given one. | [optional]  |
{: class="table table-striped"}

### Return type

**SegmentAssignmentListing**

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

<a name="getJourneyDeploymentCustomerBeacons"></a>

# void getJourneyDeploymentCustomerBeacons(deploymentId, customerCookieId, opts)


GET /api/v2/journey/deployments/{deploymentId}/customers/{customerCookieId}/beacons

Sends web beacon, used for tracking customer activity on a website via transparent pixel.

Requires NO permissions:

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

let apiInstance = new platformClient.JourneyApi();

let deploymentId = "deploymentId_example"; // String | The ID of the deployment sending the beacon.
let customerCookieId = "customerCookieId_example"; // String | ID of the customer associated with the beacon.
let opts = { 
  'data': "data_example", // String | The base-64 encoded beacon data which contains tracking information from web sessions.
  'type': "type_example" // String | The type of the beacon request.
};

apiInstance.getJourneyDeploymentCustomerBeacons(deploymentId, customerCookieId, opts)
  .then(() => {
    console.log('getJourneyDeploymentCustomerBeacons returned successfully.');
  })
  .catch((err) => {
    console.log('There was a failure calling getJourneyDeploymentCustomerBeacons');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **deploymentId** | **String** | The ID of the deployment sending the beacon. |  |
 **customerCookieId** | **String** | ID of the customer associated with the beacon. |  |
 **data** | **String** | The base-64 encoded beacon data which contains tracking information from web sessions. | [optional]  |
 **type** | **String** | The type of the beacon request. | [optional] <br />**Values**: Pageview, Record, WebActionEvent |
{: class="table table-striped"}

### Return type

void (no response body)

<a name="getJourneyDeploymentCustomerPing"></a>

# DeploymentPing getJourneyDeploymentCustomerPing(deploymentId, customerCookieId, opts)


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
  'dl': "dl_example", // String | Page URL if overridden or URL fragment identifier (window.location.hash).
  'dt': "dt_example", // String | Page title.
  'appNamespace': "appNamespace_example", // String | Namespace of the application (e.g. com.genesys.bancodinero). Used for domain filtering in app sessions
  'sessionId': "sessionId_example", // String | sessionId
  'sinceLastBeaconMilliseconds': 3.4 // Number | The number of milliseconds since the most recent beacon.
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
 **dl** | **String** | Page URL if overridden or URL fragment identifier (window.location.hash). | [optional]  |
 **dt** | **String** | Page title. | [optional]  |
 **appNamespace** | **String** | Namespace of the application (e.g. com.genesys.bancodinero). Used for domain filtering in app sessions | [optional]  |
 **sessionId** | **String** | sessionId | [optional]  |
 **sinceLastBeaconMilliseconds** | **Number** | The number of milliseconds since the most recent beacon. | [optional]  |
{: class="table table-striped"}

### Return type

**DeploymentPing**

<a name="getJourneyEventtype"></a>

# JourneyEventType getJourneyEventtype(eventTypeId)


GET /api/v2/journey/eventtypes/{eventTypeId}

Retrieve a single event type.

Requires ANY permissions:

* journey:eventtype:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.JourneyApi();

let eventTypeId = "eventTypeId_example"; // String | ID of the event type.

apiInstance.getJourneyEventtype(eventTypeId)
  .then((data) => {
    console.log(`getJourneyEventtype success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getJourneyEventtype');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **eventTypeId** | **String** | ID of the event type. |  |
{: class="table table-striped"}

### Return type

**JourneyEventType**

<a name="getJourneyEventtypes"></a>

# JourneyEventTypeListing getJourneyEventtypes(opts)


GET /api/v2/journey/eventtypes

Retrieve all event types.

Requires ANY permissions:

* journey:eventtype:view

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
  'streamType': "streamType_example", // String | The stream type for which event types are to be retrieved.
  'sessionType': "sessionType_example", // String | The name of the session type for which event types are to be retrieved.
  'queryFields': ["queryFields_example"], // [String] | Event Type field(s) to query on. Requires 'queryValue' to also be set.
  'queryValue': "queryValue_example" // String | Value to query on. Requires 'queryFields' to also be set.
};

apiInstance.getJourneyEventtypes(opts)
  .then((data) => {
    console.log(`getJourneyEventtypes success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getJourneyEventtypes');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **pageNumber** | **Number** | Page number | [optional] [default to 1] |
 **pageSize** | **Number** | Page size | [optional] [default to 25] |
 **sortBy** | **String** | Field(s) to sort by. Prefix with '-' for descending (e.g. sortBy=name,-createdDate). | [optional]  |
 **streamType** | **String** | The stream type for which event types are to be retrieved. | [optional] <br />**Values**: Web, Custom, Conversation, App |
 **sessionType** | **String** | The name of the session type for which event types are to be retrieved. | [optional]  |
 **queryFields** | **[String]** | Event Type field(s) to query on. Requires 'queryValue' to also be set. | [optional]  |
 **queryValue** | **String** | Value to query on. Requires 'queryFields' to also be set. | [optional]  |
{: class="table table-striped"}

### Return type

**JourneyEventTypeListing**

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
  'assignmentState': "assignmentState_example", // String | Assignment state to filter on. If not specified, both assigned and unassigned assignments are returned.
  'includeMerged': true // Boolean | Indicates whether to return segment assignments from all external contacts in the merge-set of the given one.
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
 **includeMerged** | **Boolean** | Indicates whether to return segment assignments from all external contacts in the merge-set of the given one. | [optional]  |
{: class="table table-striped"}

### Return type

**SegmentAssignmentListing**

<a name="getJourneyOpenaction"></a>

# OpenAction getJourneyOpenaction(openActionId)


GET /api/v2/journey/openactions/{openActionId}

Retrieve a single open action.

Requires ANY permissions:

* journey:openAction:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.JourneyApi();

let openActionId = "openActionId_example"; // String | Id of an open action

apiInstance.getJourneyOpenaction(openActionId)
  .then((data) => {
    console.log(`getJourneyOpenaction success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getJourneyOpenaction');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **openActionId** | **String** | Id of an open action |  |
{: class="table table-striped"}

### Return type

**OpenAction**

<a name="getJourneyOpenactions"></a>

# OpenActionListing getJourneyOpenactions(opts)


GET /api/v2/journey/openactions

Retrieve a paged listing of open actions.

Requires ANY permissions:

* journey:openAction:view

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
  'sortBy': "sortBy_example" // String | Field(s) to sort by. Prefix with '-' for descending (e.g. sortBy=displayName,-createdDate).
};

apiInstance.getJourneyOpenactions(opts)
  .then((data) => {
    console.log(`getJourneyOpenactions success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getJourneyOpenactions');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **pageNumber** | **Number** | Page number | [optional] [default to 1] |
 **pageSize** | **Number** | Page size | [optional] [default to 25] |
 **sortBy** | **String** | Field(s) to sort by. Prefix with '-' for descending (e.g. sortBy=displayName,-createdDate). | [optional]  |
{: class="table table-striped"}

### Return type

**OpenActionListing**

<a name="getJourneyOpenactionsSchema"></a>

# DataSchema getJourneyOpenactionsSchema(schemaId)


GET /api/v2/journey/openactions/schemas/{schemaId}

Get a schema

Requires ANY permissions:

* journey:openActionSchema:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.JourneyApi();

let schemaId = "schemaId_example"; // String | Schema ID

apiInstance.getJourneyOpenactionsSchema(schemaId)
  .then((data) => {
    console.log(`getJourneyOpenactionsSchema success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getJourneyOpenactionsSchema');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **schemaId** | **String** | Schema ID |  |
{: class="table table-striped"}

### Return type

**DataSchema**

<a name="getJourneyOpenactionsSchemaVersion"></a>

# DataSchema getJourneyOpenactionsSchemaVersion(schemaId, versionId)


GET /api/v2/journey/openactions/schemas/{schemaId}/versions/{versionId}

Get a specific version of a schema

Requires ANY permissions:

* journey:openActionSchema:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.JourneyApi();

let schemaId = "schemaId_example"; // String | Schema ID
let versionId = "versionId_example"; // String | Schema version

apiInstance.getJourneyOpenactionsSchemaVersion(schemaId, versionId)
  .then((data) => {
    console.log(`getJourneyOpenactionsSchemaVersion success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getJourneyOpenactionsSchemaVersion');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **schemaId** | **String** | Schema ID |  |
 **versionId** | **String** | Schema version |  |
{: class="table table-striped"}

### Return type

**DataSchema**

<a name="getJourneyOpenactionsSchemaVersions"></a>

# DataSchema getJourneyOpenactionsSchemaVersions(schemaId)


GET /api/v2/journey/openactions/schemas/{schemaId}/versions

Get all versions of a schema

Requires ANY permissions:

* journey:openActionSchema:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.JourneyApi();

let schemaId = "schemaId_example"; // String | Schema ID

apiInstance.getJourneyOpenactionsSchemaVersions(schemaId)
  .then((data) => {
    console.log(`getJourneyOpenactionsSchemaVersions success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getJourneyOpenactionsSchemaVersions');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **schemaId** | **String** | Schema ID |  |
{: class="table table-striped"}

### Return type

**DataSchema**

<a name="getJourneyOpenactionsSchemas"></a>

# DataSchemaListing getJourneyOpenactionsSchemas()


GET /api/v2/journey/openactions/schemas

Get a list of schemas.

Requires ANY permissions:

* journey:openActionSchema:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.JourneyApi();

apiInstance.getJourneyOpenactionsSchemas()
  .then((data) => {
    console.log(`getJourneyOpenactionsSchemas success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getJourneyOpenactionsSchemas');
    console.error(err);
  });
```

### Parameters

This endpoint does not need any parameter.


### Return type

**DataSchemaListing**

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

<a name="getJourneySessionRecent"></a>

# SessionListing getJourneySessionRecent(sessionType, opts)


GET /api/v2/journey/sessions/{sessionType}/recent

Retrieve all recent sessions.

Requires ALL permissions:

* journey:recentsessions:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.JourneyApi();

let sessionType = "sessionType_example"; // String | Filter recent sessions by type.
let opts = { 
  'pageSize': "pageSize_example", // String | Number of entities to return. Maximum of 200.
  'after': "after_example", // String | The cursor that points to the end of the set of entities that has been returned.
  'assignedSegmentId': "assignedSegmentId_example" // String | Filter recent sessions by an assigned segment ID.
};

apiInstance.getJourneySessionRecent(sessionType, opts)
  .then((data) => {
    console.log(`getJourneySessionRecent success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getJourneySessionRecent');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **sessionType** | **String** | Filter recent sessions by type. | <br />**Values**: web, app |
 **pageSize** | **String** | Number of entities to return. Maximum of 200. | [optional]  |
 **after** | **String** | The cursor that points to the end of the set of entities that has been returned. | [optional]  |
 **assignedSegmentId** | **String** | Filter recent sessions by an assigned segment ID. | [optional]  |
{: class="table table-striped"}

### Return type

**SessionListing**

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

<a name="getJourneySettingsClickstream"></a>

# ClickstreamSettings getJourneySettingsClickstream()


GET /api/v2/journey/settings/clickstream

Retrieve clickstream settings.

Requires ANY permissions:

* journey:settings:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.JourneyApi();

apiInstance.getJourneySettingsClickstream()
  .then((data) => {
    console.log(`getJourneySettingsClickstream success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getJourneySettingsClickstream');
    console.error(err);
  });
```

### Parameters

This endpoint does not need any parameter.


### Return type

**ClickstreamSettings**

<a name="getJourneySettingsWebactions"></a>

# WebActionSettings getJourneySettingsWebactions()


GET /api/v2/journey/settings/webactions

Retrieve web action settings.

Requires ANY permissions:

* journey:settings:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.JourneyApi();

apiInstance.getJourneySettingsWebactions()
  .then((data) => {
    console.log(`getJourneySettingsWebactions success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getJourneySettingsWebactions');
    console.error(err);
  });
```

### Parameters

This endpoint does not need any parameter.


### Return type

**WebActionSettings**

<a name="getJourneyView"></a>

# JourneyView getJourneyView(viewId)


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

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
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
{: class="table table-striped"}

### Return type

**JourneyView**

<a name="getJourneyViewVersionJob"></a>

# JourneyViewJob getJourneyViewVersionJob(viewId, journeyVersionId, jobId)


GET /api/v2/journey/views/{viewId}/versions/{journeyVersionId}/jobs/{jobId}

Get a job for a journeyView.

used for long descriptions

Requires ALL permissions:

* journey:viewsJobs:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
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
{: class="table table-striped"}

### Return type

**JourneyViewJob**

<a name="getJourneyViewVersionJobResults"></a>

# JourneyViewResult getJourneyViewVersionJobResults(viewId, journeyViewVersion, jobId)


GET /api/v2/journey/views/{viewId}/versions/{journeyViewVersion}/jobs/{jobId}/results

Get a JourneyViewResult.

used for long descriptions

Requires ALL permissions:

* journey:viewsResults:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
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
{: class="table table-striped"}

### Return type

**JourneyViewResult**

<a name="getJourneyViewVersionJobsLatest"></a>

# JourneyViewJob getJourneyViewVersionJobsLatest(viewId, journeyVersionId)


GET /api/v2/journey/views/{viewId}/versions/{journeyVersionId}/jobs/latest

Query a job for a journeyView.

used for long descriptions

Requires ALL permissions:

* journey:viewsJobs:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
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
{: class="table table-striped"}

### Return type

**JourneyViewJob**

<a name="getJourneyViews"></a>

# AddressableEntityListing getJourneyViews()


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

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.JourneyApi();

apiInstance.getJourneyViews()
  .then((data) => {
    console.log(`getJourneyViews success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getJourneyViews');
    console.error(err);
  });
```

### Parameters

This endpoint does not need any parameter.


### Return type

**AddressableEntityListing**

<a name="getJourneyViewsEventdefinition"></a>

# JourneyEventDefinition getJourneyViewsEventdefinition(eventDefinitionId)


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

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
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
{: class="table table-striped"}

### Return type

**JourneyEventDefinition**

<a name="getJourneyViewsEventdefinitions"></a>

# JourneyEventDefinitionListing getJourneyViewsEventdefinitions()


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

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
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

<a name="getJourneyWebsiteCustomerBeacons"></a>

# void getJourneyWebsiteCustomerBeacons(websiteId, customerCookieId, opts)


GET /api/v2/journey/websites/{websiteId}/customers/{customerCookieId}/beacons

Sends web beacon, used for tracking customer activity on a website via transparent pixel.

Requires NO permissions:

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

let apiInstance = new platformClient.JourneyApi();

let websiteId = "websiteId_example"; // String | The ID of the website making the request.
let customerCookieId = "customerCookieId_example"; // String | Customer cookie ID.
let opts = { 
  'data': "data_example", // String | The base-64 encoded beacon data which contains tracking information from web sessions.
  'type': "type_example", // String | The type of the beacon request.
  'tid': "tid_example" // String | The tracker ID of the organization making the request.
};

apiInstance.getJourneyWebsiteCustomerBeacons(websiteId, customerCookieId, opts)
  .then(() => {
    console.log('getJourneyWebsiteCustomerBeacons returned successfully.');
  })
  .catch((err) => {
    console.log('There was a failure calling getJourneyWebsiteCustomerBeacons');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **websiteId** | **String** | The ID of the website making the request. |  |
 **customerCookieId** | **String** | Customer cookie ID. |  |
 **data** | **String** | The base-64 encoded beacon data which contains tracking information from web sessions. | [optional]  |
 **type** | **String** | The type of the beacon request. | [optional] <br />**Values**: Pageview, Record, WebActionEvent |
 **tid** | **String** | The tracker ID of the organization making the request. | [optional]  |
{: class="table table-striped"}

### Return type

void (no response body)

<a name="getJourneyWebsiteCustomerPing"></a>

# WebsitePing getJourneyWebsiteCustomerPing(websiteId, customerCookieId, visitId, t, opts)


GET /api/v2/journey/websites/{websiteId}/customers/{customerCookieId}/ping

Send single page ping.

Requires NO permissions:

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

let apiInstance = new platformClient.JourneyApi();

let websiteId = "websiteId_example"; // String | The ID of the website making the request.
let customerCookieId = "customerCookieId_example"; // String | Customer cookie ID.
let visitId = "visitId_example"; // String | Visit ID.
let t = 3.4; // Number | Timestamp in milliseconds.
let opts = { 
  'dl': "dl_example", // String | Page URL if overridden or URL fragment identifier (window.location.hash).
  'dt': "dt_example", // String | Page title.
  'appNamespace': "appNamespace_example", // String | Namespace of the application (e.g. com.genesys.bancodinero). Used for domain filtering in app sessions
  'sessionId': "sessionId_example", // String | sessionId
  'sinceLastBeaconMilliseconds': 3.4 // Number | The number of milliseconds since the most recent beacon.
};

apiInstance.getJourneyWebsiteCustomerPing(websiteId, customerCookieId, visitId, t, opts)
  .then((data) => {
    console.log(`getJourneyWebsiteCustomerPing success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getJourneyWebsiteCustomerPing');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **websiteId** | **String** | The ID of the website making the request. |  |
 **customerCookieId** | **String** | Customer cookie ID. |  |
 **visitId** | **String** | Visit ID. |  |
 **t** | **Number** | Timestamp in milliseconds. |  |
 **dl** | **String** | Page URL if overridden or URL fragment identifier (window.location.hash). | [optional]  |
 **dt** | **String** | Page title. | [optional]  |
 **appNamespace** | **String** | Namespace of the application (e.g. com.genesys.bancodinero). Used for domain filtering in app sessions | [optional]  |
 **sessionId** | **String** | sessionId | [optional]  |
 **sinceLastBeaconMilliseconds** | **Number** | The number of milliseconds since the most recent beacon. | [optional]  |
{: class="table table-striped"}

### Return type

**WebsitePing**

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

<a name="patchJourneyEventtype"></a>

# JourneyEventType patchJourneyEventtype(eventTypeId, opts)


PATCH /api/v2/journey/eventtypes/{eventTypeId}

Update a single event type.

Requires ANY permissions:

* journey:eventtype:edit

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.JourneyApi();

let eventTypeId = "eventTypeId_example"; // String | ID of the event type.
let opts = { 
  'body': {} // Object | 
};

apiInstance.patchJourneyEventtype(eventTypeId, opts)
  .then((data) => {
    console.log(`patchJourneyEventtype success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling patchJourneyEventtype');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **eventTypeId** | **String** | ID of the event type. |  |
 **body** | **Object** |  | [optional]  |
{: class="table table-striped"}

### Return type

**JourneyEventType**

<a name="patchJourneyOpenaction"></a>

# OpenAction patchJourneyOpenaction(openActionId, opts)


PATCH /api/v2/journey/openactions/{openActionId}

Update an open action.

Requires ANY permissions:

* journey:openAction:edit

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.JourneyApi();

let openActionId = "openActionId_example"; // String | Id of an open action
let opts = { 
  'body': {} // Object | 
};

apiInstance.patchJourneyOpenaction(openActionId, opts)
  .then((data) => {
    console.log(`patchJourneyOpenaction success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling patchJourneyOpenaction');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **openActionId** | **String** | Id of an open action |  |
 **body** | **Object** |  | [optional]  |
{: class="table table-striped"}

### Return type

**OpenAction**

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

<a name="patchJourneySettingsClickstream"></a>

# ClickstreamSettings patchJourneySettingsClickstream(opts)


PATCH /api/v2/journey/settings/clickstream

Update clickstream settings.

Requires ANY permissions:

* journey:settings:edit

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

apiInstance.patchJourneySettingsClickstream(opts)
  .then((data) => {
    console.log(`patchJourneySettingsClickstream success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling patchJourneySettingsClickstream');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **body** | **Object** |  | [optional]  |
{: class="table table-striped"}

### Return type

**ClickstreamSettings**

<a name="patchJourneySettingsWebactions"></a>

# WebActionSettings patchJourneySettingsWebactions(opts)


PATCH /api/v2/journey/settings/webactions

Update web action settings.

Requires ANY permissions:

* journey:settings:edit

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

apiInstance.patchJourneySettingsWebactions(opts)
  .then((data) => {
    console.log(`patchJourneySettingsWebactions success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling patchJourneySettingsWebactions');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **body** | **Object** |  | [optional]  |
{: class="table table-striped"}

### Return type

**WebActionSettings**

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

<a name="postExternalcontactsContactJourneySegments"></a>

# void postExternalcontactsContactJourneySegments(contactId, opts)


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

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.JourneyApi();

let contactId = "contactId_example"; // String | ExternalContact ID
let opts = { 
  'body': [{}] // Object | 
};

apiInstance.postExternalcontactsContactJourneySegments(contactId, opts)
  .then(() => {
    console.log('postExternalcontactsContactJourneySegments returned successfully.');
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
{: class="table table-striped"}

### Return type

void (no response body)

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

<a name="postJourneyActiontargetsBulk"></a>

# EnrichedActionTargetBulkResult postJourneyActiontargetsBulk(opts)


POST /api/v2/journey/actiontargets/bulk

Perform bulk upsert of action targets.

Requires ANY permissions:

* journey:actiontarget:add

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

apiInstance.postJourneyActiontargetsBulk(opts)
  .then((data) => {
    console.log(`postJourneyActiontargetsBulk success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling postJourneyActiontargetsBulk');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **body** | **Object** |  | [optional]  |
{: class="table table-striped"}

### Return type

**EnrichedActionTargetBulkResult**

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

<a name="postJourneyDeploymentActionevent"></a>

# void postJourneyDeploymentActionevent(deploymentId, body)


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
{: class="table table-striped"}

### Return type

void (no response body)

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

<a name="postJourneyDeploymentAppeventsBulk"></a>

# BulkAppEventResponse postJourneyDeploymentAppeventsBulk(deploymentId, opts)


POST /api/v2/journey/deployments/{deploymentId}/appevents/bulk

Creates multiple journey app events. Any unprocessed app events are returned in the body for the client to retry in the event of a partial success.

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

apiInstance.postJourneyDeploymentAppeventsBulk(deploymentId, opts)
  .then((data) => {
    console.log(`postJourneyDeploymentAppeventsBulk success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling postJourneyDeploymentAppeventsBulk');
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

**BulkAppEventResponse**

<a name="postJourneyDeploymentCustomerBeacons"></a>

# void postJourneyDeploymentCustomerBeacons(deploymentId, customerCookieId, opts)


POST /api/v2/journey/deployments/{deploymentId}/customers/{customerCookieId}/beacons

Sends web beacon, used for tracking customer activity on a website, with support for the navigator.sendBeacon API available in most browsers.

Requires NO permissions:

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

let apiInstance = new platformClient.JourneyApi();

let deploymentId = "deploymentId_example"; // String | The ID of the deployment sending the beacon.
let customerCookieId = "customerCookieId_example"; // String | ID of the customer associated with the beacon.
let opts = { 
  'data': "data_example", // String | The base-64 encoded beacon data which contains tracking information from web sessions.
  'type': "type_example" // String | The type of the beacon request.
};

apiInstance.postJourneyDeploymentCustomerBeacons(deploymentId, customerCookieId, opts)
  .then(() => {
    console.log('postJourneyDeploymentCustomerBeacons returned successfully.');
  })
  .catch((err) => {
    console.log('There was a failure calling postJourneyDeploymentCustomerBeacons');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **deploymentId** | **String** | The ID of the deployment sending the beacon. |  |
 **customerCookieId** | **String** | ID of the customer associated with the beacon. |  |
 **data** | **String** | The base-64 encoded beacon data which contains tracking information from web sessions. | [optional]  |
 **type** | **String** | The type of the beacon request. | [optional] <br />**Values**: Pageview, Record, WebActionEvent |
{: class="table table-striped"}

### Return type

void (no response body)

<a name="postJourneyEventtypes"></a>

# JourneyEventType postJourneyEventtypes(opts)


POST /api/v2/journey/eventtypes

Create a single event type.

Requires ANY permissions:

* journey:eventtype:add

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

apiInstance.postJourneyEventtypes(opts)
  .then((data) => {
    console.log(`postJourneyEventtypes success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling postJourneyEventtypes');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **body** | **Object** |  | [optional]  |
{: class="table table-striped"}

### Return type

**JourneyEventType**

<a name="postJourneyExternalcontactSegments"></a>

# void postJourneyExternalcontactSegments(externalContactId, opts)


POST /api/v2/journey/externalcontacts/{externalContactId}/segments

Assign/Unassign up to 10 segments to/from an external contact or, if a segment is already assigned, update the expiry date of the segment assignment. Any unprocessed segment assignments are returned in the body for the client to retry, in the event of a partial success.

Requires ANY permissions:

* journey:segmentassignment:add
* journey:segmentassignment:delete

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

<a name="postJourneyOpenactions"></a>

# OpenAction postJourneyOpenactions(opts)


POST /api/v2/journey/openactions

Create an open action.

Requires ANY permissions:

* journey:openAction:add

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

apiInstance.postJourneyOpenactions(opts)
  .then((data) => {
    console.log(`postJourneyOpenactions success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling postJourneyOpenactions');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **body** | **Object** |  | [optional]  |
{: class="table table-striped"}

### Return type

**OpenAction**

<a name="postJourneyOpenactionsSchemas"></a>

# DataSchema postJourneyOpenactionsSchemas(body)


POST /api/v2/journey/openactions/schemas

Create a schema

Requires ANY permissions:

* journey:openActionSchema:add

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.JourneyApi();

let body = {}; // Object | Schema

apiInstance.postJourneyOpenactionsSchemas(body)
  .then((data) => {
    console.log(`postJourneyOpenactionsSchemas success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling postJourneyOpenactionsSchemas');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **body** | **Object** | Schema |  |
{: class="table table-striped"}

### Return type

**DataSchema**

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

<a name="postJourneyViewVersionJobs"></a>

# JourneyViewJob postJourneyViewVersionJobs(viewId, journeyVersionId)


POST /api/v2/journey/views/{viewId}/versions/{journeyVersionId}/jobs

Submit an execution for a journeyView.

used for long descriptions

Requires ALL permissions:

* journey:viewsJobs:add

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
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
{: class="table table-striped"}

### Return type

**JourneyViewJob**

<a name="postJourneyViewVersions"></a>

# JourneyView postJourneyViewVersions(viewId, body)


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

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
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
{: class="table table-striped"}

### Return type

**JourneyView**

<a name="postJourneyViews"></a>

# JourneyView postJourneyViews(body)


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

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
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
{: class="table table-striped"}

### Return type

**JourneyView**

<a name="postJourneyWebsiteCustomerBeacons"></a>

# void postJourneyWebsiteCustomerBeacons(websiteId, customerCookieId, opts)


POST /api/v2/journey/websites/{websiteId}/customers/{customerCookieId}/beacons

Sends web beacon, used for tracking customer activity on a website, with support for navigator.sendBeacon API that's available in most modern browsers.

Requires NO permissions:

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

let apiInstance = new platformClient.JourneyApi();

let websiteId = "websiteId_example"; // String | The ID of the website making the request.
let customerCookieId = "customerCookieId_example"; // String | Customer cookie ID.
let opts = { 
  'data': "data_example", // String | The base-64 encoded beacon data which contains tracking information from web sessions.
  'type': "type_example", // String | The type of the beacon request.
  'tid': "tid_example" // String | The tracker ID of the organization making the request.
};

apiInstance.postJourneyWebsiteCustomerBeacons(websiteId, customerCookieId, opts)
  .then(() => {
    console.log('postJourneyWebsiteCustomerBeacons returned successfully.');
  })
  .catch((err) => {
    console.log('There was a failure calling postJourneyWebsiteCustomerBeacons');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **websiteId** | **String** | The ID of the website making the request. |  |
 **customerCookieId** | **String** | Customer cookie ID. |  |
 **data** | **String** | The base-64 encoded beacon data which contains tracking information from web sessions. | [optional]  |
 **type** | **String** | The type of the beacon request. | [optional] <br />**Values**: Pageview, Record, WebActionEvent |
 **tid** | **String** | The tracker ID of the organization making the request. | [optional]  |
{: class="table table-striped"}

### Return type

void (no response body)

<a name="putJourneyOpenactionsSchema"></a>

# DataSchema putJourneyOpenactionsSchema(schemaId, body)


PUT /api/v2/journey/openactions/schemas/{schemaId}

Update a schema

Requires ANY permissions:

* journey:openActionSchema:edit

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.JourneyApi();

let schemaId = "schemaId_example"; // String | Schema ID
let body = {}; // Object | Data Schema

apiInstance.putJourneyOpenactionsSchema(schemaId, body)
  .then((data) => {
    console.log(`putJourneyOpenactionsSchema success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling putJourneyOpenactionsSchema');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **schemaId** | **String** | Schema ID |  |
 **body** | **Object** | Data Schema |  |
{: class="table table-striped"}

### Return type

**DataSchema**

