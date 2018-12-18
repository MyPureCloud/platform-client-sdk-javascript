---
title: MessagingApi
---
# platformClient.MessagingApi

All URIs are relative to *https://api.mypurecloud.com*

| Method | HTTP request | Description |
| ------------- | ------------- | ------------- |
[**deleteMessagingIntegrationsFacebookIntegrationId**](MessagingApi.html#deleteMessagingIntegrationsFacebookIntegrationId) | **DELETE** /api/v2/messaging/integrations/facebook/{integrationId} | Delete a Facebook messaging integration
[**deleteMessagingIntegrationsLineIntegrationId**](MessagingApi.html#deleteMessagingIntegrationsLineIntegrationId) | **DELETE** /api/v2/messaging/integrations/line/{integrationId} | Delete a LINE messenger integration
[**deleteMessagingIntegrationsTwitterIntegrationId**](MessagingApi.html#deleteMessagingIntegrationsTwitterIntegrationId) | **DELETE** /api/v2/messaging/integrations/twitter/{integrationId} | Delete a Twitter messaging integration
[**getMessagingIntegrationsFacebook**](MessagingApi.html#getMessagingIntegrationsFacebook) | **GET** /api/v2/messaging/integrations/facebook | Get a list of Facebook Integrations
[**getMessagingIntegrationsFacebookIntegrationId**](MessagingApi.html#getMessagingIntegrationsFacebookIntegrationId) | **GET** /api/v2/messaging/integrations/facebook/{integrationId} | Get a Facebook messaging integration
[**getMessagingIntegrationsLine**](MessagingApi.html#getMessagingIntegrationsLine) | **GET** /api/v2/messaging/integrations/line | Get a list of LINE messenger Integrations
[**getMessagingIntegrationsLineIntegrationId**](MessagingApi.html#getMessagingIntegrationsLineIntegrationId) | **GET** /api/v2/messaging/integrations/line/{integrationId} | Get a LINE messenger integration
[**getMessagingIntegrationsTwitter**](MessagingApi.html#getMessagingIntegrationsTwitter) | **GET** /api/v2/messaging/integrations/twitter | Get a list of Twitter Integrations
[**getMessagingIntegrationsTwitterIntegrationId**](MessagingApi.html#getMessagingIntegrationsTwitterIntegrationId) | **GET** /api/v2/messaging/integrations/twitter/{integrationId} | Get a Twitter messaging integration
[**getMessagingSticker**](MessagingApi.html#getMessagingSticker) | **GET** /api/v2/messaging/stickers/{messengerType} | Get a list of Messaging Stickers
[**postMessagingIntegrationsFacebook**](MessagingApi.html#postMessagingIntegrationsFacebook) | **POST** /api/v2/messaging/integrations/facebook | Create a Facebook Integration
[**postMessagingIntegrationsLine**](MessagingApi.html#postMessagingIntegrationsLine) | **POST** /api/v2/messaging/integrations/line | Create a LINE messenger Integration
[**postMessagingIntegrationsTwitter**](MessagingApi.html#postMessagingIntegrationsTwitter) | **POST** /api/v2/messaging/integrations/twitter | Create a Twitter Integration
[**putMessagingIntegrationsLineIntegrationId**](MessagingApi.html#putMessagingIntegrationsLineIntegrationId) | **PUT** /api/v2/messaging/integrations/line/{integrationId} | Update a LINE messenger integration
{: class="table table-striped"}

<a name="deleteMessagingIntegrationsFacebookIntegrationId"></a>

# void deleteMessagingIntegrationsFacebookIntegrationId(integrationId)



DELETE /api/v2/messaging/integrations/facebook/{integrationId}

Delete a Facebook messaging integration



Requires ANY permissions: 

* messaging:integration:delete



### Example Usage

~~~ javascript
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Configure OAuth2 access token for authorization: PureCloud OAuth
platformClient.ApiClient.instance.authentications['PureCloud OAuth'].accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new platformClient.MessagingApi();

var integrationId = "integrationId_example"; // String | Integration ID

apiInstance.deleteMessagingIntegrationsFacebookIntegrationId(integrationId)
  .then(function() {
    console.log('deleteMessagingIntegrationsFacebookIntegrationId returned successfully.');
  })
  .catch(function(err) {
  	console.log('There was a failure calling deleteMessagingIntegrationsFacebookIntegrationId');
    console.error(err);
  });

~~~

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **integrationId** | **String** | Integration ID |  |
{: class="table table-striped"}

### Return type

void (no response body)

<a name="deleteMessagingIntegrationsLineIntegrationId"></a>

# void deleteMessagingIntegrationsLineIntegrationId(integrationId)



DELETE /api/v2/messaging/integrations/line/{integrationId}

Delete a LINE messenger integration



Requires ANY permissions: 

* messaging:integration:delete



### Example Usage

~~~ javascript
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Configure OAuth2 access token for authorization: PureCloud OAuth
platformClient.ApiClient.instance.authentications['PureCloud OAuth'].accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new platformClient.MessagingApi();

var integrationId = "integrationId_example"; // String | Integration ID

apiInstance.deleteMessagingIntegrationsLineIntegrationId(integrationId)
  .then(function() {
    console.log('deleteMessagingIntegrationsLineIntegrationId returned successfully.');
  })
  .catch(function(err) {
  	console.log('There was a failure calling deleteMessagingIntegrationsLineIntegrationId');
    console.error(err);
  });

~~~

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **integrationId** | **String** | Integration ID |  |
{: class="table table-striped"}

### Return type

void (no response body)

<a name="deleteMessagingIntegrationsTwitterIntegrationId"></a>

# void deleteMessagingIntegrationsTwitterIntegrationId(integrationId)



DELETE /api/v2/messaging/integrations/twitter/{integrationId}

Delete a Twitter messaging integration



Requires ANY permissions: 

* messaging:integration:delete



### Example Usage

~~~ javascript
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Configure OAuth2 access token for authorization: PureCloud OAuth
platformClient.ApiClient.instance.authentications['PureCloud OAuth'].accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new platformClient.MessagingApi();

var integrationId = "integrationId_example"; // String | Integration ID

apiInstance.deleteMessagingIntegrationsTwitterIntegrationId(integrationId)
  .then(function() {
    console.log('deleteMessagingIntegrationsTwitterIntegrationId returned successfully.');
  })
  .catch(function(err) {
  	console.log('There was a failure calling deleteMessagingIntegrationsTwitterIntegrationId');
    console.error(err);
  });

~~~

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **integrationId** | **String** | Integration ID |  |
{: class="table table-striped"}

### Return type

void (no response body)

<a name="getMessagingIntegrationsFacebook"></a>

# FacebookIntegrationEntityListing getMessagingIntegrationsFacebook(opts)



GET /api/v2/messaging/integrations/facebook

Get a list of Facebook Integrations



Requires ANY permissions: 

* messaging:integration:view



### Example Usage

~~~ javascript
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Configure OAuth2 access token for authorization: PureCloud OAuth
platformClient.ApiClient.instance.authentications['PureCloud OAuth'].accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new platformClient.MessagingApi();

var opts = { 
  'pageSize': 25, // Number | Page size
  'pageNumber': 1 // Number | Page number
};
apiInstance.getMessagingIntegrationsFacebook(opts)
  .then(function(data) {
    console.log(`getMessagingIntegrationsFacebook success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch(function(err) {
  	console.log('There was a failure calling getMessagingIntegrationsFacebook');
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

**FacebookIntegrationEntityListing**

<a name="getMessagingIntegrationsFacebookIntegrationId"></a>

# FacebookIntegration getMessagingIntegrationsFacebookIntegrationId(integrationId)



GET /api/v2/messaging/integrations/facebook/{integrationId}

Get a Facebook messaging integration



Requires ANY permissions: 

* messaging:integration:view



### Example Usage

~~~ javascript
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Configure OAuth2 access token for authorization: PureCloud OAuth
platformClient.ApiClient.instance.authentications['PureCloud OAuth'].accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new platformClient.MessagingApi();

var integrationId = "integrationId_example"; // String | Integration ID

apiInstance.getMessagingIntegrationsFacebookIntegrationId(integrationId)
  .then(function(data) {
    console.log(`getMessagingIntegrationsFacebookIntegrationId success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch(function(err) {
  	console.log('There was a failure calling getMessagingIntegrationsFacebookIntegrationId');
    console.error(err);
  });

~~~

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **integrationId** | **String** | Integration ID |  |
{: class="table table-striped"}

### Return type

**FacebookIntegration**

<a name="getMessagingIntegrationsLine"></a>

# LineIntegrationEntityListing getMessagingIntegrationsLine(opts)



GET /api/v2/messaging/integrations/line

Get a list of LINE messenger Integrations



Requires ANY permissions: 

* messaging:integration:view



### Example Usage

~~~ javascript
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Configure OAuth2 access token for authorization: PureCloud OAuth
platformClient.ApiClient.instance.authentications['PureCloud OAuth'].accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new platformClient.MessagingApi();

var opts = { 
  'pageSize': 25, // Number | Page size
  'pageNumber': 1 // Number | Page number
};
apiInstance.getMessagingIntegrationsLine(opts)
  .then(function(data) {
    console.log(`getMessagingIntegrationsLine success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch(function(err) {
  	console.log('There was a failure calling getMessagingIntegrationsLine');
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

**LineIntegrationEntityListing**

<a name="getMessagingIntegrationsLineIntegrationId"></a>

# LineIntegration getMessagingIntegrationsLineIntegrationId(integrationId)



GET /api/v2/messaging/integrations/line/{integrationId}

Get a LINE messenger integration



Requires ANY permissions: 

* messaging:integration:view



### Example Usage

~~~ javascript
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Configure OAuth2 access token for authorization: PureCloud OAuth
platformClient.ApiClient.instance.authentications['PureCloud OAuth'].accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new platformClient.MessagingApi();

var integrationId = "integrationId_example"; // String | Integration ID

apiInstance.getMessagingIntegrationsLineIntegrationId(integrationId)
  .then(function(data) {
    console.log(`getMessagingIntegrationsLineIntegrationId success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch(function(err) {
  	console.log('There was a failure calling getMessagingIntegrationsLineIntegrationId');
    console.error(err);
  });

~~~

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **integrationId** | **String** | Integration ID |  |
{: class="table table-striped"}

### Return type

**LineIntegration**

<a name="getMessagingIntegrationsTwitter"></a>

# TwitterIntegrationEntityListing getMessagingIntegrationsTwitter(opts)



GET /api/v2/messaging/integrations/twitter

Get a list of Twitter Integrations



Requires ANY permissions: 

* messaging:integration:view



### Example Usage

~~~ javascript
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Configure OAuth2 access token for authorization: PureCloud OAuth
platformClient.ApiClient.instance.authentications['PureCloud OAuth'].accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new platformClient.MessagingApi();

var opts = { 
  'pageSize': 25, // Number | Page size
  'pageNumber': 1 // Number | Page number
};
apiInstance.getMessagingIntegrationsTwitter(opts)
  .then(function(data) {
    console.log(`getMessagingIntegrationsTwitter success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch(function(err) {
  	console.log('There was a failure calling getMessagingIntegrationsTwitter');
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

**TwitterIntegrationEntityListing**

<a name="getMessagingIntegrationsTwitterIntegrationId"></a>

# TwitterIntegration getMessagingIntegrationsTwitterIntegrationId(integrationId)



GET /api/v2/messaging/integrations/twitter/{integrationId}

Get a Twitter messaging integration



Requires ANY permissions: 

* messaging:integration:view



### Example Usage

~~~ javascript
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Configure OAuth2 access token for authorization: PureCloud OAuth
platformClient.ApiClient.instance.authentications['PureCloud OAuth'].accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new platformClient.MessagingApi();

var integrationId = "integrationId_example"; // String | Integration ID

apiInstance.getMessagingIntegrationsTwitterIntegrationId(integrationId)
  .then(function(data) {
    console.log(`getMessagingIntegrationsTwitterIntegrationId success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch(function(err) {
  	console.log('There was a failure calling getMessagingIntegrationsTwitterIntegrationId');
    console.error(err);
  });

~~~

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **integrationId** | **String** | Integration ID |  |
{: class="table table-striped"}

### Return type

**TwitterIntegration**

<a name="getMessagingSticker"></a>

# MessagingStickerEntityListing getMessagingSticker(messengerType, opts)



GET /api/v2/messaging/stickers/{messengerType}

Get a list of Messaging Stickers



Requires ANY permissions: 

* conversation:message:create



### Example Usage

~~~ javascript
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Configure OAuth2 access token for authorization: PureCloud OAuth
platformClient.ApiClient.instance.authentications['PureCloud OAuth'].accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new platformClient.MessagingApi();

var messengerType = "messengerType_example"; // String | Messenger Type

var opts = { 
  'pageSize': 25, // Number | Page size
  'pageNumber': 1 // Number | Page number
};
apiInstance.getMessagingSticker(messengerType, opts)
  .then(function(data) {
    console.log(`getMessagingSticker success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch(function(err) {
  	console.log('There was a failure calling getMessagingSticker');
    console.error(err);
  });

~~~

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **messengerType** | **String** | Messenger Type |  |
 **pageSize** | **Number** | Page size | [optional] [default to 25] |
 **pageNumber** | **Number** | Page number | [optional] [default to 1] |
{: class="table table-striped"}

### Return type

**MessagingStickerEntityListing**

<a name="postMessagingIntegrationsFacebook"></a>

# FacebookIntegration postMessagingIntegrationsFacebook(body)



POST /api/v2/messaging/integrations/facebook

Create a Facebook Integration



Requires ANY permissions: 

* messaging:integration:add


### Request Body Schema

{::options parse_block_html="true" /}

<script type="text/javascript">
	function copyFacebookIntegrationRequestExample() {
		var $temp = $("<textarea>");
		$("body").append($temp);
		$temp.val($('#FacebookIntegrationRequestExample').text()).select();
		document.execCommand("copy");
		$temp.remove();
	}
</script>

FacebookIntegrationRequest <a style="cursor: pointer" onclick="copyFacebookIntegrationRequestExample()">Copy</a>

<div id="FacebookIntegrationRequestExample" style="max-height: 250px; overflow-y: scroll;">
~~~ json
{ 
  "id": String, 
  "name": String, 
  "pageAccessToken": String, 
  "userAccessToken": String, 
  "pageId": String, 
  "appId": String, 
  "appSecret": String, 
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

var apiInstance = new platformClient.MessagingApi();

var body = {}; // Object | FacebookIntegrationRequest

apiInstance.postMessagingIntegrationsFacebook(body)
  .then(function(data) {
    console.log(`postMessagingIntegrationsFacebook success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch(function(err) {
  	console.log('There was a failure calling postMessagingIntegrationsFacebook');
    console.error(err);
  });

~~~

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **body** | **Object** | FacebookIntegrationRequest |  |
{: class="table table-striped"}

### Return type

**FacebookIntegration**

<a name="postMessagingIntegrationsLine"></a>

# LineIntegration postMessagingIntegrationsLine(body)



POST /api/v2/messaging/integrations/line

Create a LINE messenger Integration



Requires ANY permissions: 

* messaging:integration:add


### Request Body Schema

{::options parse_block_html="true" /}

<script type="text/javascript">
	function copyLineIntegrationRequestExample() {
		var $temp = $("<textarea>");
		$("body").append($temp);
		$temp.val($('#LineIntegrationRequestExample').text()).select();
		document.execCommand("copy");
		$temp.remove();
	}
</script>

LineIntegrationRequest <a style="cursor: pointer" onclick="copyLineIntegrationRequestExample()">Copy</a>

<div id="LineIntegrationRequestExample" style="max-height: 250px; overflow-y: scroll;">
~~~ json
{ 
  "id": String, 
  "name": String, 
  "channelId": String, 
  "channelSecret": String, 
  "switcherSecret": String, 
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

var apiInstance = new platformClient.MessagingApi();

var body = {}; // Object | LineIntegrationRequest

apiInstance.postMessagingIntegrationsLine(body)
  .then(function(data) {
    console.log(`postMessagingIntegrationsLine success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch(function(err) {
  	console.log('There was a failure calling postMessagingIntegrationsLine');
    console.error(err);
  });

~~~

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **body** | **Object** | LineIntegrationRequest |  |
{: class="table table-striped"}

### Return type

**LineIntegration**

<a name="postMessagingIntegrationsTwitter"></a>

# TwitterIntegration postMessagingIntegrationsTwitter(body)



POST /api/v2/messaging/integrations/twitter

Create a Twitter Integration



Requires ANY permissions: 

* messaging:integration:add


### Request Body Schema

{::options parse_block_html="true" /}

<script type="text/javascript">
	function copyTwitterIntegrationRequestExample() {
		var $temp = $("<textarea>");
		$("body").append($temp);
		$temp.val($('#TwitterIntegrationRequestExample').text()).select();
		document.execCommand("copy");
		$temp.remove();
	}
</script>

TwitterIntegrationRequest <a style="cursor: pointer" onclick="copyTwitterIntegrationRequestExample()">Copy</a>

<div id="TwitterIntegrationRequestExample" style="max-height: 250px; overflow-y: scroll;">
~~~ json
{ 
  "id": String, 
  "name": String, 
  "accessTokenKey": String, 
  "accessTokenSecret": String, 
  "consumerKey": String, 
  "consumerSecret": String, 
  "tier": String, 
  "envName": String, 
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

var apiInstance = new platformClient.MessagingApi();

var body = {}; // Object | TwitterIntegrationRequest

apiInstance.postMessagingIntegrationsTwitter(body)
  .then(function(data) {
    console.log(`postMessagingIntegrationsTwitter success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch(function(err) {
  	console.log('There was a failure calling postMessagingIntegrationsTwitter');
    console.error(err);
  });

~~~

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **body** | **Object** | TwitterIntegrationRequest |  |
{: class="table table-striped"}

### Return type

**TwitterIntegration**

<a name="putMessagingIntegrationsLineIntegrationId"></a>

# LineIntegration putMessagingIntegrationsLineIntegrationId(integrationId, body)



PUT /api/v2/messaging/integrations/line/{integrationId}

Update a LINE messenger integration



Requires ANY permissions: 

* messaging:integration:edit


### Request Body Schema

{::options parse_block_html="true" /}

<script type="text/javascript">
	function copyLineIntegrationRequestExample() {
		var $temp = $("<textarea>");
		$("body").append($temp);
		$temp.val($('#LineIntegrationRequestExample').text()).select();
		document.execCommand("copy");
		$temp.remove();
	}
</script>

LineIntegrationRequest <a style="cursor: pointer" onclick="copyLineIntegrationRequestExample()">Copy</a>

<div id="LineIntegrationRequestExample" style="max-height: 250px; overflow-y: scroll;">
~~~ json
{ 
  "id": String, 
  "name": String, 
  "channelId": String, 
  "channelSecret": String, 
  "switcherSecret": String, 
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

var apiInstance = new platformClient.MessagingApi();

var integrationId = "integrationId_example"; // String | Integration ID

var body = {}; // Object | LineIntegrationRequest

apiInstance.putMessagingIntegrationsLineIntegrationId(integrationId, body)
  .then(function(data) {
    console.log(`putMessagingIntegrationsLineIntegrationId success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch(function(err) {
  	console.log('There was a failure calling putMessagingIntegrationsLineIntegrationId');
    console.error(err);
  });

~~~

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **integrationId** | **String** | Integration ID |  |
 **body** | **Object** | LineIntegrationRequest |  |
{: class="table table-striped"}

### Return type

**LineIntegration**
