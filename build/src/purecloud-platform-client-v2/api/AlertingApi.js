import ApiClient from '../ApiClient.js';


class AlertingApi {
	/**
	 * Alerting service.
	 * @module purecloud-platform-client-v2/api/AlertingApi
	 * @version 215.0.0
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
		if (alertId === undefined || alertId === null) {
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
	 * Delete an interaction stats alert
	 * Apps should migrate to use DELETE /api/v2/alerting/alerts/{alertId}.
	 * @param {String} alertId Alert ID
	 * @deprecated
	 */
	deleteAlertingInteractionstatsAlert(alertId) { 
		// verify the required parameter 'alertId' is set
		if (alertId === undefined || alertId === null) {
			throw 'Missing the required parameter "alertId" when calling deleteAlertingInteractionstatsAlert';
		}

		return this.apiClient.callApi(
			'/api/v2/alerting/interactionstats/alerts/{alertId}', 
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
	 * Delete an interaction stats rule
	 * Apps should migrate to use DELETE /api/v2/alerting/rules/{ruleId}.
	 * @param {String} ruleId Rule ID
	 * @deprecated
	 */
	deleteAlertingInteractionstatsRule(ruleId) { 
		// verify the required parameter 'ruleId' is set
		if (ruleId === undefined || ruleId === null) {
			throw 'Missing the required parameter "ruleId" when calling deleteAlertingInteractionstatsRule';
		}

		return this.apiClient.callApi(
			'/api/v2/alerting/interactionstats/rules/{ruleId}', 
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
	 * Delete a rule.
	 * 
	 * @param {String} ruleId Rule Id
	 */
	deleteAlertingRule(ruleId) { 
		// verify the required parameter 'ruleId' is set
		if (ruleId === undefined || ruleId === null) {
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
		if (alertId === undefined || alertId === null) {
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
	 * Gets active alert count for a user
	 * Apps should migrate to use POST /api/v2/alerting/alerts/query with the queryType set to Count and alertStatus to Active in the request body.
	 * @deprecated
	 */
	getAlertingAlertsActive() { 

		return this.apiClient.callApi(
			'/api/v2/alerting/alerts/active', 
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
	 * Get an interaction stats alert
	 * Apps should migrate to use GET /api/v2/alerting/alerts/{alertId}.
	 * @param {String} alertId Alert ID
	 * @param {Object} opts Optional parameters
	 * @param {Array.<String>} opts.expand Which fields, if any, to expand
	 * @deprecated
	 */
	getAlertingInteractionstatsAlert(alertId, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'alertId' is set
		if (alertId === undefined || alertId === null) {
			throw 'Missing the required parameter "alertId" when calling getAlertingInteractionstatsAlert';
		}

		return this.apiClient.callApi(
			'/api/v2/alerting/interactionstats/alerts/{alertId}', 
			'GET', 
			{ 'alertId': alertId },
			{ 'expand': this.apiClient.buildCollectionParam(opts['expand'], 'multi') },
			{  },
			{  },
			null, 
			['PureCloud OAuth'], 
			['application/json'],
			['application/json']
		);
	}

	/**
	 * Get interaction stats alert list
	 * Apps should migrate to use POST /api/v2/alerting/alerts/query.
	 * @param {Object} opts Optional parameters
	 * @param {Array.<String>} opts.expand Which fields, if any, to expand
	 * @deprecated
	 */
	getAlertingInteractionstatsAlerts(opts) { 
		opts = opts || {};
		

		return this.apiClient.callApi(
			'/api/v2/alerting/interactionstats/alerts', 
			'GET', 
			{  },
			{ 'expand': this.apiClient.buildCollectionParam(opts['expand'], 'multi') },
			{  },
			{  },
			null, 
			['PureCloud OAuth'], 
			['application/json'],
			['application/json']
		);
	}

	/**
	 * Gets user unread count of interaction stats alerts
	 * Apps should migrate to use POST /api/v2/alerting/alerts/query with the queryType set to Count and viewStatus to Unread in the request body.
	 * @deprecated
	 */
	getAlertingInteractionstatsAlertsUnread() { 

		return this.apiClient.callApi(
			'/api/v2/alerting/interactionstats/alerts/unread', 
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
	 * Get an interaction stats rule
	 * Apps should migrate to use GET /api/v2/alerting/rules/{ruleId}.
	 * @param {String} ruleId Rule ID
	 * @param {Object} opts Optional parameters
	 * @param {Array.<String>} opts.expand Which fields, if any, to expand
	 * @deprecated
	 */
	getAlertingInteractionstatsRule(ruleId, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'ruleId' is set
		if (ruleId === undefined || ruleId === null) {
			throw 'Missing the required parameter "ruleId" when calling getAlertingInteractionstatsRule';
		}

		return this.apiClient.callApi(
			'/api/v2/alerting/interactionstats/rules/{ruleId}', 
			'GET', 
			{ 'ruleId': ruleId },
			{ 'expand': this.apiClient.buildCollectionParam(opts['expand'], 'multi') },
			{  },
			{  },
			null, 
			['PureCloud OAuth'], 
			['application/json'],
			['application/json']
		);
	}

	/**
	 * Get an interaction stats rule list
	 * Apps should migrate to use POST /api/v2/alerting/rules/query.
	 * @param {Object} opts Optional parameters
	 * @param {Array.<String>} opts.expand Which fields, if any, to expand
	 * @deprecated
	 */
	getAlertingInteractionstatsRules(opts) { 
		opts = opts || {};
		

		return this.apiClient.callApi(
			'/api/v2/alerting/interactionstats/rules', 
			'GET', 
			{  },
			{ 'expand': this.apiClient.buildCollectionParam(opts['expand'], 'multi') },
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
		if (ruleId === undefined || ruleId === null) {
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
		if (alertId === undefined || alertId === null) {
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
	 * Create an interaction stats rule
	 * Apps should migrate to use POST /api/v2/alerting/rules.
	 * @param {Object} body AlertingRule
	 * @param {Object} opts Optional parameters
	 * @param {Array.<String>} opts.expand Which fields, if any, to expand
	 * @deprecated
	 */
	postAlertingInteractionstatsRules(body, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'body' is set
		if (body === undefined || body === null) {
			throw 'Missing the required parameter "body" when calling postAlertingInteractionstatsRules';
		}

		return this.apiClient.callApi(
			'/api/v2/alerting/interactionstats/rules', 
			'POST', 
			{  },
			{ 'expand': this.apiClient.buildCollectionParam(opts['expand'], 'multi') },
			{  },
			{  },
			body, 
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
		if (alertId === undefined || alertId === null) {
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
	 * Update an interaction stats alert read status
	 * Apps should migrate to use PUT /api/v2/alerting/alerts/{alertId}.
	 * @param {String} alertId Alert ID
	 * @param {Object} body InteractionStatsAlert
	 * @param {Object} opts Optional parameters
	 * @param {Array.<String>} opts.expand Which fields, if any, to expand
	 * @deprecated
	 */
	putAlertingInteractionstatsAlert(alertId, body, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'alertId' is set
		if (alertId === undefined || alertId === null) {
			throw 'Missing the required parameter "alertId" when calling putAlertingInteractionstatsAlert';
		}
		// verify the required parameter 'body' is set
		if (body === undefined || body === null) {
			throw 'Missing the required parameter "body" when calling putAlertingInteractionstatsAlert';
		}

		return this.apiClient.callApi(
			'/api/v2/alerting/interactionstats/alerts/{alertId}', 
			'PUT', 
			{ 'alertId': alertId },
			{ 'expand': this.apiClient.buildCollectionParam(opts['expand'], 'multi') },
			{  },
			{  },
			body, 
			['PureCloud OAuth'], 
			['application/json'],
			['application/json']
		);
	}

	/**
	 * Update an interaction stats rule
	 * Apps should migrate to use PUT /api/v2/alerting/rules/{ruleId}.
	 * @param {String} ruleId Rule ID
	 * @param {Object} body AlertingRule
	 * @param {Object} opts Optional parameters
	 * @param {Array.<String>} opts.expand Which fields, if any, to expand
	 * @deprecated
	 */
	putAlertingInteractionstatsRule(ruleId, body, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'ruleId' is set
		if (ruleId === undefined || ruleId === null) {
			throw 'Missing the required parameter "ruleId" when calling putAlertingInteractionstatsRule';
		}
		// verify the required parameter 'body' is set
		if (body === undefined || body === null) {
			throw 'Missing the required parameter "body" when calling putAlertingInteractionstatsRule';
		}

		return this.apiClient.callApi(
			'/api/v2/alerting/interactionstats/rules/{ruleId}', 
			'PUT', 
			{ 'ruleId': ruleId },
			{ 'expand': this.apiClient.buildCollectionParam(opts['expand'], 'multi') },
			{  },
			{  },
			body, 
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
		if (ruleId === undefined || ruleId === null) {
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
