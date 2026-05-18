# LanguagesApi

# platformClient.LanguagesApi

All URIs are relative to *https://api.mypurecloud.com*

| Method | HTTP request | Description |
| ------------- | ------------- | ------------- |
[**deleteLanguage**](LanguagesApi#deleteLanguage) | **DELETE** /api/v2/languages/{languageId} | Delete Language (Deprecated)
[**getLanguage**](LanguagesApi#getLanguage) | **GET** /api/v2/languages/{languageId} | Get Language (Deprecated)
[**getLanguages**](LanguagesApi#getLanguages) | **GET** /api/v2/languages | Get the list of supported languages. (Deprecated)
[**getLanguagesTranslations**](LanguagesApi#getLanguagesTranslations) | **GET** /api/v2/languages/translations | Get all available languages for translation
[**getLanguagesTranslationsBuiltin**](LanguagesApi#getLanguagesTranslationsBuiltin) | **GET** /api/v2/languages/translations/builtin | Get the builtin translation for a language
[**getLanguagesTranslationsOrganization**](LanguagesApi#getLanguagesTranslationsOrganization) | **GET** /api/v2/languages/translations/organization | Get effective translation for an organization by language
[**getLanguagesTranslationsUser**](LanguagesApi#getLanguagesTranslationsUser) | **GET** /api/v2/languages/translations/users/{userId} | Get effective language translation for a user
[**postLanguages**](LanguagesApi#postLanguages) | **POST** /api/v2/languages | Create Language (Deprecated)



## deleteLanguage

> void deleteLanguage(languageId, opts)

:::{"alert":"warning","title":"Deprecated","collapsible":false,"autoCollapse":false}
This resource has been deprecated
:::

DELETE /api/v2/languages/{languageId}

Delete Language (Deprecated)

This endpoint is deprecated. Please see the Routing API (DELETE /api/v2/routing/languages/{languageId})

Requires ANY permissions:

* routing:skill:manage

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.LanguagesApi();

let languageId = "languageId_example"; // String | Language ID
let opts = { 
  'customHeaders': {  // Object.<string, string> | Request Custom Headers
    'X-Service-Name': 'customer-service',
    'X-Request-ID': 'req-12345'
  }
};

apiInstance.deleteLanguage(languageId, opts)
  .then(() => {
    console.log('deleteLanguage returned successfully.');
  })
  .catch((err) => {
    console.log('There was a failure calling deleteLanguage');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **languageId** | **String** | Language ID |  |
 **customHeaders** | **Object.<string, string>** | Request Custom Headers | [optional] |

### Return type

void (no response body)


## getLanguage

> Language getLanguage(languageId, opts)

:::{"alert":"warning","title":"Deprecated","collapsible":false,"autoCollapse":false}
This resource has been deprecated
:::

GET /api/v2/languages/{languageId}

Get Language (Deprecated)

This endpoint is deprecated. Please see the Routing API (GET /api/v2/routing/languages/{languageId})

Requires ANY permissions:

* routing:skill:manage

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.LanguagesApi();

let languageId = "languageId_example"; // String | Language ID
let opts = { 
  'customHeaders': {  // Object.<string, string> | Request Custom Headers
    'X-Service-Name': 'customer-service',
    'X-Request-ID': 'req-12345'
  }
};

apiInstance.getLanguage(languageId, opts)
  .then((data) => {
    console.log(`getLanguage success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getLanguage');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **languageId** | **String** | Language ID |  |
 **customHeaders** | **Object.<string, string>** | Request Custom Headers | [optional] |

### Return type

**Language**


## getLanguages

> LanguageEntityListing getLanguages(opts)

:::{"alert":"warning","title":"Deprecated","collapsible":false,"autoCollapse":false}
This resource has been deprecated
:::

GET /api/v2/languages

Get the list of supported languages. (Deprecated)

This endpoint is deprecated. Please see the Routing API (GET /api/v2/routing/languages)

Requires ANY permissions:

* routing:skill:manage

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.LanguagesApi();

let opts = { 
  'pageSize': 25, // Number | Page size
  'pageNumber': 1, // Number | Page number
  'sortOrder': "ASC", // String | Ascending or descending sort order
  'name': "name_example", // String | Name
  'customHeaders': {  // Object.<string, string> | Request Custom Headers
    'X-Service-Name': 'customer-service',
    'X-Request-ID': 'req-12345'
  }
};

apiInstance.getLanguages(opts)
  .then((data) => {
    console.log(`getLanguages success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getLanguages');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **pageSize** | **Number** | Page size | [optional] [default to 25] |
 **pageNumber** | **Number** | Page number | [optional] [default to 1] |
 **sortOrder** | **String** | Ascending or descending sort order | [optional] [default to ASC]<br />**Values**: ascending, descending |
 **name** | **String** | Name | [optional]  |
 **customHeaders** | **Object.<string, string>** | Request Custom Headers | [optional] |

### Return type

**LanguageEntityListing**


## getLanguagesTranslations

> AvailableTranslations getLanguagesTranslations(opts)


GET /api/v2/languages/translations

Get all available languages for translation

Requires NO permissions:

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.LanguagesApi();
let opts = { 
  'customHeaders': {  // Object.<string, string> | Request Custom Headers
    'X-Service-Name': 'customer-service',
    'X-Request-ID': 'req-12345'
  }
};

apiInstance.getLanguagesTranslations(opts)
  .then((data) => {
    console.log(`getLanguagesTranslations success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getLanguagesTranslations');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **customHeaders** | **Object.<string, string>** | Request Custom Headers | [optional] |

### Return type

**AvailableTranslations**


## getLanguagesTranslationsBuiltin

> **{&#39;String&#39;: Object}** getLanguagesTranslationsBuiltin(language, opts)


GET /api/v2/languages/translations/builtin

Get the builtin translation for a language

Requires NO permissions:

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.LanguagesApi();

let language = "language_example"; // String | The language of the builtin translation to retrieve
let opts = { 
  'customHeaders': {  // Object.<string, string> | Request Custom Headers
    'X-Service-Name': 'customer-service',
    'X-Request-ID': 'req-12345'
  }
};

apiInstance.getLanguagesTranslationsBuiltin(language, opts)
  .then((data) => {
    console.log(`getLanguagesTranslationsBuiltin success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getLanguagesTranslationsBuiltin');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **language** | **String** | The language of the builtin translation to retrieve |  |
 **customHeaders** | **Object.<string, string>** | Request Custom Headers | [optional] |

### Return type

**{&#39;String&#39;: Object}**


## getLanguagesTranslationsOrganization

> **{&#39;String&#39;: Object}** getLanguagesTranslationsOrganization(language, opts)


GET /api/v2/languages/translations/organization

Get effective translation for an organization by language

Requires NO permissions:

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.LanguagesApi();

let language = "language_example"; // String | The language of the translation to retrieve for the organization
let opts = { 
  'customHeaders': {  // Object.<string, string> | Request Custom Headers
    'X-Service-Name': 'customer-service',
    'X-Request-ID': 'req-12345'
  }
};

apiInstance.getLanguagesTranslationsOrganization(language, opts)
  .then((data) => {
    console.log(`getLanguagesTranslationsOrganization success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getLanguagesTranslationsOrganization');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **language** | **String** | The language of the translation to retrieve for the organization |  |
 **customHeaders** | **Object.<string, string>** | Request Custom Headers | [optional] |

### Return type

**{&#39;String&#39;: Object}**


## getLanguagesTranslationsUser

> **{&#39;String&#39;: Object}** getLanguagesTranslationsUser(userId, opts)


GET /api/v2/languages/translations/users/{userId}

Get effective language translation for a user

Requires NO permissions:

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.LanguagesApi();

let userId = "userId_example"; // String | The user id
let opts = { 
  'customHeaders': {  // Object.<string, string> | Request Custom Headers
    'X-Service-Name': 'customer-service',
    'X-Request-ID': 'req-12345'
  }
};

apiInstance.getLanguagesTranslationsUser(userId, opts)
  .then((data) => {
    console.log(`getLanguagesTranslationsUser success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getLanguagesTranslationsUser');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **userId** | **String** | The user id |  |
 **customHeaders** | **Object.<string, string>** | Request Custom Headers | [optional] |

### Return type

**{&#39;String&#39;: Object}**


## postLanguages

> Language postLanguages(body, opts)

:::{"alert":"warning","title":"Deprecated","collapsible":false,"autoCollapse":false}
This resource has been deprecated
:::

POST /api/v2/languages

Create Language (Deprecated)

This endpoint is deprecated. Please see the Routing API. (POST /api/v2/routing/languages

Requires ANY permissions:

* routing:skill:manage

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.LanguagesApi();

let body = {}; // Object | Language
let opts = { 
  'customHeaders': {  // Object.<string, string> | Request Custom Headers
    'X-Service-Name': 'customer-service',
    'X-Request-ID': 'req-12345'
  }
};

apiInstance.postLanguages(body, opts)
  .then((data) => {
    console.log(`postLanguages success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling postLanguages');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **body** | **Object** | Language |  |
 **customHeaders** | **Object.<string, string>** | Request Custom Headers | [optional] |

### Return type

**Language**


_purecloud-platform-client-v2@252.1.0_
