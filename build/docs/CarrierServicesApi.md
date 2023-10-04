---
title: CarrierServicesApi
---
# platformClient.CarrierServicesApi

All URIs are relative to *https://api.mypurecloud.com*

| Method | HTTP request | Description |
| ------------- | ------------- | ------------- |
[**getCarrierservicesIntegrationsEmergencylocationsMe**](CarrierServicesApi.html#getCarrierservicesIntegrationsEmergencylocationsMe) | **GET** /api/v2/carrierservices/integrations/emergencylocations/me | Get location for the logged in user
[**postCarrierservicesIntegrationsEmergencylocationsMe**](CarrierServicesApi.html#postCarrierservicesIntegrationsEmergencylocationsMe) | **POST** /api/v2/carrierservices/integrations/emergencylocations/me | Set current location for the logged in user
{: class="table table-striped"}

<a name="getCarrierservicesIntegrationsEmergencylocationsMe"></a>

# EmergencyLocation getCarrierservicesIntegrationsEmergencylocationsMe(phoneNumber)


GET /api/v2/carrierservices/integrations/emergencylocations/me

Get location for the logged in user

Requires NO permissions:

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.CarrierServicesApi();

let phoneNumber = "phoneNumber_example"; // String | Phone number in E164 format

apiInstance.getCarrierservicesIntegrationsEmergencylocationsMe(phoneNumber)
  .then((data) => {
    console.log(`getCarrierservicesIntegrationsEmergencylocationsMe success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getCarrierservicesIntegrationsEmergencylocationsMe');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **phoneNumber** | **String** | Phone number in E164 format |  |
{: class="table table-striped"}

### Return type

**EmergencyLocation**

<a name="postCarrierservicesIntegrationsEmergencylocationsMe"></a>

# EmergencyLocation postCarrierservicesIntegrationsEmergencylocationsMe(opts)


POST /api/v2/carrierservices/integrations/emergencylocations/me

Set current location for the logged in user

Requires NO permissions:

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.CarrierServicesApi();

let opts = { 
  'body': {} // Object | 
};

apiInstance.postCarrierservicesIntegrationsEmergencylocationsMe(opts)
  .then((data) => {
    console.log(`postCarrierservicesIntegrationsEmergencylocationsMe success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling postCarrierservicesIntegrationsEmergencylocationsMe');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **body** | **Object** |  | [optional]  |
{: class="table table-striped"}

### Return type

**EmergencyLocation**

