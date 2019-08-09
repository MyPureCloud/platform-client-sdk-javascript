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
[**getExternalcontactsReversewhitepageslookup**](ExternalContactsApi.html#getExternalcontactsReversewhitepageslookup) | **GET** /api/v2/externalcontacts/reversewhitepageslookup | Look up contacts and externalOrganizations based on an attribute. Maximum of 25 values returned.
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
[**putExternalcontactsOrganizationTrustorTrustorId**](ExternalContactsApi.html#putExternalcontactsOrganizationTrustorTrustorId) | **PUT** /api/v2/externalcontacts/organizations/{externalOrganizationId}/trustor/{trustorId} | Links a Trustor with an External Organization
[**putExternalcontactsRelationship**](ExternalContactsApi.html#putExternalcontactsRelationship) | **PUT** /api/v2/externalcontacts/relationships/{relationshipId} | Update a relationship
{: class="table table-striped"}

<a name="deleteExternalcontactsContact"></a>

# void deleteExternalcontactsContact(contactId)



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
  .then(() => {
    console.log('deleteExternalcontactsContact returned successfully.');
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

void (no response body)

<a name="deleteExternalcontactsContactNote"></a>

# void deleteExternalcontactsContactNote(contactId, noteId)



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
  .then(() => {
    console.log('deleteExternalcontactsContactNote returned successfully.');
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

void (no response body)

<a name="deleteExternalcontactsOrganization"></a>

# void deleteExternalcontactsOrganization(externalOrganizationId)



DELETE /api/v2/externalcontacts/organizations/{externalOrganizationId}

Delete an external organization



Requires ANY permissions: 

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
  .then(() => {
    console.log('deleteExternalcontactsOrganization returned successfully.');
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

void (no response body)

<a name="deleteExternalcontactsOrganizationNote"></a>

# void deleteExternalcontactsOrganizationNote(externalOrganizationId, noteId)



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
  .then(() => {
    console.log('deleteExternalcontactsOrganizationNote returned successfully.');
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

void (no response body)

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

# void deleteExternalcontactsRelationship(relationshipId)



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
  .then(() => {
    console.log('deleteExternalcontactsRelationship returned successfully.');
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

void (no response body)

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

<a name="getExternalcontactsOrganization"></a>

# ExternalOrganization getExternalcontactsOrganization(externalOrganizationId, opts)



GET /api/v2/externalcontacts/organizations/{externalOrganizationId}

Fetch an external organization



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
    "certifications": [String], 
    "biography": { 
      "biography": String, 
      "interests": [String], 
      "hobbies": [String], 
      "spouse": String, 
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
        "addressVerified": Boolean, 
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
        "addressVerified": Boolean, 
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
          "certifications": [String], 
          "biography": { 
            "biography": String, 
            "interests": [String], 
            "hobbies": [String], 
            "spouse": String, 
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
              "addressVerified": Boolean, 
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
              "addressVerified": Boolean, 
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
            "addressVerified": Boolean, 
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
            "addressVerified": Boolean, 
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
        "selfUri": String, 
        "features": {String: Boolean}, 
      },  
      "authorization": { 
        "permissions": [String], 
      },  
      "selfUri": String, 
    },  
    "externalDataSources": { 
      "platform": String, 
      "url": String, 
    },  
    "selfUri": String, 
  },  
  "surveyOptOut": Boolean, 
  "externalSystemUrl": String, 
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

<a name="postExternalcontactsOrganizationNotes"></a>

# Note postExternalcontactsOrganizationNotes(externalOrganizationId, body)



POST /api/v2/externalcontacts/organizations/{externalOrganizationId}/notes

Create a note for an external organization



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
    "certifications": [String], 
    "biography": { 
      "biography": String, 
      "interests": [String], 
      "hobbies": [String], 
      "spouse": String, 
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
        "addressVerified": Boolean, 
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
        "addressVerified": Boolean, 
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
        "certifications": [String], 
        "biography": { 
          "biography": String, 
          "interests": [String], 
          "hobbies": [String], 
          "spouse": String, 
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
            "addressVerified": Boolean, 
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
            "addressVerified": Boolean, 
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
          "addressVerified": Boolean, 
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
          "addressVerified": Boolean, 
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
      "selfUri": String, 
      "features": {String: Boolean}, 
    },  
    "authorization": { 
      "permissions": [String], 
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
    "certifications": [String], 
    "biography": { 
      "biography": String, 
      "interests": [String], 
      "hobbies": [String], 
      "spouse": String, 
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
        "addressVerified": Boolean, 
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
        "addressVerified": Boolean, 
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
          "certifications": [String], 
          "biography": { 
            "biography": String, 
            "interests": [String], 
            "hobbies": [String], 
            "spouse": String, 
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
              "addressVerified": Boolean, 
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
              "addressVerified": Boolean, 
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
            "addressVerified": Boolean, 
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
            "addressVerified": Boolean, 
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
        "selfUri": String, 
        "features": {String: Boolean}, 
      },  
      "authorization": { 
        "permissions": [String], 
      },  
      "selfUri": String, 
    },  
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
          "certifications": [String], 
          "biography": { 
            "biography": String, 
            "interests": [String], 
            "hobbies": [String], 
            "spouse": String, 
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
              "addressVerified": Boolean, 
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
              "addressVerified": Boolean, 
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
            "addressVerified": Boolean, 
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
            "addressVerified": Boolean, 
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
        "selfUri": String, 
        "features": {String: Boolean}, 
      },  
      "authorization": { 
        "permissions": [String], 
      },  
      "selfUri": String, 
    },  
    "externalDataSources": { 
      "platform": String, 
      "url": String, 
    },  
    "selfUri": String, 
  },  
  "surveyOptOut": Boolean, 
  "externalSystemUrl": String, 
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
    "certifications": [String], 
    "biography": { 
      "biography": String, 
      "interests": [String], 
      "hobbies": [String], 
      "spouse": String, 
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
        "addressVerified": Boolean, 
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
        "addressVerified": Boolean, 
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

<a name="putExternalcontactsConversation"></a>

# void putExternalcontactsConversation(conversationId, body)



PUT /api/v2/externalcontacts/conversations/{conversationId}

Associate an external contact with a conversation



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

let conversationId = "conversationId_example"; // String | Conversation ID
let body = {}; // Object | ConversationAssociation

apiInstance.putExternalcontactsConversation(conversationId, body)
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
 **conversationId** | **String** | Conversation ID |  |
 **body** | **Object** | ConversationAssociation |  |
{: class="table table-striped"}

### Return type

void (no response body)

<a name="putExternalcontactsOrganization"></a>

# ExternalOrganization putExternalcontactsOrganization(externalOrganizationId, body)



PUT /api/v2/externalcontacts/organizations/{externalOrganizationId}

Update an external organization



Requires ANY permissions: 

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
        "certifications": [String], 
        "biography": { 
          "biography": String, 
          "interests": [String], 
          "hobbies": [String], 
          "spouse": String, 
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
            "addressVerified": Boolean, 
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
            "addressVerified": Boolean, 
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
          "addressVerified": Boolean, 
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
          "addressVerified": Boolean, 
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
      "selfUri": String, 
      "features": {String: Boolean}, 
    },  
    "authorization": { 
      "permissions": [String], 
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
    "certifications": [String], 
    "biography": { 
      "biography": String, 
      "interests": [String], 
      "hobbies": [String], 
      "spouse": String, 
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
        "addressVerified": Boolean, 
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
        "addressVerified": Boolean, 
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

# ExternalOrganization putExternalcontactsOrganizationTrustorTrustorId(externalOrganizationId, trustorId)



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

**ExternalOrganization**

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
    "certifications": [String], 
    "biography": { 
      "biography": String, 
      "interests": [String], 
      "hobbies": [String], 
      "spouse": String, 
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
        "addressVerified": Boolean, 
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
        "addressVerified": Boolean, 
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
          "certifications": [String], 
          "biography": { 
            "biography": String, 
            "interests": [String], 
            "hobbies": [String], 
            "spouse": String, 
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
              "addressVerified": Boolean, 
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
              "addressVerified": Boolean, 
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
            "addressVerified": Boolean, 
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
            "addressVerified": Boolean, 
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
        "selfUri": String, 
        "features": {String: Boolean}, 
      },  
      "authorization": { 
        "permissions": [String], 
      },  
      "selfUri": String, 
    },  
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

