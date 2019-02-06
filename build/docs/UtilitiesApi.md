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
[**postGmscTokens**](UtilitiesApi.html#postGmscTokens) | **POST** /api/v2/gmsc/tokens | Generate a JWT for use with common cloud.
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
{: class="table table-striped"}

### Return type

**ServerDate**

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



### Request Body Schema

<script type="text/javascript">
	function copyCertificateExample() {
		let temp = $("<textarea>");
		$("body").append(temp);
		temp.val($('#CertificateExample').text()).select();
		document.execCommand("copy");
		temp.remove();
		return false;
	}
</script>

Certificate <a href="#" onclick="return copyCertificateExample()">Copy</a>

<div id="CertificateExample">

```{"language":"json", "maxHeight": "250px"}
{ 
  "certificate": String, 
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

<a name="postGmscTokens"></a>

# Token postGmscTokens()



POST /api/v2/gmsc/tokens

Generate a JWT for use with common cloud.



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

apiInstance.postGmscTokens()
  .then((data) => {
    console.log(`postGmscTokens success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling postGmscTokens');
    console.error(err);
  });
```

### Parameters

This endpoint does not need any parameter.
{: class="table table-striped"}

### Return type

**Token**

