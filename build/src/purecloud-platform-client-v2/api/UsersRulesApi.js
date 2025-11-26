import ApiClient from '../ApiClient.js';


class UsersRulesApi {
	/**
	 * UsersRules service.
	 * @module purecloud-platform-client-v2/api/UsersRulesApi
	 * @version 238.0.0
	 */

	/**
	 * Constructs a new UsersRulesApi. 
	 * @alias module:purecloud-platform-client-v2/api/UsersRulesApi
	 * @class
	 * @param {module:purecloud-platform-client-v2/ApiClient} apiClient Optional API client implementation to use,
	 * default to {@link module:purecloud-platform-client-v2/ApiClient#instance} if unspecified.
	 */
	constructor(apiClient) {
		this.apiClient = apiClient || ApiClient.instance;
	}


	/**
	 * Delete an existing users rule
	 * 
	 * @param {String} ruleId The id of the rule
	 * deleteUsersRule is a preview method and is subject to both breaking and non-breaking changes at any time without notice
	 */
	deleteUsersRule(ruleId) { 
		// verify the required parameter 'ruleId' is set
		if (ruleId === undefined || ruleId === null || ruleId === '') {
			throw 'Missing the required parameter "ruleId" when calling deleteUsersRule';
		}

		return this.apiClient.callApi(
			'/api/v2/users/rules/{ruleId}', 
			'DELETE', 
			{ 'ruleId': ruleId },
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
	 * Get a users rule
	 * 
	 * @param {String} ruleId The ID of the rule to retrieve
	 * getUsersRule is a preview method and is subject to both breaking and non-breaking changes at any time without notice
	 */
	getUsersRule(ruleId) { 
		// verify the required parameter 'ruleId' is set
		if (ruleId === undefined || ruleId === null || ruleId === '') {
			throw 'Missing the required parameter "ruleId" when calling getUsersRule';
		}

		return this.apiClient.callApi(
			'/api/v2/users/rules/{ruleId}', 
			'GET', 
			{ 'ruleId': ruleId },
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
	 * Get dependent of a users rule
	 * 
	 * @param {String} ruleId The ID of the rule for which to retrieve dependents
	 * @param {Object} ruleType The type of the dependent
	 * @param {String} typeId The type ID of the dependent
	 * getUsersRuleDependentTypeId is a preview method and is subject to both breaking and non-breaking changes at any time without notice
	 */
	getUsersRuleDependentTypeId(ruleId, ruleType, typeId) { 
		// verify the required parameter 'ruleId' is set
		if (ruleId === undefined || ruleId === null || ruleId === '') {
			throw 'Missing the required parameter "ruleId" when calling getUsersRuleDependentTypeId';
		}
		// verify the required parameter 'ruleType' is set
		if (ruleType === undefined || ruleType === null || ruleType === '') {
			throw 'Missing the required parameter "ruleType" when calling getUsersRuleDependentTypeId';
		}
		// verify the required parameter 'typeId' is set
		if (typeId === undefined || typeId === null || typeId === '') {
			throw 'Missing the required parameter "typeId" when calling getUsersRuleDependentTypeId';
		}

		return this.apiClient.callApi(
			'/api/v2/users/rules/{ruleId}/dependents/{ruleType}/{typeId}', 
			'GET', 
			{ 'ruleId': ruleId,'ruleType': ruleType,'typeId': typeId },
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
	 * Get dependents for a users rule
	 * 
	 * @param {String} ruleId The ID of the rule for which to retrieve dependents
	 * @param {Object} opts Optional parameters
	 * @param {Number} opts.pageSize Number of results per page (default to 25)
	 * @param {Number} opts.pageNumber Page number (default to 1)
	 * @param {Object} opts.sortOrder Sort order for dependents (by last run date, then created date) (default to descending)
	 * getUsersRuleDependents is a preview method and is subject to both breaking and non-breaking changes at any time without notice
	 */
	getUsersRuleDependents(ruleId, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'ruleId' is set
		if (ruleId === undefined || ruleId === null || ruleId === '') {
			throw 'Missing the required parameter "ruleId" when calling getUsersRuleDependents';
		}

		return this.apiClient.callApi(
			'/api/v2/users/rules/{ruleId}/dependents', 
			'GET', 
			{ 'ruleId': ruleId },
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
	 * Get the list of users rules
	 * 
	 * @param {Array.<String>} types The types of the rule
	 * @param {Object} opts Optional parameters
	 * @param {Number} opts.pageNumber Page number (default to 1)
	 * @param {Number} opts.pageSize Number of results per page (default to 25)
	 * @param {Array.<String>} opts.expand Fields to expand in response
	 * @param {String} opts.searchTerm a search term for finding a rule by name
	 * @param {Object} opts.sortOrder sort rules by name, ascending, descending (default to ascending)
	 * getUsersRules is a preview method and is subject to both breaking and non-breaking changes at any time without notice
	 */
	getUsersRules(types, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'types' is set
		if (types === undefined || types === null) {
			throw 'Missing the required parameter "types" when calling getUsersRules';
		}

		return this.apiClient.callApi(
			'/api/v2/users/rules', 
			'GET', 
			{  },
			{ 'pageNumber': opts['pageNumber'],'pageSize': opts['pageSize'],'types': this.apiClient.buildCollectionParam(types, 'multi'),'expand': this.apiClient.buildCollectionParam(opts['expand'], 'multi'),'searchTerm': opts['searchTerm'],'sortOrder': opts['sortOrder'] },
			{  },
			{  },
			null, 
			['PureCloud OAuth'], 
			['application/json'],
			['application/json']
		);
	}

	/**
	 * Get the settings for a specific users rule type
	 * 
	 * @param {Object} ruleType The type of the rule
	 * getUsersRulesSetting is a preview method and is subject to both breaking and non-breaking changes at any time without notice
	 */
	getUsersRulesSetting(ruleType) { 
		// verify the required parameter 'ruleType' is set
		if (ruleType === undefined || ruleType === null || ruleType === '') {
			throw 'Missing the required parameter "ruleType" when calling getUsersRulesSetting';
		}

		return this.apiClient.callApi(
			'/api/v2/users/rules/settings/{ruleType}', 
			'GET', 
			{ 'ruleType': ruleType },
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
	 * Update an existing users rule
	 * This will update an existing users rule with the specified fields.
	 * @param {String} ruleId The ID of the rule to update
	 * @param {Object} body updateRuleRequest
	 * patchUsersRule is a preview method and is subject to both breaking and non-breaking changes at any time without notice
	 */
	patchUsersRule(ruleId, body) { 
		// verify the required parameter 'ruleId' is set
		if (ruleId === undefined || ruleId === null || ruleId === '') {
			throw 'Missing the required parameter "ruleId" when calling patchUsersRule';
		}
		// verify the required parameter 'body' is set
		if (body === undefined || body === null) {
			throw 'Missing the required parameter "body" when calling patchUsersRule';
		}

		return this.apiClient.callApi(
			'/api/v2/users/rules/{ruleId}', 
			'PATCH', 
			{ 'ruleId': ruleId },
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
	 * Create a new rule
	 * This will create a new rule with the specified fields.
	 * @param {Object} body usersRulesCreateRuleRequest
	 * postUsersRules is a preview method and is subject to both breaking and non-breaking changes at any time without notice
	 */
	postUsersRules(body) { 
		// verify the required parameter 'body' is set
		if (body === undefined || body === null) {
			throw 'Missing the required parameter "body" when calling postUsersRules';
		}

		return this.apiClient.callApi(
			'/api/v2/users/rules', 
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
	 * Query the result of a users rule
	 * This will query the result of a rule.
	 * @param {Object} body usersRulesQueryRuleRequest
	 * @param {Object} opts Optional parameters
	 * @param {Number} opts.pageNumber Page number (default to 1)
	 * @param {Number} opts.pageSize Number of results per page (default to 25)
	 * postUsersRulesQuery is a preview method and is subject to both breaking and non-breaking changes at any time without notice
	 */
	postUsersRulesQuery(body, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'body' is set
		if (body === undefined || body === null) {
			throw 'Missing the required parameter "body" when calling postUsersRulesQuery';
		}

		return this.apiClient.callApi(
			'/api/v2/users/rules/query', 
			'POST', 
			{  },
			{ 'pageNumber': opts['pageNumber'],'pageSize': opts['pageSize'] },
			{  },
			{  },
			body, 
			['PureCloud OAuth'], 
			['application/json'],
			['application/json']
		);
	}

}


export default UsersRulesApi;
