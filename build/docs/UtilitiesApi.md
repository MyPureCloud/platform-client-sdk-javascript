---
title: UtilitiesApi
---
# platformClient.UtilitiesApi

All URIs are relative to *https://api.mypurecloud.com*

| Method | HTTP request | Description |
| ------------- | ------------- | ------------- |
[**getDate**](UtilitiesApi.html#getDate) | **GET** /api/v2/date | Get the current system date/time
[**getIpranges**](UtilitiesApi.html#getIpranges) | **GET** /api/v2/ipranges | Get public ip address ranges for Genesys Cloud
[**getTimezones**](UtilitiesApi.html#getTimezones) | **GET** /api/v2/timezones | Get time zones list
[**postCertificateDetails**](UtilitiesApi.html#postCertificateDetails) | **POST** /api/v2/certificate/details | Returns the information about an X509 PEM encoded certificate or certificate chain.
{: class="table table-striped"}

<a name="getDate"></a>

# ServerDate getDate()


GET /api/v2/date

Get the current system date/time

Requires NO permissions:

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
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

<a name="getIpranges"></a>

# IpAddressRangeListing getIpranges()


GET /api/v2/ipranges

Get public ip address ranges for Genesys Cloud

Requires NO permissions:

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
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

<a name="getTimezones"></a>

# TimeZoneEntityListing getTimezones(opts)


GET /api/v2/timezones

Get time zones list

Requires NO permissions:

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
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
{: class="table table-striped"}

### Return type

**TimeZoneEntityListing**

<a name="postCertificateDetails"></a>

# ParsedCertificate postCertificateDetails(body)


POST /api/v2/certificate/details

Returns the information about an X509 PEM encoded certificate or certificate chain.

Requires NO permissions:

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
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
{: class="table table-striped"}

### Return type

**ParsedCertificate**

