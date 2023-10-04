---
title: TestAutomationApi
---
# platformClient.TestAutomationApi

All URIs are relative to *https://api.inindca.com*

| Method | HTTP request | Description |
| ------------- | ------------- | ------------- |
[**deleteTestautomationExistingresourcesEnvironment**](TestAutomationApi.html#deleteTestautomationExistingresourcesEnvironment) | **DELETE** /api/v2/testautomation/existingresources/environments/{environmentName} | delete a TIM environment
[**deleteTestautomationExistingresourcesEnvironmentUser**](TestAutomationApi.html#deleteTestautomationExistingresourcesEnvironmentUser) | **DELETE** /api/v2/testautomation/existingresources/environments/{environmentName}/users/{userId} | remove a user from the TIM service
[**deleteTestautomationExistingresourcesOrganization**](TestAutomationApi.html#deleteTestautomationExistingresourcesOrganization) | **DELETE** /api/v2/testautomation/existingresources/organizations/{organizationId} | delete a TIM organization
[**getTestautomationExistingresourcesEnvironment**](TestAutomationApi.html#getTestautomationExistingresourcesEnvironment) | **GET** /api/v2/testautomation/existingresources/environments/{environmentName} | get TIM environment by its environment name
[**getTestautomationExistingresourcesEnvironmentUser**](TestAutomationApi.html#getTestautomationExistingresourcesEnvironmentUser) | **GET** /api/v2/testautomation/existingresources/environments/{environmentName}/users/{userId} | get a TIM user by their environment
[**getTestautomationExistingresourcesEnvironmentUsers**](TestAutomationApi.html#getTestautomationExistingresourcesEnvironmentUsers) | **GET** /api/v2/testautomation/existingresources/environments/{environmentName}/users | get TIM users by their environment and inuse or quarantined status
[**getTestautomationExistingresourcesEnvironments**](TestAutomationApi.html#getTestautomationExistingresourcesEnvironments) | **GET** /api/v2/testautomation/existingresources/environments | get all the TIM environments
[**getTestautomationExistingresourcesOauthclient**](TestAutomationApi.html#getTestautomationExistingresourcesOauthclient) | **GET** /api/v2/testautomation/existingresources/oauthclients/{environmentName} | get a TIM OAuth Client by its environment
[**getTestautomationExistingresourcesOauthclients**](TestAutomationApi.html#getTestautomationExistingresourcesOauthclients) | **GET** /api/v2/testautomation/existingresources/oauthclients | get all the TIM OAuth Clients
[**getTestautomationExistingresourcesOrganization**](TestAutomationApi.html#getTestautomationExistingresourcesOrganization) | **GET** /api/v2/testautomation/existingresources/organizations/{organizationId} | get a TIM org by its environment
[**getTestautomationExistingresourcesOrganizationUsers**](TestAutomationApi.html#getTestautomationExistingresourcesOrganizationUsers) | **GET** /api/v2/testautomation/existingresources/organizations/{organizationId}/users | get TIM users by their organization and inuse or quarantined status
[**getTestautomationExistingresourcesOrganizations**](TestAutomationApi.html#getTestautomationExistingresourcesOrganizations) | **GET** /api/v2/testautomation/existingresources/organizations | get all the TIM orgs
[**patchTestautomationExistingresourcesEnvironment**](TestAutomationApi.html#patchTestautomationExistingresourcesEnvironment) | **PATCH** /api/v2/testautomation/existingresources/environments/{environmentName} | update a TIM environment
[**postTestautomationExistingresourcesEnvironmentUsers**](TestAutomationApi.html#postTestautomationExistingresourcesEnvironmentUsers) | **POST** /api/v2/testautomation/existingresources/environments/{environmentName}/users | add a new user to the TIM service
[**postTestautomationExistingresourcesEnvironments**](TestAutomationApi.html#postTestautomationExistingresourcesEnvironments) | **POST** /api/v2/testautomation/existingresources/environments | add a new environment to the TIM service
[**postTestautomationExistingresourcesOrganizationUsers**](TestAutomationApi.html#postTestautomationExistingresourcesOrganizationUsers) | **POST** /api/v2/testautomation/existingresources/organizations/{organizationId}/users | add a new user to the TIM service
[**postTestautomationExistingresourcesOrganizations**](TestAutomationApi.html#postTestautomationExistingresourcesOrganizations) | **POST** /api/v2/testautomation/existingresources/organizations | add a new org to the TIM service
[**postTestautomationExistingresourcesUsersCheckin**](TestAutomationApi.html#postTestautomationExistingresourcesUsersCheckin) | **POST** /api/v2/testautomation/existingresources/users/checkin | check users back into the TIM service
[**postTestautomationExistingresourcesUsersCheckout**](TestAutomationApi.html#postTestautomationExistingresourcesUsersCheckout) | **POST** /api/v2/testautomation/existingresources/users/checkout | check a user out from the TIM service
{: class="table table-striped"}

<a name="deleteTestautomationExistingresourcesEnvironment"></a>

# void deleteTestautomationExistingresourcesEnvironment(environmentName)


DELETE /api/v2/testautomation/existingresources/environments/{environmentName}

delete a TIM environment

Requires ANY permissions:

* admin

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.TestAutomationApi();

let environmentName = "environmentName_example"; // String | environmentName

apiInstance.deleteTestautomationExistingresourcesEnvironment(environmentName)
  .then(() => {
    console.log('deleteTestautomationExistingresourcesEnvironment returned successfully.');
  })
  .catch((err) => {
    console.log('There was a failure calling deleteTestautomationExistingresourcesEnvironment');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **environmentName** | **String** | environmentName |  |
{: class="table table-striped"}

### Return type

void (no response body)

<a name="deleteTestautomationExistingresourcesEnvironmentUser"></a>

# void deleteTestautomationExistingresourcesEnvironmentUser(environmentName, userId)


DELETE /api/v2/testautomation/existingresources/environments/{environmentName}/users/{userId}

remove a user from the TIM service

Requires ANY permissions:

* admin

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.TestAutomationApi();

let environmentName = "environmentName_example"; // String | environmentName
let userId = "userId_example"; // String | userId

apiInstance.deleteTestautomationExistingresourcesEnvironmentUser(environmentName, userId)
  .then(() => {
    console.log('deleteTestautomationExistingresourcesEnvironmentUser returned successfully.');
  })
  .catch((err) => {
    console.log('There was a failure calling deleteTestautomationExistingresourcesEnvironmentUser');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **environmentName** | **String** | environmentName |  |
 **userId** | **String** | userId |  |
{: class="table table-striped"}

### Return type

void (no response body)

<a name="deleteTestautomationExistingresourcesOrganization"></a>

# void deleteTestautomationExistingresourcesOrganization(organizationId)


DELETE /api/v2/testautomation/existingresources/organizations/{organizationId}

delete a TIM organization

Requires ANY permissions:

* admin

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.TestAutomationApi();

let organizationId = "organizationId_example"; // String | organizationId

apiInstance.deleteTestautomationExistingresourcesOrganization(organizationId)
  .then(() => {
    console.log('deleteTestautomationExistingresourcesOrganization returned successfully.');
  })
  .catch((err) => {
    console.log('There was a failure calling deleteTestautomationExistingresourcesOrganization');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **organizationId** | **String** | organizationId |  |
{: class="table table-striped"}

### Return type

void (no response body)

<a name="getTestautomationExistingresourcesEnvironment"></a>

# StaticEnvironment getTestautomationExistingresourcesEnvironment(environmentName)


GET /api/v2/testautomation/existingresources/environments/{environmentName}

get TIM environment by its environment name

Requires ANY permissions:

* admin

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.TestAutomationApi();

let environmentName = "environmentName_example"; // String | environmentName

apiInstance.getTestautomationExistingresourcesEnvironment(environmentName)
  .then((data) => {
    console.log(`getTestautomationExistingresourcesEnvironment success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getTestautomationExistingresourcesEnvironment');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **environmentName** | **String** | environmentName |  |
{: class="table table-striped"}

### Return type

**StaticEnvironment**

<a name="getTestautomationExistingresourcesEnvironmentUser"></a>

# TimUser getTestautomationExistingresourcesEnvironmentUser(environmentName, userId)


GET /api/v2/testautomation/existingresources/environments/{environmentName}/users/{userId}

get a TIM user by their environment

Requires ANY permissions:

* admin

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.TestAutomationApi();

let environmentName = "environmentName_example"; // String | environmentName
let userId = "userId_example"; // String | userId

apiInstance.getTestautomationExistingresourcesEnvironmentUser(environmentName, userId)
  .then((data) => {
    console.log(`getTestautomationExistingresourcesEnvironmentUser success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getTestautomationExistingresourcesEnvironmentUser');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **environmentName** | **String** | environmentName |  |
 **userId** | **String** | userId |  |
{: class="table table-striped"}

### Return type

**TimUser**

<a name="getTestautomationExistingresourcesEnvironmentUsers"></a>

# TestAutomationUsers getTestautomationExistingresourcesEnvironmentUsers(environmentName, opts)


GET /api/v2/testautomation/existingresources/environments/{environmentName}/users

get TIM users by their environment and inuse or quarantined status

Requires ANY permissions:

* admin

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.TestAutomationApi();

let environmentName = "environmentName_example"; // String | environmentName
let opts = { 
  'pageSize': 25, // Number | Page size
  'page': 1, // Number | Page number
  'status': "status_example" // String | user's status
};

apiInstance.getTestautomationExistingresourcesEnvironmentUsers(environmentName, opts)
  .then((data) => {
    console.log(`getTestautomationExistingresourcesEnvironmentUsers success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getTestautomationExistingresourcesEnvironmentUsers');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **environmentName** | **String** | environmentName |  |
 **pageSize** | **Number** | Page size | [optional] [default to 25] |
 **page** | **Number** | Page number | [optional] [default to 1] |
 **status** | **String** | user's status | [optional]  |
{: class="table table-striped"}

### Return type

**TestAutomationUsers**

<a name="getTestautomationExistingresourcesEnvironments"></a>

# StaticEnvironments getTestautomationExistingresourcesEnvironments(opts)


GET /api/v2/testautomation/existingresources/environments

get all the TIM environments

Requires ANY permissions:

* admin

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.TestAutomationApi();

let opts = { 
  'pageSize': 25, // Number | Page size
  'page': 1 // Number | Page number
};

apiInstance.getTestautomationExistingresourcesEnvironments(opts)
  .then((data) => {
    console.log(`getTestautomationExistingresourcesEnvironments success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getTestautomationExistingresourcesEnvironments');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **pageSize** | **Number** | Page size | [optional] [default to 25] |
 **page** | **Number** | Page number | [optional] [default to 1] |
{: class="table table-striped"}

### Return type

**StaticEnvironments**

<a name="getTestautomationExistingresourcesOauthclient"></a>

# StaticOauthClient getTestautomationExistingresourcesOauthclient(environmentName)


GET /api/v2/testautomation/existingresources/oauthclients/{environmentName}

get a TIM OAuth Client by its environment

Requires ANY permissions:

* admin

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.TestAutomationApi();

let environmentName = "environmentName_example"; // String | environmentName

apiInstance.getTestautomationExistingresourcesOauthclient(environmentName)
  .then((data) => {
    console.log(`getTestautomationExistingresourcesOauthclient success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getTestautomationExistingresourcesOauthclient');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **environmentName** | **String** | environmentName |  |
{: class="table table-striped"}

### Return type

**StaticOauthClient**

<a name="getTestautomationExistingresourcesOauthclients"></a>

# StaticOauthClients getTestautomationExistingresourcesOauthclients(environmentName, opts)


GET /api/v2/testautomation/existingresources/oauthclients

get all the TIM OAuth Clients

Requires ANY permissions:

* admin

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.TestAutomationApi();

let environmentName = "environmentName_example"; // String | environmentName
let opts = { 
  'pageSize': 25, // Number | Page size
  'page': 1 // Number | Page number
};

apiInstance.getTestautomationExistingresourcesOauthclients(environmentName, opts)
  .then((data) => {
    console.log(`getTestautomationExistingresourcesOauthclients success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getTestautomationExistingresourcesOauthclients');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **environmentName** | **String** | environmentName |  |
 **pageSize** | **Number** | Page size | [optional] [default to 25] |
 **page** | **Number** | Page number | [optional] [default to 1] |
{: class="table table-striped"}

### Return type

**StaticOauthClients**

<a name="getTestautomationExistingresourcesOrganization"></a>

# StaticOrg getTestautomationExistingresourcesOrganization(organizationId)


GET /api/v2/testautomation/existingresources/organizations/{organizationId}

get a TIM org by its environment

Requires ANY permissions:

* admin

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.TestAutomationApi();

let organizationId = "organizationId_example"; // String | organizationId

apiInstance.getTestautomationExistingresourcesOrganization(organizationId)
  .then((data) => {
    console.log(`getTestautomationExistingresourcesOrganization success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getTestautomationExistingresourcesOrganization');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **organizationId** | **String** | organizationId |  |
{: class="table table-striped"}

### Return type

**StaticOrg**

<a name="getTestautomationExistingresourcesOrganizationUsers"></a>

# TestAutomationUsers getTestautomationExistingresourcesOrganizationUsers(organizationId, opts)


GET /api/v2/testautomation/existingresources/organizations/{organizationId}/users

get TIM users by their organization and inuse or quarantined status

Requires ANY permissions:

* admin

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.TestAutomationApi();

let organizationId = "organizationId_example"; // String | organizationId
let opts = { 
  'pageSize': 25, // Number | Page size
  'page': 1, // Number | Page number
  'status': "status_example" // String | user's status
};

apiInstance.getTestautomationExistingresourcesOrganizationUsers(organizationId, opts)
  .then((data) => {
    console.log(`getTestautomationExistingresourcesOrganizationUsers success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getTestautomationExistingresourcesOrganizationUsers');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **organizationId** | **String** | organizationId |  |
 **pageSize** | **Number** | Page size | [optional] [default to 25] |
 **page** | **Number** | Page number | [optional] [default to 1] |
 **status** | **String** | user's status | [optional]  |
{: class="table table-striped"}

### Return type

**TestAutomationUsers**

<a name="getTestautomationExistingresourcesOrganizations"></a>

# StaticOrgs getTestautomationExistingresourcesOrganizations(opts)


GET /api/v2/testautomation/existingresources/organizations

get all the TIM orgs

Requires ANY permissions:

* admin

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.TestAutomationApi();

let opts = { 
  'pageSize': 25, // Number | Page size
  'page': 1 // Number | Page number
};

apiInstance.getTestautomationExistingresourcesOrganizations(opts)
  .then((data) => {
    console.log(`getTestautomationExistingresourcesOrganizations success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getTestautomationExistingresourcesOrganizations');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **pageSize** | **Number** | Page size | [optional] [default to 25] |
 **page** | **Number** | Page number | [optional] [default to 1] |
{: class="table table-striped"}

### Return type

**StaticOrgs**

<a name="patchTestautomationExistingresourcesEnvironment"></a>

# StaticEnvironment patchTestautomationExistingresourcesEnvironment(environmentName, opts)


PATCH /api/v2/testautomation/existingresources/environments/{environmentName}

update a TIM environment

Requires ANY permissions:

* admin

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.TestAutomationApi();

let environmentName = "environmentName_example"; // String | environmentName
let opts = { 
  'body': {} // Object | Environment
};

apiInstance.patchTestautomationExistingresourcesEnvironment(environmentName, opts)
  .then((data) => {
    console.log(`patchTestautomationExistingresourcesEnvironment success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling patchTestautomationExistingresourcesEnvironment');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **environmentName** | **String** | environmentName |  |
 **body** | **Object** | Environment | [optional]  |
{: class="table table-striped"}

### Return type

**StaticEnvironment**

<a name="postTestautomationExistingresourcesEnvironmentUsers"></a>

# TimUser postTestautomationExistingresourcesEnvironmentUsers(environmentName, body, opts)


POST /api/v2/testautomation/existingresources/environments/{environmentName}/users

add a new user to the TIM service

Requires ANY permissions:

* admin

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.TestAutomationApi();

let environmentName = "environmentName_example"; // String | environmentName
let body = {}; // Object | staticUser
let opts = { 
  'setAsInUse': "setAsInUse_example", // String | new user is immediately marked as in use
  'sessionTimeoutInSeconds': "sessionTimeoutInSeconds_example" // String | new user is given an in use session timeout value
};

apiInstance.postTestautomationExistingresourcesEnvironmentUsers(environmentName, body, opts)
  .then((data) => {
    console.log(`postTestautomationExistingresourcesEnvironmentUsers success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling postTestautomationExistingresourcesEnvironmentUsers');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **environmentName** | **String** | environmentName |  |
 **body** | **Object** | staticUser |  |
 **setAsInUse** | **String** | new user is immediately marked as in use | [optional]  |
 **sessionTimeoutInSeconds** | **String** | new user is given an in use session timeout value | [optional]  |
{: class="table table-striped"}

### Return type

**TimUser**

<a name="postTestautomationExistingresourcesEnvironments"></a>

# StaticEnvironment postTestautomationExistingresourcesEnvironments(body)


POST /api/v2/testautomation/existingresources/environments

add a new environment to the TIM service

Requires ANY permissions:

* admin

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.TestAutomationApi();

let body = {}; // Object | staticEnvironment

apiInstance.postTestautomationExistingresourcesEnvironments(body)
  .then((data) => {
    console.log(`postTestautomationExistingresourcesEnvironments success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling postTestautomationExistingresourcesEnvironments');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **body** | **Object** | staticEnvironment |  |
{: class="table table-striped"}

### Return type

**StaticEnvironment**

<a name="postTestautomationExistingresourcesOrganizationUsers"></a>

# TimUser postTestautomationExistingresourcesOrganizationUsers(organizationId, body, opts)


POST /api/v2/testautomation/existingresources/organizations/{organizationId}/users

add a new user to the TIM service

Requires ANY permissions:

* admin

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.TestAutomationApi();

let organizationId = "organizationId_example"; // String | organizationId
let body = {}; // Object | staticUser
let opts = { 
  'setAsInUse': "setAsInUse_example", // String | new user is immediately marked as in use
  'sessionTimeoutInSeconds': "sessionTimeoutInSeconds_example" // String | new user is given a session timeout value
};

apiInstance.postTestautomationExistingresourcesOrganizationUsers(organizationId, body, opts)
  .then((data) => {
    console.log(`postTestautomationExistingresourcesOrganizationUsers success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling postTestautomationExistingresourcesOrganizationUsers');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **organizationId** | **String** | organizationId |  |
 **body** | **Object** | staticUser |  |
 **setAsInUse** | **String** | new user is immediately marked as in use | [optional]  |
 **sessionTimeoutInSeconds** | **String** | new user is given a session timeout value | [optional]  |
{: class="table table-striped"}

### Return type

**TimUser**

<a name="postTestautomationExistingresourcesOrganizations"></a>

# StaticOrg postTestautomationExistingresourcesOrganizations(body)


POST /api/v2/testautomation/existingresources/organizations

add a new org to the TIM service

Requires ANY permissions:

* admin

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.TestAutomationApi();

let body = {}; // Object | staticOrg

apiInstance.postTestautomationExistingresourcesOrganizations(body)
  .then((data) => {
    console.log(`postTestautomationExistingresourcesOrganizations success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling postTestautomationExistingresourcesOrganizations');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **body** | **Object** | staticOrg |  |
{: class="table table-striped"}

### Return type

**StaticOrg**

<a name="postTestautomationExistingresourcesUsersCheckin"></a>

# void postTestautomationExistingresourcesUsersCheckin(body)


POST /api/v2/testautomation/existingresources/users/checkin

check users back into the TIM service

Requires ANY permissions:

* admin

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.TestAutomationApi();

let body = {}; // Object | checkinUsers

apiInstance.postTestautomationExistingresourcesUsersCheckin(body)
  .then(() => {
    console.log('postTestautomationExistingresourcesUsersCheckin returned successfully.');
  })
  .catch((err) => {
    console.log('There was a failure calling postTestautomationExistingresourcesUsersCheckin');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **body** | **Object** | checkinUsers |  |
{: class="table table-striped"}

### Return type

void (no response body)

<a name="postTestautomationExistingresourcesUsersCheckout"></a>

# TimUser postTestautomationExistingresourcesUsersCheckout(body)


POST /api/v2/testautomation/existingresources/users/checkout

check a user out from the TIM service

Requires ANY permissions:

* admin

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.TestAutomationApi();

let body = {}; // Object | checkoutUser

apiInstance.postTestautomationExistingresourcesUsersCheckout(body)
  .then((data) => {
    console.log(`postTestautomationExistingresourcesUsersCheckout success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling postTestautomationExistingresourcesUsersCheckout');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **body** | **Object** | checkoutUser |  |
{: class="table table-striped"}

### Return type

**TimUser**

