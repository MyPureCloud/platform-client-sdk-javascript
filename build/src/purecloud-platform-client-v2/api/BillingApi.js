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
    root.platformClient.BillingApi = factory(root.platformClient.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * Billing service.
   * @module purecloud-platform-client-v2/api/BillingApi
   * @version 32.1.0
   */

  /**
   * Constructs a new BillingApi. 
   * @alias module:purecloud-platform-client-v2/api/BillingApi
   * @class
   * @param {module:purecloud-platform-client-v2/ApiClient} apiClient Optional API client implementation to use,
   * default to {@link module:purecloud-platform-client-v2/ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;



    /**
     * Get a report of the billable usages (e.g. licenses and devices utilized) for a given period.
     * 
     * @param {Date} startDate The period start date. Date time is represented as an ISO-8601 string. For example: yyyy-MM-ddTHH:mm:ss.SSSZ
     * @param {Date} endDate The period end date. Date time is represented as an ISO-8601 string. For example: yyyy-MM-ddTHH:mm:ss.SSSZ
     */
    this.getBillingReportsBillableusage = function(startDate, endDate) { 

      // verify the required parameter 'startDate' is set
      if (startDate === undefined || startDate === null) {
        throw "Missing the required parameter 'startDate' when calling getBillingReportsBillableusage";
      }

      // verify the required parameter 'endDate' is set
      if (endDate === undefined || endDate === null) {
        throw "Missing the required parameter 'endDate' when calling getBillingReportsBillableusage";
      }


      return this.apiClient.callApi(
        '/api/v2/billing/reports/billableusage', 
        'GET', 
        {  }, 
        { 'startDate': startDate,'endDate': endDate }, 
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
