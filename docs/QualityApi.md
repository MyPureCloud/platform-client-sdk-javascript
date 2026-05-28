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
[**deleteQualityProgramAgentscoringrule**](QualityApi#deleteQualityProgramAgentscoringrule) | **DELETE** /api/v2/quality/programs/{programId}/agentscoringrules/{ruleId} | Delete an Agent Scoring Rule
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
[**getQualityEvaluatorsActivity**](QualityApi#getQualityEvaluatorsActivity) | **GET** /api/v2/quality/evaluators/activity | Get an evaluator activity. To ensure optimal performance and prevent timeouts when processing large datasets, startTime and endTime fields are highly recommended for all requests.
[**getQualityForm**](QualityApi#getQualityForm) | **GET** /api/v2/quality/forms/{formId} | Get an evaluation form
[**getQualityFormVersions**](QualityApi#getQualityFormVersions) | **GET** /api/v2/quality/forms/{formId}/versions | Gets all the revisions for a specific evaluation.
[**getQualityForms**](QualityApi#getQualityForms) | **GET** /api/v2/quality/forms | Get the list of evaluation forms. If you set expand=publishHistory, then you will be able to get published versions for each corresponding evaluation form.
[**getQualityFormsEvaluation**](QualityApi#getQualityFormsEvaluation) | **GET** /api/v2/quality/forms/evaluations/{formId} | Get an evaluation form
[**getQualityFormsEvaluationVersions**](QualityApi#getQualityFormsEvaluationVersions) | **GET** /api/v2/quality/forms/evaluations/{formId}/versions | Gets all the revisions for a specific evaluation.
[**getQualityFormsEvaluations**](QualityApi#getQualityFormsEvaluations) | **GET** /api/v2/quality/forms/evaluations | Get the list of evaluation forms
[**getQualityFormsEvaluationsBulk**](QualityApi#getQualityFormsEvaluationsBulk) | **GET** /api/v2/quality/forms/evaluations/bulk | Retrieve a list of evaluation forms by their ids
[**getQualityFormsEvaluationsBulkContexts**](QualityApi#getQualityFormsEvaluationsBulkContexts) | **GET** /api/v2/quality/forms/evaluations/bulk/contexts | Retrieve a list of the latest published evaluation form versions by context ids
[**getQualityFormsSurvey**](QualityApi#getQualityFormsSurvey) | **GET** /api/v2/quality/forms/surveys/{formId} | Get a survey form
[**getQualityFormsSurveyVersions**](QualityApi#getQualityFormsSurveyVersions) | **GET** /api/v2/quality/forms/surveys/{formId}/versions | Gets all the revisions for a specific survey.
[**getQualityFormsSurveys**](QualityApi#getQualityFormsSurveys) | **GET** /api/v2/quality/forms/surveys | Get the list of survey forms. If you set expand=publishHistory, then you will be able to get published versions for each corresponding survey form.
[**getQualityFormsSurveysBulk**](QualityApi#getQualityFormsSurveysBulk) | **GET** /api/v2/quality/forms/surveys/bulk | Retrieve a list of survey forms by their ids
[**getQualityFormsSurveysBulkContexts**](QualityApi#getQualityFormsSurveysBulkContexts) | **GET** /api/v2/quality/forms/surveys/bulk/contexts | Retrieve a list of the latest form versions by context ids
[**getQualityProgramAgentscoringrule**](QualityApi#getQualityProgramAgentscoringrule) | **GET** /api/v2/quality/programs/{programId}/agentscoringrules/{ruleId} | Get an Agent Scoring Rule
[**getQualityProgramAgentscoringrules**](QualityApi#getQualityProgramAgentscoringrules) | **GET** /api/v2/quality/programs/{programId}/agentscoringrules | Get Agent Scoring Rules for a program
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
[**postQualityEvaluationsSearch**](QualityApi#postQualityEvaluationsSearch) | **POST** /api/v2/quality/evaluations/search | Search evaluations based along specified criteria
[**postQualityForms**](QualityApi#postQualityForms) | **POST** /api/v2/quality/forms | Create an evaluation form.
[**postQualityFormsEvaluations**](QualityApi#postQualityFormsEvaluations) | **POST** /api/v2/quality/forms/evaluations | Create an evaluation form.
[**postQualityFormsSurveys**](QualityApi#postQualityFormsSurveys) | **POST** /api/v2/quality/forms/surveys | Create a survey form.
[**postQualityProgramAgentscoringrules**](QualityApi#postQualityProgramAgentscoringrules) | **POST** /api/v2/quality/programs/{programId}/agentscoringrules | Create an Agent Scoring Rule
[**postQualityPublishedforms**](QualityApi#postQualityPublishedforms) | **POST** /api/v2/quality/publishedforms | Publish an evaluation form.
[**postQualityPublishedformsEvaluations**](QualityApi#postQualityPublishedformsEvaluations) | **POST** /api/v2/quality/publishedforms/evaluations | Publish an evaluation form.
[**postQualityPublishedformsSurveys**](QualityApi#postQualityPublishedformsSurveys) | **POST** /api/v2/quality/publishedforms/surveys | Publish a survey form.
[**postQualitySurveys**](QualityApi#postQualitySurveys) | **POST** /api/v2/quality/surveys | Create a survey for a conversation
[**postQualitySurveysScoring**](QualityApi#postQualitySurveysScoring) | **POST** /api/v2/quality/surveys/scoring | Score survey
[**putQualityCalibration**](QualityApi#putQualityCalibration) | **PUT** /api/v2/quality/calibrations/{calibrationId} | Update a calibration to the specified calibration via PUT.  Editable fields include: evaluators, expertEvaluator, and scoringIndex
[**putQualityConversationEvaluation**](QualityApi#putQualityConversationEvaluation) | **PUT** /api/v2/quality/conversations/{conversationId}/evaluations/{evaluationId} | Update an evaluation
[**putQualityForm**](QualityApi#putQualityForm) | **PUT** /api/v2/quality/forms/{formId} | Update an evaluation form.
[**putQualityFormsEvaluation**](QualityApi#putQualityFormsEvaluation) | **PUT** /api/v2/quality/forms/evaluations/{formId} | Update an evaluation form.
[**putQualityFormsEvaluationAiscoringSettings**](QualityApi#putQualityFormsEvaluationAiscoringSettings) | **PUT** /api/v2/quality/forms/evaluations/{formId}/aiscoring/settings | Update the AI Scoring settings of an evaluation form.
[**putQualityFormsSurvey**](QualityApi#putQualityFormsSurvey) | **PUT** /api/v2/quality/forms/surveys/{formId} | Update a survey form.
[**putQualityProgramAgentscoringrule**](QualityApi#putQualityProgramAgentscoringrule) | **PUT** /api/v2/quality/programs/{programId}/agentscoringrules/{ruleId} | Update an Agent Scoring Rule
[**putQualitySurveysScorable**](QualityApi#putQualitySurveysScorable) | **PUT** /api/v2/quality/surveys/scorable | Update a survey as an end-customer, for the purposes of scoring it.



## deleteAnalyticsEvaluationsAggregatesJob

> void deleteAnalyticsEvaluationsAggregatesJob(jobId, opts)


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
let opts = { 
  'customHeaders': {  // Object.<string, string> | Request Custom Headers
    'X-Service-Name': 'customer-service',
    'X-Request-ID': 'req-12345'
  }
};

apiInstance.deleteAnalyticsEvaluationsAggregatesJob(jobId, opts)
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
 **customHeaders** | **Object.<string, string>** | Request Custom Headers | [optional] |

### Return type

void (no response body)


## deleteAnalyticsSurveysAggregatesJob

> void deleteAnalyticsSurveysAggregatesJob(jobId, opts)


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
let opts = { 
  'customHeaders': {  // Object.<string, string> | Request Custom Headers
    'X-Service-Name': 'customer-service',
    'X-Request-ID': 'req-12345'
  }
};

apiInstance.deleteAnalyticsSurveysAggregatesJob(jobId, opts)
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
 **customHeaders** | **Object.<string, string>** | Request Custom Headers | [optional] |

### Return type

void (no response body)


## deleteQualityCalibration

> Calibration deleteQualityCalibration(calibrationId, calibratorId, opts)


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
let opts = { 
  'customHeaders': {  // Object.<string, string> | Request Custom Headers
    'X-Service-Name': 'customer-service',
    'X-Request-ID': 'req-12345'
  }
};

apiInstance.deleteQualityCalibration(calibrationId, calibratorId, opts)
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
 **customHeaders** | **Object.<string, string>** | Request Custom Headers | [optional] |

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
  'expand': "expand_example", // String | evaluatorId, evaluationForm
  'customHeaders': {  // Object.<string, string> | Request Custom Headers
    'X-Service-Name': 'customer-service',
    'X-Request-ID': 'req-12345'
  }
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
 **customHeaders** | **Object.<string, string>** | Request Custom Headers | [optional] |

### Return type

**EvaluationResponse**


## deleteQualityForm

> void deleteQualityForm(formId, opts)

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
let opts = { 
  'customHeaders': {  // Object.<string, string> | Request Custom Headers
    'X-Service-Name': 'customer-service',
    'X-Request-ID': 'req-12345'
  }
};

apiInstance.deleteQualityForm(formId, opts)
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
 **customHeaders** | **Object.<string, string>** | Request Custom Headers | [optional] |

### Return type

void (no response body)


## deleteQualityFormsEvaluation

> void deleteQualityFormsEvaluation(formId, opts)


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
let opts = { 
  'customHeaders': {  // Object.<string, string> | Request Custom Headers
    'X-Service-Name': 'customer-service',
    'X-Request-ID': 'req-12345'
  }
};

apiInstance.deleteQualityFormsEvaluation(formId, opts)
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
 **customHeaders** | **Object.<string, string>** | Request Custom Headers | [optional] |

### Return type

void (no response body)


## deleteQualityFormsSurvey

> void deleteQualityFormsSurvey(formId, opts)


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
let opts = { 
  'customHeaders': {  // Object.<string, string> | Request Custom Headers
    'X-Service-Name': 'customer-service',
    'X-Request-ID': 'req-12345'
  }
};

apiInstance.deleteQualityFormsSurvey(formId, opts)
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
 **customHeaders** | **Object.<string, string>** | Request Custom Headers | [optional] |

### Return type

void (no response body)


## deleteQualityProgramAgentscoringrule

> void deleteQualityProgramAgentscoringrule(programId, ruleId, opts)


DELETE /api/v2/quality/programs/{programId}/agentscoringrules/{ruleId}

Delete an Agent Scoring Rule

Requires ANY permissions:

* quality:scoringRule:delete

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.QualityApi();

let programId = "programId_example"; // String | Program ID from Speech and Text Analytics
let ruleId = "ruleId_example"; // String | Agent Scoring Rule ID
let opts = { 
  'customHeaders': {  // Object.<string, string> | Request Custom Headers
    'X-Service-Name': 'customer-service',
    'X-Request-ID': 'req-12345'
  }
};

apiInstance.deleteQualityProgramAgentscoringrule(programId, ruleId, opts)
  .then(() => {
    console.log('deleteQualityProgramAgentscoringrule returned successfully.');
  })
  .catch((err) => {
    console.log('There was a failure calling deleteQualityProgramAgentscoringrule');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **programId** | **String** | Program ID from Speech and Text Analytics |  |
 **ruleId** | **String** | Agent Scoring Rule ID |  |
 **customHeaders** | **Object.<string, string>** | Request Custom Headers | [optional] |

### Return type

void (no response body)


## getAnalyticsEvaluationsAggregatesJob

> AsyncQueryStatus getAnalyticsEvaluationsAggregatesJob(jobId, opts)


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
let opts = { 
  'customHeaders': {  // Object.<string, string> | Request Custom Headers
    'X-Service-Name': 'customer-service',
    'X-Request-ID': 'req-12345'
  }
};

apiInstance.getAnalyticsEvaluationsAggregatesJob(jobId, opts)
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
 **customHeaders** | **Object.<string, string>** | Request Custom Headers | [optional] |

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
  'cursor': "cursor_example", // String | Cursor token to retrieve next page
  'customHeaders': {  // Object.<string, string> | Request Custom Headers
    'X-Service-Name': 'customer-service',
    'X-Request-ID': 'req-12345'
  }
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
 **customHeaders** | **Object.<string, string>** | Request Custom Headers | [optional] |

### Return type

**EvaluationAsyncAggregateQueryResponse**


## getAnalyticsSurveysAggregatesJob

> AsyncQueryStatus getAnalyticsSurveysAggregatesJob(jobId, opts)


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
let opts = { 
  'customHeaders': {  // Object.<string, string> | Request Custom Headers
    'X-Service-Name': 'customer-service',
    'X-Request-ID': 'req-12345'
  }
};

apiInstance.getAnalyticsSurveysAggregatesJob(jobId, opts)
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
 **customHeaders** | **Object.<string, string>** | Request Custom Headers | [optional] |

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
  'cursor': "cursor_example", // String | Cursor token to retrieve next page
  'customHeaders': {  // Object.<string, string> | Request Custom Headers
    'X-Service-Name': 'customer-service',
    'X-Request-ID': 'req-12345'
  }
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
 **customHeaders** | **Object.<string, string>** | Request Custom Headers | [optional] |

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
  'userState': "Legacy", // String | 'Legacy' fetches active and inactive users when evaluatorUserId or no user filters are supplied; otherwise fetches active users.  'Any' fetches users of 'active', 'inactive' and 'deleted' states.
  'customHeaders': {  // Object.<string, string> | Request Custom Headers
    'X-Service-Name': 'customer-service',
    'X-Request-ID': 'req-12345'
  }
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
 **customHeaders** | **Object.<string, string>** | Request Custom Headers | [optional] |

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
  'conversationId': "conversationId_example", // String | conversationId
  'customHeaders': {  // Object.<string, string> | Request Custom Headers
    'X-Service-Name': 'customer-service',
    'X-Request-ID': 'req-12345'
  }
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
 **customHeaders** | **Object.<string, string>** | Request Custom Headers | [optional] |

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
  'endTime': new Date("2013-10-20T19:20:30+01:00"), // Date | end of the calibration query. Date time is represented as an ISO-8601 string. For example: yyyy-MM-ddTHH:mm:ss[.mmm]Z
  'customHeaders': {  // Object.<string, string> | Request Custom Headers
    'X-Service-Name': 'customer-service',
    'X-Request-ID': 'req-12345'
  }
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
 **customHeaders** | **Object.<string, string>** | Request Custom Headers | [optional] |

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
  'expand': "expand_example", // String | agent, assignee, evaluator, evaluationForm
  'customHeaders': {  // Object.<string, string> | Request Custom Headers
    'X-Service-Name': 'customer-service',
    'X-Request-ID': 'req-12345'
  }
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
 **customHeaders** | **Object.<string, string>** | Request Custom Headers | [optional] |

### Return type

**EvaluationResponse**


## getQualityConversationSurveys

> [Survey] getQualityConversationSurveys(conversationId, opts)


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
let opts = { 
  'customHeaders': {  // Object.<string, string> | Request Custom Headers
    'X-Service-Name': 'customer-service',
    'X-Request-ID': 'req-12345'
  }
};

apiInstance.getQualityConversationSurveys(conversationId, opts)
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
 **customHeaders** | **Object.<string, string>** | Request Custom Headers | [optional] |

### Return type

**[Survey]**


## getQualityConversationsAuditsQueryTransactionId

> QualityAuditQueryExecutionStatusResponse getQualityConversationsAuditsQueryTransactionId(transactionId, opts)


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
let opts = { 
  'customHeaders': {  // Object.<string, string> | Request Custom Headers
    'X-Service-Name': 'customer-service',
    'X-Request-ID': 'req-12345'
  }
};

apiInstance.getQualityConversationsAuditsQueryTransactionId(transactionId, opts)
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
 **customHeaders** | **Object.<string, string>** | Request Custom Headers | [optional] |

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
  'expand': ["expand_example"], // [String] | Which fields, if any, to expand
  'customHeaders': {  // Object.<string, string> | Request Custom Headers
    'X-Service-Name': 'customer-service',
    'X-Request-ID': 'req-12345'
  }
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
 **customHeaders** | **Object.<string, string>** | Request Custom Headers | [optional] |

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
  'includeDeletedUsers': false, // Boolean | Allow returning an agent or evaluator user with a 'delete' status. Defaults to false.
  'customHeaders': {  // Object.<string, string> | Request Custom Headers
    'X-Service-Name': 'customer-service',
    'X-Request-ID': 'req-12345'
  }
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
 **customHeaders** | **Object.<string, string>** | Request Custom Headers | [optional] |

### Return type

**EvaluationEntityListing**


## getQualityEvaluatorsActivity

> EvaluatorActivityEntityListing getQualityEvaluatorsActivity(opts)


GET /api/v2/quality/evaluators/activity

Get an evaluator activity. To ensure optimal performance and prevent timeouts when processing large datasets, startTime and endTime fields are highly recommended for all requests.

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
  'agentTeamId': "agentTeamId_example", // String | team id of agents to be considered
  'customHeaders': {  // Object.<string, string> | Request Custom Headers
    'X-Service-Name': 'customer-service',
    'X-Request-ID': 'req-12345'
  }
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
 **customHeaders** | **Object.<string, string>** | Request Custom Headers | [optional] |

### Return type

**EvaluatorActivityEntityListing**


## getQualityForm

> EvaluationFormResponse getQualityForm(formId, opts)

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
let opts = { 
  'customHeaders': {  // Object.<string, string> | Request Custom Headers
    'X-Service-Name': 'customer-service',
    'X-Request-ID': 'req-12345'
  }
};

apiInstance.getQualityForm(formId, opts)
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
 **customHeaders** | **Object.<string, string>** | Request Custom Headers | [optional] |

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
  'pageNumber': 1, // Number | Page number
  'sortOrder': "asc", // String | Sort order
  'customHeaders': {  // Object.<string, string> | Request Custom Headers
    'X-Service-Name': 'customer-service',
    'X-Request-ID': 'req-12345'
  }
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
 **sortOrder** | **String** | Sort order | [optional] [default to asc] |
 **customHeaders** | **Object.<string, string>** | Request Custom Headers | [optional] |

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
  'sortOrder': "sortOrder_example", // String | Order to sort results, either asc or desc
  'customHeaders': {  // Object.<string, string> | Request Custom Headers
    'X-Service-Name': 'customer-service',
    'X-Request-ID': 'req-12345'
  }
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
 **customHeaders** | **Object.<string, string>** | Request Custom Headers | [optional] |

### Return type

**EvaluationFormResponseEntityListing**


## getQualityFormsEvaluation

> EvaluationFormResponse getQualityFormsEvaluation(formId, opts)


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
let opts = { 
  'customHeaders': {  // Object.<string, string> | Request Custom Headers
    'X-Service-Name': 'customer-service',
    'X-Request-ID': 'req-12345'
  }
};

apiInstance.getQualityFormsEvaluation(formId, opts)
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
 **customHeaders** | **Object.<string, string>** | Request Custom Headers | [optional] |

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
  'sortOrder': "asc", // String | Sort order
  'customHeaders': {  // Object.<string, string> | Request Custom Headers
    'X-Service-Name': 'customer-service',
    'X-Request-ID': 'req-12345'
  }
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
 **customHeaders** | **Object.<string, string>** | Request Custom Headers | [optional] |

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
  'sortOrder': "sortOrder_example", // String | Order to sort results, either asc or desc
  'customHeaders': {  // Object.<string, string> | Request Custom Headers
    'X-Service-Name': 'customer-service',
    'X-Request-ID': 'req-12345'
  }
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
 **customHeaders** | **Object.<string, string>** | Request Custom Headers | [optional] |

### Return type

**EvaluationFormResponseEntityListing**


## getQualityFormsEvaluationsBulk

> EvaluationFormResponseEntityListing getQualityFormsEvaluationsBulk(id, opts)


GET /api/v2/quality/forms/evaluations/bulk

Retrieve a list of evaluation forms by their ids

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

let id = ["id_example"]; // [String] | A comma-delimited list of valid evaluation form ids. The maximum number of ids allowed in this list is 100
let opts = { 
  'includeLatestVersionFormName': false, // Boolean | Whether to include the name of the form's most recently published version
  'customHeaders': {  // Object.<string, string> | Request Custom Headers
    'X-Service-Name': 'customer-service',
    'X-Request-ID': 'req-12345'
  }
};

apiInstance.getQualityFormsEvaluationsBulk(id, opts)
  .then((data) => {
    console.log(`getQualityFormsEvaluationsBulk success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getQualityFormsEvaluationsBulk');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **id** | **[String]** | A comma-delimited list of valid evaluation form ids. The maximum number of ids allowed in this list is 100 |  |
 **includeLatestVersionFormName** | **Boolean** | Whether to include the name of the form's most recently published version | [optional] [default to false] |
 **customHeaders** | **Object.<string, string>** | Request Custom Headers | [optional] |

### Return type

**EvaluationFormResponseEntityListing**


## getQualityFormsEvaluationsBulkContexts

> [EvaluationFormResponse] getQualityFormsEvaluationsBulkContexts(contextId, opts)


GET /api/v2/quality/forms/evaluations/bulk/contexts

Retrieve a list of the latest published evaluation form versions by context ids

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

let contextId = ["contextId_example"]; // [String] | A comma-delimited list of valid evaluation form context ids
let opts = { 
  'customHeaders': {  // Object.<string, string> | Request Custom Headers
    'X-Service-Name': 'customer-service',
    'X-Request-ID': 'req-12345'
  }
};

apiInstance.getQualityFormsEvaluationsBulkContexts(contextId, opts)
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
 **customHeaders** | **Object.<string, string>** | Request Custom Headers | [optional] |

### Return type

**[EvaluationFormResponse]**


## getQualityFormsSurvey

> SurveyForm getQualityFormsSurvey(formId, opts)


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
let opts = { 
  'customHeaders': {  // Object.<string, string> | Request Custom Headers
    'X-Service-Name': 'customer-service',
    'X-Request-ID': 'req-12345'
  }
};

apiInstance.getQualityFormsSurvey(formId, opts)
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
 **customHeaders** | **Object.<string, string>** | Request Custom Headers | [optional] |

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
  'pageNumber': 1, // Number | Page number
  'customHeaders': {  // Object.<string, string> | Request Custom Headers
    'X-Service-Name': 'customer-service',
    'X-Request-ID': 'req-12345'
  }
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
 **customHeaders** | **Object.<string, string>** | Request Custom Headers | [optional] |

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
  'sortOrder': "sortOrder_example", // String | Order to sort results, either asc or desc
  'customHeaders': {  // Object.<string, string> | Request Custom Headers
    'X-Service-Name': 'customer-service',
    'X-Request-ID': 'req-12345'
  }
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
 **customHeaders** | **Object.<string, string>** | Request Custom Headers | [optional] |

### Return type

**SurveyFormEntityListing**


## getQualityFormsSurveysBulk

> SurveyFormEntityListing getQualityFormsSurveysBulk(id, opts)


GET /api/v2/quality/forms/surveys/bulk

Retrieve a list of survey forms by their ids

Requires ANY permissions:

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
let opts = { 
  'customHeaders': {  // Object.<string, string> | Request Custom Headers
    'X-Service-Name': 'customer-service',
    'X-Request-ID': 'req-12345'
  }
};

apiInstance.getQualityFormsSurveysBulk(id, opts)
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
 **customHeaders** | **Object.<string, string>** | Request Custom Headers | [optional] |

### Return type

**SurveyFormEntityListing**


## getQualityFormsSurveysBulkContexts

> [SurveyForm] getQualityFormsSurveysBulkContexts(contextId, opts)


GET /api/v2/quality/forms/surveys/bulk/contexts

Retrieve a list of the latest form versions by context ids

Requires ANY permissions:

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
  'published': true, // Boolean | If true, the latest published version will be included. If false, only the unpublished version will be included.
  'customHeaders': {  // Object.<string, string> | Request Custom Headers
    'X-Service-Name': 'customer-service',
    'X-Request-ID': 'req-12345'
  }
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
 **customHeaders** | **Object.<string, string>** | Request Custom Headers | [optional] |

### Return type

**[SurveyForm]**


## getQualityProgramAgentscoringrule

> AgentScoringRule getQualityProgramAgentscoringrule(programId, ruleId, opts)


GET /api/v2/quality/programs/{programId}/agentscoringrules/{ruleId}

Get an Agent Scoring Rule

Requires ANY permissions:

* quality:scoringRule:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.QualityApi();

let programId = "programId_example"; // String | Program ID from Speech and Text Analytics
let ruleId = "ruleId_example"; // String | Agent Scoring Rule ID
let opts = { 
  'customHeaders': {  // Object.<string, string> | Request Custom Headers
    'X-Service-Name': 'customer-service',
    'X-Request-ID': 'req-12345'
  }
};

apiInstance.getQualityProgramAgentscoringrule(programId, ruleId, opts)
  .then((data) => {
    console.log(`getQualityProgramAgentscoringrule success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getQualityProgramAgentscoringrule');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **programId** | **String** | Program ID from Speech and Text Analytics |  |
 **ruleId** | **String** | Agent Scoring Rule ID |  |
 **customHeaders** | **Object.<string, string>** | Request Custom Headers | [optional] |

### Return type

**AgentScoringRule**


## getQualityProgramAgentscoringrules

> AgentScoringRuleEntityListing getQualityProgramAgentscoringrules(programId, opts)


GET /api/v2/quality/programs/{programId}/agentscoringrules

Get Agent Scoring Rules for a program

Requires ANY permissions:

* quality:scoringRule:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.QualityApi();

let programId = "programId_example"; // String | Program ID from Speech and Text Analytics
let opts = { 
  'customHeaders': {  // Object.<string, string> | Request Custom Headers
    'X-Service-Name': 'customer-service',
    'X-Request-ID': 'req-12345'
  }
};

apiInstance.getQualityProgramAgentscoringrules(programId, opts)
  .then((data) => {
    console.log(`getQualityProgramAgentscoringrules success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getQualityProgramAgentscoringrules');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **programId** | **String** | Program ID from Speech and Text Analytics |  |
 **customHeaders** | **Object.<string, string>** | Request Custom Headers | [optional] |

### Return type

**AgentScoringRuleEntityListing**


## getQualityPublishedform

> EvaluationFormResponse getQualityPublishedform(formId, opts)

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
let opts = { 
  'customHeaders': {  // Object.<string, string> | Request Custom Headers
    'X-Service-Name': 'customer-service',
    'X-Request-ID': 'req-12345'
  }
};

apiInstance.getQualityPublishedform(formId, opts)
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
 **customHeaders** | **Object.<string, string>** | Request Custom Headers | [optional] |

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
  'onlyLatestPerContext': false, // Boolean | onlyLatestPerContext
  'customHeaders': {  // Object.<string, string> | Request Custom Headers
    'X-Service-Name': 'customer-service',
    'X-Request-ID': 'req-12345'
  }
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
 **customHeaders** | **Object.<string, string>** | Request Custom Headers | [optional] |

### Return type

**EvaluationFormResponseEntityListing**


## getQualityPublishedformsEvaluation

> EvaluationFormResponse getQualityPublishedformsEvaluation(formId, opts)


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
let opts = { 
  'customHeaders': {  // Object.<string, string> | Request Custom Headers
    'X-Service-Name': 'customer-service',
    'X-Request-ID': 'req-12345'
  }
};

apiInstance.getQualityPublishedformsEvaluation(formId, opts)
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
 **customHeaders** | **Object.<string, string>** | Request Custom Headers | [optional] |

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
  'onlyLatestPerContext': false, // Boolean | onlyLatestPerContext
  'customHeaders': {  // Object.<string, string> | Request Custom Headers
    'X-Service-Name': 'customer-service',
    'X-Request-ID': 'req-12345'
  }
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
 **customHeaders** | **Object.<string, string>** | Request Custom Headers | [optional] |

### Return type

**EvaluationFormResponseEntityListing**


## getQualityPublishedformsSurvey

> SurveyForm getQualityPublishedformsSurvey(formId, opts)


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
let opts = { 
  'customHeaders': {  // Object.<string, string> | Request Custom Headers
    'X-Service-Name': 'customer-service',
    'X-Request-ID': 'req-12345'
  }
};

apiInstance.getQualityPublishedformsSurvey(formId, opts)
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
 **customHeaders** | **Object.<string, string>** | Request Custom Headers | [optional] |

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
  'onlyLatestEnabledPerContext': false, // Boolean | onlyLatestEnabledPerContext
  'customHeaders': {  // Object.<string, string> | Request Custom Headers
    'X-Service-Name': 'customer-service',
    'X-Request-ID': 'req-12345'
  }
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
 **customHeaders** | **Object.<string, string>** | Request Custom Headers | [optional] |

### Return type

**SurveyFormEntityListing**


## getQualitySurvey

> Survey getQualitySurvey(surveyId, opts)


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
let opts = { 
  'customHeaders': {  // Object.<string, string> | Request Custom Headers
    'X-Service-Name': 'customer-service',
    'X-Request-ID': 'req-12345'
  }
};

apiInstance.getQualitySurvey(surveyId, opts)
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
 **customHeaders** | **Object.<string, string>** | Request Custom Headers | [optional] |

### Return type

**Survey**


## getQualitySurveysScorable

> ScorableSurvey getQualitySurveysScorable(customerSurveyUrl, opts)


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
let opts = { 
  'customHeaders': {  // Object.<string, string> | Request Custom Headers
    'X-Service-Name': 'customer-service',
    'X-Request-ID': 'req-12345'
  }
};

apiInstance.getQualitySurveysScorable(customerSurveyUrl, opts)
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
 **customHeaders** | **Object.<string, string>** | Request Custom Headers | [optional] |

### Return type

**ScorableSurvey**


## patchQualityFormsSurvey

> SurveyForm patchQualityFormsSurvey(formId, body, opts)


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
let opts = { 
  'customHeaders': {  // Object.<string, string> | Request Custom Headers
    'X-Service-Name': 'customer-service',
    'X-Request-ID': 'req-12345'
  }
};

apiInstance.patchQualityFormsSurvey(formId, body, opts)
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
 **customHeaders** | **Object.<string, string>** | Request Custom Headers | [optional] |

### Return type

**SurveyForm**


## postAnalyticsEvaluationsAggregatesJobs

> AsyncQueryResponse postAnalyticsEvaluationsAggregatesJobs(body, opts)


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
let opts = { 
  'customHeaders': {  // Object.<string, string> | Request Custom Headers
    'X-Service-Name': 'customer-service',
    'X-Request-ID': 'req-12345'
  }
};

apiInstance.postAnalyticsEvaluationsAggregatesJobs(body, opts)
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
 **customHeaders** | **Object.<string, string>** | Request Custom Headers | [optional] |

### Return type

**AsyncQueryResponse**


## postAnalyticsEvaluationsAggregatesQuery

> EvaluationAggregateQueryResponse postAnalyticsEvaluationsAggregatesQuery(body, opts)


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
let opts = { 
  'customHeaders': {  // Object.<string, string> | Request Custom Headers
    'X-Service-Name': 'customer-service',
    'X-Request-ID': 'req-12345'
  }
};

apiInstance.postAnalyticsEvaluationsAggregatesQuery(body, opts)
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
 **customHeaders** | **Object.<string, string>** | Request Custom Headers | [optional] |

### Return type

**EvaluationAggregateQueryResponse**


## postAnalyticsSurveysAggregatesJobs

> AsyncQueryResponse postAnalyticsSurveysAggregatesJobs(body, opts)


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
let opts = { 
  'customHeaders': {  // Object.<string, string> | Request Custom Headers
    'X-Service-Name': 'customer-service',
    'X-Request-ID': 'req-12345'
  }
};

apiInstance.postAnalyticsSurveysAggregatesJobs(body, opts)
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
 **customHeaders** | **Object.<string, string>** | Request Custom Headers | [optional] |

### Return type

**AsyncQueryResponse**


## postAnalyticsSurveysAggregatesQuery

> SurveyAggregateQueryResponse postAnalyticsSurveysAggregatesQuery(body, opts)


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
let opts = { 
  'customHeaders': {  // Object.<string, string> | Request Custom Headers
    'X-Service-Name': 'customer-service',
    'X-Request-ID': 'req-12345'
  }
};

apiInstance.postAnalyticsSurveysAggregatesQuery(body, opts)
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
 **customHeaders** | **Object.<string, string>** | Request Custom Headers | [optional] |

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
  'expand': "expand_example", // String | calibratorId
  'customHeaders': {  // Object.<string, string> | Request Custom Headers
    'X-Service-Name': 'customer-service',
    'X-Request-ID': 'req-12345'
  }
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
 **customHeaders** | **Object.<string, string>** | Request Custom Headers | [optional] |

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
  'idempotencyKey': "idempotencyKey_example", // String | Idempotency key for request deduplication
  'expand': "expand_example", // String | evaluatorId
  'customHeaders': {  // Object.<string, string> | Request Custom Headers
    'X-Service-Name': 'customer-service',
    'X-Request-ID': 'req-12345'
  }
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
 **idempotencyKey** | **String** | Idempotency key for request deduplication | [optional]  |
 **expand** | **String** | evaluatorId | [optional]  |
 **customHeaders** | **Object.<string, string>** | Request Custom Headers | [optional] |

### Return type

**Evaluation**


## postQualityConversationsAuditsQuery

> QualityAuditQueryExecutionStatusResponse postQualityConversationsAuditsQuery(body, opts)


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
let opts = { 
  'customHeaders': {  // Object.<string, string> | Request Custom Headers
    'X-Service-Name': 'customer-service',
    'X-Request-ID': 'req-12345'
  }
};

apiInstance.postQualityConversationsAuditsQuery(body, opts)
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
 **customHeaders** | **Object.<string, string>** | Request Custom Headers | [optional] |

### Return type

**QualityAuditQueryExecutionStatusResponse**


## postQualityEvaluationsAggregatesQueryMe

> EvaluationAggregateQueryResponse postQualityEvaluationsAggregatesQueryMe(body, opts)


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
let opts = { 
  'customHeaders': {  // Object.<string, string> | Request Custom Headers
    'X-Service-Name': 'customer-service',
    'X-Request-ID': 'req-12345'
  }
};

apiInstance.postQualityEvaluationsAggregatesQueryMe(body, opts)
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
 **customHeaders** | **Object.<string, string>** | Request Custom Headers | [optional] |

### Return type

**EvaluationAggregateQueryResponse**


## postQualityEvaluationsScoring

> EvaluationScoringSet postQualityEvaluationsScoring(body, opts)


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
let opts = { 
  'customHeaders': {  // Object.<string, string> | Request Custom Headers
    'X-Service-Name': 'customer-service',
    'X-Request-ID': 'req-12345'
  }
};

apiInstance.postQualityEvaluationsScoring(body, opts)
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
 **customHeaders** | **Object.<string, string>** | Request Custom Headers | [optional] |

### Return type

**EvaluationScoringSet**


## postQualityEvaluationsSearch

> EvaluationSearchResponse postQualityEvaluationsSearch(body, opts)


POST /api/v2/quality/evaluations/search

Search evaluations based along specified criteria

Search Rules: 1. Time Range    - Time Range: Max 3 months (required) 2. Question Group Level Query: Use at least one field containing questionGroup in name + exactly one questionGroupId 3. Question Level Query: Use at least one field containing question in name + exactly one questionId 4. Mixed Queries: questionId alone is sufficient 5. Search Logic:    - Multiple criteria: AND operation    - Multiple values per criterion: OR operation    EXAMPLE: (agentId₁ OR agentId₂) AND (evaluatorId₁ OR evaluatorId₂) 5. Aggregations:    - Omit or set pageSize = 0    - Choose: multiple aggregations OR single aggregation with multiple sub-aggregations    - To aggregate against question fields, one must query by either a questionId OR a single top level TERM questionId aggregation AND query by a single formID or questionGroupId, or list of questionIds    - To aggregate against question group fields, one must query either a questionId/questionGroupId OR a single top level TERM questionGroupId aggregation AND query by a single formID or list of questionGroupIds 

Requires ANY permissions:

* quality:evaluation:searchAny

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.QualityApi();

let body = {}; // Object | Evaluation search request
let opts = { 
  'customHeaders': {  // Object.<string, string> | Request Custom Headers
    'X-Service-Name': 'customer-service',
    'X-Request-ID': 'req-12345'
  }
};

apiInstance.postQualityEvaluationsSearch(body, opts)
  .then((data) => {
    console.log(`postQualityEvaluationsSearch success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling postQualityEvaluationsSearch');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **body** | **Object** | Evaluation search request |  |
 **customHeaders** | **Object.<string, string>** | Request Custom Headers | [optional] |

### Return type

**EvaluationSearchResponse**


## postQualityForms

> EvaluationFormResponse postQualityForms(body, opts)

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
let opts = { 
  'customHeaders': {  // Object.<string, string> | Request Custom Headers
    'X-Service-Name': 'customer-service',
    'X-Request-ID': 'req-12345'
  }
};

apiInstance.postQualityForms(body, opts)
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
 **customHeaders** | **Object.<string, string>** | Request Custom Headers | [optional] |

### Return type

**EvaluationFormResponse**


## postQualityFormsEvaluations

> EvaluationFormResponse postQualityFormsEvaluations(body, opts)


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
let opts = { 
  'customHeaders': {  // Object.<string, string> | Request Custom Headers
    'X-Service-Name': 'customer-service',
    'X-Request-ID': 'req-12345'
  }
};

apiInstance.postQualityFormsEvaluations(body, opts)
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
 **customHeaders** | **Object.<string, string>** | Request Custom Headers | [optional] |

### Return type

**EvaluationFormResponse**


## postQualityFormsSurveys

> SurveyForm postQualityFormsSurveys(body, opts)


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
let opts = { 
  'customHeaders': {  // Object.<string, string> | Request Custom Headers
    'X-Service-Name': 'customer-service',
    'X-Request-ID': 'req-12345'
  }
};

apiInstance.postQualityFormsSurveys(body, opts)
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
 **customHeaders** | **Object.<string, string>** | Request Custom Headers | [optional] |

### Return type

**SurveyForm**


## postQualityProgramAgentscoringrules

> AgentScoringRule postQualityProgramAgentscoringrules(programId, body, opts)


POST /api/v2/quality/programs/{programId}/agentscoringrules

Create an Agent Scoring Rule

Creates a new Agent Scoring Rule for AI-powered automated evaluation of agent interactions. The rule defines how interactions should be selected and evaluated using the specified evaluation form.

Requires ANY permissions:

* quality:scoringRule:add

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.QualityApi();

let programId = "programId_example"; // String | Program ID from Speech and Text Analytics
let body = {}; // Object | Agent Scoring Rule
let opts = { 
  'customHeaders': {  // Object.<string, string> | Request Custom Headers
    'X-Service-Name': 'customer-service',
    'X-Request-ID': 'req-12345'
  }
};

apiInstance.postQualityProgramAgentscoringrules(programId, body, opts)
  .then((data) => {
    console.log(`postQualityProgramAgentscoringrules success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling postQualityProgramAgentscoringrules');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **programId** | **String** | Program ID from Speech and Text Analytics |  |
 **body** | **Object** | Agent Scoring Rule |  |
 **customHeaders** | **Object.<string, string>** | Request Custom Headers | [optional] |

### Return type

**AgentScoringRule**


## postQualityPublishedforms

> EvaluationFormResponse postQualityPublishedforms(body, opts)

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
let opts = { 
  'customHeaders': {  // Object.<string, string> | Request Custom Headers
    'X-Service-Name': 'customer-service',
    'X-Request-ID': 'req-12345'
  }
};

apiInstance.postQualityPublishedforms(body, opts)
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
 **customHeaders** | **Object.<string, string>** | Request Custom Headers | [optional] |

### Return type

**EvaluationFormResponse**


## postQualityPublishedformsEvaluations

> EvaluationFormResponse postQualityPublishedformsEvaluations(body, opts)


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
let opts = { 
  'customHeaders': {  // Object.<string, string> | Request Custom Headers
    'X-Service-Name': 'customer-service',
    'X-Request-ID': 'req-12345'
  }
};

apiInstance.postQualityPublishedformsEvaluations(body, opts)
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
 **customHeaders** | **Object.<string, string>** | Request Custom Headers | [optional] |

### Return type

**EvaluationFormResponse**


## postQualityPublishedformsSurveys

> SurveyForm postQualityPublishedformsSurveys(body, opts)


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
let opts = { 
  'customHeaders': {  // Object.<string, string> | Request Custom Headers
    'X-Service-Name': 'customer-service',
    'X-Request-ID': 'req-12345'
  }
};

apiInstance.postQualityPublishedformsSurveys(body, opts)
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
 **customHeaders** | **Object.<string, string>** | Request Custom Headers | [optional] |

### Return type

**SurveyForm**


## postQualitySurveys

> CreateSurveyResponse postQualitySurveys(body, opts)


POST /api/v2/quality/surveys

Create a survey for a conversation

Requires ANY permissions:

* quality:survey:add

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.QualityApi();

let body = {}; // Object | Survey creation request
let opts = { 
  'customHeaders': {  // Object.<string, string> | Request Custom Headers
    'X-Service-Name': 'customer-service',
    'X-Request-ID': 'req-12345'
  }
};

apiInstance.postQualitySurveys(body, opts)
  .then((data) => {
    console.log(`postQualitySurveys success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling postQualitySurveys');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **body** | **Object** | Survey creation request |  |
 **customHeaders** | **Object.<string, string>** | Request Custom Headers | [optional] |

### Return type

**CreateSurveyResponse**


## postQualitySurveysScoring

> SurveyScoringSet postQualitySurveysScoring(body, opts)


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
let opts = { 
  'customHeaders': {  // Object.<string, string> | Request Custom Headers
    'X-Service-Name': 'customer-service',
    'X-Request-ID': 'req-12345'
  }
};

apiInstance.postQualitySurveysScoring(body, opts)
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
 **customHeaders** | **Object.<string, string>** | Request Custom Headers | [optional] |

### Return type

**SurveyScoringSet**


## putQualityCalibration

> Calibration putQualityCalibration(calibrationId, body, opts)


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
let opts = { 
  'customHeaders': {  // Object.<string, string> | Request Custom Headers
    'X-Service-Name': 'customer-service',
    'X-Request-ID': 'req-12345'
  }
};

apiInstance.putQualityCalibration(calibrationId, body, opts)
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
 **customHeaders** | **Object.<string, string>** | Request Custom Headers | [optional] |

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
  'expand': "expand_example", // String | evaluatorId, evaluationForm, assignee, evaluator
  'customHeaders': {  // Object.<string, string> | Request Custom Headers
    'X-Service-Name': 'customer-service',
    'X-Request-ID': 'req-12345'
  }
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
 **customHeaders** | **Object.<string, string>** | Request Custom Headers | [optional] |

### Return type

**EvaluationResponse**


## putQualityForm

> EvaluationFormResponse putQualityForm(formId, body, opts)

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
let opts = { 
  'customHeaders': {  // Object.<string, string> | Request Custom Headers
    'X-Service-Name': 'customer-service',
    'X-Request-ID': 'req-12345'
  }
};

apiInstance.putQualityForm(formId, body, opts)
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
 **customHeaders** | **Object.<string, string>** | Request Custom Headers | [optional] |

### Return type

**EvaluationFormResponse**


## putQualityFormsEvaluation

> EvaluationFormResponse putQualityFormsEvaluation(formId, body, opts)


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
let opts = { 
  'customHeaders': {  // Object.<string, string> | Request Custom Headers
    'X-Service-Name': 'customer-service',
    'X-Request-ID': 'req-12345'
  }
};

apiInstance.putQualityFormsEvaluation(formId, body, opts)
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
 **customHeaders** | **Object.<string, string>** | Request Custom Headers | [optional] |

### Return type

**EvaluationFormResponse**


## putQualityFormsEvaluationAiscoringSettings

> AiScoringSettings putQualityFormsEvaluationAiscoringSettings(formId, body, opts)


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
let opts = { 
  'customHeaders': {  // Object.<string, string> | Request Custom Headers
    'X-Service-Name': 'customer-service',
    'X-Request-ID': 'req-12345'
  }
};

apiInstance.putQualityFormsEvaluationAiscoringSettings(formId, body, opts)
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
 **customHeaders** | **Object.<string, string>** | Request Custom Headers | [optional] |

### Return type

**AiScoringSettings**


## putQualityFormsSurvey

> SurveyForm putQualityFormsSurvey(formId, body, opts)


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
let opts = { 
  'customHeaders': {  // Object.<string, string> | Request Custom Headers
    'X-Service-Name': 'customer-service',
    'X-Request-ID': 'req-12345'
  }
};

apiInstance.putQualityFormsSurvey(formId, body, opts)
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
 **customHeaders** | **Object.<string, string>** | Request Custom Headers | [optional] |

### Return type

**SurveyForm**


## putQualityProgramAgentscoringrule

> AgentScoringRule putQualityProgramAgentscoringrule(programId, ruleId, body, opts)


PUT /api/v2/quality/programs/{programId}/agentscoringrules/{ruleId}

Update an Agent Scoring Rule

Requires ANY permissions:

* quality:scoringRule:edit

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.QualityApi();

let programId = "programId_example"; // String | Program ID from Speech and Text Analytics
let ruleId = "ruleId_example"; // String | Agent Scoring Rule ID
let body = {}; // Object | Agent Scoring Rule
let opts = { 
  'customHeaders': {  // Object.<string, string> | Request Custom Headers
    'X-Service-Name': 'customer-service',
    'X-Request-ID': 'req-12345'
  }
};

apiInstance.putQualityProgramAgentscoringrule(programId, ruleId, body, opts)
  .then((data) => {
    console.log(`putQualityProgramAgentscoringrule success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling putQualityProgramAgentscoringrule');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **programId** | **String** | Program ID from Speech and Text Analytics |  |
 **ruleId** | **String** | Agent Scoring Rule ID |  |
 **body** | **Object** | Agent Scoring Rule |  |
 **customHeaders** | **Object.<string, string>** | Request Custom Headers | [optional] |

### Return type

**AgentScoringRule**


## putQualitySurveysScorable

> ScorableSurvey putQualitySurveysScorable(customerSurveyUrl, body, opts)


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
let opts = { 
  'customHeaders': {  // Object.<string, string> | Request Custom Headers
    'X-Service-Name': 'customer-service',
    'X-Request-ID': 'req-12345'
  }
};

apiInstance.putQualitySurveysScorable(customerSurveyUrl, body, opts)
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
 **customHeaders** | **Object.<string, string>** | Request Custom Headers | [optional] |

### Return type

**ScorableSurvey**


_purecloud-platform-client-v2@253.0.0_
