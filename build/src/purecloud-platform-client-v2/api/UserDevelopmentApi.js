import ApiClient from '../ApiClient.js';


class UserDevelopmentApi {
	/**
	 * UserDevelopment service.
	 * @module purecloud-platform-client-v2/api/UserDevelopmentApi
	 * @version 95.0.0
	 */

	/**
	 * Constructs a new UserDevelopmentApi. 
	 * @alias module:purecloud-platform-client-v2/api/UserDevelopmentApi
	 * @class
	 * @param {module:purecloud-platform-client-v2/ApiClient} apiClient Optional API client implementation to use,
	 * default to {@link module:purecloud-platform-client-v2/ApiClient#instance} if unspecified.
	 */
	constructor(apiClient) {
		this.apiClient = apiClient || ApiClient.instance;
	}


	/**
	 * Get list of Development Activities
	 * Either moduleId or userId is required. Results are filtered based on the applicable permissions.
	 * @param {Object} opts Optional parameters
	 * @param {Array.<String>} opts.userId Specifies the list of user IDs to be queried, up to 100 user IDs. It searches for any relationship for the userId.
	 * @param {String} opts.moduleId Specifies the ID of the learning module.
	 * @param {String} opts.interval Specifies the dateDue range to be queried. Milliseconds will be truncated. A maximum of 1 year can be specified in the range. End date is not inclusive. Intervals are represented as an ISO-8601 string. For example: YYYY-MM-DDThh:mm:ss/YYYY-MM-DDThh:mm:ss
	 * @param {String} opts.completionInterval Specifies the range of completion dates to be used for filtering. A maximum of 1 year can be specified in the range. End date is not inclusive. Intervals are represented as an ISO-8601 string. For example: YYYY-MM-DDThh:mm:ss/YYYY-MM-DDThh:mm:ss
	 * @param {Object} opts.overdue Specifies if non-overdue, overdue, or all activities are returned. If not specified, all activities are returned (default to Any)
	 * @param {Number} opts.pageSize Page size (default to 25)
	 * @param {Number} opts.pageNumber Page number (default to 1)
	 * @param {Object} opts.sortOrder Specifies result set sort order sorted by the date due; if not specified, default sort order is descending (Desc) (default to Desc)
	 * @param {Array.<String>} opts.types Specifies the activity types.
	 * @param {Array.<String>} opts.statuses Specifies the activity statuses to filter by
	 * @param {Array.<String>} opts.relationship Specifies how the current user relation should be interpreted, and filters the activities returned to only those that have the specified relationship. If not specified, all relationships are returned.
	 */
	getUsersDevelopmentActivities(opts) { 
		opts = opts || {};
		

		return this.apiClient.callApi(
			'/api/v2/users/development/activities', 
			'GET', 
			{  }, 
			{ 'userId': this.apiClient.buildCollectionParam(opts['userId'], 'multi'),'moduleId': opts['moduleId'],'interval': opts['interval'],'completionInterval': opts['completionInterval'],'overdue': opts['overdue'],'pageSize': opts['pageSize'],'pageNumber': opts['pageNumber'],'sortOrder': opts['sortOrder'],'types': this.apiClient.buildCollectionParam(opts['types'], 'multi'),'statuses': this.apiClient.buildCollectionParam(opts['statuses'], 'multi'),'relationship': this.apiClient.buildCollectionParam(opts['relationship'], 'multi') }, 
			{  }, 
			{  }, 
			null, 
			['PureCloud OAuth'], 
			['application/json'], 
			['application/json']
		);
	}

	/**
	 * Get list of Development Activities for current user
	 * Results are filtered based on the applicable permissions.
	 * @param {Object} opts Optional parameters
	 * @param {String} opts.moduleId Specifies the ID of the learning module.
	 * @param {String} opts.interval Specifies the dateDue range to be queried. Milliseconds will be truncated. A maximum of 1 year can be specified in the range. End date is not inclusive. Intervals are represented as an ISO-8601 string. For example: YYYY-MM-DDThh:mm:ss/YYYY-MM-DDThh:mm:ss
	 * @param {String} opts.completionInterval Specifies the range of completion dates to be used for filtering. A maximum of 1 year can be specified in the range. End date is not inclusive. Intervals are represented as an ISO-8601 string. For example: YYYY-MM-DDThh:mm:ss/YYYY-MM-DDThh:mm:ss
	 * @param {Object} opts.overdue Specifies if non-overdue, overdue, or all activities are returned. If not specified, all activities are returned (default to Any)
	 * @param {Number} opts.pageSize Page size (default to 25)
	 * @param {Number} opts.pageNumber Page number (default to 1)
	 * @param {Object} opts.sortOrder Specifies result set sort order sorted by the date due; if not specified, default sort order is descending (Desc) (default to Desc)
	 * @param {Array.<String>} opts.types Specifies the activity types.
	 * @param {Array.<String>} opts.statuses Specifies the activity statuses to filter by
	 * @param {Array.<String>} opts.relationship Specifies how the current user relation should be interpreted, and filters the activities returned to only those that have the specified relationship. If not specified, all relationships are returned.
	 */
	getUsersDevelopmentActivitiesMe(opts) { 
		opts = opts || {};
		

		return this.apiClient.callApi(
			'/api/v2/users/development/activities/me', 
			'GET', 
			{  }, 
			{ 'moduleId': opts['moduleId'],'interval': opts['interval'],'completionInterval': opts['completionInterval'],'overdue': opts['overdue'],'pageSize': opts['pageSize'],'pageNumber': opts['pageNumber'],'sortOrder': opts['sortOrder'],'types': this.apiClient.buildCollectionParam(opts['types'], 'multi'),'statuses': this.apiClient.buildCollectionParam(opts['statuses'], 'multi'),'relationship': this.apiClient.buildCollectionParam(opts['relationship'], 'multi') }, 
			{  }, 
			{  }, 
			null, 
			['PureCloud OAuth'], 
			['application/json'], 
			['application/json']
		);
	}

	/**
	 * Get a Development Activity
	 * 
	 * @param {String} activityId Specifies the activity ID, maps to either assignment or appointment ID
	 * @param {Object} type Specifies the activity type.
	 */
	getUsersDevelopmentActivity(activityId, type) { 
		// verify the required parameter 'activityId' is set
		if (activityId === undefined || activityId === null) {
			throw 'Missing the required parameter "activityId" when calling getUsersDevelopmentActivity';
		}
		// verify the required parameter 'type' is set
		if (type === undefined || type === null) {
			throw 'Missing the required parameter "type" when calling getUsersDevelopmentActivity';
		}

		return this.apiClient.callApi(
			'/api/v2/users/development/activities/{activityId}', 
			'GET', 
			{ 'activityId': activityId }, 
			{ 'type': type }, 
			{  }, 
			{  }, 
			null, 
			['PureCloud OAuth'], 
			['application/json'], 
			['application/json']
		);
	}

	/**
	 * Retrieve aggregated development activity data
	 * Results are filtered based on the applicable permissions.
	 * @param {Object} body Aggregate Request
	 */
	postUsersDevelopmentActivitiesAggregatesQuery(body) { 
		// verify the required parameter 'body' is set
		if (body === undefined || body === null) {
			throw 'Missing the required parameter "body" when calling postUsersDevelopmentActivitiesAggregatesQuery';
		}

		return this.apiClient.callApi(
			'/api/v2/users/development/activities/aggregates/query', 
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

}


export default UserDevelopmentApi;