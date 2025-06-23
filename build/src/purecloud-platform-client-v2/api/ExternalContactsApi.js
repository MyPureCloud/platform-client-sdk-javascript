import ApiClient from '../ApiClient.js';


class ExternalContactsApi {
	/**
	 * ExternalContacts service.
	 * @module purecloud-platform-client-v2/api/ExternalContactsApi
	 * @version 225.0.0
	 */

	/**
	 * Constructs a new ExternalContactsApi. 
	 * @alias module:purecloud-platform-client-v2/api/ExternalContactsApi
	 * @class
	 * @param {module:purecloud-platform-client-v2/ApiClient} apiClient Optional API client implementation to use,
	 * default to {@link module:purecloud-platform-client-v2/ApiClient#instance} if unspecified.
	 */
	constructor(apiClient) {
		this.apiClient = apiClient || ApiClient.instance;
	}


	/**
	 * Delete an external contact
	 * 
	 * @param {String} contactId ExternalContact ID
	 */
	deleteExternalcontactsContact(contactId) { 
		// verify the required parameter 'contactId' is set
		if (contactId === undefined || contactId === null || contactId === '') {
			throw 'Missing the required parameter "contactId" when calling deleteExternalcontactsContact';
		}

		return this.apiClient.callApi(
			'/api/v2/externalcontacts/contacts/{contactId}', 
			'DELETE', 
			{ 'contactId': contactId },
			{  },
			{  },
			{  },
			null, 
			['PureCloud OAuth'], 
			['application/json'],
			['application/json']
		);
	}

	/**
	 * Delete a note for an external contact
	 * 
	 * @param {String} contactId ExternalContact Id
	 * @param {String} noteId Note Id
	 */
	deleteExternalcontactsContactNote(contactId, noteId) { 
		// verify the required parameter 'contactId' is set
		if (contactId === undefined || contactId === null || contactId === '') {
			throw 'Missing the required parameter "contactId" when calling deleteExternalcontactsContactNote';
		}
		// verify the required parameter 'noteId' is set
		if (noteId === undefined || noteId === null || noteId === '') {
			throw 'Missing the required parameter "noteId" when calling deleteExternalcontactsContactNote';
		}

		return this.apiClient.callApi(
			'/api/v2/externalcontacts/contacts/{contactId}/notes/{noteId}', 
			'DELETE', 
			{ 'contactId': contactId,'noteId': noteId },
			{  },
			{  },
			{  },
			null, 
			['PureCloud OAuth'], 
			['application/json'],
			['application/json']
		);
	}

	/**
	 * Delete a schema
	 * 
	 * @param {String} schemaId Schema ID
	 */
	deleteExternalcontactsContactsSchema(schemaId) { 
		// verify the required parameter 'schemaId' is set
		if (schemaId === undefined || schemaId === null || schemaId === '') {
			throw 'Missing the required parameter "schemaId" when calling deleteExternalcontactsContactsSchema';
		}

		return this.apiClient.callApi(
			'/api/v2/externalcontacts/contacts/schemas/{schemaId}', 
			'DELETE', 
			{ 'schemaId': schemaId },
			{  },
			{  },
			{  },
			null, 
			['PureCloud OAuth'], 
			['application/json'],
			['application/json']
		);
	}

	/**
	 * Delete an External Source. WARNING: Any records that reference this External Source will not be automatically cleaned up. Those records will still be editable, but their External IDs may not be fully viewable.
	 * 
	 * @param {String} externalSourceId External Source ID
	 */
	deleteExternalcontactsExternalsource(externalSourceId) { 
		// verify the required parameter 'externalSourceId' is set
		if (externalSourceId === undefined || externalSourceId === null || externalSourceId === '') {
			throw 'Missing the required parameter "externalSourceId" when calling deleteExternalcontactsExternalsource';
		}

		return this.apiClient.callApi(
			'/api/v2/externalcontacts/externalsources/{externalSourceId}', 
			'DELETE', 
			{ 'externalSourceId': externalSourceId },
			{  },
			{  },
			{  },
			null, 
			['PureCloud OAuth'], 
			['application/json'],
			['application/json']
		);
	}

	/**
	 * Delete settings for CSV import
	 * 
	 * @param {String} settingsId Settings id
	 */
	deleteExternalcontactsImportCsvSetting(settingsId) { 
		// verify the required parameter 'settingsId' is set
		if (settingsId === undefined || settingsId === null || settingsId === '') {
			throw 'Missing the required parameter "settingsId" when calling deleteExternalcontactsImportCsvSetting';
		}

		return this.apiClient.callApi(
			'/api/v2/externalcontacts/import/csv/settings/{settingsId}', 
			'DELETE', 
			{ 'settingsId': settingsId },
			{  },
			{  },
			{  },
			null, 
			['PureCloud OAuth'], 
			['application/json'],
			['application/json']
		);
	}

	/**
	 * Delete Settings
	 * 
	 * @param {String} settingsId Settings id
	 */
	deleteExternalcontactsImportSetting(settingsId) { 
		// verify the required parameter 'settingsId' is set
		if (settingsId === undefined || settingsId === null || settingsId === '') {
			throw 'Missing the required parameter "settingsId" when calling deleteExternalcontactsImportSetting';
		}

		return this.apiClient.callApi(
			'/api/v2/externalcontacts/import/settings/{settingsId}', 
			'DELETE', 
			{ 'settingsId': settingsId },
			{  },
			{  },
			{  },
			null, 
			['PureCloud OAuth'], 
			['application/json'],
			['application/json']
		);
	}

	/**
	 * Delete an external organization
	 * 
	 * @param {String} externalOrganizationId External Organization ID
	 */
	deleteExternalcontactsOrganization(externalOrganizationId) { 
		// verify the required parameter 'externalOrganizationId' is set
		if (externalOrganizationId === undefined || externalOrganizationId === null || externalOrganizationId === '') {
			throw 'Missing the required parameter "externalOrganizationId" when calling deleteExternalcontactsOrganization';
		}

		return this.apiClient.callApi(
			'/api/v2/externalcontacts/organizations/{externalOrganizationId}', 
			'DELETE', 
			{ 'externalOrganizationId': externalOrganizationId },
			{  },
			{  },
			{  },
			null, 
			['PureCloud OAuth'], 
			['application/json'],
			['application/json']
		);
	}

	/**
	 * Delete a note for an external organization
	 * 
	 * @param {String} externalOrganizationId External Organization Id
	 * @param {String} noteId Note Id
	 */
	deleteExternalcontactsOrganizationNote(externalOrganizationId, noteId) { 
		// verify the required parameter 'externalOrganizationId' is set
		if (externalOrganizationId === undefined || externalOrganizationId === null || externalOrganizationId === '') {
			throw 'Missing the required parameter "externalOrganizationId" when calling deleteExternalcontactsOrganizationNote';
		}
		// verify the required parameter 'noteId' is set
		if (noteId === undefined || noteId === null || noteId === '') {
			throw 'Missing the required parameter "noteId" when calling deleteExternalcontactsOrganizationNote';
		}

		return this.apiClient.callApi(
			'/api/v2/externalcontacts/organizations/{externalOrganizationId}/notes/{noteId}', 
			'DELETE', 
			{ 'externalOrganizationId': externalOrganizationId,'noteId': noteId },
			{  },
			{  },
			{  },
			null, 
			['PureCloud OAuth'], 
			['application/json'],
			['application/json']
		);
	}

	/**
	 * Unlink the Trustor for this External Organization
	 * 
	 * @param {String} externalOrganizationId External Organization ID
	 */
	deleteExternalcontactsOrganizationTrustor(externalOrganizationId) { 
		// verify the required parameter 'externalOrganizationId' is set
		if (externalOrganizationId === undefined || externalOrganizationId === null || externalOrganizationId === '') {
			throw 'Missing the required parameter "externalOrganizationId" when calling deleteExternalcontactsOrganizationTrustor';
		}

		return this.apiClient.callApi(
			'/api/v2/externalcontacts/organizations/{externalOrganizationId}/trustor', 
			'DELETE', 
			{ 'externalOrganizationId': externalOrganizationId },
			{  },
			{  },
			{  },
			null, 
			['PureCloud OAuth'], 
			['application/json'],
			['application/json']
		);
	}

	/**
	 * Delete a relationship
	 * 
	 * @param {String} relationshipId Relationship Id
	 */
	deleteExternalcontactsRelationship(relationshipId) { 
		// verify the required parameter 'relationshipId' is set
		if (relationshipId === undefined || relationshipId === null || relationshipId === '') {
			throw 'Missing the required parameter "relationshipId" when calling deleteExternalcontactsRelationship';
		}

		return this.apiClient.callApi(
			'/api/v2/externalcontacts/relationships/{relationshipId}', 
			'DELETE', 
			{ 'relationshipId': relationshipId },
			{  },
			{  },
			{  },
			null, 
			['PureCloud OAuth'], 
			['application/json'],
			['application/json']
		);
	}

	/**
	 * Fetch an external contact
	 * 
	 * @param {String} contactId ExternalContact ID
	 * @param {Object} opts Optional parameters
	 * @param {Array.<String>} opts.expand which fields, if any, to expand
	 */
	getExternalcontactsContact(contactId, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'contactId' is set
		if (contactId === undefined || contactId === null || contactId === '') {
			throw 'Missing the required parameter "contactId" when calling getExternalcontactsContact';
		}

		return this.apiClient.callApi(
			'/api/v2/externalcontacts/contacts/{contactId}', 
			'GET', 
			{ 'contactId': contactId },
			{ 'expand': this.apiClient.buildCollectionParam(opts['expand'], 'multi') },
			{  },
			{  },
			null, 
			['PureCloud OAuth'], 
			['application/json'],
			['application/json']
		);
	}

	/**
	 * List the identifiers for a contact
	 * 
	 * @param {String} contactId ExternalContact ID
	 */
	getExternalcontactsContactIdentifiers(contactId) { 
		// verify the required parameter 'contactId' is set
		if (contactId === undefined || contactId === null || contactId === '') {
			throw 'Missing the required parameter "contactId" when calling getExternalcontactsContactIdentifiers';
		}

		return this.apiClient.callApi(
			'/api/v2/externalcontacts/contacts/{contactId}/identifiers', 
			'GET', 
			{ 'contactId': contactId },
			{  },
			{  },
			{  },
			null, 
			['PureCloud OAuth'], 
			['application/json'],
			['application/json']
		);
	}

	/**
	 * Retrieve all sessions for a given external contact.
	 * 
	 * @param {String} contactId ExternalContact ID
	 * @param {Object} opts Optional parameters
	 * @param {String} opts.pageSize Number of entities to return. Maximum of 200.
	 * @param {String} opts.after The cursor that points to the end of the set of entities that has been returned.
	 * @param {Boolean} opts.includeMerged Indicates whether to return sessions from all external contacts in the merge-set of the given one.
	 */
	getExternalcontactsContactJourneySessions(contactId, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'contactId' is set
		if (contactId === undefined || contactId === null || contactId === '') {
			throw 'Missing the required parameter "contactId" when calling getExternalcontactsContactJourneySessions';
		}

		return this.apiClient.callApi(
			'/api/v2/externalcontacts/contacts/{contactId}/journey/sessions', 
			'GET', 
			{ 'contactId': contactId },
			{ 'pageSize': opts['pageSize'],'after': opts['after'],'includeMerged': opts['includeMerged'] },
			{  },
			{  },
			null, 
			['PureCloud OAuth'], 
			['application/json'],
			['application/json']
		);
	}

	/**
	 * Fetch a note for an external contact
	 * 
	 * @param {String} contactId ExternalContact Id
	 * @param {String} noteId Note Id
	 * @param {Object} opts Optional parameters
	 * @param {Array.<String>} opts.expand which fields, if any, to expand
	 */
	getExternalcontactsContactNote(contactId, noteId, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'contactId' is set
		if (contactId === undefined || contactId === null || contactId === '') {
			throw 'Missing the required parameter "contactId" when calling getExternalcontactsContactNote';
		}
		// verify the required parameter 'noteId' is set
		if (noteId === undefined || noteId === null || noteId === '') {
			throw 'Missing the required parameter "noteId" when calling getExternalcontactsContactNote';
		}

		return this.apiClient.callApi(
			'/api/v2/externalcontacts/contacts/{contactId}/notes/{noteId}', 
			'GET', 
			{ 'contactId': contactId,'noteId': noteId },
			{ 'expand': this.apiClient.buildCollectionParam(opts['expand'], 'multi') },
			{  },
			{  },
			null, 
			['PureCloud OAuth'], 
			['application/json'],
			['application/json']
		);
	}

