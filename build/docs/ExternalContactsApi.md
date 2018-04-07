---
title: ExternalContactsApi
---
# platformClient.ExternalContactsApi

All URIs are relative to *https://api.mypurecloud.com*

| Method | HTTP request | Description |
| ------------- | ------------- | ------------- |
[**deleteExternalcontactsContact**](ExternalContactsApi.html#deleteExternalcontactsContact) | **DELETE** /api/v2/externalcontacts/contacts/{contactId} | Delete an external contact
[**deleteExternalcontactsContactNote**](ExternalContactsApi.html#deleteExternalcontactsContactNote) | **DELETE** /api/v2/externalcontacts/contacts/{contactId}/notes/{noteId} | Delete a note for an external contact
[**deleteExternalcontactsOrganization**](ExternalContactsApi.html#deleteExternalcontactsOrganization) | **DELETE** /api/v2/externalcontacts/organizations/{externalOrganizationId} | Delete an external organization
[**deleteExternalcontactsOrganizationNote**](ExternalContactsApi.html#deleteExternalcontactsOrganizationNote) | **DELETE** /api/v2/externalcontacts/organizations/{externalOrganizationId}/notes/{noteId} | Delete a note for an external organization
[**deleteExternalcontactsOrganizationTrustor**](ExternalContactsApi.html#deleteExternalcontactsOrganizationTrustor) | **DELETE** /api/v2/externalcontacts/organizations/{externalOrganizationId}/trustor | Unlink the Trustor for this External Organization
[**deleteExternalcontactsRelationship**](ExternalContactsApi.html#deleteExternalcontactsRelationship) | **DELETE** /api/v2/externalcontacts/relationships/{relationshipId} | Delete a relationship
[**getExternalcontactsContact**](ExternalContactsApi.html#getExternalcontactsContact) | **GET** /api/v2/externalcontacts/contacts/{contactId} | Fetch an external contact
[**getExternalcontactsContactNote**](ExternalContactsApi.html#getExternalcontactsContactNote) | **GET** /api/v2/externalcontacts/contacts/{contactId}/notes/{noteId} | Fetch a note for an external contact
[**getExternalcontactsContactNotes**](ExternalContactsApi.html#getExternalcontactsContactNotes) | **GET** /api/v2/externalcontacts/contacts/{contactId}/notes | List notes for an external contact
[**getExternalcontactsContacts**](ExternalContactsApi.html#getExternalcontactsContacts) | **GET** /api/v2/externalcontacts/contacts | Search for external contacts
[**getExternalcontactsOrganization**](ExternalContactsApi.html#getExternalcontactsOrganization) | **GET** /api/v2/externalcontacts/organizations/{externalOrganizationId} | Fetch an external organization
[**getExternalcontactsOrganizationContacts**](ExternalContactsApi.html#getExternalcontactsOrganizationContacts) | **GET** /api/v2/externalcontacts/organizations/{externalOrganizationId}/contacts | Search for external contacts in an external organization
[**getExternalcontactsOrganizationNote**](ExternalContactsApi.html#getExternalcontactsOrganizationNote) | **GET** /api/v2/externalcontacts/organizations/{externalOrganizationId}/notes/{noteId} | Fetch a note for an external organization
[**getExternalcontactsOrganizationNotes**](ExternalContactsApi.html#getExternalcontactsOrganizationNotes) | **GET** /api/v2/externalcontacts/organizations/{externalOrganizationId}/notes | List notes for an external organization
[**getExternalcontactsOrganizationRelationships**](ExternalContactsApi.html#getExternalcontactsOrganizationRelationships) | **GET** /api/v2/externalcontacts/organizations/{externalOrganizationId}/relationships | Fetch a relationship for an external organization
[**getExternalcontactsOrganizations**](ExternalContactsApi.html#getExternalcontactsOrganizations) | **GET** /api/v2/externalcontacts/organizations | Search for external organizations
[**getExternalcontactsRelationship**](ExternalContactsApi.html#getExternalcontactsRelationship) | **GET** /api/v2/externalcontacts/relationships/{relationshipId} | Fetch a relationship
[**getExternalcontactsReversewhitepageslookup**](ExternalContactsApi.html#getExternalcontactsReversewhitepageslookup) | **GET** /api/v2/externalcontacts/reversewhitepageslookup | Lookup contacts and externalOrganizations based on an attribute
[**postExternalcontactsContactNotes**](ExternalContactsApi.html#postExternalcontactsContactNotes) | **POST** /api/v2/externalcontacts/contacts/{contactId}/notes | Create a note for an external contact
[**postExternalcontactsContacts**](ExternalContactsApi.html#postExternalcontactsContacts) | **POST** /api/v2/externalcontacts/contacts | Create an external contact
[**postExternalcontactsOrganizationNotes**](ExternalContactsApi.html#postExternalcontactsOrganizationNotes) | **POST** /api/v2/externalcontacts/organizations/{externalOrganizationId}/notes | Create a note for an external organization
[**postExternalcontactsOrganizations**](ExternalContactsApi.html#postExternalcontactsOrganizations) | **POST** /api/v2/externalcontacts/organizations | Create an external organization
[**postExternalcontactsRelationships**](ExternalContactsApi.html#postExternalcontactsRelationships) | **POST** /api/v2/externalcontacts/relationships | Create a relationship
[**putExternalcontactsContact**](ExternalContactsApi.html#putExternalcontactsContact) | **PUT** /api/v2/externalcontacts/contacts/{contactId} | Update an external contact
[**putExternalcontactsContactNote**](ExternalContactsApi.html#putExternalcontactsContactNote) | **PUT** /api/v2/externalcontacts/contacts/{contactId}/notes/{noteId} | Update a note for an external contact
[**putExternalcontactsConversation**](ExternalContactsApi.html#putExternalcontactsConversation) | **PUT** /api/v2/externalcontacts/conversations/{conversationId} | Associate an external contact with a conversation
[**putExternalcontactsOrganization**](ExternalContactsApi.html#putExternalcontactsOrganization) | **PUT** /api/v2/externalcontacts/organizations/{externalOrganizationId} | Update an external organization
[**putExternalcontactsOrganizationNote**](ExternalContactsApi.html#putExternalcontactsOrganizationNote) | **PUT** /api/v2/externalcontacts/organizations/{externalOrganizationId}/notes/{noteId} | Update a note for an external organization
[**putExternalcontactsOrganizationTrustorTrustorId**](ExternalContactsApi.html#putExternalcontactsOrganizationTrustorTrustorId) | **PUT** /api/v2/externalcontacts/organizations/{externalOrganizationId}/trustor/{trustorId} | Links a Trustor with an Extenral Organization
[**putExternalcontactsRelationship**](ExternalContactsApi.html#putExternalcontactsRelationship) | **PUT** /api/v2/externalcontacts/relationships/{relationshipId} | Update a relationship
{: class="table table-striped"}

<a name="deleteExternalcontactsContact"></a>

# void deleteExternalcontactsContact(contactId)

DELETE /api/v2/externalcontacts/contacts/{contactId}

Delete an external contact



### Example

~~~ javascript
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Configure OAuth2 access token for authorization: PureCloud Auth
platformClient.ApiClient.instance.authentications['PureCloud Auth'].accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new platformClient.ExternalContactsApi();

var contactId = "contactId_example"; // String | ExternalContact ID

apiInstance.deleteExternalcontactsContact(contactId)
  .then(function() {
    console.log('deleteExternalcontactsContact returned successfully.');
  })
  .catch(function(err) {
  	console.log('There was a failure calling deleteExternalcontactsContact');
    console.error(err);
  });

~~~

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **contactId** | **String** | ExternalContact ID |  |
{: class="table table-striped"}

### Return type

void (no response body)

<a name="deleteExternalcontactsContactNote"></a>

# void deleteExternalcontactsContactNote(contactId, noteId)

DELETE /api/v2/externalcontacts/contacts/{contactId}/notes/{noteId}

Delete a note for an external contact



### Example

~~~ javascript
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Configure OAuth2 access token for authorization: PureCloud Auth
platformClient.ApiClient.instance.authentications['PureCloud Auth'].accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new platformClient.ExternalContactsApi();

var contactId = "contactId_example"; // String | ExternalContact Id

var noteId = "noteId_example"; // String | Note Id

apiInstance.deleteExternalcontactsContactNote(contactId, noteId)
  .then(function() {
    console.log('deleteExternalcontactsContactNote returned successfully.');
  })
  .catch(function(err) {
  	console.log('There was a failure calling deleteExternalcontactsContactNote');
    console.error(err);
  });

~~~

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **contactId** | **String** | ExternalContact Id |  |
 **noteId** | **String** | Note Id |  |
{: class="table table-striped"}

### Return type

void (no response body)

<a name="deleteExternalcontactsOrganization"></a>

# void deleteExternalcontactsOrganization(externalOrganizationId)

DELETE /api/v2/externalcontacts/organizations/{externalOrganizationId}

Delete an external organization



### Example

~~~ javascript
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Configure OAuth2 access token for authorization: PureCloud Auth
platformClient.ApiClient.instance.authentications['PureCloud Auth'].accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new platformClient.ExternalContactsApi();

var externalOrganizationId = "externalOrganizationId_example"; // String | External Organization ID

apiInstance.deleteExternalcontactsOrganization(externalOrganizationId)
  .then(function() {
    console.log('deleteExternalcontactsOrganization returned successfully.');
  })
  .catch(function(err) {
  	console.log('There was a failure calling deleteExternalcontactsOrganization');
    console.error(err);
  });

~~~

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **externalOrganizationId** | **String** | External Organization ID |  |
{: class="table table-striped"}

### Return type

void (no response body)

<a name="deleteExternalcontactsOrganizationNote"></a>

# void deleteExternalcontactsOrganizationNote(externalOrganizationId, noteId)

DELETE /api/v2/externalcontacts/organizations/{externalOrganizationId}/notes/{noteId}

Delete a note for an external organization



### Example

~~~ javascript
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Configure OAuth2 access token for authorization: PureCloud Auth
platformClient.ApiClient.instance.authentications['PureCloud Auth'].accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new platformClient.ExternalContactsApi();

var externalOrganizationId = "externalOrganizationId_example"; // String | External Organization Id

var noteId = "noteId_example"; // String | Note Id

apiInstance.deleteExternalcontactsOrganizationNote(externalOrganizationId, noteId)
  .then(function() {
    console.log('deleteExternalcontactsOrganizationNote returned successfully.');
  })
  .catch(function(err) {
  	console.log('There was a failure calling deleteExternalcontactsOrganizationNote');
    console.error(err);
  });

~~~

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **externalOrganizationId** | **String** | External Organization Id |  |
 **noteId** | **String** | Note Id |  |
{: class="table table-striped"}

### Return type

void (no response body)

<a name="deleteExternalcontactsOrganizationTrustor"></a>

# void deleteExternalcontactsOrganizationTrustor(externalOrganizationId)

DELETE /api/v2/externalcontacts/organizations/{externalOrganizationId}/trustor

Unlink the Trustor for this External Organization



### Example

~~~ javascript
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Configure OAuth2 access token for authorization: PureCloud Auth
platformClient.ApiClient.instance.authentications['PureCloud Auth'].accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new platformClient.ExternalContactsApi();

var externalOrganizationId = "externalOrganizationId_example"; // String | External Organization ID

apiInstance.deleteExternalcontactsOrganizationTrustor(externalOrganizationId)
  .then(function() {
    console.log('deleteExternalcontactsOrganizationTrustor returned successfully.');
  })
  .catch(function(err) {
  	console.log('There was a failure calling deleteExternalcontactsOrganizationTrustor');
    console.error(err);
  });

~~~

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **externalOrganizationId** | **String** | External Organization ID |  |
{: class="table table-striped"}

### Return type

void (no response body)

<a name="deleteExternalcontactsRelationship"></a>

# void deleteExternalcontactsRelationship(relationshipId)

DELETE /api/v2/externalcontacts/relationships/{relationshipId}

Delete a relationship



### Example

~~~ javascript
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Configure OAuth2 access token for authorization: PureCloud Auth
platformClient.ApiClient.instance.authentications['PureCloud Auth'].accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new platformClient.ExternalContactsApi();

var relationshipId = "relationshipId_example"; // String | Relationship Id

apiInstance.deleteExternalcontactsRelationship(relationshipId)
  .then(function() {
    console.log('deleteExternalcontactsRelationship returned successfully.');
  })
  .catch(function(err) {
  	console.log('There was a failure calling deleteExternalcontactsRelationship');
    console.error(err);
  });

~~~

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **relationshipId** | **String** | Relationship Id |  |
{: class="table table-striped"}

### Return type

void (no response body)

<a name="getExternalcontactsContact"></a>

# ExternalContact getExternalcontactsContact(contactId, opts)

GET /api/v2/externalcontacts/contacts/{contactId}

Fetch an external contact



### Example

~~~ javascript
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Configure OAuth2 access token for authorization: PureCloud Auth
platformClient.ApiClient.instance.authentications['PureCloud Auth'].accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new platformClient.ExternalContactsApi();

var contactId = "contactId_example"; // String | ExternalContact ID

var opts = { 
  'expand': ["expand_example"] // [String] | which fields, if any, to expand (externalOrganization,externalDataSources)
};
apiInstance.getExternalcontactsContact(contactId, opts)
  .then(function(data) {
    console.log(`getExternalcontactsContact success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch(function(err) {
  	console.log('There was a failure calling getExternalcontactsContact');
    console.error(err);
  });

~~~

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **contactId** | **String** | ExternalContact ID |  |
 **expand** | **[String]** | which fields, if any, to expand (externalOrganization,externalDataSources) | [optional] <br />**Values**: externalOrganization, externalDataSources |
{: class="table table-striped"}

### Return type

**ExternalContact**

<a name="getExternalcontactsContactNote"></a>

# Note getExternalcontactsContactNote(contactId, noteId, opts)

GET /api/v2/externalcontacts/contacts/{contactId}/notes/{noteId}

Fetch a note for an external contact



### Example

~~~ javascript
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Configure OAuth2 access token for authorization: PureCloud Auth
platformClient.ApiClient.instance.authentications['PureCloud Auth'].accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new platformClient.ExternalContactsApi();

var contactId = "contactId_example"; // String | ExternalContact Id

var noteId = "noteId_example"; // String | Note Id

var opts = { 
  'expand': ["expand_example"] // [String] | which fields, if any, to expand
};
apiInstance.getExternalcontactsContactNote(contactId, noteId, opts)
  .then(function(data) {
    console.log(`getExternalcontactsContactNote success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch(function(err) {
  	console.log('There was a failure calling getExternalcontactsContactNote');
    console.error(err);
  });

~~~

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **contactId** | **String** | ExternalContact Id |  |
 **noteId** | **String** | Note Id |  |
 **expand** | **[String]** | which fields, if any, to expand | [optional] <br />**Values**: author, externalDataSources |
{: class="table table-striped"}

### Return type

**Note**

<a name="getExternalcontactsContactNotes"></a>

# NoteListing getExternalcontactsContactNotes(contactId, opts)

GET /api/v2/externalcontacts/contacts/{contactId}/notes

List notes for an external contact



### Example

~~~ javascript
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Configure OAuth2 access token for authorization: PureCloud Auth
platformClient.ApiClient.instance.authentications['PureCloud Auth'].accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new platformClient.ExternalContactsApi();

var contactId = "contactId_example"; // String | ExternalContact Id

var opts = { 
  'pageSize': 20, // Number | Page size (limited to fetching first 1,000 records; pageNumber * pageSize must be <= 1,000)
  'pageNumber': 1, // Number | Page number (limited to fetching first 1,000 records; pageNumber * pageSize must be <= 1,000)
  'sortOrder': "sortOrder_example", // String | Sort order
  'expand': ["expand_example"] // [String] | which fields, if any, to expand
};
apiInstance.getExternalcontactsContactNotes(contactId, opts)
  .then(function(data) {
    console.log(`getExternalcontactsContactNotes success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch(function(err) {
  	console.log('There was a failure calling getExternalcontactsContactNotes');
    console.error(err);
  });

~~~

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **contactId** | **String** | ExternalContact Id |  |
 **pageSize** | **Number** | Page size (limited to fetching first 1,000 records; pageNumber * pageSize must be &lt;= 1,000) | [optional] [default to 20] |
 **pageNumber** | **Number** | Page number (limited to fetching first 1,000 records; pageNumber * pageSize must be &lt;= 1,000) | [optional] [default to 1] |
 **sortOrder** | **String** | Sort order | [optional]  |
 **expand** | **[String]** | which fields, if any, to expand | [optional] <br />**Values**: author, externalDataSources |
{: class="table table-striped"}

### Return type

**NoteListing**

<a name="getExternalcontactsContacts"></a>

# ContactListing getExternalcontactsContacts(opts)

GET /api/v2/externalcontacts/contacts

Search for external contacts



### Example

~~~ javascript
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Configure OAuth2 access token for authorization: PureCloud Auth
platformClient.ApiClient.instance.authentications['PureCloud Auth'].accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new platformClient.ExternalContactsApi();

var opts = { 
  'pageSize': 20, // Number | Page size (limited to fetching first 1,000 records; pageNumber * pageSize must be <= 1,000)
  'pageNumber': 1, // Number | Page number (limited to fetching first 1,000 records; pageNumber * pageSize must be <= 1,000)
  'q': "q_example", // String | User supplied search keywords (no special syntax is currently supported)
  'sortOrder': "sortOrder_example", // String | Sort order
  'expand': ["expand_example"] // [String] | which fields, if any, to expand
};
apiInstance.getExternalcontactsContacts(opts)
  .then(function(data) {
    console.log(`getExternalcontactsContacts success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch(function(err) {
  	console.log('There was a failure calling getExternalcontactsContacts');
    console.error(err);
  });

~~~

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **pageSize** | **Number** | Page size (limited to fetching first 1,000 records; pageNumber * pageSize must be &lt;= 1,000) | [optional] [default to 20] |
 **pageNumber** | **Number** | Page number (limited to fetching first 1,000 records; pageNumber * pageSize must be &lt;= 1,000) | [optional] [default to 1] |
 **q** | **String** | User supplied search keywords (no special syntax is currently supported) | [optional]  |
 **sortOrder** | **String** | Sort order | [optional]  |
 **expand** | **[String]** | which fields, if any, to expand | [optional] <br />**Values**: externalOrganization, externalDataSources |
{: class="table table-striped"}

### Return type

**ContactListing**

<a name="getExternalcontactsOrganization"></a>

# ExternalOrganization getExternalcontactsOrganization(externalOrganizationId, opts)

GET /api/v2/externalcontacts/organizations/{externalOrganizationId}

Fetch an external organization



### Example

~~~ javascript
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Configure OAuth2 access token for authorization: PureCloud Auth
platformClient.ApiClient.instance.authentications['PureCloud Auth'].accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new platformClient.ExternalContactsApi();

var externalOrganizationId = "externalOrganizationId_example"; // String | External Organization ID

var opts = { 
  'expand': "expand_example", // String | which fields, if any, to expand (externalDataSources)
  'includeTrustors': true // Boolean | (true or false) whether or not to include trustor information embedded in the externalOrganization
};
apiInstance.getExternalcontactsOrganization(externalOrganizationId, opts)
  .then(function(data) {
    console.log(`getExternalcontactsOrganization success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch(function(err) {
  	console.log('There was a failure calling getExternalcontactsOrganization');
    console.error(err);
  });

~~~

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **externalOrganizationId** | **String** | External Organization ID |  |
 **expand** | **String** | which fields, if any, to expand (externalDataSources) | [optional] <br />**Values**: externalDataSources |
 **includeTrustors** | **Boolean** | (true or false) whether or not to include trustor information embedded in the externalOrganization | [optional]  |
{: class="table table-striped"}

### Return type

**ExternalOrganization**

<a name="getExternalcontactsOrganizationContacts"></a>

# ContactListing getExternalcontactsOrganizationContacts(externalOrganizationId, opts)

GET /api/v2/externalcontacts/organizations/{externalOrganizationId}/contacts

Search for external contacts in an external organization



### Example

~~~ javascript
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Configure OAuth2 access token for authorization: PureCloud Auth
platformClient.ApiClient.instance.authentications['PureCloud Auth'].accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new platformClient.ExternalContactsApi();

var externalOrganizationId = "externalOrganizationId_example"; // String | External Organization ID

var opts = { 
  'pageSize': 20, // Number | Page size (limited to fetching first 1,000 records; pageNumber * pageSize must be <= 1,000)
  'pageNumber': 1, // Number | Page number (limited to fetching first 1,000 records; pageNumber * pageSize must be <= 1,000)
  'q': "q_example", // String | User supplied search keywords (no special syntax is currently supported)
  'sortOrder': "sortOrder_example", // String | Sort order
  'expand': ["expand_example"] // [String] | which fields, if any, to expand
};
apiInstance.getExternalcontactsOrganizationContacts(externalOrganizationId, opts)
  .then(function(data) {
    console.log(`getExternalcontactsOrganizationContacts success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch(function(err) {
  	console.log('There was a failure calling getExternalcontactsOrganizationContacts');
    console.error(err);
  });

~~~

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **externalOrganizationId** | **String** | External Organization ID |  |
 **pageSize** | **Number** | Page size (limited to fetching first 1,000 records; pageNumber * pageSize must be &lt;= 1,000) | [optional] [default to 20] |
 **pageNumber** | **Number** | Page number (limited to fetching first 1,000 records; pageNumber * pageSize must be &lt;= 1,000) | [optional] [default to 1] |
 **q** | **String** | User supplied search keywords (no special syntax is currently supported) | [optional]  |
 **sortOrder** | **String** | Sort order | [optional]  |
 **expand** | **[String]** | which fields, if any, to expand | [optional] <br />**Values**: externalOrganization, externalDataSources |
{: class="table table-striped"}

### Return type

**ContactListing**

<a name="getExternalcontactsOrganizationNote"></a>

# Note getExternalcontactsOrganizationNote(externalOrganizationId, noteId, opts)

GET /api/v2/externalcontacts/organizations/{externalOrganizationId}/notes/{noteId}

Fetch a note for an external organization



### Example

~~~ javascript
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Configure OAuth2 access token for authorization: PureCloud Auth
platformClient.ApiClient.instance.authentications['PureCloud Auth'].accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new platformClient.ExternalContactsApi();

var externalOrganizationId = "externalOrganizationId_example"; // String | External Organization Id

var noteId = "noteId_example"; // String | Note Id

var opts = { 
  'expand': ["expand_example"] // [String] | which fields, if any, to expand
};
apiInstance.getExternalcontactsOrganizationNote(externalOrganizationId, noteId, opts)
  .then(function(data) {
    console.log(`getExternalcontactsOrganizationNote success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch(function(err) {
  	console.log('There was a failure calling getExternalcontactsOrganizationNote');
    console.error(err);
  });

~~~

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **externalOrganizationId** | **String** | External Organization Id |  |
 **noteId** | **String** | Note Id |  |
 **expand** | **[String]** | which fields, if any, to expand | [optional] <br />**Values**: author, externalDataSources |
{: class="table table-striped"}

### Return type

**Note**

<a name="getExternalcontactsOrganizationNotes"></a>

# NoteListing getExternalcontactsOrganizationNotes(externalOrganizationId, opts)

GET /api/v2/externalcontacts/organizations/{externalOrganizationId}/notes

List notes for an external organization



### Example

~~~ javascript
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Configure OAuth2 access token for authorization: PureCloud Auth
platformClient.ApiClient.instance.authentications['PureCloud Auth'].accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new platformClient.ExternalContactsApi();

var externalOrganizationId = "externalOrganizationId_example"; // String | External Organization Id

var opts = { 
  'pageSize': 20, // Number | Page size (limited to fetching first 1,000 records; pageNumber * pageSize must be <= 1,000)
  'pageNumber': 1, // Number | Page number (limited to fetching first 1,000 records; pageNumber * pageSize must be <= 1,000)
  'sortOrder': "sortOrder_example", // String | Sort order
  'expand': ["expand_example"] // [String] | which fields, if any, to expand
};
apiInstance.getExternalcontactsOrganizationNotes(externalOrganizationId, opts)
  .then(function(data) {
    console.log(`getExternalcontactsOrganizationNotes success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch(function(err) {
  	console.log('There was a failure calling getExternalcontactsOrganizationNotes');
    console.error(err);
  });

~~~

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **externalOrganizationId** | **String** | External Organization Id |  |
 **pageSize** | **Number** | Page size (limited to fetching first 1,000 records; pageNumber * pageSize must be &lt;= 1,000) | [optional] [default to 20] |
 **pageNumber** | **Number** | Page number (limited to fetching first 1,000 records; pageNumber * pageSize must be &lt;= 1,000) | [optional] [default to 1] |
 **sortOrder** | **String** | Sort order | [optional]  |
 **expand** | **[String]** | which fields, if any, to expand | [optional] <br />**Values**: author, externalDataSources |
{: class="table table-striped"}

### Return type

**NoteListing**

<a name="getExternalcontactsOrganizationRelationships"></a>

# RelationshipListing getExternalcontactsOrganizationRelationships(externalOrganizationId, opts)

GET /api/v2/externalcontacts/organizations/{externalOrganizationId}/relationships

Fetch a relationship for an external organization



### Example

~~~ javascript
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Configure OAuth2 access token for authorization: PureCloud Auth
platformClient.ApiClient.instance.authentications['PureCloud Auth'].accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new platformClient.ExternalContactsApi();

var externalOrganizationId = "externalOrganizationId_example"; // String | External Organization ID

var opts = { 
  'pageSize': 20, // Number | Page size (limited to fetching first 1,000 records; pageNumber * pageSize must be <= 1,000)
  'pageNumber': 1, // Number | Page number (limited to fetching first 1,000 records; pageNumber * pageSize must be <= 1,000)
  'expand': "expand_example", // String | which fields, if any, to expand
  'sortOrder': "sortOrder_example" // String | Sort order
};
apiInstance.getExternalcontactsOrganizationRelationships(externalOrganizationId, opts)
  .then(function(data) {
    console.log(`getExternalcontactsOrganizationRelationships success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch(function(err) {
  	console.log('There was a failure calling getExternalcontactsOrganizationRelationships');
    console.error(err);
  });

~~~

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **externalOrganizationId** | **String** | External Organization ID |  |
 **pageSize** | **Number** | Page size (limited to fetching first 1,000 records; pageNumber * pageSize must be &lt;= 1,000) | [optional] [default to 20] |
 **pageNumber** | **Number** | Page number (limited to fetching first 1,000 records; pageNumber * pageSize must be &lt;= 1,000) | [optional] [default to 1] |
 **expand** | **String** | which fields, if any, to expand | [optional] <br />**Values**: externalDataSources |
 **sortOrder** | **String** | Sort order | [optional]  |
{: class="table table-striped"}

### Return type

**RelationshipListing**

<a name="getExternalcontactsOrganizations"></a>

# ExternalOrganizationListing getExternalcontactsOrganizations(opts)

GET /api/v2/externalcontacts/organizations

Search for external organizations



### Example

~~~ javascript
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Configure OAuth2 access token for authorization: PureCloud Auth
platformClient.ApiClient.instance.authentications['PureCloud Auth'].accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new platformClient.ExternalContactsApi();

var opts = { 
  'pageSize': 20, // Number | Page size (limited to fetching first 1,000 records; pageNumber * pageSize must be <= 1,000)
  'pageNumber': 1, // Number | Page number (limited to fetching first 1,000 records; pageNumber * pageSize must be <= 1,000)
  'q': "q_example", // String | Search query
  'trustorId': ["trustorId_example"], // [String] | Search for external organizations by trustorIds (limit 25). If supplied, the 'q' parameters is ignored. Items are returned in the order requested
  'sortOrder': "sortOrder_example", // String | Sort order
  'expand': ["expand_example"], // [String] | which fields, if any, to expand
  'includeTrustors': true // Boolean | (true or false) whether or not to include trustor information embedded in the externalOrganization
};
apiInstance.getExternalcontactsOrganizations(opts)
  .then(function(data) {
    console.log(`getExternalcontactsOrganizations success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch(function(err) {
  	console.log('There was a failure calling getExternalcontactsOrganizations');
    console.error(err);
  });

~~~

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **pageSize** | **Number** | Page size (limited to fetching first 1,000 records; pageNumber * pageSize must be &lt;= 1,000) | [optional] [default to 20] |
 **pageNumber** | **Number** | Page number (limited to fetching first 1,000 records; pageNumber * pageSize must be &lt;= 1,000) | [optional] [default to 1] |
 **q** | **String** | Search query | [optional]  |
 **trustorId** | **[String]** | Search for external organizations by trustorIds (limit 25). If supplied, the &#39;q&#39; parameters is ignored. Items are returned in the order requested | [optional]  |
 **sortOrder** | **String** | Sort order | [optional]  |
 **expand** | **[String]** | which fields, if any, to expand | [optional] <br />**Values**: externalDataSources |
 **includeTrustors** | **Boolean** | (true or false) whether or not to include trustor information embedded in the externalOrganization | [optional]  |
{: class="table table-striped"}

### Return type

**ExternalOrganizationListing**

<a name="getExternalcontactsRelationship"></a>

# Relationship getExternalcontactsRelationship(relationshipId, opts)

GET /api/v2/externalcontacts/relationships/{relationshipId}

Fetch a relationship



### Example

~~~ javascript
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Configure OAuth2 access token for authorization: PureCloud Auth
platformClient.ApiClient.instance.authentications['PureCloud Auth'].accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new platformClient.ExternalContactsApi();

var relationshipId = "relationshipId_example"; // String | Relationship Id

var opts = { 
  'expand': "expand_example" // String | which fields, if any, to expand
};
apiInstance.getExternalcontactsRelationship(relationshipId, opts)
  .then(function(data) {
    console.log(`getExternalcontactsRelationship success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch(function(err) {
  	console.log('There was a failure calling getExternalcontactsRelationship');
    console.error(err);
  });

~~~

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **relationshipId** | **String** | Relationship Id |  |
 **expand** | **String** | which fields, if any, to expand | [optional] <br />**Values**: externalDataSources |
{: class="table table-striped"}

### Return type

**Relationship**

<a name="getExternalcontactsReversewhitepageslookup"></a>

# ReverseWhitepagesLookupResult getExternalcontactsReversewhitepageslookup(lookupVal, opts)

GET /api/v2/externalcontacts/reversewhitepageslookup

Lookup contacts and externalOrganizations based on an attribute



### Example

~~~ javascript
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Configure OAuth2 access token for authorization: PureCloud Auth
platformClient.ApiClient.instance.authentications['PureCloud Auth'].accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new platformClient.ExternalContactsApi();

var lookupVal = "lookupVal_example"; // String | User supplied value to lookup contacts/externalOrganizations (supports email addresses, e164 phone numbers, Twitter screen names)

var opts = { 
  'expand': ["expand_example"] // [String] | which field, if any, to expand
};
apiInstance.getExternalcontactsReversewhitepageslookup(lookupVal, opts)
  .then(function(data) {
    console.log(`getExternalcontactsReversewhitepageslookup success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch(function(err) {
  	console.log('There was a failure calling getExternalcontactsReversewhitepageslookup');
    console.error(err);
  });

~~~

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **lookupVal** | **String** | User supplied value to lookup contacts/externalOrganizations (supports email addresses, e164 phone numbers, Twitter screen names) |  |
 **expand** | **[String]** | which field, if any, to expand | [optional] <br />**Values**: contacts.externalOrganization, externalDataSources |
{: class="table table-striped"}

### Return type

**ReverseWhitepagesLookupResult**

<a name="postExternalcontactsContactNotes"></a>

# Note postExternalcontactsContactNotes(contactId, opts)

POST /api/v2/externalcontacts/contacts/{contactId}/notes

Create a note for an external contact



### Example

~~~ javascript
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Configure OAuth2 access token for authorization: PureCloud Auth
platformClient.ApiClient.instance.authentications['PureCloud Auth'].accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new platformClient.ExternalContactsApi();

var contactId = "contactId_example"; // String | ExternalContact Id

var opts = { 
  'body': {} // Object | ExternalContact
};
apiInstance.postExternalcontactsContactNotes(contactId, opts)
  .then(function(data) {
    console.log(`postExternalcontactsContactNotes success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch(function(err) {
  	console.log('There was a failure calling postExternalcontactsContactNotes');
    console.error(err);
  });

~~~

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **contactId** | **String** | ExternalContact Id |  |
 **body** | **Object** | ExternalContact | [optional]  |
{: class="table table-striped"}

### Return type

**Note**

<a name="postExternalcontactsContacts"></a>

# ExternalContact postExternalcontactsContacts(opts)

POST /api/v2/externalcontacts/contacts

Create an external contact



### Example

~~~ javascript
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Configure OAuth2 access token for authorization: PureCloud Auth
platformClient.ApiClient.instance.authentications['PureCloud Auth'].accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new platformClient.ExternalContactsApi();

var opts = { 
  'body': {} // Object | ExternalContact
};
apiInstance.postExternalcontactsContacts(opts)
  .then(function(data) {
    console.log(`postExternalcontactsContacts success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch(function(err) {
  	console.log('There was a failure calling postExternalcontactsContacts');
    console.error(err);
  });

~~~

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **body** | **Object** | ExternalContact | [optional]  |
{: class="table table-striped"}

### Return type

**ExternalContact**

<a name="postExternalcontactsOrganizationNotes"></a>

# Note postExternalcontactsOrganizationNotes(externalOrganizationId, opts)

POST /api/v2/externalcontacts/organizations/{externalOrganizationId}/notes

Create a note for an external organization



### Example

~~~ javascript
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Configure OAuth2 access token for authorization: PureCloud Auth
platformClient.ApiClient.instance.authentications['PureCloud Auth'].accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new platformClient.ExternalContactsApi();

var externalOrganizationId = "externalOrganizationId_example"; // String | External Organization Id

var opts = { 
  'body': {} // Object | ExternalContact
};
apiInstance.postExternalcontactsOrganizationNotes(externalOrganizationId, opts)
  .then(function(data) {
    console.log(`postExternalcontactsOrganizationNotes success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch(function(err) {
  	console.log('There was a failure calling postExternalcontactsOrganizationNotes');
    console.error(err);
  });

~~~

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **externalOrganizationId** | **String** | External Organization Id |  |
 **body** | **Object** | ExternalContact | [optional]  |
{: class="table table-striped"}

### Return type

**Note**

<a name="postExternalcontactsOrganizations"></a>

# ExternalOrganization postExternalcontactsOrganizations(opts)

POST /api/v2/externalcontacts/organizations

Create an external organization



### Example

~~~ javascript
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Configure OAuth2 access token for authorization: PureCloud Auth
platformClient.ApiClient.instance.authentications['PureCloud Auth'].accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new platformClient.ExternalContactsApi();

var opts = { 
  'body': {} // Object | ExternalOrganization
};
apiInstance.postExternalcontactsOrganizations(opts)
  .then(function(data) {
    console.log(`postExternalcontactsOrganizations success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch(function(err) {
  	console.log('There was a failure calling postExternalcontactsOrganizations');
    console.error(err);
  });

~~~

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **body** | **Object** | ExternalOrganization | [optional]  |
{: class="table table-striped"}

### Return type

**ExternalOrganization**

<a name="postExternalcontactsRelationships"></a>

# Relationship postExternalcontactsRelationships(opts)

POST /api/v2/externalcontacts/relationships

Create a relationship



### Example

~~~ javascript
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Configure OAuth2 access token for authorization: PureCloud Auth
platformClient.ApiClient.instance.authentications['PureCloud Auth'].accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new platformClient.ExternalContactsApi();

var opts = { 
  'body': {} // Object | Relationship
};
apiInstance.postExternalcontactsRelationships(opts)
  .then(function(data) {
    console.log(`postExternalcontactsRelationships success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch(function(err) {
  	console.log('There was a failure calling postExternalcontactsRelationships');
    console.error(err);
  });

~~~

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **body** | **Object** | Relationship | [optional]  |
{: class="table table-striped"}

### Return type

**Relationship**

<a name="putExternalcontactsContact"></a>

# ExternalContact putExternalcontactsContact(contactId, opts)

PUT /api/v2/externalcontacts/contacts/{contactId}

Update an external contact



### Example

~~~ javascript
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Configure OAuth2 access token for authorization: PureCloud Auth
platformClient.ApiClient.instance.authentications['PureCloud Auth'].accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new platformClient.ExternalContactsApi();

var contactId = "contactId_example"; // String | ExternalContact ID

var opts = { 
  'body': {} // Object | ExternalContact
};
apiInstance.putExternalcontactsContact(contactId, opts)
  .then(function(data) {
    console.log(`putExternalcontactsContact success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch(function(err) {
  	console.log('There was a failure calling putExternalcontactsContact');
    console.error(err);
  });

~~~

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **contactId** | **String** | ExternalContact ID |  |
 **body** | **Object** | ExternalContact | [optional]  |
{: class="table table-striped"}

### Return type

**ExternalContact**

<a name="putExternalcontactsContactNote"></a>

# Note putExternalcontactsContactNote(contactId, noteId, opts)

PUT /api/v2/externalcontacts/contacts/{contactId}/notes/{noteId}

Update a note for an external contact



### Example

~~~ javascript
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Configure OAuth2 access token for authorization: PureCloud Auth
platformClient.ApiClient.instance.authentications['PureCloud Auth'].accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new platformClient.ExternalContactsApi();

var contactId = "contactId_example"; // String | ExternalContact Id

var noteId = "noteId_example"; // String | Note Id

var opts = { 
  'body': {} // Object | Note
};
apiInstance.putExternalcontactsContactNote(contactId, noteId, opts)
  .then(function(data) {
    console.log(`putExternalcontactsContactNote success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch(function(err) {
  	console.log('There was a failure calling putExternalcontactsContactNote');
    console.error(err);
  });

~~~

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **contactId** | **String** | ExternalContact Id |  |
 **noteId** | **String** | Note Id |  |
 **body** | **Object** | Note | [optional]  |
{: class="table table-striped"}

### Return type

**Note**

<a name="putExternalcontactsConversation"></a>

# void putExternalcontactsConversation(conversationId, opts)

PUT /api/v2/externalcontacts/conversations/{conversationId}

Associate an external contact with a conversation



### Example

~~~ javascript
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Configure OAuth2 access token for authorization: PureCloud Auth
platformClient.ApiClient.instance.authentications['PureCloud Auth'].accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new platformClient.ExternalContactsApi();

var conversationId = "conversationId_example"; // String | Conversation ID

var opts = { 
  'body': {} // Object | ConversationAssociation
};
apiInstance.putExternalcontactsConversation(conversationId, opts)
  .then(function() {
    console.log('putExternalcontactsConversation returned successfully.');
  })
  .catch(function(err) {
  	console.log('There was a failure calling putExternalcontactsConversation');
    console.error(err);
  });

~~~

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **conversationId** | **String** | Conversation ID |  |
 **body** | **Object** | ConversationAssociation | [optional]  |
{: class="table table-striped"}

### Return type

void (no response body)

<a name="putExternalcontactsOrganization"></a>

# ExternalOrganization putExternalcontactsOrganization(externalOrganizationId, opts)

PUT /api/v2/externalcontacts/organizations/{externalOrganizationId}

Update an external organization



### Example

~~~ javascript
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Configure OAuth2 access token for authorization: PureCloud Auth
platformClient.ApiClient.instance.authentications['PureCloud Auth'].accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new platformClient.ExternalContactsApi();

var externalOrganizationId = "externalOrganizationId_example"; // String | External Organization ID

var opts = { 
  'body': {} // Object | ExternalOrganization
};
apiInstance.putExternalcontactsOrganization(externalOrganizationId, opts)
  .then(function(data) {
    console.log(`putExternalcontactsOrganization success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch(function(err) {
  	console.log('There was a failure calling putExternalcontactsOrganization');
    console.error(err);
  });

~~~

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **externalOrganizationId** | **String** | External Organization ID |  |
 **body** | **Object** | ExternalOrganization | [optional]  |
{: class="table table-striped"}

### Return type

**ExternalOrganization**

<a name="putExternalcontactsOrganizationNote"></a>

# Note putExternalcontactsOrganizationNote(externalOrganizationId, noteId, opts)

PUT /api/v2/externalcontacts/organizations/{externalOrganizationId}/notes/{noteId}

Update a note for an external organization



### Example

~~~ javascript
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Configure OAuth2 access token for authorization: PureCloud Auth
platformClient.ApiClient.instance.authentications['PureCloud Auth'].accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new platformClient.ExternalContactsApi();

var externalOrganizationId = "externalOrganizationId_example"; // String | External Organization Id

var noteId = "noteId_example"; // String | Note Id

var opts = { 
  'body': {} // Object | Note
};
apiInstance.putExternalcontactsOrganizationNote(externalOrganizationId, noteId, opts)
  .then(function(data) {
    console.log(`putExternalcontactsOrganizationNote success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch(function(err) {
  	console.log('There was a failure calling putExternalcontactsOrganizationNote');
    console.error(err);
  });

~~~

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **externalOrganizationId** | **String** | External Organization Id |  |
 **noteId** | **String** | Note Id |  |
 **body** | **Object** | Note | [optional]  |
{: class="table table-striped"}

### Return type

**Note**

<a name="putExternalcontactsOrganizationTrustorTrustorId"></a>

# ExternalOrganization putExternalcontactsOrganizationTrustorTrustorId(externalOrganizationId, trustorId)

PUT /api/v2/externalcontacts/organizations/{externalOrganizationId}/trustor/{trustorId}

Links a Trustor with an Extenral Organization



### Example

~~~ javascript
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Configure OAuth2 access token for authorization: PureCloud Auth
platformClient.ApiClient.instance.authentications['PureCloud Auth'].accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new platformClient.ExternalContactsApi();

var externalOrganizationId = "externalOrganizationId_example"; // String | External Organization ID

var trustorId = "trustorId_example"; // String | Trustor ID

apiInstance.putExternalcontactsOrganizationTrustorTrustorId(externalOrganizationId, trustorId)
  .then(function(data) {
    console.log(`putExternalcontactsOrganizationTrustorTrustorId success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch(function(err) {
  	console.log('There was a failure calling putExternalcontactsOrganizationTrustorTrustorId');
    console.error(err);
  });

~~~

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **externalOrganizationId** | **String** | External Organization ID |  |
 **trustorId** | **String** | Trustor ID |  |
{: class="table table-striped"}

### Return type

**ExternalOrganization**

<a name="putExternalcontactsRelationship"></a>

# Relationship putExternalcontactsRelationship(relationshipId, opts)

PUT /api/v2/externalcontacts/relationships/{relationshipId}

Update a relationship



### Example

~~~ javascript
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Configure OAuth2 access token for authorization: PureCloud Auth
platformClient.ApiClient.instance.authentications['PureCloud Auth'].accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new platformClient.ExternalContactsApi();

var relationshipId = "relationshipId_example"; // String | Relationship Id

var opts = { 
  'body': {} // Object | Relationship
};
apiInstance.putExternalcontactsRelationship(relationshipId, opts)
  .then(function(data) {
    console.log(`putExternalcontactsRelationship success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch(function(err) {
  	console.log('There was a failure calling putExternalcontactsRelationship');
    console.error(err);
  });

~~~

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **relationshipId** | **String** | Relationship Id |  |
 **body** | **Object** | Relationship | [optional]  |
{: class="table table-striped"}

### Return type

**Relationship**

