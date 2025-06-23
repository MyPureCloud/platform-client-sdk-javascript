import ApiClient from '../ApiClient.js';


class BusinessRulesApi {
	/**
	 * BusinessRules service.
	 * @module purecloud-platform-client-v2/api/BusinessRulesApi
	 * @version 225.0.0
	 */

	/**
	 * Constructs a new BusinessRulesApi. 
	 * @alias module:purecloud-platform-client-v2/api/BusinessRulesApi
	 * @class
	 * @param {module:purecloud-platform-client-v2/ApiClient} apiClient Optional API client implementation to use,
	 * default to {@link module:purecloud-platform-client-v2/ApiClient#instance} if unspecified.
	 */
	constructor(apiClient) {
		this.apiClient = apiClient || ApiClient.instance;
	}


	/**
	 * Delete a decision table
	 * 
	 * @param {String} tableId Table ID
	 * @param {Object} opts Optional parameters
	 * @param {Boolean} opts.forceDelete Force delete decision table (under certain conditions) (default to false)
	 * deleteBusinessrulesDecisiontable is a preview method and is subject to both breaking and non-breaking changes at any time without notice
	 */
	deleteBusinessrulesDecisiontable(tableId, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'tableId' is set
		if (tableId === undefined || tableId === null || tableId === '') {
			throw 'Missing the required parameter "tableId" when calling deleteBusinessrulesDecisiontable';
		}

		return this.apiClient.callApi(
			'/api/v2/businessrules/decisiontables/{tableId}', 
			'DELETE', 
			{ 'tableId': tableId },
			{ 'forceDelete': opts['forceDelete'] },
			{  },
			{  },
			null, 
			['PureCloud OAuth'], 
			['application/json'],
			['application/json']
		);
	}

