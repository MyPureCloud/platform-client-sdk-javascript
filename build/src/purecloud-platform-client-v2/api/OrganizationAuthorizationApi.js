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
    root.platformClient.OrganizationAuthorizationApi = factory(root.platformClient.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * OrganizationAuthorization service.
   * @module purecloud-platform-client-v2/api/OrganizationAuthorizationApi
   * @version 17.0.0
   */

  /**
   * Constructs a new OrganizationAuthorizationApi. 
   * @alias module:purecloud-platform-client-v2/api/OrganizationAuthorizationApi
   * @class
   * @param {module:purecloud-platform-client-v2/ApiClient} apiClient Optional API client implementation to use,
   * default to {@link module:purecloud-platform-client-v2/ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;



    /**
     * Delete Org Trust
     * 
     * @param {String} trusteeOrgId Trustee Organization Id
     */
    this.deleteOrgauthorizationTrustee = function(trusteeOrgId) { 

      // verify the required parameter 'trusteeOrgId' is set
      if (trusteeOrgId === undefined || trusteeOrgId === null) {
        throw "Missing the required parameter 'trusteeOrgId' when calling deleteOrgauthorizationTrustee";
      }


      return this.apiClient.callApi(
        '/api/v2/orgauthorization/trustees/{trusteeOrgId}', 
        'DELETE', 
        { 'trusteeOrgId': trusteeOrgId }, 
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
     * Delete Trustee User
     * 
     * @param {String} trusteeOrgId Trustee Organization Id
     * @param {String} trusteeUserId Trustee User Id
     */
    this.deleteOrgauthorizationTrusteeUser = function(trusteeOrgId, trusteeUserId) { 

      // verify the required parameter 'trusteeOrgId' is set
      if (trusteeOrgId === undefined || trusteeOrgId === null) {
        throw "Missing the required parameter 'trusteeOrgId' when calling deleteOrgauthorizationTrusteeUser";
      }

      // verify the required parameter 'trusteeUserId' is set
      if (trusteeUserId === undefined || trusteeUserId === null) {
        throw "Missing the required parameter 'trusteeUserId' when calling deleteOrgauthorizationTrusteeUser";
      }


      return this.apiClient.callApi(
        '/api/v2/orgauthorization/trustees/{trusteeOrgId}/users/{trusteeUserId}', 
        'DELETE', 
        { 'trusteeOrgId': trusteeOrgId,'trusteeUserId': trusteeUserId }, 
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
     * Delete Trustee User Roles
     * 
     * @param {String} trusteeOrgId Trustee Organization Id
     * @param {String} trusteeUserId Trustee User Id
     */
    this.deleteOrgauthorizationTrusteeUserRoles = function(trusteeOrgId, trusteeUserId) { 

      // verify the required parameter 'trusteeOrgId' is set
      if (trusteeOrgId === undefined || trusteeOrgId === null) {
        throw "Missing the required parameter 'trusteeOrgId' when calling deleteOrgauthorizationTrusteeUserRoles";
      }

      // verify the required parameter 'trusteeUserId' is set
      if (trusteeUserId === undefined || trusteeUserId === null) {
        throw "Missing the required parameter 'trusteeUserId' when calling deleteOrgauthorizationTrusteeUserRoles";
      }


      return this.apiClient.callApi(
        '/api/v2/orgauthorization/trustees/{trusteeOrgId}/users/{trusteeUserId}/roles', 
        'DELETE', 
        { 'trusteeOrgId': trusteeOrgId,'trusteeUserId': trusteeUserId }, 
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
     * Delete Org Trust
     * 
     * @param {String} trustorOrgId Trustor Organization Id
     */
    this.deleteOrgauthorizationTrustor = function(trustorOrgId) { 

      // verify the required parameter 'trustorOrgId' is set
      if (trustorOrgId === undefined || trustorOrgId === null) {
        throw "Missing the required parameter 'trustorOrgId' when calling deleteOrgauthorizationTrustor";
      }


      return this.apiClient.callApi(
        '/api/v2/orgauthorization/trustors/{trustorOrgId}', 
        'DELETE', 
        { 'trustorOrgId': trustorOrgId }, 
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
     * Delete Trustee User
     * 
     * @param {String} trustorOrgId Trustor Organization Id
     * @param {String} trusteeUserId Trustee User Id
     */
    this.deleteOrgauthorizationTrustorUser = function(trustorOrgId, trusteeUserId) { 

      // verify the required parameter 'trustorOrgId' is set
      if (trustorOrgId === undefined || trustorOrgId === null) {
        throw "Missing the required parameter 'trustorOrgId' when calling deleteOrgauthorizationTrustorUser";
      }

      // verify the required parameter 'trusteeUserId' is set
      if (trusteeUserId === undefined || trusteeUserId === null) {
        throw "Missing the required parameter 'trusteeUserId' when calling deleteOrgauthorizationTrustorUser";
      }


      return this.apiClient.callApi(
        '/api/v2/orgauthorization/trustors/{trustorOrgId}/users/{trusteeUserId}', 
        'DELETE', 
        { 'trustorOrgId': trustorOrgId,'trusteeUserId': trusteeUserId }, 
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
     * Get Pairing Info
     * 
     * @param {String} pairingId Pairing Id
     */
    this.getOrgauthorizationPairing = function(pairingId) { 

      // verify the required parameter 'pairingId' is set
      if (pairingId === undefined || pairingId === null) {
        throw "Missing the required parameter 'pairingId' when calling getOrgauthorizationPairing";
      }


      return this.apiClient.callApi(
        '/api/v2/orgauthorization/pairings/{pairingId}', 
        'GET', 
        { 'pairingId': pairingId }, 
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
     * Get Org Trust
     * 
     * @param {String} trusteeOrgId Trustee Organization Id
     */
    this.getOrgauthorizationTrustee = function(trusteeOrgId) { 

      // verify the required parameter 'trusteeOrgId' is set
      if (trusteeOrgId === undefined || trusteeOrgId === null) {
        throw "Missing the required parameter 'trusteeOrgId' when calling getOrgauthorizationTrustee";
      }


      return this.apiClient.callApi(
        '/api/v2/orgauthorization/trustees/{trusteeOrgId}', 
        'GET', 
        { 'trusteeOrgId': trusteeOrgId }, 
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
     * Get Trustee User
     * 
     * @param {String} trusteeOrgId Trustee Organization Id
     * @param {String} trusteeUserId Trustee User Id
     */
    this.getOrgauthorizationTrusteeUser = function(trusteeOrgId, trusteeUserId) { 

      // verify the required parameter 'trusteeOrgId' is set
      if (trusteeOrgId === undefined || trusteeOrgId === null) {
        throw "Missing the required parameter 'trusteeOrgId' when calling getOrgauthorizationTrusteeUser";
      }

      // verify the required parameter 'trusteeUserId' is set
      if (trusteeUserId === undefined || trusteeUserId === null) {
        throw "Missing the required parameter 'trusteeUserId' when calling getOrgauthorizationTrusteeUser";
      }


      return this.apiClient.callApi(
        '/api/v2/orgauthorization/trustees/{trusteeOrgId}/users/{trusteeUserId}', 
        'GET', 
        { 'trusteeOrgId': trusteeOrgId,'trusteeUserId': trusteeUserId }, 
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
     * Get Trustee User Roles
     * 
     * @param {String} trusteeOrgId Trustee Organization Id
     * @param {String} trusteeUserId Trustee User Id
     */
    this.getOrgauthorizationTrusteeUserRoles = function(trusteeOrgId, trusteeUserId) { 

      // verify the required parameter 'trusteeOrgId' is set
      if (trusteeOrgId === undefined || trusteeOrgId === null) {
        throw "Missing the required parameter 'trusteeOrgId' when calling getOrgauthorizationTrusteeUserRoles";
      }

      // verify the required parameter 'trusteeUserId' is set
      if (trusteeUserId === undefined || trusteeUserId === null) {
        throw "Missing the required parameter 'trusteeUserId' when calling getOrgauthorizationTrusteeUserRoles";
      }


      return this.apiClient.callApi(
        '/api/v2/orgauthorization/trustees/{trusteeOrgId}/users/{trusteeUserId}/roles', 
        'GET', 
        { 'trusteeOrgId': trusteeOrgId,'trusteeUserId': trusteeUserId }, 
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
     * The list of trustee users for this organization (i.e. users granted access to this organization).
     * 
     * @param {String} trusteeOrgId Trustee Organization Id
     * @param {Object} opts Optional parameters
     * @param {Number} opts.pageSize Page size (default to 25)
     * @param {Number} opts.pageNumber Page number (default to 1)
     */
    this.getOrgauthorizationTrusteeUsers = function(trusteeOrgId, opts) { 
      opts = opts || {};

      // verify the required parameter 'trusteeOrgId' is set
      if (trusteeOrgId === undefined || trusteeOrgId === null) {
        throw "Missing the required parameter 'trusteeOrgId' when calling getOrgauthorizationTrusteeUsers";
      }


      return this.apiClient.callApi(
        '/api/v2/orgauthorization/trustees/{trusteeOrgId}/users', 
        'GET', 
        { 'trusteeOrgId': trusteeOrgId }, 
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
     * The list of trustees for this organization (i.e. organizations granted access to this organization).
     * 
     * @param {Object} opts Optional parameters
     * @param {Number} opts.pageSize Page size (default to 25)
     * @param {Number} opts.pageNumber Page number (default to 1)
     */
    this.getOrgauthorizationTrustees = function(opts) { 
      opts = opts || {};


      return this.apiClient.callApi(
        '/api/v2/orgauthorization/trustees', 
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
     * Get Org Trust
     * 
     * @param {String} trustorOrgId Trustor Organization Id
     */
    this.getOrgauthorizationTrustor = function(trustorOrgId) { 

      // verify the required parameter 'trustorOrgId' is set
      if (trustorOrgId === undefined || trustorOrgId === null) {
        throw "Missing the required parameter 'trustorOrgId' when calling getOrgauthorizationTrustor";
      }


      return this.apiClient.callApi(
        '/api/v2/orgauthorization/trustors/{trustorOrgId}', 
        'GET', 
        { 'trustorOrgId': trustorOrgId }, 
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
     * Get Trustee User
     * 
     * @param {String} trustorOrgId Trustor Organization Id
     * @param {String} trusteeUserId Trustee User Id
     */
    this.getOrgauthorizationTrustorUser = function(trustorOrgId, trusteeUserId) { 

      // verify the required parameter 'trustorOrgId' is set
      if (trustorOrgId === undefined || trustorOrgId === null) {
        throw "Missing the required parameter 'trustorOrgId' when calling getOrgauthorizationTrustorUser";
      }

      // verify the required parameter 'trusteeUserId' is set
      if (trusteeUserId === undefined || trusteeUserId === null) {
        throw "Missing the required parameter 'trusteeUserId' when calling getOrgauthorizationTrustorUser";
      }


      return this.apiClient.callApi(
        '/api/v2/orgauthorization/trustors/{trustorOrgId}/users/{trusteeUserId}', 
        'GET', 
        { 'trustorOrgId': trustorOrgId,'trusteeUserId': trusteeUserId }, 
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
     * The list of users in the trustor organization (i.e. users granted access).
     * 
     * @param {String} trustorOrgId Trustee Organization Id
     * @param {Object} opts Optional parameters
     * @param {Number} opts.pageSize Page size (default to 25)
     * @param {Number} opts.pageNumber Page number (default to 1)
     */
    this.getOrgauthorizationTrustorUsers = function(trustorOrgId, opts) { 
      opts = opts || {};

      // verify the required parameter 'trustorOrgId' is set
      if (trustorOrgId === undefined || trustorOrgId === null) {
        throw "Missing the required parameter 'trustorOrgId' when calling getOrgauthorizationTrustorUsers";
      }


      return this.apiClient.callApi(
        '/api/v2/orgauthorization/trustors/{trustorOrgId}/users', 
        'GET', 
        { 'trustorOrgId': trustorOrgId }, 
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
     * The list of organizations that have authorized/trusted your organization.
     * 
     * @param {Object} opts Optional parameters
     * @param {Number} opts.pageSize Page size (default to 25)
     * @param {Number} opts.pageNumber Page number (default to 1)
     */
    this.getOrgauthorizationTrustors = function(opts) { 
      opts = opts || {};


      return this.apiClient.callApi(
        '/api/v2/orgauthorization/trustors', 
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
     * A pairing id is created by the trustee and given to the trustor to create a trust.
     * 
     * @param {Object} body Pairing Info
     */
    this.postOrgauthorizationPairings = function(body) { 

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw "Missing the required parameter 'body' when calling postOrgauthorizationPairings";
      }


      return this.apiClient.callApi(
        '/api/v2/orgauthorization/pairings', 
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
     * Add a user to the trust.
     * 
     * @param {String} trusteeOrgId Trustee Organization Id
     * @param {Object} body Trust
     */
    this.postOrgauthorizationTrusteeUsers = function(trusteeOrgId, body) { 

      // verify the required parameter 'trusteeOrgId' is set
      if (trusteeOrgId === undefined || trusteeOrgId === null) {
        throw "Missing the required parameter 'trusteeOrgId' when calling postOrgauthorizationTrusteeUsers";
      }

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw "Missing the required parameter 'body' when calling postOrgauthorizationTrusteeUsers";
      }


      return this.apiClient.callApi(
        '/api/v2/orgauthorization/trustees/{trusteeOrgId}/users', 
        'POST', 
        { 'trusteeOrgId': trusteeOrgId }, 
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
     * Create a new organization authorization trust. This is required to grant other organizations access to your organization.
     * 
     * @param {Object} body Trust
     */
    this.postOrgauthorizationTrustees = function(body) { 

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw "Missing the required parameter 'body' when calling postOrgauthorizationTrustees";
      }


      return this.apiClient.callApi(
        '/api/v2/orgauthorization/trustees', 
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
     * Get Org Trustee Audits
     * 
     * @param {Object} body Values to scope the request.
     * @param {Object} opts Optional parameters
     * @param {Number} opts.pageSize Page size (default to 25)
     * @param {Number} opts.pageNumber Page number (default to 1)
     * @param {String} opts.sortBy Sort by (default to timestamp)
     * @param {String} opts.sortOrder Sort order (default to descending)
     */
    this.postOrgauthorizationTrusteesAudits = function(body, opts) { 
      opts = opts || {};

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw "Missing the required parameter 'body' when calling postOrgauthorizationTrusteesAudits";
      }


      return this.apiClient.callApi(
        '/api/v2/orgauthorization/trustees/audits', 
        'POST', 
        {  }, 
        { 'pageSize': opts['pageSize'],'pageNumber': opts['pageNumber'],'sortBy': opts['sortBy'],'sortOrder': opts['sortOrder'] }, 
        {  }, 
        {  }, 
        body, 
        ['PureCloud Auth'], 
        ['application/json'], 
        ['application/json']
      );
    };


    /**
     * Get Org Trustor Audits
     * 
     * @param {Object} body Values to scope the request.
     * @param {Object} opts Optional parameters
     * @param {Number} opts.pageSize Page size (default to 25)
     * @param {Number} opts.pageNumber Page number (default to 1)
     * @param {String} opts.sortBy Sort by (default to timestamp)
     * @param {String} opts.sortOrder Sort order (default to descending)
     */
    this.postOrgauthorizationTrustorAudits = function(body, opts) { 
      opts = opts || {};

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw "Missing the required parameter 'body' when calling postOrgauthorizationTrustorAudits";
      }


      return this.apiClient.callApi(
        '/api/v2/orgauthorization/trustor/audits', 
        'POST', 
        {  }, 
        { 'pageSize': opts['pageSize'],'pageNumber': opts['pageNumber'],'sortBy': opts['sortBy'],'sortOrder': opts['sortOrder'] }, 
        {  }, 
        {  }, 
        body, 
        ['PureCloud Auth'], 
        ['application/json'], 
        ['application/json']
      );
    };


    /**
     * Update Org Trust
     * 
     * @param {String} trusteeOrgId Trustee Organization Id
     * @param {Object} body Client
     */
    this.putOrgauthorizationTrustee = function(trusteeOrgId, body) { 

      // verify the required parameter 'trusteeOrgId' is set
      if (trusteeOrgId === undefined || trusteeOrgId === null) {
        throw "Missing the required parameter 'trusteeOrgId' when calling putOrgauthorizationTrustee";
      }

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw "Missing the required parameter 'body' when calling putOrgauthorizationTrustee";
      }


      return this.apiClient.callApi(
        '/api/v2/orgauthorization/trustees/{trusteeOrgId}', 
        'PUT', 
        { 'trusteeOrgId': trusteeOrgId }, 
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
     * Update Trustee User Roles
     * 
     * @param {String} trusteeOrgId Trustee Organization Id
     * @param {String} trusteeUserId Trustee User Id
     * @param {Array.<Object>} body List of roles
     */
    this.putOrgauthorizationTrusteeUserRoles = function(trusteeOrgId, trusteeUserId, body) { 

      // verify the required parameter 'trusteeOrgId' is set
      if (trusteeOrgId === undefined || trusteeOrgId === null) {
        throw "Missing the required parameter 'trusteeOrgId' when calling putOrgauthorizationTrusteeUserRoles";
      }

      // verify the required parameter 'trusteeUserId' is set
      if (trusteeUserId === undefined || trusteeUserId === null) {
        throw "Missing the required parameter 'trusteeUserId' when calling putOrgauthorizationTrusteeUserRoles";
      }

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw "Missing the required parameter 'body' when calling putOrgauthorizationTrusteeUserRoles";
      }


      return this.apiClient.callApi(
        '/api/v2/orgauthorization/trustees/{trusteeOrgId}/users/{trusteeUserId}/roles', 
        'PUT', 
        { 'trusteeOrgId': trusteeOrgId,'trusteeUserId': trusteeUserId }, 
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
     * Add a Trustee user to the trust.
     * 
     * @param {String} trustorOrgId Trustor Organization Id
     * @param {String} trusteeUserId Trustee User Id
     */
    this.putOrgauthorizationTrustorUser = function(trustorOrgId, trusteeUserId) { 

      // verify the required parameter 'trustorOrgId' is set
      if (trustorOrgId === undefined || trustorOrgId === null) {
        throw "Missing the required parameter 'trustorOrgId' when calling putOrgauthorizationTrustorUser";
      }

      // verify the required parameter 'trusteeUserId' is set
      if (trusteeUserId === undefined || trusteeUserId === null) {
        throw "Missing the required parameter 'trusteeUserId' when calling putOrgauthorizationTrustorUser";
      }


      return this.apiClient.callApi(
        '/api/v2/orgauthorization/trustors/{trustorOrgId}/users/{trusteeUserId}', 
        'PUT', 
        { 'trustorOrgId': trustorOrgId,'trusteeUserId': trusteeUserId }, 
        {  }, 
        {  }, 
        {  }, 
        null, 
        ['PureCloud Auth'], 
        ['application/json'], 
        ['application/json']
      );
    };
  };

  return exports;
}));
