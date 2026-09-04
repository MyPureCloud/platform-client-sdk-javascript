# FaxApi

# platformClient.FaxApi

All URIs are relative to *https://api.mypurecloud.com*

| Method | HTTP request | Description |
| ------------- | ------------- | ------------- |
[**deleteFaxDocument**](FaxApi#deleteFaxDocument) | **DELETE** /api/v2/fax/documents/{documentId} | Delete a fax document.
[**getFaxDocument**](FaxApi#getFaxDocument) | **GET** /api/v2/fax/documents/{documentId} | Get a document.
[**getFaxDocumentContent**](FaxApi#getFaxDocumentContent) | **GET** /api/v2/fax/documents/{documentId}/content | Download a fax document.
[**getFaxDocuments**](FaxApi#getFaxDocuments) | **GET** /api/v2/fax/documents | Get a list of fax documents.
[**getFaxFaxIdStatus**](FaxApi#getFaxFaxIdStatus) | **GET** /api/v2/fax/{faxId}/status | Get fax status
[**getFaxSettings**](FaxApi#getFaxSettings) | **GET** /api/v2/fax/settings | Get organization config for given organization
[**getFaxSummary**](FaxApi#getFaxSummary) | **GET** /api/v2/fax/summary | Get fax summary
[**putFaxDocument**](FaxApi#putFaxDocument) | **PUT** /api/v2/fax/documents/{documentId} | Update a fax document.
[**putFaxSettings**](FaxApi#putFaxSettings) | **PUT** /api/v2/fax/settings | Update/write organization config for given organization



## deleteFaxDocument

> void deleteFaxDocument(documentId, opts)


DELETE /api/v2/fax/documents/{documentId}

Delete a fax document.

Requires NO permissions:

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.FaxApi();

let documentId = "documentId_example"; // String | Document ID
let opts = { 
  'customHeaders': {  // Object.<string, string> | Request Custom Headers
    'X-Service-Name': 'customer-service',
    'X-Request-ID': 'req-12345'
  }
};

apiInstance.deleteFaxDocument(documentId, opts)
  .then(() => {
    console.log('deleteFaxDocument returned successfully.');
  })
  .catch((err) => {
    console.log('There was a failure calling deleteFaxDocument');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **documentId** | **String** | Document ID |  |
 **customHeaders** | **Object.<string, string>** | Request Custom Headers | [optional] |

### Return type

void (no response body)


## getFaxDocument

> FaxDocument getFaxDocument(documentId, opts)


GET /api/v2/fax/documents/{documentId}

Get a document.

Requires NO permissions:

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.FaxApi();

let documentId = "documentId_example"; // String | Document ID
let opts = { 
  'customHeaders': {  // Object.<string, string> | Request Custom Headers
    'X-Service-Name': 'customer-service',
    'X-Request-ID': 'req-12345'
  }
};

apiInstance.getFaxDocument(documentId, opts)
  .then((data) => {
    console.log(`getFaxDocument success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getFaxDocument');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **documentId** | **String** | Document ID |  |
 **customHeaders** | **Object.<string, string>** | Request Custom Headers | [optional] |

### Return type

**FaxDocument**


## getFaxDocumentContent

> DownloadResponse getFaxDocumentContent(documentId, opts)


GET /api/v2/fax/documents/{documentId}/content

Download a fax document.

Requires NO permissions:

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.FaxApi();

let documentId = "documentId_example"; // String | Document ID
let opts = { 
  'customHeaders': {  // Object.<string, string> | Request Custom Headers
    'X-Service-Name': 'customer-service',
    'X-Request-ID': 'req-12345'
  }
};

apiInstance.getFaxDocumentContent(documentId, opts)
  .then((data) => {
    console.log(`getFaxDocumentContent success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getFaxDocumentContent');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **documentId** | **String** | Document ID |  |
 **customHeaders** | **Object.<string, string>** | Request Custom Headers | [optional] |

### Return type

**DownloadResponse**


## getFaxDocuments

> FaxDocumentEntityListing getFaxDocuments(opts)


GET /api/v2/fax/documents

Get a list of fax documents.

Requires NO permissions:

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.FaxApi();

let opts = { 
  'pageSize': 25, // Number | Page size
  'pageNumber': 1, // Number | Page number
  'customHeaders': {  // Object.<string, string> | Request Custom Headers
    'X-Service-Name': 'customer-service',
    'X-Request-ID': 'req-12345'
  }
};

apiInstance.getFaxDocuments(opts)
  .then((data) => {
    console.log(`getFaxDocuments success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getFaxDocuments');
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

**FaxDocumentEntityListing**


## getFaxFaxIdStatus

> OutboundFaxStatus getFaxFaxIdStatus(faxId, opts)


GET /api/v2/fax/{faxId}/status

Get fax status

Retrieves status for an outbound (sent) fax. Only the authenticated user who sent the fax can fetch its status; this operation does not expose inbound or other users faxes. When the `result` field is present on the response body, it describes the terminal outcome of **transmitting** the fax to the remote endpoint (e.g. SUCCESS or FAILURE). 

Requires ANY permissions:

* conversation:fax:send

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.FaxApi();

let faxId = "faxId_example"; // String | Fax ID of an outbound fax sent by the authenticated user only.
let opts = { 
  'customHeaders': {  // Object.<string, string> | Request Custom Headers
    'X-Service-Name': 'customer-service',
    'X-Request-ID': 'req-12345'
  }
};

apiInstance.getFaxFaxIdStatus(faxId, opts)
  .then((data) => {
    console.log(`getFaxFaxIdStatus success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getFaxFaxIdStatus');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **faxId** | **String** | Fax ID of an outbound fax sent by the authenticated user only. |  |
 **customHeaders** | **Object.<string, string>** | Request Custom Headers | [optional] |

### Return type

**OutboundFaxStatus**


## getFaxSettings

> FaxConfig getFaxSettings(opts)


GET /api/v2/fax/settings

Get organization config for given organization

Requires NO permissions:

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.FaxApi();
let opts = { 
  'customHeaders': {  // Object.<string, string> | Request Custom Headers
    'X-Service-Name': 'customer-service',
    'X-Request-ID': 'req-12345'
  }
};

apiInstance.getFaxSettings(opts)
  .then((data) => {
    console.log(`getFaxSettings success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getFaxSettings');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **customHeaders** | **Object.<string, string>** | Request Custom Headers | [optional] |

### Return type

**FaxConfig**


## getFaxSummary

> FaxSummary getFaxSummary(opts)


GET /api/v2/fax/summary

Get fax summary

Requires NO permissions:

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.FaxApi();
let opts = { 
  'customHeaders': {  // Object.<string, string> | Request Custom Headers
    'X-Service-Name': 'customer-service',
    'X-Request-ID': 'req-12345'
  }
};

apiInstance.getFaxSummary(opts)
  .then((data) => {
    console.log(`getFaxSummary success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getFaxSummary');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **customHeaders** | **Object.<string, string>** | Request Custom Headers | [optional] |

### Return type

**FaxSummary**


## putFaxDocument

> FaxDocument putFaxDocument(documentId, body, opts)


PUT /api/v2/fax/documents/{documentId}

Update a fax document.

Requires NO permissions:

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.FaxApi();

let documentId = "documentId_example"; // String | Document ID
let body = {}; // Object | Document
let opts = { 
  'customHeaders': {  // Object.<string, string> | Request Custom Headers
    'X-Service-Name': 'customer-service',
    'X-Request-ID': 'req-12345'
  }
};

apiInstance.putFaxDocument(documentId, body, opts)
  .then((data) => {
    console.log(`putFaxDocument success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling putFaxDocument');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **documentId** | **String** | Document ID |  |
 **body** | **Object** | Document |  |
 **customHeaders** | **Object.<string, string>** | Request Custom Headers | [optional] |

### Return type

**FaxDocument**


## putFaxSettings

> FaxConfig putFaxSettings(opts)


PUT /api/v2/fax/settings

Update/write organization config for given organization

Requires ANY permissions:

* directory:organization:admin

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.FaxApi();

let opts = { 
  'body': {}, // Object | 
  'customHeaders': {  // Object.<string, string> | Request Custom Headers
    'X-Service-Name': 'customer-service',
    'X-Request-ID': 'req-12345'
  }
};

apiInstance.putFaxSettings(opts)
  .then((data) => {
    console.log(`putFaxSettings success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling putFaxSettings');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **body** | **Object** |  | [optional]  |
 **customHeaders** | **Object.<string, string>** | Request Custom Headers | [optional] |

### Return type

**FaxConfig**


_purecloud-platform-client-v2@261.0.0_
