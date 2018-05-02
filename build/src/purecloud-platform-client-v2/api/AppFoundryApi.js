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
    root.platformClient.AppFoundryApi = factory(root.platformClient.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * AppFoundry service.
   * @module purecloud-platform-client-v2/api/AppFoundryApi
   * @version 25.0.0
   */

  /**
   * Constructs a new AppFoundryApi. 
   * @alias module:purecloud-platform-client-v2/api/AppFoundryApi
   * @class
   * @param {module:purecloud-platform-client-v2/ApiClient} apiClient Optional API client implementation to use,
   * default to {@link module:purecloud-platform-client-v2/ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;



    /**
     * Return a structured hierarchy of available listing categories
     * 
     * @param {String} platformName 
     */
    this.getAppfoundryPlatformNameCategories = function(platformName) { 

      // verify the required parameter 'platformName' is set
      if (platformName === undefined || platformName === null) {
        throw "Missing the required parameter 'platformName' when calling getAppfoundryPlatformNameCategories";
      }


      return this.apiClient.callApi(
        '/api/v2/appfoundry/{platformName}/categories', 
        'GET', 
        { 'platformName': platformName }, 
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
     * Get listings that are part of the specified root category or a contained subcategory
     * 
     * @param {String} platformName 
     * @param {String} categoryName Name of category to request listings from
     * @param {Object} opts Optional parameters
     * @param {Number} opts.pageSize The total page size requested (default to 25)
     * @param {Number} opts.pageNumber The page number requested (default to 1)
     * @param {String} opts.sortBy variable name requested to sort by
     * @param {Array.<Object>} opts.expand variable name requested by expand list
     * @param {String} opts.nextPage next page token
     * @param {String} opts.previousPage Previous page token
     */
    this.getAppfoundryPlatformNameCategory = function(platformName, categoryName, opts) { 
      opts = opts || {};

      // verify the required parameter 'platformName' is set
      if (platformName === undefined || platformName === null) {
        throw "Missing the required parameter 'platformName' when calling getAppfoundryPlatformNameCategory";
      }

      // verify the required parameter 'categoryName' is set
      if (categoryName === undefined || categoryName === null) {
        throw "Missing the required parameter 'categoryName' when calling getAppfoundryPlatformNameCategory";
      }


      return this.apiClient.callApi(
        '/api/v2/appfoundry/{platformName}/categories/{categoryName}', 
        'GET', 
        { 'platformName': platformName,'categoryName': categoryName }, 
        { 'pageSize': opts['pageSize'],'pageNumber': opts['pageNumber'],'sortBy': opts['sortBy'],'expand': this.apiClient.buildCollectionParam(opts['expand'], 'multi'),'nextPage': opts['nextPage'],'previousPage': opts['previousPage'] }, 
        {  }, 
        {  }, 
        null, 
        ['PureCloud Auth'], 
        ['application/json'], 
        ['application/json']
      );
    };


    /**
     * Get listings that are part of the specified subcategory
     * 
     * @param {String} platformName 
     * @param {String} categoryName Name of category to request listings from
     * @param {String} subCategoryName Name of subcategory to request listings from
     * @param {Object} opts Optional parameters
     * @param {Number} opts.pageSize The total page size requested (default to 25)
     * @param {Number} opts.pageNumber The page number requested (default to 1)
     * @param {String} opts.sortBy variable name requested to sort by
     * @param {Array.<Object>} opts.expand variable name requested by expand list
     * @param {String} opts.nextPage next page token
     * @param {String} opts.previousPage Previous page token
     */
    this.getAppfoundryPlatformNameCategorySubCategoryName = function(platformName, categoryName, subCategoryName, opts) { 
      opts = opts || {};

      // verify the required parameter 'platformName' is set
      if (platformName === undefined || platformName === null) {
        throw "Missing the required parameter 'platformName' when calling getAppfoundryPlatformNameCategorySubCategoryName";
      }

      // verify the required parameter 'categoryName' is set
      if (categoryName === undefined || categoryName === null) {
        throw "Missing the required parameter 'categoryName' when calling getAppfoundryPlatformNameCategorySubCategoryName";
      }

      // verify the required parameter 'subCategoryName' is set
      if (subCategoryName === undefined || subCategoryName === null) {
        throw "Missing the required parameter 'subCategoryName' when calling getAppfoundryPlatformNameCategorySubCategoryName";
      }


      return this.apiClient.callApi(
        '/api/v2/appfoundry/{platformName}/categories/{categoryName}/{subCategoryName}', 
        'GET', 
        { 'platformName': platformName,'categoryName': categoryName,'subCategoryName': subCategoryName }, 
        { 'pageSize': opts['pageSize'],'pageNumber': opts['pageNumber'],'sortBy': opts['sortBy'],'expand': this.apiClient.buildCollectionParam(opts['expand'], 'multi'),'nextPage': opts['nextPage'],'previousPage': opts['previousPage'] }, 
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
