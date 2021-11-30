import ApiClient from '../ApiClient.js';


class ExternalContactsApi {
	/**
	 * ExternalContacts service.
	 * @module purecloud-platform-client-v2/api/ExternalContactsApi
	 * @version 126.1.0
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
		if (contactId === undefined || contactId === null) {
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
		if (contactId === undefined || contactId === null) {
			throw 'Missing the required parameter "contactId" when calling deleteExternalcontactsContactNote';
		}
		// verify the required parameter 'noteId' is set
		if (noteId === undefined || noteId === null) {
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
		if (schemaId === undefined || schemaId === null) {
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
	 * Delete an external organization
	 * 
	 * @param {String} externalOrganizationId External Organization ID
	 */
	deleteExternalcontactsOrganization(externalOrganizationId) { 
		// verify the required parameter 'externalOrganizationId' is set
		if (externalOrganizationId === undefined || externalOrganizationId === null) {
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
		if (externalOrganizationId === undefined || externalOrganizationId === null) {
			throw 'Missing the required parameter "externalOrganizationId" when calling deleteExternalcontactsOrganizationNote';
		}
		// verify the required parameter 'noteId' is set
		if (noteId === undefined || noteId === null) {
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
		if (externalOrganizationId === undefined || externalOrganizationId === null) {
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
		if (relationshipId === undefined || relationshipId === null) {
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
	 * @param {Array.<String>} opts.expand which fields, if any, to expand (externalOrganization,externalDataSources)
	 */
	getExternalcontactsContact(contactId, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'contactId' is set
		if (contactId === undefined || contactId === null) {
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
		if (contactId === undefined || contactId === null) {
			throw 'Missing the required parameter "contactId" when calling getExternalcontactsContactNote';
		}
		// verify the required parameter 'noteId' is set
		if (noteId === undefined || noteId === null) {
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
	 * @param {Number} opts.pageSize Page size (limited to fetching first 1,000 records; pageNumber * pageSize must be &lt;= 1,000) (default to 20)
	 * @param {Number} opts.pageNumber Page number (limited to fetching first 1,000 records; pageNumber * pageSize must be &lt;= 1,000) (default to 1)
	 * @param {String} opts.sortOrder Sort order
	 * @param {Array.<String>} opts.expand which fields, if any, to expand
	 */
	getExternalcontactsContactNotes(contactId, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'contactId' is set
		if (contactId === undefined || contactId === null) {
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
	 * Search for external contacts
	 * 
	 * @param {Object} opts Optional parameters
	 * @param {Number} opts.pageSize Page size (limited to fetching first 1,000 records; pageNumber * pageSize must be &lt;= 1,000) (default to 20)
	 * @param {Number} opts.pageNumber Page number (limited to fetching first 1,000 records; pageNumber * pageSize must be &lt;= 1,000) (default to 1)
	 * @param {String} opts.q User supplied search keywords (no special syntax is currently supported)
	 * @param {String} opts.sortOrder Sort order
	 * @param {Array.<String>} opts.expand which fields, if any, to expand
	 */
	getExternalcontactsContacts(opts) { 
		opts = opts || {};
		

		return this.apiClient.callApi(
			'/api/v2/externalcontacts/contacts', 
			'GET', 
			{  }, 
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
	 * Get a schema
	 * 
	 * @param {String} schemaId Schema ID
	 */
	getExternalcontactsContactsSchema(schemaId) { 
		// verify the required parameter 'schemaId' is set
		if (schemaId === undefined || schemaId === null) {
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
		if (schemaId === undefined || schemaId === null) {
			throw 'Missing the required parameter "schemaId" when calling getExternalcontactsContactsSchemaVersion';
		}
		// verify the required parameter 'versionId' is set
		if (versionId === undefined || versionId === null) {
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
	 * Get all versions of an external contact&#39;s schema
	 * 
	 * @param {String} schemaId Schema ID
	 */
	getExternalcontactsContactsSchemaVersions(schemaId) { 
		// verify the required parameter 'schemaId' is set
		if (schemaId === undefined || schemaId === null) {
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
	 * Fetch an external organization
	 * 
	 * @param {String} externalOrganizationId External Organization ID
	 * @param {Object} opts Optional parameters
	 * @param {Object} opts.expand which fields, if any, to expand (externalDataSources)
	 * @param {Boolean} opts.includeTrustors (true or false) whether or not to include trustor information embedded in the externalOrganization
	 */
	getExternalcontactsOrganization(externalOrganizationId, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'externalOrganizationId' is set
		if (externalOrganizationId === undefined || externalOrganizationId === null) {
			throw 'Missing the required parameter "externalOrganizationId" when calling getExternalcontactsOrganization';
		}

		return this.apiClient.callApi(
			'/api/v2/externalcontacts/organizations/{externalOrganizationId}', 
			'GET', 
			{ 'externalOrganizationId': externalOrganizationId }, 
			{ 'expand': opts['expand'],'includeTrustors': opts['includeTrustors'] }, 
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
	 * @param {Number} opts.pageSize Page size (limited to fetching first 1,000 records; pageNumber * pageSize must be &lt;= 1,000) (default to 20)
	 * @param {Number} opts.pageNumber Page number (limited to fetching first 1,000 records; pageNumber * pageSize must be &lt;= 1,000) (default to 1)
	 * @param {String} opts.q User supplied search keywords (no special syntax is currently supported)
	 * @param {String} opts.sortOrder Sort order
	 * @param {Array.<String>} opts.expand which fields, if any, to expand
	 */
	getExternalcontactsOrganizationContacts(externalOrganizationId, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'externalOrganizationId' is set
		if (externalOrganizationId === undefined || externalOrganizationId === null) {
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
		if (externalOrganizationId === undefined || externalOrganizationId === null) {
			throw 'Missing the required parameter "externalOrganizationId" when calling getExternalcontactsOrganizationNote';
		}
		// verify the required parameter 'noteId' is set
		if (noteId === undefined || noteId === null) {
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
	 * @param {Number} opts.pageSize Page size (limited to fetching first 1,000 records; pageNumber * pageSize must be &lt;= 1,000) (default to 20)
	 * @param {Number} opts.pageNumber Page number (limited to fetching first 1,000 records; pageNumber * pageSize must be &lt;= 1,000) (default to 1)
	 * @param {String} opts.sortOrder Sort order
	 * @param {Array.<String>} opts.expand which fields, if any, to expand
	 */
	getExternalcontactsOrganizationNotes(externalOrganizationId, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'externalOrganizationId' is set
		if (externalOrganizationId === undefined || externalOrganizationId === null) {
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
	 * @param {Number} opts.pageSize Page size (limited to fetching first 1,000 records; pageNumber * pageSize must be &lt;= 1,000) (default to 20)
	 * @param {Number} opts.pageNumber Page number (limited to fetching first 1,000 records; pageNumber * pageSize must be &lt;= 1,000) (default to 1)
	 * @param {Object} opts.expand which fields, if any, to expand
	 * @param {String} opts.sortOrder Sort order
	 */
	getExternalcontactsOrganizationRelationships(externalOrganizationId, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'externalOrganizationId' is set
		if (externalOrganizationId === undefined || externalOrganizationId === null) {
			throw 'Missing the required parameter "externalOrganizationId" when calling getExternalcontactsOrganizationRelationships';
		}

		return this.apiClient.callApi(
			'/api/v2/externalcontacts/organizations/{externalOrganizationId}/relationships', 
			'GET', 
			{ 'externalOrganizationId': externalOrganizationId }, 
			{ 'pageSize': opts['pageSize'],'pageNumber': opts['pageNumber'],'expand': opts['expand'],'sortOrder': opts['sortOrder'] }, 
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
	 * @param {Number} opts.pageSize Page size (limited to fetching first 1,000 records; pageNumber * pageSize must be &lt;= 1,000) (default to 20)
	 * @param {Number} opts.pageNumber Page number (limited to fetching first 1,000 records; pageNumber * pageSize must be &lt;= 1,000) (default to 1)
	 * @param {String} opts.q Search query
	 * @param {Array.<String>} opts.trustorId Search for external organizations by trustorIds (limit 25). If supplied, the &#39;q&#39; parameters is ignored. Items are returned in the order requested
	 * @param {String} opts.sortOrder Sort order
	 * @param {Array.<String>} opts.expand which fields, if any, to expand
	 * @param {Boolean} opts.includeTrustors (true or false) whether or not to include trustor information embedded in the externalOrganization
	 */
	getExternalcontactsOrganizations(opts) { 
		opts = opts || {};
		

		return this.apiClient.callApi(
			'/api/v2/externalcontacts/organizations', 
			'GET', 
			{  }, 
			{ 'pageSize': opts['pageSize'],'pageNumber': opts['pageNumber'],'q': opts['q'],'trustorId': this.apiClient.buildCollectionParam(opts['trustorId'], 'multi'),'sortOrder': opts['sortOrder'],'expand': this.apiClient.buildCollectionParam(opts['expand'], 'multi'),'includeTrustors': opts['includeTrustors'] }, 
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
		if (schemaId === undefined || schemaId === null) {
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
		if (schemaId === undefined || schemaId === null) {
			throw 'Missing the required parameter "schemaId" when calling getExternalcontactsOrganizationsSchemaVersion';
		}
		// verify the required parameter 'versionId' is set
		if (versionId === undefined || versionId === null) {
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
	 * Get all versions of an external organization&#39;s schema
	 * 
	 * @param {String} schemaId Schema ID
	 */
	getExternalcontactsOrganizationsSchemaVersions(schemaId) { 
		// verify the required parameter 'schemaId' is set
		if (schemaId === undefined || schemaId === null) {
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
	 * Fetch a relationship
	 * 
	 * @param {String} relationshipId Relationship Id
	 * @param {Object} opts Optional parameters
	 * @param {Object} opts.expand which fields, if any, to expand
	 */
	getExternalcontactsRelationship(relationshipId, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'relationshipId' is set
		if (relationshipId === undefined || relationshipId === null) {
			throw 'Missing the required parameter "relationshipId" when calling getExternalcontactsRelationship';
		}

		return this.apiClient.callApi(
			'/api/v2/externalcontacts/relationships/{relationshipId}', 
			'GET', 
			{ 'relationshipId': relationshipId }, 
			{ 'expand': opts['expand'] }, 
			{  }, 
			{  }, 
			null, 
			['PureCloud OAuth'], 
			['application/json'], 
			['application/json']
		);
	}

	/**
	 * Look up contacts and externalOrganizations based on an attribute. Maximum of 25 values returned.
	 * 
	 * @param {String} lookupVal User supplied value to lookup contacts/externalOrganizations (supports email addresses, e164 phone numbers, Twitter screen names)
	 * @param {Object} opts Optional parameters
	 * @param {Array.<String>} opts.expand which field, if any, to expand
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
			{ 'lookupVal': lookupVal,'expand': this.apiClient.buildCollectionParam(opts['expand'], 'multi') }, 
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
	 * @param {Number} opts.limit The number of contacts per page; must be between 10 and 200, default is 100)
	 * @param {String} opts.cursor Indicates where to resume query results (not required for first page), each page returns a new cursor with a 24h TTL
	 */
	getExternalcontactsScanContacts(opts) { 
		opts = opts || {};
		

		return this.apiClient.callApi(
			'/api/v2/externalcontacts/scan/contacts', 
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
	 * @param {Number} opts.limit The number of notes per page; must be between 10 and 200, default is 100)
	 * @param {String} opts.cursor Indicates where to resume query results (not required for first page), each page returns a new cursor with a 24h TTL
	 */
	getExternalcontactsScanNotes(opts) { 
		opts = opts || {};
		

		return this.apiClient.callApi(
			'/api/v2/externalcontacts/scan/notes', 
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
	 * @param {Number} opts.limit The number of organizations per page; must be between 10 and 200, default is 100)
	 * @param {String} opts.cursor Indicates where to resume query results (not required for first page), each page returns a new cursor with a 24h TTL
	 */
	getExternalcontactsScanOrganizations(opts) { 
		opts = opts || {};
		

		return this.apiClient.callApi(
			'/api/v2/externalcontacts/scan/organizations', 
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
	 * @param {Number} opts.limit The number of relationships per page; must be between 10 and 200, default is 100)
	 * @param {String} opts.cursor Indicates where to resume query results (not required for first page), each page returns a new cursor with a 24h TTL
	 */
	getExternalcontactsScanRelationships(opts) { 
		opts = opts || {};
		

		return this.apiClient.callApi(
			'/api/v2/externalcontacts/scan/relationships', 
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
		if (contactId === undefined || contactId === null) {
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
	 * Create a note for an external organization
	 * 
	 * @param {String} externalOrganizationId External Organization Id
	 * @param {Object} body ExternalContact
	 */
	postExternalcontactsOrganizationNotes(externalOrganizationId, body) { 
		// verify the required parameter 'externalOrganizationId' is set
		if (externalOrganizationId === undefined || externalOrganizationId === null) {
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
		if (contactId === undefined || contactId === null) {
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
		if (contactId === undefined || contactId === null) {
			throw 'Missing the required parameter "contactId" when calling putExternalcontactsContactNote';
		}
		// verify the required parameter 'noteId' is set
		if (noteId === undefined || noteId === null) {
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
		if (schemaId === undefined || schemaId === null) {
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
	 * @param {Object} body ConversationAssociation
	 * @param {String} conversationId Conversation ID
	 */
	putExternalcontactsConversation(body, conversationId) { 
		// verify the required parameter 'body' is set
		if (body === undefined || body === null) {
			throw 'Missing the required parameter "body" when calling putExternalcontactsConversation';
		}
		// verify the required parameter 'conversationId' is set
		if (conversationId === undefined || conversationId === null) {
			throw 'Missing the required parameter "conversationId" when calling putExternalcontactsConversation';
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
	 * Update an external organization
	 * 
	 * @param {String} externalOrganizationId External Organization ID
	 * @param {Object} body ExternalOrganization
	 */
	putExternalcontactsOrganization(externalOrganizationId, body) { 
		// verify the required parameter 'externalOrganizationId' is set
		if (externalOrganizationId === undefined || externalOrganizationId === null) {
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
		if (externalOrganizationId === undefined || externalOrganizationId === null) {
			throw 'Missing the required parameter "externalOrganizationId" when calling putExternalcontactsOrganizationNote';
		}
		// verify the required parameter 'noteId' is set
		if (noteId === undefined || noteId === null) {
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
		if (externalOrganizationId === undefined || externalOrganizationId === null) {
			throw 'Missing the required parameter "externalOrganizationId" when calling putExternalcontactsOrganizationTrustorTrustorId';
		}
		// verify the required parameter 'trustorId' is set
		if (trustorId === undefined || trustorId === null) {
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
		if (schemaId === undefined || schemaId === null) {
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
		if (relationshipId === undefined || relationshipId === null) {
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