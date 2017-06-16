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
    root.platformClient.FaxApi = factory(root.platformClient.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * Fax service.
   * @module purecloud-platform-client-v2/api/FaxApi
   * @version 2.0.0
   */

  /**
   * Constructs a new FaxApi. 
   * @alias module:purecloud-platform-client-v2/api/FaxApi
   * @class
   * @param {module:purecloud-platform-client-v2/ApiClient} apiClient Optional API client implementation to use,
   * default to {@link module:purecloud-platform-client-v2/ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;



    /**
     * Delete a fax document.
     * 
     * @param {String} documentId Document ID
     */
    this.deleteFaxDocument = function(documentId) { 

      // verify the required parameter 'documentId' is set
      if (documentId === undefined || documentId === null) {
        throw "Missing the required parameter 'documentId' when calling deleteFaxDocument";
      }


      return this.apiClient.callApi(
        '/api/v2/fax/documents/{documentId}', 
        'DELETE', 
        { 'documentId': documentId }, 
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
     * Get a document.
     * 
     * @param {String} documentId Document ID
     */
    this.getFaxDocument = function(documentId) { 

      // verify the required parameter 'documentId' is set
      if (documentId === undefined || documentId === null) {
        throw "Missing the required parameter 'documentId' when calling getFaxDocument";
      }


      return this.apiClient.callApi(
        '/api/v2/fax/documents/{documentId}', 
        'GET', 
        { 'documentId': documentId }, 
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
     * Download a fax document.
     * 
     * @param {String} documentId Document ID
     */
    this.getFaxDocumentContent = function(documentId) { 

      // verify the required parameter 'documentId' is set
      if (documentId === undefined || documentId === null) {
        throw "Missing the required parameter 'documentId' when calling getFaxDocumentContent";
      }


      return this.apiClient.callApi(
        '/api/v2/fax/documents/{documentId}/content', 
        'GET', 
        { 'documentId': documentId }, 
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
     * Get a list of fax documents.
     * 
     * @param {Object} opts Optional parameters
     * @param {Number} opts.pageSize Page size (default to 25)
     * @param {Number} opts.pageNumber Page number (default to 1)
     */
    this.getFaxDocuments = function(opts) { 
      opts = opts || {};


      return this.apiClient.callApi(
        '/api/v2/fax/documents', 
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
     * Get fax summary
     * 
     */
    this.getFaxSummary = function() { 


      return this.apiClient.callApi(
        '/api/v2/fax/summary', 
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
     * Update a fax document.
     * 
     * @param {String} documentId Document ID
     * @param {module:purecloud-platform-client-v2/model/FaxDocument} body Document
     */
    this.putFaxDocument = function(documentId, body) { 

      // verify the required parameter 'documentId' is set
      if (documentId === undefined || documentId === null) {
        throw "Missing the required parameter 'documentId' when calling putFaxDocument";
      }

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw "Missing the required parameter 'body' when calling putFaxDocument";
      }


      return this.apiClient.callApi(
        '/api/v2/fax/documents/{documentId}', 
        'PUT', 
        { 'documentId': documentId }, 
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
