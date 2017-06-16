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

# [**Empty**](Empty.html) deleteIdentityprovidersAdfs()

DELETE /api/v2/identityproviders/adfs

Delete ADFS Identity Provider



### Example

~~~ javascript
var platformClient = require('purecloud-platform-client-v2');

// Configure OAuth2 access token for authorization: PureCloud Auth
platformClient.ApiClient.instance.authentications['PureCloud Auth'].accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new platformClient.IdentityProviderApi();
apiInstance.deleteIdentityprovidersAdfs()
  .then(function(data) {
    console.log(`deleteIdentityprovidersAdfs success! data: ${data}`);
  })
  .catch(function(error) {
  	console.log('There was a failure calling deleteIdentityprovidersAdfs');
    console.error(error);
  });

~~~

### Parameters

This endpoint does not need any parameter.
{: class="table table-striped"}

### Return type

[**Empty**](Empty.html)

<a name="deleteIdentityprovidersCic"></a>

# [**Empty**](Empty.html) deleteIdentityprovidersCic()

DELETE /api/v2/identityproviders/cic

Delete Customer Interaction Center (CIC) Identity Provider



### Example

~~~ javascript
var platformClient = require('purecloud-platform-client-v2');

// Configure OAuth2 access token for authorization: PureCloud Auth
platformClient.ApiClient.instance.authentications['PureCloud Auth'].accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new platformClient.IdentityProviderApi();
apiInstance.deleteIdentityprovidersCic()
  .then(function(data) {
    console.log(`deleteIdentityprovidersCic success! data: ${data}`);
  })
  .catch(function(error) {
  	console.log('There was a failure calling deleteIdentityprovidersCic');
    console.error(error);
  });

~~~

### Parameters

This endpoint does not need any parameter.
{: class="table table-striped"}

### Return type

[**Empty**](Empty.html)

<a name="deleteIdentityprovidersGsuite"></a>

# [**Empty**](Empty.html) deleteIdentityprovidersGsuite()

DELETE /api/v2/identityproviders/gsuite

Delete G Suite Identity Provider



### Example

~~~ javascript
var platformClient = require('purecloud-platform-client-v2');

// Configure OAuth2 access token for authorization: PureCloud Auth
platformClient.ApiClient.instance.authentications['PureCloud Auth'].accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new platformClient.IdentityProviderApi();
apiInstance.deleteIdentityprovidersGsuite()
  .then(function(data) {
    console.log(`deleteIdentityprovidersGsuite success! data: ${data}`);
  })
  .catch(function(error) {
  	console.log('There was a failure calling deleteIdentityprovidersGsuite');
    console.error(error);
  });

~~~

### Parameters

This endpoint does not need any parameter.
{: class="table table-striped"}

### Return type

[**Empty**](Empty.html)

<a name="deleteIdentityprovidersIdentitynow"></a>

# [**Empty**](Empty.html) deleteIdentityprovidersIdentitynow()

DELETE /api/v2/identityproviders/identitynow

Delete IdentityNow Provider



### Example

~~~ javascript
var platformClient = require('purecloud-platform-client-v2');

// Configure OAuth2 access token for authorization: PureCloud Auth
platformClient.ApiClient.instance.authentications['PureCloud Auth'].accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new platformClient.IdentityProviderApi();
apiInstance.deleteIdentityprovidersIdentitynow()
  .then(function(data) {
    console.log(`deleteIdentityprovidersIdentitynow success! data: ${data}`);
  })
  .catch(function(error) {
  	console.log('There was a failure calling deleteIdentityprovidersIdentitynow');
    console.error(error);
  });

~~~

### Parameters

This endpoint does not need any parameter.
{: class="table table-striped"}

### Return type

[**Empty**](Empty.html)

<a name="deleteIdentityprovidersOkta"></a>

# [**Empty**](Empty.html) deleteIdentityprovidersOkta()

DELETE /api/v2/identityproviders/okta

