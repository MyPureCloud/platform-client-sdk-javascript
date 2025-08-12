# ContentManagementApi

# platformClient.ContentManagementApi

All URIs are relative to *https://api.mypurecloud.com*

| Method | HTTP request | Description |
| ------------- | ------------- | ------------- |
[**deleteContentmanagementDocument**](ContentManagementApi#deleteContentmanagementDocument) | **DELETE** /api/v2/contentmanagement/documents/{documentId} | Delete a document.
[**deleteContentmanagementShare**](ContentManagementApi#deleteContentmanagementShare) | **DELETE** /api/v2/contentmanagement/shares/{shareId} | Deletes an existing share.
[**deleteContentmanagementStatusStatusId**](ContentManagementApi#deleteContentmanagementStatusStatusId) | **DELETE** /api/v2/contentmanagement/status/{statusId} | Cancel the command for this status
[**deleteContentmanagementWorkspace**](ContentManagementApi#deleteContentmanagementWorkspace) | **DELETE** /api/v2/contentmanagement/workspaces/{workspaceId} | Delete a workspace
[**deleteContentmanagementWorkspaceMember**](ContentManagementApi#deleteContentmanagementWorkspaceMember) | **DELETE** /api/v2/contentmanagement/workspaces/{workspaceId}/members/{memberId} | Delete a member from a workspace
[**deleteContentmanagementWorkspaceTagvalue**](ContentManagementApi#deleteContentmanagementWorkspaceTagvalue) | **DELETE** /api/v2/contentmanagement/workspaces/{workspaceId}/tagvalues/{tagId} | Delete workspace tag
[**getContentmanagementDocument**](ContentManagementApi#getContentmanagementDocument) | **GET** /api/v2/contentmanagement/documents/{documentId} | Get a document.
[**getContentmanagementDocumentContent**](ContentManagementApi#getContentmanagementDocumentContent) | **GET** /api/v2/contentmanagement/documents/{documentId}/content | Download a document.
[**getContentmanagementDocuments**](ContentManagementApi#getContentmanagementDocuments) | **GET** /api/v2/contentmanagement/documents | Get a list of documents.
[**getContentmanagementQuery**](ContentManagementApi#getContentmanagementQuery) | **GET** /api/v2/contentmanagement/query | Query content
[**getContentmanagementSecurityprofile**](ContentManagementApi#getContentmanagementSecurityprofile) | **GET** /api/v2/contentmanagement/securityprofiles/{securityProfileId} | Get a Security Profile
[**getContentmanagementSecurityprofiles**](ContentManagementApi#getContentmanagementSecurityprofiles) | **GET** /api/v2/contentmanagement/securityprofiles | Get a List of Security Profiles
[**getContentmanagementShare**](ContentManagementApi#getContentmanagementShare) | **GET** /api/v2/contentmanagement/shares/{shareId} | Retrieve details about an existing share.
[**getContentmanagementSharedSharedId**](ContentManagementApi#getContentmanagementSharedSharedId) | **GET** /api/v2/contentmanagement/shared/{sharedId} | Get shared documents. Securely download a shared document.
[**getContentmanagementShares**](ContentManagementApi#getContentmanagementShares) | **GET** /api/v2/contentmanagement/shares | Gets a list of shares.  You must specify at least one filter (e.g. entityId).
[**getContentmanagementStatus**](ContentManagementApi#getContentmanagementStatus) | **GET** /api/v2/contentmanagement/status | Get a list of statuses for pending operations
[**getContentmanagementStatusStatusId**](ContentManagementApi#getContentmanagementStatusStatusId) | **GET** /api/v2/contentmanagement/status/{statusId} | Get a status.
[**getContentmanagementUsage**](ContentManagementApi#getContentmanagementUsage) | **GET** /api/v2/contentmanagement/usage | Get usage details.
[**getContentmanagementWorkspace**](ContentManagementApi#getContentmanagementWorkspace) | **GET** /api/v2/contentmanagement/workspaces/{workspaceId} | Get a workspace.
[**getContentmanagementWorkspaceDocuments**](ContentManagementApi#getContentmanagementWorkspaceDocuments) | **GET** /api/v2/contentmanagement/workspaces/{workspaceId}/documents | Get a list of documents.
[**getContentmanagementWorkspaceMember**](ContentManagementApi#getContentmanagementWorkspaceMember) | **GET** /api/v2/contentmanagement/workspaces/{workspaceId}/members/{memberId} | Get a workspace member
[**getContentmanagementWorkspaceMembers**](ContentManagementApi#getContentmanagementWorkspaceMembers) | **GET** /api/v2/contentmanagement/workspaces/{workspaceId}/members | Get a list workspace members
[**getContentmanagementWorkspaceTagvalue**](ContentManagementApi#getContentmanagementWorkspaceTagvalue) | **GET** /api/v2/contentmanagement/workspaces/{workspaceId}/tagvalues/{tagId} | Get a workspace tag
[**getContentmanagementWorkspaceTagvalues**](ContentManagementApi#getContentmanagementWorkspaceTagvalues) | **GET** /api/v2/contentmanagement/workspaces/{workspaceId}/tagvalues | Get a list of workspace tags
[**getContentmanagementWorkspaces**](ContentManagementApi#getContentmanagementWorkspaces) | **GET** /api/v2/contentmanagement/workspaces | Get a list of workspaces.
[**postContentmanagementDocument**](ContentManagementApi#postContentmanagementDocument) | **POST** /api/v2/contentmanagement/documents/{documentId} | Update a document.
[**postContentmanagementDocumentContent**](ContentManagementApi#postContentmanagementDocumentContent) | **POST** /api/v2/contentmanagement/documents/{documentId}/content | Replace the contents of a document.
[**postContentmanagementDocuments**](ContentManagementApi#postContentmanagementDocuments) | **POST** /api/v2/contentmanagement/documents | Add a document.
[**postContentmanagementQuery**](ContentManagementApi#postContentmanagementQuery) | **POST** /api/v2/contentmanagement/query | Query content
[**postContentmanagementShares**](ContentManagementApi#postContentmanagementShares) | **POST** /api/v2/contentmanagement/shares | Creates a new share or updates an existing share if the entity has already been shared
[**postContentmanagementWorkspaceTagvalues**](ContentManagementApi#postContentmanagementWorkspaceTagvalues) | **POST** /api/v2/contentmanagement/workspaces/{workspaceId}/tagvalues | Create a workspace tag
[**postContentmanagementWorkspaceTagvaluesQuery**](ContentManagementApi#postContentmanagementWorkspaceTagvaluesQuery) | **POST** /api/v2/contentmanagement/workspaces/{workspaceId}/tagvalues/query | Perform a prefix query on tags in the workspace
[**postContentmanagementWorkspaces**](ContentManagementApi#postContentmanagementWorkspaces) | **POST** /api/v2/contentmanagement/workspaces | Create a group workspace
[**putContentmanagementWorkspace**](ContentManagementApi#putContentmanagementWorkspace) | **PUT** /api/v2/contentmanagement/workspaces/{workspaceId} | Update a workspace
[**putContentmanagementWorkspaceMember**](ContentManagementApi#putContentmanagementWorkspaceMember) | **PUT** /api/v2/contentmanagement/workspaces/{workspaceId}/members/{memberId} | Add a member to a workspace
[**putContentmanagementWorkspaceTagvalue**](ContentManagementApi#putContentmanagementWorkspaceTagvalue) | **PUT** /api/v2/contentmanagement/workspaces/{workspaceId}/tagvalues/{tagId} | Update a workspace tag. Will update all documents with the new tag value.



## deleteContentmanagementDocument

> void deleteContentmanagementDocument(documentId, opts)


DELETE /api/v2/contentmanagement/documents/{documentId}

Delete a document.

Requires ANY permissions:

* content_management_user

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.ContentManagementApi();

let documentId = "documentId_example"; // String | Document ID
let opts = { 
  'override': true // Boolean | Override any lock on the document
};

apiInstance.deleteContentmanagementDocument(documentId, opts)
  .then(() => {
    console.log('deleteContentmanagementDocument returned successfully.');
  })
  .catch((err) => {
    console.log('There was a failure calling deleteContentmanagementDocument');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **documentId** | **String** | Document ID |  |
 **override** | **Boolean** | Override any lock on the document | [optional]  |

### Return type

void (no response body)


## deleteContentmanagementShare

> void deleteContentmanagementShare(shareId)


DELETE /api/v2/contentmanagement/shares/{shareId}

Deletes an existing share.

This revokes sharing rights specified in the share record

Requires NO permissions:

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.ContentManagementApi();

let shareId = "shareId_example"; // String | Share ID

apiInstance.deleteContentmanagementShare(shareId)
  .then(() => {
    console.log('deleteContentmanagementShare returned successfully.');
  })
  .catch((err) => {
    console.log('There was a failure calling deleteContentmanagementShare');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **shareId** | **String** | Share ID |  |

### Return type

void (no response body)


## deleteContentmanagementStatusStatusId

> void deleteContentmanagementStatusStatusId(statusId)


DELETE /api/v2/contentmanagement/status/{statusId}

Cancel the command for this status

Requires NO permissions:

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.ContentManagementApi();

let statusId = "statusId_example"; // String | Status ID

apiInstance.deleteContentmanagementStatusStatusId(statusId)
  .then(() => {
    console.log('deleteContentmanagementStatusStatusId returned successfully.');
  })
  .catch((err) => {
    console.log('There was a failure calling deleteContentmanagementStatusStatusId');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **statusId** | **String** | Status ID |  |

### Return type

void (no response body)


## deleteContentmanagementWorkspace

> void deleteContentmanagementWorkspace(workspaceId, opts)


DELETE /api/v2/contentmanagement/workspaces/{workspaceId}

Delete a workspace

Requires NO permissions:

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.ContentManagementApi();

let workspaceId = "workspaceId_example"; // String | Workspace ID
let opts = { 
  'moveChildrenToWorkspaceId': "moveChildrenToWorkspaceId_example" // String | New location for objects in deleted workspace.
};

apiInstance.deleteContentmanagementWorkspace(workspaceId, opts)
  .then(() => {
    console.log('deleteContentmanagementWorkspace returned successfully.');
  })
  .catch((err) => {
    console.log('There was a failure calling deleteContentmanagementWorkspace');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **workspaceId** | **String** | Workspace ID |  |
 **moveChildrenToWorkspaceId** | **String** | New location for objects in deleted workspace. | [optional]  |

### Return type

void (no response body)


## deleteContentmanagementWorkspaceMember

> void deleteContentmanagementWorkspaceMember(workspaceId, memberId)


DELETE /api/v2/contentmanagement/workspaces/{workspaceId}/members/{memberId}

Delete a member from a workspace

Requires NO permissions:

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.ContentManagementApi();

let workspaceId = "workspaceId_example"; // String | Workspace ID
let memberId = "memberId_example"; // String | Member ID

apiInstance.deleteContentmanagementWorkspaceMember(workspaceId, memberId)
  .then(() => {
    console.log('deleteContentmanagementWorkspaceMember returned successfully.');
  })
  .catch((err) => {
    console.log('There was a failure calling deleteContentmanagementWorkspaceMember');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **workspaceId** | **String** | Workspace ID |  |
 **memberId** | **String** | Member ID |  |

### Return type

void (no response body)


## deleteContentmanagementWorkspaceTagvalue

> void deleteContentmanagementWorkspaceTagvalue(workspaceId, tagId)


DELETE /api/v2/contentmanagement/workspaces/{workspaceId}/tagvalues/{tagId}

Delete workspace tag

Delete a tag from a workspace. Will remove this tag from all documents.

Requires NO permissions:

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.ContentManagementApi();

let workspaceId = "workspaceId_example"; // String | Workspace ID
let tagId = "tagId_example"; // String | Tag ID

apiInstance.deleteContentmanagementWorkspaceTagvalue(workspaceId, tagId)
  .then(() => {
    console.log('deleteContentmanagementWorkspaceTagvalue returned successfully.');
  })
  .catch((err) => {
    console.log('There was a failure calling deleteContentmanagementWorkspaceTagvalue');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **workspaceId** | **String** | Workspace ID |  |
 **tagId** | **String** | Tag ID |  |

### Return type

void (no response body)


## getContentmanagementDocument

> Document getContentmanagementDocument(documentId, opts)


GET /api/v2/contentmanagement/documents/{documentId}

Get a document.

Requires ANY permissions:

* content_management_user

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.ContentManagementApi();

let documentId = "documentId_example"; // String | Document ID
let opts = { 
  'expand': ["expand_example"] // [String] | Which fields, if any, to expand.
};

apiInstance.getContentmanagementDocument(documentId, opts)
  .then((data) => {
    console.log(`getContentmanagementDocument success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getContentmanagementDocument');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **documentId** | **String** | Document ID |  |
 **expand** | **[String]** | Which fields, if any, to expand. | [optional] <br />**Values**: lockInfo, acl, workspace |

### Return type

**Document**


## getContentmanagementDocumentContent

> DownloadResponse getContentmanagementDocumentContent(documentId, opts)


GET /api/v2/contentmanagement/documents/{documentId}/content

Download a document.

Requires ANY permissions:

* content_management_user

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.ContentManagementApi();

let documentId = "documentId_example"; // String | Document ID
let opts = { 
  'disposition': "disposition_example", // String | Request how the content will be downloaded: a file attachment or inline. Default is attachment.
  'contentType': "contentType_example" // String | The requested format for the specified document. If supported, the document will be returned in that format. Example contentType=audio/wav
};

apiInstance.getContentmanagementDocumentContent(documentId, opts)
  .then((data) => {
    console.log(`getContentmanagementDocumentContent success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getContentmanagementDocumentContent');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **documentId** | **String** | Document ID |  |
 **disposition** | **String** | Request how the content will be downloaded: a file attachment or inline. Default is attachment. | [optional] <br />**Values**: attachment, inline |
 **contentType** | **String** | The requested format for the specified document. If supported, the document will be returned in that format. Example contentType=audio/wav | [optional]  |

### Return type

**DownloadResponse**


## getContentmanagementDocuments

> DocumentEntityListing getContentmanagementDocuments(workspaceId, opts)

:::{"alert":"warning","title":"Deprecated","collapsible":false,"autoCollapse":false}
This resource has been deprecated
:::

GET /api/v2/contentmanagement/documents

Get a list of documents.

Requires NO permissions:

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.ContentManagementApi();

let workspaceId = "workspaceId_example"; // String | Workspace ID
let opts = { 
  'name': "name_example", // String | Name
  'expand': ["expand_example"], // [String] | Which fields, if any, to expand.
  'pageSize': 25, // Number | Page size
  'pageNumber': 1, // Number | Page number
  'sortBy': "sortBy_example", // String | name or dateCreated
  'sortOrder': "ascending" // String | ascending or descending
};

apiInstance.getContentmanagementDocuments(workspaceId, opts)
  .then((data) => {
    console.log(`getContentmanagementDocuments success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getContentmanagementDocuments');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **workspaceId** | **String** | Workspace ID |  |
 **name** | **String** | Name | [optional]  |
 **expand** | **[String]** | Which fields, if any, to expand. | [optional] <br />**Values**: acl, workspace |
 **pageSize** | **Number** | Page size | [optional] [default to 25] |
 **pageNumber** | **Number** | Page number | [optional] [default to 1] |
 **sortBy** | **String** | name or dateCreated | [optional]  |
 **sortOrder** | **String** | ascending or descending | [optional] [default to ascending] |

### Return type

**DocumentEntityListing**


## getContentmanagementQuery

> QueryResults getContentmanagementQuery(queryPhrase, opts)


GET /api/v2/contentmanagement/query

Query content

Requires NO permissions:

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.ContentManagementApi();

let queryPhrase = "queryPhrase_example"; // String | Phrase tokens are ANDed together over all searchable fields
let opts = { 
  'pageSize': 25, // Number | Page size
  'pageNumber': 1, // Number | Page number
  'sortBy': "name", // String | name or dateCreated
  'sortOrder': "ascending", // String | ascending or descending
  'expand': ["expand_example"] // [String] | Which fields, if any, to expand.
};

apiInstance.getContentmanagementQuery(queryPhrase, opts)
  .then((data) => {
    console.log(`getContentmanagementQuery success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getContentmanagementQuery');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **queryPhrase** | **String** | Phrase tokens are ANDed together over all searchable fields |  |
 **pageSize** | **Number** | Page size | [optional] [default to 25] |
 **pageNumber** | **Number** | Page number | [optional] [default to 1] |
 **sortBy** | **String** | name or dateCreated | [optional] [default to name] |
 **sortOrder** | **String** | ascending or descending | [optional] [default to ascending] |
 **expand** | **[String]** | Which fields, if any, to expand. | [optional] <br />**Values**: acl, workspace |

### Return type

**QueryResults**


## getContentmanagementSecurityprofile

> SecurityProfile getContentmanagementSecurityprofile(securityProfileId)


GET /api/v2/contentmanagement/securityprofiles/{securityProfileId}

Get a Security Profile

Requires NO permissions:

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.ContentManagementApi();

let securityProfileId = "securityProfileId_example"; // String | Security Profile Id

apiInstance.getContentmanagementSecurityprofile(securityProfileId)
  .then((data) => {
    console.log(`getContentmanagementSecurityprofile success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getContentmanagementSecurityprofile');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **securityProfileId** | **String** | Security Profile Id |  |

### Return type

**SecurityProfile**


## getContentmanagementSecurityprofiles

> SecurityProfileEntityListing getContentmanagementSecurityprofiles()


GET /api/v2/contentmanagement/securityprofiles

Get a List of Security Profiles

Requires NO permissions:

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.ContentManagementApi();

apiInstance.getContentmanagementSecurityprofiles()
  .then((data) => {
    console.log(`getContentmanagementSecurityprofiles success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getContentmanagementSecurityprofiles');
    console.error(err);
  });
```

### Parameters

This endpoint does not need any parameter.

### Return type

**SecurityProfileEntityListing**


## getContentmanagementShare

> Share getContentmanagementShare(shareId, opts)


GET /api/v2/contentmanagement/shares/{shareId}

Retrieve details about an existing share.

Requires NO permissions:

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.ContentManagementApi();

let shareId = "shareId_example"; // String | Share ID
let opts = { 
  'expand': ["expand_example"] // [String] | Which fields, if any, to expand.
};

apiInstance.getContentmanagementShare(shareId, opts)
  .then((data) => {
    console.log(`getContentmanagementShare success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getContentmanagementShare');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **shareId** | **String** | Share ID |  |
 **expand** | **[String]** | Which fields, if any, to expand. | [optional] <br />**Values**: member |

### Return type

**Share**


## getContentmanagementSharedSharedId

> SharedResponse getContentmanagementSharedSharedId(sharedId, opts)


GET /api/v2/contentmanagement/shared/{sharedId}

Get shared documents. Securely download a shared document.

This method requires the download sharing URI obtained in the get document response (downloadSharingUri). Documents may be shared between users in the same workspace. Documents may also be shared between any user by creating a content management share.

Requires NO permissions:

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.ContentManagementApi();

let sharedId = "sharedId_example"; // String | Shared ID
let opts = { 
  'disposition': "attachment", // String | Request how the share content will be downloaded: attached as a file or inline. Default is attachment.
  'contentType': "contentType_example", // String | The requested format for the specified document. If supported, the document will be returned in that format. Example contentType=audio/wav
  'expand': "expand_example" // String | Expand some document fields
};

apiInstance.getContentmanagementSharedSharedId(sharedId, opts)
  .then((data) => {
    console.log(`getContentmanagementSharedSharedId success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getContentmanagementSharedSharedId');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **sharedId** | **String** | Shared ID |  |
 **disposition** | **String** | Request how the share content will be downloaded: attached as a file or inline. Default is attachment. | [optional] [default to attachment]<br />**Values**: attachment, inline, none |
 **contentType** | **String** | The requested format for the specified document. If supported, the document will be returned in that format. Example contentType=audio/wav | [optional]  |
 **expand** | **String** | Expand some document fields | [optional] <br />**Values**: document.acl |

### Return type

**SharedResponse**


## getContentmanagementShares

> ShareEntityListing getContentmanagementShares(opts)


GET /api/v2/contentmanagement/shares

Gets a list of shares.  You must specify at least one filter (e.g. entityId).

Failing to specify a filter will return 400.

Requires NO permissions:

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.ContentManagementApi();

let opts = { 
  'entityId': "entityId_example", // String | Filters the shares returned to only the entity specified by the value of this parameter.
  'expand': ["expand_example"], // [String] | Which fields, if any, to expand.
  'pageSize': 25, // Number | Page size
  'pageNumber': 1 // Number | Page number
};

apiInstance.getContentmanagementShares(opts)
  .then((data) => {
    console.log(`getContentmanagementShares success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getContentmanagementShares');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **entityId** | **String** | Filters the shares returned to only the entity specified by the value of this parameter. | [optional]  |
 **expand** | **[String]** | Which fields, if any, to expand. | [optional] <br />**Values**: member |
 **pageSize** | **Number** | Page size | [optional] [default to 25] |
 **pageNumber** | **Number** | Page number | [optional] [default to 1] |

### Return type

**ShareEntityListing**


## getContentmanagementStatus

> CommandStatusEntityListing getContentmanagementStatus(opts)


GET /api/v2/contentmanagement/status

Get a list of statuses for pending operations

Requires NO permissions:

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.ContentManagementApi();

let opts = { 
  'pageSize': 25, // Number | Page size
  'pageNumber': 1 // Number | Page number
};

apiInstance.getContentmanagementStatus(opts)
  .then((data) => {
    console.log(`getContentmanagementStatus success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getContentmanagementStatus');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **pageSize** | **Number** | Page size | [optional] [default to 25] |
 **pageNumber** | **Number** | Page number | [optional] [default to 1] |

### Return type

**CommandStatusEntityListing**


## getContentmanagementStatusStatusId

> CommandStatus getContentmanagementStatusStatusId(statusId)


GET /api/v2/contentmanagement/status/{statusId}

Get a status.

Requires NO permissions:

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.ContentManagementApi();

let statusId = "statusId_example"; // String | Status ID

apiInstance.getContentmanagementStatusStatusId(statusId)
  .then((data) => {
    console.log(`getContentmanagementStatusStatusId success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getContentmanagementStatusStatusId');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **statusId** | **String** | Status ID |  |

### Return type

**CommandStatus**


## getContentmanagementUsage

> Usage getContentmanagementUsage()


GET /api/v2/contentmanagement/usage

Get usage details.

Requires NO permissions:

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.ContentManagementApi();

apiInstance.getContentmanagementUsage()
  .then((data) => {
    console.log(`getContentmanagementUsage success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getContentmanagementUsage');
    console.error(err);
  });
```

### Parameters

This endpoint does not need any parameter.

### Return type

**Usage**


## getContentmanagementWorkspace

> Workspace getContentmanagementWorkspace(workspaceId, opts)


GET /api/v2/contentmanagement/workspaces/{workspaceId}

Get a workspace.

Requires NO permissions:

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.ContentManagementApi();

let workspaceId = "workspaceId_example"; // String | Workspace ID
let opts = { 
  'expand': ["expand_example"] // [String] | Which fields, if any, to expand.
};

apiInstance.getContentmanagementWorkspace(workspaceId, opts)
  .then((data) => {
    console.log(`getContentmanagementWorkspace success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getContentmanagementWorkspace');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **workspaceId** | **String** | Workspace ID |  |
 **expand** | **[String]** | Which fields, if any, to expand. | [optional] <br />**Values**: summary, acl |

### Return type

**Workspace**


## getContentmanagementWorkspaceDocuments

> DocumentEntityListing getContentmanagementWorkspaceDocuments(workspaceId, opts)


GET /api/v2/contentmanagement/workspaces/{workspaceId}/documents

Get a list of documents.

Requires NO permissions:

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.ContentManagementApi();

let workspaceId = "workspaceId_example"; // String | Workspace ID
let opts = { 
  'expand': ["expand_example"], // [String] | Which fields, if any, to expand.
  'pageSize': 25, // Number | Page size
  'pageNumber': 1, // Number | Page number
  'sortBy': "sortBy_example", // String | name or dateCreated
  'sortOrder': "ascending" // String | ascending or descending
};

apiInstance.getContentmanagementWorkspaceDocuments(workspaceId, opts)
  .then((data) => {
    console.log(`getContentmanagementWorkspaceDocuments success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getContentmanagementWorkspaceDocuments');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **workspaceId** | **String** | Workspace ID |  |
 **expand** | **[String]** | Which fields, if any, to expand. | [optional] <br />**Values**: acl, workspace |
 **pageSize** | **Number** | Page size | [optional] [default to 25] |
 **pageNumber** | **Number** | Page number | [optional] [default to 1] |
 **sortBy** | **String** | name or dateCreated | [optional]  |
 **sortOrder** | **String** | ascending or descending | [optional] [default to ascending] |

### Return type

**DocumentEntityListing**


## getContentmanagementWorkspaceMember

> WorkspaceMember getContentmanagementWorkspaceMember(workspaceId, memberId, opts)


GET /api/v2/contentmanagement/workspaces/{workspaceId}/members/{memberId}

Get a workspace member

Requires NO permissions:

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.ContentManagementApi();

let workspaceId = "workspaceId_example"; // String | Workspace ID
let memberId = "memberId_example"; // String | Member ID
let opts = { 
  'expand': ["expand_example"] // [String] | Which fields, if any, to expand.
};

apiInstance.getContentmanagementWorkspaceMember(workspaceId, memberId, opts)
  .then((data) => {
    console.log(`getContentmanagementWorkspaceMember success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getContentmanagementWorkspaceMember');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **workspaceId** | **String** | Workspace ID |  |
 **memberId** | **String** | Member ID |  |
 **expand** | **[String]** | Which fields, if any, to expand. | [optional] <br />**Values**: member |

### Return type

**WorkspaceMember**


## getContentmanagementWorkspaceMembers

> WorkspaceMemberEntityListing getContentmanagementWorkspaceMembers(workspaceId, opts)


GET /api/v2/contentmanagement/workspaces/{workspaceId}/members

Get a list workspace members

Requires NO permissions:

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.ContentManagementApi();

let workspaceId = "workspaceId_example"; // String | Workspace ID
let opts = { 
  'pageSize': 25, // Number | Page size
  'pageNumber': 1, // Number | Page number
  'expand': ["expand_example"] // [String] | Which fields, if any, to expand.
};

apiInstance.getContentmanagementWorkspaceMembers(workspaceId, opts)
  .then((data) => {
    console.log(`getContentmanagementWorkspaceMembers success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getContentmanagementWorkspaceMembers');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **workspaceId** | **String** | Workspace ID |  |
 **pageSize** | **Number** | Page size | [optional] [default to 25] |
 **pageNumber** | **Number** | Page number | [optional] [default to 1] |
 **expand** | **[String]** | Which fields, if any, to expand. | [optional] <br />**Values**: member |

### Return type

**WorkspaceMemberEntityListing**


## getContentmanagementWorkspaceTagvalue

> TagValue getContentmanagementWorkspaceTagvalue(workspaceId, tagId, opts)


GET /api/v2/contentmanagement/workspaces/{workspaceId}/tagvalues/{tagId}

Get a workspace tag

Requires NO permissions:

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.ContentManagementApi();

let workspaceId = "workspaceId_example"; // String | Workspace ID
let tagId = "tagId_example"; // String | Tag ID
let opts = { 
  'expand': ["expand_example"] // [String] | Which fields, if any, to expand.
};

apiInstance.getContentmanagementWorkspaceTagvalue(workspaceId, tagId, opts)
  .then((data) => {
    console.log(`getContentmanagementWorkspaceTagvalue success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getContentmanagementWorkspaceTagvalue');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **workspaceId** | **String** | Workspace ID |  |
 **tagId** | **String** | Tag ID |  |
 **expand** | **[String]** | Which fields, if any, to expand. | [optional] <br />**Values**: acl |

### Return type

**TagValue**


## getContentmanagementWorkspaceTagvalues

> TagValueEntityListing getContentmanagementWorkspaceTagvalues(workspaceId, opts)


GET /api/v2/contentmanagement/workspaces/{workspaceId}/tagvalues

Get a list of workspace tags

Requires NO permissions:

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.ContentManagementApi();

let workspaceId = "workspaceId_example"; // String | Workspace ID
let opts = { 
  'value': "value_example", // String | filter the list of tags returned
  'pageSize': 25, // Number | Page size
  'pageNumber': 1, // Number | Page number
  'expand': ["expand_example"] // [String] | Which fields, if any, to expand.
};

apiInstance.getContentmanagementWorkspaceTagvalues(workspaceId, opts)
  .then((data) => {
    console.log(`getContentmanagementWorkspaceTagvalues success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getContentmanagementWorkspaceTagvalues');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **workspaceId** | **String** | Workspace ID |  |
 **value** | **String** | filter the list of tags returned | [optional]  |
 **pageSize** | **Number** | Page size | [optional] [default to 25] |
 **pageNumber** | **Number** | Page number | [optional] [default to 1] |
 **expand** | **[String]** | Which fields, if any, to expand. | [optional] <br />**Values**: acl |

### Return type

**TagValueEntityListing**


## getContentmanagementWorkspaces

> WorkspaceEntityListing getContentmanagementWorkspaces(opts)


GET /api/v2/contentmanagement/workspaces

Get a list of workspaces.

Specifying content access will return all workspaces the user has document access to, while admin access will return all group workspaces the user has administrative rights to.

Requires NO permissions:

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.ContentManagementApi();

let opts = { 
  'pageSize': 25, // Number | Page size
  'pageNumber': 1, // Number | Page number
  'access': ["access_example"], // [String] | Requested access level.
  'expand': ["expand_example"] // [String] | Which fields, if any, to expand.
};

apiInstance.getContentmanagementWorkspaces(opts)
  .then((data) => {
    console.log(`getContentmanagementWorkspaces success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getContentmanagementWorkspaces');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **pageSize** | **Number** | Page size | [optional] [default to 25] |
 **pageNumber** | **Number** | Page number | [optional] [default to 1] |
 **access** | **[String]** | Requested access level. | [optional] <br />**Values**: content, admin, document:create, document:viewContent, document:viewMetadata, document:download, document:delete, document:update, document:share, document:shareView, document:email, document:print, document:auditView, document:replace, document:tag, tag:create, tag:view, tag:update, tag:apply, tag:remove, tag:delete |
 **expand** | **[String]** | Which fields, if any, to expand. | [optional] <br />**Values**: summary, acl |

### Return type

**WorkspaceEntityListing**


## postContentmanagementDocument

> Document postContentmanagementDocument(documentId, body, opts)


POST /api/v2/contentmanagement/documents/{documentId}

Update a document.

Requires ANY permissions:

* content_management_user

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.ContentManagementApi();

let documentId = "documentId_example"; // String | Document ID
let body = {}; // Object | Document
let opts = { 
  'expand': "expand_example", // String | Expand some document fields
  'override': true // Boolean | Override any lock on the document
};

apiInstance.postContentmanagementDocument(documentId, body, opts)
  .then((data) => {
    console.log(`postContentmanagementDocument success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling postContentmanagementDocument');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **documentId** | **String** | Document ID |  |
 **body** | **Object** | Document |  |
 **expand** | **String** | Expand some document fields | [optional] <br />**Values**: acl |
 **override** | **Boolean** | Override any lock on the document | [optional]  |

### Return type

**Document**


## postContentmanagementDocumentContent

> ReplaceResponse postContentmanagementDocumentContent(documentId, body, opts)


POST /api/v2/contentmanagement/documents/{documentId}/content

Replace the contents of a document.

Requires ANY permissions:

* content_management_user

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.ContentManagementApi();

let documentId = "documentId_example"; // String | Document ID
let body = {}; // Object | Replace Request
let opts = { 
  'override': true // Boolean | Override any lock on the document
};

apiInstance.postContentmanagementDocumentContent(documentId, body, opts)
  .then((data) => {
    console.log(`postContentmanagementDocumentContent success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling postContentmanagementDocumentContent');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **documentId** | **String** | Document ID |  |
 **body** | **Object** | Replace Request |  |
 **override** | **Boolean** | Override any lock on the document | [optional]  |

### Return type

**ReplaceResponse**


## postContentmanagementDocuments

> Document postContentmanagementDocuments(body, opts)


POST /api/v2/contentmanagement/documents

Add a document.

Requires NO permissions:

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.ContentManagementApi();

let body = {}; // Object | Document
let opts = { 
  'copySource': "copySource_example", // String | Copy a document within a workspace or to a new workspace. Provide a document ID as the copy source.
  'moveSource': "moveSource_example", // String | Move a document to a new workspace. Provide a document ID as the move source.
  'override': true // Boolean | Override any lock on the source document
};

apiInstance.postContentmanagementDocuments(body, opts)
  .then((data) => {
    console.log(`postContentmanagementDocuments success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling postContentmanagementDocuments');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **body** | **Object** | Document |  |
 **copySource** | **String** | Copy a document within a workspace or to a new workspace. Provide a document ID as the copy source. | [optional]  |
 **moveSource** | **String** | Move a document to a new workspace. Provide a document ID as the move source. | [optional]  |
 **override** | **Boolean** | Override any lock on the source document | [optional]  |

### Return type

**Document**


## postContentmanagementQuery

> QueryResults postContentmanagementQuery(body, opts)


POST /api/v2/contentmanagement/query

Query content

Requires NO permissions:

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.ContentManagementApi();

let body = {}; // Object | Allows for a filtered query returning facet information
let opts = { 
  'expand': "expand_example" // String | Expand some document fields
};

apiInstance.postContentmanagementQuery(body, opts)
  .then((data) => {
    console.log(`postContentmanagementQuery success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling postContentmanagementQuery');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **body** | **Object** | Allows for a filtered query returning facet information |  |
 **expand** | **String** | Expand some document fields | [optional] <br />**Values**: acl, workspace |

### Return type

**QueryResults**


## postContentmanagementShares

> CreateShareResponse postContentmanagementShares(body)


POST /api/v2/contentmanagement/shares

Creates a new share or updates an existing share if the entity has already been shared

Requires NO permissions:

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.ContentManagementApi();

let body = {}; // Object | CreateShareRequest - entity id and type and a single member or list of members are required

apiInstance.postContentmanagementShares(body)
  .then((data) => {
    console.log(`postContentmanagementShares success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling postContentmanagementShares');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **body** | **Object** | CreateShareRequest - entity id and type and a single member or list of members are required |  |

### Return type

**CreateShareResponse**


## postContentmanagementWorkspaceTagvalues

> TagValue postContentmanagementWorkspaceTagvalues(workspaceId, body)


POST /api/v2/contentmanagement/workspaces/{workspaceId}/tagvalues

Create a workspace tag

Requires NO permissions:

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.ContentManagementApi();

let workspaceId = "workspaceId_example"; // String | Workspace ID
let body = {}; // Object | tag

apiInstance.postContentmanagementWorkspaceTagvalues(workspaceId, body)
  .then((data) => {
    console.log(`postContentmanagementWorkspaceTagvalues success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling postContentmanagementWorkspaceTagvalues');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **workspaceId** | **String** | Workspace ID |  |
 **body** | **Object** | tag |  |

### Return type

**TagValue**


## postContentmanagementWorkspaceTagvaluesQuery

> TagValueEntityListing postContentmanagementWorkspaceTagvaluesQuery(workspaceId, body, opts)


POST /api/v2/contentmanagement/workspaces/{workspaceId}/tagvalues/query

Perform a prefix query on tags in the workspace

Requires NO permissions:

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.ContentManagementApi();

let workspaceId = "workspaceId_example"; // String | Workspace ID
let body = {}; // Object | query
let opts = { 
  'expand': ["expand_example"] // [String] | Which fields, if any, to expand.
};

apiInstance.postContentmanagementWorkspaceTagvaluesQuery(workspaceId, body, opts)
  .then((data) => {
    console.log(`postContentmanagementWorkspaceTagvaluesQuery success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling postContentmanagementWorkspaceTagvaluesQuery');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **workspaceId** | **String** | Workspace ID |  |
 **body** | **Object** | query |  |
 **expand** | **[String]** | Which fields, if any, to expand. | [optional] <br />**Values**: acl |

### Return type

**TagValueEntityListing**


## postContentmanagementWorkspaces

> Workspace postContentmanagementWorkspaces(body)


POST /api/v2/contentmanagement/workspaces

Create a group workspace

Requires NO permissions:

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.ContentManagementApi();

let body = {}; // Object | Workspace

apiInstance.postContentmanagementWorkspaces(body)
  .then((data) => {
    console.log(`postContentmanagementWorkspaces success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling postContentmanagementWorkspaces');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **body** | **Object** | Workspace |  |

### Return type

**Workspace**


## putContentmanagementWorkspace

> Workspace putContentmanagementWorkspace(workspaceId, body)


PUT /api/v2/contentmanagement/workspaces/{workspaceId}

Update a workspace

Requires NO permissions:

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.ContentManagementApi();

let workspaceId = "workspaceId_example"; // String | Workspace ID
let body = {}; // Object | Workspace

apiInstance.putContentmanagementWorkspace(workspaceId, body)
  .then((data) => {
    console.log(`putContentmanagementWorkspace success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling putContentmanagementWorkspace');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **workspaceId** | **String** | Workspace ID |  |
 **body** | **Object** | Workspace |  |

### Return type

**Workspace**


## putContentmanagementWorkspaceMember

> WorkspaceMember putContentmanagementWorkspaceMember(workspaceId, memberId, body)


PUT /api/v2/contentmanagement/workspaces/{workspaceId}/members/{memberId}

Add a member to a workspace

Requires NO permissions:

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.ContentManagementApi();

let workspaceId = "workspaceId_example"; // String | Workspace ID
let memberId = "memberId_example"; // String | Member ID
let body = {}; // Object | Workspace Member

apiInstance.putContentmanagementWorkspaceMember(workspaceId, memberId, body)
  .then((data) => {
    console.log(`putContentmanagementWorkspaceMember success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling putContentmanagementWorkspaceMember');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **workspaceId** | **String** | Workspace ID |  |
 **memberId** | **String** | Member ID |  |
 **body** | **Object** | Workspace Member |  |

### Return type

**WorkspaceMember**


## putContentmanagementWorkspaceTagvalue

> TagValue putContentmanagementWorkspaceTagvalue(workspaceId, tagId, body)


PUT /api/v2/contentmanagement/workspaces/{workspaceId}/tagvalues/{tagId}

Update a workspace tag. Will update all documents with the new tag value.

Requires NO permissions:

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.ContentManagementApi();

let workspaceId = "workspaceId_example"; // String | Workspace ID
let tagId = "tagId_example"; // String | Tag ID
let body = {}; // Object | Workspace

apiInstance.putContentmanagementWorkspaceTagvalue(workspaceId, tagId, body)
  .then((data) => {
    console.log(`putContentmanagementWorkspaceTagvalue success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling putContentmanagementWorkspaceTagvalue');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **workspaceId** | **String** | Workspace ID |  |
 **tagId** | **String** | Tag ID |  |
 **body** | **Object** | Workspace |  |

### Return type

**TagValue**


_purecloud-platform-client-v2@229.1.0_
