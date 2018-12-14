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



Requires ANY permissions: 

* authorization:orgTrustee:delete



### Example Usage

~~~ javascript
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Configure OAuth2 access token for authorization: PureCloud OAuth
platformClient.ApiClient.instance.authentications['PureCloud OAuth'].accessToken = 'YOUR ACCESS TOKEN';

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



Requires ANY permissions: 

* authorization:orgTrusteeUser:delete
* admin
* role_manager



### Example Usage

~~~ javascript
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Configure OAuth2 access token for authorization: PureCloud OAuth
platformClient.ApiClient.instance.authentications['PureCloud OAuth'].accessToken = 'YOUR ACCESS TOKEN';

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



Requires ANY permissions: 

* authorization:orgTrusteeUser:delete
* admin
* role_manager



### Example Usage

~~~ javascript
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Configure OAuth2 access token for authorization: PureCloud OAuth
platformClient.ApiClient.instance.authentications['PureCloud OAuth'].accessToken = 'YOUR ACCESS TOKEN';

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



Requires ANY permissions: 

* authorization:orgTrustor:delete



### Example Usage

~~~ javascript
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Configure OAuth2 access token for authorization: PureCloud OAuth
platformClient.ApiClient.instance.authentications['PureCloud OAuth'].accessToken = 'YOUR ACCESS TOKEN';

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



Requires ANY permissions: 

* authorization:orgTrusteeUser:delete



### Example Usage

~~~ javascript
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Configure OAuth2 access token for authorization: PureCloud OAuth
platformClient.ApiClient.instance.authentications['PureCloud OAuth'].accessToken = 'YOUR ACCESS TOKEN';

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



Requires ANY permissions: 

* authorization:orgTrustee:view
* authorization:orgTrustor:view



### Example Usage

~~~ javascript
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Configure OAuth2 access token for authorization: PureCloud OAuth
platformClient.ApiClient.instance.authentications['PureCloud OAuth'].accessToken = 'YOUR ACCESS TOKEN';

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



Requires ANY permissions: 

* authorization:orgTrustee:view



### Example Usage

~~~ javascript
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Configure OAuth2 access token for authorization: PureCloud OAuth
platformClient.ApiClient.instance.authentications['PureCloud OAuth'].accessToken = 'YOUR ACCESS TOKEN';

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



Requires ANY permissions: 

* authorization:orgTrusteeUser:view



### Example Usage

~~~ javascript
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Configure OAuth2 access token for authorization: PureCloud OAuth
platformClient.ApiClient.instance.authentications['PureCloud OAuth'].accessToken = 'YOUR ACCESS TOKEN';

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



Requires ANY permissions: 

* authorization:orgTrusteeUser:view



### Example Usage

~~~ javascript
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Configure OAuth2 access token for authorization: PureCloud OAuth
platformClient.ApiClient.instance.authentications['PureCloud OAuth'].accessToken = 'YOUR ACCESS TOKEN';

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



Requires ANY permissions: 

* authorization:orgTrusteeUser:view



### Example Usage

~~~ javascript
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Configure OAuth2 access token for authorization: PureCloud OAuth
platformClient.ApiClient.instance.authentications['PureCloud OAuth'].accessToken = 'YOUR ACCESS TOKEN';

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



Requires ANY permissions: 

* authorization:orgTrustee:view



### Example Usage

~~~ javascript
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Configure OAuth2 access token for authorization: PureCloud OAuth
platformClient.ApiClient.instance.authentications['PureCloud OAuth'].accessToken = 'YOUR ACCESS TOKEN';

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



Requires ANY permissions: 

* authorization:orgTrustor:view



### Example Usage

~~~ javascript
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Configure OAuth2 access token for authorization: PureCloud OAuth
platformClient.ApiClient.instance.authentications['PureCloud OAuth'].accessToken = 'YOUR ACCESS TOKEN';

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



Requires ANY permissions: 

* authorization:orgTrusteeUser:view



### Example Usage