Delete Okta Identity Provider



### Example

~~~ javascript
var platformClient = require('purecloud-platform-client-v2');

// Configure OAuth2 access token for authorization: PureCloud Auth
platformClient.ApiClient.instance.authentications['PureCloud Auth'].accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new platformClient.IdentityProviderApi();
apiInstance.deleteIdentityprovidersOkta()
  .then(function(data) {
    console.log(`deleteIdentityprovidersOkta success! data: ${data}`);
  })
  .catch(function(error) {
  	console.log('There was a failure calling deleteIdentityprovidersOkta');
    console.error(error);
  });

~~~

### Parameters

This endpoint does not need any parameter.
{: class="table table-striped"}

### Return type

[**Empty**](Empty.html)

<a name="deleteIdentityprovidersOnelogin"></a>

# [**Empty**](Empty.html) deleteIdentityprovidersOnelogin()

DELETE /api/v2/identityproviders/onelogin

Delete OneLogin Identity Provider



### Example

~~~ javascript
var platformClient = require('purecloud-platform-client-v2');

// Configure OAuth2 access token for authorization: PureCloud Auth
platformClient.ApiClient.instance.authentications['PureCloud Auth'].accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new platformClient.IdentityProviderApi();
apiInstance.deleteIdentityprovidersOnelogin()
  .then(function(data) {
    console.log(`deleteIdentityprovidersOnelogin success! data: ${data}`);
  })
  .catch(function(error) {
  	console.log('There was a failure calling deleteIdentityprovidersOnelogin');
    console.error(error);
  });

~~~

### Parameters

This endpoint does not need any parameter.
{: class="table table-striped"}

### Return type

[**Empty**](Empty.html)

<a name="deleteIdentityprovidersPing"></a>

# [**Empty**](Empty.html) deleteIdentityprovidersPing()

DELETE /api/v2/identityproviders/ping

Delete Ping Identity Provider



### Example

~~~ javascript
var platformClient = require('purecloud-platform-client-v2');

// Configure OAuth2 access token for authorization: PureCloud Auth
platformClient.ApiClient.instance.authentications['PureCloud Auth'].accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new platformClient.IdentityProviderApi();
apiInstance.deleteIdentityprovidersPing()
  .then(function(data) {
    console.log(`deleteIdentityprovidersPing success! data: ${data}`);
  })
  .catch(function(error) {
  	console.log('There was a failure calling deleteIdentityprovidersPing');
    console.error(error);
  });

~~~

### Parameters

This endpoint does not need any parameter.
{: class="table table-striped"}

### Return type

[**Empty**](Empty.html)

<a name="deleteIdentityprovidersPurecloud"></a>

# [**Empty**](Empty.html) deleteIdentityprovidersPurecloud()

DELETE /api/v2/identityproviders/purecloud

Delete PureCloud Identity Provider



### Example

~~~ javascript
var platformClient = require('purecloud-platform-client-v2');

// Configure OAuth2 access token for authorization: PureCloud Auth
platformClient.ApiClient.instance.authentications['PureCloud Auth'].accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new platformClient.IdentityProviderApi();
apiInstance.deleteIdentityprovidersPurecloud()
  .then(function(data) {
    console.log(`deleteIdentityprovidersPurecloud success! data: ${data}`);
  })
  .catch(function(error) {
  	console.log('There was a failure calling deleteIdentityprovidersPurecloud');
    console.error(error);
  });

~~~

### Parameters

This endpoint does not need any parameter.
{: class="table table-striped"}

### Return type

[**Empty**](Empty.html)

<a name="deleteIdentityprovidersSalesforce"></a>

# [**Empty**](Empty.html) deleteIdentityprovidersSalesforce()

DELETE /api/v2/identityproviders/salesforce

Delete Salesforce Identity Provider



### Example

~~~ javascript
var platformClient = require('purecloud-platform-client-v2');

