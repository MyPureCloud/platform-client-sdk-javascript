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
    root.platformClient.ExternalContactsApi = factory(root.platformClient.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * ExternalContacts service.
   * @module purecloud-platform-client-v2/api/ExternalContactsApi
   * @version 9.0.0
   */

  /**
   * Constructs a new ExternalContactsApi. 
   * @alias module:purecloud-platform-client-v2/api/ExternalContactsApi
   * @class
   * @param {module:purecloud-platform-client-v2/ApiClient} apiClient Optional API client implementation to use,
   * default to {@link module:purecloud-platform-client-v2/ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;



    /**
     * Delete an external contact
     * 
     * @param {String} contactId ExternalContact ID
     */
    this.deleteExternalcontactsContact = function(contactId) { 

      // verify the required parameter 'contactId' is set
      if (contactId === undefined || contactId === null) {
        throw "Missing the required parameter 'contactId' when calling deleteExternalcontactsContact";
      }


      return this.apiClient.callApi(
        '/api/v2/externalcontacts/contacts/{contactId}', 
        'DELETE', 
        { 'contactId': contactId }, 
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
     * Delete a note for an external contact
     * 
     * @param {String} contactId ExternalContact Id
     * @param {String} noteId Note Id
     */
    this.deleteExternalcontactsContactNote = function(contactId, noteId) { 

      // verify the required parameter 'contactId' is set
      if (contactId === undefined || contactId === null) {
        throw "Missing the required parameter 'contactId' when calling deleteExternalcontactsContactNote";
      }

      // verify the required parameter 'noteId' is set
      if (noteId === undefined || noteId === null) {
        throw "Missing the required parameter 'noteId' when calling deleteExternalcontactsContactNote";
      }


      return this.apiClient.callApi(
        '/api/v2/externalcontacts/contacts/{contactId}/notes/{noteId}', 
        'DELETE', 
        { 'contactId': contactId,'noteId': noteId }, 
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
     * Delete an external organization
     * 
     * @param {String} externalOrganizationId External Organization ID
     */
    this.deleteExternalcontactsOrganization = function(externalOrganizationId) { 

      // verify the required parameter 'externalOrganizationId' is set
      if (externalOrganizationId === undefined || externalOrganizationId === null) {
        throw "Missing the required parameter 'externalOrganizationId' when calling deleteExternalcontactsOrganization";
      }


      return this.apiClient.callApi(
        '/api/v2/externalcontacts/organizations/{externalOrganizationId}', 
        'DELETE', 
        { 'externalOrganizationId': externalOrganizationId }, 
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
     * Delete a note for an external organization
     * 
     * @param {String} externalOrganizationId External Organization Id
     * @param {String} noteId Note Id
     */
    this.deleteExternalcontactsOrganizationNote = function(externalOrganizationId, noteId) { 

      // verify the required parameter 'externalOrganizationId' is set
      if (externalOrganizationId === undefined || externalOrganizationId === null) {
        throw "Missing the required parameter 'externalOrganizationId' when calling deleteExternalcontactsOrganizationNote";
      }

      // verify the required parameter 'noteId' is set
      if (noteId === undefined || noteId === null) {
        throw "Missing the required parameter 'noteId' when calling deleteExternalcontactsOrganizationNote";
      }


      return this.apiClient.callApi(
        '/api/v2/externalcontacts/organizations/{externalOrganizationId}/notes/{noteId}', 
        'DELETE', 
        { 'externalOrganizationId': externalOrganizationId,'noteId': noteId }, 
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
     * Unlink the Trustor for this External Organization
     * 
     * @param {String} externalOrganizationId External Organization ID
     */
    this.deleteExternalcontactsOrganizationTrustor = function(externalOrganizationId) { 

      // verify the required parameter 'externalOrganizationId' is set
      if (externalOrganizationId === undefined || externalOrganizationId === null) {
        throw "Missing the required parameter 'externalOrganizationId' when calling deleteExternalcontactsOrganizationTrustor";
      }


      return this.apiClient.callApi(
        '/api/v2/externalcontacts/organizations/{externalOrganizationId}/trustor', 
        'DELETE', 
        { 'externalOrganizationId': externalOrganizationId }, 
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
     * Delete a relationship
     * 
     * @param {String} relationshipId Relationship Id
     */
    this.deleteExternalcontactsRelationship = function(relationshipId) { 

      // verify the required parameter 'relationshipId' is set
      if (relationshipId === undefined || relationshipId === null) {
        throw "Missing the required parameter 'relationshipId' when calling deleteExternalcontactsRelationship";
      }


      return this.apiClient.callApi(
        '/api/v2/externalcontacts/relationships/{relationshipId}', 
        'DELETE', 
        { 'relationshipId': relationshipId }, 
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
     * Fetch an external contact
     * 
     * @param {String} contactId ExternalContact ID
     * @param {Object} opts Optional parameters
     * @param {Array.<String>} opts.expand which fields, if any, to expand (externalOrganization,externalDataSources)
     */
    this.getExternalcontactsContact = function(contactId, opts) { 
      opts = opts || {};

      // verify the required parameter 'contactId' is set
      if (contactId === undefined || contactId === null) {
        throw "Missing the required parameter 'contactId' when calling getExternalcontactsContact";
      }


      return this.apiClient.callApi(
        '/api/v2/externalcontacts/contacts/{contactId}', 
        'GET', 
        { 'contactId': contactId }, 
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
     * Fetch a note for an external contact
     * 
     * @param {String} contactId ExternalContact Id
     * @param {String} noteId Note Id
     * @param {Object} opts Optional parameters
     * @param {Array.<String>} opts.expand which fields, if any, to expand
     */
    this.getExternalcontactsContactNote = function(contactId, noteId, opts) { 
      opts = opts || {};

      // verify the required parameter 'contactId' is set
      if (contactId === undefined || contactId === null) {
        throw "Missing the required parameter 'contactId' when calling getExternalcontactsContactNote";
      }

      // verify the required parameter 'noteId' is set
      if (noteId === undefined || noteId === null) {
        throw "Missing the required parameter 'noteId' when calling getExternalcontactsContactNote";
      }


      return this.apiClient.callApi(
        '/api/v2/externalcontacts/contacts/{contactId}/notes/{noteId}', 
        'GET', 
        { 'contactId': contactId,'noteId': noteId }, 
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
     * List notes for an external contact
     * 
     * @param {String} contactId ExternalContact Id
     * @param {Object} opts Optional parameters
     * @param {Number} opts.pageSize Page size (default to 20)
     * @param {Number} opts.pageNumber Page number (default to 1)
     * @param {String} opts.sortOrder Sort order
     * @param {Array.<String>} opts.expand which fields, if any, to expand
     */
    this.getExternalcontactsContactNotes = function(contactId, opts) { 
      opts = opts || {};

      // verify the required parameter 'contactId' is set
      if (contactId === undefined || contactId === null) {
        throw "Missing the required parameter 'contactId' when calling getExternalcontactsContactNotes";
      }


      return this.apiClient.callApi(
        '/api/v2/externalcontacts/contacts/{contactId}/notes', 
        'GET', 
        { 'contactId': contactId }, 
        { 'pageSize': opts['pageSize'],'pageNumber': opts['pageNumber'],'sortOrder': opts['sortOrder'],'expand': this.apiClient.buildCollectionParam(opts['expand'], 'multi') }, 
        {  }, 
        {  }, 
        null, 
        ['PureCloud Auth'], 
        ['application/json'], 
        ['application/json']
      );
    };


    /**
     * Search for external contacts
     * 
     * @param {Object} opts Optional parameters
     * @param {Number} opts.pageSize Page size (default to 20)
     * @param {Number} opts.pageNumber Page number (default to 1)
     * @param {String} opts.q User supplied search keywords (no special syntax is currently supported)
     * @param {String} opts.sortOrder Sort order
     * @param {Array.<String>} opts.expand which fields, if any, to expand
     */
    this.getExternalcontactsContacts = function(opts) { 
      opts = opts || {};


      return this.apiClient.callApi(
        '/api/v2/externalcontacts/contacts', 
        'GET', 
        {  }, 
        { 'pageSize': opts['pageSize'],'pageNumber': opts['pageNumber'],'q': opts['q'],'sortOrder': opts['sortOrder'],'expand': this.apiClient.buildCollectionParam(opts['expand'], 'multi') }, 
        {  }, 
        {  }, 
        null, 
        ['PureCloud Auth'], 
        ['application/json'], 
        ['application/json']
      );
    };


    /**
     * Fetch an external organization
     * 
     * @param {String} externalOrganizationId External Organization ID
     * @param {Object} opts Optional parameters
     * @param {Object} opts.expand which fields, if any, to expand (externalDataSources)
     * @param {Boolean} opts.includeTrustors (true or false) whether or not to include trustor information embedded in the externalOrganization
     */
    this.getExternalcontactsOrganization = function(externalOrganizationId, opts) { 
      opts = opts || {};

      // verify the required parameter 'externalOrganizationId' is set
      if (externalOrganizationId === undefined || externalOrganizationId === null) {
        throw "Missing the required parameter 'externalOrganizationId' when calling getExternalcontactsOrganization";
      }


      return this.apiClient.callApi(
        '/api/v2/externalcontacts/organizations/{externalOrganizationId}', 
        'GET', 
        { 'externalOrganizationId': externalOrganizationId }, 
        { 'expand': opts['expand'],'includeTrustors': opts['includeTrustors'] }, 
        {  }, 
        {  }, 
        null, 
        ['PureCloud Auth'], 
        ['application/json'], 
        ['application/json']
      );
    };


    /**
     * Search for external contacts in an external organization
     * 
     * @param {String} externalOrganizationId External Organization ID
     * @param {Object} opts Optional parameters
     * @param {Number} opts.pageSize Page size (default to 20)
     * @param {Number} opts.pageNumber Page number (default to 1)
     * @param {String} opts.q User supplied search keywords (no special syntax is currently supported)
     * @param {String} opts.sortOrder Sort order
     * @param {Array.<String>} opts.expand which fields, if any, to expand
     */
    this.getExternalcontactsOrganizationContacts = function(externalOrganizationId, opts) { 
      opts = opts || {};

      // verify the required parameter 'externalOrganizationId' is set
      if (externalOrganizationId === undefined || externalOrganizationId === null) {
        throw "Missing the required parameter 'externalOrganizationId' when calling getExternalcontactsOrganizationContacts";
      }


      return this.apiClient.callApi(
        '/api/v2/externalcontacts/organizations/{externalOrganizationId}/contacts', 
        'GET', 
        { 'externalOrganizationId': externalOrganizationId }, 
        { 'pageSize': opts['pageSize'],'pageNumber': opts['pageNumber'],'q': opts['q'],'sortOrder': opts['sortOrder'],'expand': this.apiClient.buildCollectionParam(opts['expand'], 'multi') }, 
        {  }, 
        {  }, 
        null, 
        ['PureCloud Auth'], 
        ['application/json'], 
        ['application/json']
      );
    };


    /**
     * Fetch a note for an external organization
     * 
     * @param {String} externalOrganizationId External Organization Id
     * @param {String} noteId Note Id
     * @param {Object} opts Optional parameters
     * @param {Array.<String>} opts.expand which fields, if any, to expand
     */
    this.getExternalcontactsOrganizationNote = function(externalOrganizationId, noteId, opts) { 
      opts = opts || {};

      // verify the required parameter 'externalOrganizationId' is set
      if (externalOrganizationId === undefined || externalOrganizationId === null) {
        throw "Missing the required parameter 'externalOrganizationId' when calling getExternalcontactsOrganizationNote";
      }

      // verify the required parameter 'noteId' is set
      if (noteId === undefined || noteId === null) {
        throw "Missing the required parameter 'noteId' when calling getExternalcontactsOrganizationNote";
      }


      return this.apiClient.callApi(
        '/api/v2/externalcontacts/organizations/{externalOrganizationId}/notes/{noteId}', 
        'GET', 
        { 'externalOrganizationId': externalOrganizationId,'noteId': noteId }, 
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
     * List notes for an external organization
     * 
     * @param {String} externalOrganizationId External Organization Id
     * @param {Object} opts Optional parameters
     * @param {Number} opts.pageSize Page size (default to 20)
     * @param {Number} opts.pageNumber Page number (default to 1)
     * @param {String} opts.sortOrder Sort order
     * @param {Array.<String>} opts.expand which fields, if any, to expand
     */
    this.getExternalcontactsOrganizationNotes = function(externalOrganizationId, opts) { 
      opts = opts || {};

      // verify the required parameter 'externalOrganizationId' is set
      if (externalOrganizationId === undefined || externalOrganizationId === null) {
        throw "Missing the required parameter 'externalOrganizationId' when calling getExternalcontactsOrganizationNotes";
      }


      return this.apiClient.callApi(
        '/api/v2/externalcontacts/organizations/{externalOrganizationId}/notes', 
        'GET', 
        { 'externalOrganizationId': externalOrganizationId }, 
        { 'pageSize': opts['pageSize'],'pageNumber': opts['pageNumber'],'sortOrder': opts['sortOrder'],'expand': this.apiClient.buildCollectionParam(opts['expand'], 'multi') }, 
        {  }, 
        {  }, 
        null, 
        ['PureCloud Auth'], 
        ['application/json'], 
        ['application/json']
      );
    };


    /**
     * Fetch a relationship for an external organization
     * 
     * @param {String} externalOrganizationId External Organization ID
     * @param {Object} opts Optional parameters
     * @param {Number} opts.pageSize Page size (default to 20)
     * @param {Number} opts.pageNumber Page number (default to 1)
     * @param {Object} opts.expand which fields, if any, to expand
     * @param {String} opts.sortOrder Sort order
     */
    this.getExternalcontactsOrganizationRelationships = function(externalOrganizationId, opts) { 
      opts = opts || {};

      // verify the required parameter 'externalOrganizationId' is set
      if (externalOrganizationId === undefined || externalOrganizationId === null) {
        throw "Missing the required parameter 'externalOrganizationId' when calling getExternalcontactsOrganizationRelationships";
      }


      return this.apiClient.callApi(
        '/api/v2/externalcontacts/organizations/{externalOrganizationId}/relationships', 
        'GET', 
        { 'externalOrganizationId': externalOrganizationId }, 
        { 'pageSize': opts['pageSize'],'pageNumber': opts['pageNumber'],'expand': opts['expand'],'sortOrder': opts['sortOrder'] }, 
        {  }, 
        {  }, 
        null, 
        ['PureCloud Auth'], 
        ['application/json'], 
        ['application/json']
      );
    };


    /**
     * Search for external organizations
     * 
     * @param {Object} opts Optional parameters
     * @param {Number} opts.pageSize Page size (default to 20)
     * @param {Number} opts.pageNumber Page number (default to 1)
     * @param {String} opts.q Search query
     * @param {Array.<String>} opts.trustorId Search for external organizations by trustorIds (limit 25). If supplied, the &#39;q&#39; parameters is ignored. Items are returned in the order requested
     * @param {String} opts.sortOrder Sort order
     * @param {Array.<String>} opts.expand which fields, if any, to expand
     * @param {Boolean} opts.includeTrustors (true or false) whether or not to include trustor information embedded in the externalOrganization
     */
    this.getExternalcontactsOrganizations = function(opts) { 
      opts = opts || {};


      return this.apiClient.callApi(
        '/api/v2/externalcontacts/organizations', 
        'GET', 
        {  }, 
        { 'pageSize': opts['pageSize'],'pageNumber': opts['pageNumber'],'q': opts['q'],'trustorId': this.apiClient.buildCollectionParam(opts['trustorId'], 'multi'),'sortOrder': opts['sortOrder'],'expand': this.apiClient.buildCollectionParam(opts['expand'], 'multi'),'includeTrustors': opts['includeTrustors'] }, 
        {  }, 
        {  }, 
        null, 
        ['PureCloud Auth'], 
        ['application/json'], 
        ['application/json']
      );
    };


    /**
     * Fetch a relationship
     * 
     * @param {String} relationshipId Relationship Id
     * @param {Object} opts Optional parameters
     * @param {Object} opts.expand which fields, if any, to expand
     */
    this.getExternalcontactsRelationship = function(relationshipId, opts) { 
      opts = opts || {};

      // verify the required parameter 'relationshipId' is set
      if (relationshipId === undefined || relationshipId === null) {
        throw "Missing the required parameter 'relationshipId' when calling getExternalcontactsRelationship";
      }


      return this.apiClient.callApi(
        '/api/v2/externalcontacts/relationships/{relationshipId}', 
        'GET', 
        { 'relationshipId': relationshipId }, 
        { 'expand': opts['expand'] }, 
        {  }, 
        {  }, 
        null, 
        ['PureCloud Auth'], 
        ['application/json'], 
        ['application/json']
      );
    };


    /**
     * Lookup contacts and externalOrganizations based on an attribute
     * 
     * @param {String} lookupVal User supplied value to lookup contacts/externalOrganizations (supports email addresses, e164 phone numbers, Twitter screen names)
     * @param {Object} opts Optional parameters
     * @param {Array.<String>} opts.expand which field, if any, to expand
     */
    this.getExternalcontactsReversewhitepageslookup = function(lookupVal, opts) { 
      opts = opts || {};

      // verify the required parameter 'lookupVal' is set
      if (lookupVal === undefined || lookupVal === null) {
        throw "Missing the required parameter 'lookupVal' when calling getExternalcontactsReversewhitepageslookup";
      }


      return this.apiClient.callApi(
        '/api/v2/externalcontacts/reversewhitepageslookup', 
        'GET', 
        {  }, 
        { 'lookupVal': lookupVal,'expand': this.apiClient.buildCollectionParam(opts['expand'], 'multi') }, 
        {  }, 
        {  }, 
        null, 
        ['PureCloud Auth'], 
        ['application/json'], 
        ['application/json']
      );
    };


    /**
     * Create a note for an external contact
     * 
     * @param {String} contactId ExternalContact Id
     * @param {Object} opts Optional parameters
     * @param {Object} opts.body ExternalContact
     */
    this.postExternalcontactsContactNotes = function(contactId, opts) { 
      opts = opts || {};

      // verify the required parameter 'contactId' is set
      if (contactId === undefined || contactId === null) {
        throw "Missing the required parameter 'contactId' when calling postExternalcontactsContactNotes";
      }


      return this.apiClient.callApi(
        '/api/v2/externalcontacts/contacts/{contactId}/notes', 
        'POST', 
        { 'contactId': contactId }, 
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
     * Create an external contact
     * 
     * @param {Object} opts Optional parameters
     * @param {Object} opts.body ExternalContact
     */
    this.postExternalcontactsContacts = function(opts) { 
      opts = opts || {};


      return this.apiClient.callApi(
        '/api/v2/externalcontacts/contacts', 
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
     * Create a note for an external organization
     * 
     * @param {String} externalOrganizationId External Organization Id
     * @param {Object} opts Optional parameters
     * @param {Object} opts.body ExternalContact
     */
    this.postExternalcontactsOrganizationNotes = function(externalOrganizationId, opts) { 
      opts = opts || {};

      // verify the required parameter 'externalOrganizationId' is set
      if (externalOrganizationId === undefined || externalOrganizationId === null) {
        throw "Missing the required parameter 'externalOrganizationId' when calling postExternalcontactsOrganizationNotes";
      }


      return this.apiClient.callApi(
        '/api/v2/externalcontacts/organizations/{externalOrganizationId}/notes', 
        'POST', 
        { 'externalOrganizationId': externalOrganizationId }, 
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
     * Create an external organization
     * 
     * @param {Object} opts Optional parameters
     * @param {Object} opts.body ExternalOrganization
     */
    this.postExternalcontactsOrganizations = function(opts) { 
      opts = opts || {};


      return this.apiClient.callApi(
        '/api/v2/externalcontacts/organizations', 
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
     * Create a relationship
     * 
     * @param {Object} opts Optional parameters
     * @param {Object} opts.body Relationship
     */
    this.postExternalcontactsRelationships = function(opts) { 
      opts = opts || {};


      return this.apiClient.callApi(
        '/api/v2/externalcontacts/relationships', 
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
     * Update an external contact
     * 
     * @param {String} contactId ExternalContact ID
     * @param {Object} opts Optional parameters
     * @param {Object} opts.body ExternalContact
     */
    this.putExternalcontactsContact = function(contactId, opts) { 
      opts = opts || {};

      // verify the required parameter 'contactId' is set
      if (contactId === undefined || contactId === null) {
        throw "Missing the required parameter 'contactId' when calling putExternalcontactsContact";
      }


      return this.apiClient.callApi(
        '/api/v2/externalcontacts/contacts/{contactId}', 
        'PUT', 
        { 'contactId': contactId }, 
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
     * Update a note for an external contact
     * 
     * @param {String} contactId ExternalContact Id
     * @param {String} noteId Note Id
     * @param {Object} opts Optional parameters
     * @param {Object} opts.body Note
     */
    this.putExternalcontactsContactNote = function(contactId, noteId, opts) { 
      opts = opts || {};

      // verify the required parameter 'contactId' is set
      if (contactId === undefined || contactId === null) {
        throw "Missing the required parameter 'contactId' when calling putExternalcontactsContactNote";
      }

      // verify the required parameter 'noteId' is set
      if (noteId === undefined || noteId === null) {
        throw "Missing the required parameter 'noteId' when calling putExternalcontactsContactNote";
      }


      return this.apiClient.callApi(
        '/api/v2/externalcontacts/contacts/{contactId}/notes/{noteId}', 
        'PUT', 
        { 'contactId': contactId,'noteId': noteId }, 
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
     * Associate an external contact with a conversation
     * 
     * @param {String} conversationId Conversation ID
     * @param {Object} opts Optional parameters
     * @param {Object} opts.body ConversationAssociation
     */
    this.putExternalcontactsConversation = function(conversationId, opts) { 
      opts = opts || {};

      // verify the required parameter 'conversationId' is set
      if (conversationId === undefined || conversationId === null) {
        throw "Missing the required parameter 'conversationId' when calling putExternalcontactsConversation";
      }


      return this.apiClient.callApi(
        '/api/v2/externalcontacts/conversations/{conversationId}', 
        'PUT', 
        { 'conversationId': conversationId }, 
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
     * Update an external organization
     * 
     * @param {String} externalOrganizationId External Organization ID
     * @param {Object} opts Optional parameters
     * @param {Object} opts.body ExternalOrganization
     */
    this.putExternalcontactsOrganization = function(externalOrganizationId, opts) { 
      opts = opts || {};

      // verify the required parameter 'externalOrganizationId' is set
      if (externalOrganizationId === undefined || externalOrganizationId === null) {
        throw "Missing the required parameter 'externalOrganizationId' when calling putExternalcontactsOrganization";
      }


      return this.apiClient.callApi(
        '/api/v2/externalcontacts/organizations/{externalOrganizationId}', 
        'PUT', 
        { 'externalOrganizationId': externalOrganizationId }, 
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
     * Update a note for an external organization
     * 
     * @param {String} externalOrganizationId External Organization Id
     * @param {String} noteId Note Id
     * @param {Object} opts Optional parameters
     * @param {Object} opts.body Note
     */
    this.putExternalcontactsOrganizationNote = function(externalOrganizationId, noteId, opts) { 
      opts = opts || {};

      // verify the required parameter 'externalOrganizationId' is set
      if (externalOrganizationId === undefined || externalOrganizationId === null) {
        throw "Missing the required parameter 'externalOrganizationId' when calling putExternalcontactsOrganizationNote";
      }

      // verify the required parameter 'noteId' is set
      if (noteId === undefined || noteId === null) {
        throw "Missing the required parameter 'noteId' when calling putExternalcontactsOrganizationNote";
      }


      return this.apiClient.callApi(
        '/api/v2/externalcontacts/organizations/{externalOrganizationId}/notes/{noteId}', 
        'PUT', 
        { 'externalOrganizationId': externalOrganizationId,'noteId': noteId }, 
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
     * Links a Trustor with an Extenral Organization
     * 
     * @param {String} externalOrganizationId External Organization ID
     * @param {String} trustorId Trustor ID
     */
    this.putExternalcontactsOrganizationTrustorTrustorId = function(externalOrganizationId, trustorId) { 

      // verify the required parameter 'externalOrganizationId' is set
      if (externalOrganizationId === undefined || externalOrganizationId === null) {
        throw "Missing the required parameter 'externalOrganizationId' when calling putExternalcontactsOrganizationTrustorTrustorId";
      }

      // verify the required parameter 'trustorId' is set
      if (trustorId === undefined || trustorId === null) {
        throw "Missing the required parameter 'trustorId' when calling putExternalcontactsOrganizationTrustorTrustorId";
      }


      return this.apiClient.callApi(
        '/api/v2/externalcontacts/organizations/{externalOrganizationId}/trustor/{trustorId}', 
        'PUT', 
        { 'externalOrganizationId': externalOrganizationId,'trustorId': trustorId }, 
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
     * Update a relationship
     * 
     * @param {String} relationshipId Relationship Id
     * @param {Object} opts Optional parameters
     * @param {Object} opts.body Relationship
     */
    this.putExternalcontactsRelationship = function(relationshipId, opts) { 
      opts = opts || {};

      // verify the required parameter 'relationshipId' is set
      if (relationshipId === undefined || relationshipId === null) {
        throw "Missing the required parameter 'relationshipId' when calling putExternalcontactsRelationship";
      }


      return this.apiClient.callApi(
        '/api/v2/externalcontacts/relationships/{relationshipId}', 
        'PUT', 
        { 'relationshipId': relationshipId }, 
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
