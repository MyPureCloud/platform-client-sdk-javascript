import ApiClient from '../ApiClient.js';


class TaskManagementApi {
	/**
	 * TaskManagement service.
	 * @module purecloud-platform-client-v2/api/TaskManagementApi
	 * @version 174.0.0
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
	 * deleteTaskmanagementWorkbin is a preview method and is subject to both breaking and non-breaking changes at any time without notice
	 */
	deleteTaskmanagementWorkbin(workbinId) { 
		// verify the required parameter 'workbinId' is set
		if (workbinId === undefined || workbinId === null) {
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
	 * deleteTaskmanagementWorkitem is a preview method and is subject to both breaking and non-breaking changes at any time without notice
	 */
	deleteTaskmanagementWorkitem(workitemId) { 
		// verify the required parameter 'workitemId' is set
		if (workitemId === undefined || workitemId === null) {
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
	 * Delete a schema
	 * 
	 * @param {String} schemaId Schema ID
	 * deleteTaskmanagementWorkitemsSchema is a preview method and is subject to both breaking and non-breaking changes at any time without notice
	 */
	deleteTaskmanagementWorkitemsSchema(schemaId) { 
		// verify the required parameter 'schemaId' is set
		if (schemaId === undefined || schemaId === null) {
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
	 * deleteTaskmanagementWorktype is a preview method and is subject to both breaking and non-breaking changes at any time without notice
	 */
	deleteTaskmanagementWorktype(worktypeId) { 
		// verify the required parameter 'worktypeId' is set
		if (worktypeId === undefined || worktypeId === null) {
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
	 * Delete a status
	 * 
	 * @param {String} worktypeId Worktype id
	 * @param {String} statusId Status id
	 * deleteTaskmanagementWorktypeStatus is a preview method and is subject to both breaking and non-breaking changes at any time without notice
	 */
	deleteTaskmanagementWorktypeStatus(worktypeId, statusId) { 
		// verify the required parameter 'worktypeId' is set
		if (worktypeId === undefined || worktypeId === null) {
			throw 'Missing the required parameter "worktypeId" when calling deleteTaskmanagementWorktypeStatus';
		}
		// verify the required parameter 'statusId' is set
		if (statusId === undefined || statusId === null) {
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
	 * getTaskmanagementWorkbin is a preview method and is subject to both breaking and non-breaking changes at any time without notice
	 */
	getTaskmanagementWorkbin(workbinId) { 
		// verify the required parameter 'workbinId' is set
		if (workbinId === undefined || workbinId === null) {
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
	 * getTaskmanagementWorkbinHistory is a preview method and is subject to both breaking and non-breaking changes at any time without notice
	 */
	getTaskmanagementWorkbinHistory(workbinId, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'workbinId' is set
		if (workbinId === undefined || workbinId === null) {
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
	 * getTaskmanagementWorkbinVersion is a preview method and is subject to both breaking and non-breaking changes at any time without notice
	 */
	getTaskmanagementWorkbinVersion(workbinId, entityVersion) { 
		// verify the required parameter 'workbinId' is set
		if (workbinId === undefined || workbinId === null) {
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
	 * getTaskmanagementWorkbinVersions is a preview method and is subject to both breaking and non-breaking changes at any time without notice
	 */
	getTaskmanagementWorkbinVersions(workbinId, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'workbinId' is set
		if (workbinId === undefined || workbinId === null) {
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
	 * getTaskmanagementWorkitem is a preview method and is subject to both breaking and non-breaking changes at any time without notice
	 */
	getTaskmanagementWorkitem(workitemId, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'workitemId' is set
		if (workitemId === undefined || workitemId === null) {
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
	 * getTaskmanagementWorkitemHistory is a preview method and is subject to both breaking and non-breaking changes at any time without notice
	 */
	getTaskmanagementWorkitemHistory(workitemId, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'workitemId' is set
		if (workitemId === undefined || workitemId === null) {
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
	 * getTaskmanagementWorkitemUserWrapups is a preview method and is subject to both breaking and non-breaking changes at any time without notice
	 */
	getTaskmanagementWorkitemUserWrapups(workitemId, userId, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'workitemId' is set
		if (workitemId === undefined || workitemId === null) {
			throw 'Missing the required parameter "workitemId" when calling getTaskmanagementWorkitemUserWrapups';
		}
		// verify the required parameter 'userId' is set
		if (userId === undefined || userId === null) {
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
	 * getTaskmanagementWorkitemVersion is a preview method and is subject to both breaking and non-breaking changes at any time without notice
	 */
	getTaskmanagementWorkitemVersion(workitemId, entityVersion) { 
		// verify the required parameter 'workitemId' is set
		if (workitemId === undefined || workitemId === null) {
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
	 * getTaskmanagementWorkitemVersions is a preview method and is subject to both breaking and non-breaking changes at any time without notice
	 */
	getTaskmanagementWorkitemVersions(workitemId, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'workitemId' is set
		if (workitemId === undefined || workitemId === null) {
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
	 * getTaskmanagementWorkitemWrapups is a preview method and is subject to both breaking and non-breaking changes at any time without notice
	 */
	getTaskmanagementWorkitemWrapups(workitemId, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'workitemId' is set
		if (workitemId === undefined || workitemId === null) {
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
	 * Get a schema
	 * 
	 * @param {String} schemaId Schema ID
	 * getTaskmanagementWorkitemsSchema is a preview method and is subject to both breaking and non-breaking changes at any time without notice
	 */
	getTaskmanagementWorkitemsSchema(schemaId) { 
		// verify the required parameter 'schemaId' is set
		if (schemaId === undefined || schemaId === null) {
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
	 * getTaskmanagementWorkitemsSchemaVersion is a preview method and is subject to both breaking and non-breaking changes at any time without notice
	 */
	getTaskmanagementWorkitemsSchemaVersion(schemaId, versionId) { 
		// verify the required parameter 'schemaId' is set
		if (schemaId === undefined || schemaId === null) {
			throw 'Missing the required parameter "schemaId" when calling getTaskmanagementWorkitemsSchemaVersion';
		}
		// verify the required parameter 'versionId' is set
		if (versionId === undefined || versionId === null) {
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
	 * getTaskmanagementWorkitemsSchemaVersions is a preview method and is subject to both breaking and non-breaking changes at any time without notice
	 */
	getTaskmanagementWorkitemsSchemaVersions(schemaId) { 
		// verify the required parameter 'schemaId' is set
		if (schemaId === undefined || schemaId === null) {
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
	 * getTaskmanagementWorkitemsSchemas is a preview method and is subject to both breaking and non-breaking changes at any time without notice
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
	 * Get a worktype
	 * 
	 * @param {String} worktypeId Worktype id
	 * @param {Object} opts Optional parameters
	 * @param {Array.<String>} opts.expands Which fields, if any, to expand.
	 * getTaskmanagementWorktype is a preview method and is subject to both breaking and non-breaking changes at any time without notice
	 */
	getTaskmanagementWorktype(worktypeId, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'worktypeId' is set
		if (worktypeId === undefined || worktypeId === null) {
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
	 * Get a listing of a worktype's attribute change history
	 * 
	 * @param {String} worktypeId Worktype id
	 * @param {Object} opts Optional parameters
	 * @param {String} opts.after The cursor that points to the end of the set of entities that has been returned.
	 * @param {Number} opts.pageSize Limit the number of entities to return. It is not guaranteed that the requested number of entities will be filled in a single request. If an `after` key is returned as part of the response it is possible that more entities that match the filter criteria exist. Maximum of 200. (default to 25)
	 * @param {Object} opts.sortOrder Ascending or descending sort order (default to descending)
	 * getTaskmanagementWorktypeHistory is a preview method and is subject to both breaking and non-breaking changes at any time without notice
	 */
	getTaskmanagementWorktypeHistory(worktypeId, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'worktypeId' is set
		if (worktypeId === undefined || worktypeId === null) {
			throw 'Missing the required parameter "worktypeId" when calling getTaskmanagementWorktypeHistory';
		}

		return this.apiClient.callApi(
			'/api/v2/taskmanagement/worktypes/{worktypeId}/history', 
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
	 * Get a status
	 * 
	 * @param {String} worktypeId Worktype id
	 * @param {String} statusId Status id
	 * getTaskmanagementWorktypeStatus is a preview method and is subject to both breaking and non-breaking changes at any time without notice
	 */
	getTaskmanagementWorktypeStatus(worktypeId, statusId) { 
		// verify the required parameter 'worktypeId' is set
		if (worktypeId === undefined || worktypeId === null) {
			throw 'Missing the required parameter "worktypeId" when calling getTaskmanagementWorktypeStatus';
		}
		// verify the required parameter 'statusId' is set
		if (statusId === undefined || statusId === null) {
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
	 * Get a version of a worktype
	 * 
	 * @param {String} worktypeId Worktype id
	 * @param {Number} entityVersion Worktype version
	 * getTaskmanagementWorktypeVersion is a preview method and is subject to both breaking and non-breaking changes at any time without notice
	 */
	getTaskmanagementWorktypeVersion(worktypeId, entityVersion) { 
		// verify the required parameter 'worktypeId' is set
		if (worktypeId === undefined || worktypeId === null) {
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
	 * getTaskmanagementWorktypeVersions is a preview method and is subject to both breaking and non-breaking changes at any time without notice
	 */
	getTaskmanagementWorktypeVersions(worktypeId, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'worktypeId' is set
		if (worktypeId === undefined || worktypeId === null) {
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
	 * patchTaskmanagementWorkbin is a preview method and is subject to both breaking and non-breaking changes at any time without notice
	 */
	patchTaskmanagementWorkbin(workbinId, body) { 
		// verify the required parameter 'workbinId' is set
		if (workbinId === undefined || workbinId === null) {
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
	 * patchTaskmanagementWorkitem is a preview method and is subject to both breaking and non-breaking changes at any time without notice
	 */
	patchTaskmanagementWorkitem(workitemId, body) { 
		// verify the required parameter 'workitemId' is set
		if (workitemId === undefined || workitemId === null) {
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
	 * patchTaskmanagementWorkitemAssignment is a preview method and is subject to both breaking and non-breaking changes at any time without notice
	 */
	patchTaskmanagementWorkitemAssignment(workitemId, body) { 
		// verify the required parameter 'workitemId' is set
		if (workitemId === undefined || workitemId === null) {
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
	 * patchTaskmanagementWorkitemUserWrapups is a preview method and is subject to both breaking and non-breaking changes at any time without notice
	 */
	patchTaskmanagementWorkitemUserWrapups(workitemId, userId, body) { 
		// verify the required parameter 'workitemId' is set
		if (workitemId === undefined || workitemId === null) {
			throw 'Missing the required parameter "workitemId" when calling patchTaskmanagementWorkitemUserWrapups';
		}
		// verify the required parameter 'userId' is set
		if (userId === undefined || userId === null) {
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
	 * patchTaskmanagementWorkitemUsersMeWrapups is a preview method and is subject to both breaking and non-breaking changes at any time without notice
	 */
	patchTaskmanagementWorkitemUsersMeWrapups(workitemId, body) { 
		// verify the required parameter 'workitemId' is set
		if (workitemId === undefined || workitemId === null) {
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
	 * Update the attributes of a worktype
	 * 
	 * @param {String} worktypeId Worktype id
	 * @param {Object} opts Optional parameters
	 * @param {Object} opts.body body
	 * patchTaskmanagementWorktype is a preview method and is subject to both breaking and non-breaking changes at any time without notice
	 */
	patchTaskmanagementWorktype(worktypeId, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'worktypeId' is set
		if (worktypeId === undefined || worktypeId === null) {
			throw 'Missing the required parameter "worktypeId" when calling patchTaskmanagementWorktype';
		}

		return this.apiClient.callApi(
			'/api/v2/taskmanagement/worktypes/{worktypeId}', 
			'PATCH', 
			{ 'worktypeId': worktypeId },
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
	 * Update the attributes of a status
	 * 
	 * @param {String} worktypeId Worktype id
	 * @param {String} statusId Status id
	 * @param {Object} opts Optional parameters
	 * @param {Object} opts.body body
	 * patchTaskmanagementWorktypeStatus is a preview method and is subject to both breaking and non-breaking changes at any time without notice
	 */
	patchTaskmanagementWorktypeStatus(worktypeId, statusId, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'worktypeId' is set
		if (worktypeId === undefined || worktypeId === null) {
			throw 'Missing the required parameter "worktypeId" when calling patchTaskmanagementWorktypeStatus';
		}
		// verify the required parameter 'statusId' is set
		if (statusId === undefined || statusId === null) {
			throw 'Missing the required parameter "statusId" when calling patchTaskmanagementWorktypeStatus';
		}

		return this.apiClient.callApi(
			'/api/v2/taskmanagement/worktypes/{worktypeId}/statuses/{statusId}', 
			'PATCH', 
			{ 'worktypeId': worktypeId,'statusId': statusId },
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
	 * Create a workbin
	 * 
	 * @param {Object} opts Optional parameters
	 * @param {Object} opts.body body
	 * postTaskmanagementWorkbins is a preview method and is subject to both breaking and non-breaking changes at any time without notice
	 */
	postTaskmanagementWorkbins(opts) { 
		opts = opts || {};
		

		return this.apiClient.callApi(
			'/api/v2/taskmanagement/workbins', 
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
	 * Query for workbins
	 * 
	 * @param {Object} body QueryPostRequest
	 * postTaskmanagementWorkbinsQuery is a preview method and is subject to both breaking and non-breaking changes at any time without notice
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
	 * postTaskmanagementWorkitemAcdCancel is a preview method and is subject to both breaking and non-breaking changes at any time without notice
	 */
	postTaskmanagementWorkitemAcdCancel(workitemId) { 
		// verify the required parameter 'workitemId' is set
		if (workitemId === undefined || workitemId === null) {
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
	 * postTaskmanagementWorkitemDisconnect is a preview method and is subject to both breaking and non-breaking changes at any time without notice
	 */
	postTaskmanagementWorkitemDisconnect(workitemId) { 
		// verify the required parameter 'workitemId' is set
		if (workitemId === undefined || workitemId === null) {
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
	 * postTaskmanagementWorkitemTerminate is a preview method and is subject to both breaking and non-breaking changes at any time without notice
	 */
	postTaskmanagementWorkitemTerminate(workitemId, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'workitemId' is set
		if (workitemId === undefined || workitemId === null) {
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
	 * postTaskmanagementWorkitems is a preview method and is subject to both breaking and non-breaking changes at any time without notice
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
	 * Create a schema
	 * 
	 * @param {Object} body Schema
	 * postTaskmanagementWorkitemsSchemas is a preview method and is subject to both breaking and non-breaking changes at any time without notice
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
	 * Add a status to a worktype
	 * 
	 * @param {String} worktypeId Worktype id
	 * @param {Object} opts Optional parameters
	 * @param {Object} opts.body body
	 * postTaskmanagementWorktypeStatuses is a preview method and is subject to both breaking and non-breaking changes at any time without notice
	 */
	postTaskmanagementWorktypeStatuses(worktypeId, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'worktypeId' is set
		if (worktypeId === undefined || worktypeId === null) {
			throw 'Missing the required parameter "worktypeId" when calling postTaskmanagementWorktypeStatuses';
		}

		return this.apiClient.callApi(
			'/api/v2/taskmanagement/worktypes/{worktypeId}/statuses', 
			'POST', 
			{ 'worktypeId': worktypeId },
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
	 * Create a worktype
	 * 
	 * @param {Object} opts Optional parameters
	 * @param {Object} opts.body body
	 * postTaskmanagementWorktypes is a preview method and is subject to both breaking and non-breaking changes at any time without notice
	 */
	postTaskmanagementWorktypes(opts) { 
		opts = opts || {};
		

		return this.apiClient.callApi(
			'/api/v2/taskmanagement/worktypes', 
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
	 * Query for worktypes
	 * 
	 * @param {Object} body QueryPostRequest
	 * postTaskmanagementWorktypesQuery is a preview method and is subject to both breaking and non-breaking changes at any time without notice
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
	 * putTaskmanagementWorkitemsSchema is a preview method and is subject to both breaking and non-breaking changes at any time without notice
	 */
	putTaskmanagementWorkitemsSchema(schemaId, body) { 
		// verify the required parameter 'schemaId' is set
		if (schemaId === undefined || schemaId === null) {
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