// Configure OAuth2 access token for authorization: PureCloud Auth
platformClient.ApiClient.instance.authentications['PureCloud Auth'].accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new platformClient.IdentityProviderApi();
apiInstance.deleteIdentityprovidersSalesforce()
  .then(function(data) {
    console.log(`deleteIdentityprovidersSalesforce success! data: ${data}`);
  })
  .catch(function(error) {
  	console.log('There was a failure calling deleteIdentityprovidersSalesforce');
    console.error(error);
  });

~~~

### Parameters

This endpoint does not need any parameter.
{: class="table table-striped"}

### Return type

[**Empty**](Empty.html)

<a name="getIdentityproviders"></a>

# [**OAuthProviderEntityListing**](OAuthProviderEntityListing.html) getIdentityproviders()

GET /api/v2/identityproviders

The list of identity providers



### Example

~~~ javascript
var platformClient = require('purecloud-platform-client-v2');

// Configure OAuth2 access token for authorization: PureCloud Auth
platformClient.ApiClient.instance.authentications['PureCloud Auth'].accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new platformClient.IdentityProviderApi();
apiInstance.getIdentityproviders()
  .then(function(data) {
    console.log(`getIdentityproviders success! data: ${data}`);
  })
  .catch(function(error) {
  	console.log('There was a failure calling getIdentityproviders');
    console.error(error);
  });

~~~

### Parameters

This endpoint does not need any parameter.
{: class="table table-striped"}

### Return type

[**OAuthProviderEntityListing**](OAuthProviderEntityListing.html)

<a name="getIdentityprovidersAdfs"></a>

# [**ADFS**](ADFS.html) getIdentityprovidersAdfs()

GET /api/v2/identityproviders/adfs

Get ADFS Identity Provider



### Example

~~~ javascript
var platformClient = require('purecloud-platform-client-v2');

// Configure OAuth2 access token for authorization: PureCloud Auth
platformClient.ApiClient.instance.authentications['PureCloud Auth'].accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new platformClient.IdentityProviderApi();
apiInstance.getIdentityprovidersAdfs()
  .then(function(data) {
    console.log(`getIdentityprovidersAdfs success! data: ${data}`);
  })
  .catch(function(error) {
  	console.log('There was a failure calling getIdentityprovidersAdfs');
    console.error(error);
  });

~~~

### Parameters

This endpoint does not need any parameter.
{: class="table table-striped"}

### Return type

[**ADFS**](ADFS.html)

<a name="getIdentityprovidersCic"></a>

# [**CustomerInteractionCenter**](CustomerInteractionCenter.html) getIdentityprovidersCic()

GET /api/v2/identityproviders/cic

Get Customer Interaction Center (CIC) Identity Provider



### Example

~~~ javascript
var platformClient = require('purecloud-platform-client-v2');

// Configure OAuth2 access token for authorization: PureCloud Auth
platformClient.ApiClient.instance.authentications['PureCloud Auth'].accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new platformClient.IdentityProviderApi();
apiInstance.getIdentityprovidersCic()
  .then(function(data) {
    console.log(`getIdentityprovidersCic success! data: ${data}`);
  })
  .catch(function(error) {
  	console.log('There was a failure calling getIdentityprovidersCic');
    console.error(error);
  });

~~~

### Parameters

This endpoint does not need any parameter.
{: class="table table-striped"}

### Return type

[**CustomerInteractionCenter**](CustomerInteractionCenter.html)

<a name="getIdentityprovidersGsuite"></a>

# [**GSuite**](GSuite.html) getIdentityprovidersGsuite()

GET /api/v2/identityproviders/gsuite

Get G Suite Identity Provider



### Example

~~~ javascript
var platformClient = require('purecloud-platform-client-v2');

