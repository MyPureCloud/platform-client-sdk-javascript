---
title: GeneralDataProtectionRegulationApi
---
# platformClient.GeneralDataProtectionRegulationApi

All URIs are relative to *https://api.mypurecloud.com*

| Method | HTTP request | Description |
| ------------- | ------------- | ------------- |
[**getGdprRequest**](GeneralDataProtectionRegulationApi.html#getGdprRequest) | **GET** /api/v2/gdpr/requests/{requestId} | Get an existing GDPR request
[**getGdprRequests**](GeneralDataProtectionRegulationApi.html#getGdprRequests) | **GET** /api/v2/gdpr/requests | Get all GDPR requests
[**getGdprSubjects**](GeneralDataProtectionRegulationApi.html#getGdprSubjects) | **GET** /api/v2/gdpr/subjects | Get GDPR subjects
[**postGdprRequests**](GeneralDataProtectionRegulationApi.html#postGdprRequests) | **POST** /api/v2/gdpr/requests | Submit a new GDPR request
{: class="table table-striped"}

<a name="getGdprRequest"></a>

# GDPRRequest getGdprRequest(requestId)



GET /api/v2/gdpr/requests/{requestId}

Get an existing GDPR request



Requires ANY permissions: 

* gdpr:request:view



### Example Usage

~~~ javascript
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Configure OAuth2 access token for authorization: PureCloud OAuth
platformClient.ApiClient.instance.authentications['PureCloud OAuth'].accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new platformClient.GeneralDataProtectionRegulationApi();

var requestId = "requestId_example"; // String | Request id

apiInstance.getGdprRequest(requestId)
  .then(function(data) {
    console.log(`getGdprRequest success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch(function(err) {
  	console.log('There was a failure calling getGdprRequest');
    console.error(err);
  });

~~~

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **requestId** | **String** | Request id |  |
{: class="table table-striped"}

### Return type

**GDPRRequest**

<a name="getGdprRequests"></a>

# GDPRRequestEntityListing getGdprRequests(opts)



GET /api/v2/gdpr/requests

Get all GDPR requests



Requires ANY permissions: 

* gdpr:request:view



### Example Usage

~~~ javascript
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Configure OAuth2 access token for authorization: PureCloud OAuth
platformClient.ApiClient.instance.authentications['PureCloud OAuth'].accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new platformClient.GeneralDataProtectionRegulationApi();

var opts = { 
  'pageSize': 25, // Number | Page size
  'pageNumber': 1 // Number | Page number
};
apiInstance.getGdprRequests(opts)
  .then(function(data) {
    console.log(`getGdprRequests success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch(function(err) {
  	console.log('There was a failure calling getGdprRequests');
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

**GDPRRequestEntityListing**

<a name="getGdprSubjects"></a>

# GDPRSubjectEntityListing getGdprSubjects(searchType, searchValue)



GET /api/v2/gdpr/subjects

Get GDPR subjects



Requires ANY permissions: 

* gdpr:subject:view



### Example Usage

~~~ javascript
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Configure OAuth2 access token for authorization: PureCloud OAuth
platformClient.ApiClient.instance.authentications['PureCloud OAuth'].accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new platformClient.GeneralDataProtectionRegulationApi();

var searchType = "searchType_example"; // String | Search Type

var searchValue = "searchValue_example"; // String | Search Value

apiInstance.getGdprSubjects(searchType, searchValue)
  .then(function(data) {
    console.log(`getGdprSubjects success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch(function(err) {
  	console.log('There was a failure calling getGdprSubjects');
    console.error(err);
  });

~~~

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **searchType** | **String** | Search Type | <br />**Values**: NAME, ADDRESS, PHONE, EMAIL |
 **searchValue** | **String** | Search Value |  |
{: class="table table-striped"}

### Return type

**GDPRSubjectEntityListing**

<a name="postGdprRequests"></a>

# GDPRRequest postGdprRequests(body, opts)



POST /api/v2/gdpr/requests

Submit a new GDPR request



Requires ANY permissions: 

* gdpr:request:add


### Request Body Schema

{::options parse_block_html="true" /}

<script type="text/javascript">
	function copyGDPRRequestExample() {
		var $temp = $("<textarea>");
		$("body").append($temp);
		$temp.val($('#GDPRRequestExample').text()).select();
		document.execCommand("copy");
		$temp.remove();
	}
</script>

GDPRRequest <a style="cursor: pointer" onclick="copyGDPRRequestExample()">Copy</a>

<div id="GDPRRequestExample" style="max-height: 250px; overflow-y: scroll;">
~~~ json
{ 
  "id": String, 
  "name": String, 
  "createdBy": { 
    "id": String, 
    "name": String, 
    "selfUri": String, 
  },  
  "replacementTerms": { 
    "type": String, 
    "existingValue": String, 
    "updatedValue": String, 
  },  
  "requestType": String, 
  "createdDate": Date, 
  "status": String, 
  "subject": { 
    "name": String, 
    "userId": String, 
    "externalContactId": String, 
    "dialerContactId": { 
      "id": String, 
      "contactListId": String, 
    },  
    "addresses": [String], 
    "phoneNumbers": [String], 
    "emailAddresses": [String], 
  },  
  "resultsUrl": String, 
  "selfUri": String, 
}
~~~
</div>


### Example Usage

~~~ javascript
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Configure OAuth2 access token for authorization: PureCloud OAuth
platformClient.ApiClient.instance.authentications['PureCloud OAuth'].accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new platformClient.GeneralDataProtectionRegulationApi();

var body = {}; // Object | GDPR request

var opts = { 
  'deleteConfirmed': false // Boolean | Confirm delete
};
apiInstance.postGdprRequests(body, opts)
  .then(function(data) {
    console.log(`postGdprRequests success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch(function(err) {
  	console.log('There was a failure calling postGdprRequests');
    console.error(err);
  });

~~~

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **body** | **Object** | GDPR request |  |
 **deleteConfirmed** | **Boolean** | Confirm delete | [optional] [default to false] |
{: class="table table-striped"}

### Return type

**GDPRRequest**

