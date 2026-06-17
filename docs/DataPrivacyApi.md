# DataPrivacyApi

# platformClient.DataPrivacyApi

All URIs are relative to *https://api.mypurecloud.com*

| Method | HTTP request | Description |
| ------------- | ------------- | ------------- |
[**deleteDataprivacyMaskingrule**](DataPrivacyApi#deleteDataprivacyMaskingrule) | **DELETE** /api/v2/dataprivacy/maskingrules/{ruleId} | Delete a masking rule.
[**getDataprivacyMaskingrule**](DataPrivacyApi#getDataprivacyMaskingrule) | **GET** /api/v2/dataprivacy/maskingrules/{ruleId} | Fetch details about a masking rule.
[**getDataprivacyMaskingrules**](DataPrivacyApi#getDataprivacyMaskingrules) | **GET** /api/v2/dataprivacy/maskingrules | Retrieve the list of masking rules.
[**patchDataprivacyMaskingrule**](DataPrivacyApi#patchDataprivacyMaskingrule) | **PATCH** /api/v2/dataprivacy/maskingrules/{ruleId} | Update information about a masking rule.
[**postDataprivacyMaskingrules**](DataPrivacyApi#postDataprivacyMaskingrules) | **POST** /api/v2/dataprivacy/maskingrules | Create a new masking rule resource.
[**postDataprivacyMaskingrulesValidate**](DataPrivacyApi#postDataprivacyMaskingrulesValidate) | **POST** /api/v2/dataprivacy/maskingrules/validate | Validate masking before creating.



## deleteDataprivacyMaskingrule

> void deleteDataprivacyMaskingrule(ruleId, opts)


DELETE /api/v2/dataprivacy/maskingrules/{ruleId}

Delete a masking rule.

Requires ALL permissions:

* dataprivacy:maskingrule:delete

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.DataPrivacyApi();

let ruleId = "ruleId_example"; // String | ruleId
let opts = { 
  'customHeaders': {  // Object.<string, string> | Request Custom Headers
    'X-Service-Name': 'customer-service',
    'X-Request-ID': 'req-12345'
  }
};

apiInstance.deleteDataprivacyMaskingrule(ruleId, opts)
  .then(() => {
    console.log('deleteDataprivacyMaskingrule returned successfully.');
  })
  .catch((err) => {
    console.log('There was a failure calling deleteDataprivacyMaskingrule');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **ruleId** | **String** | ruleId |  |
 **customHeaders** | **Object.<string, string>** | Request Custom Headers | [optional] |

### Return type

void (no response body)


## getDataprivacyMaskingrule

> MaskingRule getDataprivacyMaskingrule(ruleId, opts)


GET /api/v2/dataprivacy/maskingrules/{ruleId}

Fetch details about a masking rule.

Requires ALL permissions:

* dataprivacy:maskingrule:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.DataPrivacyApi();

let ruleId = "ruleId_example"; // String | ruleId
let opts = { 
  'customHeaders': {  // Object.<string, string> | Request Custom Headers
    'X-Service-Name': 'customer-service',
    'X-Request-ID': 'req-12345'
  }
};

apiInstance.getDataprivacyMaskingrule(ruleId, opts)
  .then((data) => {
    console.log(`getDataprivacyMaskingrule success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getDataprivacyMaskingrule');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **ruleId** | **String** | ruleId |  |
 **customHeaders** | **Object.<string, string>** | Request Custom Headers | [optional] |

### Return type

**MaskingRule**


## getDataprivacyMaskingrules

> MaskingRuleListing getDataprivacyMaskingrules(opts)


GET /api/v2/dataprivacy/maskingrules

Retrieve the list of masking rules.

Requires ALL permissions:

* dataprivacy:maskingrule:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.DataPrivacyApi();
let opts = { 
  'customHeaders': {  // Object.<string, string> | Request Custom Headers
    'X-Service-Name': 'customer-service',
    'X-Request-ID': 'req-12345'
  }
};

apiInstance.getDataprivacyMaskingrules(opts)
  .then((data) => {
    console.log(`getDataprivacyMaskingrules success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getDataprivacyMaskingrules');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **customHeaders** | **Object.<string, string>** | Request Custom Headers | [optional] |

### Return type

**MaskingRuleListing**


## patchDataprivacyMaskingrule

> MaskingRule patchDataprivacyMaskingrule(ruleId, opts)


PATCH /api/v2/dataprivacy/maskingrules/{ruleId}

Update information about a masking rule.

Requires ALL permissions:

* dataprivacy:maskingrule:edit

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.DataPrivacyApi();

let ruleId = "ruleId_example"; // String | ruleId
let opts = { 
  'body': {}, // Object | 
  'customHeaders': {  // Object.<string, string> | Request Custom Headers
    'X-Service-Name': 'customer-service',
    'X-Request-ID': 'req-12345'
  }
};

apiInstance.patchDataprivacyMaskingrule(ruleId, opts)
  .then((data) => {
    console.log(`patchDataprivacyMaskingrule success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling patchDataprivacyMaskingrule');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **ruleId** | **String** | ruleId |  |
 **body** | **Object** |  | [optional]  |
 **customHeaders** | **Object.<string, string>** | Request Custom Headers | [optional] |

### Return type

**MaskingRule**


## postDataprivacyMaskingrules

> MaskingRule postDataprivacyMaskingrules(body, opts)


POST /api/v2/dataprivacy/maskingrules

Create a new masking rule resource.

Requires ALL permissions:

* dataprivacy:maskingrule:add

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.DataPrivacyApi();

let body = {}; // Object | Details for creating masking rule resource
let opts = { 
  'customHeaders': {  // Object.<string, string> | Request Custom Headers
    'X-Service-Name': 'customer-service',
    'X-Request-ID': 'req-12345'
  }
};

apiInstance.postDataprivacyMaskingrules(body, opts)
  .then((data) => {
    console.log(`postDataprivacyMaskingrules success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling postDataprivacyMaskingrules');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **body** | **Object** | Details for creating masking rule resource |  |
 **customHeaders** | **Object.<string, string>** | Request Custom Headers | [optional] |

### Return type

**MaskingRule**


## postDataprivacyMaskingrulesValidate

> MaskingRuleValidateResponse postDataprivacyMaskingrulesValidate(body, opts)


POST /api/v2/dataprivacy/maskingrules/validate

Validate masking before creating.

Requires ALL permissions:

* dataprivacy:maskingrule:execute

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.DataPrivacyApi();

let body = {}; // Object | Text to be masked
let opts = { 
  'customHeaders': {  // Object.<string, string> | Request Custom Headers
    'X-Service-Name': 'customer-service',
    'X-Request-ID': 'req-12345'
  }
};

apiInstance.postDataprivacyMaskingrulesValidate(body, opts)
  .then((data) => {
    console.log(`postDataprivacyMaskingrulesValidate success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling postDataprivacyMaskingrulesValidate');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **body** | **Object** | Text to be masked |  |
 **customHeaders** | **Object.<string, string>** | Request Custom Headers | [optional] |

### Return type

**MaskingRuleValidateResponse**


_purecloud-platform-client-v2@255.0.0_
