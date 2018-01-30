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
    root.platformClient.LicenseApi = factory(root.platformClient.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * License service.
   * @module purecloud-platform-client-v2/api/LicenseApi
   * @version 17.0.0
   */

  /**
   * Constructs a new LicenseApi. 
   * @alias module:purecloud-platform-client-v2/api/LicenseApi
   * @class
   * @param {module:purecloud-platform-client-v2/ApiClient} apiClient Optional API client implementation to use,
   * default to {@link module:purecloud-platform-client-v2/ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;



    /**
     * Get PureCloud license definition.
     * 
     * @param {String} licenseId ID
     */
    this.getLicenseDefinition = function(licenseId) { 

      // verify the required parameter 'licenseId' is set
      if (licenseId === undefined || licenseId === null) {
        throw "Missing the required parameter 'licenseId' when calling getLicenseDefinition";
      }


      return this.apiClient.callApi(
        '/api/v2/license/definitions/{licenseId}', 
        'GET', 
        { 'licenseId': licenseId }, 
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
     * Get all PureCloud license definitions available for the organization.
     * 
     */
    this.getLicenseDefinitions = function() { 


      return this.apiClient.callApi(
        '/api/v2/license/definitions', 
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
     * Get license assignments for the organization.
     * 
     */
    this.getLicenseOrganization = function() { 


      return this.apiClient.callApi(
        '/api/v2/license/organization', 
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
     * Get PureCloud license feature toggle value.
     * 
     * @param {String} featureName featureName
     */
    this.getLicenseToggle = function(featureName) { 

      // verify the required parameter 'featureName' is set
      if (featureName === undefined || featureName === null) {
        throw "Missing the required parameter 'featureName' when calling getLicenseToggle";
      }


      return this.apiClient.callApi(
        '/api/v2/license/toggles/{featureName}', 
        'GET', 
        { 'featureName': featureName }, 
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
     * Get licenses for specified user.
     * 
     * @param {String} userId ID
     */
    this.getLicenseUser = function(userId) { 

      // verify the required parameter 'userId' is set
      if (userId === undefined || userId === null) {
        throw "Missing the required parameter 'userId' when calling getLicenseUser";
      }


      return this.apiClient.callApi(
        '/api/v2/license/users/{userId}', 
        'GET', 
        { 'userId': userId }, 
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
     * Update the organization&#39;s license assignments in a batch.
     * 
     * @param {Object} opts Optional parameters
     * @param {Object} opts.body The license assignments to update.
     */
    this.postLicenseOrganization = function(opts) { 
      opts = opts || {};


      return this.apiClient.callApi(
        '/api/v2/license/organization', 
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
     * Switch PureCloud license feature toggle value.
     * 
     * @param {String} featureName featureName
     */
    this.postLicenseToggle = function(featureName) { 

      // verify the required parameter 'featureName' is set
      if (featureName === undefined || featureName === null) {
        throw "Missing the required parameter 'featureName' when calling postLicenseToggle";
      }


      return this.apiClient.callApi(
        '/api/v2/license/toggles/{featureName}', 
        'POST', 
        { 'featureName': featureName }, 
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
     * Fetch user licenses in a batch.
     * 
     * @param {Object} opts Optional parameters
     * @param {Array.<Object>} opts.body The user IDs to fetch.
     */
    this.postLicenseUsers = function(opts) { 
      opts = opts || {};


      return this.apiClient.callApi(
        '/api/v2/license/users', 
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
  };

  return exports;
}));