~~~ javascript
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Configure OAuth2 access token for authorization: PureCloud OAuth
platformClient.ApiClient.instance.authentications['PureCloud OAuth'].accessToken = 'YOUR ACCESS TOKEN';

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



Requires ANY permissions: 

* authorization:orgTrusteeUser:view



### Example Usage

~~~ javascript
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Configure OAuth2 access token for authorization: PureCloud OAuth
platformClient.ApiClient.instance.authentications['PureCloud OAuth'].accessToken = 'YOUR ACCESS TOKEN';

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



Requires ANY permissions: 

* authorization:orgTrustor:view



### Example Usage

~~~ javascript
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Configure OAuth2 access token for authorization: PureCloud OAuth
platformClient.ApiClient.instance.authentications['PureCloud OAuth'].accessToken = 'YOUR ACCESS TOKEN';

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



Requires ANY permissions: 

* authorization:orgTrustee:add


### Request Body Schema

{::options parse_block_html="true" /}

<script type="text/javascript">
	function copyTrustRequestCreateExample() {
		var $temp = $("<textarea>");
		$("body").append($temp);
		$temp.val($('#TrustRequestCreateExample').text()).select();
		document.execCommand("copy");
		$temp.remove();
	}
</script>

TrustRequestCreate <a style="cursor: pointer" onclick="copyTrustRequestCreateExample()">Copy</a>

<div id="TrustRequestCreateExample" style="max-height: 250px; overflow-y: scroll;">
~~~ json
{ 
  "userIds": [String], 
  "groupIds": [String], 
}
~~~
</div>


### Example Usage

~~~ javascript
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Configure OAuth2 access token for authorization: PureCloud OAuth
platformClient.ApiClient.instance.authentications['PureCloud OAuth'].accessToken = 'YOUR ACCESS TOKEN';

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



Requires ALL permissions: 

* authorization:orgTrusteeUser:add
* admin
* role_manager


### Request Body Schema

{::options parse_block_html="true" /}

<script type="text/javascript">
	function copyTrustMemberCreateExample() {
		var $temp = $("<textarea>");
		$("body").append($temp);
		$temp.val($('#TrustMemberCreateExample').text()).select();
		document.execCommand("copy");
		$temp.remove();
	}
</script>

TrustMemberCreate <a style="cursor: pointer" onclick="copyTrustMemberCreateExample()">Copy</a>

<div id="TrustMemberCreateExample" style="max-height: 250px; overflow-y: scroll;">
~~~ json
{ 
  "id": String, 
  "roleIds": [String], 
}
~~~
</div>


### Example Usage

~~~ javascript
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Configure OAuth2 access token for authorization: PureCloud OAuth
platformClient.ApiClient.instance.authentications['PureCloud OAuth'].accessToken = 'YOUR ACCESS TOKEN';

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



Requires ALL permissions: 

* authorization:orgTrustee:add
* authorization:orgTrusteeUser:add


### Request Body Schema

{::options parse_block_html="true" /}

<script type="text/javascript">
	function copyTrustCreateExample() {
		var $temp = $("<textarea>");
		$("body").append($temp);
		$temp.val($('#TrustCreateExample').text()).select();
		document.execCommand("copy");
		$temp.remove();
	}
</script>

TrustCreate <a style="cursor: pointer" onclick="copyTrustCreateExample()">Copy</a>

<div id="TrustCreateExample" style="max-height: 250px; overflow-y: scroll;">
~~~ json
{ 
  "pairingId": String, 
  "enabled": Boolean, 
  "users": { 
    "id": String, 
    "roleIds": [String], 
  },  
  "groups": { 
    "id": String, 
    "roleIds": [String], 
  },  
}
~~~
</div>


### Example Usage

~~~ javascript
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Configure OAuth2 access token for authorization: PureCloud OAuth
platformClient.ApiClient.instance.authentications['PureCloud OAuth'].accessToken = 'YOUR ACCESS TOKEN';

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



Requires ANY permissions: 

* authorization:audit:view