	/**
	 * List notes for an external contact
	 * 
	 * @param {String} contactId ExternalContact Id
	 * @param {Object} opts Optional parameters
	 * @param {Number} opts.pageSize Page size (limited to fetching first 1,000 records; pageNumber * pageSize must be <= 1,000) (default to 20)
	 * @param {Number} opts.pageNumber Page number (limited to fetching first 1,000 records; pageNumber * pageSize must be <= 1,000) (default to 1)
	 * @param {String} opts.sortOrder The Note field to sort by. Any of: [createDate]. Direction: [asc, desc].  e.g. createDate:asc, createDate:desc
	 * @param {Array.<String>} opts.expand which fields, if any, to expand
	 */
	getExternalcontactsContactNotes(contactId, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'contactId' is set
		if (contactId === undefined || contactId === null || contactId === '') {
			throw 'Missing the required parameter "contactId" when calling getExternalcontactsContactNotes';
		}

		return this.apiClient.callApi(
			'/api/v2/externalcontacts/contacts/{contactId}/notes', 
			'GET', 
			{ 'contactId': contactId },
			{ 'pageSize': opts['pageSize'],'pageNumber': opts['pageNumber'],'sortOrder': opts['sortOrder'],'expand': this.apiClient.buildCollectionParam(opts['expand'], 'multi') },
			{  },
			{  },
			null, 
			['PureCloud OAuth'], 
			['application/json'],
			['application/json']
		);
	}

	/**
	 * Fetch an unresolved external contact
	 * 
	 * @param {String} contactId ExternalContact ID
	 * @param {Object} opts Optional parameters
	 * @param {Array.<String>} opts.expand which fields, if any, to expand
	 */
	getExternalcontactsContactUnresolved(contactId, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'contactId' is set
		if (contactId === undefined || contactId === null || contactId === '') {
			throw 'Missing the required parameter "contactId" when calling getExternalcontactsContactUnresolved';
		}

		return this.apiClient.callApi(
			'/api/v2/externalcontacts/contacts/{contactId}/unresolved', 
			'GET', 
			{ 'contactId': contactId },
			{ 'expand': this.apiClient.buildCollectionParam(opts['expand'], 'multi') },
			{  },
			{  },
			null, 
			['PureCloud OAuth'], 
			['application/json'],
			['application/json']
		);
	}

	/**
	 * Search for external contacts
	 * 
	 * @param {Object} opts Optional parameters
	 * @param {Number} opts.pageSize Page size (limited to fetching first 1,000 records; pageNumber * pageSize must be <= 1,000) (default to 20)
	 * @param {Number} opts.pageNumber Page number (limited to fetching first 1,000 records; pageNumber * pageSize must be <= 1,000) (default to 1)
	 * @param {String} opts.q User supplied search keywords (no special syntax is currently supported)
	 * @param {String} opts.sortOrder The External Contact field to sort by. Any of: [firstName, lastName, middleName, title]. Direction: [asc, desc]. e.g. firstName:asc, title:desc
	 * @param {Array.<String>} opts.expand which fields, if any, to expand
	 * @param {Array.<String>} opts.divisionIds which divisions to search, up to 50
	 */
	getExternalcontactsContacts(opts) { 
		opts = opts || {};
		

		return this.apiClient.callApi(
			'/api/v2/externalcontacts/contacts', 
			'GET', 
			{  },
			{ 'pageSize': opts['pageSize'],'pageNumber': opts['pageNumber'],'q': opts['q'],'sortOrder': opts['sortOrder'],'expand': this.apiClient.buildCollectionParam(opts['expand'], 'multi'),'divisionIds': this.apiClient.buildCollectionParam(opts['divisionIds'], 'multi') },
			{  },
			{  },
			null, 
			['PureCloud OAuth'], 
			['application/json'],
			['application/json']
		);
	}

	/**
	 * Get export for exportId
	 * 
	 * @param {String} exportId Export id
	 */
	getExternalcontactsContactsExport(exportId) { 
		// verify the required parameter 'exportId' is set
		if (exportId === undefined || exportId === null || exportId === '') {
			throw 'Missing the required parameter "exportId" when calling getExternalcontactsContactsExport';
		}

		return this.apiClient.callApi(
			'/api/v2/externalcontacts/contacts/exports/{exportId}', 
			'GET', 
			{ 'exportId': exportId },
			{  },
			{  },
			{  },
			null, 
			['PureCloud OAuth'], 
			['application/json'],
			['application/json']
		);
	}

	/**
	 * List exports for organization
	 * 
	 * @param {Object} opts Optional parameters
	 * @param {Array.<String>} opts.divisionIds Division IDs of entities
	 * @param {String} opts.after The cursor that points to the end of the set of entities
	 * @param {Number} opts.pageSize Number of entities to return
	 */
	getExternalcontactsContactsExports(opts) { 
		opts = opts || {};
		

		return this.apiClient.callApi(
			'/api/v2/externalcontacts/contacts/exports', 
			'GET', 
			{  },
			{ 'divisionIds': this.apiClient.buildCollectionParam(opts['divisionIds'], 'multi'),'after': opts['after'],'pageSize': opts['pageSize'] },
			{  },
			{  },
			null, 
			['PureCloud OAuth'], 
			['application/json'],
			['application/json']
		);
	}

	/**
	 * Get a schema
	 * 
	 * @param {String} schemaId Schema ID
	 */
	getExternalcontactsContactsSchema(schemaId) { 
		// verify the required parameter 'schemaId' is set
		if (schemaId === undefined || schemaId === null || schemaId === '') {
			throw 'Missing the required parameter "schemaId" when calling getExternalcontactsContactsSchema';
		}

		return this.apiClient.callApi(
			'/api/v2/externalcontacts/contacts/schemas/{schemaId}', 
			'GET', 
			{ 'schemaId': schemaId },
			{  },
			{  },
			{  },
			null, 
			['PureCloud OAuth'], 
			['application/json'],
			['application/json']
		);
	}

	/**
	 * Get a specific version of a schema
	 * 
	 * @param {String} schemaId Schema ID
	 * @param {String} versionId Schema version
	 */
	getExternalcontactsContactsSchemaVersion(schemaId, versionId) { 
		// verify the required parameter 'schemaId' is set
		if (schemaId === undefined || schemaId === null || schemaId === '') {
			throw 'Missing the required parameter "schemaId" when calling getExternalcontactsContactsSchemaVersion';
		}
		// verify the required parameter 'versionId' is set
		if (versionId === undefined || versionId === null || versionId === '') {
			throw 'Missing the required parameter "versionId" when calling getExternalcontactsContactsSchemaVersion';
		}

		return this.apiClient.callApi(
			'/api/v2/externalcontacts/contacts/schemas/{schemaId}/versions/{versionId}', 
			'GET', 
			{ 'schemaId': schemaId,'versionId': versionId },
			{  },
			{  },
			{  },
			null, 
			['PureCloud OAuth'], 
			['application/json'],
			['application/json']
		);
	}

	/**
	 * Get all versions of an external contact's schema
	 * 
	 * @param {String} schemaId Schema ID
	 */
	getExternalcontactsContactsSchemaVersions(schemaId) { 
		// verify the required parameter 'schemaId' is set
		if (schemaId === undefined || schemaId === null || schemaId === '') {
			throw 'Missing the required parameter "schemaId" when calling getExternalcontactsContactsSchemaVersions';
		}

		return this.apiClient.callApi(
			'/api/v2/externalcontacts/contacts/schemas/{schemaId}/versions', 
			'GET', 
			{ 'schemaId': schemaId },
			{  },
			{  },
			{  },
			null, 
			['PureCloud OAuth'], 
			['application/json'],
			['application/json']
		);
	}

	/**
	 * Get a list of schemas.
	 * 
	 */
	getExternalcontactsContactsSchemas() { 

		return this.apiClient.callApi(
			'/api/v2/externalcontacts/contacts/schemas', 
			'GET', 
			{  },
			{  },
			{  },
			{  },
			null, 
			['PureCloud OAuth'], 
			['application/json'],
			['application/json']
		);
	}

	/**
	 * Get a specific named core type.
	 * 
	 * @param {String} coreTypeName Name of the core type
	 */
	getExternalcontactsContactsSchemasCoretype(coreTypeName) { 
		// verify the required parameter 'coreTypeName' is set
		if (coreTypeName === undefined || coreTypeName === null || coreTypeName === '') {
			throw 'Missing the required parameter "coreTypeName" when calling getExternalcontactsContactsSchemasCoretype';
		}

		return this.apiClient.callApi(
			'/api/v2/externalcontacts/contacts/schemas/coretypes/{coreTypeName}', 
			'GET', 
			{ 'coreTypeName': coreTypeName },
			{  },
			{  },
			{  },
			null, 
			['PureCloud OAuth'], 
			['application/json'],
			['application/json']
		);
	}

	/**
	 * Get the core types from which all schemas are built.
	 * 
	 */
	getExternalcontactsContactsSchemasCoretypes() { 

		return this.apiClient.callApi(
			'/api/v2/externalcontacts/contacts/schemas/coretypes', 
			'GET', 
			{  },
			{  },
			{  },
			{  },
			null, 
			['PureCloud OAuth'], 
			['application/json'],
			['application/json']
		);
	}

	/**
	 * Get quantitative limits on schemas
	 * 
	 */
	getExternalcontactsContactsSchemasLimits() { 

		return this.apiClient.callApi(
			'/api/v2/externalcontacts/contacts/schemas/limits', 
			'GET', 
			{  },
			{  },
			{  },
			{  },
			null, 
			['PureCloud OAuth'], 
			['application/json'],
			['application/json']
		);
	}

	/**
	 * Fetch an External Source
	 * 
	 * @param {String} externalSourceId External Source ID
	 */
	getExternalcontactsExternalsource(externalSourceId) { 
		// verify the required parameter 'externalSourceId' is set
		if (externalSourceId === undefined || externalSourceId === null || externalSourceId === '') {
			throw 'Missing the required parameter "externalSourceId" when calling getExternalcontactsExternalsource';
		}

		return this.apiClient.callApi(
			'/api/v2/externalcontacts/externalsources/{externalSourceId}', 
			'GET', 
			{ 'externalSourceId': externalSourceId },
			{  },
			{  },
			{  },
			null, 
			['PureCloud OAuth'], 
			['application/json'],
			['application/json']
		);
	}

	/**
	 * Fetch a list of External Sources
	 * 
	 * @param {Object} opts Optional parameters
	 * @param {String} opts.cursor Indicates where to resume query results (not required for first page), each page returns a new cursor with a 24h TTL
	 * @param {Number} opts.limit The number of ExternalSources per page; must be between 10 and 200, default is 100
	 * @param {String} opts.name Filter by external source name. Filtering is prefix filtering and not an exact match
	 * @param {Boolean} opts.active Filter by active status of external source
	 */
	getExternalcontactsExternalsources(opts) { 
		opts = opts || {};
		

		return this.apiClient.callApi(
			'/api/v2/externalcontacts/externalsources', 
			'GET', 
			{  },
			{ 'cursor': opts['cursor'],'limit': opts['limit'],'name': opts['name'],'active': opts['active'] },
			{  },
			{  },
			null, 
			['PureCloud OAuth'], 
			['application/json'],
			['application/json']
		);
	}

	/**
	 * Get settings for CSV import
	 * 
	 * @param {String} settingsId Settings id
	 */
	getExternalcontactsImportCsvSetting(settingsId) { 
		// verify the required parameter 'settingsId' is set
		if (settingsId === undefined || settingsId === null || settingsId === '') {
			throw 'Missing the required parameter "settingsId" when calling getExternalcontactsImportCsvSetting';
		}

		return this.apiClient.callApi(
			'/api/v2/externalcontacts/import/csv/settings/{settingsId}', 
			'GET', 
			{ 'settingsId': settingsId },
			{  },
			{  },
			{  },
			null, 
			['PureCloud OAuth'], 
			['application/json'],
			['application/json']
		);
	}