// Configure OAuth2 access token for authorization: PureCloud Auth
platformClient.ApiClient.instance.authentications['PureCloud Auth'].accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new platformClient.IdentityProviderApi();
apiInstance.getIdentityprovidersGsuite()
  .then(function(data) {
    console.log(`getIdentityprovidersGsuite success! data: ${data}`);
  })
  .catch(function(error) {
  	console.log('There was a failure calling getIdentityprovidersGsuite');
    console.error(error);
  });

~~~

### Parameters

This endpoint does not need any parameter.
{: class="table table-striped"}

### Return type

[**GSuite**](GSuite.html)

<a name="getIdentityprovidersIdentitynow"></a>

# [**IdentityNow**](IdentityNow.html) getIdentityprovidersIdentitynow()

GET /api/v2/identityproviders/identitynow

Get IdentityNow Provider



### Example

~~~ javascript
var platformClient = require('purecloud-platform-client-v2');

// Configure OAuth2 access token for authorization: PureCloud Auth
platformClient.ApiClient.instance.authentications['PureCloud Auth'].accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new platformClient.IdentityProviderApi();
apiInstance.getIdentityprovidersIdentitynow()
  .then(function(data) {
    console.log(`getIdentityprovidersIdentitynow success! data: ${data}`);
  })
  .catch(function(error) {
  	console.log('There was a failure calling getIdentityprovidersIdentitynow');
    console.error(error);
  });

~~~

### Parameters

This endpoint does not need any parameter.
{: class="table table-striped"}

### Return type

[**IdentityNow**](IdentityNow.html)

<a name="getIdentityprovidersOkta"></a>

# [**Okta**](Okta.html) getIdentityprovidersOkta()

GET /api/v2/identityproviders/okta

Get Okta Identity Provider



### Example

~~~ javascript
var platformClient = require('purecloud-platform-client-v2');

// Configure OAuth2 access token for authorization: PureCloud Auth
platformClient.ApiClient.instance.authentications['PureCloud Auth'].accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new platformClient.IdentityProviderApi();
apiInstance.getIdentityprovidersOkta()
  .then(function(data) {
    console.log(`getIdentityprovidersOkta success! data: ${data}`);
  })
  .catch(function(error) {
  	console.log('There was a failure calling getIdentityprovidersOkta');
    console.error(error);
  });

~~~

### Parameters

This endpoint does not need any parameter.
{: class="table table-striped"}

### Return type

[**Okta**](Okta.html)

<a name="getIdentityprovidersOnelogin"></a>

# [**OneLogin**](OneLogin.html) getIdentityprovidersOnelogin()

GET /api/v2/identityproviders/onelogin

Get OneLogin Identity Provider



### Example

~~~ javascript
var platformClient = require('purecloud-platform-client-v2');

// Configure OAuth2 access token for authorization: PureCloud Auth
platformClient.ApiClient.instance.authentications['PureCloud Auth'].accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new platformClient.IdentityProviderApi();
apiInstance.getIdentityprovidersOnelogin()
  .then(function(data) {
    console.log(`getIdentityprovidersOnelogin success! data: ${data}`);
  })
  .catch(function(error) {
  	console.log('There was a failure calling getIdentityprovidersOnelogin');
    console.error(error);
  });

~~~

### Parameters

This endpoint does not need any parameter.
{: class="table table-striped"}

### Return type

[**OneLogin**](OneLogin.html)

<a name="getIdentityprovidersPing"></a>

# [**PingIdentity**](PingIdentity.html) getIdentityprovidersPing()

GET /api/v2/identityproviders/ping

Get Ping Identity Provider



### Example

~~~ javascript
var platformClient = require('purecloud-platform-client-v2');

// Configure OAuth2 access token for authorization: PureCloud Auth
platformClient.ApiClient.instance.authentications['PureCloud Auth'].accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new platformClient.IdentityProviderApi();
apiInstance.getIdentityprovidersPing()
  .then(function(data) {
    console.log(`getIdentityprovidersPing success! data: ${data}`);
  })
  .catch(function(error) {
  	console.log('There was a failure calling getIdentityprovidersPing');
    console.error(error);
  });

