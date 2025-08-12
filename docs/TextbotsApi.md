# TextbotsApi

# platformClient.TextbotsApi

All URIs are relative to *https://api.mypurecloud.com*

| Method | HTTP request | Description |
| ------------- | ------------- | ------------- |
[**getTextbotsBotsSearch**](TextbotsApi#getTextbotsBotsSearch) | **GET** /api/v2/textbots/bots/search | Find bots using the currently configured friendly name or ID.
[**postTextbotsBotflowsSessionTurns**](TextbotsApi#postTextbotsBotflowsSessionTurns) | **POST** /api/v2/textbots/botflows/sessions/{sessionId}/turns | Issue a bot flow turn event
[**postTextbotsBotflowsSessions**](TextbotsApi#postTextbotsBotflowsSessions) | **POST** /api/v2/textbots/botflows/sessions | Create an execution instance of a bot flow definition.
[**postTextbotsBotsExecute**](TextbotsApi#postTextbotsBotsExecute) | **POST** /api/v2/textbots/bots/execute | Send an intent to a bot to start a dialog/interact with it via text



## getTextbotsBotsSearch

> BotSearchResponseEntityListing getTextbotsBotsSearch(opts)


GET /api/v2/textbots/bots/search

Find bots using the currently configured friendly name or ID.

The name does allow case-insensitive partial string matches or by IDs (up to 50), but not both at the same time. Optionally you can limit the scope of the search by providing one or more bot types.  You can specify the maximum results to return, up to a limit of 100

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

let apiInstance = new platformClient.TextbotsApi();

let opts = { 
  'botType': ["botType_example"], // [String] | Bot types
  'botName': "botName_example", // String | Bot name
  'botId': ["botId_example"], // [String] | Bot IDs. Maximum of 50
  'virtualAgentEnabled': true, // Boolean | Include or exclude virtual agent flows, only applies to GenesysBotFlows or GenesysDigitalBotFlows
  'pageSize': 25 // Number | The maximum results to return. Maximum of 100
};

apiInstance.getTextbotsBotsSearch(opts)
  .then((data) => {
    console.log(`getTextbotsBotsSearch success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getTextbotsBotsSearch');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **botType** | **[String]** | Bot types | [optional] <br />**Values**: GenesysBotConnector, GenesysDialogEngine, AmazonLex, GoogleDialogFlowES, GoogleDialogFlowCX, NuanceDlg, GenesysBotFlow, GenesysDigitalBotFlow, GenesysVoiceSurveyFlow, GenesysDigitalBotConnector |
 **botName** | **String** | Bot name | [optional]  |
 **botId** | **[String]** | Bot IDs. Maximum of 50 | [optional]  |
 **virtualAgentEnabled** | **Boolean** | Include or exclude virtual agent flows, only applies to GenesysBotFlows or GenesysDigitalBotFlows | [optional]  |
 **pageSize** | **Number** | The maximum results to return. Maximum of 100 | [optional] [default to 25] |

### Return type

**BotSearchResponseEntityListing**


## postTextbotsBotflowsSessionTurns

> TextBotFlowTurnResponse postTextbotsBotflowsSessionTurns(sessionId, turnRequest)


POST /api/v2/textbots/botflows/sessions/{sessionId}/turns

Issue a bot flow turn event

Send a turn event to an executing bot flow and produce the next action to take.

Requires ANY permissions:

* textbots:botFlowSession:execute

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.TextbotsApi();

let sessionId = "sessionId_example"; // String | The bot flow session ID, typically obtained from 'POST /api/v2/textbots/botflows/sessions'
let turnRequest = {}; // Object | 

apiInstance.postTextbotsBotflowsSessionTurns(sessionId, turnRequest)
  .then((data) => {
    console.log(`postTextbotsBotflowsSessionTurns success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling postTextbotsBotflowsSessionTurns');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **sessionId** | **String** | The bot flow session ID, typically obtained from 'POST /api/v2/textbots/botflows/sessions' |  |
 **turnRequest** | **Object** |  |  |

### Return type

**TextBotFlowTurnResponse**


## postTextbotsBotflowsSessions

> TextBotFlowLaunchResponse postTextbotsBotflowsSessions(launchRequest)


POST /api/v2/textbots/botflows/sessions

Create an execution instance of a bot flow definition.

The launch is asynchronous; use the returned instance ID to post turns to it using POST /api/v2/textbots/botflows/sessions/{sessionId}/turns.

Requires ANY permissions:

* textbots:botFlowSession:execute

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.TextbotsApi();

let launchRequest = {}; // Object | 

apiInstance.postTextbotsBotflowsSessions(launchRequest)
  .then((data) => {
    console.log(`postTextbotsBotflowsSessions success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling postTextbotsBotflowsSessions');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **launchRequest** | **Object** |  |  |

### Return type

**TextBotFlowLaunchResponse**


## postTextbotsBotsExecute

> PostTextResponse postTextbotsBotsExecute(postTextRequest)


POST /api/v2/textbots/bots/execute

Send an intent to a bot to start a dialog/interact with it via text

This will either start a bot with the given id or relay a communication to an existing bot session.

Requires ANY permissions:

* textbots:session:execute

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.TextbotsApi();

let postTextRequest = {}; // Object | 

apiInstance.postTextbotsBotsExecute(postTextRequest)
  .then((data) => {
    console.log(`postTextbotsBotsExecute success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling postTextbotsBotsExecute');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **postTextRequest** | **Object** |  |  |

### Return type

**PostTextResponse**


_purecloud-platform-client-v2@229.1.0_
