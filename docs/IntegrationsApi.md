# IntegrationsApi

# platformClient.IntegrationsApi

All URIs are relative to *https://api.mypurecloud.com*

| Method | HTTP request | Description |
| ------------- | ------------- | ------------- |
[**deleteIntegration**](IntegrationsApi#deleteIntegration) | **DELETE** /api/v2/integrations/{integrationId} | Delete integration.
[**deleteIntegrationsAction**](IntegrationsApi#deleteIntegrationsAction) | **DELETE** /api/v2/integrations/actions/{actionId} | Delete an Action
[**deleteIntegrationsActionDraft**](IntegrationsApi#deleteIntegrationsActionDraft) | **DELETE** /api/v2/integrations/actions/{actionId}/draft | Delete a Draft
[**deleteIntegrationsCredential**](IntegrationsApi#deleteIntegrationsCredential) | **DELETE** /api/v2/integrations/credentials/{credentialId} | Delete a set of credentials
[**getIntegration**](IntegrationsApi#getIntegration) | **GET** /api/v2/integrations/{integrationId} | Get integration.
[**getIntegrationConfigCurrent**](IntegrationsApi#getIntegrationConfigCurrent) | **GET** /api/v2/integrations/{integrationId}/config/current | Get integration configuration.
[**getIntegrations**](IntegrationsApi#getIntegrations) | **GET** /api/v2/integrations | List integrations
[**getIntegrationsAction**](IntegrationsApi#getIntegrationsAction) | **GET** /api/v2/integrations/actions/{actionId} | Retrieves a single Action matching id.
[**getIntegrationsActionDraft**](IntegrationsApi#getIntegrationsActionDraft) | **GET** /api/v2/integrations/actions/{actionId}/draft | Retrieve a Draft
[**getIntegrationsActionDraftFunction**](IntegrationsApi#getIntegrationsActionDraftFunction) | **GET** /api/v2/integrations/actions/{actionId}/draft/function | Get draft function settings for Action
[**getIntegrationsActionDraftSchema**](IntegrationsApi#getIntegrationsActionDraftSchema) | **GET** /api/v2/integrations/actions/{actionId}/draft/schemas/{fileName} | Retrieve schema for a Draft based on filename.
[**getIntegrationsActionDraftTemplate**](IntegrationsApi#getIntegrationsActionDraftTemplate) | **GET** /api/v2/integrations/actions/{actionId}/draft/templates/{fileName} | Retrieve templates for a Draft based on filename.
[**getIntegrationsActionDraftValidation**](IntegrationsApi#getIntegrationsActionDraftValidation) | **GET** /api/v2/integrations/actions/{actionId}/draft/validation | Validate current Draft configuration.
[**getIntegrationsActionFunction**](IntegrationsApi#getIntegrationsActionFunction) | **GET** /api/v2/integrations/actions/{actionId}/function | Get published function settings for Action
[**getIntegrationsActionSchema**](IntegrationsApi#getIntegrationsActionSchema) | **GET** /api/v2/integrations/actions/{actionId}/schemas/{fileName} | Retrieve schema for an action based on filename.
[**getIntegrationsActionTemplate**](IntegrationsApi#getIntegrationsActionTemplate) | **GET** /api/v2/integrations/actions/{actionId}/templates/{fileName} | Retrieve text of templates for an action based on filename.
[**getIntegrationsActions**](IntegrationsApi#getIntegrationsActions) | **GET** /api/v2/integrations/actions | Retrieves all actions associated with filters passed in via query param.
[**getIntegrationsActionsCategories**](IntegrationsApi#getIntegrationsActionsCategories) | **GET** /api/v2/integrations/actions/categories | Retrieves all categories of available Actions
[**getIntegrationsActionsCertificates**](IntegrationsApi#getIntegrationsActionsCertificates) | **GET** /api/v2/integrations/actions/certificates | Retrieves the available mTLS client certificates in use. This endpoint will return inconsistent results while a certificate rotation is in progress.
[**getIntegrationsActionsCertificatesTruststore**](IntegrationsApi#getIntegrationsActionsCertificatesTruststore) | **GET** /api/v2/integrations/actions/certificates/truststore | Retrieves basic info about trusted root CA certificates
[**getIntegrationsActionsDrafts**](IntegrationsApi#getIntegrationsActionsDrafts) | **GET** /api/v2/integrations/actions/drafts | Retrieves all action drafts associated with the filters passed in via query param.
[**getIntegrationsActionsFunctionsRuntimes**](IntegrationsApi#getIntegrationsActionsFunctionsRuntimes) | **GET** /api/v2/integrations/actions/functions/runtimes | Get action function settings for Action
[**getIntegrationsBotconnectorBot**](IntegrationsApi#getIntegrationsBotconnectorBot) | **GET** /api/v2/integrations/botconnectors/{integrationId}/bots/{botId} | Get a specific Bot details
[**getIntegrationsBotconnectorBots**](IntegrationsApi#getIntegrationsBotconnectorBots) | **GET** /api/v2/integrations/botconnectors/{integrationId}/bots | Get the list of bots for this integration.
[**getIntegrationsBotconnectorBotsSummaries**](IntegrationsApi#getIntegrationsBotconnectorBotsSummaries) | **GET** /api/v2/integrations/botconnectors/{integrationId}/bots/summaries | Get the summary list of bots for this integration.
[**getIntegrationsBotconnectorIntegrationIdBot**](IntegrationsApi#getIntegrationsBotconnectorIntegrationIdBot) | **GET** /api/v2/integrations/botconnector/{integrationId}/bots/{botId} | Get a specific botConnector bot, plus versions, for this integration
[**getIntegrationsBotconnectorIntegrationIdBotVersions**](IntegrationsApi#getIntegrationsBotconnectorIntegrationIdBotVersions) | **GET** /api/v2/integrations/botconnector/{integrationId}/bots/{botId}/versions | Get a list of bot versions for a bot
[**getIntegrationsBotconnectorIntegrationIdBots**](IntegrationsApi#getIntegrationsBotconnectorIntegrationIdBots) | **GET** /api/v2/integrations/botconnector/{integrationId}/bots | Get a list of botConnector bots for this integration
[**getIntegrationsBotconnectorIntegrationIdBotsSummaries**](IntegrationsApi#getIntegrationsBotconnectorIntegrationIdBotsSummaries) | **GET** /api/v2/integrations/botconnector/{integrationId}/bots/summaries | Get a summary list of botConnector bots for this integration
[**getIntegrationsClientapps**](IntegrationsApi#getIntegrationsClientapps) | **GET** /api/v2/integrations/clientapps | List permitted client app integrations for the logged in user
[**getIntegrationsClientappsUnifiedcommunications**](IntegrationsApi#getIntegrationsClientappsUnifiedcommunications) | **GET** /api/v2/integrations/clientapps/unifiedcommunications | UC integration client application configuration.
[**getIntegrationsCredential**](IntegrationsApi#getIntegrationsCredential) | **GET** /api/v2/integrations/credentials/{credentialId} | Get a single credential with sensitive fields redacted
[**getIntegrationsCredentials**](IntegrationsApi#getIntegrationsCredentials) | **GET** /api/v2/integrations/credentials | List multiple sets of credentials
[**getIntegrationsCredentialsListing**](IntegrationsApi#getIntegrationsCredentialsListing) | **GET** /api/v2/integrations/credentials/listing | List multiple sets of credentials using cursor-based paging
[**getIntegrationsCredentialsTypes**](IntegrationsApi#getIntegrationsCredentialsTypes) | **GET** /api/v2/integrations/credentials/types | List all credential types
[**getIntegrationsSpeechAudioconnector**](IntegrationsApi#getIntegrationsSpeechAudioconnector) | **GET** /api/v2/integrations/speech/audioconnector | Get a list of Audio Connector integrations
[**getIntegrationsSpeechAudioconnectorIntegrationId**](IntegrationsApi#getIntegrationsSpeechAudioconnectorIntegrationId) | **GET** /api/v2/integrations/speech/audioconnector/{integrationId} | Get an Audio Connector integration
[**getIntegrationsSpeechDialogflowAgent**](IntegrationsApi#getIntegrationsSpeechDialogflowAgent) | **GET** /api/v2/integrations/speech/dialogflow/agents/{agentId} | Get details about a Dialogflow agent
[**getIntegrationsSpeechDialogflowAgents**](IntegrationsApi#getIntegrationsSpeechDialogflowAgents) | **GET** /api/v2/integrations/speech/dialogflow/agents | Get a list of Dialogflow agents in the customers' Google accounts
[**getIntegrationsSpeechDialogflowcxAgent**](IntegrationsApi#getIntegrationsSpeechDialogflowcxAgent) | **GET** /api/v2/integrations/speech/dialogflowcx/agents/{agentId} | Get details about a Dialogflow CX agent
[**getIntegrationsSpeechDialogflowcxAgents**](IntegrationsApi#getIntegrationsSpeechDialogflowcxAgents) | **GET** /api/v2/integrations/speech/dialogflowcx/agents | Get a list of Dialogflow CX agents in the customers' Google accounts
[**getIntegrationsSpeechLexBotAlias**](IntegrationsApi#getIntegrationsSpeechLexBotAlias) | **GET** /api/v2/integrations/speech/lex/bot/alias/{aliasId} | Get details about a Lex bot alias
[**getIntegrationsSpeechLexBotBotIdAliases**](IntegrationsApi#getIntegrationsSpeechLexBotBotIdAliases) | **GET** /api/v2/integrations/speech/lex/bot/{botId}/aliases | Get a list of aliases for a bot in the customer's AWS accounts
[**getIntegrationsSpeechLexBots**](IntegrationsApi#getIntegrationsSpeechLexBots) | **GET** /api/v2/integrations/speech/lex/bots | Get a list of Lex bots in the customers' AWS accounts
[**getIntegrationsSpeechLexv2BotAlias**](IntegrationsApi#getIntegrationsSpeechLexv2BotAlias) | **GET** /api/v2/integrations/speech/lexv2/bot/alias/{aliasId} | Get details about a Lex V2 bot alias
[**getIntegrationsSpeechLexv2BotBotIdAliases**](IntegrationsApi#getIntegrationsSpeechLexv2BotBotIdAliases) | **GET** /api/v2/integrations/speech/lexv2/bot/{botId}/aliases | Get a list of aliases for a Lex V2 bot
[**getIntegrationsSpeechLexv2Bots**](IntegrationsApi#getIntegrationsSpeechLexv2Bots) | **GET** /api/v2/integrations/speech/lexv2/bots | Get a list of Lex V2 bots
[**getIntegrationsSpeechNuanceNuanceIntegrationIdBot**](IntegrationsApi#getIntegrationsSpeechNuanceNuanceIntegrationIdBot) | **GET** /api/v2/integrations/speech/nuance/{nuanceIntegrationId}/bots/{botId} | Get a Nuance bot in the specified Integration
[**getIntegrationsSpeechNuanceNuanceIntegrationIdBotJob**](IntegrationsApi#getIntegrationsSpeechNuanceNuanceIntegrationIdBotJob) | **GET** /api/v2/integrations/speech/nuance/{nuanceIntegrationId}/bots/{botId}/jobs/{jobId} | Get the status of an asynchronous Nuance bot GET job
[**getIntegrationsSpeechNuanceNuanceIntegrationIdBotJobResults**](IntegrationsApi#getIntegrationsSpeechNuanceNuanceIntegrationIdBotJobResults) | **GET** /api/v2/integrations/speech/nuance/{nuanceIntegrationId}/bots/{botId}/jobs/{jobId}/results | Get the result of an asynchronous Nuance bot GET job
[**getIntegrationsSpeechNuanceNuanceIntegrationIdBots**](IntegrationsApi#getIntegrationsSpeechNuanceNuanceIntegrationIdBots) | **GET** /api/v2/integrations/speech/nuance/{nuanceIntegrationId}/bots | Get a list of Nuance bots available in the specified Integration
[**getIntegrationsSpeechNuanceNuanceIntegrationIdBotsJob**](IntegrationsApi#getIntegrationsSpeechNuanceNuanceIntegrationIdBotsJob) | **GET** /api/v2/integrations/speech/nuance/{nuanceIntegrationId}/bots/jobs/{jobId} | Get the status of an asynchronous Nuance bots GET job
[**getIntegrationsSpeechNuanceNuanceIntegrationIdBotsJobResults**](IntegrationsApi#getIntegrationsSpeechNuanceNuanceIntegrationIdBotsJobResults) | **GET** /api/v2/integrations/speech/nuance/{nuanceIntegrationId}/bots/jobs/{jobId}/results | Get the result of an asynchronous Nuance bots GET job
[**getIntegrationsSpeechSttEngine**](IntegrationsApi#getIntegrationsSpeechSttEngine) | **GET** /api/v2/integrations/speech/stt/engines/{engineId} | Get details about a STT engine
[**getIntegrationsSpeechSttEngines**](IntegrationsApi#getIntegrationsSpeechSttEngines) | **GET** /api/v2/integrations/speech/stt/engines | Get a list of STT engines enabled for org
[**getIntegrationsSpeechTtsEngine**](IntegrationsApi#getIntegrationsSpeechTtsEngine) | **GET** /api/v2/integrations/speech/tts/engines/{engineId} | Get details about a TTS engine
[**getIntegrationsSpeechTtsEngineVoice**](IntegrationsApi#getIntegrationsSpeechTtsEngineVoice) | **GET** /api/v2/integrations/speech/tts/engines/{engineId}/voices/{voiceId} | Get details about a specific voice for a TTS engine
[**getIntegrationsSpeechTtsEngineVoices**](IntegrationsApi#getIntegrationsSpeechTtsEngineVoices) | **GET** /api/v2/integrations/speech/tts/engines/{engineId}/voices | Get a list of voices for a TTS engine
[**getIntegrationsSpeechTtsEngines**](IntegrationsApi#getIntegrationsSpeechTtsEngines) | **GET** /api/v2/integrations/speech/tts/engines | Get a list of TTS engines enabled for org
[**getIntegrationsSpeechTtsSettings**](IntegrationsApi#getIntegrationsSpeechTtsSettings) | **GET** /api/v2/integrations/speech/tts/settings | Get TTS settings for an org
[**getIntegrationsType**](IntegrationsApi#getIntegrationsType) | **GET** /api/v2/integrations/types/{typeId} | Get integration type.
[**getIntegrationsTypeConfigschema**](IntegrationsApi#getIntegrationsTypeConfigschema) | **GET** /api/v2/integrations/types/{typeId}/configschemas/{configType} | Get properties config schema for an integration type.
[**getIntegrationsTypes**](IntegrationsApi#getIntegrationsTypes) | **GET** /api/v2/integrations/types | List integration types
[**getIntegrationsUnifiedcommunicationsClientapp**](IntegrationsApi#getIntegrationsUnifiedcommunicationsClientapp) | **GET** /api/v2/integrations/unifiedcommunications/clientapps/{ucIntegrationId} | UC integration client application configuration.
[**getIntegrationsUnifiedcommunicationsClientapps**](IntegrationsApi#getIntegrationsUnifiedcommunicationsClientapps) | **GET** /api/v2/integrations/unifiedcommunications/clientapps | List UC integration client application configurations.
[**getIntegrationsUserapps**](IntegrationsApi#getIntegrationsUserapps) | **GET** /api/v2/integrations/userapps | List permitted user app integrations for the logged in user
[**patchIntegration**](IntegrationsApi#patchIntegration) | **PATCH** /api/v2/integrations/{integrationId} | Update an integration.
[**patchIntegrationsAction**](IntegrationsApi#patchIntegrationsAction) | **PATCH** /api/v2/integrations/actions/{actionId} | Patch an Action
[**patchIntegrationsActionDraft**](IntegrationsApi#patchIntegrationsActionDraft) | **PATCH** /api/v2/integrations/actions/{actionId}/draft | Update an existing Draft
[**postIntegrations**](IntegrationsApi#postIntegrations) | **POST** /api/v2/integrations | Create an integration.
[**postIntegrationsActionDraft**](IntegrationsApi#postIntegrationsActionDraft) | **POST** /api/v2/integrations/actions/{actionId}/draft | Create a new Draft from existing Action
[**postIntegrationsActionDraftFunctionUpload**](IntegrationsApi#postIntegrationsActionDraftFunctionUpload) | **POST** /api/v2/integrations/actions/{actionId}/draft/function/upload | Create upload presigned URL for draft function package file.
[**postIntegrationsActionDraftPublish**](IntegrationsApi#postIntegrationsActionDraftPublish) | **POST** /api/v2/integrations/actions/{actionId}/draft/publish | Publish a Draft and make it the active Action configuration
[**postIntegrationsActionDraftTest**](IntegrationsApi#postIntegrationsActionDraftTest) | **POST** /api/v2/integrations/actions/{actionId}/draft/test | Test the execution of a draft. Responses will show execution steps broken out with intermediate results to help in debugging.
[**postIntegrationsActionExecute**](IntegrationsApi#postIntegrationsActionExecute) | **POST** /api/v2/integrations/actions/{actionId}/execute | Execute Action and return response from 3rd party.  Responses will follow the schemas defined on the Action for success and error.
[**postIntegrationsActionTest**](IntegrationsApi#postIntegrationsActionTest) | **POST** /api/v2/integrations/actions/{actionId}/test | Test the execution of an action. Responses will show execution steps broken out with intermediate results to help in debugging.
[**postIntegrationsActions**](IntegrationsApi#postIntegrationsActions) | **POST** /api/v2/integrations/actions | Create a new Action. Not supported for 'Function Integration' actions. Function integrations must be created as drafts to allow managing of uploading required ZIP function package before they may be used as a published action.
[**postIntegrationsActionsDrafts**](IntegrationsApi#postIntegrationsActionsDrafts) | **POST** /api/v2/integrations/actions/drafts | Create a new Draft
[**postIntegrationsBotconnectorsIncomingMessages**](IntegrationsApi#postIntegrationsBotconnectorsIncomingMessages) | **POST** /api/v2/integrations/botconnectors/incoming/messages | Send an incoming message to the bot.
[**postIntegrationsBotconnectorsOutgoingMessages**](IntegrationsApi#postIntegrationsBotconnectorsOutgoingMessages) | **POST** /api/v2/integrations/botconnectors/outgoing/messages | Send an outgoing message to the end user.
[**postIntegrationsCredentials**](IntegrationsApi#postIntegrationsCredentials) | **POST** /api/v2/integrations/credentials | Create a set of credentials
[**postIntegrationsSpeechNuanceNuanceIntegrationIdBotJobs**](IntegrationsApi#postIntegrationsSpeechNuanceNuanceIntegrationIdBotJobs) | **POST** /api/v2/integrations/speech/nuance/{nuanceIntegrationId}/bots/{botId}/jobs | Get a Nuance bot in the specified Integration asynchronously
[**postIntegrationsSpeechNuanceNuanceIntegrationIdBotsJobs**](IntegrationsApi#postIntegrationsSpeechNuanceNuanceIntegrationIdBotsJobs) | **POST** /api/v2/integrations/speech/nuance/{nuanceIntegrationId}/bots/jobs | Get a list of Nuance bots in the specified Integration asynchronously
[**postIntegrationsSpeechNuanceNuanceIntegrationIdBotsLaunchValidate**](IntegrationsApi#postIntegrationsSpeechNuanceNuanceIntegrationIdBotsLaunchValidate) | **POST** /api/v2/integrations/speech/nuance/{nuanceIntegrationId}/bots/launch/validate | Try out a single credential for a Nuance bot to know if the secret is correct
[**postIntegrationsWebhookEvents**](IntegrationsApi#postIntegrationsWebhookEvents) | **POST** /api/v2/integrations/webhooks/{tokenId}/events | Invoke Webhook
[**putIntegrationConfigCurrent**](IntegrationsApi#putIntegrationConfigCurrent) | **PUT** /api/v2/integrations/{integrationId}/config/current | Update integration configuration.
[**putIntegrationsActionDraftFunction**](IntegrationsApi#putIntegrationsActionDraftFunction) | **PUT** /api/v2/integrations/actions/{actionId}/draft/function | Update draft function settings.
[**putIntegrationsBotconnectorIntegrationIdBots**](IntegrationsApi#putIntegrationsBotconnectorIntegrationIdBots) | **PUT** /api/v2/integrations/botconnector/{integrationId}/bots | Set a list of botConnector bots plus versions for this integration
[**putIntegrationsCredential**](IntegrationsApi#putIntegrationsCredential) | **PUT** /api/v2/integrations/credentials/{credentialId} | Update a set of credentials
[**putIntegrationsSpeechNuanceNuanceIntegrationIdBotsLaunchSettings**](IntegrationsApi#putIntegrationsSpeechNuanceNuanceIntegrationIdBotsLaunchSettings) | **PUT** /api/v2/integrations/speech/nuance/{nuanceIntegrationId}/bots/launch/settings | Update the Nuance bot list for the specific bots made available to Genesys Cloud in the specified Integration
[**putIntegrationsSpeechTtsSettings**](IntegrationsApi#putIntegrationsSpeechTtsSettings) | **PUT** /api/v2/integrations/speech/tts/settings | Update TTS settings for an org
[**putIntegrationsUnifiedcommunicationThirdpartypresences**](IntegrationsApi#putIntegrationsUnifiedcommunicationThirdpartypresences) | **PUT** /api/v2/integrations/unifiedcommunications/{ucIntegrationId}/thirdpartypresences | Bulk integration presence ingestion



## deleteIntegration

> Integration deleteIntegration(integrationId)


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

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
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

### Return type

**Integration**


## deleteIntegrationsAction

> void deleteIntegrationsAction(actionId)


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

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
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

### Return type

void (no response body)


## deleteIntegrationsActionDraft

> void deleteIntegrationsActionDraft(actionId)


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

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
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

### Return type

void (no response body)


## deleteIntegrationsCredential

> void deleteIntegrationsCredential(credentialId)


DELETE /api/v2/integrations/credentials/{credentialId}

Delete a set of credentials

Requires ANY permissions:

* integrations:integration:delete

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
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

### Return type

void (no response body)


## getIntegration

> Integration getIntegration(integrationId, opts)


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

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
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

### Return type

**Integration**


## getIntegrationConfigCurrent

> IntegrationConfiguration getIntegrationConfigCurrent(integrationId)


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

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
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

### Return type

**IntegrationConfiguration**


## getIntegrations

> IntegrationEntityListing getIntegrations(opts)


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

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
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

### Return type

**IntegrationEntityListing**


## getIntegrationsAction

> Action getIntegrationsAction(actionId, opts)


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

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.IntegrationsApi();

let actionId = "actionId_example"; // String | actionId
let opts = { 
  'expand': "expand_example", // String | Indicates a field in the response which should be expanded.
  'flatten': false, // Boolean | Indicates the response should be reformatted, based on Architect's flattening format.
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
 **flatten** | **Boolean** | Indicates the response should be reformatted, based on Architect's flattening format. | [optional] [default to false]<br />**Values**: true, false |
 **includeConfig** | **Boolean** | Return config in response. | [optional] [default to false]<br />**Values**: true, false |

### Return type

**Action**


## getIntegrationsActionDraft

> Action getIntegrationsActionDraft(actionId, opts)


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

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.IntegrationsApi();

let actionId = "actionId_example"; // String | actionId
let opts = { 
  'expand': "expand_example", // String | Indicates a field in the response which should be expanded.
  'flatten': false, // Boolean | Indicates the response should be reformatted, based on Architect's flattening format.
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
 **flatten** | **Boolean** | Indicates the response should be reformatted, based on Architect's flattening format. | [optional] [default to false]<br />**Values**: true, false |
 **includeConfig** | **Boolean** | Return config in response. | [optional] [default to false]<br />**Values**: true, false |

### Return type

**Action**


## getIntegrationsActionDraftFunction

> FunctionConfig getIntegrationsActionDraftFunction(actionId)


GET /api/v2/integrations/actions/{actionId}/draft/function

Get draft function settings for Action

Requires ANY permissions:

* integrations:actionFunction:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.IntegrationsApi();

let actionId = "actionId_example"; // String | actionId

apiInstance.getIntegrationsActionDraftFunction(actionId)
  .then((data) => {
    console.log(`getIntegrationsActionDraftFunction success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getIntegrationsActionDraftFunction');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **actionId** | **String** | actionId |  |

### Return type

**FunctionConfig**


## getIntegrationsActionDraftSchema

> JsonSchemaDocument getIntegrationsActionDraftSchema(actionId, fileName, opts)


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

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.IntegrationsApi();

let actionId = "actionId_example"; // String | actionId
let fileName = "fileName_example"; // String | Name of schema file to be retrieved for this draft.
let opts = { 
  'flatten': false // Boolean | Indicates the response should be reformatted, based on Architect's flattening format.
};

apiInstance.getIntegrationsActionDraftSchema(actionId, fileName, opts)
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
 **flatten** | **Boolean** | Indicates the response should be reformatted, based on Architect's flattening format. | [optional] [default to false] |

### Return type

**JsonSchemaDocument**


## getIntegrationsActionDraftTemplate

> **&#39;String&#39;** getIntegrationsActionDraftTemplate(actionId, fileName)


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

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
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

### Return type

**&#39;String&#39;**


## getIntegrationsActionDraftValidation

> DraftValidationResult getIntegrationsActionDraftValidation(actionId)


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

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
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

### Return type

**DraftValidationResult**


## getIntegrationsActionFunction

> FunctionConfig getIntegrationsActionFunction(actionId)


GET /api/v2/integrations/actions/{actionId}/function

Get published function settings for Action

Requires ANY permissions:

* integrations:actionFunction:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.IntegrationsApi();

let actionId = "actionId_example"; // String | actionId

apiInstance.getIntegrationsActionFunction(actionId)
  .then((data) => {
    console.log(`getIntegrationsActionFunction success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getIntegrationsActionFunction');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **actionId** | **String** | actionId |  |

### Return type

**FunctionConfig**


## getIntegrationsActionSchema

> JsonSchemaDocument getIntegrationsActionSchema(actionId, fileName, opts)


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

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.IntegrationsApi();

let actionId = "actionId_example"; // String | actionId
let fileName = "fileName_example"; // String | Name of schema file to be retrieved for this action.
let opts = { 
  'flatten': false // Boolean | Indicates the response should be reformatted, based on Architect's flattening format.
};

apiInstance.getIntegrationsActionSchema(actionId, fileName, opts)
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
 **flatten** | **Boolean** | Indicates the response should be reformatted, based on Architect's flattening format. | [optional] [default to false] |

### Return type

**JsonSchemaDocument**


## getIntegrationsActionTemplate

> **&#39;String&#39;** getIntegrationsActionTemplate(actionId, fileName)


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

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
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

### Return type

**&#39;String&#39;**


## getIntegrationsActions

> ActionEntityListing getIntegrationsActions(opts)


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

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
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

### Return type

**ActionEntityListing**


## getIntegrationsActionsCategories

> CategoryEntityListing getIntegrationsActionsCategories(opts)


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

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
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

### Return type

**CategoryEntityListing**


## getIntegrationsActionsCertificates

> ActionCertificateListing getIntegrationsActionsCertificates(opts)


GET /api/v2/integrations/actions/certificates

Retrieves the available mTLS client certificates in use. This endpoint will return inconsistent results while a certificate rotation is in progress.

Requires ANY permissions:

* integrations:actionCertificate:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.IntegrationsApi();

let opts = { 
  'status': "status_example", // String | Indicates the validity of the certificate in question.
  'type': "type_example" // String | Indicates the type of the certificate.
};

apiInstance.getIntegrationsActionsCertificates(opts)
  .then((data) => {
    console.log(`getIntegrationsActionsCertificates success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getIntegrationsActionsCertificates');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **status** | **String** | Indicates the validity of the certificate in question. | [optional] <br />**Values**: Current, Upcoming |
 **type** | **String** | Indicates the type of the certificate. | [optional] <br />**Values**: Client |

### Return type

**ActionCertificateListing**


## getIntegrationsActionsCertificatesTruststore

> TrustedCertificates getIntegrationsActionsCertificatesTruststore()


GET /api/v2/integrations/actions/certificates/truststore

Retrieves basic info about trusted root CA certificates

Requires ANY permissions:

* integrations:actionCertificate:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.IntegrationsApi();

apiInstance.getIntegrationsActionsCertificatesTruststore()
  .then((data) => {
    console.log(`getIntegrationsActionsCertificatesTruststore success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getIntegrationsActionsCertificatesTruststore');
    console.error(err);
  });
```

### Parameters

This endpoint does not need any parameter.

### Return type

**TrustedCertificates**


## getIntegrationsActionsDrafts

> ActionEntityListing getIntegrationsActionsDrafts(opts)


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

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
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

### Return type

**ActionEntityListing**


## getIntegrationsActionsFunctionsRuntimes

> [FunctionRuntime] getIntegrationsActionsFunctionsRuntimes()


GET /api/v2/integrations/actions/functions/runtimes

Get action function settings for Action

Requires ANY permissions:

* integrations:actionFunction:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.IntegrationsApi();

apiInstance.getIntegrationsActionsFunctionsRuntimes()
  .then((data) => {
    console.log(`getIntegrationsActionsFunctionsRuntimes success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getIntegrationsActionsFunctionsRuntimes');
    console.error(err);
  });
```

### Parameters

This endpoint does not need any parameter.

### Return type

**[FunctionRuntime]**


## getIntegrationsBotconnectorBot

> Bot getIntegrationsBotconnectorBot(integrationId, botId, opts)


GET /api/v2/integrations/botconnectors/{integrationId}/bots/{botId}

Get a specific Bot details

getIntegrationsBotconnectorBot is a preview method and is subject to both breaking and non-breaking changes at any time without notice

Requires ANY permissions:

* integration:botconnector:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.IntegrationsApi();

let integrationId = "integrationId_example"; // String | The integration ID for this group of bots
let botId = "botId_example"; // String | The bot ID for this bot
let opts = { 
  'version': "version_example" // String | Specific Version
};

apiInstance.getIntegrationsBotconnectorBot(integrationId, botId, opts)
  .then((data) => {
    console.log(`getIntegrationsBotconnectorBot success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getIntegrationsBotconnectorBot');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **integrationId** | **String** | The integration ID for this group of bots |  |
 **botId** | **String** | The bot ID for this bot |  |
 **version** | **String** | Specific Version | [optional]  |

### Return type

**Bot**


## getIntegrationsBotconnectorBots

> BotListing getIntegrationsBotconnectorBots(integrationId, opts)


GET /api/v2/integrations/botconnectors/{integrationId}/bots

Get the list of bots for this integration.

getIntegrationsBotconnectorBots is a preview method and is subject to both breaking and non-breaking changes at any time without notice

Requires ANY permissions:

* integration:botconnector:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.IntegrationsApi();

let integrationId = "integrationId_example"; // String | The integration ID for this group of bots.
let opts = { 
  'pageNumber': 1, // Number | Page number
  'pageSize': 25 // Number | Page size
};

apiInstance.getIntegrationsBotconnectorBots(integrationId, opts)
  .then((data) => {
    console.log(`getIntegrationsBotconnectorBots success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getIntegrationsBotconnectorBots');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **integrationId** | **String** | The integration ID for this group of bots. |  |
 **pageNumber** | **Number** | Page number | [optional] [default to 1] |
 **pageSize** | **Number** | Page size | [optional] [default to 25] |

### Return type

**BotListing**


## getIntegrationsBotconnectorBotsSummaries

> BotSummaryEntityListing getIntegrationsBotconnectorBotsSummaries(integrationId, opts)


GET /api/v2/integrations/botconnectors/{integrationId}/bots/summaries

Get the summary list of bots for this integration.

getIntegrationsBotconnectorBotsSummaries is a preview method and is subject to both breaking and non-breaking changes at any time without notice

Requires ANY permissions:

* integration:botconnector:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.IntegrationsApi();

let integrationId = "integrationId_example"; // String | The integration ID for this group of bots.
let opts = { 
  'pageNumber': 1, // Number | Page number
  'pageSize': 25 // Number | Page size
};

apiInstance.getIntegrationsBotconnectorBotsSummaries(integrationId, opts)
  .then((data) => {
    console.log(`getIntegrationsBotconnectorBotsSummaries success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getIntegrationsBotconnectorBotsSummaries');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **integrationId** | **String** | The integration ID for this group of bots. |  |
 **pageNumber** | **Number** | Page number | [optional] [default to 1] |
 **pageSize** | **Number** | Page size | [optional] [default to 25] |

### Return type

**BotSummaryEntityListing**


## getIntegrationsBotconnectorIntegrationIdBot

> BotConnectorBot getIntegrationsBotconnectorIntegrationIdBot(integrationId, botId, opts)


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

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
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

### Return type

**BotConnectorBot**


## getIntegrationsBotconnectorIntegrationIdBotVersions

> BotConnectorBotVersionSummaryEntityListing getIntegrationsBotconnectorIntegrationIdBotVersions(integrationId, botId, opts)


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

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
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

### Return type

**BotConnectorBotVersionSummaryEntityListing**


## getIntegrationsBotconnectorIntegrationIdBots

> BotList getIntegrationsBotconnectorIntegrationIdBots(integrationId)


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

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
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

### Return type

**BotList**


## getIntegrationsBotconnectorIntegrationIdBotsSummaries

> BotConnectorBotSummaryEntityListing getIntegrationsBotconnectorIntegrationIdBotsSummaries(integrationId, opts)


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

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
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

### Return type

**BotConnectorBotSummaryEntityListing**


## getIntegrationsClientapps

> ClientAppEntityListing getIntegrationsClientapps(opts)


GET /api/v2/integrations/clientapps

List permitted client app integrations for the logged in user

Requires NO permissions:

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
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

### Return type

**ClientAppEntityListing**


## getIntegrationsClientappsUnifiedcommunications

> UCIntegrationListing getIntegrationsClientappsUnifiedcommunications(opts)

:::{"alert":"warning","title":"Deprecated","collapsible":false,"autoCollapse":false}
This resource has been deprecated
:::

GET /api/v2/integrations/clientapps/unifiedcommunications

UC integration client application configuration.

Deprecated: Please use GET /integrations/unifiedcommunications/clientapps instead. This endpoint returns basic UI configuration data for all Unified Communications integrations client applications enabled for the current organization.

Requires ANY permissions:

* integration:unifiedCommunications:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
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

### Return type

**UCIntegrationListing**


## getIntegrationsCredential

> Credential getIntegrationsCredential(credentialId)


GET /api/v2/integrations/credentials/{credentialId}

Get a single credential with sensitive fields redacted

Requires ANY permissions:

* integrations:integration:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
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

### Return type

**Credential**


## getIntegrationsCredentials

> CredentialInfoListing getIntegrationsCredentials(opts)

:::{"alert":"warning","title":"Deprecated","collapsible":false,"autoCollapse":false}
This resource has been deprecated
:::

GET /api/v2/integrations/credentials

List multiple sets of credentials

This endpoint is deprecated. Please see the Listing API (GET /api/v2/integrations/credentials/listing)

Requires ANY permissions:

* integrations:integration:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
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

### Return type

**CredentialInfoListing**


## getIntegrationsCredentialsListing

> CredentialInfoCursorListing getIntegrationsCredentialsListing(opts)


GET /api/v2/integrations/credentials/listing

List multiple sets of credentials using cursor-based paging

Requires ANY permissions:

* integrations:integration:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.IntegrationsApi();

let opts = { 
  'before': "before_example", // String | The cursor that points to the start of the set of entities that has been returned.
  'after': "after_example", // String | The cursor that points to the end of the set of entities that has been returned.
  'pageSize': "pageSize_example" // String | Number of entities to return. Maximum of 200.
};

apiInstance.getIntegrationsCredentialsListing(opts)
  .then((data) => {
    console.log(`getIntegrationsCredentialsListing success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getIntegrationsCredentialsListing');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **before** | **String** | The cursor that points to the start of the set of entities that has been returned. | [optional]  |
 **after** | **String** | The cursor that points to the end of the set of entities that has been returned. | [optional]  |
 **pageSize** | **String** | Number of entities to return. Maximum of 200. | [optional]  |

### Return type

**CredentialInfoCursorListing**


## getIntegrationsCredentialsTypes

> CredentialTypeListing getIntegrationsCredentialsTypes()


GET /api/v2/integrations/credentials/types

List all credential types

Requires ANY permissions:

* integrations:integration:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
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


## getIntegrationsSpeechAudioconnector

> AudioConnectorIntegrationEntityListing getIntegrationsSpeechAudioconnector(opts)


GET /api/v2/integrations/speech/audioconnector

Get a list of Audio Connector integrations

Requires ANY permissions:

* integrations:integration:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.IntegrationsApi();

let opts = { 
  'pageNumber': 1, // Number | Page number
  'pageSize': 25 // Number | Page size
};

apiInstance.getIntegrationsSpeechAudioconnector(opts)
  .then((data) => {
    console.log(`getIntegrationsSpeechAudioconnector success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getIntegrationsSpeechAudioconnector');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **pageNumber** | **Number** | Page number | [optional] [default to 1] |
 **pageSize** | **Number** | Page size | [optional] [default to 25] |

### Return type

**AudioConnectorIntegrationEntityListing**


## getIntegrationsSpeechAudioconnectorIntegrationId

> AudioConnectorIntegration getIntegrationsSpeechAudioconnectorIntegrationId(integrationId)


GET /api/v2/integrations/speech/audioconnector/{integrationId}

Get an Audio Connector integration

Requires ANY permissions:

* integrations:integration:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.IntegrationsApi();

let integrationId = "integrationId_example"; // String | The integration ID

apiInstance.getIntegrationsSpeechAudioconnectorIntegrationId(integrationId)
  .then((data) => {
    console.log(`getIntegrationsSpeechAudioconnectorIntegrationId success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getIntegrationsSpeechAudioconnectorIntegrationId');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **integrationId** | **String** | The integration ID |  |

### Return type

**AudioConnectorIntegration**


## getIntegrationsSpeechDialogflowAgent

> DialogflowAgent getIntegrationsSpeechDialogflowAgent(agentId)


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

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
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

### Return type

**DialogflowAgent**


## getIntegrationsSpeechDialogflowAgents

> DialogflowAgentSummaryEntityListing getIntegrationsSpeechDialogflowAgents(opts)


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

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
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

### Return type

**DialogflowAgentSummaryEntityListing**


## getIntegrationsSpeechDialogflowcxAgent

> DialogflowCXAgent getIntegrationsSpeechDialogflowcxAgent(agentId)


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

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
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

### Return type

**DialogflowCXAgent**


## getIntegrationsSpeechDialogflowcxAgents

> DialogflowCXAgentSummaryEntityListing getIntegrationsSpeechDialogflowcxAgents(opts)


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

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
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

### Return type

**DialogflowCXAgentSummaryEntityListing**


## getIntegrationsSpeechLexBotAlias

> LexBotAlias getIntegrationsSpeechLexBotAlias(aliasId)


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

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
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

### Return type

**LexBotAlias**


## getIntegrationsSpeechLexBotBotIdAliases

> LexBotAliasEntityListing getIntegrationsSpeechLexBotBotIdAliases(botId, opts)


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

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
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

### Return type

**LexBotAliasEntityListing**


## getIntegrationsSpeechLexBots

> LexBotEntityListing getIntegrationsSpeechLexBots(opts)


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

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
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

### Return type

**LexBotEntityListing**


## getIntegrationsSpeechLexv2BotAlias

> LexV2BotAlias getIntegrationsSpeechLexv2BotAlias(aliasId)


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

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
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

### Return type

**LexV2BotAlias**


## getIntegrationsSpeechLexv2BotBotIdAliases

> LexV2BotAliasEntityListing getIntegrationsSpeechLexv2BotBotIdAliases(botId, opts)


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

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
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

### Return type

**LexV2BotAliasEntityListing**


## getIntegrationsSpeechLexv2Bots

> LexV2BotEntityListing getIntegrationsSpeechLexv2Bots(opts)


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

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
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

### Return type

**LexV2BotEntityListing**


## getIntegrationsSpeechNuanceNuanceIntegrationIdBot

> NuanceBot getIntegrationsSpeechNuanceNuanceIntegrationIdBot(nuanceIntegrationId, botId, opts)


GET /api/v2/integrations/speech/nuance/{nuanceIntegrationId}/bots/{botId}

Get a Nuance bot in the specified Integration

Requires ANY permissions:

* integrations:integration:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
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

### Return type

**NuanceBot**


## getIntegrationsSpeechNuanceNuanceIntegrationIdBotJob

> AsyncJob getIntegrationsSpeechNuanceNuanceIntegrationIdBotJob(nuanceIntegrationId, botId, jobId)


GET /api/v2/integrations/speech/nuance/{nuanceIntegrationId}/bots/{botId}/jobs/{jobId}

Get the status of an asynchronous Nuance bot GET job

Requires ANY permissions:

* integrations:integration:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
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

### Return type

**AsyncJob**


## getIntegrationsSpeechNuanceNuanceIntegrationIdBotJobResults

> NuanceBot getIntegrationsSpeechNuanceNuanceIntegrationIdBotJobResults(nuanceIntegrationId, botId, jobId)


GET /api/v2/integrations/speech/nuance/{nuanceIntegrationId}/bots/{botId}/jobs/{jobId}/results

Get the result of an asynchronous Nuance bot GET job

Requires ANY permissions:

* integrations:integration:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
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

### Return type

**NuanceBot**


## getIntegrationsSpeechNuanceNuanceIntegrationIdBots

> NuanceBotEntityListing getIntegrationsSpeechNuanceNuanceIntegrationIdBots(nuanceIntegrationId, opts)


GET /api/v2/integrations/speech/nuance/{nuanceIntegrationId}/bots

Get a list of Nuance bots available in the specified Integration

If the onlyRegisteredBots param is set, the returned data will only include the Nuance bots which have configured client secrets within the Integration,  otherwise all of the Nuance bots available to the Integrations configured discovery credentials are returned.

Requires ANY permissions:

* integrations:integration:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
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

### Return type

**NuanceBotEntityListing**


## getIntegrationsSpeechNuanceNuanceIntegrationIdBotsJob

> AsyncJob getIntegrationsSpeechNuanceNuanceIntegrationIdBotsJob(nuanceIntegrationId, jobId)


GET /api/v2/integrations/speech/nuance/{nuanceIntegrationId}/bots/jobs/{jobId}

Get the status of an asynchronous Nuance bots GET job

Requires ANY permissions:

* integrations:integration:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
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

### Return type

**AsyncJob**


## getIntegrationsSpeechNuanceNuanceIntegrationIdBotsJobResults

> NuanceBotEntityListing getIntegrationsSpeechNuanceNuanceIntegrationIdBotsJobResults(nuanceIntegrationId, jobId)


GET /api/v2/integrations/speech/nuance/{nuanceIntegrationId}/bots/jobs/{jobId}/results

Get the result of an asynchronous Nuance bots GET job

Requires ANY permissions:

* integrations:integration:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
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

### Return type

**NuanceBotEntityListing**


## getIntegrationsSpeechSttEngine

> SttEngineEntity getIntegrationsSpeechSttEngine(engineId)


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

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
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

### Return type

**SttEngineEntity**


## getIntegrationsSpeechSttEngines

> SttEngineEntityListing getIntegrationsSpeechSttEngines(opts)


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

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
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

### Return type

**SttEngineEntityListing**


## getIntegrationsSpeechTtsEngine

> TtsEngineEntity getIntegrationsSpeechTtsEngine(engineId, opts)


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

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
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

### Return type

**TtsEngineEntity**


## getIntegrationsSpeechTtsEngineVoice

> TtsVoiceEntity getIntegrationsSpeechTtsEngineVoice(engineId, voiceId)


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

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
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

### Return type

**TtsVoiceEntity**


## getIntegrationsSpeechTtsEngineVoices

> TtsVoiceEntityListing getIntegrationsSpeechTtsEngineVoices(engineId, opts)


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

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
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

### Return type

**TtsVoiceEntityListing**


## getIntegrationsSpeechTtsEngines

> TtsEngineEntityListing getIntegrationsSpeechTtsEngines(opts)


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

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
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

### Return type

**TtsEngineEntityListing**


## getIntegrationsSpeechTtsSettings

> TtsSettings getIntegrationsSpeechTtsSettings()


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

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
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


## getIntegrationsType

> IntegrationType getIntegrationsType(typeId)


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

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
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

### Return type

**IntegrationType**


## getIntegrationsTypeConfigschema

> JsonSchemaDocument getIntegrationsTypeConfigschema(typeId, configType)


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

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
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

### Return type

**JsonSchemaDocument**


## getIntegrationsTypes

> IntegrationTypeEntityListing getIntegrationsTypes(opts)


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

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
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

### Return type

**IntegrationTypeEntityListing**


## getIntegrationsUnifiedcommunicationsClientapp

> UnifiedCommunicationsIntegration getIntegrationsUnifiedcommunicationsClientapp(ucIntegrationId)


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

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
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

### Return type

**UnifiedCommunicationsIntegration**


## getIntegrationsUnifiedcommunicationsClientapps

> UnifiedCommunicationsIntegrationListing getIntegrationsUnifiedcommunicationsClientapps(opts)


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

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
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

### Return type

**UnifiedCommunicationsIntegrationListing**


## getIntegrationsUserapps

> UserAppEntityListing getIntegrationsUserapps(opts)


GET /api/v2/integrations/userapps

List permitted user app integrations for the logged in user

Requires NO permissions:

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
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

### Return type

**UserAppEntityListing**


## patchIntegration

> Integration patchIntegration(integrationId, opts)


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

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
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

### Return type

**Integration**


## patchIntegrationsAction

> Action patchIntegrationsAction(actionId, body)


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

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
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

### Return type

**Action**


## patchIntegrationsActionDraft

> Action patchIntegrationsActionDraft(actionId, body)


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

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
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

### Return type

**Action**


## postIntegrations

> Integration postIntegrations(opts)


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

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
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

### Return type

**Integration**


## postIntegrationsActionDraft

> Action postIntegrationsActionDraft(actionId)


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

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
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

### Return type

**Action**


## postIntegrationsActionDraftFunctionUpload

> FunctionUploadResponse postIntegrationsActionDraftFunctionUpload(actionId, body)


POST /api/v2/integrations/actions/{actionId}/draft/function/upload

Create upload presigned URL for draft function package file.

Requires ANY permissions:

* integrations:actionFunction:edit

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.IntegrationsApi();

let actionId = "actionId_example"; // String | actionId
let body = {}; // Object | Input used to request URL upload.

apiInstance.postIntegrationsActionDraftFunctionUpload(actionId, body)
  .then((data) => {
    console.log(`postIntegrationsActionDraftFunctionUpload success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling postIntegrationsActionDraftFunctionUpload');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **actionId** | **String** | actionId |  |
 **body** | **Object** | Input used to request URL upload. |  |

### Return type

**FunctionUploadResponse**


## postIntegrationsActionDraftPublish

> Action postIntegrationsActionDraftPublish(actionId, body)


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

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
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

### Return type

**Action**


## postIntegrationsActionDraftTest

> TestExecutionResult postIntegrationsActionDraftTest(actionId, body, opts)


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

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.IntegrationsApi();

let actionId = "actionId_example"; // String | actionId
let body = null; // {String: Object} | Map of parameters used for variable substitution.
let opts = { 
  'flatten': false // Boolean | Indicates the response should be reformatted, based on Architect's flattening format.
};

apiInstance.postIntegrationsActionDraftTest(actionId, body, opts)
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
 **flatten** | **Boolean** | Indicates the response should be reformatted, based on Architect's flattening format. | [optional] [default to false] |

### Return type

**TestExecutionResult**


## postIntegrationsActionExecute

> **Object** postIntegrationsActionExecute(actionId, body, opts)


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

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.IntegrationsApi();

let actionId = "actionId_example"; // String | actionId
let body = null; // {String: Object} | Map of parameters used for variable substitution.
let opts = { 
  'flatten': false // Boolean | Indicates the response should be reformatted, based on Architect's flattening format.
};

apiInstance.postIntegrationsActionExecute(actionId, body, opts)
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
 **flatten** | **Boolean** | Indicates the response should be reformatted, based on Architect's flattening format. | [optional] [default to false] |

### Return type

**Object**


## postIntegrationsActionTest

> TestExecutionResult postIntegrationsActionTest(actionId, body, opts)


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

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.IntegrationsApi();

let actionId = "actionId_example"; // String | actionId
let body = null; // {String: Object} | Map of parameters used for variable substitution.
let opts = { 
  'flatten': false // Boolean | Indicates the response should be reformatted, based on Architect's flattening format.
};

apiInstance.postIntegrationsActionTest(actionId, body, opts)
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
 **flatten** | **Boolean** | Indicates the response should be reformatted, based on Architect's flattening format. | [optional] [default to false] |

### Return type

**TestExecutionResult**


## postIntegrationsActions

> Action postIntegrationsActions(body)


POST /api/v2/integrations/actions

Create a new Action. Not supported for 'Function Integration' actions. Function integrations must be created as drafts to allow managing of uploading required ZIP function package before they may be used as a published action.

Requires ANY permissions:

* integrations:action:add

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
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

### Return type

**Action**


## postIntegrationsActionsDrafts

> Action postIntegrationsActionsDrafts(body)


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

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
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

### Return type

**Action**


## postIntegrationsBotconnectorsIncomingMessages

> IncomingMessageResponse postIntegrationsBotconnectorsIncomingMessages(body)


POST /api/v2/integrations/botconnectors/incoming/messages

Send an incoming message to the bot.

postIntegrationsBotconnectorsIncomingMessages is a preview method and is subject to both breaking and non-breaking changes at any time without notice

Requires ANY permissions:

* integration:botconnector:send

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.IntegrationsApi();

let body = {}; // Object | Incoming Message Request

apiInstance.postIntegrationsBotconnectorsIncomingMessages(body)
  .then((data) => {
    console.log(`postIntegrationsBotconnectorsIncomingMessages success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling postIntegrationsBotconnectorsIncomingMessages');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **body** | **Object** | Incoming Message Request |  |

### Return type

**IncomingMessageResponse**


## postIntegrationsBotconnectorsOutgoingMessages

> OutgoingMessageResponse postIntegrationsBotconnectorsOutgoingMessages(body)


POST /api/v2/integrations/botconnectors/outgoing/messages

Send an outgoing message to the end user.

postIntegrationsBotconnectorsOutgoingMessages is a preview method and is subject to both breaking and non-breaking changes at any time without notice

Requires ANY permissions:

* integration:botconnector:send

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.IntegrationsApi();

let body = {}; // Object | Outgoing Message Request

apiInstance.postIntegrationsBotconnectorsOutgoingMessages(body)
  .then((data) => {
    console.log(`postIntegrationsBotconnectorsOutgoingMessages success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling postIntegrationsBotconnectorsOutgoingMessages');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **body** | **Object** | Outgoing Message Request |  |

### Return type

**OutgoingMessageResponse**


## postIntegrationsCredentials

> CredentialInfo postIntegrationsCredentials(opts)


POST /api/v2/integrations/credentials

Create a set of credentials

Requires ANY permissions:

* integrations:integration:add

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
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

### Return type

**CredentialInfo**


## postIntegrationsSpeechNuanceNuanceIntegrationIdBotJobs

> AsyncJob postIntegrationsSpeechNuanceNuanceIntegrationIdBotJobs(nuanceIntegrationId, botId, opts)


POST /api/v2/integrations/speech/nuance/{nuanceIntegrationId}/bots/{botId}/jobs

Get a Nuance bot in the specified Integration asynchronously

Requires ANY permissions:

* integrations:integration:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
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

### Return type

**AsyncJob**


## postIntegrationsSpeechNuanceNuanceIntegrationIdBotsJobs

> AsyncJob postIntegrationsSpeechNuanceNuanceIntegrationIdBotsJobs(nuanceIntegrationId, opts)


POST /api/v2/integrations/speech/nuance/{nuanceIntegrationId}/bots/jobs

Get a list of Nuance bots in the specified Integration asynchronously

Requires ANY permissions:

* integrations:integration:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
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

### Return type

**AsyncJob**


## postIntegrationsSpeechNuanceNuanceIntegrationIdBotsLaunchValidate

> void postIntegrationsSpeechNuanceNuanceIntegrationIdBotsLaunchValidate(nuanceIntegrationId, settings)


POST /api/v2/integrations/speech/nuance/{nuanceIntegrationId}/bots/launch/validate

Try out a single credential for a Nuance bot to know if the secret is correct

Requires ANY permissions:

* integrations:integration:edit

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
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

### Return type

void (no response body)


## postIntegrationsWebhookEvents

> WebhookInvocationResponse postIntegrationsWebhookEvents(tokenId, body)


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

### Return type

**WebhookInvocationResponse**


## putIntegrationConfigCurrent

> IntegrationConfiguration putIntegrationConfigCurrent(integrationId, opts)


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

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
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

### Return type

**IntegrationConfiguration**


## putIntegrationsActionDraftFunction

> FunctionConfig putIntegrationsActionDraftFunction(actionId, body)


PUT /api/v2/integrations/actions/{actionId}/draft/function

Update draft function settings.

Requires ANY permissions:

* integrations:actionFunction:edit

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.IntegrationsApi();

let actionId = "actionId_example"; // String | actionId
let body = {}; // Object | Input used to update function settings.

apiInstance.putIntegrationsActionDraftFunction(actionId, body)
  .then((data) => {
    console.log(`putIntegrationsActionDraftFunction success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling putIntegrationsActionDraftFunction');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **actionId** | **String** | actionId |  |
 **body** | **Object** | Input used to update function settings. |  |

### Return type

**FunctionConfig**


## putIntegrationsBotconnectorIntegrationIdBots

> void putIntegrationsBotconnectorIntegrationIdBots(integrationId, botList)


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

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
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

### Return type

void (no response body)


## putIntegrationsCredential

> CredentialInfo putIntegrationsCredential(credentialId, opts)


PUT /api/v2/integrations/credentials/{credentialId}

Update a set of credentials

Requires ANY permissions:

* integrations:integration:edit

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
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

### Return type

**CredentialInfo**


## putIntegrationsSpeechNuanceNuanceIntegrationIdBotsLaunchSettings

> void putIntegrationsSpeechNuanceNuanceIntegrationIdBotsLaunchSettings(nuanceIntegrationId, settings)


PUT /api/v2/integrations/speech/nuance/{nuanceIntegrationId}/bots/launch/settings

Update the Nuance bot list for the specific bots made available to Genesys Cloud in the specified Integration

Requires ANY permissions:

* integrations:integration:edit

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
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

### Return type

void (no response body)


## putIntegrationsSpeechTtsSettings

> TtsSettings putIntegrationsSpeechTtsSettings(body)


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

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
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

### Return type

**TtsSettings**


## putIntegrationsUnifiedcommunicationThirdpartypresences

> **&#39;String&#39;** putIntegrationsUnifiedcommunicationThirdpartypresences(ucIntegrationId, body)


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

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
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

### Return type

**&#39;String&#39;**


_purecloud-platform-client-v2@229.1.0_