~~~

### Parameters

This endpoint does not need any parameter.
{: class="table table-striped"}

### Return type

[**PingIdentity**](PingIdentity.html)

<a name="getIdentityprovidersPurecloud"></a>

# [**PureCloud**](PureCloud.html) getIdentityprovidersPurecloud()

GET /api/v2/identityproviders/purecloud

Get PureCloud Identity Provider



### Example

~~~ javascript
var platformClient = require('purecloud-platform-client-v2');

// Configure OAuth2 access token for authorization: PureCloud Auth
platformClient.ApiClient.instance.authentications['PureCloud Auth'].accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new platformClient.IdentityProviderApi();
apiInstance.getIdentityprovidersPurecloud()
  .then(function(data) {
    console.log(`getIdentityprovidersPurecloud success! data: ${data}`);
  })
  .catch(function(error) {
  	console.log('There was a failure calling getIdentityprovidersPurecloud');
    console.error(error);
  });

~~~

### Parameters

This endpoint does not need any parameter.
{: class="table table-striped"}

### Return type

[**PureCloud**](PureCloud.html)

<a name="getIdentityprovidersSalesforce"></a>

# [**Salesforce**](Salesforce.html) getIdentityprovidersSalesforce()

GET /api/v2/identityproviders/salesforce

Get Salesforce Identity Provider



### Example

~~~ javascript
var platformClient = require('purecloud-platform-client-v2');

// Configure OAuth2 access token for authorization: PureCloud Auth
platformClient.ApiClient.instance.authentications['PureCloud Auth'].accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new platformClient.IdentityProviderApi();
apiInstance.getIdentityprovidersSalesforce()
  .then(function(data) {
    console.log(`getIdentityprovidersSalesforce success! data: ${data}`);
  })
  .catch(function(error) {
  	console.log('There was a failure calling getIdentityprovidersSalesforce');
    console.error(error);
  });

~~~

### Parameters

This endpoint does not need any parameter.
{: class="table table-striped"}

### Return type

[**Salesforce**](Salesforce.html)

<a name="putIdentityprovidersAdfs"></a>

# [**OAuthProvider**](OAuthProvider.html) putIdentityprovidersAdfs(body)

PUT /api/v2/identityproviders/adfs

Update/Create ADFS Identity Provider



### Example

~~~ javascript
var platformClient = require('purecloud-platform-client-v2');

// Configure OAuth2 access token for authorization: PureCloud Auth
platformClient.ApiClient.instance.authentications['PureCloud Auth'].accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new platformClient.IdentityProviderApi();

var body = new platformClient.ADFS(); // ADFS | Provider

apiInstance.putIdentityprovidersAdfs(body)
  .then(function(data) {
    console.log(`putIdentityprovidersAdfs success! data: ${data}`);
  })
  .catch(function(error) {
  	console.log('There was a failure calling putIdentityprovidersAdfs');
    console.error(error);
  });

~~~

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **body** | [**ADFS**](ADFS.html)| Provider |  |
{: class="table table-striped"}

### Return type

[**OAuthProvider**](OAuthProvider.html)

<a name="putIdentityprovidersCic"></a>

# [**OAuthProvider**](OAuthProvider.html) putIdentityprovidersCic(body)

PUT /api/v2/identityproviders/cic

Update/Create Customer Interaction Center (CIC) Identity Provider



### Example

~~~ javascript
var platformClient = require('purecloud-platform-client-v2');

// Configure OAuth2 access token for authorization: PureCloud Auth
platformClient.ApiClient.instance.authentications['PureCloud Auth'].accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new platformClient.IdentityProviderApi();

var body = new platformClient.CustomerInteractionCenter(); // CustomerInteractionCenter | Provider

