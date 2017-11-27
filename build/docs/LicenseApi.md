---
title: LicenseApi
---
# platformClient.LicenseApi

All URIs are relative to *https://api.mypurecloud.com*

| Method | HTTP request | Description |
| ------------- | ------------- | ------------- |
[**getLicenseDefinition**](LicenseApi.html#getLicenseDefinition) | **GET** /api/v2/license/definitions/{licenseId} | Get PureCloud license definition.
[**getLicenseDefinitions**](LicenseApi.html#getLicenseDefinitions) | **GET** /api/v2/license/definitions | Get all PureCloud license definitions available for the organization.
[**getLicenseOrganization**](LicenseApi.html#getLicenseOrganization) | **GET** /api/v2/license/organization | Get license assignments for the organization.
[**getLicenseToggle**](LicenseApi.html#getLicenseToggle) | **GET** /api/v2/license/toggles/{featureName} | Get PureCloud license feature toggle value.
[**getLicenseUser**](LicenseApi.html#getLicenseUser) | **GET** /api/v2/license/users/{userId} | Get licenses for specified user.
[**postLicenseOrganization**](LicenseApi.html#postLicenseOrganization) | **POST** /api/v2/license/organization | Update the organization&#39;s license assignments in a batch.
[**postLicenseToggle**](LicenseApi.html#postLicenseToggle) | **POST** /api/v2/license/toggles/{featureName} | Switch PureCloud license feature toggle value.
[**postLicenseUsers**](LicenseApi.html#postLicenseUsers) | **POST** /api/v2/license/users | Fetch user licenses in a batch.
{: class="table table-striped"}

<a name="getLicenseDefinition"></a>

# LicenseDefinition getLicenseDefinition(licenseId)

GET /api/v2/license/definitions/{licenseId}

Get PureCloud license definition.



### Example

~~~ javascript
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Configure OAuth2 access token for authorization: PureCloud Auth
platformClient.ApiClient.instance.authentications['PureCloud Auth'].accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new platformClient.LicenseApi();

var licenseId = "licenseId_example"; // String | ID

apiInstance.getLicenseDefinition(licenseId)
  .then(function(data) {
    console.log(`getLicenseDefinition success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch(function(err) {
  	console.log('There was a failure calling getLicenseDefinition');
    console.error(err);
  });

~~~

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **licenseId** | **String** | ID |  |
{: class="table table-striped"}

### Return type

**LicenseDefinition**

<a name="getLicenseDefinitions"></a>

# [LicenseDefinition] getLicenseDefinitions()

GET /api/v2/license/definitions

Get all PureCloud license definitions available for the organization.



### Example

~~~ javascript
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Configure OAuth2 access token for authorization: PureCloud Auth
platformClient.ApiClient.instance.authentications['PureCloud Auth'].accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new platformClient.LicenseApi();
apiInstance.getLicenseDefinitions()
  .then(function(data) {
    console.log(`getLicenseDefinitions success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch(function(err) {
  	console.log('There was a failure calling getLicenseDefinitions');
    console.error(err);
  });

~~~

### Parameters

This endpoint does not need any parameter.
{: class="table table-striped"}

### Return type

**[LicenseDefinition]**

<a name="getLicenseOrganization"></a>

# LicenseOrganization getLicenseOrganization()

GET /api/v2/license/organization

Get license assignments for the organization.



### Example

~~~ javascript
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Configure OAuth2 access token for authorization: PureCloud Auth
platformClient.ApiClient.instance.authentications['PureCloud Auth'].accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new platformClient.LicenseApi();
apiInstance.getLicenseOrganization()
  .then(function(data) {
    console.log(`getLicenseOrganization success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch(function(err) {
  	console.log('There was a failure calling getLicenseOrganization');
    console.error(err);
  });

~~~

### Parameters

This endpoint does not need any parameter.
{: class="table table-striped"}

### Return type

**LicenseOrganization**

<a name="getLicenseToggle"></a>

# LicenseOrgToggle getLicenseToggle(featureName)

GET /api/v2/license/toggles/{featureName}

Get PureCloud license feature toggle value.



### Example

~~~ javascript
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Configure OAuth2 access token for authorization: PureCloud Auth
platformClient.ApiClient.instance.authentications['PureCloud Auth'].accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new platformClient.LicenseApi();

var featureName = "featureName_example"; // String | featureName

apiInstance.getLicenseToggle(featureName)
  .then(function(data) {
    console.log(`getLicenseToggle success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch(function(err) {
  	console.log('There was a failure calling getLicenseToggle');
    console.error(err);
  });

~~~

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **featureName** | **String** | featureName |  |
{: class="table table-striped"}

### Return type

**LicenseOrgToggle**

<a name="getLicenseUser"></a>

# LicenseUser getLicenseUser(userId)

GET /api/v2/license/users/{userId}

Get licenses for specified user.



### Example

~~~ javascript
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Configure OAuth2 access token for authorization: PureCloud Auth
platformClient.ApiClient.instance.authentications['PureCloud Auth'].accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new platformClient.LicenseApi();

var userId = "userId_example"; // String | ID

apiInstance.getLicenseUser(userId)
  .then(function(data) {
    console.log(`getLicenseUser success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch(function(err) {
  	console.log('There was a failure calling getLicenseUser');
    console.error(err);
  });

~~~

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **userId** | **String** | ID |  |
{: class="table table-striped"}

### Return type

**LicenseUser**

<a name="postLicenseOrganization"></a>

# [LicenseUpdateStatus] postLicenseOrganization(opts)

POST /api/v2/license/organization

Update the organization&#39;s license assignments in a batch.



### Example

~~~ javascript
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Configure OAuth2 access token for authorization: PureCloud Auth
platformClient.ApiClient.instance.authentications['PureCloud Auth'].accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new platformClient.LicenseApi();

var opts = { 
  'body': {} // Object | The license assignments to update.
};
apiInstance.postLicenseOrganization(opts)
  .then(function(data) {
    console.log(`postLicenseOrganization success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch(function(err) {
  	console.log('There was a failure calling postLicenseOrganization');
    console.error(err);
  });

~~~

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **body** | **Object** | The license assignments to update. | [optional]  |
{: class="table table-striped"}

### Return type

**[LicenseUpdateStatus]**

<a name="postLicenseToggle"></a>

# LicenseOrgToggle postLicenseToggle(featureName)

POST /api/v2/license/toggles/{featureName}

Switch PureCloud license feature toggle value.



### Example

~~~ javascript
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Configure OAuth2 access token for authorization: PureCloud Auth
platformClient.ApiClient.instance.authentications['PureCloud Auth'].accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new platformClient.LicenseApi();

var featureName = "featureName_example"; // String | featureName

apiInstance.postLicenseToggle(featureName)
  .then(function(data) {
    console.log(`postLicenseToggle success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch(function(err) {
  	console.log('There was a failure calling postLicenseToggle');
    console.error(err);
  });

~~~

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **featureName** | **String** | featureName |  |
{: class="table table-striped"}

### Return type

**LicenseOrgToggle**

<a name="postLicenseUsers"></a>

# **{&#39;String&#39;: Object}** postLicenseUsers(opts)

POST /api/v2/license/users

Fetch user licenses in a batch.



### Example

~~~ javascript
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Configure OAuth2 access token for authorization: PureCloud Auth
platformClient.ApiClient.instance.authentications['PureCloud Auth'].accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new platformClient.LicenseApi();

var opts = { 
  'body': [{}] // Object | The user IDs to fetch.
};
apiInstance.postLicenseUsers(opts)
  .then(function(data) {
    console.log(`postLicenseUsers success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch(function(err) {
  	console.log('There was a failure calling postLicenseUsers');
    console.error(err);
  });

~~~

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **body** | **Object** | The user IDs to fetch. | [optional]  |
{: class="table table-striped"}

### Return type

**{&#39;String&#39;: Object}**

