# IntentsApi

# platformClient.IntentsApi

All URIs are relative to *https://api.mypurecloud.com*

| Method | HTTP request | Description |
| ------------- | ------------- | ------------- |
[**deleteIntentsCategory**](IntentsApi#deleteIntentsCategory) | **DELETE** /api/v2/intents/categories/{categoryId} | Delete category for categoryId
[**deleteIntentsCustomerintent**](IntentsApi#deleteIntentsCustomerintent) | **DELETE** /api/v2/intents/customerintents/{customerIntentId} | Delete customer intent for customerIntentId
[**getIntentsAssignmentsExternalcontact**](IntentsApi#getIntentsAssignmentsExternalcontact) | **GET** /api/v2/intents/assignments/externalcontacts/{externalContactId} | Get customer intent assignments for externalContactId
[**getIntentsCategories**](IntentsApi#getIntentsCategories) | **GET** /api/v2/intents/categories | Get categories
[**getIntentsCategory**](IntentsApi#getIntentsCategory) | **GET** /api/v2/intents/categories/{categoryId} | Get category for categoryId
[**getIntentsCustomerintent**](IntentsApi#getIntentsCustomerintent) | **GET** /api/v2/intents/customerintents/{customerIntentId} | Get customer intent for customerIntentId
[**getIntentsCustomerintentSourceintents**](IntentsApi#getIntentsCustomerintentSourceintents) | **GET** /api/v2/intents/customerintents/{customerIntentId}/sourceintents | Get source intents mapped to a customer intent
[**getIntentsCustomerintents**](IntentsApi#getIntentsCustomerintents) | **GET** /api/v2/intents/customerintents | Get customer intents
[**getIntentsSourceintents**](IntentsApi#getIntentsSourceintents) | **GET** /api/v2/intents/sourceintents | Get all mapped source intents by type. If no type selected default is type Segment
[**patchIntentsCategory**](IntentsApi#patchIntentsCategory) | **PATCH** /api/v2/intents/categories/{categoryId} | Patch category for categoryId
[**patchIntentsCustomerintent**](IntentsApi#patchIntentsCustomerintent) | **PATCH** /api/v2/intents/customerintents/{customerIntentId} | Patch customer intent for customerIntentId
[**postIntentsAssignmentsExternalcontactCustomerintentAssignment**](IntentsApi#postIntentsAssignmentsExternalcontactCustomerintentAssignment) | **POST** /api/v2/intents/assignments/externalcontacts/{externalContactId}/customerintents/{customerIntentId}/assignment | Create customer intent assignment for external contact
[**postIntentsCategories**](IntentsApi#postIntentsCategories) | **POST** /api/v2/intents/categories | Create category
[**postIntentsCustomerintentSourceintentsBulkAdd**](IntentsApi#postIntentsCustomerintentSourceintentsBulkAdd) | **POST** /api/v2/intents/customerintents/{customerIntentId}/sourceintents/bulk/add | Bulk add source intents to a customer intent
[**postIntentsCustomerintentSourceintentsBulkRemove**](IntentsApi#postIntentsCustomerintentSourceintentsBulkRemove) | **POST** /api/v2/intents/customerintents/{customerIntentId}/sourceintents/bulk/remove | Bulk remove source intents mapped to a customer intent
[**postIntentsCustomerintents**](IntentsApi#postIntentsCustomerintents) | **POST** /api/v2/intents/customerintents | Create customer intents



## deleteIntentsCategory

> void deleteIntentsCategory(categoryId, opts)


DELETE /api/v2/intents/categories/{categoryId}

Delete category for categoryId

Requires ANY permissions:

* externalContacts:customerIntentTaxonomy:delete

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.IntentsApi();

let categoryId = "categoryId_example"; // String | Category id
let opts = { 
  'customHeaders': {  // Object.<string, string> | Request Custom Headers
    'X-Service-Name': 'customer-service',
    'X-Request-ID': 'req-12345'
  }
};

apiInstance.deleteIntentsCategory(categoryId, opts)
  .then(() => {
    console.log('deleteIntentsCategory returned successfully.');
  })
  .catch((err) => {
    console.log('There was a failure calling deleteIntentsCategory');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **categoryId** | **String** | Category id |  |
 **customHeaders** | **Object.<string, string>** | Request Custom Headers | [optional] |

### Return type

void (no response body)


## deleteIntentsCustomerintent

> void deleteIntentsCustomerintent(customerIntentId, opts)


DELETE /api/v2/intents/customerintents/{customerIntentId}

Delete customer intent for customerIntentId

Requires ANY permissions:

* externalContacts:customerIntentTaxonomy:delete

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.IntentsApi();

let customerIntentId = "customerIntentId_example"; // String | Customer Intent id
let opts = { 
  'customHeaders': {  // Object.<string, string> | Request Custom Headers
    'X-Service-Name': 'customer-service',
    'X-Request-ID': 'req-12345'
  }
};

apiInstance.deleteIntentsCustomerintent(customerIntentId, opts)
  .then(() => {
    console.log('deleteIntentsCustomerintent returned successfully.');
  })
  .catch((err) => {
    console.log('There was a failure calling deleteIntentsCustomerintent');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **customerIntentId** | **String** | Customer Intent id |  |
 **customHeaders** | **Object.<string, string>** | Request Custom Headers | [optional] |

### Return type

void (no response body)


## getIntentsAssignmentsExternalcontact

> CustomerIntentAssignmentListing getIntentsAssignmentsExternalcontact(externalContactId, opts)


GET /api/v2/intents/assignments/externalcontacts/{externalContactId}

Get customer intent assignments for externalContactId

Requires ANY permissions:

* externalContacts:customerIntentAssignments:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.IntentsApi();

let externalContactId = "externalContactId_example"; // String | External Contact id
let opts = { 
  'pageSize': 25, // Number | The total page size requested
  'pageNumber': 1, // Number | The page number requested
  'customHeaders': {  // Object.<string, string> | Request Custom Headers
    'X-Service-Name': 'customer-service',
    'X-Request-ID': 'req-12345'
  }
};

apiInstance.getIntentsAssignmentsExternalcontact(externalContactId, opts)
  .then((data) => {
    console.log(`getIntentsAssignmentsExternalcontact success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getIntentsAssignmentsExternalcontact');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **externalContactId** | **String** | External Contact id |  |
 **pageSize** | **Number** | The total page size requested | [optional] [default to 25] |
 **pageNumber** | **Number** | The page number requested | [optional] [default to 1] |
 **customHeaders** | **Object.<string, string>** | Request Custom Headers | [optional] |

### Return type

**CustomerIntentAssignmentListing**


## getIntentsCategories

> IntentsCategoryListing getIntentsCategories(opts)


GET /api/v2/intents/categories

Get categories

Requires ANY permissions:

* externalContacts:customerIntentTaxonomy:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.IntentsApi();

let opts = { 
  'pageSize': 25, // Number | The total page size requested
  'pageNumber': 1, // Number | The page number requested
  'queryValue': "queryValue_example", // String | Search query value to filter results by
  'customHeaders': {  // Object.<string, string> | Request Custom Headers
    'X-Service-Name': 'customer-service',
    'X-Request-ID': 'req-12345'
  }
};

apiInstance.getIntentsCategories(opts)
  .then((data) => {
    console.log(`getIntentsCategories success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getIntentsCategories');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **pageSize** | **Number** | The total page size requested | [optional] [default to 25] |
 **pageNumber** | **Number** | The page number requested | [optional] [default to 1] |
 **queryValue** | **String** | Search query value to filter results by | [optional]  |
 **customHeaders** | **Object.<string, string>** | Request Custom Headers | [optional] |

### Return type

**IntentsCategoryListing**


## getIntentsCategory

> IntentsCategory getIntentsCategory(categoryId, opts)


GET /api/v2/intents/categories/{categoryId}

Get category for categoryId

Requires ANY permissions:

* externalContacts:customerIntentTaxonomy:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.IntentsApi();

let categoryId = "categoryId_example"; // String | Category id
let opts = { 
  'customHeaders': {  // Object.<string, string> | Request Custom Headers
    'X-Service-Name': 'customer-service',
    'X-Request-ID': 'req-12345'
  }
};

apiInstance.getIntentsCategory(categoryId, opts)
  .then((data) => {
    console.log(`getIntentsCategory success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getIntentsCategory');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **categoryId** | **String** | Category id |  |
 **customHeaders** | **Object.<string, string>** | Request Custom Headers | [optional] |

### Return type

**IntentsCategory**


## getIntentsCustomerintent

> CustomerIntentResponse getIntentsCustomerintent(customerIntentId, opts)


GET /api/v2/intents/customerintents/{customerIntentId}

Get customer intent for customerIntentId

Requires ANY permissions:

* externalContacts:customerIntentTaxonomy:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.IntentsApi();

let customerIntentId = "customerIntentId_example"; // String | Customer Intent id
let opts = { 
  'customHeaders': {  // Object.<string, string> | Request Custom Headers
    'X-Service-Name': 'customer-service',
    'X-Request-ID': 'req-12345'
  }
};

apiInstance.getIntentsCustomerintent(customerIntentId, opts)
  .then((data) => {
    console.log(`getIntentsCustomerintent success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getIntentsCustomerintent');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **customerIntentId** | **String** | Customer Intent id |  |
 **customHeaders** | **Object.<string, string>** | Request Custom Headers | [optional] |

### Return type

**CustomerIntentResponse**


## getIntentsCustomerintentSourceintents

> CustomerSourceIntentListing getIntentsCustomerintentSourceintents(customerIntentId, opts)


GET /api/v2/intents/customerintents/{customerIntentId}/sourceintents

Get source intents mapped to a customer intent

Requires ANY permissions:

* externalContacts:customerIntentTaxonomy:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.IntentsApi();

let customerIntentId = "customerIntentId_example"; // String | Customer Intent id
let opts = { 
  'pageSize': 25, // Number | The total page size requested
  'pageNumber': 1, // Number | The page number requested
  'queryValue': "queryValue_example", // String | Search query value to filter results by
  'customHeaders': {  // Object.<string, string> | Request Custom Headers
    'X-Service-Name': 'customer-service',
    'X-Request-ID': 'req-12345'
  }
};

apiInstance.getIntentsCustomerintentSourceintents(customerIntentId, opts)
  .then((data) => {
    console.log(`getIntentsCustomerintentSourceintents success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getIntentsCustomerintentSourceintents');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **customerIntentId** | **String** | Customer Intent id |  |
 **pageSize** | **Number** | The total page size requested | [optional] [default to 25] |
 **pageNumber** | **Number** | The page number requested | [optional] [default to 1] |
 **queryValue** | **String** | Search query value to filter results by | [optional]  |
 **customHeaders** | **Object.<string, string>** | Request Custom Headers | [optional] |

### Return type

**CustomerSourceIntentListing**


## getIntentsCustomerintents

> CustomerIntentListing getIntentsCustomerintents(opts)


GET /api/v2/intents/customerintents

Get customer intents

Requires ANY permissions:

* externalContacts:customerIntentTaxonomy:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.IntentsApi();

let opts = { 
  'pageSize': 25, // Number | The total page size requested
  'pageNumber': 1, // Number | The page number requested
  'queryValue': "queryValue_example", // String | Search query value to filter results by
  'categoryId': "categoryId_example", // String | CategoryId to filter query by
  'customHeaders': {  // Object.<string, string> | Request Custom Headers
    'X-Service-Name': 'customer-service',
    'X-Request-ID': 'req-12345'
  }
};

apiInstance.getIntentsCustomerintents(opts)
  .then((data) => {
    console.log(`getIntentsCustomerintents success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getIntentsCustomerintents');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **pageSize** | **Number** | The total page size requested | [optional] [default to 25] |
 **pageNumber** | **Number** | The page number requested | [optional] [default to 1] |
 **queryValue** | **String** | Search query value to filter results by | [optional]  |
 **categoryId** | **String** | CategoryId to filter query by | [optional]  |
 **customHeaders** | **Object.<string, string>** | Request Custom Headers | [optional] |

### Return type

**CustomerIntentListing**


## getIntentsSourceintents

> CustomerSourceIntentListing getIntentsSourceintents(opts)


GET /api/v2/intents/sourceintents

Get all mapped source intents by type. If no type selected default is type Segment

Requires ANY permissions:

* externalContacts:customerIntentTaxonomy:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.IntentsApi();

let opts = { 
  'pageSize': 25, // Number | The total page size requested
  'pageNumber': 1, // Number | The page number requested
  'type': "type_example", // String | Source Type to query by. If none selected default response will be for type Segment.
  'sourceId': "sourceId_example", // String | Source Id to query by. Only required for sourceType: Copilot, Bot, Digitalbot
  'customHeaders': {  // Object.<string, string> | Request Custom Headers
    'X-Service-Name': 'customer-service',
    'X-Request-ID': 'req-12345'
  }
};

apiInstance.getIntentsSourceintents(opts)
  .then((data) => {
    console.log(`getIntentsSourceintents success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getIntentsSourceintents');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **pageSize** | **Number** | The total page size requested | [optional] [default to 25] |
 **pageNumber** | **Number** | The page number requested | [optional] [default to 1] |
 **type** | **String** | Source Type to query by. If none selected default response will be for type Segment. | [optional] <br />**Values**: Bot, Copilot, Digitalbot, Segment, Topic, Unknown |
 **sourceId** | **String** | Source Id to query by. Only required for sourceType: Copilot, Bot, Digitalbot | [optional]  |
 **customHeaders** | **Object.<string, string>** | Request Custom Headers | [optional] |

### Return type

**CustomerSourceIntentListing**


## patchIntentsCategory

> IntentsCategory patchIntentsCategory(categoryId, body, opts)


PATCH /api/v2/intents/categories/{categoryId}

Patch category for categoryId

Requires ANY permissions:

* externalContacts:customerIntentTaxonomy:edit

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.IntentsApi();

let categoryId = "categoryId_example"; // String | Category id
let body = {}; // Object | category
let opts = { 
  'customHeaders': {  // Object.<string, string> | Request Custom Headers
    'X-Service-Name': 'customer-service',
    'X-Request-ID': 'req-12345'
  }
};

apiInstance.patchIntentsCategory(categoryId, body, opts)
  .then((data) => {
    console.log(`patchIntentsCategory success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling patchIntentsCategory');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **categoryId** | **String** | Category id |  |
 **body** | **Object** | category |  |
 **customHeaders** | **Object.<string, string>** | Request Custom Headers | [optional] |

### Return type

**IntentsCategory**


## patchIntentsCustomerintent

> CustomerIntentResponse patchIntentsCustomerintent(customerIntentId, body, opts)


PATCH /api/v2/intents/customerintents/{customerIntentId}

Patch customer intent for customerIntentId

Requires ANY permissions:

* externalContacts:customerIntentTaxonomy:edit

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.IntentsApi();

let customerIntentId = "customerIntentId_example"; // String | Customer Intent id
let body = {}; // Object | Customer intent
let opts = { 
  'customHeaders': {  // Object.<string, string> | Request Custom Headers
    'X-Service-Name': 'customer-service',
    'X-Request-ID': 'req-12345'
  }
};

apiInstance.patchIntentsCustomerintent(customerIntentId, body, opts)
  .then((data) => {
    console.log(`patchIntentsCustomerintent success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling patchIntentsCustomerintent');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **customerIntentId** | **String** | Customer Intent id |  |
 **body** | **Object** | Customer intent |  |
 **customHeaders** | **Object.<string, string>** | Request Custom Headers | [optional] |

### Return type

**CustomerIntentResponse**


## postIntentsAssignmentsExternalcontactCustomerintentAssignment

> CustomerIntentAssignmentResponse postIntentsAssignmentsExternalcontactCustomerintentAssignment(externalContactId, customerIntentId, body, opts)


POST /api/v2/intents/assignments/externalcontacts/{externalContactId}/customerintents/{customerIntentId}/assignment

Create customer intent assignment for external contact

Requires ANY permissions:

* externalContacts:customerIntentAssignments:add

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.IntentsApi();

let externalContactId = "externalContactId_example"; // String | External Contact id
let customerIntentId = "customerIntentId_example"; // String | Customer Intent id
let body = {}; // Object | Customer intent assignment
let opts = { 
  'customHeaders': {  // Object.<string, string> | Request Custom Headers
    'X-Service-Name': 'customer-service',
    'X-Request-ID': 'req-12345'
  }
};

apiInstance.postIntentsAssignmentsExternalcontactCustomerintentAssignment(externalContactId, customerIntentId, body, opts)
  .then((data) => {
    console.log(`postIntentsAssignmentsExternalcontactCustomerintentAssignment success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling postIntentsAssignmentsExternalcontactCustomerintentAssignment');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **externalContactId** | **String** | External Contact id |  |
 **customerIntentId** | **String** | Customer Intent id |  |
 **body** | **Object** | Customer intent assignment |  |
 **customHeaders** | **Object.<string, string>** | Request Custom Headers | [optional] |

### Return type

**CustomerIntentAssignmentResponse**


## postIntentsCategories

> IntentsCategory postIntentsCategories(body, opts)


POST /api/v2/intents/categories

Create category

Requires ANY permissions:

* externalContacts:customerIntentTaxonomy:add

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.IntentsApi();

let body = {}; // Object | category
let opts = { 
  'customHeaders': {  // Object.<string, string> | Request Custom Headers
    'X-Service-Name': 'customer-service',
    'X-Request-ID': 'req-12345'
  }
};

apiInstance.postIntentsCategories(body, opts)
  .then((data) => {
    console.log(`postIntentsCategories success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling postIntentsCategories');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **body** | **Object** | category |  |
 **customHeaders** | **Object.<string, string>** | Request Custom Headers | [optional] |

### Return type

**IntentsCategory**


## postIntentsCustomerintentSourceintentsBulkAdd

> BulkSourceIntentsResponse postIntentsCustomerintentSourceintentsBulkAdd(customerIntentId, body, opts)


POST /api/v2/intents/customerintents/{customerIntentId}/sourceintents/bulk/add

Bulk add source intents to a customer intent

Requires ANY permissions:

* externalContacts:customerIntentTaxonomy:edit

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.IntentsApi();

let customerIntentId = "customerIntentId_example"; // String | Customer Intent id
let body = {}; // Object | Source intents to be added
let opts = { 
  'customHeaders': {  // Object.<string, string> | Request Custom Headers
    'X-Service-Name': 'customer-service',
    'X-Request-ID': 'req-12345'
  }
};

apiInstance.postIntentsCustomerintentSourceintentsBulkAdd(customerIntentId, body, opts)
  .then((data) => {
    console.log(`postIntentsCustomerintentSourceintentsBulkAdd success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling postIntentsCustomerintentSourceintentsBulkAdd');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **customerIntentId** | **String** | Customer Intent id |  |
 **body** | **Object** | Source intents to be added |  |
 **customHeaders** | **Object.<string, string>** | Request Custom Headers | [optional] |

### Return type

**BulkSourceIntentsResponse**


## postIntentsCustomerintentSourceintentsBulkRemove

> BulkSourceIntentsResponse postIntentsCustomerintentSourceintentsBulkRemove(customerIntentId, body, opts)


POST /api/v2/intents/customerintents/{customerIntentId}/sourceintents/bulk/remove

Bulk remove source intents mapped to a customer intent

Requires ANY permissions:

* externalContacts:customerIntentTaxonomy:edit

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.IntentsApi();

let customerIntentId = "customerIntentId_example"; // String | Customer Intent id
let body = {}; // Object | Source intents to be removed
let opts = { 
  'customHeaders': {  // Object.<string, string> | Request Custom Headers
    'X-Service-Name': 'customer-service',
    'X-Request-ID': 'req-12345'
  }
};

apiInstance.postIntentsCustomerintentSourceintentsBulkRemove(customerIntentId, body, opts)
  .then((data) => {
    console.log(`postIntentsCustomerintentSourceintentsBulkRemove success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling postIntentsCustomerintentSourceintentsBulkRemove');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **customerIntentId** | **String** | Customer Intent id |  |
 **body** | **Object** | Source intents to be removed |  |
 **customHeaders** | **Object.<string, string>** | Request Custom Headers | [optional] |

### Return type

**BulkSourceIntentsResponse**


## postIntentsCustomerintents

> CustomerIntentResponse postIntentsCustomerintents(body, opts)


POST /api/v2/intents/customerintents

Create customer intents

Requires ANY permissions:

* externalContacts:customerIntentTaxonomy:add

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.IntentsApi();

let body = {}; // Object | Customer intent
let opts = { 
  'customHeaders': {  // Object.<string, string> | Request Custom Headers
    'X-Service-Name': 'customer-service',
    'X-Request-ID': 'req-12345'
  }
};

apiInstance.postIntentsCustomerintents(body, opts)
  .then((data) => {
    console.log(`postIntentsCustomerintents success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling postIntentsCustomerintents');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **body** | **Object** | Customer intent |  |
 **customHeaders** | **Object.<string, string>** | Request Custom Headers | [optional] |

### Return type

**CustomerIntentResponse**


_purecloud-platform-client-v2@250.1.0_
