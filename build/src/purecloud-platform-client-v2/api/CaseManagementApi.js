import ApiClient from '../ApiClient.js';


class CaseManagementApi {
	/**
	 * CaseManagement service.
	 * @module purecloud-platform-client-v2/api/CaseManagementApi
	 * @version 249.0.0
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
	 * @param {String} caseId Case ID
	 * deleteCasemanagementCase is a preview method and is subject to both breaking and non-breaking changes at any time without notice
	 */
	deleteCasemanagementCase(caseId) { 
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
			['application/json']
		);
	}

	/**
	 * Delete a Caseplan.
	 * 
	 * @param {String} caseplanId Caseplan ID
	 * deleteCasemanagementCaseplan is a preview method and is subject to both breaking and non-breaking changes at any time without notice
	 */
	deleteCasemanagementCaseplan(caseplanId) { 
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
			['application/json']
		);
	}

	/**
	 * Get a Case.
	 * 
	 * @param {String} caseId Case ID
	 * @param {Object} opts Optional parameters
	 * @param {Object} opts.expands Which fields to expand.
	 * getCasemanagementCase is a preview method and is subject to both breaking and non-breaking changes at any time without notice
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
	 * Get a Case Association.
	 * 
	 * @param {String} caseId Case ID
	 * @param {String} associationId Case Association ID
	 * getCasemanagementCaseAssociation is a preview method and is subject to both breaking and non-breaking changes at any time without notice
	 */
	getCasemanagementCaseAssociation(caseId, associationId) { 
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
			['application/json']
		);
	}

	/**
	 * Get a list of case associations for a provided case.
	 * 
	 * @param {String} caseId Case ID.
	 * @param {Object} opts Optional parameters
	 * @param {String} opts.before The cursor that points to the start of the set of entities that has been returned.
	 * @param {String} opts.after The cursor that points to the end of the set of entities that has been returned.
	 * @param {String} opts.pageSize Number of entities to return. Maximum of 200.
	 * getCasemanagementCaseAssociations is a preview method and is subject to both breaking and non-breaking changes at any time without notice
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
			['application/json']
		);
	}

	/**
	 * Get a Stage.
	 * 
	 * @param {String} caseId Case ID
	 * @param {String} stageId Stage ID
	 * getCasemanagementCaseStage is a preview method and is subject to both breaking and non-breaking changes at any time without notice
	 */
	getCasemanagementCaseStage(caseId, stageId) { 
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
			['application/json']
		);
	}

	/**
	 * Get a Step.
	 * 
	 * @param {String} caseId Case ID
	 * @param {String} stageId Stage ID
	 * @param {String} stepId Step ID
	 * getCasemanagementCaseStageStep is a preview method and is subject to both breaking and non-breaking changes at any time without notice
	 */
	getCasemanagementCaseStageStep(caseId, stageId, stepId) { 
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
			['application/json']
		);
	}

	/**
	 * Get a list of Steps.
	 * 
	 * @param {String} caseId Case ID
	 * @param {String} stageId Stage ID
	 * @param {Object} opts Optional parameters
	 * @param {String} opts.before The cursor that points to the start of the set of entities that has been returned.
	 * @param {String} opts.after The cursor that points to the end of the set of entities that has been returned.
	 * @param {String} opts.pageSize Number of entities to return. Maximum of 200.
	 * getCasemanagementCaseStageSteps is a preview method and is subject to both breaking and non-breaking changes at any time without notice
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
			['application/json']
		);
	}

	/**
	 * Get a list of Stages.
	 * 
	 * @param {String} caseId Case ID
	 * @param {Object} opts Optional parameters
	 * @param {String} opts.before The cursor that points to the start of the set of entities that has been returned.
	 * @param {String} opts.after The cursor that points to the end of the set of entities that has been returned.
	 * @param {String} opts.pageSize Number of entities to return. Maximum of 200.
	 * getCasemanagementCaseStages is a preview method and is subject to both breaking and non-breaking changes at any time without notice
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
			['application/json']
		);
	}

	/**
	 * Get a Terminate Job for a Case.
	 * 
	 * @param {String} caseId Case ID
	 * @param {String} jobId Job ID
	 * getCasemanagementCaseTerminateJob is a preview method and is subject to both breaking and non-breaking changes at any time without notice
	 */
	getCasemanagementCaseTerminateJob(caseId, jobId) { 
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
			['application/json']
		);
	}

	/**
	 * Get a Caseplan.
	 * 
	 * @param {String} caseplanId Caseplan ID
	 * getCasemanagementCaseplan is a preview method and is subject to both breaking and non-breaking changes at any time without notice
	 */
	getCasemanagementCaseplan(caseplanId) { 
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
			['application/json']
		);
	}

	/**
	 * Get a Caseplan version.
	 * 
	 * @param {String} caseplanId Caseplan ID
	 * @param {String} versionId Version of the caseplan
	 * getCasemanagementCaseplanVersion is a preview method and is subject to both breaking and non-breaking changes at any time without notice
	 */
	getCasemanagementCaseplanVersion(caseplanId, versionId) { 
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
			['application/json']
		);
	}

	/**
	 * Get the dataSchemas for a caseplan version.
	 * 
	 * @param {String} caseplanId Caseplan ID
	 * @param {String} versionId Version of the caseplan
	 * getCasemanagementCaseplanVersionDataschemas is a preview method and is subject to both breaking and non-breaking changes at any time without notice
	 */
	getCasemanagementCaseplanVersionDataschemas(caseplanId, versionId) { 
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
			['application/json']
		);
	}

	/**
	 * Get the intake settings for a Caseplan version.
	 * 
	 * @param {String} caseplanId Caseplan ID
	 * @param {String} versionId Version of the caseplan
	 * getCasemanagementCaseplanVersionIntakesettings is a preview method and is subject to both breaking and non-breaking changes at any time without notice
	 */
	getCasemanagementCaseplanVersionIntakesettings(caseplanId, versionId) { 
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
			['application/json']
		);
	}

	/**
	 * Get a Stageplan.
	 * 
	 * @param {String} caseplanId Caseplan ID
	 * @param {String} versionId Version ID
	 * @param {String} stageplanId Stageplan ID
	 * @param {Object} opts Optional parameters
	 * @param {Array.<String>} opts.expands Which fields to expand.
	 * getCasemanagementCaseplanVersionStageplan is a preview method and is subject to both breaking and non-breaking changes at any time without notice
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
			['application/json']
		);
	}

	/**
	 * Get a Stepplan.
	 * 
	 * @param {String} caseplanId Caseplan ID
	 * @param {String} versionId Version ID
	 * @param {String} stageplanId Stageplan ID
	 * @param {String} stepplanId Stepplan ID
	 * @param {Object} opts Optional parameters
	 * @param {Array.<String>} opts.expands Which fields to expand.
	 * getCasemanagementCaseplanVersionStageplanStepplan is a preview method and is subject to both breaking and non-breaking changes at any time without notice
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
			['application/json']
		);
	}

	/**
	 * Get a list of Stepplans.
	 * 
	 * @param {String} caseplanId Caseplan ID
	 * @param {String} versionId Version ID
	 * @param {String} stageplanId Stageplan ID
	 * @param {Object} opts Optional parameters
	 * @param {String} opts.before The cursor that points to the start of the set of entities that has been returned.
	 * @param {String} opts.after The cursor that points to the end of the set of entities that has been returned.
	 * @param {String} opts.pageSize Number of entities to return. Maximum of 200.
	 * @param {Array.<String>} opts.expands Which fields to expand.
	 * getCasemanagementCaseplanVersionStageplanStepplans is a preview method and is subject to both breaking and non-breaking changes at any time without notice
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
			['application/json']
		);
	}

	/**
	 * Get a list of Stageplans.
	 * 
	 * @param {String} caseplanId Caseplan ID
	 * @param {String} versionId Version ID
	 * @param {Object} opts Optional parameters
	 * @param {String} opts.before The cursor that points to the start of the set of entities that has been returned.
	 * @param {String} opts.after The cursor that points to the end of the set of entities that has been returned.
	 * @param {String} opts.pageSize Number of entities to return. Maximum of 200.
	 * @param {Array.<String>} opts.expands Which fields to expand.
	 * getCasemanagementCaseplanVersionStageplans is a preview method and is subject to both breaking and non-breaking changes at any time without notice
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
			['application/json']
		);
	}

	/**
	 * Get a list of Caseplans.
	 * 
	 * @param {Object} opts Optional parameters
	 * @param {String} opts.after The cursor that points to the end of the set of caseplans that has been returned.
	 * @param {Number} opts.pageSize Number of caseplans to return. Maximum of 200.
	 * @param {String} opts.customerIntentId Filter by Customer Intent.
	 * @param {String} opts.divisionIds Filter by Divisions.
	 * getCasemanagementCaseplans is a preview method and is subject to both breaking and non-breaking changes at any time without notice
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
			['application/json']
		);
	}

	/**
	 * Get a list of cases for provided external contact id.
	 * 
	 * @param {String} externalContactId External Contact ID
	 * @param {Object} opts Optional parameters
	 * @param {String} opts.after The cursor that points to the end of the set of cases that has been returned.
	 * @param {Number} opts.pageSize Number of cases to return. Maximum of 200.
	 * @param {String} opts.divisionIds Filter by Divisions
	 * @param {Array.<String>} opts.expands Which fields to expand.
	 * getCasemanagementCasesExternalcontact is a preview method and is subject to both breaking and non-breaking changes at any time without notice
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
			['application/json']
		);
	}

	/**
	 * Get a Case by reference.
	 * 
	 * @param {String} referenceId Reference
	 * @param {Object} opts Optional parameters
	 * @param {Object} opts.expands Which fields to expand.
	 * getCasemanagementCasesReference is a preview method and is subject to both breaking and non-breaking changes at any time without notice
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
	 * Update date due of a Case.
	 * 
	 * @param {String} caseId Case ID
	 * @param {Object} body Date due
	 * patchCasemanagementCaseDatedue is a preview method and is subject to both breaking and non-breaking changes at any time without notice
	 */
	patchCasemanagementCaseDatedue(caseId, body) { 
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
			['application/json']
		);
	}

	/**
	 * Update priority of a Case.
	 * 
	 * @param {String} caseId Case ID
	 * @param {Object} body Priority
	 * patchCasemanagementCasePriority is a preview method and is subject to both breaking and non-breaking changes at any time without notice
	 */
	patchCasemanagementCasePriority(caseId, body) { 
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
			['application/json']
		);
	}

	/**
	 * Update summary of a Case.
	 * 
	 * @param {String} caseId Case ID
	 * @param {Object} body Summary
	 * patchCasemanagementCaseSummary is a preview method and is subject to both breaking and non-breaking changes at any time without notice
	 */
	patchCasemanagementCaseSummary(caseId, body) { 
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
			['application/json']
		);
	}

	/**
	 * Update the attributes of a Caseplan.
	 * 
	 * @param {String} caseplanId Caseplan ID
	 * @param {Object} body Caseplan
	 * patchCasemanagementCaseplan is a preview method and is subject to both breaking and non-breaking changes at any time without notice
	 */
	patchCasemanagementCaseplan(caseplanId, body) { 
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
			['application/json']
		);
	}

	/**
	 * Update the attributes of a Stageplan.
	 * 
	 * @param {String} caseplanId Caseplan ID
	 * @param {String} stageplanId Stageplan ID
	 * @param {Object} body Stageplan
	 * patchCasemanagementCaseplanStageplan is a preview method and is subject to both breaking and non-breaking changes at any time without notice
	 */
	patchCasemanagementCaseplanStageplan(caseplanId, stageplanId, body) { 
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
			['application/json']
		);
	}

	/**
	 * Update the attributes of a Stepplan.
	 * 
	 * @param {String} caseplanId Caseplan ID
	 * @param {String} stageplanId Stageplan ID
	 * @param {String} stepplanId Stepplan ID
	 * @param {Object} body Stepplan
	 * patchCasemanagementCaseplanStageplanStepplan is a preview method and is subject to both breaking and non-breaking changes at any time without notice
	 */
	patchCasemanagementCaseplanStageplanStepplan(caseplanId, stageplanId, stepplanId, body) { 
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
			['application/json']
		);
	}

	/**
	 * Create a case association.
	 * 
	 * @param {String} caseId Case ID.
	 * @param {Object} opts Optional parameters
	 * @param {Object} opts.body Case Association
	 * postCasemanagementCaseAssociations is a preview method and is subject to both breaking and non-breaking changes at any time without notice
	 */
	postCasemanagementCaseAssociations(caseId, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'caseId' is set
		if (caseId === undefined || caseId === null || caseId === '') {
			throw 'Missing the required parameter "caseId" when calling postCasemanagementCaseAssociations';
		}

		return this.apiClient.callApi(
			'/api/v2/casemanagement/cases/{caseId}/associations', 
			'POST', 
			{ 'caseId': caseId },
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
	 * Create a Terminate Job for a Case.
	 * 
	 * @param {String} caseId Case ID
	 * postCasemanagementCaseTerminateJobs is a preview method and is subject to both breaking and non-breaking changes at any time without notice
	 */
	postCasemanagementCaseTerminateJobs(caseId) { 
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
			['application/json']
		);
	}

	/**
	 * Publish Caseplan.
	 * 
	 * @param {String} caseplanId Caseplan ID
	 * postCasemanagementCaseplanPublish is a preview method and is subject to both breaking and non-breaking changes at any time without notice
	 */
	postCasemanagementCaseplanPublish(caseplanId) { 
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
			['application/json']
		);
	}

	/**
	 * Create Caseplan version.
	 * 
	 * @param {String} caseplanId Caseplan ID
	 * postCasemanagementCaseplanVersions is a preview method and is subject to both breaking and non-breaking changes at any time without notice
	 */
	postCasemanagementCaseplanVersions(caseplanId) { 
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
			['application/json']
		);
	}

	/**
	 * Create a Caseplan.
	 * 
	 * @param {Object} body Caseplan
	 * postCasemanagementCaseplans is a preview method and is subject to both breaking and non-breaking changes at any time without notice
	 */
	postCasemanagementCaseplans(body) { 
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
			['application/json']
		);
	}

	/**
	 * Create a Case.
	 * 
	 * @param {Object} body Case
	 * postCasemanagementCases is a preview method and is subject to both breaking and non-breaking changes at any time without notice
	 */
	postCasemanagementCases(body) { 
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
			['application/json']
		);
	}

	/**
	 * Query for case associations
	 * 
	 * @param {Object} opts Optional parameters
	 * @param {Object} opts.body Case Association
	 * postCasemanagementCasesAssociationsQuery is a preview method and is subject to both breaking and non-breaking changes at any time without notice
	 */
	postCasemanagementCasesAssociationsQuery(opts) { 
		opts = opts || {};
		

		return this.apiClient.callApi(
			'/api/v2/casemanagement/cases/associations/query', 
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

}


export default CaseManagementApi;
