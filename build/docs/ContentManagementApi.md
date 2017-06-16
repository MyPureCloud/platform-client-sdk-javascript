---
title: ContentManagementApi
---
# platformClient.ContentManagementApi

All URIs are relative to *https://api.mypurecloud.com*

| Method | HTTP request | Description |
| ------------- | ------------- | ------------- |
[**deleteContentmanagementDocument**](ContentManagementApi.html#deleteContentmanagementDocument) | **DELETE** /api/v2/contentmanagement/documents/{documentId} | Delete a document.
[**deleteContentmanagementShare**](ContentManagementApi.html#deleteContentmanagementShare) | **DELETE** /api/v2/contentmanagement/shares/{shareId} | Deletes an existing share.
[**deleteContentmanagementStatusStatusId**](ContentManagementApi.html#deleteContentmanagementStatusStatusId) | **DELETE** /api/v2/contentmanagement/status/{statusId} | Cancel the command for this status
[**deleteContentmanagementWorkspace**](ContentManagementApi.html#deleteContentmanagementWorkspace) | **DELETE** /api/v2/contentmanagement/workspaces/{workspaceId} | Delete a workspace
[**deleteContentmanagementWorkspaceMember**](ContentManagementApi.html#deleteContentmanagementWorkspaceMember) | **DELETE** /api/v2/contentmanagement/workspaces/{workspaceId}/members/{memberId} | Delete a member from a workspace
[**deleteContentmanagementWorkspaceTagvalue**](ContentManagementApi.html#deleteContentmanagementWorkspaceTagvalue) | **DELETE** /api/v2/contentmanagement/workspaces/{workspaceId}/tagvalues/{tagId} | Delete workspace tag
[**getContentmanagementDocument**](ContentManagementApi.html#getContentmanagementDocument) | **GET** /api/v2/contentmanagement/documents/{documentId} | Get a document.
[**getContentmanagementDocumentAudits**](ContentManagementApi.html#getContentmanagementDocumentAudits) | **GET** /api/v2/contentmanagement/documents/{documentId}/audits | Get a list of audits for a document.
[**getContentmanagementDocumentContent**](ContentManagementApi.html#getContentmanagementDocumentContent) | **GET** /api/v2/contentmanagement/documents/{documentId}/content | Download a document.
[**getContentmanagementDocuments**](ContentManagementApi.html#getContentmanagementDocuments) | **GET** /api/v2/contentmanagement/documents | Get a list of documents.
[**getContentmanagementQuery**](ContentManagementApi.html#getContentmanagementQuery) | **GET** /api/v2/contentmanagement/query | Query content
[**getContentmanagementSecurityprofile**](ContentManagementApi.html#getContentmanagementSecurityprofile) | **GET** /api/v2/contentmanagement/securityprofiles/{securityProfileId} | Get a Security Profile
[**getContentmanagementSecurityprofiles**](ContentManagementApi.html#getContentmanagementSecurityprofiles) | **GET** /api/v2/contentmanagement/securityprofiles | Get a List of Security Profiles
[**getContentmanagementShare**](ContentManagementApi.html#getContentmanagementShare) | **GET** /api/v2/contentmanagement/shares/{shareId} | Retrieve details about an existing share.
[**getContentmanagementSharedSharedId**](ContentManagementApi.html#getContentmanagementSharedSharedId) | **GET** /api/v2/contentmanagement/shared/{sharedId} | Get shared documents. Securely download a shared document.
[**getContentmanagementShares**](ContentManagementApi.html#getContentmanagementShares) | **GET** /api/v2/contentmanagement/shares | Gets a list of shares.  You must specify at least one filter (e.g. entityId).
[**getContentmanagementStatus**](ContentManagementApi.html#getContentmanagementStatus) | **GET** /api/v2/contentmanagement/status | Get a list of statuses for pending operations
[**getContentmanagementStatusStatusId**](ContentManagementApi.html#getContentmanagementStatusStatusId) | **GET** /api/v2/contentmanagement/status/{statusId} | Get a status.
[**getContentmanagementUsage**](ContentManagementApi.html#getContentmanagementUsage) | **GET** /api/v2/contentmanagement/usage | Get usage details.
[**getContentmanagementWorkspace**](ContentManagementApi.html#getContentmanagementWorkspace) | **GET** /api/v2/contentmanagement/workspaces/{workspaceId} | Get a workspace.
[**getContentmanagementWorkspaceDocuments**](ContentManagementApi.html#getContentmanagementWorkspaceDocuments) | **GET** /api/v2/contentmanagement/workspaces/{workspaceId}/documents | Get a list of documents.
[**getContentmanagementWorkspaceMember**](ContentManagementApi.html#getContentmanagementWorkspaceMember) | **GET** /api/v2/contentmanagement/workspaces/{workspaceId}/members/{memberId} | Get a workspace member
[**getContentmanagementWorkspaceMembers**](ContentManagementApi.html#getContentmanagementWorkspaceMembers) | **GET** /api/v2/contentmanagement/workspaces/{workspaceId}/members | Get a list workspace members
[**getContentmanagementWorkspaceTagvalue**](ContentManagementApi.html#getContentmanagementWorkspaceTagvalue) | **GET** /api/v2/contentmanagement/workspaces/{workspaceId}/tagvalues/{tagId} | Get a workspace tag
[**getContentmanagementWorkspaceTagvalues**](ContentManagementApi.html#getContentmanagementWorkspaceTagvalues) | **GET** /api/v2/contentmanagement/workspaces/{workspaceId}/tagvalues | Get a list of workspace tags
[**getContentmanagementWorkspaces**](ContentManagementApi.html#getContentmanagementWorkspaces) | **GET** /api/v2/contentmanagement/workspaces | Get a list of workspaces.
[**postContentmanagementAuditquery**](ContentManagementApi.html#postContentmanagementAuditquery) | **POST** /api/v2/contentmanagement/auditquery | Query audits
[**postContentmanagementDocument**](ContentManagementApi.html#postContentmanagementDocument) | **POST** /api/v2/contentmanagement/documents/{documentId} | Update a document.
[**postContentmanagementDocumentContent**](ContentManagementApi.html#postContentmanagementDocumentContent) | **POST** /api/v2/contentmanagement/documents/{documentId}/content | Replace the contents of a document.
[**postContentmanagementDocuments**](ContentManagementApi.html#postContentmanagementDocuments) | **POST** /api/v2/contentmanagement/documents | Add a document.
[**postContentmanagementQuery**](ContentManagementApi.html#postContentmanagementQuery) | **POST** /api/v2/contentmanagement/query | Query content
[**postContentmanagementShares**](ContentManagementApi.html#postContentmanagementShares) | **POST** /api/v2/contentmanagement/shares | Creates a new share or updates an existing share if the entity has already been shared
[**postContentmanagementWorkspaceTagvalues**](ContentManagementApi.html#postContentmanagementWorkspaceTagvalues) | **POST** /api/v2/contentmanagement/workspaces/{workspaceId}/tagvalues | Create a workspace tag
[**postContentmanagementWorkspaceTagvaluesQuery**](ContentManagementApi.html#postContentmanagementWorkspaceTagvaluesQuery) | **POST** /api/v2/contentmanagement/workspaces/{workspaceId}/tagvalues/query | Perform a prefix query on tags in the workspace
[**postContentmanagementWorkspaces**](ContentManagementApi.html#postContentmanagementWorkspaces) | **POST** /api/v2/contentmanagement/workspaces | Create a group workspace
[**putContentmanagementWorkspace**](ContentManagementApi.html#putContentmanagementWorkspace) | **PUT** /api/v2/contentmanagement/workspaces/{workspaceId} | Update a workspace
[**putContentmanagementWorkspaceMember**](ContentManagementApi.html#putContentmanagementWorkspaceMember) | **PUT** /api/v2/contentmanagement/workspaces/{workspaceId}/members/{memberId} | Add a member to a workspace
[**putContentmanagementWorkspaceTagvalue**](ContentManagementApi.html#putContentmanagementWorkspaceTagvalue) | **PUT** /api/v2/contentmanagement/workspaces/{workspaceId}/tagvalues/{tagId} | Update a workspace tag. Will update all documents with the new tag value.
{: class="table table-striped"}

<a name="deleteContentmanagementDocument"></a>

# null deleteContentmanagementDocument(documentId, opts)

DELETE /api/v2/contentmanagement/documents/{documentId}

Delete a document.



### Example

~~~ javascript
const platformClient = require('purecloud-platform-client-v2');

// Configure OAuth2 access token for authorization: PureCloud Auth
platformClient.ApiClient.instance.authentications['PureCloud Auth'].accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new platformClient.ContentManagementApi();

var documentId = "documentId_example"; // String | Document ID

var opts = { 
  'override': true // Boolean | Override any lock on the document
};
apiInstance.deleteContentmanagementDocument(documentId, opts)
  .then(function() {
    console.log('deleteContentmanagementDocument returned successfully.');
  })
  .catch(function(error) {
  	console.log('There was a failure calling deleteContentmanagementDocument');
    console.error(error);
  });

~~~

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **documentId** | **String**| Document ID |  |
 **override** | **Boolean**| Override any lock on the document | [optional]  |
{: class="table table-striped"}

### Return type

null (empty response body)

<a name="deleteContentmanagementShare"></a>

# null deleteContentmanagementShare(shareId)

DELETE /api/v2/contentmanagement/shares/{shareId}

Deletes an existing share.

This revokes sharing rights specified in the share record

### Example

~~~ javascript
const platformClient = require('purecloud-platform-client-v2');

// Configure OAuth2 access token for authorization: PureCloud Auth
platformClient.ApiClient.instance.authentications['PureCloud Auth'].accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new platformClient.ContentManagementApi();

var shareId = "shareId_example"; // String | Share ID

apiInstance.deleteContentmanagementShare(shareId)
  .then(function() {
    console.log('deleteContentmanagementShare returned successfully.');
  })
  .catch(function(error) {
  	console.log('There was a failure calling deleteContentmanagementShare');
    console.error(error);
  });

~~~

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **shareId** | **String**| Share ID |  |
{: class="table table-striped"}

### Return type

null (empty response body)

<a name="deleteContentmanagementStatusStatusId"></a>

# null deleteContentmanagementStatusStatusId(statusId)

DELETE /api/v2/contentmanagement/status/{statusId}

Cancel the command for this status



### Example

~~~ javascript
const platformClient = require('purecloud-platform-client-v2');

// Configure OAuth2 access token for authorization: PureCloud Auth
platformClient.ApiClient.instance.authentications['PureCloud Auth'].accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new platformClient.ContentManagementApi();

var statusId = "statusId_example"; // String | Status ID

apiInstance.deleteContentmanagementStatusStatusId(statusId)
  .then(function() {
    console.log('deleteContentmanagementStatusStatusId returned successfully.');
  })
  .catch(function(error) {
  	console.log('There was a failure calling deleteContentmanagementStatusStatusId');
    console.error(error);
  });

~~~

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **statusId** | **String**| Status ID |  |
{: class="table table-striped"}

### Return type

null (empty response body)

<a name="deleteContentmanagementWorkspace"></a>

# null deleteContentmanagementWorkspace(workspaceId, opts)

DELETE /api/v2/contentmanagement/workspaces/{workspaceId}

Delete a workspace



### Example

~~~ javascript
const platformClient = require('purecloud-platform-client-v2');

// Configure OAuth2 access token for authorization: PureCloud Auth
platformClient.ApiClient.instance.authentications['PureCloud Auth'].accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new platformClient.ContentManagementApi();

var workspaceId = "workspaceId_example"; // String | Workspace ID

var opts = { 
  'moveChildrenToWorkspaceId': "moveChildrenToWorkspaceId_example" // String | New location for objects in deleted workspace.
};
apiInstance.deleteContentmanagementWorkspace(workspaceId, opts)
  .then(function() {
    console.log('deleteContentmanagementWorkspace returned successfully.');
  })
  .catch(function(error) {
  	console.log('There was a failure calling deleteContentmanagementWorkspace');
    console.error(error);
  });

~~~

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **workspaceId** | **String**| Workspace ID |  |
 **moveChildrenToWorkspaceId** | **String**| New location for objects in deleted workspace. | [optional]  |
{: class="table table-striped"}

### Return type

null (empty response body)

<a name="deleteContentmanagementWorkspaceMember"></a>

# null deleteContentmanagementWorkspaceMember(workspaceId, memberId)

DELETE /api/v2/contentmanagement/workspaces/{workspaceId}/members/{memberId}

Delete a member from a workspace



### Example

~~~ javascript
const platformClient = require('purecloud-platform-client-v2');

// Configure OAuth2 access token for authorization: PureCloud Auth
platformClient.ApiClient.instance.authentications['PureCloud Auth'].accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new platformClient.ContentManagementApi();

var workspaceId = "workspaceId_example"; // String | Workspace ID

var memberId = "memberId_example"; // String | Member ID

apiInstance.deleteContentmanagementWorkspaceMember(workspaceId, memberId)
  .then(function() {
    console.log('deleteContentmanagementWorkspaceMember returned successfully.');
  })
  .catch(function(error) {
  	console.log('There was a failure calling deleteContentmanagementWorkspaceMember');
    console.error(error);
  });

~~~

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **workspaceId** | **String**| Workspace ID |  |
 **memberId** | **String**| Member ID |  |
{: class="table table-striped"}

### Return type

null (empty response body)

<a name="deleteContentmanagementWorkspaceTagvalue"></a>

# null deleteContentmanagementWorkspaceTagvalue(workspaceId, tagId)

DELETE /api/v2/contentmanagement/workspaces/{workspaceId}/tagvalues/{tagId}

Delete workspace tag

Delete a tag from a workspace. Will remove this tag from all documents.

### Example

~~~ javascript
const platformClient = require('purecloud-platform-client-v2');

// Configure OAuth2 access token for authorization: PureCloud Auth
platformClient.ApiClient.instance.authentications['PureCloud Auth'].accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new platformClient.ContentManagementApi();

var workspaceId = "workspaceId_example"; // String | Workspace ID

var tagId = "tagId_example"; // String | Tag ID

apiInstance.deleteContentmanagementWorkspaceTagvalue(workspaceId, tagId)
  .then(function() {
    console.log('deleteContentmanagementWorkspaceTagvalue returned successfully.');
  })
  .catch(function(error) {
  	console.log('There was a failure calling deleteContentmanagementWorkspaceTagvalue');
    console.error(error);
  });

~~~

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **workspaceId** | **String**| Workspace ID |  |
 **tagId** | **String**| Tag ID |  |
{: class="table table-striped"}

### Return type

null (empty response body)

<a name="getContentmanagementDocument"></a>

# [**Document**](Document.html) getContentmanagementDocument(documentId, opts)

GET /api/v2/contentmanagement/documents/{documentId}

Get a document.



### Example

~~~ javascript
const platformClient = require('purecloud-platform-client-v2');

// Configure OAuth2 access token for authorization: PureCloud Auth
platformClient.ApiClient.instance.authentications['PureCloud Auth'].accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new platformClient.ContentManagementApi();

var documentId = "documentId_example"; // String | Document ID

var opts = { 
  'expand': ["expand_example"] // [String] | Which fields, if any, to expand.
};
apiInstance.getContentmanagementDocument(documentId, opts)
  .then(function(data) {
    console.log(`getContentmanagementDocument success! data: ${data}`);
  })
  .catch(function(error) {
  	console.log('There was a failure calling getContentmanagementDocument');
    console.error(error);
  });

~~~

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **documentId** | **String**| Document ID |  |
 **expand** | [**[String]**](String.html)| Which fields, if any, to expand. | [optional] <br />**Values**: lockInfo, acl, workspace |
{: class="table table-striped"}

### Return type

[**Document**](Document.html)

<a name="getContentmanagementDocumentAudits"></a>

# [**DocumentAuditEntityListing**](DocumentAuditEntityListing.html) getContentmanagementDocumentAudits(documentId, opts)

GET /api/v2/contentmanagement/documents/{documentId}/audits

Get a list of audits for a document.



### Example

~~~ javascript
const platformClient = require('purecloud-platform-client-v2');

// Configure OAuth2 access token for authorization: PureCloud Auth
platformClient.ApiClient.instance.authentications['PureCloud Auth'].accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new platformClient.ContentManagementApi();

var documentId = "documentId_example"; // String | Document ID

var opts = { 
  'pageSize': 25, // Number | Page size
  'pageNumber': 1, // Number | Page number
  'transactionFilter': "transactionFilter_example", // String | Transaction filter
  'level': "USER", // String | level
  'sortBy': "sortBy_example", // String | Sort by
  'sortOrder': "ascending" // String | Sort order
};
apiInstance.getContentmanagementDocumentAudits(documentId, opts)
  .then(function(data) {
    console.log(`getContentmanagementDocumentAudits success! data: ${data}`);
  })
  .catch(function(error) {
  	console.log('There was a failure calling getContentmanagementDocumentAudits');
    console.error(error);
  });

~~~

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **documentId** | **String**| Document ID |  |
 **pageSize** | **Number**| Page size | [optional] [default to 25] |
 **pageNumber** | **Number**| Page number | [optional] [default to 1] |
 **transactionFilter** | **String**| Transaction filter | [optional]  |
 **level** | **String**| level | [optional] [default to USER] |
 **sortBy** | **String**| Sort by | [optional]  |
 **sortOrder** | **String**| Sort order | [optional] [default to ascending] |
{: class="table table-striped"}

### Return type

[**DocumentAuditEntityListing**](DocumentAuditEntityListing.html)

<a name="getContentmanagementDocumentContent"></a>

# [**DownloadResponse**](DownloadResponse.html) getContentmanagementDocumentContent(documentId, opts)

GET /api/v2/contentmanagement/documents/{documentId}/content

Download a document.



### Example

~~~ javascript
const platformClient = require('purecloud-platform-client-v2');

// Configure OAuth2 access token for authorization: PureCloud Auth
platformClient.ApiClient.instance.authentications['PureCloud Auth'].accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new platformClient.ContentManagementApi();

var documentId = "documentId_example"; // String | Document ID

var opts = { 
  'disposition': "disposition_example", // String | Request how the content will be downloaded: a file attachment or inline. Default is attachment.
  'contentType': "contentType_example" // String | The requested format for the specified document. If supported, the document will be returned in that format. Example contentType=audio/wav
};
apiInstance.getContentmanagementDocumentContent(documentId, opts)
  .then(function(data) {
    console.log(`getContentmanagementDocumentContent success! data: ${data}`);
  })
  .catch(function(error) {
  	console.log('There was a failure calling getContentmanagementDocumentContent');
    console.error(error);
  });

~~~

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **documentId** | **String**| Document ID |  |
 **disposition** | **String**| Request how the content will be downloaded: a file attachment or inline. Default is attachment. | [optional] <br />**Values**: attachment, inline |
 **contentType** | **String**| The requested format for the specified document. If supported, the document will be returned in that format. Example contentType=audio/wav | [optional]  |
{: class="table table-striped"}

### Return type

[**DownloadResponse**](DownloadResponse.html)

<a name="getContentmanagementDocuments"></a>

# [**DocumentEntityListing**](DocumentEntityListing.html) getContentmanagementDocuments(workspaceId, opts)

GET /api/v2/contentmanagement/documents

Get a list of documents.



### Example

~~~ javascript
const platformClient = require('purecloud-platform-client-v2');

// Configure OAuth2 access token for authorization: PureCloud Auth
platformClient.ApiClient.instance.authentications['PureCloud Auth'].accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new platformClient.ContentManagementApi();

var workspaceId = "workspaceId_example"; // String | Workspace ID

var opts = { 
  'name': "name_example", // String | Name
  'expand': ["expand_example"], // [String] | Which fields, if any, to expand.
  'pageSize': 25, // Number | Page size
  'pageNumber': 1, // Number | Page number
  'sortBy': "sortBy_example", // String | name or dateCreated
  'sortOrder': "ascending" // String | ascending or descending
};
apiInstance.getContentmanagementDocuments(workspaceId, opts)
  .then(function(data) {
    console.log(`getContentmanagementDocuments success! data: ${data}`);
  })
  .catch(function(error) {
  	console.log('There was a failure calling getContentmanagementDocuments');
    console.error(error);
  });

~~~

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **workspaceId** | **String**| Workspace ID |  |
 **name** | **String**| Name | [optional]  |
 **expand** | [**[String]**](String.html)| Which fields, if any, to expand. | [optional] <br />**Values**: acl, workspace |
 **pageSize** | **Number**| Page size | [optional] [default to 25] |
 **pageNumber** | **Number**| Page number | [optional] [default to 1] |
 **sortBy** | **String**| name or dateCreated | [optional]  |
 **sortOrder** | **String**| ascending or descending | [optional] [default to ascending] |
{: class="table table-striped"}

### Return type

[**DocumentEntityListing**](DocumentEntityListing.html)

<a name="getContentmanagementQuery"></a>

# [**QueryResults**](QueryResults.html) getContentmanagementQuery(queryPhrase, opts)

GET /api/v2/contentmanagement/query

Query content



### Example

~~~ javascript
const platformClient = require('purecloud-platform-client-v2');

// Configure OAuth2 access token for authorization: PureCloud Auth
platformClient.ApiClient.instance.authentications['PureCloud Auth'].accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new platformClient.ContentManagementApi();

var queryPhrase = "queryPhrase_example"; // String | Phrase tokens are ANDed together over all searchable fields

var opts = { 
  'pageSize': 25, // Number | Page size
  'pageNumber': 1, // Number | Page number
  'sortBy': "name", // String | name or dateCreated
  'sortOrder': "ascending", // String | ascending or descending
  'expand': ["expand_example"] // [String] | Which fields, if any, to expand.
};
apiInstance.getContentmanagementQuery(queryPhrase, opts)
  .then(function(data) {
    console.log(`getContentmanagementQuery success! data: ${data}`);
  })
  .catch(function(error) {
  	console.log('There was a failure calling getContentmanagementQuery');
    console.error(error);
  });

~~~

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **queryPhrase** | **String**| Phrase tokens are ANDed together over all searchable fields |  |
 **pageSize** | **Number**| Page size | [optional] [default to 25] |
 **pageNumber** | **Number**| Page number | [optional] [default to 1] |
 **sortBy** | **String**| name or dateCreated | [optional] [default to name] |
 **sortOrder** | **String**| ascending or descending | [optional] [default to ascending] |
 **expand** | [**[String]**](String.html)| Which fields, if any, to expand. | [optional] <br />**Values**: acl, workspace |
{: class="table table-striped"}

### Return type

[**QueryResults**](QueryResults.html)

<a name="getContentmanagementSecurityprofile"></a>

# [**SecurityProfile**](SecurityProfile.html) getContentmanagementSecurityprofile(securityProfileId)

GET /api/v2/contentmanagement/securityprofiles/{securityProfileId}

Get a Security Profile



### Example

~~~ javascript
const platformClient = require('purecloud-platform-client-v2');

// Configure OAuth2 access token for authorization: PureCloud Auth
platformClient.ApiClient.instance.authentications['PureCloud Auth'].accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new platformClient.ContentManagementApi();

var securityProfileId = "securityProfileId_example"; // String | Security Profile Id

apiInstance.getContentmanagementSecurityprofile(securityProfileId)
  .then(function(data) {
    console.log(`getContentmanagementSecurityprofile success! data: ${data}`);
  })
  .catch(function(error) {
  	console.log('There was a failure calling getContentmanagementSecurityprofile');
    console.error(error);
  });

~~~

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **securityProfileId** | **String**| Security Profile Id |  |
{: class="table table-striped"}

### Return type

[**SecurityProfile**](SecurityProfile.html)

<a name="getContentmanagementSecurityprofiles"></a>

# [**SecurityProfileEntityListing**](SecurityProfileEntityListing.html) getContentmanagementSecurityprofiles()

GET /api/v2/contentmanagement/securityprofiles

Get a List of Security Profiles



### Example

~~~ javascript
const platformClient = require('purecloud-platform-client-v2');

// Configure OAuth2 access token for authorization: PureCloud Auth
platformClient.ApiClient.instance.authentications['PureCloud Auth'].accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new platformClient.ContentManagementApi();
apiInstance.getContentmanagementSecurityprofiles()
  .then(function(data) {
    console.log(`getContentmanagementSecurityprofiles success! data: ${data}`);
  })
  .catch(function(error) {
  	console.log('There was a failure calling getContentmanagementSecurityprofiles');
    console.error(error);
  });

~~~

### Parameters

This endpoint does not need any parameter.
{: class="table table-striped"}

### Return type

[**SecurityProfileEntityListing**](SecurityProfileEntityListing.html)

<a name="getContentmanagementShare"></a>

# [**Share**](Share.html) getContentmanagementShare(shareId, opts)

GET /api/v2/contentmanagement/shares/{shareId}

Retrieve details about an existing share.



### Example

~~~ javascript
const platformClient = require('purecloud-platform-client-v2');

// Configure OAuth2 access token for authorization: PureCloud Auth
platformClient.ApiClient.instance.authentications['PureCloud Auth'].accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new platformClient.ContentManagementApi();

var shareId = "shareId_example"; // String | Share ID

var opts = { 
  'expand': ["expand_example"] // [String] | Which fields, if any, to expand.
};
apiInstance.getContentmanagementShare(shareId, opts)
  .then(function(data) {
    console.log(`getContentmanagementShare success! data: ${data}`);
  })
  .catch(function(error) {
  	console.log('There was a failure calling getContentmanagementShare');
    console.error(error);
  });

~~~

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **shareId** | **String**| Share ID |  |
 **expand** | [**[String]**](String.html)| Which fields, if any, to expand. | [optional] <br />**Values**: member |
{: class="table table-striped"}

### Return type

[**Share**](Share.html)

<a name="getContentmanagementSharedSharedId"></a>

# [**SharedResponse**](SharedResponse.html) getContentmanagementSharedSharedId(sharedId, opts)

GET /api/v2/contentmanagement/shared/{sharedId}

Get shared documents. Securely download a shared document.

This method requires the download sharing URI obtained in the get document response (downloadSharingUri). Documents may be shared between users in the same workspace. Documents may also be shared between any user by creating a content management share.

### Example

~~~ javascript
const platformClient = require('purecloud-platform-client-v2');

// Configure OAuth2 access token for authorization: PureCloud Auth
platformClient.ApiClient.instance.authentications['PureCloud Auth'].accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new platformClient.ContentManagementApi();

var sharedId = "sharedId_example"; // String | Shared ID

var opts = { 
  'redirect': true, // Boolean | Turn on or off redirect
  'disposition': "attachment", // String | Request how the share content will be downloaded: attached as a file or inline. Default is attachment.
  'contentType': "contentType_example", // String | The requested format for the specified document. If supported, the document will be returned in that format. Example contentType=audio/wav
  'expand': "expand_example" // String | Expand some document fields
};
apiInstance.getContentmanagementSharedSharedId(sharedId, opts)
  .then(function(data) {
    console.log(`getContentmanagementSharedSharedId success! data: ${data}`);
  })
  .catch(function(error) {
  	console.log('There was a failure calling getContentmanagementSharedSharedId');
    console.error(error);
  });

~~~

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **sharedId** | **String**| Shared ID |  |
 **redirect** | **Boolean**| Turn on or off redirect | [optional] [default to true] |
 **disposition** | **String**| Request how the share content will be downloaded: attached as a file or inline. Default is attachment. | [optional] [default to attachment]<br />**Values**: attachment, inline, none |
 **contentType** | **String**| The requested format for the specified document. If supported, the document will be returned in that format. Example contentType=audio/wav | [optional]  |
 **expand** | **String**| Expand some document fields | [optional] <br />**Values**: document.acl |
{: class="table table-striped"}

### Return type

[**SharedResponse**](SharedResponse.html)

<a name="getContentmanagementShares"></a>

# [**ShareEntityListing**](ShareEntityListing.html) getContentmanagementShares(opts)

GET /api/v2/contentmanagement/shares

Gets a list of shares.  You must specify at least one filter (e.g. entityId).

Failing to specify a filter will return 400.

### Example

~~~ javascript
const platformClient = require('purecloud-platform-client-v2');

// Configure OAuth2 access token for authorization: PureCloud Auth
platformClient.ApiClient.instance.authentications['PureCloud Auth'].accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new platformClient.ContentManagementApi();

var opts = { 
  'entityId': "entityId_example", // String | Filters the shares returned to only the entity specified by the value of this parameter.
  'expand': ["expand_example"], // [String] | Which fields, if any, to expand.
  'pageSize': 25, // Number | Page size
  'pageNumber': 1 // Number | Page number
};
apiInstance.getContentmanagementShares(opts)
  .then(function(data) {
    console.log(`getContentmanagementShares success! data: ${data}`);
  })
  .catch(function(error) {
  	console.log('There was a failure calling getContentmanagementShares');
    console.error(error);
  });

~~~

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **entityId** | **String**| Filters the shares returned to only the entity specified by the value of this parameter. | [optional]  |
 **expand** | [**[String]**](String.html)| Which fields, if any, to expand. | [optional] <br />**Values**: member |
 **pageSize** | **Number**| Page size | [optional] [default to 25] |
 **pageNumber** | **Number**| Page number | [optional] [default to 1] |
{: class="table table-striped"}

### Return type

[**ShareEntityListing**](ShareEntityListing.html)

<a name="getContentmanagementStatus"></a>

# [**CommandStatusEntityListing**](CommandStatusEntityListing.html) getContentmanagementStatus(opts)

GET /api/v2/contentmanagement/status

Get a list of statuses for pending operations



### Example

~~~ javascript
const platformClient = require('purecloud-platform-client-v2');

// Configure OAuth2 access token for authorization: PureCloud Auth
platformClient.ApiClient.instance.authentications['PureCloud Auth'].accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new platformClient.ContentManagementApi();

var opts = { 
  'pageSize': 25, // Number | Page size
  'pageNumber': 1 // Number | Page number
};
apiInstance.getContentmanagementStatus(opts)
  .then(function(data) {
    console.log(`getContentmanagementStatus success! data: ${data}`);
  })
  .catch(function(error) {
  	console.log('There was a failure calling getContentmanagementStatus');
    console.error(error);
  });

~~~

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **pageSize** | **Number**| Page size | [optional] [default to 25] |
 **pageNumber** | **Number**| Page number | [optional] [default to 1] |
{: class="table table-striped"}

### Return type

[**CommandStatusEntityListing**](CommandStatusEntityListing.html)

<a name="getContentmanagementStatusStatusId"></a>

# [**CommandStatus**](CommandStatus.html) getContentmanagementStatusStatusId(statusId)

GET /api/v2/contentmanagement/status/{statusId}

Get a status.



### Example

~~~ javascript
const platformClient = require('purecloud-platform-client-v2');

// Configure OAuth2 access token for authorization: PureCloud Auth
platformClient.ApiClient.instance.authentications['PureCloud Auth'].accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new platformClient.ContentManagementApi();

var statusId = "statusId_example"; // String | Status ID

apiInstance.getContentmanagementStatusStatusId(statusId)
  .then(function(data) {
    console.log(`getContentmanagementStatusStatusId success! data: ${data}`);
  })
  .catch(function(error) {
  	console.log('There was a failure calling getContentmanagementStatusStatusId');
    console.error(error);
  });

~~~

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **statusId** | **String**| Status ID |  |
{: class="table table-striped"}

### Return type

[**CommandStatus**](CommandStatus.html)

<a name="getContentmanagementUsage"></a>

# [**Usage**](Usage.html) getContentmanagementUsage()

GET /api/v2/contentmanagement/usage

Get usage details.



### Example

~~~ javascript
const platformClient = require('purecloud-platform-client-v2');

// Configure OAuth2 access token for authorization: PureCloud Auth
platformClient.ApiClient.instance.authentications['PureCloud Auth'].accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new platformClient.ContentManagementApi();
apiInstance.getContentmanagementUsage()
  .then(function(data) {
    console.log(`getContentmanagementUsage success! data: ${data}`);
  })
  .catch(function(error) {
  	console.log('There was a failure calling getContentmanagementUsage');
    console.error(error);
  });

~~~

### Parameters

This endpoint does not need any parameter.
{: class="table table-striped"}

### Return type

[**Usage**](Usage.html)

<a name="getContentmanagementWorkspace"></a>

# [**Workspace**](Workspace.html) getContentmanagementWorkspace(workspaceId, opts)

GET /api/v2/contentmanagement/workspaces/{workspaceId}

Get a workspace.



### Example

~~~ javascript
const platformClient = require('purecloud-platform-client-v2');

// Configure OAuth2 access token for authorization: PureCloud Auth
platformClient.ApiClient.instance.authentications['PureCloud Auth'].accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new platformClient.ContentManagementApi();

var workspaceId = "workspaceId_example"; // String | Workspace ID

var opts = { 
  'expand': ["expand_example"] // [String] | Which fields, if any, to expand.
};
apiInstance.getContentmanagementWorkspace(workspaceId, opts)
  .then(function(data) {
    console.log(`getContentmanagementWorkspace success! data: ${data}`);
  })
  .catch(function(error) {
  	console.log('There was a failure calling getContentmanagementWorkspace');
    console.error(error);
  });

~~~

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **workspaceId** | **String**| Workspace ID |  |
 **expand** | [**[String]**](String.html)| Which fields, if any, to expand. | [optional] <br />**Values**: summary, acl |
{: class="table table-striped"}

### Return type

[**Workspace**](Workspace.html)

<a name="getContentmanagementWorkspaceDocuments"></a>

# [**DocumentEntityListing**](DocumentEntityListing.html) getContentmanagementWorkspaceDocuments(workspaceId, opts)

GET /api/v2/contentmanagement/workspaces/{workspaceId}/documents

Get a list of documents.



### Example

~~~ javascript
const platformClient = require('purecloud-platform-client-v2');

// Configure OAuth2 access token for authorization: PureCloud Auth
platformClient.ApiClient.instance.authentications['PureCloud Auth'].accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new platformClient.ContentManagementApi();

var workspaceId = "workspaceId_example"; // String | Workspace ID

var opts = { 
  'expand': ["expand_example"], // [String] | Which fields, if any, to expand.
  'pageSize': 25, // Number | Page size
  'pageNumber': 1, // Number | Page number
  'sortBy': "sortBy_example", // String | name or dateCreated
  'sortOrder': "ascending" // String | ascending or descending
};
apiInstance.getContentmanagementWorkspaceDocuments(workspaceId, opts)
  .then(function(data) {
    console.log(`getContentmanagementWorkspaceDocuments success! data: ${data}`);
  })
  .catch(function(error) {
  	console.log('There was a failure calling getContentmanagementWorkspaceDocuments');
    console.error(error);
  });

~~~

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **workspaceId** | **String**| Workspace ID |  |
 **expand** | [**[String]**](String.html)| Which fields, if any, to expand. | [optional] <br />**Values**: acl, workspace |
 **pageSize** | **Number**| Page size | [optional] [default to 25] |
 **pageNumber** | **Number**| Page number | [optional] [default to 1] |
 **sortBy** | **String**| name or dateCreated | [optional]  |
 **sortOrder** | **String**| ascending or descending | [optional] [default to ascending] |
{: class="table table-striped"}

### Return type

[**DocumentEntityListing**](DocumentEntityListing.html)

<a name="getContentmanagementWorkspaceMember"></a>

# [**WorkspaceMember**](WorkspaceMember.html) getContentmanagementWorkspaceMember(workspaceId, memberId, opts)

GET /api/v2/contentmanagement/workspaces/{workspaceId}/members/{memberId}

Get a workspace member



### Example

~~~ javascript
const platformClient = require('purecloud-platform-client-v2');

// Configure OAuth2 access token for authorization: PureCloud Auth
platformClient.ApiClient.instance.authentications['PureCloud Auth'].accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new platformClient.ContentManagementApi();

var workspaceId = "workspaceId_example"; // String | Workspace ID

var memberId = "memberId_example"; // String | Member ID

var opts = { 
  'expand': ["expand_example"] // [String] | Which fields, if any, to expand.
};
apiInstance.getContentmanagementWorkspaceMember(workspaceId, memberId, opts)
  .then(function(data) {
    console.log(`getContentmanagementWorkspaceMember success! data: ${data}`);
  })
  .catch(function(error) {
  	console.log('There was a failure calling getContentmanagementWorkspaceMember');
    console.error(error);
  });

~~~

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **workspaceId** | **String**| Workspace ID |  |
 **memberId** | **String**| Member ID |  |
 **expand** | [**[String]**](String.html)| Which fields, if any, to expand. | [optional] <br />**Values**: member |
{: class="table table-striped"}

### Return type

[**WorkspaceMember**](WorkspaceMember.html)

<a name="getContentmanagementWorkspaceMembers"></a>

# [**WorkspaceMemberEntityListing**](WorkspaceMemberEntityListing.html) getContentmanagementWorkspaceMembers(workspaceId, opts)

GET /api/v2/contentmanagement/workspaces/{workspaceId}/members

Get a list workspace members



### Example

~~~ javascript
const platformClient = require('purecloud-platform-client-v2');

// Configure OAuth2 access token for authorization: PureCloud Auth
platformClient.ApiClient.instance.authentications['PureCloud Auth'].accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new platformClient.ContentManagementApi();

var workspaceId = "workspaceId_example"; // String | Workspace ID

var opts = { 
  'pageSize': 25, // Number | Page size
  'pageNumber': 1, // Number | Page number
  'expand': ["expand_example"] // [String] | Which fields, if any, to expand.
};
apiInstance.getContentmanagementWorkspaceMembers(workspaceId, opts)
  .then(function(data) {
    console.log(`getContentmanagementWorkspaceMembers success! data: ${data}`);
  })
  .catch(function(error) {
  	console.log('There was a failure calling getContentmanagementWorkspaceMembers');
    console.error(error);
  });

~~~

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **workspaceId** | **String**| Workspace ID |  |
 **pageSize** | **Number**| Page size | [optional] [default to 25] |
 **pageNumber** | **Number**| Page number | [optional] [default to 1] |
 **expand** | [**[String]**](String.html)| Which fields, if any, to expand. | [optional] <br />**Values**: member |
{: class="table table-striped"}

### Return type

[**WorkspaceMemberEntityListing**](WorkspaceMemberEntityListing.html)

<a name="getContentmanagementWorkspaceTagvalue"></a>

# [**TagValue**](TagValue.html) getContentmanagementWorkspaceTagvalue(workspaceId, tagId, opts)

GET /api/v2/contentmanagement/workspaces/{workspaceId}/tagvalues/{tagId}

Get a workspace tag



### Example

~~~ javascript
const platformClient = require('purecloud-platform-client-v2');

// Configure OAuth2 access token for authorization: PureCloud Auth
platformClient.ApiClient.instance.authentications['PureCloud Auth'].accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new platformClient.ContentManagementApi();

var workspaceId = "workspaceId_example"; // String | Workspace ID

var tagId = "tagId_example"; // String | Tag ID

var opts = { 
  'expand': ["expand_example"] // [String] | Which fields, if any, to expand.
};
apiInstance.getContentmanagementWorkspaceTagvalue(workspaceId, tagId, opts)
  .then(function(data) {
    console.log(`getContentmanagementWorkspaceTagvalue success! data: ${data}`);
  })
  .catch(function(error) {
  	console.log('There was a failure calling getContentmanagementWorkspaceTagvalue');
    console.error(error);
  });

~~~

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **workspaceId** | **String**| Workspace ID |  |
 **tagId** | **String**| Tag ID |  |
 **expand** | [**[String]**](String.html)| Which fields, if any, to expand. | [optional] <br />**Values**: acl |
{: class="table table-striped"}

### Return type

[**TagValue**](TagValue.html)

<a name="getContentmanagementWorkspaceTagvalues"></a>

# [**TagValueEntityListing**](TagValueEntityListing.html) getContentmanagementWorkspaceTagvalues(workspaceId, opts)

GET /api/v2/contentmanagement/workspaces/{workspaceId}/tagvalues

Get a list of workspace tags



### Example

~~~ javascript
const platformClient = require('purecloud-platform-client-v2');

// Configure OAuth2 access token for authorization: PureCloud Auth
platformClient.ApiClient.instance.authentications['PureCloud Auth'].accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new platformClient.ContentManagementApi();

var workspaceId = "workspaceId_example"; // String | Workspace ID

var opts = { 
  'value': "value_example", // String | filter the list of tags returned
  'pageSize': 25, // Number | Page size
  'pageNumber': 1, // Number | Page number
  'expand': ["expand_example"] // [String] | Which fields, if any, to expand.
};
apiInstance.getContentmanagementWorkspaceTagvalues(workspaceId, opts)
  .then(function(data) {
    console.log(`getContentmanagementWorkspaceTagvalues success! data: ${data}`);
  })
  .catch(function(error) {
  	console.log('There was a failure calling getContentmanagementWorkspaceTagvalues');
    console.error(error);
  });

~~~

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **workspaceId** | **String**| Workspace ID |  |
 **value** | **String**| filter the list of tags returned | [optional]  |
 **pageSize** | **Number**| Page size | [optional] [default to 25] |
 **pageNumber** | **Number**| Page number | [optional] [default to 1] |
 **expand** | [**[String]**](String.html)| Which fields, if any, to expand. | [optional] <br />**Values**: acl |
{: class="table table-striped"}

### Return type

[**TagValueEntityListing**](TagValueEntityListing.html)

<a name="getContentmanagementWorkspaces"></a>

# [**WorkspaceEntityListing**](WorkspaceEntityListing.html) getContentmanagementWorkspaces(opts)

GET /api/v2/contentmanagement/workspaces

Get a list of workspaces.

Specifying &#39;content&#39; access will return all workspaces the user has document access to, while &#39;admin&#39; access will return all group workspaces the user has administrative rights to.

### Example

~~~ javascript
const platformClient = require('purecloud-platform-client-v2');

// Configure OAuth2 access token for authorization: PureCloud Auth
platformClient.ApiClient.instance.authentications['PureCloud Auth'].accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new platformClient.ContentManagementApi();

var opts = { 
  'pageSize': 25, // Number | Page size
  'pageNumber': 1, // Number | Page number
  'access': ["access_example"], // [String] | Requested access level.
  'expand': ["expand_example"] // [String] | Which fields, if any, to expand.
};
apiInstance.getContentmanagementWorkspaces(opts)
  .then(function(data) {
    console.log(`getContentmanagementWorkspaces success! data: ${data}`);
  })
  .catch(function(error) {
  	console.log('There was a failure calling getContentmanagementWorkspaces');
    console.error(error);
  });

~~~

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **pageSize** | **Number**| Page size | [optional] [default to 25] |
 **pageNumber** | **Number**| Page number | [optional] [default to 1] |
 **access** | [**[String]**](String.html)| Requested access level. | [optional] <br />**Values**: content, admin, document:create, document:viewContent, document:viewMetadata, document:download, document:delete, document:update, document:share, document:shareView, document:email, document:print, document:auditView, document:replace, document:tag, tag:create, tag:view, tag:update, tag:apply, tag:remove, tag:delete |
 **expand** | [**[String]**](String.html)| Which fields, if any, to expand. | [optional] <br />**Values**: summary, acl |
{: class="table table-striped"}

### Return type

[**WorkspaceEntityListing**](WorkspaceEntityListing.html)

<a name="postContentmanagementAuditquery"></a>

# [**QueryResults**](QueryResults.html) postContentmanagementAuditquery(body)

POST /api/v2/contentmanagement/auditquery

Query audits



### Example

~~~ javascript
const platformClient = require('purecloud-platform-client-v2');

// Configure OAuth2 access token for authorization: PureCloud Auth
platformClient.ApiClient.instance.authentications['PureCloud Auth'].accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new platformClient.ContentManagementApi();

var body = new platformClient.ContentQueryRequest(); // ContentQueryRequest | Allows for a filtered query returning facet information

apiInstance.postContentmanagementAuditquery(body)
  .then(function(data) {
    console.log(`postContentmanagementAuditquery success! data: ${data}`);
  })
  .catch(function(error) {
  	console.log('There was a failure calling postContentmanagementAuditquery');
    console.error(error);
  });

~~~

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **body** | [**ContentQueryRequest**](ContentQueryRequest.html)| Allows for a filtered query returning facet information |  |
{: class="table table-striped"}

### Return type

[**QueryResults**](QueryResults.html)

<a name="postContentmanagementDocument"></a>

# [**Document**](Document.html) postContentmanagementDocument(documentId, body, opts)

POST /api/v2/contentmanagement/documents/{documentId}

Update a document.



### Example

~~~ javascript
const platformClient = require('purecloud-platform-client-v2');

// Configure OAuth2 access token for authorization: PureCloud Auth
platformClient.ApiClient.instance.authentications['PureCloud Auth'].accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new platformClient.ContentManagementApi();

var documentId = "documentId_example"; // String | Document ID

var body = new platformClient.DocumentUpdate(); // DocumentUpdate | Document

var opts = { 
  'expand': "expand_example", // String | Expand some document fields
  'override': true // Boolean | Override any lock on the document
};
apiInstance.postContentmanagementDocument(documentId, body, opts)
  .then(function(data) {
    console.log(`postContentmanagementDocument success! data: ${data}`);
  })
  .catch(function(error) {
  	console.log('There was a failure calling postContentmanagementDocument');
    console.error(error);
  });

~~~

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **documentId** | **String**| Document ID |  |
 **body** | [**DocumentUpdate**](DocumentUpdate.html)| Document |  |
 **expand** | **String**| Expand some document fields | [optional] <br />**Values**: acl |
 **override** | **Boolean**| Override any lock on the document | [optional]  |
{: class="table table-striped"}

### Return type

[**Document**](Document.html)

<a name="postContentmanagementDocumentContent"></a>

# [**ReplaceResponse**](ReplaceResponse.html) postContentmanagementDocumentContent(documentId, body, opts)

POST /api/v2/contentmanagement/documents/{documentId}/content

Replace the contents of a document.



### Example

~~~ javascript
const platformClient = require('purecloud-platform-client-v2');

// Configure OAuth2 access token for authorization: PureCloud Auth
platformClient.ApiClient.instance.authentications['PureCloud Auth'].accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new platformClient.ContentManagementApi();

var documentId = "documentId_example"; // String | Document ID

var body = new platformClient.ReplaceRequest(); // ReplaceRequest | Replace Request

var opts = { 
  'override': true // Boolean | Override any lock on the document
};
apiInstance.postContentmanagementDocumentContent(documentId, body, opts)
  .then(function(data) {
    console.log(`postContentmanagementDocumentContent success! data: ${data}`);
  })
  .catch(function(error) {
  	console.log('There was a failure calling postContentmanagementDocumentContent');
    console.error(error);
  });

~~~

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **documentId** | **String**| Document ID |  |
 **body** | [**ReplaceRequest**](ReplaceRequest.html)| Replace Request |  |
 **override** | **Boolean**| Override any lock on the document | [optional]  |
{: class="table table-striped"}

### Return type

[**ReplaceResponse**](ReplaceResponse.html)

<a name="postContentmanagementDocuments"></a>

# [**Document**](Document.html) postContentmanagementDocuments(body, opts)

POST /api/v2/contentmanagement/documents

Add a document.



### Example

~~~ javascript
const platformClient = require('purecloud-platform-client-v2');

// Configure OAuth2 access token for authorization: PureCloud Auth
platformClient.ApiClient.instance.authentications['PureCloud Auth'].accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new platformClient.ContentManagementApi();

var body = new platformClient.DocumentUpload(); // DocumentUpload | Document

var opts = { 
  'copySource': "copySource_example", // String | Copy a document within a workspace or to a new workspace. Provide a document ID as the copy source.
  'moveSource': "moveSource_example", // String | Move a document to a new workspace. Provide a document ID as the move source.
  'override': true // Boolean | Override any lock on the source document
};
apiInstance.postContentmanagementDocuments(body, opts)
  .then(function(data) {
    console.log(`postContentmanagementDocuments success! data: ${data}`);
  })
  .catch(function(error) {
  	console.log('There was a failure calling postContentmanagementDocuments');
    console.error(error);
  });

~~~

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **body** | [**DocumentUpload**](DocumentUpload.html)| Document |  |
 **copySource** | **String**| Copy a document within a workspace or to a new workspace. Provide a document ID as the copy source. | [optional]  |
 **moveSource** | **String**| Move a document to a new workspace. Provide a document ID as the move source. | [optional]  |
 **override** | **Boolean**| Override any lock on the source document | [optional]  |
{: class="table table-striped"}

### Return type

[**Document**](Document.html)

<a name="postContentmanagementQuery"></a>

# [**QueryResults**](QueryResults.html) postContentmanagementQuery(body, opts)

POST /api/v2/contentmanagement/query

Query content



### Example

~~~ javascript
const platformClient = require('purecloud-platform-client-v2');

// Configure OAuth2 access token for authorization: PureCloud Auth
platformClient.ApiClient.instance.authentications['PureCloud Auth'].accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new platformClient.ContentManagementApi();

var body = new platformClient.QueryRequest(); // QueryRequest | Allows for a filtered query returning facet information

var opts = { 
  'expand': "expand_example" // String | Expand some document fields
};
apiInstance.postContentmanagementQuery(body, opts)
  .then(function(data) {
    console.log(`postContentmanagementQuery success! data: ${data}`);
  })
  .catch(function(error) {
  	console.log('There was a failure calling postContentmanagementQuery');
    console.error(error);
  });

~~~

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **body** | [**QueryRequest**](QueryRequest.html)| Allows for a filtered query returning facet information |  |
 **expand** | **String**| Expand some document fields | [optional] <br />**Values**: acl, workspace |
{: class="table table-striped"}

### Return type

[**QueryResults**](QueryResults.html)

<a name="postContentmanagementShares"></a>

# [**CreateShareResponse**](CreateShareResponse.html) postContentmanagementShares(body)

POST /api/v2/contentmanagement/shares

Creates a new share or updates an existing share if the entity has already been shared



### Example

~~~ javascript
const platformClient = require('purecloud-platform-client-v2');

// Configure OAuth2 access token for authorization: PureCloud Auth
platformClient.ApiClient.instance.authentications['PureCloud Auth'].accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new platformClient.ContentManagementApi();

var body = new platformClient.CreateShareRequest(); // CreateShareRequest | CreateShareRequest - entity id and type and a single member or list of members are required

apiInstance.postContentmanagementShares(body)
  .then(function(data) {
    console.log(`postContentmanagementShares success! data: ${data}`);
  })
  .catch(function(error) {
  	console.log('There was a failure calling postContentmanagementShares');
    console.error(error);
  });

~~~

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **body** | [**CreateShareRequest**](CreateShareRequest.html)| CreateShareRequest - entity id and type and a single member or list of members are required |  |
{: class="table table-striped"}

### Return type

[**CreateShareResponse**](CreateShareResponse.html)

<a name="postContentmanagementWorkspaceTagvalues"></a>

# [**TagValue**](TagValue.html) postContentmanagementWorkspaceTagvalues(workspaceId, body)

POST /api/v2/contentmanagement/workspaces/{workspaceId}/tagvalues

Create a workspace tag



### Example

~~~ javascript
const platformClient = require('purecloud-platform-client-v2');

// Configure OAuth2 access token for authorization: PureCloud Auth
platformClient.ApiClient.instance.authentications['PureCloud Auth'].accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new platformClient.ContentManagementApi();

var workspaceId = "workspaceId_example"; // String | Workspace ID

var body = new platformClient.TagValue(); // TagValue | tag

apiInstance.postContentmanagementWorkspaceTagvalues(workspaceId, body)
  .then(function(data) {
    console.log(`postContentmanagementWorkspaceTagvalues success! data: ${data}`);
  })
  .catch(function(error) {
  	console.log('There was a failure calling postContentmanagementWorkspaceTagvalues');
    console.error(error);
  });

~~~

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **workspaceId** | **String**| Workspace ID |  |
 **body** | [**TagValue**](TagValue.html)| tag |  |
{: class="table table-striped"}

### Return type

[**TagValue**](TagValue.html)

<a name="postContentmanagementWorkspaceTagvaluesQuery"></a>

# [**TagValueEntityListing**](TagValueEntityListing.html) postContentmanagementWorkspaceTagvaluesQuery(workspaceId, body, opts)

POST /api/v2/contentmanagement/workspaces/{workspaceId}/tagvalues/query

Perform a prefix query on tags in the workspace



### Example

~~~ javascript
const platformClient = require('purecloud-platform-client-v2');

// Configure OAuth2 access token for authorization: PureCloud Auth
platformClient.ApiClient.instance.authentications['PureCloud Auth'].accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new platformClient.ContentManagementApi();

var workspaceId = "workspaceId_example"; // String | Workspace ID

var body = new platformClient.TagQueryRequest(); // TagQueryRequest | query

var opts = { 
  'expand': ["expand_example"] // [String] | Which fields, if any, to expand.
};
apiInstance.postContentmanagementWorkspaceTagvaluesQuery(workspaceId, body, opts)
  .then(function(data) {
    console.log(`postContentmanagementWorkspaceTagvaluesQuery success! data: ${data}`);
  })
  .catch(function(error) {
  	console.log('There was a failure calling postContentmanagementWorkspaceTagvaluesQuery');
    console.error(error);
  });

~~~

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **workspaceId** | **String**| Workspace ID |  |
 **body** | [**TagQueryRequest**](TagQueryRequest.html)| query |  |
 **expand** | [**[String]**](String.html)| Which fields, if any, to expand. | [optional] <br />**Values**: acl |
{: class="table table-striped"}

### Return type

[**TagValueEntityListing**](TagValueEntityListing.html)

<a name="postContentmanagementWorkspaces"></a>

# [**Workspace**](Workspace.html) postContentmanagementWorkspaces(body)

POST /api/v2/contentmanagement/workspaces

Create a group workspace



### Example

~~~ javascript
const platformClient = require('purecloud-platform-client-v2');

// Configure OAuth2 access token for authorization: PureCloud Auth
platformClient.ApiClient.instance.authentications['PureCloud Auth'].accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new platformClient.ContentManagementApi();

var body = new platformClient.WorkspaceCreate(); // WorkspaceCreate | Workspace

apiInstance.postContentmanagementWorkspaces(body)
  .then(function(data) {
    console.log(`postContentmanagementWorkspaces success! data: ${data}`);
  })
  .catch(function(error) {
  	console.log('There was a failure calling postContentmanagementWorkspaces');
    console.error(error);
  });

~~~

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **body** | [**WorkspaceCreate**](WorkspaceCreate.html)| Workspace |  |
{: class="table table-striped"}

### Return type

[**Workspace**](Workspace.html)

<a name="putContentmanagementWorkspace"></a>

# [**Workspace**](Workspace.html) putContentmanagementWorkspace(workspaceId, body)

PUT /api/v2/contentmanagement/workspaces/{workspaceId}

Update a workspace



### Example

~~~ javascript
const platformClient = require('purecloud-platform-client-v2');

// Configure OAuth2 access token for authorization: PureCloud Auth
platformClient.ApiClient.instance.authentications['PureCloud Auth'].accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new platformClient.ContentManagementApi();

var workspaceId = "workspaceId_example"; // String | Workspace ID

var body = new platformClient.Workspace(); // Workspace | Workspace

apiInstance.putContentmanagementWorkspace(workspaceId, body)
  .then(function(data) {
    console.log(`putContentmanagementWorkspace success! data: ${data}`);
  })
  .catch(function(error) {
  	console.log('There was a failure calling putContentmanagementWorkspace');
    console.error(error);
  });

~~~

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **workspaceId** | **String**| Workspace ID |  |
 **body** | [**Workspace**](Workspace.html)| Workspace |  |
{: class="table table-striped"}

### Return type

[**Workspace**](Workspace.html)

<a name="putContentmanagementWorkspaceMember"></a>

# [**WorkspaceMember**](WorkspaceMember.html) putContentmanagementWorkspaceMember(workspaceId, memberId, body)

PUT /api/v2/contentmanagement/workspaces/{workspaceId}/members/{memberId}

Add a member to a workspace



### Example

~~~ javascript
const platformClient = require('purecloud-platform-client-v2');

// Configure OAuth2 access token for authorization: PureCloud Auth
platformClient.ApiClient.instance.authentications['PureCloud Auth'].accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new platformClient.ContentManagementApi();

var workspaceId = "workspaceId_example"; // String | Workspace ID

var memberId = "memberId_example"; // String | Member ID

var body = new platformClient.WorkspaceMember(); // WorkspaceMember | Workspace Member

apiInstance.putContentmanagementWorkspaceMember(workspaceId, memberId, body)
  .then(function(data) {
    console.log(`putContentmanagementWorkspaceMember success! data: ${data}`);
  })
  .catch(function(error) {
  	console.log('There was a failure calling putContentmanagementWorkspaceMember');
    console.error(error);
  });

~~~

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **workspaceId** | **String**| Workspace ID |  |
 **memberId** | **String**| Member ID |  |
 **body** | [**WorkspaceMember**](WorkspaceMember.html)| Workspace Member |  |
{: class="table table-striped"}

### Return type

[**WorkspaceMember**](WorkspaceMember.html)

<a name="putContentmanagementWorkspaceTagvalue"></a>

# [**TagValue**](TagValue.html) putContentmanagementWorkspaceTagvalue(workspaceId, tagId, body)

PUT /api/v2/contentmanagement/workspaces/{workspaceId}/tagvalues/{tagId}

Update a workspace tag. Will update all documents with the new tag value.



### Example

~~~ javascript
const platformClient = require('purecloud-platform-client-v2');

// Configure OAuth2 access token for authorization: PureCloud Auth
platformClient.ApiClient.instance.authentications['PureCloud Auth'].accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new platformClient.ContentManagementApi();

var workspaceId = "workspaceId_example"; // String | Workspace ID

var tagId = "tagId_example"; // String | Tag ID

var body = new platformClient.TagValue(); // TagValue | Workspace

apiInstance.putContentmanagementWorkspaceTagvalue(workspaceId, tagId, body)
  .then(function(data) {
    console.log(`putContentmanagementWorkspaceTagvalue success! data: ${data}`);
  })
  .catch(function(error) {
  	console.log('There was a failure calling putContentmanagementWorkspaceTagvalue');
    console.error(error);
  });

~~~

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **workspaceId** | **String**| Workspace ID |  |
 **tagId** | **String**| Tag ID |  |
 **body** | [**TagValue**](TagValue.html)| Workspace |  |
{: class="table table-striped"}

### Return type

[**TagValue**](TagValue.html)

