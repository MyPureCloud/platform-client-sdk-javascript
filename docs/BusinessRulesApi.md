# BusinessRulesApi

# platformClient.BusinessRulesApi

All URIs are relative to *https://api.mypurecloud.com*

| Method | HTTP request | Description |
| ------------- | ------------- | ------------- |
[**deleteBusinessrulesDecisiontable**](BusinessRulesApi#deleteBusinessrulesDecisiontable) | **DELETE** /api/v2/businessrules/decisiontables/{tableId} | Delete a decision table
[**deleteBusinessrulesDecisiontableExport**](BusinessRulesApi#deleteBusinessrulesDecisiontableExport) | **DELETE** /api/v2/businessrules/decisiontables/{tableId}/exports/{exportJobId} | Delete an export job for a decision table
[**deleteBusinessrulesDecisiontableImport**](BusinessRulesApi#deleteBusinessrulesDecisiontableImport) | **DELETE** /api/v2/businessrules/decisiontables/{tableId}/imports/{importJobId} | Delete decision table row import job
[**deleteBusinessrulesDecisiontableVersion**](BusinessRulesApi#deleteBusinessrulesDecisiontableVersion) | **DELETE** /api/v2/businessrules/decisiontables/{tableId}/versions/{tableVersion} | Delete a decision table version
[**deleteBusinessrulesDecisiontableVersionRow**](BusinessRulesApi#deleteBusinessrulesDecisiontableVersionRow) | **DELETE** /api/v2/businessrules/decisiontables/{tableId}/versions/{tableVersion}/rows/{rowId} | Delete a decision table row
[**deleteBusinessrulesDecisiontableVersionSnapshot**](BusinessRulesApi#deleteBusinessrulesDecisiontableVersionSnapshot) | **DELETE** /api/v2/businessrules/decisiontables/{tableId}/versions/{tableVersion}/snapshot | Deletes a decision table version snapshot
[**deleteBusinessrulesSchema**](BusinessRulesApi#deleteBusinessrulesSchema) | **DELETE** /api/v2/businessrules/schemas/{schemaId} | Delete a schema
[**getBusinessrulesDecisiontable**](BusinessRulesApi#getBusinessrulesDecisiontable) | **GET** /api/v2/businessrules/decisiontables/{tableId} | Get a decision table
[**getBusinessrulesDecisiontableExport**](BusinessRulesApi#getBusinessrulesDecisiontableExport) | **GET** /api/v2/businessrules/decisiontables/{tableId}/exports/{exportJobId} | Get an export job for a decision table
[**getBusinessrulesDecisiontableExports**](BusinessRulesApi#getBusinessrulesDecisiontableExports) | **GET** /api/v2/businessrules/decisiontables/{tableId}/exports | List export jobs for a decision table
[**getBusinessrulesDecisiontableImport**](BusinessRulesApi#getBusinessrulesDecisiontableImport) | **GET** /api/v2/businessrules/decisiontables/{tableId}/imports/{importJobId} | Get decision table row import job
[**getBusinessrulesDecisiontableImports**](BusinessRulesApi#getBusinessrulesDecisiontableImports) | **GET** /api/v2/businessrules/decisiontables/{tableId}/imports | List decision table row import jobs
[**getBusinessrulesDecisiontableVersion**](BusinessRulesApi#getBusinessrulesDecisiontableVersion) | **GET** /api/v2/businessrules/decisiontables/{tableId}/versions/{tableVersion} | Get a decision table version
[**getBusinessrulesDecisiontableVersionRow**](BusinessRulesApi#getBusinessrulesDecisiontableVersionRow) | **GET** /api/v2/businessrules/decisiontables/{tableId}/versions/{tableVersion}/rows/{rowId} | Get a decision table row
[**getBusinessrulesDecisiontableVersionRows**](BusinessRulesApi#getBusinessrulesDecisiontableVersionRows) | **GET** /api/v2/businessrules/decisiontables/{tableId}/versions/{tableVersion}/rows | Get a list of decision table rows.
[**getBusinessrulesDecisiontableVersions**](BusinessRulesApi#getBusinessrulesDecisiontableVersions) | **GET** /api/v2/businessrules/decisiontables/{tableId}/versions | Get a list of decision table versions
[**getBusinessrulesDecisiontables**](BusinessRulesApi#getBusinessrulesDecisiontables) | **GET** /api/v2/businessrules/decisiontables | Get a list of decision tables.
[**getBusinessrulesDecisiontablesSearch**](BusinessRulesApi#getBusinessrulesDecisiontablesSearch) | **GET** /api/v2/businessrules/decisiontables/search | Search for decision tables.
[**getBusinessrulesSchema**](BusinessRulesApi#getBusinessrulesSchema) | **GET** /api/v2/businessrules/schemas/{schemaId} | Get a schema
[**getBusinessrulesSchemaVersion**](BusinessRulesApi#getBusinessrulesSchemaVersion) | **GET** /api/v2/businessrules/schemas/{schemaId}/versions/{schemaVersion} | Get a schema version
[**getBusinessrulesSchemaVersions**](BusinessRulesApi#getBusinessrulesSchemaVersions) | **GET** /api/v2/businessrules/schemas/{schemaId}/versions | List schema versions
[**getBusinessrulesSchemas**](BusinessRulesApi#getBusinessrulesSchemas) | **GET** /api/v2/businessrules/schemas | Get a list of schemas.
[**getBusinessrulesSchemasCoretype**](BusinessRulesApi#getBusinessrulesSchemasCoretype) | **GET** /api/v2/businessrules/schemas/coretypes/{coreTypeName} | Get a specific named core type.
[**getBusinessrulesSchemasCoretypes**](BusinessRulesApi#getBusinessrulesSchemasCoretypes) | **GET** /api/v2/businessrules/schemas/coretypes | Get the core types from which all schemas are built.
[**patchBusinessrulesDecisiontable**](BusinessRulesApi#patchBusinessrulesDecisiontable) | **PATCH** /api/v2/businessrules/decisiontables/{tableId} | Update a decision table
[**patchBusinessrulesDecisiontableImport**](BusinessRulesApi#patchBusinessrulesDecisiontableImport) | **PATCH** /api/v2/businessrules/decisiontables/{tableId}/imports/{importJobId} | Update decision table row import job
[**patchBusinessrulesDecisiontableVersion**](BusinessRulesApi#patchBusinessrulesDecisiontableVersion) | **PATCH** /api/v2/businessrules/decisiontables/{tableId}/versions/{tableVersion} | Update a decision table version
[**postBusinessrulesDecisiontableExecute**](BusinessRulesApi#postBusinessrulesDecisiontableExecute) | **POST** /api/v2/businessrules/decisiontables/{tableId}/execute | Execute a published decision table
[**postBusinessrulesDecisiontableExports**](BusinessRulesApi#postBusinessrulesDecisiontableExports) | **POST** /api/v2/businessrules/decisiontables/{tableId}/exports | Create an export job for a decision table version
[**postBusinessrulesDecisiontableImports**](BusinessRulesApi#postBusinessrulesDecisiontableImports) | **POST** /api/v2/businessrules/decisiontables/{tableId}/imports | Create a decision table row import job
[**postBusinessrulesDecisiontableVersionCopy**](BusinessRulesApi#postBusinessrulesDecisiontableVersionCopy) | **POST** /api/v2/businessrules/decisiontables/{tableId}/versions/{tableVersion}/copy | Copy a decision table version
[**postBusinessrulesDecisiontableVersionExecute**](BusinessRulesApi#postBusinessrulesDecisiontableVersionExecute) | **POST** /api/v2/businessrules/decisiontables/{tableId}/versions/{tableVersion}/execute | Execute a decision table version
[**postBusinessrulesDecisiontableVersionRollback**](BusinessRulesApi#postBusinessrulesDecisiontableVersionRollback) | **POST** /api/v2/businessrules/decisiontables/{tableId}/versions/{tableVersion}/rollback | Re-publish a superseded decision table version as the current published version
[**postBusinessrulesDecisiontableVersionRows**](BusinessRulesApi#postBusinessrulesDecisiontableVersionRows) | **POST** /api/v2/businessrules/decisiontables/{tableId}/versions/{tableVersion}/rows | Create a decision table row
[**postBusinessrulesDecisiontableVersionRowsBulkAdd**](BusinessRulesApi#postBusinessrulesDecisiontableVersionRowsBulkAdd) | **POST** /api/v2/businessrules/decisiontables/{tableId}/versions/{tableVersion}/rows/bulk/add | Bulk add decision table rows
[**postBusinessrulesDecisiontableVersionRowsBulkRemove**](BusinessRulesApi#postBusinessrulesDecisiontableVersionRowsBulkRemove) | **POST** /api/v2/businessrules/decisiontables/{tableId}/versions/{tableVersion}/rows/bulk/remove | Bulk delete decision table rows
[**postBusinessrulesDecisiontableVersionRowsBulkUpdate**](BusinessRulesApi#postBusinessrulesDecisiontableVersionRowsBulkUpdate) | **POST** /api/v2/businessrules/decisiontables/{tableId}/versions/{tableVersion}/rows/bulk/update | Bulk update decision table rows
[**postBusinessrulesDecisiontableVersionRowsSearch**](BusinessRulesApi#postBusinessrulesDecisiontableVersionRowsSearch) | **POST** /api/v2/businessrules/decisiontables/{tableId}/versions/{tableVersion}/rows/search | Search for decision table rows
[**postBusinessrulesDecisiontableVersionSnapshot**](BusinessRulesApi#postBusinessrulesDecisiontableVersionSnapshot) | **POST** /api/v2/businessrules/decisiontables/{tableId}/versions/{tableVersion}/snapshot | Creates a decision table version snapshot
[**postBusinessrulesDecisiontableVersionSync**](BusinessRulesApi#postBusinessrulesDecisiontableVersionSync) | **POST** /api/v2/businessrules/decisiontables/{tableId}/versions/{tableVersion}/sync | Update the Business Rules Schema to the latest version for a given decision table version
[**postBusinessrulesDecisiontableVersions**](BusinessRulesApi#postBusinessrulesDecisiontableVersions) | **POST** /api/v2/businessrules/decisiontables/{tableId}/versions | Create a new decision table version. When sourceVersion is not provided, the draft is created from the published version.
[**postBusinessrulesDecisiontables**](BusinessRulesApi#postBusinessrulesDecisiontables) | **POST** /api/v2/businessrules/decisiontables | Create a decision table
[**postBusinessrulesSchemas**](BusinessRulesApi#postBusinessrulesSchemas) | **POST** /api/v2/businessrules/schemas | Create a schema
[**putBusinessrulesDecisiontableVersionPublish**](BusinessRulesApi#putBusinessrulesDecisiontableVersionPublish) | **PUT** /api/v2/businessrules/decisiontables/{tableId}/versions/{tableVersion}/publish | Publish a decision table version
[**putBusinessrulesDecisiontableVersionRow**](BusinessRulesApi#putBusinessrulesDecisiontableVersionRow) | **PUT** /api/v2/businessrules/decisiontables/{tableId}/versions/{tableVersion}/rows/{rowId} | Full update a decision table row
[**putBusinessrulesSchema**](BusinessRulesApi#putBusinessrulesSchema) | **PUT** /api/v2/businessrules/schemas/{schemaId} | Update a schema



## deleteBusinessrulesDecisiontable

> void deleteBusinessrulesDecisiontable(tableId, opts)


DELETE /api/v2/businessrules/decisiontables/{tableId}

Delete a decision table

Requires ANY permissions:

* businessrules:decisionTable:delete

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.BusinessRulesApi();

let tableId = "tableId_example"; // String | Table ID
let opts = { 
  'forceDelete': false, // Boolean | Force delete decision table (under certain conditions)
  'customHeaders': {  // Object.<string, string> | Request Custom Headers
    'X-Service-Name': 'customer-service',
    'X-Request-ID': 'req-12345'
  }
};

apiInstance.deleteBusinessrulesDecisiontable(tableId, opts)
  .then(() => {
    console.log('deleteBusinessrulesDecisiontable returned successfully.');
  })
  .catch((err) => {
    console.log('There was a failure calling deleteBusinessrulesDecisiontable');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **tableId** | **String** | Table ID |  |
 **forceDelete** | **Boolean** | Force delete decision table (under certain conditions) | [optional] [default to false] |
 **customHeaders** | **Object.<string, string>** | Request Custom Headers | [optional] |

### Return type

void (no response body)


## deleteBusinessrulesDecisiontableExport

> void deleteBusinessrulesDecisiontableExport(tableId, exportJobId, opts)


DELETE /api/v2/businessrules/decisiontables/{tableId}/exports/{exportJobId}

Delete an export job for a decision table

Requires ANY permissions:

* businessrules:decisionTableExportJob:delete

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.BusinessRulesApi();

let tableId = "tableId_example"; // String | Table ID
let exportJobId = "exportJobId_example"; // String | Export Job ID
let opts = { 
  'customHeaders': {  // Object.<string, string> | Request Custom Headers
    'X-Service-Name': 'customer-service',
    'X-Request-ID': 'req-12345'
  }
};

apiInstance.deleteBusinessrulesDecisiontableExport(tableId, exportJobId, opts)
  .then(() => {
    console.log('deleteBusinessrulesDecisiontableExport returned successfully.');
  })
  .catch((err) => {
    console.log('There was a failure calling deleteBusinessrulesDecisiontableExport');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **tableId** | **String** | Table ID |  |
 **exportJobId** | **String** | Export Job ID |  |
 **customHeaders** | **Object.<string, string>** | Request Custom Headers | [optional] |

### Return type

void (no response body)


## deleteBusinessrulesDecisiontableImport

> void deleteBusinessrulesDecisiontableImport(tableId, importJobId, opts)


DELETE /api/v2/businessrules/decisiontables/{tableId}/imports/{importJobId}

Delete decision table row import job

Requires ANY permissions:

* businessrules:decisionTableImportJob:delete

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.BusinessRulesApi();

let tableId = "tableId_example"; // String | Table ID
let importJobId = "importJobId_example"; // String | Import job ID
let opts = { 
  'customHeaders': {  // Object.<string, string> | Request Custom Headers
    'X-Service-Name': 'customer-service',
    'X-Request-ID': 'req-12345'
  }
};

apiInstance.deleteBusinessrulesDecisiontableImport(tableId, importJobId, opts)
  .then(() => {
    console.log('deleteBusinessrulesDecisiontableImport returned successfully.');
  })
  .catch((err) => {
    console.log('There was a failure calling deleteBusinessrulesDecisiontableImport');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **tableId** | **String** | Table ID |  |
 **importJobId** | **String** | Import job ID |  |
 **customHeaders** | **Object.<string, string>** | Request Custom Headers | [optional] |

### Return type

void (no response body)


## deleteBusinessrulesDecisiontableVersion

> void deleteBusinessrulesDecisiontableVersion(tableId, tableVersion, opts)


DELETE /api/v2/businessrules/decisiontables/{tableId}/versions/{tableVersion}

Delete a decision table version

Requires ANY permissions:

* businessrules:decisionTable:delete

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.BusinessRulesApi();

let tableId = "tableId_example"; // String | Table ID
let tableVersion = 3.4; // Number | Table Version
let opts = { 
  'customHeaders': {  // Object.<string, string> | Request Custom Headers
    'X-Service-Name': 'customer-service',
    'X-Request-ID': 'req-12345'
  }
};

apiInstance.deleteBusinessrulesDecisiontableVersion(tableId, tableVersion, opts)
  .then(() => {
    console.log('deleteBusinessrulesDecisiontableVersion returned successfully.');
  })
  .catch((err) => {
    console.log('There was a failure calling deleteBusinessrulesDecisiontableVersion');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **tableId** | **String** | Table ID |  |
 **tableVersion** | **Number** | Table Version |  |
 **customHeaders** | **Object.<string, string>** | Request Custom Headers | [optional] |

### Return type

void (no response body)


## deleteBusinessrulesDecisiontableVersionRow

> void deleteBusinessrulesDecisiontableVersionRow(tableId, tableVersion, rowId, opts)


DELETE /api/v2/businessrules/decisiontables/{tableId}/versions/{tableVersion}/rows/{rowId}

Delete a decision table row

Required permissions depend on table content: if the table or row contains queue references, routing:queue:view is required in each queues division. Future platform objects will require their associated permissions in the relevant divisions when the table or row contains references to them.

Requires ALL permissions:

* businessrules:decisionTableRow:delete
* routing:queue:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.BusinessRulesApi();

let tableId = "tableId_example"; // String | Table ID
let tableVersion = 3.4; // Number | Table Version
let rowId = "rowId_example"; // String | Row ID
let opts = { 
  'customHeaders': {  // Object.<string, string> | Request Custom Headers
    'X-Service-Name': 'customer-service',
    'X-Request-ID': 'req-12345'
  }
};

apiInstance.deleteBusinessrulesDecisiontableVersionRow(tableId, tableVersion, rowId, opts)
  .then(() => {
    console.log('deleteBusinessrulesDecisiontableVersionRow returned successfully.');
  })
  .catch((err) => {
    console.log('There was a failure calling deleteBusinessrulesDecisiontableVersionRow');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **tableId** | **String** | Table ID |  |
 **tableVersion** | **Number** | Table Version |  |
 **rowId** | **String** | Row ID |  |
 **customHeaders** | **Object.<string, string>** | Request Custom Headers | [optional] |

### Return type

void (no response body)


## deleteBusinessrulesDecisiontableVersionSnapshot

> void deleteBusinessrulesDecisiontableVersionSnapshot(tableId, tableVersion, opts)


DELETE /api/v2/businessrules/decisiontables/{tableId}/versions/{tableVersion}/snapshot

Deletes a decision table version snapshot

Requires ANY permissions:

* businessrules:decisionTableSnapshot:delete

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.BusinessRulesApi();

let tableId = "tableId_example"; // String | Table ID
let tableVersion = 3.4; // Number | Table Version
let opts = { 
  'customHeaders': {  // Object.<string, string> | Request Custom Headers
    'X-Service-Name': 'customer-service',
    'X-Request-ID': 'req-12345'
  }
};

apiInstance.deleteBusinessrulesDecisiontableVersionSnapshot(tableId, tableVersion, opts)
  .then(() => {
    console.log('deleteBusinessrulesDecisiontableVersionSnapshot returned successfully.');
  })
  .catch((err) => {
    console.log('There was a failure calling deleteBusinessrulesDecisiontableVersionSnapshot');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **tableId** | **String** | Table ID |  |
 **tableVersion** | **Number** | Table Version |  |
 **customHeaders** | **Object.<string, string>** | Request Custom Headers | [optional] |

### Return type

void (no response body)


## deleteBusinessrulesSchema

> void deleteBusinessrulesSchema(schemaId, opts)


DELETE /api/v2/businessrules/schemas/{schemaId}

Delete a schema

Requires ANY permissions:

* businessrules:businessRulesSchema:delete

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.BusinessRulesApi();

let schemaId = "schemaId_example"; // String | Schema ID
let opts = { 
  'customHeaders': {  // Object.<string, string> | Request Custom Headers
    'X-Service-Name': 'customer-service',
    'X-Request-ID': 'req-12345'
  }
};

apiInstance.deleteBusinessrulesSchema(schemaId, opts)
  .then(() => {
    console.log('deleteBusinessrulesSchema returned successfully.');
  })
  .catch((err) => {
    console.log('There was a failure calling deleteBusinessrulesSchema');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **schemaId** | **String** | Schema ID |  |
 **customHeaders** | **Object.<string, string>** | Request Custom Headers | [optional] |

### Return type

void (no response body)


## getBusinessrulesDecisiontable

> DecisionTable getBusinessrulesDecisiontable(tableId, opts)


GET /api/v2/businessrules/decisiontables/{tableId}

Get a decision table

Requires ANY permissions:

* businessrules:decisionTable:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.BusinessRulesApi();

let tableId = "tableId_example"; // String | Table ID
let opts = { 
  'customHeaders': {  // Object.<string, string> | Request Custom Headers
    'X-Service-Name': 'customer-service',
    'X-Request-ID': 'req-12345'
  }
};

apiInstance.getBusinessrulesDecisiontable(tableId, opts)
  .then((data) => {
    console.log(`getBusinessrulesDecisiontable success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getBusinessrulesDecisiontable');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **tableId** | **String** | Table ID |  |
 **customHeaders** | **Object.<string, string>** | Request Custom Headers | [optional] |

### Return type

**DecisionTable**


## getBusinessrulesDecisiontableExport

> DecisionTableExportJob getBusinessrulesDecisiontableExport(tableId, exportJobId, opts)


GET /api/v2/businessrules/decisiontables/{tableId}/exports/{exportJobId}

Get an export job for a decision table

Requires ANY permissions:

* businessrules:decisionTableExportJob:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.BusinessRulesApi();

let tableId = "tableId_example"; // String | Table ID
let exportJobId = "exportJobId_example"; // String | Export Job ID
let opts = { 
  'customHeaders': {  // Object.<string, string> | Request Custom Headers
    'X-Service-Name': 'customer-service',
    'X-Request-ID': 'req-12345'
  }
};

apiInstance.getBusinessrulesDecisiontableExport(tableId, exportJobId, opts)
  .then((data) => {
    console.log(`getBusinessrulesDecisiontableExport success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getBusinessrulesDecisiontableExport');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **tableId** | **String** | Table ID |  |
 **exportJobId** | **String** | Export Job ID |  |
 **customHeaders** | **Object.<string, string>** | Request Custom Headers | [optional] |

### Return type

**DecisionTableExportJob**


## getBusinessrulesDecisiontableExports

> DecisionTableExportJobListing getBusinessrulesDecisiontableExports(tableId, opts)


GET /api/v2/businessrules/decisiontables/{tableId}/exports

List export jobs for a decision table

Requires ANY permissions:

* businessrules:decisionTableExportJob:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.BusinessRulesApi();

let tableId = "tableId_example"; // String | Table ID
let opts = { 
  'after': "after_example", // String | The cursor that points to the end of the set of entities that has been returned.
  'pageSize': "pageSize_example", // String | Number of entities to return. Maximum of 100.
  'customHeaders': {  // Object.<string, string> | Request Custom Headers
    'X-Service-Name': 'customer-service',
    'X-Request-ID': 'req-12345'
  }
};

apiInstance.getBusinessrulesDecisiontableExports(tableId, opts)
  .then((data) => {
    console.log(`getBusinessrulesDecisiontableExports success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getBusinessrulesDecisiontableExports');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **tableId** | **String** | Table ID |  |
 **after** | **String** | The cursor that points to the end of the set of entities that has been returned. | [optional]  |
 **pageSize** | **String** | Number of entities to return. Maximum of 100. | [optional]  |
 **customHeaders** | **Object.<string, string>** | Request Custom Headers | [optional] |

### Return type

**DecisionTableExportJobListing**


## getBusinessrulesDecisiontableImport

> DecisionTableImportJob getBusinessrulesDecisiontableImport(tableId, importJobId, opts)


GET /api/v2/businessrules/decisiontables/{tableId}/imports/{importJobId}

Get decision table row import job

Requires ANY permissions:

* businessrules:decisionTableImportJob:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.BusinessRulesApi();

let tableId = "tableId_example"; // String | Table ID
let importJobId = "importJobId_example"; // String | Import job ID
let opts = { 
  'customHeaders': {  // Object.<string, string> | Request Custom Headers
    'X-Service-Name': 'customer-service',
    'X-Request-ID': 'req-12345'
  }
};

apiInstance.getBusinessrulesDecisiontableImport(tableId, importJobId, opts)
  .then((data) => {
    console.log(`getBusinessrulesDecisiontableImport success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getBusinessrulesDecisiontableImport');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **tableId** | **String** | Table ID |  |
 **importJobId** | **String** | Import job ID |  |
 **customHeaders** | **Object.<string, string>** | Request Custom Headers | [optional] |

### Return type

**DecisionTableImportJob**


## getBusinessrulesDecisiontableImports

> DecisionTableImportJobListing getBusinessrulesDecisiontableImports(tableId, opts)


GET /api/v2/businessrules/decisiontables/{tableId}/imports

List decision table row import jobs

Requires ANY permissions:

* businessrules:decisionTableImportJob:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.BusinessRulesApi();

let tableId = "tableId_example"; // String | Table ID
let opts = { 
  'after': "after_example", // String | The cursor that points to the end of the set of entities that has been returned.
  'pageSize': "pageSize_example", // String | Number of entities to return. Maximum of 100.
  'customHeaders': {  // Object.<string, string> | Request Custom Headers
    'X-Service-Name': 'customer-service',
    'X-Request-ID': 'req-12345'
  }
};

apiInstance.getBusinessrulesDecisiontableImports(tableId, opts)
  .then((data) => {
    console.log(`getBusinessrulesDecisiontableImports success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getBusinessrulesDecisiontableImports');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **tableId** | **String** | Table ID |  |
 **after** | **String** | The cursor that points to the end of the set of entities that has been returned. | [optional]  |
 **pageSize** | **String** | Number of entities to return. Maximum of 100. | [optional]  |
 **customHeaders** | **Object.<string, string>** | Request Custom Headers | [optional] |

### Return type

**DecisionTableImportJobListing**


## getBusinessrulesDecisiontableVersion

> DecisionTableVersion getBusinessrulesDecisiontableVersion(tableId, tableVersion, opts)


GET /api/v2/businessrules/decisiontables/{tableId}/versions/{tableVersion}

Get a decision table version

Requires ANY permissions:

* businessrules:decisionTable:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.BusinessRulesApi();

let tableId = "tableId_example"; // String | Table ID
let tableVersion = 3.4; // Number | Table Version
let opts = { 
  'customHeaders': {  // Object.<string, string> | Request Custom Headers
    'X-Service-Name': 'customer-service',
    'X-Request-ID': 'req-12345'
  }
};

apiInstance.getBusinessrulesDecisiontableVersion(tableId, tableVersion, opts)
  .then((data) => {
    console.log(`getBusinessrulesDecisiontableVersion success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getBusinessrulesDecisiontableVersion');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **tableId** | **String** | Table ID |  |
 **tableVersion** | **Number** | Table Version |  |
 **customHeaders** | **Object.<string, string>** | Request Custom Headers | [optional] |

### Return type

**DecisionTableVersion**


## getBusinessrulesDecisiontableVersionRow

> DecisionTableRow getBusinessrulesDecisiontableVersionRow(tableId, tableVersion, rowId, opts)


GET /api/v2/businessrules/decisiontables/{tableId}/versions/{tableVersion}/rows/{rowId}

Get a decision table row

Requires ANY permissions:

* businessrules:decisionTableRow:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.BusinessRulesApi();

let tableId = "tableId_example"; // String | Table ID
let tableVersion = 3.4; // Number | Table Version
let rowId = "rowId_example"; // String | Row ID
let opts = { 
  'customHeaders': {  // Object.<string, string> | Request Custom Headers
    'X-Service-Name': 'customer-service',
    'X-Request-ID': 'req-12345'
  }
};

apiInstance.getBusinessrulesDecisiontableVersionRow(tableId, tableVersion, rowId, opts)
  .then((data) => {
    console.log(`getBusinessrulesDecisiontableVersionRow success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getBusinessrulesDecisiontableVersionRow');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **tableId** | **String** | Table ID |  |
 **tableVersion** | **Number** | Table Version |  |
 **rowId** | **String** | Row ID |  |
 **customHeaders** | **Object.<string, string>** | Request Custom Headers | [optional] |

### Return type

**DecisionTableRow**


## getBusinessrulesDecisiontableVersionRows

> DecisionTableRowListing getBusinessrulesDecisiontableVersionRows(tableId, tableVersion, opts)


GET /api/v2/businessrules/decisiontables/{tableId}/versions/{tableVersion}/rows

Get a list of decision table rows.

Requires ANY permissions:

* businessrules:decisionTableRow:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.BusinessRulesApi();

let tableId = "tableId_example"; // String | Table ID
let tableVersion = 3.4; // Number | Table Version
let opts = { 
  'pageNumber': "pageNumber_example", // String | Page number of the entities to return. Defaults to 1.
  'pageSize': "pageSize_example", // String | Number of entities to return. Maximum of 100. Defaults to 25.
  'customHeaders': {  // Object.<string, string> | Request Custom Headers
    'X-Service-Name': 'customer-service',
    'X-Request-ID': 'req-12345'
  }
};

apiInstance.getBusinessrulesDecisiontableVersionRows(tableId, tableVersion, opts)
  .then((data) => {
    console.log(`getBusinessrulesDecisiontableVersionRows success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getBusinessrulesDecisiontableVersionRows');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **tableId** | **String** | Table ID |  |
 **tableVersion** | **Number** | Table Version |  |
 **pageNumber** | **String** | Page number of the entities to return. Defaults to 1. | [optional]  |
 **pageSize** | **String** | Number of entities to return. Maximum of 100. Defaults to 25. | [optional]  |
 **customHeaders** | **Object.<string, string>** | Request Custom Headers | [optional] |

### Return type

**DecisionTableRowListing**


## getBusinessrulesDecisiontableVersions

> DecisionTableVersionListing getBusinessrulesDecisiontableVersions(tableId, opts)


GET /api/v2/businessrules/decisiontables/{tableId}/versions

Get a list of decision table versions

Requires ANY permissions:

* businessrules:decisionTable:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.BusinessRulesApi();

let tableId = "tableId_example"; // String | Table ID
let opts = { 
  'after': "after_example", // String | The cursor that points to the end of the set of entities that has been returned.
  'pageSize': "pageSize_example", // String | Number of entities to return. Maximum of 100.
  'status': ["status_example"], // [String] | Filter by version status. Repeatable.
  'hasSnapshot': true, // Boolean | When true, returns only versions that have snapshot metadata.
  'customHeaders': {  // Object.<string, string> | Request Custom Headers
    'X-Service-Name': 'customer-service',
    'X-Request-ID': 'req-12345'
  }
};

apiInstance.getBusinessrulesDecisiontableVersions(tableId, opts)
  .then((data) => {
    console.log(`getBusinessrulesDecisiontableVersions success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getBusinessrulesDecisiontableVersions');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **tableId** | **String** | Table ID |  |
 **after** | **String** | The cursor that points to the end of the set of entities that has been returned. | [optional]  |
 **pageSize** | **String** | Number of entities to return. Maximum of 100. | [optional]  |
 **status** | **[String]** | Filter by version status. Repeatable. | [optional] <br />**Values**: Draft, Published, Error, Preparing, Superseded |
 **hasSnapshot** | **Boolean** | When true, returns only versions that have snapshot metadata. | [optional]  |
 **customHeaders** | **Object.<string, string>** | Request Custom Headers | [optional] |

### Return type

**DecisionTableVersionListing**


## getBusinessrulesDecisiontables

> DecisionTableListing getBusinessrulesDecisiontables(opts)


GET /api/v2/businessrules/decisiontables

Get a list of decision tables.

Requires ANY permissions:

* businessrules:decisionTable:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.BusinessRulesApi();

let opts = { 
  'after': "after_example", // String | The cursor that points to the end of the set of entities that has been returned.
  'pageSize': "pageSize_example", // String | Number of entities to return. Maximum of 100.
  'divisionIds': ["divisionIds_example"], // [String] | One or more comma separated divisions to filters decision tables by. If nothing is provided, the decision tables associated with the list of divisions that the user has access to will be returned.
  'name': "name_example", // String | Search for decision tables with a name that contains the given search string. Search is case insensitive and will match any table that contains this string in any part of the name.
  'customHeaders': {  // Object.<string, string> | Request Custom Headers
    'X-Service-Name': 'customer-service',
    'X-Request-ID': 'req-12345'
  }
};

apiInstance.getBusinessrulesDecisiontables(opts)
  .then((data) => {
    console.log(`getBusinessrulesDecisiontables success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getBusinessrulesDecisiontables');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **after** | **String** | The cursor that points to the end of the set of entities that has been returned. | [optional]  |
 **pageSize** | **String** | Number of entities to return. Maximum of 100. | [optional]  |
 **divisionIds** | **[String]** | One or more comma separated divisions to filters decision tables by. If nothing is provided, the decision tables associated with the list of divisions that the user has access to will be returned. | [optional]  |
 **name** | **String** | Search for decision tables with a name that contains the given search string. Search is case insensitive and will match any table that contains this string in any part of the name. | [optional]  |
 **customHeaders** | **Object.<string, string>** | Request Custom Headers | [optional] |

### Return type

**DecisionTableListing**


## getBusinessrulesDecisiontablesSearch

> DecisionTableListing getBusinessrulesDecisiontablesSearch(opts)


GET /api/v2/businessrules/decisiontables/search

Search for decision tables.

Requires ANY permissions:

* businessrules:decisionTable:search

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.BusinessRulesApi();

let opts = { 
  'after': "after_example", // String | The cursor that points to the end of the set of entities that has been returned.
  'pageSize': "pageSize_example", // String | Number of entities to return. Maximum of 100.
  'schemaId': "schemaId_example", // String | Search for decision tables that use the schema with this ID. Cannot be combined with name search. Search results will not be paginated if used.
  'name': "name_example", // String | Search for decision tables with a name that contains the given search string. Search is case insensitive and will match any table that contains this string in any part of the name. Cannot be combined with schema search. Search results will not be paginated if used.
  'withPublishedVersion': true, // Boolean | Filters results to only decision tables that have at least one version in Published status
  'expand': ["expand_example"], // [String] | Fields to expand in response
  'ids': ["ids_example"], // [String] | Decision table IDs to search for
  'customHeaders': {  // Object.<string, string> | Request Custom Headers
    'X-Service-Name': 'customer-service',
    'X-Request-ID': 'req-12345'
  }
};

apiInstance.getBusinessrulesDecisiontablesSearch(opts)
  .then((data) => {
    console.log(`getBusinessrulesDecisiontablesSearch success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getBusinessrulesDecisiontablesSearch');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **after** | **String** | The cursor that points to the end of the set of entities that has been returned. | [optional]  |
 **pageSize** | **String** | Number of entities to return. Maximum of 100. | [optional]  |
 **schemaId** | **String** | Search for decision tables that use the schema with this ID. Cannot be combined with name search. Search results will not be paginated if used. | [optional]  |
 **name** | **String** | Search for decision tables with a name that contains the given search string. Search is case insensitive and will match any table that contains this string in any part of the name. Cannot be combined with schema search. Search results will not be paginated if used. | [optional]  |
 **withPublishedVersion** | **Boolean** | Filters results to only decision tables that have at least one version in Published status | [optional]  |
 **expand** | **[String]** | Fields to expand in response | [optional] <br />**Values**: ExecutionInputSchema, ExecutionOutputSchema |
 **ids** | **[String]** | Decision table IDs to search for | [optional]  |
 **customHeaders** | **Object.<string, string>** | Request Custom Headers | [optional] |

### Return type

**DecisionTableListing**


## getBusinessrulesSchema

> BusinessRulesDataSchema getBusinessrulesSchema(schemaId, opts)


GET /api/v2/businessrules/schemas/{schemaId}

Get a schema

Requires ANY permissions:

* businessrules:businessRulesSchema:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.BusinessRulesApi();

let schemaId = "schemaId_example"; // String | Schema ID
let opts = { 
  'customHeaders': {  // Object.<string, string> | Request Custom Headers
    'X-Service-Name': 'customer-service',
    'X-Request-ID': 'req-12345'
  }
};

apiInstance.getBusinessrulesSchema(schemaId, opts)
  .then((data) => {
    console.log(`getBusinessrulesSchema success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getBusinessrulesSchema');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **schemaId** | **String** | Schema ID |  |
 **customHeaders** | **Object.<string, string>** | Request Custom Headers | [optional] |

### Return type

**BusinessRulesDataSchema**


## getBusinessrulesSchemaVersion

> BusinessRulesDataSchema getBusinessrulesSchemaVersion(schemaId, schemaVersion, opts)


GET /api/v2/businessrules/schemas/{schemaId}/versions/{schemaVersion}

Get a schema version

Requires ANY permissions:

* businessrules:businessRulesSchema:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.BusinessRulesApi();

let schemaId = "schemaId_example"; // String | Schema ID
let schemaVersion = "schemaVersion_example"; // String | Schema version number
let opts = { 
  'customHeaders': {  // Object.<string, string> | Request Custom Headers
    'X-Service-Name': 'customer-service',
    'X-Request-ID': 'req-12345'
  }
};

apiInstance.getBusinessrulesSchemaVersion(schemaId, schemaVersion, opts)
  .then((data) => {
    console.log(`getBusinessrulesSchemaVersion success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getBusinessrulesSchemaVersion');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **schemaId** | **String** | Schema ID |  |
 **schemaVersion** | **String** | Schema version number |  |
 **customHeaders** | **Object.<string, string>** | Request Custom Headers | [optional] |

### Return type

**BusinessRulesDataSchema**


## getBusinessrulesSchemaVersions

> BusinessRulesDataSchemaListing getBusinessrulesSchemaVersions(schemaId, opts)


GET /api/v2/businessrules/schemas/{schemaId}/versions

List schema versions

Requires ANY permissions:

* businessrules:businessRulesSchema:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.BusinessRulesApi();

let schemaId = "schemaId_example"; // String | Schema ID
let opts = { 
  'before': "before_example", // String | The cursor that points to the start of the set of entities that has been returned.
  'after': "after_example", // String | The cursor that points to the end of the set of entities that has been returned.
  'pageSize': "pageSize_example", // String | Number of items per page (must be between 1 and 100)
  'customHeaders': {  // Object.<string, string> | Request Custom Headers
    'X-Service-Name': 'customer-service',
    'X-Request-ID': 'req-12345'
  }
};

apiInstance.getBusinessrulesSchemaVersions(schemaId, opts)
  .then((data) => {
    console.log(`getBusinessrulesSchemaVersions success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getBusinessrulesSchemaVersions');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **schemaId** | **String** | Schema ID |  |
 **before** | **String** | The cursor that points to the start of the set of entities that has been returned. | [optional]  |
 **after** | **String** | The cursor that points to the end of the set of entities that has been returned. | [optional]  |
 **pageSize** | **String** | Number of items per page (must be between 1 and 100) | [optional]  |
 **customHeaders** | **Object.<string, string>** | Request Custom Headers | [optional] |

### Return type

**BusinessRulesDataSchemaListing**


## getBusinessrulesSchemas

> BusinessRulesDataSchemaListing getBusinessrulesSchemas(opts)


GET /api/v2/businessrules/schemas

Get a list of schemas.

Requires ANY permissions:

* businessrules:businessRulesSchema:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.BusinessRulesApi();
let opts = { 
  'customHeaders': {  // Object.<string, string> | Request Custom Headers
    'X-Service-Name': 'customer-service',
    'X-Request-ID': 'req-12345'
  }
};

apiInstance.getBusinessrulesSchemas(opts)
  .then((data) => {
    console.log(`getBusinessrulesSchemas success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getBusinessrulesSchemas');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **customHeaders** | **Object.<string, string>** | Request Custom Headers | [optional] |

### Return type

**BusinessRulesDataSchemaListing**


## getBusinessrulesSchemasCoretype

> Coretype getBusinessrulesSchemasCoretype(coreTypeName, opts)


GET /api/v2/businessrules/schemas/coretypes/{coreTypeName}

Get a specific named core type.

Requires ANY permissions:

* businessrules:businessRulesSchema:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.BusinessRulesApi();

let coreTypeName = "coreTypeName_example"; // String | The core type's name
let opts = { 
  'customHeaders': {  // Object.<string, string> | Request Custom Headers
    'X-Service-Name': 'customer-service',
    'X-Request-ID': 'req-12345'
  }
};

apiInstance.getBusinessrulesSchemasCoretype(coreTypeName, opts)
  .then((data) => {
    console.log(`getBusinessrulesSchemasCoretype success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getBusinessrulesSchemasCoretype');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **coreTypeName** | **String** | The core type's name |  |
 **customHeaders** | **Object.<string, string>** | Request Custom Headers | [optional] |

### Return type

**Coretype**


## getBusinessrulesSchemasCoretypes

> CoretypeListing getBusinessrulesSchemasCoretypes(opts)


GET /api/v2/businessrules/schemas/coretypes

Get the core types from which all schemas are built.

Requires ANY permissions:

* businessrules:businessRulesSchema:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.BusinessRulesApi();
let opts = { 
  'customHeaders': {  // Object.<string, string> | Request Custom Headers
    'X-Service-Name': 'customer-service',
    'X-Request-ID': 'req-12345'
  }
};

apiInstance.getBusinessrulesSchemasCoretypes(opts)
  .then((data) => {
    console.log(`getBusinessrulesSchemasCoretypes success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getBusinessrulesSchemasCoretypes');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **customHeaders** | **Object.<string, string>** | Request Custom Headers | [optional] |

### Return type

**CoretypeListing**


## patchBusinessrulesDecisiontable

> DecisionTable patchBusinessrulesDecisiontable(tableId, body, opts)


PATCH /api/v2/businessrules/decisiontables/{tableId}

Update a decision table

Required permissions depend on table content: if the table or row contains queue references, routing:queue:view is required in each queues division. Future platform objects will require their associated permissions in the relevant divisions when the table or row contains references to them.

Requires ALL permissions:

* businessrules:decisionTable:edit
* businessrules:businessRulesSchema:view
* routing:queue:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.BusinessRulesApi();

let tableId = "tableId_example"; // String | Table ID
let body = {}; // Object | Decision Table
let opts = { 
  'customHeaders': {  // Object.<string, string> | Request Custom Headers
    'X-Service-Name': 'customer-service',
    'X-Request-ID': 'req-12345'
  }
};

apiInstance.patchBusinessrulesDecisiontable(tableId, body, opts)
  .then((data) => {
    console.log(`patchBusinessrulesDecisiontable success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling patchBusinessrulesDecisiontable');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **tableId** | **String** | Table ID |  |
 **body** | **Object** | Decision Table |  |
 **customHeaders** | **Object.<string, string>** | Request Custom Headers | [optional] |

### Return type

**DecisionTable**


## patchBusinessrulesDecisiontableImport

> DecisionTableImportJob patchBusinessrulesDecisiontableImport(tableId, importJobId, body, opts)


PATCH /api/v2/businessrules/decisiontables/{tableId}/imports/{importJobId}

Update decision table row import job

Cancels an in-progress import job by supplying a status of Cancelled. Cancellation is idempotent: cancelling a job that is already Cancelled returns 200 with the cancelled job. Cancelling a job that is still Uploading or Processing returns 200. A job that has already finished (Complete or Failed) can no longer be cancelled.

Requires ANY permissions:

* businessrules:decisionTableImportJob:edit

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.BusinessRulesApi();

let tableId = "tableId_example"; // String | Table ID
let importJobId = "importJobId_example"; // String | Import job ID
let body = {}; // Object | Import job update request
let opts = { 
  'customHeaders': {  // Object.<string, string> | Request Custom Headers
    'X-Service-Name': 'customer-service',
    'X-Request-ID': 'req-12345'
  }
};

apiInstance.patchBusinessrulesDecisiontableImport(tableId, importJobId, body, opts)
  .then((data) => {
    console.log(`patchBusinessrulesDecisiontableImport success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling patchBusinessrulesDecisiontableImport');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **tableId** | **String** | Table ID |  |
 **importJobId** | **String** | Import job ID |  |
 **body** | **Object** | Import job update request |  |
 **customHeaders** | **Object.<string, string>** | Request Custom Headers | [optional] |

### Return type

**DecisionTableImportJob**


## patchBusinessrulesDecisiontableVersion

> DecisionTableVersion patchBusinessrulesDecisiontableVersion(tableId, tableVersion, body, opts)


PATCH /api/v2/businessrules/decisiontables/{tableId}/versions/{tableVersion}

Update a decision table version

Requires ANY permissions:

* businessrules:decisionTable:edit

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.BusinessRulesApi();

let tableId = "tableId_example"; // String | Table ID
let tableVersion = 3.4; // Number | Table Version
let body = {}; // Object | Decision Table
let opts = { 
  'customHeaders': {  // Object.<string, string> | Request Custom Headers
    'X-Service-Name': 'customer-service',
    'X-Request-ID': 'req-12345'
  }
};

apiInstance.patchBusinessrulesDecisiontableVersion(tableId, tableVersion, body, opts)
  .then((data) => {
    console.log(`patchBusinessrulesDecisiontableVersion success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling patchBusinessrulesDecisiontableVersion');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **tableId** | **String** | Table ID |  |
 **tableVersion** | **Number** | Table Version |  |
 **body** | **Object** | Decision Table |  |
 **customHeaders** | **Object.<string, string>** | Request Custom Headers | [optional] |

### Return type

**DecisionTableVersion**


## postBusinessrulesDecisiontableExecute

> DecisionTableExecutionResponse postBusinessrulesDecisiontableExecute(tableId, body, opts)


POST /api/v2/businessrules/decisiontables/{tableId}/execute

Execute a published decision table

Example request payload: {"inputs":{"schemaPropertykey1":"inputValue1","schemaPropertykey2":"inputValue2"}}

Requires ANY permissions:

* businessrules:decisionTable:execute

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.BusinessRulesApi();

let tableId = "tableId_example"; // String | Table ID
let body = {}; // Object | Decision Table
let opts = { 
  'customHeaders': {  // Object.<string, string> | Request Custom Headers
    'X-Service-Name': 'customer-service',
    'X-Request-ID': 'req-12345'
  }
};

apiInstance.postBusinessrulesDecisiontableExecute(tableId, body, opts)
  .then((data) => {
    console.log(`postBusinessrulesDecisiontableExecute success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling postBusinessrulesDecisiontableExecute');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **tableId** | **String** | Table ID |  |
 **body** | **Object** | Decision Table |  |
 **customHeaders** | **Object.<string, string>** | Request Custom Headers | [optional] |

### Return type

**DecisionTableExecutionResponse**


## postBusinessrulesDecisiontableExports

> DecisionTableExportJob postBusinessrulesDecisiontableExports(tableId, body, opts)


POST /api/v2/businessrules/decisiontables/{tableId}/exports

Create an export job for a decision table version

Requires ANY permissions:

* businessrules:decisionTableExportJob:add

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.BusinessRulesApi();

let tableId = "tableId_example"; // String | Table ID
let body = {}; // Object | Export job request
let opts = { 
  'customHeaders': {  // Object.<string, string> | Request Custom Headers
    'X-Service-Name': 'customer-service',
    'X-Request-ID': 'req-12345'
  }
};

apiInstance.postBusinessrulesDecisiontableExports(tableId, body, opts)
  .then((data) => {
    console.log(`postBusinessrulesDecisiontableExports success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling postBusinessrulesDecisiontableExports');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **tableId** | **String** | Table ID |  |
 **body** | **Object** | Export job request |  |
 **customHeaders** | **Object.<string, string>** | Request Custom Headers | [optional] |

### Return type

**DecisionTableExportJob**


## postBusinessrulesDecisiontableImports

> DecisionTableImportJob postBusinessrulesDecisiontableImports(tableId, body, opts)


POST /api/v2/businessrules/decisiontables/{tableId}/imports

Create a decision table row import job

Requires ANY permissions:

* businessrules:decisionTableImportJob:add

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.BusinessRulesApi();

let tableId = "tableId_example"; // String | Table ID
let body = {}; // Object | Import job create request
let opts = { 
  'customHeaders': {  // Object.<string, string> | Request Custom Headers
    'X-Service-Name': 'customer-service',
    'X-Request-ID': 'req-12345'
  }
};

apiInstance.postBusinessrulesDecisiontableImports(tableId, body, opts)
  .then((data) => {
    console.log(`postBusinessrulesDecisiontableImports success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling postBusinessrulesDecisiontableImports');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **tableId** | **String** | Table ID |  |
 **body** | **Object** | Import job create request |  |
 **customHeaders** | **Object.<string, string>** | Request Custom Headers | [optional] |

### Return type

**DecisionTableImportJob**


## postBusinessrulesDecisiontableVersionCopy

> DecisionTableVersion postBusinessrulesDecisiontableVersionCopy(tableId, tableVersion, body, opts)


POST /api/v2/businessrules/decisiontables/{tableId}/versions/{tableVersion}/copy

Copy a decision table version

Requires ANY permissions:

* businessrules:decisionTable:copy

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.BusinessRulesApi();

let tableId = "tableId_example"; // String | Table ID
let tableVersion = 3.4; // Number | Table Version
let body = {}; // Object | Decision Table
let opts = { 
  'customHeaders': {  // Object.<string, string> | Request Custom Headers
    'X-Service-Name': 'customer-service',
    'X-Request-ID': 'req-12345'
  }
};

apiInstance.postBusinessrulesDecisiontableVersionCopy(tableId, tableVersion, body, opts)
  .then((data) => {
    console.log(`postBusinessrulesDecisiontableVersionCopy success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling postBusinessrulesDecisiontableVersionCopy');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **tableId** | **String** | Table ID |  |
 **tableVersion** | **Number** | Table Version |  |
 **body** | **Object** | Decision Table |  |
 **customHeaders** | **Object.<string, string>** | Request Custom Headers | [optional] |

### Return type

**DecisionTableVersion**


## postBusinessrulesDecisiontableVersionExecute

> DecisionTableExecutionResponse postBusinessrulesDecisiontableVersionExecute(tableId, tableVersion, body, opts)


POST /api/v2/businessrules/decisiontables/{tableId}/versions/{tableVersion}/execute

Execute a decision table version

Example request payload: {"inputs":{"schemaPropertykey1":"inputValue1","schemaPropertykey2":"inputValue2"}}

Requires ANY permissions:

* businessrules:decisionTable:execute

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.BusinessRulesApi();

let tableId = "tableId_example"; // String | Table ID
let tableVersion = 3.4; // Number | Table Version
let body = {}; // Object | Decision Table
let opts = { 
  'customHeaders': {  // Object.<string, string> | Request Custom Headers
    'X-Service-Name': 'customer-service',
    'X-Request-ID': 'req-12345'
  }
};

apiInstance.postBusinessrulesDecisiontableVersionExecute(tableId, tableVersion, body, opts)
  .then((data) => {
    console.log(`postBusinessrulesDecisiontableVersionExecute success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling postBusinessrulesDecisiontableVersionExecute');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **tableId** | **String** | Table ID |  |
 **tableVersion** | **Number** | Table Version |  |
 **body** | **Object** | Decision Table |  |
 **customHeaders** | **Object.<string, string>** | Request Custom Headers | [optional] |

### Return type

**DecisionTableExecutionResponse**


## postBusinessrulesDecisiontableVersionRollback

> DecisionTableVersion postBusinessrulesDecisiontableVersionRollback(tableId, tableVersion, opts)


POST /api/v2/businessrules/decisiontables/{tableId}/versions/{tableVersion}/rollback

Re-publish a superseded decision table version as the current published version

Requires ANY permissions:

* businessrules:decisionTable:rollback

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.BusinessRulesApi();

let tableId = "tableId_example"; // String | Table ID
let tableVersion = 3.4; // Number | Table Version
let opts = { 
  'body': {}, // Object | Rollback request
  'customHeaders': {  // Object.<string, string> | Request Custom Headers
    'X-Service-Name': 'customer-service',
    'X-Request-ID': 'req-12345'
  }
};

apiInstance.postBusinessrulesDecisiontableVersionRollback(tableId, tableVersion, opts)
  .then((data) => {
    console.log(`postBusinessrulesDecisiontableVersionRollback success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling postBusinessrulesDecisiontableVersionRollback');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **tableId** | **String** | Table ID |  |
 **tableVersion** | **Number** | Table Version |  |
 **body** | **Object** | Rollback request | [optional]  |
 **customHeaders** | **Object.<string, string>** | Request Custom Headers | [optional] |

### Return type

**DecisionTableVersion**


## postBusinessrulesDecisiontableVersionRows

> DecisionTableRow postBusinessrulesDecisiontableVersionRows(tableId, tableVersion, body, opts)


POST /api/v2/businessrules/decisiontables/{tableId}/versions/{tableVersion}/rows

Create a decision table row

Required permissions depend on table content: if the table or row contains queue references, routing:queue:view is required in each queues division. Future platform objects will require their associated permissions in the relevant divisions when the table or row contains references to them.

Requires ALL permissions:

* businessrules:decisionTableRow:add
* routing:queue:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.BusinessRulesApi();

let tableId = "tableId_example"; // String | Table ID
let tableVersion = 3.4; // Number | Table Version
let body = {}; // Object | Create decision table row request
let opts = { 
  'customHeaders': {  // Object.<string, string> | Request Custom Headers
    'X-Service-Name': 'customer-service',
    'X-Request-ID': 'req-12345'
  }
};

apiInstance.postBusinessrulesDecisiontableVersionRows(tableId, tableVersion, body, opts)
  .then((data) => {
    console.log(`postBusinessrulesDecisiontableVersionRows success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling postBusinessrulesDecisiontableVersionRows');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **tableId** | **String** | Table ID |  |
 **tableVersion** | **Number** | Table Version |  |
 **body** | **Object** | Create decision table row request |  |
 **customHeaders** | **Object.<string, string>** | Request Custom Headers | [optional] |

### Return type

**DecisionTableRow**


## postBusinessrulesDecisiontableVersionRowsBulkAdd

> BulkAddDecisionTableRowsResponse postBusinessrulesDecisiontableVersionRowsBulkAdd(tableId, tableVersion, body, opts)


POST /api/v2/businessrules/decisiontables/{tableId}/versions/{tableVersion}/rows/bulk/add

Bulk add decision table rows

Required permissions depend on table content: if the table or row contains queue references, routing:queue:view is required in each queues division. Future platform objects will require their associated permissions in the relevant divisions when the table or row contains references to them.

Requires ALL permissions:

* businessrules:decisionTableRow:add
* routing:queue:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.BusinessRulesApi();

let tableId = "tableId_example"; // String | Table ID
let tableVersion = 3.4; // Number | Table Version
let body = {}; // Object | Bulk add decision table rows request
let opts = { 
  'customHeaders': {  // Object.<string, string> | Request Custom Headers
    'X-Service-Name': 'customer-service',
    'X-Request-ID': 'req-12345'
  }
};

apiInstance.postBusinessrulesDecisiontableVersionRowsBulkAdd(tableId, tableVersion, body, opts)
  .then((data) => {
    console.log(`postBusinessrulesDecisiontableVersionRowsBulkAdd success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling postBusinessrulesDecisiontableVersionRowsBulkAdd');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **tableId** | **String** | Table ID |  |
 **tableVersion** | **Number** | Table Version |  |
 **body** | **Object** | Bulk add decision table rows request |  |
 **customHeaders** | **Object.<string, string>** | Request Custom Headers | [optional] |

### Return type

**BulkAddDecisionTableRowsResponse**


## postBusinessrulesDecisiontableVersionRowsBulkRemove

> void postBusinessrulesDecisiontableVersionRowsBulkRemove(tableId, tableVersion, body, opts)


POST /api/v2/businessrules/decisiontables/{tableId}/versions/{tableVersion}/rows/bulk/remove

Bulk delete decision table rows

Required permissions depend on table content: if the table or row contains queue references, routing:queue:view is required in each queues division. Future platform objects will require their associated permissions in the relevant divisions when the table or row contains references to them.

Requires ALL permissions:

* businessrules:decisionTableRow:delete
* routing:queue:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.BusinessRulesApi();

let tableId = "tableId_example"; // String | Table ID
let tableVersion = 3.4; // Number | Table Version
let body = {}; // Object | 
let opts = { 
  'customHeaders': {  // Object.<string, string> | Request Custom Headers
    'X-Service-Name': 'customer-service',
    'X-Request-ID': 'req-12345'
  }
};

apiInstance.postBusinessrulesDecisiontableVersionRowsBulkRemove(tableId, tableVersion, body, opts)
  .then(() => {
    console.log('postBusinessrulesDecisiontableVersionRowsBulkRemove returned successfully.');
  })
  .catch((err) => {
    console.log('There was a failure calling postBusinessrulesDecisiontableVersionRowsBulkRemove');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **tableId** | **String** | Table ID |  |
 **tableVersion** | **Number** | Table Version |  |
 **body** | **Object** |  |  |
 **customHeaders** | **Object.<string, string>** | Request Custom Headers | [optional] |

### Return type

void (no response body)


## postBusinessrulesDecisiontableVersionRowsBulkUpdate

> BulkUpdateDecisionTableRowsResponse postBusinessrulesDecisiontableVersionRowsBulkUpdate(tableId, tableVersion, body, opts)


POST /api/v2/businessrules/decisiontables/{tableId}/versions/{tableVersion}/rows/bulk/update

Bulk update decision table rows

Required permissions depend on table content: if the table or row contains queue references, routing:queue:view is required in each queues division. Future platform objects will require their associated permissions in the relevant divisions when the table or row contains references to them.

Requires ALL permissions:

* businessrules:decisionTableRow:edit
* routing:queue:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.BusinessRulesApi();

let tableId = "tableId_example"; // String | Table ID
let tableVersion = 3.4; // Number | Table Version
let body = {}; // Object | Bulk update decision table rows request
let opts = { 
  'customHeaders': {  // Object.<string, string> | Request Custom Headers
    'X-Service-Name': 'customer-service',
    'X-Request-ID': 'req-12345'
  }
};

apiInstance.postBusinessrulesDecisiontableVersionRowsBulkUpdate(tableId, tableVersion, body, opts)
  .then((data) => {
    console.log(`postBusinessrulesDecisiontableVersionRowsBulkUpdate success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling postBusinessrulesDecisiontableVersionRowsBulkUpdate');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **tableId** | **String** | Table ID |  |
 **tableVersion** | **Number** | Table Version |  |
 **body** | **Object** | Bulk update decision table rows request |  |
 **customHeaders** | **Object.<string, string>** | Request Custom Headers | [optional] |

### Return type

**BulkUpdateDecisionTableRowsResponse**


## postBusinessrulesDecisiontableVersionRowsSearch

> DecisionTableRowListing postBusinessrulesDecisiontableVersionRowsSearch(tableId, tableVersion, body, opts)


POST /api/v2/businessrules/decisiontables/{tableId}/versions/{tableVersion}/rows/search

Search for decision table rows

Requires ANY permissions:

* businessrules:decisionTableRow:search

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.BusinessRulesApi();

let tableId = "tableId_example"; // String | Table ID
let tableVersion = 3.4; // Number | Table Version
let body = {}; // Object | Search decision table rows request
let opts = { 
  'pageNumber': "pageNumber_example", // String | Page number of the entities to return. Defaults to 1.
  'pageSize': "pageSize_example", // String | Number of entities to return. Maximum of 100. Defaults to 25.
  'customHeaders': {  // Object.<string, string> | Request Custom Headers
    'X-Service-Name': 'customer-service',
    'X-Request-ID': 'req-12345'
  }
};

apiInstance.postBusinessrulesDecisiontableVersionRowsSearch(tableId, tableVersion, body, opts)
  .then((data) => {
    console.log(`postBusinessrulesDecisiontableVersionRowsSearch success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling postBusinessrulesDecisiontableVersionRowsSearch');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **tableId** | **String** | Table ID |  |
 **tableVersion** | **Number** | Table Version |  |
 **body** | **Object** | Search decision table rows request |  |
 **pageNumber** | **String** | Page number of the entities to return. Defaults to 1. | [optional]  |
 **pageSize** | **String** | Number of entities to return. Maximum of 100. Defaults to 25. | [optional]  |
 **customHeaders** | **Object.<string, string>** | Request Custom Headers | [optional] |

### Return type

**DecisionTableRowListing**


## postBusinessrulesDecisiontableVersionSnapshot

> DecisionTableVersion postBusinessrulesDecisiontableVersionSnapshot(tableId, tableVersion, body, opts)


POST /api/v2/businessrules/decisiontables/{tableId}/versions/{tableVersion}/snapshot

Creates a decision table version snapshot

Requires ANY permissions:

* businessrules:decisionTableSnapshot:add

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.BusinessRulesApi();

let tableId = "tableId_example"; // String | Table ID
let tableVersion = 3.4; // Number | Table Version
let body = {}; // Object | Snapshot request
let opts = { 
  'customHeaders': {  // Object.<string, string> | Request Custom Headers
    'X-Service-Name': 'customer-service',
    'X-Request-ID': 'req-12345'
  }
};

apiInstance.postBusinessrulesDecisiontableVersionSnapshot(tableId, tableVersion, body, opts)
  .then((data) => {
    console.log(`postBusinessrulesDecisiontableVersionSnapshot success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling postBusinessrulesDecisiontableVersionSnapshot');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **tableId** | **String** | Table ID |  |
 **tableVersion** | **Number** | Table Version |  |
 **body** | **Object** | Snapshot request |  |
 **customHeaders** | **Object.<string, string>** | Request Custom Headers | [optional] |

### Return type

**DecisionTableVersion**


## postBusinessrulesDecisiontableVersionSync

> DecisionTableVersion postBusinessrulesDecisiontableVersionSync(tableId, tableVersion, opts)


POST /api/v2/businessrules/decisiontables/{tableId}/versions/{tableVersion}/sync

Update the Business Rules Schema to the latest version for a given decision table version

Requires ANY permissions:

* businessrules:decisionTable:edit

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.BusinessRulesApi();

let tableId = "tableId_example"; // String | Table ID
let tableVersion = 3.4; // Number | Table Version
let opts = { 
  'customHeaders': {  // Object.<string, string> | Request Custom Headers
    'X-Service-Name': 'customer-service',
    'X-Request-ID': 'req-12345'
  }
};

apiInstance.postBusinessrulesDecisiontableVersionSync(tableId, tableVersion, opts)
  .then((data) => {
    console.log(`postBusinessrulesDecisiontableVersionSync success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling postBusinessrulesDecisiontableVersionSync');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **tableId** | **String** | Table ID |  |
 **tableVersion** | **Number** | Table Version |  |
 **customHeaders** | **Object.<string, string>** | Request Custom Headers | [optional] |

### Return type

**DecisionTableVersion**


## postBusinessrulesDecisiontableVersions

> DecisionTableVersion postBusinessrulesDecisiontableVersions(tableId, opts)


POST /api/v2/businessrules/decisiontables/{tableId}/versions

Create a new decision table version. When sourceVersion is not provided, the draft is created from the published version.

Requires ANY permissions:

* businessrules:decisionTable:add

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.BusinessRulesApi();

let tableId = "tableId_example"; // String | Table ID
let opts = { 
  'body': {}, // Object | Decision Table Version
  'customHeaders': {  // Object.<string, string> | Request Custom Headers
    'X-Service-Name': 'customer-service',
    'X-Request-ID': 'req-12345'
  }
};

apiInstance.postBusinessrulesDecisiontableVersions(tableId, opts)
  .then((data) => {
    console.log(`postBusinessrulesDecisiontableVersions success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling postBusinessrulesDecisiontableVersions');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **tableId** | **String** | Table ID |  |
 **body** | **Object** | Decision Table Version | [optional]  |
 **customHeaders** | **Object.<string, string>** | Request Custom Headers | [optional] |

### Return type

**DecisionTableVersion**


## postBusinessrulesDecisiontables

> DecisionTableVersion postBusinessrulesDecisiontables(body, opts)


POST /api/v2/businessrules/decisiontables

Create a decision table

Required permissions depend on table content: if the table or row contains queue references, routing:queue:view is required in each queues division. Future platform objects will require their associated permissions in the relevant divisions when the table or row contains references to them.

Requires ALL permissions:

* businessrules:decisionTable:add
* businessrules:businessRulesSchema:view
* routing:queue:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.BusinessRulesApi();

let body = {}; // Object | Decision Table
let opts = { 
  'customHeaders': {  // Object.<string, string> | Request Custom Headers
    'X-Service-Name': 'customer-service',
    'X-Request-ID': 'req-12345'
  }
};

apiInstance.postBusinessrulesDecisiontables(body, opts)
  .then((data) => {
    console.log(`postBusinessrulesDecisiontables success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling postBusinessrulesDecisiontables');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **body** | **Object** | Decision Table |  |
 **customHeaders** | **Object.<string, string>** | Request Custom Headers | [optional] |

### Return type

**DecisionTableVersion**


## postBusinessrulesSchemas

> BusinessRulesDataSchema postBusinessrulesSchemas(body, opts)


POST /api/v2/businessrules/schemas

Create a schema

Requires ANY permissions:

* businessrules:businessRulesSchema:add

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.BusinessRulesApi();

let body = {}; // Object | Business Rules Schema Create Request
let opts = { 
  'customHeaders': {  // Object.<string, string> | Request Custom Headers
    'X-Service-Name': 'customer-service',
    'X-Request-ID': 'req-12345'
  }
};

apiInstance.postBusinessrulesSchemas(body, opts)
  .then((data) => {
    console.log(`postBusinessrulesSchemas success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling postBusinessrulesSchemas');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **body** | **Object** | Business Rules Schema Create Request |  |
 **customHeaders** | **Object.<string, string>** | Request Custom Headers | [optional] |

### Return type

**BusinessRulesDataSchema**


## putBusinessrulesDecisiontableVersionPublish

> DecisionTableVersion putBusinessrulesDecisiontableVersionPublish(tableId, tableVersion, opts)


PUT /api/v2/businessrules/decisiontables/{tableId}/versions/{tableVersion}/publish

Publish a decision table version

Requires ANY permissions:

* businessrules:decisionTable:publish

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.BusinessRulesApi();

let tableId = "tableId_example"; // String | Table ID
let tableVersion = 3.4; // Number | Table Version
let opts = { 
  'customHeaders': {  // Object.<string, string> | Request Custom Headers
    'X-Service-Name': 'customer-service',
    'X-Request-ID': 'req-12345'
  }
};

apiInstance.putBusinessrulesDecisiontableVersionPublish(tableId, tableVersion, opts)
  .then((data) => {
    console.log(`putBusinessrulesDecisiontableVersionPublish success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling putBusinessrulesDecisiontableVersionPublish');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **tableId** | **String** | Table ID |  |
 **tableVersion** | **Number** | Table Version |  |
 **customHeaders** | **Object.<string, string>** | Request Custom Headers | [optional] |

### Return type

**DecisionTableVersion**


## putBusinessrulesDecisiontableVersionRow

> DecisionTableRow putBusinessrulesDecisiontableVersionRow(tableId, tableVersion, rowId, body, opts)


PUT /api/v2/businessrules/decisiontables/{tableId}/versions/{tableVersion}/rows/{rowId}

Full update a decision table row

Required permissions depend on table content: if the table or row contains queue references, routing:queue:view is required in each queues division. Future platform objects will require their associated permissions in the relevant divisions when the table or row contains references to them.

Requires ALL permissions:

* businessrules:decisionTableRow:edit
* routing:queue:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.BusinessRulesApi();

let tableId = "tableId_example"; // String | Table ID
let tableVersion = 3.4; // Number | Table Version
let rowId = "rowId_example"; // String | Row ID
let body = {}; // Object | Full update decision table row request
let opts = { 
  'customHeaders': {  // Object.<string, string> | Request Custom Headers
    'X-Service-Name': 'customer-service',
    'X-Request-ID': 'req-12345'
  }
};

apiInstance.putBusinessrulesDecisiontableVersionRow(tableId, tableVersion, rowId, body, opts)
  .then((data) => {
    console.log(`putBusinessrulesDecisiontableVersionRow success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling putBusinessrulesDecisiontableVersionRow');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **tableId** | **String** | Table ID |  |
 **tableVersion** | **Number** | Table Version |  |
 **rowId** | **String** | Row ID |  |
 **body** | **Object** | Full update decision table row request |  |
 **customHeaders** | **Object.<string, string>** | Request Custom Headers | [optional] |

### Return type

**DecisionTableRow**


## putBusinessrulesSchema

> BusinessRulesDataSchema putBusinessrulesSchema(schemaId, body, opts)


PUT /api/v2/businessrules/schemas/{schemaId}

Update a schema

Requires ANY permissions:

* businessrules:businessRulesSchema:edit

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.BusinessRulesApi();

let schemaId = "schemaId_example"; // String | Schema ID
let body = {}; // Object | Business Rules Schema Update Request
let opts = { 
  'customHeaders': {  // Object.<string, string> | Request Custom Headers
    'X-Service-Name': 'customer-service',
    'X-Request-ID': 'req-12345'
  }
};

apiInstance.putBusinessrulesSchema(schemaId, body, opts)
  .then((data) => {
    console.log(`putBusinessrulesSchema success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling putBusinessrulesSchema');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **schemaId** | **String** | Schema ID |  |
 **body** | **Object** | Business Rules Schema Update Request |  |
 **customHeaders** | **Object.<string, string>** | Request Custom Headers | [optional] |

### Return type

**BusinessRulesDataSchema**


_purecloud-platform-client-v2@261.0.0_
