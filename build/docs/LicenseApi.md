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
[**getLicenseUser**](LicenseApi.html#getLicenseUser) | **GET** /api/v2/license/users/{userId} | Get licenses for specified user.
[**postLicenseOrganization**](LicenseApi.html#postLicenseOrganization) | **POST** /api/v2/license/organization | Update the organization&#39;s license assignments in a batch.
[**postLicenseUsers**](LicenseApi.html#postLicenseUsers) | **POST** /api/v2/license/users | Fetch user licenses in a batch.
{: class="table table-striped"}

<a name="getLicenseDefinition"></a>

# [**LicenseDefinition**](LicenseDefinition.html) getLicenseDefinition(licenseId)

GET /api/v2/license/definitions/{licenseId}

Get PureCloud license definition.



### Example

~~~ javascript
const platformClient = require('purecloud-platform-client-v2');

// Configure OAuth2 access token for authorization: PureCloud Auth
platformClient.ApiClient.instance.authentications['PureCloud Auth'].accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new platformClient.LicenseApi();

var licenseId = "licenseId_example"; // String | ID

apiInstance.getLicenseDefinition(licenseId)
  .then(function(data) {
    console.log(`getLicenseDefinition success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch(function(error) {
  	console.log('There was a failure calling getLicenseDefinition');
    console.error(error);
  });

~~~

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **licenseId** | **String**| ID |  |
{: class="table table-striped"}

### Return type

[**LicenseDefinition**](LicenseDefinition.html)

<a name="getLicenseDefinitions"></a>

# [**[LicenseDefinition]**](LicenseDefinition.html) getLicenseDefinitions()

GET /api/v2/license/definitions

Get all PureCloud license definitions available for the organization.



### Example

~~~ javascript
const platformClient = require('purecloud-platform-client-v2');

// Configure OAuth2 access token for authorization: PureCloud Auth
platformClient.ApiClient.instance.authentications['PureCloud Auth'].accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new platformClient.LicenseApi();
apiInstance.getLicenseDefinitions()
  .then(function(data) {
    console.log(`getLicenseDefinitions success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch(function(error) {
  	console.log('There was a failure calling getLicenseDefinitions');
    console.error(error);
  });

~~~

### Parameters

This endpoint does not need any parameter.
{: class="table table-striped"}

### Return type

[**[LicenseDefinition]**](LicenseDefinition.html)

<a name="getLicenseOrganization"></a>

# [**LicenseOrganization**](LicenseOrganization.html) getLicenseOrganization()

GET /api/v2/license/organization

Get license assignments for the organization.



### Example

~~~ javascript
const platformClient = require('purecloud-platform-client-v2');

// Configure OAuth2 access token for authorization: PureCloud Auth
platformClient.ApiClient.instance.authentications['PureCloud Auth'].accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new platformClient.LicenseApi();
apiInstance.getLicenseOrganization()
  .then(function(data) {
    console.log(`getLicenseOrganization success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch(function(error) {
  	console.log('There was a failure calling getLicenseOrganization');
    console.error(error);
  });

~~~

### Parameters

This endpoint does not need any parameter.
{: class="table table-striped"}

### Return type

[**LicenseOrganization**](LicenseOrganization.html)

<a name="getLicenseUser"></a>

# [**LicenseUser**](LicenseUser.html) getLicenseUser(userId)

GET /api/v2/license/users/{userId}

Get licenses for specified user.



### Example

~~~ javascript
const platformClient = require('purecloud-platform-client-v2');

// Configure OAuth2 access token for authorization: PureCloud Auth
platformClient.ApiClient.instance.authentications['PureCloud Auth'].accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new platformClient.LicenseApi();

var userId = "userId_example"; // String | ID

apiInstance.getLicenseUser(userId)
  .then(function(data) {
    console.log(`getLicenseUser success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch(function(error) {
  	console.log('There was a failure calling getLicenseUser');
    console.error(error);
  });

~~~

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **userId** | **String**| ID |  |
{: class="table table-striped"}

### Return type

[**LicenseUser**](LicenseUser.html)

<a name="postLicenseOrganization"></a>

# [**[LicenseUpdateStatus]**](LicenseUpdateStatus.html) postLicenseOrganization(opts)

POST /api/v2/license/organization

Update the organization&#39;s license assignments in a batch.



### Example

~~~ javascript
const platformClient = require('purecloud-platform-client-v2');

// Configure OAuth2 access token for authorization: PureCloud Auth
platformClient.ApiClient.instance.authentications['PureCloud Auth'].accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new platformClient.LicenseApi();

var opts = { 
  'body': new platformClient.LicenseBatchAssignmentRequest() // LicenseBatchAssignmentRequest | The license assignments to update.
};
apiInstance.postLicenseOrganization(opts)
  .then(function(data) {
    console.log(`postLicenseOrganization success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch(function(error) {
  	console.log('There was a failure calling postLicenseOrganization');
    console.error(error);
  });

~~~

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **body** | [**LicenseBatchAssignmentRequest**](LicenseBatchAssignmentRequest.html)| The license assignments to update. | [optional]  |
{: class="table table-striped"}

### Return type

[**[LicenseUpdateStatus]**](LicenseUpdateStatus.html)

<a name="postLicenseUsers"></a>

# **{&#39;String&#39;: Object}** postLicenseUsers(opts)

POST /api/v2/license/users

Fetch user licenses in a batch.



### Example

~~~ javascript
const platformClient = require('purecloud-platform-client-v2');

// Configure OAuth2 access token for authorization: PureCloud Auth
platformClient.ApiClient.instance.authentications['PureCloud Auth'].accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new platformClient.LicenseApi();

var opts = { 
  'body': [new platformClient.[String]()] // [String] | The user IDs to fetch.
};
apiInstance.postLicenseUsers(opts)
  .then(function(data) {
    console.log(`postLicenseUsers success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch(function(error) {
  	console.log('There was a failure calling postLicenseUsers');
    console.error(error);
  });

~~~

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **body** | **[String]**| The user IDs to fetch. | [optional]  |
{: class="table table-striped"}

### Return type

**{&#39;String&#39;: Object}**

