# ExternalContactsApi

# platformClient.ExternalContactsApi

All URIs are relative to *https://api.mypurecloud.com*

| Method | HTTP request | Description |
| ------------- | ------------- | ------------- |
[**deleteExternalcontactsContact**](ExternalContactsApi#deleteExternalcontactsContact) | **DELETE** /api/v2/externalcontacts/contacts/{contactId} | Delete an external contact
[**deleteExternalcontactsContactNote**](ExternalContactsApi#deleteExternalcontactsContactNote) | **DELETE** /api/v2/externalcontacts/contacts/{contactId}/notes/{noteId} | Delete a note for an external contact
[**deleteExternalcontactsContactsSchema**](ExternalContactsApi#deleteExternalcontactsContactsSchema) | **DELETE** /api/v2/externalcontacts/contacts/schemas/{schemaId} | Delete a schema
[**deleteExternalcontactsExternalsource**](ExternalContactsApi#deleteExternalcontactsExternalsource) | **DELETE** /api/v2/externalcontacts/externalsources/{externalSourceId} | Delete an External Source. WARNING: Any records that reference this External Source will not be automatically cleaned up. Those records will still be editable, but their External IDs may not be fully viewable.
[**deleteExternalcontactsImportCsvSetting**](ExternalContactsApi#deleteExternalcontactsImportCsvSetting) | **DELETE** /api/v2/externalcontacts/import/csv/settings/{settingsId} | Delete settings for CSV import
[**deleteExternalcontactsImportSetting**](ExternalContactsApi#deleteExternalcontactsImportSetting) | **DELETE** /api/v2/externalcontacts/import/settings/{settingsId} | Delete Settings
[**deleteExternalcontactsOrganization**](ExternalContactsApi#deleteExternalcontactsOrganization) | **DELETE** /api/v2/externalcontacts/organizations/{externalOrganizationId} | Delete an external organization
[**deleteExternalcontactsOrganizationNote**](ExternalContactsApi#deleteExternalcontactsOrganizationNote) | **DELETE** /api/v2/externalcontacts/organizations/{externalOrganizationId}/notes/{noteId} | Delete a note for an external organization
[**deleteExternalcontactsOrganizationTrustor**](ExternalContactsApi#deleteExternalcontactsOrganizationTrustor) | **DELETE** /api/v2/externalcontacts/organizations/{externalOrganizationId}/trustor | Unlink the Trustor for this External Organization
[**deleteExternalcontactsRelationship**](ExternalContactsApi#deleteExternalcontactsRelationship) | **DELETE** /api/v2/externalcontacts/relationships/{relationshipId} | Delete a relationship
[**getExternalcontactsContact**](ExternalContactsApi#getExternalcontactsContact) | **GET** /api/v2/externalcontacts/contacts/{contactId} | Fetch an external contact
[**getExternalcontactsContactIdentifiers**](ExternalContactsApi#getExternalcontactsContactIdentifiers) | **GET** /api/v2/externalcontacts/contacts/{contactId}/identifiers | List the identifiers for a contact
[**getExternalcontactsContactJourneySegments**](ExternalContactsApi#getExternalcontactsContactJourneySegments) | **GET** /api/v2/externalcontacts/contacts/{contactId}/journey/segments | Retrieve segment assignments by external contact ID.
[**getExternalcontactsContactJourneySessions**](ExternalContactsApi#getExternalcontactsContactJourneySessions) | **GET** /api/v2/externalcontacts/contacts/{contactId}/journey/sessions | Retrieve all sessions for a given external contact.
[**getExternalcontactsContactNote**](ExternalContactsApi#getExternalcontactsContactNote) | **GET** /api/v2/externalcontacts/contacts/{contactId}/notes/{noteId} | Fetch a note for an external contact
[**getExternalcontactsContactNotes**](ExternalContactsApi#getExternalcontactsContactNotes) | **GET** /api/v2/externalcontacts/contacts/{contactId}/notes | List notes for an external contact
[**getExternalcontactsContactUnresolved**](ExternalContactsApi#getExternalcontactsContactUnresolved) | **GET** /api/v2/externalcontacts/contacts/{contactId}/unresolved | Fetch an unresolved external contact
[**getExternalcontactsContacts**](ExternalContactsApi#getExternalcontactsContacts) | **GET** /api/v2/externalcontacts/contacts | Search for external contacts
[**getExternalcontactsContactsExport**](ExternalContactsApi#getExternalcontactsContactsExport) | **GET** /api/v2/externalcontacts/contacts/exports/{exportId} | Get export for exportId
[**getExternalcontactsContactsExports**](ExternalContactsApi#getExternalcontactsContactsExports) | **GET** /api/v2/externalcontacts/contacts/exports | List exports for organization
[**getExternalcontactsContactsSchema**](ExternalContactsApi#getExternalcontactsContactsSchema) | **GET** /api/v2/externalcontacts/contacts/schemas/{schemaId} | Get a schema
[**getExternalcontactsContactsSchemaVersion**](ExternalContactsApi#getExternalcontactsContactsSchemaVersion) | **GET** /api/v2/externalcontacts/contacts/schemas/{schemaId}/versions/{versionId} | Get a specific version of a schema
[**getExternalcontactsContactsSchemaVersions**](ExternalContactsApi#getExternalcontactsContactsSchemaVersions) | **GET** /api/v2/externalcontacts/contacts/schemas/{schemaId}/versions | Get all versions of an external contact's schema
[**getExternalcontactsContactsSchemas**](ExternalContactsApi#getExternalcontactsContactsSchemas) | **GET** /api/v2/externalcontacts/contacts/schemas | Get a list of schemas.
[**getExternalcontactsContactsSchemasCoretype**](ExternalContactsApi#getExternalcontactsContactsSchemasCoretype) | **GET** /api/v2/externalcontacts/contacts/schemas/coretypes/{coreTypeName} | Get a specific named core type.
[**getExternalcontactsContactsSchemasCoretypes**](ExternalContactsApi#getExternalcontactsContactsSchemasCoretypes) | **GET** /api/v2/externalcontacts/contacts/schemas/coretypes | Get the core types from which all schemas are built.
[**getExternalcontactsContactsSchemasLimits**](ExternalContactsApi#getExternalcontactsContactsSchemasLimits) | **GET** /api/v2/externalcontacts/contacts/schemas/limits | Get quantitative limits on schemas
[**getExternalcontactsExternalsource**](ExternalContactsApi#getExternalcontactsExternalsource) | **GET** /api/v2/externalcontacts/externalsources/{externalSourceId} | Fetch an External Source
[**getExternalcontactsExternalsources**](ExternalContactsApi#getExternalcontactsExternalsources) | **GET** /api/v2/externalcontacts/externalsources | Fetch a list of External Sources
[**getExternalcontactsImportCsvSetting**](ExternalContactsApi#getExternalcontactsImportCsvSetting) | **GET** /api/v2/externalcontacts/import/csv/settings/{settingsId} | Get settings for CSV import
[**getExternalcontactsImportCsvSettings**](ExternalContactsApi#getExternalcontactsImportCsvSettings) | **GET** /api/v2/externalcontacts/import/csv/settings | Retrieve all settings for organization filtered by externalSettingsId if provided
[**getExternalcontactsImportCsvUploadDetails**](ExternalContactsApi#getExternalcontactsImportCsvUploadDetails) | **GET** /api/v2/externalcontacts/import/csv/uploads/{uploadId}/details | Get details for CSV upload
[**getExternalcontactsImportCsvUploadPreview**](ExternalContactsApi#getExternalcontactsImportCsvUploadPreview) | **GET** /api/v2/externalcontacts/import/csv/uploads/{uploadId}/preview | Get preview for CSV upload
[**getExternalcontactsImportJob**](ExternalContactsApi#getExternalcontactsImportJob) | **GET** /api/v2/externalcontacts/import/jobs/{jobId} | Get job based on id
[**getExternalcontactsImportJobs**](ExternalContactsApi#getExternalcontactsImportJobs) | **GET** /api/v2/externalcontacts/import/jobs | List jobs for organization
[**getExternalcontactsImportSetting**](ExternalContactsApi#getExternalcontactsImportSetting) | **GET** /api/v2/externalcontacts/import/settings/{settingsId} | Get setting based on id
[**getExternalcontactsImportSettings**](ExternalContactsApi#getExternalcontactsImportSettings) | **GET** /api/v2/externalcontacts/import/settings | List settings for organization
[**getExternalcontactsOrganization**](ExternalContactsApi#getExternalcontactsOrganization) | **GET** /api/v2/externalcontacts/organizations/{externalOrganizationId} | Fetch an external organization
[**getExternalcontactsOrganizationContacts**](ExternalContactsApi#getExternalcontactsOrganizationContacts) | **GET** /api/v2/externalcontacts/organizations/{externalOrganizationId}/contacts | Search for external contacts in an external organization
[**getExternalcontactsOrganizationIdentifiers**](ExternalContactsApi#getExternalcontactsOrganizationIdentifiers) | **GET** /api/v2/externalcontacts/organizations/{externalOrganizationId}/identifiers | List the identifiers for an external organization
[**getExternalcontactsOrganizationNote**](ExternalContactsApi#getExternalcontactsOrganizationNote) | **GET** /api/v2/externalcontacts/organizations/{externalOrganizationId}/notes/{noteId} | Fetch a note for an external organization
[**getExternalcontactsOrganizationNotes**](ExternalContactsApi#getExternalcontactsOrganizationNotes) | **GET** /api/v2/externalcontacts/organizations/{externalOrganizationId}/notes | List notes for an external organization
[**getExternalcontactsOrganizationRelationships**](ExternalContactsApi#getExternalcontactsOrganizationRelationships) | **GET** /api/v2/externalcontacts/organizations/{externalOrganizationId}/relationships | Fetch a relationship for an external organization
[**getExternalcontactsOrganizations**](ExternalContactsApi#getExternalcontactsOrganizations) | **GET** /api/v2/externalcontacts/organizations | Search for external organizations
[**getExternalcontactsOrganizationsSchema**](ExternalContactsApi#getExternalcontactsOrganizationsSchema) | **GET** /api/v2/externalcontacts/organizations/schemas/{schemaId} | Get a schema
[**getExternalcontactsOrganizationsSchemaVersion**](ExternalContactsApi#getExternalcontactsOrganizationsSchemaVersion) | **GET** /api/v2/externalcontacts/organizations/schemas/{schemaId}/versions/{versionId} | Get a specific version of a schema
[**getExternalcontactsOrganizationsSchemaVersions**](ExternalContactsApi#getExternalcontactsOrganizationsSchemaVersions) | **GET** /api/v2/externalcontacts/organizations/schemas/{schemaId}/versions | Get all versions of an external organization's schema
[**getExternalcontactsOrganizationsSchemas**](ExternalContactsApi#getExternalcontactsOrganizationsSchemas) | **GET** /api/v2/externalcontacts/organizations/schemas | Get a list of schemas.
[**getExternalcontactsOrganizationsSchemasCoretype**](ExternalContactsApi#getExternalcontactsOrganizationsSchemasCoretype) | **GET** /api/v2/externalcontacts/organizations/schemas/coretypes/{coreTypeName} | Get a specific named core type.
[**getExternalcontactsOrganizationsSchemasCoretypes**](ExternalContactsApi#getExternalcontactsOrganizationsSchemasCoretypes) | **GET** /api/v2/externalcontacts/organizations/schemas/coretypes | Get the core types from which all schemas are built.
[**getExternalcontactsOrganizationsSchemasLimits**](ExternalContactsApi#getExternalcontactsOrganizationsSchemasLimits) | **GET** /api/v2/externalcontacts/organizations/schemas/limits | Get quantitative limits on schemas
[**getExternalcontactsRelationship**](ExternalContactsApi#getExternalcontactsRelationship) | **GET** /api/v2/externalcontacts/relationships/{relationshipId} | Fetch a relationship
[**getExternalcontactsReversewhitepageslookup**](ExternalContactsApi#getExternalcontactsReversewhitepageslookup) | **GET** /api/v2/externalcontacts/reversewhitepageslookup | Look up contacts based on an attribute. Maximum of 25 values returned.
[**getExternalcontactsScanContacts**](ExternalContactsApi#getExternalcontactsScanContacts) | **GET** /api/v2/externalcontacts/scan/contacts | Scan for external contacts using paging
[**getExternalcontactsScanContactsDivisionviewsAll**](ExternalContactsApi#getExternalcontactsScanContactsDivisionviewsAll) | **GET** /api/v2/externalcontacts/scan/contacts/divisionviews/all | Scan for external contacts using paging
[**getExternalcontactsScanNotes**](ExternalContactsApi#getExternalcontactsScanNotes) | **GET** /api/v2/externalcontacts/scan/notes | Scan for notes using paging
[**getExternalcontactsScanNotesDivisionviewsAll**](ExternalContactsApi#getExternalcontactsScanNotesDivisionviewsAll) | **GET** /api/v2/externalcontacts/scan/notes/divisionviews/all | Scan for notes using paging
[**getExternalcontactsScanOrganizations**](ExternalContactsApi#getExternalcontactsScanOrganizations) | **GET** /api/v2/externalcontacts/scan/organizations | Scan for external organizations using paging
[**getExternalcontactsScanOrganizationsDivisionviewsAll**](ExternalContactsApi#getExternalcontactsScanOrganizationsDivisionviewsAll) | **GET** /api/v2/externalcontacts/scan/organizations/divisionviews/all | Scan for external organizations using paging
[**getExternalcontactsScanRelationships**](ExternalContactsApi#getExternalcontactsScanRelationships) | **GET** /api/v2/externalcontacts/scan/relationships | Scan for relationships
[**getExternalcontactsScanRelationshipsDivisionviewsAll**](ExternalContactsApi#getExternalcontactsScanRelationshipsDivisionviewsAll) | **GET** /api/v2/externalcontacts/scan/relationships/divisionviews/all | Scan for relationships
[**patchExternalcontactsContactIdentifiers**](ExternalContactsApi#patchExternalcontactsContactIdentifiers) | **PATCH** /api/v2/externalcontacts/contacts/{contactId}/identifiers | Claim or release identifiers for a contact
[**patchExternalcontactsOrganizationIdentifiers**](ExternalContactsApi#patchExternalcontactsOrganizationIdentifiers) | **PATCH** /api/v2/externalcontacts/organizations/{externalOrganizationId}/identifiers | Claim or release identifiers for an external organization
[**postExternalcontactsBulkContacts**](ExternalContactsApi#postExternalcontactsBulkContacts) | **POST** /api/v2/externalcontacts/bulk/contacts | Bulk fetch contacts
[**postExternalcontactsBulkContactsAdd**](ExternalContactsApi#postExternalcontactsBulkContactsAdd) | **POST** /api/v2/externalcontacts/bulk/contacts/add | Bulk add contacts
[**postExternalcontactsBulkContactsDivisionviews**](ExternalContactsApi#postExternalcontactsBulkContactsDivisionviews) | **POST** /api/v2/externalcontacts/bulk/contacts/divisionviews | Bulk fetch contacts across divisions
[**postExternalcontactsBulkContactsEnrich**](ExternalContactsApi#postExternalcontactsBulkContactsEnrich) | **POST** /api/v2/externalcontacts/bulk/contacts/enrich | Bulk Enrich Contacts - Run up to 10 Enrich operations per request
[**postExternalcontactsBulkContactsRemove**](ExternalContactsApi#postExternalcontactsBulkContactsRemove) | **POST** /api/v2/externalcontacts/bulk/contacts/remove | Bulk remove contacts
[**postExternalcontactsBulkContactsUnresolved**](ExternalContactsApi#postExternalcontactsBulkContactsUnresolved) | **POST** /api/v2/externalcontacts/bulk/contacts/unresolved | Bulk fetch unresolved ancestor contacts
[**postExternalcontactsBulkContactsUpdate**](ExternalContactsApi#postExternalcontactsBulkContactsUpdate) | **POST** /api/v2/externalcontacts/bulk/contacts/update | Bulk update contacts
[**postExternalcontactsBulkNotes**](ExternalContactsApi#postExternalcontactsBulkNotes) | **POST** /api/v2/externalcontacts/bulk/notes | Bulk fetch notes
[**postExternalcontactsBulkNotesAdd**](ExternalContactsApi#postExternalcontactsBulkNotesAdd) | **POST** /api/v2/externalcontacts/bulk/notes/add | Bulk add notes
[**postExternalcontactsBulkNotesRemove**](ExternalContactsApi#postExternalcontactsBulkNotesRemove) | **POST** /api/v2/externalcontacts/bulk/notes/remove | Bulk remove notes
[**postExternalcontactsBulkNotesUpdate**](ExternalContactsApi#postExternalcontactsBulkNotesUpdate) | **POST** /api/v2/externalcontacts/bulk/notes/update | Bulk update notes
[**postExternalcontactsBulkOrganizations**](ExternalContactsApi#postExternalcontactsBulkOrganizations) | **POST** /api/v2/externalcontacts/bulk/organizations | Bulk fetch organizations
[**postExternalcontactsBulkOrganizationsAdd**](ExternalContactsApi#postExternalcontactsBulkOrganizationsAdd) | **POST** /api/v2/externalcontacts/bulk/organizations/add | Bulk add organizations
[**postExternalcontactsBulkOrganizationsDivisionviews**](ExternalContactsApi#postExternalcontactsBulkOrganizationsDivisionviews) | **POST** /api/v2/externalcontacts/bulk/organizations/divisionviews | Bulk fetch organizations across divisions
[**postExternalcontactsBulkOrganizationsEnrich**](ExternalContactsApi#postExternalcontactsBulkOrganizationsEnrich) | **POST** /api/v2/externalcontacts/bulk/organizations/enrich | Bulk enrich external organizations - Run up to 10 Enrich operations per request
[**postExternalcontactsBulkOrganizationsRemove**](ExternalContactsApi#postExternalcontactsBulkOrganizationsRemove) | **POST** /api/v2/externalcontacts/bulk/organizations/remove | Bulk remove organizations
[**postExternalcontactsBulkOrganizationsUpdate**](ExternalContactsApi#postExternalcontactsBulkOrganizationsUpdate) | **POST** /api/v2/externalcontacts/bulk/organizations/update | Bulk update organizations
[**postExternalcontactsBulkRelationships**](ExternalContactsApi#postExternalcontactsBulkRelationships) | **POST** /api/v2/externalcontacts/bulk/relationships | Bulk fetch relationships
[**postExternalcontactsBulkRelationshipsAdd**](ExternalContactsApi#postExternalcontactsBulkRelationshipsAdd) | **POST** /api/v2/externalcontacts/bulk/relationships/add | Bulk add relationships
[**postExternalcontactsBulkRelationshipsRemove**](ExternalContactsApi#postExternalcontactsBulkRelationshipsRemove) | **POST** /api/v2/externalcontacts/bulk/relationships/remove | Bulk remove relationships
[**postExternalcontactsBulkRelationshipsUpdate**](ExternalContactsApi#postExternalcontactsBulkRelationshipsUpdate) | **POST** /api/v2/externalcontacts/bulk/relationships/update | Bulk update relationships
[**postExternalcontactsContactJourneySegments**](ExternalContactsApi#postExternalcontactsContactJourneySegments) | **POST** /api/v2/externalcontacts/contacts/{contactId}/journey/segments | Assign/Unassign up to 10 segments to/from an external contact or, if a segment is already assigned, update the expiry date of the segment assignment. Any unprocessed segment assignments are returned in the body for the client to retry, in the event of a partial success.
[**postExternalcontactsContactNotes**](ExternalContactsApi#postExternalcontactsContactNotes) | **POST** /api/v2/externalcontacts/contacts/{contactId}/notes | Create a note for an external contact
[**postExternalcontactsContactPromotion**](ExternalContactsApi#postExternalcontactsContactPromotion) | **POST** /api/v2/externalcontacts/contacts/{contactId}/promotion | Promote an observed contact (ephemeral or identified) to a curated contact
[**postExternalcontactsContacts**](ExternalContactsApi#postExternalcontactsContacts) | **POST** /api/v2/externalcontacts/contacts | Create an external contact
[**postExternalcontactsContactsEnrich**](ExternalContactsApi#postExternalcontactsContactsEnrich) | **POST** /api/v2/externalcontacts/contacts/enrich | Modify or create an External Contact, with powerful behaviors for finding and combining data with pre-existing Contacts.
[**postExternalcontactsContactsExports**](ExternalContactsApi#postExternalcontactsContactsExports) | **POST** /api/v2/externalcontacts/contacts/exports | Create bulk export
[**postExternalcontactsContactsMerge**](ExternalContactsApi#postExternalcontactsContactsMerge) | **POST** /api/v2/externalcontacts/contacts/merge | Merge up to 25 contacts into a new contact record
[**postExternalcontactsContactsSchemas**](ExternalContactsApi#postExternalcontactsContactsSchemas) | **POST** /api/v2/externalcontacts/contacts/schemas | Create a schema
[**postExternalcontactsExternalsources**](ExternalContactsApi#postExternalcontactsExternalsources) | **POST** /api/v2/externalcontacts/externalsources | Create an External Source
[**postExternalcontactsIdentifierlookup**](ExternalContactsApi#postExternalcontactsIdentifierlookup) | **POST** /api/v2/externalcontacts/identifierlookup | Fetch a contact using an identifier type and value.
[**postExternalcontactsIdentifierlookupContacts**](ExternalContactsApi#postExternalcontactsIdentifierlookupContacts) | **POST** /api/v2/externalcontacts/identifierlookup/contacts | Fetch a contact using an identifier type and value.
[**postExternalcontactsIdentifierlookupOrganizations**](ExternalContactsApi#postExternalcontactsIdentifierlookupOrganizations) | **POST** /api/v2/externalcontacts/identifierlookup/organizations | Fetch an external organization using an identifier type and value.
[**postExternalcontactsImportCsvJobs**](ExternalContactsApi#postExternalcontactsImportCsvJobs) | **POST** /api/v2/externalcontacts/import/csv/jobs | Create CSV import job
[**postExternalcontactsImportCsvSettings**](ExternalContactsApi#postExternalcontactsImportCsvSettings) | **POST** /api/v2/externalcontacts/import/csv/settings | Create settings for CSV import
[**postExternalcontactsImportCsvUploads**](ExternalContactsApi#postExternalcontactsImportCsvUploads) | **POST** /api/v2/externalcontacts/import/csv/uploads | Get url for CSV upload
[**postExternalcontactsImportJobs**](ExternalContactsApi#postExternalcontactsImportJobs) | **POST** /api/v2/externalcontacts/import/jobs | Create a new job
[**postExternalcontactsImportSettings**](ExternalContactsApi#postExternalcontactsImportSettings) | **POST** /api/v2/externalcontacts/import/settings | Create a new settings
[**postExternalcontactsMergeContacts**](ExternalContactsApi#postExternalcontactsMergeContacts) | **POST** /api/v2/externalcontacts/merge/contacts | Merge two contacts into a new contact record
[**postExternalcontactsOrganizationNotes**](ExternalContactsApi#postExternalcontactsOrganizationNotes) | **POST** /api/v2/externalcontacts/organizations/{externalOrganizationId}/notes | Create a note for an external organization
[**postExternalcontactsOrganizations**](ExternalContactsApi#postExternalcontactsOrganizations) | **POST** /api/v2/externalcontacts/organizations | Create an external organization
[**postExternalcontactsOrganizationsEnrich**](ExternalContactsApi#postExternalcontactsOrganizationsEnrich) | **POST** /api/v2/externalcontacts/organizations/enrich | Modify or create an External Org, with powerful behaviors for finding and combining data with pre-existing External Orgs.
[**postExternalcontactsOrganizationsSchemas**](ExternalContactsApi#postExternalcontactsOrganizationsSchemas) | **POST** /api/v2/externalcontacts/organizations/schemas | Create a schema
[**postExternalcontactsRelationships**](ExternalContactsApi#postExternalcontactsRelationships) | **POST** /api/v2/externalcontacts/relationships | Create a relationship
[**putExternalcontactsContact**](ExternalContactsApi#putExternalcontactsContact) | **PUT** /api/v2/externalcontacts/contacts/{contactId} | Update an external contact
[**putExternalcontactsContactNote**](ExternalContactsApi#putExternalcontactsContactNote) | **PUT** /api/v2/externalcontacts/contacts/{contactId}/notes/{noteId} | Update a note for an external contact
[**putExternalcontactsContactsSchema**](ExternalContactsApi#putExternalcontactsContactsSchema) | **PUT** /api/v2/externalcontacts/contacts/schemas/{schemaId} | Update a schema
[**putExternalcontactsConversation**](ExternalContactsApi#putExternalcontactsConversation) | **PUT** /api/v2/externalcontacts/conversations/{conversationId} | Associate/disassociate an external contact with a conversation
[**putExternalcontactsExternalsource**](ExternalContactsApi#putExternalcontactsExternalsource) | **PUT** /api/v2/externalcontacts/externalsources/{externalSourceId} | Update an External Source
[**putExternalcontactsImportCsvSetting**](ExternalContactsApi#putExternalcontactsImportCsvSetting) | **PUT** /api/v2/externalcontacts/import/csv/settings/{settingsId} | Update settings for CSV import
[**putExternalcontactsImportJob**](ExternalContactsApi#putExternalcontactsImportJob) | **PUT** /api/v2/externalcontacts/import/jobs/{jobId} | Update Job's workflow status
[**putExternalcontactsImportSetting**](ExternalContactsApi#putExternalcontactsImportSetting) | **PUT** /api/v2/externalcontacts/import/settings/{settingsId} | Update settings
[**putExternalcontactsOrganization**](ExternalContactsApi#putExternalcontactsOrganization) | **PUT** /api/v2/externalcontacts/organizations/{externalOrganizationId} | Update an external organization
[**putExternalcontactsOrganizationNote**](ExternalContactsApi#putExternalcontactsOrganizationNote) | **PUT** /api/v2/externalcontacts/organizations/{externalOrganizationId}/notes/{noteId} | Update a note for an external organization
[**putExternalcontactsOrganizationTrustorTrustorId**](ExternalContactsApi#putExternalcontactsOrganizationTrustorTrustorId) | **PUT** /api/v2/externalcontacts/organizations/{externalOrganizationId}/trustor/{trustorId} | Links a Trustor with an External Organization
[**putExternalcontactsOrganizationsSchema**](ExternalContactsApi#putExternalcontactsOrganizationsSchema) | **PUT** /api/v2/externalcontacts/organizations/schemas/{schemaId} | Update a schema
[**putExternalcontactsRelationship**](ExternalContactsApi#putExternalcontactsRelationship) | **PUT** /api/v2/externalcontacts/relationships/{relationshipId} | Update a relationship



## deleteExternalcontactsContact

> **Object** deleteExternalcontactsContact(contactId)


DELETE /api/v2/externalcontacts/contacts/{contactId}

Delete an external contact

Requires ANY permissions:

* relate:contact:delete
* externalContacts:contact:delete

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
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

### Return type

**Object**


## deleteExternalcontactsContactNote

> **Object** deleteExternalcontactsContactNote(contactId, noteId)


DELETE /api/v2/externalcontacts/contacts/{contactId}/notes/{noteId}

Delete a note for an external contact

Requires ANY permissions:

* relate:contact:edit
* externalContacts:contact:edit

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
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

### Return type

**Object**


## deleteExternalcontactsContactsSchema

> void deleteExternalcontactsContactsSchema(schemaId)


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

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
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

### Return type

void (no response body)


## deleteExternalcontactsExternalsource

> **Object** deleteExternalcontactsExternalsource(externalSourceId)


DELETE /api/v2/externalcontacts/externalsources/{externalSourceId}

Delete an External Source. WARNING: Any records that reference this External Source will not be automatically cleaned up. Those records will still be editable, but their External IDs may not be fully viewable.

Requires ANY permissions:

* externalContacts:externalSource:delete

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.ExternalContactsApi();

let externalSourceId = "externalSourceId_example"; // String | External Source ID

apiInstance.deleteExternalcontactsExternalsource(externalSourceId)
  .then((data) => {
    console.log(`deleteExternalcontactsExternalsource success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling deleteExternalcontactsExternalsource');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **externalSourceId** | **String** | External Source ID |  |

### Return type

**Object**


## deleteExternalcontactsImportCsvSetting

> void deleteExternalcontactsImportCsvSetting(settingsId)


DELETE /api/v2/externalcontacts/import/csv/settings/{settingsId}

Delete settings for CSV import

Requires ANY permissions:

* externalContacts:importCsvSettings:delete

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.ExternalContactsApi();

let settingsId = "settingsId_example"; // String | Settings id

apiInstance.deleteExternalcontactsImportCsvSetting(settingsId)
  .then(() => {
    console.log('deleteExternalcontactsImportCsvSetting returned successfully.');
  })
  .catch((err) => {
    console.log('There was a failure calling deleteExternalcontactsImportCsvSetting');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **settingsId** | **String** | Settings id |  |

### Return type

void (no response body)


## deleteExternalcontactsImportSetting

> void deleteExternalcontactsImportSetting(settingsId)


DELETE /api/v2/externalcontacts/import/settings/{settingsId}

Delete Settings

Requires ANY permissions:

* externalContacts:importSettings:delete

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.ExternalContactsApi();

let settingsId = "settingsId_example"; // String | Settings id

apiInstance.deleteExternalcontactsImportSetting(settingsId)
  .then(() => {
    console.log('deleteExternalcontactsImportSetting returned successfully.');
  })
  .catch((err) => {
    console.log('There was a failure calling deleteExternalcontactsImportSetting');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **settingsId** | **String** | Settings id |  |

### Return type

void (no response body)


## deleteExternalcontactsOrganization

> **Object** deleteExternalcontactsOrganization(externalOrganizationId)


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

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
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

### Return type

**Object**


## deleteExternalcontactsOrganizationNote

> **Object** deleteExternalcontactsOrganizationNote(externalOrganizationId, noteId)


DELETE /api/v2/externalcontacts/organizations/{externalOrganizationId}/notes/{noteId}

Delete a note for an external organization

Requires ANY permissions:

* relate:externalOrganization:edit
* externalContacts:externalOrganization:edit

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
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

### Return type

**Object**


## deleteExternalcontactsOrganizationTrustor

> void deleteExternalcontactsOrganizationTrustor(externalOrganizationId)


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

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
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

### Return type

void (no response body)


## deleteExternalcontactsRelationship

> **Object** deleteExternalcontactsRelationship(relationshipId)


DELETE /api/v2/externalcontacts/relationships/{relationshipId}

Delete a relationship

Requires ANY permissions:

* relate:externalOrganization:edit
* externalContacts:externalOrganization:edit

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
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

### Return type

**Object**


## getExternalcontactsContact

> ExternalContact getExternalcontactsContact(contactId, opts)


GET /api/v2/externalcontacts/contacts/{contactId}

Fetch an external contact

Requires ANY permissions:

* relate:contact:view
* externalContacts:contact:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.ExternalContactsApi();

let contactId = "contactId_example"; // String | ExternalContact ID
let opts = { 
  'expand': ["expand_example"] // [String] | which fields, if any, to expand
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
 **expand** | **[String]** | which fields, if any, to expand | [optional] <br />**Values**: externalOrganization, externalDataSources, identifiers, externalSources, division |

### Return type

**ExternalContact**


## getExternalcontactsContactIdentifiers

> ContactIdentifierListing getExternalcontactsContactIdentifiers(contactId)


GET /api/v2/externalcontacts/contacts/{contactId}/identifiers

List the identifiers for a contact

Requires ANY permissions:

* externalContacts:contact:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.ExternalContactsApi();

let contactId = "contactId_example"; // String | ExternalContact ID

apiInstance.getExternalcontactsContactIdentifiers(contactId)
  .then((data) => {
    console.log(`getExternalcontactsContactIdentifiers success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getExternalcontactsContactIdentifiers');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **contactId** | **String** | ExternalContact ID |  |

### Return type

**ContactIdentifierListing**


## getExternalcontactsContactJourneySegments

> SegmentAssignmentListing getExternalcontactsContactJourneySegments(contactId, opts)


GET /api/v2/externalcontacts/contacts/{contactId}/journey/segments

Retrieve segment assignments by external contact ID.

Requires ANY permissions:

* externalContacts:segmentAssignment:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.ExternalContactsApi();

let contactId = "contactId_example"; // String | ExternalContact ID
let opts = { 
  'includeMerged': true, // Boolean | Indicates whether to return segment assignments from all external contacts in the merge-set of the given one.
  'limit': 3.4 // Number | Number of entities to return. Default of 25, maximum of 500.
};

apiInstance.getExternalcontactsContactJourneySegments(contactId, opts)
  .then((data) => {
    console.log(`getExternalcontactsContactJourneySegments success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getExternalcontactsContactJourneySegments');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **contactId** | **String** | ExternalContact ID |  |
 **includeMerged** | **Boolean** | Indicates whether to return segment assignments from all external contacts in the merge-set of the given one. | [optional]  |
 **limit** | **Number** | Number of entities to return. Default of 25, maximum of 500. | [optional]  |

### Return type

**SegmentAssignmentListing**


## getExternalcontactsContactJourneySessions

> SessionListing getExternalcontactsContactJourneySessions(contactId, opts)


GET /api/v2/externalcontacts/contacts/{contactId}/journey/sessions

Retrieve all sessions for a given external contact.

Requires ANY permissions:

* externalContacts:session:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.ExternalContactsApi();

let contactId = "contactId_example"; // String | ExternalContact ID
let opts = { 
  'pageSize': "pageSize_example", // String | Number of entities to return. Maximum of 200.
  'after': "after_example", // String | The cursor that points to the end of the set of entities that has been returned.
  'includeMerged': true // Boolean | Indicates whether to return sessions from all external contacts in the merge-set of the given one.
};

apiInstance.getExternalcontactsContactJourneySessions(contactId, opts)
  .then((data) => {
    console.log(`getExternalcontactsContactJourneySessions success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getExternalcontactsContactJourneySessions');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **contactId** | **String** | ExternalContact ID |  |
 **pageSize** | **String** | Number of entities to return. Maximum of 200. | [optional]  |
 **after** | **String** | The cursor that points to the end of the set of entities that has been returned. | [optional]  |
 **includeMerged** | **Boolean** | Indicates whether to return sessions from all external contacts in the merge-set of the given one. | [optional]  |

### Return type

**SessionListing**


## getExternalcontactsContactNote

> Note getExternalcontactsContactNote(contactId, noteId, opts)


GET /api/v2/externalcontacts/contacts/{contactId}/notes/{noteId}

Fetch a note for an external contact

Requires ANY permissions:

* relate:contact:view
* externalContacts:contact:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
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
 **expand** | **[String]** | which fields, if any, to expand | [optional] <br />**Values**: author, externalDataSources, division |

### Return type

**Note**


## getExternalcontactsContactNotes

> NoteListing getExternalcontactsContactNotes(contactId, opts)


GET /api/v2/externalcontacts/contacts/{contactId}/notes

List notes for an external contact

Requires ANY permissions:

* relate:contact:view
* externalContacts:contact:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.ExternalContactsApi();

let contactId = "contactId_example"; // String | ExternalContact Id
let opts = { 
  'pageSize': 20, // Number | Page size (limited to fetching first 1,000 records; pageNumber * pageSize must be <= 1,000)
  'pageNumber': 1, // Number | Page number (limited to fetching first 1,000 records; pageNumber * pageSize must be <= 1,000)
  'sortOrder': "sortOrder_example", // String | The Note field to sort by. Any of: [createDate]. Direction: [asc, desc].  e.g. createDate:asc, createDate:desc
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
 **pageSize** | **Number** | Page size (limited to fetching first 1,000 records; pageNumber * pageSize must be <= 1,000) | [optional] [default to 20] |
 **pageNumber** | **Number** | Page number (limited to fetching first 1,000 records; pageNumber * pageSize must be <= 1,000) | [optional] [default to 1] |
 **sortOrder** | **String** | The Note field to sort by. Any of: [createDate]. Direction: [asc, desc].  e.g. createDate:asc, createDate:desc | [optional]  |
 **expand** | **[String]** | which fields, if any, to expand | [optional] <br />**Values**: author, externalDataSources, division |

### Return type

**NoteListing**


## getExternalcontactsContactUnresolved

> ExternalContact getExternalcontactsContactUnresolved(contactId, opts)


GET /api/v2/externalcontacts/contacts/{contactId}/unresolved

Fetch an unresolved external contact

Requires ANY permissions:

* externalContacts:contact:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.ExternalContactsApi();

let contactId = "contactId_example"; // String | ExternalContact ID
let opts = { 
  'expand': ["expand_example"] // [String] | which fields, if any, to expand
};

apiInstance.getExternalcontactsContactUnresolved(contactId, opts)
  .then((data) => {
    console.log(`getExternalcontactsContactUnresolved success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getExternalcontactsContactUnresolved');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **contactId** | **String** | ExternalContact ID |  |
 **expand** | **[String]** | which fields, if any, to expand | [optional] <br />**Values**: externalOrganization, externalDataSources, identifiers, division |

### Return type

**ExternalContact**


## getExternalcontactsContacts

> ContactListing getExternalcontactsContacts(opts)


GET /api/v2/externalcontacts/contacts

Search for external contacts

Requires ANY permissions:

* relate:contact:view
* externalContacts:contact:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.ExternalContactsApi();

let opts = { 
  'pageSize': 20, // Number | Page size (limited to fetching first 1,000 records; pageNumber * pageSize must be <= 1,000)
  'pageNumber': 1, // Number | Page number (limited to fetching first 1,000 records; pageNumber * pageSize must be <= 1,000)
  'q': "q_example", // String | User supplied search keywords (no special syntax is currently supported)
  'sortOrder': "sortOrder_example", // String | The External Contact field to sort by. Any of: [firstName, lastName, middleName, title]. Direction: [asc, desc]. e.g. firstName:asc, title:desc
  'expand': ["expand_example"], // [String] | which fields, if any, to expand
  'divisionIds': ["divisionIds_example"] // [String] | which divisions to search, up to 50
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
 **pageSize** | **Number** | Page size (limited to fetching first 1,000 records; pageNumber * pageSize must be <= 1,000) | [optional] [default to 20] |
 **pageNumber** | **Number** | Page number (limited to fetching first 1,000 records; pageNumber * pageSize must be <= 1,000) | [optional] [default to 1] |
 **q** | **String** | User supplied search keywords (no special syntax is currently supported) | [optional]  |
 **sortOrder** | **String** | The External Contact field to sort by. Any of: [firstName, lastName, middleName, title]. Direction: [asc, desc]. e.g. firstName:asc, title:desc | [optional]  |
 **expand** | **[String]** | which fields, if any, to expand | [optional] <br />**Values**: externalOrganization, externalDataSources, identifiers, externalSources, division |
 **divisionIds** | **[String]** | which divisions to search, up to 50 | [optional]  |

### Return type

**ContactListing**


## getExternalcontactsContactsExport

> ContactsExport getExternalcontactsContactsExport(exportId)


GET /api/v2/externalcontacts/contacts/exports/{exportId}

Get export for exportId

Requires ALL permissions:

* externalContacts:export:view
* externalContacts:contact:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.ExternalContactsApi();

let exportId = "exportId_example"; // String | Export id

apiInstance.getExternalcontactsContactsExport(exportId)
  .then((data) => {
    console.log(`getExternalcontactsContactsExport success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getExternalcontactsContactsExport');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **exportId** | **String** | Export id |  |

### Return type

**ContactsExport**


## getExternalcontactsContactsExports

> ExportListing getExternalcontactsContactsExports(opts)


GET /api/v2/externalcontacts/contacts/exports

List exports for organization

Requires ALL permissions:

* externalContacts:export:view
* externalContacts:contact:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.ExternalContactsApi();

let opts = { 
  'divisionIds': ["divisionIds_example"], // [String] | Division IDs of entities
  'after': "after_example", // String | The cursor that points to the end of the set of entities
  'pageSize': 3.4 // Number | Number of entities to return
};

apiInstance.getExternalcontactsContactsExports(opts)
  .then((data) => {
    console.log(`getExternalcontactsContactsExports success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getExternalcontactsContactsExports');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **divisionIds** | **[String]** | Division IDs of entities | [optional]  |
 **after** | **String** | The cursor that points to the end of the set of entities | [optional]  |
 **pageSize** | **Number** | Number of entities to return | [optional]  |

### Return type

**ExportListing**


## getExternalcontactsContactsSchema

> DataSchema getExternalcontactsContactsSchema(schemaId)


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

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
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

### Return type

**DataSchema**


## getExternalcontactsContactsSchemaVersion

> DataSchema getExternalcontactsContactsSchemaVersion(schemaId, versionId)


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

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
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

### Return type

**DataSchema**


## getExternalcontactsContactsSchemaVersions

> DataSchemaListing getExternalcontactsContactsSchemaVersions(schemaId)


GET /api/v2/externalcontacts/contacts/schemas/{schemaId}/versions

Get all versions of an external contact's schema

Requires ANY permissions:

* externalContacts:customFields:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
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

### Return type

**DataSchemaListing**


## getExternalcontactsContactsSchemas

> DataSchemaListing getExternalcontactsContactsSchemas()


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

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
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

### Return type

**DataSchemaListing**


## getExternalcontactsContactsSchemasCoretype

> Coretype getExternalcontactsContactsSchemasCoretype(coreTypeName)


GET /api/v2/externalcontacts/contacts/schemas/coretypes/{coreTypeName}

Get a specific named core type.

Requires ANY permissions:

* externalContacts:customFields:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.ExternalContactsApi();

let coreTypeName = "coreTypeName_example"; // String | Name of the core type

apiInstance.getExternalcontactsContactsSchemasCoretype(coreTypeName)
  .then((data) => {
    console.log(`getExternalcontactsContactsSchemasCoretype success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getExternalcontactsContactsSchemasCoretype');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **coreTypeName** | **String** | Name of the core type |  |

### Return type

**Coretype**


## getExternalcontactsContactsSchemasCoretypes

> CoretypeListing getExternalcontactsContactsSchemasCoretypes()


GET /api/v2/externalcontacts/contacts/schemas/coretypes

Get the core types from which all schemas are built.

Requires ANY permissions:

* externalContacts:customFields:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.ExternalContactsApi();

apiInstance.getExternalcontactsContactsSchemasCoretypes()
  .then((data) => {
    console.log(`getExternalcontactsContactsSchemasCoretypes success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getExternalcontactsContactsSchemasCoretypes');
    console.error(err);
  });
```

### Parameters

This endpoint does not need any parameter.

### Return type

**CoretypeListing**


## getExternalcontactsContactsSchemasLimits

> SchemaQuantityLimits getExternalcontactsContactsSchemasLimits()


GET /api/v2/externalcontacts/contacts/schemas/limits

Get quantitative limits on schemas

Requires ANY permissions:

* externalContacts:customFields:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.ExternalContactsApi();

apiInstance.getExternalcontactsContactsSchemasLimits()
  .then((data) => {
    console.log(`getExternalcontactsContactsSchemasLimits success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getExternalcontactsContactsSchemasLimits');
    console.error(err);
  });
```

### Parameters

This endpoint does not need any parameter.

### Return type

**SchemaQuantityLimits**


## getExternalcontactsExternalsource

> ExternalSource getExternalcontactsExternalsource(externalSourceId)


GET /api/v2/externalcontacts/externalsources/{externalSourceId}

Fetch an External Source

Requires ANY permissions:

* externalContacts:externalSource:view
* externalContacts:contact:view
* externalContacts:externalOrganization:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.ExternalContactsApi();

let externalSourceId = "externalSourceId_example"; // String | External Source ID

apiInstance.getExternalcontactsExternalsource(externalSourceId)
  .then((data) => {
    console.log(`getExternalcontactsExternalsource success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getExternalcontactsExternalsource');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **externalSourceId** | **String** | External Source ID |  |

### Return type

**ExternalSource**


## getExternalcontactsExternalsources

> CursorExternalSourceListing getExternalcontactsExternalsources(opts)


GET /api/v2/externalcontacts/externalsources

Fetch a list of External Sources

Requires ANY permissions:

* externalContacts:externalSource:view
* externalContacts:contact:view
* externalContacts:externalOrganization:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.ExternalContactsApi();

let opts = { 
  'cursor': "cursor_example", // String | Indicates where to resume query results (not required for first page), each page returns a new cursor with a 24h TTL
  'limit': 3.4, // Number | The number of ExternalSources per page; must be between 10 and 200, default is 100
  'name': "name_example", // String | Filter by external source name. Filtering is prefix filtering and not an exact match
  'active': true // Boolean | Filter by active status of external source
};

apiInstance.getExternalcontactsExternalsources(opts)
  .then((data) => {
    console.log(`getExternalcontactsExternalsources success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getExternalcontactsExternalsources');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **cursor** | **String** | Indicates where to resume query results (not required for first page), each page returns a new cursor with a 24h TTL | [optional]  |
 **limit** | **Number** | The number of ExternalSources per page; must be between 10 and 200, default is 100 | [optional]  |
 **name** | **String** | Filter by external source name. Filtering is prefix filtering and not an exact match | [optional]  |
 **active** | **Boolean** | Filter by active status of external source | [optional]  |

### Return type

**CursorExternalSourceListing**


## getExternalcontactsImportCsvSetting

> CsvSettings getExternalcontactsImportCsvSetting(settingsId)


GET /api/v2/externalcontacts/import/csv/settings/{settingsId}

Get settings for CSV import

Requires ANY permissions:

* externalContacts:importCsvSettings:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.ExternalContactsApi();

let settingsId = "settingsId_example"; // String | Settings id

apiInstance.getExternalcontactsImportCsvSetting(settingsId)
  .then((data) => {
    console.log(`getExternalcontactsImportCsvSetting success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getExternalcontactsImportCsvSetting');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **settingsId** | **String** | Settings id |  |

### Return type

**CsvSettings**


## getExternalcontactsImportCsvSettings

> Listing getExternalcontactsImportCsvSettings(opts)


GET /api/v2/externalcontacts/import/csv/settings

Retrieve all settings for organization filtered by externalSettingsId if provided

Requires ANY permissions:

* externalContacts:importCsvSettings:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.ExternalContactsApi();

let opts = { 
  'after': "after_example", // String | The cursor that points to the end of the set of entities that has been returned.
  'pageSize': "pageSize_example", // String | Number of entities to return. Maximum of 200.
  'externalSettingsId': "externalSettingsId_example" // String | External Settings Id to filter the list.
};

apiInstance.getExternalcontactsImportCsvSettings(opts)
  .then((data) => {
    console.log(`getExternalcontactsImportCsvSettings success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getExternalcontactsImportCsvSettings');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **after** | **String** | The cursor that points to the end of the set of entities that has been returned. | [optional]  |
 **pageSize** | **String** | Number of entities to return. Maximum of 200. | [optional]  |
 **externalSettingsId** | **String** | External Settings Id to filter the list. | [optional]  |

### Return type

**Listing**


## getExternalcontactsImportCsvUploadDetails

> CsvUploadDetailsResponse getExternalcontactsImportCsvUploadDetails(uploadId)


GET /api/v2/externalcontacts/import/csv/uploads/{uploadId}/details

Get details for CSV upload

Requires ANY permissions:

* externalContacts:importCsvUpload:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.ExternalContactsApi();

let uploadId = "uploadId_example"; // String | Upload id

apiInstance.getExternalcontactsImportCsvUploadDetails(uploadId)
  .then((data) => {
    console.log(`getExternalcontactsImportCsvUploadDetails success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getExternalcontactsImportCsvUploadDetails');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **uploadId** | **String** | Upload id |  |

### Return type

**CsvUploadDetailsResponse**


## getExternalcontactsImportCsvUploadPreview

> CsvUploadPreviewResponse getExternalcontactsImportCsvUploadPreview(uploadId)


GET /api/v2/externalcontacts/import/csv/uploads/{uploadId}/preview

Get preview for CSV upload

Requires ANY permissions:

* externalContacts:importCsvUpload:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.ExternalContactsApi();

let uploadId = "uploadId_example"; // String | Upload id

apiInstance.getExternalcontactsImportCsvUploadPreview(uploadId)
  .then((data) => {
    console.log(`getExternalcontactsImportCsvUploadPreview success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getExternalcontactsImportCsvUploadPreview');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **uploadId** | **String** | Upload id |  |

### Return type

**CsvUploadPreviewResponse**


## getExternalcontactsImportJob

> ContactImportJobResponse getExternalcontactsImportJob(jobId, opts)


GET /api/v2/externalcontacts/import/jobs/{jobId}

Get job based on id

Requires ANY permissions:

* externalContacts:importJob:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.ExternalContactsApi();

let jobId = "jobId_example"; // String | Job id
let opts = { 
  'expand': ["expand_example"] // [String] | which fields, if any, to expand
};

apiInstance.getExternalcontactsImportJob(jobId, opts)
  .then((data) => {
    console.log(`getExternalcontactsImportJob success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getExternalcontactsImportJob');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **jobId** | **String** | Job id |  |
 **expand** | **[String]** | which fields, if any, to expand | [optional] <br />**Values**: division |

### Return type

**ContactImportJobResponse**


## getExternalcontactsImportJobs

> ContactImportJobEntityListing getExternalcontactsImportJobs(opts)


GET /api/v2/externalcontacts/import/jobs

List jobs for organization

Requires ANY permissions:

* externalContacts:importJob:viewAll

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.ExternalContactsApi();

let opts = { 
  'expand': ["expand_example"], // [String] | which fields, if any, to expand
  'after': "after_example", // String | The cursor that points to the end of the set of entities that has been returned.
  'pageSize': "25", // String | Number of entities to return. Maximum of 100.
  'sortOrder': "Ascending", // String | Direction of sorting.
  'jobStatus': "jobStatus_example" // String | Search term to filter by jobStatus
};

apiInstance.getExternalcontactsImportJobs(opts)
  .then((data) => {
    console.log(`getExternalcontactsImportJobs success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getExternalcontactsImportJobs');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **expand** | **[String]** | which fields, if any, to expand | [optional] <br />**Values**: division |
 **after** | **String** | The cursor that points to the end of the set of entities that has been returned. | [optional]  |
 **pageSize** | **String** | Number of entities to return. Maximum of 100. | [optional] [default to 25] |
 **sortOrder** | **String** | Direction of sorting. | [optional] [default to Ascending]<br />**Values**: Ascending, Descending |
 **jobStatus** | **String** | Search term to filter by jobStatus | [optional] <br />**Values**: Created, Running, Completed, Failed, Cancelled |

### Return type

**ContactImportJobEntityListing**


## getExternalcontactsImportSetting

> ContactImportSettings getExternalcontactsImportSetting(settingsId)


GET /api/v2/externalcontacts/import/settings/{settingsId}

Get setting based on id

Requires ANY permissions:

* externalContacts:importSettings:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.ExternalContactsApi();

let settingsId = "settingsId_example"; // String | Settings id

apiInstance.getExternalcontactsImportSetting(settingsId)
  .then((data) => {
    console.log(`getExternalcontactsImportSetting success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getExternalcontactsImportSetting');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **settingsId** | **String** | Settings id |  |

### Return type

**ContactImportSettings**


## getExternalcontactsImportSettings

> ContactImportSettingsEntityListing getExternalcontactsImportSettings(opts)


GET /api/v2/externalcontacts/import/settings

List settings for organization

Requires ANY permissions:

* externalContacts:importSettings:viewAll

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.ExternalContactsApi();

let opts = { 
  'after': "after_example", // String | The cursor that points to the end of the set of entities that has been returned.
  'pageSize': "25", // String | Number of entities to return. Maximum of 100.
  'sortOrder': "Ascending", // String | Direction of sorting.
  'name': "name_example" // String | Search term to filter by settings name
};

apiInstance.getExternalcontactsImportSettings(opts)
  .then((data) => {
    console.log(`getExternalcontactsImportSettings success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getExternalcontactsImportSettings');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **after** | **String** | The cursor that points to the end of the set of entities that has been returned. | [optional]  |
 **pageSize** | **String** | Number of entities to return. Maximum of 100. | [optional] [default to 25] |
 **sortOrder** | **String** | Direction of sorting. | [optional] [default to Ascending]<br />**Values**: Ascending, Descending |
 **name** | **String** | Search term to filter by settings name | [optional]  |

### Return type

**ContactImportSettingsEntityListing**


## getExternalcontactsOrganization

> ExternalOrganization getExternalcontactsOrganization(externalOrganizationId, opts)


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

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.ExternalContactsApi();

let externalOrganizationId = "externalOrganizationId_example"; // String | External Organization ID
let opts = { 
  'expand': ["expand_example"], // [String] | which fields, if any, to expand
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
 **expand** | **[String]** | which fields, if any, to expand | [optional] <br />**Values**: externalDataSources, division, identifiers, externalSources |
 **includeTrustors** | **Boolean** | (true or false) whether or not to include trustor information embedded in the externalOrganization | [optional]  |

### Return type

**ExternalOrganization**


## getExternalcontactsOrganizationContacts

> ContactListing getExternalcontactsOrganizationContacts(externalOrganizationId, opts)


GET /api/v2/externalcontacts/organizations/{externalOrganizationId}/contacts

Search for external contacts in an external organization

Requires ANY permissions:

* relate:contact:view
* externalContacts:contact:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.ExternalContactsApi();

let externalOrganizationId = "externalOrganizationId_example"; // String | External Organization ID
let opts = { 
  'pageSize': 20, // Number | Page size (limited to fetching first 1,000 records; pageNumber * pageSize must be <= 1,000)
  'pageNumber': 1, // Number | Page number (limited to fetching first 1,000 records; pageNumber * pageSize must be <= 1,000)
  'q': "q_example", // String | User supplied search keywords (no special syntax is currently supported)
  'sortOrder': "sortOrder_example", // String | The External Contact field to sort by. Any of: [firstName, lastName, middleName, title]. Direction: [asc, desc]. e.g. firstName:asc, title:desc
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
 **pageSize** | **Number** | Page size (limited to fetching first 1,000 records; pageNumber * pageSize must be <= 1,000) | [optional] [default to 20] |
 **pageNumber** | **Number** | Page number (limited to fetching first 1,000 records; pageNumber * pageSize must be <= 1,000) | [optional] [default to 1] |
 **q** | **String** | User supplied search keywords (no special syntax is currently supported) | [optional]  |
 **sortOrder** | **String** | The External Contact field to sort by. Any of: [firstName, lastName, middleName, title]. Direction: [asc, desc]. e.g. firstName:asc, title:desc | [optional]  |
 **expand** | **[String]** | which fields, if any, to expand | [optional] <br />**Values**: externalOrganization, externalDataSources, identifiers, externalSources, division |

### Return type

**ContactListing**


## getExternalcontactsOrganizationIdentifiers

> ExternalOrganizationIdentifierListing getExternalcontactsOrganizationIdentifiers(externalOrganizationId)


GET /api/v2/externalcontacts/organizations/{externalOrganizationId}/identifiers

List the identifiers for an external organization

Requires ANY permissions:

* externalContacts:externalOrganization:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.ExternalContactsApi();

let externalOrganizationId = "externalOrganizationId_example"; // String | External Organization ID

apiInstance.getExternalcontactsOrganizationIdentifiers(externalOrganizationId)
  .then((data) => {
    console.log(`getExternalcontactsOrganizationIdentifiers success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getExternalcontactsOrganizationIdentifiers');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **externalOrganizationId** | **String** | External Organization ID |  |

### Return type

**ExternalOrganizationIdentifierListing**


## getExternalcontactsOrganizationNote

> Note getExternalcontactsOrganizationNote(externalOrganizationId, noteId, opts)


GET /api/v2/externalcontacts/organizations/{externalOrganizationId}/notes/{noteId}

Fetch a note for an external organization

Requires ANY permissions:

* relate:externalOrganization:view
* externalContacts:externalOrganization:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
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
 **expand** | **[String]** | which fields, if any, to expand | [optional] <br />**Values**: author, externalDataSources, division |

### Return type

**Note**


## getExternalcontactsOrganizationNotes

> NoteListing getExternalcontactsOrganizationNotes(externalOrganizationId, opts)


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

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.ExternalContactsApi();

let externalOrganizationId = "externalOrganizationId_example"; // String | External Organization Id
let opts = { 
  'pageSize': 20, // Number | Page size (limited to fetching first 1,000 records; pageNumber * pageSize must be <= 1,000)
  'pageNumber': 1, // Number | Page number (limited to fetching first 1,000 records; pageNumber * pageSize must be <= 1,000)
  'sortOrder': "sortOrder_example", // String | The Note field to sort by. Any of: [createDate]. Direction: [asc, desc]. e.g. createDate:asc, createDate:desc
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
 **pageSize** | **Number** | Page size (limited to fetching first 1,000 records; pageNumber * pageSize must be <= 1,000) | [optional] [default to 20] |
 **pageNumber** | **Number** | Page number (limited to fetching first 1,000 records; pageNumber * pageSize must be <= 1,000) | [optional] [default to 1] |
 **sortOrder** | **String** | The Note field to sort by. Any of: [createDate]. Direction: [asc, desc]. e.g. createDate:asc, createDate:desc | [optional]  |
 **expand** | **[String]** | which fields, if any, to expand | [optional] <br />**Values**: author, externalDataSources, division |

### Return type

**NoteListing**


## getExternalcontactsOrganizationRelationships

> RelationshipListing getExternalcontactsOrganizationRelationships(externalOrganizationId, opts)


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

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.ExternalContactsApi();

let externalOrganizationId = "externalOrganizationId_example"; // String | External Organization ID
let opts = { 
  'pageSize': 20, // Number | Page size (limited to fetching first 1,000 records; pageNumber * pageSize must be <= 1,000)
  'pageNumber': 1, // Number | Page number (limited to fetching first 1,000 records; pageNumber * pageSize must be <= 1,000)
  'expand': ["expand_example"], // [String] | which fields, if any, to expand
  'sortOrder': "sortOrder_example" // String | The Relationship field to sort by. Any of: [createDate, relationship]. Direction: [asc, desc]. e.g. createDate:asc, relationship:desc
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
 **pageSize** | **Number** | Page size (limited to fetching first 1,000 records; pageNumber * pageSize must be <= 1,000) | [optional] [default to 20] |
 **pageNumber** | **Number** | Page number (limited to fetching first 1,000 records; pageNumber * pageSize must be <= 1,000) | [optional] [default to 1] |
 **expand** | **[String]** | which fields, if any, to expand | [optional] <br />**Values**: externalDataSources, division |
 **sortOrder** | **String** | The Relationship field to sort by. Any of: [createDate, relationship]. Direction: [asc, desc]. e.g. createDate:asc, relationship:desc | [optional]  |

### Return type

**RelationshipListing**


## getExternalcontactsOrganizations

> ExternalOrganizationListing getExternalcontactsOrganizations(opts)


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

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.ExternalContactsApi();

let opts = { 
  'pageSize': 20, // Number | Page size (limited to fetching first 1,000 records; pageNumber * pageSize must be <= 1,000)
  'pageNumber': 1, // Number | Page number (limited to fetching first 1,000 records; pageNumber * pageSize must be <= 1,000)
  'q': "q_example", // String | Search query
  'trustorId': ["trustorId_example"], // [String] | Search for external organizations by trustorIds (limit 25). If supplied, the 'q' parameters is ignored. Items are returned in the order requested
  'sortOrder': "sortOrder_example", // String | The Organization field to sort by. Any of: [companyType, industry, name]. Direction: [asc, desc]. e.g. companyType:asc, industry:desc
  'expand': ["expand_example"], // [String] | which fields, if any, to expand
  'includeTrustors': true, // Boolean | (true or false) whether or not to include trustor information embedded in the externalOrganization
  'divisionIds': ["divisionIds_example"] // [String] | which divisions to search, up to 50
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
 **pageSize** | **Number** | Page size (limited to fetching first 1,000 records; pageNumber * pageSize must be <= 1,000) | [optional] [default to 20] |
 **pageNumber** | **Number** | Page number (limited to fetching first 1,000 records; pageNumber * pageSize must be <= 1,000) | [optional] [default to 1] |
 **q** | **String** | Search query | [optional]  |
 **trustorId** | **[String]** | Search for external organizations by trustorIds (limit 25). If supplied, the 'q' parameters is ignored. Items are returned in the order requested | [optional]  |
 **sortOrder** | **String** | The Organization field to sort by. Any of: [companyType, industry, name]. Direction: [asc, desc]. e.g. companyType:asc, industry:desc | [optional]  |
 **expand** | **[String]** | which fields, if any, to expand | [optional] <br />**Values**: externalDataSources, division, identifiers, externalSources |
 **includeTrustors** | **Boolean** | (true or false) whether or not to include trustor information embedded in the externalOrganization | [optional]  |
 **divisionIds** | **[String]** | which divisions to search, up to 50 | [optional]  |

### Return type

**ExternalOrganizationListing**


## getExternalcontactsOrganizationsSchema

> DataSchema getExternalcontactsOrganizationsSchema(schemaId)


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

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
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

### Return type

**DataSchema**


## getExternalcontactsOrganizationsSchemaVersion

> DataSchema getExternalcontactsOrganizationsSchemaVersion(schemaId, versionId)


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

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
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

### Return type

**DataSchema**


## getExternalcontactsOrganizationsSchemaVersions

> DataSchemaListing getExternalcontactsOrganizationsSchemaVersions(schemaId)


GET /api/v2/externalcontacts/organizations/schemas/{schemaId}/versions

Get all versions of an external organization's schema

Requires ANY permissions:

* externalContacts:customFields:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
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

### Return type

**DataSchemaListing**


## getExternalcontactsOrganizationsSchemas

> DataSchemaListing getExternalcontactsOrganizationsSchemas()


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

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
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

### Return type

**DataSchemaListing**


## getExternalcontactsOrganizationsSchemasCoretype

> Coretype getExternalcontactsOrganizationsSchemasCoretype(coreTypeName)


GET /api/v2/externalcontacts/organizations/schemas/coretypes/{coreTypeName}

Get a specific named core type.

Requires ANY permissions:

* externalContacts:customFields:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.ExternalContactsApi();

let coreTypeName = "coreTypeName_example"; // String | Name of the core type

apiInstance.getExternalcontactsOrganizationsSchemasCoretype(coreTypeName)
  .then((data) => {
    console.log(`getExternalcontactsOrganizationsSchemasCoretype success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getExternalcontactsOrganizationsSchemasCoretype');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **coreTypeName** | **String** | Name of the core type |  |

### Return type

**Coretype**


## getExternalcontactsOrganizationsSchemasCoretypes

> CoretypeListing getExternalcontactsOrganizationsSchemasCoretypes()


GET /api/v2/externalcontacts/organizations/schemas/coretypes

Get the core types from which all schemas are built.

Requires ANY permissions:

* externalContacts:customFields:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.ExternalContactsApi();

apiInstance.getExternalcontactsOrganizationsSchemasCoretypes()
  .then((data) => {
    console.log(`getExternalcontactsOrganizationsSchemasCoretypes success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getExternalcontactsOrganizationsSchemasCoretypes');
    console.error(err);
  });
```

### Parameters

This endpoint does not need any parameter.

### Return type

**CoretypeListing**


## getExternalcontactsOrganizationsSchemasLimits

> SchemaQuantityLimits getExternalcontactsOrganizationsSchemasLimits()


GET /api/v2/externalcontacts/organizations/schemas/limits

Get quantitative limits on schemas

Requires ANY permissions:

* externalContacts:customFields:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.ExternalContactsApi();

apiInstance.getExternalcontactsOrganizationsSchemasLimits()
  .then((data) => {
    console.log(`getExternalcontactsOrganizationsSchemasLimits success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getExternalcontactsOrganizationsSchemasLimits');
    console.error(err);
  });
```

### Parameters

This endpoint does not need any parameter.

### Return type

**SchemaQuantityLimits**


## getExternalcontactsRelationship

> Relationship getExternalcontactsRelationship(relationshipId, opts)


GET /api/v2/externalcontacts/relationships/{relationshipId}

Fetch a relationship

Requires ANY permissions:

* relate:externalOrganization:view
* externalContacts:externalOrganization:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.ExternalContactsApi();

let relationshipId = "relationshipId_example"; // String | Relationship Id
let opts = { 
  'expand': ["expand_example"] // [String] | which fields, if any, to expand
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
 **expand** | **[String]** | which fields, if any, to expand | [optional] <br />**Values**: externalDataSources, division |

### Return type

**Relationship**


## getExternalcontactsReversewhitepageslookup

> ReverseWhitepagesLookupResult getExternalcontactsReversewhitepageslookup(lookupVal, opts)


GET /api/v2/externalcontacts/reversewhitepageslookup

Look up contacts based on an attribute. Maximum of 25 values returned.

Requires ANY permissions:

* externalContacts:contact:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.ExternalContactsApi();

let lookupVal = "lookupVal_example"; // String | User supplied value to lookup contacts (supports email addresses, e164 phone numbers, Twitter screen names)
let opts = { 
  'expand': ["expand_example"], // [String] | which field, if any, to expand
  'divisionId': "*" // String | Specifies which division to lookup contacts in, for the given lookup value
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
 **lookupVal** | **String** | User supplied value to lookup contacts (supports email addresses, e164 phone numbers, Twitter screen names) |  |
 **expand** | **[String]** | which field, if any, to expand | [optional] <br />**Values**: contacts.externalOrganization, externalDataSources, division |
 **divisionId** | **String** | Specifies which division to lookup contacts in, for the given lookup value | [optional] [default to *] |

### Return type

**ReverseWhitepagesLookupResult**


## getExternalcontactsScanContacts

> CursorContactListing getExternalcontactsScanContacts(opts)


GET /api/v2/externalcontacts/scan/contacts

Scan for external contacts using paging

Requires ANY permissions:

* relate:contact:view
* externalContacts:contact:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.ExternalContactsApi();

let opts = { 
  'limit': 3.4, // Number | The number of contacts per page; must be between 10 and 200, default is 100
  'cursor': "cursor_example", // String | Indicates where to resume query results (not required for first page), each page returns a new cursor with a 24h TTL
  'divisionId': "*" // String | The division to scan over
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
 **limit** | **Number** | The number of contacts per page; must be between 10 and 200, default is 100 | [optional]  |
 **cursor** | **String** | Indicates where to resume query results (not required for first page), each page returns a new cursor with a 24h TTL | [optional]  |
 **divisionId** | **String** | The division to scan over | [optional] [default to *] |

### Return type

**CursorContactListing**


## getExternalcontactsScanContactsDivisionviewsAll

> CursorContactListing getExternalcontactsScanContactsDivisionviewsAll(opts)


GET /api/v2/externalcontacts/scan/contacts/divisionviews/all

Scan for external contacts using paging

Requires ALL permissions:

* externalContacts:contact:viewAll

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.ExternalContactsApi();

let opts = { 
  'limit': 3.4, // Number | The number of contacts per page; must be between 10 and 200, default is 100
  'cursor': "cursor_example" // String | Indicates where to resume query results (not required for first page), each page returns a new cursor with a 24h TTL
};

apiInstance.getExternalcontactsScanContactsDivisionviewsAll(opts)
  .then((data) => {
    console.log(`getExternalcontactsScanContactsDivisionviewsAll success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getExternalcontactsScanContactsDivisionviewsAll');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **limit** | **Number** | The number of contacts per page; must be between 10 and 200, default is 100 | [optional]  |
 **cursor** | **String** | Indicates where to resume query results (not required for first page), each page returns a new cursor with a 24h TTL | [optional]  |

### Return type

**CursorContactListing**


## getExternalcontactsScanNotes

> CursorNoteListing getExternalcontactsScanNotes(opts)


GET /api/v2/externalcontacts/scan/notes

Scan for notes using paging

Requires ANY permissions:

* relate:contact:view
* externalContacts:contact:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.ExternalContactsApi();

let opts = { 
  'limit': 3.4, // Number | The number of notes per page; must be between 10 and 200, default is 100
  'cursor': "cursor_example", // String | Indicates where to resume query results (not required for first page), each page returns a new cursor with a 24h TTL
  'divisionId': "*" // String | The division to scan over
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
 **limit** | **Number** | The number of notes per page; must be between 10 and 200, default is 100 | [optional]  |
 **cursor** | **String** | Indicates where to resume query results (not required for first page), each page returns a new cursor with a 24h TTL | [optional]  |
 **divisionId** | **String** | The division to scan over | [optional] [default to *] |

### Return type

**CursorNoteListing**


## getExternalcontactsScanNotesDivisionviewsAll

> CursorNoteListing getExternalcontactsScanNotesDivisionviewsAll(opts)


GET /api/v2/externalcontacts/scan/notes/divisionviews/all

Scan for notes using paging

Requires ALL permissions:

* externalContacts:contact:viewAll

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.ExternalContactsApi();

let opts = { 
  'limit': 3.4, // Number | The number of notes per page; must be between 10 and 200, default is 100
  'cursor': "cursor_example" // String | Indicates where to resume query results (not required for first page), each page returns a new cursor with a 24h TTL
};

apiInstance.getExternalcontactsScanNotesDivisionviewsAll(opts)
  .then((data) => {
    console.log(`getExternalcontactsScanNotesDivisionviewsAll success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getExternalcontactsScanNotesDivisionviewsAll');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **limit** | **Number** | The number of notes per page; must be between 10 and 200, default is 100 | [optional]  |
 **cursor** | **String** | Indicates where to resume query results (not required for first page), each page returns a new cursor with a 24h TTL | [optional]  |

### Return type

**CursorNoteListing**


## getExternalcontactsScanOrganizations

> CursorOrganizationListing getExternalcontactsScanOrganizations(opts)


GET /api/v2/externalcontacts/scan/organizations

Scan for external organizations using paging

Requires ANY permissions:

* relate:externalOrganization:view
* externalContacts:externalOrganization:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.ExternalContactsApi();

let opts = { 
  'limit': 3.4, // Number | The number of organizations per page; must be between 10 and 200, default is 100
  'cursor': "cursor_example", // String | Indicates where to resume query results (not required for first page), each page returns a new cursor with a 24h TTL
  'divisionId': "*" // String | The division to scan over
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
 **limit** | **Number** | The number of organizations per page; must be between 10 and 200, default is 100 | [optional]  |
 **cursor** | **String** | Indicates where to resume query results (not required for first page), each page returns a new cursor with a 24h TTL | [optional]  |
 **divisionId** | **String** | The division to scan over | [optional] [default to *] |

### Return type

**CursorOrganizationListing**


## getExternalcontactsScanOrganizationsDivisionviewsAll

> CursorOrganizationListing getExternalcontactsScanOrganizationsDivisionviewsAll(opts)


GET /api/v2/externalcontacts/scan/organizations/divisionviews/all

Scan for external organizations using paging

Requires ALL permissions:

* externalContacts:externalOrganization:viewAll

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.ExternalContactsApi();

let opts = { 
  'limit': 3.4, // Number | The number of organizations per page; must be between 10 and 200, default is 100
  'cursor': "cursor_example" // String | Indicates where to resume query results (not required for first page), each page returns a new cursor with a 24h TTL
};

apiInstance.getExternalcontactsScanOrganizationsDivisionviewsAll(opts)
  .then((data) => {
    console.log(`getExternalcontactsScanOrganizationsDivisionviewsAll success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getExternalcontactsScanOrganizationsDivisionviewsAll');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **limit** | **Number** | The number of organizations per page; must be between 10 and 200, default is 100 | [optional]  |
 **cursor** | **String** | Indicates where to resume query results (not required for first page), each page returns a new cursor with a 24h TTL | [optional]  |

### Return type

**CursorOrganizationListing**


## getExternalcontactsScanRelationships

> CursorRelationshipListing getExternalcontactsScanRelationships(opts)


GET /api/v2/externalcontacts/scan/relationships

Scan for relationships

Requires ANY permissions:

* relate:contact:view
* externalContacts:contact:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.ExternalContactsApi();

let opts = { 
  'limit': 3.4, // Number | The number of relationships per page; must be between 10 and 200, default is 100
  'cursor': "cursor_example", // String | Indicates where to resume query results (not required for first page), each page returns a new cursor with a 24h TTL
  'divisionId': "*" // String | The division to scan over
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
 **limit** | **Number** | The number of relationships per page; must be between 10 and 200, default is 100 | [optional]  |
 **cursor** | **String** | Indicates where to resume query results (not required for first page), each page returns a new cursor with a 24h TTL | [optional]  |
 **divisionId** | **String** | The division to scan over | [optional] [default to *] |

### Return type

**CursorRelationshipListing**


## getExternalcontactsScanRelationshipsDivisionviewsAll

> CursorRelationshipListing getExternalcontactsScanRelationshipsDivisionviewsAll(opts)


GET /api/v2/externalcontacts/scan/relationships/divisionviews/all

Scan for relationships

Requires ALL permissions:

* externalContacts:contact:viewAll

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.ExternalContactsApi();

let opts = { 
  'limit': 3.4, // Number | The number of relationships per page; must be between 10 and 200, default is 100
  'cursor': "cursor_example" // String | Indicates where to resume query results (not required for first page), each page returns a new cursor with a 24h TTL
};

apiInstance.getExternalcontactsScanRelationshipsDivisionviewsAll(opts)
  .then((data) => {
    console.log(`getExternalcontactsScanRelationshipsDivisionviewsAll success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getExternalcontactsScanRelationshipsDivisionviewsAll');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **limit** | **Number** | The number of relationships per page; must be between 10 and 200, default is 100 | [optional]  |
 **cursor** | **String** | Indicates where to resume query results (not required for first page), each page returns a new cursor with a 24h TTL | [optional]  |

### Return type

**CursorRelationshipListing**


## patchExternalcontactsContactIdentifiers

> ContactIdentifier patchExternalcontactsContactIdentifiers(contactId, body)


PATCH /api/v2/externalcontacts/contacts/{contactId}/identifiers

Claim or release identifiers for a contact

Requires ANY permissions:

* externalContacts:contact:edit

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.ExternalContactsApi();

let contactId = "contactId_example"; // String | ExternalContact ID
let body = {}; // Object | ClaimRequest

apiInstance.patchExternalcontactsContactIdentifiers(contactId, body)
  .then((data) => {
    console.log(`patchExternalcontactsContactIdentifiers success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling patchExternalcontactsContactIdentifiers');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **contactId** | **String** | ExternalContact ID |  |
 **body** | **Object** | ClaimRequest |  |

### Return type

**ContactIdentifier**


## patchExternalcontactsOrganizationIdentifiers

> ExternalOrganizationIdentifier patchExternalcontactsOrganizationIdentifiers(externalOrganizationId, body)


PATCH /api/v2/externalcontacts/organizations/{externalOrganizationId}/identifiers

Claim or release identifiers for an external organization

Requires ANY permissions:

* externalContacts:externalOrganization:edit

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.ExternalContactsApi();

let externalOrganizationId = "externalOrganizationId_example"; // String | External Organization ID
let body = {}; // Object | ClaimRequest

apiInstance.patchExternalcontactsOrganizationIdentifiers(externalOrganizationId, body)
  .then((data) => {
    console.log(`patchExternalcontactsOrganizationIdentifiers success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling patchExternalcontactsOrganizationIdentifiers');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **externalOrganizationId** | **String** | External Organization ID |  |
 **body** | **Object** | ClaimRequest |  |

### Return type

**ExternalOrganizationIdentifier**


## postExternalcontactsBulkContacts

> BulkFetchContactsResponse postExternalcontactsBulkContacts(body)


POST /api/v2/externalcontacts/bulk/contacts

Bulk fetch contacts

Requires ANY permissions:

* externalContacts:contact:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.ExternalContactsApi();

let body = {}; // Object | Contact ids

apiInstance.postExternalcontactsBulkContacts(body)
  .then((data) => {
    console.log(`postExternalcontactsBulkContacts success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling postExternalcontactsBulkContacts');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **body** | **Object** | Contact ids |  |

### Return type

**BulkFetchContactsResponse**


## postExternalcontactsBulkContactsAdd

> BulkContactsResponse postExternalcontactsBulkContactsAdd(body)


POST /api/v2/externalcontacts/bulk/contacts/add

Bulk add contacts

Requires ANY permissions:

* externalContacts:contact:add

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.ExternalContactsApi();

let body = {}; // Object | Contacts

apiInstance.postExternalcontactsBulkContactsAdd(body)
  .then((data) => {
    console.log(`postExternalcontactsBulkContactsAdd success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling postExternalcontactsBulkContactsAdd');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **body** | **Object** | Contacts |  |

### Return type

**BulkContactsResponse**


## postExternalcontactsBulkContactsDivisionviews

> BulkFetchContactsResponse postExternalcontactsBulkContactsDivisionviews(body)


POST /api/v2/externalcontacts/bulk/contacts/divisionviews

Bulk fetch contacts across divisions

Requires ANY permissions:

* externalContacts:contact:search

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.ExternalContactsApi();

let body = {}; // Object | Contact ids

apiInstance.postExternalcontactsBulkContactsDivisionviews(body)
  .then((data) => {
    console.log(`postExternalcontactsBulkContactsDivisionviews success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling postExternalcontactsBulkContactsDivisionviews');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **body** | **Object** | Contact ids |  |

### Return type

**BulkFetchContactsResponse**


## postExternalcontactsBulkContactsEnrich

> BulkContactsEnrichResponse postExternalcontactsBulkContactsEnrich(body, opts)


POST /api/v2/externalcontacts/bulk/contacts/enrich

Bulk Enrich Contacts - Run up to 10 Enrich operations per request

See the API endpoint /externalcontacts/contacts/enrich for docs on individual Enrich operations.

Requires ANY permissions:

* externalContacts:contact:enrich

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.ExternalContactsApi();

let body = {}; // Object | Contact Enrich Requests
let opts = { 
  'dryRun': true // Boolean | If true, the request will not make any modifications, but will show you what the end result *would* be.
};

apiInstance.postExternalcontactsBulkContactsEnrich(body, opts)
  .then((data) => {
    console.log(`postExternalcontactsBulkContactsEnrich success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling postExternalcontactsBulkContactsEnrich');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **body** | **Object** | Contact Enrich Requests |  |
 **dryRun** | **Boolean** | If true, the request will not make any modifications, but will show you what the end result *would* be. | [optional]  |

### Return type

**BulkContactsEnrichResponse**


## postExternalcontactsBulkContactsRemove

> BulkDeleteResponse postExternalcontactsBulkContactsRemove(body)


POST /api/v2/externalcontacts/bulk/contacts/remove

Bulk remove contacts

Requires ANY permissions:

* externalContacts:contact:delete

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.ExternalContactsApi();

let body = {}; // Object | Contact ids

apiInstance.postExternalcontactsBulkContactsRemove(body)
  .then((data) => {
    console.log(`postExternalcontactsBulkContactsRemove success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling postExternalcontactsBulkContactsRemove');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **body** | **Object** | Contact ids |  |

### Return type

**BulkDeleteResponse**


## postExternalcontactsBulkContactsUnresolved

> BulkFetchContactsResponse postExternalcontactsBulkContactsUnresolved(body)


POST /api/v2/externalcontacts/bulk/contacts/unresolved

Bulk fetch unresolved ancestor contacts

Requires ANY permissions:

* externalContacts:contact:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.ExternalContactsApi();

let body = {}; // Object | Contact ids

apiInstance.postExternalcontactsBulkContactsUnresolved(body)
  .then((data) => {
    console.log(`postExternalcontactsBulkContactsUnresolved success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling postExternalcontactsBulkContactsUnresolved');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **body** | **Object** | Contact ids |  |

### Return type

**BulkFetchContactsResponse**


## postExternalcontactsBulkContactsUpdate

> BulkContactsResponse postExternalcontactsBulkContactsUpdate(body)


POST /api/v2/externalcontacts/bulk/contacts/update

Bulk update contacts

Requires ANY permissions:

* externalContacts:contact:edit

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.ExternalContactsApi();

let body = {}; // Object | Contacts

apiInstance.postExternalcontactsBulkContactsUpdate(body)
  .then((data) => {
    console.log(`postExternalcontactsBulkContactsUpdate success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling postExternalcontactsBulkContactsUpdate');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **body** | **Object** | Contacts |  |

### Return type

**BulkContactsResponse**


## postExternalcontactsBulkNotes

> BulkFetchNotesResponse postExternalcontactsBulkNotes(body)


POST /api/v2/externalcontacts/bulk/notes

Bulk fetch notes

Requires ALL permissions:

* externalContacts:contact:view
* externalContacts:externalOrganization:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.ExternalContactsApi();

let body = {}; // Object | Note ids

apiInstance.postExternalcontactsBulkNotes(body)
  .then((data) => {
    console.log(`postExternalcontactsBulkNotes success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling postExternalcontactsBulkNotes');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **body** | **Object** | Note ids |  |

### Return type

**BulkFetchNotesResponse**


## postExternalcontactsBulkNotesAdd

> BulkNotesResponse postExternalcontactsBulkNotesAdd(body)


POST /api/v2/externalcontacts/bulk/notes/add

Bulk add notes

Requires ALL permissions:

* externalContacts:contact:add
* externalContacts:externalOrganization:add

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.ExternalContactsApi();

let body = {}; // Object | Notes

apiInstance.postExternalcontactsBulkNotesAdd(body)
  .then((data) => {
    console.log(`postExternalcontactsBulkNotesAdd success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling postExternalcontactsBulkNotesAdd');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **body** | **Object** | Notes |  |

### Return type

**BulkNotesResponse**


## postExternalcontactsBulkNotesRemove

> BulkDeleteResponse postExternalcontactsBulkNotesRemove(body)


POST /api/v2/externalcontacts/bulk/notes/remove

Bulk remove notes

Requires ALL permissions:

* externalContacts:contact:delete
* externalContacts:externalOrganization:delete

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.ExternalContactsApi();

let body = {}; // Object | Note ids

apiInstance.postExternalcontactsBulkNotesRemove(body)
  .then((data) => {
    console.log(`postExternalcontactsBulkNotesRemove success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling postExternalcontactsBulkNotesRemove');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **body** | **Object** | Note ids |  |

### Return type

**BulkDeleteResponse**


## postExternalcontactsBulkNotesUpdate

> BulkNotesResponse postExternalcontactsBulkNotesUpdate(body)


POST /api/v2/externalcontacts/bulk/notes/update

Bulk update notes

Requires ALL permissions:

* externalContacts:contact:edit
* externalContacts:externalOrganization:edit

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.ExternalContactsApi();

let body = {}; // Object | Notes

apiInstance.postExternalcontactsBulkNotesUpdate(body)
  .then((data) => {
    console.log(`postExternalcontactsBulkNotesUpdate success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling postExternalcontactsBulkNotesUpdate');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **body** | **Object** | Notes |  |

### Return type

**BulkNotesResponse**


## postExternalcontactsBulkOrganizations

> BulkFetchOrganizationsResponse postExternalcontactsBulkOrganizations(body)


POST /api/v2/externalcontacts/bulk/organizations

Bulk fetch organizations

Requires ANY permissions:

* externalContacts:externalOrganization:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.ExternalContactsApi();

let body = {}; // Object | Organizations ids

apiInstance.postExternalcontactsBulkOrganizations(body)
  .then((data) => {
    console.log(`postExternalcontactsBulkOrganizations success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling postExternalcontactsBulkOrganizations');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **body** | **Object** | Organizations ids |  |

### Return type

**BulkFetchOrganizationsResponse**


## postExternalcontactsBulkOrganizationsAdd

> BulkOrganizationsResponse postExternalcontactsBulkOrganizationsAdd(body)


POST /api/v2/externalcontacts/bulk/organizations/add

Bulk add organizations

Requires ANY permissions:

* externalContacts:externalOrganization:add

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.ExternalContactsApi();

let body = {}; // Object | Organizations

apiInstance.postExternalcontactsBulkOrganizationsAdd(body)
  .then((data) => {
    console.log(`postExternalcontactsBulkOrganizationsAdd success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling postExternalcontactsBulkOrganizationsAdd');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **body** | **Object** | Organizations |  |

### Return type

**BulkOrganizationsResponse**


## postExternalcontactsBulkOrganizationsDivisionviews

> BulkFetchOrganizationsResponse postExternalcontactsBulkOrganizationsDivisionviews(body)


POST /api/v2/externalcontacts/bulk/organizations/divisionviews

Bulk fetch organizations across divisions

Requires ANY permissions:

* externalContacts:externalOrganization:search

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.ExternalContactsApi();

let body = {}; // Object | Organizations ids

apiInstance.postExternalcontactsBulkOrganizationsDivisionviews(body)
  .then((data) => {
    console.log(`postExternalcontactsBulkOrganizationsDivisionviews success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling postExternalcontactsBulkOrganizationsDivisionviews');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **body** | **Object** | Organizations ids |  |

### Return type

**BulkFetchOrganizationsResponse**


## postExternalcontactsBulkOrganizationsEnrich

> BulkOrganizationsEnrichResponse postExternalcontactsBulkOrganizationsEnrich(body, opts)


POST /api/v2/externalcontacts/bulk/organizations/enrich

Bulk enrich external organizations - Run up to 10 Enrich operations per request

See the API endpoint /externalcontacts/organizations/enrich for docs on individual Enrich operations.

Requires ANY permissions:

* externalContacts:externalOrganization:enrich

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.ExternalContactsApi();

let body = {}; // Object | External Organization Enrich Requests
let opts = { 
  'dryRun': true // Boolean | If true, the request will not make any modifications, but will show you what the end result *would* be.
};

apiInstance.postExternalcontactsBulkOrganizationsEnrich(body, opts)
  .then((data) => {
    console.log(`postExternalcontactsBulkOrganizationsEnrich success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling postExternalcontactsBulkOrganizationsEnrich');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **body** | **Object** | External Organization Enrich Requests |  |
 **dryRun** | **Boolean** | If true, the request will not make any modifications, but will show you what the end result *would* be. | [optional]  |

### Return type

**BulkOrganizationsEnrichResponse**


## postExternalcontactsBulkOrganizationsRemove

> BulkDeleteResponse postExternalcontactsBulkOrganizationsRemove(body)


POST /api/v2/externalcontacts/bulk/organizations/remove

Bulk remove organizations

Requires ANY permissions:

* externalContacts:externalOrganization:delete

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.ExternalContactsApi();

let body = {}; // Object | Organization ids

apiInstance.postExternalcontactsBulkOrganizationsRemove(body)
  .then((data) => {
    console.log(`postExternalcontactsBulkOrganizationsRemove success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling postExternalcontactsBulkOrganizationsRemove');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **body** | **Object** | Organization ids |  |

### Return type

**BulkDeleteResponse**


## postExternalcontactsBulkOrganizationsUpdate

> BulkOrganizationsResponse postExternalcontactsBulkOrganizationsUpdate(body)


POST /api/v2/externalcontacts/bulk/organizations/update

Bulk update organizations

Requires ANY permissions:

* externalContacts:externalOrganization:edit

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.ExternalContactsApi();

let body = {}; // Object | Organizations

apiInstance.postExternalcontactsBulkOrganizationsUpdate(body)
  .then((data) => {
    console.log(`postExternalcontactsBulkOrganizationsUpdate success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling postExternalcontactsBulkOrganizationsUpdate');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **body** | **Object** | Organizations |  |

### Return type

**BulkOrganizationsResponse**


## postExternalcontactsBulkRelationships

> BulkFetchRelationshipsResponse postExternalcontactsBulkRelationships(body)


POST /api/v2/externalcontacts/bulk/relationships

Bulk fetch relationships

Requires ALL permissions:

* externalContacts:contact:view
* externalContacts:externalOrganization:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.ExternalContactsApi();

let body = {}; // Object | Relationships ids

apiInstance.postExternalcontactsBulkRelationships(body)
  .then((data) => {
    console.log(`postExternalcontactsBulkRelationships success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling postExternalcontactsBulkRelationships');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **body** | **Object** | Relationships ids |  |

### Return type

**BulkFetchRelationshipsResponse**


## postExternalcontactsBulkRelationshipsAdd

> BulkRelationshipsResponse postExternalcontactsBulkRelationshipsAdd(body)


POST /api/v2/externalcontacts/bulk/relationships/add

Bulk add relationships

Requires ALL permissions:

* externalContacts:contact:add
* externalContacts:externalOrganization:add

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.ExternalContactsApi();

let body = {}; // Object | Relationships

apiInstance.postExternalcontactsBulkRelationshipsAdd(body)
  .then((data) => {
    console.log(`postExternalcontactsBulkRelationshipsAdd success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling postExternalcontactsBulkRelationshipsAdd');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **body** | **Object** | Relationships |  |

### Return type

**BulkRelationshipsResponse**


## postExternalcontactsBulkRelationshipsRemove

> BulkDeleteResponse postExternalcontactsBulkRelationshipsRemove(body)


POST /api/v2/externalcontacts/bulk/relationships/remove

Bulk remove relationships

Requires ALL permissions:

* externalContacts:contact:delete
* externalContacts:externalOrganization:delete

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.ExternalContactsApi();

let body = {}; // Object | Relationships ids

apiInstance.postExternalcontactsBulkRelationshipsRemove(body)
  .then((data) => {
    console.log(`postExternalcontactsBulkRelationshipsRemove success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling postExternalcontactsBulkRelationshipsRemove');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **body** | **Object** | Relationships ids |  |

### Return type

**BulkDeleteResponse**


## postExternalcontactsBulkRelationshipsUpdate

> BulkRelationshipsResponse postExternalcontactsBulkRelationshipsUpdate(body)


POST /api/v2/externalcontacts/bulk/relationships/update

Bulk update relationships

Requires ALL permissions:

* externalContacts:contact:edit
* externalContacts:externalOrganization:edit

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.ExternalContactsApi();

let body = {}; // Object | Relationships

apiInstance.postExternalcontactsBulkRelationshipsUpdate(body)
  .then((data) => {
    console.log(`postExternalcontactsBulkRelationshipsUpdate success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling postExternalcontactsBulkRelationshipsUpdate');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **body** | **Object** | Relationships |  |

### Return type

**BulkRelationshipsResponse**


## postExternalcontactsContactJourneySegments

> UpdateSegmentAssignmentResponse postExternalcontactsContactJourneySegments(contactId, opts)


POST /api/v2/externalcontacts/contacts/{contactId}/journey/segments

Assign/Unassign up to 10 segments to/from an external contact or, if a segment is already assigned, update the expiry date of the segment assignment. Any unprocessed segment assignments are returned in the body for the client to retry, in the event of a partial success.

Requires ANY permissions:

* externalContacts:segmentAssignment:add
* externalContacts:segmentAssignment:delete

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.ExternalContactsApi();

let contactId = "contactId_example"; // String | ExternalContact ID
let opts = { 
  'body': {} // Object | 
};

apiInstance.postExternalcontactsContactJourneySegments(contactId, opts)
  .then((data) => {
    console.log(`postExternalcontactsContactJourneySegments success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling postExternalcontactsContactJourneySegments');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **contactId** | **String** | ExternalContact ID |  |
 **body** | **Object** |  | [optional]  |

### Return type

**UpdateSegmentAssignmentResponse**


## postExternalcontactsContactNotes

> Note postExternalcontactsContactNotes(contactId, body)


POST /api/v2/externalcontacts/contacts/{contactId}/notes

Create a note for an external contact

Requires ANY permissions:

* relate:contact:edit
* externalContacts:contact:edit

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
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

### Return type

**Note**


## postExternalcontactsContactPromotion

> ExternalContact postExternalcontactsContactPromotion(contactId)


POST /api/v2/externalcontacts/contacts/{contactId}/promotion

Promote an observed contact (ephemeral or identified) to a curated contact

Requires ANY permissions:

* externalContacts:identity:promote

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.ExternalContactsApi();

let contactId = "contactId_example"; // String | ExternalContact ID

apiInstance.postExternalcontactsContactPromotion(contactId)
  .then((data) => {
    console.log(`postExternalcontactsContactPromotion success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling postExternalcontactsContactPromotion');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **contactId** | **String** | ExternalContact ID |  |

### Return type

**ExternalContact**


## postExternalcontactsContacts

> ExternalContact postExternalcontactsContacts(body)


POST /api/v2/externalcontacts/contacts

Create an external contact

Requires ANY permissions:

* relate:contact:add
* externalContacts:contact:add

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
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

### Return type

**ExternalContact**


## postExternalcontactsContactsEnrich

> ExternalContact postExternalcontactsContactsEnrich(body, opts)


POST /api/v2/externalcontacts/contacts/enrich

Modify or create an External Contact, with powerful behaviors for finding and combining data with pre-existing Contacts.

You may also submit multiple Enrich operations in one request via the Bulk Enrich API at /externalcontacts/bulk/contacts. A 201 response status indicates that a new Contact was created, whereas a 200 status indicates that a Contact was updated or a merge occurred.

Requires ANY permissions:

* externalContacts:contact:enrich

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.ExternalContactsApi();

let body = {}; // Object | ContactEnrichRequest
let opts = { 
  'dryRun': true // Boolean | If true, the request will not make any modifications, but will show you what the end result *would* be.
};

apiInstance.postExternalcontactsContactsEnrich(body, opts)
  .then((data) => {
    console.log(`postExternalcontactsContactsEnrich success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling postExternalcontactsContactsEnrich');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **body** | **Object** | ContactEnrichRequest |  |
 **dryRun** | **Boolean** | If true, the request will not make any modifications, but will show you what the end result *would* be. | [optional]  |

### Return type

**ExternalContact**


## postExternalcontactsContactsExports

> ContactsExport postExternalcontactsContactsExports(body)


POST /api/v2/externalcontacts/contacts/exports

Create bulk export

Requires ALL permissions:

* externalContacts:export:add
* externalContacts:contact:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.ExternalContactsApi();

let body = {}; // Object | Export

apiInstance.postExternalcontactsContactsExports(body)
  .then((data) => {
    console.log(`postExternalcontactsContactsExports success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling postExternalcontactsContactsExports');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **body** | **Object** | Export |  |

### Return type

**ContactsExport**


## postExternalcontactsContactsMerge

> ExternalContact postExternalcontactsContactsMerge(body)


POST /api/v2/externalcontacts/contacts/merge

Merge up to 25 contacts into a new contact record

Merge operation may fail if the resulting mergeset exceeds our default limit of 52. The valueOverride field lets you override any of the Contact fields post-merge. If any Contact field is left null in `valueOverride`, it will be taken from the most recently-modified contact in the merge set. Exception for *phone/*email fields: Conflicting data will be moved to any other available phone/email fields in the merged contact.

Requires ANY permissions:

* externalContacts:identity:merge

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.ExternalContactsApi();

let body = {}; // Object | MergeRequest

apiInstance.postExternalcontactsContactsMerge(body)
  .then((data) => {
    console.log(`postExternalcontactsContactsMerge success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling postExternalcontactsContactsMerge');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **body** | **Object** | MergeRequest |  |

### Return type

**ExternalContact**


## postExternalcontactsContactsSchemas

> DataSchema postExternalcontactsContactsSchemas(body)


POST /api/v2/externalcontacts/contacts/schemas

Create a schema

Requires ANY permissions:

* externalContacts:customFields:add

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
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

### Return type

**DataSchema**


## postExternalcontactsExternalsources

> ExternalSource postExternalcontactsExternalsources(body)


POST /api/v2/externalcontacts/externalsources

Create an External Source

Requires ANY permissions:

* externalContacts:externalSource:add

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.ExternalContactsApi();

let body = {}; // Object | External Source

apiInstance.postExternalcontactsExternalsources(body)
  .then((data) => {
    console.log(`postExternalcontactsExternalsources success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling postExternalcontactsExternalsources');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **body** | **Object** | External Source |  |

### Return type

**ExternalSource**


## postExternalcontactsIdentifierlookup

> ExternalContact postExternalcontactsIdentifierlookup(identifier, opts)

:::{"alert":"warning","title":"Deprecated","collapsible":false,"autoCollapse":false}
This resource has been deprecated
:::

POST /api/v2/externalcontacts/identifierlookup

Fetch a contact using an identifier type and value.

NOTE: Deprecated. Please use /api/v2/externalcontacts/identifierlookup/contacts as an alternative endpoint instead. Phone number identifier values must be provided with the country code and a leading + symbol. Example: "+1 704 298 4733"

Requires ANY permissions:

* externalContacts:contact:view
* relate:contact:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.ExternalContactsApi();

let identifier = {}; // Object | 
let opts = { 
  'expand': ["expand_example"] // [String] | which field, if any, to expand
};

apiInstance.postExternalcontactsIdentifierlookup(identifier, opts)
  .then((data) => {
    console.log(`postExternalcontactsIdentifierlookup success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling postExternalcontactsIdentifierlookup');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **identifier** | **Object** |  |  |
 **expand** | **[String]** | which field, if any, to expand | [optional] <br />**Values**: externalOrganization, identifiers, externalSources, division |

### Return type

**ExternalContact**


## postExternalcontactsIdentifierlookupContacts

> ExternalContact postExternalcontactsIdentifierlookupContacts(identifier, opts)


POST /api/v2/externalcontacts/identifierlookup/contacts

Fetch a contact using an identifier type and value.

Phone number identifier values must be provided with the country code and a leading + symbol. Example: "+1 704 298 4733"

Requires ANY permissions:

* externalContacts:contact:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.ExternalContactsApi();

let identifier = {}; // Object | 
let opts = { 
  'expand': ["expand_example"] // [String] | which field, if any, to expand
};

apiInstance.postExternalcontactsIdentifierlookupContacts(identifier, opts)
  .then((data) => {
    console.log(`postExternalcontactsIdentifierlookupContacts success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling postExternalcontactsIdentifierlookupContacts');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **identifier** | **Object** |  |  |
 **expand** | **[String]** | which field, if any, to expand | [optional] <br />**Values**: externalOrganization, identifiers, externalSources, division |

### Return type

**ExternalContact**


## postExternalcontactsIdentifierlookupOrganizations

> ExternalOrganization postExternalcontactsIdentifierlookupOrganizations(identifier, opts)


POST /api/v2/externalcontacts/identifierlookup/organizations

Fetch an external organization using an identifier type and value.

This endpoint will only accept ExternalId type identifiers.

Requires ANY permissions:

* externalContacts:externalOrganization:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.ExternalContactsApi();

let identifier = {}; // Object | 
let opts = { 
  'expand': ["expand_example"] // [String] | which field, if any, to expand
};

apiInstance.postExternalcontactsIdentifierlookupOrganizations(identifier, opts)
  .then((data) => {
    console.log(`postExternalcontactsIdentifierlookupOrganizations success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling postExternalcontactsIdentifierlookupOrganizations');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **identifier** | **Object** |  |  |
 **expand** | **[String]** | which field, if any, to expand | [optional] <br />**Values**: identifiers, externalSources, division |

### Return type

**ExternalOrganization**


## postExternalcontactsImportCsvJobs

> CsvJobResponse postExternalcontactsImportCsvJobs(body)


POST /api/v2/externalcontacts/import/csv/jobs

Create CSV import job

Requires ANY permissions:

* externalContacts:importCsvJob:add

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.ExternalContactsApi();

let body = {}; // Object | ImportRequest

apiInstance.postExternalcontactsImportCsvJobs(body)
  .then((data) => {
    console.log(`postExternalcontactsImportCsvJobs success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling postExternalcontactsImportCsvJobs');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **body** | **Object** | ImportRequest |  |

### Return type

**CsvJobResponse**


## postExternalcontactsImportCsvSettings

> CsvSettings postExternalcontactsImportCsvSettings(body)


POST /api/v2/externalcontacts/import/csv/settings

Create settings for CSV import

Requires ANY permissions:

* externalContacts:importCsvSettings:add

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.ExternalContactsApi();

let body = {}; // Object | Settings

apiInstance.postExternalcontactsImportCsvSettings(body)
  .then((data) => {
    console.log(`postExternalcontactsImportCsvSettings success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling postExternalcontactsImportCsvSettings');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **body** | **Object** | Settings |  |

### Return type

**CsvSettings**


## postExternalcontactsImportCsvUploads

> CsvUploadResponse postExternalcontactsImportCsvUploads(body)


POST /api/v2/externalcontacts/import/csv/uploads

Get url for CSV upload

Requires ANY permissions:

* externalContacts:importCsvUpload:add

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.ExternalContactsApi();

let body = {}; // Object | UploadRequest

apiInstance.postExternalcontactsImportCsvUploads(body)
  .then((data) => {
    console.log(`postExternalcontactsImportCsvUploads success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling postExternalcontactsImportCsvUploads');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **body** | **Object** | UploadRequest |  |

### Return type

**CsvUploadResponse**


## postExternalcontactsImportJobs

> ContactImportJobResponse postExternalcontactsImportJobs(body)


POST /api/v2/externalcontacts/import/jobs

Create a new job

Requires ANY permissions:

* externalContacts:importJob:add

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.ExternalContactsApi();

let body = {}; // Object | Job

apiInstance.postExternalcontactsImportJobs(body)
  .then((data) => {
    console.log(`postExternalcontactsImportJobs success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling postExternalcontactsImportJobs');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **body** | **Object** | Job |  |

### Return type

**ContactImportJobResponse**


## postExternalcontactsImportSettings

> ContactImportSettings postExternalcontactsImportSettings(body)


POST /api/v2/externalcontacts/import/settings

Create a new settings

Requires ANY permissions:

* externalContacts:importSettings:add

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.ExternalContactsApi();

let body = {}; // Object | Setting

apiInstance.postExternalcontactsImportSettings(body)
  .then((data) => {
    console.log(`postExternalcontactsImportSettings success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling postExternalcontactsImportSettings');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **body** | **Object** | Setting |  |

### Return type

**ContactImportSettings**


## postExternalcontactsMergeContacts

> ExternalContact postExternalcontactsMergeContacts(body)

:::{"alert":"warning","title":"Deprecated","collapsible":false,"autoCollapse":false}
This resource has been deprecated
:::

POST /api/v2/externalcontacts/merge/contacts

Merge two contacts into a new contact record

Two curated contacts cannot be merged. Refer to the Contact Merging article on the Developer Center for details. Deprecated: This API has been superseded by a new merge API. You are encouraged to instead use /api/v2/externalcontacts/contacts/merge, which supports merging up to 25 Contacts of any type, and overriding specific fields in the resulting Contact.

Requires ANY permissions:

* externalContacts:identity:merge

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.ExternalContactsApi();

let body = {}; // Object | MergeRequest

apiInstance.postExternalcontactsMergeContacts(body)
  .then((data) => {
    console.log(`postExternalcontactsMergeContacts success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling postExternalcontactsMergeContacts');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **body** | **Object** | MergeRequest |  |

### Return type

**ExternalContact**


## postExternalcontactsOrganizationNotes

> Note postExternalcontactsOrganizationNotes(externalOrganizationId, body)


POST /api/v2/externalcontacts/organizations/{externalOrganizationId}/notes

Create a note for an external organization

Requires ANY permissions:

* relate:externalOrganization:edit
* externalContacts:externalOrganization:edit

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
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

### Return type

**Note**


## postExternalcontactsOrganizations

> ExternalOrganization postExternalcontactsOrganizations(body)


POST /api/v2/externalcontacts/organizations

Create an external organization

Requires ANY permissions:

* relate:externalOrganization:add
* externalContacts:externalOrganization:add

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
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

### Return type

**ExternalOrganization**


## postExternalcontactsOrganizationsEnrich

> ExternalOrganization postExternalcontactsOrganizationsEnrich(body, opts)


POST /api/v2/externalcontacts/organizations/enrich

Modify or create an External Org, with powerful behaviors for finding and combining data with pre-existing External Orgs.

You may also submit multiple Enrich operations in one request via the Bulk Enrich API at /externalcontacts/bulk/organizations. A 201 response status indicates that a new External Organization was created, whereas a 200 status indicates that an External Organization was updated

Requires ANY permissions:

* externalContacts:externalOrganization:enrich

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.ExternalContactsApi();

let body = {}; // Object | ExternalOrgEnrichRequest
let opts = { 
  'dryRun': true // Boolean | If true, the request will not make any modifications, but will show you what the end result *would* be.
};

apiInstance.postExternalcontactsOrganizationsEnrich(body, opts)
  .then((data) => {
    console.log(`postExternalcontactsOrganizationsEnrich success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling postExternalcontactsOrganizationsEnrich');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **body** | **Object** | ExternalOrgEnrichRequest |  |
 **dryRun** | **Boolean** | If true, the request will not make any modifications, but will show you what the end result *would* be. | [optional]  |

### Return type

**ExternalOrganization**


## postExternalcontactsOrganizationsSchemas

> DataSchema postExternalcontactsOrganizationsSchemas(body)


POST /api/v2/externalcontacts/organizations/schemas

Create a schema

Requires ANY permissions:

* externalContacts:customFields:add

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
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

### Return type

**DataSchema**


## postExternalcontactsRelationships

> Relationship postExternalcontactsRelationships(body)


POST /api/v2/externalcontacts/relationships

Create a relationship

Requires ANY permissions:

* relate:externalOrganization:edit
* externalContacts:externalOrganization:edit

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
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

### Return type

**Relationship**


## putExternalcontactsContact

> ExternalContact putExternalcontactsContact(contactId, body)


PUT /api/v2/externalcontacts/contacts/{contactId}

Update an external contact

Requires ANY permissions:

* relate:contact:edit
* externalContacts:contact:edit

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
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

### Return type

**ExternalContact**


## putExternalcontactsContactNote

> Note putExternalcontactsContactNote(contactId, noteId, body)


PUT /api/v2/externalcontacts/contacts/{contactId}/notes/{noteId}

Update a note for an external contact

Requires ANY permissions:

* relate:contact:edit
* externalContacts:contact:edit

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
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

### Return type

**Note**


## putExternalcontactsContactsSchema

> DataSchema putExternalcontactsContactsSchema(schemaId, body)


PUT /api/v2/externalcontacts/contacts/schemas/{schemaId}

Update a schema

Requires ANY permissions:

* externalContacts:customFields:edit

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
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

### Return type

**DataSchema**


## putExternalcontactsConversation

> void putExternalcontactsConversation(conversationId, body)


PUT /api/v2/externalcontacts/conversations/{conversationId}

Associate/disassociate an external contact with a conversation

To associate, supply a value for the externalContactId.  To disassociate, do not include the property at all.

Requires ANY permissions:

* relate:conversation:associate
* externalContacts:conversation:associate

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
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

### Return type

void (no response body)


## putExternalcontactsExternalsource

> ExternalSource putExternalcontactsExternalsource(externalSourceId, body)


PUT /api/v2/externalcontacts/externalsources/{externalSourceId}

Update an External Source

Requires ANY permissions:

* externalContacts:externalSource:edit

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.ExternalContactsApi();

let externalSourceId = "externalSourceId_example"; // String | External Source ID
let body = {}; // Object | External Source

apiInstance.putExternalcontactsExternalsource(externalSourceId, body)
  .then((data) => {
    console.log(`putExternalcontactsExternalsource success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling putExternalcontactsExternalsource');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **externalSourceId** | **String** | External Source ID |  |
 **body** | **Object** | External Source |  |

### Return type

**ExternalSource**


## putExternalcontactsImportCsvSetting

> CsvSettings putExternalcontactsImportCsvSetting(settingsId, body)


PUT /api/v2/externalcontacts/import/csv/settings/{settingsId}

Update settings for CSV import

Requires ANY permissions:

* externalContacts:importCsvSettings:edit

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.ExternalContactsApi();

let settingsId = "settingsId_example"; // String | Settings id
let body = {}; // Object | Settings

apiInstance.putExternalcontactsImportCsvSetting(settingsId, body)
  .then((data) => {
    console.log(`putExternalcontactsImportCsvSetting success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling putExternalcontactsImportCsvSetting');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **settingsId** | **String** | Settings id |  |
 **body** | **Object** | Settings |  |

### Return type

**CsvSettings**


## putExternalcontactsImportJob

> ContactImportJobStatusUpdateResponse putExternalcontactsImportJob(jobId, body)


PUT /api/v2/externalcontacts/import/jobs/{jobId}

Update Job's workflow status

Requires ANY permissions:

* externalContacts:importJob:edit

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.ExternalContactsApi();

let jobId = "jobId_example"; // String | Job id
let body = {}; // Object | Status of the Job's workflow

apiInstance.putExternalcontactsImportJob(jobId, body)
  .then((data) => {
    console.log(`putExternalcontactsImportJob success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling putExternalcontactsImportJob');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **jobId** | **String** | Job id |  |
 **body** | **Object** | Status of the Job's workflow |  |

### Return type

**ContactImportJobStatusUpdateResponse**


## putExternalcontactsImportSetting

> ContactImportSettings putExternalcontactsImportSetting(settingsId, body)


PUT /api/v2/externalcontacts/import/settings/{settingsId}

Update settings

Requires ANY permissions:

* externalContacts:importSettings:edit

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.ExternalContactsApi();

let settingsId = "settingsId_example"; // String | Settings id
let body = {}; // Object | Setting

apiInstance.putExternalcontactsImportSetting(settingsId, body)
  .then((data) => {
    console.log(`putExternalcontactsImportSetting success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling putExternalcontactsImportSetting');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **settingsId** | **String** | Settings id |  |
 **body** | **Object** | Setting |  |

### Return type

**ContactImportSettings**


## putExternalcontactsOrganization

> ExternalOrganization putExternalcontactsOrganization(externalOrganizationId, body)


PUT /api/v2/externalcontacts/organizations/{externalOrganizationId}

Update an external organization

Requires ANY permissions:

* relate:externalOrganization:edit
* externalContacts:externalOrganization:edit

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
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

### Return type

**ExternalOrganization**


## putExternalcontactsOrganizationNote

> Note putExternalcontactsOrganizationNote(externalOrganizationId, noteId, body)


PUT /api/v2/externalcontacts/organizations/{externalOrganizationId}/notes/{noteId}

Update a note for an external organization

Requires ANY permissions:

* relate:externalOrganization:edit
* externalContacts:externalOrganization:edit

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
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

### Return type

**Note**


## putExternalcontactsOrganizationTrustorTrustorId

> ExternalOrganizationTrustorLink putExternalcontactsOrganizationTrustorTrustorId(externalOrganizationId, trustorId)


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

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
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

### Return type

**ExternalOrganizationTrustorLink**


## putExternalcontactsOrganizationsSchema

> DataSchema putExternalcontactsOrganizationsSchema(schemaId, body)


PUT /api/v2/externalcontacts/organizations/schemas/{schemaId}

Update a schema

Requires ANY permissions:

* externalContacts:customFields:edit

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
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

### Return type

**DataSchema**


## putExternalcontactsRelationship

> Relationship putExternalcontactsRelationship(relationshipId, body)


PUT /api/v2/externalcontacts/relationships/{relationshipId}

Update a relationship

Requires ANY permissions:

* relate:externalOrganization:edit
* externalContacts:externalOrganization:edit

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
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

### Return type

**Relationship**


_purecloud-platform-client-v2@229.1.0_
