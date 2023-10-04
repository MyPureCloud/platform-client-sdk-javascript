---
title: DialogEngineApi
---
# platformClient.DialogEngineApi

All URIs are relative to *https://api.inindca.com*

| Method | HTTP request | Description |
| ------------- | ------------- | ------------- |
[**deleteDialogBot**](DialogEngineApi.html#deleteDialogBot) | **DELETE** /api/v2/dialog/bots/{botId} | Delete a Bot.
[**getDialogBot**](DialogEngineApi.html#getDialogBot) | **GET** /api/v2/dialog/bots/{botId} | Get a Bot.
[**getDialogBotSession**](DialogEngineApi.html#getDialogBotSession) | **GET** /api/v2/dialog/bots/{botId}/sessions/{sessionId} | Retrieve a single dialog session.
[**getDialogBotVersion**](DialogEngineApi.html#getDialogBotVersion) | **GET** /api/v2/dialog/bots/{botId}/versions/{versionId} | Retrieve a single bot version.
[**getDialogBotVersions**](DialogEngineApi.html#getDialogBotVersions) | **GET** /api/v2/dialog/bots/{botId}/versions | Get all bot versions.
[**getDialogBots**](DialogEngineApi.html#getDialogBots) | **GET** /api/v2/dialog/bots | Get all Bots.
[**getDialogIntegrationsBot**](DialogEngineApi.html#getDialogIntegrationsBot) | **GET** /api/v2/dialog/integrations/bots/{botId} | Get an integration view of a Bot.
[**getDialogIntegrationsBotVersion**](DialogEngineApi.html#getDialogIntegrationsBotVersion) | **GET** /api/v2/dialog/integrations/bots/{botId}/versions/{versionId} | Retrieve the integration view of a single bot version.
[**getDialogIntegrationsBots**](DialogEngineApi.html#getDialogIntegrationsBots) | **GET** /api/v2/dialog/integrations/bots | Get an integration view listing of all bots.
[**patchDialogBotVersion**](DialogEngineApi.html#patchDialogBotVersion) | **PATCH** /api/v2/dialog/bots/{botId}/versions/{versionId} | Update a bot version.
[**postDialogBotSessionTurns**](DialogEngineApi.html#postDialogBotSessionTurns) | **POST** /api/v2/dialog/bots/{botId}/sessions/{sessionId}/turns | Send user-input turn for dialog session.
[**postDialogBotSessions**](DialogEngineApi.html#postDialogBotSessions) | **POST** /api/v2/dialog/bots/{botId}/sessions | Create a new dialog session.
[**postDialogBotVersions**](DialogEngineApi.html#postDialogBotVersions) | **POST** /api/v2/dialog/bots/{botId}/versions | Create a new bot version.
[**postDialogBots**](DialogEngineApi.html#postDialogBots) | **POST** /api/v2/dialog/bots | Create a new Bot.
[**putDialogBot**](DialogEngineApi.html#putDialogBot) | **PUT** /api/v2/dialog/bots/{botId} | Modify a Bot.
{: class="table table-striped"}

<a name="deleteDialogBot"></a>

# void deleteDialogBot(botId)


DELETE /api/v2/dialog/bots/{botId}

Delete a Bot.

Requires ANY permissions:

* dialog:bot:delete

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.DialogEngineApi();

let botId = "botId_example"; // String | ID of the bot.

apiInstance.deleteDialogBot(botId)
  .then(() => {
    console.log('deleteDialogBot returned successfully.');
  })
  .catch((err) => {
    console.log('There was a failure calling deleteDialogBot');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **botId** | **String** | ID of the bot. |  |
{: class="table table-striped"}

### Return type

void (no response body)

<a name="getDialogBot"></a>

# Bot getDialogBot(botId)


GET /api/v2/dialog/bots/{botId}

Get a Bot.

Requires ANY permissions:

* dialog:bot:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.DialogEngineApi();

let botId = "botId_example"; // String | ID of the bot.

apiInstance.getDialogBot(botId)
  .then((data) => {
    console.log(`getDialogBot success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getDialogBot');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **botId** | **String** | ID of the bot. |  |
{: class="table table-striped"}

### Return type

**Bot**

<a name="getDialogBotSession"></a>

# BotDialogSession getDialogBotSession(sessionId, botId)


GET /api/v2/dialog/bots/{botId}/sessions/{sessionId}

Retrieve a single dialog session.

Requires ANY permissions:

* dialog:dialogBotSession:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.DialogEngineApi();

let sessionId = "sessionId_example"; // String | ID of the dialog session.
let botId = "botId_example"; // String | ID of the dialog session's bot.

apiInstance.getDialogBotSession(sessionId, botId)
  .then((data) => {
    console.log(`getDialogBotSession success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getDialogBotSession');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **sessionId** | **String** | ID of the dialog session. |  |
 **botId** | **String** | ID of the dialog session's bot. |  |
{: class="table table-striped"}

### Return type

**BotDialogSession**

<a name="getDialogBotVersion"></a>

# BotVersion getDialogBotVersion(botId, versionId)


GET /api/v2/dialog/bots/{botId}/versions/{versionId}

Retrieve a single bot version.

Requires ANY permissions:

* dialog:botVersion:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.DialogEngineApi();

let botId = "botId_example"; // String | ID of the bot.
let versionId = "versionId_example"; // String | ID of the bot version.

apiInstance.getDialogBotVersion(botId, versionId)
  .then((data) => {
    console.log(`getDialogBotVersion success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getDialogBotVersion');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **botId** | **String** | ID of the bot. |  |
 **versionId** | **String** | ID of the bot version. |  |
{: class="table table-striped"}

### Return type

**BotVersion**

<a name="getDialogBotVersions"></a>

# BotVersionListing getDialogBotVersions(botId, opts)


GET /api/v2/dialog/bots/{botId}/versions

Get all bot versions.

Requires ANY permissions:

* dialog:botVersion:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.DialogEngineApi();

let botId = "botId_example"; // String | ID of the bot.
let opts = { 
  'after': "after_example", // String | The cursor that points to the end of the set of entities that has been returned.
  'pageSize': "pageSize_example", // String | Number of entities to return. Maximum of 200.
  'published': true // Boolean | Filter by published field.
};

apiInstance.getDialogBotVersions(botId, opts)
  .then((data) => {
    console.log(`getDialogBotVersions success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getDialogBotVersions');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **botId** | **String** | ID of the bot. |  |
 **after** | **String** | The cursor that points to the end of the set of entities that has been returned. | [optional]  |
 **pageSize** | **String** | Number of entities to return. Maximum of 200. | [optional]  |
 **published** | **Boolean** | Filter by published field. | [optional]  |
{: class="table table-striped"}

### Return type

**BotVersionListing**

<a name="getDialogBots"></a>

# BotListing getDialogBots(opts)


GET /api/v2/dialog/bots

Get all Bots.

Requires ANY permissions:

* dialog:bot:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.DialogEngineApi();

let opts = { 
  'after': "after_example", // String | The cursor that points to the end of the set of entities that has been returned.
  'pageSize': "pageSize_example" // String | Number of entities to return. Maximum of 200.
};

apiInstance.getDialogBots(opts)
  .then((data) => {
    console.log(`getDialogBots success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getDialogBots');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **after** | **String** | The cursor that points to the end of the set of entities that has been returned. | [optional]  |
 **pageSize** | **String** | Number of entities to return. Maximum of 200. | [optional]  |
{: class="table table-striped"}

### Return type

**BotListing**

<a name="getDialogIntegrationsBot"></a>

# Bot getDialogIntegrationsBot(botId)


GET /api/v2/dialog/integrations/bots/{botId}

Get an integration view of a Bot.

Requires ANY permissions:

* dialog:bot:view
* integrations:integration:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.DialogEngineApi();

let botId = "botId_example"; // String | ID of the bot.

apiInstance.getDialogIntegrationsBot(botId)
  .then((data) => {
    console.log(`getDialogIntegrationsBot success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getDialogIntegrationsBot');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **botId** | **String** | ID of the bot. |  |
{: class="table table-striped"}

### Return type

**Bot**

<a name="getDialogIntegrationsBotVersion"></a>

# BotVersion getDialogIntegrationsBotVersion(botId, versionId)


GET /api/v2/dialog/integrations/bots/{botId}/versions/{versionId}

Retrieve the integration view of a single bot version.

Requires ANY permissions:

* dialog:botVersion:view
* integrations:integration:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.DialogEngineApi();

let botId = "botId_example"; // String | ID of the bot.
let versionId = "versionId_example"; // String | ID of the bot version.

apiInstance.getDialogIntegrationsBotVersion(botId, versionId)
  .then((data) => {
    console.log(`getDialogIntegrationsBotVersion success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getDialogIntegrationsBotVersion');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **botId** | **String** | ID of the bot. |  |
 **versionId** | **String** | ID of the bot version. |  |
{: class="table table-striped"}

### Return type

**BotVersion**

<a name="getDialogIntegrationsBots"></a>

# DialogEngineIntegrationBotListing getDialogIntegrationsBots(opts)


GET /api/v2/dialog/integrations/bots

Get an integration view listing of all bots.

Requires ANY permissions:

* dialog:bot:view
* integrations:integration:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.DialogEngineApi();

let opts = { 
  'after': "after_example", // String | The cursor that points to the end of the set of entities that has been returned.
  'pageSize': "pageSize_example" // String | Number of entities to return. Maximum of 200.
};

apiInstance.getDialogIntegrationsBots(opts)
  .then((data) => {
    console.log(`getDialogIntegrationsBots success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getDialogIntegrationsBots');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **after** | **String** | The cursor that points to the end of the set of entities that has been returned. | [optional]  |
 **pageSize** | **String** | Number of entities to return. Maximum of 200. | [optional]  |
{: class="table table-striped"}

### Return type

**DialogEngineIntegrationBotListing**

<a name="patchDialogBotVersion"></a>

# BotVersion patchDialogBotVersion(botId, versionId, opts)


PATCH /api/v2/dialog/bots/{botId}/versions/{versionId}

Update a bot version.

Requires ANY permissions:

* dialog:botVersion:edit

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.DialogEngineApi();

let botId = "botId_example"; // String | ID of the bot.
let versionId = "versionId_example"; // String | ID of the bot version.
let opts = { 
  'body': {} // Object | 
};

apiInstance.patchDialogBotVersion(botId, versionId, opts)
  .then((data) => {
    console.log(`patchDialogBotVersion success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling patchDialogBotVersion');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **botId** | **String** | ID of the bot. |  |
 **versionId** | **String** | ID of the bot version. |  |
 **body** | **Object** |  | [optional]  |
{: class="table table-striped"}

### Return type

**BotVersion**

<a name="postDialogBotSessionTurns"></a>

# Turn postDialogBotSessionTurns(sessionId, botId, opts)


POST /api/v2/dialog/bots/{botId}/sessions/{sessionId}/turns

Send user-input turn for dialog session.

Requires ANY permissions:

* dialog:turn:add

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.DialogEngineApi();

let sessionId = "sessionId_example"; // String | ID of the dialog session.
let botId = "botId_example"; // String | ID of the dialog session's bot.
let opts = { 
  'body': {} // Object | 
};

apiInstance.postDialogBotSessionTurns(sessionId, botId, opts)
  .then((data) => {
    console.log(`postDialogBotSessionTurns success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling postDialogBotSessionTurns');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **sessionId** | **String** | ID of the dialog session. |  |
 **botId** | **String** | ID of the dialog session's bot. |  |
 **body** | **Object** |  | [optional]  |
{: class="table table-striped"}

### Return type

**Turn**

<a name="postDialogBotSessions"></a>

# BotDialogSession postDialogBotSessions(botId, opts)


POST /api/v2/dialog/bots/{botId}/sessions

Create a new dialog session.

Requires ANY permissions:

* dialog:dialogBotSession:add

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.DialogEngineApi();

let botId = "botId_example"; // String | ID of the dialog session's bot.
let opts = { 
  'body': {} // Object | 
};

apiInstance.postDialogBotSessions(botId, opts)
  .then((data) => {
    console.log(`postDialogBotSessions success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling postDialogBotSessions');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **botId** | **String** | ID of the dialog session's bot. |  |
 **body** | **Object** |  | [optional]  |
{: class="table table-striped"}

### Return type

**BotDialogSession**

<a name="postDialogBotVersions"></a>

# BotVersion postDialogBotVersions(botId, opts)


POST /api/v2/dialog/bots/{botId}/versions

Create a new bot version.

Requires ANY permissions:

* dialog:botVersion:add

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.DialogEngineApi();

let botId = "botId_example"; // String | ID of the bot.
let opts = { 
  'body': {} // Object | 
};

apiInstance.postDialogBotVersions(botId, opts)
  .then((data) => {
    console.log(`postDialogBotVersions success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling postDialogBotVersions');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **botId** | **String** | ID of the bot. |  |
 **body** | **Object** |  | [optional]  |
{: class="table table-striped"}

### Return type

**BotVersion**

<a name="postDialogBots"></a>

# Bot postDialogBots(opts)


POST /api/v2/dialog/bots

Create a new Bot.

Requires ANY permissions:

* dialog:bot:add

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.DialogEngineApi();

let opts = { 
  'body': {} // Object | 
};

apiInstance.postDialogBots(opts)
  .then((data) => {
    console.log(`postDialogBots success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling postDialogBots');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **body** | **Object** |  | [optional]  |
{: class="table table-striped"}

### Return type

**Bot**

<a name="putDialogBot"></a>

# Bot putDialogBot(botId, opts)


PUT /api/v2/dialog/bots/{botId}

Modify a Bot.

Requires ANY permissions:

* dialog:bot:edit

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.DialogEngineApi();

let botId = "botId_example"; // String | ID of the bot.
let opts = { 
  'body': {} // Object | 
};

apiInstance.putDialogBot(botId, opts)
  .then((data) => {
    console.log(`putDialogBot success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling putDialogBot');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **botId** | **String** | ID of the bot. |  |
 **body** | **Object** |  | [optional]  |
{: class="table table-striped"}

### Return type

**Bot**

