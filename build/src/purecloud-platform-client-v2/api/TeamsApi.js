import ApiClient from '../ApiClient.js';


class TeamsApi {
	/**
	 * Teams service.
	 * @module purecloud-platform-client-v2/api/TeamsApi
	 * @version 256.0.0
	 */

	/**
	 * Constructs a new TeamsApi. 
	 * @alias module:purecloud-platform-client-v2/api/TeamsApi
	 * @class
	 * @param {module:purecloud-platform-client-v2/ApiClient} apiClient Optional API client implementation to use,
	 * default to {@link module:purecloud-platform-client-v2/ApiClient#instance} if unspecified.
	 */
	constructor(apiClient) {
		this.apiClient = apiClient || ApiClient.instance;
	}


	/**
	 * Delete team
	 * 
	 * @param {String} teamId Team ID
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	deleteTeam(teamId, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'teamId' is set
		if (teamId === undefined || teamId === null || teamId === '') {
			throw 'Missing the required parameter "teamId" when calling deleteTeam';
		}

		return this.apiClient.callApi(
			'/api/v2/teams/{teamId}', 
			'DELETE', 
			{ 'teamId': teamId },
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
	 * Delete team members
	 * 
	 * @param {String} teamId Team ID
	 * @param {String} id Comma separated list of member ids to remove
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	deleteTeamMembers(teamId, id, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'teamId' is set
		if (teamId === undefined || teamId === null || teamId === '') {
			throw 'Missing the required parameter "teamId" when calling deleteTeamMembers';
		}
		// verify the required parameter 'id' is set
		if (id === undefined || id === null) {
			throw 'Missing the required parameter "id" when calling deleteTeamMembers';
		}

		return this.apiClient.callApi(
			'/api/v2/teams/{teamId}/members', 
			'DELETE', 
			{ 'teamId': teamId },
			{ 'id': id },
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
	 * Get team
	 * 
	 * @param {String} teamId Team ID
	 * @param {Object} opts Optional parameters
	 * @param {Object} opts.expand Expand the division name
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	getTeam(teamId, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'teamId' is set
		if (teamId === undefined || teamId === null || teamId === '') {
			throw 'Missing the required parameter "teamId" when calling getTeam';
		}

		return this.apiClient.callApi(
			'/api/v2/teams/{teamId}', 
			'GET', 
			{ 'teamId': teamId },
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
	 * Get team membership
	 * 
	 * @param {String} teamId Team ID
	 * @param {Object} opts Optional parameters
	 * @param {Number} opts.pageSize Page size (default to 25)
	 * @param {String} opts.before The cursor that points to the previous item in the complete list of teams
	 * @param {String} opts.after The cursor that points to the next item in the complete list of teams
	 * @param {Object} opts.expand Expand the name on each user
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	getTeamMembers(teamId, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'teamId' is set
		if (teamId === undefined || teamId === null || teamId === '') {
			throw 'Missing the required parameter "teamId" when calling getTeamMembers';
		}

		return this.apiClient.callApi(
			'/api/v2/teams/{teamId}/members', 
			'GET', 
			{ 'teamId': teamId },
			{ 'pageSize': opts['pageSize'],'before': opts['before'],'after': opts['after'],'expand': opts['expand'] },
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
	 * Get Team listing
	 * 
	 * @param {Object} opts Optional parameters
	 * @param {Number} opts.pageSize Page size (default to 25)
	 * @param {String} opts.name Return only teams whose names start with this value (case-insensitive matching)
	 * @param {String} opts.after The cursor that points to the next item in the complete list of teams
	 * @param {String} opts.before The cursor that points to the previous item in the complete list of teams
	 * @param {Object} opts.expand Expand the division on each team
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	getTeams(opts) { 
		opts = opts || {};
		

		return this.apiClient.callApi(
			'/api/v2/teams', 
			'GET', 
			{  },
			{ 'pageSize': opts['pageSize'],'name': opts['name'],'after': opts['after'],'before': opts['before'],'expand': opts['expand'] },
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
	 * Update team
	 * 
	 * @param {String} teamId Team ID
	 * @param {Object} body Team
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	patchTeam(teamId, body, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'teamId' is set
		if (teamId === undefined || teamId === null || teamId === '') {
			throw 'Missing the required parameter "teamId" when calling patchTeam';
		}
		// verify the required parameter 'body' is set
		if (body === undefined || body === null) {
			throw 'Missing the required parameter "body" when calling patchTeam';
		}

		return this.apiClient.callApi(
			'/api/v2/teams/{teamId}', 
			'PATCH', 
			{ 'teamId': teamId },
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
	 * Query for team activity observations
	 * 
	 * @param {Object} body query
	 * @param {Object} opts Optional parameters
	 * @param {Number} opts.pageSize The desired page size
	 * @param {Number} opts.pageNumber The desired page number
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	postAnalyticsTeamsActivityQuery(body, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'body' is set
		if (body === undefined || body === null) {
			throw 'Missing the required parameter "body" when calling postAnalyticsTeamsActivityQuery';
		}

		return this.apiClient.callApi(
			'/api/v2/analytics/teams/activity/query', 
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
	 * Add team members
	 * 
	 * @param {String} teamId Team ID
	 * @param {Object} body TeamMembers
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	postTeamMembers(teamId, body, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'teamId' is set
		if (teamId === undefined || teamId === null || teamId === '') {
			throw 'Missing the required parameter "teamId" when calling postTeamMembers';
		}
		// verify the required parameter 'body' is set
		if (body === undefined || body === null) {
			throw 'Missing the required parameter "body" when calling postTeamMembers';
		}

		return this.apiClient.callApi(
			'/api/v2/teams/{teamId}/members', 
			'POST', 
			{ 'teamId': teamId },
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
	 * Create a team
	 * 
	 * @param {Object} body Team
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	postTeams(body, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'body' is set
		if (body === undefined || body === null) {
			throw 'Missing the required parameter "body" when calling postTeams';
		}

		return this.apiClient.callApi(
			'/api/v2/teams', 
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
	 * Search resources.
	 * 
	 * @param {Object} body Search request options
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	postTeamsSearch(body, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'body' is set
		if (body === undefined || body === null) {
			throw 'Missing the required parameter "body" when calling postTeamsSearch';
		}

		return this.apiClient.callApi(
			'/api/v2/teams/search', 
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

}


export default TeamsApi;
