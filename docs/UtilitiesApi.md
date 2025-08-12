# UtilitiesApi

# platformClient.UtilitiesApi

All URIs are relative to *https://api.mypurecloud.com*

| Method | HTTP request | Description |
| ------------- | ------------- | ------------- |
[**getDate**](UtilitiesApi#getDate) | **GET** /api/v2/date | Get the current system date/time
[**getIpranges**](UtilitiesApi#getIpranges) | **GET** /api/v2/ipranges | Get public ip address ranges for Genesys Cloud
[**getTimezones**](UtilitiesApi#getTimezones) | **GET** /api/v2/timezones | Get time zones list
[**postCertificateDetails**](UtilitiesApi#postCertificateDetails) | **POST** /api/v2/certificate/details | Returns the information about an X509 PEM encoded certificate or certificate chain.



## getDate

> ServerDate getDate()


GET /api/v2/date

Get the current system date/time

Requires NO permissions:

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.UtilitiesApi();

apiInstance.getDate()
  .then((data) => {
    console.log(`getDate success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getDate');
    console.error(err);
  });
```

### Parameters

This endpoint does not need any parameter.

### Return type

**ServerDate**


## getIpranges

> IpAddressRangeListing getIpranges()


GET /api/v2/ipranges

Get public ip address ranges for Genesys Cloud

Requires NO permissions:

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.UtilitiesApi();

apiInstance.getIpranges()
  .then((data) => {
    console.log(`getIpranges success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getIpranges');
    console.error(err);
  });
```

### Parameters

This endpoint does not need any parameter.

### Return type

**IpAddressRangeListing**


## getTimezones

> TimeZoneEntityListing getTimezones(opts)


GET /api/v2/timezones

Get time zones list

Requires NO permissions:

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.UtilitiesApi();

let opts = { 
  'pageSize': 25, // Number | Page size
  'pageNumber': 1 // Number | Page number
};

apiInstance.getTimezones(opts)
  .then((data) => {
    console.log(`getTimezones success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getTimezones');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **pageSize** | **Number** | Page size | [optional] [default to 25] |
 **pageNumber** | **Number** | Page number | [optional] [default to 1] |

### Return type

**TimeZoneEntityListing**


## postCertificateDetails

> ParsedCertificate postCertificateDetails(body)


POST /api/v2/certificate/details

Returns the information about an X509 PEM encoded certificate or certificate chain.

Requires NO permissions:

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.UtilitiesApi();

let body = {}; // Object | Certificate

apiInstance.postCertificateDetails(body)
  .then((data) => {
    console.log(`postCertificateDetails success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling postCertificateDetails');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **body** | **Object** | Certificate |  |

### Return type

**ParsedCertificate**


_purecloud-platform-client-v2@229.1.0_