	/**
	 * Retrieve all settings for organization filtered by externalSettingsId if provided
	 * 
	 * @param {Object} opts Optional parameters
	 * @param {String} opts.after The cursor that points to the end of the set of entities that has been returned.
	 * @param {String} opts.pageSize Number of entities to return. Maximum of 200.
	 * @param {String} opts.externalSettingsId External Settings Id to filter the list.
	 */
	getExternalcontactsImportCsvSettings(opts) { 
		opts = opts || {};
		

		return this.apiClient.callApi(
			'/api/v2/externalcontacts/import/csv/settings', 
			'GET', 
			{  },
			{ 'after': opts['after'],'pageSize': opts['pageSize'],'externalSettingsId': opts['externalSettingsId'] },
			{  },
			{  },
			null, 
			['PureCloud OAuth'], 
			['application/json'],
			['application/json']
		);
	}

	/**
	 * Get details for CSV upload
	 * 
	 * @param {String} uploadId Upload id
	 */
	getExternalcontactsImportCsvUploadDetails(uploadId) { 
		// verify the required parameter 'uploadId' is set
		if (uploadId === undefined || uploadId === null || uploadId === '') {
			throw 'Missing the required parameter "uploadId" when calling getExternalcontactsImportCsvUploadDetails';
		}

		return this.apiClient.callApi(
			'/api/v2/externalcontacts/import/csv/uploads/{uploadId}/details', 
			'GET', 
			{ 'uploadId': uploadId },
			{  },
			{  },
			{  },
			null, 
			['PureCloud OAuth'], 
			['application/json'],
			['application/json']
		);
	}

	/**
	 * Get preview for CSV upload
	 * 
	 * @param {String} uploadId Upload id
	 */
	getExternalcontactsImportCsvUploadPreview(uploadId) { 
		// verify the required parameter 'uploadId' is set
		if (uploadId === undefined || uploadId === null || uploadId === '') {
			throw 'Missing the required parameter "uploadId" when calling getExternalcontactsImportCsvUploadPreview';
		}

		return this.apiClient.callApi(
			'/api/v2/externalcontacts/import/csv/uploads/{uploadId}/preview', 
			'GET', 
			{ 'uploadId': uploadId },
			{  },
			{  },
			{  },
			null, 
			['PureCloud OAuth'], 
			['application/json'],
			['application/json']
		);
	}

	/**
	 * Get job based on id
	 * 
	 * @param {String} jobId Job id
	 * @param {Object} opts Optional parameters
	 * @param {Array.<String>} opts.expand which fields, if any, to expand
	 */
	getExternalcontactsImportJob(jobId, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'jobId' is set
		if (jobId === undefined || jobId === null || jobId === '') {
			throw 'Missing the required parameter "jobId" when calling getExternalcontactsImportJob';
		}

		return this.apiClient.callApi(
			'/api/v2/externalcontacts/import/jobs/{jobId}', 
			'GET', 
			{ 'jobId': jobId },
			{ 'expand': this.apiClient.buildCollectionParam(opts['expand'], 'multi') },
			{  },
			{  },
			null, 
			['PureCloud OAuth'], 
			['application/json'],
			['application/json']
		);
	}

	/**
	 * List jobs for organization
	 * 
	 * @param {Object} opts Optional parameters
	 * @param {Array.<String>} opts.expand which fields, if any, to expand
	 * @param {String} opts.after The cursor that points to the end of the set of entities that has been returned.
	 * @param {String} opts.pageSize Number of entities to return. Maximum of 100. (default to 25)
	 * @param {Object} opts.sortOrder Direction of sorting. (default to Ascending)
	 * @param {Object} opts.jobStatus Search term to filter by jobStatus
	 */
	getExternalcontactsImportJobs(opts) { 
		opts = opts || {};
		

		return this.apiClient.callApi(
			'/api/v2/externalcontacts/import/jobs', 
			'GET', 
			{  },
			{ 'expand': this.apiClient.buildCollectionParam(opts['expand'], 'multi'),'after': opts['after'],'pageSize': opts['pageSize'],'sortOrder': opts['sortOrder'],'jobStatus': opts['jobStatus'] },
			{  },
			{  },
			null, 
			['PureCloud OAuth'], 
			['application/json'],
			['application/json']
		);
	}

	/**
	 * Get setting based on id
	 * 
	 * @param {String} settingsId Settings id
	 */
	getExternalcontactsImportSetting(settingsId) { 
		// verify the required parameter 'settingsId' is set
		if (settingsId === undefined || settingsId === null || settingsId === '') {
			throw 'Missing the required parameter "settingsId" when calling getExternalcontactsImportSetting';
		}

		return this.apiClient.callApi(
			'/api/v2/externalcontacts/import/settings/{settingsId}', 
			'GET', 
			{ 'settingsId': settingsId },
			{  },
			{  },
			{  },
			null, 
			['PureCloud OAuth'], 
			['application/json'],
			['application/json']
		);
	}

	/**
	 * List settings for organization
	 * 
	 * @param {Object} opts Optional parameters
	 * @param {String} opts.after The cursor that points to the end of the set of entities that has been returned.
	 * @param {String} opts.pageSize Number of entities to return. Maximum of 100. (default to 25)
	 * @param {Object} opts.sortOrder Direction of sorting. (default to Ascending)
	 * @param {String} opts.name Search term to filter by settings name
	 */
	getExternalcontactsImportSettings(opts) { 
		opts = opts || {};
		

		return this.apiClient.callApi(
			'/api/v2/externalcontacts/import/settings', 
			'GET', 
			{  },
			{ 'after': opts['after'],'pageSize': opts['pageSize'],'sortOrder': opts['sortOrder'],'name': opts['name'] },
			{  },
			{  },
			null, 
			['PureCloud OAuth'], 
			['application/json'],
			['application/json']
		);
	}

	/**
	 * Fetch an external organization
	 * 
	 * @param {String} externalOrganizationId External Organization ID
	 * @param {Object} opts Optional parameters
	 * @param {Array.<String>} opts.expand which fields, if any, to expand
	 * @param {Boolean} opts.includeTrustors (true or false) whether or not to include trustor information embedded in the externalOrganization
	 */
	getExternalcontactsOrganization(externalOrganizationId, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'externalOrganizationId' is set
		if (externalOrganizationId === undefined || externalOrganizationId === null || externalOrganizationId === '') {
			throw 'Missing the required parameter "externalOrganizationId" when calling getExternalcontactsOrganization';
		}

		return this.apiClient.callApi(
			'/api/v2/externalcontacts/organizations/{externalOrganizationId}', 
			'GET', 
			{ 'externalOrganizationId': externalOrganizationId },
			{ 'expand': this.apiClient.buildCollectionParam(opts['expand'], 'multi'),'includeTrustors': opts['includeTrustors'] },
			{  },
			{  },
			null, 
			['PureCloud OAuth'], 
			['application/json'],
			['application/json']
		);
	}

	/**
	 * Search for external contacts in an external organization
	 * 
	 * @param {String} externalOrganizationId External Organization ID
	 * @param {Object} opts Optional parameters
	 * @param {Number} opts.pageSize Page size (limited to fetching first 1,000 records; pageNumber * pageSize must be <= 1,000) (default to 20)
	 * @param {Number} opts.pageNumber Page number (limited to fetching first 1,000 records; pageNumber * pageSize must be <= 1,000) (default to 1)
	 * @param {String} opts.q User supplied search keywords (no special syntax is currently supported)
	 * @param {String} opts.sortOrder The External Contact field to sort by. Any of: [firstName, lastName, middleName, title]. Direction: [asc, desc]. e.g. firstName:asc, title:desc
	 * @param {Array.<String>} opts.expand which fields, if any, to expand
	 */
	getExternalcontactsOrganizationContacts(externalOrganizationId, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'externalOrganizationId' is set
		if (externalOrganizationId === undefined || externalOrganizationId === null || externalOrganizationId === '') {
			throw 'Missing the required parameter "externalOrganizationId" when calling getExternalcontactsOrganizationContacts';
		}

		return this.apiClient.callApi(
			'/api/v2/externalcontacts/organizations/{externalOrganizationId}/contacts', 
			'GET', 
			{ 'externalOrganizationId': externalOrganizationId },
			{ 'pageSize': opts['pageSize'],'pageNumber': opts['pageNumber'],'q': opts['q'],'sortOrder': opts['sortOrder'],'expand': this.apiClient.buildCollectionParam(opts['expand'], 'multi') },
			{  },
			{  },
			null, 
			['PureCloud OAuth'], 
			['application/json'],
			['application/json']
		);
	}

	/**
	 * List the identifiers for an external organization
	 * 
	 * @param {String} externalOrganizationId External Organization ID
	 */
	getExternalcontactsOrganizationIdentifiers(externalOrganizationId) { 
		// verify the required parameter 'externalOrganizationId' is set
		if (externalOrganizationId === undefined || externalOrganizationId === null || externalOrganizationId === '') {
			throw 'Missing the required parameter "externalOrganizationId" when calling getExternalcontactsOrganizationIdentifiers';
		}

		return this.apiClient.callApi(
			'/api/v2/externalcontacts/organizations/{externalOrganizationId}/identifiers', 
			'GET', 
			{ 'externalOrganizationId': externalOrganizationId },
			{  },
			{  },
			{  },
			null, 
			['PureCloud OAuth'], 
			['application/json'],
			['application/json']
		);
	}

	/**
	 * Fetch a note for an external organization
	 * 
	 * @param {String} externalOrganizationId External Organization Id
	 * @param {String} noteId Note Id
	 * @param {Object} opts Optional parameters
	 * @param {Array.<String>} opts.expand which fields, if any, to expand
	 */
	getExternalcontactsOrganizationNote(externalOrganizationId, noteId, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'externalOrganizationId' is set
		if (externalOrganizationId === undefined || externalOrganizationId === null || externalOrganizationId === '') {
			throw 'Missing the required parameter "externalOrganizationId" when calling getExternalcontactsOrganizationNote';
		}
		// verify the required parameter 'noteId' is set
		if (noteId === undefined || noteId === null || noteId === '') {
			throw 'Missing the required parameter "noteId" when calling getExternalcontactsOrganizationNote';
		}

		return this.apiClient.callApi(
			'/api/v2/externalcontacts/organizations/{externalOrganizationId}/notes/{noteId}', 
			'GET', 
			{ 'externalOrganizationId': externalOrganizationId,'noteId': noteId },
			{ 'expand': this.apiClient.buildCollectionParam(opts['expand'], 'multi') },
			{  },
			{  },
			null, 
			['PureCloud OAuth'], 
			['application/json'],
			['application/json']
		);
	}

	/**
	 * List notes for an external organization
	 * 
	 * @param {String} externalOrganizationId External Organization Id
	 * @param {Object} opts Optional parameters
	 * @param {Number} opts.pageSize Page size (limited to fetching first 1,000 records; pageNumber * pageSize must be <= 1,000) (default to 20)
	 * @param {Number} opts.pageNumber Page number (limited to fetching first 1,000 records; pageNumber * pageSize must be <= 1,000) (default to 1)
	 * @param {String} opts.sortOrder The Note field to sort by. Any of: [createDate]. Direction: [asc, desc]. e.g. createDate:asc, createDate:desc
	 * @param {Array.<String>} opts.expand which fields, if any, to expand
	 */
	getExternalcontactsOrganizationNotes(externalOrganizationId, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'externalOrganizationId' is set
		if (externalOrganizationId === undefined || externalOrganizationId === null || externalOrganizationId === '') {
			throw 'Missing the required parameter "externalOrganizationId" when calling getExternalcontactsOrganizationNotes';
		}

		return this.apiClient.callApi(
			'/api/v2/externalcontacts/organizations/{externalOrganizationId}/notes', 
			'GET', 
			{ 'externalOrganizationId': externalOrganizationId },
			{ 'pageSize': opts['pageSize'],'pageNumber': opts['pageNumber'],'sortOrder': opts['sortOrder'],'expand': this.apiClient.buildCollectionParam(opts['expand'], 'multi') },
			{  },
			{  },
			null, 
			['PureCloud OAuth'], 
			['application/json'],
			['application/json']
		);
	}

