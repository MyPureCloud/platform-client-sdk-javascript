---
title: OrganizationApi
---
# platformClient.OrganizationApi

All URIs are relative to *https://api.mypurecloud.com*

| Method | HTTP request | Description |
| ------------- | ------------- | ------------- |
[**getFieldconfig**](OrganizationApi.html#getFieldconfig) | **GET** /api/v2/fieldconfig | Fetch field config for an entity type
[**getOrganizationsMe**](OrganizationApi.html#getOrganizationsMe) | **GET** /api/v2/organizations/me | Get organization.
[**patchOrganizationsFeature**](OrganizationApi.html#patchOrganizationsFeature) | **PATCH** /api/v2/organizations/features/{featureName} | Update organization
[**putOrganizationsMe**](OrganizationApi.html#putOrganizationsMe) | **PUT** /api/v2/organizations/me | Update organization.
{: class="table table-striped"}

<a name="getFieldconfig"></a>

# FieldConfig getFieldconfig(type)

GET /api/v2/fieldconfig

Fetch field config for an entity type



### Example

~~~ javascript
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Configure OAuth2 access token for authorization: PureCloud Auth
platformClient.ApiClient.instance.authentications['PureCloud Auth'].accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new platformClient.OrganizationApi();

var type = "type_example"; // String | Field type

apiInstance.getFieldconfig(type)
  .then(function(data) {
    console.log(`getFieldconfig success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch(function(err) {
  	console.log('There was a failure calling getFieldconfig');
    console.error(err);
  });

~~~

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **type** | **String** | Field type | <br />**Values**: person, group, org, externalContact |
{: class="table table-striped"}

### Return type

**FieldConfig**

<a name="getOrganizationsMe"></a>

# Organization getOrganizationsMe()

GET /api/v2/organizations/me

Get organization.



### Example

~~~ javascript
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Configure OAuth2 access token for authorization: PureCloud Auth
platformClient.ApiClient.instance.authentications['PureCloud Auth'].accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new platformClient.OrganizationApi();
apiInstance.getOrganizationsMe()
  .then(function(data) {
    console.log(`getOrganizationsMe success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch(function(err) {
  	console.log('There was a failure calling getOrganizationsMe');
    console.error(err);
  });

~~~

### Parameters

This endpoint does not need any parameter.
{: class="table table-striped"}

### Return type

**Organization**

<a name="patchOrganizationsFeature"></a>

# OrganizationFeatures patchOrganizationsFeature(featureName, enabled)

PATCH /api/v2/organizations/features/{featureName}

Update organization



### Example

~~~ javascript
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Configure OAuth2 access token for authorization: PureCloud Auth
platformClient.ApiClient.instance.authentications['PureCloud Auth'].accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new platformClient.OrganizationApi();

var featureName = "featureName_example"; // String | Organization feature

var enabled = {}; // Object | New state of feature

apiInstance.patchOrganizationsFeature(featureName, enabled)
  .then(function(data) {
    console.log(`patchOrganizationsFeature success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch(function(err) {
  	console.log('There was a failure calling patchOrganizationsFeature');
    console.error(err);
  });

~~~

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **featureName** | **String** | Organization feature | <br />**Values**: realtimeCIC, purecloud, hipaa, ucEnabled, pci, purecloudVoice, xmppFederation, chat, informalPhotos, directory, contactCenter, unifiedCommunications, custserv |
 **enabled** | **Object** | New state of feature |  |
{: class="table table-striped"}

### Return type

**OrganizationFeatures**

<a name="putOrganizationsMe"></a>

# Organization putOrganizationsMe(opts)

PUT /api/v2/organizations/me

Update organization.



### Example

~~~ javascript
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Configure OAuth2 access token for authorization: PureCloud Auth
platformClient.ApiClient.instance.authentications['PureCloud Auth'].accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new platformClient.OrganizationApi();

var opts = { 
  'body': {} // Object | Organization
};
apiInstance.putOrganizationsMe(opts)
  .then(function(data) {
    console.log(`putOrganizationsMe success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch(function(err) {
  	console.log('There was a failure calling putOrganizationsMe');
    console.error(err);
  });

~~~

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **body** | **Object** | Organization | [optional]  |
{: class="table table-striped"}

### Return type

**Organization**