	/**
	 * Delete a decision table version
	 * 
	 * @param {String} tableId Table ID
	 * @param {Number} tableVersion Table Version
	 * deleteBusinessrulesDecisiontableVersion is a preview method and is subject to both breaking and non-breaking changes at any time without notice
	 */
	deleteBusinessrulesDecisiontableVersion(tableId, tableVersion) { 
		// verify the required parameter 'tableId' is set
		if (tableId === undefined || tableId === null || tableId === '') {
			throw 'Missing the required parameter "tableId" when calling deleteBusinessrulesDecisiontableVersion';
		}
		// verify the required parameter 'tableVersion' is set
		if (tableVersion === undefined || tableVersion === null) {
			throw 'Missing the required parameter "tableVersion" when calling deleteBusinessrulesDecisiontableVersion';
		}

		return this.apiClient.callApi(
			'/api/v2/businessrules/decisiontables/{tableId}/versions/{tableVersion}', 
			'DELETE', 
			{ 'tableId': tableId,'tableVersion': tableVersion },
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
	 * Delete a decision table row
	 * 
	 * @param {String} tableId Table ID
	 * @param {Number} tableVersion Table Version
	 * @param {String} rowId Row ID
	 * deleteBusinessrulesDecisiontableVersionRow is a preview method and is subject to both breaking and non-breaking changes at any time without notice
	 */
	deleteBusinessrulesDecisiontableVersionRow(tableId, tableVersion, rowId) { 
		// verify the required parameter 'tableId' is set
		if (tableId === undefined || tableId === null || tableId === '') {
			throw 'Missing the required parameter "tableId" when calling deleteBusinessrulesDecisiontableVersionRow';
		}
		// verify the required parameter 'tableVersion' is set
		if (tableVersion === undefined || tableVersion === null) {
			throw 'Missing the required parameter "tableVersion" when calling deleteBusinessrulesDecisiontableVersionRow';
		}
		// verify the required parameter 'rowId' is set
		if (rowId === undefined || rowId === null || rowId === '') {
			throw 'Missing the required parameter "rowId" when calling deleteBusinessrulesDecisiontableVersionRow';
		}

		return this.apiClient.callApi(
			'/api/v2/businessrules/decisiontables/{tableId}/versions/{tableVersion}/rows/{rowId}', 
			'DELETE', 
			{ 'tableId': tableId,'tableVersion': tableVersion,'rowId': rowId },
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
	 * deleteBusinessrulesSchema is a preview method and is subject to both breaking and non-breaking changes at any time without notice
	 */
	deleteBusinessrulesSchema(schemaId) { 
		// verify the required parameter 'schemaId' is set
		if (schemaId === undefined || schemaId === null || schemaId === '') {
			throw 'Missing the required parameter "schemaId" when calling deleteBusinessrulesSchema';
		}

		return this.apiClient.callApi(
			'/api/v2/businessrules/schemas/{schemaId}', 
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
	 * Get a decision table
	 * 
	 * @param {String} tableId Table ID
	 * getBusinessrulesDecisiontable is a preview method and is subject to both breaking and non-breaking changes at any time without notice
	 */
	getBusinessrulesDecisiontable(tableId) { 
		// verify the required parameter 'tableId' is set
		if (tableId === undefined || tableId === null || tableId === '') {
			throw 'Missing the required parameter "tableId" when calling getBusinessrulesDecisiontable';
		}

		return this.apiClient.callApi(
			'/api/v2/businessrules/decisiontables/{tableId}', 
			'GET', 
			{ 'tableId': tableId },
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
	 * Get a decision table version
	 * 
	 * @param {String} tableId Table ID
	 * @param {Number} tableVersion Table Version
	 * getBusinessrulesDecisiontableVersion is a preview method and is subject to both breaking and non-breaking changes at any time without notice
	 */
	getBusinessrulesDecisiontableVersion(tableId, tableVersion) { 
		// verify the required parameter 'tableId' is set
		if (tableId === undefined || tableId === null || tableId === '') {
			throw 'Missing the required parameter "tableId" when calling getBusinessrulesDecisiontableVersion';
		}
		// verify the required parameter 'tableVersion' is set
		if (tableVersion === undefined || tableVersion === null) {
			throw 'Missing the required parameter "tableVersion" when calling getBusinessrulesDecisiontableVersion';
		}

		return this.apiClient.callApi(
			'/api/v2/businessrules/decisiontables/{tableId}/versions/{tableVersion}', 
			'GET', 
			{ 'tableId': tableId,'tableVersion': tableVersion },
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
	 * Get a decision table row
	 * 
	 * @param {String} tableId Table ID
	 * @param {Number} tableVersion Table Version
	 * @param {String} rowId Row ID
	 * getBusinessrulesDecisiontableVersionRow is a preview method and is subject to both breaking and non-breaking changes at any time without notice
	 */
	getBusinessrulesDecisiontableVersionRow(tableId, tableVersion, rowId) { 
		// verify the required parameter 'tableId' is set
		if (tableId === undefined || tableId === null || tableId === '') {
			throw 'Missing the required parameter "tableId" when calling getBusinessrulesDecisiontableVersionRow';
		}
		// verify the required parameter 'tableVersion' is set
		if (tableVersion === undefined || tableVersion === null) {
			throw 'Missing the required parameter "tableVersion" when calling getBusinessrulesDecisiontableVersionRow';
		}
		// verify the required parameter 'rowId' is set
		if (rowId === undefined || rowId === null || rowId === '') {
			throw 'Missing the required parameter "rowId" when calling getBusinessrulesDecisiontableVersionRow';
		}

		return this.apiClient.callApi(
			'/api/v2/businessrules/decisiontables/{tableId}/versions/{tableVersion}/rows/{rowId}', 
			'GET', 
			{ 'tableId': tableId,'tableVersion': tableVersion,'rowId': rowId },
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
	 * Get a list of decision table rows.
	 * 
	 * @param {String} tableId Table ID
	 * @param {Number} tableVersion Table Version
	 * @param {Object} opts Optional parameters
	 * @param {String} opts.pageNumber Page number of the entities to return. Defaults to 1.
	 * @param {String} opts.pageSize Number of entities to return. Maximum of 100. Defaults to 25.
	 * getBusinessrulesDecisiontableVersionRows is a preview method and is subject to both breaking and non-breaking changes at any time without notice
	 */
	getBusinessrulesDecisiontableVersionRows(tableId, tableVersion, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'tableId' is set
		if (tableId === undefined || tableId === null || tableId === '') {
			throw 'Missing the required parameter "tableId" when calling getBusinessrulesDecisiontableVersionRows';
		}
		// verify the required parameter 'tableVersion' is set
		if (tableVersion === undefined || tableVersion === null) {
			throw 'Missing the required parameter "tableVersion" when calling getBusinessrulesDecisiontableVersionRows';
		}

		return this.apiClient.callApi(
			'/api/v2/businessrules/decisiontables/{tableId}/versions/{tableVersion}/rows', 
			'GET', 
			{ 'tableId': tableId,'tableVersion': tableVersion },
			{ 'pageNumber': opts['pageNumber'],'pageSize': opts['pageSize'] },
			{  },
			{  },
			null, 
			['PureCloud OAuth'], 
			['application/json'],
			['application/json']
		);
	}

	/**
	 * Get a list of decision table versions
	 * 
	 * @param {String} tableId Table ID
	 * @param {Object} opts Optional parameters
	 * @param {String} opts.after The cursor that points to the end of the set of entities that has been returned.
	 * @param {String} opts.pageSize Number of entities to return. Maximum of 100.
	 * @param {Array.<String>} opts.divisionIds One or more comma separated divisions to filters decision tables by. If nothing is provided, the decision tables associated with the list of divisions that the user has access to will be returned.
	 * getBusinessrulesDecisiontableVersions is a preview method and is subject to both breaking and non-breaking changes at any time without notice
	 */
	getBusinessrulesDecisiontableVersions(tableId, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'tableId' is set
		if (tableId === undefined || tableId === null || tableId === '') {
			throw 'Missing the required parameter "tableId" when calling getBusinessrulesDecisiontableVersions';
		}

		return this.apiClient.callApi(
			'/api/v2/businessrules/decisiontables/{tableId}/versions', 
			'GET', 
			{ 'tableId': tableId },
			{ 'after': opts['after'],'pageSize': opts['pageSize'],'divisionIds': this.apiClient.buildCollectionParam(opts['divisionIds'], 'multi') },
			{  },
			{  },
			null, 
			['PureCloud OAuth'], 
			['application/json'],
			['application/json']
		);
	}

	/**
	 * Get a list of decision tables.
	 * 
	 * @param {Object} opts Optional parameters
	 * @param {String} opts.after The cursor that points to the end of the set of entities that has been returned.
	 * @param {String} opts.pageSize Number of entities to return. Maximum of 100.
	 * @param {Array.<String>} opts.divisionIds One or more comma separated divisions to filters decision tables by. If nothing is provided, the decision tables associated with the list of divisions that the user has access to will be returned.
	 * getBusinessrulesDecisiontables is a preview method and is subject to both breaking and non-breaking changes at any time without notice
	 */
	getBusinessrulesDecisiontables(opts) { 
		opts = opts || {};
		

		return this.apiClient.callApi(
			'/api/v2/businessrules/decisiontables', 
			'GET', 
			{  },
			{ 'after': opts['after'],'pageSize': opts['pageSize'],'divisionIds': this.apiClient.buildCollectionParam(opts['divisionIds'], 'multi') },
			{  },
			{  },
			null, 
			['PureCloud OAuth'], 
			['application/json'],
			['application/json']
		);
	}

	/**
	 * Search for decision tables.
	 * 
	 * @param {Object} opts Optional parameters
	 * @param {String} opts.after The cursor that points to the end of the set of entities that has been returned.
	 * @param {String} opts.pageSize Number of entities to return. Maximum of 100.
	 * @param {String} opts.schemaId Search for decision tables that use the schema with this ID. Cannot be combined with name search. Search results will not be paginated if used.
	 * @param {String} opts.name Search for decision tables with a name that contains the given search string. Search is case insensitive and will match any table that contains this string in any part of the name. Cannot be combined with schema search. Search results will not be paginated if used.
	 * @param {Boolean} opts.withPublishedVersion Filters results to only decision tables that have at least one version in Published status
	 * @param {Array.<String>} opts.expand Fields to expand in response
	 * @param {Array.<String>} opts.ids Decision table IDs to search for
	 * getBusinessrulesDecisiontablesSearch is a preview method and is subject to both breaking and non-breaking changes at any time without notice
	 */
	getBusinessrulesDecisiontablesSearch(opts) { 
		opts = opts || {};
		

		return this.apiClient.callApi(
			'/api/v2/businessrules/decisiontables/search', 
			'GET', 
			{  },
			{ 'after': opts['after'],'pageSize': opts['pageSize'],'schemaId': opts['schemaId'],'name': opts['name'],'withPublishedVersion': opts['withPublishedVersion'],'expand': this.apiClient.buildCollectionParam(opts['expand'], 'multi'),'ids': this.apiClient.buildCollectionParam(opts['ids'], 'multi') },
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
	 * getBusinessrulesSchema is a preview method and is subject to both breaking and non-breaking changes at any time without notice
	 */
	getBusinessrulesSchema(schemaId) { 
		// verify the required parameter 'schemaId' is set
		if (schemaId === undefined || schemaId === null || schemaId === '') {
			throw 'Missing the required parameter "schemaId" when calling getBusinessrulesSchema';
		}

		return this.apiClient.callApi(
			'/api/v2/businessrules/schemas/{schemaId}', 
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
	 * getBusinessrulesSchemas is a preview method and is subject to both breaking and non-breaking changes at any time without notice
	 */
	getBusinessrulesSchemas() { 

		return this.apiClient.callApi(
			'/api/v2/businessrules/schemas', 
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
	 * @param {String} coreTypeName The core type's name
	 * getBusinessrulesSchemasCoretype is a preview method and is subject to both breaking and non-breaking changes at any time without notice
	 */
	getBusinessrulesSchemasCoretype(coreTypeName) { 
		// verify the required parameter 'coreTypeName' is set
		if (coreTypeName === undefined || coreTypeName === null || coreTypeName === '') {
			throw 'Missing the required parameter "coreTypeName" when calling getBusinessrulesSchemasCoretype';
		}

		return this.apiClient.callApi(
			'/api/v2/businessrules/schemas/coretypes/{coreTypeName}', 
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
	 * getBusinessrulesSchemasCoretypes is a preview method and is subject to both breaking and non-breaking changes at any time without notice
	 */
	getBusinessrulesSchemasCoretypes() { 

		return this.apiClient.callApi(
			'/api/v2/businessrules/schemas/coretypes', 
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
	 * Update a decision table
	 * 
	 * @param {String} tableId Table ID
	 * @param {Object} body Decision Table
	 * patchBusinessrulesDecisiontable is a preview method and is subject to both breaking and non-breaking changes at any time without notice
	 */
	patchBusinessrulesDecisiontable(tableId, body) { 
		// verify the required parameter 'tableId' is set
		if (tableId === undefined || tableId === null || tableId === '') {
			throw 'Missing the required parameter "tableId" when calling patchBusinessrulesDecisiontable';
		}
		// verify the required parameter 'body' is set
		if (body === undefined || body === null) {
			throw 'Missing the required parameter "body" when calling patchBusinessrulesDecisiontable';
		}

		return this.apiClient.callApi(
			'/api/v2/businessrules/decisiontables/{tableId}', 
			'PATCH', 
			{ 'tableId': tableId },
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
	 * Update a decision table version
	 * 
	 * @param {String} tableId Table ID
	 * @param {Number} tableVersion Table Version
	 * @param {Object} body Decision Table
	 * patchBusinessrulesDecisiontableVersion is a preview method and is subject to both breaking and non-breaking changes at any time without notice
	 */
	patchBusinessrulesDecisiontableVersion(tableId, tableVersion, body) { 
		// verify the required parameter 'tableId' is set
		if (tableId === undefined || tableId === null || tableId === '') {
			throw 'Missing the required parameter "tableId" when calling patchBusinessrulesDecisiontableVersion';
		}
		// verify the required parameter 'tableVersion' is set
		if (tableVersion === undefined || tableVersion === null) {
			throw 'Missing the required parameter "tableVersion" when calling patchBusinessrulesDecisiontableVersion';
		}
		// verify the required parameter 'body' is set
		if (body === undefined || body === null) {
			throw 'Missing the required parameter "body" when calling patchBusinessrulesDecisiontableVersion';
		}

		return this.apiClient.callApi(
			'/api/v2/businessrules/decisiontables/{tableId}/versions/{tableVersion}', 
			'PATCH', 
			{ 'tableId': tableId,'tableVersion': tableVersion },
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
	 * Partially update a decision table row. Will be deprecated, we should use PUT request.
	 * 
	 * @param {String} tableId Table ID
	 * @param {Number} tableVersion Table Version
	 * @param {String} rowId Row ID
	 * @param {Object} body Partially update decision table row request
	 * @deprecated
	 * patchBusinessrulesDecisiontableVersionRow is a preview method and is subject to both breaking and non-breaking changes at any time without notice
	 */
	patchBusinessrulesDecisiontableVersionRow(tableId, tableVersion, rowId, body) { 
		// verify the required parameter 'tableId' is set
		if (tableId === undefined || tableId === null || tableId === '') {
			throw 'Missing the required parameter "tableId" when calling patchBusinessrulesDecisiontableVersionRow';
		}
		// verify the required parameter 'tableVersion' is set
		if (tableVersion === undefined || tableVersion === null) {
			throw 'Missing the required parameter "tableVersion" when calling patchBusinessrulesDecisiontableVersionRow';
		}
		// verify the required parameter 'rowId' is set
		if (rowId === undefined || rowId === null || rowId === '') {
			throw 'Missing the required parameter "rowId" when calling patchBusinessrulesDecisiontableVersionRow';
		}
		// verify the required parameter 'body' is set
		if (body === undefined || body === null) {
			throw 'Missing the required parameter "body" when calling patchBusinessrulesDecisiontableVersionRow';
		}

		return this.apiClient.callApi(
			'/api/v2/businessrules/decisiontables/{tableId}/versions/{tableVersion}/rows/{rowId}', 
			'PATCH', 
			{ 'tableId': tableId,'tableVersion': tableVersion,'rowId': rowId },
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
	 * Execute a published decision table
	 * 
	 * @param {String} tableId Table ID
	 * @param {Object} body Decision Table
	 * postBusinessrulesDecisiontableExecute is a preview method and is subject to both breaking and non-breaking changes at any time without notice
	 */
	postBusinessrulesDecisiontableExecute(tableId, body) { 
		// verify the required parameter 'tableId' is set
		if (tableId === undefined || tableId === null || tableId === '') {
			throw 'Missing the required parameter "tableId" when calling postBusinessrulesDecisiontableExecute';
		}
		// verify the required parameter 'body' is set
		if (body === undefined || body === null) {
			throw 'Missing the required parameter "body" when calling postBusinessrulesDecisiontableExecute';
		}

		return this.apiClient.callApi(
			'/api/v2/businessrules/decisiontables/{tableId}/execute', 
			'POST', 
			{ 'tableId': tableId },
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
	 * Copy a decision table version
	 * 
	 * @param {String} tableId Table ID
	 * @param {Number} tableVersion Table Version
	 * @param {Object} body Decision Table
	 * postBusinessrulesDecisiontableVersionCopy is a preview method and is subject to both breaking and non-breaking changes at any time without notice
	 */
	postBusinessrulesDecisiontableVersionCopy(tableId, tableVersion, body) { 
		// verify the required parameter 'tableId' is set
		if (tableId === undefined || tableId === null || tableId === '') {
			throw 'Missing the required parameter "tableId" when calling postBusinessrulesDecisiontableVersionCopy';
		}
		// verify the required parameter 'tableVersion' is set
		if (tableVersion === undefined || tableVersion === null) {
			throw 'Missing the required parameter "tableVersion" when calling postBusinessrulesDecisiontableVersionCopy';
		}
		// verify the required parameter 'body' is set
		if (body === undefined || body === null) {
			throw 'Missing the required parameter "body" when calling postBusinessrulesDecisiontableVersionCopy';
		}

		return this.apiClient.callApi(
			'/api/v2/businessrules/decisiontables/{tableId}/versions/{tableVersion}/copy', 
			'POST', 
			{ 'tableId': tableId,'tableVersion': tableVersion },
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
	 * Execute a decision table version
	 * 
	 * @param {String} tableId Table ID
	 * @param {Number} tableVersion Table Version
	 * @param {Object} body Decision Table
	 * postBusinessrulesDecisiontableVersionExecute is a preview method and is subject to both breaking and non-breaking changes at any time without notice
	 */
	postBusinessrulesDecisiontableVersionExecute(tableId, tableVersion, body) { 
		// verify the required parameter 'tableId' is set
		if (tableId === undefined || tableId === null || tableId === '') {
			throw 'Missing the required parameter "tableId" when calling postBusinessrulesDecisiontableVersionExecute';
		}
		// verify the required parameter 'tableVersion' is set
		if (tableVersion === undefined || tableVersion === null) {
			throw 'Missing the required parameter "tableVersion" when calling postBusinessrulesDecisiontableVersionExecute';
		}
		// verify the required parameter 'body' is set
		if (body === undefined || body === null) {
			throw 'Missing the required parameter "body" when calling postBusinessrulesDecisiontableVersionExecute';
		}

		return this.apiClient.callApi(
			'/api/v2/businessrules/decisiontables/{tableId}/versions/{tableVersion}/execute', 
			'POST', 
			{ 'tableId': tableId,'tableVersion': tableVersion },
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
	 * Create a decision table row
	 * 
	 * @param {String} tableId Table ID
	 * @param {Number} tableVersion Table Version
	 * @param {Object} body Create decision table row request
	 * postBusinessrulesDecisiontableVersionRows is a preview method and is subject to both breaking and non-breaking changes at any time without notice
	 */
	postBusinessrulesDecisiontableVersionRows(tableId, tableVersion, body) { 
		// verify the required parameter 'tableId' is set
		if (tableId === undefined || tableId === null || tableId === '') {
			throw 'Missing the required parameter "tableId" when calling postBusinessrulesDecisiontableVersionRows';
		}
		// verify the required parameter 'tableVersion' is set
		if (tableVersion === undefined || tableVersion === null) {
			throw 'Missing the required parameter "tableVersion" when calling postBusinessrulesDecisiontableVersionRows';
		}
		// verify the required parameter 'body' is set
		if (body === undefined || body === null) {
			throw 'Missing the required parameter "body" when calling postBusinessrulesDecisiontableVersionRows';
		}

		return this.apiClient.callApi(
			'/api/v2/businessrules/decisiontables/{tableId}/versions/{tableVersion}/rows', 
			'POST', 
			{ 'tableId': tableId,'tableVersion': tableVersion },
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
	 * Search for decision table rows
	 * 
	 * @param {String} tableId Table ID
	 * @param {Number} tableVersion Table Version
	 * @param {Object} body Search decision table rows request
	 * @param {Object} opts Optional parameters
	 * @param {String} opts.pageNumber Page number of the entities to return. Defaults to 1.
	 * @param {String} opts.pageSize Number of entities to return. Maximum of 100. Defaults to 25.
	 * postBusinessrulesDecisiontableVersionRowsSearch is a preview method and is subject to both breaking and non-breaking changes at any time without notice
	 */
	postBusinessrulesDecisiontableVersionRowsSearch(tableId, tableVersion, body, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'tableId' is set
		if (tableId === undefined || tableId === null || tableId === '') {
			throw 'Missing the required parameter "tableId" when calling postBusinessrulesDecisiontableVersionRowsSearch';
		}
		// verify the required parameter 'tableVersion' is set
		if (tableVersion === undefined || tableVersion === null) {
			throw 'Missing the required parameter "tableVersion" when calling postBusinessrulesDecisiontableVersionRowsSearch';
		}
		// verify the required parameter 'body' is set
		if (body === undefined || body === null) {
			throw 'Missing the required parameter "body" when calling postBusinessrulesDecisiontableVersionRowsSearch';
		}

		return this.apiClient.callApi(
			'/api/v2/businessrules/decisiontables/{tableId}/versions/{tableVersion}/rows/search', 
			'POST', 
			{ 'tableId': tableId,'tableVersion': tableVersion },
			{ 'pageNumber': opts['pageNumber'],'pageSize': opts['pageSize'] },
			{  },
			{  },
			body, 
			['PureCloud OAuth'], 
			['application/json'],
			['application/json']
		);
	}

	/**
	 * Update the Business Rules Schema to the latest version for a given decision table version
	 * 
	 * @param {String} tableId Table ID
	 * @param {Number} tableVersion Table Version
	 * postBusinessrulesDecisiontableVersionSync is a preview method and is subject to both breaking and non-breaking changes at any time without notice
	 */
	postBusinessrulesDecisiontableVersionSync(tableId, tableVersion) { 
		// verify the required parameter 'tableId' is set
		if (tableId === undefined || tableId === null || tableId === '') {
			throw 'Missing the required parameter "tableId" when calling postBusinessrulesDecisiontableVersionSync';
		}
		// verify the required parameter 'tableVersion' is set
		if (tableVersion === undefined || tableVersion === null) {
			throw 'Missing the required parameter "tableVersion" when calling postBusinessrulesDecisiontableVersionSync';
		}

		return this.apiClient.callApi(
			'/api/v2/businessrules/decisiontables/{tableId}/versions/{tableVersion}/sync', 
			'POST', 
			{ 'tableId': tableId,'tableVersion': tableVersion },
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
	 * Create a new decision table version
	 * 
	 * @param {String} tableId Table ID
	 * postBusinessrulesDecisiontableVersions is a preview method and is subject to both breaking and non-breaking changes at any time without notice
	 */
	postBusinessrulesDecisiontableVersions(tableId) { 
		// verify the required parameter 'tableId' is set
		if (tableId === undefined || tableId === null || tableId === '') {
			throw 'Missing the required parameter "tableId" when calling postBusinessrulesDecisiontableVersions';
		}

		return this.apiClient.callApi(
			'/api/v2/businessrules/decisiontables/{tableId}/versions', 
			'POST', 
			{ 'tableId': tableId },
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
	 * Create a decision table
	 * 
	 * @param {Object} body Decision Table
	 * postBusinessrulesDecisiontables is a preview method and is subject to both breaking and non-breaking changes at any time without notice
	 */
	postBusinessrulesDecisiontables(body) { 
		// verify the required parameter 'body' is set
		if (body === undefined || body === null) {
			throw 'Missing the required parameter "body" when calling postBusinessrulesDecisiontables';
		}

		return this.apiClient.callApi(
			'/api/v2/businessrules/decisiontables', 
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
	 * postBusinessrulesSchemas is a preview method and is subject to both breaking and non-breaking changes at any time without notice
	 */
	postBusinessrulesSchemas(body) { 
		// verify the required parameter 'body' is set
		if (body === undefined || body === null) {
			throw 'Missing the required parameter "body" when calling postBusinessrulesSchemas';
		}

		return this.apiClient.callApi(
			'/api/v2/businessrules/schemas', 
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
	 * Publish a decision table version
	 * 
	 * @param {String} tableId Table ID
	 * @param {Number} tableVersion Table Version
	 * putBusinessrulesDecisiontableVersionPublish is a preview method and is subject to both breaking and non-breaking changes at any time without notice
	 */
	putBusinessrulesDecisiontableVersionPublish(tableId, tableVersion) { 
		// verify the required parameter 'tableId' is set
		if (tableId === undefined || tableId === null || tableId === '') {
			throw 'Missing the required parameter "tableId" when calling putBusinessrulesDecisiontableVersionPublish';
		}
		// verify the required parameter 'tableVersion' is set
		if (tableVersion === undefined || tableVersion === null) {
			throw 'Missing the required parameter "tableVersion" when calling putBusinessrulesDecisiontableVersionPublish';
		}

		return this.apiClient.callApi(
			'/api/v2/businessrules/decisiontables/{tableId}/versions/{tableVersion}/publish', 
			'PUT', 
			{ 'tableId': tableId,'tableVersion': tableVersion },
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
	 * Full update a decision table row
	 * 
	 * @param {String} tableId Table ID
	 * @param {Number} tableVersion Table Version
	 * @param {String} rowId Row ID
	 * @param {Object} body Full update decision table row request
	 * putBusinessrulesDecisiontableVersionRow is a preview method and is subject to both breaking and non-breaking changes at any time without notice
	 */
	putBusinessrulesDecisiontableVersionRow(tableId, tableVersion, rowId, body) { 
		// verify the required parameter 'tableId' is set
		if (tableId === undefined || tableId === null || tableId === '') {
			throw 'Missing the required parameter "tableId" when calling putBusinessrulesDecisiontableVersionRow';
		}
		// verify the required parameter 'tableVersion' is set
		if (tableVersion === undefined || tableVersion === null) {
			throw 'Missing the required parameter "tableVersion" when calling putBusinessrulesDecisiontableVersionRow';
		}
		// verify the required parameter 'rowId' is set
		if (rowId === undefined || rowId === null || rowId === '') {
			throw 'Missing the required parameter "rowId" when calling putBusinessrulesDecisiontableVersionRow';
		}
		// verify the required parameter 'body' is set
		if (body === undefined || body === null) {
			throw 'Missing the required parameter "body" when calling putBusinessrulesDecisiontableVersionRow';
		}

		return this.apiClient.callApi(
			'/api/v2/businessrules/decisiontables/{tableId}/versions/{tableVersion}/rows/{rowId}', 
			'PUT', 
			{ 'tableId': tableId,'tableVersion': tableVersion,'rowId': rowId },
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
	 * putBusinessrulesSchema is a preview method and is subject to both breaking and non-breaking changes at any time without notice
	 */
	putBusinessrulesSchema(schemaId, body) { 
		// verify the required parameter 'schemaId' is set
		if (schemaId === undefined || schemaId === null || schemaId === '') {
			throw 'Missing the required parameter "schemaId" when calling putBusinessrulesSchema';
		}
		// verify the required parameter 'body' is set
		if (body === undefined || body === null) {
			throw 'Missing the required parameter "body" when calling putBusinessrulesSchema';
		}

		return this.apiClient.callApi(
			'/api/v2/businessrules/schemas/{schemaId}', 
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

}


export default BusinessRulesApi;
