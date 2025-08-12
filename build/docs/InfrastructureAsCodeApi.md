# InfrastructureAsCodeApi

# platformClient.InfrastructureAsCodeApi

All URIs are relative to *https://api.mypurecloud.com*

| Method | HTTP request | Description |
| ------------- | ------------- | ------------- |
[**getInfrastructureascodeAccelerator**](InfrastructureAsCodeApi#getInfrastructureascodeAccelerator) | **GET** /api/v2/infrastructureascode/accelerators/{acceleratorId} | Get information about an accelerator
[**getInfrastructureascodeAccelerators**](InfrastructureAsCodeApi#getInfrastructureascodeAccelerators) | **GET** /api/v2/infrastructureascode/accelerators | Get a list of available accelerators
[**getInfrastructureascodeJob**](InfrastructureAsCodeApi#getInfrastructureascodeJob) | **GET** /api/v2/infrastructureascode/jobs/{jobId} | Get job status and results
[**getInfrastructureascodeJobs**](InfrastructureAsCodeApi#getInfrastructureascodeJobs) | **GET** /api/v2/infrastructureascode/jobs | Get job history
[**postInfrastructureascodeJobs**](InfrastructureAsCodeApi#postInfrastructureascodeJobs) | **POST** /api/v2/infrastructureascode/jobs | Create a Job



## getInfrastructureascodeAccelerator

> AcceleratorSpecification getInfrastructureascodeAccelerator(acceleratorId, opts)


GET /api/v2/infrastructureascode/accelerators/{acceleratorId}

Get information about an accelerator

Get the complete metadata specification for an accelerator, including requirements and parameters.

Requires ANY permissions:

* infrastructureascode:accelerator:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.InfrastructureAsCodeApi();

let acceleratorId = "acceleratorId_example"; // String | Accelerator ID
let opts = { 
  'preferredLanguage': "en-US" // String | Preferred Language
};

apiInstance.getInfrastructureascodeAccelerator(acceleratorId, opts)
  .then((data) => {
    console.log(`getInfrastructureascodeAccelerator success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getInfrastructureascodeAccelerator');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **acceleratorId** | **String** | Accelerator ID |  |
 **preferredLanguage** | **String** | Preferred Language | [optional] [default to en-US]<br />**Values**: ar, cs, da, de, en-US, es, fi, fr, it, iw, ko, ja, nl, no, pl, pt-BR, pt-PT, sv, th, tr, zh-CN, zh-TW |

### Return type

**AcceleratorSpecification**


## getInfrastructureascodeAccelerators

> AcceleratorList getInfrastructureascodeAccelerators(opts)


GET /api/v2/infrastructureascode/accelerators

Get a list of available accelerators

Search for accelerators that can be run.

Requires ANY permissions:

* infrastructureascode:accelerator:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.InfrastructureAsCodeApi();

let opts = { 
  'pageSize': 25, // Number | The total page size requested
  'pageNumber': 1, // Number | The page number requested
  'sortBy': "sortBy_example", // String | variable name requested to sort by
  'sortOrder': "asc", // String | Sort order
  'name': "name_example", // String | Filter by name
  'description': "description_example", // String | Filter by description
  'origin': "origin_example", // String | Filter by origin
  'type': "type_example", // String | Filter by type
  'classification': "classification_example", // String | Filter by classification
  'tags': "tags_example" // String | Filter by tags
};

apiInstance.getInfrastructureascodeAccelerators(opts)
  .then((data) => {
    console.log(`getInfrastructureascodeAccelerators success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getInfrastructureascodeAccelerators');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **pageSize** | **Number** | The total page size requested | [optional] [default to 25] |
 **pageNumber** | **Number** | The page number requested | [optional] [default to 1] |
 **sortBy** | **String** | variable name requested to sort by | [optional]  |
 **sortOrder** | **String** | Sort order | [optional] [default to asc]<br />**Values**: asc, desc |
 **name** | **String** | Filter by name | [optional]  |
 **description** | **String** | Filter by description | [optional]  |
 **origin** | **String** | Filter by origin | [optional] <br />**Values**: community, partner, genesys |
 **type** | **String** | Filter by type | [optional] <br />**Values**: module, accelerator, blueprint |
 **classification** | **String** | Filter by classification | [optional]  |
 **tags** | **String** | Filter by tags | [optional]  |

### Return type

**AcceleratorList**


## getInfrastructureascodeJob

> InfrastructureascodeJob getInfrastructureascodeJob(jobId, opts)


GET /api/v2/infrastructureascode/jobs/{jobId}

Get job status and results

Get the execution status of a submitted job, optionally including results and error details.

Requires ALL permissions:

* infrastructureascode:job:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.InfrastructureAsCodeApi();

let jobId = "jobId_example"; // String | Job ID
let opts = { 
  'details': false // Boolean | Include details of execution, including job results or error information
};

apiInstance.getInfrastructureascodeJob(jobId, opts)
  .then((data) => {
    console.log(`getInfrastructureascodeJob success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getInfrastructureascodeJob');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **jobId** | **String** | Job ID |  |
 **details** | **Boolean** | Include details of execution, including job results or error information | [optional] [default to false] |

### Return type

**InfrastructureascodeJob**


## getInfrastructureascodeJobs

> InfrastructureascodeJob getInfrastructureascodeJobs(opts)


GET /api/v2/infrastructureascode/jobs

Get job history

Get a history of submitted jobs, optionally including error messages.

Requires ANY permissions:

* infrastructureascode:job:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.InfrastructureAsCodeApi();

let opts = { 
  'maxResults': 1, // Number | Number of jobs to show
  'includeErrors': false, // Boolean | Include error messages
  'sortBy': "dateSubmitted", // String | Sort by
  'sortOrder': "desc", // String | Sort order
  'acceleratorId': "acceleratorId_example", // String | Find only jobs associated with this accelerator
  'submittedBy': "submittedBy_example", // String | Find only jobs submitted by this user
  'status': "status_example" // String | Find only jobs in this state
};

apiInstance.getInfrastructureascodeJobs(opts)
  .then((data) => {
    console.log(`getInfrastructureascodeJobs success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getInfrastructureascodeJobs');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **maxResults** | **Number** | Number of jobs to show | [optional] [default to 1] |
 **includeErrors** | **Boolean** | Include error messages | [optional] [default to false] |
 **sortBy** | **String** | Sort by | [optional] [default to dateSubmitted]<br />**Values**: id, dateSubmitted, submittedBy, acceleratorId, status |
 **sortOrder** | **String** | Sort order | [optional] [default to desc]<br />**Values**: asc, desc |
 **acceleratorId** | **String** | Find only jobs associated with this accelerator | [optional]  |
 **submittedBy** | **String** | Find only jobs submitted by this user | [optional]  |
 **status** | **String** | Find only jobs in this state | [optional] <br />**Values**: Created, Queued, Running, Complete, Failed, Incomplete |

### Return type

**InfrastructureascodeJob**


## postInfrastructureascodeJobs

> InfrastructureascodeJob postInfrastructureascodeJobs(body)


POST /api/v2/infrastructureascode/jobs

Create a Job

Create and submit a job for remote execution or see job planning results.

Requires ANY permissions:

* infrastructureascode:job:add

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.InfrastructureAsCodeApi();

let body = {}; // Object | 

apiInstance.postInfrastructureascodeJobs(body)
  .then((data) => {
    console.log(`postInfrastructureascodeJobs success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling postInfrastructureascodeJobs');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **body** | **Object** |  |  |

### Return type

**InfrastructureascodeJob**


_purecloud-platform-client-v2@229.1.0_