apiInstance.putIdentityprovidersCic(body)
  .then(function(data) {
    console.log(`putIdentityprovidersCic success! data: ${data}`);
  })
  .catch(function(error) {
  	console.log('There was a failure calling putIdentityprovidersCic');
    console.error(error);
  });

~~~

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **body** | [**CustomerInteractionCenter**](CustomerInteractionCenter.html)| Provider |  |
{: class="table table-striped"}

### Return type

[**OAuthProvider**](OAuthProvider.html)

<a name="putIdentityprovidersGsuite"></a>

# [**OAuthProvider**](OAuthProvider.html) putIdentityprovidersGsuite(body)

PUT /api/v2/identityproviders/gsuite

Update/Create G Suite Identity Provider



### Example

~~~ javascript
var platformClient = require('purecloud-platform-client-v2');

// Configure OAuth2 access token for authorization: PureCloud Auth
platformClient.ApiClient.instance.authentications['PureCloud Auth'].accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new platformClient.IdentityProviderApi();

var body = new platformClient.GSuite(); // GSuite | Provider

apiInstance.putIdentityprovidersGsuite(body)
  .then(function(data) {
    console.log(`putIdentityprovidersGsuite success! data: ${data}`);
  })
  .catch(function(error) {
  	console.log('There was a failure calling putIdentityprovidersGsuite');
    console.error(error);
  });

~~~

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **body** | [**GSuite**](GSuite.html)| Provider |  |
{: class="table table-striped"}

### Return type

[**OAuthProvider**](OAuthProvider.html)

<a name="putIdentityprovidersIdentitynow"></a>

# [**IdentityNow**](IdentityNow.html) putIdentityprovidersIdentitynow(body)

PUT /api/v2/identityproviders/identitynow

Update/Create IdentityNow Provider



### Example

~~~ javascript
var platformClient = require('purecloud-platform-client-v2');

// Configure OAuth2 access token for authorization: PureCloud Auth
platformClient.ApiClient.instance.authentications['PureCloud Auth'].accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new platformClient.IdentityProviderApi();

var body = new platformClient.IdentityNow(); // IdentityNow | Provider

apiInstance.putIdentityprovidersIdentitynow(body)
  .then(function(data) {
    console.log(`putIdentityprovidersIdentitynow success! data: ${data}`);
  })
  .catch(function(error) {
  	console.log('There was a failure calling putIdentityprovidersIdentitynow');
    console.error(error);
  });

~~~

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **body** | [**IdentityNow**](IdentityNow.html)| Provider |  |
{: class="table table-striped"}

### Return type

[**IdentityNow**](IdentityNow.html)

<a name="putIdentityprovidersOkta"></a>

# [**OAuthProvider**](OAuthProvider.html) putIdentityprovidersOkta(body)

PUT /api/v2/identityproviders/okta

Update/Create Okta Identity Provider



### Example

~~~ javascript
var platformClient = require('purecloud-platform-client-v2');

// Configure OAuth2 access token for authorization: PureCloud Auth
platformClient.ApiClient.instance.authentications['PureCloud Auth'].accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new platformClient.IdentityProviderApi();

var body = new platformClient.Okta(); // Okta | Provider

apiInstance.putIdentityprovidersOkta(body)
  .then(function(data) {
    console.log(`putIdentityprovidersOkta success! data: ${data}`);
  })
  .catch(function(error) {
  	console.log('There was a failure calling putIdentityprovidersOkta');
    console.error(error);
  });

~~~

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **body** | [**Okta**](Okta.html)| Provider |  |
{: class="table table-striped"}

### Return type

[**OAuthProvider**](OAuthProvider.html)

<a name="putIdentityprovidersOnelogin"></a>

# [**OAuthProvider**](OAuthProvider.html) putIdentityprovidersOnelogin(body)

PUT /api/v2/identityproviders/onelogin

Update/Create OneLogin Identity Provider



### Example

~~~ javascript
var platformClient = require('purecloud-platform-client-v2');

