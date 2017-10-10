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
    root.platformClient.OutboundApi = factory(root.platformClient.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * Outbound service.
   * @module purecloud-platform-client-v2/api/OutboundApi
   * @version 11.0.0
   */

  /**
   * Constructs a new OutboundApi. 
   * @alias module:purecloud-platform-client-v2/api/OutboundApi
   * @class
   * @param {module:purecloud-platform-client-v2/ApiClient} apiClient Optional API client implementation to use,
   * default to {@link module:purecloud-platform-client-v2/ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;



    /**
     * Delete attempt limits
     * 
     * @param {String} attemptLimitsId Attempt limits ID
     */
    this.deleteOutboundAttemptlimit = function(attemptLimitsId) { 

      // verify the required parameter 'attemptLimitsId' is set
      if (attemptLimitsId === undefined || attemptLimitsId === null) {
        throw "Missing the required parameter 'attemptLimitsId' when calling deleteOutboundAttemptlimit";
      }


      return this.apiClient.callApi(
        '/api/v2/outbound/attemptlimits/{attemptLimitsId}', 
        'DELETE', 
        { 'attemptLimitsId': attemptLimitsId }, 
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
     * Delete callable time set
     * 
     * @param {String} callableTimeSetId Callable Time Set ID
     */
    this.deleteOutboundCallabletimeset = function(callableTimeSetId) { 

      // verify the required parameter 'callableTimeSetId' is set
      if (callableTimeSetId === undefined || callableTimeSetId === null) {
        throw "Missing the required parameter 'callableTimeSetId' when calling deleteOutboundCallabletimeset";
      }


      return this.apiClient.callApi(
        '/api/v2/outbound/callabletimesets/{callableTimeSetId}', 
        'DELETE', 
        { 'callableTimeSetId': callableTimeSetId }, 
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
     * Delete a dialer call analysis response set.
     * 
     * @param {String} callAnalysisSetId Call Analysis Response Set ID
     */
    this.deleteOutboundCallanalysisresponseset = function(callAnalysisSetId) { 

      // verify the required parameter 'callAnalysisSetId' is set
      if (callAnalysisSetId === undefined || callAnalysisSetId === null) {
        throw "Missing the required parameter 'callAnalysisSetId' when calling deleteOutboundCallanalysisresponseset";
      }


      return this.apiClient.callApi(
        '/api/v2/outbound/callanalysisresponsesets/{callAnalysisSetId}', 
        'DELETE', 
        { 'callAnalysisSetId': callAnalysisSetId }, 
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
     * Delete a campaign.
     * 
     * @param {String} campaignId Campaign ID
     */
    this.deleteOutboundCampaign = function(campaignId) { 

      // verify the required parameter 'campaignId' is set
      if (campaignId === undefined || campaignId === null) {
        throw "Missing the required parameter 'campaignId' when calling deleteOutboundCampaign";
      }


      return this.apiClient.callApi(
        '/api/v2/outbound/campaigns/{campaignId}', 
        'DELETE', 
        { 'campaignId': campaignId }, 
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
     * Reset campaign progress and recycle the campaign
     * 
     * @param {String} campaignId Campaign ID
     */
    this.deleteOutboundCampaignProgress = function(campaignId) { 

      // verify the required parameter 'campaignId' is set
      if (campaignId === undefined || campaignId === null) {
        throw "Missing the required parameter 'campaignId' when calling deleteOutboundCampaignProgress";
      }


      return this.apiClient.callApi(
        '/api/v2/outbound/campaigns/{campaignId}/progress', 
        'DELETE', 
        { 'campaignId': campaignId }, 
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
     * Delete Campaign Rule
     * 
     * @param {String} campaignRuleId Campaign Rule ID
     */
    this.deleteOutboundCampaignrule = function(campaignRuleId) { 

      // verify the required parameter 'campaignRuleId' is set
      if (campaignRuleId === undefined || campaignRuleId === null) {
        throw "Missing the required parameter 'campaignRuleId' when calling deleteOutboundCampaignrule";
      }


      return this.apiClient.callApi(
        '/api/v2/outbound/campaignrules/{campaignRuleId}', 
        'DELETE', 
        { 'campaignRuleId': campaignRuleId }, 
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
     * Delete a contact list.
     * 
     * @param {String} contactListId ContactList ID
     */
    this.deleteOutboundContactlist = function(contactListId) { 

      // verify the required parameter 'contactListId' is set
      if (contactListId === undefined || contactListId === null) {
        throw "Missing the required parameter 'contactListId' when calling deleteOutboundContactlist";
      }


      return this.apiClient.callApi(
        '/api/v2/outbound/contactlists/{contactListId}', 
        'DELETE', 
        { 'contactListId': contactListId }, 
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
     * Delete a contact.
     * 
     * @param {String} contactListId Contact List ID
     * @param {String} contactId Contact ID
     */
    this.deleteOutboundContactlistContact = function(contactListId, contactId) { 

      // verify the required parameter 'contactListId' is set
      if (contactListId === undefined || contactListId === null) {
        throw "Missing the required parameter 'contactListId' when calling deleteOutboundContactlistContact";
      }

      // verify the required parameter 'contactId' is set
      if (contactId === undefined || contactId === null) {
        throw "Missing the required parameter 'contactId' when calling deleteOutboundContactlistContact";
      }


      return this.apiClient.callApi(
        '/api/v2/outbound/contactlists/{contactListId}/contacts/{contactId}', 
        'DELETE', 
        { 'contactListId': contactListId,'contactId': contactId }, 
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
     * Delete contacts from a contact list.
     * 
     * @param {String} contactListId Contact List ID
     * @param {Array.<String>} contactIds ContactIds to delete.
     */
    this.deleteOutboundContactlistContacts = function(contactListId, contactIds) { 

      // verify the required parameter 'contactListId' is set
      if (contactListId === undefined || contactListId === null) {
        throw "Missing the required parameter 'contactListId' when calling deleteOutboundContactlistContacts";
      }

      // verify the required parameter 'contactIds' is set
      if (contactIds === undefined || contactIds === null) {
        throw "Missing the required parameter 'contactIds' when calling deleteOutboundContactlistContacts";
      }


      return this.apiClient.callApi(
        '/api/v2/outbound/contactlists/{contactListId}/contacts', 
        'DELETE', 
        { 'contactListId': contactListId }, 
        { 'contactIds': this.apiClient.buildCollectionParam(contactIds, 'multi') }, 
        {  }, 
        {  }, 
        null, 
        ['PureCloud Auth'], 
        ['application/json'], 
        ['application/json']
      );
    };


    /**
     * Delete Contact List Filter
     * 
     * @param {String} contactListFilterId Contact List Filter ID
     */
    this.deleteOutboundContactlistfilter = function(contactListFilterId) { 

      // verify the required parameter 'contactListFilterId' is set
      if (contactListFilterId === undefined || contactListFilterId === null) {
        throw "Missing the required parameter 'contactListFilterId' when calling deleteOutboundContactlistfilter";
      }


      return this.apiClient.callApi(
        '/api/v2/outbound/contactlistfilters/{contactListFilterId}', 
        'DELETE', 
        { 'contactListFilterId': contactListFilterId }, 
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
     * Delete multiple contact lists.
     * 
     * @param {Array.<String>} id contact list id(s) to delete
     */
    this.deleteOutboundContactlists = function(id) { 

      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw "Missing the required parameter 'id' when calling deleteOutboundContactlists";
      }


      return this.apiClient.callApi(
        '/api/v2/outbound/contactlists', 
        'DELETE', 
        {  }, 
        { 'id': this.apiClient.buildCollectionParam(id, 'multi') }, 
        {  }, 
        {  }, 
        null, 
        ['PureCloud Auth'], 
        ['application/json'], 
        ['application/json']
      );
    };


    /**
     * Delete dialer DNC list
     * 
     * @param {String} dncListId DncList ID
     */
    this.deleteOutboundDnclist = function(dncListId) { 

      // verify the required parameter 'dncListId' is set
      if (dncListId === undefined || dncListId === null) {
        throw "Missing the required parameter 'dncListId' when calling deleteOutboundDnclist";
      }


      return this.apiClient.callApi(
        '/api/v2/outbound/dnclists/{dncListId}', 
        'DELETE', 
        { 'dncListId': dncListId }, 
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
     * Delete a Rule set.
     * 
     * @param {String} ruleSetId Rule Set ID
     */
    this.deleteOutboundRuleset = function(ruleSetId) { 

      // verify the required parameter 'ruleSetId' is set
      if (ruleSetId === undefined || ruleSetId === null) {
        throw "Missing the required parameter 'ruleSetId' when calling deleteOutboundRuleset";
      }


      return this.apiClient.callApi(
        '/api/v2/outbound/rulesets/{ruleSetId}', 
        'DELETE', 
        { 'ruleSetId': ruleSetId }, 
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
     * Delete a dialer campaign schedule.
     * 
     * @param {String} campaignId Campaign ID
     */
    this.deleteOutboundSchedulesCampaign = function(campaignId) { 

      // verify the required parameter 'campaignId' is set
      if (campaignId === undefined || campaignId === null) {
        throw "Missing the required parameter 'campaignId' when calling deleteOutboundSchedulesCampaign";
      }


      return this.apiClient.callApi(
        '/api/v2/outbound/schedules/campaigns/{campaignId}', 
        'DELETE', 
        { 'campaignId': campaignId }, 
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
     * Delete a dialer sequence schedule.
     * 
     * @param {String} sequenceId Sequence ID
     */
    this.deleteOutboundSchedulesSequence = function(sequenceId) { 

      // verify the required parameter 'sequenceId' is set
      if (sequenceId === undefined || sequenceId === null) {
        throw "Missing the required parameter 'sequenceId' when calling deleteOutboundSchedulesSequence";
      }


      return this.apiClient.callApi(
        '/api/v2/outbound/schedules/sequences/{sequenceId}', 
        'DELETE', 
        { 'sequenceId': sequenceId }, 
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
     * Delete a dialer campaign sequence.
     * 
     * @param {String} sequenceId Campaign Sequence ID
     */
    this.deleteOutboundSequence = function(sequenceId) { 

      // verify the required parameter 'sequenceId' is set
      if (sequenceId === undefined || sequenceId === null) {
        throw "Missing the required parameter 'sequenceId' when calling deleteOutboundSequence";
      }


      return this.apiClient.callApi(
        '/api/v2/outbound/sequences/{sequenceId}', 
        'DELETE', 
        { 'sequenceId': sequenceId }, 
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
     * Get attempt limits
     * 
     * @param {String} attemptLimitsId Attempt limits ID
     */
    this.getOutboundAttemptlimit = function(attemptLimitsId) { 

      // verify the required parameter 'attemptLimitsId' is set
      if (attemptLimitsId === undefined || attemptLimitsId === null) {
        throw "Missing the required parameter 'attemptLimitsId' when calling getOutboundAttemptlimit";
      }


      return this.apiClient.callApi(
        '/api/v2/outbound/attemptlimits/{attemptLimitsId}', 
        'GET', 
        { 'attemptLimitsId': attemptLimitsId }, 
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
     * Query attempt limits list
     * 
     * @param {Object} opts Optional parameters
     * @param {Number} opts.pageSize Page size (default to 25)
     * @param {Number} opts.pageNumber Page number (default to 1)
     * @param {Object} opts.filterType Filter type (default to Prefix)
     * @param {String} opts.name Name
     * @param {String} opts.sortBy Sort by
     * @param {Object} opts.sortOrder Sort order (default to a)
     */
    this.getOutboundAttemptlimits = function(opts) { 
      opts = opts || {};


      return this.apiClient.callApi(
        '/api/v2/outbound/attemptlimits', 
        'GET', 
        {  }, 
        { 'pageSize': opts['pageSize'],'pageNumber': opts['pageNumber'],'filterType': opts['filterType'],'name': opts['name'],'sortBy': opts['sortBy'],'sortOrder': opts['sortOrder'] }, 
        {  }, 
        {  }, 
        null, 
        ['PureCloud Auth'], 
        ['application/json'], 
        ['application/json']
      );
    };


    /**
     * Get callable time set
     * 
     * @param {String} callableTimeSetId Callable Time Set ID
     */
    this.getOutboundCallabletimeset = function(callableTimeSetId) { 

      // verify the required parameter 'callableTimeSetId' is set
      if (callableTimeSetId === undefined || callableTimeSetId === null) {
        throw "Missing the required parameter 'callableTimeSetId' when calling getOutboundCallabletimeset";
      }


      return this.apiClient.callApi(
        '/api/v2/outbound/callabletimesets/{callableTimeSetId}', 
        'GET', 
        { 'callableTimeSetId': callableTimeSetId }, 
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
     * Query callable time set list
     * 
     * @param {Object} opts Optional parameters
     * @param {Number} opts.pageSize Page size (default to 25)
     * @param {Number} opts.pageNumber Page number (default to 1)
     * @param {Object} opts.filterType Filter type (default to Prefix)
     * @param {String} opts.name Name
     * @param {String} opts.sortBy Sort by
     * @param {Object} opts.sortOrder Sort order (default to a)
     */
    this.getOutboundCallabletimesets = function(opts) { 
      opts = opts || {};


      return this.apiClient.callApi(
        '/api/v2/outbound/callabletimesets', 
        'GET', 
        {  }, 
        { 'pageSize': opts['pageSize'],'pageNumber': opts['pageNumber'],'filterType': opts['filterType'],'name': opts['name'],'sortBy': opts['sortBy'],'sortOrder': opts['sortOrder'] }, 
        {  }, 
        {  }, 
        null, 
        ['PureCloud Auth'], 
        ['application/json'], 
        ['application/json']
      );
    };


    /**
     * Get a dialer call analysis response set.
     * 
     * @param {String} callAnalysisSetId Call Analysis Response Set ID
     */
    this.getOutboundCallanalysisresponseset = function(callAnalysisSetId) { 

      // verify the required parameter 'callAnalysisSetId' is set
      if (callAnalysisSetId === undefined || callAnalysisSetId === null) {
        throw "Missing the required parameter 'callAnalysisSetId' when calling getOutboundCallanalysisresponseset";
      }


      return this.apiClient.callApi(
        '/api/v2/outbound/callanalysisresponsesets/{callAnalysisSetId}', 
        'GET', 
        { 'callAnalysisSetId': callAnalysisSetId }, 
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
     * Query a list of dialer call analysis response sets.
     * 
     * @param {Object} opts Optional parameters
     * @param {Number} opts.pageSize Page size (default to 25)
     * @param {Number} opts.pageNumber Page number (default to 1)
     * @param {Object} opts.filterType Filter type (default to Prefix)
     * @param {String} opts.name Name
     * @param {String} opts.sortBy Sort by
     * @param {Object} opts.sortOrder Sort order (default to a)
     */
    this.getOutboundCallanalysisresponsesets = function(opts) { 
      opts = opts || {};


      return this.apiClient.callApi(
        '/api/v2/outbound/callanalysisresponsesets', 
        'GET', 
        {  }, 
        { 'pageSize': opts['pageSize'],'pageNumber': opts['pageNumber'],'filterType': opts['filterType'],'name': opts['name'],'sortBy': opts['sortBy'],'sortOrder': opts['sortOrder'] }, 
        {  }, 
        {  }, 
        null, 
        ['PureCloud Auth'], 
        ['application/json'], 
        ['application/json']
      );
    };


    /**
     * Get dialer campaign.
     * 
     * @param {String} campaignId Campaign ID
     */
    this.getOutboundCampaign = function(campaignId) { 

      // verify the required parameter 'campaignId' is set
      if (campaignId === undefined || campaignId === null) {
        throw "Missing the required parameter 'campaignId' when calling getOutboundCampaign";
      }


      return this.apiClient.callApi(
        '/api/v2/outbound/campaigns/{campaignId}', 
        'GET', 
        { 'campaignId': campaignId }, 
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
     * Get campaign diagnostics
     * 
     * @param {String} campaignId Campaign ID
     */
    this.getOutboundCampaignDiagnostics = function(campaignId) { 

      // verify the required parameter 'campaignId' is set
      if (campaignId === undefined || campaignId === null) {
        throw "Missing the required parameter 'campaignId' when calling getOutboundCampaignDiagnostics";
      }


      return this.apiClient.callApi(
        '/api/v2/outbound/campaigns/{campaignId}/diagnostics', 
        'GET', 
        { 'campaignId': campaignId }, 
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
     * Get dialer campaign interactions.
     * 
     * @param {String} campaignId Campaign ID
     */
    this.getOutboundCampaignInteractions = function(campaignId) { 

      // verify the required parameter 'campaignId' is set
      if (campaignId === undefined || campaignId === null) {
        throw "Missing the required parameter 'campaignId' when calling getOutboundCampaignInteractions";
      }


      return this.apiClient.callApi(
        '/api/v2/outbound/campaigns/{campaignId}/interactions', 
        'GET', 
        { 'campaignId': campaignId }, 
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
     * Get campaign progress
     * 
     * @param {String} campaignId Campaign ID
     */
    this.getOutboundCampaignProgress = function(campaignId) { 

      // verify the required parameter 'campaignId' is set
      if (campaignId === undefined || campaignId === null) {
        throw "Missing the required parameter 'campaignId' when calling getOutboundCampaignProgress";
      }


      return this.apiClient.callApi(
        '/api/v2/outbound/campaigns/{campaignId}/progress', 
        'GET', 
        { 'campaignId': campaignId }, 
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
     * Get statistics about a Dialer Campaign
     * 
     * @param {String} campaignId Campaign ID
     */
    this.getOutboundCampaignStats = function(campaignId) { 

      // verify the required parameter 'campaignId' is set
      if (campaignId === undefined || campaignId === null) {
        throw "Missing the required parameter 'campaignId' when calling getOutboundCampaignStats";
      }


      return this.apiClient.callApi(
        '/api/v2/outbound/campaigns/{campaignId}/stats', 
        'GET', 
        { 'campaignId': campaignId }, 
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
     * Get Campaign Rule
     * 
     * @param {String} campaignRuleId Campaign Rule ID
     */
    this.getOutboundCampaignrule = function(campaignRuleId) { 

      // verify the required parameter 'campaignRuleId' is set
      if (campaignRuleId === undefined || campaignRuleId === null) {
        throw "Missing the required parameter 'campaignRuleId' when calling getOutboundCampaignrule";
      }


      return this.apiClient.callApi(
        '/api/v2/outbound/campaignrules/{campaignRuleId}', 
        'GET', 
        { 'campaignRuleId': campaignRuleId }, 
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
     * Query Campaign Rule list
     * 
     * @param {Object} opts Optional parameters
     * @param {Number} opts.pageSize Page size (default to 25)
     * @param {Number} opts.pageNumber Page number (default to 1)
     * @param {Object} opts.filterType Filter type (default to Prefix)
     * @param {String} opts.name Name
     * @param {String} opts.sortBy Sort by
     * @param {Object} opts.sortOrder Sort order (default to a)
     */
    this.getOutboundCampaignrules = function(opts) { 
      opts = opts || {};


      return this.apiClient.callApi(
        '/api/v2/outbound/campaignrules', 
        'GET', 
        {  }, 
        { 'pageSize': opts['pageSize'],'pageNumber': opts['pageNumber'],'filterType': opts['filterType'],'name': opts['name'],'sortBy': opts['sortBy'],'sortOrder': opts['sortOrder'] }, 
        {  }, 
        {  }, 
        null, 
        ['PureCloud Auth'], 
        ['application/json'], 
        ['application/json']
      );
    };


    /**
     * Query a list of dialer campaigns.
     * 
     * @param {Object} opts Optional parameters
     * @param {Number} opts.pageSize Page size (default to 25)
     * @param {Number} opts.pageNumber Page number (default to 1)
     * @param {Object} opts.filterType Filter type (default to Prefix)
     * @param {String} opts.name Name
     * @param {String} opts.contactListId Contact List ID
     * @param {String} opts.dncListId DNC list ID
     * @param {String} opts.distributionQueueId Distribution queue ID
     * @param {String} opts.edgeGroupId Edge group ID
     * @param {String} opts.callAnalysisResponseSetId Call analysis response set ID
     * @param {String} opts.sortBy Sort by
     * @param {Object} opts.sortOrder Sort order (default to a)
     */
    this.getOutboundCampaigns = function(opts) { 
      opts = opts || {};


      return this.apiClient.callApi(
        '/api/v2/outbound/campaigns', 
        'GET', 
        {  }, 
        { 'pageSize': opts['pageSize'],'pageNumber': opts['pageNumber'],'filterType': opts['filterType'],'name': opts['name'],'contactListId': opts['contactListId'],'dncListId': opts['dncListId'],'distributionQueueId': opts['distributionQueueId'],'edgeGroupId': opts['edgeGroupId'],'callAnalysisResponseSetId': opts['callAnalysisResponseSetId'],'sortBy': opts['sortBy'],'sortOrder': opts['sortOrder'] }, 
        {  }, 
        {  }, 
        null, 
        ['PureCloud Auth'], 
        ['application/json'], 
        ['application/json']
      );
    };


    /**
     * Get a dialer contact list.
     * 
     * @param {String} contactListId ContactList ID
     * @param {Object} opts Optional parameters
     * @param {Boolean} opts.includeImportStatus Import status (default to false)
     * @param {Boolean} opts.includeSize Include size (default to false)
     */
    this.getOutboundContactlist = function(contactListId, opts) { 
      opts = opts || {};

      // verify the required parameter 'contactListId' is set
      if (contactListId === undefined || contactListId === null) {
        throw "Missing the required parameter 'contactListId' when calling getOutboundContactlist";
      }


      return this.apiClient.callApi(
        '/api/v2/outbound/contactlists/{contactListId}', 
        'GET', 
        { 'contactListId': contactListId }, 
        { 'includeImportStatus': opts['includeImportStatus'],'includeSize': opts['includeSize'] }, 
        {  }, 
        {  }, 
        null, 
        ['PureCloud Auth'], 
        ['application/json'], 
        ['application/json']
      );
    };


    /**
     * Get a contact.
     * 
     * @param {String} contactListId Contact List ID
     * @param {String} contactId Contact ID
     */
    this.getOutboundContactlistContact = function(contactListId, contactId) { 

      // verify the required parameter 'contactListId' is set
      if (contactListId === undefined || contactListId === null) {
        throw "Missing the required parameter 'contactListId' when calling getOutboundContactlistContact";
      }

      // verify the required parameter 'contactId' is set
      if (contactId === undefined || contactId === null) {
        throw "Missing the required parameter 'contactId' when calling getOutboundContactlistContact";
      }


      return this.apiClient.callApi(
        '/api/v2/outbound/contactlists/{contactListId}/contacts/{contactId}', 
        'GET', 
        { 'contactListId': contactListId,'contactId': contactId }, 
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
     * Get the URI of a contact list export.
     * 
     * @param {String} contactListId ContactList ID
     * @param {Object} opts Optional parameters
     * @param {String} opts.download Redirect to download uri (default to false)
     */
    this.getOutboundContactlistExport = function(contactListId, opts) { 
      opts = opts || {};

      // verify the required parameter 'contactListId' is set
      if (contactListId === undefined || contactListId === null) {
        throw "Missing the required parameter 'contactListId' when calling getOutboundContactlistExport";
      }


      return this.apiClient.callApi(
        '/api/v2/outbound/contactlists/{contactListId}/export', 
        'GET', 
        { 'contactListId': contactListId }, 
        { 'download': opts['download'] }, 
        {  }, 
        {  }, 
        null, 
        ['PureCloud Auth'], 
        ['application/json'], 
        ['application/json']
      );
    };


    /**
     * Get dialer contactList import status.
     * 
     * @param {String} contactListId ContactList ID
     */
    this.getOutboundContactlistImportstatus = function(contactListId) { 

      // verify the required parameter 'contactListId' is set
      if (contactListId === undefined || contactListId === null) {
        throw "Missing the required parameter 'contactListId' when calling getOutboundContactlistImportstatus";
      }


      return this.apiClient.callApi(
        '/api/v2/outbound/contactlists/{contactListId}/importstatus', 
        'GET', 
        { 'contactListId': contactListId }, 
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
     * Get Contact list filter
     * 
     * @param {String} contactListFilterId Contact List Filter ID
     */
    this.getOutboundContactlistfilter = function(contactListFilterId) { 

      // verify the required parameter 'contactListFilterId' is set
      if (contactListFilterId === undefined || contactListFilterId === null) {
        throw "Missing the required parameter 'contactListFilterId' when calling getOutboundContactlistfilter";
      }


      return this.apiClient.callApi(
        '/api/v2/outbound/contactlistfilters/{contactListFilterId}', 
        'GET', 
        { 'contactListFilterId': contactListFilterId }, 
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
     * Query Contact list filters
     * 
     * @param {Object} opts Optional parameters
     * @param {Number} opts.pageSize Page size (default to 25)
     * @param {Number} opts.pageNumber Page number (default to 1)
     * @param {Object} opts.filterType Filter type (default to Prefix)
     * @param {String} opts.name Name
     * @param {String} opts.sortBy Sort by
     * @param {Object} opts.sortOrder Sort order (default to a)
     * @param {String} opts.contactListId Contact List ID
     */
    this.getOutboundContactlistfilters = function(opts) { 
      opts = opts || {};


      return this.apiClient.callApi(
        '/api/v2/outbound/contactlistfilters', 
        'GET', 
        {  }, 
        { 'pageSize': opts['pageSize'],'pageNumber': opts['pageNumber'],'filterType': opts['filterType'],'name': opts['name'],'sortBy': opts['sortBy'],'sortOrder': opts['sortOrder'],'contactListId': opts['contactListId'] }, 
        {  }, 
        {  }, 
        null, 
        ['PureCloud Auth'], 
        ['application/json'], 
        ['application/json']
      );
    };


    /**
     * Query a list of contact lists.
     * 
     * @param {Object} opts Optional parameters
     * @param {Boolean} opts.includeImportStatus Include import status (default to false)
     * @param {Boolean} opts.includeSize Include size (default to false)
     * @param {Number} opts.pageSize Page size (default to 25)
     * @param {Number} opts.pageNumber Page number (default to 1)
     * @param {Object} opts.filterType Filter type (default to Prefix)
     * @param {String} opts.name Name
     * @param {String} opts.sortBy Sort by
     * @param {Object} opts.sortOrder Sort order (default to a)
     */
    this.getOutboundContactlists = function(opts) { 
      opts = opts || {};


      return this.apiClient.callApi(
        '/api/v2/outbound/contactlists', 
        'GET', 
        {  }, 
        { 'includeImportStatus': opts['includeImportStatus'],'includeSize': opts['includeSize'],'pageSize': opts['pageSize'],'pageNumber': opts['pageNumber'],'filterType': opts['filterType'],'name': opts['name'],'sortBy': opts['sortBy'],'sortOrder': opts['sortOrder'] }, 
        {  }, 
        {  }, 
        null, 
        ['PureCloud Auth'], 
        ['application/json'], 
        ['application/json']
      );
    };


    /**
     * Get dialer DNC list
     * 
     * @param {String} dncListId DncList ID
     * @param {Object} opts Optional parameters
     * @param {Boolean} opts.includeImportStatus Import status (default to false)
     * @param {Boolean} opts.includeSize Include size (default to false)
     */
    this.getOutboundDnclist = function(dncListId, opts) { 
      opts = opts || {};

      // verify the required parameter 'dncListId' is set
      if (dncListId === undefined || dncListId === null) {
        throw "Missing the required parameter 'dncListId' when calling getOutboundDnclist";
      }


      return this.apiClient.callApi(
        '/api/v2/outbound/dnclists/{dncListId}', 
        'GET', 
        { 'dncListId': dncListId }, 
        { 'includeImportStatus': opts['includeImportStatus'],'includeSize': opts['includeSize'] }, 
        {  }, 
        {  }, 
        null, 
        ['PureCloud Auth'], 
        ['application/json'], 
        ['application/json']
      );
    };


    /**
     * Get the URI of a DNC list export.
     * 
     * @param {String} dncListId DncList ID
     * @param {Object} opts Optional parameters
     * @param {String} opts.download Redirect to download uri (default to false)
     */
    this.getOutboundDnclistExport = function(dncListId, opts) { 
      opts = opts || {};

      // verify the required parameter 'dncListId' is set
      if (dncListId === undefined || dncListId === null) {
        throw "Missing the required parameter 'dncListId' when calling getOutboundDnclistExport";
      }


      return this.apiClient.callApi(
        '/api/v2/outbound/dnclists/{dncListId}/export', 
        'GET', 
        { 'dncListId': dncListId }, 
        { 'download': opts['download'] }, 
        {  }, 
        {  }, 
        null, 
        ['PureCloud Auth'], 
        ['application/json'], 
        ['application/json']
      );
    };


    /**
     * Get dialer dncList import status.
     * 
     * @param {String} dncListId DncList ID
     */
    this.getOutboundDnclistImportstatus = function(dncListId) { 

      // verify the required parameter 'dncListId' is set
      if (dncListId === undefined || dncListId === null) {
        throw "Missing the required parameter 'dncListId' when calling getOutboundDnclistImportstatus";
      }


      return this.apiClient.callApi(
        '/api/v2/outbound/dnclists/{dncListId}/importstatus', 
        'GET', 
        { 'dncListId': dncListId }, 
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
     * Query dialer DNC lists
     * 
     * @param {Object} opts Optional parameters
     * @param {Boolean} opts.includeImportStatus Import status (default to false)
     * @param {Boolean} opts.includeSize Include size (default to false)
     * @param {Number} opts.pageSize Page size (default to 25)
     * @param {Number} opts.pageNumber Page number (default to 1)
     * @param {Object} opts.filterType Filter type (default to Prefix)
     * @param {String} opts.name Name
     * @param {String} opts.sortBy Sort by
     * @param {Object} opts.sortOrder Sort order
     */
    this.getOutboundDnclists = function(opts) { 
      opts = opts || {};


      return this.apiClient.callApi(
        '/api/v2/outbound/dnclists', 
        'GET', 
        {  }, 
        { 'includeImportStatus': opts['includeImportStatus'],'includeSize': opts['includeSize'],'pageSize': opts['pageSize'],'pageNumber': opts['pageNumber'],'filterType': opts['filterType'],'name': opts['name'],'sortBy': opts['sortBy'],'sortOrder': opts['sortOrder'] }, 
        {  }, 
        {  }, 
        null, 
        ['PureCloud Auth'], 
        ['application/json'], 
        ['application/json']
      );
    };


    /**
     * Get Dialer Event
     * 
     * @param {String} eventId Event Log ID
     */
    this.getOutboundEvent = function(eventId) { 

      // verify the required parameter 'eventId' is set
      if (eventId === undefined || eventId === null) {
        throw "Missing the required parameter 'eventId' when calling getOutboundEvent";
      }


      return this.apiClient.callApi(
        '/api/v2/outbound/events/{eventId}', 
        'GET', 
        { 'eventId': eventId }, 
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
     * Query Event Logs
     * 
     * @param {Object} opts Optional parameters
     * @param {Number} opts.pageSize Page size (default to 25)
     * @param {Number} opts.pageNumber Page number (default to 1)
     * @param {Object} opts.filterType Filter type (default to Prefix)
     * @param {String} opts.category Category
     * @param {String} opts.level Level
     * @param {String} opts.sortBy Sort by
     * @param {Object} opts.sortOrder Sort order (default to a)
     */
    this.getOutboundEvents = function(opts) { 
      opts = opts || {};


      return this.apiClient.callApi(
        '/api/v2/outbound/events', 
        'GET', 
        {  }, 
        { 'pageSize': opts['pageSize'],'pageNumber': opts['pageNumber'],'filterType': opts['filterType'],'category': opts['category'],'level': opts['level'],'sortBy': opts['sortBy'],'sortOrder': opts['sortOrder'] }, 
        {  }, 
        {  }, 
        null, 
        ['PureCloud Auth'], 
        ['application/json'], 
        ['application/json']
      );
    };


    /**
     * Get a Rule Set by ID.
     * 
     * @param {String} ruleSetId Rule Set ID
     */
    this.getOutboundRuleset = function(ruleSetId) { 

      // verify the required parameter 'ruleSetId' is set
      if (ruleSetId === undefined || ruleSetId === null) {
        throw "Missing the required parameter 'ruleSetId' when calling getOutboundRuleset";
      }


      return this.apiClient.callApi(
        '/api/v2/outbound/rulesets/{ruleSetId}', 
        'GET', 
        { 'ruleSetId': ruleSetId }, 
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
     * Query a list of Rule Sets.
     * 
     * @param {Object} opts Optional parameters
     * @param {Number} opts.pageSize Page size (default to 25)
     * @param {Number} opts.pageNumber Page number (default to 1)
     * @param {Object} opts.filterType Filter type (default to Prefix)
     * @param {String} opts.name Name
     * @param {String} opts.sortBy Sort by
     * @param {Object} opts.sortOrder Sort order (default to a)
     */
    this.getOutboundRulesets = function(opts) { 
      opts = opts || {};


      return this.apiClient.callApi(
        '/api/v2/outbound/rulesets', 
        'GET', 
        {  }, 
        { 'pageSize': opts['pageSize'],'pageNumber': opts['pageNumber'],'filterType': opts['filterType'],'name': opts['name'],'sortBy': opts['sortBy'],'sortOrder': opts['sortOrder'] }, 
        {  }, 
        {  }, 
        null, 
        ['PureCloud Auth'], 
        ['application/json'], 
        ['application/json']
      );
    };


    /**
     * Get a dialer campaign schedule.
     * 
     * @param {String} campaignId Campaign ID
     */
    this.getOutboundSchedulesCampaign = function(campaignId) { 

      // verify the required parameter 'campaignId' is set
      if (campaignId === undefined || campaignId === null) {
        throw "Missing the required parameter 'campaignId' when calling getOutboundSchedulesCampaign";
      }


      return this.apiClient.callApi(
        '/api/v2/outbound/schedules/campaigns/{campaignId}', 
        'GET', 
        { 'campaignId': campaignId }, 
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
     * Query for a list of dialer campaign schedules.
     * 
     */
    this.getOutboundSchedulesCampaigns = function() { 


      return this.apiClient.callApi(
        '/api/v2/outbound/schedules/campaigns', 
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
     * Get a dialer sequence schedule.
     * 
     * @param {String} sequenceId Sequence ID
     */
    this.getOutboundSchedulesSequence = function(sequenceId) { 

      // verify the required parameter 'sequenceId' is set
      if (sequenceId === undefined || sequenceId === null) {
        throw "Missing the required parameter 'sequenceId' when calling getOutboundSchedulesSequence";
      }


      return this.apiClient.callApi(
        '/api/v2/outbound/schedules/sequences/{sequenceId}', 
        'GET', 
        { 'sequenceId': sequenceId }, 
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
     * Query for a list of dialer sequence schedules.
     * 
     */
    this.getOutboundSchedulesSequences = function() { 


      return this.apiClient.callApi(
        '/api/v2/outbound/schedules/sequences', 
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
     * Get a dialer campaign sequence.
     * 
     * @param {String} sequenceId Campaign Sequence ID
     */
    this.getOutboundSequence = function(sequenceId) { 

      // verify the required parameter 'sequenceId' is set
      if (sequenceId === undefined || sequenceId === null) {
        throw "Missing the required parameter 'sequenceId' when calling getOutboundSequence";
      }


      return this.apiClient.callApi(
        '/api/v2/outbound/sequences/{sequenceId}', 
        'GET', 
        { 'sequenceId': sequenceId }, 
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
     * Query a list of dialer campaign sequences.
     * 
     * @param {Object} opts Optional parameters
     * @param {Number} opts.pageSize Page size (default to 25)
     * @param {Number} opts.pageNumber Page number (default to 1)
     * @param {Object} opts.filterType Filter type (default to Prefix)
     * @param {String} opts.name Name
     * @param {String} opts.sortBy Sort by
     * @param {Object} opts.sortOrder Sort order (default to a)
     */
    this.getOutboundSequences = function(opts) { 
      opts = opts || {};


      return this.apiClient.callApi(
        '/api/v2/outbound/sequences', 
        'GET', 
        {  }, 
        { 'pageSize': opts['pageSize'],'pageNumber': opts['pageNumber'],'filterType': opts['filterType'],'name': opts['name'],'sortBy': opts['sortBy'],'sortOrder': opts['sortOrder'] }, 
        {  }, 
        {  }, 
        null, 
        ['PureCloud Auth'], 
        ['application/json'], 
        ['application/json']
      );
    };


    /**
     * Get the outbound settings for this organization
     * 
     */
    this.getOutboundSettings = function() { 


      return this.apiClient.callApi(
        '/api/v2/outbound/settings', 
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
     * Get the Dialer wrap up code mapping.
     * 
     */
    this.getOutboundWrapupcodemappings = function() { 


      return this.apiClient.callApi(
        '/api/v2/outbound/wrapupcodemappings', 
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
     * Update the outbound settings for this organization
     * 
     * @param {Object} body outboundSettings
     */
    this.patchOutboundSettings = function(body) { 

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw "Missing the required parameter 'body' when calling patchOutboundSettings";
      }


      return this.apiClient.callApi(
        '/api/v2/outbound/settings', 
        'PATCH', 
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
     * Create attempt limits
     * 
     * @param {Object} body AttemptLimits
     */
    this.postOutboundAttemptlimits = function(body) { 

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw "Missing the required parameter 'body' when calling postOutboundAttemptlimits";
      }


      return this.apiClient.callApi(
        '/api/v2/outbound/attemptlimits', 
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
     * Retrieves audits for dialer.
     * 
     * @param {Object} body AuditSearch
     * @param {Object} opts Optional parameters
     * @param {Number} opts.pageSize Page size (default to 25)
     * @param {Number} opts.pageNumber Page number (default to 1)
     * @param {String} opts.sortBy Sort by (default to entity.name)
     * @param {String} opts.sortOrder Sort order (default to ascending)
     * @param {Boolean} opts.facetsOnly Facets only (default to false)
     */
    this.postOutboundAudits = function(body, opts) { 
      opts = opts || {};

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw "Missing the required parameter 'body' when calling postOutboundAudits";
      }


      return this.apiClient.callApi(
        '/api/v2/outbound/audits', 
        'POST', 
        {  }, 
        { 'pageSize': opts['pageSize'],'pageNumber': opts['pageNumber'],'sortBy': opts['sortBy'],'sortOrder': opts['sortOrder'],'facetsOnly': opts['facetsOnly'] }, 
        {  }, 
        {  }, 
        body, 
        ['PureCloud Auth'], 
        ['application/json'], 
        ['application/json']
      );
    };


    /**
     * Create callable time set
     * 
     * @param {Object} body DialerCallableTimeSet
     */
    this.postOutboundCallabletimesets = function(body) { 

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw "Missing the required parameter 'body' when calling postOutboundCallabletimesets";
      }


      return this.apiClient.callApi(
        '/api/v2/outbound/callabletimesets', 
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
     * Create a dialer call analysis response set.
     * 
     * @param {Object} body ResponseSet
     */
    this.postOutboundCallanalysisresponsesets = function(body) { 

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw "Missing the required parameter 'body' when calling postOutboundCallanalysisresponsesets";
      }


      return this.apiClient.callApi(
        '/api/v2/outbound/callanalysisresponsesets', 
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
     * Schedule a Callback for a Dialer Campaign (Deprecated)
     * This endpoint is deprecated and may have unexpected results. Please use \&quot;/conversations/{conversationId}/participants/{participantId}/callbacks instead.\&quot;
     * @param {String} campaignId Campaign ID
     * @param {Object} body ContactCallbackRequest
     */
    this.postOutboundCampaignCallbackSchedule = function(campaignId, body) { 

      // verify the required parameter 'campaignId' is set
      if (campaignId === undefined || campaignId === null) {
        throw "Missing the required parameter 'campaignId' when calling postOutboundCampaignCallbackSchedule";
      }

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw "Missing the required parameter 'body' when calling postOutboundCampaignCallbackSchedule";
      }


      return this.apiClient.callApi(
        '/api/v2/outbound/campaigns/{campaignId}/callback/schedule', 
        'POST', 
        { 'campaignId': campaignId }, 
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
     * Create Campaign Rule
     * 
     * @param {Object} body CampaignRule
     */
    this.postOutboundCampaignrules = function(body) { 

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw "Missing the required parameter 'body' when calling postOutboundCampaignrules";
      }


      return this.apiClient.callApi(
        '/api/v2/outbound/campaignrules', 
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
     * Create a campaign.
     * 
     * @param {Object} body Campaign
     */
    this.postOutboundCampaigns = function(body) { 

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw "Missing the required parameter 'body' when calling postOutboundCampaigns";
      }


      return this.apiClient.callApi(
        '/api/v2/outbound/campaigns', 
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
     * Get progress for a list of campaigns
     * 
     * @param {Array.<Object>} body Campaign IDs
     */
    this.postOutboundCampaignsProgress = function(body) { 

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw "Missing the required parameter 'body' when calling postOutboundCampaignsProgress";
      }


      return this.apiClient.callApi(
        '/api/v2/outbound/campaigns/progress', 
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
     * Add contacts to a contact list.
     * 
     * @param {String} contactListId Contact List ID
     * @param {Array.<Object>} body Contact
     * @param {Object} opts Optional parameters
     * @param {Boolean} opts.priority Contact priority.  True means the contact(s) will be dialed next, false means the contact will go to the end of the contact queue.
     * @param {Boolean} opts.clearSystemData Clear system data.  True means the system data stored on the contact will be cleared if the contact already exists (attempts, callable status, etc), false means it won&#39;t.
     */
    this.postOutboundContactlistContacts = function(contactListId, body, opts) { 
      opts = opts || {};

      // verify the required parameter 'contactListId' is set
      if (contactListId === undefined || contactListId === null) {
        throw "Missing the required parameter 'contactListId' when calling postOutboundContactlistContacts";
      }

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw "Missing the required parameter 'body' when calling postOutboundContactlistContacts";
      }


      return this.apiClient.callApi(
        '/api/v2/outbound/contactlists/{contactListId}/contacts', 
        'POST', 
        { 'contactListId': contactListId }, 
        { 'priority': opts['priority'],'clearSystemData': opts['clearSystemData'] }, 
        {  }, 
        {  }, 
        body, 
        ['PureCloud Auth'], 
        ['application/json'], 
        ['application/json']
      );
    };


    /**
     * Initiate the export of a contact list.
     * Returns 200 if received OK.
     * @param {String} contactListId ContactList ID
     */
    this.postOutboundContactlistExport = function(contactListId) { 

      // verify the required parameter 'contactListId' is set
      if (contactListId === undefined || contactListId === null) {
        throw "Missing the required parameter 'contactListId' when calling postOutboundContactlistExport";
      }


      return this.apiClient.callApi(
        '/api/v2/outbound/contactlists/{contactListId}/export', 
        'POST', 
        { 'contactListId': contactListId }, 
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
     * Create Contact List Filter
     * 
     * @param {Object} body ContactListFilter
     */
    this.postOutboundContactlistfilters = function(body) { 

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw "Missing the required parameter 'body' when calling postOutboundContactlistfilters";
      }


      return this.apiClient.callApi(
        '/api/v2/outbound/contactlistfilters', 
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
     * Get a preview of the output of a contact list filter
     * 
     * @param {Object} body ContactListFilter
     */
    this.postOutboundContactlistfiltersPreview = function(body) { 

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw "Missing the required parameter 'body' when calling postOutboundContactlistfiltersPreview";
      }


      return this.apiClient.callApi(
        '/api/v2/outbound/contactlistfilters/preview', 
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
     * Create a contact List.
     * 
     * @param {Object} body ContactList
     */
    this.postOutboundContactlists = function(body) { 

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw "Missing the required parameter 'body' when calling postOutboundContactlists";
      }


      return this.apiClient.callApi(
        '/api/v2/outbound/contactlists', 
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
     * Add phone numbers to a Dialer DNC list.
     * 
     * @param {String} conversationId Conversation ID
     */
    this.postOutboundConversationDnc = function(conversationId) { 

      // verify the required parameter 'conversationId' is set
      if (conversationId === undefined || conversationId === null) {
        throw "Missing the required parameter 'conversationId' when calling postOutboundConversationDnc";
      }


      return this.apiClient.callApi(
        '/api/v2/outbound/conversations/{conversationId}/dnc', 
        'POST', 
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
     * Initiate the export of a dnc list.
     * Returns 200 if received OK.
     * @param {String} dncListId DncList ID
     */
    this.postOutboundDnclistExport = function(dncListId) { 

      // verify the required parameter 'dncListId' is set
      if (dncListId === undefined || dncListId === null) {
        throw "Missing the required parameter 'dncListId' when calling postOutboundDnclistExport";
      }


      return this.apiClient.callApi(
        '/api/v2/outbound/dnclists/{dncListId}/export', 
        'POST', 
        { 'dncListId': dncListId }, 
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
     * Add phone numbers to a Dialer DNC list.
     * Only Internal DNC lists may be appended to
     * @param {String} dncListId DncList ID
     * @param {Array.<Object>} body DNC Phone Numbers
     */
    this.postOutboundDnclistPhonenumbers = function(dncListId, body) { 

      // verify the required parameter 'dncListId' is set
      if (dncListId === undefined || dncListId === null) {
        throw "Missing the required parameter 'dncListId' when calling postOutboundDnclistPhonenumbers";
      }

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw "Missing the required parameter 'body' when calling postOutboundDnclistPhonenumbers";
      }


      return this.apiClient.callApi(
        '/api/v2/outbound/dnclists/{dncListId}/phonenumbers', 
        'POST', 
        { 'dncListId': dncListId }, 
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
     * Create dialer DNC list
     * 
     * @param {Object} body DncList
     */
    this.postOutboundDnclists = function(body) { 

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw "Missing the required parameter 'body' when calling postOutboundDnclists";
      }


      return this.apiClient.callApi(
        '/api/v2/outbound/dnclists', 
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
     * Create a Dialer Call Analysis Response Set.
     * 
     * @param {Object} body RuleSet
     */
    this.postOutboundRulesets = function(body) { 

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw "Missing the required parameter 'body' when calling postOutboundRulesets";
      }


      return this.apiClient.callApi(
        '/api/v2/outbound/rulesets', 
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
     * Create a new campaign sequence.
     * 
     * @param {Object} body Organization
     */
    this.postOutboundSequences = function(body) { 

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw "Missing the required parameter 'body' when calling postOutboundSequences";
      }


      return this.apiClient.callApi(
        '/api/v2/outbound/sequences', 
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
     * Update attempt limits
     * 
     * @param {String} attemptLimitsId Attempt limits ID
     * @param {Object} body AttemptLimits
     */
    this.putOutboundAttemptlimit = function(attemptLimitsId, body) { 

      // verify the required parameter 'attemptLimitsId' is set
      if (attemptLimitsId === undefined || attemptLimitsId === null) {
        throw "Missing the required parameter 'attemptLimitsId' when calling putOutboundAttemptlimit";
      }

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw "Missing the required parameter 'body' when calling putOutboundAttemptlimit";
      }


      return this.apiClient.callApi(
        '/api/v2/outbound/attemptlimits/{attemptLimitsId}', 
        'PUT', 
        { 'attemptLimitsId': attemptLimitsId }, 
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
     * Update callable time set
     * 
     * @param {String} callableTimeSetId Callable Time Set ID
     * @param {Object} body DialerCallableTimeSet
     */
    this.putOutboundCallabletimeset = function(callableTimeSetId, body) { 

      // verify the required parameter 'callableTimeSetId' is set
      if (callableTimeSetId === undefined || callableTimeSetId === null) {
        throw "Missing the required parameter 'callableTimeSetId' when calling putOutboundCallabletimeset";
      }

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw "Missing the required parameter 'body' when calling putOutboundCallabletimeset";
      }


      return this.apiClient.callApi(
        '/api/v2/outbound/callabletimesets/{callableTimeSetId}', 
        'PUT', 
        { 'callableTimeSetId': callableTimeSetId }, 
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
     * Update a dialer call analysis response set.
     * 
     * @param {String} callAnalysisSetId Call Analysis Response Set ID
     * @param {Object} body ResponseSet
     */
    this.putOutboundCallanalysisresponseset = function(callAnalysisSetId, body) { 

      // verify the required parameter 'callAnalysisSetId' is set
      if (callAnalysisSetId === undefined || callAnalysisSetId === null) {
        throw "Missing the required parameter 'callAnalysisSetId' when calling putOutboundCallanalysisresponseset";
      }

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw "Missing the required parameter 'body' when calling putOutboundCallanalysisresponseset";
      }


      return this.apiClient.callApi(
        '/api/v2/outbound/callanalysisresponsesets/{callAnalysisSetId}', 
        'PUT', 
        { 'callAnalysisSetId': callAnalysisSetId }, 
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
     * Update a campaign.
     * 
     * @param {String} campaignId Campaign ID
     * @param {Object} body Campaign
     */
    this.putOutboundCampaign = function(campaignId, body) { 

      // verify the required parameter 'campaignId' is set
      if (campaignId === undefined || campaignId === null) {
        throw "Missing the required parameter 'campaignId' when calling putOutboundCampaign";
      }

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw "Missing the required parameter 'body' when calling putOutboundCampaign";
      }


      return this.apiClient.callApi(
        '/api/v2/outbound/campaigns/{campaignId}', 
        'PUT', 
        { 'campaignId': campaignId }, 
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
     * Send notification that an agent&#39;s state changed 
     * New agent state.
     * @param {String} campaignId Campaign ID
     * @param {String} userId Agent&#39;s user ID
     * @param {Object} body agent
     */
    this.putOutboundCampaignAgent = function(campaignId, userId, body) { 

      // verify the required parameter 'campaignId' is set
      if (campaignId === undefined || campaignId === null) {
        throw "Missing the required parameter 'campaignId' when calling putOutboundCampaignAgent";
      }

      // verify the required parameter 'userId' is set
      if (userId === undefined || userId === null) {
        throw "Missing the required parameter 'userId' when calling putOutboundCampaignAgent";
      }

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw "Missing the required parameter 'body' when calling putOutboundCampaignAgent";
      }


      return this.apiClient.callApi(
        '/api/v2/outbound/campaigns/{campaignId}/agents/{userId}', 
        'PUT', 
        { 'campaignId': campaignId,'userId': userId }, 
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
     * Update Campaign Rule
     * 
     * @param {String} campaignRuleId Campaign Rule ID
     * @param {Object} body CampaignRule
     */
    this.putOutboundCampaignrule = function(campaignRuleId, body) { 

      // verify the required parameter 'campaignRuleId' is set
      if (campaignRuleId === undefined || campaignRuleId === null) {
        throw "Missing the required parameter 'campaignRuleId' when calling putOutboundCampaignrule";
      }

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw "Missing the required parameter 'body' when calling putOutboundCampaignrule";
      }


      return this.apiClient.callApi(
        '/api/v2/outbound/campaignrules/{campaignRuleId}', 
        'PUT', 
        { 'campaignRuleId': campaignRuleId }, 
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
     * Update a contact list.
     * 
     * @param {String} contactListId ContactList ID
     * @param {Object} body ContactList
     */
    this.putOutboundContactlist = function(contactListId, body) { 

      // verify the required parameter 'contactListId' is set
      if (contactListId === undefined || contactListId === null) {
        throw "Missing the required parameter 'contactListId' when calling putOutboundContactlist";
      }

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw "Missing the required parameter 'body' when calling putOutboundContactlist";
      }


      return this.apiClient.callApi(
        '/api/v2/outbound/contactlists/{contactListId}', 
        'PUT', 
        { 'contactListId': contactListId }, 
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
     * Update a contact.
     * 
     * @param {String} contactListId Contact List ID
     * @param {String} contactId Contact ID
     * @param {Object} body Contact
     */
    this.putOutboundContactlistContact = function(contactListId, contactId, body) { 

      // verify the required parameter 'contactListId' is set
      if (contactListId === undefined || contactListId === null) {
        throw "Missing the required parameter 'contactListId' when calling putOutboundContactlistContact";
      }

      // verify the required parameter 'contactId' is set
      if (contactId === undefined || contactId === null) {
        throw "Missing the required parameter 'contactId' when calling putOutboundContactlistContact";
      }

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw "Missing the required parameter 'body' when calling putOutboundContactlistContact";
      }


      return this.apiClient.callApi(
        '/api/v2/outbound/contactlists/{contactListId}/contacts/{contactId}', 
        'PUT', 
        { 'contactListId': contactListId,'contactId': contactId }, 
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
     * Update Contact List Filter
     * 
     * @param {String} contactListFilterId Contact List Filter ID
     * @param {Object} body ContactListFilter
     */
    this.putOutboundContactlistfilter = function(contactListFilterId, body) { 

      // verify the required parameter 'contactListFilterId' is set
      if (contactListFilterId === undefined || contactListFilterId === null) {
        throw "Missing the required parameter 'contactListFilterId' when calling putOutboundContactlistfilter";
      }

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw "Missing the required parameter 'body' when calling putOutboundContactlistfilter";
      }


      return this.apiClient.callApi(
        '/api/v2/outbound/contactlistfilters/{contactListFilterId}', 
        'PUT', 
        { 'contactListFilterId': contactListFilterId }, 
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
     * Update dialer DNC list
     * 
     * @param {String} dncListId DncList ID
     * @param {Object} body DncList
     */
    this.putOutboundDnclist = function(dncListId, body) { 

      // verify the required parameter 'dncListId' is set
      if (dncListId === undefined || dncListId === null) {
        throw "Missing the required parameter 'dncListId' when calling putOutboundDnclist";
      }

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw "Missing the required parameter 'body' when calling putOutboundDnclist";
      }


      return this.apiClient.callApi(
        '/api/v2/outbound/dnclists/{dncListId}', 
        'PUT', 
        { 'dncListId': dncListId }, 
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
     * Update a RuleSet.
     * 
     * @param {String} ruleSetId Rule Set ID
     * @param {Object} body RuleSet
     */
    this.putOutboundRuleset = function(ruleSetId, body) { 

      // verify the required parameter 'ruleSetId' is set
      if (ruleSetId === undefined || ruleSetId === null) {
        throw "Missing the required parameter 'ruleSetId' when calling putOutboundRuleset";
      }

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw "Missing the required parameter 'body' when calling putOutboundRuleset";
      }


      return this.apiClient.callApi(
        '/api/v2/outbound/rulesets/{ruleSetId}', 
        'PUT', 
        { 'ruleSetId': ruleSetId }, 
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
     * Update a new campaign schedule.
     * 
     * @param {String} campaignId Campaign ID
     * @param {Object} body CampaignSchedule
     */
    this.putOutboundSchedulesCampaign = function(campaignId, body) { 

      // verify the required parameter 'campaignId' is set
      if (campaignId === undefined || campaignId === null) {
        throw "Missing the required parameter 'campaignId' when calling putOutboundSchedulesCampaign";
      }

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw "Missing the required parameter 'body' when calling putOutboundSchedulesCampaign";
      }


      return this.apiClient.callApi(
        '/api/v2/outbound/schedules/campaigns/{campaignId}', 
        'PUT', 
        { 'campaignId': campaignId }, 
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
     * Update a new sequence schedule.
     * 
     * @param {String} sequenceId Sequence ID
     * @param {Object} body SequenceSchedule
     */
    this.putOutboundSchedulesSequence = function(sequenceId, body) { 

      // verify the required parameter 'sequenceId' is set
      if (sequenceId === undefined || sequenceId === null) {
        throw "Missing the required parameter 'sequenceId' when calling putOutboundSchedulesSequence";
      }

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw "Missing the required parameter 'body' when calling putOutboundSchedulesSequence";
      }


      return this.apiClient.callApi(
        '/api/v2/outbound/schedules/sequences/{sequenceId}', 
        'PUT', 
        { 'sequenceId': sequenceId }, 
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
     * Update a new campaign sequence.
     * 
     * @param {String} sequenceId Campaign Sequence ID
     * @param {Object} body Organization
     */
    this.putOutboundSequence = function(sequenceId, body) { 

      // verify the required parameter 'sequenceId' is set
      if (sequenceId === undefined || sequenceId === null) {
        throw "Missing the required parameter 'sequenceId' when calling putOutboundSequence";
      }

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw "Missing the required parameter 'body' when calling putOutboundSequence";
      }


      return this.apiClient.callApi(
        '/api/v2/outbound/sequences/{sequenceId}', 
        'PUT', 
        { 'sequenceId': sequenceId }, 
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
     * Update the Dialer wrap up code mapping.
     * 
     * @param {Object} body wrapUpCodeMapping
     */
    this.putOutboundWrapupcodemappings = function(body) { 

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw "Missing the required parameter 'body' when calling putOutboundWrapupcodemappings";
      }


      return this.apiClient.callApi(
        '/api/v2/outbound/wrapupcodemappings', 
        'PUT', 
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
  };

  return exports;
}));
