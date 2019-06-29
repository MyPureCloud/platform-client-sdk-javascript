---
title: LicenseApi
---
# platformClient.LicenseApi

All URIs are relative to *https://api.mypurecloud.com*

| Method | HTTP request | Description |
| ------------- | ------------- | ------------- |
[**getLicenseDefinition**](LicenseApi.html#getLicenseDefinition) | **GET** /api/v2/license/definitions/{licenseId} | Get PureCloud license definition.
[**getLicenseDefinitions**](LicenseApi.html#getLicenseDefinitions) | **GET** /api/v2/license/definitions | Get all PureCloud license definitions available for the organization.
[**getLicenseToggle**](LicenseApi.html#getLicenseToggle) | **GET** /api/v2/license/toggles/{featureName} | Get PureCloud license feature toggle value.
[**getLicenseUser**](LicenseApi.html#getLicenseUser) | **GET** /api/v2/license/users/{userId} | Get licenses for specified user.
[**getLicenseUsers**](LicenseApi.html#getLicenseUsers) | **GET** /api/v2/license/users | Get a page of users and their licenses
[**postLicenseOrganization**](LicenseApi.html#postLicenseOrganization) | **POST** /api/v2/license/organization | Update the organization&#39;s license assignments in a batch.
[**postLicenseToggle**](LicenseApi.html#postLicenseToggle) | **POST** /api/v2/license/toggles/{featureName} | Switch PureCloud license feature toggle value.
[**postLicenseUsers**](LicenseApi.html#postLicenseUsers) | **POST** /api/v2/license/users | Fetch user licenses in a batch.
{: class="table table-striped"}

<a name="getLicenseDefinition"></a>

# LicenseDefinition getLicenseDefinition(licenseId)



GET /api/v2/license/definitions/{licenseId}

Get PureCloud license definition.



Requires ANY permissions: 

* authorization:grant:add



### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.LicenseApi();

let licenseId = "licenseId_example"; // String | ID

apiInstance.getLicenseDefinition(licenseId)
  .then((data) => {
    console.log(`getLicenseDefinition success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getLicenseDefinition');
    console.error(err);
  });
```

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



Requires ANY permissions: 

* authorization:grant:add



### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.LicenseApi();

apiInstance.getLicenseDefinitions()
  .then((data) => {
    console.log(`getLicenseDefinitions success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getLicenseDefinitions');
    console.error(err);
  });
```

### Parameters

This endpoint does not need any parameter.
{: class="table table-striped"}

### Return type

**[LicenseDefinition]**

<a name="getLicenseToggle"></a>

# LicenseOrgToggle getLicenseToggle(featureName)



GET /api/v2/license/toggles/{featureName}

Get PureCloud license feature toggle value.



Requires ANY permissions: 

* authorization:grant:add



### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.LicenseApi();

let featureName = "featureName_example"; // String | featureName

apiInstance.getLicenseToggle(featureName)
  .then((data) => {
    console.log(`getLicenseToggle success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getLicenseToggle');
    console.error(err);
  });
```

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



Requires ANY permissions: 

* authorization:grant:add



### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.LicenseApi();

let userId = "userId_example"; // String | ID

apiInstance.getLicenseUser(userId)
  .then((data) => {
    console.log(`getLicenseUser success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getLicenseUser');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **userId** | **String** | ID |  |
{: class="table table-striped"}

### Return type

**LicenseUser**

<a name="getLicenseUsers"></a>

# UserLicensesEntityListing getLicenseUsers(opts)



GET /api/v2/license/users

Get a page of users and their licenses

Retrieve a page of users in an organization along with the licenses they possess.

Requires NO permissions: 




### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.LicenseApi();

let opts = { 
  'pageSize': 25, // Number | Page size
  'pageNumber': 1 // Number | Page number
};

apiInstance.getLicenseUsers(opts)
  .then((data) => {
    console.log(`getLicenseUsers success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getLicenseUsers');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **pageSize** | **Number** | Page size | [optional] [default to 25] |
 **pageNumber** | **Number** | Page number | [optional] [default to 1] |
{: class="table table-striped"}

### Return type

**UserLicensesEntityListing**

<a name="postLicenseOrganization"></a>

# [LicenseUpdateStatus] postLicenseOrganization(opts)



POST /api/v2/license/organization

Update the organization&#39;s license assignments in a batch.



Requires ANY permissions: 

* authorization:grant:add


### Request Body Schema

<script type="text/javascript">
	function copyLicenseBatchAssignmentRequestExample() {
		let temp = $("<textarea>");
		$("body").append(temp);
		temp.val($('#LicenseBatchAssignmentRequestExample').text()).select();
		document.execCommand("copy");
		temp.remove();
		return false;
	}
</script>

LicenseBatchAssignmentRequest <a href="#" onclick="return copyLicenseBatchAssignmentRequestExample()">Copy</a>

<div id="LicenseBatchAssignmentRequestExample">

```{"language":"json", "maxHeight": "250px"}
{ 
  "assignments": { 
    "licenseId": String, 
    "userIdsAdd": [String], 
    "userIdsRemove": [String], 
  },  
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

let apiInstance = new platformClient.LicenseApi();

let opts = { 
  'body': {} // Object | The license assignments to update.
};

apiInstance.postLicenseOrganization(opts)
  .then((data) => {
    console.log(`postLicenseOrganization success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling postLicenseOrganization');
    console.error(err);
  });
```

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



Requires ANY permissions: 

* authorization:grant:add



### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.LicenseApi();

let featureName = "featureName_example"; // String | featureName

apiInstance.postLicenseToggle(featureName)
  .then((data) => {
    console.log(`postLicenseToggle success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling postLicenseToggle');
    console.error(err);
  });
```

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



Requires NO permissions: 




### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.LicenseApi();

let opts = { 
  'body': [{}] // Object | The user IDs to fetch.
};

apiInstance.postLicenseUsers(opts)
  .then((data) => {
    console.log(`postLicenseUsers success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling postLicenseUsers');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **body** | **Object** | The user IDs to fetch. | [optional]  |
{: class="table table-striped"}

### Return type

**{&#39;String&#39;: Object}**

