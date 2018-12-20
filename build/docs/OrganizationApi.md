---
title: OrganizationApi
---
# platformClient.OrganizationApi

All URIs are relative to *https://api.mypurecloud.com*

| Method | HTTP request | Description |
| ------------- | ------------- | ------------- |
[**getFieldconfig**](OrganizationApi.html#getFieldconfig) | **GET** /api/v2/fieldconfig | Fetch field config for an entity type
[**getOrganizationsMe**](OrganizationApi.html#getOrganizationsMe) | **GET** /api/v2/organizations/me | Get organization.
[**getOrganizationsWhitelist**](OrganizationApi.html#getOrganizationsWhitelist) | **GET** /api/v2/organizations/whitelist | Get organization whitelist settings
[**patchOrganizationsFeature**](OrganizationApi.html#patchOrganizationsFeature) | **PATCH** /api/v2/organizations/features/{featureName} | Update organization
[**putOrganizationsMe**](OrganizationApi.html#putOrganizationsMe) | **PUT** /api/v2/organizations/me | Update organization.
[**putOrganizationsWhitelist**](OrganizationApi.html#putOrganizationsWhitelist) | **PUT** /api/v2/organizations/whitelist | Update organization whitelist settings
{: class="table table-striped"}

<a name="getFieldconfig"></a>

# FieldConfig getFieldconfig(type)



GET /api/v2/fieldconfig

Fetch field config for an entity type



Requires NO permissions: 




### Example Usage

~~~ javascript
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Configure OAuth2 access token for authorization: PureCloud OAuth
platformClient.ApiClient.instance.authentications['PureCloud OAuth'].accessToken = 'YOUR ACCESS TOKEN';

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



Requires NO permissions: 




### Example Usage

~~~ javascript
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Configure OAuth2 access token for authorization: PureCloud OAuth
platformClient.ApiClient.instance.authentications['PureCloud OAuth'].accessToken = 'YOUR ACCESS TOKEN';

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

<a name="getOrganizationsWhitelist"></a>

# OrgWhitelistSettings getOrganizationsWhitelist()



GET /api/v2/organizations/whitelist

Get organization whitelist settings



Requires NO permissions: 




### Example Usage

~~~ javascript
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Configure OAuth2 access token for authorization: PureCloud OAuth
platformClient.ApiClient.instance.authentications['PureCloud OAuth'].accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new platformClient.OrganizationApi();
apiInstance.getOrganizationsWhitelist()
  .then(function(data) {
    console.log(`getOrganizationsWhitelist success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch(function(err) {
  	console.log('There was a failure calling getOrganizationsWhitelist');
    console.error(err);
  });

~~~

### Parameters

This endpoint does not need any parameter.
{: class="table table-striped"}

### Return type

**OrgWhitelistSettings**

<a name="patchOrganizationsFeature"></a>

# OrganizationFeatures patchOrganizationsFeature(featureName, enabled)



PATCH /api/v2/organizations/features/{featureName}

Update organization



Requires ANY permissions: 

* admin


### Request Body Schema

{::options parse_block_html="true" /}

<script type="text/javascript">
	function copyFeatureStateExample() {
		var $temp = $("<textarea>");
		$("body").append($temp);
		$temp.val($('#FeatureStateExample').text()).select();
		document.execCommand("copy");
		$temp.remove();
	}
</script>

FeatureState <a style="cursor: pointer" onclick="copyFeatureStateExample()">Copy</a>

<div id="FeatureStateExample" style="max-height: 250px; overflow-y: scroll;">
~~~ json
{ 
  "enabled": Boolean, 
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



Requires ANY permissions: 

* admin


### Request Body Schema

{::options parse_block_html="true" /}

<script type="text/javascript">
	function copyOrganizationExample() {
		var $temp = $("<textarea>");
		$("body").append($temp);
		$temp.val($('#OrganizationExample').text()).select();
		document.execCommand("copy");
		$temp.remove();
	}
</script>

Organization <a style="cursor: pointer" onclick="copyOrganizationExample()">Copy</a>

<div id="OrganizationExample" style="max-height: 250px; overflow-y: scroll;">
~~~ json
{ 
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

<a name="putOrganizationsWhitelist"></a>

# OrgWhitelistSettings putOrganizationsWhitelist(body)



PUT /api/v2/organizations/whitelist

Update organization whitelist settings



Requires ANY permissions: 

* admin


### Request Body Schema

{::options parse_block_html="true" /}

<script type="text/javascript">
	function copyOrgWhitelistSettingsExample() {
		var $temp = $("<textarea>");
		$("body").append($temp);
		$temp.val($('#OrgWhitelistSettingsExample').text()).select();
		document.execCommand("copy");
		$temp.remove();
	}
</script>

OrgWhitelistSettings <a style="cursor: pointer" onclick="copyOrgWhitelistSettingsExample()">Copy</a>

<div id="OrgWhitelistSettingsExample" style="max-height: 250px; overflow-y: scroll;">
~~~ json
{ 
  "enableWhitelist": Boolean, 
  "domainWhitelist": [String], 
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

var apiInstance = new platformClient.OrganizationApi();

var body = {}; // Object | Whitelist settings

apiInstance.putOrganizationsWhitelist(body)
  .then(function(data) {
    console.log(`putOrganizationsWhitelist success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch(function(err) {
  	console.log('There was a failure calling putOrganizationsWhitelist');
    console.error(err);
  });

~~~

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **body** | **Object** | Whitelist settings |  |
{: class="table table-striped"}

### Return type

**OrgWhitelistSettings**

