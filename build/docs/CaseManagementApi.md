# CaseManagementApi

# platformClient.CaseManagementApi

All URIs are relative to *https://api.mypurecloud.com*

| Method | HTTP request | Description |
| ------------- | ------------- | ------------- |
[**deleteCasemanagementCase**](CaseManagementApi#deleteCasemanagementCase) | **DELETE** /api/v2/casemanagement/cases/{caseId} | Delete a Case.
[**deleteCasemanagementCaseCommentsMeCommentId**](CaseManagementApi#deleteCasemanagementCaseCommentsMeCommentId) | **DELETE** /api/v2/casemanagement/cases/{caseId}/comments/me/{commentId} | Delete my Comment.
[**deleteCasemanagementCaseplan**](CaseManagementApi#deleteCasemanagementCaseplan) | **DELETE** /api/v2/casemanagement/caseplans/{caseplanId} | Delete a Caseplan.
[**deleteCasemanagementCaseplanDataschema**](CaseManagementApi#deleteCasemanagementCaseplanDataschema) | **DELETE** /api/v2/casemanagement/caseplans/{caseplanId}/dataschemas/{schemaKeyName} | Remove a data schema from a draft Caseplan.
[**getCasemanagementCase**](CaseManagementApi#getCasemanagementCase) | **GET** /api/v2/casemanagement/cases/{caseId} | Get a Case.
[**getCasemanagementCaseAssociation**](CaseManagementApi#getCasemanagementCaseAssociation) | **GET** /api/v2/casemanagement/cases/{caseId}/associations/{associationId} | Get a Case Association.
[**getCasemanagementCaseAssociations**](CaseManagementApi#getCasemanagementCaseAssociations) | **GET** /api/v2/casemanagement/cases/{caseId}/associations | Get a list of Case associations for the Case.
[**getCasemanagementCaseComment**](CaseManagementApi#getCasemanagementCaseComment) | **GET** /api/v2/casemanagement/cases/{caseId}/comments/{commentId} | Get a Comment.
[**getCasemanagementCaseComments**](CaseManagementApi#getCasemanagementCaseComments) | **GET** /api/v2/casemanagement/cases/{caseId}/comments | Get comments for a Case.
[**getCasemanagementCaseStage**](CaseManagementApi#getCasemanagementCaseStage) | **GET** /api/v2/casemanagement/cases/{caseId}/stages/{stageId} | Get a Stage.
[**getCasemanagementCaseStageStep**](CaseManagementApi#getCasemanagementCaseStageStep) | **GET** /api/v2/casemanagement/cases/{caseId}/stages/{stageId}/steps/{stepId} | Get a Step.
[**getCasemanagementCaseStageSteps**](CaseManagementApi#getCasemanagementCaseStageSteps) | **GET** /api/v2/casemanagement/cases/{caseId}/stages/{stageId}/steps | Get a list of Steps.
[**getCasemanagementCaseStages**](CaseManagementApi#getCasemanagementCaseStages) | **GET** /api/v2/casemanagement/cases/{caseId}/stages | Get a list of Stages.
[**getCasemanagementCaseTerminateJob**](CaseManagementApi#getCasemanagementCaseTerminateJob) | **GET** /api/v2/casemanagement/cases/{caseId}/terminate/jobs/{jobId} | Get a Terminate Job for a Case.
[**getCasemanagementCaseplan**](CaseManagementApi#getCasemanagementCaseplan) | **GET** /api/v2/casemanagement/caseplans/{caseplanId} | Get a Caseplan.
[**getCasemanagementCaseplanVersion**](CaseManagementApi#getCasemanagementCaseplanVersion) | **GET** /api/v2/casemanagement/caseplans/{caseplanId}/versions/{versionId} | Get a Caseplan version.
[**getCasemanagementCaseplanVersionDataschemas**](CaseManagementApi#getCasemanagementCaseplanVersionDataschemas) | **GET** /api/v2/casemanagement/caseplans/{caseplanId}/versions/{versionId}/dataschemas | Get the data schemas for a Caseplan version.
[**getCasemanagementCaseplanVersionIntakesettings**](CaseManagementApi#getCasemanagementCaseplanVersionIntakesettings) | **GET** /api/v2/casemanagement/caseplans/{caseplanId}/versions/{versionId}/intakesettings | Get the intake settings for a Caseplan version.
[**getCasemanagementCaseplanVersionStageplan**](CaseManagementApi#getCasemanagementCaseplanVersionStageplan) | **GET** /api/v2/casemanagement/caseplans/{caseplanId}/versions/{versionId}/stageplans/{stageplanId} | Get a Stageplan.
[**getCasemanagementCaseplanVersionStageplanStepplan**](CaseManagementApi#getCasemanagementCaseplanVersionStageplanStepplan) | **GET** /api/v2/casemanagement/caseplans/{caseplanId}/versions/{versionId}/stageplans/{stageplanId}/stepplans/{stepplanId} | Get a Stepplan.
[**getCasemanagementCaseplanVersionStageplanStepplans**](CaseManagementApi#getCasemanagementCaseplanVersionStageplanStepplans) | **GET** /api/v2/casemanagement/caseplans/{caseplanId}/versions/{versionId}/stageplans/{stageplanId}/stepplans | Get a list of Stepplans.
[**getCasemanagementCaseplanVersionStageplans**](CaseManagementApi#getCasemanagementCaseplanVersionStageplans) | **GET** /api/v2/casemanagement/caseplans/{caseplanId}/versions/{versionId}/stageplans | Get a list of Stageplans.
[**getCasemanagementCaseplans**](CaseManagementApi#getCasemanagementCaseplans) | **GET** /api/v2/casemanagement/caseplans | Get a list of Caseplans.
[**getCasemanagementCasesExternalcontact**](CaseManagementApi#getCasemanagementCasesExternalcontact) | **GET** /api/v2/casemanagement/cases/externalcontacts/{externalContactId} | Get a list of Cases for an External Contact.
[**getCasemanagementCasesReference**](CaseManagementApi#getCasemanagementCasesReference) | **GET** /api/v2/casemanagement/cases/references/{referenceId} | Get a Case by reference.
[**patchCasemanagementCaseDatedue**](CaseManagementApi#patchCasemanagementCaseDatedue) | **PATCH** /api/v2/casemanagement/cases/{caseId}/datedue | Update the due date of a Case.
[**patchCasemanagementCasePriority**](CaseManagementApi#patchCasemanagementCasePriority) | **PATCH** /api/v2/casemanagement/cases/{caseId}/priority | Update priority of a Case.
[**patchCasemanagementCaseSummary**](CaseManagementApi#patchCasemanagementCaseSummary) | **PATCH** /api/v2/casemanagement/cases/{caseId}/summary | Update summary of a Case.
[**patchCasemanagementCaseplan**](CaseManagementApi#patchCasemanagementCaseplan) | **PATCH** /api/v2/casemanagement/caseplans/{caseplanId} | Update the attributes of a Caseplan.
[**patchCasemanagementCaseplanStageplan**](CaseManagementApi#patchCasemanagementCaseplanStageplan) | **PATCH** /api/v2/casemanagement/caseplans/{caseplanId}/stageplans/{stageplanId} | Update the attributes of a Stageplan.
[**patchCasemanagementCaseplanStageplanStepplan**](CaseManagementApi#patchCasemanagementCaseplanStageplanStepplan) | **PATCH** /api/v2/casemanagement/caseplans/{caseplanId}/stageplans/{stageplanId}/stepplans/{stepplanId} | Update the attributes of a Stepplan.
[**postCasemanagementCaseAssociations**](CaseManagementApi#postCasemanagementCaseAssociations) | **POST** /api/v2/casemanagement/cases/{caseId}/associations | Create a Case association.
[**postCasemanagementCaseComments**](CaseManagementApi#postCasemanagementCaseComments) | **POST** /api/v2/casemanagement/cases/{caseId}/comments | Add a comment to a Case.
[**postCasemanagementCaseTerminateJobs**](CaseManagementApi#postCasemanagementCaseTerminateJobs) | **POST** /api/v2/casemanagement/cases/{caseId}/terminate/jobs | Create a Terminate Job for a Case.
[**postCasemanagementCaseplanDataschemas**](CaseManagementApi#postCasemanagementCaseplanDataschemas) | **POST** /api/v2/casemanagement/caseplans/{caseplanId}/dataschemas | Add a data schema to a draft Caseplan.
[**postCasemanagementCaseplanPublish**](CaseManagementApi#postCasemanagementCaseplanPublish) | **POST** /api/v2/casemanagement/caseplans/{caseplanId}/publish | Publish Caseplan.
[**postCasemanagementCaseplanVersions**](CaseManagementApi#postCasemanagementCaseplanVersions) | **POST** /api/v2/casemanagement/caseplans/{caseplanId}/versions | Create Caseplan version.
[**postCasemanagementCaseplans**](CaseManagementApi#postCasemanagementCaseplans) | **POST** /api/v2/casemanagement/caseplans | Create a Caseplan.
[**postCasemanagementCaseplansQuery**](CaseManagementApi#postCasemanagementCaseplansQuery) | **POST** /api/v2/casemanagement/caseplans/query | Query for Caseplans.
[**postCasemanagementCases**](CaseManagementApi#postCasemanagementCases) | **POST** /api/v2/casemanagement/cases | Create a Case.
[**postCasemanagementCasesAssociationsQuery**](CaseManagementApi#postCasemanagementCasesAssociationsQuery) | **POST** /api/v2/casemanagement/cases/associations/query | Query for Case associations by interaction.
[**putCasemanagementCaseplanDataschema**](CaseManagementApi#putCasemanagementCaseplanDataschema) | **PUT** /api/v2/casemanagement/caseplans/{caseplanId}/dataschemas/{schemaKeyName} | Update a data schema on a draft Caseplan.
[**putCasemanagementCaseplanIntakesettings**](CaseManagementApi#putCasemanagementCaseplanIntakesettings) | **PUT** /api/v2/casemanagement/caseplans/{caseplanId}/intakesettings | Update the intake settings for a Caseplan.



## deleteCasemanagementCase

> **Object** deleteCasemanagementCase(caseId, opts)


DELETE /api/v2/casemanagement/cases/{caseId}

Delete a Case.

Requires ALL permissions:

* caseManagement:case:delete

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.CaseManagementApi();

let caseId = "caseId_example"; // String | Case identifier.
let opts = { 
  'customHeaders': {  // Object.<string, string> | Request Custom Headers
    'X-Service-Name': 'customer-service',
    'X-Request-ID': 'req-12345'
  }
};

apiInstance.deleteCasemanagementCase(caseId, opts)
  .then((data) => {
    console.log(`deleteCasemanagementCase success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling deleteCasemanagementCase');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **caseId** | **String** | Case identifier. |  |
 **customHeaders** | **Object.<string, string>** | Request Custom Headers | [optional] |

### Return type

**Object**


## deleteCasemanagementCaseCommentsMeCommentId

> **Object** deleteCasemanagementCaseCommentsMeCommentId(caseId, commentId, opts)


DELETE /api/v2/casemanagement/cases/{caseId}/comments/me/{commentId}

Delete my Comment.

Requires ANY permissions:

* caseManagement:commentSelf:delete

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.CaseManagementApi();

let caseId = "caseId_example"; // String | Case identifier.
let commentId = "commentId_example"; // String | Comment identifier.
let opts = { 
  'customHeaders': {  // Object.<string, string> | Request Custom Headers
    'X-Service-Name': 'customer-service',
    'X-Request-ID': 'req-12345'
  }
};

apiInstance.deleteCasemanagementCaseCommentsMeCommentId(caseId, commentId, opts)
  .then((data) => {
    console.log(`deleteCasemanagementCaseCommentsMeCommentId success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling deleteCasemanagementCaseCommentsMeCommentId');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **caseId** | **String** | Case identifier. |  |
 **commentId** | **String** | Comment identifier. |  |
 **customHeaders** | **Object.<string, string>** | Request Custom Headers | [optional] |

### Return type

**Object**


## deleteCasemanagementCaseplan

> **Object** deleteCasemanagementCaseplan(caseplanId, opts)


DELETE /api/v2/casemanagement/caseplans/{caseplanId}

Delete a Caseplan.

Requires ALL permissions:

* caseManagement:caseplan:delete

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.CaseManagementApi();

let caseplanId = "caseplanId_example"; // String | Caseplan identifier.
let opts = { 
  'customHeaders': {  // Object.<string, string> | Request Custom Headers
    'X-Service-Name': 'customer-service',
    'X-Request-ID': 'req-12345'
  }
};

apiInstance.deleteCasemanagementCaseplan(caseplanId, opts)
  .then((data) => {
    console.log(`deleteCasemanagementCaseplan success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling deleteCasemanagementCaseplan');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **caseplanId** | **String** | Caseplan identifier. |  |
 **customHeaders** | **Object.<string, string>** | Request Custom Headers | [optional] |

### Return type

**Object**


## deleteCasemanagementCaseplanDataschema

> **Object** deleteCasemanagementCaseplanDataschema(caseplanId, schemaKeyName, opts)


DELETE /api/v2/casemanagement/caseplans/{caseplanId}/dataschemas/{schemaKeyName}

Remove a data schema from a draft Caseplan.

Requires ALL permissions:

* caseManagement:caseplanDataSchemas:delete

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.CaseManagementApi();

let caseplanId = "caseplanId_example"; // String | Caseplan identifier.
let schemaKeyName = "schemaKeyName_example"; // String | Schema key (for example default).
let opts = { 
  'customHeaders': {  // Object.<string, string> | Request Custom Headers
    'X-Service-Name': 'customer-service',
    'X-Request-ID': 'req-12345'
  }
};

apiInstance.deleteCasemanagementCaseplanDataschema(caseplanId, schemaKeyName, opts)
  .then((data) => {
    console.log(`deleteCasemanagementCaseplanDataschema success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling deleteCasemanagementCaseplanDataschema');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **caseplanId** | **String** | Caseplan identifier. |  |
 **schemaKeyName** | **String** | Schema key (for example default). |  |
 **customHeaders** | **Object.<string, string>** | Request Custom Headers | [optional] |

### Return type

**Object**


## getCasemanagementCase

> Case getCasemanagementCase(caseId, opts)


GET /api/v2/casemanagement/cases/{caseId}

Get a Case.

Requires ANY permissions:

* caseManagement:case:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.CaseManagementApi();

let caseId = "caseId_example"; // String | Case identifier.
let opts = { 
  'expands': ["expands_example"], // [String] | Attributes to expand. Comma-separated if more than one.
  'customHeaders': {  // Object.<string, string> | Request Custom Headers
    'X-Service-Name': 'customer-service',
    'X-Request-ID': 'req-12345'
  }
};

apiInstance.getCasemanagementCase(caseId, opts)
  .then((data) => {
    console.log(`getCasemanagementCase success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getCasemanagementCase');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **caseId** | **String** | Case identifier. |  |
 **expands** | **[String]** | Attributes to expand. Comma-separated if more than one. | [optional] <br />**Values**: caseplan, owner, modifiedBy, externalContact, customerIntent |
 **customHeaders** | **Object.<string, string>** | Request Custom Headers | [optional] |

### Return type

**Case**


## getCasemanagementCaseAssociation

> CaseAssociation getCasemanagementCaseAssociation(caseId, associationId, opts)


GET /api/v2/casemanagement/cases/{caseId}/associations/{associationId}

Get a Case Association.

Requires ANY permissions:

* caseManagement:caseAssociation:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.CaseManagementApi();

let caseId = "caseId_example"; // String | Case identifier.
let associationId = "associationId_example"; // String | Case association identifier.
let opts = { 
  'customHeaders': {  // Object.<string, string> | Request Custom Headers
    'X-Service-Name': 'customer-service',
    'X-Request-ID': 'req-12345'
  }
};

apiInstance.getCasemanagementCaseAssociation(caseId, associationId, opts)
  .then((data) => {
    console.log(`getCasemanagementCaseAssociation success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getCasemanagementCaseAssociation');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **caseId** | **String** | Case identifier. |  |
 **associationId** | **String** | Case association identifier. |  |
 **customHeaders** | **Object.<string, string>** | Request Custom Headers | [optional] |

### Return type

**CaseAssociation**


## getCasemanagementCaseAssociations

> CaseAssociationListing getCasemanagementCaseAssociations(caseId, opts)


GET /api/v2/casemanagement/cases/{caseId}/associations

Get a list of Case associations for the Case.

Requires ANY permissions:

* caseManagement:caseAssociation:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.CaseManagementApi();

let caseId = "caseId_example"; // String | Case identifier.
let opts = { 
  'before': "before_example", // String | The cursor that points to the start of the set of entities that has been returned.
  'after': "after_example", // String | The cursor that points to the end of the set of entities that has been returned.
  'pageSize': "pageSize_example", // String | Number of entities to return. Maximum of 200.
  'customHeaders': {  // Object.<string, string> | Request Custom Headers
    'X-Service-Name': 'customer-service',
    'X-Request-ID': 'req-12345'
  }
};

apiInstance.getCasemanagementCaseAssociations(caseId, opts)
  .then((data) => {
    console.log(`getCasemanagementCaseAssociations success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getCasemanagementCaseAssociations');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **caseId** | **String** | Case identifier. |  |
 **before** | **String** | The cursor that points to the start of the set of entities that has been returned. | [optional]  |
 **after** | **String** | The cursor that points to the end of the set of entities that has been returned. | [optional]  |
 **pageSize** | **String** | Number of entities to return. Maximum of 200. | [optional]  |
 **customHeaders** | **Object.<string, string>** | Request Custom Headers | [optional] |

### Return type

**CaseAssociationListing**


## getCasemanagementCaseComment

> Comment getCasemanagementCaseComment(caseId, commentId, opts)


GET /api/v2/casemanagement/cases/{caseId}/comments/{commentId}

Get a Comment.

Requires ANY permissions:

* caseManagement:comment:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.CaseManagementApi();

let caseId = "caseId_example"; // String | Case identifier.
let commentId = "commentId_example"; // String | Comment identifier.
let opts = { 
  'customHeaders': {  // Object.<string, string> | Request Custom Headers
    'X-Service-Name': 'customer-service',
    'X-Request-ID': 'req-12345'
  }
};

apiInstance.getCasemanagementCaseComment(caseId, commentId, opts)
  .then((data) => {
    console.log(`getCasemanagementCaseComment success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getCasemanagementCaseComment');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **caseId** | **String** | Case identifier. |  |
 **commentId** | **String** | Comment identifier. |  |
 **customHeaders** | **Object.<string, string>** | Request Custom Headers | [optional] |

### Return type

**Comment**


## getCasemanagementCaseComments

> CommentListing getCasemanagementCaseComments(caseId, opts)


GET /api/v2/casemanagement/cases/{caseId}/comments

Get comments for a Case.

Requires ANY permissions:

* caseManagement:comment:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.CaseManagementApi();

let caseId = "caseId_example"; // String | Case identifier.
let opts = { 
  'after': "after_example", // String | Cursor pointing to the end of the previously returned page of comments.
  'pageSize': 3.4, // Number | Number of comments to return. Maximum is 100.
  'sortOrder': "desc", // String | Ascending or descending sort order.
  'customHeaders': {  // Object.<string, string> | Request Custom Headers
    'X-Service-Name': 'customer-service',
    'X-Request-ID': 'req-12345'
  }
};

apiInstance.getCasemanagementCaseComments(caseId, opts)
  .then((data) => {
    console.log(`getCasemanagementCaseComments success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getCasemanagementCaseComments');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **caseId** | **String** | Case identifier. |  |
 **after** | **String** | Cursor pointing to the end of the previously returned page of comments. | [optional]  |
 **pageSize** | **Number** | Number of comments to return. Maximum is 100. | [optional]  |
 **sortOrder** | **String** | Ascending or descending sort order. | [optional] [default to desc]<br />**Values**: asc, desc |
 **customHeaders** | **Object.<string, string>** | Request Custom Headers | [optional] |

### Return type

**CommentListing**


## getCasemanagementCaseStage

> Stage getCasemanagementCaseStage(caseId, stageId, opts)


GET /api/v2/casemanagement/cases/{caseId}/stages/{stageId}

Get a Stage.

Requires ANY permissions:

* caseManagement:stage:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.CaseManagementApi();

let caseId = "caseId_example"; // String | Case identifier.
let stageId = "stageId_example"; // String | Stage identifier.
let opts = { 
  'customHeaders': {  // Object.<string, string> | Request Custom Headers
    'X-Service-Name': 'customer-service',
    'X-Request-ID': 'req-12345'
  }
};

apiInstance.getCasemanagementCaseStage(caseId, stageId, opts)
  .then((data) => {
    console.log(`getCasemanagementCaseStage success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getCasemanagementCaseStage');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **caseId** | **String** | Case identifier. |  |
 **stageId** | **String** | Stage identifier. |  |
 **customHeaders** | **Object.<string, string>** | Request Custom Headers | [optional] |

### Return type

**Stage**


## getCasemanagementCaseStageStep

> Step getCasemanagementCaseStageStep(caseId, stageId, stepId, opts)


GET /api/v2/casemanagement/cases/{caseId}/stages/{stageId}/steps/{stepId}

Get a Step.

Requires ANY permissions:

* caseManagement:step:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.CaseManagementApi();

let caseId = "caseId_example"; // String | Case identifier.
let stageId = "stageId_example"; // String | Stage identifier.
let stepId = "stepId_example"; // String | Step identifier.
let opts = { 
  'customHeaders': {  // Object.<string, string> | Request Custom Headers
    'X-Service-Name': 'customer-service',
    'X-Request-ID': 'req-12345'
  }
};

apiInstance.getCasemanagementCaseStageStep(caseId, stageId, stepId, opts)
  .then((data) => {
    console.log(`getCasemanagementCaseStageStep success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getCasemanagementCaseStageStep');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **caseId** | **String** | Case identifier. |  |
 **stageId** | **String** | Stage identifier. |  |
 **stepId** | **String** | Step identifier. |  |
 **customHeaders** | **Object.<string, string>** | Request Custom Headers | [optional] |

### Return type

**Step**


## getCasemanagementCaseStageSteps

> StepListing getCasemanagementCaseStageSteps(caseId, stageId, opts)


GET /api/v2/casemanagement/cases/{caseId}/stages/{stageId}/steps

Get a list of Steps.

Requires ANY permissions:

* caseManagement:step:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.CaseManagementApi();

let caseId = "caseId_example"; // String | Case identifier.
let stageId = "stageId_example"; // String | Stage identifier.
let opts = { 
  'before': "before_example", // String | The cursor that points to the start of the set of entities that has been returned.
  'after': "after_example", // String | The cursor that points to the end of the set of entities that has been returned.
  'pageSize': "pageSize_example", // String | Number of entities to return. Maximum of 200.
  'customHeaders': {  // Object.<string, string> | Request Custom Headers
    'X-Service-Name': 'customer-service',
    'X-Request-ID': 'req-12345'
  }
};

apiInstance.getCasemanagementCaseStageSteps(caseId, stageId, opts)
  .then((data) => {
    console.log(`getCasemanagementCaseStageSteps success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getCasemanagementCaseStageSteps');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **caseId** | **String** | Case identifier. |  |
 **stageId** | **String** | Stage identifier. |  |
 **before** | **String** | The cursor that points to the start of the set of entities that has been returned. | [optional]  |
 **after** | **String** | The cursor that points to the end of the set of entities that has been returned. | [optional]  |
 **pageSize** | **String** | Number of entities to return. Maximum of 200. | [optional]  |
 **customHeaders** | **Object.<string, string>** | Request Custom Headers | [optional] |

### Return type

**StepListing**


## getCasemanagementCaseStages

> StageListing getCasemanagementCaseStages(caseId, opts)


GET /api/v2/casemanagement/cases/{caseId}/stages

Get a list of Stages.

Requires ANY permissions:

* caseManagement:stage:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.CaseManagementApi();

let caseId = "caseId_example"; // String | Case identifier.
let opts = { 
  'before': "before_example", // String | The cursor that points to the start of the set of entities that has been returned.
  'after': "after_example", // String | The cursor that points to the end of the set of entities that has been returned.
  'pageSize': "pageSize_example", // String | Number of entities to return. Maximum of 200.
  'customHeaders': {  // Object.<string, string> | Request Custom Headers
    'X-Service-Name': 'customer-service',
    'X-Request-ID': 'req-12345'
  }
};

apiInstance.getCasemanagementCaseStages(caseId, opts)
  .then((data) => {
    console.log(`getCasemanagementCaseStages success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getCasemanagementCaseStages');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **caseId** | **String** | Case identifier. |  |
 **before** | **String** | The cursor that points to the start of the set of entities that has been returned. | [optional]  |
 **after** | **String** | The cursor that points to the end of the set of entities that has been returned. | [optional]  |
 **pageSize** | **String** | Number of entities to return. Maximum of 200. | [optional]  |
 **customHeaders** | **Object.<string, string>** | Request Custom Headers | [optional] |

### Return type

**StageListing**


## getCasemanagementCaseTerminateJob

> TerminateJob getCasemanagementCaseTerminateJob(caseId, jobId, opts)


GET /api/v2/casemanagement/cases/{caseId}/terminate/jobs/{jobId}

Get a Terminate Job for a Case.

Requires ANY permissions:

* caseManagement:terminateJob:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.CaseManagementApi();

let caseId = "caseId_example"; // String | Case identifier.
let jobId = "jobId_example"; // String | Terminate Job identifier.
let opts = { 
  'customHeaders': {  // Object.<string, string> | Request Custom Headers
    'X-Service-Name': 'customer-service',
    'X-Request-ID': 'req-12345'
  }
};

apiInstance.getCasemanagementCaseTerminateJob(caseId, jobId, opts)
  .then((data) => {
    console.log(`getCasemanagementCaseTerminateJob success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getCasemanagementCaseTerminateJob');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **caseId** | **String** | Case identifier. |  |
 **jobId** | **String** | Terminate Job identifier. |  |
 **customHeaders** | **Object.<string, string>** | Request Custom Headers | [optional] |

### Return type

**TerminateJob**


## getCasemanagementCaseplan

> Caseplan getCasemanagementCaseplan(caseplanId, opts)


GET /api/v2/casemanagement/caseplans/{caseplanId}

Get a Caseplan.

Requires ANY permissions:

* caseManagement:caseplan:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.CaseManagementApi();

let caseplanId = "caseplanId_example"; // String | Caseplan identifier.
let opts = { 
  'customHeaders': {  // Object.<string, string> | Request Custom Headers
    'X-Service-Name': 'customer-service',
    'X-Request-ID': 'req-12345'
  }
};

apiInstance.getCasemanagementCaseplan(caseplanId, opts)
  .then((data) => {
    console.log(`getCasemanagementCaseplan success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getCasemanagementCaseplan');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **caseplanId** | **String** | Caseplan identifier. |  |
 **customHeaders** | **Object.<string, string>** | Request Custom Headers | [optional] |

### Return type

**Caseplan**


## getCasemanagementCaseplanVersion

> Caseplan getCasemanagementCaseplanVersion(caseplanId, versionId, opts)


GET /api/v2/casemanagement/caseplans/{caseplanId}/versions/{versionId}

Get a Caseplan version.

Requires ANY permissions:

* caseManagement:caseplan:version

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.CaseManagementApi();

let caseplanId = "caseplanId_example"; // String | Caseplan identifier.
let versionId = "versionId_example"; // String | Caseplan version identifier.
let opts = { 
  'customHeaders': {  // Object.<string, string> | Request Custom Headers
    'X-Service-Name': 'customer-service',
    'X-Request-ID': 'req-12345'
  }
};

apiInstance.getCasemanagementCaseplanVersion(caseplanId, versionId, opts)
  .then((data) => {
    console.log(`getCasemanagementCaseplanVersion success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getCasemanagementCaseplanVersion');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **caseplanId** | **String** | Caseplan identifier. |  |
 **versionId** | **String** | Caseplan version identifier. |  |
 **customHeaders** | **Object.<string, string>** | Request Custom Headers | [optional] |

### Return type

**Caseplan**


## getCasemanagementCaseplanVersionDataschemas

> CaseplanDataSchemaListing getCasemanagementCaseplanVersionDataschemas(caseplanId, versionId, opts)


GET /api/v2/casemanagement/caseplans/{caseplanId}/versions/{versionId}/dataschemas

Get the data schemas for a Caseplan version.

Requires ANY permissions:

* caseManagement:caseplanDataSchemas:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.CaseManagementApi();

let caseplanId = "caseplanId_example"; // String | Caseplan identifier.
let versionId = "versionId_example"; // String | Caseplan version identifier.
let opts = { 
  'customHeaders': {  // Object.<string, string> | Request Custom Headers
    'X-Service-Name': 'customer-service',
    'X-Request-ID': 'req-12345'
  }
};

apiInstance.getCasemanagementCaseplanVersionDataschemas(caseplanId, versionId, opts)
  .then((data) => {
    console.log(`getCasemanagementCaseplanVersionDataschemas success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getCasemanagementCaseplanVersionDataschemas');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **caseplanId** | **String** | Caseplan identifier. |  |
 **versionId** | **String** | Caseplan version identifier. |  |
 **customHeaders** | **Object.<string, string>** | Request Custom Headers | [optional] |

### Return type

**CaseplanDataSchemaListing**


## getCasemanagementCaseplanVersionIntakesettings

> IntakeSettingsListing getCasemanagementCaseplanVersionIntakesettings(caseplanId, versionId, opts)


GET /api/v2/casemanagement/caseplans/{caseplanId}/versions/{versionId}/intakesettings

Get the intake settings for a Caseplan version.

Requires ANY permissions:

* caseManagement:caseplanIntakeSettings:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.CaseManagementApi();

let caseplanId = "caseplanId_example"; // String | Caseplan identifier.
let versionId = "versionId_example"; // String | Caseplan version identifier.
let opts = { 
  'customHeaders': {  // Object.<string, string> | Request Custom Headers
    'X-Service-Name': 'customer-service',
    'X-Request-ID': 'req-12345'
  }
};

apiInstance.getCasemanagementCaseplanVersionIntakesettings(caseplanId, versionId, opts)
  .then((data) => {
    console.log(`getCasemanagementCaseplanVersionIntakesettings success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getCasemanagementCaseplanVersionIntakesettings');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **caseplanId** | **String** | Caseplan identifier. |  |
 **versionId** | **String** | Caseplan version identifier. |  |
 **customHeaders** | **Object.<string, string>** | Request Custom Headers | [optional] |

### Return type

**IntakeSettingsListing**


## getCasemanagementCaseplanVersionStageplan

> Stageplan getCasemanagementCaseplanVersionStageplan(caseplanId, versionId, stageplanId, opts)


GET /api/v2/casemanagement/caseplans/{caseplanId}/versions/{versionId}/stageplans/{stageplanId}

Get a Stageplan.

Requires ANY permissions:

* caseManagement:stageplan:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.CaseManagementApi();

let caseplanId = "caseplanId_example"; // String | Caseplan identifier.
let versionId = "versionId_example"; // String | Caseplan version identifier.
let stageplanId = "stageplanId_example"; // String | Stageplan identifier.
let opts = { 
  'expands': ["expands_example"], // [String] | Fields to expand.
  'customHeaders': {  // Object.<string, string> | Request Custom Headers
    'X-Service-Name': 'customer-service',
    'X-Request-ID': 'req-12345'
  }
};

apiInstance.getCasemanagementCaseplanVersionStageplan(caseplanId, versionId, stageplanId, opts)
  .then((data) => {
    console.log(`getCasemanagementCaseplanVersionStageplan success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getCasemanagementCaseplanVersionStageplan');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **caseplanId** | **String** | Caseplan identifier. |  |
 **versionId** | **String** | Caseplan version identifier. |  |
 **stageplanId** | **String** | Stageplan identifier. |  |
 **expands** | **[String]** | Fields to expand. | [optional] <br />**Values**: caseplan |
 **customHeaders** | **Object.<string, string>** | Request Custom Headers | [optional] |

### Return type

**Stageplan**


## getCasemanagementCaseplanVersionStageplanStepplan

> Stepplan getCasemanagementCaseplanVersionStageplanStepplan(caseplanId, versionId, stageplanId, stepplanId, opts)


GET /api/v2/casemanagement/caseplans/{caseplanId}/versions/{versionId}/stageplans/{stageplanId}/stepplans/{stepplanId}

Get a Stepplan.

Requires ANY permissions:

* caseManagement:stepplan:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.CaseManagementApi();

let caseplanId = "caseplanId_example"; // String | Caseplan identifier.
let versionId = "versionId_example"; // String | Caseplan version identifier.
let stageplanId = "stageplanId_example"; // String | Stageplan identifier.
let stepplanId = "stepplanId_example"; // String | Stepplan identifier.
let opts = { 
  'expands': ["expands_example"], // [String] | Fields to expand.
  'customHeaders': {  // Object.<string, string> | Request Custom Headers
    'X-Service-Name': 'customer-service',
    'X-Request-ID': 'req-12345'
  }
};

apiInstance.getCasemanagementCaseplanVersionStageplanStepplan(caseplanId, versionId, stageplanId, stepplanId, opts)
  .then((data) => {
    console.log(`getCasemanagementCaseplanVersionStageplanStepplan success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getCasemanagementCaseplanVersionStageplanStepplan');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **caseplanId** | **String** | Caseplan identifier. |  |
 **versionId** | **String** | Caseplan version identifier. |  |
 **stageplanId** | **String** | Stageplan identifier. |  |
 **stepplanId** | **String** | Stepplan identifier. |  |
 **expands** | **[String]** | Fields to expand. | [optional] <br />**Values**: stageplan, caseplan, worktype |
 **customHeaders** | **Object.<string, string>** | Request Custom Headers | [optional] |

### Return type

**Stepplan**


## getCasemanagementCaseplanVersionStageplanStepplans

> StepplanListing getCasemanagementCaseplanVersionStageplanStepplans(caseplanId, versionId, stageplanId, opts)


GET /api/v2/casemanagement/caseplans/{caseplanId}/versions/{versionId}/stageplans/{stageplanId}/stepplans

Get a list of Stepplans.

Requires ANY permissions:

* caseManagement:stepplan:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.CaseManagementApi();

let caseplanId = "caseplanId_example"; // String | Caseplan identifier.
let versionId = "versionId_example"; // String | Caseplan version identifier.
let stageplanId = "stageplanId_example"; // String | Stageplan identifier.
let opts = { 
  'before': "before_example", // String | The cursor that points to the start of the set of entities that has been returned.
  'after': "after_example", // String | The cursor that points to the end of the set of entities that has been returned.
  'pageSize': "pageSize_example", // String | Number of entities to return. Maximum of 200.
  'expands': ["expands_example"], // [String] | Fields to expand.
  'customHeaders': {  // Object.<string, string> | Request Custom Headers
    'X-Service-Name': 'customer-service',
    'X-Request-ID': 'req-12345'
  }
};

apiInstance.getCasemanagementCaseplanVersionStageplanStepplans(caseplanId, versionId, stageplanId, opts)
  .then((data) => {
    console.log(`getCasemanagementCaseplanVersionStageplanStepplans success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getCasemanagementCaseplanVersionStageplanStepplans');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **caseplanId** | **String** | Caseplan identifier. |  |
 **versionId** | **String** | Caseplan version identifier. |  |
 **stageplanId** | **String** | Stageplan identifier. |  |
 **before** | **String** | The cursor that points to the start of the set of entities that has been returned. | [optional]  |
 **after** | **String** | The cursor that points to the end of the set of entities that has been returned. | [optional]  |
 **pageSize** | **String** | Number of entities to return. Maximum of 200. | [optional]  |
 **expands** | **[String]** | Fields to expand. | [optional] <br />**Values**: caseplan, stageplan, worktype |
 **customHeaders** | **Object.<string, string>** | Request Custom Headers | [optional] |

### Return type

**StepplanListing**


## getCasemanagementCaseplanVersionStageplans

> StageplanListing getCasemanagementCaseplanVersionStageplans(caseplanId, versionId, opts)


GET /api/v2/casemanagement/caseplans/{caseplanId}/versions/{versionId}/stageplans

Get a list of Stageplans.

Requires ANY permissions:

* caseManagement:stageplan:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.CaseManagementApi();

let caseplanId = "caseplanId_example"; // String | Caseplan identifier.
let versionId = "versionId_example"; // String | Caseplan version identifier.
let opts = { 
  'before': "before_example", // String | The cursor that points to the start of the set of entities that has been returned.
  'after': "after_example", // String | The cursor that points to the end of the set of entities that has been returned.
  'pageSize': "pageSize_example", // String | Number of entities to return. Maximum of 200.
  'expands': ["expands_example"], // [String] | Fields to expand.
  'customHeaders': {  // Object.<string, string> | Request Custom Headers
    'X-Service-Name': 'customer-service',
    'X-Request-ID': 'req-12345'
  }
};

apiInstance.getCasemanagementCaseplanVersionStageplans(caseplanId, versionId, opts)
  .then((data) => {
    console.log(`getCasemanagementCaseplanVersionStageplans success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getCasemanagementCaseplanVersionStageplans');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **caseplanId** | **String** | Caseplan identifier. |  |
 **versionId** | **String** | Caseplan version identifier. |  |
 **before** | **String** | The cursor that points to the start of the set of entities that has been returned. | [optional]  |
 **after** | **String** | The cursor that points to the end of the set of entities that has been returned. | [optional]  |
 **pageSize** | **String** | Number of entities to return. Maximum of 200. | [optional]  |
 **expands** | **[String]** | Fields to expand. | [optional] <br />**Values**: caseplan |
 **customHeaders** | **Object.<string, string>** | Request Custom Headers | [optional] |

### Return type

**StageplanListing**


## getCasemanagementCaseplans

> CaseplanListing getCasemanagementCaseplans(opts)


GET /api/v2/casemanagement/caseplans

Get a list of Caseplans.

Requires ANY permissions:

* caseManagement:caseplan:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.CaseManagementApi();

let opts = { 
  'after': "after_example", // String | Cursor that points to the end of the previously returned set of Caseplans.
  'pageSize': 3.4, // Number | Number of Caseplans to return. Maximum is 200.
  'customerIntentId': "customerIntentId_example", // String | Filter by customer intent.
  'divisionIds': "divisionIds_example", // String | Filter by divisions.
  'customHeaders': {  // Object.<string, string> | Request Custom Headers
    'X-Service-Name': 'customer-service',
    'X-Request-ID': 'req-12345'
  }
};

apiInstance.getCasemanagementCaseplans(opts)
  .then((data) => {
    console.log(`getCasemanagementCaseplans success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getCasemanagementCaseplans');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **after** | **String** | Cursor that points to the end of the previously returned set of Caseplans. | [optional]  |
 **pageSize** | **Number** | Number of Caseplans to return. Maximum is 200. | [optional]  |
 **customerIntentId** | **String** | Filter by customer intent. | [optional]  |
 **divisionIds** | **String** | Filter by divisions. | [optional]  |
 **customHeaders** | **Object.<string, string>** | Request Custom Headers | [optional] |

### Return type

**CaseplanListing**


## getCasemanagementCasesExternalcontact

> CaseListing getCasemanagementCasesExternalcontact(externalContactId, opts)


GET /api/v2/casemanagement/cases/externalcontacts/{externalContactId}

Get a list of Cases for an External Contact.

Requires ANY permissions:

* caseManagement:caseExternalContact:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.CaseManagementApi();

let externalContactId = "externalContactId_example"; // String | External contact identifier.
let opts = { 
  'after': "after_example", // String | Cursor pointing to the end of the previously returned page of Cases.
  'pageSize': 3.4, // Number | Number of Cases to return (maximum 200).
  'divisionIds': "divisionIds_example", // String | Filter by divisions.
  'expands': ["expands_example"], // [String] | Fields to expand.
  'customHeaders': {  // Object.<string, string> | Request Custom Headers
    'X-Service-Name': 'customer-service',
    'X-Request-ID': 'req-12345'
  }
};

apiInstance.getCasemanagementCasesExternalcontact(externalContactId, opts)
  .then((data) => {
    console.log(`getCasemanagementCasesExternalcontact success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getCasemanagementCasesExternalcontact');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **externalContactId** | **String** | External contact identifier. |  |
 **after** | **String** | Cursor pointing to the end of the previously returned page of Cases. | [optional]  |
 **pageSize** | **Number** | Number of Cases to return (maximum 200). | [optional]  |
 **divisionIds** | **String** | Filter by divisions. | [optional]  |
 **expands** | **[String]** | Fields to expand. | [optional] <br />**Values**: caseplan |
 **customHeaders** | **Object.<string, string>** | Request Custom Headers | [optional] |

### Return type

**CaseListing**


## getCasemanagementCasesReference

> Case getCasemanagementCasesReference(referenceId, opts)


GET /api/v2/casemanagement/cases/references/{referenceId}

Get a Case by reference.

Requires ANY permissions:

* caseManagement:caseReference:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.CaseManagementApi();

let referenceId = "referenceId_example"; // String | Case reference.
let opts = { 
  'expands': ["expands_example"], // [String] | Attributes to expand. Comma-separated if more than one.
  'customHeaders': {  // Object.<string, string> | Request Custom Headers
    'X-Service-Name': 'customer-service',
    'X-Request-ID': 'req-12345'
  }
};

apiInstance.getCasemanagementCasesReference(referenceId, opts)
  .then((data) => {
    console.log(`getCasemanagementCasesReference success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getCasemanagementCasesReference');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **referenceId** | **String** | Case reference. |  |
 **expands** | **[String]** | Attributes to expand. Comma-separated if more than one. | [optional] <br />**Values**: caseplan, owner, modifiedBy, externalContact, customerIntent |
 **customHeaders** | **Object.<string, string>** | Request Custom Headers | [optional] |

### Return type

**Case**


## patchCasemanagementCaseDatedue

> Case patchCasemanagementCaseDatedue(caseId, body, opts)


PATCH /api/v2/casemanagement/cases/{caseId}/datedue

Update the due date of a Case.

Requires ANY permissions:

* caseManagement:caseDateDue:edit

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.CaseManagementApi();

let caseId = "caseId_example"; // String | Case identifier.
let body = {}; // Object | Due date update.
let opts = { 
  'customHeaders': {  // Object.<string, string> | Request Custom Headers
    'X-Service-Name': 'customer-service',
    'X-Request-ID': 'req-12345'
  }
};

apiInstance.patchCasemanagementCaseDatedue(caseId, body, opts)
  .then((data) => {
    console.log(`patchCasemanagementCaseDatedue success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling patchCasemanagementCaseDatedue');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **caseId** | **String** | Case identifier. |  |
 **body** | **Object** | Due date update. |  |
 **customHeaders** | **Object.<string, string>** | Request Custom Headers | [optional] |

### Return type

**Case**


## patchCasemanagementCasePriority

> Case patchCasemanagementCasePriority(caseId, body, opts)


PATCH /api/v2/casemanagement/cases/{caseId}/priority

Update priority of a Case.

Requires ANY permissions:

* caseManagement:casePriority:edit

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.CaseManagementApi();

let caseId = "caseId_example"; // String | Case identifier.
let body = {}; // Object | Priority update.
let opts = { 
  'customHeaders': {  // Object.<string, string> | Request Custom Headers
    'X-Service-Name': 'customer-service',
    'X-Request-ID': 'req-12345'
  }
};

apiInstance.patchCasemanagementCasePriority(caseId, body, opts)
  .then((data) => {
    console.log(`patchCasemanagementCasePriority success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling patchCasemanagementCasePriority');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **caseId** | **String** | Case identifier. |  |
 **body** | **Object** | Priority update. |  |
 **customHeaders** | **Object.<string, string>** | Request Custom Headers | [optional] |

### Return type

**Case**


## patchCasemanagementCaseSummary

> Case patchCasemanagementCaseSummary(caseId, body, opts)


PATCH /api/v2/casemanagement/cases/{caseId}/summary

Update summary of a Case.

Requires ANY permissions:

* caseManagement:caseSummary:edit

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.CaseManagementApi();

let caseId = "caseId_example"; // String | Case identifier.
let body = {}; // Object | Summary update.
let opts = { 
  'customHeaders': {  // Object.<string, string> | Request Custom Headers
    'X-Service-Name': 'customer-service',
    'X-Request-ID': 'req-12345'
  }
};

apiInstance.patchCasemanagementCaseSummary(caseId, body, opts)
  .then((data) => {
    console.log(`patchCasemanagementCaseSummary success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling patchCasemanagementCaseSummary');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **caseId** | **String** | Case identifier. |  |
 **body** | **Object** | Summary update. |  |
 **customHeaders** | **Object.<string, string>** | Request Custom Headers | [optional] |

### Return type

**Case**


## patchCasemanagementCaseplan

> Caseplan patchCasemanagementCaseplan(caseplanId, body, opts)


PATCH /api/v2/casemanagement/caseplans/{caseplanId}

Update the attributes of a Caseplan.

Requires ALL permissions:

* caseManagement:caseplan:edit

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.CaseManagementApi();

let caseplanId = "caseplanId_example"; // String | Caseplan identifier.
let body = {}; // Object | Caseplan update.
let opts = { 
  'customHeaders': {  // Object.<string, string> | Request Custom Headers
    'X-Service-Name': 'customer-service',
    'X-Request-ID': 'req-12345'
  }
};

apiInstance.patchCasemanagementCaseplan(caseplanId, body, opts)
  .then((data) => {
    console.log(`patchCasemanagementCaseplan success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling patchCasemanagementCaseplan');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **caseplanId** | **String** | Caseplan identifier. |  |
 **body** | **Object** | Caseplan update. |  |
 **customHeaders** | **Object.<string, string>** | Request Custom Headers | [optional] |

### Return type

**Caseplan**


## patchCasemanagementCaseplanStageplan

> Stageplan patchCasemanagementCaseplanStageplan(caseplanId, stageplanId, body, opts)


PATCH /api/v2/casemanagement/caseplans/{caseplanId}/stageplans/{stageplanId}

Update the attributes of a Stageplan.

Requires ANY permissions:

* caseManagement:stageplan:edit

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.CaseManagementApi();

let caseplanId = "caseplanId_example"; // String | Caseplan identifier.
let stageplanId = "stageplanId_example"; // String | Stageplan identifier.
let body = {}; // Object | Stageplan update.
let opts = { 
  'customHeaders': {  // Object.<string, string> | Request Custom Headers
    'X-Service-Name': 'customer-service',
    'X-Request-ID': 'req-12345'
  }
};

apiInstance.patchCasemanagementCaseplanStageplan(caseplanId, stageplanId, body, opts)
  .then((data) => {
    console.log(`patchCasemanagementCaseplanStageplan success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling patchCasemanagementCaseplanStageplan');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **caseplanId** | **String** | Caseplan identifier. |  |
 **stageplanId** | **String** | Stageplan identifier. |  |
 **body** | **Object** | Stageplan update. |  |
 **customHeaders** | **Object.<string, string>** | Request Custom Headers | [optional] |

### Return type

**Stageplan**


## patchCasemanagementCaseplanStageplanStepplan

> Stepplan patchCasemanagementCaseplanStageplanStepplan(caseplanId, stageplanId, stepplanId, body, opts)


PATCH /api/v2/casemanagement/caseplans/{caseplanId}/stageplans/{stageplanId}/stepplans/{stepplanId}

Update the attributes of a Stepplan.

Requires ANY permissions:

* caseManagement:stepplan:edit

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.CaseManagementApi();

let caseplanId = "caseplanId_example"; // String | Caseplan identifier.
let stageplanId = "stageplanId_example"; // String | Stageplan identifier.
let stepplanId = "stepplanId_example"; // String | Stepplan identifier.
let body = {}; // Object | Stepplan update.
let opts = { 
  'customHeaders': {  // Object.<string, string> | Request Custom Headers
    'X-Service-Name': 'customer-service',
    'X-Request-ID': 'req-12345'
  }
};

apiInstance.patchCasemanagementCaseplanStageplanStepplan(caseplanId, stageplanId, stepplanId, body, opts)
  .then((data) => {
    console.log(`patchCasemanagementCaseplanStageplanStepplan success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling patchCasemanagementCaseplanStageplanStepplan');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **caseplanId** | **String** | Caseplan identifier. |  |
 **stageplanId** | **String** | Stageplan identifier. |  |
 **stepplanId** | **String** | Stepplan identifier. |  |
 **body** | **Object** | Stepplan update. |  |
 **customHeaders** | **Object.<string, string>** | Request Custom Headers | [optional] |

### Return type

**Stepplan**


## postCasemanagementCaseAssociations

> CaseAssociation postCasemanagementCaseAssociations(caseId, body, opts)


POST /api/v2/casemanagement/cases/{caseId}/associations

Create a Case association.

Requires ANY permissions:

* caseManagement:caseAssociation:add

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.CaseManagementApi();

let caseId = "caseId_example"; // String | Case identifier.
let body = {}; // Object | Case association create request.
let opts = { 
  'customHeaders': {  // Object.<string, string> | Request Custom Headers
    'X-Service-Name': 'customer-service',
    'X-Request-ID': 'req-12345'
  }
};

apiInstance.postCasemanagementCaseAssociations(caseId, body, opts)
  .then((data) => {
    console.log(`postCasemanagementCaseAssociations success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling postCasemanagementCaseAssociations');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **caseId** | **String** | Case identifier. |  |
 **body** | **Object** | Case association create request. |  |
 **customHeaders** | **Object.<string, string>** | Request Custom Headers | [optional] |

### Return type

**CaseAssociation**


## postCasemanagementCaseComments

> Comment postCasemanagementCaseComments(caseId, body, opts)


POST /api/v2/casemanagement/cases/{caseId}/comments

Add a comment to a Case.

Requires ANY permissions:

* caseManagement:comment:add

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.CaseManagementApi();

let caseId = "caseId_example"; // String | Case identifier.
let body = {}; // Object | Comment create request.
let opts = { 
  'customHeaders': {  // Object.<string, string> | Request Custom Headers
    'X-Service-Name': 'customer-service',
    'X-Request-ID': 'req-12345'
  }
};

apiInstance.postCasemanagementCaseComments(caseId, body, opts)
  .then((data) => {
    console.log(`postCasemanagementCaseComments success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling postCasemanagementCaseComments');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **caseId** | **String** | Case identifier. |  |
 **body** | **Object** | Comment create request. |  |
 **customHeaders** | **Object.<string, string>** | Request Custom Headers | [optional] |

### Return type

**Comment**


## postCasemanagementCaseTerminateJobs

> TerminateJob postCasemanagementCaseTerminateJobs(caseId, opts)


POST /api/v2/casemanagement/cases/{caseId}/terminate/jobs

Create a Terminate Job for a Case.

Requires ANY permissions:

* caseManagement:terminateJob:add

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.CaseManagementApi();

let caseId = "caseId_example"; // String | Case identifier.
let opts = { 
  'customHeaders': {  // Object.<string, string> | Request Custom Headers
    'X-Service-Name': 'customer-service',
    'X-Request-ID': 'req-12345'
  }
};

apiInstance.postCasemanagementCaseTerminateJobs(caseId, opts)
  .then((data) => {
    console.log(`postCasemanagementCaseTerminateJobs success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling postCasemanagementCaseTerminateJobs');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **caseId** | **String** | Case identifier. |  |
 **customHeaders** | **Object.<string, string>** | Request Custom Headers | [optional] |

### Return type

**TerminateJob**


## postCasemanagementCaseplanDataschemas

> CaseplanDataSchema postCasemanagementCaseplanDataschemas(caseplanId, body, opts)


POST /api/v2/casemanagement/caseplans/{caseplanId}/dataschemas

Add a data schema to a draft Caseplan.

Requires ALL permissions:

* caseManagement:caseplanDataSchemas:add

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.CaseManagementApi();

let caseplanId = "caseplanId_example"; // String | Caseplan identifier.
let body = {}; // Object | Data schema reference.
let opts = { 
  'customHeaders': {  // Object.<string, string> | Request Custom Headers
    'X-Service-Name': 'customer-service',
    'X-Request-ID': 'req-12345'
  }
};

apiInstance.postCasemanagementCaseplanDataschemas(caseplanId, body, opts)
  .then((data) => {
    console.log(`postCasemanagementCaseplanDataschemas success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling postCasemanagementCaseplanDataschemas');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **caseplanId** | **String** | Caseplan identifier. |  |
 **body** | **Object** | Data schema reference. |  |
 **customHeaders** | **Object.<string, string>** | Request Custom Headers | [optional] |

### Return type

**CaseplanDataSchema**


## postCasemanagementCaseplanPublish

> Caseplan postCasemanagementCaseplanPublish(caseplanId, opts)


POST /api/v2/casemanagement/caseplans/{caseplanId}/publish

Publish Caseplan.

Requires ANY permissions:

* caseManagement:caseplan:publish

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.CaseManagementApi();

let caseplanId = "caseplanId_example"; // String | Caseplan identifier.
let opts = { 
  'customHeaders': {  // Object.<string, string> | Request Custom Headers
    'X-Service-Name': 'customer-service',
    'X-Request-ID': 'req-12345'
  }
};

apiInstance.postCasemanagementCaseplanPublish(caseplanId, opts)
  .then((data) => {
    console.log(`postCasemanagementCaseplanPublish success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling postCasemanagementCaseplanPublish');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **caseplanId** | **String** | Caseplan identifier. |  |
 **customHeaders** | **Object.<string, string>** | Request Custom Headers | [optional] |

### Return type

**Caseplan**


## postCasemanagementCaseplanVersions

> Caseplan postCasemanagementCaseplanVersions(caseplanId, opts)


POST /api/v2/casemanagement/caseplans/{caseplanId}/versions

Create Caseplan version.

Requires ALL permissions:

* caseManagement:caseplan:edit

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.CaseManagementApi();

let caseplanId = "caseplanId_example"; // String | Caseplan identifier.
let opts = { 
  'customHeaders': {  // Object.<string, string> | Request Custom Headers
    'X-Service-Name': 'customer-service',
    'X-Request-ID': 'req-12345'
  }
};

apiInstance.postCasemanagementCaseplanVersions(caseplanId, opts)
  .then((data) => {
    console.log(`postCasemanagementCaseplanVersions success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling postCasemanagementCaseplanVersions');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **caseplanId** | **String** | Caseplan identifier. |  |
 **customHeaders** | **Object.<string, string>** | Request Custom Headers | [optional] |

### Return type

**Caseplan**


## postCasemanagementCaseplans

> CaseplanCreateResponse postCasemanagementCaseplans(body, opts)


POST /api/v2/casemanagement/caseplans

Create a Caseplan.

Requires ANY permissions:

* caseManagement:caseplan:add

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.CaseManagementApi();

let body = {}; // Object | Caseplan create request.
let opts = { 
  'customHeaders': {  // Object.<string, string> | Request Custom Headers
    'X-Service-Name': 'customer-service',
    'X-Request-ID': 'req-12345'
  }
};

apiInstance.postCasemanagementCaseplans(body, opts)
  .then((data) => {
    console.log(`postCasemanagementCaseplans success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling postCasemanagementCaseplans');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **body** | **Object** | Caseplan create request. |  |
 **customHeaders** | **Object.<string, string>** | Request Custom Headers | [optional] |

### Return type

**CaseplanCreateResponse**


## postCasemanagementCaseplansQuery

> CaseplanQueryEntityListing postCasemanagementCaseplansQuery(body, opts)


POST /api/v2/casemanagement/caseplans/query

Query for Caseplans.

This endpoint supports two filtering modes. The recommended approach uses filters (generic filter model) and attributes (field projection). During the migration period, the legacy fields name, nameSearchType, and divisionIds remain available as an alternative.

Requires ANY permissions:

* caseManagement:caseplan:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.CaseManagementApi();

let body = {}; // Object | Caseplan query request.
let opts = { 
  'customHeaders': {  // Object.<string, string> | Request Custom Headers
    'X-Service-Name': 'customer-service',
    'X-Request-ID': 'req-12345'
  }
};

apiInstance.postCasemanagementCaseplansQuery(body, opts)
  .then((data) => {
    console.log(`postCasemanagementCaseplansQuery success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling postCasemanagementCaseplansQuery');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **body** | **Object** | Caseplan query request. |  |
 **customHeaders** | **Object.<string, string>** | Request Custom Headers | [optional] |

### Return type

**CaseplanQueryEntityListing**


## postCasemanagementCases

> Case postCasemanagementCases(body, opts)


POST /api/v2/casemanagement/cases

Create a Case.

Requires ANY permissions:

* caseManagement:case:add

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.CaseManagementApi();

let body = {}; // Object | Case create request.
let opts = { 
  'customHeaders': {  // Object.<string, string> | Request Custom Headers
    'X-Service-Name': 'customer-service',
    'X-Request-ID': 'req-12345'
  }
};

apiInstance.postCasemanagementCases(body, opts)
  .then((data) => {
    console.log(`postCasemanagementCases success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling postCasemanagementCases');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **body** | **Object** | Case create request. |  |
 **customHeaders** | **Object.<string, string>** | Request Custom Headers | [optional] |

### Return type

**Case**


## postCasemanagementCasesAssociationsQuery

> CaseAssociationQueryEntityListing postCasemanagementCasesAssociationsQuery(body, opts)


POST /api/v2/casemanagement/cases/associations/query

Query for Case associations by interaction.

Requires ANY permissions:

* caseManagement:caseAssociation:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.CaseManagementApi();

let body = {}; // Object | Case association query request.
let opts = { 
  'customHeaders': {  // Object.<string, string> | Request Custom Headers
    'X-Service-Name': 'customer-service',
    'X-Request-ID': 'req-12345'
  }
};

apiInstance.postCasemanagementCasesAssociationsQuery(body, opts)
  .then((data) => {
    console.log(`postCasemanagementCasesAssociationsQuery success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling postCasemanagementCasesAssociationsQuery');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **body** | **Object** | Case association query request. |  |
 **customHeaders** | **Object.<string, string>** | Request Custom Headers | [optional] |

### Return type

**CaseAssociationQueryEntityListing**


## putCasemanagementCaseplanDataschema

> CaseplanDataSchema putCasemanagementCaseplanDataschema(caseplanId, schemaKeyName, body, opts)


PUT /api/v2/casemanagement/caseplans/{caseplanId}/dataschemas/{schemaKeyName}

Update a data schema on a draft Caseplan.

Requires ALL permissions:

* caseManagement:caseplanDataSchemas:edit

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.CaseManagementApi();

let caseplanId = "caseplanId_example"; // String | Caseplan identifier.
let schemaKeyName = "schemaKeyName_example"; // String | Schema key (for example default).
let body = {}; // Object | Data schema reference.
let opts = { 
  'customHeaders': {  // Object.<string, string> | Request Custom Headers
    'X-Service-Name': 'customer-service',
    'X-Request-ID': 'req-12345'
  }
};

apiInstance.putCasemanagementCaseplanDataschema(caseplanId, schemaKeyName, body, opts)
  .then((data) => {
    console.log(`putCasemanagementCaseplanDataschema success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling putCasemanagementCaseplanDataschema');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **caseplanId** | **String** | Caseplan identifier. |  |
 **schemaKeyName** | **String** | Schema key (for example default). |  |
 **body** | **Object** | Data schema reference. |  |
 **customHeaders** | **Object.<string, string>** | Request Custom Headers | [optional] |

### Return type

**CaseplanDataSchema**


## putCasemanagementCaseplanIntakesettings

> IntakeSettingsListing putCasemanagementCaseplanIntakesettings(caseplanId, body, opts)


PUT /api/v2/casemanagement/caseplans/{caseplanId}/intakesettings

Update the intake settings for a Caseplan.

Requires ANY permissions:

* caseManagement:caseplanIntakeSettings:edit

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.CaseManagementApi();

let caseplanId = "caseplanId_example"; // String | Caseplan identifier.
let body = {}; // Object | Intake settings update.
let opts = { 
  'customHeaders': {  // Object.<string, string> | Request Custom Headers
    'X-Service-Name': 'customer-service',
    'X-Request-ID': 'req-12345'
  }
};

apiInstance.putCasemanagementCaseplanIntakesettings(caseplanId, body, opts)
  .then((data) => {
    console.log(`putCasemanagementCaseplanIntakesettings success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling putCasemanagementCaseplanIntakesettings');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **caseplanId** | **String** | Caseplan identifier. |  |
 **body** | **Object** | Intake settings update. |  |
 **customHeaders** | **Object.<string, string>** | Request Custom Headers | [optional] |

### Return type

**IntakeSettingsListing**


_purecloud-platform-client-v2@258.1.0_
