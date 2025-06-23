import ApiClient from '../ApiClient.js';


class AlertingApi {
	/**
	 * Alerting service.
	 * @module purecloud-platform-client-v2/api/AlertingApi
	 * @version 225.0.0
	 */

	/**
	 * Constructs a new AlertingApi. 
	 * @alias module:purecloud-platform-client-v2/api/AlertingApi
	 * @class
	 * @param {module:purecloud-platform-client-v2/ApiClient} apiClient Optional API client implementation to use,
	 * default to {@link module:purecloud-platform-client-v2/ApiClient#instance} if unspecified.
	 */
	constructor(apiClient) {
		this.apiClient = apiClient || ApiClient.instance;
	}


	/**
	 * Delete an alert
	 * 
	 * @param {String} alertId Alert ID
	 */
	deleteAlertingAlert(alertId) { 
		// verify the required parameter 'alertId' is set
		if (alertId === undefined || alertId === null || alertId === '') {
			throw 'Missing the required parameter "alertId" when calling deleteAlertingAlert';
		}

		return this.apiClient.callApi(
			'/api/v2/alerting/alerts/{alertId}', 
			'DELETE', 
			{ 'alertId': alertId },
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
	 * Delete all alerts for the user
	 * 
	 */
	deleteAlertingAlertsAll() { 

		return this.apiClient.callApi(
			'/api/v2/alerting/alerts/all', 
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
	 * Delete a rule.
	 * 
	 * @param {String} ruleId Rule Id
	 */
	deleteAlertingRule(ruleId) { 
		// verify the required parameter 'ruleId' is set
		if (ruleId === undefined || ruleId === null || ruleId === '') {
			throw 'Missing the required parameter "ruleId" when calling deleteAlertingRule';
		}

		return this.apiClient.callApi(
			'/api/v2/alerting/rules/{ruleId}', 
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
	 * Get an alert
	 * 
	 * @param {String} alertId Alert ID
	 */
	getAlertingAlert(alertId) { 
		// verify the required parameter 'alertId' is set
		if (alertId === undefined || alertId === null || alertId === '') {
			throw 'Missing the required parameter "alertId" when calling getAlertingAlert';
		}

		return this.apiClient.callApi(
			'/api/v2/alerting/alerts/{alertId}', 
			'GET', 
			{ 'alertId': alertId },
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
	 * Get a rule.
	 * 
	 * @param {String} ruleId Rule Id
	 */
	getAlertingRule(ruleId) { 
		// verify the required parameter 'ruleId' is set
		if (ruleId === undefined || ruleId === null || ruleId === '') {
			throw 'Missing the required parameter "ruleId" when calling getAlertingRule';
		}

		return this.apiClient.callApi(
			'/api/v2/alerting/rules/{ruleId}', 
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
	 * Allows an entity to mute/snooze an alert or update the unread status of the alert.
	 * Snoozing an alert temporarily stop it from resending notifications to individualsas well as other services within Genesys Cloud for a given period.  Muting an alert will only block the notifications to individuals.
	 * @param {String} alertId Alert ID
	 * @param {Object} opts Optional parameters
	 * @param {Object} opts.body 
	 */
	patchAlertingAlert(alertId, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'alertId' is set
		if (alertId === undefined || alertId === null || alertId === '') {
			throw 'Missing the required parameter "alertId" when calling patchAlertingAlert';
		}

		return this.apiClient.callApi(
			'/api/v2/alerting/alerts/{alertId}', 
			'PATCH', 
			{ 'alertId': alertId },
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
	 * Updates all alerts
	 * 
	 * @param {Object} opts Optional parameters
	 * @param {Object} opts.body 
	 */
	patchAlertingAlertsAll(opts) { 
		opts = opts || {};
		

		return this.apiClient.callApi(
			'/api/v2/alerting/alerts/all', 
			'PATCH', 
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
	 * Bulk alert updates
	 * 
	 * @param {Object} body 
	 */
	patchAlertingAlertsBulk(body) { 
		// verify the required parameter 'body' is set
		if (body === undefined || body === null) {
			throw 'Missing the required parameter "body" when calling patchAlertingAlertsBulk';
		}

		return this.apiClient.callApi(
			'/api/v2/alerting/alerts/bulk', 
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
	 * Bulk update of notification lists
	 * 
	 * @param {Object} body 
	 */
	patchAlertingRulesBulk(body) { 
		// verify the required parameter 'body' is set
		if (body === undefined || body === null) {
			throw 'Missing the required parameter "body" when calling patchAlertingRulesBulk';
		}

		return this.apiClient.callApi(
			'/api/v2/alerting/rules/bulk', 
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
	 * Gets a paged list of alerts. The max page size is 50
	 * 
	 * @param {Object} opts Optional parameters
	 * @param {Object} opts.body 
	 */
	postAlertingAlertsQuery(opts) { 
		opts = opts || {};
		

		return this.apiClient.callApi(
			'/api/v2/alerting/alerts/query', 
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
	 * Create a Rule.
	 * 
	 * @param {Object} body rule to be created
	 */
	postAlertingRules(body) { 
		// verify the required parameter 'body' is set
		if (body === undefined || body === null) {
			throw 'Missing the required parameter "body" when calling postAlertingRules';
		}

		return this.apiClient.callApi(
			'/api/v2/alerting/rules', 
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
	 * Bulk remove rules
	 * 
	 * @param {Object} body 
	 */
	postAlertingRulesBulkRemove(body) { 
		// verify the required parameter 'body' is set
		if (body === undefined || body === null) {
			throw 'Missing the required parameter "body" when calling postAlertingRulesBulkRemove';
		}

		return this.apiClient.callApi(
			'/api/v2/alerting/rules/bulk/remove', 
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
	 * Get a paged list of rules.  The max size of the page is 50 items.
	 * 
	 * @param {Object} opts Optional parameters
	 * @param {Object} opts.body 
	 */
	postAlertingRulesQuery(opts) { 
		opts = opts || {};
		

		return this.apiClient.callApi(
			'/api/v2/alerting/rules/query', 
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
	 * Update an alert read status
	 * 
	 * @param {String} alertId Alert ID
	 * @param {Object} opts Optional parameters
	 * @param {Object} opts.body 
	 */
	putAlertingAlert(alertId, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'alertId' is set
		if (alertId === undefined || alertId === null || alertId === '') {
			throw 'Missing the required parameter "alertId" when calling putAlertingAlert';
		}

		return this.apiClient.callApi(
			'/api/v2/alerting/alerts/{alertId}', 
			'PUT', 
			{ 'alertId': alertId },
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
	 * Update a rule
	 * 
	 * @param {String} ruleId Rule Id
	 * @param {Object} body rule to be updated
	 */
	putAlertingRule(ruleId, body) { 
		// verify the required parameter 'ruleId' is set
		if (ruleId === undefined || ruleId === null || ruleId === '') {
			throw 'Missing the required parameter "ruleId" when calling putAlertingRule';
		}
		// verify the required parameter 'body' is set
		if (body === undefined || body === null) {
			throw 'Missing the required parameter "body" when calling putAlertingRule';
		}

		return this.apiClient.callApi(
			'/api/v2/alerting/rules/{ruleId}', 
			'PUT', 
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

}


export default AlertingApi;
