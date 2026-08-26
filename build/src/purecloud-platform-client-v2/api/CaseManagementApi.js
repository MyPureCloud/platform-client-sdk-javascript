import ApiClient from '../ApiClient.js';


class CaseManagementApi {
	/**
	 * CaseManagement service.
	 * @module purecloud-platform-client-v2/api/CaseManagementApi
	 * @version 260.0.0
	 */

	/**
	 * Constructs a new CaseManagementApi. 
	 * @alias module:purecloud-platform-client-v2/api/CaseManagementApi
	 * @class
	 * @param {module:purecloud-platform-client-v2/ApiClient} apiClient Optional API client implementation to use,
	 * default to {@link module:purecloud-platform-client-v2/ApiClient#instance} if unspecified.
	 */
	constructor(apiClient) {
		this.apiClient = apiClient || ApiClient.instance;
	}


	/**
	 * Delete a Case.
	 * 
	 * @param {String} caseId Case identifier.
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	deleteCasemanagementCase(caseId, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'caseId' is set
		if (caseId === undefined || caseId === null || caseId === '') {
			throw 'Missing the required parameter "caseId" when calling deleteCasemanagementCase';
		}

		return this.apiClient.callApi(
			'/api/v2/casemanagement/cases/{caseId}', 
			'DELETE', 
			{ 'caseId': caseId },
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
	 * Delete my Comment.
	 * 
	 * @param {String} caseId Case identifier.
	 * @param {String} commentId Comment identifier.
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	deleteCasemanagementCaseCommentsMeCommentId(caseId, commentId, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'caseId' is set
		if (caseId === undefined || caseId === null || caseId === '') {
			throw 'Missing the required parameter "caseId" when calling deleteCasemanagementCaseCommentsMeCommentId';
		}
		// verify the required parameter 'commentId' is set
		if (commentId === undefined || commentId === null || commentId === '') {
			throw 'Missing the required parameter "commentId" when calling deleteCasemanagementCaseCommentsMeCommentId';
		}

		return this.apiClient.callApi(
			'/api/v2/casemanagement/cases/{caseId}/comments/me/{commentId}', 
			'DELETE', 
			{ 'caseId': caseId,'commentId': commentId },
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
	 * Delete a Caseplan.
	 * 
	 * @param {String} caseplanId Caseplan identifier.
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	deleteCasemanagementCaseplan(caseplanId, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'caseplanId' is set
		if (caseplanId === undefined || caseplanId === null || caseplanId === '') {
			throw 'Missing the required parameter "caseplanId" when calling deleteCasemanagementCaseplan';
		}

		return this.apiClient.callApi(
			'/api/v2/casemanagement/caseplans/{caseplanId}', 
			'DELETE', 
			{ 'caseplanId': caseplanId },
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
	 * Remove a data schema from a draft Caseplan.
	 * 
	 * @param {String} caseplanId Caseplan identifier.
	 * @param {String} schemaKeyName Schema key (for example default).
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	deleteCasemanagementCaseplanDataschema(caseplanId, schemaKeyName, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'caseplanId' is set
		if (caseplanId === undefined || caseplanId === null || caseplanId === '') {
			throw 'Missing the required parameter "caseplanId" when calling deleteCasemanagementCaseplanDataschema';
		}
		// verify the required parameter 'schemaKeyName' is set
		if (schemaKeyName === undefined || schemaKeyName === null || schemaKeyName === '') {
			throw 'Missing the required parameter "schemaKeyName" when calling deleteCasemanagementCaseplanDataschema';
		}

		return this.apiClient.callApi(
			'/api/v2/casemanagement/caseplans/{caseplanId}/dataschemas/{schemaKeyName}', 
			'DELETE', 
			{ 'caseplanId': caseplanId,'schemaKeyName': schemaKeyName },
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
	 * Get a Case.
	 * 
	 * @param {String} caseId Case identifier.
	 * @param {Object} opts Optional parameters
	 * @param {Array.<String>} opts.expands Attributes to expand. Comma-separated if more than one.
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	getCasemanagementCase(caseId, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'caseId' is set
		if (caseId === undefined || caseId === null || caseId === '') {
			throw 'Missing the required parameter "caseId" when calling getCasemanagementCase';
		}

		return this.apiClient.callApi(
			'/api/v2/casemanagement/cases/{caseId}', 
			'GET', 
			{ 'caseId': caseId },
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
	 * Get a Case Association.
	 * 
	 * @param {String} caseId Case identifier.
	 * @param {String} associationId Case association identifier.
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	getCasemanagementCaseAssociation(caseId, associationId, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'caseId' is set
		if (caseId === undefined || caseId === null || caseId === '') {
			throw 'Missing the required parameter "caseId" when calling getCasemanagementCaseAssociation';
		}
		// verify the required parameter 'associationId' is set
		if (associationId === undefined || associationId === null || associationId === '') {
			throw 'Missing the required parameter "associationId" when calling getCasemanagementCaseAssociation';
		}

		return this.apiClient.callApi(
			'/api/v2/casemanagement/cases/{caseId}/associations/{associationId}', 
			'GET', 
			{ 'caseId': caseId,'associationId': associationId },
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
	 * Get a list of Case associations for the Case.
	 * 
	 * @param {String} caseId Case identifier.
	 * @param {Object} opts Optional parameters
	 * @param {String} opts.before The cursor that points to the start of the set of entities that has been returned.
	 * @param {String} opts.after The cursor that points to the end of the set of entities that has been returned.
	 * @param {String} opts.pageSize Number of entities to return. Maximum of 200.
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	getCasemanagementCaseAssociations(caseId, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'caseId' is set
		if (caseId === undefined || caseId === null || caseId === '') {
			throw 'Missing the required parameter "caseId" when calling getCasemanagementCaseAssociations';
		}

		return this.apiClient.callApi(
			'/api/v2/casemanagement/cases/{caseId}/associations', 
			'GET', 
			{ 'caseId': caseId },
			{ 'before': opts['before'],'after': opts['after'],'pageSize': opts['pageSize'] },
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
	 * Get a Comment.
	 * 
	 * @param {String} caseId Case identifier.
	 * @param {String} commentId Comment identifier.
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	getCasemanagementCaseComment(caseId, commentId, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'caseId' is set
		if (caseId === undefined || caseId === null || caseId === '') {
			throw 'Missing the required parameter "caseId" when calling getCasemanagementCaseComment';
		}
		// verify the required parameter 'commentId' is set
		if (commentId === undefined || commentId === null || commentId === '') {
			throw 'Missing the required parameter "commentId" when calling getCasemanagementCaseComment';
		}

		return this.apiClient.callApi(
			'/api/v2/casemanagement/cases/{caseId}/comments/{commentId}', 
			'GET', 
			{ 'caseId': caseId,'commentId': commentId },
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
	 * Get comments for a Case.
	 * 
	 * @param {String} caseId Case identifier.
	 * @param {Object} opts Optional parameters
	 * @param {String} opts.after Cursor pointing to the end of the previously returned page of comments.
	 * @param {Number} opts.pageSize Number of comments to return. Maximum is 100.
	 * @param {Object} opts.sortOrder Ascending or descending sort order. (default to desc)
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	getCasemanagementCaseComments(caseId, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'caseId' is set
		if (caseId === undefined || caseId === null || caseId === '') {
			throw 'Missing the required parameter "caseId" when calling getCasemanagementCaseComments';
		}

		return this.apiClient.callApi(
			'/api/v2/casemanagement/cases/{caseId}/comments', 
			'GET', 
			{ 'caseId': caseId },
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
	 * Get a Stage.
	 * 
	 * @param {String} caseId Case identifier.
	 * @param {String} stageId Stage identifier.
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	getCasemanagementCaseStage(caseId, stageId, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'caseId' is set
		if (caseId === undefined || caseId === null || caseId === '') {
			throw 'Missing the required parameter "caseId" when calling getCasemanagementCaseStage';
		}
		// verify the required parameter 'stageId' is set
		if (stageId === undefined || stageId === null || stageId === '') {
			throw 'Missing the required parameter "stageId" when calling getCasemanagementCaseStage';
		}

		return this.apiClient.callApi(
			'/api/v2/casemanagement/cases/{caseId}/stages/{stageId}', 
			'GET', 
			{ 'caseId': caseId,'stageId': stageId },
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
	 * Get a Step.
	 * 
	 * @param {String} caseId Case identifier.
	 * @param {String} stageId Stage identifier.
	 * @param {String} stepId Step identifier.
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	getCasemanagementCaseStageStep(caseId, stageId, stepId, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'caseId' is set
		if (caseId === undefined || caseId === null || caseId === '') {
			throw 'Missing the required parameter "caseId" when calling getCasemanagementCaseStageStep';
		}
		// verify the required parameter 'stageId' is set
		if (stageId === undefined || stageId === null || stageId === '') {
			throw 'Missing the required parameter "stageId" when calling getCasemanagementCaseStageStep';
		}
		// verify the required parameter 'stepId' is set
		if (stepId === undefined || stepId === null || stepId === '') {
			throw 'Missing the required parameter "stepId" when calling getCasemanagementCaseStageStep';
		}

		return this.apiClient.callApi(
			'/api/v2/casemanagement/cases/{caseId}/stages/{stageId}/steps/{stepId}', 
			'GET', 
			{ 'caseId': caseId,'stageId': stageId,'stepId': stepId },
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
	 * Get a list of Steps.
	 * 
	 * @param {String} caseId Case identifier.
	 * @param {String} stageId Stage identifier.
	 * @param {Object} opts Optional parameters
	 * @param {String} opts.before The cursor that points to the start of the set of entities that has been returned.
	 * @param {String} opts.after The cursor that points to the end of the set of entities that has been returned.
	 * @param {String} opts.pageSize Number of entities to return. Maximum of 200.
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	getCasemanagementCaseStageSteps(caseId, stageId, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'caseId' is set
		if (caseId === undefined || caseId === null || caseId === '') {
			throw 'Missing the required parameter "caseId" when calling getCasemanagementCaseStageSteps';
		}
		// verify the required parameter 'stageId' is set
		if (stageId === undefined || stageId === null || stageId === '') {
			throw 'Missing the required parameter "stageId" when calling getCasemanagementCaseStageSteps';
		}

		return this.apiClient.callApi(
			'/api/v2/casemanagement/cases/{caseId}/stages/{stageId}/steps', 
			'GET', 
			{ 'caseId': caseId,'stageId': stageId },
			{ 'before': opts['before'],'after': opts['after'],'pageSize': opts['pageSize'] },
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
	 * Get a list of Stages.
	 * 
	 * @param {String} caseId Case identifier.
	 * @param {Object} opts Optional parameters
	 * @param {String} opts.before The cursor that points to the start of the set of entities that has been returned.
	 * @param {String} opts.after The cursor that points to the end of the set of entities that has been returned.
	 * @param {String} opts.pageSize Number of entities to return. Maximum of 200.
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	getCasemanagementCaseStages(caseId, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'caseId' is set
		if (caseId === undefined || caseId === null || caseId === '') {
			throw 'Missing the required parameter "caseId" when calling getCasemanagementCaseStages';
		}

		return this.apiClient.callApi(
			'/api/v2/casemanagement/cases/{caseId}/stages', 
			'GET', 
			{ 'caseId': caseId },
			{ 'before': opts['before'],'after': opts['after'],'pageSize': opts['pageSize'] },
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
	 * Get a Terminate Job for a Case.
	 * 
	 * @param {String} caseId Case identifier.
	 * @param {String} jobId Terminate Job identifier.
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	getCasemanagementCaseTerminateJob(caseId, jobId, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'caseId' is set
		if (caseId === undefined || caseId === null || caseId === '') {
			throw 'Missing the required parameter "caseId" when calling getCasemanagementCaseTerminateJob';
		}
		// verify the required parameter 'jobId' is set
		if (jobId === undefined || jobId === null || jobId === '') {
			throw 'Missing the required parameter "jobId" when calling getCasemanagementCaseTerminateJob';
		}

		return this.apiClient.callApi(
			'/api/v2/casemanagement/cases/{caseId}/terminate/jobs/{jobId}', 
			'GET', 
			{ 'caseId': caseId,'jobId': jobId },
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
	 * Get a Caseplan.
	 * 
	 * @param {String} caseplanId Caseplan identifier.
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	getCasemanagementCaseplan(caseplanId, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'caseplanId' is set
		if (caseplanId === undefined || caseplanId === null || caseplanId === '') {
			throw 'Missing the required parameter "caseplanId" when calling getCasemanagementCaseplan';
		}

		return this.apiClient.callApi(
			'/api/v2/casemanagement/caseplans/{caseplanId}', 
			'GET', 
			{ 'caseplanId': caseplanId },
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
	 * Get a Caseplan version.
	 * 
	 * @param {String} caseplanId Caseplan identifier.
	 * @param {String} versionId Caseplan version identifier.
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	getCasemanagementCaseplanVersion(caseplanId, versionId, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'caseplanId' is set
		if (caseplanId === undefined || caseplanId === null || caseplanId === '') {
			throw 'Missing the required parameter "caseplanId" when calling getCasemanagementCaseplanVersion';
		}
		// verify the required parameter 'versionId' is set
		if (versionId === undefined || versionId === null || versionId === '') {
			throw 'Missing the required parameter "versionId" when calling getCasemanagementCaseplanVersion';
		}

		return this.apiClient.callApi(
			'/api/v2/casemanagement/caseplans/{caseplanId}/versions/{versionId}', 
			'GET', 
			{ 'caseplanId': caseplanId,'versionId': versionId },
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
	 * Get the data schemas for a Caseplan version.
	 * 
	 * @param {String} caseplanId Caseplan identifier.
	 * @param {String} versionId Caseplan version identifier.
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	getCasemanagementCaseplanVersionDataschemas(caseplanId, versionId, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'caseplanId' is set
		if (caseplanId === undefined || caseplanId === null || caseplanId === '') {
			throw 'Missing the required parameter "caseplanId" when calling getCasemanagementCaseplanVersionDataschemas';
		}
		// verify the required parameter 'versionId' is set
		if (versionId === undefined || versionId === null || versionId === '') {
			throw 'Missing the required parameter "versionId" when calling getCasemanagementCaseplanVersionDataschemas';
		}

		return this.apiClient.callApi(
			'/api/v2/casemanagement/caseplans/{caseplanId}/versions/{versionId}/dataschemas', 
			'GET', 
			{ 'caseplanId': caseplanId,'versionId': versionId },
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
	 * Get the intake settings for a Caseplan version.
	 * 
	 * @param {String} caseplanId Caseplan identifier.
	 * @param {String} versionId Caseplan version identifier.
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	getCasemanagementCaseplanVersionIntakesettings(caseplanId, versionId, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'caseplanId' is set
		if (caseplanId === undefined || caseplanId === null || caseplanId === '') {
			throw 'Missing the required parameter "caseplanId" when calling getCasemanagementCaseplanVersionIntakesettings';
		}
		// verify the required parameter 'versionId' is set
		if (versionId === undefined || versionId === null || versionId === '') {
			throw 'Missing the required parameter "versionId" when calling getCasemanagementCaseplanVersionIntakesettings';
		}

		return this.apiClient.callApi(
			'/api/v2/casemanagement/caseplans/{caseplanId}/versions/{versionId}/intakesettings', 
			'GET', 
			{ 'caseplanId': caseplanId,'versionId': versionId },
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
	 * Get a Stageplan.
	 * 
	 * @param {String} caseplanId Caseplan identifier.
	 * @param {String} versionId Caseplan version identifier.
	 * @param {String} stageplanId Stageplan identifier.
	 * @param {Object} opts Optional parameters
	 * @param {Array.<String>} opts.expands Fields to expand.
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	getCasemanagementCaseplanVersionStageplan(caseplanId, versionId, stageplanId, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'caseplanId' is set
		if (caseplanId === undefined || caseplanId === null || caseplanId === '') {
			throw 'Missing the required parameter "caseplanId" when calling getCasemanagementCaseplanVersionStageplan';
		}
		// verify the required parameter 'versionId' is set
		if (versionId === undefined || versionId === null || versionId === '') {
			throw 'Missing the required parameter "versionId" when calling getCasemanagementCaseplanVersionStageplan';
		}
		// verify the required parameter 'stageplanId' is set
		if (stageplanId === undefined || stageplanId === null || stageplanId === '') {
			throw 'Missing the required parameter "stageplanId" when calling getCasemanagementCaseplanVersionStageplan';
		}

		return this.apiClient.callApi(
			'/api/v2/casemanagement/caseplans/{caseplanId}/versions/{versionId}/stageplans/{stageplanId}', 
			'GET', 
			{ 'caseplanId': caseplanId,'versionId': versionId,'stageplanId': stageplanId },
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
	 * Get a Stepplan.
	 * 
	 * @param {String} caseplanId Caseplan identifier.
	 * @param {String} versionId Caseplan version identifier.
	 * @param {String} stageplanId Stageplan identifier.
	 * @param {String} stepplanId Stepplan identifier.
	 * @param {Object} opts Optional parameters
	 * @param {Array.<String>} opts.expands Fields to expand.
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	getCasemanagementCaseplanVersionStageplanStepplan(caseplanId, versionId, stageplanId, stepplanId, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'caseplanId' is set
		if (caseplanId === undefined || caseplanId === null || caseplanId === '') {
			throw 'Missing the required parameter "caseplanId" when calling getCasemanagementCaseplanVersionStageplanStepplan';
		}
		// verify the required parameter 'versionId' is set
		if (versionId === undefined || versionId === null || versionId === '') {
			throw 'Missing the required parameter "versionId" when calling getCasemanagementCaseplanVersionStageplanStepplan';
		}
		// verify the required parameter 'stageplanId' is set
		if (stageplanId === undefined || stageplanId === null || stageplanId === '') {
			throw 'Missing the required parameter "stageplanId" when calling getCasemanagementCaseplanVersionStageplanStepplan';
		}
		// verify the required parameter 'stepplanId' is set
		if (stepplanId === undefined || stepplanId === null || stepplanId === '') {
			throw 'Missing the required parameter "stepplanId" when calling getCasemanagementCaseplanVersionStageplanStepplan';
		}

		return this.apiClient.callApi(
			'/api/v2/casemanagement/caseplans/{caseplanId}/versions/{versionId}/stageplans/{stageplanId}/stepplans/{stepplanId}', 
			'GET', 
			{ 'caseplanId': caseplanId,'versionId': versionId,'stageplanId': stageplanId,'stepplanId': stepplanId },
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
	 * Get a list of Stepplans.
	 * 
	 * @param {String} caseplanId Caseplan identifier.
	 * @param {String} versionId Caseplan version identifier.
	 * @param {String} stageplanId Stageplan identifier.
	 * @param {Object} opts Optional parameters
	 * @param {String} opts.before The cursor that points to the start of the set of entities that has been returned.
	 * @param {String} opts.after The cursor that points to the end of the set of entities that has been returned.
	 * @param {String} opts.pageSize Number of entities to return. Maximum of 200.
	 * @param {Array.<String>} opts.expands Fields to expand.
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	getCasemanagementCaseplanVersionStageplanStepplans(caseplanId, versionId, stageplanId, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'caseplanId' is set
		if (caseplanId === undefined || caseplanId === null || caseplanId === '') {
			throw 'Missing the required parameter "caseplanId" when calling getCasemanagementCaseplanVersionStageplanStepplans';
		}
		// verify the required parameter 'versionId' is set
		if (versionId === undefined || versionId === null || versionId === '') {
			throw 'Missing the required parameter "versionId" when calling getCasemanagementCaseplanVersionStageplanStepplans';
		}
		// verify the required parameter 'stageplanId' is set
		if (stageplanId === undefined || stageplanId === null || stageplanId === '') {
			throw 'Missing the required parameter "stageplanId" when calling getCasemanagementCaseplanVersionStageplanStepplans';
		}

		return this.apiClient.callApi(
			'/api/v2/casemanagement/caseplans/{caseplanId}/versions/{versionId}/stageplans/{stageplanId}/stepplans', 
			'GET', 
			{ 'caseplanId': caseplanId,'versionId': versionId,'stageplanId': stageplanId },
			{ 'before': opts['before'],'after': opts['after'],'pageSize': opts['pageSize'],'expands': this.apiClient.buildCollectionParam(opts['expands'], 'multi') },
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
	 * Get a list of Stageplans.
	 * 
	 * @param {String} caseplanId Caseplan identifier.
	 * @param {String} versionId Caseplan version identifier.
	 * @param {Object} opts Optional parameters
	 * @param {String} opts.before The cursor that points to the start of the set of entities that has been returned.
	 * @param {String} opts.after The cursor that points to the end of the set of entities that has been returned.
	 * @param {String} opts.pageSize Number of entities to return. Maximum of 200.
	 * @param {Array.<String>} opts.expands Fields to expand.
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	getCasemanagementCaseplanVersionStageplans(caseplanId, versionId, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'caseplanId' is set
		if (caseplanId === undefined || caseplanId === null || caseplanId === '') {
			throw 'Missing the required parameter "caseplanId" when calling getCasemanagementCaseplanVersionStageplans';
		}
		// verify the required parameter 'versionId' is set
		if (versionId === undefined || versionId === null || versionId === '') {
			throw 'Missing the required parameter "versionId" when calling getCasemanagementCaseplanVersionStageplans';
		}

		return this.apiClient.callApi(
			'/api/v2/casemanagement/caseplans/{caseplanId}/versions/{versionId}/stageplans', 
			'GET', 
			{ 'caseplanId': caseplanId,'versionId': versionId },
			{ 'before': opts['before'],'after': opts['after'],'pageSize': opts['pageSize'],'expands': this.apiClient.buildCollectionParam(opts['expands'], 'multi') },
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
	 * Get a list of Caseplans.
	 * 
	 * @param {Object} opts Optional parameters
	 * @param {String} opts.after Cursor that points to the end of the previously returned set of Caseplans.
	 * @param {Number} opts.pageSize Number of Caseplans to return. Maximum is 200.
	 * @param {String} opts.customerIntentId Filter by customer intent.
	 * @param {String} opts.divisionIds Filter by divisions.
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	getCasemanagementCaseplans(opts) { 
		opts = opts || {};
		

		return this.apiClient.callApi(
			'/api/v2/casemanagement/caseplans', 
			'GET', 
			{  },
			{ 'after': opts['after'],'pageSize': opts['pageSize'],'customerIntentId': opts['customerIntentId'],'divisionIds': opts['divisionIds'] },
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
	 * Get a list of Cases for an External Contact.
	 * 
	 * @param {String} externalContactId External contact identifier.
	 * @param {Object} opts Optional parameters
	 * @param {String} opts.after Cursor pointing to the end of the previously returned page of Cases.
	 * @param {Number} opts.pageSize Number of Cases to return (maximum 200).
	 * @param {String} opts.divisionIds Filter by divisions.
	 * @param {Array.<String>} opts.expands Fields to expand.
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	getCasemanagementCasesExternalcontact(externalContactId, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'externalContactId' is set
		if (externalContactId === undefined || externalContactId === null || externalContactId === '') {
			throw 'Missing the required parameter "externalContactId" when calling getCasemanagementCasesExternalcontact';
		}

		return this.apiClient.callApi(
			'/api/v2/casemanagement/cases/externalcontacts/{externalContactId}', 
			'GET', 
			{ 'externalContactId': externalContactId },
			{ 'after': opts['after'],'pageSize': opts['pageSize'],'divisionIds': opts['divisionIds'],'expands': this.apiClient.buildCollectionParam(opts['expands'], 'multi') },
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
	 * Get a case query job by id
	 * 
	 * @param {String} jobId Job ID
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 * getCasemanagementCasesQueryJob is a preview method and is subject to both breaking and non-breaking changes at any time without notice
	 */
	getCasemanagementCasesQueryJob(jobId, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'jobId' is set
		if (jobId === undefined || jobId === null || jobId === '') {
			throw 'Missing the required parameter "jobId" when calling getCasemanagementCasesQueryJob';
		}

		return this.apiClient.callApi(
			'/api/v2/casemanagement/cases/query/jobs/{jobId}', 
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
	 * Get results for a case query job
	 * 
	 * @param {String} jobId Job ID
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 * getCasemanagementCasesQueryJobResults is a preview method and is subject to both breaking and non-breaking changes at any time without notice
	 */
	getCasemanagementCasesQueryJobResults(jobId, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'jobId' is set
		if (jobId === undefined || jobId === null || jobId === '') {
			throw 'Missing the required parameter "jobId" when calling getCasemanagementCasesQueryJobResults';
		}

		return this.apiClient.callApi(
			'/api/v2/casemanagement/cases/query/jobs/{jobId}/results', 
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
	 * Get a Case by reference.
	 * 
	 * @param {String} referenceId Case reference.
	 * @param {Object} opts Optional parameters
	 * @param {Array.<String>} opts.expands Attributes to expand. Comma-separated if more than one.
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	getCasemanagementCasesReference(referenceId, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'referenceId' is set
		if (referenceId === undefined || referenceId === null || referenceId === '') {
			throw 'Missing the required parameter "referenceId" when calling getCasemanagementCasesReference';
		}

		return this.apiClient.callApi(
			'/api/v2/casemanagement/cases/references/{referenceId}', 
			'GET', 
			{ 'referenceId': referenceId },
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
	 * Update the due date of a Case.
	 * 
	 * @param {String} caseId Case identifier.
	 * @param {Object} body Due date update.
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	patchCasemanagementCaseDatedue(caseId, body, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'caseId' is set
		if (caseId === undefined || caseId === null || caseId === '') {
			throw 'Missing the required parameter "caseId" when calling patchCasemanagementCaseDatedue';
		}
		// verify the required parameter 'body' is set
		if (body === undefined || body === null) {
			throw 'Missing the required parameter "body" when calling patchCasemanagementCaseDatedue';
		}

		return this.apiClient.callApi(
			'/api/v2/casemanagement/cases/{caseId}/datedue', 
			'PATCH', 
			{ 'caseId': caseId },
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
	 * Update the ownerId of a Case
	 * 
	 * @param {String} caseId Case identifier.
	 * @param {Object} body OwnerId
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 * patchCasemanagementCaseOwner is a preview method and is subject to both breaking and non-breaking changes at any time without notice
	 */
	patchCasemanagementCaseOwner(caseId, body, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'caseId' is set
		if (caseId === undefined || caseId === null || caseId === '') {
			throw 'Missing the required parameter "caseId" when calling patchCasemanagementCaseOwner';
		}
		// verify the required parameter 'body' is set
		if (body === undefined || body === null) {
			throw 'Missing the required parameter "body" when calling patchCasemanagementCaseOwner';
		}

		return this.apiClient.callApi(
			'/api/v2/casemanagement/cases/{caseId}/owner', 
			'PATCH', 
			{ 'caseId': caseId },
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
	 * Update priority of a Case.
	 * 
	 * @param {String} caseId Case identifier.
	 * @param {Object} body Priority update.
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	patchCasemanagementCasePriority(caseId, body, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'caseId' is set
		if (caseId === undefined || caseId === null || caseId === '') {
			throw 'Missing the required parameter "caseId" when calling patchCasemanagementCasePriority';
		}
		// verify the required parameter 'body' is set
		if (body === undefined || body === null) {
			throw 'Missing the required parameter "body" when calling patchCasemanagementCasePriority';
		}

		return this.apiClient.callApi(
			'/api/v2/casemanagement/cases/{caseId}/priority', 
			'PATCH', 
			{ 'caseId': caseId },
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
	 * Update summary of a Case.
	 * 
	 * @param {String} caseId Case identifier.
	 * @param {Object} body Summary update.
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	patchCasemanagementCaseSummary(caseId, body, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'caseId' is set
		if (caseId === undefined || caseId === null || caseId === '') {
			throw 'Missing the required parameter "caseId" when calling patchCasemanagementCaseSummary';
		}
		// verify the required parameter 'body' is set
		if (body === undefined || body === null) {
			throw 'Missing the required parameter "body" when calling patchCasemanagementCaseSummary';
		}

		return this.apiClient.callApi(
			'/api/v2/casemanagement/cases/{caseId}/summary', 
			'PATCH', 
			{ 'caseId': caseId },
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
	 * Update the attributes of a Caseplan.
	 * 
	 * @param {String} caseplanId Caseplan identifier.
	 * @param {Object} body Caseplan update.
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	patchCasemanagementCaseplan(caseplanId, body, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'caseplanId' is set
		if (caseplanId === undefined || caseplanId === null || caseplanId === '') {
			throw 'Missing the required parameter "caseplanId" when calling patchCasemanagementCaseplan';
		}
		// verify the required parameter 'body' is set
		if (body === undefined || body === null) {
			throw 'Missing the required parameter "body" when calling patchCasemanagementCaseplan';
		}

		return this.apiClient.callApi(
			'/api/v2/casemanagement/caseplans/{caseplanId}', 
			'PATCH', 
			{ 'caseplanId': caseplanId },
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
	 * Update the attributes of a Stageplan.
	 * 
	 * @param {String} caseplanId Caseplan identifier.
	 * @param {String} stageplanId Stageplan identifier.
	 * @param {Object} body Stageplan update.
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	patchCasemanagementCaseplanStageplan(caseplanId, stageplanId, body, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'caseplanId' is set
		if (caseplanId === undefined || caseplanId === null || caseplanId === '') {
			throw 'Missing the required parameter "caseplanId" when calling patchCasemanagementCaseplanStageplan';
		}
		// verify the required parameter 'stageplanId' is set
		if (stageplanId === undefined || stageplanId === null || stageplanId === '') {
			throw 'Missing the required parameter "stageplanId" when calling patchCasemanagementCaseplanStageplan';
		}
		// verify the required parameter 'body' is set
		if (body === undefined || body === null) {
			throw 'Missing the required parameter "body" when calling patchCasemanagementCaseplanStageplan';
		}

		return this.apiClient.callApi(
			'/api/v2/casemanagement/caseplans/{caseplanId}/stageplans/{stageplanId}', 
			'PATCH', 
			{ 'caseplanId': caseplanId,'stageplanId': stageplanId },
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
	 * Update the attributes of a Stepplan.
	 * 
	 * @param {String} caseplanId Caseplan identifier.
	 * @param {String} stageplanId Stageplan identifier.
	 * @param {String} stepplanId Stepplan identifier.
	 * @param {Object} body Stepplan update.
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	patchCasemanagementCaseplanStageplanStepplan(caseplanId, stageplanId, stepplanId, body, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'caseplanId' is set
		if (caseplanId === undefined || caseplanId === null || caseplanId === '') {
			throw 'Missing the required parameter "caseplanId" when calling patchCasemanagementCaseplanStageplanStepplan';
		}
		// verify the required parameter 'stageplanId' is set
		if (stageplanId === undefined || stageplanId === null || stageplanId === '') {
			throw 'Missing the required parameter "stageplanId" when calling patchCasemanagementCaseplanStageplanStepplan';
		}
		// verify the required parameter 'stepplanId' is set
		if (stepplanId === undefined || stepplanId === null || stepplanId === '') {
			throw 'Missing the required parameter "stepplanId" when calling patchCasemanagementCaseplanStageplanStepplan';
		}
		// verify the required parameter 'body' is set
		if (body === undefined || body === null) {
			throw 'Missing the required parameter "body" when calling patchCasemanagementCaseplanStageplanStepplan';
		}

		return this.apiClient.callApi(
			'/api/v2/casemanagement/caseplans/{caseplanId}/stageplans/{stageplanId}/stepplans/{stepplanId}', 
			'PATCH', 
			{ 'caseplanId': caseplanId,'stageplanId': stageplanId,'stepplanId': stepplanId },
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
	 * Create a Case association.
	 * 
	 * @param {String} caseId Case identifier.
	 * @param {Object} body Case association create request.
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	postCasemanagementCaseAssociations(caseId, body, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'caseId' is set
		if (caseId === undefined || caseId === null || caseId === '') {
			throw 'Missing the required parameter "caseId" when calling postCasemanagementCaseAssociations';
		}
		// verify the required parameter 'body' is set
		if (body === undefined || body === null) {
			throw 'Missing the required parameter "body" when calling postCasemanagementCaseAssociations';
		}

		return this.apiClient.callApi(
			'/api/v2/casemanagement/cases/{caseId}/associations', 
			'POST', 
			{ 'caseId': caseId },
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
	 * Add a comment to a Case.
	 * 
	 * @param {String} caseId Case identifier.
	 * @param {Object} body Comment create request.
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	postCasemanagementCaseComments(caseId, body, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'caseId' is set
		if (caseId === undefined || caseId === null || caseId === '') {
			throw 'Missing the required parameter "caseId" when calling postCasemanagementCaseComments';
		}
		// verify the required parameter 'body' is set
		if (body === undefined || body === null) {
			throw 'Missing the required parameter "body" when calling postCasemanagementCaseComments';
		}

		return this.apiClient.callApi(
			'/api/v2/casemanagement/cases/{caseId}/comments', 
			'POST', 
			{ 'caseId': caseId },
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
	 * Create a Terminate Job for a Case.
	 * 
	 * @param {String} caseId Case identifier.
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	postCasemanagementCaseTerminateJobs(caseId, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'caseId' is set
		if (caseId === undefined || caseId === null || caseId === '') {
			throw 'Missing the required parameter "caseId" when calling postCasemanagementCaseTerminateJobs';
		}

		return this.apiClient.callApi(
			'/api/v2/casemanagement/cases/{caseId}/terminate/jobs', 
			'POST', 
			{ 'caseId': caseId },
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
	 * Add a data schema to a draft Caseplan.
	 * 
	 * @param {String} caseplanId Caseplan identifier.
	 * @param {Object} body Data schema reference.
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	postCasemanagementCaseplanDataschemas(caseplanId, body, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'caseplanId' is set
		if (caseplanId === undefined || caseplanId === null || caseplanId === '') {
			throw 'Missing the required parameter "caseplanId" when calling postCasemanagementCaseplanDataschemas';
		}
		// verify the required parameter 'body' is set
		if (body === undefined || body === null) {
			throw 'Missing the required parameter "body" when calling postCasemanagementCaseplanDataschemas';
		}

		return this.apiClient.callApi(
			'/api/v2/casemanagement/caseplans/{caseplanId}/dataschemas', 
			'POST', 
			{ 'caseplanId': caseplanId },
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
	 * Publish Caseplan.
	 * 
	 * @param {String} caseplanId Caseplan identifier.
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	postCasemanagementCaseplanPublish(caseplanId, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'caseplanId' is set
		if (caseplanId === undefined || caseplanId === null || caseplanId === '') {
			throw 'Missing the required parameter "caseplanId" when calling postCasemanagementCaseplanPublish';
		}

		return this.apiClient.callApi(
			'/api/v2/casemanagement/caseplans/{caseplanId}/publish', 
			'POST', 
			{ 'caseplanId': caseplanId },
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
	 * Create Caseplan version.
	 * 
	 * @param {String} caseplanId Caseplan identifier.
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	postCasemanagementCaseplanVersions(caseplanId, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'caseplanId' is set
		if (caseplanId === undefined || caseplanId === null || caseplanId === '') {
			throw 'Missing the required parameter "caseplanId" when calling postCasemanagementCaseplanVersions';
		}

		return this.apiClient.callApi(
			'/api/v2/casemanagement/caseplans/{caseplanId}/versions', 
			'POST', 
			{ 'caseplanId': caseplanId },
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
	 * Create a Caseplan.
	 * 
	 * @param {Object} body Caseplan create request.
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	postCasemanagementCaseplans(body, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'body' is set
		if (body === undefined || body === null) {
			throw 'Missing the required parameter "body" when calling postCasemanagementCaseplans';
		}

		return this.apiClient.callApi(
			'/api/v2/casemanagement/caseplans', 
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
	 * Query for Caseplans.
	 * This endpoint supports two filtering modes. The recommended approach uses filters (generic filter model) and attributes (field projection). During the migration period, the legacy fields name, nameSearchType, and divisionIds remain available as an alternative.
	 * @param {Object} body Caseplan query request.
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	postCasemanagementCaseplansQuery(body, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'body' is set
		if (body === undefined || body === null) {
			throw 'Missing the required parameter "body" when calling postCasemanagementCaseplansQuery';
		}

		return this.apiClient.callApi(
			'/api/v2/casemanagement/caseplans/query', 
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
	 * Create a Case.
	 * 
	 * @param {Object} body Case create request.
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	postCasemanagementCases(body, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'body' is set
		if (body === undefined || body === null) {
			throw 'Missing the required parameter "body" when calling postCasemanagementCases';
		}

		return this.apiClient.callApi(
			'/api/v2/casemanagement/cases', 
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
	 * Query for Case associations by interaction.
	 * 
	 * @param {Object} body Case association query request.
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	postCasemanagementCasesAssociationsQuery(body, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'body' is set
		if (body === undefined || body === null) {
			throw 'Missing the required parameter "body" when calling postCasemanagementCasesAssociationsQuery';
		}

		return this.apiClient.callApi(
			'/api/v2/casemanagement/cases/associations/query', 
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
	 * Create a Case query job.
	 * 
	 * @param {Object} body Case query job create request.
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 * postCasemanagementCasesQueryJobs is a preview method and is subject to both breaking and non-breaking changes at any time without notice
	 */
	postCasemanagementCasesQueryJobs(body, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'body' is set
		if (body === undefined || body === null) {
			throw 'Missing the required parameter "body" when calling postCasemanagementCasesQueryJobs';
		}

		return this.apiClient.callApi(
			'/api/v2/casemanagement/cases/query/jobs', 
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
	 * Update a data schema on a draft Caseplan.
	 * 
	 * @param {String} caseplanId Caseplan identifier.
	 * @param {String} schemaKeyName Schema key (for example default).
	 * @param {Object} body Data schema reference.
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	putCasemanagementCaseplanDataschema(caseplanId, schemaKeyName, body, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'caseplanId' is set
		if (caseplanId === undefined || caseplanId === null || caseplanId === '') {
			throw 'Missing the required parameter "caseplanId" when calling putCasemanagementCaseplanDataschema';
		}
		// verify the required parameter 'schemaKeyName' is set
		if (schemaKeyName === undefined || schemaKeyName === null || schemaKeyName === '') {
			throw 'Missing the required parameter "schemaKeyName" when calling putCasemanagementCaseplanDataschema';
		}
		// verify the required parameter 'body' is set
		if (body === undefined || body === null) {
			throw 'Missing the required parameter "body" when calling putCasemanagementCaseplanDataschema';
		}

		return this.apiClient.callApi(
			'/api/v2/casemanagement/caseplans/{caseplanId}/dataschemas/{schemaKeyName}', 
			'PUT', 
			{ 'caseplanId': caseplanId,'schemaKeyName': schemaKeyName },
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
	 * Update the intake settings for a Caseplan.
	 * 
	 * @param {String} caseplanId Caseplan identifier.
	 * @param {Object} body Intake settings update.
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	putCasemanagementCaseplanIntakesettings(caseplanId, body, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'caseplanId' is set
		if (caseplanId === undefined || caseplanId === null || caseplanId === '') {
			throw 'Missing the required parameter "caseplanId" when calling putCasemanagementCaseplanIntakesettings';
		}
		// verify the required parameter 'body' is set
		if (body === undefined || body === null) {
			throw 'Missing the required parameter "body" when calling putCasemanagementCaseplanIntakesettings';
		}

		return this.apiClient.callApi(
			'/api/v2/casemanagement/caseplans/{caseplanId}/intakesettings', 
			'PUT', 
			{ 'caseplanId': caseplanId },
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


export default CaseManagementApi;