// Configure OAuth2 access token for authorization: PureCloud Auth
platformClient.ApiClient.instance.authentications['PureCloud Auth'].accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new platformClient.IdentityProviderApi();

var body = new platformClient.OneLogin(); // OneLogin | Provider

apiInstance.putIdentityprovidersOnelogin(body)
  .then(function(data) {
    console.log(`putIdentityprovidersOnelogin success! data: ${data}`);
  })
  .catch(function(error) {
  	console.log('There was a failure calling putIdentityprovidersOnelogin');
    console.error(error);
  });

~~~

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **body** | [**OneLogin**](OneLogin.html)| Provider |  |
{: class="table table-striped"}

### Return type

[**OAuthProvider**](OAuthProvider.html)

<a name="putIdentityprovidersPing"></a>

# [**OAuthProvider**](OAuthProvider.html) putIdentityprovidersPing(body)

PUT /api/v2/identityproviders/ping

Update/Create Ping Identity Provider



### Example

~~~ javascript
var platformClient = require('purecloud-platform-client-v2');

// Configure OAuth2 access token for authorization: PureCloud Auth
platformClient.ApiClient.instance.authentications['PureCloud Auth'].accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new platformClient.IdentityProviderApi();

var body = new platformClient.PingIdentity(); // PingIdentity | Provider

apiInstance.putIdentityprovidersPing(body)
  .then(function(data) {
    console.log(`putIdentityprovidersPing success! data: ${data}`);
  })
  .catch(function(error) {
  	console.log('There was a failure calling putIdentityprovidersPing');
    console.error(error);
  });

~~~

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **body** | [**PingIdentity**](PingIdentity.html)| Provider |  |
{: class="table table-striped"}

### Return type

[**OAuthProvider**](OAuthProvider.html)

<a name="putIdentityprovidersPurecloud"></a>

# [**OAuthProvider**](OAuthProvider.html) putIdentityprovidersPurecloud(body)

PUT /api/v2/identityproviders/purecloud

Update/Create PureCloud Identity Provider



### Example

~~~ javascript
var platformClient = require('purecloud-platform-client-v2');

// Configure OAuth2 access token for authorization: PureCloud Auth
platformClient.ApiClient.instance.authentications['PureCloud Auth'].accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new platformClient.IdentityProviderApi();

var body = new platformClient.PureCloud(); // PureCloud | Provider

apiInstance.putIdentityprovidersPurecloud(body)
  .then(function(data) {
    console.log(`putIdentityprovidersPurecloud success! data: ${data}`);
  })
  .catch(function(error) {
  	console.log('There was a failure calling putIdentityprovidersPurecloud');
    console.error(error);
  });

~~~

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **body** | [**PureCloud**](PureCloud.html)| Provider |  |
{: class="table table-striped"}

### Return type

[**OAuthProvider**](OAuthProvider.html)

<a name="putIdentityprovidersSalesforce"></a>

# [**OAuthProvider**](OAuthProvider.html) putIdentityprovidersSalesforce(body)

PUT /api/v2/identityproviders/salesforce

Update/Create Salesforce Identity Provider



### Example

~~~ javascript
var platformClient = require('purecloud-platform-client-v2');

// Configure OAuth2 access token for authorization: PureCloud Auth
platformClient.ApiClient.instance.authentications['PureCloud Auth'].accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new platformClient.IdentityProviderApi();

var body = new platformClient.Salesforce(); // Salesforce | Provider

apiInstance.putIdentityprovidersSalesforce(body)
  .then(function(data) {
    console.log(`putIdentityprovidersSalesforce success! data: ${data}`);
  })
  .catch(function(error) {
  	console.log('There was a failure calling putIdentityprovidersSalesforce');
    console.error(error);
  });

~~~

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **body** | [**Salesforce**](Salesforce.html)| Provider |  |
{: class="table table-striped"}

### Return type

[**OAuthProvider**](OAuthProvider.html)

