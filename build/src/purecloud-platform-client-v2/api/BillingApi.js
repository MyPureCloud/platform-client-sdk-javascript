import ApiClient from '../ApiClient.js';


class BillingApi {
	/**
	 * Billing service.
	 * @module purecloud-platform-client-v2/api/BillingApi
	 * @version 126.1.0
	 */

	/**
	 * Constructs a new BillingApi. 
	 * @alias module:purecloud-platform-client-v2/api/BillingApi
	 * @class
	 * @param {module:purecloud-platform-client-v2/ApiClient} apiClient Optional API client implementation to use,
	 * default to {@link module:purecloud-platform-client-v2/ApiClient#instance} if unspecified.
	 */
	constructor(apiClient) {
		this.apiClient = apiClient || ApiClient.instance;
	}


	/**
	 * Get a report of the billable license usages
	 * Report is of the billable usages (e.g. licenses and devices utilized) for a given period. If response&#39;s status is InProgress, wait a few seconds, then try the same request again.
	 * @param {Date} startDate The period start date. Date time is represented as an ISO-8601 string. For example: yyyy-MM-ddTHH:mm:ss[.mmm]Z
	 * @param {Date} endDate The period end date. Date time is represented as an ISO-8601 string. For example: yyyy-MM-ddTHH:mm:ss[.mmm]Z
	 */
	getBillingReportsBillableusage(startDate, endDate) { 
		// verify the required parameter 'startDate' is set
		if (startDate === undefined || startDate === null) {
			throw 'Missing the required parameter "startDate" when calling getBillingReportsBillableusage';
		}
		// verify the required parameter 'endDate' is set
		if (endDate === undefined || endDate === null) {
			throw 'Missing the required parameter "endDate" when calling getBillingReportsBillableusage';
		}

		return this.apiClient.callApi(
			'/api/v2/billing/reports/billableusage', 
			'GET', 
			{  }, 
			{ 'startDate': startDate,'endDate': endDate }, 
			{  }, 
			{  }, 
			null, 
			['PureCloud OAuth'], 
			['application/json'], 
			['application/json']
		);
	}

	/**
	 * Get the billing overview for an organization that is managed by a partner.
	 * Tax Disclaimer: Prices returned by this API do not include applicable taxes. It is the responsibility of the customer to pay all taxes that are appropriate in their jurisdiction. See the PureCloud API Documentation in the Developer Center for more information about this API: https://developer.mypurecloud.com/api/rest/v2/
	 * @param {String} trustorOrgId The organization ID of the trustor (customer) organization.
	 * @param {Object} opts Optional parameters
	 * @param {Number} opts.billingPeriodIndex 0 for active period (overview data may change until period closes). 1 for prior completed billing period. 2 for two billing cycles prior, and so on. (default to 0)
	 */
	getBillingTrusteebillingoverviewTrustorOrgId(trustorOrgId, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'trustorOrgId' is set
		if (trustorOrgId === undefined || trustorOrgId === null) {
			throw 'Missing the required parameter "trustorOrgId" when calling getBillingTrusteebillingoverviewTrustorOrgId';
		}

		return this.apiClient.callApi(
			'/api/v2/billing/trusteebillingoverview/{trustorOrgId}', 
			'GET', 
			{ 'trustorOrgId': trustorOrgId }, 
			{ 'billingPeriodIndex': opts['billingPeriodIndex'] }, 
			{  }, 
			{  }, 
			null, 
			['PureCloud OAuth'], 
			['application/json'], 
			['application/json']
		);
	}

}


export default BillingApi;