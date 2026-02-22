# WebMessagingApi

# platformClient.WebMessagingApi

All URIs are relative to *https://api.mypurecloud.com*

| Method | HTTP request | Description |
| ------------- | ------------- | ------------- |
[**deleteWebmessagingDeploymentPushdevice**](WebMessagingApi#deleteWebmessagingDeploymentPushdevice) | **DELETE** /api/v2/webmessaging/deployments/{deploymentId}/pushdevices/{tokenId} | Delete device information
[**getWebmessagingMessages**](WebMessagingApi#getWebmessagingMessages) | **GET** /api/v2/webmessaging/messages | Get the messages for a web messaging session.
[**patchWebmessagingDeploymentPushdevice**](WebMessagingApi#patchWebmessagingDeploymentPushdevice) | **PATCH** /api/v2/webmessaging/deployments/{deploymentId}/pushdevices/{tokenId} | Edit device information
[**postWebmessagingDeploymentPushdevice**](WebMessagingApi#postWebmessagingDeploymentPushdevice) | **POST** /api/v2/webmessaging/deployments/{deploymentId}/pushdevices/{tokenId} | Add a new device information



## deleteWebmessagingDeploymentPushdevice

> void deleteWebmessagingDeploymentPushdevice(deploymentId, tokenId)


DELETE /api/v2/webmessaging/deployments/{deploymentId}/pushdevices/{tokenId}

Delete device information

Requires NO permissions:

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

let apiInstance = new platformClient.WebMessagingApi();

let deploymentId = "deploymentId_example"; // String | WebMessaging deployment id
let tokenId = "tokenId_example"; // String | Device token id or cookie id

apiInstance.deleteWebmessagingDeploymentPushdevice(deploymentId, tokenId)
  .then(() => {
    console.log('deleteWebmessagingDeploymentPushdevice returned successfully.');
  })
  .catch((err) => {
    console.log('There was a failure calling deleteWebmessagingDeploymentPushdevice');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **deploymentId** | **String** | WebMessaging deployment id |  |
 **tokenId** | **String** | Device token id or cookie id |  |

### Return type

void (no response body)


## getWebmessagingMessages

> WebMessagingMessageEntityList getWebmessagingMessages(opts)


GET /api/v2/webmessaging/messages

Get the messages for a web messaging session.

Requires NO permissions:

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

let apiInstance = new platformClient.WebMessagingApi();

let opts = { 
  'pageSize': 25, // Number | Page size
  'pageNumber': 1 // Number | Page number
};

apiInstance.getWebmessagingMessages(opts)
  .then((data) => {
    console.log(`getWebmessagingMessages success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getWebmessagingMessages');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **pageSize** | **Number** | Page size | [optional] [default to 25] |
 **pageNumber** | **Number** | Page number | [optional] [default to 1] |

### Return type

**WebMessagingMessageEntityList**


## patchWebmessagingDeploymentPushdevice

> void patchWebmessagingDeploymentPushdevice(deploymentId, tokenId, body)


PATCH /api/v2/webmessaging/deployments/{deploymentId}/pushdevices/{tokenId}

Edit device information

Requires NO permissions:

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

let apiInstance = new platformClient.WebMessagingApi();

let deploymentId = "deploymentId_example"; // String | WebMessaging deployment id
let tokenId = "tokenId_example"; // String | Device token id or cookie id
let body = {}; // Object | Request body

apiInstance.patchWebmessagingDeploymentPushdevice(deploymentId, tokenId, body)
  .then(() => {
    console.log('patchWebmessagingDeploymentPushdevice returned successfully.');
  })
  .catch((err) => {
    console.log('There was a failure calling patchWebmessagingDeploymentPushdevice');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **deploymentId** | **String** | WebMessaging deployment id |  |
 **tokenId** | **String** | Device token id or cookie id |  |
 **body** | **Object** | Request body |  |

### Return type

void (no response body)


## postWebmessagingDeploymentPushdevice

> void postWebmessagingDeploymentPushdevice(deploymentId, tokenId, body)


POST /api/v2/webmessaging/deployments/{deploymentId}/pushdevices/{tokenId}

Add a new device information

Requires NO permissions:

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

let apiInstance = new platformClient.WebMessagingApi();

let deploymentId = "deploymentId_example"; // String | WebMessaging deployment id
let tokenId = "tokenId_example"; // String | Device token id or cookie id
let body = {}; // Object | Request body

apiInstance.postWebmessagingDeploymentPushdevice(deploymentId, tokenId, body)
  .then(() => {
    console.log('postWebmessagingDeploymentPushdevice returned successfully.');
  })
  .catch((err) => {
    console.log('There was a failure calling postWebmessagingDeploymentPushdevice');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **deploymentId** | **String** | WebMessaging deployment id |  |
 **tokenId** | **String** | Device token id or cookie id |  |
 **body** | **Object** | Request body |  |

### Return type

void (no response body)


_purecloud-platform-client-v2@246.0.0_
