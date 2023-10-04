---
title: MessagingApi
---
# platformClient.MessagingApi

All URIs are relative to *https://api.inindca.com*

| Method | HTTP request | Description |
| ------------- | ------------- | ------------- |
[**deleteMessagingIntegrationsFacebookIntegrationId**](MessagingApi.html#deleteMessagingIntegrationsFacebookIntegrationId) | **DELETE** /api/v2/messaging/integrations/facebook/{integrationId} | Delete a Facebook messaging integration
[**deleteMessagingIntegrationsLineIntegrationId**](MessagingApi.html#deleteMessagingIntegrationsLineIntegrationId) | **DELETE** /api/v2/messaging/integrations/line/{integrationId} | Delete a LINE messenger integration
[**deleteMessagingIntegrationsOpenIntegrationId**](MessagingApi.html#deleteMessagingIntegrationsOpenIntegrationId) | **DELETE** /api/v2/messaging/integrations/open/{integrationId} | Delete an Open messenger integration
[**deleteMessagingIntegrationsTwitterIntegrationId**](MessagingApi.html#deleteMessagingIntegrationsTwitterIntegrationId) | **DELETE** /api/v2/messaging/integrations/twitter/{integrationId} | Delete a Twitter messaging integration
[**deleteMessagingIntegrationsWhatsappIntegrationId**](MessagingApi.html#deleteMessagingIntegrationsWhatsappIntegrationId) | **DELETE** /api/v2/messaging/integrations/whatsapp/{integrationId} | Delete a WhatsApp messaging integration
[**deleteMessagingSetting**](MessagingApi.html#deleteMessagingSetting) | **DELETE** /api/v2/messaging/settings/{messageSettingId} | Delete a messaging setting
[**deleteMessagingSettingsDefault**](MessagingApi.html#deleteMessagingSettingsDefault) | **DELETE** /api/v2/messaging/settings/default | Delete the organization's default setting, a global default will be applied to integrations without settings
[**deleteMessagingSmsProvisioningLongcode**](MessagingApi.html#deleteMessagingSmsProvisioningLongcode) | **DELETE** /api/v2/messaging/sms/provisioning/longcodes/{longCode} | Deprovision a Longcode.
[**deleteMessagingSmsProvisioningSimulatedSenderId**](MessagingApi.html#deleteMessagingSmsProvisioningSimulatedSenderId) | **DELETE** /api/v2/messaging/sms/provisioning/simulated/{senderId} | Deprovision a Simulated Number.
[**deleteMessagingSmsProvisioningTollfreenumber**](MessagingApi.html#deleteMessagingSmsProvisioningTollfreenumber) | **DELETE** /api/v2/messaging/sms/provisioning/tollfreenumbers/{tollfreeNumberCode} | Deprovision a Tollfree Number.
[**deleteMessagingSupportedcontentSupportedContentId**](MessagingApi.html#deleteMessagingSupportedcontentSupportedContentId) | **DELETE** /api/v2/messaging/supportedcontent/{supportedContentId} | Delete a supported content profile
[**getMessagingFacebookApp**](MessagingApi.html#getMessagingFacebookApp) | **GET** /api/v2/messaging/facebook/app | Get Messaging Facebook App Id
[**getMessagingIntegrationMessageQueryQueryId**](MessagingApi.html#getMessagingIntegrationMessageQueryQueryId) | **GET** /api/v2/messaging/integrations/{integrationId}/messages/{messageId}/query/{queryId} | Retrieves the status of the job to retrieve an integration's public message. This API will return either a status code of 202 (to indicate that the request is still being processed), or 200 (when the requested public message becomes available).
[**getMessagingIntegrationMessageQueryQueryIdResults**](MessagingApi.html#getMessagingIntegrationMessageQueryQueryIdResults) | **GET** /api/v2/messaging/integrations/{integrationId}/messages/{messageId}/query/{queryId}/results | Retrieves the results of the job to retrieve an integration's public message. Note that the public message will be cached up to 10 minutes from the first query request, and the same query requests after that period will force the query request to be reprocessed.
[**getMessagingIntegrationMessageRepliesQueryQueryId**](MessagingApi.html#getMessagingIntegrationMessageRepliesQueryQueryId) | **GET** /api/v2/messaging/integrations/{integrationId}/messages/{messageId}/replies/query/{queryId} | Retrieves the status of the job to retrieve replies to an integration's public message. This API will return either a status code of 202 (to indicate that the request is still being processed), or 200 (when the requested replies to the public message becomes available).
[**getMessagingIntegrationMessageRepliesQueryQueryIdResults**](MessagingApi.html#getMessagingIntegrationMessageRepliesQueryQueryIdResults) | **GET** /api/v2/messaging/integrations/{integrationId}/messages/{messageId}/replies/query/{queryId}/results | Retrieves the results of the job to retrieve replies to an integration's public message. Note that the replies to the public message will be cached up to 10 minutes from the first query request, and the same query requests after that period will force the query request to be reprocessed.
[**getMessagingIntegrations**](MessagingApi.html#getMessagingIntegrations) | **GET** /api/v2/messaging/integrations | Get a list of Integrations
[**getMessagingIntegrationsFacebookIntegrationId**](MessagingApi.html#getMessagingIntegrationsFacebookIntegrationId) | **GET** /api/v2/messaging/integrations/facebook/{integrationId} | Get a Facebook messaging integration
[**getMessagingIntegrationsLineIntegrationId**](MessagingApi.html#getMessagingIntegrationsLineIntegrationId) | **GET** /api/v2/messaging/integrations/line/{integrationId} | Get a LINE messenger integration
[**getMessagingIntegrationsOpenIntegrationId**](MessagingApi.html#getMessagingIntegrationsOpenIntegrationId) | **GET** /api/v2/messaging/integrations/open/{integrationId} | Get an Open messenger integration
[**getMessagingIntegrationsTwitterIntegrationId**](MessagingApi.html#getMessagingIntegrationsTwitterIntegrationId) | **GET** /api/v2/messaging/integrations/twitter/{integrationId} | Get a Twitter messaging integration
[**getMessagingIntegrationsWhatsappIntegrationId**](MessagingApi.html#getMessagingIntegrationsWhatsappIntegrationId) | **GET** /api/v2/messaging/integrations/whatsapp/{integrationId} | Get a WhatsApp messaging integration
[**getMessagingSetting**](MessagingApi.html#getMessagingSetting) | **GET** /api/v2/messaging/settings/{messageSettingId} | Get a messaging setting
[**getMessagingSettings**](MessagingApi.html#getMessagingSettings) | **GET** /api/v2/messaging/settings | Get a list of messaging settings
[**getMessagingSettingsDefault**](MessagingApi.html#getMessagingSettingsDefault) | **GET** /api/v2/messaging/settings/default | Get the organization's default settings that will be used as the default when creating an integration.
[**getMessagingSmsProvisioningLongcodes**](MessagingApi.html#getMessagingSmsProvisioningLongcodes) | **GET** /api/v2/messaging/sms/provisioning/longcodes | List longcodes provisioned for this user
[**getMessagingSmsProvisioningLongcodesAvailable**](MessagingApi.html#getMessagingSmsProvisioningLongcodesAvailable) | **GET** /api/v2/messaging/sms/provisioning/longcodes/available | Search for Longcodes
[**getMessagingSmsProvisioningOrder**](MessagingApi.html#getMessagingSmsProvisioningOrder) | **GET** /api/v2/messaging/sms/provisioning/orders/{orderId} | Get details for an order.
[**getMessagingSmsProvisioningSimulated**](MessagingApi.html#getMessagingSmsProvisioningSimulated) | **GET** /api/v2/messaging/sms/provisioning/simulated | List Simulated Numbers provisioned for this org.
[**getMessagingSmsProvisioningSimulatedSenderId**](MessagingApi.html#getMessagingSmsProvisioningSimulatedSenderId) | **GET** /api/v2/messaging/sms/provisioning/simulated/{senderId} | List details of a Simulated Number.
[**getMessagingSmsProvisioningTollfreenumbers**](MessagingApi.html#getMessagingSmsProvisioningTollfreenumbers) | **GET** /api/v2/messaging/sms/provisioning/tollfreenumbers | List tollfree numbers provisioned for this user
[**getMessagingSmsProvisioningTollfreenumbersAvailable**](MessagingApi.html#getMessagingSmsProvisioningTollfreenumbersAvailable) | **GET** /api/v2/messaging/sms/provisioning/tollfreenumbers/available | Search for Tollfree Numbers
[**getMessagingSupportedcontent**](MessagingApi.html#getMessagingSupportedcontent) | **GET** /api/v2/messaging/supportedcontent | Get a list of Supported Content profiles
[**getMessagingSupportedcontentSupportedContentId**](MessagingApi.html#getMessagingSupportedcontentSupportedContentId) | **GET** /api/v2/messaging/supportedcontent/{supportedContentId} | Get a supported content profile
[**patchMessagingIntegrationsFacebookIntegrationId**](MessagingApi.html#patchMessagingIntegrationsFacebookIntegrationId) | **PATCH** /api/v2/messaging/integrations/facebook/{integrationId} | Update a Facebook messaging integration
[**patchMessagingIntegrationsLineIntegrationId**](MessagingApi.html#patchMessagingIntegrationsLineIntegrationId) | **PATCH** /api/v2/messaging/integrations/line/{integrationId} | Update a LINE messenger integration
[**patchMessagingIntegrationsOpenIntegrationId**](MessagingApi.html#patchMessagingIntegrationsOpenIntegrationId) | **PATCH** /api/v2/messaging/integrations/open/{integrationId} | Update an Open messenger integration
[**patchMessagingIntegrationsTwitterIntegrationId**](MessagingApi.html#patchMessagingIntegrationsTwitterIntegrationId) | **PATCH** /api/v2/messaging/integrations/twitter/{integrationId} | Update a Twitter messaging integration
[**patchMessagingIntegrationsWhatsappIntegrationId**](MessagingApi.html#patchMessagingIntegrationsWhatsappIntegrationId) | **PATCH** /api/v2/messaging/integrations/whatsapp/{integrationId} | Activate, confirm or update a WhatsApp messaging integration.
[**patchMessagingSetting**](MessagingApi.html#patchMessagingSetting) | **PATCH** /api/v2/messaging/settings/{messageSettingId} | Update a messaging setting
[**patchMessagingSmsProvisioningLongcode**](MessagingApi.html#patchMessagingSmsProvisioningLongcode) | **PATCH** /api/v2/messaging/sms/provisioning/longcodes/{longCode} | Update a Longcode
[**patchMessagingSmsProvisioningSimulatedSenderId**](MessagingApi.html#patchMessagingSmsProvisioningSimulatedSenderId) | **PATCH** /api/v2/messaging/sms/provisioning/simulated/{senderId} | Update a Simulated Number
[**patchMessagingSmsProvisioningTollfreenumber**](MessagingApi.html#patchMessagingSmsProvisioningTollfreenumber) | **PATCH** /api/v2/messaging/sms/provisioning/tollfreenumbers/{tollfreeNumberCode} | Update a Tollfree Number
[**patchMessagingSupportedcontentSupportedContentId**](MessagingApi.html#patchMessagingSupportedcontentSupportedContentId) | **PATCH** /api/v2/messaging/supportedcontent/{supportedContentId} | Update a supported content profile
[**postMessagingEmail**](MessagingApi.html#postMessagingEmail) | **POST** /api/v2/messaging/email | Send an email
[**postMessagingEmailBulk**](MessagingApi.html#postMessagingEmailBulk) | **POST** /api/v2/messaging/email/bulk | Send emails
[**postMessagingIntegrationMessageAction**](MessagingApi.html#postMessagingIntegrationMessageAction) | **POST** /api/v2/messaging/integrations/{integrationId}/messages/{messageId}/action | Post message action
[**postMessagingIntegrationMessageQuery**](MessagingApi.html#postMessagingIntegrationMessageQuery) | **POST** /api/v2/messaging/integrations/{integrationId}/messages/{messageId}/query | Starts the job to retrieve an integration's public message.
[**postMessagingIntegrationMessageRepliesQuery**](MessagingApi.html#postMessagingIntegrationMessageRepliesQuery) | **POST** /api/v2/messaging/integrations/{integrationId}/messages/{messageId}/replies/query | Starts the job to retrieve replies to an integration's public message.
[**postMessagingIntegrationMessages**](MessagingApi.html#postMessagingIntegrationMessages) | **POST** /api/v2/messaging/integrations/{integrationId}/messages | Send message
[**postMessagingIntegrationsFacebook**](MessagingApi.html#postMessagingIntegrationsFacebook) | **POST** /api/v2/messaging/integrations/facebook | Create a Facebook Integration
[**postMessagingIntegrationsLine**](MessagingApi.html#postMessagingIntegrationsLine) | **POST** /api/v2/messaging/integrations/line | Create a LINE messenger Integration
[**postMessagingIntegrationsOpen**](MessagingApi.html#postMessagingIntegrationsOpen) | **POST** /api/v2/messaging/integrations/open | Create an Open messenger Integration
[**postMessagingIntegrationsTwitter**](MessagingApi.html#postMessagingIntegrationsTwitter) | **POST** /api/v2/messaging/integrations/twitter | Create a Twitter Integration
[**postMessagingIntegrationsUploads**](MessagingApi.html#postMessagingIntegrationsUploads) | **POST** /api/v2/messaging/integrations/uploads | Creates presigned url for uploading messaging attachment
[**postMessagingIntegrationsWhatsapp**](MessagingApi.html#postMessagingIntegrationsWhatsapp) | **POST** /api/v2/messaging/integrations/whatsapp | Create a WhatsApp Integration
[**postMessagingMessagesInboundOpen**](MessagingApi.html#postMessagingMessagesInboundOpen) | **POST** /api/v2/messaging/messages/inbound/open | Send an inbound Open Message
[**postMessagingSettings**](MessagingApi.html#postMessagingSettings) | **POST** /api/v2/messaging/settings | Create a messaging setting
[**postMessagingSms**](MessagingApi.html#postMessagingSms) | **POST** /api/v2/messaging/sms | Send an SMS message
[**postMessagingSmsBulk**](MessagingApi.html#postMessagingSmsBulk) | **POST** /api/v2/messaging/sms/bulk | Send SMS messages
[**postMessagingSmsProvisioningLongcodes**](MessagingApi.html#postMessagingSmsProvisioningLongcodes) | **POST** /api/v2/messaging/sms/provisioning/longcodes | Provision new Longcode(s). Use orderId returned by this method to check status.
[**postMessagingSmsProvisioningLongcodesPortin**](MessagingApi.html#postMessagingSmsProvisioningLongcodesPortin) | **POST** /api/v2/messaging/sms/provisioning/longcodes/portin | Port in Longcode(s). Use orderId returned by this method to check status.
[**postMessagingSmsProvisioningSimulated**](MessagingApi.html#postMessagingSmsProvisioningSimulated) | **POST** /api/v2/messaging/sms/provisioning/simulated | Provision Simulated Number(s). Use orderId returned by this method to check status.
[**postMessagingSmsProvisioningTollfreenumbers**](MessagingApi.html#postMessagingSmsProvisioningTollfreenumbers) | **POST** /api/v2/messaging/sms/provisioning/tollfreenumbers | Provision Tollfree Number(s). Use orderId returned by this method to check status.
[**postMessagingSmsProvisioningTollfreenumbersPortin**](MessagingApi.html#postMessagingSmsProvisioningTollfreenumbersPortin) | **POST** /api/v2/messaging/sms/provisioning/tollfreenumbers/portin | Port in Tollfree Number(s). Use orderId returned by this method to check status.
[**postMessagingSupportedcontent**](MessagingApi.html#postMessagingSupportedcontent) | **POST** /api/v2/messaging/supportedcontent | Create a Supported Content profile
[**putMessagingSettingsDefault**](MessagingApi.html#putMessagingSettingsDefault) | **PUT** /api/v2/messaging/settings/default | Set the organization's default settings that may be applied to an integration when it is created.
{: class="table table-striped"}

<a name="deleteMessagingIntegrationsFacebookIntegrationId"></a>

# void deleteMessagingIntegrationsFacebookIntegrationId(integrationId)

<span style="background-color: #f0ad4e;display: inline-block;padding: 7px;font-weight: bold;line-height: 1;color: #ffffff;text-align: center;white-space: nowrap;vertical-align: baseline;border-radius: .25em;margin: 10px 0;">DEPRECATED</span>

DELETE /api/v2/messaging/integrations/facebook/{integrationId}

Delete a Facebook messaging integration

Requires ALL permissions:

* messaging:facebookIntegration:delete

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

Requires ALL permissions:

* messaging:lineIntegration:delete

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

<a name="deleteMessagingIntegrationsOpenIntegrationId"></a>

# void deleteMessagingIntegrationsOpenIntegrationId(integrationId)

<span style="background-color: #f0ad4e;display: inline-block;padding: 7px;font-weight: bold;line-height: 1;color: #ffffff;text-align: center;white-space: nowrap;vertical-align: baseline;border-radius: .25em;margin: 10px 0;">DEPRECATED</span>

DELETE /api/v2/messaging/integrations/open/{integrationId}

Delete an Open messenger integration

Requires ALL permissions:

* messaging:openIntegration:delete

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

apiInstance.deleteMessagingIntegrationsOpenIntegrationId(integrationId)
  .then(() => {
    console.log('deleteMessagingIntegrationsOpenIntegrationId returned successfully.');
  })
  .catch((err) => {
    console.log('There was a failure calling deleteMessagingIntegrationsOpenIntegrationId');
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

Requires ALL permissions:

* messaging:twitterIntegration:delete

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

<a name="deleteMessagingIntegrationsWhatsappIntegrationId"></a>

# void deleteMessagingIntegrationsWhatsappIntegrationId(integrationId)

<span style="background-color: #f0ad4e;display: inline-block;padding: 7px;font-weight: bold;line-height: 1;color: #ffffff;text-align: center;white-space: nowrap;vertical-align: baseline;border-radius: .25em;margin: 10px 0;">DEPRECATED</span>

DELETE /api/v2/messaging/integrations/whatsapp/{integrationId}

Delete a WhatsApp messaging integration

Requires ALL permissions:

* messaging:whatsAppIntegration:delete

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

apiInstance.deleteMessagingIntegrationsWhatsappIntegrationId(integrationId)
  .then(() => {
    console.log('deleteMessagingIntegrationsWhatsappIntegrationId returned successfully.');
  })
  .catch((err) => {
    console.log('There was a failure calling deleteMessagingIntegrationsWhatsappIntegrationId');
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

<a name="deleteMessagingSmsProvisioningLongcode"></a>

# void deleteMessagingSmsProvisioningLongcode(longCode)


DELETE /api/v2/messaging/sms/provisioning/longcodes/{longCode}

Deprovision a Longcode.

Requires ALL permissions:

* messagingProvisioning:phoneNumber:delete

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.MessagingApi();

let longCode = "longCode_example"; // String | Longcode in international format.

apiInstance.deleteMessagingSmsProvisioningLongcode(longCode)
  .then(() => {
    console.log('deleteMessagingSmsProvisioningLongcode returned successfully.');
  })
  .catch((err) => {
    console.log('There was a failure calling deleteMessagingSmsProvisioningLongcode');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **longCode** | **String** | Longcode in international format. |  |
{: class="table table-striped"}

### Return type

void (no response body)

<a name="deleteMessagingSmsProvisioningSimulatedSenderId"></a>

# void deleteMessagingSmsProvisioningSimulatedSenderId(senderId)


DELETE /api/v2/messaging/sms/provisioning/simulated/{senderId}

Deprovision a Simulated Number.

Requires ALL permissions:

* messagingProvisioning:phoneNumber:delete

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.MessagingApi();

let senderId = "senderId_example"; // String | The Number to be deleted

apiInstance.deleteMessagingSmsProvisioningSimulatedSenderId(senderId)
  .then(() => {
    console.log('deleteMessagingSmsProvisioningSimulatedSenderId returned successfully.');
  })
  .catch((err) => {
    console.log('There was a failure calling deleteMessagingSmsProvisioningSimulatedSenderId');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **senderId** | **String** | The Number to be deleted |  |
{: class="table table-striped"}

### Return type

void (no response body)

<a name="deleteMessagingSmsProvisioningTollfreenumber"></a>

# void deleteMessagingSmsProvisioningTollfreenumber(tollfreeNumberCode)


DELETE /api/v2/messaging/sms/provisioning/tollfreenumbers/{tollfreeNumberCode}

Deprovision a Tollfree Number.

Requires ALL permissions:

* messagingProvisioning:phoneNumber:delete

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.MessagingApi();

let tollfreeNumberCode = "tollfreeNumberCode_example"; // String | Tollfree Number in international format. For ex 18445551212

apiInstance.deleteMessagingSmsProvisioningTollfreenumber(tollfreeNumberCode)
  .then(() => {
    console.log('deleteMessagingSmsProvisioningTollfreenumber returned successfully.');
  })
  .catch((err) => {
    console.log('There was a failure calling deleteMessagingSmsProvisioningTollfreenumber');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **tollfreeNumberCode** | **String** | Tollfree Number in international format. For ex 18445551212 |  |
{: class="table table-striped"}

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

<a name="getMessagingFacebookApp"></a>

# PlatformFacebookAppCredentials getMessagingFacebookApp()

<span style="background-color: #f0ad4e;display: inline-block;padding: 7px;font-weight: bold;line-height: 1;color: #ffffff;text-align: center;white-space: nowrap;vertical-align: baseline;border-radius: .25em;margin: 10px 0;">DEPRECATED</span>

GET /api/v2/messaging/facebook/app

Get Messaging Facebook App Id

Requires ALL permissions:

* messaging:facebookIntegration:add

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.MessagingApi();

apiInstance.getMessagingFacebookApp()
  .then((data) => {
    console.log(`getMessagingFacebookApp success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getMessagingFacebookApp');
    console.error(err);
  });
```

### Parameters

This endpoint does not need any parameter.


### Return type

**PlatformFacebookAppCredentials**

<a name="getMessagingIntegrationMessageQueryQueryId"></a>

# MessagingTask getMessagingIntegrationMessageQueryQueryId(integrationId, messageId, queryId)

<span style="background-color: #f0ad4e;display: inline-block;padding: 7px;font-weight: bold;line-height: 1;color: #ffffff;text-align: center;white-space: nowrap;vertical-align: baseline;border-radius: .25em;margin: 10px 0;">DEPRECATED</span>

GET /api/v2/messaging/integrations/{integrationId}/messages/{messageId}/query/{queryId}

Retrieves the status of the job to retrieve an integration's public message. This API will return either a status code of 202 (to indicate that the request is still being processed), or 200 (when the requested public message becomes available).

Requires ALL permissions:

* messaging:message:view

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
let messageId = "messageId_example"; // String | Message ID
let queryId = "queryId_example"; // String | Query ID

apiInstance.getMessagingIntegrationMessageQueryQueryId(integrationId, messageId, queryId)
  .then((data) => {
    console.log(`getMessagingIntegrationMessageQueryQueryId success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getMessagingIntegrationMessageQueryQueryId');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **integrationId** | **String** | Integration ID |  |
 **messageId** | **String** | Message ID |  |
 **queryId** | **String** | Query ID |  |
{: class="table table-striped"}

### Return type

**MessagingTask**

<a name="getMessagingIntegrationMessageQueryQueryIdResults"></a>

# NormalizedMessage getMessagingIntegrationMessageQueryQueryIdResults(integrationId, messageId, queryId)

<span style="background-color: #f0ad4e;display: inline-block;padding: 7px;font-weight: bold;line-height: 1;color: #ffffff;text-align: center;white-space: nowrap;vertical-align: baseline;border-radius: .25em;margin: 10px 0;">DEPRECATED</span>

GET /api/v2/messaging/integrations/{integrationId}/messages/{messageId}/query/{queryId}/results

Retrieves the results of the job to retrieve an integration's public message. Note that the public message will be cached up to 10 minutes from the first query request, and the same query requests after that period will force the query request to be reprocessed.

Requires ALL permissions:

* messaging:message:view

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
let messageId = "messageId_example"; // String | Message ID
let queryId = "queryId_example"; // String | Query ID

apiInstance.getMessagingIntegrationMessageQueryQueryIdResults(integrationId, messageId, queryId)
  .then((data) => {
    console.log(`getMessagingIntegrationMessageQueryQueryIdResults success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getMessagingIntegrationMessageQueryQueryIdResults');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **integrationId** | **String** | Integration ID |  |
 **messageId** | **String** | Message ID |  |
 **queryId** | **String** | Query ID |  |
{: class="table table-striped"}

### Return type

**NormalizedMessage**

<a name="getMessagingIntegrationMessageRepliesQueryQueryId"></a>

# MessagingTask getMessagingIntegrationMessageRepliesQueryQueryId(integrationId, messageId, queryId, opts)

<span style="background-color: #f0ad4e;display: inline-block;padding: 7px;font-weight: bold;line-height: 1;color: #ffffff;text-align: center;white-space: nowrap;vertical-align: baseline;border-radius: .25em;margin: 10px 0;">DEPRECATED</span>

GET /api/v2/messaging/integrations/{integrationId}/messages/{messageId}/replies/query/{queryId}

Retrieves the status of the job to retrieve replies to an integration's public message. This API will return either a status code of 202 (to indicate that the request is still being processed), or 200 (when the requested replies to the public message becomes available).

Requires ALL permissions:

* messaging:message:view

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
let messageId = "messageId_example"; // String | Message ID
let queryId = "queryId_example"; // String | Query ID
let opts = { 
  'pageNumber': 1, // Number | Page number
  'pageSize': 25 // Number | Page size
};

apiInstance.getMessagingIntegrationMessageRepliesQueryQueryId(integrationId, messageId, queryId, opts)
  .then((data) => {
    console.log(`getMessagingIntegrationMessageRepliesQueryQueryId success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getMessagingIntegrationMessageRepliesQueryQueryId');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **integrationId** | **String** | Integration ID |  |
 **messageId** | **String** | Message ID |  |
 **queryId** | **String** | Query ID |  |
 **pageNumber** | **Number** | Page number | [optional] [default to 1] |
 **pageSize** | **Number** | Page size | [optional] [default to 25] |
{: class="table table-striped"}

### Return type

**MessagingTask**

<a name="getMessagingIntegrationMessageRepliesQueryQueryIdResults"></a>

# PagedEntityListing getMessagingIntegrationMessageRepliesQueryQueryIdResults(integrationId, messageId, queryId, opts)

<span style="background-color: #f0ad4e;display: inline-block;padding: 7px;font-weight: bold;line-height: 1;color: #ffffff;text-align: center;white-space: nowrap;vertical-align: baseline;border-radius: .25em;margin: 10px 0;">DEPRECATED</span>

GET /api/v2/messaging/integrations/{integrationId}/messages/{messageId}/replies/query/{queryId}/results

Retrieves the results of the job to retrieve replies to an integration's public message. Note that the replies to the public message will be cached up to 10 minutes from the first query request, and the same query requests after that period will force the query request to be reprocessed.

Requires ALL permissions:

* messaging:message:view

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
let messageId = "messageId_example"; // String | Message ID
let queryId = "queryId_example"; // String | Query ID
let opts = { 
  'pageNumber': 1, // Number | Page number
  'pageSize': 25 // Number | Page size
};

apiInstance.getMessagingIntegrationMessageRepliesQueryQueryIdResults(integrationId, messageId, queryId, opts)
  .then((data) => {
    console.log(`getMessagingIntegrationMessageRepliesQueryQueryIdResults success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getMessagingIntegrationMessageRepliesQueryQueryIdResults');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **integrationId** | **String** | Integration ID |  |
 **messageId** | **String** | Message ID |  |
 **queryId** | **String** | Query ID |  |
 **pageNumber** | **Number** | Page number | [optional] [default to 1] |
 **pageSize** | **Number** | Page size | [optional] [default to 25] |
{: class="table table-striped"}

### Return type

**PagedEntityListing**

<a name="getMessagingIntegrations"></a>

# MessagingPlatformIntegrationEntityListing getMessagingIntegrations(opts)

<span style="background-color: #f0ad4e;display: inline-block;padding: 7px;font-weight: bold;line-height: 1;color: #ffffff;text-align: center;white-space: nowrap;vertical-align: baseline;border-radius: .25em;margin: 10px 0;">DEPRECATED</span>

GET /api/v2/messaging/integrations

Get a list of Integrations

Requires ANY permissions:

* messaging:whatsAppIntegration:view
* messaging:lineIntegration:view
* messaging:facebookIntegration:view
* messaging:twitterIntegration:view
* messaging:openIntegration:view
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
  'pageNumber': 1, // Number | Page number
  'expand': "expand_example", // String | Expand instructions for the return value.
  'supportedContentId': "supportedContentId_example" // String | Filter integrations returned based on the supported content ID
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
 **expand** | **String** | Expand instructions for the return value. | [optional] <br />**Values**: supportedContent |
 **supportedContentId** | **String** | Filter integrations returned based on the supported content ID | [optional]  |
{: class="table table-striped"}

### Return type

**MessagingPlatformIntegrationEntityListing**

<a name="getMessagingIntegrationsFacebookIntegrationId"></a>

# PlatformFacebookIntegration getMessagingIntegrationsFacebookIntegrationId(integrationId, opts)

<span style="background-color: #f0ad4e;display: inline-block;padding: 7px;font-weight: bold;line-height: 1;color: #ffffff;text-align: center;white-space: nowrap;vertical-align: baseline;border-radius: .25em;margin: 10px 0;">DEPRECATED</span>

GET /api/v2/messaging/integrations/facebook/{integrationId}

Get a Facebook messaging integration

Requires ALL permissions:

* messaging:facebookIntegration:view

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
let opts = { 
  'expand': "expand_example" // String | Expand instructions for the return value.
};

apiInstance.getMessagingIntegrationsFacebookIntegrationId(integrationId, opts)
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
 **expand** | **String** | Expand instructions for the return value. | [optional] <br />**Values**: supportedContent |
{: class="table table-striped"}

### Return type

**PlatformFacebookIntegration**

<a name="getMessagingIntegrationsLineIntegrationId"></a>

# PlatformLineIntegration getMessagingIntegrationsLineIntegrationId(integrationId, opts)

<span style="background-color: #f0ad4e;display: inline-block;padding: 7px;font-weight: bold;line-height: 1;color: #ffffff;text-align: center;white-space: nowrap;vertical-align: baseline;border-radius: .25em;margin: 10px 0;">DEPRECATED</span>

GET /api/v2/messaging/integrations/line/{integrationId}

Get a LINE messenger integration

Requires ALL permissions:

* messaging:lineIntegration:view

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
let opts = { 
  'expand': "expand_example" // String | Expand instructions for the return value.
};

apiInstance.getMessagingIntegrationsLineIntegrationId(integrationId, opts)
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
 **expand** | **String** | Expand instructions for the return value. | [optional] <br />**Values**: supportedContent |
{: class="table table-striped"}

### Return type

**PlatformLineIntegration**

<a name="getMessagingIntegrationsOpenIntegrationId"></a>

# PlatformOpenIntegration getMessagingIntegrationsOpenIntegrationId(integrationId, opts)

<span style="background-color: #f0ad4e;display: inline-block;padding: 7px;font-weight: bold;line-height: 1;color: #ffffff;text-align: center;white-space: nowrap;vertical-align: baseline;border-radius: .25em;margin: 10px 0;">DEPRECATED</span>

GET /api/v2/messaging/integrations/open/{integrationId}

Get an Open messenger integration

Requires ALL permissions:

* messaging:openIntegration:view

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
let opts = { 
  'expand': "expand_example" // String | Expand instructions for the return value.
};

apiInstance.getMessagingIntegrationsOpenIntegrationId(integrationId, opts)
  .then((data) => {
    console.log(`getMessagingIntegrationsOpenIntegrationId success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getMessagingIntegrationsOpenIntegrationId');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **integrationId** | **String** | Integration ID |  |
 **expand** | **String** | Expand instructions for the return value. | [optional] <br />**Values**: supportedContent |
{: class="table table-striped"}

### Return type

**PlatformOpenIntegration**

<a name="getMessagingIntegrationsTwitterIntegrationId"></a>

# PlatformTwitterIntegration getMessagingIntegrationsTwitterIntegrationId(integrationId, opts)

<span style="background-color: #f0ad4e;display: inline-block;padding: 7px;font-weight: bold;line-height: 1;color: #ffffff;text-align: center;white-space: nowrap;vertical-align: baseline;border-radius: .25em;margin: 10px 0;">DEPRECATED</span>

GET /api/v2/messaging/integrations/twitter/{integrationId}

Get a Twitter messaging integration

Requires ALL permissions:

* messaging:twitterIntegration:view

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
let opts = { 
  'expand': "expand_example" // String | Expand instructions for the return value.
};

apiInstance.getMessagingIntegrationsTwitterIntegrationId(integrationId, opts)
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
 **expand** | **String** | Expand instructions for the return value. | [optional] <br />**Values**: supportedContent |
{: class="table table-striped"}

### Return type

**PlatformTwitterIntegration**

<a name="getMessagingIntegrationsWhatsappIntegrationId"></a>

# PlatformWhatsAppIntegration getMessagingIntegrationsWhatsappIntegrationId(integrationId, opts)

<span style="background-color: #f0ad4e;display: inline-block;padding: 7px;font-weight: bold;line-height: 1;color: #ffffff;text-align: center;white-space: nowrap;vertical-align: baseline;border-radius: .25em;margin: 10px 0;">DEPRECATED</span>

GET /api/v2/messaging/integrations/whatsapp/{integrationId}

Get a WhatsApp messaging integration

Requires ALL permissions:

* messaging:whatsAppIntegration:view

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
let opts = { 
  'expand': "expand_example" // String | Expand instructions for the return value.
};

apiInstance.getMessagingIntegrationsWhatsappIntegrationId(integrationId, opts)
  .then((data) => {
    console.log(`getMessagingIntegrationsWhatsappIntegrationId success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getMessagingIntegrationsWhatsappIntegrationId');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **integrationId** | **String** | Integration ID |  |
 **expand** | **String** | Expand instructions for the return value. | [optional] <br />**Values**: supportedContent |
{: class="table table-striped"}

### Return type

**PlatformWhatsAppIntegration**

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

<a name="getMessagingSmsProvisioningLongcodes"></a>

# LongcodeListResult getMessagingSmsProvisioningLongcodes()


GET /api/v2/messaging/sms/provisioning/longcodes

List longcodes provisioned for this user

Requires ALL permissions:

* messagingProvisioning:phoneNumber:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.MessagingApi();

apiInstance.getMessagingSmsProvisioningLongcodes()
  .then((data) => {
    console.log(`getMessagingSmsProvisioningLongcodes success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getMessagingSmsProvisioningLongcodes');
    console.error(err);
  });
```

### Parameters

This endpoint does not need any parameter.


### Return type

**LongcodeListResult**

<a name="getMessagingSmsProvisioningLongcodesAvailable"></a>

# LongcodeSearchResult getMessagingSmsProvisioningLongcodesAvailable(opts)


GET /api/v2/messaging/sms/provisioning/longcodes/available

Search for Longcodes

Requires ALL permissions:

* messagingProvisioning:phoneNumber:view

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
  'numberOfResults': 10, // Number | The number of search results to return. Returns a maximum of 100 results.
  'longCode': "longCode_example", // String | Longcode in international format. For example 17035551212
  'areaCode': 3.4, // Number | Area code or NPA. The allowed number ranges are [2-9] for the first digit and [0-9] for both the second and third digits. Can be used with nxx, city, state and postalCode.
  'exchangeCode': 3.4, // Number | NXX or Exchange. The allowed number ranges are [2-9] for the first digit and [0-9] for both the second and third digits. Must be used with area_code, city, state and postalCode.
  'country': "country_example", // String | Ony US and CA supported at this time. Can be used with city, state and postalCode.\\nFuture: 2 letter country code - https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2.
  'state': "state_example", // String | State or Province. Can be used with areaCode, nxx, city and postalCode.
  'city': "city_example", // String | City or Town. Can be used with areaCode, nxx, state and postalCode.
  'postalCode': "postalCode_example", // String | Postal Code. Can be used with areaCode, nxx, city and state.
  'vanity': "vanity_example", // String | 4 to 7 alpha-numeric vanity characters. Must be used with area_code. Can be used with ends_with. Will match anywhere in numbers unless used together with ends_with.
  'endsWith': "endsWith_example" // String | Matches the vanity characters at the end of the number. Must be used with vanity.
};

apiInstance.getMessagingSmsProvisioningLongcodesAvailable(opts)
  .then((data) => {
    console.log(`getMessagingSmsProvisioningLongcodesAvailable success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getMessagingSmsProvisioningLongcodesAvailable');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **numberOfResults** | **Number** | The number of search results to return. Returns a maximum of 100 results. | [optional] [default to 10] |
 **longCode** | **String** | Longcode in international format. For example 17035551212 | [optional]  |
 **areaCode** | **Number** | Area code or NPA. The allowed number ranges are [2-9] for the first digit and [0-9] for both the second and third digits. Can be used with nxx, city, state and postalCode. | [optional]  |
 **exchangeCode** | **Number** | NXX or Exchange. The allowed number ranges are [2-9] for the first digit and [0-9] for both the second and third digits. Must be used with area_code, city, state and postalCode. | [optional]  |
 **country** | **String** | Ony US and CA supported at this time. Can be used with city, state and postalCode.\\nFuture: 2 letter country code - https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2. | [optional]  |
 **state** | **String** | State or Province. Can be used with areaCode, nxx, city and postalCode. | [optional]  |
 **city** | **String** | City or Town. Can be used with areaCode, nxx, state and postalCode. | [optional]  |
 **postalCode** | **String** | Postal Code. Can be used with areaCode, nxx, city and state. | [optional]  |
 **vanity** | **String** | 4 to 7 alpha-numeric vanity characters. Must be used with area_code. Can be used with ends_with. Will match anywhere in numbers unless used together with ends_with. | [optional]  |
 **endsWith** | **String** | Matches the vanity characters at the end of the number. Must be used with vanity. | [optional]  |
{: class="table table-striped"}

### Return type

**LongcodeSearchResult**

<a name="getMessagingSmsProvisioningOrder"></a>

# ProvisioningOrder getMessagingSmsProvisioningOrder(orderId)


GET /api/v2/messaging/sms/provisioning/orders/{orderId}

Get details for an order.

Requires ALL permissions:

* messagingProvisioning:phoneNumber:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.MessagingApi();

let orderId = "orderId_example"; // String | Unique id for order.

apiInstance.getMessagingSmsProvisioningOrder(orderId)
  .then((data) => {
    console.log(`getMessagingSmsProvisioningOrder success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getMessagingSmsProvisioningOrder');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **orderId** | **String** | Unique id for order. |  |
{: class="table table-striped"}

### Return type

**ProvisioningOrder**

<a name="getMessagingSmsProvisioningSimulated"></a>

# SimulatedSenderListResult getMessagingSmsProvisioningSimulated()


GET /api/v2/messaging/sms/provisioning/simulated

List Simulated Numbers provisioned for this org.

Requires ALL permissions:

* messagingProvisioning:phoneNumber:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.MessagingApi();

apiInstance.getMessagingSmsProvisioningSimulated()
  .then((data) => {
    console.log(`getMessagingSmsProvisioningSimulated success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getMessagingSmsProvisioningSimulated');
    console.error(err);
  });
```

### Parameters

This endpoint does not need any parameter.


### Return type

**SimulatedSenderListResult**

<a name="getMessagingSmsProvisioningSimulatedSenderId"></a>

# SimulatedSender getMessagingSmsProvisioningSimulatedSenderId(senderId)


GET /api/v2/messaging/sms/provisioning/simulated/{senderId}

List details of a Simulated Number.

Requires ALL permissions:

* messagingProvisioning:phoneNumber:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.MessagingApi();

let senderId = "senderId_example"; // String | The SenderId.

apiInstance.getMessagingSmsProvisioningSimulatedSenderId(senderId)
  .then((data) => {
    console.log(`getMessagingSmsProvisioningSimulatedSenderId success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getMessagingSmsProvisioningSimulatedSenderId');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **senderId** | **String** | The SenderId. |  |
{: class="table table-striped"}

### Return type

**SimulatedSender**

<a name="getMessagingSmsProvisioningTollfreenumbers"></a>

# TollfreeNumberListResult getMessagingSmsProvisioningTollfreenumbers()


GET /api/v2/messaging/sms/provisioning/tollfreenumbers

List tollfree numbers provisioned for this user

Requires ALL permissions:

* messagingProvisioning:phoneNumber:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.MessagingApi();

apiInstance.getMessagingSmsProvisioningTollfreenumbers()
  .then((data) => {
    console.log(`getMessagingSmsProvisioningTollfreenumbers success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getMessagingSmsProvisioningTollfreenumbers');
    console.error(err);
  });
```

### Parameters

This endpoint does not need any parameter.


### Return type

**TollfreeNumberListResult**

<a name="getMessagingSmsProvisioningTollfreenumbersAvailable"></a>

# TollfreeNumberSearchResult getMessagingSmsProvisioningTollfreenumbersAvailable(opts)


GET /api/v2/messaging/sms/provisioning/tollfreenumbers/available

Search for Tollfree Numbers

Requires ALL permissions:

* messagingProvisioning:phoneNumber:view

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
  'numberOfResults': 10, // Number | The number of search results to return. Returns a maximum of 100 results.
  'vanity': "vanity_example" // String | 4 to 7 alpha-numeric vanity characters.
};

apiInstance.getMessagingSmsProvisioningTollfreenumbersAvailable(opts)
  .then((data) => {
    console.log(`getMessagingSmsProvisioningTollfreenumbersAvailable success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getMessagingSmsProvisioningTollfreenumbersAvailable');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **numberOfResults** | **Number** | The number of search results to return. Returns a maximum of 100 results. | [optional] [default to 10] |
 **vanity** | **String** | 4 to 7 alpha-numeric vanity characters. | [optional]  |
{: class="table table-striped"}

### Return type

**TollfreeNumberSearchResult**

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

<a name="patchMessagingIntegrationsFacebookIntegrationId"></a>

# PlatformFacebookIntegration patchMessagingIntegrationsFacebookIntegrationId(integrationId, body)

<span style="background-color: #f0ad4e;display: inline-block;padding: 7px;font-weight: bold;line-height: 1;color: #ffffff;text-align: center;white-space: nowrap;vertical-align: baseline;border-radius: .25em;margin: 10px 0;">DEPRECATED</span>

PATCH /api/v2/messaging/integrations/facebook/{integrationId}

Update a Facebook messaging integration

Requires ALL permissions:

* messaging:facebookIntegration:edit

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
let body = {}; // Object | PlatformFacebookIntegrationPatchRequest

apiInstance.patchMessagingIntegrationsFacebookIntegrationId(integrationId, body)
  .then((data) => {
    console.log(`patchMessagingIntegrationsFacebookIntegrationId success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling patchMessagingIntegrationsFacebookIntegrationId');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **integrationId** | **String** | Integration ID |  |
 **body** | **Object** | PlatformFacebookIntegrationPatchRequest |  |
{: class="table table-striped"}

### Return type

**PlatformFacebookIntegration**

<a name="patchMessagingIntegrationsLineIntegrationId"></a>

# PlatformLineIntegration patchMessagingIntegrationsLineIntegrationId(integrationId, body)

<span style="background-color: #f0ad4e;display: inline-block;padding: 7px;font-weight: bold;line-height: 1;color: #ffffff;text-align: center;white-space: nowrap;vertical-align: baseline;border-radius: .25em;margin: 10px 0;">DEPRECATED</span>

PATCH /api/v2/messaging/integrations/line/{integrationId}

Update a LINE messenger integration

Requires ALL permissions:

* messaging:lineIntegration:edit

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
let body = {}; // Object | PlatformLineIntegrationPatchRequest

apiInstance.patchMessagingIntegrationsLineIntegrationId(integrationId, body)
  .then((data) => {
    console.log(`patchMessagingIntegrationsLineIntegrationId success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling patchMessagingIntegrationsLineIntegrationId');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **integrationId** | **String** | Integration ID |  |
 **body** | **Object** | PlatformLineIntegrationPatchRequest |  |
{: class="table table-striped"}

### Return type

**PlatformLineIntegration**

<a name="patchMessagingIntegrationsOpenIntegrationId"></a>

# PlatformOpenIntegration patchMessagingIntegrationsOpenIntegrationId(integrationId, body)

<span style="background-color: #f0ad4e;display: inline-block;padding: 7px;font-weight: bold;line-height: 1;color: #ffffff;text-align: center;white-space: nowrap;vertical-align: baseline;border-radius: .25em;margin: 10px 0;">DEPRECATED</span>

PATCH /api/v2/messaging/integrations/open/{integrationId}

Update an Open messenger integration

Requires ALL permissions:

* messaging:openIntegration:edit

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
let body = {}; // Object | PlatformOpenIntegrationPatchRequest

apiInstance.patchMessagingIntegrationsOpenIntegrationId(integrationId, body)
  .then((data) => {
    console.log(`patchMessagingIntegrationsOpenIntegrationId success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling patchMessagingIntegrationsOpenIntegrationId');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **integrationId** | **String** | Integration ID |  |
 **body** | **Object** | PlatformOpenIntegrationPatchRequest |  |
{: class="table table-striped"}

### Return type

**PlatformOpenIntegration**

<a name="patchMessagingIntegrationsTwitterIntegrationId"></a>

# PlatformTwitterIntegration patchMessagingIntegrationsTwitterIntegrationId(integrationId, body)

<span style="background-color: #f0ad4e;display: inline-block;padding: 7px;font-weight: bold;line-height: 1;color: #ffffff;text-align: center;white-space: nowrap;vertical-align: baseline;border-radius: .25em;margin: 10px 0;">DEPRECATED</span>

PATCH /api/v2/messaging/integrations/twitter/{integrationId}

Update a Twitter messaging integration

Requires ALL permissions:

* messaging:twitterIntegration:edit

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
let body = {}; // Object | PlatformTwitterIntegrationPatchRequest

apiInstance.patchMessagingIntegrationsTwitterIntegrationId(integrationId, body)
  .then((data) => {
    console.log(`patchMessagingIntegrationsTwitterIntegrationId success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling patchMessagingIntegrationsTwitterIntegrationId');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **integrationId** | **String** | Integration ID |  |
 **body** | **Object** | PlatformTwitterIntegrationPatchRequest |  |
{: class="table table-striped"}

### Return type

**PlatformTwitterIntegration**

<a name="patchMessagingIntegrationsWhatsappIntegrationId"></a>

# PlatformWhatsAppIntegration patchMessagingIntegrationsWhatsappIntegrationId(integrationId, body)

<span style="background-color: #f0ad4e;display: inline-block;padding: 7px;font-weight: bold;line-height: 1;color: #ffffff;text-align: center;white-space: nowrap;vertical-align: baseline;border-radius: .25em;margin: 10px 0;">DEPRECATED</span>

PATCH /api/v2/messaging/integrations/whatsapp/{integrationId}

Activate, confirm or update a WhatsApp messaging integration.

The following steps are required in order to fully activate a Whatsapp Integration: Initially, you will need to get an activation code by sending: an authentication method choosing from sms or voice, a phone number and a verifiedNameCertificate(WhatsApp Business Manager Certificate) of the whatsApp integration. Once you have been informed of an activation code on selected authenticationMethod, you will need to confirm the code by sending: the confirmation code you have received from Whatsapp.

Requires ALL permissions:

* messaging:whatsAppIntegration:edit

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
let body = {}; // Object | PlatformWhatsAppIntegrationPatchRequest

apiInstance.patchMessagingIntegrationsWhatsappIntegrationId(integrationId, body)
  .then((data) => {
    console.log(`patchMessagingIntegrationsWhatsappIntegrationId success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling patchMessagingIntegrationsWhatsappIntegrationId');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **integrationId** | **String** | Integration ID |  |
 **body** | **Object** | PlatformWhatsAppIntegrationPatchRequest |  |
{: class="table table-striped"}

### Return type

**PlatformWhatsAppIntegration**

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

<a name="patchMessagingSmsProvisioningLongcode"></a>

# Longcode patchMessagingSmsProvisioningLongcode(longCode, request)


PATCH /api/v2/messaging/sms/provisioning/longcodes/{longCode}

Update a Longcode

Can be used to reassign to another account. Cannot be used to deprovision - use delete instead.

Requires ALL permissions:

* messagingProvisioning:phoneNumber:edit

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.MessagingApi();

let longCode = "longCode_example"; // String | Longcode in international format.
let request = {}; // Object | The new longcode details

apiInstance.patchMessagingSmsProvisioningLongcode(longCode, request)
  .then((data) => {
    console.log(`patchMessagingSmsProvisioningLongcode success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling patchMessagingSmsProvisioningLongcode');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **longCode** | **String** | Longcode in international format. |  |
 **request** | **Object** | The new longcode details |  |
{: class="table table-striped"}

### Return type

**Longcode**

<a name="patchMessagingSmsProvisioningSimulatedSenderId"></a>

# SimulatedSender patchMessagingSmsProvisioningSimulatedSenderId(senderId, request)


PATCH /api/v2/messaging/sms/provisioning/simulated/{senderId}

Update a Simulated Number

Cannot be used to deprovision - use delete instead.

Requires ALL permissions:

* messagingProvisioning:phoneNumber:edit

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.MessagingApi();

let senderId = "senderId_example"; // String | The Number to be modified
let request = {}; // Object | The new Simulated Number details

apiInstance.patchMessagingSmsProvisioningSimulatedSenderId(senderId, request)
  .then((data) => {
    console.log(`patchMessagingSmsProvisioningSimulatedSenderId success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling patchMessagingSmsProvisioningSimulatedSenderId');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **senderId** | **String** | The Number to be modified |  |
 **request** | **Object** | The new Simulated Number details |  |
{: class="table table-striped"}

### Return type

**SimulatedSender**

<a name="patchMessagingSmsProvisioningTollfreenumber"></a>

# TollfreeNumber patchMessagingSmsProvisioningTollfreenumber(tollfreeNumberCode, request)


PATCH /api/v2/messaging/sms/provisioning/tollfreenumbers/{tollfreeNumberCode}

Update a Tollfree Number

Can be used to reassign to another account. Cannot be used to deprovision - use delete instead.

Requires ALL permissions:

* messagingProvisioning:phoneNumber:edit

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.MessagingApi();

let tollfreeNumberCode = "tollfreeNumberCode_example"; // String | Tollfree Number in international format. For ex 18445551212
let request = {}; // Object | The new Tollfree Number details

apiInstance.patchMessagingSmsProvisioningTollfreenumber(tollfreeNumberCode, request)
  .then((data) => {
    console.log(`patchMessagingSmsProvisioningTollfreenumber success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling patchMessagingSmsProvisioningTollfreenumber');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **tollfreeNumberCode** | **String** | Tollfree Number in international format. For ex 18445551212 |  |
 **request** | **Object** | The new Tollfree Number details |  |
{: class="table table-striped"}

### Return type

**TollfreeNumber**

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

<a name="postMessagingEmail"></a>

# SendMessageResponse postMessagingEmail(opts)


POST /api/v2/messaging/email

Send an email

Requires ALL permissions:

* messaging:email:send

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
  'body': {} // Object | 
};

apiInstance.postMessagingEmail(opts)
  .then((data) => {
    console.log(`postMessagingEmail success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling postMessagingEmail');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **body** | **Object** |  | [optional]  |
{: class="table table-striped"}

### Return type

**SendMessageResponse**

<a name="postMessagingEmailBulk"></a>

# [SendMessagesResponse] postMessagingEmailBulk(opts)


POST /api/v2/messaging/email/bulk

Send emails

Requires ALL permissions:

* messaging:email:send

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
  'body': [{}] // Object | 
};

apiInstance.postMessagingEmailBulk(opts)
  .then((data) => {
    console.log(`postMessagingEmailBulk success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling postMessagingEmailBulk');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **body** | **Object** |  | [optional]  |
{: class="table table-striped"}

### Return type

**[SendMessagesResponse]**

<a name="postMessagingIntegrationMessageAction"></a>

# void postMessagingIntegrationMessageAction(integrationId, messageId, body)

<span style="background-color: #f0ad4e;display: inline-block;padding: 7px;font-weight: bold;line-height: 1;color: #ffffff;text-align: center;white-space: nowrap;vertical-align: baseline;border-radius: .25em;margin: 10px 0;">DEPRECATED</span>

POST /api/v2/messaging/integrations/{integrationId}/messages/{messageId}/action

Post message action

Requires ALL permissions:

* messaging:message:send

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
let messageId = "messageId_example"; // String | Message ID
let body = {}; // Object | Public message action

apiInstance.postMessagingIntegrationMessageAction(integrationId, messageId, body)
  .then(() => {
    console.log('postMessagingIntegrationMessageAction returned successfully.');
  })
  .catch((err) => {
    console.log('There was a failure calling postMessagingIntegrationMessageAction');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **integrationId** | **String** | Integration ID |  |
 **messageId** | **String** | Message ID |  |
 **body** | **Object** | Public message action |  |
{: class="table table-striped"}

### Return type

void (no response body)

<a name="postMessagingIntegrationMessageQuery"></a>

# MessagingTask postMessagingIntegrationMessageQuery(integrationId, messageId)

<span style="background-color: #f0ad4e;display: inline-block;padding: 7px;font-weight: bold;line-height: 1;color: #ffffff;text-align: center;white-space: nowrap;vertical-align: baseline;border-radius: .25em;margin: 10px 0;">DEPRECATED</span>

POST /api/v2/messaging/integrations/{integrationId}/messages/{messageId}/query

Starts the job to retrieve an integration's public message.

Requires ALL permissions:

* messaging:message:view

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
let messageId = "messageId_example"; // String | Message ID

apiInstance.postMessagingIntegrationMessageQuery(integrationId, messageId)
  .then((data) => {
    console.log(`postMessagingIntegrationMessageQuery success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling postMessagingIntegrationMessageQuery');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **integrationId** | **String** | Integration ID |  |
 **messageId** | **String** | Message ID |  |
{: class="table table-striped"}

### Return type

**MessagingTask**

<a name="postMessagingIntegrationMessageRepliesQuery"></a>

# MessagingTask postMessagingIntegrationMessageRepliesQuery(integrationId, messageId, opts)

<span style="background-color: #f0ad4e;display: inline-block;padding: 7px;font-weight: bold;line-height: 1;color: #ffffff;text-align: center;white-space: nowrap;vertical-align: baseline;border-radius: .25em;margin: 10px 0;">DEPRECATED</span>

POST /api/v2/messaging/integrations/{integrationId}/messages/{messageId}/replies/query

Starts the job to retrieve replies to an integration's public message.

Requires ALL permissions:

* messaging:message:view

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
let messageId = "messageId_example"; // String | Message ID
let opts = { 
  'pageNumber': 1, // Number | Page number
  'pageSize': 25 // Number | Page size
};

apiInstance.postMessagingIntegrationMessageRepliesQuery(integrationId, messageId, opts)
  .then((data) => {
    console.log(`postMessagingIntegrationMessageRepliesQuery success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling postMessagingIntegrationMessageRepliesQuery');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **integrationId** | **String** | Integration ID |  |
 **messageId** | **String** | Message ID |  |
 **pageNumber** | **Number** | Page number | [optional] [default to 1] |
 **pageSize** | **Number** | Page size | [optional] [default to 25] |
{: class="table table-striped"}

### Return type

**MessagingTask**

<a name="postMessagingIntegrationMessages"></a>

# MessageResponse postMessagingIntegrationMessages(integrationId, body)

<span style="background-color: #f0ad4e;display: inline-block;padding: 7px;font-weight: bold;line-height: 1;color: #ffffff;text-align: center;white-space: nowrap;vertical-align: baseline;border-radius: .25em;margin: 10px 0;">DEPRECATED</span>

POST /api/v2/messaging/integrations/{integrationId}/messages

Send message

Requires ALL permissions:

* messaging:message:send

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
let body = {}; // Object | Message

apiInstance.postMessagingIntegrationMessages(integrationId, body)
  .then((data) => {
    console.log(`postMessagingIntegrationMessages success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling postMessagingIntegrationMessages');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **integrationId** | **String** | Integration ID |  |
 **body** | **Object** | Message |  |
{: class="table table-striped"}

### Return type

**MessageResponse**

<a name="postMessagingIntegrationsFacebook"></a>

# PlatformFacebookIntegration postMessagingIntegrationsFacebook(body)

<span style="background-color: #f0ad4e;display: inline-block;padding: 7px;font-weight: bold;line-height: 1;color: #ffffff;text-align: center;white-space: nowrap;vertical-align: baseline;border-radius: .25em;margin: 10px 0;">DEPRECATED</span>

POST /api/v2/messaging/integrations/facebook

Create a Facebook Integration

Requires ALL permissions:

* messaging:facebookIntegration:add

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.MessagingApi();

let body = {}; // Object | PlatformFacebookIntegrationRequest

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
 **body** | **Object** | PlatformFacebookIntegrationRequest |  |
{: class="table table-striped"}

### Return type

**PlatformFacebookIntegration**

<a name="postMessagingIntegrationsLine"></a>

# PlatformLineIntegration postMessagingIntegrationsLine(body)

<span style="background-color: #f0ad4e;display: inline-block;padding: 7px;font-weight: bold;line-height: 1;color: #ffffff;text-align: center;white-space: nowrap;vertical-align: baseline;border-radius: .25em;margin: 10px 0;">DEPRECATED</span>

POST /api/v2/messaging/integrations/line

Create a LINE messenger Integration

Requires ALL permissions:

* messaging:lineIntegration:add

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.MessagingApi();

let body = {}; // Object | PlatformLineIntegrationRequest

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
 **body** | **Object** | PlatformLineIntegrationRequest |  |
{: class="table table-striped"}

### Return type

**PlatformLineIntegration**

<a name="postMessagingIntegrationsOpen"></a>

# PlatformOpenIntegration postMessagingIntegrationsOpen(body)

<span style="background-color: #f0ad4e;display: inline-block;padding: 7px;font-weight: bold;line-height: 1;color: #ffffff;text-align: center;white-space: nowrap;vertical-align: baseline;border-radius: .25em;margin: 10px 0;">DEPRECATED</span>

POST /api/v2/messaging/integrations/open

Create an Open messenger Integration

Requires ALL permissions:

* messaging:openIntegration:add

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.MessagingApi();

let body = {}; // Object | PlatformOpenIntegrationRequest

apiInstance.postMessagingIntegrationsOpen(body)
  .then((data) => {
    console.log(`postMessagingIntegrationsOpen success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling postMessagingIntegrationsOpen');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **body** | **Object** | PlatformOpenIntegrationRequest |  |
{: class="table table-striped"}

### Return type

**PlatformOpenIntegration**

<a name="postMessagingIntegrationsTwitter"></a>

# PlatformTwitterIntegration postMessagingIntegrationsTwitter(body)

<span style="background-color: #f0ad4e;display: inline-block;padding: 7px;font-weight: bold;line-height: 1;color: #ffffff;text-align: center;white-space: nowrap;vertical-align: baseline;border-radius: .25em;margin: 10px 0;">DEPRECATED</span>

POST /api/v2/messaging/integrations/twitter

Create a Twitter Integration

Requires ALL permissions:

* messaging:twitterIntegration:add

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.MessagingApi();

let body = {}; // Object | PlatformTwitterIntegrationRequest

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
 **body** | **Object** | PlatformTwitterIntegrationRequest |  |
{: class="table table-striped"}

### Return type

**PlatformTwitterIntegration**

<a name="postMessagingIntegrationsUploads"></a>

# UploadUrlResponse postMessagingIntegrationsUploads(body)

<span style="background-color: #f0ad4e;display: inline-block;padding: 7px;font-weight: bold;line-height: 1;color: #ffffff;text-align: center;white-space: nowrap;vertical-align: baseline;border-radius: .25em;margin: 10px 0;">DEPRECATED</span>

POST /api/v2/messaging/integrations/uploads

Creates presigned url for uploading messaging attachment

Requires ALL permissions:

* messaging:message:send

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.MessagingApi();

let body = {}; // Object | query

apiInstance.postMessagingIntegrationsUploads(body)
  .then((data) => {
    console.log(`postMessagingIntegrationsUploads success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling postMessagingIntegrationsUploads');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **body** | **Object** | query |  |
{: class="table table-striped"}

### Return type

**UploadUrlResponse**

<a name="postMessagingIntegrationsWhatsapp"></a>

# PlatformWhatsAppIntegration postMessagingIntegrationsWhatsapp(body)

<span style="background-color: #f0ad4e;display: inline-block;padding: 7px;font-weight: bold;line-height: 1;color: #ffffff;text-align: center;white-space: nowrap;vertical-align: baseline;border-radius: .25em;margin: 10px 0;">DEPRECATED</span>

POST /api/v2/messaging/integrations/whatsapp

Create a WhatsApp Integration

Requires ALL permissions:

* messaging:whatsAppIntegration:add

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.MessagingApi();

let body = {}; // Object | PlatformWhatsAppIntegrationRequest

apiInstance.postMessagingIntegrationsWhatsapp(body)
  .then((data) => {
    console.log(`postMessagingIntegrationsWhatsapp success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling postMessagingIntegrationsWhatsapp');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **body** | **Object** | PlatformWhatsAppIntegrationRequest |  |
{: class="table table-striped"}

### Return type

**PlatformWhatsAppIntegration**

<a name="postMessagingMessagesInboundOpen"></a>

# OpenNormalizedMessage postMessagingMessagesInboundOpen(body)

<span style="background-color: #f0ad4e;display: inline-block;padding: 7px;font-weight: bold;line-height: 1;color: #ffffff;text-align: center;white-space: nowrap;vertical-align: baseline;border-radius: .25em;margin: 10px 0;">DEPRECATED</span>

POST /api/v2/messaging/messages/inbound/open

Send an inbound Open Message

Send an inbound message. See https://developer.genesys.cloud/api/digital/openmessaging/ for example usage.

Requires ALL permissions:

* messaging:message:receive

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.MessagingApi();

let body = {}; // Object | NormalizedMessage

apiInstance.postMessagingMessagesInboundOpen(body)
  .then((data) => {
    console.log(`postMessagingMessagesInboundOpen success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling postMessagingMessagesInboundOpen');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **body** | **Object** | NormalizedMessage |  |
{: class="table table-striped"}

### Return type

**OpenNormalizedMessage**

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

<a name="postMessagingSms"></a>

# SendMessageResponse postMessagingSms(opts)


POST /api/v2/messaging/sms

Send an SMS message

Requires ALL permissions:

* messaging:sms:send

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
  'body': {} // Object | 
};

apiInstance.postMessagingSms(opts)
  .then((data) => {
    console.log(`postMessagingSms success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling postMessagingSms');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **body** | **Object** |  | [optional]  |
{: class="table table-striped"}

### Return type

**SendMessageResponse**

<a name="postMessagingSmsBulk"></a>

# [SendMessagesResponse] postMessagingSmsBulk(opts)


POST /api/v2/messaging/sms/bulk

Send SMS messages

Requires ALL permissions:

* messaging:sms:send

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
  'body': [{}] // Object | 
};

apiInstance.postMessagingSmsBulk(opts)
  .then((data) => {
    console.log(`postMessagingSmsBulk success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling postMessagingSmsBulk');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **body** | **Object** |  | [optional]  |
{: class="table table-striped"}

### Return type

**[SendMessagesResponse]**

<a name="postMessagingSmsProvisioningLongcodes"></a>

# LongcodeOrder postMessagingSmsProvisioningLongcodes(opts)


POST /api/v2/messaging/sms/provisioning/longcodes

Provision new Longcode(s). Use orderId returned by this method to check status.

Requires ALL permissions:

* messagingProvisioning:phoneNumber:add

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
  'body': [{}] // Object | 
};

apiInstance.postMessagingSmsProvisioningLongcodes(opts)
  .then((data) => {
    console.log(`postMessagingSmsProvisioningLongcodes success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling postMessagingSmsProvisioningLongcodes');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **body** | **Object** |  | [optional]  |
{: class="table table-striped"}

### Return type

**LongcodeOrder**

<a name="postMessagingSmsProvisioningLongcodesPortin"></a>

# LongcodeOrder postMessagingSmsProvisioningLongcodesPortin(opts)


POST /api/v2/messaging/sms/provisioning/longcodes/portin

Port in Longcode(s). Use orderId returned by this method to check status.

Requires ALL permissions:

* messagingProvisioning:phoneNumber:add

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
  'body': [{}] // Object | 
};

apiInstance.postMessagingSmsProvisioningLongcodesPortin(opts)
  .then((data) => {
    console.log(`postMessagingSmsProvisioningLongcodesPortin success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling postMessagingSmsProvisioningLongcodesPortin');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **body** | **Object** |  | [optional]  |
{: class="table table-striped"}

### Return type

**LongcodeOrder**

<a name="postMessagingSmsProvisioningSimulated"></a>

# SenderOrder postMessagingSmsProvisioningSimulated(opts)


POST /api/v2/messaging/sms/provisioning/simulated

Provision Simulated Number(s). Use orderId returned by this method to check status.

Requires ALL permissions:

* messagingProvisioning:phoneNumber:add

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
  'body': [{}] // Object | 
};

apiInstance.postMessagingSmsProvisioningSimulated(opts)
  .then((data) => {
    console.log(`postMessagingSmsProvisioningSimulated success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling postMessagingSmsProvisioningSimulated');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **body** | **Object** |  | [optional]  |
{: class="table table-striped"}

### Return type

**SenderOrder**

<a name="postMessagingSmsProvisioningTollfreenumbers"></a>

# TollfreeNumberOrder postMessagingSmsProvisioningTollfreenumbers(opts)


POST /api/v2/messaging/sms/provisioning/tollfreenumbers

Provision Tollfree Number(s). Use orderId returned by this method to check status.

Requires ALL permissions:

* messagingProvisioning:phoneNumber:add

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
  'body': [{}] // Object | 
};

apiInstance.postMessagingSmsProvisioningTollfreenumbers(opts)
  .then((data) => {
    console.log(`postMessagingSmsProvisioningTollfreenumbers success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling postMessagingSmsProvisioningTollfreenumbers');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **body** | **Object** |  | [optional]  |
{: class="table table-striped"}

### Return type

**TollfreeNumberOrder**

<a name="postMessagingSmsProvisioningTollfreenumbersPortin"></a>

# TollfreeNumberOrder postMessagingSmsProvisioningTollfreenumbersPortin(opts)


POST /api/v2/messaging/sms/provisioning/tollfreenumbers/portin

Port in Tollfree Number(s). Use orderId returned by this method to check status.

Requires ALL permissions:

* messagingProvisioning:phoneNumber:add

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
  'body': [{}] // Object | 
};

apiInstance.postMessagingSmsProvisioningTollfreenumbersPortin(opts)
  .then((data) => {
    console.log(`postMessagingSmsProvisioningTollfreenumbersPortin success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling postMessagingSmsProvisioningTollfreenumbersPortin');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **body** | **Object** |  | [optional]  |
{: class="table table-striped"}

### Return type

**TollfreeNumberOrder**

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

