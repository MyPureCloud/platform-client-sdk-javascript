import ApiClient from '../ApiClient.js';


class RoutingApi {
	/**
	 * Routing service.
	 * @module purecloud-platform-client-v2/api/RoutingApi
	 * @version 126.1.0
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
	 */
	deleteRoutingAssessment(assessmentId) { 
		// verify the required parameter 'assessmentId' is set
		if (assessmentId === undefined || assessmentId === null) {
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
			['application/json']
		);
	}

	/**
	 * Delete a domain
	 * 
	 * @param {String} domainId domain ID
	 */
	deleteRoutingEmailDomain(domainId) { 
		// verify the required parameter 'domainId' is set
		if (domainId === undefined || domainId === null) {
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
			['application/json']
		);
	}

	/**
	 * Delete a route
	 * 
	 * @param {String} domainName email domain
	 * @param {String} routeId route ID
	 */
	deleteRoutingEmailDomainRoute(domainName, routeId) { 
		// verify the required parameter 'domainName' is set
		if (domainName === undefined || domainName === null) {
			throw 'Missing the required parameter "domainName" when calling deleteRoutingEmailDomainRoute';
		}
		// verify the required parameter 'routeId' is set
		if (routeId === undefined || routeId === null) {
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
			['application/json']
		);
	}

	/**
	 * Delete single predictor.
	 * 
	 * @param {String} predictorId Predictor ID
	 */
	deleteRoutingPredictor(predictorId) { 
		// verify the required parameter 'predictorId' is set
		if (predictorId === undefined || predictorId === null) {
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
			['application/json']
		);
	}

	/**
	 * Delete a queue
	 * 
	 * @param {String} queueId Queue ID
	 * @param {Object} opts Optional parameters
	 * @param {Boolean} opts.forceDelete forceDelete
	 */
	deleteRoutingQueue(queueId, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'queueId' is set
		if (queueId === undefined || queueId === null) {
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
			['application/json']
		);
	}

	/**
	 * Delete a queue member.
	 * 
	 * @param {String} queueId Queue ID
	 * @param {String} memberId Member ID
	 */
	deleteRoutingQueueMember(queueId, memberId) { 
		// verify the required parameter 'queueId' is set
		if (queueId === undefined || queueId === null) {
			throw 'Missing the required parameter "queueId" when calling deleteRoutingQueueMember';
		}
		// verify the required parameter 'memberId' is set
		if (memberId === undefined || memberId === null) {
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
			['application/json']
		);
	}

	/**
	 * DEPRECATED: use DELETE /routing/queues/{queueId}/members/{memberId}.  Delete queue member.
	 * 
	 * @param {String} queueId Queue ID
	 * @param {String} memberId Member ID
	 */
	deleteRoutingQueueUser(queueId, memberId) { 
		// verify the required parameter 'queueId' is set
		if (queueId === undefined || queueId === null) {
			throw 'Missing the required parameter "queueId" when calling deleteRoutingQueueUser';
		}
		// verify the required parameter 'memberId' is set
		if (memberId === undefined || memberId === null) {
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
			['application/json']
		);
	}

	/**
	 * Delete a wrap-up code from a queue
	 * 
	 * @param {String} queueId Queue ID
	 * @param {String} codeId Code ID
	 */
	deleteRoutingQueueWrapupcode(queueId, codeId) { 
		// verify the required parameter 'queueId' is set
		if (queueId === undefined || queueId === null) {
			throw 'Missing the required parameter "queueId" when calling deleteRoutingQueueWrapupcode';
		}
		// verify the required parameter 'codeId' is set
		if (codeId === undefined || codeId === null) {
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
			['application/json']
		);
	}

