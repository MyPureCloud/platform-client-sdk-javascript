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
    root.platformClient.QualityApi = factory(root.platformClient.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * Quality service.
   * @module purecloud-platform-client-v2/api/QualityApi
   * @version 2.0.4
   */

  /**
   * Constructs a new QualityApi. 
   * @alias module:purecloud-platform-client-v2/api/QualityApi
   * @class
   * @param {module:purecloud-platform-client-v2/ApiClient} apiClient Optional API client implementation to use,
   * default to {@link module:purecloud-platform-client-v2/ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;



    /**
     * Delete a calibration by id.
     * 
     * @param {String} calibrationId Calibration ID
     * @param {String} calibratorId calibratorId
     */
    this.deleteQualityCalibration = function(calibrationId, calibratorId) { 

      // verify the required parameter 'calibrationId' is set
      if (calibrationId === undefined || calibrationId === null) {
        throw "Missing the required parameter 'calibrationId' when calling deleteQualityCalibration";
      }

      // verify the required parameter 'calibratorId' is set
      if (calibratorId === undefined || calibratorId === null) {
        throw "Missing the required parameter 'calibratorId' when calling deleteQualityCalibration";
      }


      return this.apiClient.callApi(
        '/api/v2/quality/calibrations/{calibrationId}', 
        'DELETE', 
        { 'calibrationId': calibrationId }, 
        { 'calibratorId': calibratorId }, 
        {  }, 
        {  }, 
        null, 
        ['PureCloud Auth'], 
        ['application/json'], 
        ['application/json']
      );
    };


    /**
     * Delete an evaluation
     * 
     * @param {String} conversationId conversationId
     * @param {String} evaluationId evaluationId
     * @param {Object} opts Optional parameters
     * @param {String} opts.expand evaluatorId
     */
    this.deleteQualityConversationEvaluation = function(conversationId, evaluationId, opts) { 
      opts = opts || {};

      // verify the required parameter 'conversationId' is set
      if (conversationId === undefined || conversationId === null) {
        throw "Missing the required parameter 'conversationId' when calling deleteQualityConversationEvaluation";
      }

      // verify the required parameter 'evaluationId' is set
      if (evaluationId === undefined || evaluationId === null) {
        throw "Missing the required parameter 'evaluationId' when calling deleteQualityConversationEvaluation";
      }


      return this.apiClient.callApi(
        '/api/v2/quality/conversations/{conversationId}/evaluations/{evaluationId}', 
        'DELETE', 
        { 'conversationId': conversationId,'evaluationId': evaluationId }, 
        { 'expand': opts['expand'] }, 
        {  }, 
        {  }, 
        null, 
        ['PureCloud Auth'], 
        ['application/json'], 
        ['application/json']
      );
    };


    /**
     * Delete an evaluation form.
     * 
     * @param {String} formId Form ID
     */
    this.deleteQualityForm = function(formId) { 

      // verify the required parameter 'formId' is set
      if (formId === undefined || formId === null) {
        throw "Missing the required parameter 'formId' when calling deleteQualityForm";
      }


      return this.apiClient.callApi(
        '/api/v2/quality/forms/{formId}', 
        'DELETE', 
        { 'formId': formId }, 
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
     * Delete a keywordSet by id.
     * 
     * @param {String} keywordSetId KeywordSet ID
     */
    this.deleteQualityKeywordset = function(keywordSetId) { 

      // verify the required parameter 'keywordSetId' is set
      if (keywordSetId === undefined || keywordSetId === null) {
        throw "Missing the required parameter 'keywordSetId' when calling deleteQualityKeywordset";
      }


      return this.apiClient.callApi(
        '/api/v2/quality/keywordsets/{keywordSetId}', 
        'DELETE', 
        { 'keywordSetId': keywordSetId }, 
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
     * Delete keyword sets
     * Bulk delete of keyword sets; this will only delete the keyword sets that match the ids specified in the query param.
     * @param {String} ids A comma-delimited list of valid KeywordSet ids
     */
    this.deleteQualityKeywordsets = function(ids) { 

      // verify the required parameter 'ids' is set
      if (ids === undefined || ids === null) {
        throw "Missing the required parameter 'ids' when calling deleteQualityKeywordsets";
      }


      return this.apiClient.callApi(
        '/api/v2/quality/keywordsets', 
        'DELETE', 
        {  }, 
        { 'ids': ids }, 
        {  }, 
        {  }, 
        null, 
        ['PureCloud Auth'], 
        ['application/json'], 
        ['application/json']
      );
    };


    /**
     * Gets a list of Agent Activities
     * Including the number of evaluations and average evaluation score
     * @param {Object} opts Optional parameters
     * @param {Number} opts.pageSize The total page size requested (default to 25)
     * @param {Number} opts.pageNumber The page number requested (default to 1)
     * @param {String} opts.sortBy variable name requested to sort by
     * @param {Array.<Object>} opts.expand variable name requested by expand list
     * @param {String} opts.nextPage next page token
     * @param {String} opts.previousPage Previous page token
     * @param {Date} opts.startTime Start time of agent activity. Date time is represented as an ISO-8601 string. For example: yyyy-MM-ddTHH:mm:ss.SSSZ
     * @param {Date} opts.endTime End time of agent activity. Date time is represented as an ISO-8601 string. For example: yyyy-MM-ddTHH:mm:ss.SSSZ
     * @param {Array.<Object>} opts.agentUserId user id of agent requested
     * @param {String} opts.evaluatorUserId user id of the evaluator
     * @param {String} opts.name name
     * @param {String} opts.group group id
     */
    this.getQualityAgentsActivity = function(opts) { 
      opts = opts || {};


      return this.apiClient.callApi(
        '/api/v2/quality/agents/activity', 
        'GET', 
        {  }, 
        { 'pageSize': opts['pageSize'],'pageNumber': opts['pageNumber'],'sortBy': opts['sortBy'],'expand': this.apiClient.buildCollectionParam(opts['expand'], 'multi'),'nextPage': opts['nextPage'],'previousPage': opts['previousPage'],'startTime': opts['startTime'],'endTime': opts['endTime'],'agentUserId': this.apiClient.buildCollectionParam(opts['agentUserId'], 'multi'),'evaluatorUserId': opts['evaluatorUserId'],'name': opts['name'],'group': opts['group'] }, 
        {  }, 
        {  }, 
        null, 
        ['PureCloud Auth'], 
        ['application/json'], 
        ['application/json']
      );
    };


    /**
     * Get a calibration by id.
     * 
     * @param {String} calibrationId Calibration ID
     * @param {String} calibratorId calibratorId
     */
    this.getQualityCalibration = function(calibrationId, calibratorId) { 

      // verify the required parameter 'calibrationId' is set
      if (calibrationId === undefined || calibrationId === null) {
        throw "Missing the required parameter 'calibrationId' when calling getQualityCalibration";
      }

      // verify the required parameter 'calibratorId' is set
      if (calibratorId === undefined || calibratorId === null) {
        throw "Missing the required parameter 'calibratorId' when calling getQualityCalibration";
      }


      return this.apiClient.callApi(
        '/api/v2/quality/calibrations/{calibrationId}', 
        'GET', 
        { 'calibrationId': calibrationId }, 
        { 'calibratorId': calibratorId }, 
        {  }, 
        {  }, 
        null, 
        ['PureCloud Auth'], 
        ['application/json'], 
        ['application/json']
      );
    };


    /**
     * Get the list of calibrations
     * 
     * @param {String} calibratorId user id of calibrator
     * @param {Object} opts Optional parameters
     * @param {Number} opts.pageSize The total page size requested (default to 25)
     * @param {Number} opts.pageNumber The page number requested (default to 1)
     * @param {String} opts.sortBy variable name requested to sort by
     * @param {Array.<Object>} opts.expand variable name requested by expand list
     * @param {String} opts.nextPage next page token
     * @param {String} opts.previousPage Previous page token
     * @param {String} opts.conversationId conversation id
     * @param {Date} opts.startTime Beginning of the calibration query. Date time is represented as an ISO-8601 string. For example: yyyy-MM-ddTHH:mm:ss.SSSZ
     * @param {Date} opts.endTime end of the calibration query. Date time is represented as an ISO-8601 string. For example: yyyy-MM-ddTHH:mm:ss.SSSZ
     */
    this.getQualityCalibrations = function(calibratorId, opts) { 
      opts = opts || {};

      // verify the required parameter 'calibratorId' is set
      if (calibratorId === undefined || calibratorId === null) {
        throw "Missing the required parameter 'calibratorId' when calling getQualityCalibrations";
      }


      return this.apiClient.callApi(
        '/api/v2/quality/calibrations', 
        'GET', 
        {  }, 
        { 'pageSize': opts['pageSize'],'pageNumber': opts['pageNumber'],'sortBy': opts['sortBy'],'expand': this.apiClient.buildCollectionParam(opts['expand'], 'multi'),'nextPage': opts['nextPage'],'previousPage': opts['previousPage'],'conversationId': opts['conversationId'],'startTime': opts['startTime'],'endTime': opts['endTime'],'calibratorId': calibratorId }, 
        {  }, 
        {  }, 
        null, 
        ['PureCloud Auth'], 
        ['application/json'], 
        ['application/json']
      );
    };


    /**
     * Get audits for conversation or recording
     * 
     * @param {String} conversationId Conversation ID
     * @param {Object} opts Optional parameters
     * @param {Number} opts.pageSize The total page size requested (default to 25)
     * @param {Number} opts.pageNumber The page number requested (default to 1)
     * @param {String} opts.sortBy variable name requested to sort by
     * @param {Array.<Object>} opts.expand variable name requested by expand list
     * @param {String} opts.nextPage next page token
     * @param {String} opts.previousPage Previous page token
     * @param {String} opts.recordingId id of the recording
     * @param {String} opts.entityType entity type options: Recording, Calibration, Evaluation, Annotation, Screen_Recording (default to RECORDING)
     */
    this.getQualityConversationAudits = function(conversationId, opts) { 
      opts = opts || {};

      // verify the required parameter 'conversationId' is set
      if (conversationId === undefined || conversationId === null) {
        throw "Missing the required parameter 'conversationId' when calling getQualityConversationAudits";
      }


      return this.apiClient.callApi(
        '/api/v2/quality/conversations/{conversationId}/audits', 
        'GET', 
        { 'conversationId': conversationId }, 
        { 'pageSize': opts['pageSize'],'pageNumber': opts['pageNumber'],'sortBy': opts['sortBy'],'expand': this.apiClient.buildCollectionParam(opts['expand'], 'multi'),'nextPage': opts['nextPage'],'previousPage': opts['previousPage'],'recordingId': opts['recordingId'],'entityType': opts['entityType'] }, 
        {  }, 
        {  }, 
        null, 
        ['PureCloud Auth'], 
        ['application/json'], 
        ['application/json']
      );
    };


    /**
     * Get an evaluation
     * 
     * @param {String} conversationId conversationId
     * @param {String} evaluationId evaluationId
     * @param {Object} opts Optional parameters
     * @param {String} opts.expand agent, evaluator, evaluationForm
     */
    this.getQualityConversationEvaluation = function(conversationId, evaluationId, opts) { 
      opts = opts || {};

      // verify the required parameter 'conversationId' is set
      if (conversationId === undefined || conversationId === null) {
        throw "Missing the required parameter 'conversationId' when calling getQualityConversationEvaluation";
      }

      // verify the required parameter 'evaluationId' is set
      if (evaluationId === undefined || evaluationId === null) {
        throw "Missing the required parameter 'evaluationId' when calling getQualityConversationEvaluation";
      }


      return this.apiClient.callApi(
        '/api/v2/quality/conversations/{conversationId}/evaluations/{evaluationId}', 
        'GET', 
        { 'conversationId': conversationId,'evaluationId': evaluationId }, 
        { 'expand': opts['expand'] }, 
        {  }, 
        {  }, 
        null, 
        ['PureCloud Auth'], 
        ['application/json'], 
        ['application/json']
      );
    };


    /**
     * Queries Evaluations and returns a paged list
     * Query params must include one of conversationId, evaluatorUserId, or agentUserId
     * @param {Object} opts Optional parameters
     * @param {Number} opts.pageSize The total page size requested (default to 25)
     * @param {Number} opts.pageNumber The page number requested (default to 1)
     * @param {String} opts.sortBy variable name requested to sort by
     * @param {Array.<Object>} opts.expand variable name requested by expand list
     * @param {String} opts.nextPage next page token
     * @param {String} opts.previousPage Previous page token
     * @param {String} opts.conversationId conversationId specified
     * @param {String} opts.agentUserId user id of the agent
     * @param {String} opts.evaluatorUserId evaluator user id
     * @param {String} opts.queueId queue id
     * @param {String} opts.startTime start time of the evaluation query
     * @param {String} opts.endTime end time of the evaluation query
     * @param {Array.<Object>} opts.evaluationState evaluation state options: Pending, InProgress, Finished
     * @param {Boolean} opts.isReleased the evaluation has been released
     * @param {Boolean} opts.agentHasRead agent has the evaluation
     * @param {Boolean} opts.expandAnswerTotalScores get the total scores for evaluations
     * @param {Number} opts.maximum maximum
     */
    this.getQualityEvaluationsQuery = function(opts) { 
      opts = opts || {};


      return this.apiClient.callApi(
        '/api/v2/quality/evaluations/query', 
        'GET', 
        {  }, 
        { 'pageSize': opts['pageSize'],'pageNumber': opts['pageNumber'],'sortBy': opts['sortBy'],'expand': this.apiClient.buildCollectionParam(opts['expand'], 'multi'),'nextPage': opts['nextPage'],'previousPage': opts['previousPage'],'conversationId': opts['conversationId'],'agentUserId': opts['agentUserId'],'evaluatorUserId': opts['evaluatorUserId'],'queueId': opts['queueId'],'startTime': opts['startTime'],'endTime': opts['endTime'],'evaluationState': this.apiClient.buildCollectionParam(opts['evaluationState'], 'multi'),'isReleased': opts['isReleased'],'agentHasRead': opts['agentHasRead'],'expandAnswerTotalScores': opts['expandAnswerTotalScores'],'maximum': opts['maximum'] }, 
        {  }, 
        {  }, 
        null, 
        ['PureCloud Auth'], 
        ['application/json'], 
        ['application/json']
      );
    };


    /**
     * Get an evaluator activity
     * 
     * @param {Object} opts Optional parameters
     * @param {Number} opts.pageSize The total page size requested (default to 25)
     * @param {Number} opts.pageNumber The page number requested (default to 1)
     * @param {String} opts.sortBy variable name requested to sort by
     * @param {Array.<Object>} opts.expand variable name requested by expand list
     * @param {String} opts.nextPage next page token
     * @param {String} opts.previousPage Previous page token
     * @param {Date} opts.startTime The start time specified. Date time is represented as an ISO-8601 string. For example: yyyy-MM-ddTHH:mm:ss.SSSZ
     * @param {Date} opts.endTime The end time specified. Date time is represented as an ISO-8601 string. For example: yyyy-MM-ddTHH:mm:ss.SSSZ
     * @param {String} opts.name Evaluator name
     * @param {Array.<Object>} opts.permission permission strings
     * @param {String} opts.group group id
     */
    this.getQualityEvaluatorsActivity = function(opts) { 
      opts = opts || {};


      return this.apiClient.callApi(
        '/api/v2/quality/evaluators/activity', 
        'GET', 
        {  }, 
        { 'pageSize': opts['pageSize'],'pageNumber': opts['pageNumber'],'sortBy': opts['sortBy'],'expand': this.apiClient.buildCollectionParam(opts['expand'], 'multi'),'nextPage': opts['nextPage'],'previousPage': opts['previousPage'],'startTime': opts['startTime'],'endTime': opts['endTime'],'name': opts['name'],'permission': this.apiClient.buildCollectionParam(opts['permission'], 'multi'),'group': opts['group'] }, 
        {  }, 
        {  }, 
        null, 
        ['PureCloud Auth'], 
        ['application/json'], 
        ['application/json']
      );
    };


    /**
     * Get an evaluation form
     * 
     * @param {String} formId Form ID
     */
    this.getQualityForm = function(formId) { 

      // verify the required parameter 'formId' is set
      if (formId === undefined || formId === null) {
        throw "Missing the required parameter 'formId' when calling getQualityForm";
      }


      return this.apiClient.callApi(
        '/api/v2/quality/forms/{formId}', 
        'GET', 
        { 'formId': formId }, 
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
     * Gets all the revisions for a specific evaluation.
     * 
     * @param {String} formId Form ID
     * @param {Object} opts Optional parameters
     * @param {Number} opts.pageSize Page size (default to 25)
     * @param {Number} opts.pageNumber Page number (default to 1)
     */
    this.getQualityFormVersions = function(formId, opts) { 
      opts = opts || {};

      // verify the required parameter 'formId' is set
      if (formId === undefined || formId === null) {
        throw "Missing the required parameter 'formId' when calling getQualityFormVersions";
      }


      return this.apiClient.callApi(
        '/api/v2/quality/forms/{formId}/versions', 
        'GET', 
        { 'formId': formId }, 
        { 'pageSize': opts['pageSize'],'pageNumber': opts['pageNumber'] }, 
        {  }, 
        {  }, 
        null, 
        ['PureCloud Auth'], 
        ['application/json'], 
        ['application/json']
      );
    };


    /**
     * Get the list of evaluation forms
     * 
     * @param {Object} opts Optional parameters
     * @param {Number} opts.pageSize The total page size requested (default to 25)
     * @param {Number} opts.pageNumber The page number requested (default to 1)
     * @param {String} opts.sortBy variable name requested to sort by
     * @param {String} opts.nextPage next page token
     * @param {String} opts.previousPage Previous page token
     * @param {String} opts.expand Expand
     * @param {String} opts.name Name
     */
    this.getQualityForms = function(opts) { 
      opts = opts || {};


      return this.apiClient.callApi(
        '/api/v2/quality/forms', 
        'GET', 
        {  }, 
        { 'pageSize': opts['pageSize'],'pageNumber': opts['pageNumber'],'sortBy': opts['sortBy'],'nextPage': opts['nextPage'],'previousPage': opts['previousPage'],'expand': opts['expand'],'name': opts['name'] }, 
        {  }, 
        {  }, 
        null, 
        ['PureCloud Auth'], 
        ['application/json'], 
        ['application/json']
      );
    };


    /**
     * Get a keywordSet by id.
     * 
     * @param {String} keywordSetId KeywordSet ID
     */
    this.getQualityKeywordset = function(keywordSetId) { 

      // verify the required parameter 'keywordSetId' is set
      if (keywordSetId === undefined || keywordSetId === null) {
        throw "Missing the required parameter 'keywordSetId' when calling getQualityKeywordset";
      }


      return this.apiClient.callApi(
        '/api/v2/quality/keywordsets/{keywordSetId}', 
        'GET', 
        { 'keywordSetId': keywordSetId }, 
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
     * Get the list of keyword sets
     * 
     * @param {Object} opts Optional parameters
     * @param {Number} opts.pageSize The total page size requested (default to 25)
     * @param {Number} opts.pageNumber The page number requested (default to 1)
     * @param {String} opts.sortBy variable name requested to sort by
     * @param {Array.<Object>} opts.expand variable name requested by expand list
     * @param {String} opts.nextPage next page token
     * @param {String} opts.previousPage Previous page token
     * @param {String} opts.name the keyword set name - used for filtering results in searches.
     * @param {String} opts.queueId the queue id - used for filtering results in searches.
     * @param {String} opts.agentId the agent id - used for filtering results in searches.
     * @param {module:purecloud-platform-client-v2/model/String} opts.operator If agentID and queueId are both present, this determines whether the query is an AND or OR between those parameters.
     */
    this.getQualityKeywordsets = function(opts) { 
      opts = opts || {};


      return this.apiClient.callApi(
        '/api/v2/quality/keywordsets', 
        'GET', 
        {  }, 
        { 'pageSize': opts['pageSize'],'pageNumber': opts['pageNumber'],'sortBy': opts['sortBy'],'expand': this.apiClient.buildCollectionParam(opts['expand'], 'multi'),'nextPage': opts['nextPage'],'previousPage': opts['previousPage'],'name': opts['name'],'queueId': opts['queueId'],'agentId': opts['agentId'],'operator': opts['operator'] }, 
        {  }, 
        {  }, 
        null, 
        ['PureCloud Auth'], 
        ['application/json'], 
        ['application/json']
      );
    };


    /**
     * Get the published evaluation forms.
     * 
     * @param {String} formId Form ID
     */
    this.getQualityPublishedform = function(formId) { 

      // verify the required parameter 'formId' is set
      if (formId === undefined || formId === null) {
        throw "Missing the required parameter 'formId' when calling getQualityPublishedform";
      }


      return this.apiClient.callApi(
        '/api/v2/quality/publishedforms/{formId}', 
        'GET', 
        { 'formId': formId }, 
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
     * Get the published evaluation forms.
     * 
     * @param {Object} opts Optional parameters
     * @param {Number} opts.pageSize Page size (default to 25)
     * @param {Number} opts.pageNumber Page number (default to 1)
     * @param {String} opts.name Name
     */
    this.getQualityPublishedforms = function(opts) { 
      opts = opts || {};


      return this.apiClient.callApi(
        '/api/v2/quality/publishedforms', 
        'GET', 
        {  }, 
        { 'pageSize': opts['pageSize'],'pageNumber': opts['pageNumber'],'name': opts['name'] }, 
        {  }, 
        {  }, 
        null, 
        ['PureCloud Auth'], 
        ['application/json'], 
        ['application/json']
      );
    };


    /**
     * Query for evaluation aggregates
     * 
     * @param {module:purecloud-platform-client-v2/model/AggregationQuery} body query
     */
    this.postAnalyticsEvaluationsAggregatesQuery = function(body) { 

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw "Missing the required parameter 'body' when calling postAnalyticsEvaluationsAggregatesQuery";
      }


      return this.apiClient.callApi(
        '/api/v2/analytics/evaluations/aggregates/query', 
        'POST', 
        {  }, 
        {  }, 
        {  }, 
        {  }, 
        body, 
        ['PureCloud Auth'], 
        ['application/json'], 
        ['application/json']
      );
    };


    /**
     * Create a calibration
     * 
     * @param {module:purecloud-platform-client-v2/model/CalibrationCreate} body calibration
     * @param {Object} opts Optional parameters
     * @param {String} opts.expand calibratorId
     */
    this.postQualityCalibrations = function(body, opts) { 
      opts = opts || {};

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw "Missing the required parameter 'body' when calling postQualityCalibrations";
      }


      return this.apiClient.callApi(
        '/api/v2/quality/calibrations', 
        'POST', 
        {  }, 
        { 'expand': opts['expand'] }, 
        {  }, 
        {  }, 
        body, 
        ['PureCloud Auth'], 
        ['application/json'], 
        ['application/json']
      );
    };


    /**
     * Create an evaluation
     * 
     * @param {String} conversationId conversationId
     * @param {module:purecloud-platform-client-v2/model/Evaluation} body evaluation
     * @param {Object} opts Optional parameters
     * @param {String} opts.expand evaluatorId
     */
    this.postQualityConversationEvaluations = function(conversationId, body, opts) { 
      opts = opts || {};

      // verify the required parameter 'conversationId' is set
      if (conversationId === undefined || conversationId === null) {
        throw "Missing the required parameter 'conversationId' when calling postQualityConversationEvaluations";
      }

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw "Missing the required parameter 'body' when calling postQualityConversationEvaluations";
      }


      return this.apiClient.callApi(
        '/api/v2/quality/conversations/{conversationId}/evaluations', 
        'POST', 
        { 'conversationId': conversationId }, 
        { 'expand': opts['expand'] }, 
        {  }, 
        {  }, 
        body, 
        ['PureCloud Auth'], 
        ['application/json'], 
        ['application/json']
      );
    };


    /**
     * Score evaluation
     * 
     * @param {module:purecloud-platform-client-v2/model/EvaluationFormAndScoringSet} body evaluationAndScoringSet
     */
    this.postQualityEvaluationsScoring = function(body) { 

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw "Missing the required parameter 'body' when calling postQualityEvaluationsScoring";
      }


      return this.apiClient.callApi(
        '/api/v2/quality/evaluations/scoring', 
        'POST', 
        {  }, 
        {  }, 
        {  }, 
        {  }, 
        body, 
        ['PureCloud Auth'], 
        ['application/json'], 
        ['application/json']
      );
    };


    /**
     * Create an evaluation form.
     * 
     * @param {module:purecloud-platform-client-v2/model/EvaluationForm} body Evaluation form
     */
    this.postQualityForms = function(body) { 

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw "Missing the required parameter 'body' when calling postQualityForms";
      }


      return this.apiClient.callApi(
        '/api/v2/quality/forms', 
        'POST', 
        {  }, 
        {  }, 
        {  }, 
        {  }, 
        body, 
        ['PureCloud Auth'], 
        ['application/json'], 
        ['application/json']
      );
    };


    /**
     * Create a Keyword Set
     * 
     * @param {module:purecloud-platform-client-v2/model/KeywordSet} body keywordSet
     * @param {Object} opts Optional parameters
     * @param {String} opts.expand queueId
     */
    this.postQualityKeywordsets = function(body, opts) { 
      opts = opts || {};

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw "Missing the required parameter 'body' when calling postQualityKeywordsets";
      }


      return this.apiClient.callApi(
        '/api/v2/quality/keywordsets', 
        'POST', 
        {  }, 
        { 'expand': opts['expand'] }, 
        {  }, 
        {  }, 
        body, 
        ['PureCloud Auth'], 
        ['application/json'], 
        ['application/json']
      );
    };


    /**
     * Publish an evaluation form.
     * 
     * @param {module:purecloud-platform-client-v2/model/EvaluationForm} body Evaluation form
     */
    this.postQualityPublishedforms = function(body) { 

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw "Missing the required parameter 'body' when calling postQualityPublishedforms";
      }


      return this.apiClient.callApi(
        '/api/v2/quality/publishedforms', 
        'POST', 
        {  }, 
        {  }, 
        {  }, 
        {  }, 
        body, 
        ['PureCloud Auth'], 
        ['application/json'], 
        ['application/json']
      );
    };


    /**
     * Retrieve the spotability statistic
     * 
     * @param {Object} opts Optional parameters
     * @param {module:purecloud-platform-client-v2/model/KeywordSet} opts.body Keyword Set
     */
    this.postQualitySpotability = function(opts) { 
      opts = opts || {};


      return this.apiClient.callApi(
        '/api/v2/quality/spotability', 
        'POST', 
        {  }, 
        {  }, 
        {  }, 
        {  }, 
        opts['body'], 
        ['PureCloud Auth'], 
        ['application/json'], 
        ['application/json']
      );
    };


    /**
     * Update a calibration to the specified calibration via PUT.  Editable fields include: evaluators, expertEvaluator, and scoringIndex
     * 
     * @param {String} calibrationId Calibration ID
     * @param {module:purecloud-platform-client-v2/model/Calibration} body Calibration
     */
    this.putQualityCalibration = function(calibrationId, body) { 

      // verify the required parameter 'calibrationId' is set
      if (calibrationId === undefined || calibrationId === null) {
        throw "Missing the required parameter 'calibrationId' when calling putQualityCalibration";
      }

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw "Missing the required parameter 'body' when calling putQualityCalibration";
      }


      return this.apiClient.callApi(
        '/api/v2/quality/calibrations/{calibrationId}', 
        'PUT', 
        { 'calibrationId': calibrationId }, 
        {  }, 
        {  }, 
        {  }, 
        body, 
        ['PureCloud Auth'], 
        ['application/json'], 
        ['application/json']
      );
    };


    /**
     * Update an evaluation
     * 
     * @param {String} conversationId conversationId
     * @param {String} evaluationId evaluationId
     * @param {module:purecloud-platform-client-v2/model/Evaluation} body evaluation
     * @param {Object} opts Optional parameters
     * @param {String} opts.expand evaluatorId
     */
    this.putQualityConversationEvaluation = function(conversationId, evaluationId, body, opts) { 
      opts = opts || {};

      // verify the required parameter 'conversationId' is set
      if (conversationId === undefined || conversationId === null) {
        throw "Missing the required parameter 'conversationId' when calling putQualityConversationEvaluation";
      }

      // verify the required parameter 'evaluationId' is set
      if (evaluationId === undefined || evaluationId === null) {
        throw "Missing the required parameter 'evaluationId' when calling putQualityConversationEvaluation";
      }

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw "Missing the required parameter 'body' when calling putQualityConversationEvaluation";
      }


      return this.apiClient.callApi(
        '/api/v2/quality/conversations/{conversationId}/evaluations/{evaluationId}', 
        'PUT', 
        { 'conversationId': conversationId,'evaluationId': evaluationId }, 
        { 'expand': opts['expand'] }, 
        {  }, 
        {  }, 
        body, 
        ['PureCloud Auth'], 
        ['application/json'], 
        ['application/json']
      );
    };


    /**
     * Update an evaluation form.
     * 
     * @param {String} formId Form ID
     * @param {module:purecloud-platform-client-v2/model/EvaluationForm} body Evaluation form
     */
    this.putQualityForm = function(formId, body) { 

      // verify the required parameter 'formId' is set
      if (formId === undefined || formId === null) {
        throw "Missing the required parameter 'formId' when calling putQualityForm";
      }

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw "Missing the required parameter 'body' when calling putQualityForm";
      }


      return this.apiClient.callApi(
        '/api/v2/quality/forms/{formId}', 
        'PUT', 
        { 'formId': formId }, 
        {  }, 
        {  }, 
        {  }, 
        body, 
        ['PureCloud Auth'], 
        ['application/json'], 
        ['application/json']
      );
    };


    /**
     * Update a keywordSet to the specified keywordSet via PUT.
     * 
     * @param {String} keywordSetId KeywordSet ID
     * @param {module:purecloud-platform-client-v2/model/KeywordSet} body keywordSet
     */
    this.putQualityKeywordset = function(keywordSetId, body) { 

      // verify the required parameter 'keywordSetId' is set
      if (keywordSetId === undefined || keywordSetId === null) {
        throw "Missing the required parameter 'keywordSetId' when calling putQualityKeywordset";
      }

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw "Missing the required parameter 'body' when calling putQualityKeywordset";
      }


      return this.apiClient.callApi(
        '/api/v2/quality/keywordsets/{keywordSetId}', 
        'PUT', 
        { 'keywordSetId': keywordSetId }, 
        {  }, 
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
