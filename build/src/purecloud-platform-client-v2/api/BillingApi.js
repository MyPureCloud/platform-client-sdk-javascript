import ApiClient from '../ApiClient.js';


class BillingApi {
	/**
	 * Billing service.
	 * @module purecloud-platform-client-v2/api/BillingApi
	 * @version 178.2.0
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
	 * Get billing account.
	 * 
	 * @param {String} accountId Identifies the account to be retrieved
	 * @param {Object} opts Optional parameters
	 * @param {String} opts.fields Fields needed
	 */
	getBillingAccount(accountId, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'accountId' is set
		if (accountId === undefined || accountId === null) {
			throw 'Missing the required parameter "accountId" when calling getBillingAccount';
		}

		return this.apiClient.callApi(
			'/api/v2/billing/accounts/{accountId}', 
			'GET', 
			{ 'accountId': accountId },
			{ 'fields': opts['fields'] },
			{  },
			{  },
			null, 
			['PureCloud OAuth'], 
			['application/json'],
			['application/json']
		);
	}

	/**
	 * Get constumer account.
	 * 
	 */
	getBillingAccount0() { 

		return this.apiClient.callApi(
			'/api/v2/billing/account', 
			'GET', 
			{  },
			{  },
			{  },
			{  },
			null, 
			['PureCloud OAuth'], 
			['application/json'],
			['application/json']
		);
	}

	/**
	 * Get carrier services usage data.
	 * 
	 * @param {Object} opts Optional parameters
	 * @param {Date} opts.from startDateTime. Date time is represented as an ISO-8601 string. For example: yyyy-MM-ddTHH:mm:ss[.mmm]Z
	 * @param {Date} opts.to endDateTime. Date time is represented as an ISO-8601 string. For example: yyyy-MM-ddTHH:mm:ss[.mmm]Z
	 * @param {Number} opts.limit Limit the number of results (default to 50)
	 */
	getBillingCarrierservicesUsageCalls(opts) { 
		opts = opts || {};
		

		return this.apiClient.callApi(
			'/api/v2/billing/carrierservices/usage/calls', 
			'GET', 
			{  },
			{ 'from': opts['from'],'to': opts['to'],'limit': opts['limit'] },
			{  },
			{  },
			null, 
			['PureCloud OAuth'], 
			['application/json'],
			['application/json']
		);
	}

	/**
	 * Get customer free trial information.
	 * 
	 */
	getBillingFreetrial() { 

		return this.apiClient.callApi(
			'/api/v2/billing/freetrial', 
			'GET', 
			{  },
			{  },
			{  },
			{  },
			null, 
			['PureCloud OAuth'], 
			['application/json'],
			['application/json']
		);
	}

	/**
	 * Get invoice.
	 * 
	 * @param {String} invoiceId Identifies the invoice to be retrieved
	 */
	getBillingInvoice(invoiceId) { 
		// verify the required parameter 'invoiceId' is set
		if (invoiceId === undefined || invoiceId === null) {
			throw 'Missing the required parameter "invoiceId" when calling getBillingInvoice';
		}

		return this.apiClient.callApi(
			'/api/v2/billing/invoices/{invoiceId}', 
			'GET', 
			{ 'invoiceId': invoiceId },
			{  },
			{  },
			{  },
			null, 
			['PureCloud OAuth'], 
			['application/json'],
			['application/json']
		);
	}

	/**
	 * Get invoice PDF.
	 * 
	 * @param {String} invoiceId Identifies the invoice PDF to be retrieved
	 */
	getBillingInvoicePdf(invoiceId) { 
		// verify the required parameter 'invoiceId' is set
		if (invoiceId === undefined || invoiceId === null) {
			throw 'Missing the required parameter "invoiceId" when calling getBillingInvoicePdf';
		}

		return this.apiClient.callApi(
			'/api/v2/billing/invoices/{invoiceId}/pdf', 
			'GET', 
			{ 'invoiceId': invoiceId },
			{  },
			{  },
			{  },
			null, 
			['PureCloud OAuth'], 
			['application/json'],
			['application/json']
		);
	}

