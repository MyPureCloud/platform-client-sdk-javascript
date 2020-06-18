---
title: OrganizationApi
---
# platformClient.OrganizationApi

All URIs are relative to *https://api.mypurecloud.com*

| Method | HTTP request | Description |
| ------------- | ------------- | ------------- |
[**getFieldconfig**](OrganizationApi.html#getFieldconfig) | **GET** /api/v2/fieldconfig | Fetch field config for an entity type
[**getOrganizationsEmbeddedintegration**](OrganizationApi.html#getOrganizationsEmbeddedintegration) | **GET** /api/v2/organizations/embeddedintegration | Get the list of domains that will be allowed to embed PureCloud applications
[**getOrganizationsIpaddressauthentication**](OrganizationApi.html#getOrganizationsIpaddressauthentication) | **GET** /api/v2/organizations/ipaddressauthentication | Get organization IP address whitelist settings
[**getOrganizationsMe**](OrganizationApi.html#getOrganizationsMe) | **GET** /api/v2/organizations/me | Get organization.
[**getOrganizationsWhitelist**](OrganizationApi.html#getOrganizationsWhitelist) | **GET** /api/v2/organizations/whitelist | Use PUT /api/v2/organizations/embeddedintegration instead
[**patchOrganizationsFeature**](OrganizationApi.html#patchOrganizationsFeature) | **PATCH** /api/v2/organizations/features/{featureName} | Update organization
[**putOrganizationsEmbeddedintegration**](OrganizationApi.html#putOrganizationsEmbeddedintegration) | **PUT** /api/v2/organizations/embeddedintegration | Update the list of domains that will be allowed to embed PureCloud applications
[**putOrganizationsIpaddressauthentication**](OrganizationApi.html#putOrganizationsIpaddressauthentication) | **PUT** /api/v2/organizations/ipaddressauthentication | Update organization IP address whitelist settings
[**putOrganizationsMe**](OrganizationApi.html#putOrganizationsMe) | **PUT** /api/v2/organizations/me | Update organization.
[**putOrganizationsWhitelist**](OrganizationApi.html#putOrganizationsWhitelist) | **PUT** /api/v2/organizations/whitelist | Use PUT /api/v2/organizations/embeddedintegration instead
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

<a name="getOrganizationsEmbeddedintegration"></a>

# EmbeddedIntegration getOrganizationsEmbeddedintegration()



GET /api/v2/organizations/embeddedintegration

Get the list of domains that will be allowed to embed PureCloud applications



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

apiInstance.getOrganizationsEmbeddedintegration()
  .then((data) => {
    console.log(`getOrganizationsEmbeddedintegration success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getOrganizationsEmbeddedintegration');
    console.error(err);
  });
```

### Parameters

This endpoint does not need any parameter.
{: class="table table-striped"}

### Return type

**EmbeddedIntegration**

<a name="getOrganizationsIpaddressauthentication"></a>

# IpAddressAuthentication getOrganizationsIpaddressauthentication()



GET /api/v2/organizations/ipaddressauthentication

Get organization IP address whitelist settings



Requires ANY permissions: 

* directory:organization:admin



### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.OrganizationApi();

apiInstance.getOrganizationsIpaddressauthentication()
  .then((data) => {
    console.log(`getOrganizationsIpaddressauthentication success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getOrganizationsIpaddressauthentication');
    console.error(err);
  });
```

### Parameters

This endpoint does not need any parameter.
{: class="table table-striped"}

### Return type

**IpAddressAuthentication**

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

<span style="background-color: #f0ad4e;display: inline-block;padding: 7px;font-weight: bold;line-height: 1;color: #ffffff;text-align: center;white-space: nowrap;vertical-align: baseline;border-radius: .25em;margin: 10px 0;">DEPRECATED</span>

GET /api/v2/organizations/whitelist

Use PUT /api/v2/organizations/embeddedintegration instead



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

* directory:organization:admin


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

<a name="putOrganizationsEmbeddedintegration"></a>

# EmbeddedIntegration putOrganizationsEmbeddedintegration(body)



PUT /api/v2/organizations/embeddedintegration

Update the list of domains that will be allowed to embed PureCloud applications



Requires ANY permissions: 

* directory:organization:admin


### Request Body Schema

<script type="text/javascript">
	function copyEmbeddedIntegrationExample() {
		let temp = $("<textarea>");
		$("body").append(temp);
		temp.val($('#EmbeddedIntegrationExample').text()).select();
		document.execCommand("copy");
		temp.remove();
		return false;
	}
</script>

EmbeddedIntegration <a href="#" onclick="return copyEmbeddedIntegrationExample()">Copy</a>

<div id="EmbeddedIntegrationExample">

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

apiInstance.putOrganizationsEmbeddedintegration(body)
  .then((data) => {
    console.log(`putOrganizationsEmbeddedintegration success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling putOrganizationsEmbeddedintegration');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **body** | **Object** | Whitelist settings |  |
{: class="table table-striped"}

### Return type

**EmbeddedIntegration**

<a name="putOrganizationsIpaddressauthentication"></a>

# IpAddressAuthentication putOrganizationsIpaddressauthentication(body)



PUT /api/v2/organizations/ipaddressauthentication

Update organization IP address whitelist settings



Requires ANY permissions: 

* directory:organization:admin


### Request Body Schema

<script type="text/javascript">
	function copyIpAddressAuthenticationExample() {
		let temp = $("<textarea>");
		$("body").append(temp);
		temp.val($('#IpAddressAuthenticationExample').text()).select();
		document.execCommand("copy");
		temp.remove();
		return false;
	}
</script>

IpAddressAuthentication <a href="#" onclick="return copyIpAddressAuthenticationExample()">Copy</a>

<div id="IpAddressAuthenticationExample">

```{"language":"json", "maxHeight": "250px"}
{ 
  "networkWhitelist": [String], 
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

let body = {}; // Object | IP address Whitelist settings

apiInstance.putOrganizationsIpaddressauthentication(body)
  .then((data) => {
    console.log(`putOrganizationsIpaddressauthentication success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling putOrganizationsIpaddressauthentication');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **body** | **Object** | IP address Whitelist settings |  |
{: class="table table-striped"}

### Return type

**IpAddressAuthentication**

<a name="putOrganizationsMe"></a>

# Organization putOrganizationsMe(opts)



PUT /api/v2/organizations/me

Update organization.



Requires ANY permissions: 

* directory:organization:admin


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
  "productPlatform": String, 
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

<span style="background-color: #f0ad4e;display: inline-block;padding: 7px;font-weight: bold;line-height: 1;color: #ffffff;text-align: center;white-space: nowrap;vertical-align: baseline;border-radius: .25em;margin: 10px 0;">DEPRECATED</span>

PUT /api/v2/organizations/whitelist

Use PUT /api/v2/organizations/embeddedintegration instead



Requires ANY permissions: 

* directory:organization:admin


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

