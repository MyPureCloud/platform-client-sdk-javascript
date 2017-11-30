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
    root.platformClient.ContentManagementApi = factory(root.platformClient.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * ContentManagement service.
   * @module purecloud-platform-client-v2/api/ContentManagementApi
   * @version 14.0.1
   */

  /**
   * Constructs a new ContentManagementApi. 
   * @alias module:purecloud-platform-client-v2/api/ContentManagementApi
   * @class
   * @param {module:purecloud-platform-client-v2/ApiClient} apiClient Optional API client implementation to use,
   * default to {@link module:purecloud-platform-client-v2/ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;



    /**
     * Delete a document.
     * 
     * @param {String} documentId Document ID
     * @param {Object} opts Optional parameters
     * @param {Boolean} opts.override Override any lock on the document
     */
    this.deleteContentmanagementDocument = function(documentId, opts) { 
      opts = opts || {};

      // verify the required parameter 'documentId' is set
      if (documentId === undefined || documentId === null) {
        throw "Missing the required parameter 'documentId' when calling deleteContentmanagementDocument";
      }


      return this.apiClient.callApi(
        '/api/v2/contentmanagement/documents/{documentId}', 
        'DELETE', 
        { 'documentId': documentId }, 
        { 'override': opts['override'] }, 
        {  }, 
        {  }, 
        null, 
        ['PureCloud Auth'], 
        ['application/json'], 
        ['application/json']
      );
    };


    /**
     * Deletes an existing share.
     * This revokes sharing rights specified in the share record
     * @param {String} shareId Share ID
     */
    this.deleteContentmanagementShare = function(shareId) { 

      // verify the required parameter 'shareId' is set
      if (shareId === undefined || shareId === null) {
        throw "Missing the required parameter 'shareId' when calling deleteContentmanagementShare";
      }


      return this.apiClient.callApi(
        '/api/v2/contentmanagement/shares/{shareId}', 
        'DELETE', 
        { 'shareId': shareId }, 
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
     * Cancel the command for this status
     * 
     * @param {String} statusId Status ID
     */
    this.deleteContentmanagementStatusStatusId = function(statusId) { 

      // verify the required parameter 'statusId' is set
      if (statusId === undefined || statusId === null) {
        throw "Missing the required parameter 'statusId' when calling deleteContentmanagementStatusStatusId";
      }


      return this.apiClient.callApi(
        '/api/v2/contentmanagement/status/{statusId}', 
        'DELETE', 
        { 'statusId': statusId }, 
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
     * Delete a workspace
     * 
     * @param {String} workspaceId Workspace ID
     * @param {Object} opts Optional parameters
     * @param {String} opts.moveChildrenToWorkspaceId New location for objects in deleted workspace.
     */
    this.deleteContentmanagementWorkspace = function(workspaceId, opts) { 
      opts = opts || {};

      // verify the required parameter 'workspaceId' is set
      if (workspaceId === undefined || workspaceId === null) {
        throw "Missing the required parameter 'workspaceId' when calling deleteContentmanagementWorkspace";
      }


      return this.apiClient.callApi(
        '/api/v2/contentmanagement/workspaces/{workspaceId}', 
        'DELETE', 
        { 'workspaceId': workspaceId }, 
        { 'moveChildrenToWorkspaceId': opts['moveChildrenToWorkspaceId'] }, 
        {  }, 
        {  }, 
        null, 
        ['PureCloud Auth'], 
        ['application/json'], 
        ['application/json']
      );
    };


    /**
     * Delete a member from a workspace
     * 
     * @param {String} workspaceId Workspace ID
     * @param {String} memberId Member ID
     */
    this.deleteContentmanagementWorkspaceMember = function(workspaceId, memberId) { 

      // verify the required parameter 'workspaceId' is set
      if (workspaceId === undefined || workspaceId === null) {
        throw "Missing the required parameter 'workspaceId' when calling deleteContentmanagementWorkspaceMember";
      }

      // verify the required parameter 'memberId' is set
      if (memberId === undefined || memberId === null) {
        throw "Missing the required parameter 'memberId' when calling deleteContentmanagementWorkspaceMember";
      }


      return this.apiClient.callApi(
        '/api/v2/contentmanagement/workspaces/{workspaceId}/members/{memberId}', 
        'DELETE', 
        { 'workspaceId': workspaceId,'memberId': memberId }, 
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
     * Delete workspace tag
     * Delete a tag from a workspace. Will remove this tag from all documents.
     * @param {String} workspaceId Workspace ID
     * @param {String} tagId Tag ID
     */
    this.deleteContentmanagementWorkspaceTagvalue = function(workspaceId, tagId) { 

      // verify the required parameter 'workspaceId' is set
      if (workspaceId === undefined || workspaceId === null) {
        throw "Missing the required parameter 'workspaceId' when calling deleteContentmanagementWorkspaceTagvalue";
      }

      // verify the required parameter 'tagId' is set
      if (tagId === undefined || tagId === null) {
        throw "Missing the required parameter 'tagId' when calling deleteContentmanagementWorkspaceTagvalue";
      }


      return this.apiClient.callApi(
        '/api/v2/contentmanagement/workspaces/{workspaceId}/tagvalues/{tagId}', 
        'DELETE', 
        { 'workspaceId': workspaceId,'tagId': tagId }, 
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
     * @param {Object} opts Optional parameters
     * @param {Array.<String>} opts.expand Which fields, if any, to expand.
     */
    this.getContentmanagementDocument = function(documentId, opts) { 
      opts = opts || {};

      // verify the required parameter 'documentId' is set
      if (documentId === undefined || documentId === null) {
        throw "Missing the required parameter 'documentId' when calling getContentmanagementDocument";
      }


      return this.apiClient.callApi(
        '/api/v2/contentmanagement/documents/{documentId}', 
        'GET', 
        { 'documentId': documentId }, 
        { 'expand': this.apiClient.buildCollectionParam(opts['expand'], 'multi') }, 
        {  }, 
        {  }, 
        null, 
        ['PureCloud Auth'], 
        ['application/json'], 
        ['application/json']
      );
    };


    /**
     * Get a list of audits for a document.
     * 
     * @param {String} documentId Document ID
     * @param {Object} opts Optional parameters
     * @param {Number} opts.pageSize Page size (default to 25)
     * @param {Number} opts.pageNumber Page number (default to 1)
     * @param {String} opts.transactionFilter Transaction filter
     * @param {String} opts.level level (default to USER)
     * @param {String} opts.sortBy Sort by
     * @param {String} opts.sortOrder Sort order (default to ascending)
     */
    this.getContentmanagementDocumentAudits = function(documentId, opts) { 
      opts = opts || {};

      // verify the required parameter 'documentId' is set
      if (documentId === undefined || documentId === null) {
        throw "Missing the required parameter 'documentId' when calling getContentmanagementDocumentAudits";
      }


      return this.apiClient.callApi(
        '/api/v2/contentmanagement/documents/{documentId}/audits', 
        'GET', 
        { 'documentId': documentId }, 
        { 'pageSize': opts['pageSize'],'pageNumber': opts['pageNumber'],'transactionFilter': opts['transactionFilter'],'level': opts['level'],'sortBy': opts['sortBy'],'sortOrder': opts['sortOrder'] }, 
        {  }, 
        {  }, 
        null, 
        ['PureCloud Auth'], 
        ['application/json'], 
        ['application/json']
      );
    };


    /**
     * Download a document.
     * 
     * @param {String} documentId Document ID
     * @param {Object} opts Optional parameters
     * @param {Object} opts.disposition Request how the content will be downloaded: a file attachment or inline. Default is attachment.
     * @param {String} opts.contentType The requested format for the specified document. If supported, the document will be returned in that format. Example contentType=audio/wav
     */
    this.getContentmanagementDocumentContent = function(documentId, opts) { 
      opts = opts || {};

      // verify the required parameter 'documentId' is set
      if (documentId === undefined || documentId === null) {
        throw "Missing the required parameter 'documentId' when calling getContentmanagementDocumentContent";
      }


      return this.apiClient.callApi(
        '/api/v2/contentmanagement/documents/{documentId}/content', 
        'GET', 
        { 'documentId': documentId }, 
        { 'disposition': opts['disposition'],'contentType': opts['contentType'] }, 
        {  }, 
        {  }, 
        null, 
        ['PureCloud Auth'], 
        ['application/json'], 
        ['application/json']
      );
    };


    /**
     * Get a list of documents.
     * 
     * @param {String} workspaceId Workspace ID
     * @param {Object} opts Optional parameters
     * @param {String} opts.name Name
     * @param {Array.<String>} opts.expand Which fields, if any, to expand.
     * @param {Number} opts.pageSize Page size (default to 25)
     * @param {Number} opts.pageNumber Page number (default to 1)
     * @param {String} opts.sortBy name or dateCreated
     * @param {String} opts.sortOrder ascending or descending (default to ascending)
     */
    this.getContentmanagementDocuments = function(workspaceId, opts) { 
      opts = opts || {};

      // verify the required parameter 'workspaceId' is set
      if (workspaceId === undefined || workspaceId === null) {
        throw "Missing the required parameter 'workspaceId' when calling getContentmanagementDocuments";
      }


      return this.apiClient.callApi(
        '/api/v2/contentmanagement/documents', 
        'GET', 
        {  }, 
        { 'workspaceId': workspaceId,'name': opts['name'],'expand': this.apiClient.buildCollectionParam(opts['expand'], 'multi'),'pageSize': opts['pageSize'],'pageNumber': opts['pageNumber'],'sortBy': opts['sortBy'],'sortOrder': opts['sortOrder'] }, 
        {  }, 
        {  }, 
        null, 
        ['PureCloud Auth'], 
        ['application/json'], 
        ['application/json']
      );
    };


    /**
     * Query content
     * 
     * @param {String} queryPhrase Phrase tokens are ANDed together over all searchable fields
     * @param {Object} opts Optional parameters
     * @param {Number} opts.pageSize Page size (default to 25)
     * @param {Number} opts.pageNumber Page number (default to 1)
     * @param {String} opts.sortBy name or dateCreated (default to name)
     * @param {String} opts.sortOrder ascending or descending (default to ascending)
     * @param {Array.<String>} opts.expand Which fields, if any, to expand.
     */
    this.getContentmanagementQuery = function(queryPhrase, opts) { 
      opts = opts || {};

      // verify the required parameter 'queryPhrase' is set
      if (queryPhrase === undefined || queryPhrase === null) {
        throw "Missing the required parameter 'queryPhrase' when calling getContentmanagementQuery";
      }


      return this.apiClient.callApi(
        '/api/v2/contentmanagement/query', 
        'GET', 
        {  }, 
        { 'pageSize': opts['pageSize'],'pageNumber': opts['pageNumber'],'sortBy': opts['sortBy'],'sortOrder': opts['sortOrder'],'queryPhrase': queryPhrase,'expand': this.apiClient.buildCollectionParam(opts['expand'], 'multi') }, 
        {  }, 
        {  }, 
        null, 
        ['PureCloud Auth'], 
        ['application/json'], 
        ['application/json']
      );
    };


    /**
     * Get a Security Profile
     * 
     * @param {String} securityProfileId Security Profile Id
     */
    this.getContentmanagementSecurityprofile = function(securityProfileId) { 

      // verify the required parameter 'securityProfileId' is set
      if (securityProfileId === undefined || securityProfileId === null) {
        throw "Missing the required parameter 'securityProfileId' when calling getContentmanagementSecurityprofile";
      }


      return this.apiClient.callApi(
        '/api/v2/contentmanagement/securityprofiles/{securityProfileId}', 
        'GET', 
        { 'securityProfileId': securityProfileId }, 
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
     * Get a List of Security Profiles
     * 
     */
    this.getContentmanagementSecurityprofiles = function() { 


      return this.apiClient.callApi(
        '/api/v2/contentmanagement/securityprofiles', 
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
     * Retrieve details about an existing share.
     * 
     * @param {String} shareId Share ID
     * @param {Object} opts Optional parameters
     * @param {Array.<String>} opts.expand Which fields, if any, to expand.
     */
    this.getContentmanagementShare = function(shareId, opts) { 
      opts = opts || {};

      // verify the required parameter 'shareId' is set
      if (shareId === undefined || shareId === null) {
        throw "Missing the required parameter 'shareId' when calling getContentmanagementShare";
      }


      return this.apiClient.callApi(
        '/api/v2/contentmanagement/shares/{shareId}', 
        'GET', 
        { 'shareId': shareId }, 
        { 'expand': this.apiClient.buildCollectionParam(opts['expand'], 'multi') }, 
        {  }, 
        {  }, 
        null, 
        ['PureCloud Auth'], 
        ['application/json'], 
        ['application/json']
      );
    };


    /**
     * Get shared documents. Securely download a shared document.
     * This method requires the download sharing URI obtained in the get document response (downloadSharingUri). Documents may be shared between users in the same workspace. Documents may also be shared between any user by creating a content management share.
     * @param {String} sharedId Shared ID
     * @param {Object} opts Optional parameters
     * @param {Boolean} opts.redirect Turn on or off redirect (default to true)
     * @param {Object} opts.disposition Request how the share content will be downloaded: attached as a file or inline. Default is attachment. (default to attachment)
     * @param {String} opts.contentType The requested format for the specified document. If supported, the document will be returned in that format. Example contentType=audio/wav
     * @param {Object} opts.expand Expand some document fields
     */
    this.getContentmanagementSharedSharedId = function(sharedId, opts) { 
      opts = opts || {};

      // verify the required parameter 'sharedId' is set
      if (sharedId === undefined || sharedId === null) {
        throw "Missing the required parameter 'sharedId' when calling getContentmanagementSharedSharedId";
      }


      return this.apiClient.callApi(
        '/api/v2/contentmanagement/shared/{sharedId}', 
        'GET', 
        { 'sharedId': sharedId }, 
        { 'redirect': opts['redirect'],'disposition': opts['disposition'],'contentType': opts['contentType'],'expand': opts['expand'] }, 
        {  }, 
        {  }, 
        null, 
        ['PureCloud Auth'], 
        ['application/json'], 
        ['application/json']
      );
    };


    /**
     * Gets a list of shares.  You must specify at least one filter (e.g. entityId).
     * Failing to specify a filter will return 400.
     * @param {Object} opts Optional parameters
     * @param {String} opts.entityId Filters the shares returned to only the entity specified by the value of this parameter.
     * @param {Array.<String>} opts.expand Which fields, if any, to expand.
     * @param {Number} opts.pageSize Page size (default to 25)
     * @param {Number} opts.pageNumber Page number (default to 1)
     */
    this.getContentmanagementShares = function(opts) { 
      opts = opts || {};


      return this.apiClient.callApi(
        '/api/v2/contentmanagement/shares', 
        'GET', 
        {  }, 
        { 'entityId': opts['entityId'],'expand': this.apiClient.buildCollectionParam(opts['expand'], 'multi'),'pageSize': opts['pageSize'],'pageNumber': opts['pageNumber'] }, 
        {  }, 
        {  }, 
        null, 
        ['PureCloud Auth'], 
        ['application/json'], 
        ['application/json']
      );
    };


    /**
     * Get a list of statuses for pending operations
     * 
     * @param {Object} opts Optional parameters
     * @param {Number} opts.pageSize Page size (default to 25)
     * @param {Number} opts.pageNumber Page number (default to 1)
     */
    this.getContentmanagementStatus = function(opts) { 
      opts = opts || {};


      return this.apiClient.callApi(
        '/api/v2/contentmanagement/status', 
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
     * Get a status.
     * 
     * @param {String} statusId Status ID
     */
    this.getContentmanagementStatusStatusId = function(statusId) { 

      // verify the required parameter 'statusId' is set
      if (statusId === undefined || statusId === null) {
        throw "Missing the required parameter 'statusId' when calling getContentmanagementStatusStatusId";
      }


      return this.apiClient.callApi(
        '/api/v2/contentmanagement/status/{statusId}', 
        'GET', 
        { 'statusId': statusId }, 
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
     * Get usage details.
     * 
     */
    this.getContentmanagementUsage = function() { 


      return this.apiClient.callApi(
        '/api/v2/contentmanagement/usage', 
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
     * Get a workspace.
     * 
     * @param {String} workspaceId Workspace ID
     * @param {Object} opts Optional parameters
     * @param {Array.<String>} opts.expand Which fields, if any, to expand.
     */
    this.getContentmanagementWorkspace = function(workspaceId, opts) { 
      opts = opts || {};

      // verify the required parameter 'workspaceId' is set
      if (workspaceId === undefined || workspaceId === null) {
        throw "Missing the required parameter 'workspaceId' when calling getContentmanagementWorkspace";
      }


      return this.apiClient.callApi(
        '/api/v2/contentmanagement/workspaces/{workspaceId}', 
        'GET', 
        { 'workspaceId': workspaceId }, 
        { 'expand': this.apiClient.buildCollectionParam(opts['expand'], 'multi') }, 
        {  }, 
        {  }, 
        null, 
        ['PureCloud Auth'], 
        ['application/json'], 
        ['application/json']
      );
    };


    /**
     * Get a list of documents.
     * 
     * @param {String} workspaceId Workspace ID
     * @param {Object} opts Optional parameters
     * @param {Array.<String>} opts.expand Which fields, if any, to expand.
     * @param {Number} opts.pageSize Page size (default to 25)
     * @param {Number} opts.pageNumber Page number (default to 1)
     * @param {String} opts.sortBy name or dateCreated
     * @param {String} opts.sortOrder ascending or descending (default to ascending)
     */
    this.getContentmanagementWorkspaceDocuments = function(workspaceId, opts) { 
      opts = opts || {};

      // verify the required parameter 'workspaceId' is set
      if (workspaceId === undefined || workspaceId === null) {
        throw "Missing the required parameter 'workspaceId' when calling getContentmanagementWorkspaceDocuments";
      }


      return this.apiClient.callApi(
        '/api/v2/contentmanagement/workspaces/{workspaceId}/documents', 
        'GET', 
        { 'workspaceId': workspaceId }, 
        { 'expand': this.apiClient.buildCollectionParam(opts['expand'], 'multi'),'pageSize': opts['pageSize'],'pageNumber': opts['pageNumber'],'sortBy': opts['sortBy'],'sortOrder': opts['sortOrder'] }, 
        {  }, 
        {  }, 
        null, 
        ['PureCloud Auth'], 
        ['application/json'], 
        ['application/json']
      );
    };


    /**
     * Get a workspace member
     * 
     * @param {String} workspaceId Workspace ID
     * @param {String} memberId Member ID
     * @param {Object} opts Optional parameters
     * @param {Array.<String>} opts.expand Which fields, if any, to expand.
     */
    this.getContentmanagementWorkspaceMember = function(workspaceId, memberId, opts) { 
      opts = opts || {};

      // verify the required parameter 'workspaceId' is set
      if (workspaceId === undefined || workspaceId === null) {
        throw "Missing the required parameter 'workspaceId' when calling getContentmanagementWorkspaceMember";
      }

      // verify the required parameter 'memberId' is set
      if (memberId === undefined || memberId === null) {
        throw "Missing the required parameter 'memberId' when calling getContentmanagementWorkspaceMember";
      }


      return this.apiClient.callApi(
        '/api/v2/contentmanagement/workspaces/{workspaceId}/members/{memberId}', 
        'GET', 
        { 'workspaceId': workspaceId,'memberId': memberId }, 
        { 'expand': this.apiClient.buildCollectionParam(opts['expand'], 'multi') }, 
        {  }, 
        {  }, 
        null, 
        ['PureCloud Auth'], 
        ['application/json'], 
        ['application/json']
      );
    };


    /**
     * Get a list workspace members
     * 
     * @param {String} workspaceId Workspace ID
     * @param {Object} opts Optional parameters
     * @param {Number} opts.pageSize Page size (default to 25)
     * @param {Number} opts.pageNumber Page number (default to 1)
     * @param {Array.<String>} opts.expand Which fields, if any, to expand.
     */
    this.getContentmanagementWorkspaceMembers = function(workspaceId, opts) { 
      opts = opts || {};

      // verify the required parameter 'workspaceId' is set
      if (workspaceId === undefined || workspaceId === null) {
        throw "Missing the required parameter 'workspaceId' when calling getContentmanagementWorkspaceMembers";
      }


      return this.apiClient.callApi(
        '/api/v2/contentmanagement/workspaces/{workspaceId}/members', 
        'GET', 
        { 'workspaceId': workspaceId }, 
        { 'pageSize': opts['pageSize'],'pageNumber': opts['pageNumber'],'expand': this.apiClient.buildCollectionParam(opts['expand'], 'multi') }, 
        {  }, 
        {  }, 
        null, 
        ['PureCloud Auth'], 
        ['application/json'], 
        ['application/json']
      );
    };


    /**
     * Get a workspace tag
     * 
     * @param {String} workspaceId Workspace ID
     * @param {String} tagId Tag ID
     * @param {Object} opts Optional parameters
     * @param {Array.<String>} opts.expand Which fields, if any, to expand.
     */
    this.getContentmanagementWorkspaceTagvalue = function(workspaceId, tagId, opts) { 
      opts = opts || {};

      // verify the required parameter 'workspaceId' is set
      if (workspaceId === undefined || workspaceId === null) {
        throw "Missing the required parameter 'workspaceId' when calling getContentmanagementWorkspaceTagvalue";
      }

      // verify the required parameter 'tagId' is set
      if (tagId === undefined || tagId === null) {
        throw "Missing the required parameter 'tagId' when calling getContentmanagementWorkspaceTagvalue";
      }


      return this.apiClient.callApi(
        '/api/v2/contentmanagement/workspaces/{workspaceId}/tagvalues/{tagId}', 
        'GET', 
        { 'workspaceId': workspaceId,'tagId': tagId }, 
        { 'expand': this.apiClient.buildCollectionParam(opts['expand'], 'multi') }, 
        {  }, 
        {  }, 
        null, 
        ['PureCloud Auth'], 
        ['application/json'], 
        ['application/json']
      );
    };


    /**
     * Get a list of workspace tags
     * 
     * @param {String} workspaceId Workspace ID
     * @param {Object} opts Optional parameters
     * @param {String} opts.value filter the list of tags returned
     * @param {Number} opts.pageSize Page size (default to 25)
     * @param {Number} opts.pageNumber Page number (default to 1)
     * @param {Array.<String>} opts.expand Which fields, if any, to expand.
     */
    this.getContentmanagementWorkspaceTagvalues = function(workspaceId, opts) { 
      opts = opts || {};

      // verify the required parameter 'workspaceId' is set
      if (workspaceId === undefined || workspaceId === null) {
        throw "Missing the required parameter 'workspaceId' when calling getContentmanagementWorkspaceTagvalues";
      }


      return this.apiClient.callApi(
        '/api/v2/contentmanagement/workspaces/{workspaceId}/tagvalues', 
        'GET', 
        { 'workspaceId': workspaceId }, 
        { 'value': opts['value'],'pageSize': opts['pageSize'],'pageNumber': opts['pageNumber'],'expand': this.apiClient.buildCollectionParam(opts['expand'], 'multi') }, 
        {  }, 
        {  }, 
        null, 
        ['PureCloud Auth'], 
        ['application/json'], 
        ['application/json']
      );
    };


    /**
     * Get a list of workspaces.
     * Specifying &#39;content&#39; access will return all workspaces the user has document access to, while &#39;admin&#39; access will return all group workspaces the user has administrative rights to.
     * @param {Object} opts Optional parameters
     * @param {Number} opts.pageSize Page size (default to 25)
     * @param {Number} opts.pageNumber Page number (default to 1)
     * @param {Array.<String>} opts.access Requested access level.
     * @param {Array.<String>} opts.expand Which fields, if any, to expand.
     */
    this.getContentmanagementWorkspaces = function(opts) { 
      opts = opts || {};


      return this.apiClient.callApi(
        '/api/v2/contentmanagement/workspaces', 
        'GET', 
        {  }, 
        { 'pageSize': opts['pageSize'],'pageNumber': opts['pageNumber'],'access': this.apiClient.buildCollectionParam(opts['access'], 'multi'),'expand': this.apiClient.buildCollectionParam(opts['expand'], 'multi') }, 
        {  }, 
        {  }, 
        null, 
        ['PureCloud Auth'], 
        ['application/json'], 
        ['application/json']
      );
    };


    /**
     * Query audits
     * 
     * @param {Object} body Allows for a filtered query returning facet information
     */
    this.postContentmanagementAuditquery = function(body) { 

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw "Missing the required parameter 'body' when calling postContentmanagementAuditquery";
      }


      return this.apiClient.callApi(
        '/api/v2/contentmanagement/auditquery', 
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
     * Update a document.
     * 
     * @param {String} documentId Document ID
     * @param {Object} body Document
     * @param {Object} opts Optional parameters
     * @param {Object} opts.expand Expand some document fields
     * @param {Boolean} opts.override Override any lock on the document
     */
    this.postContentmanagementDocument = function(documentId, body, opts) { 
      opts = opts || {};

      // verify the required parameter 'documentId' is set
      if (documentId === undefined || documentId === null) {
        throw "Missing the required parameter 'documentId' when calling postContentmanagementDocument";
      }

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw "Missing the required parameter 'body' when calling postContentmanagementDocument";
      }


      return this.apiClient.callApi(
        '/api/v2/contentmanagement/documents/{documentId}', 
        'POST', 
        { 'documentId': documentId }, 
        { 'expand': opts['expand'],'override': opts['override'] }, 
        {  }, 
        {  }, 
        body, 
        ['PureCloud Auth'], 
        ['application/json'], 
        ['application/json']
      );
    };


    /**
     * Replace the contents of a document.
     * 
     * @param {String} documentId Document ID
     * @param {Object} body Replace Request
     * @param {Object} opts Optional parameters
     * @param {Boolean} opts.override Override any lock on the document
     */
    this.postContentmanagementDocumentContent = function(documentId, body, opts) { 
      opts = opts || {};

      // verify the required parameter 'documentId' is set
      if (documentId === undefined || documentId === null) {
        throw "Missing the required parameter 'documentId' when calling postContentmanagementDocumentContent";
      }

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw "Missing the required parameter 'body' when calling postContentmanagementDocumentContent";
      }


      return this.apiClient.callApi(
        '/api/v2/contentmanagement/documents/{documentId}/content', 
        'POST', 
        { 'documentId': documentId }, 
        { 'override': opts['override'] }, 
        {  }, 
        {  }, 
        body, 
        ['PureCloud Auth'], 
        ['application/json'], 
        ['application/json']
      );
    };


    /**
     * Add a document.
     * 
     * @param {Object} body Document
     * @param {Object} opts Optional parameters
     * @param {String} opts.copySource Copy a document within a workspace or to a new workspace. Provide a document ID as the copy source.
     * @param {String} opts.moveSource Move a document to a new workspace. Provide a document ID as the move source.
     * @param {Boolean} opts.override Override any lock on the source document
     */
    this.postContentmanagementDocuments = function(body, opts) { 
      opts = opts || {};

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw "Missing the required parameter 'body' when calling postContentmanagementDocuments";
      }


      return this.apiClient.callApi(
        '/api/v2/contentmanagement/documents', 
        'POST', 
        {  }, 
        { 'copySource': opts['copySource'],'moveSource': opts['moveSource'],'override': opts['override'] }, 
        {  }, 
        {  }, 
        body, 
        ['PureCloud Auth'], 
        ['application/json'], 
        ['application/json']
      );
    };


    /**
     * Query content
     * 
     * @param {Object} body Allows for a filtered query returning facet information
     * @param {Object} opts Optional parameters
     * @param {Object} opts.expand Expand some document fields
     */
    this.postContentmanagementQuery = function(body, opts) { 
      opts = opts || {};

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw "Missing the required parameter 'body' when calling postContentmanagementQuery";
      }


      return this.apiClient.callApi(
        '/api/v2/contentmanagement/query', 
        'POST', 
        {  }, 
        { 'expand': opts['expand'] }, 
        {  }, 
        {  }, 
        body, 
        ['PureCloud Auth'], 
        ['application/json'], 
        ['application/json']
      );
    };


    /**
     * Creates a new share or updates an existing share if the entity has already been shared
     * 
     * @param {Object} body CreateShareRequest - entity id and type and a single member or list of members are required
     */
    this.postContentmanagementShares = function(body) { 

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw "Missing the required parameter 'body' when calling postContentmanagementShares";
      }


      return this.apiClient.callApi(
        '/api/v2/contentmanagement/shares', 
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
     * Create a workspace tag
     * 
     * @param {String} workspaceId Workspace ID
     * @param {Object} body tag
     */
    this.postContentmanagementWorkspaceTagvalues = function(workspaceId, body) { 

      // verify the required parameter 'workspaceId' is set
      if (workspaceId === undefined || workspaceId === null) {
        throw "Missing the required parameter 'workspaceId' when calling postContentmanagementWorkspaceTagvalues";
      }

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw "Missing the required parameter 'body' when calling postContentmanagementWorkspaceTagvalues";
      }


      return this.apiClient.callApi(
        '/api/v2/contentmanagement/workspaces/{workspaceId}/tagvalues', 
        'POST', 
        { 'workspaceId': workspaceId }, 
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
     * Perform a prefix query on tags in the workspace
     * 
     * @param {String} workspaceId Workspace ID
     * @param {Object} body query
     * @param {Object} opts Optional parameters
     * @param {Array.<String>} opts.expand Which fields, if any, to expand.
     */
    this.postContentmanagementWorkspaceTagvaluesQuery = function(workspaceId, body, opts) { 
      opts = opts || {};

      // verify the required parameter 'workspaceId' is set
      if (workspaceId === undefined || workspaceId === null) {
        throw "Missing the required parameter 'workspaceId' when calling postContentmanagementWorkspaceTagvaluesQuery";
      }

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw "Missing the required parameter 'body' when calling postContentmanagementWorkspaceTagvaluesQuery";
      }


      return this.apiClient.callApi(
        '/api/v2/contentmanagement/workspaces/{workspaceId}/tagvalues/query', 
        'POST', 
        { 'workspaceId': workspaceId }, 
        { 'expand': this.apiClient.buildCollectionParam(opts['expand'], 'multi') }, 
        {  }, 
        {  }, 
        body, 
        ['PureCloud Auth'], 
        ['application/json'], 
        ['application/json']
      );
    };


    /**
     * Create a group workspace
     * 
     * @param {Object} body Workspace
     */
    this.postContentmanagementWorkspaces = function(body) { 

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw "Missing the required parameter 'body' when calling postContentmanagementWorkspaces";
      }


      return this.apiClient.callApi(
        '/api/v2/contentmanagement/workspaces', 
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
     * Update a workspace
     * 
     * @param {String} workspaceId Workspace ID
     * @param {Object} body Workspace
     */
    this.putContentmanagementWorkspace = function(workspaceId, body) { 

      // verify the required parameter 'workspaceId' is set
      if (workspaceId === undefined || workspaceId === null) {
        throw "Missing the required parameter 'workspaceId' when calling putContentmanagementWorkspace";
      }

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw "Missing the required parameter 'body' when calling putContentmanagementWorkspace";
      }


      return this.apiClient.callApi(
        '/api/v2/contentmanagement/workspaces/{workspaceId}', 
        'PUT', 
        { 'workspaceId': workspaceId }, 
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
     * Add a member to a workspace
     * 
     * @param {String} workspaceId Workspace ID
     * @param {String} memberId Member ID
     * @param {Object} body Workspace Member
     */
    this.putContentmanagementWorkspaceMember = function(workspaceId, memberId, body) { 

      // verify the required parameter 'workspaceId' is set
      if (workspaceId === undefined || workspaceId === null) {
        throw "Missing the required parameter 'workspaceId' when calling putContentmanagementWorkspaceMember";
      }

      // verify the required parameter 'memberId' is set
      if (memberId === undefined || memberId === null) {
        throw "Missing the required parameter 'memberId' when calling putContentmanagementWorkspaceMember";
      }

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw "Missing the required parameter 'body' when calling putContentmanagementWorkspaceMember";
      }


      return this.apiClient.callApi(
        '/api/v2/contentmanagement/workspaces/{workspaceId}/members/{memberId}', 
        'PUT', 
        { 'workspaceId': workspaceId,'memberId': memberId }, 
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
     * Update a workspace tag. Will update all documents with the new tag value.
     * 
     * @param {String} workspaceId Workspace ID
     * @param {String} tagId Tag ID
     * @param {Object} body Workspace
     */
    this.putContentmanagementWorkspaceTagvalue = function(workspaceId, tagId, body) { 

      // verify the required parameter 'workspaceId' is set
      if (workspaceId === undefined || workspaceId === null) {
        throw "Missing the required parameter 'workspaceId' when calling putContentmanagementWorkspaceTagvalue";
      }

      // verify the required parameter 'tagId' is set
      if (tagId === undefined || tagId === null) {
        throw "Missing the required parameter 'tagId' when calling putContentmanagementWorkspaceTagvalue";
      }

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw "Missing the required parameter 'body' when calling putContentmanagementWorkspaceTagvalue";
      }


      return this.apiClient.callApi(
        '/api/v2/contentmanagement/workspaces/{workspaceId}/tagvalues/{tagId}', 
        'PUT', 
        { 'workspaceId': workspaceId,'tagId': tagId }, 
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
