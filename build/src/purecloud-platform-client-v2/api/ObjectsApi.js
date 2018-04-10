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
    root.platformClient.ObjectsApi = factory(root.platformClient.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * Objects service.
   * @module purecloud-platform-client-v2/api/ObjectsApi
   * @version 23.1.0
   */

  /**
   * Constructs a new ObjectsApi. 
   * @alias module:purecloud-platform-client-v2/api/ObjectsApi
   * @class
   * @param {module:purecloud-platform-client-v2/ApiClient} apiClient Optional API client implementation to use,
   * default to {@link module:purecloud-platform-client-v2/ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;



    /**
     * Returns the maximum allowed number of divisions.
     * 
     */
    this.getAuthorizationDivisionsLimit = function() { 


      return this.apiClient.callApi(
        '/api/v2/authorization/divisions/limit', 
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
     * Set the division of a list of objects. The objects must all be of the same type: CAMPAIGN, CONTACTLIST, DNCLIST, MANAGEMENTUNIT, FLOW, QUEUE, USER
     * 
     * @param {String} divisionId Division ID
     * @param {Object} objectType The type of the objects. Must be one of the valid object types
     * @param {Array.<Object>} body Object Id List
     */
    this.postAuthorizationDivisionObject = function(divisionId, objectType, body) { 

      // verify the required parameter 'divisionId' is set
      if (divisionId === undefined || divisionId === null) {
        throw "Missing the required parameter 'divisionId' when calling postAuthorizationDivisionObject";
      }

      // verify the required parameter 'objectType' is set
      if (objectType === undefined || objectType === null) {
        throw "Missing the required parameter 'objectType' when calling postAuthorizationDivisionObject";
      }

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw "Missing the required parameter 'body' when calling postAuthorizationDivisionObject";
      }


      return this.apiClient.callApi(
        '/api/v2/authorization/divisions/{divisionId}/objects/{objectType}', 
        'POST', 
        { 'divisionId': divisionId,'objectType': objectType }, 
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