	/**
	 * Get invoices
	 * Retrieve a list of invoices stored in the system.
	 * @param {Object} opts Optional parameters
	 * @param {Number} opts.pageSize Page size (default to 25)
	 * @param {Number} opts.pageNumber Page number (default to 1)
	 */
	getBillingInvoices(opts) { 
		opts = opts || {};
		

		return this.apiClient.callApi(
			'/api/v2/billing/invoices', 
			'GET', 
			{  },
			{ 'pageSize': opts['pageSize'],'pageNumber': opts['pageNumber'] },
			{  },
			{  },
			null, 
			['PureCloud OAuth'], 
			['application/json'],
			['application/json']
		);
	}

	/**
	 * Get billing periods
	 * Retrieve a list of billing periods stored in the system.
	 * @param {Object} opts Optional parameters
	 * @param {String} opts.periodGranularity Period granularity
	 * @param {Number} opts.pageSize Page size (default to 25)
	 * @param {Number} opts.pageNumber Page number (default to 1)
	 */
	getBillingPeriods(opts) { 
		opts = opts || {};
		

		return this.apiClient.callApi(
			'/api/v2/billing/periods', 
			'GET', 
			{  },
			{ 'periodGranularity': opts['periodGranularity'],'pageSize': opts['pageSize'],'pageNumber': opts['pageNumber'] },
			{  },
			{  },
			null, 
			['PureCloud OAuth'], 
			['application/json'],
			['application/json']
		);
	}

	/**
	 * Get Premium App listing.
	 * 
	 * @param {String} appId Identifies the App ID whose listing should be retrieved
	 */
	getBillingPremiumapplisting(appId) { 
		// verify the required parameter 'appId' is set
		if (appId === undefined || appId === null) {
			throw 'Missing the required parameter "appId" when calling getBillingPremiumapplisting';
		}

		return this.apiClient.callApi(
			'/api/v2/billing/premiumapplistings/{appId}', 
			'GET', 
			{ 'appId': appId },
			{  },
			{  },
			{  },
			null, 
			['PureCloud OAuth'], 
			['application/json'],
			['application/json']
		);
	}

	/**
	 * Get a report of the billable license usages
	 * Report is of the billable usages (e.g. licenses and devices utilized) for a given period. If responses status is InProgress, wait a few seconds, then try the same request again.
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
	 * Get billable usage data report CSV.
	 * 
	 * @param {String} reportId Identifies the report CSV to be retrieved
	 */
	getBillingReportsBillableusagedataReportIdCsv(reportId) { 
		// verify the required parameter 'reportId' is set
		if (reportId === undefined || reportId === null) {
			throw 'Missing the required parameter "reportId" when calling getBillingReportsBillableusagedataReportIdCsv';
		}

		return this.apiClient.callApi(
			'/api/v2/billing/reports/billableusagedata/{reportId}/csv', 
			'GET', 
			{ 'reportId': reportId },
			{  },
			{  },
			{  },
			null, 
			['PureCloud OAuth'], 
			['application/json'],
			['application/json']
		);
	}

	/**
	 * Get concurrent usage data report CSV.
	 * 
	 * @param {String} reportId Identifies the report CSV to be retrieved
	 */
	getBillingReportsConcurrentusagedataReportIdCsv(reportId) { 
		// verify the required parameter 'reportId' is set
		if (reportId === undefined || reportId === null) {
			throw 'Missing the required parameter "reportId" when calling getBillingReportsConcurrentusagedataReportIdCsv';
		}

		return this.apiClient.callApi(
			'/api/v2/billing/reports/concurrentusagedata/{reportId}/csv', 
			'GET', 
			{ 'reportId': reportId },
			{  },
			{  },
			{  },
			null, 
			['PureCloud OAuth'], 
			['application/json'],
			['application/json']
		);
	}

	/**
	 * Get resources usage data report CSV.
	 * 
	 * @param {String} reportId Identifies the report CSV to be retrieved
	 */
	getBillingReportsResourcesusagedataReportIdCsv(reportId) { 
		// verify the required parameter 'reportId' is set
		if (reportId === undefined || reportId === null) {
			throw 'Missing the required parameter "reportId" when calling getBillingReportsResourcesusagedataReportIdCsv';
		}

		return this.apiClient.callApi(
			'/api/v2/billing/reports/resourcesusagedata/{reportId}/csv', 
			'GET', 
			{ 'reportId': reportId },
			{  },
			{  },
			{  },
			null, 
			['PureCloud OAuth'], 
			['application/json'],
			['application/json']
		);
	}

