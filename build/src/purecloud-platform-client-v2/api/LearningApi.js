import ApiClient from '../ApiClient.js';


class LearningApi {
	/**
	 * Learning service.
	 * @module purecloud-platform-client-v2/api/LearningApi
	 * @version 160.1.0
	 */

	/**
	 * Constructs a new LearningApi. 
	 * @alias module:purecloud-platform-client-v2/api/LearningApi
	 * @class
	 * @param {module:purecloud-platform-client-v2/ApiClient} apiClient Optional API client implementation to use,
	 * default to {@link module:purecloud-platform-client-v2/ApiClient#instance} if unspecified.
	 */
	constructor(apiClient) {
		this.apiClient = apiClient || ApiClient.instance;
	}


	/**
	 * Delete a learning assignment
	 * 
	 * @param {String} assignmentId The Learning Assignment ID
	 */
	deleteLearningAssignment(assignmentId) { 
		// verify the required parameter 'assignmentId' is set
		if (assignmentId === undefined || assignmentId === null) {
			throw 'Missing the required parameter "assignmentId" when calling deleteLearningAssignment';
		}

		return this.apiClient.callApi(
			'/api/v2/learning/assignments/{assignmentId}', 
			'DELETE', 
			{ 'assignmentId': assignmentId },
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
	 * Delete a learning module
	 * This will delete a learning module if it is unpublished or it will delete a published and archived learning module
	 * @param {String} moduleId The ID of the learning module
	 */
	deleteLearningModule(moduleId) { 
		// verify the required parameter 'moduleId' is set
		if (moduleId === undefined || moduleId === null) {
			throw 'Missing the required parameter "moduleId" when calling deleteLearningModule';
		}

		return this.apiClient.callApi(
			'/api/v2/learning/modules/{moduleId}', 
			'DELETE', 
			{ 'moduleId': moduleId },
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
	 * Get Learning Assignment
	 * Permission not required if you are the assigned user of the learning assignment
	 * @param {String} assignmentId The ID of Learning Assignment
	 * @param {Object} opts Optional parameters
	 * @param {Array.<String>} opts.expand Fields to expand in response
	 */
	getLearningAssignment(assignmentId, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'assignmentId' is set
		if (assignmentId === undefined || assignmentId === null) {
			throw 'Missing the required parameter "assignmentId" when calling getLearningAssignment';
		}

		return this.apiClient.callApi(
			'/api/v2/learning/assignments/{assignmentId}', 
			'GET', 
			{ 'assignmentId': assignmentId },
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
	 * List of Learning module Assignments
	 * Either moduleId or user value is required
	 * @param {Object} opts Optional parameters
	 * @param {String} opts.moduleId Specifies the ID of the learning module. Fetch assignments for learning module ID
	 * @param {String} opts.interval Specifies the range of dueDates to be queried. Milliseconds will be truncated. A maximum of 1 year can be specified in the range. End date is not inclusive. Intervals are represented as an ISO-8601 string. For example: YYYY-MM-DDThh:mm:ss/YYYY-MM-DDThh:mm:ss
	 * @param {String} opts.completionInterval Specifies the range of completion dates to be used for filtering. A maximum of 1 year can be specified in the range. End date is not inclusive. Intervals are represented as an ISO-8601 string. For example: YYYY-MM-DDThh:mm:ss/YYYY-MM-DDThh:mm:ss
	 * @param {Object} opts.overdue Specifies if only the non-overdue (overdue is False) or overdue (overdue is True) assignments are returned. If overdue is Any or if the overdue parameter is not supplied, all assignments are returned (default to Any)
	 * @param {Number} opts.pageSize Page size (default to 25)
	 * @param {Number} opts.pageNumber Page number (default to 1)
	 * @param {Object} opts.pass Specifies if only the failed (pass is False) or passed (pass is True) assignments (completed with assessment)are returned. If pass is Any or if the pass parameter is not supplied, all assignments are returned (default to Any)
	 * @param {Number} opts.minPercentageScore The minimum assessment score for an assignment (completed with assessment) to be included in the results (inclusive)
	 * @param {Number} opts.maxPercentageScore The maximum assessment score for an assignment (completed with assessment) to be included in the results (inclusive)
	 * @param {Object} opts.sortOrder Specifies result set sort order; if not specified, default sort order is descending (Desc) (default to Desc)
	 * @param {Object} opts.sortBy Specifies which field to sort the results by, default sort is by recommendedCompletionDate
	 * @param {Array.<String>} opts.userId Specifies the list of user IDs to be queried, up to 100 user IDs.
	 * @param {Array.<String>} opts.types Specifies the module types to filter by
	 * @param {Array.<String>} opts.states Specifies the assignment states to filter by
	 * @param {Array.<String>} opts.expand Specifies the expand option for returning additional information
	 */
	getLearningAssignments(opts) { 
		opts = opts || {};
		

		return this.apiClient.callApi(
			'/api/v2/learning/assignments', 
			'GET', 
			{  },
			{ 'moduleId': opts['moduleId'],'interval': opts['interval'],'completionInterval': opts['completionInterval'],'overdue': opts['overdue'],'pageSize': opts['pageSize'],'pageNumber': opts['pageNumber'],'pass': opts['pass'],'minPercentageScore': opts['minPercentageScore'],'maxPercentageScore': opts['maxPercentageScore'],'sortOrder': opts['sortOrder'],'sortBy': opts['sortBy'],'userId': this.apiClient.buildCollectionParam(opts['userId'], 'multi'),'types': this.apiClient.buildCollectionParam(opts['types'], 'multi'),'states': this.apiClient.buildCollectionParam(opts['states'], 'multi'),'expand': this.apiClient.buildCollectionParam(opts['expand'], 'multi') },
			{  },
			{  },
			null, 
			['PureCloud OAuth'], 
			['application/json'],
			['application/json']
		);
	}

	/**
	 * List of Learning Assignments assigned to current user
	 * 
	 * @param {Object} opts Optional parameters
	 * @param {String} opts.moduleId Specifies the ID of the learning module. Fetch assignments for learning module ID
	 * @param {String} opts.interval Specifies the range of dueDates to be queried. Milliseconds will be truncated. A maximum of 1 year can be specified in the range. End date is not inclusive. Intervals are represented as an ISO-8601 string. For example: YYYY-MM-DDThh:mm:ss/YYYY-MM-DDThh:mm:ss
	 * @param {String} opts.completionInterval Specifies the range of completion dates to be used for filtering. A maximum of 1 year can be specified in the range. End date is not inclusive. Intervals are represented as an ISO-8601 string. For example: YYYY-MM-DDThh:mm:ss/YYYY-MM-DDThh:mm:ss
	 * @param {Object} opts.overdue Specifies if only the non-overdue (overdue is False) or overdue (overdue is True) assignments are returned. If overdue is Any or if the overdue parameter is not supplied, all assignments are returned (default to Any)
	 * @param {Number} opts.pageSize Page size (default to 25)
	 * @param {Number} opts.pageNumber Page number (default to 1)
	 * @param {Object} opts.pass Specifies if only the failed (pass is False) or passed (pass is True) assignments (completed with assessment)are returned. If pass is Any or if the pass parameter is not supplied, all assignments are returned (default to Any)
	 * @param {Number} opts.minPercentageScore The minimum assessment score for an assignment (completed with assessment) to be included in the results (inclusive)
	 * @param {Number} opts.maxPercentageScore The maximum assessment score for an assignment (completed with assessment) to be included in the results (inclusive)
	 * @param {Object} opts.sortOrder Specifies result set sort order; if not specified, default sort order is descending (Desc) (default to Desc)
	 * @param {Object} opts.sortBy Specifies which field to sort the results by, default sort is by recommendedCompletionDate
	 * @param {Array.<String>} opts.types Specifies the module types to filter by
	 * @param {Array.<String>} opts.states Specifies the assignment states to filter by
	 * @param {Array.<String>} opts.expand Specifies the expand option for returning additional information
	 */
	getLearningAssignmentsMe(opts) { 
		opts = opts || {};
		

		return this.apiClient.callApi(
			'/api/v2/learning/assignments/me', 
			'GET', 
			{  },
			{ 'moduleId': opts['moduleId'],'interval': opts['interval'],'completionInterval': opts['completionInterval'],'overdue': opts['overdue'],'pageSize': opts['pageSize'],'pageNumber': opts['pageNumber'],'pass': opts['pass'],'minPercentageScore': opts['minPercentageScore'],'maxPercentageScore': opts['maxPercentageScore'],'sortOrder': opts['sortOrder'],'sortBy': opts['sortBy'],'types': this.apiClient.buildCollectionParam(opts['types'], 'multi'),'states': this.apiClient.buildCollectionParam(opts['states'], 'multi'),'expand': this.apiClient.buildCollectionParam(opts['expand'], 'multi') },
			{  },
			{  },
			null, 
			['PureCloud OAuth'], 
			['application/json'],
			['application/json']
		);
	}

	/**
	 * Get a learning module
	 * 
	 * @param {String} moduleId The ID of the learning module
	 * @param {Object} opts Optional parameters
	 * @param {Array.<String>} opts.expand Fields to expand in response(case insensitive)
	 */
	getLearningModule(moduleId, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'moduleId' is set
		if (moduleId === undefined || moduleId === null) {
			throw 'Missing the required parameter "moduleId" when calling getLearningModule';
		}

		return this.apiClient.callApi(
			'/api/v2/learning/modules/{moduleId}', 
			'GET', 
			{ 'moduleId': moduleId },
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
	 * Get a specific Learning Module job status
	 * 
	 * @param {String} moduleId The ID of the learning module
	 * @param {String} jobId The ID of the learning module job
	 */
	getLearningModuleJob(moduleId, jobId) { 
		// verify the required parameter 'moduleId' is set
		if (moduleId === undefined || moduleId === null) {
			throw 'Missing the required parameter "moduleId" when calling getLearningModuleJob';
		}
		// verify the required parameter 'jobId' is set
		if (jobId === undefined || jobId === null) {
			throw 'Missing the required parameter "jobId" when calling getLearningModuleJob';
		}

		return this.apiClient.callApi(
			'/api/v2/learning/modules/{moduleId}/jobs/{jobId}', 
			'GET', 
			{ 'moduleId': moduleId,'jobId': jobId },
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
	 * Get a learning module rule
	 * 
	 * @param {String} moduleId The ID of the learning module
	 */
	getLearningModuleRule(moduleId) { 
		// verify the required parameter 'moduleId' is set
		if (moduleId === undefined || moduleId === null) {
			throw 'Missing the required parameter "moduleId" when calling getLearningModuleRule';
		}

		return this.apiClient.callApi(
			'/api/v2/learning/modules/{moduleId}/rule', 
			'GET', 
			{ 'moduleId': moduleId },
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
	 * Get specific version of a published module
	 * 
	 * @param {String} moduleId The ID of the learning module
	 * @param {String} versionId The version of learning module
	 * @param {Object} opts Optional parameters
	 * @param {Array.<String>} opts.expand Fields to expand in response(case insensitive)
	 */
	getLearningModuleVersion(moduleId, versionId, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'moduleId' is set
		if (moduleId === undefined || moduleId === null) {
			throw 'Missing the required parameter "moduleId" when calling getLearningModuleVersion';
		}
		// verify the required parameter 'versionId' is set
		if (versionId === undefined || versionId === null) {
			throw 'Missing the required parameter "versionId" when calling getLearningModuleVersion';
		}

		return this.apiClient.callApi(
			'/api/v2/learning/modules/{moduleId}/versions/{versionId}', 
			'GET', 
			{ 'moduleId': moduleId,'versionId': versionId },
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
	 * Get all learning modules of an organization
	 * 
	 * @param {Object} opts Optional parameters
	 * @param {Boolean} opts.isArchived Archive status (default to false)
	 * @param {Array.<String>} opts.types Specifies the module types.
	 * @param {Number} opts.pageSize Page size (default to 25)
	 * @param {Number} opts.pageNumber Page number (default to 1)
	 * @param {Object} opts.sortOrder Sort order (default to ascending)
	 * @param {Object} opts.sortBy Sort by (default to name)
	 * @param {String} opts.searchTerm Search Term (searchable by name)
	 * @param {Array.<String>} opts.expand Fields to expand in response(case insensitive)
	 * @param {Object} opts.isPublished Specifies if only the Unpublished (isPublished is False) or Published (isPublished is True) modules are returned. If isPublished is Any or omitted, both types are returned (default to Any)
	 * @param {Array.<String>} opts.statuses Specifies the module statuses to filter by
	 */
	getLearningModules(opts) { 
		opts = opts || {};
		

		return this.apiClient.callApi(
			'/api/v2/learning/modules', 
			'GET', 
			{  },
			{ 'isArchived': opts['isArchived'],'types': this.apiClient.buildCollectionParam(opts['types'], 'multi'),'pageSize': opts['pageSize'],'pageNumber': opts['pageNumber'],'sortOrder': opts['sortOrder'],'sortBy': opts['sortBy'],'searchTerm': opts['searchTerm'],'expand': this.apiClient.buildCollectionParam(opts['expand'], 'multi'),'isPublished': opts['isPublished'],'statuses': this.apiClient.buildCollectionParam(opts['statuses'], 'multi') },
			{  },
			{  },
			null, 
			['PureCloud OAuth'], 
			['application/json'],
			['application/json']
		);
	}

	/**
	 * Get all learning modules of an organization including assignments for a specific user
	 * 
	 * @param {Array.<String>} userIds The IDs of the users to include
	 * @param {Object} opts Optional parameters
	 * @param {Number} opts.pageSize Page size (default to 25)
	 * @param {Number} opts.pageNumber Page number (default to 1)
	 * @param {String} opts.searchTerm Search Term (searches by name and description)
	 * @param {Object} opts.overdue Specifies if only modules with overdue/not overdue (overdue is True or False) assignments are returned. If overdue is Any or omitted, both are returned and can including modules that are unassigned. (default to Any)
	 * @param {Array.<String>} opts.assignmentStates Specifies the assignment states to return.
	 * @param {Array.<String>} opts.expand Fields to expand in response(case insensitive)
	 */
	getLearningModulesAssignments(userIds, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'userIds' is set
		if (userIds === undefined || userIds === null) {
			throw 'Missing the required parameter "userIds" when calling getLearningModulesAssignments';
		}

		return this.apiClient.callApi(
			'/api/v2/learning/modules/assignments', 
			'GET', 
			{  },
			{ 'userIds': this.apiClient.buildCollectionParam(userIds, 'multi'),'pageSize': opts['pageSize'],'pageNumber': opts['pageNumber'],'searchTerm': opts['searchTerm'],'overdue': opts['overdue'],'assignmentStates': this.apiClient.buildCollectionParam(opts['assignmentStates'], 'multi'),'expand': this.apiClient.buildCollectionParam(opts['expand'], 'multi') },
			{  },
			{  },
			null, 
			['PureCloud OAuth'], 
			['application/json'],
			['application/json']
		);
	}

	/**
	 * Get a specific Learning Module cover art using ID
	 * 
	 * @param {String} coverArtId Key identifier for the cover art
	 */
	getLearningModulesCoverartCoverArtId(coverArtId) { 
		// verify the required parameter 'coverArtId' is set
		if (coverArtId === undefined || coverArtId === null) {
			throw 'Missing the required parameter "coverArtId" when calling getLearningModulesCoverartCoverArtId';
		}

		return this.apiClient.callApi(
			'/api/v2/learning/modules/coverart/{coverArtId}', 
			'GET', 
			{ 'coverArtId': coverArtId },
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
	 * Update Learning Assignment
	 * 
	 * @param {String} assignmentId The ID of Learning Assignment
	 * @param {Object} opts Optional parameters
	 * @param {Object} opts.body The Learning Assignment to be updated
	 */
	patchLearningAssignment(assignmentId, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'assignmentId' is set
		if (assignmentId === undefined || assignmentId === null) {
			throw 'Missing the required parameter "assignmentId" when calling patchLearningAssignment';
		}

		return this.apiClient.callApi(
			'/api/v2/learning/assignments/{assignmentId}', 
			'PATCH', 
			{ 'assignmentId': assignmentId },
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
	 * Reschedule Learning Assignment
	 * 
	 * @param {String} assignmentId The ID of Learning Assignment
	 * @param {Object} opts Optional parameters
	 * @param {Object} opts.body The Learning assignment reschedule model
	 */
	patchLearningAssignmentReschedule(assignmentId, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'assignmentId' is set
		if (assignmentId === undefined || assignmentId === null) {
			throw 'Missing the required parameter "assignmentId" when calling patchLearningAssignmentReschedule';
		}

		return this.apiClient.callApi(
			'/api/v2/learning/assignments/{assignmentId}/reschedule', 
			'PATCH', 
			{ 'assignmentId': assignmentId },
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
	 * Score learning assessment for preview
	 * 
	 * @param {Object} body Assessment form and answers to score
	 */
	postLearningAssessmentsScoring(body) { 
		// verify the required parameter 'body' is set
		if (body === undefined || body === null) {
			throw 'Missing the required parameter "body" when calling postLearningAssessmentsScoring';
		}

		return this.apiClient.callApi(
			'/api/v2/learning/assessments/scoring', 
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
	 * Reassign Learning Assignment
	 * This will reassign the state of the assignment to Assigned and update the assignment to the latest version of the module
	 * @param {String} assignmentId The Learning Assignment ID
	 */
	postLearningAssignmentReassign(assignmentId) { 
		// verify the required parameter 'assignmentId' is set
		if (assignmentId === undefined || assignmentId === null) {
			throw 'Missing the required parameter "assignmentId" when calling postLearningAssignmentReassign';
		}

		return this.apiClient.callApi(
			'/api/v2/learning/assignments/{assignmentId}/reassign', 
			'POST', 
			{ 'assignmentId': assignmentId },
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
	 * Reset Learning Assignment
	 * This will reset the state of the assignment to Assigned and remove the version of Learning module associated with the assignment
	 * @param {String} assignmentId The Learning Assignment ID
	 */
	postLearningAssignmentReset(assignmentId) { 
		// verify the required parameter 'assignmentId' is set
		if (assignmentId === undefined || assignmentId === null) {
			throw 'Missing the required parameter "assignmentId" when calling postLearningAssignmentReset';
		}

		return this.apiClient.callApi(
			'/api/v2/learning/assignments/{assignmentId}/reset', 
			'POST', 
			{ 'assignmentId': assignmentId },
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
	 * Create Learning Assignment
	 * 
	 * @param {Object} opts Optional parameters
	 * @param {Object} opts.body The Learning Assignment to be created
	 */
	postLearningAssignments(opts) { 
		opts = opts || {};
		

		return this.apiClient.callApi(
			'/api/v2/learning/assignments', 
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
	 * Retrieve aggregated assignment data
	 * 
	 * @param {Object} body Aggregate Request
	 */
	postLearningAssignmentsAggregatesQuery(body) { 
		// verify the required parameter 'body' is set
		if (body === undefined || body === null) {
			throw 'Missing the required parameter "body" when calling postLearningAssignmentsAggregatesQuery';
		}

		return this.apiClient.callApi(
			'/api/v2/learning/assignments/aggregates/query', 
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
	 * Add multiple learning assignments
	 * 
	 * @param {Object} opts Optional parameters
	 * @param {Array.<Object>} opts.body The learning assignments to be created
	 */
	postLearningAssignmentsBulkadd(opts) { 
		opts = opts || {};
		

		return this.apiClient.callApi(
			'/api/v2/learning/assignments/bulkadd', 
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
	 * Remove multiple Learning Assignments
	 * 
	 * @param {Object} opts Optional parameters
	 * @param {Array.<String>} opts.body The IDs of the learning assignments to be removed
	 */
	postLearningAssignmentsBulkremove(opts) { 
		opts = opts || {};
		

		return this.apiClient.callApi(
			'/api/v2/learning/assignments/bulkremove', 
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
	 * Starts a specified operation on learning module
	 * This will initiate operation specified in the request body for a learning module
	 * @param {String} moduleId The ID of the learning module
	 * @param {Object} body The learning module job request
	 */
	postLearningModuleJobs(moduleId, body) { 
		// verify the required parameter 'moduleId' is set
		if (moduleId === undefined || moduleId === null) {
			throw 'Missing the required parameter "moduleId" when calling postLearningModuleJobs';
		}
		// verify the required parameter 'body' is set
		if (body === undefined || body === null) {
			throw 'Missing the required parameter "body" when calling postLearningModuleJobs';
		}

		return this.apiClient.callApi(
			'/api/v2/learning/modules/{moduleId}/jobs', 
			'POST', 
			{ 'moduleId': moduleId },
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
	 * Publish a Learning module
	 * 
	 * @param {String} moduleId The ID of the learning module
	 */
	postLearningModulePublish(moduleId) { 
		// verify the required parameter 'moduleId' is set
		if (moduleId === undefined || moduleId === null) {
			throw 'Missing the required parameter "moduleId" when calling postLearningModulePublish';
		}

		return this.apiClient.callApi(
			'/api/v2/learning/modules/{moduleId}/publish', 
			'POST', 
			{ 'moduleId': moduleId },
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
	 * Create a new learning module
	 * This will create a new unpublished learning module with the specified fields.
	 * @param {Object} body The learning module to be created
	 */
	postLearningModules(body) { 
		// verify the required parameter 'body' is set
		if (body === undefined || body === null) {
			throw 'Missing the required parameter "body" when calling postLearningModules';
		}

		return this.apiClient.callApi(
			'/api/v2/learning/modules', 
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
	 * Get users for learning module rule
	 * This will get the users who matches the given rule.
	 * @param {Number} pageSize Page size
	 * @param {Number} pageNumber Page number
	 * @param {Object} body The learning module rule to fetch users
	 */
	postLearningRulesQuery(pageSize, pageNumber, body) { 
		// verify the required parameter 'pageSize' is set
		if (pageSize === undefined || pageSize === null) {
			throw 'Missing the required parameter "pageSize" when calling postLearningRulesQuery';
		}
		// verify the required parameter 'pageNumber' is set
		if (pageNumber === undefined || pageNumber === null) {
			throw 'Missing the required parameter "pageNumber" when calling postLearningRulesQuery';
		}
		// verify the required parameter 'body' is set
		if (body === undefined || body === null) {
			throw 'Missing the required parameter "body" when calling postLearningRulesQuery';
		}

		return this.apiClient.callApi(
			'/api/v2/learning/rules/query', 
			'POST', 
			{  },
			{ 'pageSize': pageSize,'pageNumber': pageNumber },
			{  },
			{  },
			body, 
			['PureCloud OAuth'], 
			['application/json'],
			['application/json']
		);
	}

	/**
	 * Get list of possible slots where a learning activity can be scheduled.
	 * 
	 * @param {Object} body The slot search request
	 */
	postLearningScheduleslotsQuery(body) { 
		// verify the required parameter 'body' is set
		if (body === undefined || body === null) {
			throw 'Missing the required parameter "body" when calling postLearningScheduleslotsQuery';
		}

		return this.apiClient.callApi(
			'/api/v2/learning/scheduleslots/query', 
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
	 * Update a learning module
	 * This will update the name, description, completion time in days and inform steps for a learning module
	 * @param {String} moduleId The ID of the learning module
	 * @param {Object} body The learning module to be updated
	 */
	putLearningModule(moduleId, body) { 
		// verify the required parameter 'moduleId' is set
		if (moduleId === undefined || moduleId === null) {
			throw 'Missing the required parameter "moduleId" when calling putLearningModule';
		}
		// verify the required parameter 'body' is set
		if (body === undefined || body === null) {
			throw 'Missing the required parameter "body" when calling putLearningModule';
		}

		return this.apiClient.callApi(
			'/api/v2/learning/modules/{moduleId}', 
			'PUT', 
			{ 'moduleId': moduleId },
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
	 * Update a learning module rule
	 * This will update a learning module rule with the specified fields.
	 * @param {String} moduleId The ID of the learning module
	 * @param {Object} body The learning module rule to be updated
	 */
	putLearningModuleRule(moduleId, body) { 
		// verify the required parameter 'moduleId' is set
		if (moduleId === undefined || moduleId === null) {
			throw 'Missing the required parameter "moduleId" when calling putLearningModuleRule';
		}
		// verify the required parameter 'body' is set
		if (body === undefined || body === null) {
			throw 'Missing the required parameter "body" when calling putLearningModuleRule';
		}

		return this.apiClient.callApi(
			'/api/v2/learning/modules/{moduleId}/rule', 
			'PUT', 
			{ 'moduleId': moduleId },
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


export default LearningApi;