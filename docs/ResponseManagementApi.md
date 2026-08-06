# ResponseManagementApi

# platformClient.ResponseManagementApi

All URIs are relative to *https://api.mypurecloud.com*

| Method | HTTP request | Description |
| ------------- | ------------- | ------------- |
[**deleteResponsemanagementLibrary**](ResponseManagementApi#deleteResponsemanagementLibrary) | **DELETE** /api/v2/responsemanagement/libraries/{libraryId} | Delete an existing response library.
[**deleteResponsemanagementResponse**](ResponseManagementApi#deleteResponsemanagementResponse) | **DELETE** /api/v2/responsemanagement/responses/{responseId} | Delete an existing response.
[**deleteResponsemanagementResponseasset**](ResponseManagementApi#deleteResponsemanagementResponseasset) | **DELETE** /api/v2/responsemanagement/responseassets/{responseAssetId} | Delete response asset
[**getResponsemanagementLibraries**](ResponseManagementApi#getResponsemanagementLibraries) | **GET** /api/v2/responsemanagement/libraries | Gets a list of existing response libraries.
[**getResponsemanagementLibrariesDivisionview**](ResponseManagementApi#getResponsemanagementLibrariesDivisionview) | **GET** /api/v2/responsemanagement/libraries/divisionviews/{libraryId} | Get details about an existing response library.
[**getResponsemanagementLibrariesDivisionviews**](ResponseManagementApi#getResponsemanagementLibrariesDivisionviews) | **GET** /api/v2/responsemanagement/libraries/divisionviews | Gets a list of existing response libraries.
[**getResponsemanagementLibrary**](ResponseManagementApi#getResponsemanagementLibrary) | **GET** /api/v2/responsemanagement/libraries/{libraryId} | Get details about an existing response library.
[**getResponsemanagementResponse**](ResponseManagementApi#getResponsemanagementResponse) | **GET** /api/v2/responsemanagement/responses/{responseId} | Get details about an existing response.
[**getResponsemanagementResponseasset**](ResponseManagementApi#getResponsemanagementResponseasset) | **GET** /api/v2/responsemanagement/responseassets/{responseAssetId} | Get response asset information
[**getResponsemanagementResponseassetsStatusStatusId**](ResponseManagementApi#getResponsemanagementResponseassetsStatusStatusId) | **GET** /api/v2/responsemanagement/responseassets/status/{statusId} | Get response asset upload status
[**getResponsemanagementResponses**](ResponseManagementApi#getResponsemanagementResponses) | **GET** /api/v2/responsemanagement/responses | Gets a list of existing responses.
[**getResponsemanagementResponsesDivisionview**](ResponseManagementApi#getResponsemanagementResponsesDivisionview) | **GET** /api/v2/responsemanagement/responses/divisionviews/{responseId} | Get details about an existing response.
[**postResponsemanagementLibraries**](ResponseManagementApi#postResponsemanagementLibraries) | **POST** /api/v2/responsemanagement/libraries | Create a response library.
[**postResponsemanagementLibrariesBulk**](ResponseManagementApi#postResponsemanagementLibrariesBulk) | **POST** /api/v2/responsemanagement/libraries/bulk | Get response libraries.
[**postResponsemanagementLibrariesQuery**](ResponseManagementApi#postResponsemanagementLibrariesQuery) | **POST** /api/v2/responsemanagement/libraries/query | Query libraries using criteria. Users can set DivisionId parameter as '*' to fetch libraries that aren't associated with any divisions.
[**postResponsemanagementResponseassetsBulk**](ResponseManagementApi#postResponsemanagementResponseassetsBulk) | **POST** /api/v2/responsemanagement/responseassets/bulk | Get response assets.
[**postResponsemanagementResponseassetsSearch**](ResponseManagementApi#postResponsemanagementResponseassetsSearch) | **POST** /api/v2/responsemanagement/responseassets/search | Search response assets
[**postResponsemanagementResponseassetsUploads**](ResponseManagementApi#postResponsemanagementResponseassetsUploads) | **POST** /api/v2/responsemanagement/responseassets/uploads | Creates pre-signed url for uploading response asset
[**postResponsemanagementResponses**](ResponseManagementApi#postResponsemanagementResponses) | **POST** /api/v2/responsemanagement/responses | Create a response.
[**postResponsemanagementResponsesDivisionviewsQuery**](ResponseManagementApi#postResponsemanagementResponsesDivisionviewsQuery) | **POST** /api/v2/responsemanagement/responses/divisionviews/query | Query responses
[**postResponsemanagementResponsesQuery**](ResponseManagementApi#postResponsemanagementResponsesQuery) | **POST** /api/v2/responsemanagement/responses/query | Query responses
[**putResponsemanagementLibrary**](ResponseManagementApi#putResponsemanagementLibrary) | **PUT** /api/v2/responsemanagement/libraries/{libraryId} | Update an existing response library.
[**putResponsemanagementResponse**](ResponseManagementApi#putResponsemanagementResponse) | **PUT** /api/v2/responsemanagement/responses/{responseId} | Update an existing response.
[**putResponsemanagementResponseasset**](ResponseManagementApi#putResponsemanagementResponseasset) | **PUT** /api/v2/responsemanagement/responseassets/{responseAssetId} | Update response asset



## deleteResponsemanagementLibrary

> void deleteResponsemanagementLibrary(libraryId, opts)


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
let opts = { 
  'customHeaders': {  // Object.<string, string> | Request Custom Headers
    'X-Service-Name': 'customer-service',
    'X-Request-ID': 'req-12345'
  }
};

apiInstance.deleteResponsemanagementLibrary(libraryId, opts)
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
 **customHeaders** | **Object.<string, string>** | Request Custom Headers | [optional] |

### Return type

void (no response body)


## deleteResponsemanagementResponse

> void deleteResponsemanagementResponse(responseId, opts)


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
let opts = { 
  'customHeaders': {  // Object.<string, string> | Request Custom Headers
    'X-Service-Name': 'customer-service',
    'X-Request-ID': 'req-12345'
  }
};

apiInstance.deleteResponsemanagementResponse(responseId, opts)
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
 **customHeaders** | **Object.<string, string>** | Request Custom Headers | [optional] |

### Return type

void (no response body)


## deleteResponsemanagementResponseasset

> void deleteResponsemanagementResponseasset(responseAssetId, opts)


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
let opts = { 
  'customHeaders': {  // Object.<string, string> | Request Custom Headers
    'X-Service-Name': 'customer-service',
    'X-Request-ID': 'req-12345'
  }
};

apiInstance.deleteResponsemanagementResponseasset(responseAssetId, opts)
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
 **customHeaders** | **Object.<string, string>** | Request Custom Headers | [optional] |

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
  'libraryPrefix': "libraryPrefix_example", // String | Returns a list of libraries that contain the prefix provided
  'customHeaders': {  // Object.<string, string> | Request Custom Headers
    'X-Service-Name': 'customer-service',
    'X-Request-ID': 'req-12345'
  }
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
 **customHeaders** | **Object.<string, string>** | Request Custom Headers | [optional] |

### Return type

**LibraryEntityListing**


## getResponsemanagementLibrariesDivisionview

> LibraryDivisionView getResponsemanagementLibrariesDivisionview(libraryId, opts)


GET /api/v2/responsemanagement/libraries/divisionviews/{libraryId}

Get details about an existing response library.

Requires ANY permissions:

* responses:library:search

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
  'customHeaders': {  // Object.<string, string> | Request Custom Headers
    'X-Service-Name': 'customer-service',
    'X-Request-ID': 'req-12345'
  }
};

apiInstance.getResponsemanagementLibrariesDivisionview(libraryId, opts)
  .then((data) => {
    console.log(`getResponsemanagementLibrariesDivisionview success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getResponsemanagementLibrariesDivisionview');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **libraryId** | **String** | Library ID |  |
 **customHeaders** | **Object.<string, string>** | Request Custom Headers | [optional] |

### Return type

**LibraryDivisionView**


## getResponsemanagementLibrariesDivisionviews

> LibraryDivisionViewEntityListing getResponsemanagementLibrariesDivisionviews(opts)


GET /api/v2/responsemanagement/libraries/divisionviews

Gets a list of existing response libraries.

Requires ANY permissions:

* responses:library:search

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
  'libraryPrefix': "libraryPrefix_example", // String | Returns a list of libraries that contain the prefix provided
  'customHeaders': {  // Object.<string, string> | Request Custom Headers
    'X-Service-Name': 'customer-service',
    'X-Request-ID': 'req-12345'
  }
};

apiInstance.getResponsemanagementLibrariesDivisionviews(opts)
  .then((data) => {
    console.log(`getResponsemanagementLibrariesDivisionviews success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getResponsemanagementLibrariesDivisionviews');
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
 **customHeaders** | **Object.<string, string>** | Request Custom Headers | [optional] |

### Return type

**LibraryDivisionViewEntityListing**


## getResponsemanagementLibrary

> Library getResponsemanagementLibrary(libraryId, opts)


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
let opts = { 
  'customHeaders': {  // Object.<string, string> | Request Custom Headers
    'X-Service-Name': 'customer-service',
    'X-Request-ID': 'req-12345'
  }
};

apiInstance.getResponsemanagementLibrary(libraryId, opts)
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
 **customHeaders** | **Object.<string, string>** | Request Custom Headers | [optional] |

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
  'expand': "expand_example", // String | Expand instructions for the return value.
  'customHeaders': {  // Object.<string, string> | Request Custom Headers
    'X-Service-Name': 'customer-service',
    'X-Request-ID': 'req-12345'
  }
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
 **customHeaders** | **Object.<string, string>** | Request Custom Headers | [optional] |

### Return type

**Response**


## getResponsemanagementResponseasset

> ResponseAsset getResponsemanagementResponseasset(responseAssetId, opts)


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
let opts = { 
  'customHeaders': {  // Object.<string, string> | Request Custom Headers
    'X-Service-Name': 'customer-service',
    'X-Request-ID': 'req-12345'
  }
};

apiInstance.getResponsemanagementResponseasset(responseAssetId, opts)
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
 **customHeaders** | **Object.<string, string>** | Request Custom Headers | [optional] |

### Return type

**ResponseAsset**


## getResponsemanagementResponseassetsStatusStatusId

> ResponseAssetStatus getResponsemanagementResponseassetsStatusStatusId(statusId, opts)


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
let opts = { 
  'customHeaders': {  // Object.<string, string> | Request Custom Headers
    'X-Service-Name': 'customer-service',
    'X-Request-ID': 'req-12345'
  }
};

apiInstance.getResponsemanagementResponseassetsStatusStatusId(statusId, opts)
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
 **customHeaders** | **Object.<string, string>** | Request Custom Headers | [optional] |

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
  'expand': "expand_example", // String | Expand instructions for the return value.
  'customHeaders': {  // Object.<string, string> | Request Custom Headers
    'X-Service-Name': 'customer-service',
    'X-Request-ID': 'req-12345'
  }
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
 **customHeaders** | **Object.<string, string>** | Request Custom Headers | [optional] |

### Return type

**ResponseEntityListing**


## getResponsemanagementResponsesDivisionview

> ResponseDivisionView getResponsemanagementResponsesDivisionview(responseId, opts)


GET /api/v2/responsemanagement/responses/divisionviews/{responseId}

Get details about an existing response.

Requires ANY permissions:

* responses:response:search

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
  'customHeaders': {  // Object.<string, string> | Request Custom Headers
    'X-Service-Name': 'customer-service',
    'X-Request-ID': 'req-12345'
  }
};

apiInstance.getResponsemanagementResponsesDivisionview(responseId, opts)
  .then((data) => {
    console.log(`getResponsemanagementResponsesDivisionview success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getResponsemanagementResponsesDivisionview');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **responseId** | **String** | Response ID |  |
 **customHeaders** | **Object.<string, string>** | Request Custom Headers | [optional] |

### Return type

**ResponseDivisionView**


## postResponsemanagementLibraries

> Library postResponsemanagementLibraries(body, opts)


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
let opts = { 
  'customHeaders': {  // Object.<string, string> | Request Custom Headers
    'X-Service-Name': 'customer-service',
    'X-Request-ID': 'req-12345'
  }
};

apiInstance.postResponsemanagementLibraries(body, opts)
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
 **customHeaders** | **Object.<string, string>** | Request Custom Headers | [optional] |

### Return type

**Library**


## postResponsemanagementLibrariesBulk

> LibraryEntityListing postResponsemanagementLibrariesBulk(body, opts)


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
let opts = { 
  'customHeaders': {  // Object.<string, string> | Request Custom Headers
    'X-Service-Name': 'customer-service',
    'X-Request-ID': 'req-12345'
  }
};

apiInstance.postResponsemanagementLibrariesBulk(body, opts)
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
 **customHeaders** | **Object.<string, string>** | Request Custom Headers | [optional] |

### Return type

**LibraryEntityListing**


## postResponsemanagementLibrariesQuery

> LibraryEntityListing postResponsemanagementLibrariesQuery(body, opts)


POST /api/v2/responsemanagement/libraries/query

Query libraries using criteria. Users can set DivisionId parameter as '*' to fetch libraries that aren't associated with any divisions.

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

let body = {}; // Object | Query criteria
let opts = { 
  'pageNumber': 1, // Number | Page number
  'pageSize': 25, // Number | Page size
  'customHeaders': {  // Object.<string, string> | Request Custom Headers
    'X-Service-Name': 'customer-service',
    'X-Request-ID': 'req-12345'
  }
};

apiInstance.postResponsemanagementLibrariesQuery(body, opts)
  .then((data) => {
    console.log(`postResponsemanagementLibrariesQuery success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling postResponsemanagementLibrariesQuery');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **body** | **Object** | Query criteria |  |
 **pageNumber** | **Number** | Page number | [optional] [default to 1] |
 **pageSize** | **Number** | Page size | [optional] [default to 25] |
 **customHeaders** | **Object.<string, string>** | Request Custom Headers | [optional] |

### Return type

**LibraryEntityListing**


## postResponsemanagementResponseassetsBulk

> ResponseAssetEntityListing postResponsemanagementResponseassetsBulk(body, opts)


POST /api/v2/responsemanagement/responseassets/bulk

Get response assets.

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

let body = {}; // Object | Asset IDs (max allowed 50)
let opts = { 
  'customHeaders': {  // Object.<string, string> | Request Custom Headers
    'X-Service-Name': 'customer-service',
    'X-Request-ID': 'req-12345'
  }
};

apiInstance.postResponsemanagementResponseassetsBulk(body, opts)
  .then((data) => {
    console.log(`postResponsemanagementResponseassetsBulk success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling postResponsemanagementResponseassetsBulk');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **body** | **Object** | Asset IDs (max allowed 50) |  |
 **customHeaders** | **Object.<string, string>** | Request Custom Headers | [optional] |

### Return type

**ResponseAssetEntityListing**


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
  'expand': ["expand_example"], // [String] | Which fields, if any, to expand
  'customHeaders': {  // Object.<string, string> | Request Custom Headers
    'X-Service-Name': 'customer-service',
    'X-Request-ID': 'req-12345'
  }
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
 **customHeaders** | **Object.<string, string>** | Request Custom Headers | [optional] |

### Return type

**ResponseAssetSearchResults**


## postResponsemanagementResponseassetsUploads

> CreateResponseAssetResponse postResponsemanagementResponseassetsUploads(body, opts)


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
let opts = { 
  'customHeaders': {  // Object.<string, string> | Request Custom Headers
    'X-Service-Name': 'customer-service',
    'X-Request-ID': 'req-12345'
  }
};

apiInstance.postResponsemanagementResponseassetsUploads(body, opts)
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
 **customHeaders** | **Object.<string, string>** | Request Custom Headers | [optional] |

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
  'expand': "expand_example", // String | Expand instructions for the return value.
  'customHeaders': {  // Object.<string, string> | Request Custom Headers
    'X-Service-Name': 'customer-service',
    'X-Request-ID': 'req-12345'
  }
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
 **customHeaders** | **Object.<string, string>** | Request Custom Headers | [optional] |

### Return type

**Response**


## postResponsemanagementResponsesDivisionviewsQuery

> ResponseDivisionViewQueryResults postResponsemanagementResponsesDivisionviewsQuery(body, opts)


POST /api/v2/responsemanagement/responses/divisionviews/query

Query responses

Requires ANY permissions:

* responses:response:search

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
  'customHeaders': {  // Object.<string, string> | Request Custom Headers
    'X-Service-Name': 'customer-service',
    'X-Request-ID': 'req-12345'
  }
};

apiInstance.postResponsemanagementResponsesDivisionviewsQuery(body, opts)
  .then((data) => {
    console.log(`postResponsemanagementResponsesDivisionviewsQuery success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling postResponsemanagementResponsesDivisionviewsQuery');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **body** | **Object** | Response |  |
 **customHeaders** | **Object.<string, string>** | Request Custom Headers | [optional] |

### Return type

**ResponseDivisionViewQueryResults**


## postResponsemanagementResponsesQuery

> ResponseQueryResults postResponsemanagementResponsesQuery(body, opts)


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
let opts = { 
  'customHeaders': {  // Object.<string, string> | Request Custom Headers
    'X-Service-Name': 'customer-service',
    'X-Request-ID': 'req-12345'
  }
};

apiInstance.postResponsemanagementResponsesQuery(body, opts)
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
 **customHeaders** | **Object.<string, string>** | Request Custom Headers | [optional] |

### Return type

**ResponseQueryResults**


## putResponsemanagementLibrary

> Library putResponsemanagementLibrary(libraryId, body, opts)


PUT /api/v2/responsemanagement/libraries/{libraryId}

Update an existing response library.

Fields that can be updated: name. The most recent version is required for updates.

Requires ALL permissions:

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
let opts = { 
  'customHeaders': {  // Object.<string, string> | Request Custom Headers
    'X-Service-Name': 'customer-service',
    'X-Request-ID': 'req-12345'
  }
};

apiInstance.putResponsemanagementLibrary(libraryId, body, opts)
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
 **customHeaders** | **Object.<string, string>** | Request Custom Headers | [optional] |

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
  'expand': "expand_example", // String | Expand instructions for the return value.
  'customHeaders': {  // Object.<string, string> | Request Custom Headers
    'X-Service-Name': 'customer-service',
    'X-Request-ID': 'req-12345'
  }
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
 **customHeaders** | **Object.<string, string>** | Request Custom Headers | [optional] |

### Return type

**Response**


## putResponsemanagementResponseasset

> ResponseAsset putResponsemanagementResponseasset(responseAssetId, body, opts)


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
let opts = { 
  'customHeaders': {  // Object.<string, string> | Request Custom Headers
    'X-Service-Name': 'customer-service',
    'X-Request-ID': 'req-12345'
  }
};

apiInstance.putResponsemanagementResponseasset(responseAssetId, body, opts)
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
 **customHeaders** | **Object.<string, string>** | Request Custom Headers | [optional] |

### Return type

**ResponseAsset**


_purecloud-platform-client-v2@258.2.0_