	/**
	 * Get signup free trial for organization
	 * 
	 */
	getBillingSignupFreetrial() { 

		return this.apiClient.callApi(
			'/api/v2/billing/signup/freetrial', 
			'GET', 
			{  },
			{  },
			{  },
			{  },
			null, 
			['PureCloud OAuth'], 
			['application/json'],
			['application/json']
		);
	}

	/**
	 * Get a free trial staging instance
	 * 
	 * @param {String} freeTrialId freeTrialId
	 */
	getBillingSignupFreetrialStagingFreeTrialId(freeTrialId) { 
		// verify the required parameter 'freeTrialId' is set
		if (freeTrialId === undefined || freeTrialId === null) {
			throw 'Missing the required parameter "freeTrialId" when calling getBillingSignupFreetrialStagingFreeTrialId';
		}

		return this.apiClient.callApi(
			'/api/v2/billing/signup/freetrial/staging/{freeTrialId}', 
			'GET', 
			{ 'freeTrialId': freeTrialId },
			{  },
			{  },
			{  },
			null, 
			['PureCloud OAuth'], 
			['application/json'],
			['application/json']
		);
	}

	/**
	 * Get a provisioning record
	 * 
	 * @param {String} provisioningId provisioningId
	 */
	getBillingSignupProvisioningProvisioningId(provisioningId) { 
		// verify the required parameter 'provisioningId' is set
		if (provisioningId === undefined || provisioningId === null) {
			throw 'Missing the required parameter "provisioningId" when calling getBillingSignupProvisioningProvisioningId';
		}

		return this.apiClient.callApi(
			'/api/v2/billing/signup/provisioning/{provisioningId}', 
			'GET', 
			{ 'provisioningId': provisioningId },
			{  },
			{  },
			{  },
			null, 
			['PureCloud OAuth'], 
			['application/json'],
			['application/json']
		);
	}

	/**
	 * Get subscription overview.
	 * 
	 * @param {Object} opts Optional parameters
	 * @param {String} opts.periodEndingTimestamp Period ending timestamp
	 */
	getBillingSubscriptionoverview(opts) { 
		opts = opts || {};
		

		return this.apiClient.callApi(
			'/api/v2/billing/subscriptionoverview', 
			'GET', 
			{  },
			{ 'periodEndingTimestamp': opts['periodEndingTimestamp'] },
			{  },
			{  },
			null, 
			['PureCloud OAuth'], 
			['application/json'],
			['application/json']
		);
	}

