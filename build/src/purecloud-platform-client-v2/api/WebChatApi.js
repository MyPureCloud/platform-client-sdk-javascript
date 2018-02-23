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
    root.platformClient.WebChatApi = factory(root.platformClient.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * WebChat service.
   * @module purecloud-platform-client-v2/api/WebChatApi
   * @version 19.0.1
   */

  /**
   * Constructs a new WebChatApi. 
   * @alias module:purecloud-platform-client-v2/api/WebChatApi
   * @class
   * @param {module:purecloud-platform-client-v2/ApiClient} apiClient Optional API client implementation to use,
   * default to {@link module:purecloud-platform-client-v2/ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;



    /**
     * Delete a WebChat deployment
     * 
     * @param {String} deploymentId Deployment Id
     */
    this.deleteWebchatDeployment = function(deploymentId) { 

      // verify the required parameter 'deploymentId' is set
      if (deploymentId === undefined || deploymentId === null) {
        throw "Missing the required parameter 'deploymentId' when calling deleteWebchatDeployment";
      }


      return this.apiClient.callApi(
        '/api/v2/webchat/deployments/{deploymentId}', 
        'DELETE', 
        { 'deploymentId': deploymentId }, 
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
     * Remove WebChat deployment settings
     * 
     */
    this.deleteWebchatSettings = function() { 


      return this.apiClient.callApi(
        '/api/v2/webchat/settings', 
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
     * Get a WebChat deployment
     * 
     * @param {String} deploymentId Deployment Id
     */
    this.getWebchatDeployment = function(deploymentId) { 

      // verify the required parameter 'deploymentId' is set
      if (deploymentId === undefined || deploymentId === null) {
        throw "Missing the required parameter 'deploymentId' when calling getWebchatDeployment";
      }


      return this.apiClient.callApi(
        '/api/v2/webchat/deployments/{deploymentId}', 
        'GET', 
        { 'deploymentId': deploymentId }, 
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
     * List WebChat deployments
     * 
     */
    this.getWebchatDeployments = function() { 


      return this.apiClient.callApi(
        '/api/v2/webchat/deployments', 
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
     * Get WebChat deployment settings
     * 
     */
    this.getWebchatSettings = function() { 


      return this.apiClient.callApi(
        '/api/v2/webchat/settings', 
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
     * Create WebChat deployment
     * 
     * @param {Object} body Deployment
     */
    this.postWebchatDeployments = function(body) { 

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw "Missing the required parameter 'body' when calling postWebchatDeployments";
      }


      return this.apiClient.callApi(
        '/api/v2/webchat/deployments', 
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
     * Update a WebChat deployment
     * 
     * @param {String} deploymentId Deployment Id
     * @param {Object} body Deployment
     */
    this.putWebchatDeployment = function(deploymentId, body) { 

      // verify the required parameter 'deploymentId' is set
      if (deploymentId === undefined || deploymentId === null) {
        throw "Missing the required parameter 'deploymentId' when calling putWebchatDeployment";
      }

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw "Missing the required parameter 'body' when calling putWebchatDeployment";
      }


      return this.apiClient.callApi(
        '/api/v2/webchat/deployments/{deploymentId}', 
        'PUT', 
        { 'deploymentId': deploymentId }, 
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
     * Update WebChat deployment settings
     * 
     * @param {Object} body webChatSettings
     */
    this.putWebchatSettings = function(body) { 

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw "Missing the required parameter 'body' when calling putWebchatSettings";
      }


      return this.apiClient.callApi(
        '/api/v2/webchat/settings', 
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
