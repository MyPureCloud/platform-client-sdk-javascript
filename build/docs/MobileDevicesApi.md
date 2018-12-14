---
title: MobileDevicesApi
---
# platformClient.MobileDevicesApi

All URIs are relative to *https://api.mypurecloud.com*

| Method | HTTP request | Description |
| ------------- | ------------- | ------------- |
[**deleteMobiledevice**](MobileDevicesApi.html#deleteMobiledevice) | **DELETE** /api/v2/mobiledevices/{deviceId} | Delete device
[**getMobiledevice**](MobileDevicesApi.html#getMobiledevice) | **GET** /api/v2/mobiledevices/{deviceId} | Get device
[**getMobiledevices**](MobileDevicesApi.html#getMobiledevices) | **GET** /api/v2/mobiledevices | Get a list of all devices.
[**postMobiledevices**](MobileDevicesApi.html#postMobiledevices) | **POST** /api/v2/mobiledevices | Create User device
[**putMobiledevice**](MobileDevicesApi.html#putMobiledevice) | **PUT** /api/v2/mobiledevices/{deviceId} | Update device
{: class="table table-striped"}

<a name="deleteMobiledevice"></a>

# void deleteMobiledevice(deviceId)



DELETE /api/v2/mobiledevices/{deviceId}

Delete device



Requires NO permissions: 




### Example Usage

~~~ javascript
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Configure OAuth2 access token for authorization: PureCloud OAuth
platformClient.ApiClient.instance.authentications['PureCloud OAuth'].accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new platformClient.MobileDevicesApi();

var deviceId = "deviceId_example"; // String | Device ID

apiInstance.deleteMobiledevice(deviceId)
  .then(function() {
    console.log('deleteMobiledevice returned successfully.');
  })
  .catch(function(err) {
  	console.log('There was a failure calling deleteMobiledevice');
    console.error(err);
  });

~~~

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **deviceId** | **String** | Device ID |  |
{: class="table table-striped"}

### Return type

void (no response body)

<a name="getMobiledevice"></a>

# UserDevice getMobiledevice(deviceId)



GET /api/v2/mobiledevices/{deviceId}

Get device



Requires NO permissions: 




### Example Usage

~~~ javascript
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Configure OAuth2 access token for authorization: PureCloud OAuth
platformClient.ApiClient.instance.authentications['PureCloud OAuth'].accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new platformClient.MobileDevicesApi();

var deviceId = "deviceId_example"; // String | Device ID

apiInstance.getMobiledevice(deviceId)
  .then(function(data) {
    console.log(`getMobiledevice success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch(function(err) {
  	console.log('There was a failure calling getMobiledevice');
    console.error(err);
  });

~~~

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **deviceId** | **String** | Device ID |  |
{: class="table table-striped"}

### Return type

**UserDevice**

<a name="getMobiledevices"></a>

# DirectoryUserDevicesListing getMobiledevices(opts)



GET /api/v2/mobiledevices

Get a list of all devices.



Requires NO permissions: 




### Example Usage

~~~ javascript
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Configure OAuth2 access token for authorization: PureCloud OAuth
platformClient.ApiClient.instance.authentications['PureCloud OAuth'].accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new platformClient.MobileDevicesApi();

var opts = { 
  'pageSize': 25, // Number | Page size
  'pageNumber': 1, // Number | Page number
  'sortOrder': "ascending" // String | Ascending or descending sort order
};
apiInstance.getMobiledevices(opts)
  .then(function(data) {
    console.log(`getMobiledevices success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch(function(err) {
  	console.log('There was a failure calling getMobiledevices');
    console.error(err);
  });

~~~

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **pageSize** | **Number** | Page size | [optional] [default to 25] |
 **pageNumber** | **Number** | Page number | [optional] [default to 1] |
 **sortOrder** | **String** | Ascending or descending sort order | [optional] [default to ascending]<br />**Values**: ascending, descending |
{: class="table table-striped"}

### Return type

**DirectoryUserDevicesListing**

<a name="postMobiledevices"></a>

# UserDevice postMobiledevices(body)



POST /api/v2/mobiledevices

Create User device



Requires NO permissions: 



### Request Body Schema

{::options parse_block_html="true" /}

<script type="text/javascript">
	function copyUserDeviceExample() {
		var $temp = $("<textarea>");
		$("body").append($temp);
		$temp.val($('#UserDeviceExample').text()).select();
		document.execCommand("copy");
		$temp.remove();
	}
</script>

UserDevice <a style="cursor: pointer" onclick="copyUserDeviceExample()">Copy</a>

<div id="UserDeviceExample" style="max-height: 250px; overflow-y: scroll;">
~~~ json
{ 
  "id": String, 
  "name": String, 
  "deviceToken": String, 
  "notificationId": String, 
  "make": String, 
  "model": String, 
  "acceptNotifications": Boolean, 
  "type": String, 
  "sessionHash": String, 
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

var apiInstance = new platformClient.MobileDevicesApi();

var body = {}; // Object | Device

apiInstance.postMobiledevices(body)
  .then(function(data) {
    console.log(`postMobiledevices success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch(function(err) {
  	console.log('There was a failure calling postMobiledevices');
    console.error(err);
  });

~~~

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **body** | **Object** | Device |  |
{: class="table table-striped"}

### Return type

**UserDevice**

<a name="putMobiledevice"></a>

# UserDevice putMobiledevice(deviceId, opts)



PUT /api/v2/mobiledevices/{deviceId}

Update device



Requires NO permissions: 



### Request Body Schema

{::options parse_block_html="true" /}

<script type="text/javascript">
	function copyUserDeviceExample() {
		var $temp = $("<textarea>");
		$("body").append($temp);
		$temp.val($('#UserDeviceExample').text()).select();
		document.execCommand("copy");
		$temp.remove();
	}
</script>

UserDevice <a style="cursor: pointer" onclick="copyUserDeviceExample()">Copy</a>

<div id="UserDeviceExample" style="max-height: 250px; overflow-y: scroll;">
~~~ json
{ 
  "id": String, 
  "name": String, 
  "deviceToken": String, 
  "notificationId": String, 
  "make": String, 
  "model": String, 
  "acceptNotifications": Boolean, 
  "type": String, 
  "sessionHash": String, 
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

var apiInstance = new platformClient.MobileDevicesApi();

var deviceId = "deviceId_example"; // String | Device ID

var opts = { 
  'body': {} // Object | Device
};
apiInstance.putMobiledevice(deviceId, opts)
  .then(function(data) {
    console.log(`putMobiledevice success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch(function(err) {
  	console.log('There was a failure calling putMobiledevice');
    console.error(err);
  });

~~~

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **deviceId** | **String** | Device ID |  |
 **body** | **Object** | Device | [optional]  |
{: class="table table-striped"}

### Return type

**UserDevice**

