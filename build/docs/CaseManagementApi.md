# CaseManagementApi

# platformClient.CaseManagementApi

All URIs are relative to *https://api.mypurecloud.com*

| Method | HTTP request | Description |
| ------------- | ------------- | ------------- |
[**deleteCasemanagementCase**](CaseManagementApi#deleteCasemanagementCase) | **DELETE** /api/v2/casemanagement/cases/{caseId} | Delete a Case.
[**deleteCasemanagementCaseplan**](CaseManagementApi#deleteCasemanagementCaseplan) | **DELETE** /api/v2/casemanagement/caseplans/{caseplanId} | Delete a Caseplan.
[**getCasemanagementCase**](CaseManagementApi#getCasemanagementCase) | **GET** /api/v2/casemanagement/cases/{caseId} | Get a Case.
[**getCasemanagementCaseAssociation**](CaseManagementApi#getCasemanagementCaseAssociation) | **GET** /api/v2/casemanagement/cases/{caseId}/associations/{associationId} | Get a Case Association.
[**getCasemanagementCaseAssociations**](CaseManagementApi#getCasemanagementCaseAssociations) | **GET** /api/v2/casemanagement/cases/{caseId}/associations | Get a list of case associations for a provided case.
[**getCasemanagementCaseStage**](CaseManagementApi#getCasemanagementCaseStage) | **GET** /api/v2/casemanagement/cases/{caseId}/stages/{stageId} | Get a Stage.
[**getCasemanagementCaseStageStep**](CaseManagementApi#getCasemanagementCaseStageStep) | **GET** /api/v2/casemanagement/cases/{caseId}/stages/{stageId}/steps/{stepId} | Get a Step.
[**getCasemanagementCaseStageSteps**](CaseManagementApi#getCasemanagementCaseStageSteps) | **GET** /api/v2/casemanagement/cases/{caseId}/stages/{stageId}/steps | Get a list of Steps.
[**getCasemanagementCaseStages**](CaseManagementApi#getCasemanagementCaseStages) | **GET** /api/v2/casemanagement/cases/{caseId}/stages | Get a list of Stages.
[**getCasemanagementCaseTerminateJob**](CaseManagementApi#getCasemanagementCaseTerminateJob) | **GET** /api/v2/casemanagement/cases/{caseId}/terminate/jobs/{jobId} | Get a Terminate Job for a Case.
[**getCasemanagementCaseplan**](CaseManagementApi#getCasemanagementCaseplan) | **GET** /api/v2/casemanagement/caseplans/{caseplanId} | Get a Caseplan.
[**getCasemanagementCaseplanVersion**](CaseManagementApi#getCasemanagementCaseplanVersion) | **GET** /api/v2/casemanagement/caseplans/{caseplanId}/versions/{versionId} | Get a Caseplan version.
[**getCasemanagementCaseplanVersionDataschemas**](CaseManagementApi#getCasemanagementCaseplanVersionDataschemas) | **GET** /api/v2/casemanagement/caseplans/{caseplanId}/versions/{versionId}/dataschemas | Get the dataSchemas for a caseplan version.
[**getCasemanagementCaseplanVersionIntakesettings**](CaseManagementApi#getCasemanagementCaseplanVersionIntakesettings) | **GET** /api/v2/casemanagement/caseplans/{caseplanId}/versions/{versionId}/intakesettings | Get the intake settings for a Caseplan version.
[**getCasemanagementCaseplanVersionStageplan**](CaseManagementApi#getCasemanagementCaseplanVersionStageplan) | **GET** /api/v2/casemanagement/caseplans/{caseplanId}/versions/{versionId}/stageplans/{stageplanId} | Get a Stageplan.
[**getCasemanagementCaseplanVersionStageplanStepplan**](CaseManagementApi#getCasemanagementCaseplanVersionStageplanStepplan) | **GET** /api/v2/casemanagement/caseplans/{caseplanId}/versions/{versionId}/stageplans/{stageplanId}/stepplans/{stepplanId} | Get a Stepplan.
[**getCasemanagementCaseplanVersionStageplanStepplans**](CaseManagementApi#getCasemanagementCaseplanVersionStageplanStepplans) | **GET** /api/v2/casemanagement/caseplans/{caseplanId}/versions/{versionId}/stageplans/{stageplanId}/stepplans | Get a list of Stepplans.
[**getCasemanagementCaseplanVersionStageplans**](CaseManagementApi#getCasemanagementCaseplanVersionStageplans) | **GET** /api/v2/casemanagement/caseplans/{caseplanId}/versions/{versionId}/stageplans | Get a list of Stageplans.
[**getCasemanagementCaseplans**](CaseManagementApi#getCasemanagementCaseplans) | **GET** /api/v2/casemanagement/caseplans | Get a list of Caseplans.
[**getCasemanagementCasesExternalcontact**](CaseManagementApi#getCasemanagementCasesExternalcontact) | **GET** /api/v2/casemanagement/cases/externalcontacts/{externalContactId} | Get a list of cases for provided external contact id.
[**getCasemanagementCasesReference**](CaseManagementApi#getCasemanagementCasesReference) | **GET** /api/v2/casemanagement/cases/references/{referenceId} | Get a Case by reference.
[**patchCasemanagementCaseDatedue**](CaseManagementApi#patchCasemanagementCaseDatedue) | **PATCH** /api/v2/casemanagement/cases/{caseId}/datedue | Update date due of a Case.
[**patchCasemanagementCasePriority**](CaseManagementApi#patchCasemanagementCasePriority) | **PATCH** /api/v2/casemanagement/cases/{caseId}/priority | Update priority of a Case.
[**patchCasemanagementCaseSummary**](CaseManagementApi#patchCasemanagementCaseSummary) | **PATCH** /api/v2/casemanagement/cases/{caseId}/summary | Update summary of a Case.
[**patchCasemanagementCaseplan**](CaseManagementApi#patchCasemanagementCaseplan) | **PATCH** /api/v2/casemanagement/caseplans/{caseplanId} | Update the attributes of a Caseplan.
[**patchCasemanagementCaseplanStageplan**](CaseManagementApi#patchCasemanagementCaseplanStageplan) | **PATCH** /api/v2/casemanagement/caseplans/{caseplanId}/stageplans/{stageplanId} | Update the attributes of a Stageplan.
[**patchCasemanagementCaseplanStageplanStepplan**](CaseManagementApi#patchCasemanagementCaseplanStageplanStepplan) | **PATCH** /api/v2/casemanagement/caseplans/{caseplanId}/stageplans/{stageplanId}/stepplans/{stepplanId} | Update the attributes of a Stepplan.
[**postCasemanagementCaseAssociations**](CaseManagementApi#postCasemanagementCaseAssociations) | **POST** /api/v2/casemanagement/cases/{caseId}/associations | Create a case association.
[**postCasemanagementCaseTerminateJobs**](CaseManagementApi#postCasemanagementCaseTerminateJobs) | **POST** /api/v2/casemanagement/cases/{caseId}/terminate/jobs | Create a Terminate Job for a Case.
[**postCasemanagementCaseplanPublish**](CaseManagementApi#postCasemanagementCaseplanPublish) | **POST** /api/v2/casemanagement/caseplans/{caseplanId}/publish | Publish Caseplan.
[**postCasemanagementCaseplanVersions**](CaseManagementApi#postCasemanagementCaseplanVersions) | **POST** /api/v2/casemanagement/caseplans/{caseplanId}/versions | Create Caseplan version.
[**postCasemanagementCaseplans**](CaseManagementApi#postCasemanagementCaseplans) | **POST** /api/v2/casemanagement/caseplans | Create a Caseplan.
[**postCasemanagementCases**](CaseManagementApi#postCasemanagementCases) | **POST** /api/v2/casemanagement/cases | Create a Case.
[**postCasemanagementCasesAssociationsQuery**](CaseManagementApi#postCasemanagementCasesAssociationsQuery) | **POST** /api/v2/casemanagement/cases/associations/query | Query for case associations



## deleteCasemanagementCase

> **Object** deleteCasemanagementCase(caseId)


DELETE /api/v2/casemanagement/cases/{caseId}

Delete a Case.

deleteCasemanagementCase is a preview method and is subject to both breaking and non-breaking changes at any time without notice

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

let caseId = "caseId_example"; // String | Case ID

apiInstance.deleteCasemanagementCase(caseId)
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
 **caseId** | **String** | Case ID |  |

### Return type

**Object**


## deleteCasemanagementCaseplan

> **Object** deleteCasemanagementCaseplan(caseplanId)


DELETE /api/v2/casemanagement/caseplans/{caseplanId}

Delete a Caseplan.

deleteCasemanagementCaseplan is a preview method and is subject to both breaking and non-breaking changes at any time without notice

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

let caseplanId = "caseplanId_example"; // String | Caseplan ID

apiInstance.deleteCasemanagementCaseplan(caseplanId)
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
 **caseplanId** | **String** | Caseplan ID |  |

### Return type

**Object**


## getCasemanagementCase

> Case getCasemanagementCase(caseId, opts)


GET /api/v2/casemanagement/cases/{caseId}

Get a Case.

getCasemanagementCase is a preview method and is subject to both breaking and non-breaking changes at any time without notice

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

let caseId = "caseId_example"; // String | Case ID
let opts = { 
  'expands': "expands_example" // String | Which fields to expand.
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
 **caseId** | **String** | Case ID |  |
 **expands** | **String** | Which fields to expand. | [optional] <br />**Values**: caseplan |

### Return type

**Case**


## getCasemanagementCaseAssociation

> CaseAssociation getCasemanagementCaseAssociation(caseId, associationId)


GET /api/v2/casemanagement/cases/{caseId}/associations/{associationId}

Get a Case Association.

getCasemanagementCaseAssociation is a preview method and is subject to both breaking and non-breaking changes at any time without notice

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

let caseId = "caseId_example"; // String | Case ID
let associationId = "associationId_example"; // String | Case Association ID

apiInstance.getCasemanagementCaseAssociation(caseId, associationId)
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
 **caseId** | **String** | Case ID |  |
 **associationId** | **String** | Case Association ID |  |

### Return type

**CaseAssociation**


## getCasemanagementCaseAssociations

> CaseAssociationListing getCasemanagementCaseAssociations(caseId, opts)


GET /api/v2/casemanagement/cases/{caseId}/associations

Get a list of case associations for a provided case.

getCasemanagementCaseAssociations is a preview method and is subject to both breaking and non-breaking changes at any time without notice

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

let caseId = "caseId_example"; // String | Case ID.
let opts = { 
  'before': "before_example", // String | The cursor that points to the start of the set of entities that has been returned.
  'after': "after_example", // String | The cursor that points to the end of the set of entities that has been returned.
  'pageSize': "pageSize_example" // String | Number of entities to return. Maximum of 200.
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
 **caseId** | **String** | Case ID. |  |
 **before** | **String** | The cursor that points to the start of the set of entities that has been returned. | [optional]  |
 **after** | **String** | The cursor that points to the end of the set of entities that has been returned. | [optional]  |
 **pageSize** | **String** | Number of entities to return. Maximum of 200. | [optional]  |

### Return type

**CaseAssociationListing**


## getCasemanagementCaseStage

> Stage getCasemanagementCaseStage(caseId, stageId)


GET /api/v2/casemanagement/cases/{caseId}/stages/{stageId}

Get a Stage.

getCasemanagementCaseStage is a preview method and is subject to both breaking and non-breaking changes at any time without notice

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

let caseId = "caseId_example"; // String | Case ID
let stageId = "stageId_example"; // String | Stage ID

apiInstance.getCasemanagementCaseStage(caseId, stageId)
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
 **caseId** | **String** | Case ID |  |
 **stageId** | **String** | Stage ID |  |

### Return type

**Stage**


## getCasemanagementCaseStageStep

> Step getCasemanagementCaseStageStep(caseId, stageId, stepId)


GET /api/v2/casemanagement/cases/{caseId}/stages/{stageId}/steps/{stepId}

Get a Step.

getCasemanagementCaseStageStep is a preview method and is subject to both breaking and non-breaking changes at any time without notice

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

let caseId = "caseId_example"; // String | Case ID
let stageId = "stageId_example"; // String | Stage ID
let stepId = "stepId_example"; // String | Step ID

apiInstance.getCasemanagementCaseStageStep(caseId, stageId, stepId)
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
 **caseId** | **String** | Case ID |  |
 **stageId** | **String** | Stage ID |  |
 **stepId** | **String** | Step ID |  |

### Return type

**Step**


## getCasemanagementCaseStageSteps

> StepListing getCasemanagementCaseStageSteps(caseId, stageId, opts)


GET /api/v2/casemanagement/cases/{caseId}/stages/{stageId}/steps

Get a list of Steps.

getCasemanagementCaseStageSteps is a preview method and is subject to both breaking and non-breaking changes at any time without notice

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

let caseId = "caseId_example"; // String | Case ID
let stageId = "stageId_example"; // String | Stage ID
let opts = { 
  'before': "before_example", // String | The cursor that points to the start of the set of entities that has been returned.
  'after': "after_example", // String | The cursor that points to the end of the set of entities that has been returned.
  'pageSize': "pageSize_example" // String | Number of entities to return. Maximum of 200.
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
 **caseId** | **String** | Case ID |  |
 **stageId** | **String** | Stage ID |  |
 **before** | **String** | The cursor that points to the start of the set of entities that has been returned. | [optional]  |
 **after** | **String** | The cursor that points to the end of the set of entities that has been returned. | [optional]  |
 **pageSize** | **String** | Number of entities to return. Maximum of 200. | [optional]  |

### Return type

**StepListing**


## getCasemanagementCaseStages

> StageListing getCasemanagementCaseStages(caseId, opts)


GET /api/v2/casemanagement/cases/{caseId}/stages

Get a list of Stages.

getCasemanagementCaseStages is a preview method and is subject to both breaking and non-breaking changes at any time without notice

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

let caseId = "caseId_example"; // String | Case ID
let opts = { 
  'before': "before_example", // String | The cursor that points to the start of the set of entities that has been returned.
  'after': "after_example", // String | The cursor that points to the end of the set of entities that has been returned.
  'pageSize': "pageSize_example" // String | Number of entities to return. Maximum of 200.
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
 **caseId** | **String** | Case ID |  |
 **before** | **String** | The cursor that points to the start of the set of entities that has been returned. | [optional]  |
 **after** | **String** | The cursor that points to the end of the set of entities that has been returned. | [optional]  |
 **pageSize** | **String** | Number of entities to return. Maximum of 200. | [optional]  |

### Return type

**StageListing**


## getCasemanagementCaseTerminateJob

> TerminateJob getCasemanagementCaseTerminateJob(caseId, jobId)


GET /api/v2/casemanagement/cases/{caseId}/terminate/jobs/{jobId}

Get a Terminate Job for a Case.

getCasemanagementCaseTerminateJob is a preview method and is subject to both breaking and non-breaking changes at any time without notice

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

let caseId = "caseId_example"; // String | Case ID
let jobId = "jobId_example"; // String | Job ID

apiInstance.getCasemanagementCaseTerminateJob(caseId, jobId)
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
 **caseId** | **String** | Case ID |  |
 **jobId** | **String** | Job ID |  |

### Return type

**TerminateJob**


## getCasemanagementCaseplan

> Caseplan getCasemanagementCaseplan(caseplanId)


GET /api/v2/casemanagement/caseplans/{caseplanId}

Get a Caseplan.

getCasemanagementCaseplan is a preview method and is subject to both breaking and non-breaking changes at any time without notice

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

let caseplanId = "caseplanId_example"; // String | Caseplan ID

apiInstance.getCasemanagementCaseplan(caseplanId)
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
 **caseplanId** | **String** | Caseplan ID |  |

### Return type

**Caseplan**


## getCasemanagementCaseplanVersion

> Caseplan getCasemanagementCaseplanVersion(caseplanId, versionId)


GET /api/v2/casemanagement/caseplans/{caseplanId}/versions/{versionId}

Get a Caseplan version.

getCasemanagementCaseplanVersion is a preview method and is subject to both breaking and non-breaking changes at any time without notice

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

let caseplanId = "caseplanId_example"; // String | Caseplan ID
let versionId = "versionId_example"; // String | Version of the caseplan

apiInstance.getCasemanagementCaseplanVersion(caseplanId, versionId)
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
 **caseplanId** | **String** | Caseplan ID |  |
 **versionId** | **String** | Version of the caseplan |  |

### Return type

**Caseplan**


## getCasemanagementCaseplanVersionDataschemas

> CaseplanDataSchemaListing getCasemanagementCaseplanVersionDataschemas(caseplanId, versionId)


GET /api/v2/casemanagement/caseplans/{caseplanId}/versions/{versionId}/dataschemas

Get the dataSchemas for a caseplan version.

getCasemanagementCaseplanVersionDataschemas is a preview method and is subject to both breaking and non-breaking changes at any time without notice

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

let caseplanId = "caseplanId_example"; // String | Caseplan ID
let versionId = "versionId_example"; // String | Version of the caseplan

apiInstance.getCasemanagementCaseplanVersionDataschemas(caseplanId, versionId)
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
 **caseplanId** | **String** | Caseplan ID |  |
 **versionId** | **String** | Version of the caseplan |  |

### Return type

**CaseplanDataSchemaListing**


## getCasemanagementCaseplanVersionIntakesettings

> IntakeSettingsListing getCasemanagementCaseplanVersionIntakesettings(caseplanId, versionId)


GET /api/v2/casemanagement/caseplans/{caseplanId}/versions/{versionId}/intakesettings

Get the intake settings for a Caseplan version.

getCasemanagementCaseplanVersionIntakesettings is a preview method and is subject to both breaking and non-breaking changes at any time without notice

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

let caseplanId = "caseplanId_example"; // String | Caseplan ID
let versionId = "versionId_example"; // String | Version of the caseplan

apiInstance.getCasemanagementCaseplanVersionIntakesettings(caseplanId, versionId)
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
 **caseplanId** | **String** | Caseplan ID |  |
 **versionId** | **String** | Version of the caseplan |  |

### Return type

**IntakeSettingsListing**


## getCasemanagementCaseplanVersionStageplan

> Stageplan getCasemanagementCaseplanVersionStageplan(caseplanId, versionId, stageplanId, opts)


GET /api/v2/casemanagement/caseplans/{caseplanId}/versions/{versionId}/stageplans/{stageplanId}

Get a Stageplan.

getCasemanagementCaseplanVersionStageplan is a preview method and is subject to both breaking and non-breaking changes at any time without notice

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

let caseplanId = "caseplanId_example"; // String | Caseplan ID
let versionId = "versionId_example"; // String | Version ID
let stageplanId = "stageplanId_example"; // String | Stageplan ID
let opts = { 
  'expands': ["expands_example"] // [String] | Which fields to expand.
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
 **caseplanId** | **String** | Caseplan ID |  |
 **versionId** | **String** | Version ID |  |
 **stageplanId** | **String** | Stageplan ID |  |
 **expands** | **[String]** | Which fields to expand. | [optional] <br />**Values**: caseplan |

### Return type

**Stageplan**


## getCasemanagementCaseplanVersionStageplanStepplan

> Stepplan getCasemanagementCaseplanVersionStageplanStepplan(caseplanId, versionId, stageplanId, stepplanId, opts)


GET /api/v2/casemanagement/caseplans/{caseplanId}/versions/{versionId}/stageplans/{stageplanId}/stepplans/{stepplanId}

Get a Stepplan.

getCasemanagementCaseplanVersionStageplanStepplan is a preview method and is subject to both breaking and non-breaking changes at any time without notice

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

let caseplanId = "caseplanId_example"; // String | Caseplan ID
let versionId = "versionId_example"; // String | Version ID
let stageplanId = "stageplanId_example"; // String | Stageplan ID
let stepplanId = "stepplanId_example"; // String | Stepplan ID
let opts = { 
  'expands': ["expands_example"] // [String] | Which fields to expand.
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
 **caseplanId** | **String** | Caseplan ID |  |
 **versionId** | **String** | Version ID |  |
 **stageplanId** | **String** | Stageplan ID |  |
 **stepplanId** | **String** | Stepplan ID |  |
 **expands** | **[String]** | Which fields to expand. | [optional] <br />**Values**: stageplan, caseplan |

### Return type

**Stepplan**


## getCasemanagementCaseplanVersionStageplanStepplans

> StepplanListing getCasemanagementCaseplanVersionStageplanStepplans(caseplanId, versionId, stageplanId, opts)


GET /api/v2/casemanagement/caseplans/{caseplanId}/versions/{versionId}/stageplans/{stageplanId}/stepplans

Get a list of Stepplans.

getCasemanagementCaseplanVersionStageplanStepplans is a preview method and is subject to both breaking and non-breaking changes at any time without notice

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

let caseplanId = "caseplanId_example"; // String | Caseplan ID
let versionId = "versionId_example"; // String | Version ID
let stageplanId = "stageplanId_example"; // String | Stageplan ID
let opts = { 
  'before': "before_example", // String | The cursor that points to the start of the set of entities that has been returned.
  'after': "after_example", // String | The cursor that points to the end of the set of entities that has been returned.
  'pageSize': "pageSize_example", // String | Number of entities to return. Maximum of 200.
  'expands': ["expands_example"] // [String] | Which fields to expand.
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
 **caseplanId** | **String** | Caseplan ID |  |
 **versionId** | **String** | Version ID |  |
 **stageplanId** | **String** | Stageplan ID |  |
 **before** | **String** | The cursor that points to the start of the set of entities that has been returned. | [optional]  |
 **after** | **String** | The cursor that points to the end of the set of entities that has been returned. | [optional]  |
 **pageSize** | **String** | Number of entities to return. Maximum of 200. | [optional]  |
 **expands** | **[String]** | Which fields to expand. | [optional] <br />**Values**: caseplan, stageplan |

### Return type

**StepplanListing**


## getCasemanagementCaseplanVersionStageplans

> StageplanListing getCasemanagementCaseplanVersionStageplans(caseplanId, versionId, opts)


GET /api/v2/casemanagement/caseplans/{caseplanId}/versions/{versionId}/stageplans

Get a list of Stageplans.

getCasemanagementCaseplanVersionStageplans is a preview method and is subject to both breaking and non-breaking changes at any time without notice

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

let caseplanId = "caseplanId_example"; // String | Caseplan ID
let versionId = "versionId_example"; // String | Version ID
let opts = { 
  'before': "before_example", // String | The cursor that points to the start of the set of entities that has been returned.
  'after': "after_example", // String | The cursor that points to the end of the set of entities that has been returned.
  'pageSize': "pageSize_example", // String | Number of entities to return. Maximum of 200.
  'expands': ["expands_example"] // [String] | Which fields to expand.
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
 **caseplanId** | **String** | Caseplan ID |  |
 **versionId** | **String** | Version ID |  |
 **before** | **String** | The cursor that points to the start of the set of entities that has been returned. | [optional]  |
 **after** | **String** | The cursor that points to the end of the set of entities that has been returned. | [optional]  |
 **pageSize** | **String** | Number of entities to return. Maximum of 200. | [optional]  |
 **expands** | **[String]** | Which fields to expand. | [optional] <br />**Values**: caseplan |

### Return type

**StageplanListing**


## getCasemanagementCaseplans

> CaseplanListing getCasemanagementCaseplans(opts)


GET /api/v2/casemanagement/caseplans

Get a list of Caseplans.

getCasemanagementCaseplans is a preview method and is subject to both breaking and non-breaking changes at any time without notice

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
  'after': "after_example", // String | The cursor that points to the end of the set of caseplans that has been returned.
  'pageSize': 3.4, // Number | Number of caseplans to return. Maximum of 200.
  'customerIntentId': "customerIntentId_example", // String | Filter by Customer Intent.
  'divisionIds': "divisionIds_example" // String | Filter by Divisions.
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
 **after** | **String** | The cursor that points to the end of the set of caseplans that has been returned. | [optional]  |
 **pageSize** | **Number** | Number of caseplans to return. Maximum of 200. | [optional]  |
 **customerIntentId** | **String** | Filter by Customer Intent. | [optional]  |
 **divisionIds** | **String** | Filter by Divisions. | [optional]  |

### Return type

**CaseplanListing**


## getCasemanagementCasesExternalcontact

> CaseListing getCasemanagementCasesExternalcontact(externalContactId, opts)


GET /api/v2/casemanagement/cases/externalcontacts/{externalContactId}

Get a list of cases for provided external contact id.

getCasemanagementCasesExternalcontact is a preview method and is subject to both breaking and non-breaking changes at any time without notice

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

let externalContactId = "externalContactId_example"; // String | External Contact ID
let opts = { 
  'after': "after_example", // String | The cursor that points to the end of the set of cases that has been returned.
  'pageSize': 3.4, // Number | Number of cases to return. Maximum of 200.
  'divisionIds': "divisionIds_example", // String | Filter by Divisions
  'expands': ["expands_example"] // [String] | Which fields to expand.
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
 **externalContactId** | **String** | External Contact ID |  |
 **after** | **String** | The cursor that points to the end of the set of cases that has been returned. | [optional]  |
 **pageSize** | **Number** | Number of cases to return. Maximum of 200. | [optional]  |
 **divisionIds** | **String** | Filter by Divisions | [optional]  |
 **expands** | **[String]** | Which fields to expand. | [optional] <br />**Values**: caseplan |

### Return type

**CaseListing**


## getCasemanagementCasesReference

> Case getCasemanagementCasesReference(referenceId, opts)


GET /api/v2/casemanagement/cases/references/{referenceId}

Get a Case by reference.

getCasemanagementCasesReference is a preview method and is subject to both breaking and non-breaking changes at any time without notice

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

let referenceId = "referenceId_example"; // String | Reference
let opts = { 
  'expands': "expands_example" // String | Which fields to expand.
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
 **referenceId** | **String** | Reference |  |
 **expands** | **String** | Which fields to expand. | [optional] <br />**Values**: caseplan |

### Return type

**Case**


## patchCasemanagementCaseDatedue

> Case patchCasemanagementCaseDatedue(caseId, body)


PATCH /api/v2/casemanagement/cases/{caseId}/datedue

Update date due of a Case.

patchCasemanagementCaseDatedue is a preview method and is subject to both breaking and non-breaking changes at any time without notice

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

let caseId = "caseId_example"; // String | Case ID
let body = {}; // Object | Date due

apiInstance.patchCasemanagementCaseDatedue(caseId, body)
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
 **caseId** | **String** | Case ID |  |
 **body** | **Object** | Date due |  |

### Return type

**Case**


## patchCasemanagementCasePriority

> Case patchCasemanagementCasePriority(caseId, body)


PATCH /api/v2/casemanagement/cases/{caseId}/priority

Update priority of a Case.

patchCasemanagementCasePriority is a preview method and is subject to both breaking and non-breaking changes at any time without notice

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

let caseId = "caseId_example"; // String | Case ID
let body = {}; // Object | Priority

apiInstance.patchCasemanagementCasePriority(caseId, body)
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
 **caseId** | **String** | Case ID |  |
 **body** | **Object** | Priority |  |

### Return type

**Case**


## patchCasemanagementCaseSummary

> Case patchCasemanagementCaseSummary(caseId, body)


PATCH /api/v2/casemanagement/cases/{caseId}/summary

Update summary of a Case.

patchCasemanagementCaseSummary is a preview method and is subject to both breaking and non-breaking changes at any time without notice

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

let caseId = "caseId_example"; // String | Case ID
let body = {}; // Object | Summary

apiInstance.patchCasemanagementCaseSummary(caseId, body)
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
 **caseId** | **String** | Case ID |  |
 **body** | **Object** | Summary |  |

### Return type

**Case**


## patchCasemanagementCaseplan

> Caseplan patchCasemanagementCaseplan(caseplanId, body)


PATCH /api/v2/casemanagement/caseplans/{caseplanId}

Update the attributes of a Caseplan.

patchCasemanagementCaseplan is a preview method and is subject to both breaking and non-breaking changes at any time without notice

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

let caseplanId = "caseplanId_example"; // String | Caseplan ID
let body = {}; // Object | Caseplan

apiInstance.patchCasemanagementCaseplan(caseplanId, body)
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
 **caseplanId** | **String** | Caseplan ID |  |
 **body** | **Object** | Caseplan |  |

### Return type

**Caseplan**


## patchCasemanagementCaseplanStageplan

> Stageplan patchCasemanagementCaseplanStageplan(caseplanId, stageplanId, body)


PATCH /api/v2/casemanagement/caseplans/{caseplanId}/stageplans/{stageplanId}

Update the attributes of a Stageplan.

patchCasemanagementCaseplanStageplan is a preview method and is subject to both breaking and non-breaking changes at any time without notice

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

let caseplanId = "caseplanId_example"; // String | Caseplan ID
let stageplanId = "stageplanId_example"; // String | Stageplan ID
let body = {}; // Object | Stageplan

apiInstance.patchCasemanagementCaseplanStageplan(caseplanId, stageplanId, body)
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
 **caseplanId** | **String** | Caseplan ID |  |
 **stageplanId** | **String** | Stageplan ID |  |
 **body** | **Object** | Stageplan |  |

### Return type

**Stageplan**


## patchCasemanagementCaseplanStageplanStepplan

> Stepplan patchCasemanagementCaseplanStageplanStepplan(caseplanId, stageplanId, stepplanId, body)


PATCH /api/v2/casemanagement/caseplans/{caseplanId}/stageplans/{stageplanId}/stepplans/{stepplanId}

Update the attributes of a Stepplan.

patchCasemanagementCaseplanStageplanStepplan is a preview method and is subject to both breaking and non-breaking changes at any time without notice

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

let caseplanId = "caseplanId_example"; // String | Caseplan ID
let stageplanId = "stageplanId_example"; // String | Stageplan ID
let stepplanId = "stepplanId_example"; // String | Stepplan ID
let body = {}; // Object | Stepplan

apiInstance.patchCasemanagementCaseplanStageplanStepplan(caseplanId, stageplanId, stepplanId, body)
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
 **caseplanId** | **String** | Caseplan ID |  |
 **stageplanId** | **String** | Stageplan ID |  |
 **stepplanId** | **String** | Stepplan ID |  |
 **body** | **Object** | Stepplan |  |

### Return type

**Stepplan**


## postCasemanagementCaseAssociations

> CaseAssociation postCasemanagementCaseAssociations(caseId, opts)


POST /api/v2/casemanagement/cases/{caseId}/associations

Create a case association.

postCasemanagementCaseAssociations is a preview method and is subject to both breaking and non-breaking changes at any time without notice

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

let caseId = "caseId_example"; // String | Case ID.
let opts = { 
  'body': {} // Object | Case Association
};

apiInstance.postCasemanagementCaseAssociations(caseId, opts)
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
 **caseId** | **String** | Case ID. |  |
 **body** | **Object** | Case Association | [optional]  |

### Return type

**CaseAssociation**


## postCasemanagementCaseTerminateJobs

> TerminateJob postCasemanagementCaseTerminateJobs(caseId)


POST /api/v2/casemanagement/cases/{caseId}/terminate/jobs

Create a Terminate Job for a Case.

postCasemanagementCaseTerminateJobs is a preview method and is subject to both breaking and non-breaking changes at any time without notice

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

let caseId = "caseId_example"; // String | Case ID

apiInstance.postCasemanagementCaseTerminateJobs(caseId)
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
 **caseId** | **String** | Case ID |  |

### Return type

**TerminateJob**


## postCasemanagementCaseplanPublish

> Caseplan postCasemanagementCaseplanPublish(caseplanId)


POST /api/v2/casemanagement/caseplans/{caseplanId}/publish

Publish Caseplan.

postCasemanagementCaseplanPublish is a preview method and is subject to both breaking and non-breaking changes at any time without notice

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

let caseplanId = "caseplanId_example"; // String | Caseplan ID

apiInstance.postCasemanagementCaseplanPublish(caseplanId)
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
 **caseplanId** | **String** | Caseplan ID |  |

### Return type

**Caseplan**


## postCasemanagementCaseplanVersions

> Caseplan postCasemanagementCaseplanVersions(caseplanId)


POST /api/v2/casemanagement/caseplans/{caseplanId}/versions

Create Caseplan version.

postCasemanagementCaseplanVersions is a preview method and is subject to both breaking and non-breaking changes at any time without notice

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

let caseplanId = "caseplanId_example"; // String | Caseplan ID

apiInstance.postCasemanagementCaseplanVersions(caseplanId)
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
 **caseplanId** | **String** | Caseplan ID |  |

### Return type

**Caseplan**


## postCasemanagementCaseplans

> CaseplanCreateResponse postCasemanagementCaseplans(body)


POST /api/v2/casemanagement/caseplans

Create a Caseplan.

postCasemanagementCaseplans is a preview method and is subject to both breaking and non-breaking changes at any time without notice

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

let body = {}; // Object | Caseplan

apiInstance.postCasemanagementCaseplans(body)
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
 **body** | **Object** | Caseplan |  |

### Return type

**CaseplanCreateResponse**


## postCasemanagementCases

> Case postCasemanagementCases(body)


POST /api/v2/casemanagement/cases

Create a Case.

postCasemanagementCases is a preview method and is subject to both breaking and non-breaking changes at any time without notice

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

let body = {}; // Object | Case

apiInstance.postCasemanagementCases(body)
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
 **body** | **Object** | Case |  |

### Return type

**Case**


## postCasemanagementCasesAssociationsQuery

> CaseAssociationQueryEntityListing postCasemanagementCasesAssociationsQuery(opts)


POST /api/v2/casemanagement/cases/associations/query

Query for case associations

postCasemanagementCasesAssociationsQuery is a preview method and is subject to both breaking and non-breaking changes at any time without notice

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

let opts = { 
  'body': {} // Object | Case Association
};

apiInstance.postCasemanagementCasesAssociationsQuery(opts)
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
 **body** | **Object** | Case Association | [optional]  |

### Return type

**CaseAssociationQueryEntityListing**


_purecloud-platform-client-v2@249.0.0_
