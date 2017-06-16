(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['purecloud-platform-client-v2/ApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'));
  } else {
    // Browser globals (root is window)
    if (!root.platformClient) {
      root.platformClient = {};
    }
    root.platformClient.AlertingApi = factory(root.platformClient.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * Alerting service.
   * @module purecloud-platform-client-v2/api/AlertingApi
   * @version 2.0.3
   */

  /**
   * Constructs a new AlertingApi. 
   * @alias module:purecloud-platform-client-v2/api/AlertingApi
   * @class
   * @param {module:purecloud-platform-client-v2/ApiClient} apiClient Optional API client implementation to use,
   * default to {@link module:purecloud-platform-client-v2/ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;



    /**
     * Delete a heart beat alert
     * 
     * @param {String} alertId Alert ID
     */
    this.deleteAlertingHeartbeatAlert = function(alertId) { 

      // verify the required parameter 'alertId' is set
      if (alertId === undefined || alertId === null) {
        throw "Missing the required parameter 'alertId' when calling deleteAlertingHeartbeatAlert";
      }


      return this.apiClient.callApi(
        '/api/v2/alerting/heartbeat/alerts/{alertId}', 
        'DELETE', 
        { 'alertId': alertId }, 
        {  }, 
        {  }, 
        {  }, 
        null, 
        ['PureCloud Auth'], 
        ['application/json'], 
        ['application/json']
      );
    };


    /**
     * Delete a heart beat rule.
     * 
     * @param {String} ruleId Rule ID
     */
    this.deleteAlertingHeartbeatRule = function(ruleId) { 

      // verify the required parameter 'ruleId' is set
      if (ruleId === undefined || ruleId === null) {
        throw "Missing the required parameter 'ruleId' when calling deleteAlertingHeartbeatRule";
      }


      return this.apiClient.callApi(
        '/api/v2/alerting/heartbeat/rules/{ruleId}', 
        'DELETE', 
        { 'ruleId': ruleId }, 
        {  }, 
        {  }, 
        {  }, 
        null, 
        ['PureCloud Auth'], 
        ['application/json'], 
        ['application/json']
      );
    };


    /**
     * Delete an interaction stats alert
     * 
     * @param {String} alertId Alert ID
     */
    this.deleteAlertingInteractionstatsAlert = function(alertId) { 

      // verify the required parameter 'alertId' is set
      if (alertId === undefined || alertId === null) {
        throw "Missing the required parameter 'alertId' when calling deleteAlertingInteractionstatsAlert";
      }


      return this.apiClient.callApi(
        '/api/v2/alerting/interactionstats/alerts/{alertId}', 
        'DELETE', 
        { 'alertId': alertId }, 
        {  }, 
        {  }, 
        {  }, 
        null, 
        ['PureCloud Auth'], 
        ['application/json'], 
        ['application/json']
      );
    };


    /**
     * Delete an interaction stats rule.
     * 
     * @param {String} ruleId Rule ID
     */
    this.deleteAlertingInteractionstatsRule = function(ruleId) { 

      // verify the required parameter 'ruleId' is set
      if (ruleId === undefined || ruleId === null) {
        throw "Missing the required parameter 'ruleId' when calling deleteAlertingInteractionstatsRule";
      }


      return this.apiClient.callApi(
        '/api/v2/alerting/interactionstats/rules/{ruleId}', 
        'DELETE', 
        { 'ruleId': ruleId }, 
        {  }, 
        {  }, 
        {  }, 
        null, 
        ['PureCloud Auth'], 
        ['application/json'], 
        ['application/json']
      );
    };


    /**
     * Delete a routing status alert
     * 
     * @param {String} alertId Alert ID
     */
    this.deleteAlertingRoutingstatusAlert = function(alertId) { 

      // verify the required parameter 'alertId' is set
      if (alertId === undefined || alertId === null) {
        throw "Missing the required parameter 'alertId' when calling deleteAlertingRoutingstatusAlert";
      }


      return this.apiClient.callApi(
        '/api/v2/alerting/routingstatus/alerts/{alertId}', 
        'DELETE', 
        { 'alertId': alertId }, 
        {  }, 
        {  }, 
        {  }, 
        null, 
        ['PureCloud Auth'], 
        ['application/json'], 
        ['application/json']
      );
    };


    /**
     * Delete a routing status rule.
     * 
     * @param {String} ruleId Rule ID
     */
    this.deleteAlertingRoutingstatusRule = function(ruleId) { 

      // verify the required parameter 'ruleId' is set
      if (ruleId === undefined || ruleId === null) {
        throw "Missing the required parameter 'ruleId' when calling deleteAlertingRoutingstatusRule";
      }


      return this.apiClient.callApi(
        '/api/v2/alerting/routingstatus/rules/{ruleId}', 
        'DELETE', 
        { 'ruleId': ruleId }, 
        {  }, 
        {  }, 
        {  }, 
        null, 
        ['PureCloud Auth'], 
        ['application/json'], 
        ['application/json']
      );
    };


    /**
     * Delete a user presence alert
     * 
     * @param {String} alertId Alert ID
     */
    this.deleteAlertingUserpresenceAlert = function(alertId) { 

      // verify the required parameter 'alertId' is set
      if (alertId === undefined || alertId === null) {
        throw "Missing the required parameter 'alertId' when calling deleteAlertingUserpresenceAlert";
      }


      return this.apiClient.callApi(
        '/api/v2/alerting/userpresence/alerts/{alertId}', 
        'DELETE', 
        { 'alertId': alertId }, 
        {  }, 
        {  }, 
        {  }, 
        null, 
        ['PureCloud Auth'], 
        ['application/json'], 
        ['application/json']
      );
    };


    /**
     * Delete a user presence rule.
     * 
     * @param {String} ruleId Rule ID
     */
    this.deleteAlertingUserpresenceRule = function(ruleId) { 

      // verify the required parameter 'ruleId' is set
      if (ruleId === undefined || ruleId === null) {
        throw "Missing the required parameter 'ruleId' when calling deleteAlertingUserpresenceRule";
      }


      return this.apiClient.callApi(
        '/api/v2/alerting/userpresence/rules/{ruleId}', 
        'DELETE', 
        { 'ruleId': ruleId }, 
        {  }, 
        {  }, 
        {  }, 
        null, 
        ['PureCloud Auth'], 
        ['application/json'], 
        ['application/json']
      );
    };


    /**
     * Get a heart beat alert
     * 
     * @param {String} alertId Alert ID
     * @param {Object} opts Optional parameters
     * @param {Array.<String>} opts.expand Which fields, if any, to expand
     */
    this.getAlertingHeartbeatAlert = function(alertId, opts) { 
      opts = opts || {};

      // verify the required parameter 'alertId' is set
      if (alertId === undefined || alertId === null) {
        throw "Missing the required parameter 'alertId' when calling getAlertingHeartbeatAlert";
      }


      return this.apiClient.callApi(
        '/api/v2/alerting/heartbeat/alerts/{alertId}', 
        'GET', 
        { 'alertId': alertId }, 
        { 'expand': this.apiClient.buildCollectionParam(opts['expand'], 'multi') }, 
        {  }, 
        {  }, 
        null, 
        ['PureCloud Auth'], 
        ['application/json'], 
        ['application/json']
      );
    };


    /**
     * Get heart beat alert list.
     * 
     * @param {Object} opts Optional parameters
     * @param {Array.<String>} opts.expand Which fields, if any, to expand
     */
    this.getAlertingHeartbeatAlerts = function(opts) { 
      opts = opts || {};


      return this.apiClient.callApi(
        '/api/v2/alerting/heartbeat/alerts', 
        'GET', 
        {  }, 
        { 'expand': this.apiClient.buildCollectionParam(opts['expand'], 'multi') }, 
        {  }, 
        {  }, 
        null, 
        ['PureCloud Auth'], 
        ['application/json'], 
        ['application/json']
      );
    };


    /**
     * Get a heart beat rule.
     * 
     * @param {String} ruleId Rule ID
     * @param {Object} opts Optional parameters
     * @param {Array.<String>} opts.expand Which fields, if any, to expand
     */
    this.getAlertingHeartbeatRule = function(ruleId, opts) { 
      opts = opts || {};

      // verify the required parameter 'ruleId' is set
      if (ruleId === undefined || ruleId === null) {
        throw "Missing the required parameter 'ruleId' when calling getAlertingHeartbeatRule";
      }


      return this.apiClient.callApi(
        '/api/v2/alerting/heartbeat/rules/{ruleId}', 
        'GET', 
        { 'ruleId': ruleId }, 
        { 'expand': this.apiClient.buildCollectionParam(opts['expand'], 'multi') }, 
        {  }, 
        {  }, 
        null, 
        ['PureCloud Auth'], 
        ['application/json'], 
        ['application/json']
      );
    };


    /**
     * Get a heart beat rule list.
     * 
     * @param {Object} opts Optional parameters
     * @param {Array.<String>} opts.expand Which fields, if any, to expand
     */
    this.getAlertingHeartbeatRules = function(opts) { 
      opts = opts || {};


      return this.apiClient.callApi(
        '/api/v2/alerting/heartbeat/rules', 
        'GET', 
        {  }, 
        { 'expand': this.apiClient.buildCollectionParam(opts['expand'], 'multi') }, 
        {  }, 
        {  }, 
        null, 
        ['PureCloud Auth'], 
        ['application/json'], 
        ['application/json']
      );
    };


    /**
     * Get an interaction stats alert
     * 
     * @param {String} alertId Alert ID
     * @param {Object} opts Optional parameters
     * @param {Array.<String>} opts.expand Which fields, if any, to expand
     */
    this.getAlertingInteractionstatsAlert = function(alertId, opts) { 
      opts = opts || {};

      // verify the required parameter 'alertId' is set
      if (alertId === undefined || alertId === null) {
        throw "Missing the required parameter 'alertId' when calling getAlertingInteractionstatsAlert";
      }


      return this.apiClient.callApi(
        '/api/v2/alerting/interactionstats/alerts/{alertId}', 
        'GET', 
        { 'alertId': alertId }, 
        { 'expand': this.apiClient.buildCollectionParam(opts['expand'], 'multi') }, 
        {  }, 
        {  }, 
        null, 
        ['PureCloud Auth'], 
        ['application/json'], 
        ['application/json']
      );
    };


    /**
     * Get interaction stats alert list.
     * 
     * @param {Object} opts Optional parameters
     * @param {Array.<String>} opts.expand Which fields, if any, to expand
     */
    this.getAlertingInteractionstatsAlerts = function(opts) { 
      opts = opts || {};


      return this.apiClient.callApi(
        '/api/v2/alerting/interactionstats/alerts', 
        'GET', 
        {  }, 
        { 'expand': this.apiClient.buildCollectionParam(opts['expand'], 'multi') }, 
        {  }, 
        {  }, 
        null, 
        ['PureCloud Auth'], 
        ['application/json'], 
        ['application/json']
      );
    };


    /**
     * Gets user unread count of interaction stats alerts.
     * 
     */
    this.getAlertingInteractionstatsAlertsUnread = function() { 


      return this.apiClient.callApi(
        '/api/v2/alerting/interactionstats/alerts/unread', 
        'GET', 
        {  }, 
        {  }, 
        {  }, 
        {  }, 
        null, 
        ['PureCloud Auth'], 
        ['application/json'], 
        ['application/json']
      );
    };


    /**
     * Get an interaction stats rule.
     * 
     * @param {String} ruleId Rule ID
     * @param {Object} opts Optional parameters
     * @param {Array.<String>} opts.expand Which fields, if any, to expand
     */
    this.getAlertingInteractionstatsRule = function(ruleId, opts) { 
      opts = opts || {};

      // verify the required parameter 'ruleId' is set
      if (ruleId === undefined || ruleId === null) {
        throw "Missing the required parameter 'ruleId' when calling getAlertingInteractionstatsRule";
      }


      return this.apiClient.callApi(
        '/api/v2/alerting/interactionstats/rules/{ruleId}', 
        'GET', 
        { 'ruleId': ruleId }, 
        { 'expand': this.apiClient.buildCollectionParam(opts['expand'], 'multi') }, 
        {  }, 
        {  }, 
        null, 
        ['PureCloud Auth'], 
        ['application/json'], 
        ['application/json']
      );
    };


    /**
     * Get an interaction stats rule list.
     * 
     * @param {Object} opts Optional parameters
     * @param {Array.<String>} opts.expand Which fields, if any, to expand
     */
    this.getAlertingInteractionstatsRules = function(opts) { 
      opts = opts || {};


      return this.apiClient.callApi(
        '/api/v2/alerting/interactionstats/rules', 
        'GET', 
        {  }, 
        { 'expand': this.apiClient.buildCollectionParam(opts['expand'], 'multi') }, 
        {  }, 
        {  }, 
        null, 
        ['PureCloud Auth'], 
        ['application/json'], 
        ['application/json']
      );
    };


    /**
     * Get a routing status alert
     * 
     * @param {String} alertId Alert ID
     * @param {Object} opts Optional parameters
     * @param {Array.<String>} opts.expand Which fields, if any, to expand
     */
    this.getAlertingRoutingstatusAlert = function(alertId, opts) { 
      opts = opts || {};

      // verify the required parameter 'alertId' is set
      if (alertId === undefined || alertId === null) {
        throw "Missing the required parameter 'alertId' when calling getAlertingRoutingstatusAlert";
      }


      return this.apiClient.callApi(
        '/api/v2/alerting/routingstatus/alerts/{alertId}', 
        'GET', 
        { 'alertId': alertId }, 
        { 'expand': this.apiClient.buildCollectionParam(opts['expand'], 'multi') }, 
        {  }, 
        {  }, 
        null, 
        ['PureCloud Auth'], 
        ['application/json'], 
        ['application/json']
      );
    };


    /**
     * Get routing status alert list.
     * 
     * @param {Object} opts Optional parameters
     * @param {Array.<String>} opts.expand Which fields, if any, to expand
     */
    this.getAlertingRoutingstatusAlerts = function(opts) { 
      opts = opts || {};


      return this.apiClient.callApi(
        '/api/v2/alerting/routingstatus/alerts', 
        'GET', 
        {  }, 
        { 'expand': this.apiClient.buildCollectionParam(opts['expand'], 'multi') }, 
        {  }, 
        {  }, 
        null, 
        ['PureCloud Auth'], 
        ['application/json'], 
        ['application/json']
      );
    };


    /**
     * Get a routing status rule.
     * 
     * @param {String} ruleId Rule ID
     * @param {Object} opts Optional parameters
     * @param {Array.<String>} opts.expand Which fields, if any, to expand
     */
    this.getAlertingRoutingstatusRule = function(ruleId, opts) { 
      opts = opts || {};

      // verify the required parameter 'ruleId' is set
      if (ruleId === undefined || ruleId === null) {
        throw "Missing the required parameter 'ruleId' when calling getAlertingRoutingstatusRule";
      }


      return this.apiClient.callApi(
        '/api/v2/alerting/routingstatus/rules/{ruleId}', 
        'GET', 
        { 'ruleId': ruleId }, 
        { 'expand': this.apiClient.buildCollectionParam(opts['expand'], 'multi') }, 
        {  }, 
        {  }, 
        null, 
        ['PureCloud Auth'], 
        ['application/json'], 
        ['application/json']
      );
    };


    /**
     * Get a routing status rule list.
     * 
     * @param {Object} opts Optional parameters
     * @param {Array.<String>} opts.expand Which fields, if any, to expand
     */
    this.getAlertingRoutingstatusRules = function(opts) { 
      opts = opts || {};


      return this.apiClient.callApi(
        '/api/v2/alerting/routingstatus/rules', 
        'GET', 
        {  }, 
        { 'expand': this.apiClient.buildCollectionParam(opts['expand'], 'multi') }, 
        {  }, 
        {  }, 
        null, 
        ['PureCloud Auth'], 
        ['application/json'], 
        ['application/json']
      );
    };


    /**
     * Get a user presence alert
     * 
     * @param {String} alertId Alert ID
     * @param {Object} opts Optional parameters
     * @param {Array.<String>} opts.expand Which fields, if any, to expand
     */
    this.getAlertingUserpresenceAlert = function(alertId, opts) { 
      opts = opts || {};

      // verify the required parameter 'alertId' is set
      if (alertId === undefined || alertId === null) {
        throw "Missing the required parameter 'alertId' when calling getAlertingUserpresenceAlert";
      }


      return this.apiClient.callApi(
        '/api/v2/alerting/userpresence/alerts/{alertId}', 
        'GET', 
        { 'alertId': alertId }, 
        { 'expand': this.apiClient.buildCollectionParam(opts['expand'], 'multi') }, 
        {  }, 
        {  }, 
        null, 
        ['PureCloud Auth'], 
        ['application/json'], 
        ['application/json']
      );
    };


    /**
     * Get user presence alert list.
     * 
     * @param {Object} opts Optional parameters
     * @param {Array.<String>} opts.expand Which fields, if any, to expand
     */
    this.getAlertingUserpresenceAlerts = function(opts) { 
      opts = opts || {};


      return this.apiClient.callApi(
        '/api/v2/alerting/userpresence/alerts', 
        'GET', 
        {  }, 
        { 'expand': this.apiClient.buildCollectionParam(opts['expand'], 'multi') }, 
        {  }, 
        {  }, 
        null, 
        ['PureCloud Auth'], 
        ['application/json'], 
        ['application/json']
      );
    };


    /**
     * Get a user presence rule.
     * 
     * @param {String} ruleId Rule ID
     * @param {Object} opts Optional parameters
     * @param {Array.<String>} opts.expand Which fields, if any, to expand
     */
    this.getAlertingUserpresenceRule = function(ruleId, opts) { 
      opts = opts || {};

      // verify the required parameter 'ruleId' is set
      if (ruleId === undefined || ruleId === null) {
        throw "Missing the required parameter 'ruleId' when calling getAlertingUserpresenceRule";
      }


      return this.apiClient.callApi(
        '/api/v2/alerting/userpresence/rules/{ruleId}', 
        'GET', 
        { 'ruleId': ruleId }, 
        { 'expand': this.apiClient.buildCollectionParam(opts['expand'], 'multi') }, 
        {  }, 
        {  }, 
        null, 
        ['PureCloud Auth'], 
        ['application/json'], 
        ['application/json']
      );
    };


    /**
     * Get a user presence rule list.
     * 
     * @param {Object} opts Optional parameters
     * @param {Array.<String>} opts.expand Which fields, if any, to expand
     */
    this.getAlertingUserpresenceRules = function(opts) { 
      opts = opts || {};


      return this.apiClient.callApi(
        '/api/v2/alerting/userpresence/rules', 
        'GET', 
        {  }, 
        { 'expand': this.apiClient.buildCollectionParam(opts['expand'], 'multi') }, 
        {  }, 
        {  }, 
        null, 
        ['PureCloud Auth'], 
        ['application/json'], 
        ['application/json']
      );
    };


    /**
     * Create a heart beat rule.
     * 
     * @param {module:purecloud-platform-client-v2/model/HeartBeatRule} body HeartBeatRule
     * @param {Object} opts Optional parameters
     * @param {Array.<String>} opts.expand Which fields, if any, to expand
     */
    this.postAlertingHeartbeatRules = function(body, opts) { 
      opts = opts || {};

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw "Missing the required parameter 'body' when calling postAlertingHeartbeatRules";
      }


      return this.apiClient.callApi(
        '/api/v2/alerting/heartbeat/rules', 
        'POST', 
        {  }, 
        { 'expand': this.apiClient.buildCollectionParam(opts['expand'], 'multi') }, 
        {  }, 
        {  }, 
        body, 
        ['PureCloud Auth'], 
        ['application/json'], 
        ['application/json']
      );
    };


    /**
     * Create an interaction stats rule.
     * 
     * @param {module:purecloud-platform-client-v2/model/InteractionStatsRule} body AlertingRule
     * @param {Object} opts Optional parameters
     * @param {Array.<String>} opts.expand Which fields, if any, to expand
     */
    this.postAlertingInteractionstatsRules = function(body, opts) { 
      opts = opts || {};

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw "Missing the required parameter 'body' when calling postAlertingInteractionstatsRules";
      }


      return this.apiClient.callApi(
        '/api/v2/alerting/interactionstats/rules', 
        'POST', 
        {  }, 
        { 'expand': this.apiClient.buildCollectionParam(opts['expand'], 'multi') }, 
        {  }, 
        {  }, 
        body, 
        ['PureCloud Auth'], 
        ['application/json'], 
        ['application/json']
      );
    };


    /**
     * Create a routing status rule.
     * 
     * @param {module:purecloud-platform-client-v2/model/RoutingStatusRule} body RoutingStatusRule
     * @param {Object} opts Optional parameters
     * @param {Array.<String>} opts.expand Which fields, if any, to expand
     */
    this.postAlertingRoutingstatusRules = function(body, opts) { 
      opts = opts || {};

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw "Missing the required parameter 'body' when calling postAlertingRoutingstatusRules";
      }


      return this.apiClient.callApi(
        '/api/v2/alerting/routingstatus/rules', 
        'POST', 
        {  }, 
        { 'expand': this.apiClient.buildCollectionParam(opts['expand'], 'multi') }, 
        {  }, 
        {  }, 
        body, 
        ['PureCloud Auth'], 
        ['application/json'], 
        ['application/json']
      );
    };


    /**
     * Create a user presence rule.
     * 
     * @param {module:purecloud-platform-client-v2/model/UserPresenceRule} body UserPresenceRule
     * @param {Object} opts Optional parameters
     * @param {Array.<String>} opts.expand Which fields, if any, to expand
     */
    this.postAlertingUserpresenceRules = function(body, opts) { 
      opts = opts || {};

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw "Missing the required parameter 'body' when calling postAlertingUserpresenceRules";
      }


      return this.apiClient.callApi(
        '/api/v2/alerting/userpresence/rules', 
        'POST', 
        {  }, 
        { 'expand': this.apiClient.buildCollectionParam(opts['expand'], 'multi') }, 
        {  }, 
        {  }, 
        body, 
        ['PureCloud Auth'], 
        ['application/json'], 
        ['application/json']
      );
    };


    /**
     * Update a heart beat rule
     * 
     * @param {String} ruleId Rule ID
     * @param {module:purecloud-platform-client-v2/model/HeartBeatRule} body HeartBeatRule
     * @param {Object} opts Optional parameters
     * @param {Array.<String>} opts.expand Which fields, if any, to expand
     */
    this.putAlertingHeartbeatRule = function(ruleId, body, opts) { 
      opts = opts || {};

      // verify the required parameter 'ruleId' is set
      if (ruleId === undefined || ruleId === null) {
        throw "Missing the required parameter 'ruleId' when calling putAlertingHeartbeatRule";
      }

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw "Missing the required parameter 'body' when calling putAlertingHeartbeatRule";
      }


      return this.apiClient.callApi(
        '/api/v2/alerting/heartbeat/rules/{ruleId}', 
        'PUT', 
        { 'ruleId': ruleId }, 
        { 'expand': this.apiClient.buildCollectionParam(opts['expand'], 'multi') }, 
        {  }, 
        {  }, 
        body, 
        ['PureCloud Auth'], 
        ['application/json'], 
        ['application/json']
      );
    };


    /**
     * Update an interaction stats alert read status
     * 
     * @param {String} alertId Alert ID
     * @param {module:purecloud-platform-client-v2/model/UnreadStatus} body InteractionStatsAlert
     * @param {Object} opts Optional parameters
     * @param {Array.<String>} opts.expand Which fields, if any, to expand
     */
    this.putAlertingInteractionstatsAlert = function(alertId, body, opts) { 
      opts = opts || {};

      // verify the required parameter 'alertId' is set
      if (alertId === undefined || alertId === null) {
        throw "Missing the required parameter 'alertId' when calling putAlertingInteractionstatsAlert";
      }

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw "Missing the required parameter 'body' when calling putAlertingInteractionstatsAlert";
      }


      return this.apiClient.callApi(
        '/api/v2/alerting/interactionstats/alerts/{alertId}', 
        'PUT', 
        { 'alertId': alertId }, 
        { 'expand': this.apiClient.buildCollectionParam(opts['expand'], 'multi') }, 
        {  }, 
        {  }, 
        body, 
        ['PureCloud Auth'], 
        ['application/json'], 
        ['application/json']
      );
    };


    /**
     * Update an interaction stats rule
     * 
     * @param {String} ruleId Rule ID
     * @param {module:purecloud-platform-client-v2/model/InteractionStatsRule} body AlertingRule
     * @param {Object} opts Optional parameters
     * @param {Array.<String>} opts.expand Which fields, if any, to expand
     */
    this.putAlertingInteractionstatsRule = function(ruleId, body, opts) { 
      opts = opts || {};

      // verify the required parameter 'ruleId' is set
      if (ruleId === undefined || ruleId === null) {
        throw "Missing the required parameter 'ruleId' when calling putAlertingInteractionstatsRule";
      }

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw "Missing the required parameter 'body' when calling putAlertingInteractionstatsRule";
      }


      return this.apiClient.callApi(
        '/api/v2/alerting/interactionstats/rules/{ruleId}', 
        'PUT', 
        { 'ruleId': ruleId }, 
        { 'expand': this.apiClient.buildCollectionParam(opts['expand'], 'multi') }, 
        {  }, 
        {  }, 
        body, 
        ['PureCloud Auth'], 
        ['application/json'], 
        ['application/json']
      );
    };


    /**
     * Update a routing status rule
     * 
     * @param {String} ruleId Rule ID
     * @param {module:purecloud-platform-client-v2/model/RoutingStatusRule} body RoutingStatusRule
     * @param {Object} opts Optional parameters
     * @param {Array.<String>} opts.expand Which fields, if any, to expand
     */
    this.putAlertingRoutingstatusRule = function(ruleId, body, opts) { 
      opts = opts || {};

      // verify the required parameter 'ruleId' is set
      if (ruleId === undefined || ruleId === null) {
        throw "Missing the required parameter 'ruleId' when calling putAlertingRoutingstatusRule";
      }

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw "Missing the required parameter 'body' when calling putAlertingRoutingstatusRule";
      }


      return this.apiClient.callApi(
        '/api/v2/alerting/routingstatus/rules/{ruleId}', 
        'PUT', 
        { 'ruleId': ruleId }, 
        { 'expand': this.apiClient.buildCollectionParam(opts['expand'], 'multi') }, 
        {  }, 
        {  }, 
        body, 
        ['PureCloud Auth'], 
        ['application/json'], 
        ['application/json']
      );
    };


    /**
     * Update a user presence rule
     * 
     * @param {String} ruleId Rule ID
     * @param {module:purecloud-platform-client-v2/model/UserPresenceRule} body UserPresenceRule
     * @param {Object} opts Optional parameters
     * @param {Array.<String>} opts.expand Which fields, if any, to expand
     */
    this.putAlertingUserpresenceRule = function(ruleId, body, opts) { 
      opts = opts || {};

      // verify the required parameter 'ruleId' is set
      if (ruleId === undefined || ruleId === null) {
        throw "Missing the required parameter 'ruleId' when calling putAlertingUserpresenceRule";
      }

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw "Missing the required parameter 'body' when calling putAlertingUserpresenceRule";
      }


      return this.apiClient.callApi(
        '/api/v2/alerting/userpresence/rules/{ruleId}', 
        'PUT', 
        { 'ruleId': ruleId }, 
        { 'expand': this.apiClient.buildCollectionParam(opts['expand'], 'multi') }, 
        {  }, 
        {  }, 
        body, 
        ['PureCloud Auth'], 
        ['application/json'], 
        ['application/json']
      );
    };
  };

  return exports;
}));
