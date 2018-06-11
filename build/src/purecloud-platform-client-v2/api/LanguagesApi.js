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
    root.platformClient.LanguagesApi = factory(root.platformClient.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * Languages service.
   * @module purecloud-platform-client-v2/api/LanguagesApi
   * @version 28.0.0
   */

  /**
   * Constructs a new LanguagesApi. 
   * @alias module:purecloud-platform-client-v2/api/LanguagesApi
   * @class
   * @param {module:purecloud-platform-client-v2/ApiClient} apiClient Optional API client implementation to use,
   * default to {@link module:purecloud-platform-client-v2/ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;



    /**
     * Delete Language (Deprecated)
     * This endpoint is deprecated. It has been moved to /routing/languages/{languageId}
     * @param {String} languageId Language ID
     */
    this.deleteLanguage = function(languageId) { 

      // verify the required parameter 'languageId' is set
      if (languageId === undefined || languageId === null) {
        throw "Missing the required parameter 'languageId' when calling deleteLanguage";
      }


      return this.apiClient.callApi(
        '/api/v2/languages/{languageId}', 
        'DELETE', 
        { 'languageId': languageId }, 
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
     * Delete Language
     * 
     * @param {String} languageId Language ID
     */
    this.deleteRoutingLanguage = function(languageId) { 

      // verify the required parameter 'languageId' is set
      if (languageId === undefined || languageId === null) {
        throw "Missing the required parameter 'languageId' when calling deleteRoutingLanguage";
      }


      return this.apiClient.callApi(
        '/api/v2/routing/languages/{languageId}', 
        'DELETE', 
        { 'languageId': languageId }, 
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
     * Get language (Deprecated)
     * This endpoint is deprecated. It has been moved to /routing/languages/{languageId}
     * @param {String} languageId Language ID
     */
    this.getLanguage = function(languageId) { 

      // verify the required parameter 'languageId' is set
      if (languageId === undefined || languageId === null) {
        throw "Missing the required parameter 'languageId' when calling getLanguage";
      }


      return this.apiClient.callApi(
        '/api/v2/languages/{languageId}', 
        'GET', 
        { 'languageId': languageId }, 
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
     * Get the list of supported languages. (Deprecated)
     * This endpoint is deprecated. It has been moved to /routing/languages
     * @param {Object} opts Optional parameters
     * @param {Number} opts.pageSize Page size (default to 25)
     * @param {Number} opts.pageNumber Page number (default to 1)
     * @param {Object} opts.sortOrder Ascending or descending sort order (default to ASC)
     * @param {String} opts.name Name
     */
    this.getLanguages = function(opts) { 
      opts = opts || {};


      return this.apiClient.callApi(
        '/api/v2/languages', 
        'GET', 
        {  }, 
        { 'pageSize': opts['pageSize'],'pageNumber': opts['pageNumber'],'sortOrder': opts['sortOrder'],'name': opts['name'] }, 
        {  }, 
        {  }, 
        null, 
        ['PureCloud Auth'], 
        ['application/json'], 
        ['application/json']
      );
    };


    /**
     * Get all available languages for translation
     * 
     */
    this.getLanguagesTranslations = function() { 


      return this.apiClient.callApi(
        '/api/v2/languages/translations', 
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
     * Get the builtin translation for a language
     * 
     * @param {String} language The language of the builtin translation to retrieve
     */
    this.getLanguagesTranslationsBuiltin = function(language) { 

      // verify the required parameter 'language' is set
      if (language === undefined || language === null) {
        throw "Missing the required parameter 'language' when calling getLanguagesTranslationsBuiltin";
      }


      return this.apiClient.callApi(
        '/api/v2/languages/translations/builtin', 
        'GET', 
        {  }, 
        { 'language': language }, 
        {  }, 
        {  }, 
        null, 
        ['PureCloud Auth'], 
        ['application/json'], 
        ['application/json']
      );
    };


    /**
     * Get effective translation for an organization by language
     * 
     * @param {String} language The language of the translation to retrieve for the organization
     */
    this.getLanguagesTranslationsOrganization = function(language) { 

      // verify the required parameter 'language' is set
      if (language === undefined || language === null) {
        throw "Missing the required parameter 'language' when calling getLanguagesTranslationsOrganization";
      }


      return this.apiClient.callApi(
        '/api/v2/languages/translations/organization', 
        'GET', 
        {  }, 
        { 'language': language }, 
        {  }, 
        {  }, 
        null, 
        ['PureCloud Auth'], 
        ['application/json'], 
        ['application/json']
      );
    };


    /**
     * Get effective language translation for a user
     * 
     * @param {String} userId The user id
     */
    this.getLanguagesTranslationsUser = function(userId) { 

      // verify the required parameter 'userId' is set
      if (userId === undefined || userId === null) {
        throw "Missing the required parameter 'userId' when calling getLanguagesTranslationsUser";
      }


      return this.apiClient.callApi(
        '/api/v2/languages/translations/users/{userId}', 
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
     * Get language
     * 
     * @param {String} languageId Language ID
     */
    this.getRoutingLanguage = function(languageId) { 

      // verify the required parameter 'languageId' is set
      if (languageId === undefined || languageId === null) {
        throw "Missing the required parameter 'languageId' when calling getRoutingLanguage";
      }


      return this.apiClient.callApi(
        '/api/v2/routing/languages/{languageId}', 
        'GET', 
        { 'languageId': languageId }, 
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
     * Create Language (Deprecated)
     * This endpoint is deprecated. It has been moved to /routing/languages
     * @param {Object} body Language
     */
    this.postLanguages = function(body) { 

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw "Missing the required parameter 'body' when calling postLanguages";
      }


      return this.apiClient.callApi(
        '/api/v2/languages', 
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
  };

  return exports;
}));
