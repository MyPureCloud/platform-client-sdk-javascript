---
title: IntegrationsApi
---
# platformClient.IntegrationsApi

All URIs are relative to *https://api.inindca.com*

| Method | HTTP request | Description |
| ------------- | ------------- | ------------- |
[**deleteIntegration**](IntegrationsApi.html#deleteIntegration) | **DELETE** /api/v2/integrations/{integrationId} | Delete integration.
[**deleteIntegrationsAction**](IntegrationsApi.html#deleteIntegrationsAction) | **DELETE** /api/v2/integrations/actions/{actionId} | Delete an Action
[**deleteIntegrationsActionDraft**](IntegrationsApi.html#deleteIntegrationsActionDraft) | **DELETE** /api/v2/integrations/actions/{actionId}/draft | Delete a Draft
[**deleteIntegrationsCredential**](IntegrationsApi.html#deleteIntegrationsCredential) | **DELETE** /api/v2/integrations/credentials/{credentialId} | Delete a set of credentials
[**deleteIntegrationsMicrosoftteamsAuth**](IntegrationsApi.html#deleteIntegrationsMicrosoftteamsAuth) | **DELETE** /api/v2/integrations/microsoftteams/auth | Invalidate the Microsoft Teams integration auth for the user.
[**deleteIntegrationsSalesforceServicecloudvoiceLogout**](IntegrationsApi.html#deleteIntegrationsSalesforceServicecloudvoiceLogout) | **DELETE** /api/v2/integrations/salesforce/servicecloudvoice/logout | Logout
[**deleteIntegrationsUnifiedcommunicationAuth**](IntegrationsApi.html#deleteIntegrationsUnifiedcommunicationAuth) | **DELETE** /api/v2/integrations/unifiedcommunications/{ucIntegrationId}/auth | Invalidates a 3rd-party integration auth for the user.
[**deleteIntegrationsWebhook**](IntegrationsApi.html#deleteIntegrationsWebhook) | **DELETE** /api/v2/integrations/webhooks/{webhookId} | Delete a Webhook
[**deleteIntegrationsWebhookSchema**](IntegrationsApi.html#deleteIntegrationsWebhookSchema) | **DELETE** /api/v2/integrations/webhooks/{webhookId}/schema | Delete a Webhook Schema
[**deleteIntegrationsZoomAuth**](IntegrationsApi.html#deleteIntegrationsZoomAuth) | **DELETE** /api/v2/integrations/zoom/auth | Invalidate the Zoom integration auth for the user.
[**getIntegration**](IntegrationsApi.html#getIntegration) | **GET** /api/v2/integrations/{integrationId} | Get integration.
[**getIntegrationConfigCurrent**](IntegrationsApi.html#getIntegrationConfigCurrent) | **GET** /api/v2/integrations/{integrationId}/config/current | Get integration configuration.
[**getIntegrations**](IntegrationsApi.html#getIntegrations) | **GET** /api/v2/integrations | List integrations
[**getIntegrationsAction**](IntegrationsApi.html#getIntegrationsAction) | **GET** /api/v2/integrations/actions/{actionId} | Retrieves a single Action matching id.
[**getIntegrationsActionDraft**](IntegrationsApi.html#getIntegrationsActionDraft) | **GET** /api/v2/integrations/actions/{actionId}/draft | Retrieve a Draft
[**getIntegrationsActionDraftSchema**](IntegrationsApi.html#getIntegrationsActionDraftSchema) | **GET** /api/v2/integrations/actions/{actionId}/draft/schemas/{fileName} | Retrieve schema for a Draft based on filename.
[**getIntegrationsActionDraftTemplate**](IntegrationsApi.html#getIntegrationsActionDraftTemplate) | **GET** /api/v2/integrations/actions/{actionId}/draft/templates/{fileName} | Retrieve templates for a Draft based on filename.
[**getIntegrationsActionDraftValidation**](IntegrationsApi.html#getIntegrationsActionDraftValidation) | **GET** /api/v2/integrations/actions/{actionId}/draft/validation | Validate current Draft configuration.
[**getIntegrationsActionSchema**](IntegrationsApi.html#getIntegrationsActionSchema) | **GET** /api/v2/integrations/actions/{actionId}/schemas/{fileName} | Retrieve schema for an action based on filename.
[**getIntegrationsActionTemplate**](IntegrationsApi.html#getIntegrationsActionTemplate) | **GET** /api/v2/integrations/actions/{actionId}/templates/{fileName} | Retrieve text of templates for an action based on filename.
[**getIntegrationsActions**](IntegrationsApi.html#getIntegrationsActions) | **GET** /api/v2/integrations/actions | Retrieves all actions associated with filters passed in via query param.
[**getIntegrationsActionsCategories**](IntegrationsApi.html#getIntegrationsActionsCategories) | **GET** /api/v2/integrations/actions/categories | Retrieves all categories of available Actions
[**getIntegrationsActionsDrafts**](IntegrationsApi.html#getIntegrationsActionsDrafts) | **GET** /api/v2/integrations/actions/drafts | Retrieves all action drafts associated with the filters passed in via query param.
[**getIntegrationsActionsSchemaFileName**](IntegrationsApi.html#getIntegrationsActionsSchemaFileName) | **GET** /api/v2/integrations/actions/schemas/{providerName}/{fileName} | Retrieves the schema.
[**getIntegrationsBotconnectorIntegrationIdBot**](IntegrationsApi.html#getIntegrationsBotconnectorIntegrationIdBot) | **GET** /api/v2/integrations/botconnector/{integrationId}/bots/{botId} | Get a specific botConnector bot, plus versions, for this integration
[**getIntegrationsBotconnectorIntegrationIdBotVersions**](IntegrationsApi.html#getIntegrationsBotconnectorIntegrationIdBotVersions) | **GET** /api/v2/integrations/botconnector/{integrationId}/bots/{botId}/versions | Get a list of bot versions for a bot
[**getIntegrationsBotconnectorIntegrationIdBots**](IntegrationsApi.html#getIntegrationsBotconnectorIntegrationIdBots) | **GET** /api/v2/integrations/botconnector/{integrationId}/bots | Get a list of botConnector bots for this integration
[**getIntegrationsBotconnectorIntegrationIdBotsSummaries**](IntegrationsApi.html#getIntegrationsBotconnectorIntegrationIdBotsSummaries) | **GET** /api/v2/integrations/botconnector/{integrationId}/bots/summaries | Get a summary list of botConnector bots for this integration
[**getIntegrationsClientapps**](IntegrationsApi.html#getIntegrationsClientapps) | **GET** /api/v2/integrations/clientapps | List permitted client app integrations for the logged in user
[**getIntegrationsClientappsUnifiedcommunications**](IntegrationsApi.html#getIntegrationsClientappsUnifiedcommunications) | **GET** /api/v2/integrations/clientapps/unifiedcommunications | UC integration client application configuration.
[**getIntegrationsCredential**](IntegrationsApi.html#getIntegrationsCredential) | **GET** /api/v2/integrations/credentials/{credentialId} | Get a single credential with sensitive fields redacted
[**getIntegrationsCredentials**](IntegrationsApi.html#getIntegrationsCredentials) | **GET** /api/v2/integrations/credentials | List multiple sets of credentials
[**getIntegrationsCredentialsTypes**](IntegrationsApi.html#getIntegrationsCredentialsTypes) | **GET** /api/v2/integrations/credentials/types | List all credential types
[**getIntegrationsMicrosoftteamsAuth**](IntegrationsApi.html#getIntegrationsMicrosoftteamsAuth) | **GET** /api/v2/integrations/microsoftteams/auth | Gets a Microsoft Teams integration auth for the user.
[**getIntegrationsSalesforceServicecloudvoiceVoicecallrecordJob**](IntegrationsApi.html#getIntegrationsSalesforceServicecloudvoiceVoicecallrecordJob) | **GET** /api/v2/integrations/salesforce/servicecloudvoice/voicecallrecord/jobs/{jobId} | Get a voice call record by job id
[**getIntegrationsSpeechDialogflowAgent**](IntegrationsApi.html#getIntegrationsSpeechDialogflowAgent) | **GET** /api/v2/integrations/speech/dialogflow/agents/{agentId} | Get details about a Dialogflow agent
[**getIntegrationsSpeechDialogflowAgents**](IntegrationsApi.html#getIntegrationsSpeechDialogflowAgents) | **GET** /api/v2/integrations/speech/dialogflow/agents | Get a list of Dialogflow agents in the customers' Google accounts
[**getIntegrationsSpeechDialogflowcxAgent**](IntegrationsApi.html#getIntegrationsSpeechDialogflowcxAgent) | **GET** /api/v2/integrations/speech/dialogflowcx/agents/{agentId} | Get details about a Dialogflow CX agent
[**getIntegrationsSpeechDialogflowcxAgents**](IntegrationsApi.html#getIntegrationsSpeechDialogflowcxAgents) | **GET** /api/v2/integrations/speech/dialogflowcx/agents | Get a list of Dialogflow CX agents in the customers' Google accounts
[**getIntegrationsSpeechLexBotAlias**](IntegrationsApi.html#getIntegrationsSpeechLexBotAlias) | **GET** /api/v2/integrations/speech/lex/bot/alias/{aliasId} | Get details about a Lex bot alias
[**getIntegrationsSpeechLexBotBotIdAliases**](IntegrationsApi.html#getIntegrationsSpeechLexBotBotIdAliases) | **GET** /api/v2/integrations/speech/lex/bot/{botId}/aliases | Get a list of aliases for a bot in the customer's AWS accounts
[**getIntegrationsSpeechLexBots**](IntegrationsApi.html#getIntegrationsSpeechLexBots) | **GET** /api/v2/integrations/speech/lex/bots | Get a list of Lex bots in the customers' AWS accounts
[**getIntegrationsSpeechLexv2BotAlias**](IntegrationsApi.html#getIntegrationsSpeechLexv2BotAlias) | **GET** /api/v2/integrations/speech/lexv2/bot/alias/{aliasId} | Get details about a Lex V2 bot alias
[**getIntegrationsSpeechLexv2BotBotIdAliases**](IntegrationsApi.html#getIntegrationsSpeechLexv2BotBotIdAliases) | **GET** /api/v2/integrations/speech/lexv2/bot/{botId}/aliases | Get a list of aliases for a Lex V2 bot
[**getIntegrationsSpeechLexv2Bots**](IntegrationsApi.html#getIntegrationsSpeechLexv2Bots) | **GET** /api/v2/integrations/speech/lexv2/bots | Get a list of Lex V2 bots
[**getIntegrationsSpeechNuanceNuanceIntegrationIdBot**](IntegrationsApi.html#getIntegrationsSpeechNuanceNuanceIntegrationIdBot) | **GET** /api/v2/integrations/speech/nuance/{nuanceIntegrationId}/bots/{botId} | Get a Nuance bot in the specified Integration
[**getIntegrationsSpeechNuanceNuanceIntegrationIdBotJob**](IntegrationsApi.html#getIntegrationsSpeechNuanceNuanceIntegrationIdBotJob) | **GET** /api/v2/integrations/speech/nuance/{nuanceIntegrationId}/bots/{botId}/jobs/{jobId} | Get the status of an asynchronous Nuance bot GET job
[**getIntegrationsSpeechNuanceNuanceIntegrationIdBotJobResults**](IntegrationsApi.html#getIntegrationsSpeechNuanceNuanceIntegrationIdBotJobResults) | **GET** /api/v2/integrations/speech/nuance/{nuanceIntegrationId}/bots/{botId}/jobs/{jobId}/results | Get the result of an asynchronous Nuance bot GET job
[**getIntegrationsSpeechNuanceNuanceIntegrationIdBots**](IntegrationsApi.html#getIntegrationsSpeechNuanceNuanceIntegrationIdBots) | **GET** /api/v2/integrations/speech/nuance/{nuanceIntegrationId}/bots | Get a list of Nuance bots available in the specified Integration
[**getIntegrationsSpeechNuanceNuanceIntegrationIdBotsJob**](IntegrationsApi.html#getIntegrationsSpeechNuanceNuanceIntegrationIdBotsJob) | **GET** /api/v2/integrations/speech/nuance/{nuanceIntegrationId}/bots/jobs/{jobId} | Get the status of an asynchronous Nuance bots GET job
[**getIntegrationsSpeechNuanceNuanceIntegrationIdBotsJobResults**](IntegrationsApi.html#getIntegrationsSpeechNuanceNuanceIntegrationIdBotsJobResults) | **GET** /api/v2/integrations/speech/nuance/{nuanceIntegrationId}/bots/jobs/{jobId}/results | Get the result of an asynchronous Nuance bots GET job
[**getIntegrationsSpeechSttEngine**](IntegrationsApi.html#getIntegrationsSpeechSttEngine) | **GET** /api/v2/integrations/speech/stt/engines/{engineId} | Get details about a STT engine
[**getIntegrationsSpeechSttEngines**](IntegrationsApi.html#getIntegrationsSpeechSttEngines) | **GET** /api/v2/integrations/speech/stt/engines | Get a list of STT engines enabled for org
[**getIntegrationsSpeechTtsEngine**](IntegrationsApi.html#getIntegrationsSpeechTtsEngine) | **GET** /api/v2/integrations/speech/tts/engines/{engineId} | Get details about a TTS engine
[**getIntegrationsSpeechTtsEngineVoice**](IntegrationsApi.html#getIntegrationsSpeechTtsEngineVoice) | **GET** /api/v2/integrations/speech/tts/engines/{engineId}/voices/{voiceId} | Get details about a specific voice for a TTS engine
[**getIntegrationsSpeechTtsEngineVoices**](IntegrationsApi.html#getIntegrationsSpeechTtsEngineVoices) | **GET** /api/v2/integrations/speech/tts/engines/{engineId}/voices | Get a list of voices for a TTS engine
[**getIntegrationsSpeechTtsEngines**](IntegrationsApi.html#getIntegrationsSpeechTtsEngines) | **GET** /api/v2/integrations/speech/tts/engines | Get a list of TTS engines enabled for org
[**getIntegrationsSpeechTtsSettings**](IntegrationsApi.html#getIntegrationsSpeechTtsSettings) | **GET** /api/v2/integrations/speech/tts/settings | Get TTS settings for an org
[**getIntegrationsType**](IntegrationsApi.html#getIntegrationsType) | **GET** /api/v2/integrations/types/{typeId} | Get integration type.
[**getIntegrationsTypeConfigschema**](IntegrationsApi.html#getIntegrationsTypeConfigschema) | **GET** /api/v2/integrations/types/{typeId}/configschemas/{configType} | Get properties config schema for an integration type.
[**getIntegrationsTypes**](IntegrationsApi.html#getIntegrationsTypes) | **GET** /api/v2/integrations/types | List integration types
[**getIntegrationsUnifiedcommunicationAuth**](IntegrationsApi.html#getIntegrationsUnifiedcommunicationAuth) | **GET** /api/v2/integrations/unifiedcommunications/{ucIntegrationId}/auth | Gets a 3rd-party integration auth for the user.
[**getIntegrationsUnifiedcommunicationMeeting**](IntegrationsApi.html#getIntegrationsUnifiedcommunicationMeeting) | **GET** /api/v2/integrations/unifiedcommunications/{ucIntegrationId}/meetings/{meetingId} | Get a meeting.
[**getIntegrationsUnifiedcommunicationMeetings**](IntegrationsApi.html#getIntegrationsUnifiedcommunicationMeetings) | **GET** /api/v2/integrations/unifiedcommunications/{ucIntegrationId}/meetings | List meetings
[**getIntegrationsUnifiedcommunicationPresences**](IntegrationsApi.html#getIntegrationsUnifiedcommunicationPresences) | **GET** /api/v2/integrations/unifiedcommunications/{ucIntegrationId}/presences | Get bulk user presences for an integration source
[**getIntegrationsUnifiedcommunicationsClientapp**](IntegrationsApi.html#getIntegrationsUnifiedcommunicationsClientapp) | **GET** /api/v2/integrations/unifiedcommunications/clientapps/{ucIntegrationId} | UC integration client application configuration.
[**getIntegrationsUnifiedcommunicationsClientapps**](IntegrationsApi.html#getIntegrationsUnifiedcommunicationsClientapps) | **GET** /api/v2/integrations/unifiedcommunications/clientapps | List UC integration client application configurations.
[**getIntegrationsUserapps**](IntegrationsApi.html#getIntegrationsUserapps) | **GET** /api/v2/integrations/userapps | List permitted user app integrations for the logged in user
[**getIntegrationsWebhook**](IntegrationsApi.html#getIntegrationsWebhook) | **GET** /api/v2/integrations/webhooks/{webhookId} | Get a Webhook
[**getIntegrationsWebhookSchema**](IntegrationsApi.html#getIntegrationsWebhookSchema) | **GET** /api/v2/integrations/webhooks/{webhookId}/schema | Get Webhook Schema from a Webhook
[**getIntegrationsWebhooks**](IntegrationsApi.html#getIntegrationsWebhooks) | **GET** /api/v2/integrations/webhooks | List Webhooks
[**getIntegrationsZoom202004Meeting**](IntegrationsApi.html#getIntegrationsZoom202004Meeting) | **GET** /api/v2/integrations/zoom/202004/meetings/{meetingId} | Get a Zoom meeting.
[**getIntegrationsZoom202004User**](IntegrationsApi.html#getIntegrationsZoom202004User) | **GET** /api/v2/integrations/zoom/202004/users/{userId} | Get a Zoom user.
[**getIntegrationsZoom202004UserMeetings**](IntegrationsApi.html#getIntegrationsZoom202004UserMeetings) | **GET** /api/v2/integrations/zoom/202004/users/{userId}/meetings | Get meetings for a Zoom user.
[**getIntegrationsZoom202004UserSettings**](IntegrationsApi.html#getIntegrationsZoom202004UserSettings) | **GET** /api/v2/integrations/zoom/202004/users/{userId}/settings | Get settings for a Zoom user.
[**getIntegrationsZoomAuth**](IntegrationsApi.html#getIntegrationsZoomAuth) | **GET** /api/v2/integrations/zoom/auth | Gets a Zoom integration auth for the user.
[**patchIntegration**](IntegrationsApi.html#patchIntegration) | **PATCH** /api/v2/integrations/{integrationId} | Update an integration.
[**patchIntegrationsAction**](IntegrationsApi.html#patchIntegrationsAction) | **PATCH** /api/v2/integrations/actions/{actionId} | Patch an Action
[**patchIntegrationsActionDraft**](IntegrationsApi.html#patchIntegrationsActionDraft) | **PATCH** /api/v2/integrations/actions/{actionId}/draft | Update an existing Draft
[**patchIntegrationsWebhook**](IntegrationsApi.html#patchIntegrationsWebhook) | **PATCH** /api/v2/integrations/webhooks/{webhookId} | Update a Webhook
[**postIntegrations**](IntegrationsApi.html#postIntegrations) | **POST** /api/v2/integrations | Create an integration.
[**postIntegrationsActionDraft**](IntegrationsApi.html#postIntegrationsActionDraft) | **POST** /api/v2/integrations/actions/{actionId}/draft | Create a new Draft from existing Action
[**postIntegrationsActionDraftPublish**](IntegrationsApi.html#postIntegrationsActionDraftPublish) | **POST** /api/v2/integrations/actions/{actionId}/draft/publish | Publish a Draft and make it the active Action configuration
[**postIntegrationsActionDraftTest**](IntegrationsApi.html#postIntegrationsActionDraftTest) | **POST** /api/v2/integrations/actions/{actionId}/draft/test | Test the execution of a draft. Responses will show execution steps broken out with intermediate results to help in debugging.
[**postIntegrationsActionExecute**](IntegrationsApi.html#postIntegrationsActionExecute) | **POST** /api/v2/integrations/actions/{actionId}/execute | Execute Action and return response from 3rd party.  Responses will follow the schemas defined on the Action for success and error.
[**postIntegrationsActionTest**](IntegrationsApi.html#postIntegrationsActionTest) | **POST** /api/v2/integrations/actions/{actionId}/test | Test the execution of an action. Responses will show execution steps broken out with intermediate results to help in debugging.
[**postIntegrationsActions**](IntegrationsApi.html#postIntegrationsActions) | **POST** /api/v2/integrations/actions | Create a new Action
[**postIntegrationsActionsDrafts**](IntegrationsApi.html#postIntegrationsActionsDrafts) | **POST** /api/v2/integrations/actions/drafts | Create a new Draft
[**postIntegrationsCredentials**](IntegrationsApi.html#postIntegrationsCredentials) | **POST** /api/v2/integrations/credentials | Create a set of credentials
[**postIntegrationsMicrosoftteamsAuth**](IntegrationsApi.html#postIntegrationsMicrosoftteamsAuth) | **POST** /api/v2/integrations/microsoftteams/auth | Create a Microsoft Teams integration auth for the user.
[**postIntegrationsSalesforceServicecloudvoiceLogin**](IntegrationsApi.html#postIntegrationsSalesforceServicecloudvoiceLogin) | **POST** /api/v2/integrations/salesforce/servicecloudvoice/login | Login
[**postIntegrationsSalesforceServicecloudvoiceVoicecallrecord**](IntegrationsApi.html#postIntegrationsSalesforceServicecloudvoiceVoicecallrecord) | **POST** /api/v2/integrations/salesforce/servicecloudvoice/voicecallrecord | Create a voice call record in Salesforce
[**postIntegrationsSalesforceServicecloudvoiceVoicecallrecordUpdate**](IntegrationsApi.html#postIntegrationsSalesforceServicecloudvoiceVoicecallrecordUpdate) | **POST** /api/v2/integrations/salesforce/servicecloudvoice/voicecallrecord/update | Update a voice call record in Salesforce
[**postIntegrationsSpeechNuanceNuanceIntegrationIdBotJobs**](IntegrationsApi.html#postIntegrationsSpeechNuanceNuanceIntegrationIdBotJobs) | **POST** /api/v2/integrations/speech/nuance/{nuanceIntegrationId}/bots/{botId}/jobs | Get a Nuance bot in the specified Integration asynchronously
[**postIntegrationsSpeechNuanceNuanceIntegrationIdBotsJobs**](IntegrationsApi.html#postIntegrationsSpeechNuanceNuanceIntegrationIdBotsJobs) | **POST** /api/v2/integrations/speech/nuance/{nuanceIntegrationId}/bots/jobs | Get a list of Nuance bots in the specified Integration asynchronously
[**postIntegrationsSpeechNuanceNuanceIntegrationIdBotsLaunchValidate**](IntegrationsApi.html#postIntegrationsSpeechNuanceNuanceIntegrationIdBotsLaunchValidate) | **POST** /api/v2/integrations/speech/nuance/{nuanceIntegrationId}/bots/launch/validate | Try out a single credential for a Nuance bot to know if the secret is correct
[**postIntegrationsUnifiedcommunicationAuth**](IntegrationsApi.html#postIntegrationsUnifiedcommunicationAuth) | **POST** /api/v2/integrations/unifiedcommunications/{ucIntegrationId}/auth | Creates a 3rd-party integration auth for the user.
[**postIntegrationsUnifiedcommunicationMeetings**](IntegrationsApi.html#postIntegrationsUnifiedcommunicationMeetings) | **POST** /api/v2/integrations/unifiedcommunications/{ucIntegrationId}/meetings | Create a meeting.
[**postIntegrationsUnifiedcommunicationsEmail**](IntegrationsApi.html#postIntegrationsUnifiedcommunicationsEmail) | **POST** /api/v2/integrations/unifiedcommunications/email | Send an email.
[**postIntegrationsWebhookEvents**](IntegrationsApi.html#postIntegrationsWebhookEvents) | **POST** /api/v2/integrations/webhooks/{tokenId}/events | Invoke Webhook
[**postIntegrationsWebhooks**](IntegrationsApi.html#postIntegrationsWebhooks) | **POST** /api/v2/integrations/webhooks | Create Webhook
[**postIntegrationsZoom202004MeetingSignature**](IntegrationsApi.html#postIntegrationsZoom202004MeetingSignature) | **POST** /api/v2/integrations/zoom/202004/meetings/{meetingId}/signature | Generate a Zoom meeting signature.
[**postIntegrationsZoom202004UserMeetings**](IntegrationsApi.html#postIntegrationsZoom202004UserMeetings) | **POST** /api/v2/integrations/zoom/202004/users/{userId}/meetings | Create meeting for a Zoom user.
[**postIntegrationsZoomAuth**](IntegrationsApi.html#postIntegrationsZoomAuth) | **POST** /api/v2/integrations/zoom/auth | Create a Zoom integration auth for the user.
[**putIntegrationConfigCurrent**](IntegrationsApi.html#putIntegrationConfigCurrent) | **PUT** /api/v2/integrations/{integrationId}/config/current | Update integration configuration.
[**putIntegrationsBotconnectorIntegrationIdBots**](IntegrationsApi.html#putIntegrationsBotconnectorIntegrationIdBots) | **PUT** /api/v2/integrations/botconnector/{integrationId}/bots | Set a list of botConnector bots plus versions for this integration
[**putIntegrationsCredential**](IntegrationsApi.html#putIntegrationsCredential) | **PUT** /api/v2/integrations/credentials/{credentialId} | Update a set of credentials
[**putIntegrationsSpeechNuanceNuanceIntegrationIdBotsLaunchSettings**](IntegrationsApi.html#putIntegrationsSpeechNuanceNuanceIntegrationIdBotsLaunchSettings) | **PUT** /api/v2/integrations/speech/nuance/{nuanceIntegrationId}/bots/launch/settings | Update the Nuance bot list for the specific bots made available to Genesys Cloud in the specified Integration
[**putIntegrationsSpeechTtsSettings**](IntegrationsApi.html#putIntegrationsSpeechTtsSettings) | **PUT** /api/v2/integrations/speech/tts/settings | Update TTS settings for an org
[**putIntegrationsUnifiedcommunicationThirdpartypresences**](IntegrationsApi.html#putIntegrationsUnifiedcommunicationThirdpartypresences) | **PUT** /api/v2/integrations/unifiedcommunications/{ucIntegrationId}/thirdpartypresences | Bulk integration presence ingestion
[**putIntegrationsWebhookSchema**](IntegrationsApi.html#putIntegrationsWebhookSchema) | **PUT** /api/v2/integrations/webhooks/{webhookId}/schema | Add/replace Webhook Schema on a Webhook
{: class="table table-striped"}

<a name="deleteIntegration"></a>

# Integration deleteIntegration(integrationId)


DELETE /api/v2/integrations/{integrationId}

Delete integration.

Requires ANY permissions:

* integrations:integration:delete

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.IntegrationsApi();

let integrationId = "integrationId_example"; // String | Integration Id

apiInstance.deleteIntegration(integrationId)
  .then((data) => {
    console.log(`deleteIntegration success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling deleteIntegration');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **integrationId** | **String** | Integration Id |  |
{: class="table table-striped"}

### Return type

**Integration**

<a name="deleteIntegrationsAction"></a>

# void deleteIntegrationsAction(actionId)


DELETE /api/v2/integrations/actions/{actionId}

Delete an Action

Requires ANY permissions:

* integrations:action:delete

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.IntegrationsApi();

let actionId = "actionId_example"; // String | actionId

apiInstance.deleteIntegrationsAction(actionId)
  .then(() => {
    console.log('deleteIntegrationsAction returned successfully.');
  })
  .catch((err) => {
    console.log('There was a failure calling deleteIntegrationsAction');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **actionId** | **String** | actionId |  |
{: class="table table-striped"}

### Return type

void (no response body)

<a name="deleteIntegrationsActionDraft"></a>

# void deleteIntegrationsActionDraft(actionId)


DELETE /api/v2/integrations/actions/{actionId}/draft

Delete a Draft

Requires ANY permissions:

* integrations:action:delete

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.IntegrationsApi();

let actionId = "actionId_example"; // String | actionId

apiInstance.deleteIntegrationsActionDraft(actionId)
  .then(() => {
    console.log('deleteIntegrationsActionDraft returned successfully.');
  })
  .catch((err) => {
    console.log('There was a failure calling deleteIntegrationsActionDraft');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **actionId** | **String** | actionId |  |
{: class="table table-striped"}

### Return type

void (no response body)

<a name="deleteIntegrationsCredential"></a>

# void deleteIntegrationsCredential(credentialId)


DELETE /api/v2/integrations/credentials/{credentialId}

Delete a set of credentials

Requires NO permissions:

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.IntegrationsApi();

let credentialId = "credentialId_example"; // String | Credential ID

apiInstance.deleteIntegrationsCredential(credentialId)
  .then(() => {
    console.log('deleteIntegrationsCredential returned successfully.');
  })
  .catch((err) => {
    console.log('There was a failure calling deleteIntegrationsCredential');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **credentialId** | **String** | Credential ID |  |
{: class="table table-striped"}

### Return type

void (no response body)

<a name="deleteIntegrationsMicrosoftteamsAuth"></a>

# void deleteIntegrationsMicrosoftteamsAuth()


DELETE /api/v2/integrations/microsoftteams/auth

Invalidate the Microsoft Teams integration auth for the user.

For a Genesys Cloud user, they can only be associated with Microsoft Teams auth at a time.  This can be used to clear the session or a new creation can be created, which will supersede the current one.

Requires ANY permissions:

* integration:microsoftTeams:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.IntegrationsApi();

apiInstance.deleteIntegrationsMicrosoftteamsAuth()
  .then(() => {
    console.log('deleteIntegrationsMicrosoftteamsAuth returned successfully.');
  })
  .catch((err) => {
    console.log('There was a failure calling deleteIntegrationsMicrosoftteamsAuth');
    console.error(err);
  });
```

### Parameters

This endpoint does not need any parameter.


### Return type

void (no response body)

<a name="deleteIntegrationsSalesforceServicecloudvoiceLogout"></a>

# **Object** deleteIntegrationsSalesforceServicecloudvoiceLogout()


DELETE /api/v2/integrations/salesforce/servicecloudvoice/logout

Logout

Requires ALL permissions:

* integration:salesforceServiceCloudVoice:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.IntegrationsApi();

apiInstance.deleteIntegrationsSalesforceServicecloudvoiceLogout()
  .then((data) => {
    console.log(`deleteIntegrationsSalesforceServicecloudvoiceLogout success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling deleteIntegrationsSalesforceServicecloudvoiceLogout');
    console.error(err);
  });
```

### Parameters

This endpoint does not need any parameter.


### Return type

**Object**

<a name="deleteIntegrationsUnifiedcommunicationAuth"></a>

# IntegrationAuthResponse deleteIntegrationsUnifiedcommunicationAuth(ucIntegrationId)


DELETE /api/v2/integrations/unifiedcommunications/{ucIntegrationId}/auth

Invalidates a 3rd-party integration auth for the user.

Requires ANY permissions:

* integration:unifiedCommunications:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.IntegrationsApi();

let ucIntegrationId = "ucIntegrationId_example"; // String | UC Integration ID

apiInstance.deleteIntegrationsUnifiedcommunicationAuth(ucIntegrationId)
  .then((data) => {
    console.log(`deleteIntegrationsUnifiedcommunicationAuth success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling deleteIntegrationsUnifiedcommunicationAuth');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **ucIntegrationId** | **String** | UC Integration ID |  |
{: class="table table-striped"}

### Return type

**IntegrationAuthResponse**

<a name="deleteIntegrationsWebhook"></a>

# void deleteIntegrationsWebhook(webhookId)


DELETE /api/v2/integrations/webhooks/{webhookId}

Delete a Webhook

Requires ANY permissions:

* webhooks:webhook:delete

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.IntegrationsApi();

let webhookId = "webhookId_example"; // String | The id of the webhook

apiInstance.deleteIntegrationsWebhook(webhookId)
  .then(() => {
    console.log('deleteIntegrationsWebhook returned successfully.');
  })
  .catch((err) => {
    console.log('There was a failure calling deleteIntegrationsWebhook');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **webhookId** | **String** | The id of the webhook |  |
{: class="table table-striped"}

### Return type

void (no response body)

<a name="deleteIntegrationsWebhookSchema"></a>

# void deleteIntegrationsWebhookSchema(webhookId)


DELETE /api/v2/integrations/webhooks/{webhookId}/schema

Delete a Webhook Schema

Requires ANY permissions:

* webhooks:webhook:edit

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.IntegrationsApi();

let webhookId = "webhookId_example"; // String | The id of the webhook that the schema belongs to

apiInstance.deleteIntegrationsWebhookSchema(webhookId)
  .then(() => {
    console.log('deleteIntegrationsWebhookSchema returned successfully.');
  })
  .catch((err) => {
    console.log('There was a failure calling deleteIntegrationsWebhookSchema');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **webhookId** | **String** | The id of the webhook that the schema belongs to |  |
{: class="table table-striped"}

### Return type

void (no response body)

<a name="deleteIntegrationsZoomAuth"></a>

# void deleteIntegrationsZoomAuth()


DELETE /api/v2/integrations/zoom/auth

Invalidate the Zoom integration auth for the user.

For a Genesys Cloud user, they can only be associated with Zoom auth at a time.  This can be used to clear the session or a new creation can be created, which will supersede the current one.

Requires ANY permissions:

* integration:zoomPhone:view
* integration:zoomMeetings:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.IntegrationsApi();

apiInstance.deleteIntegrationsZoomAuth()
  .then(() => {
    console.log('deleteIntegrationsZoomAuth returned successfully.');
  })
  .catch((err) => {
    console.log('There was a failure calling deleteIntegrationsZoomAuth');
    console.error(err);
  });
```

### Parameters

This endpoint does not need any parameter.


### Return type

void (no response body)

<a name="getIntegration"></a>

# Integration getIntegration(integrationId, opts)


GET /api/v2/integrations/{integrationId}

Get integration.

Requires ANY permissions:

* integrations:integration:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.IntegrationsApi();

let integrationId = "integrationId_example"; // String | Integration Id
let opts = { 
  'pageSize': 25, // Number | The total page size requested
  'pageNumber': 1, // Number | The page number requested
  'sortBy': "sortBy_example", // String | variable name requested to sort by
  'expand': ["expand_example"], // [String] | variable name requested by expand list
  'nextPage': "nextPage_example", // String | next page token
  'previousPage': "previousPage_example" // String | Previous page token
};

apiInstance.getIntegration(integrationId, opts)
  .then((data) => {
    console.log(`getIntegration success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getIntegration');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **integrationId** | **String** | Integration Id |  |
 **pageSize** | **Number** | The total page size requested | [optional] [default to 25] |
 **pageNumber** | **Number** | The page number requested | [optional] [default to 1] |
 **sortBy** | **String** | variable name requested to sort by | [optional]  |
 **expand** | **[String]** | variable name requested by expand list | [optional]  |
 **nextPage** | **String** | next page token | [optional]  |
 **previousPage** | **String** | Previous page token | [optional]  |
{: class="table table-striped"}

### Return type

**Integration**

<a name="getIntegrationConfigCurrent"></a>

# IntegrationConfiguration getIntegrationConfigCurrent(integrationId)


GET /api/v2/integrations/{integrationId}/config/current

Get integration configuration.

Requires ANY permissions:

* integrations:integration:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.IntegrationsApi();

let integrationId = "integrationId_example"; // String | Integration Id

apiInstance.getIntegrationConfigCurrent(integrationId)
  .then((data) => {
    console.log(`getIntegrationConfigCurrent success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getIntegrationConfigCurrent');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **integrationId** | **String** | Integration Id |  |
{: class="table table-striped"}

### Return type

**IntegrationConfiguration**

<a name="getIntegrations"></a>

# IntegrationEntityListing getIntegrations(opts)


GET /api/v2/integrations

List integrations

Requires ANY permissions:

* integrations:integration:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.IntegrationsApi();

let opts = { 
  'pageSize': 25, // Number | The total page size requested
  'pageNumber': 1, // Number | The page number requested
  'sortBy': "sortBy_example", // String | variable name requested to sort by
  'expand': ["expand_example"], // [String] | variable name requested by expand list
  'nextPage': "nextPage_example", // String | next page token
  'previousPage': "previousPage_example" // String | Previous page token
};

apiInstance.getIntegrations(opts)
  .then((data) => {
    console.log(`getIntegrations success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getIntegrations');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **pageSize** | **Number** | The total page size requested | [optional] [default to 25] |
 **pageNumber** | **Number** | The page number requested | [optional] [default to 1] |
 **sortBy** | **String** | variable name requested to sort by | [optional]  |
 **expand** | **[String]** | variable name requested by expand list | [optional]  |
 **nextPage** | **String** | next page token | [optional]  |
 **previousPage** | **String** | Previous page token | [optional]  |
{: class="table table-striped"}

### Return type

**IntegrationEntityListing**

<a name="getIntegrationsAction"></a>

# Action getIntegrationsAction(actionId, opts)


GET /api/v2/integrations/actions/{actionId}

Retrieves a single Action matching id.

Requires ANY permissions:

* integrations:action:view
* bridge:actions:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.IntegrationsApi();

let actionId = "actionId_example"; // String | actionId
let opts = { 
  'expand': "expand_example", // String | Indicates a field in the response which should be expanded.
  'includeConfig': false // Boolean | Return config in response.
};

apiInstance.getIntegrationsAction(actionId, opts)
  .then((data) => {
    console.log(`getIntegrationsAction success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getIntegrationsAction');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **actionId** | **String** | actionId |  |
 **expand** | **String** | Indicates a field in the response which should be expanded. | [optional] <br />**Values**: contract |
 **includeConfig** | **Boolean** | Return config in response. | [optional] [default to false]<br />**Values**: true, false |
{: class="table table-striped"}

### Return type

**Action**

<a name="getIntegrationsActionDraft"></a>

# Action getIntegrationsActionDraft(actionId, opts)


GET /api/v2/integrations/actions/{actionId}/draft

Retrieve a Draft

Requires ANY permissions:

* integrations:action:view
* bridge:actions:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.IntegrationsApi();

let actionId = "actionId_example"; // String | actionId
let opts = { 
  'expand': "expand_example", // String | Indicates a field in the response which should be expanded.
  'includeConfig': false // Boolean | Return config in response.
};

apiInstance.getIntegrationsActionDraft(actionId, opts)
  .then((data) => {
    console.log(`getIntegrationsActionDraft success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getIntegrationsActionDraft');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **actionId** | **String** | actionId |  |
 **expand** | **String** | Indicates a field in the response which should be expanded. | [optional] <br />**Values**: contract |
 **includeConfig** | **Boolean** | Return config in response. | [optional] [default to false]<br />**Values**: true, false |
{: class="table table-striped"}

### Return type

**Action**

<a name="getIntegrationsActionDraftSchema"></a>

# JsonSchemaDocument getIntegrationsActionDraftSchema(actionId, fileName)


GET /api/v2/integrations/actions/{actionId}/draft/schemas/{fileName}

Retrieve schema for a Draft based on filename.

Requires ANY permissions:

* integrations:action:view
* bridge:actions:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.IntegrationsApi();

let actionId = "actionId_example"; // String | actionId
let fileName = "fileName_example"; // String | Name of schema file to be retrieved for this draft.

apiInstance.getIntegrationsActionDraftSchema(actionId, fileName)
  .then((data) => {
    console.log(`getIntegrationsActionDraftSchema success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getIntegrationsActionDraftSchema');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **actionId** | **String** | actionId |  |
 **fileName** | **String** | Name of schema file to be retrieved for this draft. |  |
{: class="table table-striped"}

### Return type

**JsonSchemaDocument**

<a name="getIntegrationsActionDraftTemplate"></a>

# **&#39;String&#39;** getIntegrationsActionDraftTemplate(actionId, fileName)


GET /api/v2/integrations/actions/{actionId}/draft/templates/{fileName}

Retrieve templates for a Draft based on filename.

Requires ANY permissions:

* integrations:action:view
* bridge:actions:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.IntegrationsApi();

let actionId = "actionId_example"; // String | actionId
let fileName = "fileName_example"; // String | Name of template file to be retrieved for this action draft.

apiInstance.getIntegrationsActionDraftTemplate(actionId, fileName)
  .then((data) => {
    console.log(`getIntegrationsActionDraftTemplate success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getIntegrationsActionDraftTemplate');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **actionId** | **String** | actionId |  |
 **fileName** | **String** | Name of template file to be retrieved for this action draft. |  |
{: class="table table-striped"}

### Return type

**&#39;String&#39;**

<a name="getIntegrationsActionDraftValidation"></a>

# DraftValidationResult getIntegrationsActionDraftValidation(actionId)


GET /api/v2/integrations/actions/{actionId}/draft/validation

Validate current Draft configuration.

Requires ANY permissions:

* integrations:action:edit

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.IntegrationsApi();

let actionId = "actionId_example"; // String | actionId

apiInstance.getIntegrationsActionDraftValidation(actionId)
  .then((data) => {
    console.log(`getIntegrationsActionDraftValidation success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getIntegrationsActionDraftValidation');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **actionId** | **String** | actionId |  |
{: class="table table-striped"}

### Return type

**DraftValidationResult**

<a name="getIntegrationsActionSchema"></a>

# JsonSchemaDocument getIntegrationsActionSchema(actionId, fileName)


GET /api/v2/integrations/actions/{actionId}/schemas/{fileName}

Retrieve schema for an action based on filename.

Requires ANY permissions:

* integrations:action:view
* bridge:actions:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.IntegrationsApi();

let actionId = "actionId_example"; // String | actionId
let fileName = "fileName_example"; // String | Name of schema file to be retrieved for this action.

apiInstance.getIntegrationsActionSchema(actionId, fileName)
  .then((data) => {
    console.log(`getIntegrationsActionSchema success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getIntegrationsActionSchema');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **actionId** | **String** | actionId |  |
 **fileName** | **String** | Name of schema file to be retrieved for this action. |  |
{: class="table table-striped"}

### Return type

**JsonSchemaDocument**

<a name="getIntegrationsActionTemplate"></a>

# **&#39;String&#39;** getIntegrationsActionTemplate(actionId, fileName)


GET /api/v2/integrations/actions/{actionId}/templates/{fileName}

Retrieve text of templates for an action based on filename.

Requires ANY permissions:

* integrations:action:view
* bridge:actions:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.IntegrationsApi();

let actionId = "actionId_example"; // String | actionId
let fileName = "fileName_example"; // String | Name of template file to be retrieved for this action.

apiInstance.getIntegrationsActionTemplate(actionId, fileName)
  .then((data) => {
    console.log(`getIntegrationsActionTemplate success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getIntegrationsActionTemplate');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **actionId** | **String** | actionId |  |
 **fileName** | **String** | Name of template file to be retrieved for this action. |  |
{: class="table table-striped"}

### Return type

**&#39;String&#39;**

<a name="getIntegrationsActions"></a>

# ActionEntityListing getIntegrationsActions(opts)


GET /api/v2/integrations/actions

Retrieves all actions associated with filters passed in via query param.

Requires ANY permissions:

* integrations:action:view
* bridge:actions:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.IntegrationsApi();

let opts = { 
  'pageSize': 25, // Number | The total page size requested
  'pageNumber': 1, // Number | The page number requested
  'nextPage': "nextPage_example", // String | next page token
  'previousPage': "previousPage_example", // String | Previous page token
  'sortBy': "sortBy_example", // String | Root level field name to sort on.
  'sortOrder': "asc", // String | Direction to sort 'sortBy' field.
  'category': "category_example", // String | Filter by category name.
  'name': "name_example", // String | Filter by partial or complete action name.
  'ids': "ids_example", // String | Filter by action Id. Can be a comma separated list to request multiple actions.  Limit of 50 Ids.
  'secure': "secure_example", // String | Filter based on 'secure' configuration option. True will only return actions marked as secure. False will return only non-secure actions. Do not use filter if you want all Actions.
  'includeAuthActions': "false" // String | Whether or not to include authentication actions in the response. These actions are not directly executable. Some integrations create them and will run them as needed to refresh authentication information for other actions.
};

apiInstance.getIntegrationsActions(opts)
  .then((data) => {
    console.log(`getIntegrationsActions success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getIntegrationsActions');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **pageSize** | **Number** | The total page size requested | [optional] [default to 25] |
 **pageNumber** | **Number** | The page number requested | [optional] [default to 1] |
 **nextPage** | **String** | next page token | [optional]  |
 **previousPage** | **String** | Previous page token | [optional]  |
 **sortBy** | **String** | Root level field name to sort on. | [optional]  |
 **sortOrder** | **String** | Direction to sort 'sortBy' field. | [optional] [default to asc]<br />**Values**: ASC, DESC |
 **category** | **String** | Filter by category name. | [optional]  |
 **name** | **String** | Filter by partial or complete action name. | [optional]  |
 **ids** | **String** | Filter by action Id. Can be a comma separated list to request multiple actions.  Limit of 50 Ids. | [optional]  |
 **secure** | **String** | Filter based on 'secure' configuration option. True will only return actions marked as secure. False will return only non-secure actions. Do not use filter if you want all Actions. | [optional] <br />**Values**: true, false |
 **includeAuthActions** | **String** | Whether or not to include authentication actions in the response. These actions are not directly executable. Some integrations create them and will run them as needed to refresh authentication information for other actions. | [optional] [default to false]<br />**Values**: true, false |
{: class="table table-striped"}

### Return type

**ActionEntityListing**

<a name="getIntegrationsActionsCategories"></a>

# CategoryEntityListing getIntegrationsActionsCategories(opts)


GET /api/v2/integrations/actions/categories

Retrieves all categories of available Actions

Requires ANY permissions:

* integrations:action:view
* bridge:actions:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.IntegrationsApi();

let opts = { 
  'pageSize': 25, // Number | The total page size requested
  'pageNumber': 1, // Number | The page number requested
  'nextPage': "nextPage_example", // String | next page token
  'previousPage': "previousPage_example", // String | Previous page token
  'sortBy': "sortBy_example", // String | Root level field name to sort on.  Only 'name' is supported on this endpoint.
  'sortOrder': "asc", // String | Direction to sort 'sortBy' field.
  'secure': "secure_example" // String | Filter to only include secure actions. True will only include actions marked secured. False will include only unsecure actions. Do not use filter if you want all Actions.
};

apiInstance.getIntegrationsActionsCategories(opts)
  .then((data) => {
    console.log(`getIntegrationsActionsCategories success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getIntegrationsActionsCategories');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **pageSize** | **Number** | The total page size requested | [optional] [default to 25] |
 **pageNumber** | **Number** | The page number requested | [optional] [default to 1] |
 **nextPage** | **String** | next page token | [optional]  |
 **previousPage** | **String** | Previous page token | [optional]  |
 **sortBy** | **String** | Root level field name to sort on.  Only 'name' is supported on this endpoint. | [optional]  |
 **sortOrder** | **String** | Direction to sort 'sortBy' field. | [optional] [default to asc]<br />**Values**: ASC, DESC |
 **secure** | **String** | Filter to only include secure actions. True will only include actions marked secured. False will include only unsecure actions. Do not use filter if you want all Actions. | [optional] <br />**Values**: true, false |
{: class="table table-striped"}

### Return type

**CategoryEntityListing**

<a name="getIntegrationsActionsDrafts"></a>

# ActionEntityListing getIntegrationsActionsDrafts(opts)


GET /api/v2/integrations/actions/drafts

Retrieves all action drafts associated with the filters passed in via query param.

Requires ANY permissions:

* integrations:action:view
* bridge:actions:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.IntegrationsApi();

let opts = { 
  'pageSize': 25, // Number | The total page size requested
  'pageNumber': 1, // Number | The page number requested
  'nextPage': "nextPage_example", // String | next page token
  'previousPage': "previousPage_example", // String | Previous page token
  'sortBy': "sortBy_example", // String | Root level field name to sort on.
  'sortOrder': "asc", // String | Direction to sort 'sortBy' field.
  'category': "category_example", // String | Filter by category name.
  'name': "name_example", // String | Filter by partial or complete action name.
  'ids': "ids_example", // String | Filter by action Id. Can be a comma separated list to request multiple actions.  Limit of 50 Ids.
  'secure': "secure_example", // String | Filter based on 'secure' configuration option. True will only return actions marked as secure. False will return only non-secure actions. Do not use filter if you want all Actions.
  'includeAuthActions': "false" // String | Whether or not to include authentication actions in the response. These actions are not directly executable. Some integrations create them and will run them as needed to refresh authentication information for other actions.
};

apiInstance.getIntegrationsActionsDrafts(opts)
  .then((data) => {
    console.log(`getIntegrationsActionsDrafts success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getIntegrationsActionsDrafts');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **pageSize** | **Number** | The total page size requested | [optional] [default to 25] |
 **pageNumber** | **Number** | The page number requested | [optional] [default to 1] |
 **nextPage** | **String** | next page token | [optional]  |
 **previousPage** | **String** | Previous page token | [optional]  |
 **sortBy** | **String** | Root level field name to sort on. | [optional]  |
 **sortOrder** | **String** | Direction to sort 'sortBy' field. | [optional] [default to asc]<br />**Values**: ASC, DESC |
 **category** | **String** | Filter by category name. | [optional]  |
 **name** | **String** | Filter by partial or complete action name. | [optional]  |
 **ids** | **String** | Filter by action Id. Can be a comma separated list to request multiple actions.  Limit of 50 Ids. | [optional]  |
 **secure** | **String** | Filter based on 'secure' configuration option. True will only return actions marked as secure. False will return only non-secure actions. Do not use filter if you want all Actions. | [optional] <br />**Values**: true, false |
 **includeAuthActions** | **String** | Whether or not to include authentication actions in the response. These actions are not directly executable. Some integrations create them and will run them as needed to refresh authentication information for other actions. | [optional] [default to false]<br />**Values**: true, false |
{: class="table table-striped"}

### Return type

**ActionEntityListing**

<a name="getIntegrationsActionsSchemaFileName"></a>

# JsonSchemaDocument getIntegrationsActionsSchemaFileName(providerName, fileName)

<span style="background-color: #f0ad4e;display: inline-block;padding: 7px;font-weight: bold;line-height: 1;color: #ffffff;text-align: center;white-space: nowrap;vertical-align: baseline;border-radius: .25em;margin: 10px 0;">DEPRECATED</span>

GET /api/v2/integrations/actions/schemas/{providerName}/{fileName}

Retrieves the schema.

Requires ANY permissions:

* integrations:action:view
* bridge:actions:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.IntegrationsApi();

let providerName = "providerName_example"; // String | Name of provider.
let fileName = "fileName_example"; // String | File name of schema including .json suffix.

apiInstance.getIntegrationsActionsSchemaFileName(providerName, fileName)
  .then((data) => {
    console.log(`getIntegrationsActionsSchemaFileName success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getIntegrationsActionsSchemaFileName');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **providerName** | **String** | Name of provider. |  |
 **fileName** | **String** | File name of schema including .json suffix. |  |
{: class="table table-striped"}

### Return type

**JsonSchemaDocument**

<a name="getIntegrationsBotconnectorIntegrationIdBot"></a>

# BotConnectorBot getIntegrationsBotconnectorIntegrationIdBot(integrationId, botId, opts)


GET /api/v2/integrations/botconnector/{integrationId}/bots/{botId}

Get a specific botConnector bot, plus versions, for this integration

Requires ANY permissions:

* integration:botconnector:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.IntegrationsApi();

let integrationId = "integrationId_example"; // String | The integration ID for this group of bots
let botId = "botId_example"; // String | The botID for this bot
let opts = { 
  'version': "version_example" // String | Specific Version
};

apiInstance.getIntegrationsBotconnectorIntegrationIdBot(integrationId, botId, opts)
  .then((data) => {
    console.log(`getIntegrationsBotconnectorIntegrationIdBot success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getIntegrationsBotconnectorIntegrationIdBot');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **integrationId** | **String** | The integration ID for this group of bots |  |
 **botId** | **String** | The botID for this bot |  |
 **version** | **String** | Specific Version | [optional]  |
{: class="table table-striped"}

### Return type

**BotConnectorBot**

<a name="getIntegrationsBotconnectorIntegrationIdBotVersions"></a>

# BotConnectorBotVersionSummaryEntityListing getIntegrationsBotconnectorIntegrationIdBotVersions(integrationId, botId, opts)


GET /api/v2/integrations/botconnector/{integrationId}/bots/{botId}/versions

Get a list of bot versions for a bot

Requires ANY permissions:

* integration:botconnector:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.IntegrationsApi();

let integrationId = "integrationId_example"; // String | The integration ID for this bot group
let botId = "botId_example"; // String | The botID for this bot
let opts = { 
  'pageNumber': 1, // Number | Page number
  'pageSize': 25 // Number | Page size
};

apiInstance.getIntegrationsBotconnectorIntegrationIdBotVersions(integrationId, botId, opts)
  .then((data) => {
    console.log(`getIntegrationsBotconnectorIntegrationIdBotVersions success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getIntegrationsBotconnectorIntegrationIdBotVersions');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **integrationId** | **String** | The integration ID for this bot group |  |
 **botId** | **String** | The botID for this bot |  |
 **pageNumber** | **Number** | Page number | [optional] [default to 1] |
 **pageSize** | **Number** | Page size | [optional] [default to 25] |
{: class="table table-striped"}

### Return type

**BotConnectorBotVersionSummaryEntityListing**

<a name="getIntegrationsBotconnectorIntegrationIdBots"></a>

# BotList getIntegrationsBotconnectorIntegrationIdBots(integrationId)


GET /api/v2/integrations/botconnector/{integrationId}/bots

Get a list of botConnector bots for this integration

Requires ANY permissions:

* integration:botconnector:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.IntegrationsApi();

let integrationId = "integrationId_example"; // String | The integration ID for this group of bots

apiInstance.getIntegrationsBotconnectorIntegrationIdBots(integrationId)
  .then((data) => {
    console.log(`getIntegrationsBotconnectorIntegrationIdBots success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getIntegrationsBotconnectorIntegrationIdBots');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **integrationId** | **String** | The integration ID for this group of bots |  |
{: class="table table-striped"}

### Return type

**BotList**

<a name="getIntegrationsBotconnectorIntegrationIdBotsSummaries"></a>

# BotConnectorBotSummaryEntityListing getIntegrationsBotconnectorIntegrationIdBotsSummaries(integrationId, opts)


GET /api/v2/integrations/botconnector/{integrationId}/bots/summaries

Get a summary list of botConnector bots for this integration

Requires ANY permissions:

* integration:botconnector:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.IntegrationsApi();

let integrationId = "integrationId_example"; // String | The integration ID for this group of bots
let opts = { 
  'pageNumber': 1, // Number | Page number
  'pageSize': 25 // Number | Page size
};

apiInstance.getIntegrationsBotconnectorIntegrationIdBotsSummaries(integrationId, opts)
  .then((data) => {
    console.log(`getIntegrationsBotconnectorIntegrationIdBotsSummaries success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getIntegrationsBotconnectorIntegrationIdBotsSummaries');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **integrationId** | **String** | The integration ID for this group of bots |  |
 **pageNumber** | **Number** | Page number | [optional] [default to 1] |
 **pageSize** | **Number** | Page size | [optional] [default to 25] |
{: class="table table-striped"}

### Return type

**BotConnectorBotSummaryEntityListing**

<a name="getIntegrationsClientapps"></a>

# ClientAppEntityListing getIntegrationsClientapps(opts)


GET /api/v2/integrations/clientapps

List permitted client app integrations for the logged in user

Requires NO permissions:

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.IntegrationsApi();

let opts = { 
  'pageSize': 25, // Number | The total page size requested
  'pageNumber': 1, // Number | The page number requested
  'sortBy': "sortBy_example", // String | variable name requested to sort by
  'expand': ["expand_example"], // [String] | variable name requested by expand list
  'nextPage': "nextPage_example", // String | next page token
  'previousPage': "previousPage_example" // String | Previous page token
};

apiInstance.getIntegrationsClientapps(opts)
  .then((data) => {
    console.log(`getIntegrationsClientapps success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getIntegrationsClientapps');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **pageSize** | **Number** | The total page size requested | [optional] [default to 25] |
 **pageNumber** | **Number** | The page number requested | [optional] [default to 1] |
 **sortBy** | **String** | variable name requested to sort by | [optional]  |
 **expand** | **[String]** | variable name requested by expand list | [optional]  |
 **nextPage** | **String** | next page token | [optional]  |
 **previousPage** | **String** | Previous page token | [optional]  |
{: class="table table-striped"}

### Return type

**ClientAppEntityListing**

<a name="getIntegrationsClientappsUnifiedcommunications"></a>

# UCIntegrationListing getIntegrationsClientappsUnifiedcommunications(opts)


GET /api/v2/integrations/clientapps/unifiedcommunications

UC integration client application configuration.

This endpoint returns basic UI configuration data for all Unified Communications integrations client applications enabled for the current organization.

Requires ANY permissions:

* integration:unifiedCommunications:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.IntegrationsApi();

let opts = { 
  'pageSize': 25, // Number | The total page size requested
  'pageNumber': 1, // Number | The page number requested
  'sortBy': "sortBy_example", // String | variable name requested to sort by
  'expand': ["expand_example"], // [String] | variable name requested by expand list
  'nextPage': "nextPage_example", // String | next page token
  'previousPage': "previousPage_example" // String | Previous page token
};

apiInstance.getIntegrationsClientappsUnifiedcommunications(opts)
  .then((data) => {
    console.log(`getIntegrationsClientappsUnifiedcommunications success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getIntegrationsClientappsUnifiedcommunications');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **pageSize** | **Number** | The total page size requested | [optional] [default to 25] |
 **pageNumber** | **Number** | The page number requested | [optional] [default to 1] |
 **sortBy** | **String** | variable name requested to sort by | [optional]  |
 **expand** | **[String]** | variable name requested by expand list | [optional]  |
 **nextPage** | **String** | next page token | [optional]  |
 **previousPage** | **String** | Previous page token | [optional]  |
{: class="table table-striped"}

### Return type

**UCIntegrationListing**

<a name="getIntegrationsCredential"></a>

# Credential getIntegrationsCredential(credentialId)


GET /api/v2/integrations/credentials/{credentialId}

Get a single credential with sensitive fields redacted

Requires NO permissions:

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.IntegrationsApi();

let credentialId = "credentialId_example"; // String | Credential ID

apiInstance.getIntegrationsCredential(credentialId)
  .then((data) => {
    console.log(`getIntegrationsCredential success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getIntegrationsCredential');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **credentialId** | **String** | Credential ID |  |
{: class="table table-striped"}

### Return type

**Credential**

<a name="getIntegrationsCredentials"></a>

# CredentialInfoListing getIntegrationsCredentials(opts)


GET /api/v2/integrations/credentials

List multiple sets of credentials

Requires NO permissions:

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.IntegrationsApi();

let opts = { 
  'pageNumber': 1, // Number | Page number
  'pageSize': 25 // Number | Page size
};

apiInstance.getIntegrationsCredentials(opts)
  .then((data) => {
    console.log(`getIntegrationsCredentials success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getIntegrationsCredentials');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **pageNumber** | **Number** | Page number | [optional] [default to 1] |
 **pageSize** | **Number** | Page size | [optional] [default to 25] |
{: class="table table-striped"}

### Return type

**CredentialInfoListing**

<a name="getIntegrationsCredentialsTypes"></a>

# CredentialTypeListing getIntegrationsCredentialsTypes()


GET /api/v2/integrations/credentials/types

List all credential types

Requires NO permissions:

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.IntegrationsApi();

apiInstance.getIntegrationsCredentialsTypes()
  .then((data) => {
    console.log(`getIntegrationsCredentialsTypes success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getIntegrationsCredentialsTypes');
    console.error(err);
  });
```

### Parameters

This endpoint does not need any parameter.


### Return type

**CredentialTypeListing**

<a name="getIntegrationsMicrosoftteamsAuth"></a>

# IntegrationAuthResponse getIntegrationsMicrosoftteamsAuth()


GET /api/v2/integrations/microsoftteams/auth

Gets a Microsoft Teams integration auth for the user.

Requires ANY permissions:

* integration:microsoftTeams:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.IntegrationsApi();

apiInstance.getIntegrationsMicrosoftteamsAuth()
  .then((data) => {
    console.log(`getIntegrationsMicrosoftteamsAuth success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getIntegrationsMicrosoftteamsAuth');
    console.error(err);
  });
```

### Parameters

This endpoint does not need any parameter.


### Return type

**IntegrationAuthResponse**

<a name="getIntegrationsSalesforceServicecloudvoiceVoicecallrecordJob"></a>

# VoiceCallRecordAsyncJob getIntegrationsSalesforceServicecloudvoiceVoicecallrecordJob(jobId)


GET /api/v2/integrations/salesforce/servicecloudvoice/voicecallrecord/jobs/{jobId}

Get a voice call record by job id

Requires ALL permissions:

* integration:salesforceServiceCloudVoice:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.IntegrationsApi();

let jobId = "jobId_example"; // String | 

apiInstance.getIntegrationsSalesforceServicecloudvoiceVoicecallrecordJob(jobId)
  .then((data) => {
    console.log(`getIntegrationsSalesforceServicecloudvoiceVoicecallrecordJob success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getIntegrationsSalesforceServicecloudvoiceVoicecallrecordJob');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **jobId** | **String** |  |  |
{: class="table table-striped"}

### Return type

**VoiceCallRecordAsyncJob**

<a name="getIntegrationsSpeechDialogflowAgent"></a>

# DialogflowAgent getIntegrationsSpeechDialogflowAgent(agentId)


GET /api/v2/integrations/speech/dialogflow/agents/{agentId}

Get details about a Dialogflow agent

Requires ANY permissions:

* integrations:integration:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.IntegrationsApi();

let agentId = "agentId_example"; // String | The agent ID

apiInstance.getIntegrationsSpeechDialogflowAgent(agentId)
  .then((data) => {
    console.log(`getIntegrationsSpeechDialogflowAgent success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getIntegrationsSpeechDialogflowAgent');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **agentId** | **String** | The agent ID |  |
{: class="table table-striped"}

### Return type

**DialogflowAgent**

<a name="getIntegrationsSpeechDialogflowAgents"></a>

# DialogflowAgentSummaryEntityListing getIntegrationsSpeechDialogflowAgents(opts)


GET /api/v2/integrations/speech/dialogflow/agents

Get a list of Dialogflow agents in the customers' Google accounts

Requires ANY permissions:

* integrations:integration:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.IntegrationsApi();

let opts = { 
  'pageNumber': 1, // Number | Page number
  'pageSize': 25, // Number | Page size
  'name': "name_example" // String | Filter on agent name
};

apiInstance.getIntegrationsSpeechDialogflowAgents(opts)
  .then((data) => {
    console.log(`getIntegrationsSpeechDialogflowAgents success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getIntegrationsSpeechDialogflowAgents');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **pageNumber** | **Number** | Page number | [optional] [default to 1] |
 **pageSize** | **Number** | Page size | [optional] [default to 25] |
 **name** | **String** | Filter on agent name | [optional]  |
{: class="table table-striped"}

### Return type

**DialogflowAgentSummaryEntityListing**

<a name="getIntegrationsSpeechDialogflowcxAgent"></a>

# DialogflowCXAgent getIntegrationsSpeechDialogflowcxAgent(agentId)


GET /api/v2/integrations/speech/dialogflowcx/agents/{agentId}

Get details about a Dialogflow CX agent

Requires ANY permissions:

* integrations:integration:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.IntegrationsApi();

let agentId = "agentId_example"; // String | The agent ID

apiInstance.getIntegrationsSpeechDialogflowcxAgent(agentId)
  .then((data) => {
    console.log(`getIntegrationsSpeechDialogflowcxAgent success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getIntegrationsSpeechDialogflowcxAgent');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **agentId** | **String** | The agent ID |  |
{: class="table table-striped"}

### Return type

**DialogflowCXAgent**

<a name="getIntegrationsSpeechDialogflowcxAgents"></a>

# DialogflowCXAgentSummaryEntityListing getIntegrationsSpeechDialogflowcxAgents(opts)


GET /api/v2/integrations/speech/dialogflowcx/agents

Get a list of Dialogflow CX agents in the customers' Google accounts

Requires ANY permissions:

* integrations:integration:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.IntegrationsApi();

let opts = { 
  'pageNumber': 1, // Number | Page number
  'pageSize': 25, // Number | Page size
  'name': "name_example" // String | Filter on agent name
};

apiInstance.getIntegrationsSpeechDialogflowcxAgents(opts)
  .then((data) => {
    console.log(`getIntegrationsSpeechDialogflowcxAgents success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getIntegrationsSpeechDialogflowcxAgents');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **pageNumber** | **Number** | Page number | [optional] [default to 1] |
 **pageSize** | **Number** | Page size | [optional] [default to 25] |
 **name** | **String** | Filter on agent name | [optional]  |
{: class="table table-striped"}

### Return type

**DialogflowCXAgentSummaryEntityListing**

<a name="getIntegrationsSpeechLexBotAlias"></a>

# LexBotAlias getIntegrationsSpeechLexBotAlias(aliasId)


GET /api/v2/integrations/speech/lex/bot/alias/{aliasId}

Get details about a Lex bot alias

Requires ANY permissions:

* integrations:integration:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.IntegrationsApi();

let aliasId = "aliasId_example"; // String | The alias ID

apiInstance.getIntegrationsSpeechLexBotAlias(aliasId)
  .then((data) => {
    console.log(`getIntegrationsSpeechLexBotAlias success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getIntegrationsSpeechLexBotAlias');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **aliasId** | **String** | The alias ID |  |
{: class="table table-striped"}

### Return type

**LexBotAlias**

<a name="getIntegrationsSpeechLexBotBotIdAliases"></a>

# LexBotAliasEntityListing getIntegrationsSpeechLexBotBotIdAliases(botId, opts)


GET /api/v2/integrations/speech/lex/bot/{botId}/aliases

Get a list of aliases for a bot in the customer's AWS accounts

Requires ANY permissions:

* integrations:integration:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.IntegrationsApi();

let botId = "botId_example"; // String | The bot ID
let opts = { 
  'pageNumber': 1, // Number | Page number
  'pageSize': 25, // Number | Page size
  'status': "status_example", // String | Filter on alias status
  'name': "name_example" // String | Filter on alias name
};

apiInstance.getIntegrationsSpeechLexBotBotIdAliases(botId, opts)
  .then((data) => {
    console.log(`getIntegrationsSpeechLexBotBotIdAliases success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getIntegrationsSpeechLexBotBotIdAliases');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **botId** | **String** | The bot ID |  |
 **pageNumber** | **Number** | Page number | [optional] [default to 1] |
 **pageSize** | **Number** | Page size | [optional] [default to 25] |
 **status** | **String** | Filter on alias status | [optional] <br />**Values**: READY, FAILED, BUILDING, NOT_BUILT |
 **name** | **String** | Filter on alias name | [optional]  |
{: class="table table-striped"}

### Return type

**LexBotAliasEntityListing**

<a name="getIntegrationsSpeechLexBots"></a>

# LexBotEntityListing getIntegrationsSpeechLexBots(opts)


GET /api/v2/integrations/speech/lex/bots

Get a list of Lex bots in the customers' AWS accounts

Requires ANY permissions:

* integrations:integration:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.IntegrationsApi();

let opts = { 
  'pageNumber': 1, // Number | Page number
  'pageSize': 25, // Number | Page size
  'name': "name_example" // String | Filter on bot name
};

apiInstance.getIntegrationsSpeechLexBots(opts)
  .then((data) => {
    console.log(`getIntegrationsSpeechLexBots success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getIntegrationsSpeechLexBots');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **pageNumber** | **Number** | Page number | [optional] [default to 1] |
 **pageSize** | **Number** | Page size | [optional] [default to 25] |
 **name** | **String** | Filter on bot name | [optional]  |
{: class="table table-striped"}

### Return type

**LexBotEntityListing**

<a name="getIntegrationsSpeechLexv2BotAlias"></a>

# LexV2BotAlias getIntegrationsSpeechLexv2BotAlias(aliasId)


GET /api/v2/integrations/speech/lexv2/bot/alias/{aliasId}

Get details about a Lex V2 bot alias

Requires ANY permissions:

* integrations:integration:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.IntegrationsApi();

let aliasId = "aliasId_example"; // String | The Alias ID

apiInstance.getIntegrationsSpeechLexv2BotAlias(aliasId)
  .then((data) => {
    console.log(`getIntegrationsSpeechLexv2BotAlias success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getIntegrationsSpeechLexv2BotAlias');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **aliasId** | **String** | The Alias ID |  |
{: class="table table-striped"}

### Return type

**LexV2BotAlias**

<a name="getIntegrationsSpeechLexv2BotBotIdAliases"></a>

# LexV2BotAliasEntityListing getIntegrationsSpeechLexv2BotBotIdAliases(botId, opts)


GET /api/v2/integrations/speech/lexv2/bot/{botId}/aliases

Get a list of aliases for a Lex V2 bot

Requires ANY permissions:

* integrations:integration:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.IntegrationsApi();

let botId = "botId_example"; // String | The Bot ID
let opts = { 
  'pageNumber': 1, // Number | Page number
  'pageSize': 25, // Number | Page size
  'status': "status_example", // String | Filter on alias status
  'name': "name_example" // String | Filter on alias name
};

apiInstance.getIntegrationsSpeechLexv2BotBotIdAliases(botId, opts)
  .then((data) => {
    console.log(`getIntegrationsSpeechLexv2BotBotIdAliases success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getIntegrationsSpeechLexv2BotBotIdAliases');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **botId** | **String** | The Bot ID |  |
 **pageNumber** | **Number** | Page number | [optional] [default to 1] |
 **pageSize** | **Number** | Page size | [optional] [default to 25] |
 **status** | **String** | Filter on alias status | [optional] <br />**Values**: Creating, Available, Deleting, Failed |
 **name** | **String** | Filter on alias name | [optional]  |
{: class="table table-striped"}

### Return type

**LexV2BotAliasEntityListing**

<a name="getIntegrationsSpeechLexv2Bots"></a>

# LexV2BotEntityListing getIntegrationsSpeechLexv2Bots(opts)


GET /api/v2/integrations/speech/lexv2/bots

Get a list of Lex V2 bots

Requires ANY permissions:

* integrations:integration:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.IntegrationsApi();

let opts = { 
  'pageNumber': 1, // Number | Page number
  'pageSize': 25, // Number | Page size
  'name': "name_example" // String | Filter on bot name
};

apiInstance.getIntegrationsSpeechLexv2Bots(opts)
  .then((data) => {
    console.log(`getIntegrationsSpeechLexv2Bots success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getIntegrationsSpeechLexv2Bots');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **pageNumber** | **Number** | Page number | [optional] [default to 1] |
 **pageSize** | **Number** | Page size | [optional] [default to 25] |
 **name** | **String** | Filter on bot name | [optional]  |
{: class="table table-striped"}

### Return type

**LexV2BotEntityListing**

<a name="getIntegrationsSpeechNuanceNuanceIntegrationIdBot"></a>

# NuanceBot getIntegrationsSpeechNuanceNuanceIntegrationIdBot(nuanceIntegrationId, botId, opts)


GET /api/v2/integrations/speech/nuance/{nuanceIntegrationId}/bots/{botId}

Get a Nuance bot in the specified Integration

getIntegrationsSpeechNuanceNuanceIntegrationIdBot is a preview method and is subject to both breaking and non-breaking changes at any time without notice

Requires ANY permissions:

* integrations:integration:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.IntegrationsApi();

let nuanceIntegrationId = "nuanceIntegrationId_example"; // String | The integration ID for this group of bots
let botId = "botId_example"; // String | The Nuance bot ID to get
let opts = { 
  'expand': ["expand_example"], // [String] | expand
  'targetChannel': "targetChannel_example" // String | targetChannel
};

apiInstance.getIntegrationsSpeechNuanceNuanceIntegrationIdBot(nuanceIntegrationId, botId, opts)
  .then((data) => {
    console.log(`getIntegrationsSpeechNuanceNuanceIntegrationIdBot success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getIntegrationsSpeechNuanceNuanceIntegrationIdBot');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **nuanceIntegrationId** | **String** | The integration ID for this group of bots |  |
 **botId** | **String** | The Nuance bot ID to get |  |
 **expand** | **[String]** | expand | [optional] <br />**Values**: variables, transferNodes, channels, locales |
 **targetChannel** | **String** | targetChannel | [optional] <br />**Values**: digital, voice |
{: class="table table-striped"}

### Return type

**NuanceBot**

<a name="getIntegrationsSpeechNuanceNuanceIntegrationIdBotJob"></a>

# AsyncJob getIntegrationsSpeechNuanceNuanceIntegrationIdBotJob(nuanceIntegrationId, botId, jobId)


GET /api/v2/integrations/speech/nuance/{nuanceIntegrationId}/bots/{botId}/jobs/{jobId}

Get the status of an asynchronous Nuance bot GET job

getIntegrationsSpeechNuanceNuanceIntegrationIdBotJob is a preview method and is subject to both breaking and non-breaking changes at any time without notice

Requires ANY permissions:

* integrations:integration:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.IntegrationsApi();

let nuanceIntegrationId = "nuanceIntegrationId_example"; // String | The integration ID for this group of bots
let botId = "botId_example"; // String | The Nuance bot ID
let jobId = "jobId_example"; // String | The asynchronous job ID

apiInstance.getIntegrationsSpeechNuanceNuanceIntegrationIdBotJob(nuanceIntegrationId, botId, jobId)
  .then((data) => {
    console.log(`getIntegrationsSpeechNuanceNuanceIntegrationIdBotJob success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getIntegrationsSpeechNuanceNuanceIntegrationIdBotJob');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **nuanceIntegrationId** | **String** | The integration ID for this group of bots |  |
 **botId** | **String** | The Nuance bot ID |  |
 **jobId** | **String** | The asynchronous job ID |  |
{: class="table table-striped"}

### Return type

**AsyncJob**

<a name="getIntegrationsSpeechNuanceNuanceIntegrationIdBotJobResults"></a>

# NuanceBot getIntegrationsSpeechNuanceNuanceIntegrationIdBotJobResults(nuanceIntegrationId, botId, jobId)


GET /api/v2/integrations/speech/nuance/{nuanceIntegrationId}/bots/{botId}/jobs/{jobId}/results

Get the result of an asynchronous Nuance bot GET job

getIntegrationsSpeechNuanceNuanceIntegrationIdBotJobResults is a preview method and is subject to both breaking and non-breaking changes at any time without notice

Requires ANY permissions:

* integrations:integration:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.IntegrationsApi();

let nuanceIntegrationId = "nuanceIntegrationId_example"; // String | The integration ID for this group of bots
let botId = "botId_example"; // String | The Nuance bot ID
let jobId = "jobId_example"; // String | The asynchronous job ID

apiInstance.getIntegrationsSpeechNuanceNuanceIntegrationIdBotJobResults(nuanceIntegrationId, botId, jobId)
  .then((data) => {
    console.log(`getIntegrationsSpeechNuanceNuanceIntegrationIdBotJobResults success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getIntegrationsSpeechNuanceNuanceIntegrationIdBotJobResults');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **nuanceIntegrationId** | **String** | The integration ID for this group of bots |  |
 **botId** | **String** | The Nuance bot ID |  |
 **jobId** | **String** | The asynchronous job ID |  |
{: class="table table-striped"}

### Return type

**NuanceBot**

<a name="getIntegrationsSpeechNuanceNuanceIntegrationIdBots"></a>

# NuanceBotEntityListing getIntegrationsSpeechNuanceNuanceIntegrationIdBots(nuanceIntegrationId, opts)


GET /api/v2/integrations/speech/nuance/{nuanceIntegrationId}/bots

Get a list of Nuance bots available in the specified Integration

If the onlyRegisteredBots param is set, the returned data will only include the Nuance bots which have configured client secrets within the Integration,  otherwise all of the Nuance bots available to the Integrations configured discovery credentials are returned.

getIntegrationsSpeechNuanceNuanceIntegrationIdBots is a preview method and is subject to both breaking and non-breaking changes at any time without notice

Requires ANY permissions:

* integrations:integration:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.IntegrationsApi();

let nuanceIntegrationId = "nuanceIntegrationId_example"; // String | The integration ID for this group of bots
let opts = { 
  'pageNumber': 1, // Number | Page number
  'pageSize': 25, // Number | Page size
  'onlyRegisteredBots': true // Boolean | Limit bots to the ones configured for Genesys Cloud usage
};

apiInstance.getIntegrationsSpeechNuanceNuanceIntegrationIdBots(nuanceIntegrationId, opts)
  .then((data) => {
    console.log(`getIntegrationsSpeechNuanceNuanceIntegrationIdBots success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getIntegrationsSpeechNuanceNuanceIntegrationIdBots');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **nuanceIntegrationId** | **String** | The integration ID for this group of bots |  |
 **pageNumber** | **Number** | Page number | [optional] [default to 1] |
 **pageSize** | **Number** | Page size | [optional] [default to 25] |
 **onlyRegisteredBots** | **Boolean** | Limit bots to the ones configured for Genesys Cloud usage | [optional] [default to true] |
{: class="table table-striped"}

### Return type

**NuanceBotEntityListing**

<a name="getIntegrationsSpeechNuanceNuanceIntegrationIdBotsJob"></a>

# AsyncJob getIntegrationsSpeechNuanceNuanceIntegrationIdBotsJob(nuanceIntegrationId, jobId)


GET /api/v2/integrations/speech/nuance/{nuanceIntegrationId}/bots/jobs/{jobId}

Get the status of an asynchronous Nuance bots GET job

getIntegrationsSpeechNuanceNuanceIntegrationIdBotsJob is a preview method and is subject to both breaking and non-breaking changes at any time without notice

Requires ANY permissions:

* integrations:integration:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.IntegrationsApi();

let nuanceIntegrationId = "nuanceIntegrationId_example"; // String | The integration ID for this group of bots
let jobId = "jobId_example"; // String | The asynchronous job ID

apiInstance.getIntegrationsSpeechNuanceNuanceIntegrationIdBotsJob(nuanceIntegrationId, jobId)
  .then((data) => {
    console.log(`getIntegrationsSpeechNuanceNuanceIntegrationIdBotsJob success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getIntegrationsSpeechNuanceNuanceIntegrationIdBotsJob');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **nuanceIntegrationId** | **String** | The integration ID for this group of bots |  |
 **jobId** | **String** | The asynchronous job ID |  |
{: class="table table-striped"}

### Return type

**AsyncJob**

<a name="getIntegrationsSpeechNuanceNuanceIntegrationIdBotsJobResults"></a>

# NuanceBotEntityListing getIntegrationsSpeechNuanceNuanceIntegrationIdBotsJobResults(nuanceIntegrationId, jobId)


GET /api/v2/integrations/speech/nuance/{nuanceIntegrationId}/bots/jobs/{jobId}/results

Get the result of an asynchronous Nuance bots GET job

getIntegrationsSpeechNuanceNuanceIntegrationIdBotsJobResults is a preview method and is subject to both breaking and non-breaking changes at any time without notice

Requires ANY permissions:

* integrations:integration:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.IntegrationsApi();

let nuanceIntegrationId = "nuanceIntegrationId_example"; // String | The integration ID for this group of bots
let jobId = "jobId_example"; // String | The asynchronous job ID

apiInstance.getIntegrationsSpeechNuanceNuanceIntegrationIdBotsJobResults(nuanceIntegrationId, jobId)
  .then((data) => {
    console.log(`getIntegrationsSpeechNuanceNuanceIntegrationIdBotsJobResults success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getIntegrationsSpeechNuanceNuanceIntegrationIdBotsJobResults');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **nuanceIntegrationId** | **String** | The integration ID for this group of bots |  |
 **jobId** | **String** | The asynchronous job ID |  |
{: class="table table-striped"}

### Return type

**NuanceBotEntityListing**

<a name="getIntegrationsSpeechSttEngine"></a>

# SttEngineEntity getIntegrationsSpeechSttEngine(engineId)


GET /api/v2/integrations/speech/stt/engines/{engineId}

Get details about a STT engine

Requires ANY permissions:

* integrations:integration:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.IntegrationsApi();

let engineId = "engineId_example"; // String | The engine ID

apiInstance.getIntegrationsSpeechSttEngine(engineId)
  .then((data) => {
    console.log(`getIntegrationsSpeechSttEngine success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getIntegrationsSpeechSttEngine');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **engineId** | **String** | The engine ID |  |
{: class="table table-striped"}

### Return type

**SttEngineEntity**

<a name="getIntegrationsSpeechSttEngines"></a>

# SttEngineEntityListing getIntegrationsSpeechSttEngines(opts)


GET /api/v2/integrations/speech/stt/engines

Get a list of STT engines enabled for org

Requires ANY permissions:

* integrations:integration:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.IntegrationsApi();

let opts = { 
  'pageNumber': 1, // Number | Page number
  'pageSize': 25, // Number | Page size
  'name': "name_example" // String | Filter on engine name
};

apiInstance.getIntegrationsSpeechSttEngines(opts)
  .then((data) => {
    console.log(`getIntegrationsSpeechSttEngines success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getIntegrationsSpeechSttEngines');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **pageNumber** | **Number** | Page number | [optional] [default to 1] |
 **pageSize** | **Number** | Page size | [optional] [default to 25] |
 **name** | **String** | Filter on engine name | [optional]  |
{: class="table table-striped"}

### Return type

**SttEngineEntityListing**

<a name="getIntegrationsSpeechTtsEngine"></a>

# TtsEngineEntity getIntegrationsSpeechTtsEngine(engineId, opts)


GET /api/v2/integrations/speech/tts/engines/{engineId}

Get details about a TTS engine

Requires ANY permissions:

* integrations:integration:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.IntegrationsApi();

let engineId = "engineId_example"; // String | The engine ID
let opts = { 
  'includeVoices': false // Boolean | Include voices for the engine
};

apiInstance.getIntegrationsSpeechTtsEngine(engineId, opts)
  .then((data) => {
    console.log(`getIntegrationsSpeechTtsEngine success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getIntegrationsSpeechTtsEngine');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **engineId** | **String** | The engine ID |  |
 **includeVoices** | **Boolean** | Include voices for the engine | [optional] [default to false] |
{: class="table table-striped"}

### Return type

**TtsEngineEntity**

<a name="getIntegrationsSpeechTtsEngineVoice"></a>

# TtsVoiceEntity getIntegrationsSpeechTtsEngineVoice(engineId, voiceId)


GET /api/v2/integrations/speech/tts/engines/{engineId}/voices/{voiceId}

Get details about a specific voice for a TTS engine

Requires ANY permissions:

* integrations:integration:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.IntegrationsApi();

let engineId = "engineId_example"; // String | The engine ID
let voiceId = "voiceId_example"; // String | The voice ID

apiInstance.getIntegrationsSpeechTtsEngineVoice(engineId, voiceId)
  .then((data) => {
    console.log(`getIntegrationsSpeechTtsEngineVoice success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getIntegrationsSpeechTtsEngineVoice');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **engineId** | **String** | The engine ID |  |
 **voiceId** | **String** | The voice ID |  |
{: class="table table-striped"}

### Return type

**TtsVoiceEntity**

<a name="getIntegrationsSpeechTtsEngineVoices"></a>

# TtsVoiceEntityListing getIntegrationsSpeechTtsEngineVoices(engineId, opts)


GET /api/v2/integrations/speech/tts/engines/{engineId}/voices

Get a list of voices for a TTS engine

Requires ANY permissions:

* integrations:integration:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.IntegrationsApi();

let engineId = "engineId_example"; // String | The engine ID
let opts = { 
  'pageNumber': 1, // Number | Page number
  'pageSize': 25 // Number | Page size
};

apiInstance.getIntegrationsSpeechTtsEngineVoices(engineId, opts)
  .then((data) => {
    console.log(`getIntegrationsSpeechTtsEngineVoices success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getIntegrationsSpeechTtsEngineVoices');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **engineId** | **String** | The engine ID |  |
 **pageNumber** | **Number** | Page number | [optional] [default to 1] |
 **pageSize** | **Number** | Page size | [optional] [default to 25] |
{: class="table table-striped"}

### Return type

**TtsVoiceEntityListing**

<a name="getIntegrationsSpeechTtsEngines"></a>

# TtsEngineEntityListing getIntegrationsSpeechTtsEngines(opts)


GET /api/v2/integrations/speech/tts/engines

Get a list of TTS engines enabled for org

Requires ANY permissions:

* integrations:integration:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.IntegrationsApi();

let opts = { 
  'pageNumber': 1, // Number | Page number
  'pageSize': 25, // Number | Page size
  'includeVoices': false, // Boolean | Include voices for the engine
  'name': "name_example", // String | Filter on engine name
  'language': "language_example" // String | Filter on supported language. If includeVoices=true then the voices are also filtered.
};

apiInstance.getIntegrationsSpeechTtsEngines(opts)
  .then((data) => {
    console.log(`getIntegrationsSpeechTtsEngines success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getIntegrationsSpeechTtsEngines');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **pageNumber** | **Number** | Page number | [optional] [default to 1] |
 **pageSize** | **Number** | Page size | [optional] [default to 25] |
 **includeVoices** | **Boolean** | Include voices for the engine | [optional] [default to false] |
 **name** | **String** | Filter on engine name | [optional]  |
 **language** | **String** | Filter on supported language. If includeVoices=true then the voices are also filtered. | [optional]  |
{: class="table table-striped"}

### Return type

**TtsEngineEntityListing**

<a name="getIntegrationsSpeechTtsSettings"></a>

# TtsSettings getIntegrationsSpeechTtsSettings()


GET /api/v2/integrations/speech/tts/settings

Get TTS settings for an org

Requires ANY permissions:

* integrations:integration:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.IntegrationsApi();

apiInstance.getIntegrationsSpeechTtsSettings()
  .then((data) => {
    console.log(`getIntegrationsSpeechTtsSettings success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getIntegrationsSpeechTtsSettings');
    console.error(err);
  });
```

### Parameters

This endpoint does not need any parameter.


### Return type

**TtsSettings**

<a name="getIntegrationsType"></a>

# IntegrationType getIntegrationsType(typeId)


GET /api/v2/integrations/types/{typeId}

Get integration type.

Requires ANY permissions:

* integrations:integration:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.IntegrationsApi();

let typeId = "typeId_example"; // String | Integration Type Id

apiInstance.getIntegrationsType(typeId)
  .then((data) => {
    console.log(`getIntegrationsType success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getIntegrationsType');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **typeId** | **String** | Integration Type Id |  |
{: class="table table-striped"}

### Return type

**IntegrationType**

<a name="getIntegrationsTypeConfigschema"></a>

# JsonSchemaDocument getIntegrationsTypeConfigschema(typeId, configType)


GET /api/v2/integrations/types/{typeId}/configschemas/{configType}

Get properties config schema for an integration type.

Requires ANY permissions:

* integrations:integration:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.IntegrationsApi();

let typeId = "typeId_example"; // String | Integration Type Id
let configType = "configType_example"; // String | Config schema type

apiInstance.getIntegrationsTypeConfigschema(typeId, configType)
  .then((data) => {
    console.log(`getIntegrationsTypeConfigschema success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getIntegrationsTypeConfigschema');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **typeId** | **String** | Integration Type Id |  |
 **configType** | **String** | Config schema type | <br />**Values**: properties, advanced |
{: class="table table-striped"}

### Return type

**JsonSchemaDocument**

<a name="getIntegrationsTypes"></a>

# IntegrationTypeEntityListing getIntegrationsTypes(opts)


GET /api/v2/integrations/types

List integration types

Requires ANY permissions:

* integrations:integration:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.IntegrationsApi();

let opts = { 
  'pageSize': 25, // Number | The total page size requested
  'pageNumber': 1, // Number | The page number requested
  'sortBy': "sortBy_example", // String | variable name requested to sort by
  'expand': ["expand_example"], // [String] | variable name requested by expand list
  'nextPage': "nextPage_example", // String | next page token
  'previousPage': "previousPage_example" // String | Previous page token
};

apiInstance.getIntegrationsTypes(opts)
  .then((data) => {
    console.log(`getIntegrationsTypes success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getIntegrationsTypes');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **pageSize** | **Number** | The total page size requested | [optional] [default to 25] |
 **pageNumber** | **Number** | The page number requested | [optional] [default to 1] |
 **sortBy** | **String** | variable name requested to sort by | [optional]  |
 **expand** | **[String]** | variable name requested by expand list | [optional]  |
 **nextPage** | **String** | next page token | [optional]  |
 **previousPage** | **String** | Previous page token | [optional]  |
{: class="table table-striped"}

### Return type

**IntegrationTypeEntityListing**

<a name="getIntegrationsUnifiedcommunicationAuth"></a>

# IntegrationAuthResponse getIntegrationsUnifiedcommunicationAuth(ucIntegrationId)


GET /api/v2/integrations/unifiedcommunications/{ucIntegrationId}/auth

Gets a 3rd-party integration auth for the user.

Requires ANY permissions:

* integration:unifiedCommunications:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.IntegrationsApi();

let ucIntegrationId = "ucIntegrationId_example"; // String | UC Integration ID

apiInstance.getIntegrationsUnifiedcommunicationAuth(ucIntegrationId)
  .then((data) => {
    console.log(`getIntegrationsUnifiedcommunicationAuth success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getIntegrationsUnifiedcommunicationAuth');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **ucIntegrationId** | **String** | UC Integration ID |  |
{: class="table table-striped"}

### Return type

**IntegrationAuthResponse**

<a name="getIntegrationsUnifiedcommunicationMeeting"></a>

# MeetingResponse getIntegrationsUnifiedcommunicationMeeting(ucIntegrationId, meetingId)


GET /api/v2/integrations/unifiedcommunications/{ucIntegrationId}/meetings/{meetingId}

Get a meeting.

Get a meeting by ID.

Requires ANY permissions:

* integration:unifiedCommunications:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.IntegrationsApi();

let ucIntegrationId = "ucIntegrationId_example"; // String | 3rd Party Service Type
let meetingId = "meetingId_example"; // String | ID of meeting

apiInstance.getIntegrationsUnifiedcommunicationMeeting(ucIntegrationId, meetingId)
  .then((data) => {
    console.log(`getIntegrationsUnifiedcommunicationMeeting success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getIntegrationsUnifiedcommunicationMeeting');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **ucIntegrationId** | **String** | 3rd Party Service Type |  |
 **meetingId** | **String** | ID of meeting |  |
{: class="table table-striped"}

### Return type

**MeetingResponse**

<a name="getIntegrationsUnifiedcommunicationMeetings"></a>

# ListMeetingsResponsePageResult getIntegrationsUnifiedcommunicationMeetings(ucIntegrationId, opts)


GET /api/v2/integrations/unifiedcommunications/{ucIntegrationId}/meetings

List meetings

List meetings

Requires ANY permissions:

* integration:unifiedCommunications:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.IntegrationsApi();

let ucIntegrationId = "ucIntegrationId_example"; // String | 3rd Party Service Type
let opts = { 
  'pageSize': 25, // Number | Size of Paged Results
  'pageNumber': 0 // Number | Number of Page
};

apiInstance.getIntegrationsUnifiedcommunicationMeetings(ucIntegrationId, opts)
  .then((data) => {
    console.log(`getIntegrationsUnifiedcommunicationMeetings success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getIntegrationsUnifiedcommunicationMeetings');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **ucIntegrationId** | **String** | 3rd Party Service Type |  |
 **pageSize** | **Number** | Size of Paged Results | [optional] [default to 25] |
 **pageNumber** | **Number** | Number of Page | [optional] [default to 0] |
{: class="table table-striped"}

### Return type

**ListMeetingsResponsePageResult**

<a name="getIntegrationsUnifiedcommunicationPresences"></a>

# [UcUserPresence] getIntegrationsUnifiedcommunicationPresences(ucIntegrationId, opts)


GET /api/v2/integrations/unifiedcommunications/{ucIntegrationId}/presences

Get bulk user presences for an integration source

Gets the bulk presence for integration users.  This will return the integration presence mapped to Genesys Cloud presence with additional activity details in the message field. This presence source is read-only.

Requires ANY permissions:

* integration:unifiedCommunications:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.IntegrationsApi();

let ucIntegrationId = "ucIntegrationId_example"; // String | Integration Id
let opts = { 
  'id': ["id_example"] // [String] | A comma separated list of user IDs to fetch their presence status in bulk. Limit 25.
};

apiInstance.getIntegrationsUnifiedcommunicationPresences(ucIntegrationId, opts)
  .then((data) => {
    console.log(`getIntegrationsUnifiedcommunicationPresences success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getIntegrationsUnifiedcommunicationPresences');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **ucIntegrationId** | **String** | Integration Id |  |
 **id** | **[String]** | A comma separated list of user IDs to fetch their presence status in bulk. Limit 25. | [optional]  |
{: class="table table-striped"}

### Return type

**[UcUserPresence]**

<a name="getIntegrationsUnifiedcommunicationsClientapp"></a>

# UnifiedCommunicationsIntegration getIntegrationsUnifiedcommunicationsClientapp(ucIntegrationId)


GET /api/v2/integrations/unifiedcommunications/clientapps/{ucIntegrationId}

UC integration client application configuration.

This endpoint returns basic UI configuration data for the specified Unified Communications integration client application.

Requires ANY permissions:

* integration:unifiedCommunications:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.IntegrationsApi();

let ucIntegrationId = "ucIntegrationId_example"; // String | 3rd Party Service Type

apiInstance.getIntegrationsUnifiedcommunicationsClientapp(ucIntegrationId)
  .then((data) => {
    console.log(`getIntegrationsUnifiedcommunicationsClientapp success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getIntegrationsUnifiedcommunicationsClientapp');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **ucIntegrationId** | **String** | 3rd Party Service Type |  |
{: class="table table-striped"}

### Return type

**UnifiedCommunicationsIntegration**

<a name="getIntegrationsUnifiedcommunicationsClientapps"></a>

# UnifiedCommunicationsIntegrationListing getIntegrationsUnifiedcommunicationsClientapps(opts)


GET /api/v2/integrations/unifiedcommunications/clientapps

List UC integration client application configurations.

This endpoint returns basic UI configuration data for all Unified Communications integrations client applications enabled.

Requires ANY permissions:

* integration:unifiedCommunications:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.IntegrationsApi();

let opts = { 
  'pageSize': 25, // Number | The total page size requested
  'pageNumber': 1, // Number | The page number requested
  'sortBy': "sortBy_example", // String | variable name requested to sort by
  'expand': ["expand_example"], // [String] | variable name requested by expand list
  'nextPage': "nextPage_example", // String | next page token
  'previousPage': "previousPage_example" // String | Previous page token
};

apiInstance.getIntegrationsUnifiedcommunicationsClientapps(opts)
  .then((data) => {
    console.log(`getIntegrationsUnifiedcommunicationsClientapps success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getIntegrationsUnifiedcommunicationsClientapps');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **pageSize** | **Number** | The total page size requested | [optional] [default to 25] |
 **pageNumber** | **Number** | The page number requested | [optional] [default to 1] |
 **sortBy** | **String** | variable name requested to sort by | [optional]  |
 **expand** | **[String]** | variable name requested by expand list | [optional]  |
 **nextPage** | **String** | next page token | [optional]  |
 **previousPage** | **String** | Previous page token | [optional]  |
{: class="table table-striped"}

### Return type

**UnifiedCommunicationsIntegrationListing**

<a name="getIntegrationsUserapps"></a>

# UserAppEntityListing getIntegrationsUserapps(opts)


GET /api/v2/integrations/userapps

List permitted user app integrations for the logged in user

Requires NO permissions:

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.IntegrationsApi();

let opts = { 
  'pageSize': 25, // Number | The total page size requested
  'pageNumber': 1, // Number | The page number requested
  'sortBy': "sortBy_example", // String | variable name requested to sort by
  'expand': ["expand_example"], // [String] | variable name requested by expand list
  'nextPage': "nextPage_example", // String | next page token
  'previousPage': "previousPage_example", // String | Previous page token
  'appHost': "appHost_example" // String | The type of UserApp to filter by
};

apiInstance.getIntegrationsUserapps(opts)
  .then((data) => {
    console.log(`getIntegrationsUserapps success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getIntegrationsUserapps');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **pageSize** | **Number** | The total page size requested | [optional] [default to 25] |
 **pageNumber** | **Number** | The page number requested | [optional] [default to 1] |
 **sortBy** | **String** | variable name requested to sort by | [optional]  |
 **expand** | **[String]** | variable name requested by expand list | [optional]  |
 **nextPage** | **String** | next page token | [optional]  |
 **previousPage** | **String** | Previous page token | [optional]  |
 **appHost** | **String** | The type of UserApp to filter by | [optional]  |
{: class="table table-striped"}

### Return type

**UserAppEntityListing**

<a name="getIntegrationsWebhook"></a>

# Webhook getIntegrationsWebhook(webhookId)


GET /api/v2/integrations/webhooks/{webhookId}

Get a Webhook

Requires ANY permissions:

* webhooks:webhook:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.IntegrationsApi();

let webhookId = "webhookId_example"; // String | The id of the webhook

apiInstance.getIntegrationsWebhook(webhookId)
  .then((data) => {
    console.log(`getIntegrationsWebhook success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getIntegrationsWebhook');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **webhookId** | **String** | The id of the webhook |  |
{: class="table table-striped"}

### Return type

**Webhook**

<a name="getIntegrationsWebhookSchema"></a>

# WebhookSchema getIntegrationsWebhookSchema(webhookId)


GET /api/v2/integrations/webhooks/{webhookId}/schema

Get Webhook Schema from a Webhook

Requires ANY permissions:

* webhooks:webhook:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.IntegrationsApi();

let webhookId = "webhookId_example"; // String | The id of the webhook that the schema belongs to

apiInstance.getIntegrationsWebhookSchema(webhookId)
  .then((data) => {
    console.log(`getIntegrationsWebhookSchema success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getIntegrationsWebhookSchema');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **webhookId** | **String** | The id of the webhook that the schema belongs to |  |
{: class="table table-striped"}

### Return type

**WebhookSchema**

<a name="getIntegrationsWebhooks"></a>

# WebhookEntityListing getIntegrationsWebhooks(opts)


GET /api/v2/integrations/webhooks

List Webhooks

Requires ANY permissions:

* webhooks:webhook:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.IntegrationsApi();

let opts = { 
  'before': "before_example", // String | The cursor that points to the start of the set of entities that has been returned.
  'after': "after_example", // String | The cursor that points to the end of the set of entities that has been returned.
  'pageSize': "pageSize_example" // String | Number of entities to return. Maximum of 200.
};

apiInstance.getIntegrationsWebhooks(opts)
  .then((data) => {
    console.log(`getIntegrationsWebhooks success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getIntegrationsWebhooks');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **before** | **String** | The cursor that points to the start of the set of entities that has been returned. | [optional]  |
 **after** | **String** | The cursor that points to the end of the set of entities that has been returned. | [optional]  |
 **pageSize** | **String** | Number of entities to return. Maximum of 200. | [optional]  |
{: class="table table-striped"}

### Return type

**WebhookEntityListing**

<a name="getIntegrationsZoom202004Meeting"></a>

# ZoomDetailedMeeting getIntegrationsZoom202004Meeting(meetingId, opts)


GET /api/v2/integrations/zoom/202004/meetings/{meetingId}

Get a Zoom meeting.

Get full details on a Zoom meeting

Requires ANY permissions:

* integration:zoomMeetings:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.IntegrationsApi();

let meetingId = "meetingId_example"; // String | Zoom meeting number
let opts = { 
  'zoomAuthorization': "zoomAuthorization_example", // String | Zoom authorization token
  'occurrenceId': "occurrenceId_example" // String | Occurrence ID
};

apiInstance.getIntegrationsZoom202004Meeting(meetingId, opts)
  .then((data) => {
    console.log(`getIntegrationsZoom202004Meeting success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getIntegrationsZoom202004Meeting');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **meetingId** | **String** | Zoom meeting number |  |
 **zoomAuthorization** | **String** | Zoom authorization token | [optional]  |
 **occurrenceId** | **String** | Occurrence ID | [optional]  |
{: class="table table-striped"}

### Return type

**ZoomDetailedMeeting**

<a name="getIntegrationsZoom202004User"></a>

# ZoomUserResponse getIntegrationsZoom202004User(userId, opts)


GET /api/v2/integrations/zoom/202004/users/{userId}

Get a Zoom user.

Get a Zoom user record.

Requires ANY permissions:

* integration:zoomMeetings:view
* integration:zoomPhone:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.IntegrationsApi();

let userId = "userId_example"; // String | Zoom Meetings user ID. Special user ID value `me` returns your own Zoom user data.
let opts = { 
  'zoomAuthorization': "zoomAuthorization_example" // String | Zoom authorization token
};

apiInstance.getIntegrationsZoom202004User(userId, opts)
  .then((data) => {
    console.log(`getIntegrationsZoom202004User success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getIntegrationsZoom202004User');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **userId** | **String** | Zoom Meetings user ID. Special user ID value `me` returns your own Zoom user data. |  |
 **zoomAuthorization** | **String** | Zoom authorization token | [optional]  |
{: class="table table-striped"}

### Return type

**ZoomUserResponse**

<a name="getIntegrationsZoom202004UserMeetings"></a>

# ZoomMeetingEntityListing getIntegrationsZoom202004UserMeetings(userId, opts)


GET /api/v2/integrations/zoom/202004/users/{userId}/meetings

Get meetings for a Zoom user.

Get a list of meetings owned by a given user.

Requires ANY permissions:

* integration:zoomMeetings:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.IntegrationsApi();

let userId = "userId_example"; // String | Zoom Meetings user ID. Special user ID value `me` returns your own Zoom user data.
let opts = { 
  'zoomAuthorization': "zoomAuthorization_example", // String | Zoom authorization token
  'type': "type_example", // String | Zoom meeting type. Possible values: `Scheduled` - This includes all valid past meetings (unexpired), live meetings and upcoming scheduled meetings. It is equivalent to the combined list of `Previous Meetings` and `Upcoming Meetings` displayed in the user's Meetings page on the Zoom Web Portal. `Live` - All the ongoing meetings. `Upcoming` - All upcoming meetings including live meetings.
  'pageSize': 25, // Number | Page size
  'pageNumber': 1 // Number | Page number
};

apiInstance.getIntegrationsZoom202004UserMeetings(userId, opts)
  .then((data) => {
    console.log(`getIntegrationsZoom202004UserMeetings success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getIntegrationsZoom202004UserMeetings');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **userId** | **String** | Zoom Meetings user ID. Special user ID value `me` returns your own Zoom user data. |  |
 **zoomAuthorization** | **String** | Zoom authorization token | [optional]  |
 **type** | **String** | Zoom meeting type. Possible values: `Scheduled` - This includes all valid past meetings (unexpired), live meetings and upcoming scheduled meetings. It is equivalent to the combined list of `Previous Meetings` and `Upcoming Meetings` displayed in the user's Meetings page on the Zoom Web Portal. `Live` - All the ongoing meetings. `Upcoming` - All upcoming meetings including live meetings. | [optional] <br />**Values**: Scheduled, Live, Upcoming |
 **pageSize** | **Number** | Page size | [optional] [default to 25] |
 **pageNumber** | **Number** | Page number | [optional] [default to 1] |
{: class="table table-striped"}

### Return type

**ZoomMeetingEntityListing**

<a name="getIntegrationsZoom202004UserSettings"></a>

# ZoomUserSettingsResponse getIntegrationsZoom202004UserSettings(userId, opts)


GET /api/v2/integrations/zoom/202004/users/{userId}/settings

Get settings for a Zoom user.

Get settings for a Zoom user.

Requires ANY permissions:

* integration:zoomMeetings:view
* integration:zoomPhone:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.IntegrationsApi();

let userId = "userId_example"; // String | Zoom Meetings user ID. Special user ID value `me` returns your own Zoom user data.
let opts = { 
  'zoomAuthorization': "zoomAuthorization_example" // String | Zoom authorization token
};

apiInstance.getIntegrationsZoom202004UserSettings(userId, opts)
  .then((data) => {
    console.log(`getIntegrationsZoom202004UserSettings success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getIntegrationsZoom202004UserSettings');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **userId** | **String** | Zoom Meetings user ID. Special user ID value `me` returns your own Zoom user data. |  |
 **zoomAuthorization** | **String** | Zoom authorization token | [optional]  |
{: class="table table-striped"}

### Return type

**ZoomUserSettingsResponse**

<a name="getIntegrationsZoomAuth"></a>

# IntegrationAuthResponse getIntegrationsZoomAuth()


GET /api/v2/integrations/zoom/auth

Gets a Zoom integration auth for the user.

Requires ANY permissions:

* integration:zoomPhone:view
* integration:zoomMeetings:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.IntegrationsApi();

apiInstance.getIntegrationsZoomAuth()
  .then((data) => {
    console.log(`getIntegrationsZoomAuth success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getIntegrationsZoomAuth');
    console.error(err);
  });
```

### Parameters

This endpoint does not need any parameter.


### Return type

**IntegrationAuthResponse**

<a name="patchIntegration"></a>

# Integration patchIntegration(integrationId, opts)


PATCH /api/v2/integrations/{integrationId}

Update an integration.

Requires ANY permissions:

* integrations:integration:edit

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.IntegrationsApi();

let integrationId = "integrationId_example"; // String | Integration Id
let opts = { 
  'pageSize': 25, // Number | The total page size requested
  'pageNumber': 1, // Number | The page number requested
  'sortBy': "sortBy_example", // String | variable name requested to sort by
  'expand': ["expand_example"], // [String] | variable name requested by expand list
  'nextPage': "nextPage_example", // String | next page token
  'previousPage': "previousPage_example", // String | Previous page token
  'body': {} // Object | Integration Update
};

apiInstance.patchIntegration(integrationId, opts)
  .then((data) => {
    console.log(`patchIntegration success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling patchIntegration');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **integrationId** | **String** | Integration Id |  |
 **pageSize** | **Number** | The total page size requested | [optional] [default to 25] |
 **pageNumber** | **Number** | The page number requested | [optional] [default to 1] |
 **sortBy** | **String** | variable name requested to sort by | [optional]  |
 **expand** | **[String]** | variable name requested by expand list | [optional]  |
 **nextPage** | **String** | next page token | [optional]  |
 **previousPage** | **String** | Previous page token | [optional]  |
 **body** | **Object** | Integration Update | [optional]  |
{: class="table table-striped"}

### Return type

**Integration**

<a name="patchIntegrationsAction"></a>

# Action patchIntegrationsAction(actionId, body)


PATCH /api/v2/integrations/actions/{actionId}

Patch an Action

Requires ANY permissions:

* integrations:action:edit

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.IntegrationsApi();

let actionId = "actionId_example"; // String | actionId
let body = {}; // Object | Input used to patch the Action.

apiInstance.patchIntegrationsAction(actionId, body)
  .then((data) => {
    console.log(`patchIntegrationsAction success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling patchIntegrationsAction');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **actionId** | **String** | actionId |  |
 **body** | **Object** | Input used to patch the Action. |  |
{: class="table table-striped"}

### Return type

**Action**

<a name="patchIntegrationsActionDraft"></a>

# Action patchIntegrationsActionDraft(actionId, body)


PATCH /api/v2/integrations/actions/{actionId}/draft

Update an existing Draft

Requires ANY permissions:

* integrations:action:edit

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.IntegrationsApi();

let actionId = "actionId_example"; // String | actionId
let body = {}; // Object | Input used to patch the Action Draft.

apiInstance.patchIntegrationsActionDraft(actionId, body)
  .then((data) => {
    console.log(`patchIntegrationsActionDraft success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling patchIntegrationsActionDraft');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **actionId** | **String** | actionId |  |
 **body** | **Object** | Input used to patch the Action Draft. |  |
{: class="table table-striped"}

### Return type

**Action**

<a name="patchIntegrationsWebhook"></a>

# Webhook patchIntegrationsWebhook(webhookId, body)


PATCH /api/v2/integrations/webhooks/{webhookId}

Update a Webhook

Requires ANY permissions:

* webhooks:webhook:edit

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.IntegrationsApi();

let webhookId = "webhookId_example"; // String | The id of the webhook
let body = {}; // Object | Webhook Update Fields

apiInstance.patchIntegrationsWebhook(webhookId, body)
  .then((data) => {
    console.log(`patchIntegrationsWebhook success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling patchIntegrationsWebhook');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **webhookId** | **String** | The id of the webhook |  |
 **body** | **Object** | Webhook Update Fields |  |
{: class="table table-striped"}

### Return type

**Webhook**

<a name="postIntegrations"></a>

# Integration postIntegrations(opts)


POST /api/v2/integrations

Create an integration.

Requires ANY permissions:

* integrations:integration:add

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.IntegrationsApi();

let opts = { 
  'body': {} // Object | Integration
};

apiInstance.postIntegrations(opts)
  .then((data) => {
    console.log(`postIntegrations success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling postIntegrations');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **body** | **Object** | Integration | [optional]  |
{: class="table table-striped"}

### Return type

**Integration**

<a name="postIntegrationsActionDraft"></a>

# Action postIntegrationsActionDraft(actionId)


POST /api/v2/integrations/actions/{actionId}/draft

Create a new Draft from existing Action

Requires ANY permissions:

* integrations:action:edit

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.IntegrationsApi();

let actionId = "actionId_example"; // String | actionId

apiInstance.postIntegrationsActionDraft(actionId)
  .then((data) => {
    console.log(`postIntegrationsActionDraft success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling postIntegrationsActionDraft');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **actionId** | **String** | actionId |  |
{: class="table table-striped"}

### Return type

**Action**

<a name="postIntegrationsActionDraftPublish"></a>

# Action postIntegrationsActionDraftPublish(actionId, body)


POST /api/v2/integrations/actions/{actionId}/draft/publish

Publish a Draft and make it the active Action configuration

Requires ANY permissions:

* integrations:action:edit

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.IntegrationsApi();

let actionId = "actionId_example"; // String | actionId
let body = {}; // Object | Input used to patch the Action.

apiInstance.postIntegrationsActionDraftPublish(actionId, body)
  .then((data) => {
    console.log(`postIntegrationsActionDraftPublish success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling postIntegrationsActionDraftPublish');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **actionId** | **String** | actionId |  |
 **body** | **Object** | Input used to patch the Action. |  |
{: class="table table-striped"}

### Return type

**Action**

<a name="postIntegrationsActionDraftTest"></a>

# TestExecutionResult postIntegrationsActionDraftTest(actionId, body)


POST /api/v2/integrations/actions/{actionId}/draft/test

Test the execution of a draft. Responses will show execution steps broken out with intermediate results to help in debugging.

Requires ANY permissions:

* integrations:action:execute

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.IntegrationsApi();

let actionId = "actionId_example"; // String | actionId
let body = null; // {String: Object} | Map of parameters used for variable substitution.

apiInstance.postIntegrationsActionDraftTest(actionId, body)
  .then((data) => {
    console.log(`postIntegrationsActionDraftTest success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling postIntegrationsActionDraftTest');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **actionId** | **String** | actionId |  |
 **body** | **{String: Object}** | Map of parameters used for variable substitution. |  |
{: class="table table-striped"}

### Return type

**TestExecutionResult**

<a name="postIntegrationsActionExecute"></a>

# **Object** postIntegrationsActionExecute(actionId, body)


POST /api/v2/integrations/actions/{actionId}/execute

Execute Action and return response from 3rd party.  Responses will follow the schemas defined on the Action for success and error.

Requires ANY permissions:

* integrations:action:execute
* bridge:actions:execute

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.IntegrationsApi();

let actionId = "actionId_example"; // String | actionId
let body = null; // {String: Object} | Map of parameters used for variable substitution.

apiInstance.postIntegrationsActionExecute(actionId, body)
  .then((data) => {
    console.log(`postIntegrationsActionExecute success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling postIntegrationsActionExecute');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **actionId** | **String** | actionId |  |
 **body** | **{String: Object}** | Map of parameters used for variable substitution. |  |
{: class="table table-striped"}

### Return type

**Object**

<a name="postIntegrationsActionTest"></a>

# TestExecutionResult postIntegrationsActionTest(actionId, body)


POST /api/v2/integrations/actions/{actionId}/test

Test the execution of an action. Responses will show execution steps broken out with intermediate results to help in debugging.

Requires ANY permissions:

* integrations:action:execute
* bridge:actions:execute

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.IntegrationsApi();

let actionId = "actionId_example"; // String | actionId
let body = null; // {String: Object} | Map of parameters used for variable substitution.

apiInstance.postIntegrationsActionTest(actionId, body)
  .then((data) => {
    console.log(`postIntegrationsActionTest success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling postIntegrationsActionTest');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **actionId** | **String** | actionId |  |
 **body** | **{String: Object}** | Map of parameters used for variable substitution. |  |
{: class="table table-striped"}

### Return type

**TestExecutionResult**

<a name="postIntegrationsActions"></a>

# Action postIntegrationsActions(body)


POST /api/v2/integrations/actions

Create a new Action

Requires ANY permissions:

* integrations:action:add

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.IntegrationsApi();

let body = {}; // Object | Input used to create Action.

apiInstance.postIntegrationsActions(body)
  .then((data) => {
    console.log(`postIntegrationsActions success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling postIntegrationsActions');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **body** | **Object** | Input used to create Action. |  |
{: class="table table-striped"}

### Return type

**Action**

<a name="postIntegrationsActionsDrafts"></a>

# Action postIntegrationsActionsDrafts(body)


POST /api/v2/integrations/actions/drafts

Create a new Draft

Requires ANY permissions:

* integrations:action:add

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.IntegrationsApi();

let body = {}; // Object | Input used to create Action Draft.

apiInstance.postIntegrationsActionsDrafts(body)
  .then((data) => {
    console.log(`postIntegrationsActionsDrafts success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling postIntegrationsActionsDrafts');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **body** | **Object** | Input used to create Action Draft. |  |
{: class="table table-striped"}

### Return type

**Action**

<a name="postIntegrationsCredentials"></a>

# CredentialInfo postIntegrationsCredentials(opts)


POST /api/v2/integrations/credentials

Create a set of credentials

Requires NO permissions:

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.IntegrationsApi();

let opts = { 
  'body': {} // Object | Credential
};

apiInstance.postIntegrationsCredentials(opts)
  .then((data) => {
    console.log(`postIntegrationsCredentials success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling postIntegrationsCredentials');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **body** | **Object** | Credential | [optional]  |
{: class="table table-striped"}

### Return type

**CredentialInfo**

<a name="postIntegrationsMicrosoftteamsAuth"></a>

# IntegrationAuthResponse postIntegrationsMicrosoftteamsAuth(body)


POST /api/v2/integrations/microsoftteams/auth

Create a Microsoft Teams integration auth for the user.

This attaches a Microsoft Teams OAuth session for your user.  All external calls to Microsoft Teams will be made on behalf of this user.

Requires ANY permissions:

* integration:microsoftTeams:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.IntegrationsApi();

let body = {}; // Object | integrationAuthRequest

apiInstance.postIntegrationsMicrosoftteamsAuth(body)
  .then((data) => {
    console.log(`postIntegrationsMicrosoftteamsAuth success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling postIntegrationsMicrosoftteamsAuth');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **body** | **Object** | integrationAuthRequest |  |
{: class="table table-striped"}

### Return type

**IntegrationAuthResponse**

<a name="postIntegrationsSalesforceServicecloudvoiceLogin"></a>

# **Object** postIntegrationsSalesforceServicecloudvoiceLogin(body)


POST /api/v2/integrations/salesforce/servicecloudvoice/login

Login

Requires ALL permissions:

* integration:salesforceServiceCloudVoice:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.IntegrationsApi();

let body = {}; // Object | 

apiInstance.postIntegrationsSalesforceServicecloudvoiceLogin(body)
  .then((data) => {
    console.log(`postIntegrationsSalesforceServicecloudvoiceLogin success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling postIntegrationsSalesforceServicecloudvoiceLogin');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **body** | **Object** |  |  |
{: class="table table-striped"}

### Return type

**Object**

<a name="postIntegrationsSalesforceServicecloudvoiceVoicecallrecord"></a>

# VoiceCallRecordAsyncJob postIntegrationsSalesforceServicecloudvoiceVoicecallrecord(body)


POST /api/v2/integrations/salesforce/servicecloudvoice/voicecallrecord

Create a voice call record in Salesforce

Requires ALL permissions:

* integration:salesforceServiceCloudVoice:add

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.IntegrationsApi();

let body = {}; // Object | 

apiInstance.postIntegrationsSalesforceServicecloudvoiceVoicecallrecord(body)
  .then((data) => {
    console.log(`postIntegrationsSalesforceServicecloudvoiceVoicecallrecord success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling postIntegrationsSalesforceServicecloudvoiceVoicecallrecord');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **body** | **Object** |  |  |
{: class="table table-striped"}

### Return type

**VoiceCallRecordAsyncJob**

<a name="postIntegrationsSalesforceServicecloudvoiceVoicecallrecordUpdate"></a>

# VoiceCallRecordAsyncJob postIntegrationsSalesforceServicecloudvoiceVoicecallrecordUpdate(body)


POST /api/v2/integrations/salesforce/servicecloudvoice/voicecallrecord/update

Update a voice call record in Salesforce

Requires ALL permissions:

* integration:salesforceServiceCloudVoice:edit

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.IntegrationsApi();

let body = {}; // Object | 

apiInstance.postIntegrationsSalesforceServicecloudvoiceVoicecallrecordUpdate(body)
  .then((data) => {
    console.log(`postIntegrationsSalesforceServicecloudvoiceVoicecallrecordUpdate success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling postIntegrationsSalesforceServicecloudvoiceVoicecallrecordUpdate');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **body** | **Object** |  |  |
{: class="table table-striped"}

### Return type

**VoiceCallRecordAsyncJob**

<a name="postIntegrationsSpeechNuanceNuanceIntegrationIdBotJobs"></a>

# AsyncJob postIntegrationsSpeechNuanceNuanceIntegrationIdBotJobs(nuanceIntegrationId, botId, opts)


POST /api/v2/integrations/speech/nuance/{nuanceIntegrationId}/bots/{botId}/jobs

Get a Nuance bot in the specified Integration asynchronously

postIntegrationsSpeechNuanceNuanceIntegrationIdBotJobs is a preview method and is subject to both breaking and non-breaking changes at any time without notice

Requires ANY permissions:

* integrations:integration:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.IntegrationsApi();

let nuanceIntegrationId = "nuanceIntegrationId_example"; // String | The integration ID for this group of bots
let botId = "botId_example"; // String | The Nuance bot ID
let opts = { 
  'expand': ["expand_example"], // [String] | expand
  'body': "body_example" // String | targetChannel
};

apiInstance.postIntegrationsSpeechNuanceNuanceIntegrationIdBotJobs(nuanceIntegrationId, botId, opts)
  .then((data) => {
    console.log(`postIntegrationsSpeechNuanceNuanceIntegrationIdBotJobs success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling postIntegrationsSpeechNuanceNuanceIntegrationIdBotJobs');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **nuanceIntegrationId** | **String** | The integration ID for this group of bots |  |
 **botId** | **String** | The Nuance bot ID |  |
 **expand** | **[String]** | expand | [optional] <br />**Values**: variables, transferNodes, channels, locales |
 **body** | **String** | targetChannel | [optional]  |
{: class="table table-striped"}

### Return type

**AsyncJob**

<a name="postIntegrationsSpeechNuanceNuanceIntegrationIdBotsJobs"></a>

# AsyncJob postIntegrationsSpeechNuanceNuanceIntegrationIdBotsJobs(nuanceIntegrationId, opts)


POST /api/v2/integrations/speech/nuance/{nuanceIntegrationId}/bots/jobs

Get a list of Nuance bots in the specified Integration asynchronously

postIntegrationsSpeechNuanceNuanceIntegrationIdBotsJobs is a preview method and is subject to both breaking and non-breaking changes at any time without notice

Requires ANY permissions:

* integrations:integration:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.IntegrationsApi();

let nuanceIntegrationId = "nuanceIntegrationId_example"; // String | The integration ID for this group of bots
let opts = { 
  'pageNumber': 1, // Number | Page number
  'pageSize': 25, // Number | Page size
  'onlyRegisteredBots': true // Boolean | Limit bots to the ones configured for Genesys Cloud usage
};

apiInstance.postIntegrationsSpeechNuanceNuanceIntegrationIdBotsJobs(nuanceIntegrationId, opts)
  .then((data) => {
    console.log(`postIntegrationsSpeechNuanceNuanceIntegrationIdBotsJobs success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling postIntegrationsSpeechNuanceNuanceIntegrationIdBotsJobs');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **nuanceIntegrationId** | **String** | The integration ID for this group of bots |  |
 **pageNumber** | **Number** | Page number | [optional] [default to 1] |
 **pageSize** | **Number** | Page size | [optional] [default to 25] |
 **onlyRegisteredBots** | **Boolean** | Limit bots to the ones configured for Genesys Cloud usage | [optional] [default to true] |
{: class="table table-striped"}

### Return type

**AsyncJob**

<a name="postIntegrationsSpeechNuanceNuanceIntegrationIdBotsLaunchValidate"></a>

# void postIntegrationsSpeechNuanceNuanceIntegrationIdBotsLaunchValidate(nuanceIntegrationId, settings)


POST /api/v2/integrations/speech/nuance/{nuanceIntegrationId}/bots/launch/validate

Try out a single credential for a Nuance bot to know if the secret is correct

postIntegrationsSpeechNuanceNuanceIntegrationIdBotsLaunchValidate is a preview method and is subject to both breaking and non-breaking changes at any time without notice

Requires ANY permissions:

* integrations:integration:edit

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.IntegrationsApi();

let nuanceIntegrationId = "nuanceIntegrationId_example"; // String | The integration ID for this group of bots
let settings = {}; // Object | 

apiInstance.postIntegrationsSpeechNuanceNuanceIntegrationIdBotsLaunchValidate(nuanceIntegrationId, settings)
  .then(() => {
    console.log('postIntegrationsSpeechNuanceNuanceIntegrationIdBotsLaunchValidate returned successfully.');
  })
  .catch((err) => {
    console.log('There was a failure calling postIntegrationsSpeechNuanceNuanceIntegrationIdBotsLaunchValidate');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **nuanceIntegrationId** | **String** | The integration ID for this group of bots |  |
 **settings** | **Object** |  |  |
{: class="table table-striped"}

### Return type

void (no response body)

<a name="postIntegrationsUnifiedcommunicationAuth"></a>

# IntegrationAuthResponse postIntegrationsUnifiedcommunicationAuth(ucIntegrationId, body)


POST /api/v2/integrations/unifiedcommunications/{ucIntegrationId}/auth

Creates a 3rd-party integration auth for the user.

Requires ANY permissions:

* integration:unifiedCommunications:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.IntegrationsApi();

let ucIntegrationId = "ucIntegrationId_example"; // String | UC Integration ID
let body = {}; // Object | integrationAuthRequest

apiInstance.postIntegrationsUnifiedcommunicationAuth(ucIntegrationId, body)
  .then((data) => {
    console.log(`postIntegrationsUnifiedcommunicationAuth success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling postIntegrationsUnifiedcommunicationAuth');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **ucIntegrationId** | **String** | UC Integration ID |  |
 **body** | **Object** | integrationAuthRequest |  |
{: class="table table-striped"}

### Return type

**IntegrationAuthResponse**

<a name="postIntegrationsUnifiedcommunicationMeetings"></a>

# MeetingResponse postIntegrationsUnifiedcommunicationMeetings(ucIntegrationId, opts)


POST /api/v2/integrations/unifiedcommunications/{ucIntegrationId}/meetings

Create a meeting.

Create a meeting.

Requires ANY permissions:

* integration:unifiedCommunications:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.IntegrationsApi();

let ucIntegrationId = "ucIntegrationId_example"; // String | 3rd Party Service Type
let opts = { 
  'body': {} // Object | 
};

apiInstance.postIntegrationsUnifiedcommunicationMeetings(ucIntegrationId, opts)
  .then((data) => {
    console.log(`postIntegrationsUnifiedcommunicationMeetings success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling postIntegrationsUnifiedcommunicationMeetings');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **ucIntegrationId** | **String** | 3rd Party Service Type |  |
 **body** | **Object** |  | [optional]  |
{: class="table table-striped"}

### Return type

**MeetingResponse**

<a name="postIntegrationsUnifiedcommunicationsEmail"></a>

# EmailResponse postIntegrationsUnifiedcommunicationsEmail(opts)


POST /api/v2/integrations/unifiedcommunications/email

Send an email.

Send an email.

Requires ANY permissions:

* integration:gcuccInternal:write

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.IntegrationsApi();

let opts = { 
  'body': {} // Object | 
};

apiInstance.postIntegrationsUnifiedcommunicationsEmail(opts)
  .then((data) => {
    console.log(`postIntegrationsUnifiedcommunicationsEmail success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling postIntegrationsUnifiedcommunicationsEmail');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **body** | **Object** |  | [optional]  |
{: class="table table-striped"}

### Return type

**EmailResponse**

<a name="postIntegrationsWebhookEvents"></a>

# WebhookInvocationResponse postIntegrationsWebhookEvents(tokenId, body)


POST /api/v2/integrations/webhooks/{tokenId}/events

Invoke Webhook

Requires NO permissions:

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

let apiInstance = new platformClient.IntegrationsApi();

let tokenId = "tokenId_example"; // String | The token of the webhook to be invoked
let body = null; // {String: Object} | Webhook Invocation Payload

apiInstance.postIntegrationsWebhookEvents(tokenId, body)
  .then((data) => {
    console.log(`postIntegrationsWebhookEvents success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling postIntegrationsWebhookEvents');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **tokenId** | **String** | The token of the webhook to be invoked |  |
 **body** | **{String: Object}** | Webhook Invocation Payload |  |
{: class="table table-striped"}

### Return type

**WebhookInvocationResponse**

<a name="postIntegrationsWebhooks"></a>

# Webhook postIntegrationsWebhooks(body)


POST /api/v2/integrations/webhooks

Create Webhook

Requires ANY permissions:

* webhooks:webhook:add

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.IntegrationsApi();

let body = {}; // Object | Create Webhook Request

apiInstance.postIntegrationsWebhooks(body)
  .then((data) => {
    console.log(`postIntegrationsWebhooks success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling postIntegrationsWebhooks');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **body** | **Object** | Create Webhook Request |  |
{: class="table table-striped"}

### Return type

**Webhook**

<a name="postIntegrationsZoom202004MeetingSignature"></a>

# ZoomSignatureResponse postIntegrationsZoom202004MeetingSignature(meetingId, role)


POST /api/v2/integrations/zoom/202004/meetings/{meetingId}/signature

Generate a Zoom meeting signature.

Generate a meeting verification signature

Requires ANY permissions:

* integration:zoomMeetings:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.IntegrationsApi();

let meetingId = "meetingId_example"; // String | Zoom meeting number
let role = "role_example"; // String | Zoom meeting role

apiInstance.postIntegrationsZoom202004MeetingSignature(meetingId, role)
  .then((data) => {
    console.log(`postIntegrationsZoom202004MeetingSignature success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling postIntegrationsZoom202004MeetingSignature');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **meetingId** | **String** | Zoom meeting number |  |
 **role** | **String** | Zoom meeting role |  |
{: class="table table-striped"}

### Return type

**ZoomSignatureResponse**

<a name="postIntegrationsZoom202004UserMeetings"></a>

# ZoomDetailedMeeting postIntegrationsZoom202004UserMeetings(userId, opts)


POST /api/v2/integrations/zoom/202004/users/{userId}/meetings

Create meeting for a Zoom user.

Create a new meeting for a Zoom user.

Requires ANY permissions:

* integration:zoomMeetings:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.IntegrationsApi();

let userId = "userId_example"; // String | Zoom Meetings user ID. Special user ID value `me` returns your own Zoom user data.
let opts = { 
  'body': {} // Object | meetingRequest
};

apiInstance.postIntegrationsZoom202004UserMeetings(userId, opts)
  .then((data) => {
    console.log(`postIntegrationsZoom202004UserMeetings success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling postIntegrationsZoom202004UserMeetings');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **userId** | **String** | Zoom Meetings user ID. Special user ID value `me` returns your own Zoom user data. |  |
 **body** | **Object** | meetingRequest | [optional]  |
{: class="table table-striped"}

### Return type

**ZoomDetailedMeeting**

<a name="postIntegrationsZoomAuth"></a>

# IntegrationAuthResponse postIntegrationsZoomAuth(body)


POST /api/v2/integrations/zoom/auth

Create a Zoom integration auth for the user.

This attaches a Zoom OAuth session for your user.  All external calls to Zoom will be made on behalf of this user.

Requires ANY permissions:

* integration:zoomPhone:view
* integration:zoomMeetings:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.IntegrationsApi();

let body = {}; // Object | integrationAuthRequest

apiInstance.postIntegrationsZoomAuth(body)
  .then((data) => {
    console.log(`postIntegrationsZoomAuth success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling postIntegrationsZoomAuth');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **body** | **Object** | integrationAuthRequest |  |
{: class="table table-striped"}

### Return type

**IntegrationAuthResponse**

<a name="putIntegrationConfigCurrent"></a>

# IntegrationConfiguration putIntegrationConfigCurrent(integrationId, opts)


PUT /api/v2/integrations/{integrationId}/config/current

Update integration configuration.

Requires ANY permissions:

* integrations:integration:edit

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.IntegrationsApi();

let integrationId = "integrationId_example"; // String | Integration Id
let opts = { 
  'body': {} // Object | Integration Configuration
};

apiInstance.putIntegrationConfigCurrent(integrationId, opts)
  .then((data) => {
    console.log(`putIntegrationConfigCurrent success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling putIntegrationConfigCurrent');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **integrationId** | **String** | Integration Id |  |
 **body** | **Object** | Integration Configuration | [optional]  |
{: class="table table-striped"}

### Return type

**IntegrationConfiguration**

<a name="putIntegrationsBotconnectorIntegrationIdBots"></a>

# void putIntegrationsBotconnectorIntegrationIdBots(integrationId, botList)


PUT /api/v2/integrations/botconnector/{integrationId}/bots

Set a list of botConnector bots plus versions for this integration

Requires ANY permissions:

* integration:botconnector:edit

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.IntegrationsApi();

let integrationId = "integrationId_example"; // String | The integration ID for this group of bots
let botList = {}; // Object | 

apiInstance.putIntegrationsBotconnectorIntegrationIdBots(integrationId, botList)
  .then(() => {
    console.log('putIntegrationsBotconnectorIntegrationIdBots returned successfully.');
  })
  .catch((err) => {
    console.log('There was a failure calling putIntegrationsBotconnectorIntegrationIdBots');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **integrationId** | **String** | The integration ID for this group of bots |  |
 **botList** | **Object** |  |  |
{: class="table table-striped"}

### Return type

void (no response body)

<a name="putIntegrationsCredential"></a>

# CredentialInfo putIntegrationsCredential(credentialId, opts)


PUT /api/v2/integrations/credentials/{credentialId}

Update a set of credentials

Requires NO permissions:

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.IntegrationsApi();

let credentialId = "credentialId_example"; // String | Credential ID
let opts = { 
  'body': {} // Object | Credential
};

apiInstance.putIntegrationsCredential(credentialId, opts)
  .then((data) => {
    console.log(`putIntegrationsCredential success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling putIntegrationsCredential');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **credentialId** | **String** | Credential ID |  |
 **body** | **Object** | Credential | [optional]  |
{: class="table table-striped"}

### Return type

**CredentialInfo**

<a name="putIntegrationsSpeechNuanceNuanceIntegrationIdBotsLaunchSettings"></a>

# void putIntegrationsSpeechNuanceNuanceIntegrationIdBotsLaunchSettings(nuanceIntegrationId, settings)


PUT /api/v2/integrations/speech/nuance/{nuanceIntegrationId}/bots/launch/settings

Update the Nuance bot list for the specific bots made available to Genesys Cloud in the specified Integration

putIntegrationsSpeechNuanceNuanceIntegrationIdBotsLaunchSettings is a preview method and is subject to both breaking and non-breaking changes at any time without notice

Requires ANY permissions:

* integrations:integration:edit

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.IntegrationsApi();

let nuanceIntegrationId = "nuanceIntegrationId_example"; // String | The integration ID for this group of bots
let settings = {}; // Object | 

apiInstance.putIntegrationsSpeechNuanceNuanceIntegrationIdBotsLaunchSettings(nuanceIntegrationId, settings)
  .then(() => {
    console.log('putIntegrationsSpeechNuanceNuanceIntegrationIdBotsLaunchSettings returned successfully.');
  })
  .catch((err) => {
    console.log('There was a failure calling putIntegrationsSpeechNuanceNuanceIntegrationIdBotsLaunchSettings');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **nuanceIntegrationId** | **String** | The integration ID for this group of bots |  |
 **settings** | **Object** |  |  |
{: class="table table-striped"}

### Return type

void (no response body)

<a name="putIntegrationsSpeechTtsSettings"></a>

# TtsSettings putIntegrationsSpeechTtsSettings(body)


PUT /api/v2/integrations/speech/tts/settings

Update TTS settings for an org

Requires ANY permissions:

* integrations:integration:edit

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.IntegrationsApi();

let body = {}; // Object | Updated TtsSettings

apiInstance.putIntegrationsSpeechTtsSettings(body)
  .then((data) => {
    console.log(`putIntegrationsSpeechTtsSettings success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling putIntegrationsSpeechTtsSettings');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **body** | **Object** | Updated TtsSettings |  |
{: class="table table-striped"}

### Return type

**TtsSettings**

<a name="putIntegrationsUnifiedcommunicationThirdpartypresences"></a>

# **&#39;String&#39;** putIntegrationsUnifiedcommunicationThirdpartypresences(ucIntegrationId, body)


PUT /api/v2/integrations/unifiedcommunications/{ucIntegrationId}/thirdpartypresences

Bulk integration presence ingestion

This endpoint accepts bulk presence updates from a 3rd-party presence integration and maps the 3rd-party user to a Genesys Cloud user via the matching email address. The 3rd-party presence value will be mapped to a Genesys Cloud organization presence definition value.

Requires ANY permissions:

* integration:presence:edit

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.IntegrationsApi();

let ucIntegrationId = "ucIntegrationId_example"; // String | UC Integration ID
let body = [{}]; // Object | List of User presences

apiInstance.putIntegrationsUnifiedcommunicationThirdpartypresences(ucIntegrationId, body)
  .then((data) => {
    console.log(`putIntegrationsUnifiedcommunicationThirdpartypresences success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling putIntegrationsUnifiedcommunicationThirdpartypresences');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **ucIntegrationId** | **String** | UC Integration ID |  |
 **body** | **Object** | List of User presences |  |
{: class="table table-striped"}

### Return type

**&#39;String&#39;**

<a name="putIntegrationsWebhookSchema"></a>

# WebhookSchema putIntegrationsWebhookSchema(webhookId, body)


PUT /api/v2/integrations/webhooks/{webhookId}/schema

Add/replace Webhook Schema on a Webhook

Requires ANY permissions:

* webhooks:webhook:edit

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.IntegrationsApi();

let webhookId = "webhookId_example"; // String | The id of the webhook that the schema belongs to
let body = {}; // Object | WebhookSchema

apiInstance.putIntegrationsWebhookSchema(webhookId, body)
  .then((data) => {
    console.log(`putIntegrationsWebhookSchema success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling putIntegrationsWebhookSchema');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **webhookId** | **String** | The id of the webhook that the schema belongs to |  |
 **body** | **Object** | WebhookSchema |  |
{: class="table table-striped"}

### Return type

**WebhookSchema**

