import ApiClient from '../ApiClient.js';


class TaskManagementApi {
	/**
	 * TaskManagement service.
	 * @module purecloud-platform-client-v2/api/TaskManagementApi
	 * @version 225.0.0
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
	 */
	deleteTaskmanagementWorkbin(workbinId) { 
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
			['application/json']
		);
	}

	/**
	 * Delete a workitem
	 * 
	 * @param {String} workitemId Workitem ID
	 */
	deleteTaskmanagementWorkitem(workitemId) { 
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
			['application/json']
		);
	}

	/**
	 * Delete a bulk add job
	 * 
	 * @param {String} bulkJobId Bulk job id
	 */
	deleteTaskmanagementWorkitemsBulkAddJob(bulkJobId) { 
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
			['application/json']
		);
	}

	/**
	 * Delete a Bulk job
	 * 
	 * @param {String} bulkJobId Bulk job id
	 */
	deleteTaskmanagementWorkitemsBulkTerminateJob(bulkJobId) { 
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
			['application/json']
		);
	}

	/**
	 * Delete a schema
	 * 
	 * @param {String} schemaId Schema ID
	 */
	deleteTaskmanagementWorkitemsSchema(schemaId) { 
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
			['application/json']
		);
	}

	/**
	 * Delete a worktype
	 * 
	 * @param {String} worktypeId Worktype id
	 */
	deleteTaskmanagementWorktype(worktypeId) { 
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
			['application/json']
		);
	}

	/**
	 * Delete a date based rule
	 * 
	 * @param {String} worktypeId Worktype id
	 * @param {String} ruleId ruleId
	 */
	deleteTaskmanagementWorktypeFlowsDatebasedRule(worktypeId, ruleId) { 
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
			['application/json']
		);
	}

	/**
	 * Delete a rule
	 * 
	 * @param {String} worktypeId Worktype id
	 * @param {String} ruleId ruleId
	 */
	deleteTaskmanagementWorktypeFlowsOnattributechangeRule(worktypeId, ruleId) { 
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
			['application/json']
		);
	}

	/**
	 * Delete a rule
	 * 
	 * @param {String} worktypeId Worktype id
	 * @param {String} ruleId ruleId
	 */
	deleteTaskmanagementWorktypeFlowsOncreateRule(worktypeId, ruleId) { 
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
			['application/json']
		);
	}

	/**
	 * Delete a status
	 * 
	 * @param {String} worktypeId Worktype id
	 * @param {String} statusId Status id
	 */
	deleteTaskmanagementWorktypeStatus(worktypeId, statusId) { 
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
			['application/json']
		);
	}

	/**
	 * Get a workbin
	 * 
	 * @param {String} workbinId Workbin ID
	 */
	getTaskmanagementWorkbin(workbinId) { 
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
			['application/json']
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
			['application/json']
		);
	}

	/**
	 * Get a version of a workbin
	 * 
	 * @param {String} workbinId Workbin ID
	 * @param {Number} entityVersion Workbin version
	 */
	getTaskmanagementWorkbinVersion(workbinId, entityVersion) { 
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
			['application/json']
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
			['application/json']
		);
	}

	/**
	 * Get a workitem
	 * 
	 * @param {String} workitemId Workitem ID
	 * @param {Object} opts Optional parameters
	 * @param {Object} opts.expands Which fields to expand. Comma separated if more than one.
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
			{ 'expands': opts['expands'] },
			{  },
			{  },
			null, 
			['PureCloud OAuth'], 
			['application/json'],
			['application/json']
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
			['application/json']
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
			['application/json']
		);
	}

	/**
	 * Get a version of a workitem
	 * 
	 * @param {String} workitemId Workitem ID
	 * @param {Number} entityVersion Workitem version
	 */
	getTaskmanagementWorkitemVersion(workitemId, entityVersion) { 
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
			['application/json']
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
			['application/json']
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
			['application/json']
		);
	}

	/**
	 * Get the bulk add job associated with the job id.
	 * 
	 * @param {String} bulkJobId Bulk job id
	 */
	getTaskmanagementWorkitemsBulkAddJob(bulkJobId) { 
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
			['application/json']
		);
	}

	/**
	 * Get bulk add job results.
	 * 
	 * @param {String} bulkJobId Bulk job id
	 */
	getTaskmanagementWorkitemsBulkAddJobResults(bulkJobId) { 
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
			['application/json']
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
			['application/json']
		);
	}

	/**
	 * Get the bulk job associated with the job id.
	 * 
	 * @param {String} bulkJobId Bulk job id
	 */
	getTaskmanagementWorkitemsBulkTerminateJob(bulkJobId) { 
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
			['application/json']
		);
	}

	/**
	 * Get bulk terminate job results.
	 * 
	 * @param {String} bulkJobId Bulk job id
	 */
	getTaskmanagementWorkitemsBulkTerminateJobResults(bulkJobId) { 
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
			['application/json']
		);
	}

	/**
	 * Get the workitem query job associated with the job id.
	 * 
	 * @param {String} jobId jobId
	 */
	getTaskmanagementWorkitemsQueryJob(jobId) { 
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
			['application/json']
		);
	}

	/**
	 * Get results from for workitem query job 
	 * 
	 * @param {String} jobId jobId
	 */
	getTaskmanagementWorkitemsQueryJobResults(jobId) { 
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
			['application/json']
		);
	}

	/**
	 * Get a schema
	 * 
	 * @param {String} schemaId Schema ID
	 */
	getTaskmanagementWorkitemsSchema(schemaId) { 
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
			['application/json']
		);
	}

	/**
	 * Get a specific version of a schema
	 * 
	 * @param {String} schemaId Schema ID
	 * @param {String} versionId Schema version
	 */
	getTaskmanagementWorkitemsSchemaVersion(schemaId, versionId) { 
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
			['application/json']
		);
	}

	/**
	 * Get all versions of a schema
	 * 
	 * @param {String} schemaId Schema ID
	 */
	getTaskmanagementWorkitemsSchemaVersions(schemaId) { 
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
			['application/json']
		);
	}

	/**
	 * Get a list of schemas.
	 * 
	 */
	getTaskmanagementWorkitemsSchemas() { 

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
			['application/json']
		);
	}

	/**
	 * Get a specific named core type.
	 * 
	 * @param {String} coreTypeName Name of the core type
	 */
	getTaskmanagementWorkitemsSchemasCoretype(coreTypeName) { 
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
			['application/json']
		);
	}

	/**
	 * Get the core types from which all schemas are built.
	 * 
	 */
	getTaskmanagementWorkitemsSchemasCoretypes() { 

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
			['application/json']
		);
	}

	/**
	 * Get quantitative limits on schemas
	 * 
	 */
	getTaskmanagementWorkitemsSchemasLimits() { 

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
			['application/json']
		);
	}

	/**
	 * Get a worktype
	 * 
	 * @param {String} worktypeId Worktype id
	 * @param {Object} opts Optional parameters
	 * @param {Array.<String>} opts.expands Which fields, if any, to expand.
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
			['application/json']
		);
	}

	/**
	 * Get a date based rule
	 * 
	 * @param {String} worktypeId Worktype id
	 * @param {String} ruleId ruleId
	 */
	getTaskmanagementWorktypeFlowsDatebasedRule(worktypeId, ruleId) { 
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
			['application/json']
		);
	}

	/**
	 * Get all date based rules for a worktype
	 * 
	 * @param {String} worktypeId Worktype id
	 * @param {Object} opts Optional parameters
	 * @param {String} opts.after The cursor that points to the end of the set of entities that has been returned.
	 * @param {Number} opts.pageSize Limit the number of entities to return. It is not guaranteed that the requested number of entities will be filled in a single request. If an `after` key is returned as part of the response it is possible that more entities that match the filter criteria exist. Maximum of 200. (default to 25)
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
			['application/json']
		);
	}

	/**
	 * Get an attribute change rule
	 * 
	 * @param {String} worktypeId Worktype id
	 * @param {String} ruleId ruleId
	 */
	getTaskmanagementWorktypeFlowsOnattributechangeRule(worktypeId, ruleId) { 
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
			['application/json']
		);
	}

	/**
	 * Get all attribute-change rules for a worktype
	 * 
	 * @param {String} worktypeId Worktype id
	 * @param {Object} opts Optional parameters
	 * @param {String} opts.after The cursor that points to the end of the set of entities that has been returned.
	 * @param {Number} opts.pageSize Limit the number of entities to return. It is not guaranteed that the requested number of entities will be filled in a single request. If an `after` key is returned as part of the response it is possible that more entities that match the filter criteria exist. Maximum of 200. (default to 25)
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
			['application/json']
		);
	}

	/**
	 * Get an on-create rule
	 * 
	 * @param {String} worktypeId Worktype id
	 * @param {String} ruleId ruleId
	 */
	getTaskmanagementWorktypeFlowsOncreateRule(worktypeId, ruleId) { 
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
			['application/json']
		);
	}

	/**
	 * Get all on-create rules for a worktype
	 * 
	 * @param {String} worktypeId Worktype id
	 * @param {Object} opts Optional parameters
	 * @param {String} opts.after The cursor that points to the end of the set of entities that has been returned.
	 * @param {Number} opts.pageSize Limit the number of entities to return. It is not guaranteed that the requested number of entities will be filled in a single request. If an `after` key is returned as part of the response it is possible that more entities that match the filter criteria exist. Maximum of 200. (default to 25)
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
			['application/json']
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
			['application/json']
		);
	}

	/**
	 * Get a status
	 * 
	 * @param {String} worktypeId Worktype id
	 * @param {String} statusId Status id
	 */
	getTaskmanagementWorktypeStatus(worktypeId, statusId) { 
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
			['application/json']
		);
	}

	/**
	 * Get list of statuses for this worktype.
	 * 
	 * @param {String} worktypeId Worktype id
	 */
	getTaskmanagementWorktypeStatuses(worktypeId) { 
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
			['application/json']
		);
	}

	/**
	 * Get a version of a worktype
	 * 
	 * @param {String} worktypeId Worktype id
	 * @param {Number} entityVersion Worktype version
	 */
	getTaskmanagementWorktypeVersion(worktypeId, entityVersion) { 
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
			['application/json']
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
			['application/json']
		);
	}

	/**
	 * Update the attributes of a workbin
	 * 
	 * @param {String} workbinId Workbin ID
	 * @param {Object} body Json with attributes and their new values: {description:new description, name:new name}.
	 */
	patchTaskmanagementWorkbin(workbinId, body) { 
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
			['application/json']
		);
	}

	/**
	 * Update the attributes of a workitem
	 * 
	 * @param {String} workitemId Workitem ID
	 * @param {Object} body Workitem
	 */
	patchTaskmanagementWorkitem(workitemId, body) { 
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
			['application/json']
		);
	}

	/**
	 * Attempts to manually assign a specified workitem to a specified user.  Ignores bullseye ring, PAR score, skills, and languages.
	 * 
	 * @param {String} workitemId Workitem ID
	 * @param {Object} body Targeted user
	 */
	patchTaskmanagementWorkitemAssignment(workitemId, body) { 
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
			['application/json']
		);
	}

	/**
	 * Add/Remove a wrapup code for a given user in a workitem.
	 * 
	 * @param {String} workitemId The ID of the Workitem.
	 * @param {String} userId The ID of the user
	 * @param {Object} body Request body to add/remove a wrapup code for a workitem
	 */
	patchTaskmanagementWorkitemUserWrapups(workitemId, userId, body) { 
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
			['application/json']
		);
	}

	/**
	 * Add/Remove a wrapup code for the current user in a workitem.
	 * 
	 * @param {String} workitemId The ID of the Workitem.
	 * @param {Object} body Request body to add/remove the wrapup code for workitem
	 */
	patchTaskmanagementWorkitemUsersMeWrapups(workitemId, body) { 
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
			['application/json']
		);
	}

	/**
	 * Update workitem bulk add job.
	 * 
	 * @param {String} bulkJobId Bulk job id
	 * @param {Object} body Bulk add job update request
	 */
	patchTaskmanagementWorkitemsBulkAddJob(bulkJobId, body) { 
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
			['application/json']
		);
	}

	/**
	 * Update workitem bulk terminate job.
	 * 
	 * @param {String} bulkJobId Bulk job id
	 * @param {Object} body Bulk job update request
	 */
	patchTaskmanagementWorkitemsBulkTerminateJob(bulkJobId, body) { 
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
			['application/json']
		);
	}

	/**
	 * Update the attributes of a worktype
	 * 
	 * @param {String} worktypeId Worktype id
	 * @param {Object} body Worktype
	 */
	patchTaskmanagementWorktype(worktypeId, body) { 
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
			['application/json']
		);
	}

	/**
	 * Update the attributes of a date based rule
	 * 
	 * @param {String} worktypeId Worktype id
	 * @param {String} ruleId ruleId
	 * @param {Object} body Rule
	 */
	patchTaskmanagementWorktypeFlowsDatebasedRule(worktypeId, ruleId, body) { 
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
			['application/json']
		);
	}

	/**
	 * Update the attributes of a rule
	 * 
	 * @param {String} worktypeId Worktype id
	 * @param {String} ruleId ruleId
	 * @param {Object} body Rule
	 */
	patchTaskmanagementWorktypeFlowsOnattributechangeRule(worktypeId, ruleId, body) { 
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
			['application/json']
		);
	}

	/**
	 * Update the attributes of a rule
	 * 
	 * @param {String} worktypeId Worktype id
	 * @param {String} ruleId ruleId
	 * @param {Object} body Rule
	 */
	patchTaskmanagementWorktypeFlowsOncreateRule(worktypeId, ruleId, body) { 
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
			['application/json']
		);
	}

	/**
	 * Update the attributes of a status
	 * 
	 * @param {String} worktypeId Worktype id
	 * @param {String} statusId Status id
	 * @param {Object} body Status
	 */
	patchTaskmanagementWorktypeStatus(worktypeId, statusId, body) { 
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
			['application/json']
		);
	}

	/**
	 * Create a workbin
	 * 
	 * @param {Object} body Workbin
	 */
	postTaskmanagementWorkbins(body) { 
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
			['application/json']
		);
	}

	/**
	 * Query for workbins
	 * 
	 * @param {Object} body QueryPostRequest
	 */
	postTaskmanagementWorkbinsQuery(body) { 
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
			['application/json']
		);
	}

	/**
	 * Cancel the assignment process for a workitem that is currently queued for assignment through ACD.
	 * 
	 * @param {String} workitemId Workitem ID
	 */
	postTaskmanagementWorkitemAcdCancel(workitemId) { 
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
			['application/json']
		);
	}

	/**
	 * Disconnect the assignee of the workitem
	 * 
	 * @param {String} workitemId Workitem ID
	 */
	postTaskmanagementWorkitemDisconnect(workitemId) { 
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
			['application/json']
		);
	}

	/**
	 * Terminate a workitem
	 * 
	 * @param {String} workitemId Workitem ID
	 * @param {Object} opts Optional parameters
	 * @param {Object} opts.body Terminated request
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
			['application/json']
		);
	}

	/**
	 * Create a workitem
	 * 
	 * @param {Object} body Workitem
	 */
	postTaskmanagementWorkitems(body) { 
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
			['application/json']
		);
	}

	/**
	 * Create a workitem bulk add job.
	 * 
	 * @param {Object} body Bulk job definition.
	 */
	postTaskmanagementWorkitemsBulkAddJobs(body) { 
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
			['application/json']
		);
	}

	/**
	 * Create a workitem bulk terminate job.
	 * 
	 * @param {Object} body Bulk job definition.
	 */
	postTaskmanagementWorkitemsBulkTerminateJobs(body) { 
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
			['application/json']
		);
	}

	/**
	 * Query for workitems
	 * This query requires at least one EQ filter on the workbinId, assigneeId or typeId attributes.
	 * @param {Object} body WorkitemQueryPostRequest
	 * postTaskmanagementWorkitemsQuery is a preview method and is subject to both breaking and non-breaking changes at any time without notice
	 */
	postTaskmanagementWorkitemsQuery(body) { 
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
			['application/json']
		);
	}

	/**
	 * Create a workitem query job
	 * 
	 * @param {Object} body WorkitemQueryJobCreate
	 */
	postTaskmanagementWorkitemsQueryJobs(body) { 
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
			['application/json']
		);
	}

	/**
	 * Create a schema
	 * 
	 * @param {Object} body Schema
	 */
	postTaskmanagementWorkitemsSchemas(body) { 
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
			['application/json']
		);
	}

	/**
	 * Add a date based rule to a worktype
	 * 
	 * @param {String} worktypeId Worktype id
	 * @param {Object} body Rule
	 */
	postTaskmanagementWorktypeFlowsDatebasedRules(worktypeId, body) { 
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
			['application/json']
		);
	}

	/**
	 * Add an attribute-change rule to a worktype
	 * 
	 * @param {String} worktypeId Worktype id
	 * @param {Object} body Rule
	 */
	postTaskmanagementWorktypeFlowsOnattributechangeRules(worktypeId, body) { 
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
			['application/json']
		);
	}

	/**
	 * Add an on-create rule to a worktype
	 * 
	 * @param {String} worktypeId Worktype id
	 * @param {Object} body Rule
	 */
	postTaskmanagementWorktypeFlowsOncreateRules(worktypeId, body) { 
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
			['application/json']
		);
	}

	/**
	 * Add a status to a worktype
	 * 
	 * @param {String} worktypeId Worktype id
	 * @param {Object} body Status
	 */
	postTaskmanagementWorktypeStatuses(worktypeId, body) { 
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
			['application/json']
		);
	}

	/**
	 * Create a worktype
	 * 
	 * @param {Object} body Worktype
	 */
	postTaskmanagementWorktypes(body) { 
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
			['application/json']
		);
	}

	/**
	 * Query for worktypes
	 * 
	 * @param {Object} body QueryPostRequest
	 */
	postTaskmanagementWorktypesQuery(body) { 
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
			['application/json']
		);
	}

	/**
	 * Update a schema
	 * 
	 * @param {String} schemaId Schema ID
	 * @param {Object} body Data Schema
	 */
	putTaskmanagementWorkitemsSchema(schemaId, body) { 
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
			['application/json']
		);
	}

}


export default TaskManagementApi;