	/**
	 * Fetch a relationship for an external organization
	 * 
	 * @param {String} externalOrganizationId External Organization ID
	 * @param {Object} opts Optional parameters
	 * @param {Number} opts.pageSize Page size (limited to fetching first 1,000 records; pageNumber * pageSize must be <= 1,000) (default to 20)
	 * @param {Number} opts.pageNumber Page number (limited to fetching first 1,000 records; pageNumber * pageSize must be <= 1,000) (default to 1)
	 * @param {Array.<String>} opts.expand which fields, if any, to expand
	 * @param {String} opts.sortOrder The Relationship field to sort by. Any of: [createDate, relationship]. Direction: [asc, desc]. e.g. createDate:asc, relationship:desc
	 */
	getExternalcontactsOrganizationRelationships(externalOrganizationId, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'externalOrganizationId' is set
		if (externalOrganizationId === undefined || externalOrganizationId === null || externalOrganizationId === '') {
			throw 'Missing the required parameter "externalOrganizationId" when calling getExternalcontactsOrganizationRelationships';
		}

		return this.apiClient.callApi(
			'/api/v2/externalcontacts/organizations/{externalOrganizationId}/relationships', 
			'GET', 
			{ 'externalOrganizationId': externalOrganizationId },
			{ 'pageSize': opts['pageSize'],'pageNumber': opts['pageNumber'],'expand': this.apiClient.buildCollectionParam(opts['expand'], 'multi'),'sortOrder': opts['sortOrder'] },
			{  },
			{  },
			null, 
			['PureCloud OAuth'], 
			['application/json'],
			['application/json']
		);
	}

	/**
	 * Search for external organizations
	 * 
	 * @param {Object} opts Optional parameters
	 * @param {Number} opts.pageSize Page size (limited to fetching first 1,000 records; pageNumber * pageSize must be <= 1,000) (default to 20)
	 * @param {Number} opts.pageNumber Page number (limited to fetching first 1,000 records; pageNumber * pageSize must be <= 1,000) (default to 1)
	 * @param {String} opts.q Search query
	 * @param {Array.<String>} opts.trustorId Search for external organizations by trustorIds (limit 25). If supplied, the 'q' parameters is ignored. Items are returned in the order requested
	 * @param {String} opts.sortOrder The Organization field to sort by. Any of: [companyType, industry, name]. Direction: [asc, desc]. e.g. companyType:asc, industry:desc
	 * @param {Array.<String>} opts.expand which fields, if any, to expand
	 * @param {Boolean} opts.includeTrustors (true or false) whether or not to include trustor information embedded in the externalOrganization
	 * @param {Array.<String>} opts.divisionIds which divisions to search, up to 50
	 */
	getExternalcontactsOrganizations(opts) { 
		opts = opts || {};
		

		return this.apiClient.callApi(
			'/api/v2/externalcontacts/organizations', 
			'GET', 
			{  },
			{ 'pageSize': opts['pageSize'],'pageNumber': opts['pageNumber'],'q': opts['q'],'trustorId': this.apiClient.buildCollectionParam(opts['trustorId'], 'multi'),'sortOrder': opts['sortOrder'],'expand': this.apiClient.buildCollectionParam(opts['expand'], 'multi'),'includeTrustors': opts['includeTrustors'],'divisionIds': this.apiClient.buildCollectionParam(opts['divisionIds'], 'multi') },
			{  },
			{  },
			null, 
			['PureCloud OAuth'], 
			['application/json'],
			['application/json']
		);
	}

	/**
	 * Get a schema
	 * 
	 * @param {String} schemaId Schema ID
	 */
	getExternalcontactsOrganizationsSchema(schemaId) { 
		// verify the required parameter 'schemaId' is set
		if (schemaId === undefined || schemaId === null || schemaId === '') {
			throw 'Missing the required parameter "schemaId" when calling getExternalcontactsOrganizationsSchema';
		}

		return this.apiClient.callApi(
			'/api/v2/externalcontacts/organizations/schemas/{schemaId}', 
			'GET', 
			{ 'schemaId': schemaId },
			{  },
			{  },
			{  },
			null, 
			['PureCloud OAuth'], 
			['application/json'],
			['application/json']
		);
	}

	/**
	 * Get a specific version of a schema
	 * 
	 * @param {String} schemaId Schema ID
	 * @param {String} versionId Schema version
	 */
	getExternalcontactsOrganizationsSchemaVersion(schemaId, versionId) { 
		// verify the required parameter 'schemaId' is set
		if (schemaId === undefined || schemaId === null || schemaId === '') {
			throw 'Missing the required parameter "schemaId" when calling getExternalcontactsOrganizationsSchemaVersion';
		}
		// verify the required parameter 'versionId' is set
		if (versionId === undefined || versionId === null || versionId === '') {
			throw 'Missing the required parameter "versionId" when calling getExternalcontactsOrganizationsSchemaVersion';
		}

		return this.apiClient.callApi(
			'/api/v2/externalcontacts/organizations/schemas/{schemaId}/versions/{versionId}', 
			'GET', 
			{ 'schemaId': schemaId,'versionId': versionId },
			{  },
			{  },
			{  },
			null, 
			['PureCloud OAuth'], 
			['application/json'],
			['application/json']
		);
	}

	/**
	 * Get all versions of an external organization's schema
	 * 
	 * @param {String} schemaId Schema ID
	 */
	getExternalcontactsOrganizationsSchemaVersions(schemaId) { 
		// verify the required parameter 'schemaId' is set
		if (schemaId === undefined || schemaId === null || schemaId === '') {
			throw 'Missing the required parameter "schemaId" when calling getExternalcontactsOrganizationsSchemaVersions';
		}

		return this.apiClient.callApi(
			'/api/v2/externalcontacts/organizations/schemas/{schemaId}/versions', 
			'GET', 
			{ 'schemaId': schemaId },
			{  },
			{  },
			{  },
			null, 
			['PureCloud OAuth'], 
			['application/json'],
			['application/json']
		);
	}

	/**
	 * Get a list of schemas.
	 * 
	 */
	getExternalcontactsOrganizationsSchemas() { 

		return this.apiClient.callApi(
			'/api/v2/externalcontacts/organizations/schemas', 
			'GET', 
			{  },
			{  },
			{  },
			{  },
			null, 
			['PureCloud OAuth'], 
			['application/json'],
			['application/json']
		);
	}

	/**
	 * Get a specific named core type.
	 * 
	 * @param {String} coreTypeName Name of the core type
	 */
	getExternalcontactsOrganizationsSchemasCoretype(coreTypeName) { 
		// verify the required parameter 'coreTypeName' is set
		if (coreTypeName === undefined || coreTypeName === null || coreTypeName === '') {
			throw 'Missing the required parameter "coreTypeName" when calling getExternalcontactsOrganizationsSchemasCoretype';
		}

		return this.apiClient.callApi(
			'/api/v2/externalcontacts/organizations/schemas/coretypes/{coreTypeName}', 
			'GET', 
			{ 'coreTypeName': coreTypeName },
			{  },
			{  },
			{  },
			null, 
			['PureCloud OAuth'], 
			['application/json'],
			['application/json']
		);
	}

	/**
	 * Get the core types from which all schemas are built.
	 * 
	 */
	getExternalcontactsOrganizationsSchemasCoretypes() { 

		return this.apiClient.callApi(
			'/api/v2/externalcontacts/organizations/schemas/coretypes', 
			'GET', 
			{  },
			{  },
			{  },
			{  },
			null, 
			['PureCloud OAuth'], 
			['application/json'],
			['application/json']
		);
	}

	/**
	 * Get quantitative limits on schemas
	 * 
	 */
	getExternalcontactsOrganizationsSchemasLimits() { 

		return this.apiClient.callApi(
			'/api/v2/externalcontacts/organizations/schemas/limits', 
			'GET', 
			{  },
			{  },
			{  },
			{  },
			null, 
			['PureCloud OAuth'], 
			['application/json'],
			['application/json']
		);
	}

	/**
	 * Fetch a relationship
	 * 
	 * @param {String} relationshipId Relationship Id
	 * @param {Object} opts Optional parameters
	 * @param {Array.<String>} opts.expand which fields, if any, to expand
	 */
	getExternalcontactsRelationship(relationshipId, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'relationshipId' is set
		if (relationshipId === undefined || relationshipId === null || relationshipId === '') {
			throw 'Missing the required parameter "relationshipId" when calling getExternalcontactsRelationship';
		}

		return this.apiClient.callApi(
			'/api/v2/externalcontacts/relationships/{relationshipId}', 
			'GET', 
			{ 'relationshipId': relationshipId },
			{ 'expand': this.apiClient.buildCollectionParam(opts['expand'], 'multi') },
			{  },
			{  },
			null, 
			['PureCloud OAuth'], 
			['application/json'],
			['application/json']
		);
	}

	/**
	 * Look up contacts based on an attribute. Maximum of 25 values returned.
	 * 
	 * @param {String} lookupVal User supplied value to lookup contacts (supports email addresses, e164 phone numbers, Twitter screen names)
	 * @param {Object} opts Optional parameters
	 * @param {Array.<String>} opts.expand which field, if any, to expand
	 * @param {String} opts.divisionId Specifies which division to lookup contacts in, for the given lookup value (default to *)
	 */
	getExternalcontactsReversewhitepageslookup(lookupVal, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'lookupVal' is set
		if (lookupVal === undefined || lookupVal === null) {
			throw 'Missing the required parameter "lookupVal" when calling getExternalcontactsReversewhitepageslookup';
		}

		return this.apiClient.callApi(
			'/api/v2/externalcontacts/reversewhitepageslookup', 
			'GET', 
			{  },
			{ 'lookupVal': lookupVal,'expand': this.apiClient.buildCollectionParam(opts['expand'], 'multi'),'divisionId': opts['divisionId'] },
			{  },
			{  },
			null, 
			['PureCloud OAuth'], 
			['application/json'],
			['application/json']
		);
	}

	/**
	 * Scan for external contacts using paging
	 * 
	 * @param {Object} opts Optional parameters
	 * @param {Number} opts.limit The number of contacts per page; must be between 10 and 200, default is 100
	 * @param {String} opts.cursor Indicates where to resume query results (not required for first page), each page returns a new cursor with a 24h TTL
	 * @param {String} opts.divisionId The division to scan over (default to *)
	 */
	getExternalcontactsScanContacts(opts) { 
		opts = opts || {};
		

		return this.apiClient.callApi(
			'/api/v2/externalcontacts/scan/contacts', 
			'GET', 
			{  },
			{ 'limit': opts['limit'],'cursor': opts['cursor'],'divisionId': opts['divisionId'] },
			{  },
			{  },
			null, 
			['PureCloud OAuth'], 
			['application/json'],
			['application/json']
		);
	}

	/**
	 * Scan for external contacts using paging
	 * 
	 * @param {Object} opts Optional parameters
	 * @param {Number} opts.limit The number of contacts per page; must be between 10 and 200, default is 100
	 * @param {String} opts.cursor Indicates where to resume query results (not required for first page), each page returns a new cursor with a 24h TTL
	 */
	getExternalcontactsScanContactsDivisionviewsAll(opts) { 
		opts = opts || {};
		

		return this.apiClient.callApi(
			'/api/v2/externalcontacts/scan/contacts/divisionviews/all', 
			'GET', 
			{  },
			{ 'limit': opts['limit'],'cursor': opts['cursor'] },
			{  },
			{  },
			null, 
			['PureCloud OAuth'], 
			['application/json'],
			['application/json']
		);
	}

	/**
	 * Scan for notes using paging
	 * 
	 * @param {Object} opts Optional parameters
	 * @param {Number} opts.limit The number of notes per page; must be between 10 and 200, default is 100
	 * @param {String} opts.cursor Indicates where to resume query results (not required for first page), each page returns a new cursor with a 24h TTL
	 * @param {String} opts.divisionId The division to scan over (default to *)
	 */
	getExternalcontactsScanNotes(opts) { 
		opts = opts || {};
		

		return this.apiClient.callApi(
			'/api/v2/externalcontacts/scan/notes', 
			'GET', 
			{  },
			{ 'limit': opts['limit'],'cursor': opts['cursor'],'divisionId': opts['divisionId'] },
			{  },
			{  },
			null, 
			['PureCloud OAuth'], 
			['application/json'],
			['application/json']
		);
	}

