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
    root.platformClient.ConversationsApi = factory(root.platformClient.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * Conversations service.
   * @module purecloud-platform-client-v2/api/ConversationsApi
   * @version 17.0.0
   */

  /**
   * Constructs a new ConversationsApi. 
   * @alias module:purecloud-platform-client-v2/api/ConversationsApi
   * @class
   * @param {module:purecloud-platform-client-v2/ApiClient} apiClient Optional API client implementation to use,
   * default to {@link module:purecloud-platform-client-v2/ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;



    /**
     * Delete a code used to add a communication to this participant
     * 
     * @param {String} conversationId conversation ID
     * @param {String} participantId participant ID
     * @param {String} addCommunicationCode addCommunicationCode
     */
    this.deleteConversationParticipantCode = function(conversationId, participantId, addCommunicationCode) { 

      // verify the required parameter 'conversationId' is set
      if (conversationId === undefined || conversationId === null) {
        throw "Missing the required parameter 'conversationId' when calling deleteConversationParticipantCode";
      }

      // verify the required parameter 'participantId' is set
      if (participantId === undefined || participantId === null) {
        throw "Missing the required parameter 'participantId' when calling deleteConversationParticipantCode";
      }

      // verify the required parameter 'addCommunicationCode' is set
      if (addCommunicationCode === undefined || addCommunicationCode === null) {
        throw "Missing the required parameter 'addCommunicationCode' when calling deleteConversationParticipantCode";
      }


      return this.apiClient.callApi(
        '/api/v2/conversations/{conversationId}/participants/{participantId}/codes/{addCommunicationCode}', 
        'DELETE', 
        { 'conversationId': conversationId,'participantId': participantId,'addCommunicationCode': addCommunicationCode }, 
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
     * Cancel the transfer
     * 
     * @param {String} conversationId conversationId
     * @param {String} participantId participantId
     */
    this.deleteConversationsCallParticipantConsult = function(conversationId, participantId) { 

      // verify the required parameter 'conversationId' is set
      if (conversationId === undefined || conversationId === null) {
        throw "Missing the required parameter 'conversationId' when calling deleteConversationsCallParticipantConsult";
      }

      // verify the required parameter 'participantId' is set
      if (participantId === undefined || participantId === null) {
        throw "Missing the required parameter 'participantId' when calling deleteConversationsCallParticipantConsult";
      }


      return this.apiClient.callApi(
        '/api/v2/conversations/calls/{conversationId}/participants/{participantId}/consult', 
        'DELETE', 
        { 'conversationId': conversationId,'participantId': participantId }, 
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
     * Delete attachment from draft
     * 
     * @param {String} conversationId conversationId
     * @param {String} attachmentId attachmentId
     */
    this.deleteConversationsEmailMessagesDraftAttachment = function(conversationId, attachmentId) { 

      // verify the required parameter 'conversationId' is set
      if (conversationId === undefined || conversationId === null) {
        throw "Missing the required parameter 'conversationId' when calling deleteConversationsEmailMessagesDraftAttachment";
      }

      // verify the required parameter 'attachmentId' is set
      if (attachmentId === undefined || attachmentId === null) {
        throw "Missing the required parameter 'attachmentId' when calling deleteConversationsEmailMessagesDraftAttachment";
      }


      return this.apiClient.callApi(
        '/api/v2/conversations/emails/{conversationId}/messages/draft/attachments/{attachmentId}', 
        'DELETE', 
        { 'conversationId': conversationId,'attachmentId': attachmentId }, 
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
     * Get a conversation by id
     * 
     * @param {String} conversationId conversationId
     */
    this.getAnalyticsConversationDetails = function(conversationId) { 

      // verify the required parameter 'conversationId' is set
      if (conversationId === undefined || conversationId === null) {
        throw "Missing the required parameter 'conversationId' when calling getAnalyticsConversationDetails";
      }


      return this.apiClient.callApi(
        '/api/v2/analytics/conversations/{conversationId}/details', 
        'GET', 
        { 'conversationId': conversationId }, 
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
     * Get conversation
     * 
     * @param {String} conversationId conversation ID
     */
    this.getConversation = function(conversationId) { 

      // verify the required parameter 'conversationId' is set
      if (conversationId === undefined || conversationId === null) {
        throw "Missing the required parameter 'conversationId' when calling getConversation";
      }


      return this.apiClient.callApi(
        '/api/v2/conversations/{conversationId}', 
        'GET', 
        { 'conversationId': conversationId }, 
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
     * Fetch info on a secure session
     * 
     * @param {String} conversationId conversation ID
     * @param {String} participantId participant ID
     * @param {String} secureSessionId secure IVR session ID
     */
    this.getConversationParticipantSecureivrsession = function(conversationId, participantId, secureSessionId) { 

      // verify the required parameter 'conversationId' is set
      if (conversationId === undefined || conversationId === null) {
        throw "Missing the required parameter 'conversationId' when calling getConversationParticipantSecureivrsession";
      }

      // verify the required parameter 'participantId' is set
      if (participantId === undefined || participantId === null) {
        throw "Missing the required parameter 'participantId' when calling getConversationParticipantSecureivrsession";
      }

      // verify the required parameter 'secureSessionId' is set
      if (secureSessionId === undefined || secureSessionId === null) {
        throw "Missing the required parameter 'secureSessionId' when calling getConversationParticipantSecureivrsession";
      }


      return this.apiClient.callApi(
        '/api/v2/conversations/{conversationId}/participants/{participantId}/secureivrsessions/{secureSessionId}', 
        'GET', 
        { 'conversationId': conversationId,'participantId': participantId,'secureSessionId': secureSessionId }, 
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
     * Get a list of secure sessions for this participant.
     * 
     * @param {String} conversationId conversation ID
     * @param {String} participantId participant ID
     */
    this.getConversationParticipantSecureivrsessions = function(conversationId, participantId) { 

      // verify the required parameter 'conversationId' is set
      if (conversationId === undefined || conversationId === null) {
        throw "Missing the required parameter 'conversationId' when calling getConversationParticipantSecureivrsessions";
      }

      // verify the required parameter 'participantId' is set
      if (participantId === undefined || participantId === null) {
        throw "Missing the required parameter 'participantId' when calling getConversationParticipantSecureivrsessions";
      }


      return this.apiClient.callApi(
        '/api/v2/conversations/{conversationId}/participants/{participantId}/secureivrsessions', 
        'GET', 
        { 'conversationId': conversationId,'participantId': participantId }, 
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
     * Get the wrap-up for this conversation participant. 
     * 
     * @param {String} conversationId conversation ID
     * @param {String} participantId participant ID
     * @param {Object} opts Optional parameters
     * @param {Boolean} opts.provisional Indicates if the wrap-up code is provisional. (default to false)
     */
    this.getConversationParticipantWrapup = function(conversationId, participantId, opts) { 
      opts = opts || {};

      // verify the required parameter 'conversationId' is set
      if (conversationId === undefined || conversationId === null) {
        throw "Missing the required parameter 'conversationId' when calling getConversationParticipantWrapup";
      }

      // verify the required parameter 'participantId' is set
      if (participantId === undefined || participantId === null) {
        throw "Missing the required parameter 'participantId' when calling getConversationParticipantWrapup";
      }


      return this.apiClient.callApi(
        '/api/v2/conversations/{conversationId}/participants/{participantId}/wrapup', 
        'GET', 
        { 'conversationId': conversationId,'participantId': participantId }, 
        { 'provisional': opts['provisional'] }, 
        {  }, 
        {  }, 
        null, 
        ['PureCloud Auth'], 
        ['application/json'], 
        ['application/json']
      );
    };


    /**
     * Get list of wrapup codes for this conversation participant
     * 
     * @param {String} conversationId conversation ID
     * @param {String} participantId participant ID
     */
    this.getConversationParticipantWrapupcodes = function(conversationId, participantId) { 

      // verify the required parameter 'conversationId' is set
      if (conversationId === undefined || conversationId === null) {
        throw "Missing the required parameter 'conversationId' when calling getConversationParticipantWrapupcodes";
      }

      // verify the required parameter 'participantId' is set
      if (participantId === undefined || participantId === null) {
        throw "Missing the required parameter 'participantId' when calling getConversationParticipantWrapupcodes";
      }


      return this.apiClient.callApi(
        '/api/v2/conversations/{conversationId}/participants/{participantId}/wrapupcodes', 
        'GET', 
        { 'conversationId': conversationId,'participantId': participantId }, 
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
     * Get conversations
     * 
     * @param {Object} opts Optional parameters
     * @param {String} opts.communicationType Call or Chat communication filtering
     */
    this.getConversations = function(opts) { 
      opts = opts || {};


      return this.apiClient.callApi(
        '/api/v2/conversations', 
        'GET', 
        {  }, 
        { 'communicationType': opts['communicationType'] }, 
        {  }, 
        {  }, 
        null, 
        ['PureCloud Auth'], 
        ['application/json'], 
        ['application/json']
      );
    };


    /**
     * Get call conversation
     * 
     * @param {String} conversationId conversationId
     */
    this.getConversationsCall = function(conversationId) { 

      // verify the required parameter 'conversationId' is set
      if (conversationId === undefined || conversationId === null) {
        throw "Missing the required parameter 'conversationId' when calling getConversationsCall";
      }


      return this.apiClient.callApi(
        '/api/v2/conversations/calls/{conversationId}', 
        'GET', 
        { 'conversationId': conversationId }, 
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
     * Get the wrap-up for this conversation participant. 
     * 
     * @param {String} conversationId conversationId
     * @param {String} participantId participantId
     * @param {Object} opts Optional parameters
     * @param {Boolean} opts.provisional Indicates if the wrap-up code is provisional. (default to false)
     */
    this.getConversationsCallParticipantWrapup = function(conversationId, participantId, opts) { 
      opts = opts || {};

      // verify the required parameter 'conversationId' is set
      if (conversationId === undefined || conversationId === null) {
        throw "Missing the required parameter 'conversationId' when calling getConversationsCallParticipantWrapup";
      }

      // verify the required parameter 'participantId' is set
      if (participantId === undefined || participantId === null) {
        throw "Missing the required parameter 'participantId' when calling getConversationsCallParticipantWrapup";
      }


      return this.apiClient.callApi(
        '/api/v2/conversations/calls/{conversationId}/participants/{participantId}/wrapup', 
        'GET', 
        { 'conversationId': conversationId,'participantId': participantId }, 
        { 'provisional': opts['provisional'] }, 
        {  }, 
        {  }, 
        null, 
        ['PureCloud Auth'], 
        ['application/json'], 
        ['application/json']
      );
    };


    /**
     * Get list of wrapup codes for this conversation participant
     * 
     * @param {String} conversationId conversationId
     * @param {String} participantId participantId
     */
    this.getConversationsCallParticipantWrapupcodes = function(conversationId, participantId) { 

      // verify the required parameter 'conversationId' is set
      if (conversationId === undefined || conversationId === null) {
        throw "Missing the required parameter 'conversationId' when calling getConversationsCallParticipantWrapupcodes";
      }

      // verify the required parameter 'participantId' is set
      if (participantId === undefined || participantId === null) {
        throw "Missing the required parameter 'participantId' when calling getConversationsCallParticipantWrapupcodes";
      }


      return this.apiClient.callApi(
        '/api/v2/conversations/calls/{conversationId}/participants/{participantId}/wrapupcodes', 
        'GET', 
        { 'conversationId': conversationId,'participantId': participantId }, 
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
     * Get callback conversation
     * 
     * @param {String} conversationId conversationId
     */
    this.getConversationsCallback = function(conversationId) { 

      // verify the required parameter 'conversationId' is set
      if (conversationId === undefined || conversationId === null) {
        throw "Missing the required parameter 'conversationId' when calling getConversationsCallback";
      }


      return this.apiClient.callApi(
        '/api/v2/conversations/callbacks/{conversationId}', 
        'GET', 
        { 'conversationId': conversationId }, 
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
     * Get the wrap-up for this conversation participant. 
     * 
     * @param {String} conversationId conversationId
     * @param {String} participantId participantId
     * @param {Object} opts Optional parameters
     * @param {Boolean} opts.provisional Indicates if the wrap-up code is provisional. (default to false)
     */
    this.getConversationsCallbackParticipantWrapup = function(conversationId, participantId, opts) { 
      opts = opts || {};

      // verify the required parameter 'conversationId' is set
      if (conversationId === undefined || conversationId === null) {
        throw "Missing the required parameter 'conversationId' when calling getConversationsCallbackParticipantWrapup";
      }

      // verify the required parameter 'participantId' is set
      if (participantId === undefined || participantId === null) {
        throw "Missing the required parameter 'participantId' when calling getConversationsCallbackParticipantWrapup";
      }


      return this.apiClient.callApi(
        '/api/v2/conversations/callbacks/{conversationId}/participants/{participantId}/wrapup', 
        'GET', 
        { 'conversationId': conversationId,'participantId': participantId }, 
        { 'provisional': opts['provisional'] }, 
        {  }, 
        {  }, 
        null, 
        ['PureCloud Auth'], 
        ['application/json'], 
        ['application/json']
      );
    };


    /**
     * Get list of wrapup codes for this conversation participant
     * 
     * @param {String} conversationId conversationId
     * @param {String} participantId participantId
     */
    this.getConversationsCallbackParticipantWrapupcodes = function(conversationId, participantId) { 

      // verify the required parameter 'conversationId' is set
      if (conversationId === undefined || conversationId === null) {
        throw "Missing the required parameter 'conversationId' when calling getConversationsCallbackParticipantWrapupcodes";
      }

      // verify the required parameter 'participantId' is set
      if (participantId === undefined || participantId === null) {
        throw "Missing the required parameter 'participantId' when calling getConversationsCallbackParticipantWrapupcodes";
      }


      return this.apiClient.callApi(
        '/api/v2/conversations/callbacks/{conversationId}/participants/{participantId}/wrapupcodes', 
        'GET', 
        { 'conversationId': conversationId,'participantId': participantId }, 
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
     * Get callback conversations
     * 
     */
    this.getConversationsCallbacks = function() { 


      return this.apiClient.callApi(
        '/api/v2/conversations/callbacks', 
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
     * Get recent conversations
     * 
     */
    this.getConversationsCalls = function() { 


      return this.apiClient.callApi(
        '/api/v2/conversations/calls', 
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
     * Get call history
     * 
     * @param {Object} opts Optional parameters
     * @param {Number} opts.pageSize Page size, maximum 50 (default to 25)
     * @param {Number} opts.pageNumber Page number (default to 1)
     * @param {String} opts.interval Interval string; format is ISO-8601. Separate start and end times with forward slash &#39;/&#39;
     * @param {Array.<String>} opts.expand Which fields, if any, to expand.
     */
    this.getConversationsCallsHistory = function(opts) { 
      opts = opts || {};


      return this.apiClient.callApi(
        '/api/v2/conversations/calls/history', 
        'GET', 
        {  }, 
        { 'pageSize': opts['pageSize'],'pageNumber': opts['pageNumber'],'interval': opts['interval'],'expand': this.apiClient.buildCollectionParam(opts['expand'], 'multi') }, 
        {  }, 
        {  }, 
        null, 
        ['PureCloud Auth'], 
        ['application/json'], 
        ['application/json']
      );
    };


    /**
     * Get the maximum number of participants that this user can have on a conference
     * 
     */
    this.getConversationsCallsMaximumconferenceparties = function() { 


      return this.apiClient.callApi(
        '/api/v2/conversations/calls/maximumconferenceparties', 
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
     * Get chat conversation
     * 
     * @param {String} conversationId conversationId
     */
    this.getConversationsChat = function(conversationId) { 

      // verify the required parameter 'conversationId' is set
      if (conversationId === undefined || conversationId === null) {
        throw "Missing the required parameter 'conversationId' when calling getConversationsChat";
      }


      return this.apiClient.callApi(
        '/api/v2/conversations/chats/{conversationId}', 
        'GET', 
        { 'conversationId': conversationId }, 
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
     * Get the wrap-up for this conversation participant. 
     * 
     * @param {String} conversationId conversationId
     * @param {String} participantId participantId
     * @param {Object} opts Optional parameters
     * @param {Boolean} opts.provisional Indicates if the wrap-up code is provisional. (default to false)
     */
    this.getConversationsChatParticipantWrapup = function(conversationId, participantId, opts) { 
      opts = opts || {};

      // verify the required parameter 'conversationId' is set
      if (conversationId === undefined || conversationId === null) {
        throw "Missing the required parameter 'conversationId' when calling getConversationsChatParticipantWrapup";
      }

      // verify the required parameter 'participantId' is set
      if (participantId === undefined || participantId === null) {
        throw "Missing the required parameter 'participantId' when calling getConversationsChatParticipantWrapup";
      }


      return this.apiClient.callApi(
        '/api/v2/conversations/chats/{conversationId}/participants/{participantId}/wrapup', 
        'GET', 
        { 'conversationId': conversationId,'participantId': participantId }, 
        { 'provisional': opts['provisional'] }, 
        {  }, 
        {  }, 
        null, 
        ['PureCloud Auth'], 
        ['application/json'], 
        ['application/json']
      );
    };


    /**
     * Get list of wrapup codes for this conversation participant
     * 
     * @param {String} conversationId conversationId
     * @param {String} participantId participantId
     */
    this.getConversationsChatParticipantWrapupcodes = function(conversationId, participantId) { 

      // verify the required parameter 'conversationId' is set
      if (conversationId === undefined || conversationId === null) {
        throw "Missing the required parameter 'conversationId' when calling getConversationsChatParticipantWrapupcodes";
      }

      // verify the required parameter 'participantId' is set
      if (participantId === undefined || participantId === null) {
        throw "Missing the required parameter 'participantId' when calling getConversationsChatParticipantWrapupcodes";
      }


      return this.apiClient.callApi(
        '/api/v2/conversations/chats/{conversationId}/participants/{participantId}/wrapupcodes', 
        'GET', 
        { 'conversationId': conversationId,'participantId': participantId }, 
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
     * Get recent chat conversations
     * 
     */
    this.getConversationsChats = function() { 


      return this.apiClient.callApi(
        '/api/v2/conversations/chats', 
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
     * Get cobrowse conversation
     * 
     * @param {String} conversationId conversationId
     */
    this.getConversationsCobrowsesession = function(conversationId) { 

      // verify the required parameter 'conversationId' is set
      if (conversationId === undefined || conversationId === null) {
        throw "Missing the required parameter 'conversationId' when calling getConversationsCobrowsesession";
      }


      return this.apiClient.callApi(
        '/api/v2/conversations/cobrowsesessions/{conversationId}', 
        'GET', 
        { 'conversationId': conversationId }, 
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
     * Get the wrap-up for this conversation participant. 
     * 
     * @param {String} conversationId conversationId
     * @param {String} participantId participantId
     * @param {Object} opts Optional parameters
     * @param {Boolean} opts.provisional Indicates if the wrap-up code is provisional. (default to false)
     */
    this.getConversationsCobrowsesessionParticipantWrapup = function(conversationId, participantId, opts) { 
      opts = opts || {};

      // verify the required parameter 'conversationId' is set
      if (conversationId === undefined || conversationId === null) {
        throw "Missing the required parameter 'conversationId' when calling getConversationsCobrowsesessionParticipantWrapup";
      }

      // verify the required parameter 'participantId' is set
      if (participantId === undefined || participantId === null) {
        throw "Missing the required parameter 'participantId' when calling getConversationsCobrowsesessionParticipantWrapup";
      }


      return this.apiClient.callApi(
        '/api/v2/conversations/cobrowsesessions/{conversationId}/participants/{participantId}/wrapup', 
        'GET', 
        { 'conversationId': conversationId,'participantId': participantId }, 
        { 'provisional': opts['provisional'] }, 
        {  }, 
        {  }, 
        null, 
        ['PureCloud Auth'], 
        ['application/json'], 
        ['application/json']
      );
    };


    /**
     * Get list of wrapup codes for this conversation participant
     * 
     * @param {String} conversationId conversationId
     * @param {String} participantId participantId
     */
    this.getConversationsCobrowsesessionParticipantWrapupcodes = function(conversationId, participantId) { 

      // verify the required parameter 'conversationId' is set
      if (conversationId === undefined || conversationId === null) {
        throw "Missing the required parameter 'conversationId' when calling getConversationsCobrowsesessionParticipantWrapupcodes";
      }

      // verify the required parameter 'participantId' is set
      if (participantId === undefined || participantId === null) {
        throw "Missing the required parameter 'participantId' when calling getConversationsCobrowsesessionParticipantWrapupcodes";
      }


      return this.apiClient.callApi(
        '/api/v2/conversations/cobrowsesessions/{conversationId}/participants/{participantId}/wrapupcodes', 
        'GET', 
        { 'conversationId': conversationId,'participantId': participantId }, 
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
     * Get recent cobrowse conversations
     * 
     */
    this.getConversationsCobrowsesessions = function() { 


      return this.apiClient.callApi(
        '/api/v2/conversations/cobrowsesessions', 
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
     * Get email conversation
     * 
     * @param {String} conversationId conversationId
     */
    this.getConversationsEmail = function(conversationId) { 

      // verify the required parameter 'conversationId' is set
      if (conversationId === undefined || conversationId === null) {
        throw "Missing the required parameter 'conversationId' when calling getConversationsEmail";
      }


      return this.apiClient.callApi(
        '/api/v2/conversations/emails/{conversationId}', 
        'GET', 
        { 'conversationId': conversationId }, 
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
     * Get conversation message
     * 
     * @param {String} conversationId conversationId
     * @param {String} messageId messageId
     */
    this.getConversationsEmailMessage = function(conversationId, messageId) { 

      // verify the required parameter 'conversationId' is set
      if (conversationId === undefined || conversationId === null) {
        throw "Missing the required parameter 'conversationId' when calling getConversationsEmailMessage";
      }

      // verify the required parameter 'messageId' is set
      if (messageId === undefined || messageId === null) {
        throw "Missing the required parameter 'messageId' when calling getConversationsEmailMessage";
      }


      return this.apiClient.callApi(
        '/api/v2/conversations/emails/{conversationId}/messages/{messageId}', 
        'GET', 
        { 'conversationId': conversationId,'messageId': messageId }, 
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
     * Get conversation messages
     * 
     * @param {String} conversationId conversationId
     */
    this.getConversationsEmailMessages = function(conversationId) { 

      // verify the required parameter 'conversationId' is set
      if (conversationId === undefined || conversationId === null) {
        throw "Missing the required parameter 'conversationId' when calling getConversationsEmailMessages";
      }


      return this.apiClient.callApi(
        '/api/v2/conversations/emails/{conversationId}/messages', 
        'GET', 
        { 'conversationId': conversationId }, 
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
     * Get conversation draft reply
     * 
     * @param {String} conversationId conversationId
     */
    this.getConversationsEmailMessagesDraft = function(conversationId) { 

      // verify the required parameter 'conversationId' is set
      if (conversationId === undefined || conversationId === null) {
        throw "Missing the required parameter 'conversationId' when calling getConversationsEmailMessagesDraft";
      }


      return this.apiClient.callApi(
        '/api/v2/conversations/emails/{conversationId}/messages/draft', 
        'GET', 
        { 'conversationId': conversationId }, 
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
     * Get the wrap-up for this conversation participant. 
     * 
     * @param {String} conversationId conversationId
     * @param {String} participantId participantId
     * @param {Object} opts Optional parameters
     * @param {Boolean} opts.provisional Indicates if the wrap-up code is provisional. (default to false)
     */
    this.getConversationsEmailParticipantWrapup = function(conversationId, participantId, opts) { 
      opts = opts || {};

      // verify the required parameter 'conversationId' is set
      if (conversationId === undefined || conversationId === null) {
        throw "Missing the required parameter 'conversationId' when calling getConversationsEmailParticipantWrapup";
      }

      // verify the required parameter 'participantId' is set
      if (participantId === undefined || participantId === null) {
        throw "Missing the required parameter 'participantId' when calling getConversationsEmailParticipantWrapup";
      }


      return this.apiClient.callApi(
        '/api/v2/conversations/emails/{conversationId}/participants/{participantId}/wrapup', 
        'GET', 
        { 'conversationId': conversationId,'participantId': participantId }, 
        { 'provisional': opts['provisional'] }, 
        {  }, 
        {  }, 
        null, 
        ['PureCloud Auth'], 
        ['application/json'], 
        ['application/json']
      );
    };


    /**
     * Get list of wrapup codes for this conversation participant
     * 
     * @param {String} conversationId conversationId
     * @param {String} participantId participantId
     */
    this.getConversationsEmailParticipantWrapupcodes = function(conversationId, participantId) { 

      // verify the required parameter 'conversationId' is set
      if (conversationId === undefined || conversationId === null) {
        throw "Missing the required parameter 'conversationId' when calling getConversationsEmailParticipantWrapupcodes";
      }

      // verify the required parameter 'participantId' is set
      if (participantId === undefined || participantId === null) {
        throw "Missing the required parameter 'participantId' when calling getConversationsEmailParticipantWrapupcodes";
      }


      return this.apiClient.callApi(
        '/api/v2/conversations/emails/{conversationId}/participants/{participantId}/wrapupcodes', 
        'GET', 
        { 'conversationId': conversationId,'participantId': participantId }, 
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
     * Get recent email conversations
     * 
     */
    this.getConversationsEmails = function() { 


      return this.apiClient.callApi(
        '/api/v2/conversations/emails', 
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
     * Update a participant.
     * Update conversation participant.
     * @param {String} conversationId conversation ID
     * @param {String} participantId participant ID
     * @param {Object} body Update request
     */
    this.patchConversationParticipant = function(conversationId, participantId, body) { 

      // verify the required parameter 'conversationId' is set
      if (conversationId === undefined || conversationId === null) {
        throw "Missing the required parameter 'conversationId' when calling patchConversationParticipant";
      }

      // verify the required parameter 'participantId' is set
      if (participantId === undefined || participantId === null) {
        throw "Missing the required parameter 'participantId' when calling patchConversationParticipant";
      }

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw "Missing the required parameter 'body' when calling patchConversationParticipant";
      }


      return this.apiClient.callApi(
        '/api/v2/conversations/{conversationId}/participants/{participantId}', 
        'PATCH', 
        { 'conversationId': conversationId,'participantId': participantId }, 
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
     * Update the attributes on a conversation participant.
     * 
     * @param {String} conversationId conversation ID
     * @param {String} participantId participant ID
     * @param {Object} body Participant attributes
     */
    this.patchConversationParticipantAttributes = function(conversationId, participantId, body) { 

      // verify the required parameter 'conversationId' is set
      if (conversationId === undefined || conversationId === null) {
        throw "Missing the required parameter 'conversationId' when calling patchConversationParticipantAttributes";
      }

      // verify the required parameter 'participantId' is set
      if (participantId === undefined || participantId === null) {
        throw "Missing the required parameter 'participantId' when calling patchConversationParticipantAttributes";
      }

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw "Missing the required parameter 'body' when calling patchConversationParticipantAttributes";
      }


      return this.apiClient.callApi(
        '/api/v2/conversations/{conversationId}/participants/{participantId}/attributes', 
        'PATCH', 
        { 'conversationId': conversationId,'participantId': participantId }, 
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
     * Update a conversation by setting it&#39;s recording state, merging in other conversations to create a conference, or disconnecting all of the participants
     * 
     * @param {String} conversationId conversationId
     * @param {Object} body Conversation
     */
    this.patchConversationsCall = function(conversationId, body) { 

      // verify the required parameter 'conversationId' is set
      if (conversationId === undefined || conversationId === null) {
        throw "Missing the required parameter 'conversationId' when calling patchConversationsCall";
      }

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw "Missing the required parameter 'body' when calling patchConversationsCall";
      }


      return this.apiClient.callApi(
        '/api/v2/conversations/calls/{conversationId}', 
        'PATCH', 
        { 'conversationId': conversationId }, 
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
     * Update conversation participant
     * 
     * @param {String} conversationId conversationId
     * @param {String} participantId participantId
     * @param {Object} body Participant request
     */
    this.patchConversationsCallParticipant = function(conversationId, participantId, body) { 

      // verify the required parameter 'conversationId' is set
      if (conversationId === undefined || conversationId === null) {
        throw "Missing the required parameter 'conversationId' when calling patchConversationsCallParticipant";
      }

      // verify the required parameter 'participantId' is set
      if (participantId === undefined || participantId === null) {
        throw "Missing the required parameter 'participantId' when calling patchConversationsCallParticipant";
      }

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw "Missing the required parameter 'body' when calling patchConversationsCallParticipant";
      }


      return this.apiClient.callApi(
        '/api/v2/conversations/calls/{conversationId}/participants/{participantId}', 
        'PATCH', 
        { 'conversationId': conversationId,'participantId': participantId }, 
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
     * Update the attributes on a conversation participant.
     * 
     * @param {String} conversationId conversationId
     * @param {String} participantId participantId
     * @param {Object} body Participant attributes
     */
    this.patchConversationsCallParticipantAttributes = function(conversationId, participantId, body) { 

      // verify the required parameter 'conversationId' is set
      if (conversationId === undefined || conversationId === null) {
        throw "Missing the required parameter 'conversationId' when calling patchConversationsCallParticipantAttributes";
      }

      // verify the required parameter 'participantId' is set
      if (participantId === undefined || participantId === null) {
        throw "Missing the required parameter 'participantId' when calling patchConversationsCallParticipantAttributes";
      }

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw "Missing the required parameter 'body' when calling patchConversationsCallParticipantAttributes";
      }


      return this.apiClient.callApi(
        '/api/v2/conversations/calls/{conversationId}/participants/{participantId}/attributes', 
        'PATCH', 
        { 'conversationId': conversationId,'participantId': participantId }, 
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
     * Update conversation participant&#39;s communication by disconnecting it.
     * 
     * @param {String} conversationId conversationId
     * @param {String} participantId participantId
     * @param {String} communicationId communicationId
     * @param {Object} body Participant
     */
    this.patchConversationsCallParticipantCommunication = function(conversationId, participantId, communicationId, body) { 

      // verify the required parameter 'conversationId' is set
      if (conversationId === undefined || conversationId === null) {
        throw "Missing the required parameter 'conversationId' when calling patchConversationsCallParticipantCommunication";
      }

      // verify the required parameter 'participantId' is set
      if (participantId === undefined || participantId === null) {
        throw "Missing the required parameter 'participantId' when calling patchConversationsCallParticipantCommunication";
      }

      // verify the required parameter 'communicationId' is set
      if (communicationId === undefined || communicationId === null) {
        throw "Missing the required parameter 'communicationId' when calling patchConversationsCallParticipantCommunication";
      }

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw "Missing the required parameter 'body' when calling patchConversationsCallParticipantCommunication";
      }


      return this.apiClient.callApi(
        '/api/v2/conversations/calls/{conversationId}/participants/{participantId}/communications/{communicationId}', 
        'PATCH', 
        { 'conversationId': conversationId,'participantId': participantId,'communicationId': communicationId }, 
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
     * Change who can speak
     * 
     * @param {String} conversationId conversationId
     * @param {String} participantId participantId
     * @param {Object} body new speak to
     */
    this.patchConversationsCallParticipantConsult = function(conversationId, participantId, body) { 

      // verify the required parameter 'conversationId' is set
      if (conversationId === undefined || conversationId === null) {
        throw "Missing the required parameter 'conversationId' when calling patchConversationsCallParticipantConsult";
      }

      // verify the required parameter 'participantId' is set
      if (participantId === undefined || participantId === null) {
        throw "Missing the required parameter 'participantId' when calling patchConversationsCallParticipantConsult";
      }

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw "Missing the required parameter 'body' when calling patchConversationsCallParticipantConsult";
      }


      return this.apiClient.callApi(
        '/api/v2/conversations/calls/{conversationId}/participants/{participantId}/consult', 
        'PATCH', 
        { 'conversationId': conversationId,'participantId': participantId }, 
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
     * Update a conversation by disconnecting all of the participants
     * 
     * @param {String} conversationId conversationId
     * @param {Object} body Conversation
     */
    this.patchConversationsCallback = function(conversationId, body) { 

      // verify the required parameter 'conversationId' is set
      if (conversationId === undefined || conversationId === null) {
        throw "Missing the required parameter 'conversationId' when calling patchConversationsCallback";
      }

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw "Missing the required parameter 'body' when calling patchConversationsCallback";
      }


      return this.apiClient.callApi(
        '/api/v2/conversations/callbacks/{conversationId}', 
        'PATCH', 
        { 'conversationId': conversationId }, 
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
     * Update conversation participant
     * 
     * @param {String} conversationId conversationId
     * @param {String} participantId participantId
     * @param {Object} body Participant
     */
    this.patchConversationsCallbackParticipant = function(conversationId, participantId, body) { 

      // verify the required parameter 'conversationId' is set
      if (conversationId === undefined || conversationId === null) {
        throw "Missing the required parameter 'conversationId' when calling patchConversationsCallbackParticipant";
      }

      // verify the required parameter 'participantId' is set
      if (participantId === undefined || participantId === null) {
        throw "Missing the required parameter 'participantId' when calling patchConversationsCallbackParticipant";
      }

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw "Missing the required parameter 'body' when calling patchConversationsCallbackParticipant";
      }


      return this.apiClient.callApi(
        '/api/v2/conversations/callbacks/{conversationId}/participants/{participantId}', 
        'PATCH', 
        { 'conversationId': conversationId,'participantId': participantId }, 
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
     * Update the attributes on a conversation participant.
     * 
     * @param {String} conversationId conversationId
     * @param {String} participantId participantId
     * @param {Object} body Attributes
     */
    this.patchConversationsCallbackParticipantAttributes = function(conversationId, participantId, body) { 

      // verify the required parameter 'conversationId' is set
      if (conversationId === undefined || conversationId === null) {
        throw "Missing the required parameter 'conversationId' when calling patchConversationsCallbackParticipantAttributes";
      }

      // verify the required parameter 'participantId' is set
      if (participantId === undefined || participantId === null) {
        throw "Missing the required parameter 'participantId' when calling patchConversationsCallbackParticipantAttributes";
      }

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw "Missing the required parameter 'body' when calling patchConversationsCallbackParticipantAttributes";
      }


      return this.apiClient.callApi(
        '/api/v2/conversations/callbacks/{conversationId}/participants/{participantId}/attributes', 
        'PATCH', 
        { 'conversationId': conversationId,'participantId': participantId }, 
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
     * Update conversation participant&#39;s communication by disconnecting it.
     * 
     * @param {String} conversationId conversationId
     * @param {String} participantId participantId
     * @param {String} communicationId communicationId
     * @param {Object} body Participant
     */
    this.patchConversationsCallbackParticipantCommunication = function(conversationId, participantId, communicationId, body) { 

      // verify the required parameter 'conversationId' is set
      if (conversationId === undefined || conversationId === null) {
        throw "Missing the required parameter 'conversationId' when calling patchConversationsCallbackParticipantCommunication";
      }

      // verify the required parameter 'participantId' is set
      if (participantId === undefined || participantId === null) {
        throw "Missing the required parameter 'participantId' when calling patchConversationsCallbackParticipantCommunication";
      }

      // verify the required parameter 'communicationId' is set
      if (communicationId === undefined || communicationId === null) {
        throw "Missing the required parameter 'communicationId' when calling patchConversationsCallbackParticipantCommunication";
      }

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw "Missing the required parameter 'body' when calling patchConversationsCallbackParticipantCommunication";
      }


      return this.apiClient.callApi(
        '/api/v2/conversations/callbacks/{conversationId}/participants/{participantId}/communications/{communicationId}', 
        'PATCH', 
        { 'conversationId': conversationId,'participantId': participantId,'communicationId': communicationId }, 
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
     * Update a conversation by disconnecting all of the participants
     * 
     * @param {String} conversationId conversationId
     * @param {Object} body Conversation
     */
    this.patchConversationsChat = function(conversationId, body) { 

      // verify the required parameter 'conversationId' is set
      if (conversationId === undefined || conversationId === null) {
        throw "Missing the required parameter 'conversationId' when calling patchConversationsChat";
      }

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw "Missing the required parameter 'body' when calling patchConversationsChat";
      }


      return this.apiClient.callApi(
        '/api/v2/conversations/chats/{conversationId}', 
        'PATCH', 
        { 'conversationId': conversationId }, 
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
     * Update conversation participant
     * 
     * @param {String} conversationId conversationId
     * @param {String} participantId participantId
     * @param {Object} body Update request
     */
    this.patchConversationsChatParticipant = function(conversationId, participantId, body) { 

      // verify the required parameter 'conversationId' is set
      if (conversationId === undefined || conversationId === null) {
        throw "Missing the required parameter 'conversationId' when calling patchConversationsChatParticipant";
      }

      // verify the required parameter 'participantId' is set
      if (participantId === undefined || participantId === null) {
        throw "Missing the required parameter 'participantId' when calling patchConversationsChatParticipant";
      }

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw "Missing the required parameter 'body' when calling patchConversationsChatParticipant";
      }


      return this.apiClient.callApi(
        '/api/v2/conversations/chats/{conversationId}/participants/{participantId}', 
        'PATCH', 
        { 'conversationId': conversationId,'participantId': participantId }, 
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
     * Update the attributes on a conversation participant.
     * 
     * @param {String} conversationId conversationId
     * @param {String} participantId participantId
     * @param {Object} body Participant attributes
     */
    this.patchConversationsChatParticipantAttributes = function(conversationId, participantId, body) { 

      // verify the required parameter 'conversationId' is set
      if (conversationId === undefined || conversationId === null) {
        throw "Missing the required parameter 'conversationId' when calling patchConversationsChatParticipantAttributes";
      }

      // verify the required parameter 'participantId' is set
      if (participantId === undefined || participantId === null) {
        throw "Missing the required parameter 'participantId' when calling patchConversationsChatParticipantAttributes";
      }

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw "Missing the required parameter 'body' when calling patchConversationsChatParticipantAttributes";
      }


      return this.apiClient.callApi(
        '/api/v2/conversations/chats/{conversationId}/participants/{participantId}/attributes', 
        'PATCH', 
        { 'conversationId': conversationId,'participantId': participantId }, 
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
     * Update conversation participant&#39;s communication by disconnecting it.
     * 
     * @param {String} conversationId conversationId
     * @param {String} participantId participantId
     * @param {String} communicationId communicationId
     * @param {Object} body Participant
     */
    this.patchConversationsChatParticipantCommunication = function(conversationId, participantId, communicationId, body) { 

      // verify the required parameter 'conversationId' is set
      if (conversationId === undefined || conversationId === null) {
        throw "Missing the required parameter 'conversationId' when calling patchConversationsChatParticipantCommunication";
      }

      // verify the required parameter 'participantId' is set
      if (participantId === undefined || participantId === null) {
        throw "Missing the required parameter 'participantId' when calling patchConversationsChatParticipantCommunication";
      }

      // verify the required parameter 'communicationId' is set
      if (communicationId === undefined || communicationId === null) {
        throw "Missing the required parameter 'communicationId' when calling patchConversationsChatParticipantCommunication";
      }

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw "Missing the required parameter 'body' when calling patchConversationsChatParticipantCommunication";
      }


      return this.apiClient.callApi(
        '/api/v2/conversations/chats/{conversationId}/participants/{participantId}/communications/{communicationId}', 
        'PATCH', 
        { 'conversationId': conversationId,'participantId': participantId,'communicationId': communicationId }, 
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
     * Update a conversation by disconnecting all of the participants
     * 
     * @param {String} conversationId conversationId
     * @param {Object} body Conversation
     */
    this.patchConversationsCobrowsesession = function(conversationId, body) { 

      // verify the required parameter 'conversationId' is set
      if (conversationId === undefined || conversationId === null) {
        throw "Missing the required parameter 'conversationId' when calling patchConversationsCobrowsesession";
      }

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw "Missing the required parameter 'body' when calling patchConversationsCobrowsesession";
      }


      return this.apiClient.callApi(
        '/api/v2/conversations/cobrowsesessions/{conversationId}', 
        'PATCH', 
        { 'conversationId': conversationId }, 
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
     * Update conversation participant
     * 
     * @param {String} conversationId conversationId
     * @param {String} participantId participantId
     * @param {Object} opts Optional parameters
     * @param {Object} opts.body 
     */
    this.patchConversationsCobrowsesessionParticipant = function(conversationId, participantId, opts) { 
      opts = opts || {};

      // verify the required parameter 'conversationId' is set
      if (conversationId === undefined || conversationId === null) {
        throw "Missing the required parameter 'conversationId' when calling patchConversationsCobrowsesessionParticipant";
      }

      // verify the required parameter 'participantId' is set
      if (participantId === undefined || participantId === null) {
        throw "Missing the required parameter 'participantId' when calling patchConversationsCobrowsesessionParticipant";
      }


      return this.apiClient.callApi(
        '/api/v2/conversations/cobrowsesessions/{conversationId}/participants/{participantId}', 
        'PATCH', 
        { 'conversationId': conversationId,'participantId': participantId }, 
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
     * Update the attributes on a conversation participant.
     * 
     * @param {String} conversationId conversationId
     * @param {String} participantId participantId
     * @param {Object} opts Optional parameters
     * @param {Object} opts.body 
     */
    this.patchConversationsCobrowsesessionParticipantAttributes = function(conversationId, participantId, opts) { 
      opts = opts || {};

      // verify the required parameter 'conversationId' is set
      if (conversationId === undefined || conversationId === null) {
        throw "Missing the required parameter 'conversationId' when calling patchConversationsCobrowsesessionParticipantAttributes";
      }

      // verify the required parameter 'participantId' is set
      if (participantId === undefined || participantId === null) {
        throw "Missing the required parameter 'participantId' when calling patchConversationsCobrowsesessionParticipantAttributes";
      }


      return this.apiClient.callApi(
        '/api/v2/conversations/cobrowsesessions/{conversationId}/participants/{participantId}/attributes', 
        'PATCH', 
        { 'conversationId': conversationId,'participantId': participantId }, 
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
     * Update conversation participant&#39;s communication by disconnecting it.
     * 
     * @param {String} conversationId conversationId
     * @param {String} participantId participantId
     * @param {String} communicationId communicationId
     * @param {Object} body Participant
     */
    this.patchConversationsCobrowsesessionParticipantCommunication = function(conversationId, participantId, communicationId, body) { 

      // verify the required parameter 'conversationId' is set
      if (conversationId === undefined || conversationId === null) {
        throw "Missing the required parameter 'conversationId' when calling patchConversationsCobrowsesessionParticipantCommunication";
      }

      // verify the required parameter 'participantId' is set
      if (participantId === undefined || participantId === null) {
        throw "Missing the required parameter 'participantId' when calling patchConversationsCobrowsesessionParticipantCommunication";
      }

      // verify the required parameter 'communicationId' is set
      if (communicationId === undefined || communicationId === null) {
        throw "Missing the required parameter 'communicationId' when calling patchConversationsCobrowsesessionParticipantCommunication";
      }

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw "Missing the required parameter 'body' when calling patchConversationsCobrowsesessionParticipantCommunication";
      }


      return this.apiClient.callApi(
        '/api/v2/conversations/cobrowsesessions/{conversationId}/participants/{participantId}/communications/{communicationId}', 
        'PATCH', 
        { 'conversationId': conversationId,'participantId': participantId,'communicationId': communicationId }, 
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
     * Update a conversation by disconnecting all of the participants
     * 
     * @param {String} conversationId conversationId
     * @param {Object} body Conversation
     */
    this.patchConversationsEmail = function(conversationId, body) { 

      // verify the required parameter 'conversationId' is set
      if (conversationId === undefined || conversationId === null) {
        throw "Missing the required parameter 'conversationId' when calling patchConversationsEmail";
      }

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw "Missing the required parameter 'body' when calling patchConversationsEmail";
      }


      return this.apiClient.callApi(
        '/api/v2/conversations/emails/{conversationId}', 
        'PATCH', 
        { 'conversationId': conversationId }, 
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
     * Update conversation participant
     * 
     * @param {String} conversationId conversationId
     * @param {String} participantId participantId
     * @param {Object} body Update request
     */
    this.patchConversationsEmailParticipant = function(conversationId, participantId, body) { 

      // verify the required parameter 'conversationId' is set
      if (conversationId === undefined || conversationId === null) {
        throw "Missing the required parameter 'conversationId' when calling patchConversationsEmailParticipant";
      }

      // verify the required parameter 'participantId' is set
      if (participantId === undefined || participantId === null) {
        throw "Missing the required parameter 'participantId' when calling patchConversationsEmailParticipant";
      }

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw "Missing the required parameter 'body' when calling patchConversationsEmailParticipant";
      }


      return this.apiClient.callApi(
        '/api/v2/conversations/emails/{conversationId}/participants/{participantId}', 
        'PATCH', 
        { 'conversationId': conversationId,'participantId': participantId }, 
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
     * Update the attributes on a conversation participant.
     * 
     * @param {String} conversationId conversationId
     * @param {String} participantId participantId
     * @param {Object} body Participant attributes
     */
    this.patchConversationsEmailParticipantAttributes = function(conversationId, participantId, body) { 

      // verify the required parameter 'conversationId' is set
      if (conversationId === undefined || conversationId === null) {
        throw "Missing the required parameter 'conversationId' when calling patchConversationsEmailParticipantAttributes";
      }

      // verify the required parameter 'participantId' is set
      if (participantId === undefined || participantId === null) {
        throw "Missing the required parameter 'participantId' when calling patchConversationsEmailParticipantAttributes";
      }

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw "Missing the required parameter 'body' when calling patchConversationsEmailParticipantAttributes";
      }


      return this.apiClient.callApi(
        '/api/v2/conversations/emails/{conversationId}/participants/{participantId}/attributes', 
        'PATCH', 
        { 'conversationId': conversationId,'participantId': participantId }, 
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
     * Update conversation participant&#39;s communication by disconnecting it.
     * 
     * @param {String} conversationId conversationId
     * @param {String} participantId participantId
     * @param {String} communicationId communicationId
     * @param {Object} body Participant
     */
    this.patchConversationsEmailParticipantCommunication = function(conversationId, participantId, communicationId, body) { 

      // verify the required parameter 'conversationId' is set
      if (conversationId === undefined || conversationId === null) {
        throw "Missing the required parameter 'conversationId' when calling patchConversationsEmailParticipantCommunication";
      }

      // verify the required parameter 'participantId' is set
      if (participantId === undefined || participantId === null) {
        throw "Missing the required parameter 'participantId' when calling patchConversationsEmailParticipantCommunication";
      }

      // verify the required parameter 'communicationId' is set
      if (communicationId === undefined || communicationId === null) {
        throw "Missing the required parameter 'communicationId' when calling patchConversationsEmailParticipantCommunication";
      }

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw "Missing the required parameter 'body' when calling patchConversationsEmailParticipantCommunication";
      }


      return this.apiClient.callApi(
        '/api/v2/conversations/emails/{conversationId}/participants/{participantId}/communications/{communicationId}', 
        'PATCH', 
        { 'conversationId': conversationId,'participantId': participantId,'communicationId': communicationId }, 
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
     * Index conversation properties
     * 
     * @param {String} conversationId conversationId
     * @param {Object} body request
     */
    this.postAnalyticsConversationDetailsProperties = function(conversationId, body) { 

      // verify the required parameter 'conversationId' is set
      if (conversationId === undefined || conversationId === null) {
        throw "Missing the required parameter 'conversationId' when calling postAnalyticsConversationDetailsProperties";
      }

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw "Missing the required parameter 'body' when calling postAnalyticsConversationDetailsProperties";
      }


      return this.apiClient.callApi(
        '/api/v2/analytics/conversations/{conversationId}/details/properties', 
        'POST', 
        { 'conversationId': conversationId }, 
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
     * Query for conversation aggregates
     * 
     * @param {Object} body query
     */
    this.postAnalyticsConversationsAggregatesQuery = function(body) { 

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw "Missing the required parameter 'body' when calling postAnalyticsConversationsAggregatesQuery";
      }


      return this.apiClient.callApi(
        '/api/v2/analytics/conversations/aggregates/query', 
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
     * Query for conversation details
     * 
     * @param {Object} body query
     */
    this.postAnalyticsConversationsDetailsQuery = function(body) { 

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw "Missing the required parameter 'body' when calling postAnalyticsConversationsDetailsQuery";
      }


      return this.apiClient.callApi(
        '/api/v2/analytics/conversations/details/query', 
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
     * Create a new callback for the specified participant on the conversation.
     * 
     * @param {String} conversationId conversation ID
     * @param {String} participantId participant ID
     * @param {Object} opts Optional parameters
     * @param {Object} opts.body 
     */
    this.postConversationParticipantCallbacks = function(conversationId, participantId, opts) { 
      opts = opts || {};

      // verify the required parameter 'conversationId' is set
      if (conversationId === undefined || conversationId === null) {
        throw "Missing the required parameter 'conversationId' when calling postConversationParticipantCallbacks";
      }

      // verify the required parameter 'participantId' is set
      if (participantId === undefined || participantId === null) {
        throw "Missing the required parameter 'participantId' when calling postConversationParticipantCallbacks";
      }


      return this.apiClient.callApi(
        '/api/v2/conversations/{conversationId}/participants/{participantId}/callbacks', 
        'POST', 
        { 'conversationId': conversationId,'participantId': participantId }, 
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
     * Sends DTMF to the participant
     * 
     * @param {String} conversationId conversation ID
     * @param {String} participantId participant ID
     * @param {Object} opts Optional parameters
     * @param {Object} opts.body Digits
     */
    this.postConversationParticipantDigits = function(conversationId, participantId, opts) { 
      opts = opts || {};

      // verify the required parameter 'conversationId' is set
      if (conversationId === undefined || conversationId === null) {
        throw "Missing the required parameter 'conversationId' when calling postConversationParticipantDigits";
      }

      // verify the required parameter 'participantId' is set
      if (participantId === undefined || participantId === null) {
        throw "Missing the required parameter 'participantId' when calling postConversationParticipantDigits";
      }


      return this.apiClient.callApi(
        '/api/v2/conversations/{conversationId}/participants/{participantId}/digits', 
        'POST', 
        { 'conversationId': conversationId,'participantId': participantId }, 
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
     * Replace this participant with the specified user and/or address
     * 
     * @param {String} conversationId conversation ID
     * @param {String} participantId participant ID
     * @param {Object} body Transfer request
     */
    this.postConversationParticipantReplace = function(conversationId, participantId, body) { 

      // verify the required parameter 'conversationId' is set
      if (conversationId === undefined || conversationId === null) {
        throw "Missing the required parameter 'conversationId' when calling postConversationParticipantReplace";
      }

      // verify the required parameter 'participantId' is set
      if (participantId === undefined || participantId === null) {
        throw "Missing the required parameter 'participantId' when calling postConversationParticipantReplace";
      }

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw "Missing the required parameter 'body' when calling postConversationParticipantReplace";
      }


      return this.apiClient.callApi(
        '/api/v2/conversations/{conversationId}/participants/{participantId}/replace', 
        'POST', 
        { 'conversationId': conversationId,'participantId': participantId }, 
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
     * Create secure IVR session. Only a participant in the conversation can invoke a secure IVR.
     * 
     * @param {String} conversationId conversation ID
     * @param {String} participantId participant ID
     * @param {Object} opts Optional parameters
     * @param {Object} opts.body 
     */
    this.postConversationParticipantSecureivrsessions = function(conversationId, participantId, opts) { 
      opts = opts || {};

      // verify the required parameter 'conversationId' is set
      if (conversationId === undefined || conversationId === null) {
        throw "Missing the required parameter 'conversationId' when calling postConversationParticipantSecureivrsessions";
      }

      // verify the required parameter 'participantId' is set
      if (participantId === undefined || participantId === null) {
        throw "Missing the required parameter 'participantId' when calling postConversationParticipantSecureivrsessions";
      }


      return this.apiClient.callApi(
        '/api/v2/conversations/{conversationId}/participants/{participantId}/secureivrsessions', 
        'POST', 
        { 'conversationId': conversationId,'participantId': participantId }, 
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
     * Place a new call as part of a callback conversation.
     * 
     * @param {String} conversationId conversationId
     * @param {Object} body Conversation
     */
    this.postConversationsCall = function(conversationId, body) { 

      // verify the required parameter 'conversationId' is set
      if (conversationId === undefined || conversationId === null) {
        throw "Missing the required parameter 'conversationId' when calling postConversationsCall";
      }

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw "Missing the required parameter 'body' when calling postConversationsCall";
      }


      return this.apiClient.callApi(
        '/api/v2/conversations/calls/{conversationId}', 
        'POST', 
        { 'conversationId': conversationId }, 
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
     * Initiate and update consult transfer
     * 
     * @param {String} conversationId conversationId
     * @param {String} participantId participantId
     * @param {Object} body Destination address &amp; initial speak to
     */
    this.postConversationsCallParticipantConsult = function(conversationId, participantId, body) { 

      // verify the required parameter 'conversationId' is set
      if (conversationId === undefined || conversationId === null) {
        throw "Missing the required parameter 'conversationId' when calling postConversationsCallParticipantConsult";
      }

      // verify the required parameter 'participantId' is set
      if (participantId === undefined || participantId === null) {
        throw "Missing the required parameter 'participantId' when calling postConversationsCallParticipantConsult";
      }

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw "Missing the required parameter 'body' when calling postConversationsCallParticipantConsult";
      }


      return this.apiClient.callApi(
        '/api/v2/conversations/calls/{conversationId}/participants/{participantId}/consult', 
        'POST', 
        { 'conversationId': conversationId,'participantId': participantId }, 
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
     * Listen in on the conversation from the point of view of a given participant.
     * 
     * @param {String} conversationId conversationId
     * @param {String} participantId participantId
     */
    this.postConversationsCallParticipantMonitor = function(conversationId, participantId) { 

      // verify the required parameter 'conversationId' is set
      if (conversationId === undefined || conversationId === null) {
        throw "Missing the required parameter 'conversationId' when calling postConversationsCallParticipantMonitor";
      }

      // verify the required parameter 'participantId' is set
      if (participantId === undefined || participantId === null) {
        throw "Missing the required parameter 'participantId' when calling postConversationsCallParticipantMonitor";
      }


      return this.apiClient.callApi(
        '/api/v2/conversations/calls/{conversationId}/participants/{participantId}/monitor', 
        'POST', 
        { 'conversationId': conversationId,'participantId': participantId }, 
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
     * Replace this participant with the specified user and/or address
     * 
     * @param {String} conversationId conversationId
     * @param {String} participantId participantId
     * @param {Object} body Transfer request
     */
    this.postConversationsCallParticipantReplace = function(conversationId, participantId, body) { 

      // verify the required parameter 'conversationId' is set
      if (conversationId === undefined || conversationId === null) {
        throw "Missing the required parameter 'conversationId' when calling postConversationsCallParticipantReplace";
      }

      // verify the required parameter 'participantId' is set
      if (participantId === undefined || participantId === null) {
        throw "Missing the required parameter 'participantId' when calling postConversationsCallParticipantReplace";
      }

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw "Missing the required parameter 'body' when calling postConversationsCallParticipantReplace";
      }


      return this.apiClient.callApi(
        '/api/v2/conversations/calls/{conversationId}/participants/{participantId}/replace', 
        'POST', 
        { 'conversationId': conversationId,'participantId': participantId }, 
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
     * Add participants to a conversation
     * 
     * @param {String} conversationId conversationId
     * @param {Object} body Conversation
     */
    this.postConversationsCallParticipants = function(conversationId, body) { 

      // verify the required parameter 'conversationId' is set
      if (conversationId === undefined || conversationId === null) {
        throw "Missing the required parameter 'conversationId' when calling postConversationsCallParticipants";
      }

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw "Missing the required parameter 'body' when calling postConversationsCallParticipants";
      }


      return this.apiClient.callApi(
        '/api/v2/conversations/calls/{conversationId}/participants', 
        'POST', 
        { 'conversationId': conversationId }, 
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
     * Replace this participant with the specified user and/or address
     * 
     * @param {String} conversationId conversationId
     * @param {String} participantId participantId
     * @param {Object} body Transfer request
     */
    this.postConversationsCallbackParticipantReplace = function(conversationId, participantId, body) { 

      // verify the required parameter 'conversationId' is set
      if (conversationId === undefined || conversationId === null) {
        throw "Missing the required parameter 'conversationId' when calling postConversationsCallbackParticipantReplace";
      }

      // verify the required parameter 'participantId' is set
      if (participantId === undefined || participantId === null) {
        throw "Missing the required parameter 'participantId' when calling postConversationsCallbackParticipantReplace";
      }

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw "Missing the required parameter 'body' when calling postConversationsCallbackParticipantReplace";
      }


      return this.apiClient.callApi(
        '/api/v2/conversations/callbacks/{conversationId}/participants/{participantId}/replace', 
        'POST', 
        { 'conversationId': conversationId,'participantId': participantId }, 
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
     * Create a Callback
     * 
     * @param {Object} body Callback
     */
    this.postConversationsCallbacks = function(body) { 

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw "Missing the required parameter 'body' when calling postConversationsCallbacks";
      }


      return this.apiClient.callApi(
        '/api/v2/conversations/callbacks', 
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
     * Create a call conversation
     * 
     * @param {Object} body Call request
     */
    this.postConversationsCalls = function(body) { 

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw "Missing the required parameter 'body' when calling postConversationsCalls";
      }


      return this.apiClient.callApi(
        '/api/v2/conversations/calls', 
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
     * Replace this participant with the specified user and/or address
     * 
     * @param {String} conversationId conversationId
     * @param {String} participantId participantId
     * @param {Object} body Transfer request
     */
    this.postConversationsChatParticipantReplace = function(conversationId, participantId, body) { 

      // verify the required parameter 'conversationId' is set
      if (conversationId === undefined || conversationId === null) {
        throw "Missing the required parameter 'conversationId' when calling postConversationsChatParticipantReplace";
      }

      // verify the required parameter 'participantId' is set
      if (participantId === undefined || participantId === null) {
        throw "Missing the required parameter 'participantId' when calling postConversationsChatParticipantReplace";
      }

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw "Missing the required parameter 'body' when calling postConversationsChatParticipantReplace";
      }


      return this.apiClient.callApi(
        '/api/v2/conversations/chats/{conversationId}/participants/{participantId}/replace', 
        'POST', 
        { 'conversationId': conversationId,'participantId': participantId }, 
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
     * Create a web chat conversation
     * 
     * @param {Object} body Create web chat request
     */
    this.postConversationsChats = function(body) { 

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw "Missing the required parameter 'body' when calling postConversationsChats";
      }


      return this.apiClient.callApi(
        '/api/v2/conversations/chats', 
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
     * Replace this participant with the specified user and/or address
     * 
     * @param {String} conversationId conversationId
     * @param {String} participantId participantId
     * @param {Object} opts Optional parameters
     * @param {Object} opts.body 
     */
    this.postConversationsCobrowsesessionParticipantReplace = function(conversationId, participantId, opts) { 
      opts = opts || {};

      // verify the required parameter 'conversationId' is set
      if (conversationId === undefined || conversationId === null) {
        throw "Missing the required parameter 'conversationId' when calling postConversationsCobrowsesessionParticipantReplace";
      }

      // verify the required parameter 'participantId' is set
      if (participantId === undefined || participantId === null) {
        throw "Missing the required parameter 'participantId' when calling postConversationsCobrowsesessionParticipantReplace";
      }


      return this.apiClient.callApi(
        '/api/v2/conversations/cobrowsesessions/{conversationId}/participants/{participantId}/replace', 
        'POST', 
        { 'conversationId': conversationId,'participantId': participantId }, 
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
     * Send an email to an external conversation. An external conversation is one where the provider is not PureCloud based.This endpoint allows the sender of the external email to reply or send a new message to the existing conversation. The new message will be treated as part of the existing conversation and chained to it.
     * 
     * @param {String} conversationId conversationId
     * @param {Object} body Send external email reply
     */
    this.postConversationsEmailInboundmessages = function(conversationId, body) { 

      // verify the required parameter 'conversationId' is set
      if (conversationId === undefined || conversationId === null) {
        throw "Missing the required parameter 'conversationId' when calling postConversationsEmailInboundmessages";
      }

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw "Missing the required parameter 'body' when calling postConversationsEmailInboundmessages";
      }


      return this.apiClient.callApi(
        '/api/v2/conversations/emails/{conversationId}/inboundmessages', 
        'POST', 
        { 'conversationId': conversationId }, 
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
     * Send an email reply
     * 
     * @param {String} conversationId conversationId
     * @param {Object} body Reply
     */
    this.postConversationsEmailMessages = function(conversationId, body) { 

      // verify the required parameter 'conversationId' is set
      if (conversationId === undefined || conversationId === null) {
        throw "Missing the required parameter 'conversationId' when calling postConversationsEmailMessages";
      }

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw "Missing the required parameter 'body' when calling postConversationsEmailMessages";
      }


      return this.apiClient.callApi(
        '/api/v2/conversations/emails/{conversationId}/messages', 
        'POST', 
        { 'conversationId': conversationId }, 
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
     * Replace this participant with the specified user and/or address
     * 
     * @param {String} conversationId conversationId
     * @param {String} participantId participantId
     * @param {Object} body Transfer request
     */
    this.postConversationsEmailParticipantReplace = function(conversationId, participantId, body) { 

      // verify the required parameter 'conversationId' is set
      if (conversationId === undefined || conversationId === null) {
        throw "Missing the required parameter 'conversationId' when calling postConversationsEmailParticipantReplace";
      }

      // verify the required parameter 'participantId' is set
      if (participantId === undefined || participantId === null) {
        throw "Missing the required parameter 'participantId' when calling postConversationsEmailParticipantReplace";
      }

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw "Missing the required parameter 'body' when calling postConversationsEmailParticipantReplace";
      }


      return this.apiClient.callApi(
        '/api/v2/conversations/emails/{conversationId}/participants/{participantId}/replace', 
        'POST', 
        { 'conversationId': conversationId,'participantId': participantId }, 
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
     * Create an email conversation
     * 
     * @param {Object} body Create email request
     */
    this.postConversationsEmails = function(body) { 

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw "Missing the required parameter 'body' when calling postConversationsEmails";
      }


      return this.apiClient.callApi(
        '/api/v2/conversations/emails', 
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
     * Create Fax Conversation
     * 
     * @param {Object} body Fax
     */
    this.postConversationsFaxes = function(body) { 

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw "Missing the required parameter 'body' when calling postConversationsFaxes";
      }


      return this.apiClient.callApi(
        '/api/v2/conversations/faxes', 
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
     * Set uuiData to be sent on future commands.
     * 
     * @param {String} conversationId conversationId
     * @param {String} participantId participantId
     * @param {String} communicationId communicationId
     * @param {Object} body UUIData Request
     */
    this.putConversationsCallParticipantCommunicationUuidata = function(conversationId, participantId, communicationId, body) { 

      // verify the required parameter 'conversationId' is set
      if (conversationId === undefined || conversationId === null) {
        throw "Missing the required parameter 'conversationId' when calling putConversationsCallParticipantCommunicationUuidata";
      }

      // verify the required parameter 'participantId' is set
      if (participantId === undefined || participantId === null) {
        throw "Missing the required parameter 'participantId' when calling putConversationsCallParticipantCommunicationUuidata";
      }

      // verify the required parameter 'communicationId' is set
      if (communicationId === undefined || communicationId === null) {
        throw "Missing the required parameter 'communicationId' when calling putConversationsCallParticipantCommunicationUuidata";
      }

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw "Missing the required parameter 'body' when calling putConversationsCallParticipantCommunicationUuidata";
      }


      return this.apiClient.callApi(
        '/api/v2/conversations/calls/{conversationId}/participants/{participantId}/communications/{communicationId}/uuidata', 
        'PUT', 
        { 'conversationId': conversationId,'participantId': participantId,'communicationId': communicationId }, 
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
     * Update conversation draft reply
     * 
     * @param {String} conversationId conversationId
     * @param {Object} body Draft
     */
    this.putConversationsEmailMessagesDraft = function(conversationId, body) { 

      // verify the required parameter 'conversationId' is set
      if (conversationId === undefined || conversationId === null) {
        throw "Missing the required parameter 'conversationId' when calling putConversationsEmailMessagesDraft";
      }

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw "Missing the required parameter 'body' when calling putConversationsEmailMessagesDraft";
      }


      return this.apiClient.callApi(
        '/api/v2/conversations/emails/{conversationId}/messages/draft', 
        'PUT', 
        { 'conversationId': conversationId }, 
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
