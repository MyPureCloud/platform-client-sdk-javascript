---
title: MessagingApi
---
# platformClient.MessagingApi

All URIs are relative to *https://api.mypurecloud.com*

| Method | HTTP request | Description |
| ------------- | ------------- | ------------- |
[**deleteMessagingSetting**](MessagingApi.html#deleteMessagingSetting) | **DELETE** /api/v2/messaging/settings/{messageSettingId} | Delete a messaging setting
[**deleteMessagingSettingsDefault**](MessagingApi.html#deleteMessagingSettingsDefault) | **DELETE** /api/v2/messaging/settings/default | Delete the organization's default setting, a global default will be applied to integrations without settings
[**deleteMessagingSupportedcontentSupportedContentId**](MessagingApi.html#deleteMessagingSupportedcontentSupportedContentId) | **DELETE** /api/v2/messaging/supportedcontent/{supportedContentId} | Delete a supported content profile
[**getMessagingSetting**](MessagingApi.html#getMessagingSetting) | **GET** /api/v2/messaging/settings/{messageSettingId} | Get a messaging setting
[**getMessagingSettings**](MessagingApi.html#getMessagingSettings) | **GET** /api/v2/messaging/settings | Get a list of messaging settings
[**getMessagingSettingsDefault**](MessagingApi.html#getMessagingSettingsDefault) | **GET** /api/v2/messaging/settings/default | Get the organization's default settings that will be used as the default when creating an integration.
[**getMessagingSupportedcontent**](MessagingApi.html#getMessagingSupportedcontent) | **GET** /api/v2/messaging/supportedcontent | Get a list of Supported Content profiles
[**getMessagingSupportedcontentSupportedContentId**](MessagingApi.html#getMessagingSupportedcontentSupportedContentId) | **GET** /api/v2/messaging/supportedcontent/{supportedContentId} | Get a supported content profile
[**patchMessagingSetting**](MessagingApi.html#patchMessagingSetting) | **PATCH** /api/v2/messaging/settings/{messageSettingId} | Update a messaging setting
[**patchMessagingSupportedcontentSupportedContentId**](MessagingApi.html#patchMessagingSupportedcontentSupportedContentId) | **PATCH** /api/v2/messaging/supportedcontent/{supportedContentId} | Update a supported content profile
[**postMessagingSettings**](MessagingApi.html#postMessagingSettings) | **POST** /api/v2/messaging/settings | Create a messaging setting
[**postMessagingSupportedcontent**](MessagingApi.html#postMessagingSupportedcontent) | **POST** /api/v2/messaging/supportedcontent | Create a Supported Content profile
[**putMessagingSettingsDefault**](MessagingApi.html#putMessagingSettingsDefault) | **PUT** /api/v2/messaging/settings/default | Set the organization's default settings that may be applied to an integration when it is created.
{: class="table table-striped"}

<a name="deleteMessagingSetting"></a>

# void deleteMessagingSetting(messageSettingId)

<span style="background-color: #f0ad4e;display: inline-block;padding: 7px;font-weight: bold;line-height: 1;color: #ffffff;text-align: center;white-space: nowrap;vertical-align: baseline;border-radius: .25em;margin: 10px 0;">DEPRECATED</span>

DELETE /api/v2/messaging/settings/{messageSettingId}

Delete a messaging setting

Requires ALL permissions:

* messaging:setting:delete

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.MessagingApi();

let messageSettingId = "messageSettingId_example"; // String | Message Settings ID

apiInstance.deleteMessagingSetting(messageSettingId)
  .then(() => {
    console.log('deleteMessagingSetting returned successfully.');
  })
  .catch((err) => {
    console.log('There was a failure calling deleteMessagingSetting');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **messageSettingId** | **String** | Message Settings ID |  |
{: class="table table-striped"}

### Return type

void (no response body)

<a name="deleteMessagingSettingsDefault"></a>

# void deleteMessagingSettingsDefault()

<span style="background-color: #f0ad4e;display: inline-block;padding: 7px;font-weight: bold;line-height: 1;color: #ffffff;text-align: center;white-space: nowrap;vertical-align: baseline;border-radius: .25em;margin: 10px 0;">DEPRECATED</span>

DELETE /api/v2/messaging/settings/default

Delete the organization's default setting, a global default will be applied to integrations without settings

When an integration is created a settings ID may be assigned to it. If the settings ID is not supplied, the default settings will be applied to it.

Requires ALL permissions:

* messaging:setting:delete

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.MessagingApi();

apiInstance.deleteMessagingSettingsDefault()
  .then(() => {
    console.log('deleteMessagingSettingsDefault returned successfully.');
  })
  .catch((err) => {
    console.log('There was a failure calling deleteMessagingSettingsDefault');
    console.error(err);
  });
```

### Parameters

This endpoint does not need any parameter.


### Return type

void (no response body)

<a name="deleteMessagingSupportedcontentSupportedContentId"></a>

# void deleteMessagingSupportedcontentSupportedContentId(supportedContentId)

<span style="background-color: #f0ad4e;display: inline-block;padding: 7px;font-weight: bold;line-height: 1;color: #ffffff;text-align: center;white-space: nowrap;vertical-align: baseline;border-radius: .25em;margin: 10px 0;">DEPRECATED</span>

DELETE /api/v2/messaging/supportedcontent/{supportedContentId}

Delete a supported content profile

Deprecated - use DELETE /api/v2/conversations/messaging/supportedcontent/{supportedContentId} as replacement

Requires ALL permissions:

* messaging:supportedContent:delete

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.MessagingApi();

let supportedContentId = "supportedContentId_example"; // String | Supported Content ID

apiInstance.deleteMessagingSupportedcontentSupportedContentId(supportedContentId)
  .then(() => {
    console.log('deleteMessagingSupportedcontentSupportedContentId returned successfully.');
  })
  .catch((err) => {
    console.log('There was a failure calling deleteMessagingSupportedcontentSupportedContentId');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **supportedContentId** | **String** | Supported Content ID |  |
{: class="table table-striped"}

### Return type

void (no response body)

<a name="getMessagingSetting"></a>

# MessagingSetting getMessagingSetting(messageSettingId)

<span style="background-color: #f0ad4e;display: inline-block;padding: 7px;font-weight: bold;line-height: 1;color: #ffffff;text-align: center;white-space: nowrap;vertical-align: baseline;border-radius: .25em;margin: 10px 0;">DEPRECATED</span>

GET /api/v2/messaging/settings/{messageSettingId}

Get a messaging setting

Requires ALL permissions:

* messaging:setting:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.MessagingApi();

let messageSettingId = "messageSettingId_example"; // String | Message Settings ID

apiInstance.getMessagingSetting(messageSettingId)
  .then((data) => {
    console.log(`getMessagingSetting success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getMessagingSetting');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **messageSettingId** | **String** | Message Settings ID |  |
{: class="table table-striped"}

### Return type

**MessagingSetting**

<a name="getMessagingSettings"></a>

# MessagingConfigListing getMessagingSettings(opts)

<span style="background-color: #f0ad4e;display: inline-block;padding: 7px;font-weight: bold;line-height: 1;color: #ffffff;text-align: center;white-space: nowrap;vertical-align: baseline;border-radius: .25em;margin: 10px 0;">DEPRECATED</span>

GET /api/v2/messaging/settings

Get a list of messaging settings

Requires ALL permissions:

* messaging:setting:view

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

apiInstance.getMessagingSettings(opts)
  .then((data) => {
    console.log(`getMessagingSettings success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getMessagingSettings');
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

**MessagingConfigListing**

<a name="getMessagingSettingsDefault"></a>

# MessagingSetting getMessagingSettingsDefault()

<span style="background-color: #f0ad4e;display: inline-block;padding: 7px;font-weight: bold;line-height: 1;color: #ffffff;text-align: center;white-space: nowrap;vertical-align: baseline;border-radius: .25em;margin: 10px 0;">DEPRECATED</span>

GET /api/v2/messaging/settings/default

Get the organization's default settings that will be used as the default when creating an integration.

When an integration is created a settings ID may be assigned to it. If the settings ID is not supplied, the default settings will be applied to it.

Requires ALL permissions:

* messaging:setting:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.MessagingApi();

apiInstance.getMessagingSettingsDefault()
  .then((data) => {
    console.log(`getMessagingSettingsDefault success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getMessagingSettingsDefault');
    console.error(err);
  });
```

### Parameters

This endpoint does not need any parameter.


### Return type

**MessagingSetting**

<a name="getMessagingSupportedcontent"></a>

# SupportedContentListing getMessagingSupportedcontent(opts)

<span style="background-color: #f0ad4e;display: inline-block;padding: 7px;font-weight: bold;line-height: 1;color: #ffffff;text-align: center;white-space: nowrap;vertical-align: baseline;border-radius: .25em;margin: 10px 0;">DEPRECATED</span>

GET /api/v2/messaging/supportedcontent

Get a list of Supported Content profiles

Deprecated - use GET /api/v2/conversations/messaging/supportedcontent as replacement

Requires ALL permissions:

* messaging:supportedContent:view

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

apiInstance.getMessagingSupportedcontent(opts)
  .then((data) => {
    console.log(`getMessagingSupportedcontent success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getMessagingSupportedcontent');
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

**SupportedContentListing**

<a name="getMessagingSupportedcontentSupportedContentId"></a>

# SupportedContent getMessagingSupportedcontentSupportedContentId(supportedContentId)

<span style="background-color: #f0ad4e;display: inline-block;padding: 7px;font-weight: bold;line-height: 1;color: #ffffff;text-align: center;white-space: nowrap;vertical-align: baseline;border-radius: .25em;margin: 10px 0;">DEPRECATED</span>

GET /api/v2/messaging/supportedcontent/{supportedContentId}

Get a supported content profile

Deprecated - use GET /api/v2/conversations/messaging/supportedcontent/{supportedContentId} as replacement

Requires ALL permissions:

* messaging:supportedContent:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.MessagingApi();

let supportedContentId = "supportedContentId_example"; // String | Supported Content ID

apiInstance.getMessagingSupportedcontentSupportedContentId(supportedContentId)
  .then((data) => {
    console.log(`getMessagingSupportedcontentSupportedContentId success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getMessagingSupportedcontentSupportedContentId');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **supportedContentId** | **String** | Supported Content ID |  |
{: class="table table-striped"}

### Return type

**SupportedContent**

<a name="patchMessagingSetting"></a>

# MessagingSetting patchMessagingSetting(messageSettingId, body)

<span style="background-color: #f0ad4e;display: inline-block;padding: 7px;font-weight: bold;line-height: 1;color: #ffffff;text-align: center;white-space: nowrap;vertical-align: baseline;border-radius: .25em;margin: 10px 0;">DEPRECATED</span>

PATCH /api/v2/messaging/settings/{messageSettingId}

Update a messaging setting

Requires ALL permissions:

* messaging:setting:edit

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.MessagingApi();

let messageSettingId = "messageSettingId_example"; // String | Message Settings ID
let body = {}; // Object | MessagingSetting

apiInstance.patchMessagingSetting(messageSettingId, body)
  .then((data) => {
    console.log(`patchMessagingSetting success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling patchMessagingSetting');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **messageSettingId** | **String** | Message Settings ID |  |
 **body** | **Object** | MessagingSetting |  |
{: class="table table-striped"}

### Return type

**MessagingSetting**

<a name="patchMessagingSupportedcontentSupportedContentId"></a>

# SupportedContent patchMessagingSupportedcontentSupportedContentId(supportedContentId, body)

<span style="background-color: #f0ad4e;display: inline-block;padding: 7px;font-weight: bold;line-height: 1;color: #ffffff;text-align: center;white-space: nowrap;vertical-align: baseline;border-radius: .25em;margin: 10px 0;">DEPRECATED</span>

PATCH /api/v2/messaging/supportedcontent/{supportedContentId}

Update a supported content profile

Deprecated - use PATCH /api/v2/conversations/messaging/supportedcontent/{supportedContentId} as replacement

Requires ALL permissions:

* messaging:supportedContent:edit

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.MessagingApi();

let supportedContentId = "supportedContentId_example"; // String | Supported Content ID
let body = {}; // Object | SupportedContent

apiInstance.patchMessagingSupportedcontentSupportedContentId(supportedContentId, body)
  .then((data) => {
    console.log(`patchMessagingSupportedcontentSupportedContentId success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling patchMessagingSupportedcontentSupportedContentId');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **supportedContentId** | **String** | Supported Content ID |  |
 **body** | **Object** | SupportedContent |  |
{: class="table table-striped"}

### Return type

**SupportedContent**

<a name="postMessagingSettings"></a>

# MessagingSetting postMessagingSettings(body)

<span style="background-color: #f0ad4e;display: inline-block;padding: 7px;font-weight: bold;line-height: 1;color: #ffffff;text-align: center;white-space: nowrap;vertical-align: baseline;border-radius: .25em;margin: 10px 0;">DEPRECATED</span>

POST /api/v2/messaging/settings

Create a messaging setting

Requires ANY permissions:

* messaging:setting:add

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.MessagingApi();

let body = {}; // Object | MessagingSetting

apiInstance.postMessagingSettings(body)
  .then((data) => {
    console.log(`postMessagingSettings success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling postMessagingSettings');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **body** | **Object** | MessagingSetting |  |
{: class="table table-striped"}

### Return type

**MessagingSetting**

<a name="postMessagingSupportedcontent"></a>

# SupportedContent postMessagingSupportedcontent(body)

<span style="background-color: #f0ad4e;display: inline-block;padding: 7px;font-weight: bold;line-height: 1;color: #ffffff;text-align: center;white-space: nowrap;vertical-align: baseline;border-radius: .25em;margin: 10px 0;">DEPRECATED</span>

POST /api/v2/messaging/supportedcontent

Create a Supported Content profile

Deprecated - use POST /api/v2/conversations/messaging/supportedcontent as replacement

Requires ANY permissions:

* messaging:supportedContent:add

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.MessagingApi();

let body = {}; // Object | SupportedContent

apiInstance.postMessagingSupportedcontent(body)
  .then((data) => {
    console.log(`postMessagingSupportedcontent success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling postMessagingSupportedcontent');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **body** | **Object** | SupportedContent |  |
{: class="table table-striped"}

### Return type

**SupportedContent**

<a name="putMessagingSettingsDefault"></a>

# MessagingSetting putMessagingSettingsDefault(body)

<span style="background-color: #f0ad4e;display: inline-block;padding: 7px;font-weight: bold;line-height: 1;color: #ffffff;text-align: center;white-space: nowrap;vertical-align: baseline;border-radius: .25em;margin: 10px 0;">DEPRECATED</span>

PUT /api/v2/messaging/settings/default

Set the organization's default settings that may be applied to an integration when it is created.

When an integration is created a settings ID may be assigned to it. If the settings ID is not supplied, the default settings will be applied to it.

Requires ALL permissions:

* messaging:setting:edit

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.MessagingApi();

let body = {}; // Object | Messaging Setting ID

apiInstance.putMessagingSettingsDefault(body)
  .then((data) => {
    console.log(`putMessagingSettingsDefault success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling putMessagingSettingsDefault');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **body** | **Object** | Messaging Setting ID |  |
{: class="table table-striped"}

### Return type

**MessagingSetting**

