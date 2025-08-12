# CarrierServicesApi

# platformClient.CarrierServicesApi

All URIs are relative to *https://api.mypurecloud.com*

| Method | HTTP request | Description |
| ------------- | ------------- | ------------- |
[**getCarrierservicesIntegrationsEmergencylocationsMe**](CarrierServicesApi#getCarrierservicesIntegrationsEmergencylocationsMe) | **GET** /api/v2/carrierservices/integrations/emergencylocations/me | Get location for the logged in user
[**postCarrierservicesIntegrationsEmergencylocationsMe**](CarrierServicesApi#postCarrierservicesIntegrationsEmergencylocationsMe) | **POST** /api/v2/carrierservices/integrations/emergencylocations/me | Set current location for the logged in user



## getCarrierservicesIntegrationsEmergencylocationsMe

> EmergencyLocation getCarrierservicesIntegrationsEmergencylocationsMe(phoneNumber)


GET /api/v2/carrierservices/integrations/emergencylocations/me

Get location for the logged in user

Requires NO permissions:

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
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

### Return type

**EmergencyLocation**


## postCarrierservicesIntegrationsEmergencylocationsMe

> EmergencyLocation postCarrierservicesIntegrationsEmergencylocationsMe(opts)


POST /api/v2/carrierservices/integrations/emergencylocations/me

Set current location for the logged in user

Requires NO permissions:

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
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

### Return type

**EmergencyLocation**


_purecloud-platform-client-v2@229.1.0_
