import ApiClient from '../ApiClient.js';


class BillingApi {
	/**
	 * Billing service.
	 * @module purecloud-platform-client-v2/api/BillingApi
	 * @version 225.0.0
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
	 * Get billing contract
	 * Retrieve a single contract from the system.
	 * @param {String} contractId The contract number.
	 * getBillingContract is a preview method and is subject to both breaking and non-breaking changes at any time without notice
	 */
	getBillingContract(contractId) { 
		// verify the required parameter 'contractId' is set
		if (contractId === undefined || contractId === null || contractId === '') {
			throw 'Missing the required parameter "contractId" when calling getBillingContract';
		}

		return this.apiClient.callApi(
			'/api/v2/billing/contracts/{contractId}', 
			'GET', 
			{ 'contractId': contractId },
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
	 * Get contract billing period
	 * Fetch the billing information for a given Organization by billing period.
	 * @param {String} contractId The contract number.
	 * @param {String} billingPeriodId The Billing Period Id for the Org.
	 * getBillingContractBillingperiod is a preview method and is subject to both breaking and non-breaking changes at any time without notice
	 */
	getBillingContractBillingperiod(contractId, billingPeriodId) { 
		// verify the required parameter 'contractId' is set
		if (contractId === undefined || contractId === null || contractId === '') {
			throw 'Missing the required parameter "contractId" when calling getBillingContractBillingperiod';
		}
		// verify the required parameter 'billingPeriodId' is set
		if (billingPeriodId === undefined || billingPeriodId === null || billingPeriodId === '') {
			throw 'Missing the required parameter "billingPeriodId" when calling getBillingContractBillingperiod';
		}

		return this.apiClient.callApi(
			'/api/v2/billing/contracts/{contractId}/billingperiods/{billingPeriodId}', 
			'GET', 
			{ 'contractId': contractId,'billingPeriodId': billingPeriodId },
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
	 * Get billing contracts
	 * Retrieve a list of contracts stored in the system.
	 * @param {Object} opts Optional parameters
	 * @param {String} opts.before The cursor that points to the start of the set of entities that has been returned.
	 * @param {String} opts.after The cursor that points to the end of the set of entities that has been returned.
	 * @param {String} opts.pageSize Number of entities to return. Maximum of 200.
	 * @param {String} opts.dateStart Start date for the query. Dates are represented as an ISO-8601 string. For example: yyyy-MM-dd
	 * @param {String} opts.dateEnd End date for the query. Dates are represented as an ISO-8601 string. For example: yyyy-MM-dd
	 * @param {Object} opts.status Filter by the status of contracts
	 * @param {String} opts.externalNumber Filter by the unique external number.
	 * getBillingContracts is a preview method and is subject to both breaking and non-breaking changes at any time without notice
	 */
	getBillingContracts(opts) { 
		opts = opts || {};
		

		return this.apiClient.callApi(
			'/api/v2/billing/contracts', 
			'GET', 
			{  },
			{ 'before': opts['before'],'after': opts['after'],'pageSize': opts['pageSize'],'dateStart': opts['dateStart'],'dateEnd': opts['dateEnd'],'status': opts['status'],'externalNumber': opts['externalNumber'] },
			{  },
			{  },
			null, 
			['PureCloud OAuth'], 
			['application/json'],
			['application/json']
		);
	}

	/**
	 * Get invoice document
	 * Fetch the document for a specific invoice.
	 * @param {String} invoiceId invoiceId
	 * getBillingContractsInvoiceDocument is a preview method and is subject to both breaking and non-breaking changes at any time without notice
	 */
	getBillingContractsInvoiceDocument(invoiceId) { 
		// verify the required parameter 'invoiceId' is set
		if (invoiceId === undefined || invoiceId === null || invoiceId === '') {
			throw 'Missing the required parameter "invoiceId" when calling getBillingContractsInvoiceDocument';
		}

		return this.apiClient.callApi(
			'/api/v2/billing/contracts/invoices/{invoiceId}/document', 
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
	 * Get invoice lines
	 * Fetch a list of all bills for the specified account.
	 * @param {String} invoiceId invoiceId
	 * @param {Object} opts Optional parameters
	 * @param {String} opts.before The cursor that points to the start of the set of entities that has been returned.
	 * @param {String} opts.after The cursor that points to the end of the set of entities that has been returned.
	 * @param {String} opts.pageSize Number of entities to return. Maximum of 200.
	 * getBillingContractsInvoiceLines is a preview method and is subject to both breaking and non-breaking changes at any time without notice
	 */
	getBillingContractsInvoiceLines(invoiceId, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'invoiceId' is set
		if (invoiceId === undefined || invoiceId === null || invoiceId === '') {
			throw 'Missing the required parameter "invoiceId" when calling getBillingContractsInvoiceLines';
		}

		return this.apiClient.callApi(
			'/api/v2/billing/contracts/invoices/{invoiceId}/lines', 
			'GET', 
			{ 'invoiceId': invoiceId },
			{ 'before': opts['before'],'after': opts['after'],'pageSize': opts['pageSize'] },
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
	 * @param {String} opts.before The cursor that points to the start of the set of entities that has been returned.
	 * @param {String} opts.after The cursor that points to the end of the set of entities that has been returned.
	 * @param {String} opts.pageSize Number of entities to return. Maximum of 200.
	 * @param {String} opts.dateStart Start date for the query. Dates are represented as an ISO-8601 string. For example: yyyy-MM-dd
	 * @param {String} opts.dateEnd End date for the query. Dates are represented as an ISO-8601 string. For example: yyyy-MM-dd
	 * @param {Object} opts.paymentStatus Payment Status
	 * getBillingContractsInvoices is a preview method and is subject to both breaking and non-breaking changes at any time without notice
	 */
	getBillingContractsInvoices(opts) { 
		opts = opts || {};
		

		return this.apiClient.callApi(
			'/api/v2/billing/contracts/invoices', 
			'GET', 
			{  },
			{ 'before': opts['before'],'after': opts['after'],'pageSize': opts['pageSize'],'dateStart': opts['dateStart'],'dateEnd': opts['dateEnd'],'paymentStatus': opts['paymentStatus'] },
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
	 * Get the billing overview for an organization that is managed by a partner.
	 * Tax Disclaimer: Prices returned by this API do not include applicable taxes. It is the responsibility of the customer to pay all taxes that are appropriate in their jurisdiction. See the PureCloud API Documentation in the Developer Center for more information about this API: https://developer.mypurecloud.com/api/rest/v2/
	 * @param {String} trustorOrgId The organization ID of the trustor (customer) organization.
	 * @param {Object} opts Optional parameters
	 * @param {Number} opts.billingPeriodIndex 0 for active period (overview data may change until period closes). 1 for prior completed billing period. 2 for two billing cycles prior, and so on. (default to 0)
	 */
	getBillingTrusteebillingoverviewTrustorOrgId(trustorOrgId, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'trustorOrgId' is set
		if (trustorOrgId === undefined || trustorOrgId === null || trustorOrgId === '') {
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
