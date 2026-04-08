# LearningApi

# platformClient.LearningApi

All URIs are relative to *https://api.mypurecloud.com*

| Method | HTTP request | Description |
| ------------- | ------------- | ------------- |
[**deleteLearningAssignment**](LearningApi#deleteLearningAssignment) | **DELETE** /api/v2/learning/assignments/{assignmentId} | Delete a learning assignment
[**deleteLearningModule**](LearningApi#deleteLearningModule) | **DELETE** /api/v2/learning/modules/{moduleId} | Delete a learning module
[**getLearningAssignment**](LearningApi#getLearningAssignment) | **GET** /api/v2/learning/assignments/{assignmentId} | Get Learning Assignment
[**getLearningAssignmentStep**](LearningApi#getLearningAssignmentStep) | **GET** /api/v2/learning/assignments/{assignmentId}/steps/{stepId} | Get Learning Assignment Step
[**getLearningAssignments**](LearningApi#getLearningAssignments) | **GET** /api/v2/learning/assignments | List of Learning module Assignments
[**getLearningAssignmentsMe**](LearningApi#getLearningAssignmentsMe) | **GET** /api/v2/learning/assignments/me | List of Learning Assignments assigned to current user
[**getLearningModule**](LearningApi#getLearningModule) | **GET** /api/v2/learning/modules/{moduleId} | Get a learning module
[**getLearningModuleJob**](LearningApi#getLearningModuleJob) | **GET** /api/v2/learning/modules/{moduleId}/jobs/{jobId} | Get a specific Learning Module job status
[**getLearningModulePreview**](LearningApi#getLearningModulePreview) | **GET** /api/v2/learning/modules/{moduleId}/preview | Get a learning module preview
[**getLearningModuleRule**](LearningApi#getLearningModuleRule) | **GET** /api/v2/learning/modules/{moduleId}/rule | Get a learning module rule
[**getLearningModuleVersion**](LearningApi#getLearningModuleVersion) | **GET** /api/v2/learning/modules/{moduleId}/versions/{versionId} | Get specific version of a published module
[**getLearningModules**](LearningApi#getLearningModules) | **GET** /api/v2/learning/modules | Get all learning modules of an organization
[**getLearningModulesAssignments**](LearningApi#getLearningModulesAssignments) | **GET** /api/v2/learning/modules/assignments | Get all learning modules of an organization including assignments for a specific user
[**getLearningModulesCoverartCoverArtId**](LearningApi#getLearningModulesCoverartCoverArtId) | **GET** /api/v2/learning/modules/coverart/{coverArtId} | Get a specific Learning Module cover art using ID
[**getLearningScheduleslotsJob**](LearningApi#getLearningScheduleslotsJob) | **GET** /api/v2/learning/scheduleslots/jobs/{jobId} | Retrieve the status of the job for the slots where a learning activity can be scheduled.
[**getLearningScormScormId**](LearningApi#getLearningScormScormId) | **GET** /api/v2/learning/scorm/{scormId} | Get Learning SCORM Result
[**patchLearningAssignment**](LearningApi#patchLearningAssignment) | **PATCH** /api/v2/learning/assignments/{assignmentId} | Update Learning Assignment
[**patchLearningAssignmentReschedule**](LearningApi#patchLearningAssignmentReschedule) | **PATCH** /api/v2/learning/assignments/{assignmentId}/reschedule | Reschedule Learning Assignment
[**patchLearningAssignmentStep**](LearningApi#patchLearningAssignmentStep) | **PATCH** /api/v2/learning/assignments/{assignmentId}/steps/{stepId} | Update Learning Assignment Step
[**patchLearningModuleUserAssignments**](LearningApi#patchLearningModuleUserAssignments) | **PATCH** /api/v2/learning/modules/{moduleId}/users/{userId}/assignments | Update an external assignment for a specific user
[**postLearningAssessmentsScoring**](LearningApi#postLearningAssessmentsScoring) | **POST** /api/v2/learning/assessments/scoring | Score learning assessment for preview
[**postLearningAssignmentReassign**](LearningApi#postLearningAssignmentReassign) | **POST** /api/v2/learning/assignments/{assignmentId}/reassign | Reassign Learning Assignment
[**postLearningAssignmentReset**](LearningApi#postLearningAssignmentReset) | **POST** /api/v2/learning/assignments/{assignmentId}/reset | Reset Learning Assignment
[**postLearningAssignments**](LearningApi#postLearningAssignments) | **POST** /api/v2/learning/assignments | Create Learning Assignment
[**postLearningAssignmentsAggregatesQuery**](LearningApi#postLearningAssignmentsAggregatesQuery) | **POST** /api/v2/learning/assignments/aggregates/query | Retrieve aggregated assignment data
[**postLearningAssignmentsBulkadd**](LearningApi#postLearningAssignmentsBulkadd) | **POST** /api/v2/learning/assignments/bulkadd | Add multiple learning assignments
[**postLearningAssignmentsBulkremove**](LearningApi#postLearningAssignmentsBulkremove) | **POST** /api/v2/learning/assignments/bulkremove | Remove multiple Learning Assignments
[**postLearningModuleJobs**](LearningApi#postLearningModuleJobs) | **POST** /api/v2/learning/modules/{moduleId}/jobs | Starts a specified operation on learning module
[**postLearningModulePublish**](LearningApi#postLearningModulePublish) | **POST** /api/v2/learning/modules/{moduleId}/publish | Publish a Learning module
[**postLearningModuleRuleMigrate**](LearningApi#postLearningModuleRuleMigrate) | **POST** /api/v2/learning/modules/{moduleId}/rule/migrate | Migrate a legacy learning module rule to a users rule.
[**postLearningModules**](LearningApi#postLearningModules) | **POST** /api/v2/learning/modules | Create a new learning module
[**postLearningRulesQuery**](LearningApi#postLearningRulesQuery) | **POST** /api/v2/learning/rules/query | Get users for learning module rule
[**postLearningScheduleslotsJobs**](LearningApi#postLearningScheduleslotsJobs) | **POST** /api/v2/learning/scheduleslots/jobs | Start job to retrieve slots where a learning activity can be scheduled.
[**postLearningScheduleslotsQuery**](LearningApi#postLearningScheduleslotsQuery) | **POST** /api/v2/learning/scheduleslots/query | Get list of possible slots where a learning activity can be scheduled.
[**postLearningScorm**](LearningApi#postLearningScorm) | **POST** /api/v2/learning/scorm | Create a SCORM package upload request
[**putLearningModule**](LearningApi#putLearningModule) | **PUT** /api/v2/learning/modules/{moduleId} | Update a learning module
[**putLearningModulePreview**](LearningApi#putLearningModulePreview) | **PUT** /api/v2/learning/modules/{moduleId}/preview | Update a learning module preview
[**putLearningModuleRule**](LearningApi#putLearningModuleRule) | **PUT** /api/v2/learning/modules/{moduleId}/rule | Update a learning module rule



## deleteLearningAssignment

> void deleteLearningAssignment(assignmentId, opts)


DELETE /api/v2/learning/assignments/{assignmentId}

Delete a learning assignment

Requires ANY permissions:

* learning:assignment:delete

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.LearningApi();

let assignmentId = "assignmentId_example"; // String | The Learning Assignment ID
let opts = { 
  'customHeaders': {  // Object.<string, string> | Request Custom Headers
    'X-Service-Name': 'customer-service',
    'X-Request-ID': 'req-12345'
  }
};

apiInstance.deleteLearningAssignment(assignmentId, opts)
  .then(() => {
    console.log('deleteLearningAssignment returned successfully.');
  })
  .catch((err) => {
    console.log('There was a failure calling deleteLearningAssignment');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **assignmentId** | **String** | The Learning Assignment ID |  |
 **customHeaders** | **Object.<string, string>** | Request Custom Headers | [optional] |

### Return type

void (no response body)


## deleteLearningModule

> void deleteLearningModule(moduleId, opts)


DELETE /api/v2/learning/modules/{moduleId}

Delete a learning module

This will delete a learning module if it is unpublished or it will delete a published and archived learning module

Requires ANY permissions:

* learning:module:delete

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.LearningApi();

let moduleId = "moduleId_example"; // String | The ID of the learning module
let opts = { 
  'customHeaders': {  // Object.<string, string> | Request Custom Headers
    'X-Service-Name': 'customer-service',
    'X-Request-ID': 'req-12345'
  }
};

apiInstance.deleteLearningModule(moduleId, opts)
  .then(() => {
    console.log('deleteLearningModule returned successfully.');
  })
  .catch((err) => {
    console.log('There was a failure calling deleteLearningModule');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **moduleId** | **String** | The ID of the learning module |  |
 **customHeaders** | **Object.<string, string>** | Request Custom Headers | [optional] |

### Return type

void (no response body)


## getLearningAssignment

> LearningAssignment getLearningAssignment(assignmentId, opts)


GET /api/v2/learning/assignments/{assignmentId}

Get Learning Assignment

Permission not required if you are the assigned user of the learning assignment

Requires ANY permissions:

* learning:assignment:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.LearningApi();

let assignmentId = "assignmentId_example"; // String | The ID of Learning Assignment
let opts = { 
  'expand': ["expand_example"], // [String] | Fields to expand in response
  'customHeaders': {  // Object.<string, string> | Request Custom Headers
    'X-Service-Name': 'customer-service',
    'X-Request-ID': 'req-12345'
  }
};

apiInstance.getLearningAssignment(assignmentId, opts)
  .then((data) => {
    console.log(`getLearningAssignment success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getLearningAssignment');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **assignmentId** | **String** | The ID of Learning Assignment |  |
 **expand** | **[String]** | Fields to expand in response | [optional] <br />**Values**: module, assessment, assessmentForm, module.coverArt, step, step.moduleStep |
 **customHeaders** | **Object.<string, string>** | Request Custom Headers | [optional] |

### Return type

**LearningAssignment**


## getLearningAssignmentStep

> LearningAssignmentStep getLearningAssignmentStep(assignmentId, stepId, opts)


GET /api/v2/learning/assignments/{assignmentId}/steps/{stepId}

Get Learning Assignment Step

Permission not required if you are the assigned user of the learning assignment

Requires ANY permissions:

* learning:assignment:viewOwn

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.LearningApi();

let assignmentId = "assignmentId_example"; // String | The ID of Learning Assignment
let stepId = "stepId_example"; // String | The ID of Learning Assignment Step
let opts = { 
  'shareableContentObjectId': "shareableContentObjectId_example", // String | The ID of SCO to load
  'defaultShareableContentObject': "defaultShareableContentObject_example", // String | The default SCO to retrieve
  'expand': ["expand_example"], // [String] | Fields to expand in response
  'customHeaders': {  // Object.<string, string> | Request Custom Headers
    'X-Service-Name': 'customer-service',
    'X-Request-ID': 'req-12345'
  }
};

apiInstance.getLearningAssignmentStep(assignmentId, stepId, opts)
  .then((data) => {
    console.log(`getLearningAssignmentStep success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getLearningAssignmentStep');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **assignmentId** | **String** | The ID of Learning Assignment |  |
 **stepId** | **String** | The ID of Learning Assignment Step |  |
 **shareableContentObjectId** | **String** | The ID of SCO to load | [optional]  |
 **defaultShareableContentObject** | **String** | The default SCO to retrieve | [optional] <br />**Values**: First, Last, Next |
 **expand** | **[String]** | Fields to expand in response | [optional] <br />**Values**: moduleStep |
 **customHeaders** | **Object.<string, string>** | Request Custom Headers | [optional] |

### Return type

**LearningAssignmentStep**


## getLearningAssignments

> LearningAssignmentsDomainEntity getLearningAssignments(opts)


GET /api/v2/learning/assignments

List of Learning module Assignments

Either moduleId or user value is required

Requires ANY permissions:

* learning:assignment:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.LearningApi();

let opts = { 
  'moduleId': "moduleId_example", // String | Specifies the ID of the learning module. Fetch assignments for learning module ID
  'interval': "interval_example", // String | Specifies the range of dueDates to be queried. Milliseconds will be truncated. A maximum of 1 year can be specified in the range. End date is not inclusive. Intervals are represented as an ISO-8601 string. For example: YYYY-MM-DDThh:mm:ss/YYYY-MM-DDThh:mm:ss
  'completionInterval': "completionInterval_example", // String | Specifies the range of completion dates to be used for filtering. A maximum of 1 year can be specified in the range. End date is not inclusive. Intervals are represented as an ISO-8601 string. For example: YYYY-MM-DDThh:mm:ss/YYYY-MM-DDThh:mm:ss
  'overdue': "Any", // String | Specifies if only the non-overdue (overdue is False) or overdue (overdue is True) assignments are returned. If overdue is Any or if the overdue parameter is not supplied, all assignments are returned
  'pageSize': 25, // Number | Page size
  'pageNumber': 1, // Number | Page number
  'pass': "Any", // String | Specifies if only the failed (pass is False) or passed (pass is True) assignments (completed with assessment)are returned. If pass is Any or if the pass parameter is not supplied, all assignments are returned
  'minPercentageScore': 3.4, // Number | The minimum assessment score for an assignment (completed with assessment) to be included in the results (inclusive)
  'maxPercentageScore': 3.4, // Number | The maximum assessment score for an assignment (completed with assessment) to be included in the results (inclusive)
  'sortOrder': "Desc", // String | Specifies result set sort order; if not specified, default sort order is descending (Desc)
  'sortBy': "sortBy_example", // String | Specifies which field to sort the results by, default sort is by recommendedCompletionDate
  'userId': ["userId_example"], // [String] | Specifies the list of user IDs to be queried, up to 100 user IDs.
  'types': ["types_example"], // [String] | Specifies the module types to filter by. Informational, AssessedContent and Assessment are deprecated
  'states': ["states_example"], // [String] | Specifies the assignment states to filter by
  'expand': ["expand_example"], // [String] | Specifies the expand option for returning additional information
  'customHeaders': {  // Object.<string, string> | Request Custom Headers
    'X-Service-Name': 'customer-service',
    'X-Request-ID': 'req-12345'
  }
};

apiInstance.getLearningAssignments(opts)
  .then((data) => {
    console.log(`getLearningAssignments success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getLearningAssignments');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **moduleId** | **String** | Specifies the ID of the learning module. Fetch assignments for learning module ID | [optional]  |
 **interval** | **String** | Specifies the range of dueDates to be queried. Milliseconds will be truncated. A maximum of 1 year can be specified in the range. End date is not inclusive. Intervals are represented as an ISO-8601 string. For example: YYYY-MM-DDThh:mm:ss/YYYY-MM-DDThh:mm:ss | [optional]  |
 **completionInterval** | **String** | Specifies the range of completion dates to be used for filtering. A maximum of 1 year can be specified in the range. End date is not inclusive. Intervals are represented as an ISO-8601 string. For example: YYYY-MM-DDThh:mm:ss/YYYY-MM-DDThh:mm:ss | [optional]  |
 **overdue** | **String** | Specifies if only the non-overdue (overdue is False) or overdue (overdue is True) assignments are returned. If overdue is Any or if the overdue parameter is not supplied, all assignments are returned | [optional] [default to Any]<br />**Values**: True, False, Any |
 **pageSize** | **Number** | Page size | [optional] [default to 25] |
 **pageNumber** | **Number** | Page number | [optional] [default to 1] |
 **pass** | **String** | Specifies if only the failed (pass is False) or passed (pass is True) assignments (completed with assessment)are returned. If pass is Any or if the pass parameter is not supplied, all assignments are returned | [optional] [default to Any]<br />**Values**: True, False, Any |
 **minPercentageScore** | **Number** | The minimum assessment score for an assignment (completed with assessment) to be included in the results (inclusive) | [optional]  |
 **maxPercentageScore** | **Number** | The maximum assessment score for an assignment (completed with assessment) to be included in the results (inclusive) | [optional]  |
 **sortOrder** | **String** | Specifies result set sort order; if not specified, default sort order is descending (Desc) | [optional] [default to Desc]<br />**Values**: Asc, Desc |
 **sortBy** | **String** | Specifies which field to sort the results by, default sort is by recommendedCompletionDate | [optional] <br />**Values**: RecommendedCompletionDate, DateModified |
 **userId** | **[String]** | Specifies the list of user IDs to be queried, up to 100 user IDs. | [optional]  |
 **types** | **[String]** | Specifies the module types to filter by. Informational, AssessedContent and Assessment are deprecated | [optional] <br />**Values**: Informational, AssessedContent, Assessment, External, Native |
 **states** | **[String]** | Specifies the assignment states to filter by | [optional] <br />**Values**: Assigned, InProgress, Completed, NotCompleted, InvalidSchedule |
 **expand** | **[String]** | Specifies the expand option for returning additional information | [optional] <br />**Values**: ModuleSummary |
 **customHeaders** | **Object.<string, string>** | Request Custom Headers | [optional] |

### Return type

**LearningAssignmentsDomainEntity**


## getLearningAssignmentsMe

> LearningAssignmentsDomainEntity getLearningAssignmentsMe(opts)


GET /api/v2/learning/assignments/me

List of Learning Assignments assigned to current user

Requires NO permissions:

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.LearningApi();

let opts = { 
  'moduleId': "moduleId_example", // String | Specifies the ID of the learning module. Fetch assignments for learning module ID
  'interval': "interval_example", // String | Specifies the range of dueDates to be queried. Milliseconds will be truncated. A maximum of 1 year can be specified in the range. End date is not inclusive. Intervals are represented as an ISO-8601 string. For example: YYYY-MM-DDThh:mm:ss/YYYY-MM-DDThh:mm:ss
  'completionInterval': "completionInterval_example", // String | Specifies the range of completion dates to be used for filtering. A maximum of 1 year can be specified in the range. End date is not inclusive. Intervals are represented as an ISO-8601 string. For example: YYYY-MM-DDThh:mm:ss/YYYY-MM-DDThh:mm:ss
  'overdue': "Any", // String | Specifies if only the non-overdue (overdue is False) or overdue (overdue is True) assignments are returned. If overdue is Any or if the overdue parameter is not supplied, all assignments are returned
  'pageSize': 25, // Number | Page size
  'pageNumber': 1, // Number | Page number
  'pass': "Any", // String | Specifies if only the failed (pass is False) or passed (pass is True) assignments (completed with assessment)are returned. If pass is Any or if the pass parameter is not supplied, all assignments are returned
  'minPercentageScore': 3.4, // Number | The minimum assessment score for an assignment (completed with assessment) to be included in the results (inclusive)
  'maxPercentageScore': 3.4, // Number | The maximum assessment score for an assignment (completed with assessment) to be included in the results (inclusive)
  'sortOrder': "Desc", // String | Specifies result set sort order; if not specified, default sort order is descending (Desc)
  'sortBy': "sortBy_example", // String | Specifies which field to sort the results by, default sort is by recommendedCompletionDate
  'types': ["types_example"], // [String] | Specifies the module types to filter by. Informational, AssessedContent and Assessment are deprecated
  'states': ["states_example"], // [String] | Specifies the assignment states to filter by
  'expand': ["expand_example"], // [String] | Specifies the expand option for returning additional information
  'customHeaders': {  // Object.<string, string> | Request Custom Headers
    'X-Service-Name': 'customer-service',
    'X-Request-ID': 'req-12345'
  }
};

apiInstance.getLearningAssignmentsMe(opts)
  .then((data) => {
    console.log(`getLearningAssignmentsMe success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getLearningAssignmentsMe');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **moduleId** | **String** | Specifies the ID of the learning module. Fetch assignments for learning module ID | [optional]  |
 **interval** | **String** | Specifies the range of dueDates to be queried. Milliseconds will be truncated. A maximum of 1 year can be specified in the range. End date is not inclusive. Intervals are represented as an ISO-8601 string. For example: YYYY-MM-DDThh:mm:ss/YYYY-MM-DDThh:mm:ss | [optional]  |
 **completionInterval** | **String** | Specifies the range of completion dates to be used for filtering. A maximum of 1 year can be specified in the range. End date is not inclusive. Intervals are represented as an ISO-8601 string. For example: YYYY-MM-DDThh:mm:ss/YYYY-MM-DDThh:mm:ss | [optional]  |
 **overdue** | **String** | Specifies if only the non-overdue (overdue is False) or overdue (overdue is True) assignments are returned. If overdue is Any or if the overdue parameter is not supplied, all assignments are returned | [optional] [default to Any]<br />**Values**: True, False, Any |
 **pageSize** | **Number** | Page size | [optional] [default to 25] |
 **pageNumber** | **Number** | Page number | [optional] [default to 1] |
 **pass** | **String** | Specifies if only the failed (pass is False) or passed (pass is True) assignments (completed with assessment)are returned. If pass is Any or if the pass parameter is not supplied, all assignments are returned | [optional] [default to Any]<br />**Values**: True, False, Any |
 **minPercentageScore** | **Number** | The minimum assessment score for an assignment (completed with assessment) to be included in the results (inclusive) | [optional]  |
 **maxPercentageScore** | **Number** | The maximum assessment score for an assignment (completed with assessment) to be included in the results (inclusive) | [optional]  |
 **sortOrder** | **String** | Specifies result set sort order; if not specified, default sort order is descending (Desc) | [optional] [default to Desc]<br />**Values**: Asc, Desc |
 **sortBy** | **String** | Specifies which field to sort the results by, default sort is by recommendedCompletionDate | [optional] <br />**Values**: RecommendedCompletionDate, DateModified |
 **types** | **[String]** | Specifies the module types to filter by. Informational, AssessedContent and Assessment are deprecated | [optional] <br />**Values**: Informational, AssessedContent, Assessment, External, Native |
 **states** | **[String]** | Specifies the assignment states to filter by | [optional] <br />**Values**: Assigned, InProgress, Completed, NotCompleted, InvalidSchedule |
 **expand** | **[String]** | Specifies the expand option for returning additional information | [optional] <br />**Values**: ModuleSummary |
 **customHeaders** | **Object.<string, string>** | Request Custom Headers | [optional] |

### Return type

**LearningAssignmentsDomainEntity**


## getLearningModule

> LearningModule getLearningModule(moduleId, opts)


GET /api/v2/learning/modules/{moduleId}

Get a learning module

Requires ANY permissions:

* learning:module:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.LearningApi();

let moduleId = "moduleId_example"; // String | The ID of the learning module
let opts = { 
  'expand': ["expand_example"], // [String] | Fields to expand in response(case insensitive)
  'customHeaders': {  // Object.<string, string> | Request Custom Headers
    'X-Service-Name': 'customer-service',
    'X-Request-ID': 'req-12345'
  }
};

apiInstance.getLearningModule(moduleId, opts)
  .then((data) => {
    console.log(`getLearningModule success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getLearningModule');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **moduleId** | **String** | The ID of the learning module |  |
 **expand** | **[String]** | Fields to expand in response(case insensitive) | [optional] <br />**Values**: assessmentForm, coverArt |
 **customHeaders** | **Object.<string, string>** | Request Custom Headers | [optional] |

### Return type

**LearningModule**


## getLearningModuleJob

> LearningModuleJobResponse getLearningModuleJob(moduleId, jobId, opts)


GET /api/v2/learning/modules/{moduleId}/jobs/{jobId}

Get a specific Learning Module job status

Requires ANY permissions:

* learning:module:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.LearningApi();

let moduleId = "moduleId_example"; // String | The ID of the learning module
let jobId = "jobId_example"; // String | The ID of the learning module job
let opts = { 
  'customHeaders': {  // Object.<string, string> | Request Custom Headers
    'X-Service-Name': 'customer-service',
    'X-Request-ID': 'req-12345'
  }
};

apiInstance.getLearningModuleJob(moduleId, jobId, opts)
  .then((data) => {
    console.log(`getLearningModuleJob success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getLearningModuleJob');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **moduleId** | **String** | The ID of the learning module |  |
 **jobId** | **String** | The ID of the learning module job |  |
 **customHeaders** | **Object.<string, string>** | Request Custom Headers | [optional] |

### Return type

**LearningModuleJobResponse**


## getLearningModulePreview

> LearningModulePreviewGetResponse getLearningModulePreview(moduleId, opts)


GET /api/v2/learning/modules/{moduleId}/preview

Get a learning module preview

Requires ANY permissions:

* learning:module:preview

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.LearningApi();

let moduleId = "moduleId_example"; // String | The ID of the learning module
let opts = { 
  'customHeaders': {  // Object.<string, string> | Request Custom Headers
    'X-Service-Name': 'customer-service',
    'X-Request-ID': 'req-12345'
  }
};

apiInstance.getLearningModulePreview(moduleId, opts)
  .then((data) => {
    console.log(`getLearningModulePreview success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getLearningModulePreview');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **moduleId** | **String** | The ID of the learning module |  |
 **customHeaders** | **Object.<string, string>** | Request Custom Headers | [optional] |

### Return type

**LearningModulePreviewGetResponse**


## getLearningModuleRule

> LearningModuleRule getLearningModuleRule(moduleId, opts)


GET /api/v2/learning/modules/{moduleId}/rule

Get a learning module rule

Requires ANY permissions:

* learning:rule:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.LearningApi();

let moduleId = "moduleId_example"; // String | The ID of the learning module
let opts = { 
  'customHeaders': {  // Object.<string, string> | Request Custom Headers
    'X-Service-Name': 'customer-service',
    'X-Request-ID': 'req-12345'
  }
};

apiInstance.getLearningModuleRule(moduleId, opts)
  .then((data) => {
    console.log(`getLearningModuleRule success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getLearningModuleRule');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **moduleId** | **String** | The ID of the learning module |  |
 **customHeaders** | **Object.<string, string>** | Request Custom Headers | [optional] |

### Return type

**LearningModuleRule**


## getLearningModuleVersion

> LearningModule getLearningModuleVersion(moduleId, versionId, opts)


GET /api/v2/learning/modules/{moduleId}/versions/{versionId}

Get specific version of a published module

Requires ANY permissions:

* learning:module:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.LearningApi();

let moduleId = "moduleId_example"; // String | The ID of the learning module
let versionId = "versionId_example"; // String | The version of learning module
let opts = { 
  'expand': ["expand_example"], // [String] | Fields to expand in response(case insensitive)
  'customHeaders': {  // Object.<string, string> | Request Custom Headers
    'X-Service-Name': 'customer-service',
    'X-Request-ID': 'req-12345'
  }
};

apiInstance.getLearningModuleVersion(moduleId, versionId, opts)
  .then((data) => {
    console.log(`getLearningModuleVersion success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getLearningModuleVersion');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **moduleId** | **String** | The ID of the learning module |  |
 **versionId** | **String** | The version of learning module |  |
 **expand** | **[String]** | Fields to expand in response(case insensitive) | [optional] <br />**Values**: assessmentForm, coverArt |
 **customHeaders** | **Object.<string, string>** | Request Custom Headers | [optional] |

### Return type

**LearningModule**


## getLearningModules

> LearningModuleList getLearningModules(opts)


GET /api/v2/learning/modules

Get all learning modules of an organization

Requires ANY permissions:

* learning:module:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.LearningApi();

let opts = { 
  'isArchived': false, // Boolean | Archive status
  'types': ["types_example"], // [String] | Specifies the module types. Informational, AssessedContent and Assessment are deprecated
  'pageSize': 25, // Number | Page size
  'pageNumber': 1, // Number | Page number
  'sortOrder': "ascending", // String | Sort order
  'sortBy': "name", // String | Sort by
  'searchTerm': "searchTerm_example", // String | Search Term (searchable by name)
  'expand': ["expand_example"], // [String] | Fields to expand in response(case insensitive)
  'isPublished': "Any", // String | Specifies if only the Unpublished (isPublished is False) or Published (isPublished is True) modules are returned. If isPublished is Any or omitted, both types are returned
  'statuses': ["statuses_example"], // [String] | Specifies the module statuses to filter by
  'externalIds': ["externalIds_example"], // [String] | Specifies the module external IDs to filter by. Only one ID is allowed
  'customHeaders': {  // Object.<string, string> | Request Custom Headers
    'X-Service-Name': 'customer-service',
    'X-Request-ID': 'req-12345'
  }
};

apiInstance.getLearningModules(opts)
  .then((data) => {
    console.log(`getLearningModules success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getLearningModules');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **isArchived** | **Boolean** | Archive status | [optional] [default to false] |
 **types** | **[String]** | Specifies the module types. Informational, AssessedContent and Assessment are deprecated | [optional] <br />**Values**: Informational, AssessedContent, Assessment, External, Native |
 **pageSize** | **Number** | Page size | [optional] [default to 25] |
 **pageNumber** | **Number** | Page number | [optional] [default to 1] |
 **sortOrder** | **String** | Sort order | [optional] [default to ascending]<br />**Values**: ascending, descending |
 **sortBy** | **String** | Sort by | [optional] [default to name]<br />**Values**: name, createddate, percentpassed, averagescore |
 **searchTerm** | **String** | Search Term (searchable by name) | [optional]  |
 **expand** | **[String]** | Fields to expand in response(case insensitive) | [optional] <br />**Values**: rule, summaryData |
 **isPublished** | **String** | Specifies if only the Unpublished (isPublished is False) or Published (isPublished is True) modules are returned. If isPublished is Any or omitted, both types are returned | [optional] [default to Any]<br />**Values**: True, False, Any |
 **statuses** | **[String]** | Specifies the module statuses to filter by | [optional] <br />**Values**: Unpublished, Published, Archived |
 **externalIds** | **[String]** | Specifies the module external IDs to filter by. Only one ID is allowed | [optional]  |
 **customHeaders** | **Object.<string, string>** | Request Custom Headers | [optional] |

### Return type

**LearningModuleList**


## getLearningModulesAssignments

> AssignedLearningModuleDomainEntityListing getLearningModulesAssignments(userIds, opts)


GET /api/v2/learning/modules/assignments

Get all learning modules of an organization including assignments for a specific user

Requires ALL permissions:

* learning:module:view
* learning:assignment:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.LearningApi();

let userIds = ["userIds_example"]; // [String] | The IDs of the users to include
let opts = { 
  'pageSize': 25, // Number | Page size
  'pageNumber': 1, // Number | Page number
  'searchTerm': "searchTerm_example", // String | Search Term (searches by name and description)
  'overdue': "Any", // String | Specifies if only modules with overdue/not overdue (overdue is True or False) assignments are returned. If overdue is Any or omitted, both are returned and can including modules that are unassigned.
  'assignmentStates': ["assignmentStates_example"], // [String] | Specifies the assignment states to return.
  'expand': ["expand_example"], // [String] | Fields to expand in response(case insensitive)
  'customHeaders': {  // Object.<string, string> | Request Custom Headers
    'X-Service-Name': 'customer-service',
    'X-Request-ID': 'req-12345'
  }
};

apiInstance.getLearningModulesAssignments(userIds, opts)
  .then((data) => {
    console.log(`getLearningModulesAssignments success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getLearningModulesAssignments');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **userIds** | **[String]** | The IDs of the users to include |  |
 **pageSize** | **Number** | Page size | [optional] [default to 25] |
 **pageNumber** | **Number** | Page number | [optional] [default to 1] |
 **searchTerm** | **String** | Search Term (searches by name and description) | [optional]  |
 **overdue** | **String** | Specifies if only modules with overdue/not overdue (overdue is True or False) assignments are returned. If overdue is Any or omitted, both are returned and can including modules that are unassigned. | [optional] [default to Any]<br />**Values**: True, False, Any |
 **assignmentStates** | **[String]** | Specifies the assignment states to return. | [optional] <br />**Values**: NotAssigned, Assigned, InProgress, Completed, InvalidSchedule |
 **expand** | **[String]** | Fields to expand in response(case insensitive) | [optional] <br />**Values**: coverArt |
 **customHeaders** | **Object.<string, string>** | Request Custom Headers | [optional] |

### Return type

**AssignedLearningModuleDomainEntityListing**


## getLearningModulesCoverartCoverArtId

> LearningModuleCoverArtResponse getLearningModulesCoverartCoverArtId(coverArtId, opts)


GET /api/v2/learning/modules/coverart/{coverArtId}

Get a specific Learning Module cover art using ID

Requires ANY permissions:

* learning:coverart:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.LearningApi();

let coverArtId = "coverArtId_example"; // String | Key identifier for the cover art
let opts = { 
  'customHeaders': {  // Object.<string, string> | Request Custom Headers
    'X-Service-Name': 'customer-service',
    'X-Request-ID': 'req-12345'
  }
};

apiInstance.getLearningModulesCoverartCoverArtId(coverArtId, opts)
  .then((data) => {
    console.log(`getLearningModulesCoverartCoverArtId success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getLearningModulesCoverartCoverArtId');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **coverArtId** | **String** | Key identifier for the cover art |  |
 **customHeaders** | **Object.<string, string>** | Request Custom Headers | [optional] |

### Return type

**LearningModuleCoverArtResponse**


## getLearningScheduleslotsJob

> LearningScheduleSlotsJobResponse getLearningScheduleslotsJob(jobId, opts)


GET /api/v2/learning/scheduleslots/jobs/{jobId}

Retrieve the status of the job for the slots where a learning activity can be scheduled.

Requires ANY permissions:

* learning:scheduleSlotJob:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.LearningApi();

let jobId = "jobId_example"; // String | The ID of the job
let opts = { 
  'customHeaders': {  // Object.<string, string> | Request Custom Headers
    'X-Service-Name': 'customer-service',
    'X-Request-ID': 'req-12345'
  }
};

apiInstance.getLearningScheduleslotsJob(jobId, opts)
  .then((data) => {
    console.log(`getLearningScheduleslotsJob success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getLearningScheduleslotsJob');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **jobId** | **String** | The ID of the job |  |
 **customHeaders** | **Object.<string, string>** | Request Custom Headers | [optional] |

### Return type

**LearningScheduleSlotsJobResponse**


## getLearningScormScormId

> LearningScormResponse getLearningScormScormId(scormId, opts)


GET /api/v2/learning/scorm/{scormId}

Get Learning SCORM Result

Requires ANY permissions:

* learning:scorm:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.LearningApi();

let scormId = "scormId_example"; // String | The ID of the SCORM package
let opts = { 
  'customHeaders': {  // Object.<string, string> | Request Custom Headers
    'X-Service-Name': 'customer-service',
    'X-Request-ID': 'req-12345'
  }
};

apiInstance.getLearningScormScormId(scormId, opts)
  .then((data) => {
    console.log(`getLearningScormScormId success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getLearningScormScormId');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **scormId** | **String** | The ID of the SCORM package |  |
 **customHeaders** | **Object.<string, string>** | Request Custom Headers | [optional] |

### Return type

**LearningScormResponse**


## patchLearningAssignment

> LearningAssignment patchLearningAssignment(assignmentId, opts)


PATCH /api/v2/learning/assignments/{assignmentId}

Update Learning Assignment

Requires NO permissions:

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.LearningApi();

let assignmentId = "assignmentId_example"; // String | The ID of Learning Assignment
let opts = { 
  'body': {}, // Object | The Learning Assignment to be updated
  'customHeaders': {  // Object.<string, string> | Request Custom Headers
    'X-Service-Name': 'customer-service',
    'X-Request-ID': 'req-12345'
  }
};

apiInstance.patchLearningAssignment(assignmentId, opts)
  .then((data) => {
    console.log(`patchLearningAssignment success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling patchLearningAssignment');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **assignmentId** | **String** | The ID of Learning Assignment |  |
 **body** | **Object** | The Learning Assignment to be updated | [optional]  |
 **customHeaders** | **Object.<string, string>** | Request Custom Headers | [optional] |

### Return type

**LearningAssignment**


## patchLearningAssignmentReschedule

> LearningAssignment patchLearningAssignmentReschedule(assignmentId, opts)


PATCH /api/v2/learning/assignments/{assignmentId}/reschedule

Reschedule Learning Assignment

Requires ANY permissions:

* learning:assignment:reschedule

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.LearningApi();

let assignmentId = "assignmentId_example"; // String | The ID of Learning Assignment
let opts = { 
  'body': {}, // Object | The Learning assignment reschedule model
  'customHeaders': {  // Object.<string, string> | Request Custom Headers
    'X-Service-Name': 'customer-service',
    'X-Request-ID': 'req-12345'
  }
};

apiInstance.patchLearningAssignmentReschedule(assignmentId, opts)
  .then((data) => {
    console.log(`patchLearningAssignmentReschedule success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling patchLearningAssignmentReschedule');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **assignmentId** | **String** | The ID of Learning Assignment |  |
 **body** | **Object** | The Learning assignment reschedule model | [optional]  |
 **customHeaders** | **Object.<string, string>** | Request Custom Headers | [optional] |

### Return type

**LearningAssignment**


## patchLearningAssignmentStep

> LearningAssignmentStep patchLearningAssignmentStep(assignmentId, stepId, opts)


PATCH /api/v2/learning/assignments/{assignmentId}/steps/{stepId}

Update Learning Assignment Step

Permission not required if you are the assigned user of the learning assignment

Requires ANY permissions:

* learning:assignment:editOwn

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.LearningApi();

let assignmentId = "assignmentId_example"; // String | The ID of Learning Assignment
let stepId = "stepId_example"; // String | The ID of Learning Assignment Step
let opts = { 
  'body': {}, // Object | The Learning Assignment Step to be updated
  'customHeaders': {  // Object.<string, string> | Request Custom Headers
    'X-Service-Name': 'customer-service',
    'X-Request-ID': 'req-12345'
  }
};

apiInstance.patchLearningAssignmentStep(assignmentId, stepId, opts)
  .then((data) => {
    console.log(`patchLearningAssignmentStep success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling patchLearningAssignmentStep');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **assignmentId** | **String** | The ID of Learning Assignment |  |
 **stepId** | **String** | The ID of Learning Assignment Step |  |
 **body** | **Object** | The Learning Assignment Step to be updated | [optional]  |
 **customHeaders** | **Object.<string, string>** | Request Custom Headers | [optional] |

### Return type

**LearningAssignmentStep**


## patchLearningModuleUserAssignments

> LearningAssignment patchLearningModuleUserAssignments(moduleId, userId, body, opts)


PATCH /api/v2/learning/modules/{moduleId}/users/{userId}/assignments

Update an external assignment for a specific user

Requires ALL permissions:

* learning:externalAssignment:edit

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.LearningApi();

let moduleId = "moduleId_example"; // String | Key identifier for the module
let userId = "userId_example"; // String | Key identifier for the user
let body = {}; // Object | The learning request for updating the assignment
let opts = { 
  'customHeaders': {  // Object.<string, string> | Request Custom Headers
    'X-Service-Name': 'customer-service',
    'X-Request-ID': 'req-12345'
  }
};

apiInstance.patchLearningModuleUserAssignments(moduleId, userId, body, opts)
  .then((data) => {
    console.log(`patchLearningModuleUserAssignments success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling patchLearningModuleUserAssignments');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **moduleId** | **String** | Key identifier for the module |  |
 **userId** | **String** | Key identifier for the user |  |
 **body** | **Object** | The learning request for updating the assignment |  |
 **customHeaders** | **Object.<string, string>** | Request Custom Headers | [optional] |

### Return type

**LearningAssignment**


## postLearningAssessmentsScoring

> AssessmentScoringSet postLearningAssessmentsScoring(body, opts)


POST /api/v2/learning/assessments/scoring

Score learning assessment for preview

Requires ANY permissions:

* learning:module:view
* learning:module:add
* learning:module:edit

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.LearningApi();

let body = {}; // Object | Assessment form and answers to score
let opts = { 
  'customHeaders': {  // Object.<string, string> | Request Custom Headers
    'X-Service-Name': 'customer-service',
    'X-Request-ID': 'req-12345'
  }
};

apiInstance.postLearningAssessmentsScoring(body, opts)
  .then((data) => {
    console.log(`postLearningAssessmentsScoring success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling postLearningAssessmentsScoring');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **body** | **Object** | Assessment form and answers to score |  |
 **customHeaders** | **Object.<string, string>** | Request Custom Headers | [optional] |

### Return type

**AssessmentScoringSet**


## postLearningAssignmentReassign

> LearningAssignment postLearningAssignmentReassign(assignmentId, opts)


POST /api/v2/learning/assignments/{assignmentId}/reassign

Reassign Learning Assignment

This will reassign the state of the assignment to Assigned and update the assignment to the latest version of the module

Requires ANY permissions:

* learning:assignment:add

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.LearningApi();

let assignmentId = "assignmentId_example"; // String | The Learning Assignment ID
let opts = { 
  'customHeaders': {  // Object.<string, string> | Request Custom Headers
    'X-Service-Name': 'customer-service',
    'X-Request-ID': 'req-12345'
  }
};

apiInstance.postLearningAssignmentReassign(assignmentId, opts)
  .then((data) => {
    console.log(`postLearningAssignmentReassign success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling postLearningAssignmentReassign');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **assignmentId** | **String** | The Learning Assignment ID |  |
 **customHeaders** | **Object.<string, string>** | Request Custom Headers | [optional] |

### Return type

**LearningAssignment**


## postLearningAssignmentReset

> LearningAssignment postLearningAssignmentReset(assignmentId, opts)


POST /api/v2/learning/assignments/{assignmentId}/reset

Reset Learning Assignment

This will reset the state of the assignment to Assigned and remove the version of Learning module associated with the assignment

Requires ANY permissions:

* learning:assignment:reset

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.LearningApi();

let assignmentId = "assignmentId_example"; // String | The Learning Assignment ID
let opts = { 
  'customHeaders': {  // Object.<string, string> | Request Custom Headers
    'X-Service-Name': 'customer-service',
    'X-Request-ID': 'req-12345'
  }
};

apiInstance.postLearningAssignmentReset(assignmentId, opts)
  .then((data) => {
    console.log(`postLearningAssignmentReset success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling postLearningAssignmentReset');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **assignmentId** | **String** | The Learning Assignment ID |  |
 **customHeaders** | **Object.<string, string>** | Request Custom Headers | [optional] |

### Return type

**LearningAssignment**


## postLearningAssignments

> LearningAssignment postLearningAssignments(opts)


POST /api/v2/learning/assignments

Create Learning Assignment

Requires ANY permissions:

* learning:assignment:add

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.LearningApi();

let opts = { 
  'body': {}, // Object | The Learning Assignment to be created
  'customHeaders': {  // Object.<string, string> | Request Custom Headers
    'X-Service-Name': 'customer-service',
    'X-Request-ID': 'req-12345'
  }
};

apiInstance.postLearningAssignments(opts)
  .then((data) => {
    console.log(`postLearningAssignments success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling postLearningAssignments');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **body** | **Object** | The Learning Assignment to be created | [optional]  |
 **customHeaders** | **Object.<string, string>** | Request Custom Headers | [optional] |

### Return type

**LearningAssignment**


## postLearningAssignmentsAggregatesQuery

> LearningAssignmentAggregateResponse postLearningAssignmentsAggregatesQuery(body, opts)


POST /api/v2/learning/assignments/aggregates/query

Retrieve aggregated assignment data

Requires ANY permissions:

* learning:assignment:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.LearningApi();

let body = {}; // Object | Aggregate Request
let opts = { 
  'customHeaders': {  // Object.<string, string> | Request Custom Headers
    'X-Service-Name': 'customer-service',
    'X-Request-ID': 'req-12345'
  }
};

apiInstance.postLearningAssignmentsAggregatesQuery(body, opts)
  .then((data) => {
    console.log(`postLearningAssignmentsAggregatesQuery success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling postLearningAssignmentsAggregatesQuery');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **body** | **Object** | Aggregate Request |  |
 **customHeaders** | **Object.<string, string>** | Request Custom Headers | [optional] |

### Return type

**LearningAssignmentAggregateResponse**


## postLearningAssignmentsBulkadd

> LearningAssignmentBulkAddResponse postLearningAssignmentsBulkadd(opts)


POST /api/v2/learning/assignments/bulkadd

Add multiple learning assignments

Requires ANY permissions:

* learning:assignment:add

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.LearningApi();

let opts = { 
  'body': [{}], // Object | The learning assignments to be created
  'customHeaders': {  // Object.<string, string> | Request Custom Headers
    'X-Service-Name': 'customer-service',
    'X-Request-ID': 'req-12345'
  }
};

apiInstance.postLearningAssignmentsBulkadd(opts)
  .then((data) => {
    console.log(`postLearningAssignmentsBulkadd success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling postLearningAssignmentsBulkadd');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **body** | **Object** | The learning assignments to be created | [optional]  |
 **customHeaders** | **Object.<string, string>** | Request Custom Headers | [optional] |

### Return type

**LearningAssignmentBulkAddResponse**


## postLearningAssignmentsBulkremove

> LearningAssignmentBulkRemoveResponse postLearningAssignmentsBulkremove(opts)


POST /api/v2/learning/assignments/bulkremove

Remove multiple Learning Assignments

Requires ANY permissions:

* learning:assignment:delete

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.LearningApi();

let opts = { 
  'body': ["body_example"], // [String] | The IDs of the learning assignments to be removed
  'customHeaders': {  // Object.<string, string> | Request Custom Headers
    'X-Service-Name': 'customer-service',
    'X-Request-ID': 'req-12345'
  }
};

apiInstance.postLearningAssignmentsBulkremove(opts)
  .then((data) => {
    console.log(`postLearningAssignmentsBulkremove success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling postLearningAssignmentsBulkremove');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **body** | **[String]** | The IDs of the learning assignments to be removed | [optional]  |
 **customHeaders** | **Object.<string, string>** | Request Custom Headers | [optional] |

### Return type

**LearningAssignmentBulkRemoveResponse**


## postLearningModuleJobs

> LearningModuleJobResponse postLearningModuleJobs(moduleId, body, opts)


POST /api/v2/learning/modules/{moduleId}/jobs

Starts a specified operation on learning module

This will initiate operation specified in the request body for a learning module

Requires ANY permissions:

* learning:module:add

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.LearningApi();

let moduleId = "moduleId_example"; // String | The ID of the learning module
let body = {}; // Object | The learning module job request
let opts = { 
  'customHeaders': {  // Object.<string, string> | Request Custom Headers
    'X-Service-Name': 'customer-service',
    'X-Request-ID': 'req-12345'
  }
};

apiInstance.postLearningModuleJobs(moduleId, body, opts)
  .then((data) => {
    console.log(`postLearningModuleJobs success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling postLearningModuleJobs');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **moduleId** | **String** | The ID of the learning module |  |
 **body** | **Object** | The learning module job request |  |
 **customHeaders** | **Object.<string, string>** | Request Custom Headers | [optional] |

### Return type

**LearningModuleJobResponse**


## postLearningModulePublish

> LearningModulePublishResponse postLearningModulePublish(moduleId, opts)


POST /api/v2/learning/modules/{moduleId}/publish

Publish a Learning module

Requires ANY permissions:

* learning:module:publish

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.LearningApi();

let moduleId = "moduleId_example"; // String | The ID of the learning module
let opts = { 
  'body': {}, // Object | The request body
  'customHeaders': {  // Object.<string, string> | Request Custom Headers
    'X-Service-Name': 'customer-service',
    'X-Request-ID': 'req-12345'
  }
};

apiInstance.postLearningModulePublish(moduleId, opts)
  .then((data) => {
    console.log(`postLearningModulePublish success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling postLearningModulePublish');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **moduleId** | **String** | The ID of the learning module |  |
 **body** | **Object** | The request body | [optional]  |
 **customHeaders** | **Object.<string, string>** | Request Custom Headers | [optional] |

### Return type

**LearningModulePublishResponse**


## postLearningModuleRuleMigrate

> LearningModuleMigrateResponse postLearningModuleRuleMigrate(moduleId, opts)


POST /api/v2/learning/modules/{moduleId}/rule/migrate

Migrate a legacy learning module rule to a users rule.

postLearningModuleRuleMigrate is a preview method and is subject to both breaking and non-breaking changes at any time without notice

Requires ANY permissions:

* learning:module:edit

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.LearningApi();

let moduleId = "moduleId_example"; // String | The ID of the learning module
let opts = { 
  'customHeaders': {  // Object.<string, string> | Request Custom Headers
    'X-Service-Name': 'customer-service',
    'X-Request-ID': 'req-12345'
  }
};

apiInstance.postLearningModuleRuleMigrate(moduleId, opts)
  .then((data) => {
    console.log(`postLearningModuleRuleMigrate success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling postLearningModuleRuleMigrate');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **moduleId** | **String** | The ID of the learning module |  |
 **customHeaders** | **Object.<string, string>** | Request Custom Headers | [optional] |

### Return type

**LearningModuleMigrateResponse**


## postLearningModules

> LearningModule postLearningModules(body, opts)


POST /api/v2/learning/modules

Create a new learning module

This will create a new unpublished learning module with the specified fields.

Requires ANY permissions:

* learning:module:add

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.LearningApi();

let body = {}; // Object | The learning module to be created
let opts = { 
  'customHeaders': {  // Object.<string, string> | Request Custom Headers
    'X-Service-Name': 'customer-service',
    'X-Request-ID': 'req-12345'
  }
};

apiInstance.postLearningModules(body, opts)
  .then((data) => {
    console.log(`postLearningModules success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling postLearningModules');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **body** | **Object** | The learning module to be created |  |
 **customHeaders** | **Object.<string, string>** | Request Custom Headers | [optional] |

### Return type

**LearningModule**


## postLearningRulesQuery

> LearningAssignmentUserListing postLearningRulesQuery(pageSize, pageNumber, body, opts)


POST /api/v2/learning/rules/query

Get users for learning module rule

This will get the users who matches the given rule.

Requires ANY permissions:

* learning:rule:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.LearningApi();

let pageSize = 50; // Number | Page size
let pageNumber = 1; // Number | Page number
let body = {}; // Object | The learning module rule to fetch users
let opts = { 
  'customHeaders': {  // Object.<string, string> | Request Custom Headers
    'X-Service-Name': 'customer-service',
    'X-Request-ID': 'req-12345'
  }
};

apiInstance.postLearningRulesQuery(pageSize, pageNumber, body, opts)
  .then((data) => {
    console.log(`postLearningRulesQuery success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling postLearningRulesQuery');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **pageSize** | **Number** | Page size | [default to 50] |
 **pageNumber** | **Number** | Page number | [default to 1] |
 **body** | **Object** | The learning module rule to fetch users |  |
 **customHeaders** | **Object.<string, string>** | Request Custom Headers | [optional] |

### Return type

**LearningAssignmentUserListing**


## postLearningScheduleslotsJobs

> LearningScheduleSlotsJobResponse postLearningScheduleslotsJobs(body, opts)


POST /api/v2/learning/scheduleslots/jobs

Start job to retrieve slots where a learning activity can be scheduled.

Requires ANY permissions:

* learning:scheduleSlotJob:add

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.LearningApi();

let body = {}; // Object | The slots search request
let opts = { 
  'customHeaders': {  // Object.<string, string> | Request Custom Headers
    'X-Service-Name': 'customer-service',
    'X-Request-ID': 'req-12345'
  }
};

apiInstance.postLearningScheduleslotsJobs(body, opts)
  .then((data) => {
    console.log(`postLearningScheduleslotsJobs success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling postLearningScheduleslotsJobs');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **body** | **Object** | The slots search request |  |
 **customHeaders** | **Object.<string, string>** | Request Custom Headers | [optional] |

### Return type

**LearningScheduleSlotsJobResponse**


## postLearningScheduleslotsQuery

> LearningScheduleSlotsQueryResponse postLearningScheduleslotsQuery(body, opts)


POST /api/v2/learning/scheduleslots/query

Get list of possible slots where a learning activity can be scheduled.

Requires ANY permissions:

* learning:scheduleSlot:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.LearningApi();

let body = {}; // Object | The slot search request
let opts = { 
  'customHeaders': {  // Object.<string, string> | Request Custom Headers
    'X-Service-Name': 'customer-service',
    'X-Request-ID': 'req-12345'
  }
};

apiInstance.postLearningScheduleslotsQuery(body, opts)
  .then((data) => {
    console.log(`postLearningScheduleslotsQuery success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling postLearningScheduleslotsQuery');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **body** | **Object** | The slot search request |  |
 **customHeaders** | **Object.<string, string>** | Request Custom Headers | [optional] |

### Return type

**LearningScheduleSlotsQueryResponse**


## postLearningScorm

> LearningScormUploadResponse postLearningScorm(opts)


POST /api/v2/learning/scorm

Create a SCORM package upload request

Requires ANY permissions:

* learning:scorm:add

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.LearningApi();

let opts = { 
  'body': {}, // Object | The SCORM package to be uploaded
  'customHeaders': {  // Object.<string, string> | Request Custom Headers
    'X-Service-Name': 'customer-service',
    'X-Request-ID': 'req-12345'
  }
};

apiInstance.postLearningScorm(opts)
  .then((data) => {
    console.log(`postLearningScorm success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling postLearningScorm');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **body** | **Object** | The SCORM package to be uploaded | [optional]  |
 **customHeaders** | **Object.<string, string>** | Request Custom Headers | [optional] |

### Return type

**LearningScormUploadResponse**


## putLearningModule

> LearningModule putLearningModule(moduleId, body, opts)


PUT /api/v2/learning/modules/{moduleId}

Update a learning module

This will update the name, description, completion time in days and inform steps for a learning module

Requires ANY permissions:

* learning:module:edit

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.LearningApi();

let moduleId = "moduleId_example"; // String | The ID of the learning module
let body = {}; // Object | The learning module to be updated
let opts = { 
  'customHeaders': {  // Object.<string, string> | Request Custom Headers
    'X-Service-Name': 'customer-service',
    'X-Request-ID': 'req-12345'
  }
};

apiInstance.putLearningModule(moduleId, body, opts)
  .then((data) => {
    console.log(`putLearningModule success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling putLearningModule');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **moduleId** | **String** | The ID of the learning module |  |
 **body** | **Object** | The learning module to be updated |  |
 **customHeaders** | **Object.<string, string>** | Request Custom Headers | [optional] |

### Return type

**LearningModule**


## putLearningModulePreview

> LearningModulePreviewUpdateResponse putLearningModulePreview(moduleId, body, opts)


PUT /api/v2/learning/modules/{moduleId}/preview

Update a learning module preview

This will update a learning module preview

Requires ANY permissions:

* learning:module:preview

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.LearningApi();

let moduleId = "moduleId_example"; // String | The ID of the learning module
let body = {}; // Object | The learning module to be updated
let opts = { 
  'customHeaders': {  // Object.<string, string> | Request Custom Headers
    'X-Service-Name': 'customer-service',
    'X-Request-ID': 'req-12345'
  }
};

apiInstance.putLearningModulePreview(moduleId, body, opts)
  .then((data) => {
    console.log(`putLearningModulePreview success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling putLearningModulePreview');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **moduleId** | **String** | The ID of the learning module |  |
 **body** | **Object** | The learning module to be updated |  |
 **customHeaders** | **Object.<string, string>** | Request Custom Headers | [optional] |

### Return type

**LearningModulePreviewUpdateResponse**


## putLearningModuleRule

> LearningModuleRule putLearningModuleRule(moduleId, body, opts)


PUT /api/v2/learning/modules/{moduleId}/rule

Update a learning module rule

This will update a learning module rule with the specified fields.

Requires ANY permissions:

* learning:rule:edit

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.LearningApi();

let moduleId = "moduleId_example"; // String | The ID of the learning module
let body = {}; // Object | The learning module rule to be updated
let opts = { 
  'assign': true, // Boolean | Whether to assign the module to users or not
  'customHeaders': {  // Object.<string, string> | Request Custom Headers
    'X-Service-Name': 'customer-service',
    'X-Request-ID': 'req-12345'
  }
};

apiInstance.putLearningModuleRule(moduleId, body, opts)
  .then((data) => {
    console.log(`putLearningModuleRule success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling putLearningModuleRule');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **moduleId** | **String** | The ID of the learning module |  |
 **body** | **Object** | The learning module rule to be updated |  |
 **assign** | **Boolean** | Whether to assign the module to users or not | [optional] [default to true] |
 **customHeaders** | **Object.<string, string>** | Request Custom Headers | [optional] |

### Return type

**LearningModuleRule**


_purecloud-platform-client-v2@250.1.0_
