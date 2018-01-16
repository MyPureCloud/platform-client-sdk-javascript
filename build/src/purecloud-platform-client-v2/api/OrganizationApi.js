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
    root.platformClient.OrganizationApi = factory(root.platformClient.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * Organization service.
   * @module purecloud-platform-client-v2/api/OrganizationApi
   * @version 16.0.0
   */

  /**
   * Constructs a new OrganizationApi. 
   * @alias module:purecloud-platform-client-v2/api/OrganizationApi
   * @class
   * @param {module:purecloud-platform-client-v2/ApiClient} apiClient Optional API client implementation to use,
   * default to {@link module:purecloud-platform-client-v2/ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;



    /**
     * Fetch field config for an entity type
     * 
     * @param {Object} type Field type
     */
    this.getFieldconfig = function(type) { 

      // verify the required parameter 'type' is set
      if (type === undefined || type === null) {
        throw "Missing the required parameter 'type' when calling getFieldconfig";
      }


      return this.apiClient.callApi(
        '/api/v2/fieldconfig', 
        'GET', 
        {  }, 
        { 'type': type }, 
        {  }, 
        {  }, 
        null, 
        ['PureCloud Auth'], 
        ['application/json'], 
        ['application/json']
      );
    };


    /**
     * Get organization.
     * 
     */
    this.getOrganizationsMe = function() { 


      return this.apiClient.callApi(
        '/api/v2/organizations/me', 
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
     * Update organization
     * 
     * @param {Object} featureName Organization feature
     * @param {Object} enabled New state of feature
     */
    this.patchOrganizationsFeature = function(featureName, enabled) { 

      // verify the required parameter 'featureName' is set
      if (featureName === undefined || featureName === null) {
        throw "Missing the required parameter 'featureName' when calling patchOrganizationsFeature";
      }

      // verify the required parameter 'enabled' is set
      if (enabled === undefined || enabled === null) {
        throw "Missing the required parameter 'enabled' when calling patchOrganizationsFeature";
      }


      return this.apiClient.callApi(
        '/api/v2/organizations/features/{featureName}', 
        'PATCH', 
        { 'featureName': featureName }, 
        {  }, 
        {  }, 
        {  }, 
        enabled, 
        ['PureCloud Auth'], 
        ['application/json'], 
        ['application/json']
      );
    };


    /**
     * Update organization.
     * 
     * @param {Object} opts Optional parameters
     * @param {Object} opts.body Organization
     */
    this.putOrganizationsMe = function(opts) { 
      opts = opts || {};


      return this.apiClient.callApi(
        '/api/v2/organizations/me', 
        'PUT', 
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
  };

  return exports;
}));
