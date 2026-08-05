import ApiClient from '../ApiClient.js';


class BusinessRulesApi {
	/**
	 * BusinessRules service.
	 * @module purecloud-platform-client-v2/api/BusinessRulesApi
	 * @version 258.1.0
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
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
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
			['application/json'],
			opts['customHeaders']
		);
	}

	/**
	 * Delete an export job for a decision table
	 * 
	 * @param {String} tableId Table ID
	 * @param {String} exportJobId Export Job ID
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	deleteBusinessrulesDecisiontableExport(tableId, exportJobId, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'tableId' is set
		if (tableId === undefined || tableId === null || tableId === '') {
			throw 'Missing the required parameter "tableId" when calling deleteBusinessrulesDecisiontableExport';
		}
		// verify the required parameter 'exportJobId' is set
		if (exportJobId === undefined || exportJobId === null || exportJobId === '') {
			throw 'Missing the required parameter "exportJobId" when calling deleteBusinessrulesDecisiontableExport';
		}

		return this.apiClient.callApi(
			'/api/v2/businessrules/decisiontables/{tableId}/exports/{exportJobId}', 
			'DELETE', 
			{ 'tableId': tableId,'exportJobId': exportJobId },
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
	 * Delete decision table row import job
	 * 
	 * @param {String} tableId Table ID
	 * @param {String} importJobId Import job ID
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	deleteBusinessrulesDecisiontableImport(tableId, importJobId, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'tableId' is set
		if (tableId === undefined || tableId === null || tableId === '') {
			throw 'Missing the required parameter "tableId" when calling deleteBusinessrulesDecisiontableImport';
		}
		// verify the required parameter 'importJobId' is set
		if (importJobId === undefined || importJobId === null || importJobId === '') {
			throw 'Missing the required parameter "importJobId" when calling deleteBusinessrulesDecisiontableImport';
		}

		return this.apiClient.callApi(
			'/api/v2/businessrules/decisiontables/{tableId}/imports/{importJobId}', 
			'DELETE', 
			{ 'tableId': tableId,'importJobId': importJobId },
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
	 * Delete a decision table version
	 * 
	 * @param {String} tableId Table ID
	 * @param {Number} tableVersion Table Version
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	deleteBusinessrulesDecisiontableVersion(tableId, tableVersion, opts) { 
		opts = opts || {};
		
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
			['application/json'],
			opts['customHeaders']
		);
	}

	/**
	 * Delete a decision table row
	 * Required permissions depend on table content: if the table or row contains queue references, routing:queue:view is required in each queues division. Future platform objects will require their associated permissions in the relevant divisions when the table or row contains references to them.
	 * @param {String} tableId Table ID
	 * @param {Number} tableVersion Table Version
	 * @param {String} rowId Row ID
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	deleteBusinessrulesDecisiontableVersionRow(tableId, tableVersion, rowId, opts) { 
		opts = opts || {};
		
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
	deleteBusinessrulesSchema(schemaId, opts) { 
		opts = opts || {};
		
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
			['application/json'],
			opts['customHeaders']
		);
	}

	/**
	 * Get a decision table
	 * 
	 * @param {String} tableId Table ID
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	getBusinessrulesDecisiontable(tableId, opts) { 
		opts = opts || {};
		
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
			['application/json'],
			opts['customHeaders']
		);
	}

	/**
	 * Get an export job for a decision table
	 * 
	 * @param {String} tableId Table ID
	 * @param {String} exportJobId Export Job ID
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	getBusinessrulesDecisiontableExport(tableId, exportJobId, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'tableId' is set
		if (tableId === undefined || tableId === null || tableId === '') {
			throw 'Missing the required parameter "tableId" when calling getBusinessrulesDecisiontableExport';
		}
		// verify the required parameter 'exportJobId' is set
		if (exportJobId === undefined || exportJobId === null || exportJobId === '') {
			throw 'Missing the required parameter "exportJobId" when calling getBusinessrulesDecisiontableExport';
		}

		return this.apiClient.callApi(
			'/api/v2/businessrules/decisiontables/{tableId}/exports/{exportJobId}', 
			'GET', 
			{ 'tableId': tableId,'exportJobId': exportJobId },
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
	 * List export jobs for a decision table
	 * 
	 * @param {String} tableId Table ID
	 * @param {Object} opts Optional parameters
	 * @param {String} opts.after The cursor that points to the end of the set of entities that has been returned.
	 * @param {String} opts.pageSize Number of entities to return. Maximum of 100.
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	getBusinessrulesDecisiontableExports(tableId, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'tableId' is set
		if (tableId === undefined || tableId === null || tableId === '') {
			throw 'Missing the required parameter "tableId" when calling getBusinessrulesDecisiontableExports';
		}

		return this.apiClient.callApi(
			'/api/v2/businessrules/decisiontables/{tableId}/exports', 
			'GET', 
			{ 'tableId': tableId },
			{ 'after': opts['after'],'pageSize': opts['pageSize'] },
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
	 * Get decision table row import job
	 * 
	 * @param {String} tableId Table ID
	 * @param {String} importJobId Import job ID
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	getBusinessrulesDecisiontableImport(tableId, importJobId, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'tableId' is set
		if (tableId === undefined || tableId === null || tableId === '') {
			throw 'Missing the required parameter "tableId" when calling getBusinessrulesDecisiontableImport';
		}
		// verify the required parameter 'importJobId' is set
		if (importJobId === undefined || importJobId === null || importJobId === '') {
			throw 'Missing the required parameter "importJobId" when calling getBusinessrulesDecisiontableImport';
		}

		return this.apiClient.callApi(
			'/api/v2/businessrules/decisiontables/{tableId}/imports/{importJobId}', 
			'GET', 
			{ 'tableId': tableId,'importJobId': importJobId },
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
	 * List decision table row import jobs
	 * 
	 * @param {String} tableId Table ID
	 * @param {Object} opts Optional parameters
	 * @param {String} opts.after The cursor that points to the end of the set of entities that has been returned.
	 * @param {String} opts.pageSize Number of entities to return. Maximum of 100.
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	getBusinessrulesDecisiontableImports(tableId, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'tableId' is set
		if (tableId === undefined || tableId === null || tableId === '') {
			throw 'Missing the required parameter "tableId" when calling getBusinessrulesDecisiontableImports';
		}

		return this.apiClient.callApi(
			'/api/v2/businessrules/decisiontables/{tableId}/imports', 
			'GET', 
			{ 'tableId': tableId },
			{ 'after': opts['after'],'pageSize': opts['pageSize'] },
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
	 * Get a decision table version
	 * 
	 * @param {String} tableId Table ID
	 * @param {Number} tableVersion Table Version
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	getBusinessrulesDecisiontableVersion(tableId, tableVersion, opts) { 
		opts = opts || {};
		
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
			['application/json'],
			opts['customHeaders']
		);
	}

	/**
	 * Get a decision table row
	 * 
	 * @param {String} tableId Table ID
	 * @param {Number} tableVersion Table Version
	 * @param {String} rowId Row ID
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	getBusinessrulesDecisiontableVersionRow(tableId, tableVersion, rowId, opts) { 
		opts = opts || {};
		
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
			['application/json'],
			opts['customHeaders']
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
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
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
			['application/json'],
			opts['customHeaders']
		);
	}

	/**
	 * Get a list of decision table versions
	 * 
	 * @param {String} tableId Table ID
	 * @param {Object} opts Optional parameters
	 * @param {String} opts.after The cursor that points to the end of the set of entities that has been returned.
	 * @param {String} opts.pageSize Number of entities to return. Maximum of 100.
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
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
			{ 'after': opts['after'],'pageSize': opts['pageSize'] },
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
	 * Get a list of decision tables.
	 * 
	 * @param {Object} opts Optional parameters
	 * @param {String} opts.after The cursor that points to the end of the set of entities that has been returned.
	 * @param {String} opts.pageSize Number of entities to return. Maximum of 100.
	 * @param {Array.<String>} opts.divisionIds One or more comma separated divisions to filters decision tables by. If nothing is provided, the decision tables associated with the list of divisions that the user has access to will be returned.
	 * @param {String} opts.name Search for decision tables with a name that contains the given search string. Search is case insensitive and will match any table that contains this string in any part of the name.
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	getBusinessrulesDecisiontables(opts) { 
		opts = opts || {};
		

		return this.apiClient.callApi(
			'/api/v2/businessrules/decisiontables', 
			'GET', 
			{  },
			{ 'after': opts['after'],'pageSize': opts['pageSize'],'divisionIds': this.apiClient.buildCollectionParam(opts['divisionIds'], 'multi'),'name': opts['name'] },
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
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
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
	getBusinessrulesSchema(schemaId, opts) { 
		opts = opts || {};
		
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
	getBusinessrulesSchemas(opts) { 
		opts = opts || {};
		

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
			['application/json'],
			opts['customHeaders']
		);
	}

	/**
	 * Get a specific named core type.
	 * 
	 * @param {String} coreTypeName The core type's name
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	getBusinessrulesSchemasCoretype(coreTypeName, opts) { 
		opts = opts || {};
		
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
	getBusinessrulesSchemasCoretypes(opts) { 
		opts = opts || {};
		

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
			['application/json'],
			opts['customHeaders']
		);
	}

	/**
	 * Update a decision table
	 * Required permissions depend on table content: if the table or row contains queue references, routing:queue:view is required in each queues division. Future platform objects will require their associated permissions in the relevant divisions when the table or row contains references to them.
	 * @param {String} tableId Table ID
	 * @param {Object} body Decision Table
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	patchBusinessrulesDecisiontable(tableId, body, opts) { 
		opts = opts || {};
		
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
			['application/json'],
			opts['customHeaders']
		);
	}

	/**
	 * Update decision table row import job
	 * Cancels an in-progress import job by supplying a status of Cancelled. Cancellation is idempotent: cancelling a job that is already Cancelled returns 200 with the cancelled job. Cancelling a job that is still Uploading or Processing returns 200. A job that has already finished (Complete or Failed) can no longer be cancelled.
	 * @param {String} tableId Table ID
	 * @param {String} importJobId Import job ID
	 * @param {Object} body Import job update request
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	patchBusinessrulesDecisiontableImport(tableId, importJobId, body, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'tableId' is set
		if (tableId === undefined || tableId === null || tableId === '') {
			throw 'Missing the required parameter "tableId" when calling patchBusinessrulesDecisiontableImport';
		}
		// verify the required parameter 'importJobId' is set
		if (importJobId === undefined || importJobId === null || importJobId === '') {
			throw 'Missing the required parameter "importJobId" when calling patchBusinessrulesDecisiontableImport';
		}
		// verify the required parameter 'body' is set
		if (body === undefined || body === null) {
			throw 'Missing the required parameter "body" when calling patchBusinessrulesDecisiontableImport';
		}

		return this.apiClient.callApi(
			'/api/v2/businessrules/decisiontables/{tableId}/imports/{importJobId}', 
			'PATCH', 
			{ 'tableId': tableId,'importJobId': importJobId },
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
	 * Update a decision table version
	 * 
	 * @param {String} tableId Table ID
	 * @param {Number} tableVersion Table Version
	 * @param {Object} body Decision Table
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	patchBusinessrulesDecisiontableVersion(tableId, tableVersion, body, opts) { 
		opts = opts || {};
		
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
			['application/json'],
			opts['customHeaders']
		);
	}

	/**
	 * Execute a published decision table
	 * Example request payload: {"inputs":{"schemaPropertykey1":"inputValue1","schemaPropertykey2":"inputValue2"}}
	 * @param {String} tableId Table ID
	 * @param {Object} body Decision Table
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	postBusinessrulesDecisiontableExecute(tableId, body, opts) { 
		opts = opts || {};
		
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
			['application/json'],
			opts['customHeaders']
		);
	}

	/**
	 * Create an export job for a decision table version
	 * 
	 * @param {String} tableId Table ID
	 * @param {Object} body Export job request
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	postBusinessrulesDecisiontableExports(tableId, body, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'tableId' is set
		if (tableId === undefined || tableId === null || tableId === '') {
			throw 'Missing the required parameter "tableId" when calling postBusinessrulesDecisiontableExports';
		}
		// verify the required parameter 'body' is set
		if (body === undefined || body === null) {
			throw 'Missing the required parameter "body" when calling postBusinessrulesDecisiontableExports';
		}

		return this.apiClient.callApi(
			'/api/v2/businessrules/decisiontables/{tableId}/exports', 
			'POST', 
			{ 'tableId': tableId },
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
	 * Create a decision table row import job
	 * 
	 * @param {String} tableId Table ID
	 * @param {Object} body Import job create request
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	postBusinessrulesDecisiontableImports(tableId, body, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'tableId' is set
		if (tableId === undefined || tableId === null || tableId === '') {
			throw 'Missing the required parameter "tableId" when calling postBusinessrulesDecisiontableImports';
		}
		// verify the required parameter 'body' is set
		if (body === undefined || body === null) {
			throw 'Missing the required parameter "body" when calling postBusinessrulesDecisiontableImports';
		}

		return this.apiClient.callApi(
			'/api/v2/businessrules/decisiontables/{tableId}/imports', 
			'POST', 
			{ 'tableId': tableId },
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
	 * Copy a decision table version
	 * 
	 * @param {String} tableId Table ID
	 * @param {Number} tableVersion Table Version
	 * @param {Object} body Decision Table
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	postBusinessrulesDecisiontableVersionCopy(tableId, tableVersion, body, opts) { 
		opts = opts || {};
		
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
			['application/json'],
			opts['customHeaders']
		);
	}

	/**
	 * Execute a decision table version
	 * Example request payload: {"inputs":{"schemaPropertykey1":"inputValue1","schemaPropertykey2":"inputValue2"}}
	 * @param {String} tableId Table ID
	 * @param {Number} tableVersion Table Version
	 * @param {Object} body Decision Table
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	postBusinessrulesDecisiontableVersionExecute(tableId, tableVersion, body, opts) { 
		opts = opts || {};
		
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
			['application/json'],
			opts['customHeaders']
		);
	}

	/**
	 * Create a decision table row
	 * Required permissions depend on table content: if the table or row contains queue references, routing:queue:view is required in each queues division. Future platform objects will require their associated permissions in the relevant divisions when the table or row contains references to them.
	 * @param {String} tableId Table ID
	 * @param {Number} tableVersion Table Version
	 * @param {Object} body Create decision table row request
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	postBusinessrulesDecisiontableVersionRows(tableId, tableVersion, body, opts) { 
		opts = opts || {};
		
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
			['application/json'],
			opts['customHeaders']
		);
	}

	/**
	 * Bulk add decision table rows
	 * Required permissions depend on table content: if the table or row contains queue references, routing:queue:view is required in each queues division. Future platform objects will require their associated permissions in the relevant divisions when the table or row contains references to them.
	 * @param {String} tableId Table ID
	 * @param {Number} tableVersion Table Version
	 * @param {Object} body Bulk add decision table rows request
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	postBusinessrulesDecisiontableVersionRowsBulkAdd(tableId, tableVersion, body, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'tableId' is set
		if (tableId === undefined || tableId === null || tableId === '') {
			throw 'Missing the required parameter "tableId" when calling postBusinessrulesDecisiontableVersionRowsBulkAdd';
		}
		// verify the required parameter 'tableVersion' is set
		if (tableVersion === undefined || tableVersion === null) {
			throw 'Missing the required parameter "tableVersion" when calling postBusinessrulesDecisiontableVersionRowsBulkAdd';
		}
		// verify the required parameter 'body' is set
		if (body === undefined || body === null) {
			throw 'Missing the required parameter "body" when calling postBusinessrulesDecisiontableVersionRowsBulkAdd';
		}

		return this.apiClient.callApi(
			'/api/v2/businessrules/decisiontables/{tableId}/versions/{tableVersion}/rows/bulk/add', 
			'POST', 
			{ 'tableId': tableId,'tableVersion': tableVersion },
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
	 * Bulk delete decision table rows
	 * Required permissions depend on table content: if the table or row contains queue references, routing:queue:view is required in each queues division. Future platform objects will require their associated permissions in the relevant divisions when the table or row contains references to them.
	 * @param {String} tableId Table ID
	 * @param {Number} tableVersion Table Version
	 * @param {Object} body 
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	postBusinessrulesDecisiontableVersionRowsBulkRemove(tableId, tableVersion, body, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'tableId' is set
		if (tableId === undefined || tableId === null || tableId === '') {
			throw 'Missing the required parameter "tableId" when calling postBusinessrulesDecisiontableVersionRowsBulkRemove';
		}
		// verify the required parameter 'tableVersion' is set
		if (tableVersion === undefined || tableVersion === null) {
			throw 'Missing the required parameter "tableVersion" when calling postBusinessrulesDecisiontableVersionRowsBulkRemove';
		}
		// verify the required parameter 'body' is set
		if (body === undefined || body === null) {
			throw 'Missing the required parameter "body" when calling postBusinessrulesDecisiontableVersionRowsBulkRemove';
		}

		return this.apiClient.callApi(
			'/api/v2/businessrules/decisiontables/{tableId}/versions/{tableVersion}/rows/bulk/remove', 
			'POST', 
			{ 'tableId': tableId,'tableVersion': tableVersion },
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
	 * Bulk update decision table rows
	 * Required permissions depend on table content: if the table or row contains queue references, routing:queue:view is required in each queues division. Future platform objects will require their associated permissions in the relevant divisions when the table or row contains references to them.
	 * @param {String} tableId Table ID
	 * @param {Number} tableVersion Table Version
	 * @param {Object} body Bulk update decision table rows request
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	postBusinessrulesDecisiontableVersionRowsBulkUpdate(tableId, tableVersion, body, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'tableId' is set
		if (tableId === undefined || tableId === null || tableId === '') {
			throw 'Missing the required parameter "tableId" when calling postBusinessrulesDecisiontableVersionRowsBulkUpdate';
		}
		// verify the required parameter 'tableVersion' is set
		if (tableVersion === undefined || tableVersion === null) {
			throw 'Missing the required parameter "tableVersion" when calling postBusinessrulesDecisiontableVersionRowsBulkUpdate';
		}
		// verify the required parameter 'body' is set
		if (body === undefined || body === null) {
			throw 'Missing the required parameter "body" when calling postBusinessrulesDecisiontableVersionRowsBulkUpdate';
		}

		return this.apiClient.callApi(
			'/api/v2/businessrules/decisiontables/{tableId}/versions/{tableVersion}/rows/bulk/update', 
			'POST', 
			{ 'tableId': tableId,'tableVersion': tableVersion },
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
	 * Search for decision table rows
	 * 
	 * @param {String} tableId Table ID
	 * @param {Number} tableVersion Table Version
	 * @param {Object} body Search decision table rows request
	 * @param {Object} opts Optional parameters
	 * @param {String} opts.pageNumber Page number of the entities to return. Defaults to 1.
	 * @param {String} opts.pageSize Number of entities to return. Maximum of 100. Defaults to 25.
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
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
			['application/json'],
			opts['customHeaders']
		);
	}

	/**
	 * Update the Business Rules Schema to the latest version for a given decision table version
	 * 
	 * @param {String} tableId Table ID
	 * @param {Number} tableVersion Table Version
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	postBusinessrulesDecisiontableVersionSync(tableId, tableVersion, opts) { 
		opts = opts || {};
		
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
			['application/json'],
			opts['customHeaders']
		);
	}

	/**
	 * Create a new decision table version. When sourceVersion is not provided, the draft is created from the published version.
	 * 
	 * @param {String} tableId Table ID
	 * @param {Object} opts Optional parameters
	 * @param {Object} opts.body Decision Table Version
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	postBusinessrulesDecisiontableVersions(tableId, opts) { 
		opts = opts || {};
		
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
			opts['body'], 
			['PureCloud OAuth'], 
			['application/json'],
			['application/json'],
			opts['customHeaders']
		);
	}

	/**
	 * Create a decision table
	 * Required permissions depend on table content: if the table or row contains queue references, routing:queue:view is required in each queues division. Future platform objects will require their associated permissions in the relevant divisions when the table or row contains references to them.
	 * @param {Object} body Decision Table
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	postBusinessrulesDecisiontables(body, opts) { 
		opts = opts || {};
		
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
			['application/json'],
			opts['customHeaders']
		);
	}

	/**
	 * Create a schema
	 * 
	 * @param {Object} body Business Rules Schema Create Request
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	postBusinessrulesSchemas(body, opts) { 
		opts = opts || {};
		
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
			['application/json'],
			opts['customHeaders']
		);
	}

	/**
	 * Publish a decision table version
	 * 
	 * @param {String} tableId Table ID
	 * @param {Number} tableVersion Table Version
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	putBusinessrulesDecisiontableVersionPublish(tableId, tableVersion, opts) { 
		opts = opts || {};
		
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
			['application/json'],
			opts['customHeaders']
		);
	}

	/**
	 * Full update a decision table row
	 * Required permissions depend on table content: if the table or row contains queue references, routing:queue:view is required in each queues division. Future platform objects will require their associated permissions in the relevant divisions when the table or row contains references to them.
	 * @param {String} tableId Table ID
	 * @param {Number} tableVersion Table Version
	 * @param {String} rowId Row ID
	 * @param {Object} body Full update decision table row request
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	putBusinessrulesDecisiontableVersionRow(tableId, tableVersion, rowId, body, opts) { 
		opts = opts || {};
		
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
			['application/json'],
			opts['customHeaders']
		);
	}

	/**
	 * Update a schema
	 * 
	 * @param {String} schemaId Schema ID
	 * @param {Object} body Business Rules Schema Update Request
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	putBusinessrulesSchema(schemaId, body, opts) { 
		opts = opts || {};
		
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
			['application/json'],
			opts['customHeaders']
		);
	}

}


export default BusinessRulesApi;