	/**
	 * Get the result of an asynchronous billing task.
	 * 
	 * @param {String} taskId Identifies the task result to retrieve
	 */
	getBillingTask(taskId) { 
		// verify the required parameter 'taskId' is set
		if (taskId === undefined || taskId === null) {
			throw 'Missing the required parameter "taskId" when calling getBillingTask';
		}

		return this.apiClient.callApi(
			'/api/v2/billing/tasks/{taskId}', 
			'GET', 
			{ 'taskId': taskId },
			{  },
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

	/**
	 * Get metered app customer usage details.
	 * 
	 * @param {String} organizationId The ID of the customer organization to retrieve or submit usage for.
	 * @param {Object} opts Optional parameters
	 * @param {Object} opts.region Genesys Cloud region (us-east-1, eu-central-1, ap-southeast-2, etc.)
	 * @param {String} opts.appIds Comma-separated list of app IDs to return usage for
	 */
	getBillingVendorusageOrganization(organizationId, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'organizationId' is set
		if (organizationId === undefined || organizationId === null) {
			throw 'Missing the required parameter "organizationId" when calling getBillingVendorusageOrganization';
		}

		return this.apiClient.callApi(
			'/api/v2/billing/vendorusage/organizations/{organizationId}', 
			'GET', 
			{ 'organizationId': organizationId },
			{ 'region': opts['region'],'appIds': opts['appIds'] },
			{  },
			{  },
			null, 
			['PureCloud OAuth'], 
			['application/json'],
			['application/json']
		);
	}

	/**
	 * Get metered app customer usage counts by Genesys Cloud region
	 * 
	 * @param {Object} opts Optional parameters
	 * @param {String} opts.before The cursor that points to the start of the set of entities that has been returned.
	 * @param {String} opts.after The cursor that points to the end of the set of entities that has been returned.
	 * @param {String} opts.pageSize Number of entities to return. Maximum of 200.
	 * @param {Object} opts.region Genesys Cloud region (us-east-1, eu-central-1, ap-southeast-2, etc.)
	 * @param {String} opts.appIds Comma-separated list of app IDs to return usage for
	 */
	getBillingVendorusageOrganizations(opts) { 
		opts = opts || {};
		

		return this.apiClient.callApi(
			'/api/v2/billing/vendorusage/organizations', 
			'GET', 
			{  },
			{ 'before': opts['before'],'after': opts['after'],'pageSize': opts['pageSize'],'region': opts['region'],'appIds': opts['appIds'] },
			{  },
			{  },
			null, 
			['PureCloud OAuth'], 
			['application/json'],
			['application/json']
		);
	}

	/**
	 * Update a free trial staging instance
	 * 
	 * @param {String} freeTrialId freeTrialId
	 * @param {Object} opts Optional parameters
	 * @param {Object} opts.body Input used to update a free trial
	 */
	patchBillingSignupFreetrialStagingFreeTrialId(freeTrialId, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'freeTrialId' is set
		if (freeTrialId === undefined || freeTrialId === null) {
			throw 'Missing the required parameter "freeTrialId" when calling patchBillingSignupFreetrialStagingFreeTrialId';
		}

		return this.apiClient.callApi(
			'/api/v2/billing/signup/freetrial/staging/{freeTrialId}', 
			'PATCH', 
			{ 'freeTrialId': freeTrialId },
			{  },
			{  },
			{  },
			opts['body'], 
			['PureCloud OAuth'], 
			['application/json'],
			['application/json']
		);
	}

	/**
	 * Update a provisioning record
	 * 
	 * @param {String} provisioningId provisioningId
	 * @param {Object} opts Optional parameters
	 * @param {Object} opts.body Input used to update a provisioning record
	 */
	patchBillingSignupProvisioningProvisioningId(provisioningId, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'provisioningId' is set
		if (provisioningId === undefined || provisioningId === null) {
			throw 'Missing the required parameter "provisioningId" when calling patchBillingSignupProvisioningProvisioningId';
		}

		return this.apiClient.callApi(
			'/api/v2/billing/signup/provisioning/{provisioningId}', 
			'PATCH', 
			{ 'provisioningId': provisioningId },
			{  },
			{  },
			{  },
			opts['body'], 
			['PureCloud OAuth'], 
			['application/json'],
			['application/json']
		);
	}

	/**
	 * Apply billing activation
	 * Applies a billing activation job to this org, which activates billing for this customer.
	 * @param {String} billingActivationJobId Identifies the billing activation job to apply
	 */
	postBillingActivation(billingActivationJobId) { 
		// verify the required parameter 'billingActivationJobId' is set
		if (billingActivationJobId === undefined || billingActivationJobId === null) {
			throw 'Missing the required parameter "billingActivationJobId" when calling postBillingActivation';
		}

		return this.apiClient.callApi(
			'/api/v2/billing/activations/{billingActivationJobId}', 
			'POST', 
			{ 'billingActivationJobId': billingActivationJobId },
			{  },
			{  },
			{  },
			null, 
			['PureCloud OAuth'], 
			['application/json'],
			['application/json']
		);
	}

	/**
	 * Get carrier services usage data CSV.
	 * 
	 * @param {Object} opts Optional parameters
	 * @param {Date} opts.from startDateTime. Date time is represented as an ISO-8601 string. For example: yyyy-MM-ddTHH:mm:ss[.mmm]Z
	 * @param {Date} opts.to endDateTime. Date time is represented as an ISO-8601 string. For example: yyyy-MM-ddTHH:mm:ss[.mmm]Z
	 * @param {Number} opts.limit Limit the number of results (default to -1)
	 */
	postBillingCarrierservicesUsageCallsCsv(opts) { 
		opts = opts || {};
		

		return this.apiClient.callApi(
			'/api/v2/billing/carrierservices/usage/calls/csv', 
			'POST', 
			{  },
			{ 'from': opts['from'],'to': opts['to'],'limit': opts['limit'] },
			{  },
			{  },
			null, 
			['PureCloud OAuth'], 
			['application/json'],
			['application/json']
		);
	}

	/**
	 * Request the organization's licensing standing.
	 * 
	 * @param {Object} body SignedBillingData
	 */
	postBillingPremiseLicensestatus(body) { 
		// verify the required parameter 'body' is set
		if (body === undefined || body === null) {
			throw 'Missing the required parameter "body" when calling postBillingPremiseLicensestatus';
		}

		return this.apiClient.callApi(
			'/api/v2/billing/premise/licensestatus', 
			'POST', 
			{  },
			{  },
			{  },
			{  },
			body, 
			['PureCloud OAuth'], 
			['application/json'],
			['application/json']
		);
	}

	/**
	 * Request Upload URL for billing files.
	 * 
	 * @param {Object} body SignedBillingData
	 */
	postBillingPremiseUploadurl(body) { 
		// verify the required parameter 'body' is set
		if (body === undefined || body === null) {
			throw 'Missing the required parameter "body" when calling postBillingPremiseUploadurl';
		}

		return this.apiClient.callApi(
			'/api/v2/billing/premise/uploadurl', 
			'POST', 
			{  },
			{  },
			{  },
			{  },
			body, 
			['PureCloud OAuth'], 
			['application/json'],
			['application/json']
		);
	}

	/**
	 * Activate a Premium App trial.
	 * 
	 * @param {Object} opts Optional parameters
	 * @param {Object} opts.body The Premium App trial details
	 */
	postBillingPremiumapptrials(opts) { 
		opts = opts || {};
		

		return this.apiClient.callApi(
			'/api/v2/billing/premiumapptrials', 
			'POST', 
			{  },
			{  },
			{  },
			{  },
			opts['body'], 
			['PureCloud OAuth'], 
			['application/json'],
			['application/json']
		);
	}

	/**
	 * Get billable usage data report CSV.
	 * Gets the billable usage data report CSV for this customer.
	 * @param {String} reportId Identifies the report CSV to be retrieved
	 */
	postBillingReportsBillableusagedataReportIdCsv(reportId) { 
		// verify the required parameter 'reportId' is set
		if (reportId === undefined || reportId === null) {
			throw 'Missing the required parameter "reportId" when calling postBillingReportsBillableusagedataReportIdCsv';
		}

		return this.apiClient.callApi(
			'/api/v2/billing/reports/billableusagedata/{reportId}/csv', 
			'POST', 
			{ 'reportId': reportId },
			{  },
			{  },
			{  },
			null, 
			['PureCloud OAuth'], 
			['application/json'],
			['application/json']
		);
	}

	/**
	 * Get concurrent data report CSV.
	 * Gets the concurrent data report CSV for this customer.
	 * @param {String} reportId Identifies the report CSV to be retrieved
	 */
	postBillingReportsConcurrentusagedataReportIdCsv(reportId) { 
		// verify the required parameter 'reportId' is set
		if (reportId === undefined || reportId === null) {
			throw 'Missing the required parameter "reportId" when calling postBillingReportsConcurrentusagedataReportIdCsv';
		}

		return this.apiClient.callApi(
			'/api/v2/billing/reports/concurrentusagedata/{reportId}/csv', 
			'POST', 
			{ 'reportId': reportId },
			{  },
			{  },
			{  },
			null, 
			['PureCloud OAuth'], 
			['application/json'],
			['application/json']
		);
	}

	/**
	 * Get hourly license usage data report CSV.
	 * Gets the hourly license usage data report CSV for this customer.
	 * @param {String} reportId Identifies the report CSV to be retrieved
	 */
	postBillingReportsHourlylicenseusagedataReportIdCsv(reportId) { 
		// verify the required parameter 'reportId' is set
		if (reportId === undefined || reportId === null) {
			throw 'Missing the required parameter "reportId" when calling postBillingReportsHourlylicenseusagedataReportIdCsv';
		}

		return this.apiClient.callApi(
			'/api/v2/billing/reports/hourlylicenseusagedata/{reportId}/csv', 
			'POST', 
			{ 'reportId': reportId },
			{  },
			{  },
			{  },
			null, 
			['PureCloud OAuth'], 
			['application/json'],
			['application/json']
		);
	}

	/**
	 * Get resources data report CSV.
	 * Gets the resources data report CSV for this customer.
	 * @param {String} reportId Identifies the report CSV to be retrieved
	 */
	postBillingReportsResourcesusagedataReportIdCsv(reportId) { 
		// verify the required parameter 'reportId' is set
		if (reportId === undefined || reportId === null) {
			throw 'Missing the required parameter "reportId" when calling postBillingReportsResourcesusagedataReportIdCsv';
		}

		return this.apiClient.callApi(
			'/api/v2/billing/reports/resourcesusagedata/{reportId}/csv', 
			'POST', 
			{ 'reportId': reportId },
			{  },
			{  },
			{  },
			null, 
			['PureCloud OAuth'], 
			['application/json'],
			['application/json']
		);
	}

	/**
	 * Create a new free trial staging instance
	 * 
	 * @param {Object} opts Optional parameters
	 * @param {String} opts.utmCampaign Marketing campaign identifier
	 * @param {String} opts.utmSource Source where traffic is coming from
	 * @param {String} opts.utmMedium General channel where the traffic came from
	 * @param {String} opts.utmContent What type of content initiated the event
	 * @param {String} opts.utmTerm Which query term was used to access the page
	 * @param {Object} opts.body Input used to create a free trial
	 */
	postBillingSignupFreetrialStaging(opts) { 
		opts = opts || {};
		

		return this.apiClient.callApi(
			'/api/v2/billing/signup/freetrial/staging', 
			'POST', 
			{  },
			{ 'utmCampaign': opts['utmCampaign'],'utmSource': opts['utmSource'],'utmMedium': opts['utmMedium'],'utmContent': opts['utmContent'],'utmTerm': opts['utmTerm'] },
			{  },
			{  },
			opts['body'], 
			['PureCloud OAuth'], 
			['application/json'],
			['application/json']
		);
	}

	/**
	 * Generates a new OTP code for free trial signup
	 * 
	 * @param {String} freeTrialId freeTrialId
	 * @param {Object} opts Optional parameters
	 * @param {Object} opts.body Input used to activate a free trial
	 */
	postBillingSignupFreetrialStagingFreeTrialIdOtp(freeTrialId, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'freeTrialId' is set
		if (freeTrialId === undefined || freeTrialId === null) {
			throw 'Missing the required parameter "freeTrialId" when calling postBillingSignupFreetrialStagingFreeTrialIdOtp';
		}

		return this.apiClient.callApi(
			'/api/v2/billing/signup/freetrial/staging/{freeTrialId}/otp', 
			'POST', 
			{ 'freeTrialId': freeTrialId },
			{  },
			{  },
			{  },
			opts['body'], 
			['PureCloud OAuth'], 
			['application/json'],
			['application/json']
		);
	}

	/**
	 * Create a new provisioning record
	 * 
	 * @param {Object} opts Optional parameters
	 * @param {String} opts.utmCampaign Marketing campaign identifier
	 * @param {String} opts.utmSource Source where traffic is coming from
	 * @param {String} opts.utmMedium General channel where the traffic came from
	 * @param {String} opts.utmContent What type of content initiated the event
	 * @param {String} opts.utmTerm Which query term was used to access the page
	 * @param {Object} opts.body Input used to create a provisioning
	 */
	postBillingSignupProvisioning(opts) { 
		opts = opts || {};
		

		return this.apiClient.callApi(
			'/api/v2/billing/signup/provisioning', 
			'POST', 
			{  },
			{ 'utmCampaign': opts['utmCampaign'],'utmSource': opts['utmSource'],'utmMedium': opts['utmMedium'],'utmContent': opts['utmContent'],'utmTerm': opts['utmTerm'] },
			{  },
			{  },
			opts['body'], 
			['PureCloud OAuth'], 
			['application/json'],
			['application/json']
		);
	}

	/**
	 * Generates a new OTP code for a provisioning job
	 * 
	 * @param {String} provisioningId provisioningId
	 * @param {Object} opts Optional parameters
	 * @param {Object} opts.body Input used to create a new one-time passcode exchange
	 */
	postBillingSignupProvisioningProvisioningIdOtp(provisioningId, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'provisioningId' is set
		if (provisioningId === undefined || provisioningId === null) {
			throw 'Missing the required parameter "provisioningId" when calling postBillingSignupProvisioningProvisioningIdOtp';
		}

		return this.apiClient.callApi(
			'/api/v2/billing/signup/provisioning/{provisioningId}/otp', 
			'POST', 
			{ 'provisioningId': provisioningId },
			{  },
			{  },
			{  },
			opts['body'], 
			['PureCloud OAuth'], 
			['application/json'],
			['application/json']
		);
	}

	/**
	 * Activate a Subscription Product.
	 * 
	 * @param {Object} opts Optional parameters
	 * @param {Object} opts.body The Subscription Product activation details
	 */
	postBillingSubscriptionproductactivations(opts) { 
		opts = opts || {};
		

		return this.apiClient.callApi(
			'/api/v2/billing/subscriptionproductactivations', 
			'POST', 
			{  },
			{  },
			{  },
			{  },
			opts['body'], 
			['PureCloud OAuth'], 
			['application/json'],
			['application/json']
		);
	}

	/**
	 * Cancel a Subscription Product.
	 * 
	 * @param {Object} opts Optional parameters
	 * @param {Object} opts.body The Subscription Product cancellation details
	 */
	postBillingSubscriptionproductcancellations(opts) { 
		opts = opts || {};
		

		return this.apiClient.callApi(
			'/api/v2/billing/subscriptionproductcancellations', 
			'POST', 
			{  },
			{  },
			{  },
			{  },
			opts['body'], 
			['PureCloud OAuth'], 
			['application/json'],
			['application/json']
		);
	}

	/**
	 * Submit metered app usage data.
	 * 
	 * @param {String} organizationId The ID of the customer organization to retrieve or submit usage for.
	 * @param {Object} opts Optional parameters
	 * @param {Object} opts.body App usage submission detail
	 */
	postBillingVendorusageOrganization(organizationId, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'organizationId' is set
		if (organizationId === undefined || organizationId === null) {
			throw 'Missing the required parameter "organizationId" when calling postBillingVendorusageOrganization';
		}

		return this.apiClient.callApi(
			'/api/v2/billing/vendorusage/organizations/{organizationId}', 
			'POST', 
			{ 'organizationId': organizationId },
			{  },
			{  },
			{  },
			opts['body'], 
			['PureCloud OAuth'], 
			['application/json'],
			['application/json']
		);
	}

	/**
	 * Updates the billing account.
	 * 
	 * @param {String} accountId Identifies the account to be updated
	 * @param {Object} opts Optional parameters
	 * @param {Object} opts.body The account to be updated
	 */
	putBillingAccount(accountId, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'accountId' is set
		if (accountId === undefined || accountId === null) {
			throw 'Missing the required parameter "accountId" when calling putBillingAccount';
		}

		return this.apiClient.callApi(
			'/api/v2/billing/accounts/{accountId}', 
			'PUT', 
			{ 'accountId': accountId },
			{  },
			{  },
			{  },
			opts['body'], 
			['PureCloud OAuth'], 
			['application/json'],
			['application/json']
		);
	}

	/**
	 * Update customer account.
	 * 
	 * @param {Object} opts Optional parameters
	 * @param {Object} opts.body The account to be updated
	 */
	putBillingAccount0(opts) { 
		opts = opts || {};
		

		return this.apiClient.callApi(
			'/api/v2/billing/account', 
			'PUT', 
			{  },
			{  },
			{  },
			{  },
			opts['body'], 
			['PureCloud OAuth'], 
			['application/json'],
			['application/json']
		);
	}

}


export default BillingApi;