	/**
	 * Delete an organization&#39;s routing settings
	 * 
	 */
	deleteRoutingSettings() { 

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
			['application/json']
		);
	}

	/**
	 * Delete Routing Skill
	 * 
	 * @param {String} skillId Skill ID
	 */
	deleteRoutingSkill(skillId) { 
		// verify the required parameter 'skillId' is set
		if (skillId === undefined || skillId === null) {
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
			['application/json']
		);
	}

	/**
	 * Delete an Address by Id for SMS
	 * 
	 * @param {String} addressId Address ID
	 */
	deleteRoutingSmsAddress(addressId) { 
		// verify the required parameter 'addressId' is set
		if (addressId === undefined || addressId === null) {
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
			['application/json']
		);
	}

	/**
	 * Delete a phone number provisioned for SMS.
	 * 
	 * @param {String} addressId Address ID
	 * @param {Object} opts Optional parameters
	 * @param {Boolean} opts.async Delete a phone number for SMS in an asynchronous manner. If the async parameter value is true, this initiates the deletion of a provisioned phone number.  (default to false)
	 */
	deleteRoutingSmsPhonenumber(addressId, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'addressId' is set
		if (addressId === undefined || addressId === null) {
			throw 'Missing the required parameter "addressId" when calling deleteRoutingSmsPhonenumber';
		}

		return this.apiClient.callApi(
			'/api/v2/routing/sms/phonenumbers/{addressId}', 
			'DELETE', 
			{ 'addressId': addressId }, 
			{ 'async': opts['async'] }, 
			{  }, 
			{  }, 
			null, 
			['PureCloud OAuth'], 
			['application/json'], 
			['application/json']
		);
	}

	/**
	 * Delete the user&#39;s max utilization settings and revert to the organization-wide default.
	 * 
	 * @param {String} userId User ID
	 */
	deleteRoutingUserUtilization(userId) { 
		// verify the required parameter 'userId' is set
		if (userId === undefined || userId === null) {
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
			['application/json']
		);
	}

	/**
	 * Delete the organization-wide max utilization settings and revert to the system default.
	 * 
	 */
	deleteRoutingUtilization() { 

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
			['application/json']
		);
	}

	/**
	 * Delete wrap-up code
	 * 
	 * @param {String} codeId Wrapup Code ID
	 */
	deleteRoutingWrapupcode(codeId) { 
		// verify the required parameter 'codeId' is set
		if (codeId === undefined || codeId === null) {
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
			['application/json']
		);
	}

	/**
	 * Remove routing language from user
	 * 
	 * @param {String} userId User ID
	 * @param {String} languageId languageId
	 */
	deleteUserRoutinglanguage(userId, languageId) { 
		// verify the required parameter 'userId' is set
		if (userId === undefined || userId === null) {
			throw 'Missing the required parameter "userId" when calling deleteUserRoutinglanguage';
		}
		// verify the required parameter 'languageId' is set
		if (languageId === undefined || languageId === null) {
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
			['application/json']
		);
	}

	/**
	 * Remove routing skill from user
	 * 
	 * @param {String} userId User ID
	 * @param {String} skillId skillId
	 */
	deleteUserRoutingskill(userId, skillId) { 
		// verify the required parameter 'userId' is set
		if (userId === undefined || userId === null) {
			throw 'Missing the required parameter "userId" when calling deleteUserRoutingskill';
		}
		// verify the required parameter 'skillId' is set
		if (skillId === undefined || skillId === null) {
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
			['application/json']
		);
	}

	/**
	 * Retrieve a single benefit assessment.
	 * 
	 * @param {String} assessmentId Benefit Assessment ID
	 */
	getRoutingAssessment(assessmentId) { 
		// verify the required parameter 'assessmentId' is set
		if (assessmentId === undefined || assessmentId === null) {
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
			['application/json']
		);
	}

	/**
	 * Retrieve all benefit assessments.
	 * 
	 * @param {Object} opts Optional parameters
	 * @param {String} opts.before The cursor that points to the start of the set of entities that has been returned.
	 * @param {String} opts.after The cursor that points to the end of the set of entities that has been returned.
	 * @param {String} opts.limit Number of entities to return. Maximum of 200. Deprecated in favour of pageSize, use CursorQueryParameters instead.
	 * @param {String} opts.pageSize Number of entities to return. Maximum of 200.
	 * @param {Array.<String>} opts.queueId Queue ID(s) to filter assessments by.
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
			['application/json']
		);
	}

	/**
	 * Retrieve a single benefit assessments job.
	 * 
	 * @param {String} jobId Benefit Assessment Job ID
	 */
	getRoutingAssessmentsJob(jobId) { 
		// verify the required parameter 'jobId' is set
		if (jobId === undefined || jobId === null) {
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
			['application/json']
		);
	}

	/**
	 * Retrieve all benefit assessment jobs.
	 * 
	 * @param {Object} opts Optional parameters
	 * @param {Array.<String>} opts.divisionId Division ID(s) to filter assessment jobs by.
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
			['application/json']
		);
	}

	/**
	 * Get domain
	 * 
	 * @param {String} domainId domain ID
	 */
	getRoutingEmailDomain(domainId) { 
		// verify the required parameter 'domainId' is set
		if (domainId === undefined || domainId === null) {
			throw 'Missing the required parameter "domainId" when calling getRoutingEmailDomain';
		}

		return this.apiClient.callApi(
			'/api/v2/routing/email/domains/{domainId}', 
			'GET', 
			{ 'domainId': domainId }, 
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
	 * Get a route
	 * 
	 * @param {String} domainName email domain
	 * @param {String} routeId route ID
	 */
	getRoutingEmailDomainRoute(domainName, routeId) { 
		// verify the required parameter 'domainName' is set
		if (domainName === undefined || domainName === null) {
			throw 'Missing the required parameter "domainName" when calling getRoutingEmailDomainRoute';
		}
		// verify the required parameter 'routeId' is set
		if (routeId === undefined || routeId === null) {
			throw 'Missing the required parameter "routeId" when calling getRoutingEmailDomainRoute';
		}

		return this.apiClient.callApi(
			'/api/v2/routing/email/domains/{domainName}/routes/{routeId}', 
			'GET', 
			{ 'domainName': domainName,'routeId': routeId }, 
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
	 * Get routes
	 * 
	 * @param {String} domainName email domain
	 * @param {Object} opts Optional parameters
	 * @param {Number} opts.pageSize Page size (default to 25)
	 * @param {Number} opts.pageNumber Page number (default to 1)
	 * @param {String} opts.pattern Filter routes by the route&#39;s pattern property
	 */
	getRoutingEmailDomainRoutes(domainName, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'domainName' is set
		if (domainName === undefined || domainName === null) {
			throw 'Missing the required parameter "domainName" when calling getRoutingEmailDomainRoutes';
		}

		return this.apiClient.callApi(
			'/api/v2/routing/email/domains/{domainName}/routes', 
			'GET', 
			{ 'domainName': domainName }, 
			{ 'pageSize': opts['pageSize'],'pageNumber': opts['pageNumber'],'pattern': opts['pattern'] }, 
			{  }, 
			{  }, 
			null, 
			['PureCloud OAuth'], 
			['application/json'], 
			['application/json']
		);
	}

	/**
	 * Get domains
	 * 
	 */
	getRoutingEmailDomains() { 

		return this.apiClient.callApi(
			'/api/v2/routing/email/domains', 
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
	 * Get email setup
	 * 
	 */
	getRoutingEmailSetup() { 

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
			['application/json']
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
			['application/json']
		);
	}

	/**
	 * Get a recipient
	 * 
	 * @param {String} recipientId Recipient ID
	 */
	getRoutingMessageRecipient(recipientId) { 
		// verify the required parameter 'recipientId' is set
		if (recipientId === undefined || recipientId === null) {
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
			['application/json']
		);
	}

	/**
	 * Get recipients
	 * 
	 * @param {Object} opts Optional parameters
	 * @param {Object} opts.messengerType Messenger Type
	 * @param {Number} opts.pageSize Page size (default to 25)
	 * @param {Number} opts.pageNumber Page number (default to 1)
	 */
	getRoutingMessageRecipients(opts) { 
		opts = opts || {};
		

		return this.apiClient.callApi(
			'/api/v2/routing/message/recipients', 
			'GET', 
			{  }, 
			{ 'messengerType': opts['messengerType'],'pageSize': opts['pageSize'],'pageNumber': opts['pageNumber'] }, 
			{  }, 
			{  }, 
			null, 
			['PureCloud OAuth'], 
			['application/json'], 
			['application/json']
		);
	}

	/**
	 * Retrieve a single predictor.
	 * 
	 * @param {String} predictorId Predictor ID
	 */
	getRoutingPredictor(predictorId) { 
		// verify the required parameter 'predictorId' is set
		if (predictorId === undefined || predictorId === null) {
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
			['application/json']
		);
	}

	/**
	 * Retrieve all predictors.
	 * 
	 * @param {Object} opts Optional parameters
	 * @param {String} opts.before The cursor that points to the start of the set of entities that has been returned.
	 * @param {String} opts.after The cursor that points to the end of the set of entities that has been returned.
	 * @param {String} opts.limit Number of entities to return. Maximum of 200. Deprecated in favour of pageSize, use CursorQueryParameters instead.
	 * @param {String} opts.pageSize Number of entities to return. Maximum of 200.
	 * @param {Array.<String>} opts.queueId Comma-separated list of queue Ids to filter by.
	 */
	getRoutingPredictors(opts) { 
		opts = opts || {};
		

		return this.apiClient.callApi(
			'/api/v2/routing/predictors', 
			'GET', 
			{  }, 
			{ 'before': opts['before'],'after': opts['after'],'limit': opts['limit'],'pageSize': opts['pageSize'],'queueId': this.apiClient.buildCollectionParam(opts['queueId'], 'multi') }, 
			{  }, 
			{  }, 
			null, 
			['PureCloud OAuth'], 
			['application/json'], 
			['application/json']
		);
	}

	/**
	 * Get a list of Key Performance Indicators available for the predictors.
	 * 
	 */
	getRoutingPredictorsKeyperformanceindicators() { 

		return this.apiClient.callApi(
			'/api/v2/routing/predictors/keyperformanceindicators', 
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
	 * Get details about this queue.
	 * 
	 * @param {String} queueId Queue ID
	 */
	getRoutingQueue(queueId) { 
		// verify the required parameter 'queueId' is set
		if (queueId === undefined || queueId === null) {
			throw 'Missing the required parameter "queueId" when calling getRoutingQueue';
		}

		return this.apiClient.callApi(
			'/api/v2/routing/queues/{queueId}', 
			'GET', 
			{ 'queueId': queueId }, 
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
	 * Get a Comparison Period.
	 * 
	 * @param {String} queueId Queue id
	 * @param {String} comparisonPeriodId ComparisonPeriod id
	 */
	getRoutingQueueComparisonperiod(queueId, comparisonPeriodId) { 
		// verify the required parameter 'queueId' is set
		if (queueId === undefined || queueId === null) {
			throw 'Missing the required parameter "queueId" when calling getRoutingQueueComparisonperiod';
		}
		// verify the required parameter 'comparisonPeriodId' is set
		if (comparisonPeriodId === undefined || comparisonPeriodId === null) {
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
			['application/json']
		);
	}

	/**
	 * Get list of comparison periods
	 * 
	 * @param {String} queueId Queue id
	 */
	getRoutingQueueComparisonperiods(queueId) { 
		// verify the required parameter 'queueId' is set
		if (queueId === undefined || queueId === null) {
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
			['application/json']
		);
	}

	/**
	 * Get Estimated Wait Time
	 * 
	 * @param {String} queueId queueId
	 * @param {Object} opts Optional parameters
	 * @param {String} opts.conversationId conversationId
	 */
	getRoutingQueueEstimatedwaittime(queueId, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'queueId' is set
		if (queueId === undefined || queueId === null) {
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
			['application/json']
		);
	}

	/**
	 * Get Estimated Wait Time
	 * 
	 * @param {String} queueId queueId
	 * @param {String} mediaType mediaType
	 */
	getRoutingQueueMediatypeEstimatedwaittime(queueId, mediaType) { 
		// verify the required parameter 'queueId' is set
		if (queueId === undefined || queueId === null) {
			throw 'Missing the required parameter "queueId" when calling getRoutingQueueMediatypeEstimatedwaittime';
		}
		// verify the required parameter 'mediaType' is set
		if (mediaType === undefined || mediaType === null) {
			throw 'Missing the required parameter "mediaType" when calling getRoutingQueueMediatypeEstimatedwaittime';
		}

		return this.apiClient.callApi(
			'/api/v2/routing/queues/{queueId}/mediatypes/{mediaType}/estimatedwaittime', 
			'GET', 
			{ 'queueId': queueId,'mediaType': mediaType }, 
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
	 * Get the members of this queue.
	 * 
	 * @param {String} queueId Queue ID
	 * @param {Object} opts Optional parameters
	 * @param {Number} opts.pageNumber  (default to 1)
	 * @param {Number} opts.pageSize Max value is 100 (default to 25)
	 * @param {Object} opts.sortOrder Note: results are sorted by name. (default to asc)
	 * @param {Array.<String>} opts.expand Which fields, if any, to expand.
	 * @param {String} opts.name Filter by queue member name
	 * @param {Array.<String>} opts.profileSkills Filter by profile skill
	 * @param {Array.<String>} opts.skills Filter by skill
	 * @param {Array.<String>} opts.languages Filter by language
	 * @param {Array.<String>} opts.routingStatus Filter by routing status
	 * @param {Array.<String>} opts.presence Filter by presence
	 * @param {Object} opts.memberBy Filter by member type
	 * @param {Boolean} opts.joined Filter by joined status
	 */
	getRoutingQueueMembers(queueId, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'queueId' is set
		if (queueId === undefined || queueId === null) {
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
			['application/json']
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
	 */
	getRoutingQueueUsers(queueId, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'queueId' is set
		if (queueId === undefined || queueId === null) {
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
			['application/json']
		);
	}

	/**
	 * Get the wrap-up codes for a queue
	 * 
	 * @param {String} queueId Queue ID
	 * @param {Object} opts Optional parameters
	 * @param {Number} opts.pageSize Page size (default to 25)
	 * @param {Number} opts.pageNumber Page number (default to 1)
	 */
	getRoutingQueueWrapupcodes(queueId, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'queueId' is set
		if (queueId === undefined || queueId === null) {
			throw 'Missing the required parameter "queueId" when calling getRoutingQueueWrapupcodes';
		}

		return this.apiClient.callApi(
			'/api/v2/routing/queues/{queueId}/wrapupcodes', 
			'GET', 
			{ 'queueId': queueId }, 
			{ 'pageSize': opts['pageSize'],'pageNumber': opts['pageNumber'] }, 
			{  }, 
			{  }, 
			null, 
			['PureCloud OAuth'], 
			['application/json'], 
			['application/json']
		);
	}

	/**
	 * Get list of queues.
	 * 
	 * @param {Object} opts Optional parameters
	 * @param {Number} opts.pageNumber Page number (default to 1)
	 * @param {Number} opts.pageSize Page size (default to 25)
	 * @param {Object} opts.sortOrder Note: results are sorted by name. (default to asc)
	 * @param {String} opts.name Filter by queue name
	 * @param {Array.<String>} opts.id Filter by queue ID(s)
	 * @param {Array.<String>} opts.divisionId Filter by queue division ID(s)
	 */
	getRoutingQueues(opts) { 
		opts = opts || {};
		

		return this.apiClient.callApi(
			'/api/v2/routing/queues', 
			'GET', 
			{  }, 
			{ 'pageNumber': opts['pageNumber'],'pageSize': opts['pageSize'],'sortOrder': opts['sortOrder'],'name': opts['name'],'id': this.apiClient.buildCollectionParam(opts['id'], 'multi'),'divisionId': this.apiClient.buildCollectionParam(opts['divisionId'], 'multi') }, 
			{  }, 
			{  }, 
			null, 
			['PureCloud OAuth'], 
			['application/json'], 
			['application/json']
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
			['application/json']
		);
	}

	/**
	 * Get a paged listing of simplified queue objects, sorted by name.  Can be used to get a digest of all queues in an organization.
	 * 
	 * @param {Object} opts Optional parameters
	 * @param {Number} opts.pageSize Page size [max value is 500] (default to 25)
	 * @param {Number} opts.pageNumber Page number (default to 1)
	 * @param {Object} opts.sortOrder Sort order (default to asc)
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
			['application/json']
		);
	}

	/**
	 * Get a paged listing of queues the user is a member of.
	 * 
	 * @param {Object} opts Optional parameters
	 * @param {Number} opts.pageNumber Page number (default to 1)
	 * @param {Number} opts.pageSize Page size (default to 25)
	 * @param {Boolean} opts.joined Filter by joined status.
	 * @param {Object} opts.sortOrder Note: results are sorted by name. (default to asc)
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
			['application/json']
		);
	}

	/**
	 * Get an organization&#39;s routing settings
	 * 
	 */
	getRoutingSettings() { 

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
			['application/json']
		);
	}

	/**
	 * Get Contact Center Settings
	 * 
	 */
	getRoutingSettingsContactcenter() { 

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
			['application/json']
		);
	}

	/**
	 * Get Transcription Settings
	 * 
	 */
	getRoutingSettingsTranscription() { 

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
			['application/json']
		);
	}

	/**
	 * Get Routing Skill
	 * 
	 * @param {String} skillId Skill ID
	 */
	getRoutingSkill(skillId) { 
		// verify the required parameter 'skillId' is set
		if (skillId === undefined || skillId === null) {
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
			['application/json']
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
			['application/json']
		);
	}

	/**
	 * Get an Address by Id for SMS
	 * 
	 * @param {String} addressId Address ID
	 */
	getRoutingSmsAddress(addressId) { 
		// verify the required parameter 'addressId' is set
		if (addressId === undefined || addressId === null) {
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
			['application/json']
		);
	}

	/**
	 * Get a list of Addresses for SMS
	 * 
	 * @param {Object} opts Optional parameters
	 * @param {Number} opts.pageSize Page size (default to 25)
	 * @param {Number} opts.pageNumber Page number (default to 1)
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
			['application/json']
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
	 * @param {String} opts.pattern A pattern to match phone numbers. Valid characters are &#39;*&#39; and [0-9a-zA-Z]. The &#39;*&#39; character will match any single digit.
	 * @param {Object} opts.addressRequirement This indicates whether the phone number requires to have an Address registered.
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
			['application/json']
		);
	}

	/**
	 * Get a phone number provisioned for SMS.
	 * 
	 * @param {String} addressId Address ID
	 */
	getRoutingSmsPhonenumber(addressId) { 
		// verify the required parameter 'addressId' is set
		if (addressId === undefined || addressId === null) {
			throw 'Missing the required parameter "addressId" when calling getRoutingSmsPhonenumber';
		}

		return this.apiClient.callApi(
			'/api/v2/routing/sms/phonenumbers/{addressId}', 
			'GET', 
			{ 'addressId': addressId }, 
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
	 * Get a list of provisioned phone numbers.
	 * 
	 * @param {Object} opts Optional parameters
	 * @param {String} opts.phoneNumber Filter on phone number address. Allowable characters are the digits &#39;0-9&#39; and the wild card character &#39;\\*&#39;. If just digits are present, a contains search is done on the address pattern. For example, &#39;317&#39; could be matched anywhere in the address. An &#39;\\*&#39; will match multiple digits. For example, to match a specific area code within the US a pattern like &#39;1317*&#39; could be used.
	 * @param {Object} opts.phoneNumberType Filter on phone number type
	 * @param {Object} opts.phoneNumberStatus Filter on phone number status
	 * @param {Number} opts.pageSize Page size (default to 25)
	 * @param {Number} opts.pageNumber Page number (default to 1)
	 */
	getRoutingSmsPhonenumbers(opts) { 
		opts = opts || {};
		

		return this.apiClient.callApi(
			'/api/v2/routing/sms/phonenumbers', 
			'GET', 
			{  }, 
			{ 'phoneNumber': opts['phoneNumber'],'phoneNumberType': opts['phoneNumberType'],'phoneNumberStatus': opts['phoneNumberStatus'],'pageSize': opts['pageSize'],'pageNumber': opts['pageNumber'] }, 
			{  }, 
			{  }, 
			null, 
			['PureCloud OAuth'], 
			['application/json'], 
			['application/json']
		);
	}

	/**
	 * Get the user&#39;s max utilization settings.  If not configured, the organization-wide default is returned.
	 * 
	 * @param {String} userId User ID
	 */
	getRoutingUserUtilization(userId) { 
		// verify the required parameter 'userId' is set
		if (userId === undefined || userId === null) {
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
			['application/json']
		);
	}

	/**
	 * Get the organization-wide max utilization settings.
	 * 
	 */
	getRoutingUtilization() { 

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
			['application/json']
		);
	}

	/**
	 * Get details about this wrap-up code.
	 * 
	 * @param {String} codeId Wrapup Code ID
	 */
	getRoutingWrapupcode(codeId) { 
		// verify the required parameter 'codeId' is set
		if (codeId === undefined || codeId === null) {
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
			['application/json']
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
	 * @param {String} opts.name Wrapup code&#39;s name (&#39;Sort by&#39; param is ignored unless this field is provided)
	 */
	getRoutingWrapupcodes(opts) { 
		opts = opts || {};
		

		return this.apiClient.callApi(
			'/api/v2/routing/wrapupcodes', 
			'GET', 
			{  }, 
			{ 'pageSize': opts['pageSize'],'pageNumber': opts['pageNumber'],'sortBy': opts['sortBy'],'sortOrder': opts['sortOrder'],'name': opts['name'] }, 
			{  }, 
			{  }, 
			null, 
			['PureCloud OAuth'], 
			['application/json'], 
			['application/json']
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
	 */
	getUserQueues(userId, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'userId' is set
		if (userId === undefined || userId === null) {
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
			['application/json']
		);
	}

	/**
	 * List routing language for user
	 * 
	 * @param {String} userId User ID
	 * @param {Object} opts Optional parameters
	 * @param {Number} opts.pageSize Page size (default to 25)
	 * @param {Number} opts.pageNumber Page number (default to 1)
	 * @param {Object} opts.sortOrder Ascending or descending sort order (default to ASC)
	 */
	getUserRoutinglanguages(userId, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'userId' is set
		if (userId === undefined || userId === null) {
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
			['application/json']
		);
	}

	/**
	 * List routing skills for user
	 * 
	 * @param {String} userId User ID
	 * @param {Object} opts Optional parameters
	 * @param {Number} opts.pageSize Page size (default to 25)
	 * @param {Number} opts.pageNumber Page number (default to 1)
	 * @param {Object} opts.sortOrder Ascending or descending sort order (default to ASC)
	 */
	getUserRoutingskills(userId, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'userId' is set
		if (userId === undefined || userId === null) {
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
			['application/json']
		);
	}

	/**
	 * Update attributes of an in-queue conversation
	 * Returns an object indicating the updated values of all settable attributes. Supported attributes: skillIds, languageId, and priority.
	 * @param {String} conversationId Conversation ID
	 * @param {Object} body Conversation Attributes
	 */
	patchRoutingConversation(conversationId, body) { 
		// verify the required parameter 'conversationId' is set
		if (conversationId === undefined || conversationId === null) {
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
			['application/json']
		);
	}

	/**
	 * Update domain settings
	 * 
	 * @param {String} domainId domain ID
	 * @param {Object} body Domain settings
	 */
	patchRoutingEmailDomain(domainId, body) { 
		// verify the required parameter 'domainId' is set
		if (domainId === undefined || domainId === null) {
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
			['application/json']
		);
	}

	/**
	 * Validate domain settings
	 * 
	 * @param {String} domainId domain ID
	 * @param {Object} body Domain settings
	 */
	patchRoutingEmailDomainValidate(domainId, body) { 
		// verify the required parameter 'domainId' is set
		if (domainId === undefined || domainId === null) {
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
			['application/json']
		);
	}

	/**
	 * Update single predictor.
	 * 
	 * @param {String} predictorId Predictor ID
	 * @param {Object} opts Optional parameters
	 * @param {Object} opts.body 
	 */
	patchRoutingPredictor(predictorId, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'predictorId' is set
		if (predictorId === undefined || predictorId === null) {
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
			['application/json']
		);
	}

	/**
	 * Update the ring number OR joined status for a queue member.
	 * 
	 * @param {String} queueId Queue ID
	 * @param {String} memberId Member ID
	 * @param {Object} body Queue Member
	 */
	patchRoutingQueueMember(queueId, memberId, body) { 
		// verify the required parameter 'queueId' is set
		if (queueId === undefined || queueId === null) {
			throw 'Missing the required parameter "queueId" when calling patchRoutingQueueMember';
		}
		// verify the required parameter 'memberId' is set
		if (memberId === undefined || memberId === null) {
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
			['application/json']
		);
	}

	/**
	 * Join or unjoin a set of users for a queue
	 * 
	 * @param {String} queueId Queue ID
	 * @param {Array.<Object>} body Queue Members
	 */
	patchRoutingQueueMembers(queueId, body) { 
		// verify the required parameter 'queueId' is set
		if (queueId === undefined || queueId === null) {
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
			['application/json']
		);
	}

	/**
	 * DEPRECATED: use PATCH /routing/queues/{queueId}/members/{memberId}.  Update the ring number OR joined status for a User in a Queue.
	 * 
	 * @param {String} queueId Queue ID
	 * @param {String} memberId Member ID
	 * @param {Object} body Queue Member
	 */
	patchRoutingQueueUser(queueId, memberId, body) { 
		// verify the required parameter 'queueId' is set
		if (queueId === undefined || queueId === null) {
			throw 'Missing the required parameter "queueId" when calling patchRoutingQueueUser';
		}
		// verify the required parameter 'memberId' is set
		if (memberId === undefined || memberId === null) {
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
			['application/json']
		);
	}

	/**
	 * DEPRECATED: use PATCH /routing/queues/{queueId}/members.  Join or unjoin a set of users for a queue.
	 * 
	 * @param {String} queueId Queue ID
	 * @param {Array.<Object>} body Queue Members
	 */
	patchRoutingQueueUsers(queueId, body) { 
		// verify the required parameter 'queueId' is set
		if (queueId === undefined || queueId === null) {
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
			['application/json']
		);
	}

	/**
	 * Update Contact Center Settings
	 * 
	 * @param {Object} body Contact Center Settings
	 */
	patchRoutingSettingsContactcenter(body) { 
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
			['application/json']
		);
	}

	/**
	 * Join or unjoin a queue for a user
	 * 
	 * @param {String} queueId Queue ID
	 * @param {String} userId User ID
	 * @param {Object} body Queue Member
	 */
	patchUserQueue(queueId, userId, body) { 
		// verify the required parameter 'queueId' is set
		if (queueId === undefined || queueId === null) {
			throw 'Missing the required parameter "queueId" when calling patchUserQueue';
		}
		// verify the required parameter 'userId' is set
		if (userId === undefined || userId === null) {
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
			['application/json']
		);
	}

	/**
	 * Join or unjoin a set of queues for a user
	 * 
	 * @param {String} userId User ID
	 * @param {Array.<Object>} body User Queues
	 * @param {Object} opts Optional parameters
	 * @param {Array.<String>} opts.divisionId Division ID(s)
	 */
	patchUserQueues(userId, body, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'userId' is set
		if (userId === undefined || userId === null) {
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
			['application/json']
		);
	}

	/**
	 * Update routing language proficiency or state.
	 * 
	 * @param {String} userId User ID
	 * @param {String} languageId languageId
	 * @param {Object} body Language
	 */
	patchUserRoutinglanguage(userId, languageId, body) { 
		// verify the required parameter 'userId' is set
		if (userId === undefined || userId === null) {
			throw 'Missing the required parameter "userId" when calling patchUserRoutinglanguage';
		}
		// verify the required parameter 'languageId' is set
		if (languageId === undefined || languageId === null) {
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
			['application/json']
		);
	}

	/**
	 * Add bulk routing language to user. Max limit 50 languages
	 * 
	 * @param {String} userId User ID
	 * @param {Array.<Object>} body Language
	 */
	patchUserRoutinglanguagesBulk(userId, body) { 
		// verify the required parameter 'userId' is set
		if (userId === undefined || userId === null) {
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
			['application/json']
		);
	}

	/**
	 * Bulk add routing skills to user
	 * 
	 * @param {String} userId User ID
	 * @param {Array.<Object>} body Skill
	 */
	patchUserRoutingskillsBulk(userId, body) { 
		// verify the required parameter 'userId' is set
		if (userId === undefined || userId === null) {
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
			['application/json']
		);
	}

	/**
	 * Query for queue observations
	 * 
	 * @param {Object} body query
	 */
	postAnalyticsQueuesObservationsQuery(body) { 
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
			['application/json']
		);
	}

	/**
	 * Create a benefit assessment.
	 * 
	 * @param {Object} opts Optional parameters
	 * @param {Object} opts.body 
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
			['application/json']
		);
	}

	/**
	 * Create a benefit assessment job.
	 * 
	 * @param {Object} opts Optional parameters
	 * @param {Object} opts.body 
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
			['application/json']
		);
	}

	/**
	 * Create a route
	 * 
	 * @param {String} domainName email domain
	 * @param {Object} body Route
	 */
	postRoutingEmailDomainRoutes(domainName, body) { 
		// verify the required parameter 'domainName' is set
		if (domainName === undefined || domainName === null) {
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
			['application/json']
		);
	}

	/**
	 * Tests the custom SMTP server integration connection set on this domain
	 * The request body is optional. If omitted, this endpoint will just test the connection of the Custom SMTP Server. If the body is specified, there will be an attempt to send an email message to the server.
	 * @param {String} domainId domain ID
	 * @param {Object} opts Optional parameters
	 * @param {Object} opts.body TestMessage
	 */
	postRoutingEmailDomainTestconnection(domainId, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'domainId' is set
		if (domainId === undefined || domainId === null) {
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
			['application/json']
		);
	}

	/**
	 * Create a domain
	 * 
	 * @param {Object} body Domain
	 */
	postRoutingEmailDomains(body) { 
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
			['application/json']
		);
	}

	/**
	 * Create Language
	 * 
	 * @param {Object} body Language
	 */
	postRoutingLanguages(body) { 
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
			['application/json']
		);
	}

	/**
	 * Create a predictor.
	 * 
	 * @param {Object} opts Optional parameters
	 * @param {Object} opts.body 
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
			['application/json']
		);
	}

	/**
	 * Bulk add or delete up to 100 queue members
	 * 
	 * @param {String} queueId Queue ID
	 * @param {Array.<Object>} body Queue Members
	 * @param {Object} opts Optional parameters
	 * @param {Boolean} opts._delete True to delete queue members (default to false)
	 */
	postRoutingQueueMembers(queueId, body, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'queueId' is set
		if (queueId === undefined || queueId === null) {
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
			['application/json']
		);
	}

	/**
	 * DEPRECATED: use POST /routing/queues/{queueId}/members.  Bulk add or delete up to 100 queue members.
	 * 
	 * @param {String} queueId Queue ID
	 * @param {Array.<Object>} body Queue Members
	 * @param {Object} opts Optional parameters
	 * @param {Boolean} opts._delete True to delete queue members (default to false)
	 */
	postRoutingQueueUsers(queueId, body, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'queueId' is set
		if (queueId === undefined || queueId === null) {
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
			['application/json']
		);
	}

	/**
	 * Add up to 100 wrap-up codes to a queue
	 * 
	 * @param {String} queueId Queue ID
	 * @param {Array.<Object>} body List of wrapup codes
	 */
	postRoutingQueueWrapupcodes(queueId, body) { 
		// verify the required parameter 'queueId' is set
		if (queueId === undefined || queueId === null) {
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
			['application/json']
		);
	}

	/**
	 * Create a queue
	 * 
	 * @param {Object} body Queue
	 */
	postRoutingQueues(body) { 
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
			['application/json']
		);
	}

	/**
	 * Create Skill
	 * 
	 * @param {Object} body Skill
	 */
	postRoutingSkills(body) { 
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
			['application/json']
		);
	}

	/**
	 * Provision an Address for SMS
	 * 
	 * @param {Object} body SmsAddress
	 */
	postRoutingSmsAddresses(body) { 
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
			['application/json']
		);
	}

	/**
	 * Provision a phone number for SMS
	 * 
	 * @param {Object} body SmsPhoneNumber
	 * @param {Object} opts Optional parameters
	 * @param {Boolean} opts.async Provision a new phone number for SMS in an asynchronous manner. If the async parameter value is true, this initiates the provisioning of a new phone number. Check the phoneNumber&#39;s provisioningStatus for completion of this request. (default to false)
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
			{ 'async': opts['async'] }, 
			{  }, 
			{  }, 
			body, 
			['PureCloud OAuth'], 
			['application/json'], 
			['application/json']
		);
	}

	/**
	 * Create a wrap-up code
	 * 
	 * @param {Object} body WrapupCode
	 */
	postRoutingWrapupcodes(body) { 
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
			['application/json']
		);
	}

	/**
	 * Add routing language to user
	 * 
	 * @param {String} userId User ID
	 * @param {Object} body Language
	 */
	postUserRoutinglanguages(userId, body) { 
		// verify the required parameter 'userId' is set
		if (userId === undefined || userId === null) {
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
			['application/json']
		);
	}

	/**
	 * Add routing skill to user
	 * 
	 * @param {String} userId User ID
	 * @param {Object} body Skill
	 */
	postUserRoutingskills(userId, body) { 
		// verify the required parameter 'userId' is set
		if (userId === undefined || userId === null) {
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
			['application/json']
		);
	}

	/**
	 * Update a route
	 * 
	 * @param {String} domainName email domain
	 * @param {String} routeId route ID
	 * @param {Object} body Route
	 */
	putRoutingEmailDomainRoute(domainName, routeId, body) { 
		// verify the required parameter 'domainName' is set
		if (domainName === undefined || domainName === null) {
			throw 'Missing the required parameter "domainName" when calling putRoutingEmailDomainRoute';
		}
		// verify the required parameter 'routeId' is set
		if (routeId === undefined || routeId === null) {
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
			['application/json']
		);
	}

	/**
	 * Update a recipient
	 * 
	 * @param {String} recipientId Recipient ID
	 * @param {Object} body Recipient
	 */
	putRoutingMessageRecipient(recipientId, body) { 
		// verify the required parameter 'recipientId' is set
		if (recipientId === undefined || recipientId === null) {
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
			['application/json']
		);
	}

	/**
	 * Update a queue
	 * 
	 * @param {String} queueId Queue ID
	 * @param {Object} body Queue
	 */
	putRoutingQueue(queueId, body) { 
		// verify the required parameter 'queueId' is set
		if (queueId === undefined || queueId === null) {
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
			['application/json']
		);
	}

	/**
	 * Update an organization&#39;s routing settings
	 * 
	 * @param {Object} body Organization Settings
	 */
	putRoutingSettings(body) { 
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
			['application/json']
		);
	}

	/**
	 * Update Transcription Settings
	 * 
	 * @param {Object} body Organization Settings
	 */
	putRoutingSettingsTranscription(body) { 
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
			['application/json']
		);
	}

	/**
	 * Update a phone number provisioned for SMS.
	 * 
	 * @param {String} addressId Address ID
	 * @param {Object} body SmsPhoneNumber
	 * @param {Object} opts Optional parameters
	 * @param {Boolean} opts.async Update an existing phone number for SMS in an asynchronous manner. If the async parameter value is true, this initiates the update of a provisioned phone number. Check the phoneNumber&#39;s provisioningStatus for the progress of this request. (default to false)
	 */
	putRoutingSmsPhonenumber(addressId, body, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'addressId' is set
		if (addressId === undefined || addressId === null) {
			throw 'Missing the required parameter "addressId" when calling putRoutingSmsPhonenumber';
		}
		// verify the required parameter 'body' is set
		if (body === undefined || body === null) {
			throw 'Missing the required parameter "body" when calling putRoutingSmsPhonenumber';
		}

		return this.apiClient.callApi(
			'/api/v2/routing/sms/phonenumbers/{addressId}', 
			'PUT', 
			{ 'addressId': addressId }, 
			{ 'async': opts['async'] }, 
			{  }, 
			{  }, 
			body, 
			['PureCloud OAuth'], 
			['application/json'], 
			['application/json']
		);
	}

	/**
	 * Update the user&#39;s max utilization settings.  Include only those media types requiring custom configuration.
	 * 
	 * @param {String} userId User ID
	 * @param {Object} body utilization
	 */
	putRoutingUserUtilization(userId, body) { 
		// verify the required parameter 'userId' is set
		if (userId === undefined || userId === null) {
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
			['application/json']
		);
	}

	/**
	 * Update the organization-wide max utilization settings.  Include only those media types requiring custom configuration.
	 * 
	 * @param {Object} body utilization
	 */
	putRoutingUtilization(body) { 
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
			['application/json']
		);
	}

	/**
	 * Update wrap-up code
	 * 
	 * @param {String} codeId Wrapup Code ID
	 * @param {Object} body WrapupCode
	 */
	putRoutingWrapupcode(codeId, body) { 
		// verify the required parameter 'codeId' is set
		if (codeId === undefined || codeId === null) {
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
			['application/json']
		);
	}

	/**
	 * Update routing skill proficiency or state.
	 * 
	 * @param {String} userId User ID
	 * @param {String} skillId skillId
	 * @param {Object} body Skill
	 */
	putUserRoutingskill(userId, skillId, body) { 
		// verify the required parameter 'userId' is set
		if (userId === undefined || userId === null) {
			throw 'Missing the required parameter "userId" when calling putUserRoutingskill';
		}
		// verify the required parameter 'skillId' is set
		if (skillId === undefined || skillId === null) {
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
			['application/json']
		);
	}

	/**
	 * Replace all routing skills assigned to a user
	 * 
	 * @param {String} userId User ID
	 * @param {Array.<Object>} body Skill
	 */
	putUserRoutingskillsBulk(userId, body) { 
		// verify the required parameter 'userId' is set
		if (userId === undefined || userId === null) {
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
			['application/json']
		);
	}

}


export default RoutingApi;