	/**
	 * Scan for notes using paging
	 * 
	 * @param {Object} opts Optional parameters
	 * @param {Number} opts.limit The number of notes per page; must be between 10 and 200, default is 100
	 * @param {String} opts.cursor Indicates where to resume query results (not required for first page), each page returns a new cursor with a 24h TTL
	 */
	getExternalcontactsScanNotesDivisionviewsAll(opts) { 
		opts = opts || {};
		

		return this.apiClient.callApi(
			'/api/v2/externalcontacts/scan/notes/divisionviews/all', 
			'GET', 
			{  },
			{ 'limit': opts['limit'],'cursor': opts['cursor'] },
			{  },
			{  },
			null, 
			['PureCloud OAuth'], 
			['application/json'],
			['application/json']
		);
	}

	/**
	 * Scan for external organizations using paging
	 * 
	 * @param {Object} opts Optional parameters
	 * @param {Number} opts.limit The number of organizations per page; must be between 10 and 200, default is 100
	 * @param {String} opts.cursor Indicates where to resume query results (not required for first page), each page returns a new cursor with a 24h TTL
	 * @param {String} opts.divisionId The division to scan over (default to *)
	 */
	getExternalcontactsScanOrganizations(opts) { 
		opts = opts || {};
		

		return this.apiClient.callApi(
			'/api/v2/externalcontacts/scan/organizations', 
			'GET', 
			{  },
			{ 'limit': opts['limit'],'cursor': opts['cursor'],'divisionId': opts['divisionId'] },
			{  },
			{  },
			null, 
			['PureCloud OAuth'], 
			['application/json'],
			['application/json']
		);
	}

	/**
	 * Scan for external organizations using paging
	 * 
	 * @param {Object} opts Optional parameters
	 * @param {Number} opts.limit The number of organizations per page; must be between 10 and 200, default is 100
	 * @param {String} opts.cursor Indicates where to resume query results (not required for first page), each page returns a new cursor with a 24h TTL
	 */
	getExternalcontactsScanOrganizationsDivisionviewsAll(opts) { 
		opts = opts || {};
		

		return this.apiClient.callApi(
			'/api/v2/externalcontacts/scan/organizations/divisionviews/all', 
			'GET', 
			{  },
			{ 'limit': opts['limit'],'cursor': opts['cursor'] },
			{  },
			{  },
			null, 
			['PureCloud OAuth'], 
			['application/json'],
			['application/json']
		);
	}

	/**
	 * Scan for relationships
	 * 
	 * @param {Object} opts Optional parameters
	 * @param {Number} opts.limit The number of relationships per page; must be between 10 and 200, default is 100
	 * @param {String} opts.cursor Indicates where to resume query results (not required for first page), each page returns a new cursor with a 24h TTL
	 * @param {String} opts.divisionId The division to scan over (default to *)
	 */
	getExternalcontactsScanRelationships(opts) { 
		opts = opts || {};
		

		return this.apiClient.callApi(
			'/api/v2/externalcontacts/scan/relationships', 
			'GET', 
			{  },
			{ 'limit': opts['limit'],'cursor': opts['cursor'],'divisionId': opts['divisionId'] },
			{  },
			{  },
			null, 
			['PureCloud OAuth'], 
			['application/json'],
			['application/json']
		);
	}

	/**
	 * Scan for relationships
	 * 
	 * @param {Object} opts Optional parameters
	 * @param {Number} opts.limit The number of relationships per page; must be between 10 and 200, default is 100
	 * @param {String} opts.cursor Indicates where to resume query results (not required for first page), each page returns a new cursor with a 24h TTL
	 */
	getExternalcontactsScanRelationshipsDivisionviewsAll(opts) { 
		opts = opts || {};
		

		return this.apiClient.callApi(
			'/api/v2/externalcontacts/scan/relationships/divisionviews/all', 
			'GET', 
			{  },
			{ 'limit': opts['limit'],'cursor': opts['cursor'] },
			{  },
			{  },
			null, 
			['PureCloud OAuth'], 
			['application/json'],
			['application/json']
		);
	}

	/**
	 * Claim or release identifiers for a contact
	 * 
	 * @param {String} contactId ExternalContact ID
	 * @param {Object} body ClaimRequest
	 */
	patchExternalcontactsContactIdentifiers(contactId, body) { 
		// verify the required parameter 'contactId' is set
		if (contactId === undefined || contactId === null || contactId === '') {
			throw 'Missing the required parameter "contactId" when calling patchExternalcontactsContactIdentifiers';
		}
		// verify the required parameter 'body' is set
		if (body === undefined || body === null) {
			throw 'Missing the required parameter "body" when calling patchExternalcontactsContactIdentifiers';
		}

		return this.apiClient.callApi(
			'/api/v2/externalcontacts/contacts/{contactId}/identifiers', 
			'PATCH', 
			{ 'contactId': contactId },
			{  },
			{  },
			{  },
			body, 
			['PureCloud OAuth'], 
			['application/json'],
			['application/json']
		);
	}

	/**
	 * Claim or release identifiers for an external organization
	 * 
	 * @param {String} externalOrganizationId External Organization ID
	 * @param {Object} body ClaimRequest
	 */
	patchExternalcontactsOrganizationIdentifiers(externalOrganizationId, body) { 
		// verify the required parameter 'externalOrganizationId' is set
		if (externalOrganizationId === undefined || externalOrganizationId === null || externalOrganizationId === '') {
			throw 'Missing the required parameter "externalOrganizationId" when calling patchExternalcontactsOrganizationIdentifiers';
		}
		// verify the required parameter 'body' is set
		if (body === undefined || body === null) {
			throw 'Missing the required parameter "body" when calling patchExternalcontactsOrganizationIdentifiers';
		}

		return this.apiClient.callApi(
			'/api/v2/externalcontacts/organizations/{externalOrganizationId}/identifiers', 
			'PATCH', 
			{ 'externalOrganizationId': externalOrganizationId },
			{  },
			{  },
			{  },
			body, 
			['PureCloud OAuth'], 
			['application/json'],
			['application/json']
		);
	}

	/**
	 * Bulk fetch contacts
	 * 
	 * @param {Object} body Contact ids
	 */
	postExternalcontactsBulkContacts(body) { 
		// verify the required parameter 'body' is set
		if (body === undefined || body === null) {
			throw 'Missing the required parameter "body" when calling postExternalcontactsBulkContacts';
		}

		return this.apiClient.callApi(
			'/api/v2/externalcontacts/bulk/contacts', 
			'POST', 
			{  },
			{  },
			{  },
			{  },
			body, 
			['PureCloud OAuth'], 
			['application/json'],
			['application/json']
		);
	}

	/**
	 * Bulk add contacts
	 * 
	 * @param {Object} body Contacts
	 */
	postExternalcontactsBulkContactsAdd(body) { 
		// verify the required parameter 'body' is set
		if (body === undefined || body === null) {
			throw 'Missing the required parameter "body" when calling postExternalcontactsBulkContactsAdd';
		}

		return this.apiClient.callApi(
			'/api/v2/externalcontacts/bulk/contacts/add', 
			'POST', 
			{  },
			{  },
			{  },
			{  },
			body, 
			['PureCloud OAuth'], 
			['application/json'],
			['application/json']
		);
	}

	/**
	 * Bulk fetch contacts across divisions
	 * 
	 * @param {Object} body Contact ids
	 */
	postExternalcontactsBulkContactsDivisionviews(body) { 
		// verify the required parameter 'body' is set
		if (body === undefined || body === null) {
			throw 'Missing the required parameter "body" when calling postExternalcontactsBulkContactsDivisionviews';
		}

		return this.apiClient.callApi(
			'/api/v2/externalcontacts/bulk/contacts/divisionviews', 
			'POST', 
			{  },
			{  },
			{  },
			{  },
			body, 
			['PureCloud OAuth'], 
			['application/json'],
			['application/json']
		);
	}

	/**
	 * Bulk Enrich Contacts - Run up to 10 Enrich operations per request
	 * See the API endpoint /externalcontacts/contacts/enrich for docs on individual Enrich operations.
	 * @param {Object} body Contact Enrich Requests
	 * @param {Object} opts Optional parameters
	 * @param {Boolean} opts.dryRun If true, the request will not make any modifications, but will show you what the end result *would* be.
	 */
	postExternalcontactsBulkContactsEnrich(body, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'body' is set
		if (body === undefined || body === null) {
			throw 'Missing the required parameter "body" when calling postExternalcontactsBulkContactsEnrich';
		}

		return this.apiClient.callApi(
			'/api/v2/externalcontacts/bulk/contacts/enrich', 
			'POST', 
			{  },
			{ 'dryRun': opts['dryRun'] },
			{  },
			{  },
			body, 
			['PureCloud OAuth'], 
			['application/json'],
			['application/json']
		);
	}

	/**
	 * Bulk remove contacts
	 * 
	 * @param {Object} body Contact ids
	 */
	postExternalcontactsBulkContactsRemove(body) { 
		// verify the required parameter 'body' is set
		if (body === undefined || body === null) {
			throw 'Missing the required parameter "body" when calling postExternalcontactsBulkContactsRemove';
		}

		return this.apiClient.callApi(
			'/api/v2/externalcontacts/bulk/contacts/remove', 
			'POST', 
			{  },
			{  },
			{  },
			{  },
			body, 
			['PureCloud OAuth'], 
			['application/json'],
			['application/json']
		);
	}

	/**
	 * Bulk fetch unresolved ancestor contacts
	 * 
	 * @param {Object} body Contact ids
	 */
	postExternalcontactsBulkContactsUnresolved(body) { 
		// verify the required parameter 'body' is set
		if (body === undefined || body === null) {
			throw 'Missing the required parameter "body" when calling postExternalcontactsBulkContactsUnresolved';
		}

		return this.apiClient.callApi(
			'/api/v2/externalcontacts/bulk/contacts/unresolved', 
			'POST', 
			{  },
			{  },
			{  },
			{  },
			body, 
			['PureCloud OAuth'], 
			['application/json'],
			['application/json']
		);
	}

	/**
	 * Bulk update contacts
	 * 
	 * @param {Object} body Contacts
	 */
	postExternalcontactsBulkContactsUpdate(body) { 
		// verify the required parameter 'body' is set
		if (body === undefined || body === null) {
			throw 'Missing the required parameter "body" when calling postExternalcontactsBulkContactsUpdate';
		}

		return this.apiClient.callApi(
			'/api/v2/externalcontacts/bulk/contacts/update', 
			'POST', 
			{  },
			{  },
			{  },
			{  },
			body, 
			['PureCloud OAuth'], 
			['application/json'],
			['application/json']
		);
	}

	/**
	 * Bulk fetch notes
	 * 
	 * @param {Object} body Note ids
	 */
	postExternalcontactsBulkNotes(body) { 
		// verify the required parameter 'body' is set
		if (body === undefined || body === null) {
			throw 'Missing the required parameter "body" when calling postExternalcontactsBulkNotes';
		}

		return this.apiClient.callApi(
			'/api/v2/externalcontacts/bulk/notes', 
			'POST', 
			{  },
			{  },
			{  },
			{  },
			body, 
			['PureCloud OAuth'], 
			['application/json'],
			['application/json']
		);
	}

	/**
	 * Bulk add notes
	 * 
	 * @param {Object} body Notes
	 */
	postExternalcontactsBulkNotesAdd(body) { 
		// verify the required parameter 'body' is set
		if (body === undefined || body === null) {
			throw 'Missing the required parameter "body" when calling postExternalcontactsBulkNotesAdd';
		}

		return this.apiClient.callApi(
			'/api/v2/externalcontacts/bulk/notes/add', 
			'POST', 
			{  },
			{  },
			{  },
			{  },
			body, 
			['PureCloud OAuth'], 
			['application/json'],
			['application/json']
		);
	}

