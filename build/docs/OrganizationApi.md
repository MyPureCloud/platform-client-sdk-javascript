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

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.OrganizationApi();

let type = "type_example"; // String | Field type

apiInstance.getFieldconfig(type)
  .then((data) => {
    console.log(`getFieldconfig success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getFieldconfig');
    console.error(err);
  });
```

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

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.OrganizationApi();

apiInstance.getOrganizationsMe()
  .then((data) => {
    console.log(`getOrganizationsMe success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getOrganizationsMe');
    console.error(err);
  });
```

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

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.OrganizationApi();

apiInstance.getOrganizationsWhitelist()
  .then((data) => {
    console.log(`getOrganizationsWhitelist success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getOrganizationsWhitelist');
    console.error(err);
  });
```

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

<script type="text/javascript">
	function copyFeatureStateExample() {
		let temp = $("<textarea>");
		$("body").append(temp);
		temp.val($('#FeatureStateExample').text()).select();
		document.execCommand("copy");
		temp.remove();
		return false;
	}
</script>

FeatureState <a href="#" onclick="return copyFeatureStateExample()">Copy</a>

<div id="FeatureStateExample">

```{"language":"json", "maxHeight": "250px"}
{ 
  "enabled": Boolean, 
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

let apiInstance = new platformClient.OrganizationApi();

let featureName = "featureName_example"; // String | Organization feature
let enabled = {}; // Object | New state of feature

apiInstance.patchOrganizationsFeature(featureName, enabled)
  .then((data) => {
    console.log(`patchOrganizationsFeature success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling patchOrganizationsFeature');
    console.error(err);
  });
```

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

<script type="text/javascript">
	function copyOrganizationExample() {
		let temp = $("<textarea>");
		$("body").append(temp);
		temp.val($('#OrganizationExample').text()).select();
		document.execCommand("copy");
		temp.remove();
		return false;
	}
</script>

Organization <a href="#" onclick="return copyOrganizationExample()">Copy</a>

<div id="OrganizationExample">

```{"language":"json", "maxHeight": "250px"}
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

let apiInstance = new platformClient.OrganizationApi();

let opts = { 
  'body': {} // Object | Organization
};

apiInstance.putOrganizationsMe(opts)
  .then((data) => {
    console.log(`putOrganizationsMe success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling putOrganizationsMe');
    console.error(err);
  });
```

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

<script type="text/javascript">
	function copyOrgWhitelistSettingsExample() {
		let temp = $("<textarea>");
		$("body").append(temp);
		temp.val($('#OrgWhitelistSettingsExample').text()).select();
		document.execCommand("copy");
		temp.remove();
		return false;
	}
</script>

OrgWhitelistSettings <a href="#" onclick="return copyOrgWhitelistSettingsExample()">Copy</a>

<div id="OrgWhitelistSettingsExample">

```{"language":"json", "maxHeight": "250px"}
{ 
  "enableWhitelist": Boolean, 
  "domainWhitelist": [String], 
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

let apiInstance = new platformClient.OrganizationApi();

let body = {}; // Object | Whitelist settings

apiInstance.putOrganizationsWhitelist(body)
  .then((data) => {
    console.log(`putOrganizationsWhitelist success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling putOrganizationsWhitelist');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **body** | **Object** | Whitelist settings |  |
{: class="table table-striped"}

### Return type

**OrgWhitelistSettings**

