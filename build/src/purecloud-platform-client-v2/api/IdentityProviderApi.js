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
    root.platformClient.IdentityProviderApi = factory(root.platformClient.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * IdentityProvider service.
   * @module purecloud-platform-client-v2/api/IdentityProviderApi
   * @version 7.0.0
   */

  /**
   * Constructs a new IdentityProviderApi. 
   * @alias module:purecloud-platform-client-v2/api/IdentityProviderApi
   * @class
   * @param {module:purecloud-platform-client-v2/ApiClient} apiClient Optional API client implementation to use,
   * default to {@link module:purecloud-platform-client-v2/ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;



    /**
     * Delete ADFS Identity Provider
     * 
     */
    this.deleteIdentityprovidersAdfs = function() { 


      return this.apiClient.callApi(
        '/api/v2/identityproviders/adfs', 
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
     * Delete Customer Interaction Center (CIC) Identity Provider
     * 
     */
    this.deleteIdentityprovidersCic = function() { 


      return this.apiClient.callApi(
        '/api/v2/identityproviders/cic', 
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
     * Delete G Suite Identity Provider
     * 
     */
    this.deleteIdentityprovidersGsuite = function() { 


      return this.apiClient.callApi(
        '/api/v2/identityproviders/gsuite', 
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
     * Delete IdentityNow Provider
     * 
     */
    this.deleteIdentityprovidersIdentitynow = function() { 


      return this.apiClient.callApi(
        '/api/v2/identityproviders/identitynow', 
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
     * Delete Okta Identity Provider
     * 
     */
    this.deleteIdentityprovidersOkta = function() { 


      return this.apiClient.callApi(
        '/api/v2/identityproviders/okta', 
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
     * Delete OneLogin Identity Provider
     * 
     */
    this.deleteIdentityprovidersOnelogin = function() { 


      return this.apiClient.callApi(
        '/api/v2/identityproviders/onelogin', 
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
     * Delete Ping Identity Provider
     * 
     */
    this.deleteIdentityprovidersPing = function() { 


      return this.apiClient.callApi(
        '/api/v2/identityproviders/ping', 
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
     * Delete PureCloud Identity Provider
     * 
     */
    this.deleteIdentityprovidersPurecloud = function() { 


      return this.apiClient.callApi(
        '/api/v2/identityproviders/purecloud', 
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
     * Delete Salesforce Identity Provider
     * 
     */
    this.deleteIdentityprovidersSalesforce = function() { 


      return this.apiClient.callApi(
        '/api/v2/identityproviders/salesforce', 
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
     * The list of identity providers
     * 
     */
    this.getIdentityproviders = function() { 


      return this.apiClient.callApi(
        '/api/v2/identityproviders', 
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
     * Get ADFS Identity Provider
     * 
     */
    this.getIdentityprovidersAdfs = function() { 


      return this.apiClient.callApi(
        '/api/v2/identityproviders/adfs', 
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
     * Get Customer Interaction Center (CIC) Identity Provider
     * 
     */
    this.getIdentityprovidersCic = function() { 


      return this.apiClient.callApi(
        '/api/v2/identityproviders/cic', 
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
     * Get G Suite Identity Provider
     * 
     */
    this.getIdentityprovidersGsuite = function() { 


      return this.apiClient.callApi(
        '/api/v2/identityproviders/gsuite', 
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
     * Get IdentityNow Provider
     * 
     */
    this.getIdentityprovidersIdentitynow = function() { 


      return this.apiClient.callApi(
        '/api/v2/identityproviders/identitynow', 
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
     * Get Okta Identity Provider
     * 
     */
    this.getIdentityprovidersOkta = function() { 


      return this.apiClient.callApi(
        '/api/v2/identityproviders/okta', 
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
     * Get OneLogin Identity Provider
     * 
     */
    this.getIdentityprovidersOnelogin = function() { 


      return this.apiClient.callApi(
        '/api/v2/identityproviders/onelogin', 
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
     * Get Ping Identity Provider
     * 
     */
    this.getIdentityprovidersPing = function() { 


      return this.apiClient.callApi(
        '/api/v2/identityproviders/ping', 
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
     * Get PureCloud Identity Provider
     * 
     */
    this.getIdentityprovidersPurecloud = function() { 


      return this.apiClient.callApi(
        '/api/v2/identityproviders/purecloud', 
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
     * Get Salesforce Identity Provider
     * 
     */
    this.getIdentityprovidersSalesforce = function() { 


      return this.apiClient.callApi(
        '/api/v2/identityproviders/salesforce', 
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
     * Update/Create ADFS Identity Provider
     * 
     * @param {module:purecloud-platform-client-v2/model/ADFS} body Provider
     */
    this.putIdentityprovidersAdfs = function(body) { 

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw "Missing the required parameter 'body' when calling putIdentityprovidersAdfs";
      }


      return this.apiClient.callApi(
        '/api/v2/identityproviders/adfs', 
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
     * Update/Create Customer Interaction Center (CIC) Identity Provider
     * 
     * @param {module:purecloud-platform-client-v2/model/CustomerInteractionCenter} body Provider
     */
    this.putIdentityprovidersCic = function(body) { 

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw "Missing the required parameter 'body' when calling putIdentityprovidersCic";
      }


      return this.apiClient.callApi(
        '/api/v2/identityproviders/cic', 
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
     * Update/Create G Suite Identity Provider
     * 
     * @param {module:purecloud-platform-client-v2/model/GSuite} body Provider
     */
    this.putIdentityprovidersGsuite = function(body) { 

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw "Missing the required parameter 'body' when calling putIdentityprovidersGsuite";
      }


      return this.apiClient.callApi(
        '/api/v2/identityproviders/gsuite', 
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
     * Update/Create IdentityNow Provider
     * 
     * @param {module:purecloud-platform-client-v2/model/IdentityNow} body Provider
     */
    this.putIdentityprovidersIdentitynow = function(body) { 

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw "Missing the required parameter 'body' when calling putIdentityprovidersIdentitynow";
      }


      return this.apiClient.callApi(
        '/api/v2/identityproviders/identitynow', 
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
     * Update/Create Okta Identity Provider
     * 
     * @param {module:purecloud-platform-client-v2/model/Okta} body Provider
     */
    this.putIdentityprovidersOkta = function(body) { 

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw "Missing the required parameter 'body' when calling putIdentityprovidersOkta";
      }


      return this.apiClient.callApi(
        '/api/v2/identityproviders/okta', 
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
     * Update/Create OneLogin Identity Provider
     * 
     * @param {module:purecloud-platform-client-v2/model/OneLogin} body Provider
     */
    this.putIdentityprovidersOnelogin = function(body) { 

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw "Missing the required parameter 'body' when calling putIdentityprovidersOnelogin";
      }


      return this.apiClient.callApi(
        '/api/v2/identityproviders/onelogin', 
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
     * Update/Create Ping Identity Provider
     * 
     * @param {module:purecloud-platform-client-v2/model/PingIdentity} body Provider
     */
    this.putIdentityprovidersPing = function(body) { 

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw "Missing the required parameter 'body' when calling putIdentityprovidersPing";
      }


      return this.apiClient.callApi(
        '/api/v2/identityproviders/ping', 
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
     * Update/Create PureCloud Identity Provider
     * 
     * @param {module:purecloud-platform-client-v2/model/PureCloud} body Provider
     */
    this.putIdentityprovidersPurecloud = function(body) { 

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw "Missing the required parameter 'body' when calling putIdentityprovidersPurecloud";
      }


      return this.apiClient.callApi(
        '/api/v2/identityproviders/purecloud', 
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
     * Update/Create Salesforce Identity Provider
     * 
     * @param {module:purecloud-platform-client-v2/model/Salesforce} body Provider
     */
    this.putIdentityprovidersSalesforce = function(body) { 

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw "Missing the required parameter 'body' when calling putIdentityprovidersSalesforce";
      }


      return this.apiClient.callApi(
        '/api/v2/identityproviders/salesforce', 
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