	/**
	 * Bulk remove notes
	 * 
	 * @param {Object} body Note ids
	 */
	postExternalcontactsBulkNotesRemove(body) { 
		// verify the required parameter 'body' is set
		if (body === undefined || body === null) {
			throw 'Missing the required parameter "body" when calling postExternalcontactsBulkNotesRemove';
		}

		return this.apiClient.callApi(
			'/api/v2/externalcontacts/bulk/notes/remove', 
			'POST', 
			{  },
			{  },
			{  },
			{  },
			body, 
			['PureCloud OAuth'], 
			['application/json'],
			['application/json']
		);
	}

	/**
	 * Bulk update notes
	 * 
	 * @param {Object} body Notes
	 */
	postExternalcontactsBulkNotesUpdate(body) { 
		// verify the required parameter 'body' is set
		if (body === undefined || body === null) {
			throw 'Missing the required parameter "body" when calling postExternalcontactsBulkNotesUpdate';
		}

		return this.apiClient.callApi(
			'/api/v2/externalcontacts/bulk/notes/update', 
			'POST', 
			{  },
			{  },
			{  },
			{  },
			body, 
			['PureCloud OAuth'], 
			['application/json'],
			['application/json']
		);
	}

	/**
	 * Bulk fetch organizations
	 * 
	 * @param {Object} body Organizations ids
	 */
	postExternalcontactsBulkOrganizations(body) { 
		// verify the required parameter 'body' is set
		if (body === undefined || body === null) {
			throw 'Missing the required parameter "body" when calling postExternalcontactsBulkOrganizations';
		}

		return this.apiClient.callApi(
			'/api/v2/externalcontacts/bulk/organizations', 
			'POST', 
			{  },
			{  },
			{  },
			{  },
			body, 
			['PureCloud OAuth'], 
			['application/json'],
			['application/json']
		);
	}

	/**
	 * Bulk add organizations
	 * 
	 * @param {Object} body Organizations
	 */
	postExternalcontactsBulkOrganizationsAdd(body) { 
		// verify the required parameter 'body' is set
		if (body === undefined || body === null) {
			throw 'Missing the required parameter "body" when calling postExternalcontactsBulkOrganizationsAdd';
		}

		return this.apiClient.callApi(
			'/api/v2/externalcontacts/bulk/organizations/add', 
			'POST', 
			{  },
			{  },
			{  },
			{  },
			body, 
			['PureCloud OAuth'], 
			['application/json'],
			['application/json']
		);
	}

	/**
	 * Bulk fetch organizations across divisions
	 * 
	 * @param {Object} body Organizations ids
	 */
	postExternalcontactsBulkOrganizationsDivisionviews(body) { 
		// verify the required parameter 'body' is set
		if (body === undefined || body === null) {
			throw 'Missing the required parameter "body" when calling postExternalcontactsBulkOrganizationsDivisionviews';
		}

		return this.apiClient.callApi(
			'/api/v2/externalcontacts/bulk/organizations/divisionviews', 
			'POST', 
			{  },
			{  },
			{  },
			{  },
			body, 
			['PureCloud OAuth'], 
			['application/json'],
			['application/json']
		);
	}

	/**
	 * Bulk enrich external organizations - Run up to 10 Enrich operations per request
	 * See the API endpoint /externalcontacts/organizations/enrich for docs on individual Enrich operations.
	 * @param {Object} body External Organization Enrich Requests
	 * @param {Object} opts Optional parameters
	 * @param {Boolean} opts.dryRun If true, the request will not make any modifications, but will show you what the end result *would* be.
	 */
	postExternalcontactsBulkOrganizationsEnrich(body, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'body' is set
		if (body === undefined || body === null) {
			throw 'Missing the required parameter "body" when calling postExternalcontactsBulkOrganizationsEnrich';
		}

		return this.apiClient.callApi(
			'/api/v2/externalcontacts/bulk/organizations/enrich', 
			'POST', 
			{  },
			{ 'dryRun': opts['dryRun'] },
			{  },
			{  },
			body, 
			['PureCloud OAuth'], 
			['application/json'],
			['application/json']
		);
	}

	/**
	 * Bulk remove organizations
	 * 
	 * @param {Object} body Organization ids
	 */
	postExternalcontactsBulkOrganizationsRemove(body) { 
		// verify the required parameter 'body' is set
		if (body === undefined || body === null) {
			throw 'Missing the required parameter "body" when calling postExternalcontactsBulkOrganizationsRemove';
		}

		return this.apiClient.callApi(
			'/api/v2/externalcontacts/bulk/organizations/remove', 
			'POST', 
			{  },
			{  },
			{  },
			{  },
			body, 
			['PureCloud OAuth'], 
			['application/json'],
			['application/json']
		);
	}

	/**
	 * Bulk update organizations
	 * 
	 * @param {Object} body Organizations
	 */
	postExternalcontactsBulkOrganizationsUpdate(body) { 
		// verify the required parameter 'body' is set
		if (body === undefined || body === null) {
			throw 'Missing the required parameter "body" when calling postExternalcontactsBulkOrganizationsUpdate';
		}

		return this.apiClient.callApi(
			'/api/v2/externalcontacts/bulk/organizations/update', 
			'POST', 
			{  },
			{  },
			{  },
			{  },
			body, 
			['PureCloud OAuth'], 
			['application/json'],
			['application/json']
		);
	}

	/**
	 * Bulk fetch relationships
	 * 
	 * @param {Object} body Relationships ids
	 */
	postExternalcontactsBulkRelationships(body) { 
		// verify the required parameter 'body' is set
		if (body === undefined || body === null) {
			throw 'Missing the required parameter "body" when calling postExternalcontactsBulkRelationships';
		}

		return this.apiClient.callApi(
			'/api/v2/externalcontacts/bulk/relationships', 
			'POST', 
			{  },
			{  },
			{  },
			{  },
			body, 
			['PureCloud OAuth'], 
			['application/json'],
			['application/json']
		);
	}

	/**
	 * Bulk add relationships
	 * 
	 * @param {Object} body Relationships
	 */
	postExternalcontactsBulkRelationshipsAdd(body) { 
		// verify the required parameter 'body' is set
		if (body === undefined || body === null) {
			throw 'Missing the required parameter "body" when calling postExternalcontactsBulkRelationshipsAdd';
		}

		return this.apiClient.callApi(
			'/api/v2/externalcontacts/bulk/relationships/add', 
			'POST', 
			{  },
			{  },
			{  },
			{  },
			body, 
			['PureCloud OAuth'], 
			['application/json'],
			['application/json']
		);
	}

	/**
	 * Bulk remove relationships
	 * 
	 * @param {Object} body Relationships ids
	 */
	postExternalcontactsBulkRelationshipsRemove(body) { 
		// verify the required parameter 'body' is set
		if (body === undefined || body === null) {
			throw 'Missing the required parameter "body" when calling postExternalcontactsBulkRelationshipsRemove';
		}

		return this.apiClient.callApi(
			'/api/v2/externalcontacts/bulk/relationships/remove', 
			'POST', 
			{  },
			{  },
			{  },
			{  },
			body, 
			['PureCloud OAuth'], 
			['application/json'],
			['application/json']
		);
	}

	/**
	 * Bulk update relationships
	 * 
	 * @param {Object} body Relationships
	 */
	postExternalcontactsBulkRelationshipsUpdate(body) { 
		// verify the required parameter 'body' is set
		if (body === undefined || body === null) {
			throw 'Missing the required parameter "body" when calling postExternalcontactsBulkRelationshipsUpdate';
		}

		return this.apiClient.callApi(
			'/api/v2/externalcontacts/bulk/relationships/update', 
			'POST', 
			{  },
			{  },
			{  },
			{  },
			body, 
			['PureCloud OAuth'], 
			['application/json'],
			['application/json']
		);
	}

	/**
	 * Create a note for an external contact
	 * 
	 * @param {String} contactId ExternalContact Id
	 * @param {Object} body ExternalContact
	 */
	postExternalcontactsContactNotes(contactId, body) { 
		// verify the required parameter 'contactId' is set
		if (contactId === undefined || contactId === null || contactId === '') {
			throw 'Missing the required parameter "contactId" when calling postExternalcontactsContactNotes';
		}
		// verify the required parameter 'body' is set
		if (body === undefined || body === null) {
			throw 'Missing the required parameter "body" when calling postExternalcontactsContactNotes';
		}

		return this.apiClient.callApi(
			'/api/v2/externalcontacts/contacts/{contactId}/notes', 
			'POST', 
			{ 'contactId': contactId },
			{  },
			{  },
			{  },
			body, 
			['PureCloud OAuth'], 
			['application/json'],
			['application/json']
		);
	}

	/**
	 * Promote an observed contact (ephemeral or identified) to a curated contact
	 * 
	 * @param {String} contactId ExternalContact ID
	 */
	postExternalcontactsContactPromotion(contactId) { 
		// verify the required parameter 'contactId' is set
		if (contactId === undefined || contactId === null || contactId === '') {
			throw 'Missing the required parameter "contactId" when calling postExternalcontactsContactPromotion';
		}

		return this.apiClient.callApi(
			'/api/v2/externalcontacts/contacts/{contactId}/promotion', 
			'POST', 
			{ 'contactId': contactId },
			{  },
			{  },
			{  },
			null, 
			['PureCloud OAuth'], 
			['application/json'],
			['application/json']
		);
	}

	/**
	 * Create an external contact
	 * 
	 * @param {Object} body ExternalContact
	 */
	postExternalcontactsContacts(body) { 
		// verify the required parameter 'body' is set
		if (body === undefined || body === null) {
			throw 'Missing the required parameter "body" when calling postExternalcontactsContacts';
		}

		return this.apiClient.callApi(
			'/api/v2/externalcontacts/contacts', 
			'POST', 
			{  },
			{  },
			{  },
			{  },
			body, 
			['PureCloud OAuth'], 
			['application/json'],
			['application/json']
		);
	}

	/**
	 * Modify or create an External Contact, with powerful behaviors for finding and combining data with pre-existing Contacts.
	 * You may also submit multiple Enrich operations in one request via the Bulk Enrich API at /externalcontacts/bulk/contacts. A 201 response status indicates that a new Contact was created, whereas a 200 status indicates that a Contact was updated or a merge occurred.
	 * @param {Object} body ContactEnrichRequest
	 * @param {Object} opts Optional parameters
	 * @param {Boolean} opts.dryRun If true, the request will not make any modifications, but will show you what the end result *would* be.
	 */
	postExternalcontactsContactsEnrich(body, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'body' is set
		if (body === undefined || body === null) {
			throw 'Missing the required parameter "body" when calling postExternalcontactsContactsEnrich';
		}

		return this.apiClient.callApi(
			'/api/v2/externalcontacts/contacts/enrich', 
			'POST', 
			{  },
			{ 'dryRun': opts['dryRun'] },
			{  },
			{  },
			body, 
			['PureCloud OAuth'], 
			['application/json'],
			['application/json']
		);
	}

	/**
	 * Create bulk export
	 * 
	 * @param {Object} body Export
	 */
	postExternalcontactsContactsExports(body) { 
		// verify the required parameter 'body' is set
		if (body === undefined || body === null) {
			throw 'Missing the required parameter "body" when calling postExternalcontactsContactsExports';
		}

		return this.apiClient.callApi(
			'/api/v2/externalcontacts/contacts/exports', 
			'POST', 
			{  },
			{  },
			{  },
			{  },
			body, 
			['PureCloud OAuth'], 
			['application/json'],
			['application/json']
		);
	}

	/**
	 * Merge up to 25 contacts into a new contact record
	 * Merge operation may fail if the resulting mergeset exceeds our default limit of 52. The valueOverride field lets you override any of the Contact fields post-merge. If any Contact field is left null in `valueOverride`, it will be taken from the most recently-modified contact in the merge set. Exception for *phone/*email fields: Conflicting data will be moved to any other available phone/email fields in the merged contact.
	 * @param {Object} body MergeRequest
	 */
	postExternalcontactsContactsMerge(body) { 
		// verify the required parameter 'body' is set
		if (body === undefined || body === null) {
			throw 'Missing the required parameter "body" when calling postExternalcontactsContactsMerge';
		}

		return this.apiClient.callApi(
			'/api/v2/externalcontacts/contacts/merge', 
			'POST', 
			{  },
			{  },
			{  },
			{  },
			body, 
			['PureCloud OAuth'], 
			['application/json'],
			['application/json']
		);
	}

