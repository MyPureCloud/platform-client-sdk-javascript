---
title: OnboardingApi
---
# platformClient.OnboardingApi

All URIs are relative to *https://api.inindca.com*

| Method | HTTP request | Description |
| ------------- | ------------- | ------------- |
[**deleteOnboardingInvite**](OnboardingApi.html#deleteOnboardingInvite) | **DELETE** /api/v2/onboarding/invites/{inviteId} | Delete an invite
[**deleteOnboardingJoincode**](OnboardingApi.html#deleteOnboardingJoincode) | **DELETE** /api/v2/onboarding/joincodes/{joinCodeId} | Delete a join code
[**getOnboardingActivation**](OnboardingApi.html#getOnboardingActivation) | **GET** /api/v2/onboarding/activations/{activationId} | Get org billing activation
[**getOnboardingInvite**](OnboardingApi.html#getOnboardingInvite) | **GET** /api/v2/onboarding/invites/{inviteId} | Get invite
[**getOnboardingInvites**](OnboardingApi.html#getOnboardingInvites) | **GET** /api/v2/onboarding/invites | Get all invites for org
[**getOnboardingJoincode**](OnboardingApi.html#getOnboardingJoincode) | **GET** /api/v2/onboarding/joincodes/{joinCodeId} | Get join code
[**getOnboardingJoincodes**](OnboardingApi.html#getOnboardingJoincodes) | **GET** /api/v2/onboarding/joincodes | Get all join codes for org
[**getOnboardingOrgprovisioning**](OnboardingApi.html#getOnboardingOrgprovisioning) | **GET** /api/v2/onboarding/orgprovisionings/{provisioningId} | Get org provisioning
[**headOnboardingOrganizationUsers**](OnboardingApi.html#headOnboardingOrganizationUsers) | **HEAD** /api/v2/onboarding/organizations/{organizationId}/users | Verify a user exists
[**postOnboardingActivationApply**](OnboardingApi.html#postOnboardingActivationApply) | **POST** /api/v2/onboarding/activations/{activationId}/apply | Apply org billing activation
[**postOnboardingJoincodes**](OnboardingApi.html#postOnboardingJoincodes) | **POST** /api/v2/onboarding/joincodes | Create a join code
[**postOnboardingOrgprovisioningComplete**](OnboardingApi.html#postOnboardingOrgprovisioningComplete) | **POST** /api/v2/onboarding/orgprovisionings/{provisioningId}/complete | Complete org provisioning process
[**postOnboardingOrgprovisionings**](OnboardingApi.html#postOnboardingOrgprovisionings) | **POST** /api/v2/onboarding/orgprovisionings | Stage org provisioning for org creation
[**postOnboardingUsers**](OnboardingApi.html#postOnboardingUsers) | **POST** /api/v2/onboarding/users | Create user in organization
[**postOnboardingUsersJoinexistingorgs**](OnboardingApi.html#postOnboardingUsersJoinexistingorgs) | **POST** /api/v2/onboarding/users/joinexistingorgs | Allows user to join organization or multiple organizations
[**postOnboardingUsersStage**](OnboardingApi.html#postOnboardingUsersStage) | **POST** /api/v2/onboarding/users/stage | Prepare user for creation
[**putOnboardingJoincode**](OnboardingApi.html#putOnboardingJoincode) | **PUT** /api/v2/onboarding/joincodes/{joinCodeId} | Update a join code
{: class="table table-striped"}

<a name="deleteOnboardingInvite"></a>

# void deleteOnboardingInvite(inviteId)


DELETE /api/v2/onboarding/invites/{inviteId}

Delete an invite

Requires ANY permissions:

* invite:actions:delete

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.OnboardingApi();

let inviteId = "inviteId_example"; // String | inviteId

apiInstance.deleteOnboardingInvite(inviteId)
  .then(() => {
    console.log('deleteOnboardingInvite returned successfully.');
  })
  .catch((err) => {
    console.log('There was a failure calling deleteOnboardingInvite');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **inviteId** | **String** | inviteId |  |
{: class="table table-striped"}

### Return type

void (no response body)

<a name="deleteOnboardingJoincode"></a>

# void deleteOnboardingJoincode(joinCodeId)


DELETE /api/v2/onboarding/joincodes/{joinCodeId}

Delete a join code

Requires ANY permissions:

* joinCode:actions:delete

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.OnboardingApi();

let joinCodeId = "joinCodeId_example"; // String | joinCodeId

apiInstance.deleteOnboardingJoincode(joinCodeId)
  .then(() => {
    console.log('deleteOnboardingJoincode returned successfully.');
  })
  .catch((err) => {
    console.log('There was a failure calling deleteOnboardingJoincode');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **joinCodeId** | **String** | joinCodeId |  |
{: class="table table-striped"}

### Return type

void (no response body)

<a name="getOnboardingActivation"></a>

# OrgBillingActivation getOnboardingActivation(activationId)


GET /api/v2/onboarding/activations/{activationId}

Get org billing activation

Requires NO permissions:

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

let apiInstance = new platformClient.OnboardingApi();

let activationId = "activationId_example"; // String | activationId

apiInstance.getOnboardingActivation(activationId)
  .then((data) => {
    console.log(`getOnboardingActivation success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getOnboardingActivation');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **activationId** | **String** | activationId |  |
{: class="table table-striped"}

### Return type

**OrgBillingActivation**

<a name="getOnboardingInvite"></a>

# Invite getOnboardingInvite(inviteId)


GET /api/v2/onboarding/invites/{inviteId}

Get invite

Requires NO permissions:

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

let apiInstance = new platformClient.OnboardingApi();

let inviteId = "inviteId_example"; // String | inviteId

apiInstance.getOnboardingInvite(inviteId)
  .then((data) => {
    console.log(`getOnboardingInvite success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getOnboardingInvite');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **inviteId** | **String** | inviteId |  |
{: class="table table-striped"}

### Return type

**Invite**

<a name="getOnboardingInvites"></a>

# InviteListing getOnboardingInvites(opts)


GET /api/v2/onboarding/invites

Get all invites for org

Requires ANY permissions:

* invite:actions:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.OnboardingApi();

let opts = { 
  'pageNumber': 1, // Number | 
  'pageSize': 25 // Number | 
};

apiInstance.getOnboardingInvites(opts)
  .then((data) => {
    console.log(`getOnboardingInvites success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getOnboardingInvites');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **pageNumber** | **Number** |  | [optional] [default to 1] |
 **pageSize** | **Number** |  | [optional] [default to 25] |
{: class="table table-striped"}

### Return type

**InviteListing**

<a name="getOnboardingJoincode"></a>

# JoinCode getOnboardingJoincode(joinCodeId, opts)


GET /api/v2/onboarding/joincodes/{joinCodeId}

Get join code

Requires NO permissions:

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

let apiInstance = new platformClient.OnboardingApi();

let joinCodeId = "joinCodeId_example"; // String | joinCodeId
let opts = { 
  'emailDomain': "emailDomain_example" // String | Email Domain
};

apiInstance.getOnboardingJoincode(joinCodeId, opts)
  .then((data) => {
    console.log(`getOnboardingJoincode success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getOnboardingJoincode');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **joinCodeId** | **String** | joinCodeId |  |
 **emailDomain** | **String** | Email Domain | [optional]  |
{: class="table table-striped"}

### Return type

**JoinCode**

<a name="getOnboardingJoincodes"></a>

# JoinCodeListing getOnboardingJoincodes(opts)


GET /api/v2/onboarding/joincodes

Get all join codes for org

Requires ANY permissions:

* joinCode:actions:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.OnboardingApi();

let opts = { 
  'pageNumber': 1, // Number | 
  'pageSize': 25 // Number | 
};

apiInstance.getOnboardingJoincodes(opts)
  .then((data) => {
    console.log(`getOnboardingJoincodes success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getOnboardingJoincodes');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **pageNumber** | **Number** |  | [optional] [default to 1] |
 **pageSize** | **Number** |  | [optional] [default to 25] |
{: class="table table-striped"}

### Return type

**JoinCodeListing**

<a name="getOnboardingOrgprovisioning"></a>

# OrgProvisioning getOnboardingOrgprovisioning(provisioningId, opts)


GET /api/v2/onboarding/orgprovisionings/{provisioningId}

Get org provisioning

Requires NO permissions:

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

let apiInstance = new platformClient.OnboardingApi();

let provisioningId = "provisioningId_example"; // String | provisioningId
let opts = { 
  'existingOrganizationId': "existingOrganizationId_example", // String | Existing Organization Id
  'billingActivationJob': true // Boolean | Is a Billing activation job request
};

apiInstance.getOnboardingOrgprovisioning(provisioningId, opts)
  .then((data) => {
    console.log(`getOnboardingOrgprovisioning success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getOnboardingOrgprovisioning');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **provisioningId** | **String** | provisioningId |  |
 **existingOrganizationId** | **String** | Existing Organization Id | [optional]  |
 **billingActivationJob** | **Boolean** | Is a Billing activation job request | [optional]  |
{: class="table table-striped"}

### Return type

**OrgProvisioning**

<a name="headOnboardingOrganizationUsers"></a>

# void headOnboardingOrganizationUsers(organizationId, email)


HEAD /api/v2/onboarding/organizations/{organizationId}/users

Verify a user exists

Returns a 200 OK if user exists, and a 404 Not Found if it doesnt

Requires NO permissions:

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

let apiInstance = new platformClient.OnboardingApi();

let organizationId = "organizationId_example"; // String | organizationId
let email = "email_example"; // String | User email

apiInstance.headOnboardingOrganizationUsers(organizationId, email)
  .then(() => {
    console.log('headOnboardingOrganizationUsers returned successfully.');
  })
  .catch((err) => {
    console.log('There was a failure calling headOnboardingOrganizationUsers');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **organizationId** | **String** | organizationId |  |
 **email** | **String** | User email |  |
{: class="table table-striped"}

### Return type

void (no response body)

<a name="postOnboardingActivationApply"></a>

# ApplyOrgBillingActivationResponse postOnboardingActivationApply(activationId, opts)


POST /api/v2/onboarding/activations/{activationId}/apply

Apply org billing activation

Requires NO permissions:

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

let apiInstance = new platformClient.OnboardingApi();

let activationId = "activationId_example"; // String | activationId
let opts = { 
  'body': {} // Object | Input used to complete org billing activation process
};

apiInstance.postOnboardingActivationApply(activationId, opts)
  .then((data) => {
    console.log(`postOnboardingActivationApply success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling postOnboardingActivationApply');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **activationId** | **String** | activationId |  |
 **body** | **Object** | Input used to complete org billing activation process | [optional]  |
{: class="table table-striped"}

### Return type

**ApplyOrgBillingActivationResponse**

<a name="postOnboardingJoincodes"></a>

# JoinCode postOnboardingJoincodes(opts)


POST /api/v2/onboarding/joincodes

Create a join code

Requires ANY permissions:

* joinCode:actions:create

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.OnboardingApi();

let opts = { 
  'body': {} // Object | Input used to create a join code
};

apiInstance.postOnboardingJoincodes(opts)
  .then((data) => {
    console.log(`postOnboardingJoincodes success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling postOnboardingJoincodes');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **body** | **Object** | Input used to create a join code | [optional]  |
{: class="table table-striped"}

### Return type

**JoinCode**

<a name="postOnboardingOrgprovisioningComplete"></a>

# CompleteOrgProvisioningResponse postOnboardingOrgprovisioningComplete(provisioningId, opts)


POST /api/v2/onboarding/orgprovisionings/{provisioningId}/complete

Complete org provisioning process

Requires NO permissions:

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

let apiInstance = new platformClient.OnboardingApi();

let provisioningId = "provisioningId_example"; // String | provisioningId
let opts = { 
  'body': {} // Object | Input used to complete org provisioning process
};

apiInstance.postOnboardingOrgprovisioningComplete(provisioningId, opts)
  .then((data) => {
    console.log(`postOnboardingOrgprovisioningComplete success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling postOnboardingOrgprovisioningComplete');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **provisioningId** | **String** | provisioningId |  |
 **body** | **Object** | Input used to complete org provisioning process | [optional]  |
{: class="table table-striped"}

### Return type

**CompleteOrgProvisioningResponse**

<a name="postOnboardingOrgprovisionings"></a>

# StageOrgProvisioningResponse postOnboardingOrgprovisionings(opts)


POST /api/v2/onboarding/orgprovisionings

Stage org provisioning for org creation

Requires NO permissions:

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

let apiInstance = new platformClient.OnboardingApi();

let opts = { 
  'body': {} // Object | Input used to stage an org
};

apiInstance.postOnboardingOrgprovisionings(opts)
  .then((data) => {
    console.log(`postOnboardingOrgprovisionings success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling postOnboardingOrgprovisionings');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **body** | **Object** | Input used to stage an org | [optional]  |
{: class="table table-striped"}

### Return type

**StageOrgProvisioningResponse**

<a name="postOnboardingUsers"></a>

# CreateUserResponse postOnboardingUsers(opts)


POST /api/v2/onboarding/users

Create user in organization

Requires NO permissions:

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

let apiInstance = new platformClient.OnboardingApi();

let opts = { 
  'body': {} // Object | Input used to create a user
};

apiInstance.postOnboardingUsers(opts)
  .then((data) => {
    console.log(`postOnboardingUsers success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling postOnboardingUsers');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **body** | **Object** | Input used to create a user | [optional]  |
{: class="table table-striped"}

### Return type

**CreateUserResponse**

<a name="postOnboardingUsersJoinexistingorgs"></a>

# JoinExistingOrgsResponse postOnboardingUsersJoinexistingorgs(opts)


POST /api/v2/onboarding/users/joinexistingorgs

Allows user to join organization or multiple organizations

Requires NO permissions:

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

let apiInstance = new platformClient.OnboardingApi();

let opts = { 
  'body': {} // Object | Input used to have a user join an org or orgs
};

apiInstance.postOnboardingUsersJoinexistingorgs(opts)
  .then((data) => {
    console.log(`postOnboardingUsersJoinexistingorgs success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling postOnboardingUsersJoinexistingorgs');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **body** | **Object** | Input used to have a user join an org or orgs | [optional]  |
{: class="table table-striped"}

### Return type

**JoinExistingOrgsResponse**

<a name="postOnboardingUsersStage"></a>

# void postOnboardingUsersStage(opts)


POST /api/v2/onboarding/users/stage

Prepare user for creation

Requires NO permissions:

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

let apiInstance = new platformClient.OnboardingApi();

let opts = { 
  'body': {} // Object | Input used to stage a user
};

apiInstance.postOnboardingUsersStage(opts)
  .then(() => {
    console.log('postOnboardingUsersStage returned successfully.');
  })
  .catch((err) => {
    console.log('There was a failure calling postOnboardingUsersStage');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **body** | **Object** | Input used to stage a user | [optional]  |
{: class="table table-striped"}

### Return type

void (no response body)

<a name="putOnboardingJoincode"></a>

# void putOnboardingJoincode(joinCodeId, opts)


PUT /api/v2/onboarding/joincodes/{joinCodeId}

Update a join code

Requires ANY permissions:

* joinCode:actions:update

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.OnboardingApi();

let joinCodeId = "joinCodeId_example"; // String | joinCodeId
let opts = { 
  'body': {} // Object | Input used to update a join code
};

apiInstance.putOnboardingJoincode(joinCodeId, opts)
  .then(() => {
    console.log('putOnboardingJoincode returned successfully.');
  })
  .catch((err) => {
    console.log('There was a failure calling putOnboardingJoincode');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **joinCodeId** | **String** | joinCodeId |  |
 **body** | **Object** | Input used to update a join code | [optional]  |
{: class="table table-striped"}

### Return type

void (no response body)

