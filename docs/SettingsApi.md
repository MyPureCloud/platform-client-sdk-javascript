# SettingsApi

# platformClient.SettingsApi

All URIs are relative to *https://api.mypurecloud.com*

| Method | HTTP request | Description |
| ------------- | ------------- | ------------- |
[**deleteEmailsSettingsThreading**](SettingsApi#deleteEmailsSettingsThreading) | **DELETE** /api/v2/emails/settings/threading | Reset email threading settings to default
[**deleteExternalcontactsSettings**](SettingsApi#deleteExternalcontactsSettings) | **DELETE** /api/v2/externalcontacts/settings | Delete settings
[**deleteUsersAgentuiAgentsAutoanswerAgentIdSettings**](SettingsApi#deleteUsersAgentuiAgentsAutoanswerAgentIdSettings) | **DELETE** /api/v2/users/agentui/agents/autoanswer/{agentId}/settings | Delete agent auto answer settings
[**getEmailsSettings**](SettingsApi#getEmailsSettings) | **GET** /api/v2/emails/settings | Get email Contact Center settings
[**getEmailsSettingsThreading**](SettingsApi#getEmailsSettingsThreading) | **GET** /api/v2/emails/settings/threading | Get email threading settings
[**getExternalcontactsSettings**](SettingsApi#getExternalcontactsSettings) | **GET** /api/v2/externalcontacts/settings | Get settings
[**getSettingsExecutiondata**](SettingsApi#getSettingsExecutiondata) | **GET** /api/v2/settings/executiondata | Get the execution history enabled setting.
[**getUsersAgentuiAgentsAutoanswerAgentIdSettings**](SettingsApi#getUsersAgentuiAgentsAutoanswerAgentIdSettings) | **GET** /api/v2/users/agentui/agents/autoanswer/{agentId}/settings | Get agent auto answer settings
[**patchEmailsSettings**](SettingsApi#patchEmailsSettings) | **PATCH** /api/v2/emails/settings | Patch email Contact Center settings
[**patchEmailsSettingsThreading**](SettingsApi#patchEmailsSettingsThreading) | **PATCH** /api/v2/emails/settings/threading | Patch email threading settings
[**patchSettingsExecutiondata**](SettingsApi#patchSettingsExecutiondata) | **PATCH** /api/v2/settings/executiondata | Edit the execution history on off setting.
[**patchUsersAgentuiAgentsAutoanswerAgentIdSettings**](SettingsApi#patchUsersAgentuiAgentsAutoanswerAgentIdSettings) | **PATCH** /api/v2/users/agentui/agents/autoanswer/{agentId}/settings | Update agent auto answer settings
[**putExternalcontactsSettings**](SettingsApi#putExternalcontactsSettings) | **PUT** /api/v2/externalcontacts/settings | Set settings
[**putUsersAgentuiAgentsAutoanswerAgentIdSettings**](SettingsApi#putUsersAgentuiAgentsAutoanswerAgentIdSettings) | **PUT** /api/v2/users/agentui/agents/autoanswer/{agentId}/settings | Set agent auto answer settings



## deleteEmailsSettingsThreading

> void deleteEmailsSettingsThreading(opts)


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

let apiInstance = new platformClient.SettingsApi();
let opts = { 
  'customHeaders': {  // Object.<string, string> | Request Custom Headers
    'X-Service-Name': 'customer-service',
    'X-Request-ID': 'req-12345'
  }
};

apiInstance.deleteEmailsSettingsThreading(opts)
  .then(() => {
    console.log('deleteEmailsSettingsThreading returned successfully.');
  })
  .catch((err) => {
    console.log('There was a failure calling deleteEmailsSettingsThreading');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **customHeaders** | **Object.<string, string>** | Request Custom Headers | [optional] |

### Return type

void (no response body)


## deleteExternalcontactsSettings

> UpdatedSettingsResponse deleteExternalcontactsSettings(opts)


DELETE /api/v2/externalcontacts/settings

Delete settings

Requires ANY permissions:

* externalContacts:settings:delete

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.SettingsApi();
let opts = { 
  'customHeaders': {  // Object.<string, string> | Request Custom Headers
    'X-Service-Name': 'customer-service',
    'X-Request-ID': 'req-12345'
  }
};

apiInstance.deleteExternalcontactsSettings(opts)
  .then((data) => {
    console.log(`deleteExternalcontactsSettings success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling deleteExternalcontactsSettings');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **customHeaders** | **Object.<string, string>** | Request Custom Headers | [optional] |

### Return type

**UpdatedSettingsResponse**


## deleteUsersAgentuiAgentsAutoanswerAgentIdSettings

> void deleteUsersAgentuiAgentsAutoanswerAgentIdSettings(agentId, opts)


DELETE /api/v2/users/agentui/agents/autoanswer/{agentId}/settings

Delete agent auto answer settings

Requires ANY permissions:

* agentUI:agents:delete

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.SettingsApi();

let agentId = "agentId_example"; // String | The agent to apply the auto answer settings to
let opts = { 
  'customHeaders': {  // Object.<string, string> | Request Custom Headers
    'X-Service-Name': 'customer-service',
    'X-Request-ID': 'req-12345'
  }
};

apiInstance.deleteUsersAgentuiAgentsAutoanswerAgentIdSettings(agentId, opts)
  .then(() => {
    console.log('deleteUsersAgentuiAgentsAutoanswerAgentIdSettings returned successfully.');
  })
  .catch((err) => {
    console.log('There was a failure calling deleteUsersAgentuiAgentsAutoanswerAgentIdSettings');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **agentId** | **String** | The agent to apply the auto answer settings to |  |
 **customHeaders** | **Object.<string, string>** | Request Custom Headers | [optional] |

### Return type

void (no response body)


## getEmailsSettings

> EmailSettings getEmailsSettings(opts)


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

let apiInstance = new platformClient.SettingsApi();
let opts = { 
  'customHeaders': {  // Object.<string, string> | Request Custom Headers
    'X-Service-Name': 'customer-service',
    'X-Request-ID': 'req-12345'
  }
};

apiInstance.getEmailsSettings(opts)
  .then((data) => {
    console.log(`getEmailsSettings success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getEmailsSettings');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **customHeaders** | **Object.<string, string>** | Request Custom Headers | [optional] |

### Return type

**EmailSettings**


## getEmailsSettingsThreading

> EmailThreadingSettings getEmailsSettingsThreading(opts)


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

let apiInstance = new platformClient.SettingsApi();
let opts = { 
  'customHeaders': {  // Object.<string, string> | Request Custom Headers
    'X-Service-Name': 'customer-service',
    'X-Request-ID': 'req-12345'
  }
};

apiInstance.getEmailsSettingsThreading(opts)
  .then((data) => {
    console.log(`getEmailsSettingsThreading success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getEmailsSettingsThreading');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **customHeaders** | **Object.<string, string>** | Request Custom Headers | [optional] |

### Return type

**EmailThreadingSettings**


## getExternalcontactsSettings

> ExternalContactsSettings getExternalcontactsSettings(opts)


GET /api/v2/externalcontacts/settings

Get settings

Requires ANY permissions:

* externalContacts:settings:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.SettingsApi();
let opts = { 
  'customHeaders': {  // Object.<string, string> | Request Custom Headers
    'X-Service-Name': 'customer-service',
    'X-Request-ID': 'req-12345'
  }
};

apiInstance.getExternalcontactsSettings(opts)
  .then((data) => {
    console.log(`getExternalcontactsSettings success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getExternalcontactsSettings');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **customHeaders** | **Object.<string, string>** | Request Custom Headers | [optional] |

### Return type

**ExternalContactsSettings**


## getSettingsExecutiondata

> ExecutionDataGlobalSettingsResponse getSettingsExecutiondata(opts)


GET /api/v2/settings/executiondata

Get the execution history enabled setting.

Get the execution history enabled setting.

Requires ANY permissions:

* settings:executiondata:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.SettingsApi();
let opts = { 
  'customHeaders': {  // Object.<string, string> | Request Custom Headers
    'X-Service-Name': 'customer-service',
    'X-Request-ID': 'req-12345'
  }
};

apiInstance.getSettingsExecutiondata(opts)
  .then((data) => {
    console.log(`getSettingsExecutiondata success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getSettingsExecutiondata');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **customHeaders** | **Object.<string, string>** | Request Custom Headers | [optional] |

### Return type

**ExecutionDataGlobalSettingsResponse**


## getUsersAgentuiAgentsAutoanswerAgentIdSettings

> AutoAnswerSettings getUsersAgentuiAgentsAutoanswerAgentIdSettings(agentId, opts)


GET /api/v2/users/agentui/agents/autoanswer/{agentId}/settings

Get agent auto answer settings

Requires ANY permissions:

* agentUI:agents:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.SettingsApi();

let agentId = "agentId_example"; // String | The agent to apply the auto answer settings to
let opts = { 
  'customHeaders': {  // Object.<string, string> | Request Custom Headers
    'X-Service-Name': 'customer-service',
    'X-Request-ID': 'req-12345'
  }
};

apiInstance.getUsersAgentuiAgentsAutoanswerAgentIdSettings(agentId, opts)
  .then((data) => {
    console.log(`getUsersAgentuiAgentsAutoanswerAgentIdSettings success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getUsersAgentuiAgentsAutoanswerAgentIdSettings');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **agentId** | **String** | The agent to apply the auto answer settings to |  |
 **customHeaders** | **Object.<string, string>** | Request Custom Headers | [optional] |

### Return type

**AutoAnswerSettings**


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

let apiInstance = new platformClient.SettingsApi();

let opts = { 
  'body': {}, // Object | 
  'customHeaders': {  // Object.<string, string> | Request Custom Headers
    'X-Service-Name': 'customer-service',
    'X-Request-ID': 'req-12345'
  }
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
 **customHeaders** | **Object.<string, string>** | Request Custom Headers | [optional] |

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

let apiInstance = new platformClient.SettingsApi();

let opts = { 
  'body': {}, // Object | 
  'customHeaders': {  // Object.<string, string> | Request Custom Headers
    'X-Service-Name': 'customer-service',
    'X-Request-ID': 'req-12345'
  }
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
 **customHeaders** | **Object.<string, string>** | Request Custom Headers | [optional] |

### Return type

**EmailThreadingSettings**


## patchSettingsExecutiondata

> ExecutionDataGlobalSettingsResponse patchSettingsExecutiondata(body, opts)


PATCH /api/v2/settings/executiondata

Edit the execution history on off setting.

Edit the execution history on off setting.

Requires ANY permissions:

* settings:executiondata:edit

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.SettingsApi();

let body = {}; // Object | New Execution Data Setting
let opts = { 
  'customHeaders': {  // Object.<string, string> | Request Custom Headers
    'X-Service-Name': 'customer-service',
    'X-Request-ID': 'req-12345'
  }
};

apiInstance.patchSettingsExecutiondata(body, opts)
  .then((data) => {
    console.log(`patchSettingsExecutiondata success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling patchSettingsExecutiondata');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **body** | **Object** | New Execution Data Setting |  |
 **customHeaders** | **Object.<string, string>** | Request Custom Headers | [optional] |

### Return type

**ExecutionDataGlobalSettingsResponse**


## patchUsersAgentuiAgentsAutoanswerAgentIdSettings

> AutoAnswerSettings patchUsersAgentuiAgentsAutoanswerAgentIdSettings(agentId, body, opts)


PATCH /api/v2/users/agentui/agents/autoanswer/{agentId}/settings

Update agent auto answer settings

Requires ANY permissions:

* agentUI:agents:edit

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.SettingsApi();

let agentId = "agentId_example"; // String | The agent to apply the auto answer settings to
let body = {}; // Object | AutoAnswerSettings
let opts = { 
  'customHeaders': {  // Object.<string, string> | Request Custom Headers
    'X-Service-Name': 'customer-service',
    'X-Request-ID': 'req-12345'
  }
};

apiInstance.patchUsersAgentuiAgentsAutoanswerAgentIdSettings(agentId, body, opts)
  .then((data) => {
    console.log(`patchUsersAgentuiAgentsAutoanswerAgentIdSettings success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling patchUsersAgentuiAgentsAutoanswerAgentIdSettings');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **agentId** | **String** | The agent to apply the auto answer settings to |  |
 **body** | **Object** | AutoAnswerSettings |  |
 **customHeaders** | **Object.<string, string>** | Request Custom Headers | [optional] |

### Return type

**AutoAnswerSettings**


## putExternalcontactsSettings

> UpdatedSettingsResponse putExternalcontactsSettings(opts)


PUT /api/v2/externalcontacts/settings

Set settings

Requires ANY permissions:

* externalContacts:settings:edit

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.SettingsApi();

let opts = { 
  'body': {}, // Object | 
  'customHeaders': {  // Object.<string, string> | Request Custom Headers
    'X-Service-Name': 'customer-service',
    'X-Request-ID': 'req-12345'
  }
};

apiInstance.putExternalcontactsSettings(opts)
  .then((data) => {
    console.log(`putExternalcontactsSettings success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling putExternalcontactsSettings');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **body** | **Object** |  | [optional]  |
 **customHeaders** | **Object.<string, string>** | Request Custom Headers | [optional] |

### Return type

**UpdatedSettingsResponse**


## putUsersAgentuiAgentsAutoanswerAgentIdSettings

> AutoAnswerSettings putUsersAgentuiAgentsAutoanswerAgentIdSettings(agentId, body, opts)


PUT /api/v2/users/agentui/agents/autoanswer/{agentId}/settings

Set agent auto answer settings

Requires ANY permissions:

* agentUI:agents:edit

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.SettingsApi();

let agentId = "agentId_example"; // String | The agent to apply the auto answer settings to
let body = {}; // Object | AutoAnswerSettings
let opts = { 
  'customHeaders': {  // Object.<string, string> | Request Custom Headers
    'X-Service-Name': 'customer-service',
    'X-Request-ID': 'req-12345'
  }
};

apiInstance.putUsersAgentuiAgentsAutoanswerAgentIdSettings(agentId, body, opts)
  .then((data) => {
    console.log(`putUsersAgentuiAgentsAutoanswerAgentIdSettings success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling putUsersAgentuiAgentsAutoanswerAgentIdSettings');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **agentId** | **String** | The agent to apply the auto answer settings to |  |
 **body** | **Object** | AutoAnswerSettings |  |
 **customHeaders** | **Object.<string, string>** | Request Custom Headers | [optional] |

### Return type

**AutoAnswerSettings**


_purecloud-platform-client-v2@251.0.0_
