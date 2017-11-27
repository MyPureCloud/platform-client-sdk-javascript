---
title: IdentityProviderApi
---
# platformClient.IdentityProviderApi

All URIs are relative to *https://api.mypurecloud.com*

| Method | HTTP request | Description |
| ------------- | ------------- | ------------- |
[**deleteIdentityprovidersAdfs**](IdentityProviderApi.html#deleteIdentityprovidersAdfs) | **DELETE** /api/v2/identityproviders/adfs | Delete ADFS Identity Provider
[**deleteIdentityprovidersCic**](IdentityProviderApi.html#deleteIdentityprovidersCic) | **DELETE** /api/v2/identityproviders/cic | Delete Customer Interaction Center (CIC) Identity Provider
[**deleteIdentityprovidersGsuite**](IdentityProviderApi.html#deleteIdentityprovidersGsuite) | **DELETE** /api/v2/identityproviders/gsuite | Delete G Suite Identity Provider
[**deleteIdentityprovidersIdentitynow**](IdentityProviderApi.html#deleteIdentityprovidersIdentitynow) | **DELETE** /api/v2/identityproviders/identitynow | Delete IdentityNow Provider
[**deleteIdentityprovidersOkta**](IdentityProviderApi.html#deleteIdentityprovidersOkta) | **DELETE** /api/v2/identityproviders/okta | Delete Okta Identity Provider
[**deleteIdentityprovidersOnelogin**](IdentityProviderApi.html#deleteIdentityprovidersOnelogin) | **DELETE** /api/v2/identityproviders/onelogin | Delete OneLogin Identity Provider
[**deleteIdentityprovidersPing**](IdentityProviderApi.html#deleteIdentityprovidersPing) | **DELETE** /api/v2/identityproviders/ping | Delete Ping Identity Provider
[**deleteIdentityprovidersPurecloud**](IdentityProviderApi.html#deleteIdentityprovidersPurecloud) | **DELETE** /api/v2/identityproviders/purecloud | Delete PureCloud Identity Provider
[**deleteIdentityprovidersSalesforce**](IdentityProviderApi.html#deleteIdentityprovidersSalesforce) | **DELETE** /api/v2/identityproviders/salesforce | Delete Salesforce Identity Provider
[**getIdentityproviders**](IdentityProviderApi.html#getIdentityproviders) | **GET** /api/v2/identityproviders | The list of identity providers
[**getIdentityprovidersAdfs**](IdentityProviderApi.html#getIdentityprovidersAdfs) | **GET** /api/v2/identityproviders/adfs | Get ADFS Identity Provider
[**getIdentityprovidersCic**](IdentityProviderApi.html#getIdentityprovidersCic) | **GET** /api/v2/identityproviders/cic | Get Customer Interaction Center (CIC) Identity Provider
[**getIdentityprovidersGsuite**](IdentityProviderApi.html#getIdentityprovidersGsuite) | **GET** /api/v2/identityproviders/gsuite | Get G Suite Identity Provider
[**getIdentityprovidersIdentitynow**](IdentityProviderApi.html#getIdentityprovidersIdentitynow) | **GET** /api/v2/identityproviders/identitynow | Get IdentityNow Provider
[**getIdentityprovidersOkta**](IdentityProviderApi.html#getIdentityprovidersOkta) | **GET** /api/v2/identityproviders/okta | Get Okta Identity Provider
[**getIdentityprovidersOnelogin**](IdentityProviderApi.html#getIdentityprovidersOnelogin) | **GET** /api/v2/identityproviders/onelogin | Get OneLogin Identity Provider
[**getIdentityprovidersPing**](IdentityProviderApi.html#getIdentityprovidersPing) | **GET** /api/v2/identityproviders/ping | Get Ping Identity Provider
[**getIdentityprovidersPurecloud**](IdentityProviderApi.html#getIdentityprovidersPurecloud) | **GET** /api/v2/identityproviders/purecloud | Get PureCloud Identity Provider
[**getIdentityprovidersSalesforce**](IdentityProviderApi.html#getIdentityprovidersSalesforce) | **GET** /api/v2/identityproviders/salesforce | Get Salesforce Identity Provider
[**putIdentityprovidersAdfs**](IdentityProviderApi.html#putIdentityprovidersAdfs) | **PUT** /api/v2/identityproviders/adfs | Update/Create ADFS Identity Provider
[**putIdentityprovidersCic**](IdentityProviderApi.html#putIdentityprovidersCic) | **PUT** /api/v2/identityproviders/cic | Update/Create Customer Interaction Center (CIC) Identity Provider
[**putIdentityprovidersGsuite**](IdentityProviderApi.html#putIdentityprovidersGsuite) | **PUT** /api/v2/identityproviders/gsuite | Update/Create G Suite Identity Provider
[**putIdentityprovidersIdentitynow**](IdentityProviderApi.html#putIdentityprovidersIdentitynow) | **PUT** /api/v2/identityproviders/identitynow | Update/Create IdentityNow Provider
[**putIdentityprovidersOkta**](IdentityProviderApi.html#putIdentityprovidersOkta) | **PUT** /api/v2/identityproviders/okta | Update/Create Okta Identity Provider
[**putIdentityprovidersOnelogin**](IdentityProviderApi.html#putIdentityprovidersOnelogin) | **PUT** /api/v2/identityproviders/onelogin | Update/Create OneLogin Identity Provider
[**putIdentityprovidersPing**](IdentityProviderApi.html#putIdentityprovidersPing) | **PUT** /api/v2/identityproviders/ping | Update/Create Ping Identity Provider
[**putIdentityprovidersPurecloud**](IdentityProviderApi.html#putIdentityprovidersPurecloud) | **PUT** /api/v2/identityproviders/purecloud | Update/Create PureCloud Identity Provider
[**putIdentityprovidersSalesforce**](IdentityProviderApi.html#putIdentityprovidersSalesforce) | **PUT** /api/v2/identityproviders/salesforce | Update/Create Salesforce Identity Provider
{: class="table table-striped"}

<a name="deleteIdentityprovidersAdfs"></a>

# Empty deleteIdentityprovidersAdfs()

DELETE /api/v2/identityproviders/adfs

Delete ADFS Identity Provider



### Example

~~~ javascript
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Configure OAuth2 access token for authorization: PureCloud Auth
platformClient.ApiClient.instance.authentications['PureCloud Auth'].accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new platformClient.IdentityProviderApi();
apiInstance.deleteIdentityprovidersAdfs()
  .then(function(data) {
    console.log(`deleteIdentityprovidersAdfs success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch(function(err) {
  	console.log('There was a failure calling deleteIdentityprovidersAdfs');
    console.error(err);
  });

~~~

### Parameters

This endpoint does not need any parameter.
{: class="table table-striped"}

### Return type

**Empty**

<a name="deleteIdentityprovidersCic"></a>

# Empty deleteIdentityprovidersCic()

DELETE /api/v2/identityproviders/cic

Delete Customer Interaction Center (CIC) Identity Provider



### Example

~~~ javascript
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Configure OAuth2 access token for authorization: PureCloud Auth
platformClient.ApiClient.instance.authentications['PureCloud Auth'].accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new platformClient.IdentityProviderApi();
apiInstance.deleteIdentityprovidersCic()
  .then(function(data) {
    console.log(`deleteIdentityprovidersCic success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch(function(err) {
  	console.log('There was a failure calling deleteIdentityprovidersCic');
    console.error(err);
  });

~~~

### Parameters

This endpoint does not need any parameter.
{: class="table table-striped"}

### Return type

**Empty**

<a name="deleteIdentityprovidersGsuite"></a>

# Empty deleteIdentityprovidersGsuite()

DELETE /api/v2/identityproviders/gsuite

Delete G Suite Identity Provider



### Example

~~~ javascript
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Configure OAuth2 access token for authorization: PureCloud Auth
platformClient.ApiClient.instance.authentications['PureCloud Auth'].accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new platformClient.IdentityProviderApi();
apiInstance.deleteIdentityprovidersGsuite()
  .then(function(data) {
    console.log(`deleteIdentityprovidersGsuite success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch(function(err) {
  	console.log('There was a failure calling deleteIdentityprovidersGsuite');
    console.error(err);
  });

~~~

### Parameters

This endpoint does not need any parameter.
{: class="table table-striped"}

### Return type

**Empty**

<a name="deleteIdentityprovidersIdentitynow"></a>

# Empty deleteIdentityprovidersIdentitynow()

DELETE /api/v2/identityproviders/identitynow

Delete IdentityNow Provider



### Example

~~~ javascript
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Configure OAuth2 access token for authorization: PureCloud Auth
platformClient.ApiClient.instance.authentications['PureCloud Auth'].accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new platformClient.IdentityProviderApi();
apiInstance.deleteIdentityprovidersIdentitynow()
  .then(function(data) {
    console.log(`deleteIdentityprovidersIdentitynow success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch(function(err) {
  	console.log('There was a failure calling deleteIdentityprovidersIdentitynow');
    console.error(err);
  });

~~~

### Parameters

This endpoint does not need any parameter.
{: class="table table-striped"}

### Return type

**Empty**

<a name="deleteIdentityprovidersOkta"></a>

# Empty deleteIdentityprovidersOkta()

DELETE /api/v2/identityproviders/okta

Delete Okta Identity Provider



### Example

~~~ javascript
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Configure OAuth2 access token for authorization: PureCloud Auth
platformClient.ApiClient.instance.authentications['PureCloud Auth'].accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new platformClient.IdentityProviderApi();
apiInstance.deleteIdentityprovidersOkta()
  .then(function(data) {
    console.log(`deleteIdentityprovidersOkta success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch(function(err) {
  	console.log('There was a failure calling deleteIdentityprovidersOkta');
    console.error(err);
  });

~~~

### Parameters

This endpoint does not need any parameter.
{: class="table table-striped"}

### Return type

**Empty**

<a name="deleteIdentityprovidersOnelogin"></a>

# Empty deleteIdentityprovidersOnelogin()

DELETE /api/v2/identityproviders/onelogin

Delete OneLogin Identity Provider



### Example

~~~ javascript
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Configure OAuth2 access token for authorization: PureCloud Auth
platformClient.ApiClient.instance.authentications['PureCloud Auth'].accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new platformClient.IdentityProviderApi();
apiInstance.deleteIdentityprovidersOnelogin()
  .then(function(data) {
    console.log(`deleteIdentityprovidersOnelogin success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch(function(err) {
  	console.log('There was a failure calling deleteIdentityprovidersOnelogin');
    console.error(err);
  });

~~~

### Parameters

This endpoint does not need any parameter.
{: class="table table-striped"}

### Return type

**Empty**

<a name="deleteIdentityprovidersPing"></a>

# Empty deleteIdentityprovidersPing()

DELETE /api/v2/identityproviders/ping

Delete Ping Identity Provider



### Example

~~~ javascript
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Configure OAuth2 access token for authorization: PureCloud Auth
platformClient.ApiClient.instance.authentications['PureCloud Auth'].accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new platformClient.IdentityProviderApi();
apiInstance.deleteIdentityprovidersPing()
  .then(function(data) {
    console.log(`deleteIdentityprovidersPing success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch(function(err) {
  	console.log('There was a failure calling deleteIdentityprovidersPing');
    console.error(err);
  });

~~~

### Parameters

This endpoint does not need any parameter.
{: class="table table-striped"}

### Return type

**Empty**

<a name="deleteIdentityprovidersPurecloud"></a>

# Empty deleteIdentityprovidersPurecloud()

DELETE /api/v2/identityproviders/purecloud

Delete PureCloud Identity Provider



### Example

~~~ javascript
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Configure OAuth2 access token for authorization: PureCloud Auth
platformClient.ApiClient.instance.authentications['PureCloud Auth'].accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new platformClient.IdentityProviderApi();
apiInstance.deleteIdentityprovidersPurecloud()
  .then(function(data) {
    console.log(`deleteIdentityprovidersPurecloud success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch(function(err) {
  	console.log('There was a failure calling deleteIdentityprovidersPurecloud');
    console.error(err);
  });

~~~

### Parameters

This endpoint does not need any parameter.
{: class="table table-striped"}

### Return type

**Empty**

<a name="deleteIdentityprovidersSalesforce"></a>

# Empty deleteIdentityprovidersSalesforce()

DELETE /api/v2/identityproviders/salesforce

Delete Salesforce Identity Provider



### Example

~~~ javascript
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Configure OAuth2 access token for authorization: PureCloud Auth
platformClient.ApiClient.instance.authentications['PureCloud Auth'].accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new platformClient.IdentityProviderApi();
apiInstance.deleteIdentityprovidersSalesforce()
  .then(function(data) {
    console.log(`deleteIdentityprovidersSalesforce success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch(function(err) {
  	console.log('There was a failure calling deleteIdentityprovidersSalesforce');
    console.error(err);
  });

~~~

### Parameters

This endpoint does not need any parameter.
{: class="table table-striped"}

### Return type

**Empty**

<a name="getIdentityproviders"></a>

# OAuthProviderEntityListing getIdentityproviders()

GET /api/v2/identityproviders

The list of identity providers



### Example

~~~ javascript
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Configure OAuth2 access token for authorization: PureCloud Auth
platformClient.ApiClient.instance.authentications['PureCloud Auth'].accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new platformClient.IdentityProviderApi();
apiInstance.getIdentityproviders()
  .then(function(data) {
    console.log(`getIdentityproviders success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch(function(err) {
  	console.log('There was a failure calling getIdentityproviders');
    console.error(err);
  });

~~~

### Parameters

This endpoint does not need any parameter.
{: class="table table-striped"}

### Return type

**OAuthProviderEntityListing**

<a name="getIdentityprovidersAdfs"></a>

# ADFS getIdentityprovidersAdfs()

GET /api/v2/identityproviders/adfs

Get ADFS Identity Provider



### Example

~~~ javascript
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Configure OAuth2 access token for authorization: PureCloud Auth
platformClient.ApiClient.instance.authentications['PureCloud Auth'].accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new platformClient.IdentityProviderApi();
apiInstance.getIdentityprovidersAdfs()
  .then(function(data) {
    console.log(`getIdentityprovidersAdfs success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch(function(err) {
  	console.log('There was a failure calling getIdentityprovidersAdfs');
    console.error(err);
  });

~~~

### Parameters

This endpoint does not need any parameter.
{: class="table table-striped"}

### Return type

**ADFS**

<a name="getIdentityprovidersCic"></a>

# CustomerInteractionCenter getIdentityprovidersCic()

GET /api/v2/identityproviders/cic

Get Customer Interaction Center (CIC) Identity Provider



### Example

~~~ javascript
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Configure OAuth2 access token for authorization: PureCloud Auth
platformClient.ApiClient.instance.authentications['PureCloud Auth'].accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new platformClient.IdentityProviderApi();
apiInstance.getIdentityprovidersCic()
  .then(function(data) {
    console.log(`getIdentityprovidersCic success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch(function(err) {
  	console.log('There was a failure calling getIdentityprovidersCic');
    console.error(err);
  });

~~~

### Parameters

This endpoint does not need any parameter.
{: class="table table-striped"}

### Return type

**CustomerInteractionCenter**

<a name="getIdentityprovidersGsuite"></a>

# GSuite getIdentityprovidersGsuite()

GET /api/v2/identityproviders/gsuite

Get G Suite Identity Provider



### Example

~~~ javascript
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Configure OAuth2 access token for authorization: PureCloud Auth
platformClient.ApiClient.instance.authentications['PureCloud Auth'].accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new platformClient.IdentityProviderApi();
apiInstance.getIdentityprovidersGsuite()
  .then(function(data) {
    console.log(`getIdentityprovidersGsuite success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch(function(err) {
  	console.log('There was a failure calling getIdentityprovidersGsuite');
    console.error(err);
  });

~~~

### Parameters

This endpoint does not need any parameter.
{: class="table table-striped"}

### Return type

**GSuite**

<a name="getIdentityprovidersIdentitynow"></a>

# IdentityNow getIdentityprovidersIdentitynow()

GET /api/v2/identityproviders/identitynow

Get IdentityNow Provider



### Example

~~~ javascript
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Configure OAuth2 access token for authorization: PureCloud Auth
platformClient.ApiClient.instance.authentications['PureCloud Auth'].accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new platformClient.IdentityProviderApi();
apiInstance.getIdentityprovidersIdentitynow()
  .then(function(data) {
    console.log(`getIdentityprovidersIdentitynow success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch(function(err) {
  	console.log('There was a failure calling getIdentityprovidersIdentitynow');
    console.error(err);
  });

~~~

### Parameters

This endpoint does not need any parameter.
{: class="table table-striped"}

### Return type

**IdentityNow**

<a name="getIdentityprovidersOkta"></a>

# Okta getIdentityprovidersOkta()

GET /api/v2/identityproviders/okta

Get Okta Identity Provider



### Example

~~~ javascript
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Configure OAuth2 access token for authorization: PureCloud Auth
platformClient.ApiClient.instance.authentications['PureCloud Auth'].accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new platformClient.IdentityProviderApi();
apiInstance.getIdentityprovidersOkta()
  .then(function(data) {
    console.log(`getIdentityprovidersOkta success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch(function(err) {
  	console.log('There was a failure calling getIdentityprovidersOkta');
    console.error(err);
  });

~~~

### Parameters

This endpoint does not need any parameter.
{: class="table table-striped"}

### Return type

**Okta**

<a name="getIdentityprovidersOnelogin"></a>

# OneLogin getIdentityprovidersOnelogin()

GET /api/v2/identityproviders/onelogin

Get OneLogin Identity Provider



### Example

~~~ javascript
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Configure OAuth2 access token for authorization: PureCloud Auth
platformClient.ApiClient.instance.authentications['PureCloud Auth'].accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new platformClient.IdentityProviderApi();
apiInstance.getIdentityprovidersOnelogin()
  .then(function(data) {
    console.log(`getIdentityprovidersOnelogin success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch(function(err) {
  	console.log('There was a failure calling getIdentityprovidersOnelogin');
    console.error(err);
  });

~~~

### Parameters

This endpoint does not need any parameter.
{: class="table table-striped"}

### Return type

**OneLogin**

<a name="getIdentityprovidersPing"></a>

# PingIdentity getIdentityprovidersPing()

GET /api/v2/identityproviders/ping

Get Ping Identity Provider



### Example

~~~ javascript
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Configure OAuth2 access token for authorization: PureCloud Auth
platformClient.ApiClient.instance.authentications['PureCloud Auth'].accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new platformClient.IdentityProviderApi();
apiInstance.getIdentityprovidersPing()
  .then(function(data) {
    console.log(`getIdentityprovidersPing success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch(function(err) {
  	console.log('There was a failure calling getIdentityprovidersPing');
    console.error(err);
  });

~~~

### Parameters

This endpoint does not need any parameter.
{: class="table table-striped"}

### Return type

**PingIdentity**

<a name="getIdentityprovidersPurecloud"></a>

# PureCloud getIdentityprovidersPurecloud()

GET /api/v2/identityproviders/purecloud

Get PureCloud Identity Provider



### Example

~~~ javascript
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Configure OAuth2 access token for authorization: PureCloud Auth
platformClient.ApiClient.instance.authentications['PureCloud Auth'].accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new platformClient.IdentityProviderApi();
apiInstance.getIdentityprovidersPurecloud()
  .then(function(data) {
    console.log(`getIdentityprovidersPurecloud success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch(function(err) {
  	console.log('There was a failure calling getIdentityprovidersPurecloud');
    console.error(err);
  });

~~~

### Parameters

This endpoint does not need any parameter.
{: class="table table-striped"}

### Return type

**PureCloud**

<a name="getIdentityprovidersSalesforce"></a>

# Salesforce getIdentityprovidersSalesforce()

GET /api/v2/identityproviders/salesforce

Get Salesforce Identity Provider



### Example

~~~ javascript
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Configure OAuth2 access token for authorization: PureCloud Auth
platformClient.ApiClient.instance.authentications['PureCloud Auth'].accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new platformClient.IdentityProviderApi();
apiInstance.getIdentityprovidersSalesforce()
  .then(function(data) {
    console.log(`getIdentityprovidersSalesforce success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch(function(err) {
  	console.log('There was a failure calling getIdentityprovidersSalesforce');
    console.error(err);
  });

~~~

### Parameters

This endpoint does not need any parameter.
{: class="table table-striped"}

### Return type

**Salesforce**

<a name="putIdentityprovidersAdfs"></a>

# OAuthProvider putIdentityprovidersAdfs(body)

PUT /api/v2/identityproviders/adfs

Update/Create ADFS Identity Provider



### Example

~~~ javascript
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Configure OAuth2 access token for authorization: PureCloud Auth
platformClient.ApiClient.instance.authentications['PureCloud Auth'].accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new platformClient.IdentityProviderApi();

var body = {}; // Object | Provider

apiInstance.putIdentityprovidersAdfs(body)
  .then(function(data) {
    console.log(`putIdentityprovidersAdfs success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch(function(err) {
  	console.log('There was a failure calling putIdentityprovidersAdfs');
    console.error(err);
  });

~~~

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **body** | **Object** | Provider |  |
{: class="table table-striped"}

### Return type

**OAuthProvider**

<a name="putIdentityprovidersCic"></a>

# OAuthProvider putIdentityprovidersCic(body)

PUT /api/v2/identityproviders/cic

Update/Create Customer Interaction Center (CIC) Identity Provider



### Example

~~~ javascript
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Configure OAuth2 access token for authorization: PureCloud Auth
platformClient.ApiClient.instance.authentications['PureCloud Auth'].accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new platformClient.IdentityProviderApi();

var body = {}; // Object | Provider

apiInstance.putIdentityprovidersCic(body)
  .then(function(data) {
    console.log(`putIdentityprovidersCic success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch(function(err) {
  	console.log('There was a failure calling putIdentityprovidersCic');
    console.error(err);
  });

~~~

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **body** | **Object** | Provider |  |
{: class="table table-striped"}

### Return type

**OAuthProvider**

<a name="putIdentityprovidersGsuite"></a>

# OAuthProvider putIdentityprovidersGsuite(body)

PUT /api/v2/identityproviders/gsuite

Update/Create G Suite Identity Provider



### Example

~~~ javascript
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Configure OAuth2 access token for authorization: PureCloud Auth
platformClient.ApiClient.instance.authentications['PureCloud Auth'].accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new platformClient.IdentityProviderApi();

var body = {}; // Object | Provider

apiInstance.putIdentityprovidersGsuite(body)
  .then(function(data) {
    console.log(`putIdentityprovidersGsuite success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch(function(err) {
  	console.log('There was a failure calling putIdentityprovidersGsuite');
    console.error(err);
  });

~~~

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **body** | **Object** | Provider |  |
{: class="table table-striped"}

### Return type

**OAuthProvider**

<a name="putIdentityprovidersIdentitynow"></a>

# IdentityNow putIdentityprovidersIdentitynow(body)

PUT /api/v2/identityproviders/identitynow

Update/Create IdentityNow Provider



### Example

~~~ javascript
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Configure OAuth2 access token for authorization: PureCloud Auth
platformClient.ApiClient.instance.authentications['PureCloud Auth'].accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new platformClient.IdentityProviderApi();

var body = {}; // Object | Provider

apiInstance.putIdentityprovidersIdentitynow(body)
  .then(function(data) {
    console.log(`putIdentityprovidersIdentitynow success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch(function(err) {
  	console.log('There was a failure calling putIdentityprovidersIdentitynow');
    console.error(err);
  });

~~~

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **body** | **Object** | Provider |  |
{: class="table table-striped"}

### Return type

**IdentityNow**

<a name="putIdentityprovidersOkta"></a>

# OAuthProvider putIdentityprovidersOkta(body)

PUT /api/v2/identityproviders/okta

Update/Create Okta Identity Provider



### Example

~~~ javascript
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Configure OAuth2 access token for authorization: PureCloud Auth
platformClient.ApiClient.instance.authentications['PureCloud Auth'].accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new platformClient.IdentityProviderApi();

var body = {}; // Object | Provider

apiInstance.putIdentityprovidersOkta(body)
  .then(function(data) {
    console.log(`putIdentityprovidersOkta success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch(function(err) {
  	console.log('There was a failure calling putIdentityprovidersOkta');
    console.error(err);
  });

~~~

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **body** | **Object** | Provider |  |
{: class="table table-striped"}

### Return type

**OAuthProvider**

<a name="putIdentityprovidersOnelogin"></a>

# OAuthProvider putIdentityprovidersOnelogin(body)

PUT /api/v2/identityproviders/onelogin

Update/Create OneLogin Identity Provider



### Example

~~~ javascript
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Configure OAuth2 access token for authorization: PureCloud Auth
platformClient.ApiClient.instance.authentications['PureCloud Auth'].accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new platformClient.IdentityProviderApi();

var body = {}; // Object | Provider

apiInstance.putIdentityprovidersOnelogin(body)
  .then(function(data) {
    console.log(`putIdentityprovidersOnelogin success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch(function(err) {
  	console.log('There was a failure calling putIdentityprovidersOnelogin');
    console.error(err);
  });

~~~

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **body** | **Object** | Provider |  |
{: class="table table-striped"}

### Return type

**OAuthProvider**

<a name="putIdentityprovidersPing"></a>

# OAuthProvider putIdentityprovidersPing(body)

PUT /api/v2/identityproviders/ping

Update/Create Ping Identity Provider



### Example

~~~ javascript
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Configure OAuth2 access token for authorization: PureCloud Auth
platformClient.ApiClient.instance.authentications['PureCloud Auth'].accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new platformClient.IdentityProviderApi();

var body = {}; // Object | Provider

apiInstance.putIdentityprovidersPing(body)
  .then(function(data) {
    console.log(`putIdentityprovidersPing success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch(function(err) {
  	console.log('There was a failure calling putIdentityprovidersPing');
    console.error(err);
  });

~~~

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **body** | **Object** | Provider |  |
{: class="table table-striped"}

### Return type

**OAuthProvider**

<a name="putIdentityprovidersPurecloud"></a>

# OAuthProvider putIdentityprovidersPurecloud(body)

PUT /api/v2/identityproviders/purecloud

Update/Create PureCloud Identity Provider



### Example

~~~ javascript
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Configure OAuth2 access token for authorization: PureCloud Auth
platformClient.ApiClient.instance.authentications['PureCloud Auth'].accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new platformClient.IdentityProviderApi();

var body = {}; // Object | Provider

apiInstance.putIdentityprovidersPurecloud(body)
  .then(function(data) {
    console.log(`putIdentityprovidersPurecloud success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch(function(err) {
  	console.log('There was a failure calling putIdentityprovidersPurecloud');
    console.error(err);
  });

~~~

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **body** | **Object** | Provider |  |
{: class="table table-striped"}

### Return type

**OAuthProvider**

<a name="putIdentityprovidersSalesforce"></a>

# OAuthProvider putIdentityprovidersSalesforce(body)

PUT /api/v2/identityproviders/salesforce

Update/Create Salesforce Identity Provider



### Example

~~~ javascript
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Configure OAuth2 access token for authorization: PureCloud Auth
platformClient.ApiClient.instance.authentications['PureCloud Auth'].accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new platformClient.IdentityProviderApi();

var body = {}; // Object | Provider

apiInstance.putIdentityprovidersSalesforce(body)
  .then(function(data) {
    console.log(`putIdentityprovidersSalesforce success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch(function(err) {
  	console.log('There was a failure calling putIdentityprovidersSalesforce');
    console.error(err);
  });

~~~

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **body** | **Object** | Provider |  |
{: class="table table-striped"}

### Return type

**OAuthProvider**

