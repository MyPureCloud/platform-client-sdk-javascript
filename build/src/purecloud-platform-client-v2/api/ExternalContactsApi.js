import ApiClient from '../ApiClient.js';


class ExternalContactsApi {
	/**
	 * ExternalContacts service.
	 * @module purecloud-platform-client-v2/api/ExternalContactsApi
	 * @version 257.0.0
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
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	deleteExternalcontactsContact(contactId, opts) { 
		opts = opts || {};
		
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
			['application/json'],
			opts['customHeaders']
		);
	}

	/**
	 * Delete a note for an external contact
	 * 
	 * @param {String} contactId ExternalContact Id
	 * @param {String} noteId Note Id
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	deleteExternalcontactsContactNote(contactId, noteId, opts) { 
		opts = opts || {};
		
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
			['application/json'],
			opts['customHeaders']
		);
	}

	/**
	 * Delete a schema
	 * 
	 * @param {String} schemaId Schema ID
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	deleteExternalcontactsContactsSchema(schemaId, opts) { 
		opts = opts || {};
		
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
			['application/json'],
			opts['customHeaders']
		);
	}

	/**
	 * Delete an External Source. WARNING: Any records that reference this External Source will not be automatically cleaned up. Those records will still be editable, but their External IDs may not be fully viewable.
	 * 
	 * @param {String} externalSourceId External Source ID
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	deleteExternalcontactsExternalsource(externalSourceId, opts) { 
		opts = opts || {};
		
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
			['application/json'],
			opts['customHeaders']
		);
	}

	/**
	 * Delete settings for CSV import
	 * 
	 * @param {String} settingsId Settings id
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	deleteExternalcontactsImportCsvSetting(settingsId, opts) { 
		opts = opts || {};
		
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
			['application/json'],
			opts['customHeaders']
		);
	}

	/**
	 * Delete Settings
	 * 
	 * @param {String} settingsId Settings id
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	deleteExternalcontactsImportSetting(settingsId, opts) { 
		opts = opts || {};
		
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
			['application/json'],
			opts['customHeaders']
		);
	}

	/**
	 * Delete an external organization
	 * 
	 * @param {String} externalOrganizationId External Organization ID
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	deleteExternalcontactsOrganization(externalOrganizationId, opts) { 
		opts = opts || {};
		
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
			['application/json'],
			opts['customHeaders']
		);
	}

	/**
	 * Delete a note for an external organization
	 * 
	 * @param {String} externalOrganizationId External Organization Id
	 * @param {String} noteId Note Id
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	deleteExternalcontactsOrganizationNote(externalOrganizationId, noteId, opts) { 
		opts = opts || {};
		
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
			['application/json'],
			opts['customHeaders']
		);
	}

	/**
	 * Unlink the Trustor for this External Organization
	 * 
	 * @param {String} externalOrganizationId External Organization ID
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	deleteExternalcontactsOrganizationTrustor(externalOrganizationId, opts) { 
		opts = opts || {};
		
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
			['application/json'],
			opts['customHeaders']
		);
	}

	/**
	 * Delete a relationship
	 * 
	 * @param {String} relationshipId Relationship Id
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	deleteExternalcontactsRelationship(relationshipId, opts) { 
		opts = opts || {};
		
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
			['application/json'],
			opts['customHeaders']
		);
	}

	/**
	 * Fetch an external contact
	 * 
	 * @param {String} contactId ExternalContact ID
	 * @param {Object} opts Optional parameters
	 * @param {Array.<String>} opts.expand which fields, if any, to expand
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
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
			['application/json'],
			opts['customHeaders']
		);
	}

	/**
	 * List the identifiers for a contact
	 * 
	 * @param {String} contactId ExternalContact ID
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	getExternalcontactsContactIdentifiers(contactId, opts) { 
		opts = opts || {};
		
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
			['application/json'],
			opts['customHeaders']
		);
	}

	/**
	 * Retrieve segment assignments by external contact ID.
	 * 
	 * @param {String} contactId ExternalContact ID
	 * @param {Object} opts Optional parameters
	 * @param {Boolean} opts.includeMerged Indicates whether to return segment assignments from all external contacts in the merge-set of the given one.
	 * @param {Number} opts.limit Number of entities to return. Default of 25, maximum of 500.
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	getExternalcontactsContactJourneySegments(contactId, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'contactId' is set
		if (contactId === undefined || contactId === null || contactId === '') {
			throw 'Missing the required parameter "contactId" when calling getExternalcontactsContactJourneySegments';
		}

		return this.apiClient.callApi(
			'/api/v2/externalcontacts/contacts/{contactId}/journey/segments', 
			'GET', 
			{ 'contactId': contactId },
			{ 'includeMerged': opts['includeMerged'],'limit': opts['limit'] },
			{  },
			{  },
			null, 
			['PureCloud OAuth'], 
			['application/json'],
			['application/json'],
			opts['customHeaders']
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
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
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
			['application/json'],
			opts['customHeaders']
		);
	}

	/**
	 * Fetch a note for an external contact
	 * 
	 * @param {String} contactId ExternalContact Id
	 * @param {String} noteId Note Id
	 * @param {Object} opts Optional parameters
	 * @param {Array.<String>} opts.expand which fields, if any, to expand
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
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
			['application/json'],
			opts['customHeaders']
		);
	}

	/**
	 * List notes for an external contact
	 * 
	 * @param {String} contactId ExternalContact Id
	 * @param {Object} opts Optional parameters
	 * @param {Number} opts.pageSize Page size (limited to fetching first 1,000 records; pageSize <= 100; pageNumber * pageSize must be <= 1,000) (default to 20)
	 * @param {Number} opts.pageNumber Page number (limited to fetching first 1,000 records; pageNumber * pageSize must be <= 1,000) (default to 1)
	 * @param {String} opts.sortOrder The Note field to sort by. Any of: [createDate]. Direction: [asc, desc].  e.g. createDate:asc, createDate:desc
	 * @param {Array.<String>} opts.expand which fields, if any, to expand. mergeset will include notes attached to ancestor contacts which have been merged into this one.
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
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
			['application/json'],
			opts['customHeaders']
		);
	}

	/**
	 * Fetch an unresolved external contact
	 * 
	 * @param {String} contactId ExternalContact ID
	 * @param {Object} opts Optional parameters
	 * @param {Array.<String>} opts.expand which fields, if any, to expand
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
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
			['application/json'],
			opts['customHeaders']
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
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
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
			['application/json'],
			opts['customHeaders']
		);
	}

	/**
	 * Get export for exportId
	 * 
	 * @param {String} exportId Export id
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	getExternalcontactsContactsExport(exportId, opts) { 
		opts = opts || {};
		
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
			['application/json'],
			opts['customHeaders']
		);
	}

	/**
	 * List contact exports for organization
	 * 
	 * @param {Object} opts Optional parameters
	 * @param {Array.<String>} opts.divisionIds Division IDs of entities
	 * @param {String} opts.after The cursor that points to the end of the set of entities
	 * @param {Number} opts.pageSize Number of entities to return
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
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
			['application/json'],
			opts['customHeaders']
		);
	}

	/**
	 * Get a schema
	 * 
	 * @param {String} schemaId Schema ID
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	getExternalcontactsContactsSchema(schemaId, opts) { 
		opts = opts || {};
		
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
			['application/json'],
			opts['customHeaders']
		);
	}

	/**
	 * Get a specific version of a schema
	 * 
	 * @param {String} schemaId Schema ID
	 * @param {String} versionId Schema version
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	getExternalcontactsContactsSchemaVersion(schemaId, versionId, opts) { 
		opts = opts || {};
		
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
			['application/json'],
			opts['customHeaders']
		);
	}

	/**
	 * Get all versions of an external contact's schema
	 * 
	 * @param {String} schemaId Schema ID
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	getExternalcontactsContactsSchemaVersions(schemaId, opts) { 
		opts = opts || {};
		
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
			['application/json'],
			opts['customHeaders']
		);
	}

	/**
	 * Get a list of schemas.
	 * 
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	getExternalcontactsContactsSchemas(opts) { 
		opts = opts || {};
		

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
			['application/json'],
			opts['customHeaders']
		);
	}

	/**
	 * Get a specific named core type.
	 * 
	 * @param {String} coreTypeName Name of the core type
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	getExternalcontactsContactsSchemasCoretype(coreTypeName, opts) { 
		opts = opts || {};
		
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
			['application/json'],
			opts['customHeaders']
		);
	}

	/**
	 * Get the core types from which all schemas are built.
	 * 
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	getExternalcontactsContactsSchemasCoretypes(opts) { 
		opts = opts || {};
		

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
			['application/json'],
			opts['customHeaders']
		);
	}

	/**
	 * Get quantitative limits on schemas
	 * 
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	getExternalcontactsContactsSchemasLimits(opts) { 
		opts = opts || {};
		

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
			['application/json'],
			opts['customHeaders']
		);
	}

	/**
	 * Fetch an External Source
	 * 
	 * @param {String} externalSourceId External Source ID
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	getExternalcontactsExternalsource(externalSourceId, opts) { 
		opts = opts || {};
		
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
			['application/json'],
			opts['customHeaders']
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
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
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
			['application/json'],
			opts['customHeaders']
		);
	}

	/**
	 * Get settings for CSV import
	 * 
	 * @param {String} settingsId Settings id
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	getExternalcontactsImportCsvSetting(settingsId, opts) { 
		opts = opts || {};
		
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
			['application/json'],
			opts['customHeaders']
		);
	}

	/**
	 * Retrieve all settings for organization filtered by externalSettingsId if provided
	 * 
	 * @param {Object} opts Optional parameters
	 * @param {String} opts.after The cursor that points to the end of the set of entities that has been returned.
	 * @param {String} opts.pageSize Number of entities to return. Maximum of 200.
	 * @param {String} opts.externalSettingsId External Settings Id to filter the list.
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
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
			['application/json'],
			opts['customHeaders']
		);
	}

	/**
	 * Get details for CSV upload
	 * 
	 * @param {String} uploadId Upload id
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	getExternalcontactsImportCsvUploadDetails(uploadId, opts) { 
		opts = opts || {};
		
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
			['application/json'],
			opts['customHeaders']
		);
	}

	/**
	 * Get preview for CSV upload
	 * 
	 * @param {String} uploadId Upload id
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	getExternalcontactsImportCsvUploadPreview(uploadId, opts) { 
		opts = opts || {};
		
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
			['application/json'],
			opts['customHeaders']
		);
	}

	/**
	 * Get job based on id
	 * 
	 * @param {String} jobId Job id
	 * @param {Object} opts Optional parameters
	 * @param {Array.<String>} opts.expand which fields, if any, to expand
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
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
			['application/json'],
			opts['customHeaders']
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
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
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
			['application/json'],
			opts['customHeaders']
		);
	}

	/**
	 * Get setting based on id
	 * 
	 * @param {String} settingsId Settings id
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	getExternalcontactsImportSetting(settingsId, opts) { 
		opts = opts || {};
		
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
			['application/json'],
			opts['customHeaders']
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
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
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
			['application/json'],
			opts['customHeaders']
		);
	}

	/**
	 * Get notes export for exportId
	 * 
	 * @param {String} exportId Export id
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	getExternalcontactsNotesExport(exportId, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'exportId' is set
		if (exportId === undefined || exportId === null || exportId === '') {
			throw 'Missing the required parameter "exportId" when calling getExternalcontactsNotesExport';
		}

		return this.apiClient.callApi(
			'/api/v2/externalcontacts/notes/exports/{exportId}', 
			'GET', 
			{ 'exportId': exportId },
			{  },
			{  },
			{  },
			null, 
			['PureCloud OAuth'], 
			['application/json'],
			['application/json'],
			opts['customHeaders']
		);
	}

	/**
	 * List note exports for organization
	 * 
	 * @param {Object} opts Optional parameters
	 * @param {Array.<String>} opts.divisionIds Division IDs of entities
	 * @param {String} opts.after The cursor that points to the end of the set of entities
	 * @param {Number} opts.pageSize Number of entities to return
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	getExternalcontactsNotesExports(opts) { 
		opts = opts || {};
		

		return this.apiClient.callApi(
			'/api/v2/externalcontacts/notes/exports', 
			'GET', 
			{  },
			{ 'divisionIds': this.apiClient.buildCollectionParam(opts['divisionIds'], 'multi'),'after': opts['after'],'pageSize': opts['pageSize'] },
			{  },
			{  },
			null, 
			['PureCloud OAuth'], 
			['application/json'],
			['application/json'],
			opts['customHeaders']
		);
	}

	/**
	 * Fetch an external organization
	 * 
	 * @param {String} externalOrganizationId External Organization ID
	 * @param {Object} opts Optional parameters
	 * @param {Array.<String>} opts.expand which fields, if any, to expand
	 * @param {Boolean} opts.includeTrustors (true or false) whether or not to include trustor information embedded in the externalOrganization
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
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
			['application/json'],
			opts['customHeaders']
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
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
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
			['application/json'],
			opts['customHeaders']
		);
	}

	/**
	 * List the identifiers for an external organization
	 * 
	 * @param {String} externalOrganizationId External Organization ID
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	getExternalcontactsOrganizationIdentifiers(externalOrganizationId, opts) { 
		opts = opts || {};
		
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
			['application/json'],
			opts['customHeaders']
		);
	}

	/**
	 * Fetch a note for an external organization
	 * 
	 * @param {String} externalOrganizationId External Organization Id
	 * @param {String} noteId Note Id
	 * @param {Object} opts Optional parameters
	 * @param {Array.<String>} opts.expand which fields, if any, to expand
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
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
			['application/json'],
			opts['customHeaders']
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
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
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
			['application/json'],
			opts['customHeaders']
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
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
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
			['application/json'],
			opts['customHeaders']
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
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
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
			['application/json'],
			opts['customHeaders']
		);
	}

	/**
	 * Get organizations export for exportId
	 * 
	 * @param {String} exportId Export id
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	getExternalcontactsOrganizationsExport(exportId, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'exportId' is set
		if (exportId === undefined || exportId === null || exportId === '') {
			throw 'Missing the required parameter "exportId" when calling getExternalcontactsOrganizationsExport';
		}

		return this.apiClient.callApi(
			'/api/v2/externalcontacts/organizations/exports/{exportId}', 
			'GET', 
			{ 'exportId': exportId },
			{  },
			{  },
			{  },
			null, 
			['PureCloud OAuth'], 
			['application/json'],
			['application/json'],
			opts['customHeaders']
		);
	}

	/**
	 * List organization exports for organization
	 * 
	 * @param {Object} opts Optional parameters
	 * @param {Array.<String>} opts.divisionIds Division IDs of entities
	 * @param {String} opts.after The cursor that points to the end of the set of entities
	 * @param {Number} opts.pageSize Number of entities to return
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	getExternalcontactsOrganizationsExports(opts) { 
		opts = opts || {};
		

		return this.apiClient.callApi(
			'/api/v2/externalcontacts/organizations/exports', 
			'GET', 
			{  },
			{ 'divisionIds': this.apiClient.buildCollectionParam(opts['divisionIds'], 'multi'),'after': opts['after'],'pageSize': opts['pageSize'] },
			{  },
			{  },
			null, 
			['PureCloud OAuth'], 
			['application/json'],
			['application/json'],
			opts['customHeaders']
		);
	}

	/**
	 * Get a schema
	 * 
	 * @param {String} schemaId Schema ID
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	getExternalcontactsOrganizationsSchema(schemaId, opts) { 
		opts = opts || {};
		
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
			['application/json'],
			opts['customHeaders']
		);
	}

	/**
	 * Get a specific version of a schema
	 * 
	 * @param {String} schemaId Schema ID
	 * @param {String} versionId Schema version
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	getExternalcontactsOrganizationsSchemaVersion(schemaId, versionId, opts) { 
		opts = opts || {};
		
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
			['application/json'],
			opts['customHeaders']
		);
	}

	/**
	 * Get all versions of an external organization's schema
	 * 
	 * @param {String} schemaId Schema ID
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	getExternalcontactsOrganizationsSchemaVersions(schemaId, opts) { 
		opts = opts || {};
		
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
			['application/json'],
			opts['customHeaders']
		);
	}

	/**
	 * Get a list of schemas.
	 * 
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	getExternalcontactsOrganizationsSchemas(opts) { 
		opts = opts || {};
		

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
			['application/json'],
			opts['customHeaders']
		);
	}

	/**
	 * Get a specific named core type.
	 * 
	 * @param {String} coreTypeName Name of the core type
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	getExternalcontactsOrganizationsSchemasCoretype(coreTypeName, opts) { 
		opts = opts || {};
		
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
			['application/json'],
			opts['customHeaders']
		);
	}

	/**
	 * Get the core types from which all schemas are built.
	 * 
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	getExternalcontactsOrganizationsSchemasCoretypes(opts) { 
		opts = opts || {};
		

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
			['application/json'],
			opts['customHeaders']
		);
	}

	/**
	 * Get quantitative limits on schemas
	 * 
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	getExternalcontactsOrganizationsSchemasLimits(opts) { 
		opts = opts || {};
		

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
			['application/json'],
			opts['customHeaders']
		);
	}

	/**
	 * Fetch a relationship
	 * 
	 * @param {String} relationshipId Relationship Id
	 * @param {Object} opts Optional parameters
	 * @param {Array.<String>} opts.expand which fields, if any, to expand
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
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
			['application/json'],
			opts['customHeaders']
		);
	}

	/**
	 * Get relationships export for exportId
	 * 
	 * @param {String} exportId Export id
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	getExternalcontactsRelationshipsExport(exportId, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'exportId' is set
		if (exportId === undefined || exportId === null || exportId === '') {
			throw 'Missing the required parameter "exportId" when calling getExternalcontactsRelationshipsExport';
		}

		return this.apiClient.callApi(
			'/api/v2/externalcontacts/relationships/exports/{exportId}', 
			'GET', 
			{ 'exportId': exportId },
			{  },
			{  },
			{  },
			null, 
			['PureCloud OAuth'], 
			['application/json'],
			['application/json'],
			opts['customHeaders']
		);
	}

	/**
	 * List relationship exports for organization
	 * 
	 * @param {Object} opts Optional parameters
	 * @param {Array.<String>} opts.divisionIds Division IDs of entities
	 * @param {String} opts.after The cursor that points to the end of the set of entities
	 * @param {Number} opts.pageSize Number of entities to return
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	getExternalcontactsRelationshipsExports(opts) { 
		opts = opts || {};
		

		return this.apiClient.callApi(
			'/api/v2/externalcontacts/relationships/exports', 
			'GET', 
			{  },
			{ 'divisionIds': this.apiClient.buildCollectionParam(opts['divisionIds'], 'multi'),'after': opts['after'],'pageSize': opts['pageSize'] },
			{  },
			{  },
			null, 
			['PureCloud OAuth'], 
			['application/json'],
			['application/json'],
			opts['customHeaders']
		);
	}

	/**
	 * Look up contacts based on an attribute. Maximum of 25 values returned.
	 * 
	 * @param {String} lookupVal User supplied value to lookup contacts (supports email addresses, e164 phone numbers, Twitter screen names)
	 * @param {Object} opts Optional parameters
	 * @param {Array.<String>} opts.expand which field, if any, to expand
	 * @param {String} opts.divisionId Specifies which division to lookup contacts in, for the given lookup value (default to *)
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
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
			['application/json'],
			opts['customHeaders']
		);
	}

	/**
	 * Scan for external contacts using paging
	 * 
	 * @param {Object} opts Optional parameters
	 * @param {Number} opts.limit The number of contacts per page; must be between 10 and 200, default is 100
	 * @param {String} opts.cursor Indicates where to resume query results (not required for first page), each page returns a new cursor with a 24h TTL
	 * @param {String} opts.divisionId The division to scan over (default to *)
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
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
			['application/json'],
			opts['customHeaders']
		);
	}

	/**
	 * Scan for external contacts using paging
	 * 
	 * @param {Object} opts Optional parameters
	 * @param {Number} opts.limit The number of contacts per page; must be between 10 and 200, default is 100
	 * @param {String} opts.cursor Indicates where to resume query results (not required for first page), each page returns a new cursor with a 24h TTL
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
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
			['application/json'],
			opts['customHeaders']
		);
	}

	/**
	 * Scan for notes using paging
	 * 
	 * @param {Object} opts Optional parameters
	 * @param {Number} opts.limit The number of notes per page; must be between 10 and 200, default is 100
	 * @param {String} opts.cursor Indicates where to resume query results (not required for first page), each page returns a new cursor with a 24h TTL
	 * @param {String} opts.divisionId The division to scan over (default to *)
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
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
			['application/json'],
			opts['customHeaders']
		);
	}

	/**
	 * Scan for notes using paging
	 * 
	 * @param {Object} opts Optional parameters
	 * @param {Number} opts.limit The number of notes per page; must be between 10 and 200, default is 100
	 * @param {String} opts.cursor Indicates where to resume query results (not required for first page), each page returns a new cursor with a 24h TTL
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
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
			['application/json'],
			opts['customHeaders']
		);
	}

	/**
	 * Scan for external organizations using paging
	 * 
	 * @param {Object} opts Optional parameters
	 * @param {Number} opts.limit The number of organizations per page; must be between 10 and 200, default is 100
	 * @param {String} opts.cursor Indicates where to resume query results (not required for first page), each page returns a new cursor with a 24h TTL
	 * @param {String} opts.divisionId The division to scan over (default to *)
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
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
			['application/json'],
			opts['customHeaders']
		);
	}

	/**
	 * Scan for external organizations using paging
	 * 
	 * @param {Object} opts Optional parameters
	 * @param {Number} opts.limit The number of organizations per page; must be between 10 and 200, default is 100
	 * @param {String} opts.cursor Indicates where to resume query results (not required for first page), each page returns a new cursor with a 24h TTL
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
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
			['application/json'],
			opts['customHeaders']
		);
	}

	/**
	 * Scan for relationships
	 * 
	 * @param {Object} opts Optional parameters
	 * @param {Number} opts.limit The number of relationships per page; must be between 10 and 200, default is 100
	 * @param {String} opts.cursor Indicates where to resume query results (not required for first page), each page returns a new cursor with a 24h TTL
	 * @param {String} opts.divisionId The division to scan over (default to *)
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
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
			['application/json'],
			opts['customHeaders']
		);
	}

	/**
	 * Scan for relationships
	 * 
	 * @param {Object} opts Optional parameters
	 * @param {Number} opts.limit The number of relationships per page; must be between 10 and 200, default is 100
	 * @param {String} opts.cursor Indicates where to resume query results (not required for first page), each page returns a new cursor with a 24h TTL
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
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
			['application/json'],
			opts['customHeaders']
		);
	}

	/**
	 * Update specific fields of an external contact
	 * 
	 * @param {String} contactId ExternalContact ID
	 * @param {Object} body Contact fields to update
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	patchExternalcontactsContact(contactId, body, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'contactId' is set
		if (contactId === undefined || contactId === null || contactId === '') {
			throw 'Missing the required parameter "contactId" when calling patchExternalcontactsContact';
		}
		// verify the required parameter 'body' is set
		if (body === undefined || body === null) {
			throw 'Missing the required parameter "body" when calling patchExternalcontactsContact';
		}

		return this.apiClient.callApi(
			'/api/v2/externalcontacts/contacts/{contactId}', 
			'PATCH', 
			{ 'contactId': contactId },
			{  },
			{  },
			{  },
			body, 
			['PureCloud OAuth'], 
			['application/json'],
			['application/json'],
			opts['customHeaders']
		);
	}

	/**
	 * Claim or release identifiers for a contact
	 * 
	 * @param {String} contactId ExternalContact ID
	 * @param {Object} body ClaimRequest
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	patchExternalcontactsContactIdentifiers(contactId, body, opts) { 
		opts = opts || {};
		
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
			['application/json'],
			opts['customHeaders']
		);
	}

	/**
	 * Update a Contact Note
	 * 
	 * @param {String} contactId ExternalContact Id
	 * @param {String} noteId Note Id
	 * @param {Object} body Note field to update
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	patchExternalcontactsContactNote(contactId, noteId, body, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'contactId' is set
		if (contactId === undefined || contactId === null || contactId === '') {
			throw 'Missing the required parameter "contactId" when calling patchExternalcontactsContactNote';
		}
		// verify the required parameter 'noteId' is set
		if (noteId === undefined || noteId === null || noteId === '') {
			throw 'Missing the required parameter "noteId" when calling patchExternalcontactsContactNote';
		}
		// verify the required parameter 'body' is set
		if (body === undefined || body === null) {
			throw 'Missing the required parameter "body" when calling patchExternalcontactsContactNote';
		}

		return this.apiClient.callApi(
			'/api/v2/externalcontacts/contacts/{contactId}/notes/{noteId}', 
			'PATCH', 
			{ 'contactId': contactId,'noteId': noteId },
			{  },
			{  },
			{  },
			body, 
			['PureCloud OAuth'], 
			['application/json'],
			['application/json'],
			opts['customHeaders']
		);
	}

	/**
	 * Update specific fields of an external organization
	 * 
	 * @param {String} externalOrganizationId External Organization ID
	 * @param {Object} body External Organization fields to update
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	patchExternalcontactsOrganization(externalOrganizationId, body, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'externalOrganizationId' is set
		if (externalOrganizationId === undefined || externalOrganizationId === null || externalOrganizationId === '') {
			throw 'Missing the required parameter "externalOrganizationId" when calling patchExternalcontactsOrganization';
		}
		// verify the required parameter 'body' is set
		if (body === undefined || body === null) {
			throw 'Missing the required parameter "body" when calling patchExternalcontactsOrganization';
		}

		return this.apiClient.callApi(
			'/api/v2/externalcontacts/organizations/{externalOrganizationId}', 
			'PATCH', 
			{ 'externalOrganizationId': externalOrganizationId },
			{  },
			{  },
			{  },
			body, 
			['PureCloud OAuth'], 
			['application/json'],
			['application/json'],
			opts['customHeaders']
		);
	}

	/**
	 * Claim or release identifiers for an external organization
	 * 
	 * @param {String} externalOrganizationId External Organization ID
	 * @param {Object} body ClaimRequest
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	patchExternalcontactsOrganizationIdentifiers(externalOrganizationId, body, opts) { 
		opts = opts || {};
		
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
			['application/json'],
			opts['customHeaders']
		);
	}

	/**
	 * Update an External Organization Note
	 * 
	 * @param {String} externalOrganizationId External Organization Id
	 * @param {String} noteId Note Id
	 * @param {Object} body Note field to update
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	patchExternalcontactsOrganizationNote(externalOrganizationId, noteId, body, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'externalOrganizationId' is set
		if (externalOrganizationId === undefined || externalOrganizationId === null || externalOrganizationId === '') {
			throw 'Missing the required parameter "externalOrganizationId" when calling patchExternalcontactsOrganizationNote';
		}
		// verify the required parameter 'noteId' is set
		if (noteId === undefined || noteId === null || noteId === '') {
			throw 'Missing the required parameter "noteId" when calling patchExternalcontactsOrganizationNote';
		}
		// verify the required parameter 'body' is set
		if (body === undefined || body === null) {
			throw 'Missing the required parameter "body" when calling patchExternalcontactsOrganizationNote';
		}

		return this.apiClient.callApi(
			'/api/v2/externalcontacts/organizations/{externalOrganizationId}/notes/{noteId}', 
			'PATCH', 
			{ 'externalOrganizationId': externalOrganizationId,'noteId': noteId },
			{  },
			{  },
			{  },
			body, 
			['PureCloud OAuth'], 
			['application/json'],
			['application/json'],
			opts['customHeaders']
		);
	}

	/**
	 * Update specific fields of a relationship
	 * 
	 * @param {String} relationshipId Relationship Id
	 * @param {Object} body Relationship fields to update
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	patchExternalcontactsRelationship(relationshipId, body, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'relationshipId' is set
		if (relationshipId === undefined || relationshipId === null || relationshipId === '') {
			throw 'Missing the required parameter "relationshipId" when calling patchExternalcontactsRelationship';
		}
		// verify the required parameter 'body' is set
		if (body === undefined || body === null) {
			throw 'Missing the required parameter "body" when calling patchExternalcontactsRelationship';
		}

		return this.apiClient.callApi(
			'/api/v2/externalcontacts/relationships/{relationshipId}', 
			'PATCH', 
			{ 'relationshipId': relationshipId },
			{  },
			{  },
			{  },
			body, 
			['PureCloud OAuth'], 
			['application/json'],
			['application/json'],
			opts['customHeaders']
		);
	}

	/**
	 * Bulk fetch contacts
	 * 
	 * @param {Object} body Contact ids
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	postExternalcontactsBulkContacts(body, opts) { 
		opts = opts || {};
		
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
			['application/json'],
			opts['customHeaders']
		);
	}

	/**
	 * Bulk add contacts
	 * 
	 * @param {Object} body Contacts
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	postExternalcontactsBulkContactsAdd(body, opts) { 
		opts = opts || {};
		
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
			['application/json'],
			opts['customHeaders']
		);
	}

	/**
	 * Bulk fetch contacts across divisions
	 * 
	 * @param {Object} body Contact ids
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	postExternalcontactsBulkContactsDivisionviews(body, opts) { 
		opts = opts || {};
		
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
			['application/json'],
			opts['customHeaders']
		);
	}

	/**
	 * Bulk Enrich Contacts - Run up to 10 Enrich operations per request
	 * See the API endpoint /externalcontacts/contacts/enrich for docs on individual Enrich operations.
	 * @param {Object} body Contact Enrich Requests
	 * @param {Object} opts Optional parameters
	 * @param {Boolean} opts.dryRun If true, the request will not make any modifications, but will show you what the end result *would* be.
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
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
			['application/json'],
			opts['customHeaders']
		);
	}

	/**
	 * Bulk remove contacts
	 * 
	 * @param {Object} body Contact ids
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	postExternalcontactsBulkContactsRemove(body, opts) { 
		opts = opts || {};
		
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
			['application/json'],
			opts['customHeaders']
		);
	}

	/**
	 * Bulk fetch unresolved ancestor contacts
	 * 
	 * @param {Object} body Contact ids
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	postExternalcontactsBulkContactsUnresolved(body, opts) { 
		opts = opts || {};
		
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
			['application/json'],
			opts['customHeaders']
		);
	}

	/**
	 * Bulk update contacts
	 * 
	 * @param {Object} body Contacts
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	postExternalcontactsBulkContactsUpdate(body, opts) { 
		opts = opts || {};
		
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
			['application/json'],
			opts['customHeaders']
		);
	}

	/**
	 * Bulk fetch notes
	 * 
	 * @param {Object} body Note ids
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	postExternalcontactsBulkNotes(body, opts) { 
		opts = opts || {};
		
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
			['application/json'],
			opts['customHeaders']
		);
	}

	/**
	 * Bulk add notes
	 * 
	 * @param {Object} body Notes
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	postExternalcontactsBulkNotesAdd(body, opts) { 
		opts = opts || {};
		
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
			['application/json'],
			opts['customHeaders']
		);
	}

	/**
	 * Bulk remove notes
	 * 
	 * @param {Object} body Note ids
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	postExternalcontactsBulkNotesRemove(body, opts) { 
		opts = opts || {};
		
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
			['application/json'],
			opts['customHeaders']
		);
	}

	/**
	 * Bulk update notes
	 * 
	 * @param {Object} body Notes
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	postExternalcontactsBulkNotesUpdate(body, opts) { 
		opts = opts || {};
		
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
			['application/json'],
			opts['customHeaders']
		);
	}

	/**
	 * Bulk fetch organizations
	 * 
	 * @param {Object} body Organizations ids
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	postExternalcontactsBulkOrganizations(body, opts) { 
		opts = opts || {};
		
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
			['application/json'],
			opts['customHeaders']
		);
	}

	/**
	 * Bulk add organizations
	 * 
	 * @param {Object} body Organizations
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	postExternalcontactsBulkOrganizationsAdd(body, opts) { 
		opts = opts || {};
		
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
			['application/json'],
			opts['customHeaders']
		);
	}

	/**
	 * Bulk fetch organizations across divisions
	 * 
	 * @param {Object} body Organizations ids
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	postExternalcontactsBulkOrganizationsDivisionviews(body, opts) { 
		opts = opts || {};
		
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
			['application/json'],
			opts['customHeaders']
		);
	}

	/**
	 * Bulk enrich external organizations - Run up to 10 Enrich operations per request
	 * See the API endpoint /externalcontacts/organizations/enrich for docs on individual Enrich operations.
	 * @param {Object} body External Organization Enrich Requests
	 * @param {Object} opts Optional parameters
	 * @param {Boolean} opts.dryRun If true, the request will not make any modifications, but will show you what the end result *would* be.
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
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
			['application/json'],
			opts['customHeaders']
		);
	}

	/**
	 * Bulk remove organizations
	 * 
	 * @param {Object} body Organization ids
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	postExternalcontactsBulkOrganizationsRemove(body, opts) { 
		opts = opts || {};
		
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
			['application/json'],
			opts['customHeaders']
		);
	}

	/**
	 * Bulk update organizations
	 * 
	 * @param {Object} body Organizations
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	postExternalcontactsBulkOrganizationsUpdate(body, opts) { 
		opts = opts || {};
		
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
			['application/json'],
			opts['customHeaders']
		);
	}

	/**
	 * Bulk fetch relationships
	 * 
	 * @param {Object} body Relationships ids
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	postExternalcontactsBulkRelationships(body, opts) { 
		opts = opts || {};
		
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
			['application/json'],
			opts['customHeaders']
		);
	}

	/**
	 * Bulk add relationships
	 * 
	 * @param {Object} body Relationships
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	postExternalcontactsBulkRelationshipsAdd(body, opts) { 
		opts = opts || {};
		
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
			['application/json'],
			opts['customHeaders']
		);
	}

	/**
	 * Bulk remove relationships
	 * 
	 * @param {Object} body Relationships ids
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	postExternalcontactsBulkRelationshipsRemove(body, opts) { 
		opts = opts || {};
		
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
			['application/json'],
			opts['customHeaders']
		);
	}

	/**
	 * Bulk update relationships
	 * 
	 * @param {Object} body Relationships
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	postExternalcontactsBulkRelationshipsUpdate(body, opts) { 
		opts = opts || {};
		
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
			['application/json'],
			opts['customHeaders']
		);
	}

	/**
	 * Assign/Unassign up to 10 segments to/from an external contact or, if a segment is already assigned, update the expiry date of the segment assignment. Any unprocessed segment assignments are returned in the body for the client to retry, in the event of a partial success.
	 * 
	 * @param {String} contactId ExternalContact ID
	 * @param {Object} opts Optional parameters
	 * @param {Object} opts.body 
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	postExternalcontactsContactJourneySegments(contactId, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'contactId' is set
		if (contactId === undefined || contactId === null || contactId === '') {
			throw 'Missing the required parameter "contactId" when calling postExternalcontactsContactJourneySegments';
		}

		return this.apiClient.callApi(
			'/api/v2/externalcontacts/contacts/{contactId}/journey/segments', 
			'POST', 
			{ 'contactId': contactId },
			{  },
			{  },
			{  },
			opts['body'], 
			['PureCloud OAuth'], 
			['application/json'],
			['application/json'],
			opts['customHeaders']
		);
	}

	/**
	 * Create a note for an external contact
	 * 
	 * @param {String} contactId ExternalContact Id
	 * @param {Object} body ExternalContact
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	postExternalcontactsContactNotes(contactId, body, opts) { 
		opts = opts || {};
		
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
			['application/json'],
			opts['customHeaders']
		);
	}

	/**
	 * Promote an observed contact (ephemeral or identified) to a curated contact
	 * 
	 * @param {String} contactId ExternalContact ID
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	postExternalcontactsContactPromotion(contactId, opts) { 
		opts = opts || {};
		
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
			['application/json'],
			opts['customHeaders']
		);
	}

	/**
	 * Create an external contact
	 * 
	 * @param {Object} body ExternalContact
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	postExternalcontactsContacts(body, opts) { 
		opts = opts || {};
		
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
			['application/json'],
			opts['customHeaders']
		);
	}

	/**
	 * Modify or create an External Contact, with powerful behaviors for finding and combining data with pre-existing Contacts.
	 * You may also submit multiple Enrich operations in one request via the Bulk Enrich API at /externalcontacts/bulk/contacts. A 201 response status indicates that a new Contact was created, whereas a 200 status indicates that a Contact was updated or a merge occurred.
	 * @param {Object} body ContactEnrichRequest
	 * @param {Object} opts Optional parameters
	 * @param {Boolean} opts.dryRun If true, the request will not make any modifications, but will show you what the end result *would* be.
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
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
			['application/json'],
			opts['customHeaders']
		);
	}

	/**
	 * Create bulk export
	 * 
	 * @param {Object} body Export
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	postExternalcontactsContactsExports(body, opts) { 
		opts = opts || {};
		
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
			['application/json'],
			opts['customHeaders']
		);
	}

	/**
	 * Merge up to 25 contacts into a new contact record
	 * Merge operation may fail if the resulting mergeset exceeds our default limit of 52. The valueOverride field lets you override any of the Contact fields post-merge. If any Contact field is left null in `valueOverride`, it will be taken from the most recently-modified contact in the merge set. Exception for *phone/*email fields: Conflicting data will be moved to any other available phone/email fields in the merged contact.
	 * @param {Object} body MergeRequest
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	postExternalcontactsContactsMerge(body, opts) { 
		opts = opts || {};
		
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
			['application/json'],
			opts['customHeaders']
		);
	}

	/**
	 * Create a schema
	 * 
	 * @param {Object} body Schema
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	postExternalcontactsContactsSchemas(body, opts) { 
		opts = opts || {};
		
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
			['application/json'],
			opts['customHeaders']
		);
	}

	/**
	 * Create an External Source
	 * 
	 * @param {Object} body External Source
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	postExternalcontactsExternalsources(body, opts) { 
		opts = opts || {};
		
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
			['application/json'],
			opts['customHeaders']
		);
	}

	/**
	 * Fetch a contact using an identifier type and value.
	 * NOTE: Deprecated. Please use /api/v2/externalcontacts/identifierlookup/contacts as an alternative endpoint instead. Phone number identifier values must be provided with the country code and a leading + symbol. Example: "+1 704 298 4733"
	 * @param {Object} identifier 
	 * @param {Object} opts Optional parameters
	 * @param {Array.<String>} opts.expand which field, if any, to expand
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
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
			['application/json'],
			opts['customHeaders']
		);
	}

	/**
	 * Fetch a contact using an identifier type and value.
	 * Phone number identifier values must be provided with the country code and a leading + symbol. Example: "+1 704 298 4733"
	 * @param {Object} identifier 
	 * @param {Object} opts Optional parameters
	 * @param {Array.<String>} opts.expand which field, if any, to expand
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
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
			['application/json'],
			opts['customHeaders']
		);
	}

	/**
	 * Fetch an external organization using an identifier type and value.
	 * This endpoint will only accept ExternalId type identifiers.
	 * @param {Object} identifier 
	 * @param {Object} opts Optional parameters
	 * @param {Array.<String>} opts.expand which field, if any, to expand
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
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
			['application/json'],
			opts['customHeaders']
		);
	}

	/**
	 * Create CSV import job
	 * 
	 * @param {Object} body ImportRequest
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	postExternalcontactsImportCsvJobs(body, opts) { 
		opts = opts || {};
		
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
			['application/json'],
			opts['customHeaders']
		);
	}

	/**
	 * Create settings for CSV import
	 * 
	 * @param {Object} body Settings
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	postExternalcontactsImportCsvSettings(body, opts) { 
		opts = opts || {};
		
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
			['application/json'],
			opts['customHeaders']
		);
	}

	/**
	 * Get url for CSV upload
	 * 
	 * @param {Object} body UploadRequest
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	postExternalcontactsImportCsvUploads(body, opts) { 
		opts = opts || {};
		
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
			['application/json'],
			opts['customHeaders']
		);
	}

	/**
	 * Create a new job
	 * 
	 * @param {Object} body Job
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	postExternalcontactsImportJobs(body, opts) { 
		opts = opts || {};
		
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
			['application/json'],
			opts['customHeaders']
		);
	}

	/**
	 * Create a new settings
	 * 
	 * @param {Object} body Setting
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	postExternalcontactsImportSettings(body, opts) { 
		opts = opts || {};
		
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
			['application/json'],
			opts['customHeaders']
		);
	}

	/**
	 * Merge two contacts into a new contact record
	 * Two curated contacts cannot be merged. Refer to the Contact Merging article on the Developer Center for details. Deprecated: This API has been superseded by a new merge API. You are encouraged to instead use /api/v2/externalcontacts/contacts/merge, which supports merging up to 25 Contacts of any type, and overriding specific fields in the resulting Contact.
	 * @param {Object} body MergeRequest
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 * @deprecated
	 */
	postExternalcontactsMergeContacts(body, opts) { 
		opts = opts || {};
		
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
			['application/json'],
			opts['customHeaders']
		);
	}

	/**
	 * Create notes export
	 * 
	 * @param {Object} body Export
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	postExternalcontactsNotesExports(body, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'body' is set
		if (body === undefined || body === null) {
			throw 'Missing the required parameter "body" when calling postExternalcontactsNotesExports';
		}

		return this.apiClient.callApi(
			'/api/v2/externalcontacts/notes/exports', 
			'POST', 
			{  },
			{  },
			{  },
			{  },
			body, 
			['PureCloud OAuth'], 
			['application/json'],
			['application/json'],
			opts['customHeaders']
		);
	}

	/**
	 * Create a note for an external organization
	 * 
	 * @param {String} externalOrganizationId External Organization Id
	 * @param {Object} body ExternalContact
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	postExternalcontactsOrganizationNotes(externalOrganizationId, body, opts) { 
		opts = opts || {};
		
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
			['application/json'],
			opts['customHeaders']
		);
	}

	/**
	 * Create an external organization
	 * 
	 * @param {Object} body ExternalOrganization
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	postExternalcontactsOrganizations(body, opts) { 
		opts = opts || {};
		
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
			['application/json'],
			opts['customHeaders']
		);
	}

	/**
	 * Modify or create an External Org, with powerful behaviors for finding and combining data with pre-existing External Orgs.
	 * You may also submit multiple Enrich operations in one request via the Bulk Enrich API at /externalcontacts/bulk/organizations. A 201 response status indicates that a new External Organization was created, whereas a 200 status indicates that an External Organization was updated
	 * @param {Object} body ExternalOrgEnrichRequest
	 * @param {Object} opts Optional parameters
	 * @param {Boolean} opts.dryRun If true, the request will not make any modifications, but will show you what the end result *would* be.
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
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
			['application/json'],
			opts['customHeaders']
		);
	}

	/**
	 * Create organizations export
	 * 
	 * @param {Object} body Export
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	postExternalcontactsOrganizationsExports(body, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'body' is set
		if (body === undefined || body === null) {
			throw 'Missing the required parameter "body" when calling postExternalcontactsOrganizationsExports';
		}

		return this.apiClient.callApi(
			'/api/v2/externalcontacts/organizations/exports', 
			'POST', 
			{  },
			{  },
			{  },
			{  },
			body, 
			['PureCloud OAuth'], 
			['application/json'],
			['application/json'],
			opts['customHeaders']
		);
	}

	/**
	 * Create a schema
	 * 
	 * @param {Object} body Schema
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	postExternalcontactsOrganizationsSchemas(body, opts) { 
		opts = opts || {};
		
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
			['application/json'],
			opts['customHeaders']
		);
	}

	/**
	 * Create a relationship
	 * 
	 * @param {Object} body Relationship
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	postExternalcontactsRelationships(body, opts) { 
		opts = opts || {};
		
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
			['application/json'],
			opts['customHeaders']
		);
	}

	/**
	 * Create relationships export
	 * 
	 * @param {Object} body Export
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	postExternalcontactsRelationshipsExports(body, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'body' is set
		if (body === undefined || body === null) {
			throw 'Missing the required parameter "body" when calling postExternalcontactsRelationshipsExports';
		}

		return this.apiClient.callApi(
			'/api/v2/externalcontacts/relationships/exports', 
			'POST', 
			{  },
			{  },
			{  },
			{  },
			body, 
			['PureCloud OAuth'], 
			['application/json'],
			['application/json'],
			opts['customHeaders']
		);
	}

	/**
	 * Update an external contact
	 * 
	 * @param {String} contactId ExternalContact ID
	 * @param {Object} body ExternalContact
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	putExternalcontactsContact(contactId, body, opts) { 
		opts = opts || {};
		
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
			['application/json'],
			opts['customHeaders']
		);
	}

	/**
	 * Update a note for an external contact
	 * 
	 * @param {String} contactId ExternalContact Id
	 * @param {String} noteId Note Id
	 * @param {Object} body Note
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	putExternalcontactsContactNote(contactId, noteId, body, opts) { 
		opts = opts || {};
		
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
			['application/json'],
			opts['customHeaders']
		);
	}

	/**
	 * Update a schema
	 * 
	 * @param {String} schemaId Schema ID
	 * @param {Object} body Data Schema
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	putExternalcontactsContactsSchema(schemaId, body, opts) { 
		opts = opts || {};
		
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
			['application/json'],
			opts['customHeaders']
		);
	}

	/**
	 * Associate/disassociate an external contact with a conversation
	 * To associate, supply a value for the externalContactId.  To disassociate, do not include the property at all.
	 * @param {String} conversationId Conversation ID
	 * @param {Object} body ConversationAssociation
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	putExternalcontactsConversation(conversationId, body, opts) { 
		opts = opts || {};
		
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
			['application/json'],
			opts['customHeaders']
		);
	}

	/**
	 * Update an External Source
	 * 
	 * @param {String} externalSourceId External Source ID
	 * @param {Object} body External Source
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	putExternalcontactsExternalsource(externalSourceId, body, opts) { 
		opts = opts || {};
		
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
			['application/json'],
			opts['customHeaders']
		);
	}

	/**
	 * Update settings for CSV import
	 * 
	 * @param {String} settingsId Settings id
	 * @param {Object} body Settings
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	putExternalcontactsImportCsvSetting(settingsId, body, opts) { 
		opts = opts || {};
		
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
			['application/json'],
			opts['customHeaders']
		);
	}

	/**
	 * Update Job's workflow status
	 * 
	 * @param {String} jobId Job id
	 * @param {Object} body Status of the Job's workflow
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	putExternalcontactsImportJob(jobId, body, opts) { 
		opts = opts || {};
		
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
			['application/json'],
			opts['customHeaders']
		);
	}

	/**
	 * Update settings
	 * 
	 * @param {String} settingsId Settings id
	 * @param {Object} body Setting
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	putExternalcontactsImportSetting(settingsId, body, opts) { 
		opts = opts || {};
		
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
			['application/json'],
			opts['customHeaders']
		);
	}

	/**
	 * Update an external organization
	 * 
	 * @param {String} externalOrganizationId External Organization ID
	 * @param {Object} body ExternalOrganization
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	putExternalcontactsOrganization(externalOrganizationId, body, opts) { 
		opts = opts || {};
		
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
			['application/json'],
			opts['customHeaders']
		);
	}

	/**
	 * Update a note for an external organization
	 * 
	 * @param {String} externalOrganizationId External Organization Id
	 * @param {String} noteId Note Id
	 * @param {Object} body Note
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	putExternalcontactsOrganizationNote(externalOrganizationId, noteId, body, opts) { 
		opts = opts || {};
		
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
			['application/json'],
			opts['customHeaders']
		);
	}

	/**
	 * Links a Trustor with an External Organization
	 * 
	 * @param {String} externalOrganizationId External Organization ID
	 * @param {String} trustorId Trustor ID
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	putExternalcontactsOrganizationTrustorTrustorId(externalOrganizationId, trustorId, opts) { 
		opts = opts || {};
		
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
			['application/json'],
			opts['customHeaders']
		);
	}

	/**
	 * Update a schema
	 * 
	 * @param {String} schemaId Schema ID
	 * @param {Object} body Data Schema
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	putExternalcontactsOrganizationsSchema(schemaId, body, opts) { 
		opts = opts || {};
		
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
			['application/json'],
			opts['customHeaders']
		);
	}

	/**
	 * Update a relationship
	 * 
	 * @param {String} relationshipId Relationship Id
	 * @param {Object} body Relationship
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	putExternalcontactsRelationship(relationshipId, body, opts) { 
		opts = opts || {};
		
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
			['application/json'],
			opts['customHeaders']
		);
	}

}


export default ExternalContactsApi;