	/**
	 * Create a schema
	 * 
	 * @param {Object} body Schema
	 */
	postExternalcontactsContactsSchemas(body) { 
		// verify the required parameter 'body' is set
		if (body === undefined || body === null) {
			throw 'Missing the required parameter "body" when calling postExternalcontactsContactsSchemas';
		}

		return this.apiClient.callApi(
			'/api/v2/externalcontacts/contacts/schemas', 
			'POST', 
			{  },
			{  },
			{  },
			{  },
			body, 
			['PureCloud OAuth'], 
			['application/json'],
			['application/json']
		);
	}

	/**
	 * Create an External Source
	 * 
	 * @param {Object} body External Source
	 */
	postExternalcontactsExternalsources(body) { 
		// verify the required parameter 'body' is set
		if (body === undefined || body === null) {
			throw 'Missing the required parameter "body" when calling postExternalcontactsExternalsources';
		}

		return this.apiClient.callApi(
			'/api/v2/externalcontacts/externalsources', 
			'POST', 
			{  },
			{  },
			{  },
			{  },
			body, 
			['PureCloud OAuth'], 
			['application/json'],
			['application/json']
		);
	}

	/**
	 * Fetch a contact using an identifier type and value.
	 * NOTE: Deprecated. Please use /api/v2/externalcontacts/identifierlookup/contacts as an alternative endpoint instead. Phone number identifier values must be provided with the country code and a leading + symbol. Example: "+1 704 298 4733"
	 * @param {Object} identifier 
	 * @param {Object} opts Optional parameters
	 * @param {Array.<String>} opts.expand which field, if any, to expand
	 * @deprecated
	 */
	postExternalcontactsIdentifierlookup(identifier, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'identifier' is set
		if (identifier === undefined || identifier === null) {
			throw 'Missing the required parameter "identifier" when calling postExternalcontactsIdentifierlookup';
		}

		return this.apiClient.callApi(
			'/api/v2/externalcontacts/identifierlookup', 
			'POST', 
			{  },
			{ 'expand': this.apiClient.buildCollectionParam(opts['expand'], 'multi') },
			{  },
			{  },
			identifier, 
			['PureCloud OAuth'], 
			['application/json'],
			['application/json']
		);
	}

	/**
	 * Fetch a contact using an identifier type and value.
	 * Phone number identifier values must be provided with the country code and a leading + symbol. Example: "+1 704 298 4733"
	 * @param {Object} identifier 
	 * @param {Object} opts Optional parameters
	 * @param {Array.<String>} opts.expand which field, if any, to expand
	 */
	postExternalcontactsIdentifierlookupContacts(identifier, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'identifier' is set
		if (identifier === undefined || identifier === null) {
			throw 'Missing the required parameter "identifier" when calling postExternalcontactsIdentifierlookupContacts';
		}

		return this.apiClient.callApi(
			'/api/v2/externalcontacts/identifierlookup/contacts', 
			'POST', 
			{  },
			{ 'expand': this.apiClient.buildCollectionParam(opts['expand'], 'multi') },
			{  },
			{  },
			identifier, 
			['PureCloud OAuth'], 
			['application/json'],
			['application/json']
		);
	}

	/**
	 * Fetch an external organization using an identifier type and value.
	 * This endpoint will only accept ExternalId type identifiers.
	 * @param {Object} identifier 
	 * @param {Object} opts Optional parameters
	 * @param {Array.<String>} opts.expand which field, if any, to expand
	 */
	postExternalcontactsIdentifierlookupOrganizations(identifier, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'identifier' is set
		if (identifier === undefined || identifier === null) {
			throw 'Missing the required parameter "identifier" when calling postExternalcontactsIdentifierlookupOrganizations';
		}

		return this.apiClient.callApi(
			'/api/v2/externalcontacts/identifierlookup/organizations', 
			'POST', 
			{  },
			{ 'expand': this.apiClient.buildCollectionParam(opts['expand'], 'multi') },
			{  },
			{  },
			identifier, 
			['PureCloud OAuth'], 
			['application/json'],
			['application/json']
		);
	}

	/**
	 * Create CSV import job
	 * 
	 * @param {Object} body ImportRequest
	 */
	postExternalcontactsImportCsvJobs(body) { 
		// verify the required parameter 'body' is set
		if (body === undefined || body === null) {
			throw 'Missing the required parameter "body" when calling postExternalcontactsImportCsvJobs';
		}

		return this.apiClient.callApi(
			'/api/v2/externalcontacts/import/csv/jobs', 
			'POST', 
			{  },
			{  },
			{  },
			{  },
			body, 
			['PureCloud OAuth'], 
			['application/json'],
			['application/json']
		);
	}

	/**
	 * Create settings for CSV import
	 * 
	 * @param {Object} body Settings
	 */
	postExternalcontactsImportCsvSettings(body) { 
		// verify the required parameter 'body' is set
		if (body === undefined || body === null) {
			throw 'Missing the required parameter "body" when calling postExternalcontactsImportCsvSettings';
		}

		return this.apiClient.callApi(
			'/api/v2/externalcontacts/import/csv/settings', 
			'POST', 
			{  },
			{  },
			{  },
			{  },
			body, 
			['PureCloud OAuth'], 
			['application/json'],
			['application/json']
		);
	}

	/**
	 * Get url for CSV upload
	 * 
	 * @param {Object} body UploadRequest
	 */
	postExternalcontactsImportCsvUploads(body) { 
		// verify the required parameter 'body' is set
		if (body === undefined || body === null) {
			throw 'Missing the required parameter "body" when calling postExternalcontactsImportCsvUploads';
		}

		return this.apiClient.callApi(
			'/api/v2/externalcontacts/import/csv/uploads', 
			'POST', 
			{  },
			{  },
			{  },
			{  },
			body, 
			['PureCloud OAuth'], 
			['application/json'],
			['application/json']
		);
	}

	/**
	 * Create a new job
	 * 
	 * @param {Object} body Job
	 */
	postExternalcontactsImportJobs(body) { 
		// verify the required parameter 'body' is set
		if (body === undefined || body === null) {
			throw 'Missing the required parameter "body" when calling postExternalcontactsImportJobs';
		}

		return this.apiClient.callApi(
			'/api/v2/externalcontacts/import/jobs', 
			'POST', 
			{  },
			{  },
			{  },
			{  },
			body, 
			['PureCloud OAuth'], 
			['application/json'],
			['application/json']
		);
	}

	/**
	 * Create a new settings
	 * 
	 * @param {Object} body Setting
	 */
	postExternalcontactsImportSettings(body) { 
		// verify the required parameter 'body' is set
		if (body === undefined || body === null) {
			throw 'Missing the required parameter "body" when calling postExternalcontactsImportSettings';
		}

		return this.apiClient.callApi(
			'/api/v2/externalcontacts/import/settings', 
			'POST', 
			{  },
			{  },
			{  },
			{  },
			body, 
			['PureCloud OAuth'], 
			['application/json'],
			['application/json']
		);
	}

	/**
	 * Merge two contacts into a new contact record
	 * Two curated contacts cannot be merged. Refer to the Contact Merging article on the Developer Center for details. Deprecated: This API has been superseded by a new merge API. You are encouraged to instead use /api/v2/externalcontacts/contacts/merge, which supports merging up to 25 Contacts of any type, and overriding specific fields in the resulting Contact.
	 * @param {Object} body MergeRequest
	 * @deprecated
	 */
	postExternalcontactsMergeContacts(body) { 
		// verify the required parameter 'body' is set
		if (body === undefined || body === null) {
			throw 'Missing the required parameter "body" when calling postExternalcontactsMergeContacts';
		}

		return this.apiClient.callApi(
			'/api/v2/externalcontacts/merge/contacts', 
			'POST', 
			{  },
			{  },
			{  },
			{  },
			body, 
			['PureCloud OAuth'], 
			['application/json'],
			['application/json']
		);
	}

	/**
	 * Create a note for an external organization
	 * 
	 * @param {String} externalOrganizationId External Organization Id
	 * @param {Object} body ExternalContact
	 */
	postExternalcontactsOrganizationNotes(externalOrganizationId, body) { 
		// verify the required parameter 'externalOrganizationId' is set
		if (externalOrganizationId === undefined || externalOrganizationId === null || externalOrganizationId === '') {
			throw 'Missing the required parameter "externalOrganizationId" when calling postExternalcontactsOrganizationNotes';
		}
		// verify the required parameter 'body' is set
		if (body === undefined || body === null) {
			throw 'Missing the required parameter "body" when calling postExternalcontactsOrganizationNotes';
		}

		return this.apiClient.callApi(
			'/api/v2/externalcontacts/organizations/{externalOrganizationId}/notes', 
			'POST', 
			{ 'externalOrganizationId': externalOrganizationId },
			{  },
			{  },
			{  },
			body, 
			['PureCloud OAuth'], 
			['application/json'],
			['application/json']
		);
	}

	/**
	 * Create an external organization
	 * 
	 * @param {Object} body ExternalOrganization
	 */
	postExternalcontactsOrganizations(body) { 
		// verify the required parameter 'body' is set
		if (body === undefined || body === null) {
			throw 'Missing the required parameter "body" when calling postExternalcontactsOrganizations';
		}

		return this.apiClient.callApi(
			'/api/v2/externalcontacts/organizations', 
			'POST', 
			{  },
			{  },
			{  },
			{  },
			body, 
			['PureCloud OAuth'], 
			['application/json'],
			['application/json']
		);
	}

	/**
	 * Modify or create an External Org, with powerful behaviors for finding and combining data with pre-existing External Orgs.
	 * You may also submit multiple Enrich operations in one request via the Bulk Enrich API at /externalcontacts/bulk/organizations. A 201 response status indicates that a new External Organization was created, whereas a 200 status indicates that an External Organization was updated
	 * @param {Object} body ExternalOrgEnrichRequest
	 * @param {Object} opts Optional parameters
	 * @param {Boolean} opts.dryRun If true, the request will not make any modifications, but will show you what the end result *would* be.
	 */
	postExternalcontactsOrganizationsEnrich(body, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'body' is set
		if (body === undefined || body === null) {
			throw 'Missing the required parameter "body" when calling postExternalcontactsOrganizationsEnrich';
		}

		return this.apiClient.callApi(
			'/api/v2/externalcontacts/organizations/enrich', 
			'POST', 
			{  },
			{ 'dryRun': opts['dryRun'] },
			{  },
			{  },
			body, 
			['PureCloud OAuth'], 
			['application/json'],
			['application/json']
		);
	}

	/**
	 * Create a schema
	 * 
	 * @param {Object} body Schema
	 */
	postExternalcontactsOrganizationsSchemas(body) { 
		// verify the required parameter 'body' is set
		if (body === undefined || body === null) {
			throw 'Missing the required parameter "body" when calling postExternalcontactsOrganizationsSchemas';
		}

		return this.apiClient.callApi(
			'/api/v2/externalcontacts/organizations/schemas', 
			'POST', 
			{  },
			{  },
			{  },
			{  },
			body, 
			['PureCloud OAuth'], 
			['application/json'],
			['application/json']
		);
	}

	/**
	 * Create a relationship
	 * 
	 * @param {Object} body Relationship
	 */
	postExternalcontactsRelationships(body) { 
		// verify the required parameter 'body' is set
		if (body === undefined || body === null) {
			throw 'Missing the required parameter "body" when calling postExternalcontactsRelationships';
		}

		return this.apiClient.callApi(
			'/api/v2/externalcontacts/relationships', 
			'POST', 
			{  },
			{  },
			{  },
			{  },
			body, 
			['PureCloud OAuth'], 
			['application/json'],
			['application/json']
		);
	}

	/**
	 * Update an external contact
	 * 
	 * @param {String} contactId ExternalContact ID
	 * @param {Object} body ExternalContact
	 */
	putExternalcontactsContact(contactId, body) { 
		// verify the required parameter 'contactId' is set
		if (contactId === undefined || contactId === null || contactId === '') {
			throw 'Missing the required parameter "contactId" when calling putExternalcontactsContact';
		}
		// verify the required parameter 'body' is set
		if (body === undefined || body === null) {
			throw 'Missing the required parameter "body" when calling putExternalcontactsContact';
		}

		return this.apiClient.callApi(
			'/api/v2/externalcontacts/contacts/{contactId}', 
			'PUT', 
			{ 'contactId': contactId },
			{  },
			{  },
			{  },
			body, 
			['PureCloud OAuth'], 
			['application/json'],
			['application/json']
		);
	}

