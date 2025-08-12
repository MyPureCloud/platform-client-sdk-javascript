# BusinessRulesApi

# platformClient.BusinessRulesApi

All URIs are relative to *https://api.mypurecloud.com*

| Method | HTTP request | Description |
| ------------- | ------------- | ------------- |
[**deleteBusinessrulesDecisiontable**](BusinessRulesApi#deleteBusinessrulesDecisiontable) | **DELETE** /api/v2/businessrules/decisiontables/{tableId} | Delete a decision table
[**deleteBusinessrulesDecisiontableVersion**](BusinessRulesApi#deleteBusinessrulesDecisiontableVersion) | **DELETE** /api/v2/businessrules/decisiontables/{tableId}/versions/{tableVersion} | Delete a decision table version
[**deleteBusinessrulesDecisiontableVersionRow**](BusinessRulesApi#deleteBusinessrulesDecisiontableVersionRow) | **DELETE** /api/v2/businessrules/decisiontables/{tableId}/versions/{tableVersion}/rows/{rowId} | Delete a decision table row
[**deleteBusinessrulesSchema**](BusinessRulesApi#deleteBusinessrulesSchema) | **DELETE** /api/v2/businessrules/schemas/{schemaId} | Delete a schema
[**getBusinessrulesDecisiontable**](BusinessRulesApi#getBusinessrulesDecisiontable) | **GET** /api/v2/businessrules/decisiontables/{tableId} | Get a decision table
[**getBusinessrulesDecisiontableVersion**](BusinessRulesApi#getBusinessrulesDecisiontableVersion) | **GET** /api/v2/businessrules/decisiontables/{tableId}/versions/{tableVersion} | Get a decision table version
[**getBusinessrulesDecisiontableVersionRow**](BusinessRulesApi#getBusinessrulesDecisiontableVersionRow) | **GET** /api/v2/businessrules/decisiontables/{tableId}/versions/{tableVersion}/rows/{rowId} | Get a decision table row
[**getBusinessrulesDecisiontableVersionRows**](BusinessRulesApi#getBusinessrulesDecisiontableVersionRows) | **GET** /api/v2/businessrules/decisiontables/{tableId}/versions/{tableVersion}/rows | Get a list of decision table rows.
[**getBusinessrulesDecisiontableVersions**](BusinessRulesApi#getBusinessrulesDecisiontableVersions) | **GET** /api/v2/businessrules/decisiontables/{tableId}/versions | Get a list of decision table versions
[**getBusinessrulesDecisiontables**](BusinessRulesApi#getBusinessrulesDecisiontables) | **GET** /api/v2/businessrules/decisiontables | Get a list of decision tables.
[**getBusinessrulesDecisiontablesSearch**](BusinessRulesApi#getBusinessrulesDecisiontablesSearch) | **GET** /api/v2/businessrules/decisiontables/search | Search for decision tables.
[**getBusinessrulesSchema**](BusinessRulesApi#getBusinessrulesSchema) | **GET** /api/v2/businessrules/schemas/{schemaId} | Get a schema
[**getBusinessrulesSchemas**](BusinessRulesApi#getBusinessrulesSchemas) | **GET** /api/v2/businessrules/schemas | Get a list of schemas.
[**getBusinessrulesSchemasCoretype**](BusinessRulesApi#getBusinessrulesSchemasCoretype) | **GET** /api/v2/businessrules/schemas/coretypes/{coreTypeName} | Get a specific named core type.
[**getBusinessrulesSchemasCoretypes**](BusinessRulesApi#getBusinessrulesSchemasCoretypes) | **GET** /api/v2/businessrules/schemas/coretypes | Get the core types from which all schemas are built.
[**patchBusinessrulesDecisiontable**](BusinessRulesApi#patchBusinessrulesDecisiontable) | **PATCH** /api/v2/businessrules/decisiontables/{tableId} | Update a decision table
[**patchBusinessrulesDecisiontableVersion**](BusinessRulesApi#patchBusinessrulesDecisiontableVersion) | **PATCH** /api/v2/businessrules/decisiontables/{tableId}/versions/{tableVersion} | Update a decision table version
[**postBusinessrulesDecisiontableExecute**](BusinessRulesApi#postBusinessrulesDecisiontableExecute) | **POST** /api/v2/businessrules/decisiontables/{tableId}/execute | Execute a published decision table
[**postBusinessrulesDecisiontableVersionCopy**](BusinessRulesApi#postBusinessrulesDecisiontableVersionCopy) | **POST** /api/v2/businessrules/decisiontables/{tableId}/versions/{tableVersion}/copy | Copy a decision table version
[**postBusinessrulesDecisiontableVersionExecute**](BusinessRulesApi#postBusinessrulesDecisiontableVersionExecute) | **POST** /api/v2/businessrules/decisiontables/{tableId}/versions/{tableVersion}/execute | Execute a decision table version
[**postBusinessrulesDecisiontableVersionRows**](BusinessRulesApi#postBusinessrulesDecisiontableVersionRows) | **POST** /api/v2/businessrules/decisiontables/{tableId}/versions/{tableVersion}/rows | Create a decision table row
[**postBusinessrulesDecisiontableVersionRowsSearch**](BusinessRulesApi#postBusinessrulesDecisiontableVersionRowsSearch) | **POST** /api/v2/businessrules/decisiontables/{tableId}/versions/{tableVersion}/rows/search | Search for decision table rows
[**postBusinessrulesDecisiontableVersionSync**](BusinessRulesApi#postBusinessrulesDecisiontableVersionSync) | **POST** /api/v2/businessrules/decisiontables/{tableId}/versions/{tableVersion}/sync | Update the Business Rules Schema to the latest version for a given decision table version
[**postBusinessrulesDecisiontableVersions**](BusinessRulesApi#postBusinessrulesDecisiontableVersions) | **POST** /api/v2/businessrules/decisiontables/{tableId}/versions | Create a new decision table version
[**postBusinessrulesDecisiontables**](BusinessRulesApi#postBusinessrulesDecisiontables) | **POST** /api/v2/businessrules/decisiontables | Create a decision table
[**postBusinessrulesSchemas**](BusinessRulesApi#postBusinessrulesSchemas) | **POST** /api/v2/businessrules/schemas | Create a schema
[**putBusinessrulesDecisiontableVersionPublish**](BusinessRulesApi#putBusinessrulesDecisiontableVersionPublish) | **PUT** /api/v2/businessrules/decisiontables/{tableId}/versions/{tableVersion}/publish | Publish a decision table version
[**putBusinessrulesDecisiontableVersionRow**](BusinessRulesApi#putBusinessrulesDecisiontableVersionRow) | **PUT** /api/v2/businessrules/decisiontables/{tableId}/versions/{tableVersion}/rows/{rowId} | Full update a decision table row
[**putBusinessrulesSchema**](BusinessRulesApi#putBusinessrulesSchema) | **PUT** /api/v2/businessrules/schemas/{schemaId} | Update a schema



## deleteBusinessrulesDecisiontable

> void deleteBusinessrulesDecisiontable(tableId, opts)


DELETE /api/v2/businessrules/decisiontables/{tableId}

Delete a decision table

deleteBusinessrulesDecisiontable is a preview method and is subject to both breaking and non-breaking changes at any time without notice

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
  'forceDelete': false // Boolean | Force delete decision table (under certain conditions)
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

### Return type

void (no response body)


## deleteBusinessrulesDecisiontableVersion

> void deleteBusinessrulesDecisiontableVersion(tableId, tableVersion)


DELETE /api/v2/businessrules/decisiontables/{tableId}/versions/{tableVersion}

Delete a decision table version

deleteBusinessrulesDecisiontableVersion is a preview method and is subject to both breaking and non-breaking changes at any time without notice

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

apiInstance.deleteBusinessrulesDecisiontableVersion(tableId, tableVersion)
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

### Return type

void (no response body)


## deleteBusinessrulesDecisiontableVersionRow

> void deleteBusinessrulesDecisiontableVersionRow(tableId, tableVersion, rowId)


DELETE /api/v2/businessrules/decisiontables/{tableId}/versions/{tableVersion}/rows/{rowId}

Delete a decision table row

deleteBusinessrulesDecisiontableVersionRow is a preview method and is subject to both breaking and non-breaking changes at any time without notice

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

apiInstance.deleteBusinessrulesDecisiontableVersionRow(tableId, tableVersion, rowId)
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

### Return type

void (no response body)


## deleteBusinessrulesSchema

> void deleteBusinessrulesSchema(schemaId)


DELETE /api/v2/businessrules/schemas/{schemaId}

Delete a schema

deleteBusinessrulesSchema is a preview method and is subject to both breaking and non-breaking changes at any time without notice

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

apiInstance.deleteBusinessrulesSchema(schemaId)
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

### Return type

void (no response body)


## getBusinessrulesDecisiontable

> DecisionTable getBusinessrulesDecisiontable(tableId)


GET /api/v2/businessrules/decisiontables/{tableId}

Get a decision table

getBusinessrulesDecisiontable is a preview method and is subject to both breaking and non-breaking changes at any time without notice

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

apiInstance.getBusinessrulesDecisiontable(tableId)
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

### Return type

**DecisionTable**


## getBusinessrulesDecisiontableVersion

> DecisionTableVersion getBusinessrulesDecisiontableVersion(tableId, tableVersion)


GET /api/v2/businessrules/decisiontables/{tableId}/versions/{tableVersion}

Get a decision table version

getBusinessrulesDecisiontableVersion is a preview method and is subject to both breaking and non-breaking changes at any time without notice

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

apiInstance.getBusinessrulesDecisiontableVersion(tableId, tableVersion)
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

### Return type

**DecisionTableVersion**


## getBusinessrulesDecisiontableVersionRow

> DecisionTableRow getBusinessrulesDecisiontableVersionRow(tableId, tableVersion, rowId)


GET /api/v2/businessrules/decisiontables/{tableId}/versions/{tableVersion}/rows/{rowId}

Get a decision table row

getBusinessrulesDecisiontableVersionRow is a preview method and is subject to both breaking and non-breaking changes at any time without notice

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

apiInstance.getBusinessrulesDecisiontableVersionRow(tableId, tableVersion, rowId)
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

### Return type

**DecisionTableRow**


## getBusinessrulesDecisiontableVersionRows

> DecisionTableRowListing getBusinessrulesDecisiontableVersionRows(tableId, tableVersion, opts)


GET /api/v2/businessrules/decisiontables/{tableId}/versions/{tableVersion}/rows

Get a list of decision table rows.

getBusinessrulesDecisiontableVersionRows is a preview method and is subject to both breaking and non-breaking changes at any time without notice

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
  'pageSize': "pageSize_example" // String | Number of entities to return. Maximum of 100. Defaults to 25.
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

### Return type

**DecisionTableRowListing**


## getBusinessrulesDecisiontableVersions

> DecisionTableVersionListing getBusinessrulesDecisiontableVersions(tableId, opts)


GET /api/v2/businessrules/decisiontables/{tableId}/versions

Get a list of decision table versions

getBusinessrulesDecisiontableVersions is a preview method and is subject to both breaking and non-breaking changes at any time without notice

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
  'pageSize': "pageSize_example" // String | Number of entities to return. Maximum of 100.
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

### Return type

**DecisionTableVersionListing**


## getBusinessrulesDecisiontables

> DecisionTableListing getBusinessrulesDecisiontables(opts)


GET /api/v2/businessrules/decisiontables

Get a list of decision tables.

getBusinessrulesDecisiontables is a preview method and is subject to both breaking and non-breaking changes at any time without notice

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
  'name': "name_example" // String | Search for decision tables with a name that contains the given search string. Search is case insensitive and will match any table that contains this string in any part of the name.
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

### Return type

**DecisionTableListing**


## getBusinessrulesDecisiontablesSearch

> DecisionTableListing getBusinessrulesDecisiontablesSearch(opts)


GET /api/v2/businessrules/decisiontables/search

Search for decision tables.

getBusinessrulesDecisiontablesSearch is a preview method and is subject to both breaking and non-breaking changes at any time without notice

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
  'ids': ["ids_example"] // [String] | Decision table IDs to search for
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

### Return type

**DecisionTableListing**


## getBusinessrulesSchema

> DataSchema getBusinessrulesSchema(schemaId)


GET /api/v2/businessrules/schemas/{schemaId}

Get a schema

getBusinessrulesSchema is a preview method and is subject to both breaking and non-breaking changes at any time without notice

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

apiInstance.getBusinessrulesSchema(schemaId)
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

### Return type

**DataSchema**


## getBusinessrulesSchemas

> DataSchemaListing getBusinessrulesSchemas()


GET /api/v2/businessrules/schemas

Get a list of schemas.

getBusinessrulesSchemas is a preview method and is subject to both breaking and non-breaking changes at any time without notice

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

apiInstance.getBusinessrulesSchemas()
  .then((data) => {
    console.log(`getBusinessrulesSchemas success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getBusinessrulesSchemas');
    console.error(err);
  });
```

### Parameters

This endpoint does not need any parameter.

### Return type

**DataSchemaListing**


## getBusinessrulesSchemasCoretype

> Coretype getBusinessrulesSchemasCoretype(coreTypeName)


GET /api/v2/businessrules/schemas/coretypes/{coreTypeName}

Get a specific named core type.

getBusinessrulesSchemasCoretype is a preview method and is subject to both breaking and non-breaking changes at any time without notice

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

apiInstance.getBusinessrulesSchemasCoretype(coreTypeName)
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

### Return type

**Coretype**


## getBusinessrulesSchemasCoretypes

> CoretypeListing getBusinessrulesSchemasCoretypes()


GET /api/v2/businessrules/schemas/coretypes

Get the core types from which all schemas are built.

getBusinessrulesSchemasCoretypes is a preview method and is subject to both breaking and non-breaking changes at any time without notice

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

apiInstance.getBusinessrulesSchemasCoretypes()
  .then((data) => {
    console.log(`getBusinessrulesSchemasCoretypes success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getBusinessrulesSchemasCoretypes');
    console.error(err);
  });
```

### Parameters

This endpoint does not need any parameter.

### Return type

**CoretypeListing**


## patchBusinessrulesDecisiontable

> DecisionTable patchBusinessrulesDecisiontable(tableId, body)


PATCH /api/v2/businessrules/decisiontables/{tableId}

Update a decision table

patchBusinessrulesDecisiontable is a preview method and is subject to both breaking and non-breaking changes at any time without notice

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

apiInstance.patchBusinessrulesDecisiontable(tableId, body)
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

### Return type

**DecisionTable**


## patchBusinessrulesDecisiontableVersion

> DecisionTableVersion patchBusinessrulesDecisiontableVersion(tableId, tableVersion, body)


PATCH /api/v2/businessrules/decisiontables/{tableId}/versions/{tableVersion}

Update a decision table version

patchBusinessrulesDecisiontableVersion is a preview method and is subject to both breaking and non-breaking changes at any time without notice

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

apiInstance.patchBusinessrulesDecisiontableVersion(tableId, tableVersion, body)
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

### Return type

**DecisionTableVersion**


## postBusinessrulesDecisiontableExecute

> DecisionTableExecutionResponse postBusinessrulesDecisiontableExecute(tableId, body)


POST /api/v2/businessrules/decisiontables/{tableId}/execute

Execute a published decision table

postBusinessrulesDecisiontableExecute is a preview method and is subject to both breaking and non-breaking changes at any time without notice

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

apiInstance.postBusinessrulesDecisiontableExecute(tableId, body)
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

### Return type

**DecisionTableExecutionResponse**


## postBusinessrulesDecisiontableVersionCopy

> DecisionTableVersion postBusinessrulesDecisiontableVersionCopy(tableId, tableVersion, body)


POST /api/v2/businessrules/decisiontables/{tableId}/versions/{tableVersion}/copy

Copy a decision table version

postBusinessrulesDecisiontableVersionCopy is a preview method and is subject to both breaking and non-breaking changes at any time without notice

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

apiInstance.postBusinessrulesDecisiontableVersionCopy(tableId, tableVersion, body)
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

### Return type

**DecisionTableVersion**


## postBusinessrulesDecisiontableVersionExecute

> DecisionTableExecutionResponse postBusinessrulesDecisiontableVersionExecute(tableId, tableVersion, body)


POST /api/v2/businessrules/decisiontables/{tableId}/versions/{tableVersion}/execute

Execute a decision table version

postBusinessrulesDecisiontableVersionExecute is a preview method and is subject to both breaking and non-breaking changes at any time without notice

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

apiInstance.postBusinessrulesDecisiontableVersionExecute(tableId, tableVersion, body)
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

### Return type

**DecisionTableExecutionResponse**


## postBusinessrulesDecisiontableVersionRows

> DecisionTableRow postBusinessrulesDecisiontableVersionRows(tableId, tableVersion, body)


POST /api/v2/businessrules/decisiontables/{tableId}/versions/{tableVersion}/rows

Create a decision table row

postBusinessrulesDecisiontableVersionRows is a preview method and is subject to both breaking and non-breaking changes at any time without notice

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

apiInstance.postBusinessrulesDecisiontableVersionRows(tableId, tableVersion, body)
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

### Return type

**DecisionTableRow**


## postBusinessrulesDecisiontableVersionRowsSearch

> DecisionTableRowListing postBusinessrulesDecisiontableVersionRowsSearch(tableId, tableVersion, body, opts)


POST /api/v2/businessrules/decisiontables/{tableId}/versions/{tableVersion}/rows/search

Search for decision table rows

postBusinessrulesDecisiontableVersionRowsSearch is a preview method and is subject to both breaking and non-breaking changes at any time without notice

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
  'pageSize': "pageSize_example" // String | Number of entities to return. Maximum of 100. Defaults to 25.
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

### Return type

**DecisionTableRowListing**


## postBusinessrulesDecisiontableVersionSync

> DecisionTableVersion postBusinessrulesDecisiontableVersionSync(tableId, tableVersion)


POST /api/v2/businessrules/decisiontables/{tableId}/versions/{tableVersion}/sync

Update the Business Rules Schema to the latest version for a given decision table version

postBusinessrulesDecisiontableVersionSync is a preview method and is subject to both breaking and non-breaking changes at any time without notice

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

apiInstance.postBusinessrulesDecisiontableVersionSync(tableId, tableVersion)
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

### Return type

**DecisionTableVersion**


## postBusinessrulesDecisiontableVersions

> DecisionTableVersion postBusinessrulesDecisiontableVersions(tableId)


POST /api/v2/businessrules/decisiontables/{tableId}/versions

Create a new decision table version

postBusinessrulesDecisiontableVersions is a preview method and is subject to both breaking and non-breaking changes at any time without notice

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

apiInstance.postBusinessrulesDecisiontableVersions(tableId)
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

### Return type

**DecisionTableVersion**


## postBusinessrulesDecisiontables

> DecisionTableVersion postBusinessrulesDecisiontables(body)


POST /api/v2/businessrules/decisiontables

Create a decision table

postBusinessrulesDecisiontables is a preview method and is subject to both breaking and non-breaking changes at any time without notice

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

apiInstance.postBusinessrulesDecisiontables(body)
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

### Return type

**DecisionTableVersion**


## postBusinessrulesSchemas

> DataSchema postBusinessrulesSchemas(body)


POST /api/v2/businessrules/schemas

Create a schema

postBusinessrulesSchemas is a preview method and is subject to both breaking and non-breaking changes at any time without notice

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

let body = {}; // Object | Schema

apiInstance.postBusinessrulesSchemas(body)
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
 **body** | **Object** | Schema |  |

### Return type

**DataSchema**


## putBusinessrulesDecisiontableVersionPublish

> DecisionTableVersion putBusinessrulesDecisiontableVersionPublish(tableId, tableVersion)


PUT /api/v2/businessrules/decisiontables/{tableId}/versions/{tableVersion}/publish

Publish a decision table version

putBusinessrulesDecisiontableVersionPublish is a preview method and is subject to both breaking and non-breaking changes at any time without notice

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

apiInstance.putBusinessrulesDecisiontableVersionPublish(tableId, tableVersion)
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

### Return type

**DecisionTableVersion**


## putBusinessrulesDecisiontableVersionRow

> DecisionTableRow putBusinessrulesDecisiontableVersionRow(tableId, tableVersion, rowId, body)


PUT /api/v2/businessrules/decisiontables/{tableId}/versions/{tableVersion}/rows/{rowId}

Full update a decision table row

putBusinessrulesDecisiontableVersionRow is a preview method and is subject to both breaking and non-breaking changes at any time without notice

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

apiInstance.putBusinessrulesDecisiontableVersionRow(tableId, tableVersion, rowId, body)
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

### Return type

**DecisionTableRow**


## putBusinessrulesSchema

> DataSchema putBusinessrulesSchema(schemaId, body)


PUT /api/v2/businessrules/schemas/{schemaId}

Update a schema

putBusinessrulesSchema is a preview method and is subject to both breaking and non-breaking changes at any time without notice

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
let body = {}; // Object | Data Schema

apiInstance.putBusinessrulesSchema(schemaId, body)
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
 **body** | **Object** | Data Schema |  |

### Return type

**DataSchema**


_purecloud-platform-client-v2@229.1.0_
