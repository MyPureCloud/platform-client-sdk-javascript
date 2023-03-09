---
title: InfrastructureAsCodeApi
---
# platformClient.InfrastructureAsCodeApi

All URIs are relative to *https://api.mypurecloud.com*

| Method | HTTP request | Description |
| ------------- | ------------- | ------------- |
[**getInfrastructureascodeJob**](InfrastructureAsCodeApi.html#getInfrastructureascodeJob) | **GET** /api/v2/infrastructureascode/jobs/{jobId} | Get job status and results
[**getInfrastructureascodeJobs**](InfrastructureAsCodeApi.html#getInfrastructureascodeJobs) | **GET** /api/v2/infrastructureascode/jobs | Get job history
[**postInfrastructureascodeJobs**](InfrastructureAsCodeApi.html#postInfrastructureascodeJobs) | **POST** /api/v2/infrastructureascode/jobs | Create a Job
{: class="table table-striped"}

<a name="getInfrastructureascodeJob"></a>

# InfrastructureascodeJob getInfrastructureascodeJob(jobId, opts)


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

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
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
{: class="table table-striped"}

### Return type

**InfrastructureascodeJob**

<a name="getInfrastructureascodeJobs"></a>

# InfrastructureascodeJob getInfrastructureascodeJobs(opts)


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

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.InfrastructureAsCodeApi();

let opts = { 
  'maxResults': 1, // Number | Number of jobs to show
  'includeErrors': false, // Boolean | Include error messages
  'sortBy': "id", // String | Sort by
  'sortOrder': "asc" // String | Sort order
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
 **sortBy** | **String** | Sort by | [optional] [default to id]<br />**Values**: id, dateSubmitted, submittedBy, status |
 **sortOrder** | **String** | Sort order | [optional] [default to asc]<br />**Values**: asc, desc |
{: class="table table-striped"}

### Return type

**InfrastructureascodeJob**

<a name="postInfrastructureascodeJobs"></a>

# InfrastructureascodeJob postInfrastructureascodeJobs(body)


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

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
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
{: class="table table-striped"}

### Return type

**InfrastructureascodeJob**

