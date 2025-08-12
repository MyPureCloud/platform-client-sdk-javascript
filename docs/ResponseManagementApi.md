# ResponseManagementApi

# platformClient.ResponseManagementApi

All URIs are relative to *https://api.mypurecloud.com*

| Method | HTTP request | Description |
| ------------- | ------------- | ------------- |
[**deleteResponsemanagementLibrary**](ResponseManagementApi#deleteResponsemanagementLibrary) | **DELETE** /api/v2/responsemanagement/libraries/{libraryId} | Delete an existing response library.
[**deleteResponsemanagementResponse**](ResponseManagementApi#deleteResponsemanagementResponse) | **DELETE** /api/v2/responsemanagement/responses/{responseId} | Delete an existing response.
[**deleteResponsemanagementResponseasset**](ResponseManagementApi#deleteResponsemanagementResponseasset) | **DELETE** /api/v2/responsemanagement/responseassets/{responseAssetId} | Delete response asset
[**getResponsemanagementLibraries**](ResponseManagementApi#getResponsemanagementLibraries) | **GET** /api/v2/responsemanagement/libraries | Gets a list of existing response libraries.
[**getResponsemanagementLibrary**](ResponseManagementApi#getResponsemanagementLibrary) | **GET** /api/v2/responsemanagement/libraries/{libraryId} | Get details about an existing response library.
[**getResponsemanagementResponse**](ResponseManagementApi#getResponsemanagementResponse) | **GET** /api/v2/responsemanagement/responses/{responseId} | Get details about an existing response.
[**getResponsemanagementResponseasset**](ResponseManagementApi#getResponsemanagementResponseasset) | **GET** /api/v2/responsemanagement/responseassets/{responseAssetId} | Get response asset information
[**getResponsemanagementResponseassetsStatusStatusId**](ResponseManagementApi#getResponsemanagementResponseassetsStatusStatusId) | **GET** /api/v2/responsemanagement/responseassets/status/{statusId} | Get response asset upload status
[**getResponsemanagementResponses**](ResponseManagementApi#getResponsemanagementResponses) | **GET** /api/v2/responsemanagement/responses | Gets a list of existing responses.
[**postResponsemanagementLibraries**](ResponseManagementApi#postResponsemanagementLibraries) | **POST** /api/v2/responsemanagement/libraries | Create a response library.
[**postResponsemanagementLibrariesBulk**](ResponseManagementApi#postResponsemanagementLibrariesBulk) | **POST** /api/v2/responsemanagement/libraries/bulk | Get response libraries.
[**postResponsemanagementResponseassetsSearch**](ResponseManagementApi#postResponsemanagementResponseassetsSearch) | **POST** /api/v2/responsemanagement/responseassets/search | Search response assets
[**postResponsemanagementResponseassetsUploads**](ResponseManagementApi#postResponsemanagementResponseassetsUploads) | **POST** /api/v2/responsemanagement/responseassets/uploads | Creates pre-signed url for uploading response asset
[**postResponsemanagementResponses**](ResponseManagementApi#postResponsemanagementResponses) | **POST** /api/v2/responsemanagement/responses | Create a response.
[**postResponsemanagementResponsesQuery**](ResponseManagementApi#postResponsemanagementResponsesQuery) | **POST** /api/v2/responsemanagement/responses/query | Query responses
[**putResponsemanagementLibrary**](ResponseManagementApi#putResponsemanagementLibrary) | **PUT** /api/v2/responsemanagement/libraries/{libraryId} | Update an existing response library.
[**putResponsemanagementResponse**](ResponseManagementApi#putResponsemanagementResponse) | **PUT** /api/v2/responsemanagement/responses/{responseId} | Update an existing response.
[**putResponsemanagementResponseasset**](ResponseManagementApi#putResponsemanagementResponseasset) | **PUT** /api/v2/responsemanagement/responseassets/{responseAssetId} | Update response asset



## deleteResponsemanagementLibrary

> void deleteResponsemanagementLibrary(libraryId)


DELETE /api/v2/responsemanagement/libraries/{libraryId}

Delete an existing response library.

This will remove any responses associated with the library.

Requires ANY permissions:

* responses:library:delete

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.ResponseManagementApi();

let libraryId = "libraryId_example"; // String | Library ID

apiInstance.deleteResponsemanagementLibrary(libraryId)
  .then(() => {
    console.log('deleteResponsemanagementLibrary returned successfully.');
  })
  .catch((err) => {
    console.log('There was a failure calling deleteResponsemanagementLibrary');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **libraryId** | **String** | Library ID |  |

### Return type

void (no response body)


## deleteResponsemanagementResponse

> void deleteResponsemanagementResponse(responseId)


DELETE /api/v2/responsemanagement/responses/{responseId}

Delete an existing response.

This will remove the response from any libraries associated with it.

Requires ANY permissions:

* responses:response:delete

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.ResponseManagementApi();

let responseId = "responseId_example"; // String | Response ID

apiInstance.deleteResponsemanagementResponse(responseId)
  .then(() => {
    console.log('deleteResponsemanagementResponse returned successfully.');
  })
  .catch((err) => {
    console.log('There was a failure calling deleteResponsemanagementResponse');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **responseId** | **String** | Response ID |  |

### Return type

void (no response body)


## deleteResponsemanagementResponseasset

> void deleteResponsemanagementResponseasset(responseAssetId)


DELETE /api/v2/responsemanagement/responseassets/{responseAssetId}

Delete response asset

Requires ANY permissions:

* responseAssets:asset:delete

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.ResponseManagementApi();

let responseAssetId = "responseAssetId_example"; // String | Asset Id

apiInstance.deleteResponsemanagementResponseasset(responseAssetId)
  .then(() => {
    console.log('deleteResponsemanagementResponseasset returned successfully.');
  })
  .catch((err) => {
    console.log('There was a failure calling deleteResponsemanagementResponseasset');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **responseAssetId** | **String** | Asset Id |  |

### Return type

void (no response body)


## getResponsemanagementLibraries

> LibraryEntityListing getResponsemanagementLibraries(opts)


GET /api/v2/responsemanagement/libraries

Gets a list of existing response libraries.

Requires ANY permissions:

* responses:library:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.ResponseManagementApi();

let opts = { 
  'pageNumber': 1, // Number | Page number
  'pageSize': 25, // Number | Page size
  'messagingTemplateFilter': "messagingTemplateFilter_example", // String | Returns a list of libraries that contain responses with at least one messaging template defined for a specific message channel
  'libraryPrefix': "libraryPrefix_example" // String | Returns a list of libraries that contain the prefix provided
};

apiInstance.getResponsemanagementLibraries(opts)
  .then((data) => {
    console.log(`getResponsemanagementLibraries success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getResponsemanagementLibraries');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **pageNumber** | **Number** | Page number | [optional] [default to 1] |
 **pageSize** | **Number** | Page size | [optional] [default to 25] |
 **messagingTemplateFilter** | **String** | Returns a list of libraries that contain responses with at least one messaging template defined for a specific message channel | [optional] <br />**Values**: whatsapp |
 **libraryPrefix** | **String** | Returns a list of libraries that contain the prefix provided | [optional]  |

### Return type

**LibraryEntityListing**


## getResponsemanagementLibrary

> Library getResponsemanagementLibrary(libraryId)


GET /api/v2/responsemanagement/libraries/{libraryId}

Get details about an existing response library.

Requires ANY permissions:

* responses:library:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.ResponseManagementApi();

let libraryId = "libraryId_example"; // String | Library ID

apiInstance.getResponsemanagementLibrary(libraryId)
  .then((data) => {
    console.log(`getResponsemanagementLibrary success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getResponsemanagementLibrary');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **libraryId** | **String** | Library ID |  |

### Return type

**Library**


## getResponsemanagementResponse

> Response getResponsemanagementResponse(responseId, opts)


GET /api/v2/responsemanagement/responses/{responseId}

Get details about an existing response.

Requires ANY permissions:

* responses:response:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.ResponseManagementApi();

let responseId = "responseId_example"; // String | Response ID
let opts = { 
  'expand': "expand_example" // String | Expand instructions for the return value.
};

apiInstance.getResponsemanagementResponse(responseId, opts)
  .then((data) => {
    console.log(`getResponsemanagementResponse success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getResponsemanagementResponse');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **responseId** | **String** | Response ID |  |
 **expand** | **String** | Expand instructions for the return value. | [optional] <br />**Values**: substitutionsSchema |

### Return type

**Response**


## getResponsemanagementResponseasset

> ResponseAsset getResponsemanagementResponseasset(responseAssetId)


GET /api/v2/responsemanagement/responseassets/{responseAssetId}

Get response asset information

Requires ANY permissions:

* responseAssets:asset:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.ResponseManagementApi();

let responseAssetId = "responseAssetId_example"; // String | Asset Id

apiInstance.getResponsemanagementResponseasset(responseAssetId)
  .then((data) => {
    console.log(`getResponsemanagementResponseasset success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getResponsemanagementResponseasset');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **responseAssetId** | **String** | Asset Id |  |

### Return type

**ResponseAsset**


## getResponsemanagementResponseassetsStatusStatusId

> ResponseAssetStatus getResponsemanagementResponseassetsStatusStatusId(statusId)


GET /api/v2/responsemanagement/responseassets/status/{statusId}

Get response asset upload status

Requires ANY permissions:

* responseAssets:asset:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.ResponseManagementApi();

let statusId = "statusId_example"; // String | Status Id

apiInstance.getResponsemanagementResponseassetsStatusStatusId(statusId)
  .then((data) => {
    console.log(`getResponsemanagementResponseassetsStatusStatusId success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getResponsemanagementResponseassetsStatusStatusId');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **statusId** | **String** | Status Id |  |

### Return type

**ResponseAssetStatus**


## getResponsemanagementResponses

> ResponseEntityListing getResponsemanagementResponses(libraryId, opts)


GET /api/v2/responsemanagement/responses

Gets a list of existing responses.

Requires ANY permissions:

* responses:response:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.ResponseManagementApi();

let libraryId = "libraryId_example"; // String | Library ID
let opts = { 
  'pageNumber': 1, // Number | Page number
  'pageSize': 25, // Number | Page size
  'expand': "expand_example" // String | Expand instructions for the return value.
};

apiInstance.getResponsemanagementResponses(libraryId, opts)
  .then((data) => {
    console.log(`getResponsemanagementResponses success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getResponsemanagementResponses');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **libraryId** | **String** | Library ID |  |
 **pageNumber** | **Number** | Page number | [optional] [default to 1] |
 **pageSize** | **Number** | Page size | [optional] [default to 25] |
 **expand** | **String** | Expand instructions for the return value. | [optional] <br />**Values**: substitutionsSchema |

### Return type

**ResponseEntityListing**


## postResponsemanagementLibraries

> Library postResponsemanagementLibraries(body)


POST /api/v2/responsemanagement/libraries

Create a response library.

Requires ANY permissions:

* responses:library:add

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.ResponseManagementApi();

let body = {}; // Object | Library

apiInstance.postResponsemanagementLibraries(body)
  .then((data) => {
    console.log(`postResponsemanagementLibraries success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling postResponsemanagementLibraries');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **body** | **Object** | Library |  |

### Return type

**Library**


## postResponsemanagementLibrariesBulk

> LibraryEntityListing postResponsemanagementLibrariesBulk(body)


POST /api/v2/responsemanagement/libraries/bulk

Get response libraries.

Requires ANY permissions:

* responses:library:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.ResponseManagementApi();

let body = {}; // Object | LibraryIDs (max allowed 50)

apiInstance.postResponsemanagementLibrariesBulk(body)
  .then((data) => {
    console.log(`postResponsemanagementLibrariesBulk success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling postResponsemanagementLibrariesBulk');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **body** | **Object** | LibraryIDs (max allowed 50) |  |

### Return type

**LibraryEntityListing**


## postResponsemanagementResponseassetsSearch

> ResponseAssetSearchResults postResponsemanagementResponseassetsSearch(body, opts)


POST /api/v2/responsemanagement/responseassets/search

Search response assets

Requires ALL permissions:

* responseAssets:asset:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.ResponseManagementApi();

let body = {}; // Object | request
let opts = { 
  'expand': ["expand_example"] // [String] | Which fields, if any, to expand
};

apiInstance.postResponsemanagementResponseassetsSearch(body, opts)
  .then((data) => {
    console.log(`postResponsemanagementResponseassetsSearch success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling postResponsemanagementResponseassetsSearch');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **body** | **Object** | request |  |
 **expand** | **[String]** | Which fields, if any, to expand | [optional] <br />**Values**: user, division |

### Return type

**ResponseAssetSearchResults**


## postResponsemanagementResponseassetsUploads

> CreateResponseAssetResponse postResponsemanagementResponseassetsUploads(body)


POST /api/v2/responsemanagement/responseassets/uploads

Creates pre-signed url for uploading response asset

Requires ANY permissions:

* responseAssets:asset:add

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.ResponseManagementApi();

let body = {}; // Object | request

apiInstance.postResponsemanagementResponseassetsUploads(body)
  .then((data) => {
    console.log(`postResponsemanagementResponseassetsUploads success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling postResponsemanagementResponseassetsUploads');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **body** | **Object** | request |  |

### Return type

**CreateResponseAssetResponse**


## postResponsemanagementResponses

> Response postResponsemanagementResponses(body, opts)


POST /api/v2/responsemanagement/responses

Create a response.

Requires ANY permissions:

* responses:response:add

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.ResponseManagementApi();

let body = {}; // Object | Response
let opts = { 
  'expand': "expand_example" // String | Expand instructions for the return value.
};

apiInstance.postResponsemanagementResponses(body, opts)
  .then((data) => {
    console.log(`postResponsemanagementResponses success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling postResponsemanagementResponses');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **body** | **Object** | Response |  |
 **expand** | **String** | Expand instructions for the return value. | [optional] <br />**Values**: substitutionsSchema |

### Return type

**Response**


## postResponsemanagementResponsesQuery

> ResponseQueryResults postResponsemanagementResponsesQuery(body)


POST /api/v2/responsemanagement/responses/query

Query responses

Requires ANY permissions:

* responses:response:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.ResponseManagementApi();

let body = {}; // Object | Response

apiInstance.postResponsemanagementResponsesQuery(body)
  .then((data) => {
    console.log(`postResponsemanagementResponsesQuery success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling postResponsemanagementResponsesQuery');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **body** | **Object** | Response |  |

### Return type

**ResponseQueryResults**


## putResponsemanagementLibrary

> Library putResponsemanagementLibrary(libraryId, body)


PUT /api/v2/responsemanagement/libraries/{libraryId}

Update an existing response library.

Fields that can be updated: name. The most recent version is required for updates.

Requires ANY permissions:

* responses:library:edit

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.ResponseManagementApi();

let libraryId = "libraryId_example"; // String | Library ID
let body = {}; // Object | Library

apiInstance.putResponsemanagementLibrary(libraryId, body)
  .then((data) => {
    console.log(`putResponsemanagementLibrary success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling putResponsemanagementLibrary');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **libraryId** | **String** | Library ID |  |
 **body** | **Object** | Library |  |

### Return type

**Library**


## putResponsemanagementResponse

> Response putResponsemanagementResponse(responseId, body, opts)


PUT /api/v2/responsemanagement/responses/{responseId}

Update an existing response.

Fields that can be updated: name, libraries, and texts. The most recent version is required for updates.

Requires ANY permissions:

* responses:response:edit

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.ResponseManagementApi();

let responseId = "responseId_example"; // String | Response ID
let body = {}; // Object | Response
let opts = { 
  'expand': "expand_example" // String | Expand instructions for the return value.
};

apiInstance.putResponsemanagementResponse(responseId, body, opts)
  .then((data) => {
    console.log(`putResponsemanagementResponse success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling putResponsemanagementResponse');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **responseId** | **String** | Response ID |  |
 **body** | **Object** | Response |  |
 **expand** | **String** | Expand instructions for the return value. | [optional] <br />**Values**: substitutionsSchema |

### Return type

**Response**


## putResponsemanagementResponseasset

> ResponseAsset putResponsemanagementResponseasset(responseAssetId, body)


PUT /api/v2/responsemanagement/responseassets/{responseAssetId}

Update response asset

Requires ALL permissions:

* responseAssets:asset:edit

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.ResponseManagementApi();

let responseAssetId = "responseAssetId_example"; // String | Asset Id
let body = {}; // Object | request

apiInstance.putResponsemanagementResponseasset(responseAssetId, body)
  .then((data) => {
    console.log(`putResponsemanagementResponseasset success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling putResponsemanagementResponseasset');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **responseAssetId** | **String** | Asset Id |  |
 **body** | **Object** | request |  |

### Return type

**ResponseAsset**


_purecloud-platform-client-v2@229.1.0_