	/**
	 * Update a note for an external contact
	 * 
	 * @param {String} contactId ExternalContact Id
	 * @param {String} noteId Note Id
	 * @param {Object} body Note
	 */
	putExternalcontactsContactNote(contactId, noteId, body) { 
		// verify the required parameter 'contactId' is set
		if (contactId === undefined || contactId === null || contactId === '') {
			throw 'Missing the required parameter "contactId" when calling putExternalcontactsContactNote';
		}
		// verify the required parameter 'noteId' is set
		if (noteId === undefined || noteId === null || noteId === '') {
			throw 'Missing the required parameter "noteId" when calling putExternalcontactsContactNote';
		}
		// verify the required parameter 'body' is set
		if (body === undefined || body === null) {
			throw 'Missing the required parameter "body" when calling putExternalcontactsContactNote';
		}

		return this.apiClient.callApi(
			'/api/v2/externalcontacts/contacts/{contactId}/notes/{noteId}', 
			'PUT', 
			{ 'contactId': contactId,'noteId': noteId },
			{  },
			{  },
			{  },
			body, 
			['PureCloud OAuth'], 
			['application/json'],
			['application/json']
		);
	}

	/**
	 * Update a schema
	 * 
	 * @param {String} schemaId Schema ID
	 * @param {Object} body Data Schema
	 */
	putExternalcontactsContactsSchema(schemaId, body) { 
		// verify the required parameter 'schemaId' is set
		if (schemaId === undefined || schemaId === null || schemaId === '') {
			throw 'Missing the required parameter "schemaId" when calling putExternalcontactsContactsSchema';
		}
		// verify the required parameter 'body' is set
		if (body === undefined || body === null) {
			throw 'Missing the required parameter "body" when calling putExternalcontactsContactsSchema';
		}

		return this.apiClient.callApi(
			'/api/v2/externalcontacts/contacts/schemas/{schemaId}', 
			'PUT', 
			{ 'schemaId': schemaId },
			{  },
			{  },
			{  },
			body, 
			['PureCloud OAuth'], 
			['application/json'],
			['application/json']
		);
	}

	/**
	 * Associate/disassociate an external contact with a conversation
	 * To associate, supply a value for the externalContactId.  To disassociate, do not include the property at all.
	 * @param {String} conversationId Conversation ID
	 * @param {Object} body ConversationAssociation
	 */
	putExternalcontactsConversation(conversationId, body) { 
		// verify the required parameter 'conversationId' is set
		if (conversationId === undefined || conversationId === null || conversationId === '') {
			throw 'Missing the required parameter "conversationId" when calling putExternalcontactsConversation';
		}
		// verify the required parameter 'body' is set
		if (body === undefined || body === null) {
			throw 'Missing the required parameter "body" when calling putExternalcontactsConversation';
		}

		return this.apiClient.callApi(
			'/api/v2/externalcontacts/conversations/{conversationId}', 
			'PUT', 
			{ 'conversationId': conversationId },
			{  },
			{  },
			{  },
			body, 
			['PureCloud OAuth'], 
			['application/json'],
			['application/json']
		);
	}

	/**
	 * Update an External Source
	 * 
	 * @param {String} externalSourceId External Source ID
	 * @param {Object} body External Source
	 */
	putExternalcontactsExternalsource(externalSourceId, body) { 
		// verify the required parameter 'externalSourceId' is set
		if (externalSourceId === undefined || externalSourceId === null || externalSourceId === '') {
			throw 'Missing the required parameter "externalSourceId" when calling putExternalcontactsExternalsource';
		}
		// verify the required parameter 'body' is set
		if (body === undefined || body === null) {
			throw 'Missing the required parameter "body" when calling putExternalcontactsExternalsource';
		}

		return this.apiClient.callApi(
			'/api/v2/externalcontacts/externalsources/{externalSourceId}', 
			'PUT', 
			{ 'externalSourceId': externalSourceId },
			{  },
			{  },
			{  },
			body, 
			['PureCloud OAuth'], 
			['application/json'],
			['application/json']
		);
	}

	/**
	 * Update settings for CSV import
	 * 
	 * @param {String} settingsId Settings id
	 * @param {Object} body Settings
	 */
	putExternalcontactsImportCsvSetting(settingsId, body) { 
		// verify the required parameter 'settingsId' is set
		if (settingsId === undefined || settingsId === null || settingsId === '') {
			throw 'Missing the required parameter "settingsId" when calling putExternalcontactsImportCsvSetting';
		}
		// verify the required parameter 'body' is set
		if (body === undefined || body === null) {
			throw 'Missing the required parameter "body" when calling putExternalcontactsImportCsvSetting';
		}

		return this.apiClient.callApi(
			'/api/v2/externalcontacts/import/csv/settings/{settingsId}', 
			'PUT', 
			{ 'settingsId': settingsId },
			{  },
			{  },
			{  },
			body, 
			['PureCloud OAuth'], 
			['application/json'],
			['application/json']
		);
	}

	/**
	 * Update Job's workflow status
	 * 
	 * @param {String} jobId Job id
	 * @param {Object} body Status of the Job's workflow
	 */
	putExternalcontactsImportJob(jobId, body) { 
		// verify the required parameter 'jobId' is set
		if (jobId === undefined || jobId === null || jobId === '') {
			throw 'Missing the required parameter "jobId" when calling putExternalcontactsImportJob';
		}
		// verify the required parameter 'body' is set
		if (body === undefined || body === null) {
			throw 'Missing the required parameter "body" when calling putExternalcontactsImportJob';
		}

		return this.apiClient.callApi(
			'/api/v2/externalcontacts/import/jobs/{jobId}', 
			'PUT', 
			{ 'jobId': jobId },
			{  },
			{  },
			{  },
			body, 
			['PureCloud OAuth'], 
			['application/json'],
			['application/json']
		);
	}

	/**
	 * Update settings
	 * 
	 * @param {String} settingsId Settings id
	 * @param {Object} body Setting
	 */
	putExternalcontactsImportSetting(settingsId, body) { 
		// verify the required parameter 'settingsId' is set
		if (settingsId === undefined || settingsId === null || settingsId === '') {
			throw 'Missing the required parameter "settingsId" when calling putExternalcontactsImportSetting';
		}
		// verify the required parameter 'body' is set
		if (body === undefined || body === null) {
			throw 'Missing the required parameter "body" when calling putExternalcontactsImportSetting';
		}

		return this.apiClient.callApi(
			'/api/v2/externalcontacts/import/settings/{settingsId}', 
			'PUT', 
			{ 'settingsId': settingsId },
			{  },
			{  },
			{  },
			body, 
			['PureCloud OAuth'], 
			['application/json'],
			['application/json']
		);
	}

	/**
	 * Update an external organization
	 * 
	 * @param {String} externalOrganizationId External Organization ID
	 * @param {Object} body ExternalOrganization
	 */
	putExternalcontactsOrganization(externalOrganizationId, body) { 
		// verify the required parameter 'externalOrganizationId' is set
		if (externalOrganizationId === undefined || externalOrganizationId === null || externalOrganizationId === '') {
			throw 'Missing the required parameter "externalOrganizationId" when calling putExternalcontactsOrganization';
		}
		// verify the required parameter 'body' is set
		if (body === undefined || body === null) {
			throw 'Missing the required parameter "body" when calling putExternalcontactsOrganization';
		}

		return this.apiClient.callApi(
			'/api/v2/externalcontacts/organizations/{externalOrganizationId}', 
			'PUT', 
			{ 'externalOrganizationId': externalOrganizationId },
			{  },
			{  },
			{  },
			body, 
			['PureCloud OAuth'], 
			['application/json'],
			['application/json']
		);
	}

	/**
	 * Update a note for an external organization
	 * 
	 * @param {String} externalOrganizationId External Organization Id
	 * @param {String} noteId Note Id
	 * @param {Object} body Note
	 */
	putExternalcontactsOrganizationNote(externalOrganizationId, noteId, body) { 
		// verify the required parameter 'externalOrganizationId' is set
		if (externalOrganizationId === undefined || externalOrganizationId === null || externalOrganizationId === '') {
			throw 'Missing the required parameter "externalOrganizationId" when calling putExternalcontactsOrganizationNote';
		}
		// verify the required parameter 'noteId' is set
		if (noteId === undefined || noteId === null || noteId === '') {
			throw 'Missing the required parameter "noteId" when calling putExternalcontactsOrganizationNote';
		}
		// verify the required parameter 'body' is set
		if (body === undefined || body === null) {
			throw 'Missing the required parameter "body" when calling putExternalcontactsOrganizationNote';
		}

		return this.apiClient.callApi(
			'/api/v2/externalcontacts/organizations/{externalOrganizationId}/notes/{noteId}', 
			'PUT', 
			{ 'externalOrganizationId': externalOrganizationId,'noteId': noteId },
			{  },
			{  },
			{  },
			body, 
			['PureCloud OAuth'], 
			['application/json'],
			['application/json']
		);
	}

	/**
	 * Links a Trustor with an External Organization
	 * 
	 * @param {String} externalOrganizationId External Organization ID
	 * @param {String} trustorId Trustor ID
	 */
	putExternalcontactsOrganizationTrustorTrustorId(externalOrganizationId, trustorId) { 
		// verify the required parameter 'externalOrganizationId' is set
		if (externalOrganizationId === undefined || externalOrganizationId === null || externalOrganizationId === '') {
			throw 'Missing the required parameter "externalOrganizationId" when calling putExternalcontactsOrganizationTrustorTrustorId';
		}
		// verify the required parameter 'trustorId' is set
		if (trustorId === undefined || trustorId === null || trustorId === '') {
			throw 'Missing the required parameter "trustorId" when calling putExternalcontactsOrganizationTrustorTrustorId';
		}

		return this.apiClient.callApi(
			'/api/v2/externalcontacts/organizations/{externalOrganizationId}/trustor/{trustorId}', 
			'PUT', 
			{ 'externalOrganizationId': externalOrganizationId,'trustorId': trustorId },
			{  },
			{  },
			{  },
			null, 
			['PureCloud OAuth'], 
			['application/json'],
			['application/json']
		);
	}

	/**
	 * Update a schema
	 * 
	 * @param {String} schemaId Schema ID
	 * @param {Object} body Data Schema
	 */
	putExternalcontactsOrganizationsSchema(schemaId, body) { 
		// verify the required parameter 'schemaId' is set
		if (schemaId === undefined || schemaId === null || schemaId === '') {
			throw 'Missing the required parameter "schemaId" when calling putExternalcontactsOrganizationsSchema';
		}
		// verify the required parameter 'body' is set
		if (body === undefined || body === null) {
			throw 'Missing the required parameter "body" when calling putExternalcontactsOrganizationsSchema';
		}

		return this.apiClient.callApi(
			'/api/v2/externalcontacts/organizations/schemas/{schemaId}', 
			'PUT', 
			{ 'schemaId': schemaId },
			{  },
			{  },
			{  },
			body, 
			['PureCloud OAuth'], 
			['application/json'],
			['application/json']
		);
	}

	/**
	 * Update a relationship
	 * 
	 * @param {String} relationshipId Relationship Id
	 * @param {Object} body Relationship
	 */
	putExternalcontactsRelationship(relationshipId, body) { 
		// verify the required parameter 'relationshipId' is set
		if (relationshipId === undefined || relationshipId === null || relationshipId === '') {
			throw 'Missing the required parameter "relationshipId" when calling putExternalcontactsRelationship';
		}
		// verify the required parameter 'body' is set
		if (body === undefined || body === null) {
			throw 'Missing the required parameter "body" when calling putExternalcontactsRelationship';
		}

		return this.apiClient.callApi(
			'/api/v2/externalcontacts/relationships/{relationshipId}', 
			'PUT', 
			{ 'relationshipId': relationshipId },
			{  },
			{  },
			{  },
			body, 
			['PureCloud OAuth'], 
			['application/json'],
			['application/json']
		);
	}

}


export default ExternalContactsApi;
