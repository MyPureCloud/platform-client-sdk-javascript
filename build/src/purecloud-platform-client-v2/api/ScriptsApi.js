import ApiClient from '../ApiClient.js';


class ScriptsApi {
	/**
	 * Scripts service.
	 * @module purecloud-platform-client-v2/api/ScriptsApi
	 * @version 178.2.0
	 */

	/**
	 * Constructs a new ScriptsApi. 
	 * @alias module:purecloud-platform-client-v2/api/ScriptsApi
	 * @class
	 * @param {module:purecloud-platform-client-v2/ApiClient} apiClient Optional API client implementation to use,
	 * default to {@link module:purecloud-platform-client-v2/ApiClient#instance} if unspecified.
	 */
	constructor(apiClient) {
		this.apiClient = apiClient || ApiClient.instance;
	}


	/**
	 * Delete a script.
	 * 
	 * @param {String} scriptId Script ID
	 * @param {Object} opts Optional parameters
	 * @param {String} opts.scriptDataVersion Advanced usage - controls the data version of the script
	 */
	deleteScript(scriptId, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'scriptId' is set
		if (scriptId === undefined || scriptId === null) {
			throw 'Missing the required parameter "scriptId" when calling deleteScript';
		}

		return this.apiClient.callApi(
			'/api/v2/scripts/{scriptId}', 
			'DELETE', 
			{ 'scriptId': scriptId },
			{ 'scriptDataVersion': opts['scriptDataVersion'] },
			{  },
			{  },
			null, 
			['PureCloud OAuth'], 
			['application/json'],
			['application/json']
		);
	}

	/**
	 * Delete a page.
	 * 
	 * @param {String} scriptId Script ID
	 * @param {String} pageId Page ID
	 * @param {Object} opts Optional parameters
	 * @param {String} opts.scriptDataVersion Advanced usage - controls the data version of the script
	 */
	deleteScriptPage(scriptId, pageId, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'scriptId' is set
		if (scriptId === undefined || scriptId === null) {
			throw 'Missing the required parameter "scriptId" when calling deleteScriptPage';
		}
		// verify the required parameter 'pageId' is set
		if (pageId === undefined || pageId === null) {
			throw 'Missing the required parameter "pageId" when calling deleteScriptPage';
		}

		return this.apiClient.callApi(
			'/api/v2/scripts/{scriptId}/pages/{pageId}', 
			'DELETE', 
			{ 'scriptId': scriptId,'pageId': pageId },
			{ 'scriptDataVersion': opts['scriptDataVersion'] },
			{  },
			{  },
			null, 
			['PureCloud OAuth'], 
			['application/json'],
			['application/json']
		);
	}

