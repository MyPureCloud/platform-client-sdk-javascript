# QualityApi

# platformClient.QualityApi

All URIs are relative to *https://api.mypurecloud.com*

| Method | HTTP request | Description |
| ------------- | ------------- | ------------- |
[**deleteAnalyticsEvaluationsAggregatesJob**](QualityApi#deleteAnalyticsEvaluationsAggregatesJob) | **DELETE** /api/v2/analytics/evaluations/aggregates/jobs/{jobId} | Delete/cancel an async request for evaluation aggregates
[**deleteAnalyticsSurveysAggregatesJob**](QualityApi#deleteAnalyticsSurveysAggregatesJob) | **DELETE** /api/v2/analytics/surveys/aggregates/jobs/{jobId} | Delete/cancel an async request for survey aggregates
[**deleteQualityCalibration**](QualityApi#deleteQualityCalibration) | **DELETE** /api/v2/quality/calibrations/{calibrationId} | Delete a calibration by id.
[**deleteQualityConversationEvaluation**](QualityApi#deleteQualityConversationEvaluation) | **DELETE** /api/v2/quality/conversations/{conversationId}/evaluations/{evaluationId} | Delete an evaluation
[**deleteQualityForm**](QualityApi#deleteQualityForm) | **DELETE** /api/v2/quality/forms/{formId} | Delete an evaluation form.
[**deleteQualityFormsEvaluation**](QualityApi#deleteQualityFormsEvaluation) | **DELETE** /api/v2/quality/forms/evaluations/{formId} | Delete an evaluation form.
[**deleteQualityFormsSurvey**](QualityApi#deleteQualityFormsSurvey) | **DELETE** /api/v2/quality/forms/surveys/{formId} | Delete a survey form.
[**getAnalyticsEvaluationsAggregatesJob**](QualityApi#getAnalyticsEvaluationsAggregatesJob) | **GET** /api/v2/analytics/evaluations/aggregates/jobs/{jobId} | Get status for async query for evaluation aggregates
[**getAnalyticsEvaluationsAggregatesJobResults**](QualityApi#getAnalyticsEvaluationsAggregatesJobResults) | **GET** /api/v2/analytics/evaluations/aggregates/jobs/{jobId}/results | Fetch a page of results for an async aggregates query
[**getAnalyticsSurveysAggregatesJob**](QualityApi#getAnalyticsSurveysAggregatesJob) | **GET** /api/v2/analytics/surveys/aggregates/jobs/{jobId} | Get status for async query for survey aggregates
[**getAnalyticsSurveysAggregatesJobResults**](QualityApi#getAnalyticsSurveysAggregatesJobResults) | **GET** /api/v2/analytics/surveys/aggregates/jobs/{jobId}/results | Fetch a page of results for an async aggregates query
[**getQualityAgentsActivity**](QualityApi#getQualityAgentsActivity) | **GET** /api/v2/quality/agents/activity | Gets a list of Agent Activities
[**getQualityCalibration**](QualityApi#getQualityCalibration) | **GET** /api/v2/quality/calibrations/{calibrationId} | Get a calibration by id.  Requires either calibrator id or conversation id
[**getQualityCalibrations**](QualityApi#getQualityCalibrations) | **GET** /api/v2/quality/calibrations | Get the list of calibrations
[**getQualityConversationEvaluation**](QualityApi#getQualityConversationEvaluation) | **GET** /api/v2/quality/conversations/{conversationId}/evaluations/{evaluationId} | Get an evaluation
[**getQualityConversationSurveys**](QualityApi#getQualityConversationSurveys) | **GET** /api/v2/quality/conversations/{conversationId}/surveys | Get the surveys for a conversation
[**getQualityConversationsAuditsQueryTransactionId**](QualityApi#getQualityConversationsAuditsQueryTransactionId) | **GET** /api/v2/quality/conversations/audits/query/{transactionId} | Get status of audit query execution
[**getQualityConversationsAuditsQueryTransactionIdResults**](QualityApi#getQualityConversationsAuditsQueryTransactionIdResults) | **GET** /api/v2/quality/conversations/audits/query/{transactionId}/results | Get results of audit query
[**getQualityEvaluationsQuery**](QualityApi#getQualityEvaluationsQuery) | **GET** /api/v2/quality/evaluations/query | Queries Evaluations and returns a paged list
[**getQualityEvaluatorsActivity**](QualityApi#getQualityEvaluatorsActivity) | **GET** /api/v2/quality/evaluators/activity | Get an evaluator activity
[**getQualityForm**](QualityApi#getQualityForm) | **GET** /api/v2/quality/forms/{formId} | Get an evaluation form
[**getQualityFormVersions**](QualityApi#getQualityFormVersions) | **GET** /api/v2/quality/forms/{formId}/versions | Gets all the revisions for a specific evaluation.
[**getQualityForms**](QualityApi#getQualityForms) | **GET** /api/v2/quality/forms | Get the list of evaluation forms. If you set expand=publishHistory, then you will be able to get published versions for each corresponding evaluation form.
[**getQualityFormsEvaluation**](QualityApi#getQualityFormsEvaluation) | **GET** /api/v2/quality/forms/evaluations/{formId} | Get an evaluation form
[**getQualityFormsEvaluationVersions**](QualityApi#getQualityFormsEvaluationVersions) | **GET** /api/v2/quality/forms/evaluations/{formId}/versions | Gets all the revisions for a specific evaluation.
[**getQualityFormsEvaluations**](QualityApi#getQualityFormsEvaluations) | **GET** /api/v2/quality/forms/evaluations | Get the list of evaluation forms
[**getQualityFormsEvaluationsBulkContexts**](QualityApi#getQualityFormsEvaluationsBulkContexts) | **GET** /api/v2/quality/forms/evaluations/bulk/contexts | Retrieve a list of the latest published evaluation form versions by context ids
[**getQualityFormsSurvey**](QualityApi#getQualityFormsSurvey) | **GET** /api/v2/quality/forms/surveys/{formId} | Get a survey form
[**getQualityFormsSurveyVersions**](QualityApi#getQualityFormsSurveyVersions) | **GET** /api/v2/quality/forms/surveys/{formId}/versions | Gets all the revisions for a specific survey.
[**getQualityFormsSurveys**](QualityApi#getQualityFormsSurveys) | **GET** /api/v2/quality/forms/surveys | Get the list of survey forms. If you set expand=publishHistory, then you will be able to get published versions for each corresponding survey form.
[**getQualityFormsSurveysBulk**](QualityApi#getQualityFormsSurveysBulk) | **GET** /api/v2/quality/forms/surveys/bulk | Retrieve a list of survey forms by their ids
[**getQualityFormsSurveysBulkContexts**](QualityApi#getQualityFormsSurveysBulkContexts) | **GET** /api/v2/quality/forms/surveys/bulk/contexts | Retrieve a list of the latest form versions by context ids
[**getQualityPublishedform**](QualityApi#getQualityPublishedform) | **GET** /api/v2/quality/publishedforms/{formId} | Get the published evaluation forms.
[**getQualityPublishedforms**](QualityApi#getQualityPublishedforms) | **GET** /api/v2/quality/publishedforms | Get the published evaluation forms.
[**getQualityPublishedformsEvaluation**](QualityApi#getQualityPublishedformsEvaluation) | **GET** /api/v2/quality/publishedforms/evaluations/{formId} | Get the most recent published version of an evaluation form.
[**getQualityPublishedformsEvaluations**](QualityApi#getQualityPublishedformsEvaluations) | **GET** /api/v2/quality/publishedforms/evaluations | Get the published evaluation forms.
[**getQualityPublishedformsSurvey**](QualityApi#getQualityPublishedformsSurvey) | **GET** /api/v2/quality/publishedforms/surveys/{formId} | Get the most recent published version of a survey form.
[**getQualityPublishedformsSurveys**](QualityApi#getQualityPublishedformsSurveys) | **GET** /api/v2/quality/publishedforms/surveys | Get the published survey forms.
[**getQualitySurvey**](QualityApi#getQualitySurvey) | **GET** /api/v2/quality/surveys/{surveyId} | Get a survey for a conversation
[**getQualitySurveysScorable**](QualityApi#getQualitySurveysScorable) | **GET** /api/v2/quality/surveys/scorable | Get a survey as an end-customer, for the purposes of scoring it.
[**patchQualityFormsSurvey**](QualityApi#patchQualityFormsSurvey) | **PATCH** /api/v2/quality/forms/surveys/{formId} | Disable a particular version of a survey form and invalidates any invitations that have already been sent to customers using this version of the form.
[**postAnalyticsEvaluationsAggregatesJobs**](QualityApi#postAnalyticsEvaluationsAggregatesJobs) | **POST** /api/v2/analytics/evaluations/aggregates/jobs | Query for evaluation aggregates asynchronously
[**postAnalyticsEvaluationsAggregatesQuery**](QualityApi#postAnalyticsEvaluationsAggregatesQuery) | **POST** /api/v2/analytics/evaluations/aggregates/query | Query for evaluation aggregates
[**postAnalyticsSurveysAggregatesJobs**](QualityApi#postAnalyticsSurveysAggregatesJobs) | **POST** /api/v2/analytics/surveys/aggregates/jobs | Query for survey aggregates asynchronously
[**postAnalyticsSurveysAggregatesQuery**](QualityApi#postAnalyticsSurveysAggregatesQuery) | **POST** /api/v2/analytics/surveys/aggregates/query | Query for survey aggregates
[**postQualityCalibrations**](QualityApi#postQualityCalibrations) | **POST** /api/v2/quality/calibrations | Create a calibration
[**postQualityConversationEvaluations**](QualityApi#postQualityConversationEvaluations) | **POST** /api/v2/quality/conversations/{conversationId}/evaluations | Create an evaluation
[**postQualityConversationsAuditsQuery**](QualityApi#postQualityConversationsAuditsQuery) | **POST** /api/v2/quality/conversations/audits/query | Create audit query execution
[**postQualityEvaluationsAggregatesQueryMe**](QualityApi#postQualityEvaluationsAggregatesQueryMe) | **POST** /api/v2/quality/evaluations/aggregates/query/me | Query for evaluation aggregates for the current user
[**postQualityEvaluationsScoring**](QualityApi#postQualityEvaluationsScoring) | **POST** /api/v2/quality/evaluations/scoring | Score evaluation
[**postQualityForms**](QualityApi#postQualityForms) | **POST** /api/v2/quality/forms | Create an evaluation form.
[**postQualityFormsEvaluations**](QualityApi#postQualityFormsEvaluations) | **POST** /api/v2/quality/forms/evaluations | Create an evaluation form.
[**postQualityFormsSurveys**](QualityApi#postQualityFormsSurveys) | **POST** /api/v2/quality/forms/surveys | Create a survey form.
[**postQualityPublishedforms**](QualityApi#postQualityPublishedforms) | **POST** /api/v2/quality/publishedforms | Publish an evaluation form.
[**postQualityPublishedformsEvaluations**](QualityApi#postQualityPublishedformsEvaluations) | **POST** /api/v2/quality/publishedforms/evaluations | Publish an evaluation form.
[**postQualityPublishedformsSurveys**](QualityApi#postQualityPublishedformsSurveys) | **POST** /api/v2/quality/publishedforms/surveys | Publish a survey form.
[**postQualitySurveysScoring**](QualityApi#postQualitySurveysScoring) | **POST** /api/v2/quality/surveys/scoring | Score survey
[**putQualityCalibration**](QualityApi#putQualityCalibration) | **PUT** /api/v2/quality/calibrations/{calibrationId} | Update a calibration to the specified calibration via PUT.  Editable fields include: evaluators, expertEvaluator, and scoringIndex
[**putQualityConversationEvaluation**](QualityApi#putQualityConversationEvaluation) | **PUT** /api/v2/quality/conversations/{conversationId}/evaluations/{evaluationId} | Update an evaluation
[**putQualityForm**](QualityApi#putQualityForm) | **PUT** /api/v2/quality/forms/{formId} | Update an evaluation form.
[**putQualityFormsEvaluation**](QualityApi#putQualityFormsEvaluation) | **PUT** /api/v2/quality/forms/evaluations/{formId} | Update an evaluation form.
[**putQualityFormsEvaluationAiscoringSettings**](QualityApi#putQualityFormsEvaluationAiscoringSettings) | **PUT** /api/v2/quality/forms/evaluations/{formId}/aiscoring/settings | Update the AI Scoring settings of an evaluation form.
[**putQualityFormsSurvey**](QualityApi#putQualityFormsSurvey) | **PUT** /api/v2/quality/forms/surveys/{formId} | Update a survey form.
[**putQualitySurveysScorable**](QualityApi#putQualitySurveysScorable) | **PUT** /api/v2/quality/surveys/scorable | Update a survey as an end-customer, for the purposes of scoring it.



## deleteAnalyticsEvaluationsAggregatesJob

> void deleteAnalyticsEvaluationsAggregatesJob(jobId)


DELETE /api/v2/analytics/evaluations/aggregates/jobs/{jobId}

Delete/cancel an async request for evaluation aggregates

deleteAnalyticsEvaluationsAggregatesJob is a preview method and is subject to both breaking and non-breaking changes at any time without notice

Requires ANY permissions:

* analytics:evaluationAggregate:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.QualityApi();

let jobId = "jobId_example"; // String | jobId

apiInstance.deleteAnalyticsEvaluationsAggregatesJob(jobId)
  .then(() => {
    console.log('deleteAnalyticsEvaluationsAggregatesJob returned successfully.');
  })
  .catch((err) => {
    console.log('There was a failure calling deleteAnalyticsEvaluationsAggregatesJob');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **jobId** | **String** | jobId |  |

### Return type

void (no response body)


## deleteAnalyticsSurveysAggregatesJob

> void deleteAnalyticsSurveysAggregatesJob(jobId)


DELETE /api/v2/analytics/surveys/aggregates/jobs/{jobId}

Delete/cancel an async request for survey aggregates

deleteAnalyticsSurveysAggregatesJob is a preview method and is subject to both breaking and non-breaking changes at any time without notice

Requires ANY permissions:

* analytics:surveyAggregate:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.QualityApi();

let jobId = "jobId_example"; // String | jobId

apiInstance.deleteAnalyticsSurveysAggregatesJob(jobId)
  .then(() => {
    console.log('deleteAnalyticsSurveysAggregatesJob returned successfully.');
  })
  .catch((err) => {
    console.log('There was a failure calling deleteAnalyticsSurveysAggregatesJob');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **jobId** | **String** | jobId |  |

### Return type

void (no response body)


## deleteQualityCalibration

> Calibration deleteQualityCalibration(calibrationId, calibratorId)


DELETE /api/v2/quality/calibrations/{calibrationId}

Delete a calibration by id.

Requires ANY permissions:

* quality:calibration:delete

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.QualityApi();

let calibrationId = "calibrationId_example"; // String | Calibration ID
let calibratorId = "calibratorId_example"; // String | calibratorId

apiInstance.deleteQualityCalibration(calibrationId, calibratorId)
  .then((data) => {
    console.log(`deleteQualityCalibration success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling deleteQualityCalibration');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **calibrationId** | **String** | Calibration ID |  |
 **calibratorId** | **String** | calibratorId |  |

### Return type

**Calibration**


## deleteQualityConversationEvaluation

> EvaluationResponse deleteQualityConversationEvaluation(conversationId, evaluationId, opts)


DELETE /api/v2/quality/conversations/{conversationId}/evaluations/{evaluationId}

Delete an evaluation

Requires ANY permissions:

* quality:evaluation:delete

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.QualityApi();

let conversationId = "conversationId_example"; // String | conversationId
let evaluationId = "evaluationId_example"; // String | evaluationId
let opts = { 
  'expand': "expand_example" // String | evaluatorId, evaluationForm
};

apiInstance.deleteQualityConversationEvaluation(conversationId, evaluationId, opts)
  .then((data) => {
    console.log(`deleteQualityConversationEvaluation success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling deleteQualityConversationEvaluation');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **conversationId** | **String** | conversationId |  |
 **evaluationId** | **String** | evaluationId |  |
 **expand** | **String** | evaluatorId, evaluationForm | [optional]  |

### Return type

**EvaluationResponse**


## deleteQualityForm

> void deleteQualityForm(formId)

:::{"alert":"warning","title":"Deprecated","collapsible":false,"autoCollapse":false}
This resource has been deprecated
:::

DELETE /api/v2/quality/forms/{formId}

Delete an evaluation form.

Requires ANY permissions:

* quality:evaluationForm:delete

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.QualityApi();

let formId = "formId_example"; // String | Form ID

apiInstance.deleteQualityForm(formId)
  .then(() => {
    console.log('deleteQualityForm returned successfully.');
  })
  .catch((err) => {
    console.log('There was a failure calling deleteQualityForm');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **formId** | **String** | Form ID |  |

### Return type

void (no response body)


## deleteQualityFormsEvaluation

> void deleteQualityFormsEvaluation(formId)


DELETE /api/v2/quality/forms/evaluations/{formId}

Delete an evaluation form.

Requires ANY permissions:

* quality:evaluationForm:delete

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.QualityApi();

let formId = "formId_example"; // String | Form ID

apiInstance.deleteQualityFormsEvaluation(formId)
  .then(() => {
    console.log('deleteQualityFormsEvaluation returned successfully.');
  })
  .catch((err) => {
    console.log('There was a failure calling deleteQualityFormsEvaluation');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **formId** | **String** | Form ID |  |

### Return type

void (no response body)


## deleteQualityFormsSurvey

> void deleteQualityFormsSurvey(formId)


DELETE /api/v2/quality/forms/surveys/{formId}

Delete a survey form.

Requires ALL permissions:

* quality:surveyForm:delete

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.QualityApi();

let formId = "formId_example"; // String | Form ID

apiInstance.deleteQualityFormsSurvey(formId)
  .then(() => {
    console.log('deleteQualityFormsSurvey returned successfully.');
  })
  .catch((err) => {
    console.log('There was a failure calling deleteQualityFormsSurvey');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **formId** | **String** | Form ID |  |

### Return type

void (no response body)


## getAnalyticsEvaluationsAggregatesJob

> AsyncQueryStatus getAnalyticsEvaluationsAggregatesJob(jobId)


GET /api/v2/analytics/evaluations/aggregates/jobs/{jobId}

Get status for async query for evaluation aggregates

getAnalyticsEvaluationsAggregatesJob is a preview method and is subject to both breaking and non-breaking changes at any time without notice

Requires ANY permissions:

* analytics:evaluationAggregate:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.QualityApi();

let jobId = "jobId_example"; // String | jobId

apiInstance.getAnalyticsEvaluationsAggregatesJob(jobId)
  .then((data) => {
    console.log(`getAnalyticsEvaluationsAggregatesJob success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getAnalyticsEvaluationsAggregatesJob');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **jobId** | **String** | jobId |  |

### Return type

**AsyncQueryStatus**


## getAnalyticsEvaluationsAggregatesJobResults

> EvaluationAsyncAggregateQueryResponse getAnalyticsEvaluationsAggregatesJobResults(jobId, opts)


GET /api/v2/analytics/evaluations/aggregates/jobs/{jobId}/results

Fetch a page of results for an async aggregates query

getAnalyticsEvaluationsAggregatesJobResults is a preview method and is subject to both breaking and non-breaking changes at any time without notice

Requires ANY permissions:

* analytics:evaluationAggregate:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.QualityApi();

let jobId = "jobId_example"; // String | jobId
let opts = { 
  'cursor': "cursor_example" // String | Cursor token to retrieve next page
};

apiInstance.getAnalyticsEvaluationsAggregatesJobResults(jobId, opts)
  .then((data) => {
    console.log(`getAnalyticsEvaluationsAggregatesJobResults success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getAnalyticsEvaluationsAggregatesJobResults');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **jobId** | **String** | jobId |  |
 **cursor** | **String** | Cursor token to retrieve next page | [optional]  |

### Return type

**EvaluationAsyncAggregateQueryResponse**


## getAnalyticsSurveysAggregatesJob

> AsyncQueryStatus getAnalyticsSurveysAggregatesJob(jobId)


GET /api/v2/analytics/surveys/aggregates/jobs/{jobId}

Get status for async query for survey aggregates

getAnalyticsSurveysAggregatesJob is a preview method and is subject to both breaking and non-breaking changes at any time without notice

Requires ANY permissions:

* analytics:surveyAggregate:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.QualityApi();

let jobId = "jobId_example"; // String | jobId

apiInstance.getAnalyticsSurveysAggregatesJob(jobId)
  .then((data) => {
    console.log(`getAnalyticsSurveysAggregatesJob success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getAnalyticsSurveysAggregatesJob');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **jobId** | **String** | jobId |  |

### Return type

**AsyncQueryStatus**


## getAnalyticsSurveysAggregatesJobResults

> SurveyAsyncAggregateQueryResponse getAnalyticsSurveysAggregatesJobResults(jobId, opts)


GET /api/v2/analytics/surveys/aggregates/jobs/{jobId}/results

Fetch a page of results for an async aggregates query

getAnalyticsSurveysAggregatesJobResults is a preview method and is subject to both breaking and non-breaking changes at any time without notice

Requires ANY permissions:

* analytics:surveyAggregate:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.QualityApi();

let jobId = "jobId_example"; // String | jobId
let opts = { 
  'cursor': "cursor_example" // String | Cursor token to retrieve next page
};

apiInstance.getAnalyticsSurveysAggregatesJobResults(jobId, opts)
  .then((data) => {
    console.log(`getAnalyticsSurveysAggregatesJobResults success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getAnalyticsSurveysAggregatesJobResults');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **jobId** | **String** | jobId |  |
 **cursor** | **String** | Cursor token to retrieve next page | [optional]  |

### Return type

**SurveyAsyncAggregateQueryResponse**


## getQualityAgentsActivity

> AgentActivityEntityListing getQualityAgentsActivity(opts)


GET /api/v2/quality/agents/activity

Gets a list of Agent Activities

Each item on the list shows one agents evaluation activity comprised of the number of evaluations and the highest, average, and lowest standard and critical scores, as well as a sub list showing the number and average score of evaluations for each evaluator for that agent.  evaluatorUserId, startTime, and endTime are all filtering criteria. If specified, the only evaluations used to compile the agent activity response will be ones that match the filtering criteria. agentUserId, name, group, and agentTeamId are all agent selection criteria. criteria.  If one or more agent selection criteria are specified, then the returned activity will include users that match the criteria even if those users did not have any agent activity or evaluations that do not match any filtering criteria.  If no agent selection criteria are specified but an evaluatorUserId is, then the returned activity will be only for those agents that had evaluations where the evaluator is the evaluatorUserId.  If no agent selection criteria are specified and no evaluatorUserId is specified, then the returned activity will be for all users

Requires ANY permissions:

* quality:evaluation:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.QualityApi();

let opts = { 
  'pageSize': 25, // Number | The total page size requested
  'pageNumber': 1, // Number | The page number requested
  'sortBy': "sortBy_example", // String | variable name requested to sort by
  'expand': ["expand_example"], // [String] | variable name requested by expand list
  'nextPage': "nextPage_example", // String | next page token
  'previousPage': "previousPage_example", // String | Previous page token
  'startTime': new Date("2013-10-20T19:20:30+01:00"), // Date | Start time of agent activity based on assigned date. Date time is represented as an ISO-8601 string. For example: yyyy-MM-ddTHH:mm:ss[.mmm]Z
  'endTime': new Date("2013-10-20T19:20:30+01:00"), // Date | End time of agent activity based on assigned date. Date time is represented as an ISO-8601 string. For example: yyyy-MM-ddTHH:mm:ss[.mmm]Z
  'agentUserId': ["agentUserId_example"], // [String] | user id of agent requested
  'evaluatorUserId': "evaluatorUserId_example", // String | user id of the evaluator
  'name': "name_example", // String | name
  'group': "group_example", // String | group id
  'agentTeamId': "agentTeamId_example", // String | team id of agents requested
  'formContextId': "formContextId_example", // String | shared id between form versions
  'userState': "Legacy" // String | 'Legacy' fetches active and inactive users when evaluatorUserId or no user filters are supplied; otherwise fetches active users.  'Any' fetches users of 'active', 'inactive' and 'deleted' states.
};

apiInstance.getQualityAgentsActivity(opts)
  .then((data) => {
    console.log(`getQualityAgentsActivity success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getQualityAgentsActivity');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **pageSize** | **Number** | The total page size requested | [optional] [default to 25] |
 **pageNumber** | **Number** | The page number requested | [optional] [default to 1] |
 **sortBy** | **String** | variable name requested to sort by | [optional]  |
 **expand** | **[String]** | variable name requested by expand list | [optional]  |
 **nextPage** | **String** | next page token | [optional]  |
 **previousPage** | **String** | Previous page token | [optional]  |
 **startTime** | **Date** | Start time of agent activity based on assigned date. Date time is represented as an ISO-8601 string. For example: yyyy-MM-ddTHH:mm:ss[.mmm]Z | [optional]  |
 **endTime** | **Date** | End time of agent activity based on assigned date. Date time is represented as an ISO-8601 string. For example: yyyy-MM-ddTHH:mm:ss[.mmm]Z | [optional]  |
 **agentUserId** | **[String]** | user id of agent requested | [optional]  |
 **evaluatorUserId** | **String** | user id of the evaluator | [optional]  |
 **name** | **String** | name | [optional]  |
 **group** | **String** | group id | [optional]  |
 **agentTeamId** | **String** | team id of agents requested | [optional]  |
 **formContextId** | **String** | shared id between form versions | [optional]  |
 **userState** | **String** | 'Legacy' fetches active and inactive users when evaluatorUserId or no user filters are supplied; otherwise fetches active users.  'Any' fetches users of 'active', 'inactive' and 'deleted' states. | [optional] [default to Legacy]<br />**Values**: Any, Legacy |

### Return type

**AgentActivityEntityListing**


## getQualityCalibration

> Calibration getQualityCalibration(calibrationId, opts)


GET /api/v2/quality/calibrations/{calibrationId}

Get a calibration by id.  Requires either calibrator id or conversation id

Requires ANY permissions:

* quality:calibration:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.QualityApi();

let calibrationId = "calibrationId_example"; // String | Calibration ID
let opts = { 
  'calibratorId': "calibratorId_example", // String | calibratorId
  'conversationId': "conversationId_example" // String | conversationId
};

apiInstance.getQualityCalibration(calibrationId, opts)
  .then((data) => {
    console.log(`getQualityCalibration success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getQualityCalibration');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **calibrationId** | **String** | Calibration ID |  |
 **calibratorId** | **String** | calibratorId | [optional]  |
 **conversationId** | **String** | conversationId | [optional]  |

### Return type

**Calibration**


## getQualityCalibrations

> CalibrationEntityListing getQualityCalibrations(calibratorId, opts)


GET /api/v2/quality/calibrations

Get the list of calibrations

NOTE: The count for total and pageCount might not be accurate when querying for a large number of calibrations. nextUri, if present, will indicate that there are more calibrations to fetch.

Requires ANY permissions:

* quality:calibration:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.QualityApi();

let calibratorId = "calibratorId_example"; // String | user id of calibrator
let opts = { 
  'pageSize': 25, // Number | The total page size requested
  'pageNumber': 1, // Number | The page number requested
  'sortBy': "sortBy_example", // String | variable name requested to sort by
  'expand': ["expand_example"], // [String] | variable name requested by expand list
  'nextPage': "nextPage_example", // String | next page token
  'previousPage': "previousPage_example", // String | Previous page token
  'conversationId': "conversationId_example", // String | conversation id
  'startTime': new Date("2013-10-20T19:20:30+01:00"), // Date | Beginning of the calibration query. Date time is represented as an ISO-8601 string. For example: yyyy-MM-ddTHH:mm:ss[.mmm]Z
  'endTime': new Date("2013-10-20T19:20:30+01:00") // Date | end of the calibration query. Date time is represented as an ISO-8601 string. For example: yyyy-MM-ddTHH:mm:ss[.mmm]Z
};

apiInstance.getQualityCalibrations(calibratorId, opts)
  .then((data) => {
    console.log(`getQualityCalibrations success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getQualityCalibrations');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **calibratorId** | **String** | user id of calibrator |  |
 **pageSize** | **Number** | The total page size requested | [optional] [default to 25] |
 **pageNumber** | **Number** | The page number requested | [optional] [default to 1] |
 **sortBy** | **String** | variable name requested to sort by | [optional]  |
 **expand** | **[String]** | variable name requested by expand list | [optional]  |
 **nextPage** | **String** | next page token | [optional]  |
 **previousPage** | **String** | Previous page token | [optional]  |
 **conversationId** | **String** | conversation id | [optional]  |
 **startTime** | **Date** | Beginning of the calibration query. Date time is represented as an ISO-8601 string. For example: yyyy-MM-ddTHH:mm:ss[.mmm]Z | [optional]  |
 **endTime** | **Date** | end of the calibration query. Date time is represented as an ISO-8601 string. For example: yyyy-MM-ddTHH:mm:ss[.mmm]Z | [optional]  |

### Return type

**CalibrationEntityListing**


## getQualityConversationEvaluation

> EvaluationResponse getQualityConversationEvaluation(conversationId, evaluationId, opts)


GET /api/v2/quality/conversations/{conversationId}/evaluations/{evaluationId}

Get an evaluation

Requires ANY permissions:

* quality:evaluation:view
* quality:evaluation:assign
* quality:evaluation:release

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.QualityApi();

let conversationId = "conversationId_example"; // String | conversationId
let evaluationId = "evaluationId_example"; // String | evaluationId
let opts = { 
  'expand': "expand_example" // String | agent, assignee, evaluator, evaluationForm
};

apiInstance.getQualityConversationEvaluation(conversationId, evaluationId, opts)
  .then((data) => {
    console.log(`getQualityConversationEvaluation success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getQualityConversationEvaluation');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **conversationId** | **String** | conversationId |  |
 **evaluationId** | **String** | evaluationId |  |
 **expand** | **String** | agent, assignee, evaluator, evaluationForm | [optional]  |

### Return type

**EvaluationResponse**


## getQualityConversationSurveys

> [Survey] getQualityConversationSurveys(conversationId)


GET /api/v2/quality/conversations/{conversationId}/surveys

Get the surveys for a conversation

Requires ANY permissions:

* quality:survey:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.QualityApi();

let conversationId = "conversationId_example"; // String | conversationId

apiInstance.getQualityConversationSurveys(conversationId)
  .then((data) => {
    console.log(`getQualityConversationSurveys success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getQualityConversationSurveys');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **conversationId** | **String** | conversationId |  |

### Return type

**[Survey]**


## getQualityConversationsAuditsQueryTransactionId

> QualityAuditQueryExecutionStatusResponse getQualityConversationsAuditsQueryTransactionId(transactionId)


GET /api/v2/quality/conversations/audits/query/{transactionId}

Get status of audit query execution

Requires ALL permissions:

* audits:interactionDetails:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.QualityApi();

let transactionId = "transactionId_example"; // String | Transaction ID

apiInstance.getQualityConversationsAuditsQueryTransactionId(transactionId)
  .then((data) => {
    console.log(`getQualityConversationsAuditsQueryTransactionId success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getQualityConversationsAuditsQueryTransactionId');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **transactionId** | **String** | Transaction ID |  |

### Return type

**QualityAuditQueryExecutionStatusResponse**


## getQualityConversationsAuditsQueryTransactionIdResults

> QualityAuditQueryExecutionResultsResponse getQualityConversationsAuditsQueryTransactionIdResults(transactionId, opts)


GET /api/v2/quality/conversations/audits/query/{transactionId}/results

Get results of audit query

Requires ALL permissions:

* audits:interactionDetails:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.QualityApi();

let transactionId = "transactionId_example"; // String | Transaction ID
let opts = { 
  'cursor': "cursor_example", // String | Indicates where to resume query results (not required for first page)
  'pageSize': 25, // Number | Page size
  'expand': ["expand_example"] // [String] | Which fields, if any, to expand
};

apiInstance.getQualityConversationsAuditsQueryTransactionIdResults(transactionId, opts)
  .then((data) => {
    console.log(`getQualityConversationsAuditsQueryTransactionIdResults success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getQualityConversationsAuditsQueryTransactionIdResults');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **transactionId** | **String** | Transaction ID |  |
 **cursor** | **String** | Indicates where to resume query results (not required for first page) | [optional]  |
 **pageSize** | **Number** | Page size | [optional] [default to 25] |
 **expand** | **[String]** | Which fields, if any, to expand | [optional] <br />**Values**: user |

### Return type

**QualityAuditQueryExecutionResultsResponse**


## getQualityEvaluationsQuery

> EvaluationEntityListing getQualityEvaluationsQuery(opts)


GET /api/v2/quality/evaluations/query

Queries Evaluations and returns a paged list

Query params must include one of conversationId, evaluatorUserId, agentUserId or assigneeUserId. When querying by agentUserId (and not conversationId or evaluatorUserId), the results are sorted by release date. Evaluations set to Never Release are omitted in this case. When querying by evaluatorUserId or conversationId (including when combined with agentUserId), the results are sorted by assigned date. NOTE: The count for total and pageCount might not be accurate when querying for a large number of evaluations. nextUri, if present, will indicate that there are more evaluations to fetch. The evaluation entities contained in the response might only contain a subset of all the properties listed below. It is often because a given propertys value has not yet been populated or is not applicable in the current state of the evaluation. It might also be because the missing property in the response was not requested by the user.

Requires ANY permissions:

* quality:evaluation:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.QualityApi();

let opts = { 
  'pageSize': 25, // Number | The total page size requested
  'pageNumber': 1, // Number | The page number requested
  'expand': ["expand_example"], // [String] | variable name requested by expand list
  'previousPage': "previousPage_example", // String | Previous page token
  'conversationId': "conversationId_example", // String | conversationId specified
  'agentUserId': "agentUserId_example", // String | user id of the agent
  'agentTeamId': "agentTeamId_example", // String | team id of the agent
  'evaluatorUserId': "evaluatorUserId_example", // String | evaluator user id
  'assigneeUserId': "assigneeUserId_example", // String | assignee user id
  'queueId': "queueId_example", // String | queue id
  'startTime': "startTime_example", // String | start time of the evaluation query
  'endTime': "endTime_example", // String | end time of the evaluation query
  'formContextId': "formContextId_example", // String | shared id between form versions
  'evaluationState': ["evaluationState_example"], // [String] | 
  'isReleased': true, // Boolean | the evaluation has been released
  'agentHasRead': true, // Boolean | agent has the evaluation
  'expandAnswerTotalScores': true, // Boolean | get the total scores for evaluations. NOTE: The answers will only be populated if this parameter is set to true in the request.
  'maximum': 3.4, // Number | the maximum number of results to return
  'sortOrder': "sortOrder_example", // String | NOTE: Does not work when conversationId is supplied.
  'includeDeletedUsers': false // Boolean | Allow returning an agent or evaluator user with a 'delete' status. Defaults to false.
};

apiInstance.getQualityEvaluationsQuery(opts)
  .then((data) => {
    console.log(`getQualityEvaluationsQuery success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getQualityEvaluationsQuery');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **pageSize** | **Number** | The total page size requested | [optional] [default to 25] |
 **pageNumber** | **Number** | The page number requested | [optional] [default to 1] |
 **expand** | **[String]** | variable name requested by expand list | [optional]  |
 **previousPage** | **String** | Previous page token | [optional]  |
 **conversationId** | **String** | conversationId specified | [optional]  |
 **agentUserId** | **String** | user id of the agent | [optional]  |
 **agentTeamId** | **String** | team id of the agent | [optional]  |
 **evaluatorUserId** | **String** | evaluator user id | [optional]  |
 **assigneeUserId** | **String** | assignee user id | [optional]  |
 **queueId** | **String** | queue id | [optional]  |
 **startTime** | **String** | start time of the evaluation query | [optional]  |
 **endTime** | **String** | end time of the evaluation query | [optional]  |
 **formContextId** | **String** | shared id between form versions | [optional]  |
 **evaluationState** | **[String]** |  | [optional]  |
 **isReleased** | **Boolean** | the evaluation has been released | [optional]  |
 **agentHasRead** | **Boolean** | agent has the evaluation | [optional]  |
 **expandAnswerTotalScores** | **Boolean** | get the total scores for evaluations. NOTE: The answers will only be populated if this parameter is set to true in the request. | [optional]  |
 **maximum** | **Number** | the maximum number of results to return | [optional]  |
 **sortOrder** | **String** | NOTE: Does not work when conversationId is supplied. | [optional]  |
 **includeDeletedUsers** | **Boolean** | Allow returning an agent or evaluator user with a 'delete' status. Defaults to false. | [optional] [default to false] |

### Return type

**EvaluationEntityListing**


## getQualityEvaluatorsActivity

> EvaluatorActivityEntityListing getQualityEvaluatorsActivity(opts)


GET /api/v2/quality/evaluators/activity

Get an evaluator activity

Requires ANY permissions:

* quality:evaluation:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.QualityApi();

let opts = { 
  'pageSize': 25, // Number | The total page size requested
  'pageNumber': 1, // Number | The page number requested
  'sortBy': "sortBy_example", // String | variable name requested to sort by
  'expand': ["expand_example"], // [String] | variable name requested by expand list
  'nextPage': "nextPage_example", // String | next page token
  'previousPage': "previousPage_example", // String | Previous page token
  'startTime': new Date("2013-10-20T19:20:30+01:00"), // Date | The start time specified. Date time is represented as an ISO-8601 string. For example: yyyy-MM-ddTHH:mm:ss[.mmm]Z
  'endTime': new Date("2013-10-20T19:20:30+01:00"), // Date | The end time specified. Date time is represented as an ISO-8601 string. For example: yyyy-MM-ddTHH:mm:ss[.mmm]Z
  'name': "name_example", // String | Evaluator name
  'permission': ["permission_example"], // [String] | permission strings
  'group': "group_example", // String | group id
  'agentTeamId': "agentTeamId_example" // String | team id of agents to be considered
};

apiInstance.getQualityEvaluatorsActivity(opts)
  .then((data) => {
    console.log(`getQualityEvaluatorsActivity success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getQualityEvaluatorsActivity');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **pageSize** | **Number** | The total page size requested | [optional] [default to 25] |
 **pageNumber** | **Number** | The page number requested | [optional] [default to 1] |
 **sortBy** | **String** | variable name requested to sort by | [optional]  |
 **expand** | **[String]** | variable name requested by expand list | [optional]  |
 **nextPage** | **String** | next page token | [optional]  |
 **previousPage** | **String** | Previous page token | [optional]  |
 **startTime** | **Date** | The start time specified. Date time is represented as an ISO-8601 string. For example: yyyy-MM-ddTHH:mm:ss[.mmm]Z | [optional]  |
 **endTime** | **Date** | The end time specified. Date time is represented as an ISO-8601 string. For example: yyyy-MM-ddTHH:mm:ss[.mmm]Z | [optional]  |
 **name** | **String** | Evaluator name | [optional]  |
 **permission** | **[String]** | permission strings | [optional]  |
 **group** | **String** | group id | [optional]  |
 **agentTeamId** | **String** | team id of agents to be considered | [optional]  |

### Return type

**EvaluatorActivityEntityListing**


## getQualityForm

> EvaluationFormResponse getQualityForm(formId)

:::{"alert":"warning","title":"Deprecated","collapsible":false,"autoCollapse":false}
This resource has been deprecated
:::

GET /api/v2/quality/forms/{formId}

Get an evaluation form

Requires ANY permissions:

* quality:evaluationForm:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.QualityApi();

let formId = "formId_example"; // String | Form ID

apiInstance.getQualityForm(formId)
  .then((data) => {
    console.log(`getQualityForm success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getQualityForm');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **formId** | **String** | Form ID |  |

### Return type

**EvaluationFormResponse**


## getQualityFormVersions

> EvaluationFormResponseEntityListing getQualityFormVersions(formId, opts)

:::{"alert":"warning","title":"Deprecated","collapsible":false,"autoCollapse":false}
This resource has been deprecated
:::

GET /api/v2/quality/forms/{formId}/versions

Gets all the revisions for a specific evaluation.

Requires ANY permissions:

* quality:evaluationForm:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.QualityApi();

let formId = "formId_example"; // String | Form ID
let opts = { 
  'pageSize': 25, // Number | Page size
  'pageNumber': 1 // Number | Page number
};

apiInstance.getQualityFormVersions(formId, opts)
  .then((data) => {
    console.log(`getQualityFormVersions success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getQualityFormVersions');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **formId** | **String** | Form ID |  |
 **pageSize** | **Number** | Page size | [optional] [default to 25] |
 **pageNumber** | **Number** | Page number | [optional] [default to 1] |

### Return type

**EvaluationFormResponseEntityListing**


## getQualityForms

> EvaluationFormResponseEntityListing getQualityForms(opts)

:::{"alert":"warning","title":"Deprecated","collapsible":false,"autoCollapse":false}
This resource has been deprecated
:::

GET /api/v2/quality/forms

Get the list of evaluation forms. If you set expand=publishHistory, then you will be able to get published versions for each corresponding evaluation form.

Requires ANY permissions:

* quality:evaluationForm:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.QualityApi();

let opts = { 
  'pageSize': 25, // Number | The total page size requested
  'pageNumber': 1, // Number | The page number requested
  'sortBy': "sortBy_example", // String | variable name requested to sort by
  'nextPage': "nextPage_example", // String | next page token
  'previousPage': "previousPage_example", // String | Previous page token
  'expand': "expand_example", // String | If 'expand=publishHistory', then each unpublished evaluation form includes a listing of its published versions
  'name': "name_example", // String | Name
  'sortOrder': "sortOrder_example" // String | Order to sort results, either asc or desc
};

apiInstance.getQualityForms(opts)
  .then((data) => {
    console.log(`getQualityForms success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getQualityForms');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **pageSize** | **Number** | The total page size requested | [optional] [default to 25] |
 **pageNumber** | **Number** | The page number requested | [optional] [default to 1] |
 **sortBy** | **String** | variable name requested to sort by | [optional]  |
 **nextPage** | **String** | next page token | [optional]  |
 **previousPage** | **String** | Previous page token | [optional]  |
 **expand** | **String** | If 'expand=publishHistory', then each unpublished evaluation form includes a listing of its published versions | [optional] <br />**Values**: publishHistory |
 **name** | **String** | Name | [optional]  |
 **sortOrder** | **String** | Order to sort results, either asc or desc | [optional]  |

### Return type

**EvaluationFormResponseEntityListing**


## getQualityFormsEvaluation

> EvaluationFormResponse getQualityFormsEvaluation(formId)


GET /api/v2/quality/forms/evaluations/{formId}

Get an evaluation form

Requires ANY permissions:

* quality:evaluationForm:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.QualityApi();

let formId = "formId_example"; // String | Form ID

apiInstance.getQualityFormsEvaluation(formId)
  .then((data) => {
    console.log(`getQualityFormsEvaluation success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getQualityFormsEvaluation');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **formId** | **String** | Form ID |  |

### Return type

**EvaluationFormResponse**


## getQualityFormsEvaluationVersions

> EvaluationFormResponseEntityListing getQualityFormsEvaluationVersions(formId, opts)


GET /api/v2/quality/forms/evaluations/{formId}/versions

Gets all the revisions for a specific evaluation.

Requires ANY permissions:

* quality:evaluationForm:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.QualityApi();

let formId = "formId_example"; // String | Form ID
let opts = { 
  'pageSize': 25, // Number | Page size
  'pageNumber': 1, // Number | Page number
  'sortOrder': "asc" // String | Sort order
};

apiInstance.getQualityFormsEvaluationVersions(formId, opts)
  .then((data) => {
    console.log(`getQualityFormsEvaluationVersions success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getQualityFormsEvaluationVersions');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **formId** | **String** | Form ID |  |
 **pageSize** | **Number** | Page size | [optional] [default to 25] |
 **pageNumber** | **Number** | Page number | [optional] [default to 1] |
 **sortOrder** | **String** | Sort order | [optional] [default to asc] |

### Return type

**EvaluationFormResponseEntityListing**


## getQualityFormsEvaluations

> EvaluationFormResponseEntityListing getQualityFormsEvaluations(opts)


GET /api/v2/quality/forms/evaluations

Get the list of evaluation forms

By default, "published" field is always returned as false for all evaluation forms. If you set "expand=publishHistory", then you will be able to get published versions for each corresponding evaluation form. In addition, "questionGroups", the detailed information about evaluation form, is not returned. We will enhance this field in a future release.

Requires ANY permissions:

* quality:evaluationForm:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.QualityApi();

let opts = { 
  'pageSize': 25, // Number | The total page size requested
  'pageNumber': 1, // Number | The page number requested
  'sortBy': "sortBy_example", // String | variable name requested to sort by
  'nextPage': "nextPage_example", // String | next page token
  'previousPage': "previousPage_example", // String | Previous page token
  'expand': "expand_example", // String | If 'expand=publishHistory', then each unpublished evaluation form includes a listing of its published versions
  'name': "name_example", // String | Name
  'sortOrder': "sortOrder_example" // String | Order to sort results, either asc or desc
};

apiInstance.getQualityFormsEvaluations(opts)
  .then((data) => {
    console.log(`getQualityFormsEvaluations success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getQualityFormsEvaluations');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **pageSize** | **Number** | The total page size requested | [optional] [default to 25] |
 **pageNumber** | **Number** | The page number requested | [optional] [default to 1] |
 **sortBy** | **String** | variable name requested to sort by | [optional]  |
 **nextPage** | **String** | next page token | [optional]  |
 **previousPage** | **String** | Previous page token | [optional]  |
 **expand** | **String** | If 'expand=publishHistory', then each unpublished evaluation form includes a listing of its published versions | [optional] <br />**Values**: publishHistory |
 **name** | **String** | Name | [optional]  |
 **sortOrder** | **String** | Order to sort results, either asc or desc | [optional]  |

### Return type

**EvaluationFormResponseEntityListing**


## getQualityFormsEvaluationsBulkContexts

> [EvaluationFormResponse] getQualityFormsEvaluationsBulkContexts(contextId)


GET /api/v2/quality/forms/evaluations/bulk/contexts

Retrieve a list of the latest published evaluation form versions by context ids

Requires ALL permissions:

* quality:evaluationForm:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.QualityApi();

let contextId = ["contextId_example"]; // [String] | A comma-delimited list of valid evaluation form context ids

apiInstance.getQualityFormsEvaluationsBulkContexts(contextId)
  .then((data) => {
    console.log(`getQualityFormsEvaluationsBulkContexts success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getQualityFormsEvaluationsBulkContexts');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **contextId** | **[String]** | A comma-delimited list of valid evaluation form context ids |  |

### Return type

**[EvaluationFormResponse]**


## getQualityFormsSurvey

> SurveyForm getQualityFormsSurvey(formId)


GET /api/v2/quality/forms/surveys/{formId}

Get a survey form

Requires ALL permissions:

* quality:surveyForm:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.QualityApi();

let formId = "formId_example"; // String | Form ID

apiInstance.getQualityFormsSurvey(formId)
  .then((data) => {
    console.log(`getQualityFormsSurvey success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getQualityFormsSurvey');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **formId** | **String** | Form ID |  |

### Return type

**SurveyForm**


## getQualityFormsSurveyVersions

> SurveyFormEntityListing getQualityFormsSurveyVersions(formId, opts)


GET /api/v2/quality/forms/surveys/{formId}/versions

Gets all the revisions for a specific survey.

Requires ALL permissions:

* quality:surveyForm:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.QualityApi();

let formId = "formId_example"; // String | Form ID
let opts = { 
  'pageSize': 25, // Number | Page size
  'pageNumber': 1 // Number | Page number
};

apiInstance.getQualityFormsSurveyVersions(formId, opts)
  .then((data) => {
    console.log(`getQualityFormsSurveyVersions success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getQualityFormsSurveyVersions');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **formId** | **String** | Form ID |  |
 **pageSize** | **Number** | Page size | [optional] [default to 25] |
 **pageNumber** | **Number** | Page number | [optional] [default to 1] |

### Return type

**SurveyFormEntityListing**


## getQualityFormsSurveys

> SurveyFormEntityListing getQualityFormsSurveys(opts)


GET /api/v2/quality/forms/surveys

Get the list of survey forms. If you set expand=publishHistory, then you will be able to get published versions for each corresponding survey form.

Requires ALL permissions:

* quality:surveyForm:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.QualityApi();

let opts = { 
  'pageSize': 25, // Number | The total page size requested
  'pageNumber': 1, // Number | The page number requested
  'sortBy': "sortBy_example", // String | variable name requested to sort by
  'nextPage': "nextPage_example", // String | next page token
  'previousPage': "previousPage_example", // String | Previous page token
  'expand': "expand_example", // String | If 'expand=publishHistory', then each unpublished evaluation form includes a listing of its published versions
  'name': "name_example", // String | Name
  'sortOrder': "sortOrder_example" // String | Order to sort results, either asc or desc
};

apiInstance.getQualityFormsSurveys(opts)
  .then((data) => {
    console.log(`getQualityFormsSurveys success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getQualityFormsSurveys');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **pageSize** | **Number** | The total page size requested | [optional] [default to 25] |
 **pageNumber** | **Number** | The page number requested | [optional] [default to 1] |
 **sortBy** | **String** | variable name requested to sort by | [optional]  |
 **nextPage** | **String** | next page token | [optional]  |
 **previousPage** | **String** | Previous page token | [optional]  |
 **expand** | **String** | If 'expand=publishHistory', then each unpublished evaluation form includes a listing of its published versions | [optional] <br />**Values**: publishHistory |
 **name** | **String** | Name | [optional]  |
 **sortOrder** | **String** | Order to sort results, either asc or desc | [optional]  |

### Return type

**SurveyFormEntityListing**


## getQualityFormsSurveysBulk

> SurveyFormEntityListing getQualityFormsSurveysBulk(id)


GET /api/v2/quality/forms/surveys/bulk

Retrieve a list of survey forms by their ids

Requires ALL permissions:

* quality:surveyForm:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.QualityApi();

let id = ["id_example"]; // [String] | A comma-delimited list of valid survey form ids

apiInstance.getQualityFormsSurveysBulk(id)
  .then((data) => {
    console.log(`getQualityFormsSurveysBulk success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getQualityFormsSurveysBulk');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **id** | **[String]** | A comma-delimited list of valid survey form ids |  |

### Return type

**SurveyFormEntityListing**


## getQualityFormsSurveysBulkContexts

> [SurveyForm] getQualityFormsSurveysBulkContexts(contextId, opts)


GET /api/v2/quality/forms/surveys/bulk/contexts

Retrieve a list of the latest form versions by context ids

Requires ALL permissions:

* quality:surveyForm:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.QualityApi();

let contextId = ["contextId_example"]; // [String] | A comma-delimited list of valid survey form context ids. The maximum number of ids allowed in this list is 100.
let opts = { 
  'published': true // Boolean | If true, the latest published version will be included. If false, only the unpublished version will be included.
};

apiInstance.getQualityFormsSurveysBulkContexts(contextId, opts)
  .then((data) => {
    console.log(`getQualityFormsSurveysBulkContexts success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getQualityFormsSurveysBulkContexts');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **contextId** | **[String]** | A comma-delimited list of valid survey form context ids. The maximum number of ids allowed in this list is 100. |  |
 **published** | **Boolean** | If true, the latest published version will be included. If false, only the unpublished version will be included. | [optional] [default to true] |

### Return type

**[SurveyForm]**


## getQualityPublishedform

> EvaluationFormResponse getQualityPublishedform(formId)

:::{"alert":"warning","title":"Deprecated","collapsible":false,"autoCollapse":false}
This resource has been deprecated
:::

GET /api/v2/quality/publishedforms/{formId}

Get the published evaluation forms.

Requires ANY permissions:

* quality:evaluationForm:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.QualityApi();

let formId = "formId_example"; // String | Form ID

apiInstance.getQualityPublishedform(formId)
  .then((data) => {
    console.log(`getQualityPublishedform success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getQualityPublishedform');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **formId** | **String** | Form ID |  |

### Return type

**EvaluationFormResponse**


## getQualityPublishedforms

> EvaluationFormResponseEntityListing getQualityPublishedforms(opts)

:::{"alert":"warning","title":"Deprecated","collapsible":false,"autoCollapse":false}
This resource has been deprecated
:::

GET /api/v2/quality/publishedforms

Get the published evaluation forms.

Requires ANY permissions:

* quality:evaluationForm:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.QualityApi();

let opts = { 
  'pageSize': 25, // Number | Page size
  'pageNumber': 1, // Number | Page number
  'name': "name_example", // String | Name
  'onlyLatestPerContext': false // Boolean | onlyLatestPerContext
};

apiInstance.getQualityPublishedforms(opts)
  .then((data) => {
    console.log(`getQualityPublishedforms success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getQualityPublishedforms');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **pageSize** | **Number** | Page size | [optional] [default to 25] |
 **pageNumber** | **Number** | Page number | [optional] [default to 1] |
 **name** | **String** | Name | [optional]  |
 **onlyLatestPerContext** | **Boolean** | onlyLatestPerContext | [optional] [default to false] |

### Return type

**EvaluationFormResponseEntityListing**


## getQualityPublishedformsEvaluation

> EvaluationFormResponse getQualityPublishedformsEvaluation(formId)


GET /api/v2/quality/publishedforms/evaluations/{formId}

Get the most recent published version of an evaluation form.

Requires ANY permissions:

* quality:evaluationForm:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.QualityApi();

let formId = "formId_example"; // String | Form ID

apiInstance.getQualityPublishedformsEvaluation(formId)
  .then((data) => {
    console.log(`getQualityPublishedformsEvaluation success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getQualityPublishedformsEvaluation');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **formId** | **String** | Form ID |  |

### Return type

**EvaluationFormResponse**


## getQualityPublishedformsEvaluations

> EvaluationFormResponseEntityListing getQualityPublishedformsEvaluations(opts)


GET /api/v2/quality/publishedforms/evaluations

Get the published evaluation forms.

Requires ANY permissions:

* quality:evaluationForm:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.QualityApi();

let opts = { 
  'pageSize': 25, // Number | Page size
  'pageNumber': 1, // Number | Page number
  'name': "name_example", // String | Name
  'onlyLatestPerContext': false // Boolean | onlyLatestPerContext
};

apiInstance.getQualityPublishedformsEvaluations(opts)
  .then((data) => {
    console.log(`getQualityPublishedformsEvaluations success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getQualityPublishedformsEvaluations');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **pageSize** | **Number** | Page size | [optional] [default to 25] |
 **pageNumber** | **Number** | Page number | [optional] [default to 1] |
 **name** | **String** | Name | [optional]  |
 **onlyLatestPerContext** | **Boolean** | onlyLatestPerContext | [optional] [default to false] |

### Return type

**EvaluationFormResponseEntityListing**


## getQualityPublishedformsSurvey

> SurveyForm getQualityPublishedformsSurvey(formId)


GET /api/v2/quality/publishedforms/surveys/{formId}

Get the most recent published version of a survey form.

Requires ALL permissions:

* quality:surveyForm:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.QualityApi();

let formId = "formId_example"; // String | Form ID

apiInstance.getQualityPublishedformsSurvey(formId)
  .then((data) => {
    console.log(`getQualityPublishedformsSurvey success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getQualityPublishedformsSurvey');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **formId** | **String** | Form ID |  |

### Return type

**SurveyForm**


## getQualityPublishedformsSurveys

> SurveyFormEntityListing getQualityPublishedformsSurveys(opts)


GET /api/v2/quality/publishedforms/surveys

Get the published survey forms.

Requires ALL permissions:

* quality:surveyForm:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.QualityApi();

let opts = { 
  'pageSize': 25, // Number | Page size
  'pageNumber': 1, // Number | Page number
  'name': "name_example", // String | Name
  'onlyLatestEnabledPerContext': false // Boolean | onlyLatestEnabledPerContext
};

apiInstance.getQualityPublishedformsSurveys(opts)
  .then((data) => {
    console.log(`getQualityPublishedformsSurveys success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getQualityPublishedformsSurveys');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **pageSize** | **Number** | Page size | [optional] [default to 25] |
 **pageNumber** | **Number** | Page number | [optional] [default to 1] |
 **name** | **String** | Name | [optional]  |
 **onlyLatestEnabledPerContext** | **Boolean** | onlyLatestEnabledPerContext | [optional] [default to false] |

### Return type

**SurveyFormEntityListing**


## getQualitySurvey

> Survey getQualitySurvey(surveyId)


GET /api/v2/quality/surveys/{surveyId}

Get a survey for a conversation

Requires ANY permissions:

* quality:survey:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.QualityApi();

let surveyId = "surveyId_example"; // String | surveyId

apiInstance.getQualitySurvey(surveyId)
  .then((data) => {
    console.log(`getQualitySurvey success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getQualitySurvey');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **surveyId** | **String** | surveyId |  |

### Return type

**Survey**


## getQualitySurveysScorable

> ScorableSurvey getQualitySurveysScorable(customerSurveyUrl)


GET /api/v2/quality/surveys/scorable

Get a survey as an end-customer, for the purposes of scoring it.

Requires NO permissions:

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

let apiInstance = new platformClient.QualityApi();

let customerSurveyUrl = "customerSurveyUrl_example"; // String | customerSurveyUrl

apiInstance.getQualitySurveysScorable(customerSurveyUrl)
  .then((data) => {
    console.log(`getQualitySurveysScorable success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getQualitySurveysScorable');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **customerSurveyUrl** | **String** | customerSurveyUrl |  |

### Return type

**ScorableSurvey**


## patchQualityFormsSurvey

> SurveyForm patchQualityFormsSurvey(formId, body)


PATCH /api/v2/quality/forms/surveys/{formId}

Disable a particular version of a survey form and invalidates any invitations that have already been sent to customers using this version of the form.

Requires ALL permissions:

* quality:surveyForm:disable

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.QualityApi();

let formId = "formId_example"; // String | Form ID
let body = {}; // Object | Survey form

apiInstance.patchQualityFormsSurvey(formId, body)
  .then((data) => {
    console.log(`patchQualityFormsSurvey success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling patchQualityFormsSurvey');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **formId** | **String** | Form ID |  |
 **body** | **Object** | Survey form |  |

### Return type

**SurveyForm**


## postAnalyticsEvaluationsAggregatesJobs

> AsyncQueryResponse postAnalyticsEvaluationsAggregatesJobs(body)


POST /api/v2/analytics/evaluations/aggregates/jobs

Query for evaluation aggregates asynchronously

postAnalyticsEvaluationsAggregatesJobs is a preview method and is subject to both breaking and non-breaking changes at any time without notice

Requires ANY permissions:

* analytics:evaluationAggregate:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.QualityApi();

let body = {}; // Object | query

apiInstance.postAnalyticsEvaluationsAggregatesJobs(body)
  .then((data) => {
    console.log(`postAnalyticsEvaluationsAggregatesJobs success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling postAnalyticsEvaluationsAggregatesJobs');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **body** | **Object** | query |  |

### Return type

**AsyncQueryResponse**


## postAnalyticsEvaluationsAggregatesQuery

> EvaluationAggregateQueryResponse postAnalyticsEvaluationsAggregatesQuery(body)


POST /api/v2/analytics/evaluations/aggregates/query

Query for evaluation aggregates

Requires ANY permissions:

* analytics:evaluationAggregate:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.QualityApi();

let body = {}; // Object | query

apiInstance.postAnalyticsEvaluationsAggregatesQuery(body)
  .then((data) => {
    console.log(`postAnalyticsEvaluationsAggregatesQuery success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling postAnalyticsEvaluationsAggregatesQuery');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **body** | **Object** | query |  |

### Return type

**EvaluationAggregateQueryResponse**


## postAnalyticsSurveysAggregatesJobs

> AsyncQueryResponse postAnalyticsSurveysAggregatesJobs(body)


POST /api/v2/analytics/surveys/aggregates/jobs

Query for survey aggregates asynchronously

postAnalyticsSurveysAggregatesJobs is a preview method and is subject to both breaking and non-breaking changes at any time without notice

Requires ANY permissions:

* analytics:surveyAggregate:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.QualityApi();

let body = {}; // Object | query

apiInstance.postAnalyticsSurveysAggregatesJobs(body)
  .then((data) => {
    console.log(`postAnalyticsSurveysAggregatesJobs success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling postAnalyticsSurveysAggregatesJobs');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **body** | **Object** | query |  |

### Return type

**AsyncQueryResponse**


## postAnalyticsSurveysAggregatesQuery

> SurveyAggregateQueryResponse postAnalyticsSurveysAggregatesQuery(body)


POST /api/v2/analytics/surveys/aggregates/query

Query for survey aggregates

Requires ANY permissions:

* analytics:surveyAggregate:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.QualityApi();

let body = {}; // Object | query

apiInstance.postAnalyticsSurveysAggregatesQuery(body)
  .then((data) => {
    console.log(`postAnalyticsSurveysAggregatesQuery success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling postAnalyticsSurveysAggregatesQuery');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **body** | **Object** | query |  |

### Return type

**SurveyAggregateQueryResponse**


## postQualityCalibrations

> Calibration postQualityCalibrations(body, opts)


POST /api/v2/quality/calibrations

Create a calibration

Requires ANY permissions:

* quality:calibration:add

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.QualityApi();

let body = {}; // Object | calibration
let opts = { 
  'expand': "expand_example" // String | calibratorId
};

apiInstance.postQualityCalibrations(body, opts)
  .then((data) => {
    console.log(`postQualityCalibrations success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling postQualityCalibrations');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **body** | **Object** | calibration |  |
 **expand** | **String** | calibratorId | [optional]  |

### Return type

**Calibration**


## postQualityConversationEvaluations

> Evaluation postQualityConversationEvaluations(conversationId, body, opts)


POST /api/v2/quality/conversations/{conversationId}/evaluations

Create an evaluation

Requires ANY permissions:

* quality:evaluation:add

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.QualityApi();

let conversationId = "conversationId_example"; // String | conversationId
let body = {}; // Object | evaluation
let opts = { 
  'expand': "expand_example" // String | evaluatorId
};

apiInstance.postQualityConversationEvaluations(conversationId, body, opts)
  .then((data) => {
    console.log(`postQualityConversationEvaluations success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling postQualityConversationEvaluations');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **conversationId** | **String** | conversationId |  |
 **body** | **Object** | evaluation |  |
 **expand** | **String** | evaluatorId | [optional]  |

### Return type

**Evaluation**


## postQualityConversationsAuditsQuery

> QualityAuditQueryExecutionStatusResponse postQualityConversationsAuditsQuery(body)


POST /api/v2/quality/conversations/audits/query

Create audit query execution

Requires ALL permissions:

* audits:interactionDetails:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.QualityApi();

let body = {}; // Object | query

apiInstance.postQualityConversationsAuditsQuery(body)
  .then((data) => {
    console.log(`postQualityConversationsAuditsQuery success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling postQualityConversationsAuditsQuery');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **body** | **Object** | query |  |

### Return type

**QualityAuditQueryExecutionStatusResponse**


## postQualityEvaluationsAggregatesQueryMe

> EvaluationAggregateQueryResponse postQualityEvaluationsAggregatesQueryMe(body)


POST /api/v2/quality/evaluations/aggregates/query/me

Query for evaluation aggregates for the current user

Requires NO permissions:

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.QualityApi();

let body = {}; // Object | query

apiInstance.postQualityEvaluationsAggregatesQueryMe(body)
  .then((data) => {
    console.log(`postQualityEvaluationsAggregatesQueryMe success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling postQualityEvaluationsAggregatesQueryMe');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **body** | **Object** | query |  |

### Return type

**EvaluationAggregateQueryResponse**


## postQualityEvaluationsScoring

> EvaluationScoringSet postQualityEvaluationsScoring(body)


POST /api/v2/quality/evaluations/scoring

Score evaluation

Requires NO permissions:

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.QualityApi();

let body = {}; // Object | evaluationAndScoringSet

apiInstance.postQualityEvaluationsScoring(body)
  .then((data) => {
    console.log(`postQualityEvaluationsScoring success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling postQualityEvaluationsScoring');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **body** | **Object** | evaluationAndScoringSet |  |

### Return type

**EvaluationScoringSet**


## postQualityForms

> EvaluationFormResponse postQualityForms(body)

:::{"alert":"warning","title":"Deprecated","collapsible":false,"autoCollapse":false}
This resource has been deprecated
:::

POST /api/v2/quality/forms

Create an evaluation form.

Requires ANY permissions:

* quality:evaluationForm:add

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.QualityApi();

let body = {}; // Object | Evaluation form

apiInstance.postQualityForms(body)
  .then((data) => {
    console.log(`postQualityForms success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling postQualityForms');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **body** | **Object** | Evaluation form |  |

### Return type

**EvaluationFormResponse**


## postQualityFormsEvaluations

> EvaluationFormResponse postQualityFormsEvaluations(body)


POST /api/v2/quality/forms/evaluations

Create an evaluation form.

Requires ANY permissions:

* quality:evaluationForm:add

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.QualityApi();

let body = {}; // Object | Evaluation form

apiInstance.postQualityFormsEvaluations(body)
  .then((data) => {
    console.log(`postQualityFormsEvaluations success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling postQualityFormsEvaluations');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **body** | **Object** | Evaluation form |  |

### Return type

**EvaluationFormResponse**


## postQualityFormsSurveys

> SurveyForm postQualityFormsSurveys(body)


POST /api/v2/quality/forms/surveys

Create a survey form.

Requires ALL permissions:

* quality:surveyForm:add

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.QualityApi();

let body = {}; // Object | Survey form

apiInstance.postQualityFormsSurveys(body)
  .then((data) => {
    console.log(`postQualityFormsSurveys success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling postQualityFormsSurveys');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **body** | **Object** | Survey form |  |

### Return type

**SurveyForm**


## postQualityPublishedforms

> EvaluationFormResponse postQualityPublishedforms(body)

:::{"alert":"warning","title":"Deprecated","collapsible":false,"autoCollapse":false}
This resource has been deprecated
:::

POST /api/v2/quality/publishedforms

Publish an evaluation form.

Requires ANY permissions:

* quality:evaluationForm:add

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.QualityApi();

let body = {}; // Object | Publish request containing id of form to publish

apiInstance.postQualityPublishedforms(body)
  .then((data) => {
    console.log(`postQualityPublishedforms success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling postQualityPublishedforms');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **body** | **Object** | Publish request containing id of form to publish |  |

### Return type

**EvaluationFormResponse**


## postQualityPublishedformsEvaluations

> EvaluationFormResponse postQualityPublishedformsEvaluations(body)


POST /api/v2/quality/publishedforms/evaluations

Publish an evaluation form.

Requires ANY permissions:

* quality:evaluationForm:add

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.QualityApi();

let body = {}; // Object | Publish request containing id of form to publish

apiInstance.postQualityPublishedformsEvaluations(body)
  .then((data) => {
    console.log(`postQualityPublishedformsEvaluations success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling postQualityPublishedformsEvaluations');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **body** | **Object** | Publish request containing id of form to publish |  |

### Return type

**EvaluationFormResponse**


## postQualityPublishedformsSurveys

> SurveyForm postQualityPublishedformsSurveys(body)


POST /api/v2/quality/publishedforms/surveys

Publish a survey form.

Requires ALL permissions:

* quality:surveyForm:add

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.QualityApi();

let body = {}; // Object | Survey form

apiInstance.postQualityPublishedformsSurveys(body)
  .then((data) => {
    console.log(`postQualityPublishedformsSurveys success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling postQualityPublishedformsSurveys');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **body** | **Object** | Survey form |  |

### Return type

**SurveyForm**


## postQualitySurveysScoring

> SurveyScoringSet postQualitySurveysScoring(body)


POST /api/v2/quality/surveys/scoring

Score survey

Requires NO permissions:

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.QualityApi();

let body = {}; // Object | surveyAndScoringSet

apiInstance.postQualitySurveysScoring(body)
  .then((data) => {
    console.log(`postQualitySurveysScoring success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling postQualitySurveysScoring');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **body** | **Object** | surveyAndScoringSet |  |

### Return type

**SurveyScoringSet**


## putQualityCalibration

> Calibration putQualityCalibration(calibrationId, body)


PUT /api/v2/quality/calibrations/{calibrationId}

Update a calibration to the specified calibration via PUT.  Editable fields include: evaluators, expertEvaluator, and scoringIndex

Requires ANY permissions:

* quality:calibration:edit

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.QualityApi();

let calibrationId = "calibrationId_example"; // String | Calibration ID
let body = {}; // Object | Calibration

apiInstance.putQualityCalibration(calibrationId, body)
  .then((data) => {
    console.log(`putQualityCalibration success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling putQualityCalibration');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **calibrationId** | **String** | Calibration ID |  |
 **body** | **Object** | Calibration |  |

### Return type

**Calibration**


## putQualityConversationEvaluation

> EvaluationResponse putQualityConversationEvaluation(conversationId, evaluationId, body, opts)


PUT /api/v2/quality/conversations/{conversationId}/evaluations/{evaluationId}

Update an evaluation

The quality:evaluation:edit permission allows modification of most fields, while the quality:evaluation:editScore permission allows an evaluator to change just the question scores, and the quality:evaluation:editAgentSignoff permission allows an agent to change the agent comments and sign off on the evaluation. authorizedActions is not returned for this PUT request, and is only returned for GET requests to this endpoint.

Requires ANY permissions:

* quality:evaluation:edit
* quality:evaluation:editScore
* quality:evaluation:editAgentSignoff

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.QualityApi();

let conversationId = "conversationId_example"; // String | conversationId
let evaluationId = "evaluationId_example"; // String | evaluationId
let body = {}; // Object | evaluation
let opts = { 
  'expand': "expand_example" // String | evaluatorId, evaluationForm, assignee, evaluator
};

apiInstance.putQualityConversationEvaluation(conversationId, evaluationId, body, opts)
  .then((data) => {
    console.log(`putQualityConversationEvaluation success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling putQualityConversationEvaluation');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **conversationId** | **String** | conversationId |  |
 **evaluationId** | **String** | evaluationId |  |
 **body** | **Object** | evaluation |  |
 **expand** | **String** | evaluatorId, evaluationForm, assignee, evaluator | [optional]  |

### Return type

**EvaluationResponse**


## putQualityForm

> EvaluationFormResponse putQualityForm(formId, body)

:::{"alert":"warning","title":"Deprecated","collapsible":false,"autoCollapse":false}
This resource has been deprecated
:::

PUT /api/v2/quality/forms/{formId}

Update an evaluation form.

Requires ANY permissions:

* quality:evaluationForm:edit

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.QualityApi();

let formId = "formId_example"; // String | Form ID
let body = {}; // Object | Evaluation form

apiInstance.putQualityForm(formId, body)
  .then((data) => {
    console.log(`putQualityForm success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling putQualityForm');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **formId** | **String** | Form ID |  |
 **body** | **Object** | Evaluation form |  |

### Return type

**EvaluationFormResponse**


## putQualityFormsEvaluation

> EvaluationFormResponse putQualityFormsEvaluation(formId, body)


PUT /api/v2/quality/forms/evaluations/{formId}

Update an evaluation form.

Requires ANY permissions:

* quality:evaluationForm:edit

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.QualityApi();

let formId = "formId_example"; // String | Form ID
let body = {}; // Object | Evaluation form

apiInstance.putQualityFormsEvaluation(formId, body)
  .then((data) => {
    console.log(`putQualityFormsEvaluation success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling putQualityFormsEvaluation');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **formId** | **String** | Form ID |  |
 **body** | **Object** | Evaluation form |  |

### Return type

**EvaluationFormResponse**


## putQualityFormsEvaluationAiscoringSettings

> AiScoringSettings putQualityFormsEvaluationAiscoringSettings(formId, body)


PUT /api/v2/quality/forms/evaluations/{formId}/aiscoring/settings

Update the AI Scoring settings of an evaluation form.

Requires ANY permissions:

* quality:evaluationForm:aiScoringEdit

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.QualityApi();

let formId = "formId_example"; // String | Form ID
let body = {}; // Object | AI Scoring Settings

apiInstance.putQualityFormsEvaluationAiscoringSettings(formId, body)
  .then((data) => {
    console.log(`putQualityFormsEvaluationAiscoringSettings success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling putQualityFormsEvaluationAiscoringSettings');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **formId** | **String** | Form ID |  |
 **body** | **Object** | AI Scoring Settings |  |

### Return type

**AiScoringSettings**


## putQualityFormsSurvey

> SurveyForm putQualityFormsSurvey(formId, body)


PUT /api/v2/quality/forms/surveys/{formId}

Update a survey form.

Requires ALL permissions:

* quality:surveyForm:edit

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.QualityApi();

let formId = "formId_example"; // String | Form ID
let body = {}; // Object | Survey form

apiInstance.putQualityFormsSurvey(formId, body)
  .then((data) => {
    console.log(`putQualityFormsSurvey success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling putQualityFormsSurvey');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **formId** | **String** | Form ID |  |
 **body** | **Object** | Survey form |  |

### Return type

**SurveyForm**


## putQualitySurveysScorable

> ScorableSurvey putQualitySurveysScorable(customerSurveyUrl, body)


PUT /api/v2/quality/surveys/scorable

Update a survey as an end-customer, for the purposes of scoring it.

Requires NO permissions:

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

let apiInstance = new platformClient.QualityApi();

let customerSurveyUrl = "customerSurveyUrl_example"; // String | customerSurveyUrl
let body = {}; // Object | survey

apiInstance.putQualitySurveysScorable(customerSurveyUrl, body)
  .then((data) => {
    console.log(`putQualitySurveysScorable success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling putQualitySurveysScorable');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **customerSurveyUrl** | **String** | customerSurveyUrl |  |
 **body** | **Object** | survey |  |

### Return type

**ScorableSurvey**


_purecloud-platform-client-v2@229.1.0_
