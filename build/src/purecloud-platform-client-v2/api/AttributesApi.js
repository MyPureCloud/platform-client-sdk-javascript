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
    root.platformClient.AttributesApi = factory(root.platformClient.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * Attributes service.
   * @module purecloud-platform-client-v2/api/AttributesApi
   * @version 23.2.0
   */

  /**
   * Constructs a new AttributesApi. 
   * @alias module:purecloud-platform-client-v2/api/AttributesApi
   * @class
   * @param {module:purecloud-platform-client-v2/ApiClient} apiClient Optional API client implementation to use,
   * default to {@link module:purecloud-platform-client-v2/ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;



    /**
     * Delete an existing Attribute.
     * This will remove attribute.
     * @param {String} attributeId Attribute ID
     */
    this.deleteAttribute = function(attributeId) { 

      // verify the required parameter 'attributeId' is set
      if (attributeId === undefined || attributeId === null) {
        throw "Missing the required parameter 'attributeId' when calling deleteAttribute";
      }


      return this.apiClient.callApi(
        '/api/v2/attributes/{attributeId}', 
        'DELETE', 
        { 'attributeId': attributeId }, 
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
     * Get details about an existing attribute.
     * 
     * @param {String} attributeId Attribute ID
     */
    this.getAttribute = function(attributeId) { 

      // verify the required parameter 'attributeId' is set
      if (attributeId === undefined || attributeId === null) {
        throw "Missing the required parameter 'attributeId' when calling getAttribute";
      }


      return this.apiClient.callApi(
        '/api/v2/attributes/{attributeId}', 
        'GET', 
        { 'attributeId': attributeId }, 
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
     * Gets a list of existing attributes.
     * 
     * @param {Object} opts Optional parameters
     * @param {Number} opts.pageNumber Page number (default to 1)
     * @param {Number} opts.pageSize Page size (default to 25)
     */
    this.getAttributes = function(opts) { 
      opts = opts || {};


      return this.apiClient.callApi(
        '/api/v2/attributes', 
        'GET', 
        {  }, 
        { 'pageNumber': opts['pageNumber'],'pageSize': opts['pageSize'] }, 
        {  }, 
        {  }, 
        null, 
        ['PureCloud Auth'], 
        ['application/json'], 
        ['application/json']
      );
    };


    /**
     * Create an attribute.
     * 
     * @param {Object} body Attribute
     */
    this.postAttributes = function(body) { 

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw "Missing the required parameter 'body' when calling postAttributes";
      }


      return this.apiClient.callApi(
        '/api/v2/attributes', 
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
     * Query attributes
     * 
     * @param {Object} body query
     */
    this.postAttributesQuery = function(body) { 

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw "Missing the required parameter 'body' when calling postAttributesQuery";
      }


      return this.apiClient.callApi(
        '/api/v2/attributes/query', 
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
     * Update an existing attribute.
     * Fields that can be updated: name, description. The most recent version is required for updates.
     * @param {String} attributeId Attribute ID
     * @param {Object} body Attribute
     */
    this.putAttribute = function(attributeId, body) { 

      // verify the required parameter 'attributeId' is set
      if (attributeId === undefined || attributeId === null) {
        throw "Missing the required parameter 'attributeId' when calling putAttribute";
      }

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw "Missing the required parameter 'body' when calling putAttribute";
      }


      return this.apiClient.callApi(
        '/api/v2/attributes/{attributeId}', 
        'PUT', 
        { 'attributeId': attributeId }, 
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
