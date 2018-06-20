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

# void deleteContentmanagementDocument(documentId, opts)



DELETE /api/v2/contentmanagement/documents/{documentId}

Delete a document.



Requires NO permissions: 




### Example Usage

~~~ javascript
// Browser
const platformClient = require('platformClient');
// Node
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
  .catch(function(err) {
  	console.log('There was a failure calling deleteContentmanagementDocument');
    console.error(err);
  });

~~~

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **documentId** | **String** | Document ID |  |
 **override** | **Boolean** | Override any lock on the document | [optional]  |
{: class="table table-striped"}

### Return type

void (no response body)

<a name="deleteContentmanagementShare"></a>

# void deleteContentmanagementShare(shareId)



DELETE /api/v2/contentmanagement/shares/{shareId}

Deletes an existing share.

This revokes sharing rights specified in the share record

Requires NO permissions: 




### Example Usage

~~~ javascript
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Configure OAuth2 access token for authorization: PureCloud Auth
platformClient.ApiClient.instance.authentications['PureCloud Auth'].accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new platformClient.ContentManagementApi();

var shareId = "shareId_example"; // String | Share ID

apiInstance.deleteContentmanagementShare(shareId)
  .then(function() {
    console.log('deleteContentmanagementShare returned successfully.');
  })
  .catch(function(err) {
  	console.log('There was a failure calling deleteContentmanagementShare');
    console.error(err);
  });

~~~

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **shareId** | **String** | Share ID |  |
{: class="table table-striped"}

### Return type

void (no response body)

<a name="deleteContentmanagementStatusStatusId"></a>

# void deleteContentmanagementStatusStatusId(statusId)



DELETE /api/v2/contentmanagement/status/{statusId}

Cancel the command for this status



Requires NO permissions: 




### Example Usage

~~~ javascript
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Configure OAuth2 access token for authorization: PureCloud Auth
platformClient.ApiClient.instance.authentications['PureCloud Auth'].accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new platformClient.ContentManagementApi();

var statusId = "statusId_example"; // String | Status ID

apiInstance.deleteContentmanagementStatusStatusId(statusId)
  .then(function() {
    console.log('deleteContentmanagementStatusStatusId returned successfully.');
  })
  .catch(function(err) {
  	console.log('There was a failure calling deleteContentmanagementStatusStatusId');
    console.error(err);
  });

~~~

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **statusId** | **String** | Status ID |  |
{: class="table table-striped"}

### Return type

void (no response body)

<a name="deleteContentmanagementWorkspace"></a>

# void deleteContentmanagementWorkspace(workspaceId, opts)



DELETE /api/v2/contentmanagement/workspaces/{workspaceId}

Delete a workspace



Requires NO permissions: 




### Example Usage

~~~ javascript
// Browser
const platformClient = require('platformClient');
// Node
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
  .catch(function(err) {
  	console.log('There was a failure calling deleteContentmanagementWorkspace');
    console.error(err);
  });

~~~

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **workspaceId** | **String** | Workspace ID |  |
 **moveChildrenToWorkspaceId** | **String** | New location for objects in deleted workspace. | [optional]  |
{: class="table table-striped"}

### Return type

void (no response body)

<a name="deleteContentmanagementWorkspaceMember"></a>

# void deleteContentmanagementWorkspaceMember(workspaceId, memberId)



DELETE /api/v2/contentmanagement/workspaces/{workspaceId}/members/{memberId}

Delete a member from a workspace



Requires NO permissions: 




### Example Usage

~~~ javascript
// Browser
const platformClient = require('platformClient');
// Node
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
  .catch(function(err) {
  	console.log('There was a failure calling deleteContentmanagementWorkspaceMember');
    console.error(err);
  });

~~~

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **workspaceId** | **String** | Workspace ID |  |
 **memberId** | **String** | Member ID |  |
{: class="table table-striped"}

### Return type

void (no response body)

<a name="deleteContentmanagementWorkspaceTagvalue"></a>

# void deleteContentmanagementWorkspaceTagvalue(workspaceId, tagId)



DELETE /api/v2/contentmanagement/workspaces/{workspaceId}/tagvalues/{tagId}

Delete workspace tag

Delete a tag from a workspace. Will remove this tag from all documents.

Requires NO permissions: 




### Example Usage

~~~ javascript
// Browser
const platformClient = require('platformClient');
// Node
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
  .catch(function(err) {
  	console.log('There was a failure calling deleteContentmanagementWorkspaceTagvalue');
    console.error(err);
  });

~~~

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **workspaceId** | **String** | Workspace ID |  |
 **tagId** | **String** | Tag ID |  |
{: class="table table-striped"}

### Return type

void (no response body)

<a name="getContentmanagementDocument"></a>

# Document getContentmanagementDocument(documentId, opts)



GET /api/v2/contentmanagement/documents/{documentId}

Get a document.



Requires NO permissions: 




### Example Usage

