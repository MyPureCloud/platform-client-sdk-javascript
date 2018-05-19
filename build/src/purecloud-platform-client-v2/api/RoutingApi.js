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
    root.platformClient.RoutingApi = factory(root.platformClient.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * Routing service.
   * @module purecloud-platform-client-v2/api/RoutingApi
   * @version 26.0.0
   */

  /**
   * Constructs a new RoutingApi. 
   * @alias module:purecloud-platform-client-v2/api/RoutingApi
   * @class
   * @param {module:purecloud-platform-client-v2/ApiClient} apiClient Optional API client implementation to use,
   * default to {@link module:purecloud-platform-client-v2/ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;



    /**
     * Delete a domain
     * 
     * @param {String} domainId domain ID
     */
    this.deleteRoutingEmailDomain = function(domainId) { 

      // verify the required parameter 'domainId' is set
      if (domainId === undefined || domainId === null) {
        throw "Missing the required parameter 'domainId' when calling deleteRoutingEmailDomain";
      }


      return this.apiClient.callApi(
        '/api/v2/routing/email/domains/{domainId}', 
        'DELETE', 
        { 'domainId': domainId }, 
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
     * Delete a route
     * 
     * @param {String} domainName email domain
     * @param {String} routeId route ID
     */
    this.deleteRoutingEmailDomainRoute = function(domainName, routeId) { 

      // verify the required parameter 'domainName' is set
      if (domainName === undefined || domainName === null) {
        throw "Missing the required parameter 'domainName' when calling deleteRoutingEmailDomainRoute";
      }

      // verify the required parameter 'routeId' is set
      if (routeId === undefined || routeId === null) {
        throw "Missing the required parameter 'routeId' when calling deleteRoutingEmailDomainRoute";
      }


      return this.apiClient.callApi(
        '/api/v2/routing/email/domains/{domainName}/routes/{routeId}', 
        'DELETE', 
        { 'domainName': domainName,'routeId': routeId }, 
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
     * Delete a queue
     * 
     * @param {String} queueId Queue ID
     * @param {Object} opts Optional parameters
     * @param {Boolean} opts.forceDelete forceDelete
     */
    this.deleteRoutingQueue = function(queueId, opts) { 
      opts = opts || {};

      // verify the required parameter 'queueId' is set
      if (queueId === undefined || queueId === null) {
        throw "Missing the required parameter 'queueId' when calling deleteRoutingQueue";
      }


      return this.apiClient.callApi(
        '/api/v2/routing/queues/{queueId}', 
        'DELETE', 
        { 'queueId': queueId }, 
        { 'forceDelete': opts['forceDelete'] }, 
        {  }, 
        {  }, 
        null, 
        ['PureCloud Auth'], 
        ['application/json'], 
        ['application/json']
      );
    };


    /**
     * Delete queue member
     * 
     * @param {String} queueId Queue ID
     * @param {String} memberId Member ID
     */
    this.deleteRoutingQueueUser = function(queueId, memberId) { 

      // verify the required parameter 'queueId' is set
      if (queueId === undefined || queueId === null) {
        throw "Missing the required parameter 'queueId' when calling deleteRoutingQueueUser";
      }

      // verify the required parameter 'memberId' is set
      if (memberId === undefined || memberId === null) {
        throw "Missing the required parameter 'memberId' when calling deleteRoutingQueueUser";
      }


      return this.apiClient.callApi(
        '/api/v2/routing/queues/{queueId}/users/{memberId}', 
        'DELETE', 
        { 'queueId': queueId,'memberId': memberId }, 
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
     * Delete a wrap-up code from a queue
     * 
     * @param {String} queueId Queue ID
     * @param {String} codeId Code ID
     */
    this.deleteRoutingQueueWrapupcode = function(queueId, codeId) { 

      // verify the required parameter 'queueId' is set
      if (queueId === undefined || queueId === null) {
        throw "Missing the required parameter 'queueId' when calling deleteRoutingQueueWrapupcode";
      }

      // verify the required parameter 'codeId' is set
      if (codeId === undefined || codeId === null) {
        throw "Missing the required parameter 'codeId' when calling deleteRoutingQueueWrapupcode";
      }


      return this.apiClient.callApi(
        '/api/v2/routing/queues/{queueId}/wrapupcodes/{codeId}', 
        'DELETE', 
        { 'queueId': queueId,'codeId': codeId }, 
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
     * Delete Routing Skill
     * 
     * @param {String} skillId Skill ID
     */
    this.deleteRoutingSkill = function(skillId) { 

      // verify the required parameter 'skillId' is set
      if (skillId === undefined || skillId === null) {
        throw "Missing the required parameter 'skillId' when calling deleteRoutingSkill";
      }


      return this.apiClient.callApi(
        '/api/v2/routing/skills/{skillId}', 
        'DELETE', 
        { 'skillId': skillId }, 
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
     * Delete a phone number provisioned for SMS.
     * 
     * @param {String} addressId Address ID
     */
    this.deleteRoutingSmsPhonenumber = function(addressId) { 

      // verify the required parameter 'addressId' is set
      if (addressId === undefined || addressId === null) {
        throw "Missing the required parameter 'addressId' when calling deleteRoutingSmsPhonenumber";
      }


      return this.apiClient.callApi(
        '/api/v2/routing/sms/phonenumbers/{addressId}', 
        'DELETE', 
        { 'addressId': addressId }, 
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
     * Delete utilization settings and revert to system defaults.
     * 
     */
    this.deleteRoutingUtilization = function() { 


      return this.apiClient.callApi(
        '/api/v2/routing/utilization', 
        'DELETE', 
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
     * Delete wrap-up code
     * 
     * @param {String} codeId Wrapup Code ID
     */
    this.deleteRoutingWrapupcode = function(codeId) { 

      // verify the required parameter 'codeId' is set
      if (codeId === undefined || codeId === null) {
        throw "Missing the required parameter 'codeId' when calling deleteRoutingWrapupcode";
      }


      return this.apiClient.callApi(
        '/api/v2/routing/wrapupcodes/{codeId}', 
        'DELETE', 
        { 'codeId': codeId }, 
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
     * Remove routing language from user
     * 
     * @param {String} userId User ID
     * @param {String} languageId languageId
     */
    this.deleteUserRoutinglanguage = function(userId, languageId) { 

      // verify the required parameter 'userId' is set
      if (userId === undefined || userId === null) {
        throw "Missing the required parameter 'userId' when calling deleteUserRoutinglanguage";
      }

      // verify the required parameter 'languageId' is set
      if (languageId === undefined || languageId === null) {
        throw "Missing the required parameter 'languageId' when calling deleteUserRoutinglanguage";
      }


      return this.apiClient.callApi(
        '/api/v2/users/{userId}/routinglanguages/{languageId}', 
        'DELETE', 
        { 'userId': userId,'languageId': languageId }, 
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
     * Remove routing skill from user
     * 
     * @param {String} userId User ID
     * @param {String} skillId skillId
     */
    this.deleteUserRoutingskill = function(userId, skillId) { 

      // verify the required parameter 'userId' is set
      if (userId === undefined || userId === null) {
        throw "Missing the required parameter 'userId' when calling deleteUserRoutingskill";
      }

      // verify the required parameter 'skillId' is set
      if (skillId === undefined || skillId === null) {
        throw "Missing the required parameter 'skillId' when calling deleteUserRoutingskill";
      }


      return this.apiClient.callApi(
        '/api/v2/users/{userId}/routingskills/{skillId}', 
        'DELETE', 
        { 'userId': userId,'skillId': skillId }, 
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
     * Get domain
     * 
     * @param {String} domainId domain ID
     */
    this.getRoutingEmailDomain = function(domainId) { 

      // verify the required parameter 'domainId' is set
      if (domainId === undefined || domainId === null) {
        throw "Missing the required parameter 'domainId' when calling getRoutingEmailDomain";
      }


      return this.apiClient.callApi(
        '/api/v2/routing/email/domains/{domainId}', 
        'GET', 
        { 'domainId': domainId }, 
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
     * Get a route
     * 
     * @param {String} domainName email domain
     * @param {String} routeId route ID
     */
    this.getRoutingEmailDomainRoute = function(domainName, routeId) { 

      // verify the required parameter 'domainName' is set
      if (domainName === undefined || domainName === null) {
        throw "Missing the required parameter 'domainName' when calling getRoutingEmailDomainRoute";
      }

      // verify the required parameter 'routeId' is set
      if (routeId === undefined || routeId === null) {
        throw "Missing the required parameter 'routeId' when calling getRoutingEmailDomainRoute";
      }


      return this.apiClient.callApi(
        '/api/v2/routing/email/domains/{domainName}/routes/{routeId}', 
        'GET', 
        { 'domainName': domainName,'routeId': routeId }, 
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
     * Get routes
     * 
     * @param {String} domainName email domain
     * @param {Object} opts Optional parameters
     * @param {Number} opts.pageSize Page size (default to 25)
     * @param {Number} opts.pageNumber Page number (default to 1)
     * @param {String} opts.pattern Filter routes by the route&#39;s pattern property
     */
    this.getRoutingEmailDomainRoutes = function(domainName, opts) { 
      opts = opts || {};

      // verify the required parameter 'domainName' is set
      if (domainName === undefined || domainName === null) {
        throw "Missing the required parameter 'domainName' when calling getRoutingEmailDomainRoutes";
      }


      return this.apiClient.callApi(
        '/api/v2/routing/email/domains/{domainName}/routes', 
        'GET', 
        { 'domainName': domainName }, 
        { 'pageSize': opts['pageSize'],'pageNumber': opts['pageNumber'],'pattern': opts['pattern'] }, 
        {  }, 
        {  }, 
        null, 
        ['PureCloud Auth'], 
        ['application/json'], 
        ['application/json']
      );
    };


    /**
     * Get domains
     * 
     */
    this.getRoutingEmailDomains = function() { 


      return this.apiClient.callApi(
        '/api/v2/routing/email/domains', 
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
     * Get email setup
     * 
     */
    this.getRoutingEmailSetup = function() { 


      return this.apiClient.callApi(
        '/api/v2/routing/email/setup', 
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
     * Get the list of supported languages.
     * 
     * @param {Object} opts Optional parameters
     * @param {Number} opts.pageSize Page size (default to 25)
     * @param {Number} opts.pageNumber Page number (default to 1)
     * @param {Object} opts.sortOrder Ascending or descending sort order (default to ASC)
     * @param {String} opts.name Name
     */
    this.getRoutingLanguages = function(opts) { 
      opts = opts || {};


      return this.apiClient.callApi(
        '/api/v2/routing/languages', 
        'GET', 
        {  }, 
        { 'pageSize': opts['pageSize'],'pageNumber': opts['pageNumber'],'sortOrder': opts['sortOrder'],'name': opts['name'] }, 
        {  }, 
        {  }, 
        null, 
        ['PureCloud Auth'], 
        ['application/json'], 
        ['application/json']
      );
    };


    /**
     * Get a recipient
     * 
     * @param {String} recipientId Recipient ID
     */
    this.getRoutingMessageRecipient = function(recipientId) { 

      // verify the required parameter 'recipientId' is set
      if (recipientId === undefined || recipientId === null) {
        throw "Missing the required parameter 'recipientId' when calling getRoutingMessageRecipient";
      }


      return this.apiClient.callApi(
        '/api/v2/routing/message/recipients/{recipientId}', 
        'GET', 
        { 'recipientId': recipientId }, 
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
     * Get recipients
     * 
     * @param {Object} opts Optional parameters
     * @param {Number} opts.pageSize Page size (default to 25)
     * @param {Number} opts.pageNumber Page number (default to 1)
     */
    this.getRoutingMessageRecipients = function(opts) { 
      opts = opts || {};


      return this.apiClient.callApi(
        '/api/v2/routing/message/recipients', 
        'GET', 
        {  }, 
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
     * Get details about this queue.
     * 
     * @param {String} queueId Queue ID
     */
    this.getRoutingQueue = function(queueId) { 

      // verify the required parameter 'queueId' is set
      if (queueId === undefined || queueId === null) {
        throw "Missing the required parameter 'queueId' when calling getRoutingQueue";
      }


      return this.apiClient.callApi(
        '/api/v2/routing/queues/{queueId}', 
        'GET', 
        { 'queueId': queueId }, 
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
     * Get Estimated Wait Time
     * 
     * @param {String} queueId queueId
     * @param {Object} opts Optional parameters
     * @param {String} opts.conversationId conversationId
     */
    this.getRoutingQueueEstimatedwaittime = function(queueId, opts) { 
      opts = opts || {};

      // verify the required parameter 'queueId' is set
      if (queueId === undefined || queueId === null) {
        throw "Missing the required parameter 'queueId' when calling getRoutingQueueEstimatedwaittime";
      }


      return this.apiClient.callApi(
        '/api/v2/routing/queues/{queueId}/estimatedwaittime', 
        'GET', 
        { 'queueId': queueId }, 
        { 'conversationId': opts['conversationId'] }, 
        {  }, 
        {  }, 
        null, 
        ['PureCloud Auth'], 
        ['application/json'], 
        ['application/json']
      );
    };


    /**
     * Get Estimated Wait Time
     * 
     * @param {String} queueId queueId
     * @param {String} mediaType mediaType
     */
    this.getRoutingQueueMediatypeEstimatedwaittime = function(queueId, mediaType) { 

      // verify the required parameter 'queueId' is set
      if (queueId === undefined || queueId === null) {
        throw "Missing the required parameter 'queueId' when calling getRoutingQueueMediatypeEstimatedwaittime";
      }

      // verify the required parameter 'mediaType' is set
      if (mediaType === undefined || mediaType === null) {
        throw "Missing the required parameter 'mediaType' when calling getRoutingQueueMediatypeEstimatedwaittime";
      }


      return this.apiClient.callApi(
        '/api/v2/routing/queues/{queueId}/mediatypes/{mediaType}/estimatedwaittime', 
        'GET', 
        { 'queueId': queueId,'mediaType': mediaType }, 
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
     * Get the members of this queue
     * 
     * @param {String} queueId Queue ID
     * @param {Object} opts Optional parameters
     * @param {Number} opts.pageSize Page size (default to 25)
     * @param {Number} opts.pageNumber Page number (default to 1)
     * @param {String} opts.sortBy Sort by (default to name)
     * @param {Array.<String>} opts.expand Which fields, if any, to expand.
     * @param {Boolean} opts.joined Filter by joined status
     * @param {String} opts.name Filter by queue member name
     * @param {Array.<String>} opts.profileSkills Filter by profile skill
     * @param {Array.<String>} opts.skills Filter by skill
     * @param {Array.<String>} opts.languages Filter by language
     * @param {Array.<String>} opts.routingStatus Filter by routing status
     * @param {Array.<String>} opts.presence Filter by presence
     */
    this.getRoutingQueueUsers = function(queueId, opts) { 
      opts = opts || {};

      // verify the required parameter 'queueId' is set
      if (queueId === undefined || queueId === null) {
        throw "Missing the required parameter 'queueId' when calling getRoutingQueueUsers";
      }


      return this.apiClient.callApi(
        '/api/v2/routing/queues/{queueId}/users', 
        'GET', 
        { 'queueId': queueId }, 
        { 'pageSize': opts['pageSize'],'pageNumber': opts['pageNumber'],'sortBy': opts['sortBy'],'expand': this.apiClient.buildCollectionParam(opts['expand'], 'multi'),'joined': opts['joined'],'name': opts['name'],'profileSkills': this.apiClient.buildCollectionParam(opts['profileSkills'], 'multi'),'skills': this.apiClient.buildCollectionParam(opts['skills'], 'multi'),'languages': this.apiClient.buildCollectionParam(opts['languages'], 'multi'),'routingStatus': this.apiClient.buildCollectionParam(opts['routingStatus'], 'multi'),'presence': this.apiClient.buildCollectionParam(opts['presence'], 'multi') }, 
        {  }, 
        {  }, 
        null, 
        ['PureCloud Auth'], 
        ['application/json'], 
        ['application/json']
      );
    };


    /**
     * Get the wrap-up codes for a queue
     * 
     * @param {String} queueId Queue ID
     */
    this.getRoutingQueueWrapupcodes = function(queueId) { 

      // verify the required parameter 'queueId' is set
      if (queueId === undefined || queueId === null) {
        throw "Missing the required parameter 'queueId' when calling getRoutingQueueWrapupcodes";
      }


      return this.apiClient.callApi(
        '/api/v2/routing/queues/{queueId}/wrapupcodes', 
        'GET', 
        { 'queueId': queueId }, 
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
     * Get list of queues.
     * 
     * @param {Object} opts Optional parameters
     * @param {Number} opts.pageSize Page size (default to 25)
     * @param {Number} opts.pageNumber Page number (default to 1)
     * @param {String} opts.sortBy Sort by (default to name)
     * @param {String} opts.name Name
     * @param {Boolean} opts.active Active
     */
    this.getRoutingQueues = function(opts) { 
      opts = opts || {};


      return this.apiClient.callApi(
        '/api/v2/routing/queues', 
        'GET', 
        {  }, 
        { 'pageSize': opts['pageSize'],'pageNumber': opts['pageNumber'],'sortBy': opts['sortBy'],'name': opts['name'],'active': opts['active'] }, 
        {  }, 
        {  }, 
        null, 
        ['PureCloud Auth'], 
        ['application/json'], 
        ['application/json']
      );
    };


    /**
     * Get Routing Skill
     * 
     * @param {String} skillId Skill ID
     */
    this.getRoutingSkill = function(skillId) { 

      // verify the required parameter 'skillId' is set
      if (skillId === undefined || skillId === null) {
        throw "Missing the required parameter 'skillId' when calling getRoutingSkill";
      }


      return this.apiClient.callApi(
        '/api/v2/routing/skills/{skillId}', 
        'GET', 
        { 'skillId': skillId }, 
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
     * Get the list of routing skills.
     * 
     * @param {Object} opts Optional parameters
     * @param {Number} opts.pageSize Page size (default to 25)
     * @param {Number} opts.pageNumber Page number (default to 1)
     * @param {String} opts.name Filter for results that start with this value
     */
    this.getRoutingSkills = function(opts) { 
      opts = opts || {};


      return this.apiClient.callApi(
        '/api/v2/routing/skills', 
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
     * Get a list of available phone numbers for SMS provisioning.
     * This request will return up to 30 random phone numbers matching the criteria specified.  To get additional phone numbers repeat the request.
     * @param {String} countryCode The ISO 3166-1 alpha-2 country code of the county for which available phone numbers should be returned
     * @param {Object} phoneNumberType Type of available phone numbers searched
     * @param {Object} opts Optional parameters
     * @param {String} opts.region Region/province/state that can be used to restrict the numbers returned
     * @param {String} opts.city City that can be used to restrict the numbers returned
     * @param {String} opts.areaCode Area code that can be used to restrict the numbers returned
     * @param {String} opts.pattern A pattern to match phone numbers. Valid characters are &#39;*&#39; and [0-9a-zA-Z]. The &#39;*&#39; character will match any single digit.
     * @param {Object} opts.addressRequirement This indicates whether the phone number requires to have an Address registered.
     */
    this.getRoutingSmsAvailablephonenumbers = function(countryCode, phoneNumberType, opts) { 
      opts = opts || {};

      // verify the required parameter 'countryCode' is set
      if (countryCode === undefined || countryCode === null) {
        throw "Missing the required parameter 'countryCode' when calling getRoutingSmsAvailablephonenumbers";
      }

      // verify the required parameter 'phoneNumberType' is set
      if (phoneNumberType === undefined || phoneNumberType === null) {
        throw "Missing the required parameter 'phoneNumberType' when calling getRoutingSmsAvailablephonenumbers";
      }


      return this.apiClient.callApi(
        '/api/v2/routing/sms/availablephonenumbers', 
        'GET', 
        {  }, 
        { 'countryCode': countryCode,'region': opts['region'],'city': opts['city'],'areaCode': opts['areaCode'],'phoneNumberType': phoneNumberType,'pattern': opts['pattern'],'addressRequirement': opts['addressRequirement'] }, 
        {  }, 
        {  }, 
        null, 
        ['PureCloud Auth'], 
        ['application/json'], 
        ['application/json']
      );
    };


    /**
     * Get a phone number provisioned for SMS.
     * 
     * @param {String} addressId Address ID
     */
    this.getRoutingSmsPhonenumber = function(addressId) { 

      // verify the required parameter 'addressId' is set
      if (addressId === undefined || addressId === null) {
        throw "Missing the required parameter 'addressId' when calling getRoutingSmsPhonenumber";
      }


      return this.apiClient.callApi(
        '/api/v2/routing/sms/phonenumbers/{addressId}', 
        'GET', 
        { 'addressId': addressId }, 
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
     * Get a list of provisioned phone numbers.
     * 
     * @param {Object} opts Optional parameters
     * @param {String} opts.phoneNumber Filter on phone number address. Allowable characters are the digits &#39;0-9&#39; and the wild card character &#39;\\*&#39;. If just digits are present, a contains search is done on the address pattern. For example, &#39;317&#39; could be matched anywhere in the address. An &#39;\\*&#39; will match multiple digits. For example, to match a specific area code within the US a pattern like &#39;1317*&#39; could be used.
     * @param {Object} opts.phoneNumberType Filter on phone number type
     * @param {Object} opts.phoneNumberStatus Filter on phone number status
     * @param {Number} opts.pageSize Page size (default to 25)
     * @param {Number} opts.pageNumber Page number (default to 1)
     */
    this.getRoutingSmsPhonenumbers = function(opts) { 
      opts = opts || {};


      return this.apiClient.callApi(
        '/api/v2/routing/sms/phonenumbers', 
        'GET', 
        {  }, 
        { 'phoneNumber': opts['phoneNumber'],'phoneNumberType': opts['phoneNumberType'],'phoneNumberStatus': opts['phoneNumberStatus'],'pageSize': opts['pageSize'],'pageNumber': opts['pageNumber'] }, 
        {  }, 
        {  }, 
        null, 
        ['PureCloud Auth'], 
        ['application/json'], 
        ['application/json']
      );
    };


    /**
     * Get the utilization settings.
     * 
     */
    this.getRoutingUtilization = function() { 


      return this.apiClient.callApi(
        '/api/v2/routing/utilization', 
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
     * Get details about this wrap-up code.
     * 
     * @param {String} codeId Wrapup Code ID
     */
    this.getRoutingWrapupcode = function(codeId) { 

      // verify the required parameter 'codeId' is set
      if (codeId === undefined || codeId === null) {
        throw "Missing the required parameter 'codeId' when calling getRoutingWrapupcode";
      }


      return this.apiClient.callApi(
        '/api/v2/routing/wrapupcodes/{codeId}', 
        'GET', 
        { 'codeId': codeId }, 
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
     * Get list of wrapup codes.
     * 
     * @param {Object} opts Optional parameters
     * @param {Number} opts.pageSize Page size (default to 25)
     * @param {Number} opts.pageNumber Page number (default to 1)
     * @param {String} opts.name Name
     * @param {String} opts.sortBy Sort by (default to name)
     */
    this.getRoutingWrapupcodes = function(opts) { 
      opts = opts || {};


      return this.apiClient.callApi(
        '/api/v2/routing/wrapupcodes', 
        'GET', 
        {  }, 
        { 'pageSize': opts['pageSize'],'pageNumber': opts['pageNumber'],'name': opts['name'],'sortBy': opts['sortBy'] }, 
        {  }, 
        {  }, 
        null, 
        ['PureCloud Auth'], 
        ['application/json'], 
        ['application/json']
      );
    };


    /**
     * List routing language for user
     * 
     * @param {String} userId User ID
     * @param {Object} opts Optional parameters
     * @param {Number} opts.pageSize Page size (default to 25)
     * @param {Number} opts.pageNumber Page number (default to 1)
     * @param {Object} opts.sortOrder Ascending or descending sort order (default to ASC)
     */
    this.getUserRoutinglanguages = function(userId, opts) { 
      opts = opts || {};

      // verify the required parameter 'userId' is set
      if (userId === undefined || userId === null) {
        throw "Missing the required parameter 'userId' when calling getUserRoutinglanguages";
      }


      return this.apiClient.callApi(
        '/api/v2/users/{userId}/routinglanguages', 
        'GET', 
        { 'userId': userId }, 
        { 'pageSize': opts['pageSize'],'pageNumber': opts['pageNumber'],'sortOrder': opts['sortOrder'] }, 
        {  }, 
        {  }, 
        null, 
        ['PureCloud Auth'], 
        ['application/json'], 
        ['application/json']
      );
    };


    /**
     * List routing skills for user
     * 
     * @param {String} userId User ID
     * @param {Object} opts Optional parameters
     * @param {Number} opts.pageSize Page size (default to 25)
     * @param {Number} opts.pageNumber Page number (default to 1)
     * @param {Object} opts.sortOrder Ascending or descending sort order (default to ASC)
     */
    this.getUserRoutingskills = function(userId, opts) { 
      opts = opts || {};

      // verify the required parameter 'userId' is set
      if (userId === undefined || userId === null) {
        throw "Missing the required parameter 'userId' when calling getUserRoutingskills";
      }


      return this.apiClient.callApi(
        '/api/v2/users/{userId}/routingskills', 
        'GET', 
        { 'userId': userId }, 
        { 'pageSize': opts['pageSize'],'pageNumber': opts['pageNumber'],'sortOrder': opts['sortOrder'] }, 
        {  }, 
        {  }, 
        null, 
        ['PureCloud Auth'], 
        ['application/json'], 
        ['application/json']
      );
    };


    /**
     * Update the ring number of joined status for a User in a Queue
     * 
     * @param {String} queueId Queue ID
     * @param {String} memberId Member ID
     * @param {Object} body Queue Member
     */
    this.patchRoutingQueueUser = function(queueId, memberId, body) { 

      // verify the required parameter 'queueId' is set
      if (queueId === undefined || queueId === null) {
        throw "Missing the required parameter 'queueId' when calling patchRoutingQueueUser";
      }

      // verify the required parameter 'memberId' is set
      if (memberId === undefined || memberId === null) {
        throw "Missing the required parameter 'memberId' when calling patchRoutingQueueUser";
      }

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw "Missing the required parameter 'body' when calling patchRoutingQueueUser";
      }


      return this.apiClient.callApi(
        '/api/v2/routing/queues/{queueId}/users/{memberId}', 
        'PATCH', 
        { 'queueId': queueId,'memberId': memberId }, 
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
     * Join or unjoin a set of users for a queue
     * 
     * @param {String} queueId Queue ID
     * @param {Array.<Object>} body Queue Members
     */
    this.patchRoutingQueueUsers = function(queueId, body) { 

      // verify the required parameter 'queueId' is set
      if (queueId === undefined || queueId === null) {
        throw "Missing the required parameter 'queueId' when calling patchRoutingQueueUsers";
      }

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw "Missing the required parameter 'body' when calling patchRoutingQueueUsers";
      }


      return this.apiClient.callApi(
        '/api/v2/routing/queues/{queueId}/users', 
        'PATCH', 
        { 'queueId': queueId }, 
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
     * Update routing language proficiency or state.
     * 
     * @param {String} userId User ID
     * @param {String} languageId languageId
     * @param {Object} body Language
     */
    this.patchUserRoutinglanguage = function(userId, languageId, body) { 

      // verify the required parameter 'userId' is set
      if (userId === undefined || userId === null) {
        throw "Missing the required parameter 'userId' when calling patchUserRoutinglanguage";
      }

      // verify the required parameter 'languageId' is set
      if (languageId === undefined || languageId === null) {
        throw "Missing the required parameter 'languageId' when calling patchUserRoutinglanguage";
      }

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw "Missing the required parameter 'body' when calling patchUserRoutinglanguage";
      }


      return this.apiClient.callApi(
        '/api/v2/users/{userId}/routinglanguages/{languageId}', 
        'PATCH', 
        { 'userId': userId,'languageId': languageId }, 
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
     * Query for queue observations
     * 
     * @param {Object} body query
     */
    this.postAnalyticsQueuesObservationsQuery = function(body) { 

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw "Missing the required parameter 'body' when calling postAnalyticsQueuesObservationsQuery";
      }


      return this.apiClient.callApi(
        '/api/v2/analytics/queues/observations/query', 
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
     * Create a route
     * 
     * @param {String} domainName email domain
     * @param {Object} body Route
     */
    this.postRoutingEmailDomainRoutes = function(domainName, body) { 

      // verify the required parameter 'domainName' is set
      if (domainName === undefined || domainName === null) {
        throw "Missing the required parameter 'domainName' when calling postRoutingEmailDomainRoutes";
      }

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw "Missing the required parameter 'body' when calling postRoutingEmailDomainRoutes";
      }


      return this.apiClient.callApi(
        '/api/v2/routing/email/domains/{domainName}/routes', 
        'POST', 
        { 'domainName': domainName }, 
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
     * Create a domain
     * 
     * @param {Object} body Domain
     */
    this.postRoutingEmailDomains = function(body) { 

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw "Missing the required parameter 'body' when calling postRoutingEmailDomains";
      }


      return this.apiClient.callApi(
        '/api/v2/routing/email/domains', 
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
     * Create Language
     * 
     * @param {Object} body Language
     */
    this.postRoutingLanguages = function(body) { 

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw "Missing the required parameter 'body' when calling postRoutingLanguages";
      }


      return this.apiClient.callApi(
        '/api/v2/routing/languages', 
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
     * Bulk add or delete up to 100 queue members
     * 
     * @param {String} queueId Queue ID
     * @param {Array.<Object>} body Queue Members
     * @param {Object} opts Optional parameters
     * @param {Boolean} opts._delete True to delete queue members (default to false)
     */
    this.postRoutingQueueUsers = function(queueId, body, opts) { 
      opts = opts || {};

      // verify the required parameter 'queueId' is set
      if (queueId === undefined || queueId === null) {
        throw "Missing the required parameter 'queueId' when calling postRoutingQueueUsers";
      }

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw "Missing the required parameter 'body' when calling postRoutingQueueUsers";
      }


      return this.apiClient.callApi(
        '/api/v2/routing/queues/{queueId}/users', 
        'POST', 
        { 'queueId': queueId }, 
        { 'delete': opts['_delete'] }, 
        {  }, 
        {  }, 
        body, 
        ['PureCloud Auth'], 
        ['application/json'], 
        ['application/json']
      );
    };


    /**
     * Add up to 100 wrap-up codes to a queue
     * 
     * @param {String} queueId Queue ID
     * @param {Array.<Object>} body List of wrapup codes
     */
    this.postRoutingQueueWrapupcodes = function(queueId, body) { 

      // verify the required parameter 'queueId' is set
      if (queueId === undefined || queueId === null) {
        throw "Missing the required parameter 'queueId' when calling postRoutingQueueWrapupcodes";
      }

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw "Missing the required parameter 'body' when calling postRoutingQueueWrapupcodes";
      }


      return this.apiClient.callApi(
        '/api/v2/routing/queues/{queueId}/wrapupcodes', 
        'POST', 
        { 'queueId': queueId }, 
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
     * Create queue
     * 
     * @param {Object} body Queue
     */
    this.postRoutingQueues = function(body) { 

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw "Missing the required parameter 'body' when calling postRoutingQueues";
      }


      return this.apiClient.callApi(
        '/api/v2/routing/queues', 
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
     * Create Skill
     * 
     * @param {Object} body Skill
     */
    this.postRoutingSkills = function(body) { 

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw "Missing the required parameter 'body' when calling postRoutingSkills";
      }


      return this.apiClient.callApi(
        '/api/v2/routing/skills', 
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
     * Provision an Address for SMS
     * 
     * @param {Object} body SmsAddress
     */
    this.postRoutingSmsAddresses = function(body) { 

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw "Missing the required parameter 'body' when calling postRoutingSmsAddresses";
      }


      return this.apiClient.callApi(
        '/api/v2/routing/sms/addresses', 
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
     * Provision a phone number for SMS
     * 
     * @param {Object} body SmsPhoneNumber
     */
    this.postRoutingSmsPhonenumbers = function(body) { 

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw "Missing the required parameter 'body' when calling postRoutingSmsPhonenumbers";
      }


      return this.apiClient.callApi(
        '/api/v2/routing/sms/phonenumbers', 
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
     * Create a wrap-up code
     * 
     * @param {Object} body WrapupCode
     */
    this.postRoutingWrapupcodes = function(body) { 

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw "Missing the required parameter 'body' when calling postRoutingWrapupcodes";
      }


      return this.apiClient.callApi(
        '/api/v2/routing/wrapupcodes', 
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
     * Add routing language to user
     * 
     * @param {String} userId User ID
     * @param {Object} body Language
     */
    this.postUserRoutinglanguages = function(userId, body) { 

      // verify the required parameter 'userId' is set
      if (userId === undefined || userId === null) {
        throw "Missing the required parameter 'userId' when calling postUserRoutinglanguages";
      }

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw "Missing the required parameter 'body' when calling postUserRoutinglanguages";
      }


      return this.apiClient.callApi(
        '/api/v2/users/{userId}/routinglanguages', 
        'POST', 
        { 'userId': userId }, 
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
     * Add routing skill to user
     * 
     * @param {String} userId User ID
     * @param {Object} body Skill
     */
    this.postUserRoutingskills = function(userId, body) { 

      // verify the required parameter 'userId' is set
      if (userId === undefined || userId === null) {
        throw "Missing the required parameter 'userId' when calling postUserRoutingskills";
      }

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw "Missing the required parameter 'body' when calling postUserRoutingskills";
      }


      return this.apiClient.callApi(
        '/api/v2/users/{userId}/routingskills', 
        'POST', 
        { 'userId': userId }, 
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
     * Update a route
     * 
     * @param {String} domainName email domain
     * @param {String} routeId route ID
     * @param {Object} body Route
     */
    this.putRoutingEmailDomainRoute = function(domainName, routeId, body) { 

      // verify the required parameter 'domainName' is set
      if (domainName === undefined || domainName === null) {
        throw "Missing the required parameter 'domainName' when calling putRoutingEmailDomainRoute";
      }

      // verify the required parameter 'routeId' is set
      if (routeId === undefined || routeId === null) {
        throw "Missing the required parameter 'routeId' when calling putRoutingEmailDomainRoute";
      }

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw "Missing the required parameter 'body' when calling putRoutingEmailDomainRoute";
      }


      return this.apiClient.callApi(
        '/api/v2/routing/email/domains/{domainName}/routes/{routeId}', 
        'PUT', 
        { 'domainName': domainName,'routeId': routeId }, 
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
     * Update a recipient
     * 
     * @param {String} recipientId Recipient ID
     * @param {Object} body Recipient
     */
    this.putRoutingMessageRecipient = function(recipientId, body) { 

      // verify the required parameter 'recipientId' is set
      if (recipientId === undefined || recipientId === null) {
        throw "Missing the required parameter 'recipientId' when calling putRoutingMessageRecipient";
      }

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw "Missing the required parameter 'body' when calling putRoutingMessageRecipient";
      }


      return this.apiClient.callApi(
        '/api/v2/routing/message/recipients/{recipientId}', 
        'PUT', 
        { 'recipientId': recipientId }, 
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
     * Update a queue
     * 
     * @param {String} queueId Queue ID
     * @param {Object} body Queue
     */
    this.putRoutingQueue = function(queueId, body) { 

      // verify the required parameter 'queueId' is set
      if (queueId === undefined || queueId === null) {
        throw "Missing the required parameter 'queueId' when calling putRoutingQueue";
      }

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw "Missing the required parameter 'body' when calling putRoutingQueue";
      }


      return this.apiClient.callApi(
        '/api/v2/routing/queues/{queueId}', 
        'PUT', 
        { 'queueId': queueId }, 
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
     * Update a phone number provisioned for SMS.
     * 
     * @param {String} addressId Address ID
     * @param {Object} body SmsPhoneNumber
     */
    this.putRoutingSmsPhonenumber = function(addressId, body) { 

      // verify the required parameter 'addressId' is set
      if (addressId === undefined || addressId === null) {
        throw "Missing the required parameter 'addressId' when calling putRoutingSmsPhonenumber";
      }

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw "Missing the required parameter 'body' when calling putRoutingSmsPhonenumber";
      }


      return this.apiClient.callApi(
        '/api/v2/routing/sms/phonenumbers/{addressId}', 
        'PUT', 
        { 'addressId': addressId }, 
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
     * Update the utilization settings.
     * 
     * @param {Object} body utilization
     */
    this.putRoutingUtilization = function(body) { 

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw "Missing the required parameter 'body' when calling putRoutingUtilization";
      }


      return this.apiClient.callApi(
        '/api/v2/routing/utilization', 
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


    /**
     * Update wrap-up code
     * 
     * @param {String} codeId Wrapup Code ID
     * @param {Object} body WrapupCode
     */
    this.putRoutingWrapupcode = function(codeId, body) { 

      // verify the required parameter 'codeId' is set
      if (codeId === undefined || codeId === null) {
        throw "Missing the required parameter 'codeId' when calling putRoutingWrapupcode";
      }

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw "Missing the required parameter 'body' when calling putRoutingWrapupcode";
      }


      return this.apiClient.callApi(
        '/api/v2/routing/wrapupcodes/{codeId}', 
        'PUT', 
        { 'codeId': codeId }, 
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
     * Update routing skill proficiency or state.
     * 
     * @param {String} userId User ID
     * @param {String} skillId skillId
     * @param {Object} body Skill
     */
    this.putUserRoutingskill = function(userId, skillId, body) { 

      // verify the required parameter 'userId' is set
      if (userId === undefined || userId === null) {
        throw "Missing the required parameter 'userId' when calling putUserRoutingskill";
      }

      // verify the required parameter 'skillId' is set
      if (skillId === undefined || skillId === null) {
        throw "Missing the required parameter 'skillId' when calling putUserRoutingskill";
      }

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw "Missing the required parameter 'body' when calling putUserRoutingskill";
      }


      return this.apiClient.callApi(
        '/api/v2/users/{userId}/routingskills/{skillId}', 
        'PUT', 
        { 'userId': userId,'skillId': skillId }, 
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
