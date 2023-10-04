---
title: EmailsApi
---
# platformClient.EmailsApi

All URIs are relative to *https://api.inindca.com*

| Method | HTTP request | Description |
| ------------- | ------------- | ------------- |
[**deleteEmailsSettingsThreading**](EmailsApi.html#deleteEmailsSettingsThreading) | **DELETE** /api/v2/emails/settings/threading | Reset email threading settings to default
[**getEmailsSettings**](EmailsApi.html#getEmailsSettings) | **GET** /api/v2/emails/settings | Get email Contact Center settings
[**getEmailsSettingsThreading**](EmailsApi.html#getEmailsSettingsThreading) | **GET** /api/v2/emails/settings/threading | Get email threading settings
[**patchEmailsSettings**](EmailsApi.html#patchEmailsSettings) | **PATCH** /api/v2/emails/settings | Patch email Contact Center settings
[**patchEmailsSettingsThreading**](EmailsApi.html#patchEmailsSettingsThreading) | **PATCH** /api/v2/emails/settings/threading | Patch email threading settings
{: class="table table-striped"}

<a name="deleteEmailsSettingsThreading"></a>

# void deleteEmailsSettingsThreading()


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

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
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

<a name="getEmailsSettings"></a>

# EmailSettings getEmailsSettings()


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

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
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

<a name="getEmailsSettingsThreading"></a>

# EmailThreadingSettings getEmailsSettingsThreading()


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

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
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

<a name="patchEmailsSettings"></a>

# EmailSettings patchEmailsSettings(opts)


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

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
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
{: class="table table-striped"}

### Return type

**EmailSettings**

<a name="patchEmailsSettingsThreading"></a>

# EmailThreadingSettings patchEmailsSettingsThreading(opts)


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

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
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
{: class="table table-striped"}

### Return type

**EmailThreadingSettings**

