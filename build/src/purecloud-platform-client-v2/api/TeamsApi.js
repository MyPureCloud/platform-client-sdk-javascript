import ApiClient from '../ApiClient.js';


class TeamsApi {
	/**
	 * Teams service.
	 * @module purecloud-platform-client-v2/api/TeamsApi
	 * @version 168.2.0
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
	 */
	deleteTeam(teamId) { 
		// verify the required parameter 'teamId' is set
		if (teamId === undefined || teamId === null) {
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
			['application/json']
		);
	}

	/**
	 * Delete team members
	 * 
	 * @param {String} teamId Team ID
	 * @param {String} id Comma separated list of member ids to remove
	 */
	deleteTeamMembers(teamId, id) { 
		// verify the required parameter 'teamId' is set
		if (teamId === undefined || teamId === null) {
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
			['application/json']
		);
	}

	/**
	 * Get team
	 * 
	 * @param {String} teamId Team ID
	 */
	getTeam(teamId) { 
		// verify the required parameter 'teamId' is set
		if (teamId === undefined || teamId === null) {
			throw 'Missing the required parameter "teamId" when calling getTeam';
		}

		return this.apiClient.callApi(
			'/api/v2/teams/{teamId}', 
			'GET', 
			{ 'teamId': teamId },
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
	 * Get team membership
	 * 
	 * @param {String} teamId Team ID
	 * @param {Object} opts Optional parameters
	 * @param {Number} opts.pageSize Page size (default to 25)
	 * @param {String} opts.before The cursor that points to the previous item in the complete list of teams
	 * @param {String} opts.after The cursor that points to the next item in the complete list of teams
	 * @param {Object} opts.expand Expand the name on each user
	 */
	getTeamMembers(teamId, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'teamId' is set
		if (teamId === undefined || teamId === null) {
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
			['application/json']
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
	 * @param {Object} opts.expand Expand the name on each user
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
			['application/json']
		);
	}

	/**
	 * Update team
	 * 
	 * @param {String} teamId Team ID
	 * @param {Object} body Team
	 */
	patchTeam(teamId, body) { 
		// verify the required parameter 'teamId' is set
		if (teamId === undefined || teamId === null) {
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
			['application/json']
		);
	}

	/**
	 * Add team members
	 * 
	 * @param {String} teamId Team ID
	 * @param {Object} body TeamMembers
	 */
	postTeamMembers(teamId, body) { 
		// verify the required parameter 'teamId' is set
		if (teamId === undefined || teamId === null) {
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
			['application/json']
		);
	}

	/**
	 * Create a team
	 * 
	 * @param {Object} body Team
	 */
	postTeams(body) { 
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
			['application/json']
		);
	}

	/**
	 * Search resources.
	 * 
	 * @param {Object} body Search request options
	 */
	postTeamsSearch(body) { 
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
			['application/json']
		);
	}

}


export default TeamsApi;
