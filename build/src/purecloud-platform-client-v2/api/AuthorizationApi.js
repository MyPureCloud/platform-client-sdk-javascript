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
    root.platformClient.AuthorizationApi = factory(root.platformClient.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * Authorization service.
   * @module purecloud-platform-client-v2/api/AuthorizationApi
   * @version 2.0.7
   */

  /**
   * Constructs a new AuthorizationApi. 
   * @alias module:purecloud-platform-client-v2/api/AuthorizationApi
   * @class
   * @param {module:purecloud-platform-client-v2/ApiClient} apiClient Optional API client implementation to use,
   * default to {@link module:purecloud-platform-client-v2/ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;



    /**
     * Delete an organization role.
     * 
     * @param {String} roleId Role ID
     */
    this.deleteAuthorizationRole = function(roleId) { 

      // verify the required parameter 'roleId' is set
      if (roleId === undefined || roleId === null) {
        throw "Missing the required parameter 'roleId' when calling deleteAuthorizationRole";
      }


      return this.apiClient.callApi(
        '/api/v2/authorization/roles/{roleId}', 
        'DELETE', 
        { 'roleId': roleId }, 
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
     * Removes all the roles from the user.
     * 
     * @param {String} userId User ID
     */
    this.deleteUserRoles = function(userId) { 

      // verify the required parameter 'userId' is set
      if (userId === undefined || userId === null) {
        throw "Missing the required parameter 'userId' when calling deleteUserRoles";
      }


      return this.apiClient.callApi(
        '/api/v2/users/{userId}/roles', 
        'DELETE', 
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
     * Get all permissions.
     * Retrieve a list of all permission defined in the system.
     * @param {Object} opts Optional parameters
     * @param {Number} opts.pageSize Page size (default to 25)
     * @param {Number} opts.pageNumber Page number (default to 1)
     */
    this.getAuthorizationPermissions = function(opts) { 
      opts = opts || {};


      return this.apiClient.callApi(
        '/api/v2/authorization/permissions', 
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
     * Get the list of enabled products
     * Gets the list of enabled products. Some example product names are: collaborateFree, collaboratePro, communicate, and engage.
     */
    this.getAuthorizationProducts = function() { 


      return this.apiClient.callApi(
        '/api/v2/authorization/products', 
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
     * Get a single organization role.
     * Get the organization role specified by its ID.
     * @param {String} roleId Role ID
     */
    this.getAuthorizationRole = function(roleId) { 

      // verify the required parameter 'roleId' is set
      if (roleId === undefined || roleId === null) {
        throw "Missing the required parameter 'roleId' when calling getAuthorizationRole";
      }


      return this.apiClient.callApi(
        '/api/v2/authorization/roles/{roleId}', 
        'GET', 
        { 'roleId': roleId }, 
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
     * Get an org role to default role comparison comparison
     * Compares any organization role to a default role id and show differences
     * @param {String} leftRoleId Left Role ID
     * @param {String} rightRoleId Right Role id
     */
    this.getAuthorizationRoleComparedefaultRightRoleId = function(leftRoleId, rightRoleId) { 

      // verify the required parameter 'leftRoleId' is set
      if (leftRoleId === undefined || leftRoleId === null) {
        throw "Missing the required parameter 'leftRoleId' when calling getAuthorizationRoleComparedefaultRightRoleId";
      }

      // verify the required parameter 'rightRoleId' is set
      if (rightRoleId === undefined || rightRoleId === null) {
        throw "Missing the required parameter 'rightRoleId' when calling getAuthorizationRoleComparedefaultRightRoleId";
      }


      return this.apiClient.callApi(
        '/api/v2/authorization/roles/{leftRoleId}/comparedefault/{rightRoleId}', 
        'GET', 
        { 'leftRoleId': leftRoleId,'rightRoleId': rightRoleId }, 
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
     * Retrieve a list of all roles defined for the organization
     * 
     * @param {Object} opts Optional parameters
     * @param {Number} opts.pageSize The total page size requested (default to 25)
     * @param {Number} opts.pageNumber The page number requested (default to 1)
     * @param {String} opts.sortBy variable name requested to sort by
     * @param {Array.<Object>} opts.expand variable name requested by expand list
     * @param {String} opts.nextPage next page token
     * @param {String} opts.previousPage Previous page token
     * @param {Array.<Object>} opts.permission 
     * @param {Array.<Object>} opts.defaultRoleId 
     * @param {Boolean} opts.userCount  (default to true)
     */
    this.getAuthorizationRoles = function(opts) { 
      opts = opts || {};


      return this.apiClient.callApi(
        '/api/v2/authorization/roles', 
        'GET', 
        {  }, 
        { 'pageSize': opts['pageSize'],'pageNumber': opts['pageNumber'],'sortBy': opts['sortBy'],'expand': this.apiClient.buildCollectionParam(opts['expand'], 'multi'),'nextPage': opts['nextPage'],'previousPage': opts['previousPage'],'permission': this.apiClient.buildCollectionParam(opts['permission'], 'multi'),'defaultRoleId': this.apiClient.buildCollectionParam(opts['defaultRoleId'], 'multi'),'userCount': opts['userCount'] }, 
        {  }, 
        {  }, 
        null, 
        ['PureCloud Auth'], 
        ['application/json'], 
        ['application/json']
      );
    };


    /**
     * Returns a listing of roles and permissions for a user.
     * 
     * @param {String} userId User ID
     */
    this.getUserRoles = function(userId) { 

      // verify the required parameter 'userId' is set
      if (userId === undefined || userId === null) {
        throw "Missing the required parameter 'userId' when calling getUserRoles";
      }


      return this.apiClient.callApi(
        '/api/v2/users/{userId}/roles', 
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
     * Patch Organization Role for needsUpdate Field
     * Patch Organization Role for needsUpdate Field
     * @param {String} roleId Role ID
     * @param {module:purecloud-platform-client-v2/model/DomainOrganizationRole} body Organization role
     */
    this.patchAuthorizationRole = function(roleId, body) { 

      // verify the required parameter 'roleId' is set
      if (roleId === undefined || roleId === null) {
        throw "Missing the required parameter 'roleId' when calling patchAuthorizationRole";
      }

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw "Missing the required parameter 'body' when calling patchAuthorizationRole";
      }


      return this.apiClient.callApi(
        '/api/v2/authorization/roles/{roleId}', 
        'PATCH', 
        { 'roleId': roleId }, 
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
     * Get an unsaved org role to default role comparison
     * Allows users to compare their existing roles in an unsaved state to its default role
     * @param {String} leftRoleId Left Role ID
     * @param {String} rightRoleId Right Role id
     * @param {module:purecloud-platform-client-v2/model/DomainOrganizationRole} body Organization role
     */
    this.postAuthorizationRoleComparedefaultRightRoleId = function(leftRoleId, rightRoleId, body) { 

      // verify the required parameter 'leftRoleId' is set
      if (leftRoleId === undefined || leftRoleId === null) {
        throw "Missing the required parameter 'leftRoleId' when calling postAuthorizationRoleComparedefaultRightRoleId";
      }

      // verify the required parameter 'rightRoleId' is set
      if (rightRoleId === undefined || rightRoleId === null) {
        throw "Missing the required parameter 'rightRoleId' when calling postAuthorizationRoleComparedefaultRightRoleId";
      }

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw "Missing the required parameter 'body' when calling postAuthorizationRoleComparedefaultRightRoleId";
      }


      return this.apiClient.callApi(
        '/api/v2/authorization/roles/{leftRoleId}/comparedefault/{rightRoleId}', 
        'POST', 
        { 'leftRoleId': leftRoleId,'rightRoleId': rightRoleId }, 
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
     * Create an organization role.
     * 
     * @param {module:purecloud-platform-client-v2/model/DomainOrganizationRoleCreate} body Organization role
     */
    this.postAuthorizationRoles = function(body) { 

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw "Missing the required parameter 'body' when calling postAuthorizationRoles";
      }


      return this.apiClient.callApi(
        '/api/v2/authorization/roles', 
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
     * Restores all default roles
     * This endpoint serves several purposes. 1. It provides the org with default roles. This is important for default roles that will be added after go-live (they can retroactively add the new default-role). Note: When not using a query param of force=true, it only adds the default roles not configured for the org; it does not overwrite roles. 2. Using the query param force=true, you can restore all default roles. Note: This does not have an effect on custom roles.
     * @param {Object} opts Optional parameters
     * @param {Boolean} opts.force Restore default roles (default to false)
     */
    this.postAuthorizationRolesDefault = function(opts) { 
      opts = opts || {};


      return this.apiClient.callApi(
        '/api/v2/authorization/roles/default', 
        'POST', 
        {  }, 
        { 'force': opts['force'] }, 
        {  }, 
        {  }, 
        null, 
        ['PureCloud Auth'], 
        ['application/json'], 
        ['application/json']
      );
    };


    /**
     * Update an organization role.
     * Update
     * @param {String} roleId Role ID
     * @param {module:purecloud-platform-client-v2/model/DomainOrganizationRoleUpdate} body Organization role
     */
    this.putAuthorizationRole = function(roleId, body) { 

      // verify the required parameter 'roleId' is set
      if (roleId === undefined || roleId === null) {
        throw "Missing the required parameter 'roleId' when calling putAuthorizationRole";
      }

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw "Missing the required parameter 'body' when calling putAuthorizationRole";
      }


      return this.apiClient.callApi(
        '/api/v2/authorization/roles/{roleId}', 
        'PUT', 
        { 'roleId': roleId }, 
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
     * Sets the users for the role
     * 
     * @param {String} roleId Role ID
     * @param {Array.<module:purecloud-platform-client-v2/model/String>} body List of user IDs
     */
    this.putAuthorizationRoleUsersAdd = function(roleId, body) { 

      // verify the required parameter 'roleId' is set
      if (roleId === undefined || roleId === null) {
        throw "Missing the required parameter 'roleId' when calling putAuthorizationRoleUsersAdd";
      }

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw "Missing the required parameter 'body' when calling putAuthorizationRoleUsersAdd";
      }


      return this.apiClient.callApi(
        '/api/v2/authorization/roles/{roleId}/users/add', 
        'PUT', 
        { 'roleId': roleId }, 
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
     * Removes the users from the role
     * 
     * @param {String} roleId Role ID
     * @param {Array.<module:purecloud-platform-client-v2/model/String>} body List of user IDs
     */
    this.putAuthorizationRoleUsersRemove = function(roleId, body) { 

      // verify the required parameter 'roleId' is set
      if (roleId === undefined || roleId === null) {
        throw "Missing the required parameter 'roleId' when calling putAuthorizationRoleUsersRemove";
      }

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw "Missing the required parameter 'body' when calling putAuthorizationRoleUsersRemove";
      }


      return this.apiClient.callApi(
        '/api/v2/authorization/roles/{roleId}/users/remove', 
        'PUT', 
        { 'roleId': roleId }, 
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
     * Restore specified default roles
     * 
     * @param {Array.<module:purecloud-platform-client-v2/model/DomainOrganizationRole>} body Organization roles list
     */
    this.putAuthorizationRolesDefault = function(body) { 

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw "Missing the required parameter 'body' when calling putAuthorizationRolesDefault";
      }


      return this.apiClient.callApi(
        '/api/v2/authorization/roles/default', 
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
     * Sets the user&#39;s roles
     * 
     * @param {String} userId User ID
     * @param {Array.<module:purecloud-platform-client-v2/model/String>} body List of roles
     */
    this.putUserRoles = function(userId, body) { 

      // verify the required parameter 'userId' is set
      if (userId === undefined || userId === null) {
        throw "Missing the required parameter 'userId' when calling putUserRoles";
      }

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw "Missing the required parameter 'body' when calling putUserRoles";
      }


      return this.apiClient.callApi(
        '/api/v2/users/{userId}/roles', 
        'PUT', 
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
  };

  return exports;
}));
