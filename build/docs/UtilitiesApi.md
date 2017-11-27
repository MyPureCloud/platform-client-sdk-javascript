---
title: UtilitiesApi
---
# platformClient.UtilitiesApi

All URIs are relative to *https://api.mypurecloud.com*

| Method | HTTP request | Description |
| ------------- | ------------- | ------------- |
[**getDate**](UtilitiesApi.html#getDate) | **GET** /api/v2/date | Get the current system date/time
[**getTimezones**](UtilitiesApi.html#getTimezones) | **GET** /api/v2/timezones | Get time zones list
[**postCertificateDetails**](UtilitiesApi.html#postCertificateDetails) | **POST** /api/v2/certificate/details | Returns the information about an X509 PEM encoded certificate or certificate chain.
{: class="table table-striped"}

<a name="getDate"></a>

# ServerDate getDate()

GET /api/v2/date

Get the current system date/time



### Example

~~~ javascript
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Configure OAuth2 access token for authorization: PureCloud Auth
platformClient.ApiClient.instance.authentications['PureCloud Auth'].accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new platformClient.UtilitiesApi();
apiInstance.getDate()
  .then(function(data) {
    console.log(`getDate success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch(function(err) {
  	console.log('There was a failure calling getDate');
    console.error(err);
  });

~~~

### Parameters

This endpoint does not need any parameter.
{: class="table table-striped"}

### Return type

**ServerDate**

<a name="getTimezones"></a>

# TimeZoneEntityListing getTimezones(opts)

GET /api/v2/timezones

Get time zones list



### Example

~~~ javascript
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Configure OAuth2 access token for authorization: PureCloud Auth
platformClient.ApiClient.instance.authentications['PureCloud Auth'].accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new platformClient.UtilitiesApi();

var opts = { 
  'pageSize': 25, // Number | Page size
  'pageNumber': 1 // Number | Page number
};
apiInstance.getTimezones(opts)
  .then(function(data) {
    console.log(`getTimezones success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch(function(err) {
  	console.log('There was a failure calling getTimezones');
    console.error(err);
  });

~~~

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



### Example

~~~ javascript
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Configure OAuth2 access token for authorization: PureCloud Auth
platformClient.ApiClient.instance.authentications['PureCloud Auth'].accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new platformClient.UtilitiesApi();

var body = {}; // Object | Certificate

apiInstance.postCertificateDetails(body)
  .then(function(data) {
    console.log(`postCertificateDetails success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch(function(err) {
  	console.log('There was a failure calling postCertificateDetails');
    console.error(err);
  });

~~~

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **body** | **Object** | Certificate |  |
{: class="table table-striped"}

### Return type

**ParsedCertificate**

