---
title: OrganizationAuthorizationApi
---
# platformClient.OrganizationAuthorizationApi

All URIs are relative to *https://api.mypurecloud.com*

| Method | HTTP request | Description |
| ------------- | ------------- | ------------- |
[**deleteOrgauthorizationTrustee**](OrganizationAuthorizationApi.html#deleteOrgauthorizationTrustee) | **DELETE** /api/v2/orgauthorization/trustees/{trusteeOrgId} | Delete Org Trust
[**deleteOrgauthorizationTrusteeUser**](OrganizationAuthorizationApi.html#deleteOrgauthorizationTrusteeUser) | **DELETE** /api/v2/orgauthorization/trustees/{trusteeOrgId}/users/{trusteeUserId} | Delete Trustee User
[**deleteOrgauthorizationTrusteeUserRoles**](OrganizationAuthorizationApi.html#deleteOrgauthorizationTrusteeUserRoles) | **DELETE** /api/v2/orgauthorization/trustees/{trusteeOrgId}/users/{trusteeUserId}/roles | Delete Trustee User Roles
[**deleteOrgauthorizationTrustor**](OrganizationAuthorizationApi.html#deleteOrgauthorizationTrustor) | **DELETE** /api/v2/orgauthorization/trustors/{trustorOrgId} | Delete Org Trust
[**deleteOrgauthorizationTrustorUser**](OrganizationAuthorizationApi.html#deleteOrgauthorizationTrustorUser) | **DELETE** /api/v2/orgauthorization/trustors/{trustorOrgId}/users/{trusteeUserId} | Delete Trustee User
[**getOrgauthorizationPairing**](OrganizationAuthorizationApi.html#getOrgauthorizationPairing) | **GET** /api/v2/orgauthorization/pairings/{pairingId} | Get Pairing Info
[**getOrgauthorizationTrustee**](OrganizationAuthorizationApi.html#getOrgauthorizationTrustee) | **GET** /api/v2/orgauthorization/trustees/{trusteeOrgId} | Get Org Trust
[**getOrgauthorizationTrusteeUser**](OrganizationAuthorizationApi.html#getOrgauthorizationTrusteeUser) | **GET** /api/v2/orgauthorization/trustees/{trusteeOrgId}/users/{trusteeUserId} | Get Trustee User
[**getOrgauthorizationTrusteeUserRoles**](OrganizationAuthorizationApi.html#getOrgauthorizationTrusteeUserRoles) | **GET** /api/v2/orgauthorization/trustees/{trusteeOrgId}/users/{trusteeUserId}/roles | Get Trustee User Roles
[**getOrgauthorizationTrusteeUsers**](OrganizationAuthorizationApi.html#getOrgauthorizationTrusteeUsers) | **GET** /api/v2/orgauthorization/trustees/{trusteeOrgId}/users | The list of trustee users for this organization (i.e. users granted access to this organization).
[**getOrgauthorizationTrustees**](OrganizationAuthorizationApi.html#getOrgauthorizationTrustees) | **GET** /api/v2/orgauthorization/trustees | The list of trustees for this organization (i.e. organizations granted access to this organization).
[**getOrgauthorizationTrustor**](OrganizationAuthorizationApi.html#getOrgauthorizationTrustor) | **GET** /api/v2/orgauthorization/trustors/{trustorOrgId} | Get Org Trust
[**getOrgauthorizationTrustorUser**](OrganizationAuthorizationApi.html#getOrgauthorizationTrustorUser) | **GET** /api/v2/orgauthorization/trustors/{trustorOrgId}/users/{trusteeUserId} | Get Trustee User
[**getOrgauthorizationTrustorUsers**](OrganizationAuthorizationApi.html#getOrgauthorizationTrustorUsers) | **GET** /api/v2/orgauthorization/trustors/{trustorOrgId}/users | The list of users in the trustor organization (i.e. users granted access).
[**getOrgauthorizationTrustors**](OrganizationAuthorizationApi.html#getOrgauthorizationTrustors) | **GET** /api/v2/orgauthorization/trustors | The list of organizations that have authorized/trusted your organization.
[**postOrgauthorizationPairings**](OrganizationAuthorizationApi.html#postOrgauthorizationPairings) | **POST** /api/v2/orgauthorization/pairings | A pairing id is created by the trustee and given to the trustor to create a trust.
[**postOrgauthorizationTrusteeUsers**](OrganizationAuthorizationApi.html#postOrgauthorizationTrusteeUsers) | **POST** /api/v2/orgauthorization/trustees/{trusteeOrgId}/users | Add a user to the trust.
[**postOrgauthorizationTrustees**](OrganizationAuthorizationApi.html#postOrgauthorizationTrustees) | **POST** /api/v2/orgauthorization/trustees | Create a new organization authorization trust. This is required to grant other organizations access to your organization.
[**postOrgauthorizationTrusteesAudits**](OrganizationAuthorizationApi.html#postOrgauthorizationTrusteesAudits) | **POST** /api/v2/orgauthorization/trustees/audits | Get Org Trustee Audits
[**postOrgauthorizationTrustorAudits**](OrganizationAuthorizationApi.html#postOrgauthorizationTrustorAudits) | **POST** /api/v2/orgauthorization/trustor/audits | Get Org Trustor Audits
[**putOrgauthorizationTrustee**](OrganizationAuthorizationApi.html#putOrgauthorizationTrustee) | **PUT** /api/v2/orgauthorization/trustees/{trusteeOrgId} | Update Org Trust
[**putOrgauthorizationTrusteeUserRoles**](OrganizationAuthorizationApi.html#putOrgauthorizationTrusteeUserRoles) | **PUT** /api/v2/orgauthorization/trustees/{trusteeOrgId}/users/{trusteeUserId}/roles | Update Trustee User Roles
[**putOrgauthorizationTrustorUser**](OrganizationAuthorizationApi.html#putOrgauthorizationTrustorUser) | **PUT** /api/v2/orgauthorization/trustors/{trustorOrgId}/users/{trusteeUserId} | Add a Trustee user to the trust.
{: class="table table-striped"}

<a name="deleteOrgauthorizationTrustee"></a>

# void deleteOrgauthorizationTrustee(trusteeOrgId)

DELETE /api/v2/orgauthorization/trustees/{trusteeOrgId}

Delete Org Trust



### Example

~~~ javascript
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Configure OAuth2 access token for authorization: PureCloud Auth
platformClient.ApiClient.instance.authentications['PureCloud Auth'].accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new platformClient.OrganizationAuthorizationApi();

var trusteeOrgId = "trusteeOrgId_example"; // String | Trustee Organization Id

apiInstance.deleteOrgauthorizationTrustee(trusteeOrgId)
  .then(function() {
    console.log('deleteOrgauthorizationTrustee returned successfully.');
  })
  .catch(function(err) {
  	console.log('There was a failure calling deleteOrgauthorizationTrustee');
    console.error(err);
  });

~~~

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **trusteeOrgId** | **String** | Trustee Organization Id |  |
{: class="table table-striped"}

### Return type

void (no response body)

<a name="deleteOrgauthorizationTrusteeUser"></a>

# void deleteOrgauthorizationTrusteeUser(trusteeOrgId, trusteeUserId)

DELETE /api/v2/orgauthorization/trustees/{trusteeOrgId}/users/{trusteeUserId}

Delete Trustee User



### Example

~~~ javascript
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Configure OAuth2 access token for authorization: PureCloud Auth
platformClient.ApiClient.instance.authentications['PureCloud Auth'].accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new platformClient.OrganizationAuthorizationApi();

var trusteeOrgId = "trusteeOrgId_example"; // String | Trustee Organization Id

var trusteeUserId = "trusteeUserId_example"; // String | Trustee User Id

apiInstance.deleteOrgauthorizationTrusteeUser(trusteeOrgId, trusteeUserId)
  .then(function() {
    console.log('deleteOrgauthorizationTrusteeUser returned successfully.');
  })
  .catch(function(err) {
  	console.log('There was a failure calling deleteOrgauthorizationTrusteeUser');
    console.error(err);
  });

~~~

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **trusteeOrgId** | **String** | Trustee Organization Id |  |
 **trusteeUserId** | **String** | Trustee User Id |  |
{: class="table table-striped"}

### Return type

void (no response body)

<a name="deleteOrgauthorizationTrusteeUserRoles"></a>

# void deleteOrgauthorizationTrusteeUserRoles(trusteeOrgId, trusteeUserId)

DELETE /api/v2/orgauthorization/trustees/{trusteeOrgId}/users/{trusteeUserId}/roles

Delete Trustee User Roles



### Example

~~~ javascript
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Configure OAuth2 access token for authorization: PureCloud Auth
platformClient.ApiClient.instance.authentications['PureCloud Auth'].accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new platformClient.OrganizationAuthorizationApi();

var trusteeOrgId = "trusteeOrgId_example"; // String | Trustee Organization Id

var trusteeUserId = "trusteeUserId_example"; // String | Trustee User Id

apiInstance.deleteOrgauthorizationTrusteeUserRoles(trusteeOrgId, trusteeUserId)
  .then(function() {
    console.log('deleteOrgauthorizationTrusteeUserRoles returned successfully.');
  })
  .catch(function(err) {
  	console.log('There was a failure calling deleteOrgauthorizationTrusteeUserRoles');
    console.error(err);
  });

~~~

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **trusteeOrgId** | **String** | Trustee Organization Id |  |
 **trusteeUserId** | **String** | Trustee User Id |  |
{: class="table table-striped"}

### Return type

void (no response body)

<a name="deleteOrgauthorizationTrustor"></a>

# void deleteOrgauthorizationTrustor(trustorOrgId)

DELETE /api/v2/orgauthorization/trustors/{trustorOrgId}

Delete Org Trust



### Example

~~~ javascript
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Configure OAuth2 access token for authorization: PureCloud Auth
platformClient.ApiClient.instance.authentications['PureCloud Auth'].accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new platformClient.OrganizationAuthorizationApi();

var trustorOrgId = "trustorOrgId_example"; // String | Trustor Organization Id

apiInstance.deleteOrgauthorizationTrustor(trustorOrgId)
  .then(function() {
    console.log('deleteOrgauthorizationTrustor returned successfully.');
  })
  .catch(function(err) {
  	console.log('There was a failure calling deleteOrgauthorizationTrustor');
    console.error(err);
  });

~~~

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **trustorOrgId** | **String** | Trustor Organization Id |  |
{: class="table table-striped"}

### Return type

void (no response body)

<a name="deleteOrgauthorizationTrustorUser"></a>

# void deleteOrgauthorizationTrustorUser(trustorOrgId, trusteeUserId)

DELETE /api/v2/orgauthorization/trustors/{trustorOrgId}/users/{trusteeUserId}

Delete Trustee User



### Example

~~~ javascript
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Configure OAuth2 access token for authorization: PureCloud Auth
platformClient.ApiClient.instance.authentications['PureCloud Auth'].accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new platformClient.OrganizationAuthorizationApi();

var trustorOrgId = "trustorOrgId_example"; // String | Trustor Organization Id

var trusteeUserId = "trusteeUserId_example"; // String | Trustee User Id

apiInstance.deleteOrgauthorizationTrustorUser(trustorOrgId, trusteeUserId)
  .then(function() {
    console.log('deleteOrgauthorizationTrustorUser returned successfully.');
  })
  .catch(function(err) {
  	console.log('There was a failure calling deleteOrgauthorizationTrustorUser');
    console.error(err);
  });

~~~

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **trustorOrgId** | **String** | Trustor Organization Id |  |
 **trusteeUserId** | **String** | Trustee User Id |  |
{: class="table table-striped"}

### Return type

void (no response body)

<a name="getOrgauthorizationPairing"></a>

# TrustRequest getOrgauthorizationPairing(pairingId)

GET /api/v2/orgauthorization/pairings/{pairingId}

Get Pairing Info



### Example

~~~ javascript
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Configure OAuth2 access token for authorization: PureCloud Auth
platformClient.ApiClient.instance.authentications['PureCloud Auth'].accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new platformClient.OrganizationAuthorizationApi();

var pairingId = "pairingId_example"; // String | Pairing Id

apiInstance.getOrgauthorizationPairing(pairingId)
  .then(function(data) {
    console.log(`getOrgauthorizationPairing success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch(function(err) {
  	console.log('There was a failure calling getOrgauthorizationPairing');
    console.error(err);
  });

~~~

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **pairingId** | **String** | Pairing Id |  |
{: class="table table-striped"}

### Return type

**TrustRequest**

<a name="getOrgauthorizationTrustee"></a>

# Trustee getOrgauthorizationTrustee(trusteeOrgId)

GET /api/v2/orgauthorization/trustees/{trusteeOrgId}

Get Org Trust



### Example

~~~ javascript
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Configure OAuth2 access token for authorization: PureCloud Auth
platformClient.ApiClient.instance.authentications['PureCloud Auth'].accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new platformClient.OrganizationAuthorizationApi();

var trusteeOrgId = "trusteeOrgId_example"; // String | Trustee Organization Id

apiInstance.getOrgauthorizationTrustee(trusteeOrgId)
  .then(function(data) {
    console.log(`getOrgauthorizationTrustee success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch(function(err) {
  	console.log('There was a failure calling getOrgauthorizationTrustee');
    console.error(err);
  });

~~~

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **trusteeOrgId** | **String** | Trustee Organization Id |  |
{: class="table table-striped"}

### Return type

**Trustee**

<a name="getOrgauthorizationTrusteeUser"></a>

# TrustUser getOrgauthorizationTrusteeUser(trusteeOrgId, trusteeUserId)

GET /api/v2/orgauthorization/trustees/{trusteeOrgId}/users/{trusteeUserId}

Get Trustee User



### Example

~~~ javascript
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Configure OAuth2 access token for authorization: PureCloud Auth
platformClient.ApiClient.instance.authentications['PureCloud Auth'].accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new platformClient.OrganizationAuthorizationApi();

var trusteeOrgId = "trusteeOrgId_example"; // String | Trustee Organization Id

var trusteeUserId = "trusteeUserId_example"; // String | Trustee User Id

apiInstance.getOrgauthorizationTrusteeUser(trusteeOrgId, trusteeUserId)
  .then(function(data) {
    console.log(`getOrgauthorizationTrusteeUser success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch(function(err) {
  	console.log('There was a failure calling getOrgauthorizationTrusteeUser');
    console.error(err);
  });

~~~

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **trusteeOrgId** | **String** | Trustee Organization Id |  |
 **trusteeUserId** | **String** | Trustee User Id |  |
{: class="table table-striped"}

### Return type

**TrustUser**

<a name="getOrgauthorizationTrusteeUserRoles"></a>

# UserAuthorization getOrgauthorizationTrusteeUserRoles(trusteeOrgId, trusteeUserId)

GET /api/v2/orgauthorization/trustees/{trusteeOrgId}/users/{trusteeUserId}/roles

Get Trustee User Roles



### Example

~~~ javascript
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Configure OAuth2 access token for authorization: PureCloud Auth
platformClient.ApiClient.instance.authentications['PureCloud Auth'].accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new platformClient.OrganizationAuthorizationApi();

var trusteeOrgId = "trusteeOrgId_example"; // String | Trustee Organization Id

var trusteeUserId = "trusteeUserId_example"; // String | Trustee User Id

apiInstance.getOrgauthorizationTrusteeUserRoles(trusteeOrgId, trusteeUserId)
  .then(function(data) {
    console.log(`getOrgauthorizationTrusteeUserRoles success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch(function(err) {
  	console.log('There was a failure calling getOrgauthorizationTrusteeUserRoles');
    console.error(err);
  });

~~~

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **trusteeOrgId** | **String** | Trustee Organization Id |  |
 **trusteeUserId** | **String** | Trustee User Id |  |
{: class="table table-striped"}

### Return type

**UserAuthorization**

<a name="getOrgauthorizationTrusteeUsers"></a>

# TrustUserEntityListing getOrgauthorizationTrusteeUsers(trusteeOrgId, opts)

GET /api/v2/orgauthorization/trustees/{trusteeOrgId}/users

The list of trustee users for this organization (i.e. users granted access to this organization).



### Example

~~~ javascript
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Configure OAuth2 access token for authorization: PureCloud Auth
platformClient.ApiClient.instance.authentications['PureCloud Auth'].accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new platformClient.OrganizationAuthorizationApi();

var trusteeOrgId = "trusteeOrgId_example"; // String | Trustee Organization Id

var opts = { 
  'pageSize': 25, // Number | Page size
  'pageNumber': 1 // Number | Page number
};
apiInstance.getOrgauthorizationTrusteeUsers(trusteeOrgId, opts)
  .then(function(data) {
    console.log(`getOrgauthorizationTrusteeUsers success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch(function(err) {
  	console.log('There was a failure calling getOrgauthorizationTrusteeUsers');
    console.error(err);
  });

~~~

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **trusteeOrgId** | **String** | Trustee Organization Id |  |
 **pageSize** | **Number** | Page size | [optional] [default to 25] |
 **pageNumber** | **Number** | Page number | [optional] [default to 1] |
{: class="table table-striped"}

### Return type

**TrustUserEntityListing**

<a name="getOrgauthorizationTrustees"></a>

# TrustEntityListing getOrgauthorizationTrustees(opts)

GET /api/v2/orgauthorization/trustees

The list of trustees for this organization (i.e. organizations granted access to this organization).



### Example

~~~ javascript
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Configure OAuth2 access token for authorization: PureCloud Auth
platformClient.ApiClient.instance.authentications['PureCloud Auth'].accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new platformClient.OrganizationAuthorizationApi();

var opts = { 
  'pageSize': 25, // Number | Page size
  'pageNumber': 1 // Number | Page number
};
apiInstance.getOrgauthorizationTrustees(opts)
  .then(function(data) {
    console.log(`getOrgauthorizationTrustees success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch(function(err) {
  	console.log('There was a failure calling getOrgauthorizationTrustees');
    console.error(err);
  });

~~~

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **pageSize** | **Number** | Page size | [optional] [default to 25] |
 **pageNumber** | **Number** | Page number | [optional] [default to 1] |
{: class="table table-striped"}

### Return type

**TrustEntityListing**

<a name="getOrgauthorizationTrustor"></a>

# Trustor getOrgauthorizationTrustor(trustorOrgId)

GET /api/v2/orgauthorization/trustors/{trustorOrgId}

Get Org Trust



### Example

~~~ javascript
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Configure OAuth2 access token for authorization: PureCloud Auth
platformClient.ApiClient.instance.authentications['PureCloud Auth'].accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new platformClient.OrganizationAuthorizationApi();

var trustorOrgId = "trustorOrgId_example"; // String | Trustor Organization Id

apiInstance.getOrgauthorizationTrustor(trustorOrgId)
  .then(function(data) {
    console.log(`getOrgauthorizationTrustor success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch(function(err) {
  	console.log('There was a failure calling getOrgauthorizationTrustor');
    console.error(err);
  });

~~~

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **trustorOrgId** | **String** | Trustor Organization Id |  |
{: class="table table-striped"}

### Return type

**Trustor**

<a name="getOrgauthorizationTrustorUser"></a>

# TrustUser getOrgauthorizationTrustorUser(trustorOrgId, trusteeUserId)

GET /api/v2/orgauthorization/trustors/{trustorOrgId}/users/{trusteeUserId}

Get Trustee User



### Example

~~~ javascript
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Configure OAuth2 access token for authorization: PureCloud Auth
platformClient.ApiClient.instance.authentications['PureCloud Auth'].accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new platformClient.OrganizationAuthorizationApi();

var trustorOrgId = "trustorOrgId_example"; // String | Trustor Organization Id

var trusteeUserId = "trusteeUserId_example"; // String | Trustee User Id

apiInstance.getOrgauthorizationTrustorUser(trustorOrgId, trusteeUserId)
  .then(function(data) {
    console.log(`getOrgauthorizationTrustorUser success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch(function(err) {
  	console.log('There was a failure calling getOrgauthorizationTrustorUser');
    console.error(err);
  });

~~~

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **trustorOrgId** | **String** | Trustor Organization Id |  |
 **trusteeUserId** | **String** | Trustee User Id |  |
{: class="table table-striped"}

### Return type

**TrustUser**

<a name="getOrgauthorizationTrustorUsers"></a>

# TrustUserEntityListing getOrgauthorizationTrustorUsers(trustorOrgId, opts)

GET /api/v2/orgauthorization/trustors/{trustorOrgId}/users

The list of users in the trustor organization (i.e. users granted access).



### Example

~~~ javascript
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Configure OAuth2 access token for authorization: PureCloud Auth
platformClient.ApiClient.instance.authentications['PureCloud Auth'].accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new platformClient.OrganizationAuthorizationApi();

var trustorOrgId = "trustorOrgId_example"; // String | Trustee Organization Id

var opts = { 
  'pageSize': 25, // Number | Page size
  'pageNumber': 1 // Number | Page number
};
apiInstance.getOrgauthorizationTrustorUsers(trustorOrgId, opts)
  .then(function(data) {
    console.log(`getOrgauthorizationTrustorUsers success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch(function(err) {
  	console.log('There was a failure calling getOrgauthorizationTrustorUsers');
    console.error(err);
  });

~~~

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **trustorOrgId** | **String** | Trustee Organization Id |  |
 **pageSize** | **Number** | Page size | [optional] [default to 25] |
 **pageNumber** | **Number** | Page number | [optional] [default to 1] |
{: class="table table-striped"}

### Return type

**TrustUserEntityListing**

<a name="getOrgauthorizationTrustors"></a>

# TrustorEntityListing getOrgauthorizationTrustors(opts)

GET /api/v2/orgauthorization/trustors

The list of organizations that have authorized/trusted your organization.



### Example

~~~ javascript
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Configure OAuth2 access token for authorization: PureCloud Auth
platformClient.ApiClient.instance.authentications['PureCloud Auth'].accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new platformClient.OrganizationAuthorizationApi();

var opts = { 
  'pageSize': 25, // Number | Page size
  'pageNumber': 1 // Number | Page number
};
apiInstance.getOrgauthorizationTrustors(opts)
  .then(function(data) {
    console.log(`getOrgauthorizationTrustors success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch(function(err) {
  	console.log('There was a failure calling getOrgauthorizationTrustors');
    console.error(err);
  });

~~~

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **pageSize** | **Number** | Page size | [optional] [default to 25] |
 **pageNumber** | **Number** | Page number | [optional] [default to 1] |
{: class="table table-striped"}

### Return type

**TrustorEntityListing**

<a name="postOrgauthorizationPairings"></a>

# TrustRequest postOrgauthorizationPairings(body)

POST /api/v2/orgauthorization/pairings

A pairing id is created by the trustee and given to the trustor to create a trust.



### Example

~~~ javascript
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Configure OAuth2 access token for authorization: PureCloud Auth
platformClient.ApiClient.instance.authentications['PureCloud Auth'].accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new platformClient.OrganizationAuthorizationApi();

var body = {}; // Object | Pairing Info

apiInstance.postOrgauthorizationPairings(body)
  .then(function(data) {
    console.log(`postOrgauthorizationPairings success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch(function(err) {
  	console.log('There was a failure calling postOrgauthorizationPairings');
    console.error(err);
  });

~~~

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **body** | **Object** | Pairing Info |  |
{: class="table table-striped"}

### Return type

**TrustRequest**

<a name="postOrgauthorizationTrusteeUsers"></a>

# TrustUser postOrgauthorizationTrusteeUsers(trusteeOrgId, body)

POST /api/v2/orgauthorization/trustees/{trusteeOrgId}/users

Add a user to the trust.



### Example

~~~ javascript
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Configure OAuth2 access token for authorization: PureCloud Auth
platformClient.ApiClient.instance.authentications['PureCloud Auth'].accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new platformClient.OrganizationAuthorizationApi();

var trusteeOrgId = "trusteeOrgId_example"; // String | Trustee Organization Id

var body = {}; // Object | Trust

apiInstance.postOrgauthorizationTrusteeUsers(trusteeOrgId, body)
  .then(function(data) {
    console.log(`postOrgauthorizationTrusteeUsers success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch(function(err) {
  	console.log('There was a failure calling postOrgauthorizationTrusteeUsers');
    console.error(err);
  });

~~~

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **trusteeOrgId** | **String** | Trustee Organization Id |  |
 **body** | **Object** | Trust |  |
{: class="table table-striped"}

### Return type

**TrustUser**

<a name="postOrgauthorizationTrustees"></a>

# Trustee postOrgauthorizationTrustees(body)

POST /api/v2/orgauthorization/trustees

Create a new organization authorization trust. This is required to grant other organizations access to your organization.



### Example

~~~ javascript
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Configure OAuth2 access token for authorization: PureCloud Auth
platformClient.ApiClient.instance.authentications['PureCloud Auth'].accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new platformClient.OrganizationAuthorizationApi();

var body = {}; // Object | Trust

apiInstance.postOrgauthorizationTrustees(body)
  .then(function(data) {
    console.log(`postOrgauthorizationTrustees success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch(function(err) {
  	console.log('There was a failure calling postOrgauthorizationTrustees');
    console.error(err);
  });

~~~

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **body** | **Object** | Trust |  |
{: class="table table-striped"}

### Return type

**Trustee**

<a name="postOrgauthorizationTrusteesAudits"></a>

# AuditQueryResponse postOrgauthorizationTrusteesAudits(body, opts)

POST /api/v2/orgauthorization/trustees/audits

Get Org Trustee Audits



### Example

~~~ javascript
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Configure OAuth2 access token for authorization: PureCloud Auth
platformClient.ApiClient.instance.authentications['PureCloud Auth'].accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new platformClient.OrganizationAuthorizationApi();

var body = {}; // Object | Values to scope the request.

var opts = { 
  'pageSize': 25, // Number | Page size
  'pageNumber': 1, // Number | Page number
  'sortBy': "timestamp", // String | Sort by
  'sortOrder': "descending" // String | Sort order
};
apiInstance.postOrgauthorizationTrusteesAudits(body, opts)
  .then(function(data) {
    console.log(`postOrgauthorizationTrusteesAudits success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch(function(err) {
  	console.log('There was a failure calling postOrgauthorizationTrusteesAudits');
    console.error(err);
  });

~~~

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **body** | **Object** | Values to scope the request. |  |
 **pageSize** | **Number** | Page size | [optional] [default to 25] |
 **pageNumber** | **Number** | Page number | [optional] [default to 1] |
 **sortBy** | **String** | Sort by | [optional] [default to timestamp] |
 **sortOrder** | **String** | Sort order | [optional] [default to descending] |
{: class="table table-striped"}

### Return type

**AuditQueryResponse**

<a name="postOrgauthorizationTrustorAudits"></a>

# AuditQueryResponse postOrgauthorizationTrustorAudits(body, opts)

POST /api/v2/orgauthorization/trustor/audits

Get Org Trustor Audits



### Example

~~~ javascript
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Configure OAuth2 access token for authorization: PureCloud Auth
platformClient.ApiClient.instance.authentications['PureCloud Auth'].accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new platformClient.OrganizationAuthorizationApi();

var body = {}; // Object | Values to scope the request.

var opts = { 
  'pageSize': 25, // Number | Page size
  'pageNumber': 1, // Number | Page number
  'sortBy': "timestamp", // String | Sort by
  'sortOrder': "descending" // String | Sort order
};
apiInstance.postOrgauthorizationTrustorAudits(body, opts)
  .then(function(data) {
    console.log(`postOrgauthorizationTrustorAudits success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch(function(err) {
  	console.log('There was a failure calling postOrgauthorizationTrustorAudits');
    console.error(err);
  });

~~~

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **body** | **Object** | Values to scope the request. |  |
 **pageSize** | **Number** | Page size | [optional] [default to 25] |
 **pageNumber** | **Number** | Page number | [optional] [default to 1] |
 **sortBy** | **String** | Sort by | [optional] [default to timestamp] |
 **sortOrder** | **String** | Sort order | [optional] [default to descending] |
{: class="table table-striped"}

### Return type

**AuditQueryResponse**

<a name="putOrgauthorizationTrustee"></a>

# Trustee putOrgauthorizationTrustee(trusteeOrgId, body)

PUT /api/v2/orgauthorization/trustees/{trusteeOrgId}

Update Org Trust



### Example

~~~ javascript
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Configure OAuth2 access token for authorization: PureCloud Auth
platformClient.ApiClient.instance.authentications['PureCloud Auth'].accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new platformClient.OrganizationAuthorizationApi();

var trusteeOrgId = "trusteeOrgId_example"; // String | Trustee Organization Id

var body = {}; // Object | Client

apiInstance.putOrgauthorizationTrustee(trusteeOrgId, body)
  .then(function(data) {
    console.log(`putOrgauthorizationTrustee success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch(function(err) {
  	console.log('There was a failure calling putOrgauthorizationTrustee');
    console.error(err);
  });

~~~

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **trusteeOrgId** | **String** | Trustee Organization Id |  |
 **body** | **Object** | Client |  |
{: class="table table-striped"}

### Return type

**Trustee**

<a name="putOrgauthorizationTrusteeUserRoles"></a>

# UserAuthorization putOrgauthorizationTrusteeUserRoles(trusteeOrgId, trusteeUserId, body)

PUT /api/v2/orgauthorization/trustees/{trusteeOrgId}/users/{trusteeUserId}/roles

Update Trustee User Roles



### Example

~~~ javascript
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Configure OAuth2 access token for authorization: PureCloud Auth
platformClient.ApiClient.instance.authentications['PureCloud Auth'].accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new platformClient.OrganizationAuthorizationApi();

var trusteeOrgId = "trusteeOrgId_example"; // String | Trustee Organization Id

var trusteeUserId = "trusteeUserId_example"; // String | Trustee User Id

var body = [{}]; // Object | List of roles

apiInstance.putOrgauthorizationTrusteeUserRoles(trusteeOrgId, trusteeUserId, body)
  .then(function(data) {
    console.log(`putOrgauthorizationTrusteeUserRoles success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch(function(err) {
  	console.log('There was a failure calling putOrgauthorizationTrusteeUserRoles');
    console.error(err);
  });

~~~

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **trusteeOrgId** | **String** | Trustee Organization Id |  |
 **trusteeUserId** | **String** | Trustee User Id |  |
 **body** | **Object** | List of roles |  |
{: class="table table-striped"}

### Return type

**UserAuthorization**

<a name="putOrgauthorizationTrustorUser"></a>

# TrustUser putOrgauthorizationTrustorUser(trustorOrgId, trusteeUserId)

PUT /api/v2/orgauthorization/trustors/{trustorOrgId}/users/{trusteeUserId}

Add a Trustee user to the trust.



### Example

~~~ javascript
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Configure OAuth2 access token for authorization: PureCloud Auth
platformClient.ApiClient.instance.authentications['PureCloud Auth'].accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new platformClient.OrganizationAuthorizationApi();

var trustorOrgId = "trustorOrgId_example"; // String | Trustor Organization Id

var trusteeUserId = "trusteeUserId_example"; // String | Trustee User Id

apiInstance.putOrgauthorizationTrustorUser(trustorOrgId, trusteeUserId)
  .then(function(data) {
    console.log(`putOrgauthorizationTrustorUser success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch(function(err) {
  	console.log('There was a failure calling putOrgauthorizationTrustorUser');
    console.error(err);
  });

~~~

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **trustorOrgId** | **String** | Trustor Organization Id |  |
 **trusteeUserId** | **String** | Trustee User Id |  |
{: class="table table-striped"}

### Return type

**TrustUser**

