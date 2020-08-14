---
title: ExternalContactsApi
---
# platformClient.ExternalContactsApi

All URIs are relative to *https://api.mypurecloud.com*

| Method | HTTP request | Description |
| ------------- | ------------- | ------------- |
[**deleteExternalcontactsContact**](ExternalContactsApi.html#deleteExternalcontactsContact) | **DELETE** /api/v2/externalcontacts/contacts/{contactId} | Delete an external contact
[**deleteExternalcontactsContactNote**](ExternalContactsApi.html#deleteExternalcontactsContactNote) | **DELETE** /api/v2/externalcontacts/contacts/{contactId}/notes/{noteId} | Delete a note for an external contact
[**deleteExternalcontactsContactsSchema**](ExternalContactsApi.html#deleteExternalcontactsContactsSchema) | **DELETE** /api/v2/externalcontacts/contacts/schemas/{schemaId} | Delete a schema
[**deleteExternalcontactsOrganization**](ExternalContactsApi.html#deleteExternalcontactsOrganization) | **DELETE** /api/v2/externalcontacts/organizations/{externalOrganizationId} | Delete an external organization
[**deleteExternalcontactsOrganizationNote**](ExternalContactsApi.html#deleteExternalcontactsOrganizationNote) | **DELETE** /api/v2/externalcontacts/organizations/{externalOrganizationId}/notes/{noteId} | Delete a note for an external organization
[**deleteExternalcontactsOrganizationTrustor**](ExternalContactsApi.html#deleteExternalcontactsOrganizationTrustor) | **DELETE** /api/v2/externalcontacts/organizations/{externalOrganizationId}/trustor | Unlink the Trustor for this External Organization
[**deleteExternalcontactsRelationship**](ExternalContactsApi.html#deleteExternalcontactsRelationship) | **DELETE** /api/v2/externalcontacts/relationships/{relationshipId} | Delete a relationship
[**getExternalcontactsContact**](ExternalContactsApi.html#getExternalcontactsContact) | **GET** /api/v2/externalcontacts/contacts/{contactId} | Fetch an external contact
[**getExternalcontactsContactNote**](ExternalContactsApi.html#getExternalcontactsContactNote) | **GET** /api/v2/externalcontacts/contacts/{contactId}/notes/{noteId} | Fetch a note for an external contact
[**getExternalcontactsContactNotes**](ExternalContactsApi.html#getExternalcontactsContactNotes) | **GET** /api/v2/externalcontacts/contacts/{contactId}/notes | List notes for an external contact
[**getExternalcontactsContacts**](ExternalContactsApi.html#getExternalcontactsContacts) | **GET** /api/v2/externalcontacts/contacts | Search for external contacts
[**getExternalcontactsContactsSchema**](ExternalContactsApi.html#getExternalcontactsContactsSchema) | **GET** /api/v2/externalcontacts/contacts/schemas/{schemaId} | Get a schema
[**getExternalcontactsContactsSchemaVersion**](ExternalContactsApi.html#getExternalcontactsContactsSchemaVersion) | **GET** /api/v2/externalcontacts/contacts/schemas/{schemaId}/versions/{versionId} | Get a specific version of a schema
[**getExternalcontactsContactsSchemaVersions**](ExternalContactsApi.html#getExternalcontactsContactsSchemaVersions) | **GET** /api/v2/externalcontacts/contacts/schemas/{schemaId}/versions | Get all versions of an external contact&#39;s schema
[**getExternalcontactsContactsSchemas**](ExternalContactsApi.html#getExternalcontactsContactsSchemas) | **GET** /api/v2/externalcontacts/contacts/schemas | Get a list of schemas.
[**getExternalcontactsOrganization**](ExternalContactsApi.html#getExternalcontactsOrganization) | **GET** /api/v2/externalcontacts/organizations/{externalOrganizationId} | Fetch an external organization
[**getExternalcontactsOrganizationContacts**](ExternalContactsApi.html#getExternalcontactsOrganizationContacts) | **GET** /api/v2/externalcontacts/organizations/{externalOrganizationId}/contacts | Search for external contacts in an external organization
[**getExternalcontactsOrganizationNote**](ExternalContactsApi.html#getExternalcontactsOrganizationNote) | **GET** /api/v2/externalcontacts/organizations/{externalOrganizationId}/notes/{noteId} | Fetch a note for an external organization
[**getExternalcontactsOrganizationNotes**](ExternalContactsApi.html#getExternalcontactsOrganizationNotes) | **GET** /api/v2/externalcontacts/organizations/{externalOrganizationId}/notes | List notes for an external organization
[**getExternalcontactsOrganizationRelationships**](ExternalContactsApi.html#getExternalcontactsOrganizationRelationships) | **GET** /api/v2/externalcontacts/organizations/{externalOrganizationId}/relationships | Fetch a relationship for an external organization
[**getExternalcontactsOrganizations**](ExternalContactsApi.html#getExternalcontactsOrganizations) | **GET** /api/v2/externalcontacts/organizations | Search for external organizations
[**getExternalcontactsOrganizationsSchema**](ExternalContactsApi.html#getExternalcontactsOrganizationsSchema) | **GET** /api/v2/externalcontacts/organizations/schemas/{schemaId} | Get a schema
[**getExternalcontactsOrganizationsSchemaVersion**](ExternalContactsApi.html#getExternalcontactsOrganizationsSchemaVersion) | **GET** /api/v2/externalcontacts/organizations/schemas/{schemaId}/versions/{versionId} | Get a specific version of a schema
[**getExternalcontactsOrganizationsSchemaVersions**](ExternalContactsApi.html#getExternalcontactsOrganizationsSchemaVersions) | **GET** /api/v2/externalcontacts/organizations/schemas/{schemaId}/versions | Get all versions of an external organization&#39;s schema
[**getExternalcontactsOrganizationsSchemas**](ExternalContactsApi.html#getExternalcontactsOrganizationsSchemas) | **GET** /api/v2/externalcontacts/organizations/schemas | Get a list of schemas.
[**getExternalcontactsRelationship**](ExternalContactsApi.html#getExternalcontactsRelationship) | **GET** /api/v2/externalcontacts/relationships/{relationshipId} | Fetch a relationship
[**getExternalcontactsReversewhitepageslookup**](ExternalContactsApi.html#getExternalcontactsReversewhitepageslookup) | **GET** /api/v2/externalcontacts/reversewhitepageslookup | Look up contacts and externalOrganizations based on an attribute. Maximum of 25 values returned.
[**getExternalcontactsScanContacts**](ExternalContactsApi.html#getExternalcontactsScanContacts) | **GET** /api/v2/externalcontacts/scan/contacts | Scan for external contacts using paging
[**getExternalcontactsScanNotes**](ExternalContactsApi.html#getExternalcontactsScanNotes) | **GET** /api/v2/externalcontacts/scan/notes | Scan for notes using paging
[**getExternalcontactsScanOrganizations**](ExternalContactsApi.html#getExternalcontactsScanOrganizations) | **GET** /api/v2/externalcontacts/scan/organizations | Scan for external organizations using paging
[**getExternalcontactsScanRelationships**](ExternalContactsApi.html#getExternalcontactsScanRelationships) | **GET** /api/v2/externalcontacts/scan/relationships | Scan for relationships
[**postExternalcontactsContactNotes**](ExternalContactsApi.html#postExternalcontactsContactNotes) | **POST** /api/v2/externalcontacts/contacts/{contactId}/notes | Create a note for an external contact
[**postExternalcontactsContacts**](ExternalContactsApi.html#postExternalcontactsContacts) | **POST** /api/v2/externalcontacts/contacts | Create an external contact
[**postExternalcontactsContactsSchemas**](ExternalContactsApi.html#postExternalcontactsContactsSchemas) | **POST** /api/v2/externalcontacts/contacts/schemas | Create a schema
[**postExternalcontactsOrganizationNotes**](ExternalContactsApi.html#postExternalcontactsOrganizationNotes) | **POST** /api/v2/externalcontacts/organizations/{externalOrganizationId}/notes | Create a note for an external organization
[**postExternalcontactsOrganizations**](ExternalContactsApi.html#postExternalcontactsOrganizations) | **POST** /api/v2/externalcontacts/organizations | Create an external organization
[**postExternalcontactsOrganizationsSchemas**](ExternalContactsApi.html#postExternalcontactsOrganizationsSchemas) | **POST** /api/v2/externalcontacts/organizations/schemas | Create a schema
[**postExternalcontactsRelationships**](ExternalContactsApi.html#postExternalcontactsRelationships) | **POST** /api/v2/externalcontacts/relationships | Create a relationship
[**putExternalcontactsContact**](ExternalContactsApi.html#putExternalcontactsContact) | **PUT** /api/v2/externalcontacts/contacts/{contactId} | Update an external contact
[**putExternalcontactsContactNote**](ExternalContactsApi.html#putExternalcontactsContactNote) | **PUT** /api/v2/externalcontacts/contacts/{contactId}/notes/{noteId} | Update a note for an external contact
[**putExternalcontactsContactsSchema**](ExternalContactsApi.html#putExternalcontactsContactsSchema) | **PUT** /api/v2/externalcontacts/contacts/schemas/{schemaId} | Update a schema
[**putExternalcontactsConversation**](ExternalContactsApi.html#putExternalcontactsConversation) | **PUT** /api/v2/externalcontacts/conversations/{conversationId} | Associate/disassociate an external contact with a conversation
[**putExternalcontactsOrganization**](ExternalContactsApi.html#putExternalcontactsOrganization) | **PUT** /api/v2/externalcontacts/organizations/{externalOrganizationId} | Update an external organization
[**putExternalcontactsOrganizationNote**](ExternalContactsApi.html#putExternalcontactsOrganizationNote) | **PUT** /api/v2/externalcontacts/organizations/{externalOrganizationId}/notes/{noteId} | Update a note for an external organization
[**putExternalcontactsOrganizationTrustorTrustorId**](ExternalContactsApi.html#putExternalcontactsOrganizationTrustorTrustorId) | **PUT** /api/v2/externalcontacts/organizations/{externalOrganizationId}/trustor/{trustorId} | Links a Trustor with an External Organization
[**putExternalcontactsOrganizationsSchema**](ExternalContactsApi.html#putExternalcontactsOrganizationsSchema) | **PUT** /api/v2/externalcontacts/organizations/schemas/{schemaId} | Update a schema
[**putExternalcontactsRelationship**](ExternalContactsApi.html#putExternalcontactsRelationship) | **PUT** /api/v2/externalcontacts/relationships/{relationshipId} | Update a relationship
{: class="table table-striped"}

<a name="deleteExternalcontactsContact"></a>

# Empty deleteExternalcontactsContact(contactId)



DELETE /api/v2/externalcontacts/contacts/{contactId}

Delete an external contact



Requires ANY permissions: 

* externalContacts:contact:delete



### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.ExternalContactsApi();

let contactId = "contactId_example"; // String | ExternalContact ID

apiInstance.deleteExternalcontactsContact(contactId)
  .then((data) => {
    console.log(`deleteExternalcontactsContact success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling deleteExternalcontactsContact');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **contactId** | **String** | ExternalContact ID |  |
{: class="table table-striped"}

### Return type

**Empty**

<a name="deleteExternalcontactsContactNote"></a>

# Empty deleteExternalcontactsContactNote(contactId, noteId)



DELETE /api/v2/externalcontacts/contacts/{contactId}/notes/{noteId}

Delete a note for an external contact



Requires ANY permissions: 

* externalContacts:contact:edit



### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.ExternalContactsApi();

let contactId = "contactId_example"; // String | ExternalContact Id
let noteId = "noteId_example"; // String | Note Id

apiInstance.deleteExternalcontactsContactNote(contactId, noteId)
  .then((data) => {
    console.log(`deleteExternalcontactsContactNote success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling deleteExternalcontactsContactNote');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **contactId** | **String** | ExternalContact Id |  |
 **noteId** | **String** | Note Id |  |
{: class="table table-striped"}

### Return type

**Empty**

<a name="deleteExternalcontactsContactsSchema"></a>

# void deleteExternalcontactsContactsSchema(schemaId)



DELETE /api/v2/externalcontacts/contacts/schemas/{schemaId}

Delete a schema



Requires ANY permissions: 

* externalContacts:customFields:edit



### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.ExternalContactsApi();

let schemaId = "schemaId_example"; // String | Schema ID

apiInstance.deleteExternalcontactsContactsSchema(schemaId)
  .then(() => {
    console.log('deleteExternalcontactsContactsSchema returned successfully.');
  })
  .catch((err) => {
    console.log('There was a failure calling deleteExternalcontactsContactsSchema');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **schemaId** | **String** | Schema ID |  |
{: class="table table-striped"}

### Return type

void (no response body)

<a name="deleteExternalcontactsOrganization"></a>

# Empty deleteExternalcontactsOrganization(externalOrganizationId)



DELETE /api/v2/externalcontacts/organizations/{externalOrganizationId}

Delete an external organization



Requires ANY permissions: 

* relate:externalOrganization:delete
* externalContacts:externalOrganization:delete



### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.ExternalContactsApi();

let externalOrganizationId = "externalOrganizationId_example"; // String | External Organization ID

apiInstance.deleteExternalcontactsOrganization(externalOrganizationId)
  .then((data) => {
    console.log(`deleteExternalcontactsOrganization success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling deleteExternalcontactsOrganization');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **externalOrganizationId** | **String** | External Organization ID |  |
{: class="table table-striped"}

### Return type

**Empty**

<a name="deleteExternalcontactsOrganizationNote"></a>

# Empty deleteExternalcontactsOrganizationNote(externalOrganizationId, noteId)



DELETE /api/v2/externalcontacts/organizations/{externalOrganizationId}/notes/{noteId}

Delete a note for an external organization



Requires ANY permissions: 

* externalContacts:externalOrganization:edit



### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.ExternalContactsApi();

let externalOrganizationId = "externalOrganizationId_example"; // String | External Organization Id
let noteId = "noteId_example"; // String | Note Id

apiInstance.deleteExternalcontactsOrganizationNote(externalOrganizationId, noteId)
  .then((data) => {
    console.log(`deleteExternalcontactsOrganizationNote success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling deleteExternalcontactsOrganizationNote');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **externalOrganizationId** | **String** | External Organization Id |  |
 **noteId** | **String** | Note Id |  |
{: class="table table-striped"}

### Return type

**Empty**

<a name="deleteExternalcontactsOrganizationTrustor"></a>

# void deleteExternalcontactsOrganizationTrustor(externalOrganizationId)



DELETE /api/v2/externalcontacts/organizations/{externalOrganizationId}/trustor

Unlink the Trustor for this External Organization



Requires ANY permissions: 

* externalContacts:externalOrganization:edit



### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.ExternalContactsApi();

let externalOrganizationId = "externalOrganizationId_example"; // String | External Organization ID

apiInstance.deleteExternalcontactsOrganizationTrustor(externalOrganizationId)
  .then(() => {
    console.log('deleteExternalcontactsOrganizationTrustor returned successfully.');
  })
  .catch((err) => {
    console.log('There was a failure calling deleteExternalcontactsOrganizationTrustor');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **externalOrganizationId** | **String** | External Organization ID |  |
{: class="table table-striped"}

### Return type

void (no response body)

<a name="deleteExternalcontactsRelationship"></a>

# Empty deleteExternalcontactsRelationship(relationshipId)



DELETE /api/v2/externalcontacts/relationships/{relationshipId}

Delete a relationship



Requires ANY permissions: 

* externalContacts:externalOrganization:edit



### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.ExternalContactsApi();

let relationshipId = "relationshipId_example"; // String | Relationship Id

apiInstance.deleteExternalcontactsRelationship(relationshipId)
  .then((data) => {
    console.log(`deleteExternalcontactsRelationship success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling deleteExternalcontactsRelationship');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **relationshipId** | **String** | Relationship Id |  |
{: class="table table-striped"}

### Return type

**Empty**

<a name="getExternalcontactsContact"></a>

# ExternalContact getExternalcontactsContact(contactId, opts)



GET /api/v2/externalcontacts/contacts/{contactId}

Fetch an external contact



Requires ANY permissions: 

* externalContacts:contact:view



### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.ExternalContactsApi();

let contactId = "contactId_example"; // String | ExternalContact ID
let opts = { 
  'expand': ["expand_example"] // [String] | which fields, if any, to expand (externalOrganization,externalDataSources)
};

apiInstance.getExternalcontactsContact(contactId, opts)
  .then((data) => {
    console.log(`getExternalcontactsContact success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getExternalcontactsContact');
    console.error(err);
  });
```

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



Requires ANY permissions: 

* externalContacts:contact:view



### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.ExternalContactsApi();

let contactId = "contactId_example"; // String | ExternalContact Id
let noteId = "noteId_example"; // String | Note Id
let opts = { 
  'expand': ["expand_example"] // [String] | which fields, if any, to expand
};

apiInstance.getExternalcontactsContactNote(contactId, noteId, opts)
  .then((data) => {
    console.log(`getExternalcontactsContactNote success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getExternalcontactsContactNote');
    console.error(err);
  });
```

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



Requires ANY permissions: 

* externalContacts:contact:view



### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.ExternalContactsApi();

let contactId = "contactId_example"; // String | ExternalContact Id
let opts = { 
  'pageSize': 20, // Number | Page size (limited to fetching first 1,000 records; pageNumber * pageSize must be <= 1,000)
  'pageNumber': 1, // Number | Page number (limited to fetching first 1,000 records; pageNumber * pageSize must be <= 1,000)
  'sortOrder': "sortOrder_example", // String | Sort order
  'expand': ["expand_example"] // [String] | which fields, if any, to expand
};

apiInstance.getExternalcontactsContactNotes(contactId, opts)
  .then((data) => {
    console.log(`getExternalcontactsContactNotes success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getExternalcontactsContactNotes');
    console.error(err);
  });
```

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



Requires ANY permissions: 

* externalContacts:contact:view



### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.ExternalContactsApi();

let opts = { 
  'pageSize': 20, // Number | Page size (limited to fetching first 1,000 records; pageNumber * pageSize must be <= 1,000)
  'pageNumber': 1, // Number | Page number (limited to fetching first 1,000 records; pageNumber * pageSize must be <= 1,000)
  'q': "q_example", // String | User supplied search keywords (no special syntax is currently supported)
  'sortOrder': "sortOrder_example", // String | Sort order
  'expand': ["expand_example"] // [String] | which fields, if any, to expand
};

apiInstance.getExternalcontactsContacts(opts)
  .then((data) => {
    console.log(`getExternalcontactsContacts success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getExternalcontactsContacts');
    console.error(err);
  });
```

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

<a name="getExternalcontactsContactsSchema"></a>

# DataSchema getExternalcontactsContactsSchema(schemaId)



GET /api/v2/externalcontacts/contacts/schemas/{schemaId}

Get a schema



Requires ANY permissions: 

* externalContacts:customFields:view



### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.ExternalContactsApi();

let schemaId = "schemaId_example"; // String | Schema ID

apiInstance.getExternalcontactsContactsSchema(schemaId)
  .then((data) => {
    console.log(`getExternalcontactsContactsSchema success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getExternalcontactsContactsSchema');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **schemaId** | **String** | Schema ID |  |
{: class="table table-striped"}

### Return type

**DataSchema**

<a name="getExternalcontactsContactsSchemaVersion"></a>

# DataSchema getExternalcontactsContactsSchemaVersion(schemaId, versionId)



GET /api/v2/externalcontacts/contacts/schemas/{schemaId}/versions/{versionId}

Get a specific version of a schema



Requires ANY permissions: 

* externalContacts:customFields:view



### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.ExternalContactsApi();

let schemaId = "schemaId_example"; // String | Schema ID
let versionId = "versionId_example"; // String | Schema version

apiInstance.getExternalcontactsContactsSchemaVersion(schemaId, versionId)
  .then((data) => {
    console.log(`getExternalcontactsContactsSchemaVersion success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getExternalcontactsContactsSchemaVersion');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **schemaId** | **String** | Schema ID |  |
 **versionId** | **String** | Schema version |  |
{: class="table table-striped"}

### Return type

**DataSchema**

<a name="getExternalcontactsContactsSchemaVersions"></a>

# DataSchema getExternalcontactsContactsSchemaVersions(schemaId)



GET /api/v2/externalcontacts/contacts/schemas/{schemaId}/versions

Get all versions of an external contact&#39;s schema



Requires ANY permissions: 

* externalContacts:customFields:view



### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.ExternalContactsApi();

let schemaId = "schemaId_example"; // String | Schema ID

apiInstance.getExternalcontactsContactsSchemaVersions(schemaId)
  .then((data) => {
    console.log(`getExternalcontactsContactsSchemaVersions success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getExternalcontactsContactsSchemaVersions');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **schemaId** | **String** | Schema ID |  |
{: class="table table-striped"}

### Return type

**DataSchema**

<a name="getExternalcontactsContactsSchemas"></a>

# DataSchemaListing getExternalcontactsContactsSchemas()



GET /api/v2/externalcontacts/contacts/schemas

Get a list of schemas.



Requires ANY permissions: 

* externalContacts:customFields:view



### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.ExternalContactsApi();

apiInstance.getExternalcontactsContactsSchemas()
  .then((data) => {
    console.log(`getExternalcontactsContactsSchemas success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getExternalcontactsContactsSchemas');
    console.error(err);
  });
```

### Parameters

This endpoint does not need any parameter.
{: class="table table-striped"}

### Return type

**DataSchemaListing**

<a name="getExternalcontactsOrganization"></a>

# ExternalOrganization getExternalcontactsOrganization(externalOrganizationId, opts)



GET /api/v2/externalcontacts/organizations/{externalOrganizationId}

Fetch an external organization



Requires ANY permissions: 

* relate:externalOrganization:view
* externalContacts:externalOrganization:view



### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.ExternalContactsApi();

let externalOrganizationId = "externalOrganizationId_example"; // String | External Organization ID
let opts = { 
  'expand': "expand_example", // String | which fields, if any, to expand (externalDataSources)
  'includeTrustors': true // Boolean | (true or false) whether or not to include trustor information embedded in the externalOrganization
};

apiInstance.getExternalcontactsOrganization(externalOrganizationId, opts)
  .then((data) => {
    console.log(`getExternalcontactsOrganization success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getExternalcontactsOrganization');
    console.error(err);
  });
```

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



Requires ANY permissions: 

* externalContacts:contact:view



### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.ExternalContactsApi();

let externalOrganizationId = "externalOrganizationId_example"; // String | External Organization ID
let opts = { 
  'pageSize': 20, // Number | Page size (limited to fetching first 1,000 records; pageNumber * pageSize must be <= 1,000)
  'pageNumber': 1, // Number | Page number (limited to fetching first 1,000 records; pageNumber * pageSize must be <= 1,000)
  'q': "q_example", // String | User supplied search keywords (no special syntax is currently supported)
  'sortOrder': "sortOrder_example", // String | Sort order
  'expand': ["expand_example"] // [String] | which fields, if any, to expand
};

apiInstance.getExternalcontactsOrganizationContacts(externalOrganizationId, opts)
  .then((data) => {
    console.log(`getExternalcontactsOrganizationContacts success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getExternalcontactsOrganizationContacts');
    console.error(err);
  });
```

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



Requires ANY permissions: 

* externalContacts:externalOrganization:view



### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.ExternalContactsApi();

let externalOrganizationId = "externalOrganizationId_example"; // String | External Organization Id
let noteId = "noteId_example"; // String | Note Id
let opts = { 
  'expand': ["expand_example"] // [String] | which fields, if any, to expand
};

apiInstance.getExternalcontactsOrganizationNote(externalOrganizationId, noteId, opts)
  .then((data) => {
    console.log(`getExternalcontactsOrganizationNote success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getExternalcontactsOrganizationNote');
    console.error(err);
  });
```

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



Requires ANY permissions: 

* relate:externalOrganization:view
* externalContacts:externalOrganization:view



### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.ExternalContactsApi();

let externalOrganizationId = "externalOrganizationId_example"; // String | External Organization Id
let opts = { 
  'pageSize': 20, // Number | Page size (limited to fetching first 1,000 records; pageNumber * pageSize must be <= 1,000)
  'pageNumber': 1, // Number | Page number (limited to fetching first 1,000 records; pageNumber * pageSize must be <= 1,000)
  'sortOrder': "sortOrder_example", // String | Sort order
  'expand': ["expand_example"] // [String] | which fields, if any, to expand
};

apiInstance.getExternalcontactsOrganizationNotes(externalOrganizationId, opts)
  .then((data) => {
    console.log(`getExternalcontactsOrganizationNotes success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getExternalcontactsOrganizationNotes');
    console.error(err);
  });
```

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



Requires ANY permissions: 

* relate:externalOrganization:view
* externalContacts:externalOrganization:view



### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.ExternalContactsApi();

let externalOrganizationId = "externalOrganizationId_example"; // String | External Organization ID
let opts = { 
  'pageSize': 20, // Number | Page size (limited to fetching first 1,000 records; pageNumber * pageSize must be <= 1,000)
  'pageNumber': 1, // Number | Page number (limited to fetching first 1,000 records; pageNumber * pageSize must be <= 1,000)
  'expand': "expand_example", // String | which fields, if any, to expand
  'sortOrder': "sortOrder_example" // String | Sort order
};

apiInstance.getExternalcontactsOrganizationRelationships(externalOrganizationId, opts)
  .then((data) => {
    console.log(`getExternalcontactsOrganizationRelationships success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getExternalcontactsOrganizationRelationships');
    console.error(err);
  });
```

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



Requires ANY permissions: 

* relate:externalOrganization:view
* externalContacts:externalOrganization:view



### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.ExternalContactsApi();

let opts = { 
  'pageSize': 20, // Number | Page size (limited to fetching first 1,000 records; pageNumber * pageSize must be <= 1,000)
  'pageNumber': 1, // Number | Page number (limited to fetching first 1,000 records; pageNumber * pageSize must be <= 1,000)
  'q': "q_example", // String | Search query
  'trustorId': ["trustorId_example"], // [String] | Search for external organizations by trustorIds (limit 25). If supplied, the 'q' parameters is ignored. Items are returned in the order requested
  'sortOrder': "sortOrder_example", // String | Sort order
  'expand': ["expand_example"], // [String] | which fields, if any, to expand
  'includeTrustors': true // Boolean | (true or false) whether or not to include trustor information embedded in the externalOrganization
};

apiInstance.getExternalcontactsOrganizations(opts)
  .then((data) => {
    console.log(`getExternalcontactsOrganizations success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getExternalcontactsOrganizations');
    console.error(err);
  });
```

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

<a name="getExternalcontactsOrganizationsSchema"></a>

# DataSchema getExternalcontactsOrganizationsSchema(schemaId)



GET /api/v2/externalcontacts/organizations/schemas/{schemaId}

Get a schema



Requires ANY permissions: 

* externalContacts:customFields:view



### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.ExternalContactsApi();

let schemaId = "schemaId_example"; // String | Schema ID

apiInstance.getExternalcontactsOrganizationsSchema(schemaId)
  .then((data) => {
    console.log(`getExternalcontactsOrganizationsSchema success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getExternalcontactsOrganizationsSchema');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **schemaId** | **String** | Schema ID |  |
{: class="table table-striped"}

### Return type

**DataSchema**

<a name="getExternalcontactsOrganizationsSchemaVersion"></a>

# DataSchema getExternalcontactsOrganizationsSchemaVersion(schemaId, versionId)



GET /api/v2/externalcontacts/organizations/schemas/{schemaId}/versions/{versionId}

Get a specific version of a schema



Requires ANY permissions: 

* externalContacts:customFields:view



### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.ExternalContactsApi();

let schemaId = "schemaId_example"; // String | Schema ID
let versionId = "versionId_example"; // String | Schema version

apiInstance.getExternalcontactsOrganizationsSchemaVersion(schemaId, versionId)
  .then((data) => {
    console.log(`getExternalcontactsOrganizationsSchemaVersion success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getExternalcontactsOrganizationsSchemaVersion');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **schemaId** | **String** | Schema ID |  |
 **versionId** | **String** | Schema version |  |
{: class="table table-striped"}

### Return type

**DataSchema**

<a name="getExternalcontactsOrganizationsSchemaVersions"></a>

# DataSchema getExternalcontactsOrganizationsSchemaVersions(schemaId)



GET /api/v2/externalcontacts/organizations/schemas/{schemaId}/versions

Get all versions of an external organization&#39;s schema



Requires ANY permissions: 

* externalContacts:customFields:view



### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.ExternalContactsApi();

let schemaId = "schemaId_example"; // String | Schema ID

apiInstance.getExternalcontactsOrganizationsSchemaVersions(schemaId)
  .then((data) => {
    console.log(`getExternalcontactsOrganizationsSchemaVersions success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getExternalcontactsOrganizationsSchemaVersions');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **schemaId** | **String** | Schema ID |  |
{: class="table table-striped"}

### Return type

**DataSchema**

<a name="getExternalcontactsOrganizationsSchemas"></a>

# DataSchemaListing getExternalcontactsOrganizationsSchemas()



GET /api/v2/externalcontacts/organizations/schemas

Get a list of schemas.



Requires ANY permissions: 

* externalContacts:customFields:view



### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.ExternalContactsApi();

apiInstance.getExternalcontactsOrganizationsSchemas()
  .then((data) => {
    console.log(`getExternalcontactsOrganizationsSchemas success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getExternalcontactsOrganizationsSchemas');
    console.error(err);
  });
```

### Parameters

This endpoint does not need any parameter.
{: class="table table-striped"}

### Return type

**DataSchemaListing**

<a name="getExternalcontactsRelationship"></a>

# Relationship getExternalcontactsRelationship(relationshipId, opts)



GET /api/v2/externalcontacts/relationships/{relationshipId}

Fetch a relationship



Requires ANY permissions: 

* externalContacts:externalOrganization:view



### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.ExternalContactsApi();

let relationshipId = "relationshipId_example"; // String | Relationship Id
let opts = { 
  'expand': "expand_example" // String | which fields, if any, to expand
};

apiInstance.getExternalcontactsRelationship(relationshipId, opts)
  .then((data) => {
    console.log(`getExternalcontactsRelationship success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getExternalcontactsRelationship');
    console.error(err);
  });
```

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

Look up contacts and externalOrganizations based on an attribute. Maximum of 25 values returned.



Requires ANY permissions: 

* externalContacts:contact:view



### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.ExternalContactsApi();

let lookupVal = "lookupVal_example"; // String | User supplied value to lookup contacts/externalOrganizations (supports email addresses, e164 phone numbers, Twitter screen names)
let opts = { 
  'expand': ["expand_example"] // [String] | which field, if any, to expand
};

apiInstance.getExternalcontactsReversewhitepageslookup(lookupVal, opts)
  .then((data) => {
    console.log(`getExternalcontactsReversewhitepageslookup success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getExternalcontactsReversewhitepageslookup');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **lookupVal** | **String** | User supplied value to lookup contacts/externalOrganizations (supports email addresses, e164 phone numbers, Twitter screen names) |  |
 **expand** | **[String]** | which field, if any, to expand | [optional] <br />**Values**: contacts.externalOrganization, externalDataSources |
{: class="table table-striped"}

### Return type

**ReverseWhitepagesLookupResult**

<a name="getExternalcontactsScanContacts"></a>

# CursorContactListing getExternalcontactsScanContacts(opts)



GET /api/v2/externalcontacts/scan/contacts

Scan for external contacts using paging



Requires ANY permissions: 

* externalContacts:contact:view



### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.ExternalContactsApi();

let opts = { 
  'limit': 56, // Number | The number of contacts per page; must be between 10 and 200, default is 100)
  'cursor': "cursor_example" // String | Indicates where to resume query results (not required for first page), each page returns a new cursor with a 24h TTL
};

apiInstance.getExternalcontactsScanContacts(opts)
  .then((data) => {
    console.log(`getExternalcontactsScanContacts success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getExternalcontactsScanContacts');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **limit** | **Number** | The number of contacts per page; must be between 10 and 200, default is 100) | [optional]  |
 **cursor** | **String** | Indicates where to resume query results (not required for first page), each page returns a new cursor with a 24h TTL | [optional]  |
{: class="table table-striped"}

### Return type

**CursorContactListing**

<a name="getExternalcontactsScanNotes"></a>

# CursorNoteListing getExternalcontactsScanNotes(opts)



GET /api/v2/externalcontacts/scan/notes

Scan for notes using paging



Requires ANY permissions: 

* externalContacts:contact:view



### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.ExternalContactsApi();

let opts = { 
  'limit': 56, // Number | The number of notes per page; must be between 10 and 200, default is 100)
  'cursor': "cursor_example" // String | Indicates where to resume query results (not required for first page), each page returns a new cursor with a 24h TTL
};

apiInstance.getExternalcontactsScanNotes(opts)
  .then((data) => {
    console.log(`getExternalcontactsScanNotes success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getExternalcontactsScanNotes');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **limit** | **Number** | The number of notes per page; must be between 10 and 200, default is 100) | [optional]  |
 **cursor** | **String** | Indicates where to resume query results (not required for first page), each page returns a new cursor with a 24h TTL | [optional]  |
{: class="table table-striped"}

### Return type

**CursorNoteListing**

<a name="getExternalcontactsScanOrganizations"></a>

# CursorOrganizationListing getExternalcontactsScanOrganizations(opts)



GET /api/v2/externalcontacts/scan/organizations

Scan for external organizations using paging



Requires ANY permissions: 

* externalContacts:externalOrganization:view



### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.ExternalContactsApi();

let opts = { 
  'limit': 56, // Number | The number of organizations per page; must be between 10 and 200, default is 100)
  'cursor': "cursor_example" // String | Indicates where to resume query results (not required for first page), each page returns a new cursor with a 24h TTL
};

apiInstance.getExternalcontactsScanOrganizations(opts)
  .then((data) => {
    console.log(`getExternalcontactsScanOrganizations success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getExternalcontactsScanOrganizations');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **limit** | **Number** | The number of organizations per page; must be between 10 and 200, default is 100) | [optional]  |
 **cursor** | **String** | Indicates where to resume query results (not required for first page), each page returns a new cursor with a 24h TTL | [optional]  |
{: class="table table-striped"}

### Return type

**CursorOrganizationListing**

<a name="getExternalcontactsScanRelationships"></a>

# CursorRelationshipListing getExternalcontactsScanRelationships(opts)



GET /api/v2/externalcontacts/scan/relationships

Scan for relationships



Requires ANY permissions: 

* externalContacts:contact:view



### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.ExternalContactsApi();

let opts = { 
  'limit': 56, // Number | The number of relationships per page; must be between 10 and 200, default is 100)
  'cursor': "cursor_example" // String | Indicates where to resume query results (not required for first page), each page returns a new cursor with a 24h TTL
};

apiInstance.getExternalcontactsScanRelationships(opts)
  .then((data) => {
    console.log(`getExternalcontactsScanRelationships success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getExternalcontactsScanRelationships');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **limit** | **Number** | The number of relationships per page; must be between 10 and 200, default is 100) | [optional]  |
 **cursor** | **String** | Indicates where to resume query results (not required for first page), each page returns a new cursor with a 24h TTL | [optional]  |
{: class="table table-striped"}

### Return type

**CursorRelationshipListing**

<a name="postExternalcontactsContactNotes"></a>

# Note postExternalcontactsContactNotes(contactId, body)



POST /api/v2/externalcontacts/contacts/{contactId}/notes

Create a note for an external contact



Requires ANY permissions: 

* externalContacts:contact:edit


### Request Body Schema

<script type="text/javascript">
	function copyNoteExample() {
		let temp = $("<textarea>");
		$("body").append(temp);
		temp.val($('#NoteExample').text()).select();
		document.execCommand("copy");
		temp.remove();
		return false;
	}
</script>

Note <a href="#" onclick="return copyNoteExample()">Copy</a>

<div id="NoteExample">

```{"language":"json", "maxHeight": "250px"}
{ 
  "id": String, 
  "name": String, 
  "noteText": String, 
  "modifyDate": Date, 
  "createDate": Date, 
  "createdBy": { 
    "id": String, 
    "name": String, 
    "division": { 
      "id": String, 
      "name": String, 
      "selfUri": String, 
    },  
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
      "countryCode": String, 
    },  
    "addresses": { 
      "address": String, 
      "display": String, 
      "mediaType": String, 
      "type": String, 
      "extension": String, 
      "countryCode": String, 
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
    "certifications": [String], 
    "biography": { 
      "biography": String, 
      "interests": [String], 
      "hobbies": [String], 
      "spouse": String, 
      "education": { 
        "school": String, 
        "fieldOfStudy": String, 
        "notes": String, 
        "dateStart": String, 
        "dateEnd": String, 
      },  
    },  
    "employerInfo": { 
      "officialName": String, 
      "employeeId": String, 
      "employeeType": String, 
      "dateHire": String, 
    },  
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
        "contactUser": { 
          "id": String, 
          "selfUri": String, 
        },  
        "emergencyNumber": { 
          "e164": String, 
          "number": String, 
          "type": String, 
        },  
        "address": { 
          "city": String, 
          "country": String, 
          "countryName": String, 
          "state": String, 
          "street1": String, 
          "street2": String, 
          "zipcode": String, 
        },  
        "state": String, 
        "notes": String, 
        "version": Number, 
        "path": [String], 
        "profileImage": { 
          "resolution": String, 
          "imageUri": String, 
        },  
        "floorplanImage": { 
          "resolution": String, 
          "imageUri": String, 
        },  
        "addressVerificationDetails": { 
          "status": String, 
          "dateFinished": Date, 
          "dateStarted": Date, 
          "service": String, 
        },  
        "addressVerified": Boolean, 
        "addressStored": Boolean, 
        "images": String, 
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
      "unusedRoles": { 
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
        "contactUser": { 
          "id": String, 
          "selfUri": String, 
        },  
        "emergencyNumber": { 
          "e164": String, 
          "number": String, 
          "type": String, 
        },  
        "address": { 
          "city": String, 
          "country": String, 
          "countryName": String, 
          "state": String, 
          "street1": String, 
          "street2": String, 
          "zipcode": String, 
        },  
        "state": String, 
        "notes": String, 
        "version": Number, 
        "path": [String], 
        "profileImage": { 
          "resolution": String, 
          "imageUri": String, 
        },  
        "floorplanImage": { 
          "resolution": String, 
          "imageUri": String, 
        },  
        "addressVerificationDetails": { 
          "status": String, 
          "dateFinished": Date, 
          "dateStarted": Date, 
          "service": String, 
        },  
        "addressVerified": Boolean, 
        "addressStored": Boolean, 
        "images": String, 
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
        "extension": String, 
        "display": String, 
        "type": String, 
        "mediaType": String, 
      },  
      "rulesVisible": Boolean, 
      "visibility": String, 
      "owners": User, 
      "selfUri": String, 
    },  
    "team": { 
      "id": String, 
      "name": String, 
      "description": String, 
      "dateModified": Date, 
      "memberCount": Number, 
      "selfUri": String, 
    },  
    "skills": { 
      "id": String, 
      "name": String, 
      "proficiency": Number, 
      "state": String, 
      "skillUri": String, 
      "selfUri": String, 
    },  
    "languages": { 
      "id": String, 
      "name": String, 
      "proficiency": Number, 
      "state": String, 
      "languageUri": String, 
      "selfUri": String, 
    },  
    "acdAutoAnswer": Boolean, 
    "languagePreference": String, 
    "lastTokenIssued": { 
      "dateIssued": Date, 
    },  
    "selfUri": String, 
  },  
  "externalDataSources": { 
    "platform": String, 
    "url": String, 
  },  
  "selfUri": String, 
}
```

</div>


### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.ExternalContactsApi();

let contactId = "contactId_example"; // String | ExternalContact Id
let body = {}; // Object | ExternalContact

apiInstance.postExternalcontactsContactNotes(contactId, body)
  .then((data) => {
    console.log(`postExternalcontactsContactNotes success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling postExternalcontactsContactNotes');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **contactId** | **String** | ExternalContact Id |  |
 **body** | **Object** | ExternalContact |  |
{: class="table table-striped"}

### Return type

**Note**

<a name="postExternalcontactsContacts"></a>

# ExternalContact postExternalcontactsContacts(body)



POST /api/v2/externalcontacts/contacts

Create an external contact



Requires ANY permissions: 

* externalContacts:contact:add


### Request Body Schema

<script type="text/javascript">
	function copyExternalContactExample() {
		let temp = $("<textarea>");
		$("body").append(temp);
		temp.val($('#ExternalContactExample').text()).select();
		document.execCommand("copy");
		temp.remove();
		return false;
	}
</script>

ExternalContact <a href="#" onclick="return copyExternalContactExample()">Copy</a>

<div id="ExternalContactExample">

```{"language":"json", "maxHeight": "250px"}
{ 
  "id": String, 
  "firstName": String, 
  "middleName": String, 
  "lastName": String, 
  "salutation": String, 
  "title": String, 
  "workPhone": { 
    "display": String, 
    "extension": Number, 
    "acceptsSMS": Boolean, 
    "userInput": String, 
    "e164": String, 
    "countryCode": String, 
  },  
  "cellPhone": { 
    "display": String, 
    "extension": Number, 
    "acceptsSMS": Boolean, 
    "userInput": String, 
    "e164": String, 
    "countryCode": String, 
  },  
  "homePhone": { 
    "display": String, 
    "extension": Number, 
    "acceptsSMS": Boolean, 
    "userInput": String, 
    "e164": String, 
    "countryCode": String, 
  },  
  "otherPhone": { 
    "display": String, 
    "extension": Number, 
    "acceptsSMS": Boolean, 
    "userInput": String, 
    "e164": String, 
    "countryCode": String, 
  },  
  "workEmail": String, 
  "personalEmail": String, 
  "otherEmail": String, 
  "address": { 
    "address1": String, 
    "address2": String, 
    "city": String, 
    "state": String, 
    "postalCode": String, 
    "countryCode": String, 
  },  
  "twitterId": { 
    "id": String, 
    "name": String, 
    "screenName": String, 
    "verified": Boolean, 
    "profileUrl": String, 
  },  
  "lineId": { 
    "ids": { 
      "userId": String, 
    },  
    "displayName": String, 
  },  
  "whatsAppId": { 
    "phoneNumber": { 
      "display": String, 
      "extension": Number, 
      "acceptsSMS": Boolean, 
      "userInput": String, 
      "e164": String, 
      "countryCode": String, 
    },  
    "displayName": String, 
  },  
  "facebookId": { 
    "ids": { 
      "scopedId": String, 
    },  
    "displayName": String, 
  },  
  "modifyDate": Date, 
  "createDate": Date, 
  "externalOrganization": { 
    "id": String, 
    "name": String, 
    "companyType": String, 
    "industry": String, 
    "primaryContactId": String, 
    "address": { 
      "address1": String, 
      "address2": String, 
      "city": String, 
      "state": String, 
      "postalCode": String, 
      "countryCode": String, 
    },  
    "phoneNumber": { 
      "display": String, 
      "extension": Number, 
      "acceptsSMS": Boolean, 
      "userInput": String, 
      "e164": String, 
      "countryCode": String, 
    },  
    "faxNumber": { 
      "display": String, 
      "extension": Number, 
      "acceptsSMS": Boolean, 
      "userInput": String, 
      "e164": String, 
      "countryCode": String, 
    },  
    "employeeCount": Number, 
    "revenue": Number, 
    "tags": [String], 
    "websites": [String], 
    "tickers": { 
      "symbol": String, 
      "exchange": String, 
    },  
    "twitterId": { 
      "id": String, 
      "name": String, 
      "screenName": String, 
      "verified": Boolean, 
      "profileUrl": String, 
    },  
    "externalSystemUrl": String, 
    "modifyDate": Date, 
    "createDate": Date, 
    "trustor": { 
      "id": String, 
      "enabled": Boolean, 
      "dateCreated": Date, 
      "createdBy": { 
        "id": String, 
        "name": String, 
        "division": { 
          "id": String, 
          "name": String, 
          "selfUri": String, 
        },  
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
          "countryCode": String, 
        },  
        "addresses": { 
          "address": String, 
          "display": String, 
          "mediaType": String, 
          "type": String, 
          "extension": String, 
          "countryCode": String, 
        },  
        "state": String, 
        "title": String, 
        "username": String, 
        "manager": { 
          "id": String, 
          "name": String, 
          "division": { 
            "id": String, 
            "name": String, 
            "selfUri": String, 
          },  
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
            "countryCode": String, 
          },  
          "addresses": { 
            "address": String, 
            "display": String, 
            "mediaType": String, 
            "type": String, 
            "extension": String, 
            "countryCode": String, 
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
          "certifications": [String], 
          "biography": { 
            "biography": String, 
            "interests": [String], 
            "hobbies": [String], 
            "spouse": String, 
            "education": { 
              "school": String, 
              "fieldOfStudy": String, 
              "notes": String, 
              "dateStart": String, 
              "dateEnd": String, 
            },  
          },  
          "employerInfo": { 
            "officialName": String, 
            "employeeId": String, 
            "employeeType": String, 
            "dateHire": String, 
          },  
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
              "contactUser": { 
                "id": String, 
                "selfUri": String, 
              },  
              "emergencyNumber": { 
                "e164": String, 
                "number": String, 
                "type": String, 
              },  
              "address": { 
                "city": String, 
                "country": String, 
                "countryName": String, 
                "state": String, 
                "street1": String, 
                "street2": String, 
                "zipcode": String, 
              },  
              "state": String, 
              "notes": String, 
              "version": Number, 
              "path": [String], 
              "profileImage": { 
                "resolution": String, 
                "imageUri": String, 
              },  
              "floorplanImage": { 
                "resolution": String, 
                "imageUri": String, 
              },  
              "addressVerificationDetails": { 
                "status": String, 
                "dateFinished": Date, 
                "dateStarted": Date, 
                "service": String, 
              },  
              "addressVerified": Boolean, 
              "addressStored": Boolean, 
              "images": String, 
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
            "unusedRoles": { 
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
                "operands": [ResourceConditionValue], 
                "terms": [ResourceConditionNode], 
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
              "contactUser": { 
                "id": String, 
                "selfUri": String, 
              },  
              "emergencyNumber": { 
                "e164": String, 
                "number": String, 
                "type": String, 
              },  
              "address": { 
                "city": String, 
                "country": String, 
                "countryName": String, 
                "state": String, 
                "street1": String, 
                "street2": String, 
                "zipcode": String, 
              },  
              "state": String, 
              "notes": String, 
              "version": Number, 
              "path": [String], 
              "profileImage": { 
                "resolution": String, 
                "imageUri": String, 
              },  
              "floorplanImage": { 
                "resolution": String, 
                "imageUri": String, 
              },  
              "addressVerificationDetails": { 
                "status": String, 
                "dateFinished": Date, 
                "dateStarted": Date, 
                "service": String, 
              },  
              "addressVerified": Boolean, 
              "addressStored": Boolean, 
              "images": String, 
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
              "extension": String, 
              "display": String, 
              "type": String, 
              "mediaType": String, 
            },  
            "rulesVisible": Boolean, 
            "visibility": String, 
            "owners": User, 
            "selfUri": String, 
          },  
          "team": { 
            "id": String, 
            "name": String, 
            "description": String, 
            "dateModified": Date, 
            "memberCount": Number, 
            "selfUri": String, 
          },  
          "skills": { 
            "id": String, 
            "name": String, 
            "proficiency": Number, 
            "state": String, 
            "skillUri": String, 
            "selfUri": String, 
          },  
          "languages": { 
            "id": String, 
            "name": String, 
            "proficiency": Number, 
            "state": String, 
            "languageUri": String, 
            "selfUri": String, 
          },  
          "acdAutoAnswer": Boolean, 
          "languagePreference": String, 
          "lastTokenIssued": { 
            "dateIssued": Date, 
          },  
          "selfUri": String, 
        },  
        "images": { 
          "resolution": String, 
          "imageUri": String, 
        },  
        "version": Number, 
        "certifications": [String], 
        "biography": { 
          "biography": String, 
          "interests": [String], 
          "hobbies": [String], 
          "spouse": String, 
          "education": { 
            "school": String, 
            "fieldOfStudy": String, 
            "notes": String, 
            "dateStart": String, 
            "dateEnd": String, 
          },  
        },  
        "employerInfo": { 
          "officialName": String, 
          "employeeId": String, 
          "employeeType": String, 
          "dateHire": String, 
        },  
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
            "contactUser": { 
              "id": String, 
              "selfUri": String, 
            },  
            "emergencyNumber": { 
              "e164": String, 
              "number": String, 
              "type": String, 
            },  
            "address": { 
              "city": String, 
              "country": String, 
              "countryName": String, 
              "state": String, 
              "street1": String, 
              "street2": String, 
              "zipcode": String, 
            },  
            "state": String, 
            "notes": String, 
            "version": Number, 
            "path": [String], 
            "profileImage": { 
              "resolution": String, 
              "imageUri": String, 
            },  
            "floorplanImage": { 
              "resolution": String, 
              "imageUri": String, 
            },  
            "addressVerificationDetails": { 
              "status": String, 
              "dateFinished": Date, 
              "dateStarted": Date, 
              "service": String, 
            },  
            "addressVerified": Boolean, 
            "addressStored": Boolean, 
            "images": String, 
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
          "unusedRoles": { 
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
                "operands": [ResourceConditionValue], 
                "terms": [ResourceConditionNode], 
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
            "contactUser": { 
              "id": String, 
              "selfUri": String, 
            },  
            "emergencyNumber": { 
              "e164": String, 
              "number": String, 
              "type": String, 
            },  
            "address": { 
              "city": String, 
              "country": String, 
              "countryName": String, 
              "state": String, 
              "street1": String, 
              "street2": String, 
              "zipcode": String, 
            },  
            "state": String, 
            "notes": String, 
            "version": Number, 
            "path": [String], 
            "profileImage": { 
              "resolution": String, 
              "imageUri": String, 
            },  
            "floorplanImage": { 
              "resolution": String, 
              "imageUri": String, 
            },  
            "addressVerificationDetails": { 
              "status": String, 
              "dateFinished": Date, 
              "dateStarted": Date, 
              "service": String, 
            },  
            "addressVerified": Boolean, 
            "addressStored": Boolean, 
            "images": String, 
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
            "extension": String, 
            "display": String, 
            "type": String, 
            "mediaType": String, 
          },  
          "rulesVisible": Boolean, 
          "visibility": String, 
          "owners": User, 
          "selfUri": String, 
        },  
        "team": { 
          "id": String, 
          "name": String, 
          "description": String, 
          "dateModified": Date, 
          "memberCount": Number, 
          "selfUri": String, 
        },  
        "skills": { 
          "id": String, 
          "name": String, 
          "proficiency": Number, 
          "state": String, 
          "skillUri": String, 
          "selfUri": String, 
        },  
        "languages": { 
          "id": String, 
          "name": String, 
          "proficiency": Number, 
          "state": String, 
          "languageUri": String, 
          "selfUri": String, 
        },  
        "acdAutoAnswer": Boolean, 
        "languagePreference": String, 
        "lastTokenIssued": { 
          "dateIssued": Date, 
        },  
        "organization": { 
          "id": String, 
          "name": String, 
          "defaultLanguage": String, 
          "defaultCountryCode": String, 
          "thirdPartyOrgName": String, 
          "thirdPartyURI": String, 
          "domain": String, 
          "version": Number, 
          "state": String, 
          "defaultSiteId": String, 
          "supportURI": String, 
          "voicemailEnabled": Boolean, 
          "productPlatform": String, 
          "selfUri": String, 
          "features": {String: Boolean}, 
        },  
      },  
      "organization": { 
        "id": String, 
        "name": String, 
        "defaultLanguage": String, 
        "defaultCountryCode": String, 
        "thirdPartyOrgName": String, 
        "thirdPartyURI": String, 
        "domain": String, 
        "version": Number, 
        "state": String, 
        "defaultSiteId": String, 
        "supportURI": String, 
        "voicemailEnabled": Boolean, 
        "productPlatform": String, 
        "selfUri": String, 
        "features": {String: Boolean}, 
      },  
      "authorization": { 
        "permissions": [String], 
      },  
      "selfUri": String, 
    },  
    "schema": { 
      "id": String, 
      "name": String, 
      "version": Number, 
      "appliesTo": [String], 
      "enabled": Boolean, 
      "createdBy": { 
        "id": String, 
        "name": String, 
        "selfUri": String, 
      },  
      "dateCreated": Date, 
      "jsonSchema": { 
        "id": String, 
        "$schema": String, 
        "title": String, 
        "description": String, 
        "type": String, 
        "required": [String], 
        "properties": {String: Object}, 
        "additionalProperties": Object, 
      },  
      "selfUri": String, 
    },  
    "customFields": {String: Object}, 
    "externalDataSources": { 
      "platform": String, 
      "url": String, 
    },  
    "selfUri": String, 
  },  
  "surveyOptOut": Boolean, 
  "externalSystemUrl": String, 
  "schema": { 
    "id": String, 
    "name": String, 
    "version": Number, 
    "appliesTo": [String], 
    "enabled": Boolean, 
    "createdBy": { 
      "id": String, 
      "name": String, 
      "selfUri": String, 
    },  
    "dateCreated": Date, 
    "jsonSchema": { 
      "id": String, 
      "$schema": String, 
      "title": String, 
      "description": String, 
      "type": String, 
      "required": [String], 
      "properties": {String: Object}, 
      "additionalProperties": Object, 
    },  
    "selfUri": String, 
  },  
  "customFields": {String: Object}, 
  "externalDataSources": { 
    "platform": String, 
    "url": String, 
  },  
  "selfUri": String, 
}
```

</div>


### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.ExternalContactsApi();

let body = {}; // Object | ExternalContact

apiInstance.postExternalcontactsContacts(body)
  .then((data) => {
    console.log(`postExternalcontactsContacts success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling postExternalcontactsContacts');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **body** | **Object** | ExternalContact |  |
{: class="table table-striped"}

### Return type

**ExternalContact**

<a name="postExternalcontactsContactsSchemas"></a>

# DataSchema postExternalcontactsContactsSchemas(body)



POST /api/v2/externalcontacts/contacts/schemas

Create a schema



Requires ANY permissions: 

* externalContacts:customFields:add


### Request Body Schema

<script type="text/javascript">
	function copyDataSchemaExample() {
		let temp = $("<textarea>");
		$("body").append(temp);
		temp.val($('#DataSchemaExample').text()).select();
		document.execCommand("copy");
		temp.remove();
		return false;
	}
</script>

DataSchema <a href="#" onclick="return copyDataSchemaExample()">Copy</a>

<div id="DataSchemaExample">

```{"language":"json", "maxHeight": "250px"}
{ 
  "id": String, 
  "name": String, 
  "version": Number, 
  "appliesTo": [String], 
  "enabled": Boolean, 
  "createdBy": { 
    "id": String, 
    "name": String, 
    "selfUri": String, 
  },  
  "dateCreated": Date, 
  "jsonSchema": { 
    "id": String, 
    "$schema": String, 
    "title": String, 
    "description": String, 
    "type": String, 
    "required": [String], 
    "properties": {String: Object}, 
    "additionalProperties": Object, 
  },  
  "selfUri": String, 
}
```

</div>


### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.ExternalContactsApi();

let body = {}; // Object | Schema

apiInstance.postExternalcontactsContactsSchemas(body)
  .then((data) => {
    console.log(`postExternalcontactsContactsSchemas success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling postExternalcontactsContactsSchemas');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **body** | **Object** | Schema |  |
{: class="table table-striped"}

### Return type

**DataSchema**

<a name="postExternalcontactsOrganizationNotes"></a>

# Note postExternalcontactsOrganizationNotes(externalOrganizationId, body)



POST /api/v2/externalcontacts/organizations/{externalOrganizationId}/notes

Create a note for an external organization



Requires ANY permissions: 

* relate:externalOrganization:edit
* externalContacts:externalOrganization:edit


### Request Body Schema

<script type="text/javascript">
	function copyNoteExample() {
		let temp = $("<textarea>");
		$("body").append(temp);
		temp.val($('#NoteExample').text()).select();
		document.execCommand("copy");
		temp.remove();
		return false;
	}
</script>

Note <a href="#" onclick="return copyNoteExample()">Copy</a>

<div id="NoteExample">

```{"language":"json", "maxHeight": "250px"}
{ 
  "id": String, 
  "name": String, 
  "noteText": String, 
  "modifyDate": Date, 
  "createDate": Date, 
  "createdBy": { 
    "id": String, 
    "name": String, 
    "division": { 
      "id": String, 
      "name": String, 
      "selfUri": String, 
    },  
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
      "countryCode": String, 
    },  
    "addresses": { 
      "address": String, 
      "display": String, 
      "mediaType": String, 
      "type": String, 
      "extension": String, 
      "countryCode": String, 
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
    "certifications": [String], 
    "biography": { 
      "biography": String, 
      "interests": [String], 
      "hobbies": [String], 
      "spouse": String, 
      "education": { 
        "school": String, 
        "fieldOfStudy": String, 
        "notes": String, 
        "dateStart": String, 
        "dateEnd": String, 
      },  
    },  
    "employerInfo": { 
      "officialName": String, 
      "employeeId": String, 
      "employeeType": String, 
      "dateHire": String, 
    },  
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
        "contactUser": { 
          "id": String, 
          "selfUri": String, 
        },  
        "emergencyNumber": { 
          "e164": String, 
          "number": String, 
          "type": String, 
        },  
        "address": { 
          "city": String, 
          "country": String, 
          "countryName": String, 
          "state": String, 
          "street1": String, 
          "street2": String, 
          "zipcode": String, 
        },  
        "state": String, 
        "notes": String, 
        "version": Number, 
        "path": [String], 
        "profileImage": { 
          "resolution": String, 
          "imageUri": String, 
        },  
        "floorplanImage": { 
          "resolution": String, 
          "imageUri": String, 
        },  
        "addressVerificationDetails": { 
          "status": String, 
          "dateFinished": Date, 
          "dateStarted": Date, 
          "service": String, 
        },  
        "addressVerified": Boolean, 
        "addressStored": Boolean, 
        "images": String, 
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
      "unusedRoles": { 
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
        "contactUser": { 
          "id": String, 
          "selfUri": String, 
        },  
        "emergencyNumber": { 
          "e164": String, 
          "number": String, 
          "type": String, 
        },  
        "address": { 
          "city": String, 
          "country": String, 
          "countryName": String, 
          "state": String, 
          "street1": String, 
          "street2": String, 
          "zipcode": String, 
        },  
        "state": String, 
        "notes": String, 
        "version": Number, 
        "path": [String], 
        "profileImage": { 
          "resolution": String, 
          "imageUri": String, 
        },  
        "floorplanImage": { 
          "resolution": String, 
          "imageUri": String, 
        },  
        "addressVerificationDetails": { 
          "status": String, 
          "dateFinished": Date, 
          "dateStarted": Date, 
          "service": String, 
        },  
        "addressVerified": Boolean, 
        "addressStored": Boolean, 
        "images": String, 
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
        "extension": String, 
        "display": String, 
        "type": String, 
        "mediaType": String, 
      },  
      "rulesVisible": Boolean, 
      "visibility": String, 
      "owners": User, 
      "selfUri": String, 
    },  
    "team": { 
      "id": String, 
      "name": String, 
      "description": String, 
      "dateModified": Date, 
      "memberCount": Number, 
      "selfUri": String, 
    },  
    "skills": { 
      "id": String, 
      "name": String, 
      "proficiency": Number, 
      "state": String, 
      "skillUri": String, 
      "selfUri": String, 
    },  
    "languages": { 
      "id": String, 
      "name": String, 
      "proficiency": Number, 
      "state": String, 
      "languageUri": String, 
      "selfUri": String, 
    },  
    "acdAutoAnswer": Boolean, 
    "languagePreference": String, 
    "lastTokenIssued": { 
      "dateIssued": Date, 
    },  
    "selfUri": String, 
  },  
  "externalDataSources": { 
    "platform": String, 
    "url": String, 
  },  
  "selfUri": String, 
}
```

</div>


### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.ExternalContactsApi();

let externalOrganizationId = "externalOrganizationId_example"; // String | External Organization Id
let body = {}; // Object | ExternalContact

apiInstance.postExternalcontactsOrganizationNotes(externalOrganizationId, body)
  .then((data) => {
    console.log(`postExternalcontactsOrganizationNotes success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling postExternalcontactsOrganizationNotes');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **externalOrganizationId** | **String** | External Organization Id |  |
 **body** | **Object** | ExternalContact |  |
{: class="table table-striped"}

### Return type

**Note**

<a name="postExternalcontactsOrganizations"></a>

# ExternalOrganization postExternalcontactsOrganizations(body)



POST /api/v2/externalcontacts/organizations

Create an external organization



Requires ANY permissions: 

* relate:externalOrganization:add
* externalContacts:externalOrganization:add


### Request Body Schema

<script type="text/javascript">
	function copyExternalOrganizationExample() {
		let temp = $("<textarea>");
		$("body").append(temp);
		temp.val($('#ExternalOrganizationExample').text()).select();
		document.execCommand("copy");
		temp.remove();
		return false;
	}
</script>

ExternalOrganization <a href="#" onclick="return copyExternalOrganizationExample()">Copy</a>

<div id="ExternalOrganizationExample">

```{"language":"json", "maxHeight": "250px"}
{ 
  "id": String, 
  "name": String, 
  "companyType": String, 
  "industry": String, 
  "primaryContactId": String, 
  "address": { 
    "address1": String, 
    "address2": String, 
    "city": String, 
    "state": String, 
    "postalCode": String, 
    "countryCode": String, 
  },  
  "phoneNumber": { 
    "display": String, 
    "extension": Number, 
    "acceptsSMS": Boolean, 
    "userInput": String, 
    "e164": String, 
    "countryCode": String, 
  },  
  "faxNumber": { 
    "display": String, 
    "extension": Number, 
    "acceptsSMS": Boolean, 
    "userInput": String, 
    "e164": String, 
    "countryCode": String, 
  },  
  "employeeCount": Number, 
  "revenue": Number, 
  "tags": [String], 
  "websites": [String], 
  "tickers": { 
    "symbol": String, 
    "exchange": String, 
  },  
  "twitterId": { 
    "id": String, 
    "name": String, 
    "screenName": String, 
    "verified": Boolean, 
    "profileUrl": String, 
  },  
  "externalSystemUrl": String, 
  "modifyDate": Date, 
  "createDate": Date, 
  "trustor": { 
    "id": String, 
    "enabled": Boolean, 
    "dateCreated": Date, 
    "createdBy": { 
      "id": String, 
      "name": String, 
      "division": { 
        "id": String, 
        "name": String, 
        "selfUri": String, 
      },  
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
        "countryCode": String, 
      },  
      "addresses": { 
        "address": String, 
        "display": String, 
        "mediaType": String, 
        "type": String, 
        "extension": String, 
        "countryCode": String, 
      },  
      "state": String, 
      "title": String, 
      "username": String, 
      "manager": { 
        "id": String, 
        "name": String, 
        "division": { 
          "id": String, 
          "name": String, 
          "selfUri": String, 
        },  
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
          "countryCode": String, 
        },  
        "addresses": { 
          "address": String, 
          "display": String, 
          "mediaType": String, 
          "type": String, 
          "extension": String, 
          "countryCode": String, 
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
        "certifications": [String], 
        "biography": { 
          "biography": String, 
          "interests": [String], 
          "hobbies": [String], 
          "spouse": String, 
          "education": { 
            "school": String, 
            "fieldOfStudy": String, 
            "notes": String, 
            "dateStart": String, 
            "dateEnd": String, 
          },  
        },  
        "employerInfo": { 
          "officialName": String, 
          "employeeId": String, 
          "employeeType": String, 
          "dateHire": String, 
        },  
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
            "contactUser": { 
              "id": String, 
              "selfUri": String, 
            },  
            "emergencyNumber": { 
              "e164": String, 
              "number": String, 
              "type": String, 
            },  
            "address": { 
              "city": String, 
              "country": String, 
              "countryName": String, 
              "state": String, 
              "street1": String, 
              "street2": String, 
              "zipcode": String, 
            },  
            "state": String, 
            "notes": String, 
            "version": Number, 
            "path": [String], 
            "profileImage": { 
              "resolution": String, 
              "imageUri": String, 
            },  
            "floorplanImage": { 
              "resolution": String, 
              "imageUri": String, 
            },  
            "addressVerificationDetails": { 
              "status": String, 
              "dateFinished": Date, 
              "dateStarted": Date, 
              "service": String, 
            },  
            "addressVerified": Boolean, 
            "addressStored": Boolean, 
            "images": String, 
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
          "unusedRoles": { 
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
                "operands": [ResourceConditionValue], 
                "terms": [ResourceConditionNode], 
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
            "contactUser": { 
              "id": String, 
              "selfUri": String, 
            },  
            "emergencyNumber": { 
              "e164": String, 
              "number": String, 
              "type": String, 
            },  
            "address": { 
              "city": String, 
              "country": String, 
              "countryName": String, 
              "state": String, 
              "street1": String, 
              "street2": String, 
              "zipcode": String, 
            },  
            "state": String, 
            "notes": String, 
            "version": Number, 
            "path": [String], 
            "profileImage": { 
              "resolution": String, 
              "imageUri": String, 
            },  
            "floorplanImage": { 
              "resolution": String, 
              "imageUri": String, 
            },  
            "addressVerificationDetails": { 
              "status": String, 
              "dateFinished": Date, 
              "dateStarted": Date, 
              "service": String, 
            },  
            "addressVerified": Boolean, 
            "addressStored": Boolean, 
            "images": String, 
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
            "extension": String, 
            "display": String, 
            "type": String, 
            "mediaType": String, 
          },  
          "rulesVisible": Boolean, 
          "visibility": String, 
          "owners": User, 
          "selfUri": String, 
        },  
        "team": { 
          "id": String, 
          "name": String, 
          "description": String, 
          "dateModified": Date, 
          "memberCount": Number, 
          "selfUri": String, 
        },  
        "skills": { 
          "id": String, 
          "name": String, 
          "proficiency": Number, 
          "state": String, 
          "skillUri": String, 
          "selfUri": String, 
        },  
        "languages": { 
          "id": String, 
          "name": String, 
          "proficiency": Number, 
          "state": String, 
          "languageUri": String, 
          "selfUri": String, 
        },  
        "acdAutoAnswer": Boolean, 
        "languagePreference": String, 
        "lastTokenIssued": { 
          "dateIssued": Date, 
        },  
        "selfUri": String, 
      },  
      "images": { 
        "resolution": String, 
        "imageUri": String, 
      },  
      "version": Number, 
      "certifications": [String], 
      "biography": { 
        "biography": String, 
        "interests": [String], 
        "hobbies": [String], 
        "spouse": String, 
        "education": { 
          "school": String, 
          "fieldOfStudy": String, 
          "notes": String, 
          "dateStart": String, 
          "dateEnd": String, 
        },  
      },  
      "employerInfo": { 
        "officialName": String, 
        "employeeId": String, 
        "employeeType": String, 
        "dateHire": String, 
      },  
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
          "contactUser": { 
            "id": String, 
            "selfUri": String, 
          },  
          "emergencyNumber": { 
            "e164": String, 
            "number": String, 
            "type": String, 
          },  
          "address": { 
            "city": String, 
            "country": String, 
            "countryName": String, 
            "state": String, 
            "street1": String, 
            "street2": String, 
            "zipcode": String, 
          },  
          "state": String, 
          "notes": String, 
          "version": Number, 
          "path": [String], 
          "profileImage": { 
            "resolution": String, 
            "imageUri": String, 
          },  
          "floorplanImage": { 
            "resolution": String, 
            "imageUri": String, 
          },  
          "addressVerificationDetails": { 
            "status": String, 
            "dateFinished": Date, 
            "dateStarted": Date, 
            "service": String, 
          },  
          "addressVerified": Boolean, 
          "addressStored": Boolean, 
          "images": String, 
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
        "unusedRoles": { 
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
                "operands": [ResourceConditionValue], 
                "terms": [ResourceConditionNode], 
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
          "contactUser": { 
            "id": String, 
            "selfUri": String, 
          },  
          "emergencyNumber": { 
            "e164": String, 
            "number": String, 
            "type": String, 
          },  
          "address": { 
            "city": String, 
            "country": String, 
            "countryName": String, 
            "state": String, 
            "street1": String, 
            "street2": String, 
            "zipcode": String, 
          },  
          "state": String, 
          "notes": String, 
          "version": Number, 
          "path": [String], 
          "profileImage": { 
            "resolution": String, 
            "imageUri": String, 
          },  
          "floorplanImage": { 
            "resolution": String, 
            "imageUri": String, 
          },  
          "addressVerificationDetails": { 
            "status": String, 
            "dateFinished": Date, 
            "dateStarted": Date, 
            "service": String, 
          },  
          "addressVerified": Boolean, 
          "addressStored": Boolean, 
          "images": String, 
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
          "extension": String, 
          "display": String, 
          "type": String, 
          "mediaType": String, 
        },  
        "rulesVisible": Boolean, 
        "visibility": String, 
        "owners": User, 
        "selfUri": String, 
      },  
      "team": { 
        "id": String, 
        "name": String, 
        "description": String, 
        "dateModified": Date, 
        "memberCount": Number, 
        "selfUri": String, 
      },  
      "skills": { 
        "id": String, 
        "name": String, 
        "proficiency": Number, 
        "state": String, 
        "skillUri": String, 
        "selfUri": String, 
      },  
      "languages": { 
        "id": String, 
        "name": String, 
        "proficiency": Number, 
        "state": String, 
        "languageUri": String, 
        "selfUri": String, 
      },  
      "acdAutoAnswer": Boolean, 
      "languagePreference": String, 
      "lastTokenIssued": { 
        "dateIssued": Date, 
      },  
      "organization": { 
        "id": String, 
        "name": String, 
        "defaultLanguage": String, 
        "defaultCountryCode": String, 
        "thirdPartyOrgName": String, 
        "thirdPartyURI": String, 
        "domain": String, 
        "version": Number, 
        "state": String, 
        "defaultSiteId": String, 
        "supportURI": String, 
        "voicemailEnabled": Boolean, 
        "productPlatform": String, 
        "selfUri": String, 
        "features": {String: Boolean}, 
      },  
    },  
    "organization": { 
      "id": String, 
      "name": String, 
      "defaultLanguage": String, 
      "defaultCountryCode": String, 
      "thirdPartyOrgName": String, 
      "thirdPartyURI": String, 
      "domain": String, 
      "version": Number, 
      "state": String, 
      "defaultSiteId": String, 
      "supportURI": String, 
      "voicemailEnabled": Boolean, 
      "productPlatform": String, 
      "selfUri": String, 
      "features": {String: Boolean}, 
    },  
    "authorization": { 
      "permissions": [String], 
    },  
    "selfUri": String, 
  },  
  "schema": { 
    "id": String, 
    "name": String, 
    "version": Number, 
    "appliesTo": [String], 
    "enabled": Boolean, 
    "createdBy": { 
      "id": String, 
      "name": String, 
      "selfUri": String, 
    },  
    "dateCreated": Date, 
    "jsonSchema": { 
      "id": String, 
      "$schema": String, 
      "title": String, 
      "description": String, 
      "type": String, 
      "required": [String], 
      "properties": {String: Object}, 
      "additionalProperties": Object, 
    },  
    "selfUri": String, 
  },  
  "customFields": {String: Object}, 
  "externalDataSources": { 
    "platform": String, 
    "url": String, 
  },  
  "selfUri": String, 
}
```

</div>


### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.ExternalContactsApi();

let body = {}; // Object | ExternalOrganization

apiInstance.postExternalcontactsOrganizations(body)
  .then((data) => {
    console.log(`postExternalcontactsOrganizations success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling postExternalcontactsOrganizations');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **body** | **Object** | ExternalOrganization |  |
{: class="table table-striped"}

### Return type

**ExternalOrganization**

<a name="postExternalcontactsOrganizationsSchemas"></a>

# DataSchema postExternalcontactsOrganizationsSchemas(body)



POST /api/v2/externalcontacts/organizations/schemas

Create a schema



Requires ANY permissions: 

* externalContacts:customFields:add


### Request Body Schema

<script type="text/javascript">
	function copyDataSchemaExample() {
		let temp = $("<textarea>");
		$("body").append(temp);
		temp.val($('#DataSchemaExample').text()).select();
		document.execCommand("copy");
		temp.remove();
		return false;
	}
</script>

DataSchema <a href="#" onclick="return copyDataSchemaExample()">Copy</a>

<div id="DataSchemaExample">

```{"language":"json", "maxHeight": "250px"}
{ 
  "id": String, 
  "name": String, 
  "version": Number, 
  "appliesTo": [String], 
  "enabled": Boolean, 
  "createdBy": { 
    "id": String, 
    "name": String, 
    "selfUri": String, 
  },  
  "dateCreated": Date, 
  "jsonSchema": { 
    "id": String, 
    "$schema": String, 
    "title": String, 
    "description": String, 
    "type": String, 
    "required": [String], 
    "properties": {String: Object}, 
    "additionalProperties": Object, 
  },  
  "selfUri": String, 
}
```

</div>


### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.ExternalContactsApi();

let body = {}; // Object | Schema

apiInstance.postExternalcontactsOrganizationsSchemas(body)
  .then((data) => {
    console.log(`postExternalcontactsOrganizationsSchemas success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling postExternalcontactsOrganizationsSchemas');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **body** | **Object** | Schema |  |
{: class="table table-striped"}

### Return type

**DataSchema**

<a name="postExternalcontactsRelationships"></a>

# Relationship postExternalcontactsRelationships(body)



POST /api/v2/externalcontacts/relationships

Create a relationship



Requires ANY permissions: 

* externalContacts:externalOrganization:edit


### Request Body Schema

<script type="text/javascript">
	function copyRelationshipExample() {
		let temp = $("<textarea>");
		$("body").append(temp);
		temp.val($('#RelationshipExample').text()).select();
		document.execCommand("copy");
		temp.remove();
		return false;
	}
</script>

Relationship <a href="#" onclick="return copyRelationshipExample()">Copy</a>

<div id="RelationshipExample">

```{"language":"json", "maxHeight": "250px"}
{ 
  "id": String, 
  "name": String, 
  "user": { 
    "id": String, 
    "name": String, 
    "division": { 
      "id": String, 
      "name": String, 
      "selfUri": String, 
    },  
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
      "countryCode": String, 
    },  
    "addresses": { 
      "address": String, 
      "display": String, 
      "mediaType": String, 
      "type": String, 
      "extension": String, 
      "countryCode": String, 
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
    "certifications": [String], 
    "biography": { 
      "biography": String, 
      "interests": [String], 
      "hobbies": [String], 
      "spouse": String, 
      "education": { 
        "school": String, 
        "fieldOfStudy": String, 
        "notes": String, 
        "dateStart": String, 
        "dateEnd": String, 
      },  
    },  
    "employerInfo": { 
      "officialName": String, 
      "employeeId": String, 
      "employeeType": String, 
      "dateHire": String, 
    },  
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
        "contactUser": { 
          "id": String, 
          "selfUri": String, 
        },  
        "emergencyNumber": { 
          "e164": String, 
          "number": String, 
          "type": String, 
        },  
        "address": { 
          "city": String, 
          "country": String, 
          "countryName": String, 
          "state": String, 
          "street1": String, 
          "street2": String, 
          "zipcode": String, 
        },  
        "state": String, 
        "notes": String, 
        "version": Number, 
        "path": [String], 
        "profileImage": { 
          "resolution": String, 
          "imageUri": String, 
        },  
        "floorplanImage": { 
          "resolution": String, 
          "imageUri": String, 
        },  
        "addressVerificationDetails": { 
          "status": String, 
          "dateFinished": Date, 
          "dateStarted": Date, 
          "service": String, 
        },  
        "addressVerified": Boolean, 
        "addressStored": Boolean, 
        "images": String, 
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
      "unusedRoles": { 
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
        "contactUser": { 
          "id": String, 
          "selfUri": String, 
        },  
        "emergencyNumber": { 
          "e164": String, 
          "number": String, 
          "type": String, 
        },  
        "address": { 
          "city": String, 
          "country": String, 
          "countryName": String, 
          "state": String, 
          "street1": String, 
          "street2": String, 
          "zipcode": String, 
        },  
        "state": String, 
        "notes": String, 
        "version": Number, 
        "path": [String], 
        "profileImage": { 
          "resolution": String, 
          "imageUri": String, 
        },  
        "floorplanImage": { 
          "resolution": String, 
          "imageUri": String, 
        },  
        "addressVerificationDetails": { 
          "status": String, 
          "dateFinished": Date, 
          "dateStarted": Date, 
          "service": String, 
        },  
        "addressVerified": Boolean, 
        "addressStored": Boolean, 
        "images": String, 
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
        "extension": String, 
        "display": String, 
        "type": String, 
        "mediaType": String, 
      },  
      "rulesVisible": Boolean, 
      "visibility": String, 
      "owners": User, 
      "selfUri": String, 
    },  
    "team": { 
      "id": String, 
      "name": String, 
      "description": String, 
      "dateModified": Date, 
      "memberCount": Number, 
      "selfUri": String, 
    },  
    "skills": { 
      "id": String, 
      "name": String, 
      "proficiency": Number, 
      "state": String, 
      "skillUri": String, 
      "selfUri": String, 
    },  
    "languages": { 
      "id": String, 
      "name": String, 
      "proficiency": Number, 
      "state": String, 
      "languageUri": String, 
      "selfUri": String, 
    },  
    "acdAutoAnswer": Boolean, 
    "languagePreference": String, 
    "lastTokenIssued": { 
      "dateIssued": Date, 
    },  
    "selfUri": String, 
  },  
  "externalOrganization": { 
    "id": String, 
    "name": String, 
    "companyType": String, 
    "industry": String, 
    "primaryContactId": String, 
    "address": { 
      "address1": String, 
      "address2": String, 
      "city": String, 
      "state": String, 
      "postalCode": String, 
      "countryCode": String, 
    },  
    "phoneNumber": { 
      "display": String, 
      "extension": Number, 
      "acceptsSMS": Boolean, 
      "userInput": String, 
      "e164": String, 
      "countryCode": String, 
    },  
    "faxNumber": { 
      "display": String, 
      "extension": Number, 
      "acceptsSMS": Boolean, 
      "userInput": String, 
      "e164": String, 
      "countryCode": String, 
    },  
    "employeeCount": Number, 
    "revenue": Number, 
    "tags": [String], 
    "websites": [String], 
    "tickers": { 
      "symbol": String, 
      "exchange": String, 
    },  
    "twitterId": { 
      "id": String, 
      "name": String, 
      "screenName": String, 
      "verified": Boolean, 
      "profileUrl": String, 
    },  
    "externalSystemUrl": String, 
    "modifyDate": Date, 
    "createDate": Date, 
    "trustor": { 
      "id": String, 
      "enabled": Boolean, 
      "dateCreated": Date, 
      "createdBy": { 
        "id": String, 
        "name": String, 
        "division": { 
          "id": String, 
          "name": String, 
          "selfUri": String, 
        },  
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
          "countryCode": String, 
        },  
        "addresses": { 
          "address": String, 
          "display": String, 
          "mediaType": String, 
          "type": String, 
          "extension": String, 
          "countryCode": String, 
        },  
        "state": String, 
        "title": String, 
        "username": String, 
        "manager": { 
          "id": String, 
          "name": String, 
          "division": { 
            "id": String, 
            "name": String, 
            "selfUri": String, 
          },  
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
            "countryCode": String, 
          },  
          "addresses": { 
            "address": String, 
            "display": String, 
            "mediaType": String, 
            "type": String, 
            "extension": String, 
            "countryCode": String, 
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
          "certifications": [String], 
          "biography": { 
            "biography": String, 
            "interests": [String], 
            "hobbies": [String], 
            "spouse": String, 
            "education": { 
              "school": String, 
              "fieldOfStudy": String, 
              "notes": String, 
              "dateStart": String, 
              "dateEnd": String, 
            },  
          },  
          "employerInfo": { 
            "officialName": String, 
            "employeeId": String, 
            "employeeType": String, 
            "dateHire": String, 
          },  
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
              "contactUser": { 
                "id": String, 
                "selfUri": String, 
              },  
              "emergencyNumber": { 
                "e164": String, 
                "number": String, 
                "type": String, 
              },  
              "address": { 
                "city": String, 
                "country": String, 
                "countryName": String, 
                "state": String, 
                "street1": String, 
                "street2": String, 
                "zipcode": String, 
              },  
              "state": String, 
              "notes": String, 
              "version": Number, 
              "path": [String], 
              "profileImage": { 
                "resolution": String, 
                "imageUri": String, 
              },  
              "floorplanImage": { 
                "resolution": String, 
                "imageUri": String, 
              },  
              "addressVerificationDetails": { 
                "status": String, 
                "dateFinished": Date, 
                "dateStarted": Date, 
                "service": String, 
              },  
              "addressVerified": Boolean, 
              "addressStored": Boolean, 
              "images": String, 
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
            "unusedRoles": { 
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
                "operands": [ResourceConditionValue], 
                "terms": [ResourceConditionNode], 
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
              "contactUser": { 
                "id": String, 
                "selfUri": String, 
              },  
              "emergencyNumber": { 
                "e164": String, 
                "number": String, 
                "type": String, 
              },  
              "address": { 
                "city": String, 
                "country": String, 
                "countryName": String, 
                "state": String, 
                "street1": String, 
                "street2": String, 
                "zipcode": String, 
              },  
              "state": String, 
              "notes": String, 
              "version": Number, 
              "path": [String], 
              "profileImage": { 
                "resolution": String, 
                "imageUri": String, 
              },  
              "floorplanImage": { 
                "resolution": String, 
                "imageUri": String, 
              },  
              "addressVerificationDetails": { 
                "status": String, 
                "dateFinished": Date, 
                "dateStarted": Date, 
                "service": String, 
              },  
              "addressVerified": Boolean, 
              "addressStored": Boolean, 
              "images": String, 
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
              "extension": String, 
              "display": String, 
              "type": String, 
              "mediaType": String, 
            },  
            "rulesVisible": Boolean, 
            "visibility": String, 
            "owners": User, 
            "selfUri": String, 
          },  
          "team": { 
            "id": String, 
            "name": String, 
            "description": String, 
            "dateModified": Date, 
            "memberCount": Number, 
            "selfUri": String, 
          },  
          "skills": { 
            "id": String, 
            "name": String, 
            "proficiency": Number, 
            "state": String, 
            "skillUri": String, 
            "selfUri": String, 
          },  
          "languages": { 
            "id": String, 
            "name": String, 
            "proficiency": Number, 
            "state": String, 
            "languageUri": String, 
            "selfUri": String, 
          },  
          "acdAutoAnswer": Boolean, 
          "languagePreference": String, 
          "lastTokenIssued": { 
            "dateIssued": Date, 
          },  
          "selfUri": String, 
        },  
        "images": { 
          "resolution": String, 
          "imageUri": String, 
        },  
        "version": Number, 
        "certifications": [String], 
        "biography": { 
          "biography": String, 
          "interests": [String], 
          "hobbies": [String], 
          "spouse": String, 
          "education": { 
            "school": String, 
            "fieldOfStudy": String, 
            "notes": String, 
            "dateStart": String, 
            "dateEnd": String, 
          },  
        },  
        "employerInfo": { 
          "officialName": String, 
          "employeeId": String, 
          "employeeType": String, 
          "dateHire": String, 
        },  
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
            "contactUser": { 
              "id": String, 
              "selfUri": String, 
            },  
            "emergencyNumber": { 
              "e164": String, 
              "number": String, 
              "type": String, 
            },  
            "address": { 
              "city": String, 
              "country": String, 
              "countryName": String, 
              "state": String, 
              "street1": String, 
              "street2": String, 
              "zipcode": String, 
            },  
            "state": String, 
            "notes": String, 
            "version": Number, 
            "path": [String], 
            "profileImage": { 
              "resolution": String, 
              "imageUri": String, 
            },  
            "floorplanImage": { 
              "resolution": String, 
              "imageUri": String, 
            },  
            "addressVerificationDetails": { 
              "status": String, 
              "dateFinished": Date, 
              "dateStarted": Date, 
              "service": String, 
            },  
            "addressVerified": Boolean, 
            "addressStored": Boolean, 
            "images": String, 
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
          "unusedRoles": { 
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
                "operands": [ResourceConditionValue], 
                "terms": [ResourceConditionNode], 
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
            "contactUser": { 
              "id": String, 
              "selfUri": String, 
            },  
            "emergencyNumber": { 
              "e164": String, 
              "number": String, 
              "type": String, 
            },  
            "address": { 
              "city": String, 
              "country": String, 
              "countryName": String, 
              "state": String, 
              "street1": String, 
              "street2": String, 
              "zipcode": String, 
            },  
            "state": String, 
            "notes": String, 
            "version": Number, 
            "path": [String], 
            "profileImage": { 
              "resolution": String, 
              "imageUri": String, 
            },  
            "floorplanImage": { 
              "resolution": String, 
              "imageUri": String, 
            },  
            "addressVerificationDetails": { 
              "status": String, 
              "dateFinished": Date, 
              "dateStarted": Date, 
              "service": String, 
            },  
            "addressVerified": Boolean, 
            "addressStored": Boolean, 
            "images": String, 
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
            "extension": String, 
            "display": String, 
            "type": String, 
            "mediaType": String, 
          },  
          "rulesVisible": Boolean, 
          "visibility": String, 
          "owners": User, 
          "selfUri": String, 
        },  
        "team": { 
          "id": String, 
          "name": String, 
          "description": String, 
          "dateModified": Date, 
          "memberCount": Number, 
          "selfUri": String, 
        },  
        "skills": { 
          "id": String, 
          "name": String, 
          "proficiency": Number, 
          "state": String, 
          "skillUri": String, 
          "selfUri": String, 
        },  
        "languages": { 
          "id": String, 
          "name": String, 
          "proficiency": Number, 
          "state": String, 
          "languageUri": String, 
          "selfUri": String, 
        },  
        "acdAutoAnswer": Boolean, 
        "languagePreference": String, 
        "lastTokenIssued": { 
          "dateIssued": Date, 
        },  
        "organization": { 
          "id": String, 
          "name": String, 
          "defaultLanguage": String, 
          "defaultCountryCode": String, 
          "thirdPartyOrgName": String, 
          "thirdPartyURI": String, 
          "domain": String, 
          "version": Number, 
          "state": String, 
          "defaultSiteId": String, 
          "supportURI": String, 
          "voicemailEnabled": Boolean, 
          "productPlatform": String, 
          "selfUri": String, 
          "features": {String: Boolean}, 
        },  
      },  
      "organization": { 
        "id": String, 
        "name": String, 
        "defaultLanguage": String, 
        "defaultCountryCode": String, 
        "thirdPartyOrgName": String, 
        "thirdPartyURI": String, 
        "domain": String, 
        "version": Number, 
        "state": String, 
        "defaultSiteId": String, 
        "supportURI": String, 
        "voicemailEnabled": Boolean, 
        "productPlatform": String, 
        "selfUri": String, 
        "features": {String: Boolean}, 
      },  
      "authorization": { 
        "permissions": [String], 
      },  
      "selfUri": String, 
    },  
    "schema": { 
      "id": String, 
      "name": String, 
      "version": Number, 
      "appliesTo": [String], 
      "enabled": Boolean, 
      "createdBy": { 
        "id": String, 
        "name": String, 
        "selfUri": String, 
      },  
      "dateCreated": Date, 
      "jsonSchema": { 
        "id": String, 
        "$schema": String, 
        "title": String, 
        "description": String, 
        "type": String, 
        "required": [String], 
        "properties": {String: Object}, 
        "additionalProperties": Object, 
      },  
      "selfUri": String, 
    },  
    "customFields": {String: Object}, 
    "externalDataSources": { 
      "platform": String, 
      "url": String, 
    },  
    "selfUri": String, 
  },  
  "relationship": String, 
  "externalDataSources": { 
    "platform": String, 
    "url": String, 
  },  
  "selfUri": String, 
}
```

</div>


### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.ExternalContactsApi();

let body = {}; // Object | Relationship

apiInstance.postExternalcontactsRelationships(body)
  .then((data) => {
    console.log(`postExternalcontactsRelationships success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling postExternalcontactsRelationships');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **body** | **Object** | Relationship |  |
{: class="table table-striped"}

### Return type

**Relationship**

<a name="putExternalcontactsContact"></a>

# ExternalContact putExternalcontactsContact(contactId, body)



PUT /api/v2/externalcontacts/contacts/{contactId}

Update an external contact



Requires ANY permissions: 

* externalContacts:contact:edit


### Request Body Schema

<script type="text/javascript">
	function copyExternalContactExample() {
		let temp = $("<textarea>");
		$("body").append(temp);
		temp.val($('#ExternalContactExample').text()).select();
		document.execCommand("copy");
		temp.remove();
		return false;
	}
</script>

ExternalContact <a href="#" onclick="return copyExternalContactExample()">Copy</a>

<div id="ExternalContactExample">

```{"language":"json", "maxHeight": "250px"}
{ 
  "id": String, 
  "firstName": String, 
  "middleName": String, 
  "lastName": String, 
  "salutation": String, 
  "title": String, 
  "workPhone": { 
    "display": String, 
    "extension": Number, 
    "acceptsSMS": Boolean, 
    "userInput": String, 
    "e164": String, 
    "countryCode": String, 
  },  
  "cellPhone": { 
    "display": String, 
    "extension": Number, 
    "acceptsSMS": Boolean, 
    "userInput": String, 
    "e164": String, 
    "countryCode": String, 
  },  
  "homePhone": { 
    "display": String, 
    "extension": Number, 
    "acceptsSMS": Boolean, 
    "userInput": String, 
    "e164": String, 
    "countryCode": String, 
  },  
  "otherPhone": { 
    "display": String, 
    "extension": Number, 
    "acceptsSMS": Boolean, 
    "userInput": String, 
    "e164": String, 
    "countryCode": String, 
  },  
  "workEmail": String, 
  "personalEmail": String, 
  "otherEmail": String, 
  "address": { 
    "address1": String, 
    "address2": String, 
    "city": String, 
    "state": String, 
    "postalCode": String, 
    "countryCode": String, 
  },  
  "twitterId": { 
    "id": String, 
    "name": String, 
    "screenName": String, 
    "verified": Boolean, 
    "profileUrl": String, 
  },  
  "lineId": { 
    "ids": { 
      "userId": String, 
    },  
    "displayName": String, 
  },  
  "whatsAppId": { 
    "phoneNumber": { 
      "display": String, 
      "extension": Number, 
      "acceptsSMS": Boolean, 
      "userInput": String, 
      "e164": String, 
      "countryCode": String, 
    },  
    "displayName": String, 
  },  
  "facebookId": { 
    "ids": { 
      "scopedId": String, 
    },  
    "displayName": String, 
  },  
  "modifyDate": Date, 
  "createDate": Date, 
  "externalOrganization": { 
    "id": String, 
    "name": String, 
    "companyType": String, 
    "industry": String, 
    "primaryContactId": String, 
    "address": { 
      "address1": String, 
      "address2": String, 
      "city": String, 
      "state": String, 
      "postalCode": String, 
      "countryCode": String, 
    },  
    "phoneNumber": { 
      "display": String, 
      "extension": Number, 
      "acceptsSMS": Boolean, 
      "userInput": String, 
      "e164": String, 
      "countryCode": String, 
    },  
    "faxNumber": { 
      "display": String, 
      "extension": Number, 
      "acceptsSMS": Boolean, 
      "userInput": String, 
      "e164": String, 
      "countryCode": String, 
    },  
    "employeeCount": Number, 
    "revenue": Number, 
    "tags": [String], 
    "websites": [String], 
    "tickers": { 
      "symbol": String, 
      "exchange": String, 
    },  
    "twitterId": { 
      "id": String, 
      "name": String, 
      "screenName": String, 
      "verified": Boolean, 
      "profileUrl": String, 
    },  
    "externalSystemUrl": String, 
    "modifyDate": Date, 
    "createDate": Date, 
    "trustor": { 
      "id": String, 
      "enabled": Boolean, 
      "dateCreated": Date, 
      "createdBy": { 
        "id": String, 
        "name": String, 
        "division": { 
          "id": String, 
          "name": String, 
          "selfUri": String, 
        },  
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
          "countryCode": String, 
        },  
        "addresses": { 
          "address": String, 
          "display": String, 
          "mediaType": String, 
          "type": String, 
          "extension": String, 
          "countryCode": String, 
        },  
        "state": String, 
        "title": String, 
        "username": String, 
        "manager": { 
          "id": String, 
          "name": String, 
          "division": { 
            "id": String, 
            "name": String, 
            "selfUri": String, 
          },  
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
            "countryCode": String, 
          },  
          "addresses": { 
            "address": String, 
            "display": String, 
            "mediaType": String, 
            "type": String, 
            "extension": String, 
            "countryCode": String, 
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
          "certifications": [String], 
          "biography": { 
            "biography": String, 
            "interests": [String], 
            "hobbies": [String], 
            "spouse": String, 
            "education": { 
              "school": String, 
              "fieldOfStudy": String, 
              "notes": String, 
              "dateStart": String, 
              "dateEnd": String, 
            },  
          },  
          "employerInfo": { 
            "officialName": String, 
            "employeeId": String, 
            "employeeType": String, 
            "dateHire": String, 
          },  
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
              "contactUser": { 
                "id": String, 
                "selfUri": String, 
              },  
              "emergencyNumber": { 
                "e164": String, 
                "number": String, 
                "type": String, 
              },  
              "address": { 
                "city": String, 
                "country": String, 
                "countryName": String, 
                "state": String, 
                "street1": String, 
                "street2": String, 
                "zipcode": String, 
              },  
              "state": String, 
              "notes": String, 
              "version": Number, 
              "path": [String], 
              "profileImage": { 
                "resolution": String, 
                "imageUri": String, 
              },  
              "floorplanImage": { 
                "resolution": String, 
                "imageUri": String, 
              },  
              "addressVerificationDetails": { 
                "status": String, 
                "dateFinished": Date, 
                "dateStarted": Date, 
                "service": String, 
              },  
              "addressVerified": Boolean, 
              "addressStored": Boolean, 
              "images": String, 
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
            "unusedRoles": { 
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
                "operands": [ResourceConditionValue], 
                "terms": [ResourceConditionNode], 
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
              "contactUser": { 
                "id": String, 
                "selfUri": String, 
              },  
              "emergencyNumber": { 
                "e164": String, 
                "number": String, 
                "type": String, 
              },  
              "address": { 
                "city": String, 
                "country": String, 
                "countryName": String, 
                "state": String, 
                "street1": String, 
                "street2": String, 
                "zipcode": String, 
              },  
              "state": String, 
              "notes": String, 
              "version": Number, 
              "path": [String], 
              "profileImage": { 
                "resolution": String, 
                "imageUri": String, 
              },  
              "floorplanImage": { 
                "resolution": String, 
                "imageUri": String, 
              },  
              "addressVerificationDetails": { 
                "status": String, 
                "dateFinished": Date, 
                "dateStarted": Date, 
                "service": String, 
              },  
              "addressVerified": Boolean, 
              "addressStored": Boolean, 
              "images": String, 
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
              "extension": String, 
              "display": String, 
              "type": String, 
              "mediaType": String, 
            },  
            "rulesVisible": Boolean, 
            "visibility": String, 
            "owners": User, 
            "selfUri": String, 
          },  
          "team": { 
            "id": String, 
            "name": String, 
            "description": String, 
            "dateModified": Date, 
            "memberCount": Number, 
            "selfUri": String, 
          },  
          "skills": { 
            "id": String, 
            "name": String, 
            "proficiency": Number, 
            "state": String, 
            "skillUri": String, 
            "selfUri": String, 
          },  
          "languages": { 
            "id": String, 
            "name": String, 
            "proficiency": Number, 
            "state": String, 
            "languageUri": String, 
            "selfUri": String, 
          },  
          "acdAutoAnswer": Boolean, 
          "languagePreference": String, 
          "lastTokenIssued": { 
            "dateIssued": Date, 
          },  
          "selfUri": String, 
        },  
        "images": { 
          "resolution": String, 
          "imageUri": String, 
        },  
        "version": Number, 
        "certifications": [String], 
        "biography": { 
          "biography": String, 
          "interests": [String], 
          "hobbies": [String], 
          "spouse": String, 
          "education": { 
            "school": String, 
            "fieldOfStudy": String, 
            "notes": String, 
            "dateStart": String, 
            "dateEnd": String, 
          },  
        },  
        "employerInfo": { 
          "officialName": String, 
          "employeeId": String, 
          "employeeType": String, 
          "dateHire": String, 
        },  
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
            "contactUser": { 
              "id": String, 
              "selfUri": String, 
            },  
            "emergencyNumber": { 
              "e164": String, 
              "number": String, 
              "type": String, 
            },  
            "address": { 
              "city": String, 
              "country": String, 
              "countryName": String, 
              "state": String, 
              "street1": String, 
              "street2": String, 
              "zipcode": String, 
            },  
            "state": String, 
            "notes": String, 
            "version": Number, 
            "path": [String], 
            "profileImage": { 
              "resolution": String, 
              "imageUri": String, 
            },  
            "floorplanImage": { 
              "resolution": String, 
              "imageUri": String, 
            },  
            "addressVerificationDetails": { 
              "status": String, 
              "dateFinished": Date, 
              "dateStarted": Date, 
              "service": String, 
            },  
            "addressVerified": Boolean, 
            "addressStored": Boolean, 
            "images": String, 
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
          "unusedRoles": { 
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
                "operands": [ResourceConditionValue], 
                "terms": [ResourceConditionNode], 
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
            "contactUser": { 
              "id": String, 
              "selfUri": String, 
            },  
            "emergencyNumber": { 
              "e164": String, 
              "number": String, 
              "type": String, 
            },  
            "address": { 
              "city": String, 
              "country": String, 
              "countryName": String, 
              "state": String, 
              "street1": String, 
              "street2": String, 
              "zipcode": String, 
            },  
            "state": String, 
            "notes": String, 
            "version": Number, 
            "path": [String], 
            "profileImage": { 
              "resolution": String, 
              "imageUri": String, 
            },  
            "floorplanImage": { 
              "resolution": String, 
              "imageUri": String, 
            },  
            "addressVerificationDetails": { 
              "status": String, 
              "dateFinished": Date, 
              "dateStarted": Date, 
              "service": String, 
            },  
            "addressVerified": Boolean, 
            "addressStored": Boolean, 
            "images": String, 
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
            "extension": String, 
            "display": String, 
            "type": String, 
            "mediaType": String, 
          },  
          "rulesVisible": Boolean, 
          "visibility": String, 
          "owners": User, 
          "selfUri": String, 
        },  
        "team": { 
          "id": String, 
          "name": String, 
          "description": String, 
          "dateModified": Date, 
          "memberCount": Number, 
          "selfUri": String, 
        },  
        "skills": { 
          "id": String, 
          "name": String, 
          "proficiency": Number, 
          "state": String, 
          "skillUri": String, 
          "selfUri": String, 
        },  
        "languages": { 
          "id": String, 
          "name": String, 
          "proficiency": Number, 
          "state": String, 
          "languageUri": String, 
          "selfUri": String, 
        },  
        "acdAutoAnswer": Boolean, 
        "languagePreference": String, 
        "lastTokenIssued": { 
          "dateIssued": Date, 
        },  
        "organization": { 
          "id": String, 
          "name": String, 
          "defaultLanguage": String, 
          "defaultCountryCode": String, 
          "thirdPartyOrgName": String, 
          "thirdPartyURI": String, 
          "domain": String, 
          "version": Number, 
          "state": String, 
          "defaultSiteId": String, 
          "supportURI": String, 
          "voicemailEnabled": Boolean, 
          "productPlatform": String, 
          "selfUri": String, 
          "features": {String: Boolean}, 
        },  
      },  
      "organization": { 
        "id": String, 
        "name": String, 
        "defaultLanguage": String, 
        "defaultCountryCode": String, 
        "thirdPartyOrgName": String, 
        "thirdPartyURI": String, 
        "domain": String, 
        "version": Number, 
        "state": String, 
        "defaultSiteId": String, 
        "supportURI": String, 
        "voicemailEnabled": Boolean, 
        "productPlatform": String, 
        "selfUri": String, 
        "features": {String: Boolean}, 
      },  
      "authorization": { 
        "permissions": [String], 
      },  
      "selfUri": String, 
    },  
    "schema": { 
      "id": String, 
      "name": String, 
      "version": Number, 
      "appliesTo": [String], 
      "enabled": Boolean, 
      "createdBy": { 
        "id": String, 
        "name": String, 
        "selfUri": String, 
      },  
      "dateCreated": Date, 
      "jsonSchema": { 
        "id": String, 
        "$schema": String, 
        "title": String, 
        "description": String, 
        "type": String, 
        "required": [String], 
        "properties": {String: Object}, 
        "additionalProperties": Object, 
      },  
      "selfUri": String, 
    },  
    "customFields": {String: Object}, 
    "externalDataSources": { 
      "platform": String, 
      "url": String, 
    },  
    "selfUri": String, 
  },  
  "surveyOptOut": Boolean, 
  "externalSystemUrl": String, 
  "schema": { 
    "id": String, 
    "name": String, 
    "version": Number, 
    "appliesTo": [String], 
    "enabled": Boolean, 
    "createdBy": { 
      "id": String, 
      "name": String, 
      "selfUri": String, 
    },  
    "dateCreated": Date, 
    "jsonSchema": { 
      "id": String, 
      "$schema": String, 
      "title": String, 
      "description": String, 
      "type": String, 
      "required": [String], 
      "properties": {String: Object}, 
      "additionalProperties": Object, 
    },  
    "selfUri": String, 
  },  
  "customFields": {String: Object}, 
  "externalDataSources": { 
    "platform": String, 
    "url": String, 
  },  
  "selfUri": String, 
}
```

</div>


### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.ExternalContactsApi();

let contactId = "contactId_example"; // String | ExternalContact ID
let body = {}; // Object | ExternalContact

apiInstance.putExternalcontactsContact(contactId, body)
  .then((data) => {
    console.log(`putExternalcontactsContact success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling putExternalcontactsContact');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **contactId** | **String** | ExternalContact ID |  |
 **body** | **Object** | ExternalContact |  |
{: class="table table-striped"}

### Return type

**ExternalContact**

<a name="putExternalcontactsContactNote"></a>

# Note putExternalcontactsContactNote(contactId, noteId, body)



PUT /api/v2/externalcontacts/contacts/{contactId}/notes/{noteId}

Update a note for an external contact



Requires ANY permissions: 

* externalContacts:contact:edit


### Request Body Schema

<script type="text/javascript">
	function copyNoteExample() {
		let temp = $("<textarea>");
		$("body").append(temp);
		temp.val($('#NoteExample').text()).select();
		document.execCommand("copy");
		temp.remove();
		return false;
	}
</script>

Note <a href="#" onclick="return copyNoteExample()">Copy</a>

<div id="NoteExample">

```{"language":"json", "maxHeight": "250px"}
{ 
  "id": String, 
  "name": String, 
  "noteText": String, 
  "modifyDate": Date, 
  "createDate": Date, 
  "createdBy": { 
    "id": String, 
    "name": String, 
    "division": { 
      "id": String, 
      "name": String, 
      "selfUri": String, 
    },  
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
      "countryCode": String, 
    },  
    "addresses": { 
      "address": String, 
      "display": String, 
      "mediaType": String, 
      "type": String, 
      "extension": String, 
      "countryCode": String, 
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
    "certifications": [String], 
    "biography": { 
      "biography": String, 
      "interests": [String], 
      "hobbies": [String], 
      "spouse": String, 
      "education": { 
        "school": String, 
        "fieldOfStudy": String, 
        "notes": String, 
        "dateStart": String, 
        "dateEnd": String, 
      },  
    },  
    "employerInfo": { 
      "officialName": String, 
      "employeeId": String, 
      "employeeType": String, 
      "dateHire": String, 
    },  
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
        "contactUser": { 
          "id": String, 
          "selfUri": String, 
        },  
        "emergencyNumber": { 
          "e164": String, 
          "number": String, 
          "type": String, 
        },  
        "address": { 
          "city": String, 
          "country": String, 
          "countryName": String, 
          "state": String, 
          "street1": String, 
          "street2": String, 
          "zipcode": String, 
        },  
        "state": String, 
        "notes": String, 
        "version": Number, 
        "path": [String], 
        "profileImage": { 
          "resolution": String, 
          "imageUri": String, 
        },  
        "floorplanImage": { 
          "resolution": String, 
          "imageUri": String, 
        },  
        "addressVerificationDetails": { 
          "status": String, 
          "dateFinished": Date, 
          "dateStarted": Date, 
          "service": String, 
        },  
        "addressVerified": Boolean, 
        "addressStored": Boolean, 
        "images": String, 
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
      "unusedRoles": { 
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
        "contactUser": { 
          "id": String, 
          "selfUri": String, 
        },  
        "emergencyNumber": { 
          "e164": String, 
          "number": String, 
          "type": String, 
        },  
        "address": { 
          "city": String, 
          "country": String, 
          "countryName": String, 
          "state": String, 
          "street1": String, 
          "street2": String, 
          "zipcode": String, 
        },  
        "state": String, 
        "notes": String, 
        "version": Number, 
        "path": [String], 
        "profileImage": { 
          "resolution": String, 
          "imageUri": String, 
        },  
        "floorplanImage": { 
          "resolution": String, 
          "imageUri": String, 
        },  
        "addressVerificationDetails": { 
          "status": String, 
          "dateFinished": Date, 
          "dateStarted": Date, 
          "service": String, 
        },  
        "addressVerified": Boolean, 
        "addressStored": Boolean, 
        "images": String, 
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
        "extension": String, 
        "display": String, 
        "type": String, 
        "mediaType": String, 
      },  
      "rulesVisible": Boolean, 
      "visibility": String, 
      "owners": User, 
      "selfUri": String, 
    },  
    "team": { 
      "id": String, 
      "name": String, 
      "description": String, 
      "dateModified": Date, 
      "memberCount": Number, 
      "selfUri": String, 
    },  
    "skills": { 
      "id": String, 
      "name": String, 
      "proficiency": Number, 
      "state": String, 
      "skillUri": String, 
      "selfUri": String, 
    },  
    "languages": { 
      "id": String, 
      "name": String, 
      "proficiency": Number, 
      "state": String, 
      "languageUri": String, 
      "selfUri": String, 
    },  
    "acdAutoAnswer": Boolean, 
    "languagePreference": String, 
    "lastTokenIssued": { 
      "dateIssued": Date, 
    },  
    "selfUri": String, 
  },  
  "externalDataSources": { 
    "platform": String, 
    "url": String, 
  },  
  "selfUri": String, 
}
```

</div>


### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.ExternalContactsApi();

let contactId = "contactId_example"; // String | ExternalContact Id
let noteId = "noteId_example"; // String | Note Id
let body = {}; // Object | Note

apiInstance.putExternalcontactsContactNote(contactId, noteId, body)
  .then((data) => {
    console.log(`putExternalcontactsContactNote success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling putExternalcontactsContactNote');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **contactId** | **String** | ExternalContact Id |  |
 **noteId** | **String** | Note Id |  |
 **body** | **Object** | Note |  |
{: class="table table-striped"}

### Return type

**Note**

<a name="putExternalcontactsContactsSchema"></a>

# DataSchema putExternalcontactsContactsSchema(schemaId, body)



PUT /api/v2/externalcontacts/contacts/schemas/{schemaId}

Update a schema



Requires ANY permissions: 

* externalContacts:customFields:edit


### Request Body Schema

<script type="text/javascript">
	function copyDataSchemaExample() {
		let temp = $("<textarea>");
		$("body").append(temp);
		temp.val($('#DataSchemaExample').text()).select();
		document.execCommand("copy");
		temp.remove();
		return false;
	}
</script>

DataSchema <a href="#" onclick="return copyDataSchemaExample()">Copy</a>

<div id="DataSchemaExample">

```{"language":"json", "maxHeight": "250px"}
{ 
  "id": String, 
  "name": String, 
  "version": Number, 
  "appliesTo": [String], 
  "enabled": Boolean, 
  "createdBy": { 
    "id": String, 
    "name": String, 
    "selfUri": String, 
  },  
  "dateCreated": Date, 
  "jsonSchema": { 
    "id": String, 
    "$schema": String, 
    "title": String, 
    "description": String, 
    "type": String, 
    "required": [String], 
    "properties": {String: Object}, 
    "additionalProperties": Object, 
  },  
  "selfUri": String, 
}
```

</div>


### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.ExternalContactsApi();

let schemaId = "schemaId_example"; // String | Schema ID
let body = {}; // Object | Data Schema

apiInstance.putExternalcontactsContactsSchema(schemaId, body)
  .then((data) => {
    console.log(`putExternalcontactsContactsSchema success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling putExternalcontactsContactsSchema');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **schemaId** | **String** | Schema ID |  |
 **body** | **Object** | Data Schema |  |
{: class="table table-striped"}

### Return type

**DataSchema**

<a name="putExternalcontactsConversation"></a>

# void putExternalcontactsConversation(body, conversationId)



PUT /api/v2/externalcontacts/conversations/{conversationId}

Associate/disassociate an external contact with a conversation

To associate, supply a value for the externalContactId.  To disassociate, do not include the property at all.

Requires ANY permissions: 

* externalContacts:conversation:associate


### Request Body Schema

<script type="text/javascript">
	function copyConversationAssociationExample() {
		let temp = $("<textarea>");
		$("body").append(temp);
		temp.val($('#ConversationAssociationExample').text()).select();
		document.execCommand("copy");
		temp.remove();
		return false;
	}
</script>

ConversationAssociation <a href="#" onclick="return copyConversationAssociationExample()">Copy</a>

<div id="ConversationAssociationExample">

```{"language":"json", "maxHeight": "250px"}
{ 
  "externalContactId": String, 
  "conversationId": String, 
  "communicationId": String, 
  "mediaType": String, 
}
```

</div>


### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.ExternalContactsApi();

let body = {}; // Object | ConversationAssociation
let conversationId = "conversationId_example"; // String | Conversation ID

apiInstance.putExternalcontactsConversation(body, conversationId)
  .then(() => {
    console.log('putExternalcontactsConversation returned successfully.');
  })
  .catch((err) => {
    console.log('There was a failure calling putExternalcontactsConversation');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **body** | **Object** | ConversationAssociation |  |
 **conversationId** | **String** | Conversation ID |  |
{: class="table table-striped"}

### Return type

void (no response body)

<a name="putExternalcontactsOrganization"></a>

# ExternalOrganization putExternalcontactsOrganization(externalOrganizationId, body)



PUT /api/v2/externalcontacts/organizations/{externalOrganizationId}

Update an external organization



Requires ANY permissions: 

* relate:externalOrganization:edit
* externalContacts:externalOrganization:edit


### Request Body Schema

<script type="text/javascript">
	function copyExternalOrganizationExample() {
		let temp = $("<textarea>");
		$("body").append(temp);
		temp.val($('#ExternalOrganizationExample').text()).select();
		document.execCommand("copy");
		temp.remove();
		return false;
	}
</script>

ExternalOrganization <a href="#" onclick="return copyExternalOrganizationExample()">Copy</a>

<div id="ExternalOrganizationExample">

```{"language":"json", "maxHeight": "250px"}
{ 
  "id": String, 
  "name": String, 
  "companyType": String, 
  "industry": String, 
  "primaryContactId": String, 
  "address": { 
    "address1": String, 
    "address2": String, 
    "city": String, 
    "state": String, 
    "postalCode": String, 
    "countryCode": String, 
  },  
  "phoneNumber": { 
    "display": String, 
    "extension": Number, 
    "acceptsSMS": Boolean, 
    "userInput": String, 
    "e164": String, 
    "countryCode": String, 
  },  
  "faxNumber": { 
    "display": String, 
    "extension": Number, 
    "acceptsSMS": Boolean, 
    "userInput": String, 
    "e164": String, 
    "countryCode": String, 
  },  
  "employeeCount": Number, 
  "revenue": Number, 
  "tags": [String], 
  "websites": [String], 
  "tickers": { 
    "symbol": String, 
    "exchange": String, 
  },  
  "twitterId": { 
    "id": String, 
    "name": String, 
    "screenName": String, 
    "verified": Boolean, 
    "profileUrl": String, 
  },  
  "externalSystemUrl": String, 
  "modifyDate": Date, 
  "createDate": Date, 
  "trustor": { 
    "id": String, 
    "enabled": Boolean, 
    "dateCreated": Date, 
    "createdBy": { 
      "id": String, 
      "name": String, 
      "division": { 
        "id": String, 
        "name": String, 
        "selfUri": String, 
      },  
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
        "countryCode": String, 
      },  
      "addresses": { 
        "address": String, 
        "display": String, 
        "mediaType": String, 
        "type": String, 
        "extension": String, 
        "countryCode": String, 
      },  
      "state": String, 
      "title": String, 
      "username": String, 
      "manager": { 
        "id": String, 
        "name": String, 
        "division": { 
          "id": String, 
          "name": String, 
          "selfUri": String, 
        },  
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
          "countryCode": String, 
        },  
        "addresses": { 
          "address": String, 
          "display": String, 
          "mediaType": String, 
          "type": String, 
          "extension": String, 
          "countryCode": String, 
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
        "certifications": [String], 
        "biography": { 
          "biography": String, 
          "interests": [String], 
          "hobbies": [String], 
          "spouse": String, 
          "education": { 
            "school": String, 
            "fieldOfStudy": String, 
            "notes": String, 
            "dateStart": String, 
            "dateEnd": String, 
          },  
        },  
        "employerInfo": { 
          "officialName": String, 
          "employeeId": String, 
          "employeeType": String, 
          "dateHire": String, 
        },  
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
            "contactUser": { 
              "id": String, 
              "selfUri": String, 
            },  
            "emergencyNumber": { 
              "e164": String, 
              "number": String, 
              "type": String, 
            },  
            "address": { 
              "city": String, 
              "country": String, 
              "countryName": String, 
              "state": String, 
              "street1": String, 
              "street2": String, 
              "zipcode": String, 
            },  
            "state": String, 
            "notes": String, 
            "version": Number, 
            "path": [String], 
            "profileImage": { 
              "resolution": String, 
              "imageUri": String, 
            },  
            "floorplanImage": { 
              "resolution": String, 
              "imageUri": String, 
            },  
            "addressVerificationDetails": { 
              "status": String, 
              "dateFinished": Date, 
              "dateStarted": Date, 
              "service": String, 
            },  
            "addressVerified": Boolean, 
            "addressStored": Boolean, 
            "images": String, 
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
          "unusedRoles": { 
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
                "operands": [ResourceConditionValue], 
                "terms": [ResourceConditionNode], 
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
            "contactUser": { 
              "id": String, 
              "selfUri": String, 
            },  
            "emergencyNumber": { 
              "e164": String, 
              "number": String, 
              "type": String, 
            },  
            "address": { 
              "city": String, 
              "country": String, 
              "countryName": String, 
              "state": String, 
              "street1": String, 
              "street2": String, 
              "zipcode": String, 
            },  
            "state": String, 
            "notes": String, 
            "version": Number, 
            "path": [String], 
            "profileImage": { 
              "resolution": String, 
              "imageUri": String, 
            },  
            "floorplanImage": { 
              "resolution": String, 
              "imageUri": String, 
            },  
            "addressVerificationDetails": { 
              "status": String, 
              "dateFinished": Date, 
              "dateStarted": Date, 
              "service": String, 
            },  
            "addressVerified": Boolean, 
            "addressStored": Boolean, 
            "images": String, 
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
            "extension": String, 
            "display": String, 
            "type": String, 
            "mediaType": String, 
          },  
          "rulesVisible": Boolean, 
          "visibility": String, 
          "owners": User, 
          "selfUri": String, 
        },  
        "team": { 
          "id": String, 
          "name": String, 
          "description": String, 
          "dateModified": Date, 
          "memberCount": Number, 
          "selfUri": String, 
        },  
        "skills": { 
          "id": String, 
          "name": String, 
          "proficiency": Number, 
          "state": String, 
          "skillUri": String, 
          "selfUri": String, 
        },  
        "languages": { 
          "id": String, 
          "name": String, 
          "proficiency": Number, 
          "state": String, 
          "languageUri": String, 
          "selfUri": String, 
        },  
        "acdAutoAnswer": Boolean, 
        "languagePreference": String, 
        "lastTokenIssued": { 
          "dateIssued": Date, 
        },  
        "selfUri": String, 
      },  
      "images": { 
        "resolution": String, 
        "imageUri": String, 
      },  
      "version": Number, 
      "certifications": [String], 
      "biography": { 
        "biography": String, 
        "interests": [String], 
        "hobbies": [String], 
        "spouse": String, 
        "education": { 
          "school": String, 
          "fieldOfStudy": String, 
          "notes": String, 
          "dateStart": String, 
          "dateEnd": String, 
        },  
      },  
      "employerInfo": { 
        "officialName": String, 
        "employeeId": String, 
        "employeeType": String, 
        "dateHire": String, 
      },  
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
          "contactUser": { 
            "id": String, 
            "selfUri": String, 
          },  
          "emergencyNumber": { 
            "e164": String, 
            "number": String, 
            "type": String, 
          },  
          "address": { 
            "city": String, 
            "country": String, 
            "countryName": String, 
            "state": String, 
            "street1": String, 
            "street2": String, 
            "zipcode": String, 
          },  
          "state": String, 
          "notes": String, 
          "version": Number, 
          "path": [String], 
          "profileImage": { 
            "resolution": String, 
            "imageUri": String, 
          },  
          "floorplanImage": { 
            "resolution": String, 
            "imageUri": String, 
          },  
          "addressVerificationDetails": { 
            "status": String, 
            "dateFinished": Date, 
            "dateStarted": Date, 
            "service": String, 
          },  
          "addressVerified": Boolean, 
          "addressStored": Boolean, 
          "images": String, 
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
        "unusedRoles": { 
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
                "operands": [ResourceConditionValue], 
                "terms": [ResourceConditionNode], 
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
          "contactUser": { 
            "id": String, 
            "selfUri": String, 
          },  
          "emergencyNumber": { 
            "e164": String, 
            "number": String, 
            "type": String, 
          },  
          "address": { 
            "city": String, 
            "country": String, 
            "countryName": String, 
            "state": String, 
            "street1": String, 
            "street2": String, 
            "zipcode": String, 
          },  
          "state": String, 
          "notes": String, 
          "version": Number, 
          "path": [String], 
          "profileImage": { 
            "resolution": String, 
            "imageUri": String, 
          },  
          "floorplanImage": { 
            "resolution": String, 
            "imageUri": String, 
          },  
          "addressVerificationDetails": { 
            "status": String, 
            "dateFinished": Date, 
            "dateStarted": Date, 
            "service": String, 
          },  
          "addressVerified": Boolean, 
          "addressStored": Boolean, 
          "images": String, 
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
          "extension": String, 
          "display": String, 
          "type": String, 
          "mediaType": String, 
        },  
        "rulesVisible": Boolean, 
        "visibility": String, 
        "owners": User, 
        "selfUri": String, 
      },  
      "team": { 
        "id": String, 
        "name": String, 
        "description": String, 
        "dateModified": Date, 
        "memberCount": Number, 
        "selfUri": String, 
      },  
      "skills": { 
        "id": String, 
        "name": String, 
        "proficiency": Number, 
        "state": String, 
        "skillUri": String, 
        "selfUri": String, 
      },  
      "languages": { 
        "id": String, 
        "name": String, 
        "proficiency": Number, 
        "state": String, 
        "languageUri": String, 
        "selfUri": String, 
      },  
      "acdAutoAnswer": Boolean, 
      "languagePreference": String, 
      "lastTokenIssued": { 
        "dateIssued": Date, 
      },  
      "organization": { 
        "id": String, 
        "name": String, 
        "defaultLanguage": String, 
        "defaultCountryCode": String, 
        "thirdPartyOrgName": String, 
        "thirdPartyURI": String, 
        "domain": String, 
        "version": Number, 
        "state": String, 
        "defaultSiteId": String, 
        "supportURI": String, 
        "voicemailEnabled": Boolean, 
        "productPlatform": String, 
        "selfUri": String, 
        "features": {String: Boolean}, 
      },  
    },  
    "organization": { 
      "id": String, 
      "name": String, 
      "defaultLanguage": String, 
      "defaultCountryCode": String, 
      "thirdPartyOrgName": String, 
      "thirdPartyURI": String, 
      "domain": String, 
      "version": Number, 
      "state": String, 
      "defaultSiteId": String, 
      "supportURI": String, 
      "voicemailEnabled": Boolean, 
      "productPlatform": String, 
      "selfUri": String, 
      "features": {String: Boolean}, 
    },  
    "authorization": { 
      "permissions": [String], 
    },  
    "selfUri": String, 
  },  
  "schema": { 
    "id": String, 
    "name": String, 
    "version": Number, 
    "appliesTo": [String], 
    "enabled": Boolean, 
    "createdBy": { 
      "id": String, 
      "name": String, 
      "selfUri": String, 
    },  
    "dateCreated": Date, 
    "jsonSchema": { 
      "id": String, 
      "$schema": String, 
      "title": String, 
      "description": String, 
      "type": String, 
      "required": [String], 
      "properties": {String: Object}, 
      "additionalProperties": Object, 
    },  
    "selfUri": String, 
  },  
  "customFields": {String: Object}, 
  "externalDataSources": { 
    "platform": String, 
    "url": String, 
  },  
  "selfUri": String, 
}
```

</div>


### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.ExternalContactsApi();

let externalOrganizationId = "externalOrganizationId_example"; // String | External Organization ID
let body = {}; // Object | ExternalOrganization

apiInstance.putExternalcontactsOrganization(externalOrganizationId, body)
  .then((data) => {
    console.log(`putExternalcontactsOrganization success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling putExternalcontactsOrganization');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **externalOrganizationId** | **String** | External Organization ID |  |
 **body** | **Object** | ExternalOrganization |  |
{: class="table table-striped"}

### Return type

**ExternalOrganization**

<a name="putExternalcontactsOrganizationNote"></a>

# Note putExternalcontactsOrganizationNote(externalOrganizationId, noteId, body)



PUT /api/v2/externalcontacts/organizations/{externalOrganizationId}/notes/{noteId}

Update a note for an external organization



Requires ANY permissions: 

* externalContacts:externalOrganization:edit


### Request Body Schema

<script type="text/javascript">
	function copyNoteExample() {
		let temp = $("<textarea>");
		$("body").append(temp);
		temp.val($('#NoteExample').text()).select();
		document.execCommand("copy");
		temp.remove();
		return false;
	}
</script>

Note <a href="#" onclick="return copyNoteExample()">Copy</a>

<div id="NoteExample">

```{"language":"json", "maxHeight": "250px"}
{ 
  "id": String, 
  "name": String, 
  "noteText": String, 
  "modifyDate": Date, 
  "createDate": Date, 
  "createdBy": { 
    "id": String, 
    "name": String, 
    "division": { 
      "id": String, 
      "name": String, 
      "selfUri": String, 
    },  
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
      "countryCode": String, 
    },  
    "addresses": { 
      "address": String, 
      "display": String, 
      "mediaType": String, 
      "type": String, 
      "extension": String, 
      "countryCode": String, 
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
    "certifications": [String], 
    "biography": { 
      "biography": String, 
      "interests": [String], 
      "hobbies": [String], 
      "spouse": String, 
      "education": { 
        "school": String, 
        "fieldOfStudy": String, 
        "notes": String, 
        "dateStart": String, 
        "dateEnd": String, 
      },  
    },  
    "employerInfo": { 
      "officialName": String, 
      "employeeId": String, 
      "employeeType": String, 
      "dateHire": String, 
    },  
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
        "contactUser": { 
          "id": String, 
          "selfUri": String, 
        },  
        "emergencyNumber": { 
          "e164": String, 
          "number": String, 
          "type": String, 
        },  
        "address": { 
          "city": String, 
          "country": String, 
          "countryName": String, 
          "state": String, 
          "street1": String, 
          "street2": String, 
          "zipcode": String, 
        },  
        "state": String, 
        "notes": String, 
        "version": Number, 
        "path": [String], 
        "profileImage": { 
          "resolution": String, 
          "imageUri": String, 
        },  
        "floorplanImage": { 
          "resolution": String, 
          "imageUri": String, 
        },  
        "addressVerificationDetails": { 
          "status": String, 
          "dateFinished": Date, 
          "dateStarted": Date, 
          "service": String, 
        },  
        "addressVerified": Boolean, 
        "addressStored": Boolean, 
        "images": String, 
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
      "unusedRoles": { 
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
        "contactUser": { 
          "id": String, 
          "selfUri": String, 
        },  
        "emergencyNumber": { 
          "e164": String, 
          "number": String, 
          "type": String, 
        },  
        "address": { 
          "city": String, 
          "country": String, 
          "countryName": String, 
          "state": String, 
          "street1": String, 
          "street2": String, 
          "zipcode": String, 
        },  
        "state": String, 
        "notes": String, 
        "version": Number, 
        "path": [String], 
        "profileImage": { 
          "resolution": String, 
          "imageUri": String, 
        },  
        "floorplanImage": { 
          "resolution": String, 
          "imageUri": String, 
        },  
        "addressVerificationDetails": { 
          "status": String, 
          "dateFinished": Date, 
          "dateStarted": Date, 
          "service": String, 
        },  
        "addressVerified": Boolean, 
        "addressStored": Boolean, 
        "images": String, 
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
        "extension": String, 
        "display": String, 
        "type": String, 
        "mediaType": String, 
      },  
      "rulesVisible": Boolean, 
      "visibility": String, 
      "owners": User, 
      "selfUri": String, 
    },  
    "team": { 
      "id": String, 
      "name": String, 
      "description": String, 
      "dateModified": Date, 
      "memberCount": Number, 
      "selfUri": String, 
    },  
    "skills": { 
      "id": String, 
      "name": String, 
      "proficiency": Number, 
      "state": String, 
      "skillUri": String, 
      "selfUri": String, 
    },  
    "languages": { 
      "id": String, 
      "name": String, 
      "proficiency": Number, 
      "state": String, 
      "languageUri": String, 
      "selfUri": String, 
    },  
    "acdAutoAnswer": Boolean, 
    "languagePreference": String, 
    "lastTokenIssued": { 
      "dateIssued": Date, 
    },  
    "selfUri": String, 
  },  
  "externalDataSources": { 
    "platform": String, 
    "url": String, 
  },  
  "selfUri": String, 
}
```

</div>


### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.ExternalContactsApi();

let externalOrganizationId = "externalOrganizationId_example"; // String | External Organization Id
let noteId = "noteId_example"; // String | Note Id
let body = {}; // Object | Note

apiInstance.putExternalcontactsOrganizationNote(externalOrganizationId, noteId, body)
  .then((data) => {
    console.log(`putExternalcontactsOrganizationNote success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling putExternalcontactsOrganizationNote');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **externalOrganizationId** | **String** | External Organization Id |  |
 **noteId** | **String** | Note Id |  |
 **body** | **Object** | Note |  |
{: class="table table-striped"}

### Return type

**Note**

<a name="putExternalcontactsOrganizationTrustorTrustorId"></a>

# ExternalOrganizationTrustorLink putExternalcontactsOrganizationTrustorTrustorId(externalOrganizationId, trustorId)



PUT /api/v2/externalcontacts/organizations/{externalOrganizationId}/trustor/{trustorId}

Links a Trustor with an External Organization



Requires ANY permissions: 

* externalContacts:externalOrganization:edit



### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.ExternalContactsApi();

let externalOrganizationId = "externalOrganizationId_example"; // String | External Organization ID
let trustorId = "trustorId_example"; // String | Trustor ID

apiInstance.putExternalcontactsOrganizationTrustorTrustorId(externalOrganizationId, trustorId)
  .then((data) => {
    console.log(`putExternalcontactsOrganizationTrustorTrustorId success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling putExternalcontactsOrganizationTrustorTrustorId');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **externalOrganizationId** | **String** | External Organization ID |  |
 **trustorId** | **String** | Trustor ID |  |
{: class="table table-striped"}

### Return type

**ExternalOrganizationTrustorLink**

<a name="putExternalcontactsOrganizationsSchema"></a>

# DataSchema putExternalcontactsOrganizationsSchema(schemaId, body)



PUT /api/v2/externalcontacts/organizations/schemas/{schemaId}

Update a schema



Requires ANY permissions: 

* externalContacts:customFields:edit


### Request Body Schema

<script type="text/javascript">
	function copyDataSchemaExample() {
		let temp = $("<textarea>");
		$("body").append(temp);
		temp.val($('#DataSchemaExample').text()).select();
		document.execCommand("copy");
		temp.remove();
		return false;
	}
</script>

DataSchema <a href="#" onclick="return copyDataSchemaExample()">Copy</a>

<div id="DataSchemaExample">

```{"language":"json", "maxHeight": "250px"}
{ 
  "id": String, 
  "name": String, 
  "version": Number, 
  "appliesTo": [String], 
  "enabled": Boolean, 
  "createdBy": { 
    "id": String, 
    "name": String, 
    "selfUri": String, 
  },  
  "dateCreated": Date, 
  "jsonSchema": { 
    "id": String, 
    "$schema": String, 
    "title": String, 
    "description": String, 
    "type": String, 
    "required": [String], 
    "properties": {String: Object}, 
    "additionalProperties": Object, 
  },  
  "selfUri": String, 
}
```

</div>


### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.ExternalContactsApi();

let schemaId = "schemaId_example"; // String | Schema ID
let body = {}; // Object | Data Schema

apiInstance.putExternalcontactsOrganizationsSchema(schemaId, body)
  .then((data) => {
    console.log(`putExternalcontactsOrganizationsSchema success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling putExternalcontactsOrganizationsSchema');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **schemaId** | **String** | Schema ID |  |
 **body** | **Object** | Data Schema |  |
{: class="table table-striped"}

### Return type

**DataSchema**

<a name="putExternalcontactsRelationship"></a>

# Relationship putExternalcontactsRelationship(relationshipId, body)



PUT /api/v2/externalcontacts/relationships/{relationshipId}

Update a relationship



Requires ANY permissions: 

* externalContacts:externalOrganization:edit


### Request Body Schema

<script type="text/javascript">
	function copyRelationshipExample() {
		let temp = $("<textarea>");
		$("body").append(temp);
		temp.val($('#RelationshipExample').text()).select();
		document.execCommand("copy");
		temp.remove();
		return false;
	}
</script>

Relationship <a href="#" onclick="return copyRelationshipExample()">Copy</a>

<div id="RelationshipExample">

```{"language":"json", "maxHeight": "250px"}
{ 
  "id": String, 
  "name": String, 
  "user": { 
    "id": String, 
    "name": String, 
    "division": { 
      "id": String, 
      "name": String, 
      "selfUri": String, 
    },  
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
      "countryCode": String, 
    },  
    "addresses": { 
      "address": String, 
      "display": String, 
      "mediaType": String, 
      "type": String, 
      "extension": String, 
      "countryCode": String, 
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
    "certifications": [String], 
    "biography": { 
      "biography": String, 
      "interests": [String], 
      "hobbies": [String], 
      "spouse": String, 
      "education": { 
        "school": String, 
        "fieldOfStudy": String, 
        "notes": String, 
        "dateStart": String, 
        "dateEnd": String, 
      },  
    },  
    "employerInfo": { 
      "officialName": String, 
      "employeeId": String, 
      "employeeType": String, 
      "dateHire": String, 
    },  
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
        "contactUser": { 
          "id": String, 
          "selfUri": String, 
        },  
        "emergencyNumber": { 
          "e164": String, 
          "number": String, 
          "type": String, 
        },  
        "address": { 
          "city": String, 
          "country": String, 
          "countryName": String, 
          "state": String, 
          "street1": String, 
          "street2": String, 
          "zipcode": String, 
        },  
        "state": String, 
        "notes": String, 
        "version": Number, 
        "path": [String], 
        "profileImage": { 
          "resolution": String, 
          "imageUri": String, 
        },  
        "floorplanImage": { 
          "resolution": String, 
          "imageUri": String, 
        },  
        "addressVerificationDetails": { 
          "status": String, 
          "dateFinished": Date, 
          "dateStarted": Date, 
          "service": String, 
        },  
        "addressVerified": Boolean, 
        "addressStored": Boolean, 
        "images": String, 
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
      "unusedRoles": { 
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
        "contactUser": { 
          "id": String, 
          "selfUri": String, 
        },  
        "emergencyNumber": { 
          "e164": String, 
          "number": String, 
          "type": String, 
        },  
        "address": { 
          "city": String, 
          "country": String, 
          "countryName": String, 
          "state": String, 
          "street1": String, 
          "street2": String, 
          "zipcode": String, 
        },  
        "state": String, 
        "notes": String, 
        "version": Number, 
        "path": [String], 
        "profileImage": { 
          "resolution": String, 
          "imageUri": String, 
        },  
        "floorplanImage": { 
          "resolution": String, 
          "imageUri": String, 
        },  
        "addressVerificationDetails": { 
          "status": String, 
          "dateFinished": Date, 
          "dateStarted": Date, 
          "service": String, 
        },  
        "addressVerified": Boolean, 
        "addressStored": Boolean, 
        "images": String, 
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
        "extension": String, 
        "display": String, 
        "type": String, 
        "mediaType": String, 
      },  
      "rulesVisible": Boolean, 
      "visibility": String, 
      "owners": User, 
      "selfUri": String, 
    },  
    "team": { 
      "id": String, 
      "name": String, 
      "description": String, 
      "dateModified": Date, 
      "memberCount": Number, 
      "selfUri": String, 
    },  
    "skills": { 
      "id": String, 
      "name": String, 
      "proficiency": Number, 
      "state": String, 
      "skillUri": String, 
      "selfUri": String, 
    },  
    "languages": { 
      "id": String, 
      "name": String, 
      "proficiency": Number, 
      "state": String, 
      "languageUri": String, 
      "selfUri": String, 
    },  
    "acdAutoAnswer": Boolean, 
    "languagePreference": String, 
    "lastTokenIssued": { 
      "dateIssued": Date, 
    },  
    "selfUri": String, 
  },  
  "externalOrganization": { 
    "id": String, 
    "name": String, 
    "companyType": String, 
    "industry": String, 
    "primaryContactId": String, 
    "address": { 
      "address1": String, 
      "address2": String, 
      "city": String, 
      "state": String, 
      "postalCode": String, 
      "countryCode": String, 
    },  
    "phoneNumber": { 
      "display": String, 
      "extension": Number, 
      "acceptsSMS": Boolean, 
      "userInput": String, 
      "e164": String, 
      "countryCode": String, 
    },  
    "faxNumber": { 
      "display": String, 
      "extension": Number, 
      "acceptsSMS": Boolean, 
      "userInput": String, 
      "e164": String, 
      "countryCode": String, 
    },  
    "employeeCount": Number, 
    "revenue": Number, 
    "tags": [String], 
    "websites": [String], 
    "tickers": { 
      "symbol": String, 
      "exchange": String, 
    },  
    "twitterId": { 
      "id": String, 
      "name": String, 
      "screenName": String, 
      "verified": Boolean, 
      "profileUrl": String, 
    },  
    "externalSystemUrl": String, 
    "modifyDate": Date, 
    "createDate": Date, 
    "trustor": { 
      "id": String, 
      "enabled": Boolean, 
      "dateCreated": Date, 
      "createdBy": { 
        "id": String, 
        "name": String, 
        "division": { 
          "id": String, 
          "name": String, 
          "selfUri": String, 
        },  
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
          "countryCode": String, 
        },  
        "addresses": { 
          "address": String, 
          "display": String, 
          "mediaType": String, 
          "type": String, 
          "extension": String, 
          "countryCode": String, 
        },  
        "state": String, 
        "title": String, 
        "username": String, 
        "manager": { 
          "id": String, 
          "name": String, 
          "division": { 
            "id": String, 
            "name": String, 
            "selfUri": String, 
          },  
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
            "countryCode": String, 
          },  
          "addresses": { 
            "address": String, 
            "display": String, 
            "mediaType": String, 
            "type": String, 
            "extension": String, 
            "countryCode": String, 
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
          "certifications": [String], 
          "biography": { 
            "biography": String, 
            "interests": [String], 
            "hobbies": [String], 
            "spouse": String, 
            "education": { 
              "school": String, 
              "fieldOfStudy": String, 
              "notes": String, 
              "dateStart": String, 
              "dateEnd": String, 
            },  
          },  
          "employerInfo": { 
            "officialName": String, 
            "employeeId": String, 
            "employeeType": String, 
            "dateHire": String, 
          },  
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
              "contactUser": { 
                "id": String, 
                "selfUri": String, 
              },  
              "emergencyNumber": { 
                "e164": String, 
                "number": String, 
                "type": String, 
              },  
              "address": { 
                "city": String, 
                "country": String, 
                "countryName": String, 
                "state": String, 
                "street1": String, 
                "street2": String, 
                "zipcode": String, 
              },  
              "state": String, 
              "notes": String, 
              "version": Number, 
              "path": [String], 
              "profileImage": { 
                "resolution": String, 
                "imageUri": String, 
              },  
              "floorplanImage": { 
                "resolution": String, 
                "imageUri": String, 
              },  
              "addressVerificationDetails": { 
                "status": String, 
                "dateFinished": Date, 
                "dateStarted": Date, 
                "service": String, 
              },  
              "addressVerified": Boolean, 
              "addressStored": Boolean, 
              "images": String, 
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
            "unusedRoles": { 
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
                "operands": [ResourceConditionValue], 
                "terms": [ResourceConditionNode], 
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
              "contactUser": { 
                "id": String, 
                "selfUri": String, 
              },  
              "emergencyNumber": { 
                "e164": String, 
                "number": String, 
                "type": String, 
              },  
              "address": { 
                "city": String, 
                "country": String, 
                "countryName": String, 
                "state": String, 
                "street1": String, 
                "street2": String, 
                "zipcode": String, 
              },  
              "state": String, 
              "notes": String, 
              "version": Number, 
              "path": [String], 
              "profileImage": { 
                "resolution": String, 
                "imageUri": String, 
              },  
              "floorplanImage": { 
                "resolution": String, 
                "imageUri": String, 
              },  
              "addressVerificationDetails": { 
                "status": String, 
                "dateFinished": Date, 
                "dateStarted": Date, 
                "service": String, 
              },  
              "addressVerified": Boolean, 
              "addressStored": Boolean, 
              "images": String, 
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
              "extension": String, 
              "display": String, 
              "type": String, 
              "mediaType": String, 
            },  
            "rulesVisible": Boolean, 
            "visibility": String, 
            "owners": User, 
            "selfUri": String, 
          },  
          "team": { 
            "id": String, 
            "name": String, 
            "description": String, 
            "dateModified": Date, 
            "memberCount": Number, 
            "selfUri": String, 
          },  
          "skills": { 
            "id": String, 
            "name": String, 
            "proficiency": Number, 
            "state": String, 
            "skillUri": String, 
            "selfUri": String, 
          },  
          "languages": { 
            "id": String, 
            "name": String, 
            "proficiency": Number, 
            "state": String, 
            "languageUri": String, 
            "selfUri": String, 
          },  
          "acdAutoAnswer": Boolean, 
          "languagePreference": String, 
          "lastTokenIssued": { 
            "dateIssued": Date, 
          },  
          "selfUri": String, 
        },  
        "images": { 
          "resolution": String, 
          "imageUri": String, 
        },  
        "version": Number, 
        "certifications": [String], 
        "biography": { 
          "biography": String, 
          "interests": [String], 
          "hobbies": [String], 
          "spouse": String, 
          "education": { 
            "school": String, 
            "fieldOfStudy": String, 
            "notes": String, 
            "dateStart": String, 
            "dateEnd": String, 
          },  
        },  
        "employerInfo": { 
          "officialName": String, 
          "employeeId": String, 
          "employeeType": String, 
          "dateHire": String, 
        },  
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
            "contactUser": { 
              "id": String, 
              "selfUri": String, 
            },  
            "emergencyNumber": { 
              "e164": String, 
              "number": String, 
              "type": String, 
            },  
            "address": { 
              "city": String, 
              "country": String, 
              "countryName": String, 
              "state": String, 
              "street1": String, 
              "street2": String, 
              "zipcode": String, 
            },  
            "state": String, 
            "notes": String, 
            "version": Number, 
            "path": [String], 
            "profileImage": { 
              "resolution": String, 
              "imageUri": String, 
            },  
            "floorplanImage": { 
              "resolution": String, 
              "imageUri": String, 
            },  
            "addressVerificationDetails": { 
              "status": String, 
              "dateFinished": Date, 
              "dateStarted": Date, 
              "service": String, 
            },  
            "addressVerified": Boolean, 
            "addressStored": Boolean, 
            "images": String, 
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
          "unusedRoles": { 
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
                "operands": [ResourceConditionValue], 
                "terms": [ResourceConditionNode], 
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
            "contactUser": { 
              "id": String, 
              "selfUri": String, 
            },  
            "emergencyNumber": { 
              "e164": String, 
              "number": String, 
              "type": String, 
            },  
            "address": { 
              "city": String, 
              "country": String, 
              "countryName": String, 
              "state": String, 
              "street1": String, 
              "street2": String, 
              "zipcode": String, 
            },  
            "state": String, 
            "notes": String, 
            "version": Number, 
            "path": [String], 
            "profileImage": { 
              "resolution": String, 
              "imageUri": String, 
            },  
            "floorplanImage": { 
              "resolution": String, 
              "imageUri": String, 
            },  
            "addressVerificationDetails": { 
              "status": String, 
              "dateFinished": Date, 
              "dateStarted": Date, 
              "service": String, 
            },  
            "addressVerified": Boolean, 
            "addressStored": Boolean, 
            "images": String, 
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
            "extension": String, 
            "display": String, 
            "type": String, 
            "mediaType": String, 
          },  
          "rulesVisible": Boolean, 
          "visibility": String, 
          "owners": User, 
          "selfUri": String, 
        },  
        "team": { 
          "id": String, 
          "name": String, 
          "description": String, 
          "dateModified": Date, 
          "memberCount": Number, 
          "selfUri": String, 
        },  
        "skills": { 
          "id": String, 
          "name": String, 
          "proficiency": Number, 
          "state": String, 
          "skillUri": String, 
          "selfUri": String, 
        },  
        "languages": { 
          "id": String, 
          "name": String, 
          "proficiency": Number, 
          "state": String, 
          "languageUri": String, 
          "selfUri": String, 
        },  
        "acdAutoAnswer": Boolean, 
        "languagePreference": String, 
        "lastTokenIssued": { 
          "dateIssued": Date, 
        },  
        "organization": { 
          "id": String, 
          "name": String, 
          "defaultLanguage": String, 
          "defaultCountryCode": String, 
          "thirdPartyOrgName": String, 
          "thirdPartyURI": String, 
          "domain": String, 
          "version": Number, 
          "state": String, 
          "defaultSiteId": String, 
          "supportURI": String, 
          "voicemailEnabled": Boolean, 
          "productPlatform": String, 
          "selfUri": String, 
          "features": {String: Boolean}, 
        },  
      },  
      "organization": { 
        "id": String, 
        "name": String, 
        "defaultLanguage": String, 
        "defaultCountryCode": String, 
        "thirdPartyOrgName": String, 
        "thirdPartyURI": String, 
        "domain": String, 
        "version": Number, 
        "state": String, 
        "defaultSiteId": String, 
        "supportURI": String, 
        "voicemailEnabled": Boolean, 
        "productPlatform": String, 
        "selfUri": String, 
        "features": {String: Boolean}, 
      },  
      "authorization": { 
        "permissions": [String], 
      },  
      "selfUri": String, 
    },  
    "schema": { 
      "id": String, 
      "name": String, 
      "version": Number, 
      "appliesTo": [String], 
      "enabled": Boolean, 
      "createdBy": { 
        "id": String, 
        "name": String, 
        "selfUri": String, 
      },  
      "dateCreated": Date, 
      "jsonSchema": { 
        "id": String, 
        "$schema": String, 
        "title": String, 
        "description": String, 
        "type": String, 
        "required": [String], 
        "properties": {String: Object}, 
        "additionalProperties": Object, 
      },  
      "selfUri": String, 
    },  
    "customFields": {String: Object}, 
    "externalDataSources": { 
      "platform": String, 
      "url": String, 
    },  
    "selfUri": String, 
  },  
  "relationship": String, 
  "externalDataSources": { 
    "platform": String, 
    "url": String, 
  },  
  "selfUri": String, 
}
```

</div>


### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.ExternalContactsApi();

let relationshipId = "relationshipId_example"; // String | Relationship Id
let body = {}; // Object | Relationship

apiInstance.putExternalcontactsRelationship(relationshipId, body)
  .then((data) => {
    console.log(`putExternalcontactsRelationship success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling putExternalcontactsRelationship');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **relationshipId** | **String** | Relationship Id |  |
 **body** | **Object** | Relationship |  |
{: class="table table-striped"}

### Return type

**Relationship**

