import ApiClient from '../ApiClient.js';


class RoutingApi {
	/**
	 * Routing service.
	 * @module purecloud-platform-client-v2/api/RoutingApi
	 * @version 252.1.0
	 */

	/**
	 * Constructs a new RoutingApi. 
	 * @alias module:purecloud-platform-client-v2/api/RoutingApi
	 * @class
	 * @param {module:purecloud-platform-client-v2/ApiClient} apiClient Optional API client implementation to use,
	 * default to {@link module:purecloud-platform-client-v2/ApiClient#instance} if unspecified.
	 */
	constructor(apiClient) {
		this.apiClient = apiClient || ApiClient.instance;
	}


	/**
	 * Delete single benefit assessment.
	 * 
	 * @param {String} assessmentId Benefit Assessment ID
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	deleteRoutingAssessment(assessmentId, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'assessmentId' is set
		if (assessmentId === undefined || assessmentId === null || assessmentId === '') {
			throw 'Missing the required parameter "assessmentId" when calling deleteRoutingAssessment';
		}

		return this.apiClient.callApi(
			'/api/v2/routing/assessments/{assessmentId}', 
			'DELETE', 
			{ 'assessmentId': assessmentId },
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
	 * Delete the user's Direct Routing Backup settings and revert to the Direct Routing Queue default.
	 * 
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	deleteRoutingDirectroutingbackupSettingsMe(opts) { 
		opts = opts || {};
		

		return this.apiClient.callApi(
			'/api/v2/routing/directroutingbackup/settings/me', 
			'DELETE', 
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
	 * Delete a domain
	 * 
	 * @param {String} domainId domain ID
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	deleteRoutingEmailDomain(domainId, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'domainId' is set
		if (domainId === undefined || domainId === null || domainId === '') {
			throw 'Missing the required parameter "domainId" when calling deleteRoutingEmailDomain';
		}

		return this.apiClient.callApi(
			'/api/v2/routing/email/domains/{domainId}', 
			'DELETE', 
			{ 'domainId': domainId },
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
	 * Delete a route
	 * 
	 * @param {String} domainName email domain
	 * @param {String} routeId route ID
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	deleteRoutingEmailDomainRoute(domainName, routeId, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'domainName' is set
		if (domainName === undefined || domainName === null || domainName === '') {
			throw 'Missing the required parameter "domainName" when calling deleteRoutingEmailDomainRoute';
		}
		// verify the required parameter 'routeId' is set
		if (routeId === undefined || routeId === null || routeId === '') {
			throw 'Missing the required parameter "routeId" when calling deleteRoutingEmailDomainRoute';
		}

		return this.apiClient.callApi(
			'/api/v2/routing/email/domains/{domainName}/routes/{routeId}', 
			'DELETE', 
			{ 'domainName': domainName,'routeId': routeId },
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
	 * Delete an outbound domain
	 * 
	 * @param {String} domainId domain ID
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	deleteRoutingEmailOutboundDomain(domainId, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'domainId' is set
		if (domainId === undefined || domainId === null || domainId === '') {
			throw 'Missing the required parameter "domainId" when calling deleteRoutingEmailOutboundDomain';
		}

		return this.apiClient.callApi(
			'/api/v2/routing/email/outbound/domains/{domainId}', 
			'DELETE', 
			{ 'domainId': domainId },
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
	 * Delete a routing language
	 * 
	 * @param {String} languageId Language ID
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	deleteRoutingLanguage(languageId, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'languageId' is set
		if (languageId === undefined || languageId === null || languageId === '') {
			throw 'Missing the required parameter "languageId" when calling deleteRoutingLanguage';
		}

		return this.apiClient.callApi(
			'/api/v2/routing/languages/{languageId}', 
			'DELETE', 
			{ 'languageId': languageId },
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
	 * Delete single predictor.
	 * 
	 * @param {String} predictorId Predictor ID
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	deleteRoutingPredictor(predictorId, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'predictorId' is set
		if (predictorId === undefined || predictorId === null || predictorId === '') {
			throw 'Missing the required parameter "predictorId" when calling deleteRoutingPredictor';
		}

		return this.apiClient.callApi(
			'/api/v2/routing/predictors/{predictorId}', 
			'DELETE', 
			{ 'predictorId': predictorId },
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
	 * Delete a custom Key Performance Indicator.
	 * 
	 * @param {String} kpiId Key Performance Indicator ID
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 * deleteRoutingPredictorsKeyperformanceindicator is a preview method and is subject to both breaking and non-breaking changes at any time without notice
	 */
	deleteRoutingPredictorsKeyperformanceindicator(kpiId, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'kpiId' is set
		if (kpiId === undefined || kpiId === null || kpiId === '') {
			throw 'Missing the required parameter "kpiId" when calling deleteRoutingPredictorsKeyperformanceindicator';
		}

		return this.apiClient.callApi(
			'/api/v2/routing/predictors/keyperformanceindicators/{kpiId}', 
			'DELETE', 
			{ 'kpiId': kpiId },
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
	 * Delete a queue
	 * 
	 * @param {String} queueId Queue ID
	 * @param {Object} opts Optional parameters
	 * @param {Boolean} opts.forceDelete forceDelete
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	deleteRoutingQueue(queueId, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'queueId' is set
		if (queueId === undefined || queueId === null || queueId === '') {
			throw 'Missing the required parameter "queueId" when calling deleteRoutingQueue';
		}

		return this.apiClient.callApi(
			'/api/v2/routing/queues/{queueId}', 
			'DELETE', 
			{ 'queueId': queueId },
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
	 * Delete a queue member.
	 * 
	 * @param {String} queueId Queue ID
	 * @param {String} memberId Member ID
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	deleteRoutingQueueMember(queueId, memberId, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'queueId' is set
		if (queueId === undefined || queueId === null || queueId === '') {
			throw 'Missing the required parameter "queueId" when calling deleteRoutingQueueMember';
		}
		// verify the required parameter 'memberId' is set
		if (memberId === undefined || memberId === null || memberId === '') {
			throw 'Missing the required parameter "memberId" when calling deleteRoutingQueueMember';
		}

		return this.apiClient.callApi(
			'/api/v2/routing/queues/{queueId}/members/{memberId}', 
			'DELETE', 
			{ 'queueId': queueId,'memberId': memberId },
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
	 * DEPRECATED: use DELETE /routing/queues/{queueId}/members/{memberId}.  Delete queue member.
	 * 
	 * @param {String} queueId Queue ID
	 * @param {String} memberId Member ID
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 * @deprecated
	 */
	deleteRoutingQueueUser(queueId, memberId, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'queueId' is set
		if (queueId === undefined || queueId === null || queueId === '') {
			throw 'Missing the required parameter "queueId" when calling deleteRoutingQueueUser';
		}
		// verify the required parameter 'memberId' is set
		if (memberId === undefined || memberId === null || memberId === '') {
			throw 'Missing the required parameter "memberId" when calling deleteRoutingQueueUser';
		}

		return this.apiClient.callApi(
			'/api/v2/routing/queues/{queueId}/users/{memberId}', 
			'DELETE', 
			{ 'queueId': queueId,'memberId': memberId },
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
	 * Delete a wrap-up code from a queue
	 * 
	 * @param {String} queueId Queue ID
	 * @param {String} codeId Code ID
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	deleteRoutingQueueWrapupcode(queueId, codeId, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'queueId' is set
		if (queueId === undefined || queueId === null || queueId === '') {
			throw 'Missing the required parameter "queueId" when calling deleteRoutingQueueWrapupcode';
		}
		// verify the required parameter 'codeId' is set
		if (codeId === undefined || codeId === null || codeId === '') {
			throw 'Missing the required parameter "codeId" when calling deleteRoutingQueueWrapupcode';
		}

		return this.apiClient.callApi(
			'/api/v2/routing/queues/{queueId}/wrapupcodes/{codeId}', 
			'DELETE', 
			{ 'queueId': queueId,'codeId': codeId },
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
	 * Delete an organization's routing settings
	 * 
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	deleteRoutingSettings(opts) { 
		opts = opts || {};
		

		return this.apiClient.callApi(
			'/api/v2/routing/settings', 
			'DELETE', 
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
	 * Delete Routing Skill
	 * 
	 * @param {String} skillId Skill ID
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	deleteRoutingSkill(skillId, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'skillId' is set
		if (skillId === undefined || skillId === null || skillId === '') {
			throw 'Missing the required parameter "skillId" when calling deleteRoutingSkill';
		}

		return this.apiClient.callApi(
			'/api/v2/routing/skills/{skillId}', 
			'DELETE', 
			{ 'skillId': skillId },
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
	 * Remove skill group definition
	 * 
	 * @param {String} skillGroupId Skill Group ID
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	deleteRoutingSkillgroup(skillGroupId, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'skillGroupId' is set
		if (skillGroupId === undefined || skillGroupId === null || skillGroupId === '') {
			throw 'Missing the required parameter "skillGroupId" when calling deleteRoutingSkillgroup';
		}

		return this.apiClient.callApi(
			'/api/v2/routing/skillgroups/{skillGroupId}', 
			'DELETE', 
			{ 'skillGroupId': skillGroupId },
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
	 * Delete an Address by Id for SMS
	 * 
	 * @param {String} addressId Address ID
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	deleteRoutingSmsAddress(addressId, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'addressId' is set
		if (addressId === undefined || addressId === null || addressId === '') {
			throw 'Missing the required parameter "addressId" when calling deleteRoutingSmsAddress';
		}

		return this.apiClient.callApi(
			'/api/v2/routing/sms/addresses/{addressId}', 
			'DELETE', 
			{ 'addressId': addressId },
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
	 * Delete a phone number provisioned for SMS.
	 * 
	 * @param {String} phoneNumberId phone number
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	deleteRoutingSmsPhonenumber(phoneNumberId, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'phoneNumberId' is set
		if (phoneNumberId === undefined || phoneNumberId === null || phoneNumberId === '') {
			throw 'Missing the required parameter "phoneNumberId" when calling deleteRoutingSmsPhonenumber';
		}

		return this.apiClient.callApi(
			'/api/v2/routing/sms/phonenumbers/{phoneNumberId}', 
			'DELETE', 
			{ 'phoneNumberId': phoneNumberId },
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
	 * Delete the user's Direct Routing Backup settings and revert to the Direct Routing Queue default.
	 * 
	 * @param {String} userId User ID
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	deleteRoutingUserDirectroutingbackupSettings(userId, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'userId' is set
		if (userId === undefined || userId === null || userId === '') {
			throw 'Missing the required parameter "userId" when calling deleteRoutingUserDirectroutingbackupSettings';
		}

		return this.apiClient.callApi(
			'/api/v2/routing/users/{userId}/directroutingbackup/settings', 
			'DELETE', 
			{ 'userId': userId },
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
	 * Delete the user's max utilization settings and revert to the organization-wide default.
	 * 
	 * @param {String} userId User ID
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	deleteRoutingUserUtilization(userId, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'userId' is set
		if (userId === undefined || userId === null || userId === '') {
			throw 'Missing the required parameter "userId" when calling deleteRoutingUserUtilization';
		}

		return this.apiClient.callApi(
			'/api/v2/routing/users/{userId}/utilization', 
			'DELETE', 
			{ 'userId': userId },
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
	 * Delete the organization-wide max utilization settings and revert to the system default.
	 * 
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	deleteRoutingUtilization(opts) { 
		opts = opts || {};
		

		return this.apiClient.callApi(
			'/api/v2/routing/utilization', 
			'DELETE', 
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
	 * Delete a utilization label
	 * 
	 * @param {String} labelId Utilization Label ID
	 * @param {Object} opts Optional parameters
	 * @param {Boolean} opts.forceDelete Remove all label usages (if found) without warning (default to false)
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	deleteRoutingUtilizationLabel(labelId, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'labelId' is set
		if (labelId === undefined || labelId === null || labelId === '') {
			throw 'Missing the required parameter "labelId" when calling deleteRoutingUtilizationLabel';
		}

		return this.apiClient.callApi(
			'/api/v2/routing/utilization/labels/{labelId}', 
			'DELETE', 
			{ 'labelId': labelId },
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
	 * Delete an utilization tag
	 * 
	 * @param {String} tagId Utilization Tag ID
	 * @param {Object} opts Optional parameters
	 * @param {Boolean} opts.forceDelete Remove all tag usages (if found) without warning (default to false)
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 * deleteRoutingUtilizationTag is a preview method and is subject to both breaking and non-breaking changes at any time without notice
	 */
	deleteRoutingUtilizationTag(tagId, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'tagId' is set
		if (tagId === undefined || tagId === null || tagId === '') {
			throw 'Missing the required parameter "tagId" when calling deleteRoutingUtilizationTag';
		}

		return this.apiClient.callApi(
			'/api/v2/routing/utilization/tags/{tagId}', 
			'DELETE', 
			{ 'tagId': tagId },
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
	 * Delete wrap-up code
	 * 
	 * @param {String} codeId Wrapup Code ID
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	deleteRoutingWrapupcode(codeId, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'codeId' is set
		if (codeId === undefined || codeId === null || codeId === '') {
			throw 'Missing the required parameter "codeId" when calling deleteRoutingWrapupcode';
		}

		return this.apiClient.callApi(
			'/api/v2/routing/wrapupcodes/{codeId}', 
			'DELETE', 
			{ 'codeId': codeId },
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
	 * Remove a routing language from a user
	 * 
	 * @param {String} userId User ID
	 * @param {String} languageId languageId
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	deleteUserRoutinglanguage(userId, languageId, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'userId' is set
		if (userId === undefined || userId === null || userId === '') {
			throw 'Missing the required parameter "userId" when calling deleteUserRoutinglanguage';
		}
		// verify the required parameter 'languageId' is set
		if (languageId === undefined || languageId === null || languageId === '') {
			throw 'Missing the required parameter "languageId" when calling deleteUserRoutinglanguage';
		}

		return this.apiClient.callApi(
			'/api/v2/users/{userId}/routinglanguages/{languageId}', 
			'DELETE', 
			{ 'userId': userId,'languageId': languageId },
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
	 * Remove a routing skill from a user
	 * 
	 * @param {String} userId User ID
	 * @param {String} skillId skillId
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	deleteUserRoutingskill(userId, skillId, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'userId' is set
		if (userId === undefined || userId === null || userId === '') {
			throw 'Missing the required parameter "userId" when calling deleteUserRoutingskill';
		}
		// verify the required parameter 'skillId' is set
		if (skillId === undefined || skillId === null || skillId === '') {
			throw 'Missing the required parameter "skillId" when calling deleteUserRoutingskill';
		}

		return this.apiClient.callApi(
			'/api/v2/users/{userId}/routingskills/{skillId}', 
			'DELETE', 
			{ 'userId': userId,'skillId': skillId },
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
	 * Retrieve a single benefit assessment.
	 * 
	 * @param {String} assessmentId Benefit Assessment ID
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	getRoutingAssessment(assessmentId, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'assessmentId' is set
		if (assessmentId === undefined || assessmentId === null || assessmentId === '') {
			throw 'Missing the required parameter "assessmentId" when calling getRoutingAssessment';
		}

		return this.apiClient.callApi(
			'/api/v2/routing/assessments/{assessmentId}', 
			'GET', 
			{ 'assessmentId': assessmentId },
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
	 * Retrieve all benefit assessments.
	 * 
	 * @param {Object} opts Optional parameters
	 * @param {String} opts.before The cursor that points to the start of the set of entities that has been returned.
	 * @param {String} opts.after The cursor that points to the end of the set of entities that has been returned.
	 * @param {String} opts.limit Number of entities to return. Maximum of 200. Deprecated in favour of pageSize
	 * @param {String} opts.pageSize Number of entities to return. Maximum of 200.
	 * @param {Array.<String>} opts.queueId Queue ID(s) to filter assessments by.
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	getRoutingAssessments(opts) { 
		opts = opts || {};
		

		return this.apiClient.callApi(
			'/api/v2/routing/assessments', 
			'GET', 
			{  },
			{ 'before': opts['before'],'after': opts['after'],'limit': opts['limit'],'pageSize': opts['pageSize'],'queueId': this.apiClient.buildCollectionParam(opts['queueId'], 'multi') },
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
	 * Retrieve a single benefit assessments job.
	 * 
	 * @param {String} jobId Benefit Assessment Job ID
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	getRoutingAssessmentsJob(jobId, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'jobId' is set
		if (jobId === undefined || jobId === null || jobId === '') {
			throw 'Missing the required parameter "jobId" when calling getRoutingAssessmentsJob';
		}

		return this.apiClient.callApi(
			'/api/v2/routing/assessments/jobs/{jobId}', 
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
	 * Retrieve all benefit assessment jobs.
	 * 
	 * @param {Object} opts Optional parameters
	 * @param {Array.<String>} opts.divisionId Division ID(s) to filter assessment jobs by.
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	getRoutingAssessmentsJobs(opts) { 
		opts = opts || {};
		

		return this.apiClient.callApi(
			'/api/v2/routing/assessments/jobs', 
			'GET', 
			{  },
			{ 'divisionId': this.apiClient.buildCollectionParam(opts['divisionId'], 'multi') },
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
	 * Get available media types
	 * 
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	getRoutingAvailablemediatypes(opts) { 
		opts = opts || {};
		

		return this.apiClient.callApi(
			'/api/v2/routing/availablemediatypes', 
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
	 * Get the user's Direct Routing Backup settings.
	 * 
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	getRoutingDirectroutingbackupSettingsMe(opts) { 
		opts = opts || {};
		

		return this.apiClient.callApi(
			'/api/v2/routing/directroutingbackup/settings/me', 
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
	 * Get domain
	 * 
	 * @param {String} domainId domain ID
	 * @param {Object} opts Optional parameters
	 * @param {Object} opts.expand Expand options. Valid values: settings
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	getRoutingEmailDomain(domainId, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'domainId' is set
		if (domainId === undefined || domainId === null || domainId === '') {
			throw 'Missing the required parameter "domainId" when calling getRoutingEmailDomain';
		}

		return this.apiClient.callApi(
			'/api/v2/routing/email/domains/{domainId}', 
			'GET', 
			{ 'domainId': domainId },
			{ 'expand': opts['expand'] },
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
	 * Get domain dkim settings
	 * 
	 * @param {String} domainId domain ID
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	getRoutingEmailDomainDkim(domainId, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'domainId' is set
		if (domainId === undefined || domainId === null || domainId === '') {
			throw 'Missing the required parameter "domainId" when calling getRoutingEmailDomainDkim';
		}

		return this.apiClient.callApi(
			'/api/v2/routing/email/domains/{domainId}/dkim', 
			'GET', 
			{ 'domainId': domainId },
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
	 * Get domain mail from settings
	 * 
	 * @param {String} domainId domain ID
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	getRoutingEmailDomainMailfrom(domainId, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'domainId' is set
		if (domainId === undefined || domainId === null || domainId === '') {
			throw 'Missing the required parameter "domainId" when calling getRoutingEmailDomainMailfrom';
		}

		return this.apiClient.callApi(
			'/api/v2/routing/email/domains/{domainId}/mailfrom', 
			'GET', 
			{ 'domainId': domainId },
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
	 * Get a route
	 * 
	 * @param {String} domainName email domain
	 * @param {String} routeId route ID
	 * @param {Object} opts Optional parameters
	 * @param {Array.<String>} opts.expand Which fields, if any, to expand
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	getRoutingEmailDomainRoute(domainName, routeId, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'domainName' is set
		if (domainName === undefined || domainName === null || domainName === '') {
			throw 'Missing the required parameter "domainName" when calling getRoutingEmailDomainRoute';
		}
		// verify the required parameter 'routeId' is set
		if (routeId === undefined || routeId === null || routeId === '') {
			throw 'Missing the required parameter "routeId" when calling getRoutingEmailDomainRoute';
		}

		return this.apiClient.callApi(
			'/api/v2/routing/email/domains/{domainName}/routes/{routeId}', 
			'GET', 
			{ 'domainName': domainName,'routeId': routeId },
			{ 'expand': this.apiClient.buildCollectionParam(opts['expand'], 'multi') },
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
	 * Get a route identity resolution setting.
	 * 
	 * @param {String} domainName email domain
	 * @param {String} routeId route ID
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	getRoutingEmailDomainRouteIdentityresolution(domainName, routeId, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'domainName' is set
		if (domainName === undefined || domainName === null || domainName === '') {
			throw 'Missing the required parameter "domainName" when calling getRoutingEmailDomainRouteIdentityresolution';
		}
		// verify the required parameter 'routeId' is set
		if (routeId === undefined || routeId === null || routeId === '') {
			throw 'Missing the required parameter "routeId" when calling getRoutingEmailDomainRouteIdentityresolution';
		}

		return this.apiClient.callApi(
			'/api/v2/routing/email/domains/{domainName}/routes/{routeId}/identityresolution', 
			'GET', 
			{ 'domainName': domainName,'routeId': routeId },
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
	 * Get routes
	 * 
	 * @param {String} domainName email domain
	 * @param {Object} opts Optional parameters
	 * @param {Number} opts.pageSize Page size (default to 25)
	 * @param {Number} opts.pageNumber Page number (default to 1)
	 * @param {String} opts.pattern Filter routes by the route's pattern property
	 * @param {Array.<String>} opts.expand Which fields, if any, to expand
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	getRoutingEmailDomainRoutes(domainName, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'domainName' is set
		if (domainName === undefined || domainName === null || domainName === '') {
			throw 'Missing the required parameter "domainName" when calling getRoutingEmailDomainRoutes';
		}

		return this.apiClient.callApi(
			'/api/v2/routing/email/domains/{domainName}/routes', 
			'GET', 
			{ 'domainName': domainName },
			{ 'pageSize': opts['pageSize'],'pageNumber': opts['pageNumber'],'pattern': opts['pattern'],'expand': this.apiClient.buildCollectionParam(opts['expand'], 'multi') },
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
	 * Get domain verification settings
	 * 
	 * @param {String} domainId domain ID
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	getRoutingEmailDomainVerification(domainId, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'domainId' is set
		if (domainId === undefined || domainId === null || domainId === '') {
			throw 'Missing the required parameter "domainId" when calling getRoutingEmailDomainVerification';
		}

		return this.apiClient.callApi(
			'/api/v2/routing/email/domains/{domainId}/verification', 
			'GET', 
			{ 'domainId': domainId },
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
	 * Get domains
	 * 
	 * @param {Object} opts Optional parameters
	 * @param {Number} opts.pageSize Page size (default to 25)
	 * @param {Number} opts.pageNumber Page number (default to 1)
	 * @param {Boolean} opts.excludeStatus Exclude MX record data (default to false)
	 * @param {String} opts.filter Optional search filter that, if defined, use the **filter** syntax, eg: **mySearchedPattern**. Note that **** is considered no filter.
	 * @param {Object} opts.expand Expand options. Valid values: settings
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	getRoutingEmailDomains(opts) { 
		opts = opts || {};
		

		return this.apiClient.callApi(
			'/api/v2/routing/email/domains', 
			'GET', 
			{  },
			{ 'pageSize': opts['pageSize'],'pageNumber': opts['pageNumber'],'excludeStatus': opts['excludeStatus'],'filter': opts['filter'],'expand': opts['expand'] },
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
	 * Get domain
	 * 
	 * @param {String} domainId domain ID
	 * @param {Object} opts Optional parameters
	 * @param {Object} opts.expand Expand options. Valid values: settings
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	getRoutingEmailOutboundDomain(domainId, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'domainId' is set
		if (domainId === undefined || domainId === null || domainId === '') {
			throw 'Missing the required parameter "domainId" when calling getRoutingEmailOutboundDomain';
		}

		return this.apiClient.callApi(
			'/api/v2/routing/email/outbound/domains/{domainId}', 
			'GET', 
			{ 'domainId': domainId },
			{ 'expand': opts['expand'] },
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
	 * Get activation status (cname + dkim) of an outbound domain
	 * 
	 * @param {String} domainId domain ID
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	getRoutingEmailOutboundDomainActivation(domainId, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'domainId' is set
		if (domainId === undefined || domainId === null || domainId === '') {
			throw 'Missing the required parameter "domainId" when calling getRoutingEmailOutboundDomainActivation';
		}

		return this.apiClient.callApi(
			'/api/v2/routing/email/outbound/domains/{domainId}/activation', 
			'GET', 
			{ 'domainId': domainId },
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
	 * Get outbound domains
	 * 
	 * @param {Object} opts Optional parameters
	 * @param {Number} opts.pageSize Page size (default to 25)
	 * @param {Number} opts.pageNumber Page number (default to 1)
	 * @param {String} opts.filter Optional search filter that, if defined, use the **filter** syntax, eg: **mySearchedPattern**. Note that **** is considered no filter.
	 * @param {Object} opts.expand Expand options. Valid values: settings
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	getRoutingEmailOutboundDomains(opts) { 
		opts = opts || {};
		

		return this.apiClient.callApi(
			'/api/v2/routing/email/outbound/domains', 
			'GET', 
			{  },
			{ 'pageSize': opts['pageSize'],'pageNumber': opts['pageNumber'],'filter': opts['filter'],'expand': opts['expand'] },
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
	 * Get email setup
	 * 
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	getRoutingEmailSetup(opts) { 
		opts = opts || {};
		

		return this.apiClient.callApi(
			'/api/v2/routing/email/setup', 
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
	 * Get a routing language
	 * 
	 * @param {String} languageId Language ID
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	getRoutingLanguage(languageId, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'languageId' is set
		if (languageId === undefined || languageId === null || languageId === '') {
			throw 'Missing the required parameter "languageId" when calling getRoutingLanguage';
		}

		return this.apiClient.callApi(
			'/api/v2/routing/languages/{languageId}', 
			'GET', 
			{ 'languageId': languageId },
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
	 * Get the list of supported languages.
	 * 
	 * @param {Object} opts Optional parameters
	 * @param {Number} opts.pageSize Page size (default to 25)
	 * @param {Number} opts.pageNumber Page number (default to 1)
	 * @param {Object} opts.sortOrder Ascending or descending sort order (default to ASC)
	 * @param {String} opts.name Name
	 * @param {Array.<String>} opts.id id
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	getRoutingLanguages(opts) { 
		opts = opts || {};
		

		return this.apiClient.callApi(
			'/api/v2/routing/languages', 
			'GET', 
			{  },
			{ 'pageSize': opts['pageSize'],'pageNumber': opts['pageNumber'],'sortOrder': opts['sortOrder'],'name': opts['name'],'id': this.apiClient.buildCollectionParam(opts['id'], 'multi') },
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
	 * Get a recipient
	 * 
	 * @param {String} recipientId Recipient ID
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	getRoutingMessageRecipient(recipientId, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'recipientId' is set
		if (recipientId === undefined || recipientId === null || recipientId === '') {
			throw 'Missing the required parameter "recipientId" when calling getRoutingMessageRecipient';
		}

		return this.apiClient.callApi(
			'/api/v2/routing/message/recipients/{recipientId}', 
			'GET', 
			{ 'recipientId': recipientId },
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
	 * Get recipients
	 * 
	 * @param {Object} opts Optional parameters
	 * @param {Object} opts.messengerType Messenger Type
	 * @param {String} opts.name Recipient Name
	 * @param {Number} opts.pageSize Page size (default to 25)
	 * @param {Number} opts.pageNumber Page number (default to 1)
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	getRoutingMessageRecipients(opts) { 
		opts = opts || {};
		

		return this.apiClient.callApi(
			'/api/v2/routing/message/recipients', 
			'GET', 
			{  },
			{ 'messengerType': opts['messengerType'],'name': opts['name'],'pageSize': opts['pageSize'],'pageNumber': opts['pageNumber'] },
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
	 * Retrieve a single predictor.
	 * 
	 * @param {String} predictorId Predictor ID
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	getRoutingPredictor(predictorId, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'predictorId' is set
		if (predictorId === undefined || predictorId === null || predictorId === '') {
			throw 'Missing the required parameter "predictorId" when calling getRoutingPredictor';
		}

		return this.apiClient.callApi(
			'/api/v2/routing/predictors/{predictorId}', 
			'GET', 
			{ 'predictorId': predictorId },
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
	 * Retrieve Predictor Model Features.
	 * 
	 * @param {String} predictorId Predictor ID
	 * @param {String} modelId Model ID
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	getRoutingPredictorModelFeatures(predictorId, modelId, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'predictorId' is set
		if (predictorId === undefined || predictorId === null || predictorId === '') {
			throw 'Missing the required parameter "predictorId" when calling getRoutingPredictorModelFeatures';
		}
		// verify the required parameter 'modelId' is set
		if (modelId === undefined || modelId === null || modelId === '') {
			throw 'Missing the required parameter "modelId" when calling getRoutingPredictorModelFeatures';
		}

		return this.apiClient.callApi(
			'/api/v2/routing/predictors/{predictorId}/models/{modelId}/features', 
			'GET', 
			{ 'predictorId': predictorId,'modelId': modelId },
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
	 * Retrieve Predictor Models and Top Features.
	 * 
	 * @param {String} predictorId Predictor ID
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	getRoutingPredictorModels(predictorId, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'predictorId' is set
		if (predictorId === undefined || predictorId === null || predictorId === '') {
			throw 'Missing the required parameter "predictorId" when calling getRoutingPredictorModels';
		}

		return this.apiClient.callApi(
			'/api/v2/routing/predictors/{predictorId}/models', 
			'GET', 
			{ 'predictorId': predictorId },
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
	 * Retrieve all predictors.
	 * 
	 * @param {Object} opts Optional parameters
	 * @param {String} opts.before The cursor that points to the start of the set of entities that has been returned.
	 * @param {String} opts.after The cursor that points to the end of the set of entities that has been returned.
	 * @param {String} opts.limit Number of entities to return. Maximum of 200. Deprecated in favour of pageSize
	 * @param {String} opts.pageSize Number of entities to return. Maximum of 200.
	 * @param {Array.<String>} opts.queueId Comma-separated list of queue Ids to filter by.
	 * @param {String} opts.kpiId Standard or custom KPI id used to filter predictors.
	 * @param {Object} opts.state The state used to filter predictors.
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	getRoutingPredictors(opts) { 
		opts = opts || {};
		

		return this.apiClient.callApi(
			'/api/v2/routing/predictors', 
			'GET', 
			{  },
			{ 'before': opts['before'],'after': opts['after'],'limit': opts['limit'],'pageSize': opts['pageSize'],'queueId': this.apiClient.buildCollectionParam(opts['queueId'], 'multi'),'kpiId': opts['kpiId'],'state': opts['state'] },
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
	 * Retrieve a single Key Performance Indicator.
	 * 
	 * @param {String} kpiId Key Performance Indicator ID
	 * @param {Object} opts Optional parameters
	 * @param {Array.<String>} opts.expand Parameter to request additional data to return in KPI payload
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 * getRoutingPredictorsKeyperformanceindicator is a preview method and is subject to both breaking and non-breaking changes at any time without notice
	 */
	getRoutingPredictorsKeyperformanceindicator(kpiId, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'kpiId' is set
		if (kpiId === undefined || kpiId === null || kpiId === '') {
			throw 'Missing the required parameter "kpiId" when calling getRoutingPredictorsKeyperformanceindicator';
		}

		return this.apiClient.callApi(
			'/api/v2/routing/predictors/keyperformanceindicators/{kpiId}', 
			'GET', 
			{ 'kpiId': kpiId },
			{ 'expand': this.apiClient.buildCollectionParam(opts['expand'], 'multi') },
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
	 * Get a list of Key Performance Indicators
	 * 
	 * @param {Object} opts Optional parameters
	 * @param {Object} opts.kpiGroup The Group of Key Performance Indicators to return
	 * @param {Array.<String>} opts.expand Parameter to request additional data to return in KPI payload
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	getRoutingPredictorsKeyperformanceindicators(opts) { 
		opts = opts || {};
		

		return this.apiClient.callApi(
			'/api/v2/routing/predictors/keyperformanceindicators', 
			'GET', 
			{  },
			{ 'kpiGroup': opts['kpiGroup'],'expand': this.apiClient.buildCollectionParam(opts['expand'], 'multi') },
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
	 * Get a list of Key Performance Indicators Types available.
	 * 
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 * getRoutingPredictorsKeyperformanceindicatortypes is a preview method and is subject to both breaking and non-breaking changes at any time without notice
	 */
	getRoutingPredictorsKeyperformanceindicatortypes(opts) { 
		opts = opts || {};
		

		return this.apiClient.callApi(
			'/api/v2/routing/predictors/keyperformanceindicatortypes', 
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
	 * Get details about this queue.
	 * 
	 * @param {String} queueId Queue ID
	 * @param {Object} opts Optional parameters
	 * @param {Array.<String>} opts.expand Which fields, if any, to expand
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	getRoutingQueue(queueId, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'queueId' is set
		if (queueId === undefined || queueId === null || queueId === '') {
			throw 'Missing the required parameter "queueId" when calling getRoutingQueue';
		}

		return this.apiClient.callApi(
			'/api/v2/routing/queues/{queueId}', 
			'GET', 
			{ 'queueId': queueId },
			{ 'expand': this.apiClient.buildCollectionParam(opts['expand'], 'multi') },
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
	 * Get an assistant associated with a queue.
	 * 
	 * @param {String} queueId Queue ID
	 * @param {Object} opts Optional parameters
	 * @param {Array.<String>} opts.expand Which fields, if any, to expand.
	 * @param {String} opts.languageVariation Language variation
	 * @param {Boolean} opts.fallbackToPrimaryAssistant Fall back to primary assistant if specified variation is not found
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	getRoutingQueueAssistant(queueId, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'queueId' is set
		if (queueId === undefined || queueId === null || queueId === '') {
			throw 'Missing the required parameter "queueId" when calling getRoutingQueueAssistant';
		}

		return this.apiClient.callApi(
			'/api/v2/routing/queues/{queueId}/assistant', 
			'GET', 
			{ 'queueId': queueId },
			{ 'expand': this.apiClient.buildCollectionParam(opts['expand'], 'multi'),'languageVariation': opts['languageVariation'],'fallbackToPrimaryAssistant': opts['fallbackToPrimaryAssistant'] },
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
	 * Get a Comparison Period.
	 * 
	 * @param {String} queueId Queue id
	 * @param {String} comparisonPeriodId ComparisonPeriod id
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	getRoutingQueueComparisonperiod(queueId, comparisonPeriodId, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'queueId' is set
		if (queueId === undefined || queueId === null || queueId === '') {
			throw 'Missing the required parameter "queueId" when calling getRoutingQueueComparisonperiod';
		}
		// verify the required parameter 'comparisonPeriodId' is set
		if (comparisonPeriodId === undefined || comparisonPeriodId === null || comparisonPeriodId === '') {
			throw 'Missing the required parameter "comparisonPeriodId" when calling getRoutingQueueComparisonperiod';
		}

		return this.apiClient.callApi(
			'/api/v2/routing/queues/{queueId}/comparisonperiods/{comparisonPeriodId}', 
			'GET', 
			{ 'queueId': queueId,'comparisonPeriodId': comparisonPeriodId },
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
	 * Get list of comparison periods
	 * 
	 * @param {String} queueId Queue id
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	getRoutingQueueComparisonperiods(queueId, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'queueId' is set
		if (queueId === undefined || queueId === null || queueId === '') {
			throw 'Missing the required parameter "queueId" when calling getRoutingQueueComparisonperiods';
		}

		return this.apiClient.callApi(
			'/api/v2/routing/queues/{queueId}/comparisonperiods', 
			'GET', 
			{ 'queueId': queueId },
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
	 * Get Estimated Wait Time
	 * 
	 * @param {String} queueId queueId
	 * @param {Object} opts Optional parameters
	 * @param {String} opts.conversationId conversationId
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	getRoutingQueueEstimatedwaittime(queueId, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'queueId' is set
		if (queueId === undefined || queueId === null || queueId === '') {
			throw 'Missing the required parameter "queueId" when calling getRoutingQueueEstimatedwaittime';
		}

		return this.apiClient.callApi(
			'/api/v2/routing/queues/{queueId}/estimatedwaittime', 
			'GET', 
			{ 'queueId': queueId },
			{ 'conversationId': opts['conversationId'] },
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
	 * Get Queue IdentityResolution Settings.
	 * 
	 * @param {String} queueId Queue ID
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	getRoutingQueueIdentityresolution(queueId, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'queueId' is set
		if (queueId === undefined || queueId === null || queueId === '') {
			throw 'Missing the required parameter "queueId" when calling getRoutingQueueIdentityresolution';
		}

		return this.apiClient.callApi(
			'/api/v2/routing/queues/{queueId}/identityresolution', 
			'GET', 
			{ 'queueId': queueId },
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
	 * Get Estimated Wait Time
	 * 
	 * @param {String} queueId queueId
	 * @param {Object} mediaType mediaType
	 * @param {Object} opts Optional parameters
	 * @param {String} opts.labelId Unique id that represents the interaction label used with media type for EWT calculation
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	getRoutingQueueMediatypeEstimatedwaittime(queueId, mediaType, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'queueId' is set
		if (queueId === undefined || queueId === null || queueId === '') {
			throw 'Missing the required parameter "queueId" when calling getRoutingQueueMediatypeEstimatedwaittime';
		}
		// verify the required parameter 'mediaType' is set
		if (mediaType === undefined || mediaType === null || mediaType === '') {
			throw 'Missing the required parameter "mediaType" when calling getRoutingQueueMediatypeEstimatedwaittime';
		}

		return this.apiClient.callApi(
			'/api/v2/routing/queues/{queueId}/mediatypes/{mediaType}/estimatedwaittime', 
			'GET', 
			{ 'queueId': queueId,'mediaType': mediaType },
			{ 'labelId': opts['labelId'] },
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
	 * Get the members of this queue.
	 * 
	 * @param {String} queueId Queue ID
	 * @param {Object} opts Optional parameters
	 * @param {Number} opts.pageNumber  (default to 1)
	 * @param {Number} opts.pageSize Max value is 100 (default to 25)
	 * @param {Object} opts.sortOrder Note: results are sorted by name. (default to asc)
	 * @param {Array.<String>} opts.expand Which fields, if any, to expand.
	 * @param {String} opts.name Filter by queue member name (contains-style search)
	 * @param {Array.<String>} opts.profileSkills Filter by profile skill (contains-style search)
	 * @param {Array.<String>} opts.skills Filter by skill (contains-style search)
	 * @param {Array.<String>} opts.languages Filter by language (contains-style search)
	 * @param {Array.<String>} opts.routingStatus Filter by routing status
	 * @param {Array.<String>} opts.presence Filter by presence
	 * @param {Object} opts.memberBy Filter by member type
	 * @param {Object} opts.joined Filter by joined status
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	getRoutingQueueMembers(queueId, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'queueId' is set
		if (queueId === undefined || queueId === null || queueId === '') {
			throw 'Missing the required parameter "queueId" when calling getRoutingQueueMembers';
		}

		return this.apiClient.callApi(
			'/api/v2/routing/queues/{queueId}/members', 
			'GET', 
			{ 'queueId': queueId },
			{ 'pageNumber': opts['pageNumber'],'pageSize': opts['pageSize'],'sortOrder': opts['sortOrder'],'expand': this.apiClient.buildCollectionParam(opts['expand'], 'multi'),'name': opts['name'],'profileSkills': this.apiClient.buildCollectionParam(opts['profileSkills'], 'multi'),'skills': this.apiClient.buildCollectionParam(opts['skills'], 'multi'),'languages': this.apiClient.buildCollectionParam(opts['languages'], 'multi'),'routingStatus': this.apiClient.buildCollectionParam(opts['routingStatus'], 'multi'),'presence': this.apiClient.buildCollectionParam(opts['presence'], 'multi'),'memberBy': opts['memberBy'],'joined': opts['joined'] },
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
	 * DEPRECATED: use GET /routing/queues/{queueId}/members.  Get the members of this queue.
	 * 
	 * @param {String} queueId Queue ID
	 * @param {Object} opts Optional parameters
	 * @param {Number} opts.pageNumber  (default to 1)
	 * @param {Number} opts.pageSize Max value is 100 (default to 25)
	 * @param {Object} opts.sortOrder Note: results are sorted by name. (default to asc)
	 * @param {Array.<String>} opts.expand Which fields, if any, to expand.
	 * @param {Boolean} opts.joined Filter by joined status
	 * @param {String} opts.name Filter by queue member name
	 * @param {Array.<String>} opts.profileSkills Filter by profile skill
	 * @param {Array.<String>} opts.skills Filter by skill
	 * @param {Array.<String>} opts.languages Filter by language
	 * @param {Array.<String>} opts.routingStatus Filter by routing status
	 * @param {Array.<String>} opts.presence Filter by presence
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 * @deprecated
	 */
	getRoutingQueueUsers(queueId, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'queueId' is set
		if (queueId === undefined || queueId === null || queueId === '') {
			throw 'Missing the required parameter "queueId" when calling getRoutingQueueUsers';
		}

		return this.apiClient.callApi(
			'/api/v2/routing/queues/{queueId}/users', 
			'GET', 
			{ 'queueId': queueId },
			{ 'pageNumber': opts['pageNumber'],'pageSize': opts['pageSize'],'sortOrder': opts['sortOrder'],'expand': this.apiClient.buildCollectionParam(opts['expand'], 'multi'),'joined': opts['joined'],'name': opts['name'],'profileSkills': this.apiClient.buildCollectionParam(opts['profileSkills'], 'multi'),'skills': this.apiClient.buildCollectionParam(opts['skills'], 'multi'),'languages': this.apiClient.buildCollectionParam(opts['languages'], 'multi'),'routingStatus': this.apiClient.buildCollectionParam(opts['routingStatus'], 'multi'),'presence': this.apiClient.buildCollectionParam(opts['presence'], 'multi') },
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
	 * Get the wrap-up codes for a queue
	 * 
	 * @param {String} queueId Queue ID
	 * @param {Object} opts Optional parameters
	 * @param {Number} opts.pageSize Page size (default to 25)
	 * @param {Number} opts.pageNumber Page number (default to 1)
	 * @param {String} opts.name Wrapup code's name (trailing asterisks allowed)
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	getRoutingQueueWrapupcodes(queueId, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'queueId' is set
		if (queueId === undefined || queueId === null || queueId === '') {
			throw 'Missing the required parameter "queueId" when calling getRoutingQueueWrapupcodes';
		}

		return this.apiClient.callApi(
			'/api/v2/routing/queues/{queueId}/wrapupcodes', 
			'GET', 
			{ 'queueId': queueId },
			{ 'pageSize': opts['pageSize'],'pageNumber': opts['pageNumber'],'name': opts['name'] },
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
	 * Get list of queues.
	 * 
	 * @param {Object} opts Optional parameters
	 * @param {Number} opts.pageNumber Page number (default to 1)
	 * @param {Number} opts.pageSize Page size (default to 25)
	 * @param {Object} opts.sortOrder Note: results are sorted by name. (default to asc)
	 * @param {String} opts.name Include only queues with the given name (leading and trailing asterisks allowed)
	 * @param {Array.<String>} opts.id Include only queues with the specified ID(s)
	 * @param {Array.<String>} opts.divisionId Include only queues in the specified division ID(s)
	 * @param {Array.<String>} opts.peerId Include only queues with the specified peer ID(s)
	 * @param {String} opts.cannedResponseLibraryId Include only queues explicitly associated with the specified canned response library ID
	 * @param {Boolean} opts.hasPeer Include only queues with a peer ID
	 * @param {Array.<String>} opts.expand Which fields, if any, to expand
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	getRoutingQueues(opts) { 
		opts = opts || {};
		

		return this.apiClient.callApi(
			'/api/v2/routing/queues', 
			'GET', 
			{  },
			{ 'pageNumber': opts['pageNumber'],'pageSize': opts['pageSize'],'sortOrder': opts['sortOrder'],'name': opts['name'],'id': this.apiClient.buildCollectionParam(opts['id'], 'multi'),'divisionId': this.apiClient.buildCollectionParam(opts['divisionId'], 'multi'),'peerId': this.apiClient.buildCollectionParam(opts['peerId'], 'multi'),'cannedResponseLibraryId': opts['cannedResponseLibraryId'],'hasPeer': opts['hasPeer'],'expand': this.apiClient.buildCollectionParam(opts['expand'], 'multi') },
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
	 * Get a paged listing of simplified queue objects, filterable by name, queue ID(s), or division ID(s).
	 * 
	 * @param {Object} opts Optional parameters
	 * @param {Number} opts.pageSize Page size [max value is 100] (default to 25)
	 * @param {Number} opts.pageNumber Page number [max value is 5] (default to 1)
	 * @param {Object} opts.sortBy Sort by (default to name)
	 * @param {Object} opts.sortOrder Sort order (default to asc)
	 * @param {String} opts.name Name
	 * @param {Array.<String>} opts.id Queue ID(s)
	 * @param {Array.<String>} opts.divisionId Division ID(s)
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	getRoutingQueuesDivisionviews(opts) { 
		opts = opts || {};
		

		return this.apiClient.callApi(
			'/api/v2/routing/queues/divisionviews', 
			'GET', 
			{  },
			{ 'pageSize': opts['pageSize'],'pageNumber': opts['pageNumber'],'sortBy': opts['sortBy'],'sortOrder': opts['sortOrder'],'name': opts['name'],'id': this.apiClient.buildCollectionParam(opts['id'], 'multi'),'divisionId': this.apiClient.buildCollectionParam(opts['divisionId'], 'multi') },
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
	 * Get a paged listing of simplified queue objects, sorted by name.  Can be used to get a digest of all queues in an organization.
	 * 
	 * @param {Object} opts Optional parameters
	 * @param {Number} opts.pageSize Page size [max value is 500] (default to 25)
	 * @param {Number} opts.pageNumber Page number (default to 1)
	 * @param {Object} opts.sortOrder Sort order (default to asc)
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	getRoutingQueuesDivisionviewsAll(opts) { 
		opts = opts || {};
		

		return this.apiClient.callApi(
			'/api/v2/routing/queues/divisionviews/all', 
			'GET', 
			{  },
			{ 'pageSize': opts['pageSize'],'pageNumber': opts['pageNumber'],'sortOrder': opts['sortOrder'] },
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
	 * Get a paged listing of queues the user is a member of.
	 * 
	 * @param {Object} opts Optional parameters
	 * @param {Number} opts.pageNumber Page number (default to 1)
	 * @param {Number} opts.pageSize Page size (default to 25)
	 * @param {Object} opts.joined Filter by joined status.
	 * @param {Object} opts.sortOrder Note: results are sorted by name. (default to asc)
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	getRoutingQueuesMe(opts) { 
		opts = opts || {};
		

		return this.apiClient.callApi(
			'/api/v2/routing/queues/me', 
			'GET', 
			{  },
			{ 'pageNumber': opts['pageNumber'],'pageSize': opts['pageSize'],'joined': opts['joined'],'sortOrder': opts['sortOrder'] },
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
	 * Get an organization's routing settings
	 * 
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	getRoutingSettings(opts) { 
		opts = opts || {};
		

		return this.apiClient.callApi(
			'/api/v2/routing/settings', 
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
	 * Get Contact Center Settings
	 * 
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	getRoutingSettingsContactcenter(opts) { 
		opts = opts || {};
		

		return this.apiClient.callApi(
			'/api/v2/routing/settings/contactcenter', 
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
	 * Get Transcription Settings
	 * 
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	getRoutingSettingsTranscription(opts) { 
		opts = opts || {};
		

		return this.apiClient.callApi(
			'/api/v2/routing/settings/transcription', 
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
	 * Get Routing Skill
	 * 
	 * @param {String} skillId Skill ID
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	getRoutingSkill(skillId, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'skillId' is set
		if (skillId === undefined || skillId === null || skillId === '') {
			throw 'Missing the required parameter "skillId" when calling getRoutingSkill';
		}

		return this.apiClient.callApi(
			'/api/v2/routing/skills/{skillId}', 
			'GET', 
			{ 'skillId': skillId },
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
	 * Get skill group
	 * 
	 * @param {String} skillGroupId Skill Group ID
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	getRoutingSkillgroup(skillGroupId, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'skillGroupId' is set
		if (skillGroupId === undefined || skillGroupId === null || skillGroupId === '') {
			throw 'Missing the required parameter "skillGroupId" when calling getRoutingSkillgroup';
		}

		return this.apiClient.callApi(
			'/api/v2/routing/skillgroups/{skillGroupId}', 
			'GET', 
			{ 'skillGroupId': skillGroupId },
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
	 * Get skill group members
	 * 
	 * @param {String} skillGroupId Skill Group ID
	 * @param {Object} opts Optional parameters
	 * @param {Number} opts.pageSize Page size (default to 25)
	 * @param {String} opts.after The cursor that points to the next item
	 * @param {String} opts.before The cursor that points to the previous item
	 * @param {Object} opts.expand Expand the name on each user
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	getRoutingSkillgroupMembers(skillGroupId, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'skillGroupId' is set
		if (skillGroupId === undefined || skillGroupId === null || skillGroupId === '') {
			throw 'Missing the required parameter "skillGroupId" when calling getRoutingSkillgroupMembers';
		}

		return this.apiClient.callApi(
			'/api/v2/routing/skillgroups/{skillGroupId}/members', 
			'GET', 
			{ 'skillGroupId': skillGroupId },
			{ 'pageSize': opts['pageSize'],'after': opts['after'],'before': opts['before'],'expand': opts['expand'] },
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
	 * Get list of member divisions for this skill group.
	 * 
	 * @param {String} skillGroupId Skill Group ID
	 * @param {Object} opts Optional parameters
	 * @param {Object} opts.expand Expand the name on each user
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	getRoutingSkillgroupMembersDivisions(skillGroupId, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'skillGroupId' is set
		if (skillGroupId === undefined || skillGroupId === null || skillGroupId === '') {
			throw 'Missing the required parameter "skillGroupId" when calling getRoutingSkillgroupMembersDivisions';
		}

		return this.apiClient.callApi(
			'/api/v2/routing/skillgroups/{skillGroupId}/members/divisions', 
			'GET', 
			{ 'skillGroupId': skillGroupId },
			{ 'expand': opts['expand'] },
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
	 * Get skill group listing
	 * 
	 * @param {Object} opts Optional parameters
	 * @param {Number} opts.pageSize Page size (default to 25)
	 * @param {String} opts.name Return only skill group names whose names start with this value (case-insensitive matching)
	 * @param {String} opts.after The cursor that points to the next item
	 * @param {String} opts.before The cursor that points to the previous item
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	getRoutingSkillgroups(opts) { 
		opts = opts || {};
		

		return this.apiClient.callApi(
			'/api/v2/routing/skillgroups', 
			'GET', 
			{  },
			{ 'pageSize': opts['pageSize'],'name': opts['name'],'after': opts['after'],'before': opts['before'] },
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
	 * Get the list of routing skills.
	 * 
	 * @param {Object} opts Optional parameters
	 * @param {Number} opts.pageSize Page size (default to 25)
	 * @param {Number} opts.pageNumber Page number (default to 1)
	 * @param {String} opts.name Filter for results that start with this value
	 * @param {Array.<String>} opts.id id
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	getRoutingSkills(opts) { 
		opts = opts || {};
		

		return this.apiClient.callApi(
			'/api/v2/routing/skills', 
			'GET', 
			{  },
			{ 'pageSize': opts['pageSize'],'pageNumber': opts['pageNumber'],'name': opts['name'],'id': this.apiClient.buildCollectionParam(opts['id'], 'multi') },
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
	 * Get an Address by Id for SMS
	 * 
	 * @param {String} addressId Address ID
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	getRoutingSmsAddress(addressId, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'addressId' is set
		if (addressId === undefined || addressId === null || addressId === '') {
			throw 'Missing the required parameter "addressId" when calling getRoutingSmsAddress';
		}

		return this.apiClient.callApi(
			'/api/v2/routing/sms/addresses/{addressId}', 
			'GET', 
			{ 'addressId': addressId },
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
	 * Get a list of Addresses for SMS
	 * 
	 * @param {Object} opts Optional parameters
	 * @param {Number} opts.pageSize Page size (default to 25)
	 * @param {Number} opts.pageNumber Page number (default to 1)
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	getRoutingSmsAddresses(opts) { 
		opts = opts || {};
		

		return this.apiClient.callApi(
			'/api/v2/routing/sms/addresses', 
			'GET', 
			{  },
			{ 'pageSize': opts['pageSize'],'pageNumber': opts['pageNumber'] },
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
	 * Get a list of available phone numbers for SMS provisioning.
	 * This request will return up to 30 random phone numbers matching the criteria specified.  To get additional phone numbers repeat the request.
	 * @param {String} countryCode The ISO 3166-1 alpha-2 country code of the county for which available phone numbers should be returned
	 * @param {Object} phoneNumberType Type of available phone numbers searched
	 * @param {Object} opts Optional parameters
	 * @param {String} opts.region Region/province/state that can be used to restrict the numbers returned
	 * @param {String} opts.city City that can be used to restrict the numbers returned
	 * @param {String} opts.areaCode Area code that can be used to restrict the numbers returned
	 * @param {String} opts.pattern A pattern to match phone numbers. Valid characters are '*' and [0-9a-zA-Z]. The '*' character will match any single digit.
	 * @param {Object} opts.addressRequirement This indicates whether the phone number requires to have an Address registered.
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	getRoutingSmsAvailablephonenumbers(countryCode, phoneNumberType, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'countryCode' is set
		if (countryCode === undefined || countryCode === null) {
			throw 'Missing the required parameter "countryCode" when calling getRoutingSmsAvailablephonenumbers';
		}
		// verify the required parameter 'phoneNumberType' is set
		if (phoneNumberType === undefined || phoneNumberType === null) {
			throw 'Missing the required parameter "phoneNumberType" when calling getRoutingSmsAvailablephonenumbers';
		}

		return this.apiClient.callApi(
			'/api/v2/routing/sms/availablephonenumbers', 
			'GET', 
			{  },
			{ 'countryCode': countryCode,'region': opts['region'],'city': opts['city'],'areaCode': opts['areaCode'],'phoneNumberType': phoneNumberType,'pattern': opts['pattern'],'addressRequirement': opts['addressRequirement'] },
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
	 * Get a SMS identity resolution settings.
	 * 
	 * @param {String} addressId Address ID
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	getRoutingSmsIdentityresolutionPhonenumber(addressId, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'addressId' is set
		if (addressId === undefined || addressId === null || addressId === '') {
			throw 'Missing the required parameter "addressId" when calling getRoutingSmsIdentityresolutionPhonenumber';
		}

		return this.apiClient.callApi(
			'/api/v2/routing/sms/identityresolution/phonenumbers/{addressId}', 
			'GET', 
			{ 'addressId': addressId },
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
	 * Get a phone number provisioned for SMS.
	 * When no supported content profile is explicitly set on an MMS-capable phone number, the system uses the "SMS Default" profile. This default profile allows all media types (\*\/\*) for inbound messages and specific image types (image/gif, image/jpeg, image/png) for outbound messages. The "SMS Default" profile does not have an ID and cannot be modified. To customize media filtering, create and assign a custom supported content profile using the PATCH endpoint.
	 * @param {String} phoneNumberId phone number
	 * @param {Object} opts Optional parameters
	 * @param {Object} opts.expand Expand response with additional information
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	getRoutingSmsPhonenumber(phoneNumberId, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'phoneNumberId' is set
		if (phoneNumberId === undefined || phoneNumberId === null || phoneNumberId === '') {
			throw 'Missing the required parameter "phoneNumberId" when calling getRoutingSmsPhonenumber';
		}

		return this.apiClient.callApi(
			'/api/v2/routing/sms/phonenumbers/{phoneNumberId}', 
			'GET', 
			{ 'phoneNumberId': phoneNumberId },
			{ 'expand': opts['expand'] },
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
	 * Get a list of provisioned phone numbers.
	 * When no supported content profile is explicitly set, the system uses the "SMS Default" profile. This default profile allows all media types (\*\/\*) for inbound messages and specific image types (image/gif, image/jpeg, image/png) for outbound messages. The "SMS Default" profile does not have an ID and cannot be modified. To customize media filtering, create and assign a custom supported content profile.
	 * @param {Object} opts Optional parameters
	 * @param {String} opts.phoneNumber Filter on phone number address. Allowable characters are the digits '0-9' and the wild card character '\\*'. If just digits are present, a contains search is done on the address pattern. For example, '317' could be matched anywhere in the address. An '\\*' will match multiple digits. For example, to match a specific area code within the US a pattern like '1317*' could be used.
	 * @param {Array.<String>} opts.phoneNumberType Filter on phone number type
	 * @param {Array.<String>} opts.phoneNumberStatus Filter on phone number status
	 * @param {Array.<String>} opts.countryCode Filter on country code
	 * @param {Number} opts.pageSize Page size (default to 25)
	 * @param {Number} opts.pageNumber Page number (default to 1)
	 * @param {Object} opts.sortBy Optional field to sort results
	 * @param {Object} opts.sortOrder Sort order
	 * @param {String} opts.language A language tag (which is sometimes referred to as a locale identifier) to use to localize country field and sort operations (default to en-US)
	 * @param {String} opts.integrationId Filter on the Genesys Cloud integration id to which the phone number belongs to
	 * @param {String} opts.supportedContentId Filter based on the supported content ID
	 * @param {Array.<String>} opts.expand Which fields, if any, to expand
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	getRoutingSmsPhonenumbers(opts) { 
		opts = opts || {};
		

		return this.apiClient.callApi(
			'/api/v2/routing/sms/phonenumbers', 
			'GET', 
			{  },
			{ 'phoneNumber': opts['phoneNumber'],'phoneNumberType': this.apiClient.buildCollectionParam(opts['phoneNumberType'], 'multi'),'phoneNumberStatus': this.apiClient.buildCollectionParam(opts['phoneNumberStatus'], 'multi'),'countryCode': this.apiClient.buildCollectionParam(opts['countryCode'], 'multi'),'pageSize': opts['pageSize'],'pageNumber': opts['pageNumber'],'sortBy': opts['sortBy'],'sortOrder': opts['sortOrder'],'language': opts['language'],'integration.id': opts['integrationId'],'supportedContent.id': opts['supportedContentId'],'expand': this.apiClient.buildCollectionParam(opts['expand'], 'multi') },
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
	 * Get the user's Direct Routing Backup settings.
	 * 
	 * @param {String} userId User ID
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	getRoutingUserDirectroutingbackupSettings(userId, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'userId' is set
		if (userId === undefined || userId === null || userId === '') {
			throw 'Missing the required parameter "userId" when calling getRoutingUserDirectroutingbackupSettings';
		}

		return this.apiClient.callApi(
			'/api/v2/routing/users/{userId}/directroutingbackup/settings', 
			'GET', 
			{ 'userId': userId },
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
	 * Get the user's max utilization settings.  If not configured, the organization-wide default is returned.
	 * 
	 * @param {String} userId User ID
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	getRoutingUserUtilization(userId, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'userId' is set
		if (userId === undefined || userId === null || userId === '') {
			throw 'Missing the required parameter "userId" when calling getRoutingUserUtilization';
		}

		return this.apiClient.callApi(
			'/api/v2/routing/users/{userId}/utilization', 
			'GET', 
			{ 'userId': userId },
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
	 * Get the organization-wide max utilization settings.
	 * 
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	getRoutingUtilization(opts) { 
		opts = opts || {};
		

		return this.apiClient.callApi(
			'/api/v2/routing/utilization', 
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
	 * Get details about this utilization label
	 * 
	 * @param {String} labelId Utilization Label ID
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	getRoutingUtilizationLabel(labelId, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'labelId' is set
		if (labelId === undefined || labelId === null || labelId === '') {
			throw 'Missing the required parameter "labelId" when calling getRoutingUtilizationLabel';
		}

		return this.apiClient.callApi(
			'/api/v2/routing/utilization/labels/{labelId}', 
			'GET', 
			{ 'labelId': labelId },
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
	 * Get list of agent ids associated with a utilization label
	 * 
	 * @param {String} labelId Utilization Label ID
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	getRoutingUtilizationLabelAgents(labelId, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'labelId' is set
		if (labelId === undefined || labelId === null || labelId === '') {
			throw 'Missing the required parameter "labelId" when calling getRoutingUtilizationLabelAgents';
		}

		return this.apiClient.callApi(
			'/api/v2/routing/utilization/labels/{labelId}/agents', 
			'GET', 
			{ 'labelId': labelId },
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
	 * Get list of utilization labels
	 * 
	 * @param {Object} opts Optional parameters
	 * @param {Number} opts.pageSize Page size (default to 25)
	 * @param {Number} opts.pageNumber Page number (default to 1)
	 * @param {Object} opts.sortOrder Sort order by name (default to ascending)
	 * @param {String} opts.name Utilization label's name (Wildcard is supported, e.g., 'label1*', '*label*'
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	getRoutingUtilizationLabels(opts) { 
		opts = opts || {};
		

		return this.apiClient.callApi(
			'/api/v2/routing/utilization/labels', 
			'GET', 
			{  },
			{ 'pageSize': opts['pageSize'],'pageNumber': opts['pageNumber'],'sortOrder': opts['sortOrder'],'name': opts['name'] },
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
	 * Get details about this utilization tag
	 * 
	 * @param {String} tagId Utilization Tag ID
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 * getRoutingUtilizationTag is a preview method and is subject to both breaking and non-breaking changes at any time without notice
	 */
	getRoutingUtilizationTag(tagId, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'tagId' is set
		if (tagId === undefined || tagId === null || tagId === '') {
			throw 'Missing the required parameter "tagId" when calling getRoutingUtilizationTag';
		}

		return this.apiClient.callApi(
			'/api/v2/routing/utilization/tags/{tagId}', 
			'GET', 
			{ 'tagId': tagId },
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
	 * Get list of agent ids associated with a utilization tag
	 * 
	 * @param {String} tagId Utilization Tag ID
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 * getRoutingUtilizationTagAgents is a preview method and is subject to both breaking and non-breaking changes at any time without notice
	 */
	getRoutingUtilizationTagAgents(tagId, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'tagId' is set
		if (tagId === undefined || tagId === null || tagId === '') {
			throw 'Missing the required parameter "tagId" when calling getRoutingUtilizationTagAgents';
		}

		return this.apiClient.callApi(
			'/api/v2/routing/utilization/tags/{tagId}/agents', 
			'GET', 
			{ 'tagId': tagId },
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
	 * Get list of utilization tags
	 * 
	 * @param {Object} opts Optional parameters
	 * @param {Number} opts.pageSize Page size (default to 25)
	 * @param {Number} opts.pageNumber Page number (default to 1)
	 * @param {Object} opts.sortOrder Sort order by name (default to ascending)
	 * @param {String} opts.name Utilization tag's name (Wildcard is supported, e.g., 'tag1*')
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 * getRoutingUtilizationTags is a preview method and is subject to both breaking and non-breaking changes at any time without notice
	 */
	getRoutingUtilizationTags(opts) { 
		opts = opts || {};
		

		return this.apiClient.callApi(
			'/api/v2/routing/utilization/tags', 
			'GET', 
			{  },
			{ 'pageSize': opts['pageSize'],'pageNumber': opts['pageNumber'],'sortOrder': opts['sortOrder'],'name': opts['name'] },
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
	 * Get details about this wrap-up code.
	 * 
	 * @param {String} codeId Wrapup Code ID
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	getRoutingWrapupcode(codeId, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'codeId' is set
		if (codeId === undefined || codeId === null || codeId === '') {
			throw 'Missing the required parameter "codeId" when calling getRoutingWrapupcode';
		}

		return this.apiClient.callApi(
			'/api/v2/routing/wrapupcodes/{codeId}', 
			'GET', 
			{ 'codeId': codeId },
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
	 * Get list of wrapup codes.
	 * 
	 * @param {Object} opts Optional parameters
	 * @param {Number} opts.pageSize Page size (default to 25)
	 * @param {Number} opts.pageNumber Page number (default to 1)
	 * @param {Object} opts.sortBy Sort by (default to name)
	 * @param {Object} opts.sortOrder Sort order (default to ascending)
	 * @param {String} opts.name Wrapup code's name ('Sort by' param is ignored unless this field is provided)
	 * @param {Array.<String>} opts.id Filter by wrapup code ID(s)
	 * @param {Array.<String>} opts.divisionId Filter by division ID(s)
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	getRoutingWrapupcodes(opts) { 
		opts = opts || {};
		

		return this.apiClient.callApi(
			'/api/v2/routing/wrapupcodes', 
			'GET', 
			{  },
			{ 'pageSize': opts['pageSize'],'pageNumber': opts['pageNumber'],'sortBy': opts['sortBy'],'sortOrder': opts['sortOrder'],'name': opts['name'],'id': this.apiClient.buildCollectionParam(opts['id'], 'multi'),'divisionId': this.apiClient.buildCollectionParam(opts['divisionId'], 'multi') },
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
	 * Get a simplified wrap-up code.
	 * 
	 * @param {String} codeId Wrapup Code ID
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	getRoutingWrapupcodesDivisionview(codeId, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'codeId' is set
		if (codeId === undefined || codeId === null || codeId === '') {
			throw 'Missing the required parameter "codeId" when calling getRoutingWrapupcodesDivisionview';
		}

		return this.apiClient.callApi(
			'/api/v2/routing/wrapupcodes/divisionviews/{codeId}', 
			'GET', 
			{ 'codeId': codeId },
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
	 * Get a paged listing of simplified wrapup code objects, filterable by name, wrapup code ID(s), or division ID(s).
	 * Specifying both name and ID parameters is not supported.
	 * @param {Object} opts Optional parameters
	 * @param {Number} opts.pageSize Page size (default to 25)
	 * @param {Number} opts.pageNumber Page number (default to 1)
	 * @param {String} opts.name Name (trailing asterisks allowed)
	 * @param {Array.<String>} opts.id Wrapup code ID(s)
	 * @param {Array.<String>} opts.divisionId Division ID(s)
	 * @param {Object} opts.includeState Wrapup code state(s) to include
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	getRoutingWrapupcodesDivisionviews(opts) { 
		opts = opts || {};
		

		return this.apiClient.callApi(
			'/api/v2/routing/wrapupcodes/divisionviews', 
			'GET', 
			{  },
			{ 'pageSize': opts['pageSize'],'pageNumber': opts['pageNumber'],'name': opts['name'],'id': this.apiClient.buildCollectionParam(opts['id'], 'multi'),'divisionId': this.apiClient.buildCollectionParam(opts['divisionId'], 'multi'),'includeState': opts['includeState'] },
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
	 * Get queues for user
	 * 
	 * @param {String} userId User ID
	 * @param {Object} opts Optional parameters
	 * @param {Number} opts.pageSize Page size (default to 25)
	 * @param {Number} opts.pageNumber Page number (default to 1)
	 * @param {Boolean} opts.joined Is joined to the queue (default to true)
	 * @param {Array.<String>} opts.divisionId Division ID(s)
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	getUserQueues(userId, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'userId' is set
		if (userId === undefined || userId === null || userId === '') {
			throw 'Missing the required parameter "userId" when calling getUserQueues';
		}

		return this.apiClient.callApi(
			'/api/v2/users/{userId}/queues', 
			'GET', 
			{ 'userId': userId },
			{ 'pageSize': opts['pageSize'],'pageNumber': opts['pageNumber'],'joined': opts['joined'],'divisionId': this.apiClient.buildCollectionParam(opts['divisionId'], 'multi') },
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
	 * List routing languages assigned to a user
	 * 
	 * @param {String} userId User ID
	 * @param {Object} opts Optional parameters
	 * @param {Number} opts.pageSize Page size (default to 25)
	 * @param {Number} opts.pageNumber Page number (default to 1)
	 * @param {Object} opts.sortOrder Ascending or descending sort order (default to ASC)
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	getUserRoutinglanguages(userId, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'userId' is set
		if (userId === undefined || userId === null || userId === '') {
			throw 'Missing the required parameter "userId" when calling getUserRoutinglanguages';
		}

		return this.apiClient.callApi(
			'/api/v2/users/{userId}/routinglanguages', 
			'GET', 
			{ 'userId': userId },
			{ 'pageSize': opts['pageSize'],'pageNumber': opts['pageNumber'],'sortOrder': opts['sortOrder'] },
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
	 * List routing skills assigned to a user
	 * 
	 * @param {String} userId User ID
	 * @param {Object} opts Optional parameters
	 * @param {Number} opts.pageSize Page size (default to 25)
	 * @param {Number} opts.pageNumber Page number (default to 1)
	 * @param {Object} opts.sortOrder Ascending or descending sort order (default to ASC)
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	getUserRoutingskills(userId, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'userId' is set
		if (userId === undefined || userId === null || userId === '') {
			throw 'Missing the required parameter "userId" when calling getUserRoutingskills';
		}

		return this.apiClient.callApi(
			'/api/v2/users/{userId}/routingskills', 
			'GET', 
			{ 'userId': userId },
			{ 'pageSize': opts['pageSize'],'pageNumber': opts['pageNumber'],'sortOrder': opts['sortOrder'] },
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
	 * Get skill groups for a user
	 * 
	 * @param {String} userId User ID
	 * @param {Object} opts Optional parameters
	 * @param {Number} opts.pageSize Page size (default to 25)
	 * @param {String} opts.after The cursor that points to the next page
	 * @param {String} opts.before The cursor that points to the previous page
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	getUserSkillgroups(userId, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'userId' is set
		if (userId === undefined || userId === null || userId === '') {
			throw 'Missing the required parameter "userId" when calling getUserSkillgroups';
		}

		return this.apiClient.callApi(
			'/api/v2/users/{userId}/skillgroups', 
			'GET', 
			{ 'userId': userId },
			{ 'pageSize': opts['pageSize'],'after': opts['after'],'before': opts['before'] },
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
	 * Update attributes of an in-queue conversation
	 * Returns an object indicating the updated values of all settable attributes. Supported attributes: skillIds, skillExpression, languageId, and priority.
	 * @param {String} conversationId Conversation ID
	 * @param {Object} body Conversation Attributes
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	patchRoutingConversation(conversationId, body, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'conversationId' is set
		if (conversationId === undefined || conversationId === null || conversationId === '') {
			throw 'Missing the required parameter "conversationId" when calling patchRoutingConversation';
		}
		// verify the required parameter 'body' is set
		if (body === undefined || body === null) {
			throw 'Missing the required parameter "body" when calling patchRoutingConversation';
		}

		return this.apiClient.callApi(
			'/api/v2/routing/conversations/{conversationId}', 
			'PATCH', 
			{ 'conversationId': conversationId },
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
	 * Update domain settings
	 * 
	 * @param {String} domainId domain ID
	 * @param {Object} body Domain settings
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	patchRoutingEmailDomain(domainId, body, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'domainId' is set
		if (domainId === undefined || domainId === null || domainId === '') {
			throw 'Missing the required parameter "domainId" when calling patchRoutingEmailDomain';
		}
		// verify the required parameter 'body' is set
		if (body === undefined || body === null) {
			throw 'Missing the required parameter "body" when calling patchRoutingEmailDomain';
		}

		return this.apiClient.callApi(
			'/api/v2/routing/email/domains/{domainId}', 
			'PATCH', 
			{ 'domainId': domainId },
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
	 * Validate domain settings
	 * 
	 * @param {String} domainId domain ID
	 * @param {Object} body Domain settings
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	patchRoutingEmailDomainValidate(domainId, body, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'domainId' is set
		if (domainId === undefined || domainId === null || domainId === '') {
			throw 'Missing the required parameter "domainId" when calling patchRoutingEmailDomainValidate';
		}
		// verify the required parameter 'body' is set
		if (body === undefined || body === null) {
			throw 'Missing the required parameter "body" when calling patchRoutingEmailDomainValidate';
		}

		return this.apiClient.callApi(
			'/api/v2/routing/email/domains/{domainId}/validate', 
			'PATCH', 
			{ 'domainId': domainId },
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
	 * Update configurable settings for an email domain, such as changing the sending method (e.g., to or from SMTP).
	 * 
	 * @param {String} domainId domain ID
	 * @param {Object} body Domain settings
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	patchRoutingEmailOutboundDomain(domainId, body, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'domainId' is set
		if (domainId === undefined || domainId === null || domainId === '') {
			throw 'Missing the required parameter "domainId" when calling patchRoutingEmailOutboundDomain';
		}
		// verify the required parameter 'body' is set
		if (body === undefined || body === null) {
			throw 'Missing the required parameter "body" when calling patchRoutingEmailOutboundDomain';
		}

		return this.apiClient.callApi(
			'/api/v2/routing/email/outbound/domains/{domainId}', 
			'PATCH', 
			{ 'domainId': domainId },
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
	 * Update single predictor.
	 * 
	 * @param {String} predictorId Predictor ID
	 * @param {Object} opts Optional parameters
	 * @param {Object} opts.body 
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	patchRoutingPredictor(predictorId, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'predictorId' is set
		if (predictorId === undefined || predictorId === null || predictorId === '') {
			throw 'Missing the required parameter "predictorId" when calling patchRoutingPredictor';
		}

		return this.apiClient.callApi(
			'/api/v2/routing/predictors/{predictorId}', 
			'PATCH', 
			{ 'predictorId': predictorId },
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
	 * Update a custom Key Performance Indicator.
	 * 
	 * @param {String} kpiId Key Performance Indicator ID
	 * @param {Object} opts Optional parameters
	 * @param {Object} opts.body 
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 * patchRoutingPredictorsKeyperformanceindicator is a preview method and is subject to both breaking and non-breaking changes at any time without notice
	 */
	patchRoutingPredictorsKeyperformanceindicator(kpiId, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'kpiId' is set
		if (kpiId === undefined || kpiId === null || kpiId === '') {
			throw 'Missing the required parameter "kpiId" when calling patchRoutingPredictorsKeyperformanceindicator';
		}

		return this.apiClient.callApi(
			'/api/v2/routing/predictors/keyperformanceindicators/{kpiId}', 
			'PATCH', 
			{ 'kpiId': kpiId },
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
	 * Update the ring number OR joined status for a queue member.
	 * 
	 * @param {String} queueId Queue ID
	 * @param {String} memberId Member ID
	 * @param {Object} body Queue Member
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	patchRoutingQueueMember(queueId, memberId, body, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'queueId' is set
		if (queueId === undefined || queueId === null || queueId === '') {
			throw 'Missing the required parameter "queueId" when calling patchRoutingQueueMember';
		}
		// verify the required parameter 'memberId' is set
		if (memberId === undefined || memberId === null || memberId === '') {
			throw 'Missing the required parameter "memberId" when calling patchRoutingQueueMember';
		}
		// verify the required parameter 'body' is set
		if (body === undefined || body === null) {
			throw 'Missing the required parameter "body" when calling patchRoutingQueueMember';
		}

		return this.apiClient.callApi(
			'/api/v2/routing/queues/{queueId}/members/{memberId}', 
			'PATCH', 
			{ 'queueId': queueId,'memberId': memberId },
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
	 * Join or unjoin a set of up to 100 users for a queue
	 * Users can only be joined to queues where they have membership. Non-member user-queue pairs in the request will be disregarded. Note: This operation is processed asynchronously and the response data may not reflect the final state. Changes may take time to propagate. Query the GET endpoint after a delay to retrieve the current membership status.
	 * @param {String} queueId Queue ID
	 * @param {Array.<Object>} body Queue Members
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	patchRoutingQueueMembers(queueId, body, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'queueId' is set
		if (queueId === undefined || queueId === null || queueId === '') {
			throw 'Missing the required parameter "queueId" when calling patchRoutingQueueMembers';
		}
		// verify the required parameter 'body' is set
		if (body === undefined || body === null) {
			throw 'Missing the required parameter "body" when calling patchRoutingQueueMembers';
		}

		return this.apiClient.callApi(
			'/api/v2/routing/queues/{queueId}/members', 
			'PATCH', 
			{ 'queueId': queueId },
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
	 * DEPRECATED: use PATCH /routing/queues/{queueId}/members/{memberId}.  Update the ring number OR joined status for a User in a Queue.
	 * 
	 * @param {String} queueId Queue ID
	 * @param {String} memberId Member ID
	 * @param {Object} body Queue Member
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 * @deprecated
	 */
	patchRoutingQueueUser(queueId, memberId, body, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'queueId' is set
		if (queueId === undefined || queueId === null || queueId === '') {
			throw 'Missing the required parameter "queueId" when calling patchRoutingQueueUser';
		}
		// verify the required parameter 'memberId' is set
		if (memberId === undefined || memberId === null || memberId === '') {
			throw 'Missing the required parameter "memberId" when calling patchRoutingQueueUser';
		}
		// verify the required parameter 'body' is set
		if (body === undefined || body === null) {
			throw 'Missing the required parameter "body" when calling patchRoutingQueueUser';
		}

		return this.apiClient.callApi(
			'/api/v2/routing/queues/{queueId}/users/{memberId}', 
			'PATCH', 
			{ 'queueId': queueId,'memberId': memberId },
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
	 * DEPRECATED: use PATCH /routing/queues/{queueId}/members.  Join or unjoin a set of users for a queue.
	 * 
	 * @param {String} queueId Queue ID
	 * @param {Array.<Object>} body Queue Members
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 * @deprecated
	 */
	patchRoutingQueueUsers(queueId, body, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'queueId' is set
		if (queueId === undefined || queueId === null || queueId === '') {
			throw 'Missing the required parameter "queueId" when calling patchRoutingQueueUsers';
		}
		// verify the required parameter 'body' is set
		if (body === undefined || body === null) {
			throw 'Missing the required parameter "body" when calling patchRoutingQueueUsers';
		}

		return this.apiClient.callApi(
			'/api/v2/routing/queues/{queueId}/users', 
			'PATCH', 
			{ 'queueId': queueId },
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
	 * Update Contact Center Settings
	 * 
	 * @param {Object} body Contact Center Settings
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	patchRoutingSettingsContactcenter(body, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'body' is set
		if (body === undefined || body === null) {
			throw 'Missing the required parameter "body" when calling patchRoutingSettingsContactcenter';
		}

		return this.apiClient.callApi(
			'/api/v2/routing/settings/contactcenter', 
			'PATCH', 
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
	 * Patch Transcription Settings
	 * 
	 * @param {Object} body Organization Settings
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	patchRoutingSettingsTranscription(body, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'body' is set
		if (body === undefined || body === null) {
			throw 'Missing the required parameter "body" when calling patchRoutingSettingsTranscription';
		}

		return this.apiClient.callApi(
			'/api/v2/routing/settings/transcription', 
			'PATCH', 
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
	 * Update Routing Skill Division
	 * 
	 * @param {String} skillId Skill ID
	 * @param {Object} body updateSkillDivisionRequest
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	patchRoutingSkill(skillId, body, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'skillId' is set
		if (skillId === undefined || skillId === null || skillId === '') {
			throw 'Missing the required parameter "skillId" when calling patchRoutingSkill';
		}
		// verify the required parameter 'body' is set
		if (body === undefined || body === null) {
			throw 'Missing the required parameter "body" when calling patchRoutingSkill';
		}

		return this.apiClient.callApi(
			'/api/v2/routing/skills/{skillId}', 
			'PATCH', 
			{ 'skillId': skillId },
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
	 * Update skill group definition
	 * 
	 * @param {String} skillGroupId Skill Group ID
	 * @param {Object} body Update skill groups
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	patchRoutingSkillgroup(skillGroupId, body, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'skillGroupId' is set
		if (skillGroupId === undefined || skillGroupId === null || skillGroupId === '') {
			throw 'Missing the required parameter "skillGroupId" when calling patchRoutingSkillgroup';
		}
		// verify the required parameter 'body' is set
		if (body === undefined || body === null) {
			throw 'Missing the required parameter "body" when calling patchRoutingSkillgroup';
		}

		return this.apiClient.callApi(
			'/api/v2/routing/skillgroups/{skillGroupId}', 
			'PATCH', 
			{ 'skillGroupId': skillGroupId },
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
	 * Update a phone number provisioned for SMS.
	 * Use this endpoint to assign a custom supported content profile to an MMS-capable phone number. If no supported content profile is set, the phone number uses the "SMS Default" profile, which allows all media types (\*\/\*) for inbound messages and specific image types (image/gif, image/jpeg, image/png) for outbound messages. To customize media filtering, provide a supported content profile ID in the request body.
	 * @param {String} phoneNumberId phone number
	 * @param {Object} body SmsPhoneNumberPatchRequest
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	patchRoutingSmsPhonenumber(phoneNumberId, body, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'phoneNumberId' is set
		if (phoneNumberId === undefined || phoneNumberId === null || phoneNumberId === '') {
			throw 'Missing the required parameter "phoneNumberId" when calling patchRoutingSmsPhonenumber';
		}
		// verify the required parameter 'body' is set
		if (body === undefined || body === null) {
			throw 'Missing the required parameter "body" when calling patchRoutingSmsPhonenumber';
		}

		return this.apiClient.callApi(
			'/api/v2/routing/sms/phonenumbers/{phoneNumberId}', 
			'PATCH', 
			{ 'phoneNumberId': phoneNumberId },
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
	 * Join or unjoin a queue for a user
	 * 
	 * @param {String} queueId Queue ID
	 * @param {String} userId User ID
	 * @param {Object} body Queue Member
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	patchUserQueue(queueId, userId, body, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'queueId' is set
		if (queueId === undefined || queueId === null || queueId === '') {
			throw 'Missing the required parameter "queueId" when calling patchUserQueue';
		}
		// verify the required parameter 'userId' is set
		if (userId === undefined || userId === null || userId === '') {
			throw 'Missing the required parameter "userId" when calling patchUserQueue';
		}
		// verify the required parameter 'body' is set
		if (body === undefined || body === null) {
			throw 'Missing the required parameter "body" when calling patchUserQueue';
		}

		return this.apiClient.callApi(
			'/api/v2/users/{userId}/queues/{queueId}', 
			'PATCH', 
			{ 'queueId': queueId,'userId': userId },
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
	 * Join or unjoin a set of queues for a user
	 * Users can only be joined to queues where they have membership. Non-member user-queue pairs in the request will be disregarded. Note: This operation is processed asynchronously and the response data may not reflect the final state. Changes may take time to propagate. Query the GET endpoint after a delay to retrieve the current membership status.
	 * @param {String} userId User ID
	 * @param {Array.<Object>} body User Queues
	 * @param {Object} opts Optional parameters
	 * @param {Array.<String>} opts.divisionId Division ID(s)
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	patchUserQueues(userId, body, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'userId' is set
		if (userId === undefined || userId === null || userId === '') {
			throw 'Missing the required parameter "userId" when calling patchUserQueues';
		}
		// verify the required parameter 'body' is set
		if (body === undefined || body === null) {
			throw 'Missing the required parameter "body" when calling patchUserQueues';
		}

		return this.apiClient.callApi(
			'/api/v2/users/{userId}/queues', 
			'PATCH', 
			{ 'userId': userId },
			{ 'divisionId': this.apiClient.buildCollectionParam(opts['divisionId'], 'multi') },
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
	 * Update an assigned routing language's proficiency
	 * 
	 * @param {String} userId User ID
	 * @param {String} languageId languageId
	 * @param {Object} body Language
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	patchUserRoutinglanguage(userId, languageId, body, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'userId' is set
		if (userId === undefined || userId === null || userId === '') {
			throw 'Missing the required parameter "userId" when calling patchUserRoutinglanguage';
		}
		// verify the required parameter 'languageId' is set
		if (languageId === undefined || languageId === null || languageId === '') {
			throw 'Missing the required parameter "languageId" when calling patchUserRoutinglanguage';
		}
		// verify the required parameter 'body' is set
		if (body === undefined || body === null) {
			throw 'Missing the required parameter "body" when calling patchUserRoutinglanguage';
		}

		return this.apiClient.callApi(
			'/api/v2/users/{userId}/routinglanguages/{languageId}', 
			'PATCH', 
			{ 'userId': userId,'languageId': languageId },
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
	 * Assign multiple routing languages to a user. Max 50 routing languages in request body
	 * 
	 * @param {String} userId User ID
	 * @param {Array.<Object>} body Language
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	patchUserRoutinglanguagesBulk(userId, body, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'userId' is set
		if (userId === undefined || userId === null || userId === '') {
			throw 'Missing the required parameter "userId" when calling patchUserRoutinglanguagesBulk';
		}
		// verify the required parameter 'body' is set
		if (body === undefined || body === null) {
			throw 'Missing the required parameter "body" when calling patchUserRoutinglanguagesBulk';
		}

		return this.apiClient.callApi(
			'/api/v2/users/{userId}/routinglanguages/bulk', 
			'PATCH', 
			{ 'userId': userId },
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
	 * Assign multiple routing skills to a user
	 * 
	 * @param {String} userId User ID
	 * @param {Array.<Object>} body Skill
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	patchUserRoutingskillsBulk(userId, body, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'userId' is set
		if (userId === undefined || userId === null || userId === '') {
			throw 'Missing the required parameter "userId" when calling patchUserRoutingskillsBulk';
		}
		// verify the required parameter 'body' is set
		if (body === undefined || body === null) {
			throw 'Missing the required parameter "body" when calling patchUserRoutingskillsBulk';
		}

		return this.apiClient.callApi(
			'/api/v2/users/{userId}/routingskills/bulk', 
			'PATCH', 
			{ 'userId': userId },
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
	 * Query for queue observations
	 * 
	 * @param {Object} body query
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	postAnalyticsQueuesObservationsQuery(body, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'body' is set
		if (body === undefined || body === null) {
			throw 'Missing the required parameter "body" when calling postAnalyticsQueuesObservationsQuery';
		}

		return this.apiClient.callApi(
			'/api/v2/analytics/queues/observations/query', 
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
	 * Query for user activity observations
	 * 
	 * @param {Object} body query
	 * @param {Object} opts Optional parameters
	 * @param {Number} opts.pageSize The desired page size
	 * @param {Number} opts.pageNumber The desired page number
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	postAnalyticsRoutingActivityQuery(body, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'body' is set
		if (body === undefined || body === null) {
			throw 'Missing the required parameter "body" when calling postAnalyticsRoutingActivityQuery';
		}

		return this.apiClient.callApi(
			'/api/v2/analytics/routing/activity/query', 
			'POST', 
			{  },
			{ 'pageSize': opts['pageSize'],'pageNumber': opts['pageNumber'] },
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
	 * Create a benefit assessment.
	 * 
	 * @param {Object} opts Optional parameters
	 * @param {Object} opts.body 
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	postRoutingAssessments(opts) { 
		opts = opts || {};
		

		return this.apiClient.callApi(
			'/api/v2/routing/assessments', 
			'POST', 
			{  },
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
	 * Create a benefit assessment job.
	 * 
	 * @param {Object} opts Optional parameters
	 * @param {Object} opts.body 
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	postRoutingAssessmentsJobs(opts) { 
		opts = opts || {};
		

		return this.apiClient.callApi(
			'/api/v2/routing/assessments/jobs', 
			'POST', 
			{  },
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
	 * Restart domain dkim
	 * 
	 * @param {String} domainId domain ID
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	postRoutingEmailDomainDkim(domainId, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'domainId' is set
		if (domainId === undefined || domainId === null || domainId === '') {
			throw 'Missing the required parameter "domainId" when calling postRoutingEmailDomainDkim';
		}

		return this.apiClient.callApi(
			'/api/v2/routing/email/domains/{domainId}/dkim', 
			'POST', 
			{ 'domainId': domainId },
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
	 * Set domain mail from settings
	 * 
	 * @param {String} domainId domain ID
	 * @param {Object} body Mail From Settings
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	postRoutingEmailDomainMailfrom(domainId, body, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'domainId' is set
		if (domainId === undefined || domainId === null || domainId === '') {
			throw 'Missing the required parameter "domainId" when calling postRoutingEmailDomainMailfrom';
		}
		// verify the required parameter 'body' is set
		if (body === undefined || body === null) {
			throw 'Missing the required parameter "body" when calling postRoutingEmailDomainMailfrom';
		}

		return this.apiClient.callApi(
			'/api/v2/routing/email/domains/{domainId}/mailfrom', 
			'POST', 
			{ 'domainId': domainId },
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
	 * Create a route
	 * 
	 * @param {String} domainName email domain
	 * @param {Object} body Route
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	postRoutingEmailDomainRoutes(domainName, body, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'domainName' is set
		if (domainName === undefined || domainName === null || domainName === '') {
			throw 'Missing the required parameter "domainName" when calling postRoutingEmailDomainRoutes';
		}
		// verify the required parameter 'body' is set
		if (body === undefined || body === null) {
			throw 'Missing the required parameter "body" when calling postRoutingEmailDomainRoutes';
		}

		return this.apiClient.callApi(
			'/api/v2/routing/email/domains/{domainName}/routes', 
			'POST', 
			{ 'domainName': domainName },
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
	 * Tests the custom SMTP server integration connection set on this ACD domain
	 * The request body is optional. If omitted, this endpoint will just test the connection of the Custom SMTP Server used by the ACD domain. If the body is specified, there will be an attempt to send an email message to the server.
	 * @param {String} domainId domain ID
	 * @param {Object} opts Optional parameters
	 * @param {Object} opts.body TestMessage
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	postRoutingEmailDomainTestconnection(domainId, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'domainId' is set
		if (domainId === undefined || domainId === null || domainId === '') {
			throw 'Missing the required parameter "domainId" when calling postRoutingEmailDomainTestconnection';
		}

		return this.apiClient.callApi(
			'/api/v2/routing/email/domains/{domainId}/testconnection', 
			'POST', 
			{ 'domainId': domainId },
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
	 * Restart domain verification
	 * 
	 * @param {String} domainId domain ID
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	postRoutingEmailDomainVerification(domainId, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'domainId' is set
		if (domainId === undefined || domainId === null || domainId === '') {
			throw 'Missing the required parameter "domainId" when calling postRoutingEmailDomainVerification';
		}

		return this.apiClient.callApi(
			'/api/v2/routing/email/domains/{domainId}/verification', 
			'POST', 
			{ 'domainId': domainId },
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
	 * Create a domain
	 * 
	 * @param {Object} body Domain
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	postRoutingEmailDomains(body, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'body' is set
		if (body === undefined || body === null) {
			throw 'Missing the required parameter "body" when calling postRoutingEmailDomains';
		}

		return this.apiClient.callApi(
			'/api/v2/routing/email/domains', 
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
	 * Tests the custom SMTP server integration connection set on this outbound domain
	 * The request body is optional. If omitted, this endpoint will just test the connection of the Custom SMTP Server for the outbound domain. If the body is specified, there will be an attempt to send an email message to the server.
	 * @param {String} domainId domain ID
	 * @param {Object} opts Optional parameters
	 * @param {Object} opts.body TestMessage
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	postRoutingEmailOutboundDomainTestconnection(domainId, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'domainId' is set
		if (domainId === undefined || domainId === null || domainId === '') {
			throw 'Missing the required parameter "domainId" when calling postRoutingEmailOutboundDomainTestconnection';
		}

		return this.apiClient.callApi(
			'/api/v2/routing/email/outbound/domains/{domainId}/testconnection', 
			'POST', 
			{ 'domainId': domainId },
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
	 * Create a domain
	 * 
	 * @param {Object} body Domain
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	postRoutingEmailOutboundDomains(body, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'body' is set
		if (body === undefined || body === null) {
			throw 'Missing the required parameter "body" when calling postRoutingEmailOutboundDomains';
		}

		return this.apiClient.callApi(
			'/api/v2/routing/email/outbound/domains', 
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
	 * Create a simulated domain
	 * 
	 * @param {Object} body Domain
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	postRoutingEmailOutboundDomainsSimulated(body, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'body' is set
		if (body === undefined || body === null) {
			throw 'Missing the required parameter "body" when calling postRoutingEmailOutboundDomainsSimulated';
		}

		return this.apiClient.callApi(
			'/api/v2/routing/email/outbound/domains/simulated', 
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
	 * Create Language
	 * 
	 * @param {Object} body Language
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	postRoutingLanguages(body, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'body' is set
		if (body === undefined || body === null) {
			throw 'Missing the required parameter "body" when calling postRoutingLanguages';
		}

		return this.apiClient.callApi(
			'/api/v2/routing/languages', 
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
	 * Create a predictor.
	 * 
	 * @param {Object} opts Optional parameters
	 * @param {Object} opts.body 
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	postRoutingPredictors(opts) { 
		opts = opts || {};
		

		return this.apiClient.callApi(
			'/api/v2/routing/predictors', 
			'POST', 
			{  },
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
	 * Create a custom Key Performance Indicator.
	 * 
	 * @param {Object} body request
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 * postRoutingPredictorsKeyperformanceindicators is a preview method and is subject to both breaking and non-breaking changes at any time without notice
	 */
	postRoutingPredictorsKeyperformanceindicators(body, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'body' is set
		if (body === undefined || body === null) {
			throw 'Missing the required parameter "body" when calling postRoutingPredictorsKeyperformanceindicators';
		}

		return this.apiClient.callApi(
			'/api/v2/routing/predictors/keyperformanceindicators', 
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
	 * Bulk add or delete up to 100 queue members
	 * 
	 * @param {String} queueId Queue ID
	 * @param {Array.<Object>} body Queue Members
	 * @param {Object} opts Optional parameters
	 * @param {Boolean} opts._delete True to delete queue members (default to false)
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	postRoutingQueueMembers(queueId, body, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'queueId' is set
		if (queueId === undefined || queueId === null || queueId === '') {
			throw 'Missing the required parameter "queueId" when calling postRoutingQueueMembers';
		}
		// verify the required parameter 'body' is set
		if (body === undefined || body === null) {
			throw 'Missing the required parameter "body" when calling postRoutingQueueMembers';
		}

		return this.apiClient.callApi(
			'/api/v2/routing/queues/{queueId}/members', 
			'POST', 
			{ 'queueId': queueId },
			{ 'delete': opts['_delete'] },
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
	 * DEPRECATED: use POST /routing/queues/{queueId}/members.  Bulk add or delete up to 100 queue members.
	 * 
	 * @param {String} queueId Queue ID
	 * @param {Array.<Object>} body Queue Members
	 * @param {Object} opts Optional parameters
	 * @param {Boolean} opts._delete True to delete queue members (default to false)
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 * @deprecated
	 */
	postRoutingQueueUsers(queueId, body, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'queueId' is set
		if (queueId === undefined || queueId === null || queueId === '') {
			throw 'Missing the required parameter "queueId" when calling postRoutingQueueUsers';
		}
		// verify the required parameter 'body' is set
		if (body === undefined || body === null) {
			throw 'Missing the required parameter "body" when calling postRoutingQueueUsers';
		}

		return this.apiClient.callApi(
			'/api/v2/routing/queues/{queueId}/users', 
			'POST', 
			{ 'queueId': queueId },
			{ 'delete': opts['_delete'] },
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
	 * Add up to 100 wrap-up codes to a queue
	 * 
	 * @param {String} queueId Queue ID
	 * @param {Array.<Object>} body List of wrapup codes
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	postRoutingQueueWrapupcodes(queueId, body, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'queueId' is set
		if (queueId === undefined || queueId === null || queueId === '') {
			throw 'Missing the required parameter "queueId" when calling postRoutingQueueWrapupcodes';
		}
		// verify the required parameter 'body' is set
		if (body === undefined || body === null) {
			throw 'Missing the required parameter "body" when calling postRoutingQueueWrapupcodes';
		}

		return this.apiClient.callApi(
			'/api/v2/routing/queues/{queueId}/wrapupcodes', 
			'POST', 
			{ 'queueId': queueId },
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
	 * Create a queue
	 * 
	 * @param {Object} body Queue
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	postRoutingQueues(body, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'body' is set
		if (body === undefined || body === null) {
			throw 'Missing the required parameter "body" when calling postRoutingQueues';
		}

		return this.apiClient.callApi(
			'/api/v2/routing/queues', 
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
	 * Add or remove member divisions for this skill group.
	 * 
	 * @param {String} skillGroupId Skill Group ID
	 * @param {Object} opts Optional parameters
	 * @param {Object} opts.body 
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	postRoutingSkillgroupMembersDivisions(skillGroupId, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'skillGroupId' is set
		if (skillGroupId === undefined || skillGroupId === null || skillGroupId === '') {
			throw 'Missing the required parameter "skillGroupId" when calling postRoutingSkillgroupMembersDivisions';
		}

		return this.apiClient.callApi(
			'/api/v2/routing/skillgroups/{skillGroupId}/members/divisions', 
			'POST', 
			{ 'skillGroupId': skillGroupId },
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
	 * Create a skill group
	 * 
	 * @param {Object} body Create skill group
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	postRoutingSkillgroups(body, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'body' is set
		if (body === undefined || body === null) {
			throw 'Missing the required parameter "body" when calling postRoutingSkillgroups';
		}

		return this.apiClient.callApi(
			'/api/v2/routing/skillgroups', 
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
	 * Create Skill
	 * 
	 * @param {Object} body Skill
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	postRoutingSkills(body, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'body' is set
		if (body === undefined || body === null) {
			throw 'Missing the required parameter "body" when calling postRoutingSkills';
		}

		return this.apiClient.callApi(
			'/api/v2/routing/skills', 
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
	 * Provision an Address for SMS
	 * 
	 * @param {Object} body SmsAddress
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	postRoutingSmsAddresses(body, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'body' is set
		if (body === undefined || body === null) {
			throw 'Missing the required parameter "body" when calling postRoutingSmsAddresses';
		}

		return this.apiClient.callApi(
			'/api/v2/routing/sms/addresses', 
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
	 * Provision a phone number for SMS
	 * When provisioning an MMS-capable phone number, if no supported content profile is specified in the request, the system automatically assigns the "SMS Default" profile. This default profile allows all media types (\*\/\*) for inbound messages and specific image types (image/gif, image/jpeg, image/png) for outbound messages. To use custom media filtering, specify a supported content profile ID in the request body.
	 * @param {Object} body SmsPhoneNumber
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	postRoutingSmsPhonenumbers(body, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'body' is set
		if (body === undefined || body === null) {
			throw 'Missing the required parameter "body" when calling postRoutingSmsPhonenumbers';
		}

		return this.apiClient.callApi(
			'/api/v2/routing/sms/phonenumbers', 
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
	 * Provision an alphanumeric number for SMS
	 * 
	 * @param {Object} body SmsPhoneNumber
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 * postRoutingSmsPhonenumbersAlphanumeric is a preview method and is subject to both breaking and non-breaking changes at any time without notice
	 */
	postRoutingSmsPhonenumbersAlphanumeric(body, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'body' is set
		if (body === undefined || body === null) {
			throw 'Missing the required parameter "body" when calling postRoutingSmsPhonenumbersAlphanumeric';
		}

		return this.apiClient.callApi(
			'/api/v2/routing/sms/phonenumbers/alphanumeric', 
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
	 * Imports a phone number for SMS
	 * 
	 * @param {Object} body SmsPhoneNumber
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	postRoutingSmsPhonenumbersImport(body, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'body' is set
		if (body === undefined || body === null) {
			throw 'Missing the required parameter "body" when calling postRoutingSmsPhonenumbersImport';
		}

		return this.apiClient.callApi(
			'/api/v2/routing/sms/phonenumbers/import', 
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
	 * Create a utilization label
	 * 
	 * @param {Object} body UtilizationLabel
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	postRoutingUtilizationLabels(body, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'body' is set
		if (body === undefined || body === null) {
			throw 'Missing the required parameter "body" when calling postRoutingUtilizationLabels';
		}

		return this.apiClient.callApi(
			'/api/v2/routing/utilization/labels', 
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
	 * Create an utilization tag
	 * 
	 * @param {Object} body UtilizationTag
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 * postRoutingUtilizationTags is a preview method and is subject to both breaking and non-breaking changes at any time without notice
	 */
	postRoutingUtilizationTags(body, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'body' is set
		if (body === undefined || body === null) {
			throw 'Missing the required parameter "body" when calling postRoutingUtilizationTags';
		}

		return this.apiClient.callApi(
			'/api/v2/routing/utilization/tags', 
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
	 * Create a wrap-up code
	 * 
	 * @param {Object} body WrapupCode
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	postRoutingWrapupcodes(body, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'body' is set
		if (body === undefined || body === null) {
			throw 'Missing the required parameter "body" when calling postRoutingWrapupcodes';
		}

		return this.apiClient.callApi(
			'/api/v2/routing/wrapupcodes', 
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
	 * Assign a routing language to a user
	 * 
	 * @param {String} userId User ID
	 * @param {Object} body Language
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	postUserRoutinglanguages(userId, body, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'userId' is set
		if (userId === undefined || userId === null || userId === '') {
			throw 'Missing the required parameter "userId" when calling postUserRoutinglanguages';
		}
		// verify the required parameter 'body' is set
		if (body === undefined || body === null) {
			throw 'Missing the required parameter "body" when calling postUserRoutinglanguages';
		}

		return this.apiClient.callApi(
			'/api/v2/users/{userId}/routinglanguages', 
			'POST', 
			{ 'userId': userId },
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
	 * Assign a routing skill to a user
	 * 
	 * @param {String} userId User ID
	 * @param {Object} body Skill
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	postUserRoutingskills(userId, body, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'userId' is set
		if (userId === undefined || userId === null || userId === '') {
			throw 'Missing the required parameter "userId" when calling postUserRoutingskills';
		}
		// verify the required parameter 'body' is set
		if (body === undefined || body === null) {
			throw 'Missing the required parameter "body" when calling postUserRoutingskills';
		}

		return this.apiClient.callApi(
			'/api/v2/users/{userId}/routingskills', 
			'POST', 
			{ 'userId': userId },
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
	 * Update the user's Direct Routing Backup settings.
	 * 
	 * @param {Object} body directRoutingBackup
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	putRoutingDirectroutingbackupSettingsMe(body, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'body' is set
		if (body === undefined || body === null) {
			throw 'Missing the required parameter "body" when calling putRoutingDirectroutingbackupSettingsMe';
		}

		return this.apiClient.callApi(
			'/api/v2/routing/directroutingbackup/settings/me', 
			'PUT', 
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
	 * Update a route
	 * 
	 * @param {String} domainName email domain
	 * @param {String} routeId route ID
	 * @param {Object} body Route
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	putRoutingEmailDomainRoute(domainName, routeId, body, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'domainName' is set
		if (domainName === undefined || domainName === null || domainName === '') {
			throw 'Missing the required parameter "domainName" when calling putRoutingEmailDomainRoute';
		}
		// verify the required parameter 'routeId' is set
		if (routeId === undefined || routeId === null || routeId === '') {
			throw 'Missing the required parameter "routeId" when calling putRoutingEmailDomainRoute';
		}
		// verify the required parameter 'body' is set
		if (body === undefined || body === null) {
			throw 'Missing the required parameter "body" when calling putRoutingEmailDomainRoute';
		}

		return this.apiClient.callApi(
			'/api/v2/routing/email/domains/{domainName}/routes/{routeId}', 
			'PUT', 
			{ 'domainName': domainName,'routeId': routeId },
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
	 * Update identity resolution settings for a route.
	 * 
	 * @param {String} domainName email domain
	 * @param {String} routeId route ID
	 * @param {Object} body 
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	putRoutingEmailDomainRouteIdentityresolution(domainName, routeId, body, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'domainName' is set
		if (domainName === undefined || domainName === null || domainName === '') {
			throw 'Missing the required parameter "domainName" when calling putRoutingEmailDomainRouteIdentityresolution';
		}
		// verify the required parameter 'routeId' is set
		if (routeId === undefined || routeId === null || routeId === '') {
			throw 'Missing the required parameter "routeId" when calling putRoutingEmailDomainRouteIdentityresolution';
		}
		// verify the required parameter 'body' is set
		if (body === undefined || body === null) {
			throw 'Missing the required parameter "body" when calling putRoutingEmailDomainRouteIdentityresolution';
		}

		return this.apiClient.callApi(
			'/api/v2/routing/email/domains/{domainName}/routes/{routeId}/identityresolution', 
			'PUT', 
			{ 'domainName': domainName,'routeId': routeId },
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
	 * Request an activation status (cname + dkim) update of an outbound domain
	 * 
	 * @param {String} domainId domain ID
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	putRoutingEmailOutboundDomainActivation(domainId, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'domainId' is set
		if (domainId === undefined || domainId === null || domainId === '') {
			throw 'Missing the required parameter "domainId" when calling putRoutingEmailOutboundDomainActivation';
		}

		return this.apiClient.callApi(
			'/api/v2/routing/email/outbound/domains/{domainId}/activation', 
			'PUT', 
			{ 'domainId': domainId },
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
	 * Update a recipient
	 * 
	 * @param {String} recipientId Recipient ID
	 * @param {Object} body Recipient
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	putRoutingMessageRecipient(recipientId, body, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'recipientId' is set
		if (recipientId === undefined || recipientId === null || recipientId === '') {
			throw 'Missing the required parameter "recipientId" when calling putRoutingMessageRecipient';
		}
		// verify the required parameter 'body' is set
		if (body === undefined || body === null) {
			throw 'Missing the required parameter "body" when calling putRoutingMessageRecipient';
		}

		return this.apiClient.callApi(
			'/api/v2/routing/message/recipients/{recipientId}', 
			'PUT', 
			{ 'recipientId': recipientId },
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
	 * Update a queue
	 * 
	 * @param {String} queueId Queue ID
	 * @param {Object} body Queue
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	putRoutingQueue(queueId, body, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'queueId' is set
		if (queueId === undefined || queueId === null || queueId === '') {
			throw 'Missing the required parameter "queueId" when calling putRoutingQueue';
		}
		// verify the required parameter 'body' is set
		if (body === undefined || body === null) {
			throw 'Missing the required parameter "body" when calling putRoutingQueue';
		}

		return this.apiClient.callApi(
			'/api/v2/routing/queues/{queueId}', 
			'PUT', 
			{ 'queueId': queueId },
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
	 * Update Queue IdentityResolution Settings.
	 * 
	 * @param {String} queueId Queue ID
	 * @param {Object} body 
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	putRoutingQueueIdentityresolution(queueId, body, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'queueId' is set
		if (queueId === undefined || queueId === null || queueId === '') {
			throw 'Missing the required parameter "queueId" when calling putRoutingQueueIdentityresolution';
		}
		// verify the required parameter 'body' is set
		if (body === undefined || body === null) {
			throw 'Missing the required parameter "body" when calling putRoutingQueueIdentityresolution';
		}

		return this.apiClient.callApi(
			'/api/v2/routing/queues/{queueId}/identityresolution', 
			'PUT', 
			{ 'queueId': queueId },
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
	 * Update an organization's routing settings
	 * 
	 * @param {Object} body Organization Settings
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	putRoutingSettings(body, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'body' is set
		if (body === undefined || body === null) {
			throw 'Missing the required parameter "body" when calling putRoutingSettings';
		}

		return this.apiClient.callApi(
			'/api/v2/routing/settings', 
			'PUT', 
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
	 * Update Transcription Settings
	 * 
	 * @param {Object} body Organization Settings
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	putRoutingSettingsTranscription(body, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'body' is set
		if (body === undefined || body === null) {
			throw 'Missing the required parameter "body" when calling putRoutingSettingsTranscription';
		}

		return this.apiClient.callApi(
			'/api/v2/routing/settings/transcription', 
			'PUT', 
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
	 * Update an SMS identity resolution settings.
	 * 
	 * @param {String} addressId Address ID
	 * @param {Object} body 
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	putRoutingSmsIdentityresolutionPhonenumber(addressId, body, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'addressId' is set
		if (addressId === undefined || addressId === null || addressId === '') {
			throw 'Missing the required parameter "addressId" when calling putRoutingSmsIdentityresolutionPhonenumber';
		}
		// verify the required parameter 'body' is set
		if (body === undefined || body === null) {
			throw 'Missing the required parameter "body" when calling putRoutingSmsIdentityresolutionPhonenumber';
		}

		return this.apiClient.callApi(
			'/api/v2/routing/sms/identityresolution/phonenumbers/{addressId}', 
			'PUT', 
			{ 'addressId': addressId },
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
	 * Update the user's Direct Routing Backup settings.
	 * 
	 * @param {String} userId User ID
	 * @param {Object} body directRoutingBackup
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	putRoutingUserDirectroutingbackupSettings(userId, body, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'userId' is set
		if (userId === undefined || userId === null || userId === '') {
			throw 'Missing the required parameter "userId" when calling putRoutingUserDirectroutingbackupSettings';
		}
		// verify the required parameter 'body' is set
		if (body === undefined || body === null) {
			throw 'Missing the required parameter "body" when calling putRoutingUserDirectroutingbackupSettings';
		}

		return this.apiClient.callApi(
			'/api/v2/routing/users/{userId}/directroutingbackup/settings', 
			'PUT', 
			{ 'userId': userId },
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
	 * Update the user's max utilization settings.  Include only those media types requiring custom configuration. Any omitted media types will be set to the organization's default values.
	 * 
	 * @param {String} userId User ID
	 * @param {Object} body utilization
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	putRoutingUserUtilization(userId, body, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'userId' is set
		if (userId === undefined || userId === null || userId === '') {
			throw 'Missing the required parameter "userId" when calling putRoutingUserUtilization';
		}
		// verify the required parameter 'body' is set
		if (body === undefined || body === null) {
			throw 'Missing the required parameter "body" when calling putRoutingUserUtilization';
		}

		return this.apiClient.callApi(
			'/api/v2/routing/users/{userId}/utilization', 
			'PUT', 
			{ 'userId': userId },
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
	 * Update the organization-wide max utilization settings.  Include only those media types requiring custom configuration. Any omitted media types will be set to the system default values.
	 * 
	 * @param {Object} body utilization
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	putRoutingUtilization(body, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'body' is set
		if (body === undefined || body === null) {
			throw 'Missing the required parameter "body" when calling putRoutingUtilization';
		}

		return this.apiClient.callApi(
			'/api/v2/routing/utilization', 
			'PUT', 
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
	 * Update a utilization label
	 * 
	 * @param {String} labelId Utilization Label ID
	 * @param {Object} body UtilizationLabel
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	putRoutingUtilizationLabel(labelId, body, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'labelId' is set
		if (labelId === undefined || labelId === null || labelId === '') {
			throw 'Missing the required parameter "labelId" when calling putRoutingUtilizationLabel';
		}
		// verify the required parameter 'body' is set
		if (body === undefined || body === null) {
			throw 'Missing the required parameter "body" when calling putRoutingUtilizationLabel';
		}

		return this.apiClient.callApi(
			'/api/v2/routing/utilization/labels/{labelId}', 
			'PUT', 
			{ 'labelId': labelId },
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
	 * Update wrap-up code
	 * 
	 * @param {String} codeId Wrapup Code ID
	 * @param {Object} body WrapupCode
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	putRoutingWrapupcode(codeId, body, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'codeId' is set
		if (codeId === undefined || codeId === null || codeId === '') {
			throw 'Missing the required parameter "codeId" when calling putRoutingWrapupcode';
		}
		// verify the required parameter 'body' is set
		if (body === undefined || body === null) {
			throw 'Missing the required parameter "body" when calling putRoutingWrapupcode';
		}

		return this.apiClient.callApi(
			'/api/v2/routing/wrapupcodes/{codeId}', 
			'PUT', 
			{ 'codeId': codeId },
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
	 * Update an assigned routing skill's proficiency
	 * 
	 * @param {String} userId User ID
	 * @param {String} skillId skillId
	 * @param {Object} body Skill
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	putUserRoutingskill(userId, skillId, body, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'userId' is set
		if (userId === undefined || userId === null || userId === '') {
			throw 'Missing the required parameter "userId" when calling putUserRoutingskill';
		}
		// verify the required parameter 'skillId' is set
		if (skillId === undefined || skillId === null || skillId === '') {
			throw 'Missing the required parameter "skillId" when calling putUserRoutingskill';
		}
		// verify the required parameter 'body' is set
		if (body === undefined || body === null) {
			throw 'Missing the required parameter "body" when calling putUserRoutingskill';
		}

		return this.apiClient.callApi(
			'/api/v2/users/{userId}/routingskills/{skillId}', 
			'PUT', 
			{ 'userId': userId,'skillId': skillId },
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
	 * Assign multiple routing skills to a user, replacing any current assignments
	 * 
	 * @param {String} userId User ID
	 * @param {Array.<Object>} body Skill
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	putUserRoutingskillsBulk(userId, body, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'userId' is set
		if (userId === undefined || userId === null || userId === '') {
			throw 'Missing the required parameter "userId" when calling putUserRoutingskillsBulk';
		}
		// verify the required parameter 'body' is set
		if (body === undefined || body === null) {
			throw 'Missing the required parameter "body" when calling putUserRoutingskillsBulk';
		}

		return this.apiClient.callApi(
			'/api/v2/users/{userId}/routingskills/bulk', 
			'PUT', 
			{ 'userId': userId },
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


export default RoutingApi;
