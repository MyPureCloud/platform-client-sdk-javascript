import ApiClient from '../ApiClient.js';


class GamificationApi {
	/**
	 * Gamification service.
	 * @module purecloud-platform-client-v2/api/GamificationApi
	 * @version 168.2.0
	 */

	/**
	 * Constructs a new GamificationApi. 
	 * @alias module:purecloud-platform-client-v2/api/GamificationApi
	 * @class
	 * @param {module:purecloud-platform-client-v2/ApiClient} apiClient Optional API client implementation to use,
	 * default to {@link module:purecloud-platform-client-v2/ApiClient#instance} if unspecified.
	 */
	constructor(apiClient) {
		this.apiClient = apiClient || ApiClient.instance;
	}


	/**
	 * Delete an External Metric Definition
	 * 
	 * @param {String} metricId Specifies the External Metric Definition ID
	 */
	deleteEmployeeperformanceExternalmetricsDefinition(metricId) { 
		// verify the required parameter 'metricId' is set
		if (metricId === undefined || metricId === null) {
			throw 'Missing the required parameter "metricId" when calling deleteEmployeeperformanceExternalmetricsDefinition';
		}

		return this.apiClient.callApi(
			'/api/v2/employeeperformance/externalmetrics/definitions/{metricId}', 
			'DELETE', 
			{ 'metricId': metricId },
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
	 * Get an External Metric Definition
	 * 
	 * @param {String} metricId Specifies the External Metric Definition ID
	 */
	getEmployeeperformanceExternalmetricsDefinition(metricId) { 
		// verify the required parameter 'metricId' is set
		if (metricId === undefined || metricId === null) {
			throw 'Missing the required parameter "metricId" when calling getEmployeeperformanceExternalmetricsDefinition';
		}

		return this.apiClient.callApi(
			'/api/v2/employeeperformance/externalmetrics/definitions/{metricId}', 
			'GET', 
			{ 'metricId': metricId },
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
	 * Get a list of External Metric Definitions of an organization, sorted by name in ascending order
	 * 
	 * @param {Object} opts Optional parameters
	 * @param {Number} opts.pageSize Page size (default to 25)
	 * @param {Number} opts.pageNumber Page number (default to 1)
	 */
	getEmployeeperformanceExternalmetricsDefinitions(opts) { 
		opts = opts || {};
		

		return this.apiClient.callApi(
			'/api/v2/employeeperformance/externalmetrics/definitions', 
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
	 * Get insights summary
	 * 
	 * @param {Object} filterType Filter type for the query request.
	 * @param {String} filterId ID for the filter type.
	 * @param {Object} granularity Granularity
	 * @param {String} comparativePeriodStartWorkday The start work day of comparative period. Dates are represented as an ISO-8601 string. For example: yyyy-MM-dd
	 * @param {String} primaryPeriodStartWorkday The start work day of primary period. Dates are represented as an ISO-8601 string. For example: yyyy-MM-dd
	 * @param {Object} opts Optional parameters
	 * @param {Number} opts.pageSize Page size (default to 25)
	 * @param {Number} opts.pageNumber Page number (default to 1)
	 * @param {Object} opts.sortKey Sort key
	 * @param {String} opts.sortMetricId Sort Metric Id
	 * @param {Object} opts.sortOrder Sort order (default to asc)
	 * @param {String} opts.userIds A list of up to 100 comma-separated user Ids
	 */
	getGamificationInsights(filterType, filterId, granularity, comparativePeriodStartWorkday, primaryPeriodStartWorkday, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'filterType' is set
		if (filterType === undefined || filterType === null) {
			throw 'Missing the required parameter "filterType" when calling getGamificationInsights';
		}
		// verify the required parameter 'filterId' is set
		if (filterId === undefined || filterId === null) {
			throw 'Missing the required parameter "filterId" when calling getGamificationInsights';
		}
		// verify the required parameter 'granularity' is set
		if (granularity === undefined || granularity === null) {
			throw 'Missing the required parameter "granularity" when calling getGamificationInsights';
		}
		// verify the required parameter 'comparativePeriodStartWorkday' is set
		if (comparativePeriodStartWorkday === undefined || comparativePeriodStartWorkday === null) {
			throw 'Missing the required parameter "comparativePeriodStartWorkday" when calling getGamificationInsights';
		}
		// verify the required parameter 'primaryPeriodStartWorkday' is set
		if (primaryPeriodStartWorkday === undefined || primaryPeriodStartWorkday === null) {
			throw 'Missing the required parameter "primaryPeriodStartWorkday" when calling getGamificationInsights';
		}

		return this.apiClient.callApi(
			'/api/v2/gamification/insights', 
			'GET', 
			{  },
			{ 'filterType': filterType,'filterId': filterId,'granularity': granularity,'comparativePeriodStartWorkday': comparativePeriodStartWorkday,'primaryPeriodStartWorkday': primaryPeriodStartWorkday,'pageSize': opts['pageSize'],'pageNumber': opts['pageNumber'],'sortKey': opts['sortKey'],'sortMetricId': opts['sortMetricId'],'sortOrder': opts['sortOrder'],'userIds': opts['userIds'] },
			{  },
			{  },
			null, 
			['PureCloud OAuth'], 
			['application/json'],
			['application/json']
		);
	}

	/**
	 * Get insights details for the current user
	 * 
	 * @param {Object} filterType Filter type for the query request.
	 * @param {String} filterId ID for the filter type.
	 * @param {Object} granularity Granularity
	 * @param {String} comparativePeriodStartWorkday The start work day of comparative period. Dates are represented as an ISO-8601 string. For example: yyyy-MM-dd
	 * @param {String} primaryPeriodStartWorkday The start work day of primary period. Dates are represented as an ISO-8601 string. For example: yyyy-MM-dd
	 */
	getGamificationInsightsDetails(filterType, filterId, granularity, comparativePeriodStartWorkday, primaryPeriodStartWorkday) { 
		// verify the required parameter 'filterType' is set
		if (filterType === undefined || filterType === null) {
			throw 'Missing the required parameter "filterType" when calling getGamificationInsightsDetails';
		}
		// verify the required parameter 'filterId' is set
		if (filterId === undefined || filterId === null) {
			throw 'Missing the required parameter "filterId" when calling getGamificationInsightsDetails';
		}
		// verify the required parameter 'granularity' is set
		if (granularity === undefined || granularity === null) {
			throw 'Missing the required parameter "granularity" when calling getGamificationInsightsDetails';
		}
		// verify the required parameter 'comparativePeriodStartWorkday' is set
		if (comparativePeriodStartWorkday === undefined || comparativePeriodStartWorkday === null) {
			throw 'Missing the required parameter "comparativePeriodStartWorkday" when calling getGamificationInsightsDetails';
		}
		// verify the required parameter 'primaryPeriodStartWorkday' is set
		if (primaryPeriodStartWorkday === undefined || primaryPeriodStartWorkday === null) {
			throw 'Missing the required parameter "primaryPeriodStartWorkday" when calling getGamificationInsightsDetails';
		}

		return this.apiClient.callApi(
			'/api/v2/gamification/insights/details', 
			'GET', 
			{  },
			{ 'filterType': filterType,'filterId': filterId,'granularity': granularity,'comparativePeriodStartWorkday': comparativePeriodStartWorkday,'primaryPeriodStartWorkday': primaryPeriodStartWorkday },
			{  },
			{  },
			null, 
			['PureCloud OAuth'], 
			['application/json'],
			['application/json']
		);
	}

	/**
	 * Get insights overall trend for the current user
	 * 
	 * @param {Object} filterType Filter type for the query request.
	 * @param {String} filterId ID for the filter type.
	 * @param {Object} granularity Granularity
	 * @param {String} comparativePeriodStartWorkday The start work day of comparative period. Dates are represented as an ISO-8601 string. For example: yyyy-MM-dd
	 * @param {String} comparativePeriodEndWorkday The end work day of comparative period. Dates are represented as an ISO-8601 string. For example: yyyy-MM-dd
	 * @param {String} primaryPeriodStartWorkday The start work day of primary period. Dates are represented as an ISO-8601 string. For example: yyyy-MM-dd
	 * @param {String} primaryPeriodEndWorkday The end work day of primary period. Dates are represented as an ISO-8601 string. For example: yyyy-MM-dd
	 */
	getGamificationInsightsGroupsTrends(filterType, filterId, granularity, comparativePeriodStartWorkday, comparativePeriodEndWorkday, primaryPeriodStartWorkday, primaryPeriodEndWorkday) { 
		// verify the required parameter 'filterType' is set
		if (filterType === undefined || filterType === null) {
			throw 'Missing the required parameter "filterType" when calling getGamificationInsightsGroupsTrends';
		}
		// verify the required parameter 'filterId' is set
		if (filterId === undefined || filterId === null) {
			throw 'Missing the required parameter "filterId" when calling getGamificationInsightsGroupsTrends';
		}
		// verify the required parameter 'granularity' is set
		if (granularity === undefined || granularity === null) {
			throw 'Missing the required parameter "granularity" when calling getGamificationInsightsGroupsTrends';
		}
		// verify the required parameter 'comparativePeriodStartWorkday' is set
		if (comparativePeriodStartWorkday === undefined || comparativePeriodStartWorkday === null) {
			throw 'Missing the required parameter "comparativePeriodStartWorkday" when calling getGamificationInsightsGroupsTrends';
		}
		// verify the required parameter 'comparativePeriodEndWorkday' is set
		if (comparativePeriodEndWorkday === undefined || comparativePeriodEndWorkday === null) {
			throw 'Missing the required parameter "comparativePeriodEndWorkday" when calling getGamificationInsightsGroupsTrends';
		}
		// verify the required parameter 'primaryPeriodStartWorkday' is set
		if (primaryPeriodStartWorkday === undefined || primaryPeriodStartWorkday === null) {
			throw 'Missing the required parameter "primaryPeriodStartWorkday" when calling getGamificationInsightsGroupsTrends';
		}
		// verify the required parameter 'primaryPeriodEndWorkday' is set
		if (primaryPeriodEndWorkday === undefined || primaryPeriodEndWorkday === null) {
			throw 'Missing the required parameter "primaryPeriodEndWorkday" when calling getGamificationInsightsGroupsTrends';
		}

		return this.apiClient.callApi(
			'/api/v2/gamification/insights/groups/trends', 
			'GET', 
			{  },
			{ 'filterType': filterType,'filterId': filterId,'granularity': granularity,'comparativePeriodStartWorkday': comparativePeriodStartWorkday,'comparativePeriodEndWorkday': comparativePeriodEndWorkday,'primaryPeriodStartWorkday': primaryPeriodStartWorkday,'primaryPeriodEndWorkday': primaryPeriodEndWorkday },
			{  },
			{  },
			null, 
			['PureCloud OAuth'], 
			['application/json'],
			['application/json']
		);
	}

	/**
	 * Get insights overall trend
	 * 
	 * @param {Object} filterType Filter type for the query request.
	 * @param {String} filterId ID for the filter type.
	 * @param {Object} granularity Granularity
	 * @param {String} comparativePeriodStartWorkday The start work day of comparative period. Dates are represented as an ISO-8601 string. For example: yyyy-MM-dd
	 * @param {String} comparativePeriodEndWorkday The end work day of comparative period. Dates are represented as an ISO-8601 string. For example: yyyy-MM-dd
	 * @param {String} primaryPeriodStartWorkday The start work day of primary period. Dates are represented as an ISO-8601 string. For example: yyyy-MM-dd
	 * @param {String} primaryPeriodEndWorkday The end work day of primary period. Dates are represented as an ISO-8601 string. For example: yyyy-MM-dd
	 */
	getGamificationInsightsGroupsTrendsAll(filterType, filterId, granularity, comparativePeriodStartWorkday, comparativePeriodEndWorkday, primaryPeriodStartWorkday, primaryPeriodEndWorkday) { 
		// verify the required parameter 'filterType' is set
		if (filterType === undefined || filterType === null) {
			throw 'Missing the required parameter "filterType" when calling getGamificationInsightsGroupsTrendsAll';
		}
		// verify the required parameter 'filterId' is set
		if (filterId === undefined || filterId === null) {
			throw 'Missing the required parameter "filterId" when calling getGamificationInsightsGroupsTrendsAll';
		}
		// verify the required parameter 'granularity' is set
		if (granularity === undefined || granularity === null) {
			throw 'Missing the required parameter "granularity" when calling getGamificationInsightsGroupsTrendsAll';
		}
		// verify the required parameter 'comparativePeriodStartWorkday' is set
		if (comparativePeriodStartWorkday === undefined || comparativePeriodStartWorkday === null) {
			throw 'Missing the required parameter "comparativePeriodStartWorkday" when calling getGamificationInsightsGroupsTrendsAll';
		}
		// verify the required parameter 'comparativePeriodEndWorkday' is set
		if (comparativePeriodEndWorkday === undefined || comparativePeriodEndWorkday === null) {
			throw 'Missing the required parameter "comparativePeriodEndWorkday" when calling getGamificationInsightsGroupsTrendsAll';
		}
		// verify the required parameter 'primaryPeriodStartWorkday' is set
		if (primaryPeriodStartWorkday === undefined || primaryPeriodStartWorkday === null) {
			throw 'Missing the required parameter "primaryPeriodStartWorkday" when calling getGamificationInsightsGroupsTrendsAll';
		}
		// verify the required parameter 'primaryPeriodEndWorkday' is set
		if (primaryPeriodEndWorkday === undefined || primaryPeriodEndWorkday === null) {
			throw 'Missing the required parameter "primaryPeriodEndWorkday" when calling getGamificationInsightsGroupsTrendsAll';
		}

		return this.apiClient.callApi(
			'/api/v2/gamification/insights/groups/trends/all', 
			'GET', 
			{  },
			{ 'filterType': filterType,'filterId': filterId,'granularity': granularity,'comparativePeriodStartWorkday': comparativePeriodStartWorkday,'comparativePeriodEndWorkday': comparativePeriodEndWorkday,'primaryPeriodStartWorkday': primaryPeriodStartWorkday,'primaryPeriodEndWorkday': primaryPeriodEndWorkday },
			{  },
			{  },
			null, 
			['PureCloud OAuth'], 
			['application/json'],
			['application/json']
		);
	}

	/**
	 * Query users in a profile during a period of time
	 * 
	 * @param {Object} filterType Filter type for the query request.
	 * @param {String} filterId ID for the filter type.
	 * @param {Object} granularity Granularity
	 * @param {String} startWorkday The start work day. Dates are represented as an ISO-8601 string. For example: yyyy-MM-dd
	 */
	getGamificationInsightsMembers(filterType, filterId, granularity, startWorkday) { 
		// verify the required parameter 'filterType' is set
		if (filterType === undefined || filterType === null) {
			throw 'Missing the required parameter "filterType" when calling getGamificationInsightsMembers';
		}
		// verify the required parameter 'filterId' is set
		if (filterId === undefined || filterId === null) {
			throw 'Missing the required parameter "filterId" when calling getGamificationInsightsMembers';
		}
		// verify the required parameter 'granularity' is set
		if (granularity === undefined || granularity === null) {
			throw 'Missing the required parameter "granularity" when calling getGamificationInsightsMembers';
		}
		// verify the required parameter 'startWorkday' is set
		if (startWorkday === undefined || startWorkday === null) {
			throw 'Missing the required parameter "startWorkday" when calling getGamificationInsightsMembers';
		}

		return this.apiClient.callApi(
			'/api/v2/gamification/insights/members', 
			'GET', 
			{  },
			{ 'filterType': filterType,'filterId': filterId,'granularity': granularity,'startWorkday': startWorkday },
			{  },
			{  },
			null, 
			['PureCloud OAuth'], 
			['application/json'],
			['application/json']
		);
	}

	/**
	 * Get insights user trend for the current user
	 * 
	 * @param {Object} filterType Filter type for the query request.
	 * @param {String} filterId ID for the filter type.
	 * @param {Object} granularity Granularity
	 * @param {String} comparativePeriodStartWorkday The start work day of comparative period. Dates are represented as an ISO-8601 string. For example: yyyy-MM-dd
	 * @param {String} comparativePeriodEndWorkday The end work day of comparative period. Dates are represented as an ISO-8601 string. For example: yyyy-MM-dd
	 * @param {String} primaryPeriodStartWorkday The start work day of primary period. Dates are represented as an ISO-8601 string. For example: yyyy-MM-dd
	 * @param {String} primaryPeriodEndWorkday The end work day of primary period. Dates are represented as an ISO-8601 string. For example: yyyy-MM-dd
	 */
	getGamificationInsightsTrends(filterType, filterId, granularity, comparativePeriodStartWorkday, comparativePeriodEndWorkday, primaryPeriodStartWorkday, primaryPeriodEndWorkday) { 
		// verify the required parameter 'filterType' is set
		if (filterType === undefined || filterType === null) {
			throw 'Missing the required parameter "filterType" when calling getGamificationInsightsTrends';
		}
		// verify the required parameter 'filterId' is set
		if (filterId === undefined || filterId === null) {
			throw 'Missing the required parameter "filterId" when calling getGamificationInsightsTrends';
		}
		// verify the required parameter 'granularity' is set
		if (granularity === undefined || granularity === null) {
			throw 'Missing the required parameter "granularity" when calling getGamificationInsightsTrends';
		}
		// verify the required parameter 'comparativePeriodStartWorkday' is set
		if (comparativePeriodStartWorkday === undefined || comparativePeriodStartWorkday === null) {
			throw 'Missing the required parameter "comparativePeriodStartWorkday" when calling getGamificationInsightsTrends';
		}
		// verify the required parameter 'comparativePeriodEndWorkday' is set
		if (comparativePeriodEndWorkday === undefined || comparativePeriodEndWorkday === null) {
			throw 'Missing the required parameter "comparativePeriodEndWorkday" when calling getGamificationInsightsTrends';
		}
		// verify the required parameter 'primaryPeriodStartWorkday' is set
		if (primaryPeriodStartWorkday === undefined || primaryPeriodStartWorkday === null) {
			throw 'Missing the required parameter "primaryPeriodStartWorkday" when calling getGamificationInsightsTrends';
		}
		// verify the required parameter 'primaryPeriodEndWorkday' is set
		if (primaryPeriodEndWorkday === undefined || primaryPeriodEndWorkday === null) {
			throw 'Missing the required parameter "primaryPeriodEndWorkday" when calling getGamificationInsightsTrends';
		}

		return this.apiClient.callApi(
			'/api/v2/gamification/insights/trends', 
			'GET', 
			{  },
			{ 'filterType': filterType,'filterId': filterId,'granularity': granularity,'comparativePeriodStartWorkday': comparativePeriodStartWorkday,'comparativePeriodEndWorkday': comparativePeriodEndWorkday,'primaryPeriodStartWorkday': primaryPeriodStartWorkday,'primaryPeriodEndWorkday': primaryPeriodEndWorkday },
			{  },
			{  },
			null, 
			['PureCloud OAuth'], 
			['application/json'],
			['application/json']
		);
	}

	/**
	 * Get insights details for the user
	 * 
	 * @param {String} userId The ID of a user.
	 * @param {Object} filterType Filter type for the query request.
	 * @param {String} filterId ID for the filter type.
	 * @param {Object} granularity Granularity
	 * @param {String} comparativePeriodStartWorkday The start work day of comparative period. Dates are represented as an ISO-8601 string. For example: yyyy-MM-dd
	 * @param {String} primaryPeriodStartWorkday The start work day of primary period. Dates are represented as an ISO-8601 string. For example: yyyy-MM-dd
	 */
	getGamificationInsightsUserDetails(userId, filterType, filterId, granularity, comparativePeriodStartWorkday, primaryPeriodStartWorkday) { 
		// verify the required parameter 'userId' is set
		if (userId === undefined || userId === null) {
			throw 'Missing the required parameter "userId" when calling getGamificationInsightsUserDetails';
		}
		// verify the required parameter 'filterType' is set
		if (filterType === undefined || filterType === null) {
			throw 'Missing the required parameter "filterType" when calling getGamificationInsightsUserDetails';
		}
		// verify the required parameter 'filterId' is set
		if (filterId === undefined || filterId === null) {
			throw 'Missing the required parameter "filterId" when calling getGamificationInsightsUserDetails';
		}
		// verify the required parameter 'granularity' is set
		if (granularity === undefined || granularity === null) {
			throw 'Missing the required parameter "granularity" when calling getGamificationInsightsUserDetails';
		}
		// verify the required parameter 'comparativePeriodStartWorkday' is set
		if (comparativePeriodStartWorkday === undefined || comparativePeriodStartWorkday === null) {
			throw 'Missing the required parameter "comparativePeriodStartWorkday" when calling getGamificationInsightsUserDetails';
		}
		// verify the required parameter 'primaryPeriodStartWorkday' is set
		if (primaryPeriodStartWorkday === undefined || primaryPeriodStartWorkday === null) {
			throw 'Missing the required parameter "primaryPeriodStartWorkday" when calling getGamificationInsightsUserDetails';
		}

		return this.apiClient.callApi(
			'/api/v2/gamification/insights/users/{userId}/details', 
			'GET', 
			{ 'userId': userId },
			{ 'filterType': filterType,'filterId': filterId,'granularity': granularity,'comparativePeriodStartWorkday': comparativePeriodStartWorkday,'primaryPeriodStartWorkday': primaryPeriodStartWorkday },
			{  },
			{  },
			null, 
			['PureCloud OAuth'], 
			['application/json'],
			['application/json']
		);
	}

	/**
	 * Get insights user trend for the user
	 * 
	 * @param {String} userId The ID of a user.
	 * @param {Object} filterType Filter type for the query request.
	 * @param {String} filterId ID for the filter type.
	 * @param {Object} granularity Granularity
	 * @param {String} comparativePeriodStartWorkday The start work day of comparative period. Dates are represented as an ISO-8601 string. For example: yyyy-MM-dd
	 * @param {String} comparativePeriodEndWorkday The end work day of comparative period. Dates are represented as an ISO-8601 string. For example: yyyy-MM-dd
	 * @param {String} primaryPeriodStartWorkday The start work day of primary period. Dates are represented as an ISO-8601 string. For example: yyyy-MM-dd
	 * @param {String} primaryPeriodEndWorkday The end work day of primary period. Dates are represented as an ISO-8601 string. For example: yyyy-MM-dd
	 */
	getGamificationInsightsUserTrends(userId, filterType, filterId, granularity, comparativePeriodStartWorkday, comparativePeriodEndWorkday, primaryPeriodStartWorkday, primaryPeriodEndWorkday) { 
		// verify the required parameter 'userId' is set
		if (userId === undefined || userId === null) {
			throw 'Missing the required parameter "userId" when calling getGamificationInsightsUserTrends';
		}
		// verify the required parameter 'filterType' is set
		if (filterType === undefined || filterType === null) {
			throw 'Missing the required parameter "filterType" when calling getGamificationInsightsUserTrends';
		}
		// verify the required parameter 'filterId' is set
		if (filterId === undefined || filterId === null) {
			throw 'Missing the required parameter "filterId" when calling getGamificationInsightsUserTrends';
		}
		// verify the required parameter 'granularity' is set
		if (granularity === undefined || granularity === null) {
			throw 'Missing the required parameter "granularity" when calling getGamificationInsightsUserTrends';
		}
		// verify the required parameter 'comparativePeriodStartWorkday' is set
		if (comparativePeriodStartWorkday === undefined || comparativePeriodStartWorkday === null) {
			throw 'Missing the required parameter "comparativePeriodStartWorkday" when calling getGamificationInsightsUserTrends';
		}
		// verify the required parameter 'comparativePeriodEndWorkday' is set
		if (comparativePeriodEndWorkday === undefined || comparativePeriodEndWorkday === null) {
			throw 'Missing the required parameter "comparativePeriodEndWorkday" when calling getGamificationInsightsUserTrends';
		}
		// verify the required parameter 'primaryPeriodStartWorkday' is set
		if (primaryPeriodStartWorkday === undefined || primaryPeriodStartWorkday === null) {
			throw 'Missing the required parameter "primaryPeriodStartWorkday" when calling getGamificationInsightsUserTrends';
		}
		// verify the required parameter 'primaryPeriodEndWorkday' is set
		if (primaryPeriodEndWorkday === undefined || primaryPeriodEndWorkday === null) {
			throw 'Missing the required parameter "primaryPeriodEndWorkday" when calling getGamificationInsightsUserTrends';
		}

		return this.apiClient.callApi(
			'/api/v2/gamification/insights/users/{userId}/trends', 
			'GET', 
			{ 'userId': userId },
			{ 'filterType': filterType,'filterId': filterId,'granularity': granularity,'comparativePeriodStartWorkday': comparativePeriodStartWorkday,'comparativePeriodEndWorkday': comparativePeriodEndWorkday,'primaryPeriodStartWorkday': primaryPeriodStartWorkday,'primaryPeriodEndWorkday': primaryPeriodEndWorkday },
			{  },
			{  },
			null, 
			['PureCloud OAuth'], 
			['application/json'],
			['application/json']
		);
	}

	/**
	 * Leaderboard of the requesting user's division or performance profile
	 * 
	 * @param {String} startWorkday Start workday to retrieve for the leaderboard. Dates are represented as an ISO-8601 string. For example: yyyy-MM-dd
	 * @param {String} endWorkday End workday to retrieve for the leaderboard. Dates are represented as an ISO-8601 string. For example: yyyy-MM-dd
	 * @param {Object} opts Optional parameters
	 * @param {String} opts.metricId Metric Id for which the leaderboard is to be generated. The total points is used if nothing is given.
	 */
	getGamificationLeaderboard(startWorkday, endWorkday, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'startWorkday' is set
		if (startWorkday === undefined || startWorkday === null) {
			throw 'Missing the required parameter "startWorkday" when calling getGamificationLeaderboard';
		}
		// verify the required parameter 'endWorkday' is set
		if (endWorkday === undefined || endWorkday === null) {
			throw 'Missing the required parameter "endWorkday" when calling getGamificationLeaderboard';
		}

		return this.apiClient.callApi(
			'/api/v2/gamification/leaderboard', 
			'GET', 
			{  },
			{ 'startWorkday': startWorkday,'endWorkday': endWorkday,'metricId': opts['metricId'] },
			{  },
			{  },
			null, 
			['PureCloud OAuth'], 
			['application/json'],
			['application/json']
		);
	}

	/**
	 * Leaderboard by filter type
	 * 
	 * @param {Object} filterType Filter type for the query request.
	 * @param {String} filterId ID for the filter type. For example, division or performance profile Id
	 * @param {String} startWorkday Start workday to retrieve for the leaderboard. Dates are represented as an ISO-8601 string. For example: yyyy-MM-dd
	 * @param {String} endWorkday End workday to retrieve for the leaderboard. Dates are represented as an ISO-8601 string. For example: yyyy-MM-dd
	 * @param {Object} opts Optional parameters
	 * @param {String} opts.metricId Metric Id for which the leaderboard is to be generated. The total points is used if nothing is given.
	 */
	getGamificationLeaderboardAll(filterType, filterId, startWorkday, endWorkday, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'filterType' is set
		if (filterType === undefined || filterType === null) {
			throw 'Missing the required parameter "filterType" when calling getGamificationLeaderboardAll';
		}
		// verify the required parameter 'filterId' is set
		if (filterId === undefined || filterId === null) {
			throw 'Missing the required parameter "filterId" when calling getGamificationLeaderboardAll';
		}
		// verify the required parameter 'startWorkday' is set
		if (startWorkday === undefined || startWorkday === null) {
			throw 'Missing the required parameter "startWorkday" when calling getGamificationLeaderboardAll';
		}
		// verify the required parameter 'endWorkday' is set
		if (endWorkday === undefined || endWorkday === null) {
			throw 'Missing the required parameter "endWorkday" when calling getGamificationLeaderboardAll';
		}

		return this.apiClient.callApi(
			'/api/v2/gamification/leaderboard/all', 
			'GET', 
			{  },
			{ 'filterType': filterType,'filterId': filterId,'startWorkday': startWorkday,'endWorkday': endWorkday,'metricId': opts['metricId'] },
			{  },
			{  },
			null, 
			['PureCloud OAuth'], 
			['application/json'],
			['application/json']
		);
	}

	/**
	 * Best Points by division or performance profile
	 * 
	 * @param {Object} filterType Filter type for the query request.
	 * @param {String} filterId ID for the filter type. For example, division or performance profile Id
	 */
	getGamificationLeaderboardAllBestpoints(filterType, filterId) { 
		// verify the required parameter 'filterType' is set
		if (filterType === undefined || filterType === null) {
			throw 'Missing the required parameter "filterType" when calling getGamificationLeaderboardAllBestpoints';
		}
		// verify the required parameter 'filterId' is set
		if (filterId === undefined || filterId === null) {
			throw 'Missing the required parameter "filterId" when calling getGamificationLeaderboardAllBestpoints';
		}

		return this.apiClient.callApi(
			'/api/v2/gamification/leaderboard/all/bestpoints', 
			'GET', 
			{  },
			{ 'filterType': filterType,'filterId': filterId },
			{  },
			{  },
			null, 
			['PureCloud OAuth'], 
			['application/json'],
			['application/json']
		);
	}

	/**
	 * Best Points of the requesting user's current performance profile or division
	 * 
	 */
	getGamificationLeaderboardBestpoints() { 

		return this.apiClient.callApi(
			'/api/v2/gamification/leaderboard/bestpoints', 
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
	 * Metric definition by id
	 * 
	 * @param {String} metricDefinitionId metric definition id
	 */
	getGamificationMetricdefinition(metricDefinitionId) { 
		// verify the required parameter 'metricDefinitionId' is set
		if (metricDefinitionId === undefined || metricDefinitionId === null) {
			throw 'Missing the required parameter "metricDefinitionId" when calling getGamificationMetricdefinition';
		}

		return this.apiClient.callApi(
			'/api/v2/gamification/metricdefinitions/{metricDefinitionId}', 
			'GET', 
			{ 'metricDefinitionId': metricDefinitionId },
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
	 * All metric definitions
	 * Retrieves the metric definitions and their corresponding default objectives used to create a gamified metric
	 */
	getGamificationMetricdefinitions() { 

		return this.apiClient.callApi(
			'/api/v2/gamification/metricdefinitions', 
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
	 * Performance profile by id
	 * 
	 * @param {String} profileId performanceProfileId
	 */
	getGamificationProfile(profileId) { 
		// verify the required parameter 'profileId' is set
		if (profileId === undefined || profileId === null) {
			throw 'Missing the required parameter "profileId" when calling getGamificationProfile';
		}

		return this.apiClient.callApi(
			'/api/v2/gamification/profiles/{profileId}', 
			'GET', 
			{ 'profileId': profileId },
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
	 * Members of a given performance profile
	 * 
	 * @param {String} profileId Profile Id
	 */
	getGamificationProfileMembers(profileId) { 
		// verify the required parameter 'profileId' is set
		if (profileId === undefined || profileId === null) {
			throw 'Missing the required parameter "profileId" when calling getGamificationProfileMembers';
		}

		return this.apiClient.callApi(
			'/api/v2/gamification/profiles/{profileId}/members', 
			'GET', 
			{ 'profileId': profileId },
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
	 * Performance profile gamified metric by id
	 * 
	 * @param {String} profileId Performance Profile Id
	 * @param {String} metricId Metric Id
	 * @param {Object} opts Optional parameters
	 * @param {String} opts.workday The objective query workday. If not specified, then it retrieves the current objective. Dates are represented as an ISO-8601 string. For example: yyyy-MM-dd
	 */
	getGamificationProfileMetric(profileId, metricId, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'profileId' is set
		if (profileId === undefined || profileId === null) {
			throw 'Missing the required parameter "profileId" when calling getGamificationProfileMetric';
		}
		// verify the required parameter 'metricId' is set
		if (metricId === undefined || metricId === null) {
			throw 'Missing the required parameter "metricId" when calling getGamificationProfileMetric';
		}

		return this.apiClient.callApi(
			'/api/v2/gamification/profiles/{profileId}/metrics/{metricId}', 
			'GET', 
			{ 'profileId': profileId,'metricId': metricId },
			{ 'workday': opts['workday'] },
			{  },
			{  },
			null, 
			['PureCloud OAuth'], 
			['application/json'],
			['application/json']
		);
	}

	/**
	 * All gamified metrics for a given performance profile
	 * 
	 * @param {String} profileId Performance Profile Id
	 * @param {Object} opts Optional parameters
	 * @param {Array.<String>} opts.expand Which fields, if any, to expand.
	 * @param {String} opts.workday The objective query workday. If not specified, then it retrieves the current objective. Dates are represented as an ISO-8601 string. For example: yyyy-MM-dd
	 * @param {String} opts.metricIds List of metric ids to filter the response (Optional, comma-separated).
	 */
	getGamificationProfileMetrics(profileId, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'profileId' is set
		if (profileId === undefined || profileId === null) {
			throw 'Missing the required parameter "profileId" when calling getGamificationProfileMetrics';
		}

		return this.apiClient.callApi(
			'/api/v2/gamification/profiles/{profileId}/metrics', 
			'GET', 
			{ 'profileId': profileId },
			{ 'expand': this.apiClient.buildCollectionParam(opts['expand'], 'multi'),'workday': opts['workday'],'metricIds': opts['metricIds'] },
			{  },
			{  },
			null, 
			['PureCloud OAuth'], 
			['application/json'],
			['application/json']
		);
	}

	/**
	 * All metrics for a given performance profile with objective details such as order and maxPoints
	 * 
	 * @param {String} profileId Performance Profile Id
	 * @param {Object} opts Optional parameters
	 * @param {String} opts.workday The objective query workday. If not specified, then it retrieves the current objective. Dates are represented as an ISO-8601 string. For example: yyyy-MM-dd
	 */
	getGamificationProfileMetricsObjectivedetails(profileId, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'profileId' is set
		if (profileId === undefined || profileId === null) {
			throw 'Missing the required parameter "profileId" when calling getGamificationProfileMetricsObjectivedetails';
		}

		return this.apiClient.callApi(
			'/api/v2/gamification/profiles/{profileId}/metrics/objectivedetails', 
			'GET', 
			{ 'profileId': profileId },
			{ 'workday': opts['workday'] },
			{  },
			{  },
			null, 
			['PureCloud OAuth'], 
			['application/json'],
			['application/json']
		);
	}

	/**
	 * All performance profiles
	 * 
	 */
	getGamificationProfiles() { 

		return this.apiClient.callApi(
			'/api/v2/gamification/profiles', 
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
	 * Performance profile of a user
	 * 
	 * @param {String} userId 
	 * @param {Object} opts Optional parameters
	 * @param {String} opts.workday Target querying workday. If not provided, then queries the current performance profile. Dates are represented as an ISO-8601 string. For example: yyyy-MM-dd
	 */
	getGamificationProfilesUser(userId, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'userId' is set
		if (userId === undefined || userId === null) {
			throw 'Missing the required parameter "userId" when calling getGamificationProfilesUser';
		}

		return this.apiClient.callApi(
			'/api/v2/gamification/profiles/users/{userId}', 
			'GET', 
			{ 'userId': userId },
			{ 'workday': opts['workday'] },
			{  },
			{  },
			null, 
			['PureCloud OAuth'], 
			['application/json'],
			['application/json']
		);
	}

	/**
	 * Performance profile of the requesting user
	 * 
	 * @param {Object} opts Optional parameters
	 * @param {String} opts.workday Target querying workday. If not provided, then queries the current performance profile. Dates are represented as an ISO-8601 string. For example: yyyy-MM-dd
	 */
	getGamificationProfilesUsersMe(opts) { 
		opts = opts || {};
		

		return this.apiClient.callApi(
			'/api/v2/gamification/profiles/users/me', 
			'GET', 
			{  },
			{ 'workday': opts['workday'] },
			{  },
			{  },
			null, 
			['PureCloud OAuth'], 
			['application/json'],
			['application/json']
		);
	}

	/**
	 * Workday performance metrics of the requesting user
	 * 
	 * @param {String} workday Target querying workday. Dates are represented as an ISO-8601 string. For example: yyyy-MM-dd
	 * @param {Object} opts Optional parameters
	 * @param {Array.<String>} opts.expand Which fields, if any, to expand.
	 */
	getGamificationScorecards(workday, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'workday' is set
		if (workday === undefined || workday === null) {
			throw 'Missing the required parameter "workday" when calling getGamificationScorecards';
		}

		return this.apiClient.callApi(
			'/api/v2/gamification/scorecards', 
			'GET', 
			{  },
			{ 'workday': workday,'expand': this.apiClient.buildCollectionParam(opts['expand'], 'multi') },
			{  },
			{  },
			null, 
			['PureCloud OAuth'], 
			['application/json'],
			['application/json']
		);
	}

	/**
	 * Attendance status metrics of the requesting user
	 * 
	 * @param {String} startWorkday Start workday of querying workdays range. Dates are represented as an ISO-8601 string. For example: yyyy-MM-dd
	 * @param {String} endWorkday End workday of querying workdays range. Dates are represented as an ISO-8601 string. For example: yyyy-MM-dd
	 */
	getGamificationScorecardsAttendance(startWorkday, endWorkday) { 
		// verify the required parameter 'startWorkday' is set
		if (startWorkday === undefined || startWorkday === null) {
			throw 'Missing the required parameter "startWorkday" when calling getGamificationScorecardsAttendance';
		}
		// verify the required parameter 'endWorkday' is set
		if (endWorkday === undefined || endWorkday === null) {
			throw 'Missing the required parameter "endWorkday" when calling getGamificationScorecardsAttendance';
		}

		return this.apiClient.callApi(
			'/api/v2/gamification/scorecards/attendance', 
			'GET', 
			{  },
			{ 'startWorkday': startWorkday,'endWorkday': endWorkday },
			{  },
			{  },
			null, 
			['PureCloud OAuth'], 
			['application/json'],
			['application/json']
		);
	}

	/**
	 * Best points of the requesting user
	 * 
	 */
	getGamificationScorecardsBestpoints() { 

		return this.apiClient.callApi(
			'/api/v2/gamification/scorecards/bestpoints', 
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
	 * All-time points of the requesting user
	 * 
	 * @param {String} endWorkday End workday of querying workdays range. Dates are represented as an ISO-8601 string. For example: yyyy-MM-dd
	 */
	getGamificationScorecardsPointsAlltime(endWorkday) { 
		// verify the required parameter 'endWorkday' is set
		if (endWorkday === undefined || endWorkday === null) {
			throw 'Missing the required parameter "endWorkday" when calling getGamificationScorecardsPointsAlltime';
		}

		return this.apiClient.callApi(
			'/api/v2/gamification/scorecards/points/alltime', 
			'GET', 
			{  },
			{ 'endWorkday': endWorkday },
			{  },
			{  },
			null, 
			['PureCloud OAuth'], 
			['application/json'],
			['application/json']
		);
	}

	/**
	 * Average points of the requesting user's division or performance profile
	 * 
	 * @param {String} workday The target workday. Dates are represented as an ISO-8601 string. For example: yyyy-MM-dd
	 */
	getGamificationScorecardsPointsAverage(workday) { 
		// verify the required parameter 'workday' is set
		if (workday === undefined || workday === null) {
			throw 'Missing the required parameter "workday" when calling getGamificationScorecardsPointsAverage';
		}

		return this.apiClient.callApi(
			'/api/v2/gamification/scorecards/points/average', 
			'GET', 
			{  },
			{ 'workday': workday },
			{  },
			{  },
			null, 
			['PureCloud OAuth'], 
			['application/json'],
			['application/json']
		);
	}

	/**
	 * Points trends of the requesting user
	 * 
	 * @param {String} startWorkday Start workday of querying workdays range. Dates are represented as an ISO-8601 string. For example: yyyy-MM-dd
	 * @param {String} endWorkday End workday of querying workdays range. Dates are represented as an ISO-8601 string. For example: yyyy-MM-dd
	 * @param {Object} opts Optional parameters
	 * @param {Object} opts.dayOfWeek Optional filter to specify which day of weeks to be included in the response
	 */
	getGamificationScorecardsPointsTrends(startWorkday, endWorkday, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'startWorkday' is set
		if (startWorkday === undefined || startWorkday === null) {
			throw 'Missing the required parameter "startWorkday" when calling getGamificationScorecardsPointsTrends';
		}
		// verify the required parameter 'endWorkday' is set
		if (endWorkday === undefined || endWorkday === null) {
			throw 'Missing the required parameter "endWorkday" when calling getGamificationScorecardsPointsTrends';
		}

		return this.apiClient.callApi(
			'/api/v2/gamification/scorecards/points/trends', 
			'GET', 
			{  },
			{ 'startWorkday': startWorkday,'endWorkday': endWorkday,'dayOfWeek': opts['dayOfWeek'] },
			{  },
			{  },
			null, 
			['PureCloud OAuth'], 
			['application/json'],
			['application/json']
		);
	}

	/**
	 * Average performance values trends by metric of a user
	 * 
	 * @param {String} profileId performanceProfileId
	 * @param {String} metricId metricId
	 * @param {String} userId 
	 * @param {String} startWorkday Start workday of querying workdays range. Dates are represented as an ISO-8601 string. For example: yyyy-MM-dd
	 * @param {String} endWorkday End workday of querying workdays range. Dates are represented as an ISO-8601 string. For example: yyyy-MM-dd
	 * @param {Object} opts Optional parameters
	 * @param {String} opts.referenceWorkday Reference workday for the trend. Used to determine the associated metric definition. If not set, then the value of endWorkday is used. Dates are represented as an ISO-8601 string. For example: yyyy-MM-dd
	 * @param {String} opts.timeZone Timezone for the workday. Defaults to UTC (default to UTC)
	 */
	getGamificationScorecardsProfileMetricUserValuesTrends(profileId, metricId, userId, startWorkday, endWorkday, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'profileId' is set
		if (profileId === undefined || profileId === null) {
			throw 'Missing the required parameter "profileId" when calling getGamificationScorecardsProfileMetricUserValuesTrends';
		}
		// verify the required parameter 'metricId' is set
		if (metricId === undefined || metricId === null) {
			throw 'Missing the required parameter "metricId" when calling getGamificationScorecardsProfileMetricUserValuesTrends';
		}
		// verify the required parameter 'userId' is set
		if (userId === undefined || userId === null) {
			throw 'Missing the required parameter "userId" when calling getGamificationScorecardsProfileMetricUserValuesTrends';
		}
		// verify the required parameter 'startWorkday' is set
		if (startWorkday === undefined || startWorkday === null) {
			throw 'Missing the required parameter "startWorkday" when calling getGamificationScorecardsProfileMetricUserValuesTrends';
		}
		// verify the required parameter 'endWorkday' is set
		if (endWorkday === undefined || endWorkday === null) {
			throw 'Missing the required parameter "endWorkday" when calling getGamificationScorecardsProfileMetricUserValuesTrends';
		}

		return this.apiClient.callApi(
			'/api/v2/gamification/scorecards/profiles/{profileId}/metrics/{metricId}/users/{userId}/values/trends', 
			'GET', 
			{ 'profileId': profileId,'metricId': metricId,'userId': userId },
			{ 'startWorkday': startWorkday,'endWorkday': endWorkday,'referenceWorkday': opts['referenceWorkday'],'timeZone': opts['timeZone'] },
			{  },
			{  },
			null, 
			['PureCloud OAuth'], 
			['application/json'],
			['application/json']
		);
	}

	/**
	 * Average performance values trends by metric of a division or a performance profile
	 * 
	 * @param {String} profileId performanceProfileId
	 * @param {String} metricId metricId
	 * @param {Object} filterType Filter type for the query request.
	 * @param {String} startWorkday Start workday of querying workdays range. Dates are represented as an ISO-8601 string. For example: yyyy-MM-dd
	 * @param {String} endWorkday End workday of querying workdays range. Dates are represented as an ISO-8601 string. For example: yyyy-MM-dd
	 * @param {Object} opts Optional parameters
	 * @param {String} opts.filterId ID for the filter type. Only required when filterType is Division.
	 * @param {String} opts.referenceWorkday Reference workday for the trend. Used to determine the associated metric definition. If not set, then the value of endWorkday is used. Dates are represented as an ISO-8601 string. For example: yyyy-MM-dd
	 * @param {String} opts.timeZone Timezone for the workday. Defaults to UTC (default to UTC)
	 */
	getGamificationScorecardsProfileMetricUsersValuesTrends(profileId, metricId, filterType, startWorkday, endWorkday, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'profileId' is set
		if (profileId === undefined || profileId === null) {
			throw 'Missing the required parameter "profileId" when calling getGamificationScorecardsProfileMetricUsersValuesTrends';
		}
		// verify the required parameter 'metricId' is set
		if (metricId === undefined || metricId === null) {
			throw 'Missing the required parameter "metricId" when calling getGamificationScorecardsProfileMetricUsersValuesTrends';
		}
		// verify the required parameter 'filterType' is set
		if (filterType === undefined || filterType === null) {
			throw 'Missing the required parameter "filterType" when calling getGamificationScorecardsProfileMetricUsersValuesTrends';
		}
		// verify the required parameter 'startWorkday' is set
		if (startWorkday === undefined || startWorkday === null) {
			throw 'Missing the required parameter "startWorkday" when calling getGamificationScorecardsProfileMetricUsersValuesTrends';
		}
		// verify the required parameter 'endWorkday' is set
		if (endWorkday === undefined || endWorkday === null) {
			throw 'Missing the required parameter "endWorkday" when calling getGamificationScorecardsProfileMetricUsersValuesTrends';
		}

		return this.apiClient.callApi(
			'/api/v2/gamification/scorecards/profiles/{profileId}/metrics/{metricId}/users/values/trends', 
			'GET', 
			{ 'profileId': profileId,'metricId': metricId },
			{ 'filterType': filterType,'filterId': opts['filterId'],'startWorkday': startWorkday,'endWorkday': endWorkday,'referenceWorkday': opts['referenceWorkday'],'timeZone': opts['timeZone'] },
			{  },
			{  },
			null, 
			['PureCloud OAuth'], 
			['application/json'],
			['application/json']
		);
	}

	/**
	 * Average performance values trends by metric of the requesting user
	 * 
	 * @param {String} profileId performanceProfileId
	 * @param {String} metricId metricId
	 * @param {String} startWorkday Start workday of querying workdays range. Dates are represented as an ISO-8601 string. For example: yyyy-MM-dd
	 * @param {String} endWorkday End workday of querying workdays range. Dates are represented as an ISO-8601 string. For example: yyyy-MM-dd
	 * @param {Object} opts Optional parameters
	 * @param {Object} opts.filterType Filter type for the query request. If not set, returns the values trends of the requesting user
	 * @param {String} opts.referenceWorkday Reference workday for the trend. Used to determine the associated metric definition. If not set, then the value of endWorkday is used. Dates are represented as an ISO-8601 string. For example: yyyy-MM-dd
	 * @param {String} opts.timeZone Timezone for the workday. Defaults to UTC (default to UTC)
	 */
	getGamificationScorecardsProfileMetricValuesTrends(profileId, metricId, startWorkday, endWorkday, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'profileId' is set
		if (profileId === undefined || profileId === null) {
			throw 'Missing the required parameter "profileId" when calling getGamificationScorecardsProfileMetricValuesTrends';
		}
		// verify the required parameter 'metricId' is set
		if (metricId === undefined || metricId === null) {
			throw 'Missing the required parameter "metricId" when calling getGamificationScorecardsProfileMetricValuesTrends';
		}
		// verify the required parameter 'startWorkday' is set
		if (startWorkday === undefined || startWorkday === null) {
			throw 'Missing the required parameter "startWorkday" when calling getGamificationScorecardsProfileMetricValuesTrends';
		}
		// verify the required parameter 'endWorkday' is set
		if (endWorkday === undefined || endWorkday === null) {
			throw 'Missing the required parameter "endWorkday" when calling getGamificationScorecardsProfileMetricValuesTrends';
		}

		return this.apiClient.callApi(
			'/api/v2/gamification/scorecards/profiles/{profileId}/metrics/{metricId}/values/trends', 
			'GET', 
			{ 'profileId': profileId,'metricId': metricId },
			{ 'filterType': opts['filterType'],'startWorkday': startWorkday,'endWorkday': endWorkday,'referenceWorkday': opts['referenceWorkday'],'timeZone': opts['timeZone'] },
			{  },
			{  },
			null, 
			['PureCloud OAuth'], 
			['application/json'],
			['application/json']
		);
	}

	/**
	 * Workday performance metrics for a user
	 * 
	 * @param {String} userId 
	 * @param {String} workday Target querying workday. Dates are represented as an ISO-8601 string. For example: yyyy-MM-dd
	 * @param {Object} opts Optional parameters
	 * @param {Array.<String>} opts.expand Which fields, if any, to expand.
	 */
	getGamificationScorecardsUser(userId, workday, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'userId' is set
		if (userId === undefined || userId === null) {
			throw 'Missing the required parameter "userId" when calling getGamificationScorecardsUser';
		}
		// verify the required parameter 'workday' is set
		if (workday === undefined || workday === null) {
			throw 'Missing the required parameter "workday" when calling getGamificationScorecardsUser';
		}

		return this.apiClient.callApi(
			'/api/v2/gamification/scorecards/users/{userId}', 
			'GET', 
			{ 'userId': userId },
			{ 'workday': workday,'expand': this.apiClient.buildCollectionParam(opts['expand'], 'multi') },
			{  },
			{  },
			null, 
			['PureCloud OAuth'], 
			['application/json'],
			['application/json']
		);
	}

	/**
	 * Attendance status metrics for a user
	 * 
	 * @param {String} userId 
	 * @param {String} startWorkday Start workday of querying workdays range. Dates are represented as an ISO-8601 string. For example: yyyy-MM-dd
	 * @param {String} endWorkday End workday of querying workdays range. Dates are represented as an ISO-8601 string. For example: yyyy-MM-dd
	 */
	getGamificationScorecardsUserAttendance(userId, startWorkday, endWorkday) { 
		// verify the required parameter 'userId' is set
		if (userId === undefined || userId === null) {
			throw 'Missing the required parameter "userId" when calling getGamificationScorecardsUserAttendance';
		}
		// verify the required parameter 'startWorkday' is set
		if (startWorkday === undefined || startWorkday === null) {
			throw 'Missing the required parameter "startWorkday" when calling getGamificationScorecardsUserAttendance';
		}
		// verify the required parameter 'endWorkday' is set
		if (endWorkday === undefined || endWorkday === null) {
			throw 'Missing the required parameter "endWorkday" when calling getGamificationScorecardsUserAttendance';
		}

		return this.apiClient.callApi(
			'/api/v2/gamification/scorecards/users/{userId}/attendance', 
			'GET', 
			{ 'userId': userId },
			{ 'startWorkday': startWorkday,'endWorkday': endWorkday },
			{  },
			{  },
			null, 
			['PureCloud OAuth'], 
			['application/json'],
			['application/json']
		);
	}

	/**
	 * Best points of a user
	 * 
	 * @param {String} userId 
	 */
	getGamificationScorecardsUserBestpoints(userId) { 
		// verify the required parameter 'userId' is set
		if (userId === undefined || userId === null) {
			throw 'Missing the required parameter "userId" when calling getGamificationScorecardsUserBestpoints';
		}

		return this.apiClient.callApi(
			'/api/v2/gamification/scorecards/users/{userId}/bestpoints', 
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
	 * All-time points for a user
	 * 
	 * @param {String} userId 
	 * @param {String} endWorkday End workday of querying workdays range. Dates are represented as an ISO-8601 string. For example: yyyy-MM-dd
	 */
	getGamificationScorecardsUserPointsAlltime(userId, endWorkday) { 
		// verify the required parameter 'userId' is set
		if (userId === undefined || userId === null) {
			throw 'Missing the required parameter "userId" when calling getGamificationScorecardsUserPointsAlltime';
		}
		// verify the required parameter 'endWorkday' is set
		if (endWorkday === undefined || endWorkday === null) {
			throw 'Missing the required parameter "endWorkday" when calling getGamificationScorecardsUserPointsAlltime';
		}

		return this.apiClient.callApi(
			'/api/v2/gamification/scorecards/users/{userId}/points/alltime', 
			'GET', 
			{ 'userId': userId },
			{ 'endWorkday': endWorkday },
			{  },
			{  },
			null, 
			['PureCloud OAuth'], 
			['application/json'],
			['application/json']
		);
	}

	/**
	 * Points trend for a user
	 * 
	 * @param {String} userId 
	 * @param {String} startWorkday Start workday of querying workdays range. Dates are represented as an ISO-8601 string. For example: yyyy-MM-dd
	 * @param {String} endWorkday End workday of querying workdays range. Dates are represented as an ISO-8601 string. For example: yyyy-MM-dd
	 * @param {Object} opts Optional parameters
	 * @param {Object} opts.dayOfWeek Optional filter to specify which day of weeks to be included in the response
	 */
	getGamificationScorecardsUserPointsTrends(userId, startWorkday, endWorkday, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'userId' is set
		if (userId === undefined || userId === null) {
			throw 'Missing the required parameter "userId" when calling getGamificationScorecardsUserPointsTrends';
		}
		// verify the required parameter 'startWorkday' is set
		if (startWorkday === undefined || startWorkday === null) {
			throw 'Missing the required parameter "startWorkday" when calling getGamificationScorecardsUserPointsTrends';
		}
		// verify the required parameter 'endWorkday' is set
		if (endWorkday === undefined || endWorkday === null) {
			throw 'Missing the required parameter "endWorkday" when calling getGamificationScorecardsUserPointsTrends';
		}

		return this.apiClient.callApi(
			'/api/v2/gamification/scorecards/users/{userId}/points/trends', 
			'GET', 
			{ 'userId': userId },
			{ 'startWorkday': startWorkday,'endWorkday': endWorkday,'dayOfWeek': opts['dayOfWeek'] },
			{  },
			{  },
			null, 
			['PureCloud OAuth'], 
			['application/json'],
			['application/json']
		);
	}

	/**
	 * Values trends of a user
	 * 
	 * @param {String} userId 
	 * @param {String} startWorkday Start workday of querying workdays range. Dates are represented as an ISO-8601 string. For example: yyyy-MM-dd
	 * @param {String} endWorkday End workday of querying workdays range. Dates are represented as an ISO-8601 string. For example: yyyy-MM-dd
	 * @param {Object} opts Optional parameters
	 * @param {String} opts.timeZone Timezone for the workday. Defaults to UTC (default to UTC)
	 */
	getGamificationScorecardsUserValuesTrends(userId, startWorkday, endWorkday, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'userId' is set
		if (userId === undefined || userId === null) {
			throw 'Missing the required parameter "userId" when calling getGamificationScorecardsUserValuesTrends';
		}
		// verify the required parameter 'startWorkday' is set
		if (startWorkday === undefined || startWorkday === null) {
			throw 'Missing the required parameter "startWorkday" when calling getGamificationScorecardsUserValuesTrends';
		}
		// verify the required parameter 'endWorkday' is set
		if (endWorkday === undefined || endWorkday === null) {
			throw 'Missing the required parameter "endWorkday" when calling getGamificationScorecardsUserValuesTrends';
		}

		return this.apiClient.callApi(
			'/api/v2/gamification/scorecards/users/{userId}/values/trends', 
			'GET', 
			{ 'userId': userId },
			{ 'startWorkday': startWorkday,'endWorkday': endWorkday,'timeZone': opts['timeZone'] },
			{  },
			{  },
			null, 
			['PureCloud OAuth'], 
			['application/json'],
			['application/json']
		);
	}

	/**
	 * Workday average points by target group
	 * 
	 * @param {Object} filterType Filter type for the query request.
	 * @param {String} filterId ID for the filter type.
	 * @param {String} workday The target workday. Dates are represented as an ISO-8601 string. For example: yyyy-MM-dd
	 */
	getGamificationScorecardsUsersPointsAverage(filterType, filterId, workday) { 
		// verify the required parameter 'filterType' is set
		if (filterType === undefined || filterType === null) {
			throw 'Missing the required parameter "filterType" when calling getGamificationScorecardsUsersPointsAverage';
		}
		// verify the required parameter 'filterId' is set
		if (filterId === undefined || filterId === null) {
			throw 'Missing the required parameter "filterId" when calling getGamificationScorecardsUsersPointsAverage';
		}
		// verify the required parameter 'workday' is set
		if (workday === undefined || workday === null) {
			throw 'Missing the required parameter "workday" when calling getGamificationScorecardsUsersPointsAverage';
		}

		return this.apiClient.callApi(
			'/api/v2/gamification/scorecards/users/points/average', 
			'GET', 
			{  },
			{ 'filterType': filterType,'filterId': filterId,'workday': workday },
			{  },
			{  },
			null, 
			['PureCloud OAuth'], 
			['application/json'],
			['application/json']
		);
	}

	/**
	 * Workday average values by target group
	 * 
	 * @param {Object} filterType Filter type for the query request.
	 * @param {String} filterId ID for the filter type. For example, division Id
	 * @param {String} workday The target workday. Dates are represented as an ISO-8601 string. For example: yyyy-MM-dd
	 * @param {Object} opts Optional parameters
	 * @param {String} opts.timeZone Timezone for the workday. Defaults to UTC (default to UTC)
	 */
	getGamificationScorecardsUsersValuesAverage(filterType, filterId, workday, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'filterType' is set
		if (filterType === undefined || filterType === null) {
			throw 'Missing the required parameter "filterType" when calling getGamificationScorecardsUsersValuesAverage';
		}
		// verify the required parameter 'filterId' is set
		if (filterId === undefined || filterId === null) {
			throw 'Missing the required parameter "filterId" when calling getGamificationScorecardsUsersValuesAverage';
		}
		// verify the required parameter 'workday' is set
		if (workday === undefined || workday === null) {
			throw 'Missing the required parameter "workday" when calling getGamificationScorecardsUsersValuesAverage';
		}

		return this.apiClient.callApi(
			'/api/v2/gamification/scorecards/users/values/average', 
			'GET', 
			{  },
			{ 'filterType': filterType,'filterId': filterId,'workday': workday,'timeZone': opts['timeZone'] },
			{  },
			{  },
			null, 
			['PureCloud OAuth'], 
			['application/json'],
			['application/json']
		);
	}

	/**
	 * Values trend by target group
	 * 
	 * @param {Object} filterType Filter type for the query request.
	 * @param {String} filterId ID for the filter type.
	 * @param {String} startWorkday Start workday of querying workdays range. Dates are represented as an ISO-8601 string. For example: yyyy-MM-dd
	 * @param {String} endWorkday End workday of querying workdays range. Dates are represented as an ISO-8601 string. For example: yyyy-MM-dd
	 * @param {Object} opts Optional parameters
	 * @param {String} opts.timeZone Timezone for the workday. Defaults to UTC (default to UTC)
	 */
	getGamificationScorecardsUsersValuesTrends(filterType, filterId, startWorkday, endWorkday, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'filterType' is set
		if (filterType === undefined || filterType === null) {
			throw 'Missing the required parameter "filterType" when calling getGamificationScorecardsUsersValuesTrends';
		}
		// verify the required parameter 'filterId' is set
		if (filterId === undefined || filterId === null) {
			throw 'Missing the required parameter "filterId" when calling getGamificationScorecardsUsersValuesTrends';
		}
		// verify the required parameter 'startWorkday' is set
		if (startWorkday === undefined || startWorkday === null) {
			throw 'Missing the required parameter "startWorkday" when calling getGamificationScorecardsUsersValuesTrends';
		}
		// verify the required parameter 'endWorkday' is set
		if (endWorkday === undefined || endWorkday === null) {
			throw 'Missing the required parameter "endWorkday" when calling getGamificationScorecardsUsersValuesTrends';
		}

		return this.apiClient.callApi(
			'/api/v2/gamification/scorecards/users/values/trends', 
			'GET', 
			{  },
			{ 'filterType': filterType,'filterId': filterId,'startWorkday': startWorkday,'endWorkday': endWorkday,'timeZone': opts['timeZone'] },
			{  },
			{  },
			null, 
			['PureCloud OAuth'], 
			['application/json'],
			['application/json']
		);
	}

	/**
	 * Average values of the requesting user's division or performance profile
	 * 
	 * @param {String} workday The target workday. Dates are represented as an ISO-8601 string. For example: yyyy-MM-dd
	 * @param {Object} opts Optional parameters
	 * @param {String} opts.timeZone Timezone for the workday. Defaults to UTC (default to UTC)
	 */
	getGamificationScorecardsValuesAverage(workday, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'workday' is set
		if (workday === undefined || workday === null) {
			throw 'Missing the required parameter "workday" when calling getGamificationScorecardsValuesAverage';
		}

		return this.apiClient.callApi(
			'/api/v2/gamification/scorecards/values/average', 
			'GET', 
			{  },
			{ 'workday': workday,'timeZone': opts['timeZone'] },
			{  },
			{  },
			null, 
			['PureCloud OAuth'], 
			['application/json'],
			['application/json']
		);
	}

	/**
	 * Values trends of the requesting user or group
	 * 
	 * @param {String} startWorkday Start workday of querying workdays range. Dates are represented as an ISO-8601 string. For example: yyyy-MM-dd
	 * @param {String} endWorkday End workday of querying workdays range. Dates are represented as an ISO-8601 string. For example: yyyy-MM-dd
	 * @param {Object} opts Optional parameters
	 * @param {Object} opts.filterType Filter type for the query request. If not set, then the request is for the requesting user.
	 * @param {String} opts.referenceWorkday Reference workday for the trend. Used to determine the profile of the user as of this date. If not set, then the user's current profile will be used. Dates are represented as an ISO-8601 string. For example: yyyy-MM-dd
	 * @param {String} opts.timeZone Timezone for the workday. Defaults to UTC (default to UTC)
	 */
	getGamificationScorecardsValuesTrends(startWorkday, endWorkday, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'startWorkday' is set
		if (startWorkday === undefined || startWorkday === null) {
			throw 'Missing the required parameter "startWorkday" when calling getGamificationScorecardsValuesTrends';
		}
		// verify the required parameter 'endWorkday' is set
		if (endWorkday === undefined || endWorkday === null) {
			throw 'Missing the required parameter "endWorkday" when calling getGamificationScorecardsValuesTrends';
		}

		return this.apiClient.callApi(
			'/api/v2/gamification/scorecards/values/trends', 
			'GET', 
			{  },
			{ 'filterType': opts['filterType'],'referenceWorkday': opts['referenceWorkday'],'startWorkday': startWorkday,'endWorkday': endWorkday,'timeZone': opts['timeZone'] },
			{  },
			{  },
			null, 
			['PureCloud OAuth'], 
			['application/json'],
			['application/json']
		);
	}

	/**
	 * Gamification activation status
	 * 
	 */
	getGamificationStatus() { 

		return this.apiClient.callApi(
			'/api/v2/gamification/status', 
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
	 * Objective template by id
	 * 
	 * @param {String} templateId template id
	 */
	getGamificationTemplate(templateId) { 
		// verify the required parameter 'templateId' is set
		if (templateId === undefined || templateId === null) {
			throw 'Missing the required parameter "templateId" when calling getGamificationTemplate';
		}

		return this.apiClient.callApi(
			'/api/v2/gamification/templates/{templateId}', 
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
	 * All objective templates
	 * 
	 */
	getGamificationTemplates() { 

		return this.apiClient.callApi(
			'/api/v2/gamification/templates', 
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
	 * Update External Metric Definition
	 * 
	 * @param {String} metricId Specifies the metric definition ID
	 * @param {Object} body The External Metric Definition parameters to be updated
	 */
	patchEmployeeperformanceExternalmetricsDefinition(metricId, body) { 
		// verify the required parameter 'metricId' is set
		if (metricId === undefined || metricId === null) {
			throw 'Missing the required parameter "metricId" when calling patchEmployeeperformanceExternalmetricsDefinition';
		}
		// verify the required parameter 'body' is set
		if (body === undefined || body === null) {
			throw 'Missing the required parameter "body" when calling patchEmployeeperformanceExternalmetricsDefinition';
		}

		return this.apiClient.callApi(
			'/api/v2/employeeperformance/externalmetrics/definitions/{metricId}', 
			'PATCH', 
			{ 'metricId': metricId },
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
	 * Write External Metric Data
	 * 
	 * @param {Object} opts Optional parameters
	 * @param {Object} opts.body The External Metric Data to be added
	 */
	postEmployeeperformanceExternalmetricsData(opts) { 
		opts = opts || {};
		

		return this.apiClient.callApi(
			'/api/v2/employeeperformance/externalmetrics/data', 
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
	 * Create External Metric Definition
	 * 
	 * @param {Object} opts Optional parameters
	 * @param {Object} opts.body The External Metric Definition to be created
	 */
	postEmployeeperformanceExternalmetricsDefinitions(opts) { 
		opts = opts || {};
		

		return this.apiClient.callApi(
			'/api/v2/employeeperformance/externalmetrics/definitions', 
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
	 * Activate a performance profile
	 * 
	 * @param {String} profileId performanceProfileId
	 */
	postGamificationProfileActivate(profileId) { 
		// verify the required parameter 'profileId' is set
		if (profileId === undefined || profileId === null) {
			throw 'Missing the required parameter "profileId" when calling postGamificationProfileActivate';
		}

		return this.apiClient.callApi(
			'/api/v2/gamification/profiles/{profileId}/activate', 
			'POST', 
			{ 'profileId': profileId },
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
	 * Deactivate a performance profile
	 * 
	 * @param {String} profileId performanceProfileId
	 */
	postGamificationProfileDeactivate(profileId) { 
		// verify the required parameter 'profileId' is set
		if (profileId === undefined || profileId === null) {
			throw 'Missing the required parameter "profileId" when calling postGamificationProfileDeactivate';
		}

		return this.apiClient.callApi(
			'/api/v2/gamification/profiles/{profileId}/deactivate', 
			'POST', 
			{ 'profileId': profileId },
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
	 * Assign members to a given performance profile
	 * 
	 * @param {String} profileId Profile Id
	 * @param {Object} body assignUsers
	 */
	postGamificationProfileMembers(profileId, body) { 
		// verify the required parameter 'profileId' is set
		if (profileId === undefined || profileId === null) {
			throw 'Missing the required parameter "profileId" when calling postGamificationProfileMembers';
		}
		// verify the required parameter 'body' is set
		if (body === undefined || body === null) {
			throw 'Missing the required parameter "body" when calling postGamificationProfileMembers';
		}

		return this.apiClient.callApi(
			'/api/v2/gamification/profiles/{profileId}/members', 
			'POST', 
			{ 'profileId': profileId },
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
	 * Validate member assignment
	 * 
	 * @param {String} profileId Profile Id
	 * @param {Object} body memberAssignments
	 */
	postGamificationProfileMembersValidate(profileId, body) { 
		// verify the required parameter 'profileId' is set
		if (profileId === undefined || profileId === null) {
			throw 'Missing the required parameter "profileId" when calling postGamificationProfileMembersValidate';
		}
		// verify the required parameter 'body' is set
		if (body === undefined || body === null) {
			throw 'Missing the required parameter "body" when calling postGamificationProfileMembersValidate';
		}

		return this.apiClient.callApi(
			'/api/v2/gamification/profiles/{profileId}/members/validate', 
			'POST', 
			{ 'profileId': profileId },
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
	 * Creates a linked metric
	 * 
	 * @param {String} sourceProfileId Source Performance Profile Id
	 * @param {String} sourceMetricId Source Metric Id
	 * @param {Object} body linkedMetric
	 */
	postGamificationProfileMetricLink(sourceProfileId, sourceMetricId, body) { 
		// verify the required parameter 'sourceProfileId' is set
		if (sourceProfileId === undefined || sourceProfileId === null) {
			throw 'Missing the required parameter "sourceProfileId" when calling postGamificationProfileMetricLink';
		}
		// verify the required parameter 'sourceMetricId' is set
		if (sourceMetricId === undefined || sourceMetricId === null) {
			throw 'Missing the required parameter "sourceMetricId" when calling postGamificationProfileMetricLink';
		}
		// verify the required parameter 'body' is set
		if (body === undefined || body === null) {
			throw 'Missing the required parameter "body" when calling postGamificationProfileMetricLink';
		}

		return this.apiClient.callApi(
			'/api/v2/gamification/profiles/{sourceProfileId}/metrics/{sourceMetricId}/link', 
			'POST', 
			{ 'sourceProfileId': sourceProfileId,'sourceMetricId': sourceMetricId },
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
	 * Creates a gamified metric with a given metric definition and metric objective under in a performance profile
	 * 
	 * @param {String} profileId Performance Profile Id
	 * @param {Object} body Metric
	 */
	postGamificationProfileMetrics(profileId, body) { 
		// verify the required parameter 'profileId' is set
		if (profileId === undefined || profileId === null) {
			throw 'Missing the required parameter "profileId" when calling postGamificationProfileMetrics';
		}
		// verify the required parameter 'body' is set
		if (body === undefined || body === null) {
			throw 'Missing the required parameter "body" when calling postGamificationProfileMetrics';
		}

		return this.apiClient.callApi(
			'/api/v2/gamification/profiles/{profileId}/metrics', 
			'POST', 
			{ 'profileId': profileId },
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
	 * Create a new custom performance profile
	 * 
	 * @param {Object} body performanceProfile
	 * @param {Object} opts Optional parameters
	 * @param {Boolean} opts.copyMetrics Flag to copy metrics. If set to false, there will be no metrics associated with the new profile. If set to true or is absent (the default behavior), all metrics from the default profile will be copied over into the new profile. (default to true)
	 */
	postGamificationProfiles(body, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'body' is set
		if (body === undefined || body === null) {
			throw 'Missing the required parameter "body" when calling postGamificationProfiles';
		}

		return this.apiClient.callApi(
			'/api/v2/gamification/profiles', 
			'POST', 
			{  },
			{ 'copyMetrics': opts['copyMetrics'] },
			{  },
			{  },
			body, 
			['PureCloud OAuth'], 
			['application/json'],
			['application/json']
		);
	}

	/**
	 * Query performance profiles in date range for a user
	 * 
	 * @param {String} userId The ID of a user.
	 * @param {Object} body The date range of work day.
	 */
	postGamificationProfilesUserQuery(userId, body) { 
		// verify the required parameter 'userId' is set
		if (userId === undefined || userId === null) {
			throw 'Missing the required parameter "userId" when calling postGamificationProfilesUserQuery';
		}
		// verify the required parameter 'body' is set
		if (body === undefined || body === null) {
			throw 'Missing the required parameter "body" when calling postGamificationProfilesUserQuery';
		}

		return this.apiClient.callApi(
			'/api/v2/gamification/profiles/users/{userId}/query', 
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
	 * Query performance profiles in date range for the current user
	 * 
	 * @param {Object} body The date range of work day.
	 */
	postGamificationProfilesUsersMeQuery(body) { 
		// verify the required parameter 'body' is set
		if (body === undefined || body === null) {
			throw 'Missing the required parameter "body" when calling postGamificationProfilesUsersMeQuery';
		}

		return this.apiClient.callApi(
			'/api/v2/gamification/profiles/users/me/query', 
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
	 * Updates a performance profile
	 * 
	 * @param {String} profileId performanceProfileId
	 * @param {Object} opts Optional parameters
	 * @param {Object} opts.body performanceProfile
	 */
	putGamificationProfile(profileId, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'profileId' is set
		if (profileId === undefined || profileId === null) {
			throw 'Missing the required parameter "profileId" when calling putGamificationProfile';
		}

		return this.apiClient.callApi(
			'/api/v2/gamification/profiles/{profileId}', 
			'PUT', 
			{ 'profileId': profileId },
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
	 * Updates a metric in performance profile
	 * 
	 * @param {String} profileId Performance Profile Id
	 * @param {String} metricId Metric Id
	 * @param {Object} body Metric
	 */
	putGamificationProfileMetric(profileId, metricId, body) { 
		// verify the required parameter 'profileId' is set
		if (profileId === undefined || profileId === null) {
			throw 'Missing the required parameter "profileId" when calling putGamificationProfileMetric';
		}
		// verify the required parameter 'metricId' is set
		if (metricId === undefined || metricId === null) {
			throw 'Missing the required parameter "metricId" when calling putGamificationProfileMetric';
		}
		// verify the required parameter 'body' is set
		if (body === undefined || body === null) {
			throw 'Missing the required parameter "body" when calling putGamificationProfileMetric';
		}

		return this.apiClient.callApi(
			'/api/v2/gamification/profiles/{profileId}/metrics/{metricId}', 
			'PUT', 
			{ 'profileId': profileId,'metricId': metricId },
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
	 * Update gamification activation status
	 * 
	 * @param {Object} status Gamification status
	 */
	putGamificationStatus(status) { 
		// verify the required parameter 'status' is set
		if (status === undefined || status === null) {
			throw 'Missing the required parameter "status" when calling putGamificationStatus';
		}

		return this.apiClient.callApi(
			'/api/v2/gamification/status', 
			'PUT', 
			{  },
			{  },
			{  },
			{  },
			status, 
			['PureCloud OAuth'], 
			['application/json'],
			['application/json']
		);
	}

}


export default GamificationApi;
