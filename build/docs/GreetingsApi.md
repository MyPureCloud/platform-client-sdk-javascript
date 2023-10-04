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
[**getGreetings**](GreetingsApi.html#getGreetings) | **GET** /api/v2/greetings | Gets an Organization's Greetings
[**getGreetingsDefaults**](GreetingsApi.html#getGreetingsDefaults) | **GET** /api/v2/greetings/defaults | Get an Organization's DefaultGreetingList
[**getGroupGreetings**](GreetingsApi.html#getGroupGreetings) | **GET** /api/v2/groups/{groupId}/greetings | Get a list of the Group's Greetings
[**getGroupGreetingsDefaults**](GreetingsApi.html#getGroupGreetingsDefaults) | **GET** /api/v2/groups/{groupId}/greetings/defaults | Grabs the list of Default Greetings given a Group's ID
[**getUserGreetings**](GreetingsApi.html#getUserGreetings) | **GET** /api/v2/users/{userId}/greetings | Get a list of the User's Greetings
[**getUserGreetingsDefaults**](GreetingsApi.html#getUserGreetingsDefaults) | **GET** /api/v2/users/{userId}/greetings/defaults | Grabs the list of Default Greetings given a User's ID
[**postGreetings**](GreetingsApi.html#postGreetings) | **POST** /api/v2/greetings | Create a Greeting for an Organization
[**postGroupGreetings**](GreetingsApi.html#postGroupGreetings) | **POST** /api/v2/groups/{groupId}/greetings | Creates a Greeting for a Group
[**postUserGreetings**](GreetingsApi.html#postUserGreetings) | **POST** /api/v2/users/{userId}/greetings | Creates a Greeting for a User
[**putGreeting**](GreetingsApi.html#putGreeting) | **PUT** /api/v2/greetings/{greetingId} | Updates the Greeting with the given GreetingId
[**putGreetingsDefaults**](GreetingsApi.html#putGreetingsDefaults) | **PUT** /api/v2/greetings/defaults | Update an Organization's DefaultGreetingList
[**putGroupGreetingsDefaults**](GreetingsApi.html#putGroupGreetingsDefaults) | **PUT** /api/v2/groups/{groupId}/greetings/defaults | Updates the DefaultGreetingList of the specified Group
[**putUserGreetingsDefaults**](GreetingsApi.html#putUserGreetingsDefaults) | **PUT** /api/v2/users/{userId}/greetings/defaults | Updates the DefaultGreetingList of the specified User
{: class="table table-striped"}

<a name="deleteGreeting"></a>

# void deleteGreeting(greetingId)


DELETE /api/v2/greetings/{greetingId}

Deletes a Greeting with the given GreetingId

Requires NO permissions:

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.GreetingsApi();

let greetingId = "greetingId_example"; // String | Greeting ID

apiInstance.deleteGreeting(greetingId)
  .then(() => {
    console.log('deleteGreeting returned successfully.');
  })
  .catch((err) => {
    console.log('There was a failure calling deleteGreeting');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **greetingId** | **String** | Greeting ID |  |
{: class="table table-striped"}

### Return type

void (no response body)

<a name="getGreeting"></a>

# Greeting getGreeting(greetingId)


GET /api/v2/greetings/{greetingId}

Get a Greeting with the given GreetingId

Requires NO permissions:

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.GreetingsApi();

let greetingId = "greetingId_example"; // String | Greeting ID

apiInstance.getGreeting(greetingId)
  .then((data) => {
    console.log(`getGreeting success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getGreeting');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **greetingId** | **String** | Greeting ID |  |
{: class="table table-striped"}

### Return type

**Greeting**

<a name="getGreetingMedia"></a>

# GreetingMediaInfo getGreetingMedia(greetingId, opts)


GET /api/v2/greetings/{greetingId}/media

Get media playback URI for this greeting

Requires NO permissions:

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.GreetingsApi();

let greetingId = "greetingId_example"; // String | Greeting ID
let opts = { 
  'formatId': "WAV" // String | The desired media format.
};

apiInstance.getGreetingMedia(greetingId, opts)
  .then((data) => {
    console.log(`getGreetingMedia success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getGreetingMedia');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **greetingId** | **String** | Greeting ID |  |
 **formatId** | **String** | The desired media format. | [optional] [default to WAV]<br />**Values**: WAV, WEBM, WAV_ULAW, OGG_VORBIS, OGG_OPUS, MP3, NONE |
{: class="table table-striped"}

### Return type

**GreetingMediaInfo**

<a name="getGreetings"></a>

# DomainEntityListing getGreetings(opts)


GET /api/v2/greetings

Gets an Organization's Greetings

Requires NO permissions:

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.GreetingsApi();

let opts = { 
  'pageSize': 25, // Number | Page size
  'pageNumber': 1 // Number | Page number
};

apiInstance.getGreetings(opts)
  .then((data) => {
    console.log(`getGreetings success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getGreetings');
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

**DomainEntityListing**

<a name="getGreetingsDefaults"></a>

# DefaultGreetingList getGreetingsDefaults()


GET /api/v2/greetings/defaults

Get an Organization's DefaultGreetingList

Requires NO permissions:

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.GreetingsApi();

apiInstance.getGreetingsDefaults()
  .then((data) => {
    console.log(`getGreetingsDefaults success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getGreetingsDefaults');
    console.error(err);
  });
```

### Parameters

This endpoint does not need any parameter.


### Return type

**DefaultGreetingList**

<a name="getGroupGreetings"></a>

# GreetingListing getGroupGreetings(groupId, opts)


GET /api/v2/groups/{groupId}/greetings

Get a list of the Group's Greetings

Requires NO permissions:

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.GreetingsApi();

let groupId = "groupId_example"; // String | Group ID
let opts = { 
  'pageSize': 25, // Number | Page size
  'pageNumber': 1 // Number | Page number
};

apiInstance.getGroupGreetings(groupId, opts)
  .then((data) => {
    console.log(`getGroupGreetings success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getGroupGreetings');
    console.error(err);
  });
```

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

# DefaultGreetingList getGroupGreetingsDefaults(groupId)


GET /api/v2/groups/{groupId}/greetings/defaults

Grabs the list of Default Greetings given a Group's ID

Requires NO permissions:

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.GreetingsApi();

let groupId = "groupId_example"; // String | Group ID

apiInstance.getGroupGreetingsDefaults(groupId)
  .then((data) => {
    console.log(`getGroupGreetingsDefaults success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getGroupGreetingsDefaults');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **groupId** | **String** | Group ID |  |
{: class="table table-striped"}

### Return type

**DefaultGreetingList**

<a name="getUserGreetings"></a>

# DomainEntityListing getUserGreetings(userId, opts)


GET /api/v2/users/{userId}/greetings

Get a list of the User's Greetings

Requires NO permissions:

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.GreetingsApi();

let userId = "userId_example"; // String | User ID
let opts = { 
  'pageSize': 25, // Number | Page size
  'pageNumber': 1 // Number | Page number
};

apiInstance.getUserGreetings(userId, opts)
  .then((data) => {
    console.log(`getUserGreetings success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getUserGreetings');
    console.error(err);
  });
```

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

# DefaultGreetingList getUserGreetingsDefaults(userId)


GET /api/v2/users/{userId}/greetings/defaults

Grabs the list of Default Greetings given a User's ID

Requires NO permissions:

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.GreetingsApi();

let userId = "userId_example"; // String | User ID

apiInstance.getUserGreetingsDefaults(userId)
  .then((data) => {
    console.log(`getUserGreetingsDefaults success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getUserGreetingsDefaults');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **userId** | **String** | User ID |  |
{: class="table table-striped"}

### Return type

**DefaultGreetingList**

<a name="postGreetings"></a>

# Greeting postGreetings(body)


POST /api/v2/greetings

Create a Greeting for an Organization

Requires NO permissions:

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.GreetingsApi();

let body = {}; // Object | The Greeting to create

apiInstance.postGreetings(body)
  .then((data) => {
    console.log(`postGreetings success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling postGreetings');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **body** | **Object** | The Greeting to create |  |
{: class="table table-striped"}

### Return type

**Greeting**

<a name="postGroupGreetings"></a>

# Greeting postGroupGreetings(groupId, body)


POST /api/v2/groups/{groupId}/greetings

Creates a Greeting for a Group

Requires NO permissions:

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.GreetingsApi();

let groupId = "groupId_example"; // String | Group ID
let body = {}; // Object | The Greeting to create

apiInstance.postGroupGreetings(groupId, body)
  .then((data) => {
    console.log(`postGroupGreetings success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling postGroupGreetings');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **groupId** | **String** | Group ID |  |
 **body** | **Object** | The Greeting to create |  |
{: class="table table-striped"}

### Return type

**Greeting**

<a name="postUserGreetings"></a>

# Greeting postUserGreetings(userId, body)


POST /api/v2/users/{userId}/greetings

Creates a Greeting for a User

Requires NO permissions:

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.GreetingsApi();

let userId = "userId_example"; // String | User ID
let body = {}; // Object | The Greeting to create

apiInstance.postUserGreetings(userId, body)
  .then((data) => {
    console.log(`postUserGreetings success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling postUserGreetings');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **userId** | **String** | User ID |  |
 **body** | **Object** | The Greeting to create |  |
{: class="table table-striped"}

### Return type

**Greeting**

<a name="putGreeting"></a>

# Greeting putGreeting(greetingId, body)


PUT /api/v2/greetings/{greetingId}

Updates the Greeting with the given GreetingId

Requires NO permissions:

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.GreetingsApi();

let greetingId = "greetingId_example"; // String | Greeting ID
let body = {}; // Object | The updated Greeting

apiInstance.putGreeting(greetingId, body)
  .then((data) => {
    console.log(`putGreeting success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling putGreeting');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **greetingId** | **String** | Greeting ID |  |
 **body** | **Object** | The updated Greeting |  |
{: class="table table-striped"}

### Return type

**Greeting**

<a name="putGreetingsDefaults"></a>

# DefaultGreetingList putGreetingsDefaults(body)


PUT /api/v2/greetings/defaults

Update an Organization's DefaultGreetingList

Requires NO permissions:

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.GreetingsApi();

let body = {}; // Object | The updated defaultGreetingList

apiInstance.putGreetingsDefaults(body)
  .then((data) => {
    console.log(`putGreetingsDefaults success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling putGreetingsDefaults');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **body** | **Object** | The updated defaultGreetingList |  |
{: class="table table-striped"}

### Return type

**DefaultGreetingList**

<a name="putGroupGreetingsDefaults"></a>

# DefaultGreetingList putGroupGreetingsDefaults(groupId, body)


PUT /api/v2/groups/{groupId}/greetings/defaults

Updates the DefaultGreetingList of the specified Group

Requires NO permissions:

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.GreetingsApi();

let groupId = "groupId_example"; // String | Group ID
let body = {}; // Object | The updated defaultGreetingList

apiInstance.putGroupGreetingsDefaults(groupId, body)
  .then((data) => {
    console.log(`putGroupGreetingsDefaults success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling putGroupGreetingsDefaults');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **groupId** | **String** | Group ID |  |
 **body** | **Object** | The updated defaultGreetingList |  |
{: class="table table-striped"}

### Return type

**DefaultGreetingList**

<a name="putUserGreetingsDefaults"></a>

# DefaultGreetingList putUserGreetingsDefaults(userId, body)


PUT /api/v2/users/{userId}/greetings/defaults

Updates the DefaultGreetingList of the specified User

Requires NO permissions:

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.GreetingsApi();

let userId = "userId_example"; // String | User ID
let body = {}; // Object | The updated defaultGreetingList

apiInstance.putUserGreetingsDefaults(userId, body)
  .then((data) => {
    console.log(`putUserGreetingsDefaults success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling putUserGreetingsDefaults');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **userId** | **String** | User ID |  |
 **body** | **Object** | The updated defaultGreetingList |  |
{: class="table table-striped"}

### Return type

**DefaultGreetingList**

