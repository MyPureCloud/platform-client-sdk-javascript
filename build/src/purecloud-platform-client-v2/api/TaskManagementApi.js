import ApiClient from '../ApiClient.js';


class TaskManagementApi {
	/**
	 * TaskManagement service.
	 * @module purecloud-platform-client-v2/api/TaskManagementApi
	 * @version 259.0.0
	 */

	/**
	 * Constructs a new TaskManagementApi. 
	 * @alias module:purecloud-platform-client-v2/api/TaskManagementApi
	 * @class
	 * @param {module:purecloud-platform-client-v2/ApiClient} apiClient Optional API client implementation to use,
	 * default to {@link module:purecloud-platform-client-v2/ApiClient#instance} if unspecified.
	 */
	constructor(apiClient) {
		this.apiClient = apiClient || ApiClient.instance;
	}


	/**
	 * Delete a workbin
	 * 
	 * @param {String} workbinId Workbin ID
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	deleteTaskmanagementWorkbin(workbinId, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'workbinId' is set
		if (workbinId === undefined || workbinId === null || workbinId === '') {
			throw 'Missing the required parameter "workbinId" when calling deleteTaskmanagementWorkbin';
		}

		return this.apiClient.callApi(
			'/api/v2/taskmanagement/workbins/{workbinId}', 
			'DELETE', 
			{ 'workbinId': workbinId },
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
	 * Delete a workitem
	 * 
	 * @param {String} workitemId Workitem ID
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	deleteTaskmanagementWorkitem(workitemId, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'workitemId' is set
		if (workitemId === undefined || workitemId === null || workitemId === '') {
			throw 'Missing the required parameter "workitemId" when calling deleteTaskmanagementWorkitem';
		}

		return this.apiClient.callApi(
			'/api/v2/taskmanagement/workitems/{workitemId}', 
			'DELETE', 
			{ 'workitemId': workitemId },
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
	 * Delete a bulk add job
	 * 
	 * @param {String} bulkJobId Bulk job id
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	deleteTaskmanagementWorkitemsBulkAddJob(bulkJobId, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'bulkJobId' is set
		if (bulkJobId === undefined || bulkJobId === null || bulkJobId === '') {
			throw 'Missing the required parameter "bulkJobId" when calling deleteTaskmanagementWorkitemsBulkAddJob';
		}

		return this.apiClient.callApi(
			'/api/v2/taskmanagement/workitems/bulk/add/jobs/{bulkJobId}', 
			'DELETE', 
			{ 'bulkJobId': bulkJobId },
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
	 * Delete a Bulk job
	 * 
	 * @param {String} bulkJobId Bulk job id
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	deleteTaskmanagementWorkitemsBulkTerminateJob(bulkJobId, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'bulkJobId' is set
		if (bulkJobId === undefined || bulkJobId === null || bulkJobId === '') {
			throw 'Missing the required parameter "bulkJobId" when calling deleteTaskmanagementWorkitemsBulkTerminateJob';
		}

		return this.apiClient.callApi(
			'/api/v2/taskmanagement/workitems/bulk/terminate/jobs/{bulkJobId}', 
			'DELETE', 
			{ 'bulkJobId': bulkJobId },
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
	deleteTaskmanagementWorkitemsSchema(schemaId, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'schemaId' is set
		if (schemaId === undefined || schemaId === null || schemaId === '') {
			throw 'Missing the required parameter "schemaId" when calling deleteTaskmanagementWorkitemsSchema';
		}

		return this.apiClient.callApi(
			'/api/v2/taskmanagement/workitems/schemas/{schemaId}', 
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
	 * Delete a worktype
	 * 
	 * @param {String} worktypeId Worktype id
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	deleteTaskmanagementWorktype(worktypeId, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'worktypeId' is set
		if (worktypeId === undefined || worktypeId === null || worktypeId === '') {
			throw 'Missing the required parameter "worktypeId" when calling deleteTaskmanagementWorktype';
		}

		return this.apiClient.callApi(
			'/api/v2/taskmanagement/worktypes/{worktypeId}', 
			'DELETE', 
			{ 'worktypeId': worktypeId },
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
	 * Delete a date based rule
	 * 
	 * @param {String} worktypeId Worktype id
	 * @param {String} ruleId ruleId
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	deleteTaskmanagementWorktypeFlowsDatebasedRule(worktypeId, ruleId, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'worktypeId' is set
		if (worktypeId === undefined || worktypeId === null || worktypeId === '') {
			throw 'Missing the required parameter "worktypeId" when calling deleteTaskmanagementWorktypeFlowsDatebasedRule';
		}
		// verify the required parameter 'ruleId' is set
		if (ruleId === undefined || ruleId === null || ruleId === '') {
			throw 'Missing the required parameter "ruleId" when calling deleteTaskmanagementWorktypeFlowsDatebasedRule';
		}

		return this.apiClient.callApi(
			'/api/v2/taskmanagement/worktypes/{worktypeId}/flows/datebased/rules/{ruleId}', 
			'DELETE', 
			{ 'worktypeId': worktypeId,'ruleId': ruleId },
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
	 * Delete a rule
	 * 
	 * @param {String} worktypeId Worktype id
	 * @param {String} ruleId ruleId
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	deleteTaskmanagementWorktypeFlowsOnattributechangeRule(worktypeId, ruleId, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'worktypeId' is set
		if (worktypeId === undefined || worktypeId === null || worktypeId === '') {
			throw 'Missing the required parameter "worktypeId" when calling deleteTaskmanagementWorktypeFlowsOnattributechangeRule';
		}
		// verify the required parameter 'ruleId' is set
		if (ruleId === undefined || ruleId === null || ruleId === '') {
			throw 'Missing the required parameter "ruleId" when calling deleteTaskmanagementWorktypeFlowsOnattributechangeRule';
		}

		return this.apiClient.callApi(
			'/api/v2/taskmanagement/worktypes/{worktypeId}/flows/onattributechange/rules/{ruleId}', 
			'DELETE', 
			{ 'worktypeId': worktypeId,'ruleId': ruleId },
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
	 * Delete a rule
	 * 
	 * @param {String} worktypeId Worktype id
	 * @param {String} ruleId ruleId
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	deleteTaskmanagementWorktypeFlowsOncreateRule(worktypeId, ruleId, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'worktypeId' is set
		if (worktypeId === undefined || worktypeId === null || worktypeId === '') {
			throw 'Missing the required parameter "worktypeId" when calling deleteTaskmanagementWorktypeFlowsOncreateRule';
		}
		// verify the required parameter 'ruleId' is set
		if (ruleId === undefined || ruleId === null || ruleId === '') {
			throw 'Missing the required parameter "ruleId" when calling deleteTaskmanagementWorktypeFlowsOncreateRule';
		}

		return this.apiClient.callApi(
			'/api/v2/taskmanagement/worktypes/{worktypeId}/flows/oncreate/rules/{ruleId}', 
			'DELETE', 
			{ 'worktypeId': worktypeId,'ruleId': ruleId },
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
	 * Delete a status
	 * 
	 * @param {String} worktypeId Worktype id
	 * @param {String} statusId Status id
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	deleteTaskmanagementWorktypeStatus(worktypeId, statusId, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'worktypeId' is set
		if (worktypeId === undefined || worktypeId === null || worktypeId === '') {
			throw 'Missing the required parameter "worktypeId" when calling deleteTaskmanagementWorktypeStatus';
		}
		// verify the required parameter 'statusId' is set
		if (statusId === undefined || statusId === null || statusId === '') {
			throw 'Missing the required parameter "statusId" when calling deleteTaskmanagementWorktypeStatus';
		}

		return this.apiClient.callApi(
			'/api/v2/taskmanagement/worktypes/{worktypeId}/statuses/{statusId}', 
			'DELETE', 
			{ 'worktypeId': worktypeId,'statusId': statusId },
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
	 * Get a workbin
	 * 
	 * @param {String} workbinId Workbin ID
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	getTaskmanagementWorkbin(workbinId, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'workbinId' is set
		if (workbinId === undefined || workbinId === null || workbinId === '') {
			throw 'Missing the required parameter "workbinId" when calling getTaskmanagementWorkbin';
		}

		return this.apiClient.callApi(
			'/api/v2/taskmanagement/workbins/{workbinId}', 
			'GET', 
			{ 'workbinId': workbinId },
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
	 * Get a listing of a workbin's attribute change history
	 * 
	 * @param {String} workbinId Workbin ID
	 * @param {Object} opts Optional parameters
	 * @param {String} opts.after The cursor that points to the end of the set of entities that has been returned.
	 * @param {Number} opts.pageSize Limit the number of entities to return. It is not guaranteed that the requested number of entities will be filled in a single request. If an `after` key is returned as part of the response it is possible that more entities that match the filter criteria exist. Maximum of 200. (default to 25)
	 * @param {Object} opts.sortOrder Ascending or descending sort order (default to descending)
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	getTaskmanagementWorkbinHistory(workbinId, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'workbinId' is set
		if (workbinId === undefined || workbinId === null || workbinId === '') {
			throw 'Missing the required parameter "workbinId" when calling getTaskmanagementWorkbinHistory';
		}

		return this.apiClient.callApi(
			'/api/v2/taskmanagement/workbins/{workbinId}/history', 
			'GET', 
			{ 'workbinId': workbinId },
			{ 'after': opts['after'],'pageSize': opts['pageSize'],'sortOrder': opts['sortOrder'] },
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
	 * Get a version of a workbin
	 * 
	 * @param {String} workbinId Workbin ID
	 * @param {Number} entityVersion Workbin version
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	getTaskmanagementWorkbinVersion(workbinId, entityVersion, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'workbinId' is set
		if (workbinId === undefined || workbinId === null || workbinId === '') {
			throw 'Missing the required parameter "workbinId" when calling getTaskmanagementWorkbinVersion';
		}
		// verify the required parameter 'entityVersion' is set
		if (entityVersion === undefined || entityVersion === null) {
			throw 'Missing the required parameter "entityVersion" when calling getTaskmanagementWorkbinVersion';
		}

		return this.apiClient.callApi(
			'/api/v2/taskmanagement/workbins/{workbinId}/versions/{entityVersion}', 
			'GET', 
			{ 'workbinId': workbinId,'entityVersion': entityVersion },
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
	 * Get all versions of a workbin
	 * 
	 * @param {String} workbinId Workbin ID
	 * @param {Object} opts Optional parameters
	 * @param {String} opts.after The cursor that points to the end of the set of entities that has been returned.
	 * @param {Number} opts.pageSize Limit the number of entities to return. It is not guaranteed that the requested number of entities will be filled in a single request. If an `after` key is returned as part of the response it is possible that more entities that match the filter criteria exist. Maximum of 200. (default to 25)
	 * @param {Object} opts.sortOrder Ascending or descending sort order (default to descending)
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	getTaskmanagementWorkbinVersions(workbinId, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'workbinId' is set
		if (workbinId === undefined || workbinId === null || workbinId === '') {
			throw 'Missing the required parameter "workbinId" when calling getTaskmanagementWorkbinVersions';
		}

		return this.apiClient.callApi(
			'/api/v2/taskmanagement/workbins/{workbinId}/versions', 
			'GET', 
			{ 'workbinId': workbinId },
			{ 'after': opts['after'],'pageSize': opts['pageSize'],'sortOrder': opts['sortOrder'] },
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
	 * Get a workitem
	 * 
	 * @param {String} workitemId Workitem ID
	 * @param {Object} opts Optional parameters
	 * @param {Array.<String>} opts.expands Which fields to expand. Comma separated if more than one.
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	getTaskmanagementWorkitem(workitemId, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'workitemId' is set
		if (workitemId === undefined || workitemId === null || workitemId === '') {
			throw 'Missing the required parameter "workitemId" when calling getTaskmanagementWorkitem';
		}

		return this.apiClient.callApi(
			'/api/v2/taskmanagement/workitems/{workitemId}', 
			'GET', 
			{ 'workitemId': workitemId },
			{ 'expands': this.apiClient.buildCollectionParam(opts['expands'], 'multi') },
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
	 * Get a listing of a workitem's attribute change history
	 * 
	 * @param {String} workitemId Workitem ID
	 * @param {Object} opts Optional parameters
	 * @param {String} opts.after The cursor that points to the end of the set of entities that has been returned.
	 * @param {Number} opts.pageSize Limit the number of entities to return. It is not guaranteed that the requested number of entities will be filled in a single request. If an `after` key is returned as part of the response it is possible that more entities that match the filter criteria exist. Maximum of 200. (default to 25)
	 * @param {Object} opts.sortOrder Ascending or descending sort order (default to descending)
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	getTaskmanagementWorkitemHistory(workitemId, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'workitemId' is set
		if (workitemId === undefined || workitemId === null || workitemId === '') {
			throw 'Missing the required parameter "workitemId" when calling getTaskmanagementWorkitemHistory';
		}

		return this.apiClient.callApi(
			'/api/v2/taskmanagement/workitems/{workitemId}/history', 
			'GET', 
			{ 'workitemId': workitemId },
			{ 'after': opts['after'],'pageSize': opts['pageSize'],'sortOrder': opts['sortOrder'] },
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
	 * Get all wrapup codes added for the given user for a workitem.
	 * 
	 * @param {String} workitemId The ID of the Workitem.
	 * @param {String} userId The ID of the user
	 * @param {Object} opts Optional parameters
	 * @param {Object} opts.expands Which fields, if any, to expand.
	 * @param {String} opts.after The cursor that points to the end of the set of entities that has been returned.
	 * @param {Number} opts.pageSize Limit the number of entities to return. It is not guaranteed that the requested number of entities will be filled in a single request. If an `after` key is returned as part of the response it is possible that more entities that match the filter criteria exist. Maximum of 50. (default to 25)
	 * @param {Object} opts.sortOrder Ascending or descending sort order (default to descending)
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	getTaskmanagementWorkitemUserWrapups(workitemId, userId, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'workitemId' is set
		if (workitemId === undefined || workitemId === null || workitemId === '') {
			throw 'Missing the required parameter "workitemId" when calling getTaskmanagementWorkitemUserWrapups';
		}
		// verify the required parameter 'userId' is set
		if (userId === undefined || userId === null || userId === '') {
			throw 'Missing the required parameter "userId" when calling getTaskmanagementWorkitemUserWrapups';
		}

		return this.apiClient.callApi(
			'/api/v2/taskmanagement/workitems/{workitemId}/users/{userId}/wrapups', 
			'GET', 
			{ 'workitemId': workitemId,'userId': userId },
			{ 'expands': opts['expands'],'after': opts['after'],'pageSize': opts['pageSize'],'sortOrder': opts['sortOrder'] },
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
	 * Get a version of a workitem
	 * 
	 * @param {String} workitemId Workitem ID
	 * @param {Number} entityVersion Workitem version
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	getTaskmanagementWorkitemVersion(workitemId, entityVersion, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'workitemId' is set
		if (workitemId === undefined || workitemId === null || workitemId === '') {
			throw 'Missing the required parameter "workitemId" when calling getTaskmanagementWorkitemVersion';
		}
		// verify the required parameter 'entityVersion' is set
		if (entityVersion === undefined || entityVersion === null) {
			throw 'Missing the required parameter "entityVersion" when calling getTaskmanagementWorkitemVersion';
		}

		return this.apiClient.callApi(
			'/api/v2/taskmanagement/workitems/{workitemId}/versions/{entityVersion}', 
			'GET', 
			{ 'workitemId': workitemId,'entityVersion': entityVersion },
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
	 * Get all versions of a workitem
	 * 
	 * @param {String} workitemId Workitem ID
	 * @param {Object} opts Optional parameters
	 * @param {String} opts.after The cursor that points to the end of the set of entities that has been returned.
	 * @param {Number} opts.pageSize Limit the number of entities to return. It is not guaranteed that the requested number of entities will be filled in a single request. If an `after` key is returned as part of the response it is possible that more entities that match the filter criteria exist. Maximum of 200. (default to 25)
	 * @param {Object} opts.sortOrder Ascending or descending sort order (default to descending)
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	getTaskmanagementWorkitemVersions(workitemId, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'workitemId' is set
		if (workitemId === undefined || workitemId === null || workitemId === '') {
			throw 'Missing the required parameter "workitemId" when calling getTaskmanagementWorkitemVersions';
		}

		return this.apiClient.callApi(
			'/api/v2/taskmanagement/workitems/{workitemId}/versions', 
			'GET', 
			{ 'workitemId': workitemId },
			{ 'after': opts['after'],'pageSize': opts['pageSize'],'sortOrder': opts['sortOrder'] },
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
	 * Get all wrapup codes added for all users for a workitem.
	 * 
	 * @param {String} workitemId The ID of the Workitem.
	 * @param {Object} opts Optional parameters
	 * @param {Object} opts.expands Which fields, if any, to expand.
	 * @param {String} opts.after The cursor that points to the end of the set of entities that has been returned.
	 * @param {Number} opts.pageSize Limit the number of entities to return. It is not guaranteed that the requested number of entities will be filled in a single request. If an `after` key is returned as part of the response it is possible that more entities that match the filter criteria exist. Maximum of 50. (default to 25)
	 * @param {Object} opts.sortOrder Ascending or descending sort order (default to descending)
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	getTaskmanagementWorkitemWrapups(workitemId, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'workitemId' is set
		if (workitemId === undefined || workitemId === null || workitemId === '') {
			throw 'Missing the required parameter "workitemId" when calling getTaskmanagementWorkitemWrapups';
		}

		return this.apiClient.callApi(
			'/api/v2/taskmanagement/workitems/{workitemId}/wrapups', 
			'GET', 
			{ 'workitemId': workitemId },
			{ 'expands': opts['expands'],'after': opts['after'],'pageSize': opts['pageSize'],'sortOrder': opts['sortOrder'] },
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
	 * Get the bulk add job associated with the job id.
	 * 
	 * @param {String} bulkJobId Bulk job id
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	getTaskmanagementWorkitemsBulkAddJob(bulkJobId, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'bulkJobId' is set
		if (bulkJobId === undefined || bulkJobId === null || bulkJobId === '') {
			throw 'Missing the required parameter "bulkJobId" when calling getTaskmanagementWorkitemsBulkAddJob';
		}

		return this.apiClient.callApi(
			'/api/v2/taskmanagement/workitems/bulk/add/jobs/{bulkJobId}', 
			'GET', 
			{ 'bulkJobId': bulkJobId },
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
	 * Get bulk add job results.
	 * 
	 * @param {String} bulkJobId Bulk job id
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	getTaskmanagementWorkitemsBulkAddJobResults(bulkJobId, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'bulkJobId' is set
		if (bulkJobId === undefined || bulkJobId === null || bulkJobId === '') {
			throw 'Missing the required parameter "bulkJobId" when calling getTaskmanagementWorkitemsBulkAddJobResults';
		}

		return this.apiClient.callApi(
			'/api/v2/taskmanagement/workitems/bulk/add/jobs/{bulkJobId}/results', 
			'GET', 
			{ 'bulkJobId': bulkJobId },
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
	 * Get bulk jobs created by the currently logged in user.
	 * 
	 * @param {Object} opts Optional parameters
	 * @param {String} opts.after The cursor that points to the end of the set of entities that has been returned.
	 * @param {Number} opts.pageSize Limit the number of entities to return. It is not guaranteed that the requested number of entities will be filled in a single request. If an `after` key is returned as part of the response it is possible that more entities that match the filter criteria exist. Maximum of 200. (default to 25)
	 * @param {Object} opts.sortOrder Ascending or descending sort order (default to descending)
	 * @param {Object} opts.action The bulk job action.
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	getTaskmanagementWorkitemsBulkJobsUsersMe(opts) { 
		opts = opts || {};
		

		return this.apiClient.callApi(
			'/api/v2/taskmanagement/workitems/bulk/jobs/users/me', 
			'GET', 
			{  },
			{ 'after': opts['after'],'pageSize': opts['pageSize'],'sortOrder': opts['sortOrder'],'action': opts['action'] },
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
	 * Get the bulk job associated with the job id.
	 * 
	 * @param {String} bulkJobId Bulk job id
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	getTaskmanagementWorkitemsBulkTerminateJob(bulkJobId, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'bulkJobId' is set
		if (bulkJobId === undefined || bulkJobId === null || bulkJobId === '') {
			throw 'Missing the required parameter "bulkJobId" when calling getTaskmanagementWorkitemsBulkTerminateJob';
		}

		return this.apiClient.callApi(
			'/api/v2/taskmanagement/workitems/bulk/terminate/jobs/{bulkJobId}', 
			'GET', 
			{ 'bulkJobId': bulkJobId },
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
	 * Get bulk terminate job results.
	 * 
	 * @param {String} bulkJobId Bulk job id
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	getTaskmanagementWorkitemsBulkTerminateJobResults(bulkJobId, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'bulkJobId' is set
		if (bulkJobId === undefined || bulkJobId === null || bulkJobId === '') {
			throw 'Missing the required parameter "bulkJobId" when calling getTaskmanagementWorkitemsBulkTerminateJobResults';
		}

		return this.apiClient.callApi(
			'/api/v2/taskmanagement/workitems/bulk/terminate/jobs/{bulkJobId}/results', 
			'GET', 
			{ 'bulkJobId': bulkJobId },
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
	 * Get the workitem query job associated with the job id.
	 * 
	 * @param {String} jobId jobId
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	getTaskmanagementWorkitemsQueryJob(jobId, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'jobId' is set
		if (jobId === undefined || jobId === null || jobId === '') {
			throw 'Missing the required parameter "jobId" when calling getTaskmanagementWorkitemsQueryJob';
		}

		return this.apiClient.callApi(
			'/api/v2/taskmanagement/workitems/query/jobs/{jobId}', 
			'GET', 
			{ 'jobId': jobId },
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
	 * Get results from for workitem query job 
	 * 
	 * @param {String} jobId jobId
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	getTaskmanagementWorkitemsQueryJobResults(jobId, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'jobId' is set
		if (jobId === undefined || jobId === null || jobId === '') {
			throw 'Missing the required parameter "jobId" when calling getTaskmanagementWorkitemsQueryJobResults';
		}

		return this.apiClient.callApi(
			'/api/v2/taskmanagement/workitems/query/jobs/{jobId}/results', 
			'GET', 
			{ 'jobId': jobId },
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
	 * Get a schema
	 * 
	 * @param {String} schemaId Schema ID
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	getTaskmanagementWorkitemsSchema(schemaId, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'schemaId' is set
		if (schemaId === undefined || schemaId === null || schemaId === '') {
			throw 'Missing the required parameter "schemaId" when calling getTaskmanagementWorkitemsSchema';
		}

		return this.apiClient.callApi(
			'/api/v2/taskmanagement/workitems/schemas/{schemaId}', 
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
	getTaskmanagementWorkitemsSchemaVersion(schemaId, versionId, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'schemaId' is set
		if (schemaId === undefined || schemaId === null || schemaId === '') {
			throw 'Missing the required parameter "schemaId" when calling getTaskmanagementWorkitemsSchemaVersion';
		}
		// verify the required parameter 'versionId' is set
		if (versionId === undefined || versionId === null || versionId === '') {
			throw 'Missing the required parameter "versionId" when calling getTaskmanagementWorkitemsSchemaVersion';
		}

		return this.apiClient.callApi(
			'/api/v2/taskmanagement/workitems/schemas/{schemaId}/versions/{versionId}', 
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
	 * Get all versions of a schema
	 * 
	 * @param {String} schemaId Schema ID
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	getTaskmanagementWorkitemsSchemaVersions(schemaId, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'schemaId' is set
		if (schemaId === undefined || schemaId === null || schemaId === '') {
			throw 'Missing the required parameter "schemaId" when calling getTaskmanagementWorkitemsSchemaVersions';
		}

		return this.apiClient.callApi(
			'/api/v2/taskmanagement/workitems/schemas/{schemaId}/versions', 
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
	getTaskmanagementWorkitemsSchemas(opts) { 
		opts = opts || {};
		

		return this.apiClient.callApi(
			'/api/v2/taskmanagement/workitems/schemas', 
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
	getTaskmanagementWorkitemsSchemasCoretype(coreTypeName, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'coreTypeName' is set
		if (coreTypeName === undefined || coreTypeName === null || coreTypeName === '') {
			throw 'Missing the required parameter "coreTypeName" when calling getTaskmanagementWorkitemsSchemasCoretype';
		}

		return this.apiClient.callApi(
			'/api/v2/taskmanagement/workitems/schemas/coretypes/{coreTypeName}', 
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
	getTaskmanagementWorkitemsSchemasCoretypes(opts) { 
		opts = opts || {};
		

		return this.apiClient.callApi(
			'/api/v2/taskmanagement/workitems/schemas/coretypes', 
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
	getTaskmanagementWorkitemsSchemasLimits(opts) { 
		opts = opts || {};
		

		return this.apiClient.callApi(
			'/api/v2/taskmanagement/workitems/schemas/limits', 
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
	 * Get a worktype
	 * 
	 * @param {String} worktypeId Worktype id
	 * @param {Object} opts Optional parameters
	 * @param {Array.<String>} opts.expands Which fields, if any, to expand.
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	getTaskmanagementWorktype(worktypeId, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'worktypeId' is set
		if (worktypeId === undefined || worktypeId === null || worktypeId === '') {
			throw 'Missing the required parameter "worktypeId" when calling getTaskmanagementWorktype';
		}

		return this.apiClient.callApi(
			'/api/v2/taskmanagement/worktypes/{worktypeId}', 
			'GET', 
			{ 'worktypeId': worktypeId },
			{ 'expands': this.apiClient.buildCollectionParam(opts['expands'], 'multi') },
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
	 * Get a date based rule
	 * 
	 * @param {String} worktypeId Worktype id
	 * @param {String} ruleId ruleId
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	getTaskmanagementWorktypeFlowsDatebasedRule(worktypeId, ruleId, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'worktypeId' is set
		if (worktypeId === undefined || worktypeId === null || worktypeId === '') {
			throw 'Missing the required parameter "worktypeId" when calling getTaskmanagementWorktypeFlowsDatebasedRule';
		}
		// verify the required parameter 'ruleId' is set
		if (ruleId === undefined || ruleId === null || ruleId === '') {
			throw 'Missing the required parameter "ruleId" when calling getTaskmanagementWorktypeFlowsDatebasedRule';
		}

		return this.apiClient.callApi(
			'/api/v2/taskmanagement/worktypes/{worktypeId}/flows/datebased/rules/{ruleId}', 
			'GET', 
			{ 'worktypeId': worktypeId,'ruleId': ruleId },
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
	 * Get all date based rules for a worktype
	 * 
	 * @param {String} worktypeId Worktype id
	 * @param {Object} opts Optional parameters
	 * @param {String} opts.after The cursor that points to the end of the set of entities that has been returned.
	 * @param {Number} opts.pageSize Limit the number of entities to return. It is not guaranteed that the requested number of entities will be filled in a single request. If an `after` key is returned as part of the response it is possible that more entities that match the filter criteria exist. Maximum of 200. (default to 25)
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	getTaskmanagementWorktypeFlowsDatebasedRules(worktypeId, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'worktypeId' is set
		if (worktypeId === undefined || worktypeId === null || worktypeId === '') {
			throw 'Missing the required parameter "worktypeId" when calling getTaskmanagementWorktypeFlowsDatebasedRules';
		}

		return this.apiClient.callApi(
			'/api/v2/taskmanagement/worktypes/{worktypeId}/flows/datebased/rules', 
			'GET', 
			{ 'worktypeId': worktypeId },
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
	 * Get an attribute change rule
	 * 
	 * @param {String} worktypeId Worktype id
	 * @param {String} ruleId ruleId
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	getTaskmanagementWorktypeFlowsOnattributechangeRule(worktypeId, ruleId, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'worktypeId' is set
		if (worktypeId === undefined || worktypeId === null || worktypeId === '') {
			throw 'Missing the required parameter "worktypeId" when calling getTaskmanagementWorktypeFlowsOnattributechangeRule';
		}
		// verify the required parameter 'ruleId' is set
		if (ruleId === undefined || ruleId === null || ruleId === '') {
			throw 'Missing the required parameter "ruleId" when calling getTaskmanagementWorktypeFlowsOnattributechangeRule';
		}

		return this.apiClient.callApi(
			'/api/v2/taskmanagement/worktypes/{worktypeId}/flows/onattributechange/rules/{ruleId}', 
			'GET', 
			{ 'worktypeId': worktypeId,'ruleId': ruleId },
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
	 * Get all attribute-change rules for a worktype
	 * 
	 * @param {String} worktypeId Worktype id
	 * @param {Object} opts Optional parameters
	 * @param {String} opts.after The cursor that points to the end of the set of entities that has been returned.
	 * @param {Number} opts.pageSize Limit the number of entities to return. It is not guaranteed that the requested number of entities will be filled in a single request. If an `after` key is returned as part of the response it is possible that more entities that match the filter criteria exist. Maximum of 200. (default to 25)
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	getTaskmanagementWorktypeFlowsOnattributechangeRules(worktypeId, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'worktypeId' is set
		if (worktypeId === undefined || worktypeId === null || worktypeId === '') {
			throw 'Missing the required parameter "worktypeId" when calling getTaskmanagementWorktypeFlowsOnattributechangeRules';
		}

		return this.apiClient.callApi(
			'/api/v2/taskmanagement/worktypes/{worktypeId}/flows/onattributechange/rules', 
			'GET', 
			{ 'worktypeId': worktypeId },
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
	 * Get an on-create rule
	 * 
	 * @param {String} worktypeId Worktype id
	 * @param {String} ruleId ruleId
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	getTaskmanagementWorktypeFlowsOncreateRule(worktypeId, ruleId, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'worktypeId' is set
		if (worktypeId === undefined || worktypeId === null || worktypeId === '') {
			throw 'Missing the required parameter "worktypeId" when calling getTaskmanagementWorktypeFlowsOncreateRule';
		}
		// verify the required parameter 'ruleId' is set
		if (ruleId === undefined || ruleId === null || ruleId === '') {
			throw 'Missing the required parameter "ruleId" when calling getTaskmanagementWorktypeFlowsOncreateRule';
		}

		return this.apiClient.callApi(
			'/api/v2/taskmanagement/worktypes/{worktypeId}/flows/oncreate/rules/{ruleId}', 
			'GET', 
			{ 'worktypeId': worktypeId,'ruleId': ruleId },
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
	 * Get all on-create rules for a worktype
	 * 
	 * @param {String} worktypeId Worktype id
	 * @param {Object} opts Optional parameters
	 * @param {String} opts.after The cursor that points to the end of the set of entities that has been returned.
	 * @param {Number} opts.pageSize Limit the number of entities to return. It is not guaranteed that the requested number of entities will be filled in a single request. If an `after` key is returned as part of the response it is possible that more entities that match the filter criteria exist. Maximum of 200. (default to 25)
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	getTaskmanagementWorktypeFlowsOncreateRules(worktypeId, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'worktypeId' is set
		if (worktypeId === undefined || worktypeId === null || worktypeId === '') {
			throw 'Missing the required parameter "worktypeId" when calling getTaskmanagementWorktypeFlowsOncreateRules';
		}

		return this.apiClient.callApi(
			'/api/v2/taskmanagement/worktypes/{worktypeId}/flows/oncreate/rules', 
			'GET', 
			{ 'worktypeId': worktypeId },
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
	 * Get a listing of a worktype's attribute change history
	 * 
	 * @param {String} worktypeId Worktype id
	 * @param {Object} opts Optional parameters
	 * @param {String} opts.after The cursor that points to the end of the set of entities that has been returned.
	 * @param {Number} opts.pageSize Limit the number of entities to return. It is not guaranteed that the requested number of entities will be filled in a single request. If an `after` key is returned as part of the response it is possible that more entities that match the filter criteria exist. Maximum of 200. (default to 25)
	 * @param {Object} opts.sortOrder Ascending or descending sort order (default to descending)
	 * @param {Array.<String>} opts.fields Comma-separated list of fields. The response will contain only versions created as a result of changes to these fields.
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	getTaskmanagementWorktypeHistory(worktypeId, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'worktypeId' is set
		if (worktypeId === undefined || worktypeId === null || worktypeId === '') {
			throw 'Missing the required parameter "worktypeId" when calling getTaskmanagementWorktypeHistory';
		}

		return this.apiClient.callApi(
			'/api/v2/taskmanagement/worktypes/{worktypeId}/history', 
			'GET', 
			{ 'worktypeId': worktypeId },
			{ 'after': opts['after'],'pageSize': opts['pageSize'],'sortOrder': opts['sortOrder'],'fields': this.apiClient.buildCollectionParam(opts['fields'], 'multi') },
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
	 * Get a status
	 * 
	 * @param {String} worktypeId Worktype id
	 * @param {String} statusId Status id
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	getTaskmanagementWorktypeStatus(worktypeId, statusId, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'worktypeId' is set
		if (worktypeId === undefined || worktypeId === null || worktypeId === '') {
			throw 'Missing the required parameter "worktypeId" when calling getTaskmanagementWorktypeStatus';
		}
		// verify the required parameter 'statusId' is set
		if (statusId === undefined || statusId === null || statusId === '') {
			throw 'Missing the required parameter "statusId" when calling getTaskmanagementWorktypeStatus';
		}

		return this.apiClient.callApi(
			'/api/v2/taskmanagement/worktypes/{worktypeId}/statuses/{statusId}', 
			'GET', 
			{ 'worktypeId': worktypeId,'statusId': statusId },
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
	 * Get list of statuses for this worktype.
	 * 
	 * @param {String} worktypeId Worktype id
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	getTaskmanagementWorktypeStatuses(worktypeId, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'worktypeId' is set
		if (worktypeId === undefined || worktypeId === null || worktypeId === '') {
			throw 'Missing the required parameter "worktypeId" when calling getTaskmanagementWorktypeStatuses';
		}

		return this.apiClient.callApi(
			'/api/v2/taskmanagement/worktypes/{worktypeId}/statuses', 
			'GET', 
			{ 'worktypeId': worktypeId },
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
	 * Get a version of a worktype
	 * 
	 * @param {String} worktypeId Worktype id
	 * @param {Number} entityVersion Worktype version
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	getTaskmanagementWorktypeVersion(worktypeId, entityVersion, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'worktypeId' is set
		if (worktypeId === undefined || worktypeId === null || worktypeId === '') {
			throw 'Missing the required parameter "worktypeId" when calling getTaskmanagementWorktypeVersion';
		}
		// verify the required parameter 'entityVersion' is set
		if (entityVersion === undefined || entityVersion === null) {
			throw 'Missing the required parameter "entityVersion" when calling getTaskmanagementWorktypeVersion';
		}

		return this.apiClient.callApi(
			'/api/v2/taskmanagement/worktypes/{worktypeId}/versions/{entityVersion}', 
			'GET', 
			{ 'worktypeId': worktypeId,'entityVersion': entityVersion },
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
	 * Get all versions of a worktype
	 * 
	 * @param {String} worktypeId Worktype id
	 * @param {Object} opts Optional parameters
	 * @param {String} opts.after The cursor that points to the end of the set of entities that has been returned.
	 * @param {Number} opts.pageSize Limit the number of entities to return. It is not guaranteed that the requested number of entities will be filled in a single request. If an `after` key is returned as part of the response it is possible that more entities that match the filter criteria exist. Maximum of 200. (default to 25)
	 * @param {Object} opts.sortOrder Ascending or descending sort order (default to descending)
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	getTaskmanagementWorktypeVersions(worktypeId, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'worktypeId' is set
		if (worktypeId === undefined || worktypeId === null || worktypeId === '') {
			throw 'Missing the required parameter "worktypeId" when calling getTaskmanagementWorktypeVersions';
		}

		return this.apiClient.callApi(
			'/api/v2/taskmanagement/worktypes/{worktypeId}/versions', 
			'GET', 
			{ 'worktypeId': worktypeId },
			{ 'after': opts['after'],'pageSize': opts['pageSize'],'sortOrder': opts['sortOrder'] },
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
	 * Update the attributes of a workbin
	 * 
	 * @param {String} workbinId Workbin ID
	 * @param {Object} body Json with attributes and their new values: {description:new description, name:new name}.
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	patchTaskmanagementWorkbin(workbinId, body, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'workbinId' is set
		if (workbinId === undefined || workbinId === null || workbinId === '') {
			throw 'Missing the required parameter "workbinId" when calling patchTaskmanagementWorkbin';
		}
		// verify the required parameter 'body' is set
		if (body === undefined || body === null) {
			throw 'Missing the required parameter "body" when calling patchTaskmanagementWorkbin';
		}

		return this.apiClient.callApi(
			'/api/v2/taskmanagement/workbins/{workbinId}', 
			'PATCH', 
			{ 'workbinId': workbinId },
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
	 * Update the attributes of a workitem
	 * 
	 * @param {String} workitemId Workitem ID
	 * @param {Object} body Workitem
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	patchTaskmanagementWorkitem(workitemId, body, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'workitemId' is set
		if (workitemId === undefined || workitemId === null || workitemId === '') {
			throw 'Missing the required parameter "workitemId" when calling patchTaskmanagementWorkitem';
		}
		// verify the required parameter 'body' is set
		if (body === undefined || body === null) {
			throw 'Missing the required parameter "body" when calling patchTaskmanagementWorkitem';
		}

		return this.apiClient.callApi(
			'/api/v2/taskmanagement/workitems/{workitemId}', 
			'PATCH', 
			{ 'workitemId': workitemId },
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
	 * Attempts to manually assign a specified workitem to a specified user.  Ignores bullseye ring, PAR score, skills, and languages.
	 * 
	 * @param {String} workitemId Workitem ID
	 * @param {Object} body Targeted user
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	patchTaskmanagementWorkitemAssignment(workitemId, body, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'workitemId' is set
		if (workitemId === undefined || workitemId === null || workitemId === '') {
			throw 'Missing the required parameter "workitemId" when calling patchTaskmanagementWorkitemAssignment';
		}
		// verify the required parameter 'body' is set
		if (body === undefined || body === null) {
			throw 'Missing the required parameter "body" when calling patchTaskmanagementWorkitemAssignment';
		}

		return this.apiClient.callApi(
			'/api/v2/taskmanagement/workitems/{workitemId}/assignment', 
			'PATCH', 
			{ 'workitemId': workitemId },
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
	 * Add/Remove a wrapup code for a given user in a workitem.
	 * 
	 * @param {String} workitemId The ID of the Workitem.
	 * @param {String} userId The ID of the user
	 * @param {Object} body Request body to add/remove a wrapup code for a workitem
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	patchTaskmanagementWorkitemUserWrapups(workitemId, userId, body, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'workitemId' is set
		if (workitemId === undefined || workitemId === null || workitemId === '') {
			throw 'Missing the required parameter "workitemId" when calling patchTaskmanagementWorkitemUserWrapups';
		}
		// verify the required parameter 'userId' is set
		if (userId === undefined || userId === null || userId === '') {
			throw 'Missing the required parameter "userId" when calling patchTaskmanagementWorkitemUserWrapups';
		}
		// verify the required parameter 'body' is set
		if (body === undefined || body === null) {
			throw 'Missing the required parameter "body" when calling patchTaskmanagementWorkitemUserWrapups';
		}

		return this.apiClient.callApi(
			'/api/v2/taskmanagement/workitems/{workitemId}/users/{userId}/wrapups', 
			'PATCH', 
			{ 'workitemId': workitemId,'userId': userId },
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
	 * Add/Remove a wrapup code for the current user in a workitem.
	 * 
	 * @param {String} workitemId The ID of the Workitem.
	 * @param {Object} body Request body to add/remove the wrapup code for workitem
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	patchTaskmanagementWorkitemUsersMeWrapups(workitemId, body, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'workitemId' is set
		if (workitemId === undefined || workitemId === null || workitemId === '') {
			throw 'Missing the required parameter "workitemId" when calling patchTaskmanagementWorkitemUsersMeWrapups';
		}
		// verify the required parameter 'body' is set
		if (body === undefined || body === null) {
			throw 'Missing the required parameter "body" when calling patchTaskmanagementWorkitemUsersMeWrapups';
		}

		return this.apiClient.callApi(
			'/api/v2/taskmanagement/workitems/{workitemId}/users/me/wrapups', 
			'PATCH', 
			{ 'workitemId': workitemId },
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
	 * Update workitem bulk add job.
	 * 
	 * @param {String} bulkJobId Bulk job id
	 * @param {Object} body Bulk add job update request
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	patchTaskmanagementWorkitemsBulkAddJob(bulkJobId, body, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'bulkJobId' is set
		if (bulkJobId === undefined || bulkJobId === null || bulkJobId === '') {
			throw 'Missing the required parameter "bulkJobId" when calling patchTaskmanagementWorkitemsBulkAddJob';
		}
		// verify the required parameter 'body' is set
		if (body === undefined || body === null) {
			throw 'Missing the required parameter "body" when calling patchTaskmanagementWorkitemsBulkAddJob';
		}

		return this.apiClient.callApi(
			'/api/v2/taskmanagement/workitems/bulk/add/jobs/{bulkJobId}', 
			'PATCH', 
			{ 'bulkJobId': bulkJobId },
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
	 * Update workitem bulk terminate job.
	 * 
	 * @param {String} bulkJobId Bulk job id
	 * @param {Object} body Bulk job update request
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	patchTaskmanagementWorkitemsBulkTerminateJob(bulkJobId, body, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'bulkJobId' is set
		if (bulkJobId === undefined || bulkJobId === null || bulkJobId === '') {
			throw 'Missing the required parameter "bulkJobId" when calling patchTaskmanagementWorkitemsBulkTerminateJob';
		}
		// verify the required parameter 'body' is set
		if (body === undefined || body === null) {
			throw 'Missing the required parameter "body" when calling patchTaskmanagementWorkitemsBulkTerminateJob';
		}

		return this.apiClient.callApi(
			'/api/v2/taskmanagement/workitems/bulk/terminate/jobs/{bulkJobId}', 
			'PATCH', 
			{ 'bulkJobId': bulkJobId },
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
	 * Update the attributes of a worktype
	 * 
	 * @param {String} worktypeId Worktype id
	 * @param {Object} body Worktype
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	patchTaskmanagementWorktype(worktypeId, body, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'worktypeId' is set
		if (worktypeId === undefined || worktypeId === null || worktypeId === '') {
			throw 'Missing the required parameter "worktypeId" when calling patchTaskmanagementWorktype';
		}
		// verify the required parameter 'body' is set
		if (body === undefined || body === null) {
			throw 'Missing the required parameter "body" when calling patchTaskmanagementWorktype';
		}

		return this.apiClient.callApi(
			'/api/v2/taskmanagement/worktypes/{worktypeId}', 
			'PATCH', 
			{ 'worktypeId': worktypeId },
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
	 * Update the attributes of a date based rule
	 * 
	 * @param {String} worktypeId Worktype id
	 * @param {String} ruleId ruleId
	 * @param {Object} body Rule
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	patchTaskmanagementWorktypeFlowsDatebasedRule(worktypeId, ruleId, body, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'worktypeId' is set
		if (worktypeId === undefined || worktypeId === null || worktypeId === '') {
			throw 'Missing the required parameter "worktypeId" when calling patchTaskmanagementWorktypeFlowsDatebasedRule';
		}
		// verify the required parameter 'ruleId' is set
		if (ruleId === undefined || ruleId === null || ruleId === '') {
			throw 'Missing the required parameter "ruleId" when calling patchTaskmanagementWorktypeFlowsDatebasedRule';
		}
		// verify the required parameter 'body' is set
		if (body === undefined || body === null) {
			throw 'Missing the required parameter "body" when calling patchTaskmanagementWorktypeFlowsDatebasedRule';
		}

		return this.apiClient.callApi(
			'/api/v2/taskmanagement/worktypes/{worktypeId}/flows/datebased/rules/{ruleId}', 
			'PATCH', 
			{ 'worktypeId': worktypeId,'ruleId': ruleId },
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
	 * Update the attributes of a rule
	 * 
	 * @param {String} worktypeId Worktype id
	 * @param {String} ruleId ruleId
	 * @param {Object} body Rule
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	patchTaskmanagementWorktypeFlowsOnattributechangeRule(worktypeId, ruleId, body, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'worktypeId' is set
		if (worktypeId === undefined || worktypeId === null || worktypeId === '') {
			throw 'Missing the required parameter "worktypeId" when calling patchTaskmanagementWorktypeFlowsOnattributechangeRule';
		}
		// verify the required parameter 'ruleId' is set
		if (ruleId === undefined || ruleId === null || ruleId === '') {
			throw 'Missing the required parameter "ruleId" when calling patchTaskmanagementWorktypeFlowsOnattributechangeRule';
		}
		// verify the required parameter 'body' is set
		if (body === undefined || body === null) {
			throw 'Missing the required parameter "body" when calling patchTaskmanagementWorktypeFlowsOnattributechangeRule';
		}

		return this.apiClient.callApi(
			'/api/v2/taskmanagement/worktypes/{worktypeId}/flows/onattributechange/rules/{ruleId}', 
			'PATCH', 
			{ 'worktypeId': worktypeId,'ruleId': ruleId },
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
	 * Update the attributes of a rule
	 * 
	 * @param {String} worktypeId Worktype id
	 * @param {String} ruleId ruleId
	 * @param {Object} body Rule
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	patchTaskmanagementWorktypeFlowsOncreateRule(worktypeId, ruleId, body, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'worktypeId' is set
		if (worktypeId === undefined || worktypeId === null || worktypeId === '') {
			throw 'Missing the required parameter "worktypeId" when calling patchTaskmanagementWorktypeFlowsOncreateRule';
		}
		// verify the required parameter 'ruleId' is set
		if (ruleId === undefined || ruleId === null || ruleId === '') {
			throw 'Missing the required parameter "ruleId" when calling patchTaskmanagementWorktypeFlowsOncreateRule';
		}
		// verify the required parameter 'body' is set
		if (body === undefined || body === null) {
			throw 'Missing the required parameter "body" when calling patchTaskmanagementWorktypeFlowsOncreateRule';
		}

		return this.apiClient.callApi(
			'/api/v2/taskmanagement/worktypes/{worktypeId}/flows/oncreate/rules/{ruleId}', 
			'PATCH', 
			{ 'worktypeId': worktypeId,'ruleId': ruleId },
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
	 * Update the attributes of a status
	 * 
	 * @param {String} worktypeId Worktype id
	 * @param {String} statusId Status id
	 * @param {Object} body Status
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	patchTaskmanagementWorktypeStatus(worktypeId, statusId, body, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'worktypeId' is set
		if (worktypeId === undefined || worktypeId === null || worktypeId === '') {
			throw 'Missing the required parameter "worktypeId" when calling patchTaskmanagementWorktypeStatus';
		}
		// verify the required parameter 'statusId' is set
		if (statusId === undefined || statusId === null || statusId === '') {
			throw 'Missing the required parameter "statusId" when calling patchTaskmanagementWorktypeStatus';
		}
		// verify the required parameter 'body' is set
		if (body === undefined || body === null) {
			throw 'Missing the required parameter "body" when calling patchTaskmanagementWorktypeStatus';
		}

		return this.apiClient.callApi(
			'/api/v2/taskmanagement/worktypes/{worktypeId}/statuses/{statusId}', 
			'PATCH', 
			{ 'worktypeId': worktypeId,'statusId': statusId },
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
	 * Create a workbin
	 * 
	 * @param {Object} body Workbin
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	postTaskmanagementWorkbins(body, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'body' is set
		if (body === undefined || body === null) {
			throw 'Missing the required parameter "body" when calling postTaskmanagementWorkbins';
		}

		return this.apiClient.callApi(
			'/api/v2/taskmanagement/workbins', 
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
	 * Query for workbins
	 * 
	 * @param {Object} body QueryPostRequest
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	postTaskmanagementWorkbinsQuery(body, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'body' is set
		if (body === undefined || body === null) {
			throw 'Missing the required parameter "body" when calling postTaskmanagementWorkbinsQuery';
		}

		return this.apiClient.callApi(
			'/api/v2/taskmanagement/workbins/query', 
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
	 * Cancel the assignment process for a workitem that is currently queued for assignment through ACD.
	 * 
	 * @param {String} workitemId Workitem ID
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	postTaskmanagementWorkitemAcdCancel(workitemId, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'workitemId' is set
		if (workitemId === undefined || workitemId === null || workitemId === '') {
			throw 'Missing the required parameter "workitemId" when calling postTaskmanagementWorkitemAcdCancel';
		}

		return this.apiClient.callApi(
			'/api/v2/taskmanagement/workitems/{workitemId}/acd/cancel', 
			'POST', 
			{ 'workitemId': workitemId },
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
	 * Disconnect the assignee of the workitem
	 * 
	 * @param {String} workitemId Workitem ID
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	postTaskmanagementWorkitemDisconnect(workitemId, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'workitemId' is set
		if (workitemId === undefined || workitemId === null || workitemId === '') {
			throw 'Missing the required parameter "workitemId" when calling postTaskmanagementWorkitemDisconnect';
		}

		return this.apiClient.callApi(
			'/api/v2/taskmanagement/workitems/{workitemId}/disconnect', 
			'POST', 
			{ 'workitemId': workitemId },
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
	 * Terminate a workitem
	 * 
	 * @param {String} workitemId Workitem ID
	 * @param {Object} opts Optional parameters
	 * @param {Object} opts.body Terminated request
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	postTaskmanagementWorkitemTerminate(workitemId, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'workitemId' is set
		if (workitemId === undefined || workitemId === null || workitemId === '') {
			throw 'Missing the required parameter "workitemId" when calling postTaskmanagementWorkitemTerminate';
		}

		return this.apiClient.callApi(
			'/api/v2/taskmanagement/workitems/{workitemId}/terminate', 
			'POST', 
			{ 'workitemId': workitemId },
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
	 * Create a workitem
	 * 
	 * @param {Object} body Workitem
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	postTaskmanagementWorkitems(body, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'body' is set
		if (body === undefined || body === null) {
			throw 'Missing the required parameter "body" when calling postTaskmanagementWorkitems';
		}

		return this.apiClient.callApi(
			'/api/v2/taskmanagement/workitems', 
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
	 * Create a workitem bulk add job.
	 * 
	 * @param {Object} body Bulk job definition.
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	postTaskmanagementWorkitemsBulkAddJobs(body, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'body' is set
		if (body === undefined || body === null) {
			throw 'Missing the required parameter "body" when calling postTaskmanagementWorkitemsBulkAddJobs';
		}

		return this.apiClient.callApi(
			'/api/v2/taskmanagement/workitems/bulk/add/jobs', 
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
	 * Create a workitem bulk terminate job.
	 * 
	 * @param {Object} body Bulk job definition.
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	postTaskmanagementWorkitemsBulkTerminateJobs(body, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'body' is set
		if (body === undefined || body === null) {
			throw 'Missing the required parameter "body" when calling postTaskmanagementWorkitemsBulkTerminateJobs';
		}

		return this.apiClient.callApi(
			'/api/v2/taskmanagement/workitems/bulk/terminate/jobs', 
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
	 * Query for workitems
	 * This query requires at least one EQ filter on the workbinId, assigneeId, queueId or typeId attributes. A maximum of three filters are allowed.
	 * @param {Object} body WorkitemQueryPostRequest
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	postTaskmanagementWorkitemsQuery(body, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'body' is set
		if (body === undefined || body === null) {
			throw 'Missing the required parameter "body" when calling postTaskmanagementWorkitemsQuery';
		}

		return this.apiClient.callApi(
			'/api/v2/taskmanagement/workitems/query', 
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
	 * Create a workitem query job
	 * 
	 * @param {Object} body WorkitemQueryJobCreate
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	postTaskmanagementWorkitemsQueryJobs(body, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'body' is set
		if (body === undefined || body === null) {
			throw 'Missing the required parameter "body" when calling postTaskmanagementWorkitemsQueryJobs';
		}

		return this.apiClient.callApi(
			'/api/v2/taskmanagement/workitems/query/jobs', 
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
	postTaskmanagementWorkitemsSchemas(body, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'body' is set
		if (body === undefined || body === null) {
			throw 'Missing the required parameter "body" when calling postTaskmanagementWorkitemsSchemas';
		}

		return this.apiClient.callApi(
			'/api/v2/taskmanagement/workitems/schemas', 
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
	 * Add a date based rule to a worktype
	 * 
	 * @param {String} worktypeId Worktype id
	 * @param {Object} body Rule
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	postTaskmanagementWorktypeFlowsDatebasedRules(worktypeId, body, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'worktypeId' is set
		if (worktypeId === undefined || worktypeId === null || worktypeId === '') {
			throw 'Missing the required parameter "worktypeId" when calling postTaskmanagementWorktypeFlowsDatebasedRules';
		}
		// verify the required parameter 'body' is set
		if (body === undefined || body === null) {
			throw 'Missing the required parameter "body" when calling postTaskmanagementWorktypeFlowsDatebasedRules';
		}

		return this.apiClient.callApi(
			'/api/v2/taskmanagement/worktypes/{worktypeId}/flows/datebased/rules', 
			'POST', 
			{ 'worktypeId': worktypeId },
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
	 * Add an attribute-change rule to a worktype
	 * 
	 * @param {String} worktypeId Worktype id
	 * @param {Object} body Rule
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	postTaskmanagementWorktypeFlowsOnattributechangeRules(worktypeId, body, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'worktypeId' is set
		if (worktypeId === undefined || worktypeId === null || worktypeId === '') {
			throw 'Missing the required parameter "worktypeId" when calling postTaskmanagementWorktypeFlowsOnattributechangeRules';
		}
		// verify the required parameter 'body' is set
		if (body === undefined || body === null) {
			throw 'Missing the required parameter "body" when calling postTaskmanagementWorktypeFlowsOnattributechangeRules';
		}

		return this.apiClient.callApi(
			'/api/v2/taskmanagement/worktypes/{worktypeId}/flows/onattributechange/rules', 
			'POST', 
			{ 'worktypeId': worktypeId },
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
	 * Add an on-create rule to a worktype
	 * 
	 * @param {String} worktypeId Worktype id
	 * @param {Object} body Rule
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	postTaskmanagementWorktypeFlowsOncreateRules(worktypeId, body, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'worktypeId' is set
		if (worktypeId === undefined || worktypeId === null || worktypeId === '') {
			throw 'Missing the required parameter "worktypeId" when calling postTaskmanagementWorktypeFlowsOncreateRules';
		}
		// verify the required parameter 'body' is set
		if (body === undefined || body === null) {
			throw 'Missing the required parameter "body" when calling postTaskmanagementWorktypeFlowsOncreateRules';
		}

		return this.apiClient.callApi(
			'/api/v2/taskmanagement/worktypes/{worktypeId}/flows/oncreate/rules', 
			'POST', 
			{ 'worktypeId': worktypeId },
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
	 * Add a status to a worktype
	 * 
	 * @param {String} worktypeId Worktype id
	 * @param {Object} body Status
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	postTaskmanagementWorktypeStatuses(worktypeId, body, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'worktypeId' is set
		if (worktypeId === undefined || worktypeId === null || worktypeId === '') {
			throw 'Missing the required parameter "worktypeId" when calling postTaskmanagementWorktypeStatuses';
		}
		// verify the required parameter 'body' is set
		if (body === undefined || body === null) {
			throw 'Missing the required parameter "body" when calling postTaskmanagementWorktypeStatuses';
		}

		return this.apiClient.callApi(
			'/api/v2/taskmanagement/worktypes/{worktypeId}/statuses', 
			'POST', 
			{ 'worktypeId': worktypeId },
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
	 * Create a worktype
	 * 
	 * @param {Object} body Worktype
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	postTaskmanagementWorktypes(body, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'body' is set
		if (body === undefined || body === null) {
			throw 'Missing the required parameter "body" when calling postTaskmanagementWorktypes';
		}

		return this.apiClient.callApi(
			'/api/v2/taskmanagement/worktypes', 
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
	 * Query for worktypes
	 * Optional request field expands may include schema to populate the name on each worktypes schema reference.
	 * @param {Object} body QueryPostRequest
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	postTaskmanagementWorktypesQuery(body, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'body' is set
		if (body === undefined || body === null) {
			throw 'Missing the required parameter "body" when calling postTaskmanagementWorktypesQuery';
		}

		return this.apiClient.callApi(
			'/api/v2/taskmanagement/worktypes/query', 
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
	 * Update a schema
	 * 
	 * @param {String} schemaId Schema ID
	 * @param {Object} body Data Schema
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	putTaskmanagementWorkitemsSchema(schemaId, body, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'schemaId' is set
		if (schemaId === undefined || schemaId === null || schemaId === '') {
			throw 'Missing the required parameter "schemaId" when calling putTaskmanagementWorkitemsSchema';
		}
		// verify the required parameter 'body' is set
		if (body === undefined || body === null) {
			throw 'Missing the required parameter "body" when calling putTaskmanagementWorkitemsSchema';
		}

		return this.apiClient.callApi(
			'/api/v2/taskmanagement/workitems/schemas/{schemaId}', 
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


export default TaskManagementApi;
