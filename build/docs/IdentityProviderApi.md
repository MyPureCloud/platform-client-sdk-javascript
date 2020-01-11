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
[**deleteIdentityprovidersPureengage**](IdentityProviderApi.html#deleteIdentityprovidersPureengage) | **DELETE** /api/v2/identityproviders/pureengage | Delete PureEngage Identity Provider
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
[**getIdentityprovidersPureengage**](IdentityProviderApi.html#getIdentityprovidersPureengage) | **GET** /api/v2/identityproviders/pureengage | Get PureEngage Identity Provider
[**getIdentityprovidersSalesforce**](IdentityProviderApi.html#getIdentityprovidersSalesforce) | **GET** /api/v2/identityproviders/salesforce | Get Salesforce Identity Provider
[**putIdentityprovidersAdfs**](IdentityProviderApi.html#putIdentityprovidersAdfs) | **PUT** /api/v2/identityproviders/adfs | Update/Create ADFS Identity Provider
[**putIdentityprovidersCic**](IdentityProviderApi.html#putIdentityprovidersCic) | **PUT** /api/v2/identityproviders/cic | Update/Create Customer Interaction Center (CIC) Identity Provider
[**putIdentityprovidersGsuite**](IdentityProviderApi.html#putIdentityprovidersGsuite) | **PUT** /api/v2/identityproviders/gsuite | Update/Create G Suite Identity Provider
[**putIdentityprovidersIdentitynow**](IdentityProviderApi.html#putIdentityprovidersIdentitynow) | **PUT** /api/v2/identityproviders/identitynow | Update/Create IdentityNow Provider
[**putIdentityprovidersOkta**](IdentityProviderApi.html#putIdentityprovidersOkta) | **PUT** /api/v2/identityproviders/okta | Update/Create Okta Identity Provider
[**putIdentityprovidersOnelogin**](IdentityProviderApi.html#putIdentityprovidersOnelogin) | **PUT** /api/v2/identityproviders/onelogin | Update/Create OneLogin Identity Provider
[**putIdentityprovidersPing**](IdentityProviderApi.html#putIdentityprovidersPing) | **PUT** /api/v2/identityproviders/ping | Update/Create Ping Identity Provider
[**putIdentityprovidersPurecloud**](IdentityProviderApi.html#putIdentityprovidersPurecloud) | **PUT** /api/v2/identityproviders/purecloud | Update/Create PureCloud Identity Provider
[**putIdentityprovidersPureengage**](IdentityProviderApi.html#putIdentityprovidersPureengage) | **PUT** /api/v2/identityproviders/pureengage | Update/Create PureEngage Identity Provider
[**putIdentityprovidersSalesforce**](IdentityProviderApi.html#putIdentityprovidersSalesforce) | **PUT** /api/v2/identityproviders/salesforce | Update/Create Salesforce Identity Provider
{: class="table table-striped"}

<a name="deleteIdentityprovidersAdfs"></a>

# Empty deleteIdentityprovidersAdfs()



DELETE /api/v2/identityproviders/adfs

Delete ADFS Identity Provider



Requires ANY permissions: 

* sso:provider:delete



### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.IdentityProviderApi();

apiInstance.deleteIdentityprovidersAdfs()
  .then((data) => {
    console.log(`deleteIdentityprovidersAdfs success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling deleteIdentityprovidersAdfs');
    console.error(err);
  });
```

### Parameters

This endpoint does not need any parameter.
{: class="table table-striped"}

### Return type

**Empty**

<a name="deleteIdentityprovidersCic"></a>

# Empty deleteIdentityprovidersCic()



DELETE /api/v2/identityproviders/cic

Delete Customer Interaction Center (CIC) Identity Provider



Requires ANY permissions: 

* sso:provider:delete



### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.IdentityProviderApi();

apiInstance.deleteIdentityprovidersCic()
  .then((data) => {
    console.log(`deleteIdentityprovidersCic success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling deleteIdentityprovidersCic');
    console.error(err);
  });
```

### Parameters

This endpoint does not need any parameter.
{: class="table table-striped"}

### Return type

**Empty**

<a name="deleteIdentityprovidersGsuite"></a>

# Empty deleteIdentityprovidersGsuite()



DELETE /api/v2/identityproviders/gsuite

Delete G Suite Identity Provider



Requires ANY permissions: 

* sso:provider:delete



### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.IdentityProviderApi();

apiInstance.deleteIdentityprovidersGsuite()
  .then((data) => {
    console.log(`deleteIdentityprovidersGsuite success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling deleteIdentityprovidersGsuite');
    console.error(err);
  });
```

### Parameters

This endpoint does not need any parameter.
{: class="table table-striped"}

### Return type

**Empty**

<a name="deleteIdentityprovidersIdentitynow"></a>

# Empty deleteIdentityprovidersIdentitynow()



DELETE /api/v2/identityproviders/identitynow

Delete IdentityNow Provider



Requires ANY permissions: 

* sso:provider:delete



### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.IdentityProviderApi();

apiInstance.deleteIdentityprovidersIdentitynow()
  .then((data) => {
    console.log(`deleteIdentityprovidersIdentitynow success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling deleteIdentityprovidersIdentitynow');
    console.error(err);
  });
```

### Parameters

This endpoint does not need any parameter.
{: class="table table-striped"}

### Return type

**Empty**

<a name="deleteIdentityprovidersOkta"></a>

# Empty deleteIdentityprovidersOkta()



DELETE /api/v2/identityproviders/okta

Delete Okta Identity Provider



Requires ANY permissions: 

* sso:provider:delete



### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.IdentityProviderApi();

apiInstance.deleteIdentityprovidersOkta()
  .then((data) => {
    console.log(`deleteIdentityprovidersOkta success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling deleteIdentityprovidersOkta');
    console.error(err);
  });
```

### Parameters

This endpoint does not need any parameter.
{: class="table table-striped"}

### Return type

**Empty**

<a name="deleteIdentityprovidersOnelogin"></a>

# Empty deleteIdentityprovidersOnelogin()



DELETE /api/v2/identityproviders/onelogin

Delete OneLogin Identity Provider



Requires ANY permissions: 

* sso:provider:delete



### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.IdentityProviderApi();

apiInstance.deleteIdentityprovidersOnelogin()
  .then((data) => {
    console.log(`deleteIdentityprovidersOnelogin success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling deleteIdentityprovidersOnelogin');
    console.error(err);
  });
```

### Parameters

This endpoint does not need any parameter.
{: class="table table-striped"}

### Return type

**Empty**

<a name="deleteIdentityprovidersPing"></a>

# Empty deleteIdentityprovidersPing()



DELETE /api/v2/identityproviders/ping

Delete Ping Identity Provider



Requires ANY permissions: 

* sso:provider:delete



### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.IdentityProviderApi();

apiInstance.deleteIdentityprovidersPing()
  .then((data) => {
    console.log(`deleteIdentityprovidersPing success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling deleteIdentityprovidersPing');
    console.error(err);
  });
```

### Parameters

This endpoint does not need any parameter.
{: class="table table-striped"}

### Return type

**Empty**

<a name="deleteIdentityprovidersPurecloud"></a>

# Empty deleteIdentityprovidersPurecloud()



DELETE /api/v2/identityproviders/purecloud

Delete PureCloud Identity Provider



Requires ANY permissions: 

* sso:provider:delete



### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.IdentityProviderApi();

apiInstance.deleteIdentityprovidersPurecloud()
  .then((data) => {
    console.log(`deleteIdentityprovidersPurecloud success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling deleteIdentityprovidersPurecloud');
    console.error(err);
  });
```

### Parameters

This endpoint does not need any parameter.
{: class="table table-striped"}

### Return type

**Empty**

<a name="deleteIdentityprovidersPureengage"></a>

# Empty deleteIdentityprovidersPureengage()



DELETE /api/v2/identityproviders/pureengage

Delete PureEngage Identity Provider



Requires ANY permissions: 

* sso:provider:delete



### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.IdentityProviderApi();

apiInstance.deleteIdentityprovidersPureengage()
  .then((data) => {
    console.log(`deleteIdentityprovidersPureengage success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling deleteIdentityprovidersPureengage');
    console.error(err);
  });
```

### Parameters

This endpoint does not need any parameter.
{: class="table table-striped"}

### Return type

**Empty**

<a name="deleteIdentityprovidersSalesforce"></a>

# Empty deleteIdentityprovidersSalesforce()



DELETE /api/v2/identityproviders/salesforce

Delete Salesforce Identity Provider



Requires ANY permissions: 

* sso:provider:delete



### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.IdentityProviderApi();

apiInstance.deleteIdentityprovidersSalesforce()
  .then((data) => {
    console.log(`deleteIdentityprovidersSalesforce success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling deleteIdentityprovidersSalesforce');
    console.error(err);
  });
```

### Parameters

This endpoint does not need any parameter.
{: class="table table-striped"}

### Return type

**Empty**

<a name="getIdentityproviders"></a>

# OAuthProviderEntityListing getIdentityproviders()



GET /api/v2/identityproviders

The list of identity providers



Requires ANY permissions: 

* sso:provider:view



### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.IdentityProviderApi();

apiInstance.getIdentityproviders()
  .then((data) => {
    console.log(`getIdentityproviders success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getIdentityproviders');
    console.error(err);
  });
```

### Parameters

This endpoint does not need any parameter.
{: class="table table-striped"}

### Return type

**OAuthProviderEntityListing**

<a name="getIdentityprovidersAdfs"></a>

# ADFS getIdentityprovidersAdfs()



GET /api/v2/identityproviders/adfs

Get ADFS Identity Provider



Requires ANY permissions: 

* sso:provider:view



### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.IdentityProviderApi();

apiInstance.getIdentityprovidersAdfs()
  .then((data) => {
    console.log(`getIdentityprovidersAdfs success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getIdentityprovidersAdfs');
    console.error(err);
  });
```

### Parameters

This endpoint does not need any parameter.
{: class="table table-striped"}

### Return type

**ADFS**

<a name="getIdentityprovidersCic"></a>

# CustomerInteractionCenter getIdentityprovidersCic()



GET /api/v2/identityproviders/cic

Get Customer Interaction Center (CIC) Identity Provider



Requires ANY permissions: 

* sso:provider:view



### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.IdentityProviderApi();

apiInstance.getIdentityprovidersCic()
  .then((data) => {
    console.log(`getIdentityprovidersCic success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getIdentityprovidersCic');
    console.error(err);
  });
```

### Parameters

This endpoint does not need any parameter.
{: class="table table-striped"}

### Return type

**CustomerInteractionCenter**

<a name="getIdentityprovidersGsuite"></a>

# GSuite getIdentityprovidersGsuite()



GET /api/v2/identityproviders/gsuite

Get G Suite Identity Provider



Requires ANY permissions: 

* sso:provider:view



### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.IdentityProviderApi();

apiInstance.getIdentityprovidersGsuite()
  .then((data) => {
    console.log(`getIdentityprovidersGsuite success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getIdentityprovidersGsuite');
    console.error(err);
  });
```

### Parameters

This endpoint does not need any parameter.
{: class="table table-striped"}

### Return type

**GSuite**

<a name="getIdentityprovidersIdentitynow"></a>

# IdentityNow getIdentityprovidersIdentitynow()



GET /api/v2/identityproviders/identitynow

Get IdentityNow Provider



Requires ANY permissions: 

* sso:provider:view



### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.IdentityProviderApi();

apiInstance.getIdentityprovidersIdentitynow()
  .then((data) => {
    console.log(`getIdentityprovidersIdentitynow success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getIdentityprovidersIdentitynow');
    console.error(err);
  });
```

### Parameters

This endpoint does not need any parameter.
{: class="table table-striped"}

### Return type

**IdentityNow**

<a name="getIdentityprovidersOkta"></a>

# Okta getIdentityprovidersOkta()



GET /api/v2/identityproviders/okta

Get Okta Identity Provider



Requires ANY permissions: 

* sso:provider:view



### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.IdentityProviderApi();

apiInstance.getIdentityprovidersOkta()
  .then((data) => {
    console.log(`getIdentityprovidersOkta success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getIdentityprovidersOkta');
    console.error(err);
  });
```

### Parameters

This endpoint does not need any parameter.
{: class="table table-striped"}

### Return type

**Okta**

<a name="getIdentityprovidersOnelogin"></a>

# OneLogin getIdentityprovidersOnelogin()



GET /api/v2/identityproviders/onelogin

Get OneLogin Identity Provider



Requires ANY permissions: 

* sso:provider:view



### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.IdentityProviderApi();

apiInstance.getIdentityprovidersOnelogin()
  .then((data) => {
    console.log(`getIdentityprovidersOnelogin success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getIdentityprovidersOnelogin');
    console.error(err);
  });
```

### Parameters

This endpoint does not need any parameter.
{: class="table table-striped"}

### Return type

**OneLogin**

<a name="getIdentityprovidersPing"></a>

# PingIdentity getIdentityprovidersPing()



GET /api/v2/identityproviders/ping

Get Ping Identity Provider



Requires ANY permissions: 

* sso:provider:view



### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.IdentityProviderApi();

apiInstance.getIdentityprovidersPing()
  .then((data) => {
    console.log(`getIdentityprovidersPing success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getIdentityprovidersPing');
    console.error(err);
  });
```

### Parameters

This endpoint does not need any parameter.
{: class="table table-striped"}

### Return type

**PingIdentity**

<a name="getIdentityprovidersPurecloud"></a>

# PureCloud getIdentityprovidersPurecloud()



GET /api/v2/identityproviders/purecloud

Get PureCloud Identity Provider



Requires ANY permissions: 

* sso:provider:view



### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.IdentityProviderApi();

apiInstance.getIdentityprovidersPurecloud()
  .then((data) => {
    console.log(`getIdentityprovidersPurecloud success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getIdentityprovidersPurecloud');
    console.error(err);
  });
```

### Parameters

This endpoint does not need any parameter.
{: class="table table-striped"}

### Return type

**PureCloud**

<a name="getIdentityprovidersPureengage"></a>

# PureEngage getIdentityprovidersPureengage()



GET /api/v2/identityproviders/pureengage

Get PureEngage Identity Provider



Requires ANY permissions: 

* sso:provider:view



### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.IdentityProviderApi();

apiInstance.getIdentityprovidersPureengage()
  .then((data) => {
    console.log(`getIdentityprovidersPureengage success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getIdentityprovidersPureengage');
    console.error(err);
  });
```

### Parameters

This endpoint does not need any parameter.
{: class="table table-striped"}

### Return type

**PureEngage**

<a name="getIdentityprovidersSalesforce"></a>

# Salesforce getIdentityprovidersSalesforce()



GET /api/v2/identityproviders/salesforce

Get Salesforce Identity Provider



Requires ANY permissions: 

* sso:provider:view



### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.IdentityProviderApi();

apiInstance.getIdentityprovidersSalesforce()
  .then((data) => {
    console.log(`getIdentityprovidersSalesforce success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getIdentityprovidersSalesforce');
    console.error(err);
  });
```

### Parameters

This endpoint does not need any parameter.
{: class="table table-striped"}

### Return type

**Salesforce**

<a name="putIdentityprovidersAdfs"></a>

# OAuthProvider putIdentityprovidersAdfs(body)



PUT /api/v2/identityproviders/adfs

Update/Create ADFS Identity Provider



Requires ANY permissions: 

* sso:provider:add
* sso:provider:edit


### Request Body Schema

<script type="text/javascript">
	function copyADFSExample() {
		let temp = $("<textarea>");
		$("body").append(temp);
		temp.val($('#ADFSExample').text()).select();
		document.execCommand("copy");
		temp.remove();
		return false;
	}
</script>

ADFS <a href="#" onclick="return copyADFSExample()">Copy</a>

<div id="ADFSExample">

```{"language":"json", "maxHeight": "250px"}
{ 
  "id": String, 
  "name": String, 
  "relyingPartyIdentifier": String, 
  "issuerURI": String, 
  "certificate": String, 
  "ssoTargetURI": String, 
  "disabled": Boolean, 
  "selfUri": String, 
}
```

</div>


### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.IdentityProviderApi();

let body = {}; // Object | Provider

apiInstance.putIdentityprovidersAdfs(body)
  .then((data) => {
    console.log(`putIdentityprovidersAdfs success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling putIdentityprovidersAdfs');
    console.error(err);
  });
```

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



Requires ANY permissions: 

* sso:provider:add
* sso:provider:edit


### Request Body Schema

<script type="text/javascript">
	function copyCustomerInteractionCenterExample() {
		let temp = $("<textarea>");
		$("body").append(temp);
		temp.val($('#CustomerInteractionCenterExample').text()).select();
		document.execCommand("copy");
		temp.remove();
		return false;
	}
</script>

CustomerInteractionCenter <a href="#" onclick="return copyCustomerInteractionCenterExample()">Copy</a>

<div id="CustomerInteractionCenterExample">

```{"language":"json", "maxHeight": "250px"}
{ 
  "id": String, 
  "name": String, 
  "issuerURI": String, 
  "certificate": String, 
  "ssoTargetURI": String, 
  "disabled": Boolean, 
  "selfUri": String, 
}
```

</div>


### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.IdentityProviderApi();

let body = {}; // Object | Provider

apiInstance.putIdentityprovidersCic(body)
  .then((data) => {
    console.log(`putIdentityprovidersCic success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling putIdentityprovidersCic');
    console.error(err);
  });
```

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



Requires ANY permissions: 

* sso:provider:add
* sso:provider:edit


### Request Body Schema

<script type="text/javascript">
	function copyGSuiteExample() {
		let temp = $("<textarea>");
		$("body").append(temp);
		temp.val($('#GSuiteExample').text()).select();
		document.execCommand("copy");
		temp.remove();
		return false;
	}
</script>

GSuite <a href="#" onclick="return copyGSuiteExample()">Copy</a>

<div id="GSuiteExample">

```{"language":"json", "maxHeight": "250px"}
{ 
  "id": String, 
  "name": String, 
  "relyingPartyIdentifier": String, 
  "issuerURI": String, 
  "certificate": String, 
  "ssoTargetURI": String, 
  "disabled": Boolean, 
  "selfUri": String, 
}
```

</div>


### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.IdentityProviderApi();

let body = {}; // Object | Provider

apiInstance.putIdentityprovidersGsuite(body)
  .then((data) => {
    console.log(`putIdentityprovidersGsuite success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling putIdentityprovidersGsuite');
    console.error(err);
  });
```

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



Requires ANY permissions: 

* sso:provider:add
* sso:provider:edit


### Request Body Schema

<script type="text/javascript">
	function copyIdentityNowExample() {
		let temp = $("<textarea>");
		$("body").append(temp);
		temp.val($('#IdentityNowExample').text()).select();
		document.execCommand("copy");
		temp.remove();
		return false;
	}
</script>

IdentityNow <a href="#" onclick="return copyIdentityNowExample()">Copy</a>

<div id="IdentityNowExample">

```{"language":"json", "maxHeight": "250px"}
{ 
  "id": String, 
  "name": String, 
  "relyingPartyIdentifier": String, 
  "issuerURI": String, 
  "certificate": String, 
  "ssoTargetURI": String, 
  "disabled": Boolean, 
  "selfUri": String, 
}
```

</div>


### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.IdentityProviderApi();

let body = {}; // Object | Provider

apiInstance.putIdentityprovidersIdentitynow(body)
  .then((data) => {
    console.log(`putIdentityprovidersIdentitynow success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling putIdentityprovidersIdentitynow');
    console.error(err);
  });
```

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



Requires ANY permissions: 

* sso:provider:add
* sso:provider:edit


### Request Body Schema

<script type="text/javascript">
	function copyOktaExample() {
		let temp = $("<textarea>");
		$("body").append(temp);
		temp.val($('#OktaExample').text()).select();
		document.execCommand("copy");
		temp.remove();
		return false;
	}
</script>

Okta <a href="#" onclick="return copyOktaExample()">Copy</a>

<div id="OktaExample">

```{"language":"json", "maxHeight": "250px"}
{ 
  "id": String, 
  "name": String, 
  "issuerURI": String, 
  "certificate": String, 
  "ssoTargetURI": String, 
  "disabled": Boolean, 
  "selfUri": String, 
}
```

</div>


### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.IdentityProviderApi();

let body = {}; // Object | Provider

apiInstance.putIdentityprovidersOkta(body)
  .then((data) => {
    console.log(`putIdentityprovidersOkta success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling putIdentityprovidersOkta');
    console.error(err);
  });
```

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



Requires ANY permissions: 

* sso:provider:add
* sso:provider:edit


### Request Body Schema

<script type="text/javascript">
	function copyOneLoginExample() {
		let temp = $("<textarea>");
		$("body").append(temp);
		temp.val($('#OneLoginExample').text()).select();
		document.execCommand("copy");
		temp.remove();
		return false;
	}
</script>

OneLogin <a href="#" onclick="return copyOneLoginExample()">Copy</a>

<div id="OneLoginExample">

```{"language":"json", "maxHeight": "250px"}
{ 
  "id": String, 
  "name": String, 
  "issuerURI": String, 
  "certificate": String, 
  "ssoTargetURI": String, 
  "disabled": Boolean, 
  "selfUri": String, 
}
```

</div>


### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.IdentityProviderApi();

let body = {}; // Object | Provider

apiInstance.putIdentityprovidersOnelogin(body)
  .then((data) => {
    console.log(`putIdentityprovidersOnelogin success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling putIdentityprovidersOnelogin');
    console.error(err);
  });
```

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



Requires ANY permissions: 

* sso:provider:add
* sso:provider:edit


### Request Body Schema

<script type="text/javascript">
	function copyPingIdentityExample() {
		let temp = $("<textarea>");
		$("body").append(temp);
		temp.val($('#PingIdentityExample').text()).select();
		document.execCommand("copy");
		temp.remove();
		return false;
	}
</script>

PingIdentity <a href="#" onclick="return copyPingIdentityExample()">Copy</a>

<div id="PingIdentityExample">

```{"language":"json", "maxHeight": "250px"}
{ 
  "id": String, 
  "name": String, 
  "relyingPartyIdentifier": String, 
  "issuerURI": String, 
  "certificate": String, 
  "ssoTargetURI": String, 
  "disabled": Boolean, 
  "selfUri": String, 
}
```

</div>


### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.IdentityProviderApi();

let body = {}; // Object | Provider

apiInstance.putIdentityprovidersPing(body)
  .then((data) => {
    console.log(`putIdentityprovidersPing success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling putIdentityprovidersPing');
    console.error(err);
  });
```

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



Requires ANY permissions: 

* sso:provider:add
* sso:provider:edit


### Request Body Schema

<script type="text/javascript">
	function copyPureCloudExample() {
		let temp = $("<textarea>");
		$("body").append(temp);
		temp.val($('#PureCloudExample').text()).select();
		document.execCommand("copy");
		temp.remove();
		return false;
	}
</script>

PureCloud <a href="#" onclick="return copyPureCloudExample()">Copy</a>

<div id="PureCloudExample">

```{"language":"json", "maxHeight": "250px"}
{ 
  "id": String, 
  "name": String, 
  "disabled": Boolean, 
  "selfUri": String, 
}
```

</div>


### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.IdentityProviderApi();

let body = {}; // Object | Provider

apiInstance.putIdentityprovidersPurecloud(body)
  .then((data) => {
    console.log(`putIdentityprovidersPurecloud success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling putIdentityprovidersPurecloud');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **body** | **Object** | Provider |  |
{: class="table table-striped"}

### Return type

**OAuthProvider**

<a name="putIdentityprovidersPureengage"></a>

# OAuthProvider putIdentityprovidersPureengage(body)



PUT /api/v2/identityproviders/pureengage

Update/Create PureEngage Identity Provider



Requires ANY permissions: 

* sso:provider:add
* sso:provider:edit


### Request Body Schema

<script type="text/javascript">
	function copyPureEngageExample() {
		let temp = $("<textarea>");
		$("body").append(temp);
		temp.val($('#PureEngageExample').text()).select();
		document.execCommand("copy");
		temp.remove();
		return false;
	}
</script>

PureEngage <a href="#" onclick="return copyPureEngageExample()">Copy</a>

<div id="PureEngageExample">

```{"language":"json", "maxHeight": "250px"}
{ 
  "id": String, 
  "name": String, 
  "autoProvisionUsers": Boolean, 
  "issuerURI": String, 
  "certificate": String, 
  "ssoTargetURI": String, 
  "disabled": Boolean, 
  "selfUri": String, 
}
```

</div>


### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.IdentityProviderApi();

let body = {}; // Object | Provider

apiInstance.putIdentityprovidersPureengage(body)
  .then((data) => {
    console.log(`putIdentityprovidersPureengage success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling putIdentityprovidersPureengage');
    console.error(err);
  });
```

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



Requires ANY permissions: 

* sso:provider:add
* sso:provider:edit


### Request Body Schema

<script type="text/javascript">
	function copySalesforceExample() {
		let temp = $("<textarea>");
		$("body").append(temp);
		temp.val($('#SalesforceExample').text()).select();
		document.execCommand("copy");
		temp.remove();
		return false;
	}
</script>

Salesforce <a href="#" onclick="return copySalesforceExample()">Copy</a>

<div id="SalesforceExample">

```{"language":"json", "maxHeight": "250px"}
{ 
  "id": String, 
  "name": String, 
  "issuerURI": String, 
  "certificate": String, 
  "ssoTargetURI": String, 
  "disabled": Boolean, 
  "selfUri": String, 
}
```

</div>


### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.IdentityProviderApi();

let body = {}; // Object | Provider

apiInstance.putIdentityprovidersSalesforce(body)
  .then((data) => {
    console.log(`putIdentityprovidersSalesforce success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling putIdentityprovidersSalesforce');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **body** | **Object** | Provider |  |
{: class="table table-striped"}

### Return type

**OAuthProvider**