### Request Body Schema

{::options parse_block_html="true" /}

<script type="text/javascript">
	function copyTrusteeAuditQueryRequestExample() {
		var $temp = $("<textarea>");
		$("body").append($temp);
		$temp.val($('#TrusteeAuditQueryRequestExample').text()).select();
		document.execCommand("copy");
		$temp.remove();
	}
</script>

TrusteeAuditQueryRequest <a style="cursor: pointer" onclick="copyTrusteeAuditQueryRequestExample()">Copy</a>

<div id="TrusteeAuditQueryRequestExample" style="max-height: 250px; overflow-y: scroll;">
~~~ json
{ 
  "trusteeOrganizationIds": [String], 
  "trusteeUserIds": [String], 
  "startDate": Date, 
  "endDate": Date, 
  "queryPhrase": String, 
  "facets": { 
    "name": String, 
    "type": String, 
  },  
  "filters": { 
    "name": String, 
    "type": String, 
    "operator": String, 
    "values": [String], 
  },  
}
~~~
</div>


### Example Usage

~~~ javascript
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Configure OAuth2 access token for authorization: PureCloud OAuth
platformClient.ApiClient.instance.authentications['PureCloud OAuth'].accessToken = 'YOUR ACCESS TOKEN';

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



Requires ANY permissions: 

* authorization:audit:view


### Request Body Schema

{::options parse_block_html="true" /}

<script type="text/javascript">
	function copyTrustorAuditQueryRequestExample() {
		var $temp = $("<textarea>");
		$("body").append($temp);
		$temp.val($('#TrustorAuditQueryRequestExample').text()).select();
		document.execCommand("copy");
		$temp.remove();
	}
</script>

TrustorAuditQueryRequest <a style="cursor: pointer" onclick="copyTrustorAuditQueryRequestExample()">Copy</a>

<div id="TrustorAuditQueryRequestExample" style="max-height: 250px; overflow-y: scroll;">
~~~ json
{ 
  "trustorOrganizationId": String, 
  "trusteeUserIds": [String], 
  "startDate": Date, 
  "endDate": Date, 
  "queryPhrase": String, 
  "facets": { 
    "name": String, 
    "type": String, 
  },  
  "filters": { 
    "name": String, 
    "type": String, 
    "operator": String, 
    "values": [String], 
  },  
}
~~~
</div>


### Example Usage

~~~ javascript
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Configure OAuth2 access token for authorization: PureCloud OAuth
platformClient.ApiClient.instance.authentications['PureCloud OAuth'].accessToken = 'YOUR ACCESS TOKEN';

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



Requires ANY permissions: 

* authorization:orgTrustee:edit


### Request Body Schema

{::options parse_block_html="true" /}

<script type="text/javascript">
	function copyTrusteeExample() {
		var $temp = $("<textarea>");
		$("body").append($temp);
		$temp.val($('#TrusteeExample').text()).select();
		document.execCommand("copy");
		$temp.remove();
	}
</script>

Trustee <a style="cursor: pointer" onclick="copyTrusteeExample()">Copy</a>

