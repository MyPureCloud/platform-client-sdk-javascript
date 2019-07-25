---
title: MessagingApi
---
# platformClient.MessagingApi

All URIs are relative to *https://api.mypurecloud.com*

| Method | HTTP request | Description |
| ------------- | ------------- | ------------- |
[**deleteConversationsMessagingIntegrationsFacebookIntegrationId**](MessagingApi.html#deleteConversationsMessagingIntegrationsFacebookIntegrationId) | **DELETE** /api/v2/conversations/messaging/integrations/facebook/{integrationId} | Delete a Facebook messaging integration
[**deleteConversationsMessagingIntegrationsLineIntegrationId**](MessagingApi.html#deleteConversationsMessagingIntegrationsLineIntegrationId) | **DELETE** /api/v2/conversations/messaging/integrations/line/{integrationId} | Delete a LINE messenger integration
[**deleteConversationsMessagingIntegrationsTwitterIntegrationId**](MessagingApi.html#deleteConversationsMessagingIntegrationsTwitterIntegrationId) | **DELETE** /api/v2/conversations/messaging/integrations/twitter/{integrationId} | Delete a Twitter messaging integration
[**deleteMessagingIntegrationsFacebookIntegrationId**](MessagingApi.html#deleteMessagingIntegrationsFacebookIntegrationId) | **DELETE** /api/v2/messaging/integrations/facebook/{integrationId} | Delete a Facebook messaging integration
[**deleteMessagingIntegrationsLineIntegrationId**](MessagingApi.html#deleteMessagingIntegrationsLineIntegrationId) | **DELETE** /api/v2/messaging/integrations/line/{integrationId} | Delete a LINE messenger integration
[**deleteMessagingIntegrationsTwitterIntegrationId**](MessagingApi.html#deleteMessagingIntegrationsTwitterIntegrationId) | **DELETE** /api/v2/messaging/integrations/twitter/{integrationId} | Delete a Twitter messaging integration
[**getConversationsMessagingIntegrations**](MessagingApi.html#getConversationsMessagingIntegrations) | **GET** /api/v2/conversations/messaging/integrations | Get a list of Integrations
[**getConversationsMessagingIntegrationsFacebook**](MessagingApi.html#getConversationsMessagingIntegrationsFacebook) | **GET** /api/v2/conversations/messaging/integrations/facebook | Get a list of Facebook Integrations
[**getConversationsMessagingIntegrationsFacebookIntegrationId**](MessagingApi.html#getConversationsMessagingIntegrationsFacebookIntegrationId) | **GET** /api/v2/conversations/messaging/integrations/facebook/{integrationId} | Get a Facebook messaging integration
[**getConversationsMessagingIntegrationsLine**](MessagingApi.html#getConversationsMessagingIntegrationsLine) | **GET** /api/v2/conversations/messaging/integrations/line | Get a list of LINE messenger Integrations
[**getConversationsMessagingIntegrationsLineIntegrationId**](MessagingApi.html#getConversationsMessagingIntegrationsLineIntegrationId) | **GET** /api/v2/conversations/messaging/integrations/line/{integrationId} | Get a LINE messenger integration
[**getConversationsMessagingIntegrationsTwitter**](MessagingApi.html#getConversationsMessagingIntegrationsTwitter) | **GET** /api/v2/conversations/messaging/integrations/twitter | Get a list of Twitter Integrations
[**getConversationsMessagingIntegrationsTwitterIntegrationId**](MessagingApi.html#getConversationsMessagingIntegrationsTwitterIntegrationId) | **GET** /api/v2/conversations/messaging/integrations/twitter/{integrationId} | Get a Twitter messaging integration
[**getConversationsMessagingSticker**](MessagingApi.html#getConversationsMessagingSticker) | **GET** /api/v2/conversations/messaging/stickers/{messengerType} | Get a list of Messaging Stickers
[**getMessagingIntegrations**](MessagingApi.html#getMessagingIntegrations) | **GET** /api/v2/messaging/integrations | Get a list of Integrations
[**getMessagingIntegrationsFacebook**](MessagingApi.html#getMessagingIntegrationsFacebook) | **GET** /api/v2/messaging/integrations/facebook | Get a list of Facebook Integrations
[**getMessagingIntegrationsFacebookIntegrationId**](MessagingApi.html#getMessagingIntegrationsFacebookIntegrationId) | **GET** /api/v2/messaging/integrations/facebook/{integrationId} | Get a Facebook messaging integration
[**getMessagingIntegrationsLine**](MessagingApi.html#getMessagingIntegrationsLine) | **GET** /api/v2/messaging/integrations/line | Get a list of LINE messenger Integrations
[**getMessagingIntegrationsLineIntegrationId**](MessagingApi.html#getMessagingIntegrationsLineIntegrationId) | **GET** /api/v2/messaging/integrations/line/{integrationId} | Get a LINE messenger integration
[**getMessagingIntegrationsTwitter**](MessagingApi.html#getMessagingIntegrationsTwitter) | **GET** /api/v2/messaging/integrations/twitter | Get a list of Twitter Integrations
[**getMessagingIntegrationsTwitterIntegrationId**](MessagingApi.html#getMessagingIntegrationsTwitterIntegrationId) | **GET** /api/v2/messaging/integrations/twitter/{integrationId} | Get a Twitter messaging integration
[**getMessagingSticker**](MessagingApi.html#getMessagingSticker) | **GET** /api/v2/messaging/stickers/{messengerType} | Get a list of Messaging Stickers
[**postConversationsMessagingIntegrationsFacebook**](MessagingApi.html#postConversationsMessagingIntegrationsFacebook) | **POST** /api/v2/conversations/messaging/integrations/facebook | Create a Facebook Integration
[**postConversationsMessagingIntegrationsLine**](MessagingApi.html#postConversationsMessagingIntegrationsLine) | **POST** /api/v2/conversations/messaging/integrations/line | Create a LINE messenger Integration
[**postConversationsMessagingIntegrationsTwitter**](MessagingApi.html#postConversationsMessagingIntegrationsTwitter) | **POST** /api/v2/conversations/messaging/integrations/twitter | Create a Twitter Integration
[**postMessagingIntegrationsFacebook**](MessagingApi.html#postMessagingIntegrationsFacebook) | **POST** /api/v2/messaging/integrations/facebook | Create a Facebook Integration
[**postMessagingIntegrationsLine**](MessagingApi.html#postMessagingIntegrationsLine) | **POST** /api/v2/messaging/integrations/line | Create a LINE messenger Integration
[**postMessagingIntegrationsTwitter**](MessagingApi.html#postMessagingIntegrationsTwitter) | **POST** /api/v2/messaging/integrations/twitter | Create a Twitter Integration
[**putConversationsMessagingIntegrationsLineIntegrationId**](MessagingApi.html#putConversationsMessagingIntegrationsLineIntegrationId) | **PUT** /api/v2/conversations/messaging/integrations/line/{integrationId} | Update a LINE messenger integration
[**putMessagingIntegrationsLineIntegrationId**](MessagingApi.html#putMessagingIntegrationsLineIntegrationId) | **PUT** /api/v2/messaging/integrations/line/{integrationId} | Update a LINE messenger integration
{: class="table table-striped"}

<a name="deleteConversationsMessagingIntegrationsFacebookIntegrationId"></a>

# void deleteConversationsMessagingIntegrationsFacebookIntegrationId(integrationId)



DELETE /api/v2/conversations/messaging/integrations/facebook/{integrationId}

Delete a Facebook messaging integration



Requires ANY permissions: 

* messaging:integration:delete



### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.MessagingApi();

let integrationId = "integrationId_example"; // String | Integration ID

apiInstance.deleteConversationsMessagingIntegrationsFacebookIntegrationId(integrationId)
  .then(() => {
    console.log('deleteConversationsMessagingIntegrationsFacebookIntegrationId returned successfully.');
  })
  .catch((err) => {
    console.log('There was a failure calling deleteConversationsMessagingIntegrationsFacebookIntegrationId');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **integrationId** | **String** | Integration ID |  |
{: class="table table-striped"}

### Return type

void (no response body)

<a name="deleteConversationsMessagingIntegrationsLineIntegrationId"></a>

# void deleteConversationsMessagingIntegrationsLineIntegrationId(integrationId)



DELETE /api/v2/conversations/messaging/integrations/line/{integrationId}

Delete a LINE messenger integration



Requires ANY permissions: 

* messaging:integration:delete



### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.MessagingApi();

let integrationId = "integrationId_example"; // String | Integration ID

apiInstance.deleteConversationsMessagingIntegrationsLineIntegrationId(integrationId)
  .then(() => {
    console.log('deleteConversationsMessagingIntegrationsLineIntegrationId returned successfully.');
  })
  .catch((err) => {
    console.log('There was a failure calling deleteConversationsMessagingIntegrationsLineIntegrationId');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **integrationId** | **String** | Integration ID |  |
{: class="table table-striped"}

### Return type

void (no response body)

<a name="deleteConversationsMessagingIntegrationsTwitterIntegrationId"></a>

# void deleteConversationsMessagingIntegrationsTwitterIntegrationId(integrationId)



DELETE /api/v2/conversations/messaging/integrations/twitter/{integrationId}

Delete a Twitter messaging integration



Requires ANY permissions: 

* messaging:integration:delete



### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.MessagingApi();

let integrationId = "integrationId_example"; // String | Integration ID

apiInstance.deleteConversationsMessagingIntegrationsTwitterIntegrationId(integrationId)
  .then(() => {
    console.log('deleteConversationsMessagingIntegrationsTwitterIntegrationId returned successfully.');
  })
  .catch((err) => {
    console.log('There was a failure calling deleteConversationsMessagingIntegrationsTwitterIntegrationId');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **integrationId** | **String** | Integration ID |  |
{: class="table table-striped"}

### Return type

void (no response body)

<a name="deleteMessagingIntegrationsFacebookIntegrationId"></a>

# void deleteMessagingIntegrationsFacebookIntegrationId(integrationId)

<span style="background-color: #f0ad4e;display: inline-block;padding: 7px;font-weight: bold;line-height: 1;color: #ffffff;text-align: center;white-space: nowrap;vertical-align: baseline;border-radius: .25em;margin: 10px 0;">DEPRECATED</span>

DELETE /api/v2/messaging/integrations/facebook/{integrationId}

Delete a Facebook messaging integration



Requires ANY permissions: 

* messaging:integration:delete



### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.MessagingApi();

let integrationId = "integrationId_example"; // String | Integration ID

apiInstance.deleteMessagingIntegrationsFacebookIntegrationId(integrationId)
  .then(() => {
    console.log('deleteMessagingIntegrationsFacebookIntegrationId returned successfully.');
  })
  .catch((err) => {
    console.log('There was a failure calling deleteMessagingIntegrationsFacebookIntegrationId');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **integrationId** | **String** | Integration ID |  |
{: class="table table-striped"}

### Return type

void (no response body)

<a name="deleteMessagingIntegrationsLineIntegrationId"></a>

# void deleteMessagingIntegrationsLineIntegrationId(integrationId)

<span style="background-color: #f0ad4e;display: inline-block;padding: 7px;font-weight: bold;line-height: 1;color: #ffffff;text-align: center;white-space: nowrap;vertical-align: baseline;border-radius: .25em;margin: 10px 0;">DEPRECATED</span>

DELETE /api/v2/messaging/integrations/line/{integrationId}

Delete a LINE messenger integration



Requires ANY permissions: 

* messaging:integration:delete



### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.MessagingApi();

let integrationId = "integrationId_example"; // String | Integration ID

apiInstance.deleteMessagingIntegrationsLineIntegrationId(integrationId)
  .then(() => {
    console.log('deleteMessagingIntegrationsLineIntegrationId returned successfully.');
  })
  .catch((err) => {
    console.log('There was a failure calling deleteMessagingIntegrationsLineIntegrationId');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **integrationId** | **String** | Integration ID |  |
{: class="table table-striped"}

### Return type

void (no response body)

<a name="deleteMessagingIntegrationsTwitterIntegrationId"></a>

# void deleteMessagingIntegrationsTwitterIntegrationId(integrationId)

<span style="background-color: #f0ad4e;display: inline-block;padding: 7px;font-weight: bold;line-height: 1;color: #ffffff;text-align: center;white-space: nowrap;vertical-align: baseline;border-radius: .25em;margin: 10px 0;">DEPRECATED</span>

DELETE /api/v2/messaging/integrations/twitter/{integrationId}

Delete a Twitter messaging integration



Requires ANY permissions: 

* messaging:integration:delete



### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.MessagingApi();

let integrationId = "integrationId_example"; // String | Integration ID

apiInstance.deleteMessagingIntegrationsTwitterIntegrationId(integrationId)
  .then(() => {
    console.log('deleteMessagingIntegrationsTwitterIntegrationId returned successfully.');
  })
  .catch((err) => {
    console.log('There was a failure calling deleteMessagingIntegrationsTwitterIntegrationId');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **integrationId** | **String** | Integration ID |  |
{: class="table table-striped"}

### Return type

void (no response body)

<a name="getConversationsMessagingIntegrations"></a>

# MessagingIntegrationEntityListing getConversationsMessagingIntegrations(opts)



GET /api/v2/conversations/messaging/integrations

Get a list of Integrations



Requires ANY permissions: 

* messaging:integration:view



### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.MessagingApi();

let opts = { 
  'pageSize': 25, // Number | Page size
  'pageNumber': 1 // Number | Page number
};

apiInstance.getConversationsMessagingIntegrations(opts)
  .then((data) => {
    console.log(`getConversationsMessagingIntegrations success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getConversationsMessagingIntegrations');
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

**MessagingIntegrationEntityListing**

<a name="getConversationsMessagingIntegrationsFacebook"></a>

# FacebookIntegrationEntityListing getConversationsMessagingIntegrationsFacebook(opts)



GET /api/v2/conversations/messaging/integrations/facebook

Get a list of Facebook Integrations



Requires ANY permissions: 

* messaging:integration:view



### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.MessagingApi();

let opts = { 
  'pageSize': 25, // Number | Page size
  'pageNumber': 1 // Number | Page number
};

apiInstance.getConversationsMessagingIntegrationsFacebook(opts)
  .then((data) => {
    console.log(`getConversationsMessagingIntegrationsFacebook success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getConversationsMessagingIntegrationsFacebook');
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

**FacebookIntegrationEntityListing**

<a name="getConversationsMessagingIntegrationsFacebookIntegrationId"></a>

# FacebookIntegration getConversationsMessagingIntegrationsFacebookIntegrationId(integrationId)



GET /api/v2/conversations/messaging/integrations/facebook/{integrationId}

Get a Facebook messaging integration



Requires ANY permissions: 

* messaging:integration:view



### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.MessagingApi();

let integrationId = "integrationId_example"; // String | Integration ID

apiInstance.getConversationsMessagingIntegrationsFacebookIntegrationId(integrationId)
  .then((data) => {
    console.log(`getConversationsMessagingIntegrationsFacebookIntegrationId success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getConversationsMessagingIntegrationsFacebookIntegrationId');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **integrationId** | **String** | Integration ID |  |
{: class="table table-striped"}

### Return type

**FacebookIntegration**

<a name="getConversationsMessagingIntegrationsLine"></a>

# LineIntegrationEntityListing getConversationsMessagingIntegrationsLine(opts)



GET /api/v2/conversations/messaging/integrations/line

Get a list of LINE messenger Integrations



Requires ANY permissions: 

* messaging:integration:view



### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.MessagingApi();

let opts = { 
  'pageSize': 25, // Number | Page size
  'pageNumber': 1 // Number | Page number
};

apiInstance.getConversationsMessagingIntegrationsLine(opts)
  .then((data) => {
    console.log(`getConversationsMessagingIntegrationsLine success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getConversationsMessagingIntegrationsLine');
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

**LineIntegrationEntityListing**

<a name="getConversationsMessagingIntegrationsLineIntegrationId"></a>

# LineIntegration getConversationsMessagingIntegrationsLineIntegrationId(integrationId)



GET /api/v2/conversations/messaging/integrations/line/{integrationId}

Get a LINE messenger integration



Requires ANY permissions: 

* messaging:integration:view



### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.MessagingApi();

let integrationId = "integrationId_example"; // String | Integration ID

apiInstance.getConversationsMessagingIntegrationsLineIntegrationId(integrationId)
  .then((data) => {
    console.log(`getConversationsMessagingIntegrationsLineIntegrationId success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getConversationsMessagingIntegrationsLineIntegrationId');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **integrationId** | **String** | Integration ID |  |
{: class="table table-striped"}

### Return type

**LineIntegration**

<a name="getConversationsMessagingIntegrationsTwitter"></a>

# TwitterIntegrationEntityListing getConversationsMessagingIntegrationsTwitter(opts)



GET /api/v2/conversations/messaging/integrations/twitter

Get a list of Twitter Integrations



Requires ANY permissions: 

* messaging:integration:view



### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.MessagingApi();

let opts = { 
  'pageSize': 25, // Number | Page size
  'pageNumber': 1 // Number | Page number
};

apiInstance.getConversationsMessagingIntegrationsTwitter(opts)
  .then((data) => {
    console.log(`getConversationsMessagingIntegrationsTwitter success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getConversationsMessagingIntegrationsTwitter');
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

**TwitterIntegrationEntityListing**

<a name="getConversationsMessagingIntegrationsTwitterIntegrationId"></a>

# TwitterIntegration getConversationsMessagingIntegrationsTwitterIntegrationId(integrationId)



GET /api/v2/conversations/messaging/integrations/twitter/{integrationId}

Get a Twitter messaging integration



Requires ANY permissions: 

* messaging:integration:view



### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.MessagingApi();

let integrationId = "integrationId_example"; // String | Integration ID

apiInstance.getConversationsMessagingIntegrationsTwitterIntegrationId(integrationId)
  .then((data) => {
    console.log(`getConversationsMessagingIntegrationsTwitterIntegrationId success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getConversationsMessagingIntegrationsTwitterIntegrationId');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **integrationId** | **String** | Integration ID |  |
{: class="table table-striped"}

### Return type

**TwitterIntegration**

<a name="getConversationsMessagingSticker"></a>

# MessagingStickerEntityListing getConversationsMessagingSticker(messengerType, opts)



GET /api/v2/conversations/messaging/stickers/{messengerType}

Get a list of Messaging Stickers



Requires ANY permissions: 

* conversation:message:create



### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.MessagingApi();

let messengerType = "messengerType_example"; // String | Messenger Type
let opts = { 
  'pageSize': 25, // Number | Page size
  'pageNumber': 1 // Number | Page number
};

apiInstance.getConversationsMessagingSticker(messengerType, opts)
  .then((data) => {
    console.log(`getConversationsMessagingSticker success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getConversationsMessagingSticker');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **messengerType** | **String** | Messenger Type |  |
 **pageSize** | **Number** | Page size | [optional] [default to 25] |
 **pageNumber** | **Number** | Page number | [optional] [default to 1] |
{: class="table table-striped"}

### Return type

**MessagingStickerEntityListing**

<a name="getMessagingIntegrations"></a>

# MessagingIntegrationEntityListing getMessagingIntegrations(opts)

<span style="background-color: #f0ad4e;display: inline-block;padding: 7px;font-weight: bold;line-height: 1;color: #ffffff;text-align: center;white-space: nowrap;vertical-align: baseline;border-radius: .25em;margin: 10px 0;">DEPRECATED</span>

GET /api/v2/messaging/integrations

Get a list of Integrations



Requires ANY permissions: 

* messaging:integration:view



### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.MessagingApi();

let opts = { 
  'pageSize': 25, // Number | Page size
  'pageNumber': 1 // Number | Page number
};

apiInstance.getMessagingIntegrations(opts)
  .then((data) => {
    console.log(`getMessagingIntegrations success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getMessagingIntegrations');
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

**MessagingIntegrationEntityListing**

<a name="getMessagingIntegrationsFacebook"></a>

# FacebookIntegrationEntityListing getMessagingIntegrationsFacebook(opts)

<span style="background-color: #f0ad4e;display: inline-block;padding: 7px;font-weight: bold;line-height: 1;color: #ffffff;text-align: center;white-space: nowrap;vertical-align: baseline;border-radius: .25em;margin: 10px 0;">DEPRECATED</span>

GET /api/v2/messaging/integrations/facebook

Get a list of Facebook Integrations



Requires ANY permissions: 

* messaging:integration:view



### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.MessagingApi();

let opts = { 
  'pageSize': 25, // Number | Page size
  'pageNumber': 1 // Number | Page number
};

apiInstance.getMessagingIntegrationsFacebook(opts)
  .then((data) => {
    console.log(`getMessagingIntegrationsFacebook success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getMessagingIntegrationsFacebook');
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

**FacebookIntegrationEntityListing**

<a name="getMessagingIntegrationsFacebookIntegrationId"></a>

# FacebookIntegration getMessagingIntegrationsFacebookIntegrationId(integrationId)

<span style="background-color: #f0ad4e;display: inline-block;padding: 7px;font-weight: bold;line-height: 1;color: #ffffff;text-align: center;white-space: nowrap;vertical-align: baseline;border-radius: .25em;margin: 10px 0;">DEPRECATED</span>

GET /api/v2/messaging/integrations/facebook/{integrationId}

Get a Facebook messaging integration



Requires ANY permissions: 

* messaging:integration:view



### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.MessagingApi();

let integrationId = "integrationId_example"; // String | Integration ID

apiInstance.getMessagingIntegrationsFacebookIntegrationId(integrationId)
  .then((data) => {
    console.log(`getMessagingIntegrationsFacebookIntegrationId success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getMessagingIntegrationsFacebookIntegrationId');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **integrationId** | **String** | Integration ID |  |
{: class="table table-striped"}

### Return type

**FacebookIntegration**

<a name="getMessagingIntegrationsLine"></a>

# LineIntegrationEntityListing getMessagingIntegrationsLine(opts)

<span style="background-color: #f0ad4e;display: inline-block;padding: 7px;font-weight: bold;line-height: 1;color: #ffffff;text-align: center;white-space: nowrap;vertical-align: baseline;border-radius: .25em;margin: 10px 0;">DEPRECATED</span>

GET /api/v2/messaging/integrations/line

Get a list of LINE messenger Integrations



Requires ANY permissions: 

* messaging:integration:view



### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.MessagingApi();

let opts = { 
  'pageSize': 25, // Number | Page size
  'pageNumber': 1 // Number | Page number
};

apiInstance.getMessagingIntegrationsLine(opts)
  .then((data) => {
    console.log(`getMessagingIntegrationsLine success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getMessagingIntegrationsLine');
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

**LineIntegrationEntityListing**

<a name="getMessagingIntegrationsLineIntegrationId"></a>

# LineIntegration getMessagingIntegrationsLineIntegrationId(integrationId)

<span style="background-color: #f0ad4e;display: inline-block;padding: 7px;font-weight: bold;line-height: 1;color: #ffffff;text-align: center;white-space: nowrap;vertical-align: baseline;border-radius: .25em;margin: 10px 0;">DEPRECATED</span>

GET /api/v2/messaging/integrations/line/{integrationId}

Get a LINE messenger integration



Requires ANY permissions: 

* messaging:integration:view



### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.MessagingApi();

let integrationId = "integrationId_example"; // String | Integration ID

apiInstance.getMessagingIntegrationsLineIntegrationId(integrationId)
  .then((data) => {
    console.log(`getMessagingIntegrationsLineIntegrationId success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getMessagingIntegrationsLineIntegrationId');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **integrationId** | **String** | Integration ID |  |
{: class="table table-striped"}

### Return type

**LineIntegration**

<a name="getMessagingIntegrationsTwitter"></a>

# TwitterIntegrationEntityListing getMessagingIntegrationsTwitter(opts)

<span style="background-color: #f0ad4e;display: inline-block;padding: 7px;font-weight: bold;line-height: 1;color: #ffffff;text-align: center;white-space: nowrap;vertical-align: baseline;border-radius: .25em;margin: 10px 0;">DEPRECATED</span>

GET /api/v2/messaging/integrations/twitter

Get a list of Twitter Integrations



Requires ANY permissions: 

* messaging:integration:view



### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.MessagingApi();

let opts = { 
  'pageSize': 25, // Number | Page size
  'pageNumber': 1 // Number | Page number
};

apiInstance.getMessagingIntegrationsTwitter(opts)
  .then((data) => {
    console.log(`getMessagingIntegrationsTwitter success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getMessagingIntegrationsTwitter');
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

**TwitterIntegrationEntityListing**

<a name="getMessagingIntegrationsTwitterIntegrationId"></a>

# TwitterIntegration getMessagingIntegrationsTwitterIntegrationId(integrationId)

<span style="background-color: #f0ad4e;display: inline-block;padding: 7px;font-weight: bold;line-height: 1;color: #ffffff;text-align: center;white-space: nowrap;vertical-align: baseline;border-radius: .25em;margin: 10px 0;">DEPRECATED</span>

GET /api/v2/messaging/integrations/twitter/{integrationId}

Get a Twitter messaging integration



Requires ANY permissions: 

* messaging:integration:view



### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.MessagingApi();

let integrationId = "integrationId_example"; // String | Integration ID

apiInstance.getMessagingIntegrationsTwitterIntegrationId(integrationId)
  .then((data) => {
    console.log(`getMessagingIntegrationsTwitterIntegrationId success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getMessagingIntegrationsTwitterIntegrationId');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **integrationId** | **String** | Integration ID |  |
{: class="table table-striped"}

### Return type

**TwitterIntegration**

<a name="getMessagingSticker"></a>

# MessagingStickerEntityListing getMessagingSticker(messengerType, opts)

<span style="background-color: #f0ad4e;display: inline-block;padding: 7px;font-weight: bold;line-height: 1;color: #ffffff;text-align: center;white-space: nowrap;vertical-align: baseline;border-radius: .25em;margin: 10px 0;">DEPRECATED</span>

GET /api/v2/messaging/stickers/{messengerType}

Get a list of Messaging Stickers



Requires ANY permissions: 

* conversation:message:create



### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.MessagingApi();

let messengerType = "messengerType_example"; // String | Messenger Type
let opts = { 
  'pageSize': 25, // Number | Page size
  'pageNumber': 1 // Number | Page number
};

apiInstance.getMessagingSticker(messengerType, opts)
  .then((data) => {
    console.log(`getMessagingSticker success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getMessagingSticker');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **messengerType** | **String** | Messenger Type |  |
 **pageSize** | **Number** | Page size | [optional] [default to 25] |
 **pageNumber** | **Number** | Page number | [optional] [default to 1] |
{: class="table table-striped"}

### Return type

**MessagingStickerEntityListing**

<a name="postConversationsMessagingIntegrationsFacebook"></a>

# FacebookIntegration postConversationsMessagingIntegrationsFacebook(body)



POST /api/v2/conversations/messaging/integrations/facebook

Create a Facebook Integration



Requires ANY permissions: 

* messaging:integration:add


### Request Body Schema

<script type="text/javascript">
	function copyFacebookIntegrationRequestExample() {
		let temp = $("<textarea>");
		$("body").append(temp);
		temp.val($('#FacebookIntegrationRequestExample').text()).select();
		document.execCommand("copy");
		temp.remove();
		return false;
	}
</script>

FacebookIntegrationRequest <a href="#" onclick="return copyFacebookIntegrationRequestExample()">Copy</a>

<div id="FacebookIntegrationRequestExample">

```{"language":"json", "maxHeight": "250px"}
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

let apiInstance = new platformClient.MessagingApi();

let body = {}; // Object | FacebookIntegrationRequest

apiInstance.postConversationsMessagingIntegrationsFacebook(body)
  .then((data) => {
    console.log(`postConversationsMessagingIntegrationsFacebook success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling postConversationsMessagingIntegrationsFacebook');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **body** | **Object** | FacebookIntegrationRequest |  |
{: class="table table-striped"}

### Return type

**FacebookIntegration**

<a name="postConversationsMessagingIntegrationsLine"></a>

# LineIntegration postConversationsMessagingIntegrationsLine(body)



POST /api/v2/conversations/messaging/integrations/line

Create a LINE messenger Integration



Requires ANY permissions: 

* messaging:integration:add


### Request Body Schema

<script type="text/javascript">
	function copyLineIntegrationRequestExample() {
		let temp = $("<textarea>");
		$("body").append(temp);
		temp.val($('#LineIntegrationRequestExample').text()).select();
		document.execCommand("copy");
		temp.remove();
		return false;
	}
</script>

LineIntegrationRequest <a href="#" onclick="return copyLineIntegrationRequestExample()">Copy</a>

<div id="LineIntegrationRequestExample">

```{"language":"json", "maxHeight": "250px"}
{ 
  "id": String, 
  "name": String, 
  "channelId": String, 
  "channelSecret": String, 
  "switcherSecret": String, 
  "serviceCode": String, 
  "selfUri": String, 
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

let apiInstance = new platformClient.MessagingApi();

let body = {}; // Object | LineIntegrationRequest

apiInstance.postConversationsMessagingIntegrationsLine(body)
  .then((data) => {
    console.log(`postConversationsMessagingIntegrationsLine success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling postConversationsMessagingIntegrationsLine');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **body** | **Object** | LineIntegrationRequest |  |
{: class="table table-striped"}

### Return type

**LineIntegration**

<a name="postConversationsMessagingIntegrationsTwitter"></a>

# TwitterIntegration postConversationsMessagingIntegrationsTwitter(body)



POST /api/v2/conversations/messaging/integrations/twitter

Create a Twitter Integration



Requires ANY permissions: 

* messaging:integration:add


### Request Body Schema

<script type="text/javascript">
	function copyTwitterIntegrationRequestExample() {
		let temp = $("<textarea>");
		$("body").append(temp);
		temp.val($('#TwitterIntegrationRequestExample').text()).select();
		document.execCommand("copy");
		temp.remove();
		return false;
	}
</script>

TwitterIntegrationRequest <a href="#" onclick="return copyTwitterIntegrationRequestExample()">Copy</a>

<div id="TwitterIntegrationRequestExample">

```{"language":"json", "maxHeight": "250px"}
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

let apiInstance = new platformClient.MessagingApi();

let body = {}; // Object | TwitterIntegrationRequest

apiInstance.postConversationsMessagingIntegrationsTwitter(body)
  .then((data) => {
    console.log(`postConversationsMessagingIntegrationsTwitter success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling postConversationsMessagingIntegrationsTwitter');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **body** | **Object** | TwitterIntegrationRequest |  |
{: class="table table-striped"}

### Return type

**TwitterIntegration**

<a name="postMessagingIntegrationsFacebook"></a>

# FacebookIntegration postMessagingIntegrationsFacebook(body)

<span style="background-color: #f0ad4e;display: inline-block;padding: 7px;font-weight: bold;line-height: 1;color: #ffffff;text-align: center;white-space: nowrap;vertical-align: baseline;border-radius: .25em;margin: 10px 0;">DEPRECATED</span>

POST /api/v2/messaging/integrations/facebook

Create a Facebook Integration



Requires ANY permissions: 

* messaging:integration:add


### Request Body Schema

<script type="text/javascript">
	function copyFacebookIntegrationRequestExample() {
		let temp = $("<textarea>");
		$("body").append(temp);
		temp.val($('#FacebookIntegrationRequestExample').text()).select();
		document.execCommand("copy");
		temp.remove();
		return false;
	}
</script>

FacebookIntegrationRequest <a href="#" onclick="return copyFacebookIntegrationRequestExample()">Copy</a>

<div id="FacebookIntegrationRequestExample">

```{"language":"json", "maxHeight": "250px"}
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

let apiInstance = new platformClient.MessagingApi();

let body = {}; // Object | FacebookIntegrationRequest

apiInstance.postMessagingIntegrationsFacebook(body)
  .then((data) => {
    console.log(`postMessagingIntegrationsFacebook success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling postMessagingIntegrationsFacebook');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **body** | **Object** | FacebookIntegrationRequest |  |
{: class="table table-striped"}

### Return type

**FacebookIntegration**

<a name="postMessagingIntegrationsLine"></a>

# LineIntegration postMessagingIntegrationsLine(body)

<span style="background-color: #f0ad4e;display: inline-block;padding: 7px;font-weight: bold;line-height: 1;color: #ffffff;text-align: center;white-space: nowrap;vertical-align: baseline;border-radius: .25em;margin: 10px 0;">DEPRECATED</span>

POST /api/v2/messaging/integrations/line

Create a LINE messenger Integration



Requires ANY permissions: 

* messaging:integration:add


### Request Body Schema

<script type="text/javascript">
	function copyLineIntegrationRequestExample() {
		let temp = $("<textarea>");
		$("body").append(temp);
		temp.val($('#LineIntegrationRequestExample').text()).select();
		document.execCommand("copy");
		temp.remove();
		return false;
	}
</script>

LineIntegrationRequest <a href="#" onclick="return copyLineIntegrationRequestExample()">Copy</a>

<div id="LineIntegrationRequestExample">

```{"language":"json", "maxHeight": "250px"}
{ 
  "id": String, 
  "name": String, 
  "channelId": String, 
  "channelSecret": String, 
  "switcherSecret": String, 
  "serviceCode": String, 
  "selfUri": String, 
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

let apiInstance = new platformClient.MessagingApi();

let body = {}; // Object | LineIntegrationRequest

apiInstance.postMessagingIntegrationsLine(body)
  .then((data) => {
    console.log(`postMessagingIntegrationsLine success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling postMessagingIntegrationsLine');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **body** | **Object** | LineIntegrationRequest |  |
{: class="table table-striped"}

### Return type

**LineIntegration**

<a name="postMessagingIntegrationsTwitter"></a>

# TwitterIntegration postMessagingIntegrationsTwitter(body)

<span style="background-color: #f0ad4e;display: inline-block;padding: 7px;font-weight: bold;line-height: 1;color: #ffffff;text-align: center;white-space: nowrap;vertical-align: baseline;border-radius: .25em;margin: 10px 0;">DEPRECATED</span>

POST /api/v2/messaging/integrations/twitter

Create a Twitter Integration



Requires ANY permissions: 

* messaging:integration:add


### Request Body Schema

<script type="text/javascript">
	function copyTwitterIntegrationRequestExample() {
		let temp = $("<textarea>");
		$("body").append(temp);
		temp.val($('#TwitterIntegrationRequestExample').text()).select();
		document.execCommand("copy");
		temp.remove();
		return false;
	}
</script>

TwitterIntegrationRequest <a href="#" onclick="return copyTwitterIntegrationRequestExample()">Copy</a>

<div id="TwitterIntegrationRequestExample">

```{"language":"json", "maxHeight": "250px"}
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

let apiInstance = new platformClient.MessagingApi();

let body = {}; // Object | TwitterIntegrationRequest

apiInstance.postMessagingIntegrationsTwitter(body)
  .then((data) => {
    console.log(`postMessagingIntegrationsTwitter success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling postMessagingIntegrationsTwitter');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **body** | **Object** | TwitterIntegrationRequest |  |
{: class="table table-striped"}

### Return type

**TwitterIntegration**

<a name="putConversationsMessagingIntegrationsLineIntegrationId"></a>

# LineIntegration putConversationsMessagingIntegrationsLineIntegrationId(integrationId, body)



PUT /api/v2/conversations/messaging/integrations/line/{integrationId}

Update a LINE messenger integration



Requires ANY permissions: 

* messaging:integration:edit


### Request Body Schema

<script type="text/javascript">
	function copyLineIntegrationRequestExample() {
		let temp = $("<textarea>");
		$("body").append(temp);
		temp.val($('#LineIntegrationRequestExample').text()).select();
		document.execCommand("copy");
		temp.remove();
		return false;
	}
</script>

LineIntegrationRequest <a href="#" onclick="return copyLineIntegrationRequestExample()">Copy</a>

<div id="LineIntegrationRequestExample">

```{"language":"json", "maxHeight": "250px"}
{ 
  "id": String, 
  "name": String, 
  "channelId": String, 
  "channelSecret": String, 
  "switcherSecret": String, 
  "serviceCode": String, 
  "selfUri": String, 
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

let apiInstance = new platformClient.MessagingApi();

let integrationId = "integrationId_example"; // String | Integration ID
let body = {}; // Object | LineIntegrationRequest

apiInstance.putConversationsMessagingIntegrationsLineIntegrationId(integrationId, body)
  .then((data) => {
    console.log(`putConversationsMessagingIntegrationsLineIntegrationId success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling putConversationsMessagingIntegrationsLineIntegrationId');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **integrationId** | **String** | Integration ID |  |
 **body** | **Object** | LineIntegrationRequest |  |
{: class="table table-striped"}

### Return type

**LineIntegration**

<a name="putMessagingIntegrationsLineIntegrationId"></a>

# LineIntegration putMessagingIntegrationsLineIntegrationId(integrationId, body)

<span style="background-color: #f0ad4e;display: inline-block;padding: 7px;font-weight: bold;line-height: 1;color: #ffffff;text-align: center;white-space: nowrap;vertical-align: baseline;border-radius: .25em;margin: 10px 0;">DEPRECATED</span>

PUT /api/v2/messaging/integrations/line/{integrationId}

Update a LINE messenger integration



Requires ANY permissions: 

* messaging:integration:edit


### Request Body Schema

<script type="text/javascript">
	function copyLineIntegrationRequestExample() {
		let temp = $("<textarea>");
		$("body").append(temp);
		temp.val($('#LineIntegrationRequestExample').text()).select();
		document.execCommand("copy");
		temp.remove();
		return false;
	}
</script>

LineIntegrationRequest <a href="#" onclick="return copyLineIntegrationRequestExample()">Copy</a>

<div id="LineIntegrationRequestExample">

```{"language":"json", "maxHeight": "250px"}
{ 
  "id": String, 
  "name": String, 
  "channelId": String, 
  "channelSecret": String, 
  "switcherSecret": String, 
  "serviceCode": String, 
  "selfUri": String, 
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

let apiInstance = new platformClient.MessagingApi();

let integrationId = "integrationId_example"; // String | Integration ID
let body = {}; // Object | LineIntegrationRequest

apiInstance.putMessagingIntegrationsLineIntegrationId(integrationId, body)
  .then((data) => {
    console.log(`putMessagingIntegrationsLineIntegrationId success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling putMessagingIntegrationsLineIntegrationId');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **integrationId** | **String** | Integration ID |  |
 **body** | **Object** | LineIntegrationRequest |  |
{: class="table table-striped"}

### Return type

**LineIntegration**

