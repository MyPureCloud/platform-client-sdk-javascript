# MobileDevicesApi

# platformClient.MobileDevicesApi

All URIs are relative to *https://api.mypurecloud.com*

| Method | HTTP request | Description |
| ------------- | ------------- | ------------- |
[**deleteMobiledevice**](MobileDevicesApi#deleteMobiledevice) | **DELETE** /api/v2/mobiledevices/{deviceId} | Delete device
[**getMobiledevice**](MobileDevicesApi#getMobiledevice) | **GET** /api/v2/mobiledevices/{deviceId} | Get device
[**getMobiledevices**](MobileDevicesApi#getMobiledevices) | **GET** /api/v2/mobiledevices | Get a list of all devices.
[**postMobiledevices**](MobileDevicesApi#postMobiledevices) | **POST** /api/v2/mobiledevices | Create User device
[**putMobiledevice**](MobileDevicesApi#putMobiledevice) | **PUT** /api/v2/mobiledevices/{deviceId} | Update device



## deleteMobiledevice

> void deleteMobiledevice(deviceId, opts)


DELETE /api/v2/mobiledevices/{deviceId}

Delete device

Requires NO permissions:

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.MobileDevicesApi();

let deviceId = "deviceId_example"; // String | Device ID
let opts = { 
  'customHeaders': {  // Object.<string, string> | Request Custom Headers
    'X-Service-Name': 'customer-service',
    'X-Request-ID': 'req-12345'
  }
};

apiInstance.deleteMobiledevice(deviceId, opts)
  .then(() => {
    console.log('deleteMobiledevice returned successfully.');
  })
  .catch((err) => {
    console.log('There was a failure calling deleteMobiledevice');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **deviceId** | **String** | Device ID |  |
 **customHeaders** | **Object.<string, string>** | Request Custom Headers | [optional] |

### Return type

void (no response body)


## getMobiledevice

> UserDevice getMobiledevice(deviceId, opts)


GET /api/v2/mobiledevices/{deviceId}

Get device

Requires NO permissions:

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.MobileDevicesApi();

let deviceId = "deviceId_example"; // String | Device ID
let opts = { 
  'customHeaders': {  // Object.<string, string> | Request Custom Headers
    'X-Service-Name': 'customer-service',
    'X-Request-ID': 'req-12345'
  }
};

apiInstance.getMobiledevice(deviceId, opts)
  .then((data) => {
    console.log(`getMobiledevice success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getMobiledevice');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **deviceId** | **String** | Device ID |  |
 **customHeaders** | **Object.<string, string>** | Request Custom Headers | [optional] |

### Return type

**UserDevice**


## getMobiledevices

> DirectoryUserDevicesListing getMobiledevices(opts)


GET /api/v2/mobiledevices

Get a list of all devices.

Requires NO permissions:

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.MobileDevicesApi();

let opts = { 
  'pageSize': 25, // Number | Page size
  'pageNumber': 1, // Number | Page number
  'sortOrder': "ascending", // String | Ascending or descending sort order
  'customHeaders': {  // Object.<string, string> | Request Custom Headers
    'X-Service-Name': 'customer-service',
    'X-Request-ID': 'req-12345'
  }
};

apiInstance.getMobiledevices(opts)
  .then((data) => {
    console.log(`getMobiledevices success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getMobiledevices');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **pageSize** | **Number** | Page size | [optional] [default to 25] |
 **pageNumber** | **Number** | Page number | [optional] [default to 1] |
 **sortOrder** | **String** | Ascending or descending sort order | [optional] [default to ascending]<br />**Values**: ascending, descending |
 **customHeaders** | **Object.<string, string>** | Request Custom Headers | [optional] |

### Return type

**DirectoryUserDevicesListing**


## postMobiledevices

> UserDevice postMobiledevices(body, opts)


POST /api/v2/mobiledevices

Create User device

Requires NO permissions:

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.MobileDevicesApi();

let body = {}; // Object | Device
let opts = { 
  'customHeaders': {  // Object.<string, string> | Request Custom Headers
    'X-Service-Name': 'customer-service',
    'X-Request-ID': 'req-12345'
  }
};

apiInstance.postMobiledevices(body, opts)
  .then((data) => {
    console.log(`postMobiledevices success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling postMobiledevices');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **body** | **Object** | Device |  |
 **customHeaders** | **Object.<string, string>** | Request Custom Headers | [optional] |

### Return type

**UserDevice**


## putMobiledevice

> UserDevice putMobiledevice(deviceId, opts)


PUT /api/v2/mobiledevices/{deviceId}

Update device

Requires NO permissions:

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.MobileDevicesApi();

let deviceId = "deviceId_example"; // String | Device ID
let opts = { 
  'body': {}, // Object | Device
  'customHeaders': {  // Object.<string, string> | Request Custom Headers
    'X-Service-Name': 'customer-service',
    'X-Request-ID': 'req-12345'
  }
};

apiInstance.putMobiledevice(deviceId, opts)
  .then((data) => {
    console.log(`putMobiledevice success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling putMobiledevice');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **deviceId** | **String** | Device ID |  |
 **body** | **Object** | Device | [optional]  |
 **customHeaders** | **Object.<string, string>** | Request Custom Headers | [optional] |

### Return type

**UserDevice**


_purecloud-platform-client-v2@255.1.0_
