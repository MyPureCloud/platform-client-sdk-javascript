# MessagingApi

# platformClient.MessagingApi

All URIs are relative to *https://api.mypurecloud.com*

| Method | HTTP request | Description |
| ------------- | ------------- | ------------- |
[**deleteMessagingSetting**](MessagingApi#deleteMessagingSetting) | **DELETE** /api/v2/messaging/settings/{messageSettingId} | Delete a messaging setting
[**deleteMessagingSettingsDefault**](MessagingApi#deleteMessagingSettingsDefault) | **DELETE** /api/v2/messaging/settings/default | Delete the organization's default setting, a global default will be applied to integrations without settings
[**deleteMessagingSupportedcontentSupportedContentId**](MessagingApi#deleteMessagingSupportedcontentSupportedContentId) | **DELETE** /api/v2/messaging/supportedcontent/{supportedContentId} | Delete a supported content profile
[**getMessagingSetting**](MessagingApi#getMessagingSetting) | **GET** /api/v2/messaging/settings/{messageSettingId} | Get a messaging setting
[**getMessagingSettings**](MessagingApi#getMessagingSettings) | **GET** /api/v2/messaging/settings | Get a list of messaging settings
[**getMessagingSettingsDefault**](MessagingApi#getMessagingSettingsDefault) | **GET** /api/v2/messaging/settings/default | Get the organization's default settings that will be used as the default when creating an integration.
[**getMessagingSupportedcontent**](MessagingApi#getMessagingSupportedcontent) | **GET** /api/v2/messaging/supportedcontent | Get a list of Supported Content profiles
[**getMessagingSupportedcontentSupportedContentId**](MessagingApi#getMessagingSupportedcontentSupportedContentId) | **GET** /api/v2/messaging/supportedcontent/{supportedContentId} | Get a supported content profile
[**patchMessagingSetting**](MessagingApi#patchMessagingSetting) | **PATCH** /api/v2/messaging/settings/{messageSettingId} | Update a messaging setting
[**patchMessagingSupportedcontentSupportedContentId**](MessagingApi#patchMessagingSupportedcontentSupportedContentId) | **PATCH** /api/v2/messaging/supportedcontent/{supportedContentId} | Update a supported content profile
[**postMessagingSettings**](MessagingApi#postMessagingSettings) | **POST** /api/v2/messaging/settings | Create a messaging setting
[**postMessagingSupportedcontent**](MessagingApi#postMessagingSupportedcontent) | **POST** /api/v2/messaging/supportedcontent | Create a Supported Content profile
[**putMessagingSettingsDefault**](MessagingApi#putMessagingSettingsDefault) | **PUT** /api/v2/messaging/settings/default | Set the organization's default settings that may be applied to an integration when it is created.



## deleteMessagingSetting

> void deleteMessagingSetting(messageSettingId, opts)

:::{"alert":"warning","title":"Deprecated","collapsible":false,"autoCollapse":false}
This resource has been deprecated
:::

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

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.MessagingApi();

let messageSettingId = "messageSettingId_example"; // String | Message Settings ID
let opts = { 
  'customHeaders': {  // Object.<string, string> | Request Custom Headers
    'X-Service-Name': 'customer-service',
    'X-Request-ID': 'req-12345'
  }
};

apiInstance.deleteMessagingSetting(messageSettingId, opts)
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
 **customHeaders** | **Object.<string, string>** | Request Custom Headers | [optional] |

### Return type

void (no response body)


## deleteMessagingSettingsDefault

> void deleteMessagingSettingsDefault(opts)

:::{"alert":"warning","title":"Deprecated","collapsible":false,"autoCollapse":false}
This resource has been deprecated
:::

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

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.MessagingApi();
let opts = { 
  'customHeaders': {  // Object.<string, string> | Request Custom Headers
    'X-Service-Name': 'customer-service',
    'X-Request-ID': 'req-12345'
  }
};

apiInstance.deleteMessagingSettingsDefault(opts)
  .then(() => {
    console.log('deleteMessagingSettingsDefault returned successfully.');
  })
  .catch((err) => {
    console.log('There was a failure calling deleteMessagingSettingsDefault');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **customHeaders** | **Object.<string, string>** | Request Custom Headers | [optional] |

### Return type

void (no response body)


## deleteMessagingSupportedcontentSupportedContentId

> void deleteMessagingSupportedcontentSupportedContentId(supportedContentId, opts)

:::{"alert":"warning","title":"Deprecated","collapsible":false,"autoCollapse":false}
This resource has been deprecated
:::

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

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.MessagingApi();

let supportedContentId = "supportedContentId_example"; // String | Supported Content ID
let opts = { 
  'customHeaders': {  // Object.<string, string> | Request Custom Headers
    'X-Service-Name': 'customer-service',
    'X-Request-ID': 'req-12345'
  }
};

apiInstance.deleteMessagingSupportedcontentSupportedContentId(supportedContentId, opts)
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
 **customHeaders** | **Object.<string, string>** | Request Custom Headers | [optional] |

### Return type

void (no response body)


## getMessagingSetting

> MessagingSetting getMessagingSetting(messageSettingId, opts)

:::{"alert":"warning","title":"Deprecated","collapsible":false,"autoCollapse":false}
This resource has been deprecated
:::

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

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.MessagingApi();

let messageSettingId = "messageSettingId_example"; // String | Message Settings ID
let opts = { 
  'customHeaders': {  // Object.<string, string> | Request Custom Headers
    'X-Service-Name': 'customer-service',
    'X-Request-ID': 'req-12345'
  }
};

apiInstance.getMessagingSetting(messageSettingId, opts)
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
 **customHeaders** | **Object.<string, string>** | Request Custom Headers | [optional] |

### Return type

**MessagingSetting**


## getMessagingSettings

> MessagingConfigListing getMessagingSettings(opts)

:::{"alert":"warning","title":"Deprecated","collapsible":false,"autoCollapse":false}
This resource has been deprecated
:::

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

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.MessagingApi();

let opts = { 
  'pageSize': 25, // Number | Page size
  'pageNumber': 1, // Number | Page number
  'customHeaders': {  // Object.<string, string> | Request Custom Headers
    'X-Service-Name': 'customer-service',
    'X-Request-ID': 'req-12345'
  }
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
 **customHeaders** | **Object.<string, string>** | Request Custom Headers | [optional] |

### Return type

**MessagingConfigListing**


## getMessagingSettingsDefault

> MessagingSetting getMessagingSettingsDefault(opts)

:::{"alert":"warning","title":"Deprecated","collapsible":false,"autoCollapse":false}
This resource has been deprecated
:::

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

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.MessagingApi();
let opts = { 
  'customHeaders': {  // Object.<string, string> | Request Custom Headers
    'X-Service-Name': 'customer-service',
    'X-Request-ID': 'req-12345'
  }
};

apiInstance.getMessagingSettingsDefault(opts)
  .then((data) => {
    console.log(`getMessagingSettingsDefault success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getMessagingSettingsDefault');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **customHeaders** | **Object.<string, string>** | Request Custom Headers | [optional] |

### Return type

**MessagingSetting**


## getMessagingSupportedcontent

> SupportedContentListing getMessagingSupportedcontent(opts)

:::{"alert":"warning","title":"Deprecated","collapsible":false,"autoCollapse":false}
This resource has been deprecated
:::

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

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.MessagingApi();

let opts = { 
  'pageSize': 25, // Number | Page size
  'pageNumber': 1, // Number | Page number
  'customHeaders': {  // Object.<string, string> | Request Custom Headers
    'X-Service-Name': 'customer-service',
    'X-Request-ID': 'req-12345'
  }
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
 **customHeaders** | **Object.<string, string>** | Request Custom Headers | [optional] |

### Return type

**SupportedContentListing**


## getMessagingSupportedcontentSupportedContentId

> SupportedContent getMessagingSupportedcontentSupportedContentId(supportedContentId, opts)

:::{"alert":"warning","title":"Deprecated","collapsible":false,"autoCollapse":false}
This resource has been deprecated
:::

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

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.MessagingApi();

let supportedContentId = "supportedContentId_example"; // String | Supported Content ID
let opts = { 
  'customHeaders': {  // Object.<string, string> | Request Custom Headers
    'X-Service-Name': 'customer-service',
    'X-Request-ID': 'req-12345'
  }
};

apiInstance.getMessagingSupportedcontentSupportedContentId(supportedContentId, opts)
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
 **customHeaders** | **Object.<string, string>** | Request Custom Headers | [optional] |

### Return type

**SupportedContent**


## patchMessagingSetting

> MessagingSetting patchMessagingSetting(messageSettingId, body, opts)

:::{"alert":"warning","title":"Deprecated","collapsible":false,"autoCollapse":false}
This resource has been deprecated
:::

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

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.MessagingApi();

let messageSettingId = "messageSettingId_example"; // String | Message Settings ID
let body = {}; // Object | MessagingSetting
let opts = { 
  'customHeaders': {  // Object.<string, string> | Request Custom Headers
    'X-Service-Name': 'customer-service',
    'X-Request-ID': 'req-12345'
  }
};

apiInstance.patchMessagingSetting(messageSettingId, body, opts)
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
 **customHeaders** | **Object.<string, string>** | Request Custom Headers | [optional] |

### Return type

**MessagingSetting**


## patchMessagingSupportedcontentSupportedContentId

> SupportedContent patchMessagingSupportedcontentSupportedContentId(supportedContentId, body, opts)

:::{"alert":"warning","title":"Deprecated","collapsible":false,"autoCollapse":false}
This resource has been deprecated
:::

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

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.MessagingApi();

let supportedContentId = "supportedContentId_example"; // String | Supported Content ID
let body = {}; // Object | SupportedContent
let opts = { 
  'customHeaders': {  // Object.<string, string> | Request Custom Headers
    'X-Service-Name': 'customer-service',
    'X-Request-ID': 'req-12345'
  }
};

apiInstance.patchMessagingSupportedcontentSupportedContentId(supportedContentId, body, opts)
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
 **customHeaders** | **Object.<string, string>** | Request Custom Headers | [optional] |

### Return type

**SupportedContent**


## postMessagingSettings

> MessagingSetting postMessagingSettings(body, opts)

:::{"alert":"warning","title":"Deprecated","collapsible":false,"autoCollapse":false}
This resource has been deprecated
:::

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

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.MessagingApi();

let body = {}; // Object | MessagingSetting
let opts = { 
  'customHeaders': {  // Object.<string, string> | Request Custom Headers
    'X-Service-Name': 'customer-service',
    'X-Request-ID': 'req-12345'
  }
};

apiInstance.postMessagingSettings(body, opts)
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
 **customHeaders** | **Object.<string, string>** | Request Custom Headers | [optional] |

### Return type

**MessagingSetting**


## postMessagingSupportedcontent

> SupportedContent postMessagingSupportedcontent(body, opts)

:::{"alert":"warning","title":"Deprecated","collapsible":false,"autoCollapse":false}
This resource has been deprecated
:::

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

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.MessagingApi();

let body = {}; // Object | SupportedContent
let opts = { 
  'customHeaders': {  // Object.<string, string> | Request Custom Headers
    'X-Service-Name': 'customer-service',
    'X-Request-ID': 'req-12345'
  }
};

apiInstance.postMessagingSupportedcontent(body, opts)
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
 **customHeaders** | **Object.<string, string>** | Request Custom Headers | [optional] |

### Return type

**SupportedContent**


## putMessagingSettingsDefault

> MessagingSetting putMessagingSettingsDefault(body, opts)

:::{"alert":"warning","title":"Deprecated","collapsible":false,"autoCollapse":false}
This resource has been deprecated
:::

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

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.MessagingApi();

let body = {}; // Object | Messaging Setting ID
let opts = { 
  'customHeaders': {  // Object.<string, string> | Request Custom Headers
    'X-Service-Name': 'customer-service',
    'X-Request-ID': 'req-12345'
  }
};

apiInstance.putMessagingSettingsDefault(body, opts)
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
 **customHeaders** | **Object.<string, string>** | Request Custom Headers | [optional] |

### Return type

**MessagingSetting**


_purecloud-platform-client-v2@252.1.0_
