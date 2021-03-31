import ApiClient from '../ApiClient.js';


class GamificationApi {
	/**
	 * Gamification service.
	 * @module purecloud-platform-client-v2/api/GamificationApi
	 * @version 110.0.0
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
	 * Leaderboard of the requesting user&#39;s division
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
	 * Leaderboard by division
	 * 
	 * @param {Object} filterType Filter type for the query request.
	 * @param {String} filterId ID for the filter type. For example, division Id
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
	 * Best Points by division
	 * 
	 * @param {Object} filterType Filter type for the query request.
	 * @param {String} filterId ID for the filter type. For example, division Id
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
	 * Best Points of the requesting user&#39;s division
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
	 * Gamified metric by id
	 * 
	 * @param {String} metricId metric Id
	 */
	getGamificationMetric(metricId) { 
		// verify the required parameter 'metricId' is set
		if (metricId === undefined || metricId === null) {
			throw 'Missing the required parameter "metricId" when calling getGamificationMetric';
		}

		return this.apiClient.callApi(
			'/api/v2/gamification/metrics/{metricId}', 
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
	 * All gamified metrics for a given profile
	 * 
	 * @param {Object} opts Optional parameters
	 * @param {String} opts.performanceProfileId The profile id of the metrics you are trying to retrieve. The DEFAULT profile is used if nothing is given.
	 */
	getGamificationMetrics(opts) { 
		opts = opts || {};
		

		return this.apiClient.callApi(
			'/api/v2/gamification/metrics', 
			'GET', 
			{  }, 
			{ 'performance profile id': opts['performanceProfileId'] }, 
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
	 * @param {String} performanceProfileId Performance Profile Id
	 */
	getGamificationProfile(performanceProfileId) { 
		// verify the required parameter 'performanceProfileId' is set
		if (performanceProfileId === undefined || performanceProfileId === null) {
			throw 'Missing the required parameter "performanceProfileId" when calling getGamificationProfile';
		}

		return this.apiClient.callApi(
			'/api/v2/gamification/profiles/{performanceProfileId}', 
			'GET', 
			{ 'performanceProfileId': performanceProfileId }, 
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
	 * Workday performance metrics of the requesting user
	 * 
	 * @param {String} workday Target querying workday. Workday is represented as an ISO-8601 string. For example: yyyy-MM-dd
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
	 * @param {String} startWorkday Start workday of querying workdays range. Workday is represented as an ISO-8601 string. For example: yyyy-MM-dd
	 * @param {String} endWorkday End workday of querying workdays range. Workday is represented as an ISO-8601 string. For example: yyyy-MM-dd
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
	 * @param {String} endWorkday End workday of querying workdays range. Workday is represented as an ISO-8601 string. For example: yyyy-MM-dd
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
	 * Average points of the requesting user&#39;s division
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
	 * @param {String} startWorkday Start workday of querying workdays range. Workday is represented as an ISO-8601 string. For example: yyyy-MM-dd
	 * @param {String} endWorkday End workday of querying workdays range. Workday is represented as an ISO-8601 string. For example: yyyy-MM-dd
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
	 * Workday performance metrics for a user
	 * 
	 * @param {String} userId 
	 * @param {String} workday Target querying workday. Workday is represented as an ISO-8601 string. For example: yyyy-MM-dd
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
	 * @param {String} startWorkday Start workday of querying workdays range. Workday is represented as an ISO-8601 string. For example: yyyy-MM-dd
	 * @param {String} endWorkday End workday of querying workdays range. Workday is represented as an ISO-8601 string. For example: yyyy-MM-dd
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
	 * @param {String} endWorkday End workday of querying workdays range. Workday is represented as an ISO-8601 string. For example: yyyy-MM-dd
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
	 * @param {String} startWorkday Start workday of querying workdays range. Workday is represented as an ISO-8601 string. For example: yyyy-MM-dd
	 * @param {String} endWorkday End workday of querying workdays range. Workday is represented as an ISO-8601 string. For example: yyyy-MM-dd
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
	 * Values Trends of a user
	 * 
	 * @param {String} userId 
	 * @param {String} startWorkday Start workday of querying workdays range. Workday is represented as an ISO-8601 string. For example: yyyy-MM-dd
	 * @param {String} endWorkday End workday of querying workdays range. Workday is represented as an ISO-8601 string. For example: yyyy-MM-dd
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
	 * @param {String} startWorkday Start workday of querying workdays range. Workday is represented as an ISO-8601 string. For example: yyyy-MM-dd
	 * @param {String} endWorkday End workday of querying workdays range. Workday is represented as an ISO-8601 string. For example: yyyy-MM-dd
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
	 * Average values of the requesting user&#39;s division
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
	 * @param {String} startWorkday Start workday of querying workdays range. Workday is represented as an ISO-8601 string. For example: yyyy-MM-dd
	 * @param {String} endWorkday End workday of querying workdays range. Workday is represented as an ISO-8601 string. For example: yyyy-MM-dd
	 * @param {Object} opts Optional parameters
	 * @param {Object} opts.filterType Filter type for the query request. If not set, then the request is for the requesting user.
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
			{ 'filterType': opts['filterType'],'startWorkday': startWorkday,'endWorkday': endWorkday,'timeZone': opts['timeZone'] }, 
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
	 * Creates a gamified metric with a given metric definition and metric objective
	 * 
	 * @param {Object} body Metric
	 */
	postGamificationMetrics(body) { 
		// verify the required parameter 'body' is set
		if (body === undefined || body === null) {
			throw 'Missing the required parameter "body" when calling postGamificationMetrics';
		}

		return this.apiClient.callApi(
			'/api/v2/gamification/metrics', 
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
	 * Updates a metric
	 * 
	 * @param {String} metricId metric Id
	 * @param {Object} body Metric
	 */
	putGamificationMetric(metricId, body) { 
		// verify the required parameter 'metricId' is set
		if (metricId === undefined || metricId === null) {
			throw 'Missing the required parameter "metricId" when calling putGamificationMetric';
		}
		// verify the required parameter 'body' is set
		if (body === undefined || body === null) {
			throw 'Missing the required parameter "body" when calling putGamificationMetric';
		}

		return this.apiClient.callApi(
			'/api/v2/gamification/metrics/{metricId}', 
			'PUT', 
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
	 * Updates a performance profile
	 * 
	 * @param {String} performanceProfileId Performance Profile Id
	 * @param {Object} opts Optional parameters
	 * @param {Object} opts.body performanceProfile
	 */
	putGamificationProfile(performanceProfileId, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'performanceProfileId' is set
		if (performanceProfileId === undefined || performanceProfileId === null) {
			throw 'Missing the required parameter "performanceProfileId" when calling putGamificationProfile';
		}

		return this.apiClient.callApi(
			'/api/v2/gamification/profiles/{performanceProfileId}', 
			'PUT', 
			{ 'performanceProfileId': performanceProfileId }, 
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