~~~ javascript
// Browser
const platformClient = require('platformClient');
// Node
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
    console.log(`getContentmanagementDocument success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch(function(err) {
  	console.log('There was a failure calling getContentmanagementDocument');
    console.error(err);
  });

~~~

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **documentId** | **String** | Document ID |  |
 **expand** | **[String]** | Which fields, if any, to expand. | [optional] <br />**Values**: lockInfo, acl, workspace |
{: class="table table-striped"}

### Return type

**Document**

<a name="getContentmanagementDocumentAudits"></a>

# DocumentAuditEntityListing getContentmanagementDocumentAudits(documentId, opts)



GET /api/v2/contentmanagement/documents/{documentId}/audits

Get a list of audits for a document.



Requires NO permissions: 




### Example Usage

~~~ javascript
// Browser
const platformClient = require('platformClient');
// Node
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
    console.log(`getContentmanagementDocumentAudits success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch(function(err) {
  	console.log('There was a failure calling getContentmanagementDocumentAudits');
    console.error(err);
  });

~~~

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **documentId** | **String** | Document ID |  |
 **pageSize** | **Number** | Page size | [optional] [default to 25] |
 **pageNumber** | **Number** | Page number | [optional] [default to 1] |
 **transactionFilter** | **String** | Transaction filter | [optional]  |
 **level** | **String** | level | [optional] [default to USER] |
 **sortBy** | **String** | Sort by | [optional]  |
 **sortOrder** | **String** | Sort order | [optional] [default to ascending] |
{: class="table table-striped"}

### Return type

**DocumentAuditEntityListing**

<a name="getContentmanagementDocumentContent"></a>

# DownloadResponse getContentmanagementDocumentContent(documentId, opts)



GET /api/v2/contentmanagement/documents/{documentId}/content

Download a document.



Requires NO permissions: 




### Example Usage

~~~ javascript
// Browser
const platformClient = require('platformClient');
// Node
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
    console.log(`getContentmanagementDocumentContent success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch(function(err) {
  	console.log('There was a failure calling getContentmanagementDocumentContent');
    console.error(err);
  });

~~~

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **documentId** | **String** | Document ID |  |
 **disposition** | **String** | Request how the content will be downloaded: a file attachment or inline. Default is attachment. | [optional] <br />**Values**: attachment, inline |
 **contentType** | **String** | The requested format for the specified document. If supported, the document will be returned in that format. Example contentType=audio/wav | [optional]  |
{: class="table table-striped"}

### Return type

**DownloadResponse**

<a name="getContentmanagementDocuments"></a>

# DocumentEntityListing getContentmanagementDocuments(workspaceId, opts)

<span style="background-color: #f0ad4e;display: inline-block;padding: 7px;font-weight: bold;line-height: 1;color: #ffffff;text-align: center;white-space: nowrap;vertical-align: baseline;border-radius: .25em;margin: 10px 0;">DEPRECATED</span>

GET /api/v2/contentmanagement/documents

Get a list of documents.



Requires NO permissions: 




### Example Usage

~~~ javascript
// Browser
const platformClient = require('platformClient');
// Node
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
    console.log(`getContentmanagementDocuments success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch(function(err) {
  	console.log('There was a failure calling getContentmanagementDocuments');
    console.error(err);
  });

~~~

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
{: class="table table-striped"}

### Return type

**DocumentEntityListing**

<a name="getContentmanagementQuery"></a>

# QueryResults getContentmanagementQuery(queryPhrase, opts)



GET /api/v2/contentmanagement/query

Query content



Requires NO permissions: 




### Example Usage

~~~ javascript
// Browser
const platformClient = require('platformClient');
// Node
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
    console.log(`getContentmanagementQuery success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch(function(err) {
  	console.log('There was a failure calling getContentmanagementQuery');
    console.error(err);
  });

~~~

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **queryPhrase** | **String** | Phrase tokens are ANDed together over all searchable fields |  |
 **pageSize** | **Number** | Page size | [optional] [default to 25] |
 **pageNumber** | **Number** | Page number | [optional] [default to 1] |
 **sortBy** | **String** | name or dateCreated | [optional] [default to name] |
 **sortOrder** | **String** | ascending or descending | [optional] [default to ascending] |
 **expand** | **[String]** | Which fields, if any, to expand. | [optional] <br />**Values**: acl, workspace |
{: class="table table-striped"}

### Return type

**QueryResults**

<a name="getContentmanagementSecurityprofile"></a>

# SecurityProfile getContentmanagementSecurityprofile(securityProfileId)



GET /api/v2/contentmanagement/securityprofiles/{securityProfileId}

Get a Security Profile



Requires NO permissions: 




### Example Usage

~~~ javascript
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Configure OAuth2 access token for authorization: PureCloud Auth
platformClient.ApiClient.instance.authentications['PureCloud Auth'].accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new platformClient.ContentManagementApi();

var securityProfileId = "securityProfileId_example"; // String | Security Profile Id

apiInstance.getContentmanagementSecurityprofile(securityProfileId)
  .then(function(data) {
    console.log(`getContentmanagementSecurityprofile success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch(function(err) {
  	console.log('There was a failure calling getContentmanagementSecurityprofile');
    console.error(err);
  });

~~~

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **securityProfileId** | **String** | Security Profile Id |  |
{: class="table table-striped"}

### Return type

**SecurityProfile**

<a name="getContentmanagementSecurityprofiles"></a>

# SecurityProfileEntityListing getContentmanagementSecurityprofiles()



GET /api/v2/contentmanagement/securityprofiles

Get a List of Security Profiles



Requires NO permissions: 




### Example Usage

~~~ javascript
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Configure OAuth2 access token for authorization: PureCloud Auth
platformClient.ApiClient.instance.authentications['PureCloud Auth'].accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new platformClient.ContentManagementApi();
apiInstance.getContentmanagementSecurityprofiles()
  .then(function(data) {
    console.log(`getContentmanagementSecurityprofiles success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch(function(err) {
  	console.log('There was a failure calling getContentmanagementSecurityprofiles');
    console.error(err);
  });

~~~

### Parameters

This endpoint does not need any parameter.
{: class="table table-striped"}

### Return type

**SecurityProfileEntityListing**

<a name="getContentmanagementShare"></a>

# Share getContentmanagementShare(shareId, opts)



GET /api/v2/contentmanagement/shares/{shareId}

Retrieve details about an existing share.



Requires NO permissions: 




### Example Usage

~~~ javascript
// Browser
const platformClient = require('platformClient');
// Node
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
    console.log(`getContentmanagementShare success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch(function(err) {
  	console.log('There was a failure calling getContentmanagementShare');
    console.error(err);
  });

~~~

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **shareId** | **String** | Share ID |  |
 **expand** | **[String]** | Which fields, if any, to expand. | [optional] <br />**Values**: member |
{: class="table table-striped"}

### Return type

**Share**

<a name="getContentmanagementSharedSharedId"></a>

# SharedResponse getContentmanagementSharedSharedId(sharedId, opts)



GET /api/v2/contentmanagement/shared/{sharedId}

Get shared documents. Securely download a shared document.

This method requires the download sharing URI obtained in the get document response (downloadSharingUri). Documents may be shared between users in the same workspace. Documents may also be shared between any user by creating a content management share.

Requires NO permissions: 




### Example Usage

~~~ javascript
// Browser
const platformClient = require('platformClient');
// Node
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
    console.log(`getContentmanagementSharedSharedId success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch(function(err) {
  	console.log('There was a failure calling getContentmanagementSharedSharedId');
    console.error(err);
  });

~~~

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **sharedId** | **String** | Shared ID |  |
 **redirect** | **Boolean** | Turn on or off redirect | [optional] [default to true] |
 **disposition** | **String** | Request how the share content will be downloaded: attached as a file or inline. Default is attachment. | [optional] [default to attachment]<br />**Values**: attachment, inline, none |
 **contentType** | **String** | The requested format for the specified document. If supported, the document will be returned in that format. Example contentType=audio/wav | [optional]  |
 **expand** | **String** | Expand some document fields | [optional] <br />**Values**: document.acl |
{: class="table table-striped"}

### Return type

**SharedResponse**

<a name="getContentmanagementShares"></a>

# ShareEntityListing getContentmanagementShares(opts)



GET /api/v2/contentmanagement/shares

Gets a list of shares.  You must specify at least one filter (e.g. entityId).

Failing to specify a filter will return 400.

Requires NO permissions: 




### Example Usage

~~~ javascript
// Browser
const platformClient = require('platformClient');
// Node
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
    console.log(`getContentmanagementShares success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch(function(err) {
  	console.log('There was a failure calling getContentmanagementShares');
    console.error(err);
  });

~~~

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **entityId** | **String** | Filters the shares returned to only the entity specified by the value of this parameter. | [optional]  |
 **expand** | **[String]** | Which fields, if any, to expand. | [optional] <br />**Values**: member |
 **pageSize** | **Number** | Page size | [optional] [default to 25] |
 **pageNumber** | **Number** | Page number | [optional] [default to 1] |
{: class="table table-striped"}

### Return type

**ShareEntityListing**

<a name="getContentmanagementStatus"></a>

# CommandStatusEntityListing getContentmanagementStatus(opts)



GET /api/v2/contentmanagement/status

Get a list of statuses for pending operations



Requires NO permissions: 




### Example Usage

~~~ javascript
// Browser
const platformClient = require('platformClient');
// Node
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
    console.log(`getContentmanagementStatus success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch(function(err) {
  	console.log('There was a failure calling getContentmanagementStatus');
    console.error(err);
  });

~~~

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **pageSize** | **Number** | Page size | [optional] [default to 25] |
 **pageNumber** | **Number** | Page number | [optional] [default to 1] |
{: class="table table-striped"}

### Return type

**CommandStatusEntityListing**

<a name="getContentmanagementStatusStatusId"></a>

# CommandStatus getContentmanagementStatusStatusId(statusId)



GET /api/v2/contentmanagement/status/{statusId}

Get a status.



Requires NO permissions: 




### Example Usage

~~~ javascript
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Configure OAuth2 access token for authorization: PureCloud Auth
platformClient.ApiClient.instance.authentications['PureCloud Auth'].accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new platformClient.ContentManagementApi();

var statusId = "statusId_example"; // String | Status ID

apiInstance.getContentmanagementStatusStatusId(statusId)
  .then(function(data) {
    console.log(`getContentmanagementStatusStatusId success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch(function(err) {
  	console.log('There was a failure calling getContentmanagementStatusStatusId');
    console.error(err);
  });

~~~

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **statusId** | **String** | Status ID |  |
{: class="table table-striped"}

### Return type

**CommandStatus**

<a name="getContentmanagementUsage"></a>

# Usage getContentmanagementUsage()



GET /api/v2/contentmanagement/usage

Get usage details.



Requires NO permissions: 




### Example Usage

~~~ javascript
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Configure OAuth2 access token for authorization: PureCloud Auth
platformClient.ApiClient.instance.authentications['PureCloud Auth'].accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new platformClient.ContentManagementApi();
apiInstance.getContentmanagementUsage()
  .then(function(data) {
    console.log(`getContentmanagementUsage success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch(function(err) {
  	console.log('There was a failure calling getContentmanagementUsage');
    console.error(err);
  });

~~~

### Parameters

This endpoint does not need any parameter.
{: class="table table-striped"}

### Return type

**Usage**

<a name="getContentmanagementWorkspace"></a>

# Workspace getContentmanagementWorkspace(workspaceId, opts)



GET /api/v2/contentmanagement/workspaces/{workspaceId}

Get a workspace.



Requires NO permissions: 




### Example Usage

~~~ javascript
// Browser
const platformClient = require('platformClient');
// Node
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
    console.log(`getContentmanagementWorkspace success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch(function(err) {
  	console.log('There was a failure calling getContentmanagementWorkspace');
    console.error(err);
  });

~~~

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **workspaceId** | **String** | Workspace ID |  |
 **expand** | **[String]** | Which fields, if any, to expand. | [optional] <br />**Values**: summary, acl |
{: class="table table-striped"}

### Return type

**Workspace**

<a name="getContentmanagementWorkspaceDocuments"></a>

# DocumentEntityListing getContentmanagementWorkspaceDocuments(workspaceId, opts)



GET /api/v2/contentmanagement/workspaces/{workspaceId}/documents

Get a list of documents.



Requires NO permissions: 




### Example Usage

~~~ javascript
// Browser
const platformClient = require('platformClient');
// Node
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
    console.log(`getContentmanagementWorkspaceDocuments success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch(function(err) {
  	console.log('There was a failure calling getContentmanagementWorkspaceDocuments');
    console.error(err);
  });

~~~

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **workspaceId** | **String** | Workspace ID |  |
 **expand** | **[String]** | Which fields, if any, to expand. | [optional] <br />**Values**: acl, workspace |
 **pageSize** | **Number** | Page size | [optional] [default to 25] |
 **pageNumber** | **Number** | Page number | [optional] [default to 1] |
 **sortBy** | **String** | name or dateCreated | [optional]  |
 **sortOrder** | **String** | ascending or descending | [optional] [default to ascending] |
{: class="table table-striped"}

### Return type

**DocumentEntityListing**

<a name="getContentmanagementWorkspaceMember"></a>

# WorkspaceMember getContentmanagementWorkspaceMember(workspaceId, memberId, opts)



GET /api/v2/contentmanagement/workspaces/{workspaceId}/members/{memberId}

Get a workspace member



Requires NO permissions: 




### Example Usage

~~~ javascript
// Browser
const platformClient = require('platformClient');
// Node
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
    console.log(`getContentmanagementWorkspaceMember success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch(function(err) {
  	console.log('There was a failure calling getContentmanagementWorkspaceMember');
    console.error(err);
  });

~~~

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **workspaceId** | **String** | Workspace ID |  |
 **memberId** | **String** | Member ID |  |
 **expand** | **[String]** | Which fields, if any, to expand. | [optional] <br />**Values**: member |
{: class="table table-striped"}

### Return type

**WorkspaceMember**

<a name="getContentmanagementWorkspaceMembers"></a>

# WorkspaceMemberEntityListing getContentmanagementWorkspaceMembers(workspaceId, opts)



GET /api/v2/contentmanagement/workspaces/{workspaceId}/members

Get a list workspace members



Requires NO permissions: 




### Example Usage

~~~ javascript
// Browser
const platformClient = require('platformClient');
// Node
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
    console.log(`getContentmanagementWorkspaceMembers success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch(function(err) {
  	console.log('There was a failure calling getContentmanagementWorkspaceMembers');
    console.error(err);
  });

~~~

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **workspaceId** | **String** | Workspace ID |  |
 **pageSize** | **Number** | Page size | [optional] [default to 25] |
 **pageNumber** | **Number** | Page number | [optional] [default to 1] |
 **expand** | **[String]** | Which fields, if any, to expand. | [optional] <br />**Values**: member |
{: class="table table-striped"}

### Return type

**WorkspaceMemberEntityListing**

<a name="getContentmanagementWorkspaceTagvalue"></a>

# TagValue getContentmanagementWorkspaceTagvalue(workspaceId, tagId, opts)



GET /api/v2/contentmanagement/workspaces/{workspaceId}/tagvalues/{tagId}

Get a workspace tag



Requires NO permissions: 




### Example Usage

~~~ javascript
// Browser
const platformClient = require('platformClient');
// Node
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
    console.log(`getContentmanagementWorkspaceTagvalue success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch(function(err) {
  	console.log('There was a failure calling getContentmanagementWorkspaceTagvalue');
    console.error(err);
  });

~~~

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **workspaceId** | **String** | Workspace ID |  |
 **tagId** | **String** | Tag ID |  |
 **expand** | **[String]** | Which fields, if any, to expand. | [optional] <br />**Values**: acl |
{: class="table table-striped"}

### Return type

**TagValue**

<a name="getContentmanagementWorkspaceTagvalues"></a>

# TagValueEntityListing getContentmanagementWorkspaceTagvalues(workspaceId, opts)



GET /api/v2/contentmanagement/workspaces/{workspaceId}/tagvalues

Get a list of workspace tags



Requires NO permissions: 




### Example Usage

~~~ javascript
// Browser
const platformClient = require('platformClient');
// Node
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
    console.log(`getContentmanagementWorkspaceTagvalues success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch(function(err) {
  	console.log('There was a failure calling getContentmanagementWorkspaceTagvalues');
    console.error(err);
  });

~~~

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **workspaceId** | **String** | Workspace ID |  |
 **value** | **String** | filter the list of tags returned | [optional]  |
 **pageSize** | **Number** | Page size | [optional] [default to 25] |
 **pageNumber** | **Number** | Page number | [optional] [default to 1] |
 **expand** | **[String]** | Which fields, if any, to expand. | [optional] <br />**Values**: acl |
{: class="table table-striped"}

### Return type

**TagValueEntityListing**

<a name="getContentmanagementWorkspaces"></a>

# WorkspaceEntityListing getContentmanagementWorkspaces(opts)



GET /api/v2/contentmanagement/workspaces

Get a list of workspaces.

Specifying &#39;content&#39; access will return all workspaces the user has document access to, while &#39;admin&#39; access will return all group workspaces the user has administrative rights to.

Requires NO permissions: 




### Example Usage

~~~ javascript
// Browser
const platformClient = require('platformClient');
// Node
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
    console.log(`getContentmanagementWorkspaces success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch(function(err) {
  	console.log('There was a failure calling getContentmanagementWorkspaces');
    console.error(err);
  });

~~~

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **pageSize** | **Number** | Page size | [optional] [default to 25] |
 **pageNumber** | **Number** | Page number | [optional] [default to 1] |
 **access** | **[String]** | Requested access level. | [optional] <br />**Values**: content, admin, document:create, document:viewContent, document:viewMetadata, document:download, document:delete, document:update, document:share, document:shareView, document:email, document:print, document:auditView, document:replace, document:tag, tag:create, tag:view, tag:update, tag:apply, tag:remove, tag:delete |
 **expand** | **[String]** | Which fields, if any, to expand. | [optional] <br />**Values**: summary, acl |
{: class="table table-striped"}

### Return type

**WorkspaceEntityListing**

<a name="postContentmanagementAuditquery"></a>

# QueryResults postContentmanagementAuditquery(body)



POST /api/v2/contentmanagement/auditquery

Query audits



Requires NO permissions: 



### Request Body Schema

{::options parse_block_html="true" /}

<script type="text/javascript">
	function copyContentQueryRequestExample() {
		var $temp = $("<textarea>");
		$("body").append($temp);
		$temp.val($('#ContentQueryRequestExample').text()).select();
		document.execCommand("copy");
		$temp.remove();
	}
</script>

ContentQueryRequest <a style="cursor: pointer" onclick="copyContentQueryRequestExample()">Copy</a>

<div id="ContentQueryRequestExample" style="max-height: 250px; overflow-y: scroll;">
~~~ json
{ 
  "queryPhrase": String, 
  "pageNumber": Number, 
  "pageSize": Number, 
  "facetNameRequests": [String], 
  "sort": { 
    "name": String, 
    "ascending": Boolean, 
  },  
  "filters": { 
    "name": String, 
    "type": String, 
    "operator": String, 
    "values": [String], 
  },  
  "attributeFilters": { 
    "id": String, 
    "operator": String, 
    "values": [String], 
  },  
  "includeShares": Boolean, 
}
~~~
</div>


### Example Usage

~~~ javascript
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Configure OAuth2 access token for authorization: PureCloud Auth
platformClient.ApiClient.instance.authentications['PureCloud Auth'].accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new platformClient.ContentManagementApi();

var body = {}; // Object | Allows for a filtered query returning facet information

apiInstance.postContentmanagementAuditquery(body)
  .then(function(data) {
    console.log(`postContentmanagementAuditquery success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch(function(err) {
  	console.log('There was a failure calling postContentmanagementAuditquery');
    console.error(err);
  });

~~~

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **body** | **Object** | Allows for a filtered query returning facet information |  |
{: class="table table-striped"}

### Return type

**QueryResults**

<a name="postContentmanagementDocument"></a>

# Document postContentmanagementDocument(documentId, body, opts)



POST /api/v2/contentmanagement/documents/{documentId}

Update a document.



Requires NO permissions: 



### Request Body Schema

{::options parse_block_html="true" /}

<script type="text/javascript">
	function copyDocumentUpdateExample() {
		var $temp = $("<textarea>");
		$("body").append($temp);
		$temp.val($('#DocumentUpdateExample').text()).select();
		document.execCommand("copy");
		$temp.remove();
	}
</script>

DocumentUpdate <a style="cursor: pointer" onclick="copyDocumentUpdateExample()">Copy</a>

<div id="DocumentUpdateExample" style="max-height: 250px; overflow-y: scroll;">
~~~ json
{ 
  "changeNumber": Number, 
  "name": String, 
  "read": Boolean, 
  "addTags": [String], 
  "removeTags": [String], 
  "addTagIds": [String], 
  "removeTagIds": [String], 
  "updateAttributes": { 
    "attribute": { 
      "id": String, 
      "name": String, 
      "version": Number, 
      "description": String, 
      "createdBy": { 
        "id": String, 
        "name": String, 
        "selfUri": String, 
      },  
      "dateCreated": Date, 
      "modifiedBy": { 
        "id": String, 
        "name": String, 
        "selfUri": String, 
      },  
      "dateModified": Date, 
      "selfUri": String, 
    },  
    "values": [String], 
  },  
  "removeAttributes": [String], 
}
~~~
</div>


### Example Usage

~~~ javascript
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Configure OAuth2 access token for authorization: PureCloud Auth
platformClient.ApiClient.instance.authentications['PureCloud Auth'].accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new platformClient.ContentManagementApi();

var documentId = "documentId_example"; // String | Document ID

var body = {}; // Object | Document

var opts = { 
  'expand': "expand_example", // String | Expand some document fields
  'override': true // Boolean | Override any lock on the document
};
apiInstance.postContentmanagementDocument(documentId, body, opts)
  .then(function(data) {
    console.log(`postContentmanagementDocument success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch(function(err) {
  	console.log('There was a failure calling postContentmanagementDocument');
    console.error(err);
  });

~~~

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **documentId** | **String** | Document ID |  |
 **body** | **Object** | Document |  |
 **expand** | **String** | Expand some document fields | [optional] <br />**Values**: acl |
 **override** | **Boolean** | Override any lock on the document | [optional]  |
{: class="table table-striped"}

### Return type

**Document**

<a name="postContentmanagementDocumentContent"></a>

# ReplaceResponse postContentmanagementDocumentContent(documentId, body, opts)



POST /api/v2/contentmanagement/documents/{documentId}/content

Replace the contents of a document.



Requires NO permissions: 



### Request Body Schema

{::options parse_block_html="true" /}

<script type="text/javascript">
	function copyReplaceRequestExample() {
		var $temp = $("<textarea>");
		$("body").append($temp);
		$temp.val($('#ReplaceRequestExample').text()).select();
		document.execCommand("copy");
		$temp.remove();
	}
</script>

ReplaceRequest <a style="cursor: pointer" onclick="copyReplaceRequestExample()">Copy</a>

<div id="ReplaceRequestExample" style="max-height: 250px; overflow-y: scroll;">
~~~ json
{ 
  "changeNumber": Number, 
  "name": String, 
  "authToken": String, 
}
~~~
</div>


### Example Usage

~~~ javascript
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Configure OAuth2 access token for authorization: PureCloud Auth
platformClient.ApiClient.instance.authentications['PureCloud Auth'].accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new platformClient.ContentManagementApi();

var documentId = "documentId_example"; // String | Document ID

var body = {}; // Object | Replace Request

var opts = { 
  'override': true // Boolean | Override any lock on the document
};
apiInstance.postContentmanagementDocumentContent(documentId, body, opts)
  .then(function(data) {
    console.log(`postContentmanagementDocumentContent success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch(function(err) {
  	console.log('There was a failure calling postContentmanagementDocumentContent');
    console.error(err);
  });

~~~

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **documentId** | **String** | Document ID |  |
 **body** | **Object** | Replace Request |  |
 **override** | **Boolean** | Override any lock on the document | [optional]  |
{: class="table table-striped"}

### Return type

**ReplaceResponse**

<a name="postContentmanagementDocuments"></a>

# Document postContentmanagementDocuments(body, opts)



POST /api/v2/contentmanagement/documents

Add a document.



Requires NO permissions: 



### Request Body Schema

{::options parse_block_html="true" /}

<script type="text/javascript">
	function copyDocumentUploadExample() {
		var $temp = $("<textarea>");
		$("body").append($temp);
		$temp.val($('#DocumentUploadExample').text()).select();
		document.execCommand("copy");
		$temp.remove();
	}
</script>

DocumentUpload <a style="cursor: pointer" onclick="copyDocumentUploadExample()">Copy</a>

<div id="DocumentUploadExample" style="max-height: 250px; overflow-y: scroll;">
~~~ json
{ 
  "name": String, 
  "workspace": { 
    "id": String, 
    "name": String, 
    "selfUri": String, 
  },  
  "tags": [String], 
  "tagIds": [String], 
}
~~~
</div>


### Example Usage

~~~ javascript
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Configure OAuth2 access token for authorization: PureCloud Auth
platformClient.ApiClient.instance.authentications['PureCloud Auth'].accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new platformClient.ContentManagementApi();

var body = {}; // Object | Document

var opts = { 
  'copySource': "copySource_example", // String | Copy a document within a workspace or to a new workspace. Provide a document ID as the copy source.
  'moveSource': "moveSource_example", // String | Move a document to a new workspace. Provide a document ID as the move source.
  'override': true // Boolean | Override any lock on the source document
};
apiInstance.postContentmanagementDocuments(body, opts)
  .then(function(data) {
    console.log(`postContentmanagementDocuments success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch(function(err) {
  	console.log('There was a failure calling postContentmanagementDocuments');
    console.error(err);
  });

~~~

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **body** | **Object** | Document |  |
 **copySource** | **String** | Copy a document within a workspace or to a new workspace. Provide a document ID as the copy source. | [optional]  |
 **moveSource** | **String** | Move a document to a new workspace. Provide a document ID as the move source. | [optional]  |
 **override** | **Boolean** | Override any lock on the source document | [optional]  |
{: class="table table-striped"}

### Return type

**Document**

<a name="postContentmanagementQuery"></a>

# QueryResults postContentmanagementQuery(body, opts)



POST /api/v2/contentmanagement/query

Query content



Requires NO permissions: 



### Request Body Schema

{::options parse_block_html="true" /}

<script type="text/javascript">
	function copyQueryRequestExample() {
		var $temp = $("<textarea>");
		$("body").append($temp);
		$temp.val($('#QueryRequestExample').text()).select();
		document.execCommand("copy");
		$temp.remove();
	}
</script>

QueryRequest <a style="cursor: pointer" onclick="copyQueryRequestExample()">Copy</a>

<div id="QueryRequestExample" style="max-height: 250px; overflow-y: scroll;">
~~~ json
{ 
  "queryPhrase": String, 
  "pageNumber": Number, 
  "pageSize": Number, 
  "facetNameRequests": [String], 
  "sort": { 
    "name": String, 
    "ascending": Boolean, 
  },  
  "filters": { 
    "name": String, 
    "type": String, 
    "operator": String, 
    "values": [String], 
  },  
  "attributeFilters": { 
    "id": String, 
    "operator": String, 
    "values": [String], 
  },  
  "includeShares": Boolean, 
}
~~~
</div>


### Example Usage

~~~ javascript
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Configure OAuth2 access token for authorization: PureCloud Auth
platformClient.ApiClient.instance.authentications['PureCloud Auth'].accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new platformClient.ContentManagementApi();

var body = {}; // Object | Allows for a filtered query returning facet information

var opts = { 
  'expand': "expand_example" // String | Expand some document fields
};
apiInstance.postContentmanagementQuery(body, opts)
  .then(function(data) {
    console.log(`postContentmanagementQuery success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch(function(err) {
  	console.log('There was a failure calling postContentmanagementQuery');
    console.error(err);
  });

~~~

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **body** | **Object** | Allows for a filtered query returning facet information |  |
 **expand** | **String** | Expand some document fields | [optional] <br />**Values**: acl, workspace |
{: class="table table-striped"}

### Return type

**QueryResults**

<a name="postContentmanagementShares"></a>

# CreateShareResponse postContentmanagementShares(body)



POST /api/v2/contentmanagement/shares

Creates a new share or updates an existing share if the entity has already been shared



Requires NO permissions: 



### Request Body Schema

{::options parse_block_html="true" /}

<script type="text/javascript">
	function copyCreateShareRequestExample() {
		var $temp = $("<textarea>");
		$("body").append($temp);
		$temp.val($('#CreateShareRequestExample').text()).select();
		document.execCommand("copy");
		$temp.remove();
	}
</script>

CreateShareRequest <a style="cursor: pointer" onclick="copyCreateShareRequestExample()">Copy</a>

<div id="CreateShareRequestExample" style="max-height: 250px; overflow-y: scroll;">
~~~ json
{ 
  "sharedEntityType": String, 
  "sharedEntity": { 
    "id": String, 
  },  
  "memberType": String, 
  "member": { 
    "id": String, 
  },  
  "members": { 
    "memberType": String, 
    "member": { 
      "id": String, 
    },  
  },  
}
~~~
</div>


### Example Usage

~~~ javascript
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Configure OAuth2 access token for authorization: PureCloud Auth
platformClient.ApiClient.instance.authentications['PureCloud Auth'].accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new platformClient.ContentManagementApi();

var body = {}; // Object | CreateShareRequest - entity id and type and a single member or list of members are required

apiInstance.postContentmanagementShares(body)
  .then(function(data) {
    console.log(`postContentmanagementShares success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch(function(err) {
  	console.log('There was a failure calling postContentmanagementShares');
    console.error(err);
  });

~~~

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **body** | **Object** | CreateShareRequest - entity id and type and a single member or list of members are required |  |
{: class="table table-striped"}

### Return type

**CreateShareResponse**

<a name="postContentmanagementWorkspaceTagvalues"></a>

# TagValue postContentmanagementWorkspaceTagvalues(workspaceId, body)



POST /api/v2/contentmanagement/workspaces/{workspaceId}/tagvalues

Create a workspace tag



Requires NO permissions: 



### Request Body Schema

{::options parse_block_html="true" /}

<script type="text/javascript">
	function copyTagValueExample() {
		var $temp = $("<textarea>");
		$("body").append($temp);
		$temp.val($('#TagValueExample').text()).select();
		document.execCommand("copy");
		$temp.remove();
	}
</script>

TagValue <a style="cursor: pointer" onclick="copyTagValueExample()">Copy</a>

<div id="TagValueExample" style="max-height: 250px; overflow-y: scroll;">
~~~ json
{ 
  "id": String, 
  "name": String, 
  "inUse": Boolean, 
  "acl": [String], 
  "selfUri": String, 
}
~~~
</div>


### Example Usage

~~~ javascript
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Configure OAuth2 access token for authorization: PureCloud Auth
platformClient.ApiClient.instance.authentications['PureCloud Auth'].accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new platformClient.ContentManagementApi();

var workspaceId = "workspaceId_example"; // String | Workspace ID

var body = {}; // Object | tag

apiInstance.postContentmanagementWorkspaceTagvalues(workspaceId, body)
  .then(function(data) {
    console.log(`postContentmanagementWorkspaceTagvalues success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch(function(err) {
  	console.log('There was a failure calling postContentmanagementWorkspaceTagvalues');
    console.error(err);
  });

~~~

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **workspaceId** | **String** | Workspace ID |  |
 **body** | **Object** | tag |  |
{: class="table table-striped"}

### Return type

**TagValue**

<a name="postContentmanagementWorkspaceTagvaluesQuery"></a>

# TagValueEntityListing postContentmanagementWorkspaceTagvaluesQuery(workspaceId, body, opts)



POST /api/v2/contentmanagement/workspaces/{workspaceId}/tagvalues/query

Perform a prefix query on tags in the workspace



Requires NO permissions: 



### Request Body Schema

{::options parse_block_html="true" /}

<script type="text/javascript">
	function copyTagQueryRequestExample() {
		var $temp = $("<textarea>");
		$("body").append($temp);
		$temp.val($('#TagQueryRequestExample').text()).select();
		document.execCommand("copy");
		$temp.remove();
	}
</script>

TagQueryRequest <a style="cursor: pointer" onclick="copyTagQueryRequestExample()">Copy</a>

<div id="TagQueryRequestExample" style="max-height: 250px; overflow-y: scroll;">
~~~ json
{ 
  "query": String, 
  "pageNumber": Number, 
  "pageSize": Number, 
}
~~~
</div>


### Example Usage

~~~ javascript
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Configure OAuth2 access token for authorization: PureCloud Auth
platformClient.ApiClient.instance.authentications['PureCloud Auth'].accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new platformClient.ContentManagementApi();

var workspaceId = "workspaceId_example"; // String | Workspace ID

var body = {}; // Object | query

var opts = { 
  'expand': ["expand_example"] // [String] | Which fields, if any, to expand.
};
apiInstance.postContentmanagementWorkspaceTagvaluesQuery(workspaceId, body, opts)
  .then(function(data) {
    console.log(`postContentmanagementWorkspaceTagvaluesQuery success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch(function(err) {
  	console.log('There was a failure calling postContentmanagementWorkspaceTagvaluesQuery');
    console.error(err);
  });

~~~

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **workspaceId** | **String** | Workspace ID |  |
 **body** | **Object** | query |  |
 **expand** | **[String]** | Which fields, if any, to expand. | [optional] <br />**Values**: acl |
{: class="table table-striped"}

### Return type

**TagValueEntityListing**

<a name="postContentmanagementWorkspaces"></a>

# Workspace postContentmanagementWorkspaces(body)



POST /api/v2/contentmanagement/workspaces

Create a group workspace



Requires NO permissions: 



### Request Body Schema

{::options parse_block_html="true" /}

<script type="text/javascript">
	function copyWorkspaceCreateExample() {
		var $temp = $("<textarea>");
		$("body").append($temp);
		$temp.val($('#WorkspaceCreateExample').text()).select();
		document.execCommand("copy");
		$temp.remove();
	}
</script>

WorkspaceCreate <a style="cursor: pointer" onclick="copyWorkspaceCreateExample()">Copy</a>

<div id="WorkspaceCreateExample" style="max-height: 250px; overflow-y: scroll;">
~~~ json
{ 
  "name": String, 
  "bucket": String, 
  "description": String, 
}
~~~
</div>


### Example Usage

~~~ javascript
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Configure OAuth2 access token for authorization: PureCloud Auth
platformClient.ApiClient.instance.authentications['PureCloud Auth'].accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new platformClient.ContentManagementApi();

var body = {}; // Object | Workspace

apiInstance.postContentmanagementWorkspaces(body)
  .then(function(data) {
    console.log(`postContentmanagementWorkspaces success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch(function(err) {
  	console.log('There was a failure calling postContentmanagementWorkspaces');
    console.error(err);
  });

~~~

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **body** | **Object** | Workspace |  |
{: class="table table-striped"}

### Return type

**Workspace**

<a name="putContentmanagementWorkspace"></a>

# Workspace putContentmanagementWorkspace(workspaceId, body)



PUT /api/v2/contentmanagement/workspaces/{workspaceId}

Update a workspace



Requires NO permissions: 



### Request Body Schema

{::options parse_block_html="true" /}

<script type="text/javascript">
	function copyWorkspaceExample() {
		var $temp = $("<textarea>");
		$("body").append($temp);
		$temp.val($('#WorkspaceExample').text()).select();
		document.execCommand("copy");
		$temp.remove();
	}
</script>

Workspace <a style="cursor: pointer" onclick="copyWorkspaceExample()">Copy</a>

<div id="WorkspaceExample" style="max-height: 250px; overflow-y: scroll;">
~~~ json
{ 
  "id": String, 
  "name": String, 
  "type": String, 
  "isCurrentUserWorkspace": Boolean, 
  "user": { 
    "id": String, 
    "name": String, 
    "selfUri": String, 
  },  
  "bucket": String, 
  "dateCreated": Date, 
  "dateModified": Date, 
  "summary": { 
    "totalDocumentCount": Number, 
    "totalDocumentByteCount": Number, 
  },  
  "acl": [String], 
  "description": String, 
  "selfUri": String, 
}
~~~
</div>


### Example Usage

~~~ javascript
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Configure OAuth2 access token for authorization: PureCloud Auth
platformClient.ApiClient.instance.authentications['PureCloud Auth'].accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new platformClient.ContentManagementApi();

var workspaceId = "workspaceId_example"; // String | Workspace ID

var body = {}; // Object | Workspace

apiInstance.putContentmanagementWorkspace(workspaceId, body)
  .then(function(data) {
    console.log(`putContentmanagementWorkspace success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch(function(err) {
  	console.log('There was a failure calling putContentmanagementWorkspace');
    console.error(err);
  });

~~~

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **workspaceId** | **String** | Workspace ID |  |
 **body** | **Object** | Workspace |  |
{: class="table table-striped"}

### Return type

**Workspace**

<a name="putContentmanagementWorkspaceMember"></a>

# WorkspaceMember putContentmanagementWorkspaceMember(workspaceId, memberId, body)



PUT /api/v2/contentmanagement/workspaces/{workspaceId}/members/{memberId}

Add a member to a workspace



Requires NO permissions: 



### Request Body Schema

{::options parse_block_html="true" /}

<script type="text/javascript">
	function copyWorkspaceMemberExample() {
		var $temp = $("<textarea>");
		$("body").append($temp);
		$temp.val($('#WorkspaceMemberExample').text()).select();
		document.execCommand("copy");
		$temp.remove();
	}
</script>

WorkspaceMember <a style="cursor: pointer" onclick="copyWorkspaceMemberExample()">Copy</a>

<div id="WorkspaceMemberExample" style="max-height: 250px; overflow-y: scroll;">
~~~ json
{ 
  "id": String, 
  "name": String, 
  "workspace": { 
    "id": String, 
    "name": String, 
    "selfUri": String, 
  },  
  "memberType": String, 
  "member": { 
    "id": String, 
    "name": String, 
    "selfUri": String, 
  },  
  "user": { 
    "id": String, 
    "name": String, 
    "chat": { 
      "jabberId": String, 
    },  
    "department": String, 
    "email": String, 
    "primaryContactInfo": { 
      "address": String, 
      "display": String, 
      "mediaType": String, 
      "type": String, 
      "extension": String, 
    },  
    "addresses": { 
      "address": String, 
      "display": String, 
      "mediaType": String, 
      "type": String, 
      "extension": String, 
    },  
    "state": String, 
    "title": String, 
    "username": String, 
    "manager": User, 
    "images": { 
      "resolution": String, 
      "imageUri": String, 
    },  
    "version": Number, 
    "routingStatus": { 
      "userId": String, 
      "status": String, 
      "startTime": Date, 
    },  
    "presence": { 
      "id": String, 
      "name": String, 
      "source": String, 
      "primary": Boolean, 
      "presenceDefinition": { 
        "id": String, 
        "systemPresence": String, 
        "selfUri": String, 
      },  
      "message": String, 
      "modifiedDate": Date, 
      "selfUri": String, 
    },  
    "conversationSummary": { 
      "userId": String, 
      "call": { 
        "contactCenter": { 
          "active": Number, 
          "acw": Number, 
        },  
        "enterprise": { 
          "active": Number, 
          "acw": Number, 
        },  
      },  
      "callback": { 
        "contactCenter": { 
          "active": Number, 
          "acw": Number, 
        },  
        "enterprise": { 
          "active": Number, 
          "acw": Number, 
        },  
      },  
      "email": { 
        "contactCenter": { 
          "active": Number, 
          "acw": Number, 
        },  
        "enterprise": { 
          "active": Number, 
          "acw": Number, 
        },  
      },  
      "message": { 
        "contactCenter": { 
          "active": Number, 
          "acw": Number, 
        },  
        "enterprise": { 
          "active": Number, 
          "acw": Number, 
        },  
      },  
      "chat": { 
        "contactCenter": { 
          "active": Number, 
          "acw": Number, 
        },  
        "enterprise": { 
          "active": Number, 
          "acw": Number, 
        },  
      },  
      "socialExpression": { 
        "contactCenter": { 
          "active": Number, 
          "acw": Number, 
        },  
        "enterprise": { 
          "active": Number, 
          "acw": Number, 
        },  
      },  
      "video": { 
        "contactCenter": { 
          "active": Number, 
          "acw": Number, 
        },  
        "enterprise": { 
          "active": Number, 
          "acw": Number, 
        },  
      },  
    },  
    "outOfOffice": { 
      "id": String, 
      "name": String, 
      "user": User, 
      "startDate": Date, 
      "endDate": Date, 
      "active": Boolean, 
      "indefinite": Boolean, 
      "selfUri": String, 
    },  
    "geolocation": { 
      "id": String, 
      "name": String, 
      "type": String, 
      "primary": Boolean, 
      "latitude": Number, 
      "longitude": Number, 
      "country": String, 
      "region": String, 
      "city": String, 
      "locations": { 
        "id": String, 
        "name": String, 
        "address": { 
          "city": String, 
          "country": String, 
          "countryName": String, 
          "state": String, 
          "street1": String, 
          "street2": String, 
          "zipcode": String, 
        },  
        "addressVerified": Boolean, 
        "emergencyNumber": { 
          "e164": String, 
          "number": String, 
          "type": String, 
        },  
        "state": String, 
        "version": Number, 
        "path": [String], 
        "selfUri": String, 
      },  
      "selfUri": String, 
    },  
    "station": { 
      "associatedStation": { 
        "id": String, 
        "name": String, 
        "type": String, 
        "associatedUser": User, 
        "associatedDate": Date, 
        "defaultUser": User, 
        "providerInfo": {String: String}, 
      },  
      "effectiveStation": { 
        "id": String, 
        "name": String, 
        "type": String, 
        "associatedUser": User, 
        "associatedDate": Date, 
        "defaultUser": User, 
        "providerInfo": {String: String}, 
      },  
      "defaultStation": { 
        "id": String, 
        "name": String, 
        "type": String, 
        "associatedUser": User, 
        "associatedDate": Date, 
        "defaultUser": User, 
        "providerInfo": {String: String}, 
      },  
      "lastAssociatedStation": { 
        "id": String, 
        "name": String, 
        "type": String, 
        "associatedUser": User, 
        "associatedDate": Date, 
        "defaultUser": User, 
        "providerInfo": {String: String}, 
      },  
    },  
    "authorization": { 
      "roles": { 
        "id": String, 
        "name": String, 
      },  
      "permissions": [String], 
      "permissionPolicies": { 
        "id": String, 
        "domain": String, 
        "entityName": String, 
        "policyName": String, 
        "policyDescription": String, 
        "actionSetKey": String, 
        "allowConditions": Boolean, 
        "resourceConditionNode": { 
          "variableName": String, 
          "conjunction": String, 
          "operator": String, 
          "operands": { 
            "type": String, 
            "value": String, 
          },  
          "terms": { 
            "variableName": String, 
            "conjunction": String, 
            "operator": String, 
            "operands": { 
              "type": String, 
              "value": String, 
            },  
            "terms": { 
              "variableName": String, 
              "conjunction": String, 
              "operator": String, 
              "operands": { 
                "type": String, 
                "value": String, 
              },  
              "terms": { 
                "variableName": String, 
                "conjunction": String, 
                "operator": String, 
                "operands": [ResourceConditionValue], 
                "terms": [ResourceConditionNode], 
              },  
            },  
          },  
        },  
        "namedResources": [String], 
        "resourceCondition": String, 
        "actionSet": [String], 
      },  
    },  
    "profileSkills": [String], 
    "locations": { 
      "id": String, 
      "floorplanId": String, 
      "coordinates": {String: Number}, 
      "notes": String, 
      "locationDefinition": { 
        "id": String, 
        "name": String, 
        "address": { 
          "city": String, 
          "country": String, 
          "countryName": String, 
          "state": String, 
          "street1": String, 
          "street2": String, 
          "zipcode": String, 
        },  
        "addressVerified": Boolean, 
        "emergencyNumber": { 
          "e164": String, 
          "number": String, 
          "type": String, 
        },  
        "state": String, 
        "version": Number, 
        "path": [String], 
        "selfUri": String, 
      },  
    },  
    "groups": { 
      "id": String, 
      "name": String, 
      "description": String, 
      "dateModified": Date, 
      "memberCount": Number, 
      "state": String, 
      "version": Number, 
      "type": String, 
      "images": { 
        "resolution": String, 
        "imageUri": String, 
      },  
      "addresses": { 
        "address": String, 
        "display": String, 
        "type": String, 
        "mediaType": String, 
      },  
      "rulesVisible": Boolean, 
      "visibility": String, 
      "owners": User, 
      "selfUri": String, 
    },  
    "selfUri": String, 
  },  
  "group": { 
    "id": String, 
    "name": String, 
    "description": String, 
    "dateModified": Date, 
    "memberCount": Number, 
    "state": String, 
    "version": Number, 
    "type": String, 
    "images": { 
      "resolution": String, 
      "imageUri": String, 
    },  
    "addresses": { 
      "address": String, 
      "display": String, 
      "type": String, 
      "mediaType": String, 
    },  
    "rulesVisible": Boolean, 
    "visibility": String, 
    "owners": User, 
    "selfUri": String, 
  },  
  "securityProfile": { 
    "id": String, 
    "name": String, 
    "permissions": [String], 
    "selfUri": String, 
  },  
  "selfUri": String, 
}
~~~
</div>


### Example Usage

~~~ javascript
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Configure OAuth2 access token for authorization: PureCloud Auth
platformClient.ApiClient.instance.authentications['PureCloud Auth'].accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new platformClient.ContentManagementApi();

var workspaceId = "workspaceId_example"; // String | Workspace ID

var memberId = "memberId_example"; // String | Member ID

var body = {}; // Object | Workspace Member

apiInstance.putContentmanagementWorkspaceMember(workspaceId, memberId, body)
  .then(function(data) {
    console.log(`putContentmanagementWorkspaceMember success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch(function(err) {
  	console.log('There was a failure calling putContentmanagementWorkspaceMember');
    console.error(err);
  });

~~~

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **workspaceId** | **String** | Workspace ID |  |
 **memberId** | **String** | Member ID |  |
 **body** | **Object** | Workspace Member |  |
{: class="table table-striped"}

### Return type

**WorkspaceMember**

<a name="putContentmanagementWorkspaceTagvalue"></a>

# TagValue putContentmanagementWorkspaceTagvalue(workspaceId, tagId, body)



PUT /api/v2/contentmanagement/workspaces/{workspaceId}/tagvalues/{tagId}

Update a workspace tag. Will update all documents with the new tag value.



Requires NO permissions: 



### Request Body Schema

{::options parse_block_html="true" /}

<script type="text/javascript">
	function copyTagValueExample() {
		var $temp = $("<textarea>");
		$("body").append($temp);
		$temp.val($('#TagValueExample').text()).select();
		document.execCommand("copy");
		$temp.remove();
	}
</script>

TagValue <a style="cursor: pointer" onclick="copyTagValueExample()">Copy</a>

<div id="TagValueExample" style="max-height: 250px; overflow-y: scroll;">
~~~ json
{ 
  "id": String, 
  "name": String, 
  "inUse": Boolean, 
  "acl": [String], 
  "selfUri": String, 
}
~~~
</div>


### Example Usage

~~~ javascript
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Configure OAuth2 access token for authorization: PureCloud Auth
platformClient.ApiClient.instance.authentications['PureCloud Auth'].accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new platformClient.ContentManagementApi();

var workspaceId = "workspaceId_example"; // String | Workspace ID

var tagId = "tagId_example"; // String | Tag ID

var body = {}; // Object | Workspace

apiInstance.putContentmanagementWorkspaceTagvalue(workspaceId, tagId, body)
  .then(function(data) {
    console.log(`putContentmanagementWorkspaceTagvalue success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch(function(err) {
  	console.log('There was a failure calling putContentmanagementWorkspaceTagvalue');
    console.error(err);
  });

~~~

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **workspaceId** | **String** | Workspace ID |  |
 **tagId** | **String** | Tag ID |  |
 **body** | **Object** | Workspace |  |
{: class="table table-striped"}

### Return type

**TagValue**

