import ApiClient from '../ApiClient.js';


class AlertingApi {
	/**
	 * Alerting service.
	 * @module purecloud-platform-client-v2/api/AlertingApi
	 * @version 168.2.0
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
	 * Delete an interaction stats alert
	 * 
	 * @param {String} alertId Alert ID
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
	 * Delete an interaction stats rule.
	 * 
	 * @param {String} ruleId Rule ID
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
	 * Gets active alert count for a user.
	 * 
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
	 * 
	 * @param {String} alertId Alert ID
	 * @param {Object} opts Optional parameters
	 * @param {Array.<String>} opts.expand Which fields, if any, to expand
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
	 * Get interaction stats alert list.
	 * 
	 * @param {Object} opts Optional parameters
	 * @param {Array.<String>} opts.expand Which fields, if any, to expand
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
	 * Gets user unread count of interaction stats alerts.
	 * 
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
	 * Get an interaction stats rule.
	 * 
	 * @param {String} ruleId Rule ID
	 * @param {Object} opts Optional parameters
	 * @param {Array.<String>} opts.expand Which fields, if any, to expand
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
	 * Get an interaction stats rule list.
	 * 
	 * @param {Object} opts Optional parameters
	 * @param {Array.<String>} opts.expand Which fields, if any, to expand
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
	 * Create an interaction stats rule.
	 * 
	 * @param {Object} body AlertingRule
	 * @param {Object} opts Optional parameters
	 * @param {Array.<String>} opts.expand Which fields, if any, to expand
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
	 * Update an interaction stats alert read status
	 * 
	 * @param {String} alertId Alert ID
	 * @param {Object} body InteractionStatsAlert
	 * @param {Object} opts Optional parameters
	 * @param {Array.<String>} opts.expand Which fields, if any, to expand
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
	 * 
	 * @param {String} ruleId Rule ID
	 * @param {Object} body AlertingRule
	 * @param {Object} opts Optional parameters
	 * @param {Array.<String>} opts.expand Which fields, if any, to expand
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

}


export default AlertingApi;
