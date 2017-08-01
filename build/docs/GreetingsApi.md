---
title: GreetingsApi
---
# platformClient.GreetingsApi

All URIs are relative to *https://api.mypurecloud.com*

| Method | HTTP request | Description |
| ------------- | ------------- | ------------- |
[**deleteGreeting**](GreetingsApi.html#deleteGreeting) | **DELETE** /api/v2/greetings/{greetingId} | Deletes a Greeting with the given GreetingId
[**getGreeting**](GreetingsApi.html#getGreeting) | **GET** /api/v2/greetings/{greetingId} | Get a Greeting with the given GreetingId
[**getGreetingMedia**](GreetingsApi.html#getGreetingMedia) | **GET** /api/v2/greetings/{greetingId}/media | Get media playback URI for this greeting
[**getGreetings**](GreetingsApi.html#getGreetings) | **GET** /api/v2/greetings | Gets an Organization&#39;s Greetings
[**getGreetingsDefaults**](GreetingsApi.html#getGreetingsDefaults) | **GET** /api/v2/greetings/defaults | Get an Organization&#39;s DefaultGreetingList
[**getGroupGreetings**](GreetingsApi.html#getGroupGreetings) | **GET** /api/v2/groups/{groupId}/greetings | Get a list of the Group&#39;s Greetings
[**getGroupGreetingsDefaults**](GreetingsApi.html#getGroupGreetingsDefaults) | **GET** /api/v2/groups/{groupId}/greetings/defaults | Grabs the list of Default Greetings given a Group&#39;s ID
[**getUserGreetings**](GreetingsApi.html#getUserGreetings) | **GET** /api/v2/users/{userId}/greetings | Get a list of the User&#39;s Greetings
[**getUserGreetingsDefaults**](GreetingsApi.html#getUserGreetingsDefaults) | **GET** /api/v2/users/{userId}/greetings/defaults | Grabs the list of Default Greetings given a User&#39;s ID
[**postGreetings**](GreetingsApi.html#postGreetings) | **POST** /api/v2/greetings | Create a Greeting for an Organization
[**postGroupGreetings**](GreetingsApi.html#postGroupGreetings) | **POST** /api/v2/groups/{groupId}/greetings | Creates a Greeting for a Group
[**postUserGreetings**](GreetingsApi.html#postUserGreetings) | **POST** /api/v2/users/{userId}/greetings | Creates a Greeting for a User
[**putGreeting**](GreetingsApi.html#putGreeting) | **PUT** /api/v2/greetings/{greetingId} | Updates the Greeting with the given GreetingId
[**putGreetingsDefaults**](GreetingsApi.html#putGreetingsDefaults) | **PUT** /api/v2/greetings/defaults | Update an Organization&#39;s DefaultGreetingList
[**putGroupGreetingsDefaults**](GreetingsApi.html#putGroupGreetingsDefaults) | **PUT** /api/v2/groups/{groupId}/greetings/defaults | Updates the DefaultGreetingList of the specified Group
[**putUserGreetingsDefaults**](GreetingsApi.html#putUserGreetingsDefaults) | **PUT** /api/v2/users/{userId}/greetings/defaults | Updates the DefaultGreetingList of the specified User
{: class="table table-striped"}

<a name="deleteGreeting"></a>

# void deleteGreeting(greetingId)

DELETE /api/v2/greetings/{greetingId}

Deletes a Greeting with the given GreetingId



### Example

~~~ javascript
const platformClient = require('purecloud-platform-client-v2');

// Configure OAuth2 access token for authorization: PureCloud Auth
platformClient.ApiClient.instance.authentications['PureCloud Auth'].accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new platformClient.GreetingsApi();

var greetingId = "greetingId_example"; // String | Greeting ID

apiInstance.deleteGreeting(greetingId)
  .then(function() {
    console.log('deleteGreeting returned successfully.');
  })
  .catch(function(error) {
  	console.log('There was a failure calling deleteGreeting');
    console.error(error);
  });

~~~

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **greetingId** | **String** | Greeting ID |  |
{: class="table table-striped"}

### Return type

void (no response body)

<a name="getGreeting"></a>

# [**Greeting**](Greeting.html) getGreeting(greetingId)

GET /api/v2/greetings/{greetingId}

Get a Greeting with the given GreetingId



### Example

~~~ javascript
const platformClient = require('purecloud-platform-client-v2');

// Configure OAuth2 access token for authorization: PureCloud Auth
platformClient.ApiClient.instance.authentications['PureCloud Auth'].accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new platformClient.GreetingsApi();

var greetingId = "greetingId_example"; // String | Greeting ID

apiInstance.getGreeting(greetingId)
  .then(function(data) {
    console.log(`getGreeting success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch(function(error) {
  	console.log('There was a failure calling getGreeting');
    console.error(error);
  });

~~~

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **greetingId** | **String** | Greeting ID |  |
{: class="table table-striped"}

### Return type

**Greeting**

<a name="getGreetingMedia"></a>

# [**GreetingMediaInfo**](GreetingMediaInfo.html) getGreetingMedia(greetingId, opts)

GET /api/v2/greetings/{greetingId}/media

Get media playback URI for this greeting



### Example

~~~ javascript
const platformClient = require('purecloud-platform-client-v2');

// Configure OAuth2 access token for authorization: PureCloud Auth
platformClient.ApiClient.instance.authentications['PureCloud Auth'].accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new platformClient.GreetingsApi();

var greetingId = "greetingId_example"; // String | Greeting ID

var opts = { 
  'formatId': "WAV" // String | The desired media format.
};
apiInstance.getGreetingMedia(greetingId, opts)
  .then(function(data) {
    console.log(`getGreetingMedia success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch(function(error) {
  	console.log('There was a failure calling getGreetingMedia');
    console.error(error);
  });

~~~

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **greetingId** | **String** | Greeting ID |  |
 **formatId** | **String** | The desired media format. | [optional] [default to WAV]<br />**Values**: WAV, WEBM, WAV_ULAW, OGG_VORBIS, OGG_OPUS, MP3, NONE |
{: class="table table-striped"}

### Return type

**GreetingMediaInfo**

<a name="getGreetings"></a>

# [**DomainEntityListing**](DomainEntityListing.html) getGreetings(opts)

GET /api/v2/greetings

Gets an Organization&#39;s Greetings



### Example

~~~ javascript
const platformClient = require('purecloud-platform-client-v2');

// Configure OAuth2 access token for authorization: PureCloud Auth
platformClient.ApiClient.instance.authentications['PureCloud Auth'].accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new platformClient.GreetingsApi();

var opts = { 
  'pageSize': 25, // Number | Page size
  'pageNumber': 1 // Number | Page number
};
apiInstance.getGreetings(opts)
  .then(function(data) {
    console.log(`getGreetings success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch(function(error) {
  	console.log('There was a failure calling getGreetings');
    console.error(error);
  });

~~~

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **pageSize** | **Number** | Page size | [optional] [default to 25] |
 **pageNumber** | **Number** | Page number | [optional] [default to 1] |
{: class="table table-striped"}

### Return type

**DomainEntityListing**

<a name="getGreetingsDefaults"></a>

# [**DefaultGreetingList**](DefaultGreetingList.html) getGreetingsDefaults()

GET /api/v2/greetings/defaults

Get an Organization&#39;s DefaultGreetingList



### Example

~~~ javascript
const platformClient = require('purecloud-platform-client-v2');

// Configure OAuth2 access token for authorization: PureCloud Auth
platformClient.ApiClient.instance.authentications['PureCloud Auth'].accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new platformClient.GreetingsApi();
apiInstance.getGreetingsDefaults()
  .then(function(data) {
    console.log(`getGreetingsDefaults success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch(function(error) {
  	console.log('There was a failure calling getGreetingsDefaults');
    console.error(error);
  });

~~~

### Parameters

This endpoint does not need any parameter.
{: class="table table-striped"}

### Return type

**DefaultGreetingList**

<a name="getGroupGreetings"></a>

# [**GreetingListing**](GreetingListing.html) getGroupGreetings(groupId, opts)

GET /api/v2/groups/{groupId}/greetings

Get a list of the Group&#39;s Greetings



### Example

~~~ javascript
const platformClient = require('purecloud-platform-client-v2');

// Configure OAuth2 access token for authorization: PureCloud Auth
platformClient.ApiClient.instance.authentications['PureCloud Auth'].accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new platformClient.GreetingsApi();

var groupId = "groupId_example"; // String | Group ID

var opts = { 
  'pageSize': 25, // Number | Page size
  'pageNumber': 1 // Number | Page number
};
apiInstance.getGroupGreetings(groupId, opts)
  .then(function(data) {
    console.log(`getGroupGreetings success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch(function(error) {
  	console.log('There was a failure calling getGroupGreetings');
    console.error(error);
  });

~~~

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **groupId** | **String** | Group ID |  |
 **pageSize** | **Number** | Page size | [optional] [default to 25] |
 **pageNumber** | **Number** | Page number | [optional] [default to 1] |
{: class="table table-striped"}

### Return type

**GreetingListing**

<a name="getGroupGreetingsDefaults"></a>

# [**DefaultGreetingList**](DefaultGreetingList.html) getGroupGreetingsDefaults(groupId)

GET /api/v2/groups/{groupId}/greetings/defaults

Grabs the list of Default Greetings given a Group&#39;s ID



### Example

~~~ javascript
const platformClient = require('purecloud-platform-client-v2');

// Configure OAuth2 access token for authorization: PureCloud Auth
platformClient.ApiClient.instance.authentications['PureCloud Auth'].accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new platformClient.GreetingsApi();

var groupId = "groupId_example"; // String | Group ID

apiInstance.getGroupGreetingsDefaults(groupId)
  .then(function(data) {
    console.log(`getGroupGreetingsDefaults success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch(function(error) {
  	console.log('There was a failure calling getGroupGreetingsDefaults');
    console.error(error);
  });

~~~

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **groupId** | **String** | Group ID |  |
{: class="table table-striped"}

### Return type

**DefaultGreetingList**

<a name="getUserGreetings"></a>

# [**DomainEntityListing**](DomainEntityListing.html) getUserGreetings(userId, opts)

GET /api/v2/users/{userId}/greetings

Get a list of the User&#39;s Greetings



### Example

~~~ javascript
const platformClient = require('purecloud-platform-client-v2');

// Configure OAuth2 access token for authorization: PureCloud Auth
platformClient.ApiClient.instance.authentications['PureCloud Auth'].accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new platformClient.GreetingsApi();

var userId = "userId_example"; // String | User ID

var opts = { 
  'pageSize': 25, // Number | Page size
  'pageNumber': 1 // Number | Page number
};
apiInstance.getUserGreetings(userId, opts)
  .then(function(data) {
    console.log(`getUserGreetings success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch(function(error) {
  	console.log('There was a failure calling getUserGreetings');
    console.error(error);
  });

~~~

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **userId** | **String** | User ID |  |
 **pageSize** | **Number** | Page size | [optional] [default to 25] |
 **pageNumber** | **Number** | Page number | [optional] [default to 1] |
{: class="table table-striped"}

### Return type

**DomainEntityListing**

<a name="getUserGreetingsDefaults"></a>

# [**DefaultGreetingList**](DefaultGreetingList.html) getUserGreetingsDefaults(userId)

GET /api/v2/users/{userId}/greetings/defaults

Grabs the list of Default Greetings given a User&#39;s ID



### Example

~~~ javascript
const platformClient = require('purecloud-platform-client-v2');

// Configure OAuth2 access token for authorization: PureCloud Auth
platformClient.ApiClient.instance.authentications['PureCloud Auth'].accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new platformClient.GreetingsApi();

var userId = "userId_example"; // String | User ID

apiInstance.getUserGreetingsDefaults(userId)
  .then(function(data) {
    console.log(`getUserGreetingsDefaults success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch(function(error) {
  	console.log('There was a failure calling getUserGreetingsDefaults');
    console.error(error);
  });

~~~

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **userId** | **String** | User ID |  |
{: class="table table-striped"}

### Return type

**DefaultGreetingList**

<a name="postGreetings"></a>

# [**Greeting**](Greeting.html) postGreetings(body)

POST /api/v2/greetings

Create a Greeting for an Organization



### Example

~~~ javascript
const platformClient = require('purecloud-platform-client-v2');

// Configure OAuth2 access token for authorization: PureCloud Auth
platformClient.ApiClient.instance.authentications['PureCloud Auth'].accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new platformClient.GreetingsApi();

var body = new platformClient.Greeting(); // Greeting | The Greeting to create

apiInstance.postGreetings(body)
  .then(function(data) {
    console.log(`postGreetings success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch(function(error) {
  	console.log('There was a failure calling postGreetings');
    console.error(error);
  });

~~~

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **body** | **Greeting** | The Greeting to create |  |
{: class="table table-striped"}

### Return type

**Greeting**

<a name="postGroupGreetings"></a>

# [**Greeting**](Greeting.html) postGroupGreetings(groupId, body)

POST /api/v2/groups/{groupId}/greetings

Creates a Greeting for a Group



### Example

~~~ javascript
const platformClient = require('purecloud-platform-client-v2');

// Configure OAuth2 access token for authorization: PureCloud Auth
platformClient.ApiClient.instance.authentications['PureCloud Auth'].accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new platformClient.GreetingsApi();

var groupId = "groupId_example"; // String | Group ID

var body = new platformClient.Greeting(); // Greeting | The Greeting to create

apiInstance.postGroupGreetings(groupId, body)
  .then(function(data) {
    console.log(`postGroupGreetings success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch(function(error) {
  	console.log('There was a failure calling postGroupGreetings');
    console.error(error);
  });

~~~

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **groupId** | **String** | Group ID |  |
 **body** | **Greeting** | The Greeting to create |  |
{: class="table table-striped"}

### Return type

**Greeting**

<a name="postUserGreetings"></a>

# [**Greeting**](Greeting.html) postUserGreetings(userId, body)

POST /api/v2/users/{userId}/greetings

Creates a Greeting for a User



### Example

~~~ javascript
const platformClient = require('purecloud-platform-client-v2');

// Configure OAuth2 access token for authorization: PureCloud Auth
platformClient.ApiClient.instance.authentications['PureCloud Auth'].accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new platformClient.GreetingsApi();

var userId = "userId_example"; // String | User ID

var body = new platformClient.Greeting(); // Greeting | The Greeting to create

apiInstance.postUserGreetings(userId, body)
  .then(function(data) {
    console.log(`postUserGreetings success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch(function(error) {
  	console.log('There was a failure calling postUserGreetings');
    console.error(error);
  });

~~~

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **userId** | **String** | User ID |  |
 **body** | **Greeting** | The Greeting to create |  |
{: class="table table-striped"}

### Return type

**Greeting**

<a name="putGreeting"></a>

# [**Greeting**](Greeting.html) putGreeting(greetingId, body)

PUT /api/v2/greetings/{greetingId}

Updates the Greeting with the given GreetingId



### Example

~~~ javascript
const platformClient = require('purecloud-platform-client-v2');

// Configure OAuth2 access token for authorization: PureCloud Auth
platformClient.ApiClient.instance.authentications['PureCloud Auth'].accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new platformClient.GreetingsApi();

var greetingId = "greetingId_example"; // String | Greeting ID

var body = new platformClient.Greeting(); // Greeting | The updated Greeting

apiInstance.putGreeting(greetingId, body)
  .then(function(data) {
    console.log(`putGreeting success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch(function(error) {
  	console.log('There was a failure calling putGreeting');
    console.error(error);
  });

~~~

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **greetingId** | **String** | Greeting ID |  |
 **body** | **Greeting** | The updated Greeting |  |
{: class="table table-striped"}

### Return type

**Greeting**

<a name="putGreetingsDefaults"></a>

# [**DefaultGreetingList**](DefaultGreetingList.html) putGreetingsDefaults(body)

PUT /api/v2/greetings/defaults

Update an Organization&#39;s DefaultGreetingList



### Example

~~~ javascript
const platformClient = require('purecloud-platform-client-v2');

// Configure OAuth2 access token for authorization: PureCloud Auth
platformClient.ApiClient.instance.authentications['PureCloud Auth'].accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new platformClient.GreetingsApi();

var body = new platformClient.DefaultGreetingList(); // DefaultGreetingList | The updated defaultGreetingList

apiInstance.putGreetingsDefaults(body)
  .then(function(data) {
    console.log(`putGreetingsDefaults success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch(function(error) {
  	console.log('There was a failure calling putGreetingsDefaults');
    console.error(error);
  });

~~~

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **body** | **DefaultGreetingList** | The updated defaultGreetingList |  |
{: class="table table-striped"}

### Return type

**DefaultGreetingList**

<a name="putGroupGreetingsDefaults"></a>

# [**DefaultGreetingList**](DefaultGreetingList.html) putGroupGreetingsDefaults(groupId, body)

PUT /api/v2/groups/{groupId}/greetings/defaults

Updates the DefaultGreetingList of the specified Group



### Example

~~~ javascript
const platformClient = require('purecloud-platform-client-v2');

// Configure OAuth2 access token for authorization: PureCloud Auth
platformClient.ApiClient.instance.authentications['PureCloud Auth'].accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new platformClient.GreetingsApi();

var groupId = "groupId_example"; // String | Group ID

var body = new platformClient.DefaultGreetingList(); // DefaultGreetingList | The updated defaultGreetingList

apiInstance.putGroupGreetingsDefaults(groupId, body)
  .then(function(data) {
    console.log(`putGroupGreetingsDefaults success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch(function(error) {
  	console.log('There was a failure calling putGroupGreetingsDefaults');
    console.error(error);
  });

~~~

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **groupId** | **String** | Group ID |  |
 **body** | **DefaultGreetingList** | The updated defaultGreetingList |  |
{: class="table table-striped"}

### Return type

**DefaultGreetingList**

<a name="putUserGreetingsDefaults"></a>

# [**DefaultGreetingList**](DefaultGreetingList.html) putUserGreetingsDefaults(userId, body)

PUT /api/v2/users/{userId}/greetings/defaults

Updates the DefaultGreetingList of the specified User



### Example

~~~ javascript
const platformClient = require('purecloud-platform-client-v2');

// Configure OAuth2 access token for authorization: PureCloud Auth
platformClient.ApiClient.instance.authentications['PureCloud Auth'].accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new platformClient.GreetingsApi();

var userId = "userId_example"; // String | User ID

var body = new platformClient.DefaultGreetingList(); // DefaultGreetingList | The updated defaultGreetingList

apiInstance.putUserGreetingsDefaults(userId, body)
  .then(function(data) {
    console.log(`putUserGreetingsDefaults success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch(function(error) {
  	console.log('There was a failure calling putUserGreetingsDefaults');
    console.error(error);
  });

~~~

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **userId** | **String** | User ID |  |
 **body** | **DefaultGreetingList** | The updated defaultGreetingList |  |
{: class="table table-striped"}

### Return type

**DefaultGreetingList**

