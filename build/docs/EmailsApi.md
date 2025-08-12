# EmailsApi

# platformClient.EmailsApi

All URIs are relative to *https://api.mypurecloud.com*

| Method | HTTP request | Description |
| ------------- | ------------- | ------------- |
[**deleteEmailsSettingsThreading**](EmailsApi#deleteEmailsSettingsThreading) | **DELETE** /api/v2/emails/settings/threading | Reset email threading settings to default
[**getEmailsSettings**](EmailsApi#getEmailsSettings) | **GET** /api/v2/emails/settings | Get email Contact Center settings
[**getEmailsSettingsThreading**](EmailsApi#getEmailsSettingsThreading) | **GET** /api/v2/emails/settings/threading | Get email threading settings
[**patchEmailsSettings**](EmailsApi#patchEmailsSettings) | **PATCH** /api/v2/emails/settings | Patch email Contact Center settings
[**patchEmailsSettingsThreading**](EmailsApi#patchEmailsSettingsThreading) | **PATCH** /api/v2/emails/settings/threading | Patch email threading settings



## deleteEmailsSettingsThreading

> void deleteEmailsSettingsThreading()


DELETE /api/v2/emails/settings/threading

Reset email threading settings to default

Requires ANY permissions:

* conversation:emailThreadingSettings:edit

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.EmailsApi();

apiInstance.deleteEmailsSettingsThreading()
  .then(() => {
    console.log('deleteEmailsSettingsThreading returned successfully.');
  })
  .catch((err) => {
    console.log('There was a failure calling deleteEmailsSettingsThreading');
    console.error(err);
  });
```

### Parameters

This endpoint does not need any parameter.

### Return type

void (no response body)


## getEmailsSettings

> EmailSettings getEmailsSettings()


GET /api/v2/emails/settings

Get email Contact Center settings

Requires ANY permissions:

* conversation:settings:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.EmailsApi();

apiInstance.getEmailsSettings()
  .then((data) => {
    console.log(`getEmailsSettings success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getEmailsSettings');
    console.error(err);
  });
```

### Parameters

This endpoint does not need any parameter.

### Return type

**EmailSettings**


## getEmailsSettingsThreading

> EmailThreadingSettings getEmailsSettingsThreading()


GET /api/v2/emails/settings/threading

Get email threading settings

Requires ANY permissions:

* conversation:emailThreadingSettings:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.EmailsApi();

apiInstance.getEmailsSettingsThreading()
  .then((data) => {
    console.log(`getEmailsSettingsThreading success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getEmailsSettingsThreading');
    console.error(err);
  });
```

### Parameters

This endpoint does not need any parameter.

### Return type

**EmailThreadingSettings**


## patchEmailsSettings

> EmailSettings patchEmailsSettings(opts)


PATCH /api/v2/emails/settings

Patch email Contact Center settings

Requires ANY permissions:

* conversation:settings:edit

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.EmailsApi();

let opts = { 
  'body': {} // Object | 
};

apiInstance.patchEmailsSettings(opts)
  .then((data) => {
    console.log(`patchEmailsSettings success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling patchEmailsSettings');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **body** | **Object** |  | [optional]  |

### Return type

**EmailSettings**


## patchEmailsSettingsThreading

> EmailThreadingSettings patchEmailsSettingsThreading(opts)


PATCH /api/v2/emails/settings/threading

Patch email threading settings

Requires ANY permissions:

* conversation:emailThreadingSettings:edit

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.EmailsApi();

let opts = { 
  'body': {} // Object | 
};

apiInstance.patchEmailsSettingsThreading(opts)
  .then((data) => {
    console.log(`patchEmailsSettingsThreading success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling patchEmailsSettingsThreading');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **body** | **Object** |  | [optional]  |

### Return type

**EmailThreadingSettings**


_purecloud-platform-client-v2@229.1.0_