	/**
	 * Unset favorite template
	 * 
	 * @param {String} templateId templateId
	 */
	deleteScripterFavoritetemplate(templateId) { 
		// verify the required parameter 'templateId' is set
		if (templateId === undefined || templateId === null) {
			throw 'Missing the required parameter "templateId" when calling deleteScripterFavoritetemplate';
		}

		return this.apiClient.callApi(
			'/api/v2/scripter/favoritetemplates/{templateId}', 
			'DELETE', 
			{ 'templateId': templateId },
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
	 * Delete a composer template
	 * 
	 * @param {String} templateId Template ID
	 */
	deleteScripterTemplate(templateId) { 
		// verify the required parameter 'templateId' is set
		if (templateId === undefined || templateId === null) {
			throw 'Missing the required parameter "templateId" when calling deleteScripterTemplate';
		}

		return this.apiClient.callApi(
			'/api/v2/scripter/templates/{templateId}', 
			'DELETE', 
			{ 'templateId': templateId },
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
	 * Get a script
	 * 
	 * @param {String} scriptId Script ID
	 */
	getScript(scriptId) { 
		// verify the required parameter 'scriptId' is set
		if (scriptId === undefined || scriptId === null) {
			throw 'Missing the required parameter "scriptId" when calling getScript';
		}

		return this.apiClient.callApi(
			'/api/v2/scripts/{scriptId}', 
			'GET', 
			{ 'scriptId': scriptId },
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
	 * Get a page
	 * 
	 * @param {String} scriptId Script ID
	 * @param {String} pageId Page ID
	 * @param {Object} opts Optional parameters
	 * @param {String} opts.scriptDataVersion Advanced usage - controls the data version of the script
	 */
	getScriptPage(scriptId, pageId, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'scriptId' is set
		if (scriptId === undefined || scriptId === null) {
			throw 'Missing the required parameter "scriptId" when calling getScriptPage';
		}
		// verify the required parameter 'pageId' is set
		if (pageId === undefined || pageId === null) {
			throw 'Missing the required parameter "pageId" when calling getScriptPage';
		}

		return this.apiClient.callApi(
			'/api/v2/scripts/{scriptId}/pages/{pageId}', 
			'GET', 
			{ 'scriptId': scriptId,'pageId': pageId },
			{ 'scriptDataVersion': opts['scriptDataVersion'] },
			{  },
			{  },
			null, 
			['PureCloud OAuth'], 
			['application/json'],
			['application/json']
		);
	}

	/**
	 * Get the list of pages
	 * 
	 * @param {String} scriptId Script ID
	 * @param {Object} opts Optional parameters
	 * @param {String} opts.scriptDataVersion Advanced usage - controls the data version of the script
	 */
	getScriptPages(scriptId, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'scriptId' is set
		if (scriptId === undefined || scriptId === null) {
			throw 'Missing the required parameter "scriptId" when calling getScriptPages';
		}

		return this.apiClient.callApi(
			'/api/v2/scripts/{scriptId}/pages', 
			'GET', 
			{ 'scriptId': scriptId },
			{ 'scriptDataVersion': opts['scriptDataVersion'] },
			{  },
			{  },
			null, 
			['PureCloud OAuth'], 
			['application/json'],
			['application/json']
		);
	}

	/**
	 * Get favorite templates
	 * 
	 */
	getScripterFavoritetemplates() { 

		return this.apiClient.callApi(
			'/api/v2/scripter/favoritetemplates', 
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
	 * Get a composer template
	 * 
	 * @param {String} templateId Template ID
	 */
	getScripterTemplate(templateId) { 
		// verify the required parameter 'templateId' is set
		if (templateId === undefined || templateId === null) {
			throw 'Missing the required parameter "templateId" when calling getScripterTemplate';
		}

		return this.apiClient.callApi(
			'/api/v2/scripter/templates/{templateId}', 
			'GET', 
			{ 'templateId': templateId },
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
	 * Get the list of templates
	 * 
	 * @param {Object} opts Optional parameters
	 * @param {Number} opts.pageSize Page size (default to 25)
	 * @param {Number} opts.pageNumber Page number (default to 1)
	 * @param {String} opts.expand Expand
	 * @param {String} opts.tags Tags
	 */
	getScripterTemplates(opts) { 
		opts = opts || {};
		

		return this.apiClient.callApi(
			'/api/v2/scripter/templates', 
			'GET', 
			{  },
			{ 'pageSize': opts['pageSize'],'pageNumber': opts['pageNumber'],'expand': opts['expand'],'tags': opts['tags'] },
			{  },
			{  },
			null, 
			['PureCloud OAuth'], 
			['application/json'],
			['application/json']
		);
	}

	/**
	 * Get the list of scripts
	 * 
	 * @param {Object} opts Optional parameters
	 * @param {Number} opts.pageSize Page size (default to 25)
	 * @param {Number} opts.pageNumber Page number (default to 1)
	 * @param {String} opts.expand Expand
	 * @param {String} opts.name Name filter
	 * @param {String} opts.feature Feature filter
	 * @param {String} opts.flowId Secure flow id filter
	 * @param {Object} opts.sortBy SortBy
	 * @param {Object} opts.sortOrder SortOrder
	 * @param {String} opts.scriptDataVersion Advanced usage - controls the data version of the script
	 * @param {String} opts.divisionIds Filters scripts to requested divisionIds
	 */
	getScripts(opts) { 
		opts = opts || {};
		

		return this.apiClient.callApi(
			'/api/v2/scripts', 
			'GET', 
			{  },
			{ 'pageSize': opts['pageSize'],'pageNumber': opts['pageNumber'],'expand': opts['expand'],'name': opts['name'],'feature': opts['feature'],'flowId': opts['flowId'],'sortBy': opts['sortBy'],'sortOrder': opts['sortOrder'],'scriptDataVersion': opts['scriptDataVersion'],'divisionIds': opts['divisionIds'] },
			{  },
			{  },
			null, 
			['PureCloud OAuth'], 
			['application/json'],
			['application/json']
		);
	}

	/**
	 * Get the metadata for a list of scripts
	 * 
	 * @param {Object} opts Optional parameters
	 * @param {Number} opts.pageSize Page size (default to 25)
	 * @param {Number} opts.pageNumber Page number (default to 1)
	 * @param {String} opts.expand Expand
	 * @param {String} opts.name Name filter
	 * @param {String} opts.feature Feature filter
	 * @param {String} opts.flowId Secure flow id filter
	 * @param {Object} opts.sortBy SortBy
	 * @param {Object} opts.sortOrder SortOrder
	 * @param {String} opts.scriptDataVersion Advanced usage - controls the data version of the script
	 * @param {String} opts.divisionIds Filters scripts to requested divisionIds
	 */
	getScriptsDivisionviews(opts) { 
		opts = opts || {};
		

		return this.apiClient.callApi(
			'/api/v2/scripts/divisionviews', 
			'GET', 
			{  },
			{ 'pageSize': opts['pageSize'],'pageNumber': opts['pageNumber'],'expand': opts['expand'],'name': opts['name'],'feature': opts['feature'],'flowId': opts['flowId'],'sortBy': opts['sortBy'],'sortOrder': opts['sortOrder'],'scriptDataVersion': opts['scriptDataVersion'],'divisionIds': opts['divisionIds'] },
			{  },
			{  },
			null, 
			['PureCloud OAuth'], 
			['application/json'],
			['application/json']
		);
	}

	/**
	 * Get the published scripts.
	 * 
	 * @param {Object} opts Optional parameters
	 * @param {Number} opts.pageSize Page size (default to 25)
	 * @param {Number} opts.pageNumber Page number (default to 1)
	 * @param {String} opts.expand Expand
	 * @param {String} opts.name Name filter
	 * @param {String} opts.feature Feature filter
	 * @param {String} opts.flowId Secure flow id filter
	 * @param {String} opts.scriptDataVersion Advanced usage - controls the data version of the script
	 * @param {String} opts.divisionIds Filters scripts to requested divisionIds
	 */
	getScriptsPublished(opts) { 
		opts = opts || {};
		

		return this.apiClient.callApi(
			'/api/v2/scripts/published', 
			'GET', 
			{  },
			{ 'pageSize': opts['pageSize'],'pageNumber': opts['pageNumber'],'expand': opts['expand'],'name': opts['name'],'feature': opts['feature'],'flowId': opts['flowId'],'scriptDataVersion': opts['scriptDataVersion'],'divisionIds': opts['divisionIds'] },
			{  },
			{  },
			null, 
			['PureCloud OAuth'], 
			['application/json'],
			['application/json']
		);
	}

	/**
	 * Get the published variables
	 * 
	 * @param {String} scriptId Script ID
	 * @param {Object} opts Optional parameters
	 * @param {Object} opts.input input
	 * @param {Object} opts.output output
	 * @param {Object} opts.type type
	 * @param {String} opts.scriptDataVersion Advanced usage - controls the data version of the script
	 */
	getScriptsPublishedDivisionviewVariables(scriptId, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'scriptId' is set
		if (scriptId === undefined || scriptId === null) {
			throw 'Missing the required parameter "scriptId" when calling getScriptsPublishedDivisionviewVariables';
		}

		return this.apiClient.callApi(
			'/api/v2/scripts/published/divisionviews/{scriptId}/variables', 
			'GET', 
			{ 'scriptId': scriptId },
			{ 'input': opts['input'],'output': opts['output'],'type': opts['type'],'scriptDataVersion': opts['scriptDataVersion'] },
			{  },
			{  },
			null, 
			['PureCloud OAuth'], 
			['application/json'],
			['application/json']
		);
	}

	/**
	 * Get the published scripts metadata.
	 * 
	 * @param {Object} opts Optional parameters
	 * @param {Number} opts.pageSize Page size (default to 25)
	 * @param {Number} opts.pageNumber Page number (default to 1)
	 * @param {String} opts.expand Expand
	 * @param {String} opts.name Name filter
	 * @param {String} opts.feature Feature filter
	 * @param {String} opts.flowId Secure flow id filter
	 * @param {String} opts.scriptDataVersion Advanced usage - controls the data version of the script
	 * @param {String} opts.divisionIds Filters scripts to requested divisionIds
	 */
	getScriptsPublishedDivisionviews(opts) { 
		opts = opts || {};
		

		return this.apiClient.callApi(
			'/api/v2/scripts/published/divisionviews', 
			'GET', 
			{  },
			{ 'pageSize': opts['pageSize'],'pageNumber': opts['pageNumber'],'expand': opts['expand'],'name': opts['name'],'feature': opts['feature'],'flowId': opts['flowId'],'scriptDataVersion': opts['scriptDataVersion'],'divisionIds': opts['divisionIds'] },
			{  },
			{  },
			null, 
			['PureCloud OAuth'], 
			['application/json'],
			['application/json']
		);
	}

	/**
	 * Get the published script.
	 * 
	 * @param {String} scriptId Script ID
	 * @param {Object} opts Optional parameters
	 * @param {String} opts.scriptDataVersion Advanced usage - controls the data version of the script
	 */
	getScriptsPublishedScriptId(scriptId, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'scriptId' is set
		if (scriptId === undefined || scriptId === null) {
			throw 'Missing the required parameter "scriptId" when calling getScriptsPublishedScriptId';
		}

		return this.apiClient.callApi(
			'/api/v2/scripts/published/{scriptId}', 
			'GET', 
			{ 'scriptId': scriptId },
			{ 'scriptDataVersion': opts['scriptDataVersion'] },
			{  },
			{  },
			null, 
			['PureCloud OAuth'], 
			['application/json'],
			['application/json']
		);
	}

	/**
	 * Get the published page.
	 * 
	 * @param {String} scriptId Script ID
	 * @param {String} pageId Page ID
	 * @param {Object} opts Optional parameters
	 * @param {String} opts.scriptDataVersion Advanced usage - controls the data version of the script
	 */
	getScriptsPublishedScriptIdPage(scriptId, pageId, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'scriptId' is set
		if (scriptId === undefined || scriptId === null) {
			throw 'Missing the required parameter "scriptId" when calling getScriptsPublishedScriptIdPage';
		}
		// verify the required parameter 'pageId' is set
		if (pageId === undefined || pageId === null) {
			throw 'Missing the required parameter "pageId" when calling getScriptsPublishedScriptIdPage';
		}

		return this.apiClient.callApi(
			'/api/v2/scripts/published/{scriptId}/pages/{pageId}', 
			'GET', 
			{ 'scriptId': scriptId,'pageId': pageId },
			{ 'scriptDataVersion': opts['scriptDataVersion'] },
			{  },
			{  },
			null, 
			['PureCloud OAuth'], 
			['application/json'],
			['application/json']
		);
	}

	/**
	 * Get the list of published pages
	 * 
	 * @param {String} scriptId Script ID
	 * @param {Object} opts Optional parameters
	 * @param {String} opts.scriptDataVersion Advanced usage - controls the data version of the script
	 */
	getScriptsPublishedScriptIdPages(scriptId, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'scriptId' is set
		if (scriptId === undefined || scriptId === null) {
			throw 'Missing the required parameter "scriptId" when calling getScriptsPublishedScriptIdPages';
		}

		return this.apiClient.callApi(
			'/api/v2/scripts/published/{scriptId}/pages', 
			'GET', 
			{ 'scriptId': scriptId },
			{ 'scriptDataVersion': opts['scriptDataVersion'] },
			{  },
			{  },
			null, 
			['PureCloud OAuth'], 
			['application/json'],
			['application/json']
		);
	}

	/**
	 * Get the published variables
	 * 
	 * @param {String} scriptId Script ID
	 * @param {Object} opts Optional parameters
	 * @param {Object} opts.input input
	 * @param {Object} opts.output output
	 * @param {Object} opts.type type
	 * @param {String} opts.scriptDataVersion Advanced usage - controls the data version of the script
	 */
	getScriptsPublishedScriptIdVariables(scriptId, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'scriptId' is set
		if (scriptId === undefined || scriptId === null) {
			throw 'Missing the required parameter "scriptId" when calling getScriptsPublishedScriptIdVariables';
		}

		return this.apiClient.callApi(
			'/api/v2/scripts/published/{scriptId}/variables', 
			'GET', 
			{ 'scriptId': scriptId },
			{ 'input': opts['input'],'output': opts['output'],'type': opts['type'],'scriptDataVersion': opts['scriptDataVersion'] },
			{  },
			{  },
			null, 
			['PureCloud OAuth'], 
			['application/json'],
			['application/json']
		);
	}

	/**
	 * Get the template as script.
	 * 
	 * @param {String} scriptId Script ID
	 * @param {Object} opts Optional parameters
	 * @param {String} opts.scriptDataVersion Advanced usage - controls the data version of the script
	 */
	getScriptsTemplate(scriptId, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'scriptId' is set
		if (scriptId === undefined || scriptId === null) {
			throw 'Missing the required parameter "scriptId" when calling getScriptsTemplate';
		}

		return this.apiClient.callApi(
			'/api/v2/scripts/templates/{scriptId}', 
			'GET', 
			{ 'scriptId': scriptId },
			{ 'scriptDataVersion': opts['scriptDataVersion'] },
			{  },
			{  },
			null, 
			['PureCloud OAuth'], 
			['application/json'],
			['application/json']
		);
	}

	/**
	 * Get the template page.
	 * 
	 * @param {String} scriptId Script ID
	 * @param {String} pageId Page ID
	 * @param {Object} opts Optional parameters
	 * @param {String} opts.scriptDataVersion Advanced usage - controls the data version of the script
	 */
	getScriptsTemplatePage(scriptId, pageId, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'scriptId' is set
		if (scriptId === undefined || scriptId === null) {
			throw 'Missing the required parameter "scriptId" when calling getScriptsTemplatePage';
		}
		// verify the required parameter 'pageId' is set
		if (pageId === undefined || pageId === null) {
			throw 'Missing the required parameter "pageId" when calling getScriptsTemplatePage';
		}

		return this.apiClient.callApi(
			'/api/v2/scripts/templates/{scriptId}/pages/{pageId}', 
			'GET', 
			{ 'scriptId': scriptId,'pageId': pageId },
			{ 'scriptDataVersion': opts['scriptDataVersion'] },
			{  },
			{  },
			null, 
			['PureCloud OAuth'], 
			['application/json'],
			['application/json']
		);
	}

	/**
	 * Get the upload status of an imported script
	 * 
	 * @param {String} uploadId Upload ID
	 * @param {Object} opts Optional parameters
	 * @param {Boolean} opts.longPoll Enable longPolling endpoint (default to false)
	 */
	getScriptsUploadStatus(uploadId, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'uploadId' is set
		if (uploadId === undefined || uploadId === null) {
			throw 'Missing the required parameter "uploadId" when calling getScriptsUploadStatus';
		}

		return this.apiClient.callApi(
			'/api/v2/scripts/uploads/{uploadId}/status', 
			'GET', 
			{ 'uploadId': uploadId },
			{ 'longPoll': opts['longPoll'] },
			{  },
			{  },
			null, 
			['PureCloud OAuth'], 
			['application/json'],
			['application/json']
		);
	}

	/**
	 * Export a script via download service.
	 * 
	 * @param {String} scriptId Script ID
	 * @param {Object} opts Optional parameters
	 * @param {Object} opts.body 
	 */
	postScriptExport(scriptId, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'scriptId' is set
		if (scriptId === undefined || scriptId === null) {
			throw 'Missing the required parameter "scriptId" when calling postScriptExport';
		}

		return this.apiClient.callApi(
			'/api/v2/scripts/{scriptId}/export', 
			'POST', 
			{ 'scriptId': scriptId },
			{  },
			{  },
			{  },
			opts['body'], 
			['PureCloud OAuth'], 
			['application/json'],
			['application/json']
		);
	}

	/**
	 * Create a page.
	 * 
	 * @param {String} scriptId Script ID
	 * @param {Object} opts Optional parameters
	 * @param {String} opts.scriptDataVersion Advanced usage - controls the data version of the script
	 * @param {Object} opts.body 
	 */
	postScriptPages(scriptId, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'scriptId' is set
		if (scriptId === undefined || scriptId === null) {
			throw 'Missing the required parameter "scriptId" when calling postScriptPages';
		}

		return this.apiClient.callApi(
			'/api/v2/scripts/{scriptId}/pages', 
			'POST', 
			{ 'scriptId': scriptId },
			{ 'scriptDataVersion': opts['scriptDataVersion'] },
			{  },
			{  },
			opts['body'], 
			['PureCloud OAuth'], 
			['application/json'],
			['application/json']
		);
	}

	/**
	 * Set a favorite template
	 * 
	 * @param {Object} opts Optional parameters
	 * @param {Object} opts.body 
	 */
	postScripterFavoritetemplates(opts) { 
		opts = opts || {};
		

		return this.apiClient.callApi(
			'/api/v2/scripter/favoritetemplates', 
			'POST', 
			{  },
			{  },
			{  },
			{  },
			opts['body'], 
			['PureCloud OAuth'], 
			['application/json'],
			['application/json']
		);
	}

	/**
	 * Create a user script template.
	 * 
	 * @param {Object} opts Optional parameters
	 * @param {Object} opts.body 
	 */
	postScripterTemplates(opts) { 
		opts = opts || {};
		

		return this.apiClient.callApi(
			'/api/v2/scripter/templates', 
			'POST', 
			{  },
			{  },
			{  },
			{  },
			opts['body'], 
			['PureCloud OAuth'], 
			['application/json'],
			['application/json']
		);
	}

	/**
	 * Create a script.
	 * 
	 * @param {Object} opts Optional parameters
	 * @param {Object.<String, {String: Object}>} opts.body 
	 */
	postScripts(opts) { 
		opts = opts || {};
		

		return this.apiClient.callApi(
			'/api/v2/scripts', 
			'POST', 
			{  },
			{  },
			{  },
			{  },
			opts['body'], 
			['PureCloud OAuth'], 
			['application/json'],
			['application/json']
		);
	}

	/**
	 * Publish a script.
	 * 
	 * @param {Object} opts Optional parameters
	 * @param {String} opts.scriptDataVersion Advanced usage - controls the data version of the script
	 * @param {Object} opts.body body
	 */
	postScriptsPublished(opts) { 
		opts = opts || {};
		

		return this.apiClient.callApi(
			'/api/v2/scripts/published', 
			'POST', 
			{  },
			{ 'scriptDataVersion': opts['scriptDataVersion'] },
			{  },
			{  },
			opts['body'], 
			['PureCloud OAuth'], 
			['application/json'],
			['application/json']
		);
	}

	/**
	 * Create a template from a script.
	 * 
	 * @param {Object} opts Optional parameters
	 * @param {String} opts.scriptDataVersion Advanced usage - controls the data version of the script
	 * @param {Object} opts.body 
	 */
	postScriptsTemplates(opts) { 
		opts = opts || {};
		

		return this.apiClient.callApi(
			'/api/v2/scripts/templates', 
			'POST', 
			{  },
			{ 'scriptDataVersion': opts['scriptDataVersion'] },
			{  },
			{  },
			opts['body'], 
			['PureCloud OAuth'], 
			['application/json'],
			['application/json']
		);
	}

	/**
	 * Update a script.
	 * 
	 * @param {String} scriptId Script ID
	 * @param {Object} opts Optional parameters
	 * @param {String} opts.scriptDataVersion Advanced usage - controls the data version of the script
	 * @param {Object} opts.body 
	 */
	putScript(scriptId, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'scriptId' is set
		if (scriptId === undefined || scriptId === null) {
			throw 'Missing the required parameter "scriptId" when calling putScript';
		}

		return this.apiClient.callApi(
			'/api/v2/scripts/{scriptId}', 
			'PUT', 
			{ 'scriptId': scriptId },
			{ 'scriptDataVersion': opts['scriptDataVersion'] },
			{  },
			{  },
			opts['body'], 
			['PureCloud OAuth'], 
			['application/json'],
			['application/json']
		);
	}

	/**
	 * Update a page.
	 * 
	 * @param {String} scriptId Script ID
	 * @param {String} pageId Page ID
	 * @param {Object} opts Optional parameters
	 * @param {String} opts.scriptDataVersion Advanced usage - controls the data version of the script
	 * @param {Object} opts.body 
	 */
	putScriptPage(scriptId, pageId, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'scriptId' is set
		if (scriptId === undefined || scriptId === null) {
			throw 'Missing the required parameter "scriptId" when calling putScriptPage';
		}
		// verify the required parameter 'pageId' is set
		if (pageId === undefined || pageId === null) {
			throw 'Missing the required parameter "pageId" when calling putScriptPage';
		}

		return this.apiClient.callApi(
			'/api/v2/scripts/{scriptId}/pages/{pageId}', 
			'PUT', 
			{ 'scriptId': scriptId,'pageId': pageId },
			{ 'scriptDataVersion': opts['scriptDataVersion'] },
			{  },
			{  },
			opts['body'], 
			['PureCloud OAuth'], 
			['application/json'],
			['application/json']
		);
	}

	/**
	 * Update a composer template
	 * 
	 * @param {String} templateId Template ID
	 * @param {Object} opts Optional parameters
	 * @param {Object} opts.body 
	 */
	putScripterTemplate(templateId, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'templateId' is set
		if (templateId === undefined || templateId === null) {
			throw 'Missing the required parameter "templateId" when calling putScripterTemplate';
		}

		return this.apiClient.callApi(
			'/api/v2/scripter/templates/{templateId}', 
			'PUT', 
			{ 'templateId': templateId },
			{  },
			{  },
			{  },
			opts['body'], 
			['PureCloud OAuth'], 
			['application/json'],
			['application/json']
		);
	}

}


export default ScriptsApi;