<div id="TrusteeExample" style="max-height: 250px; overflow-y: scroll;">
~~~ json
{ 
  "id": String, 
  "enabled": Boolean, 
  "dateCreated": Date, 
  "createdBy": { 
    "id": String, 
    "name": String, 
    "division": { 
      "id": String, 
      "name": String, 
      "selfUri": String, 
    },  
    "chat": { 
      "jabberId": String, 
    },  
    "department": String, 
    "email": String, 
    "primaryContactInfo": { 
      "address": String, 
      "display": String, 
      "mediaType": String, 
      "type": String, 
      "extension": String, 
    },  
    "addresses": { 
      "address": String, 
      "display": String, 
      "mediaType": String, 
      "type": String, 
      "extension": String, 
    },  
    "state": String, 
    "title": String, 
    "username": String, 
    "manager": { 
      "id": String, 
      "name": String, 
      "division": { 
        "id": String, 
        "name": String, 
        "selfUri": String, 
      },  
      "chat": { 
        "jabberId": String, 
      },  
      "department": String, 
      "email": String, 
      "primaryContactInfo": { 
        "address": String, 
        "display": String, 
        "mediaType": String, 
        "type": String, 
        "extension": String, 
      },  
      "addresses": { 
        "address": String, 
        "display": String, 
        "mediaType": String, 
        "type": String, 
        "extension": String, 
      },  
      "state": String, 
      "title": String, 
      "username": String, 
      "manager": User, 
      "images": { 
        "resolution": String, 
        "imageUri": String, 
      },  
      "version": Number, 
      "routingStatus": { 
        "userId": String, 
        "status": String, 
        "startTime": Date, 
      },  
      "presence": { 
        "id": String, 
        "name": String, 
        "source": String, 
        "primary": Boolean, 
        "presenceDefinition": { 
          "id": String, 
          "systemPresence": String, 
          "selfUri": String, 
        },  
        "message": String, 
        "modifiedDate": Date, 
        "selfUri": String, 
      },  
      "conversationSummary": { 
        "userId": String, 
        "call": { 
          "contactCenter": { 
            "active": Number, 
            "acw": Number, 
          },  
          "enterprise": { 
            "active": Number, 
            "acw": Number, 
          },  
        },  
        "callback": { 
          "contactCenter": { 
            "active": Number, 
            "acw": Number, 
          },  
          "enterprise": { 
            "active": Number, 
            "acw": Number, 
          },  
        },  
        "email": { 
          "contactCenter": { 
            "active": Number, 
            "acw": Number, 
          },  
          "enterprise": { 
            "active": Number, 
            "acw": Number, 
          },  
        },  
        "message": { 
          "contactCenter": { 
            "active": Number, 
            "acw": Number, 
          },  
          "enterprise": { 
            "active": Number, 
            "acw": Number, 
          },  
        },  
        "chat": { 
          "contactCenter": { 
            "active": Number, 
            "acw": Number, 
          },  
          "enterprise": { 
            "active": Number, 
            "acw": Number, 
          },  
        },  
        "socialExpression": { 
          "contactCenter": { 
            "active": Number, 
            "acw": Number, 
          },  
          "enterprise": { 
            "active": Number, 
            "acw": Number, 
          },  
        },  
        "video": { 
          "contactCenter": { 
            "active": Number, 
            "acw": Number, 
          },  
          "enterprise": { 
            "active": Number, 
            "acw": Number, 
          },  
        },  
      },  
      "outOfOffice": { 
        "id": String, 
        "name": String, 
        "user": User, 
        "startDate": Date, 
        "endDate": Date, 
        "active": Boolean, 
        "indefinite": Boolean, 
        "selfUri": String, 
      },  
      "geolocation": { 
        "id": String, 
        "name": String, 
        "type": String, 
        "primary": Boolean, 
        "latitude": Number, 
        "longitude": Number, 
        "country": String, 
        "region": String, 
        "city": String, 
        "locations": { 
          "id": String, 
          "name": String, 
          "address": { 
            "city": String, 
            "country": String, 
            "countryName": String, 
            "state": String, 
            "street1": String, 
            "street2": String, 
            "zipcode": String, 
          },  
          "addressVerified": Boolean, 
          "emergencyNumber": { 
            "e164": String, 
            "number": String, 
            "type": String, 
          },  
          "state": String, 
          "version": Number, 
          "path": [String], 
          "selfUri": String, 
        },  
        "selfUri": String, 
      },  
      "station": { 
        "associatedStation": { 
          "id": String, 
          "name": String, 
          "type": String, 
          "associatedUser": User, 
          "associatedDate": Date, 
          "defaultUser": User, 
          "providerInfo": {String: String}, 
        },  
        "effectiveStation": { 
          "id": String, 
          "name": String, 
          "type": String, 
          "associatedUser": User, 
          "associatedDate": Date, 
          "defaultUser": User, 
          "providerInfo": {String: String}, 
        },  
        "defaultStation": { 
          "id": String, 
          "name": String, 
          "type": String, 
          "associatedUser": User, 
          "associatedDate": Date, 
          "defaultUser": User, 
          "providerInfo": {String: String}, 
        },  
        "lastAssociatedStation": { 
          "id": String, 
          "name": String, 
          "type": String, 
          "associatedUser": User, 
          "associatedDate": Date, 
          "defaultUser": User, 
          "providerInfo": {String: String}, 
        },  
      },  
      "authorization": { 
        "roles": { 
          "id": String, 
          "name": String, 
        },  
        "permissions": [String], 
        "permissionPolicies": { 
          "id": String, 
          "domain": String, 
          "entityName": String, 
          "policyName": String, 
          "policyDescription": String, 
          "actionSetKey": String, 
          "allowConditions": Boolean, 
          "resourceConditionNode": { 
            "variableName": String, 
            "conjunction": String, 
            "operator": String, 
            "operands": { 
              "type": String, 
              "value": String, 
            },  
            "terms": { 
              "variableName": String, 
              "conjunction": String, 
              "operator": String, 
              "operands": { 
                "type": String, 
                "value": String, 
              },  
              "terms": { 
                "variableName": String, 
                "conjunction": String, 
                "operator": String, 
                "operands": [ResourceConditionValue], 
                "terms": [ResourceConditionNode], 
              },  
            },  
          },  
          "namedResources": [String], 
          "resourceCondition": String, 
          "actionSet": [String], 
        },  
      },  
      "profileSkills": [String], 
      "locations": { 
        "id": String, 
        "floorplanId": String, 
        "coordinates": {String: Number}, 
        "notes": String, 
        "locationDefinition": { 
          "id": String, 
          "name": String, 
          "address": { 
            "city": String, 
            "country": String, 
            "countryName": String, 
            "state": String, 
            "street1": String, 
            "street2": String, 
            "zipcode": String, 
          },  
          "addressVerified": Boolean, 
          "emergencyNumber": { 
            "e164": String, 
            "number": String, 
            "type": String, 
          },  
          "state": String, 
          "version": Number, 
          "path": [String], 
          "selfUri": String, 
        },  
      },  
      "groups": { 
        "id": String, 
        "name": String, 
        "description": String, 
        "dateModified": Date, 
        "memberCount": Number, 
        "state": String, 
        "version": Number, 
        "type": String, 
        "images": { 
          "resolution": String, 
          "imageUri": String, 
        },  
        "addresses": { 
          "address": String, 
          "display": String, 
          "type": String, 
          "mediaType": String, 
        },  
        "rulesVisible": Boolean, 
        "visibility": String, 
        "owners": User, 
        "selfUri": String, 
      },  
      "skills": { 
        "id": String, 
        "name": String, 
        "proficiency": Number, 
        "state": String, 
        "skillUri": String, 
        "selfUri": String, 
      },  
      "languages": { 
        "id": String, 
        "name": String, 
        "proficiency": Number, 
        "state": String, 
        "languageUri": String, 
        "selfUri": String, 
      },  
      "acdAutoAnswer": Boolean, 
      "languagePreference": String, 
      "selfUri": String, 
    },  
    "images": { 
      "resolution": String, 
      "imageUri": String, 
    },  
    "version": Number, 
    "routingStatus": { 
      "userId": String, 
      "status": String, 
      "startTime": Date, 
    },  
    "presence": { 
      "id": String, 
      "name": String, 
      "source": String, 
      "primary": Boolean, 
      "presenceDefinition": { 
        "id": String, 
        "systemPresence": String, 
        "selfUri": String, 
      },  
      "message": String, 
      "modifiedDate": Date, 
      "selfUri": String, 
    },  
    "conversationSummary": { 
      "userId": String, 
      "call": { 
        "contactCenter": { 
          "active": Number, 
          "acw": Number, 
        },  
        "enterprise": { 
          "active": Number, 
          "acw": Number, 
        },  
      },  
      "callback": { 
        "contactCenter": { 
          "active": Number, 
          "acw": Number, 
        },  
        "enterprise": { 
          "active": Number, 
          "acw": Number, 
        },  
      },  
      "email": { 
        "contactCenter": { 
          "active": Number, 
          "acw": Number, 
        },  
        "enterprise": { 
          "active": Number, 
          "acw": Number, 
        },  
      },  
      "message": { 
        "contactCenter": { 
          "active": Number, 
          "acw": Number, 
        },  
        "enterprise": { 
          "active": Number, 
          "acw": Number, 
        },  
      },  
      "chat": { 
        "contactCenter": { 
          "active": Number, 
          "acw": Number, 
        },  
        "enterprise": { 
          "active": Number, 
          "acw": Number, 
        },  
      },  
      "socialExpression": { 
        "contactCenter": { 
          "active": Number, 
          "acw": Number, 
        },  
        "enterprise": { 
          "active": Number, 
          "acw": Number, 
        },  
      },  
      "video": { 
        "contactCenter": { 
          "active": Number, 
          "acw": Number, 
        },  
        "enterprise": { 
          "active": Number, 
          "acw": Number, 
        },  
      },  
    },  
    "outOfOffice": { 
      "id": String, 
      "name": String, 
      "user": User, 
      "startDate": Date, 
      "endDate": Date, 
      "active": Boolean, 
      "indefinite": Boolean, 
      "selfUri": String, 
    },  
    "geolocation": { 
      "id": String, 
      "name": String, 
      "type": String, 
      "primary": Boolean, 
      "latitude": Number, 
      "longitude": Number, 
      "country": String, 
      "region": String, 
      "city": String, 
      "locations": { 
        "id": String, 
        "name": String, 
        "address": { 
          "city": String, 
          "country": String, 
          "countryName": String, 
          "state": String, 
          "street1": String, 
          "street2": String, 
          "zipcode": String, 
        },  
        "addressVerified": Boolean, 
        "emergencyNumber": { 
          "e164": String, 
          "number": String, 
          "type": String, 
        },  
        "state": String, 
        "version": Number, 
        "path": [String], 
        "selfUri": String, 
      },  
      "selfUri": String, 
    },  
    "station": { 
      "associatedStation": { 
        "id": String, 
        "name": String, 
        "type": String, 
        "associatedUser": User, 
        "associatedDate": Date, 
        "defaultUser": User, 
        "providerInfo": {String: String}, 
      },  
      "effectiveStation": { 
        "id": String, 
        "name": String, 
        "type": String, 
        "associatedUser": User, 
        "associatedDate": Date, 
        "defaultUser": User, 
        "providerInfo": {String: String}, 
      },  
      "defaultStation": { 
        "id": String, 
        "name": String, 
        "type": String, 
        "associatedUser": User, 
        "associatedDate": Date, 
        "defaultUser": User, 
        "providerInfo": {String: String}, 
      },  
      "lastAssociatedStation": { 
        "id": String, 
        "name": String, 
        "type": String, 
        "associatedUser": User, 
        "associatedDate": Date, 
        "defaultUser": User, 
        "providerInfo": {String: String}, 
      },  
    },  
    "authorization": { 
      "roles": { 
        "id": String, 
        "name": String, 
      },  
      "permissions": [String], 
      "permissionPolicies": { 
        "id": String, 
        "domain": String, 
        "entityName": String, 
        "policyName": String, 
        "policyDescription": String, 
        "actionSetKey": String, 
        "allowConditions": Boolean, 
        "resourceConditionNode": { 
          "variableName": String, 
          "conjunction": String, 
          "operator": String, 
          "operands": { 
            "type": String, 
            "value": String, 
          },  
          "terms": { 
            "variableName": String, 
            "conjunction": String, 
            "operator": String, 
            "operands": { 
              "type": String, 
              "value": String, 
            },  
            "terms": { 
              "variableName": String, 
              "conjunction": String, 
              "operator": String, 
              "operands": { 
                "type": String, 
                "value": String, 
              },  
              "terms": { 
                "variableName": String, 
                "conjunction": String, 
                "operator": String, 
                "operands": [ResourceConditionValue], 
                "terms": [ResourceConditionNode], 
              },  
            },  
          },  
        },  
        "namedResources": [String], 
        "resourceCondition": String, 
        "actionSet": [String], 
      },  
    },  
    "profileSkills": [String], 
    "locations": { 
      "id": String, 
      "floorplanId": String, 
      "coordinates": {String: Number}, 
      "notes": String, 
      "locationDefinition": { 
        "id": String, 
        "name": String, 
        "address": { 
          "city": String, 
          "country": String, 
          "countryName": String, 
          "state": String, 
          "street1": String, 
          "street2": String, 
          "zipcode": String, 
        },  
        "addressVerified": Boolean, 
        "emergencyNumber": { 
          "e164": String, 
          "number": String, 
          "type": String, 
        },  
        "state": String, 
        "version": Number, 
        "path": [String], 
        "selfUri": String, 
      },  
    },  
    "groups": { 
      "id": String, 
      "name": String, 
      "description": String, 
      "dateModified": Date, 
      "memberCount": Number, 
      "state": String, 
      "version": Number, 
      "type": String, 
      "images": { 
        "resolution": String, 
        "imageUri": String, 
      },  
      "addresses": { 
        "address": String, 
        "display": String, 
        "type": String, 
        "mediaType": String, 
      },  
      "rulesVisible": Boolean, 
      "visibility": String, 
      "owners": User, 
      "selfUri": String, 
    },  
    "skills": { 
      "id": String, 
      "name": String, 
      "proficiency": Number, 
      "state": String, 
      "skillUri": String, 
      "selfUri": String, 
    },  
    "languages": { 
      "id": String, 
      "name": String, 
      "proficiency": Number, 
      "state": String, 
      "languageUri": String, 
      "selfUri": String, 
    },  
    "acdAutoAnswer": Boolean, 
    "languagePreference": String, 
    "organization": { 
      "id": String, 
      "name": String, 
      "defaultLanguage": String, 
      "defaultCountryCode": String, 
      "thirdPartyOrgName": String, 
      "thirdPartyURI": String, 
      "domain": String, 
      "version": Number, 
      "state": String, 
      "defaultSiteId": String, 
      "supportURI": String, 
      "voicemailEnabled": Boolean, 
      "selfUri": String, 
      "features": {String: Boolean}, 
    },  
  },  
  "organization": { 
    "id": String, 
    "name": String, 
    "defaultLanguage": String, 
    "defaultCountryCode": String, 
    "thirdPartyOrgName": String, 
    "thirdPartyURI": String, 
    "domain": String, 
    "version": Number, 
    "state": String, 
    "defaultSiteId": String, 
    "supportURI": String, 
    "voicemailEnabled": Boolean, 
    "selfUri": String, 
    "features": {String: Boolean}, 
  },  
  "selfUri": String, 
}
~~~
</div>


### Example Usage

~~~ javascript
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Configure OAuth2 access token for authorization: PureCloud OAuth
platformClient.ApiClient.instance.authentications['PureCloud OAuth'].accessToken = 'YOUR ACCESS TOKEN';

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



Requires ANY permissions: 

* authorization:orgTrusteeUser:edit
* admin
* role_manager



### Example Usage

~~~ javascript
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Configure OAuth2 access token for authorization: PureCloud OAuth
platformClient.ApiClient.instance.authentications['PureCloud OAuth'].accessToken = 'YOUR ACCESS TOKEN';

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



Requires ALL permissions: 

* authorization:orgTrusteeUser:add



### Example Usage

~~~ javascript
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Configure OAuth2 access token for authorization: PureCloud OAuth
platformClient.ApiClient.instance.authentications['PureCloud OAuth'].accessToken = 'YOUR ACCESS TOKEN';

